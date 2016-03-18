// Generated from grammar/src/main/antlr4/org/kevoree/kevscript/KevScript.g4 by ANTLR 4.5.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var KevScriptListener = require('./KevScriptListener').KevScriptListener;
var grammarFileName = "KevScript.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u00030\u01f9\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u00042\t2\u0003",
    "\u0002\u0007\u0002f\n\u0002\f\u0002\u000e\u0002i\u000b\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003\u0080\n\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0005\u0004\u0086\n\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0005\u0004\u008f\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005\u0098\n\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0005\u0005\u00a1\n\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u00c1\n\f\u0003\f\u0003\f",
    "\u0003\f\u0003\f\u0005\f\u00c7\n\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0005\u0010\u00da\n\u0010\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0005\u0011\u00e0\n\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0005\u0012\u00ec\n\u0012\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0005\u0013\u00f2\n\u0013\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u00f8\n\u0014\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u0104\n\u0015\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0007\u0016\u0109\n\u0016\f\u0016\u000e",
    "\u0016\u010c\u000b\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0005\u0017\u0112\n\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0005\u0018\u011f\n\u0018\u0003\u0019\u0007\u0019",
    "\u0122\n\u0019\f\u0019\u000e\u0019\u0125\u000b\u0019\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0007\u001a\u012b\n\u001a\f\u001a\u000e",
    "\u001a\u012e\u000b\u001a\u0005\u001a\u0130\n\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0003",
    "\u001c\u0005\u001c\u013a\n\u001c\u0003\u001c\u0003\u001c\u0003\u001d",
    "\u0005\u001d\u013f\n\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0005",
    "\u001d\u0144\n\u001d\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0003\u001e\u0005\u001e\u014c\n\u001e\u0003\u001e\u0003",
    "\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001f\u0007\u001f\u0154",
    "\n\u001f\f\u001f\u000e\u001f\u0157\u000b\u001f\u0003\u001f\u0005\u001f",
    "\u015a\n\u001f\u0003 \u0003 \u0003 \u0003!\u0003!\u0003!\u0003!\u0003",
    "!\u0003!\u0003!\u0003!\u0003!\u0003!\u0005!\u0169\n!\u0003!\u0003!\u0003",
    "!\u0007!\u016e\n!\f!\u000e!\u0171\u000b!\u0003\"\u0003\"\u0003\"\u0007",
    "\"\u0176\n\"\f\"\u000e\"\u0179\u000b\"\u0003#\u0003#\u0003#\u0003#\u0003",
    "#\u0003$\u0003$\u0003$\u0003$\u0005$\u0184\n$\u0003$\u0003$\u0003$\u0007",
    "$\u0189\n$\f$\u000e$\u018c\u000b$\u0003%\u0003%\u0003%\u0003&\u0003",
    "&\u0003&\u0005&\u0194\n&\u0003&\u0003&\u0003&\u0003&\u0005&\u019a\n",
    "&\u0003&\u0003&\u0003&\u0005&\u019f\n&\u0005&\u01a1\n&\u0003\'\u0003",
    "\'\u0003\'\u0007\'\u01a6\n\'\f\'\u000e\'\u01a9\u000b\'\u0003(\u0003",
    "(\u0003(\u0007(\u01ae\n(\f(\u000e(\u01b1\u000b(\u0003)\u0003)\u0003",
    ")\u0005)\u01b6\n)\u0003)\u0003)\u0003*\u0003*\u0003*\u0003*\u0003*\u0005",
    "*\u01bf\n*\u0003+\u0003+\u0003+\u0003+\u0003+\u0007+\u01c6\n+\f+\u000e",
    "+\u01c9\u000b+\u0003+\u0003+\u0005+\u01cd\n+\u0003,\u0003,\u0003,\u0003",
    ",\u0003,\u0007,\u01d4\n,\f,\u000e,\u01d7\u000b,\u0003,\u0003,\u0005",
    ",\u01db\n,\u0003-\u0003-\u0003-\u0003-\u0005-\u01e1\n-\u0005-\u01e3",
    "\n-\u0003.\u0003.\u0005.\u01e7\n.\u0003.\u0003.\u0003/\u0003/\u0005",
    "/\u01ed\n/\u00030\u00030\u00050\u01f1\n0\u00031\u00031\u00051\u01f5",
    "\n1\u00032\u00032\u00032\u0002\u0004@F3\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@B",
    "DFHJLNPRTVXZ\\^`b\u0002\u0003\u0003\u0002\u0013\u0014\u0219\u0002g\u0003",
    "\u0002\u0002\u0002\u0004\u007f\u0003\u0002\u0002\u0002\u0006\u008e\u0003",
    "\u0002\u0002\u0002\b\u00a0\u0003\u0002\u0002\u0002\n\u00a2\u0003\u0002",
    "\u0002\u0002\f\u00a5\u0003\u0002\u0002\u0002\u000e\u00a8\u0003\u0002",
    "\u0002\u0002\u0010\u00ab\u0003\u0002\u0002\u0002\u0012\u00b0\u0003\u0002",
    "\u0002\u0002\u0014\u00b4\u0003\u0002\u0002\u0002\u0016\u00c6\u0003\u0002",
    "\u0002\u0002\u0018\u00c8\u0003\u0002\u0002\u0002\u001a\u00cc\u0003\u0002",
    "\u0002\u0002\u001c\u00d0\u0003\u0002\u0002\u0002\u001e\u00d5\u0003\u0002",
    "\u0002\u0002 \u00db\u0003\u0002\u0002\u0002\"\u00eb\u0003\u0002\u0002",
    "\u0002$\u00ed\u0003\u0002\u0002\u0002&\u00f3\u0003\u0002\u0002\u0002",
    "(\u0103\u0003\u0002\u0002\u0002*\u0105\u0003\u0002\u0002\u0002,\u010d",
    "\u0003\u0002\u0002\u0002.\u011e\u0003\u0002\u0002\u00020\u0123\u0003",
    "\u0002\u0002\u00022\u0126\u0003\u0002\u0002\u00024\u0133\u0003\u0002",
    "\u0002\u00026\u0137\u0003\u0002\u0002\u00028\u013e\u0003\u0002\u0002",
    "\u0002:\u0147\u0003\u0002\u0002\u0002<\u0155\u0003\u0002\u0002\u0002",
    ">\u015b\u0003\u0002\u0002\u0002@\u0168\u0003\u0002\u0002\u0002B\u0172",
    "\u0003\u0002\u0002\u0002D\u017a\u0003\u0002\u0002\u0002F\u0183\u0003",
    "\u0002\u0002\u0002H\u018d\u0003\u0002\u0002\u0002J\u01a0\u0003\u0002",
    "\u0002\u0002L\u01a2\u0003\u0002\u0002\u0002N\u01aa\u0003\u0002\u0002",
    "\u0002P\u01b5\u0003\u0002\u0002\u0002R\u01b9\u0003\u0002\u0002\u0002",
    "T\u01cc\u0003\u0002\u0002\u0002V\u01da\u0003\u0002\u0002\u0002X\u01dc",
    "\u0003\u0002\u0002\u0002Z\u01e6\u0003\u0002\u0002\u0002\\\u01ec\u0003",
    "\u0002\u0002\u0002^\u01f0\u0003\u0002\u0002\u0002`\u01f4\u0003\u0002",
    "\u0002\u0002b\u01f6\u0003\u0002\u0002\u0002df\u0005\u0004\u0003\u0002",
    "ed\u0003\u0002\u0002\u0002fi\u0003\u0002\u0002\u0002ge\u0003\u0002\u0002",
    "\u0002gh\u0003\u0002\u0002\u0002h\u0003\u0003\u0002\u0002\u0002ig\u0003",
    "\u0002\u0002\u0002j\u0080\u0005\u0006\u0004\u0002k\u0080\u0005\b\u0005",
    "\u0002l\u0080\u0005\n\u0006\u0002m\u0080\u0005\u0012\n\u0002n\u0080",
    "\u0005\u0014\u000b\u0002o\u0080\u0005\u0016\f\u0002p\u0080\u0005\f\u0007",
    "\u0002q\u0080\u0005\u000e\b\u0002r\u0080\u0005\u0010\t\u0002s\u0080",
    "\u0005\u0018\r\u0002t\u0080\u0005\u001a\u000e\u0002u\u0080\u0005\u001e",
    "\u0010\u0002v\u0080\u0005 \u0011\u0002w\u0080\u0005\"\u0012\u0002x\u0080",
    "\u0005$\u0013\u0002y\u0080\u0005&\u0014\u0002z\u0080\u0005(\u0015\u0002",
    "{\u0080\u0005\u001c\u000f\u0002|\u0080\u0005:\u001e\u0002}\u0080\u0005",
    ",\u0017\u0002~\u0080\u00058\u001d\u0002\u007fj\u0003\u0002\u0002\u0002",
    "\u007fk\u0003\u0002\u0002\u0002\u007fl\u0003\u0002\u0002\u0002\u007f",
    "m\u0003\u0002\u0002\u0002\u007fn\u0003\u0002\u0002\u0002\u007fo\u0003",
    "\u0002\u0002\u0002\u007fp\u0003\u0002\u0002\u0002\u007fq\u0003\u0002",
    "\u0002\u0002\u007fr\u0003\u0002\u0002\u0002\u007fs\u0003\u0002\u0002",
    "\u0002\u007ft\u0003\u0002\u0002\u0002\u007fu\u0003\u0002\u0002\u0002",
    "\u007fv\u0003\u0002\u0002\u0002\u007fw\u0003\u0002\u0002\u0002\u007f",
    "x\u0003\u0002\u0002\u0002\u007fy\u0003\u0002\u0002\u0002\u007fz\u0003",
    "\u0002\u0002\u0002\u007f{\u0003\u0002\u0002\u0002\u007f|\u0003\u0002",
    "\u0002\u0002\u007f}\u0003\u0002\u0002\u0002\u007f~\u0003\u0002\u0002",
    "\u0002\u0080\u0005\u0003\u0002\u0002\u0002\u0081\u0082\u0007\u0017\u0002",
    "\u0002\u0082\u0083\u0005b2\u0002\u0083\u0085\u0007\u0006\u0002\u0002",
    "\u0084\u0086\u0005@!\u0002\u0085\u0084\u0003\u0002\u0002\u0002\u0085",
    "\u0086\u0003\u0002\u0002\u0002\u0086\u0087\u0003\u0002\u0002\u0002\u0087",
    "\u0088\u0005X-\u0002\u0088\u008f\u0003\u0002\u0002\u0002\u0089\u008a",
    "\u0007\u0017\u0002\u0002\u008a\u008b\u0005*\u0016\u0002\u008b\u008c",
    "\u0007\u0006\u0002\u0002\u008c\u008d\u0005X-\u0002\u008d\u008f\u0003",
    "\u0002\u0002\u0002\u008e\u0081\u0003\u0002\u0002\u0002\u008e\u0089\u0003",
    "\u0002\u0002\u0002\u008f\u0007\u0003\u0002\u0002\u0002\u0090\u0091\u0007",
    "\u0018\u0002\u0002\u0091\u0097\u0005J&\u0002\u0092\u0093\u0007\r\u0002",
    "\u0002\u0093\u0094\u0005L\'\u0002\u0094\u0095\u0007\u000e\u0002\u0002",
    "\u0095\u0098\u0003\u0002\u0002\u0002\u0096\u0098\u0005J&\u0002\u0097",
    "\u0092\u0003\u0002\u0002\u0002\u0097\u0096\u0003\u0002\u0002\u0002\u0097",
    "\u0098\u0003\u0002\u0002\u0002\u0098\u00a1\u0003\u0002\u0002\u0002\u0099",
    "\u009a\u0007\u0018\u0002\u0002\u009a\u009b\u0007\r\u0002\u0002\u009b",
    "\u009c\u0005L\'\u0002\u009c\u009d\u0007\u000e\u0002\u0002\u009d\u00a1",
    "\u0003\u0002\u0002\u0002\u009e\u009f\u0007\u0018\u0002\u0002\u009f\u00a1",
    "\u0005T+\u0002\u00a0\u0090\u0003\u0002\u0002\u0002\u00a0\u0099\u0003",
    "\u0002\u0002\u0002\u00a0\u009e\u0003\u0002\u0002\u0002\u00a1\t\u0003",
    "\u0002\u0002\u0002\u00a2\u00a3\u0007\u0019\u0002\u0002\u00a3\u00a4\u0005",
    "T+\u0002\u00a4\u000b\u0003\u0002\u0002\u0002\u00a5\u00a6\u0007\u001a",
    "\u0002\u0002\u00a6\u00a7\u0005T+\u0002\u00a7\r\u0003\u0002\u0002\u0002",
    "\u00a8\u00a9\u0007\u001b\u0002\u0002\u00a9\u00aa\u0005T+\u0002\u00aa",
    "\u000f\u0003\u0002\u0002\u0002\u00ab\u00ac\u0007\u001c\u0002\u0002\u00ac",
    "\u00ad\u0005R*\u0002\u00ad\u00ae\u0007\u0006\u0002\u0002\u00ae\u00af",
    "\u0005@!\u0002\u00af\u0011\u0003\u0002\u0002\u0002\u00b0\u00b1\u0007",
    "\u001f\u0002\u0002\u00b1\u00b2\u0005J&\u0002\u00b2\u00b3\u0005J&\u0002",
    "\u00b3\u0013\u0003\u0002\u0002\u0002\u00b4\u00b5\u0007\u001d\u0002\u0002",
    "\u00b5\u00b6\u0005J&\u0002\u00b6\u00b7\u0005J&\u0002\u00b7\u0015\u0003",
    "\u0002\u0002\u0002\u00b8\u00b9\u0007\u001e\u0002\u0002\u00b9\u00c0\u0005",
    "J&\u0002\u00ba\u00bb\u0007\r\u0002\u0002\u00bb\u00bc\u0005L\'\u0002",
    "\u00bc\u00bd\u0007\u000e\u0002\u0002\u00bd\u00c1\u0003\u0002\u0002\u0002",
    "\u00be\u00c1\u0005J&\u0002\u00bf\u00c1\u0005T+\u0002\u00c0\u00ba\u0003",
    "\u0002\u0002\u0002\u00c0\u00be\u0003\u0002\u0002\u0002\u00c0\u00bf\u0003",
    "\u0002\u0002\u0002\u00c1\u00c7\u0003\u0002\u0002\u0002\u00c2\u00c3\u0007",
    "\u001e\u0002\u0002\u00c3\u00c4\u0005N(\u0002\u00c4\u00c5\u0005N(\u0002",
    "\u00c5\u00c7\u0003\u0002\u0002\u0002\u00c6\u00b8\u0003\u0002\u0002\u0002",
    "\u00c6\u00c2\u0003\u0002\u0002\u0002\u00c7\u0017\u0003\u0002\u0002\u0002",
    "\u00c8\u00c9\u0007 \u0002\u0002\u00c9\u00ca\u0005J&\u0002\u00ca\u00cb",
    "\u0005V,\u0002\u00cb\u0019\u0003\u0002\u0002\u0002\u00cc\u00cd\u0007",
    "!\u0002\u0002\u00cd\u00ce\u0005J&\u0002\u00ce\u00cf\u0005V,\u0002\u00cf",
    "\u001b\u0003\u0002\u0002\u0002\u00d0\u00d1\u0007\"\u0002\u0002\u00d1",
    "\u00d2\u0005*\u0016\u0002\u00d2\u00d3\u0007\u0006\u0002\u0002\u00d3",
    "\u00d4\u0005@!\u0002\u00d4\u001d\u0003\u0002\u0002\u0002\u00d5\u00d6",
    "\u0007$\u0002\u0002\u00d6\u00d9\u0005J&\u0002\u00d7\u00da\u00052\u001a",
    "\u0002\u00d8\u00da\u0005J&\u0002\u00d9\u00d7\u0003\u0002\u0002\u0002",
    "\u00d9\u00d8\u0003\u0002\u0002\u0002\u00da\u001f\u0003\u0002\u0002\u0002",
    "\u00db\u00dc\u0007%\u0002\u0002\u00dc\u00df\u0005J&\u0002\u00dd\u00e0",
    "\u00052\u001a\u0002\u00de\u00e0\u0005J&\u0002\u00df\u00dd\u0003\u0002",
    "\u0002\u0002\u00df\u00de\u0003\u0002\u0002\u0002\u00e0!\u0003\u0002",
    "\u0002\u0002\u00e1\u00e2\u0007&\u0002\u0002\u00e2\u00e3\u0005J&\u0002",
    "\u00e3\u00e4\u0005J&\u0002\u00e4\u00ec\u0003\u0002\u0002\u0002\u00e5",
    "\u00e6\u0007&\u0002\u0002\u00e6\u00e7\u0005J&\u0002\u00e7\u00e8\u0007",
    "\r\u0002\u0002\u00e8\u00e9\u0005L\'\u0002\u00e9\u00ea\u0007\u000e\u0002",
    "\u0002\u00ea\u00ec\u0003\u0002\u0002\u0002\u00eb\u00e1\u0003\u0002\u0002",
    "\u0002\u00eb\u00e5\u0003\u0002\u0002\u0002\u00ec#\u0003\u0002\u0002",
    "\u0002\u00ed\u00ee\u0007\'\u0002\u0002\u00ee\u00f1\u0005J&\u0002\u00ef",
    "\u00f2\u00052\u001a\u0002\u00f0\u00f2\u0005J&\u0002\u00f1\u00ef\u0003",
    "\u0002\u0002\u0002\u00f1\u00f0\u0003\u0002\u0002\u0002\u00f2%\u0003",
    "\u0002\u0002\u0002\u00f3\u00f4\u0007(\u0002\u0002\u00f4\u00f7\u0005",
    "J&\u0002\u00f5\u00f8\u00052\u001a\u0002\u00f6\u00f8\u0005J&\u0002\u00f7",
    "\u00f5\u0003\u0002\u0002\u0002\u00f7\u00f6\u0003\u0002\u0002\u0002\u00f8",
    "\'\u0003\u0002\u0002\u0002\u00f9\u00fa\u0007)\u0002\u0002\u00fa\u00fb",
    "\u0005J&\u0002\u00fb\u00fc\u0005J&\u0002\u00fc\u0104\u0003\u0002\u0002",
    "\u0002\u00fd\u00fe\u0007)\u0002\u0002\u00fe\u00ff\u0005J&\u0002\u00ff",
    "\u0100\u0007\r\u0002\u0002\u0100\u0101\u0005L\'\u0002\u0101\u0102\u0007",
    "\u000e\u0002\u0002\u0102\u0104\u0003\u0002\u0002\u0002\u0103\u00f9\u0003",
    "\u0002\u0002\u0002\u0103\u00fd\u0003\u0002\u0002\u0002\u0104)\u0003",
    "\u0002\u0002\u0002\u0105\u010a\u0005b2\u0002\u0106\u0107\u0007\b\u0002",
    "\u0002\u0107\u0109\u0005b2\u0002\u0108\u0106\u0003\u0002\u0002\u0002",
    "\u0109\u010c\u0003\u0002\u0002\u0002\u010a\u0108\u0003\u0002\u0002\u0002",
    "\u010a\u010b\u0003\u0002\u0002\u0002\u010b+\u0003\u0002\u0002\u0002",
    "\u010c\u010a\u0003\u0002\u0002\u0002\u010d\u010e\u0007\u0015\u0002\u0002",
    "\u010e\u0111\u0007\u0012\u0002\u0002\u010f\u0110\u0007-\u0002\u0002",
    "\u0110\u0112\u0007\b\u0002\u0002\u0111\u010f\u0003\u0002\u0002\u0002",
    "\u0111\u0112\u0003\u0002\u0002\u0002\u0112\u0113\u0003\u0002\u0002\u0002",
    "\u0113\u0114\u0007-\u0002\u0002\u0114\u0115\u0007\u0016\u0002\u0002",
    "\u0115\u0116\u0005.\u0018\u0002\u0116\u0117\u0007\u0011\u0002\u0002",
    "\u0117\u0118\u0007\u000f\u0002\u0002\u0118\u0119\u00050\u0019\u0002",
    "\u0119\u011a\u0007\u0010\u0002\u0002\u011a-\u0003\u0002\u0002\u0002",
    "\u011b\u011f\u00056\u001c\u0002\u011c\u011f\u0005J&\u0002\u011d\u011f",
    "\u0005F$\u0002\u011e\u011b\u0003\u0002\u0002\u0002\u011e\u011c\u0003",
    "\u0002\u0002\u0002\u011e\u011d\u0003\u0002\u0002\u0002\u011f/\u0003",
    "\u0002\u0002\u0002\u0120\u0122\u0005\u0004\u0003\u0002\u0121\u0120\u0003",
    "\u0002\u0002\u0002\u0122\u0125\u0003\u0002\u0002\u0002\u0123\u0121\u0003",
    "\u0002\u0002\u0002\u0123\u0124\u0003\u0002\u0002\u0002\u01241\u0003",
    "\u0002\u0002\u0002\u0125\u0123\u0003\u0002\u0002\u0002\u0126\u012f\u0007",
    "\u000f\u0002\u0002\u0127\u012c\u00054\u001b\u0002\u0128\u0129\u0007",
    "\b\u0002\u0002\u0129\u012b\u00054\u001b\u0002\u012a\u0128\u0003\u0002",
    "\u0002\u0002\u012b\u012e\u0003\u0002\u0002\u0002\u012c\u012a\u0003\u0002",
    "\u0002\u0002\u012c\u012d\u0003\u0002\u0002\u0002\u012d\u0130\u0003\u0002",
    "\u0002\u0002\u012e\u012c\u0003\u0002\u0002\u0002\u012f\u0127\u0003\u0002",
    "\u0002\u0002\u012f\u0130\u0003\u0002\u0002\u0002\u0130\u0131\u0003\u0002",
    "\u0002\u0002\u0131\u0132\u0007\u0010\u0002\u0002\u01323\u0003\u0002",
    "\u0002\u0002\u0133\u0134\u0007-\u0002\u0002\u0134\u0135\u0007\u0007",
    "\u0002\u0002\u0135\u0136\u0005@!\u0002\u01365\u0003\u0002\u0002\u0002",
    "\u0137\u0139\u0007\r\u0002\u0002\u0138\u013a\u0005B\"\u0002\u0139\u0138",
    "\u0003\u0002\u0002\u0002\u0139\u013a\u0003\u0002\u0002\u0002\u013a\u013b",
    "\u0003\u0002\u0002\u0002\u013b\u013c\u0007\u000e\u0002\u0002\u013c7",
    "\u0003\u0002\u0002\u0002\u013d\u013f\u0007\u0003\u0002\u0002\u013e\u013d",
    "\u0003\u0002\u0002\u0002\u013e\u013f\u0003\u0002\u0002\u0002\u013f\u0140",
    "\u0003\u0002\u0002\u0002\u0140\u0141\u0007-\u0002\u0002\u0141\u0143",
    "\u0007\u0012\u0002\u0002\u0142\u0144\u0005B\"\u0002\u0143\u0142\u0003",
    "\u0002\u0002\u0002\u0143\u0144\u0003\u0002\u0002\u0002\u0144\u0145\u0003",
    "\u0002\u0002\u0002\u0145\u0146\u0007\u0011\u0002\u0002\u01469\u0003",
    "\u0002\u0002\u0002\u0147\u0148\u0007#\u0002\u0002\u0148\u0149\u0007",
    "-\u0002\u0002\u0149\u014b\u0007\u0012\u0002\u0002\u014a\u014c\u0005",
    "*\u0016\u0002\u014b\u014a\u0003\u0002\u0002\u0002\u014b\u014c\u0003",
    "\u0002\u0002\u0002\u014c\u014d\u0003\u0002\u0002\u0002\u014d\u014e\u0007",
    "\u0011\u0002\u0002\u014e\u014f\u0007\u000f\u0002\u0002\u014f\u0150\u0005",
    "<\u001f\u0002\u0150\u0151\u0007\u0010\u0002\u0002\u0151;\u0003\u0002",
    "\u0002\u0002\u0152\u0154\u0005\u0004\u0003\u0002\u0153\u0152\u0003\u0002",
    "\u0002\u0002\u0154\u0157\u0003\u0002\u0002\u0002\u0155\u0153\u0003\u0002",
    "\u0002\u0002\u0155\u0156\u0003\u0002\u0002\u0002\u0156\u0159\u0003\u0002",
    "\u0002\u0002\u0157\u0155\u0003\u0002\u0002\u0002\u0158\u015a\u0005>",
    " \u0002\u0159\u0158\u0003\u0002\u0002\u0002\u0159\u015a\u0003\u0002",
    "\u0002\u0002\u015a=\u0003\u0002\u0002\u0002\u015b\u015c\u0007\u0005",
    "\u0002\u0002\u015c\u015d\u0005@!\u0002\u015d?\u0003\u0002\u0002\u0002",
    "\u015e\u015f\b!\u0001\u0002\u015f\u0169\u0005`1\u0002\u0160\u0169\u0005",
    "2\u001a\u0002\u0161\u0169\u0005F$\u0002\u0162\u0169\u00056\u001c\u0002",
    "\u0163\u0169\u0005D#\u0002\u0164\u0169\u0005J&\u0002\u0165\u0169\u0005",
    "8\u001d\u0002\u0166\u0169\u0005N(\u0002\u0167\u0169\u0005P)\u0002\u0168",
    "\u015e\u0003\u0002\u0002\u0002\u0168\u0160\u0003\u0002\u0002\u0002\u0168",
    "\u0161\u0003\u0002\u0002\u0002\u0168\u0162\u0003\u0002\u0002\u0002\u0168",
    "\u0163\u0003\u0002\u0002\u0002\u0168\u0164\u0003\u0002\u0002\u0002\u0168",
    "\u0165\u0003\u0002\u0002\u0002\u0168\u0166\u0003\u0002\u0002\u0002\u0168",
    "\u0167\u0003\u0002\u0002\u0002\u0169\u016f\u0003\u0002\u0002\u0002\u016a",
    "\u016b\f\t\u0002\u0002\u016b\u016c\u0007\n\u0002\u0002\u016c\u016e\u0005",
    "@!\n\u016d\u016a\u0003\u0002\u0002\u0002\u016e\u0171\u0003\u0002\u0002",
    "\u0002\u016f\u016d\u0003\u0002\u0002\u0002\u016f\u0170\u0003\u0002\u0002",
    "\u0002\u0170A\u0003\u0002\u0002\u0002\u0171\u016f\u0003\u0002\u0002",
    "\u0002\u0172\u0177\u0005@!\u0002\u0173\u0174\u0007\b\u0002\u0002\u0174",
    "\u0176\u0005@!\u0002\u0175\u0173\u0003\u0002\u0002\u0002\u0176\u0179",
    "\u0003\u0002\u0002\u0002\u0177\u0175\u0003\u0002\u0002\u0002\u0177\u0178",
    "\u0003\u0002\u0002\u0002\u0178C\u0003\u0002\u0002\u0002\u0179\u0177",
    "\u0003\u0002\u0002\u0002\u017a\u017b\u0007-\u0002\u0002\u017b\u017c",
    "\u0007\r\u0002\u0002\u017c\u017d\u0007,\u0002\u0002\u017d\u017e\u0007",
    "\u000e\u0002\u0002\u017eE\u0003\u0002\u0002\u0002\u017f\u0180\b$\u0001",
    "\u0002\u0180\u0184\u0007-\u0002\u0002\u0181\u0184\u0005H%\u0002\u0182",
    "\u0184\u0005D#\u0002\u0183\u017f\u0003\u0002\u0002\u0002\u0183\u0181",
    "\u0003\u0002\u0002\u0002\u0183\u0182\u0003\u0002\u0002\u0002\u0184\u018a",
    "\u0003\u0002\u0002\u0002\u0185\u0186\f\u0003\u0002\u0002\u0186\u0187",
    "\u0007\t\u0002\u0002\u0187\u0189\u0005F$\u0004\u0188\u0185\u0003\u0002",
    "\u0002\u0002\u0189\u018c\u0003\u0002\u0002\u0002\u018a\u0188\u0003\u0002",
    "\u0002\u0002\u018a\u018b\u0003\u0002\u0002\u0002\u018bG\u0003\u0002",
    "\u0002\u0002\u018c\u018a\u0003\u0002\u0002\u0002\u018d\u018e\u0007\u000b",
    "\u0002\u0002\u018e\u018f\u0005F$\u0002\u018fI\u0003\u0002\u0002\u0002",
    "\u0190\u0193\u0007-\u0002\u0002\u0191\u0192\u0007\t\u0002\u0002\u0192",
    "\u0194\u0005J&\u0002\u0193\u0191\u0003\u0002\u0002\u0002\u0193\u0194",
    "\u0003\u0002\u0002\u0002\u0194\u01a1\u0003\u0002\u0002\u0002\u0195\u01a1",
    "\u0005H%\u0002\u0196\u0199\u00058\u001d\u0002\u0197\u0198\u0007\t\u0002",
    "\u0002\u0198\u019a\u0005J&\u0002\u0199\u0197\u0003\u0002\u0002\u0002",
    "\u0199\u019a\u0003\u0002\u0002\u0002\u019a\u01a1\u0003\u0002\u0002\u0002",
    "\u019b\u019e\u0005D#\u0002\u019c\u019d\u0007\t\u0002\u0002\u019d\u019f",
    "\u0005J&\u0002\u019e\u019c\u0003\u0002\u0002\u0002\u019e\u019f\u0003",
    "\u0002\u0002\u0002\u019f\u01a1\u0003\u0002\u0002\u0002\u01a0\u0190\u0003",
    "\u0002\u0002\u0002\u01a0\u0195\u0003\u0002\u0002\u0002\u01a0\u0196\u0003",
    "\u0002\u0002\u0002\u01a0\u019b\u0003\u0002\u0002\u0002\u01a1K\u0003",
    "\u0002\u0002\u0002\u01a2\u01a7\u0005J&\u0002\u01a3\u01a4\u0007\b\u0002",
    "\u0002\u01a4\u01a6\u0005J&\u0002\u01a5\u01a3\u0003\u0002\u0002\u0002",
    "\u01a6\u01a9\u0003\u0002\u0002\u0002\u01a7\u01a5\u0003\u0002\u0002\u0002",
    "\u01a7\u01a8\u0003\u0002\u0002\u0002\u01a8M\u0003\u0002\u0002\u0002",
    "\u01a9\u01a7\u0003\u0002\u0002\u0002\u01aa\u01af\u0005J&\u0002\u01ab",
    "\u01ac\u0007\u0007\u0002\u0002\u01ac\u01ae\u0005J&\u0002\u01ad\u01ab",
    "\u0003\u0002\u0002\u0002\u01ae\u01b1\u0003\u0002\u0002\u0002\u01af\u01ad",
    "\u0003\u0002\u0002\u0002\u01af\u01b0\u0003\u0002\u0002\u0002\u01b0O",
    "\u0003\u0002\u0002\u0002\u01b1\u01af\u0003\u0002\u0002\u0002\u01b2\u01b3",
    "\u0005N(\u0002\u01b3\u01b4\t\u0002\u0002\u0002\u01b4\u01b6\u0003\u0002",
    "\u0002\u0002\u01b5\u01b2\u0003\u0002\u0002\u0002\u01b5\u01b6\u0003\u0002",
    "\u0002\u0002\u01b6\u01b7\u0003\u0002\u0002\u0002\u01b7\u01b8\u0005J",
    "&\u0002\u01b8Q\u0003\u0002\u0002\u0002\u01b9\u01ba\u0005N(\u0002\u01ba",
    "\u01bb\u0007\u0004\u0002\u0002\u01bb\u01be\u0005J&\u0002\u01bc\u01bd",
    "\u0007\f\u0002\u0002\u01bd\u01bf\u0005J&\u0002\u01be\u01bc\u0003\u0002",
    "\u0002\u0002\u01be\u01bf\u0003\u0002\u0002\u0002\u01bfS\u0003\u0002",
    "\u0002\u0002\u01c0\u01cd\u0005N(\u0002\u01c1\u01c2\u0007\r\u0002\u0002",
    "\u01c2\u01c7\u0005N(\u0002\u01c3\u01c4\u0007\b\u0002\u0002\u01c4\u01c6",
    "\u0005N(\u0002\u01c5\u01c3\u0003\u0002\u0002\u0002\u01c6\u01c9\u0003",
    "\u0002\u0002\u0002\u01c7\u01c5\u0003\u0002\u0002\u0002\u01c7\u01c8\u0003",
    "\u0002\u0002\u0002\u01c8\u01ca\u0003\u0002\u0002\u0002\u01c9\u01c7\u0003",
    "\u0002\u0002\u0002\u01ca\u01cb\u0007\u000e\u0002\u0002\u01cb\u01cd\u0003",
    "\u0002\u0002\u0002\u01cc\u01c0\u0003\u0002\u0002\u0002\u01cc\u01c1\u0003",
    "\u0002\u0002\u0002\u01cdU\u0003\u0002\u0002\u0002\u01ce\u01db\u0005",
    "P)\u0002\u01cf\u01d0\u0007\r\u0002\u0002\u01d0\u01d5\u0005P)\u0002\u01d1",
    "\u01d2\u0007\b\u0002\u0002\u01d2\u01d4\u0005P)\u0002\u01d3\u01d1\u0003",
    "\u0002\u0002\u0002\u01d4\u01d7\u0003\u0002\u0002\u0002\u01d5\u01d3\u0003",
    "\u0002\u0002\u0002\u01d5\u01d6\u0003\u0002\u0002\u0002\u01d6\u01d8\u0003",
    "\u0002\u0002\u0002\u01d7\u01d5\u0003\u0002\u0002\u0002\u01d8\u01d9\u0007",
    "\u000e\u0002\u0002\u01d9\u01db\u0003\u0002\u0002\u0002\u01da\u01ce\u0003",
    "\u0002\u0002\u0002\u01da\u01cf\u0003\u0002\u0002\u0002\u01dbW\u0003",
    "\u0002\u0002\u0002\u01dc\u01e2\u0005Z.\u0002\u01dd\u01de\u0007\f\u0002",
    "\u0002\u01de\u01e0\u0005\\/\u0002\u01df\u01e1\u0005^0\u0002\u01e0\u01df",
    "\u0003\u0002\u0002\u0002\u01e0\u01e1\u0003\u0002\u0002\u0002\u01e1\u01e3",
    "\u0003\u0002\u0002\u0002\u01e2\u01dd\u0003\u0002\u0002\u0002\u01e2\u01e3",
    "\u0003\u0002\u0002\u0002\u01e3Y\u0003\u0002\u0002\u0002\u01e4\u01e5",
    "\u0007-\u0002\u0002\u01e5\u01e7\u0007\t\u0002\u0002\u01e6\u01e4\u0003",
    "\u0002\u0002\u0002\u01e6\u01e7\u0003\u0002\u0002\u0002\u01e7\u01e8\u0003",
    "\u0002\u0002\u0002\u01e8\u01e9\u0007-\u0002\u0002\u01e9[\u0003\u0002",
    "\u0002\u0002\u01ea\u01ed\u0007,\u0002\u0002\u01eb\u01ed\u0005J&\u0002",
    "\u01ec\u01ea\u0003\u0002\u0002\u0002\u01ec\u01eb\u0003\u0002\u0002\u0002",
    "\u01ed]\u0003\u0002\u0002\u0002\u01ee\u01f1\u00052\u001a\u0002\u01ef",
    "\u01f1\u0005J&\u0002\u01f0\u01ee\u0003\u0002\u0002\u0002\u01f0\u01ef",
    "\u0003\u0002\u0002\u0002\u01f1_\u0003\u0002\u0002\u0002\u01f2\u01f5",
    "\u0007.\u0002\u0002\u01f3\u01f5\u0007/\u0002\u0002\u01f4\u01f2\u0003",
    "\u0002\u0002\u0002\u01f4\u01f3\u0003\u0002\u0002\u0002\u01f5a\u0003",
    "\u0002\u0002\u0002\u01f6\u01f7\u0007-\u0002\u0002\u01f7c\u0003\u0002",
    "\u0002\u00023g\u007f\u0085\u008e\u0097\u00a0\u00c0\u00c6\u00d9\u00df",
    "\u00eb\u00f1\u00f7\u0103\u010a\u0111\u011e\u0123\u012c\u012f\u0139\u013e",
    "\u0143\u014b\u0155\u0159\u0168\u016f\u0177\u0183\u018a\u0193\u0199\u019e",
    "\u01a0\u01a7\u01af\u01b5\u01be\u01c7\u01cc\u01d5\u01da\u01e0\u01e2\u01e6",
    "\u01ec\u01f0\u01f4"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'@'", "'#'", "'return'", "'='", "':'", "','", 
                     "'.'", "'+'", "'&'", "'/'", "'['", "']'", "'{'", "'}'", 
                     "')'", "'('", "'<-'", "'->'", "'for'", "'in'", "'instance'", 
                     "'add'", "'remove'", "'start'", "'stop'", "'set'", 
                     "'detach'", "'move'", "'attach'", "'bind'", "'unbind'", 
                     "'let'", "'function'", "'net-init'", "'net-merge'", 
                     "'net-remove'", "'meta-init'", "'meta-merge'", "'meta-remove'" ];

var symbolicNames = [ null, "AT", "SHARP", "RETURN", "ASSIGN", "COLON", 
                      "COMMA", "DOT", "CONCAT", "AMPERSAND", "SLASH", "LS_BRACKET", 
                      "RS_BRACKET", "LC_BRACKET", "RC_BRACKET", "R_BRACKET", 
                      "L_BRACKET", "RIGHT_LIGHT_ARROW", "LEFT_LIGHT_ARROW", 
                      "FOR", "IN", "INSTANCE", "ADD", "REMOVE", "START", 
                      "STOP", "SET", "DETACH", "MOVE", "ATTACH", "BIND", 
                      "UNBIND", "LET", "FUNCTION", "NETINIT", "NETMERGE", 
                      "NETREMOVE", "METAINIT", "METAMERGE", "METAREMOVE", 
                      "COMMENT", "SINGLELINE_COMMENT", "NUMERIC_VALUE", 
                      "ID", "SQ_STR", "DQ_STR", "WS" ];

var ruleNames =  [ "script", "statement", "instance", "add", "remove", "start", 
                   "stop", "set", "attach", "detach", "move", "bind", "unbind", 
                   "letDecl", "netinit", "netmerge", "netremove", "metainit", 
                   "metamerge", "metaremove", "varIdentifierList", "forDecl", 
                   "iterable", "forBody", "objectDecl", "keyAndValue", "arrayDecl", 
                   "funcCall", "funcDecl", "funcBody", "returnStatement", 
                   "expression", "expressionList", "arrayAccess", "contextIdentifier", 
                   "contextRef", "identifier", "identifierList", "instancePath", 
                   "portPath", "dictionaryPath", "instanceList", "portList", 
                   "type", "typeName", "version", "duVersions", "string", 
                   "basic_identifier" ];

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
KevScriptParser.AT = 1;
KevScriptParser.SHARP = 2;
KevScriptParser.RETURN = 3;
KevScriptParser.ASSIGN = 4;
KevScriptParser.COLON = 5;
KevScriptParser.COMMA = 6;
KevScriptParser.DOT = 7;
KevScriptParser.CONCAT = 8;
KevScriptParser.AMPERSAND = 9;
KevScriptParser.SLASH = 10;
KevScriptParser.LS_BRACKET = 11;
KevScriptParser.RS_BRACKET = 12;
KevScriptParser.LC_BRACKET = 13;
KevScriptParser.RC_BRACKET = 14;
KevScriptParser.R_BRACKET = 15;
KevScriptParser.L_BRACKET = 16;
KevScriptParser.RIGHT_LIGHT_ARROW = 17;
KevScriptParser.LEFT_LIGHT_ARROW = 18;
KevScriptParser.FOR = 19;
KevScriptParser.IN = 20;
KevScriptParser.INSTANCE = 21;
KevScriptParser.ADD = 22;
KevScriptParser.REMOVE = 23;
KevScriptParser.START = 24;
KevScriptParser.STOP = 25;
KevScriptParser.SET = 26;
KevScriptParser.DETACH = 27;
KevScriptParser.MOVE = 28;
KevScriptParser.ATTACH = 29;
KevScriptParser.BIND = 30;
KevScriptParser.UNBIND = 31;
KevScriptParser.LET = 32;
KevScriptParser.FUNCTION = 33;
KevScriptParser.NETINIT = 34;
KevScriptParser.NETMERGE = 35;
KevScriptParser.NETREMOVE = 36;
KevScriptParser.METAINIT = 37;
KevScriptParser.METAMERGE = 38;
KevScriptParser.METAREMOVE = 39;
KevScriptParser.COMMENT = 40;
KevScriptParser.SINGLELINE_COMMENT = 41;
KevScriptParser.NUMERIC_VALUE = 42;
KevScriptParser.ID = 43;
KevScriptParser.SQ_STR = 44;
KevScriptParser.DQ_STR = 45;
KevScriptParser.WS = 46;

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
KevScriptParser.RULE_move = 10;
KevScriptParser.RULE_bind = 11;
KevScriptParser.RULE_unbind = 12;
KevScriptParser.RULE_letDecl = 13;
KevScriptParser.RULE_netinit = 14;
KevScriptParser.RULE_netmerge = 15;
KevScriptParser.RULE_netremove = 16;
KevScriptParser.RULE_metainit = 17;
KevScriptParser.RULE_metamerge = 18;
KevScriptParser.RULE_metaremove = 19;
KevScriptParser.RULE_varIdentifierList = 20;
KevScriptParser.RULE_forDecl = 21;
KevScriptParser.RULE_iterable = 22;
KevScriptParser.RULE_forBody = 23;
KevScriptParser.RULE_objectDecl = 24;
KevScriptParser.RULE_keyAndValue = 25;
KevScriptParser.RULE_arrayDecl = 26;
KevScriptParser.RULE_funcCall = 27;
KevScriptParser.RULE_funcDecl = 28;
KevScriptParser.RULE_funcBody = 29;
KevScriptParser.RULE_returnStatement = 30;
KevScriptParser.RULE_expression = 31;
KevScriptParser.RULE_expressionList = 32;
KevScriptParser.RULE_arrayAccess = 33;
KevScriptParser.RULE_contextIdentifier = 34;
KevScriptParser.RULE_contextRef = 35;
KevScriptParser.RULE_identifier = 36;
KevScriptParser.RULE_identifierList = 37;
KevScriptParser.RULE_instancePath = 38;
KevScriptParser.RULE_portPath = 39;
KevScriptParser.RULE_dictionaryPath = 40;
KevScriptParser.RULE_instanceList = 41;
KevScriptParser.RULE_portList = 42;
KevScriptParser.RULE_type = 43;
KevScriptParser.RULE_typeName = 44;
KevScriptParser.RULE_version = 45;
KevScriptParser.RULE_duVersions = 46;
KevScriptParser.RULE_string = 47;
KevScriptParser.RULE_basic_identifier = 48;

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
        this.state = 101;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << KevScriptParser.AT) | (1 << KevScriptParser.FOR) | (1 << KevScriptParser.INSTANCE) | (1 << KevScriptParser.ADD) | (1 << KevScriptParser.REMOVE) | (1 << KevScriptParser.START) | (1 << KevScriptParser.STOP) | (1 << KevScriptParser.SET) | (1 << KevScriptParser.DETACH) | (1 << KevScriptParser.MOVE) | (1 << KevScriptParser.ATTACH) | (1 << KevScriptParser.BIND) | (1 << KevScriptParser.UNBIND))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (KevScriptParser.LET - 32)) | (1 << (KevScriptParser.FUNCTION - 32)) | (1 << (KevScriptParser.NETINIT - 32)) | (1 << (KevScriptParser.NETMERGE - 32)) | (1 << (KevScriptParser.NETREMOVE - 32)) | (1 << (KevScriptParser.METAINIT - 32)) | (1 << (KevScriptParser.METAMERGE - 32)) | (1 << (KevScriptParser.METAREMOVE - 32)) | (1 << (KevScriptParser.ID - 32)))) !== 0)) {
            this.state = 98;
            this.statement();
            this.state = 103;
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
        this.state = 125;
        switch(this._input.LA(1)) {
        case KevScriptParser.INSTANCE:
            this.enterOuterAlt(localctx, 1);
            this.state = 104;
            this.instance();
            break;
        case KevScriptParser.ADD:
            this.enterOuterAlt(localctx, 2);
            this.state = 105;
            this.add();
            break;
        case KevScriptParser.REMOVE:
            this.enterOuterAlt(localctx, 3);
            this.state = 106;
            this.remove();
            break;
        case KevScriptParser.ATTACH:
            this.enterOuterAlt(localctx, 4);
            this.state = 107;
            this.attach();
            break;
        case KevScriptParser.DETACH:
            this.enterOuterAlt(localctx, 5);
            this.state = 108;
            this.detach();
            break;
        case KevScriptParser.MOVE:
            this.enterOuterAlt(localctx, 6);
            this.state = 109;
            this.move();
            break;
        case KevScriptParser.START:
            this.enterOuterAlt(localctx, 7);
            this.state = 110;
            this.start();
            break;
        case KevScriptParser.STOP:
            this.enterOuterAlt(localctx, 8);
            this.state = 111;
            this.stop();
            break;
        case KevScriptParser.SET:
            this.enterOuterAlt(localctx, 9);
            this.state = 112;
            this.set();
            break;
        case KevScriptParser.BIND:
            this.enterOuterAlt(localctx, 10);
            this.state = 113;
            this.bind();
            break;
        case KevScriptParser.UNBIND:
            this.enterOuterAlt(localctx, 11);
            this.state = 114;
            this.unbind();
            break;
        case KevScriptParser.NETINIT:
            this.enterOuterAlt(localctx, 12);
            this.state = 115;
            this.netinit();
            break;
        case KevScriptParser.NETMERGE:
            this.enterOuterAlt(localctx, 13);
            this.state = 116;
            this.netmerge();
            break;
        case KevScriptParser.NETREMOVE:
            this.enterOuterAlt(localctx, 14);
            this.state = 117;
            this.netremove();
            break;
        case KevScriptParser.METAINIT:
            this.enterOuterAlt(localctx, 15);
            this.state = 118;
            this.metainit();
            break;
        case KevScriptParser.METAMERGE:
            this.enterOuterAlt(localctx, 16);
            this.state = 119;
            this.metamerge();
            break;
        case KevScriptParser.METAREMOVE:
            this.enterOuterAlt(localctx, 17);
            this.state = 120;
            this.metaremove();
            break;
        case KevScriptParser.LET:
            this.enterOuterAlt(localctx, 18);
            this.state = 121;
            this.letDecl();
            break;
        case KevScriptParser.FUNCTION:
            this.enterOuterAlt(localctx, 19);
            this.state = 122;
            this.funcDecl();
            break;
        case KevScriptParser.FOR:
            this.enterOuterAlt(localctx, 20);
            this.state = 123;
            this.forDecl();
            break;
        case KevScriptParser.AT:
        case KevScriptParser.ID:
            this.enterOuterAlt(localctx, 21);
            this.state = 124;
            this.funcCall();
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
    this.varName = null; // Basic_identifierContext
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

InstanceContext.prototype.basic_identifier = function() {
    return this.getTypedRuleContext(Basic_identifierContext,0);
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
        this.state = 140;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 127;
            this.match(KevScriptParser.INSTANCE);
            this.state = 128;
            localctx.varName = this.basic_identifier();
            this.state = 129;
            this.match(KevScriptParser.ASSIGN);

            this.state = 131;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
            if(la_===1) {
                this.state = 130;
                localctx.instanceName = this.expression(0);

            }
            this.state = 133;
            this.type();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 135;
            this.match(KevScriptParser.INSTANCE);
            this.state = 136;
            this.varIdentifierList();
            this.state = 137;
            this.match(KevScriptParser.ASSIGN);
            this.state = 138;
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
    return this;
}

AddContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AddContext.prototype.constructor = AddContext;

AddContext.prototype.ADD = function() {
    return this.getToken(KevScriptParser.ADD, 0);
};

AddContext.prototype.identifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentifierContext);
    } else {
        return this.getTypedRuleContext(IdentifierContext,i);
    }
};

AddContext.prototype.LS_BRACKET = function() {
    return this.getToken(KevScriptParser.LS_BRACKET, 0);
};

AddContext.prototype.identifierList = function() {
    return this.getTypedRuleContext(IdentifierListContext,0);
};

AddContext.prototype.RS_BRACKET = function() {
    return this.getToken(KevScriptParser.RS_BRACKET, 0);
};

AddContext.prototype.instanceList = function() {
    return this.getTypedRuleContext(InstanceListContext,0);
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
        this.state = 158;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 142;
            this.match(KevScriptParser.ADD);
            this.state = 143;
            this.identifier();
            this.state = 149;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
            if(la_===1) {
                this.state = 144;
                this.match(KevScriptParser.LS_BRACKET);
                this.state = 145;
                this.identifierList();
                this.state = 146;
                this.match(KevScriptParser.RS_BRACKET);

            } else if(la_===2) {
                this.state = 148;
                this.identifier();

            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 151;
            this.match(KevScriptParser.ADD);
            this.state = 152;
            this.match(KevScriptParser.LS_BRACKET);
            this.state = 153;
            this.identifierList();
            this.state = 154;
            this.match(KevScriptParser.RS_BRACKET);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 156;
            this.match(KevScriptParser.ADD);
            this.state = 157;
            this.instanceList();
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
        this.identifier();
        this.state = 176;
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
    this.connectorId = null; // IdentifierContext
    this.nodeId = null; // IdentifierContext
    return this;
}

DetachContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DetachContext.prototype.constructor = DetachContext;

DetachContext.prototype.DETACH = function() {
    return this.getToken(KevScriptParser.DETACH, 0);
};

DetachContext.prototype.identifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentifierContext);
    } else {
        return this.getTypedRuleContext(IdentifierContext,i);
    }
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
        localctx.connectorId = this.identifier();
        this.state = 180;
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

MoveContext.prototype.identifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentifierContext);
    } else {
        return this.getTypedRuleContext(IdentifierContext,i);
    }
};

MoveContext.prototype.LS_BRACKET = function() {
    return this.getToken(KevScriptParser.LS_BRACKET, 0);
};

MoveContext.prototype.identifierList = function() {
    return this.getTypedRuleContext(IdentifierListContext,0);
};

MoveContext.prototype.RS_BRACKET = function() {
    return this.getToken(KevScriptParser.RS_BRACKET, 0);
};

MoveContext.prototype.instanceList = function() {
    return this.getTypedRuleContext(InstanceListContext,0);
};

MoveContext.prototype.instancePath = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(InstancePathContext);
    } else {
        return this.getTypedRuleContext(InstancePathContext,i);
    }
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
    this.enterRule(localctx, 20, KevScriptParser.RULE_move);
    try {
        this.state = 196;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 182;
            this.match(KevScriptParser.MOVE);
            this.state = 183;
            this.identifier();
            this.state = 190;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
            switch(la_) {
            case 1:
                this.state = 184;
                this.match(KevScriptParser.LS_BRACKET);
                this.state = 185;
                this.identifierList();
                this.state = 186;
                this.match(KevScriptParser.RS_BRACKET);
                break;

            case 2:
                this.state = 188;
                this.identifier();
                break;

            case 3:
                this.state = 189;
                this.instanceList();
                break;

            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 192;
            this.match(KevScriptParser.MOVE);
            this.state = 193;
            this.instancePath();
            this.state = 194;
            this.instancePath();
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
    this.enterRule(localctx, 22, KevScriptParser.RULE_bind);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 198;
        this.match(KevScriptParser.BIND);
        this.state = 199;
        localctx.chan = this.identifier();
        this.state = 200;
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
    this.enterRule(localctx, 24, KevScriptParser.RULE_unbind);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 202;
        this.match(KevScriptParser.UNBIND);
        this.state = 203;
        localctx.chan = this.identifier();
        this.state = 204;
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

LetDeclContext.prototype.varIdentifierList = function() {
    return this.getTypedRuleContext(VarIdentifierListContext,0);
};

LetDeclContext.prototype.ASSIGN = function() {
    return this.getToken(KevScriptParser.ASSIGN, 0);
};

LetDeclContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
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
    this.enterRule(localctx, 26, KevScriptParser.RULE_letDecl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 206;
        this.match(KevScriptParser.LET);
        this.state = 207;
        this.varIdentifierList();
        this.state = 208;
        this.match(KevScriptParser.ASSIGN);
        this.state = 209;
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
    this.enterRule(localctx, 28, KevScriptParser.RULE_netinit);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 211;
        this.match(KevScriptParser.NETINIT);
        this.state = 212;
        this.identifier();
        this.state = 215;
        switch(this._input.LA(1)) {
        case KevScriptParser.LC_BRACKET:
            this.state = 213;
            this.objectDecl();
            break;
        case KevScriptParser.AT:
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
    this.enterRule(localctx, 30, KevScriptParser.RULE_netmerge);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 217;
        this.match(KevScriptParser.NETMERGE);
        this.state = 218;
        this.identifier();
        this.state = 221;
        switch(this._input.LA(1)) {
        case KevScriptParser.LC_BRACKET:
            this.state = 219;
            this.objectDecl();
            break;
        case KevScriptParser.AT:
        case KevScriptParser.AMPERSAND:
        case KevScriptParser.ID:
            this.state = 220;
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
    this.enterRule(localctx, 32, KevScriptParser.RULE_netremove);
    try {
        this.state = 233;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 223;
            this.match(KevScriptParser.NETREMOVE);
            this.state = 224;
            this.identifier();
            this.state = 225;
            this.identifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 227;
            this.match(KevScriptParser.NETREMOVE);
            this.state = 228;
            this.identifier();
            this.state = 229;
            this.match(KevScriptParser.LS_BRACKET);
            this.state = 230;
            this.identifierList();
            this.state = 231;
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
    this.enterRule(localctx, 34, KevScriptParser.RULE_metainit);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 235;
        this.match(KevScriptParser.METAINIT);
        this.state = 236;
        this.identifier();
        this.state = 239;
        switch(this._input.LA(1)) {
        case KevScriptParser.LC_BRACKET:
            this.state = 237;
            this.objectDecl();
            break;
        case KevScriptParser.AT:
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
    this.enterRule(localctx, 36, KevScriptParser.RULE_metamerge);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 241;
        this.match(KevScriptParser.METAMERGE);
        this.state = 242;
        this.identifier();
        this.state = 245;
        switch(this._input.LA(1)) {
        case KevScriptParser.LC_BRACKET:
            this.state = 243;
            this.objectDecl();
            break;
        case KevScriptParser.AT:
        case KevScriptParser.AMPERSAND:
        case KevScriptParser.ID:
            this.state = 244;
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
    this.enterRule(localctx, 38, KevScriptParser.RULE_metaremove);
    try {
        this.state = 257;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 247;
            this.match(KevScriptParser.METAREMOVE);
            this.state = 248;
            this.identifier();
            this.state = 249;
            this.identifier();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 251;
            this.match(KevScriptParser.METAREMOVE);
            this.state = 252;
            this.identifier();
            this.state = 253;
            this.match(KevScriptParser.LS_BRACKET);
            this.state = 254;
            this.identifierList();
            this.state = 255;
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

VarIdentifierListContext.prototype.basic_identifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Basic_identifierContext);
    } else {
        return this.getTypedRuleContext(Basic_identifierContext,i);
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
    this.enterRule(localctx, 40, KevScriptParser.RULE_varIdentifierList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 259;
        this.basic_identifier();
        this.state = 264;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===KevScriptParser.COMMA) {
            this.state = 260;
            this.match(KevScriptParser.COMMA);
            this.state = 261;
            this.basic_identifier();
            this.state = 266;
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
    this.index = null; // Token
    this.val = null; // Token
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

ForDeclContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(KevScriptParser.ID);
    } else {
        return this.getToken(KevScriptParser.ID, i);
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
    this.enterRule(localctx, 42, KevScriptParser.RULE_forDecl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 267;
        this.match(KevScriptParser.FOR);
        this.state = 268;
        this.match(KevScriptParser.L_BRACKET);
        this.state = 271;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        if(la_===1) {
            this.state = 269;
            localctx.index = this.match(KevScriptParser.ID);
            this.state = 270;
            this.match(KevScriptParser.COMMA);

        }
        this.state = 273;
        localctx.val = this.match(KevScriptParser.ID);
        this.state = 274;
        this.match(KevScriptParser.IN);
        this.state = 275;
        this.iterable();
        this.state = 276;
        this.match(KevScriptParser.R_BRACKET);
        this.state = 277;
        this.match(KevScriptParser.LC_BRACKET);
        this.state = 278;
        this.forBody();
        this.state = 279;
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
    this.enterRule(localctx, 44, KevScriptParser.RULE_iterable);
    try {
        this.state = 284;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 281;
            this.arrayDecl();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 282;
            this.identifier();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 283;
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
    this.enterRule(localctx, 46, KevScriptParser.RULE_forBody);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 289;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << KevScriptParser.AT) | (1 << KevScriptParser.FOR) | (1 << KevScriptParser.INSTANCE) | (1 << KevScriptParser.ADD) | (1 << KevScriptParser.REMOVE) | (1 << KevScriptParser.START) | (1 << KevScriptParser.STOP) | (1 << KevScriptParser.SET) | (1 << KevScriptParser.DETACH) | (1 << KevScriptParser.MOVE) | (1 << KevScriptParser.ATTACH) | (1 << KevScriptParser.BIND) | (1 << KevScriptParser.UNBIND))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (KevScriptParser.LET - 32)) | (1 << (KevScriptParser.FUNCTION - 32)) | (1 << (KevScriptParser.NETINIT - 32)) | (1 << (KevScriptParser.NETMERGE - 32)) | (1 << (KevScriptParser.NETREMOVE - 32)) | (1 << (KevScriptParser.METAINIT - 32)) | (1 << (KevScriptParser.METAMERGE - 32)) | (1 << (KevScriptParser.METAREMOVE - 32)) | (1 << (KevScriptParser.ID - 32)))) !== 0)) {
            this.state = 286;
            this.statement();
            this.state = 291;
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
    this.enterRule(localctx, 48, KevScriptParser.RULE_objectDecl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 292;
        this.match(KevScriptParser.LC_BRACKET);
        this.state = 301;
        _la = this._input.LA(1);
        if(_la===KevScriptParser.ID) {
            this.state = 293;
            localctx._keyAndValue = this.keyAndValue();
            localctx.values.push(localctx._keyAndValue);
            this.state = 298;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===KevScriptParser.COMMA) {
                this.state = 294;
                this.match(KevScriptParser.COMMA);
                this.state = 295;
                localctx._keyAndValue = this.keyAndValue();
                localctx.values.push(localctx._keyAndValue);
                this.state = 300;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
        }

        this.state = 303;
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
    this.key = null; // Token
    this.value = null; // ExpressionContext
    return this;
}

KeyAndValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KeyAndValueContext.prototype.constructor = KeyAndValueContext;

KeyAndValueContext.prototype.COLON = function() {
    return this.getToken(KevScriptParser.COLON, 0);
};

KeyAndValueContext.prototype.ID = function() {
    return this.getToken(KevScriptParser.ID, 0);
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
    this.enterRule(localctx, 50, KevScriptParser.RULE_keyAndValue);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 305;
        localctx.key = this.match(KevScriptParser.ID);
        this.state = 306;
        this.match(KevScriptParser.COLON);
        this.state = 307;
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
    this.enterRule(localctx, 52, KevScriptParser.RULE_arrayDecl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 309;
        this.match(KevScriptParser.LS_BRACKET);
        this.state = 311;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << KevScriptParser.AT) | (1 << KevScriptParser.AMPERSAND) | (1 << KevScriptParser.LS_BRACKET) | (1 << KevScriptParser.LC_BRACKET))) !== 0) || ((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (KevScriptParser.ID - 43)) | (1 << (KevScriptParser.SQ_STR - 43)) | (1 << (KevScriptParser.DQ_STR - 43)))) !== 0)) {
            this.state = 310;
            this.expressionList();
        }

        this.state = 313;
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

FuncCallContext.prototype.ID = function() {
    return this.getToken(KevScriptParser.ID, 0);
};

FuncCallContext.prototype.L_BRACKET = function() {
    return this.getToken(KevScriptParser.L_BRACKET, 0);
};

FuncCallContext.prototype.R_BRACKET = function() {
    return this.getToken(KevScriptParser.R_BRACKET, 0);
};

FuncCallContext.prototype.AT = function() {
    return this.getToken(KevScriptParser.AT, 0);
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
    this.enterRule(localctx, 54, KevScriptParser.RULE_funcCall);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 316;
        _la = this._input.LA(1);
        if(_la===KevScriptParser.AT) {
            this.state = 315;
            this.match(KevScriptParser.AT);
        }

        this.state = 318;
        this.match(KevScriptParser.ID);
        this.state = 319;
        this.match(KevScriptParser.L_BRACKET);
        this.state = 321;
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << KevScriptParser.AT) | (1 << KevScriptParser.AMPERSAND) | (1 << KevScriptParser.LS_BRACKET) | (1 << KevScriptParser.LC_BRACKET))) !== 0) || ((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (KevScriptParser.ID - 43)) | (1 << (KevScriptParser.SQ_STR - 43)) | (1 << (KevScriptParser.DQ_STR - 43)))) !== 0)) {
            this.state = 320;
            localctx.parameters = this.expressionList();
        }

        this.state = 323;
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
    this.functionName = null; // Token
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

FuncDeclContext.prototype.ID = function() {
    return this.getToken(KevScriptParser.ID, 0);
};

FuncDeclContext.prototype.varIdentifierList = function() {
    return this.getTypedRuleContext(VarIdentifierListContext,0);
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
    this.enterRule(localctx, 56, KevScriptParser.RULE_funcDecl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 325;
        this.match(KevScriptParser.FUNCTION);
        this.state = 326;
        localctx.functionName = this.match(KevScriptParser.ID);
        this.state = 327;
        this.match(KevScriptParser.L_BRACKET);
        this.state = 329;
        _la = this._input.LA(1);
        if(_la===KevScriptParser.ID) {
            this.state = 328;
            localctx.parameters = this.varIdentifierList();
        }

        this.state = 331;
        this.match(KevScriptParser.R_BRACKET);
        this.state = 332;
        this.match(KevScriptParser.LC_BRACKET);
        this.state = 333;
        this.funcBody();
        this.state = 334;
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
    this.enterRule(localctx, 58, KevScriptParser.RULE_funcBody);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 339;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << KevScriptParser.AT) | (1 << KevScriptParser.FOR) | (1 << KevScriptParser.INSTANCE) | (1 << KevScriptParser.ADD) | (1 << KevScriptParser.REMOVE) | (1 << KevScriptParser.START) | (1 << KevScriptParser.STOP) | (1 << KevScriptParser.SET) | (1 << KevScriptParser.DETACH) | (1 << KevScriptParser.MOVE) | (1 << KevScriptParser.ATTACH) | (1 << KevScriptParser.BIND) | (1 << KevScriptParser.UNBIND))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (KevScriptParser.LET - 32)) | (1 << (KevScriptParser.FUNCTION - 32)) | (1 << (KevScriptParser.NETINIT - 32)) | (1 << (KevScriptParser.NETMERGE - 32)) | (1 << (KevScriptParser.NETREMOVE - 32)) | (1 << (KevScriptParser.METAINIT - 32)) | (1 << (KevScriptParser.METAMERGE - 32)) | (1 << (KevScriptParser.METAREMOVE - 32)) | (1 << (KevScriptParser.ID - 32)))) !== 0)) {
            this.state = 336;
            this.statement();
            this.state = 341;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 343;
        _la = this._input.LA(1);
        if(_la===KevScriptParser.RETURN) {
            this.state = 342;
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
    this.enterRule(localctx, 60, KevScriptParser.RULE_returnStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 345;
        this.match(KevScriptParser.RETURN);
        this.state = 346;
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

ExpressionContext.prototype.contextIdentifier = function() {
    return this.getTypedRuleContext(ContextIdentifierContext,0);
};

ExpressionContext.prototype.arrayDecl = function() {
    return this.getTypedRuleContext(ArrayDeclContext,0);
};

ExpressionContext.prototype.arrayAccess = function() {
    return this.getTypedRuleContext(ArrayAccessContext,0);
};

ExpressionContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

ExpressionContext.prototype.funcCall = function() {
    return this.getTypedRuleContext(FuncCallContext,0);
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
    var _startState = 62;
    this.enterRecursionRule(localctx, 62, KevScriptParser.RULE_expression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 358;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
        switch(la_) {
        case 1:
            this.state = 349;
            this.string();
            break;

        case 2:
            this.state = 350;
            this.objectDecl();
            break;

        case 3:
            this.state = 351;
            this.contextIdentifier(0);
            break;

        case 4:
            this.state = 352;
            this.arrayDecl();
            break;

        case 5:
            this.state = 353;
            this.arrayAccess();
            break;

        case 6:
            this.state = 354;
            this.identifier();
            break;

        case 7:
            this.state = 355;
            this.funcCall();
            break;

        case 8:
            this.state = 356;
            this.instancePath();
            break;

        case 9:
            this.state = 357;
            this.portPath();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 365;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,27,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ExpressionContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, KevScriptParser.RULE_expression);
                this.state = 360;
                if (!( this.precpred(this._ctx, 7))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                }
                this.state = 361;
                this.match(KevScriptParser.CONCAT);
                this.state = 362;
                this.expression(8); 
            }
            this.state = 367;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,27,this._ctx);
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
    this.enterRule(localctx, 64, KevScriptParser.RULE_expressionList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 368;
        this.expression(0);
        this.state = 373;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===KevScriptParser.COMMA) {
            this.state = 369;
            this.match(KevScriptParser.COMMA);
            this.state = 370;
            this.expression(0);
            this.state = 375;
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

ArrayAccessContext.prototype.ID = function() {
    return this.getToken(KevScriptParser.ID, 0);
};

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
    this.enterRule(localctx, 66, KevScriptParser.RULE_arrayAccess);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 376;
        this.match(KevScriptParser.ID);
        this.state = 377;
        this.match(KevScriptParser.LS_BRACKET);
        this.state = 378;
        this.match(KevScriptParser.NUMERIC_VALUE);
        this.state = 379;
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

ContextIdentifierContext.prototype.ID = function() {
    return this.getToken(KevScriptParser.ID, 0);
};

ContextIdentifierContext.prototype.contextRef = function() {
    return this.getTypedRuleContext(ContextRefContext,0);
};

ContextIdentifierContext.prototype.arrayAccess = function() {
    return this.getTypedRuleContext(ArrayAccessContext,0);
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

ContextIdentifierContext.prototype.DOT = function() {
    return this.getToken(KevScriptParser.DOT, 0);
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
    var _startState = 68;
    this.enterRecursionRule(localctx, 68, KevScriptParser.RULE_contextIdentifier, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 385;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
        switch(la_) {
        case 1:
            this.state = 382;
            this.match(KevScriptParser.ID);
            break;

        case 2:
            this.state = 383;
            this.contextRef();
            break;

        case 3:
            this.state = 384;
            this.arrayAccess();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 392;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,30,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ContextIdentifierContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, KevScriptParser.RULE_contextIdentifier);
                this.state = 387;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 388;
                this.match(KevScriptParser.DOT);
                this.state = 389;
                this.contextIdentifier(2); 
            }
            this.state = 394;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,30,this._ctx);
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
    this.enterRule(localctx, 70, KevScriptParser.RULE_contextRef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 395;
        this.match(KevScriptParser.AMPERSAND);
        this.state = 396;
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

IdentifierContext.prototype.ID = function() {
    return this.getToken(KevScriptParser.ID, 0);
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
    this.enterRule(localctx, 72, KevScriptParser.RULE_identifier);
    try {
        this.state = 414;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 398;
            this.match(KevScriptParser.ID);
            this.state = 401;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
            if(la_===1) {
                this.state = 399;
                this.match(KevScriptParser.DOT);
                this.state = 400;
                this.identifier();

            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 403;
            this.contextRef();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 404;
            this.funcCall();
            this.state = 407;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
            if(la_===1) {
                this.state = 405;
                this.match(KevScriptParser.DOT);
                this.state = 406;
                this.identifier();

            }
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 409;
            this.arrayAccess();
            this.state = 412;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
            if(la_===1) {
                this.state = 410;
                this.match(KevScriptParser.DOT);
                this.state = 411;
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
    this.enterRule(localctx, 74, KevScriptParser.RULE_identifierList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 416;
        localctx._identifier = this.identifier();
        localctx.identifiers.push(localctx._identifier);
        this.state = 421;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===KevScriptParser.COMMA) {
            this.state = 417;
            this.match(KevScriptParser.COMMA);
            this.state = 418;
            localctx._identifier = this.identifier();
            localctx.identifiers.push(localctx._identifier);
            this.state = 423;
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

InstancePathContext.prototype.COLON = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(KevScriptParser.COLON);
    } else {
        return this.getToken(KevScriptParser.COLON, i);
    }
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
    this.enterRule(localctx, 76, KevScriptParser.RULE_instancePath);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 424;
        this.identifier();
        this.state = 429;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,36,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 425;
                this.match(KevScriptParser.COLON);
                this.state = 426;
                this.identifier(); 
            }
            this.state = 431;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,36,this._ctx);
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

PortPathContext.prototype.LEFT_LIGHT_ARROW = function() {
    return this.getToken(KevScriptParser.LEFT_LIGHT_ARROW, 0);
};

PortPathContext.prototype.RIGHT_LIGHT_ARROW = function() {
    return this.getToken(KevScriptParser.RIGHT_LIGHT_ARROW, 0);
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
    this.enterRule(localctx, 78, KevScriptParser.RULE_portPath);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 435;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
        if(la_===1) {
            this.state = 432;
            this.instancePath();
            this.state = 433;
            _la = this._input.LA(1);
            if(!(_la===KevScriptParser.RIGHT_LIGHT_ARROW || _la===KevScriptParser.LEFT_LIGHT_ARROW)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }

        }
        this.state = 437;
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
    this.key = null; // InstancePathContext
    this.frag = null; // IdentifierContext
    return this;
}

DictionaryPathContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DictionaryPathContext.prototype.constructor = DictionaryPathContext;

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

DictionaryPathContext.prototype.instancePath = function() {
    return this.getTypedRuleContext(InstancePathContext,0);
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
    this.enterRule(localctx, 80, KevScriptParser.RULE_dictionaryPath);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 439;
        localctx.key = this.instancePath();
        this.state = 440;
        this.match(KevScriptParser.SHARP);
        this.state = 441;
        this.identifier();
        this.state = 444;
        _la = this._input.LA(1);
        if(_la===KevScriptParser.SLASH) {
            this.state = 442;
            this.match(KevScriptParser.SLASH);
            this.state = 443;
            localctx.frag = this.identifier();
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
    this.enterRule(localctx, 82, KevScriptParser.RULE_instanceList);
    var _la = 0; // Token type
    try {
        this.state = 458;
        switch(this._input.LA(1)) {
        case KevScriptParser.AT:
        case KevScriptParser.AMPERSAND:
        case KevScriptParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 446;
            localctx._instancePath = this.instancePath();
            localctx.instances.push(localctx._instancePath);
            break;
        case KevScriptParser.LS_BRACKET:
            this.enterOuterAlt(localctx, 2);
            this.state = 447;
            this.match(KevScriptParser.LS_BRACKET);
            this.state = 448;
            localctx._instancePath = this.instancePath();
            localctx.instances.push(localctx._instancePath);
            this.state = 453;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===KevScriptParser.COMMA) {
                this.state = 449;
                this.match(KevScriptParser.COMMA);
                this.state = 450;
                localctx._instancePath = this.instancePath();
                localctx.instances.push(localctx._instancePath);
                this.state = 455;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 456;
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
    this.enterRule(localctx, 84, KevScriptParser.RULE_portList);
    var _la = 0; // Token type
    try {
        this.state = 472;
        switch(this._input.LA(1)) {
        case KevScriptParser.AT:
        case KevScriptParser.AMPERSAND:
        case KevScriptParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 460;
            localctx._portPath = this.portPath();
            localctx.instances.push(localctx._portPath);
            break;
        case KevScriptParser.LS_BRACKET:
            this.enterOuterAlt(localctx, 2);
            this.state = 461;
            this.match(KevScriptParser.LS_BRACKET);
            this.state = 462;
            localctx._portPath = this.portPath();
            localctx.instances.push(localctx._portPath);
            this.state = 467;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===KevScriptParser.COMMA) {
                this.state = 463;
                this.match(KevScriptParser.COMMA);
                this.state = 464;
                localctx._portPath = this.portPath();
                localctx.instances.push(localctx._portPath);
                this.state = 469;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 470;
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
    this.enterRule(localctx, 86, KevScriptParser.RULE_type);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 474;
        this.typeName();
        this.state = 480;
        _la = this._input.LA(1);
        if(_la===KevScriptParser.SLASH) {
            this.state = 475;
            this.match(KevScriptParser.SLASH);
            this.state = 476;
            this.version();
            this.state = 478;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
            if(la_===1) {
                this.state = 477;
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

TypeNameContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(KevScriptParser.ID);
    } else {
        return this.getToken(KevScriptParser.ID, i);
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
    this.enterRule(localctx, 88, KevScriptParser.RULE_typeName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 484;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,45,this._ctx);
        if(la_===1) {
            this.state = 482;
            this.match(KevScriptParser.ID);
            this.state = 483;
            this.match(KevScriptParser.DOT);

        }
        this.state = 486;
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
    this.enterRule(localctx, 90, KevScriptParser.RULE_version);
    try {
        this.state = 490;
        switch(this._input.LA(1)) {
        case KevScriptParser.NUMERIC_VALUE:
            this.enterOuterAlt(localctx, 1);
            this.state = 488;
            this.match(KevScriptParser.NUMERIC_VALUE);
            break;
        case KevScriptParser.AT:
        case KevScriptParser.AMPERSAND:
        case KevScriptParser.ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 489;
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
    this.enterRule(localctx, 92, KevScriptParser.RULE_duVersions);
    try {
        this.state = 494;
        switch(this._input.LA(1)) {
        case KevScriptParser.LC_BRACKET:
            this.enterOuterAlt(localctx, 1);
            this.state = 492;
            this.objectDecl();
            break;
        case KevScriptParser.AT:
        case KevScriptParser.AMPERSAND:
        case KevScriptParser.ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 493;
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
    this.enterRule(localctx, 94, KevScriptParser.RULE_string);
    try {
        this.state = 498;
        switch(this._input.LA(1)) {
        case KevScriptParser.SQ_STR:
            this.enterOuterAlt(localctx, 1);
            this.state = 496;
            localctx.value = this.match(KevScriptParser.SQ_STR);
            break;
        case KevScriptParser.DQ_STR:
            this.enterOuterAlt(localctx, 2);
            this.state = 497;
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

function Basic_identifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KevScriptParser.RULE_basic_identifier;
    return this;
}

Basic_identifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Basic_identifierContext.prototype.constructor = Basic_identifierContext;

Basic_identifierContext.prototype.ID = function() {
    return this.getToken(KevScriptParser.ID, 0);
};

Basic_identifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.enterBasic_identifier(this);
	}
};

Basic_identifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof KevScriptListener ) {
        listener.exitBasic_identifier(this);
	}
};




KevScriptParser.Basic_identifierContext = Basic_identifierContext;

KevScriptParser.prototype.basic_identifier = function() {

    var localctx = new Basic_identifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, KevScriptParser.RULE_basic_identifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 500;
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
	case 31:
			return this.expression_sempred(localctx, predIndex);
	case 34:
			return this.contextIdentifier_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

KevScriptParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 7);
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
