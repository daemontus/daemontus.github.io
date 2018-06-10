if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'ace-worker'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ace-worker'.");
}
this['ace-worker'] = function (_, Kotlin) {
  'use strict';
  function register$lambda(this$register, closure$name) {
    return function (f, exports) {
      exports[closure$name] = this$register;
      return exports;
    };
  }
  function register($receiver) {
    var name = $receiver.name;
    define('ace/worker/' + name, ['require', 'exports'], register$lambda($receiver, name));
  }
  var package$ace = _.ace || (_.ace = {});
  var package$internal = package$ace.internal || (package$ace.internal = {});
  package$internal.register_2sk2mx$ = register;
  Kotlin.defineModule('ace-worker', _);
  return _;
}(typeof this['ace-worker'] === 'undefined' ? {} : this['ace-worker'], kotlin);
