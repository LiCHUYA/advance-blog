import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, k as createBaseVNode, a as createTextVNode, R as createStaticVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"HTTP1.0","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/02-基础知识/09-网络/23HTTP各版本差异/课件.md","filePath":"src/study-notes/02-基础知识/09-网络/23HTTP各版本差异/课件.md","lastUpdated":1739501366000}');
const _sfc_main = { name: "src/study-notes/02-基础知识/09-网络/23HTTP各版本差异/课件.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "http1-0",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("HTTP1.0 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#http1-0",
    "aria-label": 'Permalink to "HTTP1.0"'
  }, "​")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "无法复用连接",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("无法复用连接 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#无法复用连接",
    "aria-label": 'Permalink to "无法复用连接"'
  }, "​")
], -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "HTTP1.0为每个请求单独新开一个TCP连接", -1);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<p>由于每个请求都是独立的连接，因此会带来下面的问题：</p><ol><li><p>连接的建立和销毁都会占用服务器和客户端的资源，造成内存资源的浪费</p></li><li><p>连接的建立和销毁都会消耗时间，造成响应时间的浪费</p></li><li><p>无法充分利用带宽，造成带宽资源的浪费</p><blockquote><p>TCP协议的特点是「慢启动」，即一开始传输的数据量少，一段时间之后达到传输的峰值。而上面这种做法，会导致大量的请求在TCP达到传输峰值前就被销毁了</p></blockquote></li></ol><h2 id="队头阻塞" tabindex="-1">队头阻塞 <a class="header-anchor" href="#队头阻塞" aria-label="Permalink to &quot;队头阻塞&quot;">​</a></h2><img src="http://mdrs.yuanjin.tech/img/20211027133404.png" alt="image-20211027133404730" style="zoom:50%;" align="left"><h1 id="http1-1" tabindex="-1">HTTP1.1 <a class="header-anchor" href="#http1-1" aria-label="Permalink to &quot;HTTP1.1&quot;">​</a></h1>', 5);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "长连接",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("长连接 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#长连接",
    "aria-label": 'Permalink to "长连接"'
  }, "​")
], -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("为了解决HTTP1.0的问题，"),
  /* @__PURE__ */ createBaseVNode("strong", null, "HTTP1.1默认开启长连接"),
  /* @__PURE__ */ createTextVNode("，即让同一个TCP连接服务于多个请求-响应。")
], -1);
const _hoisted_11 = /* @__PURE__ */ createStaticVNode('<p>在这种情况下，多次请求响应可以共享同一个TCP连接，这不仅减少了TCP的握手和挥手时间，同时可以充分利用TCP「慢启动」的特点，有效的利用带宽。</p><blockquote><p>实际上，在HTTP1.0后期，虽然没有官方标准，但开发者们慢慢形成了一个共识：</p><p><strong>只要请求头中包含Connection:keep-alive，就表示客户端希望开启长连接，希望服务器响应后不要关闭TCP连接。如果服务器认可这一行为，即可保持TCP连接。</strong></p></blockquote><p>当需要的时候，任何一方都可以关闭TCP连接</p><blockquote><p>扩展知识</p><p>连接关闭的情况主要有三种：</p><ol><li>客户端在某一次请求中设置了<code>Connection:close</code>，服务器收到此请求后，响应结束立即关闭TCP</li><li>在没有请求时，客户端会不断对服务器进行心跳检测（一般每隔1秒）。一旦心跳检测停止，服务器立即关闭TCP</li><li>当客户端长时间没有新的请求到达服务器，服务器会主动关闭TCP。运维人员可以设置该时间。</li></ol></blockquote><p>由于一个TCP连接可以承载多次请求响应，并在一段时间内不会断开，因此这种连接称之为长连接。</p><h2 id="管道化和队头阻塞" tabindex="-1">管道化和队头阻塞 <a class="header-anchor" href="#管道化和队头阻塞" aria-label="Permalink to &quot;管道化和队头阻塞&quot;">​</a></h2><p>HTTP1.1允许在响应到达之前发送下一个请求，这样可以大幅缩减带宽限制时间</p><p><strong>但这样做会存在队头阻塞的问题</strong></p><img src="http://mdrs.yuanjin.tech/img/20211026175005.png" alt="image-20211026175005607" style="zoom:50%;" align="left"><p>由于多个请求使用的是同一个TCP连接，<strong>服务器必须按照请求到达的顺序进行响应</strong></p><blockquote><p>想一想为什么？</p></blockquote><p>于是，导致了一些后发出的请求，无法在处理完成后响应，产生了等待的时间，而这段时间的带宽可能是空闲的，这就造成了带宽的浪费</p><p>队头阻塞虽然<strong>发生在服务器</strong>，但这个问题的根源是客户端无法知晓服务器的响应是针对哪个请求的。</p><p>正是由于存在队头阻塞，我们常常使用下面的手段进行优化：</p><ul><li><p>通过减少文件数量，从而减少队头阻塞的几率</p></li><li><p>通过开辟多个TCP连接，实现真正的、有缺陷的并行传输</p><blockquote><p>浏览器会根据情况，为打开的页面自动开启TCP连接，对于同一个域名的连接最多6个</p><p>如果要突破这个限制，就需要把资源放到不同的域中</p></blockquote></li></ul><p><strong>然而，管道化并非一个成功的模型，它带来的队头阻塞造成非常多的问题，所以现代浏览器默认是关闭这种模式的</strong></p><h1 id="http2-0" tabindex="-1">HTTP2.0 <a class="header-anchor" href="#http2-0" aria-label="Permalink to &quot;HTTP2.0&quot;">​</a></h1>', 17);
const _hoisted_28 = /* @__PURE__ */ createStaticVNode('<img src="http://mdrs.yuanjin.tech/img/20211027114358.png" alt="image-20211027114358656" style="zoom:50%;" align="left"><h2 id="二进制分帧" tabindex="-1">二进制分帧 <a class="header-anchor" href="#二进制分帧" aria-label="Permalink to &quot;二进制分帧&quot;">​</a></h2><p>HTTP2.0可以允许以更小的单元传输数据，每个传输单元称之为<strong>帧</strong>，而每一个请求或响应的完整数据称之为<strong>流</strong>，每个流有自己的编号，每个帧会记录所属的流。</p><p>比如，服务器连续接到了客户端的两个请求，一个请求JS、一个请求CSS，两个文件如下：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> a</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(){}</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> b</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(){}</span></span></code></pre></div><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;">.container</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">{}</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;">.list</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">{}</span></span></code></pre></div><p>最终形成的帧可能如下</p><p><img src="http://mdrs.yuanjin.tech/img/20211027111317.png" alt="image-20211027111316940"></p><p>可以看出，每个帧都带了一个头部，记录了流的ID，这样做就能够准确的知道这一帧数据是属于哪个流的。</p><img src="http://mdrs.yuanjin.tech/img/20211027111536.png" alt="image-20211027111536553" style="zoom:50%;" align="left"><p>这样就真正的解决了共享TCP连接时的队头阻塞问题，实现了真正的<strong>多路复用</strong></p><p>不仅如此，由于传输时是以帧为单元传输的，无论是响应还是请求，都可以实现并发处理，即不同的传输可以交替进行。</p><p>由于进行了分帧，还可以设置传输优先级。</p><h2 id="头部压缩" tabindex="-1">头部压缩 <a class="header-anchor" href="#头部压缩" aria-label="Permalink to &quot;头部压缩&quot;">​</a></h2><p>HTTP2.0之前，所有的消息头都是以字符的形式完整传输的</p><p>可实际上，大部分头部信息都有很多的重复</p><p>为了解决这一问题，HTTP2.0使用头部压缩来减少消息头的体积</p><p><img src="http://mdrs.yuanjin.tech/img/20211027132744.png" alt="image-20211027132744018"></p><p>对于两张表都没有的头部，则使用Huffman编码压缩后进行传输，同时添加到动态表中</p><h2 id="服务器推" tabindex="-1">服务器推 <a class="header-anchor" href="#服务器推" aria-label="Permalink to &quot;服务器推&quot;">​</a></h2><p>HTTP2.0允许在客户端没有主动请求的情况下，服务器预先把资源推送给客户端</p><p>当客户端后续需要请求该资源时，则自动从之前推送的资源中寻找</p><h1 id="面试题" tabindex="-1">面试题 <a class="header-anchor" href="#面试题" aria-label="Permalink to &quot;面试题&quot;">​</a></h1>', 23);
const _hoisted_51 = /* @__PURE__ */ createStaticVNode("<ol><li><p>介绍下 <code>http1.0</code>、<code>http1.1</code>、<code>http2.0</code> 协议的区别？</p><blockquote><p>参考答案：</p><p>首先说 http1.0</p><p>它的特点是每次请求和响应完毕后都会销毁 TCP 连接，同时规定前一个响应完成后才能发送下一个请求。这样做有两个问题：</p><ol><li><p>无法复用连接</p><p>每次请求都要创建新的 TCP 连接，完成三次握手和四次挥手，网络利用率低</p></li><li><p>队头阻塞</p><p>如果前一个请求被某种原因阻塞了，会导致后续请求无法发送。</p></li></ol><p>然后是 http1.1</p><p>http1.1 是 http1.0 的改进版，它做出了以下改进：</p><ol><li><p>长连接</p><p>http1.1 允许在请求时增加请求头<code>connection:keep-alive</code>，这样便允许后续的客户端请求在一段时间内复用之前的 TCP 连接</p></li><li><p>管道化</p><p>基于长连接的基础，管道化可以不等第一个请求响应继续发送后面的请求，但响应的顺序还是按照请求的顺序返回。</p></li><li><p>缓存处理</p><p>新增响应头 cache-control，用于实现客户端缓存。</p></li><li><p>断点传输</p><p>在上传/下载资源时，如果资源过大，将其分割为多个部分，分别上传/下载，如果遇到网络故障，可以从已经上传/下载好的地方继续请求，不用从头开始，提高效率</p></li></ol><p>最后是 http2.0</p><p>http2.0 进一步优化了传输效率，它主要有以下改进：</p><ol><li><p>二进制分帧</p><p>将传输的消息分为更小的二进制帧，每帧有自己的标识序号，即便被随意打乱也能在另一端正确组装</p></li><li><p>多路复用</p><p>基于二进制分帧，在同一域名下所有访问都是从同一个 tcp 连接中走，并且不再有队头阻塞问题，也无须遵守响应顺序</p></li><li><p>头部压缩</p><p>http2.0 通过字典的形式，将头部中的常见信息替换为更少的字符，极大的减少了头部的数据量，从而实现更小的传输量</p></li><li><p>服务器推</p><p>http2.0 允许服务器直接推送消息给客户端，无须客户端明确的请求</p></li></ol></blockquote></li><li><p>为什么 HTTP1.1 不能实现多路复用（腾讯）</p><blockquote><p>参考答案：</p><p>HTTP/1.1 的传输单元是整个响应文本，因此接收方必须按序接收完所有的内容后才能接收下一个传输单元，否则就会造成混乱。而HTTP2.0的传输单元更小，是一个二进制帧，而且每个帧有针对所属流的编号，这样即便是不同的流交替传输，也可以很容易区分出每个帧是属于哪个流的。</p></blockquote></li><li><p>简单讲解一下 http2 的多路复用（网易）</p><blockquote><p>在 HTTP/2 中，有两个非常重要的概念，分别是帧（frame）和流（stream）。 帧代表着最小的数据单位，每个帧会标识出该帧属于哪个流，流也就是多个帧组成的数据流。 多路复用，就是在一个 TCP 连接中可以存在多条流。换句话说，也就是可以发送多个请求，对端可以通过帧中的标识知道属于哪个请求。通过这个技术，可以避免 HTTP 旧版本中的队头阻塞问题，极大的提高传输性能。</p></blockquote></li><li><p>http1.1 是如何复用 tcp 连接的？（网易）</p><blockquote><p>客户端请求服务器时，通过请求行告诉服务器使用的协议是 http1.1，同时在请求头中附带<code>connection:keep-alive</code>（为保持兼容），告诉服务器这是一个长连接，后续请求可以重复使用这一次的 TCP 连接。</p><p>这样做的好处是减少了三次握手和四次挥手的次数，一定程度上提升了网络利用率。但由于 http1.1 不支持多路复用，响应顺序必须按照请求顺序抵达客户端，不能真正实现并行传输，因此在 http2.0 出现之前，实际项目中往往把静态资源，比如图片，分发到不同域名下的资源服务器，以便实现真正的并行传输。</p></blockquote></li><li><p>http1.0、http2.0、http3.0 之间的区别</p><blockquote><p>参考答案：</p><p>http1.0</p><p>每次请求和响应完毕后都会销毁 TCP 连接，同时规定前一个响应完成后才能发送下一个请求。这样做有两个问题：</p><ol><li><p>无法复用连接</p><p>每次请求都要创建新的 TCP 连接，完成三次握手和四次挥手，网络利用率低</p></li><li><p>队头阻塞</p><p>如果前一个请求被某种原因阻塞了，会导致后续请求无法发送。</p></li></ol><p>http2.0</p><p>http2.0 优化了传输效率，它主要有以下改进：</p><ol><li><p>二进制分帧</p><p>将传输的消息分为更小的二进制帧，每帧有自己的标识序号，即便被随意打乱也能在另一端正确组装</p></li><li><p>多路复用</p><p>基于二进制分帧，在同一域名下所有访问都是从同一个 tcp 连接中走，并且不再有队头阻塞问题，也无须遵守响应顺序</p></li><li><p>头部压缩</p><p>http2.0 通过字典的形式，将头部中的常见信息替换为更少的字符，极大的减少了头部的数据量，从而实现更小的传输量</p></li><li><p>服务器推</p><p>http2.0 允许服务器直接推送消息给客户端，无须客户端明确的请求</p></li></ol><p>http3.0</p><p>http3.0 目前还在草案阶段，它完全抛弃了 TCP 协议，转而使用 UDP 协议，是为了进一步提升性能。</p><p>虽然 http2.0 进行了大量的优化，但它无法摆脱 TCP 协议本身的问题，比如建立连接时间长、对头阻塞问题等等。</p><p>为了保证传输的可靠性，http3.0 使用了 QUIC 协议。</p></blockquote></li></ol>", 1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ArticleMetadata = __unplugin_components_4;
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_Mermaid = resolveComponent("Mermaid");
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
    createVNode(_component_Mermaid, {
      id: "mermaid_1a962853",
      graph: "sequenceDiagram%0Arect%20rgb(191%2C155%2C248)%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20TCP%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%EF%BC%8C%E5%BB%BA%E7%AB%8B%E8%BF%9E%E6%8E%A5%0Aend%0Arect%20rgb(196%2C223%2C252)%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E8%AF%B7%E6%B1%82%0A%E6%9C%8D%E5%8A%A1%E5%99%A8-%3E%3E%E5%AE%A2%E6%88%B7%E7%AB%AF%3A%20%E5%93%8D%E5%BA%94%0Aend%0Arect%20rgb(191%2C155%2C248)%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20TCP%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B%EF%BC%8C%E9%94%80%E6%AF%81%E8%BF%9E%E6%8E%A5%0Aend%0Arect%20rgb(191%2C155%2C248)%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20TCP%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%EF%BC%8C%E5%BB%BA%E7%AB%8B%E8%BF%9E%E6%8E%A5%0Aend%0Arect%20rgb(196%2C223%2C252)%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E8%AF%B7%E6%B1%82%0A%E6%9C%8D%E5%8A%A1%E5%99%A8-%3E%3E%E5%AE%A2%E6%88%B7%E7%AB%AF%3A%20%E5%93%8D%E5%BA%94%0Aend%0Arect%20rgb(191%2C155%2C248)%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20TCP%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B%EF%BC%8C%E9%94%80%E6%AF%81%E8%BF%9E%E6%8E%A5%0Aend"
    }),
    _hoisted_4,
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
    _hoisted_9,
    _hoisted_10,
    createVNode(_component_Mermaid, {
      id: "mermaid_382ee1aa",
      graph: "sequenceDiagram%0Arect%20rgb(191%2C155%2C248)%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20TCP%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%EF%BC%8C%E5%BB%BA%E7%AB%8B%E8%BF%9E%E6%8E%A5%0Aend%0Arect%20rgb(196%2C223%2C252)%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E8%AF%B7%E6%B1%82%0A%E6%9C%8D%E5%8A%A1%E5%99%A8-%3E%3E%E5%AE%A2%E6%88%B7%E7%AB%AF%3A%20%E5%93%8D%E5%BA%94%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E8%AF%B7%E6%B1%82%0A%E6%9C%8D%E5%8A%A1%E5%99%A8-%3E%3E%E5%AE%A2%E6%88%B7%E7%AB%AF%3A%20%E5%93%8D%E5%BA%94%0Aend%0Arect%20rgb(191%2C155%2C248)%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20TCP%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B%EF%BC%8C%E9%94%80%E6%AF%81%E8%BF%9E%E6%8E%A5%0Aend"
    }),
    _hoisted_11,
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
    _hoisted_28,
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
    _hoisted_51
  ]);
}
const __ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  __ as default
};
