import { _ as _export_sfc, o as openBlock, c as createElementBlock, R as createStaticVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/02-基础知识/09-网络/19网络性能优化/课件.md","filePath":"src/study-notes/02-基础知识/09-网络/19网络性能优化/课件.md","lastUpdated":1739501366000}');
const _sfc_main = { name: "src/study-notes/02-基础知识/09-网络/19网络性能优化/课件.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode("<p>列举优化网络性能方法</p><blockquote><p>参考答案：</p><ul><li><p>优化打包体积</p><p>利用一些工具压缩、混淆最终打包代码，减少包体积</p></li><li><p>多目标打包</p><p>利用一些打包插件，针对不同的浏览器打包出不同的兼容性版本，这样一来，每个版本中的兼容性代码就会大大减少，从而减少包体积</p></li><li><p>压缩</p><p>现代浏览器普遍支持压缩格式，因此服务端的各种文件可以压缩后再响应给客户端，只要解压时间小于优化的传输时间，压缩就是可行的</p></li><li><p>CDN</p><p>利用 CDN 可以大幅缩减静态资源的访问时间，特别是对于公共库的访问，可以使用知名的 CDN 资源，这样可以实现跨越站点的缓存</p></li><li><p>缓存</p><p>对于除 HTML 外的所有静态资源均可以开启协商缓存，利用构建工具打包产生的文件 hash 值来置换缓存</p></li><li><p>http2</p><p>开启 http2 后，利用其多路复用、头部压缩等特点，充分利用带宽传递大量的文件数据</p></li><li><p>雪碧图</p><p>对于不使用 HTTP2 的场景，可以将多个图片合并为雪碧图，以达到减少文件的目的</p></li><li><p>defer、async</p><p>通过 defer 和 async 属性，可以让页面尽早加载 js 文件</p></li><li><p>prefetch、preload</p><p>通过 prefetch 属性，可以让页面在空闲时预先下载其他页面可能要用到的资源</p><p>通过 preload 属性，可以让页面预先下载本页面可能要用到的资源</p></li><li><p>多个静态资源域</p><p>对于不使用 HTTP2 的场景，将相对独立的静态资源分到多个域中保存，可以让浏览器同时开启多个 TCP 连接，并行下载</p></li></ul></blockquote>", 2);
const _hoisted_3 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_3);
}
const __ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  __ as default
};
