import Post from "../model/Post.js"
export const getAllPost = async (req, res) => {
  try {
    const data = await Post.find({});
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      success: true,
      data: error.message,
    });
  }
};

export const createPost = async (req, res) => {
  const { name} = req.body;
  try {
    const post = await Post.create({
      name: name,
    });

    res.status(200).send({
      success: true,
      data: post,
    });
  } catch (error) {
    console.log(error)
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Post.findByIdAndRemove({ _id: id });
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

