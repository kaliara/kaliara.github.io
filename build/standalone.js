!(function (e) {
    var t = {};
    function __webpack_require__(r) {
        if (t[r]) return t[r].exports;
        var i = (t[r] = { i: r, l: !1, exports: {} });
        return e[r].call(i.exports, i, i.exports, __webpack_require__), (i.l = !0), i.exports;
    }
    (__webpack_require__.m = e),
        (__webpack_require__.c = t),
        (__webpack_require__.d = function (e, t, r) {
            __webpack_require__.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
        }),
        (__webpack_require__.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (__webpack_require__.t = function (e, t) {
            if ((1 & t && (e = __webpack_require__(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if ((__webpack_require__.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var i in e)
                    __webpack_require__.d(
                        r,
                        i,
                        function (t) {
                            return e[t];
                        }.bind(null, i)
                    );
            return r;
        }),
        (__webpack_require__.n = function (e) {
            var t =
                e && e.__esModule
                    ? function getDefault() {
                          return e.default;
                      }
                    : function getModuleExports() {
                          return e;
                      };
            return __webpack_require__.d(t, "a", t), t;
        }),
        (__webpack_require__.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (__webpack_require__.p = ""),
        __webpack_require__((__webpack_require__.s = 42));
})([
    function (e, t) {
        e.exports = Framer;
    },
    function (e, t) {
        e.exports = React;
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = r(15);
        t.assert = i.assert;
        var n = r(16);
        t.warnOnce = n.warnOnce;
        var o = r(44);
        t.deprecationWarning = o.deprecationWarning;
        var a = r(45);
        (t.getLogger = a.getLogger), (t.setLogLevel = a.setLogLevel), (t.getLogReplayBuffer = a.getLogReplayBuffer), (t.LogLevel = a.LogLevel), (t.Logger = a.Logger);
        var s = r(18);
        (t.unhandledError = s.unhandledError), (t.setErrorReporter = s.setErrorReporter);
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
            (function (e) {
                e.log = {
                    extend: () => e.log,
                    debug: () => {},
                    warn: () => {
                        throw Error("ServiceDebugging.log must be initialized before using any Services API");
                    },
                };
            })(t.ServiceDebugging || (t.ServiceDebugging = {})),
            (function (e) {
                let t;
                (e._isTesting = !1),
                    (e._testWithShared = async function _testWithShared(r, i) {
                        if (!e._isTesting) throw new Error("ServiceManager.isTesting must be true to use testWithShared()");
                        if (t) throw new Error("ServiceManager.testWithShared() may not be nested");
                        try {
                            return (t = r), await i();
                        } catch (n) {
                            throw n;
                        } finally {
                            t = void 0;
                        }
                    }),
                    (e._sharedServiceManagerIfTesting = function _sharedServiceManagerIfTesting() {
                        if (e._isTesting) {
                            if (t) return t;
                            throw new Error("ServiceManager.shared() may not be used while testing. Use testWithShared() for explicitness.");
                        }
                    });
            })(t.ServiceDebugging || (t.ServiceDebugging = {}));
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = Symbol("actionControls");
        (t.addActionControls = function addActionControls(e, t, r) {
            const n = { title: t, controls: r };
            e[i] = n;
        }),
            (t.getActionControls = function getActionControls(e) {
                return e[i];
            });
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
            (function (e) {
                let t;
                !(function (e) {
                    (e.Request = "request"), (e.Response = "response"), (e.Error = "error");
                })((t = e.MessageType || (e.MessageType = {}))),
                    (e.isMessage = function isMessage(t) {
                        return "object" == typeof t && (t.type === e.MessageType.Request || t.type === e.MessageType.Response || t.type === e.MessageType.Error);
                    });
            })(t.ServiceChannel || (t.ServiceChannel = {}));
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
            (function (e) {
                const t = Math.random;
                (e.generateUniqueId = function generateUniqueId() {
                    return `${t()}`;
                }),
                    (e.newResolvablePromise = function newResolvablePromise() {
                        let e, t;
                        const r = new Promise((r, i) => {
                            (e = r), (t = i);
                        });
                        return (r.resolve = e), (r.reject = t), r;
                    });
            })(t.ServiceRuntimePrivate || (t.ServiceRuntimePrivate = {})),
            (function (e) {
                let t;
                !(function (e) {
                    function copyFloat(e) {
                        if ("number" != typeof e) throw new Error(`Expected number but received: ${e}`);
                        if (!isFinite(e)) throw new Error(`Expected finite number but received: ${e}`);
                        return -0 === e ? 0 : e;
                    }
                    (e.typeContextForError = function typeContextForError(e) {
                        if (!e) return "";
                        const { stack: t } = e;
                        return "string" != typeof t
                            ? ""
                            : t
                                  .split("\n")
                                  .map((e) => {
                                      const t = e.match(/([^\.\s]*)Validation.copy([^\.\s]*)/);
                                      return !t || t.length < 3 ? { namespace: "", type: "" } : { namespace: t[1], type: t[2] };
                                  })
                                  .filter((e) => !!e.type)
                                  .reverse()
                                  .map((e, t) => (0 === t ? e.namespace + "." : "") + e.type)
                                  .join("/");
                    }),
                        (e.copyString = function copyString(e) {
                            if ("string" != typeof e) throw new Error(`Expected string but received: ${e}`);
                            return e;
                        }),
                        (e.copyFloat = copyFloat),
                        (e.copyInteger = function copyInteger(e) {
                            const t = copyFloat(e);
                            if (t !== Math.floor(t)) throw new Error(`Expected integer but received: ${e}`);
                            return t;
                        }),
                        (e.copyBoolean = function copyBoolean(e) {
                            if ("boolean" != typeof e) throw new Error(`Expected boolean but received: ${e}`);
                            return e;
                        }),
                        (e.copyUnsafeJSON = function copyUnsafeJSON(e) {
                            if (null === e) throw new Error(`Expected UnsafeJSON but received: ${e}`);
                            if ("object" != typeof e) throw new Error(`Expected UnsafeJSON but received: ${e}`);
                            if (e.constructor !== Object) throw new Error(`Expected plain object UnsafeJSON but received: ${e}`);
                            return e;
                        }),
                        (e.copyOptional = function copyOptional(e, t) {
                            if (null != t) return e(t);
                        }),
                        (e.copyArray = function copyArray(e, t) {
                            if (!Array.isArray(t)) throw new Error(`Validation expected array but received: ${t}`);
                            return Object.freeze(t.map((t) => e(t)));
                        }),
                        (e.copyMap = function copyMap(e, t, r) {
                            if (null === r || "object" != typeof r) throw new Error(`Validation expected map object but received: ${r}`);
                            const i = {};
                            for (const [n, o] of Object.entries(r))
                                try {
                                    i[e(n)] = t(o);
                                } catch {}
                            return Object.freeze(i);
                        });
                })((t = e.Validation || (e.Validation = {})));
            })(t.ServiceRuntimePrivate || (t.ServiceRuntimePrivate = {})),
            (t.assertNever = function assertNever(e, t) {
                throw t || new Error("Unexpected object: " + e);
            });
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(6);
        class ServiceError extends Error {
            constructor() {
                super(...arguments), (this.code = ServiceError.Code.badResponse);
            }
            get name() {
                return `ServiceError.${this.constructor.name}`;
            }
        }
        (t.ServiceError = ServiceError),
            (function (e) {
                let t;
                !(function (e) {
                    (e[(e.serviceNotFound = 404)] = "serviceNotFound"),
                        (e[(e.serviceNotCompatible = 426)] = "serviceNotCompatible"),
                        (e[(e.serviceGone = 410)] = "serviceGone"),
                        (e[(e.implementation = 500)] = "implementation"),
                        (e[(e.timedOut = 504)] = "timedOut"),
                        (e[(e.badRequest = 400)] = "badRequest"),
                        (e[(e.badResponse = 422)] = "badResponse");
                })((t = e.Code || (e.Code = {})));
                class ServiceNotFound extends e {
                    constructor() {
                        super(...arguments), (this.code = t.serviceNotFound);
                    }
                }
                e.ServiceNotFound = ServiceNotFound;
                class ServiceNotCompatible extends e {
                    constructor() {
                        super(...arguments), (this.code = t.serviceNotCompatible);
                    }
                }
                e.ServiceNotCompatible = ServiceNotCompatible;
                class ServiceGone extends e {
                    constructor() {
                        super(...arguments), (this.code = t.serviceGone);
                    }
                }
                e.ServiceGone = ServiceGone;
                class Implementation extends e {
                    constructor() {
                        super(...arguments), (this.code = t.implementation);
                    }
                }
                e.Implementation = Implementation;
                class TimedOut extends e {
                    constructor() {
                        super(...arguments), (this.code = t.timedOut);
                    }
                }
                e.TimedOut = TimedOut;
                class BadRequest extends e {
                    constructor() {
                        super(...arguments), (this.code = t.badRequest);
                    }
                }
                (e.BadRequest = BadRequest),
                    (e.BadResponse = e),
                    (e.reconstructErrorResponse = function reconstructErrorResponse(t) {
                        let r;
                        t && "string" == typeof t.message && (r = t.message);
                        try {
                            if (!t) return new e.BadResponse(r);
                            const n = t.code;
                            switch (n) {
                                case e.Code.serviceNotFound:
                                    return new ServiceNotFound(r);
                                case e.Code.serviceNotCompatible:
                                    return new ServiceNotCompatible(r);
                                case e.Code.serviceGone:
                                    return new ServiceGone(r);
                                case e.Code.implementation:
                                    return new Implementation(r);
                                case e.Code.timedOut:
                                    return new TimedOut(r);
                                case e.Code.badRequest:
                                    return new BadRequest(r);
                                case e.Code.badResponse:
                                    return new e.BadResponse(r);
                                default:
                                    i.assertNever(n);
                            }
                        } catch {}
                        return new e.BadResponse(r);
                    }),
                    (e.toMessageBody = function toMessageBody(t) {
                        if (t instanceof e) return { code: t.code, message: t.message };
                        let r;
                        return "string" == typeof t ? (r = t) : t && "string" == typeof t.message && (r = t.message), { code: e.Code.implementation, message: r };
                    });
            })((ServiceError = t.ServiceError || (t.ServiceError = {})));
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
            (function __export(e) {
                for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r]);
            })(r(20));
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.extractComponentNameFromIdentifier = function extractComponentNameFromIdentifier(e) {
                const t = e.match(/(.*?\.[tj]sx?)_.*/);
                return t ? t[1] : e;
            });
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.localPackageFallbackIdentifier = "|local|");
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.warn = function warn(e, t) {
                console.log("%c Loader: %c " + e, "color: white; font-weight: bold; background-color: #EE4444; border-radius: 5px; padding: 2px 5px", "color: #EE4444"), t && console.warn(t);
            });
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = r(62);
        (t.Asset = i.Asset), (t.Variant = i.Variant);
        var n = r(63);
        (t.AssetResolver = n.AssetResolver), (t.AssetContext = n.AssetContext), (t.isAssetResolver = n.isAssetResolver);
        var o = r(64);
        t.AssetAPI = o.AssetAPI;
        var a = r(25);
        t.AssetService = a.AssetService;
        var s = r(72);
        (t.useAssetService = s.useAssetService), (t.assetAPI = s.assetAPI);
        var c = r(73);
        t.AssetMap = c.AssetMap;
        var u = r(74);
        t.webAssetResolver = u.webAssetResolver;
        var l = r(75);
        t.readAssetUpdatesStream = l.readAssetUpdatesStream;
        var d = r(30);
        (t.createAssetReference = d.createAssetReference), (t.parseAssetReference = d.parseAssetReference), (t.isAssetReference = d.isAssetReference);
    },
    function (e, t, r) {
        "use strict";
        var i;
        Object.defineProperty(t, "__esModule", { value: !0 }),
            (function (e) {
                (e.Scroll = "framer/Scroll"), (e.Page = "framer/Page"), (e.Stack = "framer/Stack"), (e.Device = "__builtin/Device");
            })((i = t.BuiltInFramerComponentIdentifier || (t.BuiltInFramerComponentIdentifier = {}))),
            (t.BuiltInPackageIdentifier = "__builtin"),
            (t.BUILT_IN_COMPONENT_IDENTIFIERS = Object.values(i));
    },
    function (e, t) {
        var r;
        r = (function () {
            return this;
        })();
        try {
            r = r || new Function("return this")();
        } catch (i) {
            "object" == typeof window && (r = window);
        }
        e.exports = r;
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.assert = function assert(e, ...t) {
                if (e) return;
                const r = Error("Assertion Error" + (t.length > 0 ? ": " + t.join(" ") : ""));
                if (r.stack)
                    try {
                        const e = r.stack.split("\n");
                        e[1].indexOf("assert") >= 0 ? (e.splice(1, 1), (r.stack = e.join("\n"))) : e[0].indexOf("assert") >= 0 && (e.splice(0, 1), (r.stack = e.join("\n")));
                    } catch {}
                throw r;
            });
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = new Set();
        t.warnOnce = function warnOnce(e, ...t) {
            i.has(e) || (i.add(e), console.warn(e, ...t));
        };
    },
    function (e, t) {
        var r,
            i,
            n = (e.exports = {});
        function defaultSetTimout() {
            throw new Error("setTimeout has not been defined");
        }
        function defaultClearTimeout() {
            throw new Error("clearTimeout has not been defined");
        }
        function runTimeout(e) {
            if (r === setTimeout) return setTimeout(e, 0);
            if ((r === defaultSetTimout || !r) && setTimeout) return (r = setTimeout), setTimeout(e, 0);
            try {
                return r(e, 0);
            } catch (t) {
                try {
                    return r.call(null, e, 0);
                } catch (t) {
                    return r.call(this, e, 0);
                }
            }
        }
        !(function () {
            try {
                r = "function" == typeof setTimeout ? setTimeout : defaultSetTimout;
            } catch (e) {
                r = defaultSetTimout;
            }
            try {
                i = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout;
            } catch (e) {
                i = defaultClearTimeout;
            }
        })();
        var o,
            a = [],
            s = !1,
            c = -1;
        function cleanUpNextTick() {
            s && o && ((s = !1), o.length ? (a = o.concat(a)) : (c = -1), a.length && drainQueue());
        }
        function drainQueue() {
            if (!s) {
                var e = runTimeout(cleanUpNextTick);
                s = !0;
                for (var t = a.length; t; ) {
                    for (o = a, a = []; ++c < t; ) o && o[c].run();
                    (c = -1), (t = a.length);
                }
                (o = null),
                    (s = !1),
                    (function runClearTimeout(e) {
                        if (i === clearTimeout) return clearTimeout(e);
                        if ((i === defaultClearTimeout || !i) && clearTimeout) return (i = clearTimeout), clearTimeout(e);
                        try {
                            return i(e);
                        } catch (t) {
                            try {
                                return i.call(null, e);
                            } catch (t) {
                                return i.call(this, e);
                            }
                        }
                    })(e);
            }
        }
        function Item(e, t) {
            (this.fun = e), (this.array = t);
        }
        function noop() {}
        (n.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
            a.push(new Item(e, t)), 1 !== a.length || s || runTimeout(drainQueue);
        }),
            (Item.prototype.run = function () {
                this.fun.apply(null, this.array);
            }),
            (n.title = "browser"),
            (n.browser = !0),
            (n.env = {}),
            (n.argv = []),
            (n.version = ""),
            (n.versions = {}),
            (n.on = noop),
            (n.addListener = noop),
            (n.once = noop),
            (n.off = noop),
            (n.removeListener = noop),
            (n.removeAllListeners = noop),
            (n.emit = noop),
            (n.prependListener = noop),
            (n.prependOnceListener = noop),
            (n.listeners = function (e) {
                return [];
            }),
            (n.binding = function (e) {
                throw new Error("process.binding is not supported");
            }),
            (n.cwd = function () {
                return "/";
            }),
            (n.chdir = function (e) {
                throw new Error("process.chdir is not supported");
            }),
            (n.umask = function () {
                return 0;
            });
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(15);
        let n;
        function reportableError(e, t) {
            return e instanceof Error ? e : new UnhandledError(e, t);
        }
        (t.setErrorReporter = function setErrorReporter(e) {
            n = e;
        }),
            (t.reportError = function reportError({ error: e, tags: t, extras: r, caller: o }) {
                i.assert(n, "Set up an error callback with setErrorReporter, or configure Sentry with initializeEnvironment");
                const a = reportableError(e, o);
                return n({ error: a, tags: { ...a.tags, ...t }, extras: { ...a.extras, ...r } }), a;
            }),
            (t.unhandledError = function unhandledError(e) {
                (e = reportableError(e, unhandledError)),
                    setTimeout(() => {
                        throw e;
                    }, 0);
            });
        class UnhandledError extends Error {
            constructor(e, t) {
                const r = e ? JSON.stringify(e) : "No error message provided";
                if ((super(r), (this.message = r), t && Error.captureStackTrace)) Error.captureStackTrace(this, t);
                else
                    try {
                        throw new Error();
                    } catch (i) {
                        this.stack = i.stack;
                    }
            }
        }
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(49);
        class Bridge extends i.EventEmitter {
            constructor() {
                super(...arguments), (this.responders = {});
            }
            send(e, ...t) {
                window._bridge && window._bridge(e, ...t);
            }
            respond(e, t) {
                const r = this.responders[e];
                if (r) return r(t);
            }
            receive(e, t) {
                this.emit(e, t);
            }
        }
        const n = new Bridge();
        window._ipc = n;
        const o = n;
        function onBridge(e, ...t) {
            if (!t) return;
            const r = t[0],
                i = t.slice(1);
            o.emit(r, ...i);
        }
        function onBridgeRaw(e, ...t) {
            if (!t) return;
            const r = t[0],
                i = t.slice(1),
                n = null != i ? JSON.parse("[" + i + "]") : i;
            o.emit(r, ...n);
        }
        !(function main() {
            if (window._bridge) return (window._onBridge = onBridge), void (window._onBridgeRaw = onBridgeRaw);
        })(),
            (t.default = n);
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = r(52);
        (t.sandboxComponentLoader = i.sandboxComponentLoader), (t.SandboxComponentLoaderInterface = i.SandboxComponentLoaderInterface);
        var n = r(24);
        t.findMasters = n.findMasters;
        var o = r(21);
        (t.isSandboxErrorDefinition = o.isSandboxErrorDefinition),
            (t.isSandboxOverrideDefinition = o.isSandboxOverrideDefinition),
            (t.isSandboxReactComponentDefinition = o.isSandboxReactComponentDefinition),
            (t.SandboxDesignComponentDefinition = o.SandboxDesignComponentDefinition),
            (t.SandboxEntityDefinition = o.SandboxEntityDefinition),
            (t.ProjectBundleScriptsMap = o.ProjectBundleScriptsMap),
            (t.ProjectBundleGlobalEnvironment = o.ProjectBundleGlobalEnvironment),
            (t.SandboxReactComponentDefinition = o.SandboxReactComponentDefinition),
            (t.SandboxErrorDefinition = o.SandboxErrorDefinition);
        var a = r(31);
        t.isControlDescription = a.isControlDescription;
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.isActionDefinition = function isActionDefinition(e) {
                return "action" === e.type;
            }),
            (t.isSandboxReactComponentDefinition = function isSandboxReactComponentDefinition(e) {
                return "component" === e.type;
            }),
            (t.isSandboxDesignDefinition = function isSandboxDesignDefinition(e) {
                return "master" === e.type;
            }),
            (t.isSandboxOverrideDefinition = function isSandboxOverrideDefinition(e) {
                return "override" === e.type;
            }),
            (t.isSandboxErrorDefinition = function isSandboxErrorDefinition(e) {
                return void 0 !== e && void 0 !== e.error;
            }),
            (t.isDeviceDefinition = function isDeviceDefinition(e) {
                return "device" === e.type;
            });
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(1),
            n = r(9);
        function createErrorComponentClass(e) {
            return class ErrorComponent extends i.Component {
                render() {
                    throw e;
                }
            };
        }
        t.createErrorDefinition = function createErrorDefinition(e, t, r) {
            const i = n.extractComponentNameFromIdentifier(e),
                o = (function cleanFilename(e) {
                    return e.startsWith("./") ? e.slice(2) : e;
                })(i);
            return { class: createErrorComponentClass(t), depth: e.startsWith(".") ? 0 : 1, error: t, file: i, identifier: e, name: o, packageIdentifier: "<unknown>", properties: {}, type: "component", ...r };
        };
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(0),
            n = r(4),
            o = r(56),
            a = r(22),
            s = r(11),
            c = r(24),
            u = r(31),
            l = r(13);
        function loadSourceModule(e, t) {
            let r;
            try {
                r = e.sourceModules[t]() || {};
            } catch (i) {
                r = { error: i };
            }
            if (r.error && !r.__info__) {
                const { error: i } = r;
                let n = "string" == typeof i ? i : i.message;
                (n = o.rewordCompileError(n)), s.warn(`Error in file '${t}':`, i);
                const c = prefixIdentifier(e, t);
                return { [c]: a.createErrorDefinition(c, n, { depth: e.depth, packageIdentifier: e.name }) };
            }
            return r.__info__ ? entitiesFromExports(r, r.__info__, { packageInfo: e, file: t, identifierPrefix: `${t}_` }) : {};
        }
        function entitiesFromExports(e, t, r) {
            const i = {};
            for (const n of t) {
                const t = e[n.name];
                if (!t) {
                    s.warn(`Entity '${n.name}' defined but not found in exports`);
                    continue;
                }
                const o = entityDefinitionFromInfo(n, t, r);
                i[o.identifier] = o;
            }
            return i;
        }
        function prefixIdentifier(e, t, r = "") {
            return e.depth > 0 && (r = `${e.name}/${r}`), `${r}${t}`;
        }
        function entityDefinitionFromInfo(e, t, { identifierPrefix: r, packageInfo: o, file: a }) {
            let c = {},
                d = t.userInterfaceName || e.name;
            const p = prefixIdentifier(o, e.name, r);
            let { type: f } = e;
            if ((f || (l.BUILT_IN_COMPONENT_IDENTIFIERS.includes(p) || s.warn(`Entity info '${e.name}' doesn't have "type", assuming "component"`), (f = "component")), "action" === f)) {
                const e = n.getActionControls(t);
                e && e.controls && (c = u.verifyActionControls(e.controls)), e && e.title && (d = e.title);
            } else {
                const r = i.getPropertyControls(t);
                r && (c = u.verifyPropertyControls(r)),
                    (function withDisplayName(e) {
                        if (
                            !(function isObject(e) {
                                return !!e && "object" == typeof e;
                            })(e) &&
                            !(function isFunction(e) {
                                return "function" == typeof e;
                            })(e)
                        )
                            return !1;
                        if (!("displayName" in e)) return !1;
                        const t = e.displayName;
                        return "string" == typeof t && t.trim().length > 0;
                    })(t) && (d = t.displayName),
                    e.children && !c.children && (c.children = { title: "Content", type: i.ControlType.ComponentInstance });
            }
            const v = { class: t, depth: o.depth, file: a || "", identifier: p, name: d, packageIdentifier: o.name, properties: c, type: f };
            if (
                (function isReactComponent(e, t) {
                    return "component" === t;
                })(0, f)
            ) {
                return Object.assign(v, { type: "component", defaultProps: t.defaultProps });
            }
            if (
                (function isDevice(e, t) {
                    return "device" === t;
                })(0, f)
            ) {
                return Object.assign(v, { type: "device", deviceDescriptor: t.descriptor });
            }
            return v;
        }
        (t.collectEntities = function collectEntities(e) {
            const t = {},
                { componentsJson: r, depth: i, designJson: n, exportsObject: o, sourceModules: a } = e,
                s = Object.keys(a);
            if (s.length > 0) for (const c of s) Object.assign(t, loadSourceModule(e, c));
            else if (r) {
                const i = { packageInfo: e };
                Object.assign(t, entitiesFromExports(o, r, i));
            }
            if (i > 0 && n) {
                const r = (function mastersFromPackage(e, t) {
                    const r = [];
                    return c.findMasters(e.root, t, r), r;
                })(n, e.name);
                for (const n of r) {
                    const r = n.id;
                    t[r] = { class: n, depth: i, file: "design/document.json", identifier: r, name: n.name || "", packageIdentifier: e.name, properties: {}, type: "master" };
                }
            }
            return t;
        }),
            (t.entityDefinitionFromInfo = entityDefinitionFromInfo);
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(57),
            n = r(12);
        t.findMasters = function findMasters(e, t, r) {
            if (!e.id || e.replicaInfo) return;
            const o = e.children || [];
            for (const i of o) findMasters(i, t, r);
            if (!e.isMaster || (e.isExternalMaster && e.isExternalMaster !== t)) return;
            const a = (function updateJSONMaster(e, t, r, o) {
                i(!e.id.startsWith(t));
                const a = t + e.id;
                let s = void 0;
                e.children && Array.isArray(e.children) && (s = e.children.map((e) => updateJSONMaster(e, t, r, a)));
                const c = { ...e, id: a, parentid: o, children: s, isMaster: !1 };
                return (
                    (function ensureAbsoluteReferences(e, t) {
                        const { codeComponentIdentifier: r, fillImage: i, replicaInfo: o } = e;
                        r && r.startsWith(".") && (e.codeComponentIdentifier = `${t}/${r}`);
                        i && (e.fillImage = n.createAssetReference(`design/images/${i}`, t));
                        o && -1 === o.master.indexOf("-") && (e.replicaInfo = { ...o, master: `${t}-${o.master}` });
                    })(c, r),
                    c
                );
            })(e, `${t}-${e.id}-`, t, null);
            (a.id = `${t}-${e.id}`), (a.isMaster = !0), (a.isExternalMaster = t), (a.top = 0), (a.left = 0), (a.bottom = null), (a.right = null), r.push(a);
        };
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(65);
        t.AssetService = class AssetService {
            constructor(e) {
                (this.api = e),
                    (this.assetUpdatesEmitter = new i.ServiceEventEmitter()),
                    (this.currentAssets = []),
                    (this.currentRefreshTimer = null),
                    (this.assetUpdatesStream = this.assetUpdatesEmitter.stream),
                    this.assetUpdatesEmitter.emit({});
            }
            async refresh() {
                const e = await this.api.getAssets();
                this.update(e.assets);
            }
            update(e) {
                (this.currentAssets = e), this.assetUpdatesEmitter.emit({ assets: this.currentAssets }), this.scheduleExpirationRefresh();
            }
            addAssets(e) {
                this.update([...this.currentAssets, ...e]);
            }
            scheduleExpirationRefresh() {
                if ((this.currentRefreshTimer && window.clearTimeout(this.currentRefreshTimer), 0 === this.currentAssets.length)) return;
                const e = this.currentAssets.map((e) => e.refreshTimeout),
                    t = 1e3 * Math.min(...e);
                this.currentRefreshTimer = window.setTimeout(() => {
                    this.refresh().catch(() => {});
                }, t);
            }
        };
    },
    function (e, t, r) {
        "use strict";
        function __export(e) {
            for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r]);
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), __export(r(5)), __export(r(66)), __export(r(7)), __export(r(67)), __export(r(68));
        var i = r(6);
        t.ServiceRuntimePrivate = i.ServiceRuntimePrivate;
        var n = r(27);
        t.ServiceStreamsPrivate = n.ServiceStreamsPrivate;
        var o = r(3);
        (t.ServiceDebugging = o.ServiceDebugging), __export(r(69)), __export(r(70)), __export(r(29)), __export(r(71));
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(3),
            n = r(7),
            o = r(6);
        !(function (e) {
            e.isServiceStreamOptions = function isServiceStreamOptions(e) {
                if (!e) return !1;
                switch (e.replay) {
                    case "latest":
                    case void 0:
                        break;
                    default:
                        return !1;
                }
                return !0;
            };
            e.StreamReader = class StreamReader {
                constructor(e, t, r) {
                    (this.method = e),
                        (this.options = t),
                        (this.helper = r),
                        (this.read = async (e) => {
                            const t = this[Symbol.asyncIterator](),
                                { iteration: r } = this;
                            if (!r) throw new n.ServiceError.BadRequest("Cannot start reading stream");
                            return this.iterate(t, e), Promise.race([r.isDonePromise, r.isCancelledPromise]);
                        }),
                        (this.cancel = async () => {
                            const { iteration: e } = this;
                            if (!e) throw new n.ServiceError.BadRequest("Cannot cancel a stream before reading it");
                            e.isCancelledPromise.resolve();
                        });
                }
                iterate(e, t) {
                    e.next().then(async (r) => {
                        r.done || (await t(r.value), this.iterate(e, t));
                    });
                }
                [Symbol.asyncIterator]() {
                    if (this.iteration)
                        throw new n.ServiceError.BadRequest(
                            "ServiceStream instances can only be read once. If multiple AsyncIterators or read() calls are required, create a new stream for each by calling the associated service method. To broadcast events with an observer pattern, consider using a client-specific EventEmitter or similar."
                        );
                    const e = (this.iteration = { isDonePromise: o.ServiceRuntimePrivate.newResolvablePromise(), isCancelledPromise: o.ServiceRuntimePrivate.newResolvablePromise() }),
                        requestReturn = () => {
                            this.helper({ method: this.method, stream: { id: a, method: "return" } }).catch((e) => {
                                s.debug("StreamReader received error trying to cancel iterator on the service side", e);
                            });
                        },
                        t = { done: !0, value: void 0 },
                        r = e.isCancelledPromise.then(
                            () => (requestReturn(), t),
                            (e) => (requestReturn(), Promise.reject(e))
                        ),
                        a = o.ServiceRuntimePrivate.generateUniqueId(),
                        s = i.ServiceDebugging.log.extend("StreamReader").extend(a);
                    return {
                        next: () => {
                            const i = this.helper({ method: this.method, argument: this.options, stream: { id: a, method: "next" } }).then((e) =>
                                (function isIteratorResult(e) {
                                    return !!e && (!0 === e.done || (!1 === e.done && void 0 !== e.value));
                                })(e)
                                    ? Promise.resolve(e)
                                    : (s.warn("StreamReader.next received an invalid iterator result for next()", e), Promise.resolve(t))
                            );
                            return Promise.race([i.then((t) => (t.done && e.isDonePromise.resolve(), t)).catch((t) => (e.isDonePromise.reject(t), e.isCancelledPromise.resolve(), Promise.reject(t))), r]);
                        },
                        return: async () => (e.isCancelledPromise.resolve(), t),
                        throw: async (r) => (e.isCancelledPromise.reject(r), t),
                    };
                }
            };
        })(t.ServiceStreamsPrivate || (t.ServiceStreamsPrivate = {}));
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.isSocketServerClient = function isSocketServerClient(e) {
                return !!e && "function" == typeof e.on && "function" == typeof e.emit;
            });
        const i = new Function("return this")();
        (t.setTimeout = (...e) => i.setTimeout(...e)), (t.clearTimeout = (...e) => i.clearTimeout(...e));
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(5),
            n = r(3);
        t.socketMessageEventName = "test123";
        t.SocketClientChannel = class SocketClientChannel {
            constructor(e) {
                (this.log = n.ServiceDebugging.log.extend("SocketClientChannel")),
                    (this.listeners = new Set()),
                    (this.onMessageEvent = (e) => {
                        this.log.debug("SocketClientChannel.onMessageEvent", e, this.listeners);
                        const t = e;
                        if (i.ServiceChannel.isMessage(t)) for (const r of this.listeners) r(t);
                        else this.log.debug("SocketClientChannel received something other than a message", e);
                    }),
                    this.log.debug("Constructing SocketClientChannel"),
                    (this.socket = e),
                    this.socket.on(t.socketMessageEventName, this.onMessageEvent);
            }
            postMessage(e) {
                this.log.debug("SocketClientChannel.postMessage", e), this.socket ? this.socket.emit(t.socketMessageEventName, e) : this.log.warn("SocketClientChannel has no socket for postMessage:", e);
            }
            addMessageListener(e) {
                this.listeners.add(e);
            }
            removeMessageListener(e) {
                this.listeners.delete(e);
            }
        };
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = "framer/asset-reference,";
        function isAssetReference(e) {
            return e.startsWith(`data:${i}`);
        }
        (t.isAssetReference = isAssetReference),
            (t.createAssetReference = function createAssetReference(e, t = null, r = null) {
                if ("" === e) return "";
                const n = new URL(`data:${i}${e}`);
                return r && n.searchParams.set("originalFilename", r), t && n.searchParams.set("packageIdentifier", t), n.href;
            }),
            (t.parseAssetReference = function parseAssetReference(e) {
                if (isAssetReference(e))
                    try {
                        const t = new URL(e);
                        return { identifier: t.pathname.substring(i.length), originalFilename: t.searchParams.get("originalFilename"), packageIdentifier: t.searchParams.get("packageIdentifier") };
                    } catch {
                        return;
                    }
            });
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(0),
            n = r(32),
            o = r(2),
            a = { boolean: !0, number: !0, string: !0, fusednumber: !0, enum: !0, segmentedenum: !0, color: !0, image: !0, file: !0, componentinstance: !0, component: !0, array: !0, eventhandler: !0, transition: !0 };
        function getControlDescription(e) {
            if ("string" == typeof e) return isControlType(e) ? { type: e } : void 0;
            const t = e.type;
            return "string" == typeof t && isControlType(t) ? e : void 0;
        }
        function isControlType(e) {
            return null != a[e];
        }
        function defaultControl(e) {
            const t = toString(e.title),
                r = (function toHiddenFunction(e) {
                    return "function" != typeof e ? void 0 : e;
                })(e.hidden);
            switch (e.type) {
                case i.ControlType.Boolean: {
                    const i = toString(e.disabledTitle),
                        n = toString(e.enabledTitle),
                        o = e.defaultValue,
                        a = e.type;
                    return { title: t, hidden: r, defaultValue: toBoolean(o), type: a, disabledTitle: i, enabledTitle: n };
                }
                case i.ControlType.Number: {
                    const i = toNumber(e.min),
                        n = toNumber(e.max),
                        o = toString(e.unit),
                        a = toNumber(e.step),
                        s = toBoolean(e.displayStepper),
                        { defaultValue: c, type: u } = e;
                    return { title: t, hidden: r, defaultValue: toNumber(c), type: u, min: i, max: n, unit: o, step: a, displayStepper: s };
                }
                case i.ControlType.String: {
                    const { type: i, defaultValue: n } = e;
                    return { title: t, hidden: r, defaultValue: n, type: i, placeholder: toString(e.placeholder), obscured: toBoolean(e.obscured), displayTextArea: toBoolean(e.displayTextArea) };
                }
                case i.ControlType.FusedNumber: {
                    const { type: i } = e,
                        n = e,
                        a = n.defaultValue,
                        s = toString4(n.valueKeys),
                        c = toString4(n.valueLabels),
                        u = toNumber(n.min);
                    let l = toString(n.toggleKey),
                        d = toString2(n.toggleTitles);
                    if (!l) {
                        if (((l = toString(n.splitKey)), !l)) return null;
                        o.deprecationWarning("splitKey option of FusedNumber control type", "1.0.0", "toggleKey");
                    }
                    if (!d) {
                        if (((d = toString2(n.splitLabels)), !d)) return null;
                        o.deprecationWarning("splitLabels option of FusedNumber control type", "1.0.0", "toggleTitles");
                    }
                    return l && d && s && c ? { title: t, hidden: r, defaultValue: toNumber(a), type: i, toggleKey: l, toggleTitles: d, valueKeys: s, valueLabels: c, min: u } : null;
                }
                case i.ControlType.Enum: {
                    const { defaultValue: i, type: n, displaySegmentedControl: o } = e,
                        a = (function toPrimitiveList(e) {
                            return e instanceof Array ? e.map(toPrimitive) : void 0;
                        })(e.options);
                    if (!a) return null;
                    const s = toStringList(e.optionTitles);
                    return { title: t, hidden: r, defaultValue: toPrimitive(i), type: n, options: a, optionTitles: s, displaySegmentedControl: toBoolean(o) };
                }
                case i.ControlType.SegmentedEnum: {
                    const { defaultValue: i, type: n } = e,
                        o = toStringList(e.options);
                    if (!o) return null;
                    const a = toStringList(e.optionTitles);
                    return { title: t, hidden: r, defaultValue: toString(i), type: n, options: o, optionTitles: a };
                }
                case i.ControlType.Color: {
                    const { type: i, defaultValue: n } = e;
                    return { title: t, hidden: r, defaultValue: toString(n), type: i };
                }
                case i.ControlType.Image: {
                    const { type: i } = e;
                    return { title: t, hidden: r, type: i };
                }
                case i.ControlType.File: {
                    const { type: i } = e,
                        n = toStringList(e.allowedFileTypes);
                    return n ? { title: t, hidden: r, type: i, allowedFileTypes: n } : null;
                }
                case i.ControlType.ComponentInstance:
                    return { title: t, hidden: r, type: e.type };
                case i.ControlType.Array:
                    if (!e.propertyControl || !e.propertyControl.type) return null;
                    const n = defaultControl(e.propertyControl);
                    if (!n) return null;
                    if (n.type === i.ControlType.Array) return null;
                    if (n.type === i.ControlType.EventHandler) return null;
                    const a = toNumber(e.maxCount, 1);
                    return { title: t, hidden: r, type: e.type, propertyControl: n, maxCount: a, defaultValue: toArray(e.defaultValue, n.type) };
                case i.ControlType.EventHandler:
                    return { title: t, hidden: r, type: e.type };
                case i.ControlType.Transition:
                    let { defaultValue: s } = e;
                    if (
                        (function isObject(e) {
                            return "object" == typeof e && null !== e;
                        })(s)
                    ) {
                        s = {
                            type: (function inferDefaultTransitionType(e) {
                                const t = new Set(Object.keys(e));
                                switch (e.type) {
                                    case "spring":
                                    case "tween":
                                        return e.type;
                                    default:
                                        return t.has("duration") || t.has("ease") ? "tween" : "spring";
                                }
                            })(s),
                            ...s,
                        };
                    }
                    return { title: t, hidden: r, type: e.type, defaultValue: s };
            }
            return null;
        }
        function toBoolean(e) {
            return !0 === e || !1 === e ? e : void 0;
        }
        function toNumber(e, t) {
            return "number" == typeof e && (!n.isFiniteNumber(t) || e >= t) ? e : void 0;
        }
        function toString(e) {
            if ("string" == typeof e) return e;
        }
        function toPrimitive(e) {
            return null === e ? e : void 0 === e ? e : n.isFiniteNumber(e) ? e : "string" == typeof e ? e : !0 === e || !1 === e ? e : null;
        }
        function toStringList(e) {
            if (e instanceof Array) return e.map((e) => toString(e)).filter((e) => e);
        }
        function toString2(e) {
            if (!(e instanceof Array)) return;
            const t = toString(e[0]),
                r = toString(e[1]);
            return t && r ? [t, r] : void 0;
        }
        function toString4(e) {
            if (!(e instanceof Array)) return;
            const t = toString(e[0]),
                r = toString(e[1]),
                i = toString(e[2]),
                n = toString(e[3]);
            return t && r && i && n ? [t, r, i, n] : void 0;
        }
        function toArray(e, t) {
            if (Array.isArray(e))
                switch (t) {
                    case i.ControlType.Boolean:
                        return e.filter((e) => !0 === e || !1 === e);
                    case i.ControlType.Number:
                        return e.filter(n.isFiniteNumber);
                    case i.ControlType.String:
                    case i.ControlType.Enum:
                    case i.ControlType.SegmentedEnum:
                    case i.ControlType.Color:
                        return toStringList(e);
                    default:
                        return;
                }
        }
        (t.isControlDescription = function isControlDescription(e) {
            return !!e && "object" == typeof e && "type" in e && a[e.type];
        }),
            (t.verifyPropertyControls = function verifyPropertyControls(e) {
                const t = {};
                for (const r in e) {
                    const i = getControlDescription(e[r]);
                    if (!i) continue;
                    const n = defaultControl(i);
                    n && (t[r] = n);
                }
                return t;
            }),
            (t.verifyActionControls = function verifyActionControls(e) {
                const t = {};
                for (const r in e) {
                    const n = getControlDescription(e[r]);
                    if (!n) continue;
                    const o = defaultControl(n);
                    o && o.type !== i.ControlType.Array && o.type !== i.ControlType.EventHandler && (t[r] = o);
                }
                return t;
            });
    },
    function (e, t, r) {
        "use strict";
        function isFiniteNumber(e) {
            return "number" == typeof e && isFinite(e);
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.isFiniteNumber = isFiniteNumber),
            (t.finiteNumber = function finiteNumber(e) {
                return isFiniteNumber(e) ? e : void 0;
            });
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(0),
            n = r(4),
            o = ["fade", "flip", "instant", "magicMotion", "modal", "overlay", "push"];
        const a = o.map(function camelCaseToTitleCase(e) {
            var t = e.replace(/([A-Z])/g, " $1");
            return t.charAt(0).toUpperCase() + t.slice(1);
        });
        function useNavigate(e) {

            const t = i.useNavigation();
            return t
                ? () => {
                      if ("previous" === e.type) return void t.goBack();
                      const { target: r, appearsFrom: i, backdropColor: n, animation: o } = e;

                      if (r)
                          switch (e.transition) {
                              case "instant":
                                  t.instant(r);
                                  break;
                              case "fade":
                                  t.fade(r, { animation: o });
                                  break;
                              case "push":
                                  t.push(r, { appearsFrom: i, animation: o });
                                  break;
                              case "modal":
                                  t.modal(r, { backdropColor: n, animation: o });
                                  break;
                              case "overlay":
                                  t.overlay(r, { appearsFrom: i, backdropColor: n, animation: o });
                                  break;
                              case "flip":
                                  t.flip(r, { appearsFrom: i, animation: o });
                                  break;
                              case "magicMotion":
                                  t.magicMotion(r, { animation: o });
                          }

                          // MK: set the global preview height to the height of the new screen
                          window.previewHeight = r.props.height;

                          // MK: dispatch the window resize event so the component elements get resized
                          const event = new Event('resize');
                          window.dispatchEvent(event);

                          // MK: scroll to the top of the window after navigation
                          setTimeout(function(){ window.scrollTo(0,0); }, 100);

                          // MK: trigger hash change based on Frame name
                          if (r && r.props && r.props.name) {
                            setTimeout(function(){
                              const parameterizedName = r.props.name.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
                              window.location.hash = parameterizedName
                            }, 100);
                          }
                  }
                : () => {};
        }
        function isNavigationAnimationHidden(e) {
            return "instant" === e.transition || "previous" === e.type;
        }
        function isPrevious(e) {
            return "previous" === e.type;
        }
        (t.useNavigate = useNavigate),
            (t.navigateActionControlTypes = {
                type: i.ControlType.SegmentedEnum,
                target: i.ControlType.ComponentInstance,
                transition: i.ControlType.Enum,
                appearsFrom: i.ControlType.SegmentedEnum,
                backdropColor: i.ControlType.Color,
                animation: i.ControlType.Transition,
            }),
            (t.navigateActionDefaults = {
                type: "next",
                target: void 0,
                transition: "magicMotion",
                appearsFrom: "right",
                backdropColor: "rgba(4,4,15,.4)",
                animation: { type: "spring", ease: [0.44, 0, 0.56, 1], duration: 0.3, delay: 0, stiffness: 500, damping: 60, mass: 1 },
            }),
            n.addActionControls(useNavigate, "Transition", {
                type: { type: t.navigateActionControlTypes.type, options: ["previous", "next"], optionTitles: ["Previous", "Next"], defaultValue: t.navigateActionDefaults.type, title: "Target" },
                target: { type: t.navigateActionControlTypes.target, title: " ", hidden: isPrevious },
                transition: { type: t.navigateActionControlTypes.transition, options: o, optionTitles: a, defaultValue: t.navigateActionDefaults.transition, title: "Type", hidden: isPrevious },
                appearsFrom: {
                    type: t.navigateActionControlTypes.appearsFrom,
                    options: ["right", "left", "bottom", "top"],
                    defaultValue: t.navigateActionDefaults.appearsFrom,
                    optionTitles: ["Left", "Right", "Up", "Down"],
                    title: "Direction",
                    hidden: (e) => {
                        if (isPrevious(e)) return !0;
                        switch (e.transition) {
                            case "flip":
                            case "overlay":
                            case "push":
                                return !1;
                            default:
                                return !0;
                        }
                    },
                },
                backdropColor: {
                    type: t.navigateActionControlTypes.backdropColor,
                    title: "Backdrop",
                    defaultValue: t.navigateActionDefaults.backdropColor,
                    hidden: (e) => {
                        if (isPrevious(e)) return !0;
                        switch (e.transition) {
                            case "overlay":
                            case "modal":
                                return !1;
                            default:
                                return !0;
                        }
                    },
                },
                animation: { type: i.ControlType.Transition, title: "Animation", defaultValue: t.navigateActionDefaults.animation, hidden: isNavigationAnimationHidden },
            }),
            (t.isNavigationAnimationHidden = isNavigationAnimationHidden);
    },
    function (e, t, r) {
        "use strict";
        function __export(e) {
            for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r]);
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), __export(r(35)), __export(r(81));
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(1);
        function calculateScale(e, t) {
            const { deviceWidth: r, deviceHeight: i } = calculateDeviceSize(e),
                n = t.width / r,
                o = t.height / i;
            return Math.min(n, o, 1);
        }
        t.Device = function Device({ children: e, deviceOptions: t, scaleTo: r, onScaleChange: n, ResizeObserver: o }) {
            const { containerStyle: a, deviceStyle: s, screenStyle: c } = t
                ? (function getDeviceStyle(
                      e,
                      {
                          screenWidth: t,
                          screenHeight: r,
                          screenRadius: i = 0,
                          maskImage: n,
                          screenColor: o,
                          bezelWidth: a = 0,
                          bezelHeight: s = 0,
                          bezelRadius: c = 0,
                          bezelColor: u,
                          backgroundColor: l = "transparent",
                          theme: d = "light",
                          shadow: p = !1,
                          noPadding: f = !1,
                      }
                  ) {
                      const v = f ? 0 : 45,
                          h = t + 2 * a,
                          g = r + 2 * s,
                          m = "dark" === d;
                      o || (o = m ? "#333" : "#eee");
                      u || (u = m ? "#222" : "#fff");
                      const y = `inset 0 0 15px ${m ? "#000" : "rgba(0, 0, 0, 0.2)"}`,
                          S = `0px 10px 30px ${m ? "rgba(0, 0, 0, 0.55)" : "rgba(0, 0, 0, 0.15)"}`,
                          b = [p && S, 0 !== a && 0 !== s && y].filter((e) => !!e).join(",");
                      return {
                          containerStyle: { width: e ? "100%" : h + 2 * v, height: e ? "100%" : g + 2 * v, flex: "1 1 0", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: l },
                          deviceStyle: { width: h, height: g, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: c, backgroundColor: u, boxShadow: b },
                          screenStyle: {
                              width: t,
                              height: r,
                              flexShrink: 0,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              overflow: "hidden",
                              borderRadius: i,
                              backgroundColor: o,
                              ...(n && { maskImage: n, WebkitMaskImage: n, maskSize: "contain", WebkitMaskSize: "contain" }),
                              position: "relative",
                          },
                      };
                  })(r, t)
                : { containerStyle: {}, deviceStyle: {}, screenStyle: {} };
            if (t && r && "dynamic" !== r) {
                const e = calculateScale(t, r);
                s.transform = `scale(${e})`;
            }
            const u = i.useRef(null),
                l = i.useRef(null);
            return (
                i.useLayoutEffect(() => {
                    if (!(t && r && "dynamic" === r && u.current && l.current)) return;
                    if (0 === u.current.offsetWidth || 0 === u.current.offsetHeight) return;
                    const e = calculateScale(t, { width: u.current.offsetWidth, height: u.current.offsetHeight });
                    l.current.style.transform = `scale(${e})`;
                }, [t, r]),
                i.useEffect(() => {
                    if (!(t && r && "dynamic" === r && o && u.current)) return;
                    const e = new o(() => {
                        if (!u.current || !l.current) return;
                        if (0 === u.current.offsetWidth || 0 === u.current.offsetHeight) return;
                        const e = calculateScale(t, { width: u.current.offsetWidth, height: u.current.offsetHeight });
                        null == n || n(e), (l.current.style.transform = `scale(${e})`);
                    });
                    return e.observe(u.current), () => e.disconnect();
                }, [t, r, n, o]),
                i.createElement("div", { style: a, ref: u }, i.createElement("div", { style: s, ref: l }, i.createElement("div", { style: c }, e)))
            );
        };
        function calculateDeviceSize({ screenWidth: e, screenHeight: t, bezelWidth: r = 0, bezelHeight: i = 0, noPadding: n }) {
            const o = n ? 0 : 45;
            return { deviceWidth: e + 2 * r + 2 * o, deviceHeight: t + 2 * i + 2 * o };
        }
        (t.calculateDeviceSize = calculateDeviceSize),
            (t.deviceFromPreset = function deviceFromPreset({ portraitScreenWidth: e, portraitScreenHeight: t, screenRadius: r, portraitScreenMask: i, portraitBezelWidth: n, portraitBezelHeight: o, bezelRadius: a }, s) {
                const [c, u, l, d] = "portrait" === s ? [e, t, n, o] : [t, e, o, n];
                return {
                    screenWidth: c,
                    screenHeight: u,
                    screenRadius: r,
                    maskImage:
                        i &&
                        (function makeMaskImage({ portraitScreenMask: e, screenWidth: t, screenHeight: r, landscape: i = !1 }) {
                            return `url("data:image/svg+xml;utf8,${encodeURIComponent(
                                `<svg xmlns="http://www.w3.org/2000/svg" viewport="0 0 ${t} ${r}" preserveAspectRatio="none"><g x="0" y="0" ${i ? `transform="translate(0 ${r}) rotate(-90)"` : ""}>${e}</g></svg>`
                            )}")`;
                        })({ portraitScreenMask: i, screenWidth: c, screenHeight: u, landscape: "landscape" === s }),
                    bezelWidth: l,
                    bezelHeight: d,
                    bezelRadius: a,
                };
            });
        const n = { screenRadius: 0, portraitBezelWidth: 21, portraitBezelHeight: 21, bezelRadius: 59 },
            o = { portraitBezelWidth: 24, portraitBezelHeight: 96, bezelRadius: 57 },
            a = { screenRadius: 25, portraitBezelWidth: 38, portraitBezelHeight: 38, bezelRadius: 63 },
            s = { portraitBezelWidth: 20, portraitBezelHeight: 20, bezelRadius: 20 };
        t.devicePresets = {
            "iphone-11-pro": {
                title: "iPhone 11 Pro",
                ...n,
                portraitScreenWidth: 375,
                portraitScreenHeight: 812,
                portraitScreenMask:
                    '<path d="M292 8.668V9c0 9.266-7.07 21-23.332 21h-162C90.402 30 83.332 18.266 83.332 9v-.332c0-4.285 0-8.668-7.664-8.668H43.332C16.312 0 0 16.313 0 43.332v725.336C0 795.688 16.313 812 43.332 812h288.336c27.02 0 43.332-16.313 43.332-43.332V43.332C375 16.312 358.687 0 331.668 0h-32C292 0 292 4.383 292 8.668zm0 0"/>',
            },
            "iphone-11-pro-max": {
                title: "iPhone 11 Pro Max",
                ...n,
                portraitScreenWidth: 414,
                portraitScreenHeight: 896,
                portraitScreenMask:
                    '<path d="M96 0c3.313 0 5.91 2.688 6 6 .18 6.645 1.191 10.148 2.938 13.41 1.917 3.586 4.73 6.402 8.316 8.317 3.586 1.918 7.441 2.941 15.445 2.941h156.602c8.004 0 11.86-1.023 15.445-2.941 3.586-1.915 6.399-4.73 8.317-8.317 1.746-3.265 2.746-6.758 2.937-13.41.094-3.313 2.688-6 6-6h46.004c17.387 0 23.687 1.809 30.043 5.21 6.355 3.4 11.344 8.388 14.742 14.743C412.191 26.31 414 32.61 414 49.996v796.008c0 17.387-1.809 23.687-5.21 30.043-3.4 6.355-8.388 11.344-14.743 14.742-6.356 3.402-12.656 5.211-30.043 5.211H49.996c-17.387 0-23.687-1.809-30.043-5.21-6.355-3.4-11.344-8.388-14.742-14.743C1.809 869.69 0 863.39 0 846.004V49.996C0 32.61 1.809 26.31 5.21 19.953c3.4-6.355 8.388-11.344 14.743-14.742C26.31 1.809 32.61 0 49.996 0zm0 0"/>',
            },
            "iphone-8": { title: "iPhone 8", ...o, portraitScreenWidth: 375, portraitScreenHeight: 667 },
            "iphone-8-plus": { title: "iPhone 8 Plus", ...o, portraitScreenWidth: 414, portraitScreenHeight: 736 },
            "iphone-se": { title: "iPhone SE", portraitScreenWidth: 320, portraitScreenHeight: 568, portraitBezelWidth: 20, portraitBezelHeight: 112, bezelRadius: 57 },
            "samsung-note-10": { title: "Samsung Note 10", portraitScreenWidth: 360, portraitScreenHeight: 760, screenRadius: 10, portraitBezelWidth: 7, portraitBezelHeight: 15, bezelRadius: 15 },
            "pixel-4": { title: "Pixel 4", portraitScreenWidth: 360, portraitScreenHeight: 760, screenRadius: 30, portraitBezelWidth: 10, portraitBezelHeight: 40, bezelRadius: 50 },
            ipad: { title: "iPad", portraitScreenWidth: 768, portraitScreenHeight: 1024, portraitBezelWidth: 30, portraitBezelHeight: 95, bezelRadius: 57 },
            "ipad-pro-11": { title: "iPad Pro 11″", ...a, portraitScreenWidth: 834, portraitScreenHeight: 1194 },
            "ipad-pro-12-9": { title: "iPad Pro 12.9″", ...a, portraitScreenWidth: 1024, portraitScreenHeight: 1366 },
            "720p": { title: "720p", ...s, portraitScreenWidth: 720, portraitScreenHeight: 1280 },
            "900p": { title: "900p", ...s, portraitScreenWidth: 900, portraitScreenHeight: 1440 },
            "1080p": { title: "1080p", ...s, portraitScreenWidth: 1080, portraitScreenHeight: 1920 },
            "1440p": { title: "1440p", ...s, portraitScreenWidth: 1440, portraitScreenHeight: 2560 },
            "4k": { title: "4K", ...s, portraitScreenWidth: 2160, portraitScreenHeight: 3840 },
        };
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(0),
            n = r(34),
            o = r(13);
        function serializable(e) {
            return JSON.parse(JSON.stringify(e));
        }
        (t.stackComponentName = "Stack"),
            (t.defaultComponentDefinitions = {
                [o.BuiltInFramerComponentIdentifier.Stack]: {
                    depth: 1,
                    file: "",
                    identifier: o.BuiltInFramerComponentIdentifier.Stack,
                    name: t.stackComponentName,
                    packageIdentifier: "framer",
                    properties: serializable(i.getPropertyControls(i.Stack)),
                    type: "component",
                },
                [o.BuiltInFramerComponentIdentifier.Scroll]: {
                    depth: 1,
                    file: "",
                    identifier: o.BuiltInFramerComponentIdentifier.Scroll,
                    name: i.Scroll.name,
                    packageIdentifier: "framer",
                    properties: { ...serializable(i.getPropertyControls(i.Scroll)), children: { title: "Content", type: i.ControlType.ComponentInstance } },
                    type: "component",
                },
                [o.BuiltInFramerComponentIdentifier.Page]: {
                    depth: 1,
                    file: "",
                    identifier: o.BuiltInFramerComponentIdentifier.Page,
                    name: i.Page.name,
                    packageIdentifier: "framer",
                    properties: serializable(i.getPropertyControls(i.Page)),
                    type: "component",
                },
                [o.BuiltInFramerComponentIdentifier.Device]: {
                    depth: 1,
                    file: "",
                    identifier: o.BuiltInFramerComponentIdentifier.Device,
                    name: "Device",
                    packageIdentifier: o.BuiltInPackageIdentifier,
                    properties: serializable(i.getPropertyControls(n.DeviceCodeComponent)),
                    type: "component",
                },
            });
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(1),
            n = r(0),
            o = r(85),
            a = r(92),
            s = r(93),
            c = r(38);
        function framerLibraryNeedsCompatibility() {
            return !n.version || n.version.startsWith("0.");
        }
        t.framerLibraryNeedsCompatibility = framerLibraryNeedsCompatibility;
        class PreviewRenderer extends i.Component {
            constructor() {
                super(...arguments),
                    (this.eventSession = a.constructFramerEventSession()),
                    (this.componentHash = null),
                    (this.onRequirePackage = (e, t) => {
                        const { onRequirePackage: r } = this.props;
                        r && r(e, t);
                    });
            }
            containerStyle() {
                const { width: e, height: t } = this.props;
                return {
                    position: "absolute",
                    display: "block",
                    top: 0,
                    left: 0,
                    width: e,
                    height: t,
                    overflow: "hidden",
                    transformOrigin: "top left",
                    background: "transparent",
                    WebkitUserSelect: "none",
                    MozUserSelect: "none",
                    msUserSelect: "none",
                };
            }
            render() {
                var e, t;
                const { presentationNode: r, metadata: a, actionInstances: u } = this.props;
                if (!r) return null;
                const l = this.containerStyle(),
                    d = r.props,
                    p = n.Size(this.props.width, this.props.height);
                (d.top = 0), (d.left = 0), (d.right = null), (d.bottom = null);
                const f = null !== (e = null == a ? void 0 : a.settings.touch) && void 0 !== e && e,
                    v = null !== (t = null == a ? void 0 : a.settings.responsive) && void 0 !== t && t,
                    h = { ...n.Device.defaultProps, deviceSize: n.Size(p.width, p.height), contentSize: n.Size(d.width, d.height), rotate: !1, zoom: 1, responsive: v, background: "transparent", autoScale: s.PersistedData.autoScale };
                if ((v && ((d.width = p.width), (d.height = p.height)), framerLibraryNeedsCompatibility())) {
                    const e = c.downgradeProps(r.props);
                    (e.top = null), (e.left = null), (e.bottom = null), (e.right = null), (r.props = e);
                }
                let g = !0;
                this.componentHash !== this.props.componentHash && ((g = !1), (this.componentHash = this.props.componentHash));
                const { width: m, height: y } = r.props;
                return [
                    i.createElement(
                        "style",
                        { key: "touchCursorStyle" },
                        '\n                .__framer-touch-cursor-area, .__framer-touch-cursor-area [data-framer-component-type="Text"] {\n                    cursor: url("images/cursors/touch.png") 32 32, auto;\n                    cursor: -webkit-image-set(url("images/cursors/touch.png") 1x, url("images/cursors/touch@2x.png") 2x) 32 32, auto;\n                }\n\n                .__framer-touch-cursor-area:active, .__framer-touch-cursor-area [data-framer-component-type="Text"]:active {\n                    cursor: url("images/cursors/touch-active.png") 32 32, auto;\n                    cursor: -webkit-image-set(url("images/cursors/touch-active.png") 1x, url("images/cursors/touch-active@2x.png") 2x) 32 32, auto;\n                }\n            '
                    ),
                    i.createElement(
                        "div",
                        { key: "container", className: f ? "__framer-touch-cursor-area" : "", style: l },
                        i.createElement(
                            n.Device,
                            Object.assign({}, h),
                            i.createElement(n.DataObserver, null, i.createElement(n.Navigation, { width: m, height: y, style: { width: m, height: y } }, i.createElement(n.MotionSetup, null, o.renderPresentation(r, u, g))))
                        )
                    ),
                ];
            }
            componentDidCatch(e, t) {
                console.warn(e), console.warn(t);
            }
        }
        (t.PreviewRenderer = PreviewRenderer), (PreviewRenderer.defaultProps = { disableDevice: !1 });
        class WindowSizedPreviewRenderer extends i.Component {
            constructor() {
                // MK: feedback panel
                var feedbackPanel = document.createElement('div'),
                    feedbackPanelContent = document.createElement('div'),
                    feedbackPanelClose = document.createElement('div'),
                    feedbackPanelHeader = document.createElement('h1'),
                    feedbackPanelIframe = document.createElement('iframe'),
                    feedbackPositions = ['right', 'left']
                feedbackPanel.className = 'mk-feedback-panel ' + feedbackPositions[0];
                feedbackPanel.id = 'feedbackPanel';
                feedbackPanel.dataset.activeClassName = 'active';
                feedbackPanelClose.className = 'mk-feedback-panel-close';
                feedbackPanelClose.innerHTML = '&times;';
                feedbackPanelContent.className = 'mk-feedback-panel-content';
                feedbackPanelHeader.innerHTML = 'Please provide your feedback below';
                feedbackPanelContent.appendChild(feedbackPanelHeader);
                feedbackPanelContent.appendChild(feedbackPanelIframe);
                feedbackPanel.appendChild(feedbackPanelClose);
                feedbackPanel.appendChild(feedbackPanelContent);

                window.mkFeedbackPanel = {
                  element: feedbackPanel,
                  activate: function (url, position=feedbackPositions[0]) {
                    feedbackPanel.querySelector('iframe').src = url;
                    if (!feedbackPanel.classList.value.includes(position)) {
                      feedbackPanel.style.transitionProperty = 'none';
                      feedbackPanel.classList.remove(...feedbackPositions);
                      feedbackPanel.classList.add(position);
                    }
                    setTimeout(function(){
                      feedbackPanel.style.transitionProperty = 'all';
                      feedbackPanel.classList.add(feedbackPanel.dataset.activeClassName);
                    }, 100)
                  },
                  deactivate: function () {
                    feedbackPanel.classList.remove(feedbackPanel.dataset.activeClassName);
                    setTimeout(function(){ feedbackPanel.querySelector('iframe').src = ''; }, 1000);
                  }
                };

                feedbackPanelClose.addEventListener('click', mkFeedbackPanel.deactivate);
                document.querySelector('body').appendChild(feedbackPanel);

                // MK: set the global preview height to the height of the first screen
                window.previewHeight = arguments[0].metadata.height

                super(...arguments),
                    (this.state = { width: window.innerWidth, height: window.previewHeight }),
                    (this.onWindowResize = () => {
                        this.setState({ width: window.innerWidth, height: window.previewHeight });
                    });
            }
            componentDidMount() {
                window.addEventListener("resize", this.onWindowResize);
            }
            componentWillUnmount() {
                window.removeEventListener("resize", this.onWindowResize);
            }
            shouldComponentUpdate(e, t) {
                const r = !e.updateCounter || e.updateCounter !== this.props.updateCounter,
                    i = t !== this.state;
                return r || i;
            }
            render() {
                return i.createElement(PreviewRenderer, Object.assign({}, this.props, this.state));
            }
        }
        t.WindowSizedPreviewRenderer = WindowSizedPreviewRenderer;
    },
    function (e, t, r) {
        "use strict";
        function downgradeProps(e) {
            if (!e) return e;
            const t = e._constraints || {},
                r = e._border || {};
            let i = e.style || {},
                n = void 0;
            return (
                i && i.rotate && ((n = parseFloat(i.rotate)), (i = { ...i, rotate: void 0 })),
                (e = { ...e, ...r, style: i, rotation: n, _constraints: void 0, _border: void 0 }),
                void 0 !== t.autoSize && (e.autoSize = t.autoSize),
                void 0 !== t.aspectRatio && (e.aspectRatio = t.aspectRatio),
                e
            );
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.downgradeProps = downgradeProps),
            (t.downgradePropertyTree = function downgradePropertyTree(e) {
                const t = downgradeProps(e.props);
                let r = e.children;
                return r ? ((r = r.map(downgradePropertyTree)), { ...e, children: r, props: t }) : { ...e, props: t };
            });
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.isReactComponentDefinition = function isReactComponentDefinition(e) {
                return "component" === e.type;
            }),
            (t.isDesignDefinition = function isDesignDefinition(e) {
                return "master" === e.type;
            }),
            (t.isOverrideDefinition = function isOverrideDefinition(e) {
                return "override" === e.type;
            }),
            (t.isDeviceDefinition = function isDeviceDefinition(e) {
                return "device" === e.type;
            }),
            (t.isErrorDefinition = function isErrorDefinition(e) {
                return void 0 !== e && void 0 !== e.error;
            });
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(1);
        class TimeBudget {
            constructor(e) {
                (this.name = e), (this._current = 1 / 0), (this.deadline = 1 / 0), (this.limits = new Map()), this.limits.set("default", 1 / 0);
            }
            updateCurrent() {
                const e = this.limits.values();
                this._current = Math.max(...e);
            }
            get current() {
                return this._current;
            }
            setDefault(e) {
                this.addScope("default", e);
            }
            addScope(e, t) {
                const r = this._current;
                this.limits.set(e, t), (r < t || r === 1 / 0) && (this.updateCurrent(), this.resetDeadline());
            }
            removeScope(e) {
                this.limits.delete(e), this.updateCurrent();
            }
            extendDeadlineBy(e) {
                this.deadline += e;
            }
            resetDeadline() {
                this.deadline = Date.now() + this._current;
            }
            checkDeadline() {
                const e = Date.now();
                if (e > this.deadline) throw new Error(`${this.name} exceeded time limit of ${this._current}ms by ${e - this.deadline}ms.`);
            }
        }
        t.TimeBudget = TimeBudget;
        const n = new TimeBudget("Frame"),
            o = new TimeBudget("Component");
        t.executionTimeBudgets = { frame: n, component: o };
        let a = 200,
            s = !0,
            c = !1;
        function increaseFrameBudget() {
            n.extendDeadlineBy(n.current / 2);
        }
        function requestFrameBudgetReset() {
            s &&
                ((s = !1),
                n.resetDeadline(),
                setTimeout(() => {
                    s = !0;
                }, 0));
        }
        function resetComponentBudget() {
            requestFrameBudgetReset(), (a = 200), o.resetDeadline();
        }
        function checkBudget() {
            --a < 0 &&
                (function checkBudgetFull() {
                    requestFrameBudgetReset(), (a = 200), c && o.checkDeadline();
                    n.checkDeadline();
                })();
        }
        function installExecutionTimeBudgets() {
            (window.__checkBudget__ = checkBudget), (window.__checkComponentBudget__ = resetComponentBudget), (window.__checkFileBudget__ = increaseFrameBudget);
        }
        (t.initializeExecutionTimeBudgets = function initializeExecutionTimeBudgets(e = 5e3, t = 5e3) {
            n.setDefault(e), o.setDefault(t), installExecutionTimeBudgets();
        }),
            (t.useExecutionTimeBudgetsWhileRendering = function useExecutionTimeBudgetsWhileRendering() {
                installExecutionTimeBudgets(),
                    (c = !0),
                    i.useLayoutEffect(() => {
                        c = !1;
                    });
            });
    },
    function (e, t, r) {
        "use strict";
        let i;
        Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.getServiceMap = function getServiceMap() {
                return (
                    i ||
                    ((i = (function extractServiceMap() {
                        var e, t, r, i;
                        let n,
                            o = null === (t = null === (e = window) || void 0 === e ? void 0 : e.pageProps) || void 0 === t ? void 0 : t.services;
                        if (o) return o;
                        try {
                            const e = window.top;
                            if (((n = e.location.origin), (o = null === (i = null === (r = window.top) || void 0 === r ? void 0 : r.pageProps) || void 0 === i ? void 0 : i.services), o)) return o;
                        } catch (a) {}
                        if (n && n !== location.origin) throw Error(`Unexpectedly embedded by ${n} (expected ${location.origin})`);
                        if (location.origin.endsWith("framer.com") || location.origin.endsWith("framer.dev")) throw Error("ServiceMap data was not provided in document");
                        try {
                            const e = new URLSearchParams(location.search).get("services") || new URLSearchParams(location.hash.substring(1)).get("services");
                            e && (o = JSON.parse(e));
                        } catch (a) {}
                        if (o && "object" == typeof o && o.api) return o;
                        throw Error("ServiceMap requested but not available");
                    })()),
                    i)
                );
            });
    },
    function (e, t, r) {
        r(43), (e.exports = r(46));
    },
    function (e, t, r) {
        "use strict";
        (function (e) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            const i = r(2);
            let n;
            void 0 !== e && (n = e),
                "undefined" != typeof window && (n = window),
                n &&
                    !n.queueMicrotask &&
                    (n.queueMicrotask = function queueMicrotask(e) {
                        Promise.resolve().then(e).catch(i.unhandledError);
                    });
        }.call(this, r(14)));
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(16);
        t.deprecationWarning = function deprecationWarning(e, t, r) {
            const n = `Deprecation warning: ${e} will be removed in version ${t}${r ? `, use ${r} instead` : ""}.`;
            i.warnOnce(n);
        };
    },
    function (e, t, r) {
        "use strict";
        (function (e) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            const i = r(18);
            var n;
            !(function (e) {
                (e[(e.Trace = 0)] = "Trace"), (e[(e.Debug = 1)] = "Debug"), (e[(e.Info = 2)] = "Info"), (e[(e.Warn = 3)] = "Warn"), (e[(e.Error = 4)] = "Error"), (e[(e.NotLogging = 5)] = "NotLogging");
            })((n = t.LogLevel || (t.LogLevel = {})));
            const o = ["trace", "debug", "info", "warn", "error"],
                a = [":trace", ":debug", ":info", ":warn", ":error"];
            function applyLogLevelSpec(e, t) {
                for (const r of e.split(/[ ,]/)) {
                    let e = r.trim();
                    if (0 === e.length) continue;
                    let i = n.Debug,
                        o = !1;
                    e.startsWith("-") && ((e = e.slice(1)), (i = n.Warn), (o = !0));
                    for (let t = 0; t <= n.Error; t++) {
                        const r = a[t];
                        if (e.endsWith(r)) {
                            (i = t), o && (i += 1), (e = e.slice(0, e.length - r.length)), 0 === e.length && (e = "*");
                            break;
                        }
                    }
                    const s = new RegExp("^" + e.replace(/[*]/g, ".*") + "$");
                    for (const r of t) r.id.match(s) && (r.level = i);
                }
            }
            class LogEntry {
                constructor(e, t, r) {
                    (this.logger = e), (this.level = t), (this.parts = r), (this.time = Date.now());
                }
                toMessage() {
                    if (this.stringPrefix) return this.parts;
                    const e = [new Date(this.time).toISOString().substr(-14, 14), o[this.level] + ": [" + this.logger.id + "]"];
                    let t = 0;
                    for (; t < this.parts.length; t++) {
                        const r = this.parts[t];
                        if ("string" != typeof r) break;
                        e.push(r);
                    }
                    return (this.stringPrefix = e.join(" ")), this.parts.splice(0, t, this.stringPrefix), this.parts;
                }
                toString() {
                    return this.toMessage().toString();
                }
            }
            let s = "app:info";
            const c = void 0 !== e && !!e.kill;
            c && !!e.env.CI ? (s = "-:warn") : c && (s = "");
            try {
                "undefined" != typeof window && window.localStorage && (s = window.localStorage.logLevel || s);
            } catch {}
            try {
                void 0 !== e && (s = e.env.DEBUG || s);
            } catch {}
            try {
                "undefined" != typeof window && Object.assign(window, { setLogLevel });
            } catch {}
            const u = {},
                l = [];
            function createLogEntry(e, t, r) {
                var i;
                const n = new LogEntry(e, t, r);
                l.push(n);
                const o = Date.now() - 36e5;
                for (; l.length > 1e3 || (null === (i = l[0]) || void 0 === i ? void 0 : i.time) < o; ) l.shift();
                return n;
            }
            function getLogger(e) {
                const t = u[e];
                if (t) return t;
                const r = new Logger(e);
                return (u[e] = r), applyLogLevelSpec(s, [r]), r;
            }
            function setLogLevel(e) {
                try {
                    "undefined" != typeof window && window.localStorage && (window.localStorage.logLevel = e);
                } catch {}
                const t = s;
                s = e;
                const r = Object.values(u);
                for (const i of r) i.level = n.Warn;
                if ((applyLogLevelSpec(e, r), l.length > 0)) {
                    null === console || void 0 === console || console.log("--- LOG REPLAY ---");
                    for (const e of l) e.logger.level > e.level || (e.level >= n.Warn ? null === console || void 0 === console || console.warn(...e.toMessage()) : null === console || void 0 === console || console.log(...e.toMessage()));
                    null === console || void 0 === console || console.log("--- END OF LOG REPLAY ---");
                }
                return t;
            }
            (t.getLogReplayBuffer = function getLogReplayBuffer() {
                return l;
            }),
                (t.getLogger = getLogger),
                (t.setLogLevel = setLogLevel);
            class Logger {
                constructor(e) {
                    (this.id = e),
                        (this.level = n.Warn),
                        (this.didLog = {}),
                        (this.reportError = (e, t) => {
                            const r = i.reportError({ caller: this.reportError, error: e, tags: { handler: "logger", where: this.id }, extras: t });
                            t ? this.error(r, t) : this.error(r);
                        });
                }
                extend(e) {
                    return getLogger(this.id + ":" + e);
                }
                setLevel(e) {
                    const t = this.level;
                    return (this.level = e), t;
                }
                isLoggingTraceMessages() {
                    return this.level >= n.Trace;
                }
                trace(...e) {
                    if (this.level > n.Trace) return;
                    const t = new LogEntry(this, n.Trace, e);
                    null === console || void 0 === console || console.log(...t.toMessage());
                }
                debug(...e) {
                    const t = createLogEntry(this, n.Debug, e);
                    this.level > n.Debug || null === console || void 0 === console || console.log(...t.toMessage());
                }
                info(...e) {
                    const t = createLogEntry(this, n.Info, e);
                    this.level > n.Info || null === console || void 0 === console || console.info(...t.toMessage());
                }
                warn(...e) {
                    const t = createLogEntry(this, n.Warn, e);
                    this.level > n.Warn || null === console || void 0 === console || console.warn(...t.toMessage());
                }
                warnOncePerMinute(e, ...t) {
                    if (this.didLog[e] > Date.now()) return;
                    (this.didLog[e] = Date.now() + 6e4), t.unshift(e);
                    const r = createLogEntry(this, n.Warn, t);
                    this.level > n.Warn || null === console || void 0 === console || console.warn(...r.toMessage());
                }
                error(...e) {
                    const t = createLogEntry(this, n.Error, e);
                    this.level > n.Error || null === console || void 0 === console || console.error(...t.toMessage());
                }
                errorOncePerMinute(e, ...t) {
                    if (this.didLog[e] > Date.now()) return;
                    (this.didLog[e] = Date.now() + 6e4), t.unshift(e);
                    const r = createLogEntry(this, n.Error, t);
                    this.level > n.Error || null === console || void 0 === console || console.error(...r.toMessage());
                }
            }
            t.Logger = Logger;
        }.call(this, r(17)));
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(1),
            n = r(47),
            o = r(0),
            a = r(48),
            s = r(51),
            c = r(95),
            u = r(102),
            l = r(12),
            d = u.initializeAssetResolver(new l.AssetMap(), "studio");
        c.initializeRuntime(d), o.MainLoop.start();
        const p = document.querySelector("main"),
            f = i.createElement(s.StandaloneRoot, null);
        o.setGlobalRenderEnvironment({ target: o.RenderTarget.preview, zoom: 1, imageBaseURL: "./" }), a.installErrorHandler(), n.render(f, p);
    },
    function (e, t) {
        e.exports = ReactDOM;
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(19),
            n = r(50);
        function errorHandler(e) {
            const t = [],
                r = e instanceof Error ? n.parseError(e) : n.translateErrorEvent(e);
            t.push(r), i.default.send("runtime.error", t);
        }
        (t.errorHandler = errorHandler),
            (t.installErrorHandler = function installErrorHandler() {
                window.addEventListener("error", errorHandler);
            });
    },
    function (e, t, r) {
        "use strict";
        var i = Object.prototype.hasOwnProperty,
            n = "~";
        function Events() {}
        function EE(e, t, r) {
            (this.fn = e), (this.context = t), (this.once = r || !1);
        }
        function addListener(e, t, r, i, o) {
            if ("function" != typeof r) throw new TypeError("The listener must be a function");
            var a = new EE(r, i || e, o),
                s = n ? n + t : t;
            return e._events[s] ? (e._events[s].fn ? (e._events[s] = [e._events[s], a]) : e._events[s].push(a)) : ((e._events[s] = a), e._eventsCount++), e;
        }
        function clearEvent(e, t) {
            0 == --e._eventsCount ? (e._events = new Events()) : delete e._events[t];
        }
        function EventEmitter() {
            (this._events = new Events()), (this._eventsCount = 0);
        }
        Object.create && ((Events.prototype = Object.create(null)), new Events().__proto__ || (n = !1)),
            (EventEmitter.prototype.eventNames = function eventNames() {
                var e,
                    t,
                    r = [];
                if (0 === this._eventsCount) return r;
                for (t in (e = this._events)) i.call(e, t) && r.push(n ? t.slice(1) : t);
                return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r;
            }),
            (EventEmitter.prototype.listeners = function listeners(e) {
                var t = n ? n + e : e,
                    r = this._events[t];
                if (!r) return [];
                if (r.fn) return [r.fn];
                for (var i = 0, o = r.length, a = new Array(o); i < o; i++) a[i] = r[i].fn;
                return a;
            }),
            (EventEmitter.prototype.listenerCount = function listenerCount(e) {
                var t = n ? n + e : e,
                    r = this._events[t];
                return r ? (r.fn ? 1 : r.length) : 0;
            }),
            (EventEmitter.prototype.emit = function emit(e, t, r, i, o, a) {
                var s = n ? n + e : e;
                if (!this._events[s]) return !1;
                var c,
                    u,
                    l = this._events[s],
                    d = arguments.length;
                if (l.fn) {
                    switch ((l.once && this.removeListener(e, l.fn, void 0, !0), d)) {
                        case 1:
                            return l.fn.call(l.context), !0;
                        case 2:
                            return l.fn.call(l.context, t), !0;
                        case 3:
                            return l.fn.call(l.context, t, r), !0;
                        case 4:
                            return l.fn.call(l.context, t, r, i), !0;
                        case 5:
                            return l.fn.call(l.context, t, r, i, o), !0;
                        case 6:
                            return l.fn.call(l.context, t, r, i, o, a), !0;
                    }
                    for (u = 1, c = new Array(d - 1); u < d; u++) c[u - 1] = arguments[u];
                    l.fn.apply(l.context, c);
                } else {
                    var p,
                        f = l.length;
                    for (u = 0; u < f; u++)
                        switch ((l[u].once && this.removeListener(e, l[u].fn, void 0, !0), d)) {
                            case 1:
                                l[u].fn.call(l[u].context);
                                break;
                            case 2:
                                l[u].fn.call(l[u].context, t);
                                break;
                            case 3:
                                l[u].fn.call(l[u].context, t, r);
                                break;
                            case 4:
                                l[u].fn.call(l[u].context, t, r, i);
                                break;
                            default:
                                if (!c) for (p = 1, c = new Array(d - 1); p < d; p++) c[p - 1] = arguments[p];
                                l[u].fn.apply(l[u].context, c);
                        }
                }
                return !0;
            }),
            (EventEmitter.prototype.on = function on(e, t, r) {
                return addListener(this, e, t, r, !1);
            }),
            (EventEmitter.prototype.once = function once(e, t, r) {
                return addListener(this, e, t, r, !0);
            }),
            (EventEmitter.prototype.removeListener = function removeListener(e, t, r, i) {
                var o = n ? n + e : e;
                if (!this._events[o]) return this;
                if (!t) return clearEvent(this, o), this;
                var a = this._events[o];
                if (a.fn) a.fn !== t || (i && !a.once) || (r && a.context !== r) || clearEvent(this, o);
                else {
                    for (var s = 0, c = [], u = a.length; s < u; s++) (a[s].fn !== t || (i && !a[s].once) || (r && a[s].context !== r)) && c.push(a[s]);
                    c.length ? (this._events[o] = 1 === c.length ? c[0] : c) : clearEvent(this, o);
                }
                return this;
            }),
            (EventEmitter.prototype.removeAllListeners = function removeAllListeners(e) {
                var t;
                return e ? ((t = n ? n + e : e), this._events[t] && clearEvent(this, t)) : ((this._events = new Events()), (this._eventsCount = 0)), this;
            }),
            (EventEmitter.prototype.off = EventEmitter.prototype.removeListener),
            (EventEmitter.prototype.addListener = EventEmitter.prototype.on),
            (EventEmitter.prefixed = n),
            (EventEmitter.EventEmitter = EventEmitter),
            (e.exports = EventEmitter);
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        let i = null,
            n = null,
            o = null;
        const a = {},
            s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        for (let c = 0; c < s.length; c++) a[s.charCodeAt(c)] = c;
        function errorFromFramerComponentScript(e, t, r, i, n) {
            const s = (function getComponentMappings(e) {
                if (o && o.script === e) return o;
                o = { script: e, maps: [] };
                let t = 0,
                    r = 1;
                for (;;) {
                    const i = e.indexOf("\n", t);
                    if (i < 0) return o;
                    if ("#" === e[t + 2] && "f" === e[t + 4]) {
                        const n = e.slice(t, i);
                        if (n.startsWith("//# framerSourceMap=")) {
                            const e = n.slice("//# framerSourceMap=".length);
                            o.maps.push({ encoded: e, line: r + 1, map: void 0 });
                        }
                    }
                    (r += 1), (t = i + 1);
                }
            })(e);
            let c;
            for (const o of s.maps) {
                if (o.line > t) break;
                c = o;
            }
            if (!c) return { functionName: i, lineNumber: t, colNumber: r, fileName: n, userCode: !1 };
            c.map || (c.map = JSON.parse(atob(c.encoded)));
            const u = c.map;
            if (!u) throw Error("assert");
            n = u.sources[0] || u.file || n;
            const l = t - c.line,
                [d, p] = (function translateUsingMappings(e, t, r) {
                    let i = 0,
                        n = 0,
                        o = 0,
                        s = 0,
                        c = 0,
                        u = 0,
                        l = 0;
                    for (let d = 0, p = e.length; d < p; d++) {
                        const p = e.charCodeAt(d);
                        if (44 === p) c = 0;
                        else if (59 === p) {
                            if (i >= t) return [o + 1, s + 1];
                            (i += 1), (n = 0), (c = 0);
                        } else {
                            const e = a[p];
                            if (void 0 === e) continue;
                            if (((l |= (31 & e) << u), 32 & e)) {
                                u += 5;
                                continue;
                            }
                            const d = 1 & l;
                            l >>= 1;
                            const f = d ? -l : l;
                            if (0 === c) {
                                if (((n += f), i >= t && n > r)) return [o + 1, s + 1];
                            } else 1 === c || (2 === c ? (o += f) : 3 === c && (s += f));
                            c++, (l = 0), (u = 0);
                        }
                    }
                    return [-1, 0];
                })(u.mappings, l, r);
            return d >= 0 && ((t = d), (r = p)), { functionName: i, lineNumber: t, colNumber: r, fileName: n, userCode: !0 };
        }
        function parseStackElement(e) {
            const t = (function parseStackElementInfo(e) {
                    const t = { functionName: "", fileName: "", lineNumber: 0, colNumber: 0 };
                    let r = /^\s*([^@]+)@(.*):(\d+):(\d+)$/.exec(e);
                    return r
                        ? ((t.functionName = r[1].trim()), (t.fileName = r[2].trim()), (t.lineNumber = parseInt(r[3])), (t.colNumber = parseInt(r[4])), t)
                        : ((r = /^\s*at ([^(]+)\((.*):(\d+):(\d+)\)$/.exec(e)),
                          r
                              ? ((t.functionName = r[1].trim()), (t.fileName = r[2].trim()), (t.lineNumber = parseInt(r[3])), (t.colNumber = parseInt(r[4])), t)
                              : ((r = /^\s*at (.*):(\d+):(\d+)$/.exec(e)),
                                r
                                    ? ((t.fileName = r[1].trim()), (t.lineNumber = parseInt(r[2])), (t.colNumber = parseInt(r[3])), t)
                                    : ((r = /^\sat (.*)$/.exec(e)), r ? ((t.functionName = r[1].trim()), t) : ((t.functionName = e.trim()), t))));
                })(e),
                { lineNumber: r, colNumber: o, functionName: a } = t;
            let { fileName: s } = t;
            if (
                (function isComponentBuildFile(e) {
                    return e === n || "index/build.js" === e || "undefined" === e;
                })(s)
            ) {
                const e = i;
                if ("string" == typeof e) {
                    const t = errorFromFramerComponentScript(e, r, o, a, s);
                    if (t)
                        return (
                            (s = t.fileName), s.startsWith("../code/") ? (s = s.slice("../code/".length)) : s.startsWith("./code") ? (s = s.slice("./code".length)) : s.startsWith("./") && (s = s.slice("./".length)), { ...t, fileName: s }
                        );
                }
            }
            return { functionName: a, fileName: s, lineNumber: r, colNumber: o, userCode: !1 };
        }
        function parseStack(e) {
            return e
                ? ((function updateErrorGlobals() {
                      const e = window;
                      (i = e.componentScript || null), (n = e.componentSrc || null);
                  })(),
                  e
                      .split("\n")
                      .map(parseStackElement)
                      .filter((e) => e))
                : null;
        }
        function parseError(e, t) {
            let r = e.name ? e.name + ": " + e.message : e.message;
            r = r.split("\n")[0].trim();
            const i = parseStack(e.stack);
            if (i && i.length > 0) {
                const e = i.find((e) => e.userCode) || i[0];
                return { message: r, fileName: e.fileName, lineNumber: e.lineNumber, colNumber: e.colNumber, stack: i };
            }
            if (t) {
                return { message: r, fileName: t.filename, lineNumber: t.lineno, colNumber: t.colno };
            }
            return { message: r, fileName: "", lineNumber: -1, colNumber: -1 };
        }
        (t.errorFromFramerComponentScript = errorFromFramerComponentScript),
            (t.parseStackElement = parseStackElement),
            (t.parseStack = parseStack),
            (t.parseError = parseError),
            (t.translateErrorEvent = function translateErrorEvent(e) {
                return e.error ? parseError(e.error, e) : { message: e.message || "Unknown error", fileName: e.filename || "unknown", lineNumber: e.lineno || 0, colNumber: e.colno || 0 };
            }),
            (t.getCodeFileBaseNameFromError = function getCodeFileBaseNameFromError(e) {
                const t = e.fileName;
                return t.startsWith("../code/") ? t.slice("../code/".length) : t.startsWith("./code/") ? t.slice("./code/".length) : t.startsWith("./") ? t.slice("./".length) : t;
            });
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(1),
            n = r(0),
            o = r(8),
            a = r(82),
            s = r(37),
            c = r(94);
        class StandaloneRoot extends i.Component {
            constructor() {
                super(...arguments),
                    (this.state = { previewData: null, packages: [] }),
                    (this.setPreviewData = (e, t) => {
                        o.sandboxComponentLoader.updateStateWithScripts(e, n), this.setState({ previewData: t });
                    }),
                    (this.onRequirePackage = (e, t) => {
                        this.setState((r) => (r.packages.find((t) => t.package === e) ? null : { packages: r.packages.concat([{ package: e, displayName: t }]) }));
                    }),
                    (this.onPackagesResolved = () => {
                        this.forceUpdate();
                    });
            }
            componentDidMount() {
                window.setPreviewData = this.setPreviewData;
            }
            render() {
                const { packages: e, previewData: t } = this.state;
                if (!t || !t.presentationNode || !t.actionInstances) return null;
                const { presentationNode: r, customProperties: n, actionInstances: u } = t,
                    l = i.createElement(
                        i.Fragment,
                        null,
                        i.createElement(s.WindowSizedPreviewRenderer, Object.assign({}, t, { presentationNode: r, actionInstances: u, componentHash: null, onRequirePackage: this.onRequirePackage, updateCounter: null })),
                        i.createElement(a.PackageManager, { requiredPackages: e, installedPackages: o.sandboxComponentLoader.packageIdentifiers(), onPackagesResolved: this.onPackagesResolved })
                    );
                return c.wrapInCustomProperties(l, n);
            }
        }
        t.StandaloneRoot = StandaloneRoot;
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(1),
            n = r(21),
            o = r(22),
            a = r(9),
            s = r(10),
            c = r(53),
            u = r(54),
            l = r(11),
            d = r(55),
            p = r(23),
            f = r(76),
            v = r(77),
            h = r(80),
            g = /[^a-zA-Z]/g;
        class ComponentLoader {
            constructor() {
                (this.state = {
                    localPackageIdentifier: s.localPackageFallbackIdentifier,
                    packages: {},
                    serializablePackages: {},
                    entities: {},
                    entityIdsByPackage: {},
                    visibleComponentIdentifiers: [],
                    visiblePackageNames: [],
                    visiblePackageFileNames: {},
                    tokensByPackage: {},
                }),
                    h.addDefaultComponents(this.state.entities);
            }
            getSerializableState() {
                return {
                    localPackageIdentifier: this.state.localPackageIdentifier,
                    packages: this.state.serializablePackages,
                    entities: this.state.entities,
                    entityIdsByPackage: this.state.entityIdsByPackage,
                    visibleComponentIdentifiers: this.state.visibleComponentIdentifiers,
                    visiblePackageNames: this.state.visiblePackageNames,
                    visiblePackageFileNames: this.state.visiblePackageFileNames,
                    tokensByPackage: this.state.tokensByPackage,
                };
            }
            componentForIdentifier(e) {
                return this.state.entities[e] || null;
            }
            reactComponentForIdentifier(e) {
                const t = this.componentForIdentifier(e);
                return t && n.isSandboxReactComponentDefinition(t) ? t : null;
            }
            componentsForPackage(e) {
                return (this.state.entityIdsByPackage[e] || []).map((e) => this.state.entities[e]);
            }
            componentIdentifiers() {
                return this.state.visibleComponentIdentifiers;
            }
            errorForIdentifier(e) {
                const { entities: t, visiblePackageFileNames: r } = this.state,
                    i = a.extractComponentNameFromIdentifier(e);
                let s = null;
                if (Object.entries(r).length) {
                    let a = !1;
                    for (const c in r)
                        if (r[c].includes(i)) {
                            void 0 !== t[e] || n.isSandboxErrorDefinition(t[i]) || (s = o.createErrorDefinition(e, "Component cannot be found.")), (a = !0);
                            break;
                        }
                    if ((a || (s = o.createErrorDefinition(e, "Component file does not exist.", { fileDoesNotExist: !0 })), s)) return s;
                }
                const c = t[i];
                return n.isSandboxErrorDefinition(c) ? c : null;
            }
            forEachComponent(e) {
                for (const t of this.state.visibleComponentIdentifiers) {
                    const r = this.state.entities[t];
                    if (!n.isSandboxErrorDefinition(r) && e(r)) break;
                }
            }
            forEachDesignComponents(e) {
                this.forEachComponent((t) => {
                    if (n.isSandboxDesignDefinition(t)) return e(t);
                });
            }
            localPackageIdentifier() {
                return this.state.localPackageIdentifier;
            }
            packageDisplayName(e) {
                const t = this.state.packages[e];
                return t && t.displayName;
            }
            packageIdentifiers() {
                return this.state.visiblePackageNames;
            }
            packageFileNames(e) {
                return this.state.visiblePackageFileNames[e];
            }
            tokensForPackage(e) {
                return this.state.tokensByPackage[e];
            }
            updateStateWithScripts(e, t) {
                if (0 === Object.keys(e).length) return;
                const require = (e) => {
                        if ("react" === e) return i;
                        if ("react-dom" === e || "ReactDOM" === e) return c.optionalReactDOM();
                        if ("react-dom/unstable-native-dependencies" === e || "ReactDOMUnstableNativeDependencies" === e) return u.optionalReactDOMUnstableNativeDependencies();
                        if ("framer" === e) return t;
                        if ("framer/resource" === e) return {};
                        throw Error(`Component loader: Can't require ${e}`);
                    },
                    r = window,
                    o = document.head;
                if (!o) throw Error("assert: head is not present");
                const a = { exports: {} };
                ["vendors.js", "index.js"].forEach((t) => {
                    let i = e[t];
                    if (!i) {
                        if ("index.js" !== t || !e["vendors.js"]) return;
                        i = r.componentScript;
                    }
                    const n = t.replace(g, "_"),
                        s = `eval_${n}_script`,
                        c = `bundle_script_${n}`,
                        u = `function ${s}(module, exports, require) {\n${i}\n}\n${`//# sourceURL=${t}`}`;
                    try {
                        const e = o.querySelector(`.${c}`);
                        e && o.removeChild(e);
                        const i = document.createElement("script");
                        (i.className = c),
                            i.setAttribute("type", "text/javascript"),
                            (i.textContent = u),
                            o.appendChild(i),
                            "index.js" === t && ((r.componentScript = u), (r.componentSrc = i.src || location.toString())),
                            r[s](a, a.exports, require);
                    } catch (d) {
                        return void l.warn("An error occurred while reloading", d);
                    } finally {
                        a.exports || (a.exports = {});
                    }
                });
                let m = s.localPackageFallbackIdentifier;
                if (a.exports.__framer__) {
                    const { packageJson: e } = a.exports.__framer__;
                    e && e.name && (m = e.name);
                }
                const [y, S] = d.collectPackages(a.exports),
                    b = {};
                h.addDefaultComponents(b);
                const w = {},
                    P = [],
                    _ = [],
                    R = {},
                    E = {};
                for (const i of Object.keys(y)) {
                    const e = y[i];
                    e.depth <= 1 && (_.push(i), (R[i] = Object.keys(e.sourceModules)));
                    const t = p.collectEntities(e);
                    w[i] = [];
                    for (const r of Object.keys(t)) {
                        const o = t[r];
                        n.isSandboxErrorDefinition(o) || (w[i].push(r), e.depth <= 1 && P.push(r));
                    }
                    Object.assign(b, t), (E[i] = f.collectTokens(e));
                }
                v.addDefaultActions(b, w),
                    _.sort((e, t) => y[e].displayName.localeCompare(y[t].displayName)),
                    (this.state = {
                        localPackageIdentifier: m,
                        packages: y,
                        serializablePackages: S,
                        entities: b,
                        entityIdsByPackage: w,
                        visibleComponentIdentifiers: P,
                        visiblePackageNames: _,
                        visiblePackageFileNames: R,
                        tokensByPackage: E,
                    });
            }
        }
        (t.ComponentLoader = ComponentLoader), (t.sandboxComponentLoader = new ComponentLoader());
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.optionalReactDOM = function optionalReactDOM() {
                if ("undefined" != typeof window) return window.ReactDOM ? window.ReactDOM : void 0;
            });
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        let i = void 0;
        t.optionalReactDOMUnstableNativeDependencies = function optionalReactDOMUnstableNativeDependencies() {
            if ("undefined" == typeof window) return;
            const { ReactDOMUnstableNativeDependencies: e } = window;
            if (e) {
                if (!i) {
                    const t = e.injectEventPluginsByName;
                    i = {
                        ...e,
                        injectEventPluginsByName: function (...e) {
                            try {
                                t(...e);
                            } catch (r) {}
                        },
                    };
                }
                return i;
            }
        };
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(10),
            n = r(11);
        function getPackageInfo(e, t) {
            const r = e.__framer__;
            if (!r) return null;
            const { packageJson: o, dependencies: a, sourceModules: s } = r;
            let { name: c } = o;
            return (
                0 !== t || c || (c = i.localPackageFallbackIdentifier),
                c
                    ? { depth: t, displayName: (o.framer && o.framer.displayName) || c, exportsObject: e, name: c, componentsJson: o.framer && o.framer.components, designJson: o.design, dependencies: a || {}, sourceModules: s || {} }
                    : (n.warn("Failed to identify package"), null)
            );
        }
        t.collectPackages = function collectPackages(e) {
            const t = {},
                r = {},
                i = [{ exportsObject: e, depth: 0 }],
                n = new Set();
            for (; i.length > 0; ) {
                const { exportsObject: e, depth: o } = i.shift(),
                    a = getPackageInfo(e, o);
                if (!a) continue;
                const s = { ...a };
                delete s.exportsObject, delete s.dependencies, delete s.sourceModules, (t[a.name] = a), (r[a.name] = s), n.add(a.name);
                for (const t of Object.keys(a.dependencies)) n.has(t) || (n.add(t), i.push({ exportsObject: a.dependencies[t](), depth: o + 1 }));
            }
            return [t, r];
        };
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = "Module parse failed: ";
        t.rewordCompileError = function rewordCompileError(e) {
            if (!e.startsWith(i)) return e;
            const t = e.split("\n"),
                r = t[0];
            if (!r) return e;
            const n = t.slice(2);
            return r.slice(i.length) + "\n" + n.join("\n");
        };
    },
    function (e, t, r) {
        "use strict";
        (function (t) {
            var i = r(58);
            function compare(e, t) {
                if (e === t) return 0;
                for (var r = e.length, i = t.length, n = 0, o = Math.min(r, i); n < o; ++n)
                    if (e[n] !== t[n]) {
                        (r = e[n]), (i = t[n]);
                        break;
                    }
                return r < i ? -1 : i < r ? 1 : 0;
            }
            function isBuffer(e) {
                return t.Buffer && "function" == typeof t.Buffer.isBuffer ? t.Buffer.isBuffer(e) : !(null == e || !e._isBuffer);
            }
            var n = r(59),
                o = Object.prototype.hasOwnProperty,
                a = Array.prototype.slice,
                s = "foo" === function foo() {}.name;
            function pToString(e) {
                return Object.prototype.toString.call(e);
            }
            function isView(e) {
                return !isBuffer(e) && "function" == typeof t.ArrayBuffer && ("function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : !!e && (e instanceof DataView || !!(e.buffer && e.buffer instanceof ArrayBuffer)));
            }
            var c = (e.exports = ok),
                u = /\s*function\s+([^\(\s]*)\s*/;
            function getName(e) {
                if (n.isFunction(e)) {
                    if (s) return e.name;
                    var t = e.toString().match(u);
                    return t && t[1];
                }
            }
            function truncate(e, t) {
                return "string" == typeof e ? (e.length < t ? e : e.slice(0, t)) : e;
            }
            function inspect(e) {
                if (s || !n.isFunction(e)) return n.inspect(e);
                var t = getName(e);
                return "[Function" + (t ? ": " + t : "") + "]";
            }
            function fail(e, t, r, i, n) {
                throw new c.AssertionError({ message: r, actual: e, expected: t, operator: i, stackStartFunction: n });
            }
            function ok(e, t) {
                e || fail(e, !0, t, "==", c.ok);
            }
            function _deepEqual(e, t, r, i) {
                if (e === t) return !0;
                if (isBuffer(e) && isBuffer(t)) return 0 === compare(e, t);
                if (n.isDate(e) && n.isDate(t)) return e.getTime() === t.getTime();
                if (n.isRegExp(e) && n.isRegExp(t)) return e.source === t.source && e.global === t.global && e.multiline === t.multiline && e.lastIndex === t.lastIndex && e.ignoreCase === t.ignoreCase;
                if ((null !== e && "object" == typeof e) || (null !== t && "object" == typeof t)) {
                    if (isView(e) && isView(t) && pToString(e) === pToString(t) && !(e instanceof Float32Array || e instanceof Float64Array)) return 0 === compare(new Uint8Array(e.buffer), new Uint8Array(t.buffer));
                    if (isBuffer(e) !== isBuffer(t)) return !1;
                    var o = (i = i || { actual: [], expected: [] }).actual.indexOf(e);
                    return (
                        (-1 !== o && o === i.expected.indexOf(t)) ||
                        (i.actual.push(e),
                        i.expected.push(t),
                        (function objEquiv(e, t, r, i) {
                            if (null == e || null == t) return !1;
                            if (n.isPrimitive(e) || n.isPrimitive(t)) return e === t;
                            if (r && Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)) return !1;
                            var o = isArguments(e),
                                s = isArguments(t);
                            if ((o && !s) || (!o && s)) return !1;
                            if (o) return (e = a.call(e)), (t = a.call(t)), _deepEqual(e, t, r);
                            var c,
                                u,
                                d = l(e),
                                p = l(t);
                            if (d.length !== p.length) return !1;
                            for (d.sort(), p.sort(), u = d.length - 1; u >= 0; u--) if (d[u] !== p[u]) return !1;
                            for (u = d.length - 1; u >= 0; u--) if (((c = d[u]), !_deepEqual(e[c], t[c], r, i))) return !1;
                            return !0;
                        })(e, t, r, i))
                    );
                }
                return r ? e === t : e == t;
            }
            function isArguments(e) {
                return "[object Arguments]" == Object.prototype.toString.call(e);
            }
            function expectedException(e, t) {
                if (!e || !t) return !1;
                if ("[object RegExp]" == Object.prototype.toString.call(t)) return t.test(e);
                try {
                    if (e instanceof t) return !0;
                } catch (r) {}
                return !Error.isPrototypeOf(t) && !0 === t.call({}, e);
            }
            function _throws(e, t, r, i) {
                var o;
                if ("function" != typeof t) throw new TypeError('"block" argument must be a function');
                "string" == typeof r && ((i = r), (r = null)),
                    (o = (function _tryBlock(e) {
                        var t;
                        try {
                            e();
                        } catch (r) {
                            t = r;
                        }
                        return t;
                    })(t)),
                    (i = (r && r.name ? " (" + r.name + ")." : ".") + (i ? " " + i : ".")),
                    e && !o && fail(o, r, "Missing expected exception" + i);
                var a = "string" == typeof i,
                    s = !e && o && !r;
                if ((((!e && n.isError(o) && a && expectedException(o, r)) || s) && fail(o, r, "Got unwanted exception" + i), (e && o && r && !expectedException(o, r)) || (!e && o))) throw o;
            }
            (c.AssertionError = function AssertionError(e) {
                (this.name = "AssertionError"),
                    (this.actual = e.actual),
                    (this.expected = e.expected),
                    (this.operator = e.operator),
                    e.message
                        ? ((this.message = e.message), (this.generatedMessage = !1))
                        : ((this.message = (function getMessage(e) {
                              return truncate(inspect(e.actual), 128) + " " + e.operator + " " + truncate(inspect(e.expected), 128);
                          })(this)),
                          (this.generatedMessage = !0));
                var t = e.stackStartFunction || fail;
                if (Error.captureStackTrace) Error.captureStackTrace(this, t);
                else {
                    var r = new Error();
                    if (r.stack) {
                        var i = r.stack,
                            n = getName(t),
                            o = i.indexOf("\n" + n);
                        if (o >= 0) {
                            var a = i.indexOf("\n", o + 1);
                            i = i.substring(a + 1);
                        }
                        this.stack = i;
                    }
                }
            }),
                n.inherits(c.AssertionError, Error),
                (c.fail = fail),
                (c.ok = ok),
                (c.equal = function equal(e, t, r) {
                    e != t && fail(e, t, r, "==", c.equal);
                }),
                (c.notEqual = function notEqual(e, t, r) {
                    e == t && fail(e, t, r, "!=", c.notEqual);
                }),
                (c.deepEqual = function deepEqual(e, t, r) {
                    _deepEqual(e, t, !1) || fail(e, t, r, "deepEqual", c.deepEqual);
                }),
                (c.deepStrictEqual = function deepStrictEqual(e, t, r) {
                    _deepEqual(e, t, !0) || fail(e, t, r, "deepStrictEqual", c.deepStrictEqual);
                }),
                (c.notDeepEqual = function notDeepEqual(e, t, r) {
                    _deepEqual(e, t, !1) && fail(e, t, r, "notDeepEqual", c.notDeepEqual);
                }),
                (c.notDeepStrictEqual = function notDeepStrictEqual(e, t, r) {
                    _deepEqual(e, t, !0) && fail(e, t, r, "notDeepStrictEqual", notDeepStrictEqual);
                }),
                (c.strictEqual = function strictEqual(e, t, r) {
                    e !== t && fail(e, t, r, "===", c.strictEqual);
                }),
                (c.notStrictEqual = function notStrictEqual(e, t, r) {
                    e === t && fail(e, t, r, "!==", c.notStrictEqual);
                }),
                (c.throws = function (e, t, r) {
                    _throws(!0, e, t, r);
                }),
                (c.doesNotThrow = function (e, t, r) {
                    _throws(!1, e, t, r);
                }),
                (c.ifError = function (e) {
                    if (e) throw e;
                }),
                (c.strict = i(
                    function strict(e, t) {
                        e || fail(e, !0, t, "==", strict);
                    },
                    c,
                    { equal: c.strictEqual, deepEqual: c.deepStrictEqual, notEqual: c.notStrictEqual, notDeepEqual: c.notDeepStrictEqual }
                )),
                (c.strict.strict = c.strict);
            var l =
                Object.keys ||
                function (e) {
                    var t = [];
                    for (var r in e) o.call(e, r) && t.push(r);
                    return t;
                };
        }.call(this, r(14)));
    },
    function (e, t, r) {
        "use strict";
        var i = Object.getOwnPropertySymbols,
            n = Object.prototype.hasOwnProperty,
            o = Object.prototype.propertyIsEnumerable;
        function toObject(e) {
            if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(e);
        }
        e.exports = (function shouldUseNative() {
            try {
                if (!Object.assign) return !1;
                var e = new String("abc");
                if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0])) return !1;
                for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
                if (
                    "0123456789" !==
                    Object.getOwnPropertyNames(t)
                        .map(function (e) {
                            return t[e];
                        })
                        .join("")
                )
                    return !1;
                var i = {};
                return (
                    "abcdefghijklmnopqrst".split("").forEach(function (e) {
                        i[e] = e;
                    }),
                    "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("")
                );
            } catch (n) {
                return !1;
            }
        })()
            ? Object.assign
            : function (e, t) {
                  for (var r, a, s = toObject(e), c = 1; c < arguments.length; c++) {
                      for (var u in (r = Object(arguments[c]))) n.call(r, u) && (s[u] = r[u]);
                      if (i) {
                          a = i(r);
                          for (var l = 0; l < a.length; l++) o.call(r, a[l]) && (s[a[l]] = r[a[l]]);
                      }
                  }
                  return s;
              };
    },
    function (e, t, r) {
        (function (e) {
            var i =
                    Object.getOwnPropertyDescriptors ||
                    function getOwnPropertyDescriptors(e) {
                        for (var t = Object.keys(e), r = {}, i = 0; i < t.length; i++) r[t[i]] = Object.getOwnPropertyDescriptor(e, t[i]);
                        return r;
                    },
                n = /%[sdj%]/g;
            (t.format = function (e) {
                if (!isString(e)) {
                    for (var t = [], r = 0; r < arguments.length; r++) t.push(inspect(arguments[r]));
                    return t.join(" ");
                }
                r = 1;
                for (
                    var i = arguments,
                        o = i.length,
                        a = String(e).replace(n, function (e) {
                            if ("%%" === e) return "%";
                            if (r >= o) return e;
                            switch (e) {
                                case "%s":
                                    return String(i[r++]);
                                case "%d":
                                    return Number(i[r++]);
                                case "%j":
                                    try {
                                        return JSON.stringify(i[r++]);
                                    } catch (t) {
                                        return "[Circular]";
                                    }
                                default:
                                    return e;
                            }
                        }),
                        s = i[r];
                    r < o;
                    s = i[++r]
                )
                    isNull(s) || !isObject(s) ? (a += " " + s) : (a += " " + inspect(s));
                return a;
            }),
                (t.deprecate = function (r, i) {
                    if (void 0 !== e && !0 === e.noDeprecation) return r;
                    if (void 0 === e)
                        return function () {
                            return t.deprecate(r, i).apply(this, arguments);
                        };
                    var n = !1;
                    return function deprecated() {
                        if (!n) {
                            if (e.throwDeprecation) throw new Error(i);
                            e.traceDeprecation ? console.trace(i) : console.error(i), (n = !0);
                        }
                        return r.apply(this, arguments);
                    };
                });
            var o,
                a = {};
            function inspect(e, r) {
                var i = { seen: [], stylize: stylizeNoColor };
                return (
                    arguments.length >= 3 && (i.depth = arguments[2]),
                    arguments.length >= 4 && (i.colors = arguments[3]),
                    isBoolean(r) ? (i.showHidden = r) : r && t._extend(i, r),
                    isUndefined(i.showHidden) && (i.showHidden = !1),
                    isUndefined(i.depth) && (i.depth = 2),
                    isUndefined(i.colors) && (i.colors = !1),
                    isUndefined(i.customInspect) && (i.customInspect = !0),
                    i.colors && (i.stylize = stylizeWithColor),
                    formatValue(i, e, i.depth)
                );
            }
            function stylizeWithColor(e, t) {
                var r = inspect.styles[t];
                return r ? "[" + inspect.colors[r][0] + "m" + e + "[" + inspect.colors[r][1] + "m" : e;
            }
            function stylizeNoColor(e, t) {
                return e;
            }
            function formatValue(e, r, i) {
                if (e.customInspect && r && isFunction(r.inspect) && r.inspect !== t.inspect && (!r.constructor || r.constructor.prototype !== r)) {
                    var n = r.inspect(i, e);
                    return isString(n) || (n = formatValue(e, n, i)), n;
                }
                var o = (function formatPrimitive(e, t) {
                    if (isUndefined(t)) return e.stylize("undefined", "undefined");
                    if (isString(t)) {
                        var r = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                        return e.stylize(r, "string");
                    }
                    if (isNumber(t)) return e.stylize("" + t, "number");
                    if (isBoolean(t)) return e.stylize("" + t, "boolean");
                    if (isNull(t)) return e.stylize("null", "null");
                })(e, r);
                if (o) return o;
                var a = Object.keys(r),
                    s = (function arrayToHash(e) {
                        var t = {};
                        return (
                            e.forEach(function (e, r) {
                                t[e] = !0;
                            }),
                            t
                        );
                    })(a);
                if ((e.showHidden && (a = Object.getOwnPropertyNames(r)), isError(r) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0))) return formatError(r);
                if (0 === a.length) {
                    if (isFunction(r)) {
                        var c = r.name ? ": " + r.name : "";
                        return e.stylize("[Function" + c + "]", "special");
                    }
                    if (isRegExp(r)) return e.stylize(RegExp.prototype.toString.call(r), "regexp");
                    if (isDate(r)) return e.stylize(Date.prototype.toString.call(r), "date");
                    if (isError(r)) return formatError(r);
                }
                var u,
                    l = "",
                    d = !1,
                    p = ["{", "}"];
                (isArray(r) && ((d = !0), (p = ["[", "]"])), isFunction(r)) && (l = " [Function" + (r.name ? ": " + r.name : "") + "]");
                return (
                    isRegExp(r) && (l = " " + RegExp.prototype.toString.call(r)),
                    isDate(r) && (l = " " + Date.prototype.toUTCString.call(r)),
                    isError(r) && (l = " " + formatError(r)),
                    0 !== a.length || (d && 0 != r.length)
                        ? i < 0
                            ? isRegExp(r)
                                ? e.stylize(RegExp.prototype.toString.call(r), "regexp")
                                : e.stylize("[Object]", "special")
                            : (e.seen.push(r),
                              (u = d
                                  ? (function formatArray(e, t, r, i, n) {
                                        for (var o = [], a = 0, s = t.length; a < s; ++a) hasOwnProperty(t, String(a)) ? o.push(formatProperty(e, t, r, i, String(a), !0)) : o.push("");
                                        return (
                                            n.forEach(function (n) {
                                                n.match(/^\d+$/) || o.push(formatProperty(e, t, r, i, n, !0));
                                            }),
                                            o
                                        );
                                    })(e, r, i, s, a)
                                  : a.map(function (t) {
                                        return formatProperty(e, r, i, s, t, d);
                                    })),
                              e.seen.pop(),
                              (function reduceToSingleString(e, t, r) {
                                  if (
                                      e.reduce(function (e, t) {
                                          return t.indexOf("\n") >= 0 && 0, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1;
                                      }, 0) > 60
                                  )
                                      return r[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + r[1];
                                  return r[0] + t + " " + e.join(", ") + " " + r[1];
                              })(u, l, p))
                        : p[0] + l + p[1]
                );
            }
            function formatError(e) {
                return "[" + Error.prototype.toString.call(e) + "]";
            }
            function formatProperty(e, t, r, i, n, o) {
                var a, s, c;
                if (
                    ((c = Object.getOwnPropertyDescriptor(t, n) || { value: t[n] }).get ? (s = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special")) : c.set && (s = e.stylize("[Setter]", "special")),
                    hasOwnProperty(i, n) || (a = "[" + n + "]"),
                    s ||
                        (e.seen.indexOf(c.value) < 0
                            ? (s = isNull(r) ? formatValue(e, c.value, null) : formatValue(e, c.value, r - 1)).indexOf("\n") > -1 &&
                              (s = o
                                  ? s
                                        .split("\n")
                                        .map(function (e) {
                                            return "  " + e;
                                        })
                                        .join("\n")
                                        .substr(2)
                                  : "\n" +
                                    s
                                        .split("\n")
                                        .map(function (e) {
                                            return "   " + e;
                                        })
                                        .join("\n"))
                            : (s = e.stylize("[Circular]", "special"))),
                    isUndefined(a))
                ) {
                    if (o && n.match(/^\d+$/)) return s;
                    (a = JSON.stringify("" + n)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
                        ? ((a = a.substr(1, a.length - 2)), (a = e.stylize(a, "name")))
                        : ((a = a
                              .replace(/'/g, "\\'")
                              .replace(/\\"/g, '"')
                              .replace(/(^"|"$)/g, "'")),
                          (a = e.stylize(a, "string")));
                }
                return a + ": " + s;
            }
            function isArray(e) {
                return Array.isArray(e);
            }
            function isBoolean(e) {
                return "boolean" == typeof e;
            }
            function isNull(e) {
                return null === e;
            }
            function isNumber(e) {
                return "number" == typeof e;
            }
            function isString(e) {
                return "string" == typeof e;
            }
            function isUndefined(e) {
                return void 0 === e;
            }
            function isRegExp(e) {
                return isObject(e) && "[object RegExp]" === objectToString(e);
            }
            function isObject(e) {
                return "object" == typeof e && null !== e;
            }
            function isDate(e) {
                return isObject(e) && "[object Date]" === objectToString(e);
            }
            function isError(e) {
                return isObject(e) && ("[object Error]" === objectToString(e) || e instanceof Error);
            }
            function isFunction(e) {
                return "function" == typeof e;
            }
            function objectToString(e) {
                return Object.prototype.toString.call(e);
            }
            function pad(e) {
                return e < 10 ? "0" + e.toString(10) : e.toString(10);
            }
            (t.debuglog = function (r) {
                if ((isUndefined(o) && (o = e.env.NODE_DEBUG || ""), (r = r.toUpperCase()), !a[r]))
                    if (new RegExp("\\b" + r + "\\b", "i").test(o)) {
                        var i = e.pid;
                        a[r] = function () {
                            var e = t.format.apply(t, arguments);
                            console.error("%s %d: %s", r, i, e);
                        };
                    } else a[r] = function () {};
                return a[r];
            }),
                (t.inspect = inspect),
                (inspect.colors = {
                    bold: [1, 22],
                    italic: [3, 23],
                    underline: [4, 24],
                    inverse: [7, 27],
                    white: [37, 39],
                    grey: [90, 39],
                    black: [30, 39],
                    blue: [34, 39],
                    cyan: [36, 39],
                    green: [32, 39],
                    magenta: [35, 39],
                    red: [31, 39],
                    yellow: [33, 39],
                }),
                (inspect.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" }),
                (t.isArray = isArray),
                (t.isBoolean = isBoolean),
                (t.isNull = isNull),
                (t.isNullOrUndefined = function isNullOrUndefined(e) {
                    return null == e;
                }),
                (t.isNumber = isNumber),
                (t.isString = isString),
                (t.isSymbol = function isSymbol(e) {
                    return "symbol" == typeof e;
                }),
                (t.isUndefined = isUndefined),
                (t.isRegExp = isRegExp),
                (t.isObject = isObject),
                (t.isDate = isDate),
                (t.isError = isError),
                (t.isFunction = isFunction),
                (t.isPrimitive = function isPrimitive(e) {
                    return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e;
                }),
                (t.isBuffer = r(60));
            var s = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            function timestamp() {
                var e = new Date(),
                    t = [pad(e.getHours()), pad(e.getMinutes()), pad(e.getSeconds())].join(":");
                return [e.getDate(), s[e.getMonth()], t].join(" ");
            }
            function hasOwnProperty(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }
            (t.log = function () {
                console.log("%s - %s", timestamp(), t.format.apply(t, arguments));
            }),
                (t.inherits = r(61)),
                (t._extend = function (e, t) {
                    if (!t || !isObject(t)) return e;
                    for (var r = Object.keys(t), i = r.length; i--; ) e[r[i]] = t[r[i]];
                    return e;
                });
            var c = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;
            function callbackifyOnRejected(e, t) {
                if (!e) {
                    var r = new Error("Promise was rejected with a falsy value");
                    (r.reason = e), (e = r);
                }
                return t(e);
            }
            (t.promisify = function promisify(e) {
                if ("function" != typeof e) throw new TypeError('The "original" argument must be of type Function');
                if (c && e[c]) {
                    var t;
                    if ("function" != typeof (t = e[c])) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
                    return Object.defineProperty(t, c, { value: t, enumerable: !1, writable: !1, configurable: !0 }), t;
                }
                function t() {
                    for (
                        var t,
                            r,
                            i = new Promise(function (e, i) {
                                (t = e), (r = i);
                            }),
                            n = [],
                            o = 0;
                        o < arguments.length;
                        o++
                    )
                        n.push(arguments[o]);
                    n.push(function (e, i) {
                        e ? r(e) : t(i);
                    });
                    try {
                        e.apply(this, n);
                    } catch (a) {
                        r(a);
                    }
                    return i;
                }
                return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), c && Object.defineProperty(t, c, { value: t, enumerable: !1, writable: !1, configurable: !0 }), Object.defineProperties(t, i(e));
            }),
                (t.promisify.custom = c),
                (t.callbackify = function callbackify(t) {
                    if ("function" != typeof t) throw new TypeError('The "original" argument must be of type Function');
                    function callbackified() {
                        for (var r = [], i = 0; i < arguments.length; i++) r.push(arguments[i]);
                        var n = r.pop();
                        if ("function" != typeof n) throw new TypeError("The last argument must be of type Function");
                        var o = this,
                            cb = function () {
                                return n.apply(o, arguments);
                            };
                        t.apply(this, r).then(
                            function (t) {
                                e.nextTick(cb, null, t);
                            },
                            function (t) {
                                e.nextTick(callbackifyOnRejected, t, cb);
                            }
                        );
                    }
                    return Object.setPrototypeOf(callbackified, Object.getPrototypeOf(t)), Object.defineProperties(callbackified, i(t)), callbackified;
                });
        }.call(this, r(17)));
    },
    function (e, t) {
        e.exports = function isBuffer(e) {
            return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8;
        };
    },
    function (e, t) {
        "function" == typeof Object.create
            ? (e.exports = function inherits(e, t) {
                  t && ((e.super_ = t), (e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })));
              })
            : (e.exports = function inherits(e, t) {
                  if (t) {
                      e.super_ = t;
                      var TempCtor = function () {};
                      (TempCtor.prototype = t.prototype), (e.prototype = new TempCtor()), (e.prototype.constructor = e);
                  }
              });
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.isAssetResolver = function isAssetResolver(e) {
                return "function" == typeof e;
            });
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(26);
        var n, o, a, s, c, u, l, d, p, f, v, h, g, m, y, S, b, w, P, _, R, E, O, x, j, V, I, C, M, k, D, F, T, q, N, L, W, $, B, U, H, K, J, G, Z;
        !(function __export(e) {
            for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r]);
        })(r(26)),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((n = t.Assets || (t.Assets = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((o = t.Beep || (t.Beep = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((a = t.CanvasSandboxInitializer || (t.CanvasSandboxInitializer = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((s = t.CanvasSandboxService || (t.CanvasSandboxService = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((c = t.ChooseFile || (t.ChooseFile = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((u = t.Clipboard || (t.Clipboard = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((l = t.ColorSampler || (t.ColorSampler = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((d = t.ControlsVisibility || (t.ControlsVisibility = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((p = t.Dependencies || (t.Dependencies = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((f = t.EditorApp || (t.EditorApp = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((v = t.FeedbackService || (t.FeedbackService = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((h = t.FeedbackDocument || (t.FeedbackDocument = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((g = t.FigmaImporter || (t.FigmaImporter = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((m = t.Files || (t.Files = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((y = t.FileUpdates || (t.FileUpdates = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((S = t.GestureEventTarget || (t.GestureEventTarget = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((b = t.Layout || (t.Layout = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((w = t.MenuActionTarget || (t.MenuActionTarget = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((P = t.ContextMenuPresenter || (t.ContextMenuPresenter = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((_ = t.PreviewSandbox || (t.PreviewSandbox = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((R = t.PreviewWrapper || (t.PreviewWrapper = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((E = t.SharedPreviewSandbox || (t.SharedPreviewSandbox = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((O = t.PreviewDataSource || (t.PreviewDataSource = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((x = t.LegacyPreviewDataSource || (t.LegacyPreviewDataSource = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((j = t.PreviewSettings || (t.PreviewSettings = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((V = t.PreviewStore || (t.PreviewStore = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((I = t.PreviewWindowShortcuts || (t.PreviewWindowShortcuts = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((C = t.PreviewDesktop || (t.PreviewDesktop = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((M = t.ProjectPackage || (t.ProjectPackage = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((k = t.ProjectState || (t.ProjectState = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((D = t.SandboxComponentLoader || (t.SandboxComponentLoader = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((F = t.PublicStoreClient || (t.PublicStoreClient = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((T = t.PrivateStoreClient || (t.PrivateStoreClient = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((q = t.Toast || (t.Toast = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((N = t.ToolOwner || (t.ToolOwner = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((L = t.ToolWrapper || (t.ToolWrapper = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((W = t.TutorialDocument || (t.TutorialDocument = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })(($ = t.TutorialFrame || (t.TutorialFrame = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((B = t.UserNotifications || (t.UserNotifications = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((U = t.UserSessionService || (t.UserSessionService = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((H = t.WebProject || (t.WebProject = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((K = t.ZzzTestingBeep || (t.ZzzTestingBeep = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((J = t.ZzzTestingStreams || (t.ZzzTestingStreams = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((G = t.ZzzTestingTypes || (t.ZzzTestingTypes = {}))),
            (function (e) {
                (e.on = function on(t) {
                    const r = i.ServiceManager.shared();
                    return { expect: (i) => r.expectWithoutDiscovery(e.service, t, i), discover: (i) => r.discover(e.service, t, i), register: (i) => r.register({ channel: t, service: e.service, implementation: i }) };
                }),
                    (e.unregister = async function unregister(e) {
                        i.ServiceManager.shared().unregister(e);
                    });
            })((Z = t.ZzzTestingOneway || (t.ZzzTestingOneway = {}))),
            (function (e) {
                let t,
                    r,
                    Y,
                    X,
                    Q,
                    ee,
                    te,
                    re,
                    ie,
                    ne,
                    oe,
                    ae,
                    se,
                    ce,
                    ue,
                    le,
                    de,
                    pe,
                    fe,
                    ve,
                    he,
                    ge,
                    me,
                    ye,
                    Se,
                    be,
                    we,
                    Pe,
                    _e,
                    Re,
                    Ee,
                    Oe,
                    xe,
                    je,
                    Ve,
                    Ie,
                    Ce,
                    Me,
                    ke,
                    De,
                    ze,
                    Fe,
                    Ae,
                    Te,
                    qe,
                    Ne,
                    Le,
                    We,
                    $e,
                    Be,
                    Ue,
                    He,
                    Ke,
                    Je,
                    Ge,
                    Ze,
                    Ye,
                    Xe,
                    Qe,
                    et,
                    tt,
                    rt,
                    it,
                    nt,
                    ot,
                    at,
                    st,
                    ct,
                    ut,
                    lt,
                    dt,
                    pt,
                    ft,
                    vt,
                    ht,
                    gt,
                    mt,
                    yt,
                    St,
                    bt,
                    wt;
                !(function (e) {
                    const t = { id: "__Assets__", fingerprint: "96c9b7132a1b85fc839e9580e5596867", methods: { assetUpdatesStream: {} }, newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t) };
                    n.service = t || n.service;
                    class OutgoingWrapper {
                        constructor(e, t) {
                            (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                        }
                        assetUpdatesStream(e) {
                            return new i.ServiceStreamsPrivate.StreamReader("assetUpdatesStream", e, this.helper);
                        }
                    }
                })((t = e.AssetsHelper || (e.AssetsHelper = {}))),
                    (function (e) {
                        const t = { id: "__Beep__", fingerprint: "61a1004615dc1e33269b7165105b3499", methods: { beep: {} }, newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t) };
                        o.service = t || o.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            async beep() {
                                await this.helper({ method: "beep", argument: void 0 });
                            }
                        }
                    })((r = e.BeepHelper || (e.BeepHelper = {}))),
                    (function (e) {
                        const t = { id: "__CanvasSandboxInitializer__", fingerprint: "605a8d3ffe57051672ab5f524be57290", methods: { unused: {} }, newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t) };
                        a.service = t || a.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            async unused() {
                                await this.helper({ method: "unused", argument: void 0 });
                            }
                        }
                    })((Y = e.CanvasSandboxInitializerHelper || (e.CanvasSandboxInitializerHelper = {}))),
                    (function (e) {
                        const t = { id: "__CanvasSandboxService__", fingerprint: "723d6f5d425a495eed6ab20ebeb22b14", methods: { fixmeTemporaryUpdate: {} }, newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t) };
                        s.service = t || s.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                this.helper = t;
                            }
                            fixmeTemporaryUpdate(e) {
                                this.helper({ method: "fixmeTemporaryUpdate", argument: e, oneway: !0 });
                            }
                        }
                    })((X = e.CanvasSandboxServiceHelper || (e.CanvasSandboxServiceHelper = {}))),
                    (function (t) {
                        const r = {
                            id: "__ChooseFile__",
                            fingerprint: "1916635b1f6a59f36975ea17ee96a7cd",
                            methods: { chooseImage: {}, chooseFile: {}, chooseMetadataImage: {}, addImages: {} },
                            newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t),
                        };
                        c.service = r || c.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            async chooseImage(t) {
                                return this.helper({ method: "chooseImage", argument: t, returnValidator: this.validateReturns ? e.ChooseFileValidation.copyImageInfos : void 0 });
                            }
                            async chooseFile(t) {
                                return this.helper({ method: "chooseFile", argument: t, returnValidator: this.validateReturns ? e.ChooseFileValidation.copyFileInfo : void 0 });
                            }
                            async chooseMetadataImage(e) {
                                await this.helper({ method: "chooseMetadataImage", argument: e });
                            }
                            async addImages(t) {
                                return this.helper({ method: "addImages", argument: t, returnValidator: this.validateReturns ? e.ChooseFileValidation.copyImageInfos : void 0 });
                            }
                        }
                    })((Q = e.ChooseFileHelper || (e.ChooseFileHelper = {}))),
                    (function (t) {
                        const r = { id: "__Clipboard__", fingerprint: "4cf52063da124adfcc6ae1a73d6597df", methods: { write: {}, read: {} }, newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t) };
                        u.service = r || u.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            async write(e) {
                                await this.helper({ method: "write", argument: e });
                            }
                            async read(t) {
                                return this.helper({ method: "read", argument: t, returnValidator: this.validateReturns ? e.ClipboardValidation.copyRead : void 0 });
                            }
                        }
                    })((ee = e.ClipboardHelper || (e.ClipboardHelper = {}))),
                    (function (t) {
                        const r = { id: "__ColorSampler__", fingerprint: "47e58950414de7a0679a8b7847789793", methods: { sampleColor: {} }, newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t) };
                        l.service = r || l.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            async sampleColor() {
                                return this.helper({ method: "sampleColor", argument: void 0, returnValidator: this.validateReturns ? e.Validation.copyColor : void 0 });
                            }
                        }
                    })((te = e.ColorSamplerHelper || (e.ColorSamplerHelper = {}))),
                    (function (t) {
                        const r = {
                            id: "__ControlsVisibility__",
                            fingerprint: "92a9d29762ae69d039edbadb8317074c",
                            methods: { requestHiddenStateForComponentControls: {}, requestHiddenStateForActionControls: {} },
                            newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t),
                        };
                        d.service = r || d.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            async requestHiddenStateForComponentControls(t) {
                                return this.helper({
                                    method: "requestHiddenStateForComponentControls",
                                    argument: t,
                                    returnValidator: this.validateReturns ? e.ControlsVisibilityValidation.copyHiddenStateForComponentControlsResponse : void 0,
                                });
                            }
                            async requestHiddenStateForActionControls(t) {
                                return this.helper({ method: "requestHiddenStateForActionControls", argument: t, returnValidator: this.validateReturns ? e.ControlsVisibilityValidation.copyHiddenStateForActionControlsResponse : void 0 });
                            }
                        }
                    })((re = e.ControlsVisibilityHelper || (e.ControlsVisibilityHelper = {}))),
                    (function (t) {
                        const r = {
                            id: "__Dependencies__",
                            fingerprint: "8de21065d1853df741467537cd2f68ac",
                            methods: { addDependency: {}, removeDependency: {}, getDependencies: {}, getTypings: {} },
                            newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t),
                        };
                        p.service = r || p.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            async addDependency(e) {
                                await this.helper({ method: "addDependency", argument: e });
                            }
                            async removeDependency(e) {
                                await this.helper({ method: "removeDependency", argument: e });
                            }
                            async getDependencies(t) {
                                return this.helper({ method: "getDependencies", argument: t, returnValidator: this.validateReturns ? e.DependenciesValidation.copyGetDependenciesResult : void 0 });
                            }
                            async getTypings() {
                                return this.helper({ method: "getTypings", argument: void 0, returnValidator: this.validateReturns ? e.DependenciesValidation.copyGetTypingsResult : void 0 });
                            }
                        }
                    })((ie = e.DependenciesHelper || (e.DependenciesHelper = {}))),
                    (function (e) {
                        const t = { id: "__EditorApp__", fingerprint: "18561d3b7c6e8fcc0d21adce7ba68f4d", methods: { waitUntilDocumentLoaded: {} }, newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t) };
                        f.service = t || f.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            async waitUntilDocumentLoaded() {
                                await this.helper({ method: "waitUntilDocumentLoaded", argument: void 0 });
                            }
                        }
                    })((ne = e.EditorAppHelper || (e.EditorAppHelper = {}))),
                    (function (t) {
                        const r = {
                            id: "__FeedbackService__",
                            fingerprint: "0428b42fde0fb28c600dea92a49a7162",
                            methods: { getThreads: {}, createThread: {}, updateThread: {}, createComment: {}, updateComment: {}, deleteComment: {}, markAsSeen: {} },
                            newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t),
                        };
                        v.service = r || v.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            async getThreads(t) {
                                return this.helper({ method: "getThreads", argument: t, returnValidator: this.validateReturns ? e.FeedbackServiceValidation.copyGetThreadsResponse : void 0 });
                            }
                            async createThread(t) {
                                return this.helper({ method: "createThread", argument: t, returnValidator: this.validateReturns ? e.FeedbackServiceValidation.copyCreateThreadResponse : void 0 });
                            }
                            async updateThread(t) {
                                return this.helper({ method: "updateThread", argument: t, returnValidator: this.validateReturns ? e.FeedbackServiceValidation.copyUpdateThreadResponse : void 0 });
                            }
                            async createComment(t) {
                                return this.helper({ method: "createComment", argument: t, returnValidator: this.validateReturns ? e.FeedbackServiceValidation.copyCreateCommentResponse : void 0 });
                            }
                            async updateComment(t) {
                                return this.helper({ method: "updateComment", argument: t, returnValidator: this.validateReturns ? e.FeedbackServiceValidation.copyUpdateCommentResponse : void 0 });
                            }
                            async deleteComment(t) {
                                return this.helper({ method: "deleteComment", argument: t, returnValidator: this.validateReturns ? e.FeedbackServiceValidation.copyDeleteCommentResponse : void 0 });
                            }
                            async markAsSeen(t) {
                                return this.helper({ method: "markAsSeen", argument: t, returnValidator: this.validateReturns ? e.FeedbackServiceValidation.copyMarkAsSeenResponse : void 0 });
                            }
                        }
                    })((oe = e.FeedbackServiceHelper || (e.FeedbackServiceHelper = {}))),
                    (function (e) {
                        const t = {
                            id: "__FeedbackDocument__",
                            fingerprint: "9f6d6540cc9f44ef7198090e055c7360",
                            methods: { toggleFeedback: {}, openThread: {}, feedbackStateStream: {} },
                            newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t),
                        };
                        h.service = t || h.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            async toggleFeedback(e) {
                                await this.helper({ method: "toggleFeedback", argument: e });
                            }
                            async openThread(e) {
                                await this.helper({ method: "openThread", argument: e });
                            }
                            feedbackStateStream(e) {
                                return new i.ServiceStreamsPrivate.StreamReader("feedbackStateStream", e, this.helper);
                            }
                        }
                    })((ae = e.FeedbackDocumentHelper || (e.FeedbackDocumentHelper = {}))),
                    (function (t) {
                        const r = {
                            id: "__FigmaImporter__",
                            fingerprint: "870127cdcbf995bac689c9ad5a9c5d4c",
                            methods: { importFigmaFile: {}, fetchFigmaFile: {}, isAuthenticatedWithFigma: {}, authenticateWithFigma: {} },
                            newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t),
                        };
                        g.service = r || g.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            async importFigmaFile(t) {
                                return this.helper({ method: "importFigmaFile", argument: t, returnValidator: this.validateReturns ? e.FigmaImporterValidation.copyImportFigmaFileResponse : void 0 });
                            }
                            async fetchFigmaFile(t) {
                                return this.helper({ method: "fetchFigmaFile", argument: t, returnValidator: this.validateReturns ? e.FigmaImporterValidation.copyFetchFigmaFileResponse : void 0 });
                            }
                            async isAuthenticatedWithFigma() {
                                return this.helper({ method: "isAuthenticatedWithFigma", argument: void 0, returnValidator: this.validateReturns ? e.FigmaImporterValidation.copyIsAuthenticatedWithFigmaResponse : void 0 });
                            }
                            async authenticateWithFigma() {
                                return this.helper({ method: "authenticateWithFigma", argument: void 0, returnValidator: this.validateReturns ? e.FigmaImporterValidation.copyIsAuthenticatedWithFigmaResponse : void 0 });
                            }
                        }
                    })((se = e.FigmaImporterHelper || (e.FigmaImporterHelper = {}))),
                    (function (t) {
                        const r = {
                            id: "__Files__",
                            fingerprint: "505df0989f45322dd0a0295e099a9498",
                            methods: { saveFile: {}, deleteFile: {}, getFile: {}, getFileList: {}, buildOutputStream: {}, getBuildOutput: {} },
                            newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t),
                        };
                        m.service = r || m.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            async saveFile(e) {
                                await this.helper({ method: "saveFile", argument: e });
                            }
                            async deleteFile(e) {
                                await this.helper({ method: "deleteFile", argument: e });
                            }
                            async getFile(t) {
                                return this.helper({ method: "getFile", argument: t, returnValidator: this.validateReturns ? e.FilesValidation.copyFileResult : void 0 });
                            }
                            async getFileList() {
                                return this.helper({ method: "getFileList", argument: void 0, returnValidator: this.validateReturns ? e.FilesValidation.copyFileListResult : void 0 });
                            }
                            buildOutputStream() {
                                return new i.ServiceStreamsPrivate.StreamReader("buildOutputStream", void 0, this.helper);
                            }
                            async getBuildOutput(t) {
                                return this.helper({ method: "getBuildOutput", argument: t, returnValidator: this.validateReturns ? e.FilesValidation.copyFileResult : void 0 });
                            }
                        }
                    })((ce = e.FilesHelper || (e.FilesHelper = {}))),
                    (function (e) {
                        const t = { id: "__FileUpdates__", fingerprint: "bf8799d0b289a18e9b9b6eccc76173fa", methods: { fileUpdatesStream: {}, notify: {} }, newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t) };
                        y.service = t || y.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            fileUpdatesStream() {
                                return new i.ServiceStreamsPrivate.StreamReader("fileUpdatesStream", void 0, this.helper);
                            }
                            async notify(e) {
                                await this.helper({ method: "notify", argument: e });
                            }
                        }
                    })((ue = e.FileUpdatesHelper || (e.FileUpdatesHelper = {}))),
                    (function (e) {
                        const t = { id: "__GestureEventTarget__", fingerprint: "eea70ddc08f14b4c6d18b1989490f536", methods: { dispatchMagnificationEvent: {} }, newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t) };
                        S.service = t || S.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            async dispatchMagnificationEvent(e) {
                                await this.helper({ method: "dispatchMagnificationEvent", argument: e });
                            }
                        }
                    })((le = e.GestureEventTargetHelper || (e.GestureEventTargetHelper = {}))),
                    (function (e) {
                        const t = { id: "__Layout__", fingerprint: "ad685185beafebdcfaf9362a5a3f4dd6", methods: { layoutChangesStream: {} }, newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t) };
                        b.service = t || b.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            layoutChangesStream(e) {
                                return new i.ServiceStreamsPrivate.StreamReader("layoutChangesStream", e, this.helper);
                            }
                        }
                    })((de = e.LayoutHelper || (e.LayoutHelper = {}))),
                    (function (t) {
                        const r = { id: "__MenuActionTarget__", fingerprint: "c4db8a6e44e670207d8e4fa156aa7438", methods: { validate: {}, dispatch: {} }, newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t) };
                        w.service = r || w.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            async validate(t) {
                                return this.helper({ method: "validate", argument: t, returnValidator: this.validateReturns ? e.Validation.copyMenuValidationResult : void 0 });
                            }
                            async dispatch(t) {
                                return this.helper({ method: "dispatch", argument: t, returnValidator: this.validateReturns ? e.Validation.copyMenuDispatchResult : void 0 });
                            }
                        }
                    })((pe = e.MenuActionTargetHelper || (e.MenuActionTargetHelper = {}))),
                    (function (t) {
                        const r = { id: "__ContextMenuPresenter__", fingerprint: "95c12f1fc20a2d69b9f66943bfacc42f", methods: { showContextMenu: {} }, newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t) };
                        P.service = r || P.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            async showContextMenu(t) {
                                return this.helper({ method: "showContextMenu", argument: t, returnValidator: this.validateReturns ? e.Validation.copyContextMenuResult : void 0 });
                            }
                        }
                    })((fe = e.ContextMenuPresenterHelper || (e.ContextMenuPresenterHelper = {}))),
                    (function (e) {
                        const t = {
                            id: "__PreviewSandbox__",
                            fingerprint: "92d31639b11d2af7d8454b4404fe3bd7",
                            methods: { pause: {}, resume: {}, reload: {}, previewKeyboardEventStream: {}, previewLogStream: {} },
                            newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t),
                        };
                        _.service = t || _.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            async pause() {
                                await this.helper({ method: "pause", argument: void 0 });
                            }
                            async resume() {
                                await this.helper({ method: "resume", argument: void 0 });
                            }
                            async reload() {
                                await this.helper({ method: "reload", argument: void 0 });
                            }
                            previewKeyboardEventStream() {
                                return new i.ServiceStreamsPrivate.StreamReader("previewKeyboardEventStream", void 0, this.helper);
                            }
                            previewLogStream() {
                                return new i.ServiceStreamsPrivate.StreamReader("previewLogStream", void 0, this.helper);
                            }
                        }
                    })((ve = e.PreviewSandboxHelper || (e.PreviewSandboxHelper = {}))),
                    (function (e) {
                        const t = { id: "__PreviewWrapper__", fingerprint: "e51f969e3540413cb7f3dc6e0aa715f3", methods: { toggleConsole: {}, stateStream: {} }, newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t) };
                        R.service = t || R.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            async toggleConsole(e) {
                                await this.helper({ method: "toggleConsole", argument: e });
                            }
                            stateStream() {
                                return new i.ServiceStreamsPrivate.StreamReader("stateStream", void 0, this.helper);
                            }
                        }
                    })((he = e.PreviewWrapperHelper || (e.PreviewWrapperHelper = {}))),
                    (function (e) {
                        const t = { id: "__SharedPreviewSandbox__", fingerprint: "76cdc838d79652b43c6f1506aa08527e", methods: { stateStream: {}, previewInteractionStream: {} }, newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t) };
                        E.service = t || E.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            stateStream() {
                                return new i.ServiceStreamsPrivate.StreamReader("stateStream", void 0, this.helper);
                            }
                            previewInteractionStream() {
                                return new i.ServiceStreamsPrivate.StreamReader("previewInteractionStream", void 0, this.helper);
                            }
                        }
                    })((ge = e.SharedPreviewSandboxHelper || (e.SharedPreviewSandboxHelper = {}))),
                    (function (t) {
                        const r = {
                            id: "__PreviewDataSource__",
                            fingerprint: "4440bed656d6c211f1df70e71d7e2110",
                            methods: { loadDocument: {}, scriptUpdateStream: {}, treeUpdateStream: {} },
                            newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t),
                        };
                        O.service = r || O.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            async loadDocument(t) {
                                return this.helper({ method: "loadDocument", argument: t, returnValidator: this.validateReturns ? e.PreviewDataSourceValidation.copyLoadDocumentResponse : void 0 });
                            }
                            scriptUpdateStream() {
                                return new i.ServiceStreamsPrivate.StreamReader("scriptUpdateStream", void 0, this.helper);
                            }
                            treeUpdateStream() {
                                return new i.ServiceStreamsPrivate.StreamReader("treeUpdateStream", void 0, this.helper);
                            }
                        }
                    })((me = e.PreviewDataSourceHelper || (e.PreviewDataSourceHelper = {}))),
                    (function (t) {
                        const r = {
                            id: "__LegacyPreviewDataSource__",
                            fingerprint: "ff207f8d3f4be4c7ae59446a4cb5fc08",
                            methods: { load: {}, scriptUpdateStream: {}, previewUpdateStream: {}, canvasUpdateStream: {} },
                            newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t),
                        };
                        x.service = r || x.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            async load(t) {
                                return this.helper({ method: "load", argument: t, returnValidator: this.validateReturns ? e.LegacyPreviewDataSourceValidation.copyLoadResponse : void 0 });
                            }
                            scriptUpdateStream() {
                                return new i.ServiceStreamsPrivate.StreamReader("scriptUpdateStream", void 0, this.helper);
                            }
                            previewUpdateStream() {
                                return new i.ServiceStreamsPrivate.StreamReader("previewUpdateStream", void 0, this.helper);
                            }
                            canvasUpdateStream() {
                                return new i.ServiceStreamsPrivate.StreamReader("canvasUpdateStream", void 0, this.helper);
                            }
                        }
                    })((ye = e.LegacyPreviewDataSourceHelper || (e.LegacyPreviewDataSourceHelper = {}))),
                    (function (e) {
                        const t = {
                            id: "__PreviewSettings__",
                            fingerprint: "82c76732fd70b46f778aae9f9d10e406",
                            methods: { toggleSelectionLock: {}, toggleResponsive: {}, toggleTouchCursor: {}, setProjectTitle: {}, openInExternalWindow: {}, openFullScreen: {}, addDevice: {}, previewMetadataUpdateStream: {} },
                            newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t),
                        };
                        j.service = t || j.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            async toggleSelectionLock(e) {
                                await this.helper({ method: "toggleSelectionLock", argument: e });
                            }
                            async toggleResponsive(e) {
                                await this.helper({ method: "toggleResponsive", argument: e });
                            }
                            async toggleTouchCursor(e) {
                                await this.helper({ method: "toggleTouchCursor", argument: e });
                            }
                            async setProjectTitle(e) {
                                await this.helper({ method: "setProjectTitle", argument: e });
                            }
                            async openInExternalWindow() {
                                await this.helper({ method: "openInExternalWindow", argument: void 0 });
                            }
                            async openFullScreen() {
                                await this.helper({ method: "openFullScreen", argument: void 0 });
                            }
                            async addDevice() {
                                await this.helper({ method: "addDevice", argument: void 0 });
                            }
                            previewMetadataUpdateStream(e) {
                                return new i.ServiceStreamsPrivate.StreamReader("previewMetadataUpdateStream", e, this.helper);
                            }
                        }
                    })((Se = e.PreviewSettingsHelper || (e.PreviewSettingsHelper = {}))),
                    (function (t) {
                        const r = {
                            id: "__PreviewStore__",
                            fingerprint: "aef8aaaa38e64a3ed46c3ca90f20bb2c",
                            methods: { toggleVisible: {}, updateStream: {}, getSharedPreviewMetadata: {} },
                            newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t),
                        };
                        V.service = r || V.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            async toggleVisible(e) {
                                await this.helper({ method: "toggleVisible", argument: e });
                            }
                            updateStream(e) {
                                return new i.ServiceStreamsPrivate.StreamReader("updateStream", e, this.helper);
                            }
                            async getSharedPreviewMetadata() {
                                return this.helper({ method: "getSharedPreviewMetadata", argument: void 0, returnValidator: this.validateReturns ? e.PreviewStoreValidation.copyGetSharedPreviewMetadataResponse : void 0 });
                            }
                        }
                    })((be = e.PreviewStoreHelper || (e.PreviewStoreHelper = {}))),
                    (function (e) {
                        const t = {
                            id: "__PreviewWindowShortcuts__",
                            fingerprint: "5e48c59580de9da6ec534c5ad9555c3f",
                            methods: { reload: {}, toggleConsole: {}, toggleSelectionLock: {}, openFullScreen: {}, openInExternalWindow: {} },
                            newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t),
                        };
                        I.service = t || I.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            async reload() {
                                await this.helper({ method: "reload", argument: void 0 });
                            }
                            async toggleConsole() {
                                await this.helper({ method: "toggleConsole", argument: void 0 });
                            }
                            async toggleSelectionLock() {
                                await this.helper({ method: "toggleSelectionLock", argument: void 0 });
                            }
                            async openFullScreen() {
                                await this.helper({ method: "openFullScreen", argument: void 0 });
                            }
                            async openInExternalWindow() {
                                await this.helper({ method: "openInExternalWindow", argument: void 0 });
                            }
                        }
                    })((we = e.PreviewWindowShortcutsHelper || (e.PreviewWindowShortcutsHelper = {}))),
                    (function (e) {
                        const t = {
                            id: "__PreviewDesktop__",
                            fingerprint: "40a6169dc2d5fa19212c53b8411a5166",
                            methods: { onPreviewMetadataUpdate: {}, onLogError: {}, onLogWarning: {}, onLogClear: {}, onScaleChange: {} },
                            newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t),
                        };
                        C.service = t || C.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            async onPreviewMetadataUpdate(e) {
                                await this.helper({ method: "onPreviewMetadataUpdate", argument: e });
                            }
                            async onLogError() {
                                await this.helper({ method: "onLogError", argument: void 0 });
                            }
                            async onLogWarning() {
                                await this.helper({ method: "onLogWarning", argument: void 0 });
                            }
                            async onLogClear() {
                                await this.helper({ method: "onLogClear", argument: void 0 });
                            }
                            async onScaleChange(e) {
                                await this.helper({ method: "onScaleChange", argument: e });
                            }
                        }
                    })((Pe = e.PreviewDesktopHelper || (e.PreviewDesktopHelper = {}))),
                    (function (t) {
                        const r = {
                            id: "__ProjectPackage__",
                            fingerprint: "aaddaff12be3185d4c3117740d28aef8",
                            methods: { uploadDesignAsset: {}, uploadReadme: {}, fetchReadme: {}, fetchPackageJson: {}, addPackageDependency: {}, publishPackage: {} },
                            newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t),
                        };
                        M.service = r || M.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            async uploadDesignAsset(e) {
                                await this.helper({ method: "uploadDesignAsset", argument: e });
                            }
                            async uploadReadme(e) {
                                await this.helper({ method: "uploadReadme", argument: e });
                            }
                            async fetchReadme() {
                                return this.helper({ method: "fetchReadme", argument: void 0, returnValidator: this.validateReturns ? e.ProjectPackageValidation.copyFetchReadmeResponse : void 0 });
                            }
                            async fetchPackageJson() {
                                return this.helper({ method: "fetchPackageJson", argument: void 0, returnValidator: this.validateReturns ? e.ProjectPackageValidation.copyFetchPackageJsonResponse : void 0 });
                            }
                            async addPackageDependency(e) {
                                await this.helper({ method: "addPackageDependency", argument: e });
                            }
                            async publishPackage(e) {
                                await this.helper({ method: "publishPackage", argument: e });
                            }
                        }
                    })((_e = e.ProjectPackageHelper || (e.ProjectPackageHelper = {}))),
                    (function (e) {
                        const t = { id: "__ProjectState__", fingerprint: "048e40fab7630eb58796ffaad82cf292", methods: { assetChangeStream: {}, stateStream: {} }, newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t) };
                        k.service = t || k.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            assetChangeStream() {
                                return new i.ServiceStreamsPrivate.StreamReader("assetChangeStream", void 0, this.helper);
                            }
                            stateStream() {
                                return new i.ServiceStreamsPrivate.StreamReader("stateStream", void 0, this.helper);
                            }
                        }
                    })((Re = e.ProjectStateHelper || (e.ProjectStateHelper = {}))),
                    (function (e) {
                        const t = { id: "__SandboxComponentLoader__", fingerprint: "fc8034f4e40676856c5282d5717cdac5", methods: { componentLoaderStateStream: {} }, newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t) };
                        D.service = t || D.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            componentLoaderStateStream(e) {
                                return new i.ServiceStreamsPrivate.StreamReader("componentLoaderStateStream", e, this.helper);
                            }
                        }
                    })((Ee = e.SandboxComponentLoaderHelper || (e.SandboxComponentLoaderHelper = {}))),
                    (function (t) {
                        const r = {
                            id: "__PublicStoreClient__",
                            fingerprint: "c6049dee3e3e9804a2c28aecfd53338f",
                            methods: {
                                findByName: {},
                                containsPackage: {},
                                toggleFavorite: {},
                                fetchRecents: {},
                                fetchPackagesBySection: {},
                                fetchPackagesByPublisher: {},
                                fetchPackagesByPopularity: {},
                                fetchFeaturedPackages: {},
                                search: {},
                                getPublishStatus: {},
                                fetchPreflight: {},
                                removePackage: {},
                                fetchMeta: {},
                            },
                            newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t),
                        };
                        F.service = r || F.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            async findByName(t) {
                                return this.helper({ method: "findByName", argument: t, returnValidator: this.validateReturns ? e.PublicStoreClientValidation.copyPackage : void 0 });
                            }
                            async containsPackage(t) {
                                return this.helper({ method: "containsPackage", argument: t, returnValidator: this.validateReturns ? e.PublicStoreClientValidation.copyContainsPackageResponse : void 0 });
                            }
                            async toggleFavorite(t) {
                                return this.helper({ method: "toggleFavorite", argument: t, returnValidator: this.validateReturns ? e.PublicStoreClientValidation.copyPackage : void 0 });
                            }
                            async fetchRecents(t) {
                                return this.helper({ method: "fetchRecents", argument: t, returnValidator: this.validateReturns ? e.PublicStoreClientValidation.copyPackageArray : void 0 });
                            }
                            async fetchPackagesBySection(t) {
                                return this.helper({ method: "fetchPackagesBySection", argument: t, returnValidator: this.validateReturns ? e.PublicStoreClientValidation.copyPackageArray : void 0 });
                            }
                            async fetchPackagesByPublisher(t) {
                                return this.helper({ method: "fetchPackagesByPublisher", argument: t, returnValidator: this.validateReturns ? e.PublicStoreClientValidation.copyPackageArray : void 0 });
                            }
                            async fetchPackagesByPopularity(t) {
                                return this.helper({ method: "fetchPackagesByPopularity", argument: t, returnValidator: this.validateReturns ? e.PublicStoreClientValidation.copyPackageArray : void 0 });
                            }
                            async fetchFeaturedPackages(t) {
                                return this.helper({ method: "fetchFeaturedPackages", argument: t, returnValidator: this.validateReturns ? e.PublicStoreClientValidation.copyPackageArray : void 0 });
                            }
                            async search(t) {
                                return this.helper({ method: "search", argument: t, returnValidator: this.validateReturns ? e.PublicStoreClientValidation.copyPackageArray : void 0 });
                            }
                            async getPublishStatus(t) {
                                return this.helper({ method: "getPublishStatus", argument: t, returnValidator: this.validateReturns ? e.PublicStoreClientValidation.copyPublishStatus : void 0 });
                            }
                            async fetchPreflight(t) {
                                return this.helper({ method: "fetchPreflight", argument: t, returnValidator: this.validateReturns ? e.PublicStoreClientValidation.copyPreflightResponse : void 0 });
                            }
                            async removePackage(e) {
                                await this.helper({ method: "removePackage", argument: e });
                            }
                            async fetchMeta(t) {
                                return this.helper({ method: "fetchMeta", argument: t, returnValidator: this.validateReturns ? e.PublicStoreClientValidation.copyFetchMetaResponse : void 0 });
                            }
                        }
                    })((Oe = e.PublicStoreClientHelper || (e.PublicStoreClientHelper = {}))),
                    (function (t) {
                        const r = {
                            id: "__PrivateStoreClient__",
                            fingerprint: "a762c30223d99fe2062dceb634663456",
                            methods: {
                                findByName: {},
                                containsPackage: {},
                                toggleFavorite: {},
                                fetchRecents: {},
                                fetchPackagesBySection: {},
                                fetchPackagesByPublisher: {},
                                fetchPackagesByPopularity: {},
                                fetchFeaturedPackages: {},
                                search: {},
                                getPublishStatus: {},
                                fetchPreflight: {},
                                removePackage: {},
                                fetchMeta: {},
                            },
                            newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t),
                        };
                        T.service = r || T.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            async findByName(t) {
                                return this.helper({ method: "findByName", argument: t, returnValidator: this.validateReturns ? e.PublicStoreClientValidation.copyPackage : void 0 });
                            }
                            async containsPackage(t) {
                                return this.helper({ method: "containsPackage", argument: t, returnValidator: this.validateReturns ? e.PublicStoreClientValidation.copyContainsPackageResponse : void 0 });
                            }
                            async toggleFavorite(t) {
                                return this.helper({ method: "toggleFavorite", argument: t, returnValidator: this.validateReturns ? e.PublicStoreClientValidation.copyPackage : void 0 });
                            }
                            async fetchRecents(t) {
                                return this.helper({ method: "fetchRecents", argument: t, returnValidator: this.validateReturns ? e.PublicStoreClientValidation.copyPackageArray : void 0 });
                            }
                            async fetchPackagesBySection(t) {
                                return this.helper({ method: "fetchPackagesBySection", argument: t, returnValidator: this.validateReturns ? e.PublicStoreClientValidation.copyPackageArray : void 0 });
                            }
                            async fetchPackagesByPublisher(t) {
                                return this.helper({ method: "fetchPackagesByPublisher", argument: t, returnValidator: this.validateReturns ? e.PublicStoreClientValidation.copyPackageArray : void 0 });
                            }
                            async fetchPackagesByPopularity(t) {
                                return this.helper({ method: "fetchPackagesByPopularity", argument: t, returnValidator: this.validateReturns ? e.PublicStoreClientValidation.copyPackageArray : void 0 });
                            }
                            async fetchFeaturedPackages(t) {
                                return this.helper({ method: "fetchFeaturedPackages", argument: t, returnValidator: this.validateReturns ? e.PublicStoreClientValidation.copyPackageArray : void 0 });
                            }
                            async search(t) {
                                return this.helper({ method: "search", argument: t, returnValidator: this.validateReturns ? e.PublicStoreClientValidation.copyPackageArray : void 0 });
                            }
                            async getPublishStatus(t) {
                                return this.helper({ method: "getPublishStatus", argument: t, returnValidator: this.validateReturns ? e.PublicStoreClientValidation.copyPublishStatus : void 0 });
                            }
                            async fetchPreflight(t) {
                                return this.helper({ method: "fetchPreflight", argument: t, returnValidator: this.validateReturns ? e.PublicStoreClientValidation.copyPreflightResponse : void 0 });
                            }
                            async removePackage(e) {
                                await this.helper({ method: "removePackage", argument: e });
                            }
                            async fetchMeta(t) {
                                return this.helper({ method: "fetchMeta", argument: t, returnValidator: this.validateReturns ? e.PublicStoreClientValidation.copyFetchMetaResponse : void 0 });
                            }
                        }
                    })((xe = e.PrivateStoreClientHelper || (e.PrivateStoreClientHelper = {}))),
                    (function (e) {
                        const t = { id: "__Toast__", fingerprint: "76ad29c1f2bbf68f92ba5794d7ecf68e", methods: { toast: {} }, newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t) };
                        q.service = t || q.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            async toast(e) {
                                await this.helper({ method: "toast", argument: e });
                            }
                        }
                    })((je = e.ToastHelper || (e.ToastHelper = {}))),
                    (function (e) {
                        const t = { id: "__ToolOwner__", fingerprint: "d90062b7fd3ffe941e41b05511e72fcd", methods: { toolsStateStream: {} }, newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t) };
                        N.service = t || N.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            toolsStateStream() {
                                return new i.ServiceStreamsPrivate.StreamReader("toolsStateStream", void 0, this.helper);
                            }
                        }
                    })((Ve = e.ToolOwnerHelper || (e.ToolOwnerHelper = {}))),
                    (function (e) {
                        const t = { id: "__ToolWrapper__", fingerprint: "6b77449c1a5a682d50c56636da5097ca", methods: { activeToolStream: {} }, newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t) };
                        L.service = t || L.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            activeToolStream() {
                                return new i.ServiceStreamsPrivate.StreamReader("activeToolStream", void 0, this.helper);
                            }
                        }
                    })((Ie = e.ToolWrapperHelper || (e.ToolWrapperHelper = {}))),
                    (function (e) {
                        const t = { id: "__TutorialDocument__", fingerprint: "35e1fd18f1a36a4a8ca53ab493af5cee", methods: { requestTutorialContent: {}, doTutorialStep: {} }, newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t) };
                        W.service = t || W.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            async requestTutorialContent() {
                                await this.helper({ method: "requestTutorialContent", argument: void 0 });
                            }
                            async doTutorialStep(e) {
                                await this.helper({ method: "doTutorialStep", argument: e });
                            }
                        }
                    })((Ce = e.TutorialDocumentHelper || (e.TutorialDocumentHelper = {}))),
                    (function (e) {
                        const t = { id: "__TutorialFrame__", fingerprint: "03110c1e38622c13e0c14d82fbe18ee2", methods: { presentTutorialContent: {} }, newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t) };
                        $.service = t || $.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            async presentTutorialContent(e) {
                                await this.helper({ method: "presentTutorialContent", argument: e });
                            }
                        }
                    })((Me = e.TutorialFrameHelper || (e.TutorialFrameHelper = {}))),
                    (function (t) {
                        const r = {
                            id: "__UserNotifications__",
                            fingerprint: "8912f426584101b1f766f9981093a042",
                            methods: { requestPermission: {}, getPermissionStatus: {}, post: {}, cancel: {} },
                            newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t),
                        };
                        B.service = r || B.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            async requestPermission() {
                                return this.helper({ method: "requestPermission", argument: void 0, returnValidator: this.validateReturns ? e.UserNotificationsValidation.copyRequestPermissionResponse : void 0 });
                            }
                            async getPermissionStatus() {
                                return this.helper({ method: "getPermissionStatus", argument: void 0, returnValidator: this.validateReturns ? e.UserNotificationsValidation.copyGetPermissionStatusResponse : void 0 });
                            }
                            async post(t) {
                                return this.helper({ method: "post", argument: t, returnValidator: this.validateReturns ? e.UserNotificationsValidation.copyPostResponse : void 0 });
                            }
                            async cancel(e) {
                                await this.helper({ method: "cancel", argument: e });
                            }
                        }
                    })((ke = e.UserNotificationsHelper || (e.UserNotificationsHelper = {}))),
                    (function (t) {
                        const r = { id: "__UserSessionService__", fingerprint: "7fa96ecf41fdcdf73b2df27a1a13692a", methods: { getSessionIdentity: {}, permissionsStream: {} }, newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t) };
                        U.service = r || U.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            async getSessionIdentity() {
                                return this.helper({ method: "getSessionIdentity", argument: void 0, returnValidator: this.validateReturns ? e.UserSessionServiceValidation.copySessionIdentityResponse : void 0 });
                            }
                            permissionsStream(e) {
                                return new i.ServiceStreamsPrivate.StreamReader("permissionsStream", e, this.helper);
                            }
                        }
                    })((De = e.UserSessionServiceHelper || (e.UserSessionServiceHelper = {}))),
                    (function (t) {
                        const r = {
                            id: "__WebProject__",
                            fingerprint: "a5a8f8098e68323ca0343b65ffe16493",
                            methods: { currentProjectStream: {}, getMoveProjectPermission: {}, showMoveProjectMenu: {} },
                            newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t),
                        };
                        H.service = r || H.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            currentProjectStream(e) {
                                return new i.ServiceStreamsPrivate.StreamReader("currentProjectStream", e, this.helper);
                            }
                            async getMoveProjectPermission() {
                                return this.helper({ method: "getMoveProjectPermission", argument: void 0, returnValidator: this.validateReturns ? e.WebProjectValidation.copyGetMoveProjectPermissionResult : void 0 });
                            }
                            async showMoveProjectMenu(e) {
                                await this.helper({ method: "showMoveProjectMenu", argument: e });
                            }
                        }
                    })((ze = e.WebProjectHelper || (e.WebProjectHelper = {}))),
                    (function (e) {
                        const t = { id: "__ZzzTestingBeep__", fingerprint: "61a1004615dc1e33269b7165105b3499", methods: { beep: {} }, newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t) };
                        K.service = t || K.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            async beep() {
                                await this.helper({ method: "beep", argument: void 0 });
                            }
                        }
                    })((Fe = e.ZzzTestingBeepHelper || (e.ZzzTestingBeepHelper = {}))),
                    (function (e) {
                        const t = { id: "__ZzzTestingStreams__", fingerprint: "8aa511729b2d2ff67bc380b7d33e3a8f", methods: { beepStream: {} }, newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t) };
                        J.service = t || J.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            beepStream(e) {
                                return new i.ServiceStreamsPrivate.StreamReader("beepStream", e, this.helper);
                            }
                        }
                    })((Ae = e.ZzzTestingStreamsHelper || (e.ZzzTestingStreamsHelper = {}))),
                    (function (t) {
                        const r = { id: "__ZzzTestingTypes__", fingerprint: "e98d2309bfd83c218b8ea360ff5ef88e", methods: { test: {} }, newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t) };
                        G.service = r || G.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                (this.helper = t), (this.validateReturns = !0 === e.validateValues);
                            }
                            async test() {
                                return this.helper({ method: "test", argument: void 0, returnValidator: this.validateReturns ? e.ZzzTestingTypesValidation.copyObject : void 0 });
                            }
                        }
                    })((Te = e.ZzzTestingTypesHelper || (e.ZzzTestingTypesHelper = {}))),
                    (function (e) {
                        const t = { id: "__ZzzTestingOneway__", fingerprint: "a3733c6a1490e6898479f476498e80b3", methods: { beep: {} }, newOutgoingWrapper: (e, t) => new OutgoingWrapper(e, t) };
                        Z.service = t || Z.service;
                        class OutgoingWrapper {
                            constructor(e, t) {
                                this.helper = t;
                            }
                            beep(e) {
                                this.helper({ method: "beep", argument: e, oneway: !0 });
                            }
                        }
                    })((qe = e.ZzzTestingOnewayHelper || (e.ZzzTestingOnewayHelper = {}))),
                    (function (t) {
                        (t.copyPoint = (e) => {
                            if ("object" != typeof e || null === e) throw new Error(`Expected Point object but received: ${e}`);
                            return Object.freeze({ x: i.ServiceRuntimePrivate.Validation.copyFloat(e.x), y: i.ServiceRuntimePrivate.Validation.copyFloat(e.y) });
                        }),
                            (t.copySize = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected Size object but received: ${e}`);
                                return Object.freeze({ width: i.ServiceRuntimePrivate.Validation.copyFloat(e.width), height: i.ServiceRuntimePrivate.Validation.copyFloat(e.height) });
                            }),
                            (t.copyUser = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected User object but received: ${e}`);
                                return Object.freeze({
                                    id: i.ServiceRuntimePrivate.Validation.copyString(e.id),
                                    name: i.ServiceRuntimePrivate.Validation.copyString(e.name),
                                    initials: i.ServiceRuntimePrivate.Validation.copyString(e.initials),
                                    avatar: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(e.avatar),
                                });
                            }),
                            (t.copyColor = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected Color object but received: ${e}`);
                                return Object.freeze({ color: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(e.color) });
                            });
                        const r = new Set(["magnificationBegan", "magnificationChanged", "magnificationEnded"]);
                        (t.copyMagnificationEventType = (e) => {
                            if (!r.has(e)) throw new Error(`Expected valid value for enum but received: ${e}`);
                            return e;
                        }),
                            (t.copyMagnificationEvent = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected MagnificationEvent object but received: ${t}`);
                                return Object.freeze({
                                    type: e.Validation.copyMagnificationEventType(t.type),
                                    magnification: i.ServiceRuntimePrivate.Validation.copyFloat(t.magnification),
                                    normalizedTouchOffset: e.Validation.copyPoint(t.normalizedTouchOffset),
                                });
                            }),
                            (t.copyMenuAction = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected MenuAction object but received: ${e}`);
                                return Object.freeze({ action: i.ServiceRuntimePrivate.Validation.copyString(e.action) });
                            }),
                            (t.copyMenuValidationResult = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected MenuValidationResult object but received: ${t}`);
                                return Object.freeze({ states: i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, e.Validation.copyMenuActionState)(t.states) });
                            }),
                            (t.copyMenuDispatchResult = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected MenuDispatchResult object but received: ${e}`);
                                return Object.freeze({ success: i.ServiceRuntimePrivate.Validation.copyBoolean(e.success) });
                            }),
                            (t.copyMenuActionState = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected MenuActionState object but received: ${e}`);
                                return Object.freeze({
                                    action: i.ServiceRuntimePrivate.Validation.copyString(e.action),
                                    enabled: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyBoolean)(e.enabled),
                                    deferToNative: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyBoolean)(e.deferToNative),
                                    label: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(e.label),
                                    checked: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyBoolean)(e.checked),
                                    visible: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyBoolean)(e.visible),
                                });
                            }),
                            (t.copyContextMenu = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected ContextMenu object but received: ${t}`);
                                return Object.freeze({
                                    items: i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, e.Validation.copyMenuItemOptions)(t.items),
                                    location: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, e.Validation.copyPoint)(t.location),
                                });
                            }),
                            (t.copyMenuItemOptions = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected MenuItemOptions object but received: ${t}`);
                                return Object.freeze({
                                    label: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(t.label),
                                    role: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(t.role),
                                    type: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(t.type),
                                    enabled: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyBoolean)(t.enabled),
                                    checked: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyBoolean)(t.checked),
                                    mixed: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyBoolean)(t.mixed),
                                    visible: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyBoolean)(t.visible),
                                    accelerator: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(t.accelerator),
                                    submenu: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, e.Validation.copyMenuItemOptions))(t.submenu),
                                    index: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyInteger)(t.index),
                                    requiresUserInteraction: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyBoolean)(t.requiresUserInteraction),
                                });
                            }),
                            (t.copyContextMenuResult = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected ContextMenuResult object but received: ${e}`);
                                return Object.freeze({ indexPath: i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, i.ServiceRuntimePrivate.Validation.copyInteger)(e.indexPath) });
                            });
                    })((Ne = e.Validation || (e.Validation = {}))),
                    (function (t) {
                        (t.copyVariant = (e) => {
                            if ("object" != typeof e || null === e) throw new Error(`Expected Variant object but received: ${e}`);
                            return Object.freeze({ url: i.ServiceRuntimePrivate.Validation.copyString(e.url), maxSideSize: i.ServiceRuntimePrivate.Validation.copyInteger(e.maxSideSize) });
                        }),
                            (t.copyAsset = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected Asset object but received: ${t}`);
                                return Object.freeze({
                                    key: i.ServiceRuntimePrivate.Validation.copyString(t.key),
                                    name: i.ServiceRuntimePrivate.Validation.copyString(t.name),
                                    filename: i.ServiceRuntimePrivate.Validation.copyString(t.filename),
                                    fileSize: i.ServiceRuntimePrivate.Validation.copyInteger(t.fileSize),
                                    ownerId: i.ServiceRuntimePrivate.Validation.copyString(t.ownerId),
                                    ownerType: i.ServiceRuntimePrivate.Validation.copyString(t.ownerType),
                                    mimeType: i.ServiceRuntimePrivate.Validation.copyString(t.mimeType),
                                    uploadedBy: i.ServiceRuntimePrivate.Validation.copyString(t.uploadedBy),
                                    createdAt: i.ServiceRuntimePrivate.Validation.copyString(t.createdAt),
                                    updatedAt: i.ServiceRuntimePrivate.Validation.copyString(t.updatedAt),
                                    refreshTimeout: i.ServiceRuntimePrivate.Validation.copyInteger(t.refreshTimeout),
                                    url: i.ServiceRuntimePrivate.Validation.copyString(t.url),
                                    variants: i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, e.AssetsValidation.copyVariant)(t.variants),
                                });
                            }),
                            (t.copyAssetUpdateEvent = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected AssetUpdateEvent object but received: ${t}`);
                                return Object.freeze({ assets: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, e.AssetsValidation.copyAsset))(t.assets) });
                            });
                    })((Le = e.AssetsValidation || (e.AssetsValidation = {}))),
                    (function (e) {
                        e.copyTemporaryUpdate = (e) => {
                            if ("object" != typeof e || null === e) throw new Error(`Expected TemporaryUpdate object but received: ${e}`);
                            return Object.freeze({ json: i.ServiceRuntimePrivate.Validation.copyUnsafeJSON(e.json) });
                        };
                    })((We = e.CanvasSandboxServiceValidation || (e.CanvasSandboxServiceValidation = {}))),
                    (function (t) {
                        (t.copyOptions = (e) => {
                            if ("object" != typeof e || null === e) throw new Error(`Expected Options object but received: ${e}`);
                            return Object.freeze({ allowedFileTypes: i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(e.allowedFileTypes) });
                        }),
                            (t.copyImageSize = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected ImageSize object but received: ${e}`);
                                return Object.freeze({
                                    width: i.ServiceRuntimePrivate.Validation.copyFloat(e.width),
                                    height: i.ServiceRuntimePrivate.Validation.copyFloat(e.height),
                                    pixelWidth: i.ServiceRuntimePrivate.Validation.copyFloat(e.pixelWidth),
                                    pixelHeight: i.ServiceRuntimePrivate.Validation.copyFloat(e.pixelHeight),
                                });
                            }),
                            (t.copyFileInfo = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected FileInfo object but received: ${e}`);
                                return Object.freeze({ filename: i.ServiceRuntimePrivate.Validation.copyString(e.filename), originalFileName: i.ServiceRuntimePrivate.Validation.copyString(e.originalFileName) });
                            }),
                            (t.copyImageInfo = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected ImageInfo object but received: ${t}`);
                                return Object.freeze({
                                    filename: i.ServiceRuntimePrivate.Validation.copyString(t.filename),
                                    originalImageName: i.ServiceRuntimePrivate.Validation.copyString(t.originalImageName),
                                    imageSize: e.ChooseFileValidation.copyImageSize(t.imageSize),
                                });
                            }),
                            (t.copyImageInfos = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected ImageInfos object but received: ${t}`);
                                return Object.freeze({ images: i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, e.ChooseFileValidation.copyImageInfo)(t.images) });
                            }),
                            (t.copyImages = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected Images object but received: ${t}`);
                                return Object.freeze({ images: i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, e.ChooseFileValidation.copyImageData)(t.images) });
                            }),
                            (t.copyImageData = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected ImageData object but received: ${e}`);
                                return Object.freeze({ content: i.ServiceRuntimePrivate.Validation.copyString(e.content), originalFilename: i.ServiceRuntimePrivate.Validation.copyString(e.originalFilename) });
                            }),
                            (t.copyMetadataOptions = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected MetadataOptions object but received: ${e}`);
                                return Object.freeze({ filename: i.ServiceRuntimePrivate.Validation.copyString(e.filename) });
                            });
                    })(($e = e.ChooseFileValidation || (e.ChooseFileValidation = {}))),
                    (function (t) {
                        (t.copyWrite = (t) => {
                            if ("object" != typeof t || null === t) throw new Error(`Expected Write object but received: ${t}`);
                            return Object.freeze({ items: i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, e.ClipboardValidation.copyDataItem)(t.items) });
                        }),
                            (t.copyReadOptions = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected ReadOptions object but received: ${t}`);
                                return Object.freeze({ types: i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, e.ClipboardValidation.copyDataItemType)(t.types) });
                            }),
                            (t.copyRead = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected Read object but received: ${t}`);
                                return Object.freeze({ items: i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, e.ClipboardValidation.copyDataItem)(t.items) });
                            });
                        const r = {
                            "text/plain": (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected non-null object but received: ${e}`);
                                return Object.freeze({ type: "text/plain", string: i.ServiceRuntimePrivate.Validation.copyString(e.string) });
                            },
                            "text/css": (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected non-null object but received: ${e}`);
                                return Object.freeze({ type: "text/css", string: i.ServiceRuntimePrivate.Validation.copyString(e.string) });
                            },
                            "image/svg+xml": (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected non-null object but received: ${e}`);
                                return Object.freeze({ type: "image/svg+xml", string: i.ServiceRuntimePrivate.Validation.copyString(e.string) });
                            },
                            "application/x-framer-style": (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected non-null object but received: ${e}`);
                                return Object.freeze({ type: "application/x-framer-style", data: i.ServiceRuntimePrivate.Validation.copyUnsafeJSON(e.data) });
                            },
                            "application/x-framer-layers": (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected non-null object but received: ${e}`);
                                return Object.freeze({ type: "application/x-framer-layers", data: i.ServiceRuntimePrivate.Validation.copyUnsafeJSON(e.data) });
                            },
                            "application/x-framer-sketch": (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected non-null object but received: ${e}`);
                                return Object.freeze({ type: "application/x-framer-sketch", data: i.ServiceRuntimePrivate.Validation.copyUnsafeJSON(e.data) });
                            },
                            "application/x-framer-animation-transition": (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected non-null object but received: ${e}`);
                                return Object.freeze({ type: "application/x-framer-animation-transition", data: i.ServiceRuntimePrivate.Validation.copyUnsafeJSON(e.data) });
                            },
                        };
                        (t.copyDataItemType = (e) => {
                            if ("string" != typeof e) throw new Error(`Expected string for type but received: ${e}`);
                            if (!r[e]) throw new Error(`Expected valid value for type but received: ${e}`);
                            return e;
                        }),
                            (t.copyDataItem = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected DataItem object but received: ${e}`);
                                const t = e.type;
                                if ("string" != typeof t) throw new Error(`Expected string for type but received: ${e}`);
                                const i = r[t];
                                if (!i) throw new Error(`Expected valid value for type but received: ${e}`);
                                return i(e);
                            });
                    })((Be = e.ClipboardValidation || (e.ClipboardValidation = {}))),
                    (function (e) {
                        (e.copyHiddenStateForComponentControlsRequest = (e) => {
                            if ("object" != typeof e || null === e) throw new Error(`Expected HiddenStateForComponentControlsRequest object but received: ${e}`);
                            return Object.freeze({ args: i.ServiceRuntimePrivate.Validation.copyUnsafeJSON(e.args) });
                        }),
                            (e.copyHiddenStateForComponentControlsResponse = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected HiddenStateForComponentControlsResponse object but received: ${e}`);
                                return Object.freeze({ hiddenControlsByNodeId: i.ServiceRuntimePrivate.Validation.copyUnsafeJSON(e.hiddenControlsByNodeId) });
                            }),
                            (e.copyHiddenStateForActionControlsRequest = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected HiddenStateForActionControlsRequest object but received: ${e}`);
                                return Object.freeze({
                                    nodeId: i.ServiceRuntimePrivate.Validation.copyString(e.nodeId),
                                    actionPath: i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(e.actionPath),
                                    controlNames: i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(e.controlNames),
                                    actionProps: i.ServiceRuntimePrivate.Validation.copyUnsafeJSON(e.actionProps),
                                });
                            }),
                            (e.copyHiddenStateForActionControlsResponse = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected HiddenStateForActionControlsResponse object but received: ${e}`);
                                return Object.freeze({ hiddenState: i.ServiceRuntimePrivate.Validation.copyUnsafeJSON(e.hiddenState) });
                            });
                    })((Ue = e.ControlsVisibilityValidation || (e.ControlsVisibilityValidation = {}))),
                    (function (t) {
                        (t.copyAddDependencyArguments = (e) => {
                            if ("object" != typeof e || null === e) throw new Error(`Expected AddDependencyArguments object but received: ${e}`);
                            return Object.freeze({
                                name: i.ServiceRuntimePrivate.Validation.copyString(e.name),
                                version: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(e.version),
                            });
                        }),
                            (t.copyRemoveDependencyArguments = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected RemoveDependencyArguments object but received: ${e}`);
                                return Object.freeze({ name: i.ServiceRuntimePrivate.Validation.copyString(e.name) });
                            }),
                            (t.copyGetDependenciesArguments = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected GetDependenciesArguments object but received: ${e}`);
                                return Object.freeze({ refreshLatestInfo: i.ServiceRuntimePrivate.Validation.copyBoolean(e.refreshLatestInfo) });
                            }),
                            (t.copyTypings = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected Typings object but received: ${e}`);
                                return Object.freeze({
                                    module: i.ServiceRuntimePrivate.Validation.copyString(e.module),
                                    content: i.ServiceRuntimePrivate.Validation.copyString(e.content),
                                    typesPackage: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyBoolean)(e.typesPackage),
                                });
                            }),
                            (t.copyDependency = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected Dependency object but received: ${e}`);
                                return Object.freeze({
                                    name: i.ServiceRuntimePrivate.Validation.copyString(e.name),
                                    current: i.ServiceRuntimePrivate.Validation.copyString(e.current),
                                    wanted: i.ServiceRuntimePrivate.Validation.copyString(e.wanted),
                                    latest: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(e.latest),
                                });
                            }),
                            (t.copyGetDependenciesResult = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected GetDependenciesResult object but received: ${t}`);
                                return Object.freeze({ dependencies: i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, e.DependenciesValidation.copyDependency)(t.dependencies) });
                            }),
                            (t.copyGetTypingsResult = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected GetTypingsResult object but received: ${t}`);
                                return Object.freeze({ typings: i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, e.DependenciesValidation.copyTypings)(t.typings) });
                            });
                    })((He = e.DependenciesValidation || (e.DependenciesValidation = {}))),
                    (function (t) {
                        (t.copyGetThreadsRequest = (e) => {
                            if ("object" != typeof e || null === e) throw new Error(`Expected GetThreadsRequest object but received: ${e}`);
                            return Object.freeze({ archived: i.ServiceRuntimePrivate.Validation.copyBoolean(e.archived) });
                        }),
                            (t.copyGetThreadsResponse = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected GetThreadsResponse object but received: ${t}`);
                                return Object.freeze({ threads: i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, e.FeedbackServiceValidation.copyThread)(t.threads) });
                            }),
                            (t.copyCreateThreadResponse = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected CreateThreadResponse object but received: ${t}`);
                                return Object.freeze({ thread: e.FeedbackServiceValidation.copyThread(t.thread) });
                            }),
                            (t.copyCreateThreadRequest = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected CreateThreadRequest object but received: ${t}`);
                                return Object.freeze({ anchor: e.FeedbackServiceValidation.copyAnchor(t.anchor), text: i.ServiceRuntimePrivate.Validation.copyString(t.text) });
                            }),
                            (t.copyUpdateThreadRequest = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected UpdateThreadRequest object but received: ${t}`);
                                return Object.freeze({
                                    id: i.ServiceRuntimePrivate.Validation.copyString(t.id),
                                    archived: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyBoolean)(t.archived),
                                    anchor: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, e.FeedbackServiceValidation.copyAnchor)(t.anchor),
                                });
                            }),
                            (t.copyUpdateThreadResponse = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected UpdateThreadResponse object but received: ${t}`);
                                return Object.freeze({ thread: e.FeedbackServiceValidation.copyThread(t.thread) });
                            }),
                            (t.copyCreateCommentRequest = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected CreateCommentRequest object but received: ${e}`);
                                return Object.freeze({ threadId: i.ServiceRuntimePrivate.Validation.copyString(e.threadId), text: i.ServiceRuntimePrivate.Validation.copyString(e.text) });
                            }),
                            (t.copyCreateCommentResponse = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected CreateCommentResponse object but received: ${t}`);
                                return Object.freeze({ comment: e.FeedbackServiceValidation.copyComment(t.comment) });
                            }),
                            (t.copyUpdateCommentRequest = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected UpdateCommentRequest object but received: ${e}`);
                                return Object.freeze({
                                    id: i.ServiceRuntimePrivate.Validation.copyString(e.id),
                                    threadId: i.ServiceRuntimePrivate.Validation.copyString(e.threadId),
                                    text: i.ServiceRuntimePrivate.Validation.copyString(e.text),
                                });
                            }),
                            (t.copyUpdateCommentResponse = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected UpdateCommentResponse object but received: ${t}`);
                                return Object.freeze({ comment: e.FeedbackServiceValidation.copyComment(t.comment) });
                            }),
                            (t.copyDeleteCommentRequest = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected DeleteCommentRequest object but received: ${e}`);
                                return Object.freeze({ id: i.ServiceRuntimePrivate.Validation.copyString(e.id), threadId: i.ServiceRuntimePrivate.Validation.copyString(e.threadId) });
                            }),
                            (t.copyDeleteCommentResponse = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected DeleteCommentResponse object but received: ${t}`);
                                return Object.freeze({ comment: e.FeedbackServiceValidation.copyComment(t.comment) });
                            }),
                            (t.copyMarkAsSeenRequest = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected MarkAsSeenRequest object but received: ${e}`);
                                return Object.freeze({ threadId: i.ServiceRuntimePrivate.Validation.copyString(e.threadId), lastSeenCommentId: i.ServiceRuntimePrivate.Validation.copyString(e.lastSeenCommentId) });
                            }),
                            (t.copyMarkAsSeenResponse = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected MarkAsSeenResponse object but received: ${t}`);
                                return Object.freeze({ thread: e.FeedbackServiceValidation.copyThread(t.thread) });
                            }),
                            (t.copyThread = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected Thread object but received: ${t}`);
                                return Object.freeze({
                                    archived: i.ServiceRuntimePrivate.Validation.copyBoolean(t.archived),
                                    comments: i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, e.FeedbackServiceValidation.copyComment)(t.comments),
                                    id: i.ServiceRuntimePrivate.Validation.copyString(t.id),
                                    anchor: e.FeedbackServiceValidation.copyAnchor(t.anchor),
                                    seenUntil: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(t.seenUntil),
                                    updatedAt: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(t.updatedAt),
                                });
                            }),
                            (t.copyComment = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected Comment object but received: ${t}`);
                                return Object.freeze({
                                    author: e.Validation.copyUser(t.author),
                                    createdAt: i.ServiceRuntimePrivate.Validation.copyString(t.createdAt),
                                    deletedBy: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, e.Validation.copyUser)(t.deletedBy),
                                    id: i.ServiceRuntimePrivate.Validation.copyString(t.id),
                                    text: i.ServiceRuntimePrivate.Validation.copyString(t.text),
                                    updatedAt: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(t.updatedAt),
                                });
                            });
                        const r = {
                            canvas: (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected non-null object but received: ${e}`);
                                return Object.freeze({ type: "canvas", x: i.ServiceRuntimePrivate.Validation.copyInteger(e.x), y: i.ServiceRuntimePrivate.Validation.copyInteger(e.y) });
                            },
                            node: (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected non-null object but received: ${e}`);
                                return Object.freeze({
                                    type: "node",
                                    x: i.ServiceRuntimePrivate.Validation.copyInteger(e.x),
                                    y: i.ServiceRuntimePrivate.Validation.copyInteger(e.y),
                                    nodeId: i.ServiceRuntimePrivate.Validation.copyString(e.nodeId),
                                    insetX: i.ServiceRuntimePrivate.Validation.copyInteger(e.insetX),
                                    insetY: i.ServiceRuntimePrivate.Validation.copyInteger(e.insetY),
                                    insetCorner: i.ServiceRuntimePrivate.Validation.copyString(e.insetCorner),
                                });
                            },
                        };
                        (t.copyAnchorType = (e) => {
                            if ("string" != typeof e) throw new Error(`Expected string for type but received: ${e}`);
                            if (!r[e]) throw new Error(`Expected valid value for type but received: ${e}`);
                            return e;
                        }),
                            (t.copyAnchor = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected Anchor object but received: ${e}`);
                                const t = e.type;
                                if ("string" != typeof t) throw new Error(`Expected string for type but received: ${e}`);
                                const i = r[t];
                                if (!i) throw new Error(`Expected valid value for type but received: ${e}`);
                                return i(e);
                            });
                    })((Ke = e.FeedbackServiceValidation || (e.FeedbackServiceValidation = {}))),
                    (function (e) {
                        (e.copyToggleFeedbackRequest = (e) => {
                            if ("object" != typeof e || null === e) throw new Error(`Expected ToggleFeedbackRequest object but received: ${e}`);
                            return Object.freeze({ force: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyBoolean)(e.force) });
                        }),
                            (e.copyOpenThreadRequest = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected OpenThreadRequest object but received: ${e}`);
                                return Object.freeze({
                                    threadId: i.ServiceRuntimePrivate.Validation.copyString(e.threadId),
                                    commentId: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(e.commentId),
                                });
                            }),
                            (e.copyFeedbackStateEvent = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected FeedbackStateEvent object but received: ${e}`);
                                return Object.freeze({ isActive: i.ServiceRuntimePrivate.Validation.copyBoolean(e.isActive), hasUnreadFeedback: i.ServiceRuntimePrivate.Validation.copyBoolean(e.hasUnreadFeedback) });
                            });
                    })((Je = e.FeedbackDocumentValidation || (e.FeedbackDocumentValidation = {}))),
                    (function (t) {
                        (t.copyImportFigmaFileRequest = (e) => {
                            if ("object" != typeof e || null === e) throw new Error(`Expected ImportFigmaFileRequest object but received: ${e}`);
                            return Object.freeze({ figmaFileId: i.ServiceRuntimePrivate.Validation.copyString(e.figmaFileId), nodeId: i.ServiceRuntimePrivate.Validation.copyString(e.nodeId) });
                        }),
                            (t.copyImportFigmaFileResponse = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected ImportFigmaFileResponse object but received: ${e}`);
                                return Object.freeze({ rootNodes: i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, i.ServiceRuntimePrivate.Validation.copyUnsafeJSON)(e.rootNodes) });
                            }),
                            (t.copyFetchFigmaFileRequest = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected FetchFigmaFileRequest object but received: ${e}`);
                                return Object.freeze({ figmaFileId: i.ServiceRuntimePrivate.Validation.copyString(e.figmaFileId) });
                            });
                        const r = new Set(["ok", "unauthenticated", "error"]);
                        (t.copyFetchFigmaFileResponseStatus = (e) => {
                            if (!r.has(e)) throw new Error(`Expected valid value for enum but received: ${e}`);
                            return e;
                        }),
                            (t.copyFetchFigmaFileResponse = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected FetchFigmaFileResponse object but received: ${t}`);
                                return Object.freeze({
                                    status: e.FigmaImporterValidation.copyFetchFigmaFileResponseStatus(t.status),
                                    figmaFile: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyUnsafeJSON)(t.figmaFile),
                                });
                            }),
                            (t.copyIsAuthenticatedWithFigmaResponse = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected IsAuthenticatedWithFigmaResponse object but received: ${e}`);
                                return Object.freeze({ isAuthenticated: i.ServiceRuntimePrivate.Validation.copyBoolean(e.isAuthenticated) });
                            }),
                            (t.copyAuthenticateWithFigmaResponse = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected AuthenticateWithFigmaResponse object but received: ${e}`);
                                return Object.freeze({ isAuthenticated: i.ServiceRuntimePrivate.Validation.copyBoolean(e.isAuthenticated) });
                            });
                    })((Ge = e.FigmaImporterValidation || (e.FigmaImporterValidation = {}))),
                    (function (t) {
                        (t.copyFilePath = (e) => {
                            if ("object" != typeof e || null === e) throw new Error(`Expected FilePath object but received: ${e}`);
                            return Object.freeze({ path: i.ServiceRuntimePrivate.Validation.copyString(e.path) });
                        }),
                            (t.copyFile = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected File object but received: ${e}`);
                                return Object.freeze({ path: i.ServiceRuntimePrivate.Validation.copyString(e.path), content: i.ServiceRuntimePrivate.Validation.copyString(e.content) });
                            }),
                            (t.copyFileResult = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected FileResult object but received: ${t}`);
                                return Object.freeze({ file: e.FilesValidation.copyFileOrDirectoryMetadata(t.file) });
                            }),
                            (t.copyFileListResult = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected FileListResult object but received: ${t}`);
                                return Object.freeze({ fileList: i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, e.FilesValidation.copyFileOrDirectoryMetadata)(t.fileList) });
                            });
                        const r = {
                            file: (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected non-null object but received: ${e}`);
                                return Object.freeze({
                                    type: "file",
                                    path: i.ServiceRuntimePrivate.Validation.copyString(e.path),
                                    content: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(e.content),
                                });
                            },
                            directory: (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected non-null object but received: ${e}`);
                                return Object.freeze({ type: "directory", path: i.ServiceRuntimePrivate.Validation.copyString(e.path) });
                            },
                        };
                        (t.copyFileOrDirectoryMetadataType = (e) => {
                            if ("string" != typeof e) throw new Error(`Expected string for type but received: ${e}`);
                            if (!r[e]) throw new Error(`Expected valid value for type but received: ${e}`);
                            return e;
                        }),
                            (t.copyFileOrDirectoryMetadata = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected FileOrDirectoryMetadata object but received: ${e}`);
                                const t = e.type;
                                if ("string" != typeof t) throw new Error(`Expected string for type but received: ${e}`);
                                const i = r[t];
                                if (!i) throw new Error(`Expected valid value for type but received: ${e}`);
                                return i(e);
                            }),
                            (t.copyBuildOutputFile = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected BuildOutputFile object but received: ${e}`);
                                return Object.freeze({ filename: i.ServiceRuntimePrivate.Validation.copyString(e.filename), contents: i.ServiceRuntimePrivate.Validation.copyString(e.contents) });
                            }),
                            (t.copyBuildOutput = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected BuildOutput object but received: ${t}`);
                                return Object.freeze({ files: i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, e.FilesValidation.copyBuildOutputFile)(t.files) });
                            });
                    })((Ze = e.FilesValidation || (e.FilesValidation = {}))),
                    (function (t) {
                        const r = new Set(["added", "changed", "deleted"]);
                        (t.copyUpdatedFileType = (e) => {
                            if (!r.has(e)) throw new Error(`Expected valid value for enum but received: ${e}`);
                            return e;
                        }),
                            (t.copyUpdatedFile = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected UpdatedFile object but received: ${t}`);
                                return Object.freeze({ path: i.ServiceRuntimePrivate.Validation.copyString(t.path), type: e.FileUpdatesValidation.copyUpdatedFileType(t.type) });
                            }),
                            (t.copyFileUpdateEvent = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected FileUpdateEvent object but received: ${t}`);
                                return Object.freeze({ files: i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, e.FileUpdatesValidation.copyUpdatedFile)(t.files) });
                            });
                    })((Ye = e.FileUpdatesValidation || (e.FileUpdatesValidation = {}))),
                    (function (t) {
                        (t.copyLayoutMetrics = (t) => {
                            if ("object" != typeof t || null === t) throw new Error(`Expected LayoutMetrics object but received: ${t}`);
                            return Object.freeze({
                                clientTop: i.ServiceRuntimePrivate.Validation.copyFloat(t.clientTop),
                                clientLeft: i.ServiceRuntimePrivate.Validation.copyFloat(t.clientLeft),
                                clientWidth: i.ServiceRuntimePrivate.Validation.copyFloat(t.clientWidth),
                                clientHeight: i.ServiceRuntimePrivate.Validation.copyFloat(t.clientHeight),
                                scrollWidth: i.ServiceRuntimePrivate.Validation.copyFloat(t.scrollWidth),
                                scrollHeight: i.ServiceRuntimePrivate.Validation.copyFloat(t.scrollHeight),
                                offsetTop: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyFloat)(t.offsetTop),
                                offsetLeft: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyFloat)(t.offsetLeft),
                                offsetWidth: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyFloat)(t.offsetWidth),
                                offsetHeight: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyFloat)(t.offsetHeight),
                                computedStyleWidth: i.ServiceRuntimePrivate.Validation.copyString(t.computedStyleWidth),
                                computedStyleHeight: i.ServiceRuntimePrivate.Validation.copyString(t.computedStyleHeight),
                                children: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, e.LayoutValidation.copyLayoutMetrics))(t.children),
                            });
                        }),
                            (t.copyLayoutChange = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected LayoutChange object but received: ${t}`);
                                return Object.freeze({ nodeId: i.ServiceRuntimePrivate.Validation.copyString(t.nodeId), layoutMetrics: e.LayoutValidation.copyLayoutMetrics(t.layoutMetrics) });
                            }),
                            (t.copyLayoutChangesEvent = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected LayoutChangesEvent object but received: ${t}`);
                                return Object.freeze({ layoutChanges: i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, e.LayoutValidation.copyLayoutChange)(t.layoutChanges) });
                            });
                    })((Xe = e.LayoutValidation || (e.LayoutValidation = {}))),
                    (function (t) {
                        (t.copyToggleConsoleRequest = (e) => {
                            if ("object" != typeof e || null === e) throw new Error(`Expected ToggleConsoleRequest object but received: ${e}`);
                            return Object.freeze({ force: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyBoolean)(e.force) });
                        }),
                            (t.copyKeyboardEvent = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected KeyboardEvent object but received: ${e}`);
                                return Object.freeze({
                                    key: i.ServiceRuntimePrivate.Validation.copyString(e.key),
                                    code: i.ServiceRuntimePrivate.Validation.copyString(e.code),
                                    keyCode: i.ServiceRuntimePrivate.Validation.copyInteger(e.keyCode),
                                    altKey: i.ServiceRuntimePrivate.Validation.copyBoolean(e.altKey),
                                    ctrlKey: i.ServiceRuntimePrivate.Validation.copyBoolean(e.ctrlKey),
                                    metaKey: i.ServiceRuntimePrivate.Validation.copyBoolean(e.metaKey),
                                    shiftKey: i.ServiceRuntimePrivate.Validation.copyBoolean(e.shiftKey),
                                });
                            }),
                            (t.copyLogsEvent = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected LogsEvent object but received: ${t}`);
                                return Object.freeze({ logs: i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, e.PreviewSandboxValidation.copyLog)(t.logs) });
                            }),
                            (t.copyLog = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected Log object but received: ${e}`);
                                return Object.freeze({
                                    data: i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(e.data),
                                    method: i.ServiceRuntimePrivate.Validation.copyString(e.method),
                                    id: i.ServiceRuntimePrivate.Validation.copyString(e.id),
                                });
                            });
                    })((Qe = e.PreviewSandboxValidation || (e.PreviewSandboxValidation = {}))),
                    (function (e) {
                        (e.copyToggleConsoleRequest = (e) => {
                            if ("object" != typeof e || null === e) throw new Error(`Expected ToggleConsoleRequest object but received: ${e}`);
                            return Object.freeze({ force: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyBoolean)(e.force) });
                        }),
                            (e.copyStateEvent = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected StateEvent object but received: ${e}`);
                                return Object.freeze({
                                    consoleShown: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyBoolean)(e.consoleShown),
                                    hasErrors: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyBoolean)(e.hasErrors),
                                    hasWarnings: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyBoolean)(e.hasWarnings),
                                });
                            });
                    })((et = e.PreviewWrapperValidation || (e.PreviewWrapperValidation = {}))),
                    (function (t) {
                        const r = {
                            loading: (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected non-null object but received: ${e}`);
                                return Object.freeze({ status: "loading" });
                            },
                            loaded: (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected non-null object but received: ${t}`);
                                return Object.freeze({
                                    status: "loaded",
                                    presentation: e.SharedPreviewSandboxValidation.copyPresentation(t.presentation),
                                    frames: i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, e.SharedPreviewSandboxValidation.copyFrameInfo)(t.frames),
                                });
                            },
                            error: (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected non-null object but received: ${t}`);
                                return Object.freeze({ status: "error", error: e.SharedPreviewSandboxValidation.copyError(t.error) });
                            },
                        };
                        (t.copyStateEventStatus = (e) => {
                            if ("string" != typeof e) throw new Error(`Expected string for status but received: ${e}`);
                            if (!r[e]) throw new Error(`Expected valid value for status but received: ${e}`);
                            return e;
                        }),
                            (t.copyStateEvent = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected StateEvent object but received: ${e}`);
                                const t = e.status;
                                if ("string" != typeof t) throw new Error(`Expected string for status but received: ${e}`);
                                const i = r[t];
                                if (!i) throw new Error(`Expected valid value for status but received: ${e}`);
                                return i(e);
                            }),
                            (t.copyInteractionEvent = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected InteractionEvent object but received: ${e}`);
                                return Object.freeze({ type: i.ServiceRuntimePrivate.Validation.copyString(e.type) });
                            });
                        const n = {
                            device: (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected non-null object but received: ${t}`);
                                return Object.freeze({ type: "device", deviceOptions: e.PreviewSettingsValidation.copyDeviceOptions(t.deviceOptions) });
                            },
                            frame: (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected non-null object but received: ${t}`);
                                return Object.freeze({ type: "frame", size: e.Validation.copySize(t.size) });
                            },
                            responsive: (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected non-null object but received: ${e}`);
                                return Object.freeze({ type: "responsive" });
                            },
                        };
                        (t.copyPresentationType = (e) => {
                            if ("string" != typeof e) throw new Error(`Expected string for type but received: ${e}`);
                            if (!n[e]) throw new Error(`Expected valid value for type but received: ${e}`);
                            return e;
                        }),
                            (t.copyPresentation = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected Presentation object but received: ${e}`);
                                const t = e.type;
                                if ("string" != typeof t) throw new Error(`Expected string for type but received: ${e}`);
                                const r = n[t];
                                if (!r) throw new Error(`Expected valid value for type but received: ${e}`);
                                return r(e);
                            });
                        const o = {
                            documentEmpty: (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected non-null object but received: ${e}`);
                                return Object.freeze({ type: "documentEmpty" });
                            },
                            frameNotFound: (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected non-null object but received: ${e}`);
                                return Object.freeze({ type: "frameNotFound" });
                            },
                            permissionDenied: (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected non-null object but received: ${e}`);
                                return Object.freeze({ type: "permissionDenied" });
                            },
                            unknown: (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected non-null object but received: ${e}`);
                                return Object.freeze({
                                    type: "unknown",
                                    message: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(e.message),
                                    extra: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyUnsafeJSON)(e.extra),
                                });
                            },
                        };
                        (t.copyErrorType = (e) => {
                            if ("string" != typeof e) throw new Error(`Expected string for type but received: ${e}`);
                            if (!o[e]) throw new Error(`Expected valid value for type but received: ${e}`);
                            return e;
                        }),
                            (t.copyError = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected Error object but received: ${e}`);
                                const t = e.type;
                                if ("string" != typeof t) throw new Error(`Expected string for type but received: ${e}`);
                                const r = o[t];
                                if (!r) throw new Error(`Expected valid value for type but received: ${e}`);
                                return r(e);
                            }),
                            (t.copyFrameInfo = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected FrameInfo object but received: ${e}`);
                                return Object.freeze({ id: i.ServiceRuntimePrivate.Validation.copyString(e.id), name: i.ServiceRuntimePrivate.Validation.copyString(e.name) });
                            });
                    })((tt = e.SharedPreviewSandboxValidation || (e.SharedPreviewSandboxValidation = {}))),
                    (function (e) {
                        (e.copyLoadDocumentRequest = (e) => {
                            if ("object" != typeof e || null === e) throw new Error(`Expected LoadDocumentRequest object but received: ${e}`);
                            return Object.freeze({ projectURL: i.ServiceRuntimePrivate.Validation.copyString(e.projectURL) });
                        }),
                            (e.copyLoadDocumentResponse = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected LoadDocumentResponse object but received: ${e}`);
                                return Object.freeze({
                                    document: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyUnsafeJSON)(e.document),
                                    scripts: i.ServiceRuntimePrivate.Validation.copyMap.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString, i.ServiceRuntimePrivate.Validation.copyString)(e.scripts),
                                });
                            }),
                            (e.copyScriptUpdateEvent = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected ScriptUpdateEvent object but received: ${e}`);
                                return Object.freeze({ content: i.ServiceRuntimePrivate.Validation.copyMap.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString, i.ServiceRuntimePrivate.Validation.copyString)(e.content) });
                            });
                        const t = {
                            tree: (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected non-null object but received: ${e}`);
                                return Object.freeze({ type: "tree", tree: i.ServiceRuntimePrivate.Validation.copyUnsafeJSON(e.tree) });
                            },
                            changes: (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected non-null object but received: ${e}`);
                                return Object.freeze({ type: "changes", changes: i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, i.ServiceRuntimePrivate.Validation.copyUnsafeJSON)(e.changes) });
                            },
                        };
                        (e.copyTreeUpdateEventType = (e) => {
                            if ("string" != typeof e) throw new Error(`Expected string for type but received: ${e}`);
                            if (!t[e]) throw new Error(`Expected valid value for type but received: ${e}`);
                            return e;
                        }),
                            (e.copyTreeUpdateEvent = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected TreeUpdateEvent object but received: ${e}`);
                                const r = e.type;
                                if ("string" != typeof r) throw new Error(`Expected string for type but received: ${e}`);
                                const i = t[r];
                                if (!i) throw new Error(`Expected valid value for type but received: ${e}`);
                                return i(e);
                            });
                    })((rt = e.PreviewDataSourceValidation || (e.PreviewDataSourceValidation = {}))),
                    (function (e) {
                        (e.copyLoadRequest = (e) => {
                            if ("object" != typeof e || null === e) throw new Error(`Expected LoadRequest object but received: ${e}`);
                            return Object.freeze({ projectURL: i.ServiceRuntimePrivate.Validation.copyString(e.projectURL) });
                        }),
                            (e.copyLoadResponse = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected LoadResponse object but received: ${e}`);
                                return Object.freeze({
                                    canvas: i.ServiceRuntimePrivate.Validation.copyString(e.canvas),
                                    script: i.ServiceRuntimePrivate.Validation.copyMap.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString, i.ServiceRuntimePrivate.Validation.copyString)(e.script),
                                    preview: i.ServiceRuntimePrivate.Validation.copyString(e.preview),
                                });
                            }),
                            (e.copyPreviewUpdateEvent = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected PreviewUpdateEvent object but received: ${e}`);
                                return Object.freeze({ content: i.ServiceRuntimePrivate.Validation.copyString(e.content) });
                            }),
                            (e.copyCanvasUpdateEvent = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected CanvasUpdateEvent object but received: ${e}`);
                                return Object.freeze({ content: i.ServiceRuntimePrivate.Validation.copyString(e.content) });
                            });
                    })((it = e.LegacyPreviewDataSourceValidation || (e.LegacyPreviewDataSourceValidation = {}))),
                    (function (t) {
                        (t.copySelectionLockRequest = (e) => {
                            if ("object" != typeof e || null === e) throw new Error(`Expected SelectionLockRequest object but received: ${e}`);
                            return Object.freeze({ force: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyBoolean)(e.force) });
                        }),
                            (t.copyResponsiveRequest = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected ResponsiveRequest object but received: ${e}`);
                                return Object.freeze({ force: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyBoolean)(e.force) });
                            }),
                            (t.copyTouchCursorRequest = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected TouchCursorRequest object but received: ${e}`);
                                return Object.freeze({ force: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyBoolean)(e.force) });
                            }),
                            (t.copySetTitleRequest = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected SetTitleRequest object but received: ${e}`);
                                return Object.freeze({ title: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(e.title) });
                            }),
                            (t.copyMetadataUpdateEvent = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected MetadataUpdateEvent object but received: ${t}`);
                                return Object.freeze({
                                    deviceOptions: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, e.PreviewSettingsValidation.copyDeviceOptions)(t.deviceOptions),
                                    node: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, e.PreviewSettingsValidation.copyNode)(t.node),
                                    responsive: i.ServiceRuntimePrivate.Validation.copyBoolean(t.responsive),
                                    canChangeResponsive: i.ServiceRuntimePrivate.Validation.copyBoolean(t.canChangeResponsive),
                                    touchCursor: i.ServiceRuntimePrivate.Validation.copyBoolean(t.touchCursor),
                                    selectionLock: i.ServiceRuntimePrivate.Validation.copyBoolean(t.selectionLock),
                                    title: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(t.title),
                                });
                            });
                        const r = {
                            canvas: (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected non-null object but received: ${e}`);
                                return Object.freeze({
                                    type: "canvas",
                                    name: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(e.name),
                                    id: i.ServiceRuntimePrivate.Validation.copyString(e.id),
                                    width: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyInteger)(e.width),
                                    height: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyInteger)(e.height),
                                    hasLegacyDevice: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyBoolean)(e.hasLegacyDevice),
                                });
                            },
                            codeEditor: (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected non-null object but received: ${e}`);
                                return Object.freeze({
                                    type: "codeEditor",
                                    name: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(e.name),
                                    componentId: i.ServiceRuntimePrivate.Validation.copyString(e.componentId),
                                });
                            },
                        };
                        (t.copyNodeType = (e) => {
                            if ("string" != typeof e) throw new Error(`Expected string for type but received: ${e}`);
                            if (!r[e]) throw new Error(`Expected valid value for type but received: ${e}`);
                            return e;
                        }),
                            (t.copyNode = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected Node object but received: ${e}`);
                                const t = e.type;
                                if ("string" != typeof t) throw new Error(`Expected string for type but received: ${e}`);
                                const i = r[t];
                                if (!i) throw new Error(`Expected valid value for type but received: ${e}`);
                                return i(e);
                            });
                        const n = new Set(["light", "dark"]);
                        (t.copyDeviceOptionsTheme = (e) => {
                            if (!n.has(e)) throw new Error(`Expected valid value for enum but received: ${e}`);
                            return e;
                        }),
                            (t.copyDeviceOptions = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected DeviceOptions object but received: ${t}`);
                                return Object.freeze({
                                    screenWidth: i.ServiceRuntimePrivate.Validation.copyInteger(t.screenWidth),
                                    screenHeight: i.ServiceRuntimePrivate.Validation.copyInteger(t.screenHeight),
                                    screenRadius: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyInteger)(t.screenRadius),
                                    maskImage: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(t.maskImage),
                                    bezelWidth: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyInteger)(t.bezelWidth),
                                    bezelHeight: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyInteger)(t.bezelHeight),
                                    bezelRadius: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyInteger)(t.bezelRadius),
                                    backgroundColor: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(t.backgroundColor),
                                    theme: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, e.PreviewSettingsValidation.copyDeviceOptionsTheme)(t.theme),
                                    shadow: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyBoolean)(t.shadow),
                                });
                            });
                    })((nt = e.PreviewSettingsValidation || (e.PreviewSettingsValidation = {}))),
                    (function (t) {
                        (t.copyUpdateEvent = (e) => {
                            if ("object" != typeof e || null === e) throw new Error(`Expected UpdateEvent object but received: ${e}`);
                            return Object.freeze({ isVisible: i.ServiceRuntimePrivate.Validation.copyBoolean(e.isVisible) });
                        }),
                            (t.copyToggleVisibleRequest = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected ToggleVisibleRequest object but received: ${e}`);
                                return Object.freeze({ force: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyBoolean)(e.force) });
                            }),
                            (t.copyGetSharedPreviewMetadataResponse = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected GetSharedPreviewMetadataResponse object but received: ${t}`);
                                return Object.freeze({
                                    homeNode: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, e.PreviewStoreValidation.copyNodeMetadata)(t.homeNode),
                                    selectedNode: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, e.PreviewStoreValidation.copyNodeMetadata)(t.selectedNode),
                                });
                            }),
                            (t.copyNodeMetadata = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected NodeMetadata object but received: ${t}`);
                                return Object.freeze({
                                    nodeId: i.ServiceRuntimePrivate.Validation.copyString(t.nodeId),
                                    deviceOptions: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, e.PreviewSettingsValidation.copyDeviceOptions)(t.deviceOptions),
                                });
                            });
                    })((ot = e.PreviewStoreValidation || (e.PreviewStoreValidation = {}))),
                    (function (e) {
                        e.copyOnScaleChange = (e) => {
                            if ("object" != typeof e || null === e) throw new Error(`Expected OnScaleChange object but received: ${e}`);
                            return Object.freeze({ scale: i.ServiceRuntimePrivate.Validation.copyFloat(e.scale) });
                        };
                    })((at = e.PreviewDesktopValidation || (e.PreviewDesktopValidation = {}))),
                    (function (e) {
                        (e.copyUploadDesignAssetArgs = (e) => {
                            if ("object" != typeof e || null === e) throw new Error(`Expected UploadDesignAssetArgs object but received: ${e}`);
                            return Object.freeze({ encodedContent: i.ServiceRuntimePrivate.Validation.copyString(e.encodedContent), fileName: i.ServiceRuntimePrivate.Validation.copyString(e.fileName) });
                        }),
                            (e.copyUploadReadmeArgs = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected UploadReadmeArgs object but received: ${e}`);
                                return Object.freeze({ readme: i.ServiceRuntimePrivate.Validation.copyString(e.readme) });
                            }),
                            (e.copyFetchReadmeResponse = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected FetchReadmeResponse object but received: ${e}`);
                                return Object.freeze({ readme: i.ServiceRuntimePrivate.Validation.copyString(e.readme) });
                            }),
                            (e.copyAddDependencyArgs = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected AddDependencyArgs object but received: ${e}`);
                                return Object.freeze({ packageName: i.ServiceRuntimePrivate.Validation.copyString(e.packageName) });
                            }),
                            (e.copyPublishPackageArgs = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected PublishPackageArgs object but received: ${e}`);
                                return Object.freeze({
                                    version: i.ServiceRuntimePrivate.Validation.copyString(e.version),
                                    displayName: i.ServiceRuntimePrivate.Validation.copyString(e.displayName),
                                    packageName: i.ServiceRuntimePrivate.Validation.copyString(e.packageName),
                                    slug: i.ServiceRuntimePrivate.Validation.copyString(e.slug),
                                    isPrivate: i.ServiceRuntimePrivate.Validation.copyBoolean(e.isPrivate),
                                });
                            }),
                            (e.copyFetchPackageJsonResponse = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected FetchPackageJsonResponse object but received: ${e}`);
                                return Object.freeze({ package: i.ServiceRuntimePrivate.Validation.copyUnsafeJSON(e.package) });
                            });
                    })((st = e.ProjectPackageValidation || (e.ProjectPackageValidation = {}))),
                    (function (t) {
                        (t.copyFileChange = (e) => {
                            if ("object" != typeof e || null === e) throw new Error(`Expected FileChange object but received: ${e}`);
                            return Object.freeze({ relativePath: i.ServiceRuntimePrivate.Validation.copyString(e.relativePath) });
                        }),
                            (t.copyOutdatedProps = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected OutdatedProps object but received: ${e}`);
                                return Object.freeze({
                                    name: i.ServiceRuntimePrivate.Validation.copyString(e.name),
                                    current: i.ServiceRuntimePrivate.Validation.copyString(e.current),
                                    wanted: i.ServiceRuntimePrivate.Validation.copyString(e.wanted),
                                    latest: i.ServiceRuntimePrivate.Validation.copyString(e.latest),
                                    type: i.ServiceRuntimePrivate.Validation.copyString(e.type),
                                });
                            }),
                            (t.copyState = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected State object but received: ${t}`);
                                return Object.freeze({
                                    filename: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(t.filename),
                                    tasks: i.ServiceRuntimePrivate.Validation.copyUnsafeJSON(t.tasks),
                                    url: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(t.url),
                                    isDocumentDirty: i.ServiceRuntimePrivate.Validation.copyBoolean(t.isDocumentDirty),
                                    outdated: i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, e.ProjectStateValidation.copyOutdatedProps)(t.outdated),
                                    packages: i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(t.packages),
                                    builtInLibraryVersion: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(t.builtInLibraryVersion),
                                    currentLibraryVersion: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(t.currentLibraryVersion),
                                    availableLibraryVersions: i.ServiceRuntimePrivate.Validation.copyOptional.bind(
                                        void 0,
                                        i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)
                                    )(t.availableLibraryVersions),
                                });
                            });
                    })((ct = e.ProjectStateValidation || (e.ProjectStateValidation = {}))),
                    (function (t) {
                        (t.copyComponentLoaderState = (e) => {
                            if ("object" != typeof e || null === e) throw new Error(`Expected ComponentLoaderState object but received: ${e}`);
                            return Object.freeze({ localPackageIdentifier: i.ServiceRuntimePrivate.Validation.copyString(e.localPackageIdentifier) });
                        }),
                            (t.copyComponentLoaderStateEvent = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected ComponentLoaderStateEvent object but received: ${t}`);
                                return Object.freeze({ hash: i.ServiceRuntimePrivate.Validation.copyString(t.hash), state: e.SandboxComponentLoaderValidation.copyComponentLoaderState(t.state) });
                            });
                    })((ut = e.SandboxComponentLoaderValidation || (e.SandboxComponentLoaderValidation = {}))),
                    (function (t) {
                        (t.copyFindByNameArgs = (e) => {
                            if ("object" != typeof e || null === e) throw new Error(`Expected FindByNameArgs object but received: ${e}`);
                            return Object.freeze({ packageName: i.ServiceRuntimePrivate.Validation.copyString(e.packageName) });
                        }),
                            (t.copyContainsPackageArgs = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected ContainsPackageArgs object but received: ${e}`);
                                return Object.freeze({
                                    friendlyName: i.ServiceRuntimePrivate.Validation.copyString(e.friendlyName),
                                    spaceId: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(e.spaceId),
                                });
                            }),
                            (t.copyContainsPackageResponse = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected ContainsPackageResponse object but received: ${e}`);
                                return Object.freeze({ contained: i.ServiceRuntimePrivate.Validation.copyBoolean(e.contained) });
                            }),
                            (t.copyToggleFavoriteArgs = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected ToggleFavoriteArgs object but received: ${e}`);
                                return Object.freeze({ packageName: i.ServiceRuntimePrivate.Validation.copyString(e.packageName), favorite: i.ServiceRuntimePrivate.Validation.copyBoolean(e.favorite) });
                            }),
                            (t.copyFetchRecentsArgs = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected FetchRecentsArgs object but received: ${e}`);
                                return Object.freeze({
                                    offset: i.ServiceRuntimePrivate.Validation.copyInteger(e.offset),
                                    spaceIds: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString))(e.spaceIds),
                                });
                            }),
                            (t.copyFetchPackagesBySectionArgs = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected FetchPackagesBySectionArgs object but received: ${e}`);
                                return Object.freeze({
                                    section: i.ServiceRuntimePrivate.Validation.copyString(e.section),
                                    offset: i.ServiceRuntimePrivate.Validation.copyInteger(e.offset),
                                    spaceIds: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString))(e.spaceIds),
                                });
                            }),
                            (t.copyFetchPackagesByPublisherArgs = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected FetchPackagesByPublisherArgs object but received: ${e}`);
                                return Object.freeze({
                                    publisherId: i.ServiceRuntimePrivate.Validation.copyString(e.publisherId),
                                    offset: i.ServiceRuntimePrivate.Validation.copyInteger(e.offset),
                                    spaceIds: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString))(e.spaceIds),
                                });
                            }),
                            (t.copyFetchPackagesByPopularityArgs = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected FetchPackagesByPopularityArgs object but received: ${e}`);
                                return Object.freeze({
                                    offset: i.ServiceRuntimePrivate.Validation.copyInteger(e.offset),
                                    days: i.ServiceRuntimePrivate.Validation.copyInteger(e.days),
                                    spaceIds: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString))(e.spaceIds),
                                });
                            }),
                            (t.copyFetchFeaturedPackagesArgs = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected FetchFeaturedPackagesArgs object but received: ${e}`);
                                return Object.freeze({ offset: i.ServiceRuntimePrivate.Validation.copyInteger(e.offset) });
                            }),
                            (t.copySearchArgs = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected SearchArgs object but received: ${e}`);
                                return Object.freeze({
                                    offset: i.ServiceRuntimePrivate.Validation.copyInteger(e.offset),
                                    query: i.ServiceRuntimePrivate.Validation.copyString(e.query),
                                    spaceIds: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString))(e.spaceIds),
                                });
                            }),
                            (t.copyGetPublishStatusArgs = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected GetPublishStatusArgs object but received: ${e}`);
                                return Object.freeze({
                                    packageName: i.ServiceRuntimePrivate.Validation.copyString(e.packageName),
                                    version: i.ServiceRuntimePrivate.Validation.copyString(e.version),
                                    isPrivate: i.ServiceRuntimePrivate.Validation.copyBoolean(e.isPrivate),
                                });
                            }),
                            (t.copyFetchPreflightArgs = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected FetchPreflightArgs object but received: ${e}`);
                                return Object.freeze({
                                    package: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(e.package),
                                    displayName: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(e.displayName),
                                    publishing: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyBoolean)(e.publishing),
                                    spaceId: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(e.spaceId),
                                });
                            }),
                            (t.copyRemovePackageArgs = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected RemovePackageArgs object but received: ${e}`);
                                return Object.freeze({ packageName: i.ServiceRuntimePrivate.Validation.copyString(e.packageName) });
                            }),
                            (t.copyPublishingError = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected PublishingError object but received: ${e}`);
                                return Object.freeze({ message: i.ServiceRuntimePrivate.Validation.copyString(e.message) });
                            });
                        const r = {
                            pending: (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected non-null object but received: ${e}`);
                                return Object.freeze({ status: "pending" });
                            },
                            completed: (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected non-null object but received: ${e}`);
                                return Object.freeze({ status: "completed" });
                            },
                            rejected: (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected non-null object but received: ${t}`);
                                return Object.freeze({ status: "rejected", error: e.PublicStoreClientValidation.copyPublishingError(t.error) });
                            },
                            error: (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected non-null object but received: ${e}`);
                                return Object.freeze({ status: "error", error: i.ServiceRuntimePrivate.Validation.copyUnsafeJSON(e.error) });
                            },
                        };
                        (t.copyPublishStatusStatus = (e) => {
                            if ("string" != typeof e) throw new Error(`Expected string for status but received: ${e}`);
                            if (!r[e]) throw new Error(`Expected valid value for status but received: ${e}`);
                            return e;
                        }),
                            (t.copyPublishStatus = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected PublishStatus object but received: ${e}`);
                                const t = e.status;
                                if ("string" != typeof t) throw new Error(`Expected string for status but received: ${e}`);
                                const i = r[t];
                                if (!i) throw new Error(`Expected valid value for status but received: ${e}`);
                                return i(e);
                            }),
                            (t.copyPreflightResponse = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected PreflightResponse object but received: ${e}`);
                                return Object.freeze({
                                    ok: i.ServiceRuntimePrivate.Validation.copyBoolean(e.ok),
                                    suggestedVersion: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(e.suggestedVersion),
                                    slug: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(e.slug),
                                    package: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(e.package),
                                    errorMessage: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(e.errorMessage),
                                });
                            }),
                            (t.copyPackage = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected Package object but received: ${e}`);
                                return Object.freeze({
                                    icon: i.ServiceRuntimePrivate.Validation.copyString(e.icon),
                                    artwork: i.ServiceRuntimePrivate.Validation.copyString(e.artwork),
                                    friendlyName: i.ServiceRuntimePrivate.Validation.copyString(e.friendlyName),
                                    readme: i.ServiceRuntimePrivate.Validation.copyString(e.readme),
                                    license: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(e.license),
                                    name: i.ServiceRuntimePrivate.Validation.copyString(e.name),
                                    author: i.ServiceRuntimePrivate.Validation.copyString(e.author),
                                    slug: i.ServiceRuntimePrivate.Validation.copyString(e.slug),
                                    version: i.ServiceRuntimePrivate.Validation.copyString(e.version),
                                    updatedAt: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(e.updatedAt),
                                    tags: i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(e.tags),
                                    size: i.ServiceRuntimePrivate.Validation.copyInteger(e.size),
                                    favorites: i.ServiceRuntimePrivate.Validation.copyInteger(e.favorites),
                                    downloads: i.ServiceRuntimePrivate.Validation.copyInteger(e.downloads),
                                    isPrivate: i.ServiceRuntimePrivate.Validation.copyBoolean(e.isPrivate),
                                    isFavorite: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyBoolean)(e.isFavorite),
                                    publisherId: i.ServiceRuntimePrivate.Validation.copyString(e.publisherId),
                                    spaceId: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(e.spaceId),
                                    peerDependencies: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyUnsafeJSON)(e.peerDependencies),
                                });
                            }),
                            (t.copyPackageArray = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected PackageArray object but received: ${t}`);
                                return Object.freeze({
                                    packages: i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, e.PublicStoreClientValidation.copyPackage)(t.packages),
                                    totalCount: i.ServiceRuntimePrivate.Validation.copyInteger(t.totalCount),
                                });
                            }),
                            (t.copyFetchMetaArgs = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected FetchMetaArgs object but received: ${e}`);
                                return Object.freeze({
                                    name: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(e.name),
                                    dependencies: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString))(e.dependencies),
                                });
                            }),
                            (t.copyPackageMeta = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected PackageMeta object but received: ${e}`);
                                return Object.freeze({
                                    isPrivate: i.ServiceRuntimePrivate.Validation.copyBoolean(e.isPrivate),
                                    url: i.ServiceRuntimePrivate.Validation.copyString(e.url),
                                    ownerId: i.ServiceRuntimePrivate.Validation.copyString(e.ownerId),
                                    spaceId: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(e.spaceId),
                                    publisherId: i.ServiceRuntimePrivate.Validation.copyString(e.publisherId),
                                });
                            }),
                            (t.copyFetchMetaResponse = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected FetchMetaResponse object but received: ${t}`);
                                return Object.freeze({
                                    meta: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, e.PublicStoreClientValidation.copyPackageMeta)(t.meta),
                                    dependenciesMeta: i.ServiceRuntimePrivate.Validation.copyUnsafeJSON(t.dependenciesMeta),
                                });
                            });
                    })((lt = e.PublicStoreClientValidation || (e.PublicStoreClientValidation = {}))),
                    (function (t) {
                        const r = new Set(["auto", "always", "never"]);
                        t.copyActionShowCloseButton = (e) => {
                            if (!r.has(e)) throw new Error(`Expected valid value for enum but received: ${e}`);
                            return e;
                        };
                        const n = {
                            add: (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected non-null object but received: ${t}`);
                                return Object.freeze({
                                    type: "add",
                                    text: i.ServiceRuntimePrivate.Validation.copyString(t.text),
                                    key: i.ServiceRuntimePrivate.Validation.copyString(t.key),
                                    icon: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, e.ToastValidation.copyToastIcon)(t.icon),
                                    duration: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyInteger)(t.duration),
                                    showCloseButton: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, e.ToastValidation.copyActionShowCloseButton)(t.showCloseButton),
                                });
                            },
                            remove: (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected non-null object but received: ${e}`);
                                return Object.freeze({ type: "remove", key: i.ServiceRuntimePrivate.Validation.copyString(e.key) });
                            },
                        };
                        (t.copyActionType = (e) => {
                            if ("string" != typeof e) throw new Error(`Expected string for type but received: ${e}`);
                            if (!n[e]) throw new Error(`Expected valid value for type but received: ${e}`);
                            return e;
                        }),
                            (t.copyAction = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected Action object but received: ${e}`);
                                const t = e.type;
                                if ("string" != typeof t) throw new Error(`Expected string for type but received: ${e}`);
                                const r = n[t];
                                if (!r) throw new Error(`Expected valid value for type but received: ${e}`);
                                return r(e);
                            });
                        const o = new Set(["error", "image", "locked", "notifications", "reconnecting", "success", "view-only", "warning"]);
                        t.copyToastIcon = (e) => {
                            if (!o.has(e)) throw new Error(`Expected valid value for enum but received: ${e}`);
                            return e;
                        };
                    })((dt = e.ToastValidation || (e.ToastValidation = {}))),
                    (function (e) {
                        e.copyToolsStateEvent = (e) => {
                            if ("object" != typeof e || null === e) throw new Error(`Expected ToolsStateEvent object but received: ${e}`);
                            return Object.freeze({
                                activeTool: i.ServiceRuntimePrivate.Validation.copyInteger(e.activeTool),
                                insertActive: i.ServiceRuntimePrivate.Validation.copyBoolean(e.insertActive),
                                handoffActive: i.ServiceRuntimePrivate.Validation.copyBoolean(e.handoffActive),
                                visible: i.ServiceRuntimePrivate.Validation.copyBoolean(e.visible),
                                graphicMode: i.ServiceRuntimePrivate.Validation.copyBoolean(e.graphicMode),
                                zoom: i.ServiceRuntimePrivate.Validation.copyInteger(e.zoom),
                                displayRulers: i.ServiceRuntimePrivate.Validation.copyBoolean(e.displayRulers),
                                showPixelGrid: i.ServiceRuntimePrivate.Validation.copyBoolean(e.showPixelGrid),
                                disabled: i.ServiceRuntimePrivate.Validation.copyBoolean(e.disabled),
                            });
                        };
                    })((pt = e.ToolOwnerValidation || (e.ToolOwnerValidation = {}))),
                    (function (e) {
                        e.copyActiveToolEvent = (e) => {
                            if ("object" != typeof e || null === e) throw new Error(`Expected ActiveToolEvent object but received: ${e}`);
                            return Object.freeze({
                                tool: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyInteger)(e.tool),
                                insert: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyBoolean)(e.insert),
                                handoff: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyBoolean)(e.handoff),
                            });
                        };
                    })((ft = e.ToolWrapperValidation || (e.ToolWrapperValidation = {}))),
                    (function (e) {
                        e.copyStep = (e) => {
                            if ("object" != typeof e || null === e) throw new Error(`Expected Step object but received: ${e}`);
                            return Object.freeze({
                                show: i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(e.show),
                                center: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString))(e.center),
                                zoom: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyFloat)(e.zoom),
                            });
                        };
                    })((vt = e.TutorialDocumentValidation || (e.TutorialDocumentValidation = {}))),
                    (function (e) {
                        e.copyPresentationData = (e) => {
                            if ("object" != typeof e || null === e) throw new Error(`Expected PresentationData object but received: ${e}`);
                            return Object.freeze({ presentationJSON: i.ServiceRuntimePrivate.Validation.copyString(e.presentationJSON) });
                        };
                    })((ht = e.TutorialFrameValidation || (e.TutorialFrameValidation = {}))),
                    (function (t) {
                        const r = new Set(["granted", "denied", "notDetermined"]);
                        (t.copyPermissionStatus = (e) => {
                            if (!r.has(e)) throw new Error(`Expected valid value for enum but received: ${e}`);
                            return e;
                        }),
                            (t.copyRequestPermissionResponse = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected RequestPermissionResponse object but received: ${t}`);
                                return Object.freeze({ status: e.UserNotificationsValidation.copyPermissionStatus(t.status) });
                            }),
                            (t.copyGetPermissionStatusResponse = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected GetPermissionStatusResponse object but received: ${t}`);
                                return Object.freeze({ status: e.UserNotificationsValidation.copyPermissionStatus(t.status) });
                            });
                        const n = new Set(["always", "backgrounded"]);
                        (t.copyNotificationShow = (e) => {
                            if (!n.has(e)) throw new Error(`Expected valid value for enum but received: ${e}`);
                            return e;
                        }),
                            (t.copyNotification = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected Notification object but received: ${t}`);
                                return Object.freeze({
                                    id: i.ServiceRuntimePrivate.Validation.copyString(t.id),
                                    title: i.ServiceRuntimePrivate.Validation.copyString(t.title),
                                    body: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(t.body),
                                    show: e.UserNotificationsValidation.copyNotificationShow(t.show),
                                });
                            }),
                            (t.copyPostRequest = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected PostRequest object but received: ${t}`);
                                return Object.freeze({ notification: e.UserNotificationsValidation.copyNotification(t.notification) });
                            });
                        const o = {
                            action: (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected non-null object but received: ${e}`);
                                return Object.freeze({ type: "action" });
                            },
                            cancel: (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected non-null object but received: ${e}`);
                                return Object.freeze({ type: "cancel", reason: i.ServiceRuntimePrivate.Validation.copyString(e.reason) });
                            },
                        };
                        (t.copyPostResponseType = (e) => {
                            if ("string" != typeof e) throw new Error(`Expected string for type but received: ${e}`);
                            if (!o[e]) throw new Error(`Expected valid value for type but received: ${e}`);
                            return e;
                        }),
                            (t.copyPostResponse = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected PostResponse object but received: ${e}`);
                                const t = e.type;
                                if ("string" != typeof t) throw new Error(`Expected string for type but received: ${e}`);
                                const r = o[t];
                                if (!r) throw new Error(`Expected valid value for type but received: ${e}`);
                                return r(e);
                            }),
                            (t.copyCancelRequest = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected CancelRequest object but received: ${e}`);
                                return Object.freeze({ notificationId: i.ServiceRuntimePrivate.Validation.copyString(e.notificationId) });
                            });
                    })((gt = e.UserNotificationsValidation || (e.UserNotificationsValidation = {}))),
                    (function (t) {
                        (t.copySessionIdentityResponse = (t) => {
                            if ("object" != typeof t || null === t) throw new Error(`Expected SessionIdentityResponse object but received: ${t}`);
                            return Object.freeze({ user: e.Validation.copyUser(t.user) });
                        }),
                            (t.copyPermissionsResponse = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected PermissionsResponse object but received: ${e}`);
                                return Object.freeze({ isViewOnly: i.ServiceRuntimePrivate.Validation.copyBoolean(e.isViewOnly) });
                            });
                    })((mt = e.UserSessionServiceValidation || (e.UserSessionServiceValidation = {}))),
                    (function (t) {
                        const r = new Set(["user", "organization"]);
                        (t.copyProjectSpaceScope = (e) => {
                            if (!r.has(e)) throw new Error(`Expected valid value for enum but received: ${e}`);
                            return e;
                        }),
                            (t.copyProjectSpace = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected ProjectSpace object but received: ${t}`);
                                return Object.freeze({
                                    id: i.ServiceRuntimePrivate.Validation.copyString(t.id),
                                    icon: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(t.icon),
                                    ownerId: i.ServiceRuntimePrivate.Validation.copyString(t.ownerId),
                                    scope: e.WebProjectValidation.copyProjectSpaceScope(t.scope),
                                    displayName: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(t.displayName),
                                });
                            }),
                            (t.copyShareLink = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected ShareLink object but received: ${e}`);
                                return Object.freeze({ id: i.ServiceRuntimePrivate.Validation.copyString(e.id), href: i.ServiceRuntimePrivate.Validation.copyString(e.href) });
                            }),
                            (t.copyCurrentProjectEvent = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected CurrentProjectEvent object but received: ${t}`);
                                return Object.freeze({
                                    title: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString)(t.title),
                                    space: e.WebProjectValidation.copyProjectSpace(t.space),
                                    shareLinks: i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, e.WebProjectValidation.copyShareLink)(t.shareLinks),
                                    canMoveProject: i.ServiceRuntimePrivate.Validation.copyBoolean(t.canMoveProject),
                                });
                            }),
                            (t.copyGetMoveProjectPermissionResult = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected GetMoveProjectPermissionResult object but received: ${e}`);
                                return Object.freeze({ canMoveProject: i.ServiceRuntimePrivate.Validation.copyBoolean(e.canMoveProject) });
                            }),
                            (t.copyLocation = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected Location object but received: ${e}`);
                                return Object.freeze({ x: i.ServiceRuntimePrivate.Validation.copyInteger(e.x), y: i.ServiceRuntimePrivate.Validation.copyInteger(e.y) });
                            }),
                            (t.copyShowMoveProjectMenuArguments = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected ShowMoveProjectMenuArguments object but received: ${t}`);
                                return Object.freeze({ location: e.WebProjectValidation.copyLocation(t.location) });
                            });
                    })((yt = e.WebProjectValidation || (e.WebProjectValidation = {}))),
                    (function (e) {
                        e.copyBeepEvent = (e) => {
                            if ("object" != typeof e || null === e) throw new Error(`Expected BeepEvent object but received: ${e}`);
                            return Object.freeze({ name: i.ServiceRuntimePrivate.Validation.copyString(e.name) });
                        };
                    })((St = e.ZzzTestingStreamsValidation || (e.ZzzTestingStreamsValidation = {}))),
                    (function (t) {
                        const r = new Set(["a", "b", "c"]);
                        (t.copyObjectStringEnum = (e) => {
                            if (!r.has(e)) throw new Error(`Expected valid value for enum but received: ${e}`);
                            return e;
                        }),
                            (t.copyObject = (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected Object object but received: ${t}`);
                                return Object.freeze({
                                    name: i.ServiceRuntimePrivate.Validation.copyString(t.name),
                                    stringEnum: e.ZzzTestingTypesValidation.copyObjectStringEnum(t.stringEnum),
                                    objectEnum: i.ServiceRuntimePrivate.Validation.copyOptional.bind(void 0, e.ZzzTestingTypesValidation.copyObjectEnum)(t.objectEnum),
                                });
                            });
                        const n = {
                            string: (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected non-null object but received: ${e}`);
                                return Object.freeze({ foo: "string", bar: i.ServiceRuntimePrivate.Validation.copyString(e.bar) });
                            },
                            integer: (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected non-null object but received: ${e}`);
                                return Object.freeze({ foo: "integer", count: i.ServiceRuntimePrivate.Validation.copyInteger(e.count) });
                            },
                            array: (t) => {
                                if ("object" != typeof t || null === t) throw new Error(`Expected non-null object but received: ${t}`);
                                return Object.freeze({ foo: "array", objects: i.ServiceRuntimePrivate.Validation.copyArray.bind(void 0, e.ZzzTestingTypesValidation.copyObject)(t.objects) });
                            },
                        };
                        (t.copyObjectEnumFoo = (e) => {
                            if ("string" != typeof e) throw new Error(`Expected string for foo but received: ${e}`);
                            if (!n[e]) throw new Error(`Expected valid value for foo but received: ${e}`);
                            return e;
                        }),
                            (t.copyObjectEnum = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected ObjectEnum object but received: ${e}`);
                                const t = e.foo;
                                if ("string" != typeof t) throw new Error(`Expected string for foo but received: ${e}`);
                                const r = n[t];
                                if (!r) throw new Error(`Expected valid value for foo but received: ${e}`);
                                return r(e);
                            }),
                            (t.copyMap = (e) => {
                                if ("object" != typeof e || null === e) throw new Error(`Expected Map object but received: ${e}`);
                                return Object.freeze({ stringMap: i.ServiceRuntimePrivate.Validation.copyMap.bind(void 0, i.ServiceRuntimePrivate.Validation.copyString, i.ServiceRuntimePrivate.Validation.copyInteger)(e.stringMap) });
                            });
                    })((bt = e.ZzzTestingTypesValidation || (e.ZzzTestingTypesValidation = {}))),
                    (function (e) {
                        e.copyBeepEvent = (e) => {
                            if ("object" != typeof e || null === e) throw new Error(`Expected BeepEvent object but received: ${e}`);
                            return Object.freeze({ name: i.ServiceRuntimePrivate.Validation.copyString(e.name) });
                        };
                    })((wt = e.ZzzTestingOnewayValidation || (e.ZzzTestingOnewayValidation = {})));
            })(t.ServiceRuntime || (t.ServiceRuntime = {}));
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(5),
            n = r(3),
            o = r(7),
            a = r(27),
            s = r(6),
            c = r(28);
        class ServiceManager {
            constructor(e = n.ServiceDebugging.log) {
                (this.log = e),
                    (this.expectWithoutDiscovery = (e, t, r = {}) => this.addRouter(t).expectWithoutDiscovery(e, r)),
                    (this.discover = async (e, t, r = {}) => this.addRouter(t).discover(e, r)),
                    (this.unregister = async (e) => {
                        const t = [];
                        for (const r of this.routers) r.channel === e && t.push(r);
                        if (t.length > 0) for (const r of t) await r.unregisterAllImplementations(), this.routers.delete(r), r.destroy();
                        else for (const r of this.routers) await r.unregisterImplementation(e);
                    }),
                    (this.routers = new Set()),
                    (this.addRouter = (e) => {
                        for (const r of this.routers) if (r.channel === e) return r;
                        const t = new Router(e, this.log);
                        return this.routers.add(t), t;
                    }),
                    (this.testable = {
                        onlyRouter: () => {
                            if (1 !== this.routers.size) throw new Error(`onlyRouter called on a ServiceManager with ${this.routers.size} routers, expected 1`);
                            return this.routers.values().next().value;
                        },
                    });
            }
            register(e) {
                return (function isImplementation(e) {
                    return void 0 !== e.service && void 0 !== e.implementation;
                })(e)
                    ? (this.addRouter(e.channel).registerImplementation(e.implementation, e.service),
                      () => {
                          this.unregister(e.implementation);
                      })
                    : (this.addRouter(e.channel),
                      () => {
                          this.unregister(e.channel);
                      });
            }
        }
        (t.ServiceManager = ServiceManager),
            (function (e) {
                let t;
                e.shared = function shared() {
                    var r;
                    return (t = null != t ? t : new e()), null !== (r = n.ServiceDebugging._sharedServiceManagerIfTesting()) && void 0 !== r ? r : t;
                };
            })((ServiceManager = t.ServiceManager || (t.ServiceManager = {})));
        class Router {
            constructor(e, t) {
                (this.channel = e),
                    (this.log = t),
                    (this.onMessage = (e) => {
                        try {
                            e.type === i.ServiceChannel.MessageType.Request
                                ? "oneway" === e.id
                                    ? this.onOnewayRequest(e)
                                    : this.onRequest(e)
                                : e.type === i.ServiceChannel.MessageType.Response
                                ? e.method === u.method
                                    ? this.onDiscoveryResponse(e)
                                    : this.onResponse(e)
                                : e.type === i.ServiceChannel.MessageType.Error
                                ? this.onErrorResponse(e)
                                : s.assertNever(e.type, new Error(`Unknown message: ${JSON.stringify(e)}`));
                        } catch (t) {
                            this.log.warn("☎️ onMessage", t);
                        }
                    }),
                    (this.waitingDiscoveryMap = {}),
                    (this.reflectDiscoveredServices = () => {
                        let e,
                            t = this.latestDiscoveryInfo ? Object.keys(this.latestDiscoveryInfo.services) : [];
                        this.channel.disabled && ((t = Object.keys(this.waitingDiscoveryMap)), (e = new o.ServiceError.ServiceNotFound()));
                        for (const r of t) {
                            const t = this.waitingDiscoveryMap[r];
                            t && ((this.waitingDiscoveryMap[r] = []), t.forEach((t) => (e ? t.reject(e) : t.resolve())));
                        }
                    }),
                    (this.onDiscoveryResponse = (e) => {
                        u.isValidInfo(e.body) ? ((this.latestDiscoveryInfo = e.body), this.reflectDiscoveredServices(), this.log.debug("↘️ Discovered services", e.body)) : this.log.warn("☎️ onDiscoveryResponse: invalid data", e.body),
                            e.id !== u.broadcastMessageId && this.onResponse(e);
                    }),
                    (this.broadcastDiscoveryInfo = (e) => {
                        const t = {};
                        for (const i in this.implementedServices) {
                            const e = this.implementedServices[i].service;
                            t[i] = { fingerprint: e.fingerprint };
                        }
                        const r = { services: t };
                        try {
                            this.channel.postMessage({ type: i.ServiceChannel.MessageType.Response, id: e || u.broadcastMessageId, serviceId: u.serviceId, method: u.method, body: r });
                        } catch {}
                    }),
                    (this.onewayPromise = Promise.resolve(void 0)),
                    (this.expectWithoutDiscovery = (e, t) => (
                        this.log.debug(`☎️ expectWithoutDiscovery ${e.id}`),
                        e.newOutgoingWrapper(t, async (t) => (t.oneway ? (this.postOnewayRequest(e.id, t), this.onewayPromise) : (await this.waitForDiscoveryInfo(), this.throwErrorIfBadService(e), this.postRequest(e.id, t))))
                    )),
                    (this.discover = async (e, { timeout: t = 3e4, ...r } = {}) => (
                        this.log.debug(`☎️ discover ${e.id}`),
                        await Promise.race([this.waitForDiscoveredService(e), new Promise((e, r) => c.setTimeout(() => r(this.latestDiscoveryInfo ? new o.ServiceError.ServiceNotFound() : new o.ServiceError.TimedOut()), t))]),
                        this.throwErrorIfBadService(e),
                        this.expectWithoutDiscovery(e, r)
                    )),
                    (this.throwErrorIfBadService = (e) => {
                        const t = this.latestDiscoveryInfo,
                            r = t && t ? t.services[e.id] : void 0;
                        if (!r) throw (this.log.warn(`☎️ Couldn't find service ${e.id}`, t), new o.ServiceError.ServiceNotFound());
                        if (r.fingerprint !== e.fingerprint)
                            throw (this.log.warn("☎️ Couldn't find service with required version fingerprint. Make sure both endpoints are using the same version of the Services package.", t), new o.ServiceError.ServiceNotCompatible());
                    }),
                    (this.postOnewayRequest = (e, t) => {
                        this.channel.postMessage({ type: i.ServiceChannel.MessageType.Request, id: "oneway", serviceId: e, method: t.method, body: t.argument });
                    }),
                    (this.postRequest = (e, t, r) => {
                        var n;
                        this.log.debug(`↗️ ${e}`, t);
                        const a = s.ServiceRuntimePrivate.newResolvablePromise(),
                            u = { type: i.ServiceChannel.MessageType.Request, id: s.ServiceRuntimePrivate.generateUniqueId(), serviceId: e, method: t.method, stream: l.toMessage(t.stream), body: t.argument };
                        this.waitingRequestsMap[u.id] = a;
                        const d = !(null !== (n = this.channel.disabled) && void 0 !== n && n);
                        return (
                            d ? this.channel.postMessage(u) : (r = 0),
                            "number" == typeof r &&
                                c.setTimeout(() => {
                                    !!this.waitingRequestsMap[u.id] &&
                                        this.onErrorResponse(
                                            { type: i.ServiceChannel.MessageType.Error, id: u.id, serviceId: u.serviceId, method: u.method, body: void 0 },
                                            d ? new o.ServiceError.TimedOut() : new o.ServiceError.ServiceNotFound()
                                        );
                                }, r),
                            a.then((e) => {
                                if (e && t.returnValidator)
                                    try {
                                        return t.returnValidator(e);
                                    } catch (r) {
                                        const e = s.ServiceRuntimePrivate.Validation.typeContextForError(r);
                                        throw new o.ServiceError.BadResponse((e ? `${e}: ` : "") + r.message);
                                    }
                                return e;
                            })
                        );
                    }),
                    (this.waitingRequestsMap = {}),
                    (this.onResponse = (e) => {
                        const t = this.waitingRequestsMap[e.id];
                        if (!t) return this.log.warn("☎️ onResponse: couldn't find request", e);
                        delete this.waitingRequestsMap[e.id], t.resolve(e.body);
                    }),
                    (this.onErrorResponse = (e, t) => {
                        const r = this.waitingRequestsMap[e.id];
                        if (!r) return this.log.warn("☎️ onErrorResponse: couldn't find request", e);
                        delete this.waitingRequestsMap[e.id];
                        const i = t || o.ServiceError.reconstructErrorResponse(e.body);
                        r.reject(i);
                    }),
                    (this.implementedServices = {}),
                    (this.registerImplementation = (e, t) => {
                        this.log.debug("☎️ registerImplementation", e);
                        const r = {};
                        for (const i in t.methods) {
                            const n = i,
                                a = e[n];
                            if ("function" != typeof a) throw new o.ServiceError.Implementation(`Implementation for ${t.id} doesn't correctly implement ${n}()`);
                            r[n] = a.bind(e);
                        }
                        (this.implementedServices[t.id] = { service: t, rawImplementation: e, implementation: Object.freeze(r) }), this.broadcastDiscoveryInfo();
                    }),
                    (this.unregisterImplementation = async (e) => {
                        const t = e === this.unregisterAllToken;
                        t || this.log.debug("☎️ unregisterImplementation", e);
                        let r = !1;
                        const i = [];
                        for (const n of Object.keys(this.implementedServices))
                            if (t || this.implementedServices[n].rawImplementation === e) {
                                delete this.implementedServices[n], (r = !0);
                                for (const [e, t] of Object.entries(this.requestedStreamsMap)) (null == t ? void 0 : t.serviceId) === n && i.push(e);
                            }
                        await this.cancelStreams(i, new o.ServiceError.ServiceGone()), r && this.broadcastDiscoveryInfo();
                    }),
                    (this.unregisterAllToken = {}),
                    (this.unregisterAllImplementations = async () => {
                        this.log.debug("☎️ unregisterAllImplementations"), await this.unregisterImplementation(this.unregisterAllToken);
                    }),
                    (this.requestedStreamsMap = {}),
                    (this.cancelStreams = async (e, t) => {
                        const r = [];
                        for (const i of e) {
                            const e = this.requestedStreamsMap[i];
                            delete this.requestedStreamsMap[i], e && e.iterator.throw && r.push(e.iterator.throw(t));
                        }
                        await Promise.all(r);
                    }),
                    (this.onRequest = async (e) => {
                        if (e.method === u.method) return void this.broadcastDiscoveryInfo(e.id);
                        let t,
                            r = i.ServiceChannel.MessageType.Response;
                        try {
                            const i = this.implementedServices[e.serviceId],
                                n = null == i ? void 0 : i.implementation;
                            if (!n) throw new o.ServiceError.BadRequest();
                            this.log.debug(`↘️ ${e.serviceId}`, e);
                            const s = n[e.method];
                            if (e.stream) {
                                const { id: r, method: n } = l.fromMessage(e.stream);
                                let c = this.requestedStreamsMap[r];
                                if ("next" === n) {
                                    if (!c) {
                                        const t = await s(e.body),
                                            n = a.ServiceStreamsPrivate.isServiceStreamOptions(e.body) ? e.body : void 0;
                                        (c = { iterator: t[Symbol.asyncIterator](n), serviceId: i.service.id }), (this.requestedStreamsMap[r] = c);
                                    }
                                    const n = await c.iterator.next();
                                    t = { done: n.done, value: n.value };
                                } else {
                                    if ("return" !== n) throw new o.ServiceError.BadRequest("Stream operations other than next() and return() are not yet supported");
                                    {
                                        delete this.requestedStreamsMap[r];
                                        const e = null == c ? void 0 : c.iterator.return;
                                        e && (await e()), (t = { done: !0, value: void 0 });
                                    }
                                }
                            } else t = await s(e.body);
                        } catch (n) {
                            this.log.warn("☎️ onRequest: error", e, n), (r = i.ServiceChannel.MessageType.Error), (t = o.ServiceError.toMessageBody(n));
                        } finally {
                            this.channel.postMessage({ type: r, id: e.id, serviceId: e.serviceId, method: e.method, body: t });
                        }
                    }),
                    (this.onOnewayRequest = (e) => {
                        try {
                            const t = this.implementedServices[e.serviceId],
                                r = null == t ? void 0 : t.implementation;
                            if (!r) throw new o.ServiceError.BadRequest();
                            this.log.debug(`↘️ ${e.serviceId}`, e), (0, r[e.method])(e.body);
                        } catch (t) {
                            this.log.warn("☎️ onOnewayRequest: error", e, t);
                        }
                    }),
                    (this.testable = { waitingRequestsMap: () => this.waitingRequestsMap }),
                    e.addMessageListener(this.onMessage);
            }
            destroy() {
                this.channel.removeMessageListener(this.onMessage);
            }
            async waitForDiscoveryInfo() {
                if (this.latestDiscoveryInfo) return this.latestDiscoveryInfo;
                if ((await this.postRequest(u.serviceId, { method: u.method }, 1e3), !this.latestDiscoveryInfo)) throw new o.ServiceError.ServiceNotFound();
                return this.latestDiscoveryInfo;
            }
            async waitForDiscoveredService(e) {
                const t = s.ServiceRuntimePrivate.newResolvablePromise(),
                    r = this.waitingDiscoveryMap[e.id] || [];
                return (this.waitingDiscoveryMap[e.id] = r), r.push(t), this.waitForDiscoveryInfo().catch(() => {}), this.reflectDiscoveredServices(), t;
            }
        }
        var u, l;
        !(function (e) {
            (e.serviceId = ""),
                (e.method = "#discover"),
                (e.broadcastMessageId = ""),
                (e.isValidInfo = function isValidInfo(e) {
                    return !(!e || !e.services || "object" != typeof e.services);
                });
        })(u || (u = {})),
            (function (e) {
                (e.fromMessage = function fromMessage(e) {
                    return e.startsWith("#return:") ? { id: e.substr("#return:".length), method: "return" } : e.startsWith("#throw:") ? { id: e.substr("#throw:".length), method: "throw" } : { id: e, method: "next" };
                }),
                    (e.toMessage = function toMessage(e) {
                        if (e)
                            switch (e.method) {
                                case "next":
                                    return e.id;
                                case "return":
                                    return "#return:" + e.id;
                                case "throw":
                                    return "#throw:" + e.id;
                                default:
                                    return;
                            }
                    });
            })(l || (l = {}));
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(6),
            n = r(7),
            o = r(3);
        t.ServiceEventEmitter = class ServiceEventEmitter {
            constructor() {
                (this.stream = (e) => this[Symbol.asyncIterator](e)),
                    (this.iterators = []),
                    (this.emit = (e) => {
                        this.latestValue = e;
                        for (const t of this.iterators) t.update(e);
                    }),
                    (this.latest = () => this.latestValue);
            }
            [Symbol.asyncIterator](e) {
                const t = i.ServiceRuntimePrivate.generateUniqueId();
                return new ServiceStreamIterator(
                    (r, i) => {
                        if ((this.iterators.push({ id: t, update: r, done: i }), "latest" === (null == e ? void 0 : e.replay))) {
                            if (!this.latestValue) throw new n.ServiceError.Implementation("ServiceEventEmitter received a new stream requesting the last value but no value has been emitted");
                            r(this.latestValue);
                        }
                    },
                    () => {
                        const e = this.iterators.findIndex((e) => e.id === t);
                        if (!(e >= 0)) throw new n.ServiceError.BadRequest(`ServiceEventEmitter couldn't find cancelled iterator with id: ${t}`);
                        this.iterators.splice(e, 1);
                    }
                );
            }
        };
        class ServiceStreamIterator {
            constructor(e, t) {
                (this.onIteratorEnd = t),
                    (this.log = o.ServiceDebugging.log.extend("ServiceStreamIterator")),
                    (this.hasAsyncIterator = !1),
                    (this.promises = []),
                    (this.doneResult = { done: !0, value: void 0 }),
                    (this.update = (e) => {
                        const { promises: t, returnedNextPromise: r } = this;
                        let o = t[this.promises.length - 1];
                        if (e && void 0 === o) {
                            if (!r) return void this.log.warn("lastPromise and returnedNextPromise should never both be undefined");
                            o = r;
                        }
                        void 0 === e
                            ? (null == o || o.resolve(this.doneResult), null == r || r.resolve(this.doneResult))
                            : e instanceof n.ServiceError
                            ? (null == o || o.reject(e), null == r || r.reject(e))
                            : (t.push(i.ServiceRuntimePrivate.newResolvablePromise()), null == o || o.resolve({ done: !1, value: e }));
                    }),
                    (this.next = async () => {
                        const e = this.promises.shift();
                        return (this.returnedNextPromise = e), e || this.doneResult;
                    }),
                    (this.return = async () => {
                        var e;
                        return this.update(void 0), null === (e = this.onIteratorEnd) || void 0 === e || e.call(this), this.doneResult;
                    }),
                    (this.throw = async (e) => {
                        var t;
                        return this.update(e), null === (t = this.onIteratorEnd) || void 0 === t || t.call(this), this.doneResult;
                    }),
                    (this.read = async (e) => {
                        for await (const t of this) await e(t);
                    }),
                    (this.cancel = async () => {
                        await this.return();
                    }),
                    (this.promises = [i.ServiceRuntimePrivate.newResolvablePromise()]),
                    e(this.update, this.update);
            }
            [Symbol.asyncIterator]() {
                if (this.hasAsyncIterator) throw new Error("ServiceStreamIterator.asyncIterator() may only be called once");
                return (this.hasAsyncIterator = !0), this;
            }
        }
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(5),
            n = r(3);
        t.MessagePortChannel = class MessagePortChannel {
            constructor(e) {
                (this.port = e),
                    (this.log = n.ServiceDebugging.log.extend("MessagePortChannel")),
                    (this.listeners = new Set()),
                    (this.onMessageEvent = (e) => {
                        this.log.debug(e);
                        const t = e.data;
                        if (i.ServiceChannel.isMessage(t)) for (const r of this.listeners) r(t);
                    });
            }
            postMessage(e) {
                this.log.debug("↗︎", e), this.port.postMessage(e);
            }
            addMessageListener(e) {
                0 === this.listeners.size && (this.port.start(), this.port.addEventListener("message", this.onMessageEvent, !1)), this.listeners.add(e);
            }
            removeMessageListener(e) {
                this.listeners.delete(e), 0 === this.listeners.size && this.port.removeEventListener("message", this.onMessageEvent, !1);
            }
        };
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(5),
            n = r(3),
            o = "undefined" == typeof window ? void 0 : window;
        class PostMessageChannel {
            constructor(e, t) {
                (this.target = e),
                    (this.trustedOrigin = c),
                    (this.listeners = new Set()),
                    (this.onMessageEvent = (e) => {
                        var t, r;
                        this.log.debug(e);
                        let n = !1;
                        if (e.source !== this.target) {
                            if (this !== a || e.source !== o || null === (t = e.data) || void 0 === t || !t.__sourceRepresentsParentFrame) return;
                            n = !0;
                        }
                        if (!n && e.origin !== this.trustedOrigin && "*" !== this.trustedOrigin)
                            throw this.trustedOrigin
                                ? new Error(`PostMessageChannel received a message with origin ${e.origin}, expected ${this.trustedOrigin}`)
                                : new Error(`PostMessageChannel received a message with origin ${e.origin}, but has not been configured with initializeTrustedOrigin`);
                        if (null === (r = this.interceptor) || void 0 === r ? void 0 : r.handleRawEvent(e)) return;
                        const s = e.data;
                        if (i.ServiceChannel.isMessage(s)) for (const i of this.listeners) i(s);
                    });
                const r = PostMessageChannel.targetRepresentingParentFrame;
                if (e === (o ? o.parent : void 0) || e === r) {
                    if (!s || void 0 !== a) throw new Error("PostMessageChannel.toParentFrame must be used instead of initializing with window.parent.");
                    if (!o)
                        return void (this.target = {
                            postMessage: (...e) => {
                                this.log.debug("postMessage to parent channel not running in a DOM environment: ", e);
                            },
                        });
                    o.parent !== o ? (this.target = o.parent) : ((this.target = r), (this.disabled = r.disabled));
                }
                t !== c && this.initializeTrustedOrigin(t);
            }
            get log() {
                var e;
                const t = null !== (e = this.lazyLog) && void 0 !== e ? e : n.ServiceDebugging.log.extend("PostMessageChannel");
                return (this.lazyLog = t), t;
            }
            static get toParentFrame() {
                return (s = !0), (a = null != a ? a : new PostMessageChannel(PostMessageChannel.targetRepresentingParentFrame, c)), (s = !1), a;
            }
            initializeTrustedOrigin(e) {
                if (this.trustedOrigin !== c && (this !== a || e !== this.trustedOrigin)) throw new Error("PostMessageChannel can only be initialized with a trusted origin once");
                if ("*" === e);
                else if (-1 === e.indexOf("://")) throw new Error(`PostMessageChannel can only be initialized with a concrete origin (https://...); received ${e}`);
                this.trustedOrigin = e;
            }
            postMessage(e) {
                this.log.debug("↗︎", e), this.target.postMessage(e, this.trustedOrigin);
            }
            addMessageListener(e) {
                0 === this.listeners.size && (null == o || o.addEventListener("message", this.onMessageEvent, !1)), this.listeners.add(e);
            }
            removeMessageListener(e) {
                this.listeners.delete(e), 0 === this.listeners.size && (null == o || o.removeEventListener("message", this.onMessageEvent, !1));
            }
            static interceptMessageEventsFromParentFrame(e) {
                this.toParentFrame.setInterceptor(e);
            }
            setInterceptor(e) {
                this.interceptor && this.removeMessageListener(this.interceptor.unusedMessageListenerOnlyForCounting),
                    (this.interceptor = e ? { handleRawEvent: e, unusedMessageListenerOnlyForCounting: () => {} } : void 0),
                    this.interceptor && this.addMessageListener(this.interceptor.unusedMessageListenerOnlyForCounting);
            }
        }
        (t.PostMessageChannel = PostMessageChannel),
            (PostMessageChannel.targetRepresentingParentFrame = (() => {
                var e, t, r, i, n;
                const a =
                    null !== (t = null === (e = o) || void 0 === e ? void 0 : e.__targetRepresentingParentFrame) && void 0 !== t
                        ? t
                        : null === (n = null === (i = null === (r = o) || void 0 === r ? void 0 : r.webkit) || void 0 === i ? void 0 : i.messageHandlers) || void 0 === n
                        ? void 0
                        : n.__targetRepresentingParentFrame;
                return {
                    disabled: !a,
                    postMessage: (...e) => {
                        if (!o) throw new Error("PostMessageChannel requires a DOM environment");
                        if (!a) throw new Error("Can't find window.parent or __targetRepresentingParentFrame message handler");
                        a.postMessage(...e);
                    },
                };
            })());
        let a,
            s = !1;
        const c = "data:origin-not-initialized";
        (t.channelToParentFrame = PostMessageChannel.toParentFrame), (t.channelToOpenerFrame = o && o.opener && o !== o.opener && o.parent === o ? new PostMessageChannel(o.opener, c) : t.channelToParentFrame);
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(5),
            n = r(3),
            o = r(28),
            a = r(29);
        t.SocketServerChannel = class SocketServerChannel {
            constructor(e) {
                (this.server = e),
                    (this.log = n.ServiceDebugging.log.extend("SocketServerChannel")),
                    (this.clientSockets = new Set()),
                    (this.onConnect = (e) => {
                        o.isSocketServerClient(e)
                            ? (this.log.debug("SocketServerChannel.onConnect"), this.clientSockets.add(e), e.on(a.socketMessageEventName, this.onMessageEvent))
                            : this.log.warn('Received something other than a socket on "connect"', e);
                    }),
                    (this.onMessageEvent = (e) => {
                        if ((this.log.debug("SocketServerChannel.onMessageEvent", e), i.ServiceChannel.isMessage(e))) for (const t of this.listeners) t(e);
                    }),
                    (this.listeners = new Set()),
                    this.log.debug("Constructing SocketServerChannel"),
                    this.server.on("connect", this.onConnect);
            }
            postMessage(e) {
                this.log.debug("SocketServerChannel.postMessage", e),
                    this.clientSockets.forEach((t) => {
                        t.emit(a.socketMessageEventName, e);
                    });
            }
            addMessageListener(e) {
                this.listeners.add(e);
            }
            removeMessageListener(e) {
                this.listeners.delete(e);
            }
        };
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(1),
            n = r(2),
            o = r(25);
        (t.assetAPI = function assetAPI(e) {
            return { getAssets: () => fetch(e).then((e) => e.json()) };
        }),
            (t.useAssetService = function useAssetService(e) {
                const t = i.useRef(i.useMemo(() => new o.AssetService(e), [e]));
                return (
                    i.useEffect(() => {
                        t.current.refresh().catch(n.unhandledError);
                    }, [t]),
                    t.current
                );
            });
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        t.AssetMap = class AssetMap {
            constructor() {
                (this.assets = new Map()), (this._hash = 0);
            }
            get hash() {
                return this._hash;
            }
            update(e) {
                for (const t of e) this.assets.set(t.key, t);
                this._hash++;
            }
            urlForKey(e, t) {
                e = (function stripExtension(e) {
                    const t = e.lastIndexOf(".");
                    return -1 === t ? e : e.substring(0, t);
                })(e);
                const r = this.assets.get(e);
                if (!r) return;
                let i = null;
                if (r.variants && void 0 !== t) for (const n of r.variants) n.maxSideSize < t || ((null === i || n.maxSideSize < i.maxSideSize) && (i = n));
                return i ? i.url : r.url;
            }
        };
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(30),
            n = /^node_modules\/(@[^/]+\/[^/]+|[^/]+)\/(.*)/;
        function packageResourceURL(e, t, r) {
            return `${e}/packages/${t}/latest/${r}`;
        }
        t.webAssetResolver = function webAssetResolver(e, t) {
            return (r, o) => {
                if (!r) return;
                const a = i.parseAssetReference(r);
                if (a) {
                    const { identifier: t, packageIdentifier: i } = a;
                    if (i) return packageResourceURL(e, i, t);
                    r = t;
                } else if (o.isFramerResourceURL)
                    return (function resolveFramerResourceURL(e, t) {
                        const r = t.replace(/%40/g, "@"),
                            i = n.exec(r);
                        if (i) {
                            const t = packageResourceURL(e, i[1], i[2]);
                            if (t) return t;
                        }
                        return r;
                    })(e, r);
                return t.urlForKey(r, o.size);
            };
        };
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(2);
        t.readAssetUpdatesStream = function readAssetUpdatesStream(e, t) {
            Promise.resolve(e)
                .then((e) => e.assetUpdatesStream({ replay: "latest" }).read(t))
                .catch(i.unhandledError);
        };
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.collectTokens = function collectTokens(e) {
                const t = {},
                    { depth: r, designJson: i } = e;
                if (r > 0 && i && i.root && i.root.tokens) {
                    const e = i.root.tokensIndex || Object.keys(i.root.tokens);
                    for (const r of e) t[r] = i.root.tokens[r];
                }
                return t;
            });
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(78),
            n = r(79),
            o = r(33),
            a = r(4),
            s = ["framer/useNavigate", "framer/useOpenURL", "framer/useLog"];
        function actionForKey(e) {
            switch (e) {
                case "framer/useNavigate":
                    return o.useNavigate;
                case "framer/useOpenURL":
                    return i.useOpenURL;
                case "framer/useLog":
                    return n.useLog;
            }
        }
        const c = {};
        for (const u of s) {
            const e = actionForKey(u),
                t = a.getActionControls(e);
            if (t && t.title && t.controls) {
                const r = { class: e, depth: 1, file: "", identifier: u, name: t.title, packageIdentifier: "framer", properties: t.controls, type: "action" };
                c[u] = r;
            }
        }
        t.addDefaultActions = function addDefaultActions(e, t) {
            Object.assign(e, c);
            const r = t.framer || [];
            (t.framer = r), r.push(...Object.values(c).map((e) => e.identifier));
        };
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(0),
            n = r(4);
        function useOpenURL(e) {
            return () => {
                const { url: t } = e;
                if (!t) return;
                const r = t.includes(":") ? t : `http://${t}`;
                window.open(r);
            };
        }
        (t.useOpenURL = useOpenURL), n.addActionControls(useOpenURL, "Open Link", { url: { type: i.ControlType.String, placeholder: "www.framer.com", title: "URL" } });
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(0),
            n = r(4);
        function useLog(e) {
            return (t) => {
                switch (e.type) {
                    case "event":
                        (function isReactEvent(e) {
                            return (
                                !!(function isObject(e) {
                                    return !!e && "object" == typeof e;
                                })(e) && "function" == typeof e.persist
                            );
                        })(t) && t.persist(),
                            console.log(t);
                        break;
                    case "message":
                        console.log(e.message);
                        break;
                    case "count":
                        console.count(e.message);
                }
            };
        }
        (t.useLog = useLog),
            n.addActionControls(useLog, "Console Log", {
                type: { type: i.ControlType.Enum, options: ["event", "message", "count"], optionTitles: ["Event", "Message", "Count"], defaultValue: "event", title: "Type" },
                message: { type: i.ControlType.String, title: "Message", hidden: (e) => "event" === e.type },
            });
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(0),
            n = r(13),
            o = r(23),
            a = r(34),
            s = r(36),
            c = { name: "framer", displayName: "framer", depth: 1, exportsObject: {}, dependencies: {}, sourceModules: {} },
            u = { name: n.BuiltInPackageIdentifier, displayName: "Built-in", depth: 1, exportsObject: {}, dependencies: {}, sourceModules: {} },
            l = {
                [n.BuiltInFramerComponentIdentifier.Stack]: o.entityDefinitionFromInfo({ name: s.stackComponentName, children: void 0, type: void 0 }, i.Stack, { packageInfo: c }),
                [n.BuiltInFramerComponentIdentifier.Scroll]: o.entityDefinitionFromInfo({ name: i.Scroll.name, children: !0, type: void 0 }, i.Scroll, { packageInfo: c }),
                [n.BuiltInFramerComponentIdentifier.Page]: o.entityDefinitionFromInfo({ name: i.Page.name, children: void 0, type: void 0 }, i.Page, { packageInfo: c }),
                [n.BuiltInFramerComponentIdentifier.Device]: o.entityDefinitionFromInfo({ name: "Device", children: void 0, type: void 0 }, a.DeviceCodeComponent, { packageInfo: u }),
            };
        t.addDefaultComponents = function addDefaultComponents(e) {
            Object.assign(e, l);
        };
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(0),
            n = r(1),
            o = r(35);
        function convertPropsToDeviceOptions({ preset: e, orientation: t, ...r }) {
            const i = o.devicePresets[e] || o.devicePresets["iphone-11-pro"] || Object.values(o.devicePresets)[0];
            return { ...o.deviceFromPreset(i, t), ...r };
        }
        function DeviceCodeComponent({ width: e, height: t, children: r, ...a }) {
            const s = convertPropsToDeviceOptions(a),
                c = r && r[0],
                u = c && n.isValidElement(c) ? n.cloneElement(c, { width: s.screenWidth, height: s.screenHeight }) : null,
                l = u && i.RenderTarget.current() !== i.RenderTarget.canvas ? n.createElement(i.Navigation, null, u) : u;
            return n.createElement(o.Device, { scaleTo: { width: e, height: t }, deviceOptions: s }, l);
        }
        (t.convertPropsToDeviceOptions = convertPropsToDeviceOptions), (t.DeviceCodeComponent = DeviceCodeComponent);
        const a = o.devicePresets["iphone-11-pro"],
            { deviceWidth: s, deviceHeight: c } = o.calculateDeviceSize(o.deviceFromPreset(a, "portrait")),
            u = { width: s, height: c, preset: "iphone-11-pro", orientation: "portrait", backgroundColor: "#09f0", theme: "dark", shadow: !0 };
        (DeviceCodeComponent.defaultProps = u),
            i.addPropertyControls(DeviceCodeComponent, {
                preset: { type: i.ControlType.Enum, options: Object.keys(o.devicePresets), optionTitles: Object.keys(o.devicePresets).map((e) => o.devicePresets[e].title) },
                orientation: { type: i.ControlType.Enum, displaySegmentedControl: !0, options: ["portrait", "landscape"], optionTitles: ["Portrait", "Landscape"] },
                theme: { type: i.ControlType.Enum, displaySegmentedControl: !0, options: ["light", "dark"], optionTitles: ["Light", "Dark"] },
                shadow: { type: i.ControlType.Boolean, enabledTitle: "On", disabledTitle: "Off" },
                backgroundColor: { type: i.ControlType.Color, title: "Background" },
                children: { title: "Content", type: i.ControlType.ComponentInstance },
            });
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(1),
            n = r(19),
            o = r(83),
            a = r(84);
        class PackageManager extends i.Component {
            constructor() {
                super(...arguments),
                    (this.state = { serverStoreData: null, triggeredPackages: o.List(), downloadingPackages: o.List(), failedPackages: o.List() }),
                    (this.pendingRequestServerStoreData = null),
                    (this.requestServerStoreData = () => {
                        n.default.send("ServerStoreData");
                    }),
                    (this.handleServerStoreData = (e) => {
                        null !== this.pendingRequestServerStoreData && (window.clearTimeout(this.pendingRequestServerStoreData), (this.pendingRequestServerStoreData = null)),
                            !a.isEqual(this.state.serverStoreData, e, !0) && this.setState({ serverStoreData: e });
                    });
            }
            componentDidMount() {
                this.props.requiredPackages.length && this.requestServerStoreData(), n.default.on("serverStoreData", this.handleServerStoreData);
            }
            componentWillUnmount() {
                n.default.off("serverStoreData", this.handleServerStoreData);
            }
            componentDidUpdate() {
                this.computePackageListings();
            }
            computePackageListings() {
                const { requiredPackages: e, installedPackages: t } = this.props,
                    { serverStoreData: r } = this.state;
                if (!e.length) return;
                if (!r) return void (null === this.pendingRequestServerStoreData && (this.pendingRequestServerStoreData = window.setTimeout(this.requestServerStoreData, 200)));
                const i = this.state.triggeredPackages.toJS(),
                    a = [],
                    s = [],
                    c = e.filter((e) => -1 === t.indexOf(e.package));
                for (; c.length; ) {
                    const e = c.pop();
                    if (!e) continue;
                    let t;
                    const r = i.findIndex((t) => !(!t || t.descriptor.package !== e.package));
                    if (-1 !== r) {
                        if (((t = i[r]), !t)) continue;
                        if ((t.retries > 3 && s.push(e), t.timestamp > Date.now() - 6e4)) {
                            a.push(e);
                            continue;
                        }
                    }
                    const o = !0,
                        u = Date.now();
                    if (t) t.retries++, (t.timestamp = u), n.default.send("addPackage", t.descriptor.package, o);
                    else {
                        const t = { timestamp: u, descriptor: e, retries: 0 };
                        i.push(t), n.default.send("addPackage", t.descriptor.package, o);
                    }
                    a.push(e);
                }
                const u = o.List(i),
                    l = o.List(s),
                    d = o.List(a);
                (l.equals(this.state.failedPackages) && d.equals(this.state.downloadingPackages)) ||
                    (this.setState({ failedPackages: l, triggeredPackages: u, downloadingPackages: d }), 0 === d.size && 0 === l.size && this.props.onPackagesResolved && this.props.onPackagesResolved()),
                    (l.size || d.size || r.tasks.size) && setTimeout(this.requestServerStoreData, 500);
            }
            render() {
                const { serverStoreData: e, failedPackages: t, downloadingPackages: r } = this.state;
                if (!e) return null;
                const n = e.tasks.size > 0,
                    o = t.isEmpty(),
                    a = r.isEmpty(),
                    u = r.size > 0 || (n && o && a);
                return i.createElement("div", { style: { ...s, opacity: u ? 1 : 0 } }, u && i.createElement("div", { className: "spinner", style: c }));
            }
        }
        t.PackageManager = PackageManager;
        const s = {
                position: "absolute",
                display: "block",
                color: "white",
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.9)",
                transition: "opacity 0.2s",
                opacity: 0,
                fontSize: "11px",
                lineHeight: "12px",
                WebkitFontSmoothing: "subpixel-antialiased",
                textAlign: "center",
                pointerEvents: "none",
            },
            c = {
                position: "absolute",
                left: "calc(50% - 6px)",
                top: "calc(50% - 6px)",
                width: 12,
                height: 12,
                backgroundColor: "white",
                WebkitMask:
                    "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAApNJREFUSA2tlUtLlFEYgEe7mtFFQ8NLFBG1SJAwahtiLVy5ceVSEPQH1LZf0Lp9FO1bdYNyI7gyBFcS2kAzilYq3sfxeYZ55Zv6FGfohWfOd97vnPd23u9MXeZoaeb1Q7gPHXAFzsAS5GACxiEPqVKXqs1kmtAPQi+cAtedToz1PJ8ExxPwDl7CAlRImoN7rBiF86ABHTiGAzMIh8n3O+ifwWc4EL0n5TGTYQijvjNSxbUadozInUeGZ3nuh1WYgpIkM+hGMwYajAgdrfUn+AaLoLTCAxiAOxCZxL4RdB+gZMjxEjwHo4hS8Jh5DR9hz0mKaNizegoNEI7Wee6FXJTISG6AUgDr+QImoAiHie+mwZJow/PRps4uwnsnRj8Epqc4voVJJ8eULOtW4BFYYjPpgjc+3IWI2sh/wFeoVl6xYQ48dDGLfjOwc/ygQqz595hUMVouS9QHBm4l6k3HWpnBLqicgVrlCxujSbR1Swd+UDpQYRS/oVaZZ2MWwlZBB9Zdxf+QTYw8SRgq6sAvz7vH6JULEB9USVHFjzZskgPRQR4ayxoXXIdaHdg9HrB2rErByWxZERnYtrWUzD0esDbtTmXPhzXwHrKLxEUbYGbVyDkWWwkdadfqbPmwDXZSCyh2VAf8BM/nOOJH5Y0QopMt2I5U/KO4DZZJB47XwEX+ex0mGroMV8sLwp56gyuGwiyW4SZ4c8bt2cZzO7jBNeqtsRHbeZ1g9krsMbhfYPv/c5gecA+4yAVuitFszE5Hjva872OMdXagF19JIoOYWyozMTI3J0tmA6gLvXPfO1cc/XOqOLe/HbjwD8yCXRD3VNJROEgatiRZMJsKsbZHia3nAdphtq8fkiWyXJbBe8uM1aXKPouNnz2Bm1kwAAAAAElFTkSuQmCC)",
                WebkitMaskSize: 12,
            };
    },
    function (e, t, r) {
        e.exports = (function () {
            "use strict";
            var e = Array.prototype.slice;
            function createClass(e, t) {
                t && (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e);
            }
            function Iterable(e) {
                return isIterable(e) ? e : Seq(e);
            }
            function KeyedIterable(e) {
                return isKeyed(e) ? e : KeyedSeq(e);
            }
            function IndexedIterable(e) {
                return isIndexed(e) ? e : IndexedSeq(e);
            }
            function SetIterable(e) {
                return isIterable(e) && !isAssociative(e) ? e : SetSeq(e);
            }
            function isIterable(e) {
                return !(!e || !e[t]);
            }
            function isKeyed(e) {
                return !(!e || !e[r]);
            }
            function isIndexed(e) {
                return !(!e || !e[i]);
            }
            function isAssociative(e) {
                return isKeyed(e) || isIndexed(e);
            }
            function isOrdered(e) {
                return !(!e || !e[n]);
            }
            createClass(KeyedIterable, Iterable),
                createClass(IndexedIterable, Iterable),
                createClass(SetIterable, Iterable),
                (Iterable.isIterable = isIterable),
                (Iterable.isKeyed = isKeyed),
                (Iterable.isIndexed = isIndexed),
                (Iterable.isAssociative = isAssociative),
                (Iterable.isOrdered = isOrdered),
                (Iterable.Keyed = KeyedIterable),
                (Iterable.Indexed = IndexedIterable),
                (Iterable.Set = SetIterable);
            var t = "@@__IMMUTABLE_ITERABLE__@@",
                r = "@@__IMMUTABLE_KEYED__@@",
                i = "@@__IMMUTABLE_INDEXED__@@",
                n = "@@__IMMUTABLE_ORDERED__@@",
                o = {},
                a = { value: !1 },
                s = { value: !1 };
            function MakeRef(e) {
                return (e.value = !1), e;
            }
            function SetRef(e) {
                e && (e.value = !0);
            }
            function OwnerID() {}
            function arrCopy(e, t) {
                t = t || 0;
                for (var r = Math.max(0, e.length - t), i = new Array(r), n = 0; n < r; n++) i[n] = e[n + t];
                return i;
            }
            function ensureSize(e) {
                return void 0 === e.size && (e.size = e.__iterate(returnTrue)), e.size;
            }
            function wrapIndex(e, t) {
                if ("number" != typeof t) {
                    var r = t >>> 0;
                    if ("" + r !== t || 4294967295 === r) return NaN;
                    t = r;
                }
                return t < 0 ? ensureSize(e) + t : t;
            }
            function returnTrue() {
                return !0;
            }
            function wholeSlice(e, t, r) {
                return (0 === e || (void 0 !== r && e <= -r)) && (void 0 === t || (void 0 !== r && t >= r));
            }
            function resolveBegin(e, t) {
                return resolveIndex(e, t, 0);
            }
            function resolveEnd(e, t) {
                return resolveIndex(e, t, t);
            }
            function resolveIndex(e, t, r) {
                return void 0 === e ? r : e < 0 ? Math.max(0, t + e) : void 0 === t ? e : Math.min(t, e);
            }
            var c,
                u,
                l,
                d = "function" == typeof Symbol && Symbol.iterator,
                p = d || "@@iterator";
            function Iterator(e) {
                this.next = e;
            }
            function iteratorValue(e, t, r, i) {
                var n = 0 === e ? t : 1 === e ? r : [t, r];
                return i ? (i.value = n) : (i = { value: n, done: !1 }), i;
            }
            function iteratorDone() {
                return { value: void 0, done: !0 };
            }
            function hasIterator(e) {
                return !!getIteratorFn(e);
            }
            function isIterator(e) {
                return e && "function" == typeof e.next;
            }
            function getIterator(e) {
                var t = getIteratorFn(e);
                return t && t.call(e);
            }
            function getIteratorFn(e) {
                var t = e && ((d && e[d]) || e["@@iterator"]);
                if ("function" == typeof t) return t;
            }
            function isArrayLike(e) {
                return e && "number" == typeof e.length;
            }
            function Seq(e) {
                return null == e
                    ? emptySequence()
                    : isIterable(e)
                    ? e.toSeq()
                    : (function seqFromValue(e) {
                          var t = maybeIndexedSeqFromValue(e) || ("object" == typeof e && new ObjectSeq(e));
                          if (!t) throw new TypeError("Expected Array or iterable object of values, or keyed object: " + e);
                          return t;
                      })(e);
            }
            function KeyedSeq(e) {
                return null == e ? emptySequence().toKeyedSeq() : isIterable(e) ? (isKeyed(e) ? e.toSeq() : e.fromEntrySeq()) : keyedSeqFromValue(e);
            }
            function IndexedSeq(e) {
                return null == e ? emptySequence() : isIterable(e) ? (isKeyed(e) ? e.entrySeq() : e.toIndexedSeq()) : indexedSeqFromValue(e);
            }
            function SetSeq(e) {
                return (null == e ? emptySequence() : isIterable(e) ? (isKeyed(e) ? e.entrySeq() : e) : indexedSeqFromValue(e)).toSetSeq();
            }
            function ArraySeq(e) {
                (this._array = e), (this.size = e.length);
            }
            function ObjectSeq(e) {
                var t = Object.keys(e);
                (this._object = e), (this._keys = t), (this.size = t.length);
            }
            function IterableSeq(e) {
                (this._iterable = e), (this.size = e.length || e.size);
            }
            function IteratorSeq(e) {
                (this._iterator = e), (this._iteratorCache = []);
            }
            function isSeq(e) {
                return !(!e || !e["@@__IMMUTABLE_SEQ__@@"]);
            }
            function emptySequence() {
                return c || (c = new ArraySeq([]));
            }
            function keyedSeqFromValue(e) {
                var t = Array.isArray(e) ? new ArraySeq(e).fromEntrySeq() : isIterator(e) ? new IteratorSeq(e).fromEntrySeq() : hasIterator(e) ? new IterableSeq(e).fromEntrySeq() : "object" == typeof e ? new ObjectSeq(e) : void 0;
                if (!t) throw new TypeError("Expected Array or iterable object of [k, v] entries, or keyed object: " + e);
                return t;
            }
            function indexedSeqFromValue(e) {
                var t = maybeIndexedSeqFromValue(e);
                if (!t) throw new TypeError("Expected Array or iterable object of values: " + e);
                return t;
            }
            function maybeIndexedSeqFromValue(e) {
                return isArrayLike(e) ? new ArraySeq(e) : isIterator(e) ? new IteratorSeq(e) : hasIterator(e) ? new IterableSeq(e) : void 0;
            }
            function seqIterate(e, t, r, i) {
                var n = e._cache;
                if (n) {
                    for (var o = n.length - 1, a = 0; a <= o; a++) {
                        var s = n[r ? o - a : a];
                        if (!1 === t(s[1], i ? s[0] : a, e)) return a + 1;
                    }
                    return a;
                }
                return e.__iterateUncached(t, r);
            }
            function seqIterator(e, t, r, i) {
                var n = e._cache;
                if (n) {
                    var o = n.length - 1,
                        a = 0;
                    return new Iterator(function () {
                        var e = n[r ? o - a : a];
                        return a++ > o ? { value: void 0, done: !0 } : iteratorValue(t, i ? e[0] : a - 1, e[1]);
                    });
                }
                return e.__iteratorUncached(t, r);
            }
            function fromJS(e, t) {
                return t
                    ? (function fromJSWith(e, t, r, i) {
                          return Array.isArray(t)
                              ? e.call(
                                    i,
                                    r,
                                    IndexedSeq(t).map(function (r, i) {
                                        return fromJSWith(e, r, i, t);
                                    })
                                )
                              : isPlainObj(t)
                              ? e.call(
                                    i,
                                    r,
                                    KeyedSeq(t).map(function (r, i) {
                                        return fromJSWith(e, r, i, t);
                                    })
                                )
                              : t;
                      })(t, e, "", { "": e })
                    : fromJSDefault(e);
            }
            function fromJSDefault(e) {
                return Array.isArray(e) ? IndexedSeq(e).map(fromJSDefault).toList() : isPlainObj(e) ? KeyedSeq(e).map(fromJSDefault).toMap() : e;
            }
            function isPlainObj(e) {
                return e && (e.constructor === Object || void 0 === e.constructor);
            }
            function is(e, t) {
                if (e === t || (e != e && t != t)) return !0;
                if (!e || !t) return !1;
                if ("function" == typeof e.valueOf && "function" == typeof t.valueOf) {
                    if ((e = e.valueOf()) === (t = t.valueOf()) || (e != e && t != t)) return !0;
                    if (!e || !t) return !1;
                }
                return !("function" != typeof e.equals || "function" != typeof t.equals || !e.equals(t));
            }
            function deepEqual(e, t) {
                if (e === t) return !0;
                if (
                    !isIterable(t) ||
                    (void 0 !== e.size && void 0 !== t.size && e.size !== t.size) ||
                    (void 0 !== e.__hash && void 0 !== t.__hash && e.__hash !== t.__hash) ||
                    isKeyed(e) !== isKeyed(t) ||
                    isIndexed(e) !== isIndexed(t) ||
                    isOrdered(e) !== isOrdered(t)
                )
                    return !1;
                if (0 === e.size && 0 === t.size) return !0;
                var r = !isAssociative(e);
                if (isOrdered(e)) {
                    var i = e.entries();
                    return (
                        t.every(function (e, t) {
                            var n = i.next().value;
                            return n && is(n[1], e) && (r || is(n[0], t));
                        }) && i.next().done
                    );
                }
                var n = !1;
                if (void 0 === e.size)
                    if (void 0 === t.size) "function" == typeof e.cacheResult && e.cacheResult();
                    else {
                        n = !0;
                        var a = e;
                        (e = t), (t = a);
                    }
                var s = !0,
                    c = t.__iterate(function (t, i) {
                        if (r ? !e.has(t) : n ? !is(t, e.get(i, o)) : !is(e.get(i, o), t)) return (s = !1), !1;
                    });
                return s && e.size === c;
            }
            function Repeat(e, t) {
                if (!(this instanceof Repeat)) return new Repeat(e, t);
                if (((this._value = e), (this.size = void 0 === t ? 1 / 0 : Math.max(0, t)), 0 === this.size)) {
                    if (u) return u;
                    u = this;
                }
            }
            function invariant(e, t) {
                if (!e) throw new Error(t);
            }
            function Range(e, t, r) {
                if (!(this instanceof Range)) return new Range(e, t, r);
                if (
                    (invariant(0 !== r, "Cannot step a Range by 0"),
                    (e = e || 0),
                    void 0 === t && (t = 1 / 0),
                    (r = void 0 === r ? 1 : Math.abs(r)),
                    t < e && (r = -r),
                    (this._start = e),
                    (this._end = t),
                    (this._step = r),
                    (this.size = Math.max(0, Math.ceil((t - e) / r - 1) + 1)),
                    0 === this.size)
                ) {
                    if (l) return l;
                    l = this;
                }
            }
            function Collection() {
                throw TypeError("Abstract");
            }
            function KeyedCollection() {}
            function IndexedCollection() {}
            function SetCollection() {}
            (Iterator.prototype.toString = function () {
                return "[Iterator]";
            }),
                (Iterator.KEYS = 0),
                (Iterator.VALUES = 1),
                (Iterator.ENTRIES = 2),
                (Iterator.prototype.inspect = Iterator.prototype.toSource = function () {
                    return this.toString();
                }),
                (Iterator.prototype[p] = function () {
                    return this;
                }),
                createClass(Seq, Iterable),
                (Seq.of = function () {
                    return Seq(arguments);
                }),
                (Seq.prototype.toSeq = function () {
                    return this;
                }),
                (Seq.prototype.toString = function () {
                    return this.__toString("Seq {", "}");
                }),
                (Seq.prototype.cacheResult = function () {
                    return !this._cache && this.__iterateUncached && ((this._cache = this.entrySeq().toArray()), (this.size = this._cache.length)), this;
                }),
                (Seq.prototype.__iterate = function (e, t) {
                    return seqIterate(this, e, t, !0);
                }),
                (Seq.prototype.__iterator = function (e, t) {
                    return seqIterator(this, e, t, !0);
                }),
                createClass(KeyedSeq, Seq),
                (KeyedSeq.prototype.toKeyedSeq = function () {
                    return this;
                }),
                createClass(IndexedSeq, Seq),
                (IndexedSeq.of = function () {
                    return IndexedSeq(arguments);
                }),
                (IndexedSeq.prototype.toIndexedSeq = function () {
                    return this;
                }),
                (IndexedSeq.prototype.toString = function () {
                    return this.__toString("Seq [", "]");
                }),
                (IndexedSeq.prototype.__iterate = function (e, t) {
                    return seqIterate(this, e, t, !1);
                }),
                (IndexedSeq.prototype.__iterator = function (e, t) {
                    return seqIterator(this, e, t, !1);
                }),
                createClass(SetSeq, Seq),
                (SetSeq.of = function () {
                    return SetSeq(arguments);
                }),
                (SetSeq.prototype.toSetSeq = function () {
                    return this;
                }),
                (Seq.isSeq = isSeq),
                (Seq.Keyed = KeyedSeq),
                (Seq.Set = SetSeq),
                (Seq.Indexed = IndexedSeq),
                (Seq.prototype["@@__IMMUTABLE_SEQ__@@"] = !0),
                createClass(ArraySeq, IndexedSeq),
                (ArraySeq.prototype.get = function (e, t) {
                    return this.has(e) ? this._array[wrapIndex(this, e)] : t;
                }),
                (ArraySeq.prototype.__iterate = function (e, t) {
                    for (var r = this._array, i = r.length - 1, n = 0; n <= i; n++) if (!1 === e(r[t ? i - n : n], n, this)) return n + 1;
                    return n;
                }),
                (ArraySeq.prototype.__iterator = function (e, t) {
                    var r = this._array,
                        i = r.length - 1,
                        n = 0;
                    return new Iterator(function () {
                        return n > i ? { value: void 0, done: !0 } : iteratorValue(e, n, r[t ? i - n++ : n++]);
                    });
                }),
                createClass(ObjectSeq, KeyedSeq),
                (ObjectSeq.prototype.get = function (e, t) {
                    return void 0 === t || this.has(e) ? this._object[e] : t;
                }),
                (ObjectSeq.prototype.has = function (e) {
                    return this._object.hasOwnProperty(e);
                }),
                (ObjectSeq.prototype.__iterate = function (e, t) {
                    for (var r = this._object, i = this._keys, n = i.length - 1, o = 0; o <= n; o++) {
                        var a = i[t ? n - o : o];
                        if (!1 === e(r[a], a, this)) return o + 1;
                    }
                    return o;
                }),
                (ObjectSeq.prototype.__iterator = function (e, t) {
                    var r = this._object,
                        i = this._keys,
                        n = i.length - 1,
                        o = 0;
                    return new Iterator(function () {
                        var a = i[t ? n - o : o];
                        return o++ > n ? { value: void 0, done: !0 } : iteratorValue(e, a, r[a]);
                    });
                }),
                (ObjectSeq.prototype[n] = !0),
                createClass(IterableSeq, IndexedSeq),
                (IterableSeq.prototype.__iterateUncached = function (e, t) {
                    if (t) return this.cacheResult().__iterate(e, t);
                    var r = getIterator(this._iterable),
                        i = 0;
                    if (isIterator(r)) for (var n; !(n = r.next()).done && !1 !== e(n.value, i++, this); );
                    return i;
                }),
                (IterableSeq.prototype.__iteratorUncached = function (e, t) {
                    if (t) return this.cacheResult().__iterator(e, t);
                    var r = getIterator(this._iterable);
                    if (!isIterator(r)) return new Iterator(iteratorDone);
                    var i = 0;
                    return new Iterator(function () {
                        var t = r.next();
                        return t.done ? t : iteratorValue(e, i++, t.value);
                    });
                }),
                createClass(IteratorSeq, IndexedSeq),
                (IteratorSeq.prototype.__iterateUncached = function (e, t) {
                    if (t) return this.cacheResult().__iterate(e, t);
                    for (var r, i = this._iterator, n = this._iteratorCache, o = 0; o < n.length; ) if (!1 === e(n[o], o++, this)) return o;
                    for (; !(r = i.next()).done; ) {
                        var a = r.value;
                        if (((n[o] = a), !1 === e(a, o++, this))) break;
                    }
                    return o;
                }),
                (IteratorSeq.prototype.__iteratorUncached = function (e, t) {
                    if (t) return this.cacheResult().__iterator(e, t);
                    var r = this._iterator,
                        i = this._iteratorCache,
                        n = 0;
                    return new Iterator(function () {
                        if (n >= i.length) {
                            var t = r.next();
                            if (t.done) return t;
                            i[n] = t.value;
                        }
                        return iteratorValue(e, n, i[n++]);
                    });
                }),
                createClass(Repeat, IndexedSeq),
                (Repeat.prototype.toString = function () {
                    return 0 === this.size ? "Repeat []" : "Repeat [ " + this._value + " " + this.size + " times ]";
                }),
                (Repeat.prototype.get = function (e, t) {
                    return this.has(e) ? this._value : t;
                }),
                (Repeat.prototype.includes = function (e) {
                    return is(this._value, e);
                }),
                (Repeat.prototype.slice = function (e, t) {
                    var r = this.size;
                    return wholeSlice(e, t, r) ? this : new Repeat(this._value, resolveEnd(t, r) - resolveBegin(e, r));
                }),
                (Repeat.prototype.reverse = function () {
                    return this;
                }),
                (Repeat.prototype.indexOf = function (e) {
                    return is(this._value, e) ? 0 : -1;
                }),
                (Repeat.prototype.lastIndexOf = function (e) {
                    return is(this._value, e) ? this.size : -1;
                }),
                (Repeat.prototype.__iterate = function (e, t) {
                    for (var r = 0; r < this.size; r++) if (!1 === e(this._value, r, this)) return r + 1;
                    return r;
                }),
                (Repeat.prototype.__iterator = function (e, t) {
                    var r = this,
                        i = 0;
                    return new Iterator(function () {
                        return i < r.size ? iteratorValue(e, i++, r._value) : { value: void 0, done: !0 };
                    });
                }),
                (Repeat.prototype.equals = function (e) {
                    return e instanceof Repeat ? is(this._value, e._value) : deepEqual(e);
                }),
                createClass(Range, IndexedSeq),
                (Range.prototype.toString = function () {
                    return 0 === this.size ? "Range []" : "Range [ " + this._start + "..." + this._end + (1 !== this._step ? " by " + this._step : "") + " ]";
                }),
                (Range.prototype.get = function (e, t) {
                    return this.has(e) ? this._start + wrapIndex(this, e) * this._step : t;
                }),
                (Range.prototype.includes = function (e) {
                    var t = (e - this._start) / this._step;
                    return t >= 0 && t < this.size && t === Math.floor(t);
                }),
                (Range.prototype.slice = function (e, t) {
                    return wholeSlice(e, t, this.size) ? this : ((e = resolveBegin(e, this.size)), (t = resolveEnd(t, this.size)) <= e ? new Range(0, 0) : new Range(this.get(e, this._end), this.get(t, this._end), this._step));
                }),
                (Range.prototype.indexOf = function (e) {
                    var t = e - this._start;
                    if (t % this._step == 0) {
                        var r = t / this._step;
                        if (r >= 0 && r < this.size) return r;
                    }
                    return -1;
                }),
                (Range.prototype.lastIndexOf = function (e) {
                    return this.indexOf(e);
                }),
                (Range.prototype.__iterate = function (e, t) {
                    for (var r = this.size - 1, i = this._step, n = t ? this._start + r * i : this._start, o = 0; o <= r; o++) {
                        if (!1 === e(n, o, this)) return o + 1;
                        n += t ? -i : i;
                    }
                    return o;
                }),
                (Range.prototype.__iterator = function (e, t) {
                    var r = this.size - 1,
                        i = this._step,
                        n = t ? this._start + r * i : this._start,
                        o = 0;
                    return new Iterator(function () {
                        var a = n;
                        return (n += t ? -i : i), o > r ? { value: void 0, done: !0 } : iteratorValue(e, o++, a);
                    });
                }),
                (Range.prototype.equals = function (e) {
                    return e instanceof Range ? this._start === e._start && this._end === e._end && this._step === e._step : deepEqual(this, e);
                }),
                createClass(Collection, Iterable),
                createClass(KeyedCollection, Collection),
                createClass(IndexedCollection, Collection),
                createClass(SetCollection, Collection),
                (Collection.Keyed = KeyedCollection),
                (Collection.Indexed = IndexedCollection),
                (Collection.Set = SetCollection);
            var f =
                "function" == typeof Math.imul && -2 === Math.imul(4294967295, 2)
                    ? Math.imul
                    : function imul(e, t) {
                          var r = 65535 & (e |= 0),
                              i = 65535 & (t |= 0);
                          return (r * i + ((((e >>> 16) * i + r * (t >>> 16)) << 16) >>> 0)) | 0;
                      };
            function smi(e) {
                return ((e >>> 1) & 1073741824) | (3221225471 & e);
            }
            function hash(e) {
                if (!1 === e || null == e) return 0;
                if ("function" == typeof e.valueOf && (!1 === (e = e.valueOf()) || null == e)) return 0;
                if (!0 === e) return 1;
                var t = typeof e;
                if ("number" === t) {
                    if (e != e || e === 1 / 0) return 0;
                    var r = 0 | e;
                    for (r !== e && (r ^= 4294967295 * e); e > 4294967295; ) r ^= e /= 4294967295;
                    return smi(r);
                }
                if ("string" === t)
                    return e.length > b
                        ? (function cachedHashString(e) {
                              var t = _[e];
                              return void 0 === t && ((t = hashString(e)), P === w && ((P = 0), (_ = {})), P++, (_[e] = t)), t;
                          })(e)
                        : hashString(e);
                if ("function" == typeof e.hashCode) return e.hashCode();
                if ("object" === t)
                    return (function hashJSObj(e) {
                        var t;
                        if (m && void 0 !== (t = v.get(e))) return t;
                        if (void 0 !== (t = e[S])) return t;
                        if (!g) {
                            if (void 0 !== (t = e.propertyIsEnumerable && e.propertyIsEnumerable[S])) return t;
                            if (
                                void 0 !==
                                (t = (function getIENodeHash(e) {
                                    if (e && e.nodeType > 0)
                                        switch (e.nodeType) {
                                            case 1:
                                                return e.uniqueID;
                                            case 9:
                                                return e.documentElement && e.documentElement.uniqueID;
                                        }
                                })(e))
                            )
                                return t;
                        }
                        if (((t = ++y), 1073741824 & y && (y = 0), m)) v.set(e, t);
                        else {
                            if (void 0 !== h && !1 === h(e)) throw new Error("Non-extensible objects are not allowed as keys.");
                            if (g) Object.defineProperty(e, S, { enumerable: !1, configurable: !1, writable: !1, value: t });
                            else if (void 0 !== e.propertyIsEnumerable && e.propertyIsEnumerable === e.constructor.prototype.propertyIsEnumerable)
                                (e.propertyIsEnumerable = function () {
                                    return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
                                }),
                                    (e.propertyIsEnumerable[S] = t);
                            else {
                                if (void 0 === e.nodeType) throw new Error("Unable to set a non-enumerable property on object.");
                                e[S] = t;
                            }
                        }
                        return t;
                    })(e);
                if ("function" == typeof e.toString) return hashString(e.toString());
                throw new Error("Value type " + t + " cannot be hashed.");
            }
            function hashString(e) {
                for (var t = 0, r = 0; r < e.length; r++) t = (31 * t + e.charCodeAt(r)) | 0;
                return smi(t);
            }
            var v,
                h = Object.isExtensible,
                g = (function () {
                    try {
                        return Object.defineProperty({}, "@", {}), !0;
                    } catch (e) {
                        return !1;
                    }
                })(),
                m = "function" == typeof WeakMap;
            m && (v = new WeakMap());
            var y = 0,
                S = "__immutablehash__";
            "function" == typeof Symbol && (S = Symbol(S));
            var b = 16,
                w = 255,
                P = 0,
                _ = {};
            function assertNotInfinite(e) {
                invariant(e !== 1 / 0, "Cannot perform this action with an infinite size.");
            }
            function Map(e) {
                return null == e
                    ? emptyMap()
                    : isMap(e) && !isOrdered(e)
                    ? e
                    : emptyMap().withMutations(function (t) {
                          var r = KeyedIterable(e);
                          assertNotInfinite(r.size),
                              r.forEach(function (e, r) {
                                  return t.set(r, e);
                              });
                      });
            }
            function isMap(e) {
                return !(!e || !e[E]);
            }
            createClass(Map, KeyedCollection),
                (Map.of = function () {
                    var t = e.call(arguments, 0);
                    return emptyMap().withMutations(function (e) {
                        for (var r = 0; r < t.length; r += 2) {
                            if (r + 1 >= t.length) throw new Error("Missing value for key: " + t[r]);
                            e.set(t[r], t[r + 1]);
                        }
                    });
                }),
                (Map.prototype.toString = function () {
                    return this.__toString("Map {", "}");
                }),
                (Map.prototype.get = function (e, t) {
                    return this._root ? this._root.get(0, void 0, e, t) : t;
                }),
                (Map.prototype.set = function (e, t) {
                    return updateMap(this, e, t);
                }),
                (Map.prototype.setIn = function (e, t) {
                    return this.updateIn(e, o, function () {
                        return t;
                    });
                }),
                (Map.prototype.remove = function (e) {
                    return updateMap(this, e, o);
                }),
                (Map.prototype.deleteIn = function (e) {
                    return this.updateIn(e, function () {
                        return o;
                    });
                }),
                (Map.prototype.update = function (e, t, r) {
                    return 1 === arguments.length ? e(this) : this.updateIn([e], t, r);
                }),
                (Map.prototype.updateIn = function (e, t, r) {
                    r || ((r = t), (t = void 0));
                    var i = (function updateInDeepMap(e, t, r, i) {
                        var n = e === o,
                            a = t.next();
                        if (a.done) {
                            var s = n ? r : e,
                                c = i(s);
                            return c === s ? e : c;
                        }
                        invariant(n || (e && e.set), "invalid keyPath");
                        var u = a.value,
                            l = n ? o : e.get(u, o),
                            d = updateInDeepMap(l, t, r, i);
                        return d === l ? e : d === o ? e.remove(u) : (n ? emptyMap() : e).set(u, d);
                    })(this, forceIterator(e), t, r);
                    return i === o ? void 0 : i;
                }),
                (Map.prototype.clear = function () {
                    return 0 === this.size ? this : this.__ownerID ? ((this.size = 0), (this._root = null), (this.__hash = void 0), (this.__altered = !0), this) : emptyMap();
                }),
                (Map.prototype.merge = function () {
                    return mergeIntoMapWith(this, void 0, arguments);
                }),
                (Map.prototype.mergeWith = function (t) {
                    var r = e.call(arguments, 1);
                    return mergeIntoMapWith(this, t, r);
                }),
                (Map.prototype.mergeIn = function (t) {
                    var r = e.call(arguments, 1);
                    return this.updateIn(t, emptyMap(), function (e) {
                        return "function" == typeof e.merge ? e.merge.apply(e, r) : r[r.length - 1];
                    });
                }),
                (Map.prototype.mergeDeep = function () {
                    return mergeIntoMapWith(this, deepMerger, arguments);
                }),
                (Map.prototype.mergeDeepWith = function (t) {
                    var r = e.call(arguments, 1);
                    return mergeIntoMapWith(this, deepMergerWith(t), r);
                }),
                (Map.prototype.mergeDeepIn = function (t) {
                    var r = e.call(arguments, 1);
                    return this.updateIn(t, emptyMap(), function (e) {
                        return "function" == typeof e.mergeDeep ? e.mergeDeep.apply(e, r) : r[r.length - 1];
                    });
                }),
                (Map.prototype.sort = function (e) {
                    return OrderedMap(sortFactory(this, e));
                }),
                (Map.prototype.sortBy = function (e, t) {
                    return OrderedMap(sortFactory(this, t, e));
                }),
                (Map.prototype.withMutations = function (e) {
                    var t = this.asMutable();
                    return e(t), t.wasAltered() ? t.__ensureOwner(this.__ownerID) : this;
                }),
                (Map.prototype.asMutable = function () {
                    return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
                }),
                (Map.prototype.asImmutable = function () {
                    return this.__ensureOwner();
                }),
                (Map.prototype.wasAltered = function () {
                    return this.__altered;
                }),
                (Map.prototype.__iterator = function (e, t) {
                    return new MapIterator(this, e, t);
                }),
                (Map.prototype.__iterate = function (e, t) {
                    var r = this,
                        i = 0;
                    return (
                        this._root &&
                            this._root.iterate(function (t) {
                                return i++, e(t[1], t[0], r);
                            }, t),
                        i
                    );
                }),
                (Map.prototype.__ensureOwner = function (e) {
                    return e === this.__ownerID ? this : e ? makeMap(this.size, this._root, e, this.__hash) : ((this.__ownerID = e), (this.__altered = !1), this);
                }),
                (Map.isMap = isMap);
            var R,
                E = "@@__IMMUTABLE_MAP__@@",
                O = Map.prototype;
            function ArrayMapNode(e, t) {
                (this.ownerID = e), (this.entries = t);
            }
            function BitmapIndexedNode(e, t, r) {
                (this.ownerID = e), (this.bitmap = t), (this.nodes = r);
            }
            function HashArrayMapNode(e, t, r) {
                (this.ownerID = e), (this.count = t), (this.nodes = r);
            }
            function HashCollisionNode(e, t, r) {
                (this.ownerID = e), (this.keyHash = t), (this.entries = r);
            }
            function ValueNode(e, t, r) {
                (this.ownerID = e), (this.keyHash = t), (this.entry = r);
            }
            function MapIterator(e, t, r) {
                (this._type = t), (this._reverse = r), (this._stack = e._root && mapIteratorFrame(e._root));
            }
            function mapIteratorValue(e, t) {
                return iteratorValue(e, t[0], t[1]);
            }
            function mapIteratorFrame(e, t) {
                return { node: e, index: 0, __prev: t };
            }
            function makeMap(e, t, r, i) {
                var n = Object.create(O);
                return (n.size = e), (n._root = t), (n.__ownerID = r), (n.__hash = i), (n.__altered = !1), n;
            }
            function emptyMap() {
                return R || (R = makeMap(0));
            }
            function updateMap(e, t, r) {
                var i, n;
                if (e._root) {
                    var c = MakeRef(a),
                        u = MakeRef(s);
                    if (((i = updateNode(e._root, e.__ownerID, 0, void 0, t, r, c, u)), !u.value)) return e;
                    n = e.size + (c.value ? (r === o ? -1 : 1) : 0);
                } else {
                    if (r === o) return e;
                    (n = 1), (i = new ArrayMapNode(e.__ownerID, [[t, r]]));
                }
                return e.__ownerID ? ((e.size = n), (e._root = i), (e.__hash = void 0), (e.__altered = !0), e) : i ? makeMap(n, i) : emptyMap();
            }
            function updateNode(e, t, r, i, n, a, s, c) {
                return e ? e.update(t, r, i, n, a, s, c) : a === o ? e : (SetRef(c), SetRef(s), new ValueNode(t, i, [n, a]));
            }
            function isLeafNode(e) {
                return e.constructor === ValueNode || e.constructor === HashCollisionNode;
            }
            function mergeIntoNode(e, t, r, i, n) {
                if (e.keyHash === i) return new HashCollisionNode(t, i, [e.entry, n]);
                var o,
                    a = 31 & (0 === r ? e.keyHash : e.keyHash >>> r),
                    s = 31 & (0 === r ? i : i >>> r);
                return new BitmapIndexedNode(t, (1 << a) | (1 << s), a === s ? [mergeIntoNode(e, t, r + 5, i, n)] : ((o = new ValueNode(t, i, n)), a < s ? [e, o] : [o, e]));
            }
            function mergeIntoMapWith(e, t, r) {
                for (var i = [], n = 0; n < r.length; n++) {
                    var o = r[n],
                        a = KeyedIterable(o);
                    isIterable(o) ||
                        (a = a.map(function (e) {
                            return fromJS(e);
                        })),
                        i.push(a);
                }
                return mergeIntoCollectionWith(e, t, i);
            }
            function deepMerger(e, t, r) {
                return e && e.mergeDeep && isIterable(t) ? e.mergeDeep(t) : is(e, t) ? e : t;
            }
            function deepMergerWith(e) {
                return function (t, r, i) {
                    if (t && t.mergeDeepWith && isIterable(r)) return t.mergeDeepWith(e, r);
                    var n = e(t, r, i);
                    return is(t, n) ? t : n;
                };
            }
            function mergeIntoCollectionWith(e, t, r) {
                return 0 ===
                    (r = r.filter(function (e) {
                        return 0 !== e.size;
                    })).length
                    ? e
                    : 0 !== e.size || e.__ownerID || 1 !== r.length
                    ? e.withMutations(function (e) {
                          for (
                              var i = t
                                      ? function (r, i) {
                                            e.update(i, o, function (e) {
                                                return e === o ? r : t(e, r, i);
                                            });
                                        }
                                      : function (t, r) {
                                            e.set(r, t);
                                        },
                                  n = 0;
                              n < r.length;
                              n++
                          )
                              r[n].forEach(i);
                      })
                    : e.constructor(r[0]);
            }
            function popCount(e) {
                return (e = ((e = (858993459 & (e -= (e >> 1) & 1431655765)) + ((e >> 2) & 858993459)) + (e >> 4)) & 252645135), (e += e >> 8), 127 & (e += e >> 16);
            }
            function setIn(e, t, r, i) {
                var n = i ? e : arrCopy(e);
                return (n[t] = r), n;
            }
            (O[E] = !0),
                (O.delete = O.remove),
                (O.removeIn = O.deleteIn),
                (ArrayMapNode.prototype.get = function (e, t, r, i) {
                    for (var n = this.entries, o = 0, a = n.length; o < a; o++) if (is(r, n[o][0])) return n[o][1];
                    return i;
                }),
                (ArrayMapNode.prototype.update = function (e, t, r, i, n, a, s) {
                    for (var c = n === o, u = this.entries, l = 0, d = u.length; l < d && !is(i, u[l][0]); l++);
                    var p = l < d;
                    if (p ? u[l][1] === n : c) return this;
                    if ((SetRef(s), (c || !p) && SetRef(a), !c || 1 !== u.length)) {
                        if (!p && !c && u.length >= x)
                            return (function createNodes(e, t, r, i) {
                                e || (e = new OwnerID());
                                for (var n = new ValueNode(e, hash(r), [r, i]), o = 0; o < t.length; o++) {
                                    var a = t[o];
                                    n = n.update(e, 0, void 0, a[0], a[1]);
                                }
                                return n;
                            })(e, u, i, n);
                        var f = e && e === this.ownerID,
                            v = f ? u : arrCopy(u);
                        return p ? (c ? (l === d - 1 ? v.pop() : (v[l] = v.pop())) : (v[l] = [i, n])) : v.push([i, n]), f ? ((this.entries = v), this) : new ArrayMapNode(e, v);
                    }
                }),
                (BitmapIndexedNode.prototype.get = function (e, t, r, i) {
                    void 0 === t && (t = hash(r));
                    var n = 1 << (31 & (0 === e ? t : t >>> e)),
                        o = this.bitmap;
                    return 0 == (o & n) ? i : this.nodes[popCount(o & (n - 1))].get(e + 5, t, r, i);
                }),
                (BitmapIndexedNode.prototype.update = function (e, t, r, i, n, a, s) {
                    void 0 === r && (r = hash(i));
                    var c = 31 & (0 === t ? r : r >>> t),
                        u = 1 << c,
                        l = this.bitmap,
                        d = 0 != (l & u);
                    if (!d && n === o) return this;
                    var p = popCount(l & (u - 1)),
                        f = this.nodes,
                        v = d ? f[p] : void 0,
                        h = updateNode(v, e, t + 5, r, i, n, a, s);
                    if (h === v) return this;
                    if (!d && h && f.length >= j)
                        return (function expandNodes(e, t, r, i, n) {
                            for (var o = 0, a = new Array(32), s = 0; 0 !== r; s++, r >>>= 1) a[s] = 1 & r ? t[o++] : void 0;
                            return (a[i] = n), new HashArrayMapNode(e, o + 1, a);
                        })(e, f, l, c, h);
                    if (d && !h && 2 === f.length && isLeafNode(f[1 ^ p])) return f[1 ^ p];
                    if (d && h && 1 === f.length && isLeafNode(h)) return h;
                    var g = e && e === this.ownerID,
                        m = d ? (h ? l : l ^ u) : l | u,
                        y = d
                            ? h
                                ? setIn(f, p, h, g)
                                : (function spliceOut(e, t, r) {
                                      var i = e.length - 1;
                                      if (r && t === i) return e.pop(), e;
                                      for (var n = new Array(i), o = 0, a = 0; a < i; a++) a === t && (o = 1), (n[a] = e[a + o]);
                                      return n;
                                  })(f, p, g)
                            : (function spliceIn(e, t, r, i) {
                                  var n = e.length + 1;
                                  if (i && t + 1 === n) return (e[t] = r), e;
                                  for (var o = new Array(n), a = 0, s = 0; s < n; s++) s === t ? ((o[s] = r), (a = -1)) : (o[s] = e[s + a]);
                                  return o;
                              })(f, p, h, g);
                    return g ? ((this.bitmap = m), (this.nodes = y), this) : new BitmapIndexedNode(e, m, y);
                }),
                (HashArrayMapNode.prototype.get = function (e, t, r, i) {
                    void 0 === t && (t = hash(r));
                    var n = 31 & (0 === e ? t : t >>> e),
                        o = this.nodes[n];
                    return o ? o.get(e + 5, t, r, i) : i;
                }),
                (HashArrayMapNode.prototype.update = function (e, t, r, i, n, a, s) {
                    void 0 === r && (r = hash(i));
                    var c = 31 & (0 === t ? r : r >>> t),
                        u = n === o,
                        l = this.nodes,
                        d = l[c];
                    if (u && !d) return this;
                    var p = updateNode(d, e, t + 5, r, i, n, a, s);
                    if (p === d) return this;
                    var f = this.count;
                    if (d) {
                        if (!p && --f < V)
                            return (function packNodes(e, t, r, i) {
                                for (var n = 0, o = 0, a = new Array(r), s = 0, c = 1, u = t.length; s < u; s++, c <<= 1) {
                                    var l = t[s];
                                    void 0 !== l && s !== i && ((n |= c), (a[o++] = l));
                                }
                                return new BitmapIndexedNode(e, n, a);
                            })(e, l, f, c);
                    } else f++;
                    var v = e && e === this.ownerID,
                        h = setIn(l, c, p, v);
                    return v ? ((this.count = f), (this.nodes = h), this) : new HashArrayMapNode(e, f, h);
                }),
                (HashCollisionNode.prototype.get = function (e, t, r, i) {
                    for (var n = this.entries, o = 0, a = n.length; o < a; o++) if (is(r, n[o][0])) return n[o][1];
                    return i;
                }),
                (HashCollisionNode.prototype.update = function (e, t, r, i, n, a, s) {
                    void 0 === r && (r = hash(i));
                    var c = n === o;
                    if (r !== this.keyHash) return c ? this : (SetRef(s), SetRef(a), mergeIntoNode(this, e, t, r, [i, n]));
                    for (var u = this.entries, l = 0, d = u.length; l < d && !is(i, u[l][0]); l++);
                    var p = l < d;
                    if (p ? u[l][1] === n : c) return this;
                    if ((SetRef(s), (c || !p) && SetRef(a), c && 2 === d)) return new ValueNode(e, this.keyHash, u[1 ^ l]);
                    var f = e && e === this.ownerID,
                        v = f ? u : arrCopy(u);
                    return p ? (c ? (l === d - 1 ? v.pop() : (v[l] = v.pop())) : (v[l] = [i, n])) : v.push([i, n]), f ? ((this.entries = v), this) : new HashCollisionNode(e, this.keyHash, v);
                }),
                (ValueNode.prototype.get = function (e, t, r, i) {
                    return is(r, this.entry[0]) ? this.entry[1] : i;
                }),
                (ValueNode.prototype.update = function (e, t, r, i, n, a, s) {
                    var c = n === o,
                        u = is(i, this.entry[0]);
                    return (u ? n === this.entry[1] : c)
                        ? this
                        : (SetRef(s), c ? void SetRef(a) : u ? (e && e === this.ownerID ? ((this.entry[1] = n), this) : new ValueNode(e, this.keyHash, [i, n])) : (SetRef(a), mergeIntoNode(this, e, t, hash(i), [i, n])));
                }),
                (ArrayMapNode.prototype.iterate = HashCollisionNode.prototype.iterate = function (e, t) {
                    for (var r = this.entries, i = 0, n = r.length - 1; i <= n; i++) if (!1 === e(r[t ? n - i : i])) return !1;
                }),
                (BitmapIndexedNode.prototype.iterate = HashArrayMapNode.prototype.iterate = function (e, t) {
                    for (var r = this.nodes, i = 0, n = r.length - 1; i <= n; i++) {
                        var o = r[t ? n - i : i];
                        if (o && !1 === o.iterate(e, t)) return !1;
                    }
                }),
                (ValueNode.prototype.iterate = function (e, t) {
                    return e(this.entry);
                }),
                createClass(MapIterator, Iterator),
                (MapIterator.prototype.next = function () {
                    for (var e = this._type, t = this._stack; t; ) {
                        var r,
                            i = t.node,
                            n = t.index++;
                        if (i.entry) {
                            if (0 === n) return mapIteratorValue(e, i.entry);
                        } else if (i.entries) {
                            if (n <= (r = i.entries.length - 1)) return mapIteratorValue(e, i.entries[this._reverse ? r - n : n]);
                        } else if (n <= (r = i.nodes.length - 1)) {
                            var o = i.nodes[this._reverse ? r - n : n];
                            if (o) {
                                if (o.entry) return mapIteratorValue(e, o.entry);
                                t = this._stack = mapIteratorFrame(o, t);
                            }
                            continue;
                        }
                        t = this._stack = this._stack.__prev;
                    }
                    return { value: void 0, done: !0 };
                });
            var x = 8,
                j = 16,
                V = 8;
            function List(e) {
                var t = emptyList();
                if (null == e) return t;
                if (isList(e)) return e;
                var r = IndexedIterable(e),
                    i = r.size;
                return 0 === i
                    ? t
                    : (assertNotInfinite(i),
                      i > 0 && i < 32
                          ? makeList(0, i, 5, null, new VNode(r.toArray()))
                          : t.withMutations(function (e) {
                                e.setSize(i),
                                    r.forEach(function (t, r) {
                                        return e.set(r, t);
                                    });
                            }));
            }
            function isList(e) {
                return !(!e || !e[I]);
            }
            createClass(List, IndexedCollection),
                (List.of = function () {
                    return this(arguments);
                }),
                (List.prototype.toString = function () {
                    return this.__toString("List [", "]");
                }),
                (List.prototype.get = function (e, t) {
                    if ((e = wrapIndex(this, e)) >= 0 && e < this.size) {
                        var r = listNodeFor(this, (e += this._origin));
                        return r && r.array[31 & e];
                    }
                    return t;
                }),
                (List.prototype.set = function (e, t) {
                    return (function updateList(e, t, r) {
                        if ((t = wrapIndex(e, t)) != t) return e;
                        if (t >= e.size || t < 0)
                            return e.withMutations(function (e) {
                                t < 0 ? setListBounds(e, t).set(0, r) : setListBounds(e, 0, t + 1).set(t, r);
                            });
                        t += e._origin;
                        var i = e._tail,
                            n = e._root,
                            o = MakeRef(s);
                        return (
                            t >= getTailOffset(e._capacity) ? (i = updateVNode(i, e.__ownerID, 0, t, r, o)) : (n = updateVNode(n, e.__ownerID, e._level, t, r, o)),
                            o.value ? (e.__ownerID ? ((e._root = n), (e._tail = i), (e.__hash = void 0), (e.__altered = !0), e) : makeList(e._origin, e._capacity, e._level, n, i)) : e
                        );
                    })(this, e, t);
                }),
                (List.prototype.remove = function (e) {
                    return this.has(e) ? (0 === e ? this.shift() : e === this.size - 1 ? this.pop() : this.splice(e, 1)) : this;
                }),
                (List.prototype.insert = function (e, t) {
                    return this.splice(e, 0, t);
                }),
                (List.prototype.clear = function () {
                    return 0 === this.size ? this : this.__ownerID ? ((this.size = this._origin = this._capacity = 0), (this._level = 5), (this._root = this._tail = null), (this.__hash = void 0), (this.__altered = !0), this) : emptyList();
                }),
                (List.prototype.push = function () {
                    var e = arguments,
                        t = this.size;
                    return this.withMutations(function (r) {
                        setListBounds(r, 0, t + e.length);
                        for (var i = 0; i < e.length; i++) r.set(t + i, e[i]);
                    });
                }),
                (List.prototype.pop = function () {
                    return setListBounds(this, 0, -1);
                }),
                (List.prototype.unshift = function () {
                    var e = arguments;
                    return this.withMutations(function (t) {
                        setListBounds(t, -e.length);
                        for (var r = 0; r < e.length; r++) t.set(r, e[r]);
                    });
                }),
                (List.prototype.shift = function () {
                    return setListBounds(this, 1);
                }),
                (List.prototype.merge = function () {
                    return mergeIntoListWith(this, void 0, arguments);
                }),
                (List.prototype.mergeWith = function (t) {
                    var r = e.call(arguments, 1);
                    return mergeIntoListWith(this, t, r);
                }),
                (List.prototype.mergeDeep = function () {
                    return mergeIntoListWith(this, deepMerger, arguments);
                }),
                (List.prototype.mergeDeepWith = function (t) {
                    var r = e.call(arguments, 1);
                    return mergeIntoListWith(this, deepMergerWith(t), r);
                }),
                (List.prototype.setSize = function (e) {
                    return setListBounds(this, 0, e);
                }),
                (List.prototype.slice = function (e, t) {
                    var r = this.size;
                    return wholeSlice(e, t, r) ? this : setListBounds(this, resolveBegin(e, r), resolveEnd(t, r));
                }),
                (List.prototype.__iterator = function (e, t) {
                    var r = 0,
                        i = iterateList(this, t);
                    return new Iterator(function () {
                        var t = i();
                        return t === D ? { value: void 0, done: !0 } : iteratorValue(e, r++, t);
                    });
                }),
                (List.prototype.__iterate = function (e, t) {
                    for (var r, i = 0, n = iterateList(this, t); (r = n()) !== D && !1 !== e(r, i++, this); );
                    return i;
                }),
                (List.prototype.__ensureOwner = function (e) {
                    return e === this.__ownerID ? this : e ? makeList(this._origin, this._capacity, this._level, this._root, this._tail, e, this.__hash) : ((this.__ownerID = e), this);
                }),
                (List.isList = isList);
            var I = "@@__IMMUTABLE_LIST__@@",
                C = List.prototype;
            function VNode(e, t) {
                (this.array = e), (this.ownerID = t);
            }
            (C[I] = !0),
                (C.delete = C.remove),
                (C.setIn = O.setIn),
                (C.deleteIn = C.removeIn = O.removeIn),
                (C.update = O.update),
                (C.updateIn = O.updateIn),
                (C.mergeIn = O.mergeIn),
                (C.mergeDeepIn = O.mergeDeepIn),
                (C.withMutations = O.withMutations),
                (C.asMutable = O.asMutable),
                (C.asImmutable = O.asImmutable),
                (C.wasAltered = O.wasAltered),
                (VNode.prototype.removeBefore = function (e, t, r) {
                    if (r === t ? 1 << t : 0 === this.array.length) return this;
                    var i = (r >>> t) & 31;
                    if (i >= this.array.length) return new VNode([], e);
                    var n,
                        o = 0 === i;
                    if (t > 0) {
                        var a = this.array[i];
                        if ((n = a && a.removeBefore(e, t - 5, r)) === a && o) return this;
                    }
                    if (o && !n) return this;
                    var s = editableVNode(this, e);
                    if (!o) for (var c = 0; c < i; c++) s.array[c] = void 0;
                    return n && (s.array[i] = n), s;
                }),
                (VNode.prototype.removeAfter = function (e, t, r) {
                    if (r === (t ? 1 << t : 0) || 0 === this.array.length) return this;
                    var i,
                        n = ((r - 1) >>> t) & 31;
                    if (n >= this.array.length) return this;
                    if (t > 0) {
                        var o = this.array[n];
                        if ((i = o && o.removeAfter(e, t - 5, r)) === o && n === this.array.length - 1) return this;
                    }
                    var a = editableVNode(this, e);
                    return a.array.splice(n + 1), i && (a.array[n] = i), a;
                });
            var M,
                k,
                D = {};
            function iterateList(e, t) {
                var r = e._origin,
                    i = e._capacity,
                    n = getTailOffset(i),
                    o = e._tail;
                return iterateNodeOrLeaf(e._root, e._level, 0);
                function iterateNodeOrLeaf(e, a, s) {
                    return 0 === a
                        ? (function iterateLeaf(e, a) {
                              var s = a === n ? o && o.array : e && e.array,
                                  c = a > r ? 0 : r - a,
                                  u = i - a;
                              return (
                                  u > 32 && (u = 32),
                                  function () {
                                      if (c === u) return D;
                                      var e = t ? --u : c++;
                                      return s && s[e];
                                  }
                              );
                          })(e, s)
                        : (function iterateNode(e, n, o) {
                              var a,
                                  s = e && e.array,
                                  c = o > r ? 0 : (r - o) >> n,
                                  u = 1 + ((i - o) >> n);
                              return (
                                  u > 32 && (u = 32),
                                  function () {
                                      for (;;) {
                                          if (a) {
                                              var e = a();
                                              if (e !== D) return e;
                                              a = null;
                                          }
                                          if (c === u) return D;
                                          var r = t ? --u : c++;
                                          a = iterateNodeOrLeaf(s && s[r], n - 5, o + (r << n));
                                      }
                                  }
                              );
                          })(e, a, s);
                }
            }
            function makeList(e, t, r, i, n, o, a) {
                var s = Object.create(C);
                return (s.size = t - e), (s._origin = e), (s._capacity = t), (s._level = r), (s._root = i), (s._tail = n), (s.__ownerID = o), (s.__hash = a), (s.__altered = !1), s;
            }
            function emptyList() {
                return M || (M = makeList(0, 0, 5));
            }
            function updateVNode(e, t, r, i, n, o) {
                var a,
                    s = (i >>> r) & 31,
                    c = e && s < e.array.length;
                if (!c && void 0 === n) return e;
                if (r > 0) {
                    var u = e && e.array[s],
                        l = updateVNode(u, t, r - 5, i, n, o);
                    return l === u ? e : (((a = editableVNode(e, t)).array[s] = l), a);
                }
                return c && e.array[s] === n ? e : (SetRef(o), (a = editableVNode(e, t)), void 0 === n && s === a.array.length - 1 ? a.array.pop() : (a.array[s] = n), a);
            }
            function editableVNode(e, t) {
                return t && e && t === e.ownerID ? e : new VNode(e ? e.array.slice() : [], t);
            }
            function listNodeFor(e, t) {
                if (t >= getTailOffset(e._capacity)) return e._tail;
                if (t < 1 << (e._level + 5)) {
                    for (var r = e._root, i = e._level; r && i > 0; ) (r = r.array[(t >>> i) & 31]), (i -= 5);
                    return r;
                }
            }
            function setListBounds(e, t, r) {
                void 0 !== t && (t |= 0), void 0 !== r && (r |= 0);
                var i = e.__ownerID || new OwnerID(),
                    n = e._origin,
                    o = e._capacity,
                    a = n + t,
                    s = void 0 === r ? o : r < 0 ? o + r : n + r;
                if (a === n && s === o) return e;
                if (a >= s) return e.clear();
                for (var c = e._level, u = e._root, l = 0; a + l < 0; ) (u = new VNode(u && u.array.length ? [void 0, u] : [], i)), (l += 1 << (c += 5));
                l && ((a += l), (n += l), (s += l), (o += l));
                for (var d = getTailOffset(o), p = getTailOffset(s); p >= 1 << (c + 5); ) (u = new VNode(u && u.array.length ? [u] : [], i)), (c += 5);
                var f = e._tail,
                    v = p < d ? listNodeFor(e, s - 1) : p > d ? new VNode([], i) : f;
                if (f && p > d && a < o && f.array.length) {
                    for (var h = (u = editableVNode(u, i)), g = c; g > 5; g -= 5) {
                        var m = (d >>> g) & 31;
                        h = h.array[m] = editableVNode(h.array[m], i);
                    }
                    h.array[(d >>> 5) & 31] = f;
                }
                if ((s < o && (v = v && v.removeAfter(i, 0, s)), a >= p)) (a -= p), (s -= p), (c = 5), (u = null), (v = v && v.removeBefore(i, 0, a));
                else if (a > n || p < d) {
                    for (l = 0; u; ) {
                        var y = (a >>> c) & 31;
                        if ((y !== p >>> c) & 31) break;
                        y && (l += (1 << c) * y), (c -= 5), (u = u.array[y]);
                    }
                    u && a > n && (u = u.removeBefore(i, c, a - l)), u && p < d && (u = u.removeAfter(i, c, p - l)), l && ((a -= l), (s -= l));
                }
                return e.__ownerID ? ((e.size = s - a), (e._origin = a), (e._capacity = s), (e._level = c), (e._root = u), (e._tail = v), (e.__hash = void 0), (e.__altered = !0), e) : makeList(a, s, c, u, v);
            }
            function mergeIntoListWith(e, t, r) {
                for (var i = [], n = 0, o = 0; o < r.length; o++) {
                    var a = r[o],
                        s = IndexedIterable(a);
                    s.size > n && (n = s.size),
                        isIterable(a) ||
                            (s = s.map(function (e) {
                                return fromJS(e);
                            })),
                        i.push(s);
                }
                return n > e.size && (e = e.setSize(n)), mergeIntoCollectionWith(e, t, i);
            }
            function getTailOffset(e) {
                return e < 32 ? 0 : ((e - 1) >>> 5) << 5;
            }
            function OrderedMap(e) {
                return null == e
                    ? emptyOrderedMap()
                    : isOrderedMap(e)
                    ? e
                    : emptyOrderedMap().withMutations(function (t) {
                          var r = KeyedIterable(e);
                          assertNotInfinite(r.size),
                              r.forEach(function (e, r) {
                                  return t.set(r, e);
                              });
                      });
            }
            function isOrderedMap(e) {
                return isMap(e) && isOrdered(e);
            }
            function makeOrderedMap(e, t, r, i) {
                var n = Object.create(OrderedMap.prototype);
                return (n.size = e ? e.size : 0), (n._map = e), (n._list = t), (n.__ownerID = r), (n.__hash = i), n;
            }
            function emptyOrderedMap() {
                return k || (k = makeOrderedMap(emptyMap(), emptyList()));
            }
            function updateOrderedMap(e, t, r) {
                var i,
                    n,
                    a = e._map,
                    s = e._list,
                    c = a.get(t),
                    u = void 0 !== c;
                if (r === o) {
                    if (!u) return e;
                    s.size >= 32 && s.size >= 2 * a.size
                        ? ((i = (n = s.filter(function (e, t) {
                              return void 0 !== e && c !== t;
                          }))
                              .toKeyedSeq()
                              .map(function (e) {
                                  return e[0];
                              })
                              .flip()
                              .toMap()),
                          e.__ownerID && (i.__ownerID = n.__ownerID = e.__ownerID))
                        : ((i = a.remove(t)), (n = c === s.size - 1 ? s.pop() : s.set(c, void 0)));
                } else if (u) {
                    if (r === s.get(c)[1]) return e;
                    (i = a), (n = s.set(c, [t, r]));
                } else (i = a.set(t, s.size)), (n = s.set(s.size, [t, r]));
                return e.__ownerID ? ((e.size = i.size), (e._map = i), (e._list = n), (e.__hash = void 0), e) : makeOrderedMap(i, n);
            }
            function ToKeyedSequence(e, t) {
                (this._iter = e), (this._useKeys = t), (this.size = e.size);
            }
            function ToIndexedSequence(e) {
                (this._iter = e), (this.size = e.size);
            }
            function ToSetSequence(e) {
                (this._iter = e), (this.size = e.size);
            }
            function FromEntriesSequence(e) {
                (this._iter = e), (this.size = e.size);
            }
            function flipFactory(e) {
                var t = makeSequence(e);
                return (
                    (t._iter = e),
                    (t.size = e.size),
                    (t.flip = function () {
                        return e;
                    }),
                    (t.reverse = function () {
                        var t = e.reverse.apply(this);
                        return (
                            (t.flip = function () {
                                return e.reverse();
                            }),
                            t
                        );
                    }),
                    (t.has = function (t) {
                        return e.includes(t);
                    }),
                    (t.includes = function (t) {
                        return e.has(t);
                    }),
                    (t.cacheResult = cacheResultThrough),
                    (t.__iterateUncached = function (t, r) {
                        var i = this;
                        return e.__iterate(function (e, r) {
                            return !1 !== t(r, e, i);
                        }, r);
                    }),
                    (t.__iteratorUncached = function (t, r) {
                        if (2 === t) {
                            var i = e.__iterator(t, r);
                            return new Iterator(function () {
                                var e = i.next();
                                if (!e.done) {
                                    var t = e.value[0];
                                    (e.value[0] = e.value[1]), (e.value[1] = t);
                                }
                                return e;
                            });
                        }
                        return e.__iterator(1 === t ? 0 : 1, r);
                    }),
                    t
                );
            }
            function mapFactory(e, t, r) {
                var i = makeSequence(e);
                return (
                    (i.size = e.size),
                    (i.has = function (t) {
                        return e.has(t);
                    }),
                    (i.get = function (i, n) {
                        var a = e.get(i, o);
                        return a === o ? n : t.call(r, a, i, e);
                    }),
                    (i.__iterateUncached = function (i, n) {
                        var o = this;
                        return e.__iterate(function (e, n, a) {
                            return !1 !== i(t.call(r, e, n, a), n, o);
                        }, n);
                    }),
                    (i.__iteratorUncached = function (i, n) {
                        var o = e.__iterator(2, n);
                        return new Iterator(function () {
                            var n = o.next();
                            if (n.done) return n;
                            var a = n.value,
                                s = a[0];
                            return iteratorValue(i, s, t.call(r, a[1], s, e), n);
                        });
                    }),
                    i
                );
            }
            function reverseFactory(e, t) {
                var r = makeSequence(e);
                return (
                    (r._iter = e),
                    (r.size = e.size),
                    (r.reverse = function () {
                        return e;
                    }),
                    e.flip &&
                        (r.flip = function () {
                            var t = flipFactory(e);
                            return (
                                (t.reverse = function () {
                                    return e.flip();
                                }),
                                t
                            );
                        }),
                    (r.get = function (r, i) {
                        return e.get(t ? r : -1 - r, i);
                    }),
                    (r.has = function (r) {
                        return e.has(t ? r : -1 - r);
                    }),
                    (r.includes = function (t) {
                        return e.includes(t);
                    }),
                    (r.cacheResult = cacheResultThrough),
                    (r.__iterate = function (t, r) {
                        var i = this;
                        return e.__iterate(function (e, r) {
                            return t(e, r, i);
                        }, !r);
                    }),
                    (r.__iterator = function (t, r) {
                        return e.__iterator(t, !r);
                    }),
                    r
                );
            }
            function filterFactory(e, t, r, i) {
                var n = makeSequence(e);
                return (
                    i &&
                        ((n.has = function (i) {
                            var n = e.get(i, o);
                            return n !== o && !!t.call(r, n, i, e);
                        }),
                        (n.get = function (i, n) {
                            var a = e.get(i, o);
                            return a !== o && t.call(r, a, i, e) ? a : n;
                        })),
                    (n.__iterateUncached = function (n, o) {
                        var a = this,
                            s = 0;
                        return (
                            e.__iterate(function (e, o, c) {
                                if (t.call(r, e, o, c)) return s++, n(e, i ? o : s - 1, a);
                            }, o),
                            s
                        );
                    }),
                    (n.__iteratorUncached = function (n, o) {
                        var a = e.__iterator(2, o),
                            s = 0;
                        return new Iterator(function () {
                            for (;;) {
                                var o = a.next();
                                if (o.done) return o;
                                var c = o.value,
                                    u = c[0],
                                    l = c[1];
                                if (t.call(r, l, u, e)) return iteratorValue(n, i ? u : s++, l, o);
                            }
                        });
                    }),
                    n
                );
            }
            function sliceFactory(e, t, r, i) {
                var n = e.size;
                if ((void 0 !== t && (t |= 0), void 0 !== r && (r === 1 / 0 ? (r = n) : (r |= 0)), wholeSlice(t, r, n))) return e;
                var o = resolveBegin(t, n),
                    a = resolveEnd(r, n);
                if (o != o || a != a) return sliceFactory(e.toSeq().cacheResult(), t, r, i);
                var s,
                    c = a - o;
                c == c && (s = c < 0 ? 0 : c);
                var u = makeSequence(e);
                return (
                    (u.size = 0 === s ? s : (e.size && s) || void 0),
                    !i &&
                        isSeq(e) &&
                        s >= 0 &&
                        (u.get = function (t, r) {
                            return (t = wrapIndex(this, t)) >= 0 && t < s ? e.get(t + o, r) : r;
                        }),
                    (u.__iterateUncached = function (t, r) {
                        var n = this;
                        if (0 === s) return 0;
                        if (r) return this.cacheResult().__iterate(t, r);
                        var a = 0,
                            c = !0,
                            u = 0;
                        return (
                            e.__iterate(function (e, r) {
                                if (!c || !(c = a++ < o)) return u++, !1 !== t(e, i ? r : u - 1, n) && u !== s;
                            }),
                            u
                        );
                    }),
                    (u.__iteratorUncached = function (t, r) {
                        if (0 !== s && r) return this.cacheResult().__iterator(t, r);
                        var n = 0 !== s && e.__iterator(t, r),
                            a = 0,
                            c = 0;
                        return new Iterator(function () {
                            for (; a++ < o; ) n.next();
                            if (++c > s) return { value: void 0, done: !0 };
                            var e = n.next();
                            return i || 1 === t ? e : iteratorValue(t, c - 1, 0 === t ? void 0 : e.value[1], e);
                        });
                    }),
                    u
                );
            }
            function skipWhileFactory(e, t, r, i) {
                var n = makeSequence(e);
                return (
                    (n.__iterateUncached = function (n, o) {
                        var a = this;
                        if (o) return this.cacheResult().__iterate(n, o);
                        var s = !0,
                            c = 0;
                        return (
                            e.__iterate(function (e, o, u) {
                                if (!s || !(s = t.call(r, e, o, u))) return c++, n(e, i ? o : c - 1, a);
                            }),
                            c
                        );
                    }),
                    (n.__iteratorUncached = function (n, o) {
                        var a = this;
                        if (o) return this.cacheResult().__iterator(n, o);
                        var s = e.__iterator(2, o),
                            c = !0,
                            u = 0;
                        return new Iterator(function () {
                            var e, o, l;
                            do {
                                if ((e = s.next()).done) return i || 1 === n ? e : iteratorValue(n, u++, 0 === n ? void 0 : e.value[1], e);
                                var d = e.value;
                                (o = d[0]), (l = d[1]), c && (c = t.call(r, l, o, a));
                            } while (c);
                            return 2 === n ? e : iteratorValue(n, o, l, e);
                        });
                    }),
                    n
                );
            }
            function concatFactory(e, t) {
                var r = isKeyed(e),
                    i = [e]
                        .concat(t)
                        .map(function (e) {
                            return isIterable(e) ? r && (e = KeyedIterable(e)) : (e = r ? keyedSeqFromValue(e) : indexedSeqFromValue(Array.isArray(e) ? e : [e])), e;
                        })
                        .filter(function (e) {
                            return 0 !== e.size;
                        });
                if (0 === i.length) return e;
                if (1 === i.length) {
                    var n = i[0];
                    if (n === e || (r && isKeyed(n)) || (isIndexed(e) && isIndexed(n))) return n;
                }
                var o = new ArraySeq(i);
                return (
                    r ? (o = o.toKeyedSeq()) : isIndexed(e) || (o = o.toSetSeq()),
                    ((o = o.flatten(!0)).size = i.reduce(function (e, t) {
                        if (void 0 !== e) {
                            var r = t.size;
                            if (void 0 !== r) return e + r;
                        }
                    }, 0)),
                    o
                );
            }
            function flattenFactory(e, t, r) {
                var i = makeSequence(e);
                return (
                    (i.__iterateUncached = function (i, n) {
                        var o = 0,
                            a = !1;
                        return (
                            (function flatDeep(e, s) {
                                var c = this;
                                e.__iterate(function (e, n) {
                                    return (!t || s < t) && isIterable(e) ? flatDeep(e, s + 1) : !1 === i(e, r ? n : o++, c) && (a = !0), !a;
                                }, n);
                            })(e, 0),
                            o
                        );
                    }),
                    (i.__iteratorUncached = function (i, n) {
                        var o = e.__iterator(i, n),
                            a = [],
                            s = 0;
                        return new Iterator(function () {
                            for (; o; ) {
                                var e = o.next();
                                if (!1 === e.done) {
                                    var c = e.value;
                                    if ((2 === i && (c = c[1]), (t && !(a.length < t)) || !isIterable(c))) return r ? e : iteratorValue(i, s++, c, e);
                                    a.push(o), (o = c.__iterator(i, n));
                                } else o = a.pop();
                            }
                            return { value: void 0, done: !0 };
                        });
                    }),
                    i
                );
            }
            function sortFactory(e, t, r) {
                t || (t = defaultComparator);
                var i = isKeyed(e),
                    n = 0,
                    o = e
                        .toSeq()
                        .map(function (t, i) {
                            return [i, t, n++, r ? r(t, i, e) : t];
                        })
                        .toArray();
                return (
                    o
                        .sort(function (e, r) {
                            return t(e[3], r[3]) || e[2] - r[2];
                        })
                        .forEach(
                            i
                                ? function (e, t) {
                                      o[t].length = 2;
                                  }
                                : function (e, t) {
                                      o[t] = e[1];
                                  }
                        ),
                    i ? KeyedSeq(o) : isIndexed(e) ? IndexedSeq(o) : SetSeq(o)
                );
            }
            function maxFactory(e, t, r) {
                if ((t || (t = defaultComparator), r)) {
                    var i = e
                        .toSeq()
                        .map(function (t, i) {
                            return [t, r(t, i, e)];
                        })
                        .reduce(function (e, r) {
                            return maxCompare(t, e[1], r[1]) ? r : e;
                        });
                    return i && i[0];
                }
                return e.reduce(function (e, r) {
                    return maxCompare(t, e, r) ? r : e;
                });
            }
            function maxCompare(e, t, r) {
                var i = e(r, t);
                return (0 === i && r !== t && (null == r || r != r)) || i > 0;
            }
            function zipWithFactory(e, t, r) {
                var i = makeSequence(e);
                return (
                    (i.size = new ArraySeq(r)
                        .map(function (e) {
                            return e.size;
                        })
                        .min()),
                    (i.__iterate = function (e, t) {
                        for (var r, i = this.__iterator(1, t), n = 0; !(r = i.next()).done && !1 !== e(r.value, n++, this); );
                        return n;
                    }),
                    (i.__iteratorUncached = function (e, i) {
                        var n = r.map(function (e) {
                                return (e = Iterable(e)), getIterator(i ? e.reverse() : e);
                            }),
                            o = 0,
                            a = !1;
                        return new Iterator(function () {
                            var r;
                            return (
                                a ||
                                    ((r = n.map(function (e) {
                                        return e.next();
                                    })),
                                    (a = r.some(function (e) {
                                        return e.done;
                                    }))),
                                a
                                    ? { value: void 0, done: !0 }
                                    : iteratorValue(
                                          e,
                                          o++,
                                          t.apply(
                                              null,
                                              r.map(function (e) {
                                                  return e.value;
                                              })
                                          )
                                      )
                            );
                        });
                    }),
                    i
                );
            }
            function reify(e, t) {
                return isSeq(e) ? t : e.constructor(t);
            }
            function validateEntry(e) {
                if (e !== Object(e)) throw new TypeError("Expected [K, V] tuple: " + e);
            }
            function resolveSize(e) {
                return assertNotInfinite(e.size), ensureSize(e);
            }
            function iterableClass(e) {
                return isKeyed(e) ? KeyedIterable : isIndexed(e) ? IndexedIterable : SetIterable;
            }
            function makeSequence(e) {
                return Object.create((isKeyed(e) ? KeyedSeq : isIndexed(e) ? IndexedSeq : SetSeq).prototype);
            }
            function cacheResultThrough() {
                return this._iter.cacheResult ? (this._iter.cacheResult(), (this.size = this._iter.size), this) : Seq.prototype.cacheResult.call(this);
            }
            function defaultComparator(e, t) {
                return e > t ? 1 : e < t ? -1 : 0;
            }
            function forceIterator(e) {
                var t = getIterator(e);
                if (!t) {
                    if (!isArrayLike(e)) throw new TypeError("Expected iterable or array-like: " + e);
                    t = getIterator(Iterable(e));
                }
                return t;
            }
            function Record(e, t) {
                var r,
                    i = function Record(o) {
                        if (o instanceof i) return o;
                        if (!(this instanceof i)) return new i(o);
                        if (!r) {
                            r = !0;
                            var a = Object.keys(e);
                            !(function setProps(e, t) {
                                try {
                                    t.forEach(setProp.bind(void 0, e));
                                } catch (r) {}
                            })(n, a),
                                (n.size = a.length),
                                (n._name = t),
                                (n._keys = a),
                                (n._defaultValues = e);
                        }
                        this._map = Map(o);
                    },
                    n = (i.prototype = Object.create(F));
                return (n.constructor = i), i;
            }
            createClass(OrderedMap, Map),
                (OrderedMap.of = function () {
                    return this(arguments);
                }),
                (OrderedMap.prototype.toString = function () {
                    return this.__toString("OrderedMap {", "}");
                }),
                (OrderedMap.prototype.get = function (e, t) {
                    var r = this._map.get(e);
                    return void 0 !== r ? this._list.get(r)[1] : t;
                }),
                (OrderedMap.prototype.clear = function () {
                    return 0 === this.size ? this : this.__ownerID ? ((this.size = 0), this._map.clear(), this._list.clear(), this) : emptyOrderedMap();
                }),
                (OrderedMap.prototype.set = function (e, t) {
                    return updateOrderedMap(this, e, t);
                }),
                (OrderedMap.prototype.remove = function (e) {
                    return updateOrderedMap(this, e, o);
                }),
                (OrderedMap.prototype.wasAltered = function () {
                    return this._map.wasAltered() || this._list.wasAltered();
                }),
                (OrderedMap.prototype.__iterate = function (e, t) {
                    var r = this;
                    return this._list.__iterate(function (t) {
                        return t && e(t[1], t[0], r);
                    }, t);
                }),
                (OrderedMap.prototype.__iterator = function (e, t) {
                    return this._list.fromEntrySeq().__iterator(e, t);
                }),
                (OrderedMap.prototype.__ensureOwner = function (e) {
                    if (e === this.__ownerID) return this;
                    var t = this._map.__ensureOwner(e),
                        r = this._list.__ensureOwner(e);
                    return e ? makeOrderedMap(t, r, e, this.__hash) : ((this.__ownerID = e), (this._map = t), (this._list = r), this);
                }),
                (OrderedMap.isOrderedMap = isOrderedMap),
                (OrderedMap.prototype[n] = !0),
                (OrderedMap.prototype.delete = OrderedMap.prototype.remove),
                createClass(ToKeyedSequence, KeyedSeq),
                (ToKeyedSequence.prototype.get = function (e, t) {
                    return this._iter.get(e, t);
                }),
                (ToKeyedSequence.prototype.has = function (e) {
                    return this._iter.has(e);
                }),
                (ToKeyedSequence.prototype.valueSeq = function () {
                    return this._iter.valueSeq();
                }),
                (ToKeyedSequence.prototype.reverse = function () {
                    var e = this,
                        t = reverseFactory(this, !0);
                    return (
                        this._useKeys ||
                            (t.valueSeq = function () {
                                return e._iter.toSeq().reverse();
                            }),
                        t
                    );
                }),
                (ToKeyedSequence.prototype.map = function (e, t) {
                    var r = this,
                        i = mapFactory(this, e, t);
                    return (
                        this._useKeys ||
                            (i.valueSeq = function () {
                                return r._iter.toSeq().map(e, t);
                            }),
                        i
                    );
                }),
                (ToKeyedSequence.prototype.__iterate = function (e, t) {
                    var r,
                        i = this;
                    return this._iter.__iterate(
                        this._useKeys
                            ? function (t, r) {
                                  return e(t, r, i);
                              }
                            : ((r = t ? resolveSize(this) : 0),
                              function (n) {
                                  return e(n, t ? --r : r++, i);
                              }),
                        t
                    );
                }),
                (ToKeyedSequence.prototype.__iterator = function (e, t) {
                    if (this._useKeys) return this._iter.__iterator(e, t);
                    var r = this._iter.__iterator(1, t),
                        i = t ? resolveSize(this) : 0;
                    return new Iterator(function () {
                        var n = r.next();
                        return n.done ? n : iteratorValue(e, t ? --i : i++, n.value, n);
                    });
                }),
                (ToKeyedSequence.prototype[n] = !0),
                createClass(ToIndexedSequence, IndexedSeq),
                (ToIndexedSequence.prototype.includes = function (e) {
                    return this._iter.includes(e);
                }),
                (ToIndexedSequence.prototype.__iterate = function (e, t) {
                    var r = this,
                        i = 0;
                    return this._iter.__iterate(function (t) {
                        return e(t, i++, r);
                    }, t);
                }),
                (ToIndexedSequence.prototype.__iterator = function (e, t) {
                    var r = this._iter.__iterator(1, t),
                        i = 0;
                    return new Iterator(function () {
                        var t = r.next();
                        return t.done ? t : iteratorValue(e, i++, t.value, t);
                    });
                }),
                createClass(ToSetSequence, SetSeq),
                (ToSetSequence.prototype.has = function (e) {
                    return this._iter.includes(e);
                }),
                (ToSetSequence.prototype.__iterate = function (e, t) {
                    var r = this;
                    return this._iter.__iterate(function (t) {
                        return e(t, t, r);
                    }, t);
                }),
                (ToSetSequence.prototype.__iterator = function (e, t) {
                    var r = this._iter.__iterator(1, t);
                    return new Iterator(function () {
                        var t = r.next();
                        return t.done ? t : iteratorValue(e, t.value, t.value, t);
                    });
                }),
                createClass(FromEntriesSequence, KeyedSeq),
                (FromEntriesSequence.prototype.entrySeq = function () {
                    return this._iter.toSeq();
                }),
                (FromEntriesSequence.prototype.__iterate = function (e, t) {
                    var r = this;
                    return this._iter.__iterate(function (t) {
                        if (t) {
                            validateEntry(t);
                            var i = isIterable(t);
                            return e(i ? t.get(1) : t[1], i ? t.get(0) : t[0], r);
                        }
                    }, t);
                }),
                (FromEntriesSequence.prototype.__iterator = function (e, t) {
                    var r = this._iter.__iterator(1, t);
                    return new Iterator(function () {
                        for (;;) {
                            var t = r.next();
                            if (t.done) return t;
                            var i = t.value;
                            if (i) {
                                validateEntry(i);
                                var n = isIterable(i);
                                return iteratorValue(e, n ? i.get(0) : i[0], n ? i.get(1) : i[1], t);
                            }
                        }
                    });
                }),
                (ToIndexedSequence.prototype.cacheResult = ToKeyedSequence.prototype.cacheResult = ToSetSequence.prototype.cacheResult = FromEntriesSequence.prototype.cacheResult = cacheResultThrough),
                createClass(Record, KeyedCollection),
                (Record.prototype.toString = function () {
                    return this.__toString(recordName(this) + " {", "}");
                }),
                (Record.prototype.has = function (e) {
                    return this._defaultValues.hasOwnProperty(e);
                }),
                (Record.prototype.get = function (e, t) {
                    if (!this.has(e)) return t;
                    var r = this._defaultValues[e];
                    return this._map ? this._map.get(e, r) : r;
                }),
                (Record.prototype.clear = function () {
                    if (this.__ownerID) return this._map && this._map.clear(), this;
                    var e = this.constructor;
                    return e._empty || (e._empty = makeRecord(this, emptyMap()));
                }),
                (Record.prototype.set = function (e, t) {
                    if (!this.has(e)) throw new Error('Cannot set unknown key "' + e + '" on ' + recordName(this));
                    if (this._map && !this._map.has(e) && t === this._defaultValues[e]) return this;
                    var r = this._map && this._map.set(e, t);
                    return this.__ownerID || r === this._map ? this : makeRecord(this, r);
                }),
                (Record.prototype.remove = function (e) {
                    if (!this.has(e)) return this;
                    var t = this._map && this._map.remove(e);
                    return this.__ownerID || t === this._map ? this : makeRecord(this, t);
                }),
                (Record.prototype.wasAltered = function () {
                    return this._map.wasAltered();
                }),
                (Record.prototype.__iterator = function (e, t) {
                    var r = this;
                    return KeyedIterable(this._defaultValues)
                        .map(function (e, t) {
                            return r.get(t);
                        })
                        .__iterator(e, t);
                }),
                (Record.prototype.__iterate = function (e, t) {
                    var r = this;
                    return KeyedIterable(this._defaultValues)
                        .map(function (e, t) {
                            return r.get(t);
                        })
                        .__iterate(e, t);
                }),
                (Record.prototype.__ensureOwner = function (e) {
                    if (e === this.__ownerID) return this;
                    var t = this._map && this._map.__ensureOwner(e);
                    return e ? makeRecord(this, t, e) : ((this.__ownerID = e), (this._map = t), this);
                });
            var F = Record.prototype;
            function makeRecord(e, t, r) {
                var i = Object.create(Object.getPrototypeOf(e));
                return (i._map = t), (i.__ownerID = r), i;
            }
            function recordName(e) {
                return e._name || e.constructor.name || "Record";
            }
            function setProp(e, t) {
                Object.defineProperty(e, t, {
                    get: function () {
                        return this.get(t);
                    },
                    set: function (e) {
                        invariant(this.__ownerID, "Cannot set on an immutable record."), this.set(t, e);
                    },
                });
            }
            function Set(e) {
                return null == e
                    ? emptySet()
                    : isSet(e) && !isOrdered(e)
                    ? e
                    : emptySet().withMutations(function (t) {
                          var r = SetIterable(e);
                          assertNotInfinite(r.size),
                              r.forEach(function (e) {
                                  return t.add(e);
                              });
                      });
            }
            function isSet(e) {
                return !(!e || !e[q]);
            }
            (F.delete = F.remove),
                (F.deleteIn = F.removeIn = O.removeIn),
                (F.merge = O.merge),
                (F.mergeWith = O.mergeWith),
                (F.mergeIn = O.mergeIn),
                (F.mergeDeep = O.mergeDeep),
                (F.mergeDeepWith = O.mergeDeepWith),
                (F.mergeDeepIn = O.mergeDeepIn),
                (F.setIn = O.setIn),
                (F.update = O.update),
                (F.updateIn = O.updateIn),
                (F.withMutations = O.withMutations),
                (F.asMutable = O.asMutable),
                (F.asImmutable = O.asImmutable),
                createClass(Set, SetCollection),
                (Set.of = function () {
                    return this(arguments);
                }),
                (Set.fromKeys = function (e) {
                    return this(KeyedIterable(e).keySeq());
                }),
                (Set.prototype.toString = function () {
                    return this.__toString("Set {", "}");
                }),
                (Set.prototype.has = function (e) {
                    return this._map.has(e);
                }),
                (Set.prototype.add = function (e) {
                    return updateSet(this, this._map.set(e, !0));
                }),
                (Set.prototype.remove = function (e) {
                    return updateSet(this, this._map.remove(e));
                }),
                (Set.prototype.clear = function () {
                    return updateSet(this, this._map.clear());
                }),
                (Set.prototype.union = function () {
                    var t = e.call(arguments, 0);
                    return 0 ===
                        (t = t.filter(function (e) {
                            return 0 !== e.size;
                        })).length
                        ? this
                        : 0 !== this.size || this.__ownerID || 1 !== t.length
                        ? this.withMutations(function (e) {
                              for (var r = 0; r < t.length; r++)
                                  SetIterable(t[r]).forEach(function (t) {
                                      return e.add(t);
                                  });
                          })
                        : this.constructor(t[0]);
                }),
                (Set.prototype.intersect = function () {
                    var t = e.call(arguments, 0);
                    if (0 === t.length) return this;
                    t = t.map(function (e) {
                        return SetIterable(e);
                    });
                    var r = this;
                    return this.withMutations(function (e) {
                        r.forEach(function (r) {
                            t.every(function (e) {
                                return e.includes(r);
                            }) || e.remove(r);
                        });
                    });
                }),
                (Set.prototype.subtract = function () {
                    var t = e.call(arguments, 0);
                    if (0 === t.length) return this;
                    t = t.map(function (e) {
                        return SetIterable(e);
                    });
                    var r = this;
                    return this.withMutations(function (e) {
                        r.forEach(function (r) {
                            t.some(function (e) {
                                return e.includes(r);
                            }) && e.remove(r);
                        });
                    });
                }),
                (Set.prototype.merge = function () {
                    return this.union.apply(this, arguments);
                }),
                (Set.prototype.mergeWith = function (t) {
                    var r = e.call(arguments, 1);
                    return this.union.apply(this, r);
                }),
                (Set.prototype.sort = function (e) {
                    return OrderedSet(sortFactory(this, e));
                }),
                (Set.prototype.sortBy = function (e, t) {
                    return OrderedSet(sortFactory(this, t, e));
                }),
                (Set.prototype.wasAltered = function () {
                    return this._map.wasAltered();
                }),
                (Set.prototype.__iterate = function (e, t) {
                    var r = this;
                    return this._map.__iterate(function (t, i) {
                        return e(i, i, r);
                    }, t);
                }),
                (Set.prototype.__iterator = function (e, t) {
                    return this._map
                        .map(function (e, t) {
                            return t;
                        })
                        .__iterator(e, t);
                }),
                (Set.prototype.__ensureOwner = function (e) {
                    if (e === this.__ownerID) return this;
                    var t = this._map.__ensureOwner(e);
                    return e ? this.__make(t, e) : ((this.__ownerID = e), (this._map = t), this);
                }),
                (Set.isSet = isSet);
            var T,
                q = "@@__IMMUTABLE_SET__@@",
                N = Set.prototype;
            function updateSet(e, t) {
                return e.__ownerID ? ((e.size = t.size), (e._map = t), e) : t === e._map ? e : 0 === t.size ? e.__empty() : e.__make(t);
            }
            function makeSet(e, t) {
                var r = Object.create(N);
                return (r.size = e ? e.size : 0), (r._map = e), (r.__ownerID = t), r;
            }
            function emptySet() {
                return T || (T = makeSet(emptyMap()));
            }
            function OrderedSet(e) {
                return null == e
                    ? emptyOrderedSet()
                    : isOrderedSet(e)
                    ? e
                    : emptyOrderedSet().withMutations(function (t) {
                          var r = SetIterable(e);
                          assertNotInfinite(r.size),
                              r.forEach(function (e) {
                                  return t.add(e);
                              });
                      });
            }
            function isOrderedSet(e) {
                return isSet(e) && isOrdered(e);
            }
            (N[q] = !0),
                (N.delete = N.remove),
                (N.mergeDeep = N.merge),
                (N.mergeDeepWith = N.mergeWith),
                (N.withMutations = O.withMutations),
                (N.asMutable = O.asMutable),
                (N.asImmutable = O.asImmutable),
                (N.__empty = emptySet),
                (N.__make = makeSet),
                createClass(OrderedSet, Set),
                (OrderedSet.of = function () {
                    return this(arguments);
                }),
                (OrderedSet.fromKeys = function (e) {
                    return this(KeyedIterable(e).keySeq());
                }),
                (OrderedSet.prototype.toString = function () {
                    return this.__toString("OrderedSet {", "}");
                }),
                (OrderedSet.isOrderedSet = isOrderedSet);
            var L,
                W = OrderedSet.prototype;
            function makeOrderedSet(e, t) {
                var r = Object.create(W);
                return (r.size = e ? e.size : 0), (r._map = e), (r.__ownerID = t), r;
            }
            function emptyOrderedSet() {
                return L || (L = makeOrderedSet(emptyOrderedMap()));
            }
            function Stack(e) {
                return null == e ? emptyStack() : isStack(e) ? e : emptyStack().unshiftAll(e);
            }
            function isStack(e) {
                return !(!e || !e[B]);
            }
            (W[n] = !0),
                (W.__empty = emptyOrderedSet),
                (W.__make = makeOrderedSet),
                createClass(Stack, IndexedCollection),
                (Stack.of = function () {
                    return this(arguments);
                }),
                (Stack.prototype.toString = function () {
                    return this.__toString("Stack [", "]");
                }),
                (Stack.prototype.get = function (e, t) {
                    var r = this._head;
                    for (e = wrapIndex(this, e); r && e--; ) r = r.next;
                    return r ? r.value : t;
                }),
                (Stack.prototype.peek = function () {
                    return this._head && this._head.value;
                }),
                (Stack.prototype.push = function () {
                    if (0 === arguments.length) return this;
                    for (var e = this.size + arguments.length, t = this._head, r = arguments.length - 1; r >= 0; r--) t = { value: arguments[r], next: t };
                    return this.__ownerID ? ((this.size = e), (this._head = t), (this.__hash = void 0), (this.__altered = !0), this) : makeStack(e, t);
                }),
                (Stack.prototype.pushAll = function (e) {
                    if (0 === (e = IndexedIterable(e)).size) return this;
                    assertNotInfinite(e.size);
                    var t = this.size,
                        r = this._head;
                    return (
                        e.reverse().forEach(function (e) {
                            t++, (r = { value: e, next: r });
                        }),
                        this.__ownerID ? ((this.size = t), (this._head = r), (this.__hash = void 0), (this.__altered = !0), this) : makeStack(t, r)
                    );
                }),
                (Stack.prototype.pop = function () {
                    return this.slice(1);
                }),
                (Stack.prototype.unshift = function () {
                    return this.push.apply(this, arguments);
                }),
                (Stack.prototype.unshiftAll = function (e) {
                    return this.pushAll(e);
                }),
                (Stack.prototype.shift = function () {
                    return this.pop.apply(this, arguments);
                }),
                (Stack.prototype.clear = function () {
                    return 0 === this.size ? this : this.__ownerID ? ((this.size = 0), (this._head = void 0), (this.__hash = void 0), (this.__altered = !0), this) : emptyStack();
                }),
                (Stack.prototype.slice = function (e, t) {
                    if (wholeSlice(e, t, this.size)) return this;
                    var r = resolveBegin(e, this.size);
                    if (resolveEnd(t, this.size) !== this.size) return IndexedCollection.prototype.slice.call(this, e, t);
                    for (var i = this.size - r, n = this._head; r--; ) n = n.next;
                    return this.__ownerID ? ((this.size = i), (this._head = n), (this.__hash = void 0), (this.__altered = !0), this) : makeStack(i, n);
                }),
                (Stack.prototype.__ensureOwner = function (e) {
                    return e === this.__ownerID ? this : e ? makeStack(this.size, this._head, e, this.__hash) : ((this.__ownerID = e), (this.__altered = !1), this);
                }),
                (Stack.prototype.__iterate = function (e, t) {
                    if (t) return this.reverse().__iterate(e);
                    for (var r = 0, i = this._head; i && !1 !== e(i.value, r++, this); ) i = i.next;
                    return r;
                }),
                (Stack.prototype.__iterator = function (e, t) {
                    if (t) return this.reverse().__iterator(e);
                    var r = 0,
                        i = this._head;
                    return new Iterator(function () {
                        if (i) {
                            var t = i.value;
                            return (i = i.next), iteratorValue(e, r++, t);
                        }
                        return { value: void 0, done: !0 };
                    });
                }),
                (Stack.isStack = isStack);
            var $,
                B = "@@__IMMUTABLE_STACK__@@",
                U = Stack.prototype;
            function makeStack(e, t, r, i) {
                var n = Object.create(U);
                return (n.size = e), (n._head = t), (n.__ownerID = r), (n.__hash = i), (n.__altered = !1), n;
            }
            function emptyStack() {
                return $ || ($ = makeStack(0));
            }
            function mixin(e, t) {
                var keyCopier = function (r) {
                    e.prototype[r] = t[r];
                };
                return Object.keys(t).forEach(keyCopier), Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(t).forEach(keyCopier), e;
            }
            (U[B] = !0),
                (U.withMutations = O.withMutations),
                (U.asMutable = O.asMutable),
                (U.asImmutable = O.asImmutable),
                (U.wasAltered = O.wasAltered),
                (Iterable.Iterator = Iterator),
                mixin(Iterable, {
                    toArray: function () {
                        assertNotInfinite(this.size);
                        var e = new Array(this.size || 0);
                        return (
                            this.valueSeq().__iterate(function (t, r) {
                                e[r] = t;
                            }),
                            e
                        );
                    },
                    toIndexedSeq: function () {
                        return new ToIndexedSequence(this);
                    },
                    toJS: function () {
                        return this.toSeq()
                            .map(function (e) {
                                return e && "function" == typeof e.toJS ? e.toJS() : e;
                            })
                            .__toJS();
                    },
                    toJSON: function () {
                        return this.toSeq()
                            .map(function (e) {
                                return e && "function" == typeof e.toJSON ? e.toJSON() : e;
                            })
                            .__toJS();
                    },
                    toKeyedSeq: function () {
                        return new ToKeyedSequence(this, !0);
                    },
                    toMap: function () {
                        return Map(this.toKeyedSeq());
                    },
                    toObject: function () {
                        assertNotInfinite(this.size);
                        var e = {};
                        return (
                            this.__iterate(function (t, r) {
                                e[r] = t;
                            }),
                            e
                        );
                    },
                    toOrderedMap: function () {
                        return OrderedMap(this.toKeyedSeq());
                    },
                    toOrderedSet: function () {
                        return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
                    },
                    toSet: function () {
                        return Set(isKeyed(this) ? this.valueSeq() : this);
                    },
                    toSetSeq: function () {
                        return new ToSetSequence(this);
                    },
                    toSeq: function () {
                        return isIndexed(this) ? this.toIndexedSeq() : isKeyed(this) ? this.toKeyedSeq() : this.toSetSeq();
                    },
                    toStack: function () {
                        return Stack(isKeyed(this) ? this.valueSeq() : this);
                    },
                    toList: function () {
                        return List(isKeyed(this) ? this.valueSeq() : this);
                    },
                    toString: function () {
                        return "[Iterable]";
                    },
                    __toString: function (e, t) {
                        return 0 === this.size ? e + t : e + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + t;
                    },
                    concat: function () {
                        var t = e.call(arguments, 0);
                        return reify(this, concatFactory(this, t));
                    },
                    includes: function (e) {
                        return this.some(function (t) {
                            return is(t, e);
                        });
                    },
                    entries: function () {
                        return this.__iterator(2);
                    },
                    every: function (e, t) {
                        assertNotInfinite(this.size);
                        var r = !0;
                        return (
                            this.__iterate(function (i, n, o) {
                                if (!e.call(t, i, n, o)) return (r = !1), !1;
                            }),
                            r
                        );
                    },
                    filter: function (e, t) {
                        return reify(this, filterFactory(this, e, t, !0));
                    },
                    find: function (e, t, r) {
                        var i = this.findEntry(e, t);
                        return i ? i[1] : r;
                    },
                    forEach: function (e, t) {
                        return assertNotInfinite(this.size), this.__iterate(t ? e.bind(t) : e);
                    },
                    join: function (e) {
                        assertNotInfinite(this.size), (e = void 0 !== e ? "" + e : ",");
                        var t = "",
                            r = !0;
                        return (
                            this.__iterate(function (i) {
                                r ? (r = !1) : (t += e), (t += null != i ? i.toString() : "");
                            }),
                            t
                        );
                    },
                    keys: function () {
                        return this.__iterator(0);
                    },
                    map: function (e, t) {
                        return reify(this, mapFactory(this, e, t));
                    },
                    reduce: function (e, t, r) {
                        var i, n;
                        return (
                            assertNotInfinite(this.size),
                            arguments.length < 2 ? (n = !0) : (i = t),
                            this.__iterate(function (t, o, a) {
                                n ? ((n = !1), (i = t)) : (i = e.call(r, i, t, o, a));
                            }),
                            i
                        );
                    },
                    reduceRight: function (e, t, r) {
                        var i = this.toKeyedSeq().reverse();
                        return i.reduce.apply(i, arguments);
                    },
                    reverse: function () {
                        return reify(this, reverseFactory(this, !0));
                    },
                    slice: function (e, t) {
                        return reify(this, sliceFactory(this, e, t, !0));
                    },
                    some: function (e, t) {
                        return !this.every(not(e), t);
                    },
                    sort: function (e) {
                        return reify(this, sortFactory(this, e));
                    },
                    values: function () {
                        return this.__iterator(1);
                    },
                    butLast: function () {
                        return this.slice(0, -1);
                    },
                    isEmpty: function () {
                        return void 0 !== this.size
                            ? 0 === this.size
                            : !this.some(function () {
                                  return !0;
                              });
                    },
                    count: function (e, t) {
                        return ensureSize(e ? this.toSeq().filter(e, t) : this);
                    },
                    countBy: function (e, t) {
                        return (function countByFactory(e, t, r) {
                            var i = Map().asMutable();
                            return (
                                e.__iterate(function (n, o) {
                                    i.update(t.call(r, n, o, e), 0, function (e) {
                                        return e + 1;
                                    });
                                }),
                                i.asImmutable()
                            );
                        })(this, e, t);
                    },
                    equals: function (e) {
                        return deepEqual(this, e);
                    },
                    entrySeq: function () {
                        var e = this;
                        if (e._cache) return new ArraySeq(e._cache);
                        var t = e.toSeq().map(entryMapper).toIndexedSeq();
                        return (
                            (t.fromEntrySeq = function () {
                                return e.toSeq();
                            }),
                            t
                        );
                    },
                    filterNot: function (e, t) {
                        return this.filter(not(e), t);
                    },
                    findEntry: function (e, t, r) {
                        var i = r;
                        return (
                            this.__iterate(function (r, n, o) {
                                if (e.call(t, r, n, o)) return (i = [n, r]), !1;
                            }),
                            i
                        );
                    },
                    findKey: function (e, t) {
                        var r = this.findEntry(e, t);
                        return r && r[0];
                    },
                    findLast: function (e, t, r) {
                        return this.toKeyedSeq().reverse().find(e, t, r);
                    },
                    findLastEntry: function (e, t, r) {
                        return this.toKeyedSeq().reverse().findEntry(e, t, r);
                    },
                    findLastKey: function (e, t) {
                        return this.toKeyedSeq().reverse().findKey(e, t);
                    },
                    first: function () {
                        return this.find(returnTrue);
                    },
                    flatMap: function (e, t) {
                        return reify(
                            this,
                            (function flatMapFactory(e, t, r) {
                                var i = iterableClass(e);
                                return e
                                    .toSeq()
                                    .map(function (n, o) {
                                        return i(t.call(r, n, o, e));
                                    })
                                    .flatten(!0);
                            })(this, e, t)
                        );
                    },
                    flatten: function (e) {
                        return reify(this, flattenFactory(this, e, !0));
                    },
                    fromEntrySeq: function () {
                        return new FromEntriesSequence(this);
                    },
                    get: function (e, t) {
                        return this.find(
                            function (t, r) {
                                return is(r, e);
                            },
                            void 0,
                            t
                        );
                    },
                    getIn: function (e, t) {
                        for (var r, i = this, n = forceIterator(e); !(r = n.next()).done; ) {
                            var a = r.value;
                            if ((i = i && i.get ? i.get(a, o) : o) === o) return t;
                        }
                        return i;
                    },
                    groupBy: function (e, t) {
                        return (function groupByFactory(e, t, r) {
                            var i = isKeyed(e),
                                n = (isOrdered(e) ? OrderedMap() : Map()).asMutable();
                            e.__iterate(function (o, a) {
                                n.update(t.call(r, o, a, e), function (e) {
                                    return (e = e || []).push(i ? [a, o] : o), e;
                                });
                            });
                            var o = iterableClass(e);
                            return n.map(function (t) {
                                return reify(e, o(t));
                            });
                        })(this, e, t);
                    },
                    has: function (e) {
                        return this.get(e, o) !== o;
                    },
                    hasIn: function (e) {
                        return this.getIn(e, o) !== o;
                    },
                    isSubset: function (e) {
                        return (
                            (e = "function" == typeof e.includes ? e : Iterable(e)),
                            this.every(function (t) {
                                return e.includes(t);
                            })
                        );
                    },
                    isSuperset: function (e) {
                        return (e = "function" == typeof e.isSubset ? e : Iterable(e)).isSubset(this);
                    },
                    keyOf: function (e) {
                        return this.findKey(function (t) {
                            return is(t, e);
                        });
                    },
                    keySeq: function () {
                        return this.toSeq().map(keyMapper).toIndexedSeq();
                    },
                    last: function () {
                        return this.toSeq().reverse().first();
                    },
                    lastKeyOf: function (e) {
                        return this.toKeyedSeq().reverse().keyOf(e);
                    },
                    max: function (e) {
                        return maxFactory(this, e);
                    },
                    maxBy: function (e, t) {
                        return maxFactory(this, t, e);
                    },
                    min: function (e) {
                        return maxFactory(this, e ? neg(e) : defaultNegComparator);
                    },
                    minBy: function (e, t) {
                        return maxFactory(this, t ? neg(t) : defaultNegComparator, e);
                    },
                    rest: function () {
                        return this.slice(1);
                    },
                    skip: function (e) {
                        return this.slice(Math.max(0, e));
                    },
                    skipLast: function (e) {
                        return reify(this, this.toSeq().reverse().skip(e).reverse());
                    },
                    skipWhile: function (e, t) {
                        return reify(this, skipWhileFactory(this, e, t, !0));
                    },
                    skipUntil: function (e, t) {
                        return this.skipWhile(not(e), t);
                    },
                    sortBy: function (e, t) {
                        return reify(this, sortFactory(this, t, e));
                    },
                    take: function (e) {
                        return this.slice(0, Math.max(0, e));
                    },
                    takeLast: function (e) {
                        return reify(this, this.toSeq().reverse().take(e).reverse());
                    },
                    takeWhile: function (e, t) {
                        return reify(
                            this,
                            (function takeWhileFactory(e, t, r) {
                                var i = makeSequence(e);
                                return (
                                    (i.__iterateUncached = function (i, n) {
                                        var o = this;
                                        if (n) return this.cacheResult().__iterate(i, n);
                                        var a = 0;
                                        return (
                                            e.__iterate(function (e, n, s) {
                                                return t.call(r, e, n, s) && ++a && i(e, n, o);
                                            }),
                                            a
                                        );
                                    }),
                                    (i.__iteratorUncached = function (i, n) {
                                        var o = this;
                                        if (n) return this.cacheResult().__iterator(i, n);
                                        var a = e.__iterator(2, n),
                                            s = !0;
                                        return new Iterator(function () {
                                            if (!s) return { value: void 0, done: !0 };
                                            var e = a.next();
                                            if (e.done) return e;
                                            var n = e.value,
                                                c = n[0],
                                                u = n[1];
                                            return t.call(r, u, c, o) ? (2 === i ? e : iteratorValue(i, c, u, e)) : ((s = !1), { value: void 0, done: !0 });
                                        });
                                    }),
                                    i
                                );
                            })(this, e, t)
                        );
                    },
                    takeUntil: function (e, t) {
                        return this.takeWhile(not(e), t);
                    },
                    valueSeq: function () {
                        return this.toIndexedSeq();
                    },
                    hashCode: function () {
                        return (
                            this.__hash ||
                            (this.__hash = (function hashIterable(e) {
                                if (e.size === 1 / 0) return 0;
                                var t = isOrdered(e),
                                    r = isKeyed(e),
                                    i = t ? 1 : 0;
                                return (function murmurHashOfSize(e, t) {
                                    return (
                                        (t = f(t, 3432918353)),
                                        (t = f((t << 15) | (t >>> -15), 461845907)),
                                        (t = f((t << 13) | (t >>> -13), 5)),
                                        (t = f((t = ((t + 3864292196) | 0) ^ e) ^ (t >>> 16), 2246822507)),
                                        (t = smi((t = f(t ^ (t >>> 13), 3266489909)) ^ (t >>> 16)))
                                    );
                                })(
                                    e.__iterate(
                                        r
                                            ? t
                                                ? function (e, t) {
                                                      i = (31 * i + hashMerge(hash(e), hash(t))) | 0;
                                                  }
                                                : function (e, t) {
                                                      i = (i + hashMerge(hash(e), hash(t))) | 0;
                                                  }
                                            : t
                                            ? function (e) {
                                                  i = (31 * i + hash(e)) | 0;
                                              }
                                            : function (e) {
                                                  i = (i + hash(e)) | 0;
                                              }
                                    ),
                                    i
                                );
                            })(this))
                        );
                    },
                });
            var H = Iterable.prototype;
            (H[t] = !0),
                (H[p] = H.values),
                (H.__toJS = H.toArray),
                (H.__toStringMapper = quoteString),
                (H.inspect = H.toSource = function () {
                    return this.toString();
                }),
                (H.chain = H.flatMap),
                (H.contains = H.includes),
                mixin(KeyedIterable, {
                    flip: function () {
                        return reify(this, flipFactory(this));
                    },
                    mapEntries: function (e, t) {
                        var r = this,
                            i = 0;
                        return reify(
                            this,
                            this.toSeq()
                                .map(function (n, o) {
                                    return e.call(t, [o, n], i++, r);
                                })
                                .fromEntrySeq()
                        );
                    },
                    mapKeys: function (e, t) {
                        var r = this;
                        return reify(
                            this,
                            this.toSeq()
                                .flip()
                                .map(function (i, n) {
                                    return e.call(t, i, n, r);
                                })
                                .flip()
                        );
                    },
                });
            var K = KeyedIterable.prototype;
            function keyMapper(e, t) {
                return t;
            }
            function entryMapper(e, t) {
                return [t, e];
            }
            function not(e) {
                return function () {
                    return !e.apply(this, arguments);
                };
            }
            function neg(e) {
                return function () {
                    return -e.apply(this, arguments);
                };
            }
            function quoteString(e) {
                return "string" == typeof e ? JSON.stringify(e) : String(e);
            }
            function defaultZipper() {
                return arrCopy(arguments);
            }
            function defaultNegComparator(e, t) {
                return e < t ? 1 : e > t ? -1 : 0;
            }
            function hashMerge(e, t) {
                return (e ^ (t + 2654435769 + (e << 6) + (e >> 2))) | 0;
            }
            return (
                (K[r] = !0),
                (K[p] = H.entries),
                (K.__toJS = H.toObject),
                (K.__toStringMapper = function (e, t) {
                    return JSON.stringify(t) + ": " + quoteString(e);
                }),
                mixin(IndexedIterable, {
                    toKeyedSeq: function () {
                        return new ToKeyedSequence(this, !1);
                    },
                    filter: function (e, t) {
                        return reify(this, filterFactory(this, e, t, !1));
                    },
                    findIndex: function (e, t) {
                        var r = this.findEntry(e, t);
                        return r ? r[0] : -1;
                    },
                    indexOf: function (e) {
                        var t = this.keyOf(e);
                        return void 0 === t ? -1 : t;
                    },
                    lastIndexOf: function (e) {
                        var t = this.lastKeyOf(e);
                        return void 0 === t ? -1 : t;
                    },
                    reverse: function () {
                        return reify(this, reverseFactory(this, !1));
                    },
                    slice: function (e, t) {
                        return reify(this, sliceFactory(this, e, t, !1));
                    },
                    splice: function (e, t) {
                        var r = arguments.length;
                        if (((t = Math.max(0 | t, 0)), 0 === r || (2 === r && !t))) return this;
                        e = resolveBegin(e, e < 0 ? this.count() : this.size);
                        var i = this.slice(0, e);
                        return reify(this, 1 === r ? i : i.concat(arrCopy(arguments, 2), this.slice(e + t)));
                    },
                    findLastIndex: function (e, t) {
                        var r = this.findLastEntry(e, t);
                        return r ? r[0] : -1;
                    },
                    first: function () {
                        return this.get(0);
                    },
                    flatten: function (e) {
                        return reify(this, flattenFactory(this, e, !1));
                    },
                    get: function (e, t) {
                        return (e = wrapIndex(this, e)) < 0 || this.size === 1 / 0 || (void 0 !== this.size && e > this.size)
                            ? t
                            : this.find(
                                  function (t, r) {
                                      return r === e;
                                  },
                                  void 0,
                                  t
                              );
                    },
                    has: function (e) {
                        return (e = wrapIndex(this, e)) >= 0 && (void 0 !== this.size ? this.size === 1 / 0 || e < this.size : -1 !== this.indexOf(e));
                    },
                    interpose: function (e) {
                        return reify(
                            this,
                            (function interposeFactory(e, t) {
                                var r = makeSequence(e);
                                return (
                                    (r.size = e.size && 2 * e.size - 1),
                                    (r.__iterateUncached = function (r, i) {
                                        var n = this,
                                            o = 0;
                                        return (
                                            e.__iterate(function (e, i) {
                                                return (!o || !1 !== r(t, o++, n)) && !1 !== r(e, o++, n);
                                            }, i),
                                            o
                                        );
                                    }),
                                    (r.__iteratorUncached = function (r, i) {
                                        var n,
                                            o = e.__iterator(1, i),
                                            a = 0;
                                        return new Iterator(function () {
                                            return (!n || a % 2) && (n = o.next()).done ? n : a % 2 ? iteratorValue(r, a++, t) : iteratorValue(r, a++, n.value, n);
                                        });
                                    }),
                                    r
                                );
                            })(this, e)
                        );
                    },
                    interleave: function () {
                        var e = [this].concat(arrCopy(arguments)),
                            t = zipWithFactory(this.toSeq(), IndexedSeq.of, e),
                            r = t.flatten(!0);
                        return t.size && (r.size = t.size * e.length), reify(this, r);
                    },
                    keySeq: function () {
                        return Range(0, this.size);
                    },
                    last: function () {
                        return this.get(-1);
                    },
                    skipWhile: function (e, t) {
                        return reify(this, skipWhileFactory(this, e, t, !1));
                    },
                    zip: function () {
                        var e = [this].concat(arrCopy(arguments));
                        return reify(this, zipWithFactory(this, defaultZipper, e));
                    },
                    zipWith: function (e) {
                        var t = arrCopy(arguments);
                        return (t[0] = this), reify(this, zipWithFactory(this, e, t));
                    },
                }),
                (IndexedIterable.prototype[i] = !0),
                (IndexedIterable.prototype[n] = !0),
                mixin(SetIterable, {
                    get: function (e, t) {
                        return this.has(e) ? e : t;
                    },
                    includes: function (e) {
                        return this.has(e);
                    },
                    keySeq: function () {
                        return this.valueSeq();
                    },
                }),
                (SetIterable.prototype.has = H.includes),
                (SetIterable.prototype.contains = SetIterable.prototype.includes),
                mixin(KeyedSeq, KeyedIterable.prototype),
                mixin(IndexedSeq, IndexedIterable.prototype),
                mixin(SetSeq, SetIterable.prototype),
                mixin(KeyedCollection, KeyedIterable.prototype),
                mixin(IndexedCollection, IndexedIterable.prototype),
                mixin(SetCollection, SetIterable.prototype),
                { Iterable, Seq, Collection, Map, OrderedMap, List, Stack, Set, OrderedSet, Record, Range, Repeat, is, fromJS }
            );
        })();
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = Array.isArray,
            n = Object.keys,
            o = Object.prototype.hasOwnProperty;
        t.isEqual = function isEqual(e, t, r = !0) {
            try {
                return (function equal(e, t, r) {
                    if (e === t) return !0;
                    if (e && t && "object" == typeof e && "object" == typeof t) {
                        const a = i(e),
                            s = i(t);
                        let c, u, l;
                        if (a && s) {
                            if (((u = e.length), u !== t.length)) return !1;
                            for (c = u; 0 != c--; ) {
                                if (!r && e[c] !== t[c]) return !1;
                                if (r && !equal(e[c], t[c], !0)) return !1;
                            }
                            return !0;
                        }
                        if (a !== s) return !1;
                        const d = e instanceof Date,
                            p = t instanceof Date;
                        if (d !== p) return !1;
                        if (d && p) return e.getTime() === t.getTime();
                        const f = e instanceof RegExp,
                            v = t instanceof RegExp;
                        if (f !== v) return !1;
                        if (f && v) return e.toString() === t.toString();
                        if ("function" == typeof e.equals && "function" == typeof t.equals) return e.equals(t);
                        const h = n(e);
                        if (((u = h.length), u !== n(t).length)) return !1;
                        for (c = u; 0 != c--; ) if (!o.call(t, h[c])) return !1;
                        for (c = u; 0 != c--; )
                            if (((l = h[c]), "_owner" !== l || !e.$$typeof)) {
                                if (!r && e[l] !== t[l]) return !1;
                                if (r && !equal(e[l], t[l], !0)) return !1;
                            }
                        return !0;
                    }
                    return e != e && t != t;
                })(e, t, r);
            } catch (a) {
                if ((a.message && a.message.match(/stack|recursion/i)) || -2146828260 === a.number) return console.warn("Warning: isEqual does not handle circular references.", a.name, a.message), !1;
                throw a;
            }
        };
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(1),
            n = r(0),
            o = r(8),
            a = r(37),
            s = r(38),
            c = r(86),
            u = r(91),
            l = { Frame: n.Frame, Stack: n.Stack, Vector: n.Vector, VectorGroup: n.VectorGroup, SVG: n.SVG, Text: n.Text, ComponentContainer: n.ComponentContainer };
        t.renderPresentation = function renderPresentation(e, t, r, d = {}) {
            const p = e.props.id;
            if (p && d[p]) return d[p];
            const f = e.children ? e.children.map((e) => renderPresentation(e, t, r, d)) : [],
                { componentClass: v, codeOverrideIdentifier: h, actions: g } = e;
            let { props: m } = e;
            a.framerLibraryNeedsCompatibility() && (m = s.downgradeProps(m));
            const y = m.__slotKeys;
            if (y && Array.isArray(y)) {
                m = { ...m };
                for (const e of y) {
                    const i = m[e];
                    Array.isArray(i) && (m[e] = i.map((e) => renderPresentation(e, t, r, d)));
                }
            }
            n.addServerUrlToResourceProps && (m = n.addServerUrlToResourceProps(m));
            let S = r ? e._type : null;
            if (S) return i.createElement(S, m, f);
            if (
                ((S = (function constructorForComponent(e) {
                    const t = l[e];
                    if (t) return t;
                    const r = o.sandboxComponentLoader.componentForIdentifier(e);
                    return r && o.isSandboxReactComponentDefinition(r) ? r.class : o.sandboxComponentLoader.errorForIdentifier && o.sandboxComponentLoader.errorForIdentifier(e) ? null : n.Frame;
                })(v)),
                !S)
            )
                return null;
            const b = [],
                w = u.createActionsOverride(g, (e) => {
                    const i = t[e];
                    return i ? renderPresentation(i, t, r, d) : null;
                });
            if ((w && b.push(w), h)) {
                const e = o.sandboxComponentLoader.componentForIdentifier(h);
                e && o.isSandboxOverrideDefinition(e) && b.push(e.class);
            }
            b.length > 0 && (S = c.WithOverrides(S, b)), n.constraintsEnabled && n.constraintsEnabled(m) && (m._constraints.enabled = !1), (e._type = S);
            const P = i.createElement(S, m, f);
            return p && (d[p] = P), P;
        };
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(1),
            n = r(0),
            o = r(87),
            a = r(90),
            s = r(2);
        function createOverrideHook(e) {
            return "function" == typeof e ? (t) => e(a.convertColorProps(t)) : () => a.convertColorProps(e);
        }
        t.WithOverrides = function WithOverrides(e, t) {
            if (0 === t.length) return e;
            const r = t.map(createOverrideHook);
            let a = e;
            if (!n.DataObserverContext) {
                for (const r of t) (a = n.WithOverride(a, r)), o(a, e);
                return a;
            }
            return (
                (a = function (t) {
                    i.useContext(n.DataObserverContext);
                    const o = [];
                    for (const e of r) o.push(e(t));
                    const a = (function mergeOverrideProps(e) {
                        const t = Object.assign({}, ...e),
                            r = {};
                        for (const i of e)
                            for (const e in i) {
                                const t = i[e];
                                "function" == typeof t && (r[e] || (r[e] = []), r[e].push(t));
                            }
                        for (const i in r) {
                            const e = r[i];
                            1 === e.length
                                ? (t[i] = e[0])
                                : (t[i] = (...t) => {
                                      e.forEach((e) => e(...t));
                                  });
                        }
                        return t;
                    })(o);
                    for (const e in a) {
                        const t = a[e];
                        "function" == typeof n.isAnimatable && n.isAnimatable(t) && ((a[e] = t.get()), s.warnOnce("The use of Animatable values in Overrides is no longer supported. use MotionValues instead."));
                    }
                    const { style: c, ...u } = t;
                    return i.createElement(e, Object.assign({}, u, a, { _initialStyle: c }));
                }),
                o(a, e),
                (a.displayName = `WithOverrides(${e.displayName || e.name})`),
                a
            );
        };
    },
    function (e, t, r) {
        "use strict";
        var i = r(88),
            n = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 },
            o = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
            a = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
            s = {};
        function getStatics(e) {
            return i.isMemo(e) ? a : s[e.$$typeof] || n;
        }
        (s[i.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }), (s[i.Memo] = a);
        var c = Object.defineProperty,
            u = Object.getOwnPropertyNames,
            l = Object.getOwnPropertySymbols,
            d = Object.getOwnPropertyDescriptor,
            p = Object.getPrototypeOf,
            f = Object.prototype;
        e.exports = function hoistNonReactStatics(e, t, r) {
            if ("string" != typeof t) {
                if (f) {
                    var i = p(t);
                    i && i !== f && hoistNonReactStatics(e, i, r);
                }
                var n = u(t);
                l && (n = n.concat(l(t)));
                for (var a = getStatics(e), s = getStatics(t), v = 0; v < n.length; ++v) {
                    var h = n[v];
                    if (!(o[h] || (r && r[h]) || (s && s[h]) || (a && a[h]))) {
                        var g = d(t, h);
                        try {
                            c(e, h, g);
                        } catch (m) {}
                    }
                }
            }
            return e;
        };
    },
    function (e, t, r) {
        "use strict";
        e.exports = r(89);
    },
    function (e, t, r) {
        "use strict";
        var i = "function" == typeof Symbol && Symbol.for,
            n = i ? Symbol.for("react.element") : 60103,
            o = i ? Symbol.for("react.portal") : 60106,
            a = i ? Symbol.for("react.fragment") : 60107,
            s = i ? Symbol.for("react.strict_mode") : 60108,
            c = i ? Symbol.for("react.profiler") : 60114,
            u = i ? Symbol.for("react.provider") : 60109,
            l = i ? Symbol.for("react.context") : 60110,
            d = i ? Symbol.for("react.async_mode") : 60111,
            p = i ? Symbol.for("react.concurrent_mode") : 60111,
            f = i ? Symbol.for("react.forward_ref") : 60112,
            v = i ? Symbol.for("react.suspense") : 60113,
            h = i ? Symbol.for("react.suspense_list") : 60120,
            g = i ? Symbol.for("react.memo") : 60115,
            m = i ? Symbol.for("react.lazy") : 60116,
            y = i ? Symbol.for("react.block") : 60121,
            S = i ? Symbol.for("react.fundamental") : 60117,
            b = i ? Symbol.for("react.responder") : 60118,
            w = i ? Symbol.for("react.scope") : 60119;
        function z(e) {
            if ("object" == typeof e && null !== e) {
                var t = e.$$typeof;
                switch (t) {
                    case n:
                        switch ((e = e.type)) {
                            case d:
                            case p:
                            case a:
                            case c:
                            case s:
                            case v:
                                return e;
                            default:
                                switch ((e = e && e.$$typeof)) {
                                    case l:
                                    case f:
                                    case m:
                                    case g:
                                    case u:
                                        return e;
                                    default:
                                        return t;
                                }
                        }
                    case o:
                        return t;
                }
            }
        }
        function A(e) {
            return z(e) === p;
        }
        (t.AsyncMode = d),
            (t.ConcurrentMode = p),
            (t.ContextConsumer = l),
            (t.ContextProvider = u),
            (t.Element = n),
            (t.ForwardRef = f),
            (t.Fragment = a),
            (t.Lazy = m),
            (t.Memo = g),
            (t.Portal = o),
            (t.Profiler = c),
            (t.StrictMode = s),
            (t.Suspense = v),
            (t.isAsyncMode = function (e) {
                return A(e) || z(e) === d;
            }),
            (t.isConcurrentMode = A),
            (t.isContextConsumer = function (e) {
                return z(e) === l;
            }),
            (t.isContextProvider = function (e) {
                return z(e) === u;
            }),
            (t.isElement = function (e) {
                return "object" == typeof e && null !== e && e.$$typeof === n;
            }),
            (t.isForwardRef = function (e) {
                return z(e) === f;
            }),
            (t.isFragment = function (e) {
                return z(e) === a;
            }),
            (t.isLazy = function (e) {
                return z(e) === m;
            }),
            (t.isMemo = function (e) {
                return z(e) === g;
            }),
            (t.isPortal = function (e) {
                return z(e) === o;
            }),
            (t.isProfiler = function (e) {
                return z(e) === c;
            }),
            (t.isStrictMode = function (e) {
                return z(e) === s;
            }),
            (t.isSuspense = function (e) {
                return z(e) === v;
            }),
            (t.isValidElementType = function (e) {
                return (
                    "string" == typeof e ||
                    "function" == typeof e ||
                    e === a ||
                    e === p ||
                    e === c ||
                    e === s ||
                    e === v ||
                    e === h ||
                    ("object" == typeof e && null !== e && (e.$$typeof === m || e.$$typeof === g || e.$$typeof === u || e.$$typeof === l || e.$$typeof === f || e.$$typeof === S || e.$$typeof === b || e.$$typeof === w || e.$$typeof === y))
                );
            }),
            (t.typeOf = z);
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(0);
        function convertColorObject(e) {
            return "string" == typeof e || (i.isMotionValue && i.isMotionValue(e))
                ? e
                : i.LinearGradient && i.LinearGradient.isLinearGradient(e)
                ? i.LinearGradient.toCSS(e)
                : i.RadialGradient && i.RadialGradient.isRadialGradient(e)
                ? i.RadialGradient.toCSS(e)
                : i.Color.isColorObject(e)
                ? i.Color.toRgbString(e)
                : e;
        }
        t.convertColorProps = function convertColorProps(e) {
            if (e.background || e.color) {
                const t = Object.assign({}, e);
                return e.background && (t.background = convertColorObject(e.background)), e.color && (t.color = convertColorObject(e.color)), t;
            }
            return e;
        };
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(8),
            n = r(0);
        function isAction(e) {
            return "function" == typeof e;
        }
        t.createActionsOverride = function createActionsOverride(e, t) {
            if (!e) return;
            const r = Object.keys(e);
            return 0 !== r.length
                ? () => {
                      const o = {};
                      for (const a of r) {
                          const r = e[a],
                              s = [];
                          for (const e of r) {
                              const { identifier: r, info: o } = e;
                              if (!r || !o) continue;
                              const a = i.sandboxComponentLoader.componentForIdentifier(r);
                              if (!a) continue;
                              const c = {};
                              for (const e in o) {
                                  const r = o[e];
                                  r.type === n.ControlType.ComponentInstance ? (c[e] = t(r.value)) : (c[e] = r.value);
                              }
                              const u = a.class;
                              if (!isAction(u)) continue;
                              const l = u(c);
                              "function" == typeof l && s.push(l);
                          }
                          0 !== s.length &&
                              (1 === s.length
                                  ? (o[a] = s[0])
                                  : (o[a] = (...e) => {
                                        s.forEach((t) => t(...e));
                                    }));
                      }
                      return o;
                  }
                : void 0;
        };
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(0);
        t.constructFramerEventSession = function constructFramerEventSession() {
            return new i.FramerEventSession((e, t, r) => {
                r.dispatchEvent(new CustomEvent("FramerEvent", { bubbles: !0, detail: { type: e, event: t } }));
            });
        };
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        function getStorage(e) {
            try {
                return window[e];
            } catch {
                return null;
            }
        }
        function getStorageOrThrow(e) {
            return window[e];
        }
        function getBool(e, t, r = !1) {
            var i;
            const n = null === (i = getStorage(e)) || void 0 === i ? void 0 : i.getItem(t);
            return n ? "true" === n : r;
        }
        function setBool(e, t, r) {
            getStorageOrThrow(e).setItem(t, `${r}`);
        }
        t.PersistedData = class PersistedData {
            static get consoleEnabled() {
                return getBool("sessionStorage", "_framerPreviewConsoleEnabled", !1);
            }
            static set consoleEnabled(e) {
                setBool("sessionStorage", "_framerPreviewConsoleEnabled", e);
            }
            static get consoleExpanded() {
                return getBool("sessionStorage", "_framerPreviewConsoleExpanded", !0);
            }
            static set consoleExpanded(e) {
                setBool("sessionStorage", "_framerPreviewConsoleExpanded", e);
            }
            static get consoleHeight() {
                return (function getNumber(e, t, r) {
                    var i;
                    const n = null === (i = getStorage(e)) || void 0 === i ? void 0 : i.getItem(t);
                    return n ? Number.parseFloat(n) : "function" == typeof r ? r() : r;
                })("localStorage", "_framerPreviewConsoleHeight", () => window.innerHeight / 2);
            }
            static set consoleHeight(e) {
                !(function setNumber(e, t, r) {
                    getStorageOrThrow(e).setItem(t, `${r}`);
                })("localStorage", "_framerPreviewConsoleHeight", e);
            }
            static get autoScale() {
                return (function getString(e, t, r) {
                    var i;
                    const n = null === (i = getStorage(e)) || void 0 === i ? void 0 : i.getItem(t);
                    return null !== n ? n : r;
                })("localStorage", "_framerPreviewAutoScale", "both");
            }
            static set autoScale(e) {
                !(function setString(e, t, r) {
                    getStorageOrThrow(e).setItem(t, String(r));
                })("localStorage", "_framerPreviewAutoScale", e);
            }
        };
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(1),
            n = r(0);
        t.wrapInCustomProperties = function wrapInCustomProperties(e, t) {
            return void 0 === n.CustomProperties ? e : i.createElement(n.CustomProperties, { customProperties: t }, e);
        };
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
            (function __export(e) {
                for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r]);
            })(r(96));
        var i = r(32);
        (t.isFiniteNumber = i.isFiniteNumber), (t.finiteNumber = i.finiteNumber);
        var n = r(101);
        t.initializeRuntime = n.initializeRuntime;
        var o = r(33);
        (t.NavigateOptions = o.NavigateOptions),
            (t.navigateActionDefaults = o.navigateActionDefaults),
            (t.navigateActionControlTypes = o.navigateActionControlTypes),
            (t.NavigateActionTransitionType = o.NavigateActionTransitionType),
            (t.NavigateActionAppearsFrom = o.NavigateActionAppearsFrom),
            (t.isNavigationAnimationHidden = o.isNavigationAnimationHidden);
        var a = r(40);
        (t.executionTimeBudgets = a.executionTimeBudgets), (t.useExecutionTimeBudgetsWhileRendering = a.useExecutionTimeBudgetsWhileRendering);
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = r(97);
        (t.componentLoader = i.componentLoader),
            (t.isErrorDefinition = i.isErrorDefinition),
            (t.isDesignDefinition = i.isDesignDefinition),
            (t.isReactComponentDefinition = i.isReactComponentDefinition),
            (t.isOverrideDefinition = i.isOverrideDefinition),
            (t.isDeviceDefinition = i.isDeviceDefinition),
            (t.PackageIdentifier = i.PackageIdentifier),
            (t.EntityIdentifier = i.EntityIdentifier),
            (t.ComponentLoaderInterface = i.ComponentLoaderInterface),
            (t.ComponentLoaderState = i.ComponentLoaderState),
            (t.ReactComponentDefinition = i.ReactComponentDefinition),
            (t.DesignComponentDefinition = i.DesignComponentDefinition),
            (t.EntityDefinition = i.EntityDefinition),
            (t.DeviceDefinition = i.DeviceDefinition),
            (t.EntityMap = i.EntityMap),
            (t.HostPackageMap = i.HostPackageMap),
            (t.HostActionControls = i.HostActionControls),
            (t.HostControlDescription = i.HostControlDescription),
            (t.HostArrayControlDescription = i.HostArrayControlDescription);
        var n = r(100);
        t.extractComponentDefinitionsFromScript = n.extractComponentDefinitionsFromScript;
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = r(98);
        (t.componentLoader = i.componentLoader), (t.ComponentLoaderInterface = i.ComponentLoaderInterface), (t.ComponentLoaderState = i.ComponentLoaderState);
        var n = r(39);
        (t.PackageIdentifier = n.PackageIdentifier),
            (t.EntityIdentifier = n.EntityIdentifier),
            (t.EntityDefinition = n.EntityDefinition),
            (t.EntityMap = n.EntityMap),
            (t.HostPackageMap = n.HostPackageMap),
            (t.ReactComponentDefinition = n.ReactComponentDefinition),
            (t.DesignComponentDefinition = n.DesignComponentDefinition),
            (t.DeviceDefinition = n.DeviceDefinition),
            (t.HostActionControls = n.HostActionControls),
            (t.HostControlDescription = n.HostControlDescription),
            (t.HostArrayControlDescription = n.HostArrayControlDescription),
            (t.isDesignDefinition = n.isDesignDefinition),
            (t.isErrorDefinition = n.isErrorDefinition),
            (t.isDeviceDefinition = n.isDeviceDefinition),
            (t.isOverrideDefinition = n.isOverrideDefinition),
            (t.isReactComponentDefinition = n.isReactComponentDefinition);
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(2),
            n = r(39),
            o = r(10),
            a = r(9),
            s = r(99),
            c = r(36),
            u = i.getLogger("componentloader");
        t.componentLoader = new (class ComponentLoader {
            constructor() {
                this.state = {
                    localPackageIdentifier: o.localPackageFallbackIdentifier,
                    packages: {},
                    entities: c.defaultComponentDefinitions,
                    entityIdsByPackage: {},
                    visibleComponentIdentifiers: [],
                    visiblePackageNames: [],
                    visiblePackageFileNames: {},
                    tokensByPackage: {},
                };
            }
            setState(e) {
                u.debug("setState:", e), (this.state = e);
            }
            componentForIdentifier(e) {
                return this.state.entities[e] || null;
            }
            reactComponentForIdentifier(e) {
                const t = this.componentForIdentifier(e);
                return t && n.isReactComponentDefinition(t) ? t : null;
            }
            componentsForPackage(e) {
                return (this.state.entityIdsByPackage[e] || []).map((e) => this.state.entities[e]);
            }
            componentIdentifiers() {
                return this.state.visibleComponentIdentifiers;
            }
            allDevices() {
                return Object.values(this.state.entities).filter((e) => n.isDeviceDefinition(e));
            }
            errorForIdentifier(e) {
                const { entities: t, visiblePackageFileNames: r } = this.state,
                    i = a.extractComponentNameFromIdentifier(e);
                let o = null;
                if (Object.entries(r).length) {
                    let a = !1;
                    for (const c in r)
                        if (r[c].includes(i)) {
                            void 0 !== t[e] || n.isErrorDefinition(t[i]) || (o = s.createErrorDefinition({ identifier: e, file: i, error: "Component cannot be found." })), (a = !0);
                            break;
                        }
                    if ((a || (o = s.createErrorDefinition({ identifier: e, file: i, error: "Component file does not exist.", custom: { fileDoesNotExist: !0 } })), o)) return o;
                }
                const c = t[i];
                return n.isErrorDefinition(c) ? c : null;
            }
            forEachComponent(e) {
                for (const t of this.state.visibleComponentIdentifiers) {
                    const r = this.state.entities[t];
                    if (!n.isErrorDefinition(r) && e(r)) break;
                }
            }
            forEachDesignComponent(e) {
                this.forEachComponent((t) => {
                    if (n.isDesignDefinition(t)) return e(t);
                });
            }
            localPackageIdentifier() {
                return this.state.localPackageIdentifier;
            }
            packageDisplayName(e) {
                if ("framer" === e) return "Framer";
                const t = this.state.packages[e];
                return t && t.displayName;
            }
            packageIdentifiers() {
                return this.state.visiblePackageNames;
            }
            packageFileNames(e) {
                return this.state.visiblePackageFileNames[e];
            }
            tokensForPackage(e) {
                return this.state.tokensByPackage[e];
            }
        })();
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.createErrorDefinition = function createErrorDefinition({ identifier: e, file: t, error: r, custom: i }) {
                const n = (function cleanFilename(e) {
                    return e.startsWith("./") ? e.slice(2) : e;
                })(t);
                return { depth: e.startsWith(".") ? 0 : 1, error: r, file: t, identifier: e, name: n, packageIdentifier: "<unknown>", properties: {}, type: "component", ...i };
            });
    },
    function (e, t, r) {
        "use strict";
        function execAll(e, t) {
            const r = [];
            for (;;) {
                const i = e.exec(t);
                if (!i) break;
                r.push(i);
            }
            return r;
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.extractComponentDefinitionsFromScript = function extractComponentDefinitionsFromScript(e) {
                const t = execAll(/^exports\.__info__ = (.*)\;/gm, e),
                    r = execAll(/^\/\*\*\*\/ \"(.*)\"\:$/gm, e),
                    i = t.map((e) => ({ type: "info", index: e.index, text: e[1] })),
                    n = r.map((e) => ({ type: "file", index: e.index, text: e[1] })),
                    o = i.concat(n);
                o.sort((e, t) => e.index - t.index);
                const a = [];
                let s = null;
                for (const l of o)
                    if ("file" !== l.type) {
                        if (s)
                            try {
                                const e = JSON.parse(l.text);
                                s.infos.push(...e);
                            } catch (u) {}
                    } else (s = { name: l.text, infos: [] }), a.push(s);
                const c = new Map();
                for (const l of a) {
                    const e = l.name.replace("./code/", "./"),
                        t = l.infos.map((t) => ({ file: e, type: t.type, name: t.name, packageIdentifier: "", depth: 0, identifier: e + "_" + t.name, properties: {} }));
                    c.set(e, t);
                }
                return c;
            });
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(0),
            n = r(4),
            o = r(20),
            a = r(2),
            s = r(40),
            c = {
                addActionControls: n.addActionControls,
                assetResolver: () => {
                    a.warnOnce("Using default assetResolver from runtime. Override by providing an assetResolver to initializeRuntime()");
                },
                publishLayoutChange: () => {
                    a.warnOnce("Using default publishLayoutChange from runtime. Override by providing publishLayoutChange to initializeRuntime()");
                },
                componentLoader: o.sandboxComponentLoader,
            };
        t.initializeRuntime = function initializeRuntime({ executionTimeBudgets: e, ...t } = {}) {
            "function" == typeof i._injectRuntime
                ? (s.initializeExecutionTimeBudgets(null == e ? void 0 : e.frame, null == e ? void 0 : e.component), i._injectRuntime({ ...c, ...t }))
                : console.warn("Trying to initializeRuntime without _injectRuntime function from Framer Library");
        };
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(12),
            n = r(0),
            o = r(2),
            a = r(103),
            s = o.getLogger("initializeAssetResolver");
        let c = void 0;
        (t.initializeAssetResolver = function initializeAssetResolver(e, t) {
            if (c) throw new Error("initializeAssetResolver() should only be called once");
            const r = n.desktopAssetResolver && "function" == typeof n.desktopAssetResolver;
            "web" === t && e ? (c = i.webAssetResolver(a.getServiceMap().userContent, e)) : r ? (c = n.desktopAssetResolver) : ((c = null), s.warn("Unable to initialize assetResolver of type ", t, " with assetMap ", e));
            const o = {};
            return null !== c && (o.assetResolver = c), o;
        }),
            (t.getAssetResolver = function getAssetResolver() {
                if (void 0 === c) throw new Error("getAssetResolver() should not be called before initializeAssetResolver()");
                return c;
            });
    },
    function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const i = r(2),
            n = r(41);
        var o = r(41);
        (t.ServiceMap = o.ServiceMap), (t.getServiceMap = o.getServiceMap);
        const a = { app: "127.0.0.1", canvas: "127.0.0.1", https: !1 },
            s = { app: "localhost", canvas: "localhost", https: !1 },
            c = { app: "web.framerlocal.com", canvas: "web.framerlocal.com", https: !1 },
            u = [
                { app: "development.framer.com", canvas: "framercanvas.dev", https: !0 },
                { app: ".development.framer.com", canvas: ".framercanvas.dev", https: !0 },
                { app: ".framer.com", canvas: ".framercanvas.com", https: !0 },
                { app: "framer.com", canvas: "framercanvas.com", https: !0 },
                c,
                a,
                s,
            ];
        function domainMapForEnvironment(e, t) {
            for (const r of u) {
                const i = r[e];
                if (t === i) return r;
                if (i.startsWith(".") && t.endsWith(i)) return r;
            }
        }
        function sandboxAppRelativeToEditor(e) {
            const r = new URL(e, location.href);
            if (r.origin !== location.origin) throw Error(`Domain lookup requires relative paths. Received ${e}`);
            const i = domainMapForEnvironment("app", location.hostname);
            if (!i || (i.https && "https:" !== r.protocol)) throw Error(`Running on unknown app domain: ${r}`);
            let o;
            try {
                o = new URL(n.getServiceMap().canvas).hostname;
            } catch {}
            const a = o ? r.hostname : i.app,
                s = null != o ? o : i[t.hasUnsafeSameOriginSandboxForTesting ? "app" : "canvas"];
            return r.hostname.endsWith(a) && (r.hostname = r.hostname.slice(0, -a.length) + s), { url: r.href, origin: r.origin, isCrossOriginProtected: a !== s };
        }
        (t.hasUnsafeSameOriginSandboxForTesting = !1),
            (t.sandboxAppRelativeToEditor = sandboxAppRelativeToEditor),
            (t.assertAllowSameOriginForSandboxApp = function assertAllowSameOriginForSandboxApp(e) {
                const { origin: r, isCrossOriginProtected: n } = sandboxAppRelativeToEditor(e),
                    o = location.hostname === a.app,
                    u = location.hostname === s.app,
                    l = location.hostname === c.app,
                    d = o || u || l || t.hasUnsafeSameOriginSandboxForTesting;
                i.assert(n || d, `Attempt to create unsafe sandboxed app for origin: ${r} on page with origin: ${location.origin}`);
            }),
            (t.assertEditorApp = function assertEditorApp(e) {
                const t = new URL(e),
                    r = domainMapForEnvironment("app", t.hostname);
                return i.assert(t && t.protocol === location.protocol && r, `Attempt to create sandboxed app for editor with unknown origin: ${origin}`), { origin: t.origin };
            });
    },
]);
//# sourceMappingURL=standalone.js.map
