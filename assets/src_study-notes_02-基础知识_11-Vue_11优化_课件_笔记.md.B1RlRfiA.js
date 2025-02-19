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
const _hoisted_10 = /* @__PURE__ */ createStaticVNode('<p>当使用<code>v-model</code>绑定一个表单项时，当用户改变表单项的状态时，也会随之改变数据，从而导致<code>vue</code>发生重渲染（<code>rerender</code>），这会带来一些性能的开销。</p><p>特别是当用户改变表单项时，页面有一些动画正在进行中，由于JS执行线程和浏览器渲染线程是互斥的，最终会导致动画出现卡顿。</p><p>我们可以通过使用<code>lazy</code>或不使用<code>v-model</code>的方式解决该问题，但要注意，这样可能会导致在某一个时间段内数据和表单项的值是不一致的。</p><h1 id="保持对象引用稳定" tabindex="-1">保持对象引用稳定 <a class="header-anchor" href="#保持对象引用稳定" aria-label="Permalink to &quot;保持对象引用稳定&quot;">​</a></h1>', 4);
const _hoisted_14 = /* @__PURE__ */ createStaticVNode('<p>在绝大部分情况下，<code>vue</code>触发<code>rerender</code>的时机是其依赖的数据发生<strong>变化</strong></p><p>若数据没有发生变化，哪怕给数据重新赋值了，<code>vue</code>也是不会做出任何处理的</p><p>下面是<code>vue</code>判断数据<strong>没有变化</strong>的源码</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// value 为旧值， newVal 为新值</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (newVal </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (newVal </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">!==</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> newVal </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">!==</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> value)) {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  return</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p>因此，如果需要，只要能保证组件的依赖数据不发生变化，组件就不会重新渲染。</p><p>对于原始数据类型，保持其值不变即可</p><p>对于对象类型，保持其引用不变即可</p><p>从另一方面来说，由于可以通过保持属性引用稳定来避免子组件的重渲染，那么我们应该细分组件来尽量避免多余的渲染</p><h1 id="使用v-show替代v-if" tabindex="-1">使用v-show替代v-if <a class="header-anchor" href="#使用v-show替代v-if" aria-label="Permalink to &quot;使用v-show替代v-if&quot;">​</a></h1>', 9);
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
const _hoisted_26 = /* @__PURE__ */ createStaticVNode('<p>首页白屏时间主要受到两个因素的影响：</p><ul><li><p>打包体积过大</p><p>巨型包需要消耗大量的传输时间，导致JS传输完成前页面只有一个<code>&lt;div&gt;</code>，没有可显示的内容</p></li><li><p>需要立即渲染的内容太多</p><p>JS传输完成后，浏览器开始执行JS构造页面。</p><p>但可能一开始要渲染的组件太多，不仅JS执行的时间很长，而且执行完后浏览器要渲染的元素过多，从而导致页面白屏</p></li></ul><p>打包体积过大需要自行优化打包体积，本节不予讨论</p><p>本节仅讨论渲染内容太多的问题。</p><p>一个可行的办法就是<strong>延迟装载组件</strong>，让组件按照指定的先后顺序依次一个一个渲染出来</p><blockquote><p>延迟装载是一个思路，本质上就是利用<code>requestAnimationFrame</code>事件分批渲染内容，它的具体实现多种多样</p></blockquote><h1 id="使用keep-alive" tabindex="-1">使用keep-alive <a class="header-anchor" href="#使用keep-alive" aria-label="Permalink to &quot;使用keep-alive&quot;">​</a></h1>', 7);
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
