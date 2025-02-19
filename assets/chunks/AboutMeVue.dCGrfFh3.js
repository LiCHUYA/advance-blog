import { _ as _export_sfc, g as getPrefixCls, s as setGlobalConfig, c as getComponentPrefix, j as isUndefined, b as isNumber, k as isObject, u as unFragment, T as Tag$2, l as scrollToElement } from "./index.2Idoq-Jx.js";
import { C as CloseOutlined, A as AntdIcon } from "./CloseOutlined.gG5NVs8Y.js";
import { d as defineComponent, g as computed, I as createVNode, G as shallowRef, z as watchEffect, F as Fragment, h as ref, D as resolveComponent, o as openBlock, b as createBlock, w as withCtx, n as normalizeClass, t as toDisplayString, a as createTextVNode, r as renderSlot, k as createBaseVNode, a4 as toRefs, y as watch, a5 as isRef, j as onMounted, A as onUnmounted, c as createElementBlock, O as normalizeStyle, N as inject, Z as provide, a6 as reactive, e as createCommentVNode, M as mergeProps, a7 as getCurrentInstance, V as toRef, E as renderList, T as Transition, a8 as vShow, a9 as withDirectives, aa as createSlots, ab as cloneVNode, $ as withKeys, a1 as withModifiers, ac as normalizeProps, ad as createApp, C as onUpdated, ae as isVNode, m as unref, _ as _export_sfc$1, L as useRoute } from "./framework.b55ravPP.js";
import { T as Trigger, r as responsiveObserve, o as omit, u as usePickSlots, I as IconDown, a as IconRight, b as Input, c as IconCheckCircleFill, d as useI18n, e as caf, R as ResizeObserver, f as raf, C as Col, g as Row } from "./grid-col.-5NRhahx.js";
import { g as genComponentStyleHook, m as merge, c as capitalize, a as genPresetColor, _ as _extends, r as resetComponent, u as useConfigInject, b as classNames, d as _objectSpread2, i as isPresetColor, e as isPresetStatusColor, W as Wave, P as PropTypes, f as eventType, T as Typography } from "./index.jRmT4l5v.js";
import { i as index } from "./ResizeObserver.es.O3MJSaTq.js";
function t(t2) {
  return "object" == typeof t2 && null != t2 && 1 === t2.nodeType;
}
function e(t2, e2) {
  return (!e2 || "hidden" !== t2) && "visible" !== t2 && "clip" !== t2;
}
function n(t2, n2) {
  if (t2.clientHeight < t2.scrollHeight || t2.clientWidth < t2.scrollWidth) {
    var r2 = getComputedStyle(t2, null);
    return e(r2.overflowY, n2) || e(r2.overflowX, n2) || function(t3) {
      var e2 = function(t4) {
        if (!t4.ownerDocument || !t4.ownerDocument.defaultView)
          return null;
        try {
          return t4.ownerDocument.defaultView.frameElement;
        } catch (t5) {
          return null;
        }
      }(t3);
      return !!e2 && (e2.clientHeight < t3.scrollHeight || e2.clientWidth < t3.scrollWidth);
    }(t2);
  }
  return false;
}
function r(t2, e2, n2, r2, i2, o, l, d) {
  return o < t2 && l > e2 || o > t2 && l < e2 ? 0 : o <= t2 && d <= n2 || l >= e2 && d >= n2 ? o - t2 - r2 : l > e2 && d < n2 || o < t2 && d > n2 ? l - e2 + i2 : 0;
}
var i = function(e2, i2) {
  var o = window, l = i2.scrollMode, d = i2.block, f = i2.inline, h = i2.boundary, u = i2.skipOverflowHiddenElements, s = "function" == typeof h ? h : function(t2) {
    return t2 !== h;
  };
  if (!t(e2))
    throw new TypeError("Invalid target");
  for (var a, c, g = document.scrollingElement || document.documentElement, p = [], m = e2; t(m) && s(m); ) {
    if ((m = null == (c = (a = m).parentElement) ? a.getRootNode().host || null : c) === g) {
      p.push(m);
      break;
    }
    null != m && m === document.body && n(m) && !n(document.documentElement) || null != m && n(m, u) && p.push(m);
  }
  for (var w = o.visualViewport ? o.visualViewport.width : innerWidth, v = o.visualViewport ? o.visualViewport.height : innerHeight, W = window.scrollX || pageXOffset, H = window.scrollY || pageYOffset, b = e2.getBoundingClientRect(), y = b.height, E = b.width, M = b.top, V = b.right, x = b.bottom, I = b.left, C = "start" === d || "nearest" === d ? M : "end" === d ? x : M + y / 2, R = "center" === f ? I + E / 2 : "end" === f ? V : I, T = [], k = 0; k < p.length; k++) {
    var B = p[k], D = B.getBoundingClientRect(), O = D.height, X = D.width, Y = D.top, L = D.right, S = D.bottom, j = D.left;
    if ("if-needed" === l && M >= 0 && I >= 0 && x <= v && V <= w && M >= Y && x <= S && I >= j && V <= L)
      return T;
    var N = getComputedStyle(B), q = parseInt(N.borderLeftWidth, 10), z = parseInt(N.borderTopWidth, 10), A = parseInt(N.borderRightWidth, 10), F = parseInt(N.borderBottomWidth, 10), G = 0, J = 0, K = "offsetWidth" in B ? B.offsetWidth - B.clientWidth - q - A : 0, P = "offsetHeight" in B ? B.offsetHeight - B.clientHeight - z - F : 0, Q = "offsetWidth" in B ? 0 === B.offsetWidth ? 0 : X / B.offsetWidth : 0, U = "offsetHeight" in B ? 0 === B.offsetHeight ? 0 : O / B.offsetHeight : 0;
    if (g === B)
      G = "start" === d ? C : "end" === d ? C - v : "nearest" === d ? r(H, H + v, v, z, F, H + C, H + C + y, y) : C - v / 2, J = "start" === f ? R : "center" === f ? R - w / 2 : "end" === f ? R - w : r(W, W + w, w, q, A, W + R, W + R + E, E), G = Math.max(0, G + H), J = Math.max(0, J + W);
    else {
      G = "start" === d ? C - Y - z : "end" === d ? C - S + F + P : "nearest" === d ? r(Y, S, O, z, F + P, C, C + y, y) : C - (Y + O / 2) + P / 2, J = "start" === f ? R - j - q : "center" === f ? R - (j + X / 2) + K / 2 : "end" === f ? R - L + A + K : r(j, L, X, q, A + K, R, R + E, E);
      var Z = B.scrollLeft, $ = B.scrollTop;
      C += $ - (G = Math.max(0, Math.min($ + G / U, B.scrollHeight - O / U + P))), R += Z - (J = Math.max(0, Math.min(Z + J / Q, B.scrollWidth - X / Q + K)));
    }
    T.push({ el: B, top: G, left: J });
  }
  return T;
};
function isOptionsObject(options) {
  return options === Object(options) && Object.keys(options).length !== 0;
}
function defaultBehavior(actions, behavior) {
  if (behavior === void 0) {
    behavior = "auto";
  }
  var canSmoothScroll = "scrollBehavior" in document.body.style;
  actions.forEach(function(_ref) {
    var el = _ref.el, top = _ref.top, left = _ref.left;
    if (el.scroll && canSmoothScroll) {
      el.scroll({
        top,
        left,
        behavior
      });
    } else {
      el.scrollTop = top;
      el.scrollLeft = left;
    }
  });
}
function getOptions(options) {
  if (options === false) {
    return {
      block: "end",
      inline: "nearest"
    };
  }
  if (isOptionsObject(options)) {
    return options;
  }
  return {
    block: "start",
    inline: "nearest"
  };
}
function scrollIntoView(target, options) {
  var isTargetAttached = target.isConnected || target.ownerDocument.documentElement.contains(target);
  if (isOptionsObject(options) && typeof options.behavior === "function") {
    return options.behavior(isTargetAttached ? i(target, options) : []);
  }
  if (!isTargetAttached) {
    return;
  }
  var computeOptions = getOptions(options);
  return defaultBehavior(i(target, computeOptions), computeOptions.behavior);
}
const genTagStatusStyle = (token, status, cssVariableType) => {
  const capitalizedCssVariableType = capitalize(cssVariableType);
  return {
    [`${token.componentCls}-${status}`]: {
      color: token[`color${cssVariableType}`],
      background: token[`color${capitalizedCssVariableType}Bg`],
      borderColor: token[`color${capitalizedCssVariableType}Border`],
      [`&${token.componentCls}-borderless`]: {
        borderColor: "transparent"
      }
    }
  };
};
const genPresetStyle = (token) => genPresetColor(token, (colorKey, _ref) => {
  let {
    textColor,
    lightBorderColor,
    lightColor,
    darkColor
  } = _ref;
  return {
    [`${token.componentCls}-${colorKey}`]: {
      color: textColor,
      background: lightColor,
      borderColor: lightBorderColor,
      // Inverse color
      "&-inverse": {
        color: token.colorTextLightSolid,
        background: darkColor,
        borderColor: darkColor
      },
      [`&${token.componentCls}-borderless`]: {
        borderColor: "transparent"
      }
    }
  };
});
const genBaseStyle = (token) => {
  const {
    paddingXXS,
    lineWidth,
    tagPaddingHorizontal,
    componentCls
  } = token;
  const paddingInline = tagPaddingHorizontal - lineWidth;
  const iconMarginInline = paddingXXS - lineWidth;
  return {
    // Result
    [componentCls]: _extends(_extends({}, resetComponent(token)), {
      display: "inline-block",
      height: "auto",
      marginInlineEnd: token.marginXS,
      paddingInline,
      fontSize: token.tagFontSize,
      lineHeight: `${token.tagLineHeight}px`,
      whiteSpace: "nowrap",
      background: token.tagDefaultBg,
      border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
      borderRadius: token.borderRadiusSM,
      opacity: 1,
      transition: `all ${token.motionDurationMid}`,
      textAlign: "start",
      // RTL
      [`&${componentCls}-rtl`]: {
        direction: "rtl"
      },
      "&, a, a:hover": {
        color: token.tagDefaultColor
      },
      [`${componentCls}-close-icon`]: {
        marginInlineStart: iconMarginInline,
        color: token.colorTextDescription,
        fontSize: token.tagIconSize,
        cursor: "pointer",
        transition: `all ${token.motionDurationMid}`,
        "&:hover": {
          color: token.colorTextHeading
        }
      },
      [`&${componentCls}-has-color`]: {
        borderColor: "transparent",
        [`&, a, a:hover, ${token.iconCls}-close, ${token.iconCls}-close:hover`]: {
          color: token.colorTextLightSolid
        }
      },
      [`&-checkable`]: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        cursor: "pointer",
        [`&:not(${componentCls}-checkable-checked):hover`]: {
          color: token.colorPrimary,
          backgroundColor: token.colorFillSecondary
        },
        "&:active, &-checked": {
          color: token.colorTextLightSolid
        },
        "&-checked": {
          backgroundColor: token.colorPrimary,
          "&:hover": {
            backgroundColor: token.colorPrimaryHover
          }
        },
        "&:active": {
          backgroundColor: token.colorPrimaryActive
        }
      },
      [`&-hidden`]: {
        display: "none"
      },
      // To ensure that a space will be placed between character and `Icon`.
      [`> ${token.iconCls} + span, > span + ${token.iconCls}`]: {
        marginInlineStart: paddingInline
      }
    }),
    [`${componentCls}-borderless`]: {
      borderColor: "transparent",
      background: token.tagBorderlessBg
    }
  };
};
const useStyle = genComponentStyleHook("Tag", (token) => {
  const {
    fontSize,
    lineHeight,
    lineWidth,
    fontSizeIcon
  } = token;
  const tagHeight = Math.round(fontSize * lineHeight);
  const tagFontSize = token.fontSizeSM;
  const tagLineHeight = tagHeight - lineWidth * 2;
  const tagDefaultBg = token.colorFillAlter;
  const tagDefaultColor = token.colorText;
  const tagToken = merge(token, {
    tagFontSize,
    tagLineHeight,
    tagDefaultBg,
    tagDefaultColor,
    tagIconSize: fontSizeIcon - 2 * lineWidth,
    tagPaddingHorizontal: 8,
    tagBorderlessBg: token.colorFillTertiary
  });
  return [genBaseStyle(tagToken), genPresetStyle(tagToken), genTagStatusStyle(tagToken, "success", "Success"), genTagStatusStyle(tagToken, "processing", "Info"), genTagStatusStyle(tagToken, "error", "Error"), genTagStatusStyle(tagToken, "warning", "Warning")];
});
const checkableTagProps = () => ({
  prefixCls: String,
  checked: {
    type: Boolean,
    default: void 0
  },
  onChange: {
    type: Function
  },
  onClick: {
    type: Function
  },
  "onUpdate:checked": Function
});
const CheckableTag = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ACheckableTag",
  inheritAttrs: false,
  props: checkableTagProps(),
  // emits: ['update:checked', 'change', 'click'],
  setup(props, _ref) {
    let {
      slots,
      emit,
      attrs
    } = _ref;
    const {
      prefixCls
    } = useConfigInject("tag", props);
    const [wrapSSR, hashId] = useStyle(prefixCls);
    const handleClick = (e2) => {
      const {
        checked
      } = props;
      emit("update:checked", !checked);
      emit("change", !checked);
      emit("click", e2);
    };
    const cls = computed(() => classNames(prefixCls.value, hashId.value, {
      [`${prefixCls.value}-checkable`]: true,
      [`${prefixCls.value}-checkable-checked`]: props.checked
    }));
    return () => {
      var _a;
      return wrapSSR(createVNode("span", _objectSpread2(_objectSpread2({}, attrs), {}, {
        "class": [cls.value, attrs.class],
        "onClick": handleClick
      }), [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]));
    };
  }
});
const CheckableTag$1 = CheckableTag;
const tagProps = () => ({
  prefixCls: String,
  color: {
    type: String
  },
  closable: {
    type: Boolean,
    default: false
  },
  closeIcon: PropTypes.any,
  /** @deprecated `visible` will be removed in next major version. */
  visible: {
    type: Boolean,
    default: void 0
  },
  onClose: {
    type: Function
  },
  onClick: eventType(),
  "onUpdate:visible": Function,
  icon: PropTypes.any,
  bordered: {
    type: Boolean,
    default: true
  }
});
const Tag = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ATag",
  inheritAttrs: false,
  props: tagProps(),
  // emits: ['update:visible', 'close'],
  slots: Object,
  setup(props, _ref) {
    let {
      slots,
      emit,
      attrs
    } = _ref;
    const {
      prefixCls,
      direction
    } = useConfigInject("tag", props);
    const [wrapSSR, hashId] = useStyle(prefixCls);
    const visible = shallowRef(true);
    watchEffect(() => {
      if (props.visible !== void 0) {
        visible.value = props.visible;
      }
    });
    const handleCloseClick = (e2) => {
      e2.stopPropagation();
      emit("update:visible", false);
      emit("close", e2);
      if (e2.defaultPrevented) {
        return;
      }
      if (props.visible === void 0) {
        visible.value = false;
      }
    };
    const isInternalColor = computed(() => isPresetColor(props.color) || isPresetStatusColor(props.color));
    const tagClassName = computed(() => classNames(prefixCls.value, hashId.value, {
      [`${prefixCls.value}-${props.color}`]: isInternalColor.value,
      [`${prefixCls.value}-has-color`]: props.color && !isInternalColor.value,
      [`${prefixCls.value}-hidden`]: !visible.value,
      [`${prefixCls.value}-rtl`]: direction.value === "rtl",
      [`${prefixCls.value}-borderless`]: !props.bordered
    }));
    const handleClick = (e2) => {
      emit("click", e2);
    };
    return () => {
      var _a, _b, _c;
      const {
        icon = (_a = slots.icon) === null || _a === void 0 ? void 0 : _a.call(slots),
        color,
        closeIcon = (_b = slots.closeIcon) === null || _b === void 0 ? void 0 : _b.call(slots),
        closable = false
      } = props;
      const renderCloseIcon = () => {
        if (closable) {
          return closeIcon ? createVNode("span", {
            "class": `${prefixCls.value}-close-icon`,
            "onClick": handleCloseClick
          }, [closeIcon]) : createVNode(CloseOutlined, {
            "class": `${prefixCls.value}-close-icon`,
            "onClick": handleCloseClick
          }, null);
        }
        return null;
      };
      const tagStyle = {
        backgroundColor: color && !isInternalColor.value ? color : void 0
      };
      const iconNode = icon || null;
      const children = (_c = slots.default) === null || _c === void 0 ? void 0 : _c.call(slots);
      const kids = iconNode ? createVNode(Fragment, null, [iconNode, createVNode("span", null, [children])]) : children;
      const isNeedWave = props.onClick !== void 0;
      const tagNode = createVNode("span", _objectSpread2(_objectSpread2({}, attrs), {}, {
        "onClick": handleClick,
        "class": [tagClassName.value, attrs.class],
        "style": [tagStyle, attrs.style]
      }), [kids, renderCloseIcon()]);
      return wrapSSR(isNeedWave ? createVNode(Wave, null, {
        default: () => [tagNode]
      }) : tagNode);
    };
  }
});
Tag.CheckableTag = CheckableTag$1;
Tag.install = function(app) {
  app.component(Tag.name, Tag);
  app.component(CheckableTag$1.name, CheckableTag$1);
  return app;
};
const Tag$1 = Tag;
var GithubFilled$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" } }] }, "name": "github", "theme": "filled" };
const GithubFilledSvg = GithubFilled$2;
function _objectSpread$3(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$3(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var GithubFilled = function GithubFilled2(props, context) {
  var p = _objectSpread$3({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread$3({}, p, {
    "icon": GithubFilledSvg
  }), null);
};
GithubFilled.displayName = "GithubFilled";
GithubFilled.inheritAttrs = false;
const GithubFilled$1 = GithubFilled;
var GitlabFilled$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M910.5 553.2l-109-370.8c-6.8-20.4-23.1-34.1-44.9-34.1s-39.5 12.3-46.3 32.7l-72.2 215.4H386.2L314 181.1c-6.8-20.4-24.5-32.7-46.3-32.7s-39.5 13.6-44.9 34.1L113.9 553.2c-4.1 13.6 1.4 28.6 12.3 36.8l385.4 289 386.7-289c10.8-8.1 16.3-23.1 12.2-36.8z" } }] }, "name": "gitlab", "theme": "filled" };
const GitlabFilledSvg = GitlabFilled$2;
function _objectSpread$2(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$2(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var GitlabFilled = function GitlabFilled2(props, context) {
  var p = _objectSpread$2({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread$2({}, p, {
    "icon": GitlabFilledSvg
  }), null);
};
GitlabFilled.displayName = "GitlabFilled";
GitlabFilled.inheritAttrs = false;
const GitlabFilled$1 = GitlabFilled;
var ReadOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M928 161H699.2c-49.1 0-97.1 14.1-138.4 40.7L512 233l-48.8-31.3A255.2 255.2 0 00324.8 161H96c-17.7 0-32 14.3-32 32v568c0 17.7 14.3 32 32 32h228.8c49.1 0 97.1 14.1 138.4 40.7l44.4 28.6c1.3.8 2.8 1.3 4.3 1.3s3-.4 4.3-1.3l44.4-28.6C602 807.1 650.1 793 699.2 793H928c17.7 0 32-14.3 32-32V193c0-17.7-14.3-32-32-32zM324.8 721H136V233h188.8c35.4 0 69.8 10.1 99.5 29.2l48.8 31.3 6.9 4.5v462c-47.6-25.6-100.8-39-155.2-39zm563.2 0H699.2c-54.4 0-107.6 13.4-155.2 39V298l6.9-4.5 48.8-31.3c29.7-19.1 64.1-29.2 99.5-29.2H888v488zM396.9 361H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5zm223.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c0-4.1-3.2-7.5-7.1-7.5H627.1c-3.9 0-7.1 3.4-7.1 7.5zM396.9 501H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5zm416 0H627.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5z" } }] }, "name": "read", "theme": "outlined" };
const ReadOutlinedSvg = ReadOutlined$2;
function _objectSpread$1(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$1(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var ReadOutlined = function ReadOutlined2(props, context) {
  var p = _objectSpread$1({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread$1({}, p, {
    "icon": ReadOutlinedSvg
  }), null);
};
ReadOutlined.displayName = "ReadOutlined";
ReadOutlined.inheritAttrs = false;
const ReadOutlined$1 = ReadOutlined;
var TagsOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M483.2 790.3L861.4 412c1.7-1.7 2.5-4 2.3-6.3l-25.5-301.4c-.7-7.8-6.8-13.9-14.6-14.6L522.2 64.3c-2.3-.2-4.7.6-6.3 2.3L137.7 444.8a8.03 8.03 0 000 11.3l334.2 334.2c3.1 3.2 8.2 3.2 11.3 0zm62.6-651.7l224.6 19 19 224.6L477.5 694 233.9 450.5l311.9-311.9zm60.16 186.23a48 48 0 1067.88-67.89 48 48 0 10-67.88 67.89zM889.7 539.8l-39.6-39.5a8.03 8.03 0 00-11.3 0l-362 361.3-237.6-237a8.03 8.03 0 00-11.3 0l-39.6 39.5a8.03 8.03 0 000 11.3l243.2 242.8 39.6 39.5c3.1 3.1 8.2 3.1 11.3 0l407.3-406.6c3.1-3.1 3.1-8.2 0-11.3z" } }] }, "name": "tags", "theme": "outlined" };
const TagsOutlinedSvg = TagsOutlined$2;
function _objectSpread(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var TagsOutlined = function TagsOutlined2(props, context) {
  var p = _objectSpread({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread({}, p, {
    "icon": TagsOutlinedSvg
  }), null);
};
TagsOutlined.displayName = "TagsOutlined";
TagsOutlined.inheritAttrs = false;
const TagsOutlined$1 = TagsOutlined;
const _sfc_main$h = defineComponent({
  name: "Popover",
  components: {
    Trigger
  },
  props: {
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    defaultPopupVisible: {
      type: Boolean,
      default: false
    },
    title: String,
    content: String,
    trigger: {
      type: [String, Array],
      default: "hover"
    },
    position: {
      type: String,
      default: "top"
    },
    contentClass: {
      type: [String, Array, Object]
    },
    contentStyle: {
      type: Object
    },
    arrowClass: {
      type: [String, Array, Object]
    },
    arrowStyle: {
      type: Object
    },
    popupContainer: {
      type: [String, Object]
    }
  },
  emits: {
    "update:popupVisible": (visible) => true,
    "popupVisibleChange": (visible) => true
  },
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("popover");
    const _popupVisible = ref(props.defaultPopupVisible);
    const computedPopupVisible = computed(() => {
      var _a;
      return (_a = props.popupVisible) != null ? _a : _popupVisible.value;
    });
    const handlePopupVisibleChange = (visible) => {
      _popupVisible.value = visible;
      emit("update:popupVisible", visible);
      emit("popupVisibleChange", visible);
    };
    const contentCls = computed(() => [
      `${prefixCls}-popup-content`,
      props.contentClass
    ]);
    const arrowCls = computed(() => [
      `${prefixCls}-popup-arrow`,
      props.arrowClass
    ]);
    return {
      prefixCls,
      computedPopupVisible,
      contentCls,
      arrowCls,
      handlePopupVisibleChange
    };
  }
});
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_trigger = resolveComponent("trigger");
  return openBlock(), createBlock(_component_trigger, {
    class: normalizeClass(_ctx.prefixCls),
    trigger: _ctx.trigger,
    position: _ctx.position,
    "popup-visible": _ctx.computedPopupVisible,
    "popup-offset": 10,
    "content-class": _ctx.contentCls,
    "content-style": _ctx.contentStyle,
    "arrow-class": _ctx.arrowCls,
    "arrow-style": _ctx.arrowStyle,
    "show-arrow": "",
    "popup-container": _ctx.popupContainer,
    "animation-name": "zoom-in-fade-out",
    "auto-fit-transform-origin": "",
    onPopupVisibleChange: _ctx.handlePopupVisibleChange
  }, {
    content: withCtx(() => [
      createBaseVNode("div", {
        class: normalizeClass(`${_ctx.prefixCls}-title`)
      }, [
        renderSlot(_ctx.$slots, "title", {}, () => [
          createTextVNode(toDisplayString(_ctx.title), 1)
        ])
      ], 2),
      createBaseVNode("div", {
        class: normalizeClass(`${_ctx.prefixCls}-content`)
      }, [
        renderSlot(_ctx.$slots, "content", {}, () => [
          createTextVNode(toDisplayString(_ctx.content), 1)
        ])
      ], 2)
    ]),
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["class", "trigger", "position", "popup-visible", "content-class", "content-style", "arrow-class", "arrow-style", "popup-container", "onPopupVisibleChange"]);
}
var _Popover = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$d]]);
const Popover = Object.assign(_Popover, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Popover.name, _Popover);
  }
});
function useState(defaultValue) {
  const value = ref(defaultValue);
  const setValue = (newValue) => {
    value.value = newValue;
  };
  return [value, setValue];
}
var RenderFunction = defineComponent({
  name: "RenderFunction",
  props: {
    renderFunc: {
      type: Function,
      required: true
    }
  },
  render() {
    return this.renderFunc(this.$attrs);
  }
});
function useMergeState(defaultValue, props) {
  const { value } = toRefs(props);
  const [localValue, setLocalValue] = useState(!isUndefined(value.value) ? value.value : defaultValue);
  watch(value, (newVal) => {
    isUndefined(newVal) && setLocalValue(void 0);
  });
  const mergeValue = computed(() => !isUndefined(value.value) ? value.value : localValue.value);
  return [mergeValue, setLocalValue, localValue];
}
var __defProp$4 = Object.defineProperty;
var __getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
var __hasOwnProp$4 = Object.prototype.hasOwnProperty;
var __propIsEnum$4 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4.call(b, prop))
      __defNormalProp$4(a, prop, b[prop]);
  if (__getOwnPropSymbols$4)
    for (var prop of __getOwnPropSymbols$4(b)) {
      if (__propIsEnum$4.call(b, prop))
        __defNormalProp$4(a, prop, b[prop]);
    }
  return a;
};
const _sfc_main$g = defineComponent({
  name: "Tooltip",
  components: {
    Trigger
  },
  props: {
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    defaultPopupVisible: {
      type: Boolean,
      default: false
    },
    content: String,
    position: {
      type: String,
      default: "top"
    },
    mini: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String
    },
    contentClass: {
      type: [String, Array, Object]
    },
    contentStyle: {
      type: Object
    },
    arrowClass: {
      type: [String, Array, Object]
    },
    arrowStyle: {
      type: Object
    },
    popupContainer: {
      type: [String, Object]
    }
  },
  emits: {
    "update:popupVisible": (visible) => true,
    "popupVisibleChange": (visible) => true
  },
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("tooltip");
    const _popupVisible = ref(props.defaultPopupVisible);
    const computedPopupVisible = computed(() => {
      var _a;
      return (_a = props.popupVisible) != null ? _a : _popupVisible.value;
    });
    const handlePopupVisibleChange = (visible) => {
      _popupVisible.value = visible;
      emit("update:popupVisible", visible);
      emit("popupVisibleChange", visible);
    };
    const contentCls = computed(() => [
      `${prefixCls}-content`,
      props.contentClass,
      { [`${prefixCls}-mini`]: props.mini }
    ]);
    const computedContentStyle = computed(() => {
      if (props.backgroundColor || props.contentStyle) {
        return __spreadValues$4({
          backgroundColor: props.backgroundColor
        }, props.contentStyle);
      }
      return void 0;
    });
    const arrowCls = computed(() => [
      `${prefixCls}-popup-arrow`,
      props.arrowClass
    ]);
    const computedArrowStyle = computed(() => {
      if (props.backgroundColor || props.arrowStyle) {
        return __spreadValues$4({
          backgroundColor: props.backgroundColor
        }, props.arrowStyle);
      }
      return void 0;
    });
    return {
      prefixCls,
      computedPopupVisible,
      contentCls,
      computedContentStyle,
      arrowCls,
      computedArrowStyle,
      handlePopupVisibleChange
    };
  }
});
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Trigger = resolveComponent("Trigger");
  return openBlock(), createBlock(_component_Trigger, {
    class: normalizeClass(_ctx.prefixCls),
    trigger: "hover",
    position: _ctx.position,
    "popup-visible": _ctx.computedPopupVisible,
    "popup-offset": 10,
    "show-arrow": "",
    "content-class": _ctx.contentCls,
    "content-style": _ctx.computedContentStyle,
    "arrow-class": _ctx.arrowCls,
    "arrow-style": _ctx.computedArrowStyle,
    "popup-container": _ctx.popupContainer,
    "animation-name": "zoom-in-fade-out",
    "auto-fit-transform-origin": "",
    role: "tooltip",
    onPopupVisibleChange: _ctx.handlePopupVisibleChange
  }, {
    content: withCtx(() => [
      renderSlot(_ctx.$slots, "content", {}, () => [
        createTextVNode(toDisplayString(_ctx.content), 1)
      ])
    ]),
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["class", "position", "popup-visible", "content-class", "content-style", "arrow-class", "arrow-style", "popup-container", "onPopupVisibleChange"]);
}
var _Tooltip = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$c]]);
const Tooltip = Object.assign(_Tooltip, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Tooltip.name, _Tooltip);
  }
});
const SiderInjectionKey = Symbol("SiderInjectionKey");
function useResponsive(breakpoint, callback) {
  const resultBreakpoint = computed(() => isRef(breakpoint) ? breakpoint.value : breakpoint);
  let subscribeToken = "";
  onMounted(() => {
    subscribeToken = responsiveObserve.subscribe((screens, breakpointChecked) => {
      if (!resultBreakpoint.value)
        return;
      if (!breakpointChecked || breakpointChecked === resultBreakpoint.value) {
        callback(!!screens[resultBreakpoint.value]);
      }
    });
  });
  onUnmounted(() => {
    if (subscribeToken) {
      responsiveObserve.unsubscribe(subscribeToken);
    }
  });
}
const MenuInjectionKey = Symbol("MenuInjectionKey");
const LevelInjectionKey = Symbol("LevelInjectionKey");
const DataCollectorInjectionKey = Symbol("DataCollectorInjectionKey");
const _sfc_main$f = defineComponent({
  name: "IconMenuFold",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (ev) => true
  },
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-menu-fold`, { [`${prefixCls}-spin`]: props.spin }]);
    const innerStyle = computed(() => {
      const styles = {};
      if (props.size) {
        styles.fontSize = isNumber(props.size) ? `${props.size}px` : props.size;
      }
      if (props.rotate) {
        styles.transform = `rotate(${props.rotate}deg)`;
      }
      return styles;
    });
    const onClick = (ev) => {
      emit("click", ev);
    };
    return {
      cls,
      innerStyle,
      onClick
    };
  }
});
const _hoisted_1$7 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$6 = /* @__PURE__ */ createBaseVNode("path", { d: "M42 11H6M42 24H22M42 37H6M13.66 26.912l-4.82-3.118 4.82-3.118v6.236Z" }, null, -1);
const _hoisted_3$4 = [
  _hoisted_2$6
];
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.innerStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
  }, _hoisted_3$4, 14, _hoisted_1$7);
}
var _IconMenuFold = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$b]]);
const IconMenuFold = Object.assign(_IconMenuFold, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconMenuFold.name, _IconMenuFold);
  }
});
const _sfc_main$e = defineComponent({
  name: "IconMenuUnfold",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (ev) => true
  },
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-menu-unfold`, { [`${prefixCls}-spin`]: props.spin }]);
    const innerStyle = computed(() => {
      const styles = {};
      if (props.size) {
        styles.fontSize = isNumber(props.size) ? `${props.size}px` : props.size;
      }
      if (props.rotate) {
        styles.transform = `rotate(${props.rotate}deg)`;
      }
      return styles;
    });
    const onClick = (ev) => {
      emit("click", ev);
    };
    return {
      cls,
      innerStyle,
      onClick
    };
  }
});
const _hoisted_1$6 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode("path", { d: "M6 11h36M22 24h20M6 37h36M8 20.882 12.819 24 8 27.118v-6.236Z" }, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$5
];
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.innerStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
  }, _hoisted_3$3, 14, _hoisted_1$6);
}
var _IconMenuUnfold = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$a]]);
const IconMenuUnfold = Object.assign(_IconMenuUnfold, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconMenuUnfold.name, _IconMenuUnfold);
  }
});
function provideLevel(level) {
  const computedLevel = computed(() => isRef(level) ? level.value : level);
  provide(LevelInjectionKey, reactive({
    level: computedLevel
  }));
}
function useLevel(props) {
  const { provideNextLevel } = props || {};
  const levelContext = inject(LevelInjectionKey);
  const level = computed(() => (levelContext == null ? void 0 : levelContext.level) || 1);
  if (provideNextLevel) {
    const nextLevel = computed(() => level.value + 1);
    provideLevel(nextLevel);
  }
  return {
    level
  };
}
function getKeys(data, condition) {
  const keys = [];
  const loop = (list) => {
    list.forEach((item) => {
      if (condition(item)) {
        keys.push(item.key);
      }
      if (item.children) {
        loop(item.children);
      }
    });
  };
  loop(data);
  return keys;
}
function useMenuDataCollectorContext(isRoot = false) {
  const menuContext = isRoot ? void 0 : inject(DataCollectorInjectionKey);
  return menuContext;
}
function useMenuDataCollector(props) {
  const { key, type } = props;
  const data = ref([]);
  const menuContext = useMenuDataCollectorContext(type === "menu");
  const provideContext = {
    collectSubMenu(key2, children, isReport = false) {
      const item = {
        key: key2,
        children
      };
      if (isReport) {
        const oldOne = data.value.find((i2) => i2.key === key2);
        if (oldOne) {
          oldOne.children = children;
        } else {
          data.value.push(item);
        }
      } else {
        data.value = [...data.value, item];
      }
      if (isReport) {
        if (type === "popupMenu") {
          menuContext == null ? void 0 : menuContext.reportMenuData(data.value);
        } else if (type === "subMenu" && !isUndefined(key2)) {
          menuContext == null ? void 0 : menuContext.collectSubMenu(key2, data.value, true);
        }
      }
    },
    removeSubMenu(key2) {
      data.value = data.value.filter((item) => item.key !== key2);
    },
    collectMenuItem(key2) {
      data.value.push({ key: key2 });
    },
    removeMenuItem(key2) {
      data.value = data.value.filter((item) => item.key !== key2);
    },
    reportMenuData(reportData) {
      data.value = reportData;
      if (type === "subMenu" && !isUndefined(key)) {
        menuContext == null ? void 0 : menuContext.collectSubMenu(key, data.value, true);
      }
    }
  };
  provide(DataCollectorInjectionKey, provideContext);
  if (type === "subMenu" && !isUndefined(key)) {
    onMounted(() => {
      menuContext == null ? void 0 : menuContext.collectSubMenu(key, data.value);
    });
    onUnmounted(() => {
      menuContext == null ? void 0 : menuContext.removeSubMenu(key);
    });
  } else if (type === "popupMenu") {
    onMounted(() => {
      menuContext == null ? void 0 : menuContext.reportMenuData(data.value);
    });
  }
  return {
    menuData: data,
    subMenuKeys: computed(() => getKeys(data.value, (item) => !!item.children)),
    menuItemKeys: computed(() => getKeys(data.value, (item) => !item.children))
  };
}
function getPath(data, key) {
  const path = [];
  const loop = (list) => {
    for (let i2 = 0; i2 < list.length; i2++) {
      const item = list[i2];
      if (item.key === key) {
        return true;
      }
      if (item.children) {
        path.push(item.key);
        const matched = loop(item.children);
        if (matched) {
          return true;
        }
        path.pop();
      }
    }
    return false;
  };
  loop(data);
  return path;
}
function isSameKeys(keys1, keys2) {
  if (keys1.length !== keys2.length)
    return false;
  return keys1.toString() === keys2.toString();
}
function useMenuOpenState(props) {
  const {
    modelValue,
    defaultValue,
    autoOpen,
    autoOpenSelected,
    subMenuKeys,
    selectedKeys,
    menuData,
    accordion
  } = toRefs(props);
  const localValue = ref(!isUndefined(modelValue.value) ? modelValue.value : !isUndefined(defaultValue.value) ? defaultValue.value : []);
  const setLocalValue = (val) => {
    localValue.value = val;
  };
  watch(modelValue, () => {
    if (isUndefined(modelValue.value)) {
      setLocalValue([]);
    }
  });
  let mountedSubMenuKeys = [];
  onMounted(() => {
    mountedSubMenuKeys = [...subMenuKeys.value];
    let newOpenKeys = [];
    if (autoOpen.value) {
      newOpenKeys = accordion.value ? subMenuKeys.value.slice(0, 1) : [...subMenuKeys.value];
    }
    if (autoOpenSelected.value) {
      const pathList = selectedKeys.value.map((key) => getPath(menuData.value, key));
      if (pathList.length && (!autoOpen.value || accordion.value)) {
        newOpenKeys = accordion.value ? pathList[0] : [...new Set([].concat(...pathList))];
      }
    }
    if (newOpenKeys.length) {
      setLocalValue(newOpenKeys);
    }
  });
  let hasTriggered = false;
  watch(subMenuKeys, (currentKeys, prevKeys = []) => {
    if (hasTriggered || !isSameKeys(currentKeys, mountedSubMenuKeys)) {
      const newOpenKeys = openKeys.value.filter((key) => currentKeys.includes(key));
      if (autoOpen.value) {
        const keysAdded = currentKeys.filter((key) => !prevKeys.includes(key));
        newOpenKeys.push(...keysAdded);
      }
      setLocalValue(accordion.value ? newOpenKeys.slice(0, 1) : newOpenKeys);
    }
    hasTriggered = true;
  });
  const openKeys = computed(() => modelValue.value || localValue.value);
  return {
    openKeys,
    localOpenKeys: localValue,
    setOpenKeys: setLocalValue,
    open(key, level) {
      let newOpenKeys = [];
      if (openKeys.value.indexOf(key) > -1) {
        if (accordion.value && level === 1) {
          newOpenKeys = [];
        } else {
          newOpenKeys = openKeys.value.filter((i2) => i2 !== key);
        }
      } else if (accordion.value && level === 1) {
        newOpenKeys = [key];
      } else {
        newOpenKeys = openKeys.value.concat([key]);
      }
      setLocalValue(newOpenKeys);
      return newOpenKeys;
    }
  };
}
const _sfc_main$d = defineComponent({
  name: "BaseMenu",
  components: {
    IconMenuFold,
    IconMenuUnfold
  },
  inheritAttrs: false,
  props: {
    style: {
      type: Object
    },
    theme: {
      type: String,
      default: "light"
    },
    mode: {
      type: String,
      default: "vertical"
    },
    levelIndent: {
      type: Number
    },
    autoOpen: {
      type: Boolean
    },
    collapsed: {
      type: Boolean,
      default: void 0
    },
    defaultCollapsed: {
      type: Boolean
    },
    collapsedWidth: {
      type: Number
    },
    accordion: {
      type: Boolean
    },
    autoScrollIntoView: {
      type: Boolean
    },
    showCollapseButton: {
      type: Boolean
    },
    selectedKeys: {
      type: Array
    },
    defaultSelectedKeys: {
      type: Array,
      default: () => []
    },
    openKeys: {
      type: Array
    },
    defaultOpenKeys: {
      type: Array,
      default: () => []
    },
    scrollConfig: {
      type: Object
    },
    triggerProps: {
      type: Object
    },
    tooltipProps: {
      type: Object
    },
    autoOpenSelected: {
      type: Boolean
    },
    breakpoint: {
      type: String
    },
    popupMaxHeight: {
      type: [Boolean, Number],
      default: true
    },
    prefixCls: {
      type: String
    },
    inTrigger: {
      type: Boolean
    },
    siderCollapsed: {
      type: Boolean
    },
    isRoot: {
      type: Boolean
    }
  },
  emits: [
    "update:collapsed",
    "update:selectedKeys",
    "update:openKeys",
    "collapse",
    "menu-item-click",
    "sub-menu-click"
  ],
  setup(props, { emit, slots }) {
    const {
      style,
      mode,
      theme,
      levelIndent,
      accordion,
      showCollapseButton,
      scrollConfig,
      autoScrollIntoView,
      collapsedWidth,
      autoOpen,
      collapsed: propCollapsed,
      defaultCollapsed,
      selectedKeys: propSelectedKeys,
      defaultSelectedKeys,
      openKeys: propOpenKeys,
      defaultOpenKeys,
      triggerProps,
      tooltipProps,
      autoOpenSelected,
      breakpoint,
      popupMaxHeight,
      prefixCls,
      inTrigger,
      siderCollapsed,
      isRoot
    } = toRefs(props);
    const { subMenuKeys, menuData } = useMenuDataCollector({
      type: isRoot.value ? "menu" : "popupMenu"
    });
    const [selectedKeys, setSelectedKeys] = useMergeState(defaultSelectedKeys.value, reactive({
      value: propSelectedKeys
    }));
    const { openKeys, setOpenKeys, open } = useMenuOpenState(reactive({
      modelValue: propOpenKeys,
      defaultValue: defaultOpenKeys,
      autoOpen,
      autoOpenSelected,
      selectedKeys,
      subMenuKeys,
      menuData,
      accordion
    }));
    const [collapsed, setCollapsed] = useMergeState(defaultCollapsed.value, reactive({
      value: propCollapsed
    }));
    const computedCollapsed = computed(() => siderCollapsed.value || collapsed.value || mode.value === "popButton");
    const computedHasCollapseButton = computed(() => ["horizontal", "popButton"].indexOf(mode.value) < 0 && !inTrigger.value && showCollapseButton.value);
    const changeCollapsed = (newVal, type) => {
      if (newVal === collapsed.value)
        return;
      setCollapsed(newVal);
      emit("update:collapsed", newVal);
      emit("collapse", newVal, type);
    };
    const onCollapseBtnClick = () => {
      changeCollapsed(!collapsed.value, "clickTrigger");
    };
    useResponsive(breakpoint, (checked) => {
      changeCollapsed(!checked, "responsive");
    });
    const computedPrefixCls = computed(() => (prefixCls == null ? void 0 : prefixCls.value) || getPrefixCls("menu"));
    const classNames2 = computed(() => [
      computedPrefixCls.value,
      `${computedPrefixCls.value}-${theme == null ? void 0 : theme.value}`,
      {
        [`${computedPrefixCls.value}-horizontal`]: mode.value === "horizontal",
        [`${computedPrefixCls.value}-vertical`]: mode.value !== "horizontal",
        [`${computedPrefixCls.value}-collapsed`]: computedCollapsed.value,
        [`${computedPrefixCls.value}-pop`]: mode.value === "pop" || computedCollapsed.value,
        [`${computedPrefixCls.value}-pop-button`]: mode.value === "popButton"
      }
    ]);
    const computedStyle = computed(() => {
      const pxCollapsedWidth = isNumber(collapsedWidth.value) ? `${collapsedWidth.value}px` : void 0;
      const objectStyle = isObject(style.value) ? style.value : void 0;
      const width = computedCollapsed.value ? pxCollapsedWidth : objectStyle == null ? void 0 : objectStyle.width;
      return [
        objectStyle ? omit(objectStyle, ["width"]) : style.value,
        { width }
      ];
    });
    const expandIconDown = usePickSlots(slots, "expand-icon-down");
    const expandIconRight = usePickSlots(slots, "expand-icon-right");
    const menuContext = reactive({
      theme,
      mode,
      levelIndent,
      autoScrollIntoView,
      selectedKeys,
      openKeys,
      prefixCls: computedPrefixCls,
      scrollConfig,
      inTrigger,
      collapsed: computedCollapsed,
      triggerProps,
      tooltipProps,
      popupMaxHeight,
      expandIconDown,
      expandIconRight,
      onMenuItemClick: (key) => {
        setSelectedKeys([key]);
        emit("update:selectedKeys", [key]);
        emit("menu-item-click", key);
      },
      onSubMenuClick: (key, level) => {
        const newOpenKeys = open(key, level);
        setOpenKeys(newOpenKeys);
        emit("update:openKeys", newOpenKeys);
        emit("sub-menu-click", key, newOpenKeys);
      }
    });
    provide(MenuInjectionKey, menuContext);
    provideLevel(1);
    return {
      computedPrefixCls,
      classNames: classNames2,
      computedStyle,
      computedCollapsed,
      computedHasCollapseButton,
      onCollapseBtnClick
    };
  }
});
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IconMenuUnfold = resolveComponent("IconMenuUnfold");
  const _component_IconMenuFold = resolveComponent("IconMenuFold");
  return openBlock(), createElementBlock("div", mergeProps({ class: _ctx.classNames }, _ctx.$attrs, { style: _ctx.computedStyle }), [
    createBaseVNode("div", {
      class: normalizeClass(`${_ctx.computedPrefixCls}-inner`)
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2),
    _ctx.computedHasCollapseButton ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(`${_ctx.computedPrefixCls}-collapse-button`),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onCollapseBtnClick && _ctx.onCollapseBtnClick(...args))
    }, [
      renderSlot(_ctx.$slots, "collapse-icon", { collapsed: _ctx.computedCollapsed }, () => [
        _ctx.computedCollapsed ? (openBlock(), createBlock(_component_IconMenuUnfold, { key: 0 })) : (openBlock(), createBlock(_component_IconMenuFold, { key: 1 }))
      ])
    ], 2)) : createCommentVNode("v-if", true)
  ], 16);
}
var BaseMenu = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$9]]);
function getStyle(element, prop) {
  if (!element || !prop)
    return null;
  let styleName = prop;
  if (styleName === "float") {
    styleName = "cssFloat";
  }
  try {
    if (document.defaultView) {
      const computed2 = document.defaultView.getComputedStyle(element, "");
      return element.style[styleName] || computed2 ? computed2[styleName] : "";
    }
  } catch (e2) {
    return element.style[styleName];
  }
  return null;
}
function useMenuContext() {
  const menuContext = inject(MenuInjectionKey);
  return menuContext || {};
}
const generateId = /* @__PURE__ */ (() => {
  let i2 = 0;
  return (prefix = "") => {
    i2 += 1;
    return `${prefix}${i2}`;
  };
})();
function useMenu() {
  const instance = getCurrentInstance();
  const key = computed(() => (instance == null ? void 0 : instance.vnode.key) || generateId("__arco_menu"));
  return {
    key
  };
}
const _sfc_main$c = defineComponent({
  name: "MenuIndent",
  props: {
    level: {
      type: Number,
      default: 1
    }
  },
  setup() {
    const prefixCls = getPrefixCls("menu");
    const menuContext = useMenuContext();
    return {
      prefixCls,
      levelIndent: toRef(menuContext, "levelIndent")
    };
  }
});
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.level > 1 ? (openBlock(), createElementBlock("span", {
    key: 0,
    class: normalizeClass(`${_ctx.prefixCls}-indent-list`)
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.level - 1, (index2) => {
      return openBlock(), createElementBlock("span", {
        key: index2,
        class: normalizeClass(`${_ctx.prefixCls}-indent`),
        style: normalizeStyle(`width: ${_ctx.levelIndent}px`)
      }, null, 6);
    }), 128))
  ], 2)) : createCommentVNode("v-if", true);
}
var MenuIndent = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$8]]);
const _sfc_main$b = defineComponent({
  name: "ExpandTransition",
  setup() {
    return {
      onBeforeEnter(el) {
        el.style.height = "0";
      },
      onEnter(el) {
        el.style.height = `${el.scrollHeight}px`;
      },
      onAfterEnter(el) {
        el.style.height = "";
      },
      onBeforeLeave(el) {
        el.style.height = `${el.scrollHeight}px`;
      },
      onLeave(el) {
        el.style.height = `0`;
      },
      onAfterLeave(el) {
        el.style.height = ``;
      }
    };
  }
});
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, {
    onBeforeEnter: _ctx.onBeforeEnter,
    onEnter: _ctx.onEnter,
    onAfterEnter: _ctx.onAfterEnter,
    onBeforeLeave: _ctx.onBeforeLeave,
    onLeave: _ctx.onLeave,
    onAfterLeave: _ctx.onAfterLeave
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["onBeforeEnter", "onEnter", "onAfterEnter", "onBeforeLeave", "onLeave", "onAfterLeave"]);
}
var ExpandTransition = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$7]]);
const _sfc_main$a = defineComponent({
  name: "SubMenuInline",
  components: {
    MenuIndent,
    ExpandTransition
  },
  props: {
    title: {
      type: String
    },
    isChildrenSelected: {
      type: Boolean
    }
  },
  setup(props) {
    const { key } = useMenu();
    const { level } = useLevel({
      provideNextLevel: true
    });
    const menuContext = useMenuContext();
    const menuPrefixCls = computed(() => menuContext.prefixCls);
    const prefixCls = computed(() => `${menuPrefixCls.value}-inline`);
    const classNames2 = computed(() => [prefixCls.value]);
    const isSelected = computed(() => props.isChildrenSelected);
    const isOpen = computed(() => (menuContext.openKeys || []).indexOf(key.value) > -1);
    return {
      prefixCls,
      menuPrefixCls,
      classNames: classNames2,
      level,
      isSelected,
      isOpen,
      onHeaderClick: () => {
        menuContext.onSubMenuClick && menuContext.onSubMenuClick(key.value, level.value);
      }
    };
  }
});
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MenuIndent = resolveComponent("MenuIndent");
  const _component_ExpandTransition = resolveComponent("ExpandTransition");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.classNames)
  }, [
    createBaseVNode("div", {
      class: normalizeClass([
        `${_ctx.prefixCls}-header`,
        {
          [`${_ctx.menuPrefixCls}-selected`]: _ctx.isSelected,
          [`${_ctx.menuPrefixCls}-has-icon`]: _ctx.$slots.icon
        }
      ]),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onHeaderClick && _ctx.onHeaderClick(...args))
    }, [
      createVNode(_component_MenuIndent, { level: _ctx.level }, null, 8, ["level"]),
      _ctx.$slots.icon ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createBaseVNode("span", {
          class: normalizeClass(`${_ctx.menuPrefixCls}-icon`)
        }, [
          renderSlot(_ctx.$slots, "icon")
        ], 2),
        createBaseVNode("span", {
          class: normalizeClass(`${_ctx.menuPrefixCls}-title`)
        }, [
          renderSlot(_ctx.$slots, "title", {}, () => [
            createTextVNode(toDisplayString(_ctx.title), 1)
          ])
        ], 2)
      ], 64)) : renderSlot(_ctx.$slots, "title", { key: 1 }, () => [
        createTextVNode(toDisplayString(_ctx.title), 1)
      ]),
      createBaseVNode("span", {
        class: normalizeClass([
          `${_ctx.menuPrefixCls}-icon-suffix`,
          {
            [`is-open`]: _ctx.isOpen
          }
        ])
      }, [
        renderSlot(_ctx.$slots, "expand-icon-down")
      ], 2)
    ], 2),
    createVNode(_component_ExpandTransition, null, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", {
          class: normalizeClass(`${_ctx.prefixCls}-content`)
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2), [
          [vShow, _ctx.isOpen]
        ])
      ]),
      _: 3
    })
  ], 2);
}
var SubMenuInline = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$6]]);
const _sfc_main$9 = defineComponent({
  name: "SubMenuPop",
  components: {
    Menu: BaseMenu,
    Trigger,
    MenuIndent,
    RenderFunction
  },
  inheritAttrs: false,
  props: {
    title: {
      type: String
    },
    selectable: {
      type: Boolean
    },
    isChildrenSelected: {
      type: Boolean
    },
    popupMaxHeight: {
      type: [Boolean, Number],
      default: void 0
    }
  },
  setup(props) {
    const { key } = useMenu();
    const { level } = useLevel();
    const { selectable, isChildrenSelected, popupMaxHeight } = toRefs(props);
    const menuContext = useMenuContext();
    const { onSubMenuClick, onMenuItemClick } = menuContext;
    const menuPrefixCls = computed(() => menuContext.prefixCls);
    const mode = computed(() => menuContext.mode);
    const selectedKeys = computed(() => menuContext.selectedKeys || []);
    const prefixCls = computed(() => `${menuPrefixCls.value}-pop`);
    const isSelected = computed(() => selectable.value && selectedKeys.value.includes(key.value) || isChildrenSelected.value);
    const classNames2 = computed(() => [
      `${prefixCls.value}`,
      `${prefixCls.value}-header`,
      {
        [`${menuPrefixCls.value}-selected`]: isSelected.value
      }
    ]);
    const needPopOnBottom = computed(() => mode.value === "horizontal" && !menuContext.inTrigger);
    const popVisible = ref(false);
    const setPopVisible = (val) => {
      popVisible.value = val;
    };
    const triggerPrefixCls = getPrefixCls("trigger");
    const triggerClassNames = computed(() => {
      var _a;
      return [
        `${prefixCls.value}-trigger`,
        {
          [`${prefixCls.value}-trigger-dark`]: menuContext.theme === "dark"
        },
        (_a = menuContext.triggerProps) == null ? void 0 : _a.class
      ];
    });
    const triggerProps = computed(() => omit(menuContext.triggerProps || {}, ["class"]));
    return {
      menuPrefixCls,
      mode,
      level,
      classNames: classNames2,
      isSelected,
      selectedKeys,
      needPopOnBottom,
      popVisible,
      triggerPrefixCls,
      triggerClassNames,
      triggerProps,
      menuContext,
      popupMenuStyles: computed(() => {
        var _a;
        const maxHeight = (_a = popupMaxHeight.value) != null ? _a : menuContext.popupMaxHeight;
        if (isNumber(maxHeight))
          return { maxHeight: `${maxHeight}px` };
        return maxHeight ? {} : { maxHeight: "unset" };
      }),
      onClick: () => {
        onSubMenuClick && onSubMenuClick(key.value, level.value);
        selectable.value && onMenuItemClick && onMenuItemClick(key.value);
      },
      onMenuItemClick: (key2) => {
        onMenuItemClick && onMenuItemClick(key2);
        setPopVisible(false);
      },
      onVisibleChange: (visible) => {
        setPopVisible(visible);
      }
    };
  }
});
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MenuIndent = resolveComponent("MenuIndent");
  const _component_RenderFunction = resolveComponent("RenderFunction");
  const _component_Menu = resolveComponent("Menu");
  const _component_Trigger = resolveComponent("Trigger");
  return openBlock(), createBlock(_component_Trigger, mergeProps({
    trigger: "hover",
    class: _ctx.triggerClassNames,
    position: _ctx.needPopOnBottom ? "bl" : "rt",
    "show-arrow": "",
    "animation-class": "fade-in",
    "mouse-enter-delay": 50,
    "mouse-leave-delay": 50,
    "popup-offset": 4,
    "auto-fit-popup-min-width": true,
    duration: 100
  }, _ctx.triggerProps, {
    "unmount-on-close": false,
    "popup-visible": _ctx.popVisible,
    onPopupVisibleChange: _ctx.onVisibleChange
  }), {
    content: withCtx(() => [
      createVNode(_component_Menu, {
        "in-trigger": "",
        "prefix-cls": `${_ctx.triggerPrefixCls}-menu`,
        "selected-keys": _ctx.selectedKeys,
        theme: _ctx.menuContext.theme,
        "trigger-props": _ctx.menuContext.triggerProps,
        style: normalizeStyle(_ctx.popupMenuStyles),
        onMenuItemClick: _ctx.onMenuItemClick
      }, createSlots({
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 2
      }, [
        _ctx.menuContext.expandIconDown ? {
          name: "expand-icon-down",
          fn: withCtx(() => [
            createVNode(_component_RenderFunction, {
              "render-func": _ctx.menuContext.expandIconDown
            }, null, 8, ["render-func"])
          ])
        } : void 0,
        _ctx.menuContext.expandIconRight ? {
          name: "expand-icon-right",
          fn: withCtx(() => [
            createVNode(_component_RenderFunction, {
              "render-func": _ctx.menuContext.expandIconRight
            }, null, 8, ["render-func"])
          ])
        } : void 0
      ]), 1032, ["prefix-cls", "selected-keys", "theme", "trigger-props", "style", "onMenuItemClick"])
    ]),
    default: withCtx(() => [
      createBaseVNode("div", mergeProps({
        class: [
          _ctx.classNames,
          {
            [`${_ctx.menuPrefixCls}-has-icon`]: _ctx.$slots.icon
          }
        ],
        "aria-haspopup": "true"
      }, _ctx.$attrs, {
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
      }), [
        createCommentVNode(" header "),
        createVNode(_component_MenuIndent, { level: _ctx.level }, null, 8, ["level"]),
        _ctx.$slots.icon ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createBaseVNode("span", {
            class: normalizeClass(`${_ctx.menuPrefixCls}-icon`)
          }, [
            renderSlot(_ctx.$slots, "icon")
          ], 2),
          createBaseVNode("span", {
            class: normalizeClass(`${_ctx.menuPrefixCls}-title`)
          }, [
            renderSlot(_ctx.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(_ctx.title), 1)
            ])
          ], 2)
        ], 64)) : renderSlot(_ctx.$slots, "title", { key: 1 }, () => [
          createTextVNode(toDisplayString(_ctx.title), 1)
        ]),
        createCommentVNode(" suffix "),
        createBaseVNode("span", {
          class: normalizeClass(`${_ctx.menuPrefixCls}-icon-suffix`)
        }, [
          _ctx.needPopOnBottom ? renderSlot(_ctx.$slots, "expand-icon-down", { key: 0 }) : renderSlot(_ctx.$slots, "expand-icon-right", { key: 1 })
        ], 2),
        _ctx.isSelected && _ctx.mode === "horizontal" ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass(`${_ctx.menuPrefixCls}-selected-label`)
        }, null, 2)) : createCommentVNode("v-if", true)
      ], 16)
    ]),
    _: 3
  }, 16, ["class", "position", "popup-visible", "onPopupVisibleChange"]);
}
var SubMenuPop = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$5]]);
var __defProp$3 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
var SubMenu = defineComponent({
  name: "SubMenu",
  props: {
    key: {
      type: String
    },
    title: {
      type: String
    },
    selectable: {
      type: Boolean
    },
    popup: {
      type: [Boolean, Function],
      default: false
    },
    popupMaxHeight: {
      type: [Boolean, Number],
      default: void 0
    }
  },
  setup(props, {
    attrs
  }) {
    const {
      key
    } = useMenu();
    const {
      level
    } = useLevel();
    const {
      popup
    } = toRefs(props);
    const menuContext = useMenuContext();
    const computedPopup = computed(() => {
      const {
        mode,
        collapsed,
        inTrigger
      } = menuContext;
      const forcePopup = !!(typeof popup.value === "function" ? popup.value(level.value) : popup.value);
      return forcePopup || collapsed || inTrigger || mode !== "vertical";
    });
    const {
      subMenuKeys,
      menuItemKeys
    } = useMenuDataCollector({
      key: key.value,
      type: "subMenu"
    });
    const isChildrenSelected = computed(() => {
      const selectedKeys = menuContext.selectedKeys || [];
      const checkSelected = (menuKeys) => {
        for (let i2 = 0; i2 < selectedKeys.length; i2++) {
          const selectedKey = selectedKeys[i2];
          if (menuKeys.includes(selectedKey)) {
            return true;
          }
        }
        return false;
      };
      return checkSelected(subMenuKeys.value) || checkSelected(menuItemKeys.value);
    });
    return {
      subMenuKeys,
      menuItemKeys,
      isChildrenSelected,
      props,
      attrs,
      computedKey: key,
      computedPopup,
      expandIconDown: toRef(menuContext, "expandIconDown"),
      expandIconRight: toRef(menuContext, "expandIconRight")
    };
  },
  render() {
    const {
      props,
      attrs,
      computedKey,
      computedPopup,
      expandIconDown,
      expandIconRight,
      isChildrenSelected
    } = this;
    const _slots = __spreadProps$2(__spreadValues$3({}, this.$slots), {
      "expand-icon-down": this.$slots["expand-icon-down"] || expandIconDown || (() => [createVNode(IconDown, null, null)]),
      "expand-icon-right": this.$slots["expand-icon-right"] || expandIconRight || (() => [createVNode(IconRight, null, null)])
    });
    return computedPopup ? createVNode(SubMenuPop, mergeProps({
      "key": computedKey,
      "title": props.title,
      "selectable": props.selectable,
      "isChildrenSelected": isChildrenSelected,
      "popupMaxHeight": props.popupMaxHeight
    }, attrs), _slots) : createVNode(SubMenuInline, mergeProps({
      "key": computedKey,
      "title": props.title,
      "isChildrenSelected": isChildrenSelected
    }, attrs), _slots);
  }
});
const OVERFLOW_THRESHOLD = 10;
function getNodeWidth(el) {
  return el && +el.getBoundingClientRect().width.toFixed(2);
}
function translatePxToNumber(str) {
  const result = Number(str.replace("px", ""));
  return Number.isNaN(result) ? 0 : result;
}
var OverflowWrap = defineComponent({
  name: "MenuOverflowWrap",
  setup(_, {
    slots
  }) {
    const menuContext = useMenuContext();
    const overflowPrefixCls = `${menuContext.prefixCls}-overflow`;
    const overflowSubMenuClass = `${overflowPrefixCls}-sub-menu`;
    const overflowMenuItemClass = `${overflowPrefixCls}-hidden-menu-item`;
    const overflowSubMenuMirrorClass = `${overflowPrefixCls}-sub-menu-mirror`;
    const refWrapper = ref();
    const lastVisibleIndex = ref(null);
    const refResizeObserver = ref();
    function computeLastVisibleIndex() {
      const wrapperElement = refWrapper.value;
      const wrapperWidth = getNodeWidth(wrapperElement);
      const childNodeList = [].slice.call(wrapperElement.children);
      let menuItemIndex = 0;
      let currentRightWidth = 0;
      let overflowSubMenuWidth = 0;
      for (let i2 = 0; i2 < childNodeList.length; i2++) {
        const node = childNodeList[i2];
        const classNames2 = node.className.split(" ");
        const isOverflowSubMenu = classNames2.indexOf(overflowSubMenuClass) > -1;
        const isOverflowSubMenuMirror = classNames2.indexOf(overflowSubMenuMirrorClass) > -1;
        if (isOverflowSubMenu) {
          continue;
        }
        const nodeWidth = getNodeWidth(node) + translatePxToNumber(getStyle(node, "marginLeft")) + translatePxToNumber(getStyle(node, "marginRight"));
        if (isOverflowSubMenuMirror) {
          overflowSubMenuWidth = nodeWidth;
          continue;
        }
        currentRightWidth += nodeWidth;
        if (currentRightWidth + overflowSubMenuWidth + OVERFLOW_THRESHOLD > wrapperWidth) {
          lastVisibleIndex.value = menuItemIndex - 1;
          return;
        }
        menuItemIndex++;
      }
      lastVisibleIndex.value = null;
    }
    onMounted(() => {
      computeLastVisibleIndex();
      refResizeObserver.value = new index((entries) => {
        entries.forEach(computeLastVisibleIndex);
      });
      if (refWrapper.value) {
        refResizeObserver.value.observe(refWrapper.value);
      }
    });
    onUnmounted(() => {
      refResizeObserver.value && refResizeObserver.value.disconnect();
    });
    return () => {
      const renderSubMenu = (children, options) => {
        const {
          isMirror = false,
          props = {}
        } = options || {};
        return createVNode(SubMenu, mergeProps({
          "key": `__arco-menu-overflow-sub-menu${isMirror ? "-mirror" : ""}`,
          "class": isMirror ? overflowSubMenuMirrorClass : overflowSubMenuClass
        }, props), {
          title: () => createVNode("span", null, [createTextVNode("...")]),
          default: () => children
        });
      };
      const renderChildren = () => {
        var _a;
        const originChildren = ((_a = slots.default) == null ? void 0 : _a.call(slots)) || [];
        const children = unFragment(originChildren);
        let overflowSubMenu = null;
        const overflowSubMenuMirror = renderSubMenu(null, {
          isMirror: true
        });
        const menuItems = children.map((child, index2) => {
          const item = cloneVNode(child, lastVisibleIndex.value !== null && index2 > lastVisibleIndex.value ? {
            class: overflowMenuItemClass
          } : {
            class: ""
          });
          if (lastVisibleIndex.value !== null && index2 === lastVisibleIndex.value + 1) {
            const overflowMenuItems = children.slice(index2).map((child2) => cloneVNode(child2));
            overflowSubMenu = renderSubMenu(overflowMenuItems);
          }
          return item;
        });
        return [overflowSubMenuMirror, ...menuItems, overflowSubMenu];
      };
      return createVNode("div", {
        "class": `${overflowPrefixCls}-wrap`,
        "ref": refWrapper
      }, [renderChildren()]);
    };
  }
});
var __defProp$2 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
var _Menu = defineComponent({
  name: "Menu",
  components: {
    BaseMenu
  },
  inheritAttrs: false,
  props: {
    theme: {
      type: String
    },
    mode: {
      type: String,
      default: "vertical"
    }
  },
  setup(props, {
    attrs,
    slots
  }) {
    const {
      theme: propTheme,
      mode
    } = toRefs(props);
    const siderContext = inject(SiderInjectionKey, void 0);
    const siderCollapsed = computed(() => (siderContext == null ? void 0 : siderContext.collapsed) || false);
    const theme = computed(() => (propTheme == null ? void 0 : propTheme.value) || (siderContext == null ? void 0 : siderContext.theme) || "light");
    provide(MenuInjectionKey, void 0);
    provide(LevelInjectionKey, void 0);
    return () => createVNode(BaseMenu, mergeProps(props, attrs, {
      "theme": theme.value,
      "inTrigger": false,
      "siderCollapsed": siderCollapsed.value,
      "isRoot": true
    }), __spreadProps$1(__spreadValues$2({}, slots), {
      default: mode.value === "horizontal" && slots.default ? () => createVNode(OverflowWrap, null, {
        default: () => {
          var _a;
          return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
        }
      }) : slots.default
    }));
  }
});
var __defProp$1 = Object.defineProperty;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
var MenuItem = defineComponent({
  name: "MenuItem",
  inheritAttrs: false,
  props: {
    key: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click"],
  setup(props, {
    emit
  }) {
    const {
      key
    } = useMenu();
    const {
      level
    } = useLevel();
    const menuContext = useMenuContext();
    const refItemElement = ref();
    const isSelected = computed(() => (menuContext.selectedKeys || []).indexOf(key.value) > -1);
    const menuDataCollector = useMenuDataCollectorContext();
    onMounted(() => {
      menuDataCollector == null ? void 0 : menuDataCollector.collectMenuItem(key.value);
    });
    onUnmounted(() => {
      menuDataCollector == null ? void 0 : menuDataCollector.removeMenuItem(key.value);
    });
    function scrollTo() {
      if (menuContext.autoScrollIntoView && refItemElement.value && isSelected.value) {
        scrollIntoView(refItemElement.value, __spreadValues$1({
          behavior: "smooth",
          block: "nearest",
          scrollMode: "if-needed",
          boundary: document.documentElement
        }, menuContext.scrollConfig || {}));
      }
    }
    let timer;
    onMounted(() => {
      timer = setTimeout(() => {
        scrollTo();
      }, 500);
    });
    onUnmounted(() => {
      clearTimeout(timer);
    });
    watch([isSelected], () => {
      scrollTo();
    });
    return {
      menuContext,
      level,
      isSelected,
      refItemElement,
      onClick(e2) {
        if (props.disabled)
          return;
        menuContext.onMenuItemClick && menuContext.onMenuItemClick(key.value);
        emit("click", e2);
      }
    };
  },
  render() {
    var _a, _b;
    const {
      level,
      menuContext,
      disabled,
      isSelected,
      onClick
    } = this;
    const {
      prefixCls,
      collapsed,
      inTrigger,
      mode,
      tooltipProps
    } = menuContext;
    const needTooltip = collapsed && !inTrigger && level === 1;
    const needTextIndent = mode === "vertical" && level > 1;
    const children = ((_b = (_a = this.$slots).default) == null ? void 0 : _b.call(_a)) || [];
    const showIndent = needTextIndent && !inTrigger && !collapsed;
    const iconElement = this.$slots.icon && this.$slots.icon();
    const content = [showIndent && createVNode(MenuIndent, {
      "level": level
    }, null), iconElement && createVNode("span", {
      "class": `${prefixCls}-icon`
    }, [iconElement]), showIndent || iconElement ? createVNode("span", {
      "class": [`${prefixCls}-item-inner`, {
        [`${prefixCls}-title`]: iconElement
      }]
    }, [children]) : children].filter(Boolean);
    const itemElement = createVNode("div", mergeProps({
      "ref": "refItemElement",
      "class": [`${prefixCls}-item`, {
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-selected`]: isSelected,
        [`${prefixCls}-has-icon`]: iconElement
      }]
    }, this.$attrs, {
      "onClick": onClick
    }), [content, isSelected && mode === "horizontal" && createVNode("div", {
      "class": `${prefixCls}-selected-label`
    }, null)]);
    if (needTooltip) {
      const tooltipClassNames = [`${prefixCls}-item-tooltip`, tooltipProps == null ? void 0 : tooltipProps.class];
      return createVNode(Tooltip, mergeProps({
        "trigger": "hover",
        "position": "right",
        "class": tooltipClassNames
      }, omit(tooltipProps || {}, ["class"])), {
        default: () => itemElement,
        content: () => children
      });
    }
    return itemElement;
  }
});
const _sfc_main$8 = defineComponent({
  name: "MenuItemGroup",
  components: {
    MenuIndent
  },
  props: {
    title: {
      type: String
    }
  },
  setup() {
    const { level } = useLevel();
    const nextLevel = computed(() => level.value === 1 ? level.value + 1 : level.value);
    provideLevel(nextLevel);
    const menuContext = useMenuContext();
    const prefixCls = computed(() => menuContext.prefixCls);
    const classNames2 = computed(() => [`${prefixCls.value}-group`]);
    return {
      prefixCls,
      classNames: classNames2,
      level
    };
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MenuIndent = resolveComponent("MenuIndent");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.classNames)
  }, [
    createBaseVNode("div", {
      class: normalizeClass(`${_ctx.prefixCls}-group-title`)
    }, [
      createVNode(_component_MenuIndent, { level: _ctx.level }, null, 8, ["level"]),
      renderSlot(_ctx.$slots, "title", {}, () => [
        createTextVNode(toDisplayString(_ctx.title), 1)
      ])
    ], 2),
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var MenuItemGroup = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$4]]);
const Menu = Object.assign(_Menu, {
  Item: MenuItem,
  ItemGroup: MenuItemGroup,
  SubMenu,
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Menu.name, _Menu);
    app.component(componentPrefix + MenuItem.name, MenuItem);
    app.component(componentPrefix + MenuItemGroup.name, MenuItemGroup);
    app.component(componentPrefix + SubMenu.name, SubMenu);
  }
});
const _sfc_main$7 = defineComponent({
  name: "TypographyEditContent",
  components: {
    Input
  },
  props: {
    text: {
      type: String,
      required: true
    }
  },
  emits: ["change", "end", "update:text"],
  setup(_, { emit }) {
    const prefixCls = getPrefixCls("typography");
    const classNames2 = [`${prefixCls}-edit-content`];
    const inputRef = ref();
    function onChange(value) {
      emit("update:text", value);
      emit("change", value);
    }
    function onEnd() {
      emit("end");
    }
    onMounted(() => {
      if (!inputRef.value || !inputRef.value.$el)
        return;
      const inputEl = inputRef.value.$el.querySelector("input");
      if (!inputEl)
        return;
      inputEl.focus && inputEl.focus();
      const { length } = inputEl.value;
      inputEl.setSelectionRange(length, length);
    });
    return {
      classNames: classNames2,
      inputRef,
      onBlur: onEnd,
      onChange,
      onEnd
    };
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Input = resolveComponent("Input");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.classNames)
  }, [
    createVNode(_component_Input, {
      ref: "inputRef",
      "auto-size": "",
      "model-value": _ctx.text,
      onBlur: _ctx.onBlur,
      onInput: _ctx.onChange,
      onKeydown: withKeys(_ctx.onEnd, ["enter"])
    }, null, 8, ["model-value", "onBlur", "onInput", "onKeydown"])
  ], 2);
}
var EditContent = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$3]]);
const _sfc_main$6 = defineComponent({
  name: "IconCopy",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (ev) => true
  },
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-copy`, { [`${prefixCls}-spin`]: props.spin }]);
    const innerStyle = computed(() => {
      const styles = {};
      if (props.size) {
        styles.fontSize = isNumber(props.size) ? `${props.size}px` : props.size;
      }
      if (props.rotate) {
        styles.transform = `rotate(${props.rotate}deg)`;
      }
      return styles;
    });
    const onClick = (ev) => {
      emit("click", ev);
    };
    return {
      cls,
      innerStyle,
      onClick
    };
  }
});
const _hoisted_1$5 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$4 = /* @__PURE__ */ createBaseVNode("path", { d: "M20 6h18a2 2 0 0 1 2 2v22M8 16v24c0 1.105.891 2 1.996 2h20.007A1.99 1.99 0 0 0 32 40.008V15.997A1.997 1.997 0 0 0 30 14H10a2 2 0 0 0-2 2Z" }, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$4
];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.innerStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
  }, _hoisted_3$2, 14, _hoisted_1$5);
}
var _IconCopy = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$2]]);
const IconCopy = Object.assign(_IconCopy, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconCopy.name, _IconCopy);
  }
});
const _sfc_main$5 = defineComponent({
  name: "IconEdit",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (ev) => true
  },
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-edit`, { [`${prefixCls}-spin`]: props.spin }]);
    const innerStyle = computed(() => {
      const styles = {};
      if (props.size) {
        styles.fontSize = isNumber(props.size) ? `${props.size}px` : props.size;
      }
      if (props.rotate) {
        styles.transform = `rotate(${props.rotate}deg)`;
      }
      return styles;
    });
    const onClick = (ev) => {
      emit("click", ev);
    };
    return {
      cls,
      innerStyle,
      onClick
    };
  }
});
const _hoisted_1$4 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("path", { d: "m30.48 19.038 5.733-5.734a1 1 0 0 0 0-1.414l-5.586-5.586a1 1 0 0 0-1.414 0l-5.734 5.734m7 7L15.763 33.754a1 1 0 0 1-.59.286l-6.048.708a1 1 0 0 1-1.113-1.069l.477-6.31a1 1 0 0 1 .29-.631l14.7-14.7m7 7-7-7M6 42h36" }, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$3
];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.innerStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
  }, _hoisted_3$1, 14, _hoisted_1$4);
}
var _IconEdit = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$1]]);
const IconEdit = Object.assign(_IconEdit, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconEdit.name, _IconEdit);
  }
});
const _sfc_main$4 = defineComponent({
  name: "TypographyOperations",
  components: {
    Tooltip,
    IconCheckCircleFill,
    IconCopy,
    IconEdit
  },
  props: {
    editable: Boolean,
    copyable: Boolean,
    expandable: Boolean,
    isCopied: Boolean,
    isEllipsis: Boolean,
    expanded: Boolean,
    forceRenderExpand: Boolean,
    editTooltipProps: Object,
    copyTooltipProps: Object
  },
  emits: {
    edit: () => true,
    copy: () => true,
    expand: () => true
  },
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("typography");
    const showExpand = computed(() => props.forceRenderExpand || props.expandable && props.isEllipsis);
    const { t: t2 } = useI18n();
    return {
      prefixCls,
      showExpand,
      t: t2,
      onEditClick() {
        emit("edit");
      },
      onCopyClick() {
        emit("copy");
      },
      onExpandClick() {
        emit("expand");
      }
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IconEdit = resolveComponent("IconEdit");
  const _component_Tooltip = resolveComponent("Tooltip");
  const _component_IconCheckCircleFill = resolveComponent("IconCheckCircleFill");
  const _component_IconCopy = resolveComponent("IconCopy");
  return openBlock(), createElementBlock(Fragment, null, [
    _ctx.editable ? (openBlock(), createBlock(_component_Tooltip, mergeProps({
      key: 0,
      content: _ctx.t("typography.edit")
    }, _ctx.editTooltipProps), {
      default: withCtx(() => [
        createBaseVNode("span", {
          class: normalizeClass(`${_ctx.prefixCls}-operation-edit`),
          onClick: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.onEditClick && _ctx.onEditClick(...args), ["stop"]))
        }, [
          createVNode(_component_IconEdit)
        ], 2)
      ]),
      _: 1
    }, 16, ["content"])) : createCommentVNode("v-if", true),
    _ctx.copyable ? (openBlock(), createBlock(_component_Tooltip, normalizeProps(mergeProps({ key: 1 }, _ctx.copyTooltipProps)), {
      content: withCtx(() => [
        renderSlot(_ctx.$slots, "copy-tooltip", { copied: _ctx.isCopied }, () => [
          createTextVNode(toDisplayString(_ctx.isCopied ? _ctx.t("typography.copied") : _ctx.t("typography.copy")), 1)
        ])
      ]),
      default: withCtx(() => [
        createBaseVNode("span", {
          class: normalizeClass({
            [`${_ctx.prefixCls}-operation-copied`]: _ctx.isCopied,
            [`${_ctx.prefixCls}-operation-copy`]: !_ctx.isCopied
          }),
          onClick: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.onCopyClick && _ctx.onCopyClick(...args), ["stop"]))
        }, [
          renderSlot(_ctx.$slots, "copy-icon", { copied: _ctx.isCopied }, () => [
            _ctx.isCopied ? (openBlock(), createBlock(_component_IconCheckCircleFill, { key: 0 })) : (openBlock(), createBlock(_component_IconCopy, { key: 1 }))
          ])
        ], 2)
      ]),
      _: 3
    }, 16)) : createCommentVNode("v-if", true),
    _ctx.showExpand ? (openBlock(), createElementBlock("a", {
      key: 2,
      class: normalizeClass(`${_ctx.prefixCls}-operation-expand`),
      onClick: _cache[2] || (_cache[2] = withModifiers((...args) => _ctx.onExpandClick && _ctx.onExpandClick(...args), ["stop"]))
    }, [
      renderSlot(_ctx.$slots, "expand-node", { expanded: _ctx.expanded }, () => [
        createTextVNode(toDisplayString(_ctx.expanded ? _ctx.t("typography.collapse") : _ctx.t("typography.expand")), 1)
      ])
    ], 2)) : createCommentVNode("v-if", true)
  ], 64);
}
var Operations = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render]]);
let ellipsisContainer;
function styleToString(style) {
  const styleNames = Array.prototype.slice.apply(style);
  return styleNames.map((name) => `${name}: ${style.getPropertyValue(name)};`).join("");
}
function pxToNumber(value) {
  if (!value)
    return 0;
  const match = value.match(/^\d*(\.\d*)?/);
  return match ? Number(match[0]) : 0;
}
var measure = (originElement, ellipsisConfig, operations, fullText) => {
  if (!ellipsisContainer) {
    ellipsisContainer = document.createElement("div");
    document.body.appendChild(ellipsisContainer);
  }
  const {
    rows,
    suffix,
    ellipsisStr
  } = ellipsisConfig;
  const originStyle = window.getComputedStyle(originElement);
  const styleString = styleToString(originStyle);
  const lineHeight = pxToNumber(originStyle.lineHeight);
  const maxHeight = Math.round(lineHeight * rows + pxToNumber(originStyle.paddingTop) + pxToNumber(originStyle.paddingBottom));
  ellipsisContainer.setAttribute("style", styleString);
  ellipsisContainer.setAttribute("aria-hidden", "true");
  ellipsisContainer.style.height = "auto";
  ellipsisContainer.style.minHeight = "auto";
  ellipsisContainer.style.maxHeight = "auto";
  ellipsisContainer.style.position = "fixed";
  ellipsisContainer.style.left = "0";
  ellipsisContainer.style.top = "-99999999px";
  ellipsisContainer.style.zIndex = "-200";
  ellipsisContainer.style.whiteSpace = "normal";
  const vm = createApp({
    render() {
      return createVNode("span", null, [operations]);
    }
  });
  vm.mount(ellipsisContainer);
  const operationsChildNodes = Array.prototype.slice.apply(ellipsisContainer.childNodes[0].cloneNode(true).childNodes);
  vm.unmount();
  ellipsisContainer.innerHTML = "";
  const ellipsisTextNode = document.createTextNode(`${ellipsisStr}${suffix}`);
  ellipsisContainer.appendChild(ellipsisTextNode);
  operationsChildNodes.forEach((operationNode) => {
    ellipsisContainer.appendChild(operationNode);
  });
  const textNode = document.createTextNode(fullText);
  ellipsisContainer.insertBefore(textNode, ellipsisTextNode);
  function inRange() {
    return ellipsisContainer.offsetHeight <= maxHeight;
  }
  if (inRange()) {
    return {
      ellipsis: false,
      text: fullText
    };
  }
  function measureText(textNode2, startLoc = 0, endLoc = fullText.length, lastSuccessLoc = 0) {
    const midLoc = Math.floor((startLoc + endLoc) / 2);
    const currentText = fullText.slice(0, midLoc);
    textNode2.textContent = currentText;
    if (startLoc >= endLoc - 1) {
      for (let step = endLoc; step >= startLoc; step -= 1) {
        const currentStepText = fullText.slice(0, step);
        textNode2.textContent = currentStepText;
        if (inRange() || !currentStepText) {
          return;
        }
      }
    }
    if (inRange()) {
      measureText(textNode2, midLoc, endLoc, midLoc);
    } else {
      measureText(textNode2, startLoc, midLoc, lastSuccessLoc);
    }
  }
  measureText(textNode);
  return {
    text: textNode.textContent,
    ellipsis: true
  };
};
const clipboard = async (text) => {
  var _a;
  if ((_a = navigator.clipboard) == null ? void 0 : _a.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch (err) {
      console.error(err != null ? err : new DOMException("The request is not allowed", "NotAllowedError"));
    }
  }
  const span = document.createElement("span");
  span.textContent = text;
  span.style.whiteSpace = "pre";
  document.body.appendChild(span);
  const selection = window.getSelection();
  const range = window.document.createRange();
  selection == null ? void 0 : selection.removeAllRanges();
  range.selectNode(span);
  selection == null ? void 0 : selection.addRange(range);
  try {
    window.document.execCommand("copy");
  } catch (err) {
    console.error(`execCommand Error: ${err}`);
  }
  selection == null ? void 0 : selection.removeAllRanges();
  window.document.body.removeChild(span);
};
let container;
function getInnerText(node) {
  if (!node)
    return "";
  if (!container) {
    container = document.createElement("div");
    container.setAttribute("aria-hidden", "true");
    document.body.appendChild(container);
  }
  const vm = createApp({
    render() {
      return createVNode("div", null, [node]);
    }
  });
  vm.mount(container);
  const text = container.innerText;
  vm.unmount();
  return text;
}
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
function getComponentTags(props) {
  const {
    bold,
    mark,
    underline,
    delete: propDelete,
    code
  } = props;
  const componentTags = [];
  if (bold) {
    componentTags.push("b");
  }
  if (underline) {
    componentTags.push("u");
  }
  if (propDelete) {
    componentTags.push("del");
  }
  if (code) {
    componentTags.push("code");
  }
  if (mark) {
    componentTags.push("mark");
  }
  return componentTags;
}
function Wrap(props, children) {
  const {
    mark
  } = props;
  const componentTags = getComponentTags(props);
  const markStyle = isObject(mark) && mark.color ? {
    backgroundColor: mark.color
  } : {};
  return componentTags.reduce((content, Tag2) => {
    const attrs = Tag2 === "mark" ? {
      style: markStyle
    } : {};
    return createVNode(Tag2, attrs, _isSlot(content) ? content : {
      default: () => [content]
    });
  }, children);
}
function normalizeEllipsisConfig(config) {
  const showTooltip = !!config.showTooltip;
  const TooltipComponent = isObject(config.showTooltip) && config.showTooltip.type === "popover" ? Popover : Tooltip;
  const tooltipProps = isObject(config.showTooltip) && config.showTooltip.props || {};
  return __spreadProps(__spreadValues({
    rows: 1,
    suffix: "",
    ellipsisStr: "...",
    expandable: false,
    css: false
  }, omit(config, ["showTooltip"])), {
    showTooltip,
    TooltipComponent,
    tooltipProps
  });
}
var Base = defineComponent({
  name: "TypographyBase",
  inheritAttrs: false,
  props: {
    component: {
      type: String,
      required: true
    },
    type: {
      type: String
    },
    bold: {
      type: Boolean
    },
    mark: {
      type: [Boolean, Object],
      default: false
    },
    underline: {
      type: Boolean
    },
    delete: {
      type: Boolean
    },
    code: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    editable: {
      type: Boolean
    },
    editing: {
      type: Boolean,
      default: void 0
    },
    defaultEditing: {
      type: Boolean
    },
    editText: {
      type: String
    },
    copyable: {
      type: Boolean
    },
    copyText: {
      type: String
    },
    copyDelay: {
      type: Number,
      default: 3e3
    },
    ellipsis: {
      type: [Boolean, Object],
      default: false
    },
    editTooltipProps: {
      type: Object
    },
    copyTooltipProps: {
      type: Object
    }
  },
  emits: {
    "editStart": () => true,
    "change": (text) => true,
    "update:editText": (text) => true,
    "editEnd": () => true,
    "update:editing": (editing) => true,
    "copy": (text) => true,
    "ellipsis": (isEllipsis) => true,
    "expand": (expanded) => true
  },
  setup(props, {
    slots,
    emit,
    attrs
  }) {
    const {
      editing: propEditing,
      defaultEditing,
      ellipsis,
      copyable,
      editable,
      copyText,
      editText,
      copyDelay,
      component
    } = toRefs(props);
    const prefixCls = getPrefixCls("typography");
    const classNames2 = computed(() => [prefixCls, {
      [`${prefixCls}-${props.type}`]: props.type,
      [`${prefixCls}-disabled`]: props.disabled
    }]);
    const wrapperRef = ref();
    const fullText = ref("");
    const [editing, setEditing] = useMergeState(defaultEditing.value, reactive({
      value: propEditing
    }));
    const mergeEditing = computed(() => editable.value && editing.value);
    function onEditStart() {
      emit("update:editing", true);
      emit("editStart");
      setEditing(true);
    }
    function onEditChange(text) {
      emit("update:editText", text);
      emit("change", text);
    }
    function onEditEnd() {
      if (!editing.value)
        return;
      emit("update:editing", false);
      emit("editEnd");
      setEditing(false);
    }
    const isCopied = ref(false);
    let copyTimer = null;
    function onCopyClick() {
      var _a;
      const text = (_a = copyText.value) != null ? _a : fullText.value;
      clipboard(text || "");
      isCopied.value = true;
      emit("copy", text);
      copyTimer = setTimeout(() => {
        isCopied.value = false;
      }, copyDelay.value);
    }
    onUnmounted(() => {
      copyTimer && clearTimeout(copyTimer);
      copyTimer = null;
    });
    const isEllipsis = ref(false);
    const expanded = ref(false);
    const ellipsisText = ref("");
    const ellipsisConfig = computed(() => normalizeEllipsisConfig(isObject(ellipsis.value) && ellipsis.value || {}));
    let rafId = null;
    function onExpandClick() {
      const newVal = !expanded.value;
      expanded.value = newVal;
      emit("expand", newVal);
    }
    function renderOperations(forceRenderExpand = false) {
      if (ellipsisConfig.value.css) {
        return createVNode(Operations, {
          "editable": editable.value,
          "copyable": copyable.value,
          "expandable": ellipsisConfig.value.expandable,
          "isCopied": isCopied.value,
          "isEllipsis": showCSSTooltip.value,
          "expanded": expanded.value,
          "forceRenderExpand": forceRenderExpand || expanded.value,
          "editTooltipProps": props.editTooltipProps,
          "copyTooltipProps": props.copyTooltipProps,
          "onEdit": onEditStart,
          "onCopy": onCopyClick,
          "onExpand": onExpandClick
        }, {
          "copy-tooltip": slots["copy-tooltip"],
          "copy-icon": slots["copy-icon"],
          "expand-node": slots["expand-node"]
        });
      }
      return createVNode(Operations, {
        "editable": editable.value,
        "copyable": copyable.value,
        "expandable": ellipsisConfig.value.expandable,
        "isCopied": isCopied.value,
        "isEllipsis": isEllipsis.value,
        "expanded": expanded.value,
        "forceRenderExpand": forceRenderExpand,
        "editTooltipProps": props.editTooltipProps,
        "copyTooltipProps": props.copyTooltipProps,
        "onEdit": onEditStart,
        "onCopy": onCopyClick,
        "onExpand": onExpandClick
      }, {
        "copy-tooltip": slots["copy-tooltip"],
        "copy-icon": slots["copy-icon"],
        "expand-node": slots["expand-node"]
      });
    }
    function calEllipsis() {
      if (!wrapperRef.value)
        return;
      const {
        ellipsis: ellipsis2,
        text
      } = measure(wrapperRef.value, ellipsisConfig.value, renderOperations(!!ellipsisConfig.value.expandable), fullText.value);
      if (isEllipsis.value !== ellipsis2) {
        isEllipsis.value = ellipsis2;
        if (!ellipsisConfig.value.css) {
          emit("ellipsis", ellipsis2);
        }
      }
      if (ellipsisText.value !== text) {
        ellipsisText.value = text || "";
      }
    }
    function resizeOnNextFrame() {
      const needCalEllipsis = ellipsis.value && !expanded.value;
      if (!needCalEllipsis)
        return;
      caf(rafId);
      rafId = raf(() => {
        calEllipsis();
      });
    }
    onUnmounted(() => {
      caf(rafId);
    });
    watch(() => ellipsisConfig.value.rows, () => {
      resizeOnNextFrame();
    });
    watch(ellipsis, (newVal) => {
      if (newVal) {
        resizeOnNextFrame();
      } else {
        isEllipsis.value = false;
      }
    });
    let children = [];
    const updateFullText = () => {
      if (ellipsis.value || copyable.value || editable.value) {
        const _fullText = getInnerText(children);
        if (_fullText !== fullText.value) {
          fullText.value = _fullText;
          resizeOnNextFrame();
        }
      }
    };
    onMounted(updateFullText);
    onUpdated(updateFullText);
    const contentRef = ref();
    const showCSSTooltip = ref(false);
    const calTooltip = () => {
      if (wrapperRef.value && contentRef.value) {
        const _show = contentRef.value.offsetHeight > wrapperRef.value.offsetHeight;
        if (_show !== showCSSTooltip.value) {
          showCSSTooltip.value = _show;
          emit("ellipsis", _show);
        }
      }
    };
    const ellipsisStyle = computed(() => {
      if (expanded.value) {
        return {};
      }
      return {
        "overflow": "hidden",
        "text-overflow": "ellipsis",
        "display": "-webkit-box",
        "-webkit-line-clamp": ellipsisConfig.value.rows,
        "-webkit-box-orient": "vertical"
      };
    });
    return () => {
      var _a, _b;
      children = ((_a = slots.default) == null ? void 0 : _a.call(slots)) || [];
      if (mergeEditing.value) {
        const _editText = (_b = editText.value) != null ? _b : fullText.value;
        return createVNode(EditContent, {
          "text": _editText,
          "onChange": (text) => {
            if (text !== _editText) {
              onEditChange(text);
            }
          },
          "onEnd": onEditEnd
        }, null);
      }
      const {
        suffix,
        ellipsisStr,
        showTooltip,
        tooltipProps,
        TooltipComponent
      } = ellipsisConfig.value;
      const showEllipsis = isEllipsis.value && !expanded.value;
      const titleAttrs = showEllipsis && !showTooltip ? {
        title: fullText.value
      } : {};
      const Component = component.value;
      if (ellipsisConfig.value.css) {
        const Content2 = Wrap(props, children);
        const Outer = createVNode(Component, mergeProps({
          "class": classNames2.value,
          "ref": wrapperRef,
          "style": ellipsisStyle.value
        }, titleAttrs, attrs), {
          default: () => [createVNode("span", {
            "ref": contentRef
          }, [Content2])]
        });
        if (showCSSTooltip.value) {
          return createVNode(TooltipComponent, mergeProps(tooltipProps, {
            "onResize": () => calTooltip()
          }), {
            default: () => [Outer],
            content: () => fullText.value
          });
        }
        return createVNode(ResizeObserver, {
          "onResize": () => {
            calTooltip();
          }
        }, _isSlot(Outer) ? Outer : {
          default: () => [Outer]
        });
      }
      const Content = Wrap(props, showEllipsis ? ellipsisText.value : children);
      return createVNode(ResizeObserver, {
        "onResize": () => resizeOnNextFrame()
      }, {
        default: () => [createVNode(Component, mergeProps({
          "class": classNames2.value,
          "ref": wrapperRef
        }, titleAttrs, attrs), {
          default: () => [showEllipsis && showTooltip ? createVNode(TooltipComponent, tooltipProps, {
            default: () => [createVNode("span", null, [Content])],
            content: () => fullText.value
          }) : Content, showEllipsis ? ellipsisStr : null, suffix, renderOperations()]
        })]
      });
    };
  }
});
var TypographyParagraph = defineComponent({
  name: "TypographyParagraph",
  inheritAttrs: false,
  props: {
    blockquote: {
      type: Boolean
    },
    spacing: {
      type: String,
      default: "default"
    }
  },
  setup(props) {
    const {
      blockquote,
      spacing
    } = toRefs(props);
    const prefixCls = getPrefixCls("typography");
    const component = computed(() => (blockquote == null ? void 0 : blockquote.value) ? "blockquote" : "div");
    const classNames2 = computed(() => [{
      [`${prefixCls}-spacing-close`]: (spacing == null ? void 0 : spacing.value) === "close"
    }]);
    return {
      component,
      classNames: classNames2
    };
  },
  render() {
    const {
      component,
      classNames: classNames2
    } = this;
    return createVNode(Base, mergeProps({
      "class": classNames2
    }, this.$attrs, {
      "component": component
    }), this.$slots);
  }
});
var TypographyTitle = defineComponent({
  name: "TypographyTitle",
  inheritAttrs: false,
  props: {
    heading: {
      type: Number,
      default: 1
    }
  },
  setup(props) {
    const {
      heading
    } = toRefs(props);
    const component = computed(() => `h${heading == null ? void 0 : heading.value}`);
    return {
      component
    };
  },
  render() {
    const {
      component
    } = this;
    return createVNode(Base, mergeProps(this.$attrs, {
      "component": component
    }), this.$slots);
  }
});
var TypographyText = defineComponent({
  name: "TypographyText",
  inheritAttrs: false,
  props: {
    ellipsis: {
      type: [Boolean, Object],
      default: false
    }
  },
  setup(props) {
    const {
      ellipsis
    } = toRefs(props);
    const component = computed(() => (ellipsis == null ? void 0 : ellipsis.value) ? "div" : "span");
    return {
      component
    };
  },
  render() {
    const {
      ellipsis,
      component
    } = this;
    return createVNode(Base, mergeProps(this.$attrs, {
      "ellipsis": ellipsis,
      "component": component
    }), this.$slots);
  }
});
const _imports_0 = "/advance-blog/assets/logo.OetbGikX.jpg";
const feishuBooks = {
  javascript: {
    title: "JavaScript",
    cover: "https://z01apifrc1i.feishu.cn/wiki/space/7458499838590681107?ccm_open_type=lark_wiki_spaceLink&open_tab_from=wiki_home",
    category: "tech"
  },
  dataStructure: {
    title: "数据结构",
    cover: "https://z01apifrc1i.feishu.cn/wiki/space/7458163311533408275?ccm_open_type=lark_wiki_spaceLink&open_tab_from=wiki_home",
    category: "tech"
  },
  computerNetwork: {
    title: "计算机网络",
    cover: "https://z01apifrc1i.feishu.cn/wiki/space/7470701618988761092?ccm_open_type=lark_wiki_spaceLink&open_tab_from=wiki_home",
    category: "tech"
  }
};
const User = {
  github: "https://github.com/LiCHUYA",
  gitee: "https://gitee.com/chen-jingsheng-123",
  email: "203219348@qq.com"
};
const _hoisted_1$3 = { class: "header" };
const _hoisted_2$2 = { class: "header-content" };
const _hoisted_3 = { class: "profile-card" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "profile-header" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "avatar-container" }, [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_0,
      alt: "头像",
      class: "avatar"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("h3", { class: "profile-name" }, "advance"),
  /* @__PURE__ */ createBaseVNode("p", { class: "profile-role" }, "每天进步一点点")
], -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "profile-info" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "info-item" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "info-label" }, "Articles"),
    /* @__PURE__ */ createBaseVNode("div", { class: "info-value" }, "50+")
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "info-divider" }),
  /* @__PURE__ */ createBaseVNode("div", { class: "info-item" }, [
    /* @__PURE__ */ createBaseVNode("div", { class: "info-label" }, "Projects"),
    /* @__PURE__ */ createBaseVNode("div", { class: "info-value" }, "10+")
  ])
], -1);
const _hoisted_6 = { class: "social-links" };
const _hoisted_7 = ["href"];
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("span", null, "GitHub", -1);
const _hoisted_9 = ["href"];
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("span", null, "Gitee", -1);
const _hoisted_11 = { class: "intro-section" };
const _hoisted_12 = { class: "intro-header" };
const _hoisted_13 = { class: "title-area" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("span", { class: "highlight" }, "知识库", -1);
const _hoisted_15 = { class: "tech-stack" };
const _hoisted_16 = { class: "tags" };
const _hoisted_17 = { class: "content-area" };
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("div", { class: "bio" }, [
  /* @__PURE__ */ createBaseVNode("p", null, ' "简单比复杂更难，你必须努力让你的想法变得清晰明了，让它变得简单。一旦你做到了简单，你就能搬动大山。" -- 乔布斯 ')
], -1);
const _hoisted_19 = { class: "journey" };
const _sfc_main$3 = {
  __name: "Header",
  setup(__props) {
    const user = User;
    const techStack = [
      { name: "Vue3", color: "#42b883" },
      { name: "React", color: "#61dafb" },
      { name: "TypeScript", color: "#3178c6" },
      { name: "Node.js", color: "#339933" },
      { name: "Vite", color: "#646cff" }
    ];
    return (_ctx, _cache) => {
      const _component_a_col = Col;
      const _component_a_typography_text = TypographyText;
      const _component_a_typography_title = TypographyTitle;
      const _component_a_tag = Tag$2;
      const _component_a_typography_paragraph = TypographyParagraph;
      const _component_a_row = Row;
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("div", _hoisted_2$2, [
          createVNode(_component_a_row, {
            gutter: 48,
            align: "middle"
          }, {
            default: withCtx(() => [
              createVNode(_component_a_col, {
                xs: 24,
                md: 8
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_3, [
                    _hoisted_4,
                    _hoisted_5,
                    createBaseVNode("div", _hoisted_6, [
                      createBaseVNode("a", {
                        href: unref(user).github,
                        target: "_blank",
                        class: "social-link"
                      }, [
                        createVNode(unref(GithubFilled$1)),
                        _hoisted_8
                      ], 8, _hoisted_7),
                      createBaseVNode("a", {
                        href: unref(user).gitee,
                        target: "_blank",
                        class: "social-link"
                      }, [
                        createVNode(unref(GitlabFilled$1)),
                        _hoisted_10
                      ], 8, _hoisted_9)
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_a_col, {
                xs: 24,
                md: 16
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_11, [
                    createBaseVNode("div", _hoisted_12, [
                      createBaseVNode("div", _hoisted_13, [
                        createVNode(_component_a_typography_text, { class: "role-text" }, {
                          default: withCtx(() => [
                            createTextVNode(" Web Front-end Developer ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_a_typography_title, {
                          level: 1,
                          class: "name-title"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" advance "),
                            _hoisted_14
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_15, [
                        createBaseVNode("div", _hoisted_16, [
                          (openBlock(), createElementBlock(Fragment, null, renderList(techStack, (tech) => {
                            return createVNode(_component_a_tag, {
                              key: tech.name,
                              class: "tech-tag",
                              style: normalizeStyle({
                                "--tag-color": tech.color
                              })
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(tech.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["style"]);
                          }), 64))
                        ])
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_17, [
                      _hoisted_18,
                      createBaseVNode("div", _hoisted_19, [
                        createVNode(_component_a_typography_paragraph, { class: "journey-text" }, {
                          default: withCtx(() => [
                            createTextVNode(" 在技术领域中，我观察到一个有趣的现象：那些经验丰富的开发者往往具备一个共同特质 —— 他们能够快速适应和掌握新技术。这源于他们扎实的基础知识储备， 使他们只需通过阅读官方文档或观看技术教程，就能迅速理解核心概念并将其应用到实际项目中。 这让我深刻认识到：技术的根基决定了学习的高度。 ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_a_typography_paragraph, { class: "journey-text" }, {
                          default: withCtx(() => [
                            createTextVNode(" 回想起当初刚学习前端的时候,过度的追寻天花乱坠的技术栈,但慢慢的发现,基础不牢,地动山摇,于是开始从基础知识开始,一点点的重新开始学习,在重新学习的过程中,温故而知新,也不断记录自己成长,写知识库,帮助自己把碎片的知识集中化。 正如我的名字一样 advance 一样, 希望自己能够不断进步,不断学习,不断成长。 ")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
};
const _hoisted_1$2 = { style: { "perspective": "1200px" } };
const _hoisted_2$1 = { style: { marginBottom: "12px" } };
const _sfc_main$2 = {
  __name: "Book",
  props: {
    title: String,
    cover: String,
    tags: Array,
    isActive: Boolean,
    index: Number,
    isHovered: Boolean,
    description: String,
    link: String
  },
  setup(__props) {
    const { Title } = Typography;
    const props = __props;
    const calculateLeft = computed(() => {
      if (!props.isHovered) {
        return props.index * 50;
      }
      return props.index * 240;
    });
    const handleClick = () => {
      if (props.link) {
        window.open(props.link, "_blank");
      }
    };
    return (_ctx, _cache) => {
      const _component_a_typography_paragraph = TypographyParagraph;
      return openBlock(), createElementBlock("div", {
        style: normalizeStyle({
          opacity: __props.isActive ? 1 : 0.8,
          position: "absolute",
          left: calculateLeft.value + "px",
          transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: __props.isActive ? "translateY(-30px)" : "none",
          zIndex: __props.isActive ? 100 : __props.index + 1
        }),
        onMouseenter: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("hover", __props.index)),
        onMouseleave: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("hover", null))
      }, [
        createBaseVNode("div", _hoisted_1$2, [
          createBaseVNode("div", {
            style: normalizeStyle({
              transformStyle: "preserve-3d",
              transform: __props.isActive ? "rotateY(-15deg) scale(1.2)" : "none",
              transition: "transform 0.6s"
            })
          }, [
            createBaseVNode("div", {
              style: normalizeStyle({
                width: "240px",
                height: "340px",
                background: `url(${__props.cover}) center/cover`,
                borderRadius: "8px 16px 16px 8px",
                boxShadow: __props.isActive ? "0 20px 40px rgba(0, 0, 0, 0.2)" : "0 12px 24px rgba(0, 0, 0, 0.1)",
                transform: "translateZ(20px)"
              })
            }, null, 4),
            createBaseVNode("div", {
              style: normalizeStyle({
                position: "absolute",
                top: 0,
                left: 0,
                width: "240px",
                height: "340px",
                background: "rgba(255,255,255,0.98)",
                borderRadius: "16px 8px 8px 16px",
                padding: "24px",
                transform: "rotateY(30deg) translateZ(-20px)",
                transition: "transform 0.4s",
                cursor: "pointer"
              }),
              onClick: handleClick
            }, [
              createVNode(unref(ReadOutlined$1), { style: { fontSize: "24px", color: "#6c5ce7" } }),
              createVNode(unref(Title), {
                level: 4,
                style: { margin: "16px 0" }
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.title), 1)
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_2$1, [
                createVNode(unref(TagsOutlined$1), { style: { marginRight: "8px" } }),
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.tags, (tag, i2) => {
                  return openBlock(), createBlock(unref(Tag$1), {
                    key: i2,
                    color: "#6c5ce7",
                    style: { margin: "4px" }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(tag), 1)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ]),
              createVNode(_component_a_typography_paragraph, { style: {
                color: "#666",
                margin: "16px 0",
                fontSize: "14px",
                lineHeight: "1.6"
              } }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.description), 1)
                ]),
                _: 1
              })
            ], 4)
          ], 4)
        ])
      ], 36);
    };
  }
};
const _hoisted_1$1 = {
  id: "knowledge-base",
  style: { padding: "120px 20px" }
};
const _hoisted_2 = { style: { maxWidth: 800, margin: "0 auto 80px", textAlign: "center" } };
const _sfc_main$1 = {
  __name: "KnowledgeBase",
  setup(__props) {
    const { Title } = Typography;
    const activeIndex = ref(null);
    const selectedCategory = ref("all");
    const selectedKeys = ref([selectedCategory.value]);
    const isHovered = ref(false);
    watch(selectedKeys, (newVal) => {
      selectedCategory.value = newVal[0];
    });
    watch(selectedCategory, (newVal) => {
      selectedKeys.value = [newVal];
    });
    const categories = [
      { key: "all", label: "全部知识库", count: 5 },
      { key: "tech", label: "技术文档", count: 3 },
      { key: "design", label: "设计系统", count: 2 }
    ];
    const books = [
      {
        ...feishuBooks.dataStructure,
        tags: ["数据结构", "算法", "编程"],
        description: "探索计算机科学的核心基石，从线性结构到树形结构，从查找算法到排序算法，系统性地掌握数据组织与处理的艺术。",
        link: feishuBooks.dataStructure.cover
      },
      {
        ...feishuBooks.computerNetwork,
        tags: ["计算机网络", "网络协议", "网络编程"],
        description: "了解现代互联网架构，构建高性能网络应用。",
        link: feishuBooks.computerNetwork.cover
      },
      {
        ...feishuBooks.javascript,
        category: "design",
        tags: ["JavaScript", "前端开发", "异步编程"],
        description: "深入JavaScript核心机制，包括原型链、闭包、事件循环等重要概念。",
        link: feishuBooks.javascript.cover
      }
    ];
    const filteredBooks = computed(() => {
      return books.filter(
        (book) => selectedCategory.value === "all" || book.category === selectedCategory.value
      );
    });
    const menuContainerStyle = {
      background: "rgba(255,255,255,0.9)",
      borderRadius: "16px",
      padding: "24px 16px",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
      backdropFilter: "blur(12px)",
      position: "sticky",
      top: "100px",
      marginBottom: "24px"
    };
    const bookContainerStyle = {
      position: "relative",
      height: "600px",
      margin: "0 auto",
      width: "100%",
      overflow: "visible",
      paddingLeft: "40px"
      // 添加左侧padding，防止书本靠边
    };
    const getMenuItemStyle = (key) => ({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "8px 12px",
      borderRadius: "8px",
      transition: "all 0.3s",
      background: selectedCategory.value === key ? "rgba(108, 92, 231, 0.05)" : "transparent"
    });
    const getTagStyle = (key) => ({
      background: selectedCategory.value === key ? "rgba(108, 92, 231, 0.1)" : "rgba(0,0,0,0.04)",
      color: selectedCategory.value === key ? "#6c5ce7" : "#636e72",
      borderRadius: "6px",
      fontWeight: 500,
      transition: "all 0.3s"
    });
    const setActiveIndex = (index2) => {
      activeIndex.value = index2;
    };
    const setIsHovered = (value) => {
      isHovered.value = value;
    };
    const handleClick = (link) => {
      window.open(link, "_blank");
    };
    return (_ctx, _cache) => {
      const _component_a_typography_title = TypographyTitle;
      const _component_a_typography_paragraph = TypographyParagraph;
      const _component_a_typography_text = TypographyText;
      const _component_a_tag = Tag$2;
      const _component_a_menu_item = MenuItem;
      const _component_a_menu = Menu;
      const _component_a_col = Col;
      const _component_a_row = Row;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_a_typography_title, {
            level: 3,
            style: { marginBottom: 24, fontWeight: 500, color: "#2d3436" }
          }, {
            default: withCtx(() => [
              createTextVNode(" 构建个人知识体系的价值 ")
            ]),
            _: 1
          }),
          createVNode(_component_a_typography_paragraph, { style: {
            fontSize: 16,
            lineHeight: 1.8,
            color: "#636e72",
            textAlign: "left"
          } }, {
            default: withCtx(() => [
              createTextVNode(" 在信息爆炸的时代，系统化的知识管理已成为个人和组织保持竞争力的关键。通过建立结构化的知识库，我们不仅能够更高效地获取和整理信息，还能在知识的复利效应中持续成长。飞书知识库的设计理念正是基于这一认知，旨在帮助用户将碎片化的信息转化为可复用的知识资产。 ")
            ]),
            _: 1
          }),
          createVNode(_component_a_typography_paragraph, { style: {
            fontSize: 16,
            lineHeight: 1.8,
            color: "#636e72",
            textAlign: "left"
          } }, {
            default: withCtx(() => [
              createTextVNode(" 研究表明，定期整理和回顾笔记可以提升知识留存率高达40%。我们的知识库系统不仅是一个存储工具，更是一个促进知识流动和创新的平台。通过智能标签、关联推荐和版本控制等功能，用户可以轻松构建个性化的知识图谱，实现知识的持续迭代和优化。 ")
            ]),
            _: 1
          })
        ]),
        createVNode(_component_a_row, { gutter: 48 }, {
          default: withCtx(() => [
            createVNode(_component_a_col, {
              xs: 24,
              md: 6
            }, {
              default: withCtx(() => [
                createBaseVNode("div", { style: menuContainerStyle }, [
                  createVNode(unref(Title), {
                    level: 4,
                    style: { "margin-bottom": "16px", "padding-left": "8px", "color": "#2d3436" }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" 知识分类 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_a_typography_paragraph, { style: {
                    fontSize: 16,
                    lineHeight: 1.8,
                    color: "#636e72",
                    textAlign: "left"
                  } }, {
                    default: withCtx(() => [
                      createTextVNode(" 将鼠标放在书本上 点击进去 可查看每本知识库内容哦 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_a_menu, {
                    mode: "vertical",
                    selectedKeys: selectedKeys.value,
                    "onUpdate:selectedKeys": _cache[0] || (_cache[0] = ($event) => selectedKeys.value = $event),
                    style: { background: "transparent" }
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createElementBlock(Fragment, null, renderList(categories, (cat) => {
                        return createVNode(_component_a_menu_item, {
                          key: cat.key
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("div", {
                              style: normalizeStyle(getMenuItemStyle(cat.key))
                            }, [
                              createVNode(_component_a_typography_text, {
                                style: normalizeStyle({
                                  color: selectedCategory.value === cat.key ? "#6c5ce7" : "#2d3436"
                                })
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(cat.label), 1)
                                ]),
                                _: 2
                              }, 1032, ["style"]),
                              createVNode(_component_a_tag, {
                                style: normalizeStyle(getTagStyle(cat.key))
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(cat.count), 1)
                                ]),
                                _: 2
                              }, 1032, ["style"])
                            ], 4)
                          ]),
                          _: 2
                        }, 1024);
                      }), 64))
                    ]),
                    _: 1
                  }, 8, ["selectedKeys"])
                ])
              ]),
              _: 1
            }),
            createVNode(_component_a_col, {
              xs: 24,
              md: 18
            }, {
              default: withCtx(() => [
                createBaseVNode("div", {
                  style: bookContainerStyle,
                  onMouseenter: _cache[1] || (_cache[1] = ($event) => setIsHovered(true)),
                  onMouseleave: _cache[2] || (_cache[2] = ($event) => setIsHovered(false))
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(filteredBooks.value, (book, index2) => {
                    return openBlock(), createBlock(_sfc_main$2, mergeProps({ key: index2 }, book, {
                      index: index2,
                      "is-active": activeIndex.value === index2,
                      "is-hovered": isHovered.value,
                      onHover: setActiveIndex,
                      onClick: ($event) => handleClick(book.link)
                    }), null, 16, ["index", "is-active", "is-hovered", "onClick"]);
                  }), 128))
                ], 32)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
};
const KnowledgeBase = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__scopeId", "data-v-99222563"]]);
const _hoisted_1 = { style: { "width": "100%" } };
const _sfc_main = {
  __name: "AboutMeVue",
  setup(__props) {
    const route = useRoute();
    watch(
      () => route.hash,
      (newHash) => {
        if (newHash === "#knowledge-base") {
          setTimeout(() => {
            scrollToElement("knowledge-base", 80);
          }, 300);
        }
      }
    );
    onMounted(() => {
      if (route.hash === "#knowledge-base") {
        setTimeout(() => {
          scrollToElement("knowledge-base", 80);
        }, 300);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$3),
        createVNode(KnowledgeBase)
      ]);
    };
  }
};
export {
  _sfc_main as _
};
