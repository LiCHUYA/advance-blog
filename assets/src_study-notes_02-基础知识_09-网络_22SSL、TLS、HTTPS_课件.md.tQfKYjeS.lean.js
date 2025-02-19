import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, k as createBaseVNode, a as createTextVNode, R as createStaticVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"SSL、TLS、HTTPS的关系","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/02-基础知识/09-网络/22SSL、TLS、HTTPS/课件.md","filePath":"src/study-notes/02-基础知识/09-网络/22SSL、TLS、HTTPS/课件.md","lastUpdated":1739501366000}');
const _sfc_main = { name: "src/study-notes/02-基础知识/09-网络/22SSL、TLS、HTTPS/课件.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "ssl、tls、https的关系",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("SSL、TLS、HTTPS的关系 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#ssl、tls、https的关系",
    "aria-label": 'Permalink to "SSL、TLS、HTTPS的关系"'
  }, "​")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, "SSL（Secure Sockets Layer），安全套接字协议", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "TLS（Transport Layer Security），传输层安全性协议", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("strong", null, "TLS是SSL的升级版，两者几乎是一样的")
], -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("p", null, "HTTPS（Hyper Text Transfer Protocol over SecureSocket Layer），建立在SSL协议之上的HTTP协议", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("img", {
  src: "http://mdrs.yuanjin.tech/img/20211025160927.png",
  alt: "image-20211025160927355",
  style: { "zoom": "50%" },
  align: "left"
}, null, -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "面试题",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("面试题 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#面试题",
    "aria-label": 'Permalink to "面试题"'
  }, "​")
], -1);
const _hoisted_8 = /* @__PURE__ */ createStaticVNode("", 1);
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
    _hoisted_4,
    _hoisted_5,
    _hoisted_6,
    _hoisted_7,
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
    _hoisted_8
  ]);
}
const __ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  __ as default
};
