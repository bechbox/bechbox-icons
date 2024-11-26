var I = Object.defineProperty;
var l = Object.getOwnPropertySymbols;
var w = Object.prototype.hasOwnProperty, h = Object.prototype.propertyIsEnumerable;
var m = (t, o, e) => o in t ? I(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, s = (t, o) => {
  for (var e in o || (o = {}))
    w.call(o, e) && m(t, e, o[e]);
  if (l)
    for (var e of l(o))
      h.call(o, e) && m(t, e, o[e]);
  return t;
};
var a = (t, o) => {
  var e = {};
  for (var r in t)
    w.call(t, r) && o.indexOf(r) < 0 && (e[r] = t[r]);
  if (t != null && l)
    for (var r of l(t))
      o.indexOf(r) < 0 && h.call(t, r) && (e[r] = t[r]);
  return e;
};
import f, { forwardRef as E, useContext as R } from "react";
import { IconContext as y } from "./context.mjs";
const N = E((t, o) => {
  const x = t, { alt: e, color: r, size: n, weight: c, children: p, weights: u } = x, d = a(x, ["alt", "color", "size", "weight", "children", "weights"]), g = R(y), {
    color: C = "currentColor",
    size: i,
    weight: v = "regular"
  } = g, B = a(g, [
    "color",
    "size",
    "weight"
  ]);
  return /* @__PURE__ */ f.createElement(
    "svg",
    s(s({
      ref: o,
      xmlns: "http://www.w3.org/2000/svg",
      width: n != null ? n : i,
      height: n != null ? n : i,
      fill: r != null ? r : C,
      viewBox: "0 0 256 256"
    }, B), d),
    !!e && /* @__PURE__ */ f.createElement("title", null, e),
    p,
    u.get(c != null ? c : v)
  );
});
N.displayName = "IconBase";
export {
  N as default
};
