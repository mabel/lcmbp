var express = require('express')
  , poweredBy = require('connect-powered-by')
  , methodOverride = require('method-override')
  , bodyParser = require('body-parser')
  , config  = require('../')

module.exports = function() {
	if ('development' == this.env) {
		this.use(express.logger());
	}
	this.use(poweredBy('Locomotive'));
	this.use(express.favicon());
	this.use(express.static(__dirname + '/../../public'));
	this.use(bodyParser.json());
	this.use(bodyParser.urlencoded({extended: true}));
	this.use(express.session({ secret: (config.sessionPassword ? config.sessionPassword : "Don't forget to change!")}));
	this.use(methodOverride());
	this.use(this.router);
	this.use(express.errorHandler());
	this.use(this.passport.initialize());
	this.use(this.passport.session());
}
