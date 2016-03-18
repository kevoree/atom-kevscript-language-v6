// Generated from grammar/src/main/antlr4/org/kevoree/kevscript/KevScript.g4 by ANTLR 4.5.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by KevScriptParser.
function KevScriptListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

KevScriptListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
KevScriptListener.prototype.constructor = KevScriptListener;

// Enter a parse tree produced by KevScriptParser#script.
KevScriptListener.prototype.enterScript = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#script.
KevScriptListener.prototype.exitScript = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#statement.
KevScriptListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#statement.
KevScriptListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#instance.
KevScriptListener.prototype.enterInstance = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#instance.
KevScriptListener.prototype.exitInstance = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#add.
KevScriptListener.prototype.enterAdd = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#add.
KevScriptListener.prototype.exitAdd = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#remove.
KevScriptListener.prototype.enterRemove = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#remove.
KevScriptListener.prototype.exitRemove = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#start.
KevScriptListener.prototype.enterStart = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#start.
KevScriptListener.prototype.exitStart = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#stop.
KevScriptListener.prototype.enterStop = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#stop.
KevScriptListener.prototype.exitStop = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#set.
KevScriptListener.prototype.enterSet = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#set.
KevScriptListener.prototype.exitSet = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#attach.
KevScriptListener.prototype.enterAttach = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#attach.
KevScriptListener.prototype.exitAttach = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#detach.
KevScriptListener.prototype.enterDetach = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#detach.
KevScriptListener.prototype.exitDetach = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#move.
KevScriptListener.prototype.enterMove = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#move.
KevScriptListener.prototype.exitMove = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#bind.
KevScriptListener.prototype.enterBind = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#bind.
KevScriptListener.prototype.exitBind = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#unbind.
KevScriptListener.prototype.enterUnbind = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#unbind.
KevScriptListener.prototype.exitUnbind = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#letDecl.
KevScriptListener.prototype.enterLetDecl = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#letDecl.
KevScriptListener.prototype.exitLetDecl = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#netinit.
KevScriptListener.prototype.enterNetinit = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#netinit.
KevScriptListener.prototype.exitNetinit = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#netmerge.
KevScriptListener.prototype.enterNetmerge = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#netmerge.
KevScriptListener.prototype.exitNetmerge = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#netremove.
KevScriptListener.prototype.enterNetremove = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#netremove.
KevScriptListener.prototype.exitNetremove = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#metainit.
KevScriptListener.prototype.enterMetainit = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#metainit.
KevScriptListener.prototype.exitMetainit = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#metamerge.
KevScriptListener.prototype.enterMetamerge = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#metamerge.
KevScriptListener.prototype.exitMetamerge = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#metaremove.
KevScriptListener.prototype.enterMetaremove = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#metaremove.
KevScriptListener.prototype.exitMetaremove = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#varIdentifierList.
KevScriptListener.prototype.enterVarIdentifierList = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#varIdentifierList.
KevScriptListener.prototype.exitVarIdentifierList = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#forDecl.
KevScriptListener.prototype.enterForDecl = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#forDecl.
KevScriptListener.prototype.exitForDecl = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#iterable.
KevScriptListener.prototype.enterIterable = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#iterable.
KevScriptListener.prototype.exitIterable = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#forBody.
KevScriptListener.prototype.enterForBody = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#forBody.
KevScriptListener.prototype.exitForBody = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#objectDecl.
KevScriptListener.prototype.enterObjectDecl = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#objectDecl.
KevScriptListener.prototype.exitObjectDecl = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#keyAndValue.
KevScriptListener.prototype.enterKeyAndValue = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#keyAndValue.
KevScriptListener.prototype.exitKeyAndValue = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#arrayDecl.
KevScriptListener.prototype.enterArrayDecl = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#arrayDecl.
KevScriptListener.prototype.exitArrayDecl = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#funcCall.
KevScriptListener.prototype.enterFuncCall = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#funcCall.
KevScriptListener.prototype.exitFuncCall = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#funcDecl.
KevScriptListener.prototype.enterFuncDecl = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#funcDecl.
KevScriptListener.prototype.exitFuncDecl = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#importDecl.
KevScriptListener.prototype.enterImportDecl = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#importDecl.
KevScriptListener.prototype.exitImportDecl = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#funcBody.
KevScriptListener.prototype.enterFuncBody = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#funcBody.
KevScriptListener.prototype.exitFuncBody = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#returnStatement.
KevScriptListener.prototype.enterReturnStatement = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#returnStatement.
KevScriptListener.prototype.exitReturnStatement = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#expression.
KevScriptListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#expression.
KevScriptListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#expressionList.
KevScriptListener.prototype.enterExpressionList = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#expressionList.
KevScriptListener.prototype.exitExpressionList = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#arrayAccess.
KevScriptListener.prototype.enterArrayAccess = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#arrayAccess.
KevScriptListener.prototype.exitArrayAccess = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#contextIdentifier.
KevScriptListener.prototype.enterContextIdentifier = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#contextIdentifier.
KevScriptListener.prototype.exitContextIdentifier = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#contextRef.
KevScriptListener.prototype.enterContextRef = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#contextRef.
KevScriptListener.prototype.exitContextRef = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#identifier.
KevScriptListener.prototype.enterIdentifier = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#identifier.
KevScriptListener.prototype.exitIdentifier = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#identifierList.
KevScriptListener.prototype.enterIdentifierList = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#identifierList.
KevScriptListener.prototype.exitIdentifierList = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#instancePath.
KevScriptListener.prototype.enterInstancePath = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#instancePath.
KevScriptListener.prototype.exitInstancePath = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#portPath.
KevScriptListener.prototype.enterPortPath = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#portPath.
KevScriptListener.prototype.exitPortPath = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#dictionaryPath.
KevScriptListener.prototype.enterDictionaryPath = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#dictionaryPath.
KevScriptListener.prototype.exitDictionaryPath = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#instanceList.
KevScriptListener.prototype.enterInstanceList = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#instanceList.
KevScriptListener.prototype.exitInstanceList = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#portList.
KevScriptListener.prototype.enterPortList = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#portList.
KevScriptListener.prototype.exitPortList = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#type.
KevScriptListener.prototype.enterType = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#type.
KevScriptListener.prototype.exitType = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#typeName.
KevScriptListener.prototype.enterTypeName = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#typeName.
KevScriptListener.prototype.exitTypeName = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#version.
KevScriptListener.prototype.enterVersion = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#version.
KevScriptListener.prototype.exitVersion = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#duVersions.
KevScriptListener.prototype.enterDuVersions = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#duVersions.
KevScriptListener.prototype.exitDuVersions = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#string.
KevScriptListener.prototype.enterString = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#string.
KevScriptListener.prototype.exitString = function(ctx) {
};


// Enter a parse tree produced by KevScriptParser#basic_identifier.
KevScriptListener.prototype.enterBasic_identifier = function(ctx) {
};

// Exit a parse tree produced by KevScriptParser#basic_identifier.
KevScriptListener.prototype.exitBasic_identifier = function(ctx) {
};



exports.KevScriptListener = KevScriptListener;