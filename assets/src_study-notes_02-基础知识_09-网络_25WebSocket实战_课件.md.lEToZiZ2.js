import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, k as createBaseVNode, a as createTextVNode, R as createStaticVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"WebSocket API","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/02-基础知识/09-网络/25WebSocket实战/课件.md","filePath":"src/study-notes/02-基础知识/09-网络/25WebSocket实战/课件.md","lastUpdated":1739501366000}');
const _sfc_main = { name: "src/study-notes/02-基础知识/09-网络/25WebSocket实战/课件.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "websocket-api",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("WebSocket API "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#websocket-api",
    "aria-label": 'Permalink to "WebSocket API"'
  }, "​")
], -1);
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket/WebSocket" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket/WebSocket</a></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> ws</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> WebSocket</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;地址&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 创建websocket连接，浏览器自动握手</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 事件：握手完成后触发</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">ws.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">onopen</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> () {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;连接到了服务器&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">};</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 事件：收到服务器消息后触发</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">ws.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">onmessage</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">e</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(e.data); </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// e.data：服务器发送的消息</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">};</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 事件：连接关闭后触发</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">ws.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">onclose</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> () {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;连接关闭了&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">};</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 发送消息到服务器</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">ws.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">send</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(消息);</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 连接状态：0-正在连接中  1-已连接  2-正在关闭中  3-已关闭</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">ws.readyState</span></span></code></pre></div><h1 id="socket-io" tabindex="-1">Socket.io <a class="header-anchor" href="#socket-io" aria-label="Permalink to &quot;Socket.io&quot;">​</a></h1>', 3);
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<blockquote><p>官网：<a href="https://socket.io/" target="_blank" rel="noreferrer">https://socket.io/</a></p></blockquote><p>原生的接口虽然简单，但是在实际应用中会造成很多麻烦</p><p>比如一个页面，既有K线，也有实时聊天，于是：</p><img src="http://mdrs.yuanjin.tech/img/20211029113505.png" alt="image-20211029113505007" style="zoom:50%;"><p>上图是一段时间中服务器给客户端推送的数据，你能区分这些数据都是什么意思吗？</p><p>这就是问题所在：连接双方可以在任何时候发送任何类型的数据，另一方必须要清楚这个数据的含义是什么</p><blockquote><p>回忆HTTP是如何处理这个问题的</p><p>你会如何解决这个问题</p></blockquote><p>虽然我们可以自行解决这些问题，但毕竟麻烦</p><p><strong>Socket.io</strong>帮助我们解决了这些问题，它把消息放到不同的<strong>事件</strong>中，通过监听和触发事件来实现对不同消息的处理</p><img src="http://mdrs.yuanjin.tech/img/20211029123907.png" alt="image-20211029123907859" style="zoom:50%;"><p>客户端和服务器双方事先约定好不同的事件，事件由谁监听，由谁触发，就可以把各种消息进行有序管理了</p><p><strong>注意，Socket.io为了实现这些要求，对消息格式进行了特殊处理，因此如果一方要使用Socket.io，双方必须都使用</strong></p><p>在客户端，使用Socket.io是非常简单的</p><p>参见：<a href="https://socket.io/docs/v4/client-installation/" target="_blank" rel="noreferrer">https://socket.io/docs/v4/client-installation/</a></p><blockquote><p>在约定事件名时要注意，Socket.io有一些预定义的事件名，比如message、connect等</p><p>为了避免冲突，建议自定义事件名使用一个特殊的前缀，比如<code>$</code></p></blockquote><blockquote><p>除此之外，Socket.io对低版本浏览器还进行了兼容处理</p><p>如果浏览器不支持WebSocket，Socket.io将使用长轮询（long polling）处理</p><p>另外，Socket.io还支持使用<em>命名空间</em>来进一步隔离业务，要了解这些高级功能，以及Socket.io的更多API，请参阅其<a href="https://socket.io/" target="_blank" rel="noreferrer">官方文档</a></p></blockquote><h1 id="接口文档" tabindex="-1">接口文档 <a class="header-anchor" href="#接口文档" aria-label="Permalink to &quot;接口文档&quot;">​</a></h1>', 17);
const _hoisted_22 = /* @__PURE__ */ createStaticVNode('<h2 id="测试接口" tabindex="-1">测试接口 <a class="header-anchor" href="#测试接口" aria-label="Permalink to &quot;测试接口&quot;">​</a></h2><p><strong>连接地址</strong>：ws://localhost:9527</p><p><strong>服务器消息：</strong></p><ol><li>服务器每隔3秒钟会发送一个消息给客户端</li><li>每次收到客户端的消息后，服务器会回应一个消息</li></ol><h2 id="聊天室接口" tabindex="-1">聊天室接口 <a class="header-anchor" href="#聊天室接口" aria-label="Permalink to &quot;聊天室接口&quot;">​</a></h2><p><strong>连接地址</strong>：ws://localhost:9528</p><p><strong>服务器触发的事件/客户端需要监听的事件：</strong></p><table><thead><tr><th style="text-align:left;">事件名</th><th>触发时机</th><th>传递的消息</th><th>传递消息示例</th></tr></thead><tbody><tr><td style="text-align:left;">$updateUser</td><td>有新用户进入<br>有老用户退出<br>自己进入</td><td>当前聊天室的用户数组</td><td>[&#39;张三&#39;, &#39;李四&#39;]</td></tr><tr><td style="text-align:left;">$name</td><td>自己进入</td><td>分配的用户名称</td><td>&quot;张三&quot;</td></tr><tr><td style="text-align:left;">$history</td><td>自己进入</td><td>历史聊天记录</td><td>[{<br> name:&quot;张三&quot;,<br> content:&quot;你好&quot;,<br> date: 1635484786373<br>}]</td></tr><tr><td style="text-align:left;">$message</td><td>其他人发送消息</td><td>消息对象</td><td>{<br> name:&quot;张三&quot;,<br> content:&quot;你好&quot;,<br> date: 1635484786373<br>}</td></tr><tr><td style="text-align:left;"></td><td></td><td></td><td></td></tr></tbody></table><p><strong>客户端触发的事件/服务器需要监听的事件：</strong></p><table><thead><tr><th>事件名</th><th>触发时机</th><th>传递的消息</th><th>传递消息示例</th></tr></thead><tbody><tr><td>$message</td><td>发送聊天消息</td><td>消息字符串</td><td>&quot;你好！&quot;</td></tr></tbody></table>', 10);
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
    _hoisted_22
  ]);
}
const __ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  __ as default
};
