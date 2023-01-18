// src/Button.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Button = () => {
  return /* @__PURE__ */ jsx("div", {
    className: "rounded-md ",
    children: /* @__PURE__ */ jsx("a", {
      href: "https://turbo.build/repo/docs",
      children: /* @__PURE__ */ jsxs("div", {
        className: "flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white no-underline hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-300 md:py-3 md:px-10 md:text-lg md:leading-6",
        children: [
          "Read the docs",
          /* @__PURE__ */ jsx("span", {
            className: "ml-2 bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent",
            children: "\u2192"
          })
        ]
      })
    })
  });
};

// src/Banner.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var Banner = ({
  title,
  subtitle,
  description,
  image
}) => {
  return /* @__PURE__ */ jsxs2("div", {
    className: "relative shadow-xl sm:overflow-hidden",
    children: [
      /* @__PURE__ */ jsxs2("div", {
        className: "absolute inset-0",
        children: [
          /* @__PURE__ */ jsx2("img", {
            className: "h-full w-full object-cover",
            src: image,
            alt: "Banner Image"
          }),
          /* @__PURE__ */ jsx2("div", {
            className: "absolute inset-0 bg-indigo-700 mix-blend-multiply"
          })
        ]
      }),
      /* @__PURE__ */ jsxs2("div", {
        className: "relative py-16 px-6 sm:py-24 lg:py-32 lg:px-8",
        children: [
          /* @__PURE__ */ jsxs2("h1", {
            className: "text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl",
            children: [
              /* @__PURE__ */ jsx2("span", {
                className: "block text-white",
                children: title
              }),
              /* @__PURE__ */ jsx2("span", {
                className: "block text-indigo-200",
                children: subtitle
              })
            ]
          }),
          /* @__PURE__ */ jsx2("p", {
            className: "mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl",
            children: description
          })
        ]
      })
    ]
  });
};

// src/Container.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var Container = ({ className = "", children }) => {
  return /* @__PURE__ */ jsx3("div", {
    className: `mx-auto max-w-7xl sm:px-6 lg:px-8 ${className}`,
    children
  });
};
export {
  Banner,
  Button,
  Container
};
