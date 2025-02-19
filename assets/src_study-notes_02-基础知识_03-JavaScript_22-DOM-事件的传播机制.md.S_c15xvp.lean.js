import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, k as createBaseVNode, a as createTextVNode, R as createStaticVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"DOM 事件的传播机制","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/02-基础知识/03-JavaScript/22-DOM-事件的传播机制.md","filePath":"src/study-notes/02-基础知识/03-JavaScript/22-DOM-事件的传播机制.md","lastUpdated":1739501366000}');
const _sfc_main = { name: "src/study-notes/02-基础知识/03-JavaScript/22-DOM-事件的传播机制.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "dom-事件的传播机制",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("em", null, "DOM"),
  /* @__PURE__ */ createTextVNode(" 事件的传播机制 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#dom-事件的传播机制",
    "aria-label": 'Permalink to "*DOM* 事件的传播机制"'
  }, "​")
], -1);
const _hoisted_2 = /* @__PURE__ */ createStaticVNode("", 80);
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
const _22DOM________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _22DOM________ as default
};
