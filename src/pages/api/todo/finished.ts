import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "@util/mongodb";
import Todo from "@/models/todo";
import { createSuccessMessage } from "@/util/response";

connectToDatabase();

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { _id } = req.body;
  try {
    const todo = await Todo.findOne({ _id });
    console.log(todo);
    await Todo.findOneAndUpdate(
      { _id },
      { $set: { finished: !todo.finished } }
    );
    res.send(createSuccessMessage({}));
  } catch (error) {
    console.error(error);
  }
}
