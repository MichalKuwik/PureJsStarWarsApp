// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/func_generate_view.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function genereteView(text) {
  return "<div class=\"item\">\n    <p style=\"color:#fff\">".concat(text, "</p>\n    </div>\n    ");
}

var _default = genereteView;
exports.default = _default;
},{}],"js/func_show_result.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _func_generate_view = _interopRequireDefault(require("./func_generate_view"));

var _func_select = require("./func_select");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//get dom element
var resultSection = document.querySelector('.result');

var showResult = function showResult(searchOption, results) {
  var htmlStructure; //11

  if (searchOption === 'films') {
    //12
    htmlStructure = results.map(function (result) {
      return (0, _func_generate_view.default)("<b>Tytu\u0142:</b> ".concat(result.title, ", <b>Re\u017Cyser:</b> ").concat(result.director, ", <b>Data premiery:</b> ").concat((0, _func_select.reverseData)(result.release_date), "r."));
    });
  } else if (searchOption === 'people') {
    htmlStructure = results.map(function (result) {
      return (0, _func_generate_view.default)("<b>Imi\u0119 i nazwisko:</b> ".concat(result.name, ", <b>Wzrost:</b> ").concat(result.height, "cm, <b>Waga:</b> ").concat(result.mass, "kg"));
    });
  } else if (searchOption === 'planets') {
    htmlStructure = results.map(function (result) {
      return (0, _func_generate_view.default)("<b>Nazwa:</b> ".concat(result.name, ", <b>Populacja:</b> ").concat(result.population, ", <b>Rodzaj powierzchni:<b/> ").concat(result.terrain));
    });
  } else if (searchOption === 'starships') {
    htmlStructure = results.map(function (result) {
      return (0, _func_generate_view.default)("<b>Nazwa:</b> ".concat(result.name, ", <b>Model:</b> ").concat(result.model, ", <b>Koszt: ").concat(result.cost_in_credits, " kredyt\xF3w</b>"));
    });
  }

  resultSection.innerHTML = htmlStructure.join('');
};

var _default = showResult;
exports.default = _default;
},{"./func_generate_view":"js/func_generate_view.js","./func_select":"js/func_select.js"}],"js/func_searchForm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchFormFn = exports.searchInput = void 0;

var _func_select = require("./func_select");

var _func_show_result = _interopRequireDefault(require("./func_show_result"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//get DOM
var searchForm = document.getElementById('search-form');
var searchInput = document.querySelector('.input'); // 2 api base url

exports.searchInput = searchInput;
var apiBaseUrl = 'https://swapi.co/api'; //4 serve form submit

var searchFormFn = searchForm.addEventListener('submit', function (e) {
  e.preventDefault(); //5

  var searchValue = searchInput.value; //6 
  // https://swapi.co/api/people/?search=r2

  var apiURL = "".concat(apiBaseUrl, "/").concat(_func_select.searchOption, "/?search=").concat(searchValue);
  fetch(apiURL).then(function (res) {
    return res.json();
  }).then(function (data) {
    (0, _func_show_result.default)(_func_select.searchOption, data.results); // console.log(data.results)
  }).then(function (err) {
    return console.log(err);
  }); //after 1s run this function

  setTimeout(_func_select.resetInputValue, 1000);
});
exports.searchFormFn = searchFormFn;
},{"./func_select":"js/func_select.js","./func_show_result":"js/func_show_result.js"}],"js/func_select.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetInputValue = exports.reverseData = exports.selectFunction = exports.searchOption = void 0;

var _func_searchForm = require("./func_searchForm");

// 2 get value of selectOptionEl
var searchOption = 'wybierz'; //3 onchange select listener

exports.searchOption = searchOption;

var selectFunction = function selectFunction() {
  return select.addEventListener('change', function (e) {
    var selectedCategory = e.target.value;
    exports.searchOption = searchOption = selectedCategory; // console.log(searchOption)
  });
};

exports.selectFunction = selectFunction;

var reverseData = function reverseData(paramData) {
  return paramData.split('-').reverse().join('-');
};

exports.reverseData = reverseData;

var resetInputValue = function resetInputValue() {
  return _func_searchForm.searchInput.value = '';
};

exports.resetInputValue = resetInputValue;
},{"./func_searchForm":"js/func_searchForm.js"}],"js/index.js":[function(require,module,exports) {
"use strict";

var _func_select = require("./func_select");

var _func_searchForm = require("./func_searchForm");

_func_select.searchOption; //select option function

(0, _func_select.selectFunction)(); //searchFrom function

_func_searchForm.searchFormFn;
},{"./func_select":"js/func_select.js","./func_searchForm":"js/func_searchForm.js"}],"../node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49436" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map