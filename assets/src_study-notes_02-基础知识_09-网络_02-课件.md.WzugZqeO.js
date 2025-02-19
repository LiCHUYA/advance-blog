import { _ as __unplugin_components_4 } from "./chunks/ArticleMetadata.l7JwFtuX.js";
import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, I as createVNode, w as withCtx, k as createBaseVNode, a as createTextVNode, R as createStaticVNode, b as createBlock, e as createCommentVNode } from "./chunks/framework.b55ravPP.js";
const __pageData = JSON.parse('{"title":"缓存的基本原理","description":"","frontmatter":{},"headers":[],"relativePath":"src/study-notes/02-基础知识/09-网络/02-课件.md","filePath":"src/study-notes/02-基础知识/09-网络/02-课件.md","lastUpdated":1739501366000}');
const _sfc_main = { name: "src/study-notes/02-基础知识/09-网络/02-课件.md" };
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "缓存的基本原理",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("缓存的基本原理 "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#缓存的基本原理",
    "aria-label": 'Permalink to "缓存的基本原理"'
  }, "​")
], -1);
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<p>在一个C/S结构中，最基本的缓存分为两种：</p><ul><li>客户端缓存</li><li>服务器缓存</li></ul><p><strong>本文仅讨论客户端缓存</strong></p><p>所谓<strong>客户端缓存</strong>，顾名思义，是将某一次的响应结果保存在客户端（比如浏览器）中，而后续的请求仅需要从缓存中读取即可，极大的降低了服务器的处理压力。</p><p>客户端缓存的原理如下：</p><p><img src="http://mdrs.yuanjin.tech/img/image-20200430202446870.png" alt="image-20200430202446870"></p><blockquote><p>这只是一个简易的原理图，实际情况可能有差异</p></blockquote><p>这里就设计到一个缓存策略的问题，这些问题包括：</p><ul><li>哪些资源需要加入到缓存，哪些不需要？</li><li>缓存的时间是多久呢？</li><li>如果服务器的资源有改动，客户端如何更新缓存呢？</li><li>如果缓存过期了，可是服务器上的资源并没有发生变动，又该如何处理呢？</li><li>.......</li></ul><p>要回答这些问题，就必须要清楚<code>http</code>中关于缓存的协议</p><p>理解了http的缓存协议，自然就能回答上面的问题了。</p><h1 id="来自服务器的缓存指令" tabindex="-1">来自服务器的缓存指令 <a class="header-anchor" href="#来自服务器的缓存指令" aria-label="Permalink to &quot;来自服务器的缓存指令&quot;">​</a></h1>', 12);
const _hoisted_14 = /* @__PURE__ */ createStaticVNode('<p>当客户端发出一个<code>get</code>请求到服务器，服务器可能有以下的内心活动：「你请求的这个资源，我很少会改动它，干脆你把它缓存起来吧，以后就不要来烦我了」</p><p>为了表达这个美好的愿望，服务器在<strong>响应头</strong>中加入了以下内容：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span>Cache-Control: max-age=3600</span></span>\n<span class="line"><span>ETag: W/&quot;121-171ca289ebf&quot;</span></span>\n<span class="line"><span>Date: Thu, 30 Apr 2020 12:39:56 GMT</span></span>\n<span class="line"><span>Last-Modified: Thu, 30 Apr 2020 08:16:31 GMT</span></span></code></pre></div><p>这个响应头表达了下面的信息：</p><ul><li><code>Cache-Control: max-age=3600</code>，我希望你把这个资源缓存起来，缓存时间是3600秒（1小时）</li><li><code>ETag: W/&quot;121-171ca289ebf&quot;</code>，这个资源的编号是<code>W/&quot;121-171ca289ebf&quot;</code></li><li><code>Date: Thu, 30 Apr 2020 12:39:56 GMT</code>，我给你响应这个资源的服务器时间是格林威治时间<code>2020-04-30 12:39:56</code></li><li><code>Last-Modified: Thu, 30 Apr 2020 08:16:31 GMT</code>，这个资源的上一次修改时间是格林威治时间<code>2020-04-30 08:16:31</code></li></ul><p>这个美好的缓存愿望，就这样通过响应头传递给客户端了</p><p>如果客户端是其他应用程序，可能并不会理会服务器的愿望，也就是说，可能根本不会缓存任何东西。</p><p>但是凑巧客户端是一个浏览器，它和服务器一直以来都是相亲相爱的小伙伴，当它看到服务器的这个响应头表达的美好愿望后，立即忙起来：</p><ul><li>浏览器把这次请求得到的响应体缓存到本地文件中</li><li>浏览器标记这次请求的请求方法和请求路径</li><li>浏览器标记这次缓存的时间是3600秒</li><li>浏览器记录服务器的响应时间是格林威治时间<code>2020-04-30 12:39:56</code></li><li>浏览器记录服务器给予的资源编号<code>W/&quot;121-171ca289ebf&quot;</code></li><li>浏览器记录资源的上一次修改时间是格林威治时间<code>2020-04-30 08:16:31</code></li></ul><p>这一次的记录非常重要，它为以后浏览器要不要去请求服务器提供了各种依据。</p><p><img src="http://mdrs.yuanjin.tech/img/image-20200430210430455.png" alt="image-20200430210430455"></p><h1 id="来自客户端的缓存指令" tabindex="-1">来自客户端的缓存指令 <a class="header-anchor" href="#来自客户端的缓存指令" aria-label="Permalink to &quot;来自客户端的缓存指令&quot;">​</a></h1>', 12);
const _hoisted_26 = /* @__PURE__ */ createStaticVNode('<p>当客户端收拾好行李，准备再次请求<code>GET /index.js</code>时，它突然想起了一件事：我需要的东西在不在缓存里呢？</p><p>此时，客户端会到缓存中去寻找是否有缓存的资源</p><p>寻找的过程如下：</p><ol><li>缓存中是否有匹配的请求方法和路径？</li><li>如果有，该缓存资源是否还有效呢？</li></ol><p>以上两个验证会导致浏览器产生不同的行为</p><p><img src="http://mdrs.yuanjin.tech/img/image-20200430212052228.png" alt="image-20200430212052228"><img src="http://mdrs.yuanjin.tech/img/image-20200430214301507.png" alt="image-20200430214301507"></p><p>要验证是否有匹配的缓存非常简单，只需要验证当前的请求方法<code>GET</code>和当前的请求路径<code>/index.js</code>是否有对应的缓存存在即可</p><p>如果没有，就直接请求服务器，就和第一次请求服务器时一样，这种情况没有什么好讨论的</p><p>关键在于验证缓存是否有效</p><p>如何验证呢？</p><p>非常简单，就是把<code>max-age + Date</code>，得到一个过期时间，看看这个过期时间是否大于当前时间，如果是，则表示缓存还没有过期，仍然有效，如果不是，则表示缓存失效。</p><h2 id="缓存有效" tabindex="-1">缓存有效 <a class="header-anchor" href="#缓存有效" aria-label="Permalink to &quot;缓存有效&quot;">​</a></h2><p>当浏览器发现缓存有效时，完全不会请求服务器，直接使用缓存即可得到结果</p><p>此时，如果你断开网络，会发现资源仍然可用</p><p>这种情况会极大的降低服务器压力，但当服务器更改了资源后，浏览器是不知道的，只要缓存有效，它就会直接使用缓存</p><h2 id="缓存无效" tabindex="-1">缓存无效 <a class="header-anchor" href="#缓存无效" aria-label="Permalink to &quot;缓存无效&quot;">​</a></h2><p>当浏览器发现缓存已经过期，它<strong>并不会简单的把缓存删除</strong>，而是抱着一丝希望，想问问服务器，我<strong>这个缓存还能继续使用吗</strong>？</p><p>于是，浏览器向服务器发出了一个<strong>带缓存的请求</strong>，又称之为<strong>协商缓存</strong></p><p>所谓带缓存的请求，无非就是加入了以下的请求头：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span>If-Modified-Since: Thu, 30 Apr 2020 08:16:31 GMT</span></span>\n<span class="line"><span>If-None-Match: W/&quot;121-171ca289ebf&quot;</span></span></code></pre></div><p>它们表达了下面的信息：</p><ul><li><code>If-Modified-Since: Thu, 30 Apr 2020 08:16:31 GMT</code>，亲，你曾经告诉我，这个资源的上一次修改时间是格林威治时间<code>2020-04-30 08:16:31</code>，请问这个资源在这个时间之后有发生变动吗？</li><li><code>If-None-Match: W/&quot;121-171ca289ebf&quot;</code>，亲，你曾经告诉我，这个资源的编号是<code>W/&quot;121-171ca289ebf</code>，请问这个资源的编号发生变动了吗？</li></ul><p>其实，这两个问题可以合并为一个问题：快说！资源到底变了没有！</p><p>之所以要发两个信息，是为了兼容不同的服务器，因为有些服务器只认<code>If-Modified-Since</code>，有些服务器只认<code>If-None-Match</code>，有些服务器两个都认</p><blockquote><p>目前的很多服务器，只要发现<code>If-None-Match</code>存在，就不会去看``If-Modified-Since`</p><p><code>If-Modified-Since</code>是<code>http1.0</code>版本的规范，<code>If-None-Match</code>是<code>http1.1</code>的规范</p></blockquote><p>此时，问题又抛给了服务器，接下来，就是服务器的表演时间了</p><p>服务器可能会产生两个情况：</p><ul><li>缓存已经失效</li><li>缓存仍然有效</li></ul><p>如果是第一种情况——<strong>缓存已经失效</strong>，那么非常简单，服务器再次给予一个正常的响应（响应码<code>200</code> 带响应体），同时可以附带上新的缓存指令，这就回到了上一节——来自服务器的缓存指令</p><p>这样一来，客户端就会重新缓存新的内容</p><p>但如果服务器觉得<strong>缓存仍然有效</strong>，它可以通过一种极其简单的方式告诉客户端：</p><ul><li>响应码为<code>304 Not Modified</code></li><li>无响应体</li><li>响应头带上新的缓存指令，见上一节——来自服务器的缓存指令</li></ul><p>这样一来，就相当于告诉客户端：「你的缓存资源仍然可用，我给你一个新的缓存时间，你那边更新一下就可以了」</p><p>于是，客户端就继续happy的使用缓存了</p><p>这样一来，可以最大程度的减少网络传输，因为如果资源还有效，服务器就不会传输消息体</p><p>它们完整的交互过程如下：</p><p><img src="http://mdrs.yuanjin.tech/img/image-20200430225326001.png" alt="image-20200430225326001"></p><h1 id="细节" tabindex="-1">细节 <a class="header-anchor" href="#细节" aria-label="Permalink to &quot;细节&quot;">​</a></h1>', 38);
const _hoisted_64 = /* @__PURE__ */ createStaticVNode('<p>上面描述了客户端缓存的基本概念和过程</p><p>但其中仍然有不少细节值得我们注意</p><h2 id="cache-control" tabindex="-1">Cache-Control <a class="header-anchor" href="#cache-control" aria-label="Permalink to &quot;Cache-Control&quot;">​</a></h2><p>在上述的讲解中，<code>Cache-Control</code>是服务器向客户端响应的一个消息头，它提供了一个<code>max-age</code>用于指定缓存时间。</p><p>实际上，<code>Cache-Control</code>还可以设置下面一个或多个值：</p><ul><li><code>public</code>：指示服务器资源是公开的。比如有一个页面资源，所有人看到的都是一样的。这个值对于浏览器而言没有什么意义，但可能在某些场景可能有用。本着「我告知，你随意」的原则，<code>http</code>协议中很多时候都是客户端或服务器告诉另一端详细的信息，至于另一端用不用，完全看它自己。</li><li><code>private</code>：指示服务器资源是私有的。比如有一个页面资源，每个用户看到的都不一样。这个值对于浏览器而言没有什么意义，但可能在某些场景可能有用。本着「我告知，你随意」的原则，<code>http</code>协议中很多时候都是客户端或服务器告诉另一端详细的信息，至于另一端用不用，完全看它自己。</li><li><code>no-cache</code>：告知客户端，你可以缓存这个资源，但是不要<strong>直接</strong>使用它。当你缓存之后，后续的每一次请求都需要附带缓存指令，让服务器告诉你这个资源有没有过期。见：「来自客户端的缓存指令 - 缓存无效」</li><li><code>no-store</code>：告知客户端，不要对这个资源做任何的缓存，之后的每一次请求都按照正常的普通请求进行。若设置了这个值，浏览器将不会对该资源做出任何的缓存处理。</li><li><code>max-age</code>：不再赘述</li></ul><p>比如，<code>Cache-Control: public, max-age=3600</code>表示这是一个公开资源，请缓存1个小时。</p><h2 id="expires" tabindex="-1">Expires <a class="header-anchor" href="#expires" aria-label="Permalink to &quot;Expires&quot;">​</a></h2><p>在<code>http1.0</code>版本中，是通过<code>Expires</code>响应头来指定过期时间点的，例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span>Expires: Thu, 30 Apr 2020 23:38:38 GMT</span></span></code></pre></div><p>到了<code>http1.1</code>版本，已更改为通过<code>Cache-Control</code>的<code>max-age</code>来记录了。</p><h2 id="记录缓存时的有效期" tabindex="-1">记录缓存时的有效期 <a class="header-anchor" href="#记录缓存时的有效期" aria-label="Permalink to &quot;记录缓存时的有效期&quot;">​</a></h2><p>浏览器会按照服务器响应头的要求，自动记录缓存到本地文件，并设置各种相关信息</p><p>在这些信息中，<strong>有效期</strong>尤为关键，它决定了这个缓存可以使用多久</p><p>浏览器会根据服务器不同的响应情况，设置不同的有效期</p><p>具体的有效期设置，按照下面的流程进行：</p><p><img src="http://mdrs.yuanjin.tech/img/image-20200501075337464.png" alt="image-20200501075337464"></p><p>例如，当<code>max-age</code>设置为0时，缓存立即过期</p><p>虽然立即过期，但缓存仍然被记录下来，后续的请求通过缓存指令发送到服务器，来确认资源是否被更改。</p><p>因此，<code>Cache-Control: max-age=0</code>类似于<code>Cache-Control: no-cache</code></p><h2 id="pragma" tabindex="-1">Pragma <a class="header-anchor" href="#pragma" aria-label="Permalink to &quot;Pragma&quot;">​</a></h2><p>这是<code>http1.0</code>版本的消息头</p><p>当该消息头出现在请求中时，是向服务器表达：不要考虑任何缓存，给我一个正常的结果。</p><p>在<code>http1.1</code>版本中，可以在<strong>请求头</strong>中加入<code>Cache-Control: no-cache</code>实现同样的含义。</p><blockquote><p>是的，<code>Cache-Control</code>可以出现在请求头中</p></blockquote><p>在<code>Chrome</code>浏览器中调试时，如果勾选了<code>Disable cache</code>，则发送的请求中会附带该信息</p><p><img src="http://mdrs.yuanjin.tech/img/image-20200501080330131.png" alt="image-20200501080330131"></p><h2 id="vary" tabindex="-1">Vary <a class="header-anchor" href="#vary" aria-label="Permalink to &quot;Vary&quot;">​</a></h2><p>有的时候，是否有缓存，不仅仅是判断请求方法和请求路径是否匹配，可能还要判断头部信息是否匹配。</p><p>此时，就可以使用<code>Vary</code>字段来指定要区分的消息头</p><p>比如，当使用<code>GET /personal.html</code>请求服务器时，请求头中<code>cookie</code>的值不一样，得到的页面也不一样</p><p>如果还按照之前的做法，仅仅匹配请求方法和请求路径，如果<code>cookie</code>变动，你可能得到的仍然是之前的页面。</p><p>正确的做法如下：</p><p><img src="http://mdrs.yuanjin.tech/img/image-20200501082103089.png" alt="image-20200501082103089"></p><h2 id="使用版本号或hash" tabindex="-1">使用版本号或hash <a class="header-anchor" href="#使用版本号或hash" aria-label="Permalink to &quot;使用版本号或hash&quot;">​</a></h2><p>如果你是一个前端工程师，使用过<code>vue</code>或其他基于<code>webpack</code>搭建的工程</p><p>你会发现打包的结果中很多文件名类似于这样：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span>app.68297cd8.css</span></span></code></pre></div><p>文件的中间部分使用了<code>hash</code>值</p><p>这样做的好处是，可以让客户端大胆的、长时间的缓存该文件，减轻服务器的压力</p><p>当文件改动后，它的文件<code>hash</code>值也会随之而变，比如变成了<code>app.446fccb8.css</code></p><p>这样一来，客户端要请求新的文件时，就会发现路径从<code>/app.68297cd8.css</code>变成了<code>app.446fccb8.css</code>，由于之前的缓存路径无法匹配到，因此就会发送新的请求来获取新资源了。</p><p>以上是现代流行的做法。</p><p>而在古老的年代，还没有构建工具出现时，人们使用的办法是在资源路径后面加入版本号来获取新版本的文件</p><p>比如，页面中引入了一个css资源<code>app.css</code>，它可能的引入方式是：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;/app.css?v=1.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span></code></pre></div><p>这样一来，缓存的路径是<code>/app.css?v=1.0.0</code></p><p>当服务器的版本发生变化时，可以给予新的版本号，让html中的路径发生变动</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#6CB6FF;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;/app.css?v=1.0.1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">&gt;</span></span></code></pre></div><p>由于新的路径无法命中缓存，于是浏览器就会发送新的普通请求来获取这个资源</p><h1 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h1>', 51);
const _hoisted_115 = /* @__PURE__ */ createStaticVNode('<p>最后，通过客户端和服务器两位大佬的视角，来总结一下以上内容</p><h2 id="服务器视角" tabindex="-1">服务器视角 <a class="header-anchor" href="#服务器视角" aria-label="Permalink to &quot;服务器视角&quot;">​</a></h2><p>服务器无法知道客户端到底有没有像浏览器那样缓存文件，它只管根据请求的情况来决定如何响应</p><p><img src="http://mdrs.yuanjin.tech/img/image-20200501083702987.png" alt="image-20200501083702987"></p><p>很多后端语言搭建的服务器都会自带自己的默认缓存规则，当然也支持不同程度的修改</p><h2 id="浏览器视角" tabindex="-1">浏览器视角 <a class="header-anchor" href="#浏览器视角" aria-label="Permalink to &quot;浏览器视角&quot;">​</a></h2><p>浏览器在发出请求时会判断要不要使用缓存</p><p><img src="http://mdrs.yuanjin.tech/img/image-20200501084258712.png" alt="image-20200501084258712"></p><p>当收到服务器响应时，会自动根据缓存指令进行处理</p><p><img src="http://mdrs.yuanjin.tech/img/image-20200501084559394.png" alt="image-20200501084559394"></p>', 10);
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
    _hoisted_2,
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
    _hoisted_14,
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
    _hoisted_64,
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
    _hoisted_115
  ]);
}
const _02___ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _02___ as default
};
