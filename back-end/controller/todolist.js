import TodoList from "../model/Todolist.js";

export const getData = async (req, res) => {
  try {
    const Skip = req.query.skip;
    const Limit = req.query.limit;
    const todolist = await TodoList.find({}).limit(Limit).skip(Skip);
    res.status(200).send({
      data: todolist,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};

export const createList = async (req, res) => {
  try {
    const todolist = await TodoList.create(req.body);
    res.status(200).send({
      data: todolist,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};
export const count = async (req, res) => {
  try {
    const Skip = req.query.skip;
    const Limit = req.query.limit;
    const todolist = await TodoList.find({ done: "true" })
      .limit(Limit)
      .skip(Skip);

    res.status(200).send({
      data: todolist,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};
export const deleteList = async (req, res) => {
  try {
    const { id } = req.params;
    const todolist = await TodoList.findByIdAndRemove({ _id: id });
    res.status(200).send({
      data: todolist,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};
export const updateList = async (req, res) => {
  try {
    const { _id, list } = req.body;
    const todolist = await TodoList.findByIdAndUpdate(
      { _id: _id },
      { list: list }
    );
    res.status(200).send({
      data: todolist,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};
export const updateStatus = async (req, res) => {
  try {
    const { _id, status } = req.body;
    const todolist = await TodoList.findByIdAndUpdate(
      { _id: _id },
      { status: status }
    );
    res.status(200).send({
      data: todolist,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};
export const test = async (req, res) => {
  try {
    res.send({
      data: "This is test endpoint",
    });
  } catch (error) {}
};
export const todolist = async (req, res) => {
  try {
    res.send({
      data: "Todo list backend",
    });
  } catch (error) {}
};
