import { _ as __unplugin_components_1 } from "./chunks/DirectoryGuide.SKjLrBOc.js";
import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, k as createBaseVNode, a as createTextVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
import "./chunks/UnorderedListOutlined.kzUDOZMQ.js";
import "./chunks/CloseOutlined.gG5NVs8Y.js";
import "./chunks/FolderOutlined.GvKKgIjs.js";
import "./chunks/FileTextOutlined.RqbU9wV3.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "_06-源码理解导航",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("06-源码理解导航 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#_06-源码理解导航",
    "aria-label": 'Permalink to "06-源码理解导航"'
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
const __pageData = JSON.parse('{"title":"06-源码理解","description":"","frontmatter":{"title":"06-源码理解"},"headers":[],"relativePath":"src/study-notes/06-源码理解/index.md","filePath":"src/study-notes/06-源码理解/index.md","lastUpdated":1739944452000}');
const __default__ = { name: "src/study-notes/06-源码理解/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const sections = [
      {
        title: "源码调试",
        items: [
          {
            title: "如何调试源码",
            link: "./01-源码调试/01-如何调试源码"
          }
        ]
      },
      {
        title: "Vue2",
        items: [
          {
            title: "diff算法",
            link: "./02-Vue2/01-diff算法"
          },
          {
            title: "Vue2和Vue的diff算法",
            link: "./02-Vue2/02-Vue2和Vue的diff算法"
          }
        ]
      },
      {
        title: "Vue3",
        items: [
          {
            title: "Vue3源码",
            link: "./03-Vue3/01-Vue3源码"
          },
          {
            title: "Vue3diff算法",
            link: "./03-Vue3/02-Vue3diff算法"
          },
          {
            title: "diff算法有无key",
            link: "./03-Vue3/03-diff算法有无key"
          },
          {
            title: "Provide_Inject",
            link: "./03-Vue3/04-Provide_Inject"
          }
        ]
      },
      {
        title: "React",
        items: [
          {
            title: "diff算法",
            link: "./04-React/01-diff算法"
          }
        ]
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
