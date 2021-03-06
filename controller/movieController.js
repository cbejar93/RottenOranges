const db = require("../models");

module.exports = {
    create: function(req, res) {
        db.Movie
            // console.log(`${req.body} this is backend req.body || ${res.body} this is back end res.body`)
            .create(req.body)
            .then(dbModal => res.json(dbModal))
            .catch(err => res.status(422).json(err));
    },
    findAll: function(req,res) {
        db.Movie
            .find(req.query).populate("comments")
            .then(dbModal => res.json(dbModal))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res){
        db.Movie
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}