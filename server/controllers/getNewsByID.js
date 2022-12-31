const { json } = require("express");
const News = require("../models/news");

const getNewsByID = (async (req, res) => {
    try {
        let news = await News.find({ _id: req.params.id })
        if (!news)
            res.status(404)
                .send({
                    message: "news not found!"
                });
        res.status(200)
            .send(news);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = getNewsByID