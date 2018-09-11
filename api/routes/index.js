var express = require('express');
var router = express.Router();

// Item Model
const Item = require('../models/item');

router.get('/', (req, res) => {
    Item.find()
        .sort({ date: 1 })
        .then(items => res.json(items))
});


router.post('/', (req, res) => {
  const newUser = new User({
      name: req.body.name,
      date: req.body.date,
      id: req.body.id
  });
  newUser.save().then(user => res.json(user));
});

module.exports = router;