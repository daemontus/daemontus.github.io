if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'ace-web'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ace-web'.");
}
this['ace-web'] = function (_, Kotlin) {
  'use strict';
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  function get_ScrollBar_scroll($receiver) {
    return 'scroll';
  }
  function get_EditSession_change($receiver) {
    return 'change';
  }
  function get_EditSession_changeAnnotation($receiver) {
    return 'changeAnnotation';
  }
  function get_EditSession_changeBackMarker($receiver) {
    return 'changeBackMarker';
  }
  function get_EditSession_changeFrontMarker($receiver) {
    return 'changeFrontMarker';
  }
  function get_EditSession_changeBreakpoint($receiver) {
    return 'changeBreakpoint';
  }
  function get_EditSession_changeFold($receiver) {
    return 'changeFold';
  }
  function get_EditSession_changeMode($receiver) {
    return 'changeMode';
  }
  function get_EditSession_changeOverwrite($receiver) {
    return 'changeOverwrite';
  }
  function get_EditSession_changeScrollLeft($receiver) {
    return 'changeScrollLeft';
  }
  function get_EditSession_changeScrollTop($receiver) {
    return 'changeScrollTop';
  }
  function get_EditSession_changeTabSize($receiver) {
    return 'changeTabSize';
  }
  function get_EditSession_changeWrapLimit($receiver) {
    return 'changeWrapLimit';
  }
  function get_EditSession_changeWrapMode($receiver) {
    return 'changeWrapMode';
  }
  function get_EditSession_tokenizerUpdate($receiver) {
    return 'tokenizerUpdate';
  }
  function get_BackgroundTokenizer_update($receiver) {
    return 'update';
  }
  function startWorkerClient(workerClassName, workerInitUrl, dependencies) {
    return new ace_WorkerClient(['ace'], 'ace/worker/' + workerClassName, workerClassName, workerInitUrl, JSON.stringify(dependencies));
  }
  function Theme() {
  }
  Theme.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Theme',
    interfaces: []
  };
  function register$lambda(this$register) {
    return function (f, module_0) {
      module_0.isDark = this$register.isDark;
      module_0.cssClass = this$register.cssClass;
      module_0.cssText = this$register.cssString;
      ace_DOM.importCssString(this$register.cssString, this$register.cssClass);
      return module_0;
    };
  }
  function register($receiver) {
    ace.define($receiver.id, ['require', 'exports'], register$lambda($receiver));
  }
  var package$ace = _.ace || (_.ace = {});
  package$ace.get_ScrollBar_scroll_88l417$ = get_ScrollBar_scroll;
  package$ace.get_EditSession_change_88l417$ = get_EditSession_change;
  package$ace.get_EditSession_changeAnnotation_88l417$ = get_EditSession_changeAnnotation;
  package$ace.get_EditSession_changeBackMarker_88l417$ = get_EditSession_changeBackMarker;
  package$ace.get_EditSession_changeFrontMarker_88l417$ = get_EditSession_changeFrontMarker;
  package$ace.get_EditSession_changeBreakpoint_88l417$ = get_EditSession_changeBreakpoint;
  package$ace.get_EditSession_changeFold_88l417$ = get_EditSession_changeFold;
  package$ace.get_EditSession_changeMode_88l417$ = get_EditSession_changeMode;
  package$ace.get_EditSession_changeOverwrite_88l417$ = get_EditSession_changeOverwrite;
  package$ace.get_EditSession_changeScrollLeft_88l417$ = get_EditSession_changeScrollLeft;
  package$ace.get_EditSession_changeScrollTop_88l417$ = get_EditSession_changeScrollTop;
  package$ace.get_EditSession_changeTabSize_88l417$ = get_EditSession_changeTabSize;
  package$ace.get_EditSession_changeWrapLimit_88l417$ = get_EditSession_changeWrapLimit;
  package$ace.get_EditSession_changeWrapMode_88l417$ = get_EditSession_changeWrapMode;
  package$ace.get_EditSession_tokenizerUpdate_88l417$ = get_EditSession_tokenizerUpdate;
  package$ace.get_BackgroundTokenizer_update_88l417$ = get_BackgroundTokenizer_update;
  package$ace.startWorkerClient_xa3kb8$ = startWorkerClient;
  var package$theme = package$ace.theme || (package$ace.theme = {});
  package$theme.Theme = Theme;
  package$theme.register_i9tfka$ = register;
  Kotlin.defineModule('ace-web', _);
  return _;
}(typeof this['ace-web'] === 'undefined' ? {} : this['ace-web'], kotlin);
