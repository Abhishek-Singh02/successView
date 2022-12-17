const { json } = require("express");
const Magazines = require("../models/magazine");

const getMagazineByID = (async (req, res) => {
    console.log(req.query.test ? req.query.test : {})
    try {
        let magazine = await Magazines.find({ _id: req.params.id })
        if (!magazine)
            res.status(404)
                .send({
                    message: "Magazine not found!"
                });
        res.status(200)
            .send(magazine);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = getMagazineByID