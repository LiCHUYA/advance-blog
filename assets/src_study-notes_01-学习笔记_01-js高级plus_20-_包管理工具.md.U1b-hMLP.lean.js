import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, k as createBaseVNode, a as createTextVNode, R as createStaticVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
const _imports_0 = "/advance-blog/assets/image-20240902111112235.2wslr-aa.png";
const _imports_1 = "/advance-blog/assets/image-20240902111128295.xUjUlszA.png";
const _imports_2 = "/advance-blog/assets/image-20240902195134826.qkm_td1B.png";
const __pageData = JSON.parse('{"title":"包管理工具","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/01-学习笔记/01-js高级plus/20-_包管理工具.md","filePath":"src/study-notes/01-学习笔记/01-js高级plus/20-_包管理工具.md","lastUpdated":1739460242000}');
const _sfc_main = { name: "src/study-notes/01-学习笔记/01-js高级plus/20-_包管理工具.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "包管理工具",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("包管理工具 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#包管理工具",
    "aria-label": 'Permalink to "包管理工具"'
  }, "​")
], -1);
const _hoisted_2 = /* @__PURE__ */ createStaticVNode("", 58);
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
const _20______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _20______ as default
};
