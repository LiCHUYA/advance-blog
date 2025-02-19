import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, k as createBaseVNode, a as createTextVNode, R as createStaticVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"TCP收发数据流程","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/02-基础知识/09-网络/16TCP协议/课件.md","filePath":"src/study-notes/02-基础知识/09-网络/16TCP协议/课件.md","lastUpdated":1739501366000}');
const _sfc_main = { name: "src/study-notes/02-基础知识/09-网络/16TCP协议/课件.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: "http://mdrs.yuanjin.tech/img/20211008163417.png",
    alt: "image-20211008163417521"
  })
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: "http://mdrs.yuanjin.tech/img/20211008163458.png",
    alt: "image-20211008163458168"
  })
], -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "tcp收发数据流程",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("TCP收发数据流程 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#tcp收发数据流程",
    "aria-label": 'Permalink to "TCP收发数据流程"'
  }, "​")
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("img", {
  src: "http://mdrs.yuanjin.tech/img/20211021122224.png",
  alt: "image-20211021122224411",
  style: { "zoom": "50%" }
}, null, -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "tcp如何收发数据",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("TCP如何收发数据 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#tcp如何收发数据",
    "aria-label": 'Permalink to "TCP如何收发数据"'
  }, "​")
], -1);
const _hoisted_6 = /* @__PURE__ */ createStaticVNode('<h2 id="分段发送" tabindex="-1">分段发送 <a class="header-anchor" href="#分段发送" aria-label="Permalink to &quot;分段发送&quot;">​</a></h2><img src="http://mdrs.yuanjin.tech/img/20211021123315.png" alt="image-20211021123309261" style="zoom:50%;" align="left"><h2 id="可靠传输" tabindex="-1">可靠传输 <a class="header-anchor" href="#可靠传输" aria-label="Permalink to &quot;可靠传输&quot;">​</a></h2><p>在TCP协议中，任何时候、任何一方都可以主动发送数据给另一方</p><p>为了解决数据报丢失、数据报错乱等问题，TCP协议要求：<strong>接收方收到数据报后，必须对数据报进行确认！</strong></p><img src="http://mdrs.yuanjin.tech/img/20211021124852.png" alt="image-20211021124852569" style="zoom:50%;" align="left"><ul><li>seq：表示这次数据报的序号</li><li>ACK：表示这次数据报是一个确认数据报</li><li>ack：表示期望下一次接收的数据报序号</li></ul><p>发送方如果长时间没有收到确认数据报（ACK=1），则会判定丢失或者是错误，然后重发</p><h1 id="连接的建立-三次握手" tabindex="-1">连接的建立（三次握手） <a class="header-anchor" href="#连接的建立-三次握手" aria-label="Permalink to &quot;连接的建立（三次握手）&quot;">​</a></h1>', 9);
const _hoisted_15 = /* @__PURE__ */ createStaticVNode('<p>TCP协议要实现数据的收发，必须要先建立连接</p><p>连接的本质其实就是双方各自开辟的一块儿内存空间，空间中主要是数据缓冲区和一些变量</p><img src="http://mdrs.yuanjin.tech/img/20211021125708.png" alt="image-20211021125708143" style="zoom:50%;" align="left"><p><strong>连接建立的过程需要经过三次数据报传输，因此称之为三次握手</strong></p><blockquote><p>开始</p><p>客户端：我说话能听见吗？</p><p>服务器：能听见，我说话能听见吗？</p><p>客户端：能听见</p><p>结束</p></blockquote><img src="http://mdrs.yuanjin.tech/img/20211021131710.png" alt="image-20211021131710197" style="zoom:50%;" align="left"><h1 id="连接的销毁-四次挥手" tabindex="-1">连接的销毁（四次挥手） <a class="header-anchor" href="#连接的销毁-四次挥手" aria-label="Permalink to &quot;连接的销毁（四次挥手）&quot;">​</a></h1>', 7);
const _hoisted_22 = /* @__PURE__ */ createStaticVNode('<blockquote><p>开始</p><p>客户端：我说完了，挂了？</p><p>服务器：我明白你说完了，但别忙挂，我还有话要说。</p><p>服务器继续说......</p><p>服务器：我也说完了，挂了？</p><p>客户端：好的！</p><p>结束</p></blockquote><img src="http://mdrs.yuanjin.tech/img/20211021143028.png" alt="image-20211021143028167" style="zoom:50%;" align="left"><h1 id="http和tcp的关系" tabindex="-1">HTTP和TCP的关系 <a class="header-anchor" href="#http和tcp的关系" aria-label="Permalink to &quot;HTTP和TCP的关系&quot;">​</a></h1>', 3);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("img", {
  src: "http://mdrs.yuanjin.tech/img/20211021134242.png",
  alt: "image-20211021134242311",
  style: { "zoom": "50%" },
  align: "left"
}, null, -1);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("HTTP协议是对内容格式的规定，它"),
  /* @__PURE__ */ createBaseVNode("strong", null, "使用"),
  /* @__PURE__ */ createTextVNode("了TCP协议完成消息的可靠传输")
], -1);
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("p", null, "在具体使用TCP协议时：", -1);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("ol", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "客户端发消息给服务器叫做请求，服务器发消息给客户端叫做响应"),
  /* @__PURE__ */ createBaseVNode("li", null, "使用HTTP协议的服务器不会主动发消息给客户端（尽管TCP可以），只对请求进行响应"),
  /* @__PURE__ */ createBaseVNode("li", null, "每一个HTTP请求-响应，都要先建立TCP连接（三次握手），然后完成请求-响应后，再销毁连接（四次挥手）。这就导致每次请求-响应都是相互独立的，无法保持状态。")
], -1);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("h1", {
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
const _hoisted_30 = /* @__PURE__ */ createStaticVNode("<ol><li><p>简述 TCP 连接的过程（淘系）</p><blockquote><p>参考答案：</p><p>TCP 协议通过三次握手建立可靠的点对点连接，具体过程是：</p><p>首先服务器进入监听状态，然后即可处理连接</p><p>第一次握手：建立连接时，客户端发送 syn 包到服务器，并进入 SYN_SENT 状态，等待服务器确认。在发送的包中还会包含一个初始序列号 seq。此次握手的含义是客户端希望与服务器建立连接。</p><p>第二次握手：服务器收到 syn 包，然后回应给客户端一个 SYN+ACK 包，此时服务器进入 SYN_RCVD 状态。此次握手的含义是服务端回应客户端，表示已收到并同意客户端的连接请求。</p><p>第三次握手：客户端收到服务器的 SYN 包后，向服务器再次发送 ACK 包，并进入 ESTAB_LISHED 状态。</p><p>最后，服务端收到客户端的 ACK 包，于是也进入 ESTAB_LISHED 状态，至此，连接建立完成</p></blockquote></li><li><p>谈谈你对 TCP 三次握手和四次挥手的理解</p><blockquote><p>TCP 协议通过三次握手建立可靠的点对点连接，具体过程是：</p><p>首先服务器进入监听状态，然后即可处理连接</p><p>第一次握手：建立连接时，客户端发送 syn 包到服务器，并进入 SYN_SENT 状态，等待服务器确认。在发送的包中还会包含一个初始序列号 seq。此次握手的含义是客户端希望与服务器建立连接。</p><p>第二次握手：服务器收到 syn 包，然后回应给客户端一个 SYN+ACK 包，此时服务器进入 SYN_RCVD 状态。此次握手的含义是服务端回应客户端，表示已收到并同意客户端的连接请求。</p><p>第三次握手：客户端收到服务器的 SYN 包后，向服务器再次发送 ACK 包，并进入 ESTAB_LISHED 状态。</p><p>最后，服务端收到客户端的 ACK 包，于是也进入 ESTAB_LISHED 状态，至此，连接建立完成</p><p>当需要关闭连接时，需要进行四次挥手才能关闭</p><ol><li>Client 向 Server 发送 FIN 包，表示 Client 主动要关闭连接，然后进入 FIN_WAIT_1 状态，等待 Server 返回 ACK 包。此后 Client 不能再向 Server 发送数据，但能读取数据。</li><li>Server 收到 FIN 包后向 Client 发送 ACK 包，然后进入 CLOSE_WAIT 状态，此后 Server 不能再读取数据，但可以继续向 Client 发送数据。</li><li>Client 收到 Server 返回的 ACK 包后进入 FIN_WAIT_2 状态，等待 Server 发送 FIN 包。</li><li>Server 完成数据的发送后，将 FIN 包发送给 Client，然后进入 LAST_ACK 状态，等待 Client 返回 ACK 包，此后 Server 既不能读取数据，也不能发送数据。</li><li>Client 收到 FIN 包后向 Server 发送 ACK 包，然后进入 TIME_WAIT 状态，接着等待足够长的时间（2MSL）以确保 Server 接收到 ACK 包，最后回到 CLOSED 状态，释放网络资源。</li><li>Server 收到 Client 返回的 ACK 包后便回到 CLOSED 状态，释放网络资源。</li></ol></blockquote></li></ol>", 1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ArticleMetadata = __unplugin_components_4;
  const _component_ClientOnly = resolveComponent("ClientOnly");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
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
    _hoisted_4,
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
    _hoisted_22,
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
    _hoisted_26,
    _hoisted_27,
    _hoisted_28,
    _hoisted_29,
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
    _hoisted_30
  ]);
}
const __ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  __ as default
};
