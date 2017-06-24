(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.VideomailClient = factory());
}(this, (function () { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number'){ __g = global; } // eslint-disable-line no-undef
});

var hasOwnProperty = {}.hasOwnProperty;
var _has = function(it, key){
  return hasOwnProperty.call(it, key);
};

var _fails = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number'){ __e = core; } // eslint-disable-line no-undef
});

var _isObject = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function(it){
  if(!_isObject(it)){ throw TypeError(it + ' is not an object!'); }
  return it;
};

var document$1 = _global.document;
var is = _isObject(document$1) && _isObject(document$1.createElement);
var _domCreate = function(it){
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function(){
  return Object.defineProperty(_domCreate('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function(it, S){
  if(!_isObject(it)){ return it; }
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))){ return val; }
  if(typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))){ return val; }
  if(!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))){ return val; }
  throw TypeError("Can't convert object to primitive value");
};

var dP$1             = Object.defineProperty;

var f$1 = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes){
  _anObject(O);
  P = _toPrimitive(P, true);
  _anObject(Attributes);
  if(_ie8DomDefine){ try {
    return dP$1(O, P, Attributes);
  } catch(e){ /* empty */ } }
  if('get' in Attributes || 'set' in Attributes){ throw TypeError('Accessors not supported!'); }
  if('value' in Attributes){ O[P] = Attributes.value; }
  return O;
};

var _objectDp = {
	f: f$1
};

var _propertyDesc = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

var _hide = _descriptors ? function(object, key, value){
  return _objectDp.f(object, key, _propertyDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

var id = 0;
var px = Math.random();
var _uid = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var _redefine = createCommonjsModule(function (module) {
var SRC       = _uid('src')
  , TO_STRING = 'toString'
  , $toString = Function[TO_STRING]
  , TPL       = ('' + $toString).split(TO_STRING);

_core.inspectSource = function(it){
  return $toString.call(it);
};

(module.exports = function(O, key, val, safe){
  var isFunction = typeof val == 'function';
  if(isFunction){ _has(val, 'name') || _hide(val, 'name', key); }
  if(O[key] === val){ return; }
  if(isFunction){ _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key))); }
  if(O === _global){
    O[key] = val;
  } else {
    if(!safe){
      delete O[key];
      _hide(O, key, val);
    } else {
      if(O[key]){ O[key] = val; }
      else { _hide(O, key, val); }
    }
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString(){
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});
});

var _aFunction = function(it){
  if(typeof it != 'function'){ throw TypeError(it + ' is not a function!'); }
  return it;
};

// optional / simple context binding

var _ctx = function(fn, that, length){
  _aFunction(fn);
  if(that === undefined){ return fn; }
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

var PROTOTYPE$1 = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , target    = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE$1]
    , exports   = IS_GLOBAL ? _core : _core[name] || (_core[name] = {})
    , expProto  = exports[PROTOTYPE$1] || (exports[PROTOTYPE$1] = {})
    , key, own, out, exp;
  if(IS_GLOBAL){ source = name; }
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
    // extend global
    if(target){ _redefine(target, key, out, type & $export.U); }
    // export
    if(exports[key] != out){ _hide(exports, key, exp); }
    if(IS_PROTO && expProto[key] != out){ expProto[key] = out; }
  }
};
_global.core = _core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
var _export = $export;

var _meta = createCommonjsModule(function (module) {
var META     = _uid('meta')
  , setDesc  = _objectDp.f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !_fails(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!_isObject(it)){ return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it; }
  if(!_has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it)){ return 'F'; }
    // not necessary to add metadata
    if(!create){ return 'E'; }
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!_has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it)){ return true; }
    // not necessary to add metadata
    if(!create){ return false; }
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)){ setMeta(it); }
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};
});

var SHARED = '__core-js_shared__';
var store  = _global[SHARED] || (_global[SHARED] = {});
var _shared = function(key){
  return store[key] || (store[key] = {});
};

var _wks = createCommonjsModule(function (module) {
var store      = _shared('wks')
  , Symbol     = _global.Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
};

$exports.store = store;
});

var def = _objectDp.f;
var TAG = _wks('toStringTag');

var _setToStringTag = function(it, tag, stat){
  if(it && !_has(it = stat ? it : it.prototype, TAG)){ def(it, TAG, {configurable: true, value: tag}); }
};

var f$2 = _wks;

var _wksExt = {
	f: f$2
};

var _library = false;

var defineProperty = _objectDp.f;
var _wksDefine = function(name){
  var $Symbol = _core.Symbol || (_core.Symbol = _library ? {} : _global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol)){ defineProperty($Symbol, name, {value: _wksExt.f(name)}); }
};

var toString = {}.toString;

var _cof = function(it){
  return toString.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings

var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return _cof(it) == 'String' ? it.split('') : Object(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function(it){
  if(it == undefined){ throw TypeError("Can't call method on  " + it); }
  return it;
};

// to indexed object, toObject with fallback for non-array-like ES3 strings

var _toIobject = function(it){
  return _iobject(_defined(it));
};

// 7.1.4 ToInteger
var ceil  = Math.ceil;
var floor = Math.floor;
var _toInteger = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.1.15 ToLength
var min       = Math.min;
var _toLength = function(it){
  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var max       = Math.max;
var min$1       = Math.min;
var _toIndex = function(index, length){
  index = _toInteger(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes

var _arrayIncludes = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = _toIobject($this)
      , length = _toLength(O.length)
      , index  = _toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el){ while(length > index){
      value = O[index++];
      if(value != value){ return true; }
    // Array#toIndex ignores holes, Array#includes - not
    } } else { for(;length > index; index++){ if(IS_INCLUDES || index in O){
      if(O[index] === el){ return IS_INCLUDES || index || 0; }
    } } } return !IS_INCLUDES && -1;
  };
};

var shared = _shared('keys');
var _sharedKey = function(key){
  return shared[key] || (shared[key] = _uid(key));
};

var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO     = _sharedKey('IE_PROTO');

var _objectKeysInternal = function(object, names){
  var O      = _toIobject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O){ if(key != IE_PROTO){ _has(O, key) && result.push(key); } }
  // Don't enum bug & hidden keys
  while(names.length > i){ if(_has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  } }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)


var _objectKeys = Object.keys || function keys(O){
  return _objectKeysInternal(O, _enumBugKeys);
};

var _keyof = function(object, el){
  var O      = _toIobject(object)
    , keys   = _objectKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index){ if(O[key = keys[index++]] === el){ return key; } }
};

var f$3 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$3
};

var f$4 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$4
};

// all enumerable object keys, includes symbols

var _enumKeys = function(it){
  var result     = _objectKeys(it)
    , getSymbols = _objectGops.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = _objectPie.f
      , i       = 0
      , key;
    while(symbols.length > i){ if(isEnum.call(it, key = symbols[i++])){ result.push(key); } }
  } return result;
};

// 7.2.2 IsArray(argument)

var _isArray = Array.isArray || function isArray(arg){
  return _cof(arg) == 'Array';
};

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties){
  _anObject(O);
  var keys   = _objectKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i){ _objectDp.f(O, P = keys[i++], Properties[P]); }
  return O;
};

var _html = _global.document && document.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var IE_PROTO$1    = _sharedKey('IE_PROTO');
var Empty       = function(){ /* empty */ };
var PROTOTYPE$2   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe')
    , i      = _enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--){ delete createDict[PROTOTYPE$2][_enumBugKeys[i]]; }
  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE$2] = _anObject(O);
    result = new Empty;
    Empty[PROTOTYPE$2] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else { result = createDict(); }
  return Properties === undefined ? result : _objectDps(result, Properties);
};

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

var f$6 = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return _objectKeysInternal(O, hiddenKeys);
};

var _objectGopn = {
	f: f$6
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var gOPN$1      = _objectGopn.f;
var toString$1  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN$1(it);
  } catch(e){
    return windowNames.slice();
  }
};

var f$5 = function getOwnPropertyNames(it){
  return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN$1(_toIobject(it));
};

var _objectGopnExt = {
	f: f$5
};

var gOPD$1           = Object.getOwnPropertyDescriptor;

var f$7 = _descriptors ? gOPD$1 : function getOwnPropertyDescriptor(O, P){
  O = _toIobject(O);
  P = _toPrimitive(P, true);
  if(_ie8DomDefine){ try {
    return gOPD$1(O, P);
  } catch(e){ /* empty */ } }
  if(_has(O, P)){ return _propertyDesc(!_objectPie.f.call(O, P), O[P]); }
};

var _objectGopd = {
	f: f$7
};

// ECMAScript 6 symbols shim
var META           = _meta.KEY;
var gOPD           = _objectGopd.f;
var dP             = _objectDp.f;
var gOPN           = _objectGopnExt.f;
var $Symbol        = _global.Symbol;
var $JSON          = _global.JSON;
var _stringify     = $JSON && $JSON.stringify;
var PROTOTYPE      = 'prototype';
var HIDDEN         = _wks('_hidden');
var TO_PRIMITIVE   = _wks('toPrimitive');
var isEnum         = {}.propertyIsEnumerable;
var SymbolRegistry = _shared('symbol-registry');
var AllSymbols     = _shared('symbols');
var OPSymbols      = _shared('op-symbols');
var ObjectProto    = Object[PROTOTYPE];
var USE_NATIVE     = typeof $Symbol == 'function';
var QObject        = _global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = _descriptors && _fails(function(){
  return _objectCreate(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc){ delete ObjectProto[key]; }
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto){ dP(ObjectProto, key, protoDesc); }
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto){ $defineProperty(OPSymbols, key, D); }
  _anObject(it);
  key = _toPrimitive(key, true);
  _anObject(D);
  if(_has(AllSymbols, key)){
    if(!D.enumerable){
      if(!_has(it, HIDDEN)){ dP(it, HIDDEN, _propertyDesc(1, {})); }
      it[HIDDEN][key] = true;
    } else {
      if(_has(it, HIDDEN) && it[HIDDEN][key]){ it[HIDDEN][key] = false; }
      D = _objectCreate(D, {enumerable: _propertyDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  _anObject(it);
  var keys = _enumKeys(P = _toIobject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i){ $defineProperty(it, key = keys[i++], P[key]); }
  return it;
};
var $create = function create$$1(it, P){
  return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = _toPrimitive(key, true));
  if(this === ObjectProto && _has(AllSymbols, key) && !_has(OPSymbols, key)){ return false; }
  return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = _toIobject(it);
  key = _toPrimitive(key, true);
  if(it === ObjectProto && _has(AllSymbols, key) && !_has(OPSymbols, key)){ return; }
  var D = gOPD(it, key);
  if(D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])){ D.enumerable = true; }
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(_toIobject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META){ result.push(key); }
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : _toIobject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto, key) : true)){ result.push(AllSymbols[key]); }
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol){ throw TypeError('Symbol is not a constructor!'); }
    var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto){ $set.call(OPSymbols, value); }
      if(_has(this, HIDDEN) && _has(this[HIDDEN], tag)){ this[HIDDEN][tag] = false; }
      setSymbolDesc(this, tag, _propertyDesc(1, value));
    };
    if(_descriptors && setter){ setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set}); }
    return wrap(tag);
  };
  _redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  _objectGopd.f = $getOwnPropertyDescriptor;
  _objectDp.f   = $defineProperty;
  _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
  _objectPie.f  = $propertyIsEnumerable;
  _objectGops.f = $getOwnPropertySymbols;

  if(_descriptors && !_library){
    _redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  _wksExt.f = function(name){
    return wrap(_wks(name));
  };
}

_export(_export.G + _export.W + _export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; ){ _wks(symbols[i++]); }

for(var symbols = _objectKeys(_wks.store), i = 0; symbols.length > i; ){ _wksDefine(symbols[i++]); }

_export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return _has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key)){ return _keyof(SymbolRegistry, key); }
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

_export(_export.S + _export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    var arguments$1 = arguments;

    if(it === undefined || isSymbol(it)){ return; } // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i){ args.push(arguments$1[i++]); }
    replacer = args[1];
    if(typeof replacer == 'function'){ $replacer = replacer; }
    if($replacer || !_isArray(replacer)){ replacer = function(key, value){
      if($replacer){ value = $replacer.call(this, key, value); }
      if(!isSymbol(value)){ return value; }
    }; }
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
_setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
_setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
_setToStringTag(_global.JSON, 'JSON', true);

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
_export(_export.S, 'Object', {create: _objectCreate});

// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
_export(_export.S + _export.F * !_descriptors, 'Object', {defineProperty: _objectDp.f});

// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
_export(_export.S + _export.F * !_descriptors, 'Object', {defineProperties: _objectDps});

// most Object methods by ES6 should accept primitives

var _objectSap = function(KEY, exec){
  var fn  = (_core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  _export(_export.S + _export.F * _fails(function(){ fn(1); }), 'Object', exp);
};

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var $getOwnPropertyDescriptor$1 = _objectGopd.f;

_objectSap('getOwnPropertyDescriptor', function(){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor$1(_toIobject(it), key);
  };
});

// 7.1.13 ToObject(argument)

var _toObject = function(it){
  return Object(_defined(it));
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var IE_PROTO$2    = _sharedKey('IE_PROTO');
var ObjectProto$1 = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function(O){
  O = _toObject(O);
  if(_has(O, IE_PROTO$2)){ return O[IE_PROTO$2]; }
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto$1 : null;
};

// 19.1.2.9 Object.getPrototypeOf(O)


_objectSap('getPrototypeOf', function(){
  return function getPrototypeOf$$1(it){
    return _objectGpo(_toObject(it));
  };
});

// 19.1.2.14 Object.keys(O)


_objectSap('keys', function(){
  return function keys(it){
    return _objectKeys(_toObject(it));
  };
});

// 19.1.2.7 Object.getOwnPropertyNames(O)
_objectSap('getOwnPropertyNames', function(){
  return _objectGopnExt.f;
});

// 19.1.2.5 Object.freeze(O)
var meta     = _meta.onFreeze;

_objectSap('freeze', function($freeze){
  return function freeze(it){
    return $freeze && _isObject(it) ? $freeze(meta(it)) : it;
  };
});

// 19.1.2.17 Object.seal(O)
var meta$1     = _meta.onFreeze;

_objectSap('seal', function($seal){
  return function seal(it){
    return $seal && _isObject(it) ? $seal(meta$1(it)) : it;
  };
});

// 19.1.2.15 Object.preventExtensions(O)
var meta$2     = _meta.onFreeze;

_objectSap('preventExtensions', function($preventExtensions){
  return function preventExtensions(it){
    return $preventExtensions && _isObject(it) ? $preventExtensions(meta$2(it)) : it;
  };
});

// 19.1.2.12 Object.isFrozen(O)


_objectSap('isFrozen', function($isFrozen){
  return function isFrozen(it){
    return _isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});

// 19.1.2.13 Object.isSealed(O)


_objectSap('isSealed', function($isSealed){
  return function isSealed(it){
    return _isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});

// 19.1.2.11 Object.isExtensible(O)


_objectSap('isExtensible', function($isExtensible){
  return function isExtensible(it){
    return _isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

// 19.1.2.1 Object.assign(target, source, ...)
var $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign = !$assign || _fails(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){
  var arguments$1 = arguments;
 // eslint-disable-line no-unused-vars
  var T     = _toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = _objectGops.f
    , isEnum     = _objectPie.f;
  while(aLen > index){
    var S      = _iobject(arguments$1[index++])
      , keys   = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j){ if(isEnum.call(S, key = keys[j++])){ T[key] = S[key]; } }
  } return T;
} : $assign;

// 19.1.3.1 Object.assign(target, source)


_export(_export.S + _export.F, 'Object', {assign: _objectAssign});

// 7.2.9 SameValue(x, y)
var _sameValue = Object.is || function is(x, y){
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

// 19.1.3.10 Object.is(value1, value2)

_export(_export.S, 'Object', {is: _sameValue});

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */

var check = function(O, proto){
  _anObject(O);
  if(!_isObject(proto) && proto !== null){ throw TypeError(proto + ": can't set as prototype!"); }
};
var _setProto = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy){ O.__proto__ = proto; }
        else { set(O, proto); }
        return O;
      };
    }({}, false) : undefined),
  check: check
};

// 19.1.3.19 Object.setPrototypeOf(O, proto)

_export(_export.S, 'Object', {setPrototypeOf: _setProto.set});

// getting tag from 19.1.3.6 Object.prototype.toString()
var TAG$1 = _wks('toStringTag');
var ARG = _cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

var _classof = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
    // builtinTag case
    : ARG ? _cof(O)
    // ES3 arguments fallback
    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

// 19.1.3.6 Object.prototype.toString()
var test    = {};
test[_wks('toStringTag')] = 'z';
if(test + '' != '[object z]'){
  _redefine(Object.prototype, 'toString', function toString(){
    return '[object ' + _classof(this) + ']';
  }, true);
}

// fast apply, http://jsperf.lnkit.com/fast-apply/5
var _invoke = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

var arraySlice = [].slice;
var factories  = {};

var construct = function(F, len, args){
  if(!(len in factories)){
    for(var n = [], i = 0; i < len; i++){ n[i] = 'a[' + i + ']'; }
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

var _bind = Function.bind || function bind(that /*, args... */){
  var fn       = _aFunction(this)
    , partArgs = arraySlice.call(arguments, 1);
  var bound = function(/* args... */){
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : _invoke(fn, args, that);
  };
  if(_isObject(fn.prototype)){ bound.prototype = fn.prototype; }
  return bound;
};

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)


_export(_export.P, 'Function', {bind: _bind});

var dP$2         = _objectDp.f;
var FProto     = Function.prototype;
var nameRE     = /^\s*function ([^ (]*)/;
var NAME       = 'name';

var isExtensible = Object.isExtensible || function(){
  return true;
};

// 19.2.4.2 name
NAME in FProto || _descriptors && dP$2(FProto, NAME, {
  configurable: true,
  get: function(){
    try {
      var that = this
        , name = ('' + that).match(nameRE)[1];
      _has(that, NAME) || !isExtensible(that) || dP$2(that, NAME, _propertyDesc(5, name));
      return name;
    } catch(e){
      return '';
    }
  }
});

var HAS_INSTANCE   = _wks('hasInstance');
var FunctionProto  = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if(!(HAS_INSTANCE in FunctionProto)){ _objectDp.f(FunctionProto, HAS_INSTANCE, {value: function(O){
  var this$1 = this;

  if(typeof this != 'function' || !_isObject(O)){ return false; }
  if(!_isObject(this.prototype)){ return O instanceof this; }
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while(O = _objectGpo(O)){ if(this$1.prototype === O){ return true; } }
  return false;
}}); }

var _stringWs = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var space   = '[' + _stringWs + ']';
var non     = '\u200b\u0085';
var ltrim   = RegExp('^' + space + space + '*');
var rtrim   = RegExp(space + space + '*$');

var exporter = function(KEY, exec, ALIAS){
  var exp   = {};
  var FORCE = _fails(function(){
    return !!_stringWs[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : _stringWs[KEY];
  if(ALIAS){ exp[ALIAS] = fn; }
  _export(_export.P + _export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function(string, TYPE){
  string = String(_defined(string));
  if(TYPE & 1){ string = string.replace(ltrim, ''); }
  if(TYPE & 2){ string = string.replace(rtrim, ''); }
  return string;
};

var _stringTrim = exporter;

var $parseInt = _global.parseInt;
var $trim     = _stringTrim.trim;
var hex       = /^[\-+]?0[xX]/;

var _parseInt = $parseInt(_stringWs + '08') !== 8 || $parseInt(_stringWs + '0x16') !== 22 ? function parseInt(str, radix){
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;

// 18.2.5 parseInt(string, radix)
_export(_export.G + _export.F * (parseInt != _parseInt), {parseInt: _parseInt});

var $parseFloat = _global.parseFloat;
var $trim$1       = _stringTrim.trim;

var _parseFloat = 1 / $parseFloat(_stringWs + '-0') !== -Infinity ? function parseFloat(str){
  var string = $trim$1(String(str), 3)
    , result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

// 18.2.4 parseFloat(string)
_export(_export.G + _export.F * (parseFloat != _parseFloat), {parseFloat: _parseFloat});

var setPrototypeOf = _setProto.set;
var _inheritIfRequired = function(that, target, C){
  var P, S = target.constructor;
  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && _isObject(P) && setPrototypeOf){
    setPrototypeOf(that, P);
  } return that;
};

var gOPN$3              = _objectGopn.f;
var gOPD$2              = _objectGopd.f;
var dP$3                = _objectDp.f;
var $trim$2             = _stringTrim.trim;
var NUMBER            = 'Number';
var $Number           = _global[NUMBER];
var Base              = $Number;
var proto             = $Number.prototype;
var BROKEN_COF        = _cof(_objectCreate(proto)) == NUMBER;
var TRIM              = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function(argument){
  var it = _toPrimitive(argument, false);
  if(typeof it == 'string' && it.length > 2){
    it = TRIM ? it.trim() : $trim$2(it, 3);
    var first = it.charCodeAt(0)
      , third, radix, maxCode;
    if(first === 43 || first === 45){
      third = it.charCodeAt(2);
      if(third === 88 || third === 120){ return NaN; } // Number('+0x1') should be NaN, old V8 fix
    } else if(first === 48){
      switch(it.charCodeAt(1)){
        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default : return +it;
      }
      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if(code < 48 || code > maxCode){ return NaN; }
      } return parseInt(digits, radix);
    }
  } return +it;
};

if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
  $Number = function Number(value){
    var it = arguments.length < 1 ? 0 : value
      , that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? _fails(function(){ proto.valueOf.call(that); }) : _cof(that) != NUMBER)
        ? _inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for(var keys = _descriptors ? gOPN$3(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++){
    if(_has(Base, key = keys[j]) && !_has($Number, key)){
      dP$3($Number, key, gOPD$2(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  _redefine(_global, NUMBER, $Number);
}

var _aNumberValue = function(it, msg){
  if(typeof it != 'number' && _cof(it) != 'Number'){ throw TypeError(msg); }
  return +it;
};

var _stringRepeat = function repeat(count){
  var str = String(_defined(this))
    , res = ''
    , n   = _toInteger(count);
  if(n < 0 || n == Infinity){ throw RangeError("Count can't be negative"); }
  for(;n > 0; (n >>>= 1) && (str += str)){ if(n & 1){ res += str; } }
  return res;
};

var $toFixed     = 1..toFixed;
var floor$1        = Math.floor;
var data         = [0, 0, 0, 0, 0, 0];
var ERROR        = 'Number.toFixed: incorrect invocation!';
var ZERO         = '0';

var multiply = function(n, c){
  var i  = -1
    , c2 = c;
  while(++i < 6){
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor$1(c2 / 1e7);
  }
};
var divide = function(n){
  var i = 6
    , c = 0;
  while(--i >= 0){
    c += data[i];
    data[i] = floor$1(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function(){
  var i = 6
    , s = '';
  while(--i >= 0){
    if(s !== '' || i === 0 || data[i] !== 0){
      var t = String(data[i]);
      s = s === '' ? t : s + _stringRepeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function(x, n, acc){
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function(x){
  var n  = 0
    , x2 = x;
  while(x2 >= 4096){
    n += 12;
    x2 /= 4096;
  }
  while(x2 >= 2){
    n  += 1;
    x2 /= 2;
  } return n;
};

_export(_export.P + _export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128..toFixed(0) !== '1000000000000000128'
) || !_fails(function(){
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits){
    var x = _aNumberValue(this, ERROR)
      , f = _toInteger(fractionDigits)
      , s = ''
      , m = ZERO
      , e, z, j, k;
    if(f < 0 || f > 20){ throw RangeError(ERROR); }
    if(x != x){ return 'NaN'; }
    if(x <= -1e21 || x >= 1e21){ return String(x); }
    if(x < 0){
      s = '-';
      x = -x;
    }
    if(x > 1e-21){
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if(e > 0){
        multiply(0, z);
        j = f;
        while(j >= 7){
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while(j >= 23){
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + _stringRepeat.call(ZERO, f);
      }
    }
    if(f > 0){
      k = m.length;
      m = s + (k <= f ? '0.' + _stringRepeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});

var $toPrecision = 1..toPrecision;

_export(_export.P + _export.F * (_fails(function(){
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !_fails(function(){
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision){
    var that = _aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
  }
});

// 20.1.2.1 Number.EPSILON


_export(_export.S, 'Number', {EPSILON: Math.pow(2, -52)});

// 20.1.2.2 Number.isFinite(number)
var _isFinite = _global.isFinite;

_export(_export.S, 'Number', {
  isFinite: function isFinite(it){
    return typeof it == 'number' && _isFinite(it);
  }
});

// 20.1.2.3 Number.isInteger(number)
var floor$2    = Math.floor;
var _isInteger = function isInteger(it){
  return !_isObject(it) && isFinite(it) && floor$2(it) === it;
};

// 20.1.2.3 Number.isInteger(number)


_export(_export.S, 'Number', {isInteger: _isInteger});

// 20.1.2.4 Number.isNaN(number)


_export(_export.S, 'Number', {
  isNaN: function isNaN(number){
    return number != number;
  }
});

// 20.1.2.5 Number.isSafeInteger(number)
var abs       = Math.abs;

_export(_export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number){
    return _isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});

// 20.1.2.6 Number.MAX_SAFE_INTEGER


_export(_export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

// 20.1.2.10 Number.MIN_SAFE_INTEGER


_export(_export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

// 20.1.2.12 Number.parseFloat(string)
_export(_export.S + _export.F * (Number.parseFloat != _parseFloat), 'Number', {parseFloat: _parseFloat});

// 20.1.2.13 Number.parseInt(string, radix)
_export(_export.S + _export.F * (Number.parseInt != _parseInt), 'Number', {parseInt: _parseInt});

// 20.2.2.20 Math.log1p(x)
var _mathLog1p = Math.log1p || function log1p(x){
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};

// 20.2.2.3 Math.acosh(x)
var sqrt    = Math.sqrt;
var $acosh  = Math.acosh;

_export(_export.S + _export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x){
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : _mathLog1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});

// 20.2.2.5 Math.asinh(x)
var $asinh  = Math.asinh;

function asinh(x){
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0 
_export(_export.S + _export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

// 20.2.2.7 Math.atanh(x)
var $atanh  = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0 
_export(_export.S + _export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x){
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});

// 20.2.2.28 Math.sign(x)
var _mathSign = Math.sign || function sign(x){
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

// 20.2.2.9 Math.cbrt(x)


_export(_export.S, 'Math', {
  cbrt: function cbrt(x){
    return _mathSign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});

// 20.2.2.11 Math.clz32(x)


_export(_export.S, 'Math', {
  clz32: function clz32(x){
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});

// 20.2.2.12 Math.cosh(x)
var exp     = Math.exp;

_export(_export.S, 'Math', {
  cosh: function cosh(x){
    return (exp(x = +x) + exp(-x)) / 2;
  }
});

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
var _mathExpm1 = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x){
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;

// 20.2.2.14 Math.expm1(x)


_export(_export.S + _export.F * (_mathExpm1 != Math.expm1), 'Math', {expm1: _mathExpm1});

// 20.2.2.16 Math.fround(x)
var pow$1       = Math.pow;
var EPSILON   = pow$1(2, -52);
var EPSILON32 = pow$1(2, -23);
var MAX32     = pow$1(2, 127) * (2 - EPSILON32);
var MIN32     = pow$1(2, -126);

var roundTiesToEven = function(n){
  return n + 1 / EPSILON - 1 / EPSILON;
};


_export(_export.S, 'Math', {
  fround: function fround(x){
    var $abs  = Math.abs(x)
      , $sign = _mathSign(x)
      , a, result;
    if($abs < MIN32){ return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32; }
    a = (1 + EPSILON32 / EPSILON) * $abs;
    result = a - (a - $abs);
    if(result > MAX32 || result != result){ return $sign * Infinity; }
    return $sign * result;
  }
});

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var abs$1     = Math.abs;

_export(_export.S, 'Math', {
  hypot: function hypot(value1, value2){
    var arguments$1 = arguments;
 // eslint-disable-line no-unused-vars
    var sum  = 0
      , i    = 0
      , aLen = arguments.length
      , larg = 0
      , arg, div;
    while(i < aLen){
      arg = abs$1(arguments$1[i++]);
      if(larg < arg){
        div  = larg / arg;
        sum  = sum * div * div + 1;
        larg = arg;
      } else if(arg > 0){
        div  = arg / larg;
        sum += div * div;
      } else { sum += arg; }
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});

// 20.2.2.18 Math.imul(x, y)
var $imul   = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
_export(_export.S + _export.F * _fails(function(){
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y){
    var UINT16 = 0xffff
      , xn = +x
      , yn = +y
      , xl = UINT16 & xn
      , yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});

// 20.2.2.21 Math.log10(x)


_export(_export.S, 'Math', {
  log10: function log10(x){
    return Math.log(x) / Math.LN10;
  }
});

// 20.2.2.20 Math.log1p(x)


_export(_export.S, 'Math', {log1p: _mathLog1p});

// 20.2.2.22 Math.log2(x)


_export(_export.S, 'Math', {
  log2: function log2(x){
    return Math.log(x) / Math.LN2;
  }
});

// 20.2.2.28 Math.sign(x)


_export(_export.S, 'Math', {sign: _mathSign});

// 20.2.2.30 Math.sinh(x)
var exp$1     = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
_export(_export.S + _export.F * _fails(function(){
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x){
    return Math.abs(x = +x) < 1
      ? (_mathExpm1(x) - _mathExpm1(-x)) / 2
      : (exp$1(x - 1) - exp$1(-x - 1)) * (Math.E / 2);
  }
});

// 20.2.2.33 Math.tanh(x)
var exp$2     = Math.exp;

_export(_export.S, 'Math', {
  tanh: function tanh(x){
    var a = _mathExpm1(x = +x)
      , b = _mathExpm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp$2(x) + exp$2(-x));
  }
});

// 20.2.2.34 Math.trunc(x)


_export(_export.S, 'Math', {
  trunc: function trunc(it){
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});

var fromCharCode   = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
_export(_export.S + _export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x){
    var arguments$1 = arguments;
 // eslint-disable-line no-unused-vars
    var res  = []
      , aLen = arguments.length
      , i    = 0
      , code;
    while(aLen > i){
      code = +arguments$1[i++];
      if(_toIndex(code, 0x10ffff) !== code){ throw RangeError(code + ' is not a valid code point'); }
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});

_export(_export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite){
    var arguments$1 = arguments;

    var tpl  = _toIobject(callSite.raw)
      , len  = _toLength(tpl.length)
      , aLen = arguments.length
      , res  = []
      , i    = 0;
    while(len > i){
      res.push(String(tpl[i++]));
      if(i < aLen){ res.push(String(arguments$1[i])); }
    } return res.join('');
  }
});

// 21.1.3.25 String.prototype.trim()
_stringTrim('trim', function($trim){
  return function trim(){
    return $trim(this, 3);
  };
});

// true  -> String#at
// false -> String#codePointAt
var _stringAt = function(TO_STRING){
  return function(that, pos){
    var s = String(_defined(that))
      , i = _toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l){ return TO_STRING ? '' : undefined; }
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _iterators = {};

var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function(){ return this; });

var _iterCreate = function(Constructor, NAME, next){
  Constructor.prototype = _objectCreate(IteratorPrototype, {next: _propertyDesc(1, next)});
  _setToStringTag(Constructor, NAME + ' Iterator');
};

var ITERATOR       = _wks('iterator');
var BUGGY          = !([].keys && 'next' in [].keys());
var FF_ITERATOR    = '@@iterator';
var KEYS           = 'keys';
var VALUES         = 'values';

var returnThis = function(){ return this; };

var _iterDefine = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  _iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto){ return proto[kind]; }
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = _objectGpo($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      _setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!_library && !_has(IteratorPrototype, ITERATOR)){ _hide(IteratorPrototype, ITERATOR, returnThis); }
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    _hide(proto, ITERATOR, $default);
  }
  // Plug for library
  _iterators[NAME] = $default;
  _iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED){ for(key in methods){
      if(!(key in proto)){ _redefine(proto, key, methods[key]); }
    } } else { _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods); }
  }
  return methods;
};

var $at  = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length){ return {value: undefined, done: true}; }
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

var $at$1     = _stringAt(false);
_export(_export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos){
    return $at$1(this, pos);
  }
});

// 7.2.8 IsRegExp(argument)
var MATCH    = _wks('match');
var _isRegexp = function(it){
  var isRegExp;
  return _isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : _cof(it) == 'RegExp');
};

// helper for String#{startsWith, endsWith, includes}


var _stringContext = function(that, searchString, NAME){
  if(_isRegexp(searchString)){ throw TypeError('String#' + NAME + " doesn't accept regex!"); }
  return String(_defined(that));
};

var MATCH$1 = _wks('match');
var _failsIsRegexp = function(KEY){
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch(e){
    try {
      re[MATCH$1] = false;
      return !'/./'[KEY](re);
    } catch(f){ /* empty */ }
  } return true;
};

var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

_export(_export.P + _export.F * _failsIsRegexp(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /*, endPosition = @length */){
    var that = _stringContext(this, searchString, ENDS_WITH)
      , endPosition = arguments.length > 1 ? arguments[1] : undefined
      , len    = _toLength(that.length)
      , end    = endPosition === undefined ? len : Math.min(_toLength(endPosition), len)
      , search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});

var INCLUDES = 'includes';

_export(_export.P + _export.F * _failsIsRegexp(INCLUDES), 'String', {
  includes: function includes(searchString /*, position = 0 */){
    return !!~_stringContext(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

_export(_export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: _stringRepeat
});

var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

_export(_export.P + _export.F * _failsIsRegexp(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /*, position = 0 */){
    var that   = _stringContext(this, searchString, STARTS_WITH)
      , index  = _toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
      , search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});

var quot    = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function(string, tag, attribute, value) {
  var S  = String(_defined(string))
    , p1 = '<' + tag;
  if(attribute !== ''){ p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"'; }
  return p1 + '>' + S + '</' + tag + '>';
};
var _stringHtml = function(NAME, exec){
  var O = {};
  O[NAME] = exec(createHTML);
  _export(_export.P + _export.F * _fails(function(){
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};

// B.2.3.2 String.prototype.anchor(name)
_stringHtml('anchor', function(createHTML){
  return function anchor(name){
    return createHTML(this, 'a', 'name', name);
  }
});

// B.2.3.3 String.prototype.big()
_stringHtml('big', function(createHTML){
  return function big(){
    return createHTML(this, 'big', '', '');
  }
});

// B.2.3.4 String.prototype.blink()
_stringHtml('blink', function(createHTML){
  return function blink(){
    return createHTML(this, 'blink', '', '');
  }
});

// B.2.3.5 String.prototype.bold()
_stringHtml('bold', function(createHTML){
  return function bold(){
    return createHTML(this, 'b', '', '');
  }
});

// B.2.3.6 String.prototype.fixed()
_stringHtml('fixed', function(createHTML){
  return function fixed(){
    return createHTML(this, 'tt', '', '');
  }
});

// B.2.3.7 String.prototype.fontcolor(color)
_stringHtml('fontcolor', function(createHTML){
  return function fontcolor(color){
    return createHTML(this, 'font', 'color', color);
  }
});

// B.2.3.8 String.prototype.fontsize(size)
_stringHtml('fontsize', function(createHTML){
  return function fontsize(size){
    return createHTML(this, 'font', 'size', size);
  }
});

// B.2.3.9 String.prototype.italics()
_stringHtml('italics', function(createHTML){
  return function italics(){
    return createHTML(this, 'i', '', '');
  }
});

// B.2.3.10 String.prototype.link(url)
_stringHtml('link', function(createHTML){
  return function link(url){
    return createHTML(this, 'a', 'href', url);
  }
});

// B.2.3.11 String.prototype.small()
_stringHtml('small', function(createHTML){
  return function small(){
    return createHTML(this, 'small', '', '');
  }
});

// B.2.3.12 String.prototype.strike()
_stringHtml('strike', function(createHTML){
  return function strike(){
    return createHTML(this, 'strike', '', '');
  }
});

// B.2.3.13 String.prototype.sub()
_stringHtml('sub', function(createHTML){
  return function sub(){
    return createHTML(this, 'sub', '', '');
  }
});

// B.2.3.14 String.prototype.sup()
_stringHtml('sup', function(createHTML){
  return function sup(){
    return createHTML(this, 'sup', '', '');
  }
});

// 20.3.3.1 / 15.9.4.4 Date.now()


_export(_export.S, 'Date', {now: function(){ return new Date().getTime(); }});

_export(_export.P + _export.F * _fails(function(){
  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
}), 'Date', {
  toJSON: function toJSON(key){
    var O  = _toObject(this)
      , pv = _toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var getTime = Date.prototype.getTime;

var lz = function(num){
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
_export(_export.P + _export.F * (_fails(function(){
  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
}) || !_fails(function(){
  new Date(NaN).toISOString();
})), 'Date', {
  toISOString: function toISOString(){
    if(!isFinite(getTime.call(this))){ throw RangeError('Invalid time value'); }
    var d = this
      , y = d.getUTCFullYear()
      , m = d.getUTCMilliseconds()
      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
  }
});

var DateProto    = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING    = 'toString';
var $toString    = DateProto[TO_STRING];
var getTime$1      = DateProto.getTime;
if(new Date(NaN) + '' != INVALID_DATE){
  _redefine(DateProto, TO_STRING, function toString(){
    var value = getTime$1.call(this);
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}

var NUMBER$1      = 'number';

var _dateToPrimitive = function(hint){
  if(hint !== 'string' && hint !== NUMBER$1 && hint !== 'default'){ throw TypeError('Incorrect hint'); }
  return _toPrimitive(_anObject(this), hint != NUMBER$1);
};

var TO_PRIMITIVE$1 = _wks('toPrimitive');
var proto$1        = Date.prototype;

if(!(TO_PRIMITIVE$1 in proto$1)){ _hide(proto$1, TO_PRIMITIVE$1, _dateToPrimitive); }

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)


_export(_export.S, 'Array', {isArray: _isArray});

// call something on iterator step with safe closing on error

var _iterCall = function(iterator, fn, value, entries){
  try {
    return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined){ _anObject(ret.call(iterator)); }
    throw e;
  }
};

// check on default Array iterator
var ITERATOR$1   = _wks('iterator');
var ArrayProto = Array.prototype;

var _isArrayIter = function(it){
  return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
};

var _createProperty = function(object, index, value){
  if(index in object){ _objectDp.f(object, index, _propertyDesc(0, value)); }
  else { object[index] = value; }
};

var ITERATOR$2  = _wks('iterator');
var core_getIteratorMethod = _core.getIteratorMethod = function(it){
  if(it != undefined){ return it[ITERATOR$2]
    || it['@@iterator']
    || _iterators[_classof(it)]; }
};

var ITERATOR$3     = _wks('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR$3]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

var _iterDetect = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING){ return false; }
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR$3]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR$3] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

_export(_export.S + _export.F * !_iterDetect(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = _toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = core_getIteratorMethod(O)
      , length, result, step, iterator;
    if(mapping){ mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2); }
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && _isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = _toLength(O.length);
      for(result = new C(length); length > index; index++){
        _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

// WebKit Array.of isn't generic
_export(_export.S + _export.F * _fails(function(){
  function F(){}
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */){
    var arguments$1 = arguments;

    var index  = 0
      , aLen   = arguments.length
      , result = new (typeof this == 'function' ? this : Array)(aLen);
    while(aLen > index){ _createProperty(result, index, arguments$1[index++]); }
    result.length = aLen;
    return result;
  }
});

var _strictMethod = function(method, arg){
  return !!method && _fails(function(){
    arg ? method.call(null, function(){}, 1) : method.call(null);
  });
};

// 22.1.3.13 Array.prototype.join(separator)
var arrayJoin = [].join;

// fallback for not array-like strings
_export(_export.P + _export.F * (_iobject != Object || !_strictMethod(arrayJoin)), 'Array', {
  join: function join(separator){
    return arrayJoin.call(_toIobject(this), separator === undefined ? ',' : separator);
  }
});

var arraySlice$1 = [].slice;

// fallback for not array-like ES3 strings and DOM objects
_export(_export.P + _export.F * _fails(function(){
  if(_html){ arraySlice$1.call(_html); }
}), 'Array', {
  slice: function slice(begin, end){
    var this$1 = this;

    var len   = _toLength(this.length)
      , klass = _cof(this);
    end = end === undefined ? len : end;
    if(klass == 'Array'){ return arraySlice$1.call(this, begin, end); }
    var start  = _toIndex(begin, len)
      , upTo   = _toIndex(end, len)
      , size   = _toLength(upTo - start)
      , cloned = Array(size)
      , i      = 0;
    for(; i < size; i++){ cloned[i] = klass == 'String'
      ? this$1.charAt(start + i)
      : this$1[start + i]; }
    return cloned;
  }
});

var $sort     = [].sort;
var test$1      = [1, 2, 3];

_export(_export.P + _export.F * (_fails(function(){
  // IE8-
  test$1.sort(undefined);
}) || !_fails(function(){
  // V8 bug
  test$1.sort(null);
  // Old WebKit
}) || !_strictMethod($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn){
    return comparefn === undefined
      ? $sort.call(_toObject(this))
      : $sort.call(_toObject(this), _aFunction(comparefn));
  }
});

var SPECIES  = _wks('species');

var _arraySpeciesConstructor = function(original){
  var C;
  if(_isArray(original)){
    C = original.constructor;
    // cross-realm fallback
    if(typeof C == 'function' && (C === Array || _isArray(C.prototype))){ C = undefined; }
    if(_isObject(C)){
      C = C[SPECIES];
      if(C === null){ C = undefined; }
    }
  } return C === undefined ? Array : C;
};

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)


var _arraySpeciesCreate = function(original, length){
  return new (_arraySpeciesConstructor(original))(length);
};

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex

var _arrayMethods = function(TYPE, $create){
  var IS_MAP        = TYPE == 1
    , IS_FILTER     = TYPE == 2
    , IS_SOME       = TYPE == 3
    , IS_EVERY      = TYPE == 4
    , IS_FIND_INDEX = TYPE == 6
    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
    , create        = $create || _arraySpeciesCreate;
  return function($this, callbackfn, that){
    var O      = _toObject($this)
      , self   = _iobject(O)
      , f      = _ctx(callbackfn, that, 3)
      , length = _toLength(self.length)
      , index  = 0
      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
      , val, res;
    for(;length > index; index++){ if(NO_HOLES || index in self){
      val = self[index];
      res = f(val, index, O);
      if(TYPE){
        if(IS_MAP){ result[index] = res; }            // map
        else if(res){ switch(TYPE){
          case 3: return true;                    // some
          case 5: return val;                     // find
          case 6: return index;                   // findIndex
          case 2: result.push(val);               // filter
        } } else if(IS_EVERY){ return false; }          // every
      }
    } }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

var $forEach = _arrayMethods(0);
var STRICT   = _strictMethod([].forEach, true);

_export(_export.P + _export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */){
    return $forEach(this, callbackfn, arguments[1]);
  }
});

var $map    = _arrayMethods(1);

_export(_export.P + _export.F * !_strictMethod([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */){
    return $map(this, callbackfn, arguments[1]);
  }
});

var $filter = _arrayMethods(2);

_export(_export.P + _export.F * !_strictMethod([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */){
    return $filter(this, callbackfn, arguments[1]);
  }
});

var $some   = _arrayMethods(3);

_export(_export.P + _export.F * !_strictMethod([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */){
    return $some(this, callbackfn, arguments[1]);
  }
});

var $every  = _arrayMethods(4);

_export(_export.P + _export.F * !_strictMethod([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */){
    return $every(this, callbackfn, arguments[1]);
  }
});

var _arrayReduce = function(that, callbackfn, aLen, memo, isRight){
  _aFunction(callbackfn);
  var O      = _toObject(that)
    , self   = _iobject(O)
    , length = _toLength(O.length)
    , index  = isRight ? length - 1 : 0
    , i      = isRight ? -1 : 1;
  if(aLen < 2){ for(;;){
    if(index in self){
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if(isRight ? index < 0 : length <= index){
      throw TypeError('Reduce of empty array with no initial value');
    }
  } }
  for(;isRight ? index >= 0 : length > index; index += i){ if(index in self){
    memo = callbackfn(memo, self[index], index, O);
  } }
  return memo;
};

_export(_export.P + _export.F * !_strictMethod([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */){
    return _arrayReduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});

_export(_export.P + _export.F * !_strictMethod([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */){
    return _arrayReduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});

var $indexOf      = _arrayIncludes(false);
var $native       = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

_export(_export.P + _export.F * (NEGATIVE_ZERO || !_strictMethod($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});

var $native$1       = [].lastIndexOf;
var NEGATIVE_ZERO$1 = !!$native$1 && 1 / [1].lastIndexOf(1, -0) < 0;

_export(_export.P + _export.F * (NEGATIVE_ZERO$1 || !_strictMethod($native$1)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
    // convert -0 to +0
    if(NEGATIVE_ZERO$1){ return $native$1.apply(this, arguments) || 0; }
    var O      = _toIobject(this)
      , length = _toLength(O.length)
      , index  = length - 1;
    if(arguments.length > 1){ index = Math.min(index, _toInteger(arguments[1])); }
    if(index < 0){ index = length + index; }
    for(;index >= 0; index--){ if(index in O){ if(O[index] === searchElement){ return index || 0; } } }
    return -1;
  }
});

var _arrayCopyWithin = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
  var O     = _toObject(this)
    , len   = _toLength(O.length)
    , to    = _toIndex(target, len)
    , from  = _toIndex(start, len)
    , end   = arguments.length > 2 ? arguments[2] : undefined
    , count = Math.min((end === undefined ? len : _toIndex(end, len)) - from, len - to)
    , inc   = 1;
  if(from < to && to < from + count){
    inc  = -1;
    from += count - 1;
    to   += count - 1;
  }
  while(count-- > 0){
    if(from in O){ O[to] = O[from]; }
    else { delete O[to]; }
    to   += inc;
    from += inc;
  } return O;
};

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = _wks('unscopables');
var ArrayProto$1  = Array.prototype;
if(ArrayProto$1[UNSCOPABLES] == undefined){ _hide(ArrayProto$1, UNSCOPABLES, {}); }
var _addToUnscopables = function(key){
  ArrayProto$1[UNSCOPABLES][key] = true;
};

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)


_export(_export.P, 'Array', {copyWithin: _arrayCopyWithin});

_addToUnscopables('copyWithin');

var _arrayFill = function fill(value /*, start = 0, end = @length */){
  var O      = _toObject(this)
    , length = _toLength(O.length)
    , aLen   = arguments.length
    , index  = _toIndex(aLen > 1 ? arguments[1] : undefined, length)
    , end    = aLen > 2 ? arguments[2] : undefined
    , endPos = end === undefined ? length : _toIndex(end, length);
  while(endPos > index){ O[index++] = value; }
  return O;
};

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)


_export(_export.P, 'Array', {fill: _arrayFill});

_addToUnscopables('fill');

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $find   = _arrayMethods(5);
var KEY     = 'find';
var forced  = true;
// Shouldn't skip holes
if(KEY in []){ Array(1)[KEY](function(){ forced = false; }); }
_export(_export.P + _export.F * forced, 'Array', {
  find: function find(callbackfn/*, that = undefined */){
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
_addToUnscopables(KEY);

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $find$1   = _arrayMethods(6);
var KEY$1     = 'findIndex';
var forced$1  = true;
// Shouldn't skip holes
if(KEY$1 in []){ Array(1)[KEY$1](function(){ forced$1 = false; }); }
_export(_export.P + _export.F * forced$1, 'Array', {
  findIndex: function findIndex(callbackfn/*, that = undefined */){
    return $find$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
_addToUnscopables(KEY$1);

var SPECIES$1     = _wks('species');

var _setSpecies = function(KEY){
  var C = _global[KEY];
  if(_descriptors && C && !C[SPECIES$1]){ _objectDp.f(C, SPECIES$1, {
    configurable: true,
    get: function(){ return this; }
  }); }
};

_setSpecies('Array');

var _iterStep = function(done, value){
  return {value: value, done: !!done};
};

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine(Array, 'Array', function(iterated, kind){
  this._t = _toIobject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return _iterStep(1);
  }
  if(kind == 'keys'  ){ return _iterStep(0, index); }
  if(kind == 'values'){ return _iterStep(0, O[index]); }
  return _iterStep(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
_iterators.Arguments = _iterators.Array;

_addToUnscopables('keys');
_addToUnscopables('values');
_addToUnscopables('entries');

// 21.2.5.3 get RegExp.prototype.flags

var _flags = function(){
  var that   = _anObject(this)
    , result = '';
  if(that.global)     { result += 'g'; }
  if(that.ignoreCase) { result += 'i'; }
  if(that.multiline)  { result += 'm'; }
  if(that.unicode)    { result += 'u'; }
  if(that.sticky)     { result += 'y'; }
  return result;
};

var dP$4                = _objectDp.f;
var gOPN$4              = _objectGopn.f;
var $RegExp           = _global.RegExp;
var Base$1              = $RegExp;
var proto$2             = $RegExp.prototype;
var re1               = /a/g;
var re2               = /a/g;
var CORRECT_NEW       = new $RegExp(re1) !== re1;

if(_descriptors && (!CORRECT_NEW || _fails(function(){
  re2[_wks('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))){
  $RegExp = function RegExp(p, f){
    var tiRE = this instanceof $RegExp
      , piRE = _isRegexp(p)
      , fiU  = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : _inheritIfRequired(CORRECT_NEW
        ? new Base$1(piRE && !fiU ? p.source : p, f)
        : Base$1((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? _flags.call(p) : f)
      , tiRE ? this : proto$2, $RegExp);
  };
  var proxy = function(key){
    key in $RegExp || dP$4($RegExp, key, {
      configurable: true,
      get: function(){ return Base$1[key]; },
      set: function(it){ Base$1[key] = it; }
    });
  };
  for(var keys$1 = gOPN$4(Base$1), i$1 = 0; keys$1.length > i$1; ){ proxy(keys$1[i$1++]); }
  proto$2.constructor = $RegExp;
  $RegExp.prototype = proto$2;
  _redefine(_global, 'RegExp', $RegExp);
}

_setSpecies('RegExp');

// 21.2.5.3 get RegExp.prototype.flags()
if(_descriptors && /./g.flags != 'g'){ _objectDp.f(RegExp.prototype, 'flags', {
  configurable: true,
  get: _flags
}); }

var TO_STRING$1   = 'toString';
var $toString$1   = /./[TO_STRING$1];

var define = function(fn){
  _redefine(RegExp.prototype, TO_STRING$1, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if(_fails(function(){ return $toString$1.call({source: 'a', flags: 'b'}) != '/a/b'; })){
  define(function toString(){
    var R = _anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !_descriptors && R instanceof RegExp ? _flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if($toString$1.name != TO_STRING$1){
  define(function toString(){
    return $toString$1.call(this);
  });
}

var _fixReWks = function(KEY, length, exec){
  var SYMBOL   = _wks(KEY)
    , fns      = exec(_defined, SYMBOL, ''[KEY])
    , strfn    = fns[0]
    , rxfn     = fns[1];
  if(_fails(function(){
    var O = {};
    O[SYMBOL] = function(){ return 7; };
    return ''[KEY](O) != 7;
  })){
    _redefine(String.prototype, KEY, strfn);
    _hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function(string, arg){ return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function(string){ return rxfn.call(string, this); }
    );
  }
};

// @@match logic
_fixReWks('match', 1, function(defined, MATCH, $match){
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp){
    'use strict';
    var O  = defined(this)
      , fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});

// @@replace logic
_fixReWks('replace', 2, function(defined, REPLACE, $replace){
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue){
    'use strict';
    var O  = defined(this)
      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});

// @@search logic
_fixReWks('search', 1, function(defined, SEARCH, $search){
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp){
    'use strict';
    var O  = defined(this)
      , fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});

// @@split logic
_fixReWks('split', 2, function(defined, SPLIT, $split){
  'use strict';
  var isRegExp   = _isRegexp
    , _split     = $split
    , $push      = [].push
    , $SPLIT     = 'split'
    , LENGTH     = 'length'
    , LAST_INDEX = 'lastIndex';
  if(
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ){
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function(separator, limit){
      var string = String(this);
      if(separator === undefined && limit === 0){ return []; }
      // If `separator` is not a regex, use native split
      if(!isRegExp(separator)){ return _split.call(string, separator, limit); }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if(!NPCG){ separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags); }
      while(match = separatorCopy.exec(string)){
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if(lastIndex > lastLastIndex){
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          if(!NPCG && match[LENGTH] > 1){ match[0].replace(separator2, function(){
            var arguments$1 = arguments;

            for(i = 1; i < arguments[LENGTH] - 2; i++){ if(arguments$1[i] === undefined){ match[i] = undefined; } }
          }); }
          if(match[LENGTH] > 1 && match.index < string[LENGTH]){ $push.apply(output, match.slice(1)); }
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if(output[LENGTH] >= splitLimit){ break; }
        }
        if(separatorCopy[LAST_INDEX] === match.index){ separatorCopy[LAST_INDEX]++; } // Avoid an infinite loop
      }
      if(lastLastIndex === string[LENGTH]){
        if(lastLength || !separatorCopy.test('')){ output.push(''); }
      } else { output.push(string.slice(lastLastIndex)); }
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
    $split = function(separator, limit){
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit){
    var O  = defined(this)
      , fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});

var _anInstance = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

var _forOf = createCommonjsModule(function (module) {
var BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : core_getIteratorMethod(iterable)
    , f      = _ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function'){ throw TypeError(iterable + ' is not iterable!'); }
  // fast case for arrays with default iterator
  if(_isArrayIter(iterFn)){ for(length = _toLength(iterable.length); length > index; index++){
    result = entries ? f(_anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN){ return result; }
  } } else { for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = _iterCall(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN){ return result; }
  } }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;
});

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var SPECIES$2   = _wks('species');
var _speciesConstructor = function(O, D){
  var C = _anObject(O).constructor, S;
  return C === undefined || (S = _anObject(C)[SPECIES$2]) == undefined ? D : _aFunction(S);
};

var process$1            = _global.process;
var setTask            = _global.setImmediate;
var clearTask          = _global.clearImmediate;
var MessageChannel     = _global.MessageChannel;
var counter            = 0;
var queue              = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer;
var channel;
var port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var arguments$1 = arguments;

    var args = [], i = 1;
    while(arguments.length > i){ args.push(arguments$1[i++]); }
    queue[++counter] = function(){
      _invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(_cof(process$1) == 'process'){
    defer = function(id){
      process$1.nextTick(_ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = _ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(_global.addEventListener && typeof postMessage == 'function' && !_global.importScripts){
    defer = function(id){
      _global.postMessage(id + '', '*');
    };
    _global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in _domCreate('script')){
    defer = function(id){
      _html.appendChild(_domCreate('script'))[ONREADYSTATECHANGE] = function(){
        _html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(_ctx(run, id, 1), 0);
    };
  }
}
var _task = {
  set:   setTask,
  clear: clearTask
};

var macrotask = _task.set;
var Observer  = _global.MutationObserver || _global.WebKitMutationObserver;
var process$2   = _global.process;
var Promise$1   = _global.Promise;
var isNode$1    = _cof(process$2) == 'process';

var _microtask = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode$1 && (parent = process$2.domain)){ parent.exit(); }
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head){ notify(); }
        else { last = undefined; }
        throw e;
      }
    } last = undefined;
    if(parent){ parent.enter(); }
  };

  // Node.js
  if(isNode$1){
    notify = function(){
      process$2.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise$1 && Promise$1.resolve){
    var promise = Promise$1.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(_global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last){ last.next = task; }
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

var _redefineAll = function(target, src, safe){
  for(var key in src){ _redefine(target, key, src[key], safe); }
  return target;
};

var task               = _task.set;
var microtask          = _microtask();
var PROMISE            = 'Promise';
var TypeError$1          = _global.TypeError;
var process            = _global.process;
var $Promise           = _global[PROMISE];
var process            = _global.process;
var isNode             = _classof(process) == 'process';
var empty              = function(){ /* empty */ };
var Internal;
var GenericPromiseCapability;
var Wrapper;

var USE_NATIVE$1 = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[_wks('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return _isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined){ throw TypeError$1('Bad Promise constructor'); }
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = _aFunction(resolve);
  this.reject  = _aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n){ return; }
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2){ onHandleUnhandled(promise); }
            promise._h = 1;
          }
          if(handler === true){ result = value; }
          else {
            if(domain){ domain.enter(); }
            result = handler(value);
            if(domain){ domain.exit(); }
          }
          if(result === reaction.promise){
            reject(TypeError$1('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else { resolve(result); }
        } else { reject(value); }
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i){ run(chain[i++]); } // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h){ onUnhandled(promise); }
  });
};
var onUnhandled = function(promise){
  task.call(_global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = _global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = _global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt){ throw abrupt.error; }
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1){ return false; }
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise)){ return false; }
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(_global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = _global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d){ return; }
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a){ promise._a = promise._c.slice(); }
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d){ return; }
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value){ throw TypeError$1("Promise can't be resolved itself"); }
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, _ctx($resolve, wrapper, 1), _ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE$1){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    _anInstance(this, $Promise, PROMISE, '_h');
    _aFunction(executor);
    Internal.call(this);
    try {
      executor(_ctx($resolve, this, 1), _ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = _redefineAll($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(_speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a){ this._a.push(reaction); }
      if(this._s){ notify(this, false); }
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = _ctx($resolve, promise, 1);
    this.reject  = _ctx($reject, promise, 1);
  };
}

_export(_export.G + _export.W + _export.F * !USE_NATIVE$1, {Promise: $Promise});
_setToStringTag($Promise, PROMISE);
_setSpecies(PROMISE);
Wrapper = _core[PROMISE];

// statics
_export(_export.S + _export.F * !USE_NATIVE$1, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
_export(_export.S + _export.F * (_library || !USE_NATIVE$1), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this)){ return x; }
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
_export(_export.S + _export.F * !(USE_NATIVE$1 && _iterDetect(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      _forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled){ return; }
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt){ reject(abrupt.error); }
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      _forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt){ reject(abrupt.error); }
    return capability.promise;
  }
});

var dP$5          = _objectDp.f;
var fastKey     = _meta.fastKey;
var SIZE        = _descriptors ? '_s' : 'size';

var getEntry = function(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index !== 'F'){ return that._i[index]; }
  // frozen object case
  for(entry = that._f; entry; entry = entry.n){
    if(entry.k == key){ return entry; }
  }
};

var _collectionStrong = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      _anInstance(that, C, NAME, '_i');
      that._i = _objectCreate(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if(iterable != undefined){ _forOf(iterable, IS_MAP, that[ADDER], that); }
    });
    _redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
          entry.r = true;
          if(entry.p){ entry.p = entry.p.n = undefined; }
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if(prev){ prev.n = next; }
          if(next){ next.p = prev; }
          if(that._f == entry){ that._f = next; }
          if(that._l == entry){ that._l = prev; }
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        var this$1 = this;

        _anInstance(this, C, 'forEach');
        var f = _ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
          , entry;
        while(entry = entry ? entry.n : this._f){
          f(entry.v, entry.k, this$1);
          // revert to the last existing entry
          while(entry && entry.r){ entry = entry.p; }
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if(_descriptors){ dP$5(C.prototype, 'size', {
      get: function(){
        return _defined(this[SIZE]);
      }
    }); }
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that._f){ that._f = entry; }
      if(prev){ prev.n = entry; }
      that[SIZE]++;
      // add to index
      if(index !== 'F'){ that._i[index] = entry; }
    } return that;
  },
  getEntry: getEntry,
  setStrong: function(C, NAME, IS_MAP){
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    _iterDefine(C, NAME, function(iterated, kind){
      this._t = iterated;  // target
      this._k = kind;      // kind
      this._l = undefined; // previous
    }, function(){
      var that  = this
        , kind  = that._k
        , entry = that._l;
      // revert to the last existing entry
      while(entry && entry.r){ entry = entry.p; }
      // get next entry
      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
        // or finish the iteration
        that._t = undefined;
        return _iterStep(1);
      }
      // return step by kind
      if(kind == 'keys'  ){ return _iterStep(0, entry.k); }
      if(kind == 'values'){ return _iterStep(0, entry.v); }
      return _iterStep(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    _setSpecies(NAME);
  }
};

var _collection = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
  var Base  = _global[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  var fixMethod = function(KEY){
    var fn = proto[KEY];
    _redefine(proto, KEY,
      KEY == 'delete' ? function(a){
        return IS_WEAK && !_isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a){
        return IS_WEAK && !_isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a){
        return IS_WEAK && !_isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !_fails(function(){
    new C().entries().next();
  }))){
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    _redefineAll(C.prototype, methods);
    _meta.NEED = true;
  } else {
    var instance             = new C
      // early implementations not supports chaining
      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
      , THROWS_ON_PRIMITIVES = _fails(function(){ instance.has(1); })
      // most early implementations doesn't supports iterables, most modern - not close it correctly
      , ACCEPT_ITERABLES     = _iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
      // for early implementations -0 and +0 not the same
      , BUGGY_ZERO = !IS_WEAK && _fails(function(){
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new C()
          , index     = 5;
        while(index--){ $instance[ADDER](index, index); }
        return !$instance.has(-0);
      });
    if(!ACCEPT_ITERABLES){ 
      C = wrapper(function(target, iterable){
        _anInstance(target, C, NAME);
        var that = _inheritIfRequired(new Base, target, C);
        if(iterable != undefined){ _forOf(iterable, IS_MAP, that[ADDER], that); }
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if(BUGGY_ZERO || HASNT_CHAINING){ fixMethod(ADDER); }
    // weak collections should not contains .clear method
    if(IS_WEAK && proto.clear){ delete proto.clear; }
  }

  _setToStringTag(C, NAME);

  O[NAME] = C;
  _export(_export.G + _export.W + _export.F * (C != Base), O);

  if(!IS_WEAK){ common.setStrong(C, NAME, IS_MAP); }

  return C;
};

// 23.1 Map Objects
var es6_map = _collection('Map', function(get){
  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key){
    var entry = _collectionStrong.getEntry(this, key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value){
    return _collectionStrong.def(this, key === 0 ? 0 : key, value);
  }
}, _collectionStrong, true);

// 23.2 Set Objects
var es6_set = _collection('Set', function(get){
  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value){
    return _collectionStrong.def(this, value = value === 0 ? 0 : value, value);
  }
}, _collectionStrong);

var getWeak           = _meta.getWeak;
var arrayFind         = _arrayMethods(5);
var arrayFindIndex    = _arrayMethods(6);
var id$1                = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function(that){
  return that._l || (that._l = new UncaughtFrozenStore);
};
var UncaughtFrozenStore = function(){
  this.a = [];
};
var findUncaughtFrozen = function(store, key){
  return arrayFind(store.a, function(it){
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function(key){
    var entry = findUncaughtFrozen(this, key);
    if(entry){ return entry[1]; }
  },
  has: function(key){
    return !!findUncaughtFrozen(this, key);
  },
  set: function(key, value){
    var entry = findUncaughtFrozen(this, key);
    if(entry){ entry[1] = value; }
    else { this.a.push([key, value]); }
  },
  'delete': function(key){
    var index = arrayFindIndex(this.a, function(it){
      return it[0] === key;
    });
    if(~index){ this.a.splice(index, 1); }
    return !!~index;
  }
};

var _collectionWeak = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      _anInstance(that, C, NAME, '_i');
      that._i = id$1++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if(iterable != undefined){ _forOf(iterable, IS_MAP, that[ADDER], that); }
    });
    _redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function(key){
        if(!_isObject(key)){ return false; }
        var data = getWeak(key);
        if(data === true){ return uncaughtFrozenStore(this)['delete'](key); }
        return data && _has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key){
        if(!_isObject(key)){ return false; }
        var data = getWeak(key);
        if(data === true){ return uncaughtFrozenStore(this).has(key); }
        return data && _has(data, this._i);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var data = getWeak(_anObject(key), true);
    if(data === true){ uncaughtFrozenStore(that).set(key, value); }
    else { data[that._i] = value; }
    return that;
  },
  ufstore: uncaughtFrozenStore
};

var es6_weakMap = createCommonjsModule(function (module) {
'use strict';
var each         = _arrayMethods(0)
  , getWeak      = _meta.getWeak
  , isExtensible = Object.isExtensible
  , uncaughtFrozenStore = _collectionWeak.ufstore
  , tmp          = {}
  , InternalMap;

var wrapper = function(get){
  return function WeakMap(){
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key){
    if(_isObject(key)){
      var data = getWeak(key);
      if(data === true){ return uncaughtFrozenStore(this).get(key); }
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value){
    return _collectionWeak.def(this, key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = _collection('WeakMap', wrapper, methods, _collectionWeak, true, true);

// IE11 WeakMap frozen keys fix
if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
  InternalMap = _collectionWeak.getConstructor(wrapper);
  _objectAssign(InternalMap.prototype, methods);
  _meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function(key){
    var proto  = $WeakMap.prototype
      , method = proto[key];
    _redefine(proto, key, function(a, b){
      // store frozen objects on internal weakmap shim
      if(_isObject(a) && !isExtensible(a)){
        if(!this._f){ this._f = new InternalMap; }
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}
});

// 23.4 WeakSet Objects
_collection('WeakSet', function(get){
  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value){
    return _collectionWeak.def(this, value, true);
  }
}, _collectionWeak, false, true);

var TYPED  = _uid('typed_array');
var VIEW$1   = _uid('view');
var ABV    = !!(_global.ArrayBuffer && _global.DataView);
var CONSTR = ABV;
var i$2 = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while(i$2 < l){
  if(Typed = _global[TypedArrayConstructors[i$2++]]){
    _hide(Typed.prototype, TYPED, true);
    _hide(Typed.prototype, VIEW$1, true);
  } else { CONSTR = false; }
}

var _typed = {
  ABV:    ABV,
  CONSTR: CONSTR,
  TYPED:  TYPED,
  VIEW:   VIEW$1
};

var _typedBuffer = createCommonjsModule(function (module, exports) {
'use strict';
var gOPN           = _objectGopn.f
  , dP             = _objectDp.f
  , ARRAY_BUFFER   = 'ArrayBuffer'
  , DATA_VIEW      = 'DataView'
  , PROTOTYPE      = 'prototype'
  , WRONG_LENGTH   = 'Wrong length!'
  , WRONG_INDEX    = 'Wrong index!'
  , $ArrayBuffer   = _global[ARRAY_BUFFER]
  , $DataView      = _global[DATA_VIEW]
  , Math           = _global.Math
  , RangeError     = _global.RangeError
  , Infinity       = _global.Infinity
  , BaseBuffer     = $ArrayBuffer
  , abs            = Math.abs
  , pow            = Math.pow
  , floor          = Math.floor
  , log            = Math.log
  , LN2            = Math.LN2
  , BUFFER         = 'buffer'
  , BYTE_LENGTH    = 'byteLength'
  , BYTE_OFFSET    = 'byteOffset'
  , $BUFFER        = _descriptors ? '_b' : BUFFER
  , $LENGTH        = _descriptors ? '_l' : BYTE_LENGTH
  , $OFFSET        = _descriptors ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
var packIEEE754 = function(value, mLen, nBytes){
  var buffer = Array(nBytes)
    , eLen   = nBytes * 8 - mLen - 1
    , eMax   = (1 << eLen) - 1
    , eBias  = eMax >> 1
    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
    , i      = 0
    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
    , e, m, c;
  value = abs(value);
  if(value != value || value === Infinity){
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if(value * (c = pow(2, -e)) < 1){
      e--;
      c *= 2;
    }
    if(e + eBias >= 1){
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if(value * c >= 2){
      e++;
      c /= 2;
    }
    if(e + eBias >= eMax){
      m = 0;
      e = eMax;
    } else if(e + eBias >= 1){
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8){  }
  e = e << mLen | m;
  eLen += mLen;
  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8){  }
  buffer[--i] |= s * 128;
  return buffer;
};
var unpackIEEE754 = function(buffer, mLen, nBytes){
  var eLen  = nBytes * 8 - mLen - 1
    , eMax  = (1 << eLen) - 1
    , eBias = eMax >> 1
    , nBits = eLen - 7
    , i     = nBytes - 1
    , s     = buffer[i--]
    , e     = s & 127
    , m;
  s >>= 7;
  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8){  }
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8){  }
  if(e === 0){
    e = 1 - eBias;
  } else if(e === eMax){
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
};

var unpackI32 = function(bytes){
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
};
var packI8 = function(it){
  return [it & 0xff];
};
var packI16 = function(it){
  return [it & 0xff, it >> 8 & 0xff];
};
var packI32 = function(it){
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
};
var packF64 = function(it){
  return packIEEE754(it, 52, 8);
};
var packF32 = function(it){
  return packIEEE754(it, 23, 4);
};

var addGetter = function(C, key, internal){
  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
};

var get = function(view, bytes, index, isLittleEndian){
  var numIndex = +index
    , intIndex = _toInteger(numIndex);
  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH]){ throw RangeError(WRONG_INDEX); }
  var store = view[$BUFFER]._b
    , start = intIndex + view[$OFFSET]
    , pack  = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
};
var set = function(view, bytes, index, conversion, value, isLittleEndian){
  var numIndex = +index
    , intIndex = _toInteger(numIndex);
  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH]){ throw RangeError(WRONG_INDEX); }
  var store = view[$BUFFER]._b
    , start = intIndex + view[$OFFSET]
    , pack  = conversion(+value);
  for(var i = 0; i < bytes; i++){ store[start + i] = pack[isLittleEndian ? i : bytes - i - 1]; }
};

var validateArrayBufferArguments = function(that, length){
  _anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
  var numberLength = +length
    , byteLength   = _toLength(numberLength);
  if(numberLength != byteLength){ throw RangeError(WRONG_LENGTH); }
  return byteLength;
};

if(!_typed.ABV){
  $ArrayBuffer = function ArrayBuffer(length){
    var byteLength = validateArrayBufferArguments(this, length);
    this._b       = _arrayFill.call(Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength){
    _anInstance(this, $DataView, DATA_VIEW);
    _anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH]
      , offset       = _toInteger(byteOffset);
    if(offset < 0 || offset > bufferLength){ throw RangeError('Wrong offset!'); }
    byteLength = byteLength === undefined ? bufferLength - offset : _toLength(byteLength);
    if(offset + byteLength > bufferLength){ throw RangeError(WRONG_LENGTH); }
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if(_descriptors){
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  _redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset){
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset){
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /*, littleEndian */){
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /*, littleEndian */){
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /*, littleEndian */){
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /*, littleEndian */){
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value){
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value){
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if(!_fails(function(){
    new $ArrayBuffer;     // eslint-disable-line no-new
  }) || !_fails(function(){
    new $ArrayBuffer(.5); // eslint-disable-line no-new
  })){
    $ArrayBuffer = function ArrayBuffer(length){
      return new BaseBuffer(validateArrayBufferArguments(this, length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
      if(!((key = keys[j++]) in $ArrayBuffer)){ _hide($ArrayBuffer, key, BaseBuffer[key]); }
    }
    if(!_library){ ArrayBufferProto.constructor = $ArrayBuffer; }
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2))
    , $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if(view.getInt8(0) || !view.getInt8(1)){ _redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value){
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value){
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true); }
}
_setToStringTag($ArrayBuffer, ARRAY_BUFFER);
_setToStringTag($DataView, DATA_VIEW);
_hide($DataView[PROTOTYPE], _typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;
});

var ArrayBuffer$1  = _global.ArrayBuffer;
var $ArrayBuffer = _typedBuffer.ArrayBuffer;
var $DataView    = _typedBuffer.DataView;
var $isView      = _typed.ABV && ArrayBuffer$1.isView;
var $slice       = $ArrayBuffer.prototype.slice;
var VIEW         = _typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

_export(_export.G + _export.W + _export.F * (ArrayBuffer$1 !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});

_export(_export.S + _export.F * !_typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it){
    return $isView && $isView(it) || _isObject(it) && VIEW in it;
  }
});

_export(_export.P + _export.U + _export.F * _fails(function(){
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end){
    if($slice !== undefined && end === undefined){ return $slice.call(_anObject(this), start); } // FF fix
    var len    = _anObject(this).byteLength
      , first  = _toIndex(start, len)
      , final  = _toIndex(end === undefined ? len : end, len)
      , result = new (_speciesConstructor(this, $ArrayBuffer))(_toLength(final - first))
      , viewS  = new $DataView(this)
      , viewT  = new $DataView(result)
      , index  = 0;
    while(first < final){
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

_setSpecies(ARRAY_BUFFER);

_export(_export.G + _export.W + _export.F * !_typed.ABV, {
  DataView: _typedBuffer.DataView
});

var _typedArray = createCommonjsModule(function (module) {
'use strict';
if(_descriptors){
  var LIBRARY             = _library
    , global              = _global
    , fails               = _fails
    , $export             = _export
    , $typed              = _typed
    , $buffer             = _typedBuffer
    , ctx                 = _ctx
    , anInstance          = _anInstance
    , propertyDesc        = _propertyDesc
    , hide                = _hide
    , redefineAll         = _redefineAll
    , toInteger           = _toInteger
    , toLength            = _toLength
    , toIndex             = _toIndex
    , toPrimitive         = _toPrimitive
    , has                 = _has
    , same                = _sameValue
    , classof             = _classof
    , isObject            = _isObject
    , toObject            = _toObject
    , isArrayIter         = _isArrayIter
    , create              = _objectCreate
    , getPrototypeOf      = _objectGpo
    , gOPN                = _objectGopn.f
    , getIterFn           = core_getIteratorMethod
    , uid                 = _uid
    , wks                 = _wks
    , createArrayMethod   = _arrayMethods
    , createArrayIncludes = _arrayIncludes
    , speciesConstructor  = _speciesConstructor
    , ArrayIterators      = es6_array_iterator
    , Iterators           = _iterators
    , $iterDetect         = _iterDetect
    , setSpecies          = _setSpecies
    , arrayFill           = _arrayFill
    , arrayCopyWithin     = _arrayCopyWithin
    , $DP                 = _objectDp
    , $GOPD               = _objectGopd
    , dP                  = $DP.f
    , gOPD                = $GOPD.f
    , RangeError          = global.RangeError
    , TypeError           = global.TypeError
    , Uint8Array          = global.Uint8Array
    , ARRAY_BUFFER        = 'ArrayBuffer'
    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
    , PROTOTYPE           = 'prototype'
    , ArrayProto          = Array[PROTOTYPE]
    , $ArrayBuffer        = $buffer.ArrayBuffer
    , $DataView           = $buffer.DataView
    , arrayForEach        = createArrayMethod(0)
    , arrayFilter         = createArrayMethod(2)
    , arraySome           = createArrayMethod(3)
    , arrayEvery          = createArrayMethod(4)
    , arrayFind           = createArrayMethod(5)
    , arrayFindIndex      = createArrayMethod(6)
    , arrayIncludes       = createArrayIncludes(true)
    , arrayIndexOf        = createArrayIncludes(false)
    , arrayValues         = ArrayIterators.values
    , arrayKeys           = ArrayIterators.keys
    , arrayEntries        = ArrayIterators.entries
    , arrayLastIndexOf    = ArrayProto.lastIndexOf
    , arrayReduce         = ArrayProto.reduce
    , arrayReduceRight    = ArrayProto.reduceRight
    , arrayJoin           = ArrayProto.join
    , arraySort           = ArrayProto.sort
    , arraySlice          = ArrayProto.slice
    , arrayToString       = ArrayProto.toString
    , arrayToLocaleString = ArrayProto.toLocaleString
    , ITERATOR            = wks('iterator')
    , TAG                 = wks('toStringTag')
    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
    , DEF_CONSTRUCTOR     = uid('def_constructor')
    , ALL_CONSTRUCTORS    = $typed.CONSTR
    , TYPED_ARRAY         = $typed.TYPED
    , VIEW                = $typed.VIEW
    , WRONG_LENGTH        = 'Wrong length!';

  var $map = createArrayMethod(1, function(O, length){
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function(){
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
    new Uint8Array(1).set({});
  });

  var strictToLength = function(it, SAME){
    if(it === undefined){ throw TypeError(WRONG_LENGTH); }
    var number = +it
      , length = toLength(it);
    if(SAME && !same(number, length)){ throw RangeError(WRONG_LENGTH); }
    return length;
  };

  var toOffset = function(it, BYTES){
    var offset = toInteger(it);
    if(offset < 0 || offset % BYTES){ throw RangeError('Wrong offset!'); }
    return offset;
  };

  var validate = function(it){
    if(isObject(it) && TYPED_ARRAY in it){ return it; }
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function(C, length){
    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function(O, list){
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function(C, list){
    var index  = 0
      , length = list.length
      , result = allocate(C, length);
    while(length > index){ result[index] = list[index++]; }
    return result;
  };

  var addGetter = function(it, key, internal){
    dP(it, key, {get: function(){ return this._d[internal]; }});
  };

  var $from = function from(source /*, mapfn, thisArg */){
    var O       = toObject(source)
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , iterFn  = getIterFn(O)
      , i, length, values, result, step, iterator;
    if(iterFn != undefined && !isArrayIter(iterFn)){
      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
        values.push(step.value);
      } O = values;
    }
    if(mapping && aLen > 2){ mapfn = ctx(mapfn, arguments[2], 2); }
    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/*...items*/){
    var arguments$1 = arguments;

    var index  = 0
      , length = arguments.length
      , result = allocate(this, length);
    while(length > index){ result[index] = arguments$1[index++]; }
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString(){
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /*, end */){
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /*, thisArg */){
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /*, thisArg */){
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /*, thisArg */){
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /*, thisArg */){
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /*, thisArg */){
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /*, fromIndex */){
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /*, fromIndex */){
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator){ // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /*, thisArg */){
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse(){
      var that   = this
        , length = validate(that).length
        , middle = Math.floor(length / 2)
        , index  = 0
        , value;
      while(index < middle){
        value         = that[index];
        that[index++] = that[--length];
        that[length]  = value;
      } return that;
    },
    some: function some(callbackfn /*, thisArg */){
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn){
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end){
      var O      = validate(this)
        , length = O.length
        , $begin = toIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end){
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /*, offset */){
    var this$1 = this;

    validate(this);
    var offset = toOffset(arguments[1], 1)
      , length = this.length
      , src    = toObject(arrayLike)
      , len    = toLength(src.length)
      , index  = 0;
    if(len + offset > length){ throw RangeError(WRONG_LENGTH); }
    while(index < len){ this$1[offset + index] = src[index++]; }
  };

  var $iterators$$1 = {
    entries: function entries(){
      return arrayEntries.call(validate(this));
    },
    keys: function keys(){
      return arrayKeys.call(validate(this));
    },
    values: function values(){
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function(target, key){
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key){
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc){
    if(isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ){
      target[key] = desc.value;
      return target;
    } else { return dP(target, key, desc); }
  };

  if(!ALL_CONSTRUCTORS){
    $GOPD.f = $getDesc;
    $DP.f   = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty:           $setDesc
  });

  if(fails(function(){ arrayToString.call({}); })){
    arrayToString = arrayToLocaleString = function toString(){
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators$$1);
  hide($TypedArrayPrototype$, ITERATOR, $iterators$$1.values);
  redefineAll($TypedArrayPrototype$, {
    slice:          $slice,
    set:            $set,
    constructor:    function(){ /* noop */ },
    toString:       arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function(){ return this[TYPED_ARRAY]; }
  });

  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
    CLAMPED = !!CLAMPED;
    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
      , ISNT_UINT8 = NAME != 'Uint8Array'
      , GETTER     = 'get' + KEY
      , SETTER     = 'set' + KEY
      , TypedArray = global[NAME]
      , Base       = TypedArray || {}
      , TAC        = TypedArray && getPrototypeOf(TypedArray)
      , FORCED     = !TypedArray || !$typed.ABV
      , O          = {}
      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function(that, index){
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function(that, index, value){
      var data = that._d;
      if(CLAMPED){ value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff; }
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function(that, index){
      dP(that, index, {
        get: function(){
          return getter(this, index);
        },
        set: function(value){
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if(FORCED){
      TypedArray = wrapper(function(that, data, $offset, $length){
        anInstance(that, TypedArray, NAME, '_d');
        var index  = 0
          , offset = 0
          , buffer, byteLength, length, klass;
        if(!isObject(data)){
          length     = strictToLength(data, true);
          byteLength = length * BYTES;
          buffer     = new $ArrayBuffer(byteLength);
        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if($length === undefined){
            if($len % BYTES){ throw RangeError(WRONG_LENGTH); }
            byteLength = $len - offset;
            if(byteLength < 0){ throw RangeError(WRONG_LENGTH); }
          } else {
            byteLength = toLength($length) * BYTES;
            if(byteLength + offset > $len){ throw RangeError(WRONG_LENGTH); }
          }
          length = byteLength / BYTES;
        } else if(TYPED_ARRAY in data){
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while(index < length){ addElement(that, index++); }
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if(!$iterDetect(function(iter){
      // V8 works with iterators, but fails in many other cases
      // https://code.google.com/p/v8/issues/detail?id=4552
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)){
      TypedArray = wrapper(function(that, data, $offset, $length){
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if(!isObject(data)){ return new Base(strictToLength(data, ISNT_UINT8)); }
        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if(TYPED_ARRAY in data){ return fromList(TypedArray, data); }
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
        if(!(key in TypedArray)){ hide(TypedArray, key, Base[key]); }
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if(!LIBRARY){ TypedArrayPrototype.constructor = TypedArray; }
    }
    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
      , $iterator         = $iterators$$1.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
      dP(TypedArrayPrototype, TAG, {
        get: function(){ return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES,
      from: $from,
      of: $of
    });

    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype)){ hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES); }

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators$$1);

    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});

    $export($export.P + $export.F * fails(function(){
      new TypedArray(1).slice();
    }), NAME, {slice: $slice});

    $export($export.P + $export.F * (fails(function(){
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
    }) || !fails(function(){
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, {toLocaleString: $toLocaleString});

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if(!LIBRARY && !CORRECT_ITER_NAME){ hide(TypedArrayPrototype, ITERATOR, $iterator); }
  };
} else { module.exports = function(){ /* empty */ }; }
});

_typedArray('Int8', 1, function(init){
  return function Int8Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

_typedArray('Uint8', 1, function(init){
  return function Uint8Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

_typedArray('Uint8', 1, function(init){
  return function Uint8ClampedArray(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
}, true);

_typedArray('Int16', 2, function(init){
  return function Int16Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

_typedArray('Uint16', 2, function(init){
  return function Uint16Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

_typedArray('Int32', 4, function(init){
  return function Int32Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

_typedArray('Uint32', 4, function(init){
  return function Uint32Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

_typedArray('Float32', 4, function(init){
  return function Float32Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

_typedArray('Float64', 8, function(init){
  return function Float64Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var rApply    = (_global.Reflect || {}).apply;
var fApply    = Function.apply;
// MS Edge argumentsList argument is optional
_export(_export.S + _export.F * !_fails(function(){
  rApply(function(){});
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList){
    var T = _aFunction(target)
      , L = _anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var rConstruct = (_global.Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = _fails(function(){
  function F(){}
  return !(rConstruct(function(){}, [], F) instanceof F);
});
var ARGS_BUG = !_fails(function(){
  rConstruct(function(){});
});

_export(_export.S + _export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /*, newTarget*/){
    _aFunction(Target);
    _anObject(args);
    var newTarget = arguments.length < 3 ? Target : _aFunction(arguments[2]);
    if(ARGS_BUG && !NEW_TARGET_BUG){ return rConstruct(Target, args, newTarget); }
    if(Target == newTarget){
      // w/o altered newTarget, optimization for 0-4 arguments
      switch(args.length){
        case 0: return new Target;
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (_bind.apply(Target, $args));
    }
    // with altered newTarget, not support built-in constructors
    var proto    = newTarget.prototype
      , instance = _objectCreate(_isObject(proto) ? proto : Object.prototype)
      , result   = Function.apply.call(Target, instance, args);
    return _isObject(result) ? result : instance;
  }
});

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)


// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
_export(_export.S + _export.F * _fails(function(){
  Reflect.defineProperty(_objectDp.f({}, 1, {value: 1}), 1, {value: 2});
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes){
    _anObject(target);
    propertyKey = _toPrimitive(propertyKey, true);
    _anObject(attributes);
    try {
      _objectDp.f(target, propertyKey, attributes);
      return true;
    } catch(e){
      return false;
    }
  }
});

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var gOPD$3     = _objectGopd.f;

_export(_export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey){
    var desc = gOPD$3(_anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});

// 26.1.5 Reflect.enumerate(target)

var Enumerate = function(iterated){
  this._t = _anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = []       // keys
    , key;
  for(key in iterated){ keys.push(key); }
};
_iterCreate(Enumerate, 'Object', function(){
  var that = this
    , keys = that._k
    , key;
  do {
    if(that._i >= keys.length){ return {value: undefined, done: true}; }
  } while(!((key = keys[that._i++]) in that._t));
  return {value: key, done: false};
});

_export(_export.S, 'Reflect', {
  enumerate: function enumerate(target){
    return new Enumerate(target);
  }
});

// 26.1.6 Reflect.get(target, propertyKey [, receiver])


function get(target, propertyKey/*, receiver*/){
  var receiver = arguments.length < 3 ? target : arguments[2]
    , desc, proto;
  if(_anObject(target) === receiver){ return target[propertyKey]; }
  if(desc = _objectGopd.f(target, propertyKey)){ return _has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined; }
  if(_isObject(proto = _objectGpo(target))){ return get(proto, propertyKey, receiver); }
}

_export(_export.S, 'Reflect', {get: get});

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)


_export(_export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
    return _objectGopd.f(_anObject(target), propertyKey);
  }
});

// 26.1.8 Reflect.getPrototypeOf(target)


_export(_export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target){
    return _objectGpo(_anObject(target));
  }
});

// 26.1.9 Reflect.has(target, propertyKey)


_export(_export.S, 'Reflect', {
  has: function has(target, propertyKey){
    return propertyKey in target;
  }
});

// 26.1.10 Reflect.isExtensible(target)
var $isExtensible = Object.isExtensible;

_export(_export.S, 'Reflect', {
  isExtensible: function isExtensible(target){
    _anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});

// all object keys, includes non-enumerable and symbols
var Reflect$1  = _global.Reflect;
var _ownKeys = Reflect$1 && Reflect$1.ownKeys || function ownKeys(it){
  var keys       = _objectGopn.f(_anObject(it))
    , getSymbols = _objectGops.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

// 26.1.11 Reflect.ownKeys(target)


_export(_export.S, 'Reflect', {ownKeys: _ownKeys});

// 26.1.12 Reflect.preventExtensions(target)
var $preventExtensions = Object.preventExtensions;

_export(_export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target){
    _anObject(target);
    try {
      if($preventExtensions){ $preventExtensions(target); }
      return true;
    } catch(e){
      return false;
    }
  }
});

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])


function set(target, propertyKey, V/*, receiver*/){
  var receiver = arguments.length < 4 ? target : arguments[3]
    , ownDesc  = _objectGopd.f(_anObject(target), propertyKey)
    , existingDescriptor, proto;
  if(!ownDesc){
    if(_isObject(proto = _objectGpo(target))){
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = _propertyDesc(0);
  }
  if(_has(ownDesc, 'value')){
    if(ownDesc.writable === false || !_isObject(receiver)){ return false; }
    existingDescriptor = _objectGopd.f(receiver, propertyKey) || _propertyDesc(0);
    existingDescriptor.value = V;
    _objectDp.f(receiver, propertyKey, existingDescriptor);
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

_export(_export.S, 'Reflect', {set: set});

// 26.1.14 Reflect.setPrototypeOf(target, proto)


if(_setProto){ _export(_export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto){
    _setProto.check(target, proto);
    try {
      _setProto.set(target, proto);
      return true;
    } catch(e){
      return false;
    }
  }
}); }

// https://github.com/tc39/Array.prototype.includes
var $includes = _arrayIncludes(true);

_export(_export.P, 'Array', {
  includes: function includes(el /*, fromIndex = 0 */){
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

_addToUnscopables('includes');

// https://github.com/mathiasbynens/String.prototype.at
var $at$2     = _stringAt(true);

_export(_export.P, 'String', {
  at: function at(pos){
    return $at$2(this, pos);
  }
});

// https://github.com/tc39/proposal-string-pad-start-end


var _stringPad = function(that, maxLength, fillString, left){
  var S            = String(_defined(that))
    , stringLength = S.length
    , fillStr      = fillString === undefined ? ' ' : String(fillString)
    , intMaxLength = _toLength(maxLength);
  if(intMaxLength <= stringLength || fillStr == ''){ return S; }
  var fillLen = intMaxLength - stringLength
    , stringFiller = _stringRepeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if(stringFiller.length > fillLen){ stringFiller = stringFiller.slice(0, fillLen); }
  return left ? stringFiller + S : S + stringFiller;
};

// https://github.com/tc39/proposal-string-pad-start-end


_export(_export.P, 'String', {
  padStart: function padStart(maxLength /*, fillString = ' ' */){
    return _stringPad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});

// https://github.com/tc39/proposal-string-pad-start-end


_export(_export.P, 'String', {
  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
    return _stringPad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
_stringTrim('trimLeft', function($trim){
  return function trimLeft(){
    return $trim(this, 1);
  };
}, 'trimStart');

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
_stringTrim('trimRight', function($trim){
  return function trimRight(){
    return $trim(this, 2);
  };
}, 'trimEnd');

// https://tc39.github.io/String.prototype.matchAll/
var RegExpProto = RegExp.prototype;

var $RegExpStringIterator = function(regexp, string){
  this._r = regexp;
  this._s = string;
};

_iterCreate($RegExpStringIterator, 'RegExp String', function next(){
  var match = this._r.exec(this._s);
  return {value: match, done: match === null};
});

_export(_export.P, 'String', {
  matchAll: function matchAll(regexp){
    _defined(this);
    if(!_isRegexp(regexp)){ throw TypeError(regexp + ' is not a regexp!'); }
    var S     = String(this)
      , flags = 'flags' in RegExpProto ? String(regexp.flags) : _flags.call(regexp)
      , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
    rx.lastIndex = _toLength(regexp.lastIndex);
    return new $RegExpStringIterator(rx, S);
  }
});

_wksDefine('asyncIterator');

_wksDefine('observable');

// https://github.com/tc39/proposal-object-getownpropertydescriptors


_export(_export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
    var O       = _toIobject(object)
      , getDesc = _objectGopd.f
      , keys    = _ownKeys(O)
      , result  = {}
      , i       = 0
      , key;
    while(keys.length > i){ _createProperty(result, key = keys[i++], getDesc(O, key)); }
    return result;
  }
});

var isEnum$1    = _objectPie.f;
var _objectToArray = function(isEntries){
  return function(it){
    var O      = _toIobject(it)
      , keys   = _objectKeys(O)
      , length = keys.length
      , i      = 0
      , result = []
      , key;
    while(length > i){ if(isEnum$1.call(O, key = keys[i++])){
      result.push(isEntries ? [key, O[key]] : O[key]);
    } } return result;
  };
};

// https://github.com/tc39/proposal-object-values-entries
var $values = _objectToArray(false);

_export(_export.S, 'Object', {
  values: function values(it){
    return $values(it);
  }
});

// https://github.com/tc39/proposal-object-values-entries
var $entries = _objectToArray(true);

_export(_export.S, 'Object', {
  entries: function entries(it){
    return $entries(it);
  }
});

// Forced replacement prototype accessors methods
var _objectForcedPam = _library|| !_fails(function(){
  var K = Math.random();
  // In FF throws only define methods
  __defineSetter__.call(null, K, function(){ /* empty */});
  delete _global[K];
});

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
_descriptors && _export(_export.P + _objectForcedPam, 'Object', {
  __defineGetter__: function __defineGetter__(P, getter){
    _objectDp.f(_toObject(this), P, {get: _aFunction(getter), enumerable: true, configurable: true});
  }
});

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
_descriptors && _export(_export.P + _objectForcedPam, 'Object', {
  __defineSetter__: function __defineSetter__(P, setter){
    _objectDp.f(_toObject(this), P, {set: _aFunction(setter), enumerable: true, configurable: true});
  }
});

var getOwnPropertyDescriptor = _objectGopd.f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
_descriptors && _export(_export.P + _objectForcedPam, 'Object', {
  __lookupGetter__: function __lookupGetter__(P){
    var O = _toObject(this)
      , K = _toPrimitive(P, true)
      , D;
    do {
      if(D = getOwnPropertyDescriptor(O, K)){ return D.get; }
    } while(O = _objectGpo(O));
  }
});

var getOwnPropertyDescriptor$1 = _objectGopd.f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
_descriptors && _export(_export.P + _objectForcedPam, 'Object', {
  __lookupSetter__: function __lookupSetter__(P){
    var O = _toObject(this)
      , K = _toPrimitive(P, true)
      , D;
    do {
      if(D = getOwnPropertyDescriptor$1(O, K)){ return D.set; }
    } while(O = _objectGpo(O));
  }
});

var _arrayFromIterable = function(iter, ITERATOR){
  var result = [];
  _forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

// https://github.com/DavidBruant/Map-Set.prototype.toJSON

var _collectionToJson = function(NAME){
  return function toJSON(){
    if(_classof(this) != NAME){ throw TypeError(NAME + "#toJSON isn't generic"); }
    return _arrayFromIterable(this);
  };
};

// https://github.com/DavidBruant/Map-Set.prototype.toJSON


_export(_export.P + _export.R, 'Map', {toJSON: _collectionToJson('Map')});

// https://github.com/DavidBruant/Map-Set.prototype.toJSON


_export(_export.P + _export.R, 'Set', {toJSON: _collectionToJson('Set')});

// https://github.com/ljharb/proposal-global


_export(_export.S, 'System', {global: _global});

// https://github.com/ljharb/proposal-is-error


_export(_export.S, 'Error', {
  isError: function isError(it){
    return _cof(it) === 'Error';
  }
});

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703


_export(_export.S, 'Math', {
  iaddh: function iaddh(x0, x1, y0, y1){
    var $x0 = x0 >>> 0
      , $x1 = x1 >>> 0
      , $y0 = y0 >>> 0;
    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
  }
});

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703


_export(_export.S, 'Math', {
  isubh: function isubh(x0, x1, y0, y1){
    var $x0 = x0 >>> 0
      , $x1 = x1 >>> 0
      , $y0 = y0 >>> 0;
    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
  }
});

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703


_export(_export.S, 'Math', {
  imulh: function imulh(u, v){
    var UINT16 = 0xffff
      , $u = +u
      , $v = +v
      , u0 = $u & UINT16
      , v0 = $v & UINT16
      , u1 = $u >> 16
      , v1 = $v >> 16
      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
  }
});

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703


_export(_export.S, 'Math', {
  umulh: function umulh(u, v){
    var UINT16 = 0xffff
      , $u = +u
      , $v = +v
      , u0 = $u & UINT16
      , v0 = $v & UINT16
      , u1 = $u >>> 16
      , v1 = $v >>> 16
      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
  }
});

var shared$1  = _shared('metadata');
var store$1   = shared$1.store || (shared$1.store = new (es6_weakMap));

var getOrCreateMetadataMap = function(target, targetKey, create){
  var targetMetadata = store$1.get(target);
  if(!targetMetadata){
    if(!create){ return undefined; }
    store$1.set(target, targetMetadata = new es6_map);
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if(!keyMetadata){
    if(!create){ return undefined; }
    targetMetadata.set(targetKey, keyMetadata = new es6_map);
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata$1 = function(MetadataKey, MetadataValue, O, P){
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function(target, targetKey){
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
    , keys        = [];
  if(metadataMap){ metadataMap.forEach(function(_, key){ keys.push(key); }); }
  return keys;
};
var toMetaKey$1 = function(it){
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp$3 = function(O){
  _export(_export.S, 'Reflect', O);
};

var _metadata = {
  store: store$1,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata$1,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey$1,
  exp: exp$3
};

var toMetaKey                 = _metadata.key;
var ordinaryDefineOwnMetadata = _metadata.set;

_metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, _anObject(target), toMetaKey(targetKey));
}});

var toMetaKey$2              = _metadata.key;
var getOrCreateMetadataMap$1 = _metadata.map;
var store$2                  = _metadata.store;

_metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
  var targetKey   = arguments.length < 3 ? undefined : toMetaKey$2(arguments[2])
    , metadataMap = getOrCreateMetadataMap$1(_anObject(target), targetKey, false);
  if(metadataMap === undefined || !metadataMap['delete'](metadataKey)){ return false; }
  if(metadataMap.size){ return true; }
  var targetMetadata = store$2.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store$2['delete'](target);
}});

var ordinaryHasOwnMetadata$1 = _metadata.has;
var ordinaryGetOwnMetadata$1 = _metadata.get;
var toMetaKey$3              = _metadata.key;

var ordinaryGetMetadata = function(MetadataKey, O, P){
  var hasOwn = ordinaryHasOwnMetadata$1(MetadataKey, O, P);
  if(hasOwn){ return ordinaryGetOwnMetadata$1(MetadataKey, O, P); }
  var parent = _objectGpo(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

_metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
  return ordinaryGetMetadata(metadataKey, _anObject(target), arguments.length < 3 ? undefined : toMetaKey$3(arguments[2]));
}});

var ordinaryOwnMetadataKeys$1 = _metadata.keys;
var toMetaKey$4               = _metadata.key;

var ordinaryMetadataKeys = function(O, P){
  var oKeys  = ordinaryOwnMetadataKeys$1(O, P)
    , parent = _objectGpo(O);
  if(parent === null){ return oKeys; }
  var pKeys  = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? _arrayFromIterable(new es6_set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

_metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
  return ordinaryMetadataKeys(_anObject(target), arguments.length < 2 ? undefined : toMetaKey$4(arguments[1]));
}});

var ordinaryGetOwnMetadata$2 = _metadata.get;
var toMetaKey$5              = _metadata.key;

_metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
  return ordinaryGetOwnMetadata$2(metadataKey, _anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey$5(arguments[2]));
}});

var ordinaryOwnMetadataKeys$2 = _metadata.keys;
var toMetaKey$6               = _metadata.key;

_metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
  return ordinaryOwnMetadataKeys$2(_anObject(target), arguments.length < 2 ? undefined : toMetaKey$6(arguments[1]));
}});

var ordinaryHasOwnMetadata$2 = _metadata.has;
var toMetaKey$7              = _metadata.key;

var ordinaryHasMetadata = function(MetadataKey, O, P){
  var hasOwn = ordinaryHasOwnMetadata$2(MetadataKey, O, P);
  if(hasOwn){ return true; }
  var parent = _objectGpo(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

_metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
  return ordinaryHasMetadata(metadataKey, _anObject(target), arguments.length < 3 ? undefined : toMetaKey$7(arguments[2]));
}});

var ordinaryHasOwnMetadata$3 = _metadata.has;
var toMetaKey$8              = _metadata.key;

_metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
  return ordinaryHasOwnMetadata$3(metadataKey, _anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey$8(arguments[2]));
}});

var toMetaKey$9                 = _metadata.key;
var ordinaryDefineOwnMetadata$2 = _metadata.set;

_metadata.exp({metadata: function metadata(metadataKey, metadataValue){
  return function decorator(target, targetKey){
    ordinaryDefineOwnMetadata$2(
      metadataKey, metadataValue,
      (targetKey !== undefined ? _anObject : _aFunction)(target),
      toMetaKey$9(targetKey)
    );
  };
}});

// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var microtask$1 = _microtask();
var process$3   = _global.process;
var isNode$2    = _cof(process$3) == 'process';

_export(_export.G, {
  asap: function asap(fn){
    var domain = isNode$2 && process$3.domain;
    microtask$1(domain ? domain.bind(fn) : fn);
  }
});

// https://github.com/zenparsing/es-observable
var microtask$2   = _microtask();
var OBSERVABLE  = _wks('observable');
var RETURN      = _forOf.RETURN;

var getMethod = function(fn){
  return fn == null ? undefined : _aFunction(fn);
};

var cleanupSubscription = function(subscription){
  var cleanup = subscription._c;
  if(cleanup){
    subscription._c = undefined;
    cleanup();
  }
};

var subscriptionClosed = function(subscription){
  return subscription._o === undefined;
};

var closeSubscription = function(subscription){
  if(!subscriptionClosed(subscription)){
    subscription._o = undefined;
    cleanupSubscription(subscription);
  }
};

var Subscription = function(observer, subscriber){
  _anObject(observer);
  this._c = undefined;
  this._o = observer;
  observer = new SubscriptionObserver(this);
  try {
    var cleanup      = subscriber(observer)
      , subscription = cleanup;
    if(cleanup != null){
      if(typeof cleanup.unsubscribe === 'function'){ cleanup = function(){ subscription.unsubscribe(); }; }
      else { _aFunction(cleanup); }
      this._c = cleanup;
    }
  } catch(e){
    observer.error(e);
    return;
  } if(subscriptionClosed(this)){ cleanupSubscription(this); }
};

Subscription.prototype = _redefineAll({}, {
  unsubscribe: function unsubscribe(){ closeSubscription(this); }
});

var SubscriptionObserver = function(subscription){
  this._s = subscription;
};

SubscriptionObserver.prototype = _redefineAll({}, {
  next: function next(value){
    var subscription = this._s;
    if(!subscriptionClosed(subscription)){
      var observer = subscription._o;
      try {
        var m = getMethod(observer.next);
        if(m){ return m.call(observer, value); }
      } catch(e){
        try {
          closeSubscription(subscription);
        } finally {
          throw e;
        }
      }
    }
  },
  error: function error(value){
    var subscription = this._s;
    if(subscriptionClosed(subscription)){ throw value; }
    var observer = subscription._o;
    subscription._o = undefined;
    try {
      var m = getMethod(observer.error);
      if(!m){ throw value; }
      value = m.call(observer, value);
    } catch(e){
      try {
        cleanupSubscription(subscription);
      } finally {
        throw e;
      }
    } cleanupSubscription(subscription);
    return value;
  },
  complete: function complete(value){
    var subscription = this._s;
    if(!subscriptionClosed(subscription)){
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.complete);
        value = m ? m.call(observer, value) : undefined;
      } catch(e){
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      } cleanupSubscription(subscription);
      return value;
    }
  }
});

var $Observable = function Observable(subscriber){
  _anInstance(this, $Observable, 'Observable', '_f')._f = _aFunction(subscriber);
};

_redefineAll($Observable.prototype, {
  subscribe: function subscribe(observer){
    return new Subscription(observer, this._f);
  },
  forEach: function forEach(fn){
    var that = this;
    return new (_core.Promise || _global.Promise)(function(resolve, reject){
      _aFunction(fn);
      var subscription = that.subscribe({
        next : function(value){
          try {
            return fn(value);
          } catch(e){
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  }
});

_redefineAll($Observable, {
  from: function from(x){
    var C = typeof this === 'function' ? this : $Observable;
    var method = getMethod(_anObject(x)[OBSERVABLE]);
    if(method){
      var observable = _anObject(method.call(x));
      return observable.constructor === C ? observable : new C(function(observer){
        return observable.subscribe(observer);
      });
    }
    return new C(function(observer){
      var done = false;
      microtask$2(function(){
        if(!done){
          try {
            if(_forOf(x, false, function(it){
              observer.next(it);
              if(done){ return RETURN; }
            }) === RETURN){ return; }
          } catch(e){
            if(done){ throw e; }
            observer.error(e);
            return;
          } observer.complete();
        }
      });
      return function(){ done = true; };
    });
  },
  of: function of(){
    var arguments$1 = arguments;

    for(var i = 0, l = arguments.length, items = Array(l); i < l;){ items[i] = arguments$1[i++]; }
    return new (typeof this === 'function' ? this : $Observable)(function(observer){
      var done = false;
      microtask$2(function(){
        if(!done){
          for(var i = 0; i < items.length; ++i){
            observer.next(items[i]);
            if(done){ return; }
          } observer.complete();
        }
      });
      return function(){ done = true; };
    });
  }
});

_hide($Observable.prototype, OBSERVABLE, function(){ return this; });

_export(_export.G, {Observable: $Observable});

_setSpecies('Observable');

var _path = _global;

var _partial = function(/* ...pargs */){
  var arguments$1 = arguments;

  var fn     = _aFunction(this)
    , length = arguments.length
    , pargs  = Array(length)
    , i      = 0
    , _      = _path._
    , holder = false;
  while(length > i){ if((pargs[i] = arguments$1[i++]) === _){ holder = true; } }
  return function(/* ...args */){
    var arguments$1 = arguments;

    var that = this
      , aLen = arguments.length
      , j = 0, k = 0, args;
    if(!holder && !aLen){ return _invoke(fn, pargs, that); }
    args = pargs.slice();
    if(holder){ for(;length > j; j++){ if(args[j] === _){ args[j] = arguments$1[k++]; } } }
    while(aLen > k){ args.push(arguments$1[k++]); }
    return _invoke(fn, args, that);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
var navigator$1  = _global.navigator;
var MSIE       = !!navigator$1 && /MSIE .\./.test(navigator$1.userAgent); // <- dirty ie9- check
var wrap$1 = function(set){
  return MSIE ? function(fn, time /*, ...args */){
    return set(_invoke(
      _partial,
      [].slice.call(arguments, 2),
      typeof fn == 'function' ? fn : Function(fn)
    ), time);
  } : set;
};
_export(_export.G + _export.B + _export.F * MSIE, {
  setTimeout:  wrap$1(_global.setTimeout),
  setInterval: wrap$1(_global.setInterval)
});

_export(_export.G + _export.B, {
  setImmediate:   _task.set,
  clearImmediate: _task.clear
});

var ITERATOR$4      = _wks('iterator');
var TO_STRING_TAG = _wks('toStringTag');
var ArrayValues   = _iterators.Array;

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i$3 = 0; i$3 < 5; i$3++){
  var NAME$1       = collections[i$3]
    , Collection = _global[NAME$1]
    , proto$3      = Collection && Collection.prototype
    , key$1;
  if(proto$3){
    if(!proto$3[ITERATOR$4]){ _hide(proto$3, ITERATOR$4, ArrayValues); }
    if(!proto$3[TO_STRING_TAG]){ _hide(proto$3, TO_STRING_TAG, NAME$1); }
    _iterators[NAME$1] = ArrayValues;
    for(key$1 in es6_array_iterator){ if(!proto$3[key$1]){ _redefine(proto$3, key$1, es6_array_iterator[key$1], true); } }
  }
}

/*
 * classList.js: Cross-browser full element.classList implementation.
 * 1.1.20150312
 *
 * By Eli Grey, http://eligrey.com
 * License: Dedicated to the public domain.
 *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md
 */

/*global self, document, DOMException */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */

if ("document" in self) {

// Full polyfill for browsers with no classList support
// Including IE < Edge missing SVGElement.classList
if (!("classList" in document.createElement("_")) 
	|| document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg","g"))) {

(function (view) {

"use strict";

if (!('Element' in view)) { return; }

var
	  classListProp = "classList"
	, protoProp = "prototype"
	, elemCtrProto = view.Element[protoProp]
	, objCtr = Object
	, strTrim = String[protoProp].trim || function () {
		return this.replace(/^\s+|\s+$/g, "");
	}
	, arrIndexOf = Array[protoProp].indexOf || function (item) {
		var this$1 = this;

		var
			  i = 0
			, len = this.length;
		for (; i < len; i++) {
			if (i in this$1 && this$1[i] === item) {
				return i;
			}
		}
		return -1;
	}
	// Vendors: please allow content code to instantiate DOMExceptions
	, DOMEx = function (type, message) {
		this.name = type;
		this.code = DOMException[type];
		this.message = message;
	}
	, checkTokenAndGetIndex = function (classList, token) {
		if (token === "") {
			throw new DOMEx(
				  "SYNTAX_ERR"
				, "An invalid or illegal string was specified"
			);
		}
		if (/\s/.test(token)) {
			throw new DOMEx(
				  "INVALID_CHARACTER_ERR"
				, "String contains an invalid character"
			);
		}
		return arrIndexOf.call(classList, token);
	}
	, ClassList = function (elem) {
		var this$1 = this;

		var
			  trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
			, classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
			, i = 0
			, len = classes.length;
		for (; i < len; i++) {
			this$1.push(classes[i]);
		}
		this._updateClassName = function () {
			elem.setAttribute("class", this.toString());
		};
	}
	, classListProto = ClassList[protoProp] = []
	, classListGetter = function () {
		return new ClassList(this);
	};
// Most DOMException implementations don't allow calling DOMException's toString()
// on non-DOMExceptions. Error's toString() is sufficient here.
DOMEx[protoProp] = Error[protoProp];
classListProto.item = function (i) {
	return this[i] || null;
};
classListProto.contains = function (token) {
	token += "";
	return checkTokenAndGetIndex(this, token) !== -1;
};
classListProto.add = function () {
	var this$1 = this;

	var
		  tokens = arguments
		, i = 0
		, l = tokens.length
		, token
		, updated = false;
	do {
		token = tokens[i] + "";
		if (checkTokenAndGetIndex(this$1, token) === -1) {
			this$1.push(token);
			updated = true;
		}
	}
	while (++i < l);

	if (updated) {
		this._updateClassName();
	}
};
classListProto.remove = function () {
	var this$1 = this;

	var
		  tokens = arguments
		, i = 0
		, l = tokens.length
		, token
		, updated = false
		, index;
	do {
		token = tokens[i] + "";
		index = checkTokenAndGetIndex(this$1, token);
		while (index !== -1) {
			this$1.splice(index, 1);
			updated = true;
			index = checkTokenAndGetIndex(this$1, token);
		}
	}
	while (++i < l);

	if (updated) {
		this._updateClassName();
	}
};
classListProto.toggle = function (token, force) {
	token += "";

	var
		  result = this.contains(token)
		, method = result ?
			force !== true && "remove"
		:
			force !== false && "add";

	if (method) {
		this[method](token);
	}

	if (force === true || force === false) {
		return force;
	} else {
		return !result;
	}
};
classListProto.toString = function () {
	return this.join(" ");
};

if (objCtr.defineProperty) {
	var classListPropDesc = {
		  get: classListGetter
		, enumerable: true
		, configurable: true
	};
	try {
		objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	} catch (ex) { // IE 8 doesn't support enumerable:true
		if (ex.number === -0x7FF5EC54) {
			classListPropDesc.enumerable = false;
			objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
		}
	}
} else if (objCtr[protoProp].__defineGetter__) {
	elemCtrProto.__defineGetter__(classListProp, classListGetter);
}

}(self));

} else {
// There is full or partial native classList support, so just check if we need
// to normalize the add/remove and toggle APIs.

(function () {
	"use strict";

	var testElement = document.createElement("_");

	testElement.classList.add("c1", "c2");

	// Polyfill for IE 10/11 and Firefox <26, where classList.add and
	// classList.remove exist but support only one argument at a time.
	if (!testElement.classList.contains("c2")) {
		var createMethod = function(method) {
			var original = DOMTokenList.prototype[method];

			DOMTokenList.prototype[method] = function(token) {
				var arguments$1 = arguments;
				var this$1 = this;

				var i, len = arguments.length;

				for (i = 0; i < len; i++) {
					token = arguments$1[i];
					original.call(this$1, token);
				}
			};
		};
		createMethod('add');
		createMethod('remove');
	}

	testElement.classList.toggle("c3", false);

	// Polyfill for IE 10 and Firefox <24, where classList.toggle does not
	// support the second argument.
	if (testElement.classList.contains("c3")) {
		var _toggle = DOMTokenList.prototype.toggle;

		DOMTokenList.prototype.toggle = function(token, force) {
			if (1 in arguments && !this.contains(token) === !force) {
				return force;
			} else {
				return _toggle.call(this, token);
			}
		};

	}

	testElement = null;
}());

}

}

// element-closest | CC0-1.0 | github.com/jonathantneal/closest

(function (ElementProto) {
	if (typeof ElementProto.matches !== 'function') {
		ElementProto.matches = ElementProto.msMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.webkitMatchesSelector || function matches(selector) {
			var element = this;
			var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
			var index = 0;

			while (elements[index] && elements[index] !== element) {
				++index;
			}

			return Boolean(elements[index]);
		};
	}

	if (typeof ElementProto.closest !== 'function') {
		ElementProto.closest = function closest(selector) {
			var element = this;

			while (element && element.nodeType === 1) {
				if (element.matches(selector)) {
					return element;
				}

				element = element.parentNode;
			}

			return null;
		};
	}
})(window.Element.prototype);

/**
 * request-frame - requestAnimationFrame & cancelAnimationFrame polyfill for optimal cross-browser development.
 * @version v1.5.3
 * @license MIT
 * Copyright Julien Etienne 2015 All Rights Reserved.
 */
/**
 * @param  {String} type - request | cancel | native.
 * @return {Function} Timing function.
 */
function requestFrame(type) {
    // The only vendor prefixes required.
    var vendors = ['moz', 'webkit'];

    // Disassembled timing function abbreviations.
    var aF = 'AnimationFrame';
    var rqAF = 'Request' + aF;

    // Checks for firefox 4 - 10 function pair mismatch.
    var mozRAF = window.mozRequestAnimationFrame;
    var mozCAF = window.mozCancelAnimationFrame;
    var hasMozMismatch = mozRAF && !mozCAF;

    // Final assigned functions.
    var assignedRequestAnimationFrame;
    var assignedCancelAnimationFrame;

    // Initial time of the timing lapse.
    var previousTime = 0;

    var requestFrameMain;

    // Date.now polyfill, mainly for legacy IE versions.
    if (!Date.now) {
        Date.now = function () {
            return new Date().getTime();
        };
    }

    /**
     * hasIOS6RequestAnimationFrameBug.
     * @See {@Link https://gist.github.com/julienetie/86ac394ec41f1271ff0a}
     * - for Commentary.
     * @Copyright 2015 - Julien Etienne. 
     * @License: MIT.
     */
    function hasIOS6RequestAnimationFrameBug() {
        var webkitRAF = window.webkitRequestAnimationFrame;
        var rAF = window.requestAnimationFrame;

        // CSS/ Device with max for iOS6 Devices.
        var hasMobileDeviceWidth = screen.width <= 768 ? true : false;

        // Only supports webkit prefixed requestAnimtionFrane.
        var requiresWebkitprefix = !(webkitRAF && rAF);

        // iOS6 webkit browsers don't support performance now.
        var hasNoNavigationTiming = window.performance ? false : true;

        var iOS6Notice = "setTimeout is being used as a substitiue for \n            requestAnimationFrame due to a bug within iOS 6 builds";

        var hasIOS6Bug = requiresWebkitprefix && hasMobileDeviceWidth && hasNoNavigationTiming;

        var bugCheckresults = function (timingFnA, timingFnB, notice) {
            if (timingFnA || timingFnB) {
                console.warn(notice);
                return true;
            } else {
                return false;
            }
        };

        var displayResults = function (hasBug, hasBugNotice, webkitFn, nativeFn) {
            if (hasBug) {
                return bugCheckresults(webkitFn, nativeFn, hasBugNotice);
            } else {
                return false;
            }
        };

        return displayResults(hasIOS6Bug, iOS6Notice, webkitRAF, rAF);
    }

    /**
     * Native clearTimeout function.
     * @return {Function}
     */
    function clearTimeoutWithId(id) {
        clearTimeout(id);
    }

    /**
     * Based on a polyfill by Erik, introduced by Paul Irish & 
     * further improved by Darius Bacon.
     * @see  {@link http://www.paulirish.com/2011/
     * requestanimationframe-for-smart-animating}
     * @see  {@link https://github.com/darius/requestAnimationFrame/blob/
     * master/requestAnimationFrame.js}
     * @callback {Number} Timestamp.
     * @return {Function} setTimeout Function.
     */
    function setTimeoutWithTimestamp(callback) {
        var immediateTime = Date.now();
        var lapsedTime = Math.max(previousTime + 16, immediateTime);
        return setTimeout(function () {
            callback(previousTime = lapsedTime);
        }, lapsedTime - immediateTime);
    }

    /**
     * Queries the native function, prefixed function 
     * or use the setTimeoutWithTimestamp function.
     * @return {Function}
     */
    function queryRequestAnimationFrame() {
        if (Array.prototype.filter) {
            assignedRequestAnimationFrame = window['request' + aF] || window[vendors.filter(function (vendor) {
                if (window[vendor + rqAF] !== undefined) { return vendor; }
            }) + rqAF] || setTimeoutWithTimestamp;
        } else {
            return setTimeoutWithTimestamp;
        }
        if (!hasIOS6RequestAnimationFrameBug()) {
            return assignedRequestAnimationFrame;
        } else {
            return setTimeoutWithTimestamp;
        }
    }

    /**
     * Queries the native function, prefixed function 
     * or use the clearTimeoutWithId function.
     * @return {Function}
     */
    function queryCancelAnimationFrame() {
        var cancellationNames = [];
        if (Array.prototype.map) {
            vendors.map(function (vendor) {
                return ['Cancel', 'CancelRequest'].map(function (cancellationNamePrefix) {
                    cancellationNames.push(vendor + cancellationNamePrefix + aF);
                });
            });
        } else {
            return clearTimeoutWithId;
        }

        /**
         * Checks for the prefixed cancelAnimationFrame implementation.
         * @param  {Array} prefixedNames - An array of the prefixed names. 
         * @param  {Number} i - Iteration start point.
         * @return {Function} prefixed cancelAnimationFrame function.
         */
        function prefixedCancelAnimationFrame(prefixedNames, i) {
            var cancellationFunction;
            for (; i < prefixedNames.length; i++) {
                if (window[prefixedNames[i]]) {
                    cancellationFunction = window[prefixedNames[i]];
                    break;
                }
            }
            return cancellationFunction;
        }

        // Use truthly function
        assignedCancelAnimationFrame = window['cancel' + aF] || prefixedCancelAnimationFrame(cancellationNames, 0) || clearTimeoutWithId;

        // Check for iOS 6 bug
        if (!hasIOS6RequestAnimationFrameBug()) {
            return assignedCancelAnimationFrame;
        } else {
            return clearTimeoutWithId;
        }
    }

    function getRequestFn() {
        if (hasMozMismatch) {
            return setTimeoutWithTimestamp;
        } else {
            return queryRequestAnimationFrame();
        }
    }

    function getCancelFn() {
        return queryCancelAnimationFrame();
    }

    function setNativeFn() {
        if (hasMozMismatch) {
            window.requestAnimationFrame = setTimeoutWithTimestamp;
            window.cancelAnimationFrame = clearTimeoutWithId;
        } else {
            window.requestAnimationFrame = queryRequestAnimationFrame();
            window.cancelAnimationFrame = queryCancelAnimationFrame();
        }
    }

    /**
     * The type value "request" singles out firefox 4 - 10 and 
     * assigns the setTimeout function if plausible.
     */

    switch (type) {
        case 'request':
        case '':
            requestFrameMain = getRequestFn();
            break;

        case 'cancel':
            requestFrameMain = getCancelFn();
            break;

        case 'native':
            setNativeFn();
            break;
        default:
            throw new Error('RequestFrame parameter is not a type.');
    }
    return requestFrameMain;
}

// needed for IE 11
// https://github.com/julienetie/request-frame
var standardize = function (window, navigator) {
  // https://github.com/julienetie/request-frame/issues/6
  window.screen = window.screen || {};

  requestFrame('native');

  // avoids warning "navigator.mozGetUserMedia has been replaced by navigator.mediaDevices.getUserMedia",
  // see https://github.com/binarykitchen/videomail-client/issues/79
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // do not shim
  } else {
    navigator.getUserMedia_ =
            navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia;
  }

  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;

  var methods = [
    'debug', 'groupCollapsed', 'groupEnd', 'error',
    'exception', 'info', 'log', 'trace', 'warn'
  ];

  var noop = function () {};
  var console = (window.console = window.console || {});

  var method;
  var length = methods.length;

  while (length--) {
    method = methods[length];

    if (!console[method]) { console[method] = noop; }
  }
};

var index$1 = createCommonjsModule(function (module, exports) {
// Flat merge
module.exports = exports = function(host) {
	var donors = slice(arguments, 1);
	donors.forEach(function(donor) {
		Object.keys(donor).forEach(function(key) {
			host[key] = donor[key];
		});
	});
	return host;
};

// Flat, selective merge
exports.selective = function(keys, host) {
	var donors = slice(arguments, 1);
	donors.forEach(function(donor) {
		keys.forEach(function(key) {
			host[key] = donor[key];
		});
	});
	return host;
};

// Recursive merge
exports.recursive = function(host) {
	var donors = slice(arguments, 1);
	donors.forEach(function(donor) {
		Object.keys(donor).forEach(recurser(host, donor));
	});
	return host;
};

// Recursive, selective merge
exports.selective.recursive = function(keys, host) {
	var donors = slice(arguments, 1);
	donors.forEach(function(donor) {
		keys.forEach(recurser(host, donor));
	});
	return host;
};

// Helpers

function slice(arr, i) {
	return Array.prototype.slice.call(arr, i);
}

function isObj(value) {
	return !! (typeof value === 'object' && value);
}

function recurser(host, donor) {
	return function(key) {
		if (isObj(donor[key])) {
			if (isObj(host[key])) {
				exports.recursive(host[key], donor[key]);
			} else {
				var base = Array.isArray(donor[key]) ? [ ] : { };
				host[key] = exports.recursive(base, donor[key]);
			}
		} else {
			host[key] = donor[key];
		}
	};
}

/* End of file index.js */
/* Location: ./lib/index.js */
});

/**
 * Generate a new prototype method which will the given function once the
 * desired state has been reached. The returned function accepts 2 arguments:
 *
 * - fn: The assigned function which needs to be called.
 * - context: Context/this value of the function we need to execute.
 *
 * @param {String} state The state we need to operate upon.
 * @returns {Function}
 * @api private
 */
function generate(state) {
  return function proxy(fn, context) {
    var rs = this;

    if (rs.is(state)) {
      setTimeout(function () {
        fn.call(context, rs.readyState);
      }, 0);
    } else {
      if (!rs._events[state]) { rs._events[state] = []; }
      rs._events[state].push({ fn: fn, context: context });
    }

    return rs;
  };
}

/**
 * RS (readyState) instance.
 *
 * @constructor
 * @api public
 */
function RS() {
  this.readyState = RS.UNKNOWN;
  this._events = {};
}

/**
 * The environment can be in different states. The following states are
 * generated:
 *
 * - ALL:         The I don't really give a fuck state.
 * - UNKNOWN:     We got an unknown readyState we should start listening for events.
 * - LOADING:     Environment is currently loading.
 * - INTERACTIVE: Environment is ready for modification.
 * - COMPLETE:    All resources have been loaded.
 *
 * Please note that the order of the `states` string/array is of vital
 * importance as it's used in the readyState check.
 *
 * @type {Number}
 * @private
 */
RS.states = 'ALL,UNKNOWN,LOADING,INTERACTIVE,COMPLETE'.split(',');

for (var s = 0, state; s < RS.states.length; s++) {
  state = RS.states[s];

  RS[state] = RS.prototype[state] = s;
  RS.prototype[state.toLowerCase()] = generate(state);
}

/**
 * A change in the environment has been detected so we need to change our
 * readyState and call assigned event listeners and those of the previous
 * states.
 *
 * @param {Number} state The new readyState that we detected.
 * @returns {RS}
 * @api private
 */
RS.prototype.change = function change(state) {
  state = this.clean(state, true);

  var j
    , name
    , i = 0
    , listener
    , rs = this
    , previously = rs.readyState;

  if (previously >= state) { return rs; }

  rs.readyState = state;

  for (; i < RS.states.length; i++) {
    if (i > state) { break; }
    name = RS.states[i];

    if (name in rs._events) {
      for (j = 0; j < rs._events[name].length; j++) {
        listener = rs._events[name][j];
        listener.fn.call(listener.context || rs, previously);
      }

      delete rs._events[name];
    }
  }

  return rs;
};

/**
 * Check if we're currently in a given readyState.
 *
 * @param {String|Number} state The required readyState.
 * @returns {Boolean} Indication if this state has been reached.
 * @api public
 */
RS.prototype.is = function is(state) {
  return this.readyState >= this.clean(state, true);
};

/**
 * Transform a state to a number or toUpperCase.
 *
 * @param {Mixed} state State to transform.
 * @param {Boolean} nr Change to number.
 * @returns {Mixed}
 * @api public
 */
RS.prototype.clean = function transform(state, nr) {
  var type = typeof state;

  if (nr) { return 'number' !== type
  ? +RS[state.toUpperCase()] || 0
  : state; }

  return ('number' === type ? RS.states[state] : state).toUpperCase();
};

/**
 * Removes all event listeners. Useful when you want to unload readystatechange
 * completely so that it won't react to any events anymore. See
 * https://github.com/unshiftio/readystate/issues/8
 *
 * @returns {Function} rs so that calls can be chained.
 * @api public
 */
RS.prototype.removeAllListeners = function removeAllListeners() {
  this._events = {};
  return this;
};

//
// Expose the module.
//
var readystate$1 = new RS();

var browser$1 = createCommonjsModule(function (module) {
'use strict';

var readystate = module.exports = readystate$1
  , win = (new Function('return this'))()
  , complete = 'complete'
  , root = true
  , doc = win.document
  , html = doc.documentElement;

(function wrapper() {
  //
  // Bail out early if the document is already fully loaded. This means that this
  // script is loaded after the onload event.
  //
  if (complete === doc.readyState) {
    return readystate.change(complete);
  }

  //
  // Use feature detection to see what kind of browser environment we're dealing
  // with. Old versions of Internet Explorer do not support the addEventListener
  // interface so we can also safely assume that we need to fall back to polling.
  //
  var modern = !!doc.addEventListener
    , prefix = modern ? '' : 'on'
    , on = modern ? 'addEventListener' : 'attachEvent'
    , off = modern ? 'removeEventListener' : 'detachEvent';

  if (!modern && 'function' === typeof html.doScroll) {
    try { root = !win.frameElement; }
    catch (e) {}

    if (root) { (function polling() {
      try { html.doScroll('left'); }
      catch (e) { return setTimeout(polling, 50); }

      readystate.change('interactive');
    }()); }
  }

  /**
   * Handle the various of event listener calls.
   *
   * @param {Event} evt Simple DOM event.
   * @api private
   */
  function change(evt) {
    evt = evt || win.event;

    if ('readystatechange' === evt.type) {
      readystate.change(doc.readyState);
      if (complete !== doc.readyState) { return; }
    }

    if ('load' === evt.type) { readystate.change('complete'); }
    else { readystate.change('interactive'); }

    //
    // House keeping, remove our assigned event listeners.
    //
    (evt.type === 'load' ? win : doc)[off](evt.type, change, false);
  }

  //
  // Assign a shit load of event listeners so we can update our internal state.
  //
  doc[on](prefix +'DOMContentLoaded', change, false);
  doc[on](prefix +'readystatechange', change, false);
  win[on](prefix +'load', change, false);
} ());
});

var global$2 = typeof global !== "undefined" ? global :
            typeof self !== "undefined" ? self :
            typeof window !== "undefined" ? window : {};

var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var inited = false;
function init () {
  inited = true;
  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
  }

  revLookup['-'.charCodeAt(0)] = 62;
  revLookup['_'.charCodeAt(0)] = 63;
}

function toByteArray (b64) {
  if (!inited) {
    init();
  }
  var i, j, l, tmp, placeHolders, arr;
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

  // base64 is 4/3 + up to two characters of the original data
  arr = new Arr(len * 3 / 4 - placeHolders);

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len;

  var L = 0;

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)];
    arr[L++] = (tmp >> 16) & 0xFF;
    arr[L++] = (tmp >> 8) & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4);
    arr[L++] = tmp & 0xFF;
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2);
    arr[L++] = (tmp >> 8) & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
    output.push(tripletToBase64(tmp));
  }
  return output.join('')
}

function fromByteArray (uint8) {
  if (!inited) {
    init();
  }
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
  var output = '';
  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    output += lookup[tmp >> 2];
    output += lookup[(tmp << 4) & 0x3F];
    output += '==';
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
    output += lookup[tmp >> 10];
    output += lookup[(tmp >> 4) & 0x3F];
    output += lookup[(tmp << 2) & 0x3F];
    output += '=';
  }

  parts.push(output);

  return parts.join('')
}

function read (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? (nBytes - 1) : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

function write (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
  var i = isLE ? 0 : (nBytes - 1);
  var d = isLE ? 1 : -1;
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
}

var toString$2 = {}.toString;

var isArray$2 = Array.isArray || function (arr) {
  return toString$2.call(arr) == '[object Array]';
};

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */


var INSPECT_MAX_BYTES = 50;

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global$2.TYPED_ARRAY_SUPPORT !== undefined
  ? global$2.TYPED_ARRAY_SUPPORT
  : true;

/*
 * Export kMaxLength after typed array support is determined.
 */
var _kMaxLength = kMaxLength();
function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }
    that.length = length;
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from$1(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192; // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr
};

function from$1 (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from$1(null, value, encodingOrOffset, length)
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    // Object.defineProperty(Buffer, Symbol.species, {
    //   value: null,
    //   configurable: true
    // })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
};

function allocUnsafe (that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
};

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);

  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }
  return that
}

function fromObject (that, obj) {
  if (internalIsBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len);
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray$2(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0;
  }
  return Buffer.alloc(+length)
}
Buffer.isBuffer = isBuffer$1;
function internalIsBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) { return 0 }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break
    }
  }

  if (x < y) { return -1 }
  if (y < x) { return 1 }
  return 0
};

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
};

Buffer.concat = function concat (list, length) {
  if (!isArray$2(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i;
  if (length === undefined) {
    length = 0;
    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;
  for (i = 0; i < list.length; ++i) {
    var buf = list[i];
    if (!internalIsBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer
};

function byteLength (string, encoding) {
  if (internalIsBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) { return 0 }

  // Use a for loop to avoid recursion
  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) { return utf8ToBytes(string).length } // assume utf8
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer.byteLength = byteLength;

function slowToString (encoding, start, end) {
  var this$1 = this;

  var loweredCase = false;

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0;
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return ''
  }

  if (!encoding) { encoding = 'utf8'; }

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this$1, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this$1, start, end)

      case 'ascii':
        return asciiSlice(this$1, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this$1, start, end)

      case 'base64':
        return base64Slice(this$1, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this$1, start, end)

      default:
        if (loweredCase) { throw new TypeError('Unknown encoding: ' + encoding) }
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true;

function swap (b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16 () {
  var this$1 = this;

  var len = this.length;
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this$1, i, i + 1);
  }
  return this
};

Buffer.prototype.swap32 = function swap32 () {
  var this$1 = this;

  var len = this.length;
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this$1, i, i + 3);
    swap(this$1, i + 1, i + 2);
  }
  return this
};

Buffer.prototype.swap64 = function swap64 () {
  var this$1 = this;

  var len = this.length;
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this$1, i, i + 7);
    swap(this$1, i + 1, i + 6);
    swap(this$1, i + 2, i + 5);
    swap(this$1, i + 3, i + 4);
  }
  return this
};

Buffer.prototype.toString = function toString () {
  var length = this.length | 0;
  if (length === 0) { return '' }
  if (arguments.length === 0) { return utf8Slice(this, 0, length) }
  return slowToString.apply(this, arguments)
};

Buffer.prototype.equals = function equals (b) {
  if (!internalIsBuffer(b)) { throw new TypeError('Argument must be a Buffer') }
  if (this === b) { return true }
  return Buffer.compare(this, b) === 0
};

Buffer.prototype.inspect = function inspect () {
  var str = '';
  var max = INSPECT_MAX_BYTES;
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) { str += ' ... '; }
  }
  return '<Buffer ' + str + '>'
};

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!internalIsBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = target ? target.length : 0;
  }
  if (thisStart === undefined) {
    thisStart = 0;
  }
  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;

  if (this === target) { return 0 }

  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);

  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break
    }
  }

  if (x < y) { return -1 }
  if (y < x) { return 1 }
  return 0
};

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) { return -1 }

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }
  byteOffset = +byteOffset;  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1);
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) { byteOffset = buffer.length + byteOffset; }
  if (byteOffset >= buffer.length) {
    if (dir) { return -1 }
    else { byteOffset = buffer.length - 1; }
  } else if (byteOffset < 0) {
    if (dir) { byteOffset = 0; }
    else { return -1 }
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (internalIsBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf$1(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf$1(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf$1 (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read$$1 (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read$$1(arr, i) === read$$1(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) { foundIndex = i; }
        if (i - foundIndex + 1 === valLength) { return foundIndex * indexSize }
      } else {
        if (foundIndex !== -1) { i -= i - foundIndex; }
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) { byteOffset = arrLength - valLength; }
    for (i = byteOffset; i >= 0; i--) {
      var found = true;
      for (var j = 0; j < valLength; j++) {
        if (read$$1(arr, i + j) !== read$$1(val, j)) {
          found = false;
          break
        }
      }
      if (found) { return i }
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
};

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
};

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
};

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }

  // must be an even number of digits
  var strLen = string.length;
  if (strLen % 2 !== 0) { throw new TypeError('Invalid hex string') }

  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) { return i }
    buf[offset + i] = parsed;
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write$$1 (string, offset, length, encoding) {
  var this$1 = this;

  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0;
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0;
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;
    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) { encoding = 'utf8'; }
    } else {
      encoding = length;
      length = undefined;
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) { length = remaining; }

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) { encoding = 'utf8'; }

  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this$1, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this$1, string, offset, length)

      case 'ascii':
        return asciiWrite(this$1, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this$1, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this$1, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this$1, string, offset, length)

      default:
        if (loweredCase) { throw new TypeError('Unknown encoding: ' + encoding) }
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
};

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return fromByteArray(buf)
  } else {
    return fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];

  var i = start;
  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }
          break
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }
          break
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }
          break
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = '';
  var i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    );
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length;

  if (!start || start < 0) { start = 0; }
  if (!end || end < 0 || end > len) { end = len; }

  var out = '';
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var this$1 = this;

  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) { start = 0; }
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) { end = 0; }
  } else if (end > len) {
    end = len;
  }

  if (end < start) { end = start; }

  var newBuf;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this$1[i + start];
    }
  }

  return newBuf
};

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) { throw new RangeError('offset is not uint') }
  if (offset + ext > length) { throw new RangeError('Trying to access beyond buffer length') }
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  var this$1 = this;

  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) { checkOffset(offset, byteLength, this.length); }

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this$1[offset + i] * mul;
  }

  return val
};

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  var this$1 = this;

  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this$1[offset + --byteLength] * mul;
  }

  return val
};

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) { checkOffset(offset, 1, this.length); }
  return this[offset]
};

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) { checkOffset(offset, 2, this.length); }
  return this[offset] | (this[offset + 1] << 8)
};

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) { checkOffset(offset, 2, this.length); }
  return (this[offset] << 8) | this[offset + 1]
};

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) { checkOffset(offset, 4, this.length); }

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
};

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) { checkOffset(offset, 4, this.length); }

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
};

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  var this$1 = this;

  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) { checkOffset(offset, byteLength, this.length); }

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this$1[offset + i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) { val -= Math.pow(2, 8 * byteLength); }

  return val
};

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  var this$1 = this;

  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) { checkOffset(offset, byteLength, this.length); }

  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];
  while (i > 0 && (mul *= 0x100)) {
    val += this$1[offset + --i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) { val -= Math.pow(2, 8 * byteLength); }

  return val
};

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) { checkOffset(offset, 1, this.length); }
  if (!(this[offset] & 0x80)) { return (this[offset]) }
  return ((0xff - this[offset] + 1) * -1)
};

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) { checkOffset(offset, 2, this.length); }
  var val = this[offset] | (this[offset + 1] << 8);
  return (val & 0x8000) ? val | 0xFFFF0000 : val
};

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) { checkOffset(offset, 2, this.length); }
  var val = this[offset + 1] | (this[offset] << 8);
  return (val & 0x8000) ? val | 0xFFFF0000 : val
};

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) { checkOffset(offset, 4, this.length); }

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
};

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) { checkOffset(offset, 4, this.length); }

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
};

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) { checkOffset(offset, 4, this.length); }
  return read(this, offset, true, 23, 4)
};

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) { checkOffset(offset, 4, this.length); }
  return read(this, offset, false, 23, 4)
};

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) { checkOffset(offset, 8, this.length); }
  return read(this, offset, true, 52, 8)
};

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) { checkOffset(offset, 8, this.length); }
  return read(this, offset, false, 52, 8)
};

function checkInt (buf, value, offset, ext, max, min) {
  if (!internalIsBuffer(buf)) { throw new TypeError('"buffer" argument must be a Buffer instance') }
  if (value > max || value < min) { throw new RangeError('"value" argument is out of bounds') }
  if (offset + ext > buf.length) { throw new RangeError('Index out of range') }
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  var this$1 = this;

  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    this$1[offset + i] = (value / mul) & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  var this$1 = this;

  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    this$1[offset + i] = (value / mul) & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) { checkInt(this, value, offset, 1, 0xff, 0); }
  if (!Buffer.TYPED_ARRAY_SUPPORT) { value = Math.floor(value); }
  this[offset] = (value & 0xff);
  return offset + 1
};

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) { value = 0xffff + value + 1; }
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) { checkInt(this, value, offset, 2, 0xffff, 0); }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) { checkInt(this, value, offset, 2, 0xffff, 0); }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8);
    this[offset + 1] = (value & 0xff);
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2
};

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) { value = 0xffffffff + value + 1; }
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) { checkInt(this, value, offset, 4, 0xffffffff, 0); }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24);
    this[offset + 2] = (value >>> 16);
    this[offset + 1] = (value >>> 8);
    this[offset] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) { checkInt(this, value, offset, 4, 0xffffffff, 0); }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24);
    this[offset + 1] = (value >>> 16);
    this[offset + 2] = (value >>> 8);
    this[offset + 3] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4
};

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  var this$1 = this;

  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this$1[offset + i - 1] !== 0) {
      sub = 1;
    }
    this$1[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  var this$1 = this;

  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this$1[offset + i + 1] !== 0) {
      sub = 1;
    }
    this$1[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
  }

  return offset + byteLength
};

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) { checkInt(this, value, offset, 1, 0x7f, -0x80); }
  if (!Buffer.TYPED_ARRAY_SUPPORT) { value = Math.floor(value); }
  if (value < 0) { value = 0xff + value + 1; }
  this[offset] = (value & 0xff);
  return offset + 1
};

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) { checkInt(this, value, offset, 2, 0x7fff, -0x8000); }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2
};

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) { checkInt(this, value, offset, 2, 0x7fff, -0x8000); }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8);
    this[offset + 1] = (value & 0xff);
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2
};

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) { checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000); }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
    this[offset + 2] = (value >>> 16);
    this[offset + 3] = (value >>> 24);
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4
};

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) { checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000); }
  if (value < 0) { value = 0xffffffff + value + 1; }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24);
    this[offset + 1] = (value >>> 16);
    this[offset + 2] = (value >>> 8);
    this[offset + 3] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4
};

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) { throw new RangeError('Index out of range') }
  if (offset < 0) { throw new RangeError('Index out of range') }
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }
  write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
};

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
};

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }
  write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
};

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  var this$1 = this;

  if (!start) { start = 0; }
  if (!end && end !== 0) { end = this.length; }
  if (targetStart >= target.length) { targetStart = target.length; }
  if (!targetStart) { targetStart = 0; }
  if (end > 0 && end < start) { end = start; }

  // Copy 0 bytes; we're done
  if (end === start) { return 0 }
  if (target.length === 0 || this.length === 0) { return 0 }

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) { throw new RangeError('sourceStart out of bounds') }
  if (end < 0) { throw new RangeError('sourceEnd out of bounds') }

  // Are we oob?
  if (end > this.length) { end = this.length; }
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this$1[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this$1[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    );
  }

  return len
};

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  var this$1 = this;

  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0);
      if (code < 256) {
        val = code;
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;

  if (!val) { val = 0; }

  var i;
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this$1[i] = val;
    }
  } else {
    var bytes = internalIsBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;
    for (i = 0; i < end - start; ++i) {
      this$1[i + start] = bytes[i % len];
    }
  }

  return this
};

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
  // Node converts strings with length < 2 to ''
  if (str.length < 2) { return '' }
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '=';
  }
  return str
}

function stringtrim (str) {
  if (str.trim) { return str.trim() }
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) { return '0' + n.toString(16) }
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) { bytes.push(0xEF, 0xBF, 0xBD); }
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) { bytes.push(0xEF, 0xBF, 0xBD); }
          continue
        }

        // valid lead
        leadSurrogate = codePoint;

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) { bytes.push(0xEF, 0xBF, 0xBD); }
        leadSurrogate = codePoint;
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) { bytes.push(0xEF, 0xBF, 0xBD); }
    }

    leadSurrogate = null;

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) { break }
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) { break }
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      );
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) { break }
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      );
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) { break }
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      );
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo;
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) { break }

    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray
}


function base64ToBytes (str) {
  return toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) { break }
    dst[i + offset] = src[i];
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}


// the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
function isBuffer$1(obj) {
  return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj))
}

function isFastBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0))
}


var index$2 = Object.freeze({
	INSPECT_MAX_BYTES: INSPECT_MAX_BYTES,
	kMaxLength: _kMaxLength,
	Buffer: Buffer,
	SlowBuffer: SlowBuffer,
	isBuffer: isBuffer$1
});

// shim for using process in browser
// based off https://github.com/defunctzombie/node-process/blob/master/browser.js

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;
if (typeof global$2.setTimeout === 'function') {
    cachedSetTimeout = setTimeout;
}
if (typeof global$2.clearTimeout === 'function') {
    cachedClearTimeout = clearTimeout;
}

function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue$1 = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue$1 = currentQueue.concat(queue$1);
    } else {
        queueIndex = -1;
    }
    if (queue$1.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue$1.length;
    while(len) {
        currentQueue = queue$1;
        queue$1 = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue$1.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
function nextTick(fun) {
    var arguments$1 = arguments;

    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments$1[i];
        }
    }
    queue$1.push(new Item(fun, args));
    if (queue$1.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
}
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
var title = 'browser';
var platform = 'browser';
var browser$2 = true;
var env = {};
var argv = [];
var version = ''; // empty string to avoid regexp issues
var versions = {};
var release = {};
var config = {};

function noop() {}

var on = noop;
var addListener = noop;
var once = noop;
var off = noop;
var removeListener = noop;
var removeAllListeners = noop;
var emit = noop;

function binding(name) {
    throw new Error('process.binding is not supported');
}

function cwd () { return '/' }
function chdir (dir) {
    throw new Error('process.chdir is not supported');
}
function umask() { return 0; }

// from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
var performance$1 = global$2.performance || {};
var performanceNow =
  performance$1.now        ||
  performance$1.mozNow     ||
  performance$1.msNow      ||
  performance$1.oNow       ||
  performance$1.webkitNow  ||
  function(){ return (new Date()).getTime() };

// generate timestamp or delta
// see http://nodejs.org/api/process.html#process_process_hrtime
function hrtime(previousTimestamp){
  var clocktime = performanceNow.call(performance$1)*1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor((clocktime%1)*1e9);
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds<0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds,nanoseconds]
}

var startTime = new Date();
function uptime() {
  var currentTime = new Date();
  var dif = currentTime - startTime;
  return dif / 1000;
}

var process$4 = {
  nextTick: nextTick,
  title: title,
  browser: browser$2,
  env: env,
  argv: argv,
  version: version,
  versions: versions,
  on: on,
  addListener: addListener,
  once: once,
  off: off,
  removeListener: removeListener,
  removeAllListeners: removeAllListeners,
  emit: emit,
  binding: binding,
  cwd: cwd,
  chdir: chdir,
  umask: umask,
  hrtime: hrtime,
  platform: platform,
  release: release,
  config: config,
  uptime: uptime
};

var inherits;
if (typeof Object.create === 'function'){
  inherits = function inherits(ctor, superCtor) {
    // implementation from standard node.js 'util' module
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  inherits = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    var TempCtor = function () {};
    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  };
}
var inherits$1 = inherits;

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var formatRegExp = /%[sdj%]/g;
function format(f) {
  var arguments$1 = arguments;

  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments$1[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') { return '%'; }
    if (i >= len) { return x; }
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject$1(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
}


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
function deprecate(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global$2.process)) {
    return function() {
      return deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process$4.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process$4.throwDeprecation) {
        throw new Error(msg);
      } else if (process$4.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}


var debugs = {};
var debugEnviron;
function debuglog(set) {
  if (isUndefined(debugEnviron))
    { debugEnviron = process$4.env.NODE_DEBUG || ''; }
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = 0;
      debugs[set] = function() {
        var msg = format.apply(null, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
}


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) { ctx.depth = arguments[2]; }
  if (arguments.length >= 4) { ctx.colors = arguments[3]; }
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    _extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) { ctx.showHidden = false; }
  if (isUndefined(ctx.depth)) { ctx.depth = 2; }
  if (isUndefined(ctx.colors)) { ctx.colors = false; }
  if (isUndefined(ctx.customInspect)) { ctx.customInspect = true; }
  if (ctx.colors) { ctx.stylize = stylizeWithColor; }
  return formatValue(ctx, obj, ctx.depth);
}

// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp$1(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray$1(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp$1(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp$1(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    { return ctx.stylize('undefined', 'undefined'); }
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    { return ctx.stylize('' + value, 'number'); }
  if (isBoolean(value))
    { return ctx.stylize('' + value, 'boolean'); }
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    { return ctx.stylize('null', 'null'); }
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty$1(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty$1(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) { numLinesEst++; }
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray$1(ar) {
  return Array.isArray(ar);
}

function isBoolean(arg) {
  return typeof arg === 'boolean';
}

function isNull(arg) {
  return arg === null;
}

function isNullOrUndefined(arg) {
  return arg == null;
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isString(arg) {
  return typeof arg === 'string';
}

function isSymbol$1(arg) {
  return typeof arg === 'symbol';
}

function isUndefined(arg) {
  return arg === void 0;
}

function isRegExp$1(re) {
  return isObject$1(re) && objectToString(re) === '[object RegExp]';
}

function isObject$1(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isDate(d) {
  return isObject$1(d) && objectToString(d) === '[object Date]';
}

function isError(e) {
  return isObject$1(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}

function isFunction(arg) {
  return typeof arg === 'function';
}

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}

function isBuffer(maybeBuf) {
  return isBuffer$1(maybeBuf);
}

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
function log$1() {
  console.log('%s - %s', timestamp(), format.apply(null, arguments));
}


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
function _extend(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject$1(add)) { return origin; }

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
}

function hasOwnProperty$1(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var util = {
  inherits: inherits$1,
  _extend: _extend,
  log: log$1,
  isBuffer: isBuffer,
  isPrimitive: isPrimitive,
  isFunction: isFunction,
  isError: isError,
  isDate: isDate,
  isObject: isObject$1,
  isRegExp: isRegExp$1,
  isUndefined: isUndefined,
  isSymbol: isSymbol$1,
  isString: isString,
  isNumber: isNumber,
  isNullOrUndefined: isNullOrUndefined,
  isNull: isNull,
  isBoolean: isBoolean,
  isArray: isArray$1,
  inspect: inspect,
  deprecate: deprecate,
  format: format,
  debuglog: debuglog
};


var util$1 = Object.freeze({
	format: format,
	deprecate: deprecate,
	debuglog: debuglog,
	inspect: inspect,
	isArray: isArray$1,
	isBoolean: isBoolean,
	isNull: isNull,
	isNullOrUndefined: isNullOrUndefined,
	isNumber: isNumber,
	isString: isString,
	isSymbol: isSymbol$1,
	isUndefined: isUndefined,
	isRegExp: isRegExp$1,
	isObject: isObject$1,
	isDate: isDate,
	isError: isError,
	isFunction: isFunction,
	isPrimitive: isPrimitive,
	isBuffer: isBuffer,
	log: log$1,
	inherits: inherits$1,
	_extend: _extend,
	default: util
});

var version$1 = "2.0.0-alpha";

var PRODUCTION = "development" === 'production';

var defaultOptions = {
  logger: null,                         // define logging instance. leave null for default, console.
  logStackSize: 30,                     // limits the stack size of log outputs to collect
  verbose: !PRODUCTION,                 // set true to log more info
  baseUrl: 'https://videomail.io',      // leave as it, permanent url to post videos
  socketUrl: 'wss://videomail.io',      // leave as it, permanent url to send frames
  siteName: 'videomail-client-demo',    // Required for the API. If you change it, contact me
  cache: true,                          // reduces GET queries when loading videos
  insertCss: true,                      // inserts predefined CSS, see examples
  enablePause: true,                    // enable pause/resume button
  enableAutoPause: true,                // automatically pauses when window becomes inactive
  enableSpace: true,                    // hitting space can pause recording
  disableSubmit: false,                 // set this to true if you do not want to submit videos,
                                        // but just want to record and replay these temporarily
  enableAutoValidation: true,           // automatically validates all form inputs if any exist and
                                        // does not /enable disable submit button after recording
                                        // when something else seems invalid.

  enctype: 'application/json',          // enctype for the form submission. currently implemented are:
                                        // 'application/json' and 'application/x-www-form-urlencoded'

  // default CSS selectors you can alter, see examples
  selectors: {
    containerId: 'videomail',
    replayClass: 'replay',
    userMediaClass: 'userMedia',
    visualsClass: 'visuals',
    buttonClass: null,                  // can also be used as a default class for all buttons
    buttonsClass: 'buttons',

    recordButtonClass: 'record',
    pauseButtonClass: 'pause',
    resumeButtonClass: 'resume',
    previewButtonClass: 'preview',
    recordAgainButtonClass: 'recordAgain',
    submitButtonClass: 'submit',

    subjectInputName: 'subject',         // the form input name for subject
    fromInputName: 'from',               // the form input name for the from email
    toInputName: 'to',                   // the form input name for the to email
    bodyInputName: 'body',               // the form input name for the message (body)

    keyInputName: 'videomail_key',
    parentKeyInputName: 'videomail_parent_key',
    aliasInputName: 'videomail_alias',

    formId: null,                     // automatically detects form if any
    submitButtonId: null,             // semi-automatically detects submit button in the form
                                      // but if that does not work, try using the
    submitButtonSelector: null        // submitButtonSelector
  },

  audio: {
    enabled: false,                   // set to true for experimential audio recording
    'switch': false,                  // enables a switcher for audio recording (on/off)
    volume: 0.2,                      // must be between 0 .. 1 but 0.20 is recommeded to avoid
                                      // distorting at the higher volume peaks
    bufferSize: 1024                  // decides how often the audio is being sampled, must be a power of two.
                                      // the higher the less traffic, but harder to adjust with rubberband
                                      // to match with the video length on server side during encoding
  },

  video: {
    fps: 15,                    // depends on your connection
    limitSeconds: 30,           // recording automatically stops after that limit
    countdown: 3,               // set it to 0 or false to disable it

    // it is recommended to set one dimension only and leave the other one to auto
    // because each webcam has a different aspect ratio

    width: 'auto',      // or use an integer for exact pixels
    height: 'auto'      // or use an integer for exact pixels
  },

  image: {
    quality: 0.35,
    types: ['webp', 'jpeg']   // recommended settings to make most of all browsers
  },

  // alter these text for internationalisation
  text: {
    pausedHeader: 'Paused',
    pausedHint: null,
    sending: 'Teleporting',
    encoding: 'Encoding',
    limitReached: 'Limit reached',
    buttons: {
      'record': 'Record video',
      'recordAgain': 'Record again',
      'resume': 'Resume',
      'pause': 'Pause',
      'preview': 'Preview'
    }
  },

  notifier: {
    entertain: false,   // when true, user is entertained while waiting, see examples
    entertainClass: 'bg',
    entertainLimit: 6,
    entertainInterval: 9000
  },

  timeouts: {
    userMedia: 10e3,         // in milliseconds, increase if you want user give more time to enable webcam
    connection: 1e4,         // in seconds, increase if api is slow
    pingInterval: 45e3       // in milliseconds, keeps webstream (connection) alive when pausing
  },

  callbacks: {
    // a custom callback to tweak form data before posting to server
    // this is for advanced use only and shouldn't be used if possible
    adjustFormDataBeforePosting: null
  },

  defaults: {
    from: null,       // define default FROM email address
    to: null,         // define default TO email address
    subject: null,    // define default subject line
    body: null        // define default body content
  },

  // show errors inside the container?
  displayErrors: true,

  // true = all form inputs get disabled and disappear when browser can't record
  adjustFormOnBrowserError: false,

  // when true, any errors will be sent to the videomail server for analysis
  // ps: can be a function too returning a boolean
  reportErrors: false,

  // just for testing purposes to simulate browser agent handling
  fakeUaString: null,

  // todo pass on version to server
  version: version$1
};

// constants (changing these only break down functionality, so be careful)

var Constants = {
  SITE_NAME_LABEL: 'x-videomail-site-name',

  public: {
    ENC_TYPE_APP_JSON: 'application/json',
    ENC_TYPE_FORM: 'application/x-www-form-urlencoded'
  }
};

/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

/**
 * Constructs an enumeration with keys equal to their value.
 *
 * For example:
 *
 *   var COLORS = keyMirror({blue: null, red: null});
 *   var myColor = COLORS.blue;
 *   var isColorValid = !!COLORS[myColor];
 *
 * The last line could not be performed if the values of the generated enum were
 * not equal to their keys.
 *
 *   Input:  {key1: val1, key2: val2}
 *   Output: {key1: key1, key2: key2}
 *
 * @param {object} obj
 * @return {object}
 */
var keyMirror = function(obj) {
  var ret = {};
  var key;
  if (!(obj instanceof Object && !Array.isArray(obj))) {
    throw new Error('keyMirror(...): Argument must be an object.');
  }
  for (key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }
    ret[key] = key;
  }
  return ret;
};

var index$3 = keyMirror;

var Events = index$3({
  BUILT: null, // all dom elements are ready, are in the DOM
  FORM_READY: null, // form is ready, available in the DOM
  LOADING_USER_MEDIA: null, // asking for webcam access
  USER_MEDIA_READY: null, // user media (= webcam) is ready, loaded
  CONNECTING: null, // socket is connecting to server
  CONNECTED: null, // socket is connected to server
  DISCONNECTED: null, // socket to server is disconnected
  COUNTDOWN: null, // countdown for recording has started
  RECORDING: null, // webcam is recording
  STOPPING: null, // recording is being stopped (= preview)
  PROGRESS: null, // start sending
  BEGIN_AUDIO_ENCODING: null, // encoding video
  BEGIN_VIDEO_ENCODING: null, // encoding video
  RESETTING: null, // resetting everything to go back to initial state
  PAUSED: null, // recording is being paused
  RESUMING: null, // recording is resumed
  PREVIEW: null, // video preview is set
  PREVIEW_SHOWN: null, // video preview is shown
  REPLAY_SHOWN: null, // submitted video is shown
  INVALID: null, // form is invalid
  VALIDATING: null, // form is being validated
  VALID: null, // form is valid
  SUBMITTING: null, // form is being submitted
  SUBMITTED: null, // form has been successfully submitted
  ERROR: null, // an error occured
  BLOCKING: null, // something serious, most likely an error, is shown and blocks
  SENDING_FIRST_FRAME: null, // emitted before the first frame is being computed
  FIRST_FRAME_SENT: null, // emitted once when fist frame has been sent to server
  HIDE: null, // emitted when hidden
  NOTIFYING: null, // notifies user about something (not blocking)
  ENABLING_AUDIO: null, // about to enable audio
  DISABLING_AUDIO: null, // about to disable audio
  LOADED_META_DATA: null, // raised when webcam knows its dimensions
  EVENT_EMITTED: null, // for debugging only, is emitted when an event is emitted lol,
  GOING_BACK: null, // going back, starting all over again,
  ASKING_WEBCAM_PERMISSION: null, // when about to ask for webcam permissions
  VISIBLE: null, // document just became visible
  INVISIBLE: null  // document just became INvisible
});

var uaParser = createCommonjsModule(function (module, exports) {
/**
 * UAParser.js v0.7.13
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 & MIT
 */

(function (window, undefined) {

    'use strict';

    //////////////
    // Constants
    /////////////


    var LIBVERSION  = '0.7.13',
        EMPTY       = '',
        UNKNOWN     = '?',
        FUNC_TYPE   = 'function',
        UNDEF_TYPE  = 'undefined',
        OBJ_TYPE    = 'object',
        STR_TYPE    = 'string',
        MAJOR       = 'major', // deprecated
        MODEL       = 'model',
        NAME        = 'name',
        TYPE        = 'type',
        VENDOR      = 'vendor',
        VERSION     = 'version',
        ARCHITECTURE= 'architecture',
        CONSOLE     = 'console',
        MOBILE      = 'mobile',
        TABLET      = 'tablet',
        SMARTTV     = 'smarttv',
        WEARABLE    = 'wearable',
        EMBEDDED    = 'embedded';


    ///////////
    // Helper
    //////////


    var util = {
        extend : function (regexes, extensions) {
            var margedRegexes = {};
            for (var i in regexes) {
                if (extensions[i] && extensions[i].length % 2 === 0) {
                    margedRegexes[i] = extensions[i].concat(regexes[i]);
                } else {
                    margedRegexes[i] = regexes[i];
                }
            }
            return margedRegexes;
        },
        has : function (str1, str2) {
          if (typeof str1 === "string") {
            return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
          } else {
            return false;
          }
        },
        lowerize : function (str) {
            return str.toLowerCase();
        },
        major : function (version) {
            return typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g,'').split(".")[0] : undefined;
        },
        trim : function (str) {
          return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        }
    };


    ///////////////
    // Map helper
    //////////////


    var mapper = {

        rgx : function (ua, arrays) {
            var this$1 = this;


            //var result = {},
            var i = 0, j, k, p, q, matches, match;//, args = arguments;

            /*// construct object barebones
            for (p = 0; p < args[1].length; p++) {
                q = args[1][p];
                result[typeof q === OBJ_TYPE ? q[0] : q] = undefined;
            }*/

            // loop through all regexes maps
            while (i < arrays.length && !matches) {

                var regex = arrays[i],       // even sequence (0,2,4,..)
                    props = arrays[i + 1];   // odd sequence (1,3,5,..)
                j = k = 0;

                // try matching uastring with regexes
                while (j < regex.length && !matches) {

                    matches = regex[j++].exec(ua);

                    if (!!matches) {
                        for (p = 0; p < props.length; p++) {
                            match = matches[++k];
                            q = props[p];
                            // check if given property is actually array
                            if (typeof q === OBJ_TYPE && q.length > 0) {
                                if (q.length == 2) {
                                    if (typeof q[1] == FUNC_TYPE) {
                                        // assign modified match
                                        this$1[q[0]] = q[1].call(this$1, match);
                                    } else {
                                        // assign given value, ignore regex match
                                        this$1[q[0]] = q[1];
                                    }
                                } else if (q.length == 3) {
                                    // check whether function or regex
                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                        // call function (usually string mapper)
                                        this$1[q[0]] = match ? q[1].call(this$1, match, q[2]) : undefined;
                                    } else {
                                        // sanitize match using given regex
                                        this$1[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                    }
                                } else if (q.length == 4) {
                                        this$1[q[0]] = match ? q[3].call(this$1, match.replace(q[1], q[2])) : undefined;
                                }
                            } else {
                                this$1[q] = match ? match : undefined;
                            }
                        }
                    }
                }
                i += 2;
            }
            //console.log(this);
            //return this;
        },

        str : function (str, map) {

            for (var i in map) {
                // check if array
                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                    for (var j = 0; j < map[i].length; j++) {
                        if (util.has(map[i][j], str)) {
                            return (i === UNKNOWN) ? undefined : i;
                        }
                    }
                } else if (util.has(map[i], str)) {
                    return (i === UNKNOWN) ? undefined : i;
                }
            }
            return str;
        }
    };


    ///////////////
    // String map
    //////////////


    var maps = {

        browser : {
            oldsafari : {
                version : {
                    '1.0'   : '/8',
                    '1.2'   : '/1',
                    '1.3'   : '/3',
                    '2.0'   : '/412',
                    '2.0.2' : '/416',
                    '2.0.3' : '/417',
                    '2.0.4' : '/419',
                    '?'     : '/'
                }
            }
        },

        device : {
            amazon : {
                model : {
                    'Fire Phone' : ['SD', 'KF']
                }
            },
            sprint : {
                model : {
                    'Evo Shift 4G' : '7373KT'
                },
                vendor : {
                    'HTC'       : 'APA',
                    'Sprint'    : 'Sprint'
                }
            }
        },

        os : {
            windows : {
                version : {
                    'ME'        : '4.90',
                    'NT 3.11'   : 'NT3.51',
                    'NT 4.0'    : 'NT4.0',
                    '2000'      : 'NT 5.0',
                    'XP'        : ['NT 5.1', 'NT 5.2'],
                    'Vista'     : 'NT 6.0',
                    '7'         : 'NT 6.1',
                    '8'         : 'NT 6.2',
                    '8.1'       : 'NT 6.3',
                    '10'        : ['NT 6.4', 'NT 10.0'],
                    'RT'        : 'ARM'
                }
            }
        }
    };


    //////////////
    // Regex map
    /////////////


    var regexes = {

        browser : [[

            // Presto based
            /(opera\smini)\/([\w\.-]+)/i,                                       // Opera Mini
            /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,                      // Opera Mobi/Tablet
            /(opera).+version\/([\w\.]+)/i,                                     // Opera > 9.80
            /(opera)[\/\s]+([\w\.]+)/i                                          // Opera < 9.80
            ], [NAME, VERSION], [

            /(opios)[\/\s]+([\w\.]+)/i                                          // Opera mini on iphone >= 8.0
            ], [[NAME, 'Opera Mini'], VERSION], [

            /\s(opr)\/([\w\.]+)/i                                               // Opera Webkit
            ], [[NAME, 'Opera'], VERSION], [

            // Mixed
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,
                                                                                // Lunascape/Maxthon/Netfront/Jasmine/Blazer

            // Trident based
            /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
                                                                                // Avant/IEMobile/SlimBrowser/Baidu
            /(?:ms|\()(ie)\s([\w\.]+)/i,                                        // Internet Explorer

            // Webkit/KHTML based
            /(rekonq)\/([\w\.]+)*/i,                                            // Rekonq
            /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser)\/([\w\.-]+)/i
                                                                                // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser
            ], [NAME, VERSION], [

            /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i                         // IE11
            ], [[NAME, 'IE'], VERSION], [

            /(edge)\/((\d+)?[\w\.]+)/i                                          // Microsoft Edge
            ], [NAME, VERSION], [

            /(yabrowser)\/([\w\.]+)/i                                           // Yandex
            ], [[NAME, 'Yandex'], VERSION], [

            /(puffin)\/([\w\.]+)/i                                              // Puffin
            ], [[NAME, 'Puffin'], VERSION], [

            /(uc\s?browser)[\/\s]?([\w\.]+)/i,
            /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,
            /juc.+(ucweb)[\/\s]?([\w\.]+)/i,
            /(ucbrowser)\/([\w\.]+)/i
                                                                                // UCBrowser
            ], [[NAME, 'UCBrowser'], VERSION], [

            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
            ], [[NAME, /_/g, ' '], VERSION], [

            /(micromessenger)\/([\w\.]+)/i                                      // WeChat
            ], [[NAME, 'WeChat'], VERSION], [

            /m?(qqbrowser)[\/\s]?([\w\.]+)/i                                    // QQBrowser
            ], [NAME, VERSION], [

            /xiaomi\/miuibrowser\/([\w\.]+)/i                                   // MIUI Browser
            ], [VERSION, [NAME, 'MIUI Browser']], [

            /;fbav\/([\w\.]+);/i                                                // Facebook App for iOS & Android
            ], [VERSION, [NAME, 'Facebook']], [

            /(headlesschrome) ([\w\.]+)/i                                       // Chrome Headless
            ], [VERSION, [NAME, 'Chrome Headless']], [

            /\swv\).+(chrome)\/([\w\.]+)/i                                      // Chrome WebView
            ], [[NAME, /(.+)/, '$1 WebView'], VERSION], [

            /android.+samsungbrowser\/([\w\.]+)/i,
            /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i        // Android Browser
            ], [VERSION, [NAME, 'Android Browser']], [

            /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i
                                                                                // Chrome/OmniWeb/Arora/Tizen/Nokia
            ], [NAME, VERSION], [

            /(dolfin)\/([\w\.]+)/i                                              // Dolphin
            ], [[NAME, 'Dolphin'], VERSION], [

            /((?:android.+)crmo|crios)\/([\w\.]+)/i                             // Chrome for Android/iOS
            ], [[NAME, 'Chrome'], VERSION], [

            /(coast)\/([\w\.]+)/i                                               // Opera Coast
            ], [[NAME, 'Opera Coast'], VERSION], [

            /fxios\/([\w\.-]+)/i                                                // Firefox for iOS
            ], [VERSION, [NAME, 'Firefox']], [

            /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i                       // Mobile Safari
            ], [VERSION, [NAME, 'Mobile Safari']], [

            /version\/([\w\.]+).+?(mobile\s?safari|safari)/i                    // Safari & Safari Mobile
            ], [VERSION, NAME], [

            /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i                     // Safari < 3.0
            ], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [

            /(konqueror)\/([\w\.]+)/i,                                          // Konqueror
            /(webkit|khtml)\/([\w\.]+)/i
            ], [NAME, VERSION], [

            // Gecko based
            /(navigator|netscape)\/([\w\.-]+)/i                                 // Netscape
            ], [[NAME, 'Netscape'], VERSION], [
            /(swiftfox)/i,                                                      // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
            /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,
                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,                          // Mozilla

            // Other
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
            /(links)\s\(([\w\.]+)/i,                                            // Links
            /(gobrowser)\/?([\w\.]+)*/i,                                        // GoBrowser
            /(ice\s?browser)\/v?([\w\._]+)/i,                                   // ICE Browser
            /(mosaic)[\/\s]([\w\.]+)/i                                          // Mosaic
            ], [NAME, VERSION] ],

        cpu : [[

            /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i                     // AMD64
            ], [[ARCHITECTURE, 'amd64']], [

            /(ia32(?=;))/i                                                      // IA32 (quicktime)
            ], [[ARCHITECTURE, util.lowerize]], [

            /((?:i[346]|x)86)[;\)]/i                                            // IA32
            ], [[ARCHITECTURE, 'ia32']], [

            // PocketPC mistakenly identified as PowerPC
            /windows\s(ce|mobile);\sppc;/i
            ], [[ARCHITECTURE, 'arm']], [

            /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i                           // PowerPC
            ], [[ARCHITECTURE, /ower/, '', util.lowerize]], [

            /(sun4\w)[;\)]/i                                                    // SPARC
            ], [[ARCHITECTURE, 'sparc']], [

            /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i ], [[ARCHITECTURE, util.lowerize]]
        ],

        device : [[

            /\((ipad|playbook);[\w\s\);-]+(rim|apple)/i                         // iPad/PlayBook
            ], [MODEL, VENDOR, [TYPE, TABLET]], [

            /applecoremedia\/[\w\.]+ \((ipad)/                                  // iPad
            ], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [

            /(apple\s{0,1}tv)/i                                                 // Apple TV
            ], [[MODEL, 'Apple TV'], [VENDOR, 'Apple']], [

            /(archos)\s(gamepad2?)/i,                                           // Archos
            /(hp).+(touchpad)/i,                                                // HP TouchPad
            /(hp).+(tablet)/i,                                                  // HP Tablet
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /\s(nook)[\w\s]+build\/(\w+)/i,                                     // Nook
            /(dell)\s(strea[kpr\s\d]*[\dko])/i                                  // Dell Streak
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i                               // Kindle Fire HD
            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [
            /(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i                  // Fire Phone
            ], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [

            /\((ip[honed|\s\w*]+);.+(apple)/i                                   // iPod/iPhone
            ], [MODEL, VENDOR, [TYPE, MOBILE]], [
            /\((ip[honed|\s\w*]+);/i                                            // iPod/iPhone
            ], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [

            /(blackberry)[\s-]?(\w+)/i,                                         // BlackBerry
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
                                                                                // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Huawei/Meizu/Motorola/Polytron
            /(hp)\s([\w\s]+\w)/i,                                               // HP iPAQ
            /(asus)-?(\w+)/i                                                    // Asus
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /\(bb10;\s(\w+)/i                                                   // BlackBerry 10
            ], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [
                                                                                // Asus Tablets
            /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i
            ], [MODEL, [VENDOR, 'Asus'], [TYPE, TABLET]], [

            /(sony)\s(tablet\s[ps])\sbuild\//i,                                  // Sony
            /(sony)?(?:sgp.+)\sbuild\//i
            ], [[VENDOR, 'Sony'], [MODEL, 'Xperia Tablet'], [TYPE, TABLET]], [
            /(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i
            ], [[VENDOR, 'Sony'], [MODEL, 'Xperia Phone'], [TYPE, MOBILE]], [

            /\s(ouya)\s/i,                                                      // Ouya
            /(nintendo)\s([wids3u]+)/i                                          // Nintendo
            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [

            /android.+;\s(shield)\sbuild/i                                      // Nvidia
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [

            /(playstation\s[34portablevi]+)/i                                   // Playstation
            ], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [

            /(sprint\s(\w+))/i                                                  // Sprint Phones
            ], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [

            /(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i                         // Lenovo tablets
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,                               // HTC
            /(zte)-(\w+)*/i,                                                    // ZTE
            /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i
                                                                                // Alcatel/GeeksPhone/Huawei/Lenovo/Nexian/Panasonic/Sony
            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

            /(nexus\s9)/i                                                       // HTC Nexus 9
            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [

            /(nexus\s6p)/i                                                      // Huawei Nexus 6P
            ], [MODEL, [VENDOR, 'Huawei'], [TYPE, MOBILE]], [

            /(microsoft);\s(lumia[\s\w]+)/i                                     // Microsoft Lumia
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /[\s\(;](xbox(?:\sone)?)[\s\);]/i                                   // Microsoft Xbox
            ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [
            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
            ], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [

                                                                                // Motorola
            /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,
            /mot[\s-]?(\w+)*/i,
            /(XT\d{3,4}) build\//i,
            /(nexus\s6)/i
            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]], [
            /android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i
            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [

            /hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i            // HbbTV devices
            ], [[VENDOR, util.trim], [MODEL, util.trim], [TYPE, SMARTTV]], [

            /hbbtv.+maple;(\d+)/i
            ], [[MODEL, /^/, 'SmartTV'], [VENDOR, 'Samsung'], [TYPE, SMARTTV]], [

            /\(dtv[\);].+(aquos)/i                                              // Sharp
            ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [

            /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
            /((SM-T\w+))/i
            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]], [                  // Samsung
            /smart-tv.+(samsung)/i
            ], [VENDOR, [TYPE, SMARTTV], MODEL], [
            /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
            /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,
            /sec-((sgh\w+))/i
            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]], [

            /sie-(\w+)*/i                                                       // Siemens
            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [

            /(maemo|nokia).*(n900|lumia\s\d+)/i,                                // Nokia
            /(nokia)[\s_-]?([\w-]+)*/i
            ], [[VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]], [

            /android\s3\.[\s\w;-]{10}(a\d{3})/i                                 // Acer
            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

            /android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i                     // LG Tablet
            ], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [
            /(lg) netcast\.tv/i                                                 // LG SmartTV
            ], [VENDOR, MODEL, [TYPE, SMARTTV]], [
            /(nexus\s[45])/i,                                                   // LG
            /lg[e;\s\/-]+(\w+)*/i
            ], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [

            /android.+(ideatab[a-z0-9\-\s]+)/i                                  // Lenovo
            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [

            /linux;.+((jolla));/i                                               // Jolla
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /((pebble))app\/[\d\.]+\s/i                                         // Pebble
            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [

            /android.+;\s(oppo)\s?([\w\s]+)\sbuild/i                            // OPPO
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /crkey/i                                                            // Google Chromecast
            ], [[MODEL, 'Chromecast'], [VENDOR, 'Google']], [

            /android.+;\s(glass)\s\d/i                                          // Google Glass
            ], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [

            /android.+;\s(pixel c)\s/i                                          // Google Pixel C
            ], [MODEL, [VENDOR, 'Google'], [TYPE, TABLET]], [

            /android.+;\s(pixel xl|pixel)\s/i                                   // Google Pixel
            ], [MODEL, [VENDOR, 'Google'], [TYPE, MOBILE]], [

            /android.+(\w+)\s+build\/hm\1/i,                                    // Xiaomi Hongmi 'numeric' models
            /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,               // Xiaomi Hongmi
            /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i    // Xiaomi Mi
            ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [

            /android.+a000(1)\s+build/i                                         // OnePlus
            ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [

            /\s(tablet)[;\/]/i,                                                 // Unidentifiable Tablet
            /\s(mobile)(?:[;\/]|\ssafari)/i                                     // Unidentifiable Mobile
            ], [[TYPE, util.lowerize], VENDOR, MODEL] ],

        engine : [[

            /windows.+\sedge\/([\w\.]+)/i                                       // EdgeHTML
            ], [VERSION, [NAME, 'EdgeHTML']], [

            /(presto)\/([\w\.]+)/i,                                             // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,     // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m
            /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,                          // KHTML/Tasman/Links
            /(icab)[\/\s]([23]\.[\d\.]+)/i                                      // iCab
            ], [NAME, VERSION], [

            /rv\:([\w\.]+).*(gecko)/i                                           // Gecko
            ], [VERSION, NAME]
        ],

        os : [[

            // Windows based
            /microsoft\s(windows)\s(vista|xp)/i                                 // Windows (iTunes)
            ], [NAME, VERSION], [
            /(windows)\snt\s6\.2;\s(arm)/i,                                     // Windows RT
            /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,                  // Windows Phone
            /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
            ], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [
            /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i
            ], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [

            // Mobile/Embedded OS
            /\((bb)(10);/i                                                      // BlackBerry 10
            ], [[NAME, 'BlackBerry'], VERSION], [
            /(blackberry)\w*\/?([\w\.]+)*/i,                                    // Blackberry
            /(tizen)[\/\s]([\w\.]+)/i,                                          // Tizen
            /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
                                                                                // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki
            /linux;.+(sailfish);/i                                              // Sailfish OS
            ], [NAME, VERSION], [
            /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i                 // Symbian
            ], [[NAME, 'Symbian'], VERSION], [
            /\((series40);/i                                                    // Series 40
            ], [NAME], [
            /mozilla.+\(mobile;.+gecko.+firefox/i                               // Firefox OS
            ], [[NAME, 'Firefox OS'], VERSION], [

            // Console
            /(nintendo|playstation)\s([wids34portablevu]+)/i,                   // Nintendo/Playstation

            // GNU/Linux based
            /(mint)[\/\s\(]?(\w+)*/i,                                           // Mint
            /(mageia|vectorlinux)[;\s]/i,                                       // Mageia/VectorLinux
            /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,
                                                                                // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
                                                                                // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
            /(hurd|linux)\s?([\w\.]+)*/i,                                       // Hurd/Linux
            /(gnu)\s?([\w\.]+)*/i                                               // GNU
            ], [NAME, VERSION], [

            /(cros)\s[\w]+\s([\w\.]+\w)/i                                       // Chromium OS
            ], [[NAME, 'Chromium OS'], VERSION],[

            // Solaris
            /(sunos)\s?([\w\.]+\d)*/i                                           // Solaris
            ], [[NAME, 'Solaris'], VERSION], [

            // BSD based
            /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i                   // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
            ], [NAME, VERSION],[

            /(haiku)\s(\w+)/i                                                  // Haiku
            ], [NAME, VERSION],[

            /(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i              // iOS
            ], [[NAME, 'iOS'], [VERSION, /_/g, '.']], [

            /(mac\sos\sx)\s?([\w\s\.]+\w)*/i,
            /(macintosh|mac(?=_powerpc)\s)/i                                    // Mac OS
            ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

            // Other
            /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,                            // Solaris
            /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,                               // AIX
            /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
                                                                                // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS
            /(unix)\s?([\w\.]+)*/i                                              // UNIX
            ], [NAME, VERSION]
        ]
    };


    /////////////////
    // Constructor
    ////////////////

    var Browser = function (name, version) {
        this[NAME] = name;
        this[VERSION] = version;
    };
    var CPU = function (arch) {
        this[ARCHITECTURE] = arch;
    };
    var Device = function (vendor, model, type) {
        this[VENDOR] = vendor;
        this[MODEL] = model;
        this[TYPE] = type;
    };
    var Engine = Browser;
    var OS = Browser;

    var UAParser = function (uastring, extensions) {

        if (!(this instanceof UAParser)) {
            return new UAParser(uastring, extensions).getResult();
        }

        var ua = uastring || ((window && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
        var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;
        var browser = new Browser();
        var cpu = new CPU();
        var device = new Device();
        var engine = new Engine();
        var os = new OS();

        this.getBrowser = function () {
            mapper.rgx.call(browser, ua, rgxmap.browser);
            browser.major = util.major(browser.version); // deprecated
            return browser;
        };
        this.getCPU = function () {
            mapper.rgx.call(cpu, ua, rgxmap.cpu);
            return cpu;
        };
        this.getDevice = function () {
            mapper.rgx.call(device, ua, rgxmap.device);
            return device;
        };
        this.getEngine = function () {
            mapper.rgx.call(engine, ua, rgxmap.engine);
            return engine;
        };
        this.getOS = function () {
            mapper.rgx.call(os, ua, rgxmap.os);
            return os;
        };
        this.getResult = function () {
            return {
                ua      : this.getUA(),
                browser : this.getBrowser(),
                engine  : this.getEngine(),
                os      : this.getOS(),
                device  : this.getDevice(),
                cpu     : this.getCPU()
            };
        };
        this.getUA = function () {
            return ua;
        };
        this.setUA = function (uastring) {
            ua = uastring;
            browser = new Browser();
            cpu = new CPU();
            device = new Device();
            engine = new Engine();
            os = new OS();
            return this;
        };
        return this;
    };

    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER = {
        NAME    : NAME,
        MAJOR   : MAJOR, // deprecated
        VERSION : VERSION
    };
    UAParser.CPU = {
        ARCHITECTURE : ARCHITECTURE
    };
    UAParser.DEVICE = {
        MODEL   : MODEL,
        VENDOR  : VENDOR,
        TYPE    : TYPE,
        CONSOLE : CONSOLE,
        MOBILE  : MOBILE,
        SMARTTV : SMARTTV,
        TABLET  : TABLET,
        WEARABLE: WEARABLE,
        EMBEDDED: EMBEDDED
    };
    UAParser.ENGINE = {
        NAME    : NAME,
        VERSION : VERSION
    };
    UAParser.OS = {
        NAME    : NAME,
        VERSION : VERSION
    };
    //UAParser.Utils = util;

    ///////////
    // Export
    //////////


    // check js environment
    if ('object' !== UNDEF_TYPE) {
        // nodejs env
        if ('object' !== UNDEF_TYPE && module.exports) {
            exports = module.exports = UAParser;
        }
        exports.UAParser = UAParser;
    } else {
        // requirejs env (optional)
        if (typeof(undefined) === FUNC_TYPE && undefined.amd) {
            undefined(function () {
                return UAParser;
            });
        } else {
            // browser env
            window.UAParser = UAParser;
        }
    }

    // jQuery/Zepto specific (optional)
    // Note:
    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
    //   and we should catch that.
    var $ = window.jQuery || window.Zepto;
    if (typeof $ !== UNDEF_TYPE) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function () {
            return parser.getUA();
        };
        $.ua.set = function (uastring) {
            parser.setUA(uastring);
            var result = parser.getResult();
            for (var prop in result) {
                $.ua[prop] = result[prop];
            }
        };
    }

})(typeof window === 'object' ? window : commonjsGlobal);
});

var index$4 = function () {
    var arguments$1 = arguments;

    for (var i = 0; i < arguments.length; i++) {
        if (arguments$1[i] !== undefined) { return arguments$1[i]; }
    }
};

var createError = createCommonjsModule(function (module, exports) {
//     create-error.js 0.3.1
//     (c) 2013 Tim Griesser
//     This source may be freely distributed under the MIT license.
(function(factory) {

"use strict";

// A simple utility for subclassing the "Error"
// object in multiple environments, while maintaining
// relevant stack traces, messages, and prototypes.
factory(function() {

var toString = Object.prototype.toString;

// Creates an new error type with a "name",
// and any additional properties that should be set
// on the error instance.
return function() {
  var arguments$1 = arguments;

  var args = new Array(arguments.length);
  for (var i = 0; i < args.length; ++i) {
    args[i] = arguments$1[i];
  }
  var name       = getName(args);
  var target     = getTarget(args);
  var properties = getProps(args);
  function ErrorCtor(message, obj) {
    attachProps(this, properties);
    attachProps(this, obj);
    this.message = (message || this.message);
    if (message instanceof Error) {
      this.message = message.message;
      this.stack = message.stack;
    } else if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
  function Err() { this.constructor = ErrorCtor; }
  Err.prototype = target['prototype'];
  ErrorCtor.prototype = new Err();
  ErrorCtor.prototype.name = ('' + name) || 'CustomError';
  return ErrorCtor;
};

// Just a few helpers to clean up the function above
// https://github.com/petkaantonov/bluebird/wiki/Optimization-killers
function getName(args) {
  if (args.length === 0) { return ''; }
  return isError(args[0]) ? (args[1] || '') : args[0];
}
function getTarget(args) {
  if (args.length === 0) { return Error; }
  return isError(args[0]) ? args[0] : Error;
}
function getProps(args) {
  if (args.length === 0) { return null; }
  return isError(args[0]) ? args[2] : args[1];
}
function inheritedKeys(obj) {
  var ret = [];
  for (var key in obj) {
    ret.push(key);
  }
  return ret;
}

// Right now we're just assuming that a function in the first argument is an error.
function isError(obj) {
  return (typeof obj === "function");
}

// We don't need the full underscore check here, since it should either be
// an object-literal, or nothing at all.
function isObject(obj) {
  return (obj && typeof obj === "object" && toString.call(obj) === "[object Object]");
}

// Used to attach attributes to the error object in the constructor.
function attachProps(context, target) {
  if (isObject(target)) {
    var keys = inheritedKeys(target);
    for (var i = 0, l = keys.length; i < l; ++i) {
      context[keys[i]] = clone(target[keys[i]]);
    }
  }
}

// Don't need the full-out "clone" mechanism here, since if you're
// trying to set things other than empty arrays/objects on your
// sub-classed `Error` object, you're probably doing it wrong.
function clone(target) {
  if (target == null || typeof target !== "object") { return target; }
  var cloned = target.constructor ? target.constructor() : Object.create(null);
  for (var attr in target) {
    if (target.hasOwnProperty(attr)) {
      cloned[attr] = target[attr];
    }
  }
  return cloned;
}

});

// Boilerplate UMD definition block...
})(function(createErrorLib) {
  if (typeof undefined === "function" && undefined.amd) {
    undefined(createErrorLib);
  } else {
    module.exports = createErrorLib();
  }
});
});

/**
 * Module wrapper of @substack's `caller.js`
 * @original: https://github.com/substack/node-resolve/blob/master/lib/caller.js
 * @blessings: https://twitter.com/eriktoth/statuses/413719312273125377
 * @see https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi
 */
var index$5 = function (depth) {
    var pst, stack, file, frame;

    pst = Error.prepareStackTrace;
    Error.prepareStackTrace = function (_, stack) {
        Error.prepareStackTrace = pst;
        return stack;
    };

    stack = (new Error()).stack;
    depth = !depth || isNaN(depth) ? 1 : (depth > stack.length - 2 ? stack.length - 2 : depth);
    stack = stack.slice(depth + 1);

    do {
        frame = stack.shift();
        file = frame && frame.getFileName();
    } while (stack.length && file === 'module.js');

    return file;
};

var DASH = '- ';
var SEPARATOR = '<br/>' + DASH;

function arrayToString (array) {
  if (array.length > 0) {
    var lines = [];

    array.forEach(function (element) {
      if (element && element.toString) {
        lines.push(element.toString());
      }
    });

    return DASH + lines.join(SEPARATOR)
  }
}

function objectToString$1 (object, options) {
  var propertyNames = Object.getOwnPropertyNames(object);
  var excludes = (options && options.excludes) || null;
  var lines = [];
  var sLines;

  if (propertyNames.length > 0) {
    var exclude = false;

    propertyNames.forEach(function (name) {
      if (excludes) {
        exclude = excludes.indexOf(name) >= 0;
      }

      if (!exclude && object[name] && object[name].toString) {
        lines.push(object[name].toString());
      }
    });
  }

  if (lines.length === 1) {
    sLines = lines.join();
  } else if (lines.length > 1) {
    sLines = DASH + lines.join(SEPARATOR);
  }

  return sLines
}

var pretty$1 = function (anything, options) {
  if (anything === null) {
    return 'null'
  } else if (typeof anything === 'undefined') {
    return 'undefined'
  } else if (typeof anything === 'string') {
    return anything
  } else if (Array.isArray(anything)) {
    return arrayToString(anything)
  } else if (typeof anything === 'object') {
    return objectToString$1(anything, options)
  } else {
    return anything.toString()
  }
};

var index$6 = createCommonjsModule(function (module) {
/**
 * Expose `Emitter`.
 */

{
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) { return mixin(obj); }
}

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) { return this; }

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  var this$1 = this;

  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this$1, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};
});

/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isObject$2(obj) {
  return null !== obj && 'object' === typeof obj;
}

var isObject_1 = isObject$2;

/**
 * Module of mixed-in functions shared between node and client code
 */


/**
 * Expose `RequestBase`.
 */

var requestBase = RequestBase;

/**
 * Initialize a new `RequestBase`.
 *
 * @api public
 */

function RequestBase(obj) {
  if (obj) { return mixin(obj); }
}

/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in RequestBase.prototype) {
    obj[key] = RequestBase.prototype[key];
  }
  return obj;
}

/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.clearTimeout = function _clearTimeout(){
  clearTimeout(this._timer);
  clearTimeout(this._responseTimeoutTimer);
  delete this._timer;
  delete this._responseTimeoutTimer;
  return this;
};

/**
 * Override default response body parser
 *
 * This function will be called to convert incoming data into request.body
 *
 * @param {Function}
 * @api public
 */

RequestBase.prototype.parse = function parse(fn){
  this._parser = fn;
  return this;
};

/**
 * Set format of binary response body.
 * In browser valid formats are 'blob' and 'arraybuffer',
 * which return Blob and ArrayBuffer, respectively.
 *
 * In Node all values result in Buffer.
 *
 * Examples:
 *
 *      req.get('/')
 *        .responseType('blob')
 *        .end(callback);
 *
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.responseType = function(val){
  this._responseType = val;
  return this;
};

/**
 * Override default request body serializer
 *
 * This function will be called to convert data set via .send or .attach into payload to send
 *
 * @param {Function}
 * @api public
 */

RequestBase.prototype.serialize = function serialize(fn){
  this._serializer = fn;
  return this;
};

/**
 * Set timeouts.
 *
 * - response timeout is time between sending request and receiving the first byte of the response. Includes DNS and connection time.
 * - deadline is the time from start of the request to receiving response body in full. If the deadline is too short large files may not load at all on slow connections.
 *
 * Value of 0 or false means no timeout.
 *
 * @param {Number|Object} ms or {response, read, deadline}
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.timeout = function timeout(options){
  var this$1 = this;

  if (!options || 'object' !== typeof options) {
    this._timeout = options;
    this._responseTimeout = 0;
    return this;
  }

  for(var option in options) {
    switch(option) {
      case 'deadline':
        this$1._timeout = options.deadline;
        break;
      case 'response':
        this$1._responseTimeout = options.response;
        break;
      default:
        console.warn("Unknown timeout option", option);
    }
  }
  return this;
};

/**
 * Set number of retry attempts on error.
 *
 * Failed requests will be retried 'count' times if timeout or err.code >= 500.
 *
 * @param {Number} count
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.retry = function retry(count){
  // Default to 1 if no count passed or true
  if (arguments.length === 0 || count === true) { count = 1; }
  if (count <= 0) { count = 0; }
  this._maxRetries = count;
  this._retries = 0;
  return this;
};

/**
 * Retry request
 *
 * @return {Request} for chaining
 * @api private
 */

RequestBase.prototype._retry = function() {
  this.clearTimeout();

  // node
  if (this.req) {
    this.req = null;
    this.req = this.request();
  }

  this._aborted = false;
  this.timedout = false;

  return this._end();
};

/**
 * Promise support
 *
 * @param {Function} resolve
 * @param {Function} [reject]
 * @return {Request}
 */

RequestBase.prototype.then = function then(resolve, reject) {
  if (!this._fullfilledPromise) {
    var self = this;
    if (this._endCalled) {
      console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises");
    }
    this._fullfilledPromise = new Promise(function(innerResolve, innerReject){
      self.end(function(err, res){
        if (err) { innerReject(err); } else { innerResolve(res); }
      });
    });
  }
  return this._fullfilledPromise.then(resolve, reject);
};

RequestBase.prototype.catch = function(cb) {
  return this.then(undefined, cb);
};

/**
 * Allow for extension
 */

RequestBase.prototype.use = function use(fn) {
  fn(this);
  return this;
};

RequestBase.prototype.ok = function(cb) {
  if ('function' !== typeof cb) { throw Error("Callback required"); }
  this._okCallback = cb;
  return this;
};

RequestBase.prototype._isResponseOK = function(res) {
  if (!res) {
    return false;
  }

  if (this._okCallback) {
    return this._okCallback(res);
  }

  return res.status >= 200 && res.status < 300;
};


/**
 * Get request header `field`.
 * Case-insensitive.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

RequestBase.prototype.get = function(field){
  return this._header[field.toLowerCase()];
};

/**
 * Get case-insensitive header `field` value.
 * This is a deprecated internal API. Use `.get(field)` instead.
 *
 * (getHeader is no longer used internally by the superagent code base)
 *
 * @param {String} field
 * @return {String}
 * @api private
 * @deprecated
 */

RequestBase.prototype.getHeader = RequestBase.prototype.get;

/**
 * Set header `field` to `val`, or multiple fields with one object.
 * Case-insensitive.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.set = function(field, val){
  var this$1 = this;

  if (isObject_1(field)) {
    for (var key in field) {
      this$1.set(key, field[key]);
    }
    return this;
  }
  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};

/**
 * Remove header `field`.
 * Case-insensitive.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field
 */
RequestBase.prototype.unset = function(field){
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};

/**
 * Write the field `name` and `val`, or multiple fields with one object
 * for "multipart/form-data" request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 *
 * request.post('/upload')
 *   .field({ foo: 'bar', baz: 'qux' })
 *   .end(callback);
 * ```
 *
 * @param {String|Object} name
 * @param {String|Blob|File|Buffer|fs.ReadStream} val
 * @return {Request} for chaining
 * @api public
 */
RequestBase.prototype.field = function(name, val) {
  var this$1 = this;


  // name should be either a string or an object.
  if (null === name ||  undefined === name) {
    throw new Error('.field(name, val) name can not be empty');
  }

  if (this._data) {
    console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObject_1(name)) {
    for (var key in name) {
      this$1.field(key, name[key]);
    }
    return this;
  }

  if (Array.isArray(val)) {
    for (var i in val) {
      this$1.field(name, val[i]);
    }
    return this;
  }

  // val should be defined now
  if (null === val || undefined === val) {
    throw new Error('.field(name, val) val can not be empty');
  }
  if ('boolean' === typeof val) {
    val = '' + val;
  }
  this._getFormData().append(name, val);
  return this;
};

/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request}
 * @api public
 */
RequestBase.prototype.abort = function(){
  if (this._aborted) {
    return this;
  }
  this._aborted = true;
  this.xhr && this.xhr.abort(); // browser
  this.req && this.req.abort(); // node
  this.clearTimeout();
  this.emit('abort');
  return this;
};

/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */

RequestBase.prototype.withCredentials = function(on){
  // This is browser-only functionality. Node side is no-op.
  if(on==undefined) { on = true; }
  this._withCredentials = on;
  return this;
};

/**
 * Set the max redirects to `n`. Does noting in browser XHR implementation.
 *
 * @param {Number} n
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.redirects = function(n){
  this._maxRedirects = n;
  return this;
};

/**
 * Convert to a plain javascript object (not JSON string) of scalar properties.
 * Note as this method is designed to return a useful non-this value,
 * it cannot be chained.
 *
 * @return {Object} describing method, url, and data of this request
 * @api public
 */

RequestBase.prototype.toJSON = function(){
  return {
    method: this.method,
    url: this.url,
    data: this._data,
    headers: this._header
  };
};


/**
 * Send `data` as the request body, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"}')
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
 *      request.post('/user')
 *        .send('name=tobi')
 *        .send('species=ferret')
 *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.send = function(data){
  var this$1 = this;

  var isObj = isObject_1(data);
  var type = this._header['content-type'];

  if (this._formData) {
    console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObj && !this._data) {
    if (Array.isArray(data)) {
      this._data = [];
    } else if (!this._isHost(data)) {
      this._data = {};
    }
  } else if (data && this._data && this._isHost(this._data)) {
    throw Error("Can't merge these send calls");
  }

  // merge
  if (isObj && isObject_1(this._data)) {
    for (var key in data) {
      this$1._data[key] = data[key];
    }
  } else if ('string' == typeof data) {
    // default to x-www-form-urlencoded
    if (!type) { this.type('form'); }
    type = this._header['content-type'];
    if ('application/x-www-form-urlencoded' == type) {
      this._data = this._data
        ? this._data + '&' + data
        : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!isObj || this._isHost(data)) {
    return this;
  }

  // default to json
  if (!type) { this.type('json'); }
  return this;
};


/**
 * Sort `querystring` by the sort function
 *
 *
 * Examples:
 *
 *       // default order
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery()
 *         .end(callback)
 *
 *       // customized sort function
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery(function(a, b){
 *           return a.length - b.length;
 *         })
 *         .end(callback)
 *
 *
 * @param {Function} sort
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.sortQuery = function(sort) {
  // _sort default to true but otherwise can be a function or boolean
  this._sort = typeof sort === 'undefined' ? true : sort;
  return this;
};

/**
 * Invoke callback with timeout error.
 *
 * @api private
 */

RequestBase.prototype._timeoutError = function(reason, timeout, errno){
  if (this._aborted) {
    return;
  }
  var err = new Error(reason + timeout + 'ms exceeded');
  err.timeout = timeout;
  err.code = 'ECONNABORTED';
  err.errno = errno;
  this.timedout = true;
  this.abort();
  this.callback(err);
};

RequestBase.prototype._setTimeouts = function() {
  var self = this;

  // deadline
  if (this._timeout && !this._timer) {
    this._timer = setTimeout(function(){
      self._timeoutError('Timeout of ', self._timeout, 'ETIME');
    }, this._timeout);
  }
  // response timeout
  if (this._responseTimeout && !this._responseTimeoutTimer) {
    this._responseTimeoutTimer = setTimeout(function(){
      self._timeoutError('Response timeout of ', self._responseTimeout, 'ETIMEDOUT');
    }, this._responseTimeout);
  }
};

/**
 * Check if `fn` is a function.
 *
 * @param {Function} fn
 * @return {Boolean}
 * @api private
 */


function isFunction$1(fn) {
  var tag = isObject_1(fn) ? Object.prototype.toString.call(fn) : '';
  return tag === '[object Function]';
}

var isFunction_1 = isFunction$1;

/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

var type = function(str){
  return str.split(/ *; */).shift();
};

/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

var params = function(str){
  return str.split(/ *; */).reduce(function(obj, str){
    var parts = str.split(/ *= */);
    var key = parts.shift();
    var val = parts.shift();

    if (key && val) { obj[key] = val; }
    return obj;
  }, {});
};

/**
 * Parse Link header fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

var parseLinks = function(str){
  return str.split(/ *, */).reduce(function(obj, str){
    var parts = str.split(/ *; */);
    var url = parts[0].slice(1, -1);
    var rel = parts[1].split(/ *= */)[1].slice(1, -1);
    obj[rel] = url;
    return obj;
  }, {});
};

/**
 * Strip content related fields from `header`.
 *
 * @param {Object} header
 * @return {Object} header
 * @api private
 */

var cleanHeader = function(header, shouldStripCookie){
  delete header['content-type'];
  delete header['content-length'];
  delete header['transfer-encoding'];
  delete header['host'];
  if (shouldStripCookie) {
    delete header['cookie'];
  }
  return header;
};

var utils = {
	type: type,
	params: params,
	parseLinks: parseLinks,
	cleanHeader: cleanHeader
};

/**
 * Module dependencies.
 */



/**
 * Expose `ResponseBase`.
 */

var responseBase = ResponseBase;

/**
 * Initialize a new `ResponseBase`.
 *
 * @api public
 */

function ResponseBase(obj) {
  if (obj) { return mixin$1(obj); }
}

/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin$1(obj) {
  for (var key in ResponseBase.prototype) {
    obj[key] = ResponseBase.prototype[key];
  }
  return obj;
}

/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

ResponseBase.prototype.get = function(field){
    return this.header[field.toLowerCase()];
};

/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */

ResponseBase.prototype._setHeaderProperties = function(header){
    var this$1 = this;

    // TODO: moar!
    // TODO: make this a util

    // content-type
    var ct = header['content-type'] || '';
    this.type = utils.type(ct);

    // params
    var params = utils.params(ct);
    for (var key in params) { this$1[key] = params[key]; }

    this.links = {};

    // links
    try {
        if (header.link) {
            this.links = utils.parseLinks(header.link);
        }
    } catch (err) {
        // ignore
    }
};

/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */

ResponseBase.prototype._setStatusProperties = function(status){
    var type = status / 100 | 0;

    // status / class
    this.status = this.statusCode = status;
    this.statusType = type;

    // basics
    this.info = 1 == type;
    this.ok = 2 == type;
    this.redirect = 3 == type;
    this.clientError = 4 == type;
    this.serverError = 5 == type;
    this.error = (4 == type || 5 == type)
        ? this.toError()
        : false;

    // sugar
    this.accepted = 202 == status;
    this.noContent = 204 == status;
    this.badRequest = 400 == status;
    this.unauthorized = 401 == status;
    this.notAcceptable = 406 == status;
    this.forbidden = 403 == status;
    this.notFound = 404 == status;
};

var ERROR_CODES = [
  'ECONNRESET',
  'ETIMEDOUT',
  'EADDRINFO',
  'ESOCKETTIMEDOUT'
];

/**
 * Determine if a request should be retried.
 * (Borrowed from segmentio/superagent-retry)
 *
 * @param {Error} err
 * @param {Response} [res]
 * @returns {Boolean}
 */
var shouldRetry = function shouldRetry(err, res) {
  if (err && err.code && ~ERROR_CODES.indexOf(err.code)) { return true; }
  if (res && res.status && res.status >= 500) { return true; }
  // Superagent timeout
  if (err && 'timeout' in err && err.code == 'ECONNABORTED') { return true; }
  if (err && 'crossDomain' in err) { return true; }
  return false;
};

var client = createCommonjsModule(function (module, exports) {
/**
 * Root reference for iframes.
 */

var root;
if (typeof window !== 'undefined') { // Browser window
  root = window;
} else if (typeof self !== 'undefined') { // Web Worker
  root = self;
} else { // Other environments
  console.warn("Using browser-only version of superagent in non-browser environment");
  root = commonjsGlobal;
}








/**
 * Noop.
 */

function noop(){}

/**
 * Expose `request`.
 */

var request = exports = module.exports = function(method, url) {
  // callback
  if ('function' == typeof url) {
    return new exports.Request('GET', method).end(url);
  }

  // url first
  if (1 == arguments.length) {
    return new exports.Request('GET', method);
  }

  return new exports.Request(method, url);
};

exports.Request = Request;

/**
 * Determine XHR.
 */

request.getXHR = function () {
  if (root.XMLHttpRequest
      && (!root.location || 'file:' != root.location.protocol
          || !root.ActiveXObject)) {
    return new XMLHttpRequest;
  } else {
    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
  }
  throw Error("Browser-only verison of superagent could not find XHR");
};

/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */

var trim = ''.trim
  ? function(s) { return s.trim(); }
  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject_1(obj)) { return obj; }
  var pairs = [];
  for (var key in obj) {
    pushEncodedKeyValuePair(pairs, key, obj[key]);
  }
  return pairs.join('&');
}

/**
 * Helps 'serialize' with serializing arrays.
 * Mutates the pairs array.
 *
 * @param {Array} pairs
 * @param {String} key
 * @param {Mixed} val
 */

function pushEncodedKeyValuePair(pairs, key, val) {
  if (val != null) {
    if (Array.isArray(val)) {
      val.forEach(function(v) {
        pushEncodedKeyValuePair(pairs, key, v);
      });
    } else if (isObject_1(val)) {
      for(var subkey in val) {
        pushEncodedKeyValuePair(pairs, key + '[' + subkey + ']', val[subkey]);
      }
    } else {
      pairs.push(encodeURIComponent(key)
        + '=' + encodeURIComponent(val));
    }
  } else if (val === null) {
    pairs.push(encodeURIComponent(key));
  }
}

/**
 * Expose serialization method.
 */

 request.serializeObject = serialize;

 /**
  * Parse the given x-www-form-urlencoded `str`.
  *
  * @param {String} str
  * @return {Object}
  * @api private
  */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var pair;
  var pos;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    pos = pair.indexOf('=');
    if (pos == -1) {
      obj[decodeURIComponent(pair)] = '';
    } else {
      obj[decodeURIComponent(pair.slice(0, pos))] =
        decodeURIComponent(pair.slice(pos + 1));
    }
  }

  return obj;
}

/**
 * Expose parser.
 */

request.parseString = parseString;

/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'application/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  'form': 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};

/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

 request.serialize = {
   'application/x-www-form-urlencoded': serialize,
   'application/json': JSON.stringify
 };

 /**
  * Default parsers.
  *
  *     superagent.parse['application/xml'] = function(str){
  *       return { object parsed from str };
  *     };
  *
  */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse
};

/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  lines.pop(); // trailing CRLF

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');
    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}

/**
 * Check if `mime` is json or has +json structured syntax suffix.
 *
 * @param {String} mime
 * @return {Boolean}
 * @api private
 */

function isJSON(mime) {
  return /[\/+]json\b/.test(mime);
}

/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */

function Response(req) {
  this.req = req;
  this.xhr = this.req.xhr;
  // responseText is accessible only if responseType is '' or 'text' and on older browsers
  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
     ? this.xhr.responseText
     : null;
  this.statusText = this.req.xhr.statusText;
  var status = this.xhr.status;
  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
  if (status === 1223) {
      status = 204;
  }
  this._setStatusProperties(status);
  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.
  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
  this._setHeaderProperties(this.header);

  if (null === this.text && req._responseType) {
    this.body = this.xhr.response;
  } else {
    this.body = this.req.method != 'HEAD'
      ? this._parseBody(this.text ? this.text : this.xhr.response)
      : null;
  }
}

responseBase(Response.prototype);

/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype._parseBody = function(str){
  var parse = request.parse[this.type];
  if(this.req._parser) {
    return this.req._parser(this, str);
  }
  if (!parse && isJSON(this.type)) {
    parse = request.parse['application/json'];
  }
  return parse && str && (str.length || str instanceof Object)
    ? parse(str)
    : null;
};

/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */

Response.prototype.toError = function(){
  var req = this.req;
  var method = req.method;
  var url = req.url;

  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;

  return err;
};

/**
 * Expose `Response`.
 */

request.Response = Response;

/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {}; // preserves header name case
  this._header = {}; // coerces header names to lowercase
  this.on('end', function(){
    var err = null;
    var res = null;

    try {
      res = new Response(self);
    } catch(e) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = e;
      // issue #675: return the raw response if the response parsing fails
      if (self.xhr) {
        // ie9 doesn't have 'response' property
        err.rawResponse = typeof self.xhr.responseType == 'undefined' ? self.xhr.responseText : self.xhr.response;
        // issue #876: return the http status code if the response parsing fails
        err.status = self.xhr.status ? self.xhr.status : null;
        err.statusCode = err.status; // backwards-compat only
      } else {
        err.rawResponse = null;
        err.status = null;
      }

      return self.callback(err);
    }

    self.emit('response', res);

    var new_err;
    try {
      if (!self._isResponseOK(res)) {
        new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
        new_err.original = err;
        new_err.response = res;
        new_err.status = res.status;
      }
    } catch(e) {
      new_err = e; // #985 touching res may cause INVALID_STATE_ERR on old Android
    }

    // #1000 don't catch errors from the callback to avoid double calling it
    if (new_err) {
      self.callback(new_err, res);
    } else {
      self.callback(null, res);
    }
  });
}

/**
 * Mixin `Emitter` and `RequestBase`.
 */

index$6(Request.prototype);
requestBase(Request.prototype);

/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function(type){
  this.set('Content-Type', request.types[type] || type);
  return this;
};

/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.accept = function(type){
  this.set('Accept', request.types[type] || type);
  return this;
};

/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} [pass] optional in case of using 'bearer' as type
 * @param {Object} options with 'type' property 'auto', 'basic' or 'bearer' (default 'basic')
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.auth = function(user, pass, options){
  if (typeof pass === 'object' && pass !== null) { // pass is optional and can substitute for options
    options = pass;
  }
  if (!options) {
    options = {
      type: 'function' === typeof btoa ? 'basic' : 'auto',
    };
  }

  switch (options.type) {
    case 'basic':
      this.set('Authorization', 'Basic ' + btoa(user + ':' + pass));
    break;

    case 'auto':
      this.username = user;
      this.password = pass;
    break;
      
    case 'bearer': // usage would be .auth(accessToken, { type: 'bearer' })
      this.set('Authorization', 'Bearer ' + user);
    break;  
  }
  return this;
};

/**
 * Add query-string `val`.
 *
 * Examples:
 *
 *   request.get('/shoes')
 *     .query('size=10')
 *     .query({ color: 'blue' })
 *
 * @param {Object|String} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.query = function(val){
  if ('string' != typeof val) { val = serialize(val); }
  if (val) { this._query.push(val); }
  return this;
};

/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `options` (or filename).
 *
 * ``` js
 * request.post('/upload')
 *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String|Object} options
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.attach = function(field, file, options){
  if (file) {
    if (this._data) {
      throw Error("superagent can't mix .send() and .attach()");
    }

    this._getFormData().append(field, file, options || file.name);
  }
  return this;
};

Request.prototype._getFormData = function(){
  if (!this._formData) {
    this._formData = new root.FormData();
  }
  return this._formData;
};

/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */

Request.prototype.callback = function(err, res){
  // console.log(this._retries, this._maxRetries)
  if (this._maxRetries && this._retries++ < this._maxRetries && shouldRetry(err, res)) {
    return this._retry();
  }

  var fn = this._callback;
  this.clearTimeout();

  if (err) {
    if (this._maxRetries) { err.retries = this._retries - 1; }
    this.emit('error', err);
  }

  fn(err, res);
};

/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */

Request.prototype.crossDomainError = function(){
  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
  err.crossDomain = true;

  err.status = this.status;
  err.method = this.method;
  err.url = this.url;

  this.callback(err);
};

// This only warns, because the request is still likely to work
Request.prototype.buffer = Request.prototype.ca = Request.prototype.agent = function(){
  console.warn("This is not supported in browser version of superagent");
  return this;
};

// This throws, because it can't send/receive data as expected
Request.prototype.pipe = Request.prototype.write = function(){
  throw Error("Streaming is not supported in browser version of superagent");
};

/**
 * Compose querystring to append to req.url
 *
 * @api private
 */

Request.prototype._appendQueryString = function(){
  var query = this._query.join('&');
  if (query) {
    this.url += (this.url.indexOf('?') >= 0 ? '&' : '?') + query;
  }

  if (this._sort) {
    var index = this.url.indexOf('?');
    if (index >= 0) {
      var queryArr = this.url.substring(index + 1).split('&');
      if (isFunction_1(this._sort)) {
        queryArr.sort(this._sort);
      } else {
        queryArr.sort();
      }
      this.url = this.url.substring(0, index) + '?' + queryArr.join('&');
    }
  }
};

/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */
Request.prototype._isHost = function _isHost(obj) {
  // Native objects stringify to [object File], [object Blob], [object FormData], etc.
  return obj && 'object' === typeof obj && !Array.isArray(obj) && Object.prototype.toString.call(obj) !== '[object Object]';
};

/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.end = function(fn){
  if (this._endCalled) {
    console.warn("Warning: .end() was called twice. This is not supported in superagent");
  }
  this._endCalled = true;

  // store callback
  this._callback = fn || noop;

  // querystring
  this._appendQueryString();

  return this._end();
};

Request.prototype._end = function() {
  var this$1 = this;

  var self = this;
  var xhr = this.xhr = request.getXHR();
  var data = this._formData || this._data;

  this._setTimeouts();

  // state change
  xhr.onreadystatechange = function(){
    var readyState = xhr.readyState;
    if (readyState >= 2 && self._responseTimeoutTimer) {
      clearTimeout(self._responseTimeoutTimer);
    }
    if (4 != readyState) {
      return;
    }

    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
    // result in the error "Could not complete the operation due to error c00c023f"
    var status;
    try { status = xhr.status; } catch(e) { status = 0; }

    if (!status) {
      if (self.timedout || self._aborted) { return; }
      return self.crossDomainError();
    }
    self.emit('end');
  };

  // progress
  var handleProgress = function(direction, e) {
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;
    }
    e.direction = direction;
    self.emit('progress', e);
  };
  if (this.hasListeners('progress')) {
    try {
      xhr.onprogress = handleProgress.bind(null, 'download');
      if (xhr.upload) {
        xhr.upload.onprogress = handleProgress.bind(null, 'upload');
      }
    } catch(e) {
      // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
      // Reported here:
      // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
    }
  }

  // initiate request
  try {
    if (this.username && this.password) {
      xhr.open(this.method, this.url, true, this.username, this.password);
    } else {
      xhr.open(this.method, this.url, true);
    }
  } catch (err) {
    // see #1149
    return this.callback(err);
  }

  // CORS
  if (this._withCredentials) { xhr.withCredentials = true; }

  // body
  if (!this._formData && 'GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !this._isHost(data)) {
    // serialize stuff
    var contentType = this._header['content-type'];
    var serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];
    if (!serialize && isJSON(contentType)) {
      serialize = request.serialize['application/json'];
    }
    if (serialize) { data = serialize(data); }
  }

  // set header fields
  for (var field in this$1.header) {
    if (null == this$1.header[field]) { continue; }

    if (this$1.header.hasOwnProperty(field))
      { xhr.setRequestHeader(field, this$1.header[field]); }
  }

  if (this._responseType) {
    xhr.responseType = this._responseType;
  }

  // send stuff
  this.emit('request', this);

  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
  // We need null here if data is undefined
  xhr.send(typeof data !== 'undefined' ? data : null);
  return this;
};

/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.get = function(url, data, fn){
  var req = request('GET', url);
  if ('function' == typeof data) { fn = data, data = null; }
  if (data) { req.query(data); }
  if (fn) { req.end(fn); }
  return req;
};

/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.head = function(url, data, fn){
  var req = request('HEAD', url);
  if ('function' == typeof data) { fn = data, data = null; }
  if (data) { req.send(data); }
  if (fn) { req.end(fn); }
  return req;
};

/**
 * OPTIONS query to `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.options = function(url, data, fn){
  var req = request('OPTIONS', url);
  if ('function' == typeof data) { fn = data, data = null; }
  if (data) { req.send(data); }
  if (fn) { req.end(fn); }
  return req;
};

/**
 * DELETE `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

function del(url, data, fn){
  var req = request('DELETE', url);
  if ('function' == typeof data) { fn = data, data = null; }
  if (data) { req.send(data); }
  if (fn) { req.end(fn); }
  return req;
}

request['del'] = del;
request['delete'] = del;

/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.patch = function(url, data, fn){
  var req = request('PATCH', url);
  if ('function' == typeof data) { fn = data, data = null; }
  if (data) { req.send(data); }
  if (fn) { req.end(fn); }
  return req;
};

/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.post = function(url, data, fn){
  var req = request('POST', url);
  if ('function' == typeof data) { fn = data, data = null; }
  if (data) { req.send(data); }
  if (fn) { req.end(fn); }
  return req;
};

/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.put = function(url, data, fn){
  var req = request('PUT', url);
  if ('function' == typeof data) { fn = data, data = null; }
  if (data) { req.send(data); }
  if (fn) { req.end(fn); }
  return req;
};
});

var CACHE_KEY = 'alias';

var Resource = function (options) {
  var cache = {};

  function applyDefaultValue (videomail, name) {
    if (options.defaults[name] && !videomail[name]) {
      videomail[name] = options.defaults[name];
    }

    return videomail
  }

  function applyDefaultValues (videomail) {
    if (options.defaults) {
      videomail = applyDefaultValue(videomail, 'from');
      videomail = applyDefaultValue(videomail, 'to');
      videomail = applyDefaultValue(videomail, 'subject');
      videomail = applyDefaultValue(videomail, 'body');
    }

    return videomail
  }

  function packError (err, res) {
    if (res && res.body && res.body.error) {
      // use the server generated text instead of the superagent's default text
      err = res.body.error;

      if (!err.message && res.text) {
        err.message = res.text;
      }
    }

    return err
  }

  function fetch (alias, cb) {
    client
      .get('/videomail/' + alias + '/snapshot')
      .set('Accept', 'application/json')
      .set(Constants.SITE_NAME_LABEL, options.siteName)
      .timeout(options.timeouts.connection)
      .end(function (err, res) {
        err = packError(err, res);

        if (err) {
          cb(err);
        } else {
          var videomail = res.body;

          if (options.cache) {
            cache[CACHE_KEY] = videomail;
          }

          cb(null, videomail);
        }
      });
  }

  function write (method, videomail, identifier, cb) {
    if (!cb) {
      cb = identifier;
      identifier = null;
    }

    var queryParams = {};

    var url = options.baseUrl + '/videomail/';
    var request;

    if (identifier) {
      url += identifier;
    }

    request = client(method, url);

    queryParams[Constants.SITE_NAME_LABEL] = options.siteName;

    request
      .query(queryParams)
      .send(videomail)
      .timeout(options.timeout)
      .end(function (err, res) {
        err = packError(err, res);

        if (err) {
          cb(err);
        } else {
          if (options.cache && videomail[CACHE_KEY]) {
            cache[videomail[CACHE_KEY]] = res.body.videomail;
          }

          cb(null, res.body.videomail, res.body);
        }
      });
  }

  this.get = function (alias, cb) {
    if (options.cache && cache[alias]) {
      // keep all callbacks async
      setTimeout(function () {
        cb(null, cache[alias]);
      }, 0);
    } else {
      fetch(alias, cb);
    }
  };

  this.reportError = function (err, cb) {
    var queryParams = {};
    var url = options.baseUrl + '/client-error/';
    var request = client('post', url);

    queryParams[Constants.SITE_NAME_LABEL] = options.siteName;

    request
      .query(queryParams)
      .send(err)
      .timeout(options.timeout)
      .end(function (err, res) {
        err = packError(err, res);
        if (err) {
          cb && cb(err);
        } else {
          cb && cb();
        }
      });
  };

  this.post = function (videomail, cb) {
    videomail = applyDefaultValues(videomail);

    if (options.callbacks.adjustFormDataBeforePosting) {
      options.callbacks.adjustFormDataBeforePosting(
        videomail,
        function (err, adjustedVideomail) {
          if (err) {
            cb(err);
          } else {
            write('post', adjustedVideomail, cb);
          }
        }
      );
    } else {
      write('post', videomail, cb);
    }
  };

  this.put = function (videomail, cb) {
    write('put', videomail, videomail.key, cb);
  };

  this.form = function (formData, url, cb) {
    var formType;

    switch (options.enctype) {
      case Constants.public.ENC_TYPE_APP_JSON:
        formType = 'json';
        break
      case Constants.public.ENC_TYPE_FORM:
        formType = 'form';
        break
      default:
        // keep all callbacks async
        setTimeout(function () {
          cb(new Error('Invalid enctype given: ' + options.enctype));
        }, 0);
    }

    if (formType) {
      client
        .post(url)
        .type(formType)
        .send(formData)
        .timeout(options.timeout)
        .end(function (err, res) {
          err = packError(err, res);

          if (err) {
            cb(err);
          } else {
            cb(null, res);
          }
        });
    }
  };
};

// https://github.com/tgriesser/create-error
var VIDEOMAIL_ERR_NAME = 'Videomail Error';

var VideomailError = createError(Error, VIDEOMAIL_ERR_NAME, {
  'explanation': undefined,
  'logLines': undefined,
  'useragent': undefined,
  'url': undefined,
  'stack': undefined,
  'caller': undefined
});

// shim pretty to exclude stack always
var pretty = function (anything) {
  return pretty$1(anything, {excludes: ['stack']})
};

// static and public attribute of this class
VideomailError.PERMISSION_DENIED = 'PERMISSION_DENIED';
VideomailError.NOT_ALLOWED_ERROR = 'NotAllowedError';
VideomailError.NOT_CONNECTED = 'Not connected';
VideomailError.DOM_EXCEPTION = 'DOMException';
VideomailError.STARTING_FAILED = 'Starting video failed';
VideomailError.MEDIA_DEVICE_NOT_SUPPORTED = 'MediaDeviceNotSupported';
VideomailError.BROWSER_PROBLEM = 'browser-problem';
VideomailError.WEBCAM_PROBLEM = 'webcam-problem';
VideomailError.IOS_PROBLEM = 'ios-problem';

// static function to convert an error into a videomail error
VideomailError.create = function (err, explanation, options, parameters) {
  if (err && err.name === VIDEOMAIL_ERR_NAME) {
    return err
  }

  if (!options && explanation) {
    options = explanation;
    explanation = undefined;
  }

  options = options || {};
  parameters = parameters || {};

  // be super robust
  var debug = (options && options.debug) || console.log;

  debug('VideomailError: create()');

  var classList = parameters.classList || [];

  // Require Browser here, not at the top of the file to avoid
  // recursion. Because the Browser class is requiring this file as well.
  var Browser = require('./browser');
  var browser = new Browser(options);

  var errType;
  var message;
  var stack;

    // whole code is ugly because all browsers behave so differently :(

  if (typeof err === 'object') {
    if (err.code === 1 && err.PERMISSION_DENIED === 1) {
      errType = VideomailError.PERMISSION_DENIED;
    } else if (err.constructor && err.constructor.name === VideomailError.DOM_EXCEPTION) {
      errType = VideomailError.DOM_EXCEPTION;
    } else if (err.message === VideomailError.STARTING_FAILED) {
      errType = err.message;
    } else if (err.name) {
      errType = err.name;
    } else if (err.type === 'error' && err.target.bufferedAmount === 0) {
      errType = VideomailError.NOT_CONNECTED;
    }
  } else if (err === VideomailError.NOT_CONNECTED) {
    errType = VideomailError.NOT_CONNECTED;
  } else {
    errType = err;
  }

  if (err && err.stack) {
    stack = err.stack;
  }

  switch (errType) {
    case 'NotFoundError':
    case 'NO_DEVICES_FOUND':
      message = 'No webcam found';
      explanation = 'Your browser cannot find a webcam attached to your machine.';
      classList.push(VideomailError.WEBCAM_PROBLEM);
      break

    case 'PermissionDismissedError':
      message = 'Ooops, you didn\'t give me any permissions?';
      explanation = 'Looks like you skipped the webcam permission dialogue.<br/>' +
                    'Please grant access next time the dialogue appears.';
      classList.push(VideomailError.WEBCAM_PROBLEM);
      break

    case VideomailError.NOT_ALLOWED_ERROR:
    case VideomailError.PERMISSION_DENIED:
    case 'PermissionDeniedError':
      message = 'Permission denied';

      if (browser.isChromeBased() || browser.isFirefox() || browser.isEdge()) {
        explanation = 'Permission to access your webcam has been denied. ' +
                      'This can have two reasons:<br/>' +
                      'a) you blocked access to webcam; or<br/>' +
                      'b) your webcam is already in use.';
      } else {
        explanation = 'Permission to access your webcam has been denied.';
      }

      classList.push(VideomailError.WEBCAM_PROBLEM);

      break

    case 'HARDWARE_UNAVAILABLE':
      message = 'Webcam is unavailable';
      explanation = 'Maybe it is already busy in another window?';

      if (browser.isChromeBased()) {
        explanation += ' Or you have to allow access above?';
      }

      classList.push(VideomailError.WEBCAM_PROBLEM);

      break

    case VideomailError.NOT_CONNECTED:
      message = 'Unable to transfer data';
      explanation = 'Unable to maintain a websocket to the server. Either server or ' +
                    'your connection is down. Trying to reconnect every two seconds …';
      break

    case 'NO_VIDEO_FEED':
      message = 'No video feed found!';
      explanation = 'Your webcam is already used in another browser.';
      classList.push(VideomailError.WEBCAM_PROBLEM);
      break

    case VideomailError.STARTING_FAILED:
      message = 'Starting video failed';
      explanation = 'Most likely this happens when the webam is already active in another browser.';
      classList.push(VideomailError.WEBCAM_PROBLEM);
      break

    case 'DevicesNotFoundError':
      message = 'No available webcam could be found';
      explanation = 'Looks like you do not have any webcam attached to your machine; or ' +
                    'the one you plugged in is already used.';
      classList.push(VideomailError.WEBCAM_PROBLEM);
      break

    case VideomailError.DOM_EXCEPTION:
      if (err.code === 9) {
        var newUrl = 'https:' + window.location.href.substring(window.location.protocol.length);
        message = 'Security upgrade neded';
        explanation = 'Click <a href="' + newUrl + '">here</a> to switch to HTTPs which is more safe ' +
                      ' and enables encrypted videomail transfers.';
        classList.push(VideomailError.BROWSER_PROBLEM);
      } else {
        message = VideomailError.DOM_EXCEPTION;
        explanation = pretty(err);
      }
      break

    // Chrome has a weird problem where if you try to do a getUserMedia request too early, it
    // can return a MediaDeviceNotSupported error (even though nothing is wrong and permission
    // has been granted). Look at userMediaErrorCallback() in recorder, there we do not
    // emit those kind of errors further and just retry.
    //
    // but for whatever reasons, if it happens to reach this code, then investigate this further.
    case VideomailError.MEDIA_DEVICE_NOT_SUPPORTED:
      message = 'Media device not supported';
      explanation = pretty(err);
      break

    default:
      var originalExplanation = explanation;

      if (explanation && typeof explanation === 'object') {
        explanation = pretty(explanation);
      }

      // it can be that explanation itself is an error object
      // error objects can be prettified to undefined sometimes
      if (!explanation && originalExplanation) {
        if (originalExplanation.message) {
          explanation = originalExplanation.message;
        } else {
          // tried toString before but nah
          explanation = util.inspect(originalExplanation, {showHidden: true});
        }
      }

      if (err && typeof err === 'string') {
        message = err;
      } else {
        if (err) {
          if (err.message) {
            message = pretty(err.message);
          }
        }

        if (err && err.explanation) {
          if (!explanation) {
            explanation = pretty(err.explanation);
          } else {
            explanation += ';<br/>' + pretty(err.explanation);
          }
        }

        if (err && err.details) {
          var details = pretty(err.details);

          if (!explanation) {
            explanation = details;
          } else {
            explanation += ';<br/>' + details;
          }
        }
      }

      // for weird, undefined cases
      if (!message) {
        if (errType) {
          message = errType;
        }

        if (!explanation && err) {
          explanation = pretty(err, {excludes: ['stack']});
        }

        // avoid dupes
        if (pretty(message) === explanation) {
          explanation = undefined;
        }
      }

      break
  }

  var logLines = null;

  if (options.logger && options.logger.getLines) {
    logLines = options.logger.getLines();
  }

  if (stack) {
    message = new Error(message);
    message.stack = stack;
  }

  var errCode = 'none';

  if (err) {
    errCode = 'code=' + (err.code ? err.code : 'undefined');
    errCode += ', type=' + (err.type ? err.type : 'undefined');
    errCode += ', name=' + (err.name ? err.name : 'undefined');
  }

  var videomailError = new VideomailError(message, {
    explanation: explanation,
    logLines: logLines,
    client: browser.getUsefulData(),
    url: window.location.href,
    code: errCode,
    caller: index$5(2), // depth = 2, https://github.com/totherik/caller#depth
    stack: stack // have to assign it manually again because it is kinda protected
  });

  var resource;
  var reportErrors = false;

  if (options.reportErrors) {
    if (typeof options.reportErrors === 'function') {
      reportErrors = options.reportErrors(videomailError);
    } else {
      reportErrors = options.reportErrors;
    }
  }

  if (reportErrors) {
    resource = new Resource(options);
  }

  if (resource) {
    resource.reportError(videomailError, function (err2) {
      if (err2) {
        console.error('Unable to report error', err2);
      }
    });
  }

  function hasClass (name) {
    return classList.indexOf(name) >= 0
  }

  function isBrowserProblem () {
    return hasClass(VideomailError.BROWSER_PROBLEM) || parameters.browserProblem
  }

  // add some public functions

  // this one is useful so that the notifier can have different css classes
  videomailError.getClassList = function () {
    return classList
  };

  videomailError.removeDimensions = function () {
    return hasClass(VideomailError.IOS_PROBLEM) || browser.isMobile()
  };

  videomailError.hideButtons = function () {
    return isBrowserProblem() || hasClass(VideomailError.IOS_PROBLEM)
  };

  videomailError.hideForm = function () {
    return hasClass(VideomailError.IOS_PROBLEM)
  };

  return videomailError
};

var Browser = function (options) {
  options = options || {};

  var firefoxDownload = 'http://www.mozilla.org/firefox/update/';
  var edgeDownload = 'https://www.microsoft.com/en-us/download/details.aspx?id=48126';
  var chromeDownload = 'http://www.google.com/chrome/';
  var chromiumDownload = 'http://www.chromium.org/getting-involved/download-chromium';
  var browseHappyLink = 'http://browsehappy.com';
  var ua = index$4(options.fakeUaString, (
    typeof window !== 'undefined' &&
    window.navigator &&
    window.navigator.userAgent
  ), '');

  var uaParser$$1 = new uaParser(ua).getResult();

  var isIOS = uaParser$$1.os.name === 'iOS';
  var isChrome = uaParser$$1.browser.name === 'Chrome';
  var isChromium = uaParser$$1.browser.name === 'Chromium';
  var firefox = uaParser$$1.browser.name === 'Firefox';
  var osVersion = parseFloat(uaParser$$1.os.version);
  var isWindows = uaParser$$1.os.name === 'Windows';
  var isEdge = uaParser$$1.browser.name === 'Edge' || (isWindows && osVersion >= 10);
  var isIE = /IE/.test(uaParser$$1.browser.name);
  var isSafari = /Safari/.test(uaParser$$1.browser.name);
  var isOpera = /Opera/.test(uaParser$$1.browser.name);
  var isAndroid = /Android/.test(uaParser$$1.os.name);
  var chromeBased = isChrome || isChromium;
  var okBrowser = chromeBased || firefox || isAndroid || isOpera || isEdge;

  var self = this;

  var videoType;

  function getRecommendation () {
    var warning;

    if (firefox) {
      warning = 'Probably you need to <a href="' + firefoxDownload + '" target="_blank">' +
                      'upgrade Firefox</a> to fix this.';
    } else if (isChrome) {
      warning = 'Probably you need to <a href="' + chromeDownload + '" target="_blank">' +
                      'upgrade Chrome</a> to fix this.';
    } else if (isChromium) {
      warning = '<a href="' + chromiumDownload + '" target="_blank">' +
                      'Upgrade Chromium</a> to fix this.';
    } else if (isIE) {
      warning = 'Instead of Internet Explorer better pick' +
                      ' <a href="' + chromeDownload + '" target="_blank">Chrome</a>,' +
                      ' <a href="' + firefoxDownload + '" target="_blank">Firefox</a>,' +
                      ' <a href="' + edgeDownload + '" target="_blank">Edge</a> or Android.';
    } else if (isSafari) {
      warning = 'Safari has no webcam support yet.<br/>Better pick' +
                      ' <a href="' + chromeDownload + '" target="_blank">Chrome</a>,' +
                      ' <a href="' + firefoxDownload + '" target="_blank">Firefox</a> or Android.';
    }

    if (options.debug) {
      if (warning) {
        warning += ' ';
      } else {
        warning = '';
      }

      warning += 'Your browser is ' + JSON.stringify(uaParser$$1.browser);
    }

    return warning
  }

  function getUserMediaWarning () {
    var warning;

    if (isIOS) {
      warning = 'On iPads/iPhones this webcam feature is missing.<br/><br/>' +
                'For now, we recommend you to use a desktop computer or an Android device.';
    } else {
      warning = getRecommendation();
    }

    if (!warning) {
      if (self.isChromeBased() || self.isFirefox()) {
        warning = 'For the webcam feature, your browser needs an upgrade.';
      } else {
        warning = 'Hence we recommend you to use either ' +
                  '<a href="' + chromeDownload + '" target="_blank">Chrome</a>, ' +
                  '<a href="' + firefoxDownload + '" target="_blank">Firefox</a>, ' +
                  '<a href="' + edgeDownload + '" target="_blank">Edge</a> or Android.';
      }
    }

    return warning
  }

  function getPlaybackWarning () {
    var warning = getRecommendation();

    if (!warning) {
      warning = '<a href="' + browseHappyLink + '" target="_blank">Upgrading your browser</a> ' +
                        'might help.';
    }

    return warning
  }

  function canPlayType (video, type) {
    var canPlayType;

    if (video && video.canPlayType) {
      canPlayType = video.canPlayType('video/' + type);
    }

    return canPlayType
  }

    // just temporary
  this.canRecord = function () {
    var hasNavigator = typeof navigator !== 'undefined';
    var canRecord = false;

    if (hasNavigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      canRecord = true;
    } else {
      var getUserMediaType = hasNavigator && typeof navigator.getUserMedia_;

      canRecord = getUserMediaType === 'function';
    }

    return canRecord
  };

  this.checkRecordingCapabilities = function () {
    var err;

    if (!okBrowser || !this.canRecord()) {
      var classList = [];

      if (isIOS) {
        classList.push(VideomailError.IOS_PROBLEM);
      } else {
        classList.push(VideomailError.BROWSER_PROBLEM);
      }

      err = VideomailError.create({
        message: 'Sorry, your browser is unable to use webcams'
      }, getUserMediaWarning(), options, {
        classList: classList
      });
    }

    return err
  };

  this.checkPlaybackCapabilities = function (video) {
    options.debug('Browser: checkPlaybackCapabilities()');

    var err, message;

    if (!video) {
      message = 'No HTML5 support for video tag!';
    } else if (!this.getVideoType(video)) {
      message = 'Your old browser cannot support modern video codecs';
    } else if (!video.setAttribute) {
      // fixes "Not implemented" error on older browsers
      message = 'Unable to set video attributes in your old browser';
    }

    if (message) {
      err = VideomailError.create(message, getPlaybackWarning(), options);
    }

    return err
  };

  this.checkBufferTypes = function () {
    var err;

    if (typeof window === 'undefined' || typeof window.atob === 'undefined') {
      err = VideomailError.create('atob is not supported', options);
    } else if (typeof window.ArrayBuffer === 'undefined') {
      err = VideomailError.create('ArrayBuffers are not supported', options);
    } else if (typeof window.Uint8Array === 'undefined') {
      err = VideomailError.create('Uint8Arrays are not supported', options);
    }

    return err
  };

  this.getVideoType = function (video) {
    if (!videoType) {
      // there is a bug in canPlayType within chrome for mp4
      if (canPlayType(video, 'mp4') && !chromeBased) {
        videoType = 'mp4';
      } else if (canPlayType(video, 'webm')) {
        videoType = 'webm';
      }
    }

    return videoType
  };

  this.getNoAccessIssue = function () {
    var message = 'Unable to access webcam';
    var explanation;

    if (this.isChromeBased()) {
      explanation = 'Click on the allow button to grant access to your webcam.';
    } else if (this.isFirefox()) {
      explanation = 'Please grant Firefox access to your webcam.';
    } else {
      explanation = 'Your system does not let your browser access your webcam.';
    }

    return VideomailError.create(message, explanation, options)
  };

  this.isChromeBased = function () {
    return chromeBased
  };

  this.isFirefox = function () {
    return firefox
  };

  this.isEdge = function () {
    return isEdge
  };

  this.isMobile = function () {
    return uaParser$$1.device.type === 'mobile'
  };

  this.getUsefulData = function () {
    return {
      browser: uaParser$$1.browser,
      device: uaParser$$1.device,
      os: uaParser$$1.os,
      engine: uaParser$$1.engine,
      userAgent: ua
    }
  };
};

var CollectLogger = function (localOptions) {
  localOptions = localOptions || {};

  var browser = new Browser(localOptions);
  var logger = localOptions.logger || console;
  var containerId = (localOptions.selectors && localOptions.selectors.containerId) || 'undefined container id';
  var stack = [];

  function lifo (level, parameters) {
    var line = util.format.apply(util, parameters);

    if (stack.length > localOptions.logStackSize) {
      stack.pop();
    }

    stack.push('[' + level + '] ' + line);

    return line
  }

  function addContainerId (firstArgument) {
    return '#' + containerId + ' [' + new Date().toLocaleTimeString() + '] > ' + firstArgument
  }

  // workaround: since we cannot overwrite console.log without having the correct file and line number
  // we'll use groupCollapsed() and trace() instead to get these.
  this.debug = function () {
    // always add it for better client error reports
    var args = [].slice.call(arguments, 0);
    args[0] = addContainerId(args[0]);

    var output = lifo('debug', args);

    if (localOptions.verbose) {
      if (browser.isFirefox()) {
        logger.debug(output);
      } else if (logger.groupCollapsed) {
        logger.groupCollapsed(output);
        logger.trace('Trace');
        logger.groupEnd();
      } else if (logger.debug) {
        logger.debug(output);
      } else {
        // last resort if everything else fails for any weird reasons
        console.log(output);
      }
    }
  };

  this.error = function () {
    var args = [].slice.call(arguments, 0);
    args[0] = addContainerId(args[0]);

    logger.error(lifo('error', args));
  };

  this.warn = function () {
    var args = [].slice.call(arguments, 0);
    args[0] = addContainerId(args[0]);

    logger.warn(lifo('warn', args));
  };

  this.getLines = function () {
    return stack
  };
};

var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof commonjsGlobal !== "undefined") {
    win = commonjsGlobal;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

var window_1 = win;

var domain;

// This constructor is used to store event handlers. Instantiating this is
// faster than explicitly calling `Object.create(null)` to get a "clean" empty
// object (tested with v8 v4.9).
function EventHandlers() {}
EventHandlers.prototype = Object.create(null);

function EventEmitter$1() {
  EventEmitter$1.init.call(this);
}
// nodejs oddity
// require('events') === require('events').EventEmitter
EventEmitter$1.EventEmitter = EventEmitter$1;

EventEmitter$1.usingDomains = false;

EventEmitter$1.prototype.domain = undefined;
EventEmitter$1.prototype._events = undefined;
EventEmitter$1.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter$1.defaultMaxListeners = 10;

EventEmitter$1.init = function() {
  this.domain = null;
  if (EventEmitter$1.usingDomains) {
    // if there is an active domain, then attach to it.
    if (domain.active && !(this instanceof domain.Domain)) {
      this.domain = domain.active;
    }
  }

  if (!this._events || this._events === Object.getPrototypeOf(this)._events) {
    this._events = new EventHandlers();
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter$1.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || isNaN(n))
    { throw new TypeError('"n" argument must be a positive number'); }
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    { return EventEmitter$1.defaultMaxListeners; }
  return that._maxListeners;
}

EventEmitter$1.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

// These standalone emit* functions are used to optimize calling of event
// handlers for fast cases because emit() itself often has a variable number of
// arguments and can be deoptimized because of that. These functions always have
// the same number of arguments and thus do not get deoptimized, so the code
// inside them can execute faster.
function emitNone(handler, isFn, self) {
  if (isFn)
    { handler.call(self); }
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      { listeners[i].call(self); }
  }
}
function emitOne(handler, isFn, self, arg1) {
  if (isFn)
    { handler.call(self, arg1); }
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      { listeners[i].call(self, arg1); }
  }
}
function emitTwo(handler, isFn, self, arg1, arg2) {
  if (isFn)
    { handler.call(self, arg1, arg2); }
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      { listeners[i].call(self, arg1, arg2); }
  }
}
function emitThree(handler, isFn, self, arg1, arg2, arg3) {
  if (isFn)
    { handler.call(self, arg1, arg2, arg3); }
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      { listeners[i].call(self, arg1, arg2, arg3); }
  }
}

function emitMany(handler, isFn, self, args) {
  if (isFn)
    { handler.apply(self, args); }
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      { listeners[i].apply(self, args); }
  }
}

EventEmitter$1.prototype.emit = function emit(type) {
  var arguments$1 = arguments;

  var er, handler, len, args, i, events, domain;
  var needDomainExit = false;
  var doError = (type === 'error');

  events = this._events;
  if (events)
    { doError = (doError && events.error == null); }
  else if (!doError)
    { return false; }

  domain = this.domain;

  // If there is no 'error' event listener then throw.
  if (doError) {
    er = arguments[1];
    if (domain) {
      if (!er)
        { er = new Error('Uncaught, unspecified "error" event'); }
      er.domainEmitter = this;
      er.domain = domain;
      er.domainThrown = false;
      domain.emit('error', er);
    } else if (er instanceof Error) {
      throw er; // Unhandled 'error' event
    } else {
      // At least give some kind of context to the user
      var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
      err.context = er;
      throw err;
    }
    return false;
  }

  handler = events[type];

  if (!handler)
    { return false; }

  var isFn = typeof handler === 'function';
  len = arguments.length;
  switch (len) {
    // fast cases
    case 1:
      emitNone(handler, isFn, this);
      break;
    case 2:
      emitOne(handler, isFn, this, arguments[1]);
      break;
    case 3:
      emitTwo(handler, isFn, this, arguments[1], arguments[2]);
      break;
    case 4:
      emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
      break;
    // slower
    default:
      args = new Array(len - 1);
      for (i = 1; i < len; i++)
        { args[i - 1] = arguments$1[i]; }
      emitMany(handler, isFn, this, args);
  }

  if (needDomainExit)
    { domain.exit(); }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function')
    { throw new TypeError('"listener" argument must be a function'); }

  events = target._events;
  if (!events) {
    events = target._events = new EventHandlers();
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (!existing) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] :
                                          [existing, listener];
    } else {
      // If we've already got an array, just append.
      if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }
    }

    // Check for listener leak
    if (!existing.warned) {
      m = $getMaxListeners(target);
      if (m && m > 0 && existing.length > m) {
        existing.warned = true;
        var w = new Error('Possible EventEmitter memory leak detected. ' +
                            existing.length + ' ' + type + ' listeners added. ' +
                            'Use emitter.setMaxListeners() to increase limit');
        w.name = 'MaxListenersExceededWarning';
        w.emitter = target;
        w.type = type;
        w.count = existing.length;
        emitWarning(w);
      }
    }
  }

  return target;
}
function emitWarning(e) {
  typeof console.warn === 'function' ? console.warn(e) : console.log(e);
}
EventEmitter$1.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter$1.prototype.on = EventEmitter$1.prototype.addListener;

EventEmitter$1.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function _onceWrap(target, type, listener) {
  var fired = false;
  function g() {
    target.removeListener(type, g);
    if (!fired) {
      fired = true;
      listener.apply(target, arguments);
    }
  }
  g.listener = listener;
  return g;
}

EventEmitter$1.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function')
    { throw new TypeError('"listener" argument must be a function'); }
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter$1.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function')
        { throw new TypeError('"listener" argument must be a function'); }
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// emits a 'removeListener' event iff the listener was removed
EventEmitter$1.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function')
        { throw new TypeError('"listener" argument must be a function'); }

      events = this._events;
      if (!events)
        { return this; }

      list = events[type];
      if (!list)
        { return this; }

      if (list === listener || (list.listener && list.listener === listener)) {
        if (--this._eventsCount === 0)
          { this._events = new EventHandlers(); }
        else {
          delete events[type];
          if (events.removeListener)
            { this.emit('removeListener', type, list.listener || listener); }
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length; i-- > 0;) {
          if (list[i] === listener ||
              (list[i].listener && list[i].listener === listener)) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          { return this; }

        if (list.length === 1) {
          list[0] = undefined;
          if (--this._eventsCount === 0) {
            this._events = new EventHandlers();
            return this;
          } else {
            delete events[type];
          }
        } else {
          spliceOne(list, position);
        }

        if (events.removeListener)
          { this.emit('removeListener', type, originalListener || listener); }
      }

      return this;
    };

EventEmitter$1.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var this$1 = this;

      var listeners, events;

      events = this._events;
      if (!events)
        { return this; }

      // not listening for removeListener, no need to emit
      if (!events.removeListener) {
        if (arguments.length === 0) {
          this._events = new EventHandlers();
          this._eventsCount = 0;
        } else if (events[type]) {
          if (--this._eventsCount === 0)
            { this._events = new EventHandlers(); }
          else
            { delete events[type]; }
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        for (var i = 0, key; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') { continue; }
          this$1.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = new EventHandlers();
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners) {
        // LIFO order
        do {
          this$1.removeListener(type, listeners[listeners.length - 1]);
        } while (listeners[0]);
      }

      return this;
    };

EventEmitter$1.prototype.listeners = function listeners(type) {
  var evlistener;
  var ret;
  var events = this._events;

  if (!events)
    { ret = []; }
  else {
    evlistener = events[type];
    if (!evlistener)
      { ret = []; }
    else if (typeof evlistener === 'function')
      { ret = [evlistener.listener || evlistener]; }
    else
      { ret = unwrapListeners(evlistener); }
  }

  return ret;
};

EventEmitter$1.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter$1.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter$1.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
};

// About 1.5x faster than the two-arg version of Array#splice().
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
    { list[i] = list[k]; }
  list.pop();
}

function arrayClone(arr, i) {
  var copy = new Array(i);
  while (i--)
    { copy[i] = arr[i]; }
  return copy;
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


var events = Object.freeze({
	default: EventEmitter$1,
	EventEmitter: EventEmitter$1
});

var debugUtil = ( util$1 && util ) || util$1;

var require$$0$25 = ( events && EventEmitter$1 ) || events;

var makeDespot = function () {
  var Despot = function () {
    if (window_1._singletonDespotInstance) {
      return window_1._singletonDespotInstance
    } else {
      window_1._singletonDespotInstance = this;
      require$$0$25.call(this);
    }
  };

  debugUtil.inherits(Despot, require$$0$25);

  return new Despot()
};

var index$8 = makeDespot();

// TODO: MAKE EVENT EMITTING IN DESPOT NOT GLOBAL BUT BY CONTAINER ID INSTEAD

var EventEmitter = function (options, name) {
  this.emit = function (event) {
    var args = Array.prototype.slice.call(arguments, 0);

    if (!event) {
      throw VideomailError.create('You cannot emit without an event.', options)
    }

        // Automatically convert errors to videomail errors
    if (event === Events.ERROR) {
      var err = args[1];

      err = VideomailError.create(err, options);

      args[1] = err;
    }

    if (options.debug) {
      if (event !== 'removeListener' && event !== 'newListener') {
        var moreArguments;

        if (args[1]) {
          moreArguments = args.slice(1);
        }

        if (moreArguments) {
          options.debug('%s emits: %s', name, event, moreArguments);
        } else {
          options.debug('%s emits: %s', name, event);
        }
      }
    }

    var result = index$8.emit.apply(index$8, args);

    // Todo: have this emitted through a configuration because it is pretty noisy
    // if (event !== Events.EVENT_EMITTED)
    //     this.emit(Events.EVENT_EMITTED, event)

    return result
  };

  this.on = function (eventName, cb) {
    return index$8.on(eventName, cb)
  };

  this.once = function (eventName, cb) {
    return index$8.once(eventName, cb)
  };

  this.listeners = function (eventName) {
    return index$8.listeners(eventName)
  };

  this.removeListener = function (eventName, cb) {
    return index$8.removeListener(eventName, cb)
  };

  this.removeAllListeners = function () {
    index$8.removeAllListeners();
  };
};

var css = {"IIV":"_src_styles_main__IIV","videomail":"_src_styles_main__videomail","visuals":"_src_styles_main__visuals","replay":"_src_styles_main__replay","userMedia":"_src_styles_main__userMedia","countdown":"_src_styles_main__countdown","recordTimer":"_src_styles_main__recordTimer","recordNote":"_src_styles_main__recordNote","pausedHeader":"_src_styles_main__pausedHeader","pausedHint":"_src_styles_main__pausedHint","paused":"_src_styles_main__paused","near":"_src_styles_main__near","nigh":"_src_styles_main__nigh","blink":"_src_styles_main__blink","notifier":"_src_styles_main__notifier","radioGroup":"_src_styles_main__radioGroup"};

var containers = []; // will store container HTMLElement references
var styleElements = []; // will store {prepend: HTMLElement, append: HTMLElement}

var usage = 'insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).';

function insertCss(css, options) {
    options = options || {};

    if (css === undefined) {
        throw new Error(usage);
    }

    var position = options.prepend === true ? 'prepend' : 'append';
    var container = options.container !== undefined ? options.container : document.querySelector('head');
    var containerId = containers.indexOf(container);

    // first time we see this container, create the necessary entries
    if (containerId === -1) {
        containerId = containers.push(container) - 1;
        styleElements[containerId] = {};
    }

    // try to get the correponding container + position styleElement, create it otherwise
    var styleElement;

    if (styleElements[containerId] !== undefined && styleElements[containerId][position] !== undefined) {
        styleElement = styleElements[containerId][position];
    } else {
        styleElement = styleElements[containerId][position] = createStyleElement();

        if (position === 'prepend') {
            container.insertBefore(styleElement, container.childNodes[0]);
        } else {
            container.appendChild(styleElement);
        }
    }

    // strip potential UTF-8 BOM if css was read from a file
    if (css.charCodeAt(0) === 0xFEFF) { css = css.substr(1, css.length); }

    // actually add the stylesheet
    if (styleElement.styleSheet) {
        styleElement.styleSheet.cssText += css;
    } else {
        styleElement.textContent += css;
    }

    return styleElement;
}

function createStyleElement() {
    var styleElement = document.createElement('style');
    styleElement.setAttribute('type', 'text/css');
    return styleElement;
}

var index$9 = insertCss;
var insertCss_1 = insertCss;

index$9.insertCss = insertCss_1;

var index$10 = shim$2;

function shim$2 (element, value) {
    if (value === undefined) {
        return element.style.display === 'none'
    }

    element.style.display = value ? 'none' : '';
}

var empty$1 = {};


var empty$2 = Object.freeze({
	default: empty$1
});

var require$$0$26 = ( empty$2 && empty$1 ) || empty$2;

var topLevel = typeof commonjsGlobal !== 'undefined' ? commonjsGlobal :
    typeof window !== 'undefined' ? window : {};


var doccy;

if (typeof document !== 'undefined') {
    doccy = document;
} else {
    doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

    if (!doccy) {
        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = require$$0$26;
    }
}

var document_1 = doccy;

var event = Event$1;

function Event$1() {
    var listeners = [];

    return { broadcast: broadcast, listen: event }

    function broadcast(value) {
        for (var i = 0; i < listeners.length; i++) {
            listeners[i](value);
        }
    }

    function event(listener) {
        listeners.push(listener);

        return removeListener

        function removeListener() {
            var index = listeners.indexOf(listener);
            if (index !== -1) {
                listeners.splice(index, 1);
            }
        }
    }
}

var source = Source;

function Source(broadcaster) {
    var tuple = event();

    broadcaster(tuple.broadcast);

    return tuple.listen
}

var keys_1 = keys$2;

function keys$2 (document) {
  var prefix = detectPrefix(document);
  if (prefix == null) { return }
  return {
    hidden: lowercaseFirst(prefix + 'Hidden'),
    event: prefix + 'visibilitychange'
  }
}

function detectPrefix (document) {
  if (document.hidden != null) { return '' }
  if (document.mozHidden != null) { return 'moz' }
  if (document.msHidden != null) { return 'ms' }
  if (document.webkitHidden != null) { return 'webkit' }
}

function lowercaseFirst (string) {
  return string.substring(0, 1).toLowerCase() + string.substring(1)
}

var index$11 = Visibility;

function Visibility () {
  var keys = keys_1(document_1);
  if (!keys) { return noopShim() }

  return {
    visible: visible,
    onChange: source(listen)
  }

  function visible () {
    return !document_1[keys.hidden]
  }

  function listen (broadcast) {
    document_1.addEventListener(keys.event, function onVisibilityChange () {
      broadcast(visible());
    });
  }
}

function noopShim () {
  return {
    visible: function () {
      return true
    },
    onChange: noop$1
  }
}

function noop$1 () {}

var index$15 = Number.isNaN || function (x) {
	return x !== x;
};

var index$13 = Number.isFinite || function (val) {
	return !(typeof val !== 'number' || index$15(val) || val === Infinity || val === -Infinity);
};

var index$12 = Number.isInteger || function (x) {
	return index$13(x) && Math.floor(x) === x;
};

function getOuterWidth (element) {
  var rect = element.getBoundingClientRect();
  return rect.right - rect.left
}

function figureMinHeight (height, options) {
  if (options.hasDefinedHeight()) {
    if (!height) {
      height = options.video.height;
    } else {
      height = Math.min(options.video.height, height);
    }
  }

  if (index$12(height) && height < 1) {
    throw VideomailError.create(
      'Got a video height less than 1 (' +
      height +
      ') while figuring out the minimum!',
      options
    )
  }

  // just return it, can be "auto"
  return height
}

var Dimension = {

  limitWidth: function (element, width, options) {
    var outerWidth = getOuterWidth(element);
    var limitedWidth = outerWidth > 0 && outerWidth < width ? outerWidth : width;

    if (index$12(limitedWidth) && limitedWidth < 1) {
      throw VideomailError.create('Limited width cannot be less than 1!', options)
    } else {
      return limitedWidth
    }
  },

    // this is difficult to compute and is not entirely correct.
    // but good enough for now to ensure some stability.
  limitHeight: function (height, options) {
    if (index$12(height) && height < 1) {
      throw VideomailError.create('Passed limit-height argument cannot be less than 1!', options)
    } else {
      var limitedHeight = Math.min(
        height,
        document.body.scrollHeight,
        document.documentElement.clientHeight
      );

      if (limitedHeight < 1) {
        throw VideomailError.create('Limited height cannot be less than 1!', options)
      } else {
        return limitedHeight
      }
    }
  },

  calculateWidth: function (options) {
    var height = options.videoHeight || null;
    var ratio = options.ratio || options.getRatio();

    height = figureMinHeight(height, options);

    if (options.responsive) {
      height = this.limitHeight(height, options);
    }

    if (index$12(height) && height < 1) {
      throw VideomailError.create('Height cannot be smaller than 1 when calculating width.', options)
    } else {
      var calculatedWidth = parseInt(height / ratio);

      if (calculatedWidth < 1) {
        throw VideomailError.create('Calculated width cannot be smaller than 1!', options)
      } else {
        return calculatedWidth
      }
    }
  },

  calculateHeight: function (element, options) {
    var width = options.videoWidth || null;
    var height;

    var ratio = options.ratio || options.getRatio();

    if (options.hasDefinedWidth()) {
      width = options.video.width;
    }

    if (index$12(width) && width < 1) {
      throw VideomailError.create('Unable to calculate height when width is less than 1.', options)
    } else if (options.responsive) {
      width = this.limitWidth(element, width, options);
    }

    if (width) {
      height = parseInt(width * ratio);
    }

    if (index$12(height) && height < 1) {
      throw VideomailError.create('Just calculated a height less than 1 which is wrong.', options)
    } else {
      return figureMinHeight(height, options)
    }
  }
};

/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * ECMAScript compliant, uniform cross-browser split method
 */

/**
 * Splits a string into an array of strings using a regex or string separator. Matches of the
 * separator are not included in the result array. However, if `separator` is a regex that contains
 * capturing groups, backreferences are spliced into the result each time `separator` is matched.
 * Fixes browser bugs compared to the native `String.prototype.split` and can be used reliably
 * cross-browser.
 * @param {String} str String to split.
 * @param {RegExp|String} separator Regex or string to use for separating the string.
 * @param {Number} [limit] Maximum number of items to include in the result array.
 * @returns {Array} Array of substrings.
 * @example
 *
 * // Basic use
 * split('a b c d', ' ');
 * // -> ['a', 'b', 'c', 'd']
 *
 * // With limit
 * split('a b c d', ' ', 2);
 * // -> ['a', 'b']
 *
 * // Backreferences in result array
 * split('..word1 word2..', /([a-z]+)(\d+)/i);
 * // -> ['..', 'word', '1', ' ', 'word', '2', '..']
 */
var index$18 = (function split(undef) {

  var nativeSplit = String.prototype.split,
    compliantExecNpcg = /()??/.exec("")[1] === undef,
    // NPCG: nonparticipating capturing group
    self;

  self = function(str, separator, limit) {
    // If `separator` is not a regex, use `nativeSplit`
    if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
      return nativeSplit.call(str, separator, limit);
    }
    var output = [],
      flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.extended ? "x" : "") + // Proposed for ES6
      (separator.sticky ? "y" : ""),
      // Firefox 3+
      lastLastIndex = 0,
      // Make `global` and avoid `lastIndex` issues by working with a copy
      separator = new RegExp(separator.source, flags + "g"),
      separator2, match, lastIndex, lastLength;
    str += ""; // Type-convert
    if (!compliantExecNpcg) {
      // Doesn't need flags gy, but they don't hurt
      separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
    }
    /* Values for `limit`, per the spec:
     * If undefined: 4294967295 // Math.pow(2, 32) - 1
     * If 0, Infinity, or NaN: 0
     * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
     * If negative number: 4294967296 - Math.floor(Math.abs(limit))
     * If other: Type-convert, then use the above rules
     */
    limit = limit === undef ? -1 >>> 0 : // Math.pow(2, 32) - 1
    limit >>> 0; // ToUint32(limit)
    while (match = separator.exec(str)) {
      // `separator.lastIndex` is not reliable cross-browser
      lastIndex = match.index + match[0].length;
      if (lastIndex > lastLastIndex) {
        output.push(str.slice(lastLastIndex, match.index));
        // Fix browsers whose `exec` methods don't consistently return `undefined` for
        // nonparticipating capturing groups
        if (!compliantExecNpcg && match.length > 1) {
          match[0].replace(separator2, function() {
            var arguments$1 = arguments;

            for (var i = 1; i < arguments.length - 2; i++) {
              if (arguments$1[i] === undef) {
                match[i] = undef;
              }
            }
          });
        }
        if (match.length > 1 && match.index < str.length) {
          Array.prototype.push.apply(output, match.slice(1));
        }
        lastLength = match[0].length;
        lastLastIndex = lastIndex;
        if (output.length >= limit) {
          break;
        }
      }
      if (separator.lastIndex === match.index) {
        separator.lastIndex++; // Avoid an infinite loop
      }
    }
    if (lastLastIndex === str.length) {
      if (lastLength || !separator.test("")) {
        output.push("");
      }
    } else {
      output.push(str.slice(lastLastIndex));
    }
    return output.length > limit ? output.slice(0, limit) : output;
  };

  return self;
})();

var indexOf = [].indexOf;

var index$22 = function(arr, obj){
  if (indexOf) { return arr.indexOf(obj); }
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) { return i; }
  }
  return -1;
};

// contains, add, remove, toggle


var index$20 = ClassList;

function ClassList(elem) {
    var cl = elem.classList;

    if (cl) {
        return cl
    }

    var classList = {
        add: add
        , remove: remove
        , contains: contains
        , toggle: toggle
        , toString: $toString
        , length: 0
        , item: item
    };

    return classList

    function add(token) {
        var list = getTokens();
        if (index$22(list, token) > -1) {
            return
        }
        list.push(token);
        setTokens(list);
    }

    function remove(token) {
        var list = getTokens()
            , index = index$22(list, token);

        if (index === -1) {
            return
        }

        list.splice(index, 1);
        setTokens(list);
    }

    function contains(token) {
        return index$22(getTokens(), token) > -1
    }

    function toggle(token) {
        if (contains(token)) {
            remove(token);
            return false
        } else {
            add(token);
            return true
        }
    }

    function $toString() {
        return elem.className
    }

    function item(index) {
        var tokens = getTokens();
        return tokens[index] || null
    }

    function getTokens() {
        var className = elem.className;

        return filter(className.split(" "), isTruthy)
    }

    function setTokens(list) {
        var length = list.length;

        elem.className = list.join(" ");
        classList.length = length;

        for (var i = 0; i < list.length; i++) {
            classList[i] = list[i];
        }

        delete list[length];
    }
}

function filter (arr, fn) {
    var ret = [];
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i])) { ret.push(arr[i]); }
    }
    return ret
}

function isTruthy(value) {
    return !!value
}

var index$17 = createCommonjsModule(function (module) {
var w = typeof window === 'undefined' ? require$$0$26 : window;
var document = w.document;
var Text = w.Text;

function context () {

  var cleanupFuncs = [];

  function h() {
    var args = [].slice.call(arguments), e = null;
    function item (l) {
      var r;
      function parseClass (string) {
        // Our minimal parser doesn’t understand escaping CSS special
        // characters like `#`. Don’t use them. More reading:
        // https://mathiasbynens.be/notes/css-escapes .

        var m = index$18(string, /([\.#]?[^\s#.]+)/);
        if(/^\.|#/.test(m[1]))
          { e = document.createElement('div'); }
        forEach(m, function (v) {
          var s = v.substring(1,v.length);
          if(!v) { return }
          if(!e)
            { e = document.createElement(v); }
          else if (v[0] === '.')
            { index$20(e).add(s); }
          else if (v[0] === '#')
            { e.setAttribute('id', s); }
        });
      }

      if(l == null)
        {  }
      else if('string' === typeof l) {
        if(!e)
          { parseClass(l); }
        else
          { e.appendChild(r = document.createTextNode(l)); }
      }
      else if('number' === typeof l
        || 'boolean' === typeof l
        || l instanceof Date
        || l instanceof RegExp ) {
          e.appendChild(r = document.createTextNode(l.toString()));
      }
      //there might be a better way to handle this...
      else if (isArray(l))
        { forEach(l, item); }
      else if(isNode(l))
        { e.appendChild(r = l); }
      else if(l instanceof Text)
        { e.appendChild(r = l); }
      else if ('object' === typeof l) {
        for (var k in l) {
          if('function' === typeof l[k]) {
            if(/^on\w+/.test(k)) {
              (function (k, l) { // capture k, l in the closure
                if (e.addEventListener){
                  e.addEventListener(k.substring(2), l[k], false);
                  cleanupFuncs.push(function(){
                    e.removeEventListener(k.substring(2), l[k], false);
                  });
                }else{
                  e.attachEvent(k, l[k]);
                  cleanupFuncs.push(function(){
                    e.detachEvent(k, l[k]);
                  });
                }
              })(k, l);
            } else {
              // observable
              e[k] = l[k]();
              cleanupFuncs.push(l[k](function (v) {
                e[k] = v;
              }));
            }
          }
          else if(k === 'style') {
            if('string' === typeof l[k]) {
              e.style.cssText = l[k];
            }else{
              for (var s in l[k]) { (function(s, v) {
                if('function' === typeof v) {
                  // observable
                  e.style.setProperty(s, v());
                  cleanupFuncs.push(v(function (val) {
                    e.style.setProperty(s, val);
                  }));
                } else
                  { var match = l[k][s].match(/(.*)\W+!important\W*$/); }
                  if (match) {
                    e.style.setProperty(s, match[1], 'important');
                  } else {
                    e.style.setProperty(s, l[k][s]);
                  }
              })(s, l[k][s]); }
            }
          } else if(k === 'attrs') {
            for (var v in l[k]) {
              e.setAttribute(v, l[k][v]);
            }
          }
          else if (k.substr(0, 5) === "data-") {
            e.setAttribute(k, l[k]);
          } else {
            e[k] = l[k];
          }
        }
      } else if ('function' === typeof l) {
        //assume it's an observable!
        var v = l();
        e.appendChild(r = isNode(v) ? v : document.createTextNode(v));

        cleanupFuncs.push(l(function (v) {
          if(isNode(v) && r.parentElement)
            { r.parentElement.replaceChild(v, r), r = v; }
          else
            { r.textContent = v; }
        }));
      }

      return r
    }
    while(args.length)
      { item(args.shift()); }

    return e
  }

  h.cleanup = function () {
    for (var i = 0; i < cleanupFuncs.length; i++){
      cleanupFuncs[i]();
    }
    cleanupFuncs.length = 0;
  };

  return h
}

var h = module.exports = context();
h.context = context;

function isNode (el) {
  return el && el.nodeName && el.nodeType
}

function forEach (arr, fn) {
  if (arr.forEach) { return arr.forEach(fn) }
  for (var i = 0; i < arr.length; i++) { fn(arr[i], i); }
}

function isArray (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]'
}
});

/*! npm.im/intervalometer */
function intervalometer(cb, request, cancel, requestParameter) {
	var requestId;
	var previousLoopTime;
	function loop(now) {
		// must be requested before cb() because that might call .stop()
		requestId = request(loop, requestParameter);

		// called with "ms since last call". 0 on start()
		cb(now - (previousLoopTime || now));

		previousLoopTime = now;
	}
	return {
		start: function start() {
			if (!requestId) { // prevent double starts
				loop(0);
			}
		},
		stop: function stop() {
			cancel(requestId);
			requestId = null;
			previousLoopTime = 0;
		}
	};
}

function frameIntervalometer(cb) {
	return intervalometer(cb, requestAnimationFrame, cancelAnimationFrame);
}

/*! npm.im/iphone-inline-video 2.2.2 */
function preventEvent(element, eventName, test) {
	function handler(e) {
		if (!test || test(element, eventName)) {
			e.stopImmediatePropagation();
			// // console.log(eventName, 'prevented on', element);
		}
	}
	element.addEventListener(eventName, handler);

	// Return handler to allow to disable the prevention. Usage:
	// const preventionHandler = preventEvent(el, 'click');
	// el.removeEventHandler('click', preventionHandler);
	return handler;
}

function proxyProperty(object, propertyName, sourceObject, copyFirst) {
	function get() {
		return sourceObject[propertyName];
	}
	function set(value) {
		sourceObject[propertyName] = value;
	}

	if (copyFirst) {
		set(object[propertyName]);
	}

	Object.defineProperty(object, propertyName, {get: get, set: set});
}

function proxyEvent(object, eventName, sourceObject) {
	sourceObject.addEventListener(eventName, function () { return object.dispatchEvent(new Event(eventName)); });
}

function dispatchEventAsync(element, type) {
	Promise.resolve().then(function () {
		element.dispatchEvent(new Event(type));
	});
}

var iOS8or9 = typeof document === 'object' && 'object-fit' in document.head.style && !matchMedia('(-webkit-video-playable-inline)').matches;

var IIV = 'bfred-it:iphone-inline-video';
var IIVEvent = 'bfred-it:iphone-inline-video:event';
var IIVPlay = 'bfred-it:iphone-inline-video:nativeplay';
var IIVPause = 'bfred-it:iphone-inline-video:nativepause';

/**
 * UTILS
 */

function getAudioFromVideo(video) {
	var audio = new Audio();
	proxyEvent(video, 'play', audio);
	proxyEvent(video, 'playing', audio);
	proxyEvent(video, 'pause', audio);
	audio.crossOrigin = video.crossOrigin;

	// 'data:' causes audio.networkState > 0
	// which then allows to keep <audio> in a resumable playing state
	// i.e. once you set a real src it will keep playing if it was if .play() was called
	audio.src = video.src || video.currentSrc || 'data:';

	// // if (audio.src === 'data:') {
	//   TODO: wait for video to be selected
	// // }
	return audio;
}

var lastRequests = [];
var requestIndex = 0;
var lastTimeupdateEvent;

function setTime(video, time, rememberOnly) {
	// Allow one timeupdate event every 200+ ms
	if ((lastTimeupdateEvent || 0) + 200 < Date.now()) {
		video[IIVEvent] = true;
		lastTimeupdateEvent = Date.now();
	}
	if (!rememberOnly) {
		video.currentTime = time;
	}
	lastRequests[++requestIndex % 3] = time * 100 | 0 / 100;
}

function isPlayerEnded(player) {
	return player.driver.currentTime >= player.video.duration;
}

function update(timeDiff) {
	var player = this;
	// // console.log('update', player.video.readyState, player.video.networkState, player.driver.readyState, player.driver.networkState, player.driver.paused);
	if (player.video.readyState >= player.video.HAVE_FUTURE_DATA) {
		if (!player.hasAudio) {
			player.driver.currentTime = player.video.currentTime + ((timeDiff * player.video.playbackRate) / 1000);
			if (player.video.loop && isPlayerEnded(player)) {
				player.driver.currentTime = 0;
			}
		}
		setTime(player.video, player.driver.currentTime);
	} else if (player.video.networkState === player.video.NETWORK_IDLE && player.video.buffered.length === 0) {
		// This should happen when the source is available but:
		// - it's potentially playing (.paused === false)
		// - it's not ready to play
		// - it's not loading
		// If it hasAudio, that will be loaded in the 'emptied' handler below
		player.video.load();
		// // console.log('Will load');
	}

	// // console.assert(player.video.currentTime === player.driver.currentTime, 'Video not updating!');

	if (player.video.ended) {
		delete player.video[IIVEvent]; // Allow timeupdate event
		player.video.pause(true);
	}
}

/**
 * METHODS
 */

function play() {
	// // console.log('play');
	var video = this;
	var player = video[IIV];

	// If it's fullscreen, use the native player
	if (video.webkitDisplayingFullscreen) {
		video[IIVPlay]();
		return;
	}

	if (player.driver.src !== 'data:' && player.driver.src !== video.src) {
		// // console.log('src changed on play', video.src);
		setTime(video, 0, true);
		player.driver.src = video.src;
	}

	if (!video.paused) {
		return;
	}
	player.paused = false;

	if (video.buffered.length === 0) {
		// .load() causes the emptied event
		// the alternative is .play()+.pause() but that triggers play/pause events, even worse
		// possibly the alternative is preventing this event only once
		video.load();
	}

	player.driver.play();
	player.updater.start();

	if (!player.hasAudio) {
		dispatchEventAsync(video, 'play');
		if (player.video.readyState >= player.video.HAVE_ENOUGH_DATA) {
			// // console.log('onplay');
			dispatchEventAsync(video, 'playing');
		}
	}
}
function pause(forceEvents) {
	// // console.log('pause');
	var video = this;
	var player = video[IIV];

	player.driver.pause();
	player.updater.stop();

	// If it's fullscreen, the developer the native player.pause()
	// This is at the end of pause() because it also
	// needs to make sure that the simulation is paused
	if (video.webkitDisplayingFullscreen) {
		video[IIVPause]();
	}

	if (player.paused && !forceEvents) {
		return;
	}

	player.paused = true;
	if (!player.hasAudio) {
		dispatchEventAsync(video, 'pause');
	}

	// Handle the 'ended' event only if it's not fullscreen
	if (video.ended && !video.webkitDisplayingFullscreen) {
		video[IIVEvent] = true;
		dispatchEventAsync(video, 'ended');
	}
}

/**
 * SETUP
 */

function addPlayer(video, hasAudio) {
	var player = {};
	video[IIV] = player;
	player.paused = true; // Track whether 'pause' events have been fired
	player.hasAudio = hasAudio;
	player.video = video;
	player.updater = frameIntervalometer(update.bind(player));

	if (hasAudio) {
		player.driver = getAudioFromVideo(video);
	} else {
		video.addEventListener('canplay', function () {
			if (!video.paused) {
				// // console.log('oncanplay');
				dispatchEventAsync(video, 'playing');
			}
		});
		player.driver = {
			src: video.src || video.currentSrc || 'data:',
			muted: true,
			paused: true,
			pause: function () {
				player.driver.paused = true;
			},
			play: function () {
				player.driver.paused = false;
				// Media automatically goes to 0 if .play() is called when it's done
				if (isPlayerEnded(player)) {
					setTime(video, 0);
				}
			},
			get ended() {
				return isPlayerEnded(player);
			}
		};
	}

	// .load() causes the emptied event
	video.addEventListener('emptied', function () {
		// // console.log('driver src is', player.driver.src);
		var wasEmpty = !player.driver.src || player.driver.src === 'data:';
		if (player.driver.src && player.driver.src !== video.src) {
			// // console.log('src changed to', video.src);
			setTime(video, 0, true);
			player.driver.src = video.src;
			// Playing videos will only keep playing if no src was present when .play()’ed
			if (wasEmpty || (!hasAudio && video.autoplay)) {
				player.driver.play();
			} else {
				player.updater.stop();
			}
		}
	}, false);

	// Stop programmatic player when OS takes over
	video.addEventListener('webkitbeginfullscreen', function () {
		if (!video.paused) {
			// Make sure that the <audio> and the syncer/updater are stopped
			video.pause();

			// Play video natively
			video[IIVPlay]();
		} else if (hasAudio && player.driver.buffered.length === 0) {
			// If the first play is native,
			// the <audio> needs to be buffered manually
			// so when the fullscreen ends, it can be set to the same current time
			player.driver.load();
		}
	});
	if (hasAudio) {
		video.addEventListener('webkitendfullscreen', function () {
			// Sync audio to new video position
			player.driver.currentTime = video.currentTime;
			// // console.assert(player.driver.currentTime === video.currentTime, 'Audio not synced');
		});

		// Allow seeking
		video.addEventListener('seeking', function () {
			if (lastRequests.indexOf(video.currentTime * 100 | 0 / 100) < 0) {
				// // console.log('User-requested seeking');
				player.driver.currentTime = video.currentTime;
			}
		});
	}
}

function preventWithPropOrFullscreen(el) {
	var isAllowed = el[IIVEvent];
	delete el[IIVEvent];
	return !el.webkitDisplayingFullscreen && !isAllowed;
}

function overloadAPI(video) {
	var player = video[IIV];
	video[IIVPlay] = video.play;
	video[IIVPause] = video.pause;
	video.play = play;
	video.pause = pause;
	proxyProperty(video, 'paused', player.driver);
	proxyProperty(video, 'muted', player.driver, true);
	proxyProperty(video, 'playbackRate', player.driver, true);
	proxyProperty(video, 'ended', player.driver);
	proxyProperty(video, 'loop', player.driver, true);

	// IIV works by seeking 60 times per second.
	// These events are now useless.
	preventEvent(video, 'seeking', function (el) { return !el.webkitDisplayingFullscreen; });
	preventEvent(video, 'seeked', function (el) { return !el.webkitDisplayingFullscreen; });

	// Limit timeupdate events
	preventEvent(video, 'timeupdate', preventWithPropOrFullscreen);

	// Prevent occasional native ended events
	preventEvent(video, 'ended', preventWithPropOrFullscreen);
}

function enableInlineVideo(video, opts) {
	if ( opts === void 0 ) { opts = {}; }

	// Stop if already enabled
	if (video[IIV]) {
		return;
	}

	// Allow the user to skip detection
	if (!opts.everywhere) {
		// Only iOS8 and 9 are supported
		if (!iOS8or9) {
			return;
		}

		// Stop if it's not an allowed device
		if (!(opts.iPad || opts.ipad ? /iPhone|iPod|iPad/ : /iPhone|iPod/).test(navigator.userAgent)) {
			return;
		}
	}

	// Try to pause
	video.pause();

	// Prevent autoplay.
	// An non-started autoplaying video can't be .pause()'d
	var willAutoplay = video.autoplay;
	video.autoplay = false;

	addPlayer(video, !video.muted);
	overloadAPI(video);
	video.classList.add('IIV');

	// Autoplay
	if (video.muted && willAutoplay) {
		video.play();
		video.addEventListener('playing', function restoreAutoplay() {
			video.autoplay = true;
			video.removeEventListener('playing', restoreAutoplay);
		});
	}

	if (!/iPhone|iPod|iPad/.test(navigator.platform)) {
		console.warn('iphone-inline-video is not guaranteed to work in emulated environments');
	}
}

var Replay = function (parentElement, options) {
  EventEmitter.call(this, options, 'Replay');

  var self = this;
  var browser = new Browser(options);
  var debug = options.debug;

  var built, replayElement, videomail;

  function buildElement () {
    debug('Replay: buildElement()');

    replayElement = index$17('video.' + options.selectors.replayClass);

    if (!replayElement.setAttribute) {
      throw VideomailError.create('Please upgrade browser', options)
    }

    parentElement.appendChild(replayElement);
  }

  function isStandalone () {
    return parentElement.constructor.name === 'HTMLDivElement'
  }

  function copyAttributes (newVideomail) {
    var attributeContainer;

    Object.keys(newVideomail).forEach(function (attribute) {
      attributeContainer = parentElement.querySelector('.' + attribute);

      if (attributeContainer) {
        attributeContainer.innerHTML = newVideomail[attribute];
      }
    });
  }

  function correctDimensions (options) {
    var width, height;

    if (videomail && videomail.playerWidth) {
      width = videomail.playerWidth;
    } else if (parentElement.calculateWidth) {
      width = parentElement.calculateWidth(options);
    }

    if (videomail && videomail.playerHeight) {
      height = videomail.playerHeight;
    } else if (parentElement.calculateHeight) {
      height = parentElement.calculateHeight(options);
    }

    if (width > 0) {
      replayElement.style.width = width + 'px';
    } else {
      replayElement.style.width = 'auto';
    }

    if (height > 0) {
      replayElement.style.height = height + 'px';
    } else {
      replayElement.style.height = 'auto';
    }
  }

  this.setVideomail = function (newVideomail) {
    videomail = newVideomail;

    if (videomail.webm) {
      this.setWebMSource(videomail.webm);
    }

    if (videomail.mp4) {
      this.setMp4Source(videomail.mp4);
    }

    if (videomail.poster) {
      replayElement.setAttribute('poster', videomail.poster);
    }

    copyAttributes(videomail);

    var hasAudio = videomail.recordingStats && videomail.recordingStats.sampleRate > 0;

    this.show(videomail.width, videomail.height, hasAudio);
  };

  this.show = function (recorderWidth, recorderHeight, hasAudio) {
    correctDimensions({
      responsive: true,
      // beware that recorderWidth and recorderHeight can be null sometimes
      videoWidth: recorderWidth || replayElement.videoWidth,
      videoHeight: recorderHeight || replayElement.videoHeight
    });

    index$10(replayElement, false);

    // parent element can be any object, be careful!
    if (parentElement) {
      if (parentElement.style) {
        index$10(parentElement, false);
      } else if (parentElement.show) {
        parentElement.show();
      }
    }

    if (hasAudio) {
      // https://github.com/binarykitchen/videomail-client/issues/115
      // do not set mute to false as this will mess up. just do not mention this attribute at all
      replayElement.setAttribute('volume', 1);
    } else if (!options.isAudioEnabled()) {
      replayElement.setAttribute('muted', true);
    }

    // this must be called after setting the sources and when becoming visible
    // see https://github.com/bfred-it/iphone-inline-video/issues/16
    enableInlineVideo && enableInlineVideo(replayElement, {
      iPad: true
    });

    // this forces to actually fetch the videos from the server
    replayElement.load();

    if (!videomail) {
      self.emit(Events.PREVIEW_SHOWN);
    } else {
      self.emit(Events.REPLAY_SHOWN);
    }
  };

  this.build = function () {
    debug('Replay: build()');

    replayElement = parentElement.querySelector('video.' + options.selectors.replayClass);

    if (!replayElement) {
      buildElement();
    }

    this.hide();

    replayElement.setAttribute('autoplay', true);
    replayElement.setAttribute('autostart', true);
    replayElement.setAttribute('autobuffer', true);
    replayElement.setAttribute('playsinline', true);
    replayElement.setAttribute('controls', 'controls');
    replayElement.setAttribute('preload', 'auto');
    replayElement.setAttribute('webkit-playsinline', 'webkit-playsinline');

    if (!built) {
      if (!isStandalone()) {
        this.on(Events.PREVIEW, function (key, recorderWidth, recorderHeight) {
          self.show(recorderWidth, recorderHeight);
        });
      }

      replayElement.addEventListener('touchstart', function (e) {
        e && e.preventDefault();

        if (this.paused) {
          play();
        } else {
          pause();
        }
      });

      replayElement.onclick = function (e) {
        e && e.preventDefault();

        if (this.paused) {
          play();
        } else {
          pause();
        }
      };
    }

    built = true;

    debug('Replay: built.');
  };

  this.unload = function () {
    built = false;
  };

  this.getVideoSource = function (type) {
    var sources = replayElement.getElementsByTagName('source');
    var l = sources.length;
    var videoType = 'video/' + type;

    var source;

    if (l) {
      var i;

      for (i = 0; i < l && !source; i++) {
        if (sources[i].getAttribute('type') === videoType) {
          source = sources[i];
        }
      }
    }

    return source
  };

  function setVideoSource (type, src, bustCache) {
    var source = self.getVideoSource(type);

    if (src && bustCache) {
      src += '?' + Date.now();
    }

    if (!source) {
      if (src) {
        source = index$17('source', {
          src: src,
          type: 'video/' + type
        });

        replayElement.appendChild(source);
      }
    } else {
      if (src) {
        source.setAttribute('src', src);
      } else {
        replayElement.removeChild(source);
      }
    }
  }

  this.setMp4Source = function (src, bustCache) {
    setVideoSource('mp4', src, bustCache);
  };

  this.setWebMSource = function (src, bustCache) {
    setVideoSource('webm', src, bustCache);
  };

  this.getVideoType = function () {
    return browser.getVideoType(replayElement)
  };

  function pause (cb) {
    // avoids race condition, inspired by
    // http://stackoverflow.com/questions/36803176/how-to-prevent-the-play-request-was-interrupted-by-a-call-to-pause-error
    setTimeout(function () {
      if (replayElement && replayElement.pause) {
        replayElement.pause();
      }

      cb && cb();
    }, 10);
  }

  function play () {
    if (replayElement && replayElement.play) {
      var p = replayElement.play();

      if (p && (typeof Promise !== 'undefined') && (p instanceof Promise)) {
        p.catch(function (reason) {
          options.debug('Caught pending play exception: %s', reason);
        });
      }
    }
  }

  this.reset = function (cb) {
    // pause video to make sure it won't consume any memory
    pause(function () {
      if (replayElement) {
        self.setMp4Source(null);
        self.setWebMSource(null);
      }

      cb && cb();
    });
  };

  this.hide = function () {
    debug('Replay: hide()');

    if (isStandalone()) {
      index$10(parentElement, true);
    } else {
      replayElement && index$10(replayElement, true);
    }
  };

  this.isShown = function () {
    return replayElement && !index$10(replayElement)
  };

  this.getParentElement = function () {
    return parentElement
  };
};

util.inherits(Replay, EventEmitter);

var index$24 = createCommonjsModule(function (module) {
'use strict';

if (!process$4.version ||
    process$4.version.indexOf('v0.') === 0 ||
    process$4.version.indexOf('v1.') === 0 && process$4.version.indexOf('v1.8.') !== 0) {
  module.exports = nextTick$$1;
} else {
  module.exports = nextTick;
}

function nextTick$$1(fn, arg1, arg2, arg3) {
  var arguments$1 = arguments;

  if (typeof fn !== 'function') {
    throw new TypeError('"callback" argument must be a function');
  }
  var len = arguments.length;
  var args, i;
  switch (len) {
  case 0:
  case 1:
    return nextTick(fn);
  case 2:
    return nextTick(function afterTickOne() {
      fn.call(null, arg1);
    });
  case 3:
    return nextTick(function afterTickTwo() {
      fn.call(null, arg1, arg2);
    });
  case 4:
    return nextTick(function afterTickThree() {
      fn.call(null, arg1, arg2, arg3);
    });
  default:
    args = new Array(len - 1);
    i = 0;
    while (i < args.length) {
      args[i++] = arguments$1[i];
    }
    return nextTick(function afterTick() {
      fn.apply(null, args);
    });
  }
}
});

var toString$3 = {}.toString;

var index$26 = Array.isArray || function (arr) {
  return toString$3.call(arr) == '[object Array]';
};

function BufferList$1() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

BufferList$1.prototype.push = function (v) {
  var entry = { data: v, next: null };
  if (this.length > 0) { this.tail.next = entry; }else { this.head = entry; }
  this.tail = entry;
  ++this.length;
};

BufferList$1.prototype.unshift = function (v) {
  var entry = { data: v, next: this.head };
  if (this.length === 0) { this.tail = entry; }
  this.head = entry;
  ++this.length;
};

BufferList$1.prototype.shift = function () {
  if (this.length === 0) { return; }
  var ret = this.head.data;
  if (this.length === 1) { this.head = this.tail = null; }else { this.head = this.head.next; }
  --this.length;
  return ret;
};

BufferList$1.prototype.clear = function () {
  this.head = this.tail = null;
  this.length = 0;
};

BufferList$1.prototype.join = function (s) {
  if (this.length === 0) { return ''; }
  var p = this.head;
  var ret = '' + p.data;
  while (p = p.next) {
    ret += s + p.data;
  }return ret;
};

BufferList$1.prototype.concat = function (n) {
  if (this.length === 0) { return Buffer.alloc(0); }
  if (this.length === 1) { return this.head.data; }
  var ret = Buffer.allocUnsafe(n >>> 0);
  var p = this.head;
  var i = 0;
  while (p) {
    p.data.copy(ret, i);
    i += p.data.length;
    p = p.next;
  }
  return ret;
};

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var isBufferEncoding = Buffer.isEncoding
  || function(encoding) {
       switch (encoding && encoding.toLowerCase()) {
         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
         default: return false;
       }
     };


function assertEncoding(encoding) {
  if (encoding && !isBufferEncoding(encoding)) {
    throw new Error('Unknown encoding: ' + encoding);
  }
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters. CESU-8 is handled as part of the UTF-8 encoding.
//
// @TODO Handling all encodings inside a single object makes it very difficult
// to reason about this code, so it should be split up in the future.
// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
// points as used by CESU-8.
function StringDecoder$1(encoding) {
  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
  assertEncoding(encoding);
  switch (this.encoding) {
    case 'utf8':
      // CESU-8 represents each of Surrogate Pair by 3-bytes
      this.surrogateSize = 3;
      break;
    case 'ucs2':
    case 'utf16le':
      // UTF-16 represents each of Surrogate Pair by 2-bytes
      this.surrogateSize = 2;
      this.detectIncompleteChar = utf16DetectIncompleteChar;
      break;
    case 'base64':
      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
      this.surrogateSize = 3;
      this.detectIncompleteChar = base64DetectIncompleteChar;
      break;
    default:
      this.write = passThroughWrite;
      return;
  }

  // Enough space to store all bytes of a single character. UTF-8 needs 4
  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
  this.charBuffer = new Buffer(6);
  // Number of bytes received for the current incomplete multi-byte character.
  this.charReceived = 0;
  // Number of bytes expected for the current incomplete multi-byte character.
  this.charLength = 0;
}


// write decodes the given buffer and returns it as JS string that is
// guaranteed to not contain any partial multi-byte characters. Any partial
// character found at the end of the buffer is buffered up, and will be
// returned when calling write again with the remaining bytes.
//
// Note: Converting a Buffer containing an orphan surrogate to a String
// currently works, but converting a String to a Buffer (via `new Buffer`, or
// Buffer#write) will replace incomplete surrogates with the unicode
// replacement character. See https://codereview.chromium.org/121173009/ .
StringDecoder$1.prototype.write = function(buffer) {
  var this$1 = this;

  var charStr = '';
  // if our last write ended with an incomplete multibyte character
  while (this.charLength) {
    // determine how many remaining bytes this buffer has to offer for this char
    var available = (buffer.length >= this$1.charLength - this$1.charReceived) ?
        this$1.charLength - this$1.charReceived :
        buffer.length;

    // add the new bytes to the char buffer
    buffer.copy(this$1.charBuffer, this$1.charReceived, 0, available);
    this$1.charReceived += available;

    if (this$1.charReceived < this$1.charLength) {
      // still not enough chars in this buffer? wait for more ...
      return '';
    }

    // remove bytes belonging to the current character from the buffer
    buffer = buffer.slice(available, buffer.length);

    // get the character that was split
    charStr = this$1.charBuffer.slice(0, this$1.charLength).toString(this$1.encoding);

    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
    var charCode = charStr.charCodeAt(charStr.length - 1);
    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
      this$1.charLength += this$1.surrogateSize;
      charStr = '';
      continue;
    }
    this$1.charReceived = this$1.charLength = 0;

    // if there are no more bytes in this buffer, just emit our char
    if (buffer.length === 0) {
      return charStr;
    }
    break;
  }

  // determine and set charLength / charReceived
  this.detectIncompleteChar(buffer);

  var end = buffer.length;
  if (this.charLength) {
    // buffer the incomplete character bytes we got
    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
    end -= this.charReceived;
  }

  charStr += buffer.toString(this.encoding, 0, end);

  var end = charStr.length - 1;
  var charCode = charStr.charCodeAt(end);
  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
    var size = this.surrogateSize;
    this.charLength += size;
    this.charReceived += size;
    this.charBuffer.copy(this.charBuffer, size, 0, size);
    buffer.copy(this.charBuffer, 0, 0, size);
    return charStr.substring(0, end);
  }

  // or just emit the charStr
  return charStr;
};

// detectIncompleteChar determines if there is an incomplete UTF-8 character at
// the end of the given buffer. If so, it sets this.charLength to the byte
// length that character, and sets this.charReceived to the number of bytes
// that are available for this character.
StringDecoder$1.prototype.detectIncompleteChar = function(buffer) {
  var this$1 = this;

  // determine how many bytes we have to check at the end of this buffer
  var i = (buffer.length >= 3) ? 3 : buffer.length;

  // Figure out if one of the last i bytes of our buffer announces an
  // incomplete char.
  for (; i > 0; i--) {
    var c = buffer[buffer.length - i];

    // See http://en.wikipedia.org/wiki/UTF-8#Description

    // 110XXXXX
    if (i == 1 && c >> 5 == 0x06) {
      this$1.charLength = 2;
      break;
    }

    // 1110XXXX
    if (i <= 2 && c >> 4 == 0x0E) {
      this$1.charLength = 3;
      break;
    }

    // 11110XXX
    if (i <= 3 && c >> 3 == 0x1E) {
      this$1.charLength = 4;
      break;
    }
  }
  this.charReceived = i;
};

StringDecoder$1.prototype.end = function(buffer) {
  var res = '';
  if (buffer && buffer.length)
    { res = this.write(buffer); }

  if (this.charReceived) {
    var cr = this.charReceived;
    var buf = this.charBuffer;
    var enc = this.encoding;
    res += buf.slice(0, cr).toString(enc);
  }

  return res;
};

function passThroughWrite(buffer) {
  return buffer.toString(this.encoding);
}

function utf16DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 2;
  this.charLength = this.charReceived ? 2 : 0;
}

function base64DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 3;
  this.charLength = this.charReceived ? 3 : 0;
}

Readable$2.ReadableState = ReadableState$1;
var debug$1 = debuglog('stream');
inherits$1(Readable$2, EventEmitter$1);

function prependListener$1(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') {
    return emitter.prependListener(event, fn);
  } else {
    // This is a hack to make sure that our error handler is attached before any
    // userland ones.  NEVER DO THIS. This is here only because this code needs
    // to continue to work with older versions of Node.js that do not include
    // the prependListener() method. The goal is to eventually remove this hack.
    if (!emitter._events || !emitter._events[event])
      { emitter.on(event, fn); }
    else if (Array.isArray(emitter._events[event]))
      { emitter._events[event].unshift(fn); }
    else
      { emitter._events[event] = [fn, emitter._events[event]]; }
  }
}
function listenerCount$1 (emitter, type) {
  return emitter.listeners(type).length;
}
function ReadableState$1(options, stream) {

  options = options || {};

  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex$2) { this.objectMode = this.objectMode || !!options.readableObjectMode; }

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = ~ ~this.highWaterMark;

  // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()
  this.buffer = new BufferList$1();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // when piping, we only care about 'readable' events that happen
  // after read()ing all the bytes and not getting any pushback.
  this.ranOut = false;

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    this.decoder = new StringDecoder$1(options.encoding);
    this.encoding = options.encoding;
  }
}
function Readable$2(options) {

  if (!(this instanceof Readable$2)) { return new Readable$2(options); }

  this._readableState = new ReadableState$1(options, this);

  // legacy
  this.readable = true;

  if (options && typeof options.read === 'function') { this._read = options.read; }

  EventEmitter$1.call(this);
}

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable$2.prototype.push = function (chunk, encoding) {
  var state = this._readableState;

  if (!state.objectMode && typeof chunk === 'string') {
    encoding = encoding || state.defaultEncoding;
    if (encoding !== state.encoding) {
      chunk = Buffer.from(chunk, encoding);
      encoding = '';
    }
  }

  return readableAddChunk$1(this, state, chunk, encoding, false);
};

// Unshift should *always* be something directly out of read()
Readable$2.prototype.unshift = function (chunk) {
  var state = this._readableState;
  return readableAddChunk$1(this, state, chunk, '', true);
};

Readable$2.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};

function readableAddChunk$1(stream, state, chunk, encoding, addToFront) {
  var er = chunkInvalid$1(state, chunk);
  if (er) {
    stream.emit('error', er);
  } else if (chunk === null) {
    state.reading = false;
    onEofChunk$1(stream, state);
  } else if (state.objectMode || chunk && chunk.length > 0) {
    if (state.ended && !addToFront) {
      var e = new Error('stream.push() after EOF');
      stream.emit('error', e);
    } else if (state.endEmitted && addToFront) {
      var _e = new Error('stream.unshift() after end event');
      stream.emit('error', _e);
    } else {
      var skipAdd;
      if (state.decoder && !addToFront && !encoding) {
        chunk = state.decoder.write(chunk);
        skipAdd = !state.objectMode && chunk.length === 0;
      }

      if (!addToFront) { state.reading = false; }

      // Don't add to the buffer if we've decoded to an empty string chunk and
      // we're not in object mode
      if (!skipAdd) {
        // if we want the data now, just emit it.
        if (state.flowing && state.length === 0 && !state.sync) {
          stream.emit('data', chunk);
          stream.read(0);
        } else {
          // update the buffer info.
          state.length += state.objectMode ? 1 : chunk.length;
          if (addToFront) { state.buffer.unshift(chunk); }else { state.buffer.push(chunk); }

          if (state.needReadable) { emitReadable$1(stream); }
        }
      }

      maybeReadMore$1(stream, state);
    }
  } else if (!addToFront) {
    state.reading = false;
  }

  return needMoreData$1(state);
}

// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData$1(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}

// backwards compatibility.
Readable$2.prototype.setEncoding = function (enc) {
  this._readableState.decoder = new StringDecoder$1(enc);
  this._readableState.encoding = enc;
  return this;
};

// Don't raise the hwm > 8MB
var MAX_HWM$1 = 0x800000;
function computeNewHighWaterMark$1(n) {
  if (n >= MAX_HWM$1) {
    n = MAX_HWM$1;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}

// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead$1(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) { return 0; }
  if (state.objectMode) { return 1; }
  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) { return state.buffer.head.data.length; }else { return state.length; }
  }
  // If we're asking for more than the current hwm, then raise the hwm.
  if (n > state.highWaterMark) { state.highWaterMark = computeNewHighWaterMark$1(n); }
  if (n <= state.length) { return n; }
  // Don't have enough
  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }
  return state.length;
}

// you can override either this method, or the async _read(n) below.
Readable$2.prototype.read = function (n) {
  debug$1('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;

  if (n !== 0) { state.emittedReadable = false; }

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
    debug$1('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) { endReadable$1(this); }else { emitReadable$1(this); }
    return null;
  }

  n = howMuchToRead$1(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0) { endReadable$1(this); }
    return null;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;
  debug$1('need readable', doRead);

  // if we currently have less than the highWaterMark, then also read some
  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug$1('length less than watermark', doRead);
  }

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading) {
    doRead = false;
    debug$1('reading or ended', doRead);
  } else if (doRead) {
    debug$1('do read');
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0) { state.needReadable = true; }
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
    // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.
    if (!state.reading) { n = howMuchToRead$1(nOrig, state); }
  }

  var ret;
  if (n > 0) { ret = fromList$1(n, state); }else { ret = null; }

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  } else {
    state.length -= n;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) { state.needReadable = true; }

    // If we tried to read() past the EOF, then emit end on the next tick.
    if (nOrig !== n && state.ended) { endReadable$1(this); }
  }

  if (ret !== null) { this.emit('data', ret); }

  return ret;
};

function chunkInvalid$1(state, chunk) {
  var er = null;
  if (!isBuffer$1(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}

function onEofChunk$1(stream, state) {
  if (state.ended) { return; }
  if (state.decoder) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // emit 'readable' now to make sure it gets picked up.
  emitReadable$1(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable$1(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug$1('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync) { nextTick(emitReadable_$1, stream); }else { emitReadable_$1(stream); }
  }
}

function emitReadable_$1(stream) {
  debug$1('emit readable');
  stream.emit('readable');
  flow$1(stream);
}

// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore$1(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    nextTick(maybeReadMore_$1, stream, state);
  }
}

function maybeReadMore_$1(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug$1('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      { break; }else { len = state.length; }
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable$2.prototype._read = function (n) {
  this.emit('error', new Error('not implemented'));
};

Readable$2.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;
  debug$1('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

  var doEnd = (!pipeOpts || pipeOpts.end !== false);

  var endFn = doEnd ? onend : cleanup;
  if (state.endEmitted) { nextTick(endFn); }else { src.once('end', endFn); }

  dest.on('unpipe', onunpipe);
  function onunpipe(readable) {
    debug$1('onunpipe');
    if (readable === src) {
      cleanup();
    }
  }

  function onend() {
    debug$1('onend');
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain$1(src);
  dest.on('drain', ondrain);

  var cleanedUp = false;
  function cleanup() {
    debug$1('cleanup');
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', cleanup);
    src.removeListener('data', ondata);

    cleanedUp = true;

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) { ondrain(); }
  }

  // If the user pushes more data while we're writing to dest then we'll end up
  // in ondata again. However, we only want to increase awaitDrain once because
  // dest will only emit one 'drain' event for the multiple writes.
  // => Introduce a guard on increasing awaitDrain.
  var increasedAwaitDrain = false;
  src.on('data', ondata);
  function ondata(chunk) {
    debug$1('ondata');
    increasedAwaitDrain = false;
    var ret = dest.write(chunk);
    if (false === ret && !increasedAwaitDrain) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf$2(state.pipes, dest) !== -1) && !cleanedUp) {
        debug$1('false write response, pause', src._readableState.awaitDrain);
        src._readableState.awaitDrain++;
        increasedAwaitDrain = true;
      }
      src.pause();
    }
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    debug$1('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (listenerCount$1(dest, 'error') === 0) { dest.emit('error', er); }
  }

  // Make sure our error handler is attached before userland ones.
  prependListener$1(dest, 'error', onerror);

  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    debug$1('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    debug$1('unpipe');
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    debug$1('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain$1(src) {
  return function () {
    var state = src._readableState;
    debug$1('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) { state.awaitDrain--; }
    if (state.awaitDrain === 0 && src.listeners('data').length) {
      state.flowing = true;
      flow$1(src);
    }
  };
}

Readable$2.prototype.unpipe = function (dest) {
  var this$1 = this;

  var state = this._readableState;

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0) { return this; }

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) { return this; }

    if (!dest) { dest = state.pipes; }

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) { dest.emit('unpipe', this); }
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var _i = 0; _i < len; _i++) {
      dests[_i].emit('unpipe', this$1);
    }return this;
  }

  // try to find the right one.
  var i = indexOf$2(state.pipes, dest);
  if (i === -1) { return this; }

  state.pipes.splice(i, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) { state.pipes = state.pipes[0]; }

  dest.emit('unpipe', this);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable$2.prototype.on = function (ev, fn) {
  var res = EventEmitter$1.prototype.on.call(this, ev, fn);

  if (ev === 'data') {
    // Start flowing on next tick if stream isn't explicitly paused
    if (this._readableState.flowing !== false) { this.resume(); }
  } else if (ev === 'readable') {
    var state = this._readableState;
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.emittedReadable = false;
      if (!state.reading) {
        nextTick(nReadingNextTick$1, this);
      } else if (state.length) {
        emitReadable$1(this, state);
      }
    }
  }

  return res;
};
Readable$2.prototype.addListener = Readable$2.prototype.on;

function nReadingNextTick$1(self) {
  debug$1('readable nexttick read 0');
  self.read(0);
}

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable$2.prototype.resume = function () {
  var state = this._readableState;
  if (!state.flowing) {
    debug$1('resume');
    state.flowing = true;
    resume$1(this, state);
  }
  return this;
};

function resume$1(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    nextTick(resume_$1, stream, state);
  }
}

function resume_$1(stream, state) {
  if (!state.reading) {
    debug$1('resume read 0');
    stream.read(0);
  }

  state.resumeScheduled = false;
  state.awaitDrain = 0;
  stream.emit('resume');
  flow$1(stream);
  if (state.flowing && !state.reading) { stream.read(0); }
}

Readable$2.prototype.pause = function () {
  debug$1('call pause flowing=%j', this._readableState.flowing);
  if (false !== this._readableState.flowing) {
    debug$1('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }
  return this;
};

function flow$1(stream) {
  var state = stream._readableState;
  debug$1('flow', state.flowing);
  while (state.flowing && stream.read() !== null) {}
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable$2.prototype.wrap = function (stream) {
  var this$1 = this;

  var state = this._readableState;
  var paused = false;

  var self = this;
  stream.on('end', function () {
    debug$1('wrapped end');
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) { self.push(chunk); }
    }

    self.push(null);
  });

  stream.on('data', function (chunk) {
    debug$1('wrapped data');
    if (state.decoder) { chunk = state.decoder.write(chunk); }

    // don't skip over falsy values in objectMode
    if (state.objectMode && (chunk === null || chunk === undefined)) { return; }else if (!state.objectMode && (!chunk || !chunk.length)) { return; }

    var ret = self.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (this$1[i] === undefined && typeof stream[i] === 'function') {
      this$1[i] = function (method) {
        return function () {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  }

  // proxy certain important events.
  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
  forEach$1(events, function (ev) {
    stream.on(ev, self.emit.bind(self, ev));
  });

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  self._read = function (n) {
    debug$1('wrapped _read', n);
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return self;
};

// exposed for testing purposes only.
Readable$2._fromList = fromList$1;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList$1(n, state) {
  // nothing buffered
  if (state.length === 0) { return null; }

  var ret;
  if (state.objectMode) { ret = state.buffer.shift(); }else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) { ret = state.buffer.join(''); }else if (state.buffer.length === 1) { ret = state.buffer.head.data; }else { ret = state.buffer.concat(state.length); }
    state.buffer.clear();
  } else {
    // read part of list
    ret = fromListPartial$1(n, state.buffer, state.decoder);
  }

  return ret;
}

// Extracts only enough buffered data to satisfy the amount requested.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromListPartial$1(n, list, hasStrings) {
  var ret;
  if (n < list.head.data.length) {
    // slice is the same for buffers and strings
    ret = list.head.data.slice(0, n);
    list.head.data = list.head.data.slice(n);
  } else if (n === list.head.data.length) {
    // first chunk is a perfect match
    ret = list.shift();
  } else {
    // result spans more than one buffer
    ret = hasStrings ? copyFromBufferString$1(n, list) : copyFromBuffer$1(n, list);
  }
  return ret;
}

// Copies a specified amount of characters from the list of buffered data
// chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBufferString$1(n, list) {
  var p = list.head;
  var c = 1;
  var ret = p.data;
  n -= ret.length;
  while (p = p.next) {
    var str = p.data;
    var nb = n > str.length ? str.length : n;
    if (nb === str.length) { ret += str; }else { ret += str.slice(0, n); }
    n -= nb;
    if (n === 0) {
      if (nb === str.length) {
        ++c;
        if (p.next) { list.head = p.next; }else { list.head = list.tail = null; }
      } else {
        list.head = p;
        p.data = str.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

// Copies a specified amount of bytes from the list of buffered data chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBuffer$1(n, list) {
  var ret = Buffer.allocUnsafe(n);
  var p = list.head;
  var c = 1;
  p.data.copy(ret);
  n -= p.data.length;
  while (p = p.next) {
    var buf = p.data;
    var nb = n > buf.length ? buf.length : n;
    buf.copy(ret, ret.length - n, 0, nb);
    n -= nb;
    if (n === 0) {
      if (nb === buf.length) {
        ++c;
        if (p.next) { list.head = p.next; }else { list.head = list.tail = null; }
      } else {
        list.head = p;
        p.data = buf.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

function endReadable$1(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0) { throw new Error('"endReadable()" called on non-empty stream'); }

  if (!state.endEmitted) {
    state.ended = true;
    nextTick(endReadableNT$1, state, stream);
  }
}

function endReadableNT$1(state, stream) {
  // Check that we didn't get one last unshift.
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');
  }
}

function forEach$1(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

function indexOf$2(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) { return i; }
  }
  return -1;
}

// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.


Writable$1.WritableState = WritableState;
inherits$1(Writable$1, EventEmitter$1);

function nop() {}

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
}

function WritableState(options, stream) {
  Object.defineProperty(this, 'buffer', {
    get: deprecate(function () {
      return this.getBuffer();
    }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')
  });
  options = options || {};

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex$2) { this.objectMode = this.objectMode || !!options.writableObjectMode; }

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = ~ ~this.highWaterMark;

  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // when true all writes will be buffered until .uncork() call
  this.corked = 0;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function (er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.bufferedRequest = null;
  this.lastBufferedRequest = null;

  // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted
  this.pendingcb = 0;

  // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams
  this.prefinished = false;

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;

  // count buffered requests
  this.bufferedRequestCount = 0;

  // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two
  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function writableStateGetBuffer() {
  var current = this.bufferedRequest;
  var out = [];
  while (current) {
    out.push(current);
    current = current.next;
  }
  return out;
};

function Writable$1(options) {

  // Writable ctor is applied to Duplexes, though they're not
  // instanceof Writable, they're instanceof Readable.
  if (!(this instanceof Writable$1) && !(this instanceof Duplex$2)) { return new Writable$1(options); }

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') { this._write = options.write; }

    if (typeof options.writev === 'function') { this._writev = options.writev; }
  }

  EventEmitter$1.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable$1.prototype.pipe = function () {
  this.emit('error', new Error('Cannot pipe, not readable'));
};

function writeAfterEnd(stream, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  nextTick(cb, er);
}

// If we get something that is not a buffer, string, null, or undefined,
// and we're not in objectMode, then that's an error.
// Otherwise stream chunks are all considered to be of length=1, and the
// watermarks determine how many objects to keep in the buffer, rather than
// how many bytes or characters.
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  var er = false;
  // Always throw error if a null is written
  // if we are not in object mode then throw
  // if it is not a buffer, string, or undefined.
  if (chunk === null) {
    er = new TypeError('May not write null values to stream');
  } else if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  if (er) {
    stream.emit('error', er);
    nextTick(cb, er);
    valid = false;
  }
  return valid;
}

Writable$1.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (Buffer.isBuffer(chunk)) { encoding = 'buffer'; }else if (!encoding) { encoding = state.defaultEncoding; }

  if (typeof cb !== 'function') { cb = nop; }

  if (state.ended) { writeAfterEnd(this, cb); }else if (validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, chunk, encoding, cb);
  }

  return ret;
};

Writable$1.prototype.cork = function () {
  var state = this._writableState;

  state.corked++;
};

Writable$1.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;

    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) { clearBuffer(this, state); }
  }
};

Writable$1.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') { encoding = encoding.toLowerCase(); }
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) { throw new TypeError('Unknown encoding: ' + encoding); }
  this._writableState.defaultEncoding = encoding;
  return this;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer.from(chunk, encoding);
  }
  return chunk;
}

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, chunk, encoding, cb) {
  chunk = decodeChunk(state, chunk, encoding);

  if (Buffer.isBuffer(chunk)) { encoding = 'buffer'; }
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret) { state.needDrain = true; }

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }
    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev) { stream._writev(chunk, state.onwrite); }else { stream._write(chunk, encoding, state.onwrite); }
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;
  if (sync) { nextTick(cb, er); }else { cb(er); }

  stream._writableState.errorEmitted = true;
  stream.emit('error', er);
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er) { onwriteError(stream, state, sync, er, cb); }else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state);

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      /*<replacement>*/
        nextTick(afterWrite, stream, state, finished, cb);
      /*</replacement>*/
    } else {
        afterWrite(stream, state, finished, cb);
      }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) { onwriteDrain(stream, state); }
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}

// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;

    var count = 0;
    while (entry) {
      buffer[count] = entry;
      entry = entry.next;
      count += 1;
    }

    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

    // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite
    state.pendingcb++;
    state.lastBufferedRequest = null;
    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;

      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.
      if (state.writing) {
        break;
      }
    }

    if (entry === null) { state.lastBufferedRequest = null; }
  }

  state.bufferedRequestCount = 0;
  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable$1.prototype._write = function (chunk, encoding, cb) {
  cb(new Error('not implemented'));
};

Writable$1.prototype._writev = null;

Writable$1.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) { this.write(chunk, encoding); }

  // .end() fully uncorks
  if (state.corked) {
    state.corked = 1;
    this.uncork();
  }

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished) { endWritable(this, state, cb); }
};

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}

function prefinish(stream, state) {
  if (!state.prefinished) {
    state.prefinished = true;
    stream.emit('prefinish');
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);
  if (need) {
    if (state.pendingcb === 0) {
      prefinish(stream, state);
      state.finished = true;
      stream.emit('finish');
    } else {
      prefinish(stream, state);
    }
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished) { nextTick(cb); }else { stream.once('finish', cb); }
  }
  state.ended = true;
  stream.writable = false;
}

// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;

  this.finish = function (err) {
    var entry = _this.entry;
    _this.entry = null;
    while (entry) {
      var cb = entry.callback;
      state.pendingcb--;
      cb(err);
      entry = entry.next;
    }
    if (state.corkedRequestsFree) {
      state.corkedRequestsFree.next = _this;
    } else {
      state.corkedRequestsFree = _this;
    }
  };
}

inherits$1(Duplex$2, Readable$2);

var keys$3 = Object.keys(Writable$1.prototype);
for (var v = 0; v < keys$3.length; v++) {
  var method = keys$3[v];
  if (!Duplex$2.prototype[method]) { Duplex$2.prototype[method] = Writable$1.prototype[method]; }
}
function Duplex$2(options) {
  if (!(this instanceof Duplex$2)) { return new Duplex$2(options); }

  Readable$2.call(this, options);
  Writable$1.call(this, options);

  if (options && options.readable === false) { this.readable = false; }

  if (options && options.writable === false) { this.writable = false; }

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false) { this.allowHalfOpen = false; }

  this.once('end', onend);
}

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended) { return; }

  // no more data can be written.
  // But allow more writes to happen in this tick.
  nextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.


inherits$1(Transform$2, Duplex$2);

function TransformState(stream) {
  this.afterTransform = function (er, data) {
    return afterTransform(stream, er, data);
  };

  this.needTransform = false;
  this.transforming = false;
  this.writecb = null;
  this.writechunk = null;
  this.writeencoding = null;
}

function afterTransform(stream, er, data) {
  var ts = stream._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb) { return stream.emit('error', new Error('no writecb in Transform class')); }

  ts.writechunk = null;
  ts.writecb = null;

  if (data !== null && data !== undefined) { stream.push(data); }

  cb(er);

  var rs = stream._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    stream._read(rs.highWaterMark);
  }
}
function Transform$2(options) {
  if (!(this instanceof Transform$2)) { return new Transform$2(options); }

  Duplex$2.call(this, options);

  this._transformState = new TransformState(this);

  // when the writable side finishes, then flush out anything remaining.
  var stream = this;

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') { this._transform = options.transform; }

    if (typeof options.flush === 'function') { this._flush = options.flush; }
  }

  this.once('prefinish', function () {
    if (typeof this._flush === 'function') { this._flush(function (er) {
      done(stream, er);
    }); }else { done(stream); }
  });
}

Transform$2.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex$2.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform$2.prototype._transform = function (chunk, encoding, cb) {
  throw new Error('Not implemented');
};

Transform$2.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) { this._read(rs.highWaterMark); }
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform$2.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

function done(stream, er) {
  if (er) { return stream.emit('error', er); }

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  var ws = stream._writableState;
  var ts = stream._transformState;

  if (ws.length) { throw new Error('Calling transform done when ws.length != 0'); }

  if (ts.transforming) { throw new Error('Calling transform done when still transforming'); }

  return stream.push(null);
}

inherits$1(PassThrough$1, Transform$2);
function PassThrough$1(options) {
  if (!(this instanceof PassThrough$1)) { return new PassThrough$1(options); }

  Transform$2.call(this, options);
}

PassThrough$1.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};

inherits$1(Stream$1, EventEmitter$1);
Stream$1.Readable = Readable$2;
Stream$1.Writable = Writable$1;
Stream$1.Duplex = Duplex$2;
Stream$1.Transform = Transform$2;
Stream$1.PassThrough = PassThrough$1;

// Backwards-compat with node 0.4.x
Stream$1.Stream = Stream$1;

// old-style streams.  Note that the pipe method (the only relevant
// part of this class) is overridden in the Readable class.

function Stream$1() {
  EventEmitter$1.call(this);
}

Stream$1.prototype.pipe = function(dest, options) {
  var source = this;

  function ondata(chunk) {
    if (dest.writable) {
      if (false === dest.write(chunk) && source.pause) {
        source.pause();
      }
    }
  }

  source.on('data', ondata);

  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }

  dest.on('drain', ondrain);

  // If the 'end' option is not supplied, dest.end() will be called when
  // source gets the 'end' or 'close' events.  Only dest.end() once.
  if (!dest._isStdio && (!options || options.end !== false)) {
    source.on('end', onend);
    source.on('close', onclose);
  }

  var didOnEnd = false;
  function onend() {
    if (didOnEnd) { return; }
    didOnEnd = true;

    dest.end();
  }


  function onclose() {
    if (didOnEnd) { return; }
    didOnEnd = true;

    if (typeof dest.destroy === 'function') { dest.destroy(); }
  }

  // don't leave dangling pipes when there are errors.
  function onerror(er) {
    cleanup();
    if (EventEmitter$1.listenerCount(this, 'error') === 0) {
      throw er; // Unhandled stream error in pipe.
    }
  }

  source.on('error', onerror);
  dest.on('error', onerror);

  // remove all the event listeners that were added.
  function cleanup() {
    source.removeListener('data', ondata);
    dest.removeListener('drain', ondrain);

    source.removeListener('end', onend);
    source.removeListener('close', onclose);

    source.removeListener('error', onerror);
    dest.removeListener('error', onerror);

    source.removeListener('end', cleanup);
    source.removeListener('close', cleanup);

    dest.removeListener('close', cleanup);
  }

  source.on('end', cleanup);
  source.on('close', cleanup);

  dest.on('close', cleanup);

  dest.emit('pipe', source);

  // Allow for unix-like usage: A.pipe(B).pipe(C)
  return dest;
};

var buffer = ( index$2 && undefined ) || index$2;

var index$28 = createCommonjsModule(function (module, exports) {
/* eslint-disable node/no-deprecated-api */

var Buffer = buffer.Buffer;

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key];
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer;
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports);
  exports.Buffer = SafeBuffer;
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer);

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
};

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size);
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding);
    } else {
      buf.fill(fill);
    }
  } else {
    buf.fill(0);
  }
  return buf
};

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
};

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
};
});

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.

function isArray$3(arg) {
  if (Array.isArray) {
    return Array.isArray(arg);
  }
  return objectToString$2(arg) === '[object Array]';
}
var isArray_1 = isArray$3;

function isBoolean$1(arg) {
  return typeof arg === 'boolean';
}
var isBoolean_1 = isBoolean$1;

function isNull$1(arg) {
  return arg === null;
}
var isNull_1 = isNull$1;

function isNullOrUndefined$1(arg) {
  return arg == null;
}
var isNullOrUndefined_1 = isNullOrUndefined$1;

function isNumber$1(arg) {
  return typeof arg === 'number';
}
var isNumber_1 = isNumber$1;

function isString$1(arg) {
  return typeof arg === 'string';
}
var isString_1 = isString$1;

function isSymbol$2(arg) {
  return typeof arg === 'symbol';
}
var isSymbol_1 = isSymbol$2;

function isUndefined$1(arg) {
  return arg === void 0;
}
var isUndefined_1 = isUndefined$1;

function isRegExp$2(re) {
  return objectToString$2(re) === '[object RegExp]';
}
var isRegExp_1 = isRegExp$2;

function isObject$4(arg) {
  return typeof arg === 'object' && arg !== null;
}
var isObject_1$2 = isObject$4;

function isDate$1(d) {
  return objectToString$2(d) === '[object Date]';
}
var isDate_1 = isDate$1;

function isError$1(e) {
  return (objectToString$2(e) === '[object Error]' || e instanceof Error);
}
var isError_1 = isError$1;

function isFunction$3(arg) {
  return typeof arg === 'function';
}
var isFunction_1$2 = isFunction$3;

function isPrimitive$1(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
var isPrimitive_1 = isPrimitive$1;

var isBuffer$2 = isBuffer$1;

function objectToString$2(o) {
  return Object.prototype.toString.call(o);
}

var util$2 = {
	isArray: isArray_1,
	isBoolean: isBoolean_1,
	isNull: isNull_1,
	isNullOrUndefined: isNullOrUndefined_1,
	isNumber: isNumber_1,
	isString: isString_1,
	isSymbol: isSymbol_1,
	isUndefined: isUndefined_1,
	isRegExp: isRegExp_1,
	isObject: isObject_1$2,
	isDate: isDate_1,
	isError: isError_1,
	isFunction: isFunction_1$2,
	isPrimitive: isPrimitive_1,
	isBuffer: isBuffer$2
};

var inherits_browser = createCommonjsModule(function (module) {
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    var TempCtor = function () {};
    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  };
}
});

/*<replacement>*/

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Buffer$3 = index$28.Buffer;
/*</replacement>*/

function copyBuffer(src, target, offset) {
  src.copy(target, offset);
}

var BufferList$2 = function () {
  function BufferList() {
    _classCallCheck(this, BufferList);

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  BufferList.prototype.push = function push(v) {
    var entry = { data: v, next: null };
    if (this.length > 0) { this.tail.next = entry; }else { this.head = entry; }
    this.tail = entry;
    ++this.length;
  };

  BufferList.prototype.unshift = function unshift(v) {
    var entry = { data: v, next: this.head };
    if (this.length === 0) { this.tail = entry; }
    this.head = entry;
    ++this.length;
  };

  BufferList.prototype.shift = function shift() {
    if (this.length === 0) { return; }
    var ret = this.head.data;
    if (this.length === 1) { this.head = this.tail = null; }else { this.head = this.head.next; }
    --this.length;
    return ret;
  };

  BufferList.prototype.clear = function clear() {
    this.head = this.tail = null;
    this.length = 0;
  };

  BufferList.prototype.join = function join(s) {
    if (this.length === 0) { return ''; }
    var p = this.head;
    var ret = '' + p.data;
    while (p = p.next) {
      ret += s + p.data;
    }return ret;
  };

  BufferList.prototype.concat = function concat(n) {
    if (this.length === 0) { return Buffer$3.alloc(0); }
    if (this.length === 1) { return this.head.data; }
    var ret = Buffer$3.allocUnsafe(n >>> 0);
    var p = this.head;
    var i = 0;
    while (p) {
      copyBuffer(p.data, ret, i);
      i += p.data.length;
      p = p.next;
    }
    return ret;
  };

  return BufferList;
}();

/*<replacement>*/


/*</replacement>*/

// undocumented cb() API, needed for core, not for public API
function destroy(err, cb) {
  var _this = this;

  var readableDestroyed = this._readableState && this._readableState.destroyed;
  var writableDestroyed = this._writableState && this._writableState.destroyed;

  if (readableDestroyed || writableDestroyed) {
    if (cb) {
      cb(err);
    } else if (err && (!this._writableState || !this._writableState.errorEmitted)) {
      index$24(emitErrorNT, this, err);
    }
    return;
  }

  // we set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks

  if (this._readableState) {
    this._readableState.destroyed = true;
  }

  // if this is a duplex stream mark the writable part as destroyed as well
  if (this._writableState) {
    this._writableState.destroyed = true;
  }

  this._destroy(err || null, function (err) {
    if (!cb && err) {
      index$24(emitErrorNT, _this, err);
      if (_this._writableState) {
        _this._writableState.errorEmitted = true;
      }
    } else if (cb) {
      cb(err);
    }
  });
}

function undestroy() {
  if (this._readableState) {
    this._readableState.destroyed = false;
    this._readableState.reading = false;
    this._readableState.ended = false;
    this._readableState.endEmitted = false;
  }

  if (this._writableState) {
    this._writableState.destroyed = false;
    this._writableState.ended = false;
    this._writableState.ending = false;
    this._writableState.finished = false;
    this._writableState.errorEmitted = false;
  }
}

function emitErrorNT(self, err) {
  self.emit('error', err);
}

var destroy_1 = {
  destroy: destroy,
  undestroy: undestroy
};

var browser$3 = true;

/**
 * Module exports.
 */

var browser$4 = deprecate$1;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate$1 (fn, msg) {
  if (config$1('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config$1('throwDeprecation')) {
        throw new Error(msg);
      } else if (config$1('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config$1 (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!commonjsGlobal.localStorage) { return false; }
  } catch (_) {
    return false;
  }
  var val = commonjsGlobal.localStorage[name];
  if (null == val) { return false; }
  return String(val).toLowerCase() === 'true';
}

var streamBrowser = require$$0$25.EventEmitter;

/*<replacement>*/


/*</replacement>*/

var _stream_writable = Writable$2;

// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest$1(state) {
  var _this = this;

  this.next = null;
  this.entry = null;
  this.finish = function () {
    onCorkedFinish(_this, state);
  };
}
/* </replacement> */

/*<replacement>*/
var asyncWrite = !browser$3 && ['v0.10', 'v0.9.'].indexOf(process$4.version.slice(0, 5)) > -1 ? setImmediate : index$24;
/*</replacement>*/

/*<replacement>*/
var Duplex$4;
/*</replacement>*/

Writable$2.WritableState = WritableState$1;

/*<replacement>*/

util$2.inherits = inherits_browser;
/*</replacement>*/

/*<replacement>*/
var internalUtil = {
  deprecate: browser$4
};
/*</replacement>*/

/*<replacement>*/

/*</replacement>*/

/*<replacement>*/
var Buffer$4 = index$28.Buffer;
var OurUint8Array$1 = commonjsGlobal.Uint8Array || function () {};
function _uint8ArrayToBuffer$1(chunk) {
  return Buffer$4.from(chunk);
}
function _isUint8Array$1(obj) {
  return Buffer$4.isBuffer(obj) || obj instanceof OurUint8Array$1;
}
/*</replacement>*/



util$2.inherits(Writable$2, streamBrowser);

function nop$1() {}

function WritableState$1(options, stream) {
  Duplex$4 = Duplex$4 || _stream_duplex;

  options = options || {};

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex$4) { this.objectMode = this.objectMode || !!options.writableObjectMode; }

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = Math.floor(this.highWaterMark);

  // if _final has been called
  this.finalCalled = false;

  // drain event flag.
  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // has it been destroyed
  this.destroyed = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // when true all writes will be buffered until .uncork() call
  this.corked = 0;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function (er) {
    onwrite$1(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.bufferedRequest = null;
  this.lastBufferedRequest = null;

  // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted
  this.pendingcb = 0;

  // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams
  this.prefinished = false;

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;

  // count buffered requests
  this.bufferedRequestCount = 0;

  // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two
  this.corkedRequestsFree = new CorkedRequest$1(this);
}

WritableState$1.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];
  while (current) {
    out.push(current);
    current = current.next;
  }
  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState$1.prototype, 'buffer', {
      get: internalUtil.deprecate(function () {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
    });
  } catch (_) {}
})();

// Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var realHasInstance;
if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable$2, Symbol.hasInstance, {
    value: function (object) {
      if (realHasInstance.call(this, object)) { return true; }

      return object && object._writableState instanceof WritableState$1;
    }
  });
} else {
  realHasInstance = function (object) {
    return object instanceof this;
  };
}

function Writable$2(options) {
  Duplex$4 = Duplex$4 || _stream_duplex;

  // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.

  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.
  if (!realHasInstance.call(Writable$2, this) && !(this instanceof Duplex$4)) {
    return new Writable$2(options);
  }

  this._writableState = new WritableState$1(options, this);

  // legacy.
  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') { this._write = options.write; }

    if (typeof options.writev === 'function') { this._writev = options.writev; }

    if (typeof options.destroy === 'function') { this._destroy = options.destroy; }

    if (typeof options.final === 'function') { this._final = options.final; }
  }

  streamBrowser.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable$2.prototype.pipe = function () {
  this.emit('error', new Error('Cannot pipe, not readable'));
};

function writeAfterEnd$1(stream, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  index$24(cb, er);
}

// Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function validChunk$1(stream, state, chunk, cb) {
  var valid = true;
  var er = false;

  if (chunk === null) {
    er = new TypeError('May not write null values to stream');
  } else if (typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  if (er) {
    stream.emit('error', er);
    index$24(cb, er);
    valid = false;
  }
  return valid;
}

Writable$2.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;
  var isBuf = _isUint8Array$1(chunk) && !state.objectMode;

  if (isBuf && !Buffer$4.isBuffer(chunk)) {
    chunk = _uint8ArrayToBuffer$1(chunk);
  }

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (isBuf) { encoding = 'buffer'; }else if (!encoding) { encoding = state.defaultEncoding; }

  if (typeof cb !== 'function') { cb = nop$1; }

  if (state.ended) { writeAfterEnd$1(this, cb); }else if (isBuf || validChunk$1(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer$1(this, state, isBuf, chunk, encoding, cb);
  }

  return ret;
};

Writable$2.prototype.cork = function () {
  var state = this._writableState;

  state.corked++;
};

Writable$2.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;

    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) { clearBuffer$1(this, state); }
  }
};

Writable$2.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') { encoding = encoding.toLowerCase(); }
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) { throw new TypeError('Unknown encoding: ' + encoding); }
  this._writableState.defaultEncoding = encoding;
  return this;
};

function decodeChunk$1(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer$4.from(chunk, encoding);
  }
  return chunk;
}

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer$1(stream, state, isBuf, chunk, encoding, cb) {
  if (!isBuf) {
    var newChunk = decodeChunk$1(state, chunk, encoding);
    if (chunk !== newChunk) {
      isBuf = true;
      encoding = 'buffer';
      chunk = newChunk;
    }
  }
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret) { state.needDrain = true; }

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = {
      chunk: chunk,
      encoding: encoding,
      isBuf: isBuf,
      callback: cb,
      next: null
    };
    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }
    state.bufferedRequestCount += 1;
  } else {
    doWrite$1(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite$1(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev) { stream._writev(chunk, state.onwrite); }else { stream._write(chunk, encoding, state.onwrite); }
  state.sync = false;
}

function onwriteError$1(stream, state, sync, er, cb) {
  --state.pendingcb;

  if (sync) {
    // defer the callback if we are being called synchronously
    // to avoid piling up things on the stack
    index$24(cb, er);
    // this can emit finish, and it will always happen
    // after error
    index$24(finishMaybe$1, stream, state);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
  } else {
    // the caller expect this to happen before if
    // it is async
    cb(er);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
    // this can emit finish, but finish must
    // always follow error
    finishMaybe$1(stream, state);
  }
}

function onwriteStateUpdate$1(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite$1(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate$1(state);

  if (er) { onwriteError$1(stream, state, sync, er, cb); }else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish$1(state);

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer$1(stream, state);
    }

    if (sync) {
      /*<replacement>*/
      asyncWrite(afterWrite$1, stream, state, finished, cb);
      /*</replacement>*/
    } else {
      afterWrite$1(stream, state, finished, cb);
    }
  }
}

function afterWrite$1(stream, state, finished, cb) {
  if (!finished) { onwriteDrain$1(stream, state); }
  state.pendingcb--;
  cb();
  finishMaybe$1(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain$1(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}

// if there's something in the buffer waiting, then process it
function clearBuffer$1(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;

    var count = 0;
    var allBuffers = true;
    while (entry) {
      buffer[count] = entry;
      if (!entry.isBuf) { allBuffers = false; }
      entry = entry.next;
      count += 1;
    }
    buffer.allBuffers = allBuffers;

    doWrite$1(stream, state, true, state.length, buffer, '', holder.finish);

    // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite
    state.pendingcb++;
    state.lastBufferedRequest = null;
    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest$1(state);
    }
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;

      doWrite$1(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.
      if (state.writing) {
        break;
      }
    }

    if (entry === null) { state.lastBufferedRequest = null; }
  }

  state.bufferedRequestCount = 0;
  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable$2.prototype._write = function (chunk, encoding, cb) {
  cb(new Error('_write() is not implemented'));
};

Writable$2.prototype._writev = null;

Writable$2.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) { this.write(chunk, encoding); }

  // .end() fully uncorks
  if (state.corked) {
    state.corked = 1;
    this.uncork();
  }

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished) { endWritable$1(this, state, cb); }
};

function needFinish$1(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function callFinal(stream, state) {
  stream._final(function (err) {
    state.pendingcb--;
    if (err) {
      stream.emit('error', err);
    }
    state.prefinished = true;
    stream.emit('prefinish');
    finishMaybe$1(stream, state);
  });
}
function prefinish$1(stream, state) {
  if (!state.prefinished && !state.finalCalled) {
    if (typeof stream._final === 'function') {
      state.pendingcb++;
      state.finalCalled = true;
      index$24(callFinal, stream, state);
    } else {
      state.prefinished = true;
      stream.emit('prefinish');
    }
  }
}

function finishMaybe$1(stream, state) {
  var need = needFinish$1(state);
  if (need) {
    prefinish$1(stream, state);
    if (state.pendingcb === 0) {
      state.finished = true;
      stream.emit('finish');
    }
  }
  return need;
}

function endWritable$1(stream, state, cb) {
  state.ending = true;
  finishMaybe$1(stream, state);
  if (cb) {
    if (state.finished) { index$24(cb); }else { stream.once('finish', cb); }
  }
  state.ended = true;
  stream.writable = false;
}

function onCorkedFinish(corkReq, state, err) {
  var entry = corkReq.entry;
  corkReq.entry = null;
  while (entry) {
    var cb = entry.callback;
    state.pendingcb--;
    cb(err);
    entry = entry.next;
  }
  if (state.corkedRequestsFree) {
    state.corkedRequestsFree.next = corkReq;
  } else {
    state.corkedRequestsFree = corkReq;
  }
}

Object.defineProperty(Writable$2.prototype, 'destroyed', {
  get: function () {
    if (this._writableState === undefined) {
      return false;
    }
    return this._writableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._writableState) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._writableState.destroyed = value;
  }
});

Writable$2.prototype.destroy = destroy_1.destroy;
Writable$2.prototype._undestroy = destroy_1.undestroy;
Writable$2.prototype._destroy = function (err, cb) {
  this.end();
  cb(err);
};

/*<replacement>*/


/*</replacement>*/

/*<replacement>*/
var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }return keys;
};
/*</replacement>*/

var _stream_duplex = Duplex$3;

/*<replacement>*/

util$2.inherits = inherits_browser;
/*</replacement>*/




util$2.inherits(Duplex$3, _stream_readable);

var keys$4 = objectKeys(_stream_writable.prototype);
for (var v$1 = 0; v$1 < keys$4.length; v$1++) {
  var method$1 = keys$4[v$1];
  if (!Duplex$3.prototype[method$1]) { Duplex$3.prototype[method$1] = _stream_writable.prototype[method$1]; }
}

function Duplex$3(options) {
  if (!(this instanceof Duplex$3)) { return new Duplex$3(options); }

  _stream_readable.call(this, options);
  _stream_writable.call(this, options);

  if (options && options.readable === false) { this.readable = false; }

  if (options && options.writable === false) { this.writable = false; }

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false) { this.allowHalfOpen = false; }

  this.once('end', onend$1);
}

// the no-half-open enforcer
function onend$1() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended) { return; }

  // no more data can be written.
  // But allow more writes to happen in this tick.
  index$24(onEndNT$1, this);
}

function onEndNT$1(self) {
  self.end();
}

Object.defineProperty(Duplex$3.prototype, 'destroyed', {
  get: function () {
    if (this._readableState === undefined || this._writableState === undefined) {
      return false;
    }
    return this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (this._readableState === undefined || this._writableState === undefined) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
    this._writableState.destroyed = value;
  }
});

Duplex$3.prototype._destroy = function (err, cb) {
  this.push(null);
  this.end();

  index$24(cb, err);
};

var Buffer$5 = index$28.Buffer;

var isEncoding = Buffer$5.isEncoding || function (encoding) {
  encoding = '' + encoding;
  switch (encoding && encoding.toLowerCase()) {
    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
      return true;
    default:
      return false;
  }
};

function _normalizeEncoding(enc) {
  if (!enc) { return 'utf8'; }
  var retried;
  while (true) {
    switch (enc) {
      case 'utf8':
      case 'utf-8':
        return 'utf8';
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 'utf16le';
      case 'latin1':
      case 'binary':
        return 'latin1';
      case 'base64':
      case 'ascii':
      case 'hex':
        return enc;
      default:
        if (retried) { return; } // undefined
        enc = ('' + enc).toLowerCase();
        retried = true;
    }
  }
}

// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);
  if (typeof nenc !== 'string' && (Buffer$5.isEncoding === isEncoding || !isEncoding(enc))) { throw new Error('Unknown encoding: ' + enc); }
  return nenc || enc;
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
var StringDecoder_1 = StringDecoder$2;
function StringDecoder$2(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;
  switch (this.encoding) {
    case 'utf16le':
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;
    case 'utf8':
      this.fillLast = utf8FillLast;
      nb = 4;
      break;
    case 'base64':
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;
    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer$5.allocUnsafe(nb);
}

StringDecoder$2.prototype.write = function (buf) {
  if (buf.length === 0) { return ''; }
  var r;
  var i;
  if (this.lastNeed) {
    r = this.fillLast(buf);
    if (r === undefined) { return ''; }
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }
  if (i < buf.length) { return r ? r + this.text(buf, i) : this.text(buf, i); }
  return r || '';
};

StringDecoder$2.prototype.end = utf8End;

// Returns only complete characters in a Buffer
StringDecoder$2.prototype.text = utf8Text;

// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder$2.prototype.fillLast = function (buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
};

// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte.
function utf8CheckByte(byte) {
  if (byte <= 0x7F) { return 0; }else if (byte >> 5 === 0x06) { return 2; }else if (byte >> 4 === 0x0E) { return 3; }else if (byte >> 3 === 0x1E) { return 4; }
  return -1;
}

// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
  var j = buf.length - 1;
  if (j < i) { return 0; }
  var nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) { self.lastNeed = nb - 1; }
    return nb;
  }
  if (--j < i) { return 0; }
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) { self.lastNeed = nb - 2; }
    return nb;
  }
  if (--j < i) { return 0; }
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2) { nb = 0; }else { self.lastNeed = nb - 3; }
    }
    return nb;
  }
  return 0;
}

// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// UTF-8 replacement characters ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
  if ((buf[0] & 0xC0) !== 0x80) {
    self.lastNeed = 0;
    return '\ufffd'.repeat(p);
  }
  if (self.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 0xC0) !== 0x80) {
      self.lastNeed = 1;
      return '\ufffd'.repeat(p + 1);
    }
    if (self.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 0xC0) !== 0x80) {
        self.lastNeed = 2;
        return '\ufffd'.repeat(p + 2);
      }
    }
  }
}

// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r = utf8CheckExtraBytes(this, buf, p);
  if (r !== undefined) { return r; }
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
}

// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed) { return buf.toString('utf8', i); }
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString('utf8', i, end);
}

// For UTF-8, a replacement character for each buffered byte of a (partial)
// character needs to be added to the output.
function utf8End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) { return r + '\ufffd'.repeat(this.lastTotal - this.lastNeed); }
  return r;
}

// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r = buf.toString('utf16le', i);
    if (r) {
      var c = r.charCodeAt(r.length - 1);
      if (c >= 0xD800 && c <= 0xDBFF) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r.slice(0, -1);
      }
    }
    return r;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString('utf16le', i, buf.length - 1);
}

// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString('utf16le', 0, end);
  }
  return r;
}

function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0) { return buf.toString('base64', i); }
  this.lastNeed = 3 - n;
  this.lastTotal = 3;
  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }
  return buf.toString('base64', i, buf.length - n);
}

function base64End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) { return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed); }
  return r;
}

// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
  return buf.toString(this.encoding);
}

function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : '';
}

var string_decoder = {
	StringDecoder: StringDecoder_1
};

/*<replacement>*/


/*</replacement>*/

var _stream_readable = Readable;

/*<replacement>*/

/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Readable.ReadableState = ReadableState;

var EElistenerCount = function (emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/

/*</replacement>*/

// TODO(bmeurer): Change this back to const once hole checks are
// properly optimized away early in Ignition+TurboFan.
/*<replacement>*/
var Buffer$2 = index$28.Buffer;
var OurUint8Array = commonjsGlobal.Uint8Array || function () {};
function _uint8ArrayToBuffer(chunk) {
  return Buffer$2.from(chunk);
}
function _isUint8Array(obj) {
  return Buffer$2.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*</replacement>*/

/*<replacement>*/

util$2.inherits = inherits_browser;
/*</replacement>*/

/*<replacement>*/

var debug = void 0;
if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function () {};
}
/*</replacement>*/



var StringDecoder;

util$2.inherits(Readable, streamBrowser);

var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') {
    return emitter.prependListener(event, fn);
  } else {
    // This is a hack to make sure that our error handler is attached before any
    // userland ones.  NEVER DO THIS. This is here only because this code needs
    // to continue to work with older versions of Node.js that do not include
    // the prependListener() method. The goal is to eventually remove this hack.
    if (!emitter._events || !emitter._events[event]) { emitter.on(event, fn); }else if (index$26(emitter._events[event])) { emitter._events[event].unshift(fn); }else { emitter._events[event] = [fn, emitter._events[event]]; }
  }
}

function ReadableState(options, stream) {
  Duplex = Duplex || _stream_duplex;

  options = options || {};

  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex) { this.objectMode = this.objectMode || !!options.readableObjectMode; }

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = Math.floor(this.highWaterMark);

  // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()
  this.buffer = new BufferList$2();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // a flag to be able to tell if the event 'readable'/'data' is emitted
  // immediately, or on a later tick.  We set this to true at first, because
  // any actions that shouldn't happen until "later" should generally also
  // not happen before the first read call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;

  // has it been destroyed
  this.destroyed = false;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder) { StringDecoder = string_decoder.StringDecoder; }
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  Duplex = Duplex || _stream_duplex;

  if (!(this instanceof Readable)) { return new Readable(options); }

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  if (options) {
    if (typeof options.read === 'function') { this._read = options.read; }

    if (typeof options.destroy === 'function') { this._destroy = options.destroy; }
  }

  streamBrowser.call(this);
}

Object.defineProperty(Readable.prototype, 'destroyed', {
  get: function () {
    if (this._readableState === undefined) {
      return false;
    }
    return this._readableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._readableState) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
  }
});

Readable.prototype.destroy = destroy_1.destroy;
Readable.prototype._undestroy = destroy_1.undestroy;
Readable.prototype._destroy = function (err, cb) {
  this.push(null);
  cb(err);
};

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;
  var skipChunkCheck;

  if (!state.objectMode) {
    if (typeof chunk === 'string') {
      encoding = encoding || state.defaultEncoding;
      if (encoding !== state.encoding) {
        chunk = Buffer$2.from(chunk, encoding);
        encoding = '';
      }
      skipChunkCheck = true;
    }
  } else {
    skipChunkCheck = true;
  }

  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function (chunk) {
  return readableAddChunk(this, chunk, null, true, false);
};

function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
  var state = stream._readableState;
  if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else {
    var er;
    if (!skipChunkCheck) { er = chunkInvalid(state, chunk); }
    if (er) {
      stream.emit('error', er);
    } else if (state.objectMode || chunk && chunk.length > 0) {
      if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer$2.prototype) {
        chunk = _uint8ArrayToBuffer(chunk);
      }

      if (addToFront) {
        if (state.endEmitted) { stream.emit('error', new Error('stream.unshift() after end event')); }else { addChunk(stream, state, chunk, true); }
      } else if (state.ended) {
        stream.emit('error', new Error('stream.push() after EOF'));
      } else {
        state.reading = false;
        if (state.decoder && !encoding) {
          chunk = state.decoder.write(chunk);
          if (state.objectMode || chunk.length !== 0) { addChunk(stream, state, chunk, false); }else { maybeReadMore(stream, state); }
        } else {
          addChunk(stream, state, chunk, false);
        }
      }
    } else if (!addToFront) {
      state.reading = false;
    }
  }

  return needMoreData(state);
}

function addChunk(stream, state, chunk, addToFront) {
  if (state.flowing && state.length === 0 && !state.sync) {
    stream.emit('data', chunk);
    stream.read(0);
  } else {
    // update the buffer info.
    state.length += state.objectMode ? 1 : chunk.length;
    if (addToFront) { state.buffer.unshift(chunk); }else { state.buffer.push(chunk); }

    if (state.needReadable) { emitReadable(stream); }
  }
  maybeReadMore(stream, state);
}

function chunkInvalid(state, chunk) {
  var er;
  if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}

// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};

// backwards compatibility.
Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) { StringDecoder = string_decoder.StringDecoder; }
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
  return this;
};

// Don't raise the hwm > 8MB
var MAX_HWM = 0x800000;
function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}

// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) { return 0; }
  if (state.objectMode) { return 1; }
  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) { return state.buffer.head.data.length; }else { return state.length; }
  }
  // If we're asking for more than the current hwm, then raise the hwm.
  if (n > state.highWaterMark) { state.highWaterMark = computeNewHighWaterMark(n); }
  if (n <= state.length) { return n; }
  // Don't have enough
  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }
  return state.length;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;

  if (n !== 0) { state.emittedReadable = false; }

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) { endReadable(this); }else { emitReadable(this); }
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0) { endReadable(this); }
    return null;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;
  debug('need readable', doRead);

  // if we currently have less than the highWaterMark, then also read some
  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  }

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0) { state.needReadable = true; }
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
    // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.
    if (!state.reading) { n = howMuchToRead(nOrig, state); }
  }

  var ret;
  if (n > 0) { ret = fromList(n, state); }else { ret = null; }

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  } else {
    state.length -= n;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) { state.needReadable = true; }

    // If we tried to read() past the EOF, then emit end on the next tick.
    if (nOrig !== n && state.ended) { endReadable(this); }
  }

  if (ret !== null) { this.emit('data', ret); }

  return ret;
};

function onEofChunk(stream, state) {
  if (state.ended) { return; }
  if (state.decoder) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // emit 'readable' now to make sure it gets picked up.
  emitReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync) { index$24(emitReadable_, stream); }else { emitReadable_(stream); }
  }
}

function emitReadable_(stream) {
  debug('emit readable');
  stream.emit('readable');
  flow(stream);
}

// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    index$24(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      { break; }else { len = state.length; }
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function (n) {
  this.emit('error', new Error('_read() is not implemented'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process$4.stdout && dest !== process$4.stderr;

  var endFn = doEnd ? onend : unpipe;
  if (state.endEmitted) { index$24(endFn); }else { src.once('end', endFn); }

  dest.on('unpipe', onunpipe);
  function onunpipe(readable, unpipeInfo) {
    debug('onunpipe');
    if (readable === src) {
      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
        unpipeInfo.hasUnpiped = true;
        cleanup();
      }
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  var cleanedUp = false;
  function cleanup() {
    debug('cleanup');
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', unpipe);
    src.removeListener('data', ondata);

    cleanedUp = true;

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) { ondrain(); }
  }

  // If the user pushes more data while we're writing to dest then we'll end up
  // in ondata again. However, we only want to increase awaitDrain once because
  // dest will only emit one 'drain' event for the multiple writes.
  // => Introduce a guard on increasing awaitDrain.
  var increasedAwaitDrain = false;
  src.on('data', ondata);
  function ondata(chunk) {
    debug('ondata');
    increasedAwaitDrain = false;
    var ret = dest.write(chunk);
    if (false === ret && !increasedAwaitDrain) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf$1(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', src._readableState.awaitDrain);
        src._readableState.awaitDrain++;
        increasedAwaitDrain = true;
      }
      src.pause();
    }
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) { dest.emit('error', er); }
  }

  // Make sure our error handler is attached before userland ones.
  prependListener(dest, 'error', onerror);

  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function () {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) { state.awaitDrain--; }
    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var this$1 = this;

  var state = this._readableState;
  var unpipeInfo = { hasUnpiped: false };

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0) { return this; }

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) { return this; }

    if (!dest) { dest = state.pipes; }

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) { dest.emit('unpipe', this, unpipeInfo); }
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this$1, unpipeInfo);
    }return this;
  }

  // try to find the right one.
  var index = indexOf$1(state.pipes, dest);
  if (index === -1) { return this; }

  state.pipes.splice(index, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) { state.pipes = state.pipes[0]; }

  dest.emit('unpipe', this, unpipeInfo);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function (ev, fn) {
  var res = streamBrowser.prototype.on.call(this, ev, fn);

  if (ev === 'data') {
    // Start flowing on next tick if stream isn't explicitly paused
    if (this._readableState.flowing !== false) { this.resume(); }
  } else if (ev === 'readable') {
    var state = this._readableState;
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.emittedReadable = false;
      if (!state.reading) {
        index$24(nReadingNextTick, this);
      } else if (state.length) {
        emitReadable(this);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
}

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function () {
  var state = this._readableState;
  if (!state.flowing) {
    debug('resume');
    state.flowing = true;
    resume(this, state);
  }
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    index$24(resume_, stream, state);
  }
}

function resume_(stream, state) {
  if (!state.reading) {
    debug('resume read 0');
    stream.read(0);
  }

  state.resumeScheduled = false;
  state.awaitDrain = 0;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) { stream.read(0); }
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);
  if (false !== this._readableState.flowing) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);
  while (state.flowing && stream.read() !== null) {}
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function (stream) {
  var this$1 = this;

  var state = this._readableState;
  var paused = false;

  var self = this;
  stream.on('end', function () {
    debug('wrapped end');
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) { self.push(chunk); }
    }

    self.push(null);
  });

  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) { chunk = state.decoder.write(chunk); }

    // don't skip over falsy values in objectMode
    if (state.objectMode && (chunk === null || chunk === undefined)) { return; }else if (!state.objectMode && (!chunk || !chunk.length)) { return; }

    var ret = self.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (this$1[i] === undefined && typeof stream[i] === 'function') {
      this$1[i] = function (method) {
        return function () {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  }

  // proxy certain important events.
  for (var n = 0; n < kProxyEvents.length; n++) {
    stream.on(kProxyEvents[n], self.emit.bind(self, kProxyEvents[n]));
  }

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  self._read = function (n) {
    debug('wrapped _read', n);
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return self;
};

// exposed for testing purposes only.
Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) { return null; }

  var ret;
  if (state.objectMode) { ret = state.buffer.shift(); }else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) { ret = state.buffer.join(''); }else if (state.buffer.length === 1) { ret = state.buffer.head.data; }else { ret = state.buffer.concat(state.length); }
    state.buffer.clear();
  } else {
    // read part of list
    ret = fromListPartial(n, state.buffer, state.decoder);
  }

  return ret;
}

// Extracts only enough buffered data to satisfy the amount requested.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromListPartial(n, list, hasStrings) {
  var ret;
  if (n < list.head.data.length) {
    // slice is the same for buffers and strings
    ret = list.head.data.slice(0, n);
    list.head.data = list.head.data.slice(n);
  } else if (n === list.head.data.length) {
    // first chunk is a perfect match
    ret = list.shift();
  } else {
    // result spans more than one buffer
    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
  }
  return ret;
}

// Copies a specified amount of characters from the list of buffered data
// chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBufferString(n, list) {
  var p = list.head;
  var c = 1;
  var ret = p.data;
  n -= ret.length;
  while (p = p.next) {
    var str = p.data;
    var nb = n > str.length ? str.length : n;
    if (nb === str.length) { ret += str; }else { ret += str.slice(0, n); }
    n -= nb;
    if (n === 0) {
      if (nb === str.length) {
        ++c;
        if (p.next) { list.head = p.next; }else { list.head = list.tail = null; }
      } else {
        list.head = p;
        p.data = str.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

// Copies a specified amount of bytes from the list of buffered data chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBuffer(n, list) {
  var ret = Buffer$2.allocUnsafe(n);
  var p = list.head;
  var c = 1;
  p.data.copy(ret);
  n -= p.data.length;
  while (p = p.next) {
    var buf = p.data;
    var nb = n > buf.length ? buf.length : n;
    buf.copy(ret, ret.length - n, 0, nb);
    n -= nb;
    if (n === 0) {
      if (nb === buf.length) {
        ++c;
        if (p.next) { list.head = p.next; }else { list.head = list.tail = null; }
      } else {
        list.head = p;
        p.data = buf.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0) { throw new Error('"endReadable()" called on non-empty stream'); }

  if (!state.endEmitted) {
    state.ended = true;
    index$24(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  // Check that we didn't get one last unshift.
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');
  }
}

function indexOf$1(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) { return i; }
  }
  return -1;
}

var _stream_transform = Transform$3;



/*<replacement>*/

util$2.inherits = inherits_browser;
/*</replacement>*/

util$2.inherits(Transform$3, _stream_duplex);

function TransformState$1(stream) {
  this.afterTransform = function (er, data) {
    return afterTransform$1(stream, er, data);
  };

  this.needTransform = false;
  this.transforming = false;
  this.writecb = null;
  this.writechunk = null;
  this.writeencoding = null;
}

function afterTransform$1(stream, er, data) {
  var ts = stream._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb) {
    return stream.emit('error', new Error('write callback called multiple times'));
  }

  ts.writechunk = null;
  ts.writecb = null;

  if (data !== null && data !== undefined) { stream.push(data); }

  cb(er);

  var rs = stream._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    stream._read(rs.highWaterMark);
  }
}

function Transform$3(options) {
  if (!(this instanceof Transform$3)) { return new Transform$3(options); }

  _stream_duplex.call(this, options);

  this._transformState = new TransformState$1(this);

  var stream = this;

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') { this._transform = options.transform; }

    if (typeof options.flush === 'function') { this._flush = options.flush; }
  }

  // When the writable side finishes, then flush out anything remaining.
  this.once('prefinish', function () {
    if (typeof this._flush === 'function') { this._flush(function (er, data) {
      done$1(stream, er, data);
    }); }else { done$1(stream); }
  });
}

Transform$3.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return _stream_duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform$3.prototype._transform = function (chunk, encoding, cb) {
  throw new Error('_transform() is not implemented');
};

Transform$3.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) { this._read(rs.highWaterMark); }
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform$3.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

Transform$3.prototype._destroy = function (err, cb) {
  var _this = this;

  _stream_duplex.prototype._destroy.call(this, err, function (err2) {
    cb(err2);
    _this.emit('close');
  });
};

function done$1(stream, er, data) {
  if (er) { return stream.emit('error', er); }

  if (data !== null && data !== undefined) { stream.push(data); }

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  var ws = stream._writableState;
  var ts = stream._transformState;

  if (ws.length) { throw new Error('Calling transform done when ws.length != 0'); }

  if (ts.transforming) { throw new Error('Calling transform done when still transforming'); }

  return stream.push(null);
}

var _stream_passthrough = PassThrough$2;



/*<replacement>*/

util$2.inherits = inherits_browser;
/*</replacement>*/

util$2.inherits(PassThrough$2, _stream_transform);

function PassThrough$2(options) {
  if (!(this instanceof PassThrough$2)) { return new PassThrough$2(options); }

  _stream_transform.call(this, options);
}

PassThrough$2.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};

var readableBrowser = createCommonjsModule(function (module, exports) {
exports = module.exports = _stream_readable;
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = _stream_writable;
exports.Duplex = _stream_duplex;
exports.Transform = _stream_transform;
exports.PassThrough = _stream_passthrough;
});

// Returns a wrapper function that returns a wrapped callback
// The wrapper function should do some stuff, and return a
// presumably different callback function.
// This makes sure that own properties are retained, so that
// decorations and such are not lost along the way.
var wrappy_1 = wrappy;
function wrappy (fn, cb) {
  if (fn && cb) { return wrappy(fn)(cb) }

  if (typeof fn !== 'function')
    { throw new TypeError('need wrapper function') }

  Object.keys(fn).forEach(function (k) {
    wrapper[k] = fn[k];
  });

  return wrapper

  function wrapper() {
    var arguments$1 = arguments;

    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments$1[i];
    }
    var ret = fn.apply(this, args);
    var cb = args[args.length-1];
    if (typeof ret === 'function' && ret !== cb) {
      Object.keys(cb).forEach(function (k) {
        ret[k] = cb[k];
      });
    }
    return ret
  }
}

var once_1 = wrappy_1(once$1);

once$1.proto = once$1(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once$1(this)
    },
    configurable: true
  });
});

function once$1 (fn) {
  var f = function () {
    if (f.called) { return f.value }
    f.called = true;
    return f.value = fn.apply(this, arguments)
  };
  f.called = false;
  return f
}

var noop$2 = function() {};

var isRequest = function(stream) {
	return stream.setHeader && typeof stream.abort === 'function';
};

var eos = function(stream, opts, callback) {
	if (typeof opts === 'function') { return eos(stream, null, opts); }
	if (!opts) { opts = {}; }

	callback = once_1(callback || noop$2);

	var ws = stream._writableState;
	var rs = stream._readableState;
	var readable = opts.readable || (opts.readable !== false && stream.readable);
	var writable = opts.writable || (opts.writable !== false && stream.writable);

	var onlegacyfinish = function() {
		if (!stream.writable) { onfinish(); }
	};

	var onfinish = function() {
		writable = false;
		if (!readable) { callback(); }
	};

	var onend = function() {
		readable = false;
		if (!writable) { callback(); }
	};

	var onclose = function() {
		if (readable && !(rs && rs.ended)) { return callback(new Error('premature close')); }
		if (writable && !(ws && ws.ended)) { return callback(new Error('premature close')); }
	};

	var onrequest = function() {
		stream.req.on('finish', onfinish);
	};

	if (isRequest(stream)) {
		stream.on('complete', onfinish);
		stream.on('abort', onclose);
		if (stream.req) { onrequest(); }
		else { stream.on('request', onrequest); }
	} else if (writable && !ws) { // legacy streams
		stream.on('end', onlegacyfinish);
		stream.on('close', onlegacyfinish);
	}

	stream.on('end', onend);
	stream.on('finish', onfinish);
	if (opts.error !== false) { stream.on('error', callback); }
	stream.on('close', onclose);

	return function() {
		stream.removeListener('complete', onfinish);
		stream.removeListener('abort', onclose);
		stream.removeListener('request', onrequest);
		if (stream.req) { stream.req.removeListener('finish', onfinish); }
		stream.removeListener('end', onlegacyfinish);
		stream.removeListener('close', onlegacyfinish);
		stream.removeListener('finish', onfinish);
		stream.removeListener('end', onend);
		stream.removeListener('error', callback);
		stream.removeListener('close', onclose);
	};
};

var index$32 = eos;

var index$34 = shift;

function shift (stream) {
  var rs = stream._readableState;
  if (!rs) { return null }
  return rs.objectMode ? stream.read() : stream.read(getStateLength(rs))
}

function getStateLength (state) {
  if (state.buffer.length) {
    // Since node 6.3.0 state.buffer is a BufferList not an array
    if (state.buffer.head) {
      return state.buffer.head.data.length
    }

    return state.buffer[0].length
  }

  return state.length
}

var SIGNAL_FLUSH = new Buffer([0]);

var onuncork = function(self, fn) {
  if (self._corked) { self.once('uncork', fn); }
  else { fn(); }
};

var destroyer = function(self, end) {
  return function(err) {
    if (err) { self.destroy(err.message === 'premature close' ? null : err); }
    else if (end && !self._ended) { self.end(); }
  }
};

var end = function(ws, fn) {
  if (!ws) { return fn() }
  if (ws._writableState && ws._writableState.finished) { return fn() }
  if (ws._writableState) { return ws.end(fn) }
  ws.end();
  fn();
};

var toStreams2 = function(rs) {
  return new (readableBrowser.Readable)({objectMode:true, highWaterMark:16}).wrap(rs)
};

var Duplexify = function(writable, readable, opts) {
  if (!(this instanceof Duplexify)) { return new Duplexify(writable, readable, opts) }
  readableBrowser.Duplex.call(this, opts);

  this._writable = null;
  this._readable = null;
  this._readable2 = null;

  this._forwardDestroy = !opts || opts.destroy !== false;
  this._forwardEnd = !opts || opts.end !== false;
  this._corked = 1; // start corked
  this._ondrain = null;
  this._drained = false;
  this._forwarding = false;
  this._unwrite = null;
  this._unread = null;
  this._ended = false;

  this.destroyed = false;

  if (writable) { this.setWritable(writable); }
  if (readable) { this.setReadable(readable); }
};

inherits_browser(Duplexify, readableBrowser.Duplex);

Duplexify.obj = function(writable, readable, opts) {
  if (!opts) { opts = {}; }
  opts.objectMode = true;
  opts.highWaterMark = 16;
  return new Duplexify(writable, readable, opts)
};

Duplexify.prototype.cork = function() {
  if (++this._corked === 1) { this.emit('cork'); }
};

Duplexify.prototype.uncork = function() {
  if (this._corked && --this._corked === 0) { this.emit('uncork'); }
};

Duplexify.prototype.setWritable = function(writable) {
  if (this._unwrite) { this._unwrite(); }

  if (this.destroyed) {
    if (writable && writable.destroy) { writable.destroy(); }
    return
  }

  if (writable === null || writable === false) {
    this.end();
    return
  }

  var self = this;
  var unend = index$32(writable, {writable:true, readable:false}, destroyer(this, this._forwardEnd));

  var ondrain = function() {
    var ondrain = self._ondrain;
    self._ondrain = null;
    if (ondrain) { ondrain(); }
  };

  var clear = function() {
    self._writable.removeListener('drain', ondrain);
    unend();
  };

  if (this._unwrite) { nextTick(ondrain); } // force a drain on stream reset to avoid livelocks

  this._writable = writable;
  this._writable.on('drain', ondrain);
  this._unwrite = clear;

  this.uncork(); // always uncork setWritable
};

Duplexify.prototype.setReadable = function(readable) {
  if (this._unread) { this._unread(); }

  if (this.destroyed) {
    if (readable && readable.destroy) { readable.destroy(); }
    return
  }

  if (readable === null || readable === false) {
    this.push(null);
    this.resume();
    return
  }

  var self = this;
  var unend = index$32(readable, {writable:false, readable:true}, destroyer(this));

  var onreadable = function() {
    self._forward();
  };

  var onend = function() {
    self.push(null);
  };

  var clear = function() {
    self._readable2.removeListener('readable', onreadable);
    self._readable2.removeListener('end', onend);
    unend();
  };

  this._drained = true;
  this._readable = readable;
  this._readable2 = readable._readableState ? readable : toStreams2(readable);
  this._readable2.on('readable', onreadable);
  this._readable2.on('end', onend);
  this._unread = clear;

  this._forward();
};

Duplexify.prototype._read = function() {
  this._drained = true;
  this._forward();
};

Duplexify.prototype._forward = function() {
  var this$1 = this;

  if (this._forwarding || !this._readable2 || !this._drained) { return }
  this._forwarding = true;

  var data;

  while (this._drained && (data = index$34(this._readable2)) !== null) {
    if (this$1.destroyed) { continue }
    this$1._drained = this$1.push(data);
  }

  this._forwarding = false;
};

Duplexify.prototype.destroy = function(err) {
  if (this.destroyed) { return }
  this.destroyed = true;

  var self = this;
  nextTick(function() {
    self._destroy(err);
  });
};

Duplexify.prototype._destroy = function(err) {
  if (err) {
    var ondrain = this._ondrain;
    this._ondrain = null;
    if (ondrain) { ondrain(err); }
    else { this.emit('error', err); }
  }

  if (this._forwardDestroy) {
    if (this._readable && this._readable.destroy) { this._readable.destroy(); }
    if (this._writable && this._writable.destroy) { this._writable.destroy(); }
  }

  this.emit('close');
};

Duplexify.prototype._write = function(data, enc, cb) {
  if (this.destroyed) { return cb() }
  if (this._corked) { return onuncork(this, this._write.bind(this, data, enc, cb)) }
  if (data === SIGNAL_FLUSH) { return this._finish(cb) }
  if (!this._writable) { return cb() }

  if (this._writable.write(data) === false) { this._ondrain = cb; }
  else { cb(); }
};


Duplexify.prototype._finish = function(cb) {
  var self = this;
  this.emit('preend');
  onuncork(this, function() {
    end(self._forwardEnd && self._writable, function() {
      // haxx to not emit prefinish twice
      if (self._writableState.prefinished === false) { self._writableState.prefinished = true; }
      self.emit('prefinish');
      onuncork(self, cb);
    });
  });
};

Duplexify.prototype.end = function(data, enc, cb) {
  if (typeof data === 'function') { return this.end(null, null, data) }
  if (typeof enc === 'function') { return this.end(data, null, enc) }
  this._ended = true;
  if (data) { this.write(data); }
  if (!this._writableState.ending) { this.write(SIGNAL_FLUSH); }
  return readableBrowser.Writable.prototype.end.call(this, cb)
};

var index$30 = Duplexify;

var ws = null;

if (typeof WebSocket !== 'undefined') {
  ws = WebSocket;
} else if (typeof MozWebSocket !== 'undefined') {
  ws = MozWebSocket;
} else {
  ws = window.WebSocket || window.MozWebSocket;
}

var wsFallback = ws;

var Transform = readableBrowser.Transform;


var Buffer$1 = index$28.Buffer;

var stream = WebSocketStream;

function buildProxy (options, socketWrite, socketEnd) {
  var proxy = new Transform({
    objectMode: options.objectMode
  });

  proxy._destroyed = false;
  proxy._write = socketWrite;
  proxy._flush = socketEnd;

  proxy.destroy = function(err) {
    if (this._destroyed) { return }
      this._destroyed = true;

    var self = this;
    nextTick(function() {
      if (err)
        { self.emit('error', err); }
      self.emit('close');
    });
  };

  return proxy
}

function WebSocketStream(target, protocols, options) {
  var stream, socket;

  var isBrowser = process$4.title === 'browser';
  var isNative = !!commonjsGlobal.WebSocket;
  var socketWrite = isBrowser ? socketWriteBrowser : socketWriteNode;

  if (protocols && !Array.isArray(protocols) && 'object' === typeof protocols) {
    // accept the "options" Object as the 2nd argument
    options = protocols;
    protocols = null;

    if (typeof options.protocol === 'string' || Array.isArray(options.protocol)) {
      protocols = options.protocol;
    }
  }

  if (!options) { options = {}; }

  if (options.objectMode === undefined) {
    options.objectMode = !(options.binary === true || options.binary === undefined);
  }

  var proxy = buildProxy(options, socketWrite, socketEnd);

  if (!options.objectMode) {
    proxy._writev = writev;
  }

  // browser only: sets the maximum socket buffer size before throttling
  var bufferSize = options.browserBufferSize || 1024 * 512;

  // browser only: how long to wait when throttling
  var bufferTimeout = options.browserBufferTimeout || 1000;

  // use existing WebSocket object that was passed in
  if (typeof target === 'object') {
    socket = target;
  // otherwise make a new one
  } else {
    // special constructor treatment for native websockets in browsers, see
    // https://github.com/maxogden/websocket-stream/issues/82
    if (isNative && isBrowser) {
      socket = new wsFallback(target, protocols);
    } else {
      socket = new wsFallback(target, protocols, options);
    }

    socket.binaryType = 'arraybuffer';
  }

  // was already open when passed in
  if (socket.readyState === wsFallback.OPEN) {
    stream = proxy;
  } else {
    stream = index$30.obj();
    socket.onopen = onopen;
  }

  stream.socket = socket;

  socket.onclose = onclose;
  socket.onerror = onerror;
  socket.onmessage = onmessage;

  proxy.on('close', destroy);

  var coerceToBuffer = !options.objectMode;

  function socketWriteNode(chunk, enc, next) {
    // avoid errors, this never happens unless
    // destroy() is called
    if (socket.readyState !== wsFallback.OPEN) {
      next();
      return
    }

    if (coerceToBuffer && typeof chunk === 'string') {
      chunk = new Buffer$1(chunk, 'utf8');
    }
    socket.send(chunk, next);
  }

  function socketWriteBrowser(chunk, enc, next) {
    if (socket.bufferedAmount > bufferSize) {
      setTimeout(socketWriteBrowser, bufferTimeout, chunk, enc, next);
      return
    }

    if (coerceToBuffer && typeof chunk === 'string') {
      chunk = new Buffer$1(chunk, 'utf8');
    }

    try {
      socket.send(chunk);
    } catch(err) {
      return next(err)
    }

    next();
  }

  function socketEnd(done) {
    socket.close();
    done();
  }

  function onopen() {
    stream.setReadable(proxy);
    stream.setWritable(proxy);
    stream.emit('connect');
  }

  function onclose() {
    stream.end();
    stream.destroy();
  }

  function onerror(err) {
    stream.destroy(err);
  }

  function onmessage(event) {
    var data = event.data;
    if (data instanceof ArrayBuffer) { data = Buffer$1.from(new Uint8Array(data)); }
    else { data = Buffer$1.from(data, 'utf8'); }
    proxy.push(data);
  }

  function destroy() {
    socket.close();
  }

  // this is to be enabled only if objectMode is false
  function writev (chunks, cb) {
    var buffers = new Array(chunks.length);
    for (var i = 0; i < chunks.length; i++) {
      if (typeof chunks[i].chunk === 'string') {
        buffers[i] = Buffer$1.from(chunks[i], 'utf8');
      } else {
        buffers[i] = chunks[i].chunk;
      }
    }

    this._write(Buffer$1.concat(buffers), 'binary', cb);
  }

  return stream
}

var index$39      = isTypedArray$1;
isTypedArray$1.strict = isStrictTypedArray;
isTypedArray$1.loose  = isLooseTypedArray;

var toString$4 = Object.prototype.toString;
var names = {
    '[object Int8Array]': true
  , '[object Int16Array]': true
  , '[object Int32Array]': true
  , '[object Uint8Array]': true
  , '[object Uint8ClampedArray]': true
  , '[object Uint16Array]': true
  , '[object Uint32Array]': true
  , '[object Float32Array]': true
  , '[object Float64Array]': true
};

function isTypedArray$1(arr) {
  return (
       isStrictTypedArray(arr)
    || isLooseTypedArray(arr)
  )
}

function isStrictTypedArray(arr) {
  return (
       arr instanceof Int8Array
    || arr instanceof Int16Array
    || arr instanceof Int32Array
    || arr instanceof Uint8Array
    || arr instanceof Uint8ClampedArray
    || arr instanceof Uint16Array
    || arr instanceof Uint32Array
    || arr instanceof Float32Array
    || arr instanceof Float64Array
  )
}

function isLooseTypedArray(arr) {
  return names[toString$4.call(arr)]
}

/**
 * Convert a typed array to a Buffer without a copy
 *
 * Author:   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * License:  MIT
 *
 * `npm install typedarray-to-buffer`
 */

var isTypedArray = index$39.strict;

var index$37 = function typedarrayToBuffer (arr) {
  if (isTypedArray(arr)) {
    // To avoid a copy, use the typed array's underlying ArrayBuffer to back new Buffer
    var buf = new Buffer(arr.buffer);
    if (arr.byteLength !== arr.buffer.byteLength) {
      // Respect the "view", i.e. byteOffset and byteLength, without doing a copy
      buf = buf.slice(arr.byteOffset, arr.byteOffset + arr.byteLength);
    }
    return buf
  } else {
    // Pass through all other types to the `Buffer` constructor
    return new Buffer(arr)
  }
};

var isBrowser = typeof(document) !== 'undefined' && typeof(document.createElement) === 'function';
var verifiedImageType;

var index$36 = function(canvas, options) {

    var self = this, quality;

    options             = options               ? options :             {};
    options.image       = options.image         ? options.image :       {};
    options.image.types = options.image.types   ? options.image.types : [];

    // validate some options this class needs
    if (options.image.types.length > 2)
        { throw new Error('Too many image types are specified!') }

    else if (options.image.types.length < 1) {

        // Set a default image type, just to be robust
        options.image.types = isBrowser ? ['webp', 'jpeg'] : ['png'];
    }

    if (!options.image.quality)
        { options.image.quality = .5; } // default

    quality = parseFloat(options.image.quality);

    function composeImageType(index) {
        var imageType;

        if (options.image.types[index])
            { imageType = 'image/' + options.image.types[index]; }

        return imageType
    }

    function isMatch(uri, imageType) {
        var match = uri && uri.match(imageType);

        match && options.debug && options.debug('Image type %s verified', imageType);

        return match
    }

    // Performance tweak, we do not need a big canvas for finding out the supported image type
    function getTestCanvas() {

        var testCanvas;

        if (isBrowser) {
            testCanvas = document.createElement('canvas');
            testCanvas.width = testCanvas.height = 1;
        } else
            { testCanvas = canvas; }

        return testCanvas
    }

    function canvasSupportsImageTypeAsync(imageType, cb) {
        try {
            getTestCanvas().toDataURL(imageType, function(err, uri) {
                if (err)
                    { cb(err); }
                else
                    { cb(null, isMatch(uri, imageType)); }
            });
        } catch (exc) {
            cb(null, false);
        }
    }

    function canvasSupportsImageTypeSync(imageType) {
        var match;

        try {
            var testCanvas = getTestCanvas(),
                uri        = testCanvas.toDataURL && testCanvas.toDataURL(imageType);

            match = isMatch(uri, imageType);
        } catch (exc) {

            // Can happen when i.E. a spider is coming. Just be robust here and continue.
            options.debug &&
            options.logger.debug('Failed to call toDataURL() on canvas for image type %s', imageType);
        }

        return match
    }

    function verifyImageTypeAsync(imageType, cb) {
        canvasSupportsImageTypeAsync(imageType, function(err, match) {
            if (err)
                { cb(err); }
            else {

                if (match)
                    { cb(null, imageType); }
                else {
                    imageType = composeImageType(1);

                    canvasSupportsImageTypeAsync(imageType, function(err, match) {
                        if (err)
                            { cb(err); }
                        else
                            { cb(null, match ? imageType: null); }
                    });
                }
            }
        });
    }

    function verifyImageTypeSync(imageType) {
        if (!canvasSupportsImageTypeSync(imageType)) {

            if (options.image.types[1]) {
                imageType = composeImageType(1);

                if (!canvasSupportsImageTypeSync(imageType))
                    { imageType = null; }
            } else
                { imageType = null; }
        }

        !imageType && options.debug && options.logger.debug('Unable to verify image type');

        return imageType
    }

    // callbacks are needed for server side tests
    function verifyImageType(cb) {
        var imageType = composeImageType(0);

        if (cb) {
            verifyImageTypeAsync(imageType, cb);
        } else {
            return verifyImageTypeSync(imageType)
        }
    }

    // this method is proven to be fast, see
    // http://jsperf.com/data-uri-to-buffer-performance/3
    function uriToBuffer(uri) {

        var uri = uri.split(',')[1],
            bytes;

        // Beware that the atob function might be a static one for server side tests
        if (typeof(atob) === 'function')
            { bytes = atob(uri); }
        else if (typeof(self.constructor.atob) === 'function')
            { bytes = self.constructor.atob(uri); }
        else
            { throw new Error('atob function is missing') }

        var arr = new Uint8Array(bytes.length);

        // http://mrale.ph/blog/2014/12/24/array-length-caching.html
        for (var i = 0, l = bytes.length; i < l; i++) {
            arr[i] = bytes.charCodeAt(i);
        }

        return index$37(arr)
    }

    function toBufferSync() {
        var imageType = self.getImageType(),
            buffer;

        if (imageType) {
            var uri = canvas.toDataURL(imageType, quality);
            buffer = uriToBuffer(uri);
        }

        return buffer
    }

    function toBufferAsync(cb) {
        self.getImageType(function(err, imageType) {
            if (err)
                { cb(err); }
            else if (!imageType)
                { cb(); }
            else
                { canvas.toDataURL(imageType, function(err, uri) {
                    if (err)
                        { cb(err); }
                    else
                        { cb(null, uriToBuffer(uri)); }
                }); }
        });
    }

    this.toBuffer = function(cb) {
        if (cb)
            { toBufferAsync(cb); }
        else
            { return toBufferSync() }
    };

    // browsers do not need a callback, but tests do
    this.getImageType = function(cb) {

        // only run for the first time this constructor is called and
        // cache result for the next calls

        if (cb) {
            if (!verifiedImageType || !isBrowser)
                { verifyImageType(function(err, newVerifiedImageType) {
                    if (err)
                        { cb(err); }
                    else {
                        verifiedImageType = newVerifiedImageType;
                        cb(null, verifiedImageType);
                    }
                }); }
            else
                { cb(null, verifiedImageType); }

        } else {
            // on the browser side we do cache it for speed
            if (!verifiedImageType || !isBrowser)
                { verifiedImageType = verifyImageType(); }

            return verifiedImageType
        }
    };
};

var performanceNow$1 = createCommonjsModule(function (module) {
// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime$$1, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process$4 !== "undefined" && process$4 !== null) && process$4.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime$$1 = process$4.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime$$1();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process$4.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(commonjsGlobal);


});

var root = typeof window === 'undefined' ? commonjsGlobal : window;
var vendors = ['moz', 'webkit'];
var suffix = 'AnimationFrame';
var raf = root['request' + suffix];
var caf = root['cancel' + suffix] || root['cancelRequest' + suffix];

for(var i$4 = 0; !raf && i$4 < vendors.length; i$4++) {
  raf = root[vendors[i$4] + 'Request' + suffix];
  caf = root[vendors[i$4] + 'Cancel' + suffix]
      || root[vendors[i$4] + 'CancelRequest' + suffix];
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id$2 = 0
    , queue$2 = []
    , frameDuration = 1000 / 60;

  raf = function(callback) {
    if(queue$2.length === 0) {
      var _now = performanceNow$1()
        , next = Math.max(0, frameDuration - (_now - last));
      last = next + _now;
      setTimeout(function() {
        var cp = queue$2.slice(0);
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue$2.length = 0;
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last);
            } catch(e) {
              setTimeout(function() { throw e }, 0);
            }
          }
        }
      }, Math.round(next));
    }
    queue$2.push({
      handle: ++id$2,
      callback: callback,
      cancelled: false
    });
    return id$2
  };

  caf = function(handle) {
    for(var i = 0; i < queue$2.length; i++) {
      if(queue$2[i].handle === handle) {
        queue$2[i].cancelled = true;
      }
    }
  };
}

var index$42 = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
};
var cancel = function() {
  caf.apply(root, arguments);
};
var polyfill = function() {
  root.requestAnimationFrame = raf;
  root.cancelAnimationFrame = caf;
};

index$42.cancel = cancel;
index$42.polyfill = polyfill;

var index$41 = createCommonjsModule(function (module, exports) {
var EventEmitter          = require$$0$25.EventEmitter,
    methods;


//the same as off window unless polyfilled or in node
var defaultRAFObject = {
    requestAnimationFrame: index$42,
    cancelAnimationFrame: index$42.cancel
};

function returnTrue(){ return true; }

//manage FPS if < 60, else return true;
function makeThrottle(fps){
    var delay = 1000/fps;
    var lastTime = Date.now();


    if( fps<=0 || fps === Infinity ){
        return returnTrue;
    }

    //if an fps throttle has been set then we'll assume
    //it natively runs at 60fps,
    var half = Math.ceil(1000 / 60) / 2;

    return function(){
        //if a custom fps is requested
        var now = Date.now();
        //is this frame within 8.5ms of the target?
        //if so then next frame is gonna be too late
        if(now - lastTime < delay - half){
            return false;
        }
        lastTime = now;
        return true;
    };
}


/**
 * Animitter provides event-based loops for the browser and node,
 * using `requestAnimationFrame`
 * @param {Object} [opts]
 * @param {Number} [opts.fps=Infinity] the framerate requested, defaults to as fast as it can (60fps on window)
 * @param {Number} [opts.delay=0] milliseconds delay between invoking `start` and initializing the loop
 * @param {Object} [opts.requestAnimationFrameObject=global] the object on which to find `requestAnimationFrame` and `cancelAnimationFrame` methods
 * @param {Boolean} [opts.fixedDelta=false] if true, timestamps will pretend to be executed at fixed intervals always
 * @constructor
 */
function Animitter( opts ){
    opts = opts || {};

    this.__delay = opts.delay || 0;

    /** @expose */
    this.fixedDelta = !!opts.fixedDelta;

    /** @expose */
    this.frameCount = 0;
    /** @expose */
    this.deltaTime = 0;
    /** @expose */
    this.elapsedTime = 0;

    /** @private */
    this.__running = false;
    /** @private */
    this.__completed = false;

    this.setFPS(opts.fps || Infinity);
    this.setRequestAnimationFrameObject(opts.requestAnimationFrameObject || defaultRAFObject);
}

inherits_browser(Animitter, EventEmitter);

function onStart(scope){
    var now = Date.now();
    var rAFID;
    //dont let a second animation start on the same object
    //use *.on('update',fn)* instead
    if(scope.__running){
        return scope;
    }

    exports.running += 1;
    scope.__running = true;
    scope.__lastTime = now;
    scope.deltaTime = 0;

    //emit **start** once at the beginning
    scope.emit('start', scope.deltaTime, 0, scope.frameCount);

    var lastRAFObject = scope.requestAnimationFrameObject;

    var drawFrame = function(){
        if(lastRAFObject !== scope.requestAnimationFrameObject){
            //if the requestAnimationFrameObject switched in-between,
            //then re-request with the new one to ensure proper update execution context
            //i.e. VRDisplay#submitFrame() may only be requested through VRDisplay#requestAnimationFrame(drawFrame)
            lastRAFObject = scope.requestAnimationFrameObject;
            scope.requestAnimationFrameObject.requestAnimationFrame(drawFrame);
            return;
        }
        if(scope.__isReadyForUpdate()){
            scope.update();
        }
        if(scope.__running){
            rAFID = scope.requestAnimationFrameObject.requestAnimationFrame(drawFrame);
        } else {
            scope.requestAnimationFrameObject.cancelAnimationFrame(rAFID);
        }
    };

    scope.requestAnimationFrameObject.requestAnimationFrame(drawFrame);

    return scope;
}

methods = {
    //EventEmitter Aliases
    off     : EventEmitter.prototype.removeListener,
    trigger : EventEmitter.prototype.emit,

    /**
     * stops the animation and marks it as completed
     * @emit Animitter#complete
     * @returns {Animitter}
     */
    complete: function(){
        this.stop();
        this.__completed = true;
        this.emit('complete', this.frameCount, this.deltaTime);
        return this;
    },

    /**
     * stops the animation and removes all listeners
     * @emit Animitter#stop
     * @returns {Animitter}
     */
    dispose: function(){
        this.stop();
        this.removeAllListeners();
        return this;
    },

    /**
     * get milliseconds between the last 2 updates
     *
     * @return {Number}
     */
    getDeltaTime: function(){
        return this.deltaTime;
    },

    /**
     * get the total milliseconds that the animation has ran.
     * This is the cumlative value of the deltaTime between frames
     *
     * @return {Number}
     */
    getElapsedTime: function(){
        return this.elapsedTime;
    },

    /**
     * get the instances frames per second as calculated by the last delta
     *
     * @return {Number}
     */
    getFPS: function(){
        return this.deltaTime > 0 ? 1000 / this.deltaTime : 0;
        if(this.deltaTime){
            return 1000 / this.deltaTime;
        }
    },

    /**
     * get the explicit FPS limit set via `Animitter#setFPS(fps)` or
     * via the initial `options.fps` property
     *
     * @returns {Number} either as set or Infinity
     */
    getFPSLimit: function(){
        return this.__fps;
    },

    /**
     * get the number of frames that have occurred
     *
     * @return {Number}
     */
    getFrameCount: function(){
        return this.frameCount;
    },


    /**
     * get the object providing `requestAnimationFrame`
     * and `cancelAnimationFrame` methods
     * @return {Object}
     */
    getRequestAnimationFrameObject: function(){
        return this.requestAnimationFrameObject;
    },

    /**
     * is the animation loop active
     *
     * @return {boolean}
     */
    isRunning: function(){
        return this.__running;
    },

    /**
     * is the animation marked as completed
     *
     * @return {boolean}
     */
    isCompleted: function(){
        return this.__completed;
    },

    /**
     * reset the animation loop, marks as incomplete,
     * leaves listeners intact
     *
     * @emit Animitter#reset
     * @return {Animitter}
     */
    reset: function(){
        this.stop();
        this.__completed = false;
        this.__lastTime = 0;
        this.deltaTime = 0;
        this.elapsedTime = 0;
        this.frameCount = 0;

        this.emit('reset', 0, 0, this.frameCount);
        return this;
    },

    /**
     * set the framerate for the animation loop
     *
     * @param {Number} fps
     * @return {Animitter}
     */
    setFPS: function(fps){
        this.__fps = fps;
        this.__isReadyForUpdate = makeThrottle(fps);
        return this;
    },

    /**
     * set the object that will provide `requestAnimationFrame`
     * and `cancelAnimationFrame` methods to this instance
     * @param {Object} object
     * @return {Animitter}
     */
    setRequestAnimationFrameObject: function(object){
        if(typeof object.requestAnimationFrame !== 'function' || typeof object.cancelAnimationFrame !== 'function'){
            throw new Error("Invalid object provide to `setRequestAnimationFrameObject`");
        }
        this.requestAnimationFrameObject = object;
        return this;
    },

    /**
     * start an animation loop
     * @emit Animitter#start
     * @return {Animitter}
     */
    start: function(){
        var self = this;
        if(this.__delay){
            setTimeout(function(){
                onStart(self);
            }, this.__delay);
        } else {
            onStart(this);
        }
        return this;
    },

    /**
     * stops the animation loop, does not mark as completed
     *
     * @emit Animitter#stop
     * @return {Animitter}
     */
    stop: function(){
        if( this.__running ){
            this.__running = false;
            exports.running -= 1;
            this.emit('stop', this.deltaTime, this.elapsedTime, this.frameCount);
        }
        return this;
    },

    /**
     * update the animation loop once
     *
     * @emit Animitter#update
     * @return {Animitter}
     */
    update: function(){
        this.frameCount++;
        /** @private */
        var now = Date.now();
        this.__lastTime = this.__lastTime || now;
        this.deltaTime = (this.fixedDelta || exports.globalFixedDelta) ? 1000/Math.min(60, this.__fps) : now - this.__lastTime;
        this.elapsedTime += this.deltaTime;
        this.__lastTime = now;

        this.emit('update', this.deltaTime, this.elapsedTime, this.frameCount);
        return this;
    }
};



for(var method in methods){
    Animitter.prototype[method] = methods[method];
}


/**
 * create an animitter instance,
 * @param {Object} [options]
 * @param {Function} fn( deltaTime:Number, elapsedTime:Number, frameCount:Number )
 * @returns {Animitter}
 */
function createAnimitter(options, fn){

    if( arguments.length === 1 && typeof options === 'function'){
        fn = options;
        options = {};
    }

    var _instance = new Animitter( options );

    if( fn ){
        _instance.on('update', fn);
    }

    return _instance;
}

module.exports = exports = createAnimitter;

/**
 * create an animitter instance,
 * where the scope is bound in all functions
 * @param {Object} [options]
 * @param {Function} fn( deltaTime:Number, elapsedTime:Number, frameCount:Number )
 * @returns {Animitter}
 */
exports.bound = function(options, fn){

    var loop = createAnimitter(options, fn),
        functionKeys = functions(Animitter.prototype),
        hasBind = !!Function.prototype.bind,
        fnKey;

    for(var i=0; i<functionKeys.length; i++){
        fnKey = functionKeys[i];
        loop[fnKey] = hasBind ? loop[fnKey].bind(loop) : bind(loop[fnKey], loop);
    }

    return loop;
};


exports.Animitter = Animitter;

/**
 * if true, all `Animitter` instances will behave as if `options.fixedDelta = true`
 */
exports.globalFixedDelta = false;

//helpful to inherit from when using bundled
exports.EventEmitter = EventEmitter;
//keep a global counter of all loops running, helpful to watch in dev tools
exports.running = 0;

function bind(fn, scope){
    if(typeof fn.bind === 'function'){
        return fn.bind(scope);
    }
    return function(){
        return fn.apply(scope, arguments);
    };
}

function functions(obj){
    var keys = Object.keys(obj);
    var arr = [];
    for(var i=0; i<keys.length; i++){
        if(typeof obj[keys[i]] === 'function'){
            arr.push(keys[i]);
        }
    }
    return arr;
}



//polyfill Date.now for real-old browsers
Date.now = Date.now || function now() {
    return new Date().getTime();
};
});

var index$44 = isPowerOfTwo;

function isPowerOfTwo(n) {
  return n !== 0 && (n & (n - 1)) === 0
}

// FUNCTIONS //

var isStr = Object.prototype.toString;


// IS FLOAT32ARRAY //

/**
* FUNCTION: isFloat32Array( value )
*	Validates if a value is a Float32Array.
*
* @param {*} value - value to validate
* @returns {Boolean} boolean indicating if a value is a Float32Array
*/
function isFloat32Array( value ) {
	return isStr.call( value ) === '[object Float32Array]';
} // end FUNCTION isFloat32Array()


// EXPORTS //

var index$46 = isFloat32Array;

var index$45 = function(float32Array) {

    if (!float32Array)
        { throw new Error('A Float32Array parameter is missing.') }

    if (!index$46(float32Array))
        { throw new Error('The parameter is not a Float32Array.') }

    this.toBuffer = function() {

        var l   = float32Array.length,
            arr = new Int16Array(l),
            i;

        for (i = 0; i < l; i++) {
            arr[i] = Math.min(1, float32Array[i]) * 0x7FFF;
        }

        return index$37(arr)
    };
};

var CHANNELS = 1;

var AudioRecorder = function (userMedia, options) {
  var scriptProcessor;

  function getAudioContext () {
    // instantiate only once
    if (!window.vcAudioContext) {
      var AudioContext = window.AudioContext || window.webkitAudioContext;
      window.vcAudioContext = new AudioContext();
    }

    return window.vcAudioContext
  }

  function onAudioProcess (e, cb) {
    if (!userMedia.isRecording() || userMedia.isPaused()) {
      return
    }

    // Returns a Float32Array containing the PCM data associated with the channel,
    // defined by the channel parameter (with 0 representing the first channel)
    var float32Array = e.inputBuffer.getChannelData(0);

    cb(new index$45(float32Array));
  }

  this.init = function (localMediaStream) {
    options.debug('AudioRecorder: init()');

    // creates an audio node from the microphone incoming stream
    var volume = getAudioContext().createGain();
    var channels = CHANNELS;

    var audioInput;

    try {
      audioInput = getAudioContext().createMediaStreamSource(localMediaStream);
    } catch (exc) {
      var explanation = exc.toString() + 'Details: ' + JSON.stringify(getAudioContext());
      throw VideomailError.create(
        'Webcam has no audio',
        explanation,
        options
      )
    }

    if (!index$44(options.audio.bufferSize)) {
      throw VideomailError.create('Audio buffer size must be a power of two.', options)
    } else if (!options.audio.volume || options.audio.volume > 1) {
      throw VideomailError.create('Audio volume must be between zero and one.', options)
    }

    volume.gain.value = options.audio.volume;

    // Create a ScriptProcessorNode with the given bufferSize and
    // a single input and output channel
    scriptProcessor = getAudioContext().createScriptProcessor(
      options.audio.bufferSize,
      channels,
      channels
    );

    // connect stream to our scriptProcessor
    audioInput.connect(scriptProcessor);

    // connect our scriptProcessor to the previous destination
    scriptProcessor.connect(getAudioContext().destination);

    // connect volume
    audioInput.connect(volume);
    volume.connect(scriptProcessor);
  };

  this.record = function (cb) {
    options.debug('AudioRecorder: record()');

    scriptProcessor.onaudioprocess = function (e) {
      onAudioProcess(e, cb);
    };
  };

  this.stop = function () {
    options.debug('AudioRecorder: stop()');

    if (scriptProcessor) {
      scriptProcessor.onaudioprocess = undefined;
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/close
    getAudioContext().close().then(function () {
      options.debug('AudioRecorder: audio context is closed');
      delete window.vcAudioContext;
    });
  };

  this.getSampleRate = function () {
    if (getAudioContext()) {
      return getAudioContext().sampleRate
    } else {
      return -1
    }
  };
};

// taken from
// https://bbc.github.io/tal/jsdoc/events_mediaevent.js.html

var MEDIA_EVENTS = [
  // The user agent begins looking for media data, as part of
  // the resource selection algorithm.
  'loadstart',

  // The user agent is intentionally not currently fetching media data,
  // but does not have the entire media resource downloaded. networkState equals NETWORK_IDLE
  'suspend',

  // Playback has begun. Fired after the play() method has returned,
  // or when the autoplay attribute has caused playback to begin.
  // paused is newly false.
  // 'play', commented out since it has special treatment

  // The user agent has just determined the duration and dimensions of the
  // media resource and the timed tracks are ready.
  // readyState is newly equal to HAVE_METADATA or greater for the first time.
  // 'loadedmetadata', commented out since it has special treatment

  // The user agent is fetching media data.
  'progress',

  // The user agent is intentionally not currently fetching media data,
  // but does not have the entire media resource downloaded.
  // 'suspend', // commented out, we are already listening to it in code

  // Event The user agent stops fetching the media data before it is completely downloaded,
  // but not due to an error.  error is an object with the code MEDIA_ERR_ABORTED.
  'abort',

  // A media element whose networkState was previously not in the NETWORK_EMPTY
  // state has just switched to that state (either because of a fatal error
  // during load that's about to be reported, or because the load() method was
  // invoked while the resource selection algorithm was already running).
  'emptied',

  // The user agent is trying to fetch media data, but data is
  // unexpectedly not forthcoming
  'stalled',

  // Playback has been paused. Fired after the pause() method has returned.
  // paused is newly true.
  'pause',

   // The user agent can render the media data at the current playback position
   // for the first time.
   // readyState newly increased to HAVE_CURRENT_DATA or greater for the first time.
  'loadeddata',

  // Playback has stopped because the next frame is not available, but the user
  // agent expects that frame to become available in due course.
  // readyState is newly equal to or less than HAVE_CURRENT_DATA,
  // and paused is false. Either seeking is true, or the current playback
  // position is not contained in any of the ranges in buffered.
  // It is possible for playback to stop for two other reasons without
  // paused being false, but those two reasons do not fire this event:
  // maybe playback ended, or playback stopped due to errors.
  'waiting',

  // Playback has started. readyState is newly equal to or greater than
  // HAVE_FUTURE_DATA, paused is false, seeking is false,
  // or the current playback position is contained in one of the ranges in buffered.
  'playing',

  // The user agent can resume playback of the media data,
  // but estimates that if playback were to be started now, the media resource
  // could not be rendered at the current playback rate up to its end without
  // having to stop for further buffering of content.
  // readyState newly increased to HAVE_FUTURE_DATA or greater.
  'canplay',

  // The user agent estimates that if playback were to be started now,
  // the media resource could be rendered at the current playback rate
  // all the way to its end without having to stop for further buffering.
  // readyState is newly equal to HAVE_ENOUGH_DATA.
  'canplaythrough',

  // The seeking IDL attribute changed to true and the seek operation is
  // taking long enough that the user agent has time to fire the event.
  'seeking',

  // The seeking IDL attribute changed to false.
  'seeked',

  // Playback has stopped because the end of the media resource was reached.
  // currentTime equals the end of the media resource; ended is true.
  'ended',

  // Either the defaultPlaybackRate or the playbackRate attribute
  // has just been updated.
  'ratechange',

  // The duration attribute has just been updated.
  'durationchange',

  // Either the volume attribute or the muted attribute has changed.
  // Fired after the relevant attribute's setter has returned.
  'volumechange' ];

var EVENT_ASCII = '|—O—|';

var UserMedia = function (recorder, options) {
  EventEmitter.call(this, options, 'UserMedia');

  var rawVisualUserMedia = recorder && recorder.getRawVisualUserMedia();
  var self = this;

  var paused = false;
  var record = false;

  var audioRecorder;
  var currentVisualStream;

  function attachMediaStream (stream) {
    currentVisualStream = stream;

    if (typeof rawVisualUserMedia.srcObject !== 'undefined') {
      rawVisualUserMedia.srcObject = stream;
    } else if (typeof rawVisualUserMedia.src !== 'undefined') {
      var URL = window.URL || window.webkitURL;
      rawVisualUserMedia.src = URL.createObjectURL(stream) || stream;
    } else {
      throw VideomailError.create(
        'Error attaching stream to element.',
        'Contact the developer about this',
        options
      )
    }
  }

  function setVisualStream (localMediaStream) {
    if (localMediaStream) {
      attachMediaStream(localMediaStream);
    } else {
      rawVisualUserMedia.removeAttribute('srcObject');
      rawVisualUserMedia.removeAttribute('src');

      currentVisualStream = null;
    }
  }

  function getVisualStream () {
    if (rawVisualUserMedia.mozSrcObject) {
      return rawVisualUserMedia.mozSrcObject
    } else if (rawVisualUserMedia.srcObject) {
      return rawVisualUserMedia.srcObject
    } else {
      return currentVisualStream
    }
  }

  function hasEnded () {
    if (rawVisualUserMedia.ended) {
      return rawVisualUserMedia.ended
    } else {
      var visualStream = getVisualStream();
      return visualStream && visualStream.ended
    }
  }

  function hasInvalidDimensions () {
    if ((rawVisualUserMedia.videoWidth && rawVisualUserMedia.videoWidth < 3) ||
        (rawVisualUserMedia.height && rawVisualUserMedia.height < 3)) {
      return true
    }
  }

  function getTracks (localMediaStream) {
    var tracks;

    if (localMediaStream && localMediaStream.getTracks) {
      tracks = localMediaStream.getTracks();
    }

    return tracks
  }

  function getVideoTracks (localMediaStream) {
    var videoTracks;

    if (localMediaStream && localMediaStream.getVideoTracks) {
      videoTracks = localMediaStream.getVideoTracks();
    }

    return videoTracks
  }

  function getFirstVideoTrack (localMediaStream) {
    var videoTracks = getVideoTracks(localMediaStream);
    var videoTrack;

    if (videoTracks && videoTracks[0]) {
      videoTrack = videoTracks[0];
    }

    return videoTrack
  }

  function logEvent (event, params) {
    options.debug('UserMedia: ...', EVENT_ASCII, 'event', event, JSON.stringify(params));
  }

  function isPromise (anything) {
    return (anything && (typeof Promise !== 'undefined') && (anything instanceof Promise))
  }

  function outputEvent (e) {
    logEvent(e.type, {readyState: rawVisualUserMedia.readyState});

    // remove myself
    rawVisualUserMedia.removeEventListener &&
    rawVisualUserMedia.removeEventListener(e.type, outputEvent);
  }

  this.unloadRemainingEventListeners = function () {
    options.debug('UserMedia: unloadRemainingEventListeners()');

    MEDIA_EVENTS.forEach(function (eventName) {
      rawVisualUserMedia.removeEventListener(eventName, outputEvent);
    });
  };

  this.init = function (localMediaStream, videoCallback, audioCallback, endedEarlyCallback) {
    this.stop(localMediaStream, true);

    var onPlayReached = false;
    var onLoadedMetaDataReached = false;
    var playingPromiseReached = false;

    if (options && options.isAudioEnabled()) {
      audioRecorder = audioRecorder || new AudioRecorder(this, options);
    }

    function audioRecord () {
      self.removeListener(Events.SENDING_FIRST_FRAME, audioRecord);
      audioRecorder && audioRecorder.record(audioCallback);
    }

    function unloadAllEventListeners () {
      options.debug('UserMedia: unloadAllEventListeners()');

      self.removeListener(Events.SENDING_FIRST_FRAME, audioRecord);

      rawVisualUserMedia.removeEventListener &&
      rawVisualUserMedia.removeEventListener('play', onPlay);

      rawVisualUserMedia.removeEventListener &&
      rawVisualUserMedia.removeEventListener('loadedmetadata', onLoadedMetaData);

      self.unloadRemainingEventListeners();
    }

    function play () {
      // Resets the media element and restarts the media resource. Any pending events are discarded.
      // But do them in the next tick to ensure event queue is ready for a lot to come
      //
      // this also to have the abort and emptied event to be processed as early as possible before
      // all the other important events to come
      setTimeout(function () {
        try {
          // todo debug and fix that weird error
          // The play() request was interrupted by a new load request.
          options.debug(
            'UserMedia: play()',
            'media.readyState=' + rawVisualUserMedia.readyState,
            'media.paused=' + rawVisualUserMedia.paused,
            'media.ended=' + rawVisualUserMedia.ended,
            'media.played=' + pretty$1(rawVisualUserMedia.played)
          );

          rawVisualUserMedia.load();
          var p = rawVisualUserMedia.play();

          // using the promise here just experimental for now
          // and this to catch any weird errors early if possible
          if (isPromise(p)) {
            p.then(function () {
              if (!playingPromiseReached) {
                options.debug('UserMedia: ... play promise successful. Playing now.');
                playingPromiseReached = true;
              }
            }).catch(function (reason) {
              // promise can be interrupted, i.E. when switching tabs
              // and promise can get resumed when switching back to tab, hence
              // do not treat this like an error
              options.debug('UserMedia:', reason.toString());
            });
          }
        } catch (exc) {
          unloadAllEventListeners();
          endedEarlyCallback(exc);
        }
      }, 0);
    }

    function fireCallbacks () {
      var readyState = rawVisualUserMedia.readyState;

      // ready state, see https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/readyState
      options.debug(
        'UserMedia: fireCallbacks(' +
        'readyState=' + readyState + ', ' +
        'onPlayReached=' + onPlayReached + ', ' +
        'onLoadedMetaDataReached=' + onLoadedMetaDataReached + ')'
      );

      if (onPlayReached && onLoadedMetaDataReached) {
        videoCallback();

        if (audioRecorder && audioCallback) {
          try {
            audioRecorder.init(localMediaStream);
            self.on(Events.SENDING_FIRST_FRAME, audioRecord);
          } catch (exc) {
            unloadAllEventListeners();
            endedEarlyCallback(exc);
          }
        }
      }
    }

    function onPlay () {
      try {
        logEvent('play', {
          readyState: rawVisualUserMedia.readyState,
          audio: options.isAudioEnabled(),
          width: rawVisualUserMedia.width,
          height: rawVisualUserMedia.height,
          videoWidth: rawVisualUserMedia.videoWidth,
          videoHeight: rawVisualUserMedia.videoHeight
        });

        rawVisualUserMedia.removeEventListener &&
        rawVisualUserMedia.removeEventListener('play', onPlay);

        if (hasEnded() || hasInvalidDimensions()) {
          endedEarlyCallback(
            VideomailError.create(
              'Already busy',
              'Probably another browser window is using your webcam?',
              options
            )
          );
        } else {
          onPlayReached = true;
          fireCallbacks();
        }
      } catch (exc) {
        unloadAllEventListeners();
        endedEarlyCallback(exc);
      }
    }

    // player modifications to perform that must wait until `loadedmetadata` has been triggered
    function onLoadedMetaData () {
      logEvent('loadedmetadata', {
        readyState: rawVisualUserMedia.readyState,
        width: rawVisualUserMedia.width,
        height: rawVisualUserMedia.height,
        videoWidth: rawVisualUserMedia.videoWidth,
        videoHeight: rawVisualUserMedia.videoHeight
      });

      rawVisualUserMedia.removeEventListener &&
      rawVisualUserMedia.removeEventListener('loadedmetadata', onLoadedMetaData);

      if (!hasEnded() && !hasInvalidDimensions()) {
        self.emit(Events.LOADED_META_DATA);

        // for android devices, we cannot call play() unless meta data has been loaded!
        play();

        onLoadedMetaDataReached = true;
        fireCallbacks();
      }
    }

    try {
      var videoTrack = getFirstVideoTrack(localMediaStream);

      if (!videoTrack) {
        options.debug('UserMedia: detected (but no video tracks exist');
      } else if (!videoTrack.enabled) {
        throw VideomailError.create(
          'Webcam is disabled',
          'The video track seems to be disabled. Enable it in your system.',
          options
        )
      } else {
        var description;

        if (videoTrack.label && videoTrack.label.length > 0) {
          description = videoTrack.label;
        }

        description += ' with enabled=' + videoTrack.enabled;
        description += ', muted=' + videoTrack.muted;
        description += ', remote=' + videoTrack.remote;
        description += ', readyState=' + videoTrack.readyState;
        description += ', error=' + videoTrack.error;

        options.debug(
          'UserMedia: ' + videoTrack.kind + ' detected.',
          description || ''
        );
      }

      // very useful i think, so leave this and just use options.debug()
      var heavyDebugging = true;

      if (heavyDebugging) {
        MEDIA_EVENTS.forEach(function (eventName) {
          rawVisualUserMedia.addEventListener(eventName, outputEvent, false);
        });
      }

      rawVisualUserMedia.addEventListener('loadedmetadata', onLoadedMetaData);
      rawVisualUserMedia.addEventListener('play', onPlay);

      // experimental, not sure if this is ever needed/called? since 2 apr 2017
      // An error occurs while fetching the media data.
      // Error can be an object with the code MEDIA_ERR_NETWORK or higher.
      // networkState equals either NETWORK_EMPTY or NETWORK_IDLE, depending on when the download was aborted.
      rawVisualUserMedia.addEventListener('error', function (err) {
        self.emit(Events.ERROR, VideomailError.create(
          'Weird webcam error',
          // https://github.com/binarykitchen/videomail.io/issues/323
          // tried just with err and JSON.stringify(err) but returns only "{}"
          // adding more debug info just temporarily
          //
          // also i think should be ignored when fireCallbacks() was successful and it's
          // playing fine anyway?
          'err: ' + util.inspect(err, {showHidden: true, showProxy: true, depth: 4}) + ',\n' +
          'arguments: ' + util.inspect(arguments, {showHidden: true, showProxy: true, depth: 4}) + ',\n' +
          'user media: ' + util.inspect(rawVisualUserMedia, {showHidden: true, showProxy: true, depth: 4}),
          options
        ));
      });

      setVisualStream(localMediaStream);

      play();
    } catch (exc) {
      self.emit(Events.ERROR, exc);
    }
  };

  this.isReady = function () {
    return !!rawVisualUserMedia.src
  };

  this.stop = function (visualStream, aboutToInitialize) {
    try {
      // do not stop "too much" when going to initialize anyway
      if (!aboutToInitialize) {
        if (!visualStream) {
          visualStream = getVisualStream();
        }

        var tracks = getTracks(visualStream);
        var newStopApiFound = false;

        if (tracks) {
          tracks.forEach(function (track) {
            if (track.stop) {
              newStopApiFound = true;
              track.stop();
            }
          });
        }

        // will probably become obsolete in one year (after june 2017)
        !newStopApiFound && visualStream && visualStream.stop && visualStream.stop();

        setVisualStream(null);

        audioRecorder && audioRecorder.stop();

        audioRecorder = null;
      }

      paused = record = false;
    } catch (exc) {
      self.emit(Events.ERROR, exc);
    }
  };

  this.createCanvas = function () {
    return index$17('canvas', {
      width: this.getRawWidth(true),
      height: this.getRawHeight(true)
    })
  };

  this.getVideoHeight = function () {
    return rawVisualUserMedia.videoHeight
  };

  this.getVideoWidth = function () {
    return rawVisualUserMedia.videoWidth
  };

  this.getRawWidth = function (responsive) {
    var rawWidth = this.getVideoWidth();
    var widthDefined = options.hasDefinedWidth();

    if (widthDefined || options.hasDefinedHeight()) {
      if (!responsive && widthDefined) {
        rawWidth = options.video.width;
      } else {
        rawWidth = recorder.calculateWidth(responsive);
      }
    }

    if (responsive) {
      rawWidth = recorder.limitWidth(rawWidth);
    }

    return rawWidth
  };

  this.getRawHeight = function (responsive) {
    var rawHeight;

    if (options.hasDefinedDimension()) {
      rawHeight = recorder.calculateHeight(responsive);

      if (rawHeight < 1) {
        throw VideomailError.create('Bad dimensions', 'Calculated raw height cannot be less than 1!', options)
      }
    } else {
      rawHeight = this.getVideoHeight();

      if (rawHeight < 1) {
        throw VideomailError.create('Bad dimensions', 'Raw video height from DOM element cannot be less than 1!', options)
      }
    }

    if (responsive) {
      rawHeight = recorder.limitHeight(rawHeight);
    }

    return rawHeight
  };

  this.getRawVisuals = function () {
    return rawVisualUserMedia
  };

  this.pause = function () {
    paused = true;
  };

  this.isPaused = function () {
    return paused
  };

  this.resume = function () {
    paused = false;
  };

  this.record = function () {
    record = true;
  };

  this.isRecording = function () {
    return record
  };

  this.getAudioSampleRate = function () {
    if (audioRecorder) {
      return audioRecorder.getSampleRate()
    } else {
      return -1
    }
  };

  this.getCharacteristics = function () {
    return {
      audioSampleRate: this.getAudioSampleRate(),
      muted: rawVisualUserMedia && rawVisualUserMedia.muted,
      width: rawVisualUserMedia && rawVisualUserMedia.width,
      height: rawVisualUserMedia && rawVisualUserMedia.height,
      videoWidth: rawVisualUserMedia && rawVisualUserMedia.videoWidth,
      videoHeight: rawVisualUserMedia && rawVisualUserMedia.videoHeight
    }
  };
};

var filesize = createCommonjsModule(function (module, exports) {
"use strict";

/**
 * filesize
 *
 * @copyright 2017 Jason Mulligan <jason.mulligan@avoidwork.com>
 * @license BSD-3-Clause
 * @version 3.5.10
 */
(function (global) {
	var b = /^(b|B)$/,
	    symbol = {
		iec: {
			bits: ["b", "Kib", "Mib", "Gib", "Tib", "Pib", "Eib", "Zib", "Yib"],
			bytes: ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"]
		},
		jedec: {
			bits: ["b", "Kb", "Mb", "Gb", "Tb", "Pb", "Eb", "Zb", "Yb"],
			bytes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
		}
	},
	    fullform = {
		iec: ["", "kibi", "mebi", "gibi", "tebi", "pebi", "exbi", "zebi", "yobi"],
		jedec: ["", "kilo", "mega", "giga", "tera", "peta", "exa", "zetta", "yotta"]
	};

	/**
  * filesize
  *
  * @method filesize
  * @param  {Mixed}   arg        String, Int or Float to transform
  * @param  {Object}  descriptor [Optional] Flags
  * @return {String}             Readable file size String
  */
	function filesize(arg) {
		var descriptor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		var result = [],
		    val = 0,
		    e = void 0,
		    base = void 0,
		    bits = void 0,
		    ceil = void 0,
		    full = void 0,
		    fullforms = void 0,
		    neg = void 0,
		    num = void 0,
		    output = void 0,
		    round = void 0,
		    unix = void 0,
		    spacer = void 0,
		    standard = void 0,
		    symbols = void 0;

		if (isNaN(arg)) {
			throw new Error("Invalid arguments");
		}

		bits = descriptor.bits === true;
		unix = descriptor.unix === true;
		base = descriptor.base || 2;
		round = descriptor.round !== undefined ? descriptor.round : unix ? 1 : 2;
		spacer = descriptor.spacer !== undefined ? descriptor.spacer : unix ? "" : " ";
		symbols = descriptor.symbols || descriptor.suffixes || {};
		standard = base === 2 ? descriptor.standard || "jedec" : "jedec";
		output = descriptor.output || "string";
		full = descriptor.fullform === true;
		fullforms = descriptor.fullforms instanceof Array ? descriptor.fullforms : [];
		e = descriptor.exponent !== undefined ? descriptor.exponent : -1;
		num = Number(arg);
		neg = num < 0;
		ceil = base > 2 ? 1000 : 1024;

		// Flipping a negative number to determine the size
		if (neg) {
			num = -num;
		}

		// Determining the exponent
		if (e === -1 || isNaN(e)) {
			e = Math.floor(Math.log(num) / Math.log(ceil));

			if (e < 0) {
				e = 0;
			}
		}

		// Exceeding supported length, time to reduce & multiply
		if (e > 8) {
			e = 8;
		}

		// Zero is now a special case because bytes divide by 1
		if (num === 0) {
			result[0] = 0;
			result[1] = unix ? "" : symbol[standard][bits ? "bits" : "bytes"][e];
		} else {
			val = num / (base === 2 ? Math.pow(2, e * 10) : Math.pow(1000, e));

			if (bits) {
				val = val * 8;

				if (val >= ceil && e < 8) {
					val = val / ceil;
					e++;
				}
			}

			result[0] = Number(val.toFixed(e > 0 ? round : 0));
			result[1] = base === 10 && e === 1 ? bits ? "kb" : "kB" : symbol[standard][bits ? "bits" : "bytes"][e];

			if (unix) {
				result[1] = standard === "jedec" ? result[1].charAt(0) : e > 0 ? result[1].replace(/B$/, "") : result[1];

				if (b.test(result[1])) {
					result[0] = Math.floor(result[0]);
					result[1] = "";
				}
			}
		}

		// Decorating a 'diff'
		if (neg) {
			result[0] = -result[0];
		}

		// Applying custom symbol
		result[1] = symbols[result[1]] || result[1];

		// Returning Array, Object, or String (default)
		if (output === "array") {
			return result;
		}

		if (output === "exponent") {
			return e;
		}

		if (output === "object") {
			return { value: result[0], suffix: result[1], symbol: result[1] };
		}

		if (full) {
			result[1] = fullforms[e] ? fullforms[e] : fullform[standard][e] + (bits ? "bit" : "byte") + (result[0] === 1 ? "" : "s");
		}

		return result.join(spacer);
	}

	// Partial application for functional programming
	filesize.partial = function (opt) {
		return function (arg) {
			return filesize(arg, opt);
		};
	};

	// CommonJS, AMD, script tag
	{
		module.exports = filesize;
	}
})(typeof window !== "undefined" ? window : commonjsGlobal);
});

var humanizeDuration = createCommonjsModule(function (module) {
// HumanizeDuration.js - http://git.io/j0HgmQ

(function () {
  var languages = {
    ar: {
      y: function (c) { return c === 1 ? 'سنة' : 'سنوات' },
      mo: function (c) { return c === 1 ? 'شهر' : 'أشهر' },
      w: function (c) { return c === 1 ? 'أسبوع' : 'أسابيع' },
      d: function (c) { return c === 1 ? 'يوم' : 'أيام' },
      h: function (c) { return c === 1 ? 'ساعة' : 'ساعات' },
      m: function (c) { return c === 1 ? 'دقيقة' : 'دقائق' },
      s: function (c) { return c === 1 ? 'ثانية' : 'ثواني' },
      ms: function (c) { return c === 1 ? 'جزء من الثانية' : 'أجزاء من الثانية' },
      decimal: ','
    },
    ca: {
      y: function (c) { return 'any' + (c !== 1 ? 's' : '') },
      mo: function (c) { return 'mes' + (c !== 1 ? 'os' : '') },
      w: function (c) { return 'setman' + (c !== 1 ? 'es' : 'a') },
      d: function (c) { return 'di' + (c !== 1 ? 'es' : 'a') },
      h: function (c) { return 'hor' + (c !== 1 ? 'es' : 'a') },
      m: function (c) { return 'minut' + (c !== 1 ? 's' : '') },
      s: function (c) { return 'segon' + (c !== 1 ? 's' : '') },
      ms: function (c) { return 'milisegon' + (c !== 1 ? 's' : '') },
      decimal: ','
    },
    cs: {
      y: function (c) { return ['rok', 'roku', 'roky', 'let'][getCzechForm(c)] },
      mo: function (c) { return ['měsíc', 'měsíce', 'měsíce', 'měsíců'][getCzechForm(c)] },
      w: function (c) { return ['týden', 'týdne', 'týdny', 'týdnů'][getCzechForm(c)] },
      d: function (c) { return ['den', 'dne', 'dny', 'dní'][getCzechForm(c)] },
      h: function (c) { return ['hodina', 'hodiny', 'hodiny', 'hodin'][getCzechForm(c)] },
      m: function (c) { return ['minuta', 'minuty', 'minuty', 'minut'][getCzechForm(c)] },
      s: function (c) { return ['sekunda', 'sekundy', 'sekundy', 'sekund'][getCzechForm(c)] },
      ms: function (c) { return ['milisekunda', 'milisekundy', 'milisekundy', 'milisekund'][getCzechForm(c)] },
      decimal: ','
    },
    da: {
      y: 'år',
      mo: function (c) { return 'måned' + (c !== 1 ? 'er' : '') },
      w: function (c) { return 'uge' + (c !== 1 ? 'r' : '') },
      d: function (c) { return 'dag' + (c !== 1 ? 'e' : '') },
      h: function (c) { return 'time' + (c !== 1 ? 'r' : '') },
      m: function (c) { return 'minut' + (c !== 1 ? 'ter' : '') },
      s: function (c) { return 'sekund' + (c !== 1 ? 'er' : '') },
      ms: function (c) { return 'millisekund' + (c !== 1 ? 'er' : '') },
      decimal: ','
    },
    de: {
      y: function (c) { return 'Jahr' + (c !== 1 ? 'e' : '') },
      mo: function (c) { return 'Monat' + (c !== 1 ? 'e' : '') },
      w: function (c) { return 'Woche' + (c !== 1 ? 'n' : '') },
      d: function (c) { return 'Tag' + (c !== 1 ? 'e' : '') },
      h: function (c) { return 'Stunde' + (c !== 1 ? 'n' : '') },
      m: function (c) { return 'Minute' + (c !== 1 ? 'n' : '') },
      s: function (c) { return 'Sekunde' + (c !== 1 ? 'n' : '') },
      ms: function (c) { return 'Millisekunde' + (c !== 1 ? 'n' : '') },
      decimal: ','
    },
    en: {
      y: function (c) { return 'year' + (c !== 1 ? 's' : '') },
      mo: function (c) { return 'month' + (c !== 1 ? 's' : '') },
      w: function (c) { return 'week' + (c !== 1 ? 's' : '') },
      d: function (c) { return 'day' + (c !== 1 ? 's' : '') },
      h: function (c) { return 'hour' + (c !== 1 ? 's' : '') },
      m: function (c) { return 'minute' + (c !== 1 ? 's' : '') },
      s: function (c) { return 'second' + (c !== 1 ? 's' : '') },
      ms: function (c) { return 'millisecond' + (c !== 1 ? 's' : '') },
      decimal: '.'
    },
    es: {
      y: function (c) { return 'año' + (c !== 1 ? 's' : '') },
      mo: function (c) { return 'mes' + (c !== 1 ? 'es' : '') },
      w: function (c) { return 'semana' + (c !== 1 ? 's' : '') },
      d: function (c) { return 'día' + (c !== 1 ? 's' : '') },
      h: function (c) { return 'hora' + (c !== 1 ? 's' : '') },
      m: function (c) { return 'minuto' + (c !== 1 ? 's' : '') },
      s: function (c) { return 'segundo' + (c !== 1 ? 's' : '') },
      ms: function (c) { return 'milisegundo' + (c !== 1 ? 's' : '') },
      decimal: ','
    },
    fi: {
      y: function (c) { return c === 1 ? 'vuosi' : 'vuotta' },
      mo: function (c) { return c === 1 ? 'kuukausi' : 'kuukautta' },
      w: function (c) { return 'viikko' + (c !== 1 ? 'a' : '') },
      d: function (c) { return 'päivä' + (c !== 1 ? 'ä' : '') },
      h: function (c) { return 'tunti' + (c !== 1 ? 'a' : '') },
      m: function (c) { return 'minuutti' + (c !== 1 ? 'a' : '') },
      s: function (c) { return 'sekunti' + (c !== 1 ? 'a' : '') },
      ms: function (c) { return 'millisekunti' + (c !== 1 ? 'a' : '') },
      decimal: ','
    },
    fr: {
      y: function (c) { return 'an' + (c !== 1 ? 's' : '') },
      mo: 'mois',
      w: function (c) { return 'semaine' + (c !== 1 ? 's' : '') },
      d: function (c) { return 'jour' + (c !== 1 ? 's' : '') },
      h: function (c) { return 'heure' + (c !== 1 ? 's' : '') },
      m: function (c) { return 'minute' + (c !== 1 ? 's' : '') },
      s: function (c) { return 'seconde' + (c !== 1 ? 's' : '') },
      ms: function (c) { return 'milliseconde' + (c !== 1 ? 's' : '') },
      decimal: ','
    },
    gr: {
      y: function (c) { return c === 1 ? 'χρόνος' : 'χρόνια' },
      mo: function (c) { return c === 1 ? 'μήνας' : 'μήνες' },
      w: function (c) { return c === 1 ? 'εβδομάδα' : 'εβδομάδες' },
      d: function (c) { return c === 1 ? 'μέρα' : 'μέρες' },
      h: function (c) { return c === 1 ? 'ώρα' : 'ώρες' },
      m: function (c) { return c === 1 ? 'λεπτό' : 'λεπτά' },
      s: function (c) { return c === 1 ? 'δευτερόλεπτο' : 'δευτερόλεπτα' },
      ms: function (c) { return c === 1 ? 'χιλιοστό του δευτερολέπτου' : 'χιλιοστά του δευτερολέπτου' },
      decimal: ','
    },
    hu: {
      y: 'év',
      mo: 'hónap',
      w: 'hét',
      d: 'nap',
      h: 'óra',
      m: 'perc',
      s: 'másodperc',
      ms: 'ezredmásodperc',
      decimal: ','
    },
    id: {
      y: 'tahun',
      mo: 'bulan',
      w: 'minggu',
      d: 'hari',
      h: 'jam',
      m: 'menit',
      s: 'detik',
      ms: 'milidetik',
      decimal: '.'
    },
    is: {
      y: 'ár',
      mo: function (c) { return 'mánuð' + (c !== 1 ? 'ir' : 'ur') },
      w: function (c) { return 'vik' + (c !== 1 ? 'ur' : 'a') },
      d: function (c) { return 'dag' + (c !== 1 ? 'ar' : 'ur') },
      h: function (c) { return 'klukkutím' + (c !== 1 ? 'ar' : 'i') },
      m: function (c) { return 'mínút' + (c !== 1 ? 'ur' : 'a') },
      s: function (c) { return 'sekúnd' + (c !== 1 ? 'ur' : 'a') },
      ms: function (c) { return 'millisekúnd' + (c !== 1 ? 'ur' : 'a') },
      decimal: '.'
    },
    it: {
      y: function (c) { return 'ann' + (c !== 1 ? 'i' : 'o') },
      mo: function (c) { return 'mes' + (c !== 1 ? 'i' : 'e') },
      w: function (c) { return 'settiman' + (c !== 1 ? 'e' : 'a') },
      d: function (c) { return 'giorn' + (c !== 1 ? 'i' : 'o') },
      h: function (c) { return 'or' + (c !== 1 ? 'e' : 'a') },
      m: function (c) { return 'minut' + (c !== 1 ? 'i' : 'o') },
      s: function (c) { return 'second' + (c !== 1 ? 'i' : 'o') },
      ms: function (c) { return 'millisecond' + (c !== 1 ? 'i' : 'o') },
      decimal: ','
    },
    ja: {
      y: '年',
      mo: '月',
      w: '週',
      d: '日',
      h: '時間',
      m: '分',
      s: '秒',
      ms: 'ミリ秒',
      decimal: '.'
    },
    ko: {
      y: '년',
      mo: '개월',
      w: '주일',
      d: '일',
      h: '시간',
      m: '분',
      s: '초',
      ms: '밀리 초',
      decimal: '.'
    },
    lt: {
      y: function (c) { return ((c % 10 === 0) || (c % 100 >= 10 && c % 100 <= 20)) ? 'metų' : 'metai' },
      mo: function (c) { return ['mėnuo', 'mėnesiai', 'mėnesių'][getLithuanianForm(c)] },
      w: function (c) { return ['savaitė', 'savaitės', 'savaičių'][getLithuanianForm(c)] },
      d: function (c) { return ['diena', 'dienos', 'dienų'][getLithuanianForm(c)] },
      h: function (c) { return ['valanda', 'valandos', 'valandų'][getLithuanianForm(c)] },
      m: function (c) { return ['minutė', 'minutės', 'minučių'][getLithuanianForm(c)] },
      s: function (c) { return ['sekundė', 'sekundės', 'sekundžių'][getLithuanianForm(c)] },
      ms: function (c) { return ['milisekundė', 'milisekundės', 'milisekundžių'][getLithuanianForm(c)] },
      decimal: ','
    },
    ms: {
      y: 'tahun',
      mo: 'bulan',
      w: 'minggu',
      d: 'hari',
      h: 'jam',
      m: 'minit',
      s: 'saat',
      ms: 'milisaat',
      decimal: '.'
    },
    nl: {
      y: 'jaar',
      mo: function (c) { return c === 1 ? 'maand' : 'maanden' },
      w: function (c) { return c === 1 ? 'week' : 'weken' },
      d: function (c) { return c === 1 ? 'dag' : 'dagen' },
      h: 'uur',
      m: function (c) { return c === 1 ? 'minuut' : 'minuten' },
      s: function (c) { return c === 1 ? 'seconde' : 'seconden' },
      ms: function (c) { return c === 1 ? 'milliseconde' : 'milliseconden' },
      decimal: ','
    },
    no: {
      y: 'år',
      mo: function (c) { return 'måned' + (c !== 1 ? 'er' : '') },
      w: function (c) { return 'uke' + (c !== 1 ? 'r' : '') },
      d: function (c) { return 'dag' + (c !== 1 ? 'er' : '') },
      h: function (c) { return 'time' + (c !== 1 ? 'r' : '') },
      m: function (c) { return 'minutt' + (c !== 1 ? 'er' : '') },
      s: function (c) { return 'sekund' + (c !== 1 ? 'er' : '') },
      ms: function (c) { return 'millisekund' + (c !== 1 ? 'er' : '') },
      decimal: ','
    },
    pl: {
      y: function (c) { return ['rok', 'roku', 'lata', 'lat'][getPolishForm(c)] },
      mo: function (c) { return ['miesiąc', 'miesiąca', 'miesiące', 'miesięcy'][getPolishForm(c)] },
      w: function (c) { return ['tydzień', 'tygodnia', 'tygodnie', 'tygodni'][getPolishForm(c)] },
      d: function (c) { return ['dzień', 'dnia', 'dni', 'dni'][getPolishForm(c)] },
      h: function (c) { return ['godzina', 'godziny', 'godziny', 'godzin'][getPolishForm(c)] },
      m: function (c) { return ['minuta', 'minuty', 'minuty', 'minut'][getPolishForm(c)] },
      s: function (c) { return ['sekunda', 'sekundy', 'sekundy', 'sekund'][getPolishForm(c)] },
      ms: function (c) { return ['milisekunda', 'milisekundy', 'milisekundy', 'milisekund'][getPolishForm(c)] },
      decimal: ','
    },
    pt: {
      y: function (c) { return 'ano' + (c !== 1 ? 's' : '') },
      mo: function (c) { return c !== 1 ? 'meses' : 'mês' },
      w: function (c) { return 'semana' + (c !== 1 ? 's' : '') },
      d: function (c) { return 'dia' + (c !== 1 ? 's' : '') },
      h: function (c) { return 'hora' + (c !== 1 ? 's' : '') },
      m: function (c) { return 'minuto' + (c !== 1 ? 's' : '') },
      s: function (c) { return 'segundo' + (c !== 1 ? 's' : '') },
      ms: function (c) { return 'milissegundo' + (c !== 1 ? 's' : '') },
      decimal: ','
    },
    ru: {
      y: function (c) { return ['лет', 'год', 'года'][getSlavicForm(c)] },
      mo: function (c) { return ['месяцев', 'месяц', 'месяца'][getSlavicForm(c)] },
      w: function (c) { return ['недель', 'неделя', 'недели'][getSlavicForm(c)] },
      d: function (c) { return ['дней', 'день', 'дня'][getSlavicForm(c)] },
      h: function (c) { return ['часов', 'час', 'часа'][getSlavicForm(c)] },
      m: function (c) { return ['минут', 'минута', 'минуты'][getSlavicForm(c)] },
      s: function (c) { return ['секунд', 'секунда', 'секунды'][getSlavicForm(c)] },
      ms: function (c) { return ['миллисекунд', 'миллисекунда', 'миллисекунды'][getSlavicForm(c)] },
      decimal: ','
    },
    uk: {
      y: function (c) { return ['років', 'рік', 'роки'][getSlavicForm(c)] },
      mo: function (c) { return ['місяців', 'місяць', 'місяці'][getSlavicForm(c)] },
      w: function (c) { return ['неділь', 'неділя', 'неділі'][getSlavicForm(c)] },
      d: function (c) { return ['днів', 'день', 'дні'][getSlavicForm(c)] },
      h: function (c) { return ['годин', 'година', 'години'][getSlavicForm(c)] },
      m: function (c) { return ['хвилин', 'хвилина', 'хвилини'][getSlavicForm(c)] },
      s: function (c) { return ['секунд', 'секунда', 'секунди'][getSlavicForm(c)] },
      ms: function (c) { return ['мілісекунд', 'мілісекунда', 'мілісекунди'][getSlavicForm(c)] },
      decimal: ','
    },
    sv: {
      y: 'år',
      mo: function (c) { return 'månad' + (c !== 1 ? 'er' : '') },
      w: function (c) { return 'veck' + (c !== 1 ? 'or' : 'a') },
      d: function (c) { return 'dag' + (c !== 1 ? 'ar' : '') },
      h: function (c) { return 'timm' + (c !== 1 ? 'ar' : 'e') },
      m: function (c) { return 'minut' + (c !== 1 ? 'er' : '') },
      s: function (c) { return 'sekund' + (c !== 1 ? 'er' : '') },
      ms: function (c) { return 'millisekund' + (c !== 1 ? 'er' : '') },
      decimal: ','
    },
    tr: {
      y: 'yıl',
      mo: 'ay',
      w: 'hafta',
      d: 'gün',
      h: 'saat',
      m: 'dakika',
      s: 'saniye',
      ms: 'milisaniye',
      decimal: ','
    },
    vi: {
      y: 'năm',
      mo: 'tháng',
      w: 'tuần',
      d: 'ngày',
      h: 'giờ',
      m: 'phút',
      s: 'giây',
      ms: 'mili giây',
      decimal: ','
    },
    zh_CN: {
      y: '年',
      mo: '个月',
      w: '周',
      d: '天',
      h: '小时',
      m: '分钟',
      s: '秒',
      ms: '毫秒',
      decimal: '.'
    },
    zh_TW: {
      y: '年',
      mo: '個月',
      w: '周',
      d: '天',
      h: '小時',
      m: '分鐘',
      s: '秒',
      ms: '毫秒',
      decimal: '.'
    }
  };

  // You can create a humanizer, which returns a function with default
  // parameters.
  function humanizer (passedOptions) {
    var result = function humanizer (ms, humanizerOptions) {
      var options = extend({}, result, humanizerOptions || {});
      return doHumanization(ms, options)
    };

    return extend(result, {
      language: 'en',
      delimiter: ', ',
      spacer: ' ',
      conjunction: '',
      serialComma: true,
      units: ['y', 'mo', 'w', 'd', 'h', 'm', 's'],
      languages: {},
      round: false,
      unitMeasures: {
        y: 31557600000,
        mo: 2629800000,
        w: 604800000,
        d: 86400000,
        h: 3600000,
        m: 60000,
        s: 1000,
        ms: 1
      }
    }, passedOptions)
  }

  // The main function is just a wrapper around a default humanizer.
  var humanizeDuration = humanizer({});

  // doHumanization does the bulk of the work.
  function doHumanization (ms, options) {
    var i, len, piece;

    // Make sure we have a positive number.
    // Has the nice sideffect of turning Number objects into primitives.
    ms = Math.abs(ms);

    var dictionary = options.languages[options.language] || languages[options.language];
    if (!dictionary) {
      throw new Error('No language ' + dictionary + '.')
    }

    var pieces = [];

    // Start at the top and keep removing units, bit by bit.
    var unitName, unitMS, unitCount;
    for (i = 0, len = options.units.length; i < len; i++) {
      unitName = options.units[i];
      unitMS = options.unitMeasures[unitName];

      // What's the number of full units we can fit?
      if (i + 1 === len) {
        unitCount = ms / unitMS;
      } else {
        unitCount = Math.floor(ms / unitMS);
      }

      // Add the string.
      pieces.push({
        unitCount: unitCount,
        unitName: unitName
      });

      // Remove what we just figured out.
      ms -= unitCount * unitMS;
    }

    var firstOccupiedUnitIndex = 0;
    for (i = 0; i < pieces.length; i++) {
      if (pieces[i].unitCount) {
        firstOccupiedUnitIndex = i;
        break
      }
    }

    if (options.round) {
      var ratioToLargerUnit, previousPiece;
      for (i = pieces.length - 1; i >= 0; i--) {
        piece = pieces[i];
        piece.unitCount = Math.round(piece.unitCount);

        if (i === 0) { break }

        previousPiece = pieces[i - 1];

        ratioToLargerUnit = options.unitMeasures[previousPiece.unitName] / options.unitMeasures[piece.unitName];
        if ((piece.unitCount % ratioToLargerUnit) === 0 || (options.largest && ((options.largest - 1) < (i - firstOccupiedUnitIndex)))) {
          previousPiece.unitCount += piece.unitCount / ratioToLargerUnit;
          piece.unitCount = 0;
        }
      }
    }

    var result = [];
    for (i = 0, pieces.length; i < len; i++) {
      piece = pieces[i];
      if (piece.unitCount) {
        result.push(render(piece.unitCount, piece.unitName, dictionary, options));
      }

      if (result.length === options.largest) { break }
    }

    if (result.length) {
      if (!options.conjunction || result.length === 1) {
        return result.join(options.delimiter)
      } else if (result.length === 2) {
        return result.join(options.conjunction)
      } else if (result.length > 2) {
        return result.slice(0, -1).join(options.delimiter) + (options.serialComma ? ',' : '') + options.conjunction + result.slice(-1)
      }
    } else {
      return render(0, options.units[options.units.length - 1], dictionary, options)
    }
  }

  function render (count, type, dictionary, options) {
    var decimal;
    if (options.decimal === void 0) {
      decimal = dictionary.decimal;
    } else {
      decimal = options.decimal;
    }

    var countStr = count.toString().replace('.', decimal);

    var dictionaryValue = dictionary[type];
    var word;
    if (typeof dictionaryValue === 'function') {
      word = dictionaryValue(count);
    } else {
      word = dictionaryValue;
    }

    return countStr + options.spacer + word
  }

  function extend (destination) {
    var arguments$1 = arguments;

    var source;
    for (var i = 1; i < arguments.length; i++) {
      source = arguments$1[i];
      for (var prop in source) {
        if (source.hasOwnProperty(prop)) {
          destination[prop] = source[prop];
        }
      }
    }
    return destination
  }

  // Internal helper function for Czech language.
  function getCzechForm (c) {
    if (c === 1) {
      return 0
    } else if (Math.floor(c) !== c) {
      return 1
    } else if (c % 10 >= 2 && c % 10 <= 4 && c % 100 < 10) {
      return 2
    } else {
      return 3
    }
  }

  // Internal helper function for Polish language.
  function getPolishForm (c) {
    if (c === 1) {
      return 0
    } else if (Math.floor(c) !== c) {
      return 1
    } else if (c % 10 >= 2 && c % 10 <= 4 && !(c % 100 > 10 && c % 100 < 20)) {
      return 2
    } else {
      return 3
    }
  }

  // Internal helper function for Russian and Ukranian languages.
  function getSlavicForm (c) {
    if (Math.floor(c) !== c) {
      return 2
    } else if ((c % 100 >= 5 && c % 100 <= 20) || (c % 10 >= 5 && c % 10 <= 9) || c % 10 === 0) {
      return 0
    } else if (c % 10 === 1) {
      return 1
    } else if (c > 1) {
      return 2
    } else {
      return 0
    }
  }

  // Internal helper function for Lithuanian language.
  function getLithuanianForm (c) {
    if (c === 1 || (c % 10 === 1 && c % 100 > 20)) {
      return 0
    } else if (Math.floor(c) !== c || (c % 10 >= 2 && c % 100 > 20) || (c % 10 >= 2 && c % 100 < 10)) {
      return 1
    } else {
      return 2
    }
  }

  humanizeDuration.getSupportedLanguages = function getSupportedLanguages () {
    var result = [];
    for (var language in languages) {
      if (languages.hasOwnProperty(language)) {
        result.push(language);
      }
    }
    return result
  };

  humanizeDuration.humanizer = humanizer;

  if (typeof undefined === 'function' && undefined.amd) {
    undefined(function () {
      return humanizeDuration
    });
  } else if ('object' !== 'undefined' && module.exports) {
    module.exports = humanizeDuration;
  } else {
    this.humanizeDuration = humanizeDuration;
  }
})();  // eslint-disable-line semi
});

// todo get rid of this class and use those imports directly

var Humanize = {
  filesize: function (bytes, round) {
    return filesize(bytes, {
      round: round
    })
  },

  toTime: function (t) {
    return humanizeDuration(t)
  }
};

// credits http://1lineart.kulaone.com/#/
var PIPE_SYMBOL = '°º¤ø,¸¸,ø¤º°`°º¤ø,¸,ø¤°º¤ø,¸¸,ø¤º°`°º¤ø,¸ ';

var Recorder = function (visuals, replay, options) {
  EventEmitter.call(this, options, 'Recorder');

    // validate some options this class needs
  if (!options || !options.video || !options.video.fps) {
    throw VideomailError.create('FPS must be defined', options)
  }

  var self = this;
  var browser = new Browser(options);
  var debug = options.debug;

  var loop = null;

  var originalAnimationFrameObject;

  var samplesCount = 0;
  var framesCount = 0;

  var recordingStats = {};

  var confirmedFrameNumber = 0;
  var confirmedSampleNumber = 0;

  var recorderElement;
  var userMedia;

  var userMediaTimeout;
  var retryTimeout;

  var bytesSum;

  var frameProgress;
  var sampleProgress;

  var canvas;
  var ctx;

  var userMediaLoaded;
  var userMediaLoading;
  var submitting;
  var unloaded;
  var stopTime;
  var stream$$1;
  var connecting;
  var connected;
  var blocking;
  var built;
  var key;
  var waitingTime;

  var pingInterval;

  var frame;

  var recordingBufferLength;
  var recordingBuffer;

  function writeStream (buffer, opts) {
    if (stream$$1) {
      if (stream$$1.destroyed) {
        self.emit(Events.ERROR, VideomailError.create(
          'Already disconnected',
          'Sorry, the connection to the server has been destroyed. Please reload. ' +
          'Details of buffer: ' + buffer.toString(),
          options
        ));
      } else {
        var onFlushedCallback = opts && opts.onFlushedCallback;

        try {
          stream$$1.write(buffer, function () {
            onFlushedCallback && onFlushedCallback(opts);
          });
        } catch (exc) {
          self.emit(Events.ERROR, VideomailError.create(
            'Failed writing to server',
            'stream.write() failed because of ' + pretty$1(exc),
            options
          ));
        }
      }
    }
  }

  function sendPings () {
    pingInterval = window.setInterval(function () {
      debug('Recorder: pinging...');
      writeStream(Buffer.from(''));
    }, options.timeouts.pingInterval);
  }

  function stopPings () {
    clearInterval(pingInterval);
  }

  function onAudioSample (audioSample) {
    samplesCount++;

    var audioBuffer = audioSample.toBuffer();

    // if (options.verbose) {
    //     debug(
    //         'Sample #' + samplesCount + ' (' + audioBuffer.length + ' bytes):'
    //     )
    // }

    writeStream(audioBuffer);
  }

  function show () {
    recorderElement && index$10(recorderElement, false);
  }

  function onUserMediaReady () {
    try {
      debug('Recorder: onUserMediaReady()');

      userMediaLoading = blocking = unloaded = submitting = false;
      userMediaLoaded = true;

      loop = createLoop();

      show();
      self.emit(Events.USER_MEDIA_READY, {paused: self.isPaused()});
    } catch (exc) {
      self.emit(Events.ERROR, exc);
    }
  }

  function clearRetryTimeout () {
    debug('Recorder: clearRetryTimeout()');

    retryTimeout && clearTimeout(retryTimeout);
    retryTimeout = null;
  }

  function clearUserMediaTimeout () {
    if (userMediaTimeout) {
      debug('Recorder: clearUserMediaTimeout()');

      userMediaTimeout && clearTimeout(userMediaTimeout);
      userMediaTimeout = null;
    }
  }

  function calculateFrameProgress () {
    return (confirmedFrameNumber / (framesCount || 1) * 100).toFixed(2) + '%'
  }

  function calculateSampleProgress () {
    return (confirmedSampleNumber / (samplesCount || 1) * 100).toFixed(2) + '%'
  }

  function updateOverallProgress () {
    // when progresses aren't initialized,
    // then do a first calculation to avoid `infinite` or `null` displays

    if (!frameProgress) {
      frameProgress = calculateFrameProgress();
    }

    if (!sampleProgress) {
      sampleProgress = calculateSampleProgress();
    }

    self.emit(
      Events.PROGRESS,
      frameProgress,
      sampleProgress
    );
  }

  function updateFrameProgress (args) {
    confirmedFrameNumber = args.frame ? args.frame : confirmedFrameNumber;

    frameProgress = calculateFrameProgress();

    updateOverallProgress();
  }

  function updateSampleProgress (args) {
    confirmedSampleNumber = args.sample ? args.sample : confirmedSampleNumber;

    sampleProgress = calculateSampleProgress();

    updateOverallProgress();
  }

  function preview (args) {
    confirmedFrameNumber =
    confirmedSampleNumber =
    samplesCount =
    framesCount = 0;

    sampleProgress = frameProgress = null;

    key = args.key;

    if (args.mp4) {
      replay.setMp4Source(
        args.mp4 + Constants.SITE_NAME_LABEL + '/' + options.siteName + '/videomail.mp4',
        true
      );
    }

    if (args.webm) {
      replay.setWebMSource(
        args.webm + Constants.SITE_NAME_LABEL + '/' + options.siteName + '/videomail.webm',
        true
      );
    }

    self.hide();
    self.emit(Events.PREVIEW, key, self.getRecorderWidth(true), self.getRecorderHeight(true));

    // keep it for recording stats
    waitingTime = Date.now() - stopTime;

    recordingStats.waitingTime = waitingTime;

    if (options.debug) {
      debug(
        'While recording, %s have been transferred and waiting time was %s',
        Humanize.filesize(bytesSum, 2),
        Humanize.toTime(waitingTime)
      );
    }
  }

  function initSocket (cb) {
    if (!connected) {
      connecting = true;

      debug('Recorder: initialising web socket to %s', options.socketUrl);

      self.emit(Events.CONNECTING);

      // https://github.com/maxogden/websocket-stream#binary-sockets

      // we use query parameters here because we cannot set custom headers in web sockets,
      // see https://github.com/websockets/ws/issues/467

      var url2Connect =
        options.socketUrl +
        '?' +
        encodeURIComponent(Constants.SITE_NAME_LABEL) +
        '=' +
        encodeURIComponent(options.siteName);

      try {
        // websocket options cannot be set on client side, only on server, see
        // https://github.com/maxogden/websocket-stream/issues/116#issuecomment-296421077
        stream$$1 = stream(url2Connect, {
          perMessageDeflate: false,
          // see https://github.com/maxogden/websocket-stream/issues/117#issuecomment-298826011
          objectMode: true
        });
      } catch (exc) {
        connecting = connected = false;

        var err;

        if (typeof stream === 'undefined') {
          err = VideomailError.create('There is no websocket', 'Cause: ' + pretty$1(exc), options);
        } else {
          err = VideomailError.create(
            'Failed to connect to server',
            'Please upgrade your browser. Your current version does not seem to support websockets.',
            options, {
              browserProblem: true
            }
          );
        }

        self.emit(Events.ERROR, err);
      }

      if (stream$$1) {
        // // useful for debugging streams
        //
        // if (!stream.originalEmit) {
        //   stream.originalEmit = stream.emit
        // }
        //
        // stream.emit = function (type) {
        //   if (stream) {
        //     debug(PIPE_SYMBOL + 'Debugging stream event:', type)
        //     var args = Array.prototype.slice.call(arguments, 0)
        //     return stream.originalEmit.apply(stream, args)
        //   }
        // }

        stream$$1.on('close', function (err) {
          debug(PIPE_SYMBOL + 'Stream has closed');

          connecting = connected = false;

          if (err) {
            self.emit(Events.ERROR, err || 'Unhandled websocket error');
          } else {
            self.emit(Events.DISCONNECTED);

            // prevents from https://github.com/binarykitchen/videomail.io/issues/297 happening
            cancelAnimationFrame();
          }
        });

        stream$$1.on('connect', function () {
          debug(PIPE_SYMBOL + 'Stream *connect* event emitted');

          if (!connected) {
            connected = true;
            connecting = unloaded = false;

            self.emit(Events.CONNECTED);

            debug('Going to ask for webcam permissons now ...');

            cb && cb();
          }
        });

        stream$$1.on('data', function (data) {
          debug(PIPE_SYMBOL + 'Stream *data* event emitted');

          var command;

          try {
            command = JSON.parse(data.toString());
          } catch (exc) {
            debug('Failed to parse command:', exc);

            self.emit(Events.ERROR, VideomailError.create(
              'Invalid server command',
              // toString() since https://github.com/binarykitchen/videomail.io/issues/288
              'Contact us asap. Bad commmand was ' + data.toString() + '. ',
              options
            ));
          } finally {
            executeCommand.call(self, command);
          }
        });

        stream$$1.on('error', function (err) {
          debug(PIPE_SYMBOL + 'Stream *error* event emitted');

          connecting = connected = false;
          self.emit(Events.ERROR, err);
        });

        // just experimental

        stream$$1.on('drain', function () {
          debug(PIPE_SYMBOL + 'Stream *drain* event emitted (should not happen!)');
        });

        stream$$1.on('preend', function () {
          debug(PIPE_SYMBOL + 'Stream *preend* event emitted');
        });

        stream$$1.on('end', function () {
          debug(PIPE_SYMBOL + 'Stream *end* event emitted');
        });

        stream$$1.on('drain', function () {
          debug(PIPE_SYMBOL + 'Stream *drain* event emitted');
        });

        stream$$1.on('pipe', function () {
          debug(PIPE_SYMBOL + 'Stream *pipe* event emitted');
        });

        stream$$1.on('unpipe', function () {
          debug(PIPE_SYMBOL + 'Stream *unpipe* event emitted');
        });

        stream$$1.on('resume', function () {
          debug(PIPE_SYMBOL + 'Stream *resume* event emitted');
        });

        stream$$1.on('uncork', function () {
          debug(PIPE_SYMBOL + 'Stream *uncork* event emitted');
        });

        stream$$1.on('readable', function () {
          debug(PIPE_SYMBOL + 'Stream *preend* event emitted');
        });

        stream$$1.on('prefinish', function () {
          debug(PIPE_SYMBOL + 'Stream *preend* event emitted');
        });

        stream$$1.on('finish', function () {
          debug(PIPE_SYMBOL + 'Stream *preend* event emitted');
        });
      }
    }
  }

  function showUserMedia () {
    // use connected flag to prevent this from happening
    // https://github.com/binarykitchen/videomail.io/issues/323
    return connected && (isNotifying() || !isHidden() || blocking)
  }

  function userMediaErrorCallback (err) {
    userMediaLoading = false;
    clearUserMediaTimeout();

    debug(
      'Recorder: userMediaErrorCallback()',
      ', Webcam characteristics:',
      userMedia.getCharacteristics(),
      ', temporary err stack:',
      (err && err.stack) || '(undefined)'
    );

    var errorListeners = self.listeners(Events.ERROR);

    if (errorListeners.length) {
      if (err.name !== VideomailError.MEDIA_DEVICE_NOT_SUPPORTED) {
        self.emit(Events.ERROR, err);
      } else {
        // do not emit but retry since MEDIA_DEVICE_NOT_SUPPORTED can be a race condition
        debug('Recorder: ignore user media error', err);
      }

      // retry after a while
      retryTimeout = setTimeout(initSocket, options.timeouts.userMedia);
    } else {
      if (unloaded) {
        // can happen that container is unloaded but some user media related callbacks
        // are still in process. in that case ignore error.
        debug('Recorder: already unloaded. Not going to throw error', err);
      } else {
        debug('Recorder: no error listeners attached but throwing error', err);

        // weird situation, throw it instead of emitting since there are no error listeners
        throw VideomailError.create(
          err,
          'Unable to process this error since there are no error listeners anymore.',
          options
        )
      }
    }
  }

  function getUserMediaCallback (localStream) {
    debug('Recorder: getUserMediaCallback()');

    if (showUserMedia()) {
      try {
        clearUserMediaTimeout();

        userMedia.init(
          localStream,
          onUserMediaReady.bind(self),
          onAudioSample.bind(self),
          function (err) {
            self.emit(Events.ERROR, err);
          }
        );
      } catch (exc) {
        self.emit(Events.ERROR, exc);
      }
    }
  }

  function loadGenuineUserMedia () {
    if (!navigator) {
      throw new Error('Navigator is missing!')
    }

    debug('Recorder: loadGenuineUserMedia()');

    self.emit(Events.ASKING_WEBCAM_PERMISSION);

    // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // prefer the front camera (if one is available) over the rear one
      var constraints = {
        video: {
          facingMode: 'user',
          frameRate: {ideal: options.video.fps}
        },
        audio: options.isAudioEnabled()
      };

      if (options.hasDefinedWidth()) {
        constraints.video.width = {ideal: options.video.width};
      }

      if (options.hasDefinedHeight()) {
        constraints.video.height = {ideal: options.video.height};
      }

      debug('Recorder: navigator.mediaDevices.getUserMedia()');

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(getUserMediaCallback)
        .catch(userMediaErrorCallback);
    } else {
      debug('Recorder: navigator.getUserMedia()');

      navigator.getUserMedia_({
        video: true,
        audio: options.isAudioEnabled()
      }, getUserMediaCallback, userMediaErrorCallback);
    }
  }

  function loadUserMedia () {
    if (userMediaLoaded) {
      debug('Recorder: skipping loadUserMedia() because it is already loaded');
      onUserMediaReady();
      return false
    } else if (userMediaLoading) {
      debug('Recorder: skipping loadUserMedia() because it is already asking for permission');
      return false
    }

    debug('Recorder: loadUserMedia()');

    self.emit(Events.LOADING_USER_MEDIA);

    try {
      userMediaTimeout = setTimeout(function () {
        if (!self.isReady()) {
          self.emit(Events.ERROR, browser.getNoAccessIssue());
        }
      }, options.timeouts.userMedia);

      userMediaLoading = true;

      loadGenuineUserMedia();
    } catch (exc) {
      debug('Recorder: failed to load genuine user media');

      userMediaLoading = false;

      var errorListeners = self.listeners(Events.ERROR);

      if (errorListeners.length) {
        self.emit(Events.ERROR, exc);
      } else {
        debug('Recorder: no error listeners attached but throwing exception', exc);
        throw exc // throw it further
      }
    }
  }

  function executeCommand (command) {
    try {
      debug(
        'Server commanded: %s',
        command.command,
        command.args ? ', ' + JSON.stringify(command.args) : ''
      );

      switch (command.command) {
        case 'ready':
          if (!userMediaTimeout) { loadUserMedia(); }
          break
        case 'preview':
          preview(command.args);
          break
        case 'error':
          this.emit(Events.ERROR, VideomailError.create(
            'Oh no, server error!',
            command.args.err.toString() || '(No explanation given)',
            options
          ));
          break
        case 'confirmFrame':
          updateFrameProgress(command.args);
          break
        case 'confirmSample':
          updateSampleProgress(command.args);
          break
        case 'beginAudioEncoding':
          this.emit(Events.BEGIN_AUDIO_ENCODING);
          break
        case 'beginVideoEncoding':
          this.emit(Events.BEGIN_VIDEO_ENCODING);
          break
        default:
          this.emit(Events.ERROR, 'Unknown server command: ' + command.command);
          break
      }
    } catch (exc) {
      self.emit(Events.ERROR, exc);
    }
  }

  function isNotifying () {
    return visuals.isNotifying()
  }

  function isHidden () {
    return !recorderElement || index$10(recorderElement)
  }

  function writeCommand (command, args, cb) {
    if (!cb && args && args.constructor === Function) {
      cb = args;
      args = null;
    }

    if (!connected) {
      debug('Reconnecting for the command', command, '…');

      initSocket(function () {
        writeCommand(command, args);
        cb && cb();
      });
    } else if (stream$$1) {
      debug('$ %s', command, args ? JSON.stringify(args) : '');

      var commandObj = {
        command: command,
        args: args
      };

      // todo commented out because for some reasons server does not accept such a long
      // array of many log lines. to examine later.
      //
      // add some useful debug info to examine weird stuff like this one
      // UnprocessableError: Unable to encode a video with FPS near zero.
      // todo consider removing this later or have it for debug=1 only?
      //
      // if (options.logger && options.logger.getLines) {
      //   commandObj.logLines = options.logger.getLines()
      // }

      writeStream(Buffer.from(JSON.stringify(commandObj)));

      if (cb) {
        // keep all callbacks async
        setTimeout(function () {
          cb();
        }, 0);
      }
    }
  }

  function disconnect () {
    if (connected) {
      debug('Recorder: disconnect()');

      if (userMedia) {
        // prevents https://github.com/binarykitchen/videomail-client/issues/114
        userMedia.unloadRemainingEventListeners();
      }

      if (submitting) {
        // server will disconnect socket automatically after submitting
        connecting = connected = false;
      } else if (stream$$1) {
        // force to disconnect socket right now to clean temp files on server
        // event listeners will do the rest
        stream$$1.end();
        stream$$1 = undefined;
      }
    }
  }

  function cancelAnimationFrame () {
    loop && loop.dispose();
  }

  function getIntervalSum () {
    return loop.getElapsedTime()
  }

  function getAvgInterval () {
    return (getIntervalSum() / framesCount)
  }

  this.getRecordingStats = function () {
    return recordingStats
  };

  this.getAudioSampleRate = function () {
    return userMedia.getAudioSampleRate()
  };

  this.stop = function (params) {
    debug('stop()', params);

    var limitReached = params.limitReached;

    this.emit(Events.STOPPING, limitReached);

    loop.complete();

    stopTime = Date.now();

    recordingStats = {
      avgFps: loop.getFPS(),
      wantedFps: options.video.fps,
      avgInterval: getAvgInterval(),
      wantedInterval: 1e3 / options.video.fps,

      intervalSum: getIntervalSum(),
      framesCount: framesCount,
      videoType: replay.getVideoType()
    };

    if (options.isAudioEnabled()) {
      recordingStats.samplesCount = samplesCount;
      recordingStats.sampleRate = userMedia.getAudioSampleRate();
    }

    writeCommand('stop', recordingStats);

    // beware, resetting will set framesCount to zero, so leave this here
    this.reset();
  };

  this.back = function (cb) {
    this.emit(Events.GOING_BACK);

    show();
    this.reset();

    writeCommand('back', cb);
  };

  function reInitialiseAudio () {
    debug('Recorder: reInitialiseAudio()');

    clearUserMediaTimeout();

        // important to free memory
    userMedia && userMedia.stop();

    userMediaLoaded = key = canvas = ctx = null;

    loadUserMedia();
  }

  this.unload = function (e) {
    if (!unloaded) {
      var cause;

      if (e) {
        cause = e.name || e.statusText || e.toString();
      }

      debug('Recorder: unload()' + (cause ? ', cause: ' + cause : ''));

      this.reset();

      clearUserMediaTimeout();

      disconnect();

      unloaded = true;

      built = false;
    }
  };

  this.reset = function () {
        // no need to reset when already unloaded
    if (!unloaded) {
      debug('Recorder: reset()');

      this.emit(Events.RESETTING);

      cancelAnimationFrame();

      // important to free memory
      userMedia && userMedia.stop();

      replay.reset();

      userMediaLoaded = key = canvas = ctx = waitingTime = null;
    }
  };

  this.validate = function () {
    return connected && framesCount > 0 && canvas === null
  };

  this.isReady = function () {
    return userMedia.isReady()
  };

  this.pause = function (params) {
    var e = params && params.event;

    if (e instanceof window.Event) {
      params.eventType = e.type;
    }

    debug('pause()', params);

    userMedia.pause();
    loop.stop();

    this.emit(Events.PAUSED);

    sendPings();
  };

  this.isPaused = function () {
    return userMedia && userMedia.isPaused()
  };

  this.resume = function () {
    debug('Recorder: resume()');

    stopPings();

    this.emit(Events.RESUMING);

    userMedia.resume();
    loop.start();
  };

  function onFlushed (opts) {
    var frameNumber = opts && opts.frameNumber;

    if (frameNumber === 1) {
      self.emit(Events.FIRST_FRAME_SENT);
    }
  }

  function createLoop () {
    var newLoop = index$41({fps: options.video.fps}, draw);

    // remember it first
    originalAnimationFrameObject = newLoop.getRequestAnimationFrameObject();

    return newLoop
  }

  function draw (deltaTime, elapsedTime) {
    try {
      // ctx and stream might become null while unloading
      if (!self.isPaused() && stream$$1 && ctx) {
        if (framesCount === 0) {
          self.emit(Events.SENDING_FIRST_FRAME);
        }

        framesCount++;

        ctx.drawImage(
          userMedia.getRawVisuals(),
          0,
          0,
          canvas.width,
          canvas.height
        );

        recordingBuffer = frame.toBuffer();
        recordingBufferLength = recordingBuffer.length;

        if (recordingBufferLength < 1) {
          throw VideomailError.create('Failed to extract webcam data.', options)
        }

        bytesSum += recordingBufferLength;

        writeStream(recordingBuffer, {
          frameNumber: framesCount,
          onFlushedCallback: onFlushed
        });

        // if (options.verbose) {
        //   debug(
        //     'Frame #' + framesCount + ' (' + recordingBufferLength + ' bytes):',
        //     ' delta=' + deltaTime + 'ms, ' +
        //     ' elapsed=' + elapsedTime + 'ms'
        //   )
        // }

        visuals.checkTimer({intervalSum: elapsedTime});
      }
    } catch (exc) {
      self.emit(Events.ERROR, exc);
    }
  }

  this.record = function () {
    if (unloaded) {
      return false
    }

    // reconnect when needed
    if (!connected) {
      debug('Recorder: reconnecting before recording ...');

      initSocket(function () {
        self.once(Events.USER_MEDIA_READY, self.record);
      });

      return false
    }

    try {
      canvas = userMedia.createCanvas();
    } catch (exc) {
      self.emit(
        Events.ERROR,
        VideomailError.create('Failed to create canvas.', exc, options)
      );

      return false
    }

    ctx = canvas.getContext('2d');

    if (!canvas.width) {
      self.emit(
        Events.ERROR,
        VideomailError.create('Canvas has an invalid width.', options)
      );

      return false
    }

    if (!canvas.height) {
      self.emit(
        Events.ERROR,
        VideomailError.create('Canvas has an invalid height.', options)
      );

      return false
    }

    bytesSum = 0;

    frame = new index$36(canvas, options);

    debug('Recorder: record()');
    userMedia.record();

    self.emit(Events.RECORDING, framesCount);

    loop.start();
  };

  function setAnimationFrameObject (newObj) {
    // must stop and then start to make it become effective, see
    // https://github.com/hapticdata/animitter/issues/5#issuecomment-292019168
    if (loop) {
      var isRecording = self.isRecording();

      loop.stop();
      loop.setRequestAnimationFrameObject(newObj);

      if (isRecording) {
        loop.start();
      }
    }
  }

  function restoreAnimationFrameObject () {
    debug('Recorder: restoreAnimationFrameObject()');

    setAnimationFrameObject(originalAnimationFrameObject);
  }

  function loopWithTimeouts () {
    debug('Recorder: loopWithTimeouts()');

    var wantedInterval = 1e3 / options.video.fps;

    var processingTime = 0;
    var start;

    function raf (fn) {
      return setTimeout(
        function () {
          start = Date.now();
          fn();
          processingTime = Date.now() - start;
        },
        // reducing wanted interval by respecting the time it takes to
        // compute internally since this is not multi-threaded like
        // requestAnimationFrame
        wantedInterval - processingTime
      )
    }

    function cancel (id) {
      clearTimeout(id);
    }

    setAnimationFrameObject({
      requestAnimationFrame: raf,
      cancelAnimationFrame: cancel
    });
  }

  function buildElement () {
    recorderElement = index$17('video.' + options.selectors.userMediaClass);
    visuals.appendChild(recorderElement);
  }

  function correctDimensions () {
    if (options.hasDefinedWidth()) {
      recorderElement.width = self.getRecorderWidth(true);
    }

    if (options.hasDefinedHeight()) {
      recorderElement.height = self.getRecorderHeight(true);
    }
  }

  function initEvents () {
    self
      .on(Events.SUBMITTING, function () {
        submitting = true;
      })
      .on(Events.SUBMITTED, function () {
        submitting = false;
        self.unload();
      })
      .on(Events.BLOCKING, function () {
        blocking = true;
        clearUserMediaTimeout();
      })
      .on(Events.HIDE, function () {
        self.hide();
      })
      .on(Events.LOADED_META_DATA, function () {
        correctDimensions();
      })
      .on(Events.DISABLING_AUDIO, function () {
        reInitialiseAudio();
      })
      .on(Events.ENABLING_AUDIO, function () {
        reInitialiseAudio();
      })
      .on(Events.INVISIBLE, function () {
        loopWithTimeouts();
      })
      .on(Events.VISIBLE, function () {
        restoreAnimationFrameObject();
      });
  }

  this.build = function () {
    var err = browser.checkRecordingCapabilities();

    if (!err) {
      err = browser.checkBufferTypes();
    }

    if (err) {
      this.emit(Events.ERROR, err);
    } else {
      recorderElement = visuals.querySelector('video.' + options.selectors.userMediaClass);

      if (!recorderElement) {
        buildElement();
      }

      correctDimensions();

      // prevent audio feedback, see
      // https://github.com/binarykitchen/videomail-client/issues/35
      recorderElement.muted = true;

      if (!userMedia) {
        userMedia = new UserMedia(this, options);
      }

      show();

      if (!built) {
        initEvents();

        if (!connected) {
          initSocket();
        } else {
          loadUserMedia();
        }
      } else {
        loadUserMedia();
      }

      built = true;
    }
  };

  this.isPaused = function () {
    return userMedia && userMedia.isPaused() && !loop.isRunning()
  };

  this.isRecording = function () {
    // checking for stream.destroyed needed since
    // https://github.com/binarykitchen/videomail.io/issues/296
    return loop && loop.isRunning() && !this.isPaused() && !isNotifying() && stream$$1 && !stream$$1.destroyed
  };

  this.hide = function () {
    if (!isHidden()) {
      recorderElement && index$10(recorderElement, true);

      clearUserMediaTimeout();
      clearRetryTimeout();
    }
  };

  this.isUnloaded = function () {
    return unloaded
  };

  // these two return the true dimensions of the webcam area.
  // needed because on mobiles they might be different.

  this.getRecorderWidth = function (responsive) {
    if (userMedia) {
      return userMedia.getRawWidth(responsive)
    } else if (responsive && options.hasDefinedWidth()) {
      return this.limitWidth(options.video.width)
    }
  };

  this.getRecorderHeight = function (responsive) {
    if (userMedia) {
      return userMedia.getRawHeight(responsive)
    } else if (responsive && options.hasDefinedHeight()) {
      return this.calculateHeight(responsive)
    }
  };

  function getRatio () {
    var ratio;

    if (userMedia) {
      var userMediaVideoWidth = userMedia.getVideoWidth();

      // avoid division by zero
      if (userMediaVideoWidth < 1) {
        ratio = 0;
      } else {
        ratio = userMedia.getVideoHeight() / userMediaVideoWidth;
      }
    } else {
      ratio = options.getRatio();
    }

    return ratio
  }

  this.calculateWidth = function (responsive) {
    var videoHeight;

    if (userMedia) {
      videoHeight = userMedia.getVideoHeight();
    } else if (recorderElement) {
      videoHeight = recorderElement.videoHeight;
    }

    return visuals.calculateWidth({
      responsive: responsive,
      ratio: getRatio(),
      videoHeight: videoHeight
    })
  };

  this.calculateHeight = function (responsive) {
    var videoWidth;

    if (userMedia) {
      videoWidth = userMedia.getVideoWidth();
    } else if (recorderElement) {
      videoWidth = recorderElement.videoWidth;
    }

    return visuals.calculateHeight({
      responsive: responsive,
      ratio: getRatio(),
      videoWidth: videoWidth
    })
  };

  this.getRawVisualUserMedia = function () {
    return recorderElement
  };

  this.isConnected = function () {
    return connected
  };

  this.isConnecting = function () {
    return connecting
  };

  this.limitWidth = function (width) {
    return visuals.limitWidth(width)
  };

  this.limitHeight = function (height) {
    return visuals.limitHeight(height)
  };

  this.isUserMediaLoaded = function () {
    return userMediaLoaded
  };
};

util.inherits(Recorder, EventEmitter);

var Notifier = function (visuals, options) {
  EventEmitter.call(this, options, 'Notifier');

  var self = this;
  var debug = options && options.debug;

  var notifyElement;
  var messageElement;
  var explanationElement;
  var entertainTimeoutId;
  var entertaining;
  var built;

  function onStopping (limitReached) {
    var lead = '';

    visuals.beginWaiting();

    if (limitReached) {
      debug('Limit reached');
      lead += options.text.limitReached + '.<br/>';
    }

    lead += options.text.sending + ' …';

    self.notify(lead, null, {
      stillWait: true,
      entertain: options.notifier.entertain
    });
  }

  function onConnecting () {
    self.notify('Connecting …');
  }

  function onLoadingUserMedia () {
    self.notify('Loading webcam …');
  }

  function onProgress (frameProgress, sampleProgress) {
    var overallProgress;

    if (options.isAudioEnabled()) {
      overallProgress = 'Video: ' + frameProgress;

      if (sampleProgress) {
        overallProgress += ', Audio: ' + sampleProgress;
      }
    } else {
      overallProgress = frameProgress;
    }

    self.setExplanation(overallProgress);
  }

  function onBeginVideoEncoding () {
    visuals.beginWaiting();

    var lead = options.text.encoding + ' …';

    self.notify(lead, null, {
      stillWait: true,
      entertain: options.notifier.entertain
    });

    hideExplanation();
  }

  function initEvents () {
    debug('Notifier: initEvents()');

    self
      .on(Events.CONNECTING, function () {
        onConnecting();
      })
      .on(Events.LOADING_USER_MEDIA, function () {
        onLoadingUserMedia();
      })
      .on(Events.USER_MEDIA_READY, function () {
        self.hide();
      })
      .on(Events.LOADED_META_DATA, function () {
        correctDimensions();
      })
      .on(Events.PREVIEW, function () {
        self.hide();
      })
      .on(Events.STOPPING, function (limitReached) {
        onStopping(limitReached);
      })
      .on(Events.PROGRESS, function (frameProgress, sampleProgress) {
        onProgress(frameProgress, sampleProgress);
      })
      .on(Events.BEGIN_VIDEO_ENCODING, function () {
        onBeginVideoEncoding();
      });
  }

  function correctDimensions () {
    notifyElement.style.width = visuals.getRecorderWidth(true) + 'px';
    notifyElement.style.height = visuals.getRecorderHeight(true) + 'px';
  }

  function show () {
    notifyElement && index$10(notifyElement, false);
  }

  function runEntertainment () {
    if (options.notifier.entertain) {
      if (!entertaining) {
        var randomBackgroundClass = Math.floor((Math.random() * options.notifier.entertainLimit) + 1);

        notifyElement.className = 'notifier entertain ' +
                options.notifier.entertainClass +
                randomBackgroundClass;

        entertainTimeoutId = setTimeout(runEntertainment, options.notifier.entertainInterval);
        entertaining = true;
      }
    } else {
      cancelEntertainment();
    }
  }

  function cancelEntertainment () {
    if (notifyElement) {
      notifyElement.classList.remove('entertain');
    }

    clearTimeout(entertainTimeoutId);
    entertainTimeoutId = null;
    entertaining = false;
  }

  function setMessage (message, messageOptions) {
    var problem = messageOptions.problem ? messageOptions.problem : false;

    if (messageElement) {
      messageElement.innerHTML = (problem ? '&#x2639; ' : '') + message;
    } else {
      options.logger.warn(
        'Unable to show following because messageElement is empty:',
        message
      );
    }
  }

  this.error = function (err) {
    var message = err.message ? err.message.toString() : err.toString();
    var explanation = err.explanation ? err.explanation.toString() : null;

    if (!message) {
      options.debug('Weird empty message generated for error', err);
    }

    self.notify(message, explanation, {
      blocking: true,
      problem: true,
      hideForm: err.hideForm && err.hideForm(),
      classList: err.getClassList && err.getClassList(),
      removeDimensions: err.removeDimensions && err.removeDimensions()
    });
  };

  this.setExplanation = function (explanation) {
    if (!explanationElement) {
      explanationElement = index$17('p');

      if (notifyElement) {
        notifyElement.appendChild(explanationElement);
      } else {
        options.logger.warn(
          'Unable to show explanation because notifyElement is empty:',
          explanation
        );
      }
    }

    explanationElement.innerHTML = explanation;

    index$10(explanationElement, false);
  };

  this.build = function () {
    options.debug('Notifier: build()');

    notifyElement = visuals.querySelector('.notifier');

    if (!notifyElement) {
      notifyElement = index$17('.notifier'); // defaults to div

      this.hide();

      visuals.appendChild(notifyElement);
    } else {
      this.hide();
    }

    !built && initEvents();

    built = true;
  };

  function hideExplanation () {
    if (explanationElement) {
      explanationElement.innerHTML = null;
      index$10(explanationElement, true);
    }
  }

  this.hide = function () {
    cancelEntertainment();

    if (notifyElement) {
      index$10(notifyElement, true);
      notifyElement.classList.remove('blocking');
    }

    if (messageElement) {
      messageElement.innerHTML = null;
    }

    hideExplanation();
  };

  this.isVisible = function () {
    if (!built) {
      return false
    } else {
      return notifyElement && !index$10(notifyElement)
    }
  };

  this.isBuilt = function () {
    return built
  };

  this.notify = function (message, explanation, notifyOptions) {
    options.debug('Notifier: notify()');

    if (!notifyOptions) {
      notifyOptions = {};
    }

    var stillWait = notifyOptions.stillWait ? notifyOptions.stillWait : false;
    var entertain = notifyOptions.entertain ? notifyOptions.entertain : false;
    var blocking = notifyOptions.blocking ? notifyOptions.blocking : false;
    var hideForm = notifyOptions.hideForm ? notifyOptions.hideForm : false;
    var classList = notifyOptions.classList ? notifyOptions.classList : false;
    var removeDimensions = notifyOptions.removeDimensions ? notifyOptions.removeDimensions : false;

    if (!messageElement && notifyElement) {
      messageElement = index$17('h2');

      if (explanationElement) {
        notifyElement.insertBefore(messageElement, explanationElement);
      } else {
        notifyElement.appendChild(messageElement);
      }
    }

    if (notifyElement) {
      // reset
      if (!entertain) {
        notifyElement.className = 'notifier';
      }

      if (classList) {
        classList.forEach(function (className) {
          notifyElement.classList.add(className);
        });
      }

      if (removeDimensions) {
        notifyElement.style.width = 'auto';
        notifyElement.style.height = 'auto';
      }
    }

    if (blocking) {
      notifyElement && notifyElement.classList.add('blocking');
      this.emit(Events.BLOCKING, {hideForm: hideForm});
    } else {
      this.emit(Events.NOTIFYING);
    }

    visuals.hideReplay();
    visuals.hideRecorder();

    setMessage(message, notifyOptions);

    explanation && this.setExplanation(explanation);

    if (entertain) {
      runEntertainment();
    } else {
      cancelEntertainment();
    }

    // just as a safety in case if an error is thrown in the middle of the build process
    // and visuals aren't built/shown yet.
    visuals.showVisuals();

    show();

    !stillWait && visuals.endWaiting();
  };
};

util.inherits(Notifier, EventEmitter);

var Countdown = function (visuals, options) {
  var self = this;

  var countdownElement;
  var intervalId;
  var countdown;
  var paused;

  function fire (cb) {
    self.unload();
    self.hide();

    // keep all callbacks async
    setTimeout(function () {
      cb();
    }, 0);
  }

  function countBackward (cb) {
    if (!paused) {
      options.debug('Countdown', countdown);
      countdown--;

      if (countdown < 1) {
        fire(cb);
      } else {
        countdownElement.innerHTML = countdown;
      }
    }
  }

  this.start = function (cb) {
    countdownElement.innerHTML = countdown = options.video.countdown;

    this.show();

    intervalId = setInterval(countBackward.bind(this, cb), 950);
  };

  this.pause = function () {
    paused = true;
  };

  this.resume = function () {
    paused = false;
  };

  this.build = function () {
    countdownElement = visuals.querySelector('.countdown');

    if (!countdownElement) {
      countdownElement = index$17('p.countdown');

      this.hide();

      visuals.appendChild(countdownElement);
    } else {
      this.hide();
    }
  };

  this.show = function () {
    index$10(countdownElement, false);
  };

  this.isCountingDown = function () {
    return !!intervalId
  };

  this.unload = function () {
    clearInterval(intervalId);
    paused = false;
    intervalId = null;
  };

  this.hide = function () {
    index$10(countdownElement, true);
    this.unload();
  };
};

var PausedNote = function (visuals, options) {
  if (!options.text.pausedHeader) {
    throw VideomailError.create('Paused header cannot be empty', options)
  }

  var pausedBlockElement;
  var pausedHeaderElement;
  var pausedHintElement;

  this.build = function () {
    pausedBlockElement = visuals.querySelector('.paused');
    pausedHeaderElement = visuals.querySelector('.pausedHeader');
    pausedHintElement = visuals.querySelector('.pausedHint');

    if (!pausedHeaderElement) {
      pausedBlockElement = index$17('div.paused');
      pausedHeaderElement = index$17('p.pausedHeader');
      pausedHintElement = index$17('p.pausedHint');

      this.hide();

      pausedHeaderElement.innerHTML = options.text.pausedHeader;
      pausedHintElement.innerHTML = options.text.pausedHint;

      pausedBlockElement.appendChild(pausedHeaderElement);
      pausedBlockElement.appendChild(pausedHintElement);

      visuals.appendChild(pausedBlockElement);
    } else {
      this.hide();

      pausedHeaderElement.innerHTML = options.text.pausedHeader;
      pausedHintElement.innerHTML = options.text.pausedHint;
    }
  };

  this.hide = function () {
    index$10(pausedBlockElement, true);
  };

  this.show = function () {
    index$10(pausedBlockElement, false);
  };
};

var RecordNote = function (visuals) {
  var recordNoteElement;

  this.build = function () {
    recordNoteElement = visuals.querySelector('.recordNote');

    if (!recordNoteElement) {
      recordNoteElement = index$17('p.recordNote');

      this.hide();

      visuals.appendChild(recordNoteElement);
    } else {
      this.hide();
    }
  };

  this.stop = function () {
    this.hide();
    recordNoteElement.classList.remove('near');
    recordNoteElement.classList.remove('nigh');
  };

  this.setNear = function () {
    recordNoteElement.classList.add('near');
  };

  this.setNigh = function () {
    recordNoteElement.classList.add('nigh');
  };

  this.hide = function () {
    index$10(recordNoteElement, true);
  };

  this.show = function () {
    index$10(recordNoteElement, false);
  };
};

var RecordTimer = function (visuals, recordNote, options) {
  var recordTimerElement;

  var nearComputed = false;
  var endNighComputed = false;

  var started;
  var countdown;

  function pad (n) {
    return n < 10 ? '0' + n : n
  }

  function thresholdReached (secs, threshold) {
    return secs >= options.video.limitSeconds * threshold
  }

  function isNear (secs) {
    if (!nearComputed && thresholdReached(secs, 0.6)) {
      nearComputed = true;
      return true
    } else {
      return false
    }
  }

  function endIsNigh (secs) {
    if (!endNighComputed && thresholdReached(secs, 0.8)) {
      endNighComputed = true;
      return true
    } else {
      return false
    }
  }

  function setNear () {
    recordTimerElement.classList.add('near');
  }

  function setNigh () {
    recordTimerElement.classList.add('nigh');
  }

  this.check = function (opts) {
    var newCountdown = getStartSeconds() - Math.floor(opts.intervalSum / 1e3);

        // performance optimisation (another reason we need react here!)
    if (newCountdown !== countdown) {
      countdown = newCountdown;
      update();
      countdown < 1 && visuals.stop(true);
    }
  };

  function update () {
    var mins = parseInt(countdown / 60, 10);
    var secs = countdown - mins * 60;

    if (!nearComputed || !endNighComputed) {
      var remainingSeconds = options.video.limitSeconds - countdown;

      if (isNear(remainingSeconds)) {
        recordNote.setNear();
        setNear();

        options.debug('End is near, ' + countdown + ' seconds to go');
      } else if (endIsNigh(remainingSeconds)) {
        recordNote.setNigh();
        setNigh();

        options.debug('End is nigh, ' + countdown + ' seconds to go');
      }
    }

    recordTimerElement.innerHTML = mins + ':' + pad(secs);
  }

  function hide () {
    index$10(recordTimerElement, true);
  }

  function show () {
    recordTimerElement.classList.remove('near');
    recordTimerElement.classList.remove('nigh');

    index$10(recordTimerElement, false);
  }

  function getSecondsRecorded () {
    return getStartSeconds() - countdown
  }

  function getStartSeconds () {
    return options.video.limitSeconds
  }

  this.start = function () {
    countdown = getStartSeconds();
    nearComputed = endNighComputed = false;
    started = true;

    update();

    show();
  };

  this.pause = function () {
    recordNote.hide();
  };

  this.resume = function () {
    recordNote.show();
  };

  function isStopped () {
    return countdown === null
  }

  this.stop = function () {
    if (!isStopped() && started) {
      options.debug('Stopping record timer. Was recording for about ~' + getSecondsRecorded() + ' seconds.');

      hide();
      recordNote.stop();

      countdown = null;
      started = false;
    }
  };

  this.build = function () {
    recordTimerElement = visuals.querySelector('.recordTimer');

    if (!recordTimerElement) {
      recordTimerElement = index$17('p.recordTimer');

      hide();

      visuals.appendChild(recordTimerElement);
    } else {
      hide();
    }
  };
};

var RecorderInsides = function (visuals, options) {
  EventEmitter.call(this, options, 'RecorderInsides');

  var self = this;
  var debug = options.debug;

  var recordNote = new RecordNote(visuals);
  var recordTimer = new RecordTimer(visuals, recordNote, options);

  var countdown;
  var pausedNote;
  var built;

  if (options.video.countdown) {
    countdown = new Countdown(visuals, options);
  }

  if (options.enablePause) {
    pausedNote = new PausedNote(visuals, options);
  }

  function startRecording () {
    recordTimer.start();
  }

  function resumeRecording () {
    recordTimer.resume();
  }

  function stopRecording () {
    recordTimer.stop();
  }

  function pauseRecording () {
    if (self.isCountingDown()) {
      countdown.pause();
    } else {
      recordTimer.pause();
    }
  }

  function onResetting () {
    self.hidePause();
    self.hideCountdown();
    recordTimer.stop();
  }

  function initEvents () {
    self
      .on(Events.RECORDING, function () {
        startRecording();
      })
      .on(Events.RESUMING, function () {
        resumeRecording();
      })
      .on(Events.STOPPING, function () {
        stopRecording();
      })
      .on(Events.PAUSED, function () {
        pauseRecording();
      })
      .on(Events.RESETTING, onResetting)
      .on(Events.HIDE, function () {
        self.hideCountdown();
      });
  }

  this.build = function () {
    debug('RecorderInsides: build()');

    countdown && countdown.build();
    pausedNote && pausedNote.build();

    recordNote.build();
    recordTimer.build();

    !built && initEvents();

    built = true;
  };

  this.unload = function () {
    countdown && countdown.unload();

    built = false;
  };

  this.showPause = function () {
    pausedNote && pausedNote.show();
  };

  this.hidePause = function () {
    pausedNote && pausedNote.hide();
  };

  this.hideCountdown = function () {
    countdown && countdown.hide();
  };

  this.startCountdown = function (cb) {
    countdown && countdown.start(cb);
  };

  this.resumeCountdown = function () {
    countdown && countdown.resume();
  };

  this.isCountingDown = function () {
    return countdown && countdown.isCountingDown()
  };

  this.checkTimer = function (intervalSum) {
    recordTimer.check(intervalSum);
  };
};

util.inherits(RecorderInsides, EventEmitter);

var Visuals = function (container, options) {
  EventEmitter.call(this, options, 'Visuals');

  var self = this;

  var replay = new Replay(this, options);
  var recorder = new Recorder(this, replay, options);
  var recorderInsides = new RecorderInsides(this, options);

  var notifier = new Notifier(this, options);

  var debug = options.debug;

  var visualsElement;
  var built;

  function buildNoScriptTag () {
    var noScriptElement = container.querySelector('noscript');

    if (!noScriptElement) {
      noScriptElement = index$17('noscript');
      noScriptElement.innerHTML = 'Please enable Javascript';

      visualsElement.appendChild(noScriptElement);
    }
  }

  function buildChildren () {
    debug('Visuals: buildChildren()');

    buildNoScriptTag();

    notifier.build();
    recorderInsides.build();
    replay.build();

    debug('Visuals: built.');
  }

  function initEvents () {
    self
      .on(Events.USER_MEDIA_READY, function () {
        built = true;
        self.endWaiting();
        container.enableForm(false);
      })
      .on(Events.PREVIEW, function () {
        self.endWaiting();
      })
      .on(Events.BLOCKING, function (blockingOptions) {
        if (!blockingOptions.hideForm && !options.adjustFormOnBrowserError) {
          // do nothing, user still can enter form inputs
          // can be useful when you are on i.E. seeflow's contact page and
          // still want to tick off the webcam option
        } else {
          container.disableForm(true);
        }
      })
      .on(Events.PREVIEW_SHOWN, function () {
        container.validate(true);
      })
      .on(Events.LOADED_META_DATA, function () {
        correctDimensions();
      })
      .on(Events.ERROR, function (err) {
        if (err.removeDimensions && err.removeDimensions()) {
          removeDimensions();
        }
      });
  }

  function correctDimensions () {
    visualsElement.style.width = self.getRecorderWidth(true) + 'px';
    visualsElement.style.height = self.getRecorderHeight(true) + 'px';
  }

  function removeDimensions () {
    visualsElement.style.width = 'auto';
    visualsElement.style.height = 'auto';
  }

  function isRecordable () {
    return !self.isNotifying() && !replay.isShown() && !self.isCountingDown()
  }

  this.isCountingDown = function () {
    return recorderInsides.isCountingDown()
  };

  this.build = function () {
    visualsElement = container.querySelector('.' + options.selectors.visualsClass);

    if (!visualsElement) {
      visualsElement = index$17('div.' + options.selectors.visualsClass);

      var buttonsElement = container.querySelector('.' + options.selectors.buttonsClass);

      // make sure it's placed before the buttons
      if (buttonsElement) {
        container.insertBefore(visualsElement, buttonsElement);
      } else {
        container.appendChild(visualsElement);
      }
    }

    visualsElement.classList.add('visuals');
    index$10(visualsElement, true);

    correctDimensions();

    !built && initEvents();
    buildChildren();

        // needed for replay handling and container.isParentElementOf()
    self.parentNode = visualsElement.parentNode;

    built = true;
  };

  this.querySelector = function (selector) {
    return visualsElement && visualsElement.querySelector(selector)
  };

  this.appendChild = function (child) {
    visualsElement && visualsElement.appendChild(child);
  };

  this.removeChild = function (child) {
    visualsElement.removeChild(child);
  };

  this.reset = function () {
    this.endWaiting();
    recorder.reset();
  };

  this.beginWaiting = function () {
    container.beginWaiting();
  };

  this.endWaiting = function () {
    container.endWaiting();
  };

  this.stop = function (params) {
    recorder.stop(params);
    recorderInsides.hidePause();
  };

  this.back = function (cb) {
    replay.hide();
    notifier.hide();
    recorder.back(cb);
  };

  this.recordAgain = function () {
    this.back(function () {
      self.once(Events.USER_MEDIA_READY, function () {
        self.record();
      });
    });
  };

  this.unload = function (e) {
    try {
      recorder.unload(e);
      recorderInsides.unload(e);
      replay.unload(e);

      built = false;
    } catch (exc) {
      this.emit(Events.ERROR, exc);
    }
  };

  this.isNotifying = function () {
    return notifier.isVisible()
  };

  this.isReplayShown = function () {
    return replay.isShown()
  };

  this.pause = function (params) {
    recorder.pause(params);
    recorderInsides.showPause();
  };

  this.resume = function () {
    if (recorderInsides.isCountingDown()) {
      recorderInsides.resumeCountdown();
    } else {
      recorder.resume();
    }

    recorderInsides.hidePause();
  };

  this.pauseOrResume = function () {
    if (isRecordable.call(this)) {
      if (this.isRecording()) {
        this.pause();
      } else if (recorder.isPaused()) {
        this.resume();
      } else if (recorder.isReady()) {
        this.record();
      }
    }
  };

  this.recordOrStop = function () {
    if (isRecordable()) {
      if (this.isRecording()) {
        this.stop();
      } else if (recorder.isReady()) {
        this.record();
      }
    }
  };

  this.record = function () {
    if (options.video.countdown) {
      this.emit(Events.COUNTDOWN);
      recorderInsides.startCountdown(recorder.record.bind(recorder));
    } else { recorder.record(); }
  };

  this.getRecorder = function () {
    return recorder
  };

  this.getReplay = function () {
    return replay
  };

  this.validate = function () {
    return recorder.validate() && this.isReplayShown()
  };

  this.getRecordingStats = function () {
    return recorder.getRecordingStats()
  };

  this.getAudioSampleRate = function () {
    return recorder.getAudioSampleRate()
  };

  this.isPaused = function () {
    return recorder.isPaused()
  };

  this.error = function (err) {
    notifier.error(err);
  };

  this.hide = function () {
    if (visualsElement) {
      index$10(visualsElement, true);
      this.emit(Events.HIDE);
    }
  };

  this.isHidden = function () {
    if (!built) {
      return true
    } else if (visualsElement) {
      return index$10(visualsElement)
    }
  };

  this.showVisuals = function () {
    visualsElement && index$10(visualsElement, false);
  };

  this.show = function () {
    !this.isReplayShown() && recorder.build();
    this.showVisuals();
  };

  this.showReplayOnly = function () {
    !this.isReplayShown() && replay.show();

    this.show();
    recorder.hide();
    notifier.hide();
  };

  this.isRecorderUnloaded = function () {
    return recorder.isUnloaded()
  };

  this.isConnecting = function () {
    return recorder.isConnecting()
  };

  this.getRecorderWidth = function (responsive) {
    return recorder.getRecorderWidth(responsive)
  };

  this.getRecorderHeight = function (responsive) {
    return recorder.getRecorderHeight(responsive)
  };

  this.limitWidth = function (width) {
    return container.limitWidth(width, options)
  };

  this.limitHeight = function (height) {
    return container.limitHeight(height)
  };

  this.calculateWidth = function (options) {
    return container.calculateWidth(options)
  };

  this.calculateHeight = function (options) {
    return container.calculateHeight(options)
  };

  this.getReplay = function () {
    return replay
  };

  this.getBoundingClientRect = function () {
    return visualsElement.getBoundingClientRect()
  };

  this.checkTimer = function (intervalSum) {
    recorderInsides.checkTimer(intervalSum);
  };

  this.isNotifierBuilt = function () {
    return notifier && notifier.isBuilt()
  };

  this.isReplayShown = replay.isShown.bind(replay);
  this.hideReplay = replay.hide.bind(replay);
  this.hideRecorder = recorder.hide.bind(recorder);
  this.isRecording = recorder.isRecording.bind(recorder);
  this.isUserMediaLoaded = recorder.isUserMediaLoaded.bind(recorder);
  this.isConnected = recorder.isConnected.bind(recorder);
};

util.inherits(Visuals, EventEmitter);

var DOCUMENT_POSITION_CONTAINED_BY = 16;

var index$48 = contains;

function contains(container, elem) {
    if (container.contains) {
        return container.contains(elem)
    }

    var comparison = container.compareDocumentPosition(elem);

    return comparison === 0 || comparison & DOCUMENT_POSITION_CONTAINED_BY
}

var Buttons = function (container, options) {
  EventEmitter.call(this, options, 'Buttons');

  var self = this;

  var buttonsElement,

    recordButton,
    pauseButton,
    resumeButton,
    previewButton,
    recordAgainButton,
    submitButton,

    audioOnRadioPair,
    audioOffRadioPair,

    built;

  function hide (elements) {
    if (elements && !Array.isArray(elements)) {
      elements = [elements];
    }

    elements && elements.forEach(function (element) {
      index$10(element, true);
    });
  }

  function show (elements) {
    if (elements && !Array.isArray(elements)) {
      elements = [elements];
    }

    elements && elements.forEach(function (element) {
      index$10(element, false);
    });
  }

  function isShown (elements) {
    var isShown = elements && true;

    if (elements && !Array.isArray(elements)) {
      elements = [elements];
    }

    elements && elements.forEach(function (element) {
      isShown = isShown && element && !index$10(element);
    });

    return isShown
  }

  function disable (elements) {
    if (elements && !Array.isArray(elements)) {
      elements = [elements];
    }

    elements && elements.forEach(function (element) {
      if (element.tagName === 'INPUT' || element.tagName === 'BUTTON') {
        element.disabled = true;
      } else {
        element.classList.add('disabled');
      }
    });
  }

  function enable (elements) {
    if (elements && !Array.isArray(elements)) {
      elements = [elements];
    }

    elements && elements.forEach(function (element) {
      if (element.tagName === 'INPUT' || element.tagName === 'BUTTON') {
        element.disabled = false;
      } else {
        element.classList.remove('disabled');
      }
    });
  }

  function adjustButton (buttonElement, show, type) {
    disable(buttonElement);

    if (type) {
      buttonElement.type = type;
    } else if (!buttonElement.type) {
      buttonElement.type = 'button';
    }

    !show && hide(buttonElement);

    return buttonElement
  }

  function replaceClickHandler (element, clickHandler) {
    var wrappedClickHandler = function (e) {
      e && e.preventDefault();

      try {
        clickHandler({event: e});
      } catch (exc) {
        self.emit(Events.ERROR, exc);
      }
    };

    element.onclick = wrappedClickHandler;
  }

  function makeRadioButtonPair (options) {
    var radioButtonElement, radioButtonGroup;

    if (options.id) {
      radioButtonElement = document.getElementById(options.id);
    }

    if (!radioButtonElement) {
      radioButtonElement = index$17('input#' + options.id, {
        type: 'radio',
        name: options.name,
        value: options.value,
        checked: options.checked
      });

      radioButtonGroup = index$17('span.radioGroup', radioButtonElement, index$17('label', {
        'htmlFor': options.id
      }, options.label));

            // double check that submit button is already in the buttonsElement container as a child?
      if (submitButton && index$48(buttonsElement, submitButton)) {
        buttonsElement.insertBefore(radioButtonGroup, submitButton);
      } else {
        buttonsElement.appendChild(radioButtonGroup);
      }
    }

    if (options.changeHandler) {
      radioButtonElement.onchange = options.changeHandler;
    }

    disable(radioButtonElement);

    return [radioButtonElement, radioButtonGroup]
  }

  function makeButton (buttonClass, text, clickHandler, show, id, type, selector) {
    var buttonElement;

    if (id) {
      buttonElement = document.getElementById(id);
    } else if (selector) {
      buttonElement = document.querySelector(selector);
    } else {
      buttonElement = buttonsElement.querySelector('.' + buttonClass);
    }

    if (!buttonElement) {
      if (options.selectors.buttonClass) {
        buttonClass += '.' + options.selectors.buttonClass;
      }

      buttonElement = index$17('button.' + buttonClass);
      buttonElement = adjustButton(buttonElement, show, type);

      buttonElement.innerHTML = text;

      // double check that submit button is already in the buttonsElement container
      if (submitButton && index$48(buttonsElement, submitButton)) {
        buttonsElement.insertBefore(buttonElement, submitButton);
      } else {
        buttonsElement.appendChild(buttonElement);
      }
    } else {
      buttonElement = adjustButton(buttonElement, show);
    }

    if (clickHandler) {
      replaceClickHandler(buttonElement, clickHandler);
    }

    return buttonElement
  }

  function buildButtons () {
    if (!options.disableSubmit) {
      if (!submitButton) {
        submitButton = makeButton(
          options.selectors.submitButtonClass,
          'Submit',
          null,
          true,
          options.selectors.submitButtonId,
          'submit',
          options.selectors.submitButtonSelector
        );
      } else {
        disable(submitButton);
      }

      // no need to listen to the submit event when it's already listened
      // within the form element class
      if (!container.hasForm() && submitButton) {
        replaceClickHandler(submitButton, submit);
      }
    }

    recordButton = makeButton(
      options.selectors.recordButtonClass,
      options.text.buttons.record,
      record,
      false
    );

    if (options.enablePause) {
      pauseButton = makeButton(
        options.selectors.pauseButtonClass,
        options.text.buttons.pause,
        container.pause,
        false
      );
    }

    if (options.enablePause) {
      resumeButton = makeButton(
        options.selectors.resumeButtonClass,
        options.text.buttons.resume,
        container.resume,
        false
      );
    }

    // show stop only when pause is enabled - looks better that way otherwise button
    // move left and right between record and stop (preview)
    previewButton = makeButton(
      options.selectors.previewButtonClass,
      options.text.buttons.preview,
      container.stop,
      false
    );

    recordAgainButton = makeButton(
      options.selectors.recordAgainButtonClass,
      options.text.buttons.recordAgain,
      recordAgain,
      false
    );

    if (options.audio && options.audio.switch) {
      audioOffRadioPair = makeRadioButtonPair({
        id: 'audioOffOption',
        name: 'audio',
        value: 'off',
        label: 'Audio Off',
        checked: !options.isAudioEnabled(),
        changeHandler: function () {
          container.disableAudio();
        }
      });

      audioOnRadioPair = makeRadioButtonPair({
        id: 'audioOnOption',
        name: 'audio',
        value: 'on',
        label: 'Audio On (Beta)',
        checked: options.isAudioEnabled(),
        changeHandler: function () {
          container.enableAudio();
        }
      });
    }
  }

  function onFormReady (options) {
    // no need to show record button when doing a record again
    if (!isShown(recordAgainButton)) {
      if (!options.paused) {
        show(recordButton);
      }
    }

    if (!options.paused) {
      disable(previewButton);
      hide(previewButton);
    }
  }

  function onGoingBack () {
    hide(recordAgainButton);
    show(recordButton);
  }

  function onReplayShown () {
    self.hide();
  }

  function onUserMediaReady (options) {
    onFormReady(options);

    if (isShown(recordButton)) {
      enable(recordButton);
    }

    if (isShown(audioOnRadioPair)) {
      enable(audioOnRadioPair);
    }

    if (isShown(audioOffRadioPair)) {
      enable(audioOffRadioPair);
    }

    disable(submitButton);
  }

  function onResetting () {
    disable(submitButton);

    self.reset();
  }

  function onPreview () {
    hide(recordButton);
    hide(previewButton);
    disable(audioOnRadioPair);
    disable(audioOffRadioPair);

    show(recordAgainButton);
    enable(recordAgainButton);

    if (!options.enableAutoValidation) {
      enable(submitButton);
    }
  }

  this.enableSubmit = function () {
    enable(submitButton);
  };

  this.adjustButtonsForPause = function () {
    if (!self.isCountingDown()) {
      pauseButton && hide(pauseButton);
      show(resumeButton);
      enable(resumeButton);
      hide(recordButton);
      show(previewButton);
      enable(previewButton);
    }
  };

  function onFirstFrameSent () {
    hide(recordButton);
    hide(recordAgainButton);

    if (pauseButton) {
      show(pauseButton);
      enable(pauseButton);
    }

    enable(previewButton);
    show(previewButton);
  }

  function onRecording (framesCount) {
    // it is possible to hide while recording, hence
    // check framesCount first (coming from recorder)
    if (framesCount > 1) {
      onFirstFrameSent();
    } else {
      disable(audioOffRadioPair);
      disable(audioOnRadioPair);
      disable(recordAgainButton);
      disable(recordButton);
    }
  }

  function onResuming () {
    hide(resumeButton);
    hide(recordButton);

    if (pauseButton) {
      enable(pauseButton);
      show(pauseButton);
    }
  }

  function onStopping () {
    disable(previewButton);
    hide(pauseButton);
    hide(resumeButton);
  }

  function onCountdown () {
    disable(recordButton);
    disable(audioOffRadioPair);
    disable(audioOnRadioPair);
  }

  function onSubmitting () {
    disable(submitButton);
    disable(recordAgainButton);
  }

  function onSubmitted () {
    disable(previewButton);
    disable(recordAgainButton);
    disable(recordButton);
    disable(submitButton);
  }

  function onInvalid () {
    if (options.enableAutoValidation) {
      disable(submitButton);
    }
  }

  function onValid () {
    if (options.enableAutoValidation) {
      enable(submitButton);
    }
  }

  function onHidden () {
    hide(recordButton);
    hide(previewButton);
    hide(recordAgainButton);
    hide(resumeButton);
  }

  function onEnablingAudio () {
    disable(recordButton);
    disable(audioOnRadioPair);
    disable(audioOffRadioPair);
  }

  function onDisablingAudio () {
    disable(recordButton);
    disable(audioOnRadioPair);
    disable(audioOffRadioPair);
  }

  function recordAgain () {
    disable(recordAgainButton);
    container.beginWaiting();
    container.recordAgain();
  }

  function submit () {
    container.submit();
  }

  function record (params) {
    disable(recordButton);
    container.record(params);
  }

  function initEvents () {
    self.on(Events.USER_MEDIA_READY, function (options) {
      onUserMediaReady(options);
    }).on(Events.PREVIEW, function () {
      onPreview();
    }).on(Events.PAUSED, function () {
      self.adjustButtonsForPause();
    }).on(Events.RECORDING, function (framesCount) {
      onRecording(framesCount);
    }).on(Events.FIRST_FRAME_SENT, function () {
      onFirstFrameSent();
    }).on(Events.RESUMING, function () {
      onResuming();
    }).on(Events.STOPPING, function () {
      onStopping();
    }).on(Events.COUNTDOWN, function () {
      onCountdown();
    }).on(Events.SUBMITTING, function () {
      onSubmitting();
    }).on(Events.RESETTING, function () {
      onResetting();
    }).on(Events.INVALID, function () {
      onInvalid();
    }).on(Events.VALID, function () {
      onValid();
    }).on(Events.SUBMITTED, function () {
      onSubmitted();
    }).on(Events.HIDE, function () {
      onHidden();
    }).on(Events.FORM_READY, function (options) {
      onFormReady(options);
    }).on(Events.REPLAY_SHOWN, function () {
      onReplayShown();
    }).on(Events.GOING_BACK, function () {
      onGoingBack();
    }).on(Events.ENABLING_AUDIO, function () {
      onEnablingAudio();
    }).on(Events.DISABLING_AUDIO, function () {
      onDisablingAudio();
    }).on(Events.ERROR, function (err) {
      // since https://github.com/binarykitchen/videomail-client/issues/60
      // we hide areas to make it easier for the user
      if (err.hideButtons && err.hideButtons() && options.adjustFormOnBrowserError) {
        self.hide();
      }
    });
  }

  this.reset = function () {
    options.debug('Buttons: reset()');

    disable(pauseButton);
    disable(resumeButton);
    disable(recordButton);
    disable(previewButton);
    disable(recordAgainButton);
  };

  this.isRecordAgainButtonEnabled = function () {
    return !recordAgainButton.disabled
  };

  this.isRecordButtonEnabled = function () {
    return !recordButton.disabled
  };

  this.setSubmitButton = function (newSubmitButton) {
    submitButton = newSubmitButton;
  };

  this.getSubmitButton = function () {
    return submitButton
  };

  this.build = function () {
    buttonsElement = container.querySelector('.' + options.selectors.buttonsClass);

    if (!buttonsElement) {
      buttonsElement = index$17('div.' + options.selectors.buttonsClass);

      container.appendChild(buttonsElement);
    }

    buildButtons();

    !built && initEvents();

    built = true;
  };

  this.unload = function () {
    built = false;
  };

  this.hide = function () {
    hide(buttonsElement);
  };

  this.show = function () {
    show(buttonsElement);
  };

  this.isCountingDown = function () {
    return container.isCountingDown()
  };
};

util.inherits(Buttons, EventEmitter);

var NODE_LIST_CLASSES = {
  '[object HTMLCollection]': true,
  '[object NodeList]': true,
  '[object RadioNodeList]': true
};

// .type values for elements which can appear in .elements and should be ignored
var IGNORED_ELEMENT_TYPES = {
  'button': true,
  'fieldset': true,
  // 'keygen': true,
  // 'output': true,
  'reset': true,
  'submit': true
};

var CHECKED_INPUT_TYPES = {
  'checkbox': true,
  'radio': true
};

var TRIM_RE = /^\s+|\s+$/g;

var slice = Array.prototype.slice;
var toString$5 = Object.prototype.toString;

/**
 * @param {HTMLFormElement} form
 * @param {Object} options
 * @return {Object.<string,(string|Array.<string>)>} an object containing
 *   submittable value(s) held in the form's .elements collection, with
 *   properties named as per element names or ids.
 */
function getFormData(form) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? { trim: false } : arguments[1];

  if (!form) {
    throw new Error('A form is required by getFormData, was given form=' + form);
  }

  var data = {};
  var elementName = undefined;
  var elementNames = [];
  var elementNameLookup = {};

  // Get unique submittable element names for the form
  for (var i = 0, l = form.elements.length; i < l; i++) {
    var element = form.elements[i];
    if (IGNORED_ELEMENT_TYPES[element.type] || element.disabled) {
      continue;
    }
    elementName = element.name || element.id;
    if (elementName && !elementNameLookup[elementName]) {
      elementNames.push(elementName);
      elementNameLookup[elementName] = true;
    }
  }

  // Extract element data name-by-name for consistent handling of special cases
  // around elements which contain multiple inputs.
  for (var i = 0, l = elementNames.length; i < l; i++) {
    elementName = elementNames[i];
    var value = getNamedFormElementData(form, elementName, options);
    if (value != null) {
      data[elementName] = value;
    }
  }

  return data;
}

/**
 * @param {HTMLFormElement} form
 * @param {string} elementName
 * @param {Object} options
 * @return {(string|Array.<string>)} submittable value(s) in the form for a
 *   named element from its .elements collection, or null if there was no
 *   element with that name or the element had no submittable value(s).
 */
function getNamedFormElementData(form, elementName) {
  var options = arguments.length <= 2 || arguments[2] === undefined ? { trim: false } : arguments[2];

  if (!form) {
    throw new Error('A form is required by getNamedFormElementData, was given form=' + form);
  }
  if (!elementName && toString$5.call(elementName) !== '[object String]') {
    throw new Error('A form element name is required by getNamedFormElementData, was given elementName=' + elementName);
  }

  var element = form.elements[elementName];
  if (!element || element.disabled) {
    return null;
  }

  if (!NODE_LIST_CLASSES[toString$5.call(element)]) {
    return getFormElementValue(element, options.trim);
  }

  // Deal with multiple form controls which have the same name
  var data = [];
  var allRadios = true;
  for (var i = 0, l = element.length; i < l; i++) {
    if (element[i].disabled) {
      continue;
    }
    if (allRadios && element[i].type !== 'radio') {
      allRadios = false;
    }
    var value = getFormElementValue(element[i], options.trim);
    if (value != null) {
      data = data.concat(value);
    }
  }

  // Special case for an element with multiple same-named inputs which were all
  // radio buttons: if there was a selected value, only return the value.
  if (allRadios && data.length === 1) {
    return data[0];
  }

  return data.length > 0 ? data : null;
}

/**
 * @param {HTMLElement} element a form element.
 * @param {booleam} trim should values for text entry inputs be trimmed?
 * @return {(string|Array.<string>|File|Array.<File>)} the element's submittable
 *   value(s), or null if it had none.
 */
function getFormElementValue(element, trim) {
  var value = null;
  var type = element.type;

  if (type === 'select-one') {
    if (element.options.length) {
      value = element.options[element.selectedIndex].value;
    }
    return value;
  }

  if (type === 'select-multiple') {
    value = [];
    for (var i = 0, l = element.options.length; i < l; i++) {
      if (element.options[i].selected) {
        value.push(element.options[i].value);
      }
    }
    if (value.length === 0) {
      value = null;
    }
    return value;
  }

  // If a file input doesn't have a files attribute, fall through to using its
  // value attribute.
  if (type === 'file' && 'files' in element) {
    if (element.multiple) {
      value = slice.call(element.files);
      if (value.length === 0) {
        value = null;
      }
    } else {
      // Should be null if not present, according to the spec
      value = element.files[0];
    }
    return value;
  }

  if (!CHECKED_INPUT_TYPES[type]) {
    value = trim ? element.value.replace(TRIM_RE, '') : element.value;
  } else if (element.checked) {
    value = element.value;
  }

  return value;
}

getFormData.getNamedFormElementData = getNamedFormElementData;

var Form = function (container, formElement, options) {
  EventEmitter.call(this, options, 'Form');

  var self = this;

  var disableContainerValidation;
  var keyInput;

  function getData () {
    return getFormData(formElement)
  }

  this.loadVideomail = function (videomail) {
    var limit = formElement.elements.length;

    var input;
    var name;

    for (var i = 0; i < limit; i++) {
      input = formElement.elements[i];
      name = input.name;

      if (videomail[name]) {
        input.value = videomail[name];
      }

      if (name === options.selectors.subjectInputName ||
          name === options.selectors.bodyInputName) {
        input.disabled = true;
      }
    }

    formElement.setAttribute('method', 'put');
  };

  function isNotButton (element) {
    return element.tagName !== 'BUTTON' && element.type !== 'submit'
  }

  function setDisabled (disabled, buttonsToo) {
    var limit = formElement.elements.length;

    for (var i = 0; i < limit; i++) {
      if (buttonsToo || (!buttonsToo && isNotButton(formElement.elements[i]))) {
        formElement.elements[i].disabled = disabled;
      }
    }
  }

  function hideAll () {
    var limit = formElement.elements.length;

    for (var i = 0; i < limit; i++) {
      index$10(formElement.elements[i], true);
    }

    index$10(formElement, true);
  }

  function getInputElements () {
    return formElement.querySelectorAll('input, textarea')
  }

  function getSelectElements () {
    return formElement.querySelectorAll('select')
  }

  this.disable = function (buttonsToo) {
    setDisabled(true, buttonsToo);
  };

  this.enable = function (buttonsToo) {
    setDisabled(false, buttonsToo);
  };

  this.build = function () {
    if (options.enableAutoValidation) {
      var inputElements = getInputElements();
      var inputElement;

      for (var i = 0, len = inputElements.length; i < len; i++) {
        inputElement = inputElements[i];

        if (inputElement.type === 'radio') {
          inputElement.addEventListener('change', function () {
            container.validate();
          });
        } else {
          inputElement.addEventListener('input', function () {
            container.validate();
          });
        }

        // because of angular's digest cycle, validate again when it became invalid
        inputElement.addEventListener('invalid', function () {
          if (!disableContainerValidation) {
            container.validate();
          }
        });
      }

      var selectElements = getSelectElements();

      for (var j = 0, len2 = selectElements.length; j < len2; j++) {
        selectElements[j].addEventListener('change', function () {
          container.validate();
        });
      }
    }

    keyInput = formElement.querySelector('input[name="' + options.selectors.keyInputName + '"]');

    if (!keyInput) {
      keyInput = index$17('input', {
        name: options.selectors.keyInputName,
        type: 'hidden'
      });

      formElement.appendChild(keyInput);
    }

    this.on(Events.PREVIEW, function (videomailKey) {
      // beware that preview doesn't always come with a key, i.E.
      // container.show() can emit PREVIEW without a key when a replay already exists
      // (can happen when showing - hiding - showing videomail over again)

      // only emit error if key is missing AND the input has no key (value) yet
      if (!videomailKey && !keyInput.value) {
        self.emit(
          Events.ERROR,
          VideomailError.create('Videomail key for preview is missing!', options)
        );
      } else if (videomailKey) {
        keyInput.value = videomailKey;
      }
      // else
      // leave as it and use existing keyInput.value
    });

    // fixes https://github.com/binarykitchen/videomail-client/issues/91
    this.on(Events.GOING_BACK, function () {
      keyInput.value = null;
    });

    this.on(Events.ERROR, function (err) {
      // since https://github.com/binarykitchen/videomail-client/issues/60
      // we hide areas to make it easier for the user to process an error
      // (= less distractions)
      if (err.hideForm && err.hideForm() && options.adjustFormOnBrowserError) {
        hideAll();
      } else if (err.hideButtons && err.hideButtons() && options.adjustFormOnBrowserError) {
        hideSubmitButton();
      }
    });

    this.on(Events.BUILT, function () {
      startListeningToSubmitEvents();
    });
  };

  function hideSubmitButton () {
    var submitButton = self.findSubmitButton();
    index$10(submitButton, true);
  }

  function startListeningToSubmitEvents () {
    var submitButton = container.getSubmitButton();
    submitButton.addEventListener('click', self.doTheSubmit.bind(self));
  }

  this.doTheSubmit = function (e) {
    // when videomail-client is hidden, leave the form handling as it and
    // do not mess with it at all
    if (!container.areVisualsHidden()) {
      e && e.preventDefault();

      // only adjust submission when there is a container, otherwise
      // do nothing and leave as it for robustness
      if (container.hasElement()) {
        container.submitAll(
          getData(),
          formElement.getAttribute('method'),
          formElement.getAttribute('action')
        );
      }

      return false // important to stop submission
    }
  };

  this.getInvalidElement = function () {
    var inputElements = getInputElements();

    for (var i = 0, len = inputElements.length; i < len; i++) {
      if (!inputElements[i].validity.valid) { return inputElements[i] }
    }

    var selectElements = getSelectElements();

    for (var j = 0, len2 = selectElements.length; j < len2; j++) {
      if (!selectElements[i].validity.valid) { return selectElements[j] }
    }

    return null
  };

  this.validate = function () {
    // prevents endless validation loop
    disableContainerValidation = true;

    var formIsValid = formElement.checkValidity();

    disableContainerValidation = false;

    return formIsValid
  };

  this.findSubmitButton = function () {
    return formElement.querySelector("[type='submit']")
  };

  this.hide = function () {
    formElement && index$10(formElement, true);
  };

  this.show = function () {
    formElement && index$10(formElement, false);
  };
};

util.inherits(Form, EventEmitter);

var Container = function (options) {
  EventEmitter.call(this, options, 'Container');

  var self = this;

  var visibility = index$11();
  var visuals = new Visuals(this, options);
  var buttons = new Buttons(this, options);
  var resource = new Resource(options);
  var htmlElement = document && document.querySelector && document.querySelector('html');
  var debug = options.debug;

  var hasError = false;
  var submitted = false;
  var lastValidation = false;

  var containerElement;
  var built;
  var form;

  function prependDefaultCss () {
    index$9(css, {prepend: true});
  }

    // since https://github.com/binarykitchen/videomail-client/issues/87
  function findParentFormElement () {
    return containerElement.closest('form')
  }

  function getFormElement () {
    var formElement;

    if (containerElement.tagName === 'FORM') {
      formElement = containerElement;
    } else if (options.selectors.formId) {
      formElement = document.getElementById(options.selectors.formId);
    } else {
      formElement = findParentFormElement();
    }

    return formElement
  }

  function buildForm () {
    debug('Container: buildForm()');

    var formElement = getFormElement();

    if (formElement) {
      form = new Form(self, formElement, options);

      var submitButton = form.findSubmitButton();
      submitButton && buttons.setSubmitButton(submitButton);

      form.build();
    }
  }

  function buildChildren () {
    debug('Container: buildChildren()');

    if (!containerElement.classList) {
      self.emit(Events.ERROR, VideomailError.create('Sorry, your browser is too old!', options));
    } else {
      containerElement.classList.add('videomail');

      buttons.build();
      visuals.build();
    }
  }

  function processError (err) {
    hasError = true;

    if (err.stack) {
      options.logger.error(err.stack);
    } else {
      options.logger.error(err);
    }

    if (options.displayErrors) {
      visuals.error(err);
    } else {
      visuals.reset();
    }
  }

  function initEvents () {
    debug('Container: initEvents()');

    window.addEventListener('beforeunload', function (e) {
      self.unload(e);
    });

    visibility.onChange(function (visible) {
      // built? see https://github.com/binarykitchen/videomail.io/issues/326
      if (built) {
        if (visible) {
          if (options.isAutoPauseEnabled() && self.isCountingDown()) {
            self.resume();
          }

          self.emit(Events.VISIBLE);
        } else {
          if (options.isAutoPauseEnabled() && (self.isCountingDown() || self.isRecording())) {
            self.pause('document invisible');
          }

          self.emit(Events.INVISIBLE);
        }
      }
    });

    if (options.enableSpace) {
      window.addEventListener('keypress', function (e) {
        var tagName = e.target.tagName;

        if (tagName !== 'INPUT' && tagName !== 'TEXTAREA') {
          var code = e.keyCode ? e.keyCode : e.which;

          if (code === 32) {
            e.preventDefault();

            if (options.enablePause) {
              visuals.pauseOrResume();
            } else {
              visuals.recordOrStop();
            }
          }
        }
      });
    }

    // better to keep the one and only error listeners
    // at one spot, here, because unload() will do a removeAllListeners()
    self.on(Events.ERROR, function (err) {
      processError(err);
      unloadChildren(err);

      if (err.removeDimensions && err.removeDimensions()) {
        removeDimensions();
      }
    })
    .on(Events.LOADED_META_DATA, function () {
      correctDimensions();
    });
  }

  function validateOptions () {
    if (options.hasDefinedWidth() && options.video.width % 2 !== 0) {
      throw VideomailError.create('Width must be divisible by two.', options)
    }

    if (options.hasDefinedHeight() && options.video.height % 2 !== 0) {
      throw VideomailError.create('Height must be divisible by two.', options)
    }
  }

    // this will just set the width but not the height because
    // it can be a form with more inputs elements
  function correctDimensions () {
    var width = visuals.getRecorderWidth(true);

    if (width < 1) {
      throw VideomailError.create('Recorder width cannot be less than 1!', options)
    } else {
      containerElement.style.width = width + 'px';
    }
  }

  function removeDimensions () {
    containerElement.style.width = 'auto';
  }

  function unloadChildren (e) {
    visuals.unload(e);
    buttons.unload();
    self.endWaiting();
  }

  function hideMySelf () {
    index$10(containerElement, true);
  }

    // fixes https://github.com/binarykitchen/videomail-client/issues/71
  function trimEmail (email) {
    return email.replace(/(^[,\s]+)|([,\s]+$)/g, '')
  }

  function submitVideomail (formData, method, cb) {
    var FORM_FIELDS = {
      'subject': options.selectors.subjectInputName,
      'from': options.selectors.fromInputName,
      'to': options.selectors.toInputName,
      'body': options.selectors.bodyInputName,
      'key': options.selectors.keyInputName,
      'parentKey': options.selectors.parentKeyInputName
    };

    var videomailFormData = {};

    Object.keys(FORM_FIELDS).forEach(function (key) {
      if (formData.hasOwnProperty(FORM_FIELDS[key])) {
        videomailFormData[key] = formData[FORM_FIELDS[key]];
      }
    });

    if (videomailFormData.from) {
      videomailFormData.from = trimEmail(videomailFormData.from);
    }

    if (videomailFormData.to) {
      videomailFormData.to = trimEmail(videomailFormData.to);
    }

        // when method is undefined, treat it as a post
    if (isPost(method) || !method) {
      videomailFormData.recordingStats = visuals.getRecordingStats();
      videomailFormData.width = visuals.getRecorderWidth(true);
      videomailFormData.height = visuals.getRecorderHeight(true);

      resource.post(videomailFormData, cb);
    } else if (isPut(method)) {
      resource.put(videomailFormData, cb);
    }
  }

  function submitForm (formData, videomailResponse, url, cb) {
    formData[options.selectors.aliasInputName] = videomailResponse.videomail.alias;

    resource.form(formData, url, cb);
  }

  function finalizeSubmissions (err, method, videomail, response, formResponse) {
    self.endWaiting();

    if (err) {
      self.emit(Events.ERROR, err);
    } else {
      submitted = true;

      // merge two json response bodies to fake as if it were only one request
      if (formResponse && formResponse.body) {
        Object.keys(formResponse.body).forEach(function (key) {
          response[key] = formResponse.body[key];
        });
      }

      self.emit(
        Events.SUBMITTED,
        videomail,
        response
      );

      if (formResponse && formResponse.type === 'text/html' && formResponse.text) {
        // server replied with HTML contents - display these
        document.body.innerHTML = formResponse.text;

        // todo: figure out how to fire dom's onload event again
        // todo: or how to run all the scripts over again
      }
    }
  }

  this.addPlayerDimensions = function (videomail, element) {
    try {
      videomail.playerHeight = this.calculateHeight({
        responsive: true,
        videoWidth: videomail.width,
        ratio: videomail.height / videomail.width
      }, element);

      videomail.playerWidth = this.calculateWidth({
        responsive: true,
        videoHeight: videomail.playerHeight,
        ratio: videomail.height / videomail.width
      });

      return videomail
    } catch (exc) {
      self.emit(Events.ERROR, exc);
    }
  };

  this.limitWidth = function (width) {
    return Dimension.limitWidth(containerElement, width, options)
  };

  this.limitHeight = function (height) {
    return Dimension.limitHeight(height, options)
  };

  this.calculateWidth = function (fnOptions) {
    return Dimension.calculateWidth(index$1.recursive(options, fnOptions))
  };

  this.calculateHeight = function (fnOptions, element) {
    if (!element) {
      if (containerElement) {
        element = containerElement;
      } else {
        // better than nothing
        element = document.body;
      }
    }

    return Dimension.calculateHeight(element, index$1.recursive(options, fnOptions))
  };

  this.areVisualsHidden = function () {
    return visuals.isHidden()
  };

  this.hasElement = function () {
    return !!containerElement
  };

  this.build = function () {
    debug('Container: build()');

    try {
      containerElement = document.getElementById(options.selectors.containerId);

      // only build when a container element hast been found, otherwise
      // be silent and do nothing
      if (containerElement) {
        options.insertCss && prependDefaultCss();

        !built && initEvents();
        validateOptions();
        correctDimensions();
        buildForm();
        buildChildren();

        if (!hasError) {
          debug('Container: built.');
          built = true;
          self.emit(Events.BUILT);
        } else {
          debug('Container: building failed due to an error.');
        }
      } else {
        debug('Container: no container element with ID ' + options.selectors.containerId + ' found. Do nothing.');
      }
    } catch (exc) {
      if (visuals.isNotifierBuilt()) {
        self.emit(Events.ERROR, exc);
      } else {
        throw exc
      }
    }
  };

  this.getSubmitButton = function () {
    return buttons.getSubmitButton()
  };

  this.querySelector = function (selector) {
    return containerElement.querySelector(selector)
  };

  this.beginWaiting = function () {
    htmlElement.classList && htmlElement.classList.add('wait');
  };

  this.endWaiting = function () {
    htmlElement.classList && htmlElement.classList.remove('wait');
  };

  this.appendChild = function (child) {
    containerElement.appendChild(child);
  };

  this.insertBefore = function (child, reference) {
    containerElement.insertBefore(child, reference);
  };

  this.unload = function (e) {
    debug('Container: unload()', e);

    try {
      unloadChildren(e);
      this.removeAllListeners();

      built = submitted = false;
    } catch (exc) {
      self.emit(Events.ERROR, exc);
    }
  };

  this.show = function () {
    if (containerElement) {
      index$10(containerElement, false);

      visuals.show();

      if (!hasError) {
        var paused = self.isPaused();

        if (paused) {
          buttons.adjustButtonsForPause();
        }

        // since https://github.com/binarykitchen/videomail-client/issues/60
        // we hide areas to make it easier for the user
        buttons.show();

        if (self.isReplayShown()) {
          self.emit(Events.PREVIEW);
        } else {
          self.emit(Events.FORM_READY, {paused: paused});
        }
      }
    }
  };

  this.hide = function () {
    hasError = false;

    this.isRecording() && this.pause();

    visuals.hide();

    if (submitted) {
      buttons.hide();
      hideMySelf();
    }
  };

  this.showReplayOnly = function () {
    hasError = false;

    this.isRecording() && this.pause();

    visuals.showReplayOnly();

    submitted && buttons.hide();
  };

  this.isNotifying = function () {
    return visuals.isNotifying()
  };

  this.isPaused = function () {
    return visuals.isPaused()
  };

  this.pause = function (params) {
    visuals.pause(params);
  };

  this.startOver = function () {
    try {
      submitted = false;
      form.show();
      visuals.back(this.show);
    } catch (exc) {
      self.emit(Events.ERROR, exc);
    }
  };

  // this code needs a good rewrite :(
  this.validate = function (force) {
    var runValidation = true;
    var valid;

    if (!options.enableAutoValidation) {
      runValidation = false;
      lastValidation = true; // needed so that it can be submitted anyway, see submit()
    } else if (force) {
      runValidation = force;
    } else if (self.isNotifying()) {
      runValidation = false;
    } else if (visuals.isConnected()) {
      runValidation = visuals.isUserMediaLoaded() || visuals.isReplayShown();
    } else if (visuals.isConnecting()) {
      runValidation = false;
    }

    if (runValidation) {
      this.emit(Events.VALIDATING);

      var visualsValid = visuals.validate() && buttons.isRecordAgainButtonEnabled();
      var whyInvalid;

      if (form) {
        valid = form.validate();

        if (valid) {
          if (!this.areVisualsHidden() && !visualsValid) {
            if (this.isReady() || this.isRecording() || this.isPaused() || this.isCountingDown()) {
              valid = false;
            }

            if (!valid) {
              whyInvalid = 'Video is not recorded';
            }
          }
        } else {
          var invalidInput = form.getInvalidElement();

          if (invalidInput) {
            whyInvalid = 'Form input named ' + invalidInput.name + ' is invalid';
          } else {
            whyInvalid = 'Form input(s() are invalid';
          }
        }
      } else {
        valid = visualsValid;
      }

      if (valid) {
        this.emit(Events.VALID);
      } else {
        this.emit(Events.INVALID, whyInvalid);
      }

      lastValidation = valid;
    }

    return valid
  };

  this.disableForm = function (buttonsToo) {
    form && form.disable(buttonsToo);
  };

  this.enableForm = function (buttonsToo) {
    form && form.enable(buttonsToo);
  };

  this.hasForm = function () {
    return !!form
  };

  this.isReady = function () {
    return buttons.isRecordButtonEnabled()
  };

  function isPost (method) {
    return method && method.toUpperCase() === 'POST'
  }

  function isPut (method) {
    return method && method.toUpperCase() === 'PUT'
  }

  this.submitAll = function (formData, method, url) {
    this.beginWaiting();
    this.disableForm(true);
    this.emit(Events.SUBMITTING);

    var post = isPost(method);

        // a closure so that we can access method
    var submitVideomailCallback = function (err1, videomail, videomailResponse) {
      if (err1) {
        finalizeSubmissions(err1, method, videomail, videomailResponse);
      } else if (post) {
        // for now, accept POSTs only which have an URL unlike null and
        // treat all other submissions as direct submissions

        if (!url || url === '') {
          // figure out URL automatically then
          url = document.baseURI;
        }

        submitForm(formData, videomailResponse, url, function (err2, formResponse) {
          finalizeSubmissions(err2, method, videomail, videomailResponse, formResponse);
        });
      } else {
        // it's a direct submission
        finalizeSubmissions(null, method, videomail, videomailResponse);
      }
    };

    submitVideomail(formData, method, submitVideomailCallback);
  };

  this.isBuilt = function () {
    return built
  };

  this.isReplayShown = function () {
    return visuals.isReplayShown()
  };

  this.isDirty = function () {
    var isDirty = false;

    if (form) {
      if (visuals.isRecorderUnloaded()) {
        isDirty = false;
      } else if (this.isReplayShown() || this.isPaused()) {
        isDirty = true;
      }
    }

    return isDirty
  };

  this.getReplay = function () {
    return visuals.getReplay()
  };

  this.isOutsideElementOf = function (element) {
    return element.parentNode !== containerElement && element !== containerElement
  };

  this.hideForm = function () {
    form.hide();
  };

  this.loadForm = function (videomail) {
    form.loadVideomail(videomail);
    this.validate();
  };

  this.enableAudio = function () {
    options.setAudioEnabled(true);
    this.emit(Events.ENABLING_AUDIO);
  };

  this.disableAudio = function () {
    options.setAudioEnabled(false);
    this.emit(Events.DISABLING_AUDIO);
  };

  this.submit = function () {
    lastValidation && form && form.doTheSubmit();
  };

  this.isCountingDown = visuals.isCountingDown.bind(visuals);
  this.isRecording = visuals.isRecording.bind(visuals);
  this.record = visuals.record.bind(visuals);
  this.resume = visuals.resume.bind(visuals);
  this.stop = visuals.stop.bind(visuals);
  this.recordAgain = visuals.recordAgain.bind(visuals);
};

util.inherits(Container, EventEmitter);

// enhances options with useful functions we can reuse everywhere

var OptionsWrapper = {
  addFunctions: function (options) {
    var audioEnabled = options.audio && options.audio.enabled;

    options.hasDefinedHeight = function () {
      return options.video.height && options.video.height !== 'auto'
    };

    options.hasDefinedWidth = function () {
      return options.video.width && options.video.width !== 'auto'
    };

    options.hasDefinedDimension = function () {
      return options.hasDefinedWidth() || options.hasDefinedHeight()
    };

    options.hasDefinedDimensions = function () {
      return options.hasDefinedWidth() && options.hasDefinedHeight()
    };

    options.getRatio = function () {
      var ratio = 1; // just a default one when no computations are possible

      if (options.hasDefinedDimensions()) {
        ratio = options.video.height / options.video.width;
      }

      return ratio
    };

    options.isAudioEnabled = function () {
      return audioEnabled
    };

    options.setAudioEnabled = function (enabled) {
      audioEnabled = enabled;
    };

    options.isAutoPauseEnabled = function () {
      return options.enableAutoPause && options.enablePause
    };
  }
};

var collectLogger;
var browser;

function adjustOptions (options) {
  var localOptions = index$1.recursive(defaultOptions, options || {});

  collectLogger = collectLogger || new CollectLogger(localOptions);

  localOptions.logger = collectLogger;
  localOptions.debug = localOptions.logger.debug;

  OptionsWrapper.addFunctions(localOptions);

  return localOptions
}

function getBrowser (localOptions) {
  if (!browser) {
    browser = new Browser(localOptions);
  }

  return browser
}

var VideomailClient = function (options) {
  var localOptions = adjustOptions(options);
  var container = new Container(localOptions);
  var debug = localOptions.debug;

  var replay;

  EventEmitter.call(this, localOptions, 'VideomailClient');

  // expose all possible events
  this.events = Events;

  function build () {
    var building = false;

    browser$1.interactive(function (previousState) {
      debug(
        'Client: interactive(),',
        'previousState =', previousState + ',',
        '!building =', !building + ',',
        '!isBuilt() =', !container.isBuilt()
      );

      // it can happen that it gets called twice, i.E. when an error is thrown
      // in the middle of the build() fn
      if (!building && !container.isBuilt()) {
        building = true;
        container.build();
        building = false;
      }
    });
  }

  this.show = function () {
    if (container.isBuilt()) {
      container.show();
    } else {
      this.once(Events.BUILT, container.show);
    }
  };

    // automatically adds a <video> element inside the given parentElement and loads
    // it with the videomail
  this.replay = function (videomail, parentElement) {
    function buildReplay () {
      if (typeof parentElement === 'string') {
        parentElement = document.getElementById(parentElement);
      }

      // if there is none, use the automatically generated one
      if (!parentElement) {
        replay = container.getReplay();
        parentElement = replay.getParentElement();
      } else {
        replay = new Replay(parentElement, localOptions);
        replay.build();
      }

      videomail = container.addPlayerDimensions(videomail, parentElement);

      if (videomail) {
        if (container.isOutsideElementOf(parentElement)) {
          // replay element must be outside of the container
          container.hideForm();
        } else {
          container.loadForm(videomail);
        }

        // slight delay needed to avoid HTTP 416 errors (request range unavailable)
        setTimeout(function () {
          replay.setVideomail(videomail);

          container.showReplayOnly();
        }, 2e3);
      }
    }

    browser$1.interactive(buildReplay);
  };

  this.startOver = function () {
    replay && replay.hide();
    container.startOver();
  };

  this.unload = function (e) {
    browser$1.removeAllListeners();
    container.unload(e);
  };

  this.hide = function () {
    container.hide();
  };

  this.get = function (key, cb) {
    new Resource(localOptions).get(key, function (err, videomail) {
      if (err) {
        cb(err);
      } else {
        cb(null, container.addPlayerDimensions(videomail));
      }
    });
  };

  this.canRecord = function () {
    return getBrowser(localOptions).canRecord()
  };

  // return true when a video has been recorded but is not sent yet
  this.isDirty = function () {
    return container.isDirty()
  };

  this.submit = function () {
    container.submit();
  };

  this.getLogLines = function () {
    if (localOptions.logger && localOptions.logger.getLines) {
      return localOptions.logger.getLines()
    }
  };

  build();
};

util.inherits(VideomailClient, EventEmitter);

Object.keys(Constants.public).forEach(function (name) {
  VideomailClient[name] = Constants.public[name];
});

// just another convenient thing
VideomailClient.events = Events;

if (!navigator) {
  throw new Error('Navigator is missing!')
} else {
  // Ensures Videomail functionality is not broken on exotic browsers with shims.
  //
  // UMD (Universal Module Definition), inspired by https://github.com/es-shims/es5-shim
  (function (navigator) {
    standardize(this, navigator);
  }(navigator));
}

return VideomailClient;

})));