(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/algoliasearch/dist/algoliasearch-lite.umd.js
  var require_algoliasearch_lite_umd = __commonJS({
    "node_modules/algoliasearch/dist/algoliasearch-lite.umd.js"(exports, module) {
      !function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).algoliasearch = t();
      }(exports, function() {
        "use strict";
        function e(e2, t2, r2) {
          return t2 in e2 ? Object.defineProperty(e2, t2, { value: r2, enumerable: true, configurable: true, writable: true }) : e2[t2] = r2, e2;
        }
        function t(e2, t2) {
          var r2 = Object.keys(e2);
          if (Object.getOwnPropertySymbols) {
            var n2 = Object.getOwnPropertySymbols(e2);
            t2 && (n2 = n2.filter(function(t3) {
              return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
            })), r2.push.apply(r2, n2);
          }
          return r2;
        }
        function r(r2) {
          for (var n2 = 1; n2 < arguments.length; n2++) {
            var o2 = null != arguments[n2] ? arguments[n2] : {};
            n2 % 2 ? t(Object(o2), true).forEach(function(t2) {
              e(r2, t2, o2[t2]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r2, Object.getOwnPropertyDescriptors(o2)) : t(Object(o2)).forEach(function(e2) {
              Object.defineProperty(r2, e2, Object.getOwnPropertyDescriptor(o2, e2));
            });
          }
          return r2;
        }
        function n(e2, t2) {
          if (null == e2)
            return {};
          var r2, n2, o2 = function(e3, t3) {
            if (null == e3)
              return {};
            var r3, n3, o3 = {}, a3 = Object.keys(e3);
            for (n3 = 0; n3 < a3.length; n3++)
              r3 = a3[n3], t3.indexOf(r3) >= 0 || (o3[r3] = e3[r3]);
            return o3;
          }(e2, t2);
          if (Object.getOwnPropertySymbols) {
            var a2 = Object.getOwnPropertySymbols(e2);
            for (n2 = 0; n2 < a2.length; n2++)
              r2 = a2[n2], t2.indexOf(r2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, r2) && (o2[r2] = e2[r2]);
          }
          return o2;
        }
        function o(e2, t2) {
          return function(e3) {
            if (Array.isArray(e3))
              return e3;
          }(e2) || function(e3, t3) {
            if (!(Symbol.iterator in Object(e3) || "[object Arguments]" === Object.prototype.toString.call(e3)))
              return;
            var r2 = [], n2 = true, o2 = false, a2 = void 0;
            try {
              for (var u2, i2 = e3[Symbol.iterator](); !(n2 = (u2 = i2.next()).done) && (r2.push(u2.value), !t3 || r2.length !== t3); n2 = true)
                ;
            } catch (e4) {
              o2 = true, a2 = e4;
            } finally {
              try {
                n2 || null == i2.return || i2.return();
              } finally {
                if (o2)
                  throw a2;
              }
            }
            return r2;
          }(e2, t2) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }();
        }
        function a(e2) {
          return function(e3) {
            if (Array.isArray(e3)) {
              for (var t2 = 0, r2 = new Array(e3.length); t2 < e3.length; t2++)
                r2[t2] = e3[t2];
              return r2;
            }
          }(e2) || function(e3) {
            if (Symbol.iterator in Object(e3) || "[object Arguments]" === Object.prototype.toString.call(e3))
              return Array.from(e3);
          }(e2) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance");
          }();
        }
        function u(e2) {
          var t2, r2 = "algoliasearch-client-js-".concat(e2.key), n2 = function() {
            return void 0 === t2 && (t2 = e2.localStorage || window.localStorage), t2;
          }, a2 = function() {
            return JSON.parse(n2().getItem(r2) || "{}");
          }, u2 = function(e3) {
            n2().setItem(r2, JSON.stringify(e3));
          }, i2 = function() {
            var t3 = e2.timeToLive ? 1e3 * e2.timeToLive : null, r3 = a2(), n3 = Object.fromEntries(Object.entries(r3).filter(function(e3) {
              return void 0 !== o(e3, 2)[1].timestamp;
            }));
            if (u2(n3), t3) {
              var i3 = Object.fromEntries(Object.entries(n3).filter(function(e3) {
                var r4 = o(e3, 2)[1], n4 = (/* @__PURE__ */ new Date()).getTime();
                return !(r4.timestamp + t3 < n4);
              }));
              u2(i3);
            }
          };
          return { get: function(e3, t3) {
            var r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
              return Promise.resolve();
            } };
            return Promise.resolve().then(function() {
              i2();
              var t4 = JSON.stringify(e3);
              return a2()[t4];
            }).then(function(e4) {
              return Promise.all([e4 ? e4.value : t3(), void 0 !== e4]);
            }).then(function(e4) {
              var t4 = o(e4, 2), n3 = t4[0], a3 = t4[1];
              return Promise.all([n3, a3 || r3.miss(n3)]);
            }).then(function(e4) {
              return o(e4, 1)[0];
            });
          }, set: function(e3, t3) {
            return Promise.resolve().then(function() {
              var o2 = a2();
              return o2[JSON.stringify(e3)] = { timestamp: (/* @__PURE__ */ new Date()).getTime(), value: t3 }, n2().setItem(r2, JSON.stringify(o2)), t3;
            });
          }, delete: function(e3) {
            return Promise.resolve().then(function() {
              var t3 = a2();
              delete t3[JSON.stringify(e3)], n2().setItem(r2, JSON.stringify(t3));
            });
          }, clear: function() {
            return Promise.resolve().then(function() {
              n2().removeItem(r2);
            });
          } };
        }
        function i(e2) {
          var t2 = a(e2.caches), r2 = t2.shift();
          return void 0 === r2 ? { get: function(e3, t3) {
            var r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
              return Promise.resolve();
            } }, n2 = t3();
            return n2.then(function(e4) {
              return Promise.all([e4, r3.miss(e4)]);
            }).then(function(e4) {
              return o(e4, 1)[0];
            });
          }, set: function(e3, t3) {
            return Promise.resolve(t3);
          }, delete: function(e3) {
            return Promise.resolve();
          }, clear: function() {
            return Promise.resolve();
          } } : { get: function(e3, n2) {
            var o2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
              return Promise.resolve();
            } };
            return r2.get(e3, n2, o2).catch(function() {
              return i({ caches: t2 }).get(e3, n2, o2);
            });
          }, set: function(e3, n2) {
            return r2.set(e3, n2).catch(function() {
              return i({ caches: t2 }).set(e3, n2);
            });
          }, delete: function(e3) {
            return r2.delete(e3).catch(function() {
              return i({ caches: t2 }).delete(e3);
            });
          }, clear: function() {
            return r2.clear().catch(function() {
              return i({ caches: t2 }).clear();
            });
          } };
        }
        function s() {
          var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { serializable: true }, t2 = {};
          return { get: function(r2, n2) {
            var o2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
              return Promise.resolve();
            } }, a2 = JSON.stringify(r2);
            if (a2 in t2)
              return Promise.resolve(e2.serializable ? JSON.parse(t2[a2]) : t2[a2]);
            var u2 = n2(), i2 = o2 && o2.miss || function() {
              return Promise.resolve();
            };
            return u2.then(function(e3) {
              return i2(e3);
            }).then(function() {
              return u2;
            });
          }, set: function(r2, n2) {
            return t2[JSON.stringify(r2)] = e2.serializable ? JSON.stringify(n2) : n2, Promise.resolve(n2);
          }, delete: function(e3) {
            return delete t2[JSON.stringify(e3)], Promise.resolve();
          }, clear: function() {
            return t2 = {}, Promise.resolve();
          } };
        }
        function c(e2) {
          for (var t2 = e2.length - 1; t2 > 0; t2--) {
            var r2 = Math.floor(Math.random() * (t2 + 1)), n2 = e2[t2];
            e2[t2] = e2[r2], e2[r2] = n2;
          }
          return e2;
        }
        function l(e2, t2) {
          return t2 ? (Object.keys(t2).forEach(function(r2) {
            e2[r2] = t2[r2](e2);
          }), e2) : e2;
        }
        function f(e2) {
          for (var t2 = arguments.length, r2 = new Array(t2 > 1 ? t2 - 1 : 0), n2 = 1; n2 < t2; n2++)
            r2[n2 - 1] = arguments[n2];
          var o2 = 0;
          return e2.replace(/%s/g, function() {
            return encodeURIComponent(r2[o2++]);
          });
        }
        var m = { WithinQueryParameters: 0, WithinHeaders: 1 };
        function h(e2, t2) {
          var r2 = e2 || {}, n2 = r2.data || {};
          return Object.keys(r2).forEach(function(e3) {
            -1 === ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(e3) && (n2[e3] = r2[e3]);
          }), { data: Object.entries(n2).length > 0 ? n2 : void 0, timeout: r2.timeout || t2, headers: r2.headers || {}, queryParameters: r2.queryParameters || {}, cacheable: r2.cacheable };
        }
        var d = { Read: 1, Write: 2, Any: 3 }, p = 1, v = 2, g = 3;
        function y(e2) {
          var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p;
          return r(r({}, e2), {}, { status: t2, lastUpdate: Date.now() });
        }
        function b(e2) {
          return "string" == typeof e2 ? { protocol: "https", url: e2, accept: d.Any } : { protocol: e2.protocol || "https", url: e2.url, accept: e2.accept || d.Any };
        }
        var O = "GET", P = "POST";
        function q(e2, t2) {
          return Promise.all(t2.map(function(t3) {
            return e2.get(t3, function() {
              return Promise.resolve(y(t3));
            });
          })).then(function(e3) {
            var r2 = e3.filter(function(e4) {
              return function(e5) {
                return e5.status === p || Date.now() - e5.lastUpdate > 12e4;
              }(e4);
            }), n2 = e3.filter(function(e4) {
              return function(e5) {
                return e5.status === g && Date.now() - e5.lastUpdate <= 12e4;
              }(e4);
            }), o2 = [].concat(a(r2), a(n2));
            return { getTimeout: function(e4, t3) {
              return (0 === n2.length && 0 === e4 ? 1 : n2.length + 3 + e4) * t3;
            }, statelessHosts: o2.length > 0 ? o2.map(function(e4) {
              return b(e4);
            }) : t2 };
          });
        }
        function j(e2, t2, n2, o2) {
          var u2 = [], i2 = function(e3, t3) {
            if (e3.method === O || void 0 === e3.data && void 0 === t3.data)
              return;
            var n3 = Array.isArray(e3.data) ? e3.data : r(r({}, e3.data), t3.data);
            return JSON.stringify(n3);
          }(n2, o2), s2 = function(e3, t3) {
            var n3 = r(r({}, e3.headers), t3.headers), o3 = {};
            return Object.keys(n3).forEach(function(e4) {
              var t4 = n3[e4];
              o3[e4.toLowerCase()] = t4;
            }), o3;
          }(e2, o2), c2 = n2.method, l2 = n2.method !== O ? {} : r(r({}, n2.data), o2.data), f2 = r(r(r({ "x-algolia-agent": e2.userAgent.value }, e2.queryParameters), l2), o2.queryParameters), m2 = 0, h2 = function t3(r2, a2) {
            var l3 = r2.pop();
            if (void 0 === l3)
              throw { name: "RetryError", message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.", transporterStackTrace: A(u2) };
            var h3 = { data: i2, headers: s2, method: c2, url: S(l3, n2.path, f2), connectTimeout: a2(m2, e2.timeouts.connect), responseTimeout: a2(m2, o2.timeout) }, d2 = function(e3) {
              var t4 = { request: h3, response: e3, host: l3, triesLeft: r2.length };
              return u2.push(t4), t4;
            }, p2 = { onSuccess: function(e3) {
              return function(e4) {
                try {
                  return JSON.parse(e4.content);
                } catch (t4) {
                  throw function(e5, t5) {
                    return { name: "DeserializationError", message: e5, response: t5 };
                  }(t4.message, e4);
                }
              }(e3);
            }, onRetry: function(n3) {
              var o3 = d2(n3);
              return n3.isTimedOut && m2++, Promise.all([e2.logger.info("Retryable failure", N(o3)), e2.hostsCache.set(l3, y(l3, n3.isTimedOut ? g : v))]).then(function() {
                return t3(r2, a2);
              });
            }, onFail: function(e3) {
              throw d2(e3), function(e4, t4) {
                var r3 = e4.content, n3 = e4.status, o3 = r3;
                try {
                  o3 = JSON.parse(r3).message;
                } catch (e5) {
                }
                return function(e5, t5, r4) {
                  return { name: "ApiError", message: e5, status: t5, transporterStackTrace: r4 };
                }(o3, n3, t4);
              }(e3, A(u2));
            } };
            return e2.requester.send(h3).then(function(e3) {
              return function(e4, t4) {
                return function(e5) {
                  var t5 = e5.status;
                  return e5.isTimedOut || function(e6) {
                    var t6 = e6.isTimedOut, r3 = e6.status;
                    return !t6 && 0 == ~~r3;
                  }(e5) || 2 != ~~(t5 / 100) && 4 != ~~(t5 / 100);
                }(e4) ? t4.onRetry(e4) : 2 == ~~(e4.status / 100) ? t4.onSuccess(e4) : t4.onFail(e4);
              }(e3, p2);
            });
          };
          return q(e2.hostsCache, t2).then(function(e3) {
            return h2(a(e3.statelessHosts).reverse(), e3.getTimeout);
          });
        }
        function w(e2) {
          var t2 = { value: "Algolia for JavaScript (".concat(e2, ")"), add: function(e3) {
            var r2 = "; ".concat(e3.segment).concat(void 0 !== e3.version ? " (".concat(e3.version, ")") : "");
            return -1 === t2.value.indexOf(r2) && (t2.value = "".concat(t2.value).concat(r2)), t2;
          } };
          return t2;
        }
        function S(e2, t2, r2) {
          var n2 = T(r2), o2 = "".concat(e2.protocol, "://").concat(e2.url, "/").concat("/" === t2.charAt(0) ? t2.substr(1) : t2);
          return n2.length && (o2 += "?".concat(n2)), o2;
        }
        function T(e2) {
          return Object.keys(e2).map(function(t2) {
            return f("%s=%s", t2, (r2 = e2[t2], "[object Object]" === Object.prototype.toString.call(r2) || "[object Array]" === Object.prototype.toString.call(r2) ? JSON.stringify(e2[t2]) : e2[t2]));
            var r2;
          }).join("&");
        }
        function A(e2) {
          return e2.map(function(e3) {
            return N(e3);
          });
        }
        function N(e2) {
          var t2 = e2.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
          return r(r({}, e2), {}, { request: r(r({}, e2.request), {}, { headers: r(r({}, e2.request.headers), t2) }) });
        }
        var x = function(e2) {
          var t2 = e2.appId, n2 = function(e3, t3, r2) {
            var n3 = { "x-algolia-api-key": r2, "x-algolia-application-id": t3 };
            return { headers: function() {
              return e3 === m.WithinHeaders ? n3 : {};
            }, queryParameters: function() {
              return e3 === m.WithinQueryParameters ? n3 : {};
            } };
          }(void 0 !== e2.authMode ? e2.authMode : m.WithinHeaders, t2, e2.apiKey), a2 = function(e3) {
            var t3 = e3.hostsCache, r2 = e3.logger, n3 = e3.requester, a3 = e3.requestsCache, u2 = e3.responsesCache, i2 = e3.timeouts, s2 = e3.userAgent, c2 = e3.hosts, l2 = e3.queryParameters, f2 = { hostsCache: t3, logger: r2, requester: n3, requestsCache: a3, responsesCache: u2, timeouts: i2, userAgent: s2, headers: e3.headers, queryParameters: l2, hosts: c2.map(function(e4) {
              return b(e4);
            }), read: function(e4, t4) {
              var r3 = h(t4, f2.timeouts.read), n4 = function() {
                return j(f2, f2.hosts.filter(function(e5) {
                  return 0 != (e5.accept & d.Read);
                }), e4, r3);
              };
              if (true !== (void 0 !== r3.cacheable ? r3.cacheable : e4.cacheable))
                return n4();
              var a4 = { request: e4, mappedRequestOptions: r3, transporter: { queryParameters: f2.queryParameters, headers: f2.headers } };
              return f2.responsesCache.get(a4, function() {
                return f2.requestsCache.get(a4, function() {
                  return f2.requestsCache.set(a4, n4()).then(function(e5) {
                    return Promise.all([f2.requestsCache.delete(a4), e5]);
                  }, function(e5) {
                    return Promise.all([f2.requestsCache.delete(a4), Promise.reject(e5)]);
                  }).then(function(e5) {
                    var t5 = o(e5, 2);
                    t5[0];
                    return t5[1];
                  });
                });
              }, { miss: function(e5) {
                return f2.responsesCache.set(a4, e5);
              } });
            }, write: function(e4, t4) {
              return j(f2, f2.hosts.filter(function(e5) {
                return 0 != (e5.accept & d.Write);
              }), e4, h(t4, f2.timeouts.write));
            } };
            return f2;
          }(r(r({ hosts: [{ url: "".concat(t2, "-dsn.algolia.net"), accept: d.Read }, { url: "".concat(t2, ".algolia.net"), accept: d.Write }].concat(c([{ url: "".concat(t2, "-1.algolianet.com") }, { url: "".concat(t2, "-2.algolianet.com") }, { url: "".concat(t2, "-3.algolianet.com") }])) }, e2), {}, { headers: r(r(r({}, n2.headers()), { "content-type": "application/x-www-form-urlencoded" }), e2.headers), queryParameters: r(r({}, n2.queryParameters()), e2.queryParameters) }));
          return l({ transporter: a2, appId: t2, addAlgoliaAgent: function(e3, t3) {
            a2.userAgent.add({ segment: e3, version: t3 });
          }, clearCache: function() {
            return Promise.all([a2.requestsCache.clear(), a2.responsesCache.clear()]).then(function() {
            });
          } }, e2.methods);
        }, C = function(e2) {
          return function(t2, r2) {
            return t2.method === O ? e2.transporter.read(t2, r2) : e2.transporter.write(t2, r2);
          };
        }, E = function(e2) {
          return function(t2) {
            var r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n2 = { transporter: e2.transporter, appId: e2.appId, indexName: t2 };
            return l(n2, r2.methods);
          };
        }, J = function(e2) {
          return function(t2, n2) {
            var o2 = t2.map(function(e3) {
              return r(r({}, e3), {}, { params: T(e3.params || {}) });
            });
            return e2.transporter.read({ method: P, path: "1/indexes/*/queries", data: { requests: o2 }, cacheable: true }, n2);
          };
        }, k = function(e2) {
          return function(t2, o2) {
            return Promise.all(t2.map(function(t3) {
              var a2 = t3.params, u2 = a2.facetName, i2 = a2.facetQuery, s2 = n(a2, ["facetName", "facetQuery"]);
              return E(e2)(t3.indexName, { methods: { searchForFacetValues: R } }).searchForFacetValues(u2, i2, r(r({}, o2), s2));
            }));
          };
        }, I = function(e2) {
          return function(t2, r2, n2) {
            return e2.transporter.read({ method: P, path: f("1/answers/%s/prediction", e2.indexName), data: { query: t2, queryLanguages: r2 }, cacheable: true }, n2);
          };
        }, F = function(e2) {
          return function(t2, r2) {
            return e2.transporter.read({ method: P, path: f("1/indexes/%s/query", e2.indexName), data: { query: t2 }, cacheable: true }, r2);
          };
        }, R = function(e2) {
          return function(t2, r2, n2) {
            return e2.transporter.read({ method: P, path: f("1/indexes/%s/facets/%s/query", e2.indexName, t2), data: { facetQuery: r2 }, cacheable: true }, n2);
          };
        }, D = 1, W = 2, H = 3;
        function Q(e2, t2, n2) {
          var o2, a2 = { appId: e2, apiKey: t2, timeouts: { connect: 1, read: 2, write: 30 }, requester: { send: function(e3) {
            return new Promise(function(t3) {
              var r2 = new XMLHttpRequest();
              r2.open(e3.method, e3.url, true), Object.keys(e3.headers).forEach(function(t4) {
                return r2.setRequestHeader(t4, e3.headers[t4]);
              });
              var n3, o3 = function(e4, n4) {
                return setTimeout(function() {
                  r2.abort(), t3({ status: 0, content: n4, isTimedOut: true });
                }, 1e3 * e4);
              }, a3 = o3(e3.connectTimeout, "Connection timeout");
              r2.onreadystatechange = function() {
                r2.readyState > r2.OPENED && void 0 === n3 && (clearTimeout(a3), n3 = o3(e3.responseTimeout, "Socket timeout"));
              }, r2.onerror = function() {
                0 === r2.status && (clearTimeout(a3), clearTimeout(n3), t3({ content: r2.responseText || "Network request failed", status: r2.status, isTimedOut: false }));
              }, r2.onload = function() {
                clearTimeout(a3), clearTimeout(n3), t3({ content: r2.responseText, status: r2.status, isTimedOut: false });
              }, r2.send(e3.data);
            });
          } }, logger: (o2 = H, { debug: function(e3, t3) {
            return D >= o2 && console.debug(e3, t3), Promise.resolve();
          }, info: function(e3, t3) {
            return W >= o2 && console.info(e3, t3), Promise.resolve();
          }, error: function(e3, t3) {
            return console.error(e3, t3), Promise.resolve();
          } }), responsesCache: s(), requestsCache: s({ serializable: false }), hostsCache: i({ caches: [u({ key: "".concat("4.19.1", "-").concat(e2) }), s()] }), userAgent: w("4.19.1").add({ segment: "Browser", version: "lite" }), authMode: m.WithinQueryParameters };
          return x(r(r(r({}, a2), n2), {}, { methods: { search: J, searchForFacetValues: k, multipleQueries: J, multipleSearchForFacetValues: k, customRequest: C, initIndex: function(e3) {
            return function(t3) {
              return E(e3)(t3, { methods: { search: F, searchForFacetValues: R, findAnswers: I } });
            };
          } } }));
        }
        return Q.version = "4.19.1", Q;
      });
    }
  });

  // node_modules/svelte/src/runtime/internal/utils.js
  function noop() {
  }
  function run(fn) {
    return fn();
  }
  function blank_object() {
    return /* @__PURE__ */ Object.create(null);
  }
  function run_all(fns) {
    fns.forEach(run);
  }
  function is_function(thing) {
    return typeof thing === "function";
  }
  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || a && typeof a === "object" || typeof a === "function";
  }
  function is_empty(obj) {
    return Object.keys(obj).length === 0;
  }

  // node_modules/svelte/src/runtime/internal/globals.js
  var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : (
    // @ts-ignore Node typings have this
    global
  );

  // node_modules/svelte/src/runtime/internal/ResizeObserverSingleton.js
  var ResizeObserverSingleton = class _ResizeObserverSingleton {
    /**
     * @private
     * @readonly
     * @type {WeakMap<Element, import('./private.js').Listener>}
     */
    _listeners = "WeakMap" in globals ? /* @__PURE__ */ new WeakMap() : void 0;
    /**
     * @private
     * @type {ResizeObserver}
     */
    _observer = void 0;
    /** @type {ResizeObserverOptions} */
    options;
    /** @param {ResizeObserverOptions} options */
    constructor(options) {
      this.options = options;
    }
    /**
     * @param {Element} element
     * @param {import('./private.js').Listener} listener
     * @returns {() => void}
     */
    observe(element2, listener) {
      this._listeners.set(element2, listener);
      this._getObserver().observe(element2, this.options);
      return () => {
        this._listeners.delete(element2);
        this._observer.unobserve(element2);
      };
    }
    /**
     * @private
     */
    _getObserver() {
      return this._observer ?? (this._observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
          _ResizeObserverSingleton.entries.set(entry.target, entry);
          this._listeners.get(entry.target)?.(entry);
        }
      }));
    }
  };
  ResizeObserverSingleton.entries = "WeakMap" in globals ? /* @__PURE__ */ new WeakMap() : void 0;

  // node_modules/svelte/src/runtime/internal/dom.js
  var is_hydrating = false;
  function start_hydrating() {
    is_hydrating = true;
  }
  function end_hydrating() {
    is_hydrating = false;
  }
  function append(target, node) {
    target.appendChild(node);
  }
  function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
  }
  function detach(node) {
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    }
  }
  function destroy_each(iterations, detaching) {
    for (let i = 0; i < iterations.length; i += 1) {
      if (iterations[i])
        iterations[i].d(detaching);
    }
  }
  function element(name) {
    return document.createElement(name);
  }
  function text(data) {
    return document.createTextNode(data);
  }
  function space() {
    return text(" ");
  }
  function empty() {
    return text("");
  }
  function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
  }
  function attr(node, attribute, value) {
    if (value == null)
      node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value)
      node.setAttribute(attribute, value);
  }
  function children(element2) {
    return Array.from(element2.childNodes);
  }
  function set_data(text2, data) {
    data = "" + data;
    if (text2.data === data)
      return;
    text2.data = /** @type {string} */
    data;
  }
  function set_style(node, key, value, important) {
    if (value == null) {
      node.style.removeProperty(key);
    } else {
      node.style.setProperty(key, value, important ? "important" : "");
    }
  }
  function get_custom_elements_slots(element2) {
    const result = {};
    element2.childNodes.forEach(
      /** @param {Element} node */
      (node) => {
        result[node.slot || "default"] = true;
      }
    );
    return result;
  }

  // node_modules/svelte/src/runtime/internal/lifecycle.js
  var current_component;
  function set_current_component(component) {
    current_component = component;
  }
  function get_current_component() {
    if (!current_component)
      throw new Error("Function called outside component initialization");
    return current_component;
  }
  function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
  }

  // node_modules/svelte/src/runtime/internal/scheduler.js
  var dirty_components = [];
  var binding_callbacks = [];
  var render_callbacks = [];
  var flush_callbacks = [];
  var resolved_promise = /* @__PURE__ */ Promise.resolve();
  var update_scheduled = false;
  function schedule_update() {
    if (!update_scheduled) {
      update_scheduled = true;
      resolved_promise.then(flush);
    }
  }
  function add_render_callback(fn) {
    render_callbacks.push(fn);
  }
  var seen_callbacks = /* @__PURE__ */ new Set();
  var flushidx = 0;
  function flush() {
    if (flushidx !== 0) {
      return;
    }
    const saved_component = current_component;
    do {
      try {
        while (flushidx < dirty_components.length) {
          const component = dirty_components[flushidx];
          flushidx++;
          set_current_component(component);
          update(component.$$);
        }
      } catch (e) {
        dirty_components.length = 0;
        flushidx = 0;
        throw e;
      }
      set_current_component(null);
      dirty_components.length = 0;
      flushidx = 0;
      while (binding_callbacks.length)
        binding_callbacks.pop()();
      for (let i = 0; i < render_callbacks.length; i += 1) {
        const callback = render_callbacks[i];
        if (!seen_callbacks.has(callback)) {
          seen_callbacks.add(callback);
          callback();
        }
      }
      render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
      flush_callbacks.pop()();
    }
    update_scheduled = false;
    seen_callbacks.clear();
    set_current_component(saved_component);
  }
  function update($$) {
    if ($$.fragment !== null) {
      $$.update();
      run_all($$.before_update);
      const dirty = $$.dirty;
      $$.dirty = [-1];
      $$.fragment && $$.fragment.p($$.ctx, dirty);
      $$.after_update.forEach(add_render_callback);
    }
  }
  function flush_render_callbacks(fns) {
    const filtered = [];
    const targets = [];
    render_callbacks.forEach((c) => fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c));
    targets.forEach((c) => c());
    render_callbacks = filtered;
  }

  // node_modules/svelte/src/runtime/internal/transitions.js
  var outroing = /* @__PURE__ */ new Set();
  function transition_in(block, local) {
    if (block && block.i) {
      outroing.delete(block);
      block.i(local);
    }
  }

  // node_modules/svelte/src/runtime/internal/each.js
  function ensure_array_like(array_like_or_iterator) {
    return array_like_or_iterator?.length !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
  }

  // node_modules/svelte/src/shared/boolean_attributes.js
  var _boolean_attributes = (
    /** @type {const} */
    [
      "allowfullscreen",
      "allowpaymentrequest",
      "async",
      "autofocus",
      "autoplay",
      "checked",
      "controls",
      "default",
      "defer",
      "disabled",
      "formnovalidate",
      "hidden",
      "inert",
      "ismap",
      "loop",
      "multiple",
      "muted",
      "nomodule",
      "novalidate",
      "open",
      "playsinline",
      "readonly",
      "required",
      "reversed",
      "selected"
    ]
  );
  var boolean_attributes = /* @__PURE__ */ new Set([..._boolean_attributes]);

  // node_modules/svelte/src/runtime/internal/Component.js
  function mount_component(component, target, anchor) {
    const { fragment, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    add_render_callback(() => {
      const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
      if (component.$$.on_destroy) {
        component.$$.on_destroy.push(...new_on_destroy);
      } else {
        run_all(new_on_destroy);
      }
      component.$$.on_mount = [];
    });
    after_update.forEach(add_render_callback);
  }
  function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
      flush_render_callbacks($$.after_update);
      run_all($$.on_destroy);
      $$.fragment && $$.fragment.d(detaching);
      $$.on_destroy = $$.fragment = null;
      $$.ctx = [];
    }
  }
  function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
      dirty_components.push(component);
      schedule_update();
      component.$$.dirty.fill(0);
    }
    component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
  }
  function init(component, options, instance2, create_fragment2, not_equal, props, append_styles, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const $$ = component.$$ = {
      fragment: null,
      ctx: [],
      // state
      props,
      update: noop,
      not_equal,
      bound: blank_object(),
      // lifecycle
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
      // everything else
      callbacks: blank_object(),
      dirty,
      skip_bound: false,
      root: options.target || parent_component.$$.root
    };
    append_styles && append_styles($$.root);
    let ready = false;
    $$.ctx = instance2 ? instance2(component, options.props || {}, (i, ret, ...rest) => {
      const value = rest.length ? rest[0] : ret;
      if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
        if (!$$.skip_bound && $$.bound[i])
          $$.bound[i](value);
        if (ready)
          make_dirty(component, i);
      }
      return ret;
    }) : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    $$.fragment = create_fragment2 ? create_fragment2($$.ctx) : false;
    if (options.target) {
      if (options.hydrate) {
        start_hydrating();
        const nodes = children(options.target);
        $$.fragment && $$.fragment.l(nodes);
        nodes.forEach(detach);
      } else {
        $$.fragment && $$.fragment.c();
      }
      if (options.intro)
        transition_in(component.$$.fragment);
      mount_component(component, options.target, options.anchor);
      end_hydrating();
      flush();
    }
    set_current_component(parent_component);
  }
  var SvelteElement;
  if (typeof HTMLElement === "function") {
    SvelteElement = class extends HTMLElement {
      /** The Svelte component constructor */
      $$ctor;
      /** Slots */
      $$s;
      /** The Svelte component instance */
      $$c;
      /** Whether or not the custom element is connected */
      $$cn = false;
      /** Component props data */
      $$d = {};
      /** `true` if currently in the process of reflecting component props back to attributes */
      $$r = false;
      /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
      $$p_d = {};
      /** @type {Record<string, Function[]>} Event listeners */
      $$l = {};
      /** @type {Map<Function, Function>} Event listener unsubscribe functions */
      $$l_u = /* @__PURE__ */ new Map();
      constructor($$componentCtor, $$slots, use_shadow_dom) {
        super();
        this.$$ctor = $$componentCtor;
        this.$$s = $$slots;
        if (use_shadow_dom) {
          this.attachShadow({ mode: "open" });
        }
      }
      addEventListener(type, listener, options) {
        this.$$l[type] = this.$$l[type] || [];
        this.$$l[type].push(listener);
        if (this.$$c) {
          const unsub = this.$$c.$on(type, listener);
          this.$$l_u.set(listener, unsub);
        }
        super.addEventListener(type, listener, options);
      }
      removeEventListener(type, listener, options) {
        super.removeEventListener(type, listener, options);
        if (this.$$c) {
          const unsub = this.$$l_u.get(listener);
          if (unsub) {
            unsub();
            this.$$l_u.delete(listener);
          }
        }
      }
      async connectedCallback() {
        this.$$cn = true;
        if (!this.$$c) {
          let create_slot = function(name) {
            return () => {
              let node;
              const obj = {
                c: function create() {
                  node = element("slot");
                  if (name !== "default") {
                    attr(node, "name", name);
                  }
                },
                /**
                 * @param {HTMLElement} target
                 * @param {HTMLElement} [anchor]
                 */
                m: function mount(target, anchor) {
                  insert(target, node, anchor);
                },
                d: function destroy(detaching) {
                  if (detaching) {
                    detach(node);
                  }
                }
              };
              return obj;
            };
          };
          await Promise.resolve();
          if (!this.$$cn) {
            return;
          }
          const $$slots = {};
          const existing_slots = get_custom_elements_slots(this);
          for (const name of this.$$s) {
            if (name in existing_slots) {
              $$slots[name] = [create_slot(name)];
            }
          }
          for (const attribute of this.attributes) {
            const name = this.$$g_p(attribute.name);
            if (!(name in this.$$d)) {
              this.$$d[name] = get_custom_element_value(name, attribute.value, this.$$p_d, "toProp");
            }
          }
          this.$$c = new this.$$ctor({
            target: this.shadowRoot || this,
            props: {
              ...this.$$d,
              $$slots,
              $$scope: {
                ctx: []
              }
            }
          });
          const reflect_attributes = () => {
            this.$$r = true;
            for (const key in this.$$p_d) {
              this.$$d[key] = this.$$c.$$.ctx[this.$$c.$$.props[key]];
              if (this.$$p_d[key].reflect) {
                const attribute_value = get_custom_element_value(
                  key,
                  this.$$d[key],
                  this.$$p_d,
                  "toAttribute"
                );
                if (attribute_value == null) {
                  this.removeAttribute(key);
                } else {
                  this.setAttribute(this.$$p_d[key].attribute || key, attribute_value);
                }
              }
            }
            this.$$r = false;
          };
          this.$$c.$$.after_update.push(reflect_attributes);
          reflect_attributes();
          for (const type in this.$$l) {
            for (const listener of this.$$l[type]) {
              const unsub = this.$$c.$on(type, listener);
              this.$$l_u.set(listener, unsub);
            }
          }
          this.$$l = {};
        }
      }
      // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
      // and setting attributes through setAttribute etc, this is helpful
      attributeChangedCallback(attr2, _oldValue, newValue) {
        if (this.$$r)
          return;
        attr2 = this.$$g_p(attr2);
        this.$$d[attr2] = get_custom_element_value(attr2, newValue, this.$$p_d, "toProp");
        this.$$c?.$set({ [attr2]: this.$$d[attr2] });
      }
      disconnectedCallback() {
        this.$$cn = false;
        Promise.resolve().then(() => {
          if (!this.$$cn) {
            this.$$c.$destroy();
            this.$$c = void 0;
          }
        });
      }
      $$g_p(attribute_name) {
        return Object.keys(this.$$p_d).find(
          (key) => this.$$p_d[key].attribute === attribute_name || !this.$$p_d[key].attribute && key.toLowerCase() === attribute_name
        ) || attribute_name;
      }
    };
  }
  function get_custom_element_value(prop, value, props_definition, transform) {
    const type = props_definition[prop]?.type;
    value = type === "Boolean" && typeof value !== "boolean" ? value != null : value;
    if (!transform || !props_definition[prop]) {
      return value;
    } else if (transform === "toAttribute") {
      switch (type) {
        case "Object":
        case "Array":
          return value == null ? null : JSON.stringify(value);
        case "Boolean":
          return value ? "" : null;
        case "Number":
          return value == null ? null : value;
        default:
          return value;
      }
    } else {
      switch (type) {
        case "Object":
        case "Array":
          return value && JSON.parse(value);
        case "Boolean":
          return value;
        case "Number":
          return value != null ? +value : value;
        default:
          return value;
      }
    }
  }
  var SvelteComponent = class {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    $$ = void 0;
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    $$set = void 0;
    /** @returns {void} */
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }
    /**
     * @template {Extract<keyof Events, string>} K
     * @param {K} type
     * @param {((e: Events[K]) => void) | null | undefined} callback
     * @returns {() => void}
     */
    $on(type, callback) {
      if (!is_function(callback)) {
        return noop;
      }
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1)
          callbacks.splice(index, 1);
      };
    }
    /**
     * @param {Partial<Props>} props
     * @returns {void}
     */
    $set(props) {
      if (this.$$set && !is_empty(props)) {
        this.$$.skip_bound = true;
        this.$$set(props);
        this.$$.skip_bound = false;
      }
    }
  };

  // node_modules/svelte/src/shared/version.js
  var PUBLIC_VERSION = "4";

  // node_modules/svelte/src/runtime/internal/disclose-version/index.js
  if (typeof window !== "undefined")
    (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(PUBLIC_VERSION);

  // src/js/Search.svelte
  var import_lite = __toESM(require_algoliasearch_lite_umd());
  function get_each_context(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[13] = list[i];
    child_ctx[14] = list;
    child_ctx[15] = i;
    return child_ctx;
  }
  function get_each_context_1(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[16] = list[i];
    return child_ctx;
  }
  function get_each_context_2(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[19] = list[i];
    child_ctx[2] = i;
    return child_ctx;
  }
  function create_else_block(ctx) {
    let button;
    return {
      c() {
        button = element("button");
        button.textContent = "PREV";
        attr(button, "type", "button");
        attr(button, "class", "btn-next-prev svelte-j4sxa6");
        button.disabled = true;
      },
      m(target, anchor) {
        insert(target, button, anchor);
      },
      p: noop,
      d(detaching) {
        if (detaching) {
          detach(button);
        }
      }
    };
  }
  function create_if_block_1(ctx) {
    let button;
    let mounted;
    let dispose;
    return {
      c() {
        button = element("button");
        button.textContent = "PREV";
        attr(button, "type", "button");
        attr(button, "class", "btn-next-prev svelte-j4sxa6");
      },
      m(target, anchor) {
        insert(target, button, anchor);
        if (!mounted) {
          dispose = listen(
            button,
            "click",
            /*click_handler*/
            ctx[5]
          );
          mounted = true;
        }
      },
      p: noop,
      d(detaching) {
        if (detaching) {
          detach(button);
        }
        mounted = false;
        dispose();
      }
    };
  }
  function create_each_block_2(ctx) {
    let li;
    let button;
    let mounted;
    let dispose;
    function click_handler_1() {
      return (
        /*click_handler_1*/
        ctx[6](
          /*page*/
          ctx[2]
        )
      );
    }
    return {
      c() {
        li = element("li");
        button = element("button");
        button.textContent = `${/*page*/
        ctx[2] + 1}`;
        attr(button, "type", "button");
        attr(button, "class", "btn-page-number svelte-j4sxa6");
        attr(li, "class", "svelte-j4sxa6");
      },
      m(target, anchor) {
        insert(target, li, anchor);
        append(li, button);
        if (!mounted) {
          dispose = listen(button, "click", click_handler_1);
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
      },
      d(detaching) {
        if (detaching) {
          detach(li);
        }
        mounted = false;
        dispose();
      }
    };
  }
  function create_if_block(ctx) {
    let button;
    let mounted;
    let dispose;
    return {
      c() {
        button = element("button");
        button.textContent = "NEXT";
        attr(button, "type", "button");
        attr(button, "class", "btn-next-prev svelte-j4sxa6");
      },
      m(target, anchor) {
        insert(target, button, anchor);
        if (!mounted) {
          dispose = listen(
            button,
            "click",
            /*click_handler_2*/
            ctx[7]
          );
          mounted = true;
        }
      },
      p: noop,
      d(detaching) {
        if (detaching) {
          detach(button);
        }
        mounted = false;
        dispose();
      }
    };
  }
  function create_each_block_1(ctx) {
    let a;
    let t_value = (
      /*tag*/
      ctx[16] + ""
    );
    let t;
    let a_href_value;
    return {
      c() {
        a = element("a");
        t = text(t_value);
        attr(a, "href", a_href_value = "/tag/" + sluggify(
          /*tag*/
          ctx[16]
        ) + "/");
        attr(a, "rel", "tag");
        set_style(a, "background", "#cecece");
        set_style(a, "color", "#fff");
        set_style(a, "padding", "4px 6px");
        set_style(a, "border-radius", "4px");
        set_style(a, "margin-left", "4px");
        attr(a, "class", "svelte-j4sxa6");
      },
      m(target, anchor) {
        insert(target, a, anchor);
        append(a, t);
      },
      p(ctx2, dirty) {
        if (dirty & /*hits*/
        2 && t_value !== (t_value = /*tag*/
        ctx2[16] + ""))
          set_data(t, t_value);
        if (dirty & /*hits*/
        2 && a_href_value !== (a_href_value = "/tag/" + sluggify(
          /*tag*/
          ctx2[16]
        ) + "/")) {
          attr(a, "href", a_href_value);
        }
      },
      d(detaching) {
        if (detaching) {
          detach(a);
        }
      }
    };
  }
  function create_each_block(ctx) {
    let div;
    let h2;
    let a;
    let t0_value = (
      /*hit*/
      ctx[13].title + ""
    );
    let t0;
    let a_href_value;
    let t1;
    let p0;
    let t2;
    let p1;
    let t3;
    let t4;
    let mounted;
    let dispose;
    function p0_input_handler() {
      ctx[8].call(
        p0,
        /*each_value*/
        ctx[14],
        /*hit_index*/
        ctx[15]
      );
    }
    let each_value_1 = ensure_array_like(
      /*hit*/
      ctx[13].tags
    );
    let each_blocks = [];
    for (let i = 0; i < each_value_1.length; i += 1) {
      each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
    }
    return {
      c() {
        div = element("div");
        h2 = element("h2");
        a = element("a");
        t0 = text(t0_value);
        t1 = space();
        p0 = element("p");
        t2 = space();
        p1 = element("p");
        t3 = text("Tags:\n      ");
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        t4 = space();
        attr(a, "href", a_href_value = "/blog/" + sluggify(
          /*hit*/
          ctx[13].title
        ));
        attr(p0, "contenteditable", "");
        if (
          /*hit*/
          ctx[13].excerpt === void 0
        )
          add_render_callback(p0_input_handler);
        attr(p1, "class", "postmetadata svelte-j4sxa6");
        set_style(p1, "color", "#CECECE");
        set_style(p1, "margin", "4rem 0 0 0");
        set_style(p1, "font-size", "1rem");
        attr(div, "class", "post");
        set_style(div, "padding-bottom", "2rem");
        set_style(div, "border-bottom", "1px dotted #cecece");
      },
      m(target, anchor) {
        insert(target, div, anchor);
        append(div, h2);
        append(h2, a);
        append(a, t0);
        append(div, t1);
        append(div, p0);
        if (
          /*hit*/
          ctx[13].excerpt !== void 0
        ) {
          p0.innerHTML = /*hit*/
          ctx[13].excerpt;
        }
        append(div, t2);
        append(div, p1);
        append(p1, t3);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(p1, null);
          }
        }
        append(div, t4);
        if (!mounted) {
          dispose = listen(p0, "input", p0_input_handler);
          mounted = true;
        }
      },
      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty & /*hits*/
        2 && t0_value !== (t0_value = /*hit*/
        ctx[13].title + ""))
          set_data(t0, t0_value);
        if (dirty & /*hits*/
        2 && a_href_value !== (a_href_value = "/blog/" + sluggify(
          /*hit*/
          ctx[13].title
        ))) {
          attr(a, "href", a_href_value);
        }
        if (dirty & /*hits*/
        2 && /*hit*/
        ctx[13].excerpt !== p0.innerHTML) {
          p0.innerHTML = /*hit*/
          ctx[13].excerpt;
        }
        if (dirty & /*sluggify, hits*/
        2) {
          each_value_1 = ensure_array_like(
            /*hit*/
            ctx[13].tags
          );
          let i;
          for (i = 0; i < each_value_1.length; i += 1) {
            const child_ctx = get_each_context_1(ctx, each_value_1, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block_1(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(p1, null);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value_1.length;
        }
      },
      d(detaching) {
        if (detaching) {
          detach(div);
        }
        destroy_each(each_blocks, detaching);
        mounted = false;
        dispose();
      }
    };
  }
  function create_fragment(ctx) {
    let p;
    let t0;
    let strong;
    let t2;
    let nav;
    let ul;
    let li0;
    let t3;
    let t4;
    let li1;
    let t5;
    let each1_anchor;
    function select_block_type(ctx2, dirty) {
      if (
        /*page*/
        ctx2[2] > 0
      )
        return create_if_block_1;
      return create_else_block;
    }
    let current_block_type = select_block_type(ctx, -1);
    let if_block0 = current_block_type(ctx);
    let each_value_2 = ensure_array_like({ length: (
      /*totalPages*/
      ctx[0]
    ) });
    let each_blocks_1 = [];
    for (let i = 0; i < each_value_2.length; i += 1) {
      each_blocks_1[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
    }
    let if_block1 = (
      /*page*/
      ctx[2] < /*totalPages*/
      ctx[0] - 1 && create_if_block(ctx)
    );
    let each_value = ensure_array_like(
      /*hits*/
      ctx[1]
    );
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    }
    return {
      c() {
        p = element("p");
        t0 = text("Here are the search results for ");
        strong = element("strong");
        strong.textContent = `${/*query*/
        ctx[3]}`;
        t2 = space();
        nav = element("nav");
        ul = element("ul");
        li0 = element("li");
        if_block0.c();
        t3 = space();
        for (let i = 0; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].c();
        }
        t4 = space();
        li1 = element("li");
        if (if_block1)
          if_block1.c();
        t5 = space();
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        each1_anchor = empty();
        attr(li0, "class", "svelte-j4sxa6");
        attr(li1, "class", "svelte-j4sxa6");
        attr(ul, "class", "svelte-j4sxa6");
        attr(nav, "class", "pagination");
      },
      m(target, anchor) {
        insert(target, p, anchor);
        append(p, t0);
        append(p, strong);
        insert(target, t2, anchor);
        insert(target, nav, anchor);
        append(nav, ul);
        append(ul, li0);
        if_block0.m(li0, null);
        append(ul, t3);
        for (let i = 0; i < each_blocks_1.length; i += 1) {
          if (each_blocks_1[i]) {
            each_blocks_1[i].m(ul, null);
          }
        }
        append(ul, t4);
        append(ul, li1);
        if (if_block1)
          if_block1.m(li1, null);
        insert(target, t5, anchor);
        for (let i = 0; i < each_blocks.length; i += 1) {
          if (each_blocks[i]) {
            each_blocks[i].m(target, anchor);
          }
        }
        insert(target, each1_anchor, anchor);
      },
      p(ctx2, [dirty]) {
        if (current_block_type === (current_block_type = select_block_type(ctx2, dirty)) && if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0.d(1);
          if_block0 = current_block_type(ctx2);
          if (if_block0) {
            if_block0.c();
            if_block0.m(li0, null);
          }
        }
        if (dirty & /*search, query, totalPages*/
        25) {
          each_value_2 = ensure_array_like({ length: (
            /*totalPages*/
            ctx2[0]
          ) });
          let i;
          for (i = 0; i < each_value_2.length; i += 1) {
            const child_ctx = get_each_context_2(ctx2, each_value_2, i);
            if (each_blocks_1[i]) {
              each_blocks_1[i].p(child_ctx, dirty);
            } else {
              each_blocks_1[i] = create_each_block_2(child_ctx);
              each_blocks_1[i].c();
              each_blocks_1[i].m(ul, t4);
            }
          }
          for (; i < each_blocks_1.length; i += 1) {
            each_blocks_1[i].d(1);
          }
          each_blocks_1.length = each_value_2.length;
        }
        if (
          /*page*/
          ctx2[2] < /*totalPages*/
          ctx2[0] - 1
        ) {
          if (if_block1) {
            if_block1.p(ctx2, dirty);
          } else {
            if_block1 = create_if_block(ctx2);
            if_block1.c();
            if_block1.m(li1, null);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }
        if (dirty & /*hits, sluggify*/
        2) {
          each_value = ensure_array_like(
            /*hits*/
            ctx2[1]
          );
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(each1_anchor.parentNode, each1_anchor);
            }
          }
          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }
          each_blocks.length = each_value.length;
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching) {
          detach(p);
          detach(t2);
          detach(nav);
          detach(t5);
          detach(each1_anchor);
        }
        if_block0.d();
        destroy_each(each_blocks_1, detaching);
        if (if_block1)
          if_block1.d();
        destroy_each(each_blocks, detaching);
      }
    };
  }
  function sluggify(str) {
    str = str.replace(/^\s+|\s+$/g, "");
    str = str.toLowerCase();
    str = str.replace(/[^a-z0-9 -]/g, "").replace(
      /\s+/g,
      "-"
      // collapse whitespace and replace by -
    ).replace(/-+/g, "-");
    return str;
  }
  function instance($$self, $$props, $$invalidate) {
    let searchClient;
    let index;
    let totalPages;
    const urlParams = new URLSearchParams(window.location.search);
    const hasQuery = urlParams.get("query");
    let query = hasQuery ? hasQuery : "";
    let hits = [];
    onMount(() => {
      searchClient = (0, import_lite.default)("89SU3XUZTF", "8bc3f81984b0e8c86255abe7944e8b17");
      index = searchClient.initIndex("dynamichvac_blog_posts");
      index.search(query).then(console.log);
      if (hasQuery) {
        search(hasQuery, 0);
      }
    });
    async function search(query2, p) {
      const pageCount = await index.search(query2);
      $$invalidate(0, totalPages = pageCount.nbPages);
      const result = await index.search(query2, { page: p });
      $$invalidate(1, hits = result.hits);
      $$invalidate(2, page = p);
      console.log("Hits: " + result.nbPages);
      console.log("Page: " + page);
    }
    let page = 0;
    const click_handler = () => search(query, page - 1);
    const click_handler_1 = (page2) => search(query, page2);
    const click_handler_2 = () => search(query, page + 1);
    function p0_input_handler(each_value, hit_index) {
      each_value[hit_index].excerpt = this.innerHTML;
      $$invalidate(1, hits);
    }
    return [
      totalPages,
      hits,
      page,
      query,
      search,
      click_handler,
      click_handler_1,
      click_handler_2,
      p0_input_handler
    ];
  }
  var Search = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance, create_fragment, safe_not_equal, {});
    }
  };
  var Search_default = Search;

  // src/js/search.js
  var app = new Search_default({
    target: document.getElementById("search")
  });
  var search_default = app;
})();
/*! Bundled license information:

algoliasearch/dist/algoliasearch-lite.umd.js:
  (*! algoliasearch-lite.umd.js | 4.19.1 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript *)
*/
//# sourceMappingURL=search.js.map
