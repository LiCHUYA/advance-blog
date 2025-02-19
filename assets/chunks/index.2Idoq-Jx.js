import { N as inject, a7 as getCurrentInstance, ae as isVNode, F as Fragment, ab as cloneVNode, d as defineComponent, o as openBlock, c as createElementBlock, r as renderSlot, n as normalizeClass, g as computed, O as normalizeStyle, k as createBaseVNode, V as toRef, a4 as toRefs, D as resolveComponent, b as createBlock, e as createCommentVNode, Z as provide, a6 as reactive, h as ref, w as withCtx, I as createVNode, a1 as withModifiers } from "./framework.b55ravPP.js";
const opt = Object.prototype.toString;
function isArray(obj) {
  return opt.call(obj) === "[object Array]";
}
function isNull(obj) {
  return opt.call(obj) === "[object Null]";
}
function isBoolean(obj) {
  return opt.call(obj) === "[object Boolean]";
}
function isObject(obj) {
  return opt.call(obj) === "[object Object]";
}
function isString(obj) {
  return opt.call(obj) === "[object String]";
}
function isNumber(obj) {
  return opt.call(obj) === "[object Number]" && obj === obj;
}
function isUndefined(obj) {
  return obj === void 0;
}
function isFunction(obj) {
  return typeof obj === "function";
}
function isEmptyObject(obj) {
  return isObject(obj) && Object.keys(obj).length === 0;
}
const isComponentInstance = (value) => {
  return (value == null ? void 0 : value.$) !== void 0;
};
const configProviderInjectionKey = Symbol("ArcoConfigProvider");
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
const COMPONENT_PREFIX = "A";
const CLASS_PREFIX = "arco";
const GLOBAL_CONFIG_NAME = "$arco";
const getComponentPrefix = (options) => {
  var _a;
  return (_a = options == null ? void 0 : options.componentPrefix) != null ? _a : COMPONENT_PREFIX;
};
const setGlobalConfig = (app, options) => {
  var _a;
  if (options && options.classPrefix) {
    app.config.globalProperties[GLOBAL_CONFIG_NAME] = __spreadProps(__spreadValues({}, (_a = app.config.globalProperties[GLOBAL_CONFIG_NAME]) != null ? _a : {}), {
      classPrefix: options.classPrefix
    });
  }
};
const getPrefixCls = (componentName) => {
  var _a, _b, _c;
  const instance = getCurrentInstance();
  const configProvider = inject(configProviderInjectionKey, void 0);
  const prefix = (_c = (_b = configProvider == null ? void 0 : configProvider.prefixCls) != null ? _b : (_a = instance == null ? void 0 : instance.appContext.config.globalProperties[GLOBAL_CONFIG_NAME]) == null ? void 0 : _a.classPrefix) != null ? _c : CLASS_PREFIX;
  if (componentName) {
    return `${prefix}-${componentName}`;
  }
  return prefix;
};
var ShapeFlags;
(function(ShapeFlags2) {
  ShapeFlags2[ShapeFlags2["ELEMENT"] = 1] = "ELEMENT";
  ShapeFlags2[ShapeFlags2["FUNCTIONAL_COMPONENT"] = 2] = "FUNCTIONAL_COMPONENT";
  ShapeFlags2[ShapeFlags2["STATEFUL_COMPONENT"] = 4] = "STATEFUL_COMPONENT";
  ShapeFlags2[ShapeFlags2["COMPONENT"] = 6] = "COMPONENT";
  ShapeFlags2[ShapeFlags2["TEXT_CHILDREN"] = 8] = "TEXT_CHILDREN";
  ShapeFlags2[ShapeFlags2["ARRAY_CHILDREN"] = 16] = "ARRAY_CHILDREN";
  ShapeFlags2[ShapeFlags2["SLOTS_CHILDREN"] = 32] = "SLOTS_CHILDREN";
  ShapeFlags2[ShapeFlags2["TELEPORT"] = 64] = "TELEPORT";
  ShapeFlags2[ShapeFlags2["SUSPENSE"] = 128] = "SUSPENSE";
  ShapeFlags2[ShapeFlags2["COMPONENT_SHOULD_KEEP_ALIVE"] = 256] = "COMPONENT_SHOULD_KEEP_ALIVE";
  ShapeFlags2[ShapeFlags2["COMPONENT_KEPT_ALIVE"] = 512] = "COMPONENT_KEPT_ALIVE";
})(ShapeFlags || (ShapeFlags = {}));
var PatchFlags;
(function(PatchFlags2) {
  PatchFlags2[PatchFlags2["TEXT"] = 1] = "TEXT";
  PatchFlags2[PatchFlags2["CLASS"] = 2] = "CLASS";
  PatchFlags2[PatchFlags2["STYLE"] = 4] = "STYLE";
  PatchFlags2[PatchFlags2["PROPS"] = 8] = "PROPS";
  PatchFlags2[PatchFlags2["FULL_PROPS"] = 16] = "FULL_PROPS";
  PatchFlags2[PatchFlags2["HYDRATE_EVENTS"] = 32] = "HYDRATE_EVENTS";
  PatchFlags2[PatchFlags2["STABLE_FRAGMENT"] = 64] = "STABLE_FRAGMENT";
  PatchFlags2[PatchFlags2["KEYED_FRAGMENT"] = 128] = "KEYED_FRAGMENT";
  PatchFlags2[PatchFlags2["UNKEYED_FRAGMENT"] = 256] = "UNKEYED_FRAGMENT";
  PatchFlags2[PatchFlags2["NEED_PATCH"] = 512] = "NEED_PATCH";
  PatchFlags2[PatchFlags2["DYNAMIC_SLOTS"] = 1024] = "DYNAMIC_SLOTS";
  PatchFlags2[PatchFlags2["DEV_ROOT_FRAGMENT"] = 2048] = "DEV_ROOT_FRAGMENT";
  PatchFlags2[PatchFlags2["HOISTED"] = -1] = "HOISTED";
  PatchFlags2[PatchFlags2["BAIL"] = -2] = "BAIL";
})(PatchFlags || (PatchFlags = {}));
const isElement = (vn) => {
  return Boolean(vn && vn.shapeFlag & 1);
};
const isComponent = (vn, type) => {
  return Boolean(vn && vn.shapeFlag & 6);
};
const isTextChildren = (child, children) => {
  return Boolean(child && child.shapeFlag & 8);
};
const isArrayChildren = (vn, children) => {
  return Boolean(vn && vn.shapeFlag & 16);
};
const isSlotsChildren = (vn, children) => {
  return Boolean(vn && vn.shapeFlag & 32);
};
const getFirstComponent = (children) => {
  var _a, _b;
  if (!children) {
    return void 0;
  }
  for (const child of children) {
    if (isElement(child) || isComponent(child)) {
      return child;
    }
    if (isArrayChildren(child, child.children)) {
      const result = getFirstComponent(child.children);
      if (result)
        return result;
    } else if (isSlotsChildren(child, child.children)) {
      const children2 = (_b = (_a = child.children).default) == null ? void 0 : _b.call(_a);
      if (children2) {
        const result = getFirstComponent(children2);
        if (result)
          return result;
      }
    } else if (isArray(child)) {
      const result = getFirstComponent(child);
      if (result)
        return result;
    }
  }
  return void 0;
};
const isEmptyChildren = (children) => {
  if (!children) {
    return true;
  }
  for (const item of children) {
    if (item.children) {
      return false;
    }
  }
  return true;
};
const mergeFirstChild = (children, extraProps) => {
  if (children && children.length > 0) {
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (isElement(child) || isComponent(child)) {
        const props = isFunction(extraProps) ? extraProps(child) : extraProps;
        children[i] = cloneVNode(child, props, true);
        return true;
      }
      const _children = getChildrenArray(child);
      if (_children && _children.length > 0) {
        const result = mergeFirstChild(_children, extraProps);
        if (result)
          return true;
      }
    }
  }
  return false;
};
const getChildrenArray = (vn) => {
  if (isArrayChildren(vn, vn.children)) {
    return vn.children;
  }
  if (isArray(vn)) {
    return vn;
  }
  return void 0;
};
const getFirstElementFromVNode = (vn) => {
  var _a, _b;
  if (isElement(vn)) {
    return vn.el;
  }
  if (isComponent(vn)) {
    if (((_a = vn.el) == null ? void 0 : _a.nodeType) === 1) {
      return vn.el;
    }
    if ((_b = vn.component) == null ? void 0 : _b.subTree) {
      const ele = getFirstElementFromVNode(vn.component.subTree);
      if (ele)
        return ele;
    }
  } else {
    const children = getChildrenArray(vn);
    return getFirstElementFromChildren(children);
  }
  return void 0;
};
const getFirstElementFromChildren = (children) => {
  if (children && children.length > 0) {
    for (const child of children) {
      const element = getFirstElementFromVNode(child);
      if (element)
        return element;
    }
  }
  return void 0;
};
const getAllElements = (children, includeText = false) => {
  var _a, _b;
  const results = [];
  for (const item of children != null ? children : []) {
    if (isElement(item) || isComponent(item) || includeText && isTextChildren(item, item.children)) {
      results.push(item);
    } else if (isArrayChildren(item, item.children)) {
      results.push(...getAllElements(item.children, includeText));
    } else if (isSlotsChildren(item, item.children)) {
      results.push(...getAllElements((_b = (_a = item.children).default) == null ? void 0 : _b.call(_a), includeText));
    } else if (isArray(item)) {
      results.push(...getAllElements(item, includeText));
    }
  }
  return results;
};
function unFragment(nodeList) {
  function loop(nodes) {
    const unFragmentNodeList = [];
    nodes.forEach((node) => {
      var _a, _b;
      if (isVNode(node) && node.type === Fragment) {
        if (isSlotsChildren(node, node.children)) {
          unFragmentNodeList.push(...loop(((_b = (_a = node.children).default) == null ? void 0 : _b.call(_a)) || []));
        } else if (isArrayChildren(node, node.children)) {
          unFragmentNodeList.push(...loop(node.children));
        } else if (isString(node.children)) {
          unFragmentNodeList.push(node.children);
        }
      } else {
        unFragmentNodeList.push(node);
      }
    });
    return unFragmentNodeList;
  }
  return loop(nodeList);
}
var _export_sfc = (sfc, props) => {
  for (const [key, val] of props) {
    sfc[key] = val;
  }
  return sfc;
};
const _sfc_main$5 = defineComponent({
  name: "IconHover",
  props: {
    prefix: {
      type: String
    },
    size: {
      type: String,
      default: "medium"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const prefixCls = getPrefixCls("icon-hover");
    return {
      prefixCls
    };
  }
});
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", {
    class: normalizeClass([
      _ctx.prefixCls,
      {
        [`${_ctx.prefix}-icon-hover`]: _ctx.prefix,
        [`${_ctx.prefixCls}-size-${_ctx.size}`]: _ctx.size !== "medium",
        [`${_ctx.prefixCls}-disabled`]: _ctx.disabled
      }
    ])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var IconHover = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
const _sfc_main$4 = defineComponent({
  name: "IconClose",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-close`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_1$2 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("path", { d: "M9.857 9.858 24 24m0 0 14.142 14.142M24 24 38.142 9.858M24 24 9.857 38.142" }, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$2
];
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
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
  }, _hoisted_3$1, 14, _hoisted_1$2);
}
var _IconClose = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const IconClose = Object.assign(_IconClose, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconClose.name, _IconClose);
  }
});
const _sfc_main$3 = defineComponent({
  name: "IconLoading",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-loading`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_1$1 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("path", { d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6" }, null, -1);
const _hoisted_3 = [
  _hoisted_2$1
];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
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
  }, _hoisted_3, 14, _hoisted_1$1);
}
var _IconLoading = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const IconLoading = Object.assign(_IconLoading, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconLoading.name, _IconLoading);
  }
});
const formItemInjectionKey = Symbol("ArcoFormItemContext");
const useFormItem = ({
  size,
  disabled,
  error,
  uninject
} = {}) => {
  const formItemCtx = !uninject ? inject(formItemInjectionKey, {}) : {};
  const mergedSize = computed(() => {
    var _a;
    return (_a = size == null ? void 0 : size.value) != null ? _a : formItemCtx.size;
  });
  const mergedDisabled = computed(() => (disabled == null ? void 0 : disabled.value) || formItemCtx.disabled);
  const mergedError = computed(() => (error == null ? void 0 : error.value) || formItemCtx.error);
  const feedback = toRef(formItemCtx, "feedback");
  const eventHandlers = toRef(formItemCtx, "eventHandlers");
  return {
    formItemCtx,
    mergedSize,
    mergedDisabled,
    mergedError,
    feedback,
    eventHandlers
  };
};
const useSize = (size, { defaultValue = "medium" } = {}) => {
  const configProviderCtx = inject(configProviderInjectionKey, void 0);
  const mergedSize = computed(() => {
    var _a, _b;
    return (_b = (_a = size == null ? void 0 : size.value) != null ? _a : configProviderCtx == null ? void 0 : configProviderCtx.size) != null ? _b : defaultValue;
  });
  return {
    mergedSize
  };
};
const buttonGroupInjectionKey = Symbol("ArcoButtonGroup");
const _sfc_main$2 = defineComponent({
  name: "Button",
  components: {
    IconLoading
  },
  props: {
    type: {
      type: String
    },
    shape: {
      type: String
    },
    status: {
      type: String
    },
    size: {
      type: String
    },
    long: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean
    },
    htmlType: {
      type: String,
      default: "button"
    },
    href: String
  },
  emits: {
    click: (ev) => true
  },
  setup(props, { emit }) {
    const { size, disabled } = toRefs(props);
    const prefixCls = getPrefixCls("btn");
    const groupContext = inject(buttonGroupInjectionKey, void 0);
    const _size = computed(() => {
      var _a;
      return (_a = size.value) != null ? _a : groupContext == null ? void 0 : groupContext.size;
    });
    const _disabled = computed(() => Boolean(disabled.value || (groupContext == null ? void 0 : groupContext.disabled)));
    const { mergedSize: _mergedSize, mergedDisabled } = useFormItem({
      size: _size,
      disabled: _disabled
    });
    const { mergedSize } = useSize(_mergedSize);
    const cls = computed(() => {
      var _a, _b, _c, _d, _e, _f;
      return [
        prefixCls,
        `${prefixCls}-${(_b = (_a = props.type) != null ? _a : groupContext == null ? void 0 : groupContext.type) != null ? _b : "secondary"}`,
        `${prefixCls}-shape-${(_d = (_c = props.shape) != null ? _c : groupContext == null ? void 0 : groupContext.shape) != null ? _d : "square"}`,
        `${prefixCls}-size-${mergedSize.value}`,
        `${prefixCls}-status-${(_f = (_e = props.status) != null ? _e : groupContext == null ? void 0 : groupContext.status) != null ? _f : "normal"}`,
        {
          [`${prefixCls}-long`]: props.long,
          [`${prefixCls}-loading`]: props.loading,
          [`${prefixCls}-disabled`]: mergedDisabled.value,
          [`${prefixCls}-link`]: isString(props.href)
        }
      ];
    });
    const handleClick = (ev) => {
      if (props.disabled || props.loading) {
        ev.preventDefault();
        return;
      }
      emit("click", ev);
    };
    return {
      prefixCls,
      cls,
      mergedDisabled,
      handleClick
    };
  }
});
const _hoisted_1 = ["href"];
const _hoisted_2 = ["type", "disabled"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_loading = resolveComponent("icon-loading");
  return _ctx.href ? (openBlock(), createElementBlock("a", {
    key: 0,
    class: normalizeClass([
      _ctx.cls,
      { [`${_ctx.prefixCls}-only-icon`]: _ctx.$slots.icon && !_ctx.$slots.default }
    ]),
    href: _ctx.mergedDisabled || _ctx.loading ? void 0 : _ctx.href,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    _ctx.loading || _ctx.$slots.icon ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass(`${_ctx.prefixCls}-icon`)
    }, [
      _ctx.loading ? (openBlock(), createBlock(_component_icon_loading, {
        key: 0,
        spin: "true"
      })) : renderSlot(_ctx.$slots, "icon", { key: 1 })
    ], 2)) : createCommentVNode("v-if", true),
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_1)) : (openBlock(), createElementBlock("button", {
    key: 1,
    class: normalizeClass([
      _ctx.cls,
      { [`${_ctx.prefixCls}-only-icon`]: _ctx.$slots.icon && !_ctx.$slots.default }
    ]),
    type: _ctx.htmlType,
    disabled: _ctx.mergedDisabled,
    onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    _ctx.loading || _ctx.$slots.icon ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass(`${_ctx.prefixCls}-icon`)
    }, [
      _ctx.loading ? (openBlock(), createBlock(_component_icon_loading, {
        key: 0,
        spin: true
      })) : renderSlot(_ctx.$slots, "icon", { key: 1 })
    ], 2)) : createCommentVNode("v-if", true),
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_2));
}
var _Button = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = defineComponent({
  name: "ButtonGroup",
  props: {
    type: {
      type: String
    },
    status: {
      type: String
    },
    shape: {
      type: String
    },
    size: {
      type: String
    },
    disabled: {
      type: Boolean
    }
  },
  setup(props) {
    const { type, size, status, disabled, shape } = toRefs(props);
    const prefixCls = getPrefixCls("btn-group");
    provide(buttonGroupInjectionKey, reactive({
      type,
      size,
      shape,
      status,
      disabled
    }));
    return {
      prefixCls
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.prefixCls)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var ButtonGroup = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const Button = Object.assign(_Button, {
  Group: ButtonGroup,
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Button.name, _Button);
    app.component(componentPrefix + ButtonGroup.name, ButtonGroup);
  }
});
const TAG_COLORS = [
  "red",
  "orangered",
  "orange",
  "gold",
  "lime",
  "green",
  "cyan",
  "blue",
  "arcoblue",
  "purple",
  "pinkpurple",
  "magenta",
  "gray"
];
const _sfc_main = defineComponent({
  name: "Tag",
  components: {
    IconHover,
    IconClose,
    IconLoading
  },
  props: {
    color: {
      type: String
    },
    size: {
      type: String
    },
    bordered: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    defaultVisible: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: false
    },
    checkable: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: void 0
    },
    defaultChecked: {
      type: Boolean,
      default: true
    }
  },
  emits: {
    "update:visible": (visible) => true,
    "update:checked": (checked) => true,
    "close": (ev) => true,
    "check": (checked, ev) => true
  },
  setup(props, { emit }) {
    const { size } = toRefs(props);
    const prefixCls = getPrefixCls("tag");
    const isBuiltInColor = computed(() => props.color && TAG_COLORS.includes(props.color));
    const isCustomColor = computed(() => props.color && !TAG_COLORS.includes(props.color));
    const _visible = ref(props.defaultVisible);
    const _checked = ref(props.defaultChecked);
    const computedVisible = computed(() => {
      var _a;
      return (_a = props.visible) != null ? _a : _visible.value;
    });
    const computedChecked = computed(() => {
      var _a;
      return props.checkable ? (_a = props.checked) != null ? _a : _checked.value : true;
    });
    const { mergedSize: _mergedSize } = useSize(size);
    const mergedSize = computed(() => {
      if (_mergedSize.value === "mini") {
        return "small";
      }
      return _mergedSize.value;
    });
    const handleClose = (ev) => {
      _visible.value = false;
      emit("update:visible", false);
      emit("close", ev);
    };
    const handleClick = (ev) => {
      if (props.checkable) {
        const newChecked = !computedChecked.value;
        _checked.value = newChecked;
        emit("update:checked", newChecked);
        emit("check", newChecked, ev);
      }
    };
    const cls = computed(() => [
      prefixCls,
      `${prefixCls}-size-${mergedSize.value}`,
      {
        [`${prefixCls}-loading`]: props.loading,
        [`${prefixCls}-hide`]: !computedVisible.value,
        [`${prefixCls}-${props.color}`]: isBuiltInColor.value,
        [`${prefixCls}-bordered`]: props.bordered,
        [`${prefixCls}-checkable`]: props.checkable,
        [`${prefixCls}-checked`]: computedChecked.value,
        [`${prefixCls}-custom-color`]: isCustomColor.value
      }
    ]);
    const style = computed(() => {
      if (isCustomColor.value) {
        return {
          backgroundColor: props.color
        };
      }
      return void 0;
    });
    return {
      prefixCls,
      cls,
      style,
      computedVisible,
      computedChecked,
      handleClick,
      handleClose
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_close = resolveComponent("icon-close");
  const _component_icon_hover = resolveComponent("icon-hover");
  const _component_icon_loading = resolveComponent("icon-loading");
  return _ctx.computedVisible ? (openBlock(), createElementBlock("span", {
    key: 0,
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.style),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    _ctx.$slots.icon ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass(`${_ctx.prefixCls}-icon`)
    }, [
      renderSlot(_ctx.$slots, "icon")
    ], 2)) : createCommentVNode("v-if", true),
    renderSlot(_ctx.$slots, "default"),
    _ctx.closable ? (openBlock(), createBlock(_component_icon_hover, {
      key: 1,
      role: "button",
      "aria-label": "Close",
      prefix: _ctx.prefixCls,
      class: normalizeClass(`${_ctx.prefixCls}-close-btn`),
      onClick: withModifiers(_ctx.handleClose, ["stop"])
    }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "close-icon", {}, () => [
          createVNode(_component_icon_close)
        ])
      ]),
      _: 3
    }, 8, ["prefix", "class", "onClick"])) : createCommentVNode("v-if", true),
    _ctx.loading ? (openBlock(), createElementBlock("span", {
      key: 2,
      class: normalizeClass(`${_ctx.prefixCls}-loading-icon`)
    }, [
      createVNode(_component_icon_loading)
    ], 2)) : createCommentVNode("v-if", true)
  ], 6)) : createCommentVNode("v-if", true);
}
var _Tag = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const Tag = Object.assign(_Tag, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Tag.name, _Tag);
  }
});
function getQueryParam(paramName) {
  const reg = new RegExp("(^|&)" + paramName + "=([^&]*)(&|$)");
  let value = decodeURIComponent(window.location.search.substr(1)).match(reg);
  if (value != null) {
    return unescape(value[2]);
  }
  return null;
}
function goToLink(url, paramName, paramValue) {
  if (paramName) {
    window.location.href = url + "?" + paramName + "=" + paramValue;
  } else {
    window.location.href = url;
  }
}
function getChineseZodiac(year) {
  const arr = [
    "monkey",
    "rooster",
    "dog",
    "pig",
    "rat",
    "ox",
    "tiger",
    "rabbit",
    "dragon",
    "snake",
    "horse",
    "goat"
  ];
  return arr[year % 12];
}
function getChineseZodiacAlias(year) {
  const arr = [
    "猴年",
    "鸡年",
    "狗年",
    "猪年",
    "鼠年",
    "牛年",
    "虎年",
    "兔年",
    "龙年",
    "蛇年",
    "马年",
    "羊年"
  ];
  return arr[year % 12];
}
function scrollToElement(elementId, offset = 0) {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
      // 可以添加更多的动画选项
      // duration: 1000, // 如果使用第三方滚动库的话
    });
  }
}
export {
  mergeFirstChild as A,
  Button as B,
  isBoolean as C,
  isEmptyObject as D,
  IconLoading as I,
  Tag as T,
  _export_sfc as _,
  getAllElements as a,
  isNumber as b,
  getComponentPrefix as c,
  goToLink as d,
  getChineseZodiac as e,
  getChineseZodiacAlias as f,
  getPrefixCls as g,
  getQueryParam as h,
  isArray as i,
  isUndefined as j,
  isObject as k,
  scrollToElement as l,
  configProviderInjectionKey as m,
  isString as n,
  isComponentInstance as o,
  getFirstComponent as p,
  useFormItem as q,
  useSize as r,
  setGlobalConfig as s,
  isNull as t,
  unFragment as u,
  isFunction as v,
  IconHover as w,
  IconClose as x,
  getFirstElementFromChildren as y,
  isEmptyChildren as z
};
