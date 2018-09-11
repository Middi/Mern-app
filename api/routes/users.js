var express = require('express');
var router = express.Router();

// Item Model
const Item = require('../models/user');

router.get('/', (req, res) => {
    Item.find()
        .sort({ date: 1 })
        .then(items => res.json(items))
});


router.post('/', (req, res) => {
  const newItem = new Item({
      name: req.body.name,
      password: req.body.date
  });
  newItem.save().then(item => res.json(item));
});

module.exports = router;