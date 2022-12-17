const mongoose = require("mongoose");

const MagazineSchema = new mongoose.Schema({
    title: String,
    description: String,
    published: Boolean,
    image: String,
    image_ID: String,
});

module.exports = mongoose.model("Magazine", MagazineSchema);
