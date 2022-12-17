const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    title: String,
    content: String,
    category: String,
    image: String,
    image_ID: String,
});

module.exports = mongoose.model("Blog", BlogSchema);
