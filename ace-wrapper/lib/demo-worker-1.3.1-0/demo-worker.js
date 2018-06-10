if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'demo-worker'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'demo-worker'.");
}
if (typeof this['ace-common'] === 'undefined') {
  throw new Error("Error loading module 'demo-worker'. Its dependency 'ace-common' was not found. Please, check whether 'ace-common' is loaded prior to 'demo-worker'.");
}
if (typeof this['ace-worker'] === 'undefined') {
  throw new Error("Error loading module 'demo-worker'. Its dependency 'ace-worker' was not found. Please, check whether 'ace-worker' is loaded prior to 'demo-worker'.");
}
this['demo-worker'] = function (_, Kotlin, $module$ace_common, $module$ace_worker) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var AnnotationType = $module$ace_common.ace.AnnotationType;
  var makeGutterAnnotation = $module$ace_common.ace.makeGutterAnnotation_ruaiu7$;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var getKClass = Kotlin.getKClass;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var register = $module$ace_worker.ace.internal.register_2sk2mx$;
  DemoWorker.prototype = Object.create(ace_Mirror.prototype);
  DemoWorker.prototype.constructor = DemoWorker;
  function DemoWorker(sender) {
    ace_Mirror.call(this, sender);
    this.setTimeout(1000);
  }
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var wrapFunction = Kotlin.wrapFunction;
  var Unit = Kotlin.kotlin.Unit;
  var mapIndexedNotNullTo$lambda = wrapFunction(function () {
    return function (closure$transform, closure$destination) {
      return function (index, element) {
        var tmp$;
        if ((tmp$ = closure$transform(index, element)) != null) {
          closure$destination.add_11rb$(tmp$);
        }
        return Unit;
      };
    };
  });
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  DemoWorker.prototype.onUpdate = function () {
    ace_Mirror.prototype.onUpdate.call(this);
    println('Worker update notification... running parenthesis check.');
    var $receiver = this.doc.getAllLines();
    var destination = ArrayList_init();
    var tmp$, tmp$_0;
    var index = 0;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      var tmp$_1;
      var row = (tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0);
      var transform$result;
      transform$break: do {
        try {
          var end = this.checkParentheses_0(item, row, 0);
          if (end !== item.length) {
            throw IllegalStateException_init('Unexpected )'.toString());
          }
          transform$result = null;
        }
         catch (error) {
          if (Kotlin.isType(error, RuntimeException)) {
            transform$result = makeGutterAnnotation(row, AnnotationType.ERROR, error.message);
            break transform$break;
          }
           else
            throw error;
        }
      }
       while (false);
      if ((tmp$_1 = transform$result) != null) {
        destination.add_11rb$(tmp$_1);
      }
    }
    var errors = destination;
    println('Check results: ' + errors.size + ' error(s).');
    this.sender.emit('errors', copyToArray(errors));
  };
  DemoWorker.prototype.checkParentheses_0 = function ($receiver, row, start) {
    var i = start;
    while (i < $receiver.length && $receiver.charCodeAt(i) !== 41) {
      if ($receiver.charCodeAt(i) === 40) {
        i = this.checkParentheses_0($receiver, row, i + 1 | 0);
        if (i >= $receiver.length || $receiver.charCodeAt(i) !== 41) {
          throw IllegalStateException_init('Unclosed ('.toString());
        }
      }
      i = i + 1 | 0;
    }
    return i;
  };
  DemoWorker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DemoWorker',
    interfaces: []
  };
  function main(args) {
    println('Running the worker main method.');
    register(get_js(getKClass(DemoWorker)));
    println('Worker class successfully registered.');
  }
  _.DemoWorker = DemoWorker;
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('demo-worker', _);
  return _;
}(typeof this['demo-worker'] === 'undefined' ? {} : this['demo-worker'], kotlin, this['ace-common'], this['ace-worker']);
