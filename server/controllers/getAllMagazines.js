const { json } = require("express");
const Magazine = require("../models/magazine");

const getAllMagazines = (async (req, res) => {
    try {
        let magazines = await Magazine.find({})
        if (!magazines)
            res.status(404)
                .send({
                    message: "Magazines not found!"
                });
        res.status(200)
            .send(magazines);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = getAllMagazines