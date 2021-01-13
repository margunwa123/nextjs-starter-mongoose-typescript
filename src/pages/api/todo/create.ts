import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "@util/mongodb";
import Todo from "@/models/todo";
import { createFailureMessage, createSuccessMessage } from "@/util/response";

connectToDatabase();

interface ITodo {
  title: string;
  finished: boolean;
  description: string;
}

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const { title, description }: ITodo = req.body;
    const todos = await Todo.create({
      title,
      description,
      finished: false,
    });
    res.status(200).send(createSuccessMessage({}));
  } catch (error) {
    console.error(error);
    res.status(400).send(
      createFailureMessage({
        message: "Failure in creating the todo",
      })
    );
  }
}
