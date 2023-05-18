import Task from "../Model/Task.js"
export const getAllTodo = async (req, res) => {
    try {
      const todo = await Task.find({});
      res.status(200).send({
        success: true,
        data: todo,
      });
    } catch (error) {
      res.status(400).send({
        success: true,
        data: error.message,
      });
    }
  };
export const createTodo = async (req, res) => {
    try {
      const todo = await Task.create(req.body);
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
    try {
      const updateTodo = { ...req.body };
      await Task.findByIdAndUpdate({ _id: req.params.id }, req.body);
      res.status(200).send({
        success: true,
        data: updateTodo,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        data: error.message,
      });
    }
  };
  export const removeTodo = async (req, res) => {
    try {
      const todo = await Task.findByIdAndDelete({ _id: req.params.id });
      res.status(200).send({
        success: true,
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
      const updateTodo = { ...req.body };
     const  data = await Task.find({isDone:true });
      res.status(200).send({
        success: true,
        data: data.length,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        data: error.message,
      });
    }
  };
  export const checked = async (req, res) => {
    try {
      const updateTodo = { ...req.body };
      await Task.findByIdAndUpdate({ _id: req.params.id }, req.body);
      res.status(200).send({
        success: true,
        data: updateTodo,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        data: error.message,
      });
    }
  };