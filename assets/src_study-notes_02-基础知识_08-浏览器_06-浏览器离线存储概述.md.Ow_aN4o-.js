import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, k as createBaseVNode, a as createTextVNode, R as createStaticVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"浏览器离线存储概述","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/02-基础知识/08-浏览器/06-浏览器离线存储概述.md","filePath":"src/study-notes/02-基础知识/08-浏览器/06-浏览器离线存储概述.md","lastUpdated":1739501366000}');
const _sfc_main = { name: "src/study-notes/02-基础知识/08-浏览器/06-浏览器离线存储概述.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "浏览器离线存储概述",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("浏览器离线存储概述 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#浏览器离线存储概述",
    "aria-label": 'Permalink to "浏览器离线存储概述"'
  }, "​")
], -1);
const _hoisted_2 = /* @__PURE__ */ createStaticVNode("<p>在前面的章节中，我们已经为大家介绍了整个浏览器的组成部分：</p><p>大致分为：</p><ul><li><p>用户界面（<em>user interface</em>）</p></li><li><p>浏览器引擎（<em>browser engine</em>）</p></li><li><p>渲染引擎（<em>rendering engine</em>）</p></li><li><p>网络（<em>networking</em>）</p></li><li><p><em>JS</em> 解释器（<em>JavaScript interpreter</em>）</p></li><li><p>用户界面后端（<em>UI backend</em>）</p></li><li><p>数据存储（<em>data storage</em>）</p></li></ul><p>而本章节我们就一起来看一下 <em>Data Persistence/storage</em> 这个部分，翻译成中文叫做浏览器离线存储或者本地存储。顾名思义，就是内容存储在浏览器这一边。</p><p>目前常见的浏览器离线存储的方式如下：</p><ul><li><em>Cookie</em></li><li><em>Web Storage</em></li><li><em>WebSQL</em></li><li><em>IndexedDB</em></li><li><em>File System</em></li></ul><hr><p>-<em>EOF</em>-</p>", 8);
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
const _06__________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _06__________ as default
};
