import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, k as createBaseVNode, a as createTextVNode, R as createStaticVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"下载","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/02-基础知识/09-网络/20断点续传/课件.md","filePath":"src/study-notes/02-基础知识/09-网络/20断点续传/课件.md","lastUpdated":1739501366000}');
const _sfc_main = { name: "src/study-notes/02-基础知识/09-网络/20断点续传/课件.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "下载",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("下载 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#下载",
    "aria-label": 'Permalink to "下载"'
  }, "​")
], -1);
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<p>若要实现下载时的断点续传，首先，服务器在响应时，要在头中加入下面的字段</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span>Accept-Ranges: bytes</span></span></code></pre></div><p>这个字段是向客户端表明：我这个文件可以支持传输部分数据，你只需要告诉我你需要的是哪一部分的数据即可，单位是字节</p><p>此时，某些支持断点续传的客户端，比如迅雷，它就可以在请求时，告诉服务器需要的数据范围。具体做法是在请求头中加入下面的字段</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span>range: bytes=0-5000</span></span></code></pre></div><p>客户端告诉服务器：请给我传递0-5000字节范围内的数据即可，无须传输全部数据</p><p>完整流程如下</p>', 7);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "上传",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("上传 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#上传",
    "aria-label": 'Permalink to "上传"'
  }, "​")
], -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("p", null, "整体来说，实现断点上传的主要思路就是把要上传的文件切分为多个小的数据块然后进行上传", -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: "http://mdrs.yuanjin.tech/img/20210918140242.png",
    alt: "image-20210918140242356"
  })
], -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("p", null, "虽然分片上传的整体思路一致，但它没有一个统一的、具体的标准，因此需要根据具体的业务场景制定自己的标准。", -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("p", null, "由于标准的不同，这也就意味着分片上传需要自行编写代码实现。", -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("p", null, "下面用一种极其简易的流程实现分片上传", -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "示例服务器",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("示例服务器 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#示例服务器",
    "aria-label": 'Permalink to "示例服务器"'
  }, "​")
], -1);
const _hoisted_16 = /* @__PURE__ */ createStaticVNode('<h2 id="下载-1" tabindex="-1">下载 <a class="header-anchor" href="#下载-1" aria-label="Permalink to &quot;下载&quot;">​</a></h2><p><a href="http://localhost:8000/download/Wallpaper1.jpg" target="_blank" rel="noreferrer">http://localhost:8000/download/Wallpaper1.jpg</a></p><p><a href="http://localhost:8000/download/Wallpaper2.jpg" target="_blank" rel="noreferrer">http://localhost:8000/download/Wallpaper2.jpg</a></p><p><a href="http://localhost:8000/download/Wallpaper3.jpg" target="_blank" rel="noreferrer">http://localhost:8000/download/Wallpaper3.jpg</a></p><p><a href="http://localhost:8000/download/Wallpaper4.jpg" target="_blank" rel="noreferrer">http://localhost:8000/download/Wallpaper4.jpg</a></p><p><a href="http://localhost:8000/download/Wallpaper5.jpg" target="_blank" rel="noreferrer">http://localhost:8000/download/Wallpaper5.jpg</a></p><p><a href="http://localhost:8000/download/Wallpaper6.jpg" target="_blank" rel="noreferrer">http://localhost:8000/download/Wallpaper6.jpg</a></p><p><a href="http://localhost:8000/download/Wallpaper7.jpg" target="_blank" rel="noreferrer">http://localhost:8000/download/Wallpaper7.jpg</a></p><p><a href="http://localhost:8000/download/Wallpaper8.jpg" target="_blank" rel="noreferrer">http://localhost:8000/download/Wallpaper8.jpg</a></p><p><a href="http://localhost:8000/download/Wallpaper9.jpg" target="_blank" rel="noreferrer">http://localhost:8000/download/Wallpaper9.jpg</a></p><p><a href="http://localhost:8000/download/Wallpaper10.jpg" target="_blank" rel="noreferrer">http://localhost:8000/download/Wallpaper10.jpg</a></p><h2 id="上传-1" tabindex="-1">上传 <a class="header-anchor" href="#上传-1" aria-label="Permalink to &quot;上传&quot;">​</a></h2><h3 id="文件信息协商" tabindex="-1">文件信息协商 <a class="header-anchor" href="#文件信息协商" aria-label="Permalink to &quot;文件信息协商&quot;">​</a></h3><p><strong>请求路径</strong>：/api/upload/handshake</p><p><strong>请求方法</strong>：POST</p><p><strong>字段</strong>：</p><table><thead><tr><th>字段名</th><th>含义</th><th>是否必须</th></tr></thead><tbody><tr><td>fileId</td><td>文件的MD5编码</td><td>是</td></tr><tr><td>ext</td><td>文件的后缀，例如：.jpg</td><td>是</td></tr><tr><td>chunkIds</td><td>文件分片的编号数组，每个编号是一个MD5编码</td><td>是</td></tr><tr><td></td><td></td><td></td></tr></tbody></table><p><strong>可能的响应</strong>：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">{</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">	code</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">  msg</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">  data</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;http://localhost:8000/upload/a32d18.jpg&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"> // 服务器已有该文件，无须上传</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">{</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">	code</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">  msg</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">  data</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;md5-1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;md5-2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;md5-5&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">] </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 服务器还需要上传的分片</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p><strong>可能发生的失败响应</strong>：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">{</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">	code</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">403</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">	msg</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;请携带文件编号&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">	data</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">null</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><h3 id="分片上传" tabindex="-1">分片上传 <a class="header-anchor" href="#分片上传" aria-label="Permalink to &quot;分片上传&quot;">​</a></h3><p><strong>请求路径</strong>：/api/upload</p><p><strong>请求方法</strong>：POST</p><p><strong>字段</strong>：</p><table><thead><tr><th>字段名</th><th>含义</th><th>是否必须</th></tr></thead><tbody><tr><td>file</td><td>分片的二进制数据</td><td>是</td></tr><tr><td>chunkId</td><td>分片的MD5编码</td><td>是</td></tr><tr><td>fileId</td><td>分片所属文件的MD5编码</td><td>是</td></tr><tr><td></td><td></td><td></td></tr></tbody></table><p><strong>上传成功的响应</strong>：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">{</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">	code</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">  msg</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">  data</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;md5-2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;md5-5&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">] </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 服务器还需要上传的分片</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p><strong>可能发生的失败响应</strong>：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">{</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">	code</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">403</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">	msg</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;请携带文件编号&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">	data</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">null</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div>', 31);
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
    createVNode(_component_Mermaid, {
      id: "mermaid_382ee164",
      graph: "sequenceDiagram%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20head%E8%AF%B7%E6%B1%82%EF%BC%8C%E8%AF%A2%E9%97%AE%E6%96%87%E4%BB%B6%E4%BF%A1%E6%81%AF%0A%E6%9C%8D%E5%8A%A1%E5%99%A8-%3E%3E%E5%AE%A2%E6%88%B7%E7%AB%AF%3A%20Content-Disposition%2CAccept-Ranges%2CContent-Length%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20Range%3Abytes%3D0-500%0A%E6%9C%8D%E5%8A%A1%E5%99%A8-%3E%3E%E5%AE%A2%E6%88%B7%E7%AB%AF%3A%200-500%E5%AD%97%E8%8A%82%E7%9A%84%E6%95%B0%E6%8D%AE%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20Range%3Abytes%3D501-1000%0A%E6%9C%8D%E5%8A%A1%E5%99%A8-%3E%3E%E5%AE%A2%E6%88%B7%E7%AB%AF%3A%20501-1000%E5%AD%97%E8%8A%82%E7%9A%84%E6%95%B0%E6%8D%AE%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20...%0A%E6%9C%8D%E5%8A%A1%E5%99%A8-%3E%3E%E5%AE%A2%E6%88%B7%E7%AB%AF%3A%20...%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%3E%E5%AE%A2%E6%88%B7%E7%AB%AF%3A%20%E5%B0%86%E7%A2%8E%E7%89%87%E4%BF%A1%E6%81%AF%E7%BB%84%E8%A3%85%E6%88%90%E5%AE%8C%E6%95%B4%E6%96%87%E4%BB%B6"
    }),
    _hoisted_9,
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
    _hoisted_10,
    _hoisted_11,
    _hoisted_12,
    _hoisted_13,
    _hoisted_14,
    createVNode(_component_Mermaid, {
      id: "mermaid_382ee18c",
      graph: "sequenceDiagram%0ANote%20left%20of%20%E5%AE%A2%E6%88%B7%E7%AB%AF%3A%20%E7%94%A8%E6%88%B7%E9%80%89%E6%8B%A9%E6%96%87%E4%BB%B6%0ANote%20left%20of%20%E5%AE%A2%E6%88%B7%E7%AB%AF%3A%20%E5%B0%86%E6%96%87%E4%BB%B6%E5%88%86%E5%89%B2%E4%B8%BA%E5%A4%9A%E4%B8%AA%E5%88%86%E7%89%87%0ANote%20left%20of%20%E5%AE%A2%E6%88%B7%E7%AB%AF%3A%20%E5%BE%97%E5%88%B0%E6%96%87%E4%BB%B6%E7%9A%84MD5%E5%92%8C%E6%AF%8F%E4%B8%AA%E5%88%86%E7%89%87%E7%9A%84MD5%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E6%96%87%E4%BB%B6MD5%E3%80%81%E5%90%8E%E7%BC%80%E3%80%81%E5%88%86%E7%89%87%E9%A1%BA%E5%BA%8F%E3%80%81%E6%AF%8F%E4%B8%AA%E5%88%86%E7%89%87MD5%0ANote%20right%20of%20%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E6%96%87%E4%BB%B6%E8%BF%98%E5%89%A9%E5%93%AA%E4%BA%9B%E5%88%86%E7%89%87%E6%B2%A1%E6%9C%89%E4%B8%8A%E4%BC%A0%EF%BC%9F%0A%E6%9C%8D%E5%8A%A1%E5%99%A8-%3E%3E%E5%AE%A2%E6%88%B7%E7%AB%AF%3A%20%E8%BF%98%E9%9C%80%E8%A6%81%E4%B8%8A%E4%BC%A0%E7%9A%84%E5%88%86%E7%89%87MD5%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E4%B8%8A%E4%BC%A0%E4%B8%80%E4%B8%AA%E5%88%86%E7%89%87%0ANote%20right%20of%20%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E6%96%87%E4%BB%B6%E8%BF%98%E5%89%A9%E5%93%AA%E4%BA%9B%E5%88%86%E7%89%87%E6%B2%A1%E6%9C%89%E4%B8%8A%E4%BC%A0%EF%BC%9F%0A%E6%9C%8D%E5%8A%A1%E5%99%A8-%3E%3E%E5%AE%A2%E6%88%B7%E7%AB%AF%3A%20%E8%BF%98%E9%9C%80%E8%A6%81%E4%B8%8A%E4%BC%A0%E7%9A%84%E5%88%86%E7%89%87MD5%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E4%B8%8A%E4%BC%A0%E4%B8%80%E4%B8%AA%E5%88%86%E7%89%87%0ANote%20right%20of%20%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E6%96%87%E4%BB%B6%E8%BF%98%E5%89%A9%E5%93%AA%E4%BA%9B%E5%88%86%E7%89%87%E6%B2%A1%E6%9C%89%E4%B8%8A%E4%BC%A0%EF%BC%9F%0A%E6%9C%8D%E5%8A%A1%E5%99%A8-%3E%3E%E5%AE%A2%E6%88%B7%E7%AB%AF%3A%20%E8%BF%98%E9%9C%80%E8%A6%81%E4%B8%8A%E4%BC%A0%E7%9A%84%E5%88%86%E7%89%87MD5%0A%E5%AE%A2%E6%88%B7%E7%AB%AF-%3E%3E%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E4%B8%8A%E4%BC%A0%E4%B8%80%E4%B8%AA%E5%88%86%E7%89%87%0ANote%20right%20of%20%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E6%89%80%E6%9C%89%E5%88%86%E7%89%87%E5%B7%B2%E4%B8%8A%E4%BC%A0%0ANote%20right%20of%20%E6%9C%8D%E5%8A%A1%E5%99%A8%3A%20%E5%90%88%E5%B9%B6%E6%89%80%E6%9C%89%E5%88%86%E7%89%87%E6%88%90%E5%AE%8C%E6%95%B4%E7%9A%84%E6%96%87%E4%BB%B6%0A%E6%9C%8D%E5%8A%A1%E5%99%A8-%3E%3E%E5%AE%A2%E6%88%B7%E7%AB%AF%3A%20%E6%96%87%E4%BB%B6%E7%9A%84%E8%AE%BF%E9%97%AE%E5%9C%B0%E5%9D%80"
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
    _hoisted_16
  ]);
}
const __ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  __ as default
};
