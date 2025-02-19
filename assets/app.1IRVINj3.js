import { d as defineComponent, h as ref, g as computed, j as onMounted, y as watch, o as openBlock, c as createElementBlock, k as createBaseVNode, r as renderSlot, n as normalizeClass, m as unref, b as createBlock, I as createVNode, ad as createApp$1, w as withCtx, O as normalizeStyle, t as toDisplayString, e as createCommentVNode, T as Transition, X as __vitePreload, u as useData, L as useRoute, N as inject, _ as _export_sfc, a9 as withDirectives, a8 as vShow, Z as provide, aa as createSlots, M as mergeProps, ac as normalizeProps, as as guardReactiveProps, P as nextTick, am as h, v as inBrowser, at as useUpdateHead, au as RouterSymbol, av as initData, aw as dataSymbol, ax as Content, ay as ClientOnly, az as siteDataRef, aA as createSSRApp, aB as createRouter, aC as pathToFile, z as watchEffect, aD as usePrefetch, aE as useCopyCode, aF as useCodeGroups } from "./chunks/framework.b55ravPP.js";
import { u as useSidebar, t as theme } from "./chunks/theme.9zsRLrXS.js";
import { M as MNavLinks } from "./chunks/MNavLinks.Wn66GgPh.js";
const Z = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [c, l2] of n)
    e[c] = l2;
  return e;
}, q = {}, G = {
  t: "1661231422733",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "3259",
  width: "20",
  height: "20"
}, J = /* @__PURE__ */ createBaseVNode("path", {
  d: "M682.666667 810.666667c-12.8 0-21.333333-4.266667-29.866667-12.8-17.066667-17.066667-17.066667-42.666667 0-59.733334l226.133333-226.133333-226.133333-226.133333c-17.066667-17.066667-17.066667-42.666667 0-59.733334s42.666667-17.066667 59.733333 0l256 256c17.066667 17.066667 17.066667 42.666667 0 59.733334l-256 256c-8.533333 8.533333-17.066667 12.8-29.866666 12.8zM341.333333 810.666667c-12.8 0-21.333333-4.266667-29.866666-12.8l-256-256c-17.066667-17.066667-17.066667-42.666667 0-59.733334l256-256c17.066667-17.066667 42.666667-17.066667 59.733333 0s17.066667 42.666667 0 59.733334L145.066667 512l226.133333 226.133333c17.066667 17.066667 17.066667 42.666667 0 59.733334-8.533333 8.533333-17.066667 12.8-29.866667 12.8z",
  "p-id": "3260"
}, null, -1), K = [
  J
];
function Q(t, n) {
  return openBlock(), createElementBlock("svg", G, K);
}
const N = /* @__PURE__ */ Z(q, [["render", Q]]), W = {}, X = {
  t: "1661231449868",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "3541",
  width: "20",
  height: "20"
}, Y = /* @__PURE__ */ createBaseVNode("path", {
  d: "M305.6 225.6c-17.6-17.6-43.2-17.6-59.2 0L19.2 460.8c-25.6 30.4-25.6 72 0 97.6l225.6 235.2c8 8 20.8 12.8 30.4 12.8s20.8-4.8 30.4-12.8c17.6-17.6 17.6-43.2 0-59.2L88 512l217.6-225.6c17.6-17.6 17.6-43.2 0-60.8zM1001.6 460.8L774.4 225.6c-17.6-17.6-43.2-17.6-59.2 0s-17.6 43.2 0 59.2L932.8 512 715.2 737.6c-17.6 17.6-17.6 43.2 0 59.2 8 8 17.6 12.8 30.4 12.8 12.8 0 20.8-4.8 30.4-12.8l225.6-235.2c28.8-28.8 28.8-70.4 0-100.8zM612.8 230.4c-20.8-8-46.4 4.8-56 25.6L382.4 742.4c-8 20.8 4.8 46.4 25.6 56 4.8 0 8 4.8 12.8 4.8 17.6 0 33.6-12.8 38.4-30.4l179.2-491.2c8-20.8-4.8-46.4-25.6-51.2z",
  "p-id": "3542"
}, null, -1), ee = [
  Y
];
function te(t, n) {
  return openBlock(), createElementBlock("svg", X, ee);
}
const I = /* @__PURE__ */ Z(W, [["render", te]]), ne = {}, oe = {
  viewBox: "0 0 544 560",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, se = /* @__PURE__ */ createBaseVNode("path", {
  d: "M399.503 143.667C399.319 152.501 406.332 159.812 415.167 159.997C424.001 160.181 431.312 153.168 431.497 144.333L399.503 143.667ZM416 120L431.997 120.333C431.999 120.207 432 120.081 432 119.954L416 120ZM360 64L360.046 48.0001C360.03 48 360.015 48 360 48L360 64ZM144 64V48C143.984 48 143.968 48 143.953 48.0001L144 64ZM80 128L64.0001 127.953C64 127.968 64 127.984 64 128L80 128ZM80 344H64C64 344.015 64 344.03 64.0001 344.046L80 344ZM136 400L135.954 416C135.97 416 135.985 416 136 416L136 400ZM160 416C168.837 416 176 408.837 176 400C176 391.163 168.837 384 160 384V416ZM217 160H439V128H217V160ZM439 160C461.644 160 480 178.356 480 201H512C512 160.683 479.317 128 439 128V160ZM480 201V423H512V201H480ZM480 423C480 445.644 461.644 464 439 464V496C479.317 496 512 463.317 512 423H480ZM439 464H217V496H439V464ZM217 464C194.356 464 176 445.644 176 423H144C144 463.317 176.683 496 217 496V464ZM176 423V201H144V423H176ZM176 201C176 178.356 194.356 160 217 160V128C176.683 128 144 160.683 144 201H176ZM431.497 144.333L431.997 120.333L400.003 119.667L399.503 143.667L431.497 144.333ZM432 119.954C431.946 100.888 424.347 82.6173 410.865 69.1349L388.238 91.7624C395.741 99.2658 399.97 109.434 400 120.046L432 119.954ZM410.865 69.1349C397.383 55.6526 379.112 48.0543 360.046 48.0001L359.954 79.9999C370.566 80.0301 380.734 84.2589 388.238 91.7624L410.865 69.1349ZM360 48H144V80H360V48ZM143.953 48.0001C122.767 48.0627 102.467 56.5064 87.4868 71.4868L110.114 94.1142C119.117 85.1118 131.316 80.0376 144.047 79.9999L143.953 48.0001ZM87.4868 71.4868C72.5064 86.4673 64.0627 106.767 64.0001 127.953L95.9999 128.047C96.0376 115.316 101.112 103.117 110.114 94.1142L87.4868 71.4868ZM64 128V344H96V128H64ZM64.0001 344.046C64.0543 363.112 71.6526 381.383 85.1349 394.865L107.762 372.238C100.259 364.734 96.0301 354.566 95.9999 343.954L64.0001 344.046ZM85.1349 394.865C98.6173 408.347 116.888 415.946 135.954 416L136.046 384C125.434 383.97 115.266 379.741 107.762 372.238L85.1349 394.865ZM136 416H160V384H136V416Z",
  fill: "currentColor"
}, null, -1), ce = [
  se
];
function ie(t, n) {
  return openBlock(), createElementBlock("svg", oe, ce);
}
const D = /* @__PURE__ */ Z(ne, [["render", ie]]), M = "vitepress-demo-preview", w = (t, n, e, c) => {
  let l2 = n === "" ? `${t}` : `${t}-${n}`;
  return e && (l2 += `__${e}`), c && (l2 += `--${c}`), l2;
}, F = (t = "") => ({
  b: () => w(M, t),
  e: (v = "") => w(M, t, v),
  m: (v = "") => w(M, t, "", v),
  bem: (v, h2, m) => w(M, v, h2, m)
}), S = () => {
  const t = ref(true);
  return {
    isCodeFold: t,
    setCodeFold: (e) => {
      t.value = e;
    }
  };
}, U = () => ({
  copyContent: ref(""),
  clickCopy: async (e) => {
    await navigator.clipboard.writeText(e);
  }
}), le = {}, re = {
  width: "20",
  height: "20",
  viewBox: "0 0 48 48",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, ue = /* @__PURE__ */ createBaseVNode("path", {
  d: "M24 4L29.2533 7.83204L35.7557 7.81966L37.7533 14.0077L43.0211 17.8197L41 24L43.0211 30.1803L37.7533 33.9923L35.7557 40.1803L29.2533 40.168L24 44L18.7467 40.168L12.2443 40.1803L10.2467 33.9923L4.97887 30.1803L7 24L4.97887 17.8197L10.2467 14.0077L12.2443 7.81966L18.7467 7.83204L24 4Z",
  fill: "currentColor",
  stroke: "#333",
  "stroke-width": "4",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), ae = /* @__PURE__ */ createBaseVNode("path", {
  d: "M17 24L22 29L32 19",
  fill: "currentColor",
  stroke: "#333",
  "stroke-width": "4",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), de = [
  ue,
  ae
];
function Ce(t, n) {
  return openBlock(), createElementBlock("svg", re, de);
}
const pe = /* @__PURE__ */ Z(le, [["render", Ce]]), _e = /* @__PURE__ */ defineComponent({
  __name: "message-notice",
  props: {
    content: { default: "复制成功！" },
    close: null
  },
  setup(t, { expose: n }) {
    const e = t, c = F(), l2 = ref(false), v = (d2) => {
      l2.value = d2;
    }, h2 = ref(-999), m = (d2) => {
      h2.value = d2;
    };
    watch(l2, (d2) => {
      d2 === true && setTimeout(() => {
        l2.value = false;
      }, 3e3);
    });
    const C = () => {
      e.close();
    };
    return n({
      setVisible: v,
      setTopHeight: m
    }), (d2, L) => (openBlock(), createBlock(Transition, {
      name: "slide-fade",
      onAfterLeave: C
    }, {
      default: withCtx(() => [
        l2.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(c).bem("message-notice", "container")]),
          style: normalizeStyle({ top: h2.value + "px" })
        }, [
          createVNode(pe),
          createBaseVNode("span", null, toDisplayString(t.content), 1)
        ], 6)) : createCommentVNode("", true)
      ]),
      _: 1
    }));
  }
});
const V = [], E = {
  open: () => {
    const t = document.createElement("div"), n = createApp$1(_e, {
      content: "复制成功！",
      close: () => {
        document.body.removeChild(t), V.pop(), n.unmount();
      }
    }), e = n.mount(t);
    document.body.appendChild(t);
    const c = V.length, l2 = c === 0 ? 10 : (c + 1) * 10 + c * 42;
    e.setTopHeight(l2), e.setVisible(true), V.push(e);
  }
};
const me = ["innerHTML"], ye = /* @__PURE__ */ defineComponent({
  __name: "ElementPlus",
  props: {
    code: null,
    showCode: null,
    title: { default: "默认标题" },
    description: { default: "描述内容" }
  },
  setup(t) {
    const n = t, e = F(), { isCodeFold: c, setCodeFold: l2 } = S(), { clickCopy: v } = U(), h2 = ref(decodeURIComponent(n.code)), m = ref(decodeURIComponent(n.showCode)), C = ref(null), d2 = () => {
      v(h2.value), E.open();
    }, L = computed(() => {
      var s;
      return C.value ? (s = C.value) == null ? void 0 : s.clientHeight : 0;
    }), g = (s) => {
      c.value ? C.value.style.height = "0px" : C.value.style.height = `${s}px`;
    };
    return onMounted(() => {
      const s = L.value;
      g(s);
    }), watch(c, () => {
      const s = L.value;
      g(s);
    }), (s, u) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(e).e("element-plus__container")])
    }, [
      createBaseVNode("section", {
        class: normalizeClass([unref(e).bem("preview")])
      }, [
        renderSlot(s.$slots, "default")
      ], 2),
      createBaseVNode("section", {
        class: normalizeClass([unref(e).bem("description")])
      }, [
        createBaseVNode("div", {
          class: normalizeClass([unref(e).bem("description", "split-line")])
        }, null, 2),
        createBaseVNode("div", {
          class: normalizeClass([unref(e).bem("description", "handle-btn")])
        }, [
          unref(c) ? (openBlock(), createBlock(N, {
            key: 1,
            onClick: u[1] || (u[1] = (f) => unref(l2)(false))
          })) : (openBlock(), createBlock(I, {
            key: 0,
            onClick: u[0] || (u[0] = (f) => unref(l2)(true))
          })),
          createVNode(D, { onClick: d2 })
        ], 2)
      ], 2),
      createBaseVNode("section", {
        class: normalizeClass([unref(e).bem("source")]),
        ref_key: "sourceCodeArea",
        ref: C
      }, [
        createBaseVNode("div", {
          innerHTML: m.value,
          class: "language-vue"
        }, null, 8, me)
      ], 2)
    ], 2));
  }
});
/*! medium-zoom 1.1.0 | MIT License | https://github.com/francoischalifour/medium-zoom */
var _extends = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var isSupported = function isSupported2(node) {
  return node.tagName === "IMG";
};
var isNodeList = function isNodeList2(selector) {
  return NodeList.prototype.isPrototypeOf(selector);
};
var isNode = function isNode2(selector) {
  return selector && selector.nodeType === 1;
};
var isSvg = function isSvg2(image) {
  var source = image.currentSrc || image.src;
  return source.substr(-4).toLowerCase() === ".svg";
};
var getImagesFromSelector = function getImagesFromSelector2(selector) {
  try {
    if (Array.isArray(selector)) {
      return selector.filter(isSupported);
    }
    if (isNodeList(selector)) {
      return [].slice.call(selector).filter(isSupported);
    }
    if (isNode(selector)) {
      return [selector].filter(isSupported);
    }
    if (typeof selector === "string") {
      return [].slice.call(document.querySelectorAll(selector)).filter(isSupported);
    }
    return [];
  } catch (err) {
    throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom");
  }
};
var createOverlay = function createOverlay2(background) {
  var overlay = document.createElement("div");
  overlay.classList.add("medium-zoom-overlay");
  overlay.style.background = background;
  return overlay;
};
var cloneTarget = function cloneTarget2(template) {
  var _template$getBounding = template.getBoundingClientRect(), top = _template$getBounding.top, left = _template$getBounding.left, width = _template$getBounding.width, height = _template$getBounding.height;
  var clone = template.cloneNode();
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
  clone.removeAttribute("id");
  clone.style.position = "absolute";
  clone.style.top = top + scrollTop + "px";
  clone.style.left = left + scrollLeft + "px";
  clone.style.width = width + "px";
  clone.style.height = height + "px";
  clone.style.transform = "";
  return clone;
};
var createCustomEvent = function createCustomEvent2(type, params) {
  var eventParams = _extends({
    bubbles: false,
    cancelable: false,
    detail: void 0
  }, params);
  if (typeof window.CustomEvent === "function") {
    return new CustomEvent(type, eventParams);
  }
  var customEvent = document.createEvent("CustomEvent");
  customEvent.initCustomEvent(type, eventParams.bubbles, eventParams.cancelable, eventParams.detail);
  return customEvent;
};
var mediumZoom = function mediumZoom2(selector) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var Promise2 = window.Promise || function Promise3(fn) {
    function noop() {
    }
    fn(noop, noop);
  };
  var _handleClick = function _handleClick2(event) {
    var target = event.target;
    if (target === overlay) {
      close();
      return;
    }
    if (images.indexOf(target) === -1) {
      return;
    }
    toggle({ target });
  };
  var _handleScroll = function _handleScroll2() {
    if (isAnimating || !active.original) {
      return;
    }
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (Math.abs(scrollTop - currentScroll) > zoomOptions.scrollOffset) {
      setTimeout(close, 150);
    }
  };
  var _handleKeyUp = function _handleKeyUp2(event) {
    var key = event.key || event.keyCode;
    if (key === "Escape" || key === "Esc" || key === 27) {
      close();
    }
  };
  var update = function update2() {
    var options2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var newOptions = options2;
    if (options2.background) {
      overlay.style.background = options2.background;
    }
    if (options2.container && options2.container instanceof Object) {
      newOptions.container = _extends({}, zoomOptions.container, options2.container);
    }
    if (options2.template) {
      var template = isNode(options2.template) ? options2.template : document.querySelector(options2.template);
      newOptions.template = template;
    }
    zoomOptions = _extends({}, zoomOptions, newOptions);
    images.forEach(function(image) {
      image.dispatchEvent(createCustomEvent("medium-zoom:update", {
        detail: { zoom }
      }));
    });
    return zoom;
  };
  var clone = function clone2() {
    var options2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return mediumZoom2(_extends({}, zoomOptions, options2));
  };
  var attach = function attach2() {
    for (var _len = arguments.length, selectors = Array(_len), _key = 0; _key < _len; _key++) {
      selectors[_key] = arguments[_key];
    }
    var newImages = selectors.reduce(function(imagesAccumulator, currentSelector) {
      return [].concat(imagesAccumulator, getImagesFromSelector(currentSelector));
    }, []);
    newImages.filter(function(newImage) {
      return images.indexOf(newImage) === -1;
    }).forEach(function(newImage) {
      images.push(newImage);
      newImage.classList.add("medium-zoom-image");
    });
    eventListeners.forEach(function(_ref) {
      var type = _ref.type, listener = _ref.listener, options2 = _ref.options;
      newImages.forEach(function(image) {
        image.addEventListener(type, listener, options2);
      });
    });
    return zoom;
  };
  var detach = function detach2() {
    for (var _len2 = arguments.length, selectors = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      selectors[_key2] = arguments[_key2];
    }
    if (active.zoomed) {
      close();
    }
    var imagesToDetach = selectors.length > 0 ? selectors.reduce(function(imagesAccumulator, currentSelector) {
      return [].concat(imagesAccumulator, getImagesFromSelector(currentSelector));
    }, []) : images;
    imagesToDetach.forEach(function(image) {
      image.classList.remove("medium-zoom-image");
      image.dispatchEvent(createCustomEvent("medium-zoom:detach", {
        detail: { zoom }
      }));
    });
    images = images.filter(function(image) {
      return imagesToDetach.indexOf(image) === -1;
    });
    return zoom;
  };
  var on = function on2(type, listener) {
    var options2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    images.forEach(function(image) {
      image.addEventListener("medium-zoom:" + type, listener, options2);
    });
    eventListeners.push({ type: "medium-zoom:" + type, listener, options: options2 });
    return zoom;
  };
  var off = function off2(type, listener) {
    var options2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    images.forEach(function(image) {
      image.removeEventListener("medium-zoom:" + type, listener, options2);
    });
    eventListeners = eventListeners.filter(function(eventListener) {
      return !(eventListener.type === "medium-zoom:" + type && eventListener.listener.toString() === listener.toString());
    });
    return zoom;
  };
  var open = function open2() {
    var _ref2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, target = _ref2.target;
    var _animate = function _animate2() {
      var container = {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      };
      var viewportWidth = void 0;
      var viewportHeight = void 0;
      if (zoomOptions.container) {
        if (zoomOptions.container instanceof Object) {
          container = _extends({}, container, zoomOptions.container);
          viewportWidth = container.width - container.left - container.right - zoomOptions.margin * 2;
          viewportHeight = container.height - container.top - container.bottom - zoomOptions.margin * 2;
        } else {
          var zoomContainer = isNode(zoomOptions.container) ? zoomOptions.container : document.querySelector(zoomOptions.container);
          var _zoomContainer$getBou = zoomContainer.getBoundingClientRect(), _width = _zoomContainer$getBou.width, _height = _zoomContainer$getBou.height, _left = _zoomContainer$getBou.left, _top = _zoomContainer$getBou.top;
          container = _extends({}, container, {
            width: _width,
            height: _height,
            left: _left,
            top: _top
          });
        }
      }
      viewportWidth = viewportWidth || container.width - zoomOptions.margin * 2;
      viewportHeight = viewportHeight || container.height - zoomOptions.margin * 2;
      var zoomTarget = active.zoomedHd || active.original;
      var naturalWidth = isSvg(zoomTarget) ? viewportWidth : zoomTarget.naturalWidth || viewportWidth;
      var naturalHeight = isSvg(zoomTarget) ? viewportHeight : zoomTarget.naturalHeight || viewportHeight;
      var _zoomTarget$getBoundi = zoomTarget.getBoundingClientRect(), top = _zoomTarget$getBoundi.top, left = _zoomTarget$getBoundi.left, width = _zoomTarget$getBoundi.width, height = _zoomTarget$getBoundi.height;
      var scaleX = Math.min(Math.max(width, naturalWidth), viewportWidth) / width;
      var scaleY = Math.min(Math.max(height, naturalHeight), viewportHeight) / height;
      var scale = Math.min(scaleX, scaleY);
      var translateX = (-left + (viewportWidth - width) / 2 + zoomOptions.margin + container.left) / scale;
      var translateY = (-top + (viewportHeight - height) / 2 + zoomOptions.margin + container.top) / scale;
      var transform = "scale(" + scale + ") translate3d(" + translateX + "px, " + translateY + "px, 0)";
      active.zoomed.style.transform = transform;
      if (active.zoomedHd) {
        active.zoomedHd.style.transform = transform;
      }
    };
    return new Promise2(function(resolve) {
      if (target && images.indexOf(target) === -1) {
        resolve(zoom);
        return;
      }
      var _handleOpenEnd = function _handleOpenEnd2() {
        isAnimating = false;
        active.zoomed.removeEventListener("transitionend", _handleOpenEnd2);
        active.original.dispatchEvent(createCustomEvent("medium-zoom:opened", {
          detail: { zoom }
        }));
        resolve(zoom);
      };
      if (active.zoomed) {
        resolve(zoom);
        return;
      }
      if (target) {
        active.original = target;
      } else if (images.length > 0) {
        var _images = images;
        active.original = _images[0];
      } else {
        resolve(zoom);
        return;
      }
      active.original.dispatchEvent(createCustomEvent("medium-zoom:open", {
        detail: { zoom }
      }));
      scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      isAnimating = true;
      active.zoomed = cloneTarget(active.original);
      document.body.appendChild(overlay);
      if (zoomOptions.template) {
        var template = isNode(zoomOptions.template) ? zoomOptions.template : document.querySelector(zoomOptions.template);
        active.template = document.createElement("div");
        active.template.appendChild(template.content.cloneNode(true));
        document.body.appendChild(active.template);
      }
      if (active.original.parentElement && active.original.parentElement.tagName === "PICTURE" && active.original.currentSrc) {
        active.zoomed.src = active.original.currentSrc;
      }
      document.body.appendChild(active.zoomed);
      window.requestAnimationFrame(function() {
        document.body.classList.add("medium-zoom--opened");
      });
      active.original.classList.add("medium-zoom-image--hidden");
      active.zoomed.classList.add("medium-zoom-image--opened");
      active.zoomed.addEventListener("click", close);
      active.zoomed.addEventListener("transitionend", _handleOpenEnd);
      if (active.original.getAttribute("data-zoom-src")) {
        active.zoomedHd = active.zoomed.cloneNode();
        active.zoomedHd.removeAttribute("srcset");
        active.zoomedHd.removeAttribute("sizes");
        active.zoomedHd.removeAttribute("loading");
        active.zoomedHd.src = active.zoomed.getAttribute("data-zoom-src");
        active.zoomedHd.onerror = function() {
          clearInterval(getZoomTargetSize);
          console.warn("Unable to reach the zoom image target " + active.zoomedHd.src);
          active.zoomedHd = null;
          _animate();
        };
        var getZoomTargetSize = setInterval(function() {
          if (active.zoomedHd.complete) {
            clearInterval(getZoomTargetSize);
            active.zoomedHd.classList.add("medium-zoom-image--opened");
            active.zoomedHd.addEventListener("click", close);
            document.body.appendChild(active.zoomedHd);
            _animate();
          }
        }, 10);
      } else if (active.original.hasAttribute("srcset")) {
        active.zoomedHd = active.zoomed.cloneNode();
        active.zoomedHd.removeAttribute("sizes");
        active.zoomedHd.removeAttribute("loading");
        var loadEventListener = active.zoomedHd.addEventListener("load", function() {
          active.zoomedHd.removeEventListener("load", loadEventListener);
          active.zoomedHd.classList.add("medium-zoom-image--opened");
          active.zoomedHd.addEventListener("click", close);
          document.body.appendChild(active.zoomedHd);
          _animate();
        });
      } else {
        _animate();
      }
    });
  };
  var close = function close2() {
    return new Promise2(function(resolve) {
      if (isAnimating || !active.original) {
        resolve(zoom);
        return;
      }
      var _handleCloseEnd = function _handleCloseEnd2() {
        active.original.classList.remove("medium-zoom-image--hidden");
        document.body.removeChild(active.zoomed);
        if (active.zoomedHd) {
          document.body.removeChild(active.zoomedHd);
        }
        document.body.removeChild(overlay);
        active.zoomed.classList.remove("medium-zoom-image--opened");
        if (active.template) {
          document.body.removeChild(active.template);
        }
        isAnimating = false;
        active.zoomed.removeEventListener("transitionend", _handleCloseEnd2);
        active.original.dispatchEvent(createCustomEvent("medium-zoom:closed", {
          detail: { zoom }
        }));
        active.original = null;
        active.zoomed = null;
        active.zoomedHd = null;
        active.template = null;
        resolve(zoom);
      };
      isAnimating = true;
      document.body.classList.remove("medium-zoom--opened");
      active.zoomed.style.transform = "";
      if (active.zoomedHd) {
        active.zoomedHd.style.transform = "";
      }
      if (active.template) {
        active.template.style.transition = "opacity 150ms";
        active.template.style.opacity = 0;
      }
      active.original.dispatchEvent(createCustomEvent("medium-zoom:close", {
        detail: { zoom }
      }));
      active.zoomed.addEventListener("transitionend", _handleCloseEnd);
    });
  };
  var toggle = function toggle2() {
    var _ref3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, target = _ref3.target;
    if (active.original) {
      return close();
    }
    return open({ target });
  };
  var getOptions = function getOptions2() {
    return zoomOptions;
  };
  var getImages = function getImages2() {
    return images;
  };
  var getZoomedImage = function getZoomedImage2() {
    return active.original;
  };
  var images = [];
  var eventListeners = [];
  var isAnimating = false;
  var scrollTop = 0;
  var zoomOptions = options;
  var active = {
    original: null,
    zoomed: null,
    zoomedHd: null,
    template: null
    // If the selector is omitted, it's replaced by the options
  };
  if (Object.prototype.toString.call(selector) === "[object Object]") {
    zoomOptions = selector;
  } else if (selector || typeof selector === "string") {
    attach(selector);
  }
  zoomOptions = _extends({
    margin: 0,
    background: "#fff",
    scrollOffset: 40,
    container: null,
    template: null
  }, zoomOptions);
  var overlay = createOverlay(zoomOptions.background);
  document.addEventListener("click", _handleClick);
  document.addEventListener("keyup", _handleKeyUp);
  document.addEventListener("scroll", _handleScroll);
  window.addEventListener("resize", close);
  var zoom = {
    open,
    close,
    toggle,
    update,
    clone,
    attach,
    detach,
    on,
    off,
    getOptions,
    getImages,
    getZoomedImage
  };
  return zoom;
};
function styleInject(css2, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var insertAt = ref2.insertAt;
  if (!css2 || typeof document === "undefined") {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css2;
  } else {
    style.appendChild(document.createTextNode(css2));
  }
}
var css = ".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";
styleInject(css);
const mediumZoom$1 = mediumZoom;
const defaultSelector = ":not(a) > img:not(.image-src, .visitor, .vp-sponsor-grid-image)";
const mediumZoomSymbol = Symbol("medium-zoom");
const createMediumZoomProvider = (app, router) => {
  const zoom = mediumZoom$1();
  zoom.refresh = (selector = defaultSelector) => {
    zoom.detach();
    zoom.attach(selector);
  };
  app.provide(mediumZoomSymbol, zoom);
  watch(
    () => router.route.path,
    // 使用 nextTick 时在 dev 环境下第一次进入页面无法触发
    () => setTimeout(() => zoom.refresh())
  );
};
const d = ["id", "host", "repo", "repoid", "category", "categoryid", "mapping", "term", "strict", "reactionsenabled", "emitmetadata", "inputposition", "theme", "lang", "loading"], l = /* @__PURE__ */ defineComponent({
  __name: "Giscus",
  props: {
    id: {},
    host: {},
    repo: {},
    repoId: {},
    category: {},
    categoryId: {},
    mapping: {},
    term: {},
    theme: {},
    strict: {},
    reactionsEnabled: {},
    emitMetadata: {},
    inputPosition: {},
    lang: {},
    loading: {}
  },
  setup(s) {
    const t = ref(false);
    return onMounted(() => {
      __vitePreload(() => import("./chunks/giscus-Ci9LqPcC.4CVynJju.js"), true ? __vite__mapDeps([]) : void 0).then(() => t.value = true);
    }), (e, m) => t.value ? (openBlock(), createElementBlock("giscus-widget", {
      key: 0,
      id: e.id,
      host: e.host,
      repo: e.repo,
      repoid: e.repoId,
      category: e.category,
      categoryid: e.categoryId,
      mapping: e.mapping,
      term: e.term,
      strict: e.strict,
      reactionsenabled: e.reactionsEnabled,
      emitmetadata: e.emitMetadata,
      inputposition: e.inputPosition,
      theme: e.theme,
      lang: e.lang,
      loading: e.loading
    }, null, 8, d)) : createCommentVNode("", true);
  }
});
function useFormatPath() {
  const { site } = useData();
  const route = useRoute();
  return computed(() => route.path.replace(site.value.base.replace(/\/$/, ""), ""));
}
function usePageId() {
  const { frontmatter } = useData();
  const formatPath = useFormatPath();
  return computed(() => frontmatter.value.pageId || formatPath.value);
}
const _hoisted_1$2 = ["src"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "MNavVisitor",
  setup(__props) {
    const DEV = inject("DEV");
    const { theme: theme2 } = useData();
    const { visitor } = theme2.value;
    return (_ctx, _cache) => {
      return !unref(DEV) && unref(visitor) ? (openBlock(), createElementBlock("img", {
        key: 0,
        class: "visitor",
        src: `https://visitor-badge.laobi.icu/badge?page_id=${unref(visitor).badgeId}`,
        onerror: "this.style.display='none'"
      }, null, 8, _hoisted_1$2)) : createCommentVNode("", true);
    };
  }
});
const MNavVisitor = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e376ee1a"]]);
const _hoisted_1$1 = {
  key: 0,
  class: "m-doc-footer"
};
const _hoisted_2 = { class: "m-doc-footer-message" };
const _hoisted_3 = ["src"];
const _hoisted_4 = { key: 1 };
const _hoisted_5 = {
  key: 0,
  class: "m-doc-footer-copyright"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MDocFooter",
  setup(__props) {
    const DEV = inject("DEV");
    const { theme: theme2 } = useData();
    const { footer, visitor } = theme2.value;
    const { hasSidebar } = useSidebar();
    const pageId = usePageId();
    const isDocFooterVisible = computed(() => {
      return true;
    });
    return (_ctx, _cache) => {
      var _a, _b;
      return isDocFooterVisible.value ? withDirectives((openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          !unref(DEV) && unref(visitor) ? (openBlock(), createElementBlock("img", {
            key: 0,
            class: "visitor",
            src: `https://visitor-badge.laobi.icu/badge?page_id=${unref(visitor).badgeId}.${unref(pageId)}`,
            title: "当前页面累计访问数",
            onerror: "this.style.display='none'"
          }, null, 8, _hoisted_3)) : createCommentVNode("", true),
          ((_a = unref(footer)) == null ? void 0 : _a.message) ? (openBlock(), createElementBlock("p", _hoisted_4, toDisplayString(unref(footer).message), 1)) : createCommentVNode("", true)
        ]),
        ((_b = unref(footer)) == null ? void 0 : _b.copyright) ? (openBlock(), createElementBlock("p", _hoisted_5, toDisplayString(unref(footer).copyright), 1)) : createCommentVNode("", true)
      ], 512)), [
        [vShow, unref(hasSidebar)]
      ]) : createCommentVNode("", true);
    };
  }
});
const MDocFooter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-fb8afcb1"]]);
const _hoisted_1 = { class: "doc-comments" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MLayout",
  setup(__props) {
    const { Layout } = theme;
    const { isDark, theme: theme$1, frontmatter } = useData();
    const pageId = usePageId();
    const { comment } = theme$1.value;
    const enableTransitions = () => "startViewTransition" in document && window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
    provide("toggle-appearance", async ({ clientX: x, clientY: y }) => {
      if (!enableTransitions()) {
        isDark.value = !isDark.value;
        return;
      }
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${Math.hypot(
          Math.max(x, innerWidth - x),
          Math.max(y, innerHeight - y)
        )}px at ${x}px ${y}px)`
      ];
      await document.startViewTransition(async () => {
        isDark.value = !isDark.value;
        await nextTick();
      }).ready;
      document.documentElement.animate(
        { clipPath: isDark.value ? clipPath.reverse() : clipPath },
        {
          duration: 300,
          easing: "ease-in",
          pseudoElement: `::view-transition-${isDark.value ? "old" : "new"}(root)`
        }
      );
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Layout), normalizeProps(guardReactiveProps(_ctx.$attrs)), createSlots({
        "nav-bar-title-after": withCtx(() => [
          createVNode(MNavVisitor)
        ]),
        "doc-after": withCtx(() => [
          createVNode(MDocFooter)
        ]),
        _: 2
      }, [
        unref(comment) && unref(frontmatter).comment !== false ? {
          name: "doc-footer-before",
          fn: withCtx(() => [
            createBaseVNode("div", _hoisted_1, [
              createVNode(unref(l), mergeProps({
                id: "comments",
                mapping: "specific",
                term: unref(pageId),
                strict: "1",
                reactionsEnabled: "1",
                emitMetadata: "0",
                inputPosition: "top",
                theme: unref(isDark) ? "dark" : "light",
                lang: "zh-CN",
                loading: "lazy"
              }, { ...unref(comment) }), null, 16, ["term", "theme"])
            ])
          ]),
          key: "0"
        } : void 0
      ]), 1040);
    };
  }
});
let homePageStyle;
const RawTheme = {
  extends: theme,
  Layout: () => {
    var _a;
    const props = {};
    const { frontmatter } = useData();
    if ((_a = frontmatter.value) == null ? void 0 : _a.layoutClass) {
      props.class = frontmatter.value.layoutClass;
    }
    return h(_sfc_main, props);
  },
  enhanceApp({ app, router }) {
    createMediumZoomProvider(app, router);
    app.provide("DEV", false);
    app.component("demo-preview", ye);
    app.component("MNavLinks", MNavLinks);
    if (typeof window !== "undefined") {
      watch(
        () => router.route.data.relativePath,
        () => updateHomePageStyle(
          /* /vitepress-nav-template/ 是为了兼容 GitHub Pages */
          location.pathname === "/" || location.pathname === "/vitepress-nav-template/"
        ),
        { immediate: true }
      );
    }
  }
};
if (typeof window !== "undefined") {
  const browser = navigator.userAgent.toLowerCase();
  if (browser.includes("chrome")) {
    document.documentElement.classList.add("browser-chrome");
  } else if (browser.includes("firefox")) {
    document.documentElement.classList.add("browser-firefox");
  } else if (browser.includes("safari")) {
    document.documentElement.classList.add("browser-safari");
  }
}
function updateHomePageStyle(value) {
  if (value) {
    if (homePageStyle)
      return;
    homePageStyle = document.createElement("style");
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`;
    document.body.appendChild(homePageStyle);
  } else {
    if (!homePageStyle)
      return;
    homePageStyle.remove();
    homePageStyle = void 0;
  }
}
function resolveThemeExtends(theme2) {
  if (theme2.extends) {
    const base = resolveThemeExtends(theme2.extends);
    return {
      ...base,
      ...theme2,
      async enhanceApp(ctx) {
        if (base.enhanceApp)
          await base.enhanceApp(ctx);
        if (theme2.enhanceApp)
          await theme2.enhanceApp(ctx);
      }
    };
  }
  return theme2;
}
const Theme = resolveThemeExtends(RawTheme);
const VitePressApp = defineComponent({
  name: "VitePressApp",
  setup() {
    const { site } = useData();
    onMounted(() => {
      watchEffect(() => {
        document.documentElement.lang = site.value.lang;
        document.documentElement.dir = site.value.dir;
      });
    });
    if (site.value.router.prefetchLinks) {
      usePrefetch();
    }
    useCopyCode();
    useCodeGroups();
    if (Theme.setup)
      Theme.setup();
    return () => h(Theme.Layout);
  }
});
async function createApp() {
  const router = newRouter();
  const app = newApp();
  app.provide(RouterSymbol, router);
  const data = initData(router.route);
  app.provide(dataSymbol, data);
  app.component("Content", Content);
  app.component("ClientOnly", ClientOnly);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: {
      get() {
        return data.frontmatter.value;
      }
    },
    $params: {
      get() {
        return data.page.value.params;
      }
    }
  });
  if (Theme.enhanceApp) {
    await Theme.enhanceApp({
      app,
      router,
      siteData: siteDataRef
    });
  }
  return { app, router, data };
}
function newApp() {
  return createSSRApp(VitePressApp);
}
function newRouter() {
  let isInitialPageLoad = inBrowser;
  let initialPath;
  return createRouter((path) => {
    let pageFilePath = pathToFile(path);
    let pageModule = null;
    if (pageFilePath) {
      if (isInitialPageLoad) {
        initialPath = pageFilePath;
      }
      if (isInitialPageLoad || initialPath === pageFilePath) {
        pageFilePath = pageFilePath.replace(/\.js$/, ".lean.js");
      }
      pageModule = __vitePreload(() => import(
        /*@vite-ignore*/
        pageFilePath
      ), true ? __vite__mapDeps([]) : void 0);
    }
    if (inBrowser) {
      isInitialPageLoad = false;
    }
    return pageModule;
  }, Theme.NotFound);
}
if (inBrowser) {
  createApp().then(({ app, router, data }) => {
    router.go().then(() => {
      useUpdateHead(router.route, data.site);
      app.mount("#app");
    });
  });
}
export {
  createApp
};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}