import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, k as createBaseVNode, a as createTextVNode, R as createStaticVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"SSL、TLS、HTTPS的关系","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/02-基础知识/09-网络/22SSL、TLS、HTTPS/课件.md","filePath":"src/study-notes/02-基础知识/09-网络/22SSL、TLS、HTTPS/课件.md","lastUpdated":1739501366000}');
const _sfc_main = { name: "src/study-notes/02-基础知识/09-网络/22SSL、TLS、HTTPS/课件.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "ssl、tls、https的关系",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("SSL、TLS、HTTPS的关系 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#ssl、tls、https的关系",
    "aria-label": 'Permalink to "SSL、TLS、HTTPS的关系"'
  }, "​")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, "SSL（Secure Sockets Layer），安全套接字协议", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "TLS（Transport Layer Security），传输层安全性协议", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("strong", null, "TLS是SSL的升级版，两者几乎是一样的")
], -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("p", null, "HTTPS（Hyper Text Transfer Protocol over SecureSocket Layer），建立在SSL协议之上的HTTP协议", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("img", {
  src: "http://mdrs.yuanjin.tech/img/20211025160927.png",
  alt: "image-20211025160927355",
  style: { "zoom": "50%" },
  align: "left"
}, null, -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("h1", {
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
const _hoisted_8 = /* @__PURE__ */ createStaticVNode("<ol><li><p>介绍下 HTTPS 中间人攻击</p><blockquote><p>参考答案：</p><p>针对 HTTPS 攻击主要有 SSL 劫持攻击和 SSL 剥离攻击两种。</p><p>SSL 劫持攻击是指攻击者劫持了客户端和服务器之间的连接，将服务器的合法证书替换为伪造的证书，从而获取客户端和服务器之间传递的信息。这种方式一般容易被用户发现，浏览器会明确的提示证书错误，但某些用户安全意识不强，可能会点击继续浏览，从而达到攻击目的。</p><p>SSL 剥离攻击是指攻击者劫持了客户端和服务器之间的连接，攻击者保持自己和服务器之间的 HTTPS 连接，但发送给客户端普通的 HTTP 连接，由于 HTTP 连接是明文传输的，即可获取客户端传输的所有明文数据。</p></blockquote></li><li><p>介绍 HTTPS 握手过程</p><blockquote><p>参考答案：</p><ol><li>客户端请求服务器，并告诉服务器自身支持的加密算法以及密钥长度等信息</li><li>服务器响应公钥和服务器证书</li><li>客户端验证证书是否合法，然后生成一个会话密钥，并用服务器的公钥加密密钥，把加密的结果通过请求发送给服务器</li><li>服务器使用私钥解密被加密的会话密钥并保存起来，然后使用会话密钥加密消息响应给客户端，表示自己已经准备就绪</li><li>客户端使用会话密钥解密消息，知道了服务器已经准备就绪。</li><li>后续客户端和服务器使用会话密钥加密信息传递消息</li></ol></blockquote></li><li><p>HTTPS 握手过程中，客户端如何验证证书的合法性</p><blockquote><p>参考答案：</p><ol><li>校验证书的颁发机构是否受客户端信任。</li><li>通过 CRL 或 OCSP 的方式校验证书是否被吊销。</li><li>对比系统时间，校验证书是否在有效期内。</li><li>通过校验对方是否存在证书的私钥，判断证书的网站域名是否与证书颁发的域名一致。</li></ol></blockquote></li><li><p>阐述 https 验证身份也就是 TSL/SSL 身份验证的过程</p><blockquote><p>参考答案：</p><ol><li>客户端请求服务器，并告诉服务器自身支持的加密算法以及密钥长度等信息</li><li>服务器响应公钥和服务器证书</li><li>客户端验证证书是否合法，然后生成一个会话密钥，并用服务器的公钥加密密钥，把加密的结果通过请求发送给服务器</li><li>服务器使用私钥解密被加密的会话密钥并保存起来，然后使用会话密钥加密消息响应给客户端，表示自己已经准备就绪</li><li>客户端使用会话密钥解密消息，知道了服务器已经准备就绪。</li><li>后续客户端和服务器使用会话密钥加密信息传递消息</li></ol></blockquote></li><li><p>为什么需要 CA 机构对证书签名</p><blockquote><p>主要是为了解决证书的可信问题。如果没有权威机构对证书进行签名，客户端就无法知晓证书是否是伪造的，从而增加了中间人攻击的风险，https 就变得毫无意义。</p></blockquote></li><li><p>如何劫持 https 的请求，提供思路</p><blockquote><p>https 有防篡改的特点，只要浏览器证书验证过程是正确的，很难在用户不察觉的情况下进行攻击。但若能够更改浏览器的证书验证过程，便有机会实现 https 中间人攻击。</p><p>所以，要劫持 https，首先要伪造一个证书，并且要想办法让用户信任这个证书，可以有多种方式，比如病毒、恶意软件、诱导等。一旦证书被信任后，就可以利用普通中间人攻击的方式，使用伪造的证书进行攻击。</p></blockquote></li></ol>", 1);
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
    _hoisted_3,
    _hoisted_4,
    _hoisted_5,
    _hoisted_6,
    _hoisted_7,
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
    _hoisted_8
  ]);
}
const __ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  __ as default
};
