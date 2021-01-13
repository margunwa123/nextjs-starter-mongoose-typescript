import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB;

declare global {
  namespace NodeJS {
    interface Global {
      document: Document;
      window: Window;
      navigator: Navigator;
      mongo: any;
    }
  }
}

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

if (!MONGODB_DB) {
  throw new Error(
    "Please define the MONGODB_DB environment variable inside .env.local"
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
interface IConnection {
  isConnected?: number;
}

const connection: IConnection = {};

// basically a singleton
async function connectToDatabase(): Promise<Boolean> {
  if (connection.isConnected) {
    return true;
  }

  const db = await mongoose.connect(`${MONGODB_URI}/${MONGODB_DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;
  console.log("Database connection code :  " + connection.isConnected);
  return true;
}

export default connectToDatabase;
