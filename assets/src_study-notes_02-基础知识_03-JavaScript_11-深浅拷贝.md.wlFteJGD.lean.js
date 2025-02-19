import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, k as createBaseVNode, a as createTextVNode, R as createStaticVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"深浅拷贝","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/02-基础知识/03-JavaScript/11-深浅拷贝.md","filePath":"src/study-notes/02-基础知识/03-JavaScript/11-深浅拷贝.md","lastUpdated":1739501366000}');
const _sfc_main = { name: "src/study-notes/02-基础知识/03-JavaScript/11-深浅拷贝.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "深浅拷贝",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("深浅拷贝 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#深浅拷贝",
    "aria-label": 'Permalink to "深浅拷贝"'
  }, "​")
], -1);
const _hoisted_2 = /* @__PURE__ */ createStaticVNode("", 76);
const _hoisted_78 = /* @__PURE__ */ createBaseVNode("p", null, "参考答案：", -1);
const _hoisted_79 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("p", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "浅拷贝"),
      /* @__PURE__ */ createTextVNode("：只是拷贝了基本类型的数据，而引用类型数据，复制后也是会发生引用，我们把这种拷贝叫做浅拷贝（浅复制）")
    ]),
    /* @__PURE__ */ createBaseVNode("p", null, "浅拷贝只复制指向某个对象的指针，而不复制对象本身，新旧对象还是共享同一块内存。")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("p", null, [
      /* @__PURE__ */ createBaseVNode("strong", null, "深拷贝"),
      /* @__PURE__ */ createTextVNode("：在堆中重新分配内存，并且把源对象所有属性都进行新建拷贝，以保证深拷贝的对象的引用图不包含任何原有对象或对象图上的任何对象，拷贝后的对象与原来的对象是完全隔离，互不影响。")
    ])
  ])
], -1);
const _hoisted_80 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("strong", null, "浅拷贝方法")
], -1);
const _hoisted_81 = /* @__PURE__ */ createStaticVNode("", 5);
const _hoisted_86 = /* @__PURE__ */ createBaseVNode("em", null, "jQuery", -1);
const _hoisted_87 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_88 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.464ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "31.55ex",
  height: "2.161ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 13945 955",
  "aria-hidden": "true"
};
const _hoisted_89 = /* @__PURE__ */ createStaticVNode("", 1);
const _hoisted_90 = [
  _hoisted_89
];
const _hoisted_91 = /* @__PURE__ */ createBaseVNode("mjx-assistive-mml", {
  unselectable: "on",
  display: "inline",
  style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
}, [
  /* @__PURE__ */ createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
    /* @__PURE__ */ createBaseVNode("mo", null, "."),
    /* @__PURE__ */ createBaseVNode("mi", null, "e"),
    /* @__PURE__ */ createBaseVNode("mi", null, "x"),
    /* @__PURE__ */ createBaseVNode("mi", null, "t"),
    /* @__PURE__ */ createBaseVNode("mi", null, "e"),
    /* @__PURE__ */ createBaseVNode("mi", null, "n"),
    /* @__PURE__ */ createBaseVNode("mi", null, "d"),
    /* @__PURE__ */ createBaseVNode("mo", null, "∗"),
    /* @__PURE__ */ createBaseVNode("mi", null, "："),
    /* @__PURE__ */ createBaseVNode("mi", { mathvariant: "normal" }, "在"),
    /* @__PURE__ */ createBaseVNode("mo", null, "∗"),
    /* @__PURE__ */ createBaseVNode("mi", null, "j"),
    /* @__PURE__ */ createBaseVNode("mi", null, "Q"),
    /* @__PURE__ */ createBaseVNode("mi", null, "u"),
    /* @__PURE__ */ createBaseVNode("mi", null, "e"),
    /* @__PURE__ */ createBaseVNode("mi", null, "r"),
    /* @__PURE__ */ createBaseVNode("mi", null, "y"),
    /* @__PURE__ */ createBaseVNode("mo", null, "∗"),
    /* @__PURE__ */ createBaseVNode("mi", { mathvariant: "normal" }, "中"),
    /* @__PURE__ */ createBaseVNode("mi", null, "，"),
    /* @__PURE__ */ createBaseVNode("mo", null, "∗")
  ])
], -1);
const _hoisted_92 = /* @__PURE__ */ createBaseVNode("em", null, "deep", -1);
const _hoisted_93 = /* @__PURE__ */ createBaseVNode("em", null, "true", -1);
const _hoisted_94 = /* @__PURE__ */ createBaseVNode("em", null, "false", -1);
const _hoisted_95 = /* @__PURE__ */ createStaticVNode("", 4);
const _hoisted_99 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("-"),
  /* @__PURE__ */ createBaseVNode("em", null, "EOF"),
  /* @__PURE__ */ createTextVNode("-")
], -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ArticleMetadata = __unplugin_components_4;
  const _component_ClientOnly = resolveComponent("ClientOnly");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createVNode(_component_ClientOnly, null, {
      default: withCtx(() => {
        var _a, _b;
        return [
          (((_a = _ctx.$frontmatter) == null ? void 0 : _a.aside) ?? true) && (((_b = _ctx.$frontmatter) == null ? void 0 : _b.showArticleMetadata) ?? true) ? (openBlock(), createBlock(_component_ArticleMetadata, {
            key: 0,
            article: _ctx.$frontmatter
          }, null, 8, ["article"])) : createCommentVNode("", true)
        ];
      }),
      _: 1
    }),
    _hoisted_2,
    createBaseVNode("blockquote", null, [
      _hoisted_78,
      _hoisted_79,
      _hoisted_80,
      createBaseVNode("ol", null, [
        _hoisted_81,
        createBaseVNode("li", null, [
          _hoisted_86,
          createTextVNode(" 中的 "),
          createBaseVNode("em", null, [
            createBaseVNode("mjx-container", _hoisted_87, [
              (openBlock(), createElementBlock("svg", _hoisted_88, _hoisted_90)),
              _hoisted_91
            ]),
            createTextVNode(".extend(deep,target,object1,objectN)")
          ]),
          createTextVNode(" 方法可以进行深浅拷贝。"),
          _hoisted_92,
          createTextVNode(" 如过设为 "),
          _hoisted_93,
          createTextVNode(" 为深拷贝，默认是 "),
          _hoisted_94,
          createTextVNode(" 浅拷贝。")
        ])
      ]),
      _hoisted_95
    ]),
    _hoisted_99
  ]);
}
const _11_____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _11_____ as default
};
