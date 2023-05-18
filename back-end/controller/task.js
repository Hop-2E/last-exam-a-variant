import Task from "../model/Task.js";

export const list = async (req, res) => {
  try {
    const lists = await Task.find({});
    res.status(200).send({
      success: true,
      data: lists,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const add = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).send({
      data: task,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const count = async (req, res) => {
  try {
    const tasks = await Task.find({ isDone: true });
    const count = tasks.length;
    res.status(200).send({
      data: count,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const remove = async (req, res) => {
  try {
    const id = req.headers.id;
    const task = await Task.findByIdAndRemove({ _id: id });
    res.status(200).send({
      success: true,
      data: task,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
export const uptade = async (req, res) => {
  try {
    const id = req.headers.id;
    const task = await Task.findByIdAndUpdate(
      { _id: id },
      {
        text: req.body.text,
      }
    );
    res.status(200).send({
      success: true,
      data: task,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
export const isDone = async (req, res) => {
  try {
    const id = req.headers.id;
    const task = await Task.findByIdAndUpdate(
      { _id: id },
      {
        isDone: req.body.isDone,
      }
    );
    res.status(200).send({
      success: true,
      data: task,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
