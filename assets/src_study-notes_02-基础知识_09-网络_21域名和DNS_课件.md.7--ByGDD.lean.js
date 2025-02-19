import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, k as createBaseVNode, a as createTextVNode, R as createStaticVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"域名","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/02-基础知识/09-网络/21域名和DNS/课件.md","filePath":"src/study-notes/02-基础知识/09-网络/21域名和DNS/课件.md","lastUpdated":1739501366000}');
const _sfc_main = { name: "src/study-notes/02-基础知识/09-网络/21域名和DNS/课件.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "域名",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("域名 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#域名",
    "aria-label": 'Permalink to "域名"'
  }, "​")
], -1);
const _hoisted_2 = /* @__PURE__ */ createStaticVNode("", 6);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("p", null, "域名虽然有助于记忆，但是网络传输和域名没有半毛钱关系", -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("strong", null, "网络传输必须依靠IP")
], -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("所以，必须有一个东西，能够将域名转换成IP地址，这个东西就是DNS服务器，翻译成IP地址的过程称之为"),
  /* @__PURE__ */ createBaseVNode("strong", null, "域名解析")
], -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("img", {
  src: "http://mdrs.yuanjin.tech/img/20211027164448.png",
  alt: "image-20211027164448706",
  style: { "zoom": "50%" },
  align: "left"
}, null, -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("p", null, "全世界认可的DNS服务器一共有三种，外加一种局部使用的本地DNS服务器，一共四种。", -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("img", {
  src: "http://mdrs.yuanjin.tech/img/20211027170039.png",
  alt: "image-20211027170039192",
  style: { "zoom": "50%" },
  align: "left"
}, null, -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("p", null, "为了使得解析速度更快、查询的节点更少，上述每个节点都可能设置高速缓存来加速解析", -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("h1", {
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
const _hoisted_16 = /* @__PURE__ */ createStaticVNode("", 2);
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
    _hoisted_8,
    _hoisted_9,
    _hoisted_10,
    _hoisted_11,
    _hoisted_12,
    _hoisted_13,
    _hoisted_14,
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
    _hoisted_16
  ]);
}
const __ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  __ as default
};
