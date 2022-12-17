const cloudinary = require("../utils/cloudinary");
const Magazine = require("../models/magazine");

const postMagazines = (async (req, res) => {
    try {
        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
        // Create new magazine
        let magazine = new Magazine({
            title: req.body.title,
            description: req.body.description,
            image: result.secure_url,
            image_ID: result.public_id,
        });
        // save magazine details in mongodb
        await magazine.save();
        res.status(200)
            .send({

                magazine
            });
    } catch (err) {
        console.log(err);
    }
});
module.exports = postMagazines