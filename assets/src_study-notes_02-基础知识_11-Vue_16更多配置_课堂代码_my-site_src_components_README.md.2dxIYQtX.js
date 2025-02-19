import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, k as createBaseVNode, a as createTextVNode, R as createStaticVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"Avatar","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/02-基础知识/11-Vue/16更多配置/课堂代码/my-site/src/components/README.md","filePath":"src/study-notes/02-基础知识/11-Vue/16更多配置/课堂代码/my-site/src/components/README.md","lastUpdated":1739501366000}');
const _sfc_main = { name: "src/study-notes/02-基础知识/11-Vue/16更多配置/课堂代码/my-site/src/components/README.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "avatar",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Avatar "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#avatar",
    "aria-label": 'Permalink to "Avatar"'
  }, "​")
], -1);
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<img src="http://mdrs.yuanjin.tech/img/20201130153821.png" alt="image-20201130153821293" style="zoom:50%;"><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table><thead><tr><th>属性名</th><th>含义</th><th>类型</th><th>必填</th><th>默认值</th></tr></thead><tbody><tr><td>url</td><td>头像图片路径</td><td>String</td><td>是</td><td>无</td></tr><tr><td>size</td><td>头像尺寸，宽高相等</td><td>Number</td><td>否</td><td>150</td></tr></tbody></table><h1 id="icon" tabindex="-1">Icon <a class="header-anchor" href="#icon" aria-label="Permalink to &quot;Icon&quot;">​</a></h1>', 4);
const _hoisted_6 = /* @__PURE__ */ createStaticVNode('<img src="http://mdrs.yuanjin.tech/img/20201130153927.png" alt="image-20201130153927256" style="zoom:50%;"><p>图标组件</p><p>使用的图标源来自于「阿里巴巴矢量库」</p><h2 id="属性-1" tabindex="-1">属性 <a class="header-anchor" href="#属性-1" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table><thead><tr><th>属性名</th><th>含义</th><th>类型</th><th>必填</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>图标类型</td><td>String</td><td>是</td><td>无</td></tr></tbody></table><p>有效的图标类型：</p><img src="http://mdrs.yuanjin.tech/img/20201130155542.jpg" alt="iShot2020-11-30下午03.47.09" style="zoom:33%;"><h1 id="pager" tabindex="-1">Pager <a class="header-anchor" href="#pager" aria-label="Permalink to &quot;Pager&quot;">​</a></h1>', 8);
const _hoisted_14 = /* @__PURE__ */ createStaticVNode('<img src="http://mdrs.yuanjin.tech/img/20201113130301.png" style="zoom:50%;"><h2 id="属性-2" tabindex="-1">属性 <a class="header-anchor" href="#属性-2" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table><thead><tr><th>属性名</th><th>含义</th><th>类型</th><th>必填</th><th>默认值</th></tr></thead><tbody><tr><td>current</td><td>当前页码</td><td>Number</td><td>否</td><td>1</td></tr><tr><td>total</td><td>总数据量</td><td>Number</td><td>否</td><td>0</td></tr><tr><td>limit</td><td>页容量</td><td>Number</td><td>否</td><td>10</td></tr><tr><td>visibleNumber</td><td>可见页码数</td><td>Number</td><td>否</td><td>10</td></tr></tbody></table><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><table><thead><tr><th>事件名</th><th>含义</th><th>事件参数</th><th>参数类型</th></tr></thead><tbody><tr><td>pageChange</td><td>页码变化</td><td>新的页码</td><td>Number</td></tr></tbody></table><h1 id="empty" tabindex="-1">Empty <a class="header-anchor" href="#empty" aria-label="Permalink to &quot;Empty&quot;">​</a></h1>', 6);
const _hoisted_20 = /* @__PURE__ */ createStaticVNode('<img src="http://mdrs.yuanjin.tech/img/20201130165011.png" alt="image-20201130165011681" style="zoom:50%;"><p>该组件需要在外层容器中横向垂直居中</p><h2 id="属性-3" tabindex="-1">属性 <a class="header-anchor" href="#属性-3" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table><thead><tr><th>属性名</th><th>含义</th><th>类型</th><th>必填</th><th>默认值</th></tr></thead><tbody><tr><td>text</td><td>显示的文字</td><td>String</td><td>否</td><td>&quot;无数据&quot;</td></tr></tbody></table><h1 id="imageloader" tabindex="-1">ImageLoader <a class="header-anchor" href="#imageloader" aria-label="Permalink to &quot;ImageLoader&quot;">​</a></h1>', 5);
const _hoisted_25 = /* @__PURE__ */ createStaticVNode('<p>该组件可以实现一个渐进式图片</p><p><img src="http://mdrs.yuanjin.tech/img/20201115132049.gif" alt="alt tag"></p><h2 id="属性-4" tabindex="-1">属性 <a class="header-anchor" href="#属性-4" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table><thead><tr><th>属性名</th><th>含义</th><th>类型</th><th>必填</th><th>默认值</th></tr></thead><tbody><tr><td>src</td><td>原始图片的路径</td><td>String</td><td>是</td><td>无</td></tr><tr><td>placeholder</td><td>原始图片加载完成前的占位图片</td><td>String</td><td>是</td><td>无</td></tr><tr><td>duration</td><td>原始图片加载完成后，切换到原始图经过的毫秒数</td><td>Number</td><td>否</td><td>500</td></tr></tbody></table><h2 id="事件-1" tabindex="-1">事件 <a class="header-anchor" href="#事件-1" aria-label="Permalink to &quot;事件&quot;">​</a></h2><table><thead><tr><th>事件名</th><th>含义</th><th>事件参数</th><th>参数类型</th></tr></thead><tbody><tr><td>load</td><td>原始图片加载完成后触发</td><td>无</td><td>无</td></tr></tbody></table><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FF938A;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">ImageLoader</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> </span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;">	src</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&amp;crop=entropy&amp;w=3456&amp;h=2304&quot;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;">  placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100&quot;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">/&gt;</span></span></code></pre></div><h1 id="siteaside" tabindex="-1">SiteAside <a class="header-anchor" href="#siteaside" aria-label="Permalink to &quot;SiteAside&quot;">​</a></h1>', 9);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("img", {
  src: "http://mdrs.yuanjin.tech/img/20201130200148.png",
  alt: "image-20201130200148681",
  style: { "zoom": "33%" }
}, null, -1);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("p", null, "网站侧边栏", -1);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("p", null, "宽度和高度撑满外层容器", -1);
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "layout",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Layout "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#layout",
    "aria-label": 'Permalink to "Layout"'
  }, "​")
], -1);
const _hoisted_38 = /* @__PURE__ */ createStaticVNode('<p>使用示例：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FF938A;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">Layout</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">template</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> #left</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      左边栏区域，宽度适应内容，溢出隐藏</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      主区域，宽度占满剩余空间，溢出隐藏</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">template</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> #right</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      右边栏区域，宽度适应内容，溢出隐藏</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#FF938A;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">Layout</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span></code></pre></div><img src="http://mdrs.yuanjin.tech/img/20201202154014.png" alt="image-20201202154014492" style="zoom:40%;"><h2 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h2><table><thead><tr><th>插槽名</th><th>含义</th></tr></thead><tbody><tr><td>default</td><td>中间主区域</td></tr><tr><td>left</td><td>左边栏</td></tr><tr><td>right</td><td>右边栏</td></tr></tbody></table><h1 id="messagearea" tabindex="-1">MessageArea <a class="header-anchor" href="#messagearea" aria-label="Permalink to &quot;MessageArea&quot;">​</a></h1>', 6);
const _hoisted_44 = /* @__PURE__ */ createStaticVNode('<p>消息区域组件，可用于「评论区」和「留言板」</p><p><img src="http://mdrs.yuanjin.tech/img/20210118140742.png" alt="image-20210118140742643"></p><h2 id="属性-5" tabindex="-1">属性 <a class="header-anchor" href="#属性-5" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table><thead><tr><th>属性名</th><th>含义</th><th>类型</th><th>必填</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>列表标题</td><td>String</td><td>否</td><td>&quot;&quot;</td></tr><tr><td>subTitle</td><td>列表副标题</td><td>String</td><td>否</td><td>&quot;&quot;</td></tr><tr><td>list</td><td>列表数据</td><td>Array</td><td>否</td><td>[]</td></tr><tr><td>isListLoading</td><td>列表是否正在加载中</td><td>Boolean</td><td>否</td><td>false</td></tr></tbody></table><h2 id="事件-2" tabindex="-1">事件 <a class="header-anchor" href="#事件-2" aria-label="Permalink to &quot;事件&quot;">​</a></h2><table><thead><tr><th>事件名</th><th>含义</th><th>事件参数</th><th>参数类型</th></tr></thead><tbody><tr><td>submit</td><td>用户点击提交时触发</td><td>数据对象</td><td>Object</td></tr></tbody></table><p><code>submit</code>的事件参数格式为：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">{</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">  nickname</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;昵称&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">  content</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;内容&quot;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div>', 8);
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
    _hoisted_14,
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
    _hoisted_20,
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
    _hoisted_34,
    _hoisted_35,
    _hoisted_36,
    _hoisted_37,
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
    _hoisted_38,
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
    _hoisted_44
  ]);
}
const README = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  README as default
};
