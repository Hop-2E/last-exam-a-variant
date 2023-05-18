import Post from '../model/User.js';
export const getAllUser = async (req, res) => {
  try {
    const user = await Post.find({}).populate('User');
    res.status(200).send({
      data: user,
    });``
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
  console.log('Todo list backend');
};

export const createUser = async (req, res) => {
  try {
    const user = await Post.create(req.body);
    res.status(200).send({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};

export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Post.findById({ _id: id }).populate('Link');
    res.status(200).send({
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      data: error.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Post.deleteOne({ _id: id });
    res.send({
      data: user,
    });
  } catch (error) {
    res.send({
      data: error.message,
    });
  }
};
