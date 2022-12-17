const { json } = require("express");
const Blogs = require("../models/blogs");

const getBlogByID = (async (req, res) => {
    try {
        let blog = await Blogs.find({ _id: req.params.id })
        if (!blog)
            res.status(404)
                .send({
                    message: "blog not found!"
                });
        res.status(200)
            .send(blog);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = getBlogByID