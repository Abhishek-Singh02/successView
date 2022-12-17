const mongoose = require("mongoose");

const MagazineSchema = new mongoose.Schema({
    title: String,
    description: String,
    published: Boolean,
    blog_ID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Blog"
    },
    image: String,
    image_ID: String,
});

module.exports = mongoose.model("Magazine", MagazineSchema);
