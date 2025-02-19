import { _ as _export_sfc, o as openBlock, c as createElementBlock, R as createStaticVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/02-基础知识/11-Vue/02虚拟DOM详解/课件/笔记.md","filePath":"src/study-notes/02-基础知识/11-Vue/02虚拟DOM详解/课件/笔记.md","lastUpdated":1739501366000}');
const _sfc_main = { name: "src/study-notes/02-基础知识/11-Vue/02虚拟DOM详解/课件/笔记.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<blockquote><p>面试题：请你阐述一下对vue虚拟dom的理解</p></blockquote><ol><li><p>什么是虚拟dom？</p><p>虚拟dom本质上就是一个普通的JS对象，用于描述视图的界面结构</p><p>在vue中，每个组件都有一个<code>render</code>函数，每个<code>render</code>函数都会返回一个虚拟dom树，这也就意味着每个组件都对应一棵虚拟DOM树</p><img src="http://mdrs.yuanjin.tech/img/20210225140726.png" alt="image-20210225140726003" style="zoom:30%;" align="left"></li><li><p>为什么需要虚拟dom？</p><p>在<code>vue</code>中，渲染视图会调用<code>render</code>函数，这种渲染不仅发生在组件创建时，同时发生在视图依赖的数据更新时。如果在渲染时，直接使用真实<code>DOM</code>，由于真实<code>DOM</code>的创建、更新、插入等操作会带来大量的性能损耗，从而就会极大的降低渲染效率。</p><p>因此，<code>vue</code>在渲染时，使用虚拟dom来替代真实dom，主要为解决渲染效率的问题。</p></li><li><p>虚拟dom是如何转换为真实dom的？</p><p>在一个组件实例首次被渲染时，它先生成虚拟dom树，然后根据虚拟dom树创建真实dom，并把真实dom挂载到页面中合适的位置，此时，每个虚拟dom便会对应一个真实的dom。</p><p>如果一个组件受响应式数据变化的影响，需要重新渲染时，它仍然会重新调用render函数，创建出一个新的虚拟dom树，用新树和旧树对比，通过对比，vue会找到最小更新量，然后更新必要的虚拟dom节点，最后，这些更新过的虚拟节点，会去修改它们对应的真实dom</p><p>这样一来，就保证了对真实dom达到最小的改动。</p><img src="http://mdrs.yuanjin.tech/img/20210225144108.png" alt="image-20210225144108143" style="zoom:33%;" align="left"></li><li><p>模板和虚拟dom的关系</p><p>vue框架中有一个<code>compile</code>模块，它主要负责将模板转换为<code>render</code>函数，而<code>render</code>函数调用后将得到虚拟dom。</p><p>编译的过程分两步：</p><ol><li>将模板字符串转换成为<code>AST</code></li><li>将<code>AST</code>转换为<code>render</code>函数</li></ol><p>如果使用传统的引入方式，则编译时间发生在组件第一次加载时，这称之为运行时编译。</p><p>如果是在<code>vue-cli</code>的默认配置下，编译发生在打包时，这称之为模板预编译。</p><p>编译是一个极其耗费性能的操作，预编译可以有效的提高运行时的性能，而且，由于运行的时候已不需要编译，<code>vue-cli</code>在打包时会排除掉<code>vue</code>中的<code>compile</code>模块，以减少打包体积</p><p>模板的存在，仅仅是为了让开发人员更加方便的书写界面代码</p><p><strong>vue最终运行的时候，最终需要的是render函数，而不是模板，因此，模板中的各种语法，在虚拟dom中都是不存在的，它们都会变成虚拟dom的配置</strong></p></li></ol>', 2);
const _hoisted_3 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_3);
}
const __ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  __ as default
};
