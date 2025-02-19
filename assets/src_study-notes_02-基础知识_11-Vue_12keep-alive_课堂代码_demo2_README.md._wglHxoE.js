import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, k as createBaseVNode, a as createTextVNode, R as createStaticVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"demo2","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/02-基础知识/11-Vue/12keep-alive/课堂代码/demo2/README.md","filePath":"src/study-notes/02-基础知识/11-Vue/12keep-alive/课堂代码/demo2/README.md","lastUpdated":1739501366000}');
const _sfc_main = { name: "src/study-notes/02-基础知识/11-Vue/12keep-alive/课堂代码/demo2/README.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "demo2",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("demo2 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#demo2",
    "aria-label": 'Permalink to "demo2"'
  }, "​")
], -1);
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<h2 id="project-setup" tabindex="-1">Project setup <a class="header-anchor" href="#project-setup" aria-label="Permalink to &quot;Project setup&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span>npm install</span></span></code></pre></div><h3 id="compiles-and-hot-reloads-for-development" tabindex="-1">Compiles and hot-reloads for development <a class="header-anchor" href="#compiles-and-hot-reloads-for-development" aria-label="Permalink to &quot;Compiles and hot-reloads for development&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span>npm run serve</span></span></code></pre></div><h3 id="compiles-and-minifies-for-production" tabindex="-1">Compiles and minifies for production <a class="header-anchor" href="#compiles-and-minifies-for-production" aria-label="Permalink to &quot;Compiles and minifies for production&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span>npm run build</span></span></code></pre></div><h3 id="customize-configuration" tabindex="-1">Customize configuration <a class="header-anchor" href="#customize-configuration" aria-label="Permalink to &quot;Customize configuration&quot;">​</a></h3><p>See <a href="https://cli.vuejs.org/config/" target="_blank" rel="noreferrer">Configuration Reference</a>.</p>', 8);
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
const README = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  README as default
};
