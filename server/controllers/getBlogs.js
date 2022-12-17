const { json } = require("express");
const Blogs = require("../models/blogs");

const getAllBlogs = (async (req, res) => {
    try {
        let blogs = await Blogs.find({})
        if (!blogs)
            res.status(404)
                .send({
                    message: "blogs not found!"
                });
        res.status(200)
            .send(blogs);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = getAllBlogs