const express = require("express");
const router = express.Router();
const Article = require("../models");

router.route("/articles")
    .get(function (req, res) {
        Article.find(function (err, foundArticles) {
            if (!err) {
                res.send(foundArticles);
            } else {
                res.send(err);
            }
        });
    })
    .post(function (req, res) {
        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        });
        newArticle.save(function (err) {
            if (!err) {
                res.send("Succesfully added a new article");
            } else {
                res.send(err);
            }
        });
    })
    .delete(function (req, res) {
        Article.deleteMany(function (err) {
            if (!err) {
                res.send("Successfully deleted all articles");
            } else {
                res.send(err);
            }
        });
    });

//Routes targeting specific articles

router.route("/articles/:articleTitle")

    .get(function (req, res) {
        const articleTitle = req.params.articleTitle;
        Article.findOne({ title: articleTitle }, function (err, article) {
            if (article) {
                const jsonArticle = JSON.stringify(article);
                res.send(jsonArticle);
            } else {
                res.send("No article with that title found.");
            }
        });
    })

    .patch(function (req, res) {
        const articleTitle = req.params.articleTitle;
        Article.update(
            { title: articleTitle },
            { content: req.body.newContent },
            function (err) {
                if (!err) {
                    res.send("Successfully updated selected article.");
                } else {
                    res.send(err);
                }
            });
    })

    .put(function (req, res) {

        const articleTitle = req.params.articleTitle;

        Article.update(
            { title: articleTitle },
            { content: req.body.newContent },
            { overwrite: true },
            function (err) {
                if (!err) {
                    res.send("Successfully updated the content of the selected article.");
                } else {
                    res.send(err);
                }
            });
    })


    .delete(function (req, res) {
        const articleTitle = req.params.articleTitle;
        LostPet.findOneAndDelete({ title: articleTitle }, function (err) {
            if (!err) {
                res.send("Successfully deleted selected article.");
            } else {
                res.send(err);
            }
        });
    });

    module.exports = router;