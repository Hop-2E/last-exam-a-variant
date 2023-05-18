import Item from "../model/Item.js";

export const item = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Item.findById({ _id: id });
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
export const text = async (req, res) => {
  try {
    const data = await Item.find({});
    res.status(200).send({
      success: true,
      data: "Todo list backend",
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
    const data = await Item.find({});
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
export const countItem = async (req, res) => {
  try {
    const data = await Item.find({ isDone : true});
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
export const getAllItem = async (req, res) => {

  try {
    const data = await Item.find({});
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
export const createItem = async (req, res) => {
  const { text ,isDone  } = req.body;
  try {
    const data = await Item.create({
      text: text,
      isDone:isDone
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

export const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Item.findByIdAndRemove({ _id: id });
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

export const updateItem = async (req, res) => {
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
