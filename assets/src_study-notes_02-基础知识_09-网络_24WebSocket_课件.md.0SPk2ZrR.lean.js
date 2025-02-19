import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, k as createBaseVNode, a as createTextVNode, R as createStaticVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"实时场景的旧处理方案","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/02-基础知识/09-网络/24WebSocket/课件.md","filePath":"src/study-notes/02-基础知识/09-网络/24WebSocket/课件.md","lastUpdated":1739501366000}');
const _sfc_main = { name: "src/study-notes/02-基础知识/09-网络/24WebSocket/课件.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("blockquote", null, [
  /* @__PURE__ */ createBaseVNode("p", null, "WebSocket协议（rfc6455）原文地址："),
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createBaseVNode("a", {
      href: "https://datatracker.ietf.org/doc/html/rfc6455",
      target: "_blank",
      rel: "noreferrer"
    }, "https://datatracker.ietf.org/doc/html/rfc6455")
  ])
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "实时场景的旧处理方案",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("实时场景的旧处理方案 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#实时场景的旧处理方案",
    "aria-label": 'Permalink to "实时场景的旧处理方案"'
  }, "​")
], -1);
const _hoisted_3 = /* @__PURE__ */ createStaticVNode("", 12);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("p", null, "实现短轮询是非常简单的，客户端只需要设置一个计时器不断发送请求即可", -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("p", null, "这种方案的缺陷是非常明显的：", -1);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "会产生大量无意义的请求"),
  /* @__PURE__ */ createBaseVNode("li", null, "会频繁打开关闭连接"),
  /* @__PURE__ */ createBaseVNode("li", null, "实时性并不高")
], -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "长轮询-long-polling",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("长轮询 long polling "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#长轮询-long-polling",
    "aria-label": 'Permalink to "长轮询 long polling"'
  }, "​")
], -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("我们的前辈在有限的条件下，充分发挥智慧，来解决短轮询的问题，于是演化为"),
  /* @__PURE__ */ createBaseVNode("strong", null, "长轮询")
], -1);
const _hoisted_20 = /* @__PURE__ */ createStaticVNode("", 4);
const _hoisted_24 = /* @__PURE__ */ createStaticVNode("", 17);
const _hoisted_41 = /* @__PURE__ */ createStaticVNode("", 1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ArticleMetadata = __unplugin_components_4;
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_Mermaid = resolveComponent("Mermaid");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
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
    _hoisted_3,
    createVNode(_component_Mermaid, {
      id: "mermaid_382ee205",
      graph: "sequenceDiagram%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E6%9C%89%E6%96%B0%E6%B6%88%E6%81%AF%E5%90%97%EF%BC%9F%0A%E6%9C%8D%E5%8A%A1%E5%99%A8-%3E%3E%E5%AE%A2%E6%88%B7%E7%AB%AF%3A%20%E6%B2%A1%0ANote%20over%20%E5%AE%A2%E6%88%B7%E7%AB%AF%2C%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E4%B8%80%E6%AE%B5%E6%97%B6%E9%97%B4%E5%90%8E...%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E6%9C%89%E6%96%B0%E6%B6%88%E6%81%AF%E5%90%97%EF%BC%9F%0A%E6%9C%8D%E5%8A%A1%E5%99%A8-%3E%3E%E5%AE%A2%E6%88%B7%E7%AB%AF%3A%20%E6%B2%A1%0ANote%20over%20%E5%AE%A2%E6%88%B7%E7%AB%AF%2C%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E4%B8%80%E6%AE%B5%E6%97%B6%E9%97%B4%E5%90%8E...%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E6%9C%89%E6%96%B0%E6%B6%88%E6%81%AF%E5%90%97%EF%BC%9F%0A%E6%9C%8D%E5%8A%A1%E5%99%A8-%3E%3E%E5%AE%A2%E6%88%B7%E7%AB%AF%3A%20%E6%9C%89%EF%BC%8Cuser1%E5%AF%B9%E4%BD%A0%E8%AF%B4%EF%BC%9A%E4%BD%A0%E5%A5%BD%0ANote%20over%20%E5%AE%A2%E6%88%B7%E7%AB%AF%2C%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E4%B8%80%E6%AE%B5%E6%97%B6%E9%97%B4%E5%90%8E...%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E6%9C%89%E6%96%B0%E6%B6%88%E6%81%AF%E5%90%97%EF%BC%9F%0A%E6%9C%8D%E5%8A%A1%E5%99%A8-%3E%3E%E5%AE%A2%E6%88%B7%E7%AB%AF%3A%20%E6%B2%A1%0ANote%20over%20%E5%AE%A2%E6%88%B7%E7%AB%AF%2C%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E4%B8%80%E6%AE%B5%E6%97%B6%E9%97%B4%E5%90%8E...%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E6%9C%89%E6%96%B0%E6%B6%88%E6%81%AF%E5%90%97%EF%BC%9F%0A%E6%9C%8D%E5%8A%A1%E5%99%A8-%3E%3E%E5%AE%A2%E6%88%B7%E7%AB%AF%3A%20%E6%B2%A1"
    }),
    _hoisted_15,
    _hoisted_16,
    _hoisted_17,
    _hoisted_18,
    _hoisted_19,
    createVNode(_component_Mermaid, {
      id: "mermaid_64a570de",
      graph: "sequenceDiagram%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%3E%2B%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E6%9C%89%E6%96%B0%E6%B6%88%E6%81%AF%E5%90%97%EF%BC%9F%0ANote%20right%20of%20%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E6%B2%A1%E6%9C%89%E6%B6%88%E6%81%AF%E4%B8%8D%E4%BC%9A%E5%93%8D%E5%BA%94%0ANote%20right%20of%20%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E4%B8%80%E6%AE%B5%E6%97%B6%E9%97%B4%E5%90%8E...%0A%E6%9C%8D%E5%8A%A1%E5%99%A8-%3E%3E-%E5%AE%A2%E6%88%B7%E7%AB%AF%3A%20user1%E5%AF%B9%E4%BD%A0%E8%AF%B4%EF%BC%9A%E4%BD%A0%E5%A5%BD%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%3E%2B%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E6%9C%89%E6%96%B0%E6%B6%88%E6%81%AF%E5%90%97%EF%BC%9F%0ANote%20right%20of%20%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E6%B2%A1%E6%9C%89%E6%B6%88%E6%81%AF%E4%B8%8D%E4%BC%9A%E5%93%8D%E5%BA%94%0ANote%20right%20of%20%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E4%B8%80%E6%AE%B5%E6%97%B6%E9%97%B4%E5%90%8E...%0A%E6%9C%8D%E5%8A%A1%E5%99%A8-%3E%3E-%E5%AE%A2%E6%88%B7%E7%AB%AF%3A%20user1%E5%AF%B9%E4%BD%A0%E8%AF%B4%EF%BC%9A%E4%BD%A0%E5%90%83%E4%BA%86%E6%B2%A1%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20......"
    }),
    _hoisted_20,
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
    _hoisted_24,
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
    _hoisted_41
  ]);
}
const __ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  __ as default
};
