import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, k as createBaseVNode, a as createTextVNode, R as createStaticVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"内置组件Transition","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/02-基础知识/11-Vue/10过渡和动画/课件/笔记.md","filePath":"src/study-notes/02-基础知识/11-Vue/10过渡和动画/课件/笔记.md","lastUpdated":1739501366000}');
const _sfc_main = { name: "src/study-notes/02-基础知识/11-Vue/10过渡和动画/课件/笔记.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "内置组件transition",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("内置组件Transition "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#内置组件transition",
    "aria-label": 'Permalink to "内置组件Transition"'
  }, "​")
], -1);
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<blockquote><p>官网详细文档：<a href="https://cn.vuejs.org/v2/guide/transitions.html" target="_blank" rel="noreferrer">https://cn.vuejs.org/v2/guide/transitions.html</a></p></blockquote><h2 id="时机" tabindex="-1">时机 <a class="header-anchor" href="#时机" aria-label="Permalink to &quot;时机&quot;">​</a></h2><p><code>Transition</code>组件会监控<code>slot</code>中<strong>唯一</strong>根元素的出现和消失，并会在其出现和消失时应用过渡效果</p><p>具体的监听内容是：</p><ul><li>它会对新旧两个虚拟节点进行对比，如果旧节点被销毁，则应用消失效果，如果新节点是新增的，则应用进入效果</li><li>如果不是上述情况，则它会对比新旧节点，观察其<code>v-show</code>是否变化，<code>true-&gt;false</code>应用消失效果，<code>false-&gt;true</code>应用进入效果</li></ul><h2 id="流程" tabindex="-1">流程 <a class="header-anchor" href="#流程" aria-label="Permalink to &quot;流程&quot;">​</a></h2><blockquote><p>类名规则：</p><ol><li>如果<code>transition</code>上没有定义<code>name</code>，则类名为<code>v-xxxx</code></li><li>如果<code>transition</code>上定义了<code>name</code>，则类名为<code>${name}-xxxx</code></li><li>如果指定了类名，直接使用指定的类名</li></ol><p>指定类名见：<a href="https://cn.vuejs.org/v2/guide/transitions.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E8%BF%87%E6%B8%A1%E7%9A%84%E7%B1%BB%E5%90%8D" target="_blank" rel="noreferrer">自定义过渡类名</a></p></blockquote><p><strong>1. 进入效果</strong></p><p><img src="http://mdrs.yuanjin.tech/img/20210309212357.png" alt=""></p><p><strong>2. 消失效果</strong></p><p><img src="http://mdrs.yuanjin.tech/img/20210309213426.png" alt="image-20210309213426958"></p><h2 id="过渡组" tabindex="-1">过渡组 <a class="header-anchor" href="#过渡组" aria-label="Permalink to &quot;过渡组&quot;">​</a></h2><p><code>Transision</code>可以监控其内部的<strong>单个dom元素</strong>的出现和消失，并为其附加样式</p><p>如果要监控一个dom列表，就需要使用<code>TransitionGroup</code>组件</p><p>它会对列表的新增元素应用<strong>进入效果</strong>，删除元素应用<strong>消失效果</strong>，对被移动的元素应用<code>v-move</code>样式</p><blockquote><p>被移动的元素之所以能够实现过渡效果，是因为<code>TransisionGroup</code>内部使用了Flip过渡方案</p></blockquote>', 16);
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
const __ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  __ as default
};
