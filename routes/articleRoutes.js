const router = require("express").Router();
const movieController = require("../controller/movieController");
const commentController = require("../controller/commentController");

router.route("/api/articles")
    .get(movieController.findAll)
    .post(movieController.create);

router.route("/api/articles/:id")
    .delete(movieController.remove);

router.route("/api/comment/:id")
    .get()
    .post(commentController.create);

module.exports = router;