import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, k as createBaseVNode, a as createTextVNode, R as createStaticVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"HTTP1.0","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/02-基础知识/09-网络/23HTTP各版本差异/课件.md","filePath":"src/study-notes/02-基础知识/09-网络/23HTTP各版本差异/课件.md","lastUpdated":1739501366000}');
const _sfc_main = { name: "src/study-notes/02-基础知识/09-网络/23HTTP各版本差异/课件.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "http1-0",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("HTTP1.0 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#http1-0",
    "aria-label": 'Permalink to "HTTP1.0"'
  }, "​")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "无法复用连接",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("无法复用连接 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#无法复用连接",
    "aria-label": 'Permalink to "无法复用连接"'
  }, "​")
], -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "HTTP1.0为每个请求单独新开一个TCP连接", -1);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode("", 5);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "长连接",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("长连接 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#长连接",
    "aria-label": 'Permalink to "长连接"'
  }, "​")
], -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("为了解决HTTP1.0的问题，"),
  /* @__PURE__ */ createBaseVNode("strong", null, "HTTP1.1默认开启长连接"),
  /* @__PURE__ */ createTextVNode("，即让同一个TCP连接服务于多个请求-响应。")
], -1);
const _hoisted_11 = /* @__PURE__ */ createStaticVNode("", 17);
const _hoisted_28 = /* @__PURE__ */ createStaticVNode("", 23);
const _hoisted_51 = /* @__PURE__ */ createStaticVNode("", 1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ArticleMetadata = __unplugin_components_4;
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_Mermaid = resolveComponent("Mermaid");
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
    createVNode(_component_Mermaid, {
      id: "mermaid_1a962853",
      graph: "sequenceDiagram%0Arect%20rgb(191%2C155%2C248)%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20TCP%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%EF%BC%8C%E5%BB%BA%E7%AB%8B%E8%BF%9E%E6%8E%A5%0Aend%0Arect%20rgb(196%2C223%2C252)%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E8%AF%B7%E6%B1%82%0A%E6%9C%8D%E5%8A%A1%E5%99%A8-%3E%3E%E5%AE%A2%E6%88%B7%E7%AB%AF%3A%20%E5%93%8D%E5%BA%94%0Aend%0Arect%20rgb(191%2C155%2C248)%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20TCP%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B%EF%BC%8C%E9%94%80%E6%AF%81%E8%BF%9E%E6%8E%A5%0Aend%0Arect%20rgb(191%2C155%2C248)%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20TCP%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%EF%BC%8C%E5%BB%BA%E7%AB%8B%E8%BF%9E%E6%8E%A5%0Aend%0Arect%20rgb(196%2C223%2C252)%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E8%AF%B7%E6%B1%82%0A%E6%9C%8D%E5%8A%A1%E5%99%A8-%3E%3E%E5%AE%A2%E6%88%B7%E7%AB%AF%3A%20%E5%93%8D%E5%BA%94%0Aend%0Arect%20rgb(191%2C155%2C248)%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20TCP%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B%EF%BC%8C%E9%94%80%E6%AF%81%E8%BF%9E%E6%8E%A5%0Aend"
    }),
    _hoisted_4,
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
    _hoisted_9,
    _hoisted_10,
    createVNode(_component_Mermaid, {
      id: "mermaid_382ee1aa",
      graph: "sequenceDiagram%0Arect%20rgb(191%2C155%2C248)%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20TCP%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%EF%BC%8C%E5%BB%BA%E7%AB%8B%E8%BF%9E%E6%8E%A5%0Aend%0Arect%20rgb(196%2C223%2C252)%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E8%AF%B7%E6%B1%82%0A%E6%9C%8D%E5%8A%A1%E5%99%A8-%3E%3E%E5%AE%A2%E6%88%B7%E7%AB%AF%3A%20%E5%93%8D%E5%BA%94%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E8%AF%B7%E6%B1%82%0A%E6%9C%8D%E5%8A%A1%E5%99%A8-%3E%3E%E5%AE%A2%E6%88%B7%E7%AB%AF%3A%20%E5%93%8D%E5%BA%94%0Aend%0Arect%20rgb(191%2C155%2C248)%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20TCP%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B%EF%BC%8C%E9%94%80%E6%AF%81%E8%BF%9E%E6%8E%A5%0Aend"
    }),
    _hoisted_11,
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
    _hoisted_28,
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
    _hoisted_51
  ]);
}
const __ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  __ as default
};
