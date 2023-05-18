import Todo from "../model/Todo.js";

export const text = async (req, res) => {
  try {
    const text = await Todo.find({});
    res.status(200).send({
      success: true,
      data: text,
    });
  } catch (error) {
    res.status(400).send({
      success: true,
      data: error.message,
    });
  }
};
export const endPoint = async (req, res) => {
  try {
    const data = await Todo.find({});
    res.status(200).send({
      success: true,
      data: "This is test endpoint",
    });
  } catch (error) {
    res.status(400).send({
      success: true,
      data: error.message,
    });
  }
};
export const countTodo = async (req, res) => {
  try {
    const data = await Todo.find({ isDone: true });
    res.status(200).send({
      success: true,
      data: data.length,
    });
  } catch (error) {
    res.status(400).send({
      success: true,
      data: error.message,
    });
  }
};
export const getTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Todo.findById({ _id: id });
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
export const createTodo = async (req, res) => {
  const { text, isDone } = req.body;
  try {
    const data = await Todo.create({
      text: text,
      isDone: isDone,
    });
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const removeTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findByIdAndDelete({ _id: id });
    res.status(200).send({
      success: true,
      data: todo,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
export const updateTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Item.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
