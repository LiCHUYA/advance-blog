import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, k as createBaseVNode, a as createTextVNode, R as createStaticVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"CSS 面试题汇总","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/02-基础知识/02-CSS/01-CSS面试题汇总.md","filePath":"src/study-notes/02-基础知识/02-CSS/01-CSS面试题汇总.md","lastUpdated":1739501366000}');
const _sfc_main = { name: "src/study-notes/02-基础知识/02-CSS/01-CSS面试题汇总.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "css-面试题汇总",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("em", null, "CSS"),
  /* @__PURE__ */ createTextVNode(" 面试题汇总 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#css-面试题汇总",
    "aria-label": 'Permalink to "*CSS* 面试题汇总"'
  }, "​")
], -1);
const _hoisted_2 = /* @__PURE__ */ createStaticVNode("", 46);
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("blockquote", null, [
  /* @__PURE__ */ createBaseVNode("p", null, "参考答案："),
  /* @__PURE__ */ createBaseVNode("ul", null, [
    /* @__PURE__ */ createBaseVNode("li", { "clear:both;height:0;overflow:hidden;": "" }, [
      /* @__PURE__ */ createBaseVNode("p", null, "clear 清除浮动（添加空div法）在浮动元素下方添加空div，并给该元素写css样式：")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("p", null, "给浮动元素父级设置高度")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("p", null, "父级同时浮动（需要给父级同级元素添加浮动）")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("p", null, "父级设置成inline-block，其margin: 0 auto居中方式失效")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("p", null, "给父级添加overflow:hidden 清除浮动方法")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("p", null, "万能清除法 after 伪类清浮动（现在主流方法，推荐使用）")
    ])
  ])
], -1);
const _hoisted_49 = /* @__PURE__ */ createStaticVNode("", 78);
const _hoisted_127 = /* @__PURE__ */ createBaseVNode("blockquote", null, [
  /* @__PURE__ */ createBaseVNode("p", null, "参考答案："),
  /* @__PURE__ */ createBaseVNode("p", null, "选择器决定将样式应用在哪个或哪些元素身上。"),
  /* @__PURE__ */ createBaseVNode("ul", null, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("元素选择器：例如 "),
      /* @__PURE__ */ createBaseVNode("em", null, "div{…} p{...}")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("id 选择器： 例如 "),
      /* @__PURE__ */ createBaseVNode("em", null, "#box{...}")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("类选择器： 例如 "),
      /* @__PURE__ */ createBaseVNode("em", null, ".box{...}")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("属性选择器："),
      /* @__PURE__ */ createBaseVNode("em", null, '[href="#"]{...}')
    ]),
    /* @__PURE__ */ createBaseVNode("li", { "css-module": "." }, "通配：*"),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("组合（并集）选择器："),
      /* @__PURE__ */ createBaseVNode("em", null, "div,p,a,.main{...}")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("交集选择器："),
      /* @__PURE__ */ createBaseVNode("em", null, 'input[type="text"]{...}')
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("后代选择器："),
      /* @__PURE__ */ createBaseVNode("em", null, "header nav{...}")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("子级选择器： "),
      /* @__PURE__ */ createBaseVNode("em", null, "ul>li{...}")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("伪类选择器： "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createBaseVNode("em", null, ":nth-child(num){...}")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createBaseVNode("em", null, ":nth-child(odd){...}")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createBaseVNode("em", null, ":nth-child(even){...}")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createBaseVNode("em", null, ":nth-of-type{...}")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createBaseVNode("em", null, ":first-child{...}")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createBaseVNode("em", null, ":last-child{...}")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createBaseVNode("em", null, "only-child{...}")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createBaseVNode("em", null, "a:link{...}")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createBaseVNode("em", null, "a:visited{...}")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createBaseVNode("em", null, ":hover{...}")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createBaseVNode("em", null, "a:active{...}")
        ])
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createTextVNode("伪元素选择器： "),
      /* @__PURE__ */ createBaseVNode("ul", null, [
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createBaseVNode("em", null, "::before{...}")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createBaseVNode("em", null, "::after{...}")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createBaseVNode("em", null, "::first-letter{...}")
        ]),
        /* @__PURE__ */ createBaseVNode("li", null, [
          /* @__PURE__ */ createBaseVNode("em", null, "::first-line{...}")
        ])
      ])
    ])
  ])
], -1);
const _hoisted_128 = /* @__PURE__ */ createStaticVNode("", 191);
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
    _hoisted_48,
    _hoisted_49,
    _hoisted_127,
    _hoisted_128
  ]);
}
const _01CSS_____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _01CSS_____ as default
};
