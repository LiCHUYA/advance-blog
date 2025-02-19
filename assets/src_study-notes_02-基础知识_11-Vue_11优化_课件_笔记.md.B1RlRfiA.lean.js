import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, k as createBaseVNode, a as createTextVNode, R as createStaticVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"使用key","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/02-基础知识/11-Vue/11优化/课件/笔记.md","filePath":"src/study-notes/02-基础知识/11-Vue/11优化/课件/笔记.md","lastUpdated":1739501366000}');
const _sfc_main = { name: "src/study-notes/02-基础知识/11-Vue/11优化/课件/笔记.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "使用key",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("使用key "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#使用key",
    "aria-label": 'Permalink to "使用key"'
  }, "​")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, "对于通过循环生成的列表，应给每个列表项一个稳定且唯一的key，这有利于在列表变动时，尽量少的删除、新增、改动元素", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "使用冻结的对象",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("使用冻结的对象 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#使用冻结的对象",
    "aria-label": 'Permalink to "使用冻结的对象"'
  }, "​")
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("p", null, "冻结的对象不会被响应化", -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "使用函数式组件",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("使用函数式组件 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#使用函数式组件",
    "aria-label": 'Permalink to "使用函数式组件"'
  }, "​")
], -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("参见"),
  /* @__PURE__ */ createBaseVNode("a", {
    href: "https://cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6",
    target: "_blank",
    rel: "noreferrer"
  }, "函数式组件")
], -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "使用计算属性",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("使用计算属性 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#使用计算属性",
    "aria-label": 'Permalink to "使用计算属性"'
  }, "​")
], -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("p", null, "如果模板中某个数据会使用多次，并且该数据是通过计算得到的，使用计算属性以缓存它们", -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "非实时绑定的表单项",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("非实时绑定的表单项 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#非实时绑定的表单项",
    "aria-label": 'Permalink to "非实时绑定的表单项"'
  }, "​")
], -1);
const _hoisted_10 = /* @__PURE__ */ createStaticVNode("", 4);
const _hoisted_14 = /* @__PURE__ */ createStaticVNode("", 9);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("p", null, "对于频繁切换显示状态的元素，使用v-show可以保证虚拟dom树的稳定，避免频繁的新增和删除元素，特别是对于那些内部包含大量dom元素的节点，这一点极其重要", -1);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("p", null, "关键字：频繁切换显示状态、内部包含大量dom元素", -1);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "使用延迟装载-defer",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("使用延迟装载（defer） "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#使用延迟装载-defer",
    "aria-label": 'Permalink to "使用延迟装载（defer）"'
  }, "​")
], -1);
const _hoisted_26 = /* @__PURE__ */ createStaticVNode("", 7);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("p", null, "后续讲解", -1);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "长列表优化",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("长列表优化 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#长列表优化",
    "aria-label": 'Permalink to "长列表优化"'
  }, "​")
], -1);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("p", null, "后续讲解", -1);
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
    _hoisted_8,
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
    _hoisted_14,
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
    _hoisted_23,
    _hoisted_24,
    _hoisted_25,
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
    _hoisted_26,
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
    _hoisted_33,
    _hoisted_34,
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
    _hoisted_35
  ]);
}
const __ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  __ as default
};
