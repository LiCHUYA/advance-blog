import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, k as createBaseVNode, a as createTextVNode, R as createStaticVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"TCP收发数据流程","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/02-基础知识/09-网络/16TCP协议/课件.md","filePath":"src/study-notes/02-基础知识/09-网络/16TCP协议/课件.md","lastUpdated":1739501366000}');
const _sfc_main = { name: "src/study-notes/02-基础知识/09-网络/16TCP协议/课件.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: "http://mdrs.yuanjin.tech/img/20211008163417.png",
    alt: "image-20211008163417521"
  })
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: "http://mdrs.yuanjin.tech/img/20211008163458.png",
    alt: "image-20211008163458168"
  })
], -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "tcp收发数据流程",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("TCP收发数据流程 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#tcp收发数据流程",
    "aria-label": 'Permalink to "TCP收发数据流程"'
  }, "​")
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("img", {
  src: "http://mdrs.yuanjin.tech/img/20211021122224.png",
  alt: "image-20211021122224411",
  style: { "zoom": "50%" }
}, null, -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "tcp如何收发数据",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("TCP如何收发数据 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#tcp如何收发数据",
    "aria-label": 'Permalink to "TCP如何收发数据"'
  }, "​")
], -1);
const _hoisted_6 = /* @__PURE__ */ createStaticVNode("", 9);
const _hoisted_15 = /* @__PURE__ */ createStaticVNode("", 7);
const _hoisted_22 = /* @__PURE__ */ createStaticVNode("", 3);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("img", {
  src: "http://mdrs.yuanjin.tech/img/20211021134242.png",
  alt: "image-20211021134242311",
  style: { "zoom": "50%" },
  align: "left"
}, null, -1);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("HTTP协议是对内容格式的规定，它"),
  /* @__PURE__ */ createBaseVNode("strong", null, "使用"),
  /* @__PURE__ */ createTextVNode("了TCP协议完成消息的可靠传输")
], -1);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("p", null, "在具体使用TCP协议时：", -1);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("ol", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "客户端发消息给服务器叫做请求，服务器发消息给客户端叫做响应"),
  /* @__PURE__ */ createBaseVNode("li", null, "使用HTTP协议的服务器不会主动发消息给客户端（尽管TCP可以），只对请求进行响应"),
  /* @__PURE__ */ createBaseVNode("li", null, "每一个HTTP请求-响应，都要先建立TCP连接（三次握手），然后完成请求-响应后，再销毁连接（四次挥手）。这就导致每次请求-响应都是相互独立的，无法保持状态。")
], -1);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("h1", {
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
const _hoisted_30 = /* @__PURE__ */ createStaticVNode("", 1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ArticleMetadata = __unplugin_components_4;
  const _component_ClientOnly = resolveComponent("ClientOnly");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
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
    _hoisted_4,
    _hoisted_5,
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
    _hoisted_6,
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
    _hoisted_15,
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
    _hoisted_22,
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
    _hoisted_25,
    _hoisted_26,
    _hoisted_27,
    _hoisted_28,
    _hoisted_29,
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
    _hoisted_30
  ]);
}
const __ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  __ as default
};
