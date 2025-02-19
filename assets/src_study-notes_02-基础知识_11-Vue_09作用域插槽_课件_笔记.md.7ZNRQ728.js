import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, k as createBaseVNode, a as createTextVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"作用域插槽","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/02-基础知识/11-Vue/09作用域插槽/课件/笔记.md","filePath":"src/study-notes/02-基础知识/11-Vue/09作用域插槽/课件/笔记.md","lastUpdated":1739501366000}');
const _sfc_main = { name: "src/study-notes/02-基础知识/11-Vue/09作用域插槽/课件/笔记.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "作用域插槽",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("作用域插槽 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#作用域插槽",
    "aria-label": 'Permalink to "作用域插槽"'
  }, "​")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("参见官网文档："),
  /* @__PURE__ */ createBaseVNode("a", {
    href: "https://cn.vuejs.org/v2/guide/components-slots.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD",
    target: "_blank",
    rel: "noreferrer"
  }, "https://cn.vuejs.org/v2/guide/components-slots.html#作用域插槽")
], -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "属性：", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("code", null, "$slots"),
    /* @__PURE__ */ createTextVNode("：用于访问父组件传递的普通插槽中的vnode")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("code", null, "$scopedSlots"),
    /* @__PURE__ */ createTextVNode("：用于访问父组件传递的所有用于生成vnode的函数（包括默认插槽在内）")
  ])
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
    _hoisted_3,
    _hoisted_4
  ]);
}
const __ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  __ as default
};
