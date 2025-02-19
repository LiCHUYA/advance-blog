import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, k as createBaseVNode, a as createTextVNode, R as createStaticVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"CSS3 的 calc 函数","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/02-基础知识/02-CSS/14-CSS3的calc函数.md","filePath":"src/study-notes/02-基础知识/02-CSS/14-CSS3的calc函数.md","lastUpdated":1739501366000}');
const _sfc_main = { name: "src/study-notes/02-基础知识/02-CSS/14-CSS3的calc函数.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "css3-的-calc-函数",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("em", null, "CSS3"),
  /* @__PURE__ */ createTextVNode(" 的 "),
  /* @__PURE__ */ createBaseVNode("em", null, "calc"),
  /* @__PURE__ */ createTextVNode(" 函数 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#css3-的-calc-函数",
    "aria-label": 'Permalink to "*CSS3* 的 *calc* 函数"'
  }, "​")
], -1);
const _hoisted_2 = /* @__PURE__ */ createStaticVNode("", 20);
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
    _hoisted_2
  ]);
}
const _14CSS3_calc__ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _14CSS3_calc__ as default
};
