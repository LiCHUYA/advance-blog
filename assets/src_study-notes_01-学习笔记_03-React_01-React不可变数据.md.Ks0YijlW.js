import { _ as _export_sfc, o as openBlock, c as createElementBlock, R as createStaticVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/01-学习笔记/03-React/01-React不可变数据.md","filePath":"src/study-notes/01-学习笔记/03-React/01-React不可变数据.md","lastUpdated":1739460242000}');
const _sfc_main = { name: "src/study-notes/01-学习笔记/03-React/01-React不可变数据.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="react中的不可变数据" tabindex="-1">React中的不可变数据 <a class="header-anchor" href="#react中的不可变数据" aria-label="Permalink to &quot;React中的不可变数据&quot;">​</a></h2><h3 id="值类型与引用类型在-react-中的应用" tabindex="-1">值类型与引用类型在 React 中的应用 <a class="header-anchor" href="#值类型与引用类型在-react-中的应用" aria-label="Permalink to &quot;值类型与引用类型在 React 中的应用&quot;">​</a></h3><h4 id="值类型-value-types" tabindex="-1">值类型（Value Types） <a class="header-anchor" href="#值类型-value-types" aria-label="Permalink to &quot;值类型（Value Types）&quot;">​</a></h4><p>在 React 中，值类型的状态更新比较直接，因为值类型的变量持有的是数据值本身，对其进行操作是创建新的值，不会影响其他变量。</p><p><strong>示例：更新值类型的状态</strong></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> React, { useState } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;react&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> Counter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  const</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">count</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">setCount</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> useState</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> increment</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">    setCount</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(count </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  };</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;Count: </span><span style="--shiki-light:#24292E;--shiki-dark:#F47067;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">count</span><span style="--shiki-light:#24292E;--shiki-dark:#F47067;">}</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> onClick</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#F47067;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">increment</span><span style="--shiki-light:#24292E;--shiki-dark:#F47067;">}</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;Increment&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  );</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">};</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Counter;</span></span></code></pre></div><p>在这个例子中，<code>count</code> 是一个值类型（number），每次更新 <code>count</code> 时，React 会通过 <code>setCount</code> 创建一个新的状态值，而不会影响旧状态。</p><h4 id="引用类型-reference-types" tabindex="-1">引用类型（Reference Types） <a class="header-anchor" href="#引用类型-reference-types" aria-label="Permalink to &quot;引用类型（Reference Types）&quot;">​</a></h4><p>在 React 中，引用类型的状态更新需要特别注意，因为直接修改引用类型的数据会影响所有引用它的变量。为了保持不可变性，必须创建新的对象或数组副本。</p><p><strong>示例：使用浅拷贝更新对象状态</strong></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> React, { useState } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;react&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> UserProfile</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  const</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">user</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">setUser</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> useState</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">({ name: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;Alice&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, age: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">25</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> });</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> updateName</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">    setUser</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">({ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">user, name: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;Bob&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> });</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  };</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;Name: </span><span style="--shiki-light:#24292E;--shiki-dark:#F47067;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">user.name</span><span style="--shiki-light:#24292E;--shiki-dark:#F47067;">}</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;Age: </span><span style="--shiki-light:#24292E;--shiki-dark:#F47067;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">user.age</span><span style="--shiki-light:#24292E;--shiki-dark:#F47067;">}</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> onClick</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#F47067;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">updateName</span><span style="--shiki-light:#24292E;--shiki-dark:#F47067;">}</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;Change Name&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  );</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">};</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> UserProfile;</span></span></code></pre></div><p>在这个例子中，<code>setUser</code> 使用对象展开运算符创建了一个新的对象副本，并更新了 <code>name</code> 属性。这样做保证了状态的不可变性。</p><h3 id="使用-immer-管理不可变数据在-react-中的好处" tabindex="-1">使用 Immer 管理不可变数据在 React 中的好处 <a class="header-anchor" href="#使用-immer-管理不可变数据在-react-中的好处" aria-label="Permalink to &quot;使用 Immer 管理不可变数据在 React 中的好处&quot;">​</a></h3><p>Immer 是一个库，它使得在 React 中管理不可变数据变得更简单。通过提供一个可变的草稿状态（draft state），我们可以像操作普通的可变数据一样更新状态，同时保持不可变性。</p><p><strong>安装 Immer</strong></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> immer</span></span></code></pre></div><p><strong>示例：使用 Immer 更新对象状态</strong></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> React, { useState } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;react&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> produce </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;immer&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> UserProfile</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  const</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">user</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">setUser</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> useState</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">({ name: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;Alice&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, age: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">25</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> });</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> updateName</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">    setUser</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">produce</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">draft</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      draft.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;Bob&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }));</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  };</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;Name: </span><span style="--shiki-light:#24292E;--shiki-dark:#F47067;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">user.name</span><span style="--shiki-light:#24292E;--shiki-dark:#F47067;">}</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;Age: </span><span style="--shiki-light:#24292E;--shiki-dark:#F47067;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">user.age</span><span style="--shiki-light:#24292E;--shiki-dark:#F47067;">}</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> onClick</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#F47067;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">updateName</span><span style="--shiki-light:#24292E;--shiki-dark:#F47067;">}</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;Change Name&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  );</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">};</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> UserProfile;</span></span></code></pre></div><p>在这个例子中，<code>produce</code> 函数接收当前状态和一个修改草稿状态的函数，直接修改草稿状态中的 <code>name</code> 属性，Immer 会自动生成新的不可变状态。</p><h3 id="使用-immer-管理复杂状态" tabindex="-1">使用 Immer 管理复杂状态 <a class="header-anchor" href="#使用-immer-管理复杂状态" aria-label="Permalink to &quot;使用 Immer 管理复杂状态&quot;">​</a></h3><p>当管理嵌套对象或数组的复杂状态时，Immer 显得尤为强大。它简化了深拷贝的过程，使代码更简洁和易读。</p><p><strong>示例：使用 Immer 更新嵌套对象状态</strong></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> React, { useState } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;react&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> produce </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;immer&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> UserProfile</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  const</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">user</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">setUser</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> useState</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">({</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;Alice&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    address: {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      city: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;Wonderland&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      zip: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;12345&#39;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  });</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> updateCity</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">    setUser</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">produce</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">draft</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      draft.address.city </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &#39;Oz&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }));</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  };</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;Name: </span><span style="--shiki-light:#24292E;--shiki-dark:#F47067;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">user.name</span><span style="--shiki-light:#24292E;--shiki-dark:#F47067;">}</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;City: </span><span style="--shiki-light:#24292E;--shiki-dark:#F47067;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">user.address.city</span><span style="--shiki-light:#24292E;--shiki-dark:#F47067;">}</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> onClick</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#F47067;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">updateCity</span><span style="--shiki-light:#24292E;--shiki-dark:#F47067;">}</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;Change City&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  );</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">};</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> UserProfile;</span></span></code></pre></div><p>在这个例子中，使用 Immer 可以方便地更新嵌套对象中的属性，而无需手动创建深拷贝。</p>', 24);
const _hoisted_25 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_25);
}
const _01React_____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _01React_____ as default
};
