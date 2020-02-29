const express = require("express");
const router = express.Router();
const Article = require("../models/article");

router.get("/articles", (req, res) => {
  Article.find((err, articles) => {
    res.json(articles);
  });
});

router.get("/articles/:id", (req, res) => {
  Article.findById(req.params.id, (err, article) => {
    if (!article) {
      res.status(404).send("No result found");
    } else {
      res.json(article);
    }
  });
});

router.post("/articles", (req, res) => {
  let article = new Article(req.body);
  article
    .save()
    .then(article => {
      res.send(article);
    })
    .catch(err => {
      res.status(422).send("Article cannot be added");
    });
});

router.patch("/articles/:id", (req, res) => {
  Article.findByIdAndUpdate(req.params.id, req.body),
    then(() => {
      res.json("Article updated");
    }).catch(err => {
      res.status(422).send("Article could not be updated");
    });
});

router.delete("/articles/:id", (req, res) => {
  Article.findById(req.params.id, (err, article) => {
    if (!article) {
      res.status(404).send("Article not found");
    } else {
      Article.findByIdAndRemove(req.params.id)
        .then(() => {
          res.status(200).json("Article deleted");
        })
        .catch(err => {
          res.status(400).send("Article could not be deleted");
        });
    }
  });
});

module.exports = router