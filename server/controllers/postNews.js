const cloudinary = require("../utils/cloudinary");
const Newss = require("../models/news");

const postNews = (async (req, res) => {
    try {
        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
        // Create new Blog
        let News = new Newss({
            title: req.body.title,
            content: req.body.content,
            category: req.body.category,
            date: req.body.date,
            image: result.secure_url,
            image_ID: result.public_id,
        });
        // save News details in mongodb
        await News.save()
        res.status(200)
            .send({
                News
            });
    } catch (err) {
        res.status(400).send(err);
    }
});
module.exports = postNews