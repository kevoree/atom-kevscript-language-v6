// Generated from grammar/src/main/antlr4/org/kevoree/kevscript/KevScript.g4 by ANTLR 4.5.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var KevScriptListener = require('./KevScriptListener').KevScriptListener;
var grammarFileName = "KevScript.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u00038\u0231\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u00042\t2\u0004",
    "3\t3\u00044\t4\u00045\t5\u00046\t6\u0003\u0002\u0007\u0002n\n\u0002",
    "\f\u0002\u000e\u0002q\u000b\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u008c\n",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004\u0092",
    "\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0005\u0004\u009b\n\u0004\u0003\u0005\u0003",
    "\u0005\u0005\u0005\u009f\n\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b",
    "\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u0010\u0005\u0010\u00c9\n\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0005\u0011\u00d4\n\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0005\u0012\u00da\n\u0012\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0005\u0013\u00e6\n\u0013\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u00ec\n\u0014\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u00f2\n\u0015\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0005\u0016\u00fe\n\u0016",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0007\u0017\u0103\n\u0017\f\u0017",
    "\u000e\u0017\u0106\u000b\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0005\u0018\u010d\n\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u011a\n\u0019\u0003",
    "\u001a\u0007\u001a\u011d\n\u001a\f\u001a\u000e\u001a\u0120\u000b\u001a",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0007\u001b\u0126\n",
    "\u001b\f\u001b\u000e\u001b\u0129\u000b\u001b\u0005\u001b\u012b\n\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001d\u0003\u001d\u0005\u001d\u0135\n\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0005\u001e\u013c\n\u001e",
    "\u0003\u001e\u0003\u001e\u0003\u001f\u0005\u001f\u0141\n\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0005\u001f\u0147\n\u001f",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0005\u001f\u014f\n\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0005\u001f\u0156\n\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0005\u001f\u015b\n\u001f\u0003 \u0003 \u0003 \u0005 \u0160",
    "\n \u0003 \u0003 \u0007 \u0164\n \f \u000e \u0167\u000b \u0003 \u0003",
    " \u0003!\u0003!\u0003!\u0005!\u016e\n!\u0003!\u0003!\u0007!\u0172\n",
    "!\f!\u000e!\u0175\u000b!\u0003!\u0003!\u0003\"\u0003\"\u0003\"\u0003",
    "\"\u0005\"\u017d\n\"\u0003\"\u0003\"\u0003\"\u0005\"\u0182\n\"\u0003",
    "#\u0007#\u0185\n#\f#\u000e#\u0188\u000b#\u0003#\u0005#\u018b\n#\u0003",
    "$\u0003$\u0003$\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003",
    "%\u0005%\u0198\n%\u0003%\u0003%\u0003%\u0007%\u019d\n%\f%\u000e%\u01a0",
    "\u000b%\u0003&\u0003&\u0003&\u0007&\u01a5\n&\f&\u000e&\u01a8\u000b&",
    "\u0003\'\u0003\'\u0003\'\u0003\'\u0003(\u0003(\u0003(\u0003(\u0003(",
    "\u0003(\u0003(\u0005(\u01b5\n(\u0005(\u01b7\n(\u0003(\u0003(\u0003(",
    "\u0007(\u01bc\n(\f(\u000e(\u01bf\u000b(\u0003)\u0003)\u0003)\u0003*",
    "\u0003*\u0003*\u0005*\u01c7\n*\u0003*\u0003*\u0003*\u0003*\u0005*\u01cd",
    "\n*\u0003*\u0003*\u0003*\u0003*\u0005*\u01d3\n*\u0003*\u0003*\u0003",
    "*\u0003*\u0005*\u01d9\n*\u0005*\u01db\n*\u0003+\u0003+\u0003+\u0007",
    "+\u01e0\n+\f+\u000e+\u01e3\u000b+\u0003,\u0003,\u0003,\u0005,\u01e8",
    "\n,\u0003-\u0003-\u0003-\u0005-\u01ed\n-\u0003-\u0003-\u0003.\u0003",
    ".\u0003.\u0003.\u0003.\u0005.\u01f6\n.\u0003/\u0003/\u0003/\u0003/\u0003",
    "/\u0007/\u01fd\n/\f/\u000e/\u0200\u000b/\u0003/\u0003/\u0005/\u0204",
    "\n/\u00030\u00030\u00030\u00030\u00030\u00070\u020b\n0\f0\u000e0\u020e",
    "\u000b0\u00030\u00030\u00050\u0212\n0\u00031\u00031\u00031\u00031\u0005",
    "1\u0218\n1\u00051\u021a\n1\u00032\u00032\u00032\u00052\u021f\n2\u0003",
    "2\u00032\u00033\u00033\u00053\u0225\n3\u00034\u00034\u00054\u0229\n",
    "4\u00035\u00035\u00055\u022d\n5\u00036\u00036\u00036\u0002\u0004HN7",
    "\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c",
    "\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bdfhj\u0002\u0003\u0003\u0002",
    "\u0015\u0016\u0256\u0002o\u0003\u0002\u0002\u0002\u0004\u008b\u0003",
    "\u0002\u0002\u0002\u0006\u009a\u0003\u0002\u0002\u0002\b\u009c\u0003",
    "\u0002\u0002\u0002\n\u00a2\u0003\u0002\u0002\u0002\f\u00a5\u0003\u0002",
    "\u0002\u0002\u000e\u00a8\u0003\u0002\u0002\u0002\u0010\u00ab\u0003\u0002",
    "\u0002\u0002\u0012\u00b0\u0003\u0002\u0002\u0002\u0014\u00b4\u0003\u0002",
    "\u0002\u0002\u0016\u00b7\u0003\u0002\u0002\u0002\u0018\u00bb\u0003\u0002",
    "\u0002\u0002\u001a\u00bf\u0003\u0002\u0002\u0002\u001c\u00c3\u0003\u0002",
    "\u0002\u0002\u001e\u00c8\u0003\u0002\u0002\u0002 \u00cf\u0003\u0002",
    "\u0002\u0002\"\u00d5\u0003\u0002\u0002\u0002$\u00e5\u0003\u0002\u0002",
    "\u0002&\u00e7\u0003\u0002\u0002\u0002(\u00ed\u0003\u0002\u0002\u0002",
    "*\u00fd\u0003\u0002\u0002\u0002,\u00ff\u0003\u0002\u0002\u0002.\u0107",
    "\u0003\u0002\u0002\u00020\u0119\u0003\u0002\u0002\u00022\u011e\u0003",
    "\u0002\u0002\u00024\u0121\u0003\u0002\u0002\u00026\u012e\u0003\u0002",
    "\u0002\u00028\u0132\u0003\u0002\u0002\u0002:\u0138\u0003\u0002\u0002",
    "\u0002<\u015a\u0003\u0002\u0002\u0002>\u015c\u0003\u0002\u0002\u0002",
    "@\u016a\u0003\u0002\u0002\u0002B\u0178\u0003\u0002\u0002\u0002D\u0186",
    "\u0003\u0002\u0002\u0002F\u018c\u0003\u0002\u0002\u0002H\u0197\u0003",
    "\u0002\u0002\u0002J\u01a1\u0003\u0002\u0002\u0002L\u01a9\u0003\u0002",
    "\u0002\u0002N\u01b6\u0003\u0002\u0002\u0002P\u01c0\u0003\u0002\u0002",
    "\u0002R\u01da\u0003\u0002\u0002\u0002T\u01dc\u0003\u0002\u0002\u0002",
    "V\u01e4\u0003\u0002\u0002\u0002X\u01ec\u0003\u0002\u0002\u0002Z\u01f0",
    "\u0003\u0002\u0002\u0002\\\u0203\u0003\u0002\u0002\u0002^\u0211\u0003",
    "\u0002\u0002\u0002`\u0213\u0003\u0002\u0002\u0002b\u021e\u0003\u0002",
    "\u0002\u0002d\u0224\u0003\u0002\u0002\u0002f\u0228\u0003\u0002\u0002",
    "\u0002h\u022c\u0003\u0002\u0002\u0002j\u022e\u0003\u0002\u0002\u0002",
    "ln\u0005\u0004\u0003\u0002ml\u0003\u0002\u0002\u0002nq\u0003\u0002\u0002",
    "\u0002om\u0003\u0002\u0002\u0002op\u0003\u0002\u0002\u0002p\u0003\u0003",
    "\u0002\u0002\u0002qo\u0003\u0002\u0002\u0002r\u008c\u0005\u0006\u0004",
    "\u0002s\u008c\u0005\b\u0005\u0002t\u008c\u0005\n\u0006\u0002u\u008c",
    "\u0005\u0012\n\u0002v\u008c\u0005\u0014\u000b\u0002w\u008c\u0005\u0016",
    "\f\u0002x\u008c\u0005\u0018\r\u0002y\u008c\u0005\f\u0007\u0002z\u008c",
    "\u0005\u000e\b\u0002{\u008c\u0005\u0010\t\u0002|\u008c\u0005\u001a\u000e",
    "\u0002}\u008c\u0005\u001c\u000f\u0002~\u008c\u0005 \u0011\u0002\u007f",
    "\u008c\u0005\"\u0012\u0002\u0080\u008c\u0005$\u0013\u0002\u0081\u008c",
    "\u0005&\u0014\u0002\u0082\u008c\u0005(\u0015\u0002\u0083\u008c\u0005",
    "*\u0016\u0002\u0084\u008c\u0005\u001e\u0010\u0002\u0085\u008c\u0005",
    "<\u001f\u0002\u0086\u008c\u0005.\u0018\u0002\u0087\u008c\u0005:\u001e",
    "\u0002\u0088\u008c\u0005B\"\u0002\u0089\u008c\u0005> \u0002\u008a\u008c",
    "\u0005@!\u0002\u008br\u0003\u0002\u0002\u0002\u008bs\u0003\u0002\u0002",
    "\u0002\u008bt\u0003\u0002\u0002\u0002\u008bu\u0003\u0002\u0002\u0002",
    "\u008bv\u0003\u0002\u0002\u0002\u008bw\u0003\u0002\u0002\u0002\u008b",
    "x\u0003\u0002\u0002\u0002\u008by\u0003\u0002\u0002\u0002\u008bz\u0003",
    "\u0002\u0002\u0002\u008b{\u0003\u0002\u0002\u0002\u008b|\u0003\u0002",
    "\u0002\u0002\u008b}\u0003\u0002\u0002\u0002\u008b~\u0003\u0002\u0002",
    "\u0002\u008b\u007f\u0003\u0002\u0002\u0002\u008b\u0080\u0003\u0002\u0002",
    "\u0002\u008b\u0081\u0003\u0002\u0002\u0002\u008b\u0082\u0003\u0002\u0002",
    "\u0002\u008b\u0083\u0003\u0002\u0002\u0002\u008b\u0084\u0003\u0002\u0002",
    "\u0002\u008b\u0085\u0003\u0002\u0002\u0002\u008b\u0086\u0003\u0002\u0002",
    "\u0002\u008b\u0087\u0003\u0002\u0002\u0002\u008b\u0088\u0003\u0002\u0002",
    "\u0002\u008b\u0089\u0003\u0002\u0002\u0002\u008b\u008a\u0003\u0002\u0002",
    "\u0002\u008c\u0005\u0003\u0002\u0002\u0002\u008d\u008e\u0007\u0019\u0002",
    "\u0002\u008e\u008f\u0005j6\u0002\u008f\u0091\u0007\b\u0002\u0002\u0090",
    "\u0092\u0005H%\u0002\u0091\u0090\u0003\u0002\u0002\u0002\u0091\u0092",
    "\u0003\u0002\u0002\u0002\u0092\u0093\u0003\u0002\u0002\u0002\u0093\u0094",
    "\u0005`1\u0002\u0094\u009b\u0003\u0002\u0002\u0002\u0095\u0096\u0007",
    "\u0019\u0002\u0002\u0096\u0097\u0005,\u0017\u0002\u0097\u0098\u0007",
    "\b\u0002\u0002\u0098\u0099\u0005`1\u0002\u0099\u009b\u0003\u0002\u0002",
    "\u0002\u009a\u008d\u0003\u0002\u0002\u0002\u009a\u0095\u0003\u0002\u0002",
    "\u0002\u009b\u0007\u0003\u0002\u0002\u0002\u009c\u009e\u0007\u001a\u0002",
    "\u0002\u009d\u009f\u0005V,\u0002\u009e\u009d\u0003\u0002\u0002\u0002",
    "\u009e\u009f\u0003\u0002\u0002\u0002\u009f\u00a0\u0003\u0002\u0002\u0002",
    "\u00a0\u00a1\u0005\\/\u0002\u00a1\t\u0003\u0002\u0002\u0002\u00a2\u00a3",
    "\u0007\u001e\u0002\u0002\u00a3\u00a4\u0005\\/\u0002\u00a4\u000b\u0003",
    "\u0002\u0002\u0002\u00a5\u00a6\u0007\u001f\u0002\u0002\u00a6\u00a7\u0005",
    "\\/\u0002\u00a7\r\u0003\u0002\u0002\u0002\u00a8\u00a9\u0007 \u0002\u0002",
    "\u00a9\u00aa\u0005\\/\u0002\u00aa\u000f\u0003\u0002\u0002\u0002\u00ab",
    "\u00ac\u0007!\u0002\u0002\u00ac\u00ad\u0005Z.\u0002\u00ad\u00ae\u0007",
    "\b\u0002\u0002\u00ae\u00af\u0005H%\u0002\u00af\u0011\u0003\u0002\u0002",
    "\u0002\u00b0\u00b1\u0007%\u0002\u0002\u00b1\u00b2\u0005R*\u0002\u00b2",
    "\u00b3\u0005R*\u0002\u00b3\u0013\u0003\u0002\u0002\u0002\u00b4\u00b5",
    "\u0007\"\u0002\u0002\u00b5\u00b6\u0005\\/\u0002\u00b6\u0015\u0003\u0002",
    "\u0002\u0002\u00b7\u00b8\u0007#\u0002\u0002\u00b8\u00b9\u0005R*\u0002",
    "\u00b9\u00ba\u0005R*\u0002\u00ba\u0017\u0003\u0002\u0002\u0002\u00bb",
    "\u00bc\u0007$\u0002\u0002\u00bc\u00bd\u0005V,\u0002\u00bd\u00be\u0005",
    "\\/\u0002\u00be\u0019\u0003\u0002\u0002\u0002\u00bf\u00c0\u0007&\u0002",
    "\u0002\u00c0\u00c1\u0005R*\u0002\u00c1\u00c2\u0005^0\u0002\u00c2\u001b",
    "\u0003\u0002\u0002\u0002\u00c3\u00c4\u0007\'\u0002\u0002\u00c4\u00c5",
    "\u0005R*\u0002\u00c5\u00c6\u0005^0\u0002\u00c6\u001d\u0003\u0002\u0002",
    "\u0002\u00c7\u00c9\u0007\u0005\u0002\u0002\u00c8\u00c7\u0003\u0002\u0002",
    "\u0002\u00c8\u00c9\u0003\u0002\u0002\u0002\u00c9\u00ca\u0003\u0002\u0002",
    "\u0002\u00ca\u00cb\u0007(\u0002\u0002\u00cb\u00cc\u0005j6\u0002\u00cc",
    "\u00cd\u0007\b\u0002\u0002\u00cd\u00ce\u0005H%\u0002\u00ce\u001f\u0003",
    "\u0002\u0002\u0002\u00cf\u00d0\u0007+\u0002\u0002\u00d0\u00d3\u0005",
    "R*\u0002\u00d1\u00d4\u00054\u001b\u0002\u00d2\u00d4\u0005R*\u0002\u00d3",
    "\u00d1\u0003\u0002\u0002\u0002\u00d3\u00d2\u0003\u0002\u0002\u0002\u00d4",
    "!\u0003\u0002\u0002\u0002\u00d5\u00d6\u0007,\u0002\u0002\u00d6\u00d9",
    "\u0005R*\u0002\u00d7\u00da\u00054\u001b\u0002\u00d8\u00da\u0005R*\u0002",
    "\u00d9\u00d7\u0003\u0002\u0002\u0002\u00d9\u00d8\u0003\u0002\u0002\u0002",
    "\u00da#\u0003\u0002\u0002\u0002\u00db\u00dc\u0007-\u0002\u0002\u00dc",
    "\u00dd\u0005R*\u0002\u00dd\u00de\u0005R*\u0002\u00de\u00e6\u0003\u0002",
    "\u0002\u0002\u00df\u00e0\u0007-\u0002\u0002\u00e0\u00e1\u0005R*\u0002",
    "\u00e1\u00e2\u0007\u000f\u0002\u0002\u00e2\u00e3\u0005T+\u0002\u00e3",
    "\u00e4\u0007\u0010\u0002\u0002\u00e4\u00e6\u0003\u0002\u0002\u0002\u00e5",
    "\u00db\u0003\u0002\u0002\u0002\u00e5\u00df\u0003\u0002\u0002\u0002\u00e6",
    "%\u0003\u0002\u0002\u0002\u00e7\u00e8\u0007.\u0002\u0002\u00e8\u00eb",
    "\u0005R*\u0002\u00e9\u00ec\u00054\u001b\u0002\u00ea\u00ec\u0005R*\u0002",
    "\u00eb\u00e9\u0003\u0002\u0002\u0002\u00eb\u00ea\u0003\u0002\u0002\u0002",
    "\u00ec\'\u0003\u0002\u0002\u0002\u00ed\u00ee\u0007/\u0002\u0002\u00ee",
    "\u00f1\u0005R*\u0002\u00ef\u00f2\u00054\u001b\u0002\u00f0\u00f2\u0005",
    "R*\u0002\u00f1\u00ef\u0003\u0002\u0002\u0002\u00f1\u00f0\u0003\u0002",
    "\u0002\u0002\u00f2)\u0003\u0002\u0002\u0002\u00f3\u00f4\u00070\u0002",
    "\u0002\u00f4\u00f5\u0005R*\u0002\u00f5\u00f6\u0005R*\u0002\u00f6\u00fe",
    "\u0003\u0002\u0002\u0002\u00f7\u00f8\u00070\u0002\u0002\u00f8\u00f9",
    "\u0005R*\u0002\u00f9\u00fa\u0007\u000f\u0002\u0002\u00fa\u00fb\u0005",
    "T+\u0002\u00fb\u00fc\u0007\u0010\u0002\u0002\u00fc\u00fe\u0003\u0002",
    "\u0002\u0002\u00fd\u00f3\u0003\u0002\u0002\u0002\u00fd\u00f7\u0003\u0002",
    "\u0002\u0002\u00fe+\u0003\u0002\u0002\u0002\u00ff\u0104\u0005j6\u0002",
    "\u0100\u0101\u0007\n\u0002\u0002\u0101\u0103\u0005j6\u0002\u0102\u0100",
    "\u0003\u0002\u0002\u0002\u0103\u0106\u0003\u0002\u0002\u0002\u0104\u0102",
    "\u0003\u0002\u0002\u0002\u0104\u0105\u0003\u0002\u0002\u0002\u0105-",
    "\u0003\u0002\u0002\u0002\u0106\u0104\u0003\u0002\u0002\u0002\u0107\u0108",
    "\u0007\u0017\u0002\u0002\u0108\u010c\u0007\u0014\u0002\u0002\u0109\u010a",
    "\u0005j6\u0002\u010a\u010b\u0007\n\u0002\u0002\u010b\u010d\u0003\u0002",
    "\u0002\u0002\u010c\u0109\u0003\u0002\u0002\u0002\u010c\u010d\u0003\u0002",
    "\u0002\u0002\u010d\u010e\u0003\u0002\u0002\u0002\u010e\u010f\u0005j",
    "6\u0002\u010f\u0110\u0007\u0018\u0002\u0002\u0110\u0111\u00050\u0019",
    "\u0002\u0111\u0112\u0007\u0013\u0002\u0002\u0112\u0113\u0007\u0011\u0002",
    "\u0002\u0113\u0114\u00052\u001a\u0002\u0114\u0115\u0007\u0012\u0002",
    "\u0002\u0115/\u0003\u0002\u0002\u0002\u0116\u011a\u00058\u001d\u0002",
    "\u0117\u011a\u0005R*\u0002\u0118\u011a\u0005N(\u0002\u0119\u0116\u0003",
    "\u0002\u0002\u0002\u0119\u0117\u0003\u0002\u0002\u0002\u0119\u0118\u0003",
    "\u0002\u0002\u0002\u011a1\u0003\u0002\u0002\u0002\u011b\u011d\u0005",
    "\u0004\u0003\u0002\u011c\u011b\u0003\u0002\u0002\u0002\u011d\u0120\u0003",
    "\u0002\u0002\u0002\u011e\u011c\u0003\u0002\u0002\u0002\u011e\u011f\u0003",
    "\u0002\u0002\u0002\u011f3\u0003\u0002\u0002\u0002\u0120\u011e\u0003",
    "\u0002\u0002\u0002\u0121\u012a\u0007\u0011\u0002\u0002\u0122\u0127\u0005",
    "6\u001c\u0002\u0123\u0124\u0007\n\u0002\u0002\u0124\u0126\u00056\u001c",
    "\u0002\u0125\u0123\u0003\u0002\u0002\u0002\u0126\u0129\u0003\u0002\u0002",
    "\u0002\u0127\u0125\u0003\u0002\u0002\u0002\u0127\u0128\u0003\u0002\u0002",
    "\u0002\u0128\u012b\u0003\u0002\u0002\u0002\u0129\u0127\u0003\u0002\u0002",
    "\u0002\u012a\u0122\u0003\u0002\u0002\u0002\u012a\u012b\u0003\u0002\u0002",
    "\u0002\u012b\u012c\u0003\u0002\u0002\u0002\u012c\u012d\u0007\u0012\u0002",
    "\u0002\u012d5\u0003\u0002\u0002\u0002\u012e\u012f\u0005j6\u0002\u012f",
    "\u0130\u0007\t\u0002\u0002\u0130\u0131\u0005H%\u0002\u01317\u0003\u0002",
    "\u0002\u0002\u0132\u0134\u0007\u000f\u0002\u0002\u0133\u0135\u0005J",
    "&\u0002\u0134\u0133\u0003\u0002\u0002\u0002\u0134\u0135\u0003\u0002",
    "\u0002\u0002\u0135\u0136\u0003\u0002\u0002\u0002\u0136\u0137\u0007\u0010",
    "\u0002\u0002\u01379\u0003\u0002\u0002\u0002\u0138\u0139\u0005j6\u0002",
    "\u0139\u013b\u0007\u0014\u0002\u0002\u013a\u013c\u0005J&\u0002\u013b",
    "\u013a\u0003\u0002\u0002\u0002\u013b\u013c\u0003\u0002\u0002\u0002\u013c",
    "\u013d\u0003\u0002\u0002\u0002\u013d\u013e\u0007\u0013\u0002\u0002\u013e",
    ";\u0003\u0002\u0002\u0002\u013f\u0141\u0007\u0005\u0002\u0002\u0140",
    "\u013f\u0003\u0002\u0002\u0002\u0140\u0141\u0003\u0002\u0002\u0002\u0141",
    "\u0142\u0003\u0002\u0002\u0002\u0142\u0143\u0007)\u0002\u0002\u0143",
    "\u0144\u0005j6\u0002\u0144\u0146\u0007\u0014\u0002\u0002\u0145\u0147",
    "\u0005,\u0017\u0002\u0146\u0145\u0003\u0002\u0002\u0002\u0146\u0147",
    "\u0003\u0002\u0002\u0002\u0147\u0148\u0003\u0002\u0002\u0002\u0148\u0149",
    "\u0007\u0013\u0002\u0002\u0149\u014a\u0007\u0011\u0002\u0002\u014a\u014b",
    "\u0005D#\u0002\u014b\u014c\u0007\u0012\u0002\u0002\u014c\u015b\u0003",
    "\u0002\u0002\u0002\u014d\u014f\u0007\u0005\u0002\u0002\u014e\u014d\u0003",
    "\u0002\u0002\u0002\u014e\u014f\u0003\u0002\u0002\u0002\u014f\u0150\u0003",
    "\u0002\u0002\u0002\u0150\u0151\u0007)\u0002\u0002\u0151\u0152\u0007",
    "*\u0002\u0002\u0152\u0153\u0005j6\u0002\u0153\u0155\u0007\u0014\u0002",
    "\u0002\u0154\u0156\u0005,\u0017\u0002\u0155\u0154\u0003\u0002\u0002",
    "\u0002\u0155\u0156\u0003\u0002\u0002\u0002\u0156\u0157\u0003\u0002\u0002",
    "\u0002\u0157\u0158\u0007\u0013\u0002\u0002\u0158\u0159\u00071\u0002",
    "\u0002\u0159\u015b\u0003\u0002\u0002\u0002\u015a\u0140\u0003\u0002\u0002",
    "\u0002\u015a\u014e\u0003\u0002\u0002\u0002\u015b=\u0003\u0002\u0002",
    "\u0002\u015c\u015f\u0007\u001c\u0002\u0002\u015d\u0160\u00074\u0002",
    "\u0002\u015e\u0160\u0005R*\u0002\u015f\u015d\u0003\u0002\u0002\u0002",
    "\u015f\u015e\u0003\u0002\u0002\u0002\u0160\u0161\u0003\u0002\u0002\u0002",
    "\u0161\u0165\u0007\u0011\u0002\u0002\u0162\u0164\u0005\u0004\u0003\u0002",
    "\u0163\u0162\u0003\u0002\u0002\u0002\u0164\u0167\u0003\u0002\u0002\u0002",
    "\u0165\u0163\u0003\u0002\u0002\u0002\u0165\u0166\u0003\u0002\u0002\u0002",
    "\u0166\u0168\u0003\u0002\u0002\u0002\u0167\u0165\u0003\u0002\u0002\u0002",
    "\u0168\u0169\u0007\u0012\u0002\u0002\u0169?\u0003\u0002\u0002\u0002",
    "\u016a\u016d\u0007\u001d\u0002\u0002\u016b\u016e\u00074\u0002\u0002",
    "\u016c\u016e\u0005R*\u0002\u016d\u016b\u0003\u0002\u0002\u0002\u016d",
    "\u016c\u0003\u0002\u0002\u0002\u016e\u016f\u0003\u0002\u0002\u0002\u016f",
    "\u0173\u0007\u0011\u0002\u0002\u0170\u0172\u0005\u0004\u0003\u0002\u0171",
    "\u0170\u0003\u0002\u0002\u0002\u0172\u0175\u0003\u0002\u0002\u0002\u0173",
    "\u0171\u0003\u0002\u0002\u0002\u0173\u0174\u0003\u0002\u0002\u0002\u0174",
    "\u0176\u0003\u0002\u0002\u0002\u0175\u0173\u0003\u0002\u0002\u0002\u0176",
    "\u0177\u0007\u0012\u0002\u0002\u0177A\u0003\u0002\u0002\u0002\u0178",
    "\u017c\u0007\u0004\u0002\u0002\u0179\u017a\u0005,\u0017\u0002\u017a",
    "\u017b\u0007\u0003\u0002\u0002\u017b\u017d\u0003\u0002\u0002\u0002\u017c",
    "\u0179\u0003\u0002\u0002\u0002\u017c\u017d\u0003\u0002\u0002\u0002\u017d",
    "\u017e\u0003\u0002\u0002\u0002\u017e\u0181\u0005h5\u0002\u017f\u0180",
    "\u0007\u001b\u0002\u0002\u0180\u0182\u0005j6\u0002\u0181\u017f\u0003",
    "\u0002\u0002\u0002\u0181\u0182\u0003\u0002\u0002\u0002\u0182C\u0003",
    "\u0002\u0002\u0002\u0183\u0185\u0005\u0004\u0003\u0002\u0184\u0183\u0003",
    "\u0002\u0002\u0002\u0185\u0188\u0003\u0002\u0002\u0002\u0186\u0184\u0003",
    "\u0002\u0002\u0002\u0186\u0187\u0003\u0002\u0002\u0002\u0187\u018a\u0003",
    "\u0002\u0002\u0002\u0188\u0186\u0003\u0002\u0002\u0002\u0189\u018b\u0005",
    "F$\u0002\u018a\u0189\u0003\u0002\u0002\u0002\u018a\u018b\u0003\u0002",
    "\u0002\u0002\u018bE\u0003\u0002\u0002\u0002\u018c\u018d\u0007\u0007",
    "\u0002\u0002\u018d\u018e\u0005H%\u0002\u018eG\u0003\u0002\u0002\u0002",
    "\u018f\u0190\b%\u0001\u0002\u0190\u0198\u0005h5\u0002\u0191\u0198\u0005",
    "4\u001b\u0002\u0192\u0198\u0005P)\u0002\u0193\u0198\u00058\u001d\u0002",
    "\u0194\u0198\u0005R*\u0002\u0195\u0198\u0005V,\u0002\u0196\u0198\u0005",
    "X-\u0002\u0197\u018f\u0003\u0002\u0002\u0002\u0197\u0191\u0003\u0002",
    "\u0002\u0002\u0197\u0192\u0003\u0002\u0002\u0002\u0197\u0193\u0003\u0002",
    "\u0002\u0002\u0197\u0194\u0003\u0002\u0002\u0002\u0197\u0195\u0003\u0002",
    "\u0002\u0002\u0197\u0196\u0003\u0002\u0002\u0002\u0198\u019e\u0003\u0002",
    "\u0002\u0002\u0199\u019a\f\u0007\u0002\u0002\u019a\u019b\u0007\f\u0002",
    "\u0002\u019b\u019d\u0005H%\b\u019c\u0199\u0003\u0002\u0002\u0002\u019d",
    "\u01a0\u0003\u0002\u0002\u0002\u019e\u019c\u0003\u0002\u0002\u0002\u019e",
    "\u019f\u0003\u0002\u0002\u0002\u019fI\u0003\u0002\u0002\u0002\u01a0",
    "\u019e\u0003\u0002\u0002\u0002\u01a1\u01a6\u0005H%\u0002\u01a2\u01a3",
    "\u0007\n\u0002\u0002\u01a3\u01a5\u0005H%\u0002\u01a4\u01a2\u0003\u0002",
    "\u0002\u0002\u01a5\u01a8\u0003\u0002\u0002\u0002\u01a6\u01a4\u0003\u0002",
    "\u0002\u0002\u01a6\u01a7\u0003\u0002\u0002\u0002\u01a7K\u0003\u0002",
    "\u0002\u0002\u01a8\u01a6\u0003\u0002\u0002\u0002\u01a9\u01aa\u0007\u000f",
    "\u0002\u0002\u01aa\u01ab\u00074\u0002\u0002\u01ab\u01ac\u0007\u0010",
    "\u0002\u0002\u01acM\u0003\u0002\u0002\u0002\u01ad\u01ae\b(\u0001\u0002",
    "\u01ae\u01b7\u0005j6\u0002\u01af\u01b7\u0005P)\u0002\u01b0\u01b1\u0005",
    "j6\u0002\u01b1\u01b4\u0005L\'\u0002\u01b2\u01b3\u0007\u000b\u0002\u0002",
    "\u01b3\u01b5\u0005N(\u0002\u01b4\u01b2\u0003\u0002\u0002\u0002\u01b4",
    "\u01b5\u0003\u0002\u0002\u0002\u01b5\u01b7\u0003\u0002\u0002\u0002\u01b6",
    "\u01ad\u0003\u0002\u0002\u0002\u01b6\u01af\u0003\u0002\u0002\u0002\u01b6",
    "\u01b0\u0003\u0002\u0002\u0002\u01b7\u01bd\u0003\u0002\u0002\u0002\u01b8",
    "\u01b9\f\u0003\u0002\u0002\u01b9\u01ba\u0007\u000b\u0002\u0002\u01ba",
    "\u01bc\u0005N(\u0004\u01bb\u01b8\u0003\u0002\u0002\u0002\u01bc\u01bf",
    "\u0003\u0002\u0002\u0002\u01bd\u01bb\u0003\u0002\u0002\u0002\u01bd\u01be",
    "\u0003\u0002\u0002\u0002\u01beO\u0003\u0002\u0002\u0002\u01bf\u01bd",
    "\u0003\u0002\u0002\u0002\u01c0\u01c1\u0007\r\u0002\u0002\u01c1\u01c2",
    "\u0005N(\u0002\u01c2Q\u0003\u0002\u0002\u0002\u01c3\u01c6\u0005j6\u0002",
    "\u01c4\u01c5\u0007\u000b\u0002\u0002\u01c5\u01c7\u0005R*\u0002\u01c6",
    "\u01c4\u0003\u0002\u0002\u0002\u01c6\u01c7\u0003\u0002\u0002\u0002\u01c7",
    "\u01db\u0003\u0002\u0002\u0002\u01c8\u01db\u0005P)\u0002\u01c9\u01cc",
    "\u0005:\u001e\u0002\u01ca\u01cb\u0007\u000b\u0002\u0002\u01cb\u01cd",
    "\u0005R*\u0002\u01cc\u01ca\u0003\u0002\u0002\u0002\u01cc\u01cd\u0003",
    "\u0002\u0002\u0002\u01cd\u01db\u0003\u0002\u0002\u0002\u01ce\u01cf\u0005",
    "j6\u0002\u01cf\u01d2\u0005L\'\u0002\u01d0\u01d1\u0007\u000b\u0002\u0002",
    "\u01d1\u01d3\u0005R*\u0002\u01d2\u01d0\u0003\u0002\u0002\u0002\u01d2",
    "\u01d3\u0003\u0002\u0002\u0002\u01d3\u01db\u0003\u0002\u0002\u0002\u01d4",
    "\u01d5\u0005:\u001e\u0002\u01d5\u01d8\u0005L\'\u0002\u01d6\u01d7\u0007",
    "\u000b\u0002\u0002\u01d7\u01d9\u0005R*\u0002\u01d8\u01d6\u0003\u0002",
    "\u0002\u0002\u01d8\u01d9\u0003\u0002\u0002\u0002\u01d9\u01db\u0003\u0002",
    "\u0002\u0002\u01da\u01c3\u0003\u0002\u0002\u0002\u01da\u01c8\u0003\u0002",
    "\u0002\u0002\u01da\u01c9\u0003\u0002\u0002\u0002\u01da\u01ce\u0003\u0002",
    "\u0002\u0002\u01da\u01d4\u0003\u0002\u0002\u0002\u01dbS\u0003\u0002",
    "\u0002\u0002\u01dc\u01e1\u0005R*\u0002\u01dd\u01de\u0007\n\u0002\u0002",
    "\u01de\u01e0\u0005R*\u0002\u01df\u01dd\u0003\u0002\u0002\u0002\u01e0",
    "\u01e3\u0003\u0002\u0002\u0002\u01e1\u01df\u0003\u0002\u0002\u0002\u01e1",
    "\u01e2\u0003\u0002\u0002\u0002\u01e2U\u0003\u0002\u0002\u0002\u01e3",
    "\u01e1\u0003\u0002\u0002\u0002\u01e4\u01e7\u0005R*\u0002\u01e5\u01e6",
    "\u0007\t\u0002\u0002\u01e6\u01e8\u0005R*\u0002\u01e7\u01e5\u0003\u0002",
    "\u0002\u0002\u01e7\u01e8\u0003\u0002\u0002\u0002\u01e8W\u0003\u0002",
    "\u0002\u0002\u01e9\u01ea\u0005V,\u0002\u01ea\u01eb\t\u0002\u0002\u0002",
    "\u01eb\u01ed\u0003\u0002\u0002\u0002\u01ec\u01e9\u0003\u0002\u0002\u0002",
    "\u01ec\u01ed\u0003\u0002\u0002\u0002\u01ed\u01ee\u0003\u0002\u0002\u0002",
    "\u01ee\u01ef\u0005R*\u0002\u01efY\u0003\u0002\u0002\u0002\u01f0\u01f1",
    "\u0005V,\u0002\u01f1\u01f2\u0007\u0006\u0002\u0002\u01f2\u01f5\u0005",
    "R*\u0002\u01f3\u01f4\u0007\u000e\u0002\u0002\u01f4\u01f6\u0005R*\u0002",
    "\u01f5\u01f3\u0003\u0002\u0002\u0002\u01f5\u01f6\u0003\u0002\u0002\u0002",
    "\u01f6[\u0003\u0002\u0002\u0002\u01f7\u0204\u0005V,\u0002\u01f8\u01f9",
    "\u0007\u000f\u0002\u0002\u01f9\u01fe\u0005V,\u0002\u01fa\u01fb\u0007",
    "\n\u0002\u0002\u01fb\u01fd\u0005V,\u0002\u01fc\u01fa\u0003\u0002\u0002",
    "\u0002\u01fd\u0200\u0003\u0002\u0002\u0002\u01fe\u01fc\u0003\u0002\u0002",
    "\u0002\u01fe\u01ff\u0003\u0002\u0002\u0002\u01ff\u0201\u0003\u0002\u0002",
    "\u0002\u0200\u01fe\u0003\u0002\u0002\u0002\u0201\u0202\u0007\u0010\u0002",
    "\u0002\u0202\u0204\u0003\u0002\u0002\u0002\u0203\u01f7\u0003\u0002\u0002",
    "\u0002\u0203\u01f8\u0003\u0002\u0002\u0002\u0204]\u0003\u0002\u0002",
    "\u0002\u0205\u0212\u0005X-\u0002\u0206\u0207\u0007\u000f\u0002\u0002",
    "\u0207\u020c\u0005X-\u0002\u0208\u0209\u0007\n\u0002\u0002\u0209\u020b",
    "\u0005X-\u0002\u020a\u0208\u0003\u0002\u0002\u0002\u020b\u020e\u0003",
    "\u0002\u0002\u0002\u020c\u020a\u0003\u0002\u0002\u0002\u020c\u020d\u0003",
    "\u0002\u0002\u0002\u020d\u020f\u0003\u0002\u0002\u0002\u020e\u020c\u0003",
    "\u0002\u0002\u0002\u020f\u0210\u0007\u0010\u0002\u0002\u0210\u0212\u0003",
    "\u0002\u0002\u0002\u0211\u0205\u0003\u0002\u0002\u0002\u0211\u0206\u0003",
    "\u0002\u0002\u0002\u0212_\u0003\u0002\u0002\u0002\u0213\u0219\u0005",
    "b2\u0002\u0214\u0215\u0007\u000e\u0002\u0002\u0215\u0217\u0005d3\u0002",
    "\u0216\u0218\u0005f4\u0002\u0217\u0216\u0003\u0002\u0002\u0002\u0217",
    "\u0218\u0003\u0002\u0002\u0002\u0218\u021a\u0003\u0002\u0002\u0002\u0219",
    "\u0214\u0003\u0002\u0002\u0002\u0219\u021a\u0003\u0002\u0002\u0002\u021a",
    "a\u0003\u0002\u0002\u0002\u021b\u021c\u0005j6\u0002\u021c\u021d\u0007",
    "\u000b\u0002\u0002\u021d\u021f\u0003\u0002\u0002\u0002\u021e\u021b\u0003",
    "\u0002\u0002\u0002\u021e\u021f\u0003\u0002\u0002\u0002\u021f\u0220\u0003",
    "\u0002\u0002\u0002\u0220\u0221\u0005j6\u0002\u0221c\u0003\u0002\u0002",
    "\u0002\u0222\u0225\u00074\u0002\u0002\u0223\u0225\u0005R*\u0002\u0224",
    "\u0222\u0003\u0002\u0002\u0002\u0224\u0223\u0003\u0002\u0002\u0002\u0225",
    "e\u0003\u0002\u0002\u0002\u0226\u0229\u00054\u001b\u0002\u0227\u0229",
    "\u0005R*\u0002\u0228\u0226\u0003\u0002\u0002\u0002\u0228\u0227\u0003",
    "\u0002\u0002\u0002\u0229g\u0003\u0002\u0002\u0002\u022a\u022d\u0007",
    "6\u0002\u0002\u022b\u022d\u00077\u0002\u0002\u022c\u022a\u0003\u0002",
    "\u0002\u0002\u022c\u022b\u0003\u0002\u0002\u0002\u022di\u0003\u0002",
    "\u0002\u0002\u022e\u022f\u00075\u0002\u0002\u022fk\u0003\u0002\u0002",
    "\u0002<o\u008b\u0091\u009a\u009e\u00c8\u00d3\u00d9\u00e5\u00eb\u00f1",
    "\u00fd\u0104\u010c\u0119\u011e\u0127\u012a\u0134\u013b\u0140\u0146\u014e",
    "\u0155\u015a\u015f\u0165\u016d\u0173\u017c\u0181\u0186\u018a\u0197\u019e",
    "\u01a6\u01b4\u01b6\u01bd\u01c6\u01cc\u01d2\u01d8\u01da\u01e1\u01e7\u01ec",
    "\u01f5\u01fe\u0203\u020c\u0211\u0217\u0219\u021e\u0224\u0228\u022c"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'from'", "'import'", "'export'", "'#'", "'return'", 
                     "'='", "':'", "','", "'.'", "'+'", "'&'", "'/'", "'['", 
                     "']'", "'{'", "'}'", "')'", "'('", "'<-'", "'->'", 
                     "'for'", "'in'", "'instance'", "'add'", "'as'", "'time'", 
                     "'world'", "'remove'", "'start'", "'stop'", "'set'", 
                     "'detach'", "'reattach'", "'move'", "'attach'", "'bind'", 
                     "'unbind'", "'let'", "'function'", "'native'", "'net-init'", 
                     "'net-merge'", "'net-remove'", "'meta-init'", "'meta-merge'", 
                     "'meta-remove'" ];

var symbolicNames = [ null, "FROM", "IMPORT", "EXPORT", "SHARP", "RETURN", 
                      "ASSIGN", "COLON", "COMMA", "DOT", "CONCAT", "AMPERSAND", 
                      "SLASH", "LS_BRACKET", "RS_BRACKET", "LC_BRACKET", 
                      "RC_BRACKET", "R_BRACKET", "L_BRACKET", "LEFT_ARROW", 
                      "RIGHT_ARROW", "FOR", "IN", "INSTANCE", "ADD", "AS", 
                      "TIME", "WORLD", "REMOVE", "START", "STOP", "SET", 
                      "DETACH", "REATTACH", "MOVE", "ATTACH", "BIND", "UNBIND", 
                      "LET", "FUNCTION", "NATIVE", "NETINIT", "NETMERGE", 
                      "NETREMOVE", "METAINIT", "METAMERGE", "METAREMOVE", 
                      "SOURCE_CODE", "COMMENT", "SINGLELINE_COMMENT", "NUMERIC_VALUE", 
                      "ID", "SQ_STR", "DQ_STR", "WS" ];

var ruleNames =  [ "script", "statement", "instance", "add", "remove", "start", 
                   "stop", "set", "attach", "detach", "reattach", "move", 
                   "bind", "unbind", "letDecl", "netinit", "netmerge", "netremove", 
                   "metainit", "metamerge", "metaremove", "varIdentifierList", 
                   "forDecl", "iterable", "forBody", "objectDecl", "keyAndValue", 
                   "arrayDecl", "funcCall", "funcDecl", "timeDecl", "worldDecl", 
                   "importDecl", "funcBody", "returnStatement", "expression", 
                   "expressionList", "arrayAccess", "contextIdentifier", 
                   "contextRef", "identifier", "identifierList", "instancePath", 
                   "portPath", "dictionaryPath", "instanceList", "portList", 
                   "type", "typeName", "version", "duVersions", "string", 
                   "basicIdentifier" ];

function KevScriptParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

KevScriptParser.prototype = Object.create(antlr4.Parser.prototype);
KevScriptParser.prototype.constructor = KevScriptParser;

Object.defineProperty(KevScriptParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

KevScriptParser.EOF = antlr4.Token.EOF;
KevScriptParser.FROM = 1;
KevScriptParser.IMPORT = 2;
KevScriptParser.EXPORT = 3;
KevScriptParser.SHARP = 4;
KevScriptParser.RETURN = 5;
KevScriptParser.ASSIGN = 6;
KevScriptParser.COLON = 7;
KevScriptParser.COMMA = 8;
KevScriptParser.DOT = 9;
KevScriptParser.CONCAT = 10;
KevScriptParser.AMPERSAND = 11;
KevScriptParser.SLASH = 12;
KevScriptParser.LS_BRACKET = 13;
KevScriptParser.RS_BRACKET = 14;
KevScriptParser.LC_BRACKET = 15;
KevScriptParser.RC_BRACKET = 16;
KevScriptParser.R_BRACKET = 17;
KevScriptParser.L_BRACKET = 18;
KevScriptParser.LEFT_ARROW = 19;
KevScriptParser.RIGHT_ARROW = 20;
KevScriptParser.FOR = 21;
KevScriptParser.IN = 22;
KevScriptParser.INSTANCE = 23;
KevScriptParser.ADD = 24;
KevScriptParser.AS = 25;
KevScriptParser.TIME = 26;
KevScriptParser.WORLD = 27;
KevScriptParser.REMOVE = 28;
KevScriptParser.START = 29;
KevScriptParser.STOP = 30;
KevScriptParser.SET = 31;
KevScriptParser.DETACH = 32;
KevScriptParser.REATTACH = 33;
KevScriptParser.MOVE = 34;
KevScriptParser.ATTACH = 35;
KevScriptParser.BIND = 36;
KevScriptParser.UNBIND = 37;
KevScriptParser.LET = 38;
KevScriptParser.FUNCTION = 39;
KevScriptParser.NATIVE = 40;
KevScriptParser.NETINIT = 41;
KevScriptParser.NETMERGE = 42;
KevScriptParser.NETREMOVE = 43;
KevScriptParser.METAINIT = 44;
KevScriptParser.METAMERGE = 45;
KevScriptParser.METAREMOVE = 46;
KevScriptParser.SOURCE_CODE = 47;
KevScriptParser.COMMENT = 48;
KevScriptParser.SINGLELINE_COMMENT = 49;
KevScriptParser.NUMERIC_VALUE = 50;
KevScriptParser.ID = 51;
KevScriptParser.SQ_STR = 52;
KevScriptParser.DQ_STR = 53;
KevScriptParser.WS = 54;

KevScriptParser.RULE_script = 0;
KevScriptParser.RULE_statement = 1;
KevScriptParser.RULE_instance = 2;
KevScriptParser.RULE_add = 3;
KevScriptParser.RULE_remove = 4;
KevScriptParser.RULE_start = 5;
KevScriptParser.RULE_stop = 6;
KevScriptParser.RULE_set = 7;
KevScriptParser.RULE_attach = 8;
KevScriptParser.RULE_detach = 9;
KevScriptParser.RULE_reattach = 10;
KevScriptParser.RULE_move = 11;
KevScriptParser.RULE_bind = 12;
KevScriptParser.RULE_unbind = 13;
KevScriptParser.RULE_letDecl = 14;
KevScriptParser.RULE_netinit = 15;
KevScriptParser.RULE_netmerge = 16;
KevScriptParser.RULE_netremove = 17;
KevScriptParser.RULE_metainit = 18;
KevScriptParser.RULE_metamerge = 19;
KevScriptParser.RULE_metaremove = 20;
KevScriptParser.RULE_varIdentifierList = 21;
KevScriptParser.RULE_forDecl = 22;
KevScriptParser.RULE_iterable = 23;
KevScriptParser.RULE_forBody = 24;
KevScriptParser.RULE_objectDecl = 25;
KevScriptParser.RULE_keyAndValue = 26;
KevScriptParser.RULE_arrayDecl = 27;
KevScriptParser.RULE_funcCall = 28;
KevScriptParser.RULE_funcDecl = 29;
KevScriptParser.RULE_timeDecl = 30;
KevScriptParser.RULE_worldDecl = 31;
KevScriptParser.RULE_importDecl = 32;
KevScriptParser.RULE_funcBody = 33;
KevScriptParser.RULE_returnStatement = 34;
KevScriptParser.RULE_expression = 35;
KevScriptParser.RULE_expressionList = 36;
KevScriptParser.RULE_arrayAccess = 37;
KevScriptParser.RULE_contextIdentifier = 38;
KevScriptParser.RULE_contextRef = 39;
KevScriptParser.RULE_identifier = 40;
KevScriptParser.RULE_identifierList = 41;
KevScriptParser.RULE_instancePath = 42;
KevScriptParser.RULE_portPath = 43;
KevScriptParser.RULE_dictionaryPath = 44;
KevScriptParser.RULE_instanceList = 45;
KevScriptParser.RULE_portList = 46;
KevScriptParser.RULE_type = 47;
KevScriptParser.RULE_typeName = 48;
KevScriptParser.RULE_version = 49;
KevScriptParser.RULE_duVersions = 50;
KevScriptParser.RULE_string = 51;
KevScriptParser.RULE_basicIdentifier = 52;

function ScriptContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_script;
    return this;
}

ScriptContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ScriptContext.prototype.constructor = ScriptContext;

ScriptContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

ScriptContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterScript(this);
	}
};

ScriptContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitScript(this);
	}
};




KevScriptParser.ScriptContext = ScriptContext;

KevScriptParser.prototype.script = function() {

    var localctx = new ScriptContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, KevScriptParser.RULE_script);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 109;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << KevScriptParser.IMPORT) | (1 << KevScriptParser.EXPORT) | (1 << KevScriptParser.FOR) | (1 << KevScriptParser.INSTANCE) | (1 << KevScriptParser.ADD) | (1 << KevScriptParser.TIME) | (1 << KevScriptParser.WORLD) | (1 << KevScriptParser.REMOVE) | (1 << KevScriptParser.START) | (1 << KevScriptParser.STOP) | (1 << KevScriptParser.SET))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (KevScriptParser.DETACH - 32)) | (1 << (KevScriptParser.REATTACH - 32)) | (1 << (KevScriptParser.MOVE - 32)) | (1 << (KevScriptParser.ATTACH - 32)) | (1 << (KevScriptParser.BIND - 32)) | (1 << (KevScriptParser.UNBIND - 32)) | (1 << (KevScriptParser.LET - 32)) | (1 << (KevScriptParser.FUNCTION - 32)) | (1 << (KevScriptParser.NETINIT - 32)) | (1 << (KevScriptParser.NETMERGE - 32)) | (1 << (KevScriptParser.NETREMOVE - 32)) | (1 << (KevScriptParser.METAINIT - 32)) | (1 << (KevScriptParser.METAMERGE - 32)) | (1 << (KevScriptParser.METAREMOVE - 32)) | (1 << (KevScriptParser.ID - 32)))) !== 0)) {
            this.state = 106;
            this.statement();
            this.state = 111;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.instance = function() {
    return this.getTypedRuleContext(InstanceContext,0);
};

StatementContext.prototype.add = function() {
    return this.getTypedRuleContext(AddContext,0);
};

StatementContext.prototype.remove = function() {
    return this.getTypedRuleContext(RemoveContext,0);
};

StatementContext.prototype.attach = function() {
    return this.getTypedRuleContext(AttachContext,0);
};

StatementContext.prototype.detach = function() {
    return this.getTypedRuleContext(DetachContext,0);
};

StatementContext.prototype.reattach = function() {
    return this.getTypedRuleContext(ReattachContext,0);
};

StatementContext.prototype.move = function() {
    return this.getTypedRuleContext(MoveContext,0);
};

StatementContext.prototype.start = function() {
    return this.getTypedRuleContext(StartContext,0);
};

StatementContext.prototype.stop = function() {
    return this.getTypedRuleContext(StopContext,0);
};

StatementContext.prototype.set = function() {
    return this.getTypedRuleContext(SetContext,0);
};

StatementContext.prototype.bind = function() {
    return this.getTypedRuleContext(BindContext,0);
};

StatementContext.prototype.unbind = function() {
    return this.getTypedRuleContext(UnbindContext,0);
};

StatementContext.prototype.netinit = function() {
    return this.getTypedRuleContext(NetinitContext,0);
};

StatementContext.prototype.netmerge = function() {
    return this.getTypedRuleContext(NetmergeContext,0);
};

StatementContext.prototype.netremove = function() {
    return this.getTypedRuleContext(NetremoveContext,0);
};

StatementContext.prototype.metainit = function() {
    return this.getTypedRuleContext(MetainitContext,0);
};

StatementContext.prototype.metamerge = function() {
    return this.getTypedRuleContext(MetamergeContext,0);
};

StatementContext.prototype.metaremove = function() {
    return this.getTypedRuleContext(MetaremoveContext,0);
};

StatementContext.prototype.letDecl = function() {
    return this.getTypedRuleContext(LetDeclContext,0);
};

StatementContext.prototype.funcDecl = function() {
    return this.getTypedRuleContext(FuncDeclContext,0);
};

StatementContext.prototype.forDecl = function() {
    return this.getTypedRuleContext(ForDeclContext,0);
};

StatementContext.prototype.funcCall = function() {
    return this.getTypedRuleContext(FuncCallContext,0);
};

StatementContext.prototype.importDecl = function() {
    return this.getTypedRuleContext(ImportDeclContext,0);
};

StatementContext.prototype.timeDecl = function() {
    return this.getTypedRuleContext(TimeDeclContext,0);
};

StatementContext.prototype.worldDecl = function() {
    return this.getTypedRuleContext(WorldDeclContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitStatement(this);
	}
};




KevScriptParser.StatementContext = StatementContext;

KevScriptParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, KevScriptParser.RULE_statement);
    try {
        this.state = 137;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 112;
            this.instance();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 113;
            this.add();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 114;
            this.remove();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 115;
            this.attach();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 116;
            this.detach();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 117;
            this.reattach();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 118;
            this.move();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 119;
            this.start();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 120;
            this.stop();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 121;
            this.set();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 122;
            this.bind();
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 123;
            this.unbind();
            break;

        case 13:
            this.enterOuterAlt(localctx, 13);
            this.state = 124;
            this.netinit();
            break;

        case 14:
            this.enterOuterAlt(localctx, 14);
            this.state = 125;
            this.netmerge();
            break;

        case 15:
            this.enterOuterAlt(localctx, 15);
            this.state = 126;
            this.netremove();
            break;

        case 16:
            this.enterOuterAlt(localctx, 16);
            this.state = 127;
            this.metainit();
            break;

        case 17:
            this.enterOuterAlt(localctx, 17);
            this.state = 128;
            this.metamerge();
            break;

        case 18:
            this.enterOuterAlt(localctx, 18);
            this.state = 129;
            this.metaremove();
            break;

        case 19:
            this.enterOuterAlt(localctx, 19);
            this.state = 130;
            this.letDecl();
            break;

        case 20:
            this.enterOuterAlt(localctx, 20);
            this.state = 131;
            this.funcDecl();
            break;

        case 21:
            this.enterOuterAlt(localctx, 21);
            this.state = 132;
            this.forDecl();
            break;

        case 22:
            this.enterOuterAlt(localctx, 22);
            this.state = 133;
            this.funcCall();
            break;

        case 23:
            this.enterOuterAlt(localctx, 23);
            this.state = 134;
            this.importDecl();
            break;

        case 24:
            this.enterOuterAlt(localctx, 24);
            this.state = 135;
            this.timeDecl();
            break;

        case 25:
            this.enterOuterAlt(localctx, 25);
            this.state = 136;
            this.worldDecl();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function InstanceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_instance;
    this.varName = null; // BasicIdentifierContext
    this.instanceName = null; // ExpressionContext
    return this;
}

InstanceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InstanceContext.prototype.constructor = InstanceContext;

InstanceContext.prototype.INSTANCE = function() {
    return this.getToken(KevScriptParser.INSTANCE, 0);
};

InstanceContext.prototype.ASSIGN = function() {
    return this.getToken(KevScriptParser.ASSIGN, 0);
};

InstanceContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

InstanceContext.prototype.basicIdentifier = function() {
    return this.getTypedRuleContext(BasicIdentifierContext,0);
};

InstanceContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

InstanceContext.prototype.varIdentifierList = function() {
    return this.getTypedRuleContext(VarIdentifierListContext,0);
};

InstanceContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterInstance(this);
	}
};

InstanceContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitInstance(this);
	}
};




KevScriptParser.InstanceContext = InstanceContext;

KevScriptParser.prototype.instance = function() {

    var localctx = new InstanceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, KevScriptParser.RULE_instance);
    try {
        this.state = 152;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 139;
            this.match(KevScriptParser.INSTANCE);
            this.state = 140;
            localctx.varName = this.basicIdentifier();
            this.state = 141;
            this.match(KevScriptParser.ASSIGN);
            this.state = 143;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
            if(la_===1) {
                this.state = 142;
                localctx.instanceName = this.expression(0);

            }
            this.state = 145;
            this.type();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 147;
            this.match(KevScriptParser.INSTANCE);
            this.state = 148;
            this.varIdentifierList();
            this.state = 149;
            this.match(KevScriptParser.ASSIGN);
            this.state = 150;
            this.type();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AddContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_add;
    this.target = null; // InstancePathContext
    this.sources = null; // InstanceListContext
    return this;
}

AddContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AddContext.prototype.constructor = AddContext;

AddContext.prototype.ADD = function() {
    return this.getToken(KevScriptParser.ADD, 0);
};

AddContext.prototype.instanceList = function() {
    return this.getTypedRuleContext(InstanceListContext,0);
};

AddContext.prototype.instancePath = function() {
    return this.getTypedRuleContext(InstancePathContext,0);
};

AddContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterAdd(this);
	}
};

AddContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitAdd(this);
	}
};




KevScriptParser.AddContext = AddContext;

KevScriptParser.prototype.add = function() {

    var localctx = new AddContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, KevScriptParser.RULE_add);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 154;
        this.match(KevScriptParser.ADD);
        this.state = 156;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        if(la_===1) {
            this.state = 155;
            localctx.target = this.instancePath();

        }
        this.state = 158;
        localctx.sources = this.instanceList();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RemoveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_remove;
    return this;
}

RemoveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RemoveContext.prototype.constructor = RemoveContext;

RemoveContext.prototype.REMOVE = function() {
    return this.getToken(KevScriptParser.REMOVE, 0);
};

RemoveContext.prototype.instanceList = function() {
    return this.getTypedRuleContext(InstanceListContext,0);
};

RemoveContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterRemove(this);
	}
};

RemoveContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitRemove(this);
	}
};




KevScriptParser.RemoveContext = RemoveContext;

KevScriptParser.prototype.remove = function() {

    var localctx = new RemoveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, KevScriptParser.RULE_remove);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 160;
        this.match(KevScriptParser.REMOVE);
        this.state = 161;
        this.instanceList();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StartContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_start;
    return this;
}

StartContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StartContext.prototype.constructor = StartContext;

StartContext.prototype.START = function() {
    return this.getToken(KevScriptParser.START, 0);
};

StartContext.prototype.instanceList = function() {
    return this.getTypedRuleContext(InstanceListContext,0);
};

StartContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterStart(this);
	}
};

StartContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitStart(this);
	}
};




KevScriptParser.StartContext = StartContext;

KevScriptParser.prototype.start = function() {

    var localctx = new StartContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, KevScriptParser.RULE_start);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 163;
        this.match(KevScriptParser.START);
        this.state = 164;
        this.instanceList();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_stop;
    return this;
}

StopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StopContext.prototype.constructor = StopContext;

StopContext.prototype.STOP = function() {
    return this.getToken(KevScriptParser.STOP, 0);
};

StopContext.prototype.instanceList = function() {
    return this.getTypedRuleContext(InstanceListContext,0);
};

StopContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterStop(this);
	}
};

StopContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitStop(this);
	}
};




KevScriptParser.StopContext = StopContext;

KevScriptParser.prototype.stop = function() {

    var localctx = new StopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, KevScriptParser.RULE_stop);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 166;
        this.match(KevScriptParser.STOP);
        this.state = 167;
        this.instanceList();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_set;
    this.val = null; // ExpressionContext
    return this;
}

SetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetContext.prototype.constructor = SetContext;

SetContext.prototype.SET = function() {
    return this.getToken(KevScriptParser.SET, 0);
};

SetContext.prototype.dictionaryPath = function() {
    return this.getTypedRuleContext(DictionaryPathContext,0);
};

SetContext.prototype.ASSIGN = function() {
    return this.getToken(KevScriptParser.ASSIGN, 0);
};

SetContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

SetContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterSet(this);
	}
};

SetContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitSet(this);
	}
};




KevScriptParser.SetContext = SetContext;

KevScriptParser.prototype.set = function() {

    var localctx = new SetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, KevScriptParser.RULE_set);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 169;
        this.match(KevScriptParser.SET);
        this.state = 170;
        this.dictionaryPath();
        this.state = 171;
        this.match(KevScriptParser.ASSIGN);
        this.state = 172;
        localctx.val = this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AttachContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_attach;
    this.groupId = null; // IdentifierContext
    this.nodeId = null; // IdentifierContext
    return this;
}

AttachContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AttachContext.prototype.constructor = AttachContext;

AttachContext.prototype.ATTACH = function() {
    return this.getToken(KevScriptParser.ATTACH, 0);
};

AttachContext.prototype.identifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentifierContext);
    } else {
        return this.getTypedRuleContext(IdentifierContext,i);
    }
};

AttachContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterAttach(this);
	}
};

AttachContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitAttach(this);
	}
};




KevScriptParser.AttachContext = AttachContext;

KevScriptParser.prototype.attach = function() {

    var localctx = new AttachContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, KevScriptParser.RULE_attach);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 174;
        this.match(KevScriptParser.ATTACH);
        this.state = 175;
        localctx.groupId = this.identifier();
        this.state = 176;
        localctx.nodeId = this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DetachContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_detach;
    return this;
}

DetachContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DetachContext.prototype.constructor = DetachContext;

DetachContext.prototype.DETACH = function() {
    return this.getToken(KevScriptParser.DETACH, 0);
};

DetachContext.prototype.instanceList = function() {
    return this.getTypedRuleContext(InstanceListContext,0);
};

DetachContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterDetach(this);
	}
};

DetachContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitDetach(this);
	}
};




KevScriptParser.DetachContext = DetachContext;

KevScriptParser.prototype.detach = function() {

    var localctx = new DetachContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, KevScriptParser.RULE_detach);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 178;
        this.match(KevScriptParser.DETACH);
        this.state = 179;
        this.instanceList();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ReattachContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_reattach;
    this.groupId = null; // IdentifierContext
    this.nodeId = null; // IdentifierContext
    return this;
}

ReattachContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReattachContext.prototype.constructor = ReattachContext;

ReattachContext.prototype.REATTACH = function() {
    return this.getToken(KevScriptParser.REATTACH, 0);
};

ReattachContext.prototype.identifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentifierContext);
    } else {
        return this.getTypedRuleContext(IdentifierContext,i);
    }
};

ReattachContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterReattach(this);
	}
};

ReattachContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitReattach(this);
	}
};




KevScriptParser.ReattachContext = ReattachContext;

KevScriptParser.prototype.reattach = function() {

    var localctx = new ReattachContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, KevScriptParser.RULE_reattach);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 181;
        this.match(KevScriptParser.REATTACH);
        this.state = 182;
        localctx.groupId = this.identifier();
        this.state = 183;
        localctx.nodeId = this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MoveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_move;
    return this;
}

MoveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MoveContext.prototype.constructor = MoveContext;

MoveContext.prototype.MOVE = function() {
    return this.getToken(KevScriptParser.MOVE, 0);
};

MoveContext.prototype.instancePath = function() {
    return this.getTypedRuleContext(InstancePathContext,0);
};

MoveContext.prototype.instanceList = function() {
    return this.getTypedRuleContext(InstanceListContext,0);
};

MoveContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterMove(this);
	}
};

MoveContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitMove(this);
	}
};




KevScriptParser.MoveContext = MoveContext;

KevScriptParser.prototype.move = function() {

    var localctx = new MoveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, KevScriptParser.RULE_move);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 185;
        this.match(KevScriptParser.MOVE);
        this.state = 186;
        this.instancePath();
        this.state = 187;
        this.instanceList();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BindContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_bind;
    this.chan = null; // IdentifierContext
    this.nodes = null; // PortListContext
    return this;
}

BindContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BindContext.prototype.constructor = BindContext;

BindContext.prototype.BIND = function() {
    return this.getToken(KevScriptParser.BIND, 0);
};

BindContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

BindContext.prototype.portList = function() {
    return this.getTypedRuleContext(PortListContext,0);
};

BindContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterBind(this);
	}
};

BindContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitBind(this);
	}
};




KevScriptParser.BindContext = BindContext;

KevScriptParser.prototype.bind = function() {

    var localctx = new BindContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, KevScriptParser.RULE_bind);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 189;
        this.match(KevScriptParser.BIND);
        this.state = 190;
        localctx.chan = this.identifier();
        this.state = 191;
        localctx.nodes = this.portList();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function UnbindContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_unbind;
    this.chan = null; // IdentifierContext
    this.nodes = null; // PortListContext
    return this;
}

UnbindContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UnbindContext.prototype.constructor = UnbindContext;

UnbindContext.prototype.UNBIND = function() {
    return this.getToken(KevScriptParser.UNBIND, 0);
};

UnbindContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

UnbindContext.prototype.portList = function() {
    return this.getTypedRuleContext(PortListContext,0);
};

UnbindContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterUnbind(this);
	}
};

UnbindContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitUnbind(this);
	}
};




KevScriptParser.UnbindContext = UnbindContext;

KevScriptParser.prototype.unbind = function() {

    var localctx = new UnbindContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, KevScriptParser.RULE_unbind);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 193;
        this.match(KevScriptParser.UNBIND);
        this.state = 194;
        localctx.chan = this.identifier();
        this.state = 195;
        localctx.nodes = this.portList();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LetDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_letDecl;
    this.val = null; // ExpressionContext
    return this;
}

LetDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LetDeclContext.prototype.constructor = LetDeclContext;

LetDeclContext.prototype.LET = function() {
    return this.getToken(KevScriptParser.LET, 0);
};

LetDeclContext.prototype.basicIdentifier = function() {
    return this.getTypedRuleContext(BasicIdentifierContext,0);
};

LetDeclContext.prototype.ASSIGN = function() {
    return this.getToken(KevScriptParser.ASSIGN, 0);
};

LetDeclContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

LetDeclContext.prototype.EXPORT = function() {
    return this.getToken(KevScriptParser.EXPORT, 0);
};

LetDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterLetDecl(this);
	}
};

LetDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitLetDecl(this);
	}
};




KevScriptParser.LetDeclContext = LetDeclContext;

KevScriptParser.prototype.letDecl = function() {

    var localctx = new LetDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, KevScriptParser.RULE_letDecl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 198;
        _la = this._input.LA(1);
        if(_la===KevScriptParser.EXPORT) {
            this.state = 197;
            this.match(KevScriptParser.EXPORT);
        }

        this.state = 200;
        this.match(KevScriptParser.LET);
        this.state = 201;
        this.basicIdentifier();
        this.state = 202;
        this.match(KevScriptParser.ASSIGN);
        this.state = 203;
        localctx.val = this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NetinitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_netinit;
    return this;
}

NetinitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NetinitContext.prototype.constructor = NetinitContext;

NetinitContext.prototype.NETINIT = function() {
    return this.getToken(KevScriptParser.NETINIT, 0);
};

NetinitContext.prototype.identifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentifierContext);
    } else {
        return this.getTypedRuleContext(IdentifierContext,i);
    }
};

NetinitContext.prototype.objectDecl = function() {
    return this.getTypedRuleContext(ObjectDeclContext,0);
};

NetinitContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterNetinit(this);
	}
};

NetinitContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitNetinit(this);
	}
};




KevScriptParser.NetinitContext = NetinitContext;

KevScriptParser.prototype.netinit = function() {

    var localctx = new NetinitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, KevScriptParser.RULE_netinit);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 205;
        this.match(KevScriptParser.NETINIT);
        this.state = 206;
        this.identifier();
        this.state = 209;
        switch(this._input.LA(1)) {
        case KevScriptParser.LC_BRACKET:
            this.state = 207;
            this.objectDecl();
            break;
        case KevScriptParser.AMPERSAND:
        case KevScriptParser.ID:
            this.state = 208;
            this.identifier();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NetmergeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_netmerge;
    return this;
}

NetmergeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NetmergeContext.prototype.constructor = NetmergeContext;

NetmergeContext.prototype.NETMERGE = function() {
    return this.getToken(KevScriptParser.NETMERGE, 0);
};

NetmergeContext.prototype.identifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentifierContext);
    } else {
        return this.getTypedRuleContext(IdentifierContext,i);
    }
};

NetmergeContext.prototype.objectDecl = function() {
    return this.getTypedRuleContext(ObjectDeclContext,0);
};

NetmergeContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterNetmerge(this);
	}
};

NetmergeContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitNetmerge(this);
	}
};




KevScriptParser.NetmergeContext = NetmergeContext;

KevScriptParser.prototype.netmerge = function() {

    var localctx = new NetmergeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, KevScriptParser.RULE_netmerge);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 211;
        this.match(KevScriptParser.NETMERGE);
        this.state = 212;
        this.identifier();
        this.state = 215;
        switch(this._input.LA(1)) {
        case KevScriptParser.LC_BRACKET:
            this.state = 213;
            this.objectDecl();
            break;
        case KevScriptParser.AMPERSAND:
        case KevScriptParser.ID:
            this.state = 214;
            this.identifier();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NetremoveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_netremove;
    return this;
}

NetremoveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NetremoveContext.prototype.constructor = NetremoveContext;

NetremoveContext.prototype.NETREMOVE = function() {
    return this.getToken(KevScriptParser.NETREMOVE, 0);
};

NetremoveContext.prototype.identifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentifierContext);
    } else {
        return this.getTypedRuleContext(IdentifierContext,i);
    }
};

NetremoveContext.prototype.LS_BRACKET = function() {
    return this.getToken(KevScriptParser.LS_BRACKET, 0);
};

NetremoveContext.prototype.identifierList = function() {
    return this.getTypedRuleContext(IdentifierListContext,0);
};

NetremoveContext.prototype.RS_BRACKET = function() {
    return this.getToken(KevScriptParser.RS_BRACKET, 0);
};

NetremoveContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterNetremove(this);
	}
};

NetremoveContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitNetremove(this);
	}
};




KevScriptParser.NetremoveContext = NetremoveContext;

KevScriptParser.prototype.netremove = function() {

    var localctx = new NetremoveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, KevScriptParser.RULE_netremove);
    try {
        this.state = 227;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 217;
            this.match(KevScriptParser.NETREMOVE);
            this.state = 218;
            this.identifier();
            this.state = 219;
            this.identifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 221;
            this.match(KevScriptParser.NETREMOVE);
            this.state = 222;
            this.identifier();
            this.state = 223;
            this.match(KevScriptParser.LS_BRACKET);
            this.state = 224;
            this.identifierList();
            this.state = 225;
            this.match(KevScriptParser.RS_BRACKET);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MetainitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_metainit;
    return this;
}

MetainitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MetainitContext.prototype.constructor = MetainitContext;

MetainitContext.prototype.METAINIT = function() {
    return this.getToken(KevScriptParser.METAINIT, 0);
};

MetainitContext.prototype.identifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentifierContext);
    } else {
        return this.getTypedRuleContext(IdentifierContext,i);
    }
};

MetainitContext.prototype.objectDecl = function() {
    return this.getTypedRuleContext(ObjectDeclContext,0);
};

MetainitContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterMetainit(this);
	}
};

MetainitContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitMetainit(this);
	}
};




KevScriptParser.MetainitContext = MetainitContext;

KevScriptParser.prototype.metainit = function() {

    var localctx = new MetainitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, KevScriptParser.RULE_metainit);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 229;
        this.match(KevScriptParser.METAINIT);
        this.state = 230;
        this.identifier();
        this.state = 233;
        switch(this._input.LA(1)) {
        case KevScriptParser.LC_BRACKET:
            this.state = 231;
            this.objectDecl();
            break;
        case KevScriptParser.AMPERSAND:
        case KevScriptParser.ID:
            this.state = 232;
            this.identifier();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MetamergeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_metamerge;
    return this;
}

MetamergeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MetamergeContext.prototype.constructor = MetamergeContext;

MetamergeContext.prototype.METAMERGE = function() {
    return this.getToken(KevScriptParser.METAMERGE, 0);
};

MetamergeContext.prototype.identifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentifierContext);
    } else {
        return this.getTypedRuleContext(IdentifierContext,i);
    }
};

MetamergeContext.prototype.objectDecl = function() {
    return this.getTypedRuleContext(ObjectDeclContext,0);
};

MetamergeContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterMetamerge(this);
	}
};

MetamergeContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitMetamerge(this);
	}
};




KevScriptParser.MetamergeContext = MetamergeContext;

KevScriptParser.prototype.metamerge = function() {

    var localctx = new MetamergeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, KevScriptParser.RULE_metamerge);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 235;
        this.match(KevScriptParser.METAMERGE);
        this.state = 236;
        this.identifier();
        this.state = 239;
        switch(this._input.LA(1)) {
        case KevScriptParser.LC_BRACKET:
            this.state = 237;
            this.objectDecl();
            break;
        case KevScriptParser.AMPERSAND:
        case KevScriptParser.ID:
            this.state = 238;
            this.identifier();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MetaremoveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_metaremove;
    return this;
}

MetaremoveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MetaremoveContext.prototype.constructor = MetaremoveContext;

MetaremoveContext.prototype.METAREMOVE = function() {
    return this.getToken(KevScriptParser.METAREMOVE, 0);
};

MetaremoveContext.prototype.identifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentifierContext);
    } else {
        return this.getTypedRuleContext(IdentifierContext,i);
    }
};

MetaremoveContext.prototype.LS_BRACKET = function() {
    return this.getToken(KevScriptParser.LS_BRACKET, 0);
};

MetaremoveContext.prototype.identifierList = function() {
    return this.getTypedRuleContext(IdentifierListContext,0);
};

MetaremoveContext.prototype.RS_BRACKET = function() {
    return this.getToken(KevScriptParser.RS_BRACKET, 0);
};

MetaremoveContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterMetaremove(this);
	}
};

MetaremoveContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitMetaremove(this);
	}
};




KevScriptParser.MetaremoveContext = MetaremoveContext;

KevScriptParser.prototype.metaremove = function() {

    var localctx = new MetaremoveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, KevScriptParser.RULE_metaremove);
    try {
        this.state = 251;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 241;
            this.match(KevScriptParser.METAREMOVE);
            this.state = 242;
            this.identifier();
            this.state = 243;
            this.identifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 245;
            this.match(KevScriptParser.METAREMOVE);
            this.state = 246;
            this.identifier();
            this.state = 247;
            this.match(KevScriptParser.LS_BRACKET);
            this.state = 248;
            this.identifierList();
            this.state = 249;
            this.match(KevScriptParser.RS_BRACKET);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VarIdentifierListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_varIdentifierList;
    return this;
}

VarIdentifierListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarIdentifierListContext.prototype.constructor = VarIdentifierListContext;

VarIdentifierListContext.prototype.basicIdentifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BasicIdentifierContext);
    } else {
        return this.getTypedRuleContext(BasicIdentifierContext,i);
    }
};

VarIdentifierListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(KevScriptParser.COMMA);
    } else {
        return this.getToken(KevScriptParser.COMMA, i);
    }
};


VarIdentifierListContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterVarIdentifierList(this);
	}
};

VarIdentifierListContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitVarIdentifierList(this);
	}
};




KevScriptParser.VarIdentifierListContext = VarIdentifierListContext;

KevScriptParser.prototype.varIdentifierList = function() {

    var localctx = new VarIdentifierListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, KevScriptParser.RULE_varIdentifierList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 253;
        this.basicIdentifier();
        this.state = 258;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===KevScriptParser.COMMA) {
            this.state = 254;
            this.match(KevScriptParser.COMMA);
            this.state = 255;
            this.basicIdentifier();
            this.state = 260;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ForDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_forDecl;
    this.index = null; // BasicIdentifierContext
    this.val = null; // BasicIdentifierContext
    return this;
}

ForDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForDeclContext.prototype.constructor = ForDeclContext;

ForDeclContext.prototype.FOR = function() {
    return this.getToken(KevScriptParser.FOR, 0);
};

ForDeclContext.prototype.L_BRACKET = function() {
    return this.getToken(KevScriptParser.L_BRACKET, 0);
};

ForDeclContext.prototype.IN = function() {
    return this.getToken(KevScriptParser.IN, 0);
};

ForDeclContext.prototype.iterable = function() {
    return this.getTypedRuleContext(IterableContext,0);
};

ForDeclContext.prototype.R_BRACKET = function() {
    return this.getToken(KevScriptParser.R_BRACKET, 0);
};

ForDeclContext.prototype.LC_BRACKET = function() {
    return this.getToken(KevScriptParser.LC_BRACKET, 0);
};

ForDeclContext.prototype.forBody = function() {
    return this.getTypedRuleContext(ForBodyContext,0);
};

ForDeclContext.prototype.RC_BRACKET = function() {
    return this.getToken(KevScriptParser.RC_BRACKET, 0);
};

ForDeclContext.prototype.basicIdentifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BasicIdentifierContext);
    } else {
        return this.getTypedRuleContext(BasicIdentifierContext,i);
    }
};

ForDeclContext.prototype.COMMA = function() {
    return this.getToken(KevScriptParser.COMMA, 0);
};

ForDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterForDecl(this);
	}
};

ForDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitForDecl(this);
	}
};




KevScriptParser.ForDeclContext = ForDeclContext;

KevScriptParser.prototype.forDecl = function() {

    var localctx = new ForDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, KevScriptParser.RULE_forDecl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 261;
        this.match(KevScriptParser.FOR);
        this.state = 262;
        this.match(KevScriptParser.L_BRACKET);
        this.state = 266;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        if(la_===1) {
            this.state = 263;
            localctx.index = this.basicIdentifier();
            this.state = 264;
            this.match(KevScriptParser.COMMA);

        }
        this.state = 268;
        localctx.val = this.basicIdentifier();
        this.state = 269;
        this.match(KevScriptParser.IN);
        this.state = 270;
        this.iterable();
        this.state = 271;
        this.match(KevScriptParser.R_BRACKET);
        this.state = 272;
        this.match(KevScriptParser.LC_BRACKET);
        this.state = 273;
        this.forBody();
        this.state = 274;
        this.match(KevScriptParser.RC_BRACKET);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IterableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_iterable;
    return this;
}

IterableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IterableContext.prototype.constructor = IterableContext;

IterableContext.prototype.arrayDecl = function() {
    return this.getTypedRuleContext(ArrayDeclContext,0);
};

IterableContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

IterableContext.prototype.contextIdentifier = function() {
    return this.getTypedRuleContext(ContextIdentifierContext,0);
};

IterableContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterIterable(this);
	}
};

IterableContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitIterable(this);
	}
};




KevScriptParser.IterableContext = IterableContext;

KevScriptParser.prototype.iterable = function() {

    var localctx = new IterableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, KevScriptParser.RULE_iterable);
    try {
        this.state = 279;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 276;
            this.arrayDecl();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 277;
            this.identifier();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 278;
            this.contextIdentifier(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ForBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_forBody;
    return this;
}

ForBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForBodyContext.prototype.constructor = ForBodyContext;

ForBodyContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

ForBodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterForBody(this);
	}
};

ForBodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitForBody(this);
	}
};




KevScriptParser.ForBodyContext = ForBodyContext;

KevScriptParser.prototype.forBody = function() {

    var localctx = new ForBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, KevScriptParser.RULE_forBody);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 284;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << KevScriptParser.IMPORT) | (1 << KevScriptParser.EXPORT) | (1 << KevScriptParser.FOR) | (1 << KevScriptParser.INSTANCE) | (1 << KevScriptParser.ADD) | (1 << KevScriptParser.TIME) | (1 << KevScriptParser.WORLD) | (1 << KevScriptParser.REMOVE) | (1 << KevScriptParser.START) | (1 << KevScriptParser.STOP) | (1 << KevScriptParser.SET))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (KevScriptParser.DETACH - 32)) | (1 << (KevScriptParser.REATTACH - 32)) | (1 << (KevScriptParser.MOVE - 32)) | (1 << (KevScriptParser.ATTACH - 32)) | (1 << (KevScriptParser.BIND - 32)) | (1 << (KevScriptParser.UNBIND - 32)) | (1 << (KevScriptParser.LET - 32)) | (1 << (KevScriptParser.FUNCTION - 32)) | (1 << (KevScriptParser.NETINIT - 32)) | (1 << (KevScriptParser.NETMERGE - 32)) | (1 << (KevScriptParser.NETREMOVE - 32)) | (1 << (KevScriptParser.METAINIT - 32)) | (1 << (KevScriptParser.METAMERGE - 32)) | (1 << (KevScriptParser.METAREMOVE - 32)) | (1 << (KevScriptParser.ID - 32)))) !== 0)) {
            this.state = 281;
            this.statement();
            this.state = 286;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ObjectDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_objectDecl;
    this._keyAndValue = null; // KeyAndValueContext
    this.values = []; // of KeyAndValueContexts
    return this;
}

ObjectDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectDeclContext.prototype.constructor = ObjectDeclContext;

ObjectDeclContext.prototype.LC_BRACKET = function() {
    return this.getToken(KevScriptParser.LC_BRACKET, 0);
};

ObjectDeclContext.prototype.RC_BRACKET = function() {
    return this.getToken(KevScriptParser.RC_BRACKET, 0);
};

ObjectDeclContext.prototype.keyAndValue = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(KeyAndValueContext);
    } else {
        return this.getTypedRuleContext(KeyAndValueContext,i);
    }
};

ObjectDeclContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(KevScriptParser.COMMA);
    } else {
        return this.getToken(KevScriptParser.COMMA, i);
    }
};


ObjectDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterObjectDecl(this);
	}
};

ObjectDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitObjectDecl(this);
	}
};




KevScriptParser.ObjectDeclContext = ObjectDeclContext;

KevScriptParser.prototype.objectDecl = function() {

    var localctx = new ObjectDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, KevScriptParser.RULE_objectDecl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 287;
        this.match(KevScriptParser.LC_BRACKET);
        this.state = 296;
        _la = this._input.LA(1);
        if(_la===KevScriptParser.ID) {
            this.state = 288;
            localctx._keyAndValue = this.keyAndValue();
            localctx.values.push(localctx._keyAndValue);
            this.state = 293;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===KevScriptParser.COMMA) {
                this.state = 289;
                this.match(KevScriptParser.COMMA);
                this.state = 290;
                localctx._keyAndValue = this.keyAndValue();
                localctx.values.push(localctx._keyAndValue);
                this.state = 295;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 298;
        this.match(KevScriptParser.RC_BRACKET);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function KeyAndValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_keyAndValue;
    this.key = null; // BasicIdentifierContext
    this.value = null; // ExpressionContext
    return this;
}

KeyAndValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KeyAndValueContext.prototype.constructor = KeyAndValueContext;

KeyAndValueContext.prototype.COLON = function() {
    return this.getToken(KevScriptParser.COLON, 0);
};

KeyAndValueContext.prototype.basicIdentifier = function() {
    return this.getTypedRuleContext(BasicIdentifierContext,0);
};

KeyAndValueContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

KeyAndValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterKeyAndValue(this);
	}
};

KeyAndValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitKeyAndValue(this);
	}
};




KevScriptParser.KeyAndValueContext = KeyAndValueContext;

KevScriptParser.prototype.keyAndValue = function() {

    var localctx = new KeyAndValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, KevScriptParser.RULE_keyAndValue);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 300;
        localctx.key = this.basicIdentifier();
        this.state = 301;
        this.match(KevScriptParser.COLON);
        this.state = 302;
        localctx.value = this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArrayDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_arrayDecl;
    return this;
}

ArrayDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayDeclContext.prototype.constructor = ArrayDeclContext;

ArrayDeclContext.prototype.LS_BRACKET = function() {
    return this.getToken(KevScriptParser.LS_BRACKET, 0);
};

ArrayDeclContext.prototype.RS_BRACKET = function() {
    return this.getToken(KevScriptParser.RS_BRACKET, 0);
};

ArrayDeclContext.prototype.expressionList = function() {
    return this.getTypedRuleContext(ExpressionListContext,0);
};

ArrayDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterArrayDecl(this);
	}
};

ArrayDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitArrayDecl(this);
	}
};




KevScriptParser.ArrayDeclContext = ArrayDeclContext;

KevScriptParser.prototype.arrayDecl = function() {

    var localctx = new ArrayDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, KevScriptParser.RULE_arrayDecl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 304;
        this.match(KevScriptParser.LS_BRACKET);
        this.state = 306;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << KevScriptParser.AMPERSAND) | (1 << KevScriptParser.LS_BRACKET) | (1 << KevScriptParser.LC_BRACKET))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (KevScriptParser.ID - 51)) | (1 << (KevScriptParser.SQ_STR - 51)) | (1 << (KevScriptParser.DQ_STR - 51)))) !== 0)) {
            this.state = 305;
            this.expressionList();
        }

        this.state = 308;
        this.match(KevScriptParser.RS_BRACKET);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FuncCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_funcCall;
    this.parameters = null; // ExpressionListContext
    return this;
}

FuncCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncCallContext.prototype.constructor = FuncCallContext;

FuncCallContext.prototype.basicIdentifier = function() {
    return this.getTypedRuleContext(BasicIdentifierContext,0);
};

FuncCallContext.prototype.L_BRACKET = function() {
    return this.getToken(KevScriptParser.L_BRACKET, 0);
};

FuncCallContext.prototype.R_BRACKET = function() {
    return this.getToken(KevScriptParser.R_BRACKET, 0);
};

FuncCallContext.prototype.expressionList = function() {
    return this.getTypedRuleContext(ExpressionListContext,0);
};

FuncCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterFuncCall(this);
	}
};

FuncCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitFuncCall(this);
	}
};




KevScriptParser.FuncCallContext = FuncCallContext;

KevScriptParser.prototype.funcCall = function() {

    var localctx = new FuncCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, KevScriptParser.RULE_funcCall);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 310;
        this.basicIdentifier();
        this.state = 311;
        this.match(KevScriptParser.L_BRACKET);
        this.state = 313;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << KevScriptParser.AMPERSAND) | (1 << KevScriptParser.LS_BRACKET) | (1 << KevScriptParser.LC_BRACKET))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (KevScriptParser.ID - 51)) | (1 << (KevScriptParser.SQ_STR - 51)) | (1 << (KevScriptParser.DQ_STR - 51)))) !== 0)) {
            this.state = 312;
            localctx.parameters = this.expressionList();
        }

        this.state = 315;
        this.match(KevScriptParser.R_BRACKET);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FuncDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_funcDecl;
    this.functionName = null; // BasicIdentifierContext
    this.parameters = null; // VarIdentifierListContext
    return this;
}

FuncDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncDeclContext.prototype.constructor = FuncDeclContext;

FuncDeclContext.prototype.FUNCTION = function() {
    return this.getToken(KevScriptParser.FUNCTION, 0);
};

FuncDeclContext.prototype.L_BRACKET = function() {
    return this.getToken(KevScriptParser.L_BRACKET, 0);
};

FuncDeclContext.prototype.R_BRACKET = function() {
    return this.getToken(KevScriptParser.R_BRACKET, 0);
};

FuncDeclContext.prototype.LC_BRACKET = function() {
    return this.getToken(KevScriptParser.LC_BRACKET, 0);
};

FuncDeclContext.prototype.funcBody = function() {
    return this.getTypedRuleContext(FuncBodyContext,0);
};

FuncDeclContext.prototype.RC_BRACKET = function() {
    return this.getToken(KevScriptParser.RC_BRACKET, 0);
};

FuncDeclContext.prototype.basicIdentifier = function() {
    return this.getTypedRuleContext(BasicIdentifierContext,0);
};

FuncDeclContext.prototype.EXPORT = function() {
    return this.getToken(KevScriptParser.EXPORT, 0);
};

FuncDeclContext.prototype.varIdentifierList = function() {
    return this.getTypedRuleContext(VarIdentifierListContext,0);
};

FuncDeclContext.prototype.NATIVE = function() {
    return this.getToken(KevScriptParser.NATIVE, 0);
};

FuncDeclContext.prototype.SOURCE_CODE = function() {
    return this.getToken(KevScriptParser.SOURCE_CODE, 0);
};

FuncDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterFuncDecl(this);
	}
};

FuncDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitFuncDecl(this);
	}
};




KevScriptParser.FuncDeclContext = FuncDeclContext;

KevScriptParser.prototype.funcDecl = function() {

    var localctx = new FuncDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, KevScriptParser.RULE_funcDecl);
    var _la = 0; // Token type
    try {
        this.state = 344;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 318;
            _la = this._input.LA(1);
            if(_la===KevScriptParser.EXPORT) {
                this.state = 317;
                this.match(KevScriptParser.EXPORT);
            }

            this.state = 320;
            this.match(KevScriptParser.FUNCTION);
            this.state = 321;
            localctx.functionName = this.basicIdentifier();
            this.state = 322;
            this.match(KevScriptParser.L_BRACKET);
            this.state = 324;
            _la = this._input.LA(1);
            if(_la===KevScriptParser.ID) {
                this.state = 323;
                localctx.parameters = this.varIdentifierList();
            }

            this.state = 326;
            this.match(KevScriptParser.R_BRACKET);
            this.state = 327;
            this.match(KevScriptParser.LC_BRACKET);
            this.state = 328;
            this.funcBody();
            this.state = 329;
            this.match(KevScriptParser.RC_BRACKET);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 332;
            _la = this._input.LA(1);
            if(_la===KevScriptParser.EXPORT) {
                this.state = 331;
                this.match(KevScriptParser.EXPORT);
            }

            this.state = 334;
            this.match(KevScriptParser.FUNCTION);
            this.state = 335;
            this.match(KevScriptParser.NATIVE);
            this.state = 336;
            localctx.functionName = this.basicIdentifier();
            this.state = 337;
            this.match(KevScriptParser.L_BRACKET);
            this.state = 339;
            _la = this._input.LA(1);
            if(_la===KevScriptParser.ID) {
                this.state = 338;
                localctx.parameters = this.varIdentifierList();
            }

            this.state = 341;
            this.match(KevScriptParser.R_BRACKET);
            this.state = 342;
            this.match(KevScriptParser.SOURCE_CODE);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TimeDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_timeDecl;
    return this;
}

TimeDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TimeDeclContext.prototype.constructor = TimeDeclContext;

TimeDeclContext.prototype.TIME = function() {
    return this.getToken(KevScriptParser.TIME, 0);
};

TimeDeclContext.prototype.LC_BRACKET = function() {
    return this.getToken(KevScriptParser.LC_BRACKET, 0);
};

TimeDeclContext.prototype.RC_BRACKET = function() {
    return this.getToken(KevScriptParser.RC_BRACKET, 0);
};

TimeDeclContext.prototype.NUMERIC_VALUE = function() {
    return this.getToken(KevScriptParser.NUMERIC_VALUE, 0);
};

TimeDeclContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

TimeDeclContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

TimeDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterTimeDecl(this);
	}
};

TimeDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitTimeDecl(this);
	}
};




KevScriptParser.TimeDeclContext = TimeDeclContext;

KevScriptParser.prototype.timeDecl = function() {

    var localctx = new TimeDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, KevScriptParser.RULE_timeDecl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 346;
        this.match(KevScriptParser.TIME);
        this.state = 349;
        switch(this._input.LA(1)) {
        case KevScriptParser.NUMERIC_VALUE:
            this.state = 347;
            this.match(KevScriptParser.NUMERIC_VALUE);
            break;
        case KevScriptParser.AMPERSAND:
        case KevScriptParser.ID:
            this.state = 348;
            this.identifier();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 351;
        this.match(KevScriptParser.LC_BRACKET);
        this.state = 355;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << KevScriptParser.IMPORT) | (1 << KevScriptParser.EXPORT) | (1 << KevScriptParser.FOR) | (1 << KevScriptParser.INSTANCE) | (1 << KevScriptParser.ADD) | (1 << KevScriptParser.TIME) | (1 << KevScriptParser.WORLD) | (1 << KevScriptParser.REMOVE) | (1 << KevScriptParser.START) | (1 << KevScriptParser.STOP) | (1 << KevScriptParser.SET))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (KevScriptParser.DETACH - 32)) | (1 << (KevScriptParser.REATTACH - 32)) | (1 << (KevScriptParser.MOVE - 32)) | (1 << (KevScriptParser.ATTACH - 32)) | (1 << (KevScriptParser.BIND - 32)) | (1 << (KevScriptParser.UNBIND - 32)) | (1 << (KevScriptParser.LET - 32)) | (1 << (KevScriptParser.FUNCTION - 32)) | (1 << (KevScriptParser.NETINIT - 32)) | (1 << (KevScriptParser.NETMERGE - 32)) | (1 << (KevScriptParser.NETREMOVE - 32)) | (1 << (KevScriptParser.METAINIT - 32)) | (1 << (KevScriptParser.METAMERGE - 32)) | (1 << (KevScriptParser.METAREMOVE - 32)) | (1 << (KevScriptParser.ID - 32)))) !== 0)) {
            this.state = 352;
            this.statement();
            this.state = 357;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 358;
        this.match(KevScriptParser.RC_BRACKET);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WorldDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_worldDecl;
    return this;
}

WorldDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WorldDeclContext.prototype.constructor = WorldDeclContext;

WorldDeclContext.prototype.WORLD = function() {
    return this.getToken(KevScriptParser.WORLD, 0);
};

WorldDeclContext.prototype.LC_BRACKET = function() {
    return this.getToken(KevScriptParser.LC_BRACKET, 0);
};

WorldDeclContext.prototype.RC_BRACKET = function() {
    return this.getToken(KevScriptParser.RC_BRACKET, 0);
};

WorldDeclContext.prototype.NUMERIC_VALUE = function() {
    return this.getToken(KevScriptParser.NUMERIC_VALUE, 0);
};

WorldDeclContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

WorldDeclContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

WorldDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterWorldDecl(this);
	}
};

WorldDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitWorldDecl(this);
	}
};




KevScriptParser.WorldDeclContext = WorldDeclContext;

KevScriptParser.prototype.worldDecl = function() {

    var localctx = new WorldDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, KevScriptParser.RULE_worldDecl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 360;
        this.match(KevScriptParser.WORLD);
        this.state = 363;
        switch(this._input.LA(1)) {
        case KevScriptParser.NUMERIC_VALUE:
            this.state = 361;
            this.match(KevScriptParser.NUMERIC_VALUE);
            break;
        case KevScriptParser.AMPERSAND:
        case KevScriptParser.ID:
            this.state = 362;
            this.identifier();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 365;
        this.match(KevScriptParser.LC_BRACKET);
        this.state = 369;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << KevScriptParser.IMPORT) | (1 << KevScriptParser.EXPORT) | (1 << KevScriptParser.FOR) | (1 << KevScriptParser.INSTANCE) | (1 << KevScriptParser.ADD) | (1 << KevScriptParser.TIME) | (1 << KevScriptParser.WORLD) | (1 << KevScriptParser.REMOVE) | (1 << KevScriptParser.START) | (1 << KevScriptParser.STOP) | (1 << KevScriptParser.SET))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (KevScriptParser.DETACH - 32)) | (1 << (KevScriptParser.REATTACH - 32)) | (1 << (KevScriptParser.MOVE - 32)) | (1 << (KevScriptParser.ATTACH - 32)) | (1 << (KevScriptParser.BIND - 32)) | (1 << (KevScriptParser.UNBIND - 32)) | (1 << (KevScriptParser.LET - 32)) | (1 << (KevScriptParser.FUNCTION - 32)) | (1 << (KevScriptParser.NETINIT - 32)) | (1 << (KevScriptParser.NETMERGE - 32)) | (1 << (KevScriptParser.NETREMOVE - 32)) | (1 << (KevScriptParser.METAINIT - 32)) | (1 << (KevScriptParser.METAMERGE - 32)) | (1 << (KevScriptParser.METAREMOVE - 32)) | (1 << (KevScriptParser.ID - 32)))) !== 0)) {
            this.state = 366;
            this.statement();
            this.state = 371;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 372;
        this.match(KevScriptParser.RC_BRACKET);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ImportDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_importDecl;
    this.qualifiers = null; // VarIdentifierListContext
    this.resource = null; // StringContext
    return this;
}

ImportDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ImportDeclContext.prototype.constructor = ImportDeclContext;

ImportDeclContext.prototype.IMPORT = function() {
    return this.getToken(KevScriptParser.IMPORT, 0);
};

ImportDeclContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

ImportDeclContext.prototype.FROM = function() {
    return this.getToken(KevScriptParser.FROM, 0);
};

ImportDeclContext.prototype.AS = function() {
    return this.getToken(KevScriptParser.AS, 0);
};

ImportDeclContext.prototype.basicIdentifier = function() {
    return this.getTypedRuleContext(BasicIdentifierContext,0);
};

ImportDeclContext.prototype.varIdentifierList = function() {
    return this.getTypedRuleContext(VarIdentifierListContext,0);
};

ImportDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterImportDecl(this);
	}
};

ImportDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitImportDecl(this);
	}
};




KevScriptParser.ImportDeclContext = ImportDeclContext;

KevScriptParser.prototype.importDecl = function() {

    var localctx = new ImportDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, KevScriptParser.RULE_importDecl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 374;
        this.match(KevScriptParser.IMPORT);
        this.state = 378;
        _la = this._input.LA(1);
        if(_la===KevScriptParser.ID) {
            this.state = 375;
            localctx.qualifiers = this.varIdentifierList();
            this.state = 376;
            this.match(KevScriptParser.FROM);
        }

        this.state = 380;
        localctx.resource = this.string();
        this.state = 383;
        _la = this._input.LA(1);
        if(_la===KevScriptParser.AS) {
            this.state = 381;
            this.match(KevScriptParser.AS);
            this.state = 382;
            this.basicIdentifier();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FuncBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_funcBody;
    return this;
}

FuncBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncBodyContext.prototype.constructor = FuncBodyContext;

FuncBodyContext.prototype.returnStatement = function() {
    return this.getTypedRuleContext(ReturnStatementContext,0);
};

FuncBodyContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

FuncBodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterFuncBody(this);
	}
};

FuncBodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitFuncBody(this);
	}
};




KevScriptParser.FuncBodyContext = FuncBodyContext;

KevScriptParser.prototype.funcBody = function() {

    var localctx = new FuncBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, KevScriptParser.RULE_funcBody);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 388;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << KevScriptParser.IMPORT) | (1 << KevScriptParser.EXPORT) | (1 << KevScriptParser.FOR) | (1 << KevScriptParser.INSTANCE) | (1 << KevScriptParser.ADD) | (1 << KevScriptParser.TIME) | (1 << KevScriptParser.WORLD) | (1 << KevScriptParser.REMOVE) | (1 << KevScriptParser.START) | (1 << KevScriptParser.STOP) | (1 << KevScriptParser.SET))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (KevScriptParser.DETACH - 32)) | (1 << (KevScriptParser.REATTACH - 32)) | (1 << (KevScriptParser.MOVE - 32)) | (1 << (KevScriptParser.ATTACH - 32)) | (1 << (KevScriptParser.BIND - 32)) | (1 << (KevScriptParser.UNBIND - 32)) | (1 << (KevScriptParser.LET - 32)) | (1 << (KevScriptParser.FUNCTION - 32)) | (1 << (KevScriptParser.NETINIT - 32)) | (1 << (KevScriptParser.NETMERGE - 32)) | (1 << (KevScriptParser.NETREMOVE - 32)) | (1 << (KevScriptParser.METAINIT - 32)) | (1 << (KevScriptParser.METAMERGE - 32)) | (1 << (KevScriptParser.METAREMOVE - 32)) | (1 << (KevScriptParser.ID - 32)))) !== 0)) {
            this.state = 385;
            this.statement();
            this.state = 390;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 392;
        _la = this._input.LA(1);
        if(_la===KevScriptParser.RETURN) {
            this.state = 391;
            this.returnStatement();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ReturnStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_returnStatement;
    return this;
}

ReturnStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnStatementContext.prototype.constructor = ReturnStatementContext;

ReturnStatementContext.prototype.RETURN = function() {
    return this.getToken(KevScriptParser.RETURN, 0);
};

ReturnStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ReturnStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterReturnStatement(this);
	}
};

ReturnStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitReturnStatement(this);
	}
};




KevScriptParser.ReturnStatementContext = ReturnStatementContext;

KevScriptParser.prototype.returnStatement = function() {

    var localctx = new ReturnStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, KevScriptParser.RULE_returnStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 394;
        this.match(KevScriptParser.RETURN);
        this.state = 395;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

ExpressionContext.prototype.objectDecl = function() {
    return this.getTypedRuleContext(ObjectDeclContext,0);
};

ExpressionContext.prototype.contextRef = function() {
    return this.getTypedRuleContext(ContextRefContext,0);
};

ExpressionContext.prototype.arrayDecl = function() {
    return this.getTypedRuleContext(ArrayDeclContext,0);
};

ExpressionContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

ExpressionContext.prototype.instancePath = function() {
    return this.getTypedRuleContext(InstancePathContext,0);
};

ExpressionContext.prototype.portPath = function() {
    return this.getTypedRuleContext(PortPathContext,0);
};

ExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionContext.prototype.CONCAT = function() {
    return this.getToken(KevScriptParser.CONCAT, 0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitExpression(this);
	}
};



KevScriptParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 70;
    this.enterRecursionRule(localctx, 70, KevScriptParser.RULE_expression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 405;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
        switch(la_) {
        case 1:
            this.state = 398;
            this.string();
            break;

        case 2:
            this.state = 399;
            this.objectDecl();
            break;

        case 3:
            this.state = 400;
            this.contextRef();
            break;

        case 4:
            this.state = 401;
            this.arrayDecl();
            break;

        case 5:
            this.state = 402;
            this.identifier();
            break;

        case 6:
            this.state = 403;
            this.instancePath();
            break;

        case 7:
            this.state = 404;
            this.portPath();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 412;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,34,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ExpressionContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, KevScriptParser.RULE_expression);
                this.state = 407;
                if (!( this.precpred(this._ctx, 5))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                }
                this.state = 408;
                this.match(KevScriptParser.CONCAT);
                this.state = 409;
                this.expression(6); 
            }
            this.state = 414;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,34,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function ExpressionListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_expressionList;
    return this;
}

ExpressionListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionListContext.prototype.constructor = ExpressionListContext;

ExpressionListContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(KevScriptParser.COMMA);
    } else {
        return this.getToken(KevScriptParser.COMMA, i);
    }
};


ExpressionListContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterExpressionList(this);
	}
};

ExpressionListContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitExpressionList(this);
	}
};




KevScriptParser.ExpressionListContext = ExpressionListContext;

KevScriptParser.prototype.expressionList = function() {

    var localctx = new ExpressionListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, KevScriptParser.RULE_expressionList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 415;
        this.expression(0);
        this.state = 420;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===KevScriptParser.COMMA) {
            this.state = 416;
            this.match(KevScriptParser.COMMA);
            this.state = 417;
            this.expression(0);
            this.state = 422;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArrayAccessContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_arrayAccess;
    return this;
}

ArrayAccessContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayAccessContext.prototype.constructor = ArrayAccessContext;

ArrayAccessContext.prototype.LS_BRACKET = function() {
    return this.getToken(KevScriptParser.LS_BRACKET, 0);
};

ArrayAccessContext.prototype.NUMERIC_VALUE = function() {
    return this.getToken(KevScriptParser.NUMERIC_VALUE, 0);
};

ArrayAccessContext.prototype.RS_BRACKET = function() {
    return this.getToken(KevScriptParser.RS_BRACKET, 0);
};

ArrayAccessContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterArrayAccess(this);
	}
};

ArrayAccessContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitArrayAccess(this);
	}
};




KevScriptParser.ArrayAccessContext = ArrayAccessContext;

KevScriptParser.prototype.arrayAccess = function() {

    var localctx = new ArrayAccessContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, KevScriptParser.RULE_arrayAccess);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 423;
        this.match(KevScriptParser.LS_BRACKET);
        this.state = 424;
        this.match(KevScriptParser.NUMERIC_VALUE);
        this.state = 425;
        this.match(KevScriptParser.RS_BRACKET);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ContextIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_contextIdentifier;
    return this;
}

ContextIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ContextIdentifierContext.prototype.constructor = ContextIdentifierContext;

ContextIdentifierContext.prototype.basicIdentifier = function() {
    return this.getTypedRuleContext(BasicIdentifierContext,0);
};

ContextIdentifierContext.prototype.contextRef = function() {
    return this.getTypedRuleContext(ContextRefContext,0);
};

ContextIdentifierContext.prototype.arrayAccess = function() {
    return this.getTypedRuleContext(ArrayAccessContext,0);
};

ContextIdentifierContext.prototype.DOT = function() {
    return this.getToken(KevScriptParser.DOT, 0);
};

ContextIdentifierContext.prototype.contextIdentifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ContextIdentifierContext);
    } else {
        return this.getTypedRuleContext(ContextIdentifierContext,i);
    }
};

ContextIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterContextIdentifier(this);
	}
};

ContextIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitContextIdentifier(this);
	}
};



KevScriptParser.prototype.contextIdentifier = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ContextIdentifierContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 76;
    this.enterRecursionRule(localctx, 76, KevScriptParser.RULE_contextIdentifier, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 436;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
        switch(la_) {
        case 1:
            this.state = 428;
            this.basicIdentifier();
            break;

        case 2:
            this.state = 429;
            this.contextRef();
            break;

        case 3:
            this.state = 430;
            this.basicIdentifier();
            this.state = 431;
            this.arrayAccess();
            this.state = 434;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
            if(la_===1) {
                this.state = 432;
                this.match(KevScriptParser.DOT);
                this.state = 433;
                this.contextIdentifier(0);

            }
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 443;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,38,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ContextIdentifierContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, KevScriptParser.RULE_contextIdentifier);
                this.state = 438;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 439;
                this.match(KevScriptParser.DOT);
                this.state = 440;
                this.contextIdentifier(2); 
            }
            this.state = 445;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,38,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function ContextRefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_contextRef;
    return this;
}

ContextRefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ContextRefContext.prototype.constructor = ContextRefContext;

ContextRefContext.prototype.AMPERSAND = function() {
    return this.getToken(KevScriptParser.AMPERSAND, 0);
};

ContextRefContext.prototype.contextIdentifier = function() {
    return this.getTypedRuleContext(ContextIdentifierContext,0);
};

ContextRefContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterContextRef(this);
	}
};

ContextRefContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitContextRef(this);
	}
};




KevScriptParser.ContextRefContext = ContextRefContext;

KevScriptParser.prototype.contextRef = function() {

    var localctx = new ContextRefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, KevScriptParser.RULE_contextRef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 446;
        this.match(KevScriptParser.AMPERSAND);
        this.state = 447;
        this.contextIdentifier(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_identifier;
    return this;
}

IdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierContext.prototype.constructor = IdentifierContext;

IdentifierContext.prototype.basicIdentifier = function() {
    return this.getTypedRuleContext(BasicIdentifierContext,0);
};

IdentifierContext.prototype.DOT = function() {
    return this.getToken(KevScriptParser.DOT, 0);
};

IdentifierContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

IdentifierContext.prototype.contextRef = function() {
    return this.getTypedRuleContext(ContextRefContext,0);
};

IdentifierContext.prototype.funcCall = function() {
    return this.getTypedRuleContext(FuncCallContext,0);
};

IdentifierContext.prototype.arrayAccess = function() {
    return this.getTypedRuleContext(ArrayAccessContext,0);
};

IdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterIdentifier(this);
	}
};

IdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitIdentifier(this);
	}
};




KevScriptParser.IdentifierContext = IdentifierContext;

KevScriptParser.prototype.identifier = function() {

    var localctx = new IdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, KevScriptParser.RULE_identifier);
    try {
        this.state = 472;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 449;
            this.basicIdentifier();
            this.state = 452;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
            if(la_===1) {
                this.state = 450;
                this.match(KevScriptParser.DOT);
                this.state = 451;
                this.identifier();

            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 454;
            this.contextRef();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 455;
            this.funcCall();
            this.state = 458;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
            if(la_===1) {
                this.state = 456;
                this.match(KevScriptParser.DOT);
                this.state = 457;
                this.identifier();

            }
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 460;
            this.basicIdentifier();
            this.state = 461;
            this.arrayAccess();
            this.state = 464;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,41,this._ctx);
            if(la_===1) {
                this.state = 462;
                this.match(KevScriptParser.DOT);
                this.state = 463;
                this.identifier();

            }
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 466;
            this.funcCall();
            this.state = 467;
            this.arrayAccess();
            this.state = 470;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
            if(la_===1) {
                this.state = 468;
                this.match(KevScriptParser.DOT);
                this.state = 469;
                this.identifier();

            }
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IdentifierListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_identifierList;
    this._identifier = null; // IdentifierContext
    this.identifiers = []; // of IdentifierContexts
    return this;
}

IdentifierListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierListContext.prototype.constructor = IdentifierListContext;

IdentifierListContext.prototype.identifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentifierContext);
    } else {
        return this.getTypedRuleContext(IdentifierContext,i);
    }
};

IdentifierListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(KevScriptParser.COMMA);
    } else {
        return this.getToken(KevScriptParser.COMMA, i);
    }
};


IdentifierListContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterIdentifierList(this);
	}
};

IdentifierListContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitIdentifierList(this);
	}
};




KevScriptParser.IdentifierListContext = IdentifierListContext;

KevScriptParser.prototype.identifierList = function() {

    var localctx = new IdentifierListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, KevScriptParser.RULE_identifierList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 474;
        localctx._identifier = this.identifier();
        localctx.identifiers.push(localctx._identifier);
        this.state = 479;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===KevScriptParser.COMMA) {
            this.state = 475;
            this.match(KevScriptParser.COMMA);
            this.state = 476;
            localctx._identifier = this.identifier();
            localctx.identifiers.push(localctx._identifier);
            this.state = 481;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function InstancePathContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_instancePath;
    return this;
}

InstancePathContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InstancePathContext.prototype.constructor = InstancePathContext;

InstancePathContext.prototype.identifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentifierContext);
    } else {
        return this.getTypedRuleContext(IdentifierContext,i);
    }
};

InstancePathContext.prototype.COLON = function() {
    return this.getToken(KevScriptParser.COLON, 0);
};

InstancePathContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterInstancePath(this);
	}
};

InstancePathContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitInstancePath(this);
	}
};




KevScriptParser.InstancePathContext = InstancePathContext;

KevScriptParser.prototype.instancePath = function() {

    var localctx = new InstancePathContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, KevScriptParser.RULE_instancePath);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 482;
        this.identifier();
        this.state = 485;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,45,this._ctx);
        if(la_===1) {
            this.state = 483;
            this.match(KevScriptParser.COLON);
            this.state = 484;
            this.identifier();

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PortPathContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_portPath;
    return this;
}

PortPathContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PortPathContext.prototype.constructor = PortPathContext;

PortPathContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

PortPathContext.prototype.instancePath = function() {
    return this.getTypedRuleContext(InstancePathContext,0);
};

PortPathContext.prototype.LEFT_ARROW = function() {
    return this.getToken(KevScriptParser.LEFT_ARROW, 0);
};

PortPathContext.prototype.RIGHT_ARROW = function() {
    return this.getToken(KevScriptParser.RIGHT_ARROW, 0);
};

PortPathContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterPortPath(this);
	}
};

PortPathContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitPortPath(this);
	}
};




KevScriptParser.PortPathContext = PortPathContext;

KevScriptParser.prototype.portPath = function() {

    var localctx = new PortPathContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, KevScriptParser.RULE_portPath);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 490;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,46,this._ctx);
        if(la_===1) {
            this.state = 487;
            this.instancePath();
            this.state = 488;
            _la = this._input.LA(1);
            if(!(_la===KevScriptParser.LEFT_ARROW || _la===KevScriptParser.RIGHT_ARROW)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }

        }
        this.state = 492;
        this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DictionaryPathContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_dictionaryPath;
    this.name = null; // IdentifierContext
    this.fragmentName = null; // IdentifierContext
    return this;
}

DictionaryPathContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DictionaryPathContext.prototype.constructor = DictionaryPathContext;

DictionaryPathContext.prototype.instancePath = function() {
    return this.getTypedRuleContext(InstancePathContext,0);
};

DictionaryPathContext.prototype.SHARP = function() {
    return this.getToken(KevScriptParser.SHARP, 0);
};

DictionaryPathContext.prototype.identifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentifierContext);
    } else {
        return this.getTypedRuleContext(IdentifierContext,i);
    }
};

DictionaryPathContext.prototype.SLASH = function() {
    return this.getToken(KevScriptParser.SLASH, 0);
};

DictionaryPathContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterDictionaryPath(this);
	}
};

DictionaryPathContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitDictionaryPath(this);
	}
};




KevScriptParser.DictionaryPathContext = DictionaryPathContext;

KevScriptParser.prototype.dictionaryPath = function() {

    var localctx = new DictionaryPathContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, KevScriptParser.RULE_dictionaryPath);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 494;
        this.instancePath();
        this.state = 495;
        this.match(KevScriptParser.SHARP);
        this.state = 496;
        localctx.name = this.identifier();
        this.state = 499;
        _la = this._input.LA(1);
        if(_la===KevScriptParser.SLASH) {
            this.state = 497;
            this.match(KevScriptParser.SLASH);
            this.state = 498;
            localctx.fragmentName = this.identifier();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function InstanceListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_instanceList;
    this._instancePath = null; // InstancePathContext
    this.instances = []; // of InstancePathContexts
    return this;
}

InstanceListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InstanceListContext.prototype.constructor = InstanceListContext;

InstanceListContext.prototype.instancePath = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(InstancePathContext);
    } else {
        return this.getTypedRuleContext(InstancePathContext,i);
    }
};

InstanceListContext.prototype.LS_BRACKET = function() {
    return this.getToken(KevScriptParser.LS_BRACKET, 0);
};

InstanceListContext.prototype.RS_BRACKET = function() {
    return this.getToken(KevScriptParser.RS_BRACKET, 0);
};

InstanceListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(KevScriptParser.COMMA);
    } else {
        return this.getToken(KevScriptParser.COMMA, i);
    }
};


InstanceListContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterInstanceList(this);
	}
};

InstanceListContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitInstanceList(this);
	}
};




KevScriptParser.InstanceListContext = InstanceListContext;

KevScriptParser.prototype.instanceList = function() {

    var localctx = new InstanceListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, KevScriptParser.RULE_instanceList);
    var _la = 0; // Token type
    try {
        this.state = 513;
        switch(this._input.LA(1)) {
        case KevScriptParser.AMPERSAND:
        case KevScriptParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 501;
            localctx._instancePath = this.instancePath();
            localctx.instances.push(localctx._instancePath);
            break;
        case KevScriptParser.LS_BRACKET:
            this.enterOuterAlt(localctx, 2);
            this.state = 502;
            this.match(KevScriptParser.LS_BRACKET);
            this.state = 503;
            localctx._instancePath = this.instancePath();
            localctx.instances.push(localctx._instancePath);
            this.state = 508;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===KevScriptParser.COMMA) {
                this.state = 504;
                this.match(KevScriptParser.COMMA);
                this.state = 505;
                localctx._instancePath = this.instancePath();
                localctx.instances.push(localctx._instancePath);
                this.state = 510;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 511;
            this.match(KevScriptParser.RS_BRACKET);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PortListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_portList;
    this._portPath = null; // PortPathContext
    this.instances = []; // of PortPathContexts
    return this;
}

PortListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PortListContext.prototype.constructor = PortListContext;

PortListContext.prototype.portPath = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PortPathContext);
    } else {
        return this.getTypedRuleContext(PortPathContext,i);
    }
};

PortListContext.prototype.LS_BRACKET = function() {
    return this.getToken(KevScriptParser.LS_BRACKET, 0);
};

PortListContext.prototype.RS_BRACKET = function() {
    return this.getToken(KevScriptParser.RS_BRACKET, 0);
};

PortListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(KevScriptParser.COMMA);
    } else {
        return this.getToken(KevScriptParser.COMMA, i);
    }
};


PortListContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterPortList(this);
	}
};

PortListContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitPortList(this);
	}
};




KevScriptParser.PortListContext = PortListContext;

KevScriptParser.prototype.portList = function() {

    var localctx = new PortListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, KevScriptParser.RULE_portList);
    var _la = 0; // Token type
    try {
        this.state = 527;
        switch(this._input.LA(1)) {
        case KevScriptParser.AMPERSAND:
        case KevScriptParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 515;
            localctx._portPath = this.portPath();
            localctx.instances.push(localctx._portPath);
            break;
        case KevScriptParser.LS_BRACKET:
            this.enterOuterAlt(localctx, 2);
            this.state = 516;
            this.match(KevScriptParser.LS_BRACKET);
            this.state = 517;
            localctx._portPath = this.portPath();
            localctx.instances.push(localctx._portPath);
            this.state = 522;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===KevScriptParser.COMMA) {
                this.state = 518;
                this.match(KevScriptParser.COMMA);
                this.state = 519;
                localctx._portPath = this.portPath();
                localctx.instances.push(localctx._portPath);
                this.state = 524;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 525;
            this.match(KevScriptParser.RS_BRACKET);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_type;
    return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;

TypeContext.prototype.typeName = function() {
    return this.getTypedRuleContext(TypeNameContext,0);
};

TypeContext.prototype.SLASH = function() {
    return this.getToken(KevScriptParser.SLASH, 0);
};

TypeContext.prototype.version = function() {
    return this.getTypedRuleContext(VersionContext,0);
};

TypeContext.prototype.duVersions = function() {
    return this.getTypedRuleContext(DuVersionsContext,0);
};

TypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterType(this);
	}
};

TypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitType(this);
	}
};




KevScriptParser.TypeContext = TypeContext;

KevScriptParser.prototype.type = function() {

    var localctx = new TypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, KevScriptParser.RULE_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 529;
        this.typeName();
        this.state = 535;
        _la = this._input.LA(1);
        if(_la===KevScriptParser.SLASH) {
            this.state = 530;
            this.match(KevScriptParser.SLASH);
            this.state = 531;
            this.version();
            this.state = 533;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,52,this._ctx);
            if(la_===1) {
                this.state = 532;
                this.duVersions();

            }
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TypeNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_typeName;
    return this;
}

TypeNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeNameContext.prototype.constructor = TypeNameContext;

TypeNameContext.prototype.basicIdentifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BasicIdentifierContext);
    } else {
        return this.getTypedRuleContext(BasicIdentifierContext,i);
    }
};

TypeNameContext.prototype.DOT = function() {
    return this.getToken(KevScriptParser.DOT, 0);
};

TypeNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterTypeName(this);
	}
};

TypeNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitTypeName(this);
	}
};




KevScriptParser.TypeNameContext = TypeNameContext;

KevScriptParser.prototype.typeName = function() {

    var localctx = new TypeNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, KevScriptParser.RULE_typeName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 540;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,54,this._ctx);
        if(la_===1) {
            this.state = 537;
            this.basicIdentifier();
            this.state = 538;
            this.match(KevScriptParser.DOT);

        }
        this.state = 542;
        this.basicIdentifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VersionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_version;
    return this;
}

VersionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VersionContext.prototype.constructor = VersionContext;

VersionContext.prototype.NUMERIC_VALUE = function() {
    return this.getToken(KevScriptParser.NUMERIC_VALUE, 0);
};

VersionContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

VersionContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterVersion(this);
	}
};

VersionContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitVersion(this);
	}
};




KevScriptParser.VersionContext = VersionContext;

KevScriptParser.prototype.version = function() {

    var localctx = new VersionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, KevScriptParser.RULE_version);
    try {
        this.state = 546;
        switch(this._input.LA(1)) {
        case KevScriptParser.NUMERIC_VALUE:
            this.enterOuterAlt(localctx, 1);
            this.state = 544;
            this.match(KevScriptParser.NUMERIC_VALUE);
            break;
        case KevScriptParser.AMPERSAND:
        case KevScriptParser.ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 545;
            this.identifier();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DuVersionsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_duVersions;
    return this;
}

DuVersionsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DuVersionsContext.prototype.constructor = DuVersionsContext;

DuVersionsContext.prototype.objectDecl = function() {
    return this.getTypedRuleContext(ObjectDeclContext,0);
};

DuVersionsContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

DuVersionsContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterDuVersions(this);
	}
};

DuVersionsContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitDuVersions(this);
	}
};




KevScriptParser.DuVersionsContext = DuVersionsContext;

KevScriptParser.prototype.duVersions = function() {

    var localctx = new DuVersionsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, KevScriptParser.RULE_duVersions);
    try {
        this.state = 550;
        switch(this._input.LA(1)) {
        case KevScriptParser.LC_BRACKET:
            this.enterOuterAlt(localctx, 1);
            this.state = 548;
            this.objectDecl();
            break;
        case KevScriptParser.AMPERSAND:
        case KevScriptParser.ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 549;
            this.identifier();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StringContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_string;
    this.value = null; // Token
    return this;
}

StringContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringContext.prototype.constructor = StringContext;

StringContext.prototype.SQ_STR = function() {
    return this.getToken(KevScriptParser.SQ_STR, 0);
};

StringContext.prototype.DQ_STR = function() {
    return this.getToken(KevScriptParser.DQ_STR, 0);
};

StringContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterString(this);
	}
};

StringContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitString(this);
	}
};




KevScriptParser.StringContext = StringContext;

KevScriptParser.prototype.string = function() {

    var localctx = new StringContext(this, this._ctx, this.state);
    this.enterRule(localctx, 102, KevScriptParser.RULE_string);
    try {
        this.state = 554;
        switch(this._input.LA(1)) {
        case KevScriptParser.SQ_STR:
            this.enterOuterAlt(localctx, 1);
            this.state = 552;
            localctx.value = this.match(KevScriptParser.SQ_STR);
            break;
        case KevScriptParser.DQ_STR:
            this.enterOuterAlt(localctx, 2);
            this.state = 553;
            localctx.value = this.match(KevScriptParser.DQ_STR);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BasicIdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_basicIdentifier;
    return this;
}

BasicIdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BasicIdentifierContext.prototype.constructor = BasicIdentifierContext;

BasicIdentifierContext.prototype.ID = function() {
    return this.getToken(KevScriptParser.ID, 0);
};

BasicIdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterBasicIdentifier(this);
	}
};

BasicIdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitBasicIdentifier(this);
	}
};




KevScriptParser.BasicIdentifierContext = BasicIdentifierContext;

KevScriptParser.prototype.basicIdentifier = function() {

    var localctx = new BasicIdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 104, KevScriptParser.RULE_basicIdentifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 556;
        this.match(KevScriptParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


KevScriptParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 35:
			return this.expression_sempred(localctx, predIndex);
	case 38:
			return this.contextIdentifier_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

KevScriptParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

KevScriptParser.prototype.contextIdentifier_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.KevScriptParser = KevScriptParser;
