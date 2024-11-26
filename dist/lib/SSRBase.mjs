var u = Object.defineProperty;
var o = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty, w = Object.prototype.propertyIsEnumerable;
var i = (e, r, t) => r in e ? u(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, c = (e, r) => {
  for (var t in r || (r = {}))
    n.call(r, t) && i(e, t, r[t]);
  if (o)
    for (var t of o(r))
      w.call(r, t) && i(e, t, r[t]);
  return e;
};
var g = (e, r) => {
  var t = {};
  for (var l in e)
    n.call(e, l) && r.indexOf(l) < 0 && (t[l] = e[l]);
  if (e != null && o)
    for (var l of o(e))
      r.indexOf(l) < 0 && w.call(e, l) && (t[l] = e[l]);
  return t;
};
import h, { forwardRef as R } from "react";
const S = R((e, r) => {
  const a = e, {
    alt: t,
    color: l = "currentColor",
    size: s = "1em",
    weight: m = "regular",
    children: d,
    weights: f
  } = a, p = g(a, [
    "alt",
    "color",
    "size",
    "weight",
    "children",
    "weights"
  ]);
  return /* @__PURE__ */ h.createElement(
    "svg",
    c({
      ref: r,
      xmlns: "http://www.w3.org/2000/svg",
      width: s,
      height: s,
      fill: l,
      viewBox: "0 0 256 256"
    }, p),
    !!t && /* @__PURE__ */ h.createElement("title", null, t),
    d,
    f.get(m)
  );
});
S.displayName = "SSRBase";
export {
  S as default
};
