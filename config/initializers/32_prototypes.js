var Controller = require('locomotive').Controller
var shortId = require('shortid')
var config  = require('../')

module.exports = function() {
	var app = this
	Controller.prototype.getShortId   = function(){return shortId.generate()}
	Controller.prototype.getAppPrefix = function(){return config.prefix + ':'}
	Controller.prototype.getNewKey    = function(){return this.getAppPrefix() + this.getShortId()}
	Controller.prototype.getRedis     = function(){return app.redis}
	Controller.prototype.getPassport  = function(){return app.passport}
	Controller.prototype.checkKey     = function(){
		var req = this.req;
		var res = this.res;
		if(!req.session || !req.session.user){
		  res.redirect('/nologin');
		  return false;
		}
		return true;
	}
}
