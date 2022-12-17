const cloudinary = require("../utils/cloudinary");
const Blog = require("../models/blogs");

const postBlog = (async (req, res) => {
    try {
        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
        // Create new Blog
        let blog = new Blog({
            title: req.body.title,
            content: req.body.content,
            category: req.body.category,
            image: result.secure_url,
            image_ID: result.public_id,
        });
        // save blog details in mongodb
        await blog.save()
        res.status(200)
            .send({

                blog
            });
    } catch (err) {
        res.status(400).send(err);
    }
});
module.exports = postBlog