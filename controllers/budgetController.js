const db = require('../models');
const Budget = require('../models/budget');

module.exports = {
  findAll: function (req, res) {
    db
      .Budget
      .find(req.query)
      .populate("userID")
      .sort({date: -1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllByCategory: function (req, res) {
    db
      .Budget
      .find({category: req.params.category})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db
      .Budget
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log(req.user);
    req.body.userID = req.user._id;
    db
      .Budget
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    req.body.userID = req.user._id;
    db
      .Budget
      .findOneAndUpdate({
      _id: req.params.id
    }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db
      .Budget
      .findById({_id: req.params.id})
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
