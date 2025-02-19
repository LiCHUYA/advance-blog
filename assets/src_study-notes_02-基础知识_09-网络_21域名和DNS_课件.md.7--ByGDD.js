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
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<p>域名👉 <code>www.baidu.com</code></p><p>域名的作用是帮助人类记忆网站地址，有了域名，就不用去记IP地址了</p><p>域名的类型有以下几种：</p><ul><li>根域名：<code>.</code></li><li>顶级域名：<code>.cn .com .net .us .uk .org ... </code></li><li>二级域名：<code>.com .gov .org .edu 自定义 baidu jd taobao ...</code></li><li>三级域名：<code>自定义 www.baidu.com www.jd.com www.taobao.com</code></li><li>四级域名：<code>自定义 www.pku.edu.cn mail.internal.jd.com</code></li></ul><p>一般来说，购买二级域名后，三级、四级域名都是可以免费自定义的</p><h1 id="dns" tabindex="-1">DNS <a class="header-anchor" href="#dns" aria-label="Permalink to &quot;DNS&quot;">​</a></h1>', 6);
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
const _hoisted_16 = /* @__PURE__ */ createStaticVNode("<p>请简述域名解析过程（百度）</p><blockquote><p>参考答案：</p><ol><li>查找本机hosts文件中是否有解析记录，如果有，直接使用</li><li>查找本地域名服务器中是否有解析记录，如果有，直接使用</li><li>查询根域名服务器，得到顶级域名服务器ip</li><li>查询顶级域名服务器中是否有解析记录，如果有，直接使用</li><li>根据顶级域名服务器反馈的ip，查询权限域名服务器，如果有解析记录，直接使用</li><li>如果以上都找不到，域名解析失败</li></ol><p>本机和域名服务器一般都会有高速缓存，它存在的目的是为了减少查询次数和时间</p></blockquote>", 2);
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
