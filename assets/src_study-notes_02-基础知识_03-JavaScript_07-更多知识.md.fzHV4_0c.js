import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, k as createBaseVNode, a as createTextVNode, R as createStaticVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"更多知识","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/02-基础知识/03-JavaScript/07-更多知识.md","filePath":"src/study-notes/02-基础知识/03-JavaScript/07-更多知识.md","lastUpdated":1739501366000}');
const _sfc_main = { name: "src/study-notes/02-基础知识/03-JavaScript/07-更多知识.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "更多知识",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("更多知识 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#更多知识",
    "aria-label": 'Permalink to "更多知识"'
  }, "​")
], -1);
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<p>该部分知识的特点：</p><ul><li>面试有较低的机率被问到</li><li>实际编码中用得不是太多</li></ul><p><strong>1. 符号</strong></p><p>作用：消除魔法字符、避免一个复杂对象中含有多个属性的时候某个属性名覆盖掉、模拟类的私有方法</p><p>所在章节：ES6 详细版（袁进）</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-02-14-073533.png" alt="image-20220214153533405" style="zoom:50%;"><p><strong>2. 迭代器和生成器</strong></p><p>作用：实现异步的一种方式，React 中大量使用到了生成器，Koa第一代也是大量用到了生成器。</p><p>所在章节：ES6 详细版（袁进）</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-02-14-073151.png" alt="image-20220214153151334" style="zoom:50%;"><p><strong>3. 代理与反射</strong></p><p>作用：属于元编程的知识，写框架的时候会用到</p><p>所在章节：ES6 详细版（袁进）</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-02-14-073241.png" alt="image-20220214153240704" style="zoom:50%;"><p><strong>4. 增强的数组功能</strong></p><p>作用：JavaScript 类型化数组是一种类似数组的对象，并提供了一种用于访问原始二进制数据的机制。JavaScript引擎会做一些内部优化，以便对数组的操作可以很快。</p><p>所在章节：ES6 详细版（袁进）</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-02-14-073319.png" alt="image-20220214153318805" style="zoom:50%;">', 18);
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
const _07_____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _07_____ as default
};
