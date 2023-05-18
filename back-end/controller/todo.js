import Todo from "../model/Todo.js";

export const todo = async (req, res) => {
  try {
    const { text } = req.params;
    const todo = await Todo.findOne({ text: text });
    res.status(200).send({ data: todo });
  } catch (error) {
    res.status(404).send({ data: error.message });
  }
};

export const toggleTodo = async (req, res) => {
  try {
    const isDone = true;
    const todo = await Todo.findOne({ isDone: isDone});
    res.status(200).send({ data: todo});
  } catch (error) {
    res.status(404).send({ data: error.message });
  }
}

export const getAllTodo = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).send({
      success: true,
      data: todos,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const getTodo = async (req, res) => {
  try {
    const todo = await Todo.findOne({ todo });
    console.log(isMatch);
    if (!isMatch) {
      res.send("error");
    }
    if (todo) {
      {
        res.status(200).send({
          data: todo,
        });
      }
    } else {
      res.status(404).send({
        data: "error 1",
      });
    }
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const create = async (req, res) => {
  try {
    const { text } = await Todo.create(req.body);
    res.status(200).send({
      success: true,
      data: text,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const id  = req.params.id;
    await Todo.findOneAndDelete({ _id: id });
    res.status(200).send({
      success: true,
      data: `Successfully deleted`,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { text } = req.params;
    const todo = await Todo({ text: text }, req.body);
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