import { _ as _export_sfc, o as openBlock, c as createElementBlock, R as createStaticVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/01-学习笔记/01-js高级plus/32-补充_箭头函数.md","filePath":"src/study-notes/01-学习笔记/01-js高级plus/32-补充_箭头函数.md","lastUpdated":1739460242000}');
const _sfc_main = { name: "src/study-notes/01-学习笔记/01-js高级plus/32-补充_箭头函数.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h3 id="箭头函数的特性" tabindex="-1">箭头函数的特性 <a class="header-anchor" href="#箭头函数的特性" aria-label="Permalink to &quot;箭头函数的特性&quot;">​</a></h3><h4 id="_1-箭头函数的主要特性" tabindex="-1">1. <strong>箭头函数的主要特性</strong> <a class="header-anchor" href="#_1-箭头函数的主要特性" aria-label="Permalink to &quot;1. **箭头函数的主要特性**&quot;">​</a></h4><p>箭头函数（Arrow Functions）是 ES6 引入的一种更简洁的函数表达式语法,箭头函数引入了更简洁的语法，同时也具有一些与传统函数不同的特性。以下是它的主要特性：</p><ol><li><p><strong>没有原型对象 (<code>prototype</code>)</strong>：</p><ul><li><p>箭头函数没有 <code>prototype</code> 属性，因此无法用作构造函数，无法通过 <code>new</code> 操作符实例化对象。</p></li><li><p>这意味着箭头函数不能生成实例对象，也不能用于定义类的构造函数。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> arrowFunc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {};</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">arrowFunc</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// undefined</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 尝试实例化</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> obj</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> arrowFunc</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// TypeError: arrowFunc is not a constructor</span></span></code></pre></div></li></ul></li><li><p><strong>不能使用 <code>new</code> 实例化</strong>：</p><ul><li>由于没有 <code>prototype</code> 和 <code>[[Construct]]</code> 方法，尝试用 <code>new</code> 操作符调用箭头函数会导致抛出 <code>TypeError</code>。</li></ul></li><li><p><strong>没有 <code>arguments</code> 对象</strong>：</p><ul><li><p>箭头函数中没有传统的 <code>arguments</code> 对象。取而代之的是，使用 <strong>rest 参数</strong>（<code>...args</code>）来获取传入的参数。</p></li><li><p>这是因为箭头函数不会创建自己的 <code>arguments</code> 和 <code>this</code> 绑定。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> arrowFunc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">arguments</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// ReferenceError: arguments is not defined</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">};</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">arrowFunc</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 使用 rest 参数代替 arguments</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> arrowFuncWithRest</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(args); </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// [1, 2, 3]</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">};</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">arrowFuncWithRest</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span></code></pre></div></li></ul></li><li><p><strong><code>this</code> 的绑定是词法作用域的</strong>：</p><ul><li><p>箭头函数不创建自己的 <code>this</code> 绑定，它的 <code>this</code> 是从<strong>定义箭头函数时</strong>的外层作用域中继承的。</p></li><li><p>这意味着箭头函数的 <code>this</code> 永远指向定义它时的上下文，而不是调用时的上下文。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> TraditionalFunc</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">() {</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  this</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">  setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">() {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.value); </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// undefined, 因为此处的 this 指向全局对象 (或 undefined 在严格模式下)</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  }, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> ArrowFunc</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">() {</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">  this</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">  setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">.value); </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 1, 因为箭头函数的 this 绑定到 ArrowFunc 的 this</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  }, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> TraditionalFunc</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> ArrowFunc</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span></code></pre></div></li></ul></li><li><p><strong>没有 <code>super</code> 和 <code>new.target</code></strong>：</p><ul><li>在箭头函数中，<code>super</code> 和 <code>new.target</code> 也是从外层作用域继承的，不会有独立的绑定。</li></ul></li><li><p><strong>不能使用 <code>yield</code></strong>：</p><ul><li>箭头函数不能作为生成器函数，无法使用 <code>yield</code> 关键字。</li></ul></li></ol><h4 id="_2-v8-引擎中的实现与源码解析" tabindex="-1">2. <strong>V8 引擎中的实现与源码解析</strong> <a class="header-anchor" href="#_2-v8-引擎中的实现与源码解析" aria-label="Permalink to &quot;2. **V8 引擎中的实现与源码解析**&quot;">​</a></h4><p>V8 是 Google Chrome 和 Node.js 所用的 JavaScript 引擎。理解 V8 如何处理箭头函数，有助于深入了解它们的行为和性能特征。</p><ol><li><p><strong>词法作用域的 <code>this</code> 绑定</strong>：</p><ul><li>在 V8 中，箭头函数的 <code>this</code> 是通过词法作用域进行绑定的。这意味着箭头函数在创建时，V8 会捕获其外层作用域的 <code>this</code>，并将其固定在箭头函数的闭包中。</li><li>具体实现中，V8 在创建箭头函数的字节码时，会直接将外部 <code>this</code> 的引用嵌入到函数对象中，不会生成独立的 <code>[[ThisBinding]]</code>。</li></ul></li><li><p><strong>跳过构造器相关元数据的生成</strong>：</p><ul><li>由于箭头函数没有 <code>prototype</code>，V8 在生成函数对象时会跳过 <code>[[Construct]]</code> 的相关处理。这减少了函数对象的复杂度，提升了运行时的效率。</li><li>这也是为什么箭头函数不能被 <code>new</code> 实例化的原因之一。V8 的 <code>Call</code> 方法会检查函数是否有 <code>[[Construct]]</code>，如果没有则抛出错误。</li></ul></li><li><p><strong>没有 <code>arguments</code> 对象</strong>：</p><ul><li>在 V8 中，<code>arguments</code> 对象是在函数调用时由引擎根据上下文动态生成的。然而，由于箭头函数没有独立的 <code>[[Call]]</code> 上下文，所以它们不会生成自己的 <code>arguments</code> 对象。</li><li>对于箭头函数，V8 会直接引用上层作用域的 <code>arguments</code>，或者使用 rest 参数来代替。</li></ul></li><li><p><strong>优化执行路径</strong>：</p><ul><li>由于箭头函数的 <code>this</code>、<code>arguments</code> 和其他上下文信息都是在定义时确定的，V8 在执行箭头函数时可以跳过许多普通函数需要处理的上下文切换和绑定操作。</li><li>这使得箭头函数在某些场景下的执行效率可能会优于普通函数，尤其是在大量使用闭包或高频调用的情况下。</li></ul></li></ol><h4 id="_3-总结与关键点" tabindex="-1">3. <strong>总结与关键点</strong> <a class="header-anchor" href="#_3-总结与关键点" aria-label="Permalink to &quot;3. **总结与关键点**&quot;">​</a></h4><ul><li><strong>没有原型、不能用 <code>new</code></strong>：箭头函数简化了函数定义和使用，适用于无状态的功能块。</li><li><strong>固定的 <code>this</code> 绑定</strong>：通过词法作用域捕获 <code>this</code>，箭头函数避免了普通函数中 <code>this</code> 绑定不确定的问题。</li><li><strong>没有 <code>arguments</code></strong>：利用 rest 参数代替 <code>arguments</code>，使得参数处理更加简洁。</li><li><strong>V8 实现细节</strong>：V8 对箭头函数的处理通过简化上下文绑定和优化执行路径，提升了性能和执行效率。</li></ul><h3 id="v8-引擎中箭头函数的核心源码解析" tabindex="-1"><strong>V8 引擎中箭头函数的核心源码解析</strong> <a class="header-anchor" href="#v8-引擎中箭头函数的核心源码解析" aria-label="Permalink to &quot;**V8 引擎中箭头函数的核心源码解析**&quot;">​</a></h3><h4 id="_1-创建箭头函数的内部机制" tabindex="-1">1. <strong>创建箭头函数的内部机制</strong> <a class="header-anchor" href="#_1-创建箭头函数的内部机制" aria-label="Permalink to &quot;1. **创建箭头函数的内部机制**&quot;">​</a></h4><p>在 V8 中，箭头函数的创建流程主要由以下几个模块协同完成：</p><ul><li><p><strong>Parser（解析器）</strong>：V8 的解析器负责将 JavaScript 源代码解析为抽象语法树（AST）。在解析过程中，箭头函数被识别为一种特殊类型的函数表达式，并最终被构造成 <code>FunctionLiteral</code> 对象。<code>FunctionLiteral</code> 是 V8 中用于表示函数的核心抽象。</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 伪代码：解析箭头函数</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">FunctionLiteral</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">*</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> Parser</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">ParseArrowFunction</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">() {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  ...</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  // 处理箭头函数的语法节点</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  Expression</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> body </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> ParseFunctionBody</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  </span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  // 构造函数字面量（FunctionLiteral）</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  FunctionLiteral</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> function_literal </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> factory</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">()-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">NewFunctionLiteral</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    scope,</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  // 当前作用域</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    body,</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">   // 函数体</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    ...,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    this_binding_,</span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  // 词法绑定的 this</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    ...</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  );</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  ...</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> function_literal;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p>在这段伪代码中，<code>Parser</code> 解析箭头函数的语法结构，并将其转化为 <code>FunctionLiteral</code>。在创建 <code>FunctionLiteral</code> 的过程中，箭头函数的 <code>this_binding_</code> 从外层作用域捕获并绑定。</p></li><li><p><strong>Closure（闭包）</strong>：箭头函数的一个显著特性是其 <code>this</code> 绑定。在 V8 中，箭头函数被创建为闭包，这意味着它们捕获并保存了创建时所在的词法作用域（包括 <code>this</code>、<code>arguments</code> 等）。</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 伪代码：词法作用域绑定 this</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> ArrowFunction</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">BindThis</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">FunctionLiteral</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;"> function_literal</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  // 在函数字面量中保存 this 绑定</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  function_literal-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">set_this_binding</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(this_binding_);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div></li></ul><h4 id="_2-词法作用域中的-this-绑定" tabindex="-1">2. <strong>词法作用域中的 <code>this</code> 绑定</strong> <a class="header-anchor" href="#_2-词法作用域中的-this-绑定" aria-label="Permalink to &quot;2. **词法作用域中的 `this` 绑定**&quot;">​</a></h4><p>在 V8 中，<code>this</code> 绑定是通过在创建 <code>FunctionLiteral</code> 时，将当前词法作用域的 <code>this</code> 引用传递并固定在箭头函数对象中。</p><ul><li><p><strong>ThisBinding</strong>：箭头函数在其创建时就捕获了定义时的 <code>this</code>，并在整个函数生命周期内保持不变。V8 通过 <code>this_binding_</code> 引用保存外层作用域的 <code>this</code>。</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 伪代码：绑定 this 到箭头函数</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">FunctionLiteral</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">*</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> Parser</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">CreateArrowFunction</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(...) {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  FunctionLiteral</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> function_literal </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> ...;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  function_literal-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">set_this_binding</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(this_binding_);</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> function_literal;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p>在此，<code>this_binding_</code> 是从当前词法作用域捕获的 <code>this</code>，并被嵌入到箭头函数的字节码中，使得 <code>this</code> 在执行时不会发生变化。</p></li></ul><h4 id="_3-字节码生成与优化" tabindex="-1">3. <strong>字节码生成与优化</strong> <a class="header-anchor" href="#_3-字节码生成与优化" aria-label="Permalink to &quot;3. **字节码生成与优化**&quot;">​</a></h4><p>在字节码生成阶段，V8 会针对箭头函数的特点进行优化，以提升运行效率。</p><ul><li><p><strong>Bytecode Generation（字节码生成）</strong>：V8 的字节码生成器会生成紧凑的字节码，直接引用词法作用域中捕获的变量（如 <code>this</code>），避免了常规函数所需的动态上下文处理。</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 伪代码：生成箭头函数的字节码</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">BytecodeArray</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">*</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> BytecodeGenerator</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">GenerateArrowFunction</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">FunctionLiteral</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;"> literal</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  ...</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  // 直接嵌入词法作用域的 this 引用</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">  EmitThisBinding</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(literal-&gt;this_binding_);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  ...</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> bytecode_array;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div></li><li><p><strong>Optimized Compilation（优化编译）</strong>：V8 的 JIT 编译器（如 TurboFan）在处理箭头函数时，可以更积极地进行内联优化和上下文减少操作，因为箭头函数的上下文在创建时已固定。</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 伪代码：TurboFan 优化箭头函数调用</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;"> TurboFanCompiler</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">OptimizeArrowFunction</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">CallInfo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;"> call_info</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">  // 基于固定的 this 上下文进行内联优化</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">  InlineFunction</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(call_info-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">callee</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">());</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">  ...</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p>这种优化使得箭头函数在高频调用场景下，能够大幅减少函数调用的开销，提升执行效率。</p></li></ul><h4 id="_4-执行时的性能表现" tabindex="-1">4. <strong>执行时的性能表现</strong> <a class="header-anchor" href="#_4-执行时的性能表现" aria-label="Permalink to &quot;4. **执行时的性能表现**&quot;">​</a></h4><p>因为箭头函数的 <code>this</code> 和上下文在创建时已经确定，V8 在执行这些函数时可以跳过许多上下文绑定操作，使得其在复杂闭包或高频调用中表现优异。</p><ul><li><p><strong>Inlining（内联优化）</strong>：V8 优化器能够更容易地将箭头函数内联到调用点，因为箭头函数没有动态上下文绑定的复杂性。</p></li><li><p><strong>减少的上下文切换</strong>：在箭头函数的执行过程中，由于 <code>this</code> 是静态绑定的，V8 可以跳过常规函数中常见的上下文切换操作，从而提高执行速度。</p></li></ul>', 22);
const _hoisted_23 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_23);
}
const _32________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _32________ as default
};
