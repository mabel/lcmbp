var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var authController = new Controller();

authController.before('login', function(next) {
	var ctrl = this
	this.__app.passport.authenticate('local', function(err, user, info) {
	if(!err && user) ctrl.req.session.user = user
	next()
	})(this.__req, this.__res, this.__next);
})

authController.login = function() {
    if(!this.checkKey()) return;
    this.res.redirect('/')
}

authController.logout = function() {
	var req = this.req;
    if(req.session) req.session.user = null;
	this.render();
}

module.exports = authController;
