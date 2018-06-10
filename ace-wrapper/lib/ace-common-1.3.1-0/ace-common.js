if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'ace-common'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ace-common'.");
}
this['ace-common'] = function (_, Kotlin) {
  'use strict';
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var throwCCE = Kotlin.throwCCE;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  AnnotationType.prototype = Object.create(Enum.prototype);
  AnnotationType.prototype.constructor = AnnotationType;
  function AnnotationType(name, ordinal, string) {
    Enum.call(this);
    this.string = string;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AnnotationType_initFields() {
    AnnotationType_initFields = function () {
    };
    AnnotationType$ERROR_instance = new AnnotationType('ERROR', 0, 'error');
    AnnotationType$WARNING_instance = new AnnotationType('WARNING', 1, 'warning');
    AnnotationType$INFO_instance = new AnnotationType('INFO', 2, 'info');
  }
  var AnnotationType$ERROR_instance;
  function AnnotationType$ERROR_getInstance() {
    AnnotationType_initFields();
    return AnnotationType$ERROR_instance;
  }
  var AnnotationType$WARNING_instance;
  function AnnotationType$WARNING_getInstance() {
    AnnotationType_initFields();
    return AnnotationType$WARNING_instance;
  }
  var AnnotationType$INFO_instance;
  function AnnotationType$INFO_getInstance() {
    AnnotationType_initFields();
    return AnnotationType$INFO_instance;
  }
  AnnotationType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnnotationType',
    interfaces: [Enum]
  };
  function AnnotationType$values() {
    return [AnnotationType$ERROR_getInstance(), AnnotationType$WARNING_getInstance(), AnnotationType$INFO_getInstance()];
  }
  AnnotationType.values = AnnotationType$values;
  function AnnotationType$valueOf(name) {
    switch (name) {
      case 'ERROR':
        return AnnotationType$ERROR_getInstance();
      case 'WARNING':
        return AnnotationType$WARNING_getInstance();
      case 'INFO':
        return AnnotationType$INFO_getInstance();
      default:throwISE('No enum constant ace.AnnotationType.' + name);
    }
  }
  AnnotationType.valueOf_61zpoe$ = AnnotationType$valueOf;
  function makeGutterAnnotation$ObjectLiteral(closure$row, closure$type, closure$text, closure$html) {
    this.row = closure$row;
    this.type = closure$type != null ? closure$type.string : null;
    this.text = closure$text;
    this.html = closure$html;
  }
  makeGutterAnnotation$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function makeGutterAnnotation(row, type, text, html) {
    if (type === void 0)
      type = null;
    if (text === void 0)
      text = null;
    if (html === void 0)
      html = null;
    var tmp$;
    return Kotlin.isType(tmp$ = new makeGutterAnnotation$ObjectLiteral(row, type, text, html), Object) ? tmp$ : throwCCE();
  }
  function Events() {
    Events_instance = this;
  }
  Events.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Events',
    interfaces: []
  };
  var Events_instance = null;
  function Events_getInstance() {
    if (Events_instance === null) {
      new Events();
    }
    return Events_instance;
  }
  function get_Anchor_change($receiver) {
    return 'change';
  }
  function get_Document_change($receiver) {
    return 'change';
  }
  Object.defineProperty(AnnotationType, 'ERROR', {
    get: AnnotationType$ERROR_getInstance
  });
  Object.defineProperty(AnnotationType, 'WARNING', {
    get: AnnotationType$WARNING_getInstance
  });
  Object.defineProperty(AnnotationType, 'INFO', {
    get: AnnotationType$INFO_getInstance
  });
  var package$ace = _.ace || (_.ace = {});
  package$ace.AnnotationType = AnnotationType;
  package$ace.makeGutterAnnotation_ruaiu7$ = makeGutterAnnotation;
  Object.defineProperty(package$ace, 'Events', {
    get: Events_getInstance
  });
  package$ace.get_Anchor_change_88l417$ = get_Anchor_change;
  package$ace.get_Document_change_88l417$ = get_Document_change;
  Kotlin.defineModule('ace-common', _);
  return _;
}(typeof this['ace-common'] === 'undefined' ? {} : this['ace-common'], kotlin);
