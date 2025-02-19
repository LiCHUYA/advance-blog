import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, k as createBaseVNode, a as createTextVNode, R as createStaticVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
const _imports_0 = "/advance-blog/assets/useContext.lsJBWxVj.png";
const __pageData = JSON.parse('{"title":"React 状态管理工具","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/01-学习笔记/03-React/04-React状态管理工具之useContext.md","filePath":"src/study-notes/01-学习笔记/03-React/04-React状态管理工具之useContext.md","lastUpdated":1739460242000}');
const _sfc_main = { name: "src/study-notes/01-学习笔记/03-React/04-React状态管理工具之useContext.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "react-状态管理工具",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("React 状态管理工具 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#react-状态管理工具",
    "aria-label": 'Permalink to "React 状态管理工具"'
  }, "​")
], -1);
const _hoisted_2 = /* @__PURE__ */ createStaticVNode("", 6);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("strong", null, "React.createContext", -1);
const _hoisted_9 = /* @__PURE__ */ createStaticVNode("", 24);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("strong", null, "React.createContext", -1);
const _hoisted_34 = /* @__PURE__ */ createStaticVNode("", 6);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ArticleMetadata = __unplugin_components_4;
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_font = resolveComponent("font");
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
    createBaseVNode("p", null, [
      createTextVNode("​ 使用 "),
      _hoisted_8,
      createTextVNode(" 创建一个 Context 对象。可以传递一个默认值，"),
      createVNode(_component_font, { color: "#fb7185" }, {
        default: withCtx(() => [
          createTextVNode("这个默认值会在没有 Provider 包裹时使用。")
        ]),
        _: 1
      }),
      createTextVNode("高亮的这句话会在介绍完Api后详细介绍。")
    ]),
    _hoisted_9,
    createBaseVNode("blockquote", null, [
      createBaseVNode("p", null, [
        createTextVNode('"使用 '),
        _hoisted_33,
        createTextVNode(" 创建一个 Context 对象。可以传递一个默认值，"),
        createVNode(_component_font, { color: "#fb7185" }, {
          default: withCtx(() => [
            createTextVNode("这个默认值会在没有 Provider 包裹时使用。")
          ]),
          _: 1
        }),
        createTextVNode('"')
      ])
    ]),
    _hoisted_34
  ]);
}
const _04React_______useContext = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _04React_______useContext as default
};
