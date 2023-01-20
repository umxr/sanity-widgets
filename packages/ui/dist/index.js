"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Banner: () => Banner,
  Button: () => Button,
  Container: () => Container,
  SanityImage: () => SanityImage,
  bannerQuery: () => bannerQuery
});
module.exports = __toCommonJS(src_exports);

// src/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rounded-md ", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: "https://turbo.build/repo/docs", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white no-underline hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-300 md:py-3 md:px-10 md:text-lg md:leading-6", children: [
    "Read the docs",
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-2 bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent", children: "\u2192" })
  ] }) }) });
};

// src/Banner.tsx
var import_next_sanity = require("next-sanity");
var import_jsx_runtime2 = require("react/jsx-runtime");
var bannerQuery = import_next_sanity.groq`
  _type == "banner" => {
    _id,
    _type,
    title,
    subtitle,
    description,
    "image": image.asset -> url,
  }
`;
var Banner = ({
  title,
  subtitle,
  description,
  image
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "relative shadow-xl sm:overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "img",
        {
          className: "h-full w-full object-cover",
          src: image,
          alt: "Banner Image"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "absolute inset-0 bg-indigo-700 mix-blend-multiply" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "relative py-16 px-6 sm:py-24 lg:py-32 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("h1", { className: "text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "block text-white", children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "block text-indigo-200", children: subtitle })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl", children: description })
    ] })
  ] });
};

// src/Container.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var Container = ({ className = "", children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: `mx-auto max-w-7xl sm:px-6 lg:px-8 ${className}`, children });
};

// src/SanityImage.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var SanityImage = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { children: "Hello World" });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Banner,
  Button,
  Container,
  SanityImage,
  bannerQuery
});
