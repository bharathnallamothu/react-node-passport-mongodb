
var express = require('express');
var passport = require('passport');
var router = express.Router();

import { insertContact } from './contact'

/* GET home page. */
const home = router.get('/', function (req, res, next) {
  res.send('Hey you there....RAT?')
});

// module.exports = router;
/* GET Google Authentication API. */
const google = router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

const googleCallBack = router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/", session: false }), insertContact
);
/* GET Facebook Authentication API. */
const facebook = router.get(
  "/auth/facebook",
  passport.authenticate("facebook", { scope: ['user_friends', 'manage_pages'] })
);

const facebookCallBack = router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/", session: false }), insertContact
);
/* GET linkedIn Authentication API. */
const linkedin = router.get(
  "/auth/linkedin",
  passport.authenticate("linkedin", { scope: ['r_emailaddress', 'r_liteprofile'] })
);

const linkedinCallBack = router.get(
  "/auth/linkedin/callback",
  passport.authenticate("linkedin", { failureRedirect: '/', session: false }), insertContact
);


import contact from './contact';

export default {
  home,
  google,
  googleCallBack,
  facebook,
  facebookCallBack,
  linkedin,
  linkedinCallBack,
  contact
};
