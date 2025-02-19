import { _ as __unplugin_components_1 } from "./chunks/DirectoryGuide.SKjLrBOc.js";
import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, k as createBaseVNode, a as createTextVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
import "./chunks/UnorderedListOutlined.kzUDOZMQ.js";
import "./chunks/CloseOutlined.gG5NVs8Y.js";
import "./chunks/FolderOutlined.GvKKgIjs.js";
import "./chunks/FileTextOutlined.RqbU9wV3.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "_03-实用笔记导航",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("03-实用笔记导航 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#_03-实用笔记导航",
    "aria-label": 'Permalink to "03-实用笔记导航"'
  }, "​")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "tip custom-block" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "custom-block-title" }, "提示"),
  /* @__PURE__ */ createBaseVNode("p", null, "这里收录了我在学习过程中的重要笔记和心得。内容会持续更新，欢迎探索和学习！")
], -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "warning custom-block" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "custom-block-title" }, "注意"),
  /* @__PURE__ */ createBaseVNode("p", null, "部分文章可能还在编写中，如有错误或建议，欢迎指出。")
], -1);
const __pageData = JSON.parse('{"title":"03-实用笔记","description":"","frontmatter":{"title":"03-实用笔记"},"headers":[],"relativePath":"src/study-notes/03-实用笔记/index.md","filePath":"src/study-notes/03-实用笔记/index.md","lastUpdated":1739460242000}');
const __default__ = { name: "src/study-notes/03-实用笔记/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const sections = [
      {
        title: "hooks封装",
        items: [
          {
            title: "index",
            link: "./01-hooks封装/01-index"
          }
        ]
      },
      {
        title: "常用功能",
        items: [
          {
            title: "常用功能",
            link: "./02-常用功能/01-常用功能"
          }
        ]
      },
      {
        title: "组件封装",
        items: [
          {
            title: "组件封装",
            link: "./03-组件封装/01-组件封装"
          }
        ]
      },
      {
        title: "",
        items: []
      }
    ];
    return (_ctx, _cache) => {
      const _component_ArticleMetadata = __unplugin_components_4;
      const _component_ClientOnly = resolveComponent("ClientOnly");
      const _component_DirectoryGuide = __unplugin_components_1;
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
        createVNode(_component_DirectoryGuide, { sections }),
        _hoisted_2,
        _hoisted_3
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};
