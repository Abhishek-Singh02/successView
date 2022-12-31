const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
    title: String,
    content: String,
    category: {
        type: String,
    },
    image: String,
    image_ID: String,
    date: String
});

module.exports = mongoose.model("News", NewsSchema);
