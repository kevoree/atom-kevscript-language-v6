var autocompleteProvider = require('./providers/autocomplete');
var linterProvider = require('./providers/linter');

module.exports = {
  activate: function() {
    // return autocompleteProvider.loadProperties();
  },
  provide: function() {
    // return autocompleteProvider;
  },
  provideLinter: function() {
    return linterProvider;
  }
};
