var path = require('path');

module.exports = {
  selector: '.source.kevs',
  disableForSelector: '.source.kevs .comment',
  
  getSuggestions: function(arg) {
    completions = [];
    tagCompletions = this.getStatementCompletions({
      bufferPosition: bufferPosition,
      editor: arg.editor,
      prefix: prefix
    });
    completions = completions.concat(tagCompletions);
    return completions;
  },
  getStatementCompletions: function(arg) {
    completions = [];
    if (prefix) {
      ref = this.statements;
      for (i = 0, len = ref.length; i < len; i++) {
        statement = ref[i];
        if (firstCharsEqual(statement.name, prefix)) {
          completions.push(this.buildStatementCompletion(statement));
        }
      }
    }
    return completions;
  },
  buildStatementCompletion: function(statement) {
    return {
      type: 'keyword',
      displayText: statement.name,
      description: statement.description,
      snippet: statement.snippet,
      rightLabel: ''
    };
  },
  dispose: function() {
    this.statements = null;
  },
  loadProperties: function() {
    // fs.readFile(path.resolve(__dirname, '..', '..', 'completions.json'), function(error, content) {
    //   if (error) {
    //     this.statements = JSON.parse(content).statements;
    //   }
    // }.bind(this));
  }
};

firstCharsEqual = function(str1, str2) {
  return str1[0].toLowerCase() === str2[0].toLowerCase();
};
