var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');

// Item Model
const User = require('../models/user');



router.get('/register', (req, res) => {
  User.find()
      .then(users => res.json(users))
});



// Register Proccess
router.post('/register', function (req, res) {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;


  let newUser = new User({
      first_name: first_name,
      last_name: last_name,
      email: email,
      username: username,
      password: password
  });

  bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(newUser.password, salt, function (err, hash) {
          if (err) {
              console.log(err);
          }
          newUser.password = hash;
          newUser.save(function (err) {
              if (err) {
                  console.log(err);
                  return;
              }
              else {
                  res.redirect('/users/register');
              }
          });
      });
  });

});


module.exports = router;