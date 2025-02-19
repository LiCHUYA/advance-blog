import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, k as createBaseVNode, a as createTextVNode, R as createStaticVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
const _imports_0 = "/advance-blog/assets/image-20240904214147555.2t3FnZ8h.png";
const _imports_1 = "/advance-blog/assets/image-20240904215632385.Nc-w63tK.png";
const _imports_2 = "/advance-blog/assets/image-20240904221748332.h3bPyegL.png";
const _imports_3 = "/advance-blog/assets/image-20240904223951199.CVGecJsG.png";
const _imports_4 = "/advance-blog/assets/image-20240907094518627.eiY6Jg6j.png";
const _imports_5 = "/advance-blog/assets/image-20240907094613276.CRv4F5d4.png";
const __pageData = JSON.parse('{"title":"组件库","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/05-开源经历/01-index/03-组件库.md","filePath":"src/study-notes/05-开源经历/01-index/03-组件库.md","lastUpdated":1739460242000}');
const _sfc_main = { name: "src/study-notes/05-开源经历/01-index/03-组件库.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "组件库",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("组件库 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#组件库",
    "aria-label": 'Permalink to "组件库"'
  }, "​")
], -1);
const _hoisted_2 = /* @__PURE__ */ createStaticVNode("", 132);
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
const _03____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _03____ as default
};
