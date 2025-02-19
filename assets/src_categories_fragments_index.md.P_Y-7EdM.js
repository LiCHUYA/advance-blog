import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, k as createBaseVNode, a as createTextVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"零零碎碎","description":"","frontmatter":{"showArticleMetadata":false,"editLink":false,"lastUpdated":false,"showComment":false},"headers":[],"relativePath":"src/categories/fragments/index.md","filePath":"src/categories/fragments/index.md","lastUpdated":1739460242000}');
const _sfc_main = { name: "src/categories/fragments/index.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "零零碎碎",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("零零碎碎 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#零零碎碎",
    "aria-label": 'Permalink to "零零碎碎"'
  }, "​")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "tip custom-block" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "custom-block-title" }, "笔者说"),
  /* @__PURE__ */ createBaseVNode("p", null, "碎片化知识的时代，纵然知晓不成体系的知识仅仅只能积累经验，却无法有效提升，但身在其中还是要如此，记录碎片知识，留作备忘。说不定后面还有机会 “把点连成线”。")
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
    _hoisted_2
  ]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  index as default
};
