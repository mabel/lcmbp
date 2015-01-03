var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var pagesController = new Controller();

pagesController.main = function() {
  if(!this.checkKey()) return;
  this.render();
}

module.exports = pagesController;
