import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "@util/mongodb";
import Todo from "@/models/todo";

connectToDatabase();

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const todos = await Todo.find({});
  res.json(todos);
}
