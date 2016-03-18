var antlr = require('antlr4');
var helpers = require('atom-linter');
var lexer = require('../parser/KevScriptLexer');
var parser = require('../parser/KevScriptParser');
var errorListener = require('../parser/KevScriptErrorListener');

module.exports = {
  name: 'KevScript v6',
  grammarScopes: ['source.kevs'],
  scope: 'file',
  lintOnFly: true,
  lint: function (textEditor) {
    var errors = [];
    var l = new lexer.KevScriptLexer(new antlr.InputStream(textEditor.getText()));
    var p = new parser.KevScriptParser(new antlr.CommonTokenStream(l));
    p.addErrorListener(new errorListener.KevScriptErrorListener(function(recognizer, offendingSymbol, line, col, msg, e) {
      line = line - 1;
      var maxCol = textEditor.getBuffer().lineLengthForRow(line);
      if (col > maxCol) {
        col = maxCol;
      }
      range = helpers.rangeFromLineNumber(textEditor, line, col);

      errors.push({
        type: 'Error',
        text: msg,
        filePath: textEditor.getPath(),
        range: range
      });
    }));
    p.script();
    return errors;
  }
};
