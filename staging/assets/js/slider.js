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

  // node_modules/a11y-slider/dist/a11y-slider.js
  var require_a11y_slider = __commonJS({
    "node_modules/a11y-slider/dist/a11y-slider.js"(exports, module) {
      !function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).A11YSlider = t();
      }(exports, function() {
        "use strict";
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
        function t(e2, t2) {
          return e2(t2 = { exports: {} }, t2.exports), t2.exports;
        }
        var i = function(e2) {
          return e2 && e2.Math == Math && e2;
        }, n = i("object" == typeof globalThis && globalThis) || i("object" == typeof window && window) || i("object" == typeof self && self) || i("object" == typeof e && e) || Function("return this")(), r = function(e2) {
          try {
            return !!e2();
          } catch (e3) {
            return true;
          }
        }, s = !r(function() {
          return 7 != Object.defineProperty({}, 1, { get: function() {
            return 7;
          } })[1];
        }), o = {}.propertyIsEnumerable, a = Object.getOwnPropertyDescriptor, l = { f: a && !o.call({ 1: 2 }, 1) ? function(e2) {
          var t2 = a(this, e2);
          return !!t2 && t2.enumerable;
        } : o }, u = function(e2, t2) {
          return { enumerable: !(1 & e2), configurable: !(2 & e2), writable: !(4 & e2), value: t2 };
        }, c = {}.toString, d = function(e2) {
          return c.call(e2).slice(8, -1);
        }, h = "".split, f = r(function() {
          return !Object("z").propertyIsEnumerable(0);
        }) ? function(e2) {
          return "String" == d(e2) ? h.call(e2, "") : Object(e2);
        } : Object, p = function(e2) {
          if (null == e2)
            throw TypeError("Can't call method on " + e2);
          return e2;
        }, v = function(e2) {
          return f(p(e2));
        }, y = function(e2) {
          return "object" == typeof e2 ? null !== e2 : "function" == typeof e2;
        }, b = function(e2, t2) {
          if (!y(e2))
            return e2;
          var i2, n2;
          if (t2 && "function" == typeof (i2 = e2.toString) && !y(n2 = i2.call(e2)))
            return n2;
          if ("function" == typeof (i2 = e2.valueOf) && !y(n2 = i2.call(e2)))
            return n2;
          if (!t2 && "function" == typeof (i2 = e2.toString) && !y(n2 = i2.call(e2)))
            return n2;
          throw TypeError("Can't convert object to primitive value");
        }, m = {}.hasOwnProperty, g = function(e2, t2) {
          return m.call(e2, t2);
        }, S = n.document, _ = y(S) && y(S.createElement), w = function(e2) {
          return _ ? S.createElement(e2) : {};
        }, E = !s && !r(function() {
          return 7 != Object.defineProperty(w("div"), "a", { get: function() {
            return 7;
          } }).a;
        }), A = Object.getOwnPropertyDescriptor, L = { f: s ? A : function(e2, t2) {
          if (e2 = v(e2), t2 = b(t2, true), E)
            try {
              return A(e2, t2);
            } catch (e3) {
            }
          if (g(e2, t2))
            return u(!l.f.call(e2, t2), e2[t2]);
        } }, O = function(e2) {
          if (!y(e2))
            throw TypeError(String(e2) + " is not an object");
          return e2;
        }, C = Object.defineProperty, k = { f: s ? C : function(e2, t2, i2) {
          if (O(e2), t2 = b(t2, true), O(i2), E)
            try {
              return C(e2, t2, i2);
            } catch (e3) {
            }
          if ("get" in i2 || "set" in i2)
            throw TypeError("Accessors not supported");
          return "value" in i2 && (e2[t2] = i2.value), e2;
        } }, T = s ? function(e2, t2, i2) {
          return k.f(e2, t2, u(1, i2));
        } : function(e2, t2, i2) {
          return e2[t2] = i2, e2;
        }, x = function(e2, t2) {
          try {
            T(n, e2, t2);
          } catch (i2) {
            n[e2] = t2;
          }
          return t2;
        }, j = "__core-js_shared__", N = n[j] || x(j, {}), M = Function.toString;
        "function" != typeof N.inspectSource && (N.inspectSource = function(e2) {
          return M.call(e2);
        });
        var P, D, I, H = N.inspectSource, X = n.WeakMap, B = "function" == typeof X && /native code/.test(H(X)), F = t(function(e2) {
          (e2.exports = function(e3, t2) {
            return N[e3] || (N[e3] = void 0 !== t2 ? t2 : {});
          })("versions", []).push({ version: "3.6.4", mode: "global", copyright: "\xA9 2020 Denis Pushkarev (zloirock.ru)" });
        }), R = 0, Y = Math.random(), q = function(e2) {
          return "Symbol(" + String(void 0 === e2 ? "" : e2) + ")_" + (++R + Y).toString(36);
        }, V = F("keys"), W = function(e2) {
          return V[e2] || (V[e2] = q(e2));
        }, z = {}, G = n.WeakMap;
        if (B) {
          var U = new G(), $ = U.get, K = U.has, J = U.set;
          P = function(e2, t2) {
            return J.call(U, e2, t2), t2;
          }, D = function(e2) {
            return $.call(U, e2) || {};
          }, I = function(e2) {
            return K.call(U, e2);
          };
        } else {
          var Q = W("state");
          z[Q] = true, P = function(e2, t2) {
            return T(e2, Q, t2), t2;
          }, D = function(e2) {
            return g(e2, Q) ? e2[Q] : {};
          }, I = function(e2) {
            return g(e2, Q);
          };
        }
        var Z, ee, te = { set: P, get: D, has: I, enforce: function(e2) {
          return I(e2) ? D(e2) : P(e2, {});
        }, getterFor: function(e2) {
          return function(t2) {
            var i2;
            if (!y(t2) || (i2 = D(t2)).type !== e2)
              throw TypeError("Incompatible receiver, " + e2 + " required");
            return i2;
          };
        } }, ie = t(function(e2) {
          var t2 = te.get, i2 = te.enforce, r2 = String(String).split("String");
          (e2.exports = function(e3, t3, s2, o2) {
            var a2 = !!o2 && !!o2.unsafe, l2 = !!o2 && !!o2.enumerable, u2 = !!o2 && !!o2.noTargetGet;
            "function" == typeof s2 && ("string" != typeof t3 || g(s2, "name") || T(s2, "name", t3), i2(s2).source = r2.join("string" == typeof t3 ? t3 : "")), e3 !== n ? (a2 ? !u2 && e3[t3] && (l2 = true) : delete e3[t3], l2 ? e3[t3] = s2 : T(e3, t3, s2)) : l2 ? e3[t3] = s2 : x(t3, s2);
          })(Function.prototype, "toString", function() {
            return "function" == typeof this && t2(this).source || H(this);
          });
        }), ne = n, re = function(e2) {
          return "function" == typeof e2 ? e2 : void 0;
        }, se = function(e2, t2) {
          return arguments.length < 2 ? re(ne[e2]) || re(n[e2]) : ne[e2] && ne[e2][t2] || n[e2] && n[e2][t2];
        }, oe = Math.ceil, ae = Math.floor, le = function(e2) {
          return isNaN(e2 = +e2) ? 0 : (e2 > 0 ? ae : oe)(e2);
        }, ue = Math.min, ce = function(e2) {
          return e2 > 0 ? ue(le(e2), 9007199254740991) : 0;
        }, de = Math.max, he = Math.min, fe = function(e2, t2) {
          var i2 = le(e2);
          return i2 < 0 ? de(i2 + t2, 0) : he(i2, t2);
        }, pe = function(e2) {
          return function(t2, i2, n2) {
            var r2, s2 = v(t2), o2 = ce(s2.length), a2 = fe(n2, o2);
            if (e2 && i2 != i2) {
              for (; o2 > a2; )
                if ((r2 = s2[a2++]) != r2)
                  return true;
            } else
              for (; o2 > a2; a2++)
                if ((e2 || a2 in s2) && s2[a2] === i2)
                  return e2 || a2 || 0;
            return !e2 && -1;
          };
        }, ve = { includes: pe(true), indexOf: pe(false) }, ye = ve.indexOf, be = function(e2, t2) {
          var i2, n2 = v(e2), r2 = 0, s2 = [];
          for (i2 in n2)
            !g(z, i2) && g(n2, i2) && s2.push(i2);
          for (; t2.length > r2; )
            g(n2, i2 = t2[r2++]) && (~ye(s2, i2) || s2.push(i2));
          return s2;
        }, me = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], ge = me.concat("length", "prototype"), Se = { f: Object.getOwnPropertyNames || function(e2) {
          return be(e2, ge);
        } }, _e = { f: Object.getOwnPropertySymbols }, we = se("Reflect", "ownKeys") || function(e2) {
          var t2 = Se.f(O(e2)), i2 = _e.f;
          return i2 ? t2.concat(i2(e2)) : t2;
        }, Ee = function(e2, t2) {
          for (var i2 = we(t2), n2 = k.f, r2 = L.f, s2 = 0; s2 < i2.length; s2++) {
            var o2 = i2[s2];
            g(e2, o2) || n2(e2, o2, r2(t2, o2));
          }
        }, Ae = /#|\.prototype\./, Le = function(e2, t2) {
          var i2 = Ce[Oe(e2)];
          return i2 == Te || i2 != ke && ("function" == typeof t2 ? r(t2) : !!t2);
        }, Oe = Le.normalize = function(e2) {
          return String(e2).replace(Ae, ".").toLowerCase();
        }, Ce = Le.data = {}, ke = Le.NATIVE = "N", Te = Le.POLYFILL = "P", xe = Le, je = L.f, Ne = function(e2, t2) {
          var i2, r2, s2, o2, a2, l2 = e2.target, u2 = e2.global, c2 = e2.stat;
          if (i2 = u2 ? n : c2 ? n[l2] || x(l2, {}) : (n[l2] || {}).prototype)
            for (r2 in t2) {
              if (o2 = t2[r2], s2 = e2.noTargetGet ? (a2 = je(i2, r2)) && a2.value : i2[r2], !xe(u2 ? r2 : l2 + (c2 ? "." : "#") + r2, e2.forced) && void 0 !== s2) {
                if (typeof o2 == typeof s2)
                  continue;
                Ee(o2, s2);
              }
              (e2.sham || s2 && s2.sham) && T(o2, "sham", true), ie(i2, r2, o2, e2);
            }
        }, Me = Array.isArray || function(e2) {
          return "Array" == d(e2);
        }, Pe = function(e2) {
          return Object(p(e2));
        }, De = function(e2, t2, i2) {
          var n2 = b(t2);
          n2 in e2 ? k.f(e2, n2, u(0, i2)) : e2[n2] = i2;
        }, Ie = !!Object.getOwnPropertySymbols && !r(function() {
          return !String(Symbol());
        }), He = Ie && !Symbol.sham && "symbol" == typeof Symbol.iterator, Xe = F("wks"), Be = n.Symbol, Fe = He ? Be : Be && Be.withoutSetter || q, Re = function(e2) {
          return g(Xe, e2) || (Ie && g(Be, e2) ? Xe[e2] = Be[e2] : Xe[e2] = Fe("Symbol." + e2)), Xe[e2];
        }, Ye = Re("species"), qe = function(e2, t2) {
          var i2;
          return Me(e2) && ("function" != typeof (i2 = e2.constructor) || i2 !== Array && !Me(i2.prototype) ? y(i2) && null === (i2 = i2[Ye]) && (i2 = void 0) : i2 = void 0), new (void 0 === i2 ? Array : i2)(0 === t2 ? 0 : t2);
        }, Ve = se("navigator", "userAgent") || "", We = n.process, ze = We && We.versions, Ge = ze && ze.v8;
        Ge ? ee = (Z = Ge.split("."))[0] + Z[1] : Ve && (!(Z = Ve.match(/Edge\/(\d+)/)) || Z[1] >= 74) && (Z = Ve.match(/Chrome\/(\d+)/)) && (ee = Z[1]);
        var Ue = ee && +ee, $e = Re("species"), Ke = function(e2) {
          return Ue >= 51 || !r(function() {
            var t2 = [];
            return (t2.constructor = {})[$e] = function() {
              return { foo: 1 };
            }, 1 !== t2[e2](Boolean).foo;
          });
        }, Je = Re("isConcatSpreadable"), Qe = 9007199254740991, Ze = "Maximum allowed index exceeded", et = Ue >= 51 || !r(function() {
          var e2 = [];
          return e2[Je] = false, e2.concat()[0] !== e2;
        }), tt = Ke("concat"), it = function(e2) {
          if (!y(e2))
            return false;
          var t2 = e2[Je];
          return void 0 !== t2 ? !!t2 : Me(e2);
        };
        Ne({ target: "Array", proto: true, forced: !et || !tt }, { concat: function(e2) {
          var t2, i2, n2, r2, s2, o2 = Pe(this), a2 = qe(o2, 0), l2 = 0;
          for (t2 = -1, n2 = arguments.length; t2 < n2; t2++)
            if (it(s2 = -1 === t2 ? o2 : arguments[t2])) {
              if (l2 + (r2 = ce(s2.length)) > Qe)
                throw TypeError(Ze);
              for (i2 = 0; i2 < r2; i2++, l2++)
                i2 in s2 && De(a2, l2, s2[i2]);
            } else {
              if (l2 >= Qe)
                throw TypeError(Ze);
              De(a2, l2++, s2);
            }
          return a2.length = l2, a2;
        } });
        var nt = function(e2, t2, i2) {
          if (function(e3) {
            if ("function" != typeof e3)
              throw TypeError(String(e3) + " is not a function");
          }(e2), void 0 === t2)
            return e2;
          switch (i2) {
            case 0:
              return function() {
                return e2.call(t2);
              };
            case 1:
              return function(i3) {
                return e2.call(t2, i3);
              };
            case 2:
              return function(i3, n2) {
                return e2.call(t2, i3, n2);
              };
            case 3:
              return function(i3, n2, r2) {
                return e2.call(t2, i3, n2, r2);
              };
          }
          return function() {
            return e2.apply(t2, arguments);
          };
        }, rt = [].push, st = function(e2) {
          var t2 = 1 == e2, i2 = 2 == e2, n2 = 3 == e2, r2 = 4 == e2, s2 = 6 == e2, o2 = 5 == e2 || s2;
          return function(a2, l2, u2, c2) {
            for (var d2, h2, p2 = Pe(a2), v2 = f(p2), y2 = nt(l2, u2, 3), b2 = ce(v2.length), m2 = 0, g2 = c2 || qe, S2 = t2 ? g2(a2, b2) : i2 ? g2(a2, 0) : void 0; b2 > m2; m2++)
              if ((o2 || m2 in v2) && (h2 = y2(d2 = v2[m2], m2, p2), e2)) {
                if (t2)
                  S2[m2] = h2;
                else if (h2)
                  switch (e2) {
                    case 3:
                      return true;
                    case 5:
                      return d2;
                    case 6:
                      return m2;
                    case 2:
                      rt.call(S2, d2);
                  }
                else if (r2)
                  return false;
              }
            return s2 ? -1 : n2 || r2 ? r2 : S2;
          };
        }, ot = { forEach: st(0), map: st(1), filter: st(2), some: st(3), every: st(4), find: st(5), findIndex: st(6) }, at = function(e2, t2) {
          var i2 = [][e2];
          return !!i2 && r(function() {
            i2.call(null, t2 || function() {
              throw 1;
            }, 1);
          });
        }, lt = Object.defineProperty, ut = {}, ct = function(e2) {
          throw e2;
        }, dt = function(e2, t2) {
          if (g(ut, e2))
            return ut[e2];
          t2 || (t2 = {});
          var i2 = [][e2], n2 = !!g(t2, "ACCESSORS") && t2.ACCESSORS, o2 = g(t2, 0) ? t2[0] : ct, a2 = g(t2, 1) ? t2[1] : void 0;
          return ut[e2] = !!i2 && !r(function() {
            if (n2 && !s)
              return true;
            var e3 = { length: -1 };
            n2 ? lt(e3, 1, { enumerable: true, get: ct }) : e3[1] = 1, i2.call(e3, o2, a2);
          });
        }, ht = ot.forEach, ft = at("forEach"), pt = dt("forEach"), vt = ft && pt ? [].forEach : function(e2) {
          return ht(this, e2, arguments.length > 1 ? arguments[1] : void 0);
        };
        Ne({ target: "Array", proto: true, forced: [].forEach != vt }, { forEach: vt });
        var yt = ve.indexOf, bt = [].indexOf, mt = !!bt && 1 / [1].indexOf(1, -0) < 0, gt = at("indexOf"), St = dt("indexOf", { ACCESSORS: true, 1: 0 });
        Ne({ target: "Array", proto: true, forced: mt || !gt || !St }, { indexOf: function(e2) {
          return mt ? bt.apply(this, arguments) || 0 : yt(this, e2, arguments.length > 1 ? arguments[1] : void 0);
        } });
        var _t = ot.map, wt = Ke("map"), Et = dt("map");
        Ne({ target: "Array", proto: true, forced: !wt || !Et }, { map: function(e2) {
          return _t(this, e2, arguments.length > 1 ? arguments[1] : void 0);
        } });
        var At, Lt = Object.setPrototypeOf || ("__proto__" in {} ? function() {
          var e2, t2 = false, i2 = {};
          try {
            (e2 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(i2, []), t2 = i2 instanceof Array;
          } catch (e3) {
          }
          return function(i3, n2) {
            return O(i3), function(e3) {
              if (!y(e3) && null !== e3)
                throw TypeError("Can't set " + String(e3) + " as a prototype");
            }(n2), t2 ? e2.call(i3, n2) : i3.__proto__ = n2, i3;
          };
        }() : void 0), Ot = function(e2, t2, i2) {
          var n2, r2;
          return Lt && "function" == typeof (n2 = t2.constructor) && n2 !== i2 && y(r2 = n2.prototype) && r2 !== i2.prototype && Lt(e2, r2), e2;
        }, Ct = Object.keys || function(e2) {
          return be(e2, me);
        }, kt = s ? Object.defineProperties : function(e2, t2) {
          O(e2);
          for (var i2, n2 = Ct(t2), r2 = n2.length, s2 = 0; r2 > s2; )
            k.f(e2, i2 = n2[s2++], t2[i2]);
          return e2;
        }, Tt = se("document", "documentElement"), xt = W("IE_PROTO"), jt = function() {
        }, Nt = function(e2) {
          return "<script>" + e2 + "<\/script>";
        }, Mt = function() {
          try {
            At = document.domain && new ActiveXObject("htmlfile");
          } catch (e3) {
          }
          var e2, t2;
          Mt = At ? function(e3) {
            e3.write(Nt("")), e3.close();
            var t3 = e3.parentWindow.Object;
            return e3 = null, t3;
          }(At) : ((t2 = w("iframe")).style.display = "none", Tt.appendChild(t2), t2.src = String("javascript:"), (e2 = t2.contentWindow.document).open(), e2.write(Nt("document.F=Object")), e2.close(), e2.F);
          for (var i2 = me.length; i2--; )
            delete Mt.prototype[me[i2]];
          return Mt();
        };
        z[xt] = true;
        var Pt = Object.create || function(e2, t2) {
          var i2;
          return null !== e2 ? (jt.prototype = O(e2), i2 = new jt(), jt.prototype = null, i2[xt] = e2) : i2 = Mt(), void 0 === t2 ? i2 : kt(i2, t2);
        }, Dt = "	\n\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF", It = "[" + Dt + "]", Ht = RegExp("^" + It + It + "*"), Xt = RegExp(It + It + "*$"), Bt = function(e2) {
          return function(t2) {
            var i2 = String(p(t2));
            return 1 & e2 && (i2 = i2.replace(Ht, "")), 2 & e2 && (i2 = i2.replace(Xt, "")), i2;
          };
        }, Ft = { start: Bt(1), end: Bt(2), trim: Bt(3) }, Rt = Se.f, Yt = L.f, qt = k.f, Vt = Ft.trim, Wt = "Number", zt = n.Number, Gt = zt.prototype, Ut = d(Pt(Gt)) == Wt, $t = function(e2) {
          var t2, i2, n2, r2, s2, o2, a2, l2, u2 = b(e2, false);
          if ("string" == typeof u2 && u2.length > 2) {
            if (43 === (t2 = (u2 = Vt(u2)).charCodeAt(0)) || 45 === t2) {
              if (88 === (i2 = u2.charCodeAt(2)) || 120 === i2)
                return NaN;
            } else if (48 === t2) {
              switch (u2.charCodeAt(1)) {
                case 66:
                case 98:
                  n2 = 2, r2 = 49;
                  break;
                case 79:
                case 111:
                  n2 = 8, r2 = 55;
                  break;
                default:
                  return +u2;
              }
              for (o2 = (s2 = u2.slice(2)).length, a2 = 0; a2 < o2; a2++)
                if ((l2 = s2.charCodeAt(a2)) < 48 || l2 > r2)
                  return NaN;
              return parseInt(s2, n2);
            }
          }
          return +u2;
        };
        if (xe(Wt, !zt(" 0o1") || !zt("0b1") || zt("+0x1"))) {
          for (var Kt, Jt = function(e2) {
            var t2 = arguments.length < 1 ? 0 : e2, i2 = this;
            return i2 instanceof Jt && (Ut ? r(function() {
              Gt.valueOf.call(i2);
            }) : d(i2) != Wt) ? Ot(new zt($t(t2)), i2, Jt) : $t(t2);
          }, Qt = s ? Rt(zt) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), Zt = 0; Qt.length > Zt; Zt++)
            g(zt, Kt = Qt[Zt]) && !g(Jt, Kt) && qt(Jt, Kt, Yt(zt, Kt));
          Jt.prototype = Gt, Gt.constructor = Jt, ie(n, Wt, Jt);
        }
        var ei = Ft.trim, ti = n.parseInt, ii = /^[+-]?0[Xx]/, ni = 8 !== ti(Dt + "08") || 22 !== ti(Dt + "0x16") ? function(e2, t2) {
          var i2 = ei(String(e2));
          return ti(i2, t2 >>> 0 || (ii.test(i2) ? 16 : 10));
        } : ti;
        Ne({ target: "Number", stat: true, forced: Number.parseInt != ni }, { parseInt: ni });
        var ri = Object.assign, si = Object.defineProperty, oi = !ri || r(function() {
          if (s && 1 !== ri({ b: 1 }, ri(si({}, "a", { enumerable: true, get: function() {
            si(this, "b", { value: 3, enumerable: false });
          } }), { b: 2 })).b)
            return true;
          var e2 = {}, t2 = {}, i2 = Symbol(), n2 = "abcdefghijklmnopqrst";
          return e2[i2] = 7, n2.split("").forEach(function(e3) {
            t2[e3] = e3;
          }), 7 != ri({}, e2)[i2] || Ct(ri({}, t2)).join("") != n2;
        }) ? function(e2, t2) {
          for (var i2 = Pe(e2), n2 = arguments.length, r2 = 1, o2 = _e.f, a2 = l.f; n2 > r2; )
            for (var u2, c2 = f(arguments[r2++]), d2 = o2 ? Ct(c2).concat(o2(c2)) : Ct(c2), h2 = d2.length, p2 = 0; h2 > p2; )
              u2 = d2[p2++], s && !a2.call(c2, u2) || (i2[u2] = c2[u2]);
          return i2;
        } : ri;
        Ne({ target: "Object", stat: true, forced: Object.assign !== oi }, { assign: oi });
        var ai = l.f, li = function(e2) {
          return function(t2) {
            for (var i2, n2 = v(t2), r2 = Ct(n2), o2 = r2.length, a2 = 0, l2 = []; o2 > a2; )
              i2 = r2[a2++], s && !ai.call(n2, i2) || l2.push(e2 ? [i2, n2[i2]] : n2[i2]);
            return l2;
          };
        }, ui = { entries: li(true), values: li(false) }.entries;
        Ne({ target: "Object", stat: true }, { entries: function(e2) {
          return ui(e2);
        } });
        for (var ci in { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 }) {
          var di = n[ci], hi = di && di.prototype;
          if (hi && hi.forEach !== vt)
            try {
              T(hi, "forEach", vt);
            } catch (e2) {
              hi.forEach = vt;
            }
        }
        function fi(e2) {
          return (fi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
            return typeof e3;
          } : function(e3) {
            return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
          })(e2);
        }
        function pi(e2, t2) {
          for (var i2 = 0; i2 < t2.length; i2++) {
            var n2 = t2[i2];
            n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e2, n2.key, n2);
          }
        }
        function vi(e2, t2, i2) {
          return t2 in e2 ? Object.defineProperty(e2, t2, { value: i2, enumerable: true, configurable: true, writable: true }) : e2[t2] = i2, e2;
        }
        function yi(e2, t2) {
          var i2 = Object.keys(e2);
          if (Object.getOwnPropertySymbols) {
            var n2 = Object.getOwnPropertySymbols(e2);
            t2 && (n2 = n2.filter(function(t3) {
              return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
            })), i2.push.apply(i2, n2);
          }
          return i2;
        }
        function bi(e2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var i2 = null != arguments[t2] ? arguments[t2] : {};
            t2 % 2 ? yi(Object(i2), true).forEach(function(t3) {
              vi(e2, t3, i2[t3]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(i2)) : yi(Object(i2)).forEach(function(t3) {
              Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(i2, t3));
            });
          }
          return e2;
        }
        function mi(e2, t2) {
          if (null == e2)
            return {};
          var i2, n2, r2 = function(e3, t3) {
            if (null == e3)
              return {};
            var i3, n3, r3 = {}, s3 = Object.keys(e3);
            for (n3 = 0; n3 < s3.length; n3++)
              i3 = s3[n3], t3.indexOf(i3) >= 0 || (r3[i3] = e3[i3]);
            return r3;
          }(e2, t2);
          if (Object.getOwnPropertySymbols) {
            var s2 = Object.getOwnPropertySymbols(e2);
            for (n2 = 0; n2 < s2.length; n2++)
              i2 = s2[n2], t2.indexOf(i2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, i2) && (r2[i2] = e2[i2]);
          }
          return r2;
        }
        function gi(e2, t2) {
          return function(e3) {
            if (Array.isArray(e3))
              return e3;
          }(e2) || function(e3, t3) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e3)))
              return;
            var i2 = [], n2 = true, r2 = false, s2 = void 0;
            try {
              for (var o2, a2 = e3[Symbol.iterator](); !(n2 = (o2 = a2.next()).done) && (i2.push(o2.value), !t3 || i2.length !== t3); n2 = true)
                ;
            } catch (e4) {
              r2 = true, s2 = e4;
            } finally {
              try {
                n2 || null == a2.return || a2.return();
              } finally {
                if (r2)
                  throw s2;
              }
            }
            return i2;
          }(e2, t2) || _i(e2, t2) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function Si(e2) {
          return function(e3) {
            if (Array.isArray(e3))
              return wi(e3);
          }(e2) || function(e3) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e3))
              return Array.from(e3);
          }(e2) || _i(e2) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function _i(e2, t2) {
          if (e2) {
            if ("string" == typeof e2)
              return wi(e2, t2);
            var i2 = Object.prototype.toString.call(e2).slice(8, -1);
            return "Object" === i2 && e2.constructor && (i2 = e2.constructor.name), "Map" === i2 || "Set" === i2 ? Array.from(e2) : "Arguments" === i2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i2) ? wi(e2, t2) : void 0;
          }
        }
        function wi(e2, t2) {
          (null == t2 || t2 > e2.length) && (t2 = e2.length);
          for (var i2 = 0, n2 = new Array(t2); i2 < t2; i2++)
            n2[i2] = e2[i2];
          return n2;
        }
        var Ei = function(e2, t2, i2) {
          var n2;
          return void 0 === t2 && (t2 = 50), void 0 === i2 && (i2 = { isImmediate: false }), function() {
            for (var r2 = [], s2 = arguments.length; s2--; )
              r2[s2] = arguments[s2];
            var o2 = this, a2 = i2.isImmediate && void 0 === n2;
            void 0 !== n2 && clearTimeout(n2), n2 = setTimeout(function() {
              n2 = void 0, i2.isImmediate || e2.apply(o2, r2);
            }, t2), a2 && e2.apply(o2, r2);
          };
        }, Ai = Re("unscopables"), Li = Array.prototype;
        null == Li[Ai] && k.f(Li, Ai, { configurable: true, value: Pt(null) });
        var Oi = ve.includes;
        Ne({ target: "Array", proto: true, forced: !dt("indexOf", { ACCESSORS: true, 1: 0 }) }, { includes: function(e2) {
          return Oi(this, e2, arguments.length > 1 ? arguments[1] : void 0);
        } }), function(e2) {
          Li[Ai][e2] = true;
        }("includes");
        var Ci = Ke("slice"), ki = dt("slice", { ACCESSORS: true, 0: 0, 1: 2 }), Ti = Re("species"), xi = [].slice, ji = Math.max;
        Ne({ target: "Array", proto: true, forced: !Ci || !ki }, { slice: function(e2, t2) {
          var i2, n2, r2, s2 = v(this), o2 = ce(s2.length), a2 = fe(e2, o2), l2 = fe(void 0 === t2 ? o2 : t2, o2);
          if (Me(s2) && ("function" != typeof (i2 = s2.constructor) || i2 !== Array && !Me(i2.prototype) ? y(i2) && null === (i2 = i2[Ti]) && (i2 = void 0) : i2 = void 0, i2 === Array || void 0 === i2))
            return xi.call(s2, a2, l2);
          for (n2 = new (void 0 === i2 ? Array : i2)(ji(l2 - a2, 0)), r2 = 0; a2 < l2; a2++, r2++)
            a2 in s2 && De(n2, r2, s2[a2]);
          return n2.length = r2, n2;
        } });
        var Ni = {};
        Ni[Re("toStringTag")] = "z";
        var Mi = "[object z]" === String(Ni), Pi = Re("toStringTag"), Di = "Arguments" == d(function() {
          return arguments;
        }()), Ii = Mi ? d : function(e2) {
          var t2, i2, n2;
          return void 0 === e2 ? "Undefined" : null === e2 ? "Null" : "string" == typeof (i2 = function(e3, t3) {
            try {
              return e3[t3];
            } catch (e4) {
            }
          }(t2 = Object(e2), Pi)) ? i2 : Di ? d(t2) : "Object" == (n2 = d(t2)) && "function" == typeof t2.callee ? "Arguments" : n2;
        }, Hi = Mi ? {}.toString : function() {
          return "[object " + Ii(this) + "]";
        };
        Mi || ie(Object.prototype, "toString", Hi, { unsafe: true });
        var Xi = function() {
          var e2 = O(this), t2 = "";
          return e2.global && (t2 += "g"), e2.ignoreCase && (t2 += "i"), e2.multiline && (t2 += "m"), e2.dotAll && (t2 += "s"), e2.unicode && (t2 += "u"), e2.sticky && (t2 += "y"), t2;
        }, Bi = "toString", Fi = RegExp.prototype, Ri = Fi.toString, Yi = r(function() {
          return "/a/b" != Ri.call({ source: "a", flags: "b" });
        }), qi = Ri.name != Bi;
        (Yi || qi) && ie(RegExp.prototype, Bi, function() {
          var e2 = O(this), t2 = String(e2.source), i2 = e2.flags;
          return "/" + t2 + "/" + String(void 0 === i2 && e2 instanceof RegExp && !("flags" in Fi) ? Xi.call(e2) : i2);
        }, { unsafe: true });
        var Vi = Re("match"), Wi = function(e2) {
          if (function(e3) {
            var t2;
            return y(e3) && (void 0 !== (t2 = e3[Vi]) ? !!t2 : "RegExp" == d(e3));
          }(e2))
            throw TypeError("The method doesn't accept regular expressions");
          return e2;
        }, zi = Re("match");
        Ne({ target: "String", proto: true, forced: !function(e2) {
          var t2 = /./;
          try {
            "/./"[e2](t2);
          } catch (i2) {
            try {
              return t2[zi] = false, "/./"[e2](t2);
            } catch (e3) {
            }
          }
          return false;
        }("includes") }, { includes: function(e2) {
          return !!~String(p(this)).indexOf(Wi(e2), arguments.length > 1 ? arguments[1] : void 0);
        } });
        var Gi, Ui, $i, Ki, Ji = function(e2) {
          var t2 = new DOMParser().parseFromString(e2, "text/html").body.firstChild;
          if (t2 instanceof HTMLElement)
            return t2;
          throw new Error("Supplied markup does not create an HTML Element");
        }, Qi = function(e2) {
          var t2 = e2.charCode || e2.keyCode, i2 = e2.type;
          return "click" === i2 || "keydown" === i2 && (32 === t2 || 13 === t2) && (e2.preventDefault(), true);
        }, Zi = function(e2) {
          return "number" == typeof e2 && isFinite(e2) && Math.floor(e2) === e2 && null != e2 && !isNaN(Number(e2.toString()));
        }, en = function(e2) {
          return "object" === fi(e2) && null !== e2;
        }, tn = function(e2, t2) {
          if (void 0 !== e2) {
            var i2 = function(e3) {
              if (Array.isArray(e3))
                return true;
              var t3 = Object.prototype.toString.call(e3);
              return !("[object HTMLCollection]" !== t3 && "[object NodeList]" !== t3 && ("object" !== fi(e3) || !e3.hasOwnProperty("length") || e3.length < 0 || 0 !== e3.length && (!e3[0] || !e3[0].nodeType)));
            }(e2) ? e2 : [e2];
            Array.prototype.slice.call(i2).forEach(function(e3) {
              e3 instanceof HTMLElement && t2 && t2(e3);
            });
          }
        }, nn = function(e2, t2, i2) {
          var n2 = !!window.getComputedStyle, r2 = window.getComputedStyle || function() {
          }, s2 = function() {
            if (!n2)
              return false;
            var e3 = document.body || document.documentElement, t3 = document.createElement("div");
            t3.style.cssText = "width:10px;padding:2px;-webkit-box-sizing:border-box;box-sizing:border-box;", e3.appendChild(t3);
            var i3 = "10px" === r2(t3, null).width;
            return e3.removeChild(t3), i3;
          }(), o2 = function(e3) {
            return e3 = parseFloat(e3), t3 = e3, !isNaN(parseFloat(t3)) && isFinite(t3) ? e3 : 0;
            var t3;
          };
          return function(e3, t3, i3) {
            if (n2) {
              i3 = i3 || r2(e3, null);
              var a2 = o2(i3[t3]);
              return s2 || "width" !== t3 ? s2 || "height" !== t3 || (a2 += o2(i3.paddingTop) + o2(i3.paddingBottom) + o2(i3.borderTopWidth) + o2(i3.borderBottomWidth)) : a2 += o2(i3.paddingLeft) + o2(i3.paddingRight) + o2(i3.borderLeftWidth) + o2(i3.borderRightWidth), a2;
            }
            return o2(e3.style[t3]);
          }(e2, t2, i2);
        }, rn = function(e2) {
          for (var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10, i2 = [], n2 = e2.nextSibling; n2 && i2.length < t2; )
            i2.push(n2), n2 = n2.nextSibling;
          return i2;
        };
        return function(e2) {
          e2[e2.Prev = 0] = "Prev", e2[e2.Next = 1] = "Next";
        }(Gi || (Gi = {})), function(e2) {
          e2[e2.Enabled = 1] = "Enabled", e2[e2.Disabled = 0] = "Disabled";
        }(Ui || (Ui = {})), function(e2) {
          e2[e2.Enable = 0] = "Enable", e2[e2.Disable = 1] = "Disable";
        }($i || ($i = {})), function(e2) {
          e2[e2.Yes = 0] = "Yes", e2[e2.No = 0] = "No";
        }(Ki || (Ki = {})), function() {
          function e2(t3, i3) {
            var n3 = this;
            if (function(e3, t4) {
              if (!(e3 instanceof t4))
                throw new TypeError("Cannot call a class as a function");
            }(this, e2), !(t3 instanceof HTMLElement))
              throw new Error("The required input [element] must be an HTMLElement");
            if (void 0 !== i3 && !en(i3))
              throw new Error("The required input [options] must be an Object");
            this.slider = t3, this.slides = t3.children, this.sliderContainer = Ji('<div class="a11y-slider-container"></div>'), this._activeClass = "a11y-slider-active", this._visibleClass = "a11y-slider-visible", this._dotsClass = "a11y-slider-dots", this._sliderClass = "a11y-slider", this._focusable = "a, area, input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]", this._autoplayTimer = Ki.No, this.autoplayBtn = Ji('<button type="button" class="a11y-slider-autoplay">Toggle slider autoplay</button>'), this._pauseOnMouseLeave = false, this._skipBtns = [], this.dots = null, this.swipe = true, this.activeSlide = this.slides[0], this.visibleSlides = [], this.sliderEnabled = Ui.Disabled, this.modernBrowser = !!HTMLElement.prototype.scrollTo, this.isPlatformiOS = function() {
              switch (navigator.platform) {
                case "iPod":
                case "iPhone":
                case "iPad":
                case "iPod Simulator":
                case "iPhone Simulator":
                case "iPad Simulator":
                  return true;
              }
              return !(!navigator.userAgent.includes("Mac") || !("ontouchend" in document));
            }(), this.mouseDown = false, this.touchStart = false, this.swipeStartX = 0, this.swipeX = 0, this.swipeXCached = 0, this.statusEl = Ji('<div class="a11y-slider-status" role="status">Displaying slide 1 of '.concat(this.slides.length, "</div>")), this._hasCustomArrows = !!(i3 && i3.prevArrow || i3 && i3.nextArrow), this.options = { container: true, arrows: true, prevArrow: i3 && i3.prevArrow || Ji('<button type="button" class="a11y-slider-prev">Previous slide</button>'), nextArrow: i3 && i3.nextArrow || Ji('<button type="button" class="a11y-slider-next">Next slide</button>'), dots: true, adaptiveHeight: false, skipBtn: true, slidesToShow: null, autoplay: false, autoplaySpeed: 4e3, autoplayHoverPause: true, centerMode: false, infinite: true, disable: false, responsive: null, customPaging: null, swipe: true }, this.options = bi(bi({}, this.options), i3), this._handlePrev = this._handlePrev.bind(this), this._handleNext = this._handleNext.bind(this), this._handleAutoplay = this._handleAutoplay.bind(this), this._handleAutoplayHover = this._handleAutoplayHover.bind(this), this._handleAutoplayEvent = this._handleAutoplayEvent.bind(this), this._checkShouldEnableDebounced = Ei(this._checkShouldEnable.bind(this), 250), this._updateHeightDebounced = Ei(this._updateHeight.bind(this), 250), this._generateDotsDebounced = Ei(this._generateDots.bind(this), 250), this._updateScrollPosition = Ei(function() {
              return n3.scrollToSlide(n3.activeSlide);
            }, 250), this._handleScroll = Ei(this._handleScroll.bind(this), 10), this._scrollFinish = Ei(this._scrollFinish.bind(this), 175), this._swipeMouseDown = this._swipeMouseDown.bind(this), this._swipeMouseUp = this._swipeMouseUp.bind(this), this._swipeMouseMove = this._swipeMouseMove.bind(this), this._swipeTouchStart = this._swipeTouchStart.bind(this), this._swipeTouchEnd = this._swipeTouchEnd.bind(this), this._swipeTouchMove = this._swipeTouchMove.bind(this), this._init();
          }
          var t2, i2, n2;
          return t2 = e2, (i2 = [{ key: "_init", value: function() {
            var e3 = this;
            setTimeout(function() {
              return e3.slider.scrollLeft = 0;
            }, 1), en(this.options.responsive) && this._checkResponsive(), this._checkShouldEnable(), window.addEventListener("resize", this._checkShouldEnableDebounced), this._dispatchEvent("init", { a11ySlider: this });
          } }, { key: "_checkShouldEnable", value: function() {
            var e3 = this, t3 = true;
            true === this.options.disable && (t3 = false), this.slides.length <= 1 && (t3 = false), Zi(this.options.slidesToShow) ? this.slides.length === this.options.slidesToShow && (t3 = false) : this._getActiveAndVisible(null, function(i3) {
              i3.length === e3.slides.length && (t3 = false);
            }), t3 && this.sliderEnabled === Ui.Disabled ? this._enableSlider() : t3 || this.sliderEnabled !== Ui.Enabled || this._disableSlider(), !t3 && this._hasCustomArrows && (tn(this.options.prevArrow, function(e4) {
              e4.classList.add("a11y-slider-hide");
            }), tn(this.options.nextArrow, function(e4) {
              e4.classList.add("a11y-slider-hide");
            }));
          } }, { key: "_enableSlider", value: function() {
            var e3 = this;
            this.sliderEnabled = Ui.Enabled, this.options.container && (this.slider.insertAdjacentElement("beforebegin", this.sliderContainer), this.sliderContainer.insertAdjacentElement("afterbegin", this.slider)), this.options.skipBtn && this._addSkipBtn(), this.options.arrows && !this._hasCustomArrows && (this.options.prevArrow instanceof HTMLElement && this.slider.insertAdjacentElement("beforebegin", this.options.prevArrow), this.options.nextArrow instanceof HTMLElement && this.slider.insertAdjacentElement("beforebegin", this.options.nextArrow)), tn(this.options.prevArrow, function(t3) {
              t3.addEventListener("click", e3._handlePrev, { passive: true }), t3.addEventListener("keypress", e3._handlePrev, { passive: true }), e3._hasCustomArrows && t3.classList.remove("a11y-slider-hide");
            }), tn(this.options.nextArrow, function(t3) {
              t3.addEventListener("click", e3._handleNext, { passive: true }), t3.addEventListener("keypress", e3._handleNext, { passive: true }), e3._hasCustomArrows && t3.classList.remove("a11y-slider-hide");
            }), this.options.dots && this._generateDots(), this.slider.addEventListener("scroll", this._handleScroll, false), this._setCSS(), true === this.options.adaptiveHeight && (this._updateHeight(this.visibleSlides), window.addEventListener("resize", this._updateHeightDebounced.bind(this))), this.options.autoplay && this._enableAutoplay(), window.addEventListener("resize", this._updateScrollPosition), this.options.swipe && this._enableSwipe(), this.options.autoplay || this._enableA11YStatus();
          } }, { key: "_disableSlider", value: function() {
            var e3 = this;
            this.sliderEnabled = Ui.Disabled, document.body.contains(this.sliderContainer) && (this.sliderContainer.insertAdjacentElement("beforebegin", this.slider), this.sliderContainer.parentNode && this.sliderContainer.parentNode.removeChild(this.sliderContainer)), this._removeSkipBtn(), tn(this.options.prevArrow, function(t3) {
              t3.removeEventListener("click", e3._handlePrev), t3.removeEventListener("keypress", e3._handlePrev), e3._hasCustomArrows ? t3.classList.add("a11y-slider-hide") : t3.parentNode && t3.parentNode.removeChild(t3);
            }), tn(this.options.nextArrow, function(t3) {
              t3.removeEventListener("click", e3._handleNext), t3.removeEventListener("keypress", e3._handleNext), e3._hasCustomArrows ? t3.classList.add("a11y-slider-hide") : t3.parentNode && t3.parentNode.removeChild(t3);
            }), this._removeDots(), this.slider.removeEventListener("scroll", this._handleScroll, false), this._removeCSS(), window.removeEventListener("resize", this._updateHeightDebounced), this._updateHeight(false), this.options.autoplay && this._disableAutoplay(), this._disableSwipe(), window.removeEventListener("resize", this._updateScrollPosition), this.options.swipe && this._disableSwipe(), this._removeA11YStatus();
          } }, { key: "_setCSS", value: function(e3) {
            var t3 = this;
            this._addSlidesWidth(), this._getActiveAndVisible(e3 || null), this.slider.classList.add(this._sliderClass), tn(this.slides, function(e4) {
              e4.classList.remove(t3._activeClass), e4.classList.remove(t3._visibleClass);
            }), this.activeSlide.classList.add(this._activeClass), tn(this.visibleSlides, function(e4) {
              e4.classList.add(t3._visibleClass);
            }), this._updateDots(this.activeSlide), this._updateA11Y();
          } }, { key: "_removeCSS", value: function() {
            var e3 = this;
            this._removeSlidesWidth(), this.slider.classList.remove(this._sliderClass), tn(this.slides, function(t3) {
              t3.classList.remove(e3._activeClass), t3.classList.remove(e3._visibleClass);
            }), this._removeA11Y();
          } }, { key: "_enableA11YStatus", value: function() {
            this._updateA11YStatus(), this.slider.insertAdjacentElement("afterend", this.statusEl);
          } }, { key: "_updateA11YStatus", value: function() {
            var e3 = Array.prototype.indexOf.call(this.activeSlide.parentNode && this.activeSlide.parentNode.children, this.activeSlide);
            this.statusEl.textContent = "Displaying slide ".concat(e3 + 1, " of ").concat(this.slides.length);
          } }, { key: "_removeA11YStatus", value: function() {
            this.statusEl.parentNode && this.statusEl.parentNode.removeChild(this.statusEl);
          } }, { key: "_checkResponsive", value: function() {
            var e3 = this;
            if (en(this.options.responsive)) {
              var t3 = this.options, i3 = (t3.responsive, mi(t3, ["responsive"])), n3 = [], r2 = Object.entries(this.options.responsive).sort(function(e4, t4) {
                return e4[1] - t4[1];
              });
              n3.push({ mql: window.matchMedia("screen and (max-width: ".concat(Number.parseInt(r2[0][0]) - 1, "px)")), options: i3 }), r2.forEach(function(t4, i4) {
                var s2 = gi(t4, 2), o2 = s2[0], a2 = s2[1], l2 = bi({}, e3.options), u2 = "screen and (min-width: ".concat(o2, "px)");
                i4 !== r2.length - 1 && (u2 = u2.concat(" and (max-width: ".concat(Number.parseInt(r2[i4 + 1][0]) - 1, "px)"))), n3.forEach(function(e4) {
                  Object.assign(l2, e4.options);
                }), Object.assign(l2, a2), n3.push({ mql: window.matchMedia(u2), options: l2 });
              }), n3.map(function(t4) {
                t4.mql.matches && Object.assign(e3.options, t4.options), t4.mql.addListener(function() {
                  t4.mql.matches && e3.updateOptions(t4.options);
                });
              });
            }
          } }, { key: "_addSlidesWidth", value: function() {
            if (Zi(this.options.slidesToShow)) {
              var e3 = 100 / this.options.slidesToShow;
              this.slider.style.display = "flex", tn(this.slides, function(t3) {
                t3.style.width = "".concat(e3, "%"), t3.style.flex = "0 0 auto";
              });
            } else
              this._removeSlidesWidth();
          } }, { key: "_removeSlidesWidth", value: function() {
            this.slider.style.removeProperty("display"), tn(this.slides, function(e3) {
              e3.style.removeProperty("width"), e3.style.removeProperty("flex");
            });
          } }, { key: "_updateA11Y", value: function() {
            var e3 = this;
            if (this._removeA11Y(), tn(this.slides, function(t4) {
              var i4 = t4.querySelectorAll(e3._focusable);
              t4.classList.contains(e3._visibleClass) || (t4.setAttribute("tabindex", "-1"), t4.setAttribute("aria-hidden", "true")), tn(i4, function(i5) {
                t4.classList.contains(e3._visibleClass) || i5.setAttribute("tabindex", "-1");
              });
            }), false === this.options.infinite) {
              var t3 = this.slider.firstElementChild, i3 = this.slider.lastElementChild, n3 = this.visibleSlides[0], r2 = this.visibleSlides[this.visibleSlides.length - 1];
              n3 === t3 && tn(this.options.prevArrow, function(e4) {
                e4.setAttribute("disabled", "");
              }), r2 === i3 && tn(this.options.nextArrow, function(e4) {
                e4.setAttribute("disabled", "");
              });
            }
            this._updateA11YStatus();
          } }, { key: "_removeA11Y", value: function() {
            var e3 = this;
            tn(this.slides, function(t3) {
              var i3 = t3.querySelectorAll(e3._focusable);
              t3.removeAttribute("tabindex"), t3.removeAttribute("aria-hidden"), tn(i3, function(e4) {
                e4.removeAttribute("tabindex");
              });
            }), tn(this.options.prevArrow, function(e4) {
              return e4.removeAttribute("disabled");
            }), tn(this.options.nextArrow, function(e4) {
              return e4.removeAttribute("disabled");
            });
          } }, { key: "_addSkipBtn", value: function() {
            var e3 = Ji('<button class="a11y-slider-sr-only" type="button" tabindex="0">Click to skip slider carousel</button>'), t3 = Ji('<div class="a11y-slider-sr-only" tabindex="-1">End of slider carousel</div>'), i3 = function(e4) {
              true === Qi(e4) && t3.focus();
            };
            e3.addEventListener("click", i3, { passive: true }), e3.addEventListener("keypress", i3, { passive: true }), this.slider.insertAdjacentElement("beforebegin", e3), this.slider.insertAdjacentElement("afterend", t3), this._skipBtns = [], this._skipBtns.push(e3, t3);
          } }, { key: "_removeSkipBtn", value: function() {
            var e3 = [].concat(Si(function(e4) {
              for (var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10, i3 = [], n3 = e4.previousSibling; n3 && i3.length < t3; )
                i3.push(n3), n3 = n3.previousSibling;
              return i3;
            }(this.slider)), Si(rn(this.slider)));
            tn(this._skipBtns, function(e4) {
              e4.parentNode && e4.parentNode.removeChild(e4);
            }), tn(e3, function(e4) {
              e4.classList.contains("a11y-slider-sr-only") && e4.parentNode && e4.parentNode.removeChild(e4);
            });
          } }, { key: "_generateDots", value: function() {
            var e3 = this;
            if (false !== this.options.dots && (this._removeDots(), this.sliderEnabled !== Ui.Disabled)) {
              this.dots = Ji('<ul class="'.concat(this._dotsClass, '"></ul>'));
              for (var t3 = function(t4) {
                var i4 = Ji("<li></li>"), n3 = void 0;
                e3.options.customPaging ? n3 = Ji(e3.options.customPaging(t4, e3)) : (n3 = Ji('<button type="button"></button>')).textContent = "Move slider to item #".concat(t4 + 1);
                var r2 = function(i5) {
                  true === Qi(i5) && (e3.scrollToSlide(e3.slides[t4]), e3._toggleAutoplay($i.Disable));
                };
                n3.addEventListener("click", r2, { passive: true }), n3.addEventListener("keypress", r2, { passive: true }), i4.insertAdjacentElement("beforeend", n3), e3.dots.insertAdjacentElement("beforeend", i4);
              }, i3 = 0; i3 < this._getDotCount(); i3++)
                t3(i3);
              this._updateDots(this.activeSlide), this.slider.insertAdjacentElement("afterend", this.dots), window.addEventListener("resize", this._generateDotsDebounced);
            }
          } }, { key: "_getDotCount", value: function() {
            return this.slides.length - (this.options.slidesToShow || this.visibleSlides.length || 1) + 1;
          } }, { key: "_removeDots", value: function() {
            var e3 = this;
            window.removeEventListener("resize", this._generateDotsDebounced);
            var t3 = rn(this.slider);
            this.dots instanceof HTMLElement && this.dots.parentNode && this.dots.parentNode.removeChild(this.dots), tn(t3, function(t4) {
              t4.classList.contains(e3._dotsClass) && t4.parentNode && t4.parentNode.removeChild(t4);
            });
          } }, { key: "_updateDots", value: function(e3) {
            if (this.dots instanceof HTMLElement) {
              var t3, i3, n3, r2, s2 = Array.prototype.indexOf.call(e3.parentNode && e3.parentNode.children, e3);
              s2 > this.dots.children.length && (s2 = this.dots.children.length - 1), tn(this.dots.children, function(e4) {
                var t4, i4;
                null === (t4 = e4.querySelector("button")) || void 0 === t4 || t4.classList.remove("active"), null === (i4 = e4.querySelector("button")) || void 0 === i4 || i4.removeAttribute("aria-current");
              }), null === (t3 = this.dots.children[s2]) || void 0 === t3 || null === (i3 = t3.querySelector("button")) || void 0 === i3 || i3.classList.add("active"), null === (n3 = this.dots.children[s2]) || void 0 === n3 || null === (r2 = n3.querySelector("button")) || void 0 === r2 || r2.setAttribute("aria-current", "true");
            }
          } }, { key: "_enableAutoplay", value: function() {
            this.autoplayBtn.addEventListener("click", this._handleAutoplay, { passive: true }), this.autoplayBtn.addEventListener("keypress", this._handleAutoplay, { passive: true }), this.slider.addEventListener("click", this._handleAutoplayEvent, { passive: true }), this.slider.addEventListener("touchstart", this._handleAutoplayEvent, { passive: true }), this.options.autoplayHoverPause && (this.slider.addEventListener("mouseenter", this._handleAutoplayHover, { passive: true }), this.slider.addEventListener("mouseleave", this._handleAutoplayHover, { passive: true })), this.slider.insertAdjacentElement("beforebegin", this.autoplayBtn), this._toggleAutoplay($i.Enable);
          } }, { key: "_disableAutoplay", value: function() {
            var e3;
            this._toggleAutoplay($i.Disable), this.autoplayBtn.removeEventListener("click", this._handleAutoplay), this.autoplayBtn.removeEventListener("keypress", this._handleAutoplay), this.slider.removeEventListener("click", this._handleAutoplayEvent), this.slider.removeEventListener("touchstart", this._handleAutoplayEvent), this.slider.removeEventListener("mouseenter", this._handleAutoplayHover), this.slider.removeEventListener("mouseleave", this._handleAutoplayHover), null === (e3 = this.autoplayBtn.parentNode) || void 0 === e3 || e3.removeChild(this.autoplayBtn);
          } }, { key: "_enableSwipe", value: function() {
            this.options.swipe && (this.slider.addEventListener("mousedown", this._swipeMouseDown), this.slider.addEventListener("mouseleave", this._swipeMouseUp), this.slider.addEventListener("mouseup", this._swipeMouseUp), this.slider.addEventListener("mousemove", this._swipeMouseMove), this.slider.addEventListener("touchstart", this._swipeTouchStart), this.slider.addEventListener("touchend", this._swipeTouchEnd), this.slider.addEventListener("touchmove", this._swipeTouchMove));
          } }, { key: "_swipeMouseDown", value: function(e3) {
            this.mouseDown = true, this.slider.classList.add("a11y-slider-scrolling"), this.swipeStartX = e3.pageX - this.slider.offsetLeft, this.swipeX = this.slider.scrollLeft, this.swipeXCached = this.slider.scrollLeft;
          } }, { key: "_swipeMouseUp", value: function() {
            if (this.mouseDown) {
              var e3 = (this.swipeXCached - (this.swipeX - 1)) * (this.swipeXCached - (this.swipeX + 1)) <= 0;
              this.mouseDown = false, this.slider.classList.remove("a11y-slider-scrolling"), this.modernBrowser && this.slider.scroll({ left: e3 ? this.swipeXCached : this.swipeXCached - 1, behavior: this.isPlatformiOS ? "auto" : "smooth" });
            }
          } }, { key: "_swipeMouseMove", value: function(e3) {
            if (this.mouseDown) {
              e3.preventDefault();
              var t3 = 2 * (e3.pageX - this.slider.offsetLeft - this.swipeStartX);
              this.slider.scrollLeft = this.swipeX - t3, this.swipeXCached = this.slider.scrollLeft;
            }
          } }, { key: "_swipeTouchStart", value: function(e3) {
            this.touchStart = true, this.slider.classList.add("a11y-slider-scrolling"), this.swipeStartX = e3.touches[0].pageX - this.slider.offsetLeft, this.swipeX = this.slider.scrollLeft, this.swipeXCached = this.slider.scrollLeft;
          } }, { key: "_swipeTouchEnd", value: function() {
            if (this.touchStart) {
              var e3 = (this.swipeXCached - (this.swipeX - 1)) * (this.swipeXCached - (this.swipeX + 1)) <= 0;
              this.touchStart = false, this.slider.classList.remove("a11y-slider-scrolling"), this.modernBrowser && this.slider.scroll({ left: e3 ? this.swipeXCached : this.swipeXCached - 1, behavior: this.isPlatformiOS ? "auto" : "smooth" });
            }
          } }, { key: "_swipeTouchMove", value: function(e3) {
            if (this.touchStart) {
              e3.preventDefault();
              var t3 = 2 * (e3.touches[0].pageX - this.slider.offsetLeft - this.swipeStartX);
              this.slider.scrollLeft = this.swipeX - t3, this.swipeXCached = this.slider.scrollLeft;
            }
          } }, { key: "_disableSwipe", value: function() {
            this.slider.removeEventListener("mousedown", this._swipeMouseDown), this.slider.removeEventListener("mouseleave", this._swipeMouseUp), this.slider.removeEventListener("mouseup", this._swipeMouseUp), this.slider.removeEventListener("mousemove", this._swipeMouseMove), this.slider.removeEventListener("touchstart", this._swipeTouchStart), this.slider.removeEventListener("touchend", this._swipeTouchEnd), this.slider.removeEventListener("touchmove", this._swipeTouchMove);
          } }, { key: "_toggleAutoplay", value: function(e3) {
            var t3 = this;
            e3 === $i.Enable ? (t3._removeA11YStatus(), t3._autoplayTimer = window.setInterval(function() {
              t3._goPrevOrNext(Gi.Next);
            }, t3.options.autoplaySpeed), t3.autoplayBtn.setAttribute("data-autoplaying", "true"), t3._dispatchEvent("autoplayStart", { currentSlide: t3.activeSlide, a11ySlider: t3 })) : e3 === $i.Disable && (t3._enableA11YStatus(), window.clearInterval(t3._autoplayTimer), t3._autoplayTimer = Ki.No, t3.autoplayBtn.setAttribute("data-autoplaying", "false"), t3._dispatchEvent("autoplayStop", { currentSlide: t3.activeSlide, a11ySlider: t3 }));
          } }, { key: "_goPrevOrNext", value: function(e3) {
            var t3 = this;
            this._getActiveAndVisible(null, function(i3, n3) {
              var r2 = t3.slider.firstElementChild, s2 = t3.slider.lastElementChild, o2 = i3[0], a2 = i3[i3.length - 1];
              e3 === Gi.Next ? a2 === s2 ? true === t3.options.infinite && t3.scrollToSlide(r2) : t3.scrollToSlide(n3 && n3.nextElementSibling) : e3 === Gi.Prev && (o2 === r2 ? true === t3.options.infinite && t3.scrollToSlide(s2) : t3.scrollToSlide(n3 && n3.previousElementSibling));
            });
          } }, { key: "scrollToSlide", value: function(e3) {
            var t3, i3 = this, n3 = this.slider.scrollLeft;
            if (Zi(e3))
              t3 = this.slides[e3];
            else {
              if (!(e3 instanceof HTMLElement))
                throw new Error("scrollToSlide only accepts an HTMLElement or number");
              t3 = e3;
            }
            this._dispatchEvent("beforeChange", { currentSlide: this.activeSlide, nextSlide: t3, a11ySlider: this }), true === this.options.adaptiveHeight && this._updateHeight(this.visibleSlides), this.modernBrowser ? this.slider.scroll({ left: t3.offsetLeft, behavior: this.isPlatformiOS ? "auto" : "smooth" }) : this.slider.scrollLeft = t3.offsetLeft, setTimeout(function() {
              i3.slider.scrollLeft === n3 && i3.sliderEnabled === Ui.Enabled && i3._setCSS(t3);
            }, 50), this._updateDots(t3);
          } }, { key: "updateOptions", value: function(e3) {
            Object.assign(this.options, e3), this._disableSlider(), this._checkShouldEnable();
          } }, { key: "_updateHeight", value: function(e3) {
            if (false === e3)
              this.slider.style.height = "";
            else {
              var t3 = nn(this.slider, "height"), i3 = 0;
              tn(e3, function(e4) {
                var t4 = nn(e4, "height");
                t4 > i3 && (i3 = t4);
              }), t3 !== i3 && 0 !== i3 && (this.slider.style.height = "".concat(i3, "px"));
            }
          } }, { key: "refreshHeight", value: function() {
            this._updateHeight(this.visibleSlides);
          } }, { key: "_getActiveAndVisible", value: function(e3, t3) {
            var i3 = !this.slider.classList.contains(this._sliderClass), n3 = this.slider.style.borderWidth;
            this.slider.style.borderWidth = "0px", i3 && this.slider.classList.add(this._sliderClass);
            var r2 = [], s2 = Math.round(this.slider.getBoundingClientRect().width), o2 = this.slider.scrollLeft - 1 < 0 ? 0 : this.slider.scrollLeft - 1;
            if (tn(this.slides, function(e4) {
              var t4 = e4.offsetLeft < 0 ? 0 : e4.offsetLeft;
              t4 >= o2 && t4 < o2 + s2 && r2.push(e4);
            }), this.slider.style.borderWidth = n3, i3 && this.slider.classList.remove(this._sliderClass), this.visibleSlides = r2, e3)
              this.activeSlide = e3;
            else if (true === this.options.centerMode)
              this.activeSlide = this.visibleSlides[Math.floor((this.visibleSlides.length - 1) / 2)];
            else {
              var a2;
              this.activeSlide = null !== (a2 = r2[0]) && void 0 !== a2 ? a2 : this.slides[0];
            }
            t3 && t3(this.visibleSlides, this.activeSlide);
          } }, { key: "_handlePrev", value: function(e3) {
            true === Qi(e3) && (this._goPrevOrNext(Gi.Prev), this._toggleAutoplay($i.Disable));
          } }, { key: "_handleNext", value: function(e3) {
            true === Qi(e3) && (this._goPrevOrNext(Gi.Next), this._toggleAutoplay($i.Disable));
          } }, { key: "_handleAutoplay", value: function(e3) {
            true === Qi(e3) && (this._autoplayTimer === Ki.No ? this._toggleAutoplay($i.Enable) : this._toggleAutoplay($i.Disable));
          } }, { key: "_handleAutoplayHover", value: function(e3) {
            "mouseenter" === e3.type ? this._autoplayTimer !== Ki.No && (this._toggleAutoplay($i.Disable), this._pauseOnMouseLeave = true) : "mouseleave" === e3.type && this._pauseOnMouseLeave && this._autoplayTimer === Ki.No && (this._toggleAutoplay($i.Enable), this._pauseOnMouseLeave = false);
          } }, { key: "_handleAutoplayEvent", value: function(e3) {
            this._pauseOnMouseLeave = false, this._toggleAutoplay($i.Disable);
          } }, { key: "_handleScroll", value: function() {
            this._scrollFinish();
          } }, { key: "_scrollFinish", value: function() {
            this._setCSS(), true === this.options.adaptiveHeight && this._updateHeight(this.visibleSlides), this._dispatchEvent("afterChange", { currentSlide: this.activeSlide, a11ySlider: this });
          } }, { key: "_dispatchEvent", value: function(e3, t3) {
            var i3 = function(e4, t4) {
              var i4 = document.createEvent("CustomEvent");
              return t4 = t4 || { bubbles: false, cancelable: false, detail: void 0 }, i4.initCustomEvent(e4, t4.bubbles, t4.cancelable, t4.detail), i4;
            }(e3, { detail: t3 });
            this.slider.dispatchEvent(i3);
          } }, { key: "destroy", value: function() {
            this._disableSlider(), window.removeEventListener("resize", this._checkShouldEnableDebounced), this._dispatchEvent("destroy", { a11ySlider: this });
          } }]) && pi(t2.prototype, i2), n2 && pi(t2, n2), e2;
        }();
      });
    }
  });

  // src/js/slider.js
  var import_a11y_slider = __toESM(require_a11y_slider());
  var slider = new import_a11y_slider.default(document.querySelector(".slider"), {
    // adaptiveHeight: true,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3e3,
    container: false
  });
})();
//# sourceMappingURL=slider.js.map
