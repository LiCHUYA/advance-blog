import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, k as createBaseVNode, a as createTextVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"XSS攻击","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/02-基础知识/09-网络/18XSS攻击/课件.md","filePath":"src/study-notes/02-基础知识/09-网络/18XSS攻击/课件.md","lastUpdated":1739501366000}');
const _sfc_main = { name: "src/study-notes/02-基础知识/09-网络/18XSS攻击/课件.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "xss攻击",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("XSS攻击 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#xss攻击",
    "aria-label": 'Permalink to "XSS攻击"'
  }, "​")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, "XSS（Cross Site Scripting，跨站脚本攻击），是指攻击者利用站点的漏洞，在表单提交时，在表单内容中加入一些恶意脚本，当其他正常用户浏览页面，而页面中刚好出现攻击者的恶意脚本时，脚本被执行，从而使得页面遭到破坏，或者用户信息被窃取。", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("img", {
  src: "http://mdrs.yuanjin.tech/img/20211102135438.png",
  alt: "image-20211102135438219",
  style: { "zoom": "50%" },
  align: "left"
}, null, -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "防御方式",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("防御方式 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#防御方式",
    "aria-label": 'Permalink to "防御方式"'
  }, "​")
], -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("p", null, "服务器端对用户提交的内容进行过滤或编码", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "过滤：去掉一些危险的标签，去掉一些危险的属性"),
  /* @__PURE__ */ createBaseVNode("li", null, "编码：对危险的标签进行HTML实体编码")
], -1);
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
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("p", null, "介绍 XSS 攻击", -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("blockquote", null, [
  /* @__PURE__ */ createBaseVNode("p", null, "参考答案："),
  /* @__PURE__ */ createBaseVNode("p", null, "XSS 是指跨站脚本攻击。攻击者利用站点的漏洞，在表单提交时，在表单内容中加入一些恶意脚本，当其他正常用户浏览页面，而页面中刚好出现攻击者的恶意脚本时，脚本被执行，从而使得页面遭到破坏，或者用户信息被窃取。"),
  /* @__PURE__ */ createBaseVNode("p", null, "要防范 XSS 攻击，需要在服务器端过滤脚本代码，将一些危险的元素和属性去掉或对元素进行HTML实体编码。")
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
    _hoisted_2,
    _hoisted_3,
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
    _hoisted_8,
    _hoisted_9
  ]);
}
const __ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  __ as default
};
