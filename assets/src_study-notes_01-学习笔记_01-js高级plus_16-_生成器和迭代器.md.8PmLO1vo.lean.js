import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, k as createBaseVNode, a as createTextVNode, R as createStaticVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
const _imports_0 = "/advance-blog/assets/image-20240831101331044.UDn3d3l5.png";
const _imports_1 = "/advance-blog/assets/image-20240831093240834.ERCRmejv.png";
const _imports_2 = "/advance-blog/assets/image-20240831100615154.WDB5_-tH.png";
const _imports_3 = "/advance-blog/assets/image-20240831103248369.zehsurmn.png";
const _imports_4 = "/advance-blog/assets/image-20240831103819993.uFICrdqr.png";
const _imports_5 = "/advance-blog/assets/image-20240831105135373.CAZQwwtl.png";
const _imports_6 = "/advance-blog/assets/image-20240831110212946.hidguhiQ.png";
const _imports_7 = "/advance-blog/assets/image-20240831135619972.N8hvbQi_.png";
const _imports_8 = "/advance-blog/assets/image-20240831163405558.P7iiCb5p.png";
const _imports_9 = "/advance-blog/assets/image-20240831161905106.rQ72QkFV.png";
const _imports_10 = "/advance-blog/assets/image-20240831163610435.eIwry183.png";
const __pageData = JSON.parse('{"title":"迭代器和生成器","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/01-学习笔记/01-js高级plus/16-_生成器和迭代器.md","filePath":"src/study-notes/01-学习笔记/01-js高级plus/16-_生成器和迭代器.md","lastUpdated":1739460242000}');
const _sfc_main = { name: "src/study-notes/01-学习笔记/01-js高级plus/16-_生成器和迭代器.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "迭代器和生成器",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("迭代器和生成器 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#迭代器和生成器",
    "aria-label": 'Permalink to "迭代器和生成器"'
  }, "​")
], -1);
const _hoisted_2 = /* @__PURE__ */ createStaticVNode("", 171);
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
const _16________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _16________ as default
};
