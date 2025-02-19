import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, k as createBaseVNode, a as createTextVNode, R as createStaticVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"页面可见性","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/02-基础知识/01-HTML/05-页面可见性.md","filePath":"src/study-notes/02-基础知识/01-HTML/05-页面可见性.md","lastUpdated":1739501366000}');
const _sfc_main = { name: "src/study-notes/02-基础知识/01-HTML/05-页面可见性.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "页面可见性",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("页面可见性 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#页面可见性",
    "aria-label": 'Permalink to "页面可见性"'
  }, "​")
], -1);
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<h2 id="经典真题" tabindex="-1">经典真题 <a class="header-anchor" href="#经典真题" aria-label="Permalink to &quot;经典真题&quot;">​</a></h2><ul><li>页面可见性（<em>Page Visibility</em>）<em>API</em> 可以有哪些用途？</li></ul><h2 id="页面可见性介绍" tabindex="-1">页面可见性介绍 <a class="header-anchor" href="#页面可见性介绍" aria-label="Permalink to &quot;页面可见性介绍&quot;">​</a></h2><p>长期以来我们一直缺少一个判断用户是否正在浏览某个指定标签页的方法。</p><p>用户是否去看别的网站了？他们切换回来了么？</p><p>现在，<em>HTML5</em> 里页面可见性接口就提供给了程序员一个方法，让他们使用 <em>visibilitychange</em> 页面事件来判断当前页面可见性的状态，并针对性的执行某些任务。同时还有新的 <em>document.hidden</em> 属性可以使用。</p><p>常用的 <em>API</em> 如下：</p><ul><li><p><em><strong>document.hidden</strong></em>：这个新出现的 <em>document.hidden</em> 属性，它显示页面是否为用户当前观看的页面，值为 <em>ture</em> 或 <em>false</em>。</p></li><li><p><em><strong>document.visibilityState</strong></em>：<em>visibilityState</em> 的值要么是 <em>visible</em> ，表明页面为浏览器当前激活 <em>tab</em>，而且窗口不是最小化状态；要么是 <em>hidden</em> ，表示页面不是当前激活 <em>tab</em> 页面，或者窗口最小化了；或者 <em>prerender</em> ，表示页面在重新生成，对用户不可见。</p></li><li><p><em><strong>visibilitychange</strong></em> 事件：监听页面可见性变化事件</p></li></ul><p>下面是一个页面可见性的具体示例：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;页面可见性示例&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;visibilitychange&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> () {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(document.visibilityState </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;hidden&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">){</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                document.title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;小样去哪儿了？快回来&quot;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            }</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(document.visibilityState </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;visible&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">){</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                document.title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;页面可见性示例&quot;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        });</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span></code></pre></div><blockquote><p>更多有关页面可见性的内容可以参阅 <em>MDN</em>：<em><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Page_Visibility_API" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/API/Page_Visibility_API</a></em></p></blockquote><h2 id="真题解答" tabindex="-1">真题解答 <a class="header-anchor" href="#真题解答" aria-label="Permalink to &quot;真题解答&quot;">​</a></h2><ul><li>页面可见性（<em>Page Visibility</em>）<em>API</em> 可以有哪些用途？</li></ul><blockquote><p>所谓页面可见性，就是获取当前页面的可见状态。因为对于用户来讲可以打开好多标签页面来回切换，然而始终只有一个页面处于显示状态。所以我们可以通过页面可见性（<em>Page Visibility</em>）<em>API</em> 来判断当前页面是显示状态还是隐藏状态。</p><p>常用的 <em>API</em> 有三个，<em>document.hidden</em> 返回一个布尔值，如果是 <em>true</em>，表示当前页面隐藏，<em>false</em> 则表示页面可见。不同页面之间来回切换，会触发 <em>visibilitychange</em> 事件，还有一个 <em>document.visibilityState</em>，表示页面所处的状态。</p><p>常见的用途：</p><ul><li>网站有图片轮播效果，只有在用户观看轮播的时候，才会自动展示下一张幻灯片。</li><li>显示信息仪表盘的应用程序不希望在页面不可见时轮询服务器进行更新。</li><li>页面想要检测是否正在渲染，以便可以准确的计算网页浏览量</li><li>当设备进入待机模式时，网站想要关闭设备声音（用户按下电源键关闭屏幕）</li></ul></blockquote><p>-<em>EOF</em>-</p>', 15);
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
const _05______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _05______ as default
};
