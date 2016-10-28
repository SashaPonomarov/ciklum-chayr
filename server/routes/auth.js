const express = require('express');
const passport = require('passport');
const Account = require('../models/Account.model');
const router = express.Router();

router.route('/')
  .get(function(req, res) {
    var user = req.user || '';
    return res.json({status: "success", data: {username: user.username}});
  })
  .post(function(req, res, next) {
    passport.authenticate('local', function(err, user, info){
      if (err) {
        return res.status(500).json({status: "error", error: loginErr});
      }
      if (!user) {
        return res.status(404).json({status: "error", error: 'Wrong username or password'});
      }
      req.login( user, function(loginErr){
        if (loginErr) {
          return res.status(500).json({status: "error", error: loginErr});
        }
        return res.json({status: "success", data: {username: user.username}});
      });
    })(req, res, next); 
  })

router.route('/logout')
  .get(function(req, res) {
    req.logout();
    res.json({status: "success"});
  })

// this route can be used if there will be need to register new admin users
// router.post('/register', function(req, res) {
//     Account.register(new Account({ username : req.body.username }), req.body.password, function(err, user) {
//         if (err) {
//             console.log(err);
//             res.status(500).end();
//         }
//     });
// });


module.exports = router;