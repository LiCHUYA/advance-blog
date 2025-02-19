import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, k as createBaseVNode, a as createTextVNode, R as createStaticVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"CSRF攻击","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/02-基础知识/09-网络/17CSRF攻击/课件.md","filePath":"src/study-notes/02-基础知识/09-网络/17CSRF攻击/课件.md","lastUpdated":1739501366000}');
const _sfc_main = { name: "src/study-notes/02-基础知识/09-网络/17CSRF攻击/课件.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "csrf攻击",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("CSRF攻击 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#csrf攻击",
    "aria-label": 'Permalink to "CSRF攻击"'
  }, "​")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, "CSRF（Cross-site request forgery，跨站请求伪造）", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "它是指攻击者利用了用户的身份信息，执行了用户非本意的操作", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: "http://mdrs.yuanjin.tech/img/20211101145156.png",
    alt: "image-20211101145156371"
  })
], -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("h1", {
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
const _hoisted_6 = /* @__PURE__ */ createStaticVNode('<table><thead><tr><th>防御手段</th><th>防御力</th><th>问题</th></tr></thead><tbody><tr><td>不使用cookie</td><td>⭐️⭐️⭐️⭐️⭐️</td><td>兼容性略差<br>ssr会遇到困难，但可解决</td></tr><tr><td>使用sameSite</td><td>⭐️⭐️⭐️⭐️</td><td>兼容性差<br>容易挡住自己人</td></tr><tr><td>使用csrf token</td><td>⭐️⭐️⭐️⭐️⭐️</td><td>获取到token后未进行操作仍然会被攻击</td></tr><tr><td>使用referer防护</td><td>⭐️⭐️</td><td>过去很常用，现在已经发现漏洞</td></tr></tbody></table><h1 id="面试题" tabindex="-1">面试题 <a class="header-anchor" href="#面试题" aria-label="Permalink to &quot;面试题&quot;">​</a></h1>', 2);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("p", null, "介绍 csrf 攻击", -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("blockquote", null, [
  /* @__PURE__ */ createBaseVNode("p", null, "CSRF 是跨站请求伪造，是一种挟制用户在当前已登录的Web应用上执行非本意的操作的攻击方法"),
  /* @__PURE__ */ createBaseVNode("p", null, "它首先引导用户访问一个危险网站，当用户访问网站后，网站会发送请求到被攻击的站点，这次请求会携带用户的cookie发送，因此就利用了用户的身份信息完成攻击"),
  /* @__PURE__ */ createBaseVNode("p", null, "防御 CSRF 攻击有多种手段："),
  /* @__PURE__ */ createBaseVNode("ol", null, [
    /* @__PURE__ */ createBaseVNode("li", null, "不使用cookie"),
    /* @__PURE__ */ createBaseVNode("li", null, "为表单添加校验的 token 校验"),
    /* @__PURE__ */ createBaseVNode("li", null, "cookie中使用sameSite字段"),
    /* @__PURE__ */ createBaseVNode("li", null, "服务器检查 referer 字段")
  ])
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
    _hoisted_8,
    _hoisted_9
  ]);
}
const __ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  __ as default
};
