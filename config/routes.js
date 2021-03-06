// Draw routes.  Locomotive's router provides expressive syntax for drawing
// routes, including support for resourceful routes, namespaces, and nesting.
// MVC routes can be mapped to controllers using convenient
// `controller#action` shorthand.  Standard middleware in the form of
// `function(req, res, next)` is also fully supported.  Consult the Locomotive
// Guide on [routing](http://locomotivejs.org/guide/routing.html) for additional
// information.
module.exports = function routes() {
  this.root('pages#main');
  this.match('/nologin',   'auth#logout');
  this.match('/logout',    'auth#logout');
  this.match('/login',     'auth#login', {via: 'POST'});
  this.match('/user',      'user#push');
  this.match('/user/save', 'user#save',  {via: 'POST'});
}
