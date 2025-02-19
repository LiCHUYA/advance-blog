import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, k as createBaseVNode, a as createTextVNode, R as createStaticVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
const _imports_0 = "/advance-blog/assets/image-20240902201524538.rtvYYADM.png";
const _imports_1 = "/advance-blog/assets/image-20240902201855126.cEyE5GY0.png";
const __pageData = JSON.parse('{"title":"JSON","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/01-学习笔记/01-js高级plus/21-_JSON序列化与深浅拷贝.md","filePath":"src/study-notes/01-学习笔记/01-js高级plus/21-_JSON序列化与深浅拷贝.md","lastUpdated":1739460242000}');
const _sfc_main = { name: "src/study-notes/01-学习笔记/01-js高级plus/21-_JSON序列化与深浅拷贝.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "json",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("JSON "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#json",
    "aria-label": 'Permalink to "JSON"'
  }, "​")
], -1);
const _hoisted_2 = /* @__PURE__ */ createStaticVNode("", 29);
const _hoisted_31 = /* @__PURE__ */ createStaticVNode("", 47);
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
    _hoisted_31
  ]);
}
const _21_JSON________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _21_JSON________ as default
};
