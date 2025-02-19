import { _ as _export_sfc, o as openBlock, c as createElementBlock, R as createStaticVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/02-基础知识/11-Vue/07你不知道的computed/课件/笔记.md","filePath":"src/study-notes/02-基础知识/11-Vue/07你不知道的computed/课件/笔记.md","lastUpdated":1739501366000}');
const _sfc_main = { name: "src/study-notes/02-基础知识/11-Vue/07你不知道的computed/课件/笔记.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode("<blockquote><p>面试题：computed和methods有什么区别</p></blockquote><p><strong>标准而浅显的回答</strong></p><blockquote><ol><li>在使用时，computed当做属性使用，而methods则当做方法调用</li><li>computed可以具有getter和setter，因此可以赋值，而methods不行</li><li>computed无法接收多个参数，而methods可以</li><li>computed具有缓存，而methods没有</li></ol></blockquote><p><strong>更接近底层原理的回答</strong></p><blockquote><p>vue对methods的处理比较简单，只需要遍历methods配置中的每个属性，将其对应的函数使用bind绑定当前组件实例后复制其引用到组件实例中即可</p><p>而vue对computed的处理会稍微复杂一些。</p><p>当组件实例触发生命周期函数<code>beforeCreate</code>后，它会做一系列事情，其中就包括对computed的处理</p><p>它会遍历computed配置中的所有属性，为每一个属性创建一个Watcher对象，并传入一个函数，该函数的本质其实就是computed配置中的getter，这样一来，getter运行过程中就会收集依赖</p><p>但是和渲染函数不同，为计算属性创建的Watcher不会立即执行，因为要考虑到该计算属性是否会被渲染函数使用，如果没有使用，就不会得到执行。因此，在创建Watcher的时候，它使用了lazy配置，lazy配置可以让Watcher不会立即执行。</p><p>收到<code>lazy</code>的影响，Watcher内部会保存两个关键属性来实现缓存，一个是<code>value</code>，一个是<code>dirty</code></p><p><code>value</code>属性用于保存Watcher运行的结果，受<code>lazy</code>的影响，该值在最开始是<code>undefined</code></p><p><code>dirty</code>属性用于指示当前的<code>value</code>是否已经过时了，即是否为脏值，受<code>lazy</code>的影响，该值在最开始是<code>true</code></p><p>Watcher创建好后，vue会使用代理模式，将计算属性挂载到组件实例中</p><p>当读取计算属性时，vue检查其对应的Watcher是否是脏值，如果是，则运行函数，计算依赖，并得到对应的值，保存在Watcher的value中，然后设置dirty为false，然后返回。</p><p>如果dirty为false，则直接返回watcher的value</p><p>巧妙的是，在依赖收集时，被依赖的数据不仅会收集到计算属性的Watcher，还会收集到组件的Watcher</p><p>当计算属性的依赖变化时，会先触发计算属性的Watcher执行，此时，它只需设置<code>dirty</code>为true即可，不做任何处理。</p><p>由于依赖同时会收集到组件的Watcher，因此组件会重新渲染，而重新渲染时又读取到了计算属性，由于计算属性目前已为dirty，因此会重新运行getter进行运算</p><p>而对于计算属性的setter，则极其简单，当设置计算属性时，直接运行setter即可</p></blockquote>", 5);
const _hoisted_6 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_6);
}
const __ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  __ as default
};
