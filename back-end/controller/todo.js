import Todo from "../model/todo.js";




export const getAllTodo = async (req, res) => {
  try {
    const todo = await Todo.find({})
    res.status(200).send({
      data: todo,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};



export const CreateTodo = async (req, res) => {
    try {


      const todo = await Todo.create({ ...req.body});
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
  

  export const DeleteTodo = async (req, res) => {
    try {
      const {id} = req.params 
      const todo = await Todo.findByIdAndRemove({ _id: id});
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


  export const UpdateTodo = async (req, res) => {
    try {
      const {id} = req.params;
      const todo = await Todo.findByIdAndUpdate(
        { _id: id },
        {
          text: req.body
        }
      );
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