import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, R as createStaticVNode, k as createBaseVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"Observer","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/02-基础知识/11-Vue/04数据响应原理/课件/笔记.md","filePath":"src/study-notes/02-基础知识/11-Vue/04数据响应原理/课件/笔记.md","lastUpdated":1739501366000}');
const _sfc_main = { name: "src/study-notes/02-基础知识/11-Vue/04数据响应原理/课件/笔记.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<blockquote><p>面试题：请阐述<code>vue2</code>响应式原理</p></blockquote><blockquote><p>vue官方阐述：<a href="https://cn.vuejs.org/v2/guide/reactivity.html" target="_blank" rel="noreferrer">https://cn.vuejs.org/v2/guide/reactivity.html</a></p></blockquote><p><strong>响应式数据的最终目标</strong>，是当对象本身或对象属性发生变化时，将会运行一些函数，最常见的就是render函数。</p><p>在具体实现上，vue用到了<strong>几个核心部件</strong>：</p><ol><li>Observer</li><li>Dep</li><li>Watcher</li><li>Scheduler</li></ol><h1 id="observer" tabindex="-1">Observer <a class="header-anchor" href="#observer" aria-label="Permalink to &quot;Observer&quot;">​</a></h1>', 6);
const _hoisted_7 = /* @__PURE__ */ createStaticVNode('<p>Observer要实现的目标非常简单，就是把一个普通的对象转换为响应式的对象</p><p>为了实现这一点，Observer把对象的每个属性通过<code>Object.defineProperty</code>转换为带有<code>getter</code>和<code>setter</code>的属性，这样一来，当访问或设置属性时，<code>vue</code>就有机会做一些别的事情。</p><img src="http://mdrs.yuanjin.tech/img/20210226153448.png" alt="image-20210226153448807" style="zoom:50%;"><p>Observer是vue内部的构造器，我们可以通过Vue提供的静态方法<code>Vue.observable( object )</code>间接的使用该功能。</p><p>在组件生命周期中，这件事发生在<code>beforeCreate</code>之后，<code>created</code>之前。</p><p>具体实现上，它会递归遍历对象的所有属性，以完成深度的属性转换。</p><p>由于遍历时只能遍历到对象的当前属性，因此无法监测到将来动态增加或删除的属性，因此<code>vue</code>提供了<code>$set</code>和<code>$delete</code>两个实例方法，让开发者通过这两个实例方法对已有响应式对象添加或删除属性。</p><p>对于数组，<code>vue</code>会更改它的隐式原型，之所以这样做，是因为vue需要监听那些可能改变数组内容的方法</p><img src="http://mdrs.yuanjin.tech/img/20210226154624.png" alt="image-20210226154624015" style="zoom:50%;"><p>总之，Observer的目标，就是要让一个对象，它属性的读取、赋值，内部数组的变化都要能够被vue感知到。</p><h1 id="dep" tabindex="-1">Dep <a class="header-anchor" href="#dep" aria-label="Permalink to &quot;Dep&quot;">​</a></h1>', 11);
const _hoisted_18 = /* @__PURE__ */ createStaticVNode('<p>这里有两个问题没解决，就是读取属性时要做什么事，而属性变化时要做什么事，这个问题需要依靠Dep来解决。</p><p>Dep的含义是<code>Dependency</code>，表示依赖的意思。</p><p><code>Vue</code>会为响应式对象中的每个属性、对象本身、数组本身创建一个<code>Dep</code>实例，每个<code>Dep</code>实例都有能力做以下两件事：</p><ul><li>记录依赖：是谁在用我</li><li>派发更新：我变了，我要通知那些用到我的人</li></ul><p>当读取响应式对象的某个属性时，它会进行依赖收集：有人用到了我</p><p>当改变某个属性时，它会派发更新：那些用我的人听好了，我变了</p><img src="http://mdrs.yuanjin.tech/img/20210226155852.png" alt="image-20210226155852964" style="zoom:50%;"><h1 id="watcher" tabindex="-1">Watcher <a class="header-anchor" href="#watcher" aria-label="Permalink to &quot;Watcher&quot;">​</a></h1>', 8);
const _hoisted_26 = /* @__PURE__ */ createStaticVNode('<p>这里又出现一个问题，就是Dep如何知道是谁在用我？</p><p>要解决这个问题，需要依靠另一个东西，就是Watcher。</p><p>当某个函数执行的过程中，用到了响应式数据，响应式数据是无法知道是哪个函数在用自己的</p><p>因此，vue通过一种巧妙的办法来解决这个问题</p><p>我们不要直接执行函数，而是把函数交给一个叫做watcher的东西去执行，watcher是一个对象，每个这样的函数执行时都应该创建一个watcher，通过watcher去执行</p><p>watcher会设置一个全局变量，让全局变量记录当前负责执行的watcher等于自己，然后再去执行函数，在函数的执行过程中，如果发生了依赖记录<code>dep.depend()</code>，那么<code>Dep</code>就会把这个全局变量记录下来，表示：有一个watcher用到了我这个属性</p><p>当Dep进行派发更新时，它会通知之前记录的所有watcher：我变了</p><img src="http://mdrs.yuanjin.tech/img/20210226161404.png" alt="image-20210226161404327" style="zoom:50%;"><p>每一个<code>vue</code>组件实例，都至少对应一个<code>watcher</code>，该<code>watcher</code>中记录了该组件的<code>render</code>函数。</p><p><code>watcher</code>首先会把<code>render</code>函数运行一次以收集依赖，于是那些在render中用到的响应式数据就会记录这个watcher。</p><p>当数据变化时，dep就会通知该watcher，而watcher将重新运行render函数，从而让界面重新渲染同时重新记录当前的依赖。</p><h1 id="scheduler" tabindex="-1">Scheduler <a class="header-anchor" href="#scheduler" aria-label="Permalink to &quot;Scheduler&quot;">​</a></h1>', 12);
const _hoisted_38 = /* @__PURE__ */ createStaticVNode('<p>现在还剩下最后一个问题，就是Dep通知watcher之后，如果watcher执行重运行对应的函数，就有可能导致函数频繁运行，从而导致效率低下</p><p>试想，如果一个交给watcher的函数，它里面用到了属性a、b、c、d，那么a、b、c、d属性都会记录依赖，于是下面的代码将触发4次更新：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">state.a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;new data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">state.b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;new data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">state.c </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;new data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">state.d </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;new data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span></code></pre></div><p>这样显然是不合适的，因此，watcher收到派发更新的通知后，实际上不是立即执行对应函数，而是把自己交给一个叫调度器的东西</p><p>调度器维护一个执行队列，该队列同一个watcher仅会存在一次，队列中的watcher不是立即执行，它会通过一个叫做<code>nextTick</code>的工具方法，把这些需要执行的watcher放入到事件循环的微队列中，nextTick的具体做法是通过<code>Promise</code>完成的</p><blockquote><p>nextTick 通过 <code>this.$nextTick</code> 暴露给开发者</p><p>nextTick 的具体处理方式见：<a href="https://cn.vuejs.org/v2/guide/reactivity.html#%E5%BC%82%E6%AD%A5%E6%9B%B4%E6%96%B0%E9%98%9F%E5%88%97" target="_blank" rel="noreferrer">https://cn.vuejs.org/v2/guide/reactivity.html#异步更新队列</a></p></blockquote><p>也就是说，当响应式数据变化时，<code>render</code>函数的执行是异步的，并且在微队列中</p><h1 id="总体流程" tabindex="-1">总体流程 <a class="header-anchor" href="#总体流程" aria-label="Permalink to &quot;总体流程&quot;">​</a></h1>', 8);
const _hoisted_46 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: "http://mdrs.yuanjin.tech/img/20210226163936.png",
    alt: "image-20210226163936839"
  })
], -1);
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
    _hoisted_18,
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
    _hoisted_38,
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
    _hoisted_46
  ]);
}
const __ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  __ as default
};
