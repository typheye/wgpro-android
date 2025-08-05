(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const i of s)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const i = {};
    return (
      s.integrity && (i.integrity = s.integrity),
      s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const i = n(s);
    fetch(s.href, i);
  }
})();
/**
 * @vue/shared v3.4.38
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function ar(t, e) {
  const n = new Set(t.split(","));
  return e ? (r) => n.has(r.toLowerCase()) : (r) => n.has(r);
}
const at = {},
  Se = [],
  It = () => {},
  ki = () => !1,
  vn = (t) =>
    t.charCodeAt(0) === 111 &&
    t.charCodeAt(1) === 110 &&
    (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97),
  cr = (t) => t.startsWith("onUpdate:"),
  xt = Object.assign,
  fr = (t, e) => {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1);
  },
  Ni = Object.prototype.hasOwnProperty,
  Z = (t, e) => Ni.call(t, e),
  K = Array.isArray,
  Ie = (t) => yn(t) === "[object Map]",
  Cs = (t) => yn(t) === "[object Set]",
  G = (t) => typeof t == "function",
  dt = (t) => typeof t == "string",
  ae = (t) => typeof t == "symbol",
  ct = (t) => t !== null && typeof t == "object",
  Es = (t) => (ct(t) || G(t)) && G(t.then) && G(t.catch),
  As = Object.prototype.toString,
  yn = (t) => As.call(t),
  $i = (t) => yn(t).slice(8, -1),
  Ps = (t) => yn(t) === "[object Object]",
  ur = (t) =>
    dt(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t,
  ze = ar(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  _n = (t) => {
    const e = Object.create(null);
    return (n) => e[n] || (e[n] = t(n));
  },
  ji = /-(\w)/g,
  Nt = _n((t) => t.replace(ji, (e, n) => (n ? n.toUpperCase() : ""))),
  Hi = /\B([A-Z])/g,
  Ae = _n((t) => t.replace(Hi, "-$1").toLowerCase()),
  wn = _n((t) => t.charAt(0).toUpperCase() + t.slice(1)),
  Dn = _n((t) => (t ? `on${wn(t)}` : "")),
  xe = (t, e) => !Object.is(t, e),
  Ln = (t, ...e) => {
    for (let n = 0; n < t.length; n++) t[n](...e);
  },
  Ts = (t, e, n, r = !1) => {
    Object.defineProperty(t, e, {
      configurable: !0,
      enumerable: !1,
      writable: r,
      value: n,
    });
  },
  Ui = (t) => {
    const e = parseFloat(t);
    return isNaN(e) ? t : e;
  };
let Fr;
const Ss = () =>
  Fr ||
  (Fr =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function hr(t) {
  if (K(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n],
        s = dt(r) ? Vi(r) : hr(r);
      if (s) for (const i in s) e[i] = s[i];
    }
    return e;
  } else if (dt(t) || ct(t)) return t;
}
const Ki = /;(?![^(]*\))/g,
  zi = /:([^]+)/,
  Gi = /\/\*[^]*?\*\//g;
function Vi(t) {
  const e = {};
  return (
    t
      .replace(Gi, "")
      .split(Ki)
      .forEach((n) => {
        if (n) {
          const r = n.split(zi);
          r.length > 1 && (e[r[0].trim()] = r[1].trim());
        }
      }),
    e
  );
}
function dr(t) {
  let e = "";
  if (dt(t)) e = t;
  else if (K(t))
    for (let n = 0; n < t.length; n++) {
      const r = dr(t[n]);
      r && (e += r + " ");
    }
  else if (ct(t)) for (const n in t) t[n] && (e += n + " ");
  return e.trim();
}
const Wi =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  qi = ar(Wi);
function Is(t) {
  return !!t || t === "";
}
const Ms = (t) => !!(t && t.__v_isRef === !0),
  ge = (t) =>
    dt(t)
      ? t
      : t == null
      ? ""
      : K(t) || (ct(t) && (t.toString === As || !G(t.toString)))
      ? Ms(t)
        ? ge(t.value)
        : JSON.stringify(t, Bs, 2)
      : String(t),
  Bs = (t, e) =>
    Ms(e)
      ? Bs(t, e.value)
      : Ie(e)
      ? {
          [`Map(${e.size})`]: [...e.entries()].reduce(
            (n, [r, s], i) => ((n[Rn(r, i) + " =>"] = s), n),
            {}
          ),
        }
      : Cs(e)
      ? { [`Set(${e.size})`]: [...e.values()].map((n) => Rn(n)) }
      : ae(e)
      ? Rn(e)
      : ct(e) && !K(e) && !Ps(e)
      ? String(e)
      : e,
  Rn = (t, e = "") => {
    var n;
    return ae(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t;
  };
/**
 * @vue/reactivity v3.4.38
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Lt;
class Xi {
  constructor(e = !1) {
    (this.detached = e),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Lt),
      !e && Lt && (this.index = (Lt.scopes || (Lt.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(e) {
    if (this._active) {
      const n = Lt;
      try {
        return (Lt = this), e();
      } finally {
        Lt = n;
      }
    }
  }
  on() {
    Lt = this;
  }
  off() {
    Lt = this.parent;
  }
  stop(e) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !e) {
        const s = this.parent.scopes.pop();
        s &&
          s !== this &&
          ((this.parent.scopes[this.index] = s), (s.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function Ji(t, e = Lt) {
  e && e.active && e.effects.push(t);
}
function Zi() {
  return Lt;
}
let ye;
class gr {
  constructor(e, n, r, s) {
    (this.fn = e),
      (this.trigger = n),
      (this.scheduler = r),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 4),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      Ji(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      (this._dirtyLevel = 1), ce();
      for (let e = 0; e < this._depsLength; e++) {
        const n = this.deps[e];
        if (n.computed && (Yi(n.computed), this._dirtyLevel >= 4)) break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), fe();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(e) {
    this._dirtyLevel = e ? 4 : 0;
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn();
    let e = oe,
      n = ye;
    try {
      return (oe = !0), (ye = this), this._runnings++, kr(this), this.fn();
    } finally {
      Nr(this), this._runnings--, (ye = n), (oe = e);
    }
  }
  stop() {
    this.active &&
      (kr(this), Nr(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function Yi(t) {
  return t.value;
}
function kr(t) {
  t._trackId++, (t._depsLength = 0);
}
function Nr(t) {
  if (t.deps.length > t._depsLength) {
    for (let e = t._depsLength; e < t.deps.length; e++) Os(t.deps[e], t);
    t.deps.length = t._depsLength;
  }
}
function Os(t, e) {
  const n = t.get(e);
  n !== void 0 &&
    e._trackId !== n &&
    (t.delete(e), t.size === 0 && t.cleanup());
}
let oe = !0,
  qn = 0;
const Ds = [];
function ce() {
  Ds.push(oe), (oe = !1);
}
function fe() {
  const t = Ds.pop();
  oe = t === void 0 ? !0 : t;
}
function pr() {
  qn++;
}
function mr() {
  for (qn--; !qn && Xn.length; ) Xn.shift()();
}
function Ls(t, e, n) {
  if (e.get(t) !== t._trackId) {
    e.set(t, t._trackId);
    const r = t.deps[t._depsLength];
    r !== e ? (r && Os(r, t), (t.deps[t._depsLength++] = e)) : t._depsLength++;
  }
}
const Xn = [];
function Rs(t, e, n) {
  pr();
  for (const r of t.keys()) {
    let s;
    r._dirtyLevel < e &&
      (s ?? (s = t.get(r) === r._trackId)) &&
      (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0),
      (r._dirtyLevel = e)),
      r._shouldSchedule &&
        (s ?? (s = t.get(r) === r._trackId)) &&
        (r.trigger(),
        (!r._runnings || r.allowRecurse) &&
          r._dirtyLevel !== 2 &&
          ((r._shouldSchedule = !1), r.scheduler && Xn.push(r.scheduler)));
  }
  mr();
}
const Fs = (t, e) => {
    const n = new Map();
    return (n.cleanup = t), (n.computed = e), n;
  },
  Jn = new WeakMap(),
  _e = Symbol(""),
  Zn = Symbol("");
function At(t, e, n) {
  if (oe && ye) {
    let r = Jn.get(t);
    r || Jn.set(t, (r = new Map()));
    let s = r.get(n);
    s || r.set(n, (s = Fs(() => r.delete(n)))), Ls(ye, s);
  }
}
function Zt(t, e, n, r, s, i) {
  const o = Jn.get(t);
  if (!o) return;
  let l = [];
  if (e === "clear") l = [...o.values()];
  else if (n === "length" && K(t)) {
    const a = Number(r);
    o.forEach((f, h) => {
      (h === "length" || (!ae(h) && h >= a)) && l.push(f);
    });
  } else
    switch ((n !== void 0 && l.push(o.get(n)), e)) {
      case "add":
        K(t)
          ? ur(n) && l.push(o.get("length"))
          : (l.push(o.get(_e)), Ie(t) && l.push(o.get(Zn)));
        break;
      case "delete":
        K(t) || (l.push(o.get(_e)), Ie(t) && l.push(o.get(Zn)));
        break;
      case "set":
        Ie(t) && l.push(o.get(_e));
        break;
    }
  pr();
  for (const a of l) a && Rs(a, 4);
  mr();
}
const Qi = ar("__proto__,__v_isRef,__isVue"),
  ks = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((t) => t !== "arguments" && t !== "caller")
      .map((t) => Symbol[t])
      .filter(ae)
  ),
  $r = to();
function to() {
  const t = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
      t[e] = function (...n) {
        const r = rt(this);
        for (let i = 0, o = this.length; i < o; i++) At(r, "get", i + "");
        const s = r[e](...n);
        return s === -1 || s === !1 ? r[e](...n.map(rt)) : s;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
      t[e] = function (...n) {
        ce(), pr();
        const r = rt(this)[e].apply(this, n);
        return mr(), fe(), r;
      };
    }),
    t
  );
}
function eo(t) {
  ae(t) || (t = String(t));
  const e = rt(this);
  return At(e, "has", t), e.hasOwnProperty(t);
}
class Ns {
  constructor(e = !1, n = !1) {
    (this._isReadonly = e), (this._isShallow = n);
  }
  get(e, n, r) {
    const s = this._isReadonly,
      i = this._isShallow;
    if (n === "__v_isReactive") return !s;
    if (n === "__v_isReadonly") return s;
    if (n === "__v_isShallow") return i;
    if (n === "__v_raw")
      return r === (s ? (i ? po : Us) : i ? Hs : js).get(e) ||
        Object.getPrototypeOf(e) === Object.getPrototypeOf(r)
        ? e
        : void 0;
    const o = K(e);
    if (!s) {
      if (o && Z($r, n)) return Reflect.get($r, n, r);
      if (n === "hasOwnProperty") return eo;
    }
    const l = Reflect.get(e, n, r);
    return (ae(n) ? ks.has(n) : Qi(n)) || (s || At(e, "get", n), i)
      ? l
      : Bt(l)
      ? o && ur(n)
        ? l
        : l.value
      : ct(l)
      ? s
        ? Ks(l)
        : yr(l)
      : l;
  }
}
class $s extends Ns {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, r, s) {
    let i = e[n];
    if (!this._isShallow) {
      const a = Oe(i);
      if (
        (!qe(r) && !Oe(r) && ((i = rt(i)), (r = rt(r))),
        !K(e) && Bt(i) && !Bt(r))
      )
        return a ? !1 : ((i.value = r), !0);
    }
    const o = K(e) && ur(n) ? Number(n) < e.length : Z(e, n),
      l = Reflect.set(e, n, r, s);
    return (
      e === rt(s) && (o ? xe(r, i) && Zt(e, "set", n, r) : Zt(e, "add", n, r)),
      l
    );
  }
  deleteProperty(e, n) {
    const r = Z(e, n);
    e[n];
    const s = Reflect.deleteProperty(e, n);
    return s && r && Zt(e, "delete", n, void 0), s;
  }
  has(e, n) {
    const r = Reflect.has(e, n);
    return (!ae(n) || !ks.has(n)) && At(e, "has", n), r;
  }
  ownKeys(e) {
    return At(e, "iterate", K(e) ? "length" : _e), Reflect.ownKeys(e);
  }
}
class no extends Ns {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, n) {
    return !0;
  }
  deleteProperty(e, n) {
    return !0;
  }
}
const ro = new $s(),
  so = new no(),
  io = new $s(!0);
const br = (t) => t,
  xn = (t) => Reflect.getPrototypeOf(t);
function Qe(t, e, n = !1, r = !1) {
  t = t.__v_raw;
  const s = rt(t),
    i = rt(e);
  n || (xe(e, i) && At(s, "get", e), At(s, "get", i));
  const { has: o } = xn(s),
    l = r ? br : n ? xr : wr;
  if (o.call(s, e)) return l(t.get(e));
  if (o.call(s, i)) return l(t.get(i));
  t !== s && t.get(e);
}
function tn(t, e = !1) {
  const n = this.__v_raw,
    r = rt(n),
    s = rt(t);
  return (
    e || (xe(t, s) && At(r, "has", t), At(r, "has", s)),
    t === s ? n.has(t) : n.has(t) || n.has(s)
  );
}
function en(t, e = !1) {
  return (
    (t = t.__v_raw), !e && At(rt(t), "iterate", _e), Reflect.get(t, "size", t)
  );
}
function jr(t, e = !1) {
  !e && !qe(t) && !Oe(t) && (t = rt(t));
  const n = rt(this);
  return xn(n).has.call(n, t) || (n.add(t), Zt(n, "add", t, t)), this;
}
function Hr(t, e, n = !1) {
  !n && !qe(e) && !Oe(e) && (e = rt(e));
  const r = rt(this),
    { has: s, get: i } = xn(r);
  let o = s.call(r, t);
  o || ((t = rt(t)), (o = s.call(r, t)));
  const l = i.call(r, t);
  return (
    r.set(t, e), o ? xe(e, l) && Zt(r, "set", t, e) : Zt(r, "add", t, e), this
  );
}
function Ur(t) {
  const e = rt(this),
    { has: n, get: r } = xn(e);
  let s = n.call(e, t);
  s || ((t = rt(t)), (s = n.call(e, t))), r && r.call(e, t);
  const i = e.delete(t);
  return s && Zt(e, "delete", t, void 0), i;
}
function Kr() {
  const t = rt(this),
    e = t.size !== 0,
    n = t.clear();
  return e && Zt(t, "clear", void 0, void 0), n;
}
function nn(t, e) {
  return function (r, s) {
    const i = this,
      o = i.__v_raw,
      l = rt(o),
      a = e ? br : t ? xr : wr;
    return (
      !t && At(l, "iterate", _e), o.forEach((f, h) => r.call(s, a(f), a(h), i))
    );
  };
}
function rn(t, e, n) {
  return function (...r) {
    const s = this.__v_raw,
      i = rt(s),
      o = Ie(i),
      l = t === "entries" || (t === Symbol.iterator && o),
      a = t === "keys" && o,
      f = s[t](...r),
      h = n ? br : e ? xr : wr;
    return (
      !e && At(i, "iterate", a ? Zn : _e),
      {
        next() {
          const { value: d, done: m } = f.next();
          return m
            ? { value: d, done: m }
            : { value: l ? [h(d[0]), h(d[1])] : h(d), done: m };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function ee(t) {
  return function (...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function oo() {
  const t = {
      get(i) {
        return Qe(this, i);
      },
      get size() {
        return en(this);
      },
      has: tn,
      add: jr,
      set: Hr,
      delete: Ur,
      clear: Kr,
      forEach: nn(!1, !1),
    },
    e = {
      get(i) {
        return Qe(this, i, !1, !0);
      },
      get size() {
        return en(this);
      },
      has: tn,
      add(i) {
        return jr.call(this, i, !0);
      },
      set(i, o) {
        return Hr.call(this, i, o, !0);
      },
      delete: Ur,
      clear: Kr,
      forEach: nn(!1, !0),
    },
    n = {
      get(i) {
        return Qe(this, i, !0);
      },
      get size() {
        return en(this, !0);
      },
      has(i) {
        return tn.call(this, i, !0);
      },
      add: ee("add"),
      set: ee("set"),
      delete: ee("delete"),
      clear: ee("clear"),
      forEach: nn(!0, !1),
    },
    r = {
      get(i) {
        return Qe(this, i, !0, !0);
      },
      get size() {
        return en(this, !0);
      },
      has(i) {
        return tn.call(this, i, !0);
      },
      add: ee("add"),
      set: ee("set"),
      delete: ee("delete"),
      clear: ee("clear"),
      forEach: nn(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
      (t[i] = rn(i, !1, !1)),
        (n[i] = rn(i, !0, !1)),
        (e[i] = rn(i, !1, !0)),
        (r[i] = rn(i, !0, !0));
    }),
    [t, n, e, r]
  );
}
const [lo, ao, co, fo] = oo();
function vr(t, e) {
  const n = e ? (t ? fo : co) : t ? ao : lo;
  return (r, s, i) =>
    s === "__v_isReactive"
      ? !t
      : s === "__v_isReadonly"
      ? t
      : s === "__v_raw"
      ? r
      : Reflect.get(Z(n, s) && s in r ? n : r, s, i);
}
const uo = { get: vr(!1, !1) },
  ho = { get: vr(!1, !0) },
  go = { get: vr(!0, !1) };
const js = new WeakMap(),
  Hs = new WeakMap(),
  Us = new WeakMap(),
  po = new WeakMap();
function mo(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function bo(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : mo($i(t));
}
function yr(t) {
  return Oe(t) ? t : _r(t, !1, ro, uo, js);
}
function vo(t) {
  return _r(t, !1, io, ho, Hs);
}
function Ks(t) {
  return _r(t, !0, so, go, Us);
}
function _r(t, e, n, r, s) {
  if (!ct(t) || (t.__v_raw && !(e && t.__v_isReactive))) return t;
  const i = s.get(t);
  if (i) return i;
  const o = bo(t);
  if (o === 0) return t;
  const l = new Proxy(t, o === 2 ? r : n);
  return s.set(t, l), l;
}
function Ge(t) {
  return Oe(t) ? Ge(t.__v_raw) : !!(t && t.__v_isReactive);
}
function Oe(t) {
  return !!(t && t.__v_isReadonly);
}
function qe(t) {
  return !!(t && t.__v_isShallow);
}
function zs(t) {
  return t ? !!t.__v_raw : !1;
}
function rt(t) {
  const e = t && t.__v_raw;
  return e ? rt(e) : t;
}
function yo(t) {
  return Object.isExtensible(t) && Ts(t, "__v_skip", !0), t;
}
const wr = (t) => (ct(t) ? yr(t) : t),
  xr = (t) => (ct(t) ? Ks(t) : t);
class Gs {
  constructor(e, n, r, s) {
    (this.getter = e),
      (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new gr(
        () => e(this._value),
        () => Fn(this, this.effect._dirtyLevel === 2 ? 2 : 3)
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !s),
      (this.__v_isReadonly = r);
  }
  get value() {
    const e = rt(this);
    return (
      (!e._cacheable || e.effect.dirty) &&
        xe(e._value, (e._value = e.effect.run())) &&
        Fn(e, 4),
      wo(e),
      e.effect._dirtyLevel >= 2 && Fn(e, 2),
      e._value
    );
  }
  set value(e) {
    this._setter(e);
  }
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(e) {
    this.effect.dirty = e;
  }
}
function _o(t, e, n = !1) {
  let r, s;
  const i = G(t);
  return (
    i ? ((r = t), (s = It)) : ((r = t.get), (s = t.set)),
    new Gs(r, s, i || !s, n)
  );
}
function wo(t) {
  var e;
  oe &&
    ye &&
    ((t = rt(t)),
    Ls(
      ye,
      (e = t.dep) != null
        ? e
        : (t.dep = Fs(() => (t.dep = void 0), t instanceof Gs ? t : void 0))
    ));
}
function Fn(t, e = 4, n, r) {
  t = rt(t);
  const s = t.dep;
  s && Rs(s, e);
}
function Bt(t) {
  return !!(t && t.__v_isRef === !0);
}
function xo(t) {
  return Bt(t) ? t.value : t;
}
const Co = {
  get: (t, e, n) => xo(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const s = t[e];
    return Bt(s) && !Bt(n) ? ((s.value = n), !0) : Reflect.set(t, e, n, r);
  },
};
function Vs(t) {
  return Ge(t) ? t : new Proxy(t, Co);
}
/**
 * @vue/runtime-core v3.4.38
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function le(t, e, n, r) {
  try {
    return r ? t(...r) : t();
  } catch (s) {
    Cn(s, e, n);
  }
}
function kt(t, e, n, r) {
  if (G(t)) {
    const s = le(t, e, n, r);
    return (
      s &&
        Es(s) &&
        s.catch((i) => {
          Cn(i, e, n);
        }),
      s
    );
  }
  if (K(t)) {
    const s = [];
    for (let i = 0; i < t.length; i++) s.push(kt(t[i], e, n, r));
    return s;
  }
}
function Cn(t, e, n, r = !0) {
  const s = e ? e.vnode : null;
  if (e) {
    let i = e.parent;
    const o = e.proxy,
      l = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; i; ) {
      const f = i.ec;
      if (f) {
        for (let h = 0; h < f.length; h++) if (f[h](t, o, l) === !1) return;
      }
      i = i.parent;
    }
    const a = e.appContext.config.errorHandler;
    if (a) {
      ce(), le(a, null, 10, [t, o, l]), fe();
      return;
    }
  }
  Eo(t, n, s, r);
}
function Eo(t, e, n, r = !0) {
  console.error(t);
}
let Xe = !1,
  Yn = !1;
const bt = [];
let zt = 0;
const Me = [];
let re = null,
  pe = 0;
const Ws = Promise.resolve();
let Cr = null;
function Ao(t) {
  const e = Cr || Ws;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Po(t) {
  let e = zt + 1,
    n = bt.length;
  for (; e < n; ) {
    const r = (e + n) >>> 1,
      s = bt[r],
      i = Je(s);
    i < t || (i === t && s.pre) ? (e = r + 1) : (n = r);
  }
  return e;
}
function Er(t) {
  (!bt.length || !bt.includes(t, Xe && t.allowRecurse ? zt + 1 : zt)) &&
    (t.id == null ? bt.push(t) : bt.splice(Po(t.id), 0, t), qs());
}
function qs() {
  !Xe && !Yn && ((Yn = !0), (Cr = Ws.then(Js)));
}
function To(t) {
  const e = bt.indexOf(t);
  e > zt && bt.splice(e, 1);
}
function So(t) {
  K(t)
    ? Me.push(...t)
    : (!re || !re.includes(t, t.allowRecurse ? pe + 1 : pe)) && Me.push(t),
    qs();
}
function zr(t, e, n = Xe ? zt + 1 : 0) {
  for (; n < bt.length; n++) {
    const r = bt[n];
    if (r && r.pre) {
      if (t && r.id !== t.uid) continue;
      bt.splice(n, 1), n--, r();
    }
  }
}
function Xs(t) {
  if (Me.length) {
    const e = [...new Set(Me)].sort((n, r) => Je(n) - Je(r));
    if (((Me.length = 0), re)) {
      re.push(...e);
      return;
    }
    for (re = e, pe = 0; pe < re.length; pe++) {
      const n = re[pe];
      n.active !== !1 && n();
    }
    (re = null), (pe = 0);
  }
}
const Je = (t) => (t.id == null ? 1 / 0 : t.id),
  Io = (t, e) => {
    const n = Je(t) - Je(e);
    if (n === 0) {
      if (t.pre && !e.pre) return -1;
      if (e.pre && !t.pre) return 1;
    }
    return n;
  };
function Js(t) {
  (Yn = !1), (Xe = !0), bt.sort(Io);
  const e = It;
  try {
    for (zt = 0; zt < bt.length; zt++) {
      const n = bt[zt];
      n && n.active !== !1 && le(n, n.i, n.i ? 15 : 14);
    }
  } finally {
    (zt = 0),
      (bt.length = 0),
      Xs(),
      (Xe = !1),
      (Cr = null),
      (bt.length || Me.length) && Js();
  }
}
let Ft = null,
  Zs = null;
function pn(t) {
  const e = Ft;
  return (Ft = t), (Zs = (t && t.type.__scopeId) || null), e;
}
function Mo(t, e = Ft, n) {
  if (!e || t._n) return t;
  const r = (...s) => {
    r._d && Qr(-1);
    const i = pn(e);
    let o;
    try {
      o = t(...s);
    } finally {
      pn(i), r._d && Qr(1);
    }
    return o;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function he(t, e, n, r) {
  const s = t.dirs,
    i = e && e.dirs;
  for (let o = 0; o < s.length; o++) {
    const l = s[o];
    i && (l.oldValue = i[o].value);
    let a = l.dir[r];
    a && (ce(), kt(a, n, 8, [t.el, l, t, e]), fe());
  }
}
function Ys(t, e) {
  t.shapeFlag & 6 && t.component
    ? Ys(t.component.subTree, e)
    : t.shapeFlag & 128
    ? ((t.ssContent.transition = e.clone(t.ssContent)),
      (t.ssFallback.transition = e.clone(t.ssFallback)))
    : (t.transition = e);
}
const fn = (t) => !!t.type.__asyncLoader,
  Qs = (t) => t.type.__isKeepAlive;
function Bo(t, e) {
  ti(t, "a", e);
}
function Oo(t, e) {
  ti(t, "da", e);
}
function ti(t, e, n = vt) {
  const r =
    t.__wdc ||
    (t.__wdc = () => {
      let s = n;
      for (; s; ) {
        if (s.isDeactivated) return;
        s = s.parent;
      }
      return t();
    });
  if ((En(e, r, n), n)) {
    let s = n.parent;
    for (; s && s.parent; )
      Qs(s.parent.vnode) && Do(r, e, n, s), (s = s.parent);
  }
}
function Do(t, e, n, r) {
  const s = En(e, t, r, !0);
  ei(() => {
    fr(r[e], s);
  }, n);
}
function En(t, e, n = vt, r = !1) {
  if (n) {
    const s = n[t] || (n[t] = []),
      i =
        e.__weh ||
        (e.__weh = (...o) => {
          ce();
          const l = Ye(n),
            a = kt(e, n, t, o);
          return l(), fe(), a;
        });
    return r ? s.unshift(i) : s.push(i), i;
  }
}
const Yt =
    (t) =>
    (e, n = vt) => {
      (!Tn || t === "sp") && En(t, (...r) => e(...r), n);
    },
  Lo = Yt("bm"),
  Ro = Yt("m"),
  Fo = Yt("bu"),
  ko = Yt("u"),
  No = Yt("bum"),
  ei = Yt("um"),
  $o = Yt("sp"),
  jo = Yt("rtg"),
  Ho = Yt("rtc");
function Uo(t, e = vt) {
  En("ec", t, e);
}
const ni = "components";
function Ko(t, e) {
  return Go(ni, t, !0, e) || t;
}
const zo = Symbol.for("v-ndc");
function Go(t, e, n = !0, r = !1) {
  const s = Ft || vt;
  if (s) {
    const i = s.type;
    if (t === ni) {
      const l = $l(i, !1);
      if (l && (l === e || l === Nt(e) || l === wn(Nt(e)))) return i;
    }
    const o = Gr(s[t] || i[t], e) || Gr(s.appContext[t], e);
    return !o && r ? i : o;
  }
}
function Gr(t, e) {
  return t && (t[e] || t[Nt(e)] || t[wn(Nt(e))]);
}
function Vo(t, e, n, r) {
  let s;
  const i = n && n[r];
  if (K(t) || dt(t)) {
    s = new Array(t.length);
    for (let o = 0, l = t.length; o < l; o++)
      s[o] = e(t[o], o, void 0, i && i[o]);
  } else if (typeof t == "number") {
    s = new Array(t);
    for (let o = 0; o < t; o++) s[o] = e(o + 1, o, void 0, i && i[o]);
  } else if (ct(t))
    if (t[Symbol.iterator])
      s = Array.from(t, (o, l) => e(o, l, void 0, i && i[l]));
    else {
      const o = Object.keys(t);
      s = new Array(o.length);
      for (let l = 0, a = o.length; l < a; l++) {
        const f = o[l];
        s[l] = e(t[f], f, l, i && i[l]);
      }
    }
  else s = [];
  return n && (n[r] = s), s;
}
const Qn = (t) => (t ? (xi(t) ? Sr(t) : Qn(t.parent)) : null),
  Ve = xt(Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => Qn(t.parent),
    $root: (t) => Qn(t.root),
    $emit: (t) => t.emit,
    $options: (t) => Ar(t),
    $forceUpdate: (t) =>
      t.f ||
      (t.f = () => {
        (t.effect.dirty = !0), Er(t.update);
      }),
    $nextTick: (t) => t.n || (t.n = Ao.bind(t.proxy)),
    $watch: (t) => ml.bind(t),
  }),
  kn = (t, e) => t !== at && !t.__isScriptSetup && Z(t, e),
  Wo = {
    get({ _: t }, e) {
      if (e === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: r,
        data: s,
        props: i,
        accessCache: o,
        type: l,
        appContext: a,
      } = t;
      let f;
      if (e[0] !== "$") {
        const A = o[e];
        if (A !== void 0)
          switch (A) {
            case 1:
              return r[e];
            case 2:
              return s[e];
            case 4:
              return n[e];
            case 3:
              return i[e];
          }
        else {
          if (kn(r, e)) return (o[e] = 1), r[e];
          if (s !== at && Z(s, e)) return (o[e] = 2), s[e];
          if ((f = t.propsOptions[0]) && Z(f, e)) return (o[e] = 3), i[e];
          if (n !== at && Z(n, e)) return (o[e] = 4), n[e];
          tr && (o[e] = 0);
        }
      }
      const h = Ve[e];
      let d, m;
      if (h) return e === "$attrs" && At(t.attrs, "get", ""), h(t);
      if ((d = l.__cssModules) && (d = d[e])) return d;
      if (n !== at && Z(n, e)) return (o[e] = 4), n[e];
      if (((m = a.config.globalProperties), Z(m, e))) return m[e];
    },
    set({ _: t }, e, n) {
      const { data: r, setupState: s, ctx: i } = t;
      return kn(s, e)
        ? ((s[e] = n), !0)
        : r !== at && Z(r, e)
        ? ((r[e] = n), !0)
        : Z(t.props, e) || (e[0] === "$" && e.slice(1) in t)
        ? !1
        : ((i[e] = n), !0);
    },
    has(
      {
        _: {
          data: t,
          setupState: e,
          accessCache: n,
          ctx: r,
          appContext: s,
          propsOptions: i,
        },
      },
      o
    ) {
      let l;
      return (
        !!n[o] ||
        (t !== at && Z(t, o)) ||
        kn(e, o) ||
        ((l = i[0]) && Z(l, o)) ||
        Z(r, o) ||
        Z(Ve, o) ||
        Z(s.config.globalProperties, o)
      );
    },
    defineProperty(t, e, n) {
      return (
        n.get != null
          ? (t._.accessCache[e] = 0)
          : Z(n, "value") && this.set(t, e, n.value, null),
        Reflect.defineProperty(t, e, n)
      );
    },
  };
function Vr(t) {
  return K(t) ? t.reduce((e, n) => ((e[n] = null), e), {}) : t;
}
let tr = !0;
function qo(t) {
  const e = Ar(t),
    n = t.proxy,
    r = t.ctx;
  (tr = !1), e.beforeCreate && Wr(e.beforeCreate, t, "bc");
  const {
    data: s,
    computed: i,
    methods: o,
    watch: l,
    provide: a,
    inject: f,
    created: h,
    beforeMount: d,
    mounted: m,
    beforeUpdate: A,
    updated: R,
    activated: O,
    deactivated: W,
    beforeDestroy: w,
    beforeUnmount: E,
    destroyed: T,
    unmounted: y,
    render: M,
    renderTracked: _,
    renderTriggered: B,
    errorCaptured: k,
    serverPrefetch: V,
    expose: J,
    inheritAttrs: v,
    components: Y,
    directives: F,
    filters: Q,
  } = e;
  if ((f && Xo(f, r, null), o))
    for (const U in o) {
      const q = o[U];
      G(q) && (r[U] = q.bind(n));
    }
  if (s) {
    const U = s.call(n, n);
    ct(U) && (t.data = yr(U));
  }
  if (((tr = !0), i))
    for (const U in i) {
      const q = i[U],
        mt = G(q) ? q.bind(n, n) : G(q.get) ? q.get.bind(n, n) : It,
        it = !G(q) && G(q.set) ? q.set.bind(n) : It,
        ht = Hl({ get: mt, set: it });
      Object.defineProperty(r, U, {
        enumerable: !0,
        configurable: !0,
        get: () => ht.value,
        set: (Pt) => (ht.value = Pt),
      });
    }
  if (l) for (const U in l) ri(l[U], r, n, U);
  if (a) {
    const U = G(a) ? a.call(n) : a;
    Reflect.ownKeys(U).forEach((q) => {
      el(q, U[q]);
    });
  }
  h && Wr(h, t, "c");
  function lt(U, q) {
    K(q) ? q.forEach((mt) => U(mt.bind(n))) : q && U(q.bind(n));
  }
  if (
    (lt(Lo, d),
    lt(Ro, m),
    lt(Fo, A),
    lt(ko, R),
    lt(Bo, O),
    lt(Oo, W),
    lt(Uo, k),
    lt(Ho, _),
    lt(jo, B),
    lt(No, E),
    lt(ei, y),
    lt($o, V),
    K(J))
  )
    if (J.length) {
      const U = t.exposed || (t.exposed = {});
      J.forEach((q) => {
        Object.defineProperty(U, q, {
          get: () => n[q],
          set: (mt) => (n[q] = mt),
        });
      });
    } else t.exposed || (t.exposed = {});
  M && t.render === It && (t.render = M),
    v != null && (t.inheritAttrs = v),
    Y && (t.components = Y),
    F && (t.directives = F);
}
function Xo(t, e, n = It) {
  K(t) && (t = er(t));
  for (const r in t) {
    const s = t[r];
    let i;
    ct(s)
      ? "default" in s
        ? (i = un(s.from || r, s.default, !0))
        : (i = un(s.from || r))
      : (i = un(s)),
      Bt(i)
        ? Object.defineProperty(e, r, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (o) => (i.value = o),
          })
        : (e[r] = i);
  }
}
function Wr(t, e, n) {
  kt(K(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy), e, n);
}
function ri(t, e, n, r) {
  const s = r.includes(".") ? bi(n, r) : () => n[r];
  if (dt(t)) {
    const i = e[t];
    G(i) && $n(s, i);
  } else if (G(t)) $n(s, t.bind(n));
  else if (ct(t))
    if (K(t)) t.forEach((i) => ri(i, e, n, r));
    else {
      const i = G(t.handler) ? t.handler.bind(n) : e[t.handler];
      G(i) && $n(s, i, t);
    }
}
function Ar(t) {
  const e = t.type,
    { mixins: n, extends: r } = e,
    {
      mixins: s,
      optionsCache: i,
      config: { optionMergeStrategies: o },
    } = t.appContext,
    l = i.get(e);
  let a;
  return (
    l
      ? (a = l)
      : !s.length && !n && !r
      ? (a = e)
      : ((a = {}), s.length && s.forEach((f) => mn(a, f, o, !0)), mn(a, e, o)),
    ct(e) && i.set(e, a),
    a
  );
}
function mn(t, e, n, r = !1) {
  const { mixins: s, extends: i } = e;
  i && mn(t, i, n, !0), s && s.forEach((o) => mn(t, o, n, !0));
  for (const o in e)
    if (!(r && o === "expose")) {
      const l = Jo[o] || (n && n[o]);
      t[o] = l ? l(t[o], e[o]) : e[o];
    }
  return t;
}
const Jo = {
  data: qr,
  props: Xr,
  emits: Xr,
  methods: He,
  computed: He,
  beforeCreate: _t,
  created: _t,
  beforeMount: _t,
  mounted: _t,
  beforeUpdate: _t,
  updated: _t,
  beforeDestroy: _t,
  beforeUnmount: _t,
  destroyed: _t,
  unmounted: _t,
  activated: _t,
  deactivated: _t,
  errorCaptured: _t,
  serverPrefetch: _t,
  components: He,
  directives: He,
  watch: Yo,
  provide: qr,
  inject: Zo,
};
function qr(t, e) {
  return e
    ? t
      ? function () {
          return xt(
            G(t) ? t.call(this, this) : t,
            G(e) ? e.call(this, this) : e
          );
        }
      : e
    : t;
}
function Zo(t, e) {
  return He(er(t), er(e));
}
function er(t) {
  if (K(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) e[t[n]] = t[n];
    return e;
  }
  return t;
}
function _t(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function He(t, e) {
  return t ? xt(Object.create(null), t, e) : e;
}
function Xr(t, e) {
  return t
    ? K(t) && K(e)
      ? [...new Set([...t, ...e])]
      : xt(Object.create(null), Vr(t), Vr(e ?? {}))
    : e;
}
function Yo(t, e) {
  if (!t) return e;
  if (!e) return t;
  const n = xt(Object.create(null), t);
  for (const r in e) n[r] = _t(t[r], e[r]);
  return n;
}
function si() {
  return {
    app: null,
    config: {
      isNativeTag: ki,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Qo = 0;
function tl(t, e) {
  return function (r, s = null) {
    G(r) || (r = xt({}, r)), s != null && !ct(s) && (s = null);
    const i = si(),
      o = new WeakSet();
    let l = !1;
    const a = (i.app = {
      _uid: Qo++,
      _component: r,
      _props: s,
      _container: null,
      _context: i,
      _instance: null,
      version: Ul,
      get config() {
        return i.config;
      },
      set config(f) {},
      use(f, ...h) {
        return (
          o.has(f) ||
            (f && G(f.install)
              ? (o.add(f), f.install(a, ...h))
              : G(f) && (o.add(f), f(a, ...h))),
          a
        );
      },
      mixin(f) {
        return i.mixins.includes(f) || i.mixins.push(f), a;
      },
      component(f, h) {
        return h ? ((i.components[f] = h), a) : i.components[f];
      },
      directive(f, h) {
        return h ? ((i.directives[f] = h), a) : i.directives[f];
      },
      mount(f, h, d) {
        if (!l) {
          const m = Gt(r, s);
          return (
            (m.appContext = i),
            d === !0 ? (d = "svg") : d === !1 && (d = void 0),
            h && e ? e(m, f) : t(m, f, d),
            (l = !0),
            (a._container = f),
            (f.__vue_app__ = a),
            Sr(m.component)
          );
        }
      },
      unmount() {
        l && (t(null, a._container), delete a._container.__vue_app__);
      },
      provide(f, h) {
        return (i.provides[f] = h), a;
      },
      runWithContext(f) {
        const h = Be;
        Be = a;
        try {
          return f();
        } finally {
          Be = h;
        }
      },
    });
    return a;
  };
}
let Be = null;
function el(t, e) {
  if (vt) {
    let n = vt.provides;
    const r = vt.parent && vt.parent.provides;
    r === n && (n = vt.provides = Object.create(r)), (n[t] = e);
  }
}
function un(t, e, n = !1) {
  const r = vt || Ft;
  if (r || Be) {
    const s = Be
      ? Be._context.provides
      : r
      ? r.parent == null
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : void 0;
    if (s && t in s) return s[t];
    if (arguments.length > 1) return n && G(e) ? e.call(r && r.proxy) : e;
  }
}
const ii = {},
  oi = () => Object.create(ii),
  li = (t) => Object.getPrototypeOf(t) === ii;
function nl(t, e, n, r = !1) {
  const s = {},
    i = oi();
  (t.propsDefaults = Object.create(null)), ai(t, e, s, i);
  for (const o in t.propsOptions[0]) o in s || (s[o] = void 0);
  n ? (t.props = r ? s : vo(s)) : t.type.props ? (t.props = s) : (t.props = i),
    (t.attrs = i);
}
function rl(t, e, n, r) {
  const {
      props: s,
      attrs: i,
      vnode: { patchFlag: o },
    } = t,
    l = rt(s),
    [a] = t.propsOptions;
  let f = !1;
  if ((r || o > 0) && !(o & 16)) {
    if (o & 8) {
      const h = t.vnode.dynamicProps;
      for (let d = 0; d < h.length; d++) {
        let m = h[d];
        if (An(t.emitsOptions, m)) continue;
        const A = e[m];
        if (a)
          if (Z(i, m)) A !== i[m] && ((i[m] = A), (f = !0));
          else {
            const R = Nt(m);
            s[R] = nr(a, l, R, A, t, !1);
          }
        else A !== i[m] && ((i[m] = A), (f = !0));
      }
    }
  } else {
    ai(t, e, s, i) && (f = !0);
    let h;
    for (const d in l)
      (!e || (!Z(e, d) && ((h = Ae(d)) === d || !Z(e, h)))) &&
        (a
          ? n &&
            (n[d] !== void 0 || n[h] !== void 0) &&
            (s[d] = nr(a, l, d, void 0, t, !0))
          : delete s[d]);
    if (i !== l) for (const d in i) (!e || !Z(e, d)) && (delete i[d], (f = !0));
  }
  f && Zt(t.attrs, "set", "");
}
function ai(t, e, n, r) {
  const [s, i] = t.propsOptions;
  let o = !1,
    l;
  if (e)
    for (let a in e) {
      if (ze(a)) continue;
      const f = e[a];
      let h;
      s && Z(s, (h = Nt(a)))
        ? !i || !i.includes(h)
          ? (n[h] = f)
          : ((l || (l = {}))[h] = f)
        : An(t.emitsOptions, a) ||
          ((!(a in r) || f !== r[a]) && ((r[a] = f), (o = !0)));
    }
  if (i) {
    const a = rt(n),
      f = l || at;
    for (let h = 0; h < i.length; h++) {
      const d = i[h];
      n[d] = nr(s, a, d, f[d], t, !Z(f, d));
    }
  }
  return o;
}
function nr(t, e, n, r, s, i) {
  const o = t[n];
  if (o != null) {
    const l = Z(o, "default");
    if (l && r === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && G(a)) {
        const { propsDefaults: f } = s;
        if (n in f) r = f[n];
        else {
          const h = Ye(s);
          (r = f[n] = a.call(null, e)), h();
        }
      } else r = a;
    }
    o[0] &&
      (i && !l ? (r = !1) : o[1] && (r === "" || r === Ae(n)) && (r = !0));
  }
  return r;
}
const sl = new WeakMap();
function ci(t, e, n = !1) {
  const r = n ? sl : e.propsCache,
    s = r.get(t);
  if (s) return s;
  const i = t.props,
    o = {},
    l = [];
  let a = !1;
  if (!G(t)) {
    const h = (d) => {
      a = !0;
      const [m, A] = ci(d, e, !0);
      xt(o, m), A && l.push(...A);
    };
    !n && e.mixins.length && e.mixins.forEach(h),
      t.extends && h(t.extends),
      t.mixins && t.mixins.forEach(h);
  }
  if (!i && !a) return ct(t) && r.set(t, Se), Se;
  if (K(i))
    for (let h = 0; h < i.length; h++) {
      const d = Nt(i[h]);
      Jr(d) && (o[d] = at);
    }
  else if (i)
    for (const h in i) {
      const d = Nt(h);
      if (Jr(d)) {
        const m = i[h],
          A = (o[d] = K(m) || G(m) ? { type: m } : xt({}, m)),
          R = A.type;
        let O = !1,
          W = !0;
        if (K(R))
          for (let w = 0; w < R.length; ++w) {
            const E = R[w],
              T = G(E) && E.name;
            if (T === "Boolean") {
              O = !0;
              break;
            } else T === "String" && (W = !1);
          }
        else O = G(R) && R.name === "Boolean";
        (A[0] = O), (A[1] = W), (O || Z(A, "default")) && l.push(d);
      }
    }
  const f = [o, l];
  return ct(t) && r.set(t, f), f;
}
function Jr(t) {
  return t[0] !== "$" && !ze(t);
}
const fi = (t) => t[0] === "_" || t === "$stable",
  Pr = (t) => (K(t) ? t.map(Ut) : [Ut(t)]),
  il = (t, e, n) => {
    if (e._n) return e;
    const r = Mo((...s) => Pr(e(...s)), n);
    return (r._c = !1), r;
  },
  ui = (t, e, n) => {
    const r = t._ctx;
    for (const s in t) {
      if (fi(s)) continue;
      const i = t[s];
      if (G(i)) e[s] = il(s, i, r);
      else if (i != null) {
        const o = Pr(i);
        e[s] = () => o;
      }
    }
  },
  hi = (t, e) => {
    const n = Pr(e);
    t.slots.default = () => n;
  },
  di = (t, e, n) => {
    for (const r in e) (n || r !== "_") && (t[r] = e[r]);
  },
  ol = (t, e, n) => {
    const r = (t.slots = oi());
    if (t.vnode.shapeFlag & 32) {
      const s = e._;
      s ? (di(r, e, n), n && Ts(r, "_", s, !0)) : ui(e, r);
    } else e && hi(t, e);
  },
  ll = (t, e, n) => {
    const { vnode: r, slots: s } = t;
    let i = !0,
      o = at;
    if (r.shapeFlag & 32) {
      const l = e._;
      l
        ? n && l === 1
          ? (i = !1)
          : di(s, e, n)
        : ((i = !e.$stable), ui(e, s)),
        (o = e);
    } else e && (hi(t, e), (o = { default: 1 }));
    if (i) for (const l in s) !fi(l) && o[l] == null && delete s[l];
  };
function rr(t, e, n, r, s = !1) {
  if (K(t)) {
    t.forEach((m, A) => rr(m, e && (K(e) ? e[A] : e), n, r, s));
    return;
  }
  if (fn(r) && !s) return;
  const i = r.shapeFlag & 4 ? Sr(r.component) : r.el,
    o = s ? null : i,
    { i: l, r: a } = t,
    f = e && e.r,
    h = l.refs === at ? (l.refs = {}) : l.refs,
    d = l.setupState;
  if (
    (f != null &&
      f !== a &&
      (dt(f)
        ? ((h[f] = null), Z(d, f) && (d[f] = null))
        : Bt(f) && (f.value = null)),
    G(a))
  )
    le(a, l, 12, [o, h]);
  else {
    const m = dt(a),
      A = Bt(a);
    if (m || A) {
      const R = () => {
        if (t.f) {
          const O = m ? (Z(d, a) ? d[a] : h[a]) : a.value;
          s
            ? K(O) && fr(O, i)
            : K(O)
            ? O.includes(i) || O.push(i)
            : m
            ? ((h[a] = [i]), Z(d, a) && (d[a] = h[a]))
            : ((a.value = [i]), t.k && (h[t.k] = a.value));
        } else
          m
            ? ((h[a] = o), Z(d, a) && (d[a] = o))
            : A && ((a.value = o), t.k && (h[t.k] = o));
      };
      o ? ((R.id = -1), Ct(R, n)) : R();
    }
  }
}
const al = Symbol("_vte"),
  cl = (t) => t.__isTeleport,
  Ct = El;
function fl(t) {
  return ul(t);
}
function ul(t, e) {
  const n = Ss();
  n.__VUE__ = !0;
  const {
      insert: r,
      remove: s,
      patchProp: i,
      createElement: o,
      createText: l,
      createComment: a,
      setText: f,
      setElementText: h,
      parentNode: d,
      nextSibling: m,
      setScopeId: A = It,
      insertStaticContent: R,
    } = t,
    O = (
      c,
      u,
      g,
      b = null,
      p = null,
      x = null,
      P = void 0,
      S = null,
      I = !!u.dynamicChildren
    ) => {
      if (c === u) return;
      c && !$e(c, u) && ((b = ue(c)), Pt(c, p, x, !0), (c = null)),
        u.patchFlag === -2 && ((I = !1), (u.dynamicChildren = null));
      const { type: C, ref: L, shapeFlag: j } = u;
      switch (C) {
        case Pn:
          W(c, u, g, b);
          break;
        case Ce:
          w(c, u, g, b);
          break;
        case hn:
          c == null && E(u, g, b, P);
          break;
        case Rt:
          Y(c, u, g, b, p, x, P, S, I);
          break;
        default:
          j & 1
            ? M(c, u, g, b, p, x, P, S, I)
            : j & 6
            ? F(c, u, g, b, p, x, P, S, I)
            : (j & 64 || j & 128) && C.process(c, u, g, b, p, x, P, S, I, te);
      }
      L != null && p && rr(L, c && c.ref, x, u || c, !u);
    },
    W = (c, u, g, b) => {
      if (c == null) r((u.el = l(u.children)), g, b);
      else {
        const p = (u.el = c.el);
        u.children !== c.children && f(p, u.children);
      }
    },
    w = (c, u, g, b) => {
      c == null ? r((u.el = a(u.children || "")), g, b) : (u.el = c.el);
    },
    E = (c, u, g, b) => {
      [c.el, c.anchor] = R(c.children, u, g, b, c.el, c.anchor);
    },
    T = ({ el: c, anchor: u }, g, b) => {
      let p;
      for (; c && c !== u; ) (p = m(c)), r(c, g, b), (c = p);
      r(u, g, b);
    },
    y = ({ el: c, anchor: u }) => {
      let g;
      for (; c && c !== u; ) (g = m(c)), s(c), (c = g);
      s(u);
    },
    M = (c, u, g, b, p, x, P, S, I) => {
      u.type === "svg" ? (P = "svg") : u.type === "math" && (P = "mathml"),
        c == null ? _(u, g, b, p, x, P, S, I) : V(c, u, p, x, P, S, I);
    },
    _ = (c, u, g, b, p, x, P, S) => {
      let I, C;
      const { props: L, shapeFlag: j, transition: N, dirs: z } = c;
      if (
        ((I = c.el = o(c.type, x, L && L.is, L)),
        j & 8
          ? h(I, c.children)
          : j & 16 && k(c.children, I, null, b, p, Nn(c, x), P, S),
        z && he(c, null, b, "created"),
        B(I, c, c.scopeId, P, b),
        L)
      ) {
        for (const ot in L)
          ot !== "value" && !ze(ot) && i(I, ot, null, L[ot], x, b);
        "value" in L && i(I, "value", null, L.value, x),
          (C = L.onVnodeBeforeMount) && jt(C, b, c);
      }
      z && he(c, null, b, "beforeMount");
      const X = hl(p, N);
      X && N.beforeEnter(I),
        r(I, u, g),
        ((C = L && L.onVnodeMounted) || X || z) &&
          Ct(() => {
            C && jt(C, b, c), X && N.enter(I), z && he(c, null, b, "mounted");
          }, p);
    },
    B = (c, u, g, b, p) => {
      if ((g && A(c, g), b)) for (let x = 0; x < b.length; x++) A(c, b[x]);
      if (p) {
        let x = p.subTree;
        if (u === x) {
          const P = p.vnode;
          B(c, P, P.scopeId, P.slotScopeIds, p.parent);
        }
      }
    },
    k = (c, u, g, b, p, x, P, S, I = 0) => {
      for (let C = I; C < c.length; C++) {
        const L = (c[C] = S ? se(c[C]) : Ut(c[C]));
        O(null, L, u, g, b, p, x, P, S);
      }
    },
    V = (c, u, g, b, p, x, P) => {
      const S = (u.el = c.el);
      let { patchFlag: I, dynamicChildren: C, dirs: L } = u;
      I |= c.patchFlag & 16;
      const j = c.props || at,
        N = u.props || at;
      let z;
      if (
        (g && de(g, !1),
        (z = N.onVnodeBeforeUpdate) && jt(z, g, u, c),
        L && he(u, c, g, "beforeUpdate"),
        g && de(g, !0),
        ((j.innerHTML && N.innerHTML == null) ||
          (j.textContent && N.textContent == null)) &&
          h(S, ""),
        C
          ? J(c.dynamicChildren, C, S, g, b, Nn(u, p), x)
          : P || q(c, u, S, null, g, b, Nn(u, p), x, !1),
        I > 0)
      ) {
        if (I & 16) v(S, j, N, g, p);
        else if (
          (I & 2 && j.class !== N.class && i(S, "class", null, N.class, p),
          I & 4 && i(S, "style", j.style, N.style, p),
          I & 8)
        ) {
          const X = u.dynamicProps;
          for (let ot = 0; ot < X.length; ot++) {
            const tt = X[ot],
              gt = j[tt],
              Dt = N[tt];
            (Dt !== gt || tt === "value") && i(S, tt, gt, Dt, p, g);
          }
        }
        I & 1 && c.children !== u.children && h(S, u.children);
      } else !P && C == null && v(S, j, N, g, p);
      ((z = N.onVnodeUpdated) || L) &&
        Ct(() => {
          z && jt(z, g, u, c), L && he(u, c, g, "updated");
        }, b);
    },
    J = (c, u, g, b, p, x, P) => {
      for (let S = 0; S < u.length; S++) {
        const I = c[S],
          C = u[S],
          L =
            I.el && (I.type === Rt || !$e(I, C) || I.shapeFlag & 70)
              ? d(I.el)
              : g;
        O(I, C, L, null, b, p, x, P, !0);
      }
    },
    v = (c, u, g, b, p) => {
      if (u !== g) {
        if (u !== at)
          for (const x in u) !ze(x) && !(x in g) && i(c, x, u[x], null, p, b);
        for (const x in g) {
          if (ze(x)) continue;
          const P = g[x],
            S = u[x];
          P !== S && x !== "value" && i(c, x, S, P, p, b);
        }
        "value" in g && i(c, "value", u.value, g.value, p);
      }
    },
    Y = (c, u, g, b, p, x, P, S, I) => {
      const C = (u.el = c ? c.el : l("")),
        L = (u.anchor = c ? c.anchor : l(""));
      let { patchFlag: j, dynamicChildren: N, slotScopeIds: z } = u;
      z && (S = S ? S.concat(z) : z),
        c == null
          ? (r(C, g, b), r(L, g, b), k(u.children || [], g, L, p, x, P, S, I))
          : j > 0 && j & 64 && N && c.dynamicChildren
          ? (J(c.dynamicChildren, N, g, p, x, P, S),
            (u.key != null || (p && u === p.subTree)) && gi(c, u, !0))
          : q(c, u, g, L, p, x, P, S, I);
    },
    F = (c, u, g, b, p, x, P, S, I) => {
      (u.slotScopeIds = S),
        c == null
          ? u.shapeFlag & 512
            ? p.ctx.activate(u, g, b, P, I)
            : Q(u, g, b, p, x, P, I)
          : D(c, u, I);
    },
    Q = (c, u, g, b, p, x, P) => {
      const S = (c.component = Ll(c, b, p));
      if ((Qs(c) && (S.ctx.renderer = te), Rl(S, !1, P), S.asyncDep)) {
        if ((p && p.registerDep(S, lt, P), !c.el)) {
          const I = (S.subTree = Gt(Ce));
          w(null, I, u, g);
        }
      } else lt(S, c, u, g, p, x, P);
    },
    D = (c, u, g) => {
      const b = (u.component = c.component);
      if (wl(c, u, g))
        if (b.asyncDep && !b.asyncResolved) {
          U(b, u, g);
          return;
        } else (b.next = u), To(b.update), (b.effect.dirty = !0), b.update();
      else (u.el = c.el), (b.vnode = u);
    },
    lt = (c, u, g, b, p, x, P) => {
      const S = () => {
          if (c.isMounted) {
            let { next: L, bu: j, u: N, parent: z, vnode: X } = c;
            {
              const Pe = pi(c);
              if (Pe) {
                L && ((L.el = X.el), U(c, L, P)),
                  Pe.asyncDep.then(() => {
                    c.isUnmounted || S();
                  });
                return;
              }
            }
            let ot = L,
              tt;
            de(c, !1),
              L ? ((L.el = X.el), U(c, L, P)) : (L = X),
              j && Ln(j),
              (tt = L.props && L.props.onVnodeBeforeUpdate) && jt(tt, z, L, X),
              de(c, !0);
            const gt = jn(c),
              Dt = c.subTree;
            (c.subTree = gt),
              O(Dt, gt, d(Dt.el), ue(Dt), c, p, x),
              (L.el = gt.el),
              ot === null && xl(c, gt.el),
              N && Ct(N, p),
              (tt = L.props && L.props.onVnodeUpdated) &&
                Ct(() => jt(tt, z, L, X), p);
          } else {
            let L;
            const { el: j, props: N } = u,
              { bm: z, m: X, parent: ot } = c,
              tt = fn(u);
            if (
              (de(c, !1),
              z && Ln(z),
              !tt && (L = N && N.onVnodeBeforeMount) && jt(L, ot, u),
              de(c, !0),
              j && H)
            ) {
              const gt = () => {
                (c.subTree = jn(c)), H(j, c.subTree, c, p, null);
              };
              tt
                ? u.type.__asyncLoader().then(() => !c.isUnmounted && gt())
                : gt();
            } else {
              const gt = (c.subTree = jn(c));
              O(null, gt, g, b, c, p, x), (u.el = gt.el);
            }
            if ((X && Ct(X, p), !tt && (L = N && N.onVnodeMounted))) {
              const gt = u;
              Ct(() => jt(L, ot, gt), p);
            }
            (u.shapeFlag & 256 ||
              (ot && fn(ot.vnode) && ot.vnode.shapeFlag & 256)) &&
              c.a &&
              Ct(c.a, p),
              (c.isMounted = !0),
              (u = g = b = null);
          }
        },
        I = (c.effect = new gr(S, It, () => Er(C), c.scope)),
        C = (c.update = () => {
          I.dirty && I.run();
        });
      (C.i = c), (C.id = c.uid), de(c, !0), C();
    },
    U = (c, u, g) => {
      u.component = c;
      const b = c.vnode.props;
      (c.vnode = u),
        (c.next = null),
        rl(c, u.props, b, g),
        ll(c, u.children, g),
        ce(),
        zr(c),
        fe();
    },
    q = (c, u, g, b, p, x, P, S, I = !1) => {
      const C = c && c.children,
        L = c ? c.shapeFlag : 0,
        j = u.children,
        { patchFlag: N, shapeFlag: z } = u;
      if (N > 0) {
        if (N & 128) {
          it(C, j, g, b, p, x, P, S, I);
          return;
        } else if (N & 256) {
          mt(C, j, g, b, p, x, P, S, I);
          return;
        }
      }
      z & 8
        ? (L & 16 && Qt(C, p, x), j !== C && h(g, j))
        : L & 16
        ? z & 16
          ? it(C, j, g, b, p, x, P, S, I)
          : Qt(C, p, x, !0)
        : (L & 8 && h(g, ""), z & 16 && k(j, g, b, p, x, P, S, I));
    },
    mt = (c, u, g, b, p, x, P, S, I) => {
      (c = c || Se), (u = u || Se);
      const C = c.length,
        L = u.length,
        j = Math.min(C, L);
      let N;
      for (N = 0; N < j; N++) {
        const z = (u[N] = I ? se(u[N]) : Ut(u[N]));
        O(c[N], z, g, null, p, x, P, S, I);
      }
      C > L ? Qt(c, p, x, !0, !1, j) : k(u, g, b, p, x, P, S, I, j);
    },
    it = (c, u, g, b, p, x, P, S, I) => {
      let C = 0;
      const L = u.length;
      let j = c.length - 1,
        N = L - 1;
      for (; C <= j && C <= N; ) {
        const z = c[C],
          X = (u[C] = I ? se(u[C]) : Ut(u[C]));
        if ($e(z, X)) O(z, X, g, null, p, x, P, S, I);
        else break;
        C++;
      }
      for (; C <= j && C <= N; ) {
        const z = c[j],
          X = (u[N] = I ? se(u[N]) : Ut(u[N]));
        if ($e(z, X)) O(z, X, g, null, p, x, P, S, I);
        else break;
        j--, N--;
      }
      if (C > j) {
        if (C <= N) {
          const z = N + 1,
            X = z < L ? u[z].el : b;
          for (; C <= N; )
            O(null, (u[C] = I ? se(u[C]) : Ut(u[C])), g, X, p, x, P, S, I), C++;
        }
      } else if (C > N) for (; C <= j; ) Pt(c[C], p, x, !0), C++;
      else {
        const z = C,
          X = C,
          ot = new Map();
        for (C = X; C <= N; C++) {
          const Tt = (u[C] = I ? se(u[C]) : Ut(u[C]));
          Tt.key != null && ot.set(Tt.key, C);
        }
        let tt,
          gt = 0;
        const Dt = N - X + 1;
        let Pe = !1,
          Dr = 0;
        const Ne = new Array(Dt);
        for (C = 0; C < Dt; C++) Ne[C] = 0;
        for (C = z; C <= j; C++) {
          const Tt = c[C];
          if (gt >= Dt) {
            Pt(Tt, p, x, !0);
            continue;
          }
          let $t;
          if (Tt.key != null) $t = ot.get(Tt.key);
          else
            for (tt = X; tt <= N; tt++)
              if (Ne[tt - X] === 0 && $e(Tt, u[tt])) {
                $t = tt;
                break;
              }
          $t === void 0
            ? Pt(Tt, p, x, !0)
            : ((Ne[$t - X] = C + 1),
              $t >= Dr ? (Dr = $t) : (Pe = !0),
              O(Tt, u[$t], g, null, p, x, P, S, I),
              gt++);
        }
        const Lr = Pe ? dl(Ne) : Se;
        for (tt = Lr.length - 1, C = Dt - 1; C >= 0; C--) {
          const Tt = X + C,
            $t = u[Tt],
            Rr = Tt + 1 < L ? u[Tt + 1].el : b;
          Ne[C] === 0
            ? O(null, $t, g, Rr, p, x, P, S, I)
            : Pe && (tt < 0 || C !== Lr[tt] ? ht($t, g, Rr, 2) : tt--);
        }
      }
    },
    ht = (c, u, g, b, p = null) => {
      const { el: x, type: P, transition: S, children: I, shapeFlag: C } = c;
      if (C & 6) {
        ht(c.component.subTree, u, g, b);
        return;
      }
      if (C & 128) {
        c.suspense.move(u, g, b);
        return;
      }
      if (C & 64) {
        P.move(c, u, g, te);
        return;
      }
      if (P === Rt) {
        r(x, u, g);
        for (let j = 0; j < I.length; j++) ht(I[j], u, g, b);
        r(c.anchor, u, g);
        return;
      }
      if (P === hn) {
        T(c, u, g);
        return;
      }
      if (b !== 2 && C & 1 && S)
        if (b === 0) S.beforeEnter(x), r(x, u, g), Ct(() => S.enter(x), p);
        else {
          const { leave: j, delayLeave: N, afterLeave: z } = S,
            X = () => r(x, u, g),
            ot = () => {
              j(x, () => {
                X(), z && z();
              });
            };
          N ? N(x, X, ot) : ot();
        }
      else r(x, u, g);
    },
    Pt = (c, u, g, b = !1, p = !1) => {
      const {
        type: x,
        props: P,
        ref: S,
        children: I,
        dynamicChildren: C,
        shapeFlag: L,
        patchFlag: j,
        dirs: N,
        cacheIndex: z,
      } = c;
      if (
        (j === -2 && (p = !1),
        S != null && rr(S, null, g, c, !0),
        z != null && (u.renderCache[z] = void 0),
        L & 256)
      ) {
        u.ctx.deactivate(c);
        return;
      }
      const X = L & 1 && N,
        ot = !fn(c);
      let tt;
      if ((ot && (tt = P && P.onVnodeBeforeUnmount) && jt(tt, u, c), L & 6))
        Re(c.component, g, b);
      else {
        if (L & 128) {
          c.suspense.unmount(g, b);
          return;
        }
        X && he(c, null, u, "beforeUnmount"),
          L & 64
            ? c.type.remove(c, u, g, te, b)
            : C && !C.hasOnce && (x !== Rt || (j > 0 && j & 64))
            ? Qt(C, u, g, !1, !0)
            : ((x === Rt && j & 384) || (!p && L & 16)) && Qt(I, u, g),
          b && yt(c);
      }
      ((ot && (tt = P && P.onVnodeUnmounted)) || X) &&
        Ct(() => {
          tt && jt(tt, u, c), X && he(c, null, u, "unmounted");
        }, g);
    },
    yt = (c) => {
      const { type: u, el: g, anchor: b, transition: p } = c;
      if (u === Rt) {
        On(g, b);
        return;
      }
      if (u === hn) {
        y(c);
        return;
      }
      const x = () => {
        s(g), p && !p.persisted && p.afterLeave && p.afterLeave();
      };
      if (c.shapeFlag & 1 && p && !p.persisted) {
        const { leave: P, delayLeave: S } = p,
          I = () => P(g, x);
        S ? S(c.el, x, I) : I();
      } else x();
    },
    On = (c, u) => {
      let g;
      for (; c !== u; ) (g = m(c)), s(c), (c = g);
      s(u);
    },
    Re = (c, u, g) => {
      const { bum: b, scope: p, update: x, subTree: P, um: S, m: I, a: C } = c;
      Zr(I),
        Zr(C),
        b && Ln(b),
        p.stop(),
        x && ((x.active = !1), Pt(P, c, u, g)),
        S && Ct(S, u),
        Ct(() => {
          c.isUnmounted = !0;
        }, u),
        u &&
          u.pendingBranch &&
          !u.isUnmounted &&
          c.asyncDep &&
          !c.asyncResolved &&
          c.suspenseId === u.pendingId &&
          (u.deps--, u.deps === 0 && u.resolve());
    },
    Qt = (c, u, g, b = !1, p = !1, x = 0) => {
      for (let P = x; P < c.length; P++) Pt(c[P], u, g, b, p);
    },
    ue = (c) => {
      if (c.shapeFlag & 6) return ue(c.component.subTree);
      if (c.shapeFlag & 128) return c.suspense.next();
      const u = m(c.anchor || c.el),
        g = u && u[al];
      return g ? m(g) : u;
    };
  let Fe = !1;
  const ke = (c, u, g) => {
      c == null
        ? u._vnode && Pt(u._vnode, null, null, !0)
        : O(u._vnode || null, c, u, null, null, null, g),
        (u._vnode = c),
        Fe || ((Fe = !0), zr(), Xs(), (Fe = !1));
    },
    te = {
      p: O,
      um: Pt,
      m: ht,
      r: yt,
      mt: Q,
      mc: k,
      pc: q,
      pbc: J,
      n: ue,
      o: t,
    };
  let $, H;
  return (
    e && ([$, H] = e(te)), { render: ke, hydrate: $, createApp: tl(ke, $) }
  );
}
function Nn({ type: t, props: e }, n) {
  return (n === "svg" && t === "foreignObject") ||
    (n === "mathml" &&
      t === "annotation-xml" &&
      e &&
      e.encoding &&
      e.encoding.includes("html"))
    ? void 0
    : n;
}
function de({ effect: t, update: e }, n) {
  t.allowRecurse = e.allowRecurse = n;
}
function hl(t, e) {
  return (!t || (t && !t.pendingBranch)) && e && !e.persisted;
}
function gi(t, e, n = !1) {
  const r = t.children,
    s = e.children;
  if (K(r) && K(s))
    for (let i = 0; i < r.length; i++) {
      const o = r[i];
      let l = s[i];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = s[i] = se(s[i])), (l.el = o.el)),
        !n && l.patchFlag !== -2 && gi(o, l)),
        l.type === Pn && (l.el = o.el);
    }
}
function dl(t) {
  const e = t.slice(),
    n = [0];
  let r, s, i, o, l;
  const a = t.length;
  for (r = 0; r < a; r++) {
    const f = t[r];
    if (f !== 0) {
      if (((s = n[n.length - 1]), t[s] < f)) {
        (e[r] = s), n.push(r);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        (l = (i + o) >> 1), t[n[l]] < f ? (i = l + 1) : (o = l);
      f < t[n[i]] && (i > 0 && (e[r] = n[i - 1]), (n[i] = r));
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) (n[i] = o), (o = e[o]);
  return n;
}
function pi(t) {
  const e = t.subTree.component;
  if (e) return e.asyncDep && !e.asyncResolved ? e : pi(e);
}
function Zr(t) {
  if (t) for (let e = 0; e < t.length; e++) t[e].active = !1;
}
const gl = Symbol.for("v-scx"),
  pl = () => un(gl),
  sn = {};
function $n(t, e, n) {
  return mi(t, e, n);
}
function mi(
  t,
  e,
  { immediate: n, deep: r, flush: s, once: i, onTrack: o, onTrigger: l } = at
) {
  if (e && i) {
    const _ = e;
    e = (...B) => {
      _(...B), M();
    };
  }
  const a = vt,
    f = (_) => (r === !0 ? _ : me(_, r === !1 ? 1 : void 0));
  let h,
    d = !1,
    m = !1;
  if (
    (Bt(t)
      ? ((h = () => t.value), (d = qe(t)))
      : Ge(t)
      ? ((h = () => f(t)), (d = !0))
      : K(t)
      ? ((m = !0),
        (d = t.some((_) => Ge(_) || qe(_))),
        (h = () =>
          t.map((_) => {
            if (Bt(_)) return _.value;
            if (Ge(_)) return f(_);
            if (G(_)) return le(_, a, 2);
          })))
      : G(t)
      ? e
        ? (h = () => le(t, a, 2))
        : (h = () => (A && A(), kt(t, a, 3, [R])))
      : (h = It),
    e && r)
  ) {
    const _ = h;
    h = () => me(_());
  }
  let A,
    R = (_) => {
      A = T.onStop = () => {
        le(_, a, 4), (A = T.onStop = void 0);
      };
    },
    O;
  if (Tn)
    if (
      ((R = It),
      e ? n && kt(e, a, 3, [h(), m ? [] : void 0, R]) : h(),
      s === "sync")
    ) {
      const _ = pl();
      O = _.__watcherHandles || (_.__watcherHandles = []);
    } else return It;
  let W = m ? new Array(t.length).fill(sn) : sn;
  const w = () => {
    if (!(!T.active || !T.dirty))
      if (e) {
        const _ = T.run();
        (r || d || (m ? _.some((B, k) => xe(B, W[k])) : xe(_, W))) &&
          (A && A(),
          kt(e, a, 3, [_, W === sn ? void 0 : m && W[0] === sn ? [] : W, R]),
          (W = _));
      } else T.run();
  };
  w.allowRecurse = !!e;
  let E;
  s === "sync"
    ? (E = w)
    : s === "post"
    ? (E = () => Ct(w, a && a.suspense))
    : ((w.pre = !0), a && (w.id = a.uid), (E = () => Er(w)));
  const T = new gr(h, It, E),
    y = Zi(),
    M = () => {
      T.stop(), y && fr(y.effects, T);
    };
  return (
    e
      ? n
        ? w()
        : (W = T.run())
      : s === "post"
      ? Ct(T.run.bind(T), a && a.suspense)
      : T.run(),
    O && O.push(M),
    M
  );
}
function ml(t, e, n) {
  const r = this.proxy,
    s = dt(t) ? (t.includes(".") ? bi(r, t) : () => r[t]) : t.bind(r, r);
  let i;
  G(e) ? (i = e) : ((i = e.handler), (n = e));
  const o = Ye(this),
    l = mi(s, i.bind(r), n);
  return o(), l;
}
function bi(t, e) {
  const n = e.split(".");
  return () => {
    let r = t;
    for (let s = 0; s < n.length && r; s++) r = r[n[s]];
    return r;
  };
}
function me(t, e = 1 / 0, n) {
  if (e <= 0 || !ct(t) || t.__v_skip || ((n = n || new Set()), n.has(t)))
    return t;
  if ((n.add(t), e--, Bt(t))) me(t.value, e, n);
  else if (K(t)) for (let r = 0; r < t.length; r++) me(t[r], e, n);
  else if (Cs(t) || Ie(t))
    t.forEach((r) => {
      me(r, e, n);
    });
  else if (Ps(t)) {
    for (const r in t) me(t[r], e, n);
    for (const r of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, r) && me(t[r], e, n);
  }
  return t;
}
const bl = (t, e) =>
  e === "modelValue" || e === "model-value"
    ? t.modelModifiers
    : t[`${e}Modifiers`] || t[`${Nt(e)}Modifiers`] || t[`${Ae(e)}Modifiers`];
function vl(t, e, ...n) {
  if (t.isUnmounted) return;
  const r = t.vnode.props || at;
  let s = n;
  const i = e.startsWith("update:"),
    o = i && bl(r, e.slice(7));
  o &&
    (o.trim && (s = n.map((h) => (dt(h) ? h.trim() : h))),
    o.number && (s = n.map(Ui)));
  let l,
    a = r[(l = Dn(e))] || r[(l = Dn(Nt(e)))];
  !a && i && (a = r[(l = Dn(Ae(e)))]), a && kt(a, t, 6, s);
  const f = r[l + "Once"];
  if (f) {
    if (!t.emitted) t.emitted = {};
    else if (t.emitted[l]) return;
    (t.emitted[l] = !0), kt(f, t, 6, s);
  }
}
function vi(t, e, n = !1) {
  const r = e.emitsCache,
    s = r.get(t);
  if (s !== void 0) return s;
  const i = t.emits;
  let o = {},
    l = !1;
  if (!G(t)) {
    const a = (f) => {
      const h = vi(f, e, !0);
      h && ((l = !0), xt(o, h));
    };
    !n && e.mixins.length && e.mixins.forEach(a),
      t.extends && a(t.extends),
      t.mixins && t.mixins.forEach(a);
  }
  return !i && !l
    ? (ct(t) && r.set(t, null), null)
    : (K(i) ? i.forEach((a) => (o[a] = null)) : xt(o, i),
      ct(t) && r.set(t, o),
      o);
}
function An(t, e) {
  return !t || !vn(e)
    ? !1
    : ((e = e.slice(2).replace(/Once$/, "")),
      Z(t, e[0].toLowerCase() + e.slice(1)) || Z(t, Ae(e)) || Z(t, e));
}
function jn(t) {
  const {
      type: e,
      vnode: n,
      proxy: r,
      withProxy: s,
      propsOptions: [i],
      slots: o,
      attrs: l,
      emit: a,
      render: f,
      renderCache: h,
      props: d,
      data: m,
      setupState: A,
      ctx: R,
      inheritAttrs: O,
    } = t,
    W = pn(t);
  let w, E;
  try {
    if (n.shapeFlag & 4) {
      const y = s || r,
        M = y;
      (w = Ut(f.call(M, y, h, d, A, m, R))), (E = l);
    } else {
      const y = e;
      (w = Ut(
        y.length > 1 ? y(d, { attrs: l, slots: o, emit: a }) : y(d, null)
      )),
        (E = e.props ? l : yl(l));
    }
  } catch (y) {
    (We.length = 0), Cn(y, t, 1), (w = Gt(Ce));
  }
  let T = w;
  if (E && O !== !1) {
    const y = Object.keys(E),
      { shapeFlag: M } = T;
    y.length &&
      M & 7 &&
      (i && y.some(cr) && (E = _l(E, i)), (T = De(T, E, !1, !0)));
  }
  return (
    n.dirs &&
      ((T = De(T, null, !1, !0)),
      (T.dirs = T.dirs ? T.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (T.transition = n.transition),
    (w = T),
    pn(W),
    w
  );
}
const yl = (t) => {
    let e;
    for (const n in t)
      (n === "class" || n === "style" || vn(n)) && ((e || (e = {}))[n] = t[n]);
    return e;
  },
  _l = (t, e) => {
    const n = {};
    for (const r in t) (!cr(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
    return n;
  };
function wl(t, e, n) {
  const { props: r, children: s, component: i } = t,
    { props: o, children: l, patchFlag: a } = e,
    f = i.emitsOptions;
  if (e.dirs || e.transition) return !0;
  if (n && a >= 0) {
    if (a & 1024) return !0;
    if (a & 16) return r ? Yr(r, o, f) : !!o;
    if (a & 8) {
      const h = e.dynamicProps;
      for (let d = 0; d < h.length; d++) {
        const m = h[d];
        if (o[m] !== r[m] && !An(f, m)) return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable)
      ? !0
      : r === o
      ? !1
      : r
      ? o
        ? Yr(r, o, f)
        : !0
      : !!o;
  return !1;
}
function Yr(t, e, n) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length) return !0;
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (e[i] !== t[i] && !An(n, i)) return !0;
  }
  return !1;
}
function xl({ vnode: t, parent: e }, n) {
  for (; e; ) {
    const r = e.subTree;
    if ((r.suspense && r.suspense.activeBranch === t && (r.el = t.el), r === t))
      ((t = e.vnode).el = n), (e = e.parent);
    else break;
  }
}
const Cl = (t) => t.__isSuspense;
function El(t, e) {
  e && e.pendingBranch
    ? K(t)
      ? e.effects.push(...t)
      : e.effects.push(t)
    : So(t);
}
const Rt = Symbol.for("v-fgt"),
  Pn = Symbol.for("v-txt"),
  Ce = Symbol.for("v-cmt"),
  hn = Symbol.for("v-stc"),
  We = [];
let Mt = null;
function be(t = !1) {
  We.push((Mt = t ? null : []));
}
function Al() {
  We.pop(), (Mt = We[We.length - 1] || null);
}
let Ze = 1;
function Qr(t) {
  (Ze += t), t < 0 && Mt && (Mt.hasOnce = !0);
}
function yi(t) {
  return (
    (t.dynamicChildren = Ze > 0 ? Mt || Se : null),
    Al(),
    Ze > 0 && Mt && Mt.push(t),
    t
  );
}
function Ue(t, e, n, r, s, i) {
  return yi(ut(t, e, n, r, s, i, !0));
}
function _i(t, e, n, r, s) {
  return yi(Gt(t, e, n, r, s, !0));
}
function Pl(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function $e(t, e) {
  return t.type === e.type && t.key === e.key;
}
const wi = ({ key: t }) => t ?? null,
  dn = ({ ref: t, ref_key: e, ref_for: n }) => (
    typeof t == "number" && (t = "" + t),
    t != null
      ? dt(t) || Bt(t) || G(t)
        ? { i: Ft, r: t, k: e, f: !!n }
        : t
      : null
  );
function ut(
  t,
  e = null,
  n = null,
  r = 0,
  s = null,
  i = t === Rt ? 0 : 1,
  o = !1,
  l = !1
) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && wi(e),
    ref: e && dn(e),
    scopeId: Zs,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Ft,
  };
  return (
    l
      ? (Tr(a, n), i & 128 && t.normalize(a))
      : n && (a.shapeFlag |= dt(n) ? 8 : 16),
    Ze > 0 &&
      !o &&
      Mt &&
      (a.patchFlag > 0 || i & 6) &&
      a.patchFlag !== 32 &&
      Mt.push(a),
    a
  );
}
const Gt = Tl;
function Tl(t, e = null, n = null, r = 0, s = null, i = !1) {
  if (((!t || t === zo) && (t = Ce), Pl(t))) {
    const l = De(t, e, !0);
    return (
      n && Tr(l, n),
      Ze > 0 &&
        !i &&
        Mt &&
        (l.shapeFlag & 6 ? (Mt[Mt.indexOf(t)] = l) : Mt.push(l)),
      (l.patchFlag = -2),
      l
    );
  }
  if ((jl(t) && (t = t.__vccOpts), e)) {
    e = Sl(e);
    let { class: l, style: a } = e;
    l && !dt(l) && (e.class = dr(l)),
      ct(a) && (zs(a) && !K(a) && (a = xt({}, a)), (e.style = hr(a)));
  }
  const o = dt(t) ? 1 : Cl(t) ? 128 : cl(t) ? 64 : ct(t) ? 4 : G(t) ? 2 : 0;
  return ut(t, e, n, r, s, o, i, !0);
}
function Sl(t) {
  return t ? (zs(t) || li(t) ? xt({}, t) : t) : null;
}
function De(t, e, n = !1, r = !1) {
  const { props: s, ref: i, patchFlag: o, children: l, transition: a } = t,
    f = e ? Bl(s || {}, e) : s,
    h = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: t.type,
      props: f,
      key: f && wi(f),
      ref:
        e && e.ref
          ? n && i
            ? K(i)
              ? i.concat(dn(e))
              : [i, dn(e)]
            : dn(e)
          : i,
      scopeId: t.scopeId,
      slotScopeIds: t.slotScopeIds,
      children: l,
      target: t.target,
      targetStart: t.targetStart,
      targetAnchor: t.targetAnchor,
      staticCount: t.staticCount,
      shapeFlag: t.shapeFlag,
      patchFlag: e && t.type !== Rt ? (o === -1 ? 16 : o | 16) : o,
      dynamicProps: t.dynamicProps,
      dynamicChildren: t.dynamicChildren,
      appContext: t.appContext,
      dirs: t.dirs,
      transition: a,
      component: t.component,
      suspense: t.suspense,
      ssContent: t.ssContent && De(t.ssContent),
      ssFallback: t.ssFallback && De(t.ssFallback),
      el: t.el,
      anchor: t.anchor,
      ctx: t.ctx,
      ce: t.ce,
    };
  return a && r && Ys(h, a.clone(h)), h;
}
function Il(t = " ", e = 0) {
  return Gt(Pn, null, t, e);
}
function Ml(t, e) {
  const n = Gt(hn, null, t);
  return (n.staticCount = e), n;
}
function sr(t = "", e = !1) {
  return e ? (be(), _i(Ce, null, t)) : Gt(Ce, null, t);
}
function Ut(t) {
  return t == null || typeof t == "boolean"
    ? Gt(Ce)
    : K(t)
    ? Gt(Rt, null, t.slice())
    : typeof t == "object"
    ? se(t)
    : Gt(Pn, null, String(t));
}
function se(t) {
  return (t.el === null && t.patchFlag !== -1) || t.memo ? t : De(t);
}
function Tr(t, e) {
  let n = 0;
  const { shapeFlag: r } = t;
  if (e == null) e = null;
  else if (K(e)) n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const s = e.default;
      s && (s._c && (s._d = !1), Tr(t, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = e._;
      !s && !li(e)
        ? (e._ctx = Ft)
        : s === 3 &&
          Ft &&
          (Ft.slots._ === 1 ? (e._ = 1) : ((e._ = 2), (t.patchFlag |= 1024)));
    }
  else
    G(e)
      ? ((e = { default: e, _ctx: Ft }), (n = 32))
      : ((e = String(e)), r & 64 ? ((n = 16), (e = [Il(e)])) : (n = 8));
  (t.children = e), (t.shapeFlag |= n);
}
function Bl(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const s in r)
      if (s === "class")
        e.class !== r.class && (e.class = dr([e.class, r.class]));
      else if (s === "style") e.style = hr([e.style, r.style]);
      else if (vn(s)) {
        const i = e[s],
          o = r[s];
        o &&
          i !== o &&
          !(K(i) && i.includes(o)) &&
          (e[s] = i ? [].concat(i, o) : o);
      } else s !== "" && (e[s] = r[s]);
  }
  return e;
}
function jt(t, e, n, r = null) {
  kt(t, e, 7, [n, r]);
}
const Ol = si();
let Dl = 0;
function Ll(t, e, n) {
  const r = t.type,
    s = (e ? e.appContext : t.appContext) || Ol,
    i = {
      uid: Dl++,
      vnode: t,
      type: r,
      parent: e,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Xi(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: e ? e.provides : Object.create(s.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: ci(r, s),
      emitsOptions: vi(r, s),
      emit: null,
      emitted: null,
      propsDefaults: at,
      inheritAttrs: r.inheritAttrs,
      ctx: at,
      data: at,
      props: at,
      attrs: at,
      slots: at,
      refs: at,
      setupState: at,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (i.ctx = { _: i }),
    (i.root = e ? e.root : i),
    (i.emit = vl.bind(null, i)),
    t.ce && t.ce(i),
    i
  );
}
let vt = null,
  bn,
  ir;
{
  const t = Ss(),
    e = (n, r) => {
      let s;
      return (
        (s = t[n]) || (s = t[n] = []),
        s.push(r),
        (i) => {
          s.length > 1 ? s.forEach((o) => o(i)) : s[0](i);
        }
      );
    };
  (bn = e("__VUE_INSTANCE_SETTERS__", (n) => (vt = n))),
    (ir = e("__VUE_SSR_SETTERS__", (n) => (Tn = n)));
}
const Ye = (t) => {
    const e = vt;
    return (
      bn(t),
      t.scope.on(),
      () => {
        t.scope.off(), bn(e);
      }
    );
  },
  ts = () => {
    vt && vt.scope.off(), bn(null);
  };
function xi(t) {
  return t.vnode.shapeFlag & 4;
}
let Tn = !1;
function Rl(t, e = !1, n = !1) {
  e && ir(e);
  const { props: r, children: s } = t.vnode,
    i = xi(t);
  nl(t, r, i, e), ol(t, s, n);
  const o = i ? Fl(t, e) : void 0;
  return e && ir(!1), o;
}
function Fl(t, e) {
  const n = t.type;
  (t.accessCache = Object.create(null)), (t.proxy = new Proxy(t.ctx, Wo));
  const { setup: r } = n;
  if (r) {
    const s = (t.setupContext = r.length > 1 ? Nl(t) : null),
      i = Ye(t);
    ce();
    const o = le(r, t, 0, [t.props, s]);
    if ((fe(), i(), Es(o))) {
      if ((o.then(ts, ts), e))
        return o
          .then((l) => {
            es(t, l, e);
          })
          .catch((l) => {
            Cn(l, t, 0);
          });
      t.asyncDep = o;
    } else es(t, o, e);
  } else Ci(t, e);
}
function es(t, e, n) {
  G(e)
    ? t.type.__ssrInlineRender
      ? (t.ssrRender = e)
      : (t.render = e)
    : ct(e) && (t.setupState = Vs(e)),
    Ci(t, n);
}
let ns;
function Ci(t, e, n) {
  const r = t.type;
  if (!t.render) {
    if (!e && ns && !r.render) {
      const s = r.template || Ar(t).template;
      if (s) {
        const { isCustomElement: i, compilerOptions: o } = t.appContext.config,
          { delimiters: l, compilerOptions: a } = r,
          f = xt(xt({ isCustomElement: i, delimiters: l }, o), a);
        r.render = ns(s, f);
      }
    }
    t.render = r.render || It;
  }
  {
    const s = Ye(t);
    ce();
    try {
      qo(t);
    } finally {
      fe(), s();
    }
  }
}
const kl = {
  get(t, e) {
    return At(t, "get", ""), t[e];
  },
};
function Nl(t) {
  const e = (n) => {
    t.exposed = n || {};
  };
  return {
    attrs: new Proxy(t.attrs, kl),
    slots: t.slots,
    emit: t.emit,
    expose: e,
  };
}
function Sr(t) {
  return t.exposed
    ? t.exposeProxy ||
        (t.exposeProxy = new Proxy(Vs(yo(t.exposed)), {
          get(e, n) {
            if (n in e) return e[n];
            if (n in Ve) return Ve[n](t);
          },
          has(e, n) {
            return n in e || n in Ve;
          },
        }))
    : t.proxy;
}
function $l(t, e = !0) {
  return G(t) ? t.displayName || t.name : t.name || (e && t.__name);
}
function jl(t) {
  return G(t) && "__vccOpts" in t;
}
const Hl = (t, e) => _o(t, e, Tn),
  Ul = "3.4.38";
/**
 * @vue/runtime-dom v3.4.38
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const Kl = "http://www.w3.org/2000/svg",
  zl = "http://www.w3.org/1998/Math/MathML",
  Xt = typeof document < "u" ? document : null,
  rs = Xt && Xt.createElement("template"),
  Gl = {
    insert: (t, e, n) => {
      e.insertBefore(t, n || null);
    },
    remove: (t) => {
      const e = t.parentNode;
      e && e.removeChild(t);
    },
    createElement: (t, e, n, r) => {
      const s =
        e === "svg"
          ? Xt.createElementNS(Kl, t)
          : e === "mathml"
          ? Xt.createElementNS(zl, t)
          : n
          ? Xt.createElement(t, { is: n })
          : Xt.createElement(t);
      return (
        t === "select" &&
          r &&
          r.multiple != null &&
          s.setAttribute("multiple", r.multiple),
        s
      );
    },
    createText: (t) => Xt.createTextNode(t),
    createComment: (t) => Xt.createComment(t),
    setText: (t, e) => {
      t.nodeValue = e;
    },
    setElementText: (t, e) => {
      t.textContent = e;
    },
    parentNode: (t) => t.parentNode,
    nextSibling: (t) => t.nextSibling,
    querySelector: (t) => Xt.querySelector(t),
    setScopeId(t, e) {
      t.setAttribute(e, "");
    },
    insertStaticContent(t, e, n, r, s, i) {
      const o = n ? n.previousSibling : e.lastChild;
      if (s && (s === i || s.nextSibling))
        for (
          ;
          e.insertBefore(s.cloneNode(!0), n),
            !(s === i || !(s = s.nextSibling));

        );
      else {
        rs.innerHTML =
          r === "svg"
            ? `<svg>${t}</svg>`
            : r === "mathml"
            ? `<math>${t}</math>`
            : t;
        const l = rs.content;
        if (r === "svg" || r === "mathml") {
          const a = l.firstChild;
          for (; a.firstChild; ) l.appendChild(a.firstChild);
          l.removeChild(a);
        }
        e.insertBefore(l, n);
      }
      return [
        o ? o.nextSibling : e.firstChild,
        n ? n.previousSibling : e.lastChild,
      ];
    },
  },
  Vl = Symbol("_vtc");
function Wl(t, e, n) {
  const r = t[Vl];
  r && (e = (e ? [e, ...r] : [...r]).join(" ")),
    e == null
      ? t.removeAttribute("class")
      : n
      ? t.setAttribute("class", e)
      : (t.className = e);
}
const ss = Symbol("_vod"),
  ql = Symbol("_vsh"),
  Xl = Symbol(""),
  Jl = /(^|;)\s*display\s*:/;
function Zl(t, e, n) {
  const r = t.style,
    s = dt(n);
  let i = !1;
  if (n && !s) {
    if (e)
      if (dt(e))
        for (const o of e.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && gn(r, l, "");
        }
      else for (const o in e) n[o] == null && gn(r, o, "");
    for (const o in n) o === "display" && (i = !0), gn(r, o, n[o]);
  } else if (s) {
    if (e !== n) {
      const o = r[Xl];
      o && (n += ";" + o), (r.cssText = n), (i = Jl.test(n));
    }
  } else e && t.removeAttribute("style");
  ss in t && ((t[ss] = i ? r.display : ""), t[ql] && (r.display = "none"));
}
const is = /\s*!important$/;
function gn(t, e, n) {
  if (K(n)) n.forEach((r) => gn(t, e, r));
  else if ((n == null && (n = ""), e.startsWith("--"))) t.setProperty(e, n);
  else {
    const r = Yl(t, e);
    is.test(n)
      ? t.setProperty(Ae(r), n.replace(is, ""), "important")
      : (t[r] = n);
  }
}
const os = ["Webkit", "Moz", "ms"],
  Hn = {};
function Yl(t, e) {
  const n = Hn[e];
  if (n) return n;
  let r = Nt(e);
  if (r !== "filter" && r in t) return (Hn[e] = r);
  r = wn(r);
  for (let s = 0; s < os.length; s++) {
    const i = os[s] + r;
    if (i in t) return (Hn[e] = i);
  }
  return e;
}
const ls = "http://www.w3.org/1999/xlink";
function as(t, e, n, r, s, i = qi(e)) {
  r && e.startsWith("xlink:")
    ? n == null
      ? t.removeAttributeNS(ls, e.slice(6, e.length))
      : t.setAttributeNS(ls, e, n)
    : n == null || (i && !Is(n))
    ? t.removeAttribute(e)
    : t.setAttribute(e, i ? "" : ae(n) ? String(n) : n);
}
function Ql(t, e, n, r) {
  if (e === "innerHTML" || e === "textContent") {
    if (n == null) return;
    t[e] = n;
    return;
  }
  const s = t.tagName;
  if (e === "value" && s !== "PROGRESS" && !s.includes("-")) {
    const o = s === "OPTION" ? t.getAttribute("value") || "" : t.value,
      l = n == null ? "" : String(n);
    (o !== l || !("_value" in t)) && (t.value = l),
      n == null && t.removeAttribute(e),
      (t._value = n);
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const o = typeof t[e];
    o === "boolean"
      ? (n = Is(n))
      : n == null && o === "string"
      ? ((n = ""), (i = !0))
      : o === "number" && ((n = 0), (i = !0));
  }
  try {
    t[e] = n;
  } catch {}
  i && t.removeAttribute(e);
}
function ta(t, e, n, r) {
  t.addEventListener(e, n, r);
}
function ea(t, e, n, r) {
  t.removeEventListener(e, n, r);
}
const cs = Symbol("_vei");
function na(t, e, n, r, s = null) {
  const i = t[cs] || (t[cs] = {}),
    o = i[e];
  if (r && o) o.value = r;
  else {
    const [l, a] = ra(e);
    if (r) {
      const f = (i[e] = oa(r, s));
      ta(t, l, f, a);
    } else o && (ea(t, l, o, a), (i[e] = void 0));
  }
}
const fs = /(?:Once|Passive|Capture)$/;
function ra(t) {
  let e;
  if (fs.test(t)) {
    e = {};
    let r;
    for (; (r = t.match(fs)); )
      (t = t.slice(0, t.length - r[0].length)), (e[r[0].toLowerCase()] = !0);
  }
  return [t[2] === ":" ? t.slice(3) : Ae(t.slice(2)), e];
}
let Un = 0;
const sa = Promise.resolve(),
  ia = () => Un || (sa.then(() => (Un = 0)), (Un = Date.now()));
function oa(t, e) {
  const n = (r) => {
    if (!r._vts) r._vts = Date.now();
    else if (r._vts <= n.attached) return;
    kt(la(r, n.value), e, 5, [r]);
  };
  return (n.value = t), (n.attached = ia()), n;
}
function la(t, e) {
  if (K(e)) {
    const n = t.stopImmediatePropagation;
    return (
      (t.stopImmediatePropagation = () => {
        n.call(t), (t._stopped = !0);
      }),
      e.map((r) => (s) => !s._stopped && r && r(s))
    );
  } else return e;
}
const us = (t) =>
    t.charCodeAt(0) === 111 &&
    t.charCodeAt(1) === 110 &&
    t.charCodeAt(2) > 96 &&
    t.charCodeAt(2) < 123,
  aa = (t, e, n, r, s, i) => {
    const o = s === "svg";
    e === "class"
      ? Wl(t, r, o)
      : e === "style"
      ? Zl(t, n, r)
      : vn(e)
      ? cr(e) || na(t, e, n, r, i)
      : (
          e[0] === "."
            ? ((e = e.slice(1)), !0)
            : e[0] === "^"
            ? ((e = e.slice(1)), !1)
            : ca(t, e, r, o)
        )
      ? (Ql(t, e, r),
        !t.tagName.includes("-") &&
          (e === "value" || e === "checked" || e === "selected") &&
          as(t, e, r, o, i, e !== "value"))
      : (e === "true-value"
          ? (t._trueValue = r)
          : e === "false-value" && (t._falseValue = r),
        as(t, e, r, o));
  };
function ca(t, e, n, r) {
  if (r)
    return !!(
      e === "innerHTML" ||
      e === "textContent" ||
      (e in t && us(e) && G(n))
    );
  if (
    e === "spellcheck" ||
    e === "draggable" ||
    e === "translate" ||
    e === "form" ||
    (e === "list" && t.tagName === "INPUT") ||
    (e === "type" && t.tagName === "TEXTAREA")
  )
    return !1;
  if (e === "width" || e === "height") {
    const s = t.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return us(e) && dt(n) ? !1 : e in t;
}
const fa = xt({ patchProp: aa }, Gl);
let hs;
function ua() {
  return hs || (hs = fl(fa));
}
const ha = (...t) => {
  const e = ua().createApp(...t),
    { mount: n } = e;
  return (
    (e.mount = (r) => {
      const s = ga(r);
      if (!s) return;
      const i = e._component;
      !G(i) && !i.render && !i.template && (i.template = s.innerHTML),
        (s.innerHTML = "");
      const o = n(s, !1, da(s));
      return (
        s instanceof Element &&
          (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")),
        o
      );
    }),
    e
  );
};
function da(t) {
  if (t instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function ga(t) {
  return dt(t) ? document.querySelector(t) : t;
}
function Kn(t) {
  return t === "" ? t : t === "true" || t == "1";
}
function pa(t, e) {
  return new Promise((n, r) => {
    var s = new XMLHttpRequest();
    (s.responseType = "blob"),
      (s.onload = function () {
        var i = new FileReader();
        (i.onloadend = function () {
          n(i.result);
        }),
          i.readAsArrayBuffer(s.response);
      }),
      s.open("GET", t),
      s.send();
  });
}
function Ht(t) {
  if (typeof t != "string")
    throw new TypeError("Path must be a string. Received " + JSON.stringify(t));
}
function ds(t, e) {
  for (var n = "", r = 0, s = -1, i = 0, o, l = 0; l <= t.length; ++l) {
    if (l < t.length) o = t.charCodeAt(l);
    else {
      if (o === 47) break;
      o = 47;
    }
    if (o === 47) {
      if (!(s === l - 1 || i === 1))
        if (s !== l - 1 && i === 2) {
          if (
            n.length < 2 ||
            r !== 2 ||
            n.charCodeAt(n.length - 1) !== 46 ||
            n.charCodeAt(n.length - 2) !== 46
          ) {
            if (n.length > 2) {
              var a = n.lastIndexOf("/");
              if (a !== n.length - 1) {
                a === -1
                  ? ((n = ""), (r = 0))
                  : ((n = n.slice(0, a)),
                    (r = n.length - 1 - n.lastIndexOf("/"))),
                  (s = l),
                  (i = 0);
                continue;
              }
            } else if (n.length === 2 || n.length === 1) {
              (n = ""), (r = 0), (s = l), (i = 0);
              continue;
            }
          }
          e && (n.length > 0 ? (n += "/..") : (n = ".."), (r = 2));
        } else
          n.length > 0
            ? (n += "/" + t.slice(s + 1, l))
            : (n = t.slice(s + 1, l)),
            (r = l - s - 1);
      (s = l), (i = 0);
    } else o === 46 && i !== -1 ? ++i : (i = -1);
  }
  return n;
}
function ma(t, e) {
  var n = e.dir || e.root,
    r = e.base || (e.name || "") + (e.ext || "");
  return n ? (n === e.root ? n + r : n + t + r) : r;
}
var we = {
  resolve: function () {
    for (var e = "", n = !1, r, s = arguments.length - 1; s >= -1 && !n; s--) {
      var i;
      s >= 0
        ? (i = arguments[s])
        : (r === void 0 && (r = process.cwd()), (i = r)),
        Ht(i),
        i.length !== 0 && ((e = i + "/" + e), (n = i.charCodeAt(0) === 47));
    }
    return (
      (e = ds(e, !n)),
      n ? (e.length > 0 ? "/" + e : "/") : e.length > 0 ? e : "."
    );
  },
  normalize: function (e) {
    if ((Ht(e), e.length === 0)) return ".";
    var n = e.charCodeAt(0) === 47,
      r = e.charCodeAt(e.length - 1) === 47;
    return (
      (e = ds(e, !n)),
      e.length === 0 && !n && (e = "."),
      e.length > 0 && r && (e += "/"),
      n ? "/" + e : e
    );
  },
  isAbsolute: function (e) {
    return Ht(e), e.length > 0 && e.charCodeAt(0) === 47;
  },
  join: function () {
    if (arguments.length === 0) return ".";
    for (var e, n = 0; n < arguments.length; ++n) {
      var r = arguments[n];
      Ht(r), r.length > 0 && (e === void 0 ? (e = r) : (e += "/" + r));
    }
    return e === void 0 ? "." : we.normalize(e);
  },
  relative: function (e, n) {
    if (
      (Ht(e),
      Ht(n),
      e === n || ((e = we.resolve(e)), (n = we.resolve(n)), e === n))
    )
      return "";
    for (var r = 1; r < e.length && e.charCodeAt(r) === 47; ++r);
    for (
      var s = e.length, i = s - r, o = 1;
      o < n.length && n.charCodeAt(o) === 47;
      ++o
    );
    for (
      var l = n.length, a = l - o, f = i < a ? i : a, h = -1, d = 0;
      d <= f;
      ++d
    ) {
      if (d === f) {
        if (a > f) {
          if (n.charCodeAt(o + d) === 47) return n.slice(o + d + 1);
          if (d === 0) return n.slice(o + d);
        } else
          i > f && (e.charCodeAt(r + d) === 47 ? (h = d) : d === 0 && (h = 0));
        break;
      }
      var m = e.charCodeAt(r + d),
        A = n.charCodeAt(o + d);
      if (m !== A) break;
      m === 47 && (h = d);
    }
    var R = "";
    for (d = r + h + 1; d <= s; ++d)
      (d === s || e.charCodeAt(d) === 47) &&
        (R.length === 0 ? (R += "..") : (R += "/.."));
    return R.length > 0
      ? R + n.slice(o + h)
      : ((o += h), n.charCodeAt(o) === 47 && ++o, n.slice(o));
  },
  _makeLong: function (e) {
    return e;
  },
  dirname: function (e) {
    if ((Ht(e), e.length === 0)) return ".";
    for (
      var n = e.charCodeAt(0), r = n === 47, s = -1, i = !0, o = e.length - 1;
      o >= 1;
      --o
    )
      if (((n = e.charCodeAt(o)), n === 47)) {
        if (!i) {
          s = o;
          break;
        }
      } else i = !1;
    return s === -1 ? (r ? "/" : ".") : r && s === 1 ? "//" : e.slice(0, s);
  },
  basename: function (e, n) {
    if (n !== void 0 && typeof n != "string")
      throw new TypeError('"ext" argument must be a string');
    Ht(e);
    var r = 0,
      s = -1,
      i = !0,
      o;
    if (n !== void 0 && n.length > 0 && n.length <= e.length) {
      if (n.length === e.length && n === e) return "";
      var l = n.length - 1,
        a = -1;
      for (o = e.length - 1; o >= 0; --o) {
        var f = e.charCodeAt(o);
        if (f === 47) {
          if (!i) {
            r = o + 1;
            break;
          }
        } else
          a === -1 && ((i = !1), (a = o + 1)),
            l >= 0 &&
              (f === n.charCodeAt(l)
                ? --l === -1 && (s = o)
                : ((l = -1), (s = a)));
      }
      return r === s ? (s = a) : s === -1 && (s = e.length), e.slice(r, s);
    } else {
      for (o = e.length - 1; o >= 0; --o)
        if (e.charCodeAt(o) === 47) {
          if (!i) {
            r = o + 1;
            break;
          }
        } else s === -1 && ((i = !1), (s = o + 1));
      return s === -1 ? "" : e.slice(r, s);
    }
  },
  extname: function (e) {
    Ht(e);
    for (
      var n = -1, r = 0, s = -1, i = !0, o = 0, l = e.length - 1;
      l >= 0;
      --l
    ) {
      var a = e.charCodeAt(l);
      if (a === 47) {
        if (!i) {
          r = l + 1;
          break;
        }
        continue;
      }
      s === -1 && ((i = !1), (s = l + 1)),
        a === 46
          ? n === -1
            ? (n = l)
            : o !== 1 && (o = 1)
          : n !== -1 && (o = -1);
    }
    return n === -1 ||
      s === -1 ||
      o === 0 ||
      (o === 1 && n === s - 1 && n === r + 1)
      ? ""
      : e.slice(n, s);
  },
  format: function (e) {
    if (e === null || typeof e != "object")
      throw new TypeError(
        'The "pathObject" argument must be of type Object. Received type ' +
          typeof e
      );
    return ma("/", e);
  },
  parse: function (e) {
    Ht(e);
    var n = { root: "", dir: "", base: "", ext: "", name: "" };
    if (e.length === 0) return n;
    var r = e.charCodeAt(0),
      s = r === 47,
      i;
    s ? ((n.root = "/"), (i = 1)) : (i = 0);
    for (
      var o = -1, l = 0, a = -1, f = !0, h = e.length - 1, d = 0;
      h >= i;
      --h
    ) {
      if (((r = e.charCodeAt(h)), r === 47)) {
        if (!f) {
          l = h + 1;
          break;
        }
        continue;
      }
      a === -1 && ((f = !1), (a = h + 1)),
        r === 46
          ? o === -1
            ? (o = h)
            : d !== 1 && (d = 1)
          : o !== -1 && (d = -1);
    }
    return (
      o === -1 || a === -1 || d === 0 || (d === 1 && o === a - 1 && o === l + 1)
        ? a !== -1 &&
          (l === 0 && s
            ? (n.base = n.name = e.slice(1, a))
            : (n.base = n.name = e.slice(l, a)))
        : (l === 0 && s
            ? ((n.name = e.slice(1, o)), (n.base = e.slice(1, a)))
            : ((n.name = e.slice(l, o)), (n.base = e.slice(l, a))),
          (n.ext = e.slice(o, a))),
      l > 0 ? (n.dir = e.slice(0, l - 1)) : s && (n.dir = "/"),
      n
    );
  },
  sep: "/",
  delimiter: ":",
  win32: null,
  posix: null,
};
we.posix = we;
const ba = we.extname,
  Ei = we.basename;
class va {
  constructor() {
    let e = (() => typeof global > "u")(),
      n = "image/png",
      r = "image/jpeg",
      s = "image/jpeg",
      i = "image/webp",
      o = "application/pdf",
      l = "image/svg+xml";
    Object.assign(this, {
      toMime: this.toMime.bind(this),
      fromMime: this.fromMime.bind(this),
      expected: e ? '"png", "jpg", or "webp"' : '"png", "jpg", "pdf", or "svg"',
      formats: e
        ? { png: n, jpg: r, jpeg: s, webp: i }
        : { png: n, jpg: r, jpeg: s, pdf: o, svg: l },
      mimes: e
        ? { [n]: "png", [r]: "jpg", [i]: "webp" }
        : { [n]: "png", [r]: "jpg", [o]: "pdf", [l]: "svg" },
    });
  }
  toMime(e) {
    return this.formats[(e || "").replace(/^\./, "").toLowerCase()];
  }
  fromMime(e) {
    return this.mimes[e];
  }
}
function ya(
  t,
  {
    filename: e = "",
    extension: n = "",
    format: O,
    page: s,
    quality: i,
    matte: o,
    density: l,
    outline: a,
    archive: A,
  } = {}
) {
  var { fromMime: h, toMime: d, expected: m } = new va(),
    A = A || "canvas",
    R = O || n.replace(/@\d+x$/i, "") || ba(e),
    O = h(d(R) || R),
    W = d(O),
    w = t.length;
  if (!R)
    throw new Error(
      "Cannot determine image format (use a filename extension or 'format' argument)"
    );
  if (!O) throw new Error(`Unsupported file format "${R}" (expected ${m})`);
  if (!w)
    throw new RangeError(
      "Canvas has no associated contexts (try calling getContext or newPage first)"
    );
  let E,
    T,
    y = e.replace(
      /{(\d*)}/g,
      (_, B) => (
        (T = !0),
        (B = parseInt(B, 10)),
        (E = isFinite(B) ? B : isFinite(E) ? E : -1),
        "{}"
      )
    ),
    M = s > 0 ? s - 1 : s < 0 ? w + s : void 0;
  if ((isFinite(M) && M < 0) || M >= w)
    throw new RangeError(
      w == 1
        ? `Canvas only has a ‘page 1’ (${M} is out of bounds)`
        : `Canvas has pages 1–${w} (${M} is out of bounds)`
    );
  if (
    ((t = isFinite(M) ? [t[M]] : T || O == "pdf" ? t : t.slice(-1)),
    i === void 0)
  )
    i = 0.92;
  else if (typeof i != "number" || !isFinite(i) || i < 0 || i > 1)
    throw new TypeError(
      "The quality option must be an number in the 0.0–1.0 range"
    );
  if (l === void 0) {
    let _ = (n || Ei(e, R)).match(/@(\d+)x$/i);
    l = _ ? parseInt(_[1], 10) : 1;
  } else if (typeof l != "number" || !Number.isInteger(l) || l < 1)
    throw new TypeError("The density option must be a non-negative integer");
  return (
    a === void 0 ? (a = !0) : O == "svg" && (a = !!a),
    {
      filename: e,
      pattern: y,
      format: O,
      mime: W,
      pages: t,
      padding: E,
      quality: i,
      matte: o,
      density: l,
      outline: a,
      archive: A,
    }
  );
}
class Sn {
  static for(e) {
    return new Sn().append(e).get();
  }
  constructor() {
    this.crc = -1;
  }
  get() {
    return ~this.crc;
  }
  append(e) {
    for (
      var n = this.crc | 0, r = this.table, s = 0, i = e.length | 0;
      s < i;
      s++
    )
      n = (n >>> 8) ^ r[(n ^ e[s]) & 255];
    return (this.crc = n), this;
  }
}
Sn.prototype.table = (() => {
  var t,
    e,
    n,
    r = [];
  for (t = 0; t < 256; t++) {
    for (n = t, e = 0; e < 8; e++) n = n & 1 ? (n >>> 1) ^ 3988292384 : n >>> 1;
    r[t] = n;
  }
  return r;
})();
function zn(t) {
  let e = new Uint8Array(t),
    n = new DataView(e.buffer),
    r = {
      array: e,
      view: n,
      size: t,
      set8(s, i) {
        return n.setUint8(s, i), r;
      },
      set16(s, i) {
        return n.setUint16(s, i, !0), r;
      },
      set32(s, i) {
        return n.setUint32(s, i, !0), r;
      },
      bytes(s, i) {
        return e.set(i, s), r;
      },
    };
  return r;
}
class In {
  constructor(e) {
    let n = new Date();
    Object.assign(this, {
      directory: e,
      offset: 0,
      files: [],
      time:
        (((n.getHours() << 6) | n.getMinutes()) << 5) | (n.getSeconds() / 2),
      date:
        ((((n.getFullYear() - 1980) << 4) | (n.getMonth() + 1)) << 5) |
        n.getDate(),
    }),
      this.add(e);
  }
  async add(e, n) {
    let r = !n,
      s = In.encoder.encode(`${this.directory}/${r ? "" : e}`),
      i = new Uint8Array(r ? 0 : await n.arrayBuffer()),
      o = 30 + s.length,
      l = o + i.length,
      a = 16,
      { offset: f } = this,
      h = zn(26)
        .set32(0, 134742036)
        .set16(6, this.time)
        .set16(8, this.date)
        .set32(10, Sn.for(i))
        .set32(14, i.length)
        .set32(18, i.length)
        .set16(22, s.length);
    f += o;
    let d = zn(o + i.length + a)
      .set32(0, 67324752)
      .bytes(4, h.array)
      .bytes(30, s)
      .bytes(o, i);
    (f += i.length),
      d.set32(l, 134695760).bytes(l + 4, h.array.slice(10, 22)),
      (f += a),
      this.files.push({ offset: f, folder: r, name: s, header: h, payload: d }),
      (this.offset = f);
  }
  toBuffer() {
    let e = this.files.reduce((d, { name: m }) => 46 + m.length + d, 0),
      n = zn(e + 22),
      r = 0;
    for (var { offset: s, name: i, header: o, folder: l } of this.files)
      n
        .set32(r, 33639248)
        .set16(r + 4, 20)
        .bytes(r + 6, o.array)
        .set8(r + 38, l ? 16 : 0)
        .set32(r + 42, s)
        .bytes(r + 46, i),
        (r += 46 + i.length);
    n.set32(r, 101010256)
      .set16(r + 8, this.files.length)
      .set16(r + 10, this.files.length)
      .set32(r + 12, e)
      .set32(r + 16, this.offset);
    let a = new Uint8Array(this.offset + n.size),
      f = 0;
    for (var { payload: h } of this.files) a.set(h.array, f), (f += h.size);
    return a.set(n.array, f), a;
  }
  get blob() {
    return new Blob([this.toBuffer()], { type: "application/zip" });
  }
}
In.encoder = new TextEncoder();
const Ir = (t, e, n, r) => {
    if (r) {
      let { width: s, height: i } = t,
        o = Object.assign(document.createElement("canvas"), {
          width: s,
          height: i,
        }),
        l = o.getContext("2d");
      (l.fillStyle = r), l.fillRect(0, 0, s, i), l.drawImage(t, 0, 0), (t = o);
    }
    return new Promise((s, i) => t.toBlob(s, e, n));
  },
  _a = (...t) => Ir(...t).then((e) => e.arrayBuffer()),
  wa = async (t, e, n, r, s) => {
    Ai(s, await Ir(t, e, n, r));
  },
  xa = async (t, e, n, r, s, i, o) => {
    let l = (h) => i.replace("{}", String(h + 1).padStart(o, "0")),
      a = Ei(s, ".zip") || "archive",
      f = new In(a);
    await Promise.all(
      t.map(async (h, d) => {
        let m = l(d);
        await f.add(m, await Ir(h, e, n, r));
      })
    ),
      Ai(`${a}.zip`, f.blob);
  },
  Ai = (t, e) => {
    const n = window.URL.createObjectURL(e),
      r = document.createElement("a");
    (r.style.display = "none"),
      (r.href = n),
      r.setAttribute("download", t),
      typeof r.download > "u" && r.setAttribute("target", "_blank"),
      document.body.appendChild(r),
      r.click(),
      document.body.removeChild(r),
      setTimeout(() => window.URL.revokeObjectURL(n), 100);
  },
  Ca = (t, e, n) =>
    t.map((r) => {
      if (e == 1 && !n) return r.canvas;
      let s = document.createElement("canvas"),
        i = s.getContext("2d"),
        o = r.canvas ? r.canvas : r;
      return (
        (s.width = o.width * e),
        (s.height = o.height * e),
        n && ((i.fillStyle = n), i.fillRect(0, 0, s.width, s.height)),
        i.scale(e, e),
        i.drawImage(o, 0, 0),
        s
      );
    }),
  Ea = {
    asBuffer: _a,
    asDownload: wa,
    asZipDownload: xa,
    atScale: Ca,
    options: ya,
  },
  {
    asBuffer: Gn,
    asDownload: Aa,
    asZipDownload: Pa,
    atScale: Vn,
    options: Wn,
  } = Ea,
  gs = Symbol.for("toDataURL"),
  Ta = (t) =>
    new Promise((e, n) =>
      Object.assign(new Pi(), {
        crossOrigin: "Anonymous",
        onload: e,
        onerror: n,
        src: t,
      })
    );
let Sa = class {
  constructor(e, n) {
    let r = document.createElement("canvas"),
      s = [];
    Object.defineProperty(r, "async", {
      value: !0,
      writable: !1,
      enumerable: !0,
    });
    for (var [i, o] of Object.entries({
      png: () => Gn(r, "image/png"),
      jpg: () => Gn(r, "image/jpeg"),
      pages: () => s.concat(r).map((l) => l.getContext("2d")),
    }))
      Object.defineProperty(r, i, { get: o });
    return Object.assign(r, {
      width: e,
      height: n,
      newPage(...l) {
        var { width: f, height: h } = r,
          a = Object.assign(document.createElement("canvas"), {
            width: f,
            height: h,
          });
        a.getContext("2d").drawImage(r, 0, 0), s.push(a);
        var [f, h] = l.length ? l : [f, h];
        return Object.assign(r, { width: f, height: h }).getContext("2d");
      },
      saveAs(l, a) {
        a = typeof a == "number" ? { quality: a } : a;
        let f = Wn(this.pages, { filename: l, ...a }),
          {
            pattern: h,
            padding: d,
            mime: m,
            quality: A,
            matte: R,
            density: O,
            archive: W,
          } = f,
          w = Vn(f.pages, O);
        return d == null ? Aa(w[0], m, A, R, l) : Pa(w, m, A, R, W, h, d);
      },
      toBuffer(l = "png", a = {}) {
        a = typeof a == "number" ? { quality: a } : a;
        let f = Wn(this.pages, { extension: l, ...a }),
          { mime: h, quality: d, matte: m, pages: A, density: R } = f,
          O = Vn(A, R, m)[0];
        return Gn(O, h, d, m);
      },
      [gs]: r.toDataURL.bind(r),
      toDataURL(l = "png", a = {}) {
        a = typeof a == "number" ? { quality: a } : a;
        let f = Wn(this.pages, { extension: l, ...a }),
          { mime: h, quality: d, matte: m, pages: A, density: R } = f,
          O = Vn(A, R, m)[0],
          W = O[O === r ? gs : "toDataURL"](h, d);
        return Promise.resolve(W);
      },
    });
  }
};
const {
    CanvasRenderingContext2D: Ia,
    CanvasGradient: Ma,
    CanvasPattern: Ba,
    Image: Pi,
    ImageData: Oa,
    Path2D: Da,
    DOMMatrix: La,
    DOMRect: Ra,
    DOMPoint: Fa,
  } = window,
  ka = {
    Canvas: Sa,
    loadImage: Ta,
    CanvasRenderingContext2D: Ia,
    CanvasGradient: Ma,
    CanvasPattern: Ba,
    Image: Pi,
    ImageData: Oa,
    Path2D: Da,
    DOMMatrix: La,
    DOMRect: Ra,
    DOMPoint: Fa,
  },
  Ke = (t, e, n = {}, r = n) => {
    if (Array.isArray(e)) e.forEach((s) => Ke(t, s, n, r));
    else if (typeof e == "function") e(t, n, r, Ke);
    else {
      const s = Object.keys(e)[0];
      Array.isArray(e[s])
        ? ((r[s] = {}), Ke(t, e[s], n, r[s]))
        : (r[s] = e[s](t, n, r, Ke));
    }
    return n;
  },
  Ee = (t, e) => (n, r, s, i) => {
    e(n, r, s) && i(n, t, r, s);
  },
  Na = (t, e) => (n, r, s, i) => {
    const o = [];
    let l = n.pos;
    for (; e(n, r, s); ) {
      const a = {};
      if ((i(n, t, r, a), n.pos === l)) break;
      (l = n.pos), o.push(a);
    }
    return o;
  },
  $a = (t) => ({ data: t, pos: 0 }),
  Ot = () => (t) => t.data[t.pos++],
  Ti =
    (t = 0) =>
    (e) =>
      e.data[e.pos + t],
  Vt = (t) => (e) => e.data.subarray(e.pos, (e.pos += t)),
  Mn = (t) => (e) => e.data.subarray(e.pos, e.pos + t),
  or = (t) => (e) =>
    Array.from(Vt(t)(e))
      .map((n) => String.fromCharCode(n))
      .join(""),
  ve = (t) => (e) => {
    const n = Vt(2)(e);
    return t ? (n[1] << 8) + n[0] : (n[0] << 8) + n[1];
  },
  Si = (t, e) => (n, r, s) => {
    const i = typeof e == "function" ? e(n, r, s) : e,
      o = Vt(t),
      l = new Array(i);
    for (var a = 0; a < i; a++) l[a] = o(n);
    return l;
  },
  ja = (t, e, n) => {
    for (var r = 0, s = 0; s < n; s++) r += t[e + s] && 2 ** (n - s - 1);
    return r;
  },
  Mr = (t) => (e) => {
    const n = Ot()(e),
      r = new Array(8);
    for (var s = 0; s < 8; s++) r[7 - s] = !!(n & (1 << s));
    return Object.keys(t).reduce((i, o) => {
      const l = t[o];
      return (
        l.length ? (i[o] = ja(r, l.index, l.length)) : (i[o] = r[l.index]), i
      );
    }, {});
  };
var Bn = {
  blocks: (t) => {
    const n = [],
      r = t.data.length;
    for (var s = 0, i = Ot()(t); i !== 0 && i; i = Ot()(t)) {
      if (t.pos + i >= r) {
        const f = r - t.pos;
        n.push(Vt(f)(t)), (s += f);
        break;
      }
      n.push(Vt(i)(t)), (s += i);
    }
    const o = new Uint8Array(s);
    for (var l = 0, a = 0; a < n.length; a++)
      o.set(n[a], l), (l += n[a].length);
    return o;
  },
};
const Ha = Ee(
    {
      gce: [
        { codes: Vt(2) },
        { byteSize: Ot() },
        {
          extras: Mr({
            future: { index: 0, length: 3 },
            disposal: { index: 3, length: 3 },
            userInput: { index: 6 },
            transparentColorGiven: { index: 7 },
          }),
        },
        { delay: ve(!0) },
        { transparentColorIndex: Ot() },
        { terminator: Ot() },
      ],
    },
    (t) => {
      var e = Mn(2)(t);
      return e[0] === 33 && e[1] === 249;
    }
  ),
  Ua = Ee(
    {
      image: [
        { code: Ot() },
        {
          descriptor: [
            { left: ve(!0) },
            { top: ve(!0) },
            { width: ve(!0) },
            { height: ve(!0) },
            {
              lct: Mr({
                exists: { index: 0 },
                interlaced: { index: 1 },
                sort: { index: 2 },
                future: { index: 3, length: 2 },
                size: { index: 5, length: 3 },
              }),
            },
          ],
        },
        Ee(
          { lct: Si(3, (t, e, n) => Math.pow(2, n.descriptor.lct.size + 1)) },
          (t, e, n) => n.descriptor.lct.exists
        ),
        { data: [{ minCodeSize: Ot() }, Bn] },
      ],
    },
    (t) => Ti()(t) === 44
  ),
  Ka = Ee(
    {
      text: [
        { codes: Vt(2) },
        { blockSize: Ot() },
        { preData: (t, e, n) => Vt(n.text.blockSize)(t) },
        Bn,
      ],
    },
    (t) => {
      var e = Mn(2)(t);
      return e[0] === 33 && e[1] === 1;
    }
  ),
  za = Ee(
    {
      application: [
        { codes: Vt(2) },
        { blockSize: Ot() },
        { id: (t, e, n) => or(n.blockSize)(t) },
        Bn,
      ],
    },
    (t) => {
      var e = Mn(2)(t);
      return e[0] === 33 && e[1] === 255;
    }
  ),
  Ga = Ee({ comment: [{ codes: Vt(2) }, Bn] }, (t) => {
    var e = Mn(2)(t);
    return e[0] === 33 && e[1] === 254;
  }),
  Va = [
    { header: [{ signature: or(3) }, { version: or(3) }] },
    {
      lsd: [
        { width: ve(!0) },
        { height: ve(!0) },
        {
          gct: Mr({
            exists: { index: 0 },
            resolution: { index: 1, length: 3 },
            sort: { index: 4 },
            size: { index: 5, length: 3 },
          }),
        },
        { backgroundColorIndex: Ot() },
        { pixelAspectRatio: Ot() },
      ],
    },
    Ee(
      { gct: Si(3, (t, e) => Math.pow(2, e.lsd.gct.size + 1)) },
      (t, e) => e.lsd.gct.exists
    ),
    {
      frames: Na([Ha, za, Ga, Ua, Ka], (t) => {
        var e = Ti()(t);
        return e === 33 || e === 44;
      }),
    },
  ],
  Wa = (t, e) => {
    const n = new Array(t.length),
      r = t.length / e,
      s = function (h, d) {
        const m = t.slice(d * e, (d + 1) * e);
        n.splice.apply(n, [h * e, e].concat(m));
      },
      i = [0, 4, 2, 1],
      o = [8, 8, 4, 2];
    for (var l = 0, a = 0; a < 4; a++)
      for (var f = i[a]; f < r; f += o[a]) s(f, l), l++;
    return n;
  },
  qa = (t, e, n) => {
    const i = n;
    var o, l, a, f, h, d, m, M, A, R, y, O, _, B, V, k;
    const W = new Array(n),
      w = new Array(4096),
      E = new Array(4096),
      T = new Array(4096 + 1);
    for (
      O = t,
        l = 1 << O,
        h = l + 1,
        o = l + 2,
        m = -1,
        f = O + 1,
        a = (1 << f) - 1,
        A = 0;
      A < l;
      A++
    )
      (w[A] = 0), (E[A] = A);
    var y, M, _, B, k, V;
    for (y = M = _ = B = k = V = 0, R = 0; R < i; ) {
      if (B === 0) {
        if (M < f) {
          (y += e[V] << M), (M += 8), V++;
          continue;
        }
        if (((A = y & a), (y >>= f), (M -= f), A > o || A == h)) break;
        if (A == l) {
          (f = O + 1), (a = (1 << f) - 1), (o = l + 2), (m = -1);
          continue;
        }
        if (m == -1) {
          (T[B++] = E[A]), (m = A), (_ = A);
          continue;
        }
        for (d = A, A == o && ((T[B++] = _), (A = m)); A > l; )
          (T[B++] = E[A]), (A = w[A]);
        (_ = E[A] & 255),
          (T[B++] = _),
          o < 4096 &&
            ((w[o] = m),
            (E[o] = _),
            o++,
            !(o & a) && o < 4096 && (f++, (a += o))),
          (m = d);
      }
      B--, (W[k++] = T[B]), R++;
    }
    for (R = k; R < i; R++) W[R] = 0;
    return W;
  },
  Xa = (t) => {
    const e = new Uint8Array(t);
    return Ke($a(e), Va);
  },
  Ja = (t) => {
    const e = t.pixels.length,
      n = new Uint8ClampedArray(e * 4);
    for (var r = 0; r < e; r++) {
      const s = r * 4,
        i = t.pixels[r],
        o = t.colorTable[i];
      (n[s] = o[0]),
        (n[s + 1] = o[1]),
        (n[s + 2] = o[2]),
        (n[s + 3] = i !== t.transparentIndex ? 255 : 0);
    }
    return n;
  },
  Za = (t, e, n) => {
    if (!t.image) {
      console.warn("gif frame does not have associated image.");
      return;
    }
    const { image: r } = t,
      s = r.descriptor.width * r.descriptor.height;
    var i = qa(r.data.minCodeSize, r.data.blocks, s);
    r.descriptor.lct.interlaced && (i = Wa(i, r.descriptor.width));
    const o = {
      pixels: i,
      dims: {
        top: t.image.descriptor.top,
        left: t.image.descriptor.left,
        width: t.image.descriptor.width,
        height: t.image.descriptor.height,
      },
    };
    return (
      r.descriptor.lct && r.descriptor.lct.exists
        ? (o.colorTable = r.lct)
        : (o.colorTable = e),
      t.gce &&
        ((o.delay = (t.gce.delay || 10) * 10),
        (o.disposalType = t.gce.extras.disposal),
        t.gce.extras.transparentColorGiven &&
          (o.transparentIndex = t.gce.transparentColorIndex)),
      n && (o.patch = Ja(o)),
      o
    );
  },
  Ya = (t, e) => t.frames.filter((n) => n.image).map((n) => Za(n, t.gct, e));
function Qa(t, e, n) {
  const r = Ii(e),
    s = t - 1;
  let i = 0;
  switch (n) {
    case wt.L:
      i = Kt[s][0];
      break;
    case wt.M:
      i = Kt[s][1];
      break;
    case wt.Q:
      i = Kt[s][2];
      break;
    case wt.H:
      i = Kt[s][3];
      break;
  }
  return r <= i;
}
function tc(t, e) {
  for (var n = 1, r = Ii(t), s = 0, i = Kt.length; s < i; s++) {
    var o = 0;
    switch (e) {
      case wt.L:
        o = Kt[s][0];
        break;
      case wt.M:
        o = Kt[s][1];
        break;
      case wt.Q:
        o = Kt[s][2];
        break;
      case wt.H:
        o = Kt[s][3];
        break;
    }
    if (r <= o) break;
    n++;
  }
  if (n > Kt.length) throw new Error("Too long data");
  return n;
}
function Ii(t) {
  var e = encodeURI(t)
    .toString()
    .replace(/\%[0-9a-fA-F]{2}/g, "a");
  return e.length + (e.length != Number(t) ? 3 : 0);
}
class ec {
  constructor(e) {
    (this.mode = St.MODE_8BIT_BYTE), (this.parsedData = []), (this.data = e);
    const n = [];
    for (let r = 0, s = this.data.length; r < s; r++) {
      const i = [],
        o = this.data.charCodeAt(r);
      o > 65536
        ? ((i[0] = 240 | ((o & 1835008) >>> 18)),
          (i[1] = 128 | ((o & 258048) >>> 12)),
          (i[2] = 128 | ((o & 4032) >>> 6)),
          (i[3] = 128 | (o & 63)))
        : o > 2048
        ? ((i[0] = 224 | ((o & 61440) >>> 12)),
          (i[1] = 128 | ((o & 4032) >>> 6)),
          (i[2] = 128 | (o & 63)))
        : o > 128
        ? ((i[0] = 192 | ((o & 1984) >>> 6)), (i[1] = 128 | (o & 63)))
        : (i[0] = o),
        n.push(i);
    }
    (this.parsedData = Array.prototype.concat.apply([], n)),
      this.parsedData.length != this.data.length &&
        (this.parsedData.unshift(191),
        this.parsedData.unshift(187),
        this.parsedData.unshift(239));
  }
  getLength() {
    return this.parsedData.length;
  }
  write(e) {
    for (let n = 0, r = this.parsedData.length; n < r; n++)
      e.put(this.parsedData[n], 8);
  }
}
class ie {
  constructor(e = -1, n = wt.L) {
    (this.moduleCount = 0),
      (this.dataList = []),
      (this.typeNumber = e),
      (this.errorCorrectLevel = n),
      (this.moduleCount = 0),
      (this.dataList = []);
  }
  addData(e) {
    if (this.typeNumber <= 0) this.typeNumber = tc(e, this.errorCorrectLevel);
    else {
      if (this.typeNumber > 40)
        throw new Error(`Invalid QR version: ${this.typeNumber}`);
      if (!Qa(this.typeNumber, e, this.errorCorrectLevel))
        throw new Error(`Data is too long for QR version: ${this.typeNumber}`);
    }
    const n = new ec(e);
    this.dataList.push(n), (this.dataCache = void 0);
  }
  isDark(e, n) {
    if (e < 0 || this.moduleCount <= e || n < 0 || this.moduleCount <= n)
      throw new Error(`${e},${n}`);
    return this.modules[e][n];
  }
  getModuleCount() {
    return this.moduleCount;
  }
  make() {
    this.makeImpl(!1, this.getBestMaskPattern());
  }
  makeImpl(e, n) {
    (this.moduleCount = this.typeNumber * 4 + 17),
      (this.modules = new Array(this.moduleCount));
    for (let r = 0; r < this.moduleCount; r++) {
      this.modules[r] = new Array(this.moduleCount);
      for (let s = 0; s < this.moduleCount; s++) this.modules[r][s] = null;
    }
    this.setupPositionProbePattern(0, 0),
      this.setupPositionProbePattern(this.moduleCount - 7, 0),
      this.setupPositionProbePattern(0, this.moduleCount - 7),
      this.setupPositionAdjustPattern(),
      this.setupTimingPattern(),
      this.setupTypeInfo(e, n),
      this.typeNumber >= 7 && this.setupTypeNumber(e),
      this.dataCache == null &&
        (this.dataCache = ie.createData(
          this.typeNumber,
          this.errorCorrectLevel,
          this.dataList
        )),
      this.mapData(this.dataCache, n);
  }
  setupPositionProbePattern(e, n) {
    for (let r = -1; r <= 7; r++)
      if (!(e + r <= -1 || this.moduleCount <= e + r))
        for (let s = -1; s <= 7; s++)
          n + s <= -1 ||
            this.moduleCount <= n + s ||
            ((0 <= r && r <= 6 && (s == 0 || s == 6)) ||
            (0 <= s && s <= 6 && (r == 0 || r == 6)) ||
            (2 <= r && r <= 4 && 2 <= s && s <= 4)
              ? (this.modules[e + r][n + s] = !0)
              : (this.modules[e + r][n + s] = !1));
  }
  getBestMaskPattern() {
    if (
      Number.isInteger(this.maskPattern) &&
      Object.values(qt).includes(this.maskPattern)
    )
      return this.maskPattern;
    let e = 0,
      n = 0;
    for (let r = 0; r < 8; r++) {
      this.makeImpl(!0, r);
      const s = nt.getLostPoint(this);
      (r == 0 || e > s) && ((e = s), (n = r));
    }
    return n;
  }
  setupTimingPattern() {
    for (let e = 8; e < this.moduleCount - 8; e++)
      this.modules[e][6] == null && (this.modules[e][6] = e % 2 == 0);
    for (let e = 8; e < this.moduleCount - 8; e++)
      this.modules[6][e] == null && (this.modules[6][e] = e % 2 == 0);
  }
  setupPositionAdjustPattern() {
    const e = nt.getPatternPosition(this.typeNumber);
    for (let n = 0; n < e.length; n++)
      for (let r = 0; r < e.length; r++) {
        const s = e[n],
          i = e[r];
        if (this.modules[s][i] == null)
          for (let o = -2; o <= 2; o++)
            for (let l = -2; l <= 2; l++)
              o == -2 || o == 2 || l == -2 || l == 2 || (o == 0 && l == 0)
                ? (this.modules[s + o][i + l] = !0)
                : (this.modules[s + o][i + l] = !1);
      }
  }
  setupTypeNumber(e) {
    const n = nt.getBCHTypeNumber(this.typeNumber);
    for (var r = 0; r < 18; r++) {
      var s = !e && ((n >> r) & 1) == 1;
      this.modules[Math.floor(r / 3)][(r % 3) + this.moduleCount - 8 - 3] = s;
    }
    for (var r = 0; r < 18; r++) {
      var s = !e && ((n >> r) & 1) == 1;
      this.modules[(r % 3) + this.moduleCount - 8 - 3][Math.floor(r / 3)] = s;
    }
  }
  setupTypeInfo(e, n) {
    const r = (this.errorCorrectLevel << 3) | n,
      s = nt.getBCHTypeInfo(r);
    for (var i = 0; i < 15; i++) {
      var o = !e && ((s >> i) & 1) == 1;
      i < 6
        ? (this.modules[i][8] = o)
        : i < 8
        ? (this.modules[i + 1][8] = o)
        : (this.modules[this.moduleCount - 15 + i][8] = o);
    }
    for (var i = 0; i < 15; i++) {
      var o = !e && ((s >> i) & 1) == 1;
      i < 8
        ? (this.modules[8][this.moduleCount - i - 1] = o)
        : i < 9
        ? (this.modules[8][15 - i - 1 + 1] = o)
        : (this.modules[8][15 - i - 1] = o);
    }
    this.modules[this.moduleCount - 8][8] = !e;
  }
  mapData(e, n) {
    let r = -1,
      s = this.moduleCount - 1,
      i = 7,
      o = 0;
    for (let l = this.moduleCount - 1; l > 0; l -= 2)
      for (l == 6 && l--; ; ) {
        for (let a = 0; a < 2; a++)
          if (this.modules[s][l - a] == null) {
            let f = !1;
            o < e.length && (f = ((e[o] >>> i) & 1) == 1),
              nt.getMask(n, s, l - a) && (f = !f),
              (this.modules[s][l - a] = f),
              i--,
              i == -1 && (o++, (i = 7));
          }
        if (((s += r), s < 0 || this.moduleCount <= s)) {
          (s -= r), (r = -r);
          break;
        }
      }
  }
  static createData(e, n, r) {
    const s = Jt.getRSBlocks(e, n),
      i = new nc();
    for (var o = 0; o < r.length; o++) {
      const a = r[o];
      i.put(a.mode, 4),
        i.put(a.getLength(), nt.getLengthInBits(a.mode, e)),
        a.write(i);
    }
    let l = 0;
    for (var o = 0; o < s.length; o++) l += s[o].dataCount;
    if (i.getLengthInBits() > l * 8)
      throw new Error(
        `code length overflow. (${i.getLengthInBits()}>${l * 8})`
      );
    for (
      i.getLengthInBits() + 4 <= l * 8 && i.put(0, 4);
      i.getLengthInBits() % 8 != 0;

    )
      i.putBit(!1);
    for (
      ;
      !(
        i.getLengthInBits() >= l * 8 ||
        (i.put(ie.PAD0, 8), i.getLengthInBits() >= l * 8)
      );

    )
      i.put(ie.PAD1, 8);
    return ie.createBytes(i, s);
  }
  static createBytes(e, n) {
    let r = 0,
      s = 0,
      i = 0;
    const o = new Array(n.length),
      l = new Array(n.length);
    for (var a = 0; a < n.length; a++) {
      const A = n[a].dataCount,
        R = n[a].totalCount - A;
      (s = Math.max(s, A)), (i = Math.max(i, R)), (o[a] = new Array(A));
      for (var f = 0; f < o[a].length; f++) o[a][f] = 255 & e.buffer[f + r];
      r += A;
      const O = nt.getErrorCorrectPolynomial(R),
        w = new Le(o[a], O.getLength() - 1).mod(O);
      l[a] = new Array(O.getLength() - 1);
      for (var f = 0; f < l[a].length; f++) {
        const T = f + w.getLength() - l[a].length;
        l[a][f] = T >= 0 ? w.get(T) : 0;
      }
    }
    let h = 0;
    for (var f = 0; f < n.length; f++) h += n[f].totalCount;
    const d = new Array(h);
    let m = 0;
    for (var f = 0; f < s; f++)
      for (var a = 0; a < n.length; a++) f < o[a].length && (d[m++] = o[a][f]);
    for (var f = 0; f < i; f++)
      for (var a = 0; a < n.length; a++) f < l[a].length && (d[m++] = l[a][f]);
    return d;
  }
}
ie.PAD0 = 236;
ie.PAD1 = 17;
const wt = { L: 1, M: 0, Q: 3, H: 2 },
  St = { MODE_NUMBER: 1, MODE_ALPHA_NUM: 2, MODE_8BIT_BYTE: 4, MODE_KANJI: 8 },
  qt = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7,
  };
class nt {
  static getBCHTypeInfo(e) {
    let n = e << 10;
    for (; nt.getBCHDigit(n) - nt.getBCHDigit(nt.G15) >= 0; )
      n ^= nt.G15 << (nt.getBCHDigit(n) - nt.getBCHDigit(nt.G15));
    return ((e << 10) | n) ^ nt.G15_MASK;
  }
  static getBCHTypeNumber(e) {
    let n = e << 12;
    for (; nt.getBCHDigit(n) - nt.getBCHDigit(nt.G18) >= 0; )
      n ^= nt.G18 << (nt.getBCHDigit(n) - nt.getBCHDigit(nt.G18));
    return (e << 12) | n;
  }
  static getBCHDigit(e) {
    let n = 0;
    for (; e != 0; ) n++, (e >>>= 1);
    return n;
  }
  static getPatternPosition(e) {
    return nt.PATTERN_POSITION_TABLE[e - 1];
  }
  static getMask(e, n, r) {
    switch (e) {
      case qt.PATTERN000:
        return (n + r) % 2 == 0;
      case qt.PATTERN001:
        return n % 2 == 0;
      case qt.PATTERN010:
        return r % 3 == 0;
      case qt.PATTERN011:
        return (n + r) % 3 == 0;
      case qt.PATTERN100:
        return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 == 0;
      case qt.PATTERN101:
        return ((n * r) % 2) + ((n * r) % 3) == 0;
      case qt.PATTERN110:
        return (((n * r) % 2) + ((n * r) % 3)) % 2 == 0;
      case qt.PATTERN111:
        return (((n * r) % 3) + ((n + r) % 2)) % 2 == 0;
      default:
        throw new Error(`bad maskPattern:${e}`);
    }
  }
  static getErrorCorrectPolynomial(e) {
    let n = new Le([1], 0);
    for (let r = 0; r < e; r++) n = n.multiply(new Le([1, ft.gexp(r)], 0));
    return n;
  }
  static getLengthInBits(e, n) {
    if (1 <= n && n < 10)
      switch (e) {
        case St.MODE_NUMBER:
          return 10;
        case St.MODE_ALPHA_NUM:
          return 9;
        case St.MODE_8BIT_BYTE:
          return 8;
        case St.MODE_KANJI:
          return 8;
        default:
          throw new Error(`mode:${e}`);
      }
    else if (n < 27)
      switch (e) {
        case St.MODE_NUMBER:
          return 12;
        case St.MODE_ALPHA_NUM:
          return 11;
        case St.MODE_8BIT_BYTE:
          return 16;
        case St.MODE_KANJI:
          return 10;
        default:
          throw new Error(`mode:${e}`);
      }
    else if (n < 41)
      switch (e) {
        case St.MODE_NUMBER:
          return 14;
        case St.MODE_ALPHA_NUM:
          return 13;
        case St.MODE_8BIT_BYTE:
          return 16;
        case St.MODE_KANJI:
          return 12;
        default:
          throw new Error(`mode:${e}`);
      }
    else throw new Error(`type:${n}`);
  }
  static getLostPoint(e) {
    const n = e.getModuleCount();
    let r = 0;
    for (var s = 0; s < n; s++)
      for (var i = 0; i < n; i++) {
        let a = 0;
        const f = e.isDark(s, i);
        for (let h = -1; h <= 1; h++)
          if (!(s + h < 0 || n <= s + h))
            for (let d = -1; d <= 1; d++)
              i + d < 0 ||
                n <= i + d ||
                (h == 0 && d == 0) ||
                (f == e.isDark(s + h, i + d) && a++);
        a > 5 && (r += 3 + a - 5);
      }
    for (var s = 0; s < n - 1; s++)
      for (var i = 0; i < n - 1; i++) {
        let h = 0;
        e.isDark(s, i) && h++,
          e.isDark(s + 1, i) && h++,
          e.isDark(s, i + 1) && h++,
          e.isDark(s + 1, i + 1) && h++,
          (h == 0 || h == 4) && (r += 3);
      }
    for (var s = 0; s < n; s++)
      for (var i = 0; i < n - 6; i++)
        e.isDark(s, i) &&
          !e.isDark(s, i + 1) &&
          e.isDark(s, i + 2) &&
          e.isDark(s, i + 3) &&
          e.isDark(s, i + 4) &&
          !e.isDark(s, i + 5) &&
          e.isDark(s, i + 6) &&
          (r += 40);
    for (var i = 0; i < n; i++)
      for (var s = 0; s < n - 6; s++)
        e.isDark(s, i) &&
          !e.isDark(s + 1, i) &&
          e.isDark(s + 2, i) &&
          e.isDark(s + 3, i) &&
          e.isDark(s + 4, i) &&
          !e.isDark(s + 5, i) &&
          e.isDark(s + 6, i) &&
          (r += 40);
    let o = 0;
    for (var i = 0; i < n; i++)
      for (var s = 0; s < n; s++) e.isDark(s, i) && o++;
    const l = Math.abs((100 * o) / n / n - 50) / 5;
    return (r += l * 10), r;
  }
}
nt.PATTERN_POSITION_TABLE = [
  [],
  [6, 18],
  [6, 22],
  [6, 26],
  [6, 30],
  [6, 34],
  [6, 22, 38],
  [6, 24, 42],
  [6, 26, 46],
  [6, 28, 50],
  [6, 30, 54],
  [6, 32, 58],
  [6, 34, 62],
  [6, 26, 46, 66],
  [6, 26, 48, 70],
  [6, 26, 50, 74],
  [6, 30, 54, 78],
  [6, 30, 56, 82],
  [6, 30, 58, 86],
  [6, 34, 62, 90],
  [6, 28, 50, 72, 94],
  [6, 26, 50, 74, 98],
  [6, 30, 54, 78, 102],
  [6, 28, 54, 80, 106],
  [6, 32, 58, 84, 110],
  [6, 30, 58, 86, 114],
  [6, 34, 62, 90, 118],
  [6, 26, 50, 74, 98, 122],
  [6, 30, 54, 78, 102, 126],
  [6, 26, 52, 78, 104, 130],
  [6, 30, 56, 82, 108, 134],
  [6, 34, 60, 86, 112, 138],
  [6, 30, 58, 86, 114, 142],
  [6, 34, 62, 90, 118, 146],
  [6, 30, 54, 78, 102, 126, 150],
  [6, 24, 50, 76, 102, 128, 154],
  [6, 28, 54, 80, 106, 132, 158],
  [6, 32, 58, 84, 110, 136, 162],
  [6, 26, 54, 82, 110, 138, 166],
  [6, 30, 58, 86, 114, 142, 170],
];
nt.G15 = 1335;
nt.G18 = 7973;
nt.G15_MASK = 21522;
class ft {
  static glog(e) {
    if (e < 1) throw new Error(`glog(${e})`);
    return ft.LOG_TABLE[e];
  }
  static gexp(e) {
    for (; e < 0; ) e += 255;
    for (; e >= 256; ) e -= 255;
    return ft.EXP_TABLE[e];
  }
}
ft.EXP_TABLE = new Array(256);
ft.LOG_TABLE = new Array(256);
ft._constructor = (function () {
  for (var t = 0; t < 8; t++) ft.EXP_TABLE[t] = 1 << t;
  for (var t = 8; t < 256; t++)
    ft.EXP_TABLE[t] =
      ft.EXP_TABLE[t - 4] ^
      ft.EXP_TABLE[t - 5] ^
      ft.EXP_TABLE[t - 6] ^
      ft.EXP_TABLE[t - 8];
  for (var t = 0; t < 255; t++) ft.LOG_TABLE[ft.EXP_TABLE[t]] = t;
})();
class Le {
  constructor(e, n) {
    if (e.length == null) throw new Error(`${e.length}/${n}`);
    let r = 0;
    for (; r < e.length && e[r] == 0; ) r++;
    this.num = new Array(e.length - r + n);
    for (let s = 0; s < e.length - r; s++) this.num[s] = e[s + r];
  }
  get(e) {
    return this.num[e];
  }
  getLength() {
    return this.num.length;
  }
  multiply(e) {
    const n = new Array(this.getLength() + e.getLength() - 1);
    for (let r = 0; r < this.getLength(); r++)
      for (let s = 0; s < e.getLength(); s++)
        n[r + s] ^= ft.gexp(ft.glog(this.get(r)) + ft.glog(e.get(s)));
    return new Le(n, 0);
  }
  mod(e) {
    if (this.getLength() - e.getLength() < 0) return this;
    const n = ft.glog(this.get(0)) - ft.glog(e.get(0)),
      r = new Array(this.getLength());
    for (var s = 0; s < this.getLength(); s++) r[s] = this.get(s);
    for (var s = 0; s < e.getLength(); s++)
      r[s] ^= ft.gexp(ft.glog(e.get(s)) + n);
    return new Le(r, 0).mod(e);
  }
}
class Jt {
  constructor(e, n) {
    (this.totalCount = e), (this.dataCount = n);
  }
  static getRSBlocks(e, n) {
    const r = Jt.getRsBlockTable(e, n);
    if (r == null)
      throw new Error(`bad rs block @ typeNumber:${e}/errorCorrectLevel:${n}`);
    const s = r.length / 3,
      i = [];
    for (let o = 0; o < s; o++) {
      const l = r[o * 3 + 0],
        a = r[o * 3 + 1],
        f = r[o * 3 + 2];
      for (let h = 0; h < l; h++) i.push(new Jt(a, f));
    }
    return i;
  }
  static getRsBlockTable(e, n) {
    switch (n) {
      case wt.L:
        return Jt.RS_BLOCK_TABLE[(e - 1) * 4 + 0];
      case wt.M:
        return Jt.RS_BLOCK_TABLE[(e - 1) * 4 + 1];
      case wt.Q:
        return Jt.RS_BLOCK_TABLE[(e - 1) * 4 + 2];
      case wt.H:
        return Jt.RS_BLOCK_TABLE[(e - 1) * 4 + 3];
      default:
        return;
    }
  }
}
Jt.RS_BLOCK_TABLE = [
  [1, 26, 19],
  [1, 26, 16],
  [1, 26, 13],
  [1, 26, 9],
  [1, 44, 34],
  [1, 44, 28],
  [1, 44, 22],
  [1, 44, 16],
  [1, 70, 55],
  [1, 70, 44],
  [2, 35, 17],
  [2, 35, 13],
  [1, 100, 80],
  [2, 50, 32],
  [2, 50, 24],
  [4, 25, 9],
  [1, 134, 108],
  [2, 67, 43],
  [2, 33, 15, 2, 34, 16],
  [2, 33, 11, 2, 34, 12],
  [2, 86, 68],
  [4, 43, 27],
  [4, 43, 19],
  [4, 43, 15],
  [2, 98, 78],
  [4, 49, 31],
  [2, 32, 14, 4, 33, 15],
  [4, 39, 13, 1, 40, 14],
  [2, 121, 97],
  [2, 60, 38, 2, 61, 39],
  [4, 40, 18, 2, 41, 19],
  [4, 40, 14, 2, 41, 15],
  [2, 146, 116],
  [3, 58, 36, 2, 59, 37],
  [4, 36, 16, 4, 37, 17],
  [4, 36, 12, 4, 37, 13],
  [2, 86, 68, 2, 87, 69],
  [4, 69, 43, 1, 70, 44],
  [6, 43, 19, 2, 44, 20],
  [6, 43, 15, 2, 44, 16],
  [4, 101, 81],
  [1, 80, 50, 4, 81, 51],
  [4, 50, 22, 4, 51, 23],
  [3, 36, 12, 8, 37, 13],
  [2, 116, 92, 2, 117, 93],
  [6, 58, 36, 2, 59, 37],
  [4, 46, 20, 6, 47, 21],
  [7, 42, 14, 4, 43, 15],
  [4, 133, 107],
  [8, 59, 37, 1, 60, 38],
  [8, 44, 20, 4, 45, 21],
  [12, 33, 11, 4, 34, 12],
  [3, 145, 115, 1, 146, 116],
  [4, 64, 40, 5, 65, 41],
  [11, 36, 16, 5, 37, 17],
  [11, 36, 12, 5, 37, 13],
  [5, 109, 87, 1, 110, 88],
  [5, 65, 41, 5, 66, 42],
  [5, 54, 24, 7, 55, 25],
  [11, 36, 12],
  [5, 122, 98, 1, 123, 99],
  [7, 73, 45, 3, 74, 46],
  [15, 43, 19, 2, 44, 20],
  [3, 45, 15, 13, 46, 16],
  [1, 135, 107, 5, 136, 108],
  [10, 74, 46, 1, 75, 47],
  [1, 50, 22, 15, 51, 23],
  [2, 42, 14, 17, 43, 15],
  [5, 150, 120, 1, 151, 121],
  [9, 69, 43, 4, 70, 44],
  [17, 50, 22, 1, 51, 23],
  [2, 42, 14, 19, 43, 15],
  [3, 141, 113, 4, 142, 114],
  [3, 70, 44, 11, 71, 45],
  [17, 47, 21, 4, 48, 22],
  [9, 39, 13, 16, 40, 14],
  [3, 135, 107, 5, 136, 108],
  [3, 67, 41, 13, 68, 42],
  [15, 54, 24, 5, 55, 25],
  [15, 43, 15, 10, 44, 16],
  [4, 144, 116, 4, 145, 117],
  [17, 68, 42],
  [17, 50, 22, 6, 51, 23],
  [19, 46, 16, 6, 47, 17],
  [2, 139, 111, 7, 140, 112],
  [17, 74, 46],
  [7, 54, 24, 16, 55, 25],
  [34, 37, 13],
  [4, 151, 121, 5, 152, 122],
  [4, 75, 47, 14, 76, 48],
  [11, 54, 24, 14, 55, 25],
  [16, 45, 15, 14, 46, 16],
  [6, 147, 117, 4, 148, 118],
  [6, 73, 45, 14, 74, 46],
  [11, 54, 24, 16, 55, 25],
  [30, 46, 16, 2, 47, 17],
  [8, 132, 106, 4, 133, 107],
  [8, 75, 47, 13, 76, 48],
  [7, 54, 24, 22, 55, 25],
  [22, 45, 15, 13, 46, 16],
  [10, 142, 114, 2, 143, 115],
  [19, 74, 46, 4, 75, 47],
  [28, 50, 22, 6, 51, 23],
  [33, 46, 16, 4, 47, 17],
  [8, 152, 122, 4, 153, 123],
  [22, 73, 45, 3, 74, 46],
  [8, 53, 23, 26, 54, 24],
  [12, 45, 15, 28, 46, 16],
  [3, 147, 117, 10, 148, 118],
  [3, 73, 45, 23, 74, 46],
  [4, 54, 24, 31, 55, 25],
  [11, 45, 15, 31, 46, 16],
  [7, 146, 116, 7, 147, 117],
  [21, 73, 45, 7, 74, 46],
  [1, 53, 23, 37, 54, 24],
  [19, 45, 15, 26, 46, 16],
  [5, 145, 115, 10, 146, 116],
  [19, 75, 47, 10, 76, 48],
  [15, 54, 24, 25, 55, 25],
  [23, 45, 15, 25, 46, 16],
  [13, 145, 115, 3, 146, 116],
  [2, 74, 46, 29, 75, 47],
  [42, 54, 24, 1, 55, 25],
  [23, 45, 15, 28, 46, 16],
  [17, 145, 115],
  [10, 74, 46, 23, 75, 47],
  [10, 54, 24, 35, 55, 25],
  [19, 45, 15, 35, 46, 16],
  [17, 145, 115, 1, 146, 116],
  [14, 74, 46, 21, 75, 47],
  [29, 54, 24, 19, 55, 25],
  [11, 45, 15, 46, 46, 16],
  [13, 145, 115, 6, 146, 116],
  [14, 74, 46, 23, 75, 47],
  [44, 54, 24, 7, 55, 25],
  [59, 46, 16, 1, 47, 17],
  [12, 151, 121, 7, 152, 122],
  [12, 75, 47, 26, 76, 48],
  [39, 54, 24, 14, 55, 25],
  [22, 45, 15, 41, 46, 16],
  [6, 151, 121, 14, 152, 122],
  [6, 75, 47, 34, 76, 48],
  [46, 54, 24, 10, 55, 25],
  [2, 45, 15, 64, 46, 16],
  [17, 152, 122, 4, 153, 123],
  [29, 74, 46, 14, 75, 47],
  [49, 54, 24, 10, 55, 25],
  [24, 45, 15, 46, 46, 16],
  [4, 152, 122, 18, 153, 123],
  [13, 74, 46, 32, 75, 47],
  [48, 54, 24, 14, 55, 25],
  [42, 45, 15, 32, 46, 16],
  [20, 147, 117, 4, 148, 118],
  [40, 75, 47, 7, 76, 48],
  [43, 54, 24, 22, 55, 25],
  [10, 45, 15, 67, 46, 16],
  [19, 148, 118, 6, 149, 119],
  [18, 75, 47, 31, 76, 48],
  [34, 54, 24, 34, 55, 25],
  [20, 45, 15, 61, 46, 16],
];
class nc {
  constructor() {
    (this.buffer = []), (this.length = 0);
  }
  get(e) {
    const n = Math.floor(e / 8);
    return ((this.buffer[n] >>> (7 - (e % 8))) & 1) == 1;
  }
  put(e, n) {
    for (let r = 0; r < n; r++) this.putBit(((e >>> (n - r - 1)) & 1) == 1);
  }
  getLengthInBits() {
    return this.length;
  }
  putBit(e) {
    const n = Math.floor(this.length / 8);
    this.buffer.length <= n && this.buffer.push(0),
      e && (this.buffer[n] |= 128 >>> this.length % 8),
      this.length++;
  }
}
const Kt = [
  [17, 14, 11, 7],
  [32, 26, 20, 14],
  [53, 42, 32, 24],
  [78, 62, 46, 34],
  [106, 84, 60, 44],
  [134, 106, 74, 58],
  [154, 122, 86, 64],
  [192, 152, 108, 84],
  [230, 180, 130, 98],
  [271, 213, 151, 119],
  [321, 251, 177, 137],
  [367, 287, 203, 155],
  [425, 331, 241, 177],
  [458, 362, 258, 194],
  [520, 412, 292, 220],
  [586, 450, 322, 250],
  [644, 504, 364, 280],
  [718, 560, 394, 310],
  [792, 624, 442, 338],
  [858, 666, 482, 382],
  [929, 711, 509, 403],
  [1003, 779, 565, 439],
  [1091, 857, 611, 461],
  [1171, 911, 661, 511],
  [1273, 997, 715, 535],
  [1367, 1059, 751, 593],
  [1465, 1125, 805, 625],
  [1528, 1190, 868, 658],
  [1628, 1264, 908, 698],
  [1732, 1370, 982, 742],
  [1840, 1452, 1030, 790],
  [1952, 1538, 1112, 842],
  [2068, 1628, 1168, 898],
  [2188, 1722, 1228, 958],
  [2303, 1809, 1283, 983],
  [2431, 1911, 1351, 1051],
  [2563, 1989, 1423, 1093],
  [2699, 2099, 1499, 1139],
  [2809, 2213, 1579, 1219],
  [2953, 2331, 1663, 1273],
];
var rc = 100,
  pt = 256,
  ps = pt - 1,
  ne = 4,
  Mi = 16,
  Br = 1 << Mi,
  Bi = 10,
  Or = 10,
  sc = Br >> Or,
  ic = Br << (Bi - Or),
  oc = pt >> 3,
  lr = 6,
  lc = 1 << lr,
  ac = oc * lc,
  cc = 30,
  Oi = 10,
  on = 1 << Oi,
  Di = 8,
  ms = 1 << Di,
  fc = Oi + Di,
  Te = 1 << fc,
  bs = 499,
  vs = 491,
  ys = 487,
  Li = 503,
  uc = 3 * Li;
function hc(t, e) {
  var n, r, s, i, o;
  function l() {
    (n = []),
      (r = new Int32Array(256)),
      (s = new Int32Array(pt)),
      (i = new Int32Array(pt)),
      (o = new Int32Array(pt >> 3));
    var w, E;
    for (w = 0; w < pt; w++)
      (E = (w << (ne + 8)) / pt),
        (n[w] = new Float64Array([E, E, E, 0])),
        (i[w] = Br / pt),
        (s[w] = 0);
  }
  function a() {
    for (var w = 0; w < pt; w++)
      (n[w][0] >>= ne), (n[w][1] >>= ne), (n[w][2] >>= ne), (n[w][3] = w);
  }
  function f(w, E, T, y, M) {
    (n[E][0] -= (w * (n[E][0] - T)) / on),
      (n[E][1] -= (w * (n[E][1] - y)) / on),
      (n[E][2] -= (w * (n[E][2] - M)) / on);
  }
  function h(w, E, T, y, M) {
    for (
      var _ = Math.abs(E - w),
        B = Math.min(E + w, pt),
        k = E + 1,
        V = E - 1,
        J = 1,
        v,
        Y;
      k < B || V > _;

    )
      (Y = o[J++]),
        k < B &&
          ((v = n[k++]),
          (v[0] -= (Y * (v[0] - T)) / Te),
          (v[1] -= (Y * (v[1] - y)) / Te),
          (v[2] -= (Y * (v[2] - M)) / Te)),
        V > _ &&
          ((v = n[V--]),
          (v[0] -= (Y * (v[0] - T)) / Te),
          (v[1] -= (Y * (v[1] - y)) / Te),
          (v[2] -= (Y * (v[2] - M)) / Te));
  }
  function d(w, E, T) {
    var y = 2147483647,
      M = y,
      _ = -1,
      B = _,
      k,
      V,
      J,
      v,
      Y;
    for (k = 0; k < pt; k++)
      (V = n[k]),
        (J = Math.abs(V[0] - w) + Math.abs(V[1] - E) + Math.abs(V[2] - T)),
        J < y && ((y = J), (_ = k)),
        (v = J - (s[k] >> (Mi - ne))),
        v < M && ((M = v), (B = k)),
        (Y = i[k] >> Or),
        (i[k] -= Y),
        (s[k] += Y << Bi);
    return (i[_] += sc), (s[_] -= ic), B;
  }
  function m() {
    var w,
      E,
      T,
      y,
      M,
      _,
      B = 0,
      k = 0;
    for (w = 0; w < pt; w++) {
      for (T = n[w], M = w, _ = T[1], E = w + 1; E < pt; E++)
        (y = n[E]), y[1] < _ && ((M = E), (_ = y[1]));
      if (
        ((y = n[M]),
        w != M &&
          ((E = y[0]),
          (y[0] = T[0]),
          (T[0] = E),
          (E = y[1]),
          (y[1] = T[1]),
          (T[1] = E),
          (E = y[2]),
          (y[2] = T[2]),
          (T[2] = E),
          (E = y[3]),
          (y[3] = T[3]),
          (T[3] = E)),
        _ != B)
      ) {
        for (r[B] = (k + w) >> 1, E = B + 1; E < _; E++) r[E] = w;
        (B = _), (k = w);
      }
    }
    for (r[B] = (k + ps) >> 1, E = B + 1; E < 256; E++) r[E] = ps;
  }
  function A(w, E, T) {
    for (var y, M, _, B = 1e3, k = -1, V = r[E], J = V - 1; V < pt || J >= 0; )
      V < pt &&
        ((M = n[V]),
        (_ = M[1] - E),
        _ >= B
          ? (V = pt)
          : (V++,
            _ < 0 && (_ = -_),
            (y = M[0] - w),
            y < 0 && (y = -y),
            (_ += y),
            _ < B &&
              ((y = M[2] - T),
              y < 0 && (y = -y),
              (_ += y),
              _ < B && ((B = _), (k = M[3]))))),
        J >= 0 &&
          ((M = n[J]),
          (_ = E - M[1]),
          _ >= B
            ? (J = -1)
            : (J--,
              _ < 0 && (_ = -_),
              (y = M[0] - w),
              y < 0 && (y = -y),
              (_ += y),
              _ < B &&
                ((y = M[2] - T),
                y < 0 && (y = -y),
                (_ += y),
                _ < B && ((B = _), (k = M[3])))));
    return k;
  }
  function R() {
    var w,
      E = t.length,
      T = 30 + (e - 1) / 3,
      y = E / (3 * e),
      M = ~~(y / rc),
      _ = on,
      B = ac,
      k = B >> lr;
    for (k <= 1 && (k = 0), w = 0; w < k; w++)
      o[w] = _ * (((k * k - w * w) * ms) / (k * k));
    var V;
    E < uc
      ? ((e = 1), (V = 3))
      : E % bs !== 0
      ? (V = 3 * bs)
      : E % vs !== 0
      ? (V = 3 * vs)
      : E % ys !== 0
      ? (V = 3 * ys)
      : (V = 3 * Li);
    var J,
      v,
      Y,
      F,
      Q = 0;
    for (w = 0; w < y; )
      if (
        ((J = (t[Q] & 255) << ne),
        (v = (t[Q + 1] & 255) << ne),
        (Y = (t[Q + 2] & 255) << ne),
        (F = d(J, v, Y)),
        f(_, F, J, v, Y),
        k !== 0 && h(k, F, J, v, Y),
        (Q += V),
        Q >= E && (Q -= E),
        w++,
        M === 0 && (M = 1),
        w % M === 0)
      )
        for (
          _ -= _ / T, B -= B / cc, k = B >> lr, k <= 1 && (k = 0), F = 0;
          F < k;
          F++
        )
          o[F] = _ * (((k * k - F * F) * ms) / (k * k));
  }
  function O() {
    l(), R(), a(), m();
  }
  this.buildColormap = O;
  function W() {
    for (var w = [], E = [], T = 0; T < pt; T++) E[n[T][3]] = T;
    for (var y = 0, M = 0; M < pt; M++) {
      var _ = E[M];
      (w[y++] = n[_][0]), (w[y++] = n[_][1]), (w[y++] = n[_][2]);
    }
    return w;
  }
  (this.getColormap = W), (this.lookupRGB = A);
}
var _s = -1,
  ln = 12,
  je = 5003,
  dc = [
    0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767,
    65535,
  ];
function gc(t, e, n, r) {
  var s = Math.max(2, r),
    i = new Uint8Array(256),
    o = new Int32Array(je),
    l = new Int32Array(je),
    a,
    f = 0,
    h,
    d = 0,
    m,
    A = !1,
    R,
    O,
    W,
    w,
    E,
    T;
  function y(F, Q) {
    (i[h++] = F), h >= 254 && V(Q);
  }
  function M(F) {
    _(je), (d = O + 2), (A = !0), Y(O, F);
  }
  function _(F) {
    for (var Q = 0; Q < F; ++Q) o[Q] = -1;
  }
  function B(F, Q) {
    var D, lt, U, q, mt, it, ht;
    for (
      R = F,
        A = !1,
        T = R,
        m = J(T),
        O = 1 << (F - 1),
        W = O + 1,
        d = O + 2,
        h = 0,
        q = v(),
        ht = 0,
        D = je;
      D < 65536;
      D *= 2
    )
      ++ht;
    (ht = 8 - ht), (it = je), _(it), Y(O, Q);
    t: for (; (lt = v()) != _s; ) {
      if (((D = (lt << ln) + q), (U = (lt << ht) ^ q), o[U] === D)) {
        q = l[U];
        continue;
      } else if (o[U] >= 0) {
        (mt = it - U), U === 0 && (mt = 1);
        do
          if (((U -= mt) < 0 && (U += it), o[U] === D)) {
            q = l[U];
            continue t;
          }
        while (o[U] >= 0);
      }
      Y(q, Q), (q = lt), d < 1 << ln ? ((l[U] = d++), (o[U] = D)) : M(Q);
    }
    Y(q, Q), Y(W, Q);
  }
  function k(F) {
    F.writeByte(s), (w = t * e), (E = 0), B(s + 1, F), F.writeByte(0);
  }
  function V(F) {
    h > 0 && (F.writeByte(h), F.writeBytes(i, 0, h), (h = 0));
  }
  function J(F) {
    return (1 << F) - 1;
  }
  function v() {
    if (w === 0) return _s;
    --w;
    var F = n[E++];
    return F & 255;
  }
  function Y(F, Q) {
    for (a &= dc[f], f > 0 ? (a |= F << f) : (a = F), f += T; f >= 8; )
      y(a & 255, Q), (a >>= 8), (f -= 8);
    if (
      ((d > m || A) &&
        (A
          ? ((m = J((T = R))), (A = !1))
          : (++T, T == ln ? (m = 1 << ln) : (m = J(T)))),
      F == W)
    ) {
      for (; f > 0; ) y(a & 255, Q), (a >>= 8), (f -= 8);
      V(Q);
    }
  }
  this.encode = k;
}
function Et() {
  (this.page = -1), (this.pages = []), this.newPage();
}
Et.pageSize = 4096;
Et.charMap = {};
for (var an = 0; an < 256; an++) Et.charMap[an] = String.fromCharCode(an);
Et.prototype.newPage = function () {
  (this.pages[++this.page] = new Uint8Array(Et.pageSize)), (this.cursor = 0);
};
Et.prototype.getData = function () {
  for (var t = "", e = 0; e < this.pages.length; e++)
    for (var n = 0; n < Et.pageSize; n++) t += Et.charMap[this.pages[e][n]];
  return t;
};
Et.prototype.toFlattenUint8Array = function () {
  const t = [];
  for (var e = 0; e < this.pages.length; e++)
    if (e === this.pages.length - 1) {
      const r = Uint8Array.from(this.pages[e].slice(0, this.cursor));
      t.push(r);
    } else t.push(this.pages[e]);
  const n = new Uint8Array(t.reduce((r, s) => r + s.length, 0));
  return t.reduce((r, s) => (n.set(s, r), r + s.length), 0), n;
};
Et.prototype.writeByte = function (t) {
  this.cursor >= Et.pageSize && this.newPage(),
    (this.pages[this.page][this.cursor++] = t);
};
Et.prototype.writeUTFBytes = function (t) {
  for (var e = t.length, n = 0; n < e; n++) this.writeByte(t.charCodeAt(n));
};
Et.prototype.writeBytes = function (t, e, n) {
  for (var r = n || t.length, s = e || 0; s < r; s++) this.writeByte(t[s]);
};
function st(t, e) {
  (this.width = ~~t),
    (this.height = ~~e),
    (this.transparent = null),
    (this.transIndex = 0),
    (this.repeat = -1),
    (this.delay = 0),
    (this.image = null),
    (this.pixels = null),
    (this.indexedPixels = null),
    (this.colorDepth = null),
    (this.colorTab = null),
    (this.neuQuant = null),
    (this.usedEntry = new Array()),
    (this.palSize = 7),
    (this.dispose = -1),
    (this.firstFrame = !0),
    (this.sample = 10),
    (this.dither = !1),
    (this.globalPalette = !1),
    (this.out = new Et());
}
st.prototype.setDelay = function (t) {
  this.delay = Math.round(t / 10);
};
st.prototype.setFrameRate = function (t) {
  this.delay = Math.round(100 / t);
};
st.prototype.setDispose = function (t) {
  t >= 0 && (this.dispose = t);
};
st.prototype.setRepeat = function (t) {
  this.repeat = t;
};
st.prototype.setTransparent = function (t) {
  this.transparent = t;
};
st.prototype.addFrame = function (t) {
  (this.image = t),
    (this.colorTab =
      this.globalPalette && this.globalPalette.slice
        ? this.globalPalette
        : null),
    this.getImagePixels(),
    this.analyzePixels(),
    this.globalPalette === !0 && (this.globalPalette = this.colorTab),
    this.firstFrame &&
      (this.writeHeader(),
      this.writeLSD(),
      this.writePalette(),
      this.repeat >= 0 && this.writeNetscapeExt()),
    this.writeGraphicCtrlExt(),
    this.writeImageDesc(),
    !this.firstFrame && !this.globalPalette && this.writePalette(),
    this.writePixels(),
    (this.firstFrame = !1);
};
st.prototype.finish = function () {
  this.out.writeByte(59);
};
st.prototype.setQuality = function (t) {
  t < 1 && (t = 1), (this.sample = t);
};
st.prototype.setDither = function (t) {
  t === !0 && (t = "FloydSteinberg"), (this.dither = t);
};
st.prototype.setGlobalPalette = function (t) {
  this.globalPalette = t;
};
st.prototype.getGlobalPalette = function () {
  return (
    (this.globalPalette &&
      this.globalPalette.slice &&
      this.globalPalette.slice(0)) ||
    this.globalPalette
  );
};
st.prototype.writeHeader = function () {
  this.out.writeUTFBytes("GIF89a");
};
st.prototype.analyzePixels = function () {
  this.colorTab ||
    ((this.neuQuant = new hc(this.pixels, this.sample)),
    this.neuQuant.buildColormap(),
    (this.colorTab = this.neuQuant.getColormap())),
    this.dither
      ? this.ditherPixels(
          this.dither.replace("-serpentine", ""),
          this.dither.match(/-serpentine/) !== null
        )
      : this.indexPixels(),
    (this.pixels = null),
    (this.colorDepth = 8),
    (this.palSize = 7),
    this.transparent !== null &&
      (this.transIndex = this.findClosest(this.transparent, !0));
};
st.prototype.indexPixels = function (t) {
  var e = this.pixels.length / 3;
  this.indexedPixels = new Uint8Array(e);
  for (var n = 0, r = 0; r < e; r++) {
    var s = this.findClosestRGB(
      this.pixels[n++] & 255,
      this.pixels[n++] & 255,
      this.pixels[n++] & 255
    );
    (this.usedEntry[s] = !0), (this.indexedPixels[r] = s);
  }
};
st.prototype.ditherPixels = function (t, e) {
  var n = {
    FalseFloydSteinberg: [
      [0.375, 1, 0],
      [0.375, 0, 1],
      [0.25, 1, 1],
    ],
    FloydSteinberg: [
      [0.4375, 1, 0],
      [0.1875, -1, 1],
      [0.3125, 0, 1],
      [0.0625, 1, 1],
    ],
    Stucki: [
      [0.19047619047619047, 1, 0],
      [0.09523809523809523, 2, 0],
      [0.047619047619047616, -2, 1],
      [0.09523809523809523, -1, 1],
      [0.19047619047619047, 0, 1],
      [0.09523809523809523, 1, 1],
      [0.047619047619047616, 2, 1],
      [0.023809523809523808, -2, 2],
      [0.047619047619047616, -1, 2],
      [0.09523809523809523, 0, 2],
      [0.047619047619047616, 1, 2],
      [0.023809523809523808, 2, 2],
    ],
    Atkinson: [
      [0.125, 1, 0],
      [0.125, 2, 0],
      [0.125, -1, 1],
      [0.125, 0, 1],
      [0.125, 1, 1],
      [0.125, 0, 2],
    ],
  };
  if (!t || !n[t]) throw "Unknown dithering kernel: " + t;
  var r = n[t],
    s = 0,
    i = this.height,
    o = this.width,
    l = this.pixels,
    a = e ? -1 : 1;
  this.indexedPixels = new Uint8Array(this.pixels.length / 3);
  for (var f = 0; f < i; f++) {
    e && (a = a * -1);
    for (var h = a == 1 ? 0 : o - 1, d = a == 1 ? o : 0; h !== d; h += a) {
      s = f * o + h;
      var m = s * 3,
        A = l[m],
        R = l[m + 1],
        O = l[m + 2];
      (m = this.findClosestRGB(A, R, O)),
        (this.usedEntry[m] = !0),
        (this.indexedPixels[s] = m),
        (m *= 3);
      for (
        var W = this.colorTab[m],
          w = this.colorTab[m + 1],
          E = this.colorTab[m + 2],
          T = A - W,
          y = R - w,
          M = O - E,
          _ = a == 1 ? 0 : r.length - 1,
          B = a == 1 ? r.length : 0;
        _ !== B;
        _ += a
      ) {
        var k = r[_][1],
          V = r[_][2];
        if (k + h >= 0 && k + h < o && V + f >= 0 && V + f < i) {
          var J = r[_][0];
          (m = s + k + V * o),
            (m *= 3),
            (l[m] = Math.max(0, Math.min(255, l[m] + T * J))),
            (l[m + 1] = Math.max(0, Math.min(255, l[m + 1] + y * J))),
            (l[m + 2] = Math.max(0, Math.min(255, l[m + 2] + M * J)));
        }
      }
    }
  }
};
st.prototype.findClosest = function (t, e) {
  return this.findClosestRGB(
    (t & 16711680) >> 16,
    (t & 65280) >> 8,
    t & 255,
    e
  );
};
st.prototype.findClosestRGB = function (t, e, n, r) {
  if (this.colorTab === null) return -1;
  if (this.neuQuant && !r) return this.neuQuant.lookupRGB(t, e, n);
  for (
    var s = 0, i = 256 * 256 * 256, o = this.colorTab.length, l = 0, a = 0;
    l < o;
    a++
  ) {
    var f = t - (this.colorTab[l++] & 255),
      h = e - (this.colorTab[l++] & 255),
      d = n - (this.colorTab[l++] & 255),
      m = f * f + h * h + d * d;
    (!r || this.usedEntry[a]) && m < i && ((i = m), (s = a));
  }
  return s;
};
st.prototype.getImagePixels = function () {
  var t = this.width,
    e = this.height;
  this.pixels = new Uint8Array(t * e * 3);
  for (var n = this.image, r = 0, s = 0, i = 0; i < e; i++)
    for (var o = 0; o < t; o++)
      (this.pixels[s++] = n[r++]),
        (this.pixels[s++] = n[r++]),
        (this.pixels[s++] = n[r++]),
        r++;
};
st.prototype.writeGraphicCtrlExt = function () {
  this.out.writeByte(33), this.out.writeByte(249), this.out.writeByte(4);
  var t, e;
  this.transparent === null ? ((t = 0), (e = 0)) : ((t = 1), (e = 2)),
    this.dispose >= 0 && (e = this.dispose & 7),
    (e <<= 2),
    this.out.writeByte(0 | e | 0 | t),
    this.writeShort(this.delay),
    this.out.writeByte(this.transIndex),
    this.out.writeByte(0);
};
st.prototype.writeImageDesc = function () {
  this.out.writeByte(44),
    this.writeShort(0),
    this.writeShort(0),
    this.writeShort(this.width),
    this.writeShort(this.height),
    this.firstFrame || this.globalPalette
      ? this.out.writeByte(0)
      : this.out.writeByte(128 | this.palSize);
};
st.prototype.writeLSD = function () {
  this.writeShort(this.width),
    this.writeShort(this.height),
    this.out.writeByte(240 | this.palSize),
    this.out.writeByte(0),
    this.out.writeByte(0);
};
st.prototype.writeNetscapeExt = function () {
  this.out.writeByte(33),
    this.out.writeByte(255),
    this.out.writeByte(11),
    this.out.writeUTFBytes("NETSCAPE2.0"),
    this.out.writeByte(3),
    this.out.writeByte(1),
    this.writeShort(this.repeat),
    this.out.writeByte(0);
};
st.prototype.writePalette = function () {
  this.out.writeBytes(this.colorTab);
  for (var t = 3 * 256 - this.colorTab.length, e = 0; e < t; e++)
    this.out.writeByte(0);
};
st.prototype.writeShort = function (t) {
  this.out.writeByte(t & 255), this.out.writeByte((t >> 8) & 255);
};
st.prototype.writePixels = function () {
  var t = new gc(this.width, this.height, this.indexedPixels, this.colorDepth);
  t.encode(this.out);
};
st.prototype.stream = function () {
  return this.out;
};
var pc =
  (globalThis && globalThis.__awaiter) ||
  function (t, e, n, r) {
    function s(i) {
      return i instanceof n
        ? i
        : new n(function (o) {
            o(i);
          });
    }
    return new (n || (n = Promise))(function (i, o) {
      function l(h) {
        try {
          f(r.next(h));
        } catch (d) {
          o(d);
        }
      }
      function a(h) {
        try {
          f(r.throw(h));
        } catch (d) {
          o(d);
        }
      }
      function f(h) {
        h.done ? i(h.value) : s(h.value).then(l, a);
      }
      f((r = r.apply(t, e || [])).next());
    });
  };
const { Canvas: Wt } = ka,
  cn = 0.4;
function ws(t) {
  if (!t) return;
  function e(n) {
    (n.onload = null), (n.onerror = null);
  }
  return new Promise(function (n, r) {
    if (t.slice(0, 4) == "data") {
      let i = new Image();
      (i.onload = function () {
        n(i), e(i);
      }),
        (i.onerror = function () {
          r("Image load error"), e(i);
        }),
        (i.src = t);
      return;
    }
    let s = new Image();
    s.setAttribute("crossOrigin", "Anonymous"),
      (s.onload = function () {
        n(s);
      }),
      (s.onerror = function () {
        r("Image load error");
      }),
      (s.src = t);
  });
}
class et {
  constructor(e) {
    const n = Object.assign({}, e);
    if (
      (Object.keys(et.defaultOptions).forEach((r) => {
        r in n ||
          Object.defineProperty(n, r, {
            value: et.defaultOptions[r],
            enumerable: !0,
            writable: !0,
          });
      }),
      n.components
        ? typeof n.components == "object" &&
          Object.keys(et.defaultComponentOptions).forEach((r) => {
            r in n.components
              ? Object.defineProperty(n.components, r, {
                  value: Object.assign(
                    Object.assign({}, et.defaultComponentOptions[r]),
                    n.components[r]
                  ),
                  enumerable: !0,
                  writable: !0,
                })
              : Object.defineProperty(n.components, r, {
                  value: et.defaultComponentOptions[r],
                  enumerable: !0,
                  writable: !0,
                });
          })
        : (n.components = et.defaultComponentOptions),
      n.dotScale !== null && n.dotScale !== void 0)
    ) {
      if (n.dotScale <= 0 || n.dotScale > 1)
        throw new Error("dotScale should be in range (0, 1].");
      (n.components.data.scale = n.dotScale),
        (n.components.timing.scale = n.dotScale),
        (n.components.alignment.scale = n.dotScale);
    }
    (this.options = n),
      (this.canvas = new Wt(e.size, e.size)),
      (this.canvasContext = this.canvas.getContext("2d")),
      (this.qrCode = new ie(-1, this.options.correctLevel)),
      Number.isInteger(this.options.maskPattern) &&
        (this.qrCode.maskPattern = this.options.maskPattern),
      Number.isInteger(this.options.version) &&
        (this.qrCode.typeNumber = this.options.version),
      this.qrCode.addData(this.options.text),
      this.qrCode.make();
  }
  draw() {
    return new Promise((e) => this._draw().then(e));
  }
  _clear() {
    this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  static _prepareRoundedCornerClip(e, n, r, s, i, o) {
    e.beginPath(),
      e.moveTo(n, r),
      e.arcTo(n + s, r, n + s, r + i, o),
      e.arcTo(n + s, r + i, n, r + i, o),
      e.arcTo(n, r + i, n, r, o),
      e.arcTo(n, r, n + s, r, o),
      e.closePath();
  }
  static _getAverageRGB(e) {
    const r = { r: 0, g: 0, b: 0 };
    let s,
      i,
      o = -4;
    const l = { r: 0, g: 0, b: 0 };
    let a = 0;
    (i = e.naturalHeight || e.height), (s = e.naturalWidth || e.width);
    const h = new Wt(s, i).getContext("2d");
    if (!h) return r;
    h.drawImage(e, 0, 0);
    let d;
    try {
      d = h.getImageData(0, 0, s, i);
    } catch {
      return r;
    }
    for (; (o += 5 * 4) < d.data.length; )
      d.data[o] > 200 ||
        d.data[o + 1] > 200 ||
        d.data[o + 2] > 200 ||
        (++a,
        (l.r += d.data[o]),
        (l.g += d.data[o + 1]),
        (l.b += d.data[o + 2]));
    return (l.r = ~~(l.r / a)), (l.g = ~~(l.g / a)), (l.b = ~~(l.b / a)), l;
  }
  static _drawDot(e, n, r, s, i = 0, o = 1) {
    e.fillRect((n + i) * s, (r + i) * s, o * s, o * s);
  }
  static _drawAlignProtector(e, n, r, s) {
    e.clearRect((n - 2) * s, (r - 2) * s, 5 * s, 5 * s),
      e.fillRect((n - 2) * s, (r - 2) * s, 5 * s, 5 * s);
  }
  static _drawAlign(e, n, r, s, i = 0, o = 1, l, a) {
    const f = e.fillStyle;
    (e.fillStyle = l),
      new Array(4).fill(0).map((h, d) => {
        et._drawDot(e, n - 2 + d, r - 2, s, i, o),
          et._drawDot(e, n + 2, r - 2 + d, s, i, o),
          et._drawDot(e, n + 2 - d, r + 2, s, i, o),
          et._drawDot(e, n - 2, r + 2 - d, s, i, o);
      }),
      et._drawDot(e, n, r, s, i, o),
      a ||
        ((e.fillStyle = "rgba(255, 255, 255, 0.6)"),
        new Array(2).fill(0).map((h, d) => {
          et._drawDot(e, n - 1 + d, r - 1, s, i, o),
            et._drawDot(e, n + 1, r - 1 + d, s, i, o),
            et._drawDot(e, n + 1 - d, r + 1, s, i, o),
            et._drawDot(e, n - 1, r + 1 - d, s, i, o);
        })),
      (e.fillStyle = f);
  }
  _draw() {
    var e, n, r, s, i, o, l, a, f, h, d, m, A, R, O, W, w, E, T;
    return pc(this, void 0, void 0, function* () {
      const y =
          (e = this.qrCode) === null || e === void 0 ? void 0 : e.moduleCount,
        M = this.options.size;
      let _ = this.options.margin;
      (_ < 0 || _ * 2 >= M) && (_ = 0);
      const B = Math.ceil(_),
        k = M - 2 * _,
        V = this.options.whiteMargin,
        J = this.options.backgroundDimming,
        v = Math.ceil(k / y),
        Y = v * y,
        F = Y + 2 * B,
        Q = new Wt(F, F),
        D = Q.getContext("2d");
      this._clear(), D.save(), D.translate(B, B);
      const lt = new Wt(F, F),
        U = lt.getContext("2d");
      let q = null,
        mt = [];
      if (this.options.gifBackground) {
        const $ = Xa(this.options.gifBackground);
        if (((q = $), (mt = Ya($, !0)), this.options.autoColor)) {
          let H = 0,
            c = 0,
            u = 0,
            g = 0;
          for (let b = 0; b < mt[0].colorTable.length; b++) {
            const p = mt[0].colorTable[b];
            p[0] > 200 ||
              p[1] > 200 ||
              p[2] > 200 ||
              (p[0] === 0 && p[1] === 0 && p[2] === 0) ||
              (g++, (H += p[0]), (c += p[1]), (u += p[2]));
          }
          (H = ~~(H / g)),
            (c = ~~(c / g)),
            (u = ~~(u / g)),
            (this.options.colorDark = `rgb(${H},${c},${u})`);
        }
      } else if (this.options.backgroundImage) {
        const $ = yield ws(this.options.backgroundImage);
        if (this.options.autoColor) {
          const H = et._getAverageRGB($);
          this.options.colorDark = `rgb(${H.r},${H.g},${H.b})`;
        }
        U.drawImage($, 0, 0, $.width, $.height, 0, 0, F, F),
          U.rect(0, 0, F, F),
          (U.fillStyle = J),
          U.fill();
      } else
        U.rect(0, 0, F, F), (U.fillStyle = this.options.colorLight), U.fill();
      const it = nt.getPatternPosition(this.qrCode.typeNumber),
        ht =
          ((r =
            (n = this.options.components) === null || n === void 0
              ? void 0
              : n.data) === null || r === void 0
            ? void 0
            : r.scale) || cn,
        Pt = (1 - ht) * 0.5;
      for (let $ = 0; $ < y; $++)
        for (let H = 0; H < y; H++) {
          const c = this.qrCode.isDark($, H),
            u = (H < 8 && ($ < 8 || $ >= y - 8)) || (H >= y - 8 && $ < 8),
            g =
              ($ == 6 && H >= 8 && H <= y - 8) ||
              (H == 6 && $ >= 8 && $ <= y - 8);
          let b = u || g;
          for (let P = 1; P < it.length - 1; P++)
            b =
              b ||
              ($ >= it[P] - 2 &&
                $ <= it[P] + 2 &&
                H >= it[P] - 2 &&
                H <= it[P] + 2);
          const p = H * v + (b ? 0 : Pt * v),
            x = $ * v + (b ? 0 : Pt * v);
          if (
            ((D.strokeStyle = c
              ? this.options.colorDark
              : this.options.colorLight),
            (D.lineWidth = 0.5),
            (D.fillStyle = c
              ? this.options.colorDark
              : this.options.colorLight),
            it.length === 0)
          )
            b || D.fillRect(p, x, (b ? 1 : ht) * v, (b ? 1 : ht) * v);
          else {
            const P =
              H < y - 4 && H >= y - 4 - 5 && $ < y - 4 && $ >= y - 4 - 5;
            !b && !P && D.fillRect(p, x, (b ? 1 : ht) * v, (b ? 1 : ht) * v);
          }
        }
      const yt = it[it.length - 1],
        On = this.options.colorLight;
      if (
        ((D.fillStyle = On),
        D.fillRect(0, 0, 8 * v, 8 * v),
        D.fillRect(0, (y - 8) * v, 8 * v, 8 * v),
        D.fillRect((y - 8) * v, 0, 8 * v, 8 * v),
        !(
          (i =
            (s = this.options.components) === null || s === void 0
              ? void 0
              : s.timing) === null || i === void 0
        ) &&
          i.protectors &&
          (D.fillRect(8 * v, 6 * v, (y - 8 - 8) * v, v),
          D.fillRect(6 * v, 8 * v, v, (y - 8 - 8) * v)),
        !(
          (l =
            (o = this.options.components) === null || o === void 0
              ? void 0
              : o.cornerAlignment) === null || l === void 0
        ) &&
          l.protectors &&
          et._drawAlignProtector(D, yt, yt, v),
        !(
          (f =
            (a = this.options.components) === null || a === void 0
              ? void 0
              : a.alignment) === null || f === void 0
        ) && f.protectors)
      )
        for (let $ = 0; $ < it.length; $++)
          for (let H = 0; H < it.length; H++) {
            const c = it[H],
              u = it[$];
            if (!(c === 6 && (u === 6 || u === yt))) {
              if (u === 6 && (c === 6 || c === yt)) continue;
              if (c === yt && u === yt) continue;
              et._drawAlignProtector(D, c, u, v);
            }
          }
      (D.fillStyle = this.options.colorDark),
        D.fillRect(0, 0, 7 * v, v),
        D.fillRect((y - 7) * v, 0, 7 * v, v),
        D.fillRect(0, 6 * v, 7 * v, v),
        D.fillRect((y - 7) * v, 6 * v, 7 * v, v),
        D.fillRect(0, (y - 7) * v, 7 * v, v),
        D.fillRect(0, (y - 7 + 6) * v, 7 * v, v),
        D.fillRect(0, 0, v, 7 * v),
        D.fillRect(6 * v, 0, v, 7 * v),
        D.fillRect((y - 7) * v, 0, v, 7 * v),
        D.fillRect((y - 7 + 6) * v, 0, v, 7 * v),
        D.fillRect(0, (y - 7) * v, v, 7 * v),
        D.fillRect(6 * v, (y - 7) * v, v, 7 * v),
        D.fillRect(2 * v, 2 * v, 3 * v, 3 * v),
        D.fillRect((y - 7 + 2) * v, 2 * v, 3 * v, 3 * v),
        D.fillRect(2 * v, (y - 7 + 2) * v, 3 * v, 3 * v);
      const Re =
          ((d =
            (h = this.options.components) === null || h === void 0
              ? void 0
              : h.timing) === null || d === void 0
            ? void 0
            : d.scale) || cn,
        Qt = (1 - Re) * 0.5;
      for (let $ = 0; $ < y - 8; $ += 2)
        et._drawDot(D, 8 + $, 6, v, Qt, Re),
          et._drawDot(D, 6, 8 + $, v, Qt, Re);
      const ue =
          ((A =
            (m = this.options.components) === null || m === void 0
              ? void 0
              : m.cornerAlignment) === null || A === void 0
            ? void 0
            : A.scale) || cn,
        Fe = (1 - ue) * 0.5;
      et._drawAlign(
        D,
        yt,
        yt,
        v,
        Fe,
        ue,
        this.options.colorDark,
        ((O =
          (R = this.options.components) === null || R === void 0
            ? void 0
            : R.cornerAlignment) === null || O === void 0
          ? void 0
          : O.protectors) || !1
      );
      const ke =
          ((w =
            (W = this.options.components) === null || W === void 0
              ? void 0
              : W.alignment) === null || w === void 0
            ? void 0
            : w.scale) || cn,
        te = (1 - ke) * 0.5;
      for (let $ = 0; $ < it.length; $++)
        for (let H = 0; H < it.length; H++) {
          const c = it[H],
            u = it[$];
          if (!(c === 6 && (u === 6 || u === yt))) {
            if (u === 6 && (c === 6 || c === yt)) continue;
            if (c === yt && u === yt) continue;
            et._drawAlign(
              D,
              c,
              u,
              v,
              te,
              ke,
              this.options.colorDark,
              ((T =
                (E = this.options.components) === null || E === void 0
                  ? void 0
                  : E.alignment) === null || T === void 0
                ? void 0
                : T.protectors) || !1
            );
          }
        }
      if (
        (V &&
          ((D.fillStyle = this.options.backgroundColor),
          D.fillRect(-B, -B, F, B),
          D.fillRect(-B, Y, F, B),
          D.fillRect(Y, -B, B, F),
          D.fillRect(-B, -B, B, F)),
        this.options.logoImage)
      ) {
        const $ = yield ws(this.options.logoImage);
        let H = this.options.logoScale,
          c = this.options.logoMargin,
          u = this.options.logoCornerRadius;
        (H <= 0 || H >= 1) && (H = 0.2), c < 0 && (c = 0), u < 0 && (u = 0);
        const g = Y * H,
          b = 0.5 * (F - g),
          p = b;
        D.restore(),
          (D.fillStyle = this.options.logoBackgroundColor),
          D.save(),
          et._prepareRoundedCornerClip(
            D,
            b - c,
            p - c,
            g + 2 * c,
            g + 2 * c,
            u + c
          ),
          D.clip();
        const x = D.globalCompositeOperation;
        (D.globalCompositeOperation = "destination-out"),
          D.fill(),
          (D.globalCompositeOperation = x),
          D.restore(),
          D.save(),
          et._prepareRoundedCornerClip(D, b, p, g, g, u),
          D.clip(),
          D.drawImage($, b, p, g, g),
          D.restore(),
          D.save(),
          D.translate(B, B);
      }
      if (q) {
        let $, H, c, u, g, b;
        if (
          (mt.forEach(function (p) {
            $ || (($ = new st(M, M)), $.setDelay(p.delay), $.setRepeat(0));
            const { width: x, height: P } = p.dims;
            H ||
              ((H = new Wt(x, P)),
              (c = H.getContext("2d")),
              c.rect(0, 0, H.width, H.height),
              (c.fillStyle = "#ffffff"),
              c.fill()),
              (!u || !b || x !== u.width || P !== u.height) &&
                ((u = new Wt(x, P)),
                (g = u.getContext("2d")),
                (b = g.createImageData(x, P))),
              b.data.set(p.patch),
              g.putImageData(b, 0, 0),
              c.drawImage(u.getContext("2d").canvas, p.dims.left, p.dims.top);
            const S = new Wt(F, F),
              I = S.getContext("2d");
            I.drawImage(H.getContext("2d").canvas, 0, 0, F, F),
              I.rect(0, 0, F, F),
              (I.fillStyle = J),
              I.fill(),
              I.drawImage(Q.getContext("2d").canvas, 0, 0, F, F);
            const C = new Wt(M, M),
              L = C.getContext("2d");
            L.drawImage(S.getContext("2d").canvas, 0, 0, M, M),
              $.addFrame(L.getImageData(0, 0, C.width, C.height).data);
          }),
          !$)
        )
          throw new Error("No frames.");
        if (($.finish(), xs(this.canvas))) {
          const x = $.stream()
            .toFlattenUint8Array()
            .reduce((P, S) => P + String.fromCharCode(S), "");
          return Promise.resolve(`data:image/gif;base64,${window.btoa(x)}`);
        }
        return Promise.resolve(Buffer.from($.stream().toFlattenUint8Array()));
      } else {
        U.drawImage(Q.getContext("2d").canvas, 0, 0, F, F),
          D.drawImage(lt.getContext("2d").canvas, -B, -B, F, F);
        const $ = new Wt(M, M);
        $.getContext("2d").drawImage(Q.getContext("2d").canvas, 0, 0, M, M),
          (this.canvas = $);
        const c = this.options.gifBackground ? "gif" : "png";
        return xs(this.canvas)
          ? Promise.resolve(this.canvas.toDataURL(c))
          : Promise.resolve(this.canvas.toBuffer(c));
      }
    });
  }
}
et.CorrectLevel = wt;
et.defaultComponentOptions = {
  data: { scale: 0.4 },
  timing: { scale: 0.5, protectors: !1 },
  alignment: { scale: 0.5, protectors: !1 },
  cornerAlignment: { scale: 0.5, protectors: !0 },
};
et.defaultOptions = {
  text: "",
  size: 400,
  margin: 20,
  colorDark: "#000000",
  colorLight: "rgba(255, 255, 255, 0.6)",
  correctLevel: wt.M,
  backgroundImage: void 0,
  backgroundDimming: "rgba(0,0,0,0)",
  logoImage: void 0,
  logoScale: 0.2,
  logoMargin: 4,
  logoCornerRadius: 8,
  whiteMargin: !0,
  components: et.defaultComponentOptions,
  autoColor: !0,
  logoBackgroundColor: "#ffffff",
  backgroundColor: "#ffffff",
};
function xs(t) {
  try {
    return t instanceof HTMLElement;
  } catch {
    return (
      typeof t == "object" &&
      t.nodeType === 1 &&
      typeof t.style == "object" &&
      typeof t.ownerDocument == "object"
    );
  }
}
const Ri = (t, e) => {
    const n = t.__vccOpts || t;
    for (const [r, s] of e) n[r] = s;
    return n;
  },
  mc = {
    props: {
      text: { type: String, required: !0 },
      qid: { type: String },
      correctLevel: { type: Number, default: 1 },
      size: { type: Number, default: 200 },
      margin: { type: Number, default: 20 },
      colorDark: { type: String, default: "#000000" },
      colorLight: { type: String, default: "#FFFFFF" },
      bgSrc: { type: String, default: void 0 },
      background: { type: String, default: "rgba(0,0,0,0)" },
      backgroundDimming: { type: String, default: "rgba(0,0,0,0)" },
      logoSrc: { type: String, default: void 0 },
      logoBackgroundColor: { type: String, default: "rgba(255,255,255,1)" },
      gifBgSrc: { type: String, default: void 0 },
      logoScale: { type: Number, default: 0.2 },
      logoMargin: { type: Number, default: 0 },
      logoCornerRadius: { type: Number, default: 8 },
      whiteMargin: { type: [Boolean, String], default: !0 },
      dotScale: { type: Number, default: 1 },
      autoColor: { type: [Boolean, String], default: !0 },
      binarize: { type: [Boolean, String], default: !1 },
      binarizeThreshold: { type: Number, default: 128 },
      callback: { type: Function, default: function () {} },
      bindElement: { type: Boolean, default: !0 },
      backgroundColor: { type: String, default: "#FFFFFF" },
      components: {
        default: function () {
          return {
            data: { scale: 1 },
            timing: { scale: 1, protectors: !1 },
            alignment: { scale: 1, protectors: !1 },
            cornerAlignment: { scale: 1, protectors: !0 },
          };
        },
      },
    },
    name: "vue-qr",
    data() {
      return { imgUrl: "" };
    },
    watch: {
      $props: {
        deep: !0,
        handler() {
          this.main();
        },
      },
    },
    mounted() {
      this.main();
    },
    methods: {
      async main() {
        if (this.gifBgSrc) {
          const n = await pa(this.gifBgSrc),
            r = this.logoSrc;
          this.render(void 0, r, n);
          return;
        }
        const t = this.bgSrc,
          e = this.logoSrc;
        this.render(t, e);
      },
      async render(t, e, n) {
        const r = this;
        new et({
          gifBackground: n,
          text: r.text,
          size: r.size,
          margin: r.margin,
          colorDark: r.colorDark,
          colorLight: r.colorLight,
          backgroundColor: r.backgroundColor,
          backgroundImage: t,
          backgroundDimming: r.backgroundDimming,
          logoImage: e,
          logoScale: r.logoScale,
          logoBackgroundColor: r.logoBackgroundColor,
          correctLevel: r.correctLevel,
          logoMargin: r.logoMargin,
          logoCornerRadius: r.logoCornerRadius,
          whiteMargin: Kn(r.whiteMargin),
          dotScale: r.dotScale,
          autoColor: Kn(r.autoColor),
          binarize: Kn(r.binarize),
          binarizeThreshold: r.binarizeThreshold,
          components: r.components,
        })
          .draw()
          .then((s) => {
            (this.imgUrl = s), r.callback && r.callback(s, r.qid);
          });
      },
    },
  },
  bc = ["src"];
function vc(t, e, n, r, s, i) {
  return n.bindElement
    ? (be(),
      Ue(
        "img",
        { key: 0, style: { display: "inline-block" }, src: s.imgUrl },
        null,
        8,
        bc
      ))
    : sr("", !0);
}
const yc = Ri(mc, [["render", vc]]),
  Fi = "/about.svg";
const _c = {
    components: { vueQr: yc },
    data() {
      return {
        ui_params: {
          connected: !1,
          connected_device_name: "",
          mifitness_connected: !1,
          device_permission: !1,
          interconnect_tool_version: "unknown",
          qrcode_key: "",
        },
        logs: [],
      };
    },
    methods: {
      scrollToBottom() {
        const t = this.$refs.logBox;
        t.scrollTop = t.scrollHeight;
      },
      closeQR() {
        androidlib.ClearQRKey();
      },
      createQRCode() {
        new QRCode(this.$refs.qrCodeUrl, {
          text: this.ui_params.qrcode_key,
          width: 150,
          height: 150,
          colorDark: "#000",
          colorLight: "#fff",
          correctLevel: QRCode.CorrectLevel.H,
        });
      },
    },
    mounted() {
      setInterval(() => {
        (this.ui_params = JSON.parse(androidlib.GetUIParams())),
          (this.logs = JSON.parse(androidlib.GetLogs())),
          this.scrollToBottom(),
          this.ui_params.qrcode_key && this.createQRCode();
      }, 1e3);
    },
  },
  wc = ut("p", { class: "pagetitle" }, "腕管Pro", -1),
  xc = { class: "statusbox" },
  Cc = ["src"],
  Ec = { class: "statustext-container" },
  Ac = { class: "statustext" },
  Pc = {
    key: 0,
    class: "statustext",
    style: {
      "font-size": "23px",
      "font-weight": "500",
      "margin-top": "-15px",
      "max-lines": "1",
      "text-overflow": "ellipsis",
    },
  },
  Tc = { class: "infobox", style: { "margin-top": "20px", height: "251px" } },
  Sc = ut(
    "div",
    { class: "infotext", style: { "margin-top": "30px" } },
    "小米运动健康连接状态",
    -1
  ),
  Ic = { class: "infotext infodetail" },
  Mc = ut("div", { class: "infotext" }, "设备权限申请状态", -1),
  Bc = { class: "infotext infodetail" },
  Oc = ut("div", { class: "infotext" }, "腕管Pro同步器版本", -1),
  Dc = { class: "infotext infodetail" },
  Lc = Ml(
    '<div class="infobox" style="margin-top:20px;height:298px;"><div style="margin-top:20px;align-items:center;display:flex;flex-direction:row;margin-left:30px;"><img src="' +
      Fi +
      '"><div style="font-size:25px;font-weight:600;margin-left:15px;color:white;">关于本应用</div></div><div class="infotext" style="margin-top:10px;">参与制作的人员</div><div class="info-devname" style="margin-top:10px;">@Typheye</div><div class="info-devname" style="margin-top:10px;">@台风眼Typheye</div><div style="font-weight:600;font-size:22px;color:white;margin-top:10px;margin-left:30px;">本应用永久免费且开源</div><div style="font-weight:600;font-size:20px;color:white;margin-top:4px;margin-left:30px;">并遵循GPL-V3协议</div><div style="font-weight:600;font-size:20px;color:white;margin-top:4px;margin-left:30px;">禁止倒卖或违反开源协议</div></div>',
    1
  ),
  Rc = { class: "infobox", style: { "margin-top": "20px", height: "298px" } },
  Fc = ut(
    "div",
    {
      style: {
        "margin-top": "20px",
        "align-items": "center",
        display: "flex",
        "flex-direction": "row",
        "margin-left": "30px",
      },
    },
    [
      ut("img", { src: Fi }),
      ut(
        "div",
        {
          style: {
            "font-size": "25px",
            "font-weight": "600",
            "margin-left": "15px",
            color: "white",
          },
        },
        "日志"
      ),
    ],
    -1
  ),
  kc = {
    style: { width: "100%", display: "flex", "justify-content": "center" },
  },
  Nc = { class: "log-box", ref: "logBox" };
function $c(t, e, n, r, s, i) {
  const o = Ko("vue-qr");
  return (
    be(),
    Ue(
      Rt,
      null,
      [
        wc,
        ut("div", xc, [
          ut(
            "img",
            {
              class: "connectstatus",
              src: s.ui_params.connected ? "/true.svg" : "/empty.svg",
            },
            null,
            8,
            Cc
          ),
          ut("div", Ec, [
            ut(
              "p",
              Ac,
              ge(s.ui_params.connected ? "已连接设备" : "设备未连接"),
              1
            ),
            s.ui_params.connected
              ? (be(), Ue("p", Pc, ge(s.ui_params.connected_device_name), 1))
              : sr("", !0),
          ]),
        ]),
        ut("div", Tc, [
          Sc,
          ut(
            "div",
            Ic,
            ge(s.ui_params.mifitness_connected ? "已连接" : "未连接"),
            1
          ),
          Mc,
          ut(
            "div",
            Bc,
            ge(s.ui_params.device_permission ? "已授权" : "未授权"),
            1
          ),
          Oc,
          ut("div", Dc, ge(s.ui_params.interconnect_tool_version), 1),
        ]),
        Lc,
        ut("div", Rc, [
          Fc,
          ut("div", kc, [
            ut(
              "div",
              Nc,
              [
                (be(!0),
                Ue(
                  Rt,
                  null,
                  Vo(
                    s.logs,
                    (l, a) => (
                      be(),
                      Ue(
                        "div",
                        {
                          style: { color: "gray", "font-size": "14px" },
                          key: a,
                        },
                        ge(l),
                        1
                      )
                    )
                  ),
                  128
                )),
              ],
              512
            ),
          ]),
        ]),
        s.ui_params.qrcode_key
          ? (be(),
            _i(
              o,
              {
                key: 0,
                text: s.ui_params.qrcode_key,
                class: "qr-code",
                onClick: i.closeQR,
              },
              null,
              8,
              ["text", "onClick"]
            ))
          : sr("", !0),
      ],
      64
    )
  );
}
const jc = Ri(_c, [["render", $c]]);
ha(jc).mount("#app");
