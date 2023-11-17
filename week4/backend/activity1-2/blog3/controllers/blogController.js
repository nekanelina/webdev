const Blog = require("../models/blogModel");

// Create a new blog
const createBlog = async (req, res) => {
  try {
    const { title, snippet, body } = req.body;
    if (!title || !snippet || !body) {
      return res
        .status(400)
        .json({ error: "All fields (title, snippet, body) are required" });
    }

    const newBlog = new Blog({ title, snippet, body });
    const savedBlog = await newBlog.save();

    res.status(201).json(savedBlog);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET all blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET a single blog by ID
const getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// DELETE a blog by ID
const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update (Patch) a single blog by ID
const patchBlog = async (req, res) => {
  try {
    const blog = await Blog.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Replace (Put) a single blog by ID
const putBlog = async (req, res) => {
  try {
    const blog = await Blog.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true } // To return the updated document
    );

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createBlog,
  getBlogs,
  getBlog,
  deleteBlog,
  patchBlog,
  putBlog,
};
