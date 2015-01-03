var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var userController = new Controller();

userController.push = function(){
	if(!this.checkKey()) return
	var req = this.req	
	var res = this.res	
	var key = this.getAppPrefix() + 'user:' + req.session.user
	console.log(key)
	this.getRedis().hgetall(key, function(err, obj){
		if(err){
			console.log(err)
			obj = null
		}
		res.json(obj)
	})
}

userController.save = function(){
	console.log('save')
	this.res.json({})
}

module.exports = userController;
