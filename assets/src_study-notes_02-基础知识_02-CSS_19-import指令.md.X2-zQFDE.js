import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, k as createBaseVNode, a as createTextVNode, R as createStaticVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"import 指令","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/02-基础知识/02-CSS/19-import指令.md","filePath":"src/study-notes/02-基础知识/02-CSS/19-import指令.md","lastUpdated":1739758546000}');
const _sfc_main = { name: "src/study-notes/02-基础知识/02-CSS/19-import指令.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "import-指令",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("em", null, "import"),
  /* @__PURE__ */ createTextVNode(" 指令 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#import-指令",
    "aria-label": 'Permalink to "_import_ 指令"'
  }, "​")
], -1);
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<p>::: tips 文章</p><p><a href="https://www.cnblogs.com/echoyya/p/13969049.html" target="_blank" rel="noreferrer">link 和@import 引入 css 区别</a></p><p>:::</p><h2 id="经典真题" tabindex="-1">经典真题 <a class="header-anchor" href="#经典真题" aria-label="Permalink to &quot;经典真题&quot;">​</a></h2><ul><li><em>CSS</em> 引用的方式有哪些？<em>link</em> 和 <em>@import</em> 的区别？</li></ul><h2 id="来看看-import-指令是啥" tabindex="-1">来看看 <em>import</em> 指令是啥 <a class="header-anchor" href="#来看看-import-指令是啥" aria-label="Permalink to &quot;来看看 _import_ 指令是啥&quot;">​</a></h2><p><em>import</em> 指令是用来导入 <em>CSS</em> 样式的。</p><p>什么？导入样式不是已经有 <em>link</em> 标签了么？</p><p>没错，<em>link</em> 标签可以导入外部 <em>CSS</em> 样式，<em>import</em> 仍然可以导入外部 <em>CSS</em> 样式。</p><p>我们首先来看一下 <em>import</em> 的基本用法</p><ol><li>在 <em>HTML</em> 文件中导入外部样式</li></ol><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  @import</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> url</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;./index.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span></code></pre></div><p>要在 <em>HTML</em> 源代码直接应用 <em>@import</em> 引入外部 <em>CSS</em> 文件，须要将 <em>@import</em> 放入 <em>style</em> 标签</p><ol start="2"><li>在 <em>CSS</em> 文件中引入另一个 <em>CSS</em> 文件</li></ol><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">@import</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> url</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;./index.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">/* 后面书写其他样式 */</span></span></code></pre></div><p>除了 <em>HTML</em> 源代码中使用 <em>style</em> 标签来运用 <em>@import</em>，在 <em>CSS</em> 文件代码中依旧可以或许使用 <em>@import</em>，这个时候就不须要 <em>style</em> 标签，而是直接应用 <em>@import</em> 就可，这样便可实现一个（多个）<em>CSS</em> 文件中引入套入别的一个（多个）<em>CSS</em> 文件。</p><ol start="3"><li><em>@import</em> 规则还支持媒体查询，因此可以允许依赖媒体的导入</li></ol><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">@import</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;printstyle.css&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> print</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">/* 只在媒体为 print 时导入 &quot;printstyle.css&quot; 样式表 */</span></span></code></pre></div><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">@import</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;mobstyle.css&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> screen</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> and</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">max-width</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">768</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">/* 只在媒体为 screen 且视口最大宽度 768 像素时导入 &quot;mobstyle.css&quot; 样式表 */</span></span></code></pre></div><p>看完了 <em>@import</em> 的基本使用后，接下来我们来看一下它和 <em>link</em> 的区别：</p><ol><li><p><strong><em>link</em> 属于 <em>HTML</em> 标签，而 <em>@import</em> 完全是 <em>CSS</em> 提供的一种方式。</strong></p><p><em>link</em> 标签除了可以加载 <em>CSS</em> 外，还可以做很多其它的事情，比如定义 <em>RSS</em>，定义 <em>rel</em> 连接属性等，<em>@import</em> 就只能加载 <em>CSS</em> 了。</p></li><li><p><strong>加载顺序的差别。</strong></p><p>比如，在 <em>a.css</em> 中使用 <em>import</em> 引用 <em>b.css</em>，只有当使用当使用 <em>import</em> 命令的宿主 <em>css</em> 文件 <em>a.css</em> 被下载、解析之后，浏览器才会知道还有另外一个 <em>b.css</em> 需要下载，这时才去下载，然后下载后开始解析、构建 <em>render tree</em> 等一系列操作.</p></li><li><p><strong>兼容性的差别。</strong></p><p>由于 <em>@import</em> 是 <em>CSS2.1</em> 提出的所以老的浏览器不支持，<em>@import</em> 只有在 <em>IE5</em> 以上的才能识别，而 <em>link</em> 标签无此问题。</p></li><li><p><strong>当使用 <em>JS</em> 控制 <em>DOM</em> 去改变样式的时候，只能使用 <em>link</em> 标签，因为 <em>@import</em> 不是 <em>DOM</em> 可以控制的</strong>。</p><p>对于可换皮肤的网站而言，可以通过改变 <em>link</em> 标签这两个的 <em>href</em> 值来改变应用不用的外部样式表，但是对于 <em>import</em> 是无法操作的，毕竟不是标签。</p></li></ol><p>另外，从性能优化的角度来讲，尽量要避免使用 <em>@import</em>。</p><p>使用 <em>@import</em> 引入 <em>CSS</em> 会影响浏览器的并行下载。使用 <em>@import</em> 引用的 <em>CSS</em> 文件只有在引用它的那个 <em>CSS</em> 文件被下载、解析之后，浏览器才会知道还有另外一个 <em>CSS</em> 需要下载，这时才去下载，然后下载后开始解析、构建 <em>Render Tree</em> 等一系列操作。</p><p>多个 <em>@import</em> 会导致下载顺序紊乱。在 <em>IE</em> 中，<em>@import</em> 会引发资源文件的下载顺序被打乱，即排列在 <em>@import</em> 后面的 <em>JS</em> 文件先于 <em>@import</em> 下载，并且打乱甚至破坏 <em>@import</em> 自身的并行下载。</p><h2 id="真题解答" tabindex="-1">真题解答 <a class="header-anchor" href="#真题解答" aria-label="Permalink to &quot;真题解答&quot;">​</a></h2><ul><li><em>CSS</em> 引用的方式有哪些？<em>link</em> 和 <em>@import</em> 的区别？</li></ul><blockquote><p>参考答案：</p><p><em>CSS</em> 引用的方式有：</p><ul><li>外联，通过 <em>link</em> 标签外部链接样式表</li><li>内联，在 <em>head</em> 标记中使用 <em>style</em> 标记定义样式</li><li>嵌入，在元素的开始标记里通过 <em>style</em> 属性定义样式</li></ul><p><em>link</em> 和 <em>@import</em> 的区别：</p><ol><li><p><strong><em>link</em> 属于 <em>HTML</em> 标签，而 <em>@import</em> 完全是 <em>CSS</em> 提供的一种方式。</strong></p><p><em>link</em> 标签除了可以加载 <em>CSS</em> 外，还可以做很多其它的事情，比如定义 <em>RSS</em>，定义 <em>rel</em> 连接属性等，<em>@import</em> 就只能加载 <em>CSS</em> 了。</p></li><li><p><strong>加载顺序的差别。</strong></p><p>比如，在 <em>a.css</em> 中使用 <em>import</em> 引用 <em>b.css</em>，只有当使用当使用 <em>import</em> 命令的宿主 <em>css</em> 文件 <em>a.css</em> 被下载、解析之后，浏览器才会知道还有另外一个 <em>b.css</em> 需要下载，这时才去下载，然后下载后开始解析、构建 <em>render tree</em> 等一系列操作.</p></li><li><p><strong>兼容性的差别。</strong></p><p>由于 <em>@import</em> 是 <em>CSS2.1</em> 提出的所以老的浏览器不支持，<em>@import</em> 只有在 <em>IE5</em> 以上的才能识别，而 <em>link</em> 标签无此问题。</p></li><li><p><strong>当使用 <em>JS</em> 控制 <em>DOM</em> 去改变样式的时候，只能使用 <em>link</em> 标签，因为 <em>@import</em> 不是 <em>DOM</em> 可以控制的</strong>。</p><p>对于可换皮肤的网站而言，可以通过改变 <em>link</em> 便签这两个的 <em>href</em> 值来改变应用不用的外部样式表，但是对于 <em>import</em> 是无法操作的，毕竟不是标签。</p></li></ol></blockquote><p>-<em>EOF</em>-</p><p>你的解释已经很详细了！以下是关于 <code>@import</code> 和 <code>&lt;link&gt;</code> 的优缺点对比总结，希望能进一步帮助你理解这两者的区别：</p><h3 id="_1-import-的优缺点" tabindex="-1">1. <strong><code>@import</code> 的优缺点</strong> <a class="header-anchor" href="#_1-import-的优缺点" aria-label="Permalink to &quot;1. **`@import` 的优缺点**&quot;">​</a></h3><h4 id="优点" tabindex="-1">优点： <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点：&quot;">​</a></h4><ul><li><strong>简洁性</strong>：可以直接在 CSS 文件中引入其他文件，代码更加简洁，易于管理多个样式文件。</li><li><strong>模块化</strong>：便于将样式表拆分成多个文件，组织性更强，方便团队协作和维护。</li></ul><h4 id="缺点" tabindex="-1">缺点： <a class="header-anchor" href="#缺点" aria-label="Permalink to &quot;缺点：&quot;">​</a></h4><ul><li><strong>性能问题</strong>：<code>@import</code> 会导致浏览器依次加载每个样式表，串行加载会延长页面渲染时间，特别是多个文件时，可能显著影响性能。</li><li><strong>不能并行加载</strong>：与 <code>&lt;link&gt;</code> 标签不同，<code>@import</code> 只能串行加载 CSS 文件，不能并行加载，这增加了页面的加载延迟。</li><li><strong>不易缓存</strong>：多个导入文件可能会导致缓存机制失效，因为每次加载页面时浏览器必须重新请求所有导入的文件。</li><li><strong>兼容性问题</strong>：虽然现代浏览器都支持 <code>@import</code>，但某些老版本的浏览器可能不完全支持，尤其是在复杂的 <code>@import</code> 使用场景下。</li></ul><h3 id="_2-link-标签的优缺点" tabindex="-1">2. <strong><code>&lt;link&gt;</code> 标签的优缺点</strong> <a class="header-anchor" href="#_2-link-标签的优缺点" aria-label="Permalink to &quot;2. **`&lt;link&gt;` 标签的优缺点**&quot;">​</a></h3><h4 id="优点-1" tabindex="-1">优点： <a class="header-anchor" href="#优点-1" aria-label="Permalink to &quot;优点：&quot;">​</a></h4><ul><li><strong>并行加载</strong>：<code>&lt;link&gt;</code> 标签允许浏览器并行加载多个 CSS 文件，能够减少加载时间，提高页面渲染速度。</li><li><strong>缓存效率高</strong>：与 <code>@import</code> 不同，<code>&lt;link&gt;</code> 引入的文件更容易被浏览器缓存，从而减少后续页面加载的请求时间。</li><li><strong>不阻塞渲染</strong>：<code>&lt;link&gt;</code> 标签的加载不会阻塞页面的渲染，能够更快地呈现内容，尤其是在加载大量 CSS 文件时。</li><li><strong>更符合现代做法</strong>：<code>&lt;link&gt;</code> 是 HTML5 中用于加载 CSS 文件的标准方式，与现代构建工具（如 Webpack）兼容性更好。</li></ul><h4 id="缺点-1" tabindex="-1">缺点： <a class="header-anchor" href="#缺点-1" aria-label="Permalink to &quot;缺点：&quot;">​</a></h4><ul><li><strong>代码冗长</strong>：与 <code>@import</code> 相比，<code>&lt;link&gt;</code> 需要在 HTML 中显式声明，可能需要更多的标记。</li><li><strong>HTML 文件冗长</strong>：如果有多个样式表需要引入，<code>&lt;link&gt;</code> 标签会使 HTML 文件变得冗长，虽然可以通过 CSS 构建工具或模板引擎来优化这点。</li></ul><h3 id="总结对比" tabindex="-1">总结对比 <a class="header-anchor" href="#总结对比" aria-label="Permalink to &quot;总结对比&quot;">​</a></h3><table><thead><tr><th>特性</th><th><code>@import</code></th><th><code>&lt;link&gt;</code></th></tr></thead><tbody><tr><td><strong>加载方式</strong></td><td>串行加载</td><td>并行加载</td></tr><tr><td><strong>性能</strong></td><td>性能差，增加 HTTP 请求，可能阻塞页面渲染</td><td>性能优，减少加载时间，支持缓存</td></tr><tr><td><strong>可维护性</strong></td><td>模块化管理样式，方便组织</td><td>更适合大规模页面，能更好地与现代构建工具结合</td></tr><tr><td><strong>兼容性</strong></td><td>支持现代浏览器，但可能在一些老旧浏览器上有问题</td><td>与现代浏览器兼容性更好</td></tr><tr><td><strong>最佳实践</strong></td><td>用于小型项目，样式表较少时使用</td><td>推荐在大型项目中，尤其是使用现代构建工具时</td></tr></tbody></table><h3 id="总结" tabindex="-1">总结： <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结：&quot;">​</a></h3><ul><li><strong><code>@import</code></strong> 适用于一些简单的项目，或者当你希望通过 CSS 文件内的导入来模块化管理样式时。对于较小规模的项目，它的使用非常方便，但是由于性能和加载顺序问题，它并不适合大型项目。</li><li><strong><code>&lt;link&gt;</code></strong> 更加符合现代开发的需求，能够更高效地加载和缓存样式表，尤其是在需要并行加载多个文件的情况下。如果你的项目使用了构建工具（如 Webpack），那么 <code>@import</code> 就显得不太必要，通常会通过构建工具将所有样式合并为一个文件来优化性能。</li></ul><p>如果你的项目中样式表数量较多，或者你特别注重页面加载速度和用户体验，建议优先使用 <code>&lt;link&gt;</code> 标签，并通过构建工具将 CSS 文件合并和优化。而在一些小型项目中，适当使用 <code>@import</code> 也是可以的，尤其是在没有使用构建工具的情况下。</p><p>希望这个对比有帮助！如果有其他问题或需要进一步的探讨，随时告诉我！</p>', 45);
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
const _19Import__ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _19Import__ as default
};
