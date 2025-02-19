import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, k as createBaseVNode, a as createTextVNode, R as createStaticVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"WebSQL","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/02-基础知识/08-浏览器/11-WebSQL.md","filePath":"src/study-notes/02-基础知识/08-浏览器/11-WebSQL.md","lastUpdated":1739501366000}');
const _sfc_main = { name: "src/study-notes/02-基础知识/08-浏览器/11-WebSQL.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "websql",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("em", null, "WebSQL"),
  /* @__PURE__ */ createTextVNode(),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#websql",
    "aria-label": 'Permalink to "*WebSQL*"'
  }, "​")
], -1);
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<p><em>WebSQL</em> 数据库 <em>API</em> 并不是 <em>HTML5</em> 规范的一部分，但是它是一个独立的规范，引入了一组使用 <em>SQL</em> 操作客户端数据库的 <em>APIs</em>。</p><p>如果你之前接触过诸如像 <em>MySQL</em> 这样的关系型数据库，学习过 <em>SQL</em> 语言，那么 <em>WebSQL</em> 对于你来讲没有任何的难度。</p><p>最新版的 <em>Safari, Chrome</em> 和 <em>Opera</em> 浏览器都支持 <em>WebSQL</em>。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-01-015120.png" alt="image-20211130142613099" style="zoom:50%;"><p>在 <em>WebSQL</em> 中，有 <em>3</em> 个核心方法：</p><ul><li><p><em>openDatabase</em>：这个方法使用现有的数据库或者新建的数据库创建一个数据库对象。</p></li><li><p><em>transaction</em>：这个方法让我们能够控制一个事务，以及基于这种情况执行提交或者回滚。</p></li><li><p><em>executeSql</em>：这个方法用于执行实际的 <em>SQL</em> 查询。</p></li></ul><h2 id="打开数据库" tabindex="-1">打开数据库 <a class="header-anchor" href="#打开数据库" aria-label="Permalink to &quot;打开数据库&quot;">​</a></h2><p>我们可以使用 <em>openDatabase( )</em> 方法来打开已存在的数据库，如果数据库不存在，则会创建一个新的数据库，使用代码如下：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> db </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> openDatabase</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;mydb&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;1.0&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;Test DB&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1024</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1024</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span></code></pre></div><p>在上面的代码中，我们尝试打开一个名为 <em>mydb</em> 的数据库，因为第一次不存在此数据库，所以会创建该数据库，版本号为 <em>1.0</em>，大小为 <em>2M</em>。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-01-015135.png" alt="image-20211130142639596" style="zoom:50%;"><p><em>openDatabase( )</em> 方法对应的 <em>5</em> 个参数：</p><ul><li><p>数据库名称</p></li><li><p>版本号</p></li><li><p>描述文本</p></li><li><p>数据库大小</p></li><li><p>创建回调</p></li></ul><p>第 <em>5</em> 个参数，创建回调会在创建数据库后被调用。</p><h2 id="执行操作" tabindex="-1">执行操作 <a class="header-anchor" href="#执行操作" aria-label="Permalink to &quot;执行操作&quot;">​</a></h2><p>执行操作使用 <em>database.transaction( )</em> 函数：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> db </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> openDatabase</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;mydb&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;1.0&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;Test DB&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1024</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1024</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">db.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">transaction</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">tx</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    tx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">executeSql</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;CREATE TABLE IF NOT EXISTS LOGS (id unique, log)&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">});</span></span></code></pre></div><p>上面的语句执行后会在 &#39;<em>mydb</em>&#39; 数据库中创建一个名为 <em>LOGS</em> 的表。</p><p>该表存在 <em>2</em> 个字段 <em>id</em> 和 <em>log</em>，其中 <em>id</em> 是唯一的。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-01-015142.png" alt="image-20211130142711069" style="zoom:50%;"><h2 id="插入数据" tabindex="-1">插入数据 <a class="header-anchor" href="#插入数据" aria-label="Permalink to &quot;插入数据&quot;">​</a></h2><p>在执行上面的创建表语句后，我们可以插入一些数据：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> db </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> openDatabase</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;mydb&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;1.0&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;Test DB&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1024</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1024</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">db.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">transaction</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">tx</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    tx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">executeSql</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;CREATE TABLE IF NOT EXISTS STU (id unique, name, age)&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    tx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">executeSql</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;INSERT INTO STU (id, name, age) VALUES (1, &quot;张三&quot;, 18)&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    tx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">executeSql</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;INSERT INTO STU (id, name, age) VALUES (2, &quot;李四&quot;, 20)&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">});</span></span></code></pre></div><p>在上面的代码中，我们创建了一张名为 <em>STU</em> 的表，该表存在 <em>3</em> 个字段 <em>id，name</em> 和 <em>age</em>。</p><p>之后我们往这张表中插入了 <em>2</em> 条数据。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-01-15151.png" alt="image-20211130142729393" style="zoom:67%;"><p>我们也可以使用动态值来插入数据：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> stuName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;谢杰&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> stuAge </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 18</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> db </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> openDatabase</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;mydb&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;1.0&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;Test DB&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1024</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1024</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">db.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">transaction</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">tx</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    tx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">executeSql</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;CREATE TABLE IF NOT EXISTS STU (id unique, name, age)&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    // tx.executeSql(&#39;INSERT INTO STU (id, name, age) VALUES (1, &quot;张三&quot;, 18)&#39;);</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">    // tx.executeSql(&#39;INSERT INTO STU (id, name, age) VALUES (2, &quot;李四&quot;, 20)&#39;);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    tx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">executeSql</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;INSERT INTO STU (id, name, age) VALUES (3, ?, ?)&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, [stuName, stuAge]);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">});</span></span></code></pre></div><p>在上面的代码中，我们使用动态值的方式插入了一条数据，实例中的 <em>stuName</em> 和 <em>stuAge</em> 是外部变量，<em>executeSql</em> 会映射数组参数中的每个条目给 &quot;?&quot;。</p><blockquote><p>注意：由于上一次操作已经插入了 <em>id</em> 为 <em>1</em> 和 <em>2</em> 的数据，所以这一次插入内容时，要将前面两次插入语句注释调，否则插入操作不会成功。因为这里是一个事务，前面失败了会导致后面也失败。</p></blockquote><h2 id="读取数据" tabindex="-1">读取数据 <a class="header-anchor" href="#读取数据" aria-label="Permalink to &quot;读取数据&quot;">​</a></h2><p>以下实例演示了如何读取数据库中已经存在的数据：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;status&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> stuName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;谢杰&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> stuAge </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 18</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 打开数据库</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> db </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;"> openDatabase</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;mydb&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;1.0&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;Test DB&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1024</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 1024</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 插入数据</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">db.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">transaction</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">tx</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    tx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">executeSql</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;CREATE TABLE IF NOT EXISTS STU (id unique, name, age)&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    tx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">executeSql</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;INSERT INTO STU (id, name, age) VALUES (1, &quot;张三&quot;, 18)&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    tx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">executeSql</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;INSERT INTO STU (id, name, age) VALUES (2, &quot;李四&quot;, 20)&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    tx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">executeSql</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;INSERT INTO STU (id, name, age) VALUES (3, ?, ?)&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, [stuName, stuAge]);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">});</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    </span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 读取操作</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">db.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">transaction</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">tx</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    tx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">executeSql</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;SELECT * FROM STU&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, [], </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">tx</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">results</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        var</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> len </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> results.rows.</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, i;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        msg </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;&lt;p&gt;查询记录条数: &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> len </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;&lt;/p&gt;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;#status&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">).innerHTML </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> msg;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">        for</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> len; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            msg </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;&lt;p&gt;&lt;b&gt;&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> results.rows.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">item</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(i).name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;:&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> results.rows.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">item</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(i).age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> &quot;&lt;/b&gt;&lt;/p&gt;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;#status&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">).innerHTML </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">+=</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> msg;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        }</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    }, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">});</span></span></code></pre></div><p>在上面的代码中，第二个部分是读取数据的操作。这里我们仍然是使用的 <em>executeSql( )</em> 方法来执行的 <em>SQL</em> 命令，但是用法又不一样了。是时候来看一下完整的 <em>executeSql( )</em> 方法是什么样了。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">executeSql</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(sqlStatement, </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">arguments</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, callback, errorCallback)</span></span></code></pre></div><p>该方法完整的语法实际上是接收 <em>4</em> 个参数，分别是：</p><ul><li><em>SQL</em> 语句</li><li>参数</li><li>执行 <em>SQL</em> 语句后的回调</li><li>错误回调</li></ul><p>因此在上面的示例中，我们 <em>executeSql( )</em> 的第三个参数就是执行了 <em>SQL</em> 语句后的回调。我们在回调中可以通过 <em>results.rows</em> 拿到该表中的数据，之后对数据进行业务需求的操作即可。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-01-015159.png" alt="image-20211130142755739" style="zoom:50%;"><h2 id="删除数据" tabindex="-1">删除数据 <a class="header-anchor" href="#删除数据" aria-label="Permalink to &quot;删除数据&quot;">​</a></h2><p>删除数据也是使用 <em>SQL</em> 中的语法，同样也支持动态指定的方式。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> stuID </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 删除操作</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">db.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">transaction</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">tx</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    tx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">executeSql</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;DELETE FROM STU  WHERE id=1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    tx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">executeSql</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;DELETE FROM STU WHERE id=?&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, [stuID]);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">});</span></span></code></pre></div><p>在上面的代码中，我们删除了 <em>id</em> 为 <em>1</em> 和 <em>2</em> 的两条数据，其中第二条是动态指定的。</p><h2 id="修改数据" tabindex="-1">修改数据 <a class="header-anchor" href="#修改数据" aria-label="Permalink to &quot;修改数据&quot;">​</a></h2><p>要修改数据也是使用 <em>SQL</em> 中的语法，同样也支持动态指定的方式。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> stuID </span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">;</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 更新操作</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">db.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">transaction</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#F69D50;">tx</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">) {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    tx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">executeSql</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;UPDATE STU SET name=</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;">\\&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">王羲之</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;">\\&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> WHERE id=3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    tx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCBDFB;">executeSql</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;UPDATE STU SET age=21 WHERE id=?&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, [stuID]);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">});</span></span></code></pre></div><p>在上面的代码中，我们修改了 <em>id</em> 为 <em>3</em> 的学生，名字修改为“王羲之”，年龄修改为 <em>21</em>。</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>目前来看，<em>WebSQL</em> 已经不再是 <em>W3C</em> 推荐规范，官方也已经不再维护了。原因说的很清楚，当前的 <em>SQL</em> 规范采用 <em>SQLite</em> 的 <em>SQL</em> 方言，而作为一个标准，这是不可接受的。</p><p>另外，<em>WebSQL</em> 使用 <em>SQL</em> 语言来进行操作，更像是一个关系型数据库，而 <em>IndexedDB</em> 则更像是一个 <em>NoSQL</em> 数据库， 这也是目前 <em>W3C</em> 强推的浏览端数据库解决方案。</p><p>所以本文不再对 <em>WebSQL</em> 做过多的介绍。</p><p>如果有兴趣的同学，可以参阅下面的资料进行扩展阅读：</p><ul><li><em>View Web SQL data</em>：*<a href="https://developer.chrome.com/docs/devtools/storage/websql/?utm_source=devtools#run*%EF%BC%88%E9%9C%80%E8%A6%81%E6%90%AD%E6%A2%AF%E5%AD%90%EF%BC%89" target="_blank" rel="noreferrer">https://developer.chrome.com/docs/devtools/storage/websql/?utm_source=devtools#run*（需要搭梯子）</a></li><li><em>CSDN WebSQL</em> 最全详解：<em><a href="https://blog.csdn.net/weixin_45389633/article/details/107308968" target="_blank" rel="noreferrer">https://blog.csdn.net/weixin_45389633/article/details/107308968</a></em></li></ul><hr><p>-<em>EOF</em>-</p>', 56);
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
const _11WebSQL = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _11WebSQL as default
};
