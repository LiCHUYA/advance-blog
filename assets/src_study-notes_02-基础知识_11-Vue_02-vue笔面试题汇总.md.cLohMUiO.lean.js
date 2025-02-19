import { _ as _export_sfc, o as openBlock, c as createElementBlock, k as createBaseVNode, a as createTextVNode, R as createStaticVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/02-基础知识/11-Vue/02-vue笔面试题汇总.md","filePath":"src/study-notes/02-基础知识/11-Vue/02-vue笔面试题汇总.md","lastUpdated":1739501366000}');
const _sfc_main = { name: "src/study-notes/02-基础知识/11-Vue/02-vue笔面试题汇总.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode("", 24);
const _hoisted_25 = /* @__PURE__ */ createStaticVNode("", 6);
const _hoisted_31 = /* @__PURE__ */ createStaticVNode("", 2);
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createBaseVNode("em", null, "$emit / $bus")
], -1);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createBaseVNode("em", null, "vuex")
], -1);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createBaseVNode("em", null, "provide / inject API")
], -1);
const _hoisted_36 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_37 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "6.043ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 2671 1000",
  "aria-hidden": "true"
};
const _hoisted_38 = /* @__PURE__ */ createStaticVNode("", 1);
const _hoisted_39 = [
  _hoisted_38
];
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("mjx-assistive-mml", {
  unselectable: "on",
  display: "inline",
  style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
}, [
  /* @__PURE__ */ createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
    /* @__PURE__ */ createBaseVNode("mi", null, "a"),
    /* @__PURE__ */ createBaseVNode("mi", null, "t"),
    /* @__PURE__ */ createBaseVNode("mi", null, "t"),
    /* @__PURE__ */ createBaseVNode("mi", null, "r"),
    /* @__PURE__ */ createBaseVNode("mi", null, "s"),
    /* @__PURE__ */ createBaseVNode("mrow", { "data-mjx-texclass": "ORD" }, [
      /* @__PURE__ */ createBaseVNode("mo", null, "/")
    ])
  ])
], -1);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "_11-vue-的路由实现",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("11. "),
  /* @__PURE__ */ createBaseVNode("strong", null, [
    /* @__PURE__ */ createBaseVNode("em", null, "Vue"),
    /* @__PURE__ */ createTextVNode(" 的路由实现")
  ]),
  /* @__PURE__ */ createTextVNode(),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#_11-vue-的路由实现",
    "aria-label": 'Permalink to "11. ***Vue* 的路由实现**"'
  }, "​")
], -1);
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createTextVNode("解释 "),
  /* @__PURE__ */ createBaseVNode("em", null, "hash"),
  /* @__PURE__ */ createTextVNode(" 模式和 "),
  /* @__PURE__ */ createBaseVNode("em", null, "history"),
  /* @__PURE__ */ createTextVNode(" 模式的实现原理")
], -1);
const _hoisted_43 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_44 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.452ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "11.834ex",
  height: "2.149ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 5230.4 950",
  "aria-hidden": "true"
};
const _hoisted_45 = /* @__PURE__ */ createStaticVNode("", 1);
const _hoisted_46 = [
  _hoisted_45
];
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("mjx-assistive-mml", {
  unselectable: "on",
  display: "inline",
  style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
}, [
  /* @__PURE__ */ createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
    /* @__PURE__ */ createBaseVNode("mi", null, "r"),
    /* @__PURE__ */ createBaseVNode("mi", null, "o"),
    /* @__PURE__ */ createBaseVNode("mi", null, "u"),
    /* @__PURE__ */ createBaseVNode("mi", null, "t"),
    /* @__PURE__ */ createBaseVNode("mi", null, "e"),
    /* @__PURE__ */ createBaseVNode("mi", null, "r"),
    /* @__PURE__ */ createBaseVNode("mo", null, "∗"),
    /* @__PURE__ */ createBaseVNode("mi", { mathvariant: "normal" }, "与"),
    /* @__PURE__ */ createBaseVNode("mo", null, "∗")
  ])
], -1);
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createBaseVNode("em", null, "vueRouter"),
  /* @__PURE__ */ createTextVNode(" 有哪几种导航守卫？")
], -1);
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createTextVNode("解释一下 "),
  /* @__PURE__ */ createBaseVNode("em", null, "vueRouter"),
  /* @__PURE__ */ createTextVNode(" 的完整的导航解析流程是什么")
], -1);
const _hoisted_50 = /* @__PURE__ */ createStaticVNode("", 6);
const _hoisted_56 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_57 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.452ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "11.834ex",
  height: "2.149ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 5230.4 950",
  "aria-hidden": "true"
};
const _hoisted_58 = /* @__PURE__ */ createStaticVNode("", 1);
const _hoisted_59 = [
  _hoisted_58
];
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("mjx-assistive-mml", {
  unselectable: "on",
  display: "inline",
  style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
}, [
  /* @__PURE__ */ createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
    /* @__PURE__ */ createBaseVNode("mi", null, "r"),
    /* @__PURE__ */ createBaseVNode("mi", null, "o"),
    /* @__PURE__ */ createBaseVNode("mi", null, "u"),
    /* @__PURE__ */ createBaseVNode("mi", null, "t"),
    /* @__PURE__ */ createBaseVNode("mi", null, "e"),
    /* @__PURE__ */ createBaseVNode("mi", null, "r"),
    /* @__PURE__ */ createBaseVNode("mo", null, "∗"),
    /* @__PURE__ */ createBaseVNode("mi", { mathvariant: "normal" }, "与"),
    /* @__PURE__ */ createBaseVNode("mo", null, "∗")
  ])
], -1);
const _hoisted_61 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("em", null, "$route"),
  /* @__PURE__ */ createTextVNode(" 对象表示当前的路由信息，包含了当前 "),
  /* @__PURE__ */ createBaseVNode("em", null, "URL"),
  /* @__PURE__ */ createTextVNode(" 解析得到的信息。包含当前的路径，参数，"),
  /* @__PURE__ */ createBaseVNode("em", null, "query"),
  /* @__PURE__ */ createTextVNode(" 对象等。")
], -1);
const _hoisted_62 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createBaseVNode("em", null, "$route.path"),
  /* @__PURE__ */ createTextVNode('：字符串，对应当前路由的路径，总是解析为绝对路径，如 "/foo/bar"。')
], -1);
const _hoisted_63 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createBaseVNode("em", null, "$route.params"),
  /* @__PURE__ */ createTextVNode("： 一个 key/value 对象，包含了 动态片段 和 全匹配片段，如果没有路由参数，就是一个空对象。")
], -1);
const _hoisted_64 = {
  class: "MathJax",
  jax: "SVG",
  style: { "direction": "ltr", "position": "relative" }
};
const _hoisted_65 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "98.121ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 43369.6 1000",
  "aria-hidden": "true"
};
const _hoisted_66 = /* @__PURE__ */ createStaticVNode("", 1);
const _hoisted_67 = [
  _hoisted_66
];
const _hoisted_68 = /* @__PURE__ */ createBaseVNode("mjx-assistive-mml", {
  unselectable: "on",
  display: "inline",
  style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
}, [
  /* @__PURE__ */ createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
    /* @__PURE__ */ createBaseVNode("mi", null, "r"),
    /* @__PURE__ */ createBaseVNode("mi", null, "o"),
    /* @__PURE__ */ createBaseVNode("mi", null, "u"),
    /* @__PURE__ */ createBaseVNode("mi", null, "t"),
    /* @__PURE__ */ createBaseVNode("mi", null, "e"),
    /* @__PURE__ */ createBaseVNode("mo", null, "."),
    /* @__PURE__ */ createBaseVNode("mi", null, "q"),
    /* @__PURE__ */ createBaseVNode("mi", null, "u"),
    /* @__PURE__ */ createBaseVNode("mi", null, "e"),
    /* @__PURE__ */ createBaseVNode("mi", null, "r"),
    /* @__PURE__ */ createBaseVNode("mi", null, "y"),
    /* @__PURE__ */ createBaseVNode("mo", null, "∗"),
    /* @__PURE__ */ createBaseVNode("mi", null, "："),
    /* @__PURE__ */ createBaseVNode("mi", { mathvariant: "normal" }, "一"),
    /* @__PURE__ */ createBaseVNode("mi", { mathvariant: "normal" }, "个"),
    /* @__PURE__ */ createBaseVNode("mi", null, "k"),
    /* @__PURE__ */ createBaseVNode("mi", null, "e"),
    /* @__PURE__ */ createBaseVNode("mi", null, "y"),
    /* @__PURE__ */ createBaseVNode("mrow", { "data-mjx-texclass": "ORD" }, [
      /* @__PURE__ */ createBaseVNode("mo", null, "/")
    ]),
    /* @__PURE__ */ createBaseVNode("mi", null, "v"),
    /* @__PURE__ */ createBaseVNode("mi", null, "a"),
    /* @__PURE__ */ createBaseVNode("mi", null, "l"),
    /* @__PURE__ */ createBaseVNode("mi", null, "u"),
    /* @__PURE__ */ createBaseVNode("mi", null, "e"),
    /* @__PURE__ */ createBaseVNode("mi", { mathvariant: "normal" }, "对"),
    /* @__PURE__ */ createBaseVNode("mi", { mathvariant: "normal" }, "象"),
    /* @__PURE__ */ createBaseVNode("mi", null, "，"),
    /* @__PURE__ */ createBaseVNode("mi", { mathvariant: "normal" }, "表"),
    /* @__PURE__ */ createBaseVNode("mi", { mathvariant: "normal" }, "示"),
    /* @__PURE__ */ createBaseVNode("mi", null, "U"),
    /* @__PURE__ */ createBaseVNode("mi", null, "R"),
    /* @__PURE__ */ createBaseVNode("mi", null, "L"),
    /* @__PURE__ */ createBaseVNode("mi", { mathvariant: "normal" }, "查"),
    /* @__PURE__ */ createBaseVNode("mi", { mathvariant: "normal" }, "询"),
    /* @__PURE__ */ createBaseVNode("mi", { mathvariant: "normal" }, "参"),
    /* @__PURE__ */ createBaseVNode("mi", { mathvariant: "normal" }, "数"),
    /* @__PURE__ */ createBaseVNode("mrow", { "data-mjx-texclass": "ORD" }, [
      /* @__PURE__ */ createBaseVNode("mo", null, "。")
    ]),
    /* @__PURE__ */ createBaseVNode("mi", { mathvariant: "normal" }, "例"),
    /* @__PURE__ */ createBaseVNode("mi", { mathvariant: "normal" }, "如"),
    /* @__PURE__ */ createBaseVNode("mi", { mathvariant: "normal" }, "对"),
    /* @__PURE__ */ createBaseVNode("mi", { mathvariant: "normal" }, "于"),
    /* @__PURE__ */ createBaseVNode("mi", { mathvariant: "normal" }, "路"),
    /* @__PURE__ */ createBaseVNode("mi", { mathvariant: "normal" }, "径"),
    /* @__PURE__ */ createBaseVNode("mo", null, "∗"),
    /* @__PURE__ */ createBaseVNode("mrow", { "data-mjx-texclass": "ORD" }, [
      /* @__PURE__ */ createBaseVNode("mo", null, "/")
    ]),
    /* @__PURE__ */ createBaseVNode("mi", null, "f"),
    /* @__PURE__ */ createBaseVNode("mi", null, "o"),
    /* @__PURE__ */ createBaseVNode("mi", null, "o"),
    /* @__PURE__ */ createBaseVNode("mo", null, "?"),
    /* @__PURE__ */ createBaseVNode("mi", null, "u"),
    /* @__PURE__ */ createBaseVNode("mi", null, "s"),
    /* @__PURE__ */ createBaseVNode("mi", null, "e"),
    /* @__PURE__ */ createBaseVNode("mi", null, "r"),
    /* @__PURE__ */ createBaseVNode("mo", null, "="),
    /* @__PURE__ */ createBaseVNode("mn", null, "1"),
    /* @__PURE__ */ createBaseVNode("mo", null, "∗"),
    /* @__PURE__ */ createBaseVNode("mi", null, "，"),
    /* @__PURE__ */ createBaseVNode("mi", { mathvariant: "normal" }, "则"),
    /* @__PURE__ */ createBaseVNode("mi", { mathvariant: "normal" }, "有"),
    /* @__PURE__ */ createBaseVNode("mo", null, "∗")
  ])
], -1);
const _hoisted_69 = /* @__PURE__ */ createStaticVNode("", 5);
const _hoisted_74 = /* @__PURE__ */ createStaticVNode("", 10);
const _hoisted_84 = /* @__PURE__ */ createStaticVNode("", 89);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("blockquote", null, [
      _hoisted_25,
      createBaseVNode("ul", null, [
        _hoisted_31,
        createBaseVNode("li", null, [
          createTextVNode("跨级通信： "),
          createBaseVNode("ul", null, [
            _hoisted_33,
            _hoisted_34,
            _hoisted_35,
            createBaseVNode("li", null, [
              createBaseVNode("em", null, [
                createBaseVNode("mjx-container", _hoisted_36, [
                  (openBlock(), createElementBlock("svg", _hoisted_37, _hoisted_39)),
                  _hoisted_40
                ]),
                createTextVNode("listeners")
              ])
            ])
          ])
        ])
      ])
    ]),
    _hoisted_41,
    createBaseVNode("ul", null, [
      _hoisted_42,
      createBaseVNode("li", null, [
        createTextVNode("说一下 "),
        createBaseVNode("em", null, [
          createBaseVNode("mjx-container", _hoisted_43, [
            (openBlock(), createElementBlock("svg", _hoisted_44, _hoisted_46)),
            _hoisted_47
          ]),
          createTextVNode("route")
        ]),
        createTextVNode(" 的区别")
      ]),
      _hoisted_48,
      _hoisted_49
    ]),
    createBaseVNode("blockquote", null, [
      _hoisted_50,
      createBaseVNode("p", null, [
        createBaseVNode("strong", null, [
          createTextVNode("说一下 "),
          createBaseVNode("em", null, [
            createBaseVNode("mjx-container", _hoisted_56, [
              (openBlock(), createElementBlock("svg", _hoisted_57, _hoisted_59)),
              _hoisted_60
            ]),
            createTextVNode("route")
          ]),
          createTextVNode(" 的区别")
        ])
      ]),
      _hoisted_61,
      createBaseVNode("ul", null, [
        _hoisted_62,
        _hoisted_63,
        createBaseVNode("li", null, [
          createBaseVNode("em", null, [
            createBaseVNode("mjx-container", _hoisted_64, [
              (openBlock(), createElementBlock("svg", _hoisted_65, _hoisted_67)),
              _hoisted_68
            ]),
            createTextVNode("route.query.user == 1")
          ]),
          createTextVNode("，如果没有查询参数，则是个空对象。")
        ]),
        _hoisted_69
      ]),
      _hoisted_74
    ]),
    _hoisted_84
  ]);
}
const _02Vue______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _02Vue______ as default
};
