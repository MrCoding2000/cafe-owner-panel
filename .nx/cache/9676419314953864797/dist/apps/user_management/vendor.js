(self["webpackChunkuser_management"] = self["webpackChunkuser_management"] || []).push([["vendor"],{

/***/ 6780:
/*!**************************************************************************!*\
  !*** ./node_modules/@module-federation/data-prefetch/dist/index.esm2.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ logger)
/* harmony export */ });
/* harmony import */ var _module_federation_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @module-federation/sdk */ 7568);

var logger = new _module_federation_sdk__WEBPACK_IMPORTED_MODULE_0__.Logger('[Module Federation Data Prefetch]');


/***/ }),

/***/ 747:
/*!**************************************************************************!*\
  !*** ./node_modules/@module-federation/data-prefetch/dist/plugin.esm.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ prefetchPlugin),
/* harmony export */   prefetchPlugin: () => (/* binding */ prefetchPlugin)
/* harmony export */ });
/* harmony import */ var C_Users_ASUS_Desktop_cafe_chi_owner_panel_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1890);
/* harmony import */ var _module_federation_sdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @module-federation/sdk */ 7568);
/* harmony import */ var _runtime_utils_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./runtime-utils.esm.js */ 1364);
/* harmony import */ var _prefetch_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prefetch.esm.js */ 1331);
/* harmony import */ var _index_esm2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.esm2.js */ 6780);
/* harmony import */ var _module_federation_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @module-federation/runtime */ 3497);






const loadingArray = [];
const strategy = 'loaded-first';
let sharedFlag = strategy;
// eslint-disable-next-line max-lines-per-function
const prefetchPlugin = () => ({
  name: 'data-prefetch-runtime-plugin',
  initContainer(options) {
    const {
      remoteSnapshot,
      remoteInfo,
      id,
      origin
    } = options;
    const snapshot = remoteSnapshot;
    const {
      name
    } = remoteInfo;
    const prefetchOptions = {
      name,
      remote: remoteInfo,
      origin,
      remoteSnapshot: snapshot
    };
    const signal = (0,_runtime_utils_esm_js__WEBPACK_IMPORTED_MODULE_1__.a)(snapshot);
    if (!signal) {
      return options;
    }
    if (sharedFlag !== strategy) {
      throw new Error(`[Module Federation Data Prefetch]: If you want to use data prefetch, the shared strategy must be 'loaded-first'`);
    }
    const instance = _prefetch_esm_js__WEBPACK_IMPORTED_MODULE_2__.M.getInstance(name) || new _prefetch_esm_js__WEBPACK_IMPORTED_MODULE_2__.M(prefetchOptions);
    let prefetchUrl;
    // @ts-expect-error
    if (snapshot.prefetchEntry) {
      // @ts-expect-error
      prefetchUrl = (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_5__.getResourceUrl)(snapshot, snapshot.prefetchEntry);
    }
    const exist = loadingArray.find(loading => loading.id === id);
    if (exist) {
      return options;
    }
    const promise = instance.loadEntry(prefetchUrl).then( /*#__PURE__*/(0,C_Users_ASUS_Desktop_cafe_chi_owner_panel_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const projectExports = instance.getProjectExports();
      if (projectExports instanceof Promise) {
        yield projectExports;
      }
      return Promise.resolve().then(() => {
        const exports = instance.getExposeExports(id);
        _index_esm2_js__WEBPACK_IMPORTED_MODULE_3__.l.info(`1. Start Prefetch initContainer: ${id} - ${performance.now()}`);
        const result = Object.keys(exports).map(k => {
          const value = instance.prefetch({
            id,
            functionId: k
          });
          const functionId = k;
          return {
            value,
            functionId
          };
        });
        return result;
      });
    }));
    loadingArray.push({
      id,
      promise
    });
    return options;
  },
  afterResolve(options) {
    const {
      remoteSnapshot,
      remoteInfo,
      id,
      origin
    } = options;
    const snapshot = remoteSnapshot;
    const {
      name
    } = remoteInfo;
    const prefetchOptions = {
      name,
      remote: remoteInfo,
      origin,
      remoteSnapshot: snapshot
    };
    const signal = (0,_runtime_utils_esm_js__WEBPACK_IMPORTED_MODULE_1__.a)(snapshot);
    if (!signal) {
      return options;
    }
    const inited = loadingArray.some(info => info.id === id);
    if (!inited) {
      return options;
    }
    if (sharedFlag !== strategy) {
      throw new Error(`[Module Federation Data Prefetch]: If you want to use data prefetch, the shared strategy must be 'loaded-first'`);
    }
    const instance = _prefetch_esm_js__WEBPACK_IMPORTED_MODULE_2__.M.getInstance(name) || new _prefetch_esm_js__WEBPACK_IMPORTED_MODULE_2__.M(prefetchOptions);
    let prefetchUrl;
    // @ts-expect-error
    if (snapshot.prefetchEntry) {
      // @ts-expect-error
      prefetchUrl = (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_5__.getResourceUrl)(snapshot, snapshot.prefetchEntry);
    }
    const index = loadingArray.findIndex(loading => loading.id === id);
    // clear cache
    if (index !== -1) {
      loadingArray.splice(index, 1);
    }
    const promise = instance.loadEntry(prefetchUrl).then( /*#__PURE__*/(0,C_Users_ASUS_Desktop_cafe_chi_owner_panel_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const projectExports = instance.getProjectExports();
      if (projectExports instanceof Promise) {
        yield projectExports;
      }
      return Promise.resolve().then(() => {
        const exports = instance.getExposeExports(id);
        _index_esm2_js__WEBPACK_IMPORTED_MODULE_3__.l.info(`1. Start Prefetch afterResolve: ${id} - ${performance.now()}`);
        const result = Object.keys(exports).map(k => {
          const value = instance.prefetch({
            id,
            functionId: k
          });
          const functionId = k;
          return {
            value,
            functionId
          };
        });
        return result;
      });
    }));
    loadingArray.push({
      id,
      promise
    });
    return options;
  },
  onLoad(options) {
    return (0,C_Users_ASUS_Desktop_cafe_chi_owner_panel_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _loadingArray_find;
      const {
        remote,
        id
      } = options;
      const {
        name
      } = remote;
      const promise = (_loadingArray_find = loadingArray.find(loading => loading.id === id)) == null ? void 0 : _loadingArray_find.promise;
      if (promise) {
        const prefetch = yield promise;
        const prefetchValue = prefetch.map(result => result.value);
        yield Promise.all(prefetchValue);
        const instance = _prefetch_esm_js__WEBPACK_IMPORTED_MODULE_2__.M.getInstance(name);
        prefetch.forEach(result => {
          const {
            value,
            functionId
          } = result;
          instance.memorize(id + functionId, value);
        });
      }
      return options;
    })();
  },
  beforeLoadShare(options) {
    const shareInfo = options.shareInfo;
    sharedFlag = (shareInfo == null ? void 0 : shareInfo.strategy) || sharedFlag;
    return options;
  }
});


/***/ }),

/***/ 1331:
/*!****************************************************************************!*\
  !*** ./node_modules/@module-federation/data-prefetch/dist/prefetch.esm.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ MFDataPrefetch)
/* harmony export */ });
/* harmony import */ var C_Users_ASUS_Desktop_cafe_chi_owner_panel_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1890);
/* harmony import */ var _module_federation_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @module-federation/runtime */ 3497);
/* harmony import */ var _module_federation_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @module-federation/sdk */ 7568);
/* harmony import */ var _runtime_utils_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./runtime-utils.esm.js */ 1364);




var
  // @ts-ignore init global variable for test
  _globalThis, _globalThis___FEDERATION__;
var ___FEDERATION__;
(___FEDERATION__ = (_globalThis = globalThis).__FEDERATION__) != null ? ___FEDERATION__ : _globalThis.__FEDERATION__ = {};
var ___PREFETCH__;
(___PREFETCH__ = (_globalThis___FEDERATION__ = globalThis.__FEDERATION__).__PREFETCH__) != null ? ___PREFETCH__ : _globalThis___FEDERATION__.__PREFETCH__ = {
  entryLoading: {},
  instance: new Map(),
  __PREFETCH_EXPORTS__: {}
};
class MFDataPrefetch {
  get global() {
    return globalThis.__FEDERATION__.__PREFETCH__;
  }
  static getInstance(id) {
    return globalThis.__FEDERATION__.__PREFETCH__.instance.get(id);
  }
  loadEntry(entry) {
    var _this = this;
    return (0,C_Users_ASUS_Desktop_cafe_chi_owner_panel_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        name,
        remoteSnapshot,
        remote,
        origin
      } = _this._options;
      if (entry) {
        const {
          buildVersion,
          globalName
        } = remoteSnapshot;
        const uniqueKey = globalName || `${name}:${buildVersion}`;
        if (!_this.global.entryLoading[uniqueKey]) {
          _this.global.entryLoading[uniqueKey] = (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_3__.loadScript)(entry, {});
        }
        return _this.global.entryLoading[uniqueKey];
      } else {
        const remoteInfo = (0,_module_federation_runtime__WEBPACK_IMPORTED_MODULE_1__.getRemoteInfo)(remote);
        const module = origin.moduleCache.get(remoteInfo.name);
        return (0,_module_federation_runtime__WEBPACK_IMPORTED_MODULE_1__.getRemoteEntry)({
          origin: origin,
          remoteInfo,
          remoteEntryExports: module ? module.remoteEntryExports : undefined
        });
      }
    })();
  }
  getProjectExports() {
    var _globalThis___FEDERATION_____PREFETCH_____PREFETCH_EXPORTS__;
    if (Object.keys(this._exports).length > 0) {
      return this._exports;
    }
    const {
      name
    } = this._options;
    const exportsPromiseFn = (_globalThis___FEDERATION_____PREFETCH_____PREFETCH_EXPORTS__ = globalThis.__FEDERATION__.__PREFETCH__.__PREFETCH_EXPORTS__) == null ? void 0 : _globalThis___FEDERATION_____PREFETCH_____PREFETCH_EXPORTS__[name];
    const exportsPromise = typeof exportsPromiseFn === 'function' ? exportsPromiseFn() : Promise.resolve({});
    const resolve = exportsPromise.then((exports = {}) => {
      // Match prefetch based on the function name suffix so that other capabilities can be expanded later.
      // Not all functions should be directly identified as prefetch functions
      const memory = {};
      Object.keys(exports).forEach(key => {
        memory[key] = {};
        const exportVal = exports[key];
        Object.keys(exportVal).reduce((memo, current) => {
          if (current.toLocaleLowerCase().endsWith('prefetch') || current.toLocaleLowerCase() === 'default') {
            memo[current] = exportVal[current];
          }
          return memo;
        }, memory[key]);
      });
      this.memorizeExports(memory);
    });
    return resolve;
  }
  memorizeExports(exports) {
    this._exports = exports;
  }
  getExposeExports(id) {
    const prefetchId = (0,_runtime_utils_esm_js__WEBPACK_IMPORTED_MODULE_2__.b)(id);
    const compatId = (0,_runtime_utils_esm_js__WEBPACK_IMPORTED_MODULE_2__.c)(id);
    const prefetchExports = this._exports[prefetchId] || this._exports[compatId];
    return prefetchExports || {};
  }
  prefetch(prefetchOptions) {
    const {
      id,
      functionId = 'default',
      refetchParams
    } = prefetchOptions;
    let prefetchResult;
    const prefetchId = (0,_runtime_utils_esm_js__WEBPACK_IMPORTED_MODULE_2__.b)(id);
    const compatId = (0,_runtime_utils_esm_js__WEBPACK_IMPORTED_MODULE_2__.c)(id);
    const memorizeId = id + functionId;
    const memory = this.prefetchMemory.get(memorizeId);
    if (!this.checkOutdate(prefetchOptions) && memory) {
      return memory;
    }
    const prefetchExports = this._exports[prefetchId] || this._exports[compatId];
    if (!prefetchExports) {
      return;
    }
    const executePrefetch = prefetchExports[functionId];
    if (typeof executePrefetch === 'function') {
      if (refetchParams) {
        prefetchResult = executePrefetch(refetchParams);
      } else {
        prefetchResult = executePrefetch();
      }
    } else {
      throw new Error(`[Module Federation Data Prefetch]: No prefetch function called ${functionId} export in prefetch file`);
    }
    this.memorize(memorizeId, prefetchResult);
    return prefetchResult;
  }
  memorize(id, value) {
    this.prefetchMemory.set(id, value);
  }
  markOutdate(markOptions, isOutdate) {
    const {
      id,
      functionId = 'default'
    } = markOptions;
    if (!this.recordOutdate[id]) {
      this.recordOutdate[id] = {};
    }
    this.recordOutdate[id][functionId] = isOutdate;
  }
  checkOutdate(outdateOptions) {
    const {
      id,
      functionId = 'default',
      cacheStrategy
    } = outdateOptions;
    if (typeof cacheStrategy === 'function') {
      return cacheStrategy();
    }
    if (!this.recordOutdate[id]) {
      this.recordOutdate[id] = {};
    }
    if (this.recordOutdate[id][functionId]) {
      this.markOutdate({
        id,
        functionId
      }, false);
      return true;
    } else {
      return false;
    }
  }
  constructor(options) {
    this.prefetchMemory = new Map();
    this.recordOutdate = {};
    this._exports = {};
    this._options = options;
    this.global.instance.set(options.name, this);
  }
}


/***/ }),

/***/ 1364:
/*!*********************************************************************************!*\
  !*** ./node_modules/@module-federation/data-prefetch/dist/runtime-utils.esm.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ getSignalFromManifest),
/* harmony export */   b: () => (/* binding */ getPrefetchId),
/* harmony export */   c: () => (/* binding */ compatGetPrefetchId),
/* harmony export */   g: () => (/* binding */ getScope)
/* harmony export */ });
/* harmony import */ var _module_federation_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @module-federation/runtime */ 3497);
/* harmony import */ var _module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @module-federation/sdk */ 7568);


const getScope = () => {
  return (0,_module_federation_runtime__WEBPACK_IMPORTED_MODULE_0__.getInstance)().options.name;
};
const getPrefetchId = id => (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.encodeName)(`${id}/${_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.MFPrefetchCommon.identifier}`);
const compatGetPrefetchId = id => (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.encodeName)(`${id}/VmokPrefetch`);
const getSignalFromManifest = remoteSnapshot => {
  if (!remoteSnapshot) {
    return false;
  }
  if (!('prefetchEntry' in remoteSnapshot) && !('prefetchInterface' in remoteSnapshot)) {
    return false;
  }
  if (!remoteSnapshot.prefetchEntry && !remoteSnapshot.prefetchInterface) {
    return false;
  }
  return true;
};


/***/ }),

/***/ 6569:
/*!**************************************************************************!*\
  !*** ./node_modules/@module-federation/data-prefetch/dist/shared.esm.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sharedStrategy)
/* harmony export */ });
const sharedStrategy = () => ({
  name: 'shared-strategy',
  beforeInit(args) {
    const {
      userOptions
    } = args;
    const shared = userOptions.shared;
    if (shared) {
      Object.keys(shared).forEach(sharedKey => {
        const sharedConfigs = shared[sharedKey];
        const arraySharedConfigs = Array.isArray(sharedConfigs) ? sharedConfigs : [sharedConfigs];
        arraySharedConfigs.forEach(s => {
          s.strategy = 'loaded-first';
        });
      });
      console.warn(`[Module Federation Data Prefetch]: Your shared strategy is set to 'loaded-first', this is a necessary condition for data prefetch`);
    }
    return args;
  }
});


/***/ }),

/***/ 3497:
/*!*******************************************************************!*\
  !*** ./node_modules/@module-federation/runtime/dist/index.cjs.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _asyncToGenerator = (__webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 5000)["default"]);
var polyfills = __webpack_require__(/*! ./polyfills.cjs.js */ 5741);
var sdk = __webpack_require__(/*! @module-federation/sdk */ 5305);
var share = __webpack_require__(/*! ./share.cjs.js */ 2530);

// Function to match a remote with its name and expose
// id: pkgName(@federation/app1) + expose(button) = @federation/app1/button
// id: alias(app1) + expose(button) = app1/button
// id: alias(app1/utils) + expose(loadash/sort) = app1/utils/loadash/sort
function matchRemoteWithNameAndExpose(remotes, id) {
  for (const remote of remotes) {
    // match pkgName
    const isNameMatched = id.startsWith(remote.name);
    let expose = id.replace(remote.name, '');
    if (isNameMatched) {
      if (expose.startsWith('/')) {
        const pkgNameOrAlias = remote.name;
        expose = `.${expose}`;
        return {
          pkgNameOrAlias,
          expose,
          remote
        };
      } else if (expose === '') {
        return {
          pkgNameOrAlias: remote.name,
          expose: '.',
          remote
        };
      }
    }
    // match alias
    const isAliasMatched = remote.alias && id.startsWith(remote.alias);
    let exposeWithAlias = remote.alias && id.replace(remote.alias, '');
    if (remote.alias && isAliasMatched) {
      if (exposeWithAlias && exposeWithAlias.startsWith('/')) {
        const pkgNameOrAlias = remote.alias;
        exposeWithAlias = `.${exposeWithAlias}`;
        return {
          pkgNameOrAlias,
          expose: exposeWithAlias,
          remote
        };
      } else if (exposeWithAlias === '') {
        return {
          pkgNameOrAlias: remote.alias,
          expose: '.',
          remote
        };
      }
    }
  }
  return;
}
// Function to match a remote with its name or alias
function matchRemote(remotes, nameOrAlias) {
  for (const remote of remotes) {
    const isNameMatched = nameOrAlias === remote.name;
    if (isNameMatched) {
      return remote;
    }
    const isAliasMatched = remote.alias && nameOrAlias === remote.alias;
    if (isAliasMatched) {
      return remote;
    }
  }
  return;
}
function registerPlugins$1(plugins, hookInstances) {
  const globalPlugins = share.getGlobalHostPlugins();
  // Incorporate global plugins
  if (globalPlugins.length > 0) {
    globalPlugins.forEach(plugin => {
      if (plugins == null ? void 0 : plugins.find(item => item.name !== plugin.name)) {
        plugins.push(plugin);
      }
    });
  }
  if (plugins && plugins.length > 0) {
    plugins.forEach(plugin => {
      hookInstances.forEach(hookInstance => {
        hookInstance.applyPlugin(plugin);
      });
    });
  }
  return plugins;
}
function loadEsmEntry(_x) {
  return _loadEsmEntry.apply(this, arguments);
}
function _loadEsmEntry() {
  _loadEsmEntry = _asyncToGenerator(function* ({
    entry,
    remoteEntryExports
  }) {
    return new Promise((resolve, reject) => {
      try {
        if (!remoteEntryExports) {
          // eslint-disable-next-line no-eval
          new Function('callbacks', `import("${entry}").then(callbacks[0]).catch(callbacks[1])`)([resolve, reject]);
        } else {
          resolve(remoteEntryExports);
        }
      } catch (e) {
        reject(e);
      }
    });
  });
  return _loadEsmEntry.apply(this, arguments);
}
function loadSystemJsEntry(_x2) {
  return _loadSystemJsEntry.apply(this, arguments);
}
function _loadSystemJsEntry() {
  _loadSystemJsEntry = _asyncToGenerator(function* ({
    entry,
    remoteEntryExports
  }) {
    return new Promise((resolve, reject) => {
      try {
        if (!remoteEntryExports) {
          // eslint-disable-next-line no-eval
          new Function('callbacks', `System.import("${entry}").then(callbacks[0]).catch(callbacks[1])`)([resolve, reject]);
        } else {
          resolve(remoteEntryExports);
        }
      } catch (e) {
        reject(e);
      }
    });
  });
  return _loadSystemJsEntry.apply(this, arguments);
}
function loadEntryScript(_x3) {
  return _loadEntryScript.apply(this, arguments);
}
function _loadEntryScript() {
  _loadEntryScript = _asyncToGenerator(function* ({
    name,
    globalName,
    entry,
    createScriptHook
  }) {
    const {
      entryExports: remoteEntryExports
    } = share.getRemoteEntryExports(name, globalName);
    if (remoteEntryExports) {
      return remoteEntryExports;
    }
    return sdk.loadScript(entry, {
      attrs: {},
      createScriptHook: (url, attrs) => {
        const res = createScriptHook.emit({
          url,
          attrs
        });
        if (!res) return;
        if (res instanceof HTMLScriptElement) {
          return res;
        }
        if ('script' in res || 'timeout' in res) {
          return res;
        }
        return;
      }
    }).then(() => {
      const {
        remoteEntryKey,
        entryExports
      } = share.getRemoteEntryExports(name, globalName);
      share.assert(entryExports, `
      Unable to use the ${name}'s '${entry}' URL with ${remoteEntryKey}'s globalName to get remoteEntry exports.
      Possible reasons could be:\n
      1. '${entry}' is not the correct URL, or the remoteEntry resource or name is incorrect.\n
      2. ${remoteEntryKey} cannot be used to get remoteEntry exports in the window object.
    `);
      return entryExports;
    }).catch(e => {
      throw e;
    });
  });
  return _loadEntryScript.apply(this, arguments);
}
function loadEntryDom(_x4) {
  return _loadEntryDom.apply(this, arguments);
}
function _loadEntryDom() {
  _loadEntryDom = _asyncToGenerator(function* ({
    remoteInfo,
    remoteEntryExports,
    createScriptHook
  }) {
    const {
      entry,
      entryGlobalName: globalName,
      name,
      type
    } = remoteInfo;
    switch (type) {
      case 'esm':
      case 'module':
        return loadEsmEntry({
          entry,
          remoteEntryExports
        });
      case 'system':
        return loadSystemJsEntry({
          entry,
          remoteEntryExports
        });
      default:
        return loadEntryScript({
          entry,
          globalName,
          name,
          createScriptHook
        });
    }
  });
  return _loadEntryDom.apply(this, arguments);
}
function loadEntryNode(_x5) {
  return _loadEntryNode.apply(this, arguments);
}
function _loadEntryNode() {
  _loadEntryNode = _asyncToGenerator(function* ({
    remoteInfo,
    createScriptHook
  }) {
    const {
      entry,
      entryGlobalName: globalName,
      name,
      type
    } = remoteInfo;
    const {
      entryExports: remoteEntryExports
    } = share.getRemoteEntryExports(name, globalName);
    if (remoteEntryExports) {
      return remoteEntryExports;
    }
    return sdk.loadScriptNode(entry, {
      attrs: {
        name,
        globalName,
        type
      },
      createScriptHook: (url, attrs) => {
        const res = createScriptHook.emit({
          url,
          attrs
        });
        if (!res) return;
        if ('url' in res) {
          return res;
        }
        return;
      }
    }).then(() => {
      const {
        remoteEntryKey,
        entryExports
      } = share.getRemoteEntryExports(name, globalName);
      share.assert(entryExports, `
      Unable to use the ${name}'s '${entry}' URL with ${remoteEntryKey}'s globalName to get remoteEntry exports.
      Possible reasons could be:\n
      1. '${entry}' is not the correct URL, or the remoteEntry resource or name is incorrect.\n
      2. ${remoteEntryKey} cannot be used to get remoteEntry exports in the window object.
    `);
      return entryExports;
    }).catch(e => {
      throw e;
    });
  });
  return _loadEntryNode.apply(this, arguments);
}
function getRemoteEntryUniqueKey(remoteInfo) {
  const {
    entry,
    name
  } = remoteInfo;
  return sdk.composeKeyWithSeparator(name, entry);
}
function getRemoteEntry(_x6) {
  return _getRemoteEntry.apply(this, arguments);
}
function _getRemoteEntry() {
  _getRemoteEntry = _asyncToGenerator(function* ({
    origin,
    remoteEntryExports,
    remoteInfo
  }) {
    const uniqueKey = getRemoteEntryUniqueKey(remoteInfo);
    if (remoteEntryExports) {
      return remoteEntryExports;
    }
    if (!share.globalLoading[uniqueKey]) {
      const loadEntryHook = origin.remoteHandler.hooks.lifecycle.loadEntry;
      const createScriptHook = origin.loaderHook.lifecycle.createScript;
      share.globalLoading[uniqueKey] = loadEntryHook.emit({
        createScriptHook,
        remoteInfo,
        remoteEntryExports
      }).then(res => {
        if (res) {
          return res;
        }
        return sdk.isBrowserEnv() ? loadEntryDom({
          remoteInfo,
          remoteEntryExports,
          createScriptHook
        }) : loadEntryNode({
          remoteInfo,
          createScriptHook
        });
      });
    }
    return share.globalLoading[uniqueKey];
  });
  return _getRemoteEntry.apply(this, arguments);
}
function getRemoteInfo(remote) {
  return polyfills._extends({}, remote, {
    entry: 'entry' in remote ? remote.entry : '',
    type: remote.type || share.DEFAULT_REMOTE_TYPE,
    entryGlobalName: remote.entryGlobalName || remote.name,
    shareScope: remote.shareScope || share.DEFAULT_SCOPE
  });
}
let Module = class Module {
  getEntry() {
    var _this = this;
    return _asyncToGenerator(function* () {
      if (_this.remoteEntryExports) {
        return _this.remoteEntryExports;
      }
      // Get remoteEntry.js
      const remoteEntryExports = yield getRemoteEntry({
        origin: _this.host,
        remoteInfo: _this.remoteInfo,
        remoteEntryExports: _this.remoteEntryExports
      });
      share.assert(remoteEntryExports, `remoteEntryExports is undefined \n ${sdk.safeToString(_this.remoteInfo)}`);
      _this.remoteEntryExports = remoteEntryExports;
      return _this.remoteEntryExports;
    })();
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  get(id, expose, options, remoteSnapshot) {
    var _this2 = this;
    return _asyncToGenerator(function* () {
      const {
        loadFactory = true
      } = options || {
        loadFactory: true
      };
      // Get remoteEntry.js
      const remoteEntryExports = yield _this2.getEntry();
      if (!_this2.inited) {
        const localShareScopeMap = _this2.host.shareScopeMap;
        const remoteShareScope = _this2.remoteInfo.shareScope || 'default';
        if (!localShareScopeMap[remoteShareScope]) {
          localShareScopeMap[remoteShareScope] = {};
        }
        const shareScope = localShareScopeMap[remoteShareScope];
        const initScope = [];
        const remoteEntryInitOptions = {
          version: _this2.remoteInfo.version || ''
        };
        // Help to find host instance
        Object.defineProperty(remoteEntryInitOptions, 'shareScopeMap', {
          value: localShareScopeMap,
          // remoteEntryInitOptions will be traversed and assigned during container init, ,so this attribute is not allowed to be traversed
          enumerable: false
        });
        const initContainerOptions = yield _this2.host.hooks.lifecycle.beforeInitContainer.emit({
          shareScope,
          // @ts-ignore shareScopeMap will be set by Object.defineProperty
          remoteEntryInitOptions,
          initScope,
          remoteInfo: _this2.remoteInfo,
          origin: _this2.host
        });
        if (typeof (remoteEntryExports == null ? void 0 : remoteEntryExports.init) === 'undefined') {
          console.error('The remote entry interface does not contain "init"', '\n', 'Ensure the name of this remote is not reserved or in use. Check if anything already exists on window[nameOfRemote]', '\n', 'Ensure that window[nameOfRemote] is returning a {get,init} object.');
        }
        yield remoteEntryExports.init(initContainerOptions.shareScope, initContainerOptions.initScope, initContainerOptions.remoteEntryInitOptions);
        yield _this2.host.hooks.lifecycle.initContainer.emit(polyfills._extends({}, initContainerOptions, {
          id,
          remoteSnapshot,
          remoteEntryExports
        }));
      }
      _this2.lib = remoteEntryExports;
      _this2.inited = true;
      // get exposeGetter
      const moduleFactory = yield remoteEntryExports.get(expose);
      share.assert(moduleFactory, `${share.getFMId(_this2.remoteInfo)} remote don't export ${expose}.`);
      const wrapModuleFactory = _this2.wraperFactory(moduleFactory, id);
      if (!loadFactory) {
        return wrapModuleFactory;
      }
      const exposeContent = yield wrapModuleFactory();
      return exposeContent;
    })();
  }
  wraperFactory(moduleFactory, id) {
    function defineModuleId(res, id) {
      if (res && typeof res === 'object' && Object.isExtensible(res) && !Object.getOwnPropertyDescriptor(res, Symbol.for('mf_module_id'))) {
        Object.defineProperty(res, Symbol.for('mf_module_id'), {
          value: id,
          enumerable: false
        });
      }
    }
    if (moduleFactory instanceof Promise) {
      return /*#__PURE__*/_asyncToGenerator(function* () {
        const res = yield moduleFactory();
        // This parameter is used for bridge debugging
        defineModuleId(res, id);
        return res;
      });
    } else {
      return () => {
        const res = moduleFactory();
        // This parameter is used for bridge debugging
        defineModuleId(res, id);
        return res;
      };
    }
  }
  constructor({
    remoteInfo,
    host
  }) {
    this.inited = false;
    this.lib = undefined;
    this.remoteInfo = remoteInfo;
    this.host = host;
  }
};
class SyncHook {
  on(fn) {
    if (typeof fn === 'function') {
      this.listeners.add(fn);
    }
  }
  once(fn) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    this.on(function wrapper(...args) {
      self.remove(wrapper);
      // eslint-disable-next-line prefer-spread
      return fn.apply(null, args);
    });
  }
  emit(...data) {
    let result;
    if (this.listeners.size > 0) {
      // eslint-disable-next-line prefer-spread
      this.listeners.forEach(fn => {
        result = fn(...data);
      });
    }
    return result;
  }
  remove(fn) {
    this.listeners.delete(fn);
  }
  removeAll() {
    this.listeners.clear();
  }
  constructor(type) {
    this.type = '';
    this.listeners = new Set();
    if (type) {
      this.type = type;
    }
  }
}
class AsyncHook extends SyncHook {
  emit(...data) {
    let result;
    const ls = Array.from(this.listeners);
    if (ls.length > 0) {
      let i = 0;
      const call = prev => {
        if (prev === false) {
          return false; // Abort process
        } else if (i < ls.length) {
          return Promise.resolve(ls[i++].apply(null, data)).then(call);
        } else {
          return prev;
        }
      };
      result = call();
    }
    return Promise.resolve(result);
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function checkReturnData(originalData, returnedData) {
  if (!share.isObject(returnedData)) {
    return false;
  }
  if (originalData !== returnedData) {
    // eslint-disable-next-line no-restricted-syntax
    for (const key in originalData) {
      if (!(key in returnedData)) {
        return false;
      }
    }
  }
  return true;
}
class SyncWaterfallHook extends SyncHook {
  emit(data) {
    if (!share.isObject(data)) {
      share.error(`The data for the "${this.type}" hook should be an object.`);
    }
    for (const fn of this.listeners) {
      try {
        const tempData = fn(data);
        if (checkReturnData(data, tempData)) {
          data = tempData;
        } else {
          this.onerror(`A plugin returned an unacceptable value for the "${this.type}" type.`);
          break;
        }
      } catch (e) {
        share.warn(e);
        this.onerror(e);
      }
    }
    return data;
  }
  constructor(type) {
    super();
    this.onerror = share.error;
    this.type = type;
  }
}
class AsyncWaterfallHook extends SyncHook {
  emit(data) {
    if (!share.isObject(data)) {
      share.error(`The response data for the "${this.type}" hook must be an object.`);
    }
    const ls = Array.from(this.listeners);
    if (ls.length > 0) {
      let i = 0;
      const processError = e => {
        share.warn(e);
        this.onerror(e);
        return data;
      };
      const call = prevData => {
        if (checkReturnData(data, prevData)) {
          data = prevData;
          if (i < ls.length) {
            try {
              return Promise.resolve(ls[i++](data)).then(call, processError);
            } catch (e) {
              return processError(e);
            }
          }
        } else {
          this.onerror(`A plugin returned an incorrect value for the "${this.type}" type.`);
        }
        return data;
      };
      return Promise.resolve(call(data));
    }
    return Promise.resolve(data);
  }
  constructor(type) {
    super();
    this.onerror = share.error;
    this.type = type;
  }
}
class PluginSystem {
  applyPlugin(plugin) {
    share.assert(share.isPlainObject(plugin), 'Plugin configuration is invalid.');
    // The plugin's name is mandatory and must be unique
    const pluginName = plugin.name;
    share.assert(pluginName, 'A name must be provided by the plugin.');
    if (!this.registerPlugins[pluginName]) {
      this.registerPlugins[pluginName] = plugin;
      Object.keys(this.lifecycle).forEach(key => {
        const pluginLife = plugin[key];
        if (pluginLife) {
          this.lifecycle[key].on(pluginLife);
        }
      });
    }
  }
  removePlugin(pluginName) {
    share.assert(pluginName, 'A name is required.');
    const plugin = this.registerPlugins[pluginName];
    share.assert(plugin, `The plugin "${pluginName}" is not registered.`);
    Object.keys(plugin).forEach(key => {
      if (key !== 'name') {
        this.lifecycle[key].remove(plugin[key]);
      }
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-shadow
  inherit({
    lifecycle,
    registerPlugins
  }) {
    Object.keys(lifecycle).forEach(hookName => {
      share.assert(!this.lifecycle[hookName], `The hook "${hookName}" has a conflict and cannot be inherited.`);
      this.lifecycle[hookName] = lifecycle[hookName];
    });
    Object.keys(registerPlugins).forEach(pluginName => {
      share.assert(!this.registerPlugins[pluginName], `The plugin "${pluginName}" has a conflict and cannot be inherited.`);
      this.applyPlugin(registerPlugins[pluginName]);
    });
  }
  constructor(lifecycle) {
    this.registerPlugins = {};
    this.lifecycle = lifecycle;
    this.lifecycleKeys = Object.keys(lifecycle);
  }
}
function defaultPreloadArgs(preloadConfig) {
  return polyfills._extends({
    resourceCategory: 'sync',
    share: true,
    depsRemote: true,
    prefetchInterface: false
  }, preloadConfig);
}
function formatPreloadArgs(remotes, preloadArgs) {
  return preloadArgs.map(args => {
    const remoteInfo = matchRemote(remotes, args.nameOrAlias);
    share.assert(remoteInfo, `Unable to preload ${args.nameOrAlias} as it is not included in ${!remoteInfo && sdk.safeToString({
      remoteInfo,
      remotes
    })}`);
    return {
      remote: remoteInfo,
      preloadConfig: defaultPreloadArgs(args)
    };
  });
}
function normalizePreloadExposes(exposes) {
  if (!exposes) {
    return [];
  }
  return exposes.map(expose => {
    if (expose === '.') {
      return expose;
    }
    if (expose.startsWith('./')) {
      return expose.replace('./', '');
    }
    return expose;
  });
}
function preloadAssets(remoteInfo, host, assets,
// It is used to distinguish preload from load remote parallel loading
useLinkPreload = true) {
  const {
    cssAssets,
    jsAssetsWithoutEntry,
    entryAssets
  } = assets;
  if (host.options.inBrowser) {
    entryAssets.forEach(asset => {
      const {
        moduleInfo
      } = asset;
      const module = host.moduleCache.get(remoteInfo.name);
      if (module) {
        getRemoteEntry({
          origin: host,
          remoteInfo: moduleInfo,
          remoteEntryExports: module.remoteEntryExports
        });
      } else {
        getRemoteEntry({
          origin: host,
          remoteInfo: moduleInfo,
          remoteEntryExports: undefined
        });
      }
    });
    if (useLinkPreload) {
      const defaultAttrs = {
        rel: 'preload',
        as: 'style',
        crossorigin: 'anonymous'
      };
      cssAssets.forEach(cssUrl => {
        const {
          link: cssEl,
          needAttach
        } = sdk.createLink({
          url: cssUrl,
          cb: () => {},
          attrs: defaultAttrs,
          createLinkHook: (url, attrs) => {
            const res = host.loaderHook.lifecycle.createLink.emit({
              url,
              attrs
            });
            if (res instanceof HTMLLinkElement) {
              return res;
            }
            return;
          }
        });
        needAttach && document.head.appendChild(cssEl);
      });
    } else {
      const defaultAttrs = {
        rel: 'stylesheet',
        type: 'text/css'
      };
      cssAssets.forEach(cssUrl => {
        const {
          link: cssEl,
          needAttach
        } = sdk.createLink({
          url: cssUrl,
          cb: () => {},
          attrs: defaultAttrs,
          createLinkHook: (url, attrs) => {
            const res = host.loaderHook.lifecycle.createLink.emit({
              url,
              attrs
            });
            if (res instanceof HTMLLinkElement) {
              return res;
            }
            return;
          },
          needDeleteLink: false
        });
        needAttach && document.head.appendChild(cssEl);
      });
    }
    if (useLinkPreload) {
      const defaultAttrs = {
        rel: 'preload',
        as: 'script',
        crossorigin: 'anonymous'
      };
      jsAssetsWithoutEntry.forEach(jsUrl => {
        const {
          link: linkEl,
          needAttach
        } = sdk.createLink({
          url: jsUrl,
          cb: () => {},
          attrs: defaultAttrs,
          createLinkHook: (url, attrs) => {
            const res = host.loaderHook.lifecycle.createLink.emit({
              url,
              attrs
            });
            if (res instanceof HTMLLinkElement) {
              return res;
            }
            return;
          }
        });
        needAttach && document.head.appendChild(linkEl);
      });
    } else {
      const defaultAttrs = {
        fetchpriority: 'high',
        type: (remoteInfo == null ? void 0 : remoteInfo.type) === 'module' ? 'module' : 'text/javascript'
      };
      jsAssetsWithoutEntry.forEach(jsUrl => {
        const {
          script: scriptEl,
          needAttach
        } = sdk.createScript({
          url: jsUrl,
          cb: () => {},
          attrs: defaultAttrs,
          createScriptHook: (url, attrs) => {
            const res = host.loaderHook.lifecycle.createScript.emit({
              url,
              attrs
            });
            if (res instanceof HTMLScriptElement) {
              return res;
            }
            return;
          },
          needDeleteScript: true
        });
        needAttach && document.head.appendChild(scriptEl);
      });
    }
  }
}
function assignRemoteInfo(remoteInfo, remoteSnapshot) {
  const remoteEntryInfo = share.getRemoteEntryInfoFromSnapshot(remoteSnapshot);
  if (!remoteEntryInfo.url) {
    share.error(`The attribute remoteEntry of ${remoteInfo.name} must not be undefined.`);
  }
  let entryUrl = sdk.getResourceUrl(remoteSnapshot, remoteEntryInfo.url);
  if (!sdk.isBrowserEnv() && !entryUrl.startsWith('http')) {
    entryUrl = `https:${entryUrl}`;
  }
  remoteInfo.type = remoteEntryInfo.type;
  remoteInfo.entryGlobalName = remoteEntryInfo.globalName;
  remoteInfo.entry = entryUrl;
  remoteInfo.version = remoteSnapshot.version;
  remoteInfo.buildVersion = remoteSnapshot.buildVersion;
}
function snapshotPlugin() {
  return {
    name: 'snapshot-plugin',
    afterResolve(args) {
      return _asyncToGenerator(function* () {
        const {
          remote,
          pkgNameOrAlias,
          expose,
          origin,
          remoteInfo
        } = args;
        if (!share.isRemoteInfoWithEntry(remote) || !share.isPureRemoteEntry(remote)) {
          const {
            remoteSnapshot,
            globalSnapshot
          } = yield origin.snapshotHandler.loadRemoteSnapshotInfo(remote);
          assignRemoteInfo(remoteInfo, remoteSnapshot);
          // preloading assets
          const preloadOptions = {
            remote,
            preloadConfig: {
              nameOrAlias: pkgNameOrAlias,
              exposes: [expose],
              resourceCategory: 'sync',
              share: false,
              depsRemote: false
            }
          };
          const assets = yield origin.remoteHandler.hooks.lifecycle.generatePreloadAssets.emit({
            origin,
            preloadOptions,
            remoteInfo,
            remote,
            remoteSnapshot,
            globalSnapshot
          });
          if (assets) {
            preloadAssets(remoteInfo, origin, assets, false);
          }
          return polyfills._extends({}, args, {
            remoteSnapshot
          });
        }
        return args;
      })();
    }
  };
}

// name
// name:version
function splitId(id) {
  const splitInfo = id.split(':');
  if (splitInfo.length === 1) {
    return {
      name: splitInfo[0],
      version: undefined
    };
  } else if (splitInfo.length === 2) {
    return {
      name: splitInfo[0],
      version: splitInfo[1]
    };
  } else {
    return {
      name: splitInfo[1],
      version: splitInfo[2]
    };
  }
}
// Traverse all nodes in moduleInfo and traverse the entire snapshot
function traverseModuleInfo(globalSnapshot, remoteInfo, traverse, isRoot, memo = {}, remoteSnapshot) {
  const id = share.getFMId(remoteInfo);
  const {
    value: snapshotValue
  } = share.getInfoWithoutType(globalSnapshot, id);
  const effectiveRemoteSnapshot = remoteSnapshot || snapshotValue;
  if (effectiveRemoteSnapshot && !sdk.isManifestProvider(effectiveRemoteSnapshot)) {
    traverse(effectiveRemoteSnapshot, remoteInfo, isRoot);
    if (effectiveRemoteSnapshot.remotesInfo) {
      const remoteKeys = Object.keys(effectiveRemoteSnapshot.remotesInfo);
      for (const key of remoteKeys) {
        if (memo[key]) {
          continue;
        }
        memo[key] = true;
        const subRemoteInfo = splitId(key);
        const remoteValue = effectiveRemoteSnapshot.remotesInfo[key];
        traverseModuleInfo(globalSnapshot, {
          name: subRemoteInfo.name,
          version: remoteValue.matchedVersion
        }, traverse, false, memo, undefined);
      }
    }
  }
}
// eslint-disable-next-line max-lines-per-function
function generatePreloadAssets(origin, preloadOptions, remote, globalSnapshot, remoteSnapshot) {
  const cssAssets = [];
  const jsAssets = [];
  const entryAssets = [];
  const loadedSharedJsAssets = new Set();
  const loadedSharedCssAssets = new Set();
  const {
    options
  } = origin;
  const {
    preloadConfig: rootPreloadConfig
  } = preloadOptions;
  const {
    depsRemote
  } = rootPreloadConfig;
  const memo = {};
  traverseModuleInfo(globalSnapshot, remote, (moduleInfoSnapshot, remoteInfo, isRoot) => {
    let preloadConfig;
    if (isRoot) {
      preloadConfig = rootPreloadConfig;
    } else {
      if (Array.isArray(depsRemote)) {
        // eslint-disable-next-line array-callback-return
        const findPreloadConfig = depsRemote.find(remoteConfig => {
          if (remoteConfig.nameOrAlias === remoteInfo.name || remoteConfig.nameOrAlias === remoteInfo.alias) {
            return true;
          }
          return false;
        });
        if (!findPreloadConfig) {
          return;
        }
        preloadConfig = defaultPreloadArgs(findPreloadConfig);
      } else if (depsRemote === true) {
        preloadConfig = rootPreloadConfig;
      } else {
        return;
      }
    }
    const remoteEntryUrl = sdk.getResourceUrl(moduleInfoSnapshot, share.getRemoteEntryInfoFromSnapshot(moduleInfoSnapshot).url);
    if (remoteEntryUrl) {
      entryAssets.push({
        name: remoteInfo.name,
        moduleInfo: {
          name: remoteInfo.name,
          entry: remoteEntryUrl,
          type: 'remoteEntryType' in moduleInfoSnapshot ? moduleInfoSnapshot.remoteEntryType : 'global',
          entryGlobalName: 'globalName' in moduleInfoSnapshot ? moduleInfoSnapshot.globalName : remoteInfo.name,
          shareScope: '',
          version: 'version' in moduleInfoSnapshot ? moduleInfoSnapshot.version : undefined
        },
        url: remoteEntryUrl
      });
    }
    let moduleAssetsInfo = 'modules' in moduleInfoSnapshot ? moduleInfoSnapshot.modules : [];
    const normalizedPreloadExposes = normalizePreloadExposes(preloadConfig.exposes);
    if (normalizedPreloadExposes.length && 'modules' in moduleInfoSnapshot) {
      var _moduleInfoSnapshot_modules;
      moduleAssetsInfo = moduleInfoSnapshot == null ? void 0 : (_moduleInfoSnapshot_modules = moduleInfoSnapshot.modules) == null ? void 0 : _moduleInfoSnapshot_modules.reduce((assets, moduleAssetInfo) => {
        if ((normalizedPreloadExposes == null ? void 0 : normalizedPreloadExposes.indexOf(moduleAssetInfo.moduleName)) !== -1) {
          assets.push(moduleAssetInfo);
        }
        return assets;
      }, []);
    }
    function handleAssets(assets) {
      const assetsRes = assets.map(asset => sdk.getResourceUrl(moduleInfoSnapshot, asset));
      if (preloadConfig.filter) {
        return assetsRes.filter(preloadConfig.filter);
      }
      return assetsRes;
    }
    if (moduleAssetsInfo) {
      const assetsLength = moduleAssetsInfo.length;
      for (let index = 0; index < assetsLength; index++) {
        const assetsInfo = moduleAssetsInfo[index];
        const exposeFullPath = `${remoteInfo.name}/${assetsInfo.moduleName}`;
        origin.remoteHandler.hooks.lifecycle.handlePreloadModule.emit({
          id: assetsInfo.moduleName === '.' ? remoteInfo.name : exposeFullPath,
          name: remoteInfo.name,
          remoteSnapshot: moduleInfoSnapshot,
          preloadConfig,
          remote: remoteInfo,
          origin
        });
        const preloaded = share.getPreloaded(exposeFullPath);
        if (preloaded) {
          continue;
        }
        if (preloadConfig.resourceCategory === 'all') {
          cssAssets.push(...handleAssets(assetsInfo.assets.css.async));
          cssAssets.push(...handleAssets(assetsInfo.assets.css.sync));
          jsAssets.push(...handleAssets(assetsInfo.assets.js.async));
          jsAssets.push(...handleAssets(assetsInfo.assets.js.sync));
          // eslint-disable-next-line no-constant-condition
        } else if (preloadConfig.resourceCategory = 'sync') {
          cssAssets.push(...handleAssets(assetsInfo.assets.css.sync));
          jsAssets.push(...handleAssets(assetsInfo.assets.js.sync));
        }
        share.setPreloaded(exposeFullPath);
      }
    }
  }, true, memo, remoteSnapshot);
  if (remoteSnapshot.shared) {
    const collectSharedAssets = (shareInfo, snapshotShared) => {
      const registeredShared = share.getRegisteredShare(origin.shareScopeMap, snapshotShared.sharedName, shareInfo, origin.sharedHandler.hooks.lifecycle.resolveShare);
      // If the global share does not exist, or the lib function does not exist, it means that the shared has not been loaded yet and can be preloaded.
      if (registeredShared && typeof registeredShared.lib === 'function') {
        snapshotShared.assets.js.sync.forEach(asset => {
          loadedSharedJsAssets.add(asset);
        });
        snapshotShared.assets.css.sync.forEach(asset => {
          loadedSharedCssAssets.add(asset);
        });
      }
    };
    remoteSnapshot.shared.forEach(shared => {
      var _options_shared;
      const shareInfos = (_options_shared = options.shared) == null ? void 0 : _options_shared[shared.sharedName];
      if (!shareInfos) {
        return;
      }
      // if no version, preload all shared
      const sharedOptions = shared.version ? shareInfos.find(s => s.version === shared.version) : shareInfos;
      if (!sharedOptions) {
        return;
      }
      const arrayShareInfo = share.arrayOptions(sharedOptions);
      arrayShareInfo.forEach(s => {
        collectSharedAssets(s, shared);
      });
    });
  }
  const needPreloadJsAssets = jsAssets.filter(asset => !loadedSharedJsAssets.has(asset));
  const needPreloadCssAssets = cssAssets.filter(asset => !loadedSharedCssAssets.has(asset));
  return {
    cssAssets: needPreloadCssAssets,
    jsAssetsWithoutEntry: needPreloadJsAssets,
    entryAssets
  };
}
const generatePreloadAssetsPlugin = function () {
  return {
    name: 'generate-preload-assets-plugin',
    generatePreloadAssets(args) {
      return _asyncToGenerator(function* () {
        const {
          origin,
          preloadOptions,
          remoteInfo,
          remote,
          globalSnapshot,
          remoteSnapshot
        } = args;
        if (share.isRemoteInfoWithEntry(remote) && share.isPureRemoteEntry(remote)) {
          return {
            cssAssets: [],
            jsAssetsWithoutEntry: [],
            entryAssets: [{
              name: remote.name,
              url: remote.entry,
              moduleInfo: {
                name: remoteInfo.name,
                entry: remote.entry,
                type: remoteInfo.type || 'global',
                entryGlobalName: '',
                shareScope: ''
              }
            }]
          };
        }
        assignRemoteInfo(remoteInfo, remoteSnapshot);
        const assets = generatePreloadAssets(origin, preloadOptions, remoteInfo, globalSnapshot, remoteSnapshot);
        return assets;
      })();
    }
  };
};
function getGlobalRemoteInfo(moduleInfo, origin) {
  const hostGlobalSnapshot = share.getGlobalSnapshotInfoByModuleInfo({
    name: origin.options.name,
    version: origin.options.version
  });
  // get remote detail info from global
  const globalRemoteInfo = hostGlobalSnapshot && 'remotesInfo' in hostGlobalSnapshot && hostGlobalSnapshot.remotesInfo && share.getInfoWithoutType(hostGlobalSnapshot.remotesInfo, moduleInfo.name).value;
  if (globalRemoteInfo && globalRemoteInfo.matchedVersion) {
    return {
      hostGlobalSnapshot,
      globalSnapshot: share.getGlobalSnapshot(),
      remoteSnapshot: share.getGlobalSnapshotInfoByModuleInfo({
        name: moduleInfo.name,
        version: globalRemoteInfo.matchedVersion
      })
    };
  }
  return {
    hostGlobalSnapshot: undefined,
    globalSnapshot: share.getGlobalSnapshot(),
    remoteSnapshot: share.getGlobalSnapshotInfoByModuleInfo({
      name: moduleInfo.name,
      version: 'version' in moduleInfo ? moduleInfo.version : undefined
    })
  };
}
class SnapshotHandler {
  loadSnapshot(moduleInfo) {
    var _this3 = this;
    return _asyncToGenerator(function* () {
      const {
        options
      } = _this3.HostInstance;
      const {
        hostGlobalSnapshot,
        remoteSnapshot,
        globalSnapshot
      } = _this3.getGlobalRemoteInfo(moduleInfo);
      const {
        remoteSnapshot: globalRemoteSnapshot,
        globalSnapshot: globalSnapshotRes
      } = yield _this3.hooks.lifecycle.loadSnapshot.emit({
        options,
        moduleInfo,
        hostGlobalSnapshot,
        remoteSnapshot,
        globalSnapshot
      });
      return {
        remoteSnapshot: globalRemoteSnapshot,
        globalSnapshot: globalSnapshotRes
      };
    })();
  }
  // eslint-disable-next-line max-lines-per-function
  loadRemoteSnapshotInfo(moduleInfo) {
    var _this4 = this;
    return _asyncToGenerator(function* () {
      const {
        options
      } = _this4.HostInstance;
      yield _this4.hooks.lifecycle.beforeLoadRemoteSnapshot.emit({
        options,
        moduleInfo
      });
      let hostSnapshot = share.getGlobalSnapshotInfoByModuleInfo({
        name: _this4.HostInstance.options.name,
        version: _this4.HostInstance.options.version
      });
      if (!hostSnapshot) {
        hostSnapshot = {
          version: _this4.HostInstance.options.version || '',
          remoteEntry: '',
          remotesInfo: {}
        };
        share.addGlobalSnapshot({
          [_this4.HostInstance.options.name]: hostSnapshot
        });
      }
      // In dynamic loadRemote scenarios, incomplete remotesInfo delivery may occur. In such cases, the remotesInfo in the host needs to be completed in the snapshot at runtime.
      // This ensures the snapshot's integrity and helps the chrome plugin correctly identify all producer modules, ensuring that proxyable producer modules will not be missing.
      if (hostSnapshot && 'remotesInfo' in hostSnapshot && !share.getInfoWithoutType(hostSnapshot.remotesInfo, moduleInfo.name).value) {
        if ('version' in moduleInfo || 'entry' in moduleInfo) {
          hostSnapshot.remotesInfo = polyfills._extends({}, hostSnapshot == null ? void 0 : hostSnapshot.remotesInfo, {
            [moduleInfo.name]: {
              matchedVersion: 'version' in moduleInfo ? moduleInfo.version : moduleInfo.entry
            }
          });
        }
      }
      const {
        hostGlobalSnapshot,
        remoteSnapshot,
        globalSnapshot
      } = _this4.getGlobalRemoteInfo(moduleInfo);
      const {
        remoteSnapshot: globalRemoteSnapshot,
        globalSnapshot: globalSnapshotRes
      } = yield _this4.hooks.lifecycle.loadSnapshot.emit({
        options,
        moduleInfo,
        hostGlobalSnapshot,
        remoteSnapshot,
        globalSnapshot
      });
      // global snapshot includes manifest or module info includes manifest
      if (globalRemoteSnapshot) {
        if (sdk.isManifestProvider(globalRemoteSnapshot)) {
          const remoteEntry = sdk.isBrowserEnv() ? globalRemoteSnapshot.remoteEntry : globalRemoteSnapshot.ssrRemoteEntry || globalRemoteSnapshot.remoteEntry || '';
          const moduleSnapshot = yield _this4.getManifestJson(remoteEntry, moduleInfo, {});
          // eslint-disable-next-line @typescript-eslint/no-shadow
          const globalSnapshotRes = share.setGlobalSnapshotInfoByModuleInfo(polyfills._extends({}, moduleInfo, {
            // The global remote may be overridden
            // Therefore, set the snapshot key to the global address of the actual request
            entry: remoteEntry
          }), moduleSnapshot);
          return {
            remoteSnapshot: moduleSnapshot,
            globalSnapshot: globalSnapshotRes
          };
        } else {
          const {
            remoteSnapshot: remoteSnapshotRes
          } = yield _this4.hooks.lifecycle.loadRemoteSnapshot.emit({
            options: _this4.HostInstance.options,
            moduleInfo,
            remoteSnapshot: globalRemoteSnapshot,
            from: 'global'
          });
          return {
            remoteSnapshot: remoteSnapshotRes,
            globalSnapshot: globalSnapshotRes
          };
        }
      } else {
        if (share.isRemoteInfoWithEntry(moduleInfo)) {
          // get from manifest.json and merge remote info from remote server
          const moduleSnapshot = yield _this4.getManifestJson(moduleInfo.entry, moduleInfo, {});
          // eslint-disable-next-line @typescript-eslint/no-shadow
          const globalSnapshotRes = share.setGlobalSnapshotInfoByModuleInfo(moduleInfo, moduleSnapshot);
          const {
            remoteSnapshot: remoteSnapshotRes
          } = yield _this4.hooks.lifecycle.loadRemoteSnapshot.emit({
            options: _this4.HostInstance.options,
            moduleInfo,
            remoteSnapshot: moduleSnapshot,
            from: 'global'
          });
          return {
            remoteSnapshot: remoteSnapshotRes,
            globalSnapshot: globalSnapshotRes
          };
        } else {
          share.error(`
          Cannot get remoteSnapshot with the name: '${moduleInfo.name}', version: '${moduleInfo.version}' from __FEDERATION__.moduleInfo. The following reasons may be causing the problem:\n
          1. The Deploy platform did not deliver the correct data. You can use __FEDERATION__.moduleInfo to check the remoteInfo.\n
          2. The remote '${moduleInfo.name}' version '${moduleInfo.version}' is not released.\n
          The transformed module info: ${JSON.stringify(globalSnapshotRes)}
        `);
        }
      }
    })();
  }
  getGlobalRemoteInfo(moduleInfo) {
    return getGlobalRemoteInfo(moduleInfo, this.HostInstance);
  }
  getManifestJson(manifestUrl, moduleInfo, extraOptions) {
    var _this5 = this;
    return _asyncToGenerator(function* () {
      const getManifest = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator(function* () {
          let manifestJson = _this5.manifestCache.get(manifestUrl);
          if (manifestJson) {
            return manifestJson;
          }
          try {
            let res = yield _this5.loaderHook.lifecycle.fetch.emit(manifestUrl, {});
            if (!res || !(res instanceof Response)) {
              res = yield fetch(manifestUrl, {});
            }
            manifestJson = yield res.json();
            share.assert(manifestJson.metaData && manifestJson.exposes && manifestJson.shared, `${manifestUrl} is not a federation manifest`);
            _this5.manifestCache.set(manifestUrl, manifestJson);
            return manifestJson;
          } catch (err) {
            delete _this5.manifestLoading[manifestUrl];
            share.error(`Failed to get manifestJson for ${moduleInfo.name}. The manifest URL is ${manifestUrl}. Please ensure that the manifestUrl is accessible.
          \n Error message:
          \n ${err}`);
          }
        });
        return function getManifest() {
          return _ref2.apply(this, arguments);
        };
      }();
      const asyncLoadProcess = /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator(function* () {
          const manifestJson = yield getManifest();
          const remoteSnapshot = sdk.generateSnapshotFromManifest(manifestJson, {
            version: manifestUrl
          });
          const {
            remoteSnapshot: remoteSnapshotRes
          } = yield _this5.hooks.lifecycle.loadRemoteSnapshot.emit({
            options: _this5.HostInstance.options,
            moduleInfo,
            manifestJson,
            remoteSnapshot,
            manifestUrl,
            from: 'manifest'
          });
          return remoteSnapshotRes;
        });
        return function asyncLoadProcess() {
          return _ref3.apply(this, arguments);
        };
      }();
      if (!_this5.manifestLoading[manifestUrl]) {
        _this5.manifestLoading[manifestUrl] = asyncLoadProcess().then(res => res);
      }
      return _this5.manifestLoading[manifestUrl];
    })();
  }
  constructor(HostInstance) {
    this.loadingHostSnapshot = null;
    this.manifestCache = new Map();
    this.hooks = new PluginSystem({
      beforeLoadRemoteSnapshot: new AsyncHook('beforeLoadRemoteSnapshot'),
      loadSnapshot: new AsyncWaterfallHook('loadGlobalSnapshot'),
      loadRemoteSnapshot: new AsyncWaterfallHook('loadRemoteSnapshot')
    });
    this.manifestLoading = share.Global.__FEDERATION__.__MANIFEST_LOADING__;
    this.HostInstance = HostInstance;
    this.loaderHook = HostInstance.loaderHook;
  }
}
class SharedHandler {
  // register shared in shareScopeMap
  registerShared(globalOptions, userOptions) {
    const {
      shareInfos,
      shared
    } = share.formatShareConfigs(globalOptions, userOptions);
    const sharedKeys = Object.keys(shareInfos);
    sharedKeys.forEach(sharedKey => {
      const sharedVals = shareInfos[sharedKey];
      sharedVals.forEach(sharedVal => {
        const registeredShared = share.getRegisteredShare(this.shareScopeMap, sharedKey, sharedVal, this.hooks.lifecycle.resolveShare);
        if (!registeredShared && sharedVal && sharedVal.lib) {
          this.setShared({
            pkgName: sharedKey,
            lib: sharedVal.lib,
            get: sharedVal.get,
            loaded: true,
            shared: sharedVal,
            from: userOptions.name
          });
        }
      });
    });
    return {
      shareInfos,
      shared
    };
  }
  loadShare(pkgName, extraOptions) {
    var _this6 = this;
    return _asyncToGenerator(function* () {
      const {
        host
      } = _this6;
      // This function performs the following steps:
      // 1. Checks if the currently loaded share already exists, if not, it throws an error
      // 2. Searches globally for a matching share, if found, it uses it directly
      // 3. If not found, it retrieves it from the current share and stores the obtained share globally.
      const shareInfo = share.getTargetSharedOptions({
        pkgName,
        extraOptions,
        shareInfos: host.options.shared
      });
      if (shareInfo == null ? void 0 : shareInfo.scope) {
        yield Promise.all(shareInfo.scope.map( /*#__PURE__*/function () {
          var _ref4 = _asyncToGenerator(function* (shareScope) {
            yield Promise.all(_this6.initializeSharing(shareScope, {
              strategy: shareInfo.strategy
            }));
            return;
          });
          return function (_x7) {
            return _ref4.apply(this, arguments);
          };
        }()));
      }
      const loadShareRes = yield _this6.hooks.lifecycle.beforeLoadShare.emit({
        pkgName,
        shareInfo,
        shared: host.options.shared,
        origin: host
      });
      const {
        shareInfo: shareInfoRes
      } = loadShareRes;
      // Assert that shareInfoRes exists, if not, throw an error
      share.assert(shareInfoRes, `Cannot find ${pkgName} Share in the ${host.options.name}. Please ensure that the ${pkgName} Share parameters have been injected`);
      // Retrieve from cache
      const registeredShared = share.getRegisteredShare(_this6.shareScopeMap, pkgName, shareInfoRes, _this6.hooks.lifecycle.resolveShare);
      const addUseIn = shared => {
        if (!shared.useIn) {
          shared.useIn = [];
        }
        share.addUniqueItem(shared.useIn, host.options.name);
      };
      if (registeredShared && registeredShared.lib) {
        addUseIn(registeredShared);
        return registeredShared.lib;
      } else if (registeredShared && registeredShared.loading && !registeredShared.loaded) {
        const factory = yield registeredShared.loading;
        registeredShared.loaded = true;
        if (!registeredShared.lib) {
          registeredShared.lib = factory;
        }
        addUseIn(registeredShared);
        return factory;
      } else if (registeredShared) {
        const asyncLoadProcess = /*#__PURE__*/function () {
          var _ref5 = _asyncToGenerator(function* () {
            const factory = yield registeredShared.get();
            shareInfoRes.lib = factory;
            shareInfoRes.loaded = true;
            addUseIn(shareInfoRes);
            const gShared = share.getRegisteredShare(_this6.shareScopeMap, pkgName, shareInfoRes, _this6.hooks.lifecycle.resolveShare);
            if (gShared) {
              gShared.lib = factory;
              gShared.loaded = true;
            }
            return factory;
          });
          return function asyncLoadProcess() {
            return _ref5.apply(this, arguments);
          };
        }();
        const loading = asyncLoadProcess();
        _this6.setShared({
          pkgName,
          loaded: false,
          shared: registeredShared,
          from: host.options.name,
          lib: null,
          loading
        });
        return loading;
      } else {
        if (extraOptions == null ? void 0 : extraOptions.customShareInfo) {
          return false;
        }
        const asyncLoadProcess = /*#__PURE__*/function () {
          var _ref6 = _asyncToGenerator(function* () {
            const factory = yield shareInfoRes.get();
            shareInfoRes.lib = factory;
            shareInfoRes.loaded = true;
            addUseIn(shareInfoRes);
            const gShared = share.getRegisteredShare(_this6.shareScopeMap, pkgName, shareInfoRes, _this6.hooks.lifecycle.resolveShare);
            if (gShared) {
              gShared.lib = factory;
              gShared.loaded = true;
            }
            return factory;
          });
          return function asyncLoadProcess() {
            return _ref6.apply(this, arguments);
          };
        }();
        const loading = asyncLoadProcess();
        _this6.setShared({
          pkgName,
          loaded: false,
          shared: shareInfoRes,
          from: host.options.name,
          lib: null,
          loading
        });
        return loading;
      }
    })();
  }
  /**
  * This function initializes the sharing sequence (executed only once per share scope).
  * It accepts one argument, the name of the share scope.
  * If the share scope does not exist, it creates one.
  */ // eslint-disable-next-line @typescript-eslint/member-ordering
  initializeSharing(shareScopeName = share.DEFAULT_SCOPE, extraOptions) {
    const {
      host
    } = this;
    const from = extraOptions == null ? void 0 : extraOptions.from;
    const strategy = extraOptions == null ? void 0 : extraOptions.strategy;
    let initScope = extraOptions == null ? void 0 : extraOptions.initScope;
    const promises = [];
    if (from !== 'build') {
      const {
        initTokens
      } = this;
      if (!initScope) initScope = [];
      let initToken = initTokens[shareScopeName];
      if (!initToken) initToken = initTokens[shareScopeName] = {
        from: this.host.name
      };
      if (initScope.indexOf(initToken) >= 0) return promises;
      initScope.push(initToken);
    }
    const shareScope = this.shareScopeMap;
    const hostName = host.options.name;
    // Creates a new share scope if necessary
    if (!shareScope[shareScopeName]) {
      shareScope[shareScopeName] = {};
    }
    // Executes all initialization snippets from all accessible modules
    const scope = shareScope[shareScopeName];
    const register = (name, shared) => {
      var _activeVersion_shareConfig;
      const {
        version,
        eager
      } = shared;
      scope[name] = scope[name] || {};
      const versions = scope[name];
      const activeVersion = versions[version];
      const activeVersionEager = Boolean(activeVersion && (activeVersion.eager || ((_activeVersion_shareConfig = activeVersion.shareConfig) == null ? void 0 : _activeVersion_shareConfig.eager)));
      if (!activeVersion || activeVersion.strategy !== 'loaded-first' && !activeVersion.loaded && (Boolean(!eager) !== !activeVersionEager ? eager : hostName > activeVersion.from)) {
        versions[version] = shared;
      }
    };
    const initFn = mod => mod && mod.init && mod.init(shareScope[shareScopeName], initScope);
    const initRemoteModule = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(function* (key) {
        const {
          module
        } = yield host.remoteHandler.getRemoteModuleAndOptions({
          id: key
        });
        if (module.getEntry) {
          let remoteEntryExports;
          try {
            remoteEntryExports = yield module.getEntry();
          } catch (error) {
            remoteEntryExports = yield host.remoteHandler.hooks.lifecycle.errorLoadRemote.emit({
              id: key,
              error,
              from: 'runtime',
              lifecycle: 'beforeLoadShare',
              origin: host
            });
          }
          if (!module.inited) {
            yield initFn(remoteEntryExports);
            module.inited = true;
          }
        }
      });
      return function initRemoteModule(_x8) {
        return _ref7.apply(this, arguments);
      };
    }();
    Object.keys(host.options.shared).forEach(shareName => {
      const sharedArr = host.options.shared[shareName];
      sharedArr.forEach(shared => {
        if (shared.scope.includes(shareScopeName)) {
          register(shareName, shared);
        }
      });
    });
    // TODO: strategy==='version-first' need to be removed in the future
    if (host.options.shareStrategy === 'version-first' || strategy === 'version-first') {
      host.options.remotes.forEach(remote => {
        if (remote.shareScope === shareScopeName) {
          promises.push(initRemoteModule(remote.name));
        }
      });
    }
    return promises;
  }
  // The lib function will only be available if the shared set by eager or runtime init is set or the shared is successfully loaded.
  // 1. If the loaded shared already exists globally, then it will be reused
  // 2. If lib exists in local shared, it will be used directly
  // 3. If the local get returns something other than Promise, then it will be used directly
  loadShareSync(pkgName, extraOptions) {
    const {
      host
    } = this;
    const shareInfo = share.getTargetSharedOptions({
      pkgName,
      extraOptions,
      shareInfos: host.options.shared
    });
    if (shareInfo == null ? void 0 : shareInfo.scope) {
      shareInfo.scope.forEach(shareScope => {
        this.initializeSharing(shareScope, {
          strategy: shareInfo.strategy
        });
      });
    }
    const registeredShared = share.getRegisteredShare(this.shareScopeMap, pkgName, shareInfo, this.hooks.lifecycle.resolveShare);
    const addUseIn = shared => {
      if (!shared.useIn) {
        shared.useIn = [];
      }
      share.addUniqueItem(shared.useIn, host.options.name);
    };
    if (registeredShared) {
      if (typeof registeredShared.lib === 'function') {
        addUseIn(registeredShared);
        if (!registeredShared.loaded) {
          registeredShared.loaded = true;
          if (registeredShared.from === host.options.name) {
            shareInfo.loaded = true;
          }
        }
        return registeredShared.lib;
      }
      if (typeof registeredShared.get === 'function') {
        const module = registeredShared.get();
        if (!(module instanceof Promise)) {
          addUseIn(registeredShared);
          this.setShared({
            pkgName,
            loaded: true,
            from: host.options.name,
            lib: module,
            shared: registeredShared
          });
          return module;
        }
      }
    }
    if (shareInfo.lib) {
      if (!shareInfo.loaded) {
        shareInfo.loaded = true;
      }
      return shareInfo.lib;
    }
    if (shareInfo.get) {
      const module = shareInfo.get();
      if (module instanceof Promise) {
        throw new Error(`
        The loadShareSync function was unable to load ${pkgName}. The ${pkgName} could not be found in ${host.options.name}.
        Possible reasons for failure: \n
        1. The ${pkgName} share was registered with the 'get' attribute, but loadShare was not used beforehand.\n
        2. The ${pkgName} share was not registered with the 'lib' attribute.\n
      `);
      }
      shareInfo.lib = module;
      this.setShared({
        pkgName,
        loaded: true,
        from: host.options.name,
        lib: shareInfo.lib,
        shared: shareInfo
      });
      return shareInfo.lib;
    }
    throw new Error(`
        The loadShareSync function was unable to load ${pkgName}. The ${pkgName} could not be found in ${host.options.name}.
        Possible reasons for failure: \n
        1. The ${pkgName} share was registered with the 'get' attribute, but loadShare was not used beforehand.\n
        2. The ${pkgName} share was not registered with the 'lib' attribute.\n
      `);
  }
  initShareScopeMap(scopeName, shareScope, extraOptions = {}) {
    const {
      host
    } = this;
    this.shareScopeMap[scopeName] = shareScope;
    this.hooks.lifecycle.initContainerShareScopeMap.emit({
      shareScope,
      options: host.options,
      origin: host,
      scopeName,
      hostShareScopeMap: extraOptions.hostShareScopeMap
    });
  }
  setShared({
    pkgName,
    shared,
    from,
    lib,
    loading,
    loaded,
    get
  }) {
    const {
        version,
        scope = 'default'
      } = shared,
      shareInfo = polyfills._object_without_properties_loose(shared, ["version", "scope"]);
    const scopes = Array.isArray(scope) ? scope : [scope];
    scopes.forEach(sc => {
      if (!this.shareScopeMap[sc]) {
        this.shareScopeMap[sc] = {};
      }
      if (!this.shareScopeMap[sc][pkgName]) {
        this.shareScopeMap[sc][pkgName] = {};
      }
      if (!this.shareScopeMap[sc][pkgName][version]) {
        this.shareScopeMap[sc][pkgName][version] = polyfills._extends({
          version,
          scope: ['default']
        }, shareInfo, {
          lib,
          loaded,
          loading
        });
        if (get) {
          this.shareScopeMap[sc][pkgName][version].get = get;
        }
        return;
      }
      const registeredShared = this.shareScopeMap[sc][pkgName][version];
      if (loading && !registeredShared.loading) {
        registeredShared.loading = loading;
      }
    });
  }
  _setGlobalShareScopeMap(hostOptions) {
    const globalShareScopeMap = share.getGlobalShareScope();
    const identifier = hostOptions.id || hostOptions.name;
    if (identifier && !globalShareScopeMap[identifier]) {
      globalShareScopeMap[identifier] = this.shareScopeMap;
    }
  }
  constructor(host) {
    this.hooks = new PluginSystem({
      afterResolve: new AsyncWaterfallHook('afterResolve'),
      beforeLoadShare: new AsyncWaterfallHook('beforeLoadShare'),
      // not used yet
      loadShare: new AsyncHook(),
      resolveShare: new SyncWaterfallHook('resolveShare'),
      // maybe will change, temporarily for internal use only
      initContainerShareScopeMap: new SyncWaterfallHook('initContainerShareScopeMap')
    });
    this.host = host;
    this.shareScopeMap = {};
    this.initTokens = {};
    this._setGlobalShareScopeMap(host.options);
  }
}
class RemoteHandler {
  formatAndRegisterRemote(globalOptions, userOptions) {
    const userRemotes = userOptions.remotes || [];
    return userRemotes.reduce((res, remote) => {
      this.registerRemote(remote, res, {
        force: false
      });
      return res;
    }, globalOptions.remotes);
  }
  setIdToRemoteMap(id, remoteMatchInfo) {
    const {
      remote,
      expose
    } = remoteMatchInfo;
    const {
      name,
      alias
    } = remote;
    this.idToRemoteMap[id] = {
      name: remote.name,
      expose
    };
    if (alias && id.startsWith(name)) {
      const idWithAlias = id.replace(name, alias);
      this.idToRemoteMap[idWithAlias] = {
        name: remote.name,
        expose
      };
      return;
    }
    if (alias && id.startsWith(alias)) {
      const idWithName = id.replace(alias, name);
      this.idToRemoteMap[idWithName] = {
        name: remote.name,
        expose
      };
    }
  }
  // eslint-disable-next-line max-lines-per-function
  // eslint-disable-next-line @typescript-eslint/member-ordering
  loadRemote(id, options) {
    var _this7 = this;
    return _asyncToGenerator(function* () {
      const {
        host
      } = _this7;
      try {
        const {
          loadFactory = true
        } = options || {
          loadFactory: true
        };
        // 1. Validate the parameters of the retrieved module. There are two module request methods: pkgName + expose and alias + expose.
        // 2. Request the snapshot information of the current host and globally store the obtained snapshot information. The retrieved module information is partially offline and partially online. The online module information will retrieve the modules used online.
        // 3. Retrieve the detailed information of the current module from global (remoteEntry address, expose resource address)
        // 4. After retrieving remoteEntry, call the init of the module, and then retrieve the exported content of the module through get
        // id: pkgName(@federation/app1) + expose(button) = @federation/app1/button
        // id: alias(app1) + expose(button) = app1/button
        // id: alias(app1/utils) + expose(loadash/sort) = app1/utils/loadash/sort
        const {
          module,
          moduleOptions,
          remoteMatchInfo
        } = yield _this7.getRemoteModuleAndOptions({
          id
        });
        const {
          pkgNameOrAlias,
          remote,
          expose,
          id: idRes,
          remoteSnapshot
        } = remoteMatchInfo;
        const moduleOrFactory = yield module.get(idRes, expose, options, remoteSnapshot);
        const moduleWrapper = yield _this7.hooks.lifecycle.onLoad.emit({
          id: idRes,
          pkgNameOrAlias,
          expose,
          exposeModule: loadFactory ? moduleOrFactory : undefined,
          exposeModuleFactory: loadFactory ? undefined : moduleOrFactory,
          remote,
          options: moduleOptions,
          moduleInstance: module,
          origin: host
        });
        _this7.setIdToRemoteMap(id, remoteMatchInfo);
        if (typeof moduleWrapper === 'function') {
          return moduleWrapper;
        }
        return moduleOrFactory;
      } catch (error) {
        const {
          from = 'runtime'
        } = options || {
          from: 'runtime'
        };
        const failOver = yield _this7.hooks.lifecycle.errorLoadRemote.emit({
          id,
          error,
          from,
          lifecycle: 'onLoad',
          origin: host
        });
        if (!failOver) {
          throw error;
        }
        return failOver;
      }
    })();
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  preloadRemote(preloadOptions) {
    var _this8 = this;
    return _asyncToGenerator(function* () {
      const {
        host
      } = _this8;
      yield _this8.hooks.lifecycle.beforePreloadRemote.emit({
        preloadOps: preloadOptions,
        options: host.options,
        origin: host
      });
      const preloadOps = formatPreloadArgs(host.options.remotes, preloadOptions);
      yield Promise.all(preloadOps.map( /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator(function* (ops) {
          const {
            remote
          } = ops;
          const remoteInfo = getRemoteInfo(remote);
          const {
            globalSnapshot,
            remoteSnapshot
          } = yield host.snapshotHandler.loadRemoteSnapshotInfo(remote);
          const assets = yield _this8.hooks.lifecycle.generatePreloadAssets.emit({
            origin: host,
            preloadOptions: ops,
            remote,
            remoteInfo,
            globalSnapshot,
            remoteSnapshot
          });
          if (!assets) {
            return;
          }
          preloadAssets(remoteInfo, host, assets);
        });
        return function (_x9) {
          return _ref8.apply(this, arguments);
        };
      }()));
    })();
  }
  registerRemotes(remotes, options) {
    const {
      host
    } = this;
    remotes.forEach(remote => {
      this.registerRemote(remote, host.options.remotes, {
        force: options == null ? void 0 : options.force
      });
    });
  }
  getRemoteModuleAndOptions(options) {
    var _this9 = this;
    return _asyncToGenerator(function* () {
      const {
        host
      } = _this9;
      const {
        id
      } = options;
      let loadRemoteArgs;
      try {
        loadRemoteArgs = yield _this9.hooks.lifecycle.beforeRequest.emit({
          id,
          options: host.options,
          origin: host
        });
      } catch (error) {
        loadRemoteArgs = yield _this9.hooks.lifecycle.errorLoadRemote.emit({
          id,
          options: host.options,
          origin: host,
          from: 'runtime',
          error,
          lifecycle: 'beforeRequest'
        });
        if (!loadRemoteArgs) {
          throw error;
        }
      }
      const {
        id: idRes
      } = loadRemoteArgs;
      const remoteSplitInfo = matchRemoteWithNameAndExpose(host.options.remotes, idRes);
      share.assert(remoteSplitInfo, `
        Unable to locate ${idRes} in ${host.options.name}. Potential reasons for failure include:\n
        1. ${idRes} was not included in the 'remotes' parameter of ${host.options.name || 'the host'}.\n
        2. ${idRes} could not be found in the 'remotes' of ${host.options.name} with either 'name' or 'alias' attributes.
        3. ${idRes} is not online, injected, or loaded.
        4. ${idRes}  cannot be accessed on the expected.
        5. The 'beforeRequest' hook was provided but did not return the correct 'remoteInfo' when attempting to load ${idRes}.
      `);
      const {
        remote: rawRemote
      } = remoteSplitInfo;
      const remoteInfo = getRemoteInfo(rawRemote);
      const matchInfo = yield host.sharedHandler.hooks.lifecycle.afterResolve.emit(polyfills._extends({
        id: idRes
      }, remoteSplitInfo, {
        options: host.options,
        origin: host,
        remoteInfo
      }));
      const {
        remote,
        expose
      } = matchInfo;
      share.assert(remote && expose, `The 'beforeRequest' hook was executed, but it failed to return the correct 'remote' and 'expose' values while loading ${idRes}.`);
      let module = host.moduleCache.get(remote.name);
      const moduleOptions = {
        host: host,
        remoteInfo
      };
      if (!module) {
        module = new Module(moduleOptions);
        host.moduleCache.set(remote.name, module);
      }
      return {
        module,
        moduleOptions,
        remoteMatchInfo: matchInfo
      };
    })();
  }
  registerRemote(remote, targetRemotes, options) {
    const {
      host
    } = this;
    const normalizeRemote = () => {
      if (remote.alias) {
        // Validate if alias equals the prefix of remote.name and remote.alias, if so, throw an error
        // As multi-level path references cannot guarantee unique names, alias being a prefix of remote.name is not supported
        const findEqual = targetRemotes.find(item => {
          var _item_alias;
          return remote.alias && (item.name.startsWith(remote.alias) || ((_item_alias = item.alias) == null ? void 0 : _item_alias.startsWith(remote.alias)));
        });
        share.assert(!findEqual, `The alias ${remote.alias} of remote ${remote.name} is not allowed to be the prefix of ${findEqual && findEqual.name} name or alias`);
      }
      // Set the remote entry to a complete path
      if ('entry' in remote) {
        if (sdk.isBrowserEnv() && !remote.entry.startsWith('http')) {
          remote.entry = new URL(remote.entry, window.location.origin).href;
        }
      }
      if (!remote.shareScope) {
        remote.shareScope = share.DEFAULT_SCOPE;
      }
      if (!remote.type) {
        remote.type = share.DEFAULT_REMOTE_TYPE;
      }
    };
    this.hooks.lifecycle.beforeRegisterRemote.emit({
      remote,
      origin: host
    });
    const registeredRemote = targetRemotes.find(item => item.name === remote.name);
    if (!registeredRemote) {
      normalizeRemote();
      targetRemotes.push(remote);
      this.hooks.lifecycle.registerRemote.emit({
        remote,
        origin: host
      });
    } else {
      const messages = [`The remote "${remote.name}" is already registered.`, (options == null ? void 0 : options.force) ? 'Hope you have known that OVERRIDE it may have some unexpected errors' : 'If you want to merge the remote, you can set "force: true".'];
      if (options == null ? void 0 : options.force) {
        // remove registered remote
        this.removeRemote(registeredRemote);
        normalizeRemote();
        targetRemotes.push(remote);
        this.hooks.lifecycle.registerRemote.emit({
          remote,
          origin: host
        });
      }
      sdk.warn(messages.join(' '));
    }
  }
  removeRemote(remote) {
    try {
      const {
        host
      } = this;
      const {
        name
      } = remote;
      const remoteIndex = host.options.remotes.findIndex(item => item.name === name);
      if (remoteIndex !== -1) {
        host.options.remotes.splice(remoteIndex, 1);
      }
      const loadedModule = host.moduleCache.get(remote.name);
      if (loadedModule) {
        const remoteInfo = loadedModule.remoteInfo;
        const key = remoteInfo.entryGlobalName;
        if (globalThis[key]) {
          var _Object_getOwnPropertyDescriptor;
          if ((_Object_getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor(globalThis, key)) == null ? void 0 : _Object_getOwnPropertyDescriptor.configurable) {
            delete globalThis[key];
          } else {
            // @ts-ignore
            globalThis[key] = undefined;
          }
        }
        const remoteEntryUniqueKey = getRemoteEntryUniqueKey(loadedModule.remoteInfo);
        if (share.globalLoading[remoteEntryUniqueKey]) {
          delete share.globalLoading[remoteEntryUniqueKey];
        }
        host.snapshotHandler.manifestCache.delete(remoteInfo.entry);
        // delete unloaded shared and instance
        let remoteInsId = remoteInfo.buildVersion ? sdk.composeKeyWithSeparator(remoteInfo.name, remoteInfo.buildVersion) : remoteInfo.name;
        const remoteInsIndex = globalThis.__FEDERATION__.__INSTANCES__.findIndex(ins => {
          if (remoteInfo.buildVersion) {
            return ins.options.id === remoteInsId;
          } else {
            return ins.name === remoteInsId;
          }
        });
        if (remoteInsIndex !== -1) {
          const remoteIns = globalThis.__FEDERATION__.__INSTANCES__[remoteInsIndex];
          remoteInsId = remoteIns.options.id || remoteInsId;
          const globalShareScopeMap = share.getGlobalShareScope();
          let isAllSharedNotUsed = true;
          const needDeleteKeys = [];
          Object.keys(globalShareScopeMap).forEach(instId => {
            const shareScopeMap = globalShareScopeMap[instId];
            shareScopeMap && Object.keys(shareScopeMap).forEach(shareScope => {
              const shareScopeVal = shareScopeMap[shareScope];
              shareScopeVal && Object.keys(shareScopeVal).forEach(shareName => {
                const sharedPkgs = shareScopeVal[shareName];
                sharedPkgs && Object.keys(sharedPkgs).forEach(shareVersion => {
                  const shared = sharedPkgs[shareVersion];
                  if (shared && typeof shared === 'object' && shared.from === remoteInfo.name) {
                    if (shared.loaded || shared.loading) {
                      shared.useIn = shared.useIn.filter(usedHostName => usedHostName !== remoteInfo.name);
                      if (shared.useIn.length) {
                        isAllSharedNotUsed = false;
                      } else {
                        needDeleteKeys.push([instId, shareScope, shareName, shareVersion]);
                      }
                    } else {
                      needDeleteKeys.push([instId, shareScope, shareName, shareVersion]);
                    }
                  }
                });
              });
            });
          });
          if (isAllSharedNotUsed) {
            remoteIns.shareScopeMap = {};
            delete globalShareScopeMap[remoteInsId];
          }
          needDeleteKeys.forEach(([insId, shareScope, shareName, shareVersion]) => {
            var _globalShareScopeMap_insId_shareScope_shareName, _globalShareScopeMap_insId_shareScope, _globalShareScopeMap_insId;
            (_globalShareScopeMap_insId = globalShareScopeMap[insId]) == null ? true : (_globalShareScopeMap_insId_shareScope = _globalShareScopeMap_insId[shareScope]) == null ? true : (_globalShareScopeMap_insId_shareScope_shareName = _globalShareScopeMap_insId_shareScope[shareName]) == null ? true : delete _globalShareScopeMap_insId_shareScope_shareName[shareVersion];
          });
          globalThis.__FEDERATION__.__INSTANCES__.splice(remoteInsIndex, 1);
        }
        const {
          hostGlobalSnapshot
        } = getGlobalRemoteInfo(remote, host);
        if (hostGlobalSnapshot) {
          const remoteKey = hostGlobalSnapshot && 'remotesInfo' in hostGlobalSnapshot && hostGlobalSnapshot.remotesInfo && share.getInfoWithoutType(hostGlobalSnapshot.remotesInfo, remote.name).key;
          if (remoteKey) {
            delete hostGlobalSnapshot.remotesInfo[remoteKey];
            if (
            //eslint-disable-next-line no-extra-boolean-cast
            Boolean(share.Global.__FEDERATION__.__MANIFEST_LOADING__[remoteKey])) {
              delete share.Global.__FEDERATION__.__MANIFEST_LOADING__[remoteKey];
            }
          }
        }
        host.moduleCache.delete(remote.name);
      }
    } catch (err) {
      console.log('removeRemote fail: ', err);
    }
  }
  constructor(host) {
    this.hooks = new PluginSystem({
      beforeRegisterRemote: new SyncWaterfallHook('beforeRegisterRemote'),
      registerRemote: new SyncWaterfallHook('registerRemote'),
      beforeRequest: new AsyncWaterfallHook('beforeRequest'),
      onLoad: new AsyncHook('onLoad'),
      handlePreloadModule: new SyncHook('handlePreloadModule'),
      errorLoadRemote: new AsyncHook('errorLoadRemote'),
      beforePreloadRemote: new AsyncHook('beforePreloadRemote'),
      generatePreloadAssets: new AsyncHook('generatePreloadAssets'),
      // not used yet
      afterPreloadRemote: new AsyncHook(),
      loadEntry: new AsyncHook()
    });
    this.host = host;
    this.idToRemoteMap = {};
  }
}
class FederationHost {
  initOptions(userOptions) {
    this.registerPlugins(userOptions.plugins);
    const options = this.formatOptions(this.options, userOptions);
    this.options = options;
    return options;
  }
  loadShare(pkgName, extraOptions) {
    var _this10 = this;
    return _asyncToGenerator(function* () {
      return _this10.sharedHandler.loadShare(pkgName, extraOptions);
    })();
  }
  // The lib function will only be available if the shared set by eager or runtime init is set or the shared is successfully loaded.
  // 1. If the loaded shared already exists globally, then it will be reused
  // 2. If lib exists in local shared, it will be used directly
  // 3. If the local get returns something other than Promise, then it will be used directly
  loadShareSync(pkgName, extraOptions) {
    return this.sharedHandler.loadShareSync(pkgName, extraOptions);
  }
  initializeSharing(shareScopeName = share.DEFAULT_SCOPE, extraOptions) {
    return this.sharedHandler.initializeSharing(shareScopeName, extraOptions);
  }
  initRawContainer(name, url, container) {
    const remoteInfo = getRemoteInfo({
      name,
      entry: url
    });
    const module = new Module({
      host: this,
      remoteInfo
    });
    module.remoteEntryExports = container;
    this.moduleCache.set(name, module);
    return module;
  }
  // eslint-disable-next-line max-lines-per-function
  // eslint-disable-next-line @typescript-eslint/member-ordering
  loadRemote(id, options) {
    var _this11 = this;
    return _asyncToGenerator(function* () {
      return _this11.remoteHandler.loadRemote(id, options);
    })();
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  preloadRemote(preloadOptions) {
    var _this12 = this;
    return _asyncToGenerator(function* () {
      return _this12.remoteHandler.preloadRemote(preloadOptions);
    })();
  }
  initShareScopeMap(scopeName, shareScope, extraOptions = {}) {
    this.sharedHandler.initShareScopeMap(scopeName, shareScope, extraOptions);
  }
  formatOptions(globalOptions, userOptions) {
    const {
      shared
    } = share.formatShareConfigs(globalOptions, userOptions);
    const {
      userOptions: userOptionsRes,
      options: globalOptionsRes
    } = this.hooks.lifecycle.beforeInit.emit({
      origin: this,
      userOptions,
      options: globalOptions,
      shareInfo: shared
    });
    const remotes = this.remoteHandler.formatAndRegisterRemote(globalOptionsRes, userOptionsRes);
    const {
      shared: handledShared
    } = this.sharedHandler.registerShared(globalOptionsRes, userOptionsRes);
    const plugins = [...globalOptionsRes.plugins];
    if (userOptionsRes.plugins) {
      userOptionsRes.plugins.forEach(plugin => {
        if (!plugins.includes(plugin)) {
          plugins.push(plugin);
        }
      });
    }
    const optionsRes = polyfills._extends({}, globalOptions, userOptions, {
      plugins,
      remotes,
      shared: handledShared
    });
    this.hooks.lifecycle.init.emit({
      origin: this,
      options: optionsRes
    });
    return optionsRes;
  }
  registerPlugins(plugins) {
    const pluginRes = registerPlugins$1(plugins, [this.hooks, this.remoteHandler.hooks, this.sharedHandler.hooks, this.snapshotHandler.hooks, this.loaderHook]);
    // Merge plugin
    this.options.plugins = this.options.plugins.reduce((res, plugin) => {
      if (!plugin) return res;
      if (res && !res.find(item => item.name === plugin.name)) {
        res.push(plugin);
      }
      return res;
    }, pluginRes || []);
  }
  registerRemotes(remotes, options) {
    return this.remoteHandler.registerRemotes(remotes, options);
  }
  constructor(userOptions) {
    this.hooks = new PluginSystem({
      beforeInit: new SyncWaterfallHook('beforeInit'),
      init: new SyncHook(),
      // maybe will change, temporarily for internal use only
      beforeInitContainer: new AsyncWaterfallHook('beforeInitContainer'),
      // maybe will change, temporarily for internal use only
      initContainer: new AsyncWaterfallHook('initContainer')
    });
    this.version = "0.6.9";
    this.moduleCache = new Map();
    this.loaderHook = new PluginSystem({
      // FIXME: may not be suitable , not open to the public yet
      getModuleInfo: new SyncHook(),
      createScript: new SyncHook(),
      createLink: new SyncHook(),
      // only work for manifest , so not open to the public yet
      fetch: new AsyncHook()
    });
    // TODO: Validate the details of the options
    // Initialize options with default values
    const defaultOptions = {
      id: share.getBuilderId(),
      name: userOptions.name,
      plugins: [snapshotPlugin(), generatePreloadAssetsPlugin()],
      remotes: [],
      shared: {},
      inBrowser: sdk.isBrowserEnv()
    };
    this.name = userOptions.name;
    this.options = defaultOptions;
    this.snapshotHandler = new SnapshotHandler(this);
    this.sharedHandler = new SharedHandler(this);
    this.remoteHandler = new RemoteHandler(this);
    this.shareScopeMap = this.sharedHandler.shareScopeMap;
    this.registerPlugins([...defaultOptions.plugins, ...(userOptions.plugins || [])]);
    this.options = this.formatOptions(defaultOptions, userOptions);
  }
}
let FederationInstance = null;
function init(options) {
  // Retrieve the same instance with the same name
  const instance = share.getGlobalFederationInstance(options.name, options.version);
  if (!instance) {
    // Retrieve debug constructor
    const FederationConstructor = share.getGlobalFederationConstructor() || FederationHost;
    FederationInstance = new FederationConstructor(options);
    share.setGlobalFederationInstance(FederationInstance);
    return FederationInstance;
  } else {
    // Merge options
    instance.initOptions(options);
    if (!FederationInstance) {
      FederationInstance = instance;
    }
    return instance;
  }
}
function loadRemote(...args) {
  share.assert(FederationInstance, 'Please call init first');
  const loadRemote1 = FederationInstance.loadRemote;
  // eslint-disable-next-line prefer-spread
  return loadRemote1.apply(FederationInstance, args);
}
function loadShare(...args) {
  share.assert(FederationInstance, 'Please call init first');
  // eslint-disable-next-line prefer-spread
  const loadShare1 = FederationInstance.loadShare;
  return loadShare1.apply(FederationInstance, args);
}
function loadShareSync(...args) {
  share.assert(FederationInstance, 'Please call init first');
  const loadShareSync1 = FederationInstance.loadShareSync;
  // eslint-disable-next-line prefer-spread
  return loadShareSync1.apply(FederationInstance, args);
}
function preloadRemote(...args) {
  share.assert(FederationInstance, 'Please call init first');
  // eslint-disable-next-line prefer-spread
  return FederationInstance.preloadRemote.apply(FederationInstance, args);
}
function registerRemotes(...args) {
  share.assert(FederationInstance, 'Please call init first');
  // eslint-disable-next-line prefer-spread
  return FederationInstance.registerRemotes.apply(FederationInstance, args);
}
function registerPlugins(...args) {
  share.assert(FederationInstance, 'Please call init first');
  // eslint-disable-next-line prefer-spread
  return FederationInstance.registerPlugins.apply(FederationInstance, args);
}
function getInstance() {
  return FederationInstance;
}
// Inject for debug
share.setGlobalFederationConstructor(FederationHost);
Object.defineProperty(exports, "loadScript", ({
  enumerable: true,
  get: function () {
    return sdk.loadScript;
  }
}));
Object.defineProperty(exports, "loadScriptNode", ({
  enumerable: true,
  get: function () {
    return sdk.loadScriptNode;
  }
}));
exports.registerGlobalPlugins = share.registerGlobalPlugins;
exports.FederationHost = FederationHost;
exports.Module = Module;
exports.getInstance = getInstance;
exports.getRemoteEntry = getRemoteEntry;
exports.getRemoteInfo = getRemoteInfo;
exports.init = init;
exports.loadRemote = loadRemote;
exports.loadShare = loadShare;
exports.loadShareSync = loadShareSync;
exports.preloadRemote = preloadRemote;
exports.registerPlugins = registerPlugins;
exports.registerRemotes = registerRemotes;

/***/ }),

/***/ 5741:
/*!***********************************************************************!*\
  !*** ./node_modules/@module-federation/runtime/dist/polyfills.cjs.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports) => {



function _extends() {
  _extends = Object.assign || function assign(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _object_without_properties_loose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
exports._extends = _extends;
exports._object_without_properties_loose = _object_without_properties_loose;

/***/ }),

/***/ 2530:
/*!*******************************************************************!*\
  !*** ./node_modules/@module-federation/runtime/dist/share.cjs.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var polyfills = __webpack_require__(/*! ./polyfills.cjs.js */ 5741);
var sdk = __webpack_require__(/*! @module-federation/sdk */ 5305);
function getBuilderId() {
  //@ts-ignore
  return  true ? "user_management:0.0.0" : 0;
}
const LOG_CATEGORY = '[ Federation Runtime ]';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function assert(condition, msg) {
  if (!condition) {
    error(msg);
  }
}
function error(msg) {
  if (msg instanceof Error) {
    msg.message = `${LOG_CATEGORY}: ${msg.message}`;
    throw msg;
  }
  throw new Error(`${LOG_CATEGORY}: ${msg}`);
}
function warn(msg) {
  if (msg instanceof Error) {
    msg.message = `${LOG_CATEGORY}: ${msg.message}`;
    console.warn(msg);
  } else {
    console.warn(`${LOG_CATEGORY}: ${msg}`);
  }
}
function addUniqueItem(arr, item) {
  if (arr.findIndex(name => name === item) === -1) {
    arr.push(item);
  }
  return arr;
}
function getFMId(remoteInfo) {
  if ('version' in remoteInfo && remoteInfo.version) {
    return `${remoteInfo.name}:${remoteInfo.version}`;
  } else if ('entry' in remoteInfo && remoteInfo.entry) {
    return `${remoteInfo.name}:${remoteInfo.entry}`;
  } else {
    return `${remoteInfo.name}`;
  }
}
function isRemoteInfoWithEntry(remote) {
  return typeof remote.entry !== 'undefined';
}
function isPureRemoteEntry(remote) {
  return !remote.entry.includes('.json') && remote.entry.includes('.js');
}
function isObject(val) {
  return val && typeof val === 'object';
}
const objectToString = Object.prototype.toString;
// eslint-disable-next-line @typescript-eslint/ban-types
function isPlainObject(val) {
  return objectToString.call(val) === '[object Object]';
}
function arrayOptions(options) {
  return Array.isArray(options) ? options : [options];
}
function getRemoteEntryInfoFromSnapshot(snapshot) {
  const defaultRemoteEntryInfo = {
    url: '',
    type: 'global',
    globalName: ''
  };
  if (sdk.isBrowserEnv()) {
    return 'remoteEntry' in snapshot ? {
      url: snapshot.remoteEntry,
      type: snapshot.remoteEntryType,
      globalName: snapshot.globalName
    } : defaultRemoteEntryInfo;
  }
  if ('ssrRemoteEntry' in snapshot) {
    return {
      url: snapshot.ssrRemoteEntry || defaultRemoteEntryInfo.url,
      type: snapshot.ssrRemoteEntryType || defaultRemoteEntryInfo.type,
      globalName: snapshot.globalName
    };
  }
  return defaultRemoteEntryInfo;
}
const nativeGlobal = (() => {
  try {
    return new Function('return this')();
  } catch (e) {
    return globalThis;
  }
})();
const Global = nativeGlobal;
function definePropertyGlobalVal(target, key, val) {
  Object.defineProperty(target, key, {
    value: val,
    configurable: false,
    writable: true
  });
}
function includeOwnProperty(target, key) {
  return Object.hasOwnProperty.call(target, key);
}
// This section is to prevent encapsulation by certain microfrontend frameworks. Due to reuse policies, sandbox escapes.
// The sandbox in the microfrontend does not replicate the value of 'configurable'.
// If there is no loading content on the global object, this section defines the loading object.
if (!includeOwnProperty(globalThis, '__GLOBAL_LOADING_REMOTE_ENTRY__')) {
  definePropertyGlobalVal(globalThis, '__GLOBAL_LOADING_REMOTE_ENTRY__', {});
}
const globalLoading = globalThis.__GLOBAL_LOADING_REMOTE_ENTRY__;
function setGlobalDefaultVal(target) {
  var _target___FEDERATION__, _target___FEDERATION__1, _target___FEDERATION__2, _target___FEDERATION__3, _target___FEDERATION__4, _target___FEDERATION__5;
  if (includeOwnProperty(target, '__VMOK__') && !includeOwnProperty(target, '__FEDERATION__')) {
    definePropertyGlobalVal(target, '__FEDERATION__', target.__VMOK__);
  }
  if (!includeOwnProperty(target, '__FEDERATION__')) {
    definePropertyGlobalVal(target, '__FEDERATION__', {
      __GLOBAL_PLUGIN__: [],
      __INSTANCES__: [],
      moduleInfo: {},
      __SHARE__: {},
      __MANIFEST_LOADING__: {},
      __PRELOADED_MAP__: new Map()
    });
    definePropertyGlobalVal(target, '__VMOK__', target.__FEDERATION__);
  }
  var ___GLOBAL_PLUGIN__;
  (___GLOBAL_PLUGIN__ = (_target___FEDERATION__ = target.__FEDERATION__).__GLOBAL_PLUGIN__) != null ? ___GLOBAL_PLUGIN__ : _target___FEDERATION__.__GLOBAL_PLUGIN__ = [];
  var ___INSTANCES__;
  (___INSTANCES__ = (_target___FEDERATION__1 = target.__FEDERATION__).__INSTANCES__) != null ? ___INSTANCES__ : _target___FEDERATION__1.__INSTANCES__ = [];
  var _moduleInfo;
  (_moduleInfo = (_target___FEDERATION__2 = target.__FEDERATION__).moduleInfo) != null ? _moduleInfo : _target___FEDERATION__2.moduleInfo = {};
  var ___SHARE__;
  (___SHARE__ = (_target___FEDERATION__3 = target.__FEDERATION__).__SHARE__) != null ? ___SHARE__ : _target___FEDERATION__3.__SHARE__ = {};
  var ___MANIFEST_LOADING__;
  (___MANIFEST_LOADING__ = (_target___FEDERATION__4 = target.__FEDERATION__).__MANIFEST_LOADING__) != null ? ___MANIFEST_LOADING__ : _target___FEDERATION__4.__MANIFEST_LOADING__ = {};
  var ___PRELOADED_MAP__;
  (___PRELOADED_MAP__ = (_target___FEDERATION__5 = target.__FEDERATION__).__PRELOADED_MAP__) != null ? ___PRELOADED_MAP__ : _target___FEDERATION__5.__PRELOADED_MAP__ = new Map();
}
setGlobalDefaultVal(globalThis);
setGlobalDefaultVal(nativeGlobal);
function resetFederationGlobalInfo() {
  globalThis.__FEDERATION__.__GLOBAL_PLUGIN__ = [];
  globalThis.__FEDERATION__.__INSTANCES__ = [];
  globalThis.__FEDERATION__.moduleInfo = {};
  globalThis.__FEDERATION__.__SHARE__ = {};
  globalThis.__FEDERATION__.__MANIFEST_LOADING__ = {};
}
function getGlobalFederationInstance(name, version) {
  const buildId = getBuilderId();
  return globalThis.__FEDERATION__.__INSTANCES__.find(GMInstance => {
    if (buildId && GMInstance.options.id === getBuilderId()) {
      return true;
    }
    if (GMInstance.options.name === name && !GMInstance.options.version && !version) {
      return true;
    }
    if (GMInstance.options.name === name && version && GMInstance.options.version === version) {
      return true;
    }
    return false;
  });
}
function setGlobalFederationInstance(FederationInstance) {
  globalThis.__FEDERATION__.__INSTANCES__.push(FederationInstance);
}
function getGlobalFederationConstructor() {
  return globalThis.__FEDERATION__.__DEBUG_CONSTRUCTOR__;
}
function setGlobalFederationConstructor(FederationConstructor, isDebug = sdk.isDebugMode()) {
  if (isDebug) {
    globalThis.__FEDERATION__.__DEBUG_CONSTRUCTOR__ = FederationConstructor;
    globalThis.__FEDERATION__.__DEBUG_CONSTRUCTOR_VERSION__ = "0.6.9";
  }
}
// eslint-disable-next-line @typescript-eslint/ban-types
function getInfoWithoutType(target, key) {
  if (typeof key === 'string') {
    const keyRes = target[key];
    if (keyRes) {
      return {
        value: target[key],
        key: key
      };
    } else {
      const targetKeys = Object.keys(target);
      for (const targetKey of targetKeys) {
        const [targetTypeOrName, _] = targetKey.split(':');
        const nKey = `${targetTypeOrName}:${key}`;
        const typeWithKeyRes = target[nKey];
        if (typeWithKeyRes) {
          return {
            value: typeWithKeyRes,
            key: nKey
          };
        }
      }
      return {
        value: undefined,
        key: key
      };
    }
  } else {
    throw new Error('key must be string');
  }
}
const getGlobalSnapshot = () => nativeGlobal.__FEDERATION__.moduleInfo;
const getTargetSnapshotInfoByModuleInfo = (moduleInfo, snapshot) => {
  // Check if the remote is included in the hostSnapshot
  const moduleKey = getFMId(moduleInfo);
  const getModuleInfo = getInfoWithoutType(snapshot, moduleKey).value;
  // The remoteSnapshot might not include a version
  if (getModuleInfo && !getModuleInfo.version && 'version' in moduleInfo && moduleInfo['version']) {
    getModuleInfo.version = moduleInfo['version'];
  }
  if (getModuleInfo) {
    return getModuleInfo;
  }
  // If the remote is not included in the hostSnapshot, deploy a micro app snapshot
  if ('version' in moduleInfo && moduleInfo['version']) {
    const {
        version
      } = moduleInfo,
      resModuleInfo = polyfills._object_without_properties_loose(moduleInfo, ["version"]);
    const moduleKeyWithoutVersion = getFMId(resModuleInfo);
    const getModuleInfoWithoutVersion = getInfoWithoutType(nativeGlobal.__FEDERATION__.moduleInfo, moduleKeyWithoutVersion).value;
    if ((getModuleInfoWithoutVersion == null ? void 0 : getModuleInfoWithoutVersion.version) === version) {
      return getModuleInfoWithoutVersion;
    }
  }
  return;
};
const getGlobalSnapshotInfoByModuleInfo = moduleInfo => getTargetSnapshotInfoByModuleInfo(moduleInfo, nativeGlobal.__FEDERATION__.moduleInfo);
const setGlobalSnapshotInfoByModuleInfo = (remoteInfo, moduleDetailInfo) => {
  const moduleKey = getFMId(remoteInfo);
  nativeGlobal.__FEDERATION__.moduleInfo[moduleKey] = moduleDetailInfo;
  return nativeGlobal.__FEDERATION__.moduleInfo;
};
const addGlobalSnapshot = moduleInfos => {
  nativeGlobal.__FEDERATION__.moduleInfo = polyfills._extends({}, nativeGlobal.__FEDERATION__.moduleInfo, moduleInfos);
  return () => {
    const keys = Object.keys(moduleInfos);
    for (const key of keys) {
      delete nativeGlobal.__FEDERATION__.moduleInfo[key];
    }
  };
};
const getRemoteEntryExports = (name, globalName) => {
  const remoteEntryKey = globalName || `__FEDERATION_${name}:custom__`;
  const entryExports = globalThis[remoteEntryKey];
  return {
    remoteEntryKey,
    entryExports
  };
};
// This function is used to register global plugins.
// It iterates over the provided plugins and checks if they are already registered.
// If a plugin is not registered, it is added to the global plugins.
// If a plugin is already registered, a warning message is logged.
const registerGlobalPlugins = plugins => {
  const {
    __GLOBAL_PLUGIN__
  } = nativeGlobal.__FEDERATION__;
  plugins.forEach(plugin => {
    if (__GLOBAL_PLUGIN__.findIndex(p => p.name === plugin.name) === -1) {
      __GLOBAL_PLUGIN__.push(plugin);
    } else {
      warn(`The plugin ${plugin.name} has been registered.`);
    }
  });
};
const getGlobalHostPlugins = () => nativeGlobal.__FEDERATION__.__GLOBAL_PLUGIN__;
const getPreloaded = id => globalThis.__FEDERATION__.__PRELOADED_MAP__.get(id);
const setPreloaded = id => globalThis.__FEDERATION__.__PRELOADED_MAP__.set(id, true);
const DEFAULT_SCOPE = 'default';
const DEFAULT_REMOTE_TYPE = 'global';

// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts
// those constants are based on https://www.rubydoc.info/gems/semantic_range/3.0.0/SemanticRange#BUILDIDENTIFIER-constant
// Copyright (c)
// vite-plugin-federation is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//      http://license.coscl.org.cn/MulanPSL2
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.
const buildIdentifier = '[0-9A-Za-z-]+';
const build = `(?:\\+(${buildIdentifier}(?:\\.${buildIdentifier})*))`;
const numericIdentifier = '0|[1-9]\\d*';
const numericIdentifierLoose = '[0-9]+';
const nonNumericIdentifier = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';
const preReleaseIdentifierLoose = `(?:${numericIdentifierLoose}|${nonNumericIdentifier})`;
const preReleaseLoose = `(?:-?(${preReleaseIdentifierLoose}(?:\\.${preReleaseIdentifierLoose})*))`;
const preReleaseIdentifier = `(?:${numericIdentifier}|${nonNumericIdentifier})`;
const preRelease = `(?:-(${preReleaseIdentifier}(?:\\.${preReleaseIdentifier})*))`;
const xRangeIdentifier = `${numericIdentifier}|x|X|\\*`;
const xRangePlain = `[v=\\s]*(${xRangeIdentifier})(?:\\.(${xRangeIdentifier})(?:\\.(${xRangeIdentifier})(?:${preRelease})?${build}?)?)?`;
const hyphenRange = `^\\s*(${xRangePlain})\\s+-\\s+(${xRangePlain})\\s*$`;
const mainVersionLoose = `(${numericIdentifierLoose})\\.(${numericIdentifierLoose})\\.(${numericIdentifierLoose})`;
const loosePlain = `[v=\\s]*${mainVersionLoose}${preReleaseLoose}?${build}?`;
const gtlt = '((?:<|>)?=?)';
const comparatorTrim = `(\\s*)${gtlt}\\s*(${loosePlain}|${xRangePlain})`;
const loneTilde = '(?:~>?)';
const tildeTrim = `(\\s*)${loneTilde}\\s+`;
const loneCaret = '(?:\\^)';
const caretTrim = `(\\s*)${loneCaret}\\s+`;
const star = '(<|>)?=?\\s*\\*';
const caret = `^${loneCaret}${xRangePlain}$`;
const mainVersion = `(${numericIdentifier})\\.(${numericIdentifier})\\.(${numericIdentifier})`;
const fullPlain = `v?${mainVersion}${preRelease}?${build}?`;
const tilde = `^${loneTilde}${xRangePlain}$`;
const xRange = `^${gtlt}\\s*${xRangePlain}$`;
const comparator = `^${gtlt}\\s*(${fullPlain})$|^$`;
// copy from semver package
const gte0 = '^\\s*>=\\s*0.0.0\\s*$';

// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts
// Copyright (c)
// vite-plugin-federation is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//      http://license.coscl.org.cn/MulanPSL2
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.
function parseRegex(source) {
  return new RegExp(source);
}
function isXVersion(version) {
  return !version || version.toLowerCase() === 'x' || version === '*';
}
function pipe(...fns) {
  return x => fns.reduce((v, f) => f(v), x);
}
function extractComparator(comparatorString) {
  return comparatorString.match(parseRegex(comparator));
}
function combineVersion(major, minor, patch, preRelease) {
  const mainVersion = `${major}.${minor}.${patch}`;
  if (preRelease) {
    return `${mainVersion}-${preRelease}`;
  }
  return mainVersion;
}

// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts
// Copyright (c)
// vite-plugin-federation is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//      http://license.coscl.org.cn/MulanPSL2
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.
function parseHyphen(range) {
  return range.replace(parseRegex(hyphenRange), (_range, from, fromMajor, fromMinor, fromPatch, _fromPreRelease, _fromBuild, to, toMajor, toMinor, toPatch, toPreRelease) => {
    if (isXVersion(fromMajor)) {
      from = '';
    } else if (isXVersion(fromMinor)) {
      from = `>=${fromMajor}.0.0`;
    } else if (isXVersion(fromPatch)) {
      from = `>=${fromMajor}.${fromMinor}.0`;
    } else {
      from = `>=${from}`;
    }
    if (isXVersion(toMajor)) {
      to = '';
    } else if (isXVersion(toMinor)) {
      to = `<${Number(toMajor) + 1}.0.0-0`;
    } else if (isXVersion(toPatch)) {
      to = `<${toMajor}.${Number(toMinor) + 1}.0-0`;
    } else if (toPreRelease) {
      to = `<=${toMajor}.${toMinor}.${toPatch}-${toPreRelease}`;
    } else {
      to = `<=${to}`;
    }
    return `${from} ${to}`.trim();
  });
}
function parseComparatorTrim(range) {
  return range.replace(parseRegex(comparatorTrim), '$1$2$3');
}
function parseTildeTrim(range) {
  return range.replace(parseRegex(tildeTrim), '$1~');
}
function parseCaretTrim(range) {
  return range.replace(parseRegex(caretTrim), '$1^');
}
function parseCarets(range) {
  return range.trim().split(/\s+/).map(rangeVersion => rangeVersion.replace(parseRegex(caret), (_, major, minor, patch, preRelease) => {
    if (isXVersion(major)) {
      return '';
    } else if (isXVersion(minor)) {
      return `>=${major}.0.0 <${Number(major) + 1}.0.0-0`;
    } else if (isXVersion(patch)) {
      if (major === '0') {
        return `>=${major}.${minor}.0 <${major}.${Number(minor) + 1}.0-0`;
      } else {
        return `>=${major}.${minor}.0 <${Number(major) + 1}.0.0-0`;
      }
    } else if (preRelease) {
      if (major === '0') {
        if (minor === '0') {
          return `>=${major}.${minor}.${patch}-${preRelease} <${major}.${minor}.${Number(patch) + 1}-0`;
        } else {
          return `>=${major}.${minor}.${patch}-${preRelease} <${major}.${Number(minor) + 1}.0-0`;
        }
      } else {
        return `>=${major}.${minor}.${patch}-${preRelease} <${Number(major) + 1}.0.0-0`;
      }
    } else {
      if (major === '0') {
        if (minor === '0') {
          return `>=${major}.${minor}.${patch} <${major}.${minor}.${Number(patch) + 1}-0`;
        } else {
          return `>=${major}.${minor}.${patch} <${major}.${Number(minor) + 1}.0-0`;
        }
      }
      return `>=${major}.${minor}.${patch} <${Number(major) + 1}.0.0-0`;
    }
  })).join(' ');
}
function parseTildes(range) {
  return range.trim().split(/\s+/).map(rangeVersion => rangeVersion.replace(parseRegex(tilde), (_, major, minor, patch, preRelease) => {
    if (isXVersion(major)) {
      return '';
    } else if (isXVersion(minor)) {
      return `>=${major}.0.0 <${Number(major) + 1}.0.0-0`;
    } else if (isXVersion(patch)) {
      return `>=${major}.${minor}.0 <${major}.${Number(minor) + 1}.0-0`;
    } else if (preRelease) {
      return `>=${major}.${minor}.${patch}-${preRelease} <${major}.${Number(minor) + 1}.0-0`;
    }
    return `>=${major}.${minor}.${patch} <${major}.${Number(minor) + 1}.0-0`;
  })).join(' ');
}
function parseXRanges(range) {
  return range.split(/\s+/).map(rangeVersion => rangeVersion.trim().replace(parseRegex(xRange), (ret, gtlt, major, minor, patch, preRelease) => {
    const isXMajor = isXVersion(major);
    const isXMinor = isXMajor || isXVersion(minor);
    const isXPatch = isXMinor || isXVersion(patch);
    if (gtlt === '=' && isXPatch) {
      gtlt = '';
    }
    preRelease = '';
    if (isXMajor) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        return '<0.0.0-0';
      } else {
        // nothing is forbidden
        return '*';
      }
    } else if (gtlt && isXPatch) {
      // replace X with 0
      if (isXMinor) {
        minor = 0;
      }
      patch = 0;
      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        gtlt = '>=';
        if (isXMinor) {
          major = Number(major) + 1;
          minor = 0;
          patch = 0;
        } else {
          minor = Number(minor) + 1;
          patch = 0;
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should pass
        // Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<';
        if (isXMinor) {
          major = Number(major) + 1;
        } else {
          minor = Number(minor) + 1;
        }
      }
      if (gtlt === '<') {
        preRelease = '-0';
      }
      return `${gtlt + major}.${minor}.${patch}${preRelease}`;
    } else if (isXMinor) {
      return `>=${major}.0.0${preRelease} <${Number(major) + 1}.0.0-0`;
    } else if (isXPatch) {
      return `>=${major}.${minor}.0${preRelease} <${major}.${Number(minor) + 1}.0-0`;
    }
    return ret;
  })).join(' ');
}
function parseStar(range) {
  return range.trim().replace(parseRegex(star), '');
}
function parseGTE0(comparatorString) {
  return comparatorString.trim().replace(parseRegex(gte0), '');
}

// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts
// Copyright (c)
// vite-plugin-federation is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//      http://license.coscl.org.cn/MulanPSL2
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.
function compareAtom(rangeAtom, versionAtom) {
  rangeAtom = Number(rangeAtom) || rangeAtom;
  versionAtom = Number(versionAtom) || versionAtom;
  if (rangeAtom > versionAtom) {
    return 1;
  }
  if (rangeAtom === versionAtom) {
    return 0;
  }
  return -1;
}
function comparePreRelease(rangeAtom, versionAtom) {
  const {
    preRelease: rangePreRelease
  } = rangeAtom;
  const {
    preRelease: versionPreRelease
  } = versionAtom;
  if (rangePreRelease === undefined && Boolean(versionPreRelease)) {
    return 1;
  }
  if (Boolean(rangePreRelease) && versionPreRelease === undefined) {
    return -1;
  }
  if (rangePreRelease === undefined && versionPreRelease === undefined) {
    return 0;
  }
  for (let i = 0, n = rangePreRelease.length; i <= n; i++) {
    const rangeElement = rangePreRelease[i];
    const versionElement = versionPreRelease[i];
    if (rangeElement === versionElement) {
      continue;
    }
    if (rangeElement === undefined && versionElement === undefined) {
      return 0;
    }
    if (!rangeElement) {
      return 1;
    }
    if (!versionElement) {
      return -1;
    }
    return compareAtom(rangeElement, versionElement);
  }
  return 0;
}
function compareVersion(rangeAtom, versionAtom) {
  return compareAtom(rangeAtom.major, versionAtom.major) || compareAtom(rangeAtom.minor, versionAtom.minor) || compareAtom(rangeAtom.patch, versionAtom.patch) || comparePreRelease(rangeAtom, versionAtom);
}
function eq(rangeAtom, versionAtom) {
  return rangeAtom.version === versionAtom.version;
}
function compare(rangeAtom, versionAtom) {
  switch (rangeAtom.operator) {
    case '':
    case '=':
      return eq(rangeAtom, versionAtom);
    case '>':
      return compareVersion(rangeAtom, versionAtom) < 0;
    case '>=':
      return eq(rangeAtom, versionAtom) || compareVersion(rangeAtom, versionAtom) < 0;
    case '<':
      return compareVersion(rangeAtom, versionAtom) > 0;
    case '<=':
      return eq(rangeAtom, versionAtom) || compareVersion(rangeAtom, versionAtom) > 0;
    case undefined:
      {
        // mean * or x -> all versions
        return true;
      }
    default:
      return false;
  }
}

// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts
// Copyright (c)
// vite-plugin-federation is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//      http://license.coscl.org.cn/MulanPSL2
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.
function parseComparatorString(range) {
  return pipe(
  // handle caret
  // ^ --> * (any, kinda silly)
  // ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
  // ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
  // ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
  // ^1.2.3 --> >=1.2.3 <2.0.0-0
  // ^1.2.0 --> >=1.2.0 <2.0.0-0
  parseCarets,
  // handle tilde
  // ~, ~> --> * (any, kinda silly)
  // ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
  // ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
  // ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
  // ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
  // ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
  parseTildes, parseXRanges, parseStar)(range);
}
function parseRange(range) {
  return pipe(
  // handle hyphenRange
  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
  parseHyphen,
  // handle trim comparator
  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
  parseComparatorTrim,
  // handle trim tilde
  // `~ 1.2.3` => `~1.2.3`
  parseTildeTrim,
  // handle trim caret
  // `^ 1.2.3` => `^1.2.3`
  parseCaretTrim)(range.trim()).split(/\s+/).join(' ');
}
function satisfy(version, range) {
  if (!version) {
    return false;
  }
  const parsedRange = parseRange(range);
  const parsedComparator = parsedRange.split(' ').map(rangeVersion => parseComparatorString(rangeVersion)).join(' ');
  const comparators = parsedComparator.split(/\s+/).map(comparator => parseGTE0(comparator));
  const extractedVersion = extractComparator(version);
  if (!extractedVersion) {
    return false;
  }
  const [, versionOperator,, versionMajor, versionMinor, versionPatch, versionPreRelease] = extractedVersion;
  const versionAtom = {
    operator: versionOperator,
    version: combineVersion(versionMajor, versionMinor, versionPatch, versionPreRelease),
    major: versionMajor,
    minor: versionMinor,
    patch: versionPatch,
    preRelease: versionPreRelease == null ? void 0 : versionPreRelease.split('.')
  };
  for (const comparator of comparators) {
    const extractedComparator = extractComparator(comparator);
    if (!extractedComparator) {
      return false;
    }
    const [, rangeOperator,, rangeMajor, rangeMinor, rangePatch, rangePreRelease] = extractedComparator;
    const rangeAtom = {
      operator: rangeOperator,
      version: combineVersion(rangeMajor, rangeMinor, rangePatch, rangePreRelease),
      major: rangeMajor,
      minor: rangeMinor,
      patch: rangePatch,
      preRelease: rangePreRelease == null ? void 0 : rangePreRelease.split('.')
    };
    if (!compare(rangeAtom, versionAtom)) {
      return false; // early return
    }
  }
  return true;
}
function formatShare(shareArgs, from, name, shareStrategy) {
  let get;
  if ('get' in shareArgs) {
    // eslint-disable-next-line prefer-destructuring
    get = shareArgs.get;
  } else if ('lib' in shareArgs) {
    get = () => Promise.resolve(shareArgs.lib);
  } else {
    get = () => Promise.resolve(() => {
      throw new Error(`Can not get shared '${name}'!`);
    });
  }
  if (shareArgs.strategy) {
    warn(`"shared.strategy is deprecated, please set in initOptions.shareStrategy instead!"`);
  }
  var _shareArgs_version, _shareArgs_scope, _shareArgs_strategy;
  return polyfills._extends({
    deps: [],
    useIn: [],
    from,
    loading: null
  }, shareArgs, {
    shareConfig: polyfills._extends({
      requiredVersion: `^${shareArgs.version}`,
      singleton: false,
      eager: false,
      strictVersion: false
    }, shareArgs.shareConfig),
    get,
    loaded: (shareArgs == null ? void 0 : shareArgs.loaded) || 'lib' in shareArgs ? true : undefined,
    version: (_shareArgs_version = shareArgs.version) != null ? _shareArgs_version : '0',
    scope: Array.isArray(shareArgs.scope) ? shareArgs.scope : [(_shareArgs_scope = shareArgs.scope) != null ? _shareArgs_scope : 'default'],
    strategy: ((_shareArgs_strategy = shareArgs.strategy) != null ? _shareArgs_strategy : shareStrategy) || 'version-first'
  });
}
function formatShareConfigs(globalOptions, userOptions) {
  const shareArgs = userOptions.shared || {};
  const from = userOptions.name;
  const shareInfos = Object.keys(shareArgs).reduce((res, pkgName) => {
    const arrayShareArgs = arrayOptions(shareArgs[pkgName]);
    res[pkgName] = res[pkgName] || [];
    arrayShareArgs.forEach(shareConfig => {
      res[pkgName].push(formatShare(shareConfig, from, pkgName, userOptions.shareStrategy));
    });
    return res;
  }, {});
  const shared = polyfills._extends({}, globalOptions.shared);
  Object.keys(shareInfos).forEach(shareKey => {
    if (!shared[shareKey]) {
      shared[shareKey] = shareInfos[shareKey];
    } else {
      shareInfos[shareKey].forEach(newUserSharedOptions => {
        const isSameVersion = shared[shareKey].find(sharedVal => sharedVal.version === newUserSharedOptions.version);
        if (!isSameVersion) {
          shared[shareKey].push(newUserSharedOptions);
        }
      });
    }
  });
  return {
    shared,
    shareInfos
  };
}
function versionLt(a, b) {
  const transformInvalidVersion = version => {
    const isNumberVersion = !Number.isNaN(Number(version));
    if (isNumberVersion) {
      const splitArr = version.split('.');
      let validVersion = version;
      for (let i = 0; i < 3 - splitArr.length; i++) {
        validVersion += '.0';
      }
      return validVersion;
    }
    return version;
  };
  if (satisfy(transformInvalidVersion(a), `<=${transformInvalidVersion(b)}`)) {
    return true;
  } else {
    return false;
  }
}
const findVersion = (shareVersionMap, cb) => {
  const callback = cb || function (prev, cur) {
    return versionLt(prev, cur);
  };
  return Object.keys(shareVersionMap).reduce((prev, cur) => {
    if (!prev) {
      return cur;
    }
    if (callback(prev, cur)) {
      return cur;
    }
    // default version is '0' https://github.com/webpack/webpack/blob/main/lib/sharing/ProvideSharedModule.js#L136
    if (prev === '0') {
      return cur;
    }
    return prev;
  }, 0);
};
const isLoaded = shared => {
  return Boolean(shared.loaded) || typeof shared.lib === 'function';
};
function findSingletonVersionOrderByVersion(shareScopeMap, scope, pkgName) {
  const versions = shareScopeMap[scope][pkgName];
  const callback = function (prev, cur) {
    return !isLoaded(versions[prev]) && versionLt(prev, cur);
  };
  return findVersion(shareScopeMap[scope][pkgName], callback);
}
function findSingletonVersionOrderByLoaded(shareScopeMap, scope, pkgName) {
  const versions = shareScopeMap[scope][pkgName];
  const callback = function (prev, cur) {
    if (isLoaded(versions[cur])) {
      if (isLoaded(versions[prev])) {
        return Boolean(versionLt(prev, cur));
      } else {
        return true;
      }
    }
    if (isLoaded(versions[prev])) {
      return false;
    }
    return versionLt(prev, cur);
  };
  return findVersion(shareScopeMap[scope][pkgName], callback);
}
function getFindShareFunction(strategy) {
  if (strategy === 'loaded-first') {
    return findSingletonVersionOrderByLoaded;
  }
  return findSingletonVersionOrderByVersion;
}
function getRegisteredShare(localShareScopeMap, pkgName, shareInfo, resolveShare) {
  if (!localShareScopeMap) {
    return;
  }
  const {
    shareConfig,
    scope = DEFAULT_SCOPE,
    strategy
  } = shareInfo;
  const scopes = Array.isArray(scope) ? scope : [scope];
  for (const sc of scopes) {
    if (shareConfig && localShareScopeMap[sc] && localShareScopeMap[sc][pkgName]) {
      const {
        requiredVersion
      } = shareConfig;
      const findShareFunction = getFindShareFunction(strategy);
      const maxOrSingletonVersion = findShareFunction(localShareScopeMap, sc, pkgName);
      //@ts-ignore
      const defaultResolver = () => {
        if (shareConfig.singleton) {
          if (typeof requiredVersion === 'string' && !satisfy(maxOrSingletonVersion, requiredVersion)) {
            const msg = `Version ${maxOrSingletonVersion} from ${maxOrSingletonVersion && localShareScopeMap[sc][pkgName][maxOrSingletonVersion].from} of shared singleton module ${pkgName} does not satisfy the requirement of ${shareInfo.from} which needs ${requiredVersion})`;
            if (shareConfig.strictVersion) {
              error(msg);
            } else {
              warn(msg);
            }
          }
          return localShareScopeMap[sc][pkgName][maxOrSingletonVersion];
        } else {
          if (requiredVersion === false || requiredVersion === '*') {
            return localShareScopeMap[sc][pkgName][maxOrSingletonVersion];
          }
          if (satisfy(maxOrSingletonVersion, requiredVersion)) {
            return localShareScopeMap[sc][pkgName][maxOrSingletonVersion];
          }
          for (const [versionKey, versionValue] of Object.entries(localShareScopeMap[sc][pkgName])) {
            if (satisfy(versionKey, requiredVersion)) {
              return versionValue;
            }
          }
        }
      };
      const params = {
        shareScopeMap: localShareScopeMap,
        scope: sc,
        pkgName,
        version: maxOrSingletonVersion,
        GlobalFederation: Global.__FEDERATION__,
        resolver: defaultResolver
      };
      const resolveShared = resolveShare.emit(params) || params;
      return resolveShared.resolver();
    }
  }
}
function getGlobalShareScope() {
  return Global.__FEDERATION__.__SHARE__;
}
function getTargetSharedOptions(options) {
  const {
    pkgName,
    extraOptions,
    shareInfos
  } = options;
  const defaultResolver = sharedOptions => {
    if (!sharedOptions) {
      return undefined;
    }
    const shareVersionMap = {};
    sharedOptions.forEach(shared => {
      shareVersionMap[shared.version] = shared;
    });
    const callback = function (prev, cur) {
      return !isLoaded(shareVersionMap[prev]) && versionLt(prev, cur);
    };
    const maxVersion = findVersion(shareVersionMap, callback);
    return shareVersionMap[maxVersion];
  };
  var _extraOptions_resolver;
  const resolver = (_extraOptions_resolver = extraOptions == null ? void 0 : extraOptions.resolver) != null ? _extraOptions_resolver : defaultResolver;
  return Object.assign({}, resolver(shareInfos[pkgName]), extraOptions == null ? void 0 : extraOptions.customShareInfo);
}
exports.DEFAULT_REMOTE_TYPE = DEFAULT_REMOTE_TYPE;
exports.DEFAULT_SCOPE = DEFAULT_SCOPE;
exports.Global = Global;
exports.addGlobalSnapshot = addGlobalSnapshot;
exports.addUniqueItem = addUniqueItem;
exports.arrayOptions = arrayOptions;
exports.assert = assert;
exports.error = error;
exports.formatShareConfigs = formatShareConfigs;
exports.getBuilderId = getBuilderId;
exports.getFMId = getFMId;
exports.getGlobalFederationConstructor = getGlobalFederationConstructor;
exports.getGlobalFederationInstance = getGlobalFederationInstance;
exports.getGlobalHostPlugins = getGlobalHostPlugins;
exports.getGlobalShareScope = getGlobalShareScope;
exports.getGlobalSnapshot = getGlobalSnapshot;
exports.getGlobalSnapshotInfoByModuleInfo = getGlobalSnapshotInfoByModuleInfo;
exports.getInfoWithoutType = getInfoWithoutType;
exports.getPreloaded = getPreloaded;
exports.getRegisteredShare = getRegisteredShare;
exports.getRemoteEntryExports = getRemoteEntryExports;
exports.getRemoteEntryInfoFromSnapshot = getRemoteEntryInfoFromSnapshot;
exports.getTargetSharedOptions = getTargetSharedOptions;
exports.getTargetSnapshotInfoByModuleInfo = getTargetSnapshotInfoByModuleInfo;
exports.globalLoading = globalLoading;
exports.isObject = isObject;
exports.isPlainObject = isPlainObject;
exports.isPureRemoteEntry = isPureRemoteEntry;
exports.isRemoteInfoWithEntry = isRemoteInfoWithEntry;
exports.nativeGlobal = nativeGlobal;
exports.registerGlobalPlugins = registerGlobalPlugins;
exports.resetFederationGlobalInfo = resetFederationGlobalInfo;
exports.setGlobalFederationConstructor = setGlobalFederationConstructor;
exports.setGlobalFederationInstance = setGlobalFederationInstance;
exports.setGlobalSnapshotInfoByModuleInfo = setGlobalSnapshotInfoByModuleInfo;
exports.setPreloaded = setPreloaded;
exports.warn = warn;

/***/ }),

/***/ 5305:
/*!***************************************************************!*\
  !*** ./node_modules/@module-federation/sdk/dist/index.cjs.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _asyncToGenerator = (__webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 5000)["default"]);
var polyfills = __webpack_require__(/*! ./polyfills.cjs.js */ 349);
const FederationModuleManifest = 'federation-manifest.json';
const MANIFEST_EXT = '.json';
const BROWSER_LOG_KEY = 'FEDERATION_DEBUG';
const BROWSER_LOG_VALUE = '1';
const NameTransformSymbol = {
  AT: '@',
  HYPHEN: '-',
  SLASH: '/'
};
const NameTransformMap = {
  [NameTransformSymbol.AT]: 'scope_',
  [NameTransformSymbol.HYPHEN]: '_',
  [NameTransformSymbol.SLASH]: '__'
};
const EncodedNameTransformMap = {
  [NameTransformMap[NameTransformSymbol.AT]]: NameTransformSymbol.AT,
  [NameTransformMap[NameTransformSymbol.HYPHEN]]: NameTransformSymbol.HYPHEN,
  [NameTransformMap[NameTransformSymbol.SLASH]]: NameTransformSymbol.SLASH
};
const SEPARATOR = ':';
const ManifestFileName = 'mf-manifest.json';
const StatsFileName = 'mf-stats.json';
const MFModuleType = {
  NPM: 'npm',
  APP: 'app'
};
const MODULE_DEVTOOL_IDENTIFIER = '__MF_DEVTOOLS_MODULE_INFO__';
const ENCODE_NAME_PREFIX = 'ENCODE_NAME_PREFIX';
const TEMP_DIR = '.federation';
const MFPrefetchCommon = {
  identifier: 'MFDataPrefetch',
  globalKey: '__PREFETCH__',
  library: 'mf-data-prefetch',
  exportsKey: '__PREFETCH_EXPORTS__',
  fileName: 'bootstrap.js'
};
var ContainerPlugin = /*#__PURE__*/Object.freeze({
  __proto__: null
});
var ContainerReferencePlugin = /*#__PURE__*/Object.freeze({
  __proto__: null
});
var ModuleFederationPlugin = /*#__PURE__*/Object.freeze({
  __proto__: null
});
var SharePlugin = /*#__PURE__*/Object.freeze({
  __proto__: null
});
function isBrowserEnv() {
  return typeof window !== 'undefined';
}
function isDebugMode() {
  if (typeof process !== 'undefined' && process.env && process.env['FEDERATION_DEBUG']) {
    return Boolean(process.env['FEDERATION_DEBUG']);
  }
  return typeof FEDERATION_DEBUG !== 'undefined' && Boolean(FEDERATION_DEBUG);
}
const getProcessEnv = function () {
  return typeof process !== 'undefined' && process.env ? process.env : {};
};
const DEBUG_LOG = '[ FEDERATION DEBUG ]';
function safeToString$1(info) {
  try {
    return JSON.stringify(info, null, 2);
  } catch (e) {
    return '';
  }
}
function safeGetLocalStorageItem() {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem(BROWSER_LOG_KEY) === BROWSER_LOG_VALUE;
    }
  } catch (error) {
    return typeof document !== 'undefined';
  }
  return false;
}
let Logger = class Logger {
  info(msg, info) {
    if (this.enable) {
      const argsToString = safeToString$1(info) || '';
      if (isBrowserEnv()) {
        console.info(`%c ${this.identifier}: ${msg} ${argsToString}`, 'color:#3300CC');
      } else {
        console.info('\x1b[34m%s', `${this.identifier}: ${msg} ${argsToString ? `\n${argsToString}` : ''}`);
      }
    }
  }
  logOriginalInfo(...args) {
    if (this.enable) {
      if (isBrowserEnv()) {
        console.info(`%c ${this.identifier}: OriginalInfo`, 'color:#3300CC');
        console.log(...args);
      } else {
        console.info(`%c ${this.identifier}: OriginalInfo`, 'color:#3300CC');
        console.log(...args);
      }
    }
  }
  constructor(identifier) {
    this.enable = false;
    this.identifier = identifier || DEBUG_LOG;
    if (isBrowserEnv() && safeGetLocalStorageItem()) {
      this.enable = true;
    } else if (isDebugMode()) {
      this.enable = true;
    }
  }
};
const LOG_CATEGORY = '[ Federation Runtime ]';
// entry: name:version   version : 1.0.0 | ^1.2.3
// entry: name:entry  entry:  https://localhost:9000/federation-manifest.json
const parseEntry = (str, devVerOrUrl, separator = SEPARATOR) => {
  const strSplit = str.split(separator);
  const devVersionOrUrl = getProcessEnv()['NODE_ENV'] === 'development' && devVerOrUrl;
  const defaultVersion = '*';
  const isEntry = s => s.startsWith('http') || s.includes(MANIFEST_EXT);
  // Check if the string starts with a type
  if (strSplit.length >= 2) {
    let [name, ...versionOrEntryArr] = strSplit;
    if (str.startsWith(separator)) {
      versionOrEntryArr = [devVersionOrUrl || strSplit.slice(-1)[0]];
      name = strSplit.slice(0, -1).join(separator);
    }
    let versionOrEntry = devVersionOrUrl || versionOrEntryArr.join(separator);
    if (isEntry(versionOrEntry)) {
      return {
        name,
        entry: versionOrEntry
      };
    } else {
      // Apply version rule
      // devVersionOrUrl => inputVersion => defaultVersion
      return {
        name,
        version: versionOrEntry || defaultVersion
      };
    }
  } else if (strSplit.length === 1) {
    const [name] = strSplit;
    if (devVersionOrUrl && isEntry(devVersionOrUrl)) {
      return {
        name,
        entry: devVersionOrUrl
      };
    }
    return {
      name,
      version: devVersionOrUrl || defaultVersion
    };
  } else {
    throw `Invalid entry value: ${str}`;
  }
};
const logger = new Logger();
const composeKeyWithSeparator = function (...args) {
  if (!args.length) {
    return '';
  }
  return args.reduce((sum, cur) => {
    if (!cur) {
      return sum;
    }
    if (!sum) {
      return cur;
    }
    return `${sum}${SEPARATOR}${cur}`;
  }, '');
};
const encodeName = function (name, prefix = '', withExt = false) {
  try {
    const ext = withExt ? '.js' : '';
    return `${prefix}${name.replace(new RegExp(`${NameTransformSymbol.AT}`, 'g'), NameTransformMap[NameTransformSymbol.AT]).replace(new RegExp(`${NameTransformSymbol.HYPHEN}`, 'g'), NameTransformMap[NameTransformSymbol.HYPHEN]).replace(new RegExp(`${NameTransformSymbol.SLASH}`, 'g'), NameTransformMap[NameTransformSymbol.SLASH])}${ext}`;
  } catch (err) {
    throw err;
  }
};
const decodeName = function (name, prefix, withExt) {
  try {
    let decodedName = name;
    if (prefix) {
      if (!decodedName.startsWith(prefix)) {
        return decodedName;
      }
      decodedName = decodedName.replace(new RegExp(prefix, 'g'), '');
    }
    decodedName = decodedName.replace(new RegExp(`${NameTransformMap[NameTransformSymbol.AT]}`, 'g'), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.AT]]).replace(new RegExp(`${NameTransformMap[NameTransformSymbol.SLASH]}`, 'g'), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.SLASH]]).replace(new RegExp(`${NameTransformMap[NameTransformSymbol.HYPHEN]}`, 'g'), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.HYPHEN]]);
    if (withExt) {
      decodedName = decodedName.replace('.js', '');
    }
    return decodedName;
  } catch (err) {
    throw err;
  }
};
const generateExposeFilename = (exposeName, withExt) => {
  if (!exposeName) {
    return '';
  }
  let expose = exposeName;
  if (expose === '.') {
    expose = 'default_export';
  }
  if (expose.startsWith('./')) {
    expose = expose.replace('./', '');
  }
  return encodeName(expose, '__federation_expose_', withExt);
};
const generateShareFilename = (pkgName, withExt) => {
  if (!pkgName) {
    return '';
  }
  return encodeName(pkgName, '__federation_shared_', withExt);
};
const getResourceUrl = (module, sourceUrl) => {
  if ('getPublicPath' in module) {
    let publicPath;
    if (!module.getPublicPath.startsWith('function')) {
      publicPath = new Function(module.getPublicPath)();
    } else {
      publicPath = new Function('return ' + module.getPublicPath)()();
    }
    return `${publicPath}${sourceUrl}`;
  } else if ('publicPath' in module) {
    return `${module.publicPath}${sourceUrl}`;
  } else {
    console.warn('Cannot get resource URL. If in debug mode, please ignore.', module, sourceUrl);
    return '';
  }
};
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const assert = (condition, msg) => {
  if (!condition) {
    error(msg);
  }
};
const error = msg => {
  throw new Error(`${LOG_CATEGORY}: ${msg}`);
};
const warn = msg => {
  console.warn(`${LOG_CATEGORY}: ${msg}`);
};
function safeToString(info) {
  try {
    return JSON.stringify(info, null, 2);
  } catch (e) {
    return '';
  }
}
const simpleJoinRemoteEntry = (rPath, rName) => {
  if (!rPath) {
    return rName;
  }
  const transformPath = str => {
    if (str === '.') {
      return '';
    }
    if (str.startsWith('./')) {
      return str.replace('./', '');
    }
    if (str.startsWith('/')) {
      const strWithoutSlash = str.slice(1);
      if (strWithoutSlash.endsWith('/')) {
        return strWithoutSlash.slice(0, -1);
      }
      return strWithoutSlash;
    }
    return str;
  };
  const transformedPath = transformPath(rPath);
  if (!transformedPath) {
    return rName;
  }
  if (transformedPath.endsWith('/')) {
    return `${transformedPath}${rName}`;
  }
  return `${transformedPath}/${rName}`;
};
function inferAutoPublicPath(url) {
  return url.replace(/#.*$/, '').replace(/\?.*$/, '').replace(/\/[^\/]+$/, '/');
}
// Priority: overrides > remotes
// eslint-disable-next-line max-lines-per-function
function generateSnapshotFromManifest(manifest, options = {}) {
  var _manifest_metaData, _manifest_metaData1;
  const {
    remotes = {},
    overrides = {},
    version
  } = options;
  let remoteSnapshot;
  const getPublicPath = () => {
    if ('publicPath' in manifest.metaData) {
      if (manifest.metaData.publicPath === 'auto' && version) {
        // use same implementation as publicPath auto runtime module implements
        return inferAutoPublicPath(version);
      }
      return manifest.metaData.publicPath;
    } else {
      return manifest.metaData.getPublicPath;
    }
  };
  const overridesKeys = Object.keys(overrides);
  let remotesInfo = {};
  // If remotes are not provided, only the remotes in the manifest will be read
  if (!Object.keys(remotes).length) {
    var _manifest_remotes;
    remotesInfo = ((_manifest_remotes = manifest.remotes) == null ? void 0 : _manifest_remotes.reduce((res, next) => {
      let matchedVersion;
      const name = next.federationContainerName;
      // overrides have higher priority
      if (overridesKeys.includes(name)) {
        matchedVersion = overrides[name];
      } else {
        if ('version' in next) {
          matchedVersion = next.version;
        } else {
          matchedVersion = next.entry;
        }
      }
      res[name] = {
        matchedVersion
      };
      return res;
    }, {})) || {};
  }
  // If remotes (deploy scenario) are specified, they need to be traversed again
  Object.keys(remotes).forEach(key => remotesInfo[key] = {
    // overrides will override dependencies
    matchedVersion: overridesKeys.includes(key) ? overrides[key] : remotes[key]
  });
  const {
    remoteEntry: {
      path: remoteEntryPath,
      name: remoteEntryName,
      type: remoteEntryType
    },
    types: remoteTypes,
    buildInfo: {
      buildVersion
    },
    globalName,
    ssrRemoteEntry
  } = manifest.metaData;
  const {
    exposes
  } = manifest;
  let basicRemoteSnapshot = {
    version: version ? version : '',
    buildVersion,
    globalName,
    remoteEntry: simpleJoinRemoteEntry(remoteEntryPath, remoteEntryName),
    remoteEntryType,
    remoteTypes: simpleJoinRemoteEntry(remoteTypes.path, remoteTypes.name),
    remoteTypesZip: remoteTypes.zip || '',
    remoteTypesAPI: remoteTypes.api || '',
    remotesInfo,
    shared: manifest == null ? void 0 : manifest.shared.map(item => ({
      assets: item.assets,
      sharedName: item.name,
      version: item.version
    })),
    modules: exposes == null ? void 0 : exposes.map(expose => ({
      moduleName: expose.name,
      modulePath: expose.path,
      assets: expose.assets
    }))
  };
  if ((_manifest_metaData = manifest.metaData) == null ? void 0 : _manifest_metaData.prefetchInterface) {
    const prefetchInterface = manifest.metaData.prefetchInterface;
    basicRemoteSnapshot = polyfills._extends({}, basicRemoteSnapshot, {
      prefetchInterface
    });
  }
  if ((_manifest_metaData1 = manifest.metaData) == null ? void 0 : _manifest_metaData1.prefetchEntry) {
    const {
      path,
      name,
      type
    } = manifest.metaData.prefetchEntry;
    basicRemoteSnapshot = polyfills._extends({}, basicRemoteSnapshot, {
      prefetchEntry: simpleJoinRemoteEntry(path, name),
      prefetchEntryType: type
    });
  }
  if ('publicPath' in manifest.metaData) {
    remoteSnapshot = polyfills._extends({}, basicRemoteSnapshot, {
      publicPath: getPublicPath()
    });
  } else {
    remoteSnapshot = polyfills._extends({}, basicRemoteSnapshot, {
      getPublicPath: getPublicPath()
    });
  }
  if (ssrRemoteEntry) {
    const fullSSRRemoteEntry = simpleJoinRemoteEntry(ssrRemoteEntry.path, ssrRemoteEntry.name);
    remoteSnapshot.ssrRemoteEntry = fullSSRRemoteEntry;
    remoteSnapshot.ssrRemoteEntryType = ssrRemoteEntry.type || 'commonjs-module';
  }
  return remoteSnapshot;
}
function isManifestProvider(moduleInfo) {
  if ('remoteEntry' in moduleInfo && moduleInfo.remoteEntry.includes(MANIFEST_EXT)) {
    return true;
  } else {
    return false;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function safeWrapper(_x, _x2) {
  return _safeWrapper.apply(this, arguments);
}
function _safeWrapper() {
  _safeWrapper = _asyncToGenerator(function* (callback, disableWarn) {
    try {
      const res = yield callback();
      return res;
    } catch (e) {
      !disableWarn && warn(e);
      return;
    }
  });
  return _safeWrapper.apply(this, arguments);
}
function isStaticResourcesEqual(url1, url2) {
  const REG_EXP = /^(https?:)?\/\//i;
  // Transform url1 and url2 into relative paths
  const relativeUrl1 = url1.replace(REG_EXP, '').replace(/\/$/, '');
  const relativeUrl2 = url2.replace(REG_EXP, '').replace(/\/$/, '');
  // Check if the relative paths are identical
  return relativeUrl1 === relativeUrl2;
}
function createScript(info) {
  // Retrieve the existing script element by its src attribute
  let script = null;
  let needAttach = true;
  let timeout = 20000;
  let timeoutId;
  const scripts = document.getElementsByTagName('script');
  for (let i = 0; i < scripts.length; i++) {
    const s = scripts[i];
    const scriptSrc = s.getAttribute('src');
    if (scriptSrc && isStaticResourcesEqual(scriptSrc, info.url)) {
      script = s;
      needAttach = false;
      break;
    }
  }
  if (!script) {
    const attrs = info.attrs;
    script = document.createElement('script');
    script.type = (attrs == null ? void 0 : attrs['type']) === 'module' ? 'module' : 'text/javascript';
    script.src = info.url;
    let createScriptRes = undefined;
    if (info.createScriptHook) {
      createScriptRes = info.createScriptHook(info.url, info.attrs);
      if (createScriptRes instanceof HTMLScriptElement) {
        script = createScriptRes;
      } else if (typeof createScriptRes === 'object') {
        if ('script' in createScriptRes && createScriptRes.script) {
          script = createScriptRes.script;
        }
        if ('timeout' in createScriptRes && createScriptRes.timeout) {
          timeout = createScriptRes.timeout;
        }
      }
    }
    if (attrs && !createScriptRes) {
      Object.keys(attrs).forEach(name => {
        if (script) {
          if (name === 'async' || name === 'defer') {
            script[name] = attrs[name];
            // Attributes that do not exist are considered overridden
          } else if (!script.getAttribute(name)) {
            script.setAttribute(name, attrs[name]);
          }
        }
      });
    }
  }
  const onScriptComplete = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* (prev,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    event) {
      var _info_cb;
      clearTimeout(timeoutId);
      // Prevent memory leaks in IE.
      if (script) {
        script.onerror = null;
        script.onload = null;
        safeWrapper(() => {
          const {
            needDeleteScript = true
          } = info;
          if (needDeleteScript) {
            (script == null ? void 0 : script.parentNode) && script.parentNode.removeChild(script);
          }
        });
        if (prev && typeof prev === 'function') {
          var _info_cb1;
          const result = prev(event);
          if (result instanceof Promise) {
            var _info_cb2;
            const res = yield result;
            info == null ? void 0 : (_info_cb2 = info.cb) == null ? void 0 : _info_cb2.call(info);
            return res;
          }
          info == null ? void 0 : (_info_cb1 = info.cb) == null ? void 0 : _info_cb1.call(info);
          return result;
        }
      }
      info == null ? void 0 : (_info_cb = info.cb) == null ? void 0 : _info_cb.call(info);
    });
    return function onScriptComplete(_x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }();
  script.onerror = onScriptComplete.bind(null, script.onerror);
  script.onload = onScriptComplete.bind(null, script.onload);
  timeoutId = setTimeout(() => {
    onScriptComplete(null, new Error(`Remote script "${info.url}" time-outed.`));
  }, timeout);
  return {
    script,
    needAttach
  };
}
function createLink(info) {
  // <link rel="preload" href="script.js" as="script">
  // Retrieve the existing script element by its src attribute
  let link = null;
  let needAttach = true;
  const links = document.getElementsByTagName('link');
  for (let i = 0; i < links.length; i++) {
    const l = links[i];
    const linkHref = l.getAttribute('href');
    const linkRef = l.getAttribute('ref');
    if (linkHref && isStaticResourcesEqual(linkHref, info.url) && linkRef === info.attrs['ref']) {
      link = l;
      needAttach = false;
      break;
    }
  }
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('href', info.url);
    let createLinkRes = undefined;
    const attrs = info.attrs;
    if (info.createLinkHook) {
      createLinkRes = info.createLinkHook(info.url, attrs);
      if (createLinkRes instanceof HTMLLinkElement) {
        link = createLinkRes;
      }
    }
    if (attrs && !createLinkRes) {
      Object.keys(attrs).forEach(name => {
        if (link && !link.getAttribute(name)) {
          link.setAttribute(name, attrs[name]);
        }
      });
    }
  }
  const onLinkComplete = (prev,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  event) => {
    // Prevent memory leaks in IE.
    if (link) {
      link.onerror = null;
      link.onload = null;
      safeWrapper(() => {
        const {
          needDeleteLink = true
        } = info;
        if (needDeleteLink) {
          (link == null ? void 0 : link.parentNode) && link.parentNode.removeChild(link);
        }
      });
      if (prev) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const res = prev(event);
        info.cb();
        return res;
      }
    }
    info.cb();
  };
  link.onerror = onLinkComplete.bind(null, link.onerror);
  link.onload = onLinkComplete.bind(null, link.onload);
  return {
    link,
    needAttach
  };
}
function loadScript(url, info) {
  const {
    attrs = {},
    createScriptHook
  } = info;
  return new Promise((resolve, _reject) => {
    const {
      script,
      needAttach
    } = createScript({
      url,
      cb: resolve,
      attrs: polyfills._extends({
        fetchpriority: 'high'
      }, attrs),
      createScriptHook,
      needDeleteScript: true
    });
    needAttach && document.head.appendChild(script);
  });
}
function importNodeModule(name) {
  if (!name) {
    throw new Error('import specifier is required');
  }
  const importModule = new Function('name', `return import(name)`);
  return importModule(name).then(res => res).catch(error => {
    console.error(`Error importing module ${name}:`, error);
    throw error;
  });
}
const loadNodeFetch = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* () {
    const fetchModule = yield importNodeModule('node-fetch');
    return fetchModule.default || fetchModule;
  });
  return function loadNodeFetch() {
    return _ref2.apply(this, arguments);
  };
}();
const lazyLoaderHookFetch = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (input, init) {
    // @ts-ignore
    const loaderHooks = __webpack_require__.federation.instance.loaderHook;
    const hook = (url, init) => {
      return loaderHooks.lifecycle.fetch.emit(url, init);
    };
    const res = yield hook(input, init || {});
    if (!res || !(res instanceof Response)) {
      const fetchFunction = typeof fetch === 'undefined' ? yield loadNodeFetch() : fetch;
      return fetchFunction(input, init || {});
    }
    return res;
  });
  return function lazyLoaderHookFetch(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
function createScriptNode(url, cb, attrs, createScriptHook) {
  if (createScriptHook) {
    const hookResult = createScriptHook(url);
    if (hookResult && typeof hookResult === 'object' && 'url' in hookResult) {
      url = hookResult.url;
    }
  }
  let urlObj;
  try {
    urlObj = new URL(url);
  } catch (e) {
    console.error('Error constructing URL:', e);
    cb(new Error(`Invalid URL: ${e}`));
    return;
  }
  const getFetch = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(function* () {
      //@ts-ignore
      if (true) {
        try {
          //@ts-ignore
          const loaderHooks = __webpack_require__.federation.instance.loaderHook;
          if (loaderHooks.lifecycle.fetch) {
            return lazyLoaderHookFetch;
          }
        } catch (e) {
          console.warn('federation.instance.loaderHook.lifecycle.fetch failed:', e);
        }
      }
      return typeof fetch === 'undefined' ? loadNodeFetch() : fetch;
    });
    return function getFetch() {
      return _ref4.apply(this, arguments);
    };
  }();
  const handleScriptFetch = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(function* (f, urlObj) {
      try {
        var
        //@ts-ignore
        _vm_constants;
        const res = yield f(urlObj.href);
        const data = yield res.text();
        const [path, vm] = yield Promise.all([importNodeModule('path'), importNodeModule('vm')]);
        const scriptContext = {
          exports: {},
          module: {
            exports: {}
          }
        };
        const urlDirname = urlObj.pathname.split('/').slice(0, -1).join('/');
        const filename = path.basename(urlObj.pathname);
        var _vm_constants_USE_MAIN_CONTEXT_DEFAULT_LOADER;
        const script = new vm.Script(`(function(exports, module, require, __dirname, __filename) {${data}\n})`, {
          filename,
          importModuleDynamically: (_vm_constants_USE_MAIN_CONTEXT_DEFAULT_LOADER = (_vm_constants = vm.constants) == null ? void 0 : _vm_constants.USE_MAIN_CONTEXT_DEFAULT_LOADER) != null ? _vm_constants_USE_MAIN_CONTEXT_DEFAULT_LOADER : importNodeModule
        });
        script.runInThisContext()(scriptContext.exports, scriptContext.module, eval('require'), urlDirname, filename);
        const exportedInterface = scriptContext.module.exports || scriptContext.exports;
        if (attrs && exportedInterface && attrs['globalName']) {
          const container = exportedInterface[attrs['globalName']] || exportedInterface;
          cb(undefined, container);
          return;
        }
        cb(undefined, exportedInterface);
      } catch (e) {
        cb(e instanceof Error ? e : new Error(`Script execution error: ${e}`));
      }
    });
    return function handleScriptFetch(_x7, _x8) {
      return _ref5.apply(this, arguments);
    };
  }();
  getFetch().then( /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(function* (f) {
      if ((attrs == null ? void 0 : attrs['type']) === 'esm' || (attrs == null ? void 0 : attrs['type']) === 'module') {
        return loadModule(urlObj.href, {
          fetch: f,
          vm: yield importNodeModule('vm')
        }).then( /*#__PURE__*/function () {
          var _ref7 = _asyncToGenerator(function* (module) {
            yield module.evaluate();
            cb(undefined, module.namespace);
          });
          return function (_x10) {
            return _ref7.apply(this, arguments);
          };
        }()).catch(e => {
          cb(e instanceof Error ? e : new Error(`Script execution error: ${e}`));
        });
      }
      handleScriptFetch(f, urlObj);
    });
    return function (_x9) {
      return _ref6.apply(this, arguments);
    };
  }()).catch(err => {
    cb(err);
  });
}
function loadScriptNode(url, info) {
  return new Promise((resolve, reject) => {
    createScriptNode(url, (error, scriptContext) => {
      if (error) {
        reject(error);
      } else {
        var _info_attrs, _info_attrs1;
        const remoteEntryKey = (info == null ? void 0 : (_info_attrs = info.attrs) == null ? void 0 : _info_attrs['globalName']) || `__FEDERATION_${info == null ? void 0 : (_info_attrs1 = info.attrs) == null ? void 0 : _info_attrs1['name']}:custom__`;
        const entryExports = globalThis[remoteEntryKey] = scriptContext;
        resolve(entryExports);
      }
    }, info.attrs, info.createScriptHook);
  });
}
function loadModule(_x11, _x12) {
  return _loadModule.apply(this, arguments);
}
function _loadModule() {
  _loadModule = _asyncToGenerator(function* (url, options) {
    const {
      fetch: fetch1,
      vm
    } = options;
    const response = yield fetch1(url);
    const code = yield response.text();
    const module = new vm.SourceTextModule(code, {
      // @ts-ignore
      importModuleDynamically: function () {
        var _ref8 = _asyncToGenerator(function* (specifier, script) {
          const resolvedUrl = new URL(specifier, url).href;
          return loadModule(resolvedUrl, options);
        });
        return function importModuleDynamically(_x13, _x14) {
          return _ref8.apply(this, arguments);
        };
      }()
    });
    yield module.link( /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* (specifier) {
        const resolvedUrl = new URL(specifier, url).href;
        const module = yield loadModule(resolvedUrl, options);
        return module;
      });
      return function (_x15) {
        return _ref9.apply(this, arguments);
      };
    }());
    return module;
  });
  return _loadModule.apply(this, arguments);
}
function normalizeOptions(enableDefault, defaultOptions, key) {
  return function (options) {
    if (options === false) {
      return false;
    }
    if (typeof options === 'undefined') {
      if (enableDefault) {
        return defaultOptions;
      } else {
        return false;
      }
    }
    if (options === true) {
      return defaultOptions;
    }
    if (options && typeof options === 'object') {
      return polyfills._extends({}, defaultOptions, options);
    }
    throw new Error(`Unexpected type for \`${key}\`, expect boolean/undefined/object, got: ${typeof options}`);
  };
}
exports.BROWSER_LOG_KEY = BROWSER_LOG_KEY;
exports.BROWSER_LOG_VALUE = BROWSER_LOG_VALUE;
exports.ENCODE_NAME_PREFIX = ENCODE_NAME_PREFIX;
exports.EncodedNameTransformMap = EncodedNameTransformMap;
exports.FederationModuleManifest = FederationModuleManifest;
exports.Logger = Logger;
exports.MANIFEST_EXT = MANIFEST_EXT;
exports.MFModuleType = MFModuleType;
exports.MFPrefetchCommon = MFPrefetchCommon;
exports.MODULE_DEVTOOL_IDENTIFIER = MODULE_DEVTOOL_IDENTIFIER;
exports.ManifestFileName = ManifestFileName;
exports.NameTransformMap = NameTransformMap;
exports.NameTransformSymbol = NameTransformSymbol;
exports.SEPARATOR = SEPARATOR;
exports.StatsFileName = StatsFileName;
exports.TEMP_DIR = TEMP_DIR;
exports.assert = assert;
exports.composeKeyWithSeparator = composeKeyWithSeparator;
exports.containerPlugin = ContainerPlugin;
exports.containerReferencePlugin = ContainerReferencePlugin;
exports.createLink = createLink;
exports.createScript = createScript;
exports.createScriptNode = createScriptNode;
exports.decodeName = decodeName;
exports.encodeName = encodeName;
exports.error = error;
exports.generateExposeFilename = generateExposeFilename;
exports.generateShareFilename = generateShareFilename;
exports.generateSnapshotFromManifest = generateSnapshotFromManifest;
exports.getProcessEnv = getProcessEnv;
exports.getResourceUrl = getResourceUrl;
exports.inferAutoPublicPath = inferAutoPublicPath;
exports.isBrowserEnv = isBrowserEnv;
exports.isDebugMode = isDebugMode;
exports.isManifestProvider = isManifestProvider;
exports.isStaticResourcesEqual = isStaticResourcesEqual;
exports.loadScript = loadScript;
exports.loadScriptNode = loadScriptNode;
exports.logger = logger;
exports.moduleFederationPlugin = ModuleFederationPlugin;
exports.normalizeOptions = normalizeOptions;
exports.parseEntry = parseEntry;
exports.safeToString = safeToString;
exports.safeWrapper = safeWrapper;
exports.sharePlugin = SharePlugin;
exports.simpleJoinRemoteEntry = simpleJoinRemoteEntry;
exports.warn = warn;

/***/ }),

/***/ 7568:
/*!***************************************************************!*\
  !*** ./node_modules/@module-federation/sdk/dist/index.esm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BROWSER_LOG_KEY: () => (/* binding */ BROWSER_LOG_KEY),
/* harmony export */   BROWSER_LOG_VALUE: () => (/* binding */ BROWSER_LOG_VALUE),
/* harmony export */   ENCODE_NAME_PREFIX: () => (/* binding */ ENCODE_NAME_PREFIX),
/* harmony export */   EncodedNameTransformMap: () => (/* binding */ EncodedNameTransformMap),
/* harmony export */   FederationModuleManifest: () => (/* binding */ FederationModuleManifest),
/* harmony export */   Logger: () => (/* binding */ Logger),
/* harmony export */   MANIFEST_EXT: () => (/* binding */ MANIFEST_EXT),
/* harmony export */   MFModuleType: () => (/* binding */ MFModuleType),
/* harmony export */   MFPrefetchCommon: () => (/* binding */ MFPrefetchCommon),
/* harmony export */   MODULE_DEVTOOL_IDENTIFIER: () => (/* binding */ MODULE_DEVTOOL_IDENTIFIER),
/* harmony export */   ManifestFileName: () => (/* binding */ ManifestFileName),
/* harmony export */   NameTransformMap: () => (/* binding */ NameTransformMap),
/* harmony export */   NameTransformSymbol: () => (/* binding */ NameTransformSymbol),
/* harmony export */   SEPARATOR: () => (/* binding */ SEPARATOR),
/* harmony export */   StatsFileName: () => (/* binding */ StatsFileName),
/* harmony export */   TEMP_DIR: () => (/* binding */ TEMP_DIR),
/* harmony export */   assert: () => (/* binding */ assert),
/* harmony export */   composeKeyWithSeparator: () => (/* binding */ composeKeyWithSeparator),
/* harmony export */   containerPlugin: () => (/* binding */ ContainerPlugin),
/* harmony export */   containerReferencePlugin: () => (/* binding */ ContainerReferencePlugin),
/* harmony export */   createLink: () => (/* binding */ createLink),
/* harmony export */   createScript: () => (/* binding */ createScript),
/* harmony export */   createScriptNode: () => (/* binding */ createScriptNode),
/* harmony export */   decodeName: () => (/* binding */ decodeName),
/* harmony export */   encodeName: () => (/* binding */ encodeName),
/* harmony export */   error: () => (/* binding */ error),
/* harmony export */   generateExposeFilename: () => (/* binding */ generateExposeFilename),
/* harmony export */   generateShareFilename: () => (/* binding */ generateShareFilename),
/* harmony export */   generateSnapshotFromManifest: () => (/* binding */ generateSnapshotFromManifest),
/* harmony export */   getProcessEnv: () => (/* binding */ getProcessEnv),
/* harmony export */   getResourceUrl: () => (/* binding */ getResourceUrl),
/* harmony export */   inferAutoPublicPath: () => (/* binding */ inferAutoPublicPath),
/* harmony export */   isBrowserEnv: () => (/* binding */ isBrowserEnv),
/* harmony export */   isDebugMode: () => (/* binding */ isDebugMode),
/* harmony export */   isManifestProvider: () => (/* binding */ isManifestProvider),
/* harmony export */   isStaticResourcesEqual: () => (/* binding */ isStaticResourcesEqual),
/* harmony export */   loadScript: () => (/* binding */ loadScript),
/* harmony export */   loadScriptNode: () => (/* binding */ loadScriptNode),
/* harmony export */   logger: () => (/* binding */ logger),
/* harmony export */   moduleFederationPlugin: () => (/* binding */ ModuleFederationPlugin),
/* harmony export */   normalizeOptions: () => (/* binding */ normalizeOptions),
/* harmony export */   parseEntry: () => (/* binding */ parseEntry),
/* harmony export */   safeToString: () => (/* binding */ safeToString),
/* harmony export */   safeWrapper: () => (/* binding */ safeWrapper),
/* harmony export */   sharePlugin: () => (/* binding */ SharePlugin),
/* harmony export */   simpleJoinRemoteEntry: () => (/* binding */ simpleJoinRemoteEntry),
/* harmony export */   warn: () => (/* binding */ warn)
/* harmony export */ });
/* harmony import */ var C_Users_ASUS_Desktop_cafe_chi_owner_panel_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1890);
/* harmony import */ var _polyfills_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polyfills.esm.js */ 2356);


const FederationModuleManifest = 'federation-manifest.json';
const MANIFEST_EXT = '.json';
const BROWSER_LOG_KEY = 'FEDERATION_DEBUG';
const BROWSER_LOG_VALUE = '1';
const NameTransformSymbol = {
  AT: '@',
  HYPHEN: '-',
  SLASH: '/'
};
const NameTransformMap = {
  [NameTransformSymbol.AT]: 'scope_',
  [NameTransformSymbol.HYPHEN]: '_',
  [NameTransformSymbol.SLASH]: '__'
};
const EncodedNameTransformMap = {
  [NameTransformMap[NameTransformSymbol.AT]]: NameTransformSymbol.AT,
  [NameTransformMap[NameTransformSymbol.HYPHEN]]: NameTransformSymbol.HYPHEN,
  [NameTransformMap[NameTransformSymbol.SLASH]]: NameTransformSymbol.SLASH
};
const SEPARATOR = ':';
const ManifestFileName = 'mf-manifest.json';
const StatsFileName = 'mf-stats.json';
const MFModuleType = {
  NPM: 'npm',
  APP: 'app'
};
const MODULE_DEVTOOL_IDENTIFIER = '__MF_DEVTOOLS_MODULE_INFO__';
const ENCODE_NAME_PREFIX = 'ENCODE_NAME_PREFIX';
const TEMP_DIR = '.federation';
const MFPrefetchCommon = {
  identifier: 'MFDataPrefetch',
  globalKey: '__PREFETCH__',
  library: 'mf-data-prefetch',
  exportsKey: '__PREFETCH_EXPORTS__',
  fileName: 'bootstrap.js'
};
var ContainerPlugin = /*#__PURE__*/Object.freeze({
  __proto__: null
});
var ContainerReferencePlugin = /*#__PURE__*/Object.freeze({
  __proto__: null
});
var ModuleFederationPlugin = /*#__PURE__*/Object.freeze({
  __proto__: null
});
var SharePlugin = /*#__PURE__*/Object.freeze({
  __proto__: null
});
function isBrowserEnv() {
  return typeof window !== 'undefined';
}
function isDebugMode() {
  if (typeof process !== 'undefined' && process.env && process.env['FEDERATION_DEBUG']) {
    return Boolean(process.env['FEDERATION_DEBUG']);
  }
  return typeof FEDERATION_DEBUG !== 'undefined' && Boolean(FEDERATION_DEBUG);
}
const getProcessEnv = function () {
  return typeof process !== 'undefined' && process.env ? process.env : {};
};
const DEBUG_LOG = '[ FEDERATION DEBUG ]';
function safeToString$1(info) {
  try {
    return JSON.stringify(info, null, 2);
  } catch (e) {
    return '';
  }
}
function safeGetLocalStorageItem() {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem(BROWSER_LOG_KEY) === BROWSER_LOG_VALUE;
    }
  } catch (error) {
    return typeof document !== 'undefined';
  }
  return false;
}
let Logger = class Logger {
  info(msg, info) {
    if (this.enable) {
      const argsToString = safeToString$1(info) || '';
      if (isBrowserEnv()) {
        console.info(`%c ${this.identifier}: ${msg} ${argsToString}`, 'color:#3300CC');
      } else {
        console.info('\x1b[34m%s', `${this.identifier}: ${msg} ${argsToString ? `\n${argsToString}` : ''}`);
      }
    }
  }
  logOriginalInfo(...args) {
    if (this.enable) {
      if (isBrowserEnv()) {
        console.info(`%c ${this.identifier}: OriginalInfo`, 'color:#3300CC');
        console.log(...args);
      } else {
        console.info(`%c ${this.identifier}: OriginalInfo`, 'color:#3300CC');
        console.log(...args);
      }
    }
  }
  constructor(identifier) {
    this.enable = false;
    this.identifier = identifier || DEBUG_LOG;
    if (isBrowserEnv() && safeGetLocalStorageItem()) {
      this.enable = true;
    } else if (isDebugMode()) {
      this.enable = true;
    }
  }
};
const LOG_CATEGORY = '[ Federation Runtime ]';
// entry: name:version   version : 1.0.0 | ^1.2.3
// entry: name:entry  entry:  https://localhost:9000/federation-manifest.json
const parseEntry = (str, devVerOrUrl, separator = SEPARATOR) => {
  const strSplit = str.split(separator);
  const devVersionOrUrl = getProcessEnv()['NODE_ENV'] === 'development' && devVerOrUrl;
  const defaultVersion = '*';
  const isEntry = s => s.startsWith('http') || s.includes(MANIFEST_EXT);
  // Check if the string starts with a type
  if (strSplit.length >= 2) {
    let [name, ...versionOrEntryArr] = strSplit;
    if (str.startsWith(separator)) {
      versionOrEntryArr = [devVersionOrUrl || strSplit.slice(-1)[0]];
      name = strSplit.slice(0, -1).join(separator);
    }
    let versionOrEntry = devVersionOrUrl || versionOrEntryArr.join(separator);
    if (isEntry(versionOrEntry)) {
      return {
        name,
        entry: versionOrEntry
      };
    } else {
      // Apply version rule
      // devVersionOrUrl => inputVersion => defaultVersion
      return {
        name,
        version: versionOrEntry || defaultVersion
      };
    }
  } else if (strSplit.length === 1) {
    const [name] = strSplit;
    if (devVersionOrUrl && isEntry(devVersionOrUrl)) {
      return {
        name,
        entry: devVersionOrUrl
      };
    }
    return {
      name,
      version: devVersionOrUrl || defaultVersion
    };
  } else {
    throw `Invalid entry value: ${str}`;
  }
};
const logger = new Logger();
const composeKeyWithSeparator = function (...args) {
  if (!args.length) {
    return '';
  }
  return args.reduce((sum, cur) => {
    if (!cur) {
      return sum;
    }
    if (!sum) {
      return cur;
    }
    return `${sum}${SEPARATOR}${cur}`;
  }, '');
};
const encodeName = function (name, prefix = '', withExt = false) {
  try {
    const ext = withExt ? '.js' : '';
    return `${prefix}${name.replace(new RegExp(`${NameTransformSymbol.AT}`, 'g'), NameTransformMap[NameTransformSymbol.AT]).replace(new RegExp(`${NameTransformSymbol.HYPHEN}`, 'g'), NameTransformMap[NameTransformSymbol.HYPHEN]).replace(new RegExp(`${NameTransformSymbol.SLASH}`, 'g'), NameTransformMap[NameTransformSymbol.SLASH])}${ext}`;
  } catch (err) {
    throw err;
  }
};
const decodeName = function (name, prefix, withExt) {
  try {
    let decodedName = name;
    if (prefix) {
      if (!decodedName.startsWith(prefix)) {
        return decodedName;
      }
      decodedName = decodedName.replace(new RegExp(prefix, 'g'), '');
    }
    decodedName = decodedName.replace(new RegExp(`${NameTransformMap[NameTransformSymbol.AT]}`, 'g'), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.AT]]).replace(new RegExp(`${NameTransformMap[NameTransformSymbol.SLASH]}`, 'g'), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.SLASH]]).replace(new RegExp(`${NameTransformMap[NameTransformSymbol.HYPHEN]}`, 'g'), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.HYPHEN]]);
    if (withExt) {
      decodedName = decodedName.replace('.js', '');
    }
    return decodedName;
  } catch (err) {
    throw err;
  }
};
const generateExposeFilename = (exposeName, withExt) => {
  if (!exposeName) {
    return '';
  }
  let expose = exposeName;
  if (expose === '.') {
    expose = 'default_export';
  }
  if (expose.startsWith('./')) {
    expose = expose.replace('./', '');
  }
  return encodeName(expose, '__federation_expose_', withExt);
};
const generateShareFilename = (pkgName, withExt) => {
  if (!pkgName) {
    return '';
  }
  return encodeName(pkgName, '__federation_shared_', withExt);
};
const getResourceUrl = (module, sourceUrl) => {
  if ('getPublicPath' in module) {
    let publicPath;
    if (!module.getPublicPath.startsWith('function')) {
      publicPath = new Function(module.getPublicPath)();
    } else {
      publicPath = new Function('return ' + module.getPublicPath)()();
    }
    return `${publicPath}${sourceUrl}`;
  } else if ('publicPath' in module) {
    return `${module.publicPath}${sourceUrl}`;
  } else {
    console.warn('Cannot get resource URL. If in debug mode, please ignore.', module, sourceUrl);
    return '';
  }
};
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const assert = (condition, msg) => {
  if (!condition) {
    error(msg);
  }
};
const error = msg => {
  throw new Error(`${LOG_CATEGORY}: ${msg}`);
};
const warn = msg => {
  console.warn(`${LOG_CATEGORY}: ${msg}`);
};
function safeToString(info) {
  try {
    return JSON.stringify(info, null, 2);
  } catch (e) {
    return '';
  }
}
const simpleJoinRemoteEntry = (rPath, rName) => {
  if (!rPath) {
    return rName;
  }
  const transformPath = str => {
    if (str === '.') {
      return '';
    }
    if (str.startsWith('./')) {
      return str.replace('./', '');
    }
    if (str.startsWith('/')) {
      const strWithoutSlash = str.slice(1);
      if (strWithoutSlash.endsWith('/')) {
        return strWithoutSlash.slice(0, -1);
      }
      return strWithoutSlash;
    }
    return str;
  };
  const transformedPath = transformPath(rPath);
  if (!transformedPath) {
    return rName;
  }
  if (transformedPath.endsWith('/')) {
    return `${transformedPath}${rName}`;
  }
  return `${transformedPath}/${rName}`;
};
function inferAutoPublicPath(url) {
  return url.replace(/#.*$/, '').replace(/\?.*$/, '').replace(/\/[^\/]+$/, '/');
}
// Priority: overrides > remotes
// eslint-disable-next-line max-lines-per-function
function generateSnapshotFromManifest(manifest, options = {}) {
  var _manifest_metaData, _manifest_metaData1;
  const {
    remotes = {},
    overrides = {},
    version
  } = options;
  let remoteSnapshot;
  const getPublicPath = () => {
    if ('publicPath' in manifest.metaData) {
      if (manifest.metaData.publicPath === 'auto' && version) {
        // use same implementation as publicPath auto runtime module implements
        return inferAutoPublicPath(version);
      }
      return manifest.metaData.publicPath;
    } else {
      return manifest.metaData.getPublicPath;
    }
  };
  const overridesKeys = Object.keys(overrides);
  let remotesInfo = {};
  // If remotes are not provided, only the remotes in the manifest will be read
  if (!Object.keys(remotes).length) {
    var _manifest_remotes;
    remotesInfo = ((_manifest_remotes = manifest.remotes) == null ? void 0 : _manifest_remotes.reduce((res, next) => {
      let matchedVersion;
      const name = next.federationContainerName;
      // overrides have higher priority
      if (overridesKeys.includes(name)) {
        matchedVersion = overrides[name];
      } else {
        if ('version' in next) {
          matchedVersion = next.version;
        } else {
          matchedVersion = next.entry;
        }
      }
      res[name] = {
        matchedVersion
      };
      return res;
    }, {})) || {};
  }
  // If remotes (deploy scenario) are specified, they need to be traversed again
  Object.keys(remotes).forEach(key => remotesInfo[key] = {
    // overrides will override dependencies
    matchedVersion: overridesKeys.includes(key) ? overrides[key] : remotes[key]
  });
  const {
    remoteEntry: {
      path: remoteEntryPath,
      name: remoteEntryName,
      type: remoteEntryType
    },
    types: remoteTypes,
    buildInfo: {
      buildVersion
    },
    globalName,
    ssrRemoteEntry
  } = manifest.metaData;
  const {
    exposes
  } = manifest;
  let basicRemoteSnapshot = {
    version: version ? version : '',
    buildVersion,
    globalName,
    remoteEntry: simpleJoinRemoteEntry(remoteEntryPath, remoteEntryName),
    remoteEntryType,
    remoteTypes: simpleJoinRemoteEntry(remoteTypes.path, remoteTypes.name),
    remoteTypesZip: remoteTypes.zip || '',
    remoteTypesAPI: remoteTypes.api || '',
    remotesInfo,
    shared: manifest == null ? void 0 : manifest.shared.map(item => ({
      assets: item.assets,
      sharedName: item.name,
      version: item.version
    })),
    modules: exposes == null ? void 0 : exposes.map(expose => ({
      moduleName: expose.name,
      modulePath: expose.path,
      assets: expose.assets
    }))
  };
  if ((_manifest_metaData = manifest.metaData) == null ? void 0 : _manifest_metaData.prefetchInterface) {
    const prefetchInterface = manifest.metaData.prefetchInterface;
    basicRemoteSnapshot = (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_1__._)({}, basicRemoteSnapshot, {
      prefetchInterface
    });
  }
  if ((_manifest_metaData1 = manifest.metaData) == null ? void 0 : _manifest_metaData1.prefetchEntry) {
    const {
      path,
      name,
      type
    } = manifest.metaData.prefetchEntry;
    basicRemoteSnapshot = (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_1__._)({}, basicRemoteSnapshot, {
      prefetchEntry: simpleJoinRemoteEntry(path, name),
      prefetchEntryType: type
    });
  }
  if ('publicPath' in manifest.metaData) {
    remoteSnapshot = (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_1__._)({}, basicRemoteSnapshot, {
      publicPath: getPublicPath()
    });
  } else {
    remoteSnapshot = (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_1__._)({}, basicRemoteSnapshot, {
      getPublicPath: getPublicPath()
    });
  }
  if (ssrRemoteEntry) {
    const fullSSRRemoteEntry = simpleJoinRemoteEntry(ssrRemoteEntry.path, ssrRemoteEntry.name);
    remoteSnapshot.ssrRemoteEntry = fullSSRRemoteEntry;
    remoteSnapshot.ssrRemoteEntryType = ssrRemoteEntry.type || 'commonjs-module';
  }
  return remoteSnapshot;
}
function isManifestProvider(moduleInfo) {
  if ('remoteEntry' in moduleInfo && moduleInfo.remoteEntry.includes(MANIFEST_EXT)) {
    return true;
  } else {
    return false;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function safeWrapper(_x, _x2) {
  return _safeWrapper.apply(this, arguments);
}
function _safeWrapper() {
  _safeWrapper = (0,C_Users_ASUS_Desktop_cafe_chi_owner_panel_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (callback, disableWarn) {
    try {
      const res = yield callback();
      return res;
    } catch (e) {
      !disableWarn && warn(e);
      return;
    }
  });
  return _safeWrapper.apply(this, arguments);
}
function isStaticResourcesEqual(url1, url2) {
  const REG_EXP = /^(https?:)?\/\//i;
  // Transform url1 and url2 into relative paths
  const relativeUrl1 = url1.replace(REG_EXP, '').replace(/\/$/, '');
  const relativeUrl2 = url2.replace(REG_EXP, '').replace(/\/$/, '');
  // Check if the relative paths are identical
  return relativeUrl1 === relativeUrl2;
}
function createScript(info) {
  // Retrieve the existing script element by its src attribute
  let script = null;
  let needAttach = true;
  let timeout = 20000;
  let timeoutId;
  const scripts = document.getElementsByTagName('script');
  for (let i = 0; i < scripts.length; i++) {
    const s = scripts[i];
    const scriptSrc = s.getAttribute('src');
    if (scriptSrc && isStaticResourcesEqual(scriptSrc, info.url)) {
      script = s;
      needAttach = false;
      break;
    }
  }
  if (!script) {
    const attrs = info.attrs;
    script = document.createElement('script');
    script.type = (attrs == null ? void 0 : attrs['type']) === 'module' ? 'module' : 'text/javascript';
    script.src = info.url;
    let createScriptRes = undefined;
    if (info.createScriptHook) {
      createScriptRes = info.createScriptHook(info.url, info.attrs);
      if (createScriptRes instanceof HTMLScriptElement) {
        script = createScriptRes;
      } else if (typeof createScriptRes === 'object') {
        if ('script' in createScriptRes && createScriptRes.script) {
          script = createScriptRes.script;
        }
        if ('timeout' in createScriptRes && createScriptRes.timeout) {
          timeout = createScriptRes.timeout;
        }
      }
    }
    if (attrs && !createScriptRes) {
      Object.keys(attrs).forEach(name => {
        if (script) {
          if (name === 'async' || name === 'defer') {
            script[name] = attrs[name];
            // Attributes that do not exist are considered overridden
          } else if (!script.getAttribute(name)) {
            script.setAttribute(name, attrs[name]);
          }
        }
      });
    }
  }
  const onScriptComplete = /*#__PURE__*/function () {
    var _ref = (0,C_Users_ASUS_Desktop_cafe_chi_owner_panel_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (prev,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    event) {
      var _info_cb;
      clearTimeout(timeoutId);
      // Prevent memory leaks in IE.
      if (script) {
        script.onerror = null;
        script.onload = null;
        safeWrapper(() => {
          const {
            needDeleteScript = true
          } = info;
          if (needDeleteScript) {
            (script == null ? void 0 : script.parentNode) && script.parentNode.removeChild(script);
          }
        });
        if (prev && typeof prev === 'function') {
          var _info_cb1;
          const result = prev(event);
          if (result instanceof Promise) {
            var _info_cb2;
            const res = yield result;
            info == null ? void 0 : (_info_cb2 = info.cb) == null ? void 0 : _info_cb2.call(info);
            return res;
          }
          info == null ? void 0 : (_info_cb1 = info.cb) == null ? void 0 : _info_cb1.call(info);
          return result;
        }
      }
      info == null ? void 0 : (_info_cb = info.cb) == null ? void 0 : _info_cb.call(info);
    });
    return function onScriptComplete(_x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }();
  script.onerror = onScriptComplete.bind(null, script.onerror);
  script.onload = onScriptComplete.bind(null, script.onload);
  timeoutId = setTimeout(() => {
    onScriptComplete(null, new Error(`Remote script "${info.url}" time-outed.`));
  }, timeout);
  return {
    script,
    needAttach
  };
}
function createLink(info) {
  // <link rel="preload" href="script.js" as="script">
  // Retrieve the existing script element by its src attribute
  let link = null;
  let needAttach = true;
  const links = document.getElementsByTagName('link');
  for (let i = 0; i < links.length; i++) {
    const l = links[i];
    const linkHref = l.getAttribute('href');
    const linkRef = l.getAttribute('ref');
    if (linkHref && isStaticResourcesEqual(linkHref, info.url) && linkRef === info.attrs['ref']) {
      link = l;
      needAttach = false;
      break;
    }
  }
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('href', info.url);
    let createLinkRes = undefined;
    const attrs = info.attrs;
    if (info.createLinkHook) {
      createLinkRes = info.createLinkHook(info.url, attrs);
      if (createLinkRes instanceof HTMLLinkElement) {
        link = createLinkRes;
      }
    }
    if (attrs && !createLinkRes) {
      Object.keys(attrs).forEach(name => {
        if (link && !link.getAttribute(name)) {
          link.setAttribute(name, attrs[name]);
        }
      });
    }
  }
  const onLinkComplete = (prev,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  event) => {
    // Prevent memory leaks in IE.
    if (link) {
      link.onerror = null;
      link.onload = null;
      safeWrapper(() => {
        const {
          needDeleteLink = true
        } = info;
        if (needDeleteLink) {
          (link == null ? void 0 : link.parentNode) && link.parentNode.removeChild(link);
        }
      });
      if (prev) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const res = prev(event);
        info.cb();
        return res;
      }
    }
    info.cb();
  };
  link.onerror = onLinkComplete.bind(null, link.onerror);
  link.onload = onLinkComplete.bind(null, link.onload);
  return {
    link,
    needAttach
  };
}
function loadScript(url, info) {
  const {
    attrs = {},
    createScriptHook
  } = info;
  return new Promise((resolve, _reject) => {
    const {
      script,
      needAttach
    } = createScript({
      url,
      cb: resolve,
      attrs: (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_1__._)({
        fetchpriority: 'high'
      }, attrs),
      createScriptHook,
      needDeleteScript: true
    });
    needAttach && document.head.appendChild(script);
  });
}
function importNodeModule(name) {
  if (!name) {
    throw new Error('import specifier is required');
  }
  const importModule = new Function('name', `return import(name)`);
  return importModule(name).then(res => res).catch(error => {
    console.error(`Error importing module ${name}:`, error);
    throw error;
  });
}
const loadNodeFetch = /*#__PURE__*/function () {
  var _ref2 = (0,C_Users_ASUS_Desktop_cafe_chi_owner_panel_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    const fetchModule = yield importNodeModule('node-fetch');
    return fetchModule.default || fetchModule;
  });
  return function loadNodeFetch() {
    return _ref2.apply(this, arguments);
  };
}();
const lazyLoaderHookFetch = /*#__PURE__*/function () {
  var _ref3 = (0,C_Users_ASUS_Desktop_cafe_chi_owner_panel_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (input, init) {
    // @ts-ignore
    const loaderHooks = __webpack_require__.federation.instance.loaderHook;
    const hook = (url, init) => {
      return loaderHooks.lifecycle.fetch.emit(url, init);
    };
    const res = yield hook(input, init || {});
    if (!res || !(res instanceof Response)) {
      const fetchFunction = typeof fetch === 'undefined' ? yield loadNodeFetch() : fetch;
      return fetchFunction(input, init || {});
    }
    return res;
  });
  return function lazyLoaderHookFetch(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
function createScriptNode(url, cb, attrs, createScriptHook) {
  if (createScriptHook) {
    const hookResult = createScriptHook(url);
    if (hookResult && typeof hookResult === 'object' && 'url' in hookResult) {
      url = hookResult.url;
    }
  }
  let urlObj;
  try {
    urlObj = new URL(url);
  } catch (e) {
    console.error('Error constructing URL:', e);
    cb(new Error(`Invalid URL: ${e}`));
    return;
  }
  const getFetch = /*#__PURE__*/function () {
    var _ref4 = (0,C_Users_ASUS_Desktop_cafe_chi_owner_panel_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //@ts-ignore
      if (true) {
        try {
          //@ts-ignore
          const loaderHooks = __webpack_require__.federation.instance.loaderHook;
          if (loaderHooks.lifecycle.fetch) {
            return lazyLoaderHookFetch;
          }
        } catch (e) {
          console.warn('federation.instance.loaderHook.lifecycle.fetch failed:', e);
        }
      }
      return typeof fetch === 'undefined' ? loadNodeFetch() : fetch;
    });
    return function getFetch() {
      return _ref4.apply(this, arguments);
    };
  }();
  const handleScriptFetch = /*#__PURE__*/function () {
    var _ref5 = (0,C_Users_ASUS_Desktop_cafe_chi_owner_panel_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (f, urlObj) {
      try {
        var
        //@ts-ignore
        _vm_constants;
        const res = yield f(urlObj.href);
        const data = yield res.text();
        const [path, vm] = yield Promise.all([importNodeModule('path'), importNodeModule('vm')]);
        const scriptContext = {
          exports: {},
          module: {
            exports: {}
          }
        };
        const urlDirname = urlObj.pathname.split('/').slice(0, -1).join('/');
        const filename = path.basename(urlObj.pathname);
        var _vm_constants_USE_MAIN_CONTEXT_DEFAULT_LOADER;
        const script = new vm.Script(`(function(exports, module, require, __dirname, __filename) {${data}\n})`, {
          filename,
          importModuleDynamically: (_vm_constants_USE_MAIN_CONTEXT_DEFAULT_LOADER = (_vm_constants = vm.constants) == null ? void 0 : _vm_constants.USE_MAIN_CONTEXT_DEFAULT_LOADER) != null ? _vm_constants_USE_MAIN_CONTEXT_DEFAULT_LOADER : importNodeModule
        });
        script.runInThisContext()(scriptContext.exports, scriptContext.module, eval('require'), urlDirname, filename);
        const exportedInterface = scriptContext.module.exports || scriptContext.exports;
        if (attrs && exportedInterface && attrs['globalName']) {
          const container = exportedInterface[attrs['globalName']] || exportedInterface;
          cb(undefined, container);
          return;
        }
        cb(undefined, exportedInterface);
      } catch (e) {
        cb(e instanceof Error ? e : new Error(`Script execution error: ${e}`));
      }
    });
    return function handleScriptFetch(_x7, _x8) {
      return _ref5.apply(this, arguments);
    };
  }();
  getFetch().then( /*#__PURE__*/function () {
    var _ref6 = (0,C_Users_ASUS_Desktop_cafe_chi_owner_panel_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (f) {
      if ((attrs == null ? void 0 : attrs['type']) === 'esm' || (attrs == null ? void 0 : attrs['type']) === 'module') {
        return loadModule(urlObj.href, {
          fetch: f,
          vm: yield importNodeModule('vm')
        }).then( /*#__PURE__*/function () {
          var _ref7 = (0,C_Users_ASUS_Desktop_cafe_chi_owner_panel_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (module) {
            yield module.evaluate();
            cb(undefined, module.namespace);
          });
          return function (_x10) {
            return _ref7.apply(this, arguments);
          };
        }()).catch(e => {
          cb(e instanceof Error ? e : new Error(`Script execution error: ${e}`));
        });
      }
      handleScriptFetch(f, urlObj);
    });
    return function (_x9) {
      return _ref6.apply(this, arguments);
    };
  }()).catch(err => {
    cb(err);
  });
}
function loadScriptNode(url, info) {
  return new Promise((resolve, reject) => {
    createScriptNode(url, (error, scriptContext) => {
      if (error) {
        reject(error);
      } else {
        var _info_attrs, _info_attrs1;
        const remoteEntryKey = (info == null ? void 0 : (_info_attrs = info.attrs) == null ? void 0 : _info_attrs['globalName']) || `__FEDERATION_${info == null ? void 0 : (_info_attrs1 = info.attrs) == null ? void 0 : _info_attrs1['name']}:custom__`;
        const entryExports = globalThis[remoteEntryKey] = scriptContext;
        resolve(entryExports);
      }
    }, info.attrs, info.createScriptHook);
  });
}
function loadModule(_x11, _x12) {
  return _loadModule.apply(this, arguments);
}
function _loadModule() {
  _loadModule = (0,C_Users_ASUS_Desktop_cafe_chi_owner_panel_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (url, options) {
    const {
      fetch: fetch1,
      vm
    } = options;
    const response = yield fetch1(url);
    const code = yield response.text();
    const module = new vm.SourceTextModule(code, {
      // @ts-ignore
      importModuleDynamically: function () {
        var _ref8 = (0,C_Users_ASUS_Desktop_cafe_chi_owner_panel_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (specifier, script) {
          const resolvedUrl = new URL(specifier, url).href;
          return loadModule(resolvedUrl, options);
        });
        return function importModuleDynamically(_x13, _x14) {
          return _ref8.apply(this, arguments);
        };
      }()
    });
    yield module.link( /*#__PURE__*/function () {
      var _ref9 = (0,C_Users_ASUS_Desktop_cafe_chi_owner_panel_front_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (specifier) {
        const resolvedUrl = new URL(specifier, url).href;
        const module = yield loadModule(resolvedUrl, options);
        return module;
      });
      return function (_x15) {
        return _ref9.apply(this, arguments);
      };
    }());
    return module;
  });
  return _loadModule.apply(this, arguments);
}
function normalizeOptions(enableDefault, defaultOptions, key) {
  return function (options) {
    if (options === false) {
      return false;
    }
    if (typeof options === 'undefined') {
      if (enableDefault) {
        return defaultOptions;
      } else {
        return false;
      }
    }
    if (options === true) {
      return defaultOptions;
    }
    if (options && typeof options === 'object') {
      return (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_1__._)({}, defaultOptions, options);
    }
    throw new Error(`Unexpected type for \`${key}\`, expect boolean/undefined/object, got: ${typeof options}`);
  };
}


/***/ }),

/***/ 349:
/*!*******************************************************************!*\
  !*** ./node_modules/@module-federation/sdk/dist/polyfills.cjs.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {



function _extends() {
  _extends = Object.assign || function assign(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
exports._extends = _extends;

/***/ }),

/***/ 2356:
/*!*******************************************************************!*\
  !*** ./node_modules/@module-federation/sdk/dist/polyfills.esm.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function assign(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
    }
    return target;
  };
  return _extends.apply(this, arguments);
}


/***/ }),

/***/ 7844:
/*!**************************************************************************************!*\
  !*** ./node_modules/@module-federation/webpack-bundler-runtime/dist/constant.cjs.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var sdk = __webpack_require__(/*! @module-federation/sdk */ 5305);
const FEDERATION_SUPPORTED_TYPES = ['script'];
Object.defineProperty(exports, "ENCODE_NAME_PREFIX", ({
  enumerable: true,
  get: function () {
    return sdk.ENCODE_NAME_PREFIX;
  }
}));
exports.FEDERATION_SUPPORTED_TYPES = FEDERATION_SUPPORTED_TYPES;

/***/ }),

/***/ 9578:
/*!***********************************************************************************!*\
  !*** ./node_modules/@module-federation/webpack-bundler-runtime/dist/index.cjs.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var runtime = __webpack_require__(/*! @module-federation/runtime */ 3497);
var constant = __webpack_require__(/*! ./constant.cjs.js */ 7844);
var sdk = __webpack_require__(/*! @module-federation/sdk */ 5305);
var polyfills = __webpack_require__(/*! ./polyfills.cjs.js */ 6774);
function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}
var runtime__namespace = /*#__PURE__*/_interopNamespaceDefault(runtime);
function attachShareScopeMap(webpackRequire) {
  if (!webpackRequire.S || webpackRequire.federation.hasAttachShareScopeMap || !webpackRequire.federation.instance || !webpackRequire.federation.instance.shareScopeMap) {
    return;
  }
  webpackRequire.S = webpackRequire.federation.instance.shareScopeMap;
  webpackRequire.federation.hasAttachShareScopeMap = true;
}
function remotes(options) {
  const {
    chunkId,
    promises,
    chunkMapping,
    idToExternalAndNameMapping,
    webpackRequire,
    idToRemoteMap
  } = options;
  attachShareScopeMap(webpackRequire);
  if (webpackRequire.o(chunkMapping, chunkId)) {
    chunkMapping[chunkId].forEach(id => {
      let getScope = webpackRequire.R;
      if (!getScope) {
        getScope = [];
      }
      const data = idToExternalAndNameMapping[id];
      const remoteInfos = idToRemoteMap[id];
      // @ts-ignore seems not work
      if (getScope.indexOf(data) >= 0) {
        return;
      }
      // @ts-ignore seems not work
      getScope.push(data);
      if (data.p) {
        return promises.push(data.p);
      }
      const onError = error => {
        if (!error) {
          error = new Error('Container missing');
        }
        if (typeof error.message === 'string') {
          error.message += `\nwhile loading "${data[1]}" from ${data[2]}`;
        }
        webpackRequire.m[id] = () => {
          throw error;
        };
        data.p = 0;
      };
      const handleFunction = (fn, arg1, arg2, d, next, first) => {
        try {
          const promise = fn(arg1, arg2);
          if (promise && promise.then) {
            const p = promise.then(result => next(result, d), onError);
            if (first) {
              promises.push(data.p = p);
            } else {
              return p;
            }
          } else {
            return next(promise, d, first);
          }
        } catch (error) {
          onError(error);
        }
      };
      const onExternal = (external, _, first) => external ? handleFunction(webpackRequire.I, data[0], 0, external, onInitialized, first) : onError();
      // eslint-disable-next-line no-var
      var onInitialized = (_, external, first) => handleFunction(external.get, data[1], getScope, 0, onFactory, first);
      // eslint-disable-next-line no-var
      var onFactory = factory => {
        data.p = 1;
        webpackRequire.m[id] = module => {
          module.exports = factory();
        };
      };
      const onRemoteLoaded = () => {
        try {
          const remoteName = sdk.decodeName(remoteInfos[0].name, sdk.ENCODE_NAME_PREFIX);
          const remoteModuleName = remoteName + data[1].slice(1);
          return webpackRequire.federation.instance.loadRemote(remoteModuleName, {
            loadFactory: false,
            from: 'build'
          });
        } catch (error) {
          onError(error);
        }
      };
      const useRuntimeLoad = remoteInfos.length === 1 && constant.FEDERATION_SUPPORTED_TYPES.includes(remoteInfos[0].externalType) && remoteInfos[0].name;
      if (useRuntimeLoad) {
        handleFunction(onRemoteLoaded, data[2], 0, 0, onFactory, 1);
      } else {
        handleFunction(webpackRequire, data[2], 0, 0, onExternal, 1);
      }
    });
  }
}
function consumes(options) {
  const {
    chunkId,
    promises,
    chunkMapping,
    installedModules,
    moduleToHandlerMapping,
    webpackRequire
  } = options;
  attachShareScopeMap(webpackRequire);
  if (webpackRequire.o(chunkMapping, chunkId)) {
    chunkMapping[chunkId].forEach(id => {
      if (webpackRequire.o(installedModules, id)) {
        return promises.push(installedModules[id]);
      }
      const onFactory = factory => {
        installedModules[id] = 0;
        webpackRequire.m[id] = module => {
          delete webpackRequire.c[id];
          module.exports = factory();
        };
      };
      const onError = error => {
        delete installedModules[id];
        webpackRequire.m[id] = module => {
          delete webpackRequire.c[id];
          throw error;
        };
      };
      try {
        const federationInstance = webpackRequire.federation.instance;
        if (!federationInstance) {
          throw new Error('Federation instance not found!');
        }
        const {
          shareKey,
          getter,
          shareInfo
        } = moduleToHandlerMapping[id];
        const promise = federationInstance.loadShare(shareKey, {
          customShareInfo: shareInfo
        }).then(factory => {
          if (factory === false) {
            return getter();
          }
          return factory;
        });
        if (promise.then) {
          promises.push(installedModules[id] = promise.then(onFactory).catch(onError));
        } else {
          // @ts-ignore maintain previous logic
          onFactory(promise);
        }
      } catch (e) {
        onError(e);
      }
    });
  }
}
function initializeSharing({
  shareScopeName,
  webpackRequire,
  initPromises,
  initTokens,
  initScope
}) {
  if (!initScope) initScope = [];
  const mfInstance = webpackRequire.federation.instance;
  // handling circular init calls
  var initToken = initTokens[shareScopeName];
  if (!initToken) initToken = initTokens[shareScopeName] = {
    from: mfInstance.name
  };
  if (initScope.indexOf(initToken) >= 0) return;
  initScope.push(initToken);
  const promise = initPromises[shareScopeName];
  if (promise) return promise;
  var warn = msg => typeof console !== 'undefined' && console.warn && console.warn(msg);
  var initExternal = id => {
    var handleError = err => warn('Initialization of sharing external failed: ' + err);
    try {
      var module = webpackRequire(id);
      if (!module) return;
      var initFn = module => module && module.init &&
      // @ts-ignore compat legacy mf shared behavior
      module.init(webpackRequire.S[shareScopeName], initScope);
      if (module.then) return promises.push(module.then(initFn, handleError));
      var initResult = initFn(module);
      // @ts-ignore
      if (initResult && typeof initResult !== 'boolean' && initResult.then)
        // @ts-ignore
        return promises.push(initResult['catch'](handleError));
    } catch (err) {
      handleError(err);
    }
  };
  const promises = mfInstance.initializeSharing(shareScopeName, {
    strategy: mfInstance.options.shareStrategy,
    initScope,
    from: 'build'
  });
  attachShareScopeMap(webpackRequire);
  const bundlerRuntimeRemotesOptions = webpackRequire.federation.bundlerRuntimeOptions.remotes;
  if (bundlerRuntimeRemotesOptions) {
    Object.keys(bundlerRuntimeRemotesOptions.idToRemoteMap).forEach(moduleId => {
      const info = bundlerRuntimeRemotesOptions.idToRemoteMap[moduleId];
      const externalModuleId = bundlerRuntimeRemotesOptions.idToExternalAndNameMapping[moduleId][2];
      if (info.length > 1) {
        initExternal(externalModuleId);
      } else if (info.length === 1) {
        const remoteInfo = info[0];
        if (!constant.FEDERATION_SUPPORTED_TYPES.includes(remoteInfo.externalType)) {
          initExternal(externalModuleId);
        }
      }
    });
  }
  if (!promises.length) {
    return initPromises[shareScopeName] = true;
  }
  return initPromises[shareScopeName] = Promise.all(promises).then(() => initPromises[shareScopeName] = true);
}
function handleInitialConsumes(options) {
  const {
    moduleId,
    moduleToHandlerMapping,
    webpackRequire
  } = options;
  const federationInstance = webpackRequire.federation.instance;
  if (!federationInstance) {
    throw new Error('Federation instance not found!');
  }
  const {
    shareKey,
    shareInfo
  } = moduleToHandlerMapping[moduleId];
  try {
    return federationInstance.loadShareSync(shareKey, {
      customShareInfo: shareInfo
    });
  } catch (err) {
    console.error('loadShareSync failed! The function should not be called unless you set "eager:true". If you do not set it, and encounter this issue, you can check whether an async boundary is implemented.');
    console.error('The original error message is as follows: ');
    throw err;
  }
}
function installInitialConsumes(options) {
  const {
    moduleToHandlerMapping,
    webpackRequire,
    installedModules,
    initialConsumes
  } = options;
  initialConsumes.forEach(id => {
    webpackRequire.m[id] = module => {
      // Handle scenario when module is used synchronously
      installedModules[id] = 0;
      delete webpackRequire.c[id];
      const factory = handleInitialConsumes({
        moduleId: id,
        moduleToHandlerMapping,
        webpackRequire
      });
      if (typeof factory !== 'function') {
        throw new Error(`Shared module is not available for eager consumption: ${id}`);
      }
      module.exports = factory();
    };
  });
}
function initContainerEntry(options) {
  const {
    webpackRequire,
    shareScope,
    initScope,
    shareScopeKey,
    remoteEntryInitOptions
  } = options;
  if (!webpackRequire.S) return;
  if (!webpackRequire.federation || !webpackRequire.federation.instance || !webpackRequire.federation.initOptions) return;
  const federationInstance = webpackRequire.federation.instance;
  var name = shareScopeKey || 'default';
  federationInstance.initOptions(polyfills._extends({
    name: webpackRequire.federation.initOptions.name,
    remotes: []
  }, remoteEntryInitOptions));
  federationInstance.initShareScopeMap(name, shareScope, {
    hostShareScopeMap: (remoteEntryInitOptions == null ? void 0 : remoteEntryInitOptions.shareScopeMap) || {}
  });
  if (webpackRequire.federation.attachShareScopeMap) {
    webpackRequire.federation.attachShareScopeMap(webpackRequire);
  }
  if (typeof webpackRequire.federation.prefetch === 'function') {
    webpackRequire.federation.prefetch();
  }
  // @ts-ignore
  return webpackRequire.I(name, initScope);
}
const federation = {
  runtime: runtime__namespace,
  instance: undefined,
  initOptions: undefined,
  bundlerRuntime: {
    remotes,
    consumes,
    I: initializeSharing,
    S: {},
    installInitialConsumes,
    initContainerEntry
  },
  attachShareScopeMap,
  bundlerRuntimeOptions: {}
};
module.exports = federation;

/***/ }),

/***/ 6774:
/*!***************************************************************************************!*\
  !*** ./node_modules/@module-federation/webpack-bundler-runtime/dist/polyfills.cjs.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



function _extends() {
  _extends = Object.assign || function assign(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
exports._extends = _extends;

/***/ }),

/***/ 844:
/*!********************************************************************************************************!*\
  !*** ./node_modules/@nx/webpack/src/utils/module-federation/plugins/runtime-library-control.plugin.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
const runtimeStore = {
  sharedPackagesFromDev: {}
};
if (true) {
  // process.env.NX_MF_DEV_REMOTES is replaced by an array value via DefinePlugin, even though the original value is a stringified array.
  runtimeStore.devRemotes = ["shell"];
}
const nxRuntimeLibraryControlPlugin = function () {
  return {
    name: 'nx-runtime-library-control-plugin',
    beforeInit(args) {
      runtimeStore.name = args.options.name;
      return args;
    },
    resolveShare: args => {
      const {
        shareScopeMap,
        scope,
        pkgName,
        version,
        GlobalFederation
      } = args;
      const originalResolver = args.resolver;
      args.resolver = function () {
        if (!runtimeStore.sharedPackagesFromDev[pkgName]) {
          if (!GlobalFederation.__INSTANCES__) {
            return originalResolver();
          } else if (!runtimeStore.devRemotes) {
            return originalResolver();
          }
          const devRemoteInstanceToUse = GlobalFederation.__INSTANCES__.find(instance => instance.options.shared[pkgName] && runtimeStore.devRemotes.find(dr => instance.name === dr));
          if (!devRemoteInstanceToUse) {
            return originalResolver();
          }
          runtimeStore.sharedPackagesFromDev[pkgName] = devRemoteInstanceToUse.name;
        }
        const remoteInstanceName = runtimeStore.sharedPackagesFromDev[pkgName];
        const remoteInstance = GlobalFederation.__INSTANCES__.find(instance => instance.name === remoteInstanceName);
        try {
          const remotePkgInfo = remoteInstance.options.shared[pkgName].find(shared => shared.from === remoteInstanceName);
          remotePkgInfo.useIn.push(runtimeStore.name);
          remotePkgInfo.useIn = Array.from(new Set(remotePkgInfo.useIn));
          shareScopeMap[scope][pkgName][version] = remotePkgInfo;
          return remotePkgInfo;
        } catch {
          return originalResolver();
        }
      };
      return args;
    }
  };
};
exports["default"] = nxRuntimeLibraryControlPlugin;

/***/ }),

/***/ 5000:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \************************************************************************************************************/
/***/ ((module) => {

function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 1890:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}


/***/ })

}])
//# sourceMappingURL=vendor.js.map