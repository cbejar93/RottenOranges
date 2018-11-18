const router = require("express").Router();
const movieController = require("../controller/movieController");

router.route("/api/articles")
    .get(movieController.findAll)
    .post(movieController.create);

router.route("/api/articles/:id")
    .delete(movieController.remove);

module.exports = router;