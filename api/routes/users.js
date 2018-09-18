var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');

// Item Model
const User = require('../models/user');



router.get('/login', (req, res) => {
  
});


router.get('/logout', (req, res) => {
  // handle with passport
  res.send('logging out')
});

router.get('/google', (req, res) => {
  // handle with passport
  res.send('logging in with google')
});



router.get('/register', (req, res) => {
    console.log(req.headers)
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
                  res.redirect('http://localhost:3000');
              }
          });
      });
  });

});


module.exports = router;