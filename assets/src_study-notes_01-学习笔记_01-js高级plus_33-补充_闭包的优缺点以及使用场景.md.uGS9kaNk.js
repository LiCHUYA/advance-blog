import { _ as _export_sfc, o as openBlock, c as createElementBlock, R as createStaticVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/01-学习笔记/01-js高级plus/33-补充_闭包的优缺点以及使用场景.md","filePath":"src/study-notes/01-学习笔记/01-js高级plus/33-补充_闭包的优缺点以及使用场景.md","lastUpdated":1739460242000}');
const _sfc_main = { name: "src/study-notes/01-学习笔记/01-js高级plus/33-补充_闭包的优缺点以及使用场景.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<ul><li><h3 id="闭包的详细讲解-使用场景、优点和缺点" tabindex="-1">闭包的详细讲解：使用场景、优点和缺点 <a class="header-anchor" href="#闭包的详细讲解-使用场景、优点和缺点" aria-label="Permalink to &quot;闭包的详细讲解：使用场景、优点和缺点&quot;">​</a></h3><p><strong>闭包</strong>是JavaScript中重要且常用的编程概念，它允许函数访问其外部作用域的变量，即使在外部函数执行完毕后，这使得闭包成为编写灵活、强大代码的基础。以下是对闭包的详细讲解，包括其使用场景、优点以及缺点。</p><h3 id="闭包的使用场景" tabindex="-1">闭包的使用场景 <a class="header-anchor" href="#闭包的使用场景" aria-label="Permalink to &quot;闭包的使用场景&quot;">​</a></h3><h4 id="_1-数据隐藏与封装" tabindex="-1">1. <strong>数据隐藏与封装</strong> <a class="header-anchor" href="#_1-数据隐藏与封装" aria-label="Permalink to &quot;1. **数据隐藏与封装**&quot;">​</a></h4><p>在JavaScript中，变量默认是作用域范围内的，外部代码可以访问这些变量。而闭包提供了一种机制，允许我们将变量私有化，只能通过特定的方法访问。这种封装性使得闭包成为实现数据隐藏的强大工具。</p><p><strong>例子：</strong></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> createCounter</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">() {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> count </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 私有变量，只能通过闭包访问</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">        increment</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">() {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            count</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">            return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> count;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        },</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">        decrement</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">() {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            count</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">            return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> count;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        },</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">        getCount</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">() {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">            return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> count;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    };</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> counter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> createCounter</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(counter.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">increment</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">()); </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 输出: 1</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(counter.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">getCount</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">());  </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 输出: 1</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(counter.count);       </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 输出: undefined （不能直接访问count）</span></span></code></pre></div><p><strong>使用场景</strong>：这种数据隐藏的方式常用于创建类或模块，保护内部数据不被外部直接访问，防止外部代码意外修改或访问数据。</p><h4 id="_2-回调函数和异步编程" tabindex="-1">2. <strong>回调函数和异步编程</strong> <a class="header-anchor" href="#_2-回调函数和异步编程" aria-label="Permalink to &quot;2. **回调函数和异步编程**&quot;">​</a></h4><p>在异步编程中，常常需要在某些操作完成后执行回调函数。这时，闭包可以帮助你在回调函数执行时访问外部函数中的变量，即使这些外部函数已经执行完毕。这对于事件处理、定时器和Ajax请求特别有用。</p><p><strong>例子：</strong></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> delayedGreeting</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">    setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">() {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Hello, &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">delayedGreeting</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Alice&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 1秒后输出: Hello, Alice!</span></span></code></pre></div><p><strong>使用场景</strong>：闭包在异步任务（如事件处理、定时器、网络请求）中，能够保持对创建时上下文的访问，确保在操作完成后，变量仍然有效。</p><h4 id="_3-函数工厂" tabindex="-1">3. <strong>函数工厂</strong> <a class="header-anchor" href="#_3-函数工厂" aria-label="Permalink to &quot;3. **函数工厂**&quot;">​</a></h4><p>闭包可以用来生成具有特定行为的函数工厂，通过传递不同的参数，闭包可以创建多个功能类似但行为不同的函数。</p><p><strong>例子：</strong></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> createMultiplier</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">factor</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">number</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> number </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> factor;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    };</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> double</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> createMultiplier</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> triple</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> createMultiplier</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">double</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)); </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 输出: 10</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">triple</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">)); </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 输出: 15</span></span></code></pre></div><p><strong>使用场景</strong>：这种场景常用于需要创建多个具有相似逻辑的函数时，能够通过闭包来简化代码结构，提高复用性。</p><h4 id="_4-保持状态-惰性求值" tabindex="-1">4. <strong>保持状态（惰性求值）</strong> <a class="header-anchor" href="#_4-保持状态-惰性求值" aria-label="Permalink to &quot;4. **保持状态（惰性求值）**&quot;">​</a></h4><p>在某些情况下，我们希望函数可以在执行的过程中保持某种状态，而不是每次调用时都重新计算。这时，闭包可以帮助我们在函数之间共享状态或保持状态信息。</p><p><strong>例子：</strong></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> createLogger</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">() {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> messages </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [];</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">    return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">message</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        messages.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(message);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Logged: &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> message);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;All messages: &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, messages);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    };</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> logger</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> createLogger</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">();</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">logger</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;First message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 输出: Logged: First message</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">logger</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Second message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 输出: Logged: Second message</span></span></code></pre></div><p><strong>使用场景</strong>：这种模式在需要保持数据的累积状态时特别有用，比如日志记录、计数器或流式数据处理。</p><h4 id="_5-循环中的变量捕获" tabindex="-1">5. <strong>循环中的变量捕获</strong> <a class="header-anchor" href="#_5-循环中的变量捕获" aria-label="Permalink to &quot;5. **循环中的变量捕获**&quot;">​</a></h4><p>在循环中定义异步操作时，闭包可以捕获并存储循环变量的当前值，避免异步操作中变量值的不一致问题。</p><p><strong>例子：</strong></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&lt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">j</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">        setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">() {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(j);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        }, j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1000</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    })(i);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 输出: 1, 2, 3 （每秒输出一个）</span></span></code></pre></div><p><strong>使用场景</strong>：当在循环中使用异步任务（如定时器、事件处理）时，闭包能够确保每个异步任务引用正确的变量值。</p><h3 id="闭包的优点" tabindex="-1">闭包的优点 <a class="header-anchor" href="#闭包的优点" aria-label="Permalink to &quot;闭包的优点&quot;">​</a></h3><h4 id="_1-数据保护" tabindex="-1">1. <strong>数据保护</strong> <a class="header-anchor" href="#_1-数据保护" aria-label="Permalink to &quot;1. **数据保护**&quot;">​</a></h4><p>闭包通过将变量限制在局部作用域内，实现数据保护和封装。这避免了外部代码直接访问或修改内部变量，从而确保数据的完整性和安全性。</p><p><strong>优点</strong>：这种数据保护机制非常适合用于模块设计，确保模块内部的状态不会被外部意外修改。</p><h4 id="_2-状态持久性" tabindex="-1">2. <strong>状态持久性</strong> <a class="header-anchor" href="#_2-状态持久性" aria-label="Permalink to &quot;2. **状态持久性**&quot;">​</a></h4><p>闭包允许函数在外部作用域执行完毕后，仍然保持对其内部变量的访问，从而实现状态的持久性。这种特性特别适用于需要在多个函数调用间共享状态的场景。</p><p><strong>优点</strong>：这种持久性使得闭包在实现计数器、惰性求值等场景时非常有效。</p><h4 id="_3-代码模块化" tabindex="-1">3. <strong>代码模块化</strong> <a class="header-anchor" href="#_3-代码模块化" aria-label="Permalink to &quot;3. **代码模块化**&quot;">​</a></h4><p>闭包有助于将代码逻辑模块化，通过封装独立的功能单元，可以减少全局作用域的污染，提升代码的可维护性和可读性。</p><p><strong>优点</strong>：代码模块化可以使得程序更加灵活，易于扩展和调试，特别是在大型项目中。</p><h4 id="_4-灵活性" tabindex="-1">4. <strong>灵活性</strong> <a class="header-anchor" href="#_4-灵活性" aria-label="Permalink to &quot;4. **灵活性**&quot;">​</a></h4><p>闭包提供了极大的灵活性，可以创建带有私有变量的函数工厂和多层嵌套函数，实现复杂的功能结构。它使得JavaScript代码在功能上更加丰富。</p><p><strong>优点</strong>：这种灵活性允许开发者根据需要定义和保持变量，使得代码更具有弹性和适应性。</p><h3 id="闭包的缺点" tabindex="-1">闭包的缺点 <a class="header-anchor" href="#闭包的缺点" aria-label="Permalink to &quot;闭包的缺点&quot;">​</a></h3><h4 id="_1-内存泄漏风险" tabindex="-1">1. <strong>内存泄漏风险</strong> <a class="header-anchor" href="#_1-内存泄漏风险" aria-label="Permalink to &quot;1. **内存泄漏风险**&quot;">​</a></h4><p>由于闭包会持有对外部作用域变量的引用，可能导致这些变量无法被垃圾回收，造成内存泄漏，特别是在创建大量闭包或者闭包嵌套层次较深时。</p><p><strong>缺点</strong>：在性能敏感的场景下，闭包的滥用可能导致内存占用增加，影响程序运行效率。</p><h4 id="_2-调试复杂性" tabindex="-1">2. <strong>调试复杂性</strong> <a class="header-anchor" href="#_2-调试复杂性" aria-label="Permalink to &quot;2. **调试复杂性**&quot;">​</a></h4><p>闭包使得函数的执行上下文变得复杂，特别是在嵌套多层闭包时，调试和跟踪变量变得更加困难。这可能增加代码的维护成本。</p><p><strong>缺点</strong>：开发者在调试和理解闭包行为时，可能需要额外的时间和精力，特别是对于新手来说，闭包容易造成混淆。</p><h4 id="_3-性能开销" tabindex="-1">3. <strong>性能开销</strong> <a class="header-anchor" href="#_3-性能开销" aria-label="Permalink to &quot;3. **性能开销**&quot;">​</a></h4><p>闭包带来了一定的性能开销，特别是在频繁创建和销毁闭包的情况下。这种开销来自于闭包保持外部作用域变量的引用，导致更多的内存使用和管理成本。</p><p><strong>缺点</strong>：在性能要求较高的场景中，频繁使用闭包可能导致程序响应变慢。</p><h4 id="_4-误用风险" tabindex="-1">4. <strong>误用风险</strong> <a class="header-anchor" href="#_4-误用风险" aria-label="Permalink to &quot;4. **误用风险**&quot;">​</a></h4><p>闭包的灵活性虽然是其优点，但也容易导致误用。如果开发者对闭包理解不够深入，可能会编写出难以维护的代码，导致程序中出现难以追踪的错误。</p><p><strong>缺点</strong>：错误使用闭包可能导致程序行为异常，降低代码的可读性和可靠性。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>闭包是JavaScript中的一个重要特性，具有广泛的应用场景，如数据隐藏、状态保持、函数工厂、异步编程和循环变量捕获等。闭包的优点包括数据保护、状态持久性、代码模块化和灵活性，但也有内存泄漏、调试复杂性、性能开销和误用风险等缺点。因此，在使用闭包时，必须权衡其带来的好处与潜在的成本，并根据具体情况合理应用闭包。</p></li></ul>', 1);
const _hoisted_2 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_2);
}
const _33________________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _33________________ as default
};
