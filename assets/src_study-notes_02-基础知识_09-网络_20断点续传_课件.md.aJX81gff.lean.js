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
const _hoisted_2 = /* @__PURE__ */ createStaticVNode("", 7);
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
const _hoisted_16 = /* @__PURE__ */ createStaticVNode("", 31);
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
