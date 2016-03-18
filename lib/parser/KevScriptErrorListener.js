var antlr = require('antlr4');

function KevScriptErrorListener(syntaxErrorHandler) {
  antlr.error.ErrorListener.call(this);
  this.syntaxErrorHandler = syntaxErrorHandler;
  return this;
}
KevScriptErrorListener.prototype = Object.create(antlr.error.ErrorListener.prototype);
KevScriptErrorListener.prototype.constructor = KevScriptErrorListener;

KevScriptErrorListener.prototype.syntaxError = function () {
  this.syntaxErrorHandler.apply(this, arguments);
};

exports.KevScriptErrorListener = KevScriptErrorListener;
