import { _ as _export_sfc, o as openBlock, c as createElementBlock, R as createStaticVNode } from "./chunks/framework.b55ravPP.js";
const _imports_0 = "/advance-blog/assets/image-20240819090224371.oULwHdhq.png";
const _imports_1 = "/advance-blog/assets/image-20240819090234994.0er6M1Q9.png";
const _imports_2 = "/advance-blog/assets/image-20240819090244901.B1EiAeFd.png";
const _imports_3 = "/advance-blog/assets/image-20240819090250875._bApYeHU.png";
const _imports_4 = "/advance-blog/assets/image-20240819090259736.l1ZA8OWy.png";
const _imports_5 = "/advance-blog/assets/image-20240819090306716.HzE380jO.png";
const _imports_6 = "/advance-blog/assets/image-20240819090312153.sg1MFG1i.png";
const _imports_7 = "/advance-blog/assets/image-20240819090332924.ugQ_sZqc.png";
const _imports_8 = "/advance-blog/assets/image-20240819090339294.xQ946uOG.png";
const _imports_9 = "/advance-blog/assets/image-20240819090343791.5XWoKlMk.png";
const _imports_10 = "/advance-blog/assets/image-20240819090347528.hNDsVdBM.png";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/06-源码理解/01-源码调试/01-如何调试源码.md","filePath":"src/study-notes/06-源码理解/01-源码调试/01-如何调试源码.md","lastUpdated":1739881735000}');
const _sfc_main = { name: "src/study-notes/06-源码理解/01-源码调试/01-如何调试源码.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="debug-vue源码" tabindex="-1">debug Vue源码 <a class="header-anchor" href="#debug-vue源码" aria-label="Permalink to &quot;debug Vue源码&quot;">​</a></h2><h3 id="一-使用浏览器" tabindex="-1">一.使用浏览器 <a class="header-anchor" href="#一-使用浏览器" aria-label="Permalink to &quot;一.使用浏览器&quot;">​</a></h3><p>开启sourcemap选项,启动一个开发服务器,直接调试。</p><h3 id="二-使用vscode" tabindex="-1">二.使用Vscode <a class="header-anchor" href="#二-使用vscode" aria-label="Permalink to &quot;二.使用Vscode&quot;">​</a></h3><p>在vue源码中,下载下来之后 会自带一个serve的包,当去使用的时候,可以直接pnpm serve /目录/,当运行测试代码的时候 会在vs中自动跳转到对应部分。</p><h4 id="_1-启动vue自带的serve服务器" tabindex="-1">1.启动vue自带的serve服务器 <a class="header-anchor" href="#_1-启动vue自带的serve服务器" aria-label="Permalink to &quot;1.启动vue自带的serve服务器&quot;">​</a></h4><p><img src="' + _imports_0 + '" alt="image-20240819090224371"></p><h4 id="_2-配置vscode" tabindex="-1">2.配置Vscode <a class="header-anchor" href="#_2-配置vscode" aria-label="Permalink to &quot;2.配置Vscode&quot;">​</a></h4><h5 id="_2-1-配置允许debug选项" tabindex="-1">2.1 配置<code>允许debug</code>选项 <a class="header-anchor" href="#_2-1-配置允许debug选项" aria-label="Permalink to &quot;2.1 配置`允许debug`选项&quot;">​</a></h5><p>如下修改：首选项 =&gt; 设置 =&gt; 搜索”debug“ =&gt; 功能/调试 =&gt; 勾选 <em>Debug：Allow Breakpoints Everywhere</em></p><p><img src="' + _imports_1 + '" alt="image-20240819090234994"></p><h5 id="_2-2-配置配置vscode-launch-json文件" tabindex="-1">2.2 配置<code>配置vscode\\launch.json文件</code> <a class="header-anchor" href="#_2-2-配置配置vscode-launch-json文件" aria-label="Permalink to &quot;2.2 配置`配置vscode\\launch.json文件`&quot;">​</a></h5><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">{</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  // 使用 IntelliSense 了解相关属性。 </span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  // 悬停以查看现有属性的描述。</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;0.2.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">  &quot;configurations&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: [</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    {</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">      &quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;chrome&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">      &quot;request&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;launch&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">      &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;vuejs: chrome&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">      &quot;url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;http://localhost:8028&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">      &quot;webRoot&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;${workspaceFolder}/src&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">      &quot;sourceMapPathOverrides&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: {</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">        &quot;webpack:///src/*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;${webRoot}/*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">        &quot;webpack:///./src/*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;${webRoot}/*&quot;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  ]</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><h5 id="_2-3-安装插件" tabindex="-1">2.3 安装插件 <a class="header-anchor" href="#_2-3-安装插件" aria-label="Permalink to &quot;2.3 安装插件&quot;">​</a></h5><p><img src="' + _imports_2 + '" alt="image-20240819090244901"></p><h5 id="_2-4-配置基本环境" tabindex="-1">2.4 配置基本环境 <a class="header-anchor" href="#_2-4-配置基本环境" aria-label="Permalink to &quot;2.4 配置基本环境&quot;">​</a></h5><p>此时配置的<code>url</code>要和刚刚启动的<code>serve</code>服务器一致，需要同时<code>启动serve和debug服务</code></p><p><img src="' + _imports_3 + '" alt="image-20240819090250875"></p><h5 id="_2-5-当按f5起来之后-会弹出浏览器-我们在浏览器中可以打上断点-进行调试" tabindex="-1">2.5 当按<code>f5</code>起来之后,会弹出浏览器,我们在浏览器中可以打上断点,进行调试 <a class="header-anchor" href="#_2-5-当按f5起来之后-会弹出浏览器-我们在浏览器中可以打上断点-进行调试" aria-label="Permalink to &quot;2.5 当按`f5`起来之后,会弹出浏览器,我们在浏览器中可以打上断点,进行调试&quot;">​</a></h5><p><img src="' + _imports_4 + '" alt="image-20240819090259736"></p><p><code>当我们刷新界面,就自动的会调到vscode源码部分啦</code></p><p><img src="' + _imports_5 + '" alt="image-20240819090306716"></p><p><code>进入源码部分</code></p><p><img src="' + _imports_6 + '" alt="image-20240819090312153"></p><h3 id="三-在webstorm中调试源码" tabindex="-1">三.在webstorm中调试源码 <a class="header-anchor" href="#三-在webstorm中调试源码" aria-label="Permalink to &quot;三.在webstorm中调试源码&quot;">​</a></h3><h5 id="启动源码项目-使用自带的serve插件-运行pnpm-serve" tabindex="-1">启动源码项目,使用自带的<code>serve</code>插件,运行<code>pnpm serve</code> <a class="header-anchor" href="#启动源码项目-使用自带的serve插件-运行pnpm-serve" aria-label="Permalink to &quot;启动源码项目,使用自带的`serve`插件,运行`pnpm serve`&quot;">​</a></h5><p><img src="' + _imports_7 + '" alt="image-20240819090332924"></p><p>启动后添加配置,注意,此时配置的<code>url</code>要和刚刚启动的<code>serve</code>服务器一致，需要同时<code>启动serve和debug服务</code></p><p><img src="' + _imports_8 + '" alt="image-20240819090339294"></p><p><img src="' + _imports_9 + '" alt="image-20240819090343791"></p><p>当我们<code>运行起来</code>之后,会弹出浏览器窗口,我们找到需要<code>debug</code>的<code>html</code>,打上断点后,<code>webstorm</code>中会自动跳转到断点位置,这样我们一步步进行操作,就可以对vue的源码进行操作</p><p><img src="' + _imports_10 + '" alt="image-20240819090347528"></p>', 32);
const _hoisted_33 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_33);
}
const _01_______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _01_______ as default
};
