import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, k as createBaseVNode, a as createTextVNode, R as createStaticVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"替换元素","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/02-基础知识/01-HTML/02-替换元素.md","filePath":"src/study-notes/02-基础知识/01-HTML/02-替换元素.md","lastUpdated":1739501366000}');
const _sfc_main = { name: "src/study-notes/02-基础知识/01-HTML/02-替换元素.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "替换元素",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("替换元素 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#替换元素",
    "aria-label": 'Permalink to "替换元素"'
  }, "​")
], -1);
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<h2 id="经典真题" tabindex="-1">经典真题 <a class="header-anchor" href="#经典真题" aria-label="Permalink to &quot;经典真题&quot;">​</a></h2><ul><li>什么是可替换元素，什么是非可替换元素，它们各自有什么特点？</li></ul><h2 id="什么是替换元素" tabindex="-1">什么是替换元素 <a class="header-anchor" href="#什么是替换元素" aria-label="Permalink to &quot;什么是替换元素&quot;">​</a></h2><p>所谓可替换元素（<em>replaced element</em>），是指一些展现效果不由 <em>CSS</em> 来控制的元素。这些元素是一种外部对象，它们外观的渲染，是独立于 <em>CSS</em> 的。</p><p>简单来说，它们的内容不受当前文档的样式的影响。<em>CSS</em> 可以影响可替换元素的位置，但不会影响到可替换元素自身的内容。某些可替换元素，例如 <code>&lt;iframe&gt;</code> 元素，可能具有自己的样式表，但它们不会继承父文档的样式。</p><p>与替换元素相对应的，就是非替换元素，顾名思义就是那些样式完全由 <em>CSS</em> 来控制的元素，例如 <em>p，h1～h6</em> 等。</p><blockquote><p>更多可替换元素内容可以参阅 <em>MDN</em>：<em><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Replaced_element" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/CSS/Replaced_element</a></em></p></blockquote><h2 id="常见的替换元素" tabindex="-1">常见的替换元素 <a class="header-anchor" href="#常见的替换元素" aria-label="Permalink to &quot;常见的替换元素&quot;">​</a></h2><ul><li>图片标签 <em>img</em></li><li>内联框架 <em>iframe</em></li><li>音频视频标签</li></ul><h2 id="真题解答" tabindex="-1">真题解答 <a class="header-anchor" href="#真题解答" aria-label="Permalink to &quot;真题解答&quot;">​</a></h2><ul><li>什么是可替换元素，什么是非可替换元素，它们各自有什么特点？</li></ul><blockquote><p>可替换元素是指这样一种元素，它在页面中的大部分展现效果不由 <em>CSS</em> 决定。</p><p>比如 <em>img</em> 元素就是一个可替换元素，它在页面中显示出的效果主要取决于你连接的是什么图片，图片是什么它就展示什么，<em>CSS</em> 虽然可以控制图片的尺寸位置，但永远无法控制图片本身。</p><p>再比如，<em>select</em> 元素也是一个典型的可替换元素，它在页面上呈现的是用户操作系统上的下拉列表样式，因此，它的展现效果是由操作系统决定的。所以，同一个 <em>select</em> 元素，放到不同操作系统的电脑上会呈现不同的外观。</p><p><em>img、video、audio</em>、大部分表单元素都属于可替换元素。</p><p>非可替换元素就是指的普通元素，它具体在页面上呈现什么，完全由 <em>CSS</em> 来决定。</p></blockquote><p>-<em>EOF</em>-</p>', 13);
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
const _02_____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _02_____ as default
};
