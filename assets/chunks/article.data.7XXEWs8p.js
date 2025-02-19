import { g as getPrefixCls, _ as _export_sfc } from "./index.2Idoq-Jx.js";
import { d as defineComponent, I as createVNode, o as openBlock, c as createElementBlock, n as normalizeClass, r as renderSlot, e as createCommentVNode, a as createTextVNode, t as toDisplayString } from "./framework.b55ravPP.js";
var ListItem = defineComponent({
  name: "ListItem",
  props: {
    actionLayout: {
      type: String,
      default: "horizontal"
    }
  },
  setup(props, {
    slots
  }) {
    const prefixCls = getPrefixCls("list-item");
    const renderAction = () => {
      var _a;
      const actions = (_a = slots.actions) == null ? void 0 : _a.call(slots);
      if (!actions || !actions.length) {
        return null;
      }
      return createVNode("ul", {
        "class": `${prefixCls}-action`
      }, [actions.map((item, index) => createVNode("li", {
        "key": `${prefixCls}-action-${index}`
      }, [item]))]);
    };
    return () => {
      var _a, _b;
      return createVNode("div", {
        "role": "listitem",
        "class": prefixCls
      }, [createVNode("div", {
        "class": `${prefixCls}-main`
      }, [(_a = slots.meta) == null ? void 0 : _a.call(slots), createVNode("div", {
        "class": `${prefixCls}-content`
      }, [(_b = slots.default) == null ? void 0 : _b.call(slots)]), props.actionLayout === "vertical" && renderAction()]), props.actionLayout === "horizontal" && renderAction(), slots.extra && createVNode("div", {
        "class": `${prefixCls}-extra`
      }, [slots.extra()])]);
    };
  }
});
const _sfc_main = defineComponent({
  name: "ListItemMeta",
  props: {
    title: String,
    description: String
  },
  setup(props, { slots }) {
    const prefixCls = getPrefixCls("list-item-meta");
    const hasContent = Boolean(props.title || props.description || slots.title || slots.description);
    return {
      prefixCls,
      hasContent
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.prefixCls)
  }, [
    _ctx.$slots.avatar ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(`${_ctx.prefixCls}-avatar`)
    }, [
      renderSlot(_ctx.$slots, "avatar")
    ], 2)) : createCommentVNode("v-if", true),
    _ctx.hasContent ? (openBlock(), createElementBlock("div", {
      key: 1,
      class: normalizeClass(`${_ctx.prefixCls}-content`)
    }, [
      _ctx.$slots.title || _ctx.title ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(`${_ctx.prefixCls}-title`)
      }, [
        renderSlot(_ctx.$slots, "title", {}, () => [
          createTextVNode(toDisplayString(_ctx.title), 1)
        ])
      ], 2)) : createCommentVNode("v-if", true),
      _ctx.$slots.description || _ctx.description ? (openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass(`${_ctx.prefixCls}-description`)
      }, [
        renderSlot(_ctx.$slots, "description", {}, () => [
          createTextVNode(toDisplayString(_ctx.description), 1)
        ])
      ], 2)) : createCommentVNode("v-if", true)
    ], 2)) : createCommentVNode("v-if", true)
  ], 2);
}
var ListItemMeta = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const data = JSON.parse('[{"title":"阿里巴巴的Code Review方法论与实践总结","isOriginal":false,"author":"方基成(润甫)","date":"2023/01/06 20:12","articleTitle":"一文梳理Code Review方法论与实践总结","articleLink":"https://mp.weixin.qq.com/s/_4MFrQSYOIGYRdDGOJPDKQ","categories":["零零碎碎"],"tags":["Code Review","卓越工程文化"],"path":"src/categories/fragments/2023/01/06/CodeReview方法论与实践总结"},{"title":"一文详解限流接口实现","isOriginal":false,"author":"非有","date":"2023/12/21 22:25","articleTitle":"一文详解 Java 限流接口实现","articleLink":"https://mp.weixin.qq.com/s/A5VYjstIDeVvizNK2HkrTQ","categories":["零零碎碎"],"tags":["Java","限流"],"path":"src/categories/fragments/2023/12/21/一文详解限流接口实现"},{"path":"src/study-notes/01-学习笔记/01-js高级plus/01-深入JavaScript运行原理"},{"path":"src/study-notes/01-学习笔记/01-js高级plus/02-JS内存管理"},{"path":"src/study-notes/01-学习笔记/01-js高级plus/03-JS闭包"},{"path":"src/study-notes/01-学习笔记/01-js高级plus/04-_this指向"},{"path":"src/study-notes/01-学习笔记/01-js高级plus/05-_实现call,apply,bind"},{"path":"src/study-notes/01-学习笔记/01-js高级plus/06-_对象"},{"path":"src/study-notes/01-学习笔记/01-js高级plus/07-_函数"},{"path":"src/study-notes/01-学习笔记/01-js高级plus/08-_js中零碎知识(with,eval)"},{"path":"src/study-notes/01-学习笔记/01-js高级plus/09-_面向对象"},{"path":"src/study-notes/01-学习笔记/01-js高级plus/10-_原型链与继承"},{"path":"src/study-notes/01-学习笔记/01-js高级plus/11-_属性描述符"},{"path":"src/study-notes/01-学习笔记/01-js高级plus/12-_对象方法补充详解"},{"path":"src/study-notes/01-学习笔记/01-js高级plus/13-_ES6新特性"},{"path":"src/study-notes/01-学习笔记/01-js高级plus/14-_Proxy和Reflect"},{"path":"src/study-notes/01-学习笔记/01-js高级plus/15-_Promise"},{"path":"src/study-notes/01-学习笔记/01-js高级plus/16-_生成器和迭代器"},{"path":"src/study-notes/01-学习笔记/01-js高级plus/17-_事件循环"},{"path":"src/study-notes/01-学习笔记/01-js高级plus/18-_错误处理"},{"path":"src/study-notes/01-学习笔记/01-js高级plus/19-_模块化"},{"path":"src/study-notes/01-学习笔记/01-js高级plus/20-_包管理工具"},{"path":"src/study-notes/01-学习笔记/01-js高级plus/21-_JSON序列化与深浅拷贝"},{"path":"src/study-notes/01-学习笔记/01-js高级plus/22-_Cookie-BOM-DOM"},{"path":"src/study-notes/01-学习笔记/01-js高级plus/23-_防抖节流"},{"path":"src/study-notes/01-学习笔记/01-js高级plus/24-_手写Promise总结"},{"path":"src/study-notes/01-学习笔记/01-js高级plus/25-补充_ES新特性"},{"path":"src/study-notes/01-学习笔记/01-js高级plus/26-补充_vue2和3中vif-vfor优先级"},{"path":"src/study-notes/01-学习笔记/01-js高级plus/27-补充_事件总线"},{"path":"src/study-notes/01-学习笔记/01-js高级plus/28-补充_作用域提升"},{"path":"src/study-notes/01-学习笔记/01-js高级plus/29-补充_作用域面试题"},{"path":"src/study-notes/01-学习笔记/01-js高级plus/30-补充_执行上下文"},{"path":"src/study-notes/01-学习笔记/01-js高级plus/31-补充_暂时性死区"},{"path":"src/study-notes/01-学习笔记/01-js高级plus/32-补充_箭头函数"},{"path":"src/study-notes/01-学习笔记/01-js高级plus/33-补充_闭包的优缺点以及使用场景"},{"path":"src/study-notes/01-学习笔记/02-前端缓存技术与方案解析/01-开篇-小册背景及前言"},{"path":"src/study-notes/01-学习笔记/02-前端缓存技术与方案解析/02-HTTP缓存1-开门见山——请求响应头中关于缓存的奥秘"},{"path":"src/study-notes/01-学习笔记/02-前端缓存技术与方案解析/03-HTTP-缓存2-卧虎藏龙——网页由慢到快背后的强缓存"},{"path":"src/study-notes/01-学习笔记/02-前端缓存技术与方案解析/04-HTTP-缓存3-刨根问底——缓存新鲜度与使用期算法"},{"path":"src/study-notes/01-学习笔记/02-前端缓存技术与方案解析/05-HTTP 缓存4-相辅相成——从协商缓存到启发式缓存"},{"path":"src/study-notes/01-学习笔记/02-前端缓存技术与方案解析/06-应用篇-从理论到实际——HTTP 缓存方案解析"},{"path":"src/study-notes/01-学习笔记/02-前端缓存技术与方案解析/07-福利-换一种角度——用户操作与 HTTP 缓存"},{"path":"src/study-notes/01-学习笔记/02-前端缓存技术与方案解析/08-进阶篇-深入服务端——从跨域问题到 Nginx 响应报头配置"},{"path":"src/study-notes/01-学习笔记/02-前端缓存技术与方案解析/09-浏览器缓存1-珠联璧合——熟悉而又陌生的 Memory Cache 与 Disk Cache"},{"path":"src/study-notes/01-学习笔记/02-前端缓存技术与方案解析/10-浏览器缓存2-渐进增强——强大而又难以驾驭的 Service Worker"},{"path":"src/study-notes/01-学习笔记/02-前端缓存技术与方案解析/11-浏览器缓存3-日新月异——存储型缓存的道与术"},{"path":"src/study-notes/01-学习笔记/02-前端缓存技术与方案解析/12-工具篇-神兵利器——Chrome 浏览器 Application 面板剖析"},{"path":"src/study-notes/01-学习笔记/02-前端缓存技术与方案解析/13-尾篇-笔者寄语"},{"path":"src/study-notes/01-学习笔记/03-React/01-React不可变数据"},{"path":"src/study-notes/01-学习笔记/03-React/02-React状态管理工具之Mobx"},{"path":"src/study-notes/01-学习笔记/03-React/03-React状态管理工具之RTK"},{"path":"src/study-notes/01-学习笔记/03-React/04-React状态管理工具之useContext"},{"path":"src/study-notes/01-学习笔记/03-React/05-React重做与撤销"},{"path":"src/study-notes/01-学习笔记/04-设计模式/01-设计模式"},{"path":"src/study-notes/01-学习笔记/05-Vue3/01-Vue3组件渲染"},{"path":"src/study-notes/01-学习笔记/06-性能优化/01-性能优化"},{"path":"src/study-notes/02-基础知识/01-HTML/02-替换元素"},{"path":"src/study-notes/02-基础知识/01-HTML/03-微格式"},{"path":"src/study-notes/02-基础知识/01-HTML/04-文档声明"},{"path":"src/study-notes/02-基础知识/01-HTML/05-页面可见性"},{"path":"src/study-notes/02-基础知识/01-HTML/06-语义化"},{"path":"src/study-notes/02-基础知识/01-HTML/07-iframe"},{"path":"src/study-notes/02-基础知识/01-HTML/08-SEO"},{"path":"src/study-notes/02-基础知识/01-HTML/09-W3C-标准组织"},{"path":"src/study-notes/02-基础知识/02-CSS/01-CSS面试题汇总"},{"path":"src/study-notes/02-基础知识/02-CSS/02-层叠上下文"},{"path":"src/study-notes/02-基础知识/02-CSS/03-定位总结"},{"path":"src/study-notes/02-基础知识/02-CSS/04-浮动"},{"path":"src/study-notes/02-基础知识/02-CSS/05-过渡和动画事件"},{"path":"src/study-notes/02-基础知识/02-CSS/06-渐进式渲染"},{"path":"src/study-notes/02-基础知识/02-CSS/07-渐进增强和优雅降级"},{"path":"src/study-notes/02-基础知识/02-CSS/08-居中方式总结"},{"path":"src/study-notes/02-基础知识/02-CSS/09-隐藏元素的方式总结"},{"path":"src/study-notes/02-基础知识/02-CSS/10-BFC"},{"path":"src/study-notes/02-基础知识/02-CSS/11-CSS3-变形"},{"path":"src/study-notes/02-基础知识/02-CSS/12-CSS3-遮罩"},{"path":"src/study-notes/02-基础知识/02-CSS/13-CSS3的媒介(media)查询"},{"path":"src/study-notes/02-基础知识/02-CSS/14-CSS3的calc函数"},{"path":"src/study-notes/02-基础知识/02-CSS/15-CSS层叠继承规则总结"},{"path":"src/study-notes/02-基础知识/02-CSS/16-CSS单位总结"},{"path":"src/study-notes/02-基础知识/02-CSS/17-CSS属性的计算过程"},{"path":"src/study-notes/02-基础知识/02-CSS/18-CSS渲染性能优化"},{"path":"src/study-notes/02-基础知识/02-CSS/19-import指令"},{"path":"src/study-notes/02-基础知识/03-JavaScript/02-包装类型"},{"path":"src/study-notes/02-基础知识/03-JavaScript/03-闭包"},{"path":"src/study-notes/02-基础知识/03-JavaScript/04-尺寸和位置"},{"path":"src/study-notes/02-基础知识/03-JavaScript/05-递归"},{"path":"src/study-notes/02-基础知识/03-JavaScript/06-浮点数精度问题"},{"path":"src/study-notes/02-基础知识/03-JavaScript/07-更多知识"},{"path":"src/study-notes/02-基础知识/03-JavaScript/08-函数防抖和节流"},{"path":"src/study-notes/02-基础知识/03-JavaScript/09-函数柯里化"},{"path":"src/study-notes/02-基础知识/03-JavaScript/10-垃圾回收与内存泄漏"},{"path":"src/study-notes/02-基础知识/03-JavaScript/11-深浅拷贝"},{"path":"src/study-notes/02-基础知识/03-JavaScript/12-属性描述符"},{"path":"src/study-notes/02-基础知识/03-JavaScript/13-数据类型的转换"},{"path":"src/study-notes/02-基础知识/03-JavaScript/14-严格模式"},{"path":"src/study-notes/02-基础知识/03-JavaScript/15-原型和原型链"},{"path":"src/study-notes/02-基础知识/03-JavaScript/16-运算符"},{"path":"src/study-notes/02-基础知识/03-JavaScript/17-执行栈和执行上下文"},{"path":"src/study-notes/02-基础知识/03-JavaScript/18-值和引用"},{"path":"src/study-notes/02-基础知识/03-JavaScript/19-阻止事件默认行为"},{"path":"src/study-notes/02-基础知识/03-JavaScript/20-作用域和作用域链"},{"path":"src/study-notes/02-基础知识/03-JavaScript/21-class-和构造函数区别"},{"path":"src/study-notes/02-基础知识/03-JavaScript/22-DOM-事件的传播机制"},{"path":"src/study-notes/02-基础知识/03-JavaScript/23-DOM-事件的注册和移除"},{"path":"src/study-notes/02-基础知识/03-JavaScript/24-eval"},{"path":"src/study-notes/02-基础知识/03-JavaScript/25-let、var、const的区别"},{"path":"src/study-notes/02-基础知识/03-JavaScript/26-Node的事件循环"},{"path":"src/study-notes/02-基础知识/03-JavaScript/27-this指向"},{"path":"src/study-notes/02-基础知识/03-JavaScript/28-WeakSet-和-WeakMap"},{"path":"src/study-notes/02-基础知识/04-react/01-React不可变数据"},{"path":"src/study-notes/02-基础知识/04-react/02-React状态管理工具之RTK"},{"path":"src/study-notes/02-基础知识/04-react/03-React状态管理工具之useContext"},{"path":"src/study-notes/02-基础知识/05-计算机网络/01-计算机网络"},{"path":"src/study-notes/02-基础知识/06-ES6/01-es6部分"},{"path":"src/study-notes/02-基础知识/07-工程化/01-工程化面试题汇总"},{"path":"src/study-notes/02-基础知识/07-工程化/02-课件"},{"path":"src/study-notes/02-基础知识/07-工程化/03ESLint/vue-app/README"},{"path":"src/study-notes/02-基础知识/08-浏览器/01-浏览器面试题汇总"},{"path":"src/study-notes/02-基础知识/08-浏览器/02-跨标签页通信"},{"path":"src/study-notes/02-基础知识/08-浏览器/03-浏览器的渲染流程"},{"path":"src/study-notes/02-基础知识/08-浏览器/04-浏览器的组成部分"},{"path":"src/study-notes/02-基础知识/08-浏览器/05-浏览器缓存"},{"path":"src/study-notes/02-基础知识/08-浏览器/06-浏览器离线存储概述"},{"path":"src/study-notes/02-基础知识/08-浏览器/07-资源提示关键词"},{"path":"src/study-notes/02-基础知识/08-浏览器/08-File-API"},{"path":"src/study-notes/02-基础知识/08-浏览器/09-IndexedDB"},{"path":"src/study-notes/02-基础知识/08-浏览器/10-web-worker"},{"path":"src/study-notes/02-基础知识/08-浏览器/11-WebSQL"},{"path":"src/study-notes/02-基础知识/09-网络/01-网络面试题汇总"},{"path":"src/study-notes/02-基础知识/09-网络/02-课件"},{"path":"src/study-notes/02-基础知识/09-网络/11文件上传/后端服务器/public/upload/readme"},{"path":"src/study-notes/02-基础知识/09-网络/16TCP协议/课件"},{"path":"src/study-notes/02-基础知识/09-网络/17CSRF攻击/课件"},{"path":"src/study-notes/02-基础知识/09-网络/18XSS攻击/课件"},{"path":"src/study-notes/02-基础知识/09-网络/19网络性能优化/课件"},{"path":"src/study-notes/02-基础知识/09-网络/20断点续传/课件"},{"path":"src/study-notes/02-基础知识/09-网络/21域名和DNS/课件"},{"path":"src/study-notes/02-基础知识/09-网络/22SSL、TLS、HTTPS/课件"},{"path":"src/study-notes/02-基础知识/09-网络/23HTTP各版本差异/课件"},{"path":"src/study-notes/02-基础知识/09-网络/24WebSocket/课件"},{"path":"src/study-notes/02-基础知识/09-网络/25WebSocket实战/chat-room/README"},{"path":"src/study-notes/02-基础知识/09-网络/25WebSocket实战/client/README"},{"path":"src/study-notes/02-基础知识/09-网络/25WebSocket实战/课件"},{"path":"src/study-notes/02-基础知识/10-Promise/01-Promise面试题归总"},{"path":"src/study-notes/02-基础知识/10-Promise/02-笔记"},{"path":"src/study-notes/02-基础知识/10-Promise/03-说明"},{"path":"src/study-notes/02-基础知识/11-Vue/01-说明（必看）"},{"path":"src/study-notes/02-基础知识/11-Vue/01组件通信总结/demo/README"},{"path":"src/study-notes/02-基础知识/11-Vue/01组件通信总结/课件/笔记"},{"path":"src/study-notes/02-基础知识/11-Vue/02-vue笔面试题汇总"},{"path":"src/study-notes/02-基础知识/11-Vue/02虚拟DOM详解/课件/笔记"},{"path":"src/study-notes/02-基础知识/11-Vue/02虚拟DOM详解/课堂代码/demo/README"},{"path":"src/study-notes/02-基础知识/11-Vue/03v-model/课件/笔记"},{"path":"src/study-notes/02-基础知识/11-Vue/03v-model/课堂代码/demo/README"},{"path":"src/study-notes/02-基础知识/11-Vue/04数据响应原理/课件/笔记"},{"path":"src/study-notes/02-基础知识/11-Vue/05diff/课件/笔记"},{"path":"src/study-notes/02-基础知识/11-Vue/06生命周期详解/课件/笔记"},{"path":"src/study-notes/02-基础知识/11-Vue/06生命周期详解/课堂代码/demo/README"},{"path":"src/study-notes/02-基础知识/11-Vue/07你不知道的computed/课件/笔记"},{"path":"src/study-notes/02-基础知识/11-Vue/08filter过滤器/课件/笔记"},{"path":"src/study-notes/02-基础知识/11-Vue/08filter过滤器/课堂代码/demo/README"},{"path":"src/study-notes/02-基础知识/11-Vue/09作用域插槽/课件/笔记"},{"path":"src/study-notes/02-基础知识/11-Vue/09作用域插槽/课堂代码/demo/README"},{"path":"src/study-notes/02-基础知识/11-Vue/10过渡和动画/课件/demo1/README"},{"path":"src/study-notes/02-基础知识/11-Vue/10过渡和动画/课件/demo2/README"},{"path":"src/study-notes/02-基础知识/11-Vue/10过渡和动画/课件/笔记"},{"path":"src/study-notes/02-基础知识/11-Vue/10过渡和动画/课堂代码/demo/README"},{"path":"src/study-notes/02-基础知识/11-Vue/10过渡和动画/课堂代码/demo1/README"},{"path":"src/study-notes/02-基础知识/11-Vue/10过渡和动画/课堂代码/demo2/README"},{"path":"src/study-notes/02-基础知识/11-Vue/11优化/课件/笔记"},{"path":"src/study-notes/02-基础知识/11-Vue/11优化/课堂代码/1. 使用冻结对象/README"},{"path":"src/study-notes/02-基础知识/11-Vue/11优化/课堂代码/2. 使用函数式组件/README"},{"path":"src/study-notes/02-基础知识/11-Vue/11优化/课堂代码/3. 非实时绑定的表单项/README"},{"path":"src/study-notes/02-基础知识/11-Vue/11优化/课堂代码/4. 保持对象引用稳定/README"},{"path":"src/study-notes/02-基础知识/11-Vue/11优化/课堂代码/5. 延迟装载/README"},{"path":"src/study-notes/02-基础知识/11-Vue/12keep-alive/课件/笔记"},{"path":"src/study-notes/02-基础知识/11-Vue/12keep-alive/课堂代码/demo1/README"},{"path":"src/study-notes/02-基础知识/11-Vue/12keep-alive/课堂代码/demo2/README"},{"path":"src/study-notes/02-基础知识/11-Vue/13长列表优化/课件/课件"},{"path":"src/study-notes/02-基础知识/11-Vue/13长列表优化/课堂代码/demo/README"},{"path":"src/study-notes/02-基础知识/11-Vue/14其他API/课堂代码/demo/README"},{"path":"src/study-notes/02-基础知识/11-Vue/15模式和环境变量/课件/笔记"},{"path":"src/study-notes/02-基础知识/11-Vue/15模式和环境变量/课堂代码/demo/README"},{"path":"src/study-notes/02-基础知识/11-Vue/16更多配置/课件/笔记"},{"path":"src/study-notes/02-基础知识/11-Vue/16更多配置/课堂代码/my-site/README"},{"path":"src/study-notes/02-基础知识/11-Vue/16更多配置/课堂代码/my-site/src/components/README"},{"path":"src/study-notes/02-基础知识/11-Vue/17更多命令/课堂代码/demo/README"},{"path":"src/study-notes/02-基础知识/11-Vue/18嵌套路由/课堂代码/demo/README"},{"path":"src/study-notes/02-基础知识/11-Vue/19路由切换动画/课件/demo/README"},{"path":"src/study-notes/02-基础知识/11-Vue/19路由切换动画/课堂代码/demo/README"},{"path":"src/study-notes/02-基础知识/13-HTTP/01-http部分"},{"path":"src/study-notes/03-实用笔记/01-hooks封装/01-index"},{"path":"src/study-notes/03-实用笔记/02-常用功能/01-常用功能"},{"path":"src/study-notes/03-实用笔记/03-组件封装/01-组件封装"},{"path":"src/study-notes/04-工具/01-.好用工具"},{"path":"src/study-notes/05-开源经历/01-index/01-indexeddb-toolkit"},{"path":"src/study-notes/05-开源经历/01-index/02-vue3-scroll-number"},{"path":"src/study-notes/05-开源经历/01-index/03-组件库"},{"path":"src/study-notes/06-源码理解/01-源码调试/01-如何调试源码"},{"path":"src/study-notes/06-源码理解/02-Vue2/01-diff算法"},{"path":"src/study-notes/06-源码理解/02-Vue2/02-Vue2和Vue的diff算法"},{"path":"src/study-notes/06-源码理解/03-Vue3/01-Vue3源码"},{"path":"src/study-notes/06-源码理解/03-Vue3/02-Vue3diff算法"},{"path":"src/study-notes/06-源码理解/03-Vue3/03-diff算法有无key"},{"path":"src/study-notes/06-源码理解/03-Vue3/04-Provide_Inject"},{"path":"src/study-notes/06-源码理解/04-React/01-diff算法"}]');
export {
  ListItemMeta as L,
  ListItem as a,
  data as d
};
