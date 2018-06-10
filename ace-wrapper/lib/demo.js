if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'demo'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'demo'.");
}
if (typeof this['ace-web'] === 'undefined') {
  throw new Error("Error loading module 'demo'. Its dependency 'ace-web' was not found. Please, check whether 'ace-web' is loaded prior to 'demo'.");
}
var demo = function (_, Kotlin, $module$ace_web) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var startWorkerClient = $module$ace_web.ace.startWorkerClient_xa3kb8$;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  var register = $module$ace_web.ace.theme.register_i9tfka$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Theme = $module$ace_web.ace.theme.Theme;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var contains = Kotlin.kotlin.collections.contains_o2f9me$;
  var unboxChar = Kotlin.unboxChar;
  var isWhitespace = Kotlin.kotlin.text.isWhitespace_myv2d0$;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var drop = Kotlin.kotlin.text.drop_6ic1pp$;
  DemoMode.prototype = Object.create(ace_TextMode.prototype);
  DemoMode.prototype.constructor = DemoMode;
  DemoToken$Rule.prototype = Object.create(Enum.prototype);
  DemoToken$Rule.prototype.constructor = DemoToken$Rule;
  DemoToken$Number.prototype = Object.create(DemoToken.prototype);
  DemoToken$Number.prototype.constructor = DemoToken$Number;
  DemoToken$Operator.prototype = Object.create(DemoToken.prototype);
  DemoToken$Operator.prototype.constructor = DemoToken$Operator;
  DemoToken$Parenthesis.prototype = Object.create(DemoToken.prototype);
  DemoToken$Parenthesis.prototype.constructor = DemoToken$Parenthesis;
  DemoToken$Whitespace.prototype = Object.create(DemoToken.prototype);
  DemoToken$Whitespace.prototype.constructor = DemoToken$Whitespace;
  DemoToken$Unknown.prototype = Object.create(DemoToken.prototype);
  DemoToken$Unknown.prototype.constructor = DemoToken$Unknown;
  DemoTokenizer.prototype = Object.create(ace_Tokenizer.prototype);
  DemoTokenizer.prototype.constructor = DemoTokenizer;
  function DemoMode(editor) {
    ace_TextMode.call(this);
    this.editor_0 = editor;
  }
  DemoMode.prototype.getTokenizer = function () {
    return DemoTokenizer_getInstance();
  };
  function DemoMode$createWorker$lambda(this$DemoMode) {
    return function (event) {
      this$DemoMode.editor_0.getSession().setAnnotations(event.data);
      return Unit;
    };
  }
  DemoMode.prototype.createWorker = function (session) {
    println('Creating worker.');
    var $receiver = window.location.href;
    var pathPrefix = Regex_init('[^/]*$').replace_x2uqeu$($receiver, '');
    var client = startWorkerClient('DemoWorker', pathPrefix + '/lib/ace-worker-1.3.1-0/worker-init.js', [pathPrefix + '/lib/kotlin-stdlib-js-1.2.41/kotlin.js', pathPrefix + '/lib/ace-worker-1.3.1-0/ace-classes.js', pathPrefix + '/lib/ace-common-1.3.1-0/ace-common.js', pathPrefix + '/lib/ace-worker-1.3.1-0/ace-worker.js', pathPrefix + '/lib/demo-worker-1.3.1-0/demo-worker.js']);
    client.on('errors', DemoMode$createWorker$lambda(this));
    client.attachToDocument(session.getDocument());
    return client;
  };
  DemoMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DemoMode',
    interfaces: []
  };
  function DemoTheme() {
    DemoTheme_instance = this;
    this.name_0 = 'theme-demo';
    this.id_cmq6mv$_0 = 'ace/theme/theme-demo';
    this.isDark_sakc2a$_0 = true;
    this.cssClass_ca4qf7$_0 = this.name_0;
    this.cssString_80x7y$_0 = trimIndent('\n' + '\n' + '        /* Basic styling of editor */' + '\n' + '\n' + '        .' + this.name_0 + ' {' + '\n' + '            color: #A9B7C6;' + '\n' + '            background: #2B2B2B;' + '\n' + '        }' + '\n' + '\n' + '        .' + this.name_0 + ' .ace_gutter {' + '\n' + '            color: #606366;' + '\n' + '            background: #313335;' + '\n' + '        }' + '\n' + '\n' + '        .' + this.name_0 + ' .ace_cursor {' + '\n' + '            color: #ababab;' + '\n' + '        }' + '\n' + '\n' + '        .' + this.name_0 + ' .ace_marker-layer .ace_selection {' + '\n' + '            background: rgba(221, 240, 255, 0.20);' + '\n' + '        }' + '\n' + '\n' + '        .' + this.name_0 + ' .ace_marker-layer .ace_active-line {' + '\n' + '            background: rgba(255, 255, 255, 0.031);' + '\n' + '        }' + '\n' + '\n' + '        .' + this.name_0 + ' .ace_gutter-active-line {' + '\n' + '            rgba(255, 255, 255, 0.031);' + '\n' + '        }' + '\n' + '\n' + '        /* Styles for our custom tokens */' + '\n' + '\n' + '        .' + this.name_0 + ' .ace_' + DemoToken$Rule$NUMBER_getInstance() + ' {' + '\n' + '            color: #6897BB;' + '\n' + '            fontStyle: italic;' + '\n' + '        }' + '\n' + '\n' + '        .' + this.name_0 + ' .ace_' + DemoToken$Rule$OPERATOR_getInstance() + ' {' + '\n' + '            color: #CC7832;' + '\n' + '            font-style: bold;' + '\n' + '        }' + '\n' + '\n' + '        .' + this.name_0 + ' .ace_' + DemoToken$Rule$PARENTHESIS_getInstance() + ' {' + '\n' + '            font-style: bold;' + '\n' + '        }' + '\n' + '\n' + '        .' + this.name_0 + ' .ace_' + DemoToken$Rule$UNKNOWN_getInstance() + ' {' + '\n' + '            text-decoration: red underline;' + '\n' + '        }' + '\n' + '\n' + '    ');
    register(this);
  }
  Object.defineProperty(DemoTheme.prototype, 'id', {
    get: function () {
      return this.id_cmq6mv$_0;
    }
  });
  Object.defineProperty(DemoTheme.prototype, 'isDark', {
    get: function () {
      return this.isDark_sakc2a$_0;
    }
  });
  Object.defineProperty(DemoTheme.prototype, 'cssClass', {
    get: function () {
      return this.cssClass_ca4qf7$_0;
    }
  });
  Object.defineProperty(DemoTheme.prototype, 'cssString', {
    get: function () {
      return this.cssString_80x7y$_0;
    }
  });
  DemoTheme.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DemoTheme',
    interfaces: [Theme]
  };
  var DemoTheme_instance = null;
  function DemoTheme_getInstance() {
    if (DemoTheme_instance === null) {
      new DemoTheme();
    }
    return DemoTheme_instance;
  }
  function DemoToken() {
  }
  function DemoToken$Rule(name, ordinal, type) {
    Enum.call(this);
    this.type = type;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function DemoToken$Rule_initFields() {
    DemoToken$Rule_initFields = function () {
    };
    DemoToken$Rule$NUMBER_instance = new DemoToken$Rule('NUMBER', 0, 'demo-number');
    DemoToken$Rule$OPERATOR_instance = new DemoToken$Rule('OPERATOR', 1, 'demo-operator');
    DemoToken$Rule$PARENTHESIS_instance = new DemoToken$Rule('PARENTHESIS', 2, 'demo-parenthesis');
    DemoToken$Rule$WHITESPACE_instance = new DemoToken$Rule('WHITESPACE', 3, 'demo-whitespace');
    DemoToken$Rule$UNKNOWN_instance = new DemoToken$Rule('UNKNOWN', 4, 'demo-unknown');
  }
  var DemoToken$Rule$NUMBER_instance;
  function DemoToken$Rule$NUMBER_getInstance() {
    DemoToken$Rule_initFields();
    return DemoToken$Rule$NUMBER_instance;
  }
  var DemoToken$Rule$OPERATOR_instance;
  function DemoToken$Rule$OPERATOR_getInstance() {
    DemoToken$Rule_initFields();
    return DemoToken$Rule$OPERATOR_instance;
  }
  var DemoToken$Rule$PARENTHESIS_instance;
  function DemoToken$Rule$PARENTHESIS_getInstance() {
    DemoToken$Rule_initFields();
    return DemoToken$Rule$PARENTHESIS_instance;
  }
  var DemoToken$Rule$WHITESPACE_instance;
  function DemoToken$Rule$WHITESPACE_getInstance() {
    DemoToken$Rule_initFields();
    return DemoToken$Rule$WHITESPACE_instance;
  }
  var DemoToken$Rule$UNKNOWN_instance;
  function DemoToken$Rule$UNKNOWN_getInstance() {
    DemoToken$Rule_initFields();
    return DemoToken$Rule$UNKNOWN_instance;
  }
  DemoToken$Rule.prototype.toString = function () {
    return this.type;
  };
  DemoToken$Rule.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Rule',
    interfaces: [Enum]
  };
  function DemoToken$Rule$values() {
    return [DemoToken$Rule$NUMBER_getInstance(), DemoToken$Rule$OPERATOR_getInstance(), DemoToken$Rule$PARENTHESIS_getInstance(), DemoToken$Rule$WHITESPACE_getInstance(), DemoToken$Rule$UNKNOWN_getInstance()];
  }
  DemoToken$Rule.values = DemoToken$Rule$values;
  function DemoToken$Rule$valueOf(name) {
    switch (name) {
      case 'NUMBER':
        return DemoToken$Rule$NUMBER_getInstance();
      case 'OPERATOR':
        return DemoToken$Rule$OPERATOR_getInstance();
      case 'PARENTHESIS':
        return DemoToken$Rule$PARENTHESIS_getInstance();
      case 'WHITESPACE':
        return DemoToken$Rule$WHITESPACE_getInstance();
      case 'UNKNOWN':
        return DemoToken$Rule$UNKNOWN_getInstance();
      default:throwISE('No enum constant DemoToken.Rule.' + name);
    }
  }
  DemoToken$Rule.valueOf_61zpoe$ = DemoToken$Rule$valueOf;
  function DemoToken$Number(value) {
    DemoToken.call(this);
    this.value_q53b9y$_0 = value;
    this.type_odod3h$_0 = DemoToken$Rule$NUMBER_getInstance().type;
  }
  Object.defineProperty(DemoToken$Number.prototype, 'value', {
    get: function () {
      return this.value_q53b9y$_0;
    }
  });
  Object.defineProperty(DemoToken$Number.prototype, 'type', {
    get: function () {
      return this.type_odod3h$_0;
    }
  });
  DemoToken$Number.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Number',
    interfaces: [DemoToken]
  };
  DemoToken$Number.prototype.component1 = function () {
    return this.value;
  };
  DemoToken$Number.prototype.copy_61zpoe$ = function (value) {
    return new DemoToken$Number(value === void 0 ? this.value : value);
  };
  DemoToken$Number.prototype.toString = function () {
    return 'Number(value=' + Kotlin.toString(this.value) + ')';
  };
  DemoToken$Number.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  DemoToken$Number.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function DemoToken$Operator(value) {
    DemoToken.call(this);
    this.value_g7nt9h$_0 = value;
    this.type_hseeoe$_0 = DemoToken$Rule$OPERATOR_getInstance().type;
  }
  Object.defineProperty(DemoToken$Operator.prototype, 'value', {
    get: function () {
      return this.value_g7nt9h$_0;
    }
  });
  Object.defineProperty(DemoToken$Operator.prototype, 'type', {
    get: function () {
      return this.type_hseeoe$_0;
    }
  });
  DemoToken$Operator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Operator',
    interfaces: [DemoToken]
  };
  DemoToken$Operator.prototype.component1 = function () {
    return this.value;
  };
  DemoToken$Operator.prototype.copy_61zpoe$ = function (value) {
    return new DemoToken$Operator(value === void 0 ? this.value : value);
  };
  DemoToken$Operator.prototype.toString = function () {
    return 'Operator(value=' + Kotlin.toString(this.value) + ')';
  };
  DemoToken$Operator.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  DemoToken$Operator.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function DemoToken$Parenthesis(value) {
    DemoToken.call(this);
    this.value_peso4n$_0 = value;
    this.type_xj4pqo$_0 = DemoToken$Rule$PARENTHESIS_getInstance().type;
  }
  Object.defineProperty(DemoToken$Parenthesis.prototype, 'value', {
    get: function () {
      return this.value_peso4n$_0;
    }
  });
  Object.defineProperty(DemoToken$Parenthesis.prototype, 'type', {
    get: function () {
      return this.type_xj4pqo$_0;
    }
  });
  DemoToken$Parenthesis.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Parenthesis',
    interfaces: [DemoToken]
  };
  DemoToken$Parenthesis.prototype.component1 = function () {
    return this.value;
  };
  DemoToken$Parenthesis.prototype.copy_61zpoe$ = function (value) {
    return new DemoToken$Parenthesis(value === void 0 ? this.value : value);
  };
  DemoToken$Parenthesis.prototype.toString = function () {
    return 'Parenthesis(value=' + Kotlin.toString(this.value) + ')';
  };
  DemoToken$Parenthesis.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  DemoToken$Parenthesis.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function DemoToken$Whitespace(value) {
    DemoToken.call(this);
    this.value_ngyx9a$_0 = value;
    this.type_9xvndl$_0 = DemoToken$Rule$WHITESPACE_getInstance().type;
  }
  Object.defineProperty(DemoToken$Whitespace.prototype, 'value', {
    get: function () {
      return this.value_ngyx9a$_0;
    }
  });
  Object.defineProperty(DemoToken$Whitespace.prototype, 'type', {
    get: function () {
      return this.type_9xvndl$_0;
    }
  });
  DemoToken$Whitespace.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Whitespace',
    interfaces: [DemoToken]
  };
  DemoToken$Whitespace.prototype.component1 = function () {
    return this.value;
  };
  DemoToken$Whitespace.prototype.copy_61zpoe$ = function (value) {
    return new DemoToken$Whitespace(value === void 0 ? this.value : value);
  };
  DemoToken$Whitespace.prototype.toString = function () {
    return 'Whitespace(value=' + Kotlin.toString(this.value) + ')';
  };
  DemoToken$Whitespace.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  DemoToken$Whitespace.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function DemoToken$Unknown(value) {
    DemoToken.call(this);
    this.value_oufwrf$_0 = value;
    this.type_wwcloc$_0 = DemoToken$Rule$UNKNOWN_getInstance().type;
  }
  Object.defineProperty(DemoToken$Unknown.prototype, 'value', {
    get: function () {
      return this.value_oufwrf$_0;
    }
  });
  Object.defineProperty(DemoToken$Unknown.prototype, 'type', {
    get: function () {
      return this.type_wwcloc$_0;
    }
  });
  DemoToken$Unknown.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Unknown',
    interfaces: [DemoToken]
  };
  DemoToken$Unknown.prototype.component1 = function () {
    return this.value;
  };
  DemoToken$Unknown.prototype.copy_61zpoe$ = function (value) {
    return new DemoToken$Unknown(value === void 0 ? this.value : value);
  };
  DemoToken$Unknown.prototype.toString = function () {
    return 'Unknown(value=' + Kotlin.toString(this.value) + ')';
  };
  DemoToken$Unknown.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  DemoToken$Unknown.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  DemoToken.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DemoToken',
    interfaces: []
  };
  function DemoTokenizer() {
    DemoTokenizer_instance = this;
    ace_Tokenizer.call(this, null);
    this.operators_0 = Kotlin.charArrayOf(43, 45, 42, 47);
  }
  var toBoxedChar = Kotlin.toBoxedChar;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  DemoTokenizer.prototype.getLineTokens = function (line, startState) {
    var tmp$;
    var tokens = ArrayList_init();
    var text = line;
    while (text.length > 0) {
      if (contains(this.operators_0, text.charCodeAt(0)))
        tmp$ = new DemoToken$Operator(String.fromCharCode(text.charCodeAt(0)));
      else if (text.charCodeAt(0) === 40 || text.charCodeAt(0) === 41)
        tmp$ = new DemoToken$Parenthesis(String.fromCharCode(text.charCodeAt(0)));
      else if (isWhitespace(text.charCodeAt(0))) {
        var $receiver = text;
        var takeWhile$result;
        takeWhile$break: do {
          var tmp$_0;
          tmp$_0 = $receiver.length;
          for (var index = 0; index < tmp$_0; index++) {
            if (!isWhitespace(unboxChar(toBoxedChar($receiver.charCodeAt(index))))) {
              takeWhile$result = $receiver.substring(0, index);
              break takeWhile$break;
            }
          }
          takeWhile$result = $receiver;
        }
         while (false);
        var token = takeWhile$result;
        tmp$ = new DemoToken$Whitespace(token);
      }
       else if ((new CharRange(48, 57)).contains_mef7kx$(text.charCodeAt(0))) {
        var $receiver_0 = text;
        var takeWhile$result_0;
        takeWhile$break: do {
          var tmp$_1;
          tmp$_1 = $receiver_0.length;
          for (var index_0 = 0; index_0 < tmp$_1; index_0++) {
            var it = toBoxedChar($receiver_0.charCodeAt(index_0));
            if (!(new CharRange(48, 57)).contains_mef7kx$(unboxChar(it))) {
              takeWhile$result_0 = $receiver_0.substring(0, index_0);
              break takeWhile$break;
            }
          }
          takeWhile$result_0 = $receiver_0;
        }
         while (false);
        var token_0 = takeWhile$result_0;
        tmp$ = new DemoToken$Number(token_0);
      }
       else {
        var $receiver_1 = text;
        var takeWhile$result_1;
        takeWhile$break: do {
          var tmp$_2;
          tmp$_2 = $receiver_1.length;
          for (var index_1 = 0; index_1 < tmp$_2; index_1++) {
            var it_0 = toBoxedChar($receiver_1.charCodeAt(index_1));
            if (!(!(new CharRange(48, 57)).contains_mef7kx$(unboxChar(it_0)) && !contains(this.operators_0, unboxChar(it_0)) && unboxChar(it_0) !== 40 && unboxChar(it_0) !== 41 && !isWhitespace(unboxChar(it_0)))) {
              takeWhile$result_1 = $receiver_1.substring(0, index_1);
              break takeWhile$break;
            }
          }
          takeWhile$result_1 = $receiver_1;
        }
         while (false);
        var token_1 = takeWhile$result_1;
        tmp$ = new DemoToken$Unknown(token_1);
      }
      var token_2 = tmp$;
      tokens.add_11rb$(token_2);
      text = drop(text, token_2.value.length);
    }
    return new DemoTokenizer$DemoTokens(null, copyToArray(tokens));
  };
  function DemoTokenizer$DemoTokens(state, tokens) {
    this.state_33te4g$_0 = state;
    this.tokens_csscdz$_0 = tokens;
  }
  Object.defineProperty(DemoTokenizer$DemoTokens.prototype, 'state', {
    get: function () {
      return this.state_33te4g$_0;
    }
  });
  Object.defineProperty(DemoTokenizer$DemoTokens.prototype, 'tokens', {
    get: function () {
      return this.tokens_csscdz$_0;
    }
  });
  DemoTokenizer$DemoTokens.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DemoTokens',
    interfaces: []
  };
  DemoTokenizer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DemoTokenizer',
    interfaces: []
  };
  var DemoTokenizer_instance = null;
  function DemoTokenizer_getInstance() {
    if (DemoTokenizer_instance === null) {
      new DemoTokenizer();
    }
    return DemoTokenizer_instance;
  }
  function main(args) {
    println('Demo script just started!');
    println('First, we declare a new dark theme for the editor with custom styles for our tokens.');
    var editor = ace.edit('editor');
    editor.setTheme(DemoTheme_getInstance().id);
    println('Next, we want to initialize syntax highlighting. To do this, we need a text mode.');
    var mode = new DemoMode(editor);
    editor.getSession().setMode(mode);
    println("And that's it. Ace will create syntax checking worker on demand once needed...");
  }
  _.DemoMode = DemoMode;
  Object.defineProperty(_, 'DemoTheme', {
    get: DemoTheme_getInstance
  });
  Object.defineProperty(DemoToken$Rule, 'NUMBER', {
    get: DemoToken$Rule$NUMBER_getInstance
  });
  Object.defineProperty(DemoToken$Rule, 'OPERATOR', {
    get: DemoToken$Rule$OPERATOR_getInstance
  });
  Object.defineProperty(DemoToken$Rule, 'PARENTHESIS', {
    get: DemoToken$Rule$PARENTHESIS_getInstance
  });
  Object.defineProperty(DemoToken$Rule, 'WHITESPACE', {
    get: DemoToken$Rule$WHITESPACE_getInstance
  });
  Object.defineProperty(DemoToken$Rule, 'UNKNOWN', {
    get: DemoToken$Rule$UNKNOWN_getInstance
  });
  DemoToken.Rule = DemoToken$Rule;
  DemoToken.Number = DemoToken$Number;
  DemoToken.Operator = DemoToken$Operator;
  DemoToken.Parenthesis = DemoToken$Parenthesis;
  DemoToken.Whitespace = DemoToken$Whitespace;
  DemoToken.Unknown = DemoToken$Unknown;
  _.DemoToken = DemoToken;
  Object.defineProperty(_, 'DemoTokenizer', {
    get: DemoTokenizer_getInstance
  });
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('demo', _);
  return _;
}(typeof demo === 'undefined' ? {} : demo, kotlin, this['ace-web']);
