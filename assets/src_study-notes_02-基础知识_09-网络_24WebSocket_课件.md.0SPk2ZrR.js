import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, k as createBaseVNode, a as createTextVNode, R as createStaticVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"实时场景的旧处理方案","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/02-基础知识/09-网络/24WebSocket/课件.md","filePath":"src/study-notes/02-基础知识/09-网络/24WebSocket/课件.md","lastUpdated":1739501366000}');
const _sfc_main = { name: "src/study-notes/02-基础知识/09-网络/24WebSocket/课件.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("blockquote", null, [
  /* @__PURE__ */ createBaseVNode("p", null, "WebSocket协议（rfc6455）原文地址："),
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createBaseVNode("a", {
      href: "https://datatracker.ietf.org/doc/html/rfc6455",
      target: "_blank",
      rel: "noreferrer"
    }, "https://datatracker.ietf.org/doc/html/rfc6455")
  ])
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "实时场景的旧处理方案",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("实时场景的旧处理方案 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#实时场景的旧处理方案",
    "aria-label": 'Permalink to "实时场景的旧处理方案"'
  }, "​")
], -1);
const _hoisted_3 = /* @__PURE__ */ createStaticVNode('<p>考虑网页中的以下场景：</p><ul><li>股票K线图</li><li>聊天</li><li>警报、重要通知</li><li>余座</li><li>抢购页面的库存</li><li>......</li></ul><p>上述场景有一个共同特点——<strong>实时性</strong></p><p>这种对实时性有要求的页面，会带来一些问题</p><p>比如下面的聊天场景</p><p><img src="http://mdrs.yuanjin.tech/img/20211028160932.png" alt="image-20211028160932756"></p><p>由于HTTP协议是请求-响应模式，请求必须在前，响应必须在后，这就导致了服务器无法「主动」的把消息告诉客户端。</p><p>开发者想了很多办法来解决这一问题</p><p>当然终极解决方案自然是WebSocket，但了解过去的一些做法、参观前辈们经历的痛苦还是有益的。</p><h2 id="短轮询-short-polling" tabindex="-1">短轮询 short polling <a class="header-anchor" href="#短轮询-short-polling" aria-label="Permalink to &quot;短轮询 short polling&quot;">​</a></h2><p>短轮询是一种「话痨式」的方式</p><p>客户端每隔一小段时间就向服务器请求一次，询问有没有新消息</p>', 12);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("p", null, "实现短轮询是非常简单的，客户端只需要设置一个计时器不断发送请求即可", -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("p", null, "这种方案的缺陷是非常明显的：", -1);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "会产生大量无意义的请求"),
  /* @__PURE__ */ createBaseVNode("li", null, "会频繁打开关闭连接"),
  /* @__PURE__ */ createBaseVNode("li", null, "实时性并不高")
], -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "长轮询-long-polling",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("长轮询 long polling "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#长轮询-long-polling",
    "aria-label": 'Permalink to "长轮询 long polling"'
  }, "​")
], -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("我们的前辈在有限的条件下，充分发挥智慧，来解决短轮询的问题，于是演化为"),
  /* @__PURE__ */ createBaseVNode("strong", null, "长轮询")
], -1);
const _hoisted_20 = /* @__PURE__ */ createStaticVNode('<p>长轮询有效的解决了「话痨问题」，让每一次请求和响应都是有意义的</p><p>但长轮询仍然存在问题：</p><ul><li><p>客户端长时间收不到响应会导致超时，从而主动断开和服务器的连接</p><blockquote><p>这种情况是可以处理的，但ajax请求因为超时而结束时，立即重新发送请求到服务器</p><p>虽然这种做法会让之前的请求变得无意义，但毕竟比短轮询好多了</p></blockquote></li><li><p>由于客户端可能「过早的」请求了服务器，服务器不得不挂起这个请求直到新消息的出现。这会让服务器长时间的占用资源却没什么实际的事情可做。</p></li></ul><h1 id="websocket" tabindex="-1">WebSocket <a class="header-anchor" href="#websocket" aria-label="Permalink to &quot;WebSocket&quot;">​</a></h1>', 4);
const _hoisted_24 = /* @__PURE__ */ createStaticVNode('<p>伴随着HTML5出现的WebSocket，从<strong>协议</strong>上赋予了服务器主动推送消息的能力</p><img src="http://mdrs.yuanjin.tech/img/20211028171840.png" alt="image-20211028171840145" style="zoom:50%;" align="left"><p>从上图可以看出：</p><ul><li>WebSocket也是建立在TCP协议之上的，利用的是TCP全双工通信的能力</li><li>使用WebSocket，会经历两个阶段：握手阶段、通信阶段</li></ul><p>虽然优于轮询方案，但WebSocket仍然是有缺点的：</p><ul><li><p>兼容性</p><p>WebSocket是HTML5新增的内容，因此古董版本的浏览器并不支持</p></li><li><p>维持TCP连接需要耗费资源</p><p>对于那些消息量少的场景，维持TCP连接确实会造成资源的浪费</p><blockquote><p>为了充分利用TCP连接的资源，在使用了WebSocket的页面，可以放弃ajax，都用WebSocket进行通信，当然这会带来程序设计上的一些问题，需要权衡。</p></blockquote></li></ul><h2 id="握手" tabindex="-1">握手 <a class="header-anchor" href="#握手" aria-label="Permalink to &quot;握手&quot;">​</a></h2><blockquote><p>WebSocket协议是一个高扩展性的协议，详细内容会比较复杂，这里仅讲解面试中会问到的握手协议</p></blockquote><p>当客户端需要和服务器使用WebSocket进行通信时，首先会使用<strong>HTTP协议</strong>完成一次特殊的请求-响应，这一次请求-响应就是<strong>WebSocket握手</strong></p><p>在握手阶段，首先由客户端向服务器发送一个请求，请求地址格式如下：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 使用HTTP</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">ws://mysite.com/path</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 使用HTTPS</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">wss://mysite.com/path</span></span></code></pre></div><p>请求头如下：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">Connection: Upgrade </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">/* 嘿，后续咱们别用HTTP了，升级吧 */</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">Upgrade: websocket </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">/* 我们把后续的协议升级为websocket */</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">Sec-WebSocket-Version: 13 </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">/* websocket协议版本就用13好吗？ */</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">Sec-WebSocket-Key: YWJzZmFkZmFzZmRhYw== </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">/* 暗号：天王盖地虎 */</span></span></code></pre></div><p>服务器如果同意，就应该响应下面的消息</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">HTTP/1</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;">.1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> 101 Switching Protocols </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">/* 换，马上换协议 */</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">Connection: Upgrade </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">/* 协议升级了 */</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">Upgrade: websocket </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">/* 升级到websocket */</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">Sec-WebSocket-Accept: ZzIzMzQ1Z2V3NDUyMzIzNGVy </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">/* 暗号：小鸡炖蘑菇 */</span></span></code></pre></div><p><strong>握手完成，后续消息收发不再使用HTTP，任何一方都可以主动发消息给对方</strong></p><h1 id="面试题" tabindex="-1">面试题 <a class="header-anchor" href="#面试题" aria-label="Permalink to &quot;面试题&quot;">​</a></h1>', 17);
const _hoisted_41 = /* @__PURE__ */ createStaticVNode("<ol><li><p>webSocket 协议是什么，能简述一下吗？</p><blockquote><p>参考答案：</p><p>websocket 协议 HTML5 带来的新协议，相对于 http，它是一个持久连接的协议，它利用 http 协议完成握手，然后通过 TCP 连接通道发送消息，使用 websocket 协议可以实现服务器主动推送消息。</p><p>首先，客户端若要发起 websocket 连接，首先必须向服务器发送 http 请求以完成握手，请求行中的 path 需要使用<code>ws:</code>开头的地址，请求头中要分别加入<code>upgrade、connection、Sec-WebSocket-Key、Sec-WebSocket-Version</code>标记</p><p>然后，服务器收到请求后，发现这是一个 websocket 协议的握手请求，于是响应行中包含<code>Switching Protocols</code>，同时响应头中包含<code>upgrade、connection、Sec-WebSocket-Accept</code>标记</p><p>当客户端收到响应后即可完成握手，随后使用建立的 TCP 连接直接发送和接收消息。</p></blockquote></li><li><p>webSocket 与传统的 http 有什么优势</p><blockquote><p>参考答案：</p><p>当页面中需要观察实时数据的变化（比如聊天、k 线图）时，过去我们往往使用两种方式完成</p><p>第一种是短轮询，即客户端每隔一段时间就向服务器发送消息，询问有没有新的数据</p><p>第二种是长轮询，发起一次请求询问服务器，服务器可以将该请求挂起，等到有新消息时再进行响应。响应后，客户端立即又发起一次请求，重复整个流程。</p><p>无论是哪一种方式，都暴露了 http 协议的弱点，即响应必须在请求之后发生，服务器是被动的，无法主动推送消息。而让客户端不断的发起请求又白白的占用了资源。</p><p>websocket 的出现就是为了解决这个问题，它利用 http 协议完成握手之后，就可以与服务器建立持久的连接，服务器可以在任何需要的时候，主动推送消息给客户端，这样占用的资源最少，同时实时性也最高。</p></blockquote></li><li><p>前端如何实现即时通讯？</p><blockquote><p>参考答案：</p><ol><li>短轮询。即客户端每隔一段时间就向服务器发送消息，询问有没有新的数据</li><li>长轮询，发起一次请求询问服务器，服务器可以将该请求挂起，等到有新消息时再进行响应。响应后，客户端立即又发起一次请求，重复整个流程。</li><li>websocket，握手完毕后会建立持久性的连接通道，随后服务器可以在任何时候推送新消息给客户端</li></ol></blockquote></li></ol>", 1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ArticleMetadata = __unplugin_components_4;
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_Mermaid = resolveComponent("Mermaid");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
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
    _hoisted_3,
    createVNode(_component_Mermaid, {
      id: "mermaid_382ee205",
      graph: "sequenceDiagram%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E6%9C%89%E6%96%B0%E6%B6%88%E6%81%AF%E5%90%97%EF%BC%9F%0A%E6%9C%8D%E5%8A%A1%E5%99%A8-%3E%3E%E5%AE%A2%E6%88%B7%E7%AB%AF%3A%20%E6%B2%A1%0ANote%20over%20%E5%AE%A2%E6%88%B7%E7%AB%AF%2C%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E4%B8%80%E6%AE%B5%E6%97%B6%E9%97%B4%E5%90%8E...%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E6%9C%89%E6%96%B0%E6%B6%88%E6%81%AF%E5%90%97%EF%BC%9F%0A%E6%9C%8D%E5%8A%A1%E5%99%A8-%3E%3E%E5%AE%A2%E6%88%B7%E7%AB%AF%3A%20%E6%B2%A1%0ANote%20over%20%E5%AE%A2%E6%88%B7%E7%AB%AF%2C%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E4%B8%80%E6%AE%B5%E6%97%B6%E9%97%B4%E5%90%8E...%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E6%9C%89%E6%96%B0%E6%B6%88%E6%81%AF%E5%90%97%EF%BC%9F%0A%E6%9C%8D%E5%8A%A1%E5%99%A8-%3E%3E%E5%AE%A2%E6%88%B7%E7%AB%AF%3A%20%E6%9C%89%EF%BC%8Cuser1%E5%AF%B9%E4%BD%A0%E8%AF%B4%EF%BC%9A%E4%BD%A0%E5%A5%BD%0ANote%20over%20%E5%AE%A2%E6%88%B7%E7%AB%AF%2C%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E4%B8%80%E6%AE%B5%E6%97%B6%E9%97%B4%E5%90%8E...%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E6%9C%89%E6%96%B0%E6%B6%88%E6%81%AF%E5%90%97%EF%BC%9F%0A%E6%9C%8D%E5%8A%A1%E5%99%A8-%3E%3E%E5%AE%A2%E6%88%B7%E7%AB%AF%3A%20%E6%B2%A1%0ANote%20over%20%E5%AE%A2%E6%88%B7%E7%AB%AF%2C%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E4%B8%80%E6%AE%B5%E6%97%B6%E9%97%B4%E5%90%8E...%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E6%9C%89%E6%96%B0%E6%B6%88%E6%81%AF%E5%90%97%EF%BC%9F%0A%E6%9C%8D%E5%8A%A1%E5%99%A8-%3E%3E%E5%AE%A2%E6%88%B7%E7%AB%AF%3A%20%E6%B2%A1"
    }),
    _hoisted_15,
    _hoisted_16,
    _hoisted_17,
    _hoisted_18,
    _hoisted_19,
    createVNode(_component_Mermaid, {
      id: "mermaid_64a570de",
      graph: "sequenceDiagram%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%3E%2B%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E6%9C%89%E6%96%B0%E6%B6%88%E6%81%AF%E5%90%97%EF%BC%9F%0ANote%20right%20of%20%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E6%B2%A1%E6%9C%89%E6%B6%88%E6%81%AF%E4%B8%8D%E4%BC%9A%E5%93%8D%E5%BA%94%0ANote%20right%20of%20%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E4%B8%80%E6%AE%B5%E6%97%B6%E9%97%B4%E5%90%8E...%0A%E6%9C%8D%E5%8A%A1%E5%99%A8-%3E%3E-%E5%AE%A2%E6%88%B7%E7%AB%AF%3A%20user1%E5%AF%B9%E4%BD%A0%E8%AF%B4%EF%BC%9A%E4%BD%A0%E5%A5%BD%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%3E%2B%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E6%9C%89%E6%96%B0%E6%B6%88%E6%81%AF%E5%90%97%EF%BC%9F%0ANote%20right%20of%20%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E6%B2%A1%E6%9C%89%E6%B6%88%E6%81%AF%E4%B8%8D%E4%BC%9A%E5%93%8D%E5%BA%94%0ANote%20right%20of%20%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E4%B8%80%E6%AE%B5%E6%97%B6%E9%97%B4%E5%90%8E...%0A%E6%9C%8D%E5%8A%A1%E5%99%A8-%3E%3E-%E5%AE%A2%E6%88%B7%E7%AB%AF%3A%20user1%E5%AF%B9%E4%BD%A0%E8%AF%B4%EF%BC%9A%E4%BD%A0%E5%90%83%E4%BA%86%E6%B2%A1%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20......"
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
    _hoisted_24,
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
    _hoisted_41
  ]);
}
const __ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  __ as default
};
