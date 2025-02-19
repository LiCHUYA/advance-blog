import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, k as createBaseVNode, a as createTextVNode, R as createStaticVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"语义化","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/02-基础知识/01-HTML/06-语义化.md","filePath":"src/study-notes/02-基础知识/01-HTML/06-语义化.md","lastUpdated":1739501366000}');
const _sfc_main = { name: "src/study-notes/02-基础知识/01-HTML/06-语义化.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "语义化",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("语义化 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#语义化",
    "aria-label": 'Permalink to "语义化"'
  }, "​")
], -1);
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<h2 id="经典真题" tabindex="-1">经典真题 <a class="header-anchor" href="#经典真题" aria-label="Permalink to &quot;经典真题&quot;">​</a></h2><ul><li>说说对 <em>html</em> 语义化的理解</li></ul><h2 id="什么是语义元素" tabindex="-1">什么是语义元素？ <a class="header-anchor" href="#什么是语义元素" aria-label="Permalink to &quot;什么是语义元素？&quot;">​</a></h2><p>语义是指对一个词或者句子含义的正确解释。很多 <em>HTML</em> 标签也具有语义的意义，也就是说元素本身传达了关于标签所包含内容类型的一些信息。例如，当浏览器解析到<code>&lt;h1&gt;&lt;/h1&gt;</code>标签时，它将该标签解释为包含这一块内容的最重要的标题。<em>h1</em> 标签的语义就是用它来标识特定网页或部分最重要的标题。</p><h2 id="为什么要语义化" tabindex="-1">为什么要语义化？ <a class="header-anchor" href="#为什么要语义化" aria-label="Permalink to &quot;为什么要语义化？&quot;">​</a></h2><ul><li>代码结构：使页面没有css的情况下，也能够呈现出很好的内容结构</li><li>有利于 <em>SEO</em>： 爬虫依赖标签来确定关键字的权重，因此可以和搜索引擎建立良好的沟通，帮助爬虫抓取更多的有效信息</li><li>提升用户体验：例如 <em>title、alt</em> 可以用于解释名称或者解释图片信息，以及 <em>label</em> 标签的灵活运用。</li><li>便于团队开发和维护：语义化使得代码更具有可读性，让其他开发人员更加理解你的 <em>html</em> 结构，减少差异化。</li><li>方便其他设备解析：如屏幕阅读器、盲人阅读器、移动设备等，以有意义的方式来渲染网页。</li></ul><h2 id="html5-常用的语义元素" tabindex="-1"><em>HTML5</em> 常用的语义元素 <a class="header-anchor" href="#html5-常用的语义元素" aria-label="Permalink to &quot;*HTML5* 常用的语义元素&quot;">​</a></h2><p><em>HTML5</em> 提供了新的语义元素来定义网页的不同部分，它们被称为“切片元素”，如图所示 ：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-07-062515.png" alt="image-20210907142515375" style="zoom:50%;"><ul><li><em>header</em>：用于定义页面的头部区域，通常包括网站 <em>logo</em>、主导航、全站链接以及搜索框。</li><li><em>nav</em>：定义页面的导航链接部分区域。</li><li><em>main</em>：定义文档的主要内容，该内容在文档中应当是独一无二的</li><li><em>article</em>：定义页面独立的内容，它可以有自己的 <em>header、footer、sections</em> 等，专注于单个主题的博客文章，报纸文章或网页文章。</li><li><em>section</em>：表示文档中的一个区域（或节），比如，内容中的一个专题组。</li><li><em>aside</em>：表示一个和其余页面内容几乎无关的部分，被认为是独立于该内容的一部分且可以被单独的拆分出来而不会影响整体。通常表现为侧边栏或嵌入内容。</li><li><em>footer</em>：定义最近一个章节内容或者根节点元素的页脚。一个页脚通常包含该章节作者、版权数据或者与文档相关的链接等信息。</li></ul><p>大约有 <em>100</em> 多个 <em>HTML</em> 语义元素可供选择，以下是常用的语义元素：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-07-062552.png" alt="image-20210907142551909" style="zoom:50%;"><blockquote><p>更多的语义化标签可以参阅：<em><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element" target="_blank" rel="noreferrer">https://developer.mozilla.org/en-US/docs/Web/HTML/Element</a></em></p></blockquote><h2 id="无障碍网页" tabindex="-1">无障碍网页 <a class="header-anchor" href="#无障碍网页" aria-label="Permalink to &quot;无障碍网页&quot;">​</a></h2><p><em>W3C</em> 在 <em>1997</em> 年发起了一项 <em>WAI</em>（<em>Web Accessibility Initiative</em>）的计划，该计划的目标是提升网站的易用性(<em>accessibility</em>)，而其中有一个很重要的指标，那就是能够被残障人士使用的网站才能称得上一个易用的（易访问的）网站。</p><p><em>HTML5</em> 在无障碍方面进行了加强，加入了无障碍属性。</p><p>所谓 <em>HTML5</em> 无障碍属性，主要针对的是视觉缺陷，失聪，行动不便的残疾人以及假装残疾的测试人员。尤其像盲人，眼睛看不到，其浏览网页则需要借助辅助设备，如屏幕阅读器，屏幕阅读机可以大声朗读或者输出盲文。</p><p>而 <em>HTML5</em> 无障碍属性就是可以让屏幕阅读器准确识别网页中的内容，变化，状态的技术规范，可以让盲人这类用户也能无障碍阅读！</p><blockquote><p>关于无障碍的更多说明，可以参阅 <em>MDN</em>：<em><a href="https://developer.mozilla.org/zh-CN/docs/Web/Accessibility" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/Accessibility</a></em></p></blockquote><p><strong>常见的无障碍属性</strong></p><p><em>WAI-ARIA</em> 是 <em>W3C</em> 编写的规范，定义了一组可用于其他元素的 <em>HTML</em> 特性，用于提供额外的语义化以及改善缺乏的可访问性。以下是规范中三个主要的特性：</p><ul><li><p>角色：这定义了元素是干什么的。许多「标志性的角色」，其实重复了 <em>HTML5</em> 的结构元素的语义价值。例如 <em>role=&quot;navigation&quot;</em> (<em>nav</em>) 或者 <em>role=&quot;complementary&quot;</em> (<em>aside</em>)。</p></li><li><p>属性：我们能通过定义一些属性给元素，让他们具备更多的语义。例如：<em>aria-required=&quot;true&quot;</em> 意味着元素在表单上是必填的。然而 <em>aria-labelledby=&quot;label&quot;</em> 允许在元素上设置一个 <em>ID</em>，用于 <em>labelledby</em> 引用作为屏幕阅读器指定的 <em>label</em> 内容 ，多个也可以。</p></li><li><p>状态：用于表达元素当前的条件的特殊属性，例如 <em>aria-disabled=&quot;true&quot;</em>，屏幕阅读器就会这个表单禁止输入。状态和属性的差异之处就是：属性在应用的生命周期中不会改变，而状态可以，通常我们用编程的方法改变它，例如 <em>Javascript</em>。</p></li></ul><p>关于 <em>WAI-ARIA</em> 属性重要的一点是它不会对 <em>Web</em> 页面有任何影响，除了让更多的信息从浏览器暴露给 <em>accessibility APIs</em> (无障碍 <em>API</em>)，这也是屏幕阅读器这一类软件的信息源。<em>WAI-ARIA</em> 不会影响网页的结构，以及 <em>DOM</em> 等等，尽管这些属性可用于作为 <em>CSS</em> 选择器。</p><blockquote><p>更多无障碍属性可以参阅：<em><a href="https://developer.mozilla.org/zh-CN/docs/Learn/Accessibility/WAI-ARIA_basics" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Learn/Accessibility/WAI-ARIA_basics</a></em></p></blockquote><h2 id="真题解答" tabindex="-1">真题解答 <a class="header-anchor" href="#真题解答" aria-label="Permalink to &quot;真题解答&quot;">​</a></h2><ul><li>说说对 <em>html</em> 语义化的理解</li></ul><blockquote><p>语义化的目的主要有以下几点：</p><ol><li>去掉或者丢失样式的时候能够让页面呈现出清晰的结构</li><li>有利于 <em>SEO</em>：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重</li><li>方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页</li><li>便于团队开发和维护，语义化更具可读性，是下一步吧网页的重要动向，遵循 <em>W3C</em> 标准的团队都遵循这个标准，可以减少差异化。<em>HTML5</em> 中新增加的很多标签，例如：<em>article、nav、header</em> 和 <em>footer</em> 等，就是基于语义化设计原则</li></ol></blockquote><p>-<em>EOF</em>-</p>', 28);
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
const _06____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _06____ as default
};
