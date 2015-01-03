var redis = require('redis').createClient()
var crypto = require('crypto')
var config  = require('../')
var passport = require('passport')
  , Strategy = require('passport-local').Strategy;

module.exports = function() {

  passport.use(new Strategy({}, function(user, password, done) {
	  redis.get(config.prefix + ':pw:' + user, function(err, val){
		if(err) return done(err)
		var hex = crypto.createHash('sha256').update(password).digest('hex');
		return done(null, hex == val ? user : false);
	  })
  }));
  
  this.passport = passport
  this.redis = redis
}
