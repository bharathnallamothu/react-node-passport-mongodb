var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

passport.serializeUser(function (user, done) {
	done(null, user);
});

passport.deserializeUser(function (user, done) {
	done(null, user);
});

passport.use(
	new GoogleStrategy(
		{
			clientID: "219213366671-9l1pcib7pd8t63hs01hocgk87mopbh6a.apps.googleusercontent.com",
			clientSecret: "-UwKKFqkufXbWCs-PE-mZMwm",
			callbackURL: "http://localhost:4500/auth/google/callback"
		},
		function (accessToken, refreshToken, profile, done) {
			var userData = {
				email: profile.emails[0].value,
				name: profile.displayName,
				token: accessToken
			};
			done(null, userData);
		}
	)
);
passport.use(new FacebookStrategy({
	clientID: 214644363771802,
	clientSecret: 'e2c2c03a95ee41bac61bfa056c39137a',
	callbackURL: "https://406d14c6f49e.ngrok.io/auth/facebook/callback",
	profileFields: ['id', 'displayName', 'photos', 'email']
},
	function (accessToken, refreshToken, profile, cb) {
		// User.findOrCreate({ facebookId: profile.id }, function (err, user) {
		//   return cb(err, user);
		// });
		var userData = {
			email: profile.emails[0].value,
			name: profile.displayName,
			token: accessToken
		};
		done(null, userData);
	}
));

passport.use(new LinkedInStrategy({
	clientID: '86o0dqngflfta8',
	clientSecret: 'oW20lYSExeiDo0GZ',
	callbackURL: "http://localhost:4500/auth/linkedin/callback",
	scope: ['r_emailaddress', 'r_liteprofile'],
}, function (accessToken, refreshToken, profile, done) {
	// asynchronous verification, for effect...
	process.nextTick(function () {
		// To keep the example simple, the user's LinkedIn profile is returned to
		// represent the logged-in user. In a typical application, you would want
		// to associate the LinkedIn account with a user record in your database,
		// and return that user instead.
		done(null, profile);
	});
}));
