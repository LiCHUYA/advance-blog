import { F as Fragment, ae as isVNode, a3 as Comment, ah as Text$2, d as defineComponent, a6 as reactive, j as onMounted, C as onUpdated, A as onUnmounted, y as watch, a7 as getCurrentInstance, g as computed, N as inject, h as ref, m as unref, G as shallowRef, Z as provide, z as watchEffect, af as onBeforeUnmount, I as createVNode, am as h$1, a9 as withDirectives, an as resolveDirective, T as Transition, ab as cloneVNode, P as nextTick, V as toRef, a8 as vShow, a1 as withModifiers, ao as onBeforeMount, ai as Teleport, ag as toRaw, ap as render, a4 as toRefs, ad as createApp } from "./framework.b55ravPP.js";
import { n as numberInputToObject, i as inputToRGB, b as boundAlpha, r as rgbToHsv, a as rgbToHsl, c as rgbToHex, d as rgbaToHex, e as clamp01, f as bound01, g as names, h as generate, A as AntdIcon, j as gold } from "./CloseOutlined.gG5NVs8Y.js";
import { i as index } from "./ResizeObserver.es.O3MJSaTq.js";
function _typeof$1(o2) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof$1(o2);
}
function toPrimitive(t2, r2) {
  if ("object" != _typeof$1(t2) || !t2)
    return t2;
  var e2 = t2[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i2 = e2.call(t2, r2 || "default");
    if ("object" != _typeof$1(i2))
      return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t2);
}
function toPropertyKey(t2) {
  var i2 = toPrimitive(t2, "string");
  return "symbol" == _typeof$1(i2) ? i2 : i2 + "";
}
function _defineProperty$6(e2, r2, t2) {
  return (r2 = toPropertyKey(r2)) in e2 ? Object.defineProperty(e2, r2, {
    value: t2,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e2[r2] = t2, e2;
}
function ownKeys$1(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread2$1(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$1(Object(t2), true).forEach(function(r3) {
      _defineProperty$6(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$1(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n2) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var t2 = arguments[e2];
      for (var r2 in t2)
        ({}).hasOwnProperty.call(t2, r2) && (n2[r2] = t2[r2]);
    }
    return n2;
  }, _extends.apply(null, arguments);
}
const isFunction$1 = (val) => typeof val === "function";
const isArray$2 = Array.isArray;
const isString = (val) => typeof val === "string";
const isObject$1 = (val) => val !== null && typeof val === "object";
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_2, c2) => c2 ? c2.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str) => {
  return str.replace(hyphenateRE, "-$1").toLowerCase();
});
const capitalize = cacheStringFunction((str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
const hasOwnProperty$9 = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty$9.call(val, key);
function resolvePropValue(options, props, key, value) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      value = opt.type !== Function && isFunction$1(defaultValue) ? defaultValue() : defaultValue;
    }
    if (opt.type === Boolean) {
      if (!hasOwn(props, key) && !hasDefault) {
        value = false;
      } else if (value === "") {
        value = true;
      }
    }
  }
  return value;
}
function toPx(val) {
  if (typeof val === "number")
    return `${val}px`;
  return val;
}
function classNames() {
  const classes = [];
  for (let i2 = 0; i2 < arguments.length; i2++) {
    const value = i2 < 0 || arguments.length <= i2 ? void 0 : arguments[i2];
    if (!value)
      continue;
    if (isString(value)) {
      classes.push(value);
    } else if (isArray$2(value)) {
      for (let i3 = 0; i3 < value.length; i3++) {
        const inner = classNames(value[i3]);
        if (inner) {
          classes.push(inner);
        }
      }
    } else if (isObject$1(value)) {
      for (const name in value) {
        if (value[name]) {
          classes.push(name);
        }
      }
    }
  }
  return classes.join(" ");
}
const isValid$2 = (value) => {
  return value !== void 0 && value !== null && value !== "";
};
const isValid$3 = isValid$2;
const initDefaultProps = (types, defaultProps) => {
  const propTypes = _extends({}, types);
  Object.keys(defaultProps).forEach((k2) => {
    const prop = propTypes[k2];
    if (prop) {
      if (prop.type || prop.default) {
        prop.default = defaultProps[k2];
      } else if (prop.def) {
        prop.def(defaultProps[k2]);
      } else {
        propTypes[k2] = {
          type: prop,
          default: defaultProps[k2]
        };
      }
    } else {
      throw new Error(`not have ${k2} prop`);
    }
  });
  return propTypes;
};
const initDefaultProps$1 = initDefaultProps;
const splitAttrs = (attrs) => {
  const allAttrs = Object.keys(attrs);
  const eventAttrs = {};
  const onEvents = {};
  const extraAttrs = {};
  for (let i2 = 0, l2 = allAttrs.length; i2 < l2; i2++) {
    const key = allAttrs[i2];
    if (isOn(key)) {
      eventAttrs[key[2].toLowerCase() + key.slice(3)] = attrs[key];
      onEvents[key] = attrs[key];
    } else {
      extraAttrs[key] = attrs[key];
    }
  }
  return {
    onEvents,
    events: eventAttrs,
    extraAttrs
  };
};
const parseStyleText = function() {
  let cssText = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  let camel = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  const res = {};
  const listDelimiter = /;(?![^(]*\))/g;
  const propertyDelimiter = /:(.+)/;
  if (typeof cssText === "object")
    return cssText;
  cssText.split(listDelimiter).forEach(function(item) {
    if (item) {
      const tmp = item.split(propertyDelimiter);
      if (tmp.length > 1) {
        const k2 = camel ? camelize(tmp[0].trim()) : tmp[0].trim();
        res[k2] = tmp[1].trim();
      }
    }
  });
  return res;
};
const hasProp = (instance, prop) => {
  return instance[prop] !== void 0;
};
const skipFlattenKey = Symbol("skipFlatten");
const flattenChildren = function() {
  let children = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  let filterEmpty2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  const temp = Array.isArray(children) ? children : [children];
  const res = [];
  temp.forEach((child) => {
    if (Array.isArray(child)) {
      res.push(...flattenChildren(child, filterEmpty2));
    } else if (child && child.type === Fragment) {
      if (child.key === skipFlattenKey) {
        res.push(child);
      } else {
        res.push(...flattenChildren(child.children, filterEmpty2));
      }
    } else if (child && isVNode(child)) {
      if (filterEmpty2 && !isEmptyElement(child)) {
        res.push(child);
      } else if (!filterEmpty2) {
        res.push(child);
      }
    } else if (isValid$3(child)) {
      res.push(child);
    }
  });
  return res;
};
const getSlot = function(self2) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default";
  let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (isVNode(self2)) {
    if (self2.type === Fragment) {
      return name === "default" ? flattenChildren(self2.children) : [];
    } else if (self2.children && self2.children[name]) {
      return flattenChildren(self2.children[name](options));
    } else {
      return [];
    }
  } else {
    const res = self2.$slots[name] && self2.$slots[name](options);
    return flattenChildren(res);
  }
};
const findDOMNode = (instance) => {
  var _a;
  let node2 = ((_a = instance === null || instance === void 0 ? void 0 : instance.vnode) === null || _a === void 0 ? void 0 : _a.el) || instance && (instance.$el || instance);
  while (node2 && !node2.tagName) {
    node2 = node2.nextSibling;
  }
  return node2;
};
const getOptionProps = (instance) => {
  const res = {};
  if (instance.$ && instance.$.vnode) {
    const props = instance.$.vnode.props || {};
    Object.keys(instance.$props).forEach((k2) => {
      const v2 = instance.$props[k2];
      const hyphenateKey = hyphenate(k2);
      if (v2 !== void 0 || hyphenateKey in props) {
        res[k2] = v2;
      }
    });
  } else if (isVNode(instance) && typeof instance.type === "object") {
    const originProps = instance.props || {};
    const props = {};
    Object.keys(originProps).forEach((key) => {
      props[camelize(key)] = originProps[key];
    });
    const options = instance.type.props || {};
    Object.keys(options).forEach((k2) => {
      const v2 = resolvePropValue(options, props, k2, props[k2]);
      if (v2 !== void 0 || k2 in props) {
        res[k2] = v2;
      }
    });
  }
  return res;
};
const getComponent = function(instance) {
  let prop = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default";
  let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : instance;
  let execute = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
  let com = void 0;
  if (instance.$) {
    const temp = instance[prop];
    if (temp !== void 0) {
      return typeof temp === "function" && execute ? temp(options) : temp;
    } else {
      com = instance.$slots[prop];
      com = execute && com ? com(options) : com;
    }
  } else if (isVNode(instance)) {
    const temp = instance.props && instance.props[prop];
    if (temp !== void 0 && instance.props !== null) {
      return typeof temp === "function" && execute ? temp(options) : temp;
    } else if (instance.type === Fragment) {
      com = instance.children;
    } else if (instance.children && instance.children[prop]) {
      com = instance.children[prop];
      com = execute && com ? com(options) : com;
    }
  }
  if (Array.isArray(com)) {
    com = flattenChildren(com);
    com = com.length === 1 ? com[0] : com;
    com = com.length === 0 ? void 0 : com;
  }
  return com;
};
function getEvents() {
  let ele = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  let on = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  let props = {};
  if (ele.$) {
    props = _extends(_extends({}, props), ele.$attrs);
  } else {
    props = _extends(_extends({}, props), ele.props);
  }
  return splitAttrs(props)[on ? "onEvents" : "events"];
}
function getStyle(ele, camel) {
  const props = (isVNode(ele) ? ele.props : ele.$attrs) || {};
  let style = props.style || {};
  if (typeof style === "string") {
    style = parseStyleText(style, camel);
  } else if (camel && style) {
    const res = {};
    Object.keys(style).forEach((k2) => res[camelize(k2)] = style[k2]);
    return res;
  }
  return style;
}
function isFragment(c2) {
  return c2.length === 1 && c2[0].type === Fragment;
}
function isEmptyElement(c2) {
  return c2 && (c2.type === Comment || c2.type === Fragment && c2.children.length === 0 || c2.type === Text$2 && c2.children.trim() === "");
}
function filterEmpty() {
  let children = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  const res = [];
  children.forEach((child) => {
    if (Array.isArray(child)) {
      res.push(...child);
    } else if ((child === null || child === void 0 ? void 0 : child.type) === Fragment) {
      res.push(...filterEmpty(child.children));
    } else {
      res.push(child);
    }
  });
  return res.filter((c2) => !isEmptyElement(c2));
}
function isValidElement(element) {
  if (Array.isArray(element) && element.length === 1) {
    element = element[0];
  }
  return element && element.__v_isVNode && typeof element.type !== "symbol";
}
function getPropsSlot(slots, props) {
  let prop = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "default";
  var _a, _b;
  return (_a = props[prop]) !== null && _a !== void 0 ? _a : (_b = slots[prop]) === null || _b === void 0 ? void 0 : _b.call(slots);
}
const ResizeObserver$1 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ResizeObserver",
  props: {
    disabled: Boolean,
    onResize: Function
  },
  emits: ["resize"],
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const state = reactive({
      width: 0,
      height: 0,
      offsetHeight: 0,
      offsetWidth: 0
    });
    let currentElement = null;
    let resizeObserver = null;
    const destroyObserver = () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
        resizeObserver = null;
      }
    };
    const onResize = (entries) => {
      const {
        onResize: onResize2
      } = props;
      const target = entries[0].target;
      const {
        width,
        height
      } = target.getBoundingClientRect();
      const {
        offsetWidth,
        offsetHeight
      } = target;
      const fixedWidth = Math.floor(width);
      const fixedHeight = Math.floor(height);
      if (state.width !== fixedWidth || state.height !== fixedHeight || state.offsetWidth !== offsetWidth || state.offsetHeight !== offsetHeight) {
        const size = {
          width: fixedWidth,
          height: fixedHeight,
          offsetWidth,
          offsetHeight
        };
        _extends(state, size);
        if (onResize2) {
          Promise.resolve().then(() => {
            onResize2(_extends(_extends({}, size), {
              offsetWidth,
              offsetHeight
            }), target);
          });
        }
      }
    };
    const instance = getCurrentInstance();
    const registerObserver = () => {
      const {
        disabled
      } = props;
      if (disabled) {
        destroyObserver();
        return;
      }
      const element = findDOMNode(instance);
      const elementChanged = element !== currentElement;
      if (elementChanged) {
        destroyObserver();
        currentElement = element;
      }
      if (!resizeObserver && element) {
        resizeObserver = new index(onResize);
        resizeObserver.observe(element);
      }
    };
    onMounted(() => {
      registerObserver();
    });
    onUpdated(() => {
      registerObserver();
    });
    onUnmounted(() => {
      destroyObserver();
    });
    watch(() => props.disabled, () => {
      registerObserver();
    }, {
      flush: "post"
    });
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)[0];
    };
  }
});
let raf = (callback) => setTimeout(callback, 16);
let caf = (num) => clearTimeout(num);
if (typeof window !== "undefined" && "requestAnimationFrame" in window) {
  raf = (callback) => window.requestAnimationFrame(callback);
  caf = (handle) => window.cancelAnimationFrame(handle);
}
let rafUUID = 0;
const rafIds = /* @__PURE__ */ new Map();
function cleanup(id) {
  rafIds.delete(id);
}
function wrapperRaf(callback) {
  let times = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  rafUUID += 1;
  const id = rafUUID;
  function callRef(leftTimes) {
    if (leftTimes === 0) {
      cleanup(id);
      callback();
    } else {
      const realId = raf(() => {
        callRef(leftTimes - 1);
      });
      rafIds.set(id, realId);
    }
  }
  callRef(times);
  return id;
}
wrapperRaf.cancel = (id) => {
  const realId = rafIds.get(id);
  cleanup(realId);
  return caf(realId);
};
const tuple = function() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return args;
};
const tupleNum = function() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }
  return args;
};
const withInstall = (comp) => {
  const c2 = comp;
  c2.install = function(app) {
    app.component(c2.displayName || c2.name, comp);
  };
  return comp;
};
function eventType() {
  return {
    type: [Function, Array]
  };
}
function objectType(defaultVal) {
  return {
    type: Object,
    default: defaultVal
  };
}
function booleanType(defaultVal) {
  return {
    type: Boolean,
    default: defaultVal
  };
}
function functionType(defaultVal) {
  return {
    type: Function,
    default: defaultVal
  };
}
function anyType(defaultVal, required) {
  const type = {
    validator: () => true,
    default: defaultVal
  };
  return required ? type : type;
}
function arrayType(defaultVal) {
  return {
    type: Array,
    default: defaultVal
  };
}
function stringType(defaultVal) {
  return {
    type: String,
    default: defaultVal
  };
}
function someType(types, defaultVal) {
  return types ? {
    type: types,
    default: defaultVal
  } : anyType(defaultVal);
}
let supportsPassive = false;
try {
  const opts = Object.defineProperty({}, "passive", {
    get() {
      supportsPassive = true;
    }
  });
  window.addEventListener("testPassive", null, opts);
  window.removeEventListener("testPassive", null, opts);
} catch (e2) {
}
const supportsPassive$1 = supportsPassive;
function addEventListenerWrap(target, eventType2, cb, option) {
  if (target && target.addEventListener) {
    let opt = option;
    if (opt === void 0 && supportsPassive$1 && (eventType2 === "touchstart" || eventType2 === "touchmove" || eventType2 === "wheel")) {
      opt = {
        passive: false
      };
    }
    target.addEventListener(eventType2, cb, opt);
  }
  return {
    remove: () => {
      if (target && target.removeEventListener) {
        target.removeEventListener(eventType2, cb);
      }
    }
  };
}
const defaultIconPrefixCls = "anticon";
const configProviderKey = Symbol("configProvider");
const defaultConfigProvider = {
  getPrefixCls: (suffixCls, customizePrefixCls) => {
    if (customizePrefixCls)
      return customizePrefixCls;
    return suffixCls ? `ant-${suffixCls}` : "ant";
  },
  iconPrefixCls: computed(() => defaultIconPrefixCls),
  getPopupContainer: computed(() => () => document.body),
  direction: computed(() => "ltr")
};
const useConfigContextInject = () => {
  return inject(configProviderKey, defaultConfigProvider);
};
const DisabledContextKey = Symbol("DisabledContextKey");
const useInjectDisabled = () => {
  return inject(DisabledContextKey, ref(void 0));
};
const enUS$1 = {
  // Options.jsx
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "",
  // Pagination.jsx
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages"
};
const locale$2 = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "Ok",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: true,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
};
const CalendarLocale = locale$2;
const locale$1 = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
};
const TimePicker = locale$1;
const locale = {
  lang: _extends({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, CalendarLocale),
  timePickerLocale: _extends({}, TimePicker)
};
const enUS = locale;
const typeTemplate = "${label} is not a valid ${type}";
const localeValues = {
  locale: "en",
  Pagination: enUS$1,
  DatePicker: enUS,
  TimePicker,
  Calendar: enUS,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand"
  },
  PageHeader: {
    back: "Back"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh",
    scanned: "Scanned"
  }
};
const defaultLocale = localeValues;
const LocaleReceiver = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "LocaleReceiver",
  props: {
    componentName: String,
    defaultLocale: {
      type: [Object, Function]
    },
    children: {
      type: Function
    }
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const localeData = inject("localeData", {});
    const locale2 = computed(() => {
      const {
        componentName = "global",
        defaultLocale: defaultLocale$1
      } = props;
      const locale3 = defaultLocale$1 || defaultLocale[componentName || "global"];
      const {
        antLocale
      } = localeData;
      const localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
      return _extends(_extends({}, typeof locale3 === "function" ? locale3() : locale3), localeFromContext || {});
    });
    const localeCode = computed(() => {
      const {
        antLocale
      } = localeData;
      const localeCode2 = antLocale && antLocale.locale;
      if (antLocale && antLocale.exist && !localeCode2) {
        return defaultLocale.locale;
      }
      return localeCode2;
    });
    return () => {
      const children = props.children || slots.default;
      const {
        antLocale
      } = localeData;
      return children === null || children === void 0 ? void 0 : children(locale2.value, localeCode.value, antLocale);
    };
  }
});
function useLocaleReceiver(componentName, defaultLocale$1, propsLocale) {
  const localeData = inject("localeData", {});
  const componentLocale = computed(() => {
    const {
      antLocale
    } = localeData;
    const locale2 = unref(defaultLocale$1) || defaultLocale[componentName || "global"];
    const localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
    return _extends(_extends(_extends({}, typeof locale2 === "function" ? locale2() : locale2), localeFromContext || {}), unref(propsLocale) || {});
  });
  return [componentLocale];
}
function murmur2(str) {
  var h2 = 0;
  var k2, i2 = 0, len = str.length;
  for (; len >= 4; ++i2, len -= 4) {
    k2 = str.charCodeAt(i2) & 255 | (str.charCodeAt(++i2) & 255) << 8 | (str.charCodeAt(++i2) & 255) << 16 | (str.charCodeAt(++i2) & 255) << 24;
    k2 = /* Math.imul(k, m): */
    (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16);
    k2 ^= /* k >>> r: */
    k2 >>> 24;
    h2 = /* Math.imul(k, m): */
    (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h2 ^= (str.charCodeAt(i2 + 2) & 255) << 16;
    case 2:
      h2 ^= (str.charCodeAt(i2 + 1) & 255) << 8;
    case 1:
      h2 ^= str.charCodeAt(i2) & 255;
      h2 = /* Math.imul(h, m): */
      (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  h2 ^= h2 >>> 13;
  h2 = /* Math.imul(h, m): */
  (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  return ((h2 ^ h2 >>> 15) >>> 0).toString(36);
}
const SPLIT = "%";
class Entity {
  constructor(instanceId) {
    this.cache = /* @__PURE__ */ new Map();
    this.instanceId = instanceId;
  }
  get(keys2) {
    return this.cache.get(Array.isArray(keys2) ? keys2.join(SPLIT) : keys2) || null;
  }
  update(keys2, valueFn) {
    const path = Array.isArray(keys2) ? keys2.join(SPLIT) : keys2;
    const prevValue = this.cache.get(path);
    const nextValue = valueFn(prevValue);
    if (nextValue === null) {
      this.cache.delete(path);
    } else {
      this.cache.set(path, nextValue);
    }
  }
}
const CacheEntity = Entity;
const ATTR_TOKEN = "data-token-hash";
const ATTR_MARK = "data-css-hash";
const CSS_IN_JS_INSTANCE = "__cssinjs_instance__";
function createCache() {
  const cssinjsInstanceId = Math.random().toString(12).slice(2);
  if (typeof document !== "undefined" && document.head && document.body) {
    const styles = document.body.querySelectorAll(`style[${ATTR_MARK}]`) || [];
    const {
      firstChild
    } = document.head;
    Array.from(styles).forEach((style) => {
      style[CSS_IN_JS_INSTANCE] = style[CSS_IN_JS_INSTANCE] || cssinjsInstanceId;
      if (style[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
        document.head.insertBefore(style, firstChild);
      }
    });
    const styleHash = {};
    Array.from(document.querySelectorAll(`style[${ATTR_MARK}]`)).forEach((style) => {
      var _a;
      const hash = style.getAttribute(ATTR_MARK);
      if (styleHash[hash]) {
        if (style[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
          (_a = style.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(style);
        }
      } else {
        styleHash[hash] = true;
      }
    });
  }
  return new CacheEntity(cssinjsInstanceId);
}
const StyleContextKey = Symbol("StyleContextKey");
const getCache = () => {
  var _a, _b, _c;
  const instance = getCurrentInstance();
  let cache;
  if (instance && instance.appContext) {
    const globalCache = (_c = (_b = (_a = instance.appContext) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.globalProperties) === null || _c === void 0 ? void 0 : _c.__ANTDV_CSSINJS_CACHE__;
    if (globalCache) {
      cache = globalCache;
    } else {
      cache = createCache();
      if (instance.appContext.config.globalProperties) {
        instance.appContext.config.globalProperties.__ANTDV_CSSINJS_CACHE__ = cache;
      }
    }
  } else {
    cache = createCache();
  }
  return cache;
};
const defaultStyleContext = {
  cache: createCache(),
  defaultCache: true,
  hashPriority: "low"
};
const useStyleInject = () => {
  const cache = getCache();
  return inject(StyleContextKey, shallowRef(_extends(_extends({}, defaultStyleContext), {
    cache
  })));
};
const useStyleProvider = (props) => {
  const parentContext = useStyleInject();
  const context = shallowRef(_extends(_extends({}, defaultStyleContext), {
    cache: createCache()
  }));
  watch([() => unref(props), parentContext], () => {
    const mergedContext = _extends({}, parentContext.value);
    const propsValue = unref(props);
    Object.keys(propsValue).forEach((key) => {
      const value = propsValue[key];
      if (propsValue[key] !== void 0) {
        mergedContext[key] = value;
      }
    });
    const {
      cache
    } = propsValue;
    mergedContext.cache = mergedContext.cache || createCache();
    mergedContext.defaultCache = !cache && parentContext.value.defaultCache;
    context.value = mergedContext;
  }, {
    immediate: true
  });
  provide(StyleContextKey, context);
  return context;
};
const styleProviderProps = () => ({
  autoClear: booleanType(),
  /** @private Test only. Not work in production. */
  mock: stringType(),
  /**
   * Only set when you need ssr to extract style on you own.
   * If not provided, it will auto create <style /> on the end of Provider in server side.
   */
  cache: objectType(),
  /** Tell children that this context is default generated context */
  defaultCache: booleanType(),
  /** Use `:where` selector to reduce hashId css selector priority */
  hashPriority: stringType(),
  /** Tell cssinjs where to inject style in */
  container: someType(),
  /** Component wil render inline  `<style />` for fallback in SSR. Not recommend. */
  ssrInline: booleanType(),
  /** Transform css before inject in document. Please note that `transformers` do not support dynamic update */
  transformers: arrayType(),
  /**
   * Linters to lint css before inject in document.
   * Styles will be linted after transforming.
   * Please note that `linters` do not support dynamic update.
   */
  linters: arrayType()
});
withInstall(defineComponent({
  name: "AStyleProvider",
  inheritAttrs: false,
  props: styleProviderProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useStyleProvider(props);
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
}));
function useClientCache(prefix, keyPath, cacheFn, onCacheRemove) {
  const styleContext = useStyleInject();
  const fullPathStr = shallowRef("");
  const res = shallowRef();
  watchEffect(() => {
    fullPathStr.value = [prefix, ...keyPath.value].join("%");
  });
  const clearCache = (pathStr) => {
    styleContext.value.cache.update(pathStr, (prevCache) => {
      const [times = 0, cache] = prevCache || [];
      const nextCount = times - 1;
      if (nextCount === 0) {
        onCacheRemove === null || onCacheRemove === void 0 ? void 0 : onCacheRemove(cache, false);
        return null;
      }
      return [times - 1, cache];
    });
  };
  watch(fullPathStr, (newStr, oldStr) => {
    if (oldStr)
      clearCache(oldStr);
    styleContext.value.cache.update(newStr, (prevCache) => {
      const [times = 0, cache] = prevCache || [];
      let tmpCache = cache;
      const mergedCache = tmpCache || cacheFn();
      return [times + 1, mergedCache];
    });
    res.value = styleContext.value.cache.get(fullPathStr.value)[1];
  }, {
    immediate: true
  });
  onBeforeUnmount(() => {
    clearCache(fullPathStr.value);
  });
  return res;
}
function canUseDom() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
function contains(root2, n2) {
  if (!root2) {
    return false;
  }
  if (root2.contains) {
    return root2.contains(n2);
  }
  return false;
}
const APPEND_ORDER = "data-vc-order";
const MARK_KEY = `vc-util-key`;
const containerCache = /* @__PURE__ */ new Map();
function getMark() {
  let {
    mark
  } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  if (mark) {
    return mark.startsWith("data-") ? mark : `data-${mark}`;
  }
  return MARK_KEY;
}
function getContainer(option) {
  if (option.attachTo) {
    return option.attachTo;
  }
  const head = document.querySelector("head");
  return head || document.body;
}
function getOrder(prepend) {
  if (prepend === "queue") {
    return "prependQueue";
  }
  return prepend ? "prepend" : "append";
}
function findStyles(container) {
  return Array.from((containerCache.get(container) || container).children).filter((node2) => node2.tagName === "STYLE");
}
function injectCSS(css2) {
  let option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!canUseDom()) {
    return null;
  }
  const {
    csp,
    prepend
  } = option;
  const styleNode = document.createElement("style");
  styleNode.setAttribute(APPEND_ORDER, getOrder(prepend));
  if (csp === null || csp === void 0 ? void 0 : csp.nonce) {
    styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
  }
  styleNode.innerHTML = css2;
  const container = getContainer(option);
  const {
    firstChild
  } = container;
  if (prepend) {
    if (prepend === "queue") {
      const existStyle = findStyles(container).filter((node2) => ["prepend", "prependQueue"].includes(node2.getAttribute(APPEND_ORDER)));
      if (existStyle.length) {
        container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
        return styleNode;
      }
    }
    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }
  return styleNode;
}
function findExistNode(key) {
  let option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const container = getContainer(option);
  return findStyles(container).find((node2) => node2.getAttribute(getMark(option)) === key);
}
function removeCSS(key) {
  let option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const existNode = findExistNode(key, option);
  if (existNode) {
    const container = getContainer(option);
    container.removeChild(existNode);
  }
}
function syncRealContainer(container, option) {
  const cachedRealContainer = containerCache.get(container);
  if (!cachedRealContainer || !contains(document, cachedRealContainer)) {
    const placeholderStyle = injectCSS("", option);
    const {
      parentNode
    } = placeholderStyle;
    containerCache.set(container, parentNode);
    container.removeChild(placeholderStyle);
  }
}
function updateCSS(css2, key) {
  let option = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var _a, _b, _c;
  const container = getContainer(option);
  syncRealContainer(container, option);
  const existNode = findExistNode(key, option);
  if (existNode) {
    if (((_a = option.csp) === null || _a === void 0 ? void 0 : _a.nonce) && existNode.nonce !== ((_b = option.csp) === null || _b === void 0 ? void 0 : _b.nonce)) {
      existNode.nonce = (_c = option.csp) === null || _c === void 0 ? void 0 : _c.nonce;
    }
    if (existNode.innerHTML !== css2) {
      existNode.innerHTML = css2;
    }
    return existNode;
  }
  const newNode = injectCSS(css2, option);
  newNode.setAttribute(getMark(option), key);
  return newNode;
}
function sameDerivativeOption(left, right) {
  if (left.length !== right.length) {
    return false;
  }
  for (let i2 = 0; i2 < left.length; i2++) {
    if (left[i2] !== right[i2]) {
      return false;
    }
  }
  return true;
}
class ThemeCache {
  constructor() {
    this.cache = /* @__PURE__ */ new Map();
    this.keys = [];
    this.cacheCallTimes = 0;
  }
  size() {
    return this.keys.length;
  }
  internalGet(derivativeOption) {
    let updateCallTimes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    let cache = {
      map: this.cache
    };
    derivativeOption.forEach((derivative2) => {
      var _a;
      if (!cache) {
        cache = void 0;
      } else {
        cache = (_a = cache === null || cache === void 0 ? void 0 : cache.map) === null || _a === void 0 ? void 0 : _a.get(derivative2);
      }
    });
    if ((cache === null || cache === void 0 ? void 0 : cache.value) && updateCallTimes) {
      cache.value[1] = this.cacheCallTimes++;
    }
    return cache === null || cache === void 0 ? void 0 : cache.value;
  }
  get(derivativeOption) {
    var _a;
    return (_a = this.internalGet(derivativeOption, true)) === null || _a === void 0 ? void 0 : _a[0];
  }
  has(derivativeOption) {
    return !!this.internalGet(derivativeOption);
  }
  set(derivativeOption, value) {
    if (!this.has(derivativeOption)) {
      if (this.size() + 1 > ThemeCache.MAX_CACHE_SIZE + ThemeCache.MAX_CACHE_OFFSET) {
        const [targetKey] = this.keys.reduce((result, key) => {
          const [, callTimes] = result;
          if (this.internalGet(key)[1] < callTimes) {
            return [key, this.internalGet(key)[1]];
          }
          return result;
        }, [this.keys[0], this.cacheCallTimes]);
        this.delete(targetKey);
      }
      this.keys.push(derivativeOption);
    }
    let cache = this.cache;
    derivativeOption.forEach((derivative2, index2) => {
      if (index2 === derivativeOption.length - 1) {
        cache.set(derivative2, {
          value: [value, this.cacheCallTimes++]
        });
      } else {
        const cacheValue = cache.get(derivative2);
        if (!cacheValue) {
          cache.set(derivative2, {
            map: /* @__PURE__ */ new Map()
          });
        } else if (!cacheValue.map) {
          cacheValue.map = /* @__PURE__ */ new Map();
        }
        cache = cache.get(derivative2).map;
      }
    });
  }
  deleteByPath(currentCache, derivatives) {
    var _a;
    const cache = currentCache.get(derivatives[0]);
    if (derivatives.length === 1) {
      if (!cache.map) {
        currentCache.delete(derivatives[0]);
      } else {
        currentCache.set(derivatives[0], {
          map: cache.map
        });
      }
      return (_a = cache.value) === null || _a === void 0 ? void 0 : _a[0];
    }
    const result = this.deleteByPath(cache.map, derivatives.slice(1));
    if ((!cache.map || cache.map.size === 0) && !cache.value) {
      currentCache.delete(derivatives[0]);
    }
    return result;
  }
  delete(derivativeOption) {
    if (this.has(derivativeOption)) {
      this.keys = this.keys.filter((item) => !sameDerivativeOption(item, derivativeOption));
      return this.deleteByPath(this.cache, derivativeOption);
    }
    return void 0;
  }
}
ThemeCache.MAX_CACHE_SIZE = 20;
ThemeCache.MAX_CACHE_OFFSET = 5;
function noop$3() {
}
let warning = noop$3;
const warning$1 = warning;
let uuid$1 = 0;
class Theme {
  constructor(derivatives) {
    this.derivatives = Array.isArray(derivatives) ? derivatives : [derivatives];
    this.id = uuid$1;
    if (derivatives.length === 0) {
      warning$1(derivatives.length > 0);
    }
    uuid$1 += 1;
  }
  getDerivativeToken(token2) {
    return this.derivatives.reduce((result, derivative2) => derivative2(token2, result), void 0);
  }
}
const cacheThemes = new ThemeCache();
function createTheme(derivatives) {
  const derivativeArr = Array.isArray(derivatives) ? derivatives : [derivatives];
  if (!cacheThemes.has(derivativeArr)) {
    cacheThemes.set(derivativeArr, new Theme(derivativeArr));
  }
  return cacheThemes.get(derivativeArr);
}
const flattenTokenCache = /* @__PURE__ */ new WeakMap();
function flattenToken(token2) {
  let str = flattenTokenCache.get(token2) || "";
  if (!str) {
    Object.keys(token2).forEach((key) => {
      const value = token2[key];
      str += key;
      if (value instanceof Theme) {
        str += value.id;
      } else if (value && typeof value === "object") {
        str += flattenToken(value);
      } else {
        str += value;
      }
    });
    flattenTokenCache.set(token2, str);
  }
  return str;
}
function token2key(token2, salt) {
  return murmur2(`${salt}_${flattenToken(token2)}`);
}
const randomSelectorKey = `random-${Date.now()}-${Math.random()}`.replace(/\./g, "");
const checkContent = "_bAmBoO_";
function supportSelector(styleStr, handleElement, supportCheck) {
  var _a, _b;
  if (canUseDom()) {
    updateCSS(styleStr, randomSelectorKey);
    const ele = document.createElement("div");
    ele.style.position = "fixed";
    ele.style.left = "0";
    ele.style.top = "0";
    handleElement === null || handleElement === void 0 ? void 0 : handleElement(ele);
    document.body.appendChild(ele);
    const support = supportCheck ? supportCheck(ele) : (_a = getComputedStyle(ele).content) === null || _a === void 0 ? void 0 : _a.includes(checkContent);
    (_b = ele.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(ele);
    removeCSS(randomSelectorKey);
    return support;
  }
  return false;
}
let canLayer = void 0;
function supportLayer() {
  if (canLayer === void 0) {
    canLayer = supportSelector(`@layer ${randomSelectorKey} { .${randomSelectorKey} { content: "${checkContent}"!important; } }`, (ele) => {
      ele.className = randomSelectorKey;
    });
  }
  return canLayer;
}
const EMPTY_OVERRIDE = {};
const isProduction = true;
const isPrerender = false;
const hashPrefix = !isProduction && !isPrerender ? "css-dev-only-do-not-override" : "css";
const tokenKeys = /* @__PURE__ */ new Map();
function recordCleanToken(tokenKey) {
  tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) + 1);
}
function removeStyleTags(key, instanceId) {
  if (typeof document !== "undefined") {
    const styles = document.querySelectorAll(`style[${ATTR_TOKEN}="${key}"]`);
    styles.forEach((style) => {
      var _a;
      if (style[CSS_IN_JS_INSTANCE] === instanceId) {
        (_a = style.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(style);
      }
    });
  }
}
const TOKEN_THRESHOLD = 0;
function cleanTokenStyle(tokenKey, instanceId) {
  tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) - 1);
  const tokenKeyList = Array.from(tokenKeys.keys());
  const cleanableKeyList = tokenKeyList.filter((key) => {
    const count = tokenKeys.get(key) || 0;
    return count <= 0;
  });
  if (tokenKeyList.length - cleanableKeyList.length > TOKEN_THRESHOLD) {
    cleanableKeyList.forEach((key) => {
      removeStyleTags(key, instanceId);
      tokenKeys.delete(key);
    });
  }
}
const getComputedToken = (originToken, overrideToken, theme, format2) => {
  const derivativeToken = theme.getDerivativeToken(originToken);
  let mergedDerivativeToken = _extends(_extends({}, derivativeToken), overrideToken);
  if (format2) {
    mergedDerivativeToken = format2(mergedDerivativeToken);
  }
  return mergedDerivativeToken;
};
function useCacheToken(theme, tokens) {
  let option = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ref({});
  const style = useStyleInject();
  const mergedToken = computed(() => _extends({}, ...tokens.value));
  const tokenStr = computed(() => flattenToken(mergedToken.value));
  const overrideTokenStr = computed(() => flattenToken(option.value.override || EMPTY_OVERRIDE));
  const cachedToken = useClientCache("token", computed(() => [option.value.salt || "", theme.value.id, tokenStr.value, overrideTokenStr.value]), () => {
    const {
      salt = "",
      override = EMPTY_OVERRIDE,
      formatToken: formatToken2,
      getComputedToken: compute
    } = option.value;
    const mergedDerivativeToken = compute ? compute(mergedToken.value, override, theme.value) : getComputedToken(mergedToken.value, override, theme.value, formatToken2);
    const tokenKey = token2key(mergedDerivativeToken, salt);
    mergedDerivativeToken._tokenKey = tokenKey;
    recordCleanToken(tokenKey);
    const hashId = `${hashPrefix}-${murmur2(tokenKey)}`;
    mergedDerivativeToken._hashId = hashId;
    return [mergedDerivativeToken, hashId];
  }, (cache) => {
    var _a;
    cleanTokenStyle(cache[0]._tokenKey, (_a = style.value) === null || _a === void 0 ? void 0 : _a.cache.instanceId);
  });
  return cachedToken;
}
var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var abs = Math.abs;
var from = String.fromCharCode;
function trim(value) {
  return value.trim();
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search) {
  return value.indexOf(search);
}
function charat(value, index2) {
  return value.charCodeAt(index2) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root2, parent, type, props, children, length2) {
  return { value, root: root2, parent, type, props, children, line, column, length: length2, return: "" };
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index2, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index2, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index2) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index2, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index2) {
  while (!token(peek()))
    next();
  return slice(index2, position);
}
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root2, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index2 = 0;
  var offset2 = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
            ampersand = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root2, parent), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index2++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset2:
            if (property > 0 && strlen(characters2) - length2)
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append(reference = ruleset(characters2, root2, parent, index2, offset2, rules, points, type, props = [], children = [], length2), rulesets);
            if (character2 === 123)
              if (offset2 === 0)
                parse(characters2, root2, reference, reference, props, rulesets, length2, points, children);
              else
                switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                  case 100:
                  case 109:
                  case 115:
                    parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                }
        }
        index2 = offset2 = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset2 > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index2++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset2 = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root2, parent, index2, offset2, rules, points, type, props, children, length2) {
  var post = offset2 - 1;
  var rule = offset2 === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i2 = 0, j2 = 0, k2 = 0; i2 < index2; ++i2)
    for (var x2 = 0, y2 = substr(value, post + 1, post = abs(j2 = points[i2])), z2 = value; x2 < size; ++x2)
      if (z2 = trim(j2 > 0 ? rule[x2] + " " + y2 : replace(y2, /&\f/g, rule[x2])))
        props[k2++] = z2;
  return node(value, root2, parent, offset2 === 0 ? RULESET : type, props, children, length2);
}
function comment(value, root2, parent) {
  return node(value, root2, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
function declaration(value, root2, parent, length2) {
  return node(value, root2, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
}
function serialize(children, callback) {
  var output = "";
  var length2 = sizeof(children);
  for (var i2 = 0; i2 < length2; i2++)
    output += callback(children[i2], i2, children, callback) || "";
  return output;
}
function stringify(element, index2, children, callback) {
  switch (element.type) {
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      element.value = element.props.join(",");
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}
const ATTR_CACHE_MAP = "data-ant-cssinjs-cache-path";
const CSS_FILE_STYLE = "_FILE_STYLE__";
let cachePathMap;
let fromCSSFile = true;
function prepare() {
  var _a;
  if (!cachePathMap) {
    cachePathMap = {};
    if (canUseDom()) {
      const div = document.createElement("div");
      div.className = ATTR_CACHE_MAP;
      div.style.position = "fixed";
      div.style.visibility = "hidden";
      div.style.top = "-9999px";
      document.body.appendChild(div);
      let content = getComputedStyle(div).content || "";
      content = content.replace(/^"/, "").replace(/"$/, "");
      content.split(";").forEach((item) => {
        const [path, hash] = item.split(":");
        cachePathMap[path] = hash;
      });
      const inlineMapStyle = document.querySelector(`style[${ATTR_CACHE_MAP}]`);
      if (inlineMapStyle) {
        fromCSSFile = false;
        (_a = inlineMapStyle.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(inlineMapStyle);
      }
      document.body.removeChild(div);
    }
  }
}
function existPath(path) {
  prepare();
  return !!cachePathMap[path];
}
function getStyleAndHash(path) {
  const hash = cachePathMap[path];
  let styleStr = null;
  if (hash && canUseDom()) {
    if (fromCSSFile) {
      styleStr = CSS_FILE_STYLE;
    } else {
      const style = document.querySelector(`style[${ATTR_MARK}="${cachePathMap[path]}"]`);
      if (style) {
        styleStr = style.innerHTML;
      } else {
        delete cachePathMap[path];
      }
    }
  }
  return [styleStr, hash];
}
const isClientSide = canUseDom();
const SKIP_CHECK = "_skip_check_";
const MULTI_VALUE = "_multi_value_";
function normalizeStyle(styleStr) {
  const serialized = serialize(compile(styleStr), stringify);
  return serialized.replace(/\{%%%\:[^;];}/g, ";");
}
function isCompoundCSSProperty(value) {
  return typeof value === "object" && value && (SKIP_CHECK in value || MULTI_VALUE in value);
}
function injectSelectorHash(key, hashId, hashPriority) {
  if (!hashId) {
    return key;
  }
  const hashClassName = `.${hashId}`;
  const hashSelector = hashPriority === "low" ? `:where(${hashClassName})` : hashClassName;
  const keys2 = key.split(",").map((k2) => {
    var _a;
    const fullPath = k2.trim().split(/\s+/);
    let firstPath = fullPath[0] || "";
    const htmlElement = ((_a = firstPath.match(/^\w+/)) === null || _a === void 0 ? void 0 : _a[0]) || "";
    firstPath = `${htmlElement}${hashSelector}${firstPath.slice(htmlElement.length)}`;
    return [firstPath, ...fullPath.slice(1)].join(" ");
  });
  return keys2.join(",");
}
const globalEffectStyleKeys = /* @__PURE__ */ new Set();
const parseStyle = function(interpolation) {
  let config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  let {
    root: root2,
    injectHash,
    parentSelectors
  } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: true,
    parentSelectors: []
  };
  const {
    hashId,
    layer,
    path,
    hashPriority,
    transformers = [],
    linters = []
  } = config;
  let styleStr = "";
  let effectStyle = {};
  function parseKeyframes(keyframes) {
    const animationName = keyframes.getName(hashId);
    if (!effectStyle[animationName]) {
      const [parsedStr] = parseStyle(keyframes.style, config, {
        root: false,
        parentSelectors
      });
      effectStyle[animationName] = `@keyframes ${keyframes.getName(hashId)}${parsedStr}`;
    }
  }
  function flattenList(list) {
    let fullList = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    list.forEach((item) => {
      if (Array.isArray(item)) {
        flattenList(item, fullList);
      } else if (item) {
        fullList.push(item);
      }
    });
    return fullList;
  }
  const flattenStyleList = flattenList(Array.isArray(interpolation) ? interpolation : [interpolation]);
  flattenStyleList.forEach((originStyle) => {
    const style = typeof originStyle === "string" && !root2 ? {} : originStyle;
    if (typeof style === "string") {
      styleStr += `${style}
`;
    } else if (style._keyframe) {
      parseKeyframes(style);
    } else {
      const mergedStyle = transformers.reduce((prev2, trans) => {
        var _a;
        return ((_a = trans === null || trans === void 0 ? void 0 : trans.visit) === null || _a === void 0 ? void 0 : _a.call(trans, prev2)) || prev2;
      }, style);
      Object.keys(mergedStyle).forEach((key) => {
        var _a;
        const value = mergedStyle[key];
        if (typeof value === "object" && value && (key !== "animationName" || !value._keyframe) && !isCompoundCSSProperty(value)) {
          let subInjectHash = false;
          let mergedKey = key.trim();
          let nextRoot = false;
          if ((root2 || injectHash) && hashId) {
            if (mergedKey.startsWith("@")) {
              subInjectHash = true;
            } else {
              mergedKey = injectSelectorHash(key, hashId, hashPriority);
            }
          } else if (root2 && !hashId && (mergedKey === "&" || mergedKey === "")) {
            mergedKey = "";
            nextRoot = true;
          }
          const [parsedStr, childEffectStyle] = parseStyle(value, config, {
            root: nextRoot,
            injectHash: subInjectHash,
            parentSelectors: [...parentSelectors, mergedKey]
          });
          effectStyle = _extends(_extends({}, effectStyle), childEffectStyle);
          styleStr += `${mergedKey}${parsedStr}`;
        } else {
          let appendStyle = function(cssKey, cssValue) {
            const styleName = cssKey.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
            let formatValue = cssValue;
            if (!unitlessKeys[cssKey] && typeof formatValue === "number" && formatValue !== 0) {
              formatValue = `${formatValue}px`;
            }
            if (cssKey === "animationName" && (cssValue === null || cssValue === void 0 ? void 0 : cssValue._keyframe)) {
              parseKeyframes(cssValue);
              formatValue = cssValue.getName(hashId);
            }
            styleStr += `${styleName}:${formatValue};`;
          };
          const actualValue = (_a = value === null || value === void 0 ? void 0 : value.value) !== null && _a !== void 0 ? _a : value;
          if (typeof value === "object" && (value === null || value === void 0 ? void 0 : value[MULTI_VALUE]) && Array.isArray(actualValue)) {
            actualValue.forEach((item) => {
              appendStyle(key, item);
            });
          } else {
            appendStyle(key, actualValue);
          }
        }
      });
    }
  });
  if (!root2) {
    styleStr = `{${styleStr}}`;
  } else if (layer && supportLayer()) {
    const layerCells = layer.split(",");
    const layerName = layerCells[layerCells.length - 1].trim();
    styleStr = `@layer ${layerName} {${styleStr}}`;
    if (layerCells.length > 1) {
      styleStr = `@layer ${layer}{%%%:%}${styleStr}`;
    }
  }
  return [styleStr, effectStyle];
};
function uniqueHash(path, styleStr) {
  return murmur2(`${path.join("%")}${styleStr}`);
}
function useStyleRegister(info, styleFn) {
  const styleContext = useStyleInject();
  const tokenKey = computed(() => info.value.token._tokenKey);
  const fullPath = computed(() => [tokenKey.value, ...info.value.path]);
  let isMergedClientSide = isClientSide;
  useClientCache(
    "style",
    fullPath,
    // Create cache if needed
    () => {
      const {
        path,
        hashId,
        layer,
        nonce,
        clientOnly,
        order = 0
      } = info.value;
      const cachePath = fullPath.value.join("|");
      if (existPath(cachePath)) {
        const [inlineCacheStyleStr, styleHash] = getStyleAndHash(cachePath);
        if (inlineCacheStyleStr) {
          return [inlineCacheStyleStr, tokenKey.value, styleHash, {}, clientOnly, order];
        }
      }
      const styleObj = styleFn();
      const {
        hashPriority,
        container,
        transformers,
        linters,
        cache
      } = styleContext.value;
      const [parsedStyle, effectStyle] = parseStyle(styleObj, {
        hashId,
        hashPriority,
        layer,
        path: path.join("-"),
        transformers,
        linters
      });
      const styleStr = normalizeStyle(parsedStyle);
      const styleId = uniqueHash(fullPath.value, styleStr);
      if (isMergedClientSide) {
        const mergedCSSConfig = {
          mark: ATTR_MARK,
          prepend: "queue",
          attachTo: container,
          priority: order
        };
        const nonceStr = typeof nonce === "function" ? nonce() : nonce;
        if (nonceStr) {
          mergedCSSConfig.csp = {
            nonce: nonceStr
          };
        }
        const style = updateCSS(styleStr, styleId, mergedCSSConfig);
        style[CSS_IN_JS_INSTANCE] = cache.instanceId;
        style.setAttribute(ATTR_TOKEN, tokenKey.value);
        Object.keys(effectStyle).forEach((effectKey) => {
          if (!globalEffectStyleKeys.has(effectKey)) {
            globalEffectStyleKeys.add(effectKey);
            updateCSS(normalizeStyle(effectStyle[effectKey]), `_effect-${effectKey}`, {
              mark: ATTR_MARK,
              prepend: "queue",
              attachTo: container
            });
          }
        });
      }
      return [styleStr, tokenKey.value, styleId, effectStyle, clientOnly, order];
    },
    // Remove cache if no need
    (_ref, fromHMR) => {
      let [, , styleId] = _ref;
      if ((fromHMR || styleContext.value.autoClear) && isClientSide) {
        removeCSS(styleId, {
          mark: ATTR_MARK
        });
      }
    }
  );
  return (node2) => {
    return node2;
  };
}
class Keyframe {
  constructor(name, style) {
    this._keyframe = true;
    this.name = name;
    this.style = style;
  }
  getName() {
    let hashId = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return hashId ? `${hashId}-${this.name}` : this.name;
  }
}
const Keyframes = Keyframe;
const version = "4.2.6";
const PresetColors = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"];
var TinyColor = (
  /** @class */
  function() {
    function TinyColor2(color, opts) {
      if (color === void 0) {
        color = "";
      }
      if (opts === void 0) {
        opts = {};
      }
      var _a;
      if (color instanceof TinyColor2) {
        return color;
      }
      if (typeof color === "number") {
        color = numberInputToObject(color);
      }
      this.originalInput = color;
      var rgb = inputToRGB(color);
      this.originalInput = color;
      this.r = rgb.r;
      this.g = rgb.g;
      this.b = rgb.b;
      this.a = rgb.a;
      this.roundA = Math.round(100 * this.a) / 100;
      this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
      this.gradientType = opts.gradientType;
      if (this.r < 1) {
        this.r = Math.round(this.r);
      }
      if (this.g < 1) {
        this.g = Math.round(this.g);
      }
      if (this.b < 1) {
        this.b = Math.round(this.b);
      }
      this.isValid = rgb.ok;
    }
    TinyColor2.prototype.isDark = function() {
      return this.getBrightness() < 128;
    };
    TinyColor2.prototype.isLight = function() {
      return !this.isDark();
    };
    TinyColor2.prototype.getBrightness = function() {
      var rgb = this.toRgb();
      return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
    };
    TinyColor2.prototype.getLuminance = function() {
      var rgb = this.toRgb();
      var R2;
      var G;
      var B2;
      var RsRGB = rgb.r / 255;
      var GsRGB = rgb.g / 255;
      var BsRGB = rgb.b / 255;
      if (RsRGB <= 0.03928) {
        R2 = RsRGB / 12.92;
      } else {
        R2 = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
      }
      if (GsRGB <= 0.03928) {
        G = GsRGB / 12.92;
      } else {
        G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
      }
      if (BsRGB <= 0.03928) {
        B2 = BsRGB / 12.92;
      } else {
        B2 = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
      }
      return 0.2126 * R2 + 0.7152 * G + 0.0722 * B2;
    };
    TinyColor2.prototype.getAlpha = function() {
      return this.a;
    };
    TinyColor2.prototype.setAlpha = function(alpha) {
      this.a = boundAlpha(alpha);
      this.roundA = Math.round(100 * this.a) / 100;
      return this;
    };
    TinyColor2.prototype.isMonochrome = function() {
      var s2 = this.toHsl().s;
      return s2 === 0;
    };
    TinyColor2.prototype.toHsv = function() {
      var hsv = rgbToHsv(this.r, this.g, this.b);
      return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
    };
    TinyColor2.prototype.toHsvString = function() {
      var hsv = rgbToHsv(this.r, this.g, this.b);
      var h2 = Math.round(hsv.h * 360);
      var s2 = Math.round(hsv.s * 100);
      var v2 = Math.round(hsv.v * 100);
      return this.a === 1 ? "hsv(".concat(h2, ", ").concat(s2, "%, ").concat(v2, "%)") : "hsva(".concat(h2, ", ").concat(s2, "%, ").concat(v2, "%, ").concat(this.roundA, ")");
    };
    TinyColor2.prototype.toHsl = function() {
      var hsl = rgbToHsl(this.r, this.g, this.b);
      return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
    };
    TinyColor2.prototype.toHslString = function() {
      var hsl = rgbToHsl(this.r, this.g, this.b);
      var h2 = Math.round(hsl.h * 360);
      var s2 = Math.round(hsl.s * 100);
      var l2 = Math.round(hsl.l * 100);
      return this.a === 1 ? "hsl(".concat(h2, ", ").concat(s2, "%, ").concat(l2, "%)") : "hsla(".concat(h2, ", ").concat(s2, "%, ").concat(l2, "%, ").concat(this.roundA, ")");
    };
    TinyColor2.prototype.toHex = function(allow3Char) {
      if (allow3Char === void 0) {
        allow3Char = false;
      }
      return rgbToHex(this.r, this.g, this.b, allow3Char);
    };
    TinyColor2.prototype.toHexString = function(allow3Char) {
      if (allow3Char === void 0) {
        allow3Char = false;
      }
      return "#" + this.toHex(allow3Char);
    };
    TinyColor2.prototype.toHex8 = function(allow4Char) {
      if (allow4Char === void 0) {
        allow4Char = false;
      }
      return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
    };
    TinyColor2.prototype.toHex8String = function(allow4Char) {
      if (allow4Char === void 0) {
        allow4Char = false;
      }
      return "#" + this.toHex8(allow4Char);
    };
    TinyColor2.prototype.toHexShortString = function(allowShortChar) {
      if (allowShortChar === void 0) {
        allowShortChar = false;
      }
      return this.a === 1 ? this.toHexString(allowShortChar) : this.toHex8String(allowShortChar);
    };
    TinyColor2.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    };
    TinyColor2.prototype.toRgbString = function() {
      var r2 = Math.round(this.r);
      var g2 = Math.round(this.g);
      var b2 = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(r2, ", ").concat(g2, ", ").concat(b2, ")") : "rgba(".concat(r2, ", ").concat(g2, ", ").concat(b2, ", ").concat(this.roundA, ")");
    };
    TinyColor2.prototype.toPercentageRgb = function() {
      var fmt = function(x2) {
        return "".concat(Math.round(bound01(x2, 255) * 100), "%");
      };
      return {
        r: fmt(this.r),
        g: fmt(this.g),
        b: fmt(this.b),
        a: this.a
      };
    };
    TinyColor2.prototype.toPercentageRgbString = function() {
      var rnd = function(x2) {
        return Math.round(bound01(x2, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)") : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
    };
    TinyColor2.prototype.toName = function() {
      if (this.a === 0) {
        return "transparent";
      }
      if (this.a < 1) {
        return false;
      }
      var hex = "#" + rgbToHex(this.r, this.g, this.b, false);
      for (var _i = 0, _a = Object.entries(names); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (hex === value) {
          return key;
        }
      }
      return false;
    };
    TinyColor2.prototype.toString = function(format2) {
      var formatSet = Boolean(format2);
      format2 = format2 !== null && format2 !== void 0 ? format2 : this.format;
      var formattedString = false;
      var hasAlpha = this.a < 1 && this.a >= 0;
      var needsAlphaFormat = !formatSet && hasAlpha && (format2.startsWith("hex") || format2 === "name");
      if (needsAlphaFormat) {
        if (format2 === "name" && this.a === 0) {
          return this.toName();
        }
        return this.toRgbString();
      }
      if (format2 === "rgb") {
        formattedString = this.toRgbString();
      }
      if (format2 === "prgb") {
        formattedString = this.toPercentageRgbString();
      }
      if (format2 === "hex" || format2 === "hex6") {
        formattedString = this.toHexString();
      }
      if (format2 === "hex3") {
        formattedString = this.toHexString(true);
      }
      if (format2 === "hex4") {
        formattedString = this.toHex8String(true);
      }
      if (format2 === "hex8") {
        formattedString = this.toHex8String();
      }
      if (format2 === "name") {
        formattedString = this.toName();
      }
      if (format2 === "hsl") {
        formattedString = this.toHslString();
      }
      if (format2 === "hsv") {
        formattedString = this.toHsvString();
      }
      return formattedString || this.toHexString();
    };
    TinyColor2.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    };
    TinyColor2.prototype.clone = function() {
      return new TinyColor2(this.toString());
    };
    TinyColor2.prototype.lighten = function(amount) {
      if (amount === void 0) {
        amount = 10;
      }
      var hsl = this.toHsl();
      hsl.l += amount / 100;
      hsl.l = clamp01(hsl.l);
      return new TinyColor2(hsl);
    };
    TinyColor2.prototype.brighten = function(amount) {
      if (amount === void 0) {
        amount = 10;
      }
      var rgb = this.toRgb();
      rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
      rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
      rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
      return new TinyColor2(rgb);
    };
    TinyColor2.prototype.darken = function(amount) {
      if (amount === void 0) {
        amount = 10;
      }
      var hsl = this.toHsl();
      hsl.l -= amount / 100;
      hsl.l = clamp01(hsl.l);
      return new TinyColor2(hsl);
    };
    TinyColor2.prototype.tint = function(amount) {
      if (amount === void 0) {
        amount = 10;
      }
      return this.mix("white", amount);
    };
    TinyColor2.prototype.shade = function(amount) {
      if (amount === void 0) {
        amount = 10;
      }
      return this.mix("black", amount);
    };
    TinyColor2.prototype.desaturate = function(amount) {
      if (amount === void 0) {
        amount = 10;
      }
      var hsl = this.toHsl();
      hsl.s -= amount / 100;
      hsl.s = clamp01(hsl.s);
      return new TinyColor2(hsl);
    };
    TinyColor2.prototype.saturate = function(amount) {
      if (amount === void 0) {
        amount = 10;
      }
      var hsl = this.toHsl();
      hsl.s += amount / 100;
      hsl.s = clamp01(hsl.s);
      return new TinyColor2(hsl);
    };
    TinyColor2.prototype.greyscale = function() {
      return this.desaturate(100);
    };
    TinyColor2.prototype.spin = function(amount) {
      var hsl = this.toHsl();
      var hue = (hsl.h + amount) % 360;
      hsl.h = hue < 0 ? 360 + hue : hue;
      return new TinyColor2(hsl);
    };
    TinyColor2.prototype.mix = function(color, amount) {
      if (amount === void 0) {
        amount = 50;
      }
      var rgb1 = this.toRgb();
      var rgb2 = new TinyColor2(color).toRgb();
      var p = amount / 100;
      var rgba = {
        r: (rgb2.r - rgb1.r) * p + rgb1.r,
        g: (rgb2.g - rgb1.g) * p + rgb1.g,
        b: (rgb2.b - rgb1.b) * p + rgb1.b,
        a: (rgb2.a - rgb1.a) * p + rgb1.a
      };
      return new TinyColor2(rgba);
    };
    TinyColor2.prototype.analogous = function(results, slices) {
      if (results === void 0) {
        results = 6;
      }
      if (slices === void 0) {
        slices = 30;
      }
      var hsl = this.toHsl();
      var part = 360 / slices;
      var ret = [this];
      for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(new TinyColor2(hsl));
      }
      return ret;
    };
    TinyColor2.prototype.complement = function() {
      var hsl = this.toHsl();
      hsl.h = (hsl.h + 180) % 360;
      return new TinyColor2(hsl);
    };
    TinyColor2.prototype.monochromatic = function(results) {
      if (results === void 0) {
        results = 6;
      }
      var hsv = this.toHsv();
      var h2 = hsv.h;
      var s2 = hsv.s;
      var v2 = hsv.v;
      var res = [];
      var modification = 1 / results;
      while (results--) {
        res.push(new TinyColor2({ h: h2, s: s2, v: v2 }));
        v2 = (v2 + modification) % 1;
      }
      return res;
    };
    TinyColor2.prototype.splitcomplement = function() {
      var hsl = this.toHsl();
      var h2 = hsl.h;
      return [
        this,
        new TinyColor2({ h: (h2 + 72) % 360, s: hsl.s, l: hsl.l }),
        new TinyColor2({ h: (h2 + 216) % 360, s: hsl.s, l: hsl.l })
      ];
    };
    TinyColor2.prototype.onBackground = function(background) {
      var fg = this.toRgb();
      var bg = new TinyColor2(background).toRgb();
      var alpha = fg.a + bg.a * (1 - fg.a);
      return new TinyColor2({
        r: (fg.r * fg.a + bg.r * bg.a * (1 - fg.a)) / alpha,
        g: (fg.g * fg.a + bg.g * bg.a * (1 - fg.a)) / alpha,
        b: (fg.b * fg.a + bg.b * bg.a * (1 - fg.a)) / alpha,
        a: alpha
      });
    };
    TinyColor2.prototype.triad = function() {
      return this.polyad(3);
    };
    TinyColor2.prototype.tetrad = function() {
      return this.polyad(4);
    };
    TinyColor2.prototype.polyad = function(n2) {
      var hsl = this.toHsl();
      var h2 = hsl.h;
      var result = [this];
      var increment = 360 / n2;
      for (var i2 = 1; i2 < n2; i2++) {
        result.push(new TinyColor2({ h: (h2 + i2 * increment) % 360, s: hsl.s, l: hsl.l }));
      }
      return result;
    };
    TinyColor2.prototype.equals = function(color) {
      return this.toRgbString() === new TinyColor2(color).toRgbString();
    };
    return TinyColor2;
  }()
);
const genControlHeight = (token2) => {
  const {
    controlHeight
  } = token2;
  return {
    controlHeightSM: controlHeight * 0.75,
    controlHeightXS: controlHeight * 0.5,
    controlHeightLG: controlHeight * 1.25
  };
};
const genControlHeight$1 = genControlHeight;
function genSizeMapToken(token2) {
  const {
    sizeUnit,
    sizeStep
  } = token2;
  return {
    sizeXXL: sizeUnit * (sizeStep + 8),
    sizeXL: sizeUnit * (sizeStep + 4),
    sizeLG: sizeUnit * (sizeStep + 2),
    sizeMD: sizeUnit * (sizeStep + 1),
    sizeMS: sizeUnit * sizeStep,
    size: sizeUnit * sizeStep,
    sizeSM: sizeUnit * (sizeStep - 1),
    sizeXS: sizeUnit * (sizeStep - 2),
    sizeXXS: sizeUnit * (sizeStep - 3)
    // 4
  };
}
const defaultPresetColors = {
  blue: "#1677ff",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  pink: "#eb2f96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
};
const seedToken = _extends(_extends({}, defaultPresetColors), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: false
});
const defaultSeedToken = seedToken;
function genColorMapToken(seed, _ref) {
  let {
    generateColorPalettes: generateColorPalettes2,
    generateNeutralColorPalettes: generateNeutralColorPalettes2
  } = _ref;
  const {
    colorSuccess: colorSuccessBase,
    colorWarning: colorWarningBase,
    colorError: colorErrorBase,
    colorInfo: colorInfoBase,
    colorPrimary: colorPrimaryBase,
    colorBgBase,
    colorTextBase
  } = seed;
  const primaryColors = generateColorPalettes2(colorPrimaryBase);
  const successColors = generateColorPalettes2(colorSuccessBase);
  const warningColors = generateColorPalettes2(colorWarningBase);
  const errorColors = generateColorPalettes2(colorErrorBase);
  const infoColors = generateColorPalettes2(colorInfoBase);
  const neutralColors = generateNeutralColorPalettes2(colorBgBase, colorTextBase);
  return _extends(_extends({}, neutralColors), {
    colorPrimaryBg: primaryColors[1],
    colorPrimaryBgHover: primaryColors[2],
    colorPrimaryBorder: primaryColors[3],
    colorPrimaryBorderHover: primaryColors[4],
    colorPrimaryHover: primaryColors[5],
    colorPrimary: primaryColors[6],
    colorPrimaryActive: primaryColors[7],
    colorPrimaryTextHover: primaryColors[8],
    colorPrimaryText: primaryColors[9],
    colorPrimaryTextActive: primaryColors[10],
    colorSuccessBg: successColors[1],
    colorSuccessBgHover: successColors[2],
    colorSuccessBorder: successColors[3],
    colorSuccessBorderHover: successColors[4],
    colorSuccessHover: successColors[4],
    colorSuccess: successColors[6],
    colorSuccessActive: successColors[7],
    colorSuccessTextHover: successColors[8],
    colorSuccessText: successColors[9],
    colorSuccessTextActive: successColors[10],
    colorErrorBg: errorColors[1],
    colorErrorBgHover: errorColors[2],
    colorErrorBorder: errorColors[3],
    colorErrorBorderHover: errorColors[4],
    colorErrorHover: errorColors[5],
    colorError: errorColors[6],
    colorErrorActive: errorColors[7],
    colorErrorTextHover: errorColors[8],
    colorErrorText: errorColors[9],
    colorErrorTextActive: errorColors[10],
    colorWarningBg: warningColors[1],
    colorWarningBgHover: warningColors[2],
    colorWarningBorder: warningColors[3],
    colorWarningBorderHover: warningColors[4],
    colorWarningHover: warningColors[4],
    colorWarning: warningColors[6],
    colorWarningActive: warningColors[7],
    colorWarningTextHover: warningColors[8],
    colorWarningText: warningColors[9],
    colorWarningTextActive: warningColors[10],
    colorInfoBg: infoColors[1],
    colorInfoBgHover: infoColors[2],
    colorInfoBorder: infoColors[3],
    colorInfoBorderHover: infoColors[4],
    colorInfoHover: infoColors[4],
    colorInfo: infoColors[6],
    colorInfoActive: infoColors[7],
    colorInfoTextHover: infoColors[8],
    colorInfoText: infoColors[9],
    colorInfoTextActive: infoColors[10],
    colorBgMask: new TinyColor("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const genRadius = (radiusBase) => {
  let radiusLG = radiusBase;
  let radiusSM = radiusBase;
  let radiusXS = radiusBase;
  let radiusOuter = radiusBase;
  if (radiusBase < 6 && radiusBase >= 5) {
    radiusLG = radiusBase + 1;
  } else if (radiusBase < 16 && radiusBase >= 6) {
    radiusLG = radiusBase + 2;
  } else if (radiusBase >= 16) {
    radiusLG = 16;
  }
  if (radiusBase < 7 && radiusBase >= 5) {
    radiusSM = 4;
  } else if (radiusBase < 8 && radiusBase >= 7) {
    radiusSM = 5;
  } else if (radiusBase < 14 && radiusBase >= 8) {
    radiusSM = 6;
  } else if (radiusBase < 16 && radiusBase >= 14) {
    radiusSM = 7;
  } else if (radiusBase >= 16) {
    radiusSM = 8;
  }
  if (radiusBase < 6 && radiusBase >= 2) {
    radiusXS = 1;
  } else if (radiusBase >= 6) {
    radiusXS = 2;
  }
  if (radiusBase > 4 && radiusBase < 8) {
    radiusOuter = 4;
  } else if (radiusBase >= 8) {
    radiusOuter = 6;
  }
  return {
    borderRadius: radiusBase > 16 ? 16 : radiusBase,
    borderRadiusXS: radiusXS,
    borderRadiusSM: radiusSM,
    borderRadiusLG: radiusLG,
    borderRadiusOuter: radiusOuter
  };
};
const genRadius$1 = genRadius;
function genCommonMapToken(token2) {
  const {
    motionUnit,
    motionBase,
    borderRadius,
    lineWidth
  } = token2;
  return _extends({
    // motion
    motionDurationFast: `${(motionBase + motionUnit).toFixed(1)}s`,
    motionDurationMid: `${(motionBase + motionUnit * 2).toFixed(1)}s`,
    motionDurationSlow: `${(motionBase + motionUnit * 3).toFixed(1)}s`,
    // line
    lineWidthBold: lineWidth + 1
  }, genRadius$1(borderRadius));
}
const getAlphaColor$1 = (baseColor, alpha) => new TinyColor(baseColor).setAlpha(alpha).toRgbString();
const getSolidColor = (baseColor, brightness) => {
  const instance = new TinyColor(baseColor);
  return instance.darken(brightness).toHexString();
};
const generateColorPalettes = (baseColor) => {
  const colors = generate(baseColor);
  return {
    1: colors[0],
    2: colors[1],
    3: colors[2],
    4: colors[3],
    5: colors[4],
    6: colors[5],
    7: colors[6],
    8: colors[4],
    9: colors[5],
    10: colors[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
};
const generateNeutralColorPalettes = (bgBaseColor, textBaseColor) => {
  const colorBgBase = bgBaseColor || "#fff";
  const colorTextBase = textBaseColor || "#000";
  return {
    colorBgBase,
    colorTextBase,
    colorText: getAlphaColor$1(colorTextBase, 0.88),
    colorTextSecondary: getAlphaColor$1(colorTextBase, 0.65),
    colorTextTertiary: getAlphaColor$1(colorTextBase, 0.45),
    colorTextQuaternary: getAlphaColor$1(colorTextBase, 0.25),
    colorFill: getAlphaColor$1(colorTextBase, 0.15),
    colorFillSecondary: getAlphaColor$1(colorTextBase, 0.06),
    colorFillTertiary: getAlphaColor$1(colorTextBase, 0.04),
    colorFillQuaternary: getAlphaColor$1(colorTextBase, 0.02),
    colorBgLayout: getSolidColor(colorBgBase, 4),
    colorBgContainer: getSolidColor(colorBgBase, 0),
    colorBgElevated: getSolidColor(colorBgBase, 0),
    colorBgSpotlight: getAlphaColor$1(colorTextBase, 0.85),
    colorBorder: getSolidColor(colorBgBase, 15),
    colorBorderSecondary: getSolidColor(colorBgBase, 6)
  };
};
function getFontSizes(base) {
  const fontSizes = new Array(10).fill(null).map((_2, index2) => {
    const i2 = index2 - 1;
    const baseSize = base * Math.pow(2.71828, i2 / 5);
    const intSize = index2 > 1 ? Math.floor(baseSize) : Math.ceil(baseSize);
    return Math.floor(intSize / 2) * 2;
  });
  fontSizes[1] = base;
  return fontSizes.map((size) => {
    const height = size + 8;
    return {
      size,
      lineHeight: height / size
    };
  });
}
const genFontMapToken = (fontSize) => {
  const fontSizePairs = getFontSizes(fontSize);
  const fontSizes = fontSizePairs.map((pair) => pair.size);
  const lineHeights = fontSizePairs.map((pair) => pair.lineHeight);
  return {
    fontSizeSM: fontSizes[0],
    fontSize: fontSizes[1],
    fontSizeLG: fontSizes[2],
    fontSizeXL: fontSizes[3],
    fontSizeHeading1: fontSizes[6],
    fontSizeHeading2: fontSizes[5],
    fontSizeHeading3: fontSizes[4],
    fontSizeHeading4: fontSizes[3],
    fontSizeHeading5: fontSizes[2],
    lineHeight: lineHeights[1],
    lineHeightLG: lineHeights[2],
    lineHeightSM: lineHeights[0],
    lineHeightHeading1: lineHeights[6],
    lineHeightHeading2: lineHeights[5],
    lineHeightHeading3: lineHeights[4],
    lineHeightHeading4: lineHeights[3],
    lineHeightHeading5: lineHeights[2]
  };
};
const genFontMapToken$1 = genFontMapToken;
function derivative(token2) {
  const colorPalettes = Object.keys(defaultPresetColors).map((colorKey) => {
    const colors = generate(token2[colorKey]);
    return new Array(10).fill(1).reduce((prev2, _2, i2) => {
      prev2[`${colorKey}-${i2 + 1}`] = colors[i2];
      return prev2;
    }, {});
  }).reduce((prev2, cur) => {
    prev2 = _extends(_extends({}, prev2), cur);
    return prev2;
  }, {});
  return _extends(_extends(_extends(_extends(_extends(_extends(_extends({}, token2), colorPalettes), genColorMapToken(token2, {
    generateColorPalettes,
    generateNeutralColorPalettes
  })), genFontMapToken$1(token2.fontSize)), genSizeMapToken(token2)), genControlHeight$1(token2)), genCommonMapToken(token2));
}
function isStableColor(color) {
  return color >= 0 && color <= 255;
}
function getAlphaColor(frontColor, backgroundColor) {
  const {
    r: fR,
    g: fG,
    b: fB,
    a: originAlpha
  } = new TinyColor(frontColor).toRgb();
  if (originAlpha < 1) {
    return frontColor;
  }
  const {
    r: bR,
    g: bG,
    b: bB
  } = new TinyColor(backgroundColor).toRgb();
  for (let fA = 0.01; fA <= 1; fA += 0.01) {
    const r2 = Math.round((fR - bR * (1 - fA)) / fA);
    const g2 = Math.round((fG - bG * (1 - fA)) / fA);
    const b2 = Math.round((fB - bB * (1 - fA)) / fA);
    if (isStableColor(r2) && isStableColor(g2) && isStableColor(b2)) {
      return new TinyColor({
        r: r2,
        g: g2,
        b: b2,
        a: Math.round(fA * 100) / 100
      }).toRgbString();
    }
  }
  return new TinyColor({
    r: fR,
    g: fG,
    b: fB,
    a: 1
  }).toRgbString();
}
var __rest$9 = function(s2, e2) {
  var t2 = {};
  for (var p in s2)
    if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
      t2[p] = s2[p];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
      if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
        t2[p[i2]] = s2[p[i2]];
    }
  return t2;
};
function formatToken(derivativeToken) {
  const {
    override
  } = derivativeToken, restToken = __rest$9(derivativeToken, ["override"]);
  const overrideTokens = _extends({}, override);
  Object.keys(defaultSeedToken).forEach((token2) => {
    delete overrideTokens[token2];
  });
  const mergedToken = _extends(_extends({}, restToken), overrideTokens);
  const screenXS = 480;
  const screenSM = 576;
  const screenMD = 768;
  const screenLG = 992;
  const screenXL = 1200;
  const screenXXL = 1600;
  const screenXXXL = 2e3;
  const aliasToken = _extends(_extends(_extends({}, mergedToken), {
    colorLink: mergedToken.colorInfoText,
    colorLinkHover: mergedToken.colorInfoHover,
    colorLinkActive: mergedToken.colorInfoActive,
    // ============== Background ============== //
    colorFillContent: mergedToken.colorFillSecondary,
    colorFillContentHover: mergedToken.colorFill,
    colorFillAlter: mergedToken.colorFillQuaternary,
    colorBgContainerDisabled: mergedToken.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: mergedToken.colorBgContainer,
    colorSplit: getAlphaColor(mergedToken.colorBorderSecondary, mergedToken.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: mergedToken.colorTextQuaternary,
    colorTextDisabled: mergedToken.colorTextQuaternary,
    colorTextHeading: mergedToken.colorText,
    colorTextLabel: mergedToken.colorTextSecondary,
    colorTextDescription: mergedToken.colorTextTertiary,
    colorTextLightSolid: mergedToken.colorWhite,
    colorHighlight: mergedToken.colorError,
    colorBgTextHover: mergedToken.colorFillSecondary,
    colorBgTextActive: mergedToken.colorFill,
    colorIcon: mergedToken.colorTextTertiary,
    colorIconHover: mergedToken.colorText,
    colorErrorOutline: getAlphaColor(mergedToken.colorErrorBg, mergedToken.colorBgContainer),
    colorWarningOutline: getAlphaColor(mergedToken.colorWarningBg, mergedToken.colorBgContainer),
    // Font
    fontSizeIcon: mergedToken.fontSizeSM,
    // Control
    lineWidth: mergedToken.lineWidth,
    controlOutlineWidth: mergedToken.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: mergedToken.controlHeight / 2,
    controlItemBgHover: mergedToken.colorFillTertiary,
    controlItemBgActive: mergedToken.colorPrimaryBg,
    controlItemBgActiveHover: mergedToken.colorPrimaryBgHover,
    controlItemBgActiveDisabled: mergedToken.colorFill,
    controlTmpOutline: mergedToken.colorFillQuaternary,
    controlOutline: getAlphaColor(mergedToken.colorPrimaryBg, mergedToken.colorBgContainer),
    lineType: mergedToken.lineType,
    borderRadius: mergedToken.borderRadius,
    borderRadiusXS: mergedToken.borderRadiusXS,
    borderRadiusSM: mergedToken.borderRadiusSM,
    borderRadiusLG: mergedToken.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: mergedToken.sizeXXS,
    paddingXS: mergedToken.sizeXS,
    paddingSM: mergedToken.sizeSM,
    padding: mergedToken.size,
    paddingMD: mergedToken.sizeMD,
    paddingLG: mergedToken.sizeLG,
    paddingXL: mergedToken.sizeXL,
    paddingContentHorizontalLG: mergedToken.sizeLG,
    paddingContentVerticalLG: mergedToken.sizeMS,
    paddingContentHorizontal: mergedToken.sizeMS,
    paddingContentVertical: mergedToken.sizeSM,
    paddingContentHorizontalSM: mergedToken.size,
    paddingContentVerticalSM: mergedToken.sizeXS,
    marginXXS: mergedToken.sizeXXS,
    marginXS: mergedToken.sizeXS,
    marginSM: mergedToken.sizeSM,
    margin: mergedToken.size,
    marginMD: mergedToken.sizeMD,
    marginLG: mergedToken.sizeLG,
    marginXL: mergedToken.sizeXL,
    marginXXL: mergedToken.sizeXXL,
    boxShadow: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS,
    screenXSMin: screenXS,
    screenXSMax: screenSM - 1,
    screenSM,
    screenSMMin: screenSM,
    screenSMMax: screenMD - 1,
    screenMD,
    screenMDMin: screenMD,
    screenMDMax: screenLG - 1,
    screenLG,
    screenLGMin: screenLG,
    screenLGMax: screenXL - 1,
    screenXL,
    screenXLMin: screenXL,
    screenXLMax: screenXXL - 1,
    screenXXL,
    screenXXLMin: screenXXL,
    screenXXLMax: screenXXXL - 1,
    screenXXXL,
    screenXXXLMin: screenXXXL,
    // FIXME: component box-shadow, should be removed
    boxShadowPopoverArrow: "3px 3px 7px rgba(0, 0, 0, 0.1)",
    boxShadowCard: `
      0 1px 2px -2px ${new TinyColor("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new TinyColor("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new TinyColor("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), overrideTokens);
  return aliasToken;
}
const operationUnit = (token2) => ({
  // FIXME: This use link but is a operation unit. Seems should be a colorPrimary.
  // And Typography use this to generate link style which should not do this.
  color: token2.colorLink,
  textDecoration: "none",
  outline: "none",
  cursor: "pointer",
  transition: `color ${token2.motionDurationSlow}`,
  "&:focus, &:hover": {
    color: token2.colorLinkHover
  },
  "&:active": {
    color: token2.colorLinkActive
  }
});
const roundedArrow = (width, innerRadius, outerRadius, bgColor, boxShadow) => {
  const unitWidth = width / 2;
  const ax = 0;
  const ay = unitWidth;
  const bx = outerRadius * 1 / Math.sqrt(2);
  const by = unitWidth - outerRadius * (1 - 1 / Math.sqrt(2));
  const cx = unitWidth - innerRadius * (1 / Math.sqrt(2));
  const cy = outerRadius * (Math.sqrt(2) - 1) + innerRadius * (1 / Math.sqrt(2));
  const dx = 2 * unitWidth - cx;
  const dy = cy;
  const ex = 2 * unitWidth - bx;
  const ey = by;
  const fx = 2 * unitWidth - ax;
  const fy = ay;
  const shadowWidth = unitWidth * Math.sqrt(2) + outerRadius * (Math.sqrt(2) - 2);
  const polygonOffset = outerRadius * (Math.sqrt(2) - 1);
  return {
    pointerEvents: "none",
    width,
    height: width,
    overflow: "hidden",
    "&::after": {
      content: '""',
      position: "absolute",
      width: shadowWidth,
      height: shadowWidth,
      bottom: 0,
      insetInline: 0,
      margin: "auto",
      borderRadius: {
        _skip_check_: true,
        value: `0 0 ${innerRadius}px 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow,
      zIndex: 0,
      background: "transparent"
    },
    "&::before": {
      position: "absolute",
      bottom: 0,
      insetInlineStart: 0,
      width,
      height: width / 2,
      background: bgColor,
      clipPath: {
        _multi_value_: true,
        value: [`polygon(${polygonOffset}px 100%, 50% ${polygonOffset}px, ${2 * unitWidth - polygonOffset}px 100%, ${polygonOffset}px 100%)`, `path('M ${ax} ${ay} A ${outerRadius} ${outerRadius} 0 0 0 ${bx} ${by} L ${cx} ${cy} A ${innerRadius} ${innerRadius} 0 0 1 ${dx} ${dy} L ${ex} ${ey} A ${outerRadius} ${outerRadius} 0 0 0 ${fx} ${fy} Z')`]
      },
      content: '""'
    }
  };
};
function genPresetColor(token2, genCss) {
  return PresetColors.reduce((prev2, colorKey) => {
    const lightColor = token2[`${colorKey}-1`];
    const lightBorderColor = token2[`${colorKey}-3`];
    const darkColor = token2[`${colorKey}-6`];
    const textColor = token2[`${colorKey}-7`];
    return _extends(_extends({}, prev2), genCss(colorKey, {
      lightColor,
      lightBorderColor,
      darkColor,
      textColor
    }));
  }, {});
}
const textEllipsis = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
};
const resetComponent = (token2) => ({
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  color: token2.colorText,
  fontSize: token2.fontSize,
  // font-variant: @font-variant-base;
  lineHeight: token2.lineHeight,
  listStyle: "none",
  // font-feature-settings: @font-feature-settings-base;
  fontFamily: token2.fontFamily
});
const resetIcon = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
});
const clearFix = () => ({
  // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
  "&::before": {
    display: "table",
    content: '""'
  },
  "&::after": {
    // https://github.com/ant-design/ant-design/issues/21864
    display: "table",
    clear: "both",
    content: '""'
  }
});
const genLinkStyle = (token2) => ({
  a: {
    color: token2.colorLink,
    textDecoration: token2.linkDecoration,
    backgroundColor: "transparent",
    outline: "none",
    cursor: "pointer",
    transition: `color ${token2.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    "&:hover": {
      color: token2.colorLinkHover
    },
    "&:active": {
      color: token2.colorLinkActive
    },
    [`&:active,
  &:hover`]: {
      textDecoration: token2.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: token2.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: token2.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
});
const genCommonStyle = (token2, componentPrefixCls) => {
  const {
    fontFamily,
    fontSize
  } = token2;
  const rootPrefixSelector = `[class^="${componentPrefixCls}"], [class*=" ${componentPrefixCls}"]`;
  return {
    [rootPrefixSelector]: {
      fontFamily,
      fontSize,
      boxSizing: "border-box",
      "&::before, &::after": {
        boxSizing: "border-box"
      },
      [rootPrefixSelector]: {
        boxSizing: "border-box",
        "&::before, &::after": {
          boxSizing: "border-box"
        }
      }
    }
  };
};
const genFocusOutline = (token2) => ({
  outline: `${token2.lineWidthBold}px solid ${token2.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
});
const genFocusStyle = (token2) => ({
  "&:focus-visible": _extends({}, genFocusOutline(token2))
});
function genComponentStyleHook(component, styleFn, getDefaultToken) {
  return (_prefixCls) => {
    const prefixCls = computed(() => _prefixCls === null || _prefixCls === void 0 ? void 0 : _prefixCls.value);
    const [theme, token2, hashId] = useToken();
    const {
      getPrefixCls,
      iconPrefixCls
    } = useConfigContextInject();
    const rootPrefixCls = computed(() => getPrefixCls());
    const sharedInfo = computed(() => {
      return {
        theme: theme.value,
        token: token2.value,
        hashId: hashId.value,
        path: ["Shared", rootPrefixCls.value]
      };
    });
    useStyleRegister(sharedInfo, () => [{
      // Link
      "&": genLinkStyle(token2.value)
    }]);
    const componentInfo = computed(() => {
      return {
        theme: theme.value,
        token: token2.value,
        hashId: hashId.value,
        path: [component, prefixCls.value, iconPrefixCls.value]
      };
    });
    return [useStyleRegister(componentInfo, () => {
      const {
        token: proxyToken,
        flush
      } = statisticToken(token2.value);
      const defaultComponentToken = typeof getDefaultToken === "function" ? getDefaultToken(proxyToken) : getDefaultToken;
      const mergedComponentToken = _extends(_extends({}, defaultComponentToken), token2.value[component]);
      const componentCls = `.${prefixCls.value}`;
      const mergedToken = merge(proxyToken, {
        componentCls,
        prefixCls: prefixCls.value,
        iconCls: `.${iconPrefixCls.value}`,
        antCls: `.${rootPrefixCls.value}`
      }, mergedComponentToken);
      const styleInterpolation = styleFn(mergedToken, {
        hashId: hashId.value,
        prefixCls: prefixCls.value,
        rootPrefixCls: rootPrefixCls.value,
        iconPrefixCls: iconPrefixCls.value,
        overrideComponentToken: token2.value[component]
      });
      flush(component, mergedComponentToken);
      return [genCommonStyle(token2.value, prefixCls.value), styleInterpolation];
    }), hashId];
  };
}
const enableStatistic = typeof CSSINJS_STATISTIC !== "undefined";
let recording = true;
function merge() {
  for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
    objs[_key] = arguments[_key];
  }
  if (!enableStatistic) {
    return _extends({}, ...objs);
  }
  recording = false;
  const ret = {};
  objs.forEach((obj) => {
    const keys2 = Object.keys(obj);
    keys2.forEach((key) => {
      Object.defineProperty(ret, key, {
        configurable: true,
        enumerable: true,
        get: () => obj[key]
      });
    });
  });
  recording = true;
  return ret;
}
function noop$2() {
}
function statisticToken(token2) {
  let tokenKeys2;
  let proxy = token2;
  let flush = noop$2;
  if (enableStatistic) {
    tokenKeys2 = /* @__PURE__ */ new Set();
    proxy = new Proxy(token2, {
      get(obj, prop) {
        if (recording) {
          tokenKeys2.add(prop);
        }
        return obj[prop];
      }
    });
    flush = (componentName, componentToken) => {
      ({
        global: Array.from(tokenKeys2),
        component: componentToken
      });
    };
  }
  return {
    token: proxy,
    keys: tokenKeys2,
    flush
  };
}
const defaultTheme = createTheme(derivative);
const defaultConfig = {
  token: defaultSeedToken,
  hashed: true
};
const DesignTokenContextKey = Symbol("DesignTokenContext");
const globalDesignTokenApi = shallowRef();
function useToken() {
  const designTokenContext = inject(DesignTokenContextKey, computed(() => globalDesignTokenApi.value || defaultConfig));
  const salt = computed(() => `${version}-${designTokenContext.value.hashed || ""}`);
  const mergedTheme = computed(() => designTokenContext.value.theme || defaultTheme);
  const cacheToken = useCacheToken(mergedTheme, computed(() => [defaultSeedToken, designTokenContext.value.token]), computed(() => ({
    salt: salt.value,
    override: _extends({
      override: designTokenContext.value.token
    }, designTokenContext.value.components),
    formatToken
  })));
  return [mergedTheme, computed(() => cacheToken.value[0]), computed(() => designTokenContext.value.hashed ? cacheToken.value[1] : "")];
}
const Empty$2 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, token2] = useToken();
    const themeStyle = computed(() => {
      const bgColor = new TinyColor(token2.value.colorBgBase);
      if (bgColor.toHsl().l < 0.5) {
        return {
          opacity: 0.65
        };
      }
      return {};
    });
    return () => createVNode("svg", {
      "style": themeStyle.value,
      "width": "184",
      "height": "152",
      "viewBox": "0 0 184 152",
      "xmlns": "http://www.w3.org/2000/svg"
    }, [createVNode("g", {
      "fill": "none",
      "fill-rule": "evenodd"
    }, [createVNode("g", {
      "transform": "translate(24 31.67)"
    }, [createVNode("ellipse", {
      "fill-opacity": ".8",
      "fill": "#F5F5F7",
      "cx": "67.797",
      "cy": "106.89",
      "rx": "67.797",
      "ry": "12.668"
    }, null), createVNode("path", {
      "d": "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
      "fill": "#AEB8C2"
    }, null), createVNode("path", {
      "d": "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
      "fill": "url(#linearGradient-1)",
      "transform": "translate(13.56)"
    }, null), createVNode("path", {
      "d": "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
      "fill": "#F5F5F7"
    }, null), createVNode("path", {
      "d": "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
      "fill": "#DCE0E6"
    }, null)]), createVNode("path", {
      "d": "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
      "fill": "#DCE0E6"
    }, null), createVNode("g", {
      "transform": "translate(149.65 15.383)",
      "fill": "#FFF"
    }, [createVNode("ellipse", {
      "cx": "20.654",
      "cy": "3.167",
      "rx": "2.849",
      "ry": "2.815"
    }, null), createVNode("path", {
      "d": "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
    }, null)])])]);
  }
});
Empty$2.PRESENTED_IMAGE_DEFAULT = true;
const DefaultEmptyImg = Empty$2;
const Simple = defineComponent({
  compatConfig: {
    MODE: 3
  },
  setup() {
    const [, token2] = useToken();
    const color = computed(() => {
      const {
        colorFill,
        colorFillTertiary,
        colorFillQuaternary,
        colorBgContainer
      } = token2.value;
      return {
        borderColor: new TinyColor(colorFill).onBackground(colorBgContainer).toHexString(),
        shadowColor: new TinyColor(colorFillTertiary).onBackground(colorBgContainer).toHexString(),
        contentColor: new TinyColor(colorFillQuaternary).onBackground(colorBgContainer).toHexString()
      };
    });
    return () => createVNode("svg", {
      "width": "64",
      "height": "41",
      "viewBox": "0 0 64 41",
      "xmlns": "http://www.w3.org/2000/svg"
    }, [createVNode("g", {
      "transform": "translate(0 1)",
      "fill": "none",
      "fill-rule": "evenodd"
    }, [createVNode("ellipse", {
      "fill": color.value.shadowColor,
      "cx": "32",
      "cy": "33",
      "rx": "32",
      "ry": "7"
    }, null), createVNode("g", {
      "fill-rule": "nonzero",
      "stroke": color.value.borderColor
    }, [createVNode("path", {
      "d": "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
    }, null), createVNode("path", {
      "d": "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
      "fill": color.value.contentColor
    }, null)])])]);
  }
});
Simple.PRESENTED_IMAGE_SIMPLE = true;
const SimpleEmptyImg = Simple;
const genSharedEmptyStyle = (token2) => {
  const {
    componentCls,
    margin,
    marginXS,
    marginXL,
    fontSize,
    lineHeight
  } = token2;
  return {
    [componentCls]: {
      marginInline: marginXS,
      fontSize,
      lineHeight,
      textAlign: "center",
      // 原来 &-image 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${componentCls}-image`]: {
        height: token2.emptyImgHeight,
        marginBottom: marginXS,
        opacity: token2.opacityImage,
        img: {
          height: "100%"
        },
        svg: {
          height: "100%",
          margin: "auto"
        }
      },
      // 原来 &-footer 没有父子结构，现在为了外层承担我们的hashId，改成父子结果
      [`${componentCls}-footer`]: {
        marginTop: margin
      },
      "&-normal": {
        marginBlock: marginXL,
        color: token2.colorTextDisabled,
        [`${componentCls}-image`]: {
          height: token2.emptyImgHeightMD
        }
      },
      "&-small": {
        marginBlock: marginXS,
        color: token2.colorTextDisabled,
        [`${componentCls}-image`]: {
          height: token2.emptyImgHeightSM
        }
      }
    }
  };
};
const useStyle$4 = genComponentStyleHook("Empty", (token2) => {
  const {
    componentCls,
    controlHeightLG
  } = token2;
  const emptyToken = merge(token2, {
    emptyImgCls: `${componentCls}-img`,
    emptyImgHeight: controlHeightLG * 2.5,
    emptyImgHeightMD: controlHeightLG,
    emptyImgHeightSM: controlHeightLG * 0.875
  });
  return [genSharedEmptyStyle(emptyToken)];
});
var __rest$8 = function(s2, e2) {
  var t2 = {};
  for (var p in s2)
    if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
      t2[p] = s2[p];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
      if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
        t2[p[i2]] = s2[p[i2]];
    }
  return t2;
};
const emptyProps = () => ({
  prefixCls: String,
  imageStyle: objectType(),
  image: anyType(),
  description: anyType()
});
const Empty = defineComponent({
  name: "AEmpty",
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: false,
  props: emptyProps(),
  setup(props, _ref) {
    let {
      slots = {},
      attrs
    } = _ref;
    const {
      direction,
      prefixCls: prefixClsRef
    } = useConfigInject("empty", props);
    const [wrapSSR, hashId] = useStyle$4(prefixClsRef);
    return () => {
      var _a, _b;
      const prefixCls = prefixClsRef.value;
      const _c = _extends(_extends({}, props), attrs), {
        image: mergedImage = ((_a = slots.image) === null || _a === void 0 ? void 0 : _a.call(slots)) || h$1(DefaultEmptyImg),
        description = ((_b = slots.description) === null || _b === void 0 ? void 0 : _b.call(slots)) || void 0,
        imageStyle,
        class: className = ""
      } = _c, restProps = __rest$8(_c, ["image", "description", "imageStyle", "class"]);
      const image = typeof mergedImage === "function" ? mergedImage() : mergedImage;
      const isNormal = typeof image === "object" && "type" in image && image.type.PRESENTED_IMAGE_SIMPLE;
      return wrapSSR(createVNode(LocaleReceiver, {
        "componentName": "Empty",
        "children": (locale2) => {
          const des = typeof description !== "undefined" ? description : locale2.description;
          const alt = typeof des === "string" ? des : "empty";
          let imageNode = null;
          if (typeof image === "string") {
            imageNode = createVNode("img", {
              "alt": alt,
              "src": image
            }, null);
          } else {
            imageNode = image;
          }
          return createVNode("div", _objectSpread2$1({
            "class": classNames(prefixCls, className, hashId.value, {
              [`${prefixCls}-normal`]: isNormal,
              [`${prefixCls}-rtl`]: direction.value === "rtl"
            })
          }, restProps), [createVNode("div", {
            "class": `${prefixCls}-image`,
            "style": imageStyle
          }, [imageNode]), des && createVNode("p", {
            "class": `${prefixCls}-description`
          }, [des]), slots.default && createVNode("div", {
            "class": `${prefixCls}-footer`
          }, [filterEmpty(slots.default())])]);
        }
      }, null));
    };
  }
});
Empty.PRESENTED_IMAGE_DEFAULT = () => h$1(DefaultEmptyImg);
Empty.PRESENTED_IMAGE_SIMPLE = () => h$1(SimpleEmptyImg);
const Empty$1 = withInstall(Empty);
const DefaultRenderEmpty = (props) => {
  const {
    prefixCls
  } = useConfigInject("empty", props);
  const renderHtml = (componentName) => {
    switch (componentName) {
      case "Table":
      case "List":
        return createVNode(Empty$1, {
          "image": Empty$1.PRESENTED_IMAGE_SIMPLE
        }, null);
      case "Select":
      case "TreeSelect":
      case "Cascader":
      case "Transfer":
      case "Mentions":
        return createVNode(Empty$1, {
          "image": Empty$1.PRESENTED_IMAGE_SIMPLE,
          "class": `${prefixCls.value}-small`
        }, null);
      default:
        return createVNode(Empty$1, null, null);
    }
  };
  return renderHtml(props.componentName);
};
const SizeContextKey = Symbol("SizeContextKey");
const useInjectSize = () => {
  return inject(SizeContextKey, ref(void 0));
};
const useConfigInject = (name, props) => {
  const sizeContext = useInjectSize();
  const disabledContext = useInjectDisabled();
  const configProvider = inject(configProviderKey, _extends(_extends({}, defaultConfigProvider), {
    renderEmpty: (name2) => h$1(DefaultRenderEmpty, {
      componentName: name2
    })
  }));
  const prefixCls = computed(() => configProvider.getPrefixCls(name, props.prefixCls));
  const direction = computed(() => {
    var _a, _b;
    return (_a = props.direction) !== null && _a !== void 0 ? _a : (_b = configProvider.direction) === null || _b === void 0 ? void 0 : _b.value;
  });
  const iconPrefixCls = computed(() => {
    var _a;
    return (_a = props.iconPrefixCls) !== null && _a !== void 0 ? _a : configProvider.iconPrefixCls.value;
  });
  const rootPrefixCls = computed(() => configProvider.getPrefixCls());
  const autoInsertSpaceInButton = computed(() => {
    var _a;
    return (_a = configProvider.autoInsertSpaceInButton) === null || _a === void 0 ? void 0 : _a.value;
  });
  const renderEmpty = configProvider.renderEmpty;
  const space = configProvider.space;
  const pageHeader = configProvider.pageHeader;
  const form = configProvider.form;
  const getTargetContainer = computed(() => {
    var _a, _b;
    return (_a = props.getTargetContainer) !== null && _a !== void 0 ? _a : (_b = configProvider.getTargetContainer) === null || _b === void 0 ? void 0 : _b.value;
  });
  const getPopupContainer = computed(() => {
    var _a, _b, _c;
    return (_b = (_a = props.getContainer) !== null && _a !== void 0 ? _a : props.getPopupContainer) !== null && _b !== void 0 ? _b : (_c = configProvider.getPopupContainer) === null || _c === void 0 ? void 0 : _c.value;
  });
  const dropdownMatchSelectWidth = computed(() => {
    var _a, _b;
    return (_a = props.dropdownMatchSelectWidth) !== null && _a !== void 0 ? _a : (_b = configProvider.dropdownMatchSelectWidth) === null || _b === void 0 ? void 0 : _b.value;
  });
  const virtual = computed(() => {
    var _a;
    return (props.virtual === void 0 ? ((_a = configProvider.virtual) === null || _a === void 0 ? void 0 : _a.value) !== false : props.virtual !== false) && dropdownMatchSelectWidth.value !== false;
  });
  const size = computed(() => props.size || sizeContext.value);
  const autocomplete = computed(() => {
    var _a, _b, _c;
    return (_a = props.autocomplete) !== null && _a !== void 0 ? _a : (_c = (_b = configProvider.input) === null || _b === void 0 ? void 0 : _b.value) === null || _c === void 0 ? void 0 : _c.autocomplete;
  });
  const disabled = computed(() => {
    var _a;
    return (_a = props.disabled) !== null && _a !== void 0 ? _a : disabledContext.value;
  });
  const csp = computed(() => {
    var _a;
    return (_a = props.csp) !== null && _a !== void 0 ? _a : configProvider.csp;
  });
  const wave = computed(() => {
    var _a, _b;
    return (_a = props.wave) !== null && _a !== void 0 ? _a : (_b = configProvider.wave) === null || _b === void 0 ? void 0 : _b.value;
  });
  return {
    configProvider,
    prefixCls,
    direction,
    size,
    getTargetContainer,
    getPopupContainer,
    space,
    pageHeader,
    form,
    autoInsertSpaceInButton,
    renderEmpty,
    virtual,
    dropdownMatchSelectWidth,
    rootPrefixCls,
    getPrefixCls: configProvider.getPrefixCls,
    autocomplete,
    csp,
    iconPrefixCls,
    disabled,
    select: configProvider.select,
    wave
  };
};
function omit(obj, fields) {
  const shallowCopy = _extends({}, obj);
  for (let i2 = 0; i2 < fields.length; i2 += 1) {
    const key = fields[i2];
    delete shallowCopy[key];
  }
  return shallowCopy;
}
function e(e2, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var r2 = t2[n2];
    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e2, r2.key, r2);
  }
}
function t(t2, n2, r2) {
  return n2 && e(t2.prototype, n2), r2 && e(t2, r2), t2;
}
function n() {
  return (n = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }).apply(this, arguments);
}
function r(e2, t2) {
  e2.prototype = Object.create(t2.prototype), e2.prototype.constructor = e2, e2.__proto__ = t2;
}
function i(e2, t2) {
  if (null == e2)
    return {};
  var n2, r2, i2 = {}, o2 = Object.keys(e2);
  for (r2 = 0; r2 < o2.length; r2++)
    t2.indexOf(n2 = o2[r2]) >= 0 || (i2[n2] = e2[n2]);
  return i2;
}
function o(e2) {
  return 1 == (null != (t2 = e2) && "object" == typeof t2 && false === Array.isArray(t2)) && "[object Object]" === Object.prototype.toString.call(e2);
  var t2;
}
var u = Object.prototype, a = u.toString, f = u.hasOwnProperty, c = /^\s*function (\w+)/;
function l(e2) {
  var t2, n2 = null !== (t2 = null == e2 ? void 0 : e2.type) && void 0 !== t2 ? t2 : e2;
  if (n2) {
    var r2 = n2.toString().match(c);
    return r2 ? r2[1] : "";
  }
  return "";
}
var s = function(e2) {
  var t2, n2;
  return false !== o(e2) && "function" == typeof (t2 = e2.constructor) && false !== o(n2 = t2.prototype) && false !== n2.hasOwnProperty("isPrototypeOf");
}, v = function(e2) {
  return e2;
}, y = v;
var d = function(e2, t2) {
  return f.call(e2, t2);
}, h = Number.isInteger || function(e2) {
  return "number" == typeof e2 && isFinite(e2) && Math.floor(e2) === e2;
}, b = Array.isArray || function(e2) {
  return "[object Array]" === a.call(e2);
}, O = function(e2) {
  return "[object Function]" === a.call(e2);
}, g = function(e2) {
  return s(e2) && d(e2, "_vueTypes_name");
}, m = function(e2) {
  return s(e2) && (d(e2, "type") || ["_vueTypes_name", "validator", "default", "required"].some(function(t2) {
    return d(e2, t2);
  }));
};
function j(e2, t2) {
  return Object.defineProperty(e2.bind(t2), "__original", { value: e2 });
}
function _(e2, t2, n2) {
  var r2;
  void 0 === n2 && (n2 = false);
  var i2 = true, o2 = "";
  r2 = s(e2) ? e2 : { type: e2 };
  var u2 = g(r2) ? r2._vueTypes_name + " - " : "";
  if (m(r2) && null !== r2.type) {
    if (void 0 === r2.type || true === r2.type)
      return i2;
    if (!r2.required && void 0 === t2)
      return i2;
    b(r2.type) ? (i2 = r2.type.some(function(e3) {
      return true === _(e3, t2, true);
    }), o2 = r2.type.map(function(e3) {
      return l(e3);
    }).join(" or ")) : i2 = "Array" === (o2 = l(r2)) ? b(t2) : "Object" === o2 ? s(t2) : "String" === o2 || "Number" === o2 || "Boolean" === o2 || "Function" === o2 ? function(e3) {
      if (null == e3)
        return "";
      var t3 = e3.constructor.toString().match(c);
      return t3 ? t3[1] : "";
    }(t2) === o2 : t2 instanceof r2.type;
  }
  if (!i2) {
    var a2 = u2 + 'value "' + t2 + '" should be of type "' + o2 + '"';
    return false === n2 ? (y(a2), false) : a2;
  }
  if (d(r2, "validator") && O(r2.validator)) {
    var f2 = y, v2 = [];
    if (y = function(e3) {
      v2.push(e3);
    }, i2 = r2.validator(t2), y = f2, !i2) {
      var p = (v2.length > 1 ? "* " : "") + v2.join("\n* ");
      return v2.length = 0, false === n2 ? (y(p), i2) : p;
    }
  }
  return i2;
}
function T(e2, t2) {
  var n2 = Object.defineProperties(t2, { _vueTypes_name: { value: e2, writable: true }, isRequired: { get: function() {
    return this.required = true, this;
  } }, def: { value: function(e3) {
    return void 0 !== e3 || this.default ? O(e3) || true === _(this, e3, true) ? (this.default = b(e3) ? function() {
      return [].concat(e3);
    } : s(e3) ? function() {
      return Object.assign({}, e3);
    } : e3, this) : (y(this._vueTypes_name + ' - invalid default value: "' + e3 + '"'), this) : this;
  } } }), r2 = n2.validator;
  return O(r2) && (n2.validator = j(r2, n2)), n2;
}
function w(e2, t2) {
  var n2 = T(e2, t2);
  return Object.defineProperty(n2, "validate", { value: function(e3) {
    return O(this.validator) && y(this._vueTypes_name + " - calling .validate() will overwrite the current custom validator function. Validator info:\n" + JSON.stringify(this)), this.validator = j(e3, this), this;
  } });
}
function k(e2, t2, n2) {
  var r2, o2, u2 = (r2 = t2, o2 = {}, Object.getOwnPropertyNames(r2).forEach(function(e3) {
    o2[e3] = Object.getOwnPropertyDescriptor(r2, e3);
  }), Object.defineProperties({}, o2));
  if (u2._vueTypes_name = e2, !s(n2))
    return u2;
  var a2, f2, c2 = n2.validator, l2 = i(n2, ["validator"]);
  if (O(c2)) {
    var v2 = u2.validator;
    v2 && (v2 = null !== (f2 = (a2 = v2).__original) && void 0 !== f2 ? f2 : a2), u2.validator = j(v2 ? function(e3) {
      return v2.call(this, e3) && c2.call(this, e3);
    } : c2, u2);
  }
  return Object.assign(u2, l2);
}
function P(e2) {
  return e2.replace(/^(?!\s*$)/gm, "  ");
}
var x = function() {
  return w("any", {});
}, A = function() {
  return w("function", { type: Function });
}, E = function() {
  return w("boolean", { type: Boolean });
}, N = function() {
  return w("string", { type: String });
}, q = function() {
  return w("number", { type: Number });
}, S = function() {
  return w("array", { type: Array });
}, V = function() {
  return w("object", { type: Object });
}, F = function() {
  return T("integer", { type: Number, validator: function(e2) {
    return h(e2);
  } });
}, D = function() {
  return T("symbol", { validator: function(e2) {
    return "symbol" == typeof e2;
  } });
};
function L(e2, t2) {
  if (void 0 === t2 && (t2 = "custom validation failed"), "function" != typeof e2)
    throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return T(e2.name || "<<anonymous function>>", { validator: function(n2) {
    var r2 = e2(n2);
    return r2 || y(this._vueTypes_name + " - " + t2), r2;
  } });
}
function Y(e2) {
  if (!b(e2))
    throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  var t2 = 'oneOf - value should be one of "' + e2.join('", "') + '".', n2 = e2.reduce(function(e3, t3) {
    if (null != t3) {
      var n3 = t3.constructor;
      -1 === e3.indexOf(n3) && e3.push(n3);
    }
    return e3;
  }, []);
  return T("oneOf", { type: n2.length > 0 ? n2 : void 0, validator: function(n3) {
    var r2 = -1 !== e2.indexOf(n3);
    return r2 || y(t2), r2;
  } });
}
function B(e2) {
  if (!b(e2))
    throw new TypeError("[VueTypes error]: You must provide an array as argument");
  for (var t2 = false, n2 = [], r2 = 0; r2 < e2.length; r2 += 1) {
    var i2 = e2[r2];
    if (m(i2)) {
      if (g(i2) && "oneOf" === i2._vueTypes_name) {
        n2 = n2.concat(i2.type);
        continue;
      }
      if (O(i2.validator) && (t2 = true), true !== i2.type && i2.type) {
        n2 = n2.concat(i2.type);
        continue;
      }
    }
    n2.push(i2);
  }
  return n2 = n2.filter(function(e3, t3) {
    return n2.indexOf(e3) === t3;
  }), T("oneOfType", t2 ? { type: n2, validator: function(t3) {
    var n3 = [], r3 = e2.some(function(e3) {
      var r4 = _(g(e3) && "oneOf" === e3._vueTypes_name ? e3.type || null : e3, t3, true);
      return "string" == typeof r4 && n3.push(r4), true === r4;
    });
    return r3 || y("oneOfType - provided value does not match any of the " + n3.length + " passed-in validators:\n" + P(n3.join("\n"))), r3;
  } } : { type: n2 });
}
function I(e2) {
  return T("arrayOf", { type: Array, validator: function(t2) {
    var n2, r2 = t2.every(function(t3) {
      return true === (n2 = _(e2, t3, true));
    });
    return r2 || y("arrayOf - value validation error:\n" + P(n2)), r2;
  } });
}
function J(e2) {
  return T("instanceOf", { type: e2 });
}
function M(e2) {
  return T("objectOf", { type: Object, validator: function(t2) {
    var n2, r2 = Object.keys(t2).every(function(r3) {
      return true === (n2 = _(e2, t2[r3], true));
    });
    return r2 || y("objectOf - value validation error:\n" + P(n2)), r2;
  } });
}
function R(e2) {
  var t2 = Object.keys(e2), n2 = t2.filter(function(t3) {
    var n3;
    return !!(null === (n3 = e2[t3]) || void 0 === n3 ? void 0 : n3.required);
  }), r2 = T("shape", { type: Object, validator: function(r3) {
    var i2 = this;
    if (!s(r3))
      return false;
    var o2 = Object.keys(r3);
    if (n2.length > 0 && n2.some(function(e3) {
      return -1 === o2.indexOf(e3);
    })) {
      var u2 = n2.filter(function(e3) {
        return -1 === o2.indexOf(e3);
      });
      return y(1 === u2.length ? 'shape - required property "' + u2[0] + '" is not defined.' : 'shape - required properties "' + u2.join('", "') + '" are not defined.'), false;
    }
    return o2.every(function(n3) {
      if (-1 === t2.indexOf(n3))
        return true === i2._vueTypes_isLoose || (y('shape - shape definition does not include a "' + n3 + '" property. Allowed keys: "' + t2.join('", "') + '".'), false);
      var o3 = _(e2[n3], r3[n3], true);
      return "string" == typeof o3 && y('shape - "' + n3 + '" property validation error:\n ' + P(o3)), true === o3;
    });
  } });
  return Object.defineProperty(r2, "_vueTypes_isLoose", { writable: true, value: false }), Object.defineProperty(r2, "loose", { get: function() {
    return this._vueTypes_isLoose = true, this;
  } }), r2;
}
var $ = function() {
  function e2() {
  }
  return e2.extend = function(e3) {
    var t2 = this;
    if (b(e3))
      return e3.forEach(function(e4) {
        return t2.extend(e4);
      }), this;
    var n2 = e3.name, r2 = e3.validate, o2 = void 0 !== r2 && r2, u2 = e3.getter, a2 = void 0 !== u2 && u2, f2 = i(e3, ["name", "validate", "getter"]);
    if (d(this, n2))
      throw new TypeError('[VueTypes error]: Type "' + n2 + '" already defined');
    var c2, l2 = f2.type;
    return g(l2) ? (delete f2.type, Object.defineProperty(this, n2, a2 ? { get: function() {
      return k(n2, l2, f2);
    } } : { value: function() {
      var e4, t3 = k(n2, l2, f2);
      return t3.validator && (t3.validator = (e4 = t3.validator).bind.apply(e4, [t3].concat([].slice.call(arguments)))), t3;
    } })) : (c2 = a2 ? { get: function() {
      var e4 = Object.assign({}, f2);
      return o2 ? w(n2, e4) : T(n2, e4);
    }, enumerable: true } : { value: function() {
      var e4, t3, r3 = Object.assign({}, f2);
      return e4 = o2 ? w(n2, r3) : T(n2, r3), r3.validator && (e4.validator = (t3 = r3.validator).bind.apply(t3, [e4].concat([].slice.call(arguments)))), e4;
    }, enumerable: true }, Object.defineProperty(this, n2, c2));
  }, t(e2, null, [{ key: "any", get: function() {
    return x();
  } }, { key: "func", get: function() {
    return A().def(this.defaults.func);
  } }, { key: "bool", get: function() {
    return E().def(this.defaults.bool);
  } }, { key: "string", get: function() {
    return N().def(this.defaults.string);
  } }, { key: "number", get: function() {
    return q().def(this.defaults.number);
  } }, { key: "array", get: function() {
    return S().def(this.defaults.array);
  } }, { key: "object", get: function() {
    return V().def(this.defaults.object);
  } }, { key: "integer", get: function() {
    return F().def(this.defaults.integer);
  } }, { key: "symbol", get: function() {
    return D();
  } }]), e2;
}();
function z(e2) {
  var i2;
  return void 0 === e2 && (e2 = { func: function() {
  }, bool: true, string: "", number: 0, array: function() {
    return [];
  }, object: function() {
    return {};
  }, integer: 0 }), (i2 = function(i3) {
    function o2() {
      return i3.apply(this, arguments) || this;
    }
    return r(o2, i3), t(o2, null, [{ key: "sensibleDefaults", get: function() {
      return n({}, this.defaults);
    }, set: function(t2) {
      this.defaults = false !== t2 ? n({}, true !== t2 ? t2 : e2) : {};
    } }]), o2;
  }($)).defaults = n({}, e2), i2;
}
$.defaults = {}, $.custom = L, $.oneOf = Y, $.instanceOf = J, $.oneOfType = B, $.arrayOf = I, $.objectOf = M, $.shape = R, $.utils = { validate: function(e2, t2) {
  return true === _(t2, e2, true);
}, toType: function(e2, t2, n2) {
  return void 0 === n2 && (n2 = false), n2 ? w(e2, t2) : T(e2, t2);
} };
(function(e2) {
  function t2() {
    return e2.apply(this, arguments) || this;
  }
  return r(t2, e2), t2;
})(z());
const PropTypes = z({
  func: void 0,
  bool: void 0,
  string: void 0,
  number: void 0,
  array: void 0,
  object: void 0,
  integer: void 0
});
PropTypes.extend([{
  name: "looseBool",
  getter: true,
  type: Boolean,
  default: void 0
}, {
  name: "style",
  getter: true,
  type: [String, Object],
  default: void 0
}, {
  name: "VueNode",
  getter: true,
  type: null
}]);
const PropTypes$1 = PropTypes;
function returnEmptyString() {
  return "";
}
function returnDocument(element) {
  if (element) {
    return element.ownerDocument;
  }
  return window.document;
}
function noop$1() {
}
const triggerProps = () => ({
  action: PropTypes$1.oneOfType([PropTypes$1.string, PropTypes$1.arrayOf(PropTypes$1.string)]).def([]),
  showAction: PropTypes$1.any.def([]),
  hideAction: PropTypes$1.any.def([]),
  getPopupClassNameFromAlign: PropTypes$1.any.def(returnEmptyString),
  onPopupVisibleChange: Function,
  afterPopupVisibleChange: PropTypes$1.func.def(noop$1),
  popup: PropTypes$1.any,
  arrow: PropTypes$1.bool.def(true),
  popupStyle: {
    type: Object,
    default: void 0
  },
  prefixCls: PropTypes$1.string.def("rc-trigger-popup"),
  popupClassName: PropTypes$1.string.def(""),
  popupPlacement: String,
  builtinPlacements: PropTypes$1.object,
  popupTransitionName: String,
  popupAnimation: PropTypes$1.any,
  mouseEnterDelay: PropTypes$1.number.def(0),
  mouseLeaveDelay: PropTypes$1.number.def(0.1),
  zIndex: Number,
  focusDelay: PropTypes$1.number.def(0),
  blurDelay: PropTypes$1.number.def(0.15),
  getPopupContainer: Function,
  getDocument: PropTypes$1.func.def(returnDocument),
  forceRender: {
    type: Boolean,
    default: void 0
  },
  destroyPopupOnHide: {
    type: Boolean,
    default: false
  },
  mask: {
    type: Boolean,
    default: false
  },
  maskClosable: {
    type: Boolean,
    default: true
  },
  // onPopupAlign: PropTypes.func.def(noop),
  popupAlign: PropTypes$1.object.def(() => ({})),
  popupVisible: {
    type: Boolean,
    default: void 0
  },
  defaultPopupVisible: {
    type: Boolean,
    default: false
  },
  maskTransitionName: String,
  maskAnimation: String,
  stretch: String,
  alignPoint: {
    type: Boolean,
    default: void 0
  },
  autoDestroy: {
    type: Boolean,
    default: false
  },
  mobile: Object,
  getTriggerDOMNode: Function
});
const innerProps = {
  visible: Boolean,
  prefixCls: String,
  zIndex: Number,
  destroyPopupOnHide: Boolean,
  forceRender: Boolean,
  arrow: {
    type: Boolean,
    default: true
  },
  // Legacy Motion
  animation: [String, Object],
  transitionName: String,
  // Measure
  stretch: {
    type: String
  },
  // Align
  align: {
    type: Object
  },
  point: {
    type: Object
  },
  getRootDomNode: {
    type: Function
  },
  getClassNameFromAlign: {
    type: Function
  },
  onAlign: {
    type: Function
  },
  onMouseenter: {
    type: Function
  },
  onMouseleave: {
    type: Function
  },
  onMousedown: {
    type: Function
  },
  onTouchstart: {
    type: Function
  }
};
const mobileProps = _extends(_extends({}, innerProps), {
  mobile: {
    type: Object
  }
});
const popupProps = _extends(_extends({}, innerProps), {
  mask: Boolean,
  mobile: {
    type: Object
  },
  maskAnimation: String,
  maskTransitionName: String
});
function getMotion(_ref) {
  let {
    prefixCls,
    animation,
    transitionName
  } = _ref;
  if (animation) {
    return {
      name: `${prefixCls}-${animation}`
    };
  }
  if (transitionName) {
    return {
      name: transitionName
    };
  }
  return {};
}
function Mask(props) {
  const {
    prefixCls,
    visible,
    zIndex,
    mask,
    maskAnimation,
    maskTransitionName
  } = props;
  if (!mask) {
    return null;
  }
  let motion = {};
  if (maskTransitionName || maskAnimation) {
    motion = getMotion({
      prefixCls,
      transitionName: maskTransitionName,
      animation: maskAnimation
    });
  }
  return createVNode(Transition, _objectSpread2$1({
    "appear": true
  }, motion), {
    default: () => [withDirectives(createVNode("div", {
      "style": {
        zIndex
      },
      "class": `${prefixCls}-mask`
    }, null), [[resolveDirective("if"), visible]])]
  });
}
Mask.displayName = "Mask";
const MobilePopupInner = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "MobilePopupInner",
  inheritAttrs: false,
  props: mobileProps,
  emits: ["mouseenter", "mouseleave", "mousedown", "touchstart", "align"],
  setup(props, _ref) {
    let {
      expose,
      slots
    } = _ref;
    const elementRef = ref();
    expose({
      forceAlign: () => {
      },
      getElement: () => elementRef.value
    });
    return () => {
      var _a;
      const {
        zIndex,
        visible,
        prefixCls,
        mobile: {
          popupClassName,
          popupStyle,
          popupMotion = {},
          popupRender
        } = {}
      } = props;
      const mergedStyle = _extends({
        zIndex
      }, popupStyle);
      let childNode = flattenChildren((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
      if (childNode.length > 1) {
        childNode = createVNode("div", {
          "class": `${prefixCls}-content`
        }, [childNode]);
      }
      if (popupRender) {
        childNode = popupRender(childNode);
      }
      const mergedClassName = classNames(prefixCls, popupClassName);
      return createVNode(Transition, _objectSpread2$1({
        "ref": elementRef
      }, popupMotion), {
        default: () => [visible ? createVNode("div", {
          "class": mergedClassName,
          "style": mergedStyle
        }, [childNode]) : null]
      });
    };
  }
});
var __awaiter = function(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
const StatusQueue = ["measure", "align", null, "motion"];
const useVisibleStatus = (visible, doMeasure) => {
  const status = shallowRef(null);
  const rafRef = shallowRef();
  const destroyRef = shallowRef(false);
  function setStatus(nextStatus) {
    if (!destroyRef.value) {
      status.value = nextStatus;
    }
  }
  function cancelRaf() {
    wrapperRaf.cancel(rafRef.value);
  }
  function goNextStatus(callback) {
    cancelRaf();
    rafRef.value = wrapperRaf(() => {
      let newStatus = status.value;
      switch (status.value) {
        case "align":
          newStatus = "motion";
          break;
        case "motion":
          newStatus = "stable";
          break;
      }
      setStatus(newStatus);
      callback === null || callback === void 0 ? void 0 : callback();
    });
  }
  watch(visible, () => {
    setStatus("measure");
  }, {
    immediate: true,
    flush: "post"
  });
  onMounted(() => {
    watch(status, () => {
      switch (status.value) {
        case "measure":
          doMeasure();
          break;
      }
      if (status.value) {
        rafRef.value = wrapperRaf(() => __awaiter(void 0, void 0, void 0, function* () {
          const index2 = StatusQueue.indexOf(status.value);
          const nextStatus = StatusQueue[index2 + 1];
          if (nextStatus && index2 !== -1) {
            setStatus(nextStatus);
          }
        }));
      }
    }, {
      immediate: true,
      flush: "post"
    });
  });
  onBeforeUnmount(() => {
    destroyRef.value = true;
    cancelRaf();
  });
  return [status, goNextStatus];
};
const useStretchStyle = (stretch) => {
  const targetSize = shallowRef({
    width: 0,
    height: 0
  });
  function measureStretch(element) {
    targetSize.value = {
      width: element.offsetWidth,
      height: element.offsetHeight
    };
  }
  const style = computed(() => {
    const sizeStyle = {};
    if (stretch.value) {
      const {
        width,
        height
      } = targetSize.value;
      if (stretch.value.indexOf("height") !== -1 && height) {
        sizeStyle.height = `${height}px`;
      } else if (stretch.value.indexOf("minHeight") !== -1 && height) {
        sizeStyle.minHeight = `${height}px`;
      }
      if (stretch.value.indexOf("width") !== -1 && width) {
        sizeStyle.width = `${width}px`;
      } else if (stretch.value.indexOf("minWidth") !== -1 && width) {
        sizeStyle.minWidth = `${width}px`;
      }
    }
    return sizeStyle;
  });
  return [style, measureStretch];
};
function ownKeys(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread2(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = null != arguments[i2] ? arguments[i2] : {};
    i2 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty$5(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function _defineProperty$5(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var vendorPrefix;
var jsCssMap = {
  Webkit: "-webkit-",
  Moz: "-moz-",
  // IE did it wrong again ...
  ms: "-ms-",
  O: "-o-"
};
function getVendorPrefix() {
  if (vendorPrefix !== void 0) {
    return vendorPrefix;
  }
  vendorPrefix = "";
  var style = document.createElement("p").style;
  var testProp = "Transform";
  for (var key in jsCssMap) {
    if (key + testProp in style) {
      vendorPrefix = key;
    }
  }
  return vendorPrefix;
}
function getTransitionName$1() {
  return getVendorPrefix() ? "".concat(getVendorPrefix(), "TransitionProperty") : "transitionProperty";
}
function getTransformName() {
  return getVendorPrefix() ? "".concat(getVendorPrefix(), "Transform") : "transform";
}
function setTransitionProperty(node2, value) {
  var name = getTransitionName$1();
  if (name) {
    node2.style[name] = value;
    if (name !== "transitionProperty") {
      node2.style.transitionProperty = value;
    }
  }
}
function setTransform(node2, value) {
  var name = getTransformName();
  if (name) {
    node2.style[name] = value;
    if (name !== "transform") {
      node2.style.transform = value;
    }
  }
}
function getTransitionProperty(node2) {
  return node2.style.transitionProperty || node2.style[getTransitionName$1()];
}
function getTransformXY(node2) {
  var style = window.getComputedStyle(node2, null);
  var transform = style.getPropertyValue("transform") || style.getPropertyValue(getTransformName());
  if (transform && transform !== "none") {
    var matrix = transform.replace(/[^0-9\-.,]/g, "").split(",");
    return {
      x: parseFloat(matrix[12] || matrix[4], 0),
      y: parseFloat(matrix[13] || matrix[5], 0)
    };
  }
  return {
    x: 0,
    y: 0
  };
}
var matrix2d = /matrix\((.*)\)/;
var matrix3d = /matrix3d\((.*)\)/;
function setTransformXY(node2, xy) {
  var style = window.getComputedStyle(node2, null);
  var transform = style.getPropertyValue("transform") || style.getPropertyValue(getTransformName());
  if (transform && transform !== "none") {
    var arr;
    var match2d = transform.match(matrix2d);
    if (match2d) {
      match2d = match2d[1];
      arr = match2d.split(",").map(function(item) {
        return parseFloat(item, 10);
      });
      arr[4] = xy.x;
      arr[5] = xy.y;
      setTransform(node2, "matrix(".concat(arr.join(","), ")"));
    } else {
      var match3d = transform.match(matrix3d)[1];
      arr = match3d.split(",").map(function(item) {
        return parseFloat(item, 10);
      });
      arr[12] = xy.x;
      arr[13] = xy.y;
      setTransform(node2, "matrix3d(".concat(arr.join(","), ")"));
    }
  } else {
    setTransform(node2, "translateX(".concat(xy.x, "px) translateY(").concat(xy.y, "px) translateZ(0)"));
  }
}
var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
var getComputedStyleX;
function forceRelayout(elem) {
  var originalStyle = elem.style.display;
  elem.style.display = "none";
  elem.offsetHeight;
  elem.style.display = originalStyle;
}
function css(el, name, v2) {
  var value = v2;
  if (_typeof(name) === "object") {
    for (var i2 in name) {
      if (name.hasOwnProperty(i2)) {
        css(el, i2, name[i2]);
      }
    }
    return void 0;
  }
  if (typeof value !== "undefined") {
    if (typeof value === "number") {
      value = "".concat(value, "px");
    }
    el.style[name] = value;
    return void 0;
  }
  return getComputedStyleX(el, name);
}
function getClientPosition(elem) {
  var box;
  var x2;
  var y2;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement;
  box = elem.getBoundingClientRect();
  x2 = Math.floor(box.left);
  y2 = Math.floor(box.top);
  x2 -= docElem.clientLeft || body.clientLeft || 0;
  y2 -= docElem.clientTop || body.clientTop || 0;
  return {
    left: x2,
    top: y2
  };
}
function getScroll(w2, top) {
  var ret = w2["page".concat(top ? "Y" : "X", "Offset")];
  var method = "scroll".concat(top ? "Top" : "Left");
  if (typeof ret !== "number") {
    var d2 = w2.document;
    ret = d2.documentElement[method];
    if (typeof ret !== "number") {
      ret = d2.body[method];
    }
  }
  return ret;
}
function getScrollLeft(w2) {
  return getScroll(w2);
}
function getScrollTop(w2) {
  return getScroll(w2, true);
}
function getOffset(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w2 = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w2);
  pos.top += getScrollTop(w2);
  return pos;
}
function isWindow(obj) {
  return obj !== null && obj !== void 0 && obj == obj.window;
}
function getDocument(node2) {
  if (isWindow(node2)) {
    return node2.document;
  }
  if (node2.nodeType === 9) {
    return node2;
  }
  return node2.ownerDocument;
}
function _getComputedStyle(elem, name, cs) {
  var computedStyle = cs;
  var val = "";
  var d2 = getDocument(elem);
  computedStyle = computedStyle || d2.defaultView.getComputedStyle(elem, null);
  if (computedStyle) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }
  return val;
}
var _RE_NUM_NO_PX = new RegExp("^(".concat(RE_NUM, ")(?!px)[a-z%]+$"), "i");
var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = "currentStyle";
var RUNTIME_STYLE = "runtimeStyle";
var LEFT = "left";
var PX = "px";
function _getComputedStyleIE(elem, name) {
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];
  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
    var style = elem.style;
    var left = style[LEFT];
    var rsLeft = elem[RUNTIME_STYLE][LEFT];
    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];
    style[LEFT] = name === "fontSize" ? "1em" : ret || 0;
    ret = style.pixelLeft + PX;
    style[LEFT] = left;
    elem[RUNTIME_STYLE][LEFT] = rsLeft;
  }
  return ret === "" ? "auto" : ret;
}
if (typeof window !== "undefined") {
  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
}
function getOffsetDirection(dir, option) {
  if (dir === "left") {
    return option.useCssRight ? "right" : dir;
  }
  return option.useCssBottom ? "bottom" : dir;
}
function oppositeOffsetDirection(dir) {
  if (dir === "left") {
    return "right";
  } else if (dir === "right") {
    return "left";
  } else if (dir === "top") {
    return "bottom";
  } else if (dir === "bottom") {
    return "top";
  }
}
function setLeftTop(elem, offset2, option) {
  if (css(elem, "position") === "static") {
    elem.style.position = "relative";
  }
  var presetH = -999;
  var presetV = -999;
  var horizontalProperty = getOffsetDirection("left", option);
  var verticalProperty = getOffsetDirection("top", option);
  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);
  if (horizontalProperty !== "left") {
    presetH = 999;
  }
  if (verticalProperty !== "top") {
    presetV = 999;
  }
  var originalTransition = "";
  var originalOffset = getOffset(elem);
  if ("left" in offset2 || "top" in offset2) {
    originalTransition = getTransitionProperty(elem) || "";
    setTransitionProperty(elem, "none");
  }
  if ("left" in offset2) {
    elem.style[oppositeHorizontalProperty] = "";
    elem.style[horizontalProperty] = "".concat(presetH, "px");
  }
  if ("top" in offset2) {
    elem.style[oppositeVerticalProperty] = "";
    elem.style[verticalProperty] = "".concat(presetV, "px");
  }
  forceRelayout(elem);
  var old = getOffset(elem);
  var originalStyle = {};
  for (var key in offset2) {
    if (offset2.hasOwnProperty(key)) {
      var dir = getOffsetDirection(key, option);
      var preset = key === "left" ? presetH : presetV;
      var off = originalOffset[key] - old[key];
      if (dir === key) {
        originalStyle[dir] = preset + off;
      } else {
        originalStyle[dir] = preset - off;
      }
    }
  }
  css(elem, originalStyle);
  forceRelayout(elem);
  if ("left" in offset2 || "top" in offset2) {
    setTransitionProperty(elem, originalTransition);
  }
  var ret = {};
  for (var _key in offset2) {
    if (offset2.hasOwnProperty(_key)) {
      var _dir = getOffsetDirection(_key, option);
      var _off = offset2[_key] - originalOffset[_key];
      if (_key === _dir) {
        ret[_dir] = originalStyle[_dir] + _off;
      } else {
        ret[_dir] = originalStyle[_dir] - _off;
      }
    }
  }
  css(elem, ret);
}
function setTransform$1(elem, offset2) {
  var originalOffset = getOffset(elem);
  var originalXY = getTransformXY(elem);
  var resultXY = {
    x: originalXY.x,
    y: originalXY.y
  };
  if ("left" in offset2) {
    resultXY.x = originalXY.x + offset2.left - originalOffset.left;
  }
  if ("top" in offset2) {
    resultXY.y = originalXY.y + offset2.top - originalOffset.top;
  }
  setTransformXY(elem, resultXY);
}
function setOffset(elem, offset2, option) {
  if (option.ignoreShake) {
    var oriOffset = getOffset(elem);
    var oLeft = oriOffset.left.toFixed(0);
    var oTop = oriOffset.top.toFixed(0);
    var tLeft = offset2.left.toFixed(0);
    var tTop = offset2.top.toFixed(0);
    if (oLeft === tLeft && oTop === tTop) {
      return;
    }
  }
  if (option.useCssRight || option.useCssBottom) {
    setLeftTop(elem, offset2, option);
  } else if (option.useCssTransform && getTransformName() in document.body.style) {
    setTransform$1(elem, offset2);
  } else {
    setLeftTop(elem, offset2, option);
  }
}
function each(arr, fn) {
  for (var i2 = 0; i2 < arr.length; i2++) {
    fn(arr[i2]);
  }
}
function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, "boxSizing") === "border-box";
}
var BOX_MODELS = ["margin", "border", "padding"];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;
function swap(elem, options, callback) {
  var old = {};
  var style = elem.style;
  var name;
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      old[name] = style[name];
      style[name] = options[name];
    }
  }
  callback.call(elem);
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      style[name] = old[name];
    }
  }
}
function getPBMWidth(elem, props, which) {
  var value = 0;
  var prop;
  var j2;
  var i2;
  for (j2 = 0; j2 < props.length; j2++) {
    prop = props[j2];
    if (prop) {
      for (i2 = 0; i2 < which.length; i2++) {
        var cssProp = void 0;
        if (prop === "border") {
          cssProp = "".concat(prop).concat(which[i2], "Width");
        } else {
          cssProp = prop + which[i2];
        }
        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }
  return value;
}
var domUtils = {
  getParent: function getParent(element) {
    var parent = element;
    do {
      if (parent.nodeType === 11 && parent.host) {
        parent = parent.host;
      } else {
        parent = parent.parentNode;
      }
    } while (parent && parent.nodeType !== 1 && parent.nodeType !== 9);
    return parent;
  }
};
each(["Width", "Height"], function(name) {
  domUtils["doc".concat(name)] = function(refWin) {
    var d2 = refWin.document;
    return Math.max(
      // firefox chrome documentElement.scrollHeight< body.scrollHeight
      // ie standard mode : documentElement.scrollHeight> body.scrollHeight
      d2.documentElement["scroll".concat(name)],
      // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
      d2.body["scroll".concat(name)],
      domUtils["viewport".concat(name)](d2)
    );
  };
  domUtils["viewport".concat(name)] = function(win) {
    var prop = "client".concat(name);
    var doc = win.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop];
    return doc.compatMode === "CSS1Compat" && documentElementProp || body && body[prop] || documentElementProp;
  };
});
function getWH(elem, name, ex) {
  var extra = ex;
  if (isWindow(elem)) {
    return name === "width" ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === "width" ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
  }
  var which = name === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
  var borderBoxValue = name === "width" ? Math.floor(elem.getBoundingClientRect().width) : Math.floor(elem.getBoundingClientRect().height);
  var isBorderBox = isBorderBoxFn(elem);
  var cssBoxValue = 0;
  if (borderBoxValue === null || borderBoxValue === void 0 || borderBoxValue <= 0) {
    borderBoxValue = void 0;
    cssBoxValue = getComputedStyleX(elem, name);
    if (cssBoxValue === null || cssBoxValue === void 0 || Number(cssBoxValue) < 0) {
      cssBoxValue = elem.style[name] || 0;
    }
    cssBoxValue = Math.floor(parseFloat(cssBoxValue)) || 0;
  }
  if (extra === void 0) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }
  var borderBoxValueOrIsBorderBox = borderBoxValue !== void 0 || isBorderBox;
  var val = borderBoxValue || cssBoxValue;
  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ["border", "padding"], which);
    }
    return cssBoxValue;
  } else if (borderBoxValueOrIsBorderBox) {
    if (extra === BORDER_INDEX) {
      return val;
    }
    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ["border"], which) : getPBMWidth(elem, ["margin"], which));
  }
  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which);
}
var cssShow = {
  position: "absolute",
  visibility: "hidden",
  display: "block"
};
function getWHIgnoreDisplay() {
  for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    args[_key2] = arguments[_key2];
  }
  var val;
  var elem = args[0];
  if (elem.offsetWidth !== 0) {
    val = getWH.apply(void 0, args);
  } else {
    swap(elem, cssShow, function() {
      val = getWH.apply(void 0, args);
    });
  }
  return val;
}
each(["width", "height"], function(name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);
  domUtils["outer".concat(first)] = function(el, includeMargin) {
    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
  };
  var which = name === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
  domUtils[name] = function(elem, v2) {
    var val = v2;
    if (val !== void 0) {
      if (elem) {
        var isBorderBox = isBorderBoxFn(elem);
        if (isBorderBox) {
          val += getPBMWidth(elem, ["padding", "border"], which);
        }
        return css(elem, name, val);
      }
      return void 0;
    }
    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
  };
});
function mix(to, from2) {
  for (var i2 in from2) {
    if (from2.hasOwnProperty(i2)) {
      to[i2] = from2[i2];
    }
  }
  return to;
}
var utils = {
  getWindow: function getWindow(node2) {
    if (node2 && node2.document && node2.setTimeout) {
      return node2;
    }
    var doc = node2.ownerDocument || node2;
    return doc.defaultView || doc.parentWindow;
  },
  getDocument,
  offset: function offset(el, value, option) {
    if (typeof value !== "undefined") {
      setOffset(el, value, option || {});
    } else {
      return getOffset(el);
    }
  },
  isWindow,
  each,
  css,
  clone: function clone(obj) {
    var i2;
    var ret = {};
    for (i2 in obj) {
      if (obj.hasOwnProperty(i2)) {
        ret[i2] = obj[i2];
      }
    }
    var overflow = obj.overflow;
    if (overflow) {
      for (i2 in obj) {
        if (obj.hasOwnProperty(i2)) {
          ret.overflow[i2] = obj.overflow[i2];
        }
      }
    }
    return ret;
  },
  mix,
  getWindowScrollLeft: function getWindowScrollLeft(w2) {
    return getScrollLeft(w2);
  },
  getWindowScrollTop: function getWindowScrollTop(w2) {
    return getScrollTop(w2);
  },
  merge: function merge2() {
    var ret = {};
    for (var i2 = 0; i2 < arguments.length; i2++) {
      utils.mix(ret, i2 < 0 || arguments.length <= i2 ? void 0 : arguments[i2]);
    }
    return ret;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
mix(utils, domUtils);
var getParent$1 = utils.getParent;
function getOffsetParent(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return null;
  }
  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent;
  var positionStyle = utils.css(element, "position");
  var skipStatic = positionStyle === "fixed" || positionStyle === "absolute";
  if (!skipStatic) {
    return element.nodeName.toLowerCase() === "html" ? null : getParent$1(element);
  }
  for (parent = getParent$1(element); parent && parent !== body && parent.nodeType !== 9; parent = getParent$1(parent)) {
    positionStyle = utils.css(parent, "position");
    if (positionStyle !== "static") {
      return parent;
    }
  }
  return null;
}
var getParent$1$1 = utils.getParent;
function isAncestorFixed(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return false;
  }
  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent = null;
  for (
    parent = getParent$1$1(element);
    // 修复元素位于 document.documentElement 下导致崩溃问题
    parent && parent !== body && parent !== doc;
    parent = getParent$1$1(parent)
  ) {
    var positionStyle = utils.css(parent, "position");
    if (positionStyle === "fixed") {
      return true;
    }
  }
  return false;
}
function getVisibleRectForElement(element, alwaysByViewport) {
  var visibleRect = {
    left: 0,
    right: Infinity,
    top: 0,
    bottom: Infinity
  };
  var el = getOffsetParent(element);
  var doc = utils.getDocument(element);
  var win = doc.defaultView || doc.parentWindow;
  var body = doc.body;
  var documentElement = doc.documentElement;
  while (el) {
    if ((navigator.userAgent.indexOf("MSIE") === -1 || el.clientWidth !== 0) && // body may have overflow set on it, yet we still get the entire
    // viewport. In some browsers, el.offsetParent may be
    // document.documentElement, so check for that too.
    el !== body && el !== documentElement && utils.css(el, "overflow") !== "visible") {
      var pos = utils.offset(el);
      pos.left += el.clientLeft;
      pos.top += el.clientTop;
      visibleRect.top = Math.max(visibleRect.top, pos.top);
      visibleRect.right = Math.min(
        visibleRect.right,
        // consider area without scrollBar
        pos.left + el.clientWidth
      );
      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
      visibleRect.left = Math.max(visibleRect.left, pos.left);
    } else if (el === body || el === documentElement) {
      break;
    }
    el = getOffsetParent(el);
  }
  var originalPosition = null;
  if (!utils.isWindow(element) && element.nodeType !== 9) {
    originalPosition = element.style.position;
    var position2 = utils.css(element, "position");
    if (position2 === "absolute") {
      element.style.position = "fixed";
    }
  }
  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);
  var documentWidth = documentElement.scrollWidth;
  var documentHeight = documentElement.scrollHeight;
  var bodyStyle = window.getComputedStyle(body);
  if (bodyStyle.overflowX === "hidden") {
    documentWidth = win.innerWidth;
  }
  if (bodyStyle.overflowY === "hidden") {
    documentHeight = win.innerHeight;
  }
  if (element.style) {
    element.style.position = originalPosition;
  }
  if (alwaysByViewport || isAncestorFixed(element)) {
    visibleRect.left = Math.max(visibleRect.left, scrollX);
    visibleRect.top = Math.max(visibleRect.top, scrollY);
    visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
    visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
  } else {
    var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
    visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);
    var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
    visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
  }
  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
}
function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
  var pos = utils.clone(elFuturePos);
  var size = {
    width: elRegion.width,
    height: elRegion.height
  };
  if (overflow.adjustX && pos.left < visibleRect.left) {
    pos.left = visibleRect.left;
  }
  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
    size.width -= pos.left + size.width - visibleRect.right;
  }
  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
  }
  if (overflow.adjustY && pos.top < visibleRect.top) {
    pos.top = visibleRect.top;
  }
  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
    size.height -= pos.top + size.height - visibleRect.bottom;
  }
  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
  }
  return utils.mix(pos, size);
}
function getRegion(node2) {
  var offset2;
  var w2;
  var h2;
  if (!utils.isWindow(node2) && node2.nodeType !== 9) {
    offset2 = utils.offset(node2);
    w2 = utils.outerWidth(node2);
    h2 = utils.outerHeight(node2);
  } else {
    var win = utils.getWindow(node2);
    offset2 = {
      left: utils.getWindowScrollLeft(win),
      top: utils.getWindowScrollTop(win)
    };
    w2 = utils.viewportWidth(win);
    h2 = utils.viewportHeight(win);
  }
  offset2.width = w2;
  offset2.height = h2;
  return offset2;
}
function getAlignOffset(region, align) {
  var V2 = align.charAt(0);
  var H = align.charAt(1);
  var w2 = region.width;
  var h2 = region.height;
  var x2 = region.left;
  var y2 = region.top;
  if (V2 === "c") {
    y2 += h2 / 2;
  } else if (V2 === "b") {
    y2 += h2;
  }
  if (H === "c") {
    x2 += w2 / 2;
  } else if (H === "r") {
    x2 += w2;
  }
  return {
    left: x2,
    top: y2
  };
}
function getElFuturePos(elRegion, refNodeRegion, points, offset2, targetOffset2) {
  var p1 = getAlignOffset(refNodeRegion, points[1]);
  var p2 = getAlignOffset(elRegion, points[0]);
  var diff = [p2.left - p1.left, p2.top - p1.top];
  return {
    left: Math.round(elRegion.left - diff[0] + offset2[0] - targetOffset2[0]),
    top: Math.round(elRegion.top - diff[1] + offset2[1] - targetOffset2[1])
  };
}
function isFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
}
function isFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
}
function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
}
function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
}
function flip(points, reg, map) {
  var ret = [];
  utils.each(points, function(p) {
    ret.push(p.replace(reg, function(m2) {
      return map[m2];
    }));
  });
  return ret;
}
function flipOffset(offset2, index2) {
  offset2[index2] = -offset2[index2];
  return offset2;
}
function convertOffset(str, offsetLen) {
  var n2;
  if (/%$/.test(str)) {
    n2 = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
  } else {
    n2 = parseInt(str, 10);
  }
  return n2 || 0;
}
function normalizeOffset(offset2, el) {
  offset2[0] = convertOffset(offset2[0], el.width);
  offset2[1] = convertOffset(offset2[1], el.height);
}
function doAlign(el, tgtRegion, align, isTgtRegionVisible) {
  var points = align.points;
  var offset2 = align.offset || [0, 0];
  var targetOffset2 = align.targetOffset || [0, 0];
  var overflow = align.overflow;
  var source = align.source || el;
  offset2 = [].concat(offset2);
  targetOffset2 = [].concat(targetOffset2);
  overflow = overflow || {};
  var newOverflowCfg = {};
  var fail = 0;
  var alwaysByViewport = !!(overflow && overflow.alwaysByViewport);
  var visibleRect = getVisibleRectForElement(source, alwaysByViewport);
  var elRegion = getRegion(source);
  normalizeOffset(offset2, elRegion);
  normalizeOffset(targetOffset2, tgtRegion);
  var elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset2, targetOffset2);
  var newElRegion = utils.merge(elRegion, elFuturePos);
  if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTgtRegionVisible) {
    if (overflow.adjustX) {
      if (isFailX(elFuturePos, elRegion, visibleRect)) {
        var newPoints = flip(points, /[lr]/gi, {
          l: "r",
          r: "l"
        });
        var newOffset = flipOffset(offset2, 0);
        var newTargetOffset = flipOffset(targetOffset2, 0);
        var newElFuturePos = getElFuturePos(elRegion, tgtRegion, newPoints, newOffset, newTargetOffset);
        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = newPoints;
          offset2 = newOffset;
          targetOffset2 = newTargetOffset;
        }
      }
    }
    if (overflow.adjustY) {
      if (isFailY(elFuturePos, elRegion, visibleRect)) {
        var _newPoints = flip(points, /[tb]/gi, {
          t: "b",
          b: "t"
        });
        var _newOffset = flipOffset(offset2, 1);
        var _newTargetOffset = flipOffset(targetOffset2, 1);
        var _newElFuturePos = getElFuturePos(elRegion, tgtRegion, _newPoints, _newOffset, _newTargetOffset);
        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = _newPoints;
          offset2 = _newOffset;
          targetOffset2 = _newTargetOffset;
        }
      }
    }
    if (fail) {
      elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset2, targetOffset2);
      utils.mix(newElRegion, elFuturePos);
    }
    var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
    var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect);
    if (isStillFailX || isStillFailY) {
      var _newPoints2 = points;
      if (isStillFailX) {
        _newPoints2 = flip(points, /[lr]/gi, {
          l: "r",
          r: "l"
        });
      }
      if (isStillFailY) {
        _newPoints2 = flip(points, /[tb]/gi, {
          t: "b",
          b: "t"
        });
      }
      points = _newPoints2;
      offset2 = align.offset || [0, 0];
      targetOffset2 = align.targetOffset || [0, 0];
    }
    newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
    newOverflowCfg.adjustY = overflow.adjustY && isStillFailY;
    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
      newElRegion = adjustForViewport(elFuturePos, elRegion, visibleRect, newOverflowCfg);
    }
  }
  if (newElRegion.width !== elRegion.width) {
    utils.css(source, "width", utils.width(source) + newElRegion.width - elRegion.width);
  }
  if (newElRegion.height !== elRegion.height) {
    utils.css(source, "height", utils.height(source) + newElRegion.height - elRegion.height);
  }
  utils.offset(source, {
    left: newElRegion.left,
    top: newElRegion.top
  }, {
    useCssRight: align.useCssRight,
    useCssBottom: align.useCssBottom,
    useCssTransform: align.useCssTransform,
    ignoreShake: align.ignoreShake
  });
  return {
    points,
    offset: offset2,
    targetOffset: targetOffset2,
    overflow: newOverflowCfg
  };
}
function isOutOfVisibleRect(target, alwaysByViewport) {
  var visibleRect = getVisibleRectForElement(target, alwaysByViewport);
  var targetRegion = getRegion(target);
  return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
}
function alignElement(el, refNode, align) {
  var target = align.target || refNode;
  var refNodeRegion = getRegion(target);
  var isTargetNotOutOfVisible = !isOutOfVisibleRect(target, align.overflow && align.overflow.alwaysByViewport);
  return doAlign(el, refNodeRegion, align, isTargetNotOutOfVisible);
}
alignElement.__getOffsetParent = getOffsetParent;
alignElement.__getVisibleRectForElement = getVisibleRectForElement;
function alignPoint(el, tgtPoint, align) {
  var pageX;
  var pageY;
  var doc = utils.getDocument(el);
  var win = doc.defaultView || doc.parentWindow;
  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);
  if ("pageX" in tgtPoint) {
    pageX = tgtPoint.pageX;
  } else {
    pageX = scrollX + tgtPoint.clientX;
  }
  if ("pageY" in tgtPoint) {
    pageY = tgtPoint.pageY;
  } else {
    pageY = scrollY + tgtPoint.clientY;
  }
  var tgtRegion = {
    left: pageX,
    top: pageY,
    width: 0,
    height: 0
  };
  var pointInView = pageX >= 0 && pageX <= scrollX + viewportWidth && pageY >= 0 && pageY <= scrollY + viewportHeight;
  var points = [align.points[0], "cc"];
  return doAlign(el, tgtRegion, _objectSpread2(_objectSpread2({}, align), {}, {
    points
  }), pointInView);
}
function cloneElement(vnode) {
  let nodeProps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  let override = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  let mergeRef = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  let ele = vnode;
  if (Array.isArray(vnode)) {
    ele = filterEmpty(vnode)[0];
  }
  if (!ele) {
    return null;
  }
  const node2 = cloneVNode(ele, nodeProps, mergeRef);
  node2.props = override ? _extends(_extends({}, node2.props), nodeProps) : node2.props;
  warning$1(typeof node2.props.class !== "object");
  return node2;
}
const isVisible = (element) => {
  if (!element) {
    return false;
  }
  if (element.offsetParent) {
    return true;
  }
  if (element.getBBox) {
    const box = element.getBBox();
    if (box.width || box.height) {
      return true;
    }
  }
  if (element.getBoundingClientRect) {
    const box = element.getBoundingClientRect();
    if (box.width || box.height) {
      return true;
    }
  }
  return false;
};
function isSamePoint(prev2, next2) {
  if (prev2 === next2)
    return true;
  if (!prev2 || !next2)
    return false;
  if ("pageX" in next2 && "pageY" in next2) {
    return prev2.pageX === next2.pageX && prev2.pageY === next2.pageY;
  }
  if ("clientX" in next2 && "clientY" in next2) {
    return prev2.clientX === next2.clientX && prev2.clientY === next2.clientY;
  }
  return false;
}
function restoreFocus(activeElement, container) {
  if (activeElement !== document.activeElement && contains(container, activeElement) && typeof activeElement.focus === "function") {
    activeElement.focus();
  }
}
function monitorResize(element, callback) {
  let prevWidth = null;
  let prevHeight = null;
  function onResize(_ref) {
    let [{
      target
    }] = _ref;
    if (!document.documentElement.contains(target))
      return;
    const {
      width,
      height
    } = target.getBoundingClientRect();
    const fixedWidth = Math.floor(width);
    const fixedHeight = Math.floor(height);
    if (prevWidth !== fixedWidth || prevHeight !== fixedHeight) {
      Promise.resolve().then(() => {
        callback({
          width: fixedWidth,
          height: fixedHeight
        });
      });
    }
    prevWidth = fixedWidth;
    prevHeight = fixedHeight;
  }
  const resizeObserver = new index(onResize);
  if (element) {
    resizeObserver.observe(element);
  }
  return () => {
    resizeObserver.disconnect();
  };
}
const useBuffer = (callback, buffer) => {
  let called = false;
  let timeout = null;
  function cancelTrigger() {
    clearTimeout(timeout);
  }
  function trigger(force) {
    if (!called || force === true) {
      if (callback() === false) {
        return;
      }
      called = true;
      cancelTrigger();
      timeout = setTimeout(() => {
        called = false;
      }, buffer.value);
    } else {
      cancelTrigger();
      timeout = setTimeout(() => {
        called = false;
        trigger();
      }, buffer.value);
    }
  }
  return [trigger, () => {
    called = false;
    cancelTrigger();
  }];
};
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
function assocIndexOf(array, key) {
  var length2 = array.length;
  while (length2--) {
    if (eq(array[length2][0], key)) {
      return length2;
    }
  }
  return -1;
}
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index2 == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index2, 1);
  }
  --this.size;
  return true;
}
function listCacheGet(key) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  return index2 < 0 ? void 0 : data[index2][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  if (index2 < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index2][1] = value;
  }
  return this;
}
function ListCache(entries) {
  var index2 = -1, length2 = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length2) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
function stackDelete(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
function stackGet(key) {
  return this.__data__.get(key);
}
function stackHas(key) {
  return this.__data__.has(key);
}
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
const freeGlobal$1 = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal$1 || freeSelf || Function("return this")();
const root$1 = root;
var Symbol$1 = root$1.Symbol;
const Symbol$2 = Symbol$1;
var objectProto$b = Object.prototype;
var hasOwnProperty$8 = objectProto$b.hasOwnProperty;
var nativeObjectToString$1 = objectProto$b.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty$8.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e2) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto$a = Object.prototype;
var nativeObjectToString = objectProto$a.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var coreJsData = root$1["__core-js_shared__"];
const coreJsData$1 = coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e2) {
    }
    try {
      return func + "";
    } catch (e2) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$9 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString.call(hasOwnProperty$7).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var Map$1 = getNative(root$1, "Map");
const Map$2 = Map$1;
var nativeCreate = getNative(Object, "create");
const nativeCreate$1 = nativeCreate;
function hashClear() {
  this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
  this.size = 0;
}
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$8 = Object.prototype;
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate$1) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$6.call(data, key) ? data[key] : void 0;
}
var objectProto$7 = Object.prototype;
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$5.call(data, key);
}
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate$1 && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}
function Hash(entries) {
  var index2 = -1, length2 = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length2) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$2 || ListCache)(),
    "string": new Hash()
  };
}
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
function mapCacheDelete(key) {
  var result = getMapData(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
function MapCache(entries) {
  var index2 = -1, length2 = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length2) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
function setCacheHas(value) {
  return this.__data__.has(value);
}
function SetCache(values) {
  var index2 = -1, length2 = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index2 < length2) {
    this.add(values[index2]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
function arraySome(array, predicate) {
  var index2 = -1, length2 = array == null ? 0 : array.length;
  while (++index2 < length2) {
    if (predicate(array[index2], index2, array)) {
      return true;
    }
  }
  return false;
}
function cacheHas(cache, key) {
  return cache.has(key);
}
var COMPARE_PARTIAL_FLAG$3 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index2 = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$1 ? new SetCache() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index2 < arrLength) {
    var arrValue = array[index2], othValue = other[index2];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack) : customizer(arrValue, othValue, index2, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
var Uint8Array = root$1.Uint8Array;
const Uint8Array$1 = Uint8Array;
function mapToArray(map) {
  var index2 = -1, result = Array(map.size);
  map.forEach(function(value, key) {
    result[++index2] = [key, value];
  });
  return result;
}
function setToArray(set) {
  var index2 = -1, result = Array(set.size);
  set.forEach(function(value) {
    result[++index2] = value;
  });
  return result;
}
var COMPARE_PARTIAL_FLAG$2 = 1, COMPARE_UNORDERED_FLAG = 2;
var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]";
var symbolProto = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$2:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag$1:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
        return false;
      }
      return true;
    case boolTag$1:
    case dateTag$1:
    case numberTag$1:
      return eq(+object, +other);
    case errorTag$1:
      return object.name == other.name && object.message == other.message;
    case regexpTag$1:
    case stringTag$1:
      return object == other + "";
    case mapTag$2:
      var convert = mapToArray;
    case setTag$2:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
function arrayPush(array, values) {
  var index2 = -1, length2 = values.length, offset2 = array.length;
  while (++index2 < length2) {
    array[offset2 + index2] = values[index2];
  }
  return array;
}
var isArray = Array.isArray;
const isArray$1 = isArray;
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$1(object) ? result : arrayPush(result, symbolsFunc(object));
}
function arrayFilter(array, predicate) {
  var index2 = -1, length2 = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index2 < length2) {
    var value = array[index2];
    if (predicate(value, index2, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
function stubArray() {
  return [];
}
var objectProto$6 = Object.prototype;
var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable$1.call(object, symbol);
  });
};
const getSymbols$1 = getSymbols;
function baseTimes(n2, iteratee) {
  var index2 = -1, result = Array(n2);
  while (++index2 < n2) {
    result[index2] = iteratee(index2);
  }
  return result;
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var argsTag$2 = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$2;
}
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;
var isArguments = baseIsArguments(/* @__PURE__ */ function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$4.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
const isArguments$1 = isArguments;
function stubFalse() {
  return false;
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var Buffer = moduleExports$1 ? root$1.Buffer : void 0;
var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse;
const isBuffer$1 = isBuffer;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length2) {
  var type = typeof value;
  length2 = length2 == null ? MAX_SAFE_INTEGER$1 : length2;
  return !!length2 && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length2);
}
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag$1 = "[object Map]", numberTag = "[object Number]", objectTag$2 = "[object Object]", regexpTag = "[object RegExp]", setTag$1 = "[object Set]", stringTag = "[object String]", weakMapTag$1 = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag$1] = typedArrayTags[numberTag] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag] = typedArrayTags[setTag$1] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag$1] = false;
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var freeProcess = moduleExports && freeGlobal$1.process;
var nodeUtil = function() {
  try {
    var types = freeModule && freeModule.require && freeModule.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e2) {
  }
}();
const nodeUtil$1 = nodeUtil;
var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
const isTypedArray$1 = isTypedArray;
var objectProto$4 = Object.prototype;
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray$1(value), isArg = !isArr && isArguments$1(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length2 = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$3.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex(key, length2)))) {
      result.push(key);
    }
  }
  return result;
}
var objectProto$3 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$3;
  return value === proto;
}
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var nativeKeys = overArg(Object.keys, Object);
const nativeKeys$1 = nativeKeys;
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys$1(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$2.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols$1);
}
var COMPARE_PARTIAL_FLAG$1 = 1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index2 = objLength;
  while (index2--) {
    var key = objProps[index2];
    if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index2 < objLength) {
    key = objProps[index2];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var DataView = getNative(root$1, "DataView");
const DataView$1 = DataView;
var Promise$1 = getNative(root$1, "Promise");
const Promise$2 = Promise$1;
var Set$1 = getNative(root$1, "Set");
const Set$2 = Set$1;
var WeakMap$1 = getNative(root$1, "WeakMap");
const WeakMap$2 = WeakMap$1;
var mapTag = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag = "[object Set]", weakMapTag = "[object WeakMap]";
var dataViewTag = "[object DataView]";
var dataViewCtorString = toSource(DataView$1), mapCtorString = toSource(Map$2), promiseCtorString = toSource(Promise$2), setCtorString = toSource(Set$2), weakMapCtorString = toSource(WeakMap$2);
var getTag = baseGetTag;
if (DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag || Map$2 && getTag(new Map$2()) != mapTag || Promise$2 && getTag(Promise$2.resolve()) != promiseTag || Set$2 && getTag(new Set$2()) != setTag || WeakMap$2 && getTag(new WeakMap$2()) != weakMapTag) {
  getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
const getTag$1 = getTag;
var COMPARE_PARTIAL_FLAG = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$1(object), othIsArr = isArray$1(other), objTag = objIsArr ? arrayTag : getTag$1(object), othTag = othIsArr ? arrayTag : getTag$1(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer$1(object)) {
    if (!isBuffer$1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray$1(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
function isEqual(value, other) {
  return baseIsEqual(value, other);
}
const alignProps = {
  align: Object,
  target: [Object, Function],
  onAlign: Function,
  monitorBufferTime: Number,
  monitorWindowResize: Boolean,
  disabled: Boolean
};
function getElement(func) {
  if (typeof func !== "function")
    return null;
  return func();
}
function getPoint(point) {
  if (typeof point !== "object" || !point)
    return null;
  return point;
}
const Align = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Align",
  props: alignProps,
  emits: ["align"],
  setup(props, _ref) {
    let {
      expose,
      slots
    } = _ref;
    const cacheRef = ref({});
    const nodeRef = ref();
    const [forceAlign, cancelForceAlign] = useBuffer(() => {
      const {
        disabled: latestDisabled,
        target: latestTarget,
        align: latestAlign,
        onAlign: latestOnAlign
      } = props;
      if (!latestDisabled && latestTarget && nodeRef.value) {
        const source = nodeRef.value;
        let result;
        const element = getElement(latestTarget);
        const point = getPoint(latestTarget);
        cacheRef.value.element = element;
        cacheRef.value.point = point;
        cacheRef.value.align = latestAlign;
        const {
          activeElement
        } = document;
        if (element && isVisible(element)) {
          result = alignElement(source, element, latestAlign);
        } else if (point) {
          result = alignPoint(source, point, latestAlign);
        }
        restoreFocus(activeElement, source);
        if (latestOnAlign && result) {
          latestOnAlign(source, result);
        }
        return true;
      }
      return false;
    }, computed(() => props.monitorBufferTime));
    const resizeMonitor = ref({
      cancel: () => {
      }
    });
    const sourceResizeMonitor = ref({
      cancel: () => {
      }
    });
    const goAlign = () => {
      const target = props.target;
      const element = getElement(target);
      const point = getPoint(target);
      if (nodeRef.value !== sourceResizeMonitor.value.element) {
        sourceResizeMonitor.value.cancel();
        sourceResizeMonitor.value.element = nodeRef.value;
        sourceResizeMonitor.value.cancel = monitorResize(nodeRef.value, forceAlign);
      }
      if (cacheRef.value.element !== element || !isSamePoint(cacheRef.value.point, point) || !isEqual(cacheRef.value.align, props.align)) {
        forceAlign();
        if (resizeMonitor.value.element !== element) {
          resizeMonitor.value.cancel();
          resizeMonitor.value.element = element;
          resizeMonitor.value.cancel = monitorResize(element, forceAlign);
        }
      }
    };
    onMounted(() => {
      nextTick(() => {
        goAlign();
      });
    });
    onUpdated(() => {
      nextTick(() => {
        goAlign();
      });
    });
    watch(() => props.disabled, (disabled) => {
      if (!disabled) {
        forceAlign();
      } else {
        cancelForceAlign();
      }
    }, {
      immediate: true,
      flush: "post"
    });
    const winResizeRef = ref(null);
    watch(() => props.monitorWindowResize, (monitorWindowResize) => {
      if (monitorWindowResize) {
        if (!winResizeRef.value) {
          winResizeRef.value = addEventListenerWrap(window, "resize", forceAlign);
        }
      } else if (winResizeRef.value) {
        winResizeRef.value.remove();
        winResizeRef.value = null;
      }
    }, {
      flush: "post"
    });
    onUnmounted(() => {
      resizeMonitor.value.cancel();
      sourceResizeMonitor.value.cancel();
      if (winResizeRef.value)
        winResizeRef.value.remove();
      cancelForceAlign();
    });
    expose({
      forceAlign: () => forceAlign(true)
    });
    return () => {
      const child = slots === null || slots === void 0 ? void 0 : slots.default();
      if (child) {
        return cloneElement(child[0], {
          ref: nodeRef
        }, true, true);
      }
      return null;
    };
  }
});
tuple("bottomLeft", "bottomRight", "topLeft", "topRight");
const getTransitionDirection = (placement) => {
  if (placement !== void 0 && (placement === "topLeft" || placement === "topRight")) {
    return `slide-down`;
  }
  return `slide-up`;
};
const getTransitionProps = function(transitionName) {
  let opt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const transitionProps = transitionName ? _extends({
    name: transitionName,
    appear: true,
    // type: 'animation',
    // appearFromClass: `${transitionName}-appear ${transitionName}-appear-prepare`,
    // appearActiveClass: `antdv-base-transtion`,
    // appearToClass: `${transitionName}-appear ${transitionName}-appear-active`,
    enterFromClass: `${transitionName}-enter ${transitionName}-enter-prepare ${transitionName}-enter-start`,
    enterActiveClass: `${transitionName}-enter ${transitionName}-enter-prepare`,
    enterToClass: `${transitionName}-enter ${transitionName}-enter-active`,
    leaveFromClass: ` ${transitionName}-leave`,
    leaveActiveClass: `${transitionName}-leave ${transitionName}-leave-active`,
    leaveToClass: `${transitionName}-leave ${transitionName}-leave-active`
  }, opt) : _extends({
    css: false
  }, opt);
  return transitionProps;
};
const getTransitionName = (rootPrefixCls, motion, transitionName) => {
  if (transitionName !== void 0) {
    return transitionName;
  }
  return `${rootPrefixCls}-${motion}`;
};
const PopupInner = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "PopupInner",
  inheritAttrs: false,
  props: innerProps,
  emits: ["mouseenter", "mouseleave", "mousedown", "touchstart", "align"],
  setup(props, _ref) {
    let {
      expose,
      attrs,
      slots
    } = _ref;
    const alignRef = shallowRef();
    const elementRef = shallowRef();
    const alignedClassName = shallowRef();
    const [stretchStyle, measureStretchStyle] = useStretchStyle(toRef(props, "stretch"));
    const doMeasure = () => {
      if (props.stretch) {
        measureStretchStyle(props.getRootDomNode());
      }
    };
    const visible = shallowRef(false);
    let timeoutId;
    watch(() => props.visible, (val) => {
      clearTimeout(timeoutId);
      if (val) {
        timeoutId = setTimeout(() => {
          visible.value = props.visible;
        });
      } else {
        visible.value = false;
      }
    }, {
      immediate: true
    });
    const [status, goNextStatus] = useVisibleStatus(visible, doMeasure);
    const prepareResolveRef = shallowRef();
    const getAlignTarget = () => {
      if (props.point) {
        return props.point;
      }
      return props.getRootDomNode;
    };
    const forceAlign = () => {
      var _a;
      (_a = alignRef.value) === null || _a === void 0 ? void 0 : _a.forceAlign();
    };
    const onInternalAlign = (popupDomNode, matchAlign) => {
      var _a;
      const nextAlignedClassName = props.getClassNameFromAlign(matchAlign);
      const preAlignedClassName = alignedClassName.value;
      if (alignedClassName.value !== nextAlignedClassName) {
        alignedClassName.value = nextAlignedClassName;
      }
      if (status.value === "align") {
        if (preAlignedClassName !== nextAlignedClassName) {
          Promise.resolve().then(() => {
            forceAlign();
          });
        } else {
          goNextStatus(() => {
            var _a2;
            (_a2 = prepareResolveRef.value) === null || _a2 === void 0 ? void 0 : _a2.call(prepareResolveRef);
          });
        }
        (_a = props.onAlign) === null || _a === void 0 ? void 0 : _a.call(props, popupDomNode, matchAlign);
      }
    };
    const motion = computed(() => {
      const m2 = typeof props.animation === "object" ? props.animation : getMotion(props);
      ["onAfterEnter", "onAfterLeave"].forEach((eventName) => {
        const originFn = m2[eventName];
        m2[eventName] = (node2) => {
          goNextStatus();
          status.value = "stable";
          originFn === null || originFn === void 0 ? void 0 : originFn(node2);
        };
      });
      return m2;
    });
    const onShowPrepare = () => {
      return new Promise((resolve) => {
        prepareResolveRef.value = resolve;
      });
    };
    watch([motion, status], () => {
      if (!motion.value && status.value === "motion") {
        goNextStatus();
      }
    }, {
      immediate: true
    });
    expose({
      forceAlign,
      getElement: () => {
        return elementRef.value.$el || elementRef.value;
      }
    });
    const alignDisabled = computed(() => {
      var _a;
      if (((_a = props.align) === null || _a === void 0 ? void 0 : _a.points) && (status.value === "align" || status.value === "stable")) {
        return false;
      }
      return true;
    });
    return () => {
      var _a;
      const {
        zIndex,
        align,
        prefixCls,
        destroyPopupOnHide,
        onMouseenter,
        onMouseleave,
        onTouchstart = () => {
        },
        onMousedown
      } = props;
      const statusValue = status.value;
      const mergedStyle = [_extends(_extends({}, stretchStyle.value), {
        zIndex,
        opacity: statusValue === "motion" || statusValue === "stable" || !visible.value ? null : 0,
        // pointerEvents: statusValue === 'stable' ? null : 'none',
        pointerEvents: !visible.value && statusValue !== "stable" ? "none" : null
      }), attrs.style];
      let childNode = flattenChildren((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots, {
        visible: props.visible
      }));
      if (childNode.length > 1) {
        childNode = createVNode("div", {
          "class": `${prefixCls}-content`
        }, [childNode]);
      }
      const mergedClassName = classNames(prefixCls, attrs.class, alignedClassName.value, !props.arrow && `${prefixCls}-arrow-hidden`);
      const hasAnimate = visible.value || !props.visible;
      const transitionProps = hasAnimate ? getTransitionProps(motion.value.name, motion.value) : {};
      return createVNode(Transition, _objectSpread2$1(_objectSpread2$1({
        "ref": elementRef
      }, transitionProps), {}, {
        "onBeforeEnter": onShowPrepare
      }), {
        default: () => {
          return !destroyPopupOnHide || props.visible ? withDirectives(createVNode(Align, {
            "target": getAlignTarget(),
            "key": "popup",
            "ref": alignRef,
            "monitorWindowResize": true,
            "disabled": alignDisabled.value,
            "align": align,
            "onAlign": onInternalAlign
          }, {
            default: () => createVNode("div", {
              "class": mergedClassName,
              "onMouseenter": onMouseenter,
              "onMouseleave": onMouseleave,
              "onMousedown": withModifiers(onMousedown, ["capture"]),
              [supportsPassive$1 ? "onTouchstartPassive" : "onTouchstart"]: withModifiers(onTouchstart, ["capture"]),
              "style": mergedStyle
            }, [childNode])
          }), [[vShow, visible.value]]) : null;
        }
      });
    };
  }
});
const Popup = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Popup",
  inheritAttrs: false,
  props: popupProps,
  setup(props, _ref) {
    let {
      attrs,
      slots,
      expose
    } = _ref;
    const innerVisible = shallowRef(false);
    const inMobile = shallowRef(false);
    const popupRef = shallowRef();
    const rootRef = shallowRef();
    watch([() => props.visible, () => props.mobile], () => {
      innerVisible.value = props.visible;
      if (props.visible && props.mobile) {
        inMobile.value = true;
      }
    }, {
      immediate: true,
      flush: "post"
    });
    expose({
      forceAlign: () => {
        var _a;
        (_a = popupRef.value) === null || _a === void 0 ? void 0 : _a.forceAlign();
      },
      getElement: () => {
        var _a;
        return (_a = popupRef.value) === null || _a === void 0 ? void 0 : _a.getElement();
      }
    });
    return () => {
      const cloneProps = _extends(_extends(_extends({}, props), attrs), {
        visible: innerVisible.value
      });
      const popupNode = inMobile.value ? createVNode(MobilePopupInner, _objectSpread2$1(_objectSpread2$1({}, cloneProps), {}, {
        "mobile": props.mobile,
        "ref": popupRef
      }), {
        default: slots.default
      }) : createVNode(PopupInner, _objectSpread2$1(_objectSpread2$1({}, cloneProps), {}, {
        "ref": popupRef
      }), {
        default: slots.default
      });
      return createVNode("div", {
        "ref": rootRef
      }, [createVNode(Mask, cloneProps, null), popupNode]);
    };
  }
});
function isPointsEq(a1, a2, isAlignPoint) {
  if (isAlignPoint) {
    return a1[0] === a2[0];
  }
  return a1[0] === a2[0] && a1[1] === a2[1];
}
function getAlignFromPlacement(builtinPlacements, placementStr, align) {
  const baseAlign = builtinPlacements[placementStr] || {};
  return _extends(_extends({}, baseAlign), align);
}
function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
  const {
    points
  } = align;
  const placements2 = Object.keys(builtinPlacements);
  for (let i2 = 0; i2 < placements2.length; i2 += 1) {
    const placement = placements2[i2];
    if (isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) {
      return `${prefixCls}-placement-${placement}`;
    }
  }
  return "";
}
const BaseMixin = {
  methods: {
    setState() {
      let state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      let callback = arguments.length > 1 ? arguments[1] : void 0;
      let newState = typeof state === "function" ? state(this.$data, this.$props) : state;
      if (this.getDerivedStateFromProps) {
        const s2 = this.getDerivedStateFromProps(getOptionProps(this), _extends(_extends({}, this.$data), newState));
        if (s2 === null) {
          return;
        } else {
          newState = _extends(_extends({}, newState), s2 || {});
        }
      }
      _extends(this.$data, newState);
      if (this._.isMounted) {
        this.$forceUpdate();
      }
      nextTick(() => {
        callback && callback();
      });
    },
    __emit() {
      const args = [].slice.call(arguments, 0);
      let eventName = args[0];
      eventName = `on${eventName[0].toUpperCase()}${eventName.substring(1)}`;
      const event = this.$props[eventName] || this.$attrs[eventName];
      if (args.length && event) {
        if (Array.isArray(event)) {
          for (let i2 = 0, l2 = event.length; i2 < l2; i2++) {
            event[i2](...args.slice(1));
          }
        } else {
          event(...args.slice(1));
        }
      }
    }
  }
};
const PortalContextKey = Symbol("PortalContextKey");
const useProvidePortal = function(instance) {
  let config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    inTriggerContext: true
  };
  provide(PortalContextKey, {
    inTriggerContext: config.inTriggerContext,
    shouldRender: computed(() => {
      const {
        sPopupVisible,
        popupRef,
        forceRender,
        autoDestroy
      } = instance || {};
      let shouldRender = false;
      if (sPopupVisible || popupRef || forceRender) {
        shouldRender = true;
      }
      if (!sPopupVisible && autoDestroy) {
        shouldRender = false;
      }
      return shouldRender;
    })
  });
};
const useInjectPortal = () => {
  useProvidePortal({}, {
    inTriggerContext: false
  });
  const portalContext = inject(PortalContextKey, {
    shouldRender: computed(() => false),
    inTriggerContext: false
  });
  return {
    shouldRender: computed(() => portalContext.shouldRender.value || portalContext.inTriggerContext === false)
  };
};
const Portal$1 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Portal",
  inheritAttrs: false,
  props: {
    getContainer: PropTypes$1.func.isRequired,
    didUpdate: Function
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    let isSSR = true;
    let container;
    const {
      shouldRender
    } = useInjectPortal();
    function setContainer() {
      if (shouldRender.value) {
        container = props.getContainer();
      }
    }
    onBeforeMount(() => {
      isSSR = false;
      setContainer();
    });
    onMounted(() => {
      if (container)
        return;
      setContainer();
    });
    const stopWatch = watch(shouldRender, () => {
      if (shouldRender.value && !container) {
        container = props.getContainer();
      }
      if (container) {
        stopWatch();
      }
    });
    onUpdated(() => {
      nextTick(() => {
        var _a;
        if (shouldRender.value) {
          (_a = props.didUpdate) === null || _a === void 0 ? void 0 : _a.call(props, props);
        }
      });
    });
    return () => {
      var _a;
      if (!shouldRender.value)
        return null;
      if (isSSR) {
        return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
      }
      return container ? createVNode(Teleport, {
        "to": container
      }, slots) : null;
    };
  }
});
let cached;
function getScrollBarSize(fresh) {
  if (typeof document === "undefined") {
    return 0;
  }
  if (fresh || cached === void 0) {
    const inner = document.createElement("div");
    inner.style.width = "100%";
    inner.style.height = "200px";
    const outer = document.createElement("div");
    const outerStyle = outer.style;
    outerStyle.position = "absolute";
    outerStyle.top = "0";
    outerStyle.left = "0";
    outerStyle.pointerEvents = "none";
    outerStyle.visibility = "hidden";
    outerStyle.width = "200px";
    outerStyle.height = "150px";
    outerStyle.overflow = "hidden";
    outer.appendChild(inner);
    document.body.appendChild(outer);
    const widthContained = inner.offsetWidth;
    outer.style.overflow = "scroll";
    let widthScroll = inner.offsetWidth;
    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }
    document.body.removeChild(outer);
    cached = widthContained - widthScroll;
  }
  return cached;
}
const UNIQUE_ID = `vc-util-locker-${Date.now()}`;
let uuid = 0;
function isBodyOverflowing() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
function useScrollLocker(lock) {
  const mergedLock = computed(() => !!lock && !!lock.value);
  uuid += 1;
  const id = `${UNIQUE_ID}_${uuid}`;
  watchEffect((onClear) => {
    if (!canUseDom()) {
      return;
    }
    if (mergedLock.value) {
      const scrollbarSize = getScrollBarSize();
      const isOverflow = isBodyOverflowing();
      updateCSS(`
html body {
  overflow-y: hidden;
  ${isOverflow ? `width: calc(100% - ${scrollbarSize}px);` : ""}
}`, id);
    } else {
      removeCSS(id);
    }
    onClear(() => {
      removeCSS(id);
    });
  }, {
    flush: "post"
  });
}
let openCount = 0;
const supportDom = canUseDom();
const getParent2 = (getContainer2) => {
  if (!supportDom) {
    return null;
  }
  if (getContainer2) {
    if (typeof getContainer2 === "string") {
      return document.querySelectorAll(getContainer2)[0];
    }
    if (typeof getContainer2 === "function") {
      return getContainer2();
    }
    if (typeof getContainer2 === "object" && getContainer2 instanceof window.HTMLElement) {
      return getContainer2;
    }
  }
  return document.body;
};
const Portal = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "PortalWrapper",
  inheritAttrs: false,
  props: {
    wrapperClassName: String,
    forceRender: {
      type: Boolean,
      default: void 0
    },
    getContainer: PropTypes$1.any,
    visible: {
      type: Boolean,
      default: void 0
    },
    autoLock: booleanType(),
    didUpdate: Function
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const container = shallowRef();
    const componentRef = shallowRef();
    const rafId = shallowRef();
    const triggerUpdate = shallowRef(1);
    const defaultContainer = canUseDom() && document.createElement("div");
    const removeCurrentContainer = () => {
      var _a, _b;
      if (container.value === defaultContainer) {
        (_b = (_a = container.value) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(container.value);
      }
      container.value = null;
    };
    let parent = null;
    const attachToParent = function() {
      let force = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
      if (force || container.value && !container.value.parentNode) {
        parent = getParent2(props.getContainer);
        if (parent) {
          parent.appendChild(container.value);
          return true;
        }
        return false;
      }
      return true;
    };
    const getContainer2 = () => {
      if (!supportDom) {
        return null;
      }
      if (!container.value) {
        container.value = defaultContainer;
        attachToParent(true);
      }
      setWrapperClassName();
      return container.value;
    };
    const setWrapperClassName = () => {
      const {
        wrapperClassName
      } = props;
      if (container.value && wrapperClassName && wrapperClassName !== container.value.className) {
        container.value.className = wrapperClassName;
      }
    };
    onUpdated(() => {
      setWrapperClassName();
      attachToParent();
    });
    useScrollLocker(computed(() => {
      return props.autoLock && props.visible && canUseDom() && (container.value === document.body || container.value === defaultContainer);
    }));
    onMounted(() => {
      let init = false;
      watch([() => props.visible, () => props.getContainer], (_ref2, _ref3) => {
        let [visible, getContainer22] = _ref2;
        let [prevVisible, prevGetContainer] = _ref3;
        if (supportDom) {
          parent = getParent2(props.getContainer);
          if (parent === document.body) {
            if (visible && !prevVisible) {
              openCount += 1;
            } else if (init) {
              openCount -= 1;
            }
          }
        }
        if (init) {
          const getContainerIsFunc = typeof getContainer22 === "function" && typeof prevGetContainer === "function";
          if (getContainerIsFunc ? getContainer22.toString() !== prevGetContainer.toString() : getContainer22 !== prevGetContainer) {
            removeCurrentContainer();
          }
        }
        init = true;
      }, {
        immediate: true,
        flush: "post"
      });
      nextTick(() => {
        if (!attachToParent()) {
          rafId.value = wrapperRaf(() => {
            triggerUpdate.value += 1;
          });
        }
      });
    });
    onBeforeUnmount(() => {
      const {
        visible
      } = props;
      if (supportDom && parent === document.body) {
        openCount = visible && openCount ? openCount - 1 : openCount;
      }
      removeCurrentContainer();
      wrapperRaf.cancel(rafId.value);
    });
    return () => {
      const {
        forceRender,
        visible
      } = props;
      let portal = null;
      const childProps = {
        getOpenCount: () => openCount,
        getContainer: getContainer2
      };
      if (triggerUpdate.value && (forceRender || visible || componentRef.value)) {
        portal = createVNode(Portal$1, {
          "getContainer": getContainer2,
          "ref": componentRef,
          "didUpdate": props.didUpdate
        }, {
          default: () => {
            var _a;
            return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots, childProps);
          }
        });
      }
      return portal;
    };
  }
});
const ALL_HANDLERS = ["onClick", "onMousedown", "onTouchstart", "onMouseenter", "onMouseleave", "onFocus", "onBlur", "onContextmenu"];
const Trigger = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Trigger",
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: triggerProps(),
  setup(props) {
    const align = computed(() => {
      const {
        popupPlacement,
        popupAlign,
        builtinPlacements
      } = props;
      if (popupPlacement && builtinPlacements) {
        return getAlignFromPlacement(builtinPlacements, popupPlacement, popupAlign);
      }
      return popupAlign;
    });
    const popupRef = shallowRef(null);
    const setPopupRef = (val) => {
      popupRef.value = val;
    };
    return {
      vcTriggerContext: inject("vcTriggerContext", {}),
      popupRef,
      setPopupRef,
      triggerRef: shallowRef(null),
      align,
      focusTime: null,
      clickOutsideHandler: null,
      contextmenuOutsideHandler1: null,
      contextmenuOutsideHandler2: null,
      touchOutsideHandler: null,
      attachId: null,
      delayTimer: null,
      hasPopupMouseDown: false,
      preClickTime: null,
      preTouchTime: null,
      mouseDownTimeout: null,
      childOriginEvents: {}
    };
  },
  data() {
    const props = this.$props;
    let popupVisible;
    if (this.popupVisible !== void 0) {
      popupVisible = !!props.popupVisible;
    } else {
      popupVisible = !!props.defaultPopupVisible;
    }
    ALL_HANDLERS.forEach((h2) => {
      this[`fire${h2}`] = (e2) => {
        this.fireEvents(h2, e2);
      };
    });
    return {
      prevPopupVisible: popupVisible,
      sPopupVisible: popupVisible,
      point: null
    };
  },
  watch: {
    popupVisible(val) {
      if (val !== void 0) {
        this.prevPopupVisible = this.sPopupVisible;
        this.sPopupVisible = val;
      }
    }
  },
  created() {
    provide("vcTriggerContext", {
      onPopupMouseDown: this.onPopupMouseDown,
      onPopupMouseenter: this.onPopupMouseenter,
      onPopupMouseleave: this.onPopupMouseleave
    });
    useProvidePortal(this);
  },
  deactivated() {
    this.setPopupVisible(false);
  },
  mounted() {
    this.$nextTick(() => {
      this.updatedCal();
    });
  },
  updated() {
    this.$nextTick(() => {
      this.updatedCal();
    });
  },
  beforeUnmount() {
    this.clearDelayTimer();
    this.clearOutsideHandler();
    clearTimeout(this.mouseDownTimeout);
    wrapperRaf.cancel(this.attachId);
  },
  methods: {
    updatedCal() {
      const props = this.$props;
      const state = this.$data;
      if (state.sPopupVisible) {
        let currentDocument;
        if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextmenuToShow())) {
          currentDocument = props.getDocument(this.getRootDomNode());
          this.clickOutsideHandler = addEventListenerWrap(currentDocument, "mousedown", this.onDocumentClick);
        }
        if (!this.touchOutsideHandler) {
          currentDocument = currentDocument || props.getDocument(this.getRootDomNode());
          this.touchOutsideHandler = addEventListenerWrap(currentDocument, "touchstart", this.onDocumentClick, supportsPassive$1 ? {
            passive: false
          } : false);
        }
        if (!this.contextmenuOutsideHandler1 && this.isContextmenuToShow()) {
          currentDocument = currentDocument || props.getDocument(this.getRootDomNode());
          this.contextmenuOutsideHandler1 = addEventListenerWrap(currentDocument, "scroll", this.onContextmenuClose);
        }
        if (!this.contextmenuOutsideHandler2 && this.isContextmenuToShow()) {
          this.contextmenuOutsideHandler2 = addEventListenerWrap(window, "blur", this.onContextmenuClose);
        }
      } else {
        this.clearOutsideHandler();
      }
    },
    onMouseenter(e2) {
      const {
        mouseEnterDelay
      } = this.$props;
      this.fireEvents("onMouseenter", e2);
      this.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e2);
    },
    onMouseMove(e2) {
      this.fireEvents("onMousemove", e2);
      this.setPoint(e2);
    },
    onMouseleave(e2) {
      this.fireEvents("onMouseleave", e2);
      this.delaySetPopupVisible(false, this.$props.mouseLeaveDelay);
    },
    onPopupMouseenter() {
      const {
        vcTriggerContext = {}
      } = this;
      if (vcTriggerContext.onPopupMouseenter) {
        vcTriggerContext.onPopupMouseenter();
      }
      this.clearDelayTimer();
    },
    onPopupMouseleave(e2) {
      var _a;
      if (e2 && e2.relatedTarget && !e2.relatedTarget.setTimeout && contains((_a = this.popupRef) === null || _a === void 0 ? void 0 : _a.getElement(), e2.relatedTarget)) {
        return;
      }
      if (this.isMouseLeaveToHide()) {
        this.delaySetPopupVisible(false, this.$props.mouseLeaveDelay);
      }
      const {
        vcTriggerContext = {}
      } = this;
      if (vcTriggerContext.onPopupMouseleave) {
        vcTriggerContext.onPopupMouseleave(e2);
      }
    },
    onFocus(e2) {
      this.fireEvents("onFocus", e2);
      this.clearDelayTimer();
      if (this.isFocusToShow()) {
        this.focusTime = Date.now();
        this.delaySetPopupVisible(true, this.$props.focusDelay);
      }
    },
    onMousedown(e2) {
      this.fireEvents("onMousedown", e2);
      this.preClickTime = Date.now();
    },
    onTouchstart(e2) {
      this.fireEvents("onTouchstart", e2);
      this.preTouchTime = Date.now();
    },
    onBlur(e2) {
      if (!contains(e2.target, e2.relatedTarget || document.activeElement)) {
        this.fireEvents("onBlur", e2);
        this.clearDelayTimer();
        if (this.isBlurToHide()) {
          this.delaySetPopupVisible(false, this.$props.blurDelay);
        }
      }
    },
    onContextmenu(e2) {
      e2.preventDefault();
      this.fireEvents("onContextmenu", e2);
      this.setPopupVisible(true, e2);
    },
    onContextmenuClose() {
      if (this.isContextmenuToShow()) {
        this.close();
      }
    },
    onClick(event) {
      this.fireEvents("onClick", event);
      if (this.focusTime) {
        let preTime;
        if (this.preClickTime && this.preTouchTime) {
          preTime = Math.min(this.preClickTime, this.preTouchTime);
        } else if (this.preClickTime) {
          preTime = this.preClickTime;
        } else if (this.preTouchTime) {
          preTime = this.preTouchTime;
        }
        if (Math.abs(preTime - this.focusTime) < 20) {
          return;
        }
        this.focusTime = 0;
      }
      this.preClickTime = 0;
      this.preTouchTime = 0;
      if (this.isClickToShow() && (this.isClickToHide() || this.isBlurToHide()) && event && event.preventDefault) {
        event.preventDefault();
      }
      if (event && event.domEvent) {
        event.domEvent.preventDefault();
      }
      const nextVisible = !this.$data.sPopupVisible;
      if (this.isClickToHide() && !nextVisible || nextVisible && this.isClickToShow()) {
        this.setPopupVisible(!this.$data.sPopupVisible, event);
      }
    },
    onPopupMouseDown() {
      const {
        vcTriggerContext = {}
      } = this;
      this.hasPopupMouseDown = true;
      clearTimeout(this.mouseDownTimeout);
      this.mouseDownTimeout = setTimeout(() => {
        this.hasPopupMouseDown = false;
      }, 0);
      if (vcTriggerContext.onPopupMouseDown) {
        vcTriggerContext.onPopupMouseDown(...arguments);
      }
    },
    onDocumentClick(event) {
      if (this.$props.mask && !this.$props.maskClosable) {
        return;
      }
      const target = event.target;
      const root2 = this.getRootDomNode();
      const popupNode = this.getPopupDomNode();
      if (
        // mousedown on the target should also close popup when action is contextMenu.
        // https://github.com/ant-design/ant-design/issues/29853
        (!contains(root2, target) || this.isContextMenuOnly()) && !contains(popupNode, target) && !this.hasPopupMouseDown
      ) {
        this.delaySetPopupVisible(false, 0.1);
      }
    },
    getPopupDomNode() {
      var _a;
      return ((_a = this.popupRef) === null || _a === void 0 ? void 0 : _a.getElement()) || null;
    },
    getRootDomNode() {
      var _a, _b, _c, _d;
      const {
        getTriggerDOMNode
      } = this.$props;
      if (getTriggerDOMNode) {
        const domNode = ((_b = (_a = this.triggerRef) === null || _a === void 0 ? void 0 : _a.$el) === null || _b === void 0 ? void 0 : _b.nodeName) === "#comment" ? null : findDOMNode(this.triggerRef);
        return findDOMNode(getTriggerDOMNode(domNode));
      }
      try {
        const domNode = ((_d = (_c = this.triggerRef) === null || _c === void 0 ? void 0 : _c.$el) === null || _d === void 0 ? void 0 : _d.nodeName) === "#comment" ? null : findDOMNode(this.triggerRef);
        if (domNode) {
          return domNode;
        }
      } catch (err) {
      }
      return findDOMNode(this);
    },
    handleGetPopupClassFromAlign(align) {
      const className = [];
      const props = this.$props;
      const {
        popupPlacement,
        builtinPlacements,
        prefixCls,
        alignPoint: alignPoint2,
        getPopupClassNameFromAlign
      } = props;
      if (popupPlacement && builtinPlacements) {
        className.push(getAlignPopupClassName(builtinPlacements, prefixCls, align, alignPoint2));
      }
      if (getPopupClassNameFromAlign) {
        className.push(getPopupClassNameFromAlign(align));
      }
      return className.join(" ");
    },
    getPopupAlign() {
      const props = this.$props;
      const {
        popupPlacement,
        popupAlign,
        builtinPlacements
      } = props;
      if (popupPlacement && builtinPlacements) {
        return getAlignFromPlacement(builtinPlacements, popupPlacement, popupAlign);
      }
      return popupAlign;
    },
    getComponent() {
      const mouseProps = {};
      if (this.isMouseEnterToShow()) {
        mouseProps.onMouseenter = this.onPopupMouseenter;
      }
      if (this.isMouseLeaveToHide()) {
        mouseProps.onMouseleave = this.onPopupMouseleave;
      }
      mouseProps.onMousedown = this.onPopupMouseDown;
      mouseProps[supportsPassive$1 ? "onTouchstartPassive" : "onTouchstart"] = this.onPopupMouseDown;
      const {
        handleGetPopupClassFromAlign,
        getRootDomNode,
        $attrs
      } = this;
      const {
        prefixCls,
        destroyPopupOnHide,
        popupClassName,
        popupAnimation,
        popupTransitionName,
        popupStyle,
        mask,
        maskAnimation,
        maskTransitionName,
        zIndex,
        stretch,
        alignPoint: alignPoint2,
        mobile,
        arrow,
        forceRender
      } = this.$props;
      const {
        sPopupVisible,
        point
      } = this.$data;
      const popupProps2 = _extends(_extends({
        prefixCls,
        arrow,
        destroyPopupOnHide,
        visible: sPopupVisible,
        point: alignPoint2 ? point : null,
        align: this.align,
        animation: popupAnimation,
        getClassNameFromAlign: handleGetPopupClassFromAlign,
        stretch,
        getRootDomNode,
        mask,
        zIndex,
        transitionName: popupTransitionName,
        maskAnimation,
        maskTransitionName,
        class: popupClassName,
        style: popupStyle,
        onAlign: $attrs.onPopupAlign || noop$1
      }, mouseProps), {
        ref: this.setPopupRef,
        mobile,
        forceRender
      });
      return createVNode(Popup, popupProps2, {
        default: this.$slots.popup || (() => getComponent(this, "popup"))
      });
    },
    attachParent(popupContainer) {
      wrapperRaf.cancel(this.attachId);
      const {
        getPopupContainer,
        getDocument: getDocument2
      } = this.$props;
      const domNode = this.getRootDomNode();
      let mountNode;
      if (!getPopupContainer) {
        mountNode = getDocument2(this.getRootDomNode()).body;
      } else if (domNode || getPopupContainer.length === 0) {
        mountNode = getPopupContainer(domNode);
      }
      if (mountNode) {
        mountNode.appendChild(popupContainer);
      } else {
        this.attachId = wrapperRaf(() => {
          this.attachParent(popupContainer);
        });
      }
    },
    getContainer() {
      const {
        $props: props
      } = this;
      const {
        getDocument: getDocument2
      } = props;
      const popupContainer = getDocument2(this.getRootDomNode()).createElement("div");
      popupContainer.style.position = "absolute";
      popupContainer.style.top = "0";
      popupContainer.style.left = "0";
      popupContainer.style.width = "100%";
      this.attachParent(popupContainer);
      return popupContainer;
    },
    setPopupVisible(sPopupVisible, event) {
      const {
        alignPoint: alignPoint2,
        sPopupVisible: prevPopupVisible,
        onPopupVisibleChange
      } = this;
      this.clearDelayTimer();
      if (prevPopupVisible !== sPopupVisible) {
        if (!hasProp(this, "popupVisible")) {
          this.setState({
            sPopupVisible,
            prevPopupVisible
          });
        }
        onPopupVisibleChange && onPopupVisibleChange(sPopupVisible);
      }
      if (alignPoint2 && event && sPopupVisible) {
        this.setPoint(event);
      }
    },
    setPoint(point) {
      const {
        alignPoint: alignPoint2
      } = this.$props;
      if (!alignPoint2 || !point)
        return;
      this.setState({
        point: {
          pageX: point.pageX,
          pageY: point.pageY
        }
      });
    },
    handlePortalUpdate() {
      if (this.prevPopupVisible !== this.sPopupVisible) {
        this.afterPopupVisibleChange(this.sPopupVisible);
      }
    },
    delaySetPopupVisible(visible, delayS, event) {
      const delay = delayS * 1e3;
      this.clearDelayTimer();
      if (delay) {
        const point = event ? {
          pageX: event.pageX,
          pageY: event.pageY
        } : null;
        this.delayTimer = setTimeout(() => {
          this.setPopupVisible(visible, point);
          this.clearDelayTimer();
        }, delay);
      } else {
        this.setPopupVisible(visible, event);
      }
    },
    clearDelayTimer() {
      if (this.delayTimer) {
        clearTimeout(this.delayTimer);
        this.delayTimer = null;
      }
    },
    clearOutsideHandler() {
      if (this.clickOutsideHandler) {
        this.clickOutsideHandler.remove();
        this.clickOutsideHandler = null;
      }
      if (this.contextmenuOutsideHandler1) {
        this.contextmenuOutsideHandler1.remove();
        this.contextmenuOutsideHandler1 = null;
      }
      if (this.contextmenuOutsideHandler2) {
        this.contextmenuOutsideHandler2.remove();
        this.contextmenuOutsideHandler2 = null;
      }
      if (this.touchOutsideHandler) {
        this.touchOutsideHandler.remove();
        this.touchOutsideHandler = null;
      }
    },
    createTwoChains(event) {
      let fn = () => {
      };
      const events = getEvents(this);
      if (this.childOriginEvents[event] && events[event]) {
        return this[`fire${event}`];
      }
      fn = this.childOriginEvents[event] || events[event] || fn;
      return fn;
    },
    isClickToShow() {
      const {
        action,
        showAction
      } = this.$props;
      return action.indexOf("click") !== -1 || showAction.indexOf("click") !== -1;
    },
    isContextMenuOnly() {
      const {
        action
      } = this.$props;
      return action === "contextmenu" || action.length === 1 && action[0] === "contextmenu";
    },
    isContextmenuToShow() {
      const {
        action,
        showAction
      } = this.$props;
      return action.indexOf("contextmenu") !== -1 || showAction.indexOf("contextmenu") !== -1;
    },
    isClickToHide() {
      const {
        action,
        hideAction
      } = this.$props;
      return action.indexOf("click") !== -1 || hideAction.indexOf("click") !== -1;
    },
    isMouseEnterToShow() {
      const {
        action,
        showAction
      } = this.$props;
      return action.indexOf("hover") !== -1 || showAction.indexOf("mouseenter") !== -1;
    },
    isMouseLeaveToHide() {
      const {
        action,
        hideAction
      } = this.$props;
      return action.indexOf("hover") !== -1 || hideAction.indexOf("mouseleave") !== -1;
    },
    isFocusToShow() {
      const {
        action,
        showAction
      } = this.$props;
      return action.indexOf("focus") !== -1 || showAction.indexOf("focus") !== -1;
    },
    isBlurToHide() {
      const {
        action,
        hideAction
      } = this.$props;
      return action.indexOf("focus") !== -1 || hideAction.indexOf("blur") !== -1;
    },
    forcePopupAlign() {
      var _a;
      if (this.$data.sPopupVisible) {
        (_a = this.popupRef) === null || _a === void 0 ? void 0 : _a.forceAlign();
      }
    },
    fireEvents(type, e2) {
      if (this.childOriginEvents[type]) {
        this.childOriginEvents[type](e2);
      }
      const event = this.$props[type] || this.$attrs[type];
      if (event) {
        event(e2);
      }
    },
    close() {
      this.setPopupVisible(false);
    }
  },
  render() {
    const {
      $attrs
    } = this;
    const children = filterEmpty(getSlot(this));
    const {
      alignPoint: alignPoint2,
      getPopupContainer
    } = this.$props;
    const child = children[0];
    this.childOriginEvents = getEvents(child);
    const newChildProps = {
      key: "trigger"
    };
    if (this.isContextmenuToShow()) {
      newChildProps.onContextmenu = this.onContextmenu;
    } else {
      newChildProps.onContextmenu = this.createTwoChains("onContextmenu");
    }
    if (this.isClickToHide() || this.isClickToShow()) {
      newChildProps.onClick = this.onClick;
      newChildProps.onMousedown = this.onMousedown;
      newChildProps[supportsPassive$1 ? "onTouchstartPassive" : "onTouchstart"] = this.onTouchstart;
    } else {
      newChildProps.onClick = this.createTwoChains("onClick");
      newChildProps.onMousedown = this.createTwoChains("onMousedown");
      newChildProps[supportsPassive$1 ? "onTouchstartPassive" : "onTouchstart"] = this.createTwoChains("onTouchstart");
    }
    if (this.isMouseEnterToShow()) {
      newChildProps.onMouseenter = this.onMouseenter;
      if (alignPoint2) {
        newChildProps.onMousemove = this.onMouseMove;
      }
    } else {
      newChildProps.onMouseenter = this.createTwoChains("onMouseenter");
    }
    if (this.isMouseLeaveToHide()) {
      newChildProps.onMouseleave = this.onMouseleave;
    } else {
      newChildProps.onMouseleave = this.createTwoChains("onMouseleave");
    }
    if (this.isFocusToShow() || this.isBlurToHide()) {
      newChildProps.onFocus = this.onFocus;
      newChildProps.onBlur = this.onBlur;
    } else {
      newChildProps.onFocus = this.createTwoChains("onFocus");
      newChildProps.onBlur = (e2) => {
        if (e2 && (!e2.relatedTarget || !contains(e2.target, e2.relatedTarget))) {
          this.createTwoChains("onBlur")(e2);
        }
      };
    }
    const childrenClassName = classNames(child && child.props && child.props.class, $attrs.class);
    if (childrenClassName) {
      newChildProps.class = childrenClassName;
    }
    const trigger = cloneElement(child, _extends(_extends({}, newChildProps), {
      ref: "triggerRef"
    }), true, true);
    const portal = createVNode(Portal, {
      "key": "portal",
      "getContainer": getPopupContainer && (() => getPopupContainer(this.getRootDomNode())),
      "didUpdate": this.handlePortalUpdate,
      "visible": this.$data.sPopupVisible
    }, {
      default: this.getComponent
    });
    return createVNode(Fragment, null, [trigger, portal]);
  }
});
const KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  /**
   * END
   */
  END: 35,
  /**
   * HOME
   */
  HOME: 36,
  /**
   * LEFT
   */
  LEFT: 37,
  /**
   * UP
   */
  UP: 38,
  /**
   * RIGHT
   */
  RIGHT: 39,
  /**
   * DOWN
   */
  DOWN: 40,
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  /**
   * DELETE
   */
  DELETE: 46,
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  /**
   * DASH
   */
  DASH: 189,
  /**
   * EQUALS
   */
  EQUALS: 187,
  /**
   * COMMA
   */
  COMMA: 188,
  /**
   * PERIOD
   */
  PERIOD: 190,
  /**
   * SLASH
   */
  SLASH: 191,
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e2) {
    const {
      keyCode
    } = e2;
    if (e2.altKey && !e2.ctrlKey || e2.metaKey || // Function keys don't generate text
    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    }
    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;
      default:
        return true;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }
    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }
    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    }
    if (window.navigator.userAgent.indexOf("WebKit") !== -1 && keyCode === 0) {
      return true;
    }
    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;
      default:
        return false;
    }
  }
};
const KeyCode$1 = KeyCode;
var __rest$7 = function(s2, e2) {
  var t2 = {};
  for (var p in s2)
    if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
      t2[p] = s2[p];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
      if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
        t2[p[i2]] = s2[p[i2]];
    }
  return t2;
};
const BaseInputInner = defineComponent({
  compatConfig: {
    MODE: 3
  },
  // inheritAttrs: false,
  props: {
    disabled: PropTypes$1.looseBool,
    type: PropTypes$1.string,
    value: PropTypes$1.any,
    tag: {
      type: String,
      default: "input"
    },
    size: PropTypes$1.string,
    onChange: Function,
    onInput: Function,
    onBlur: Function,
    onFocus: Function,
    onKeydown: Function,
    onCompositionstart: Function,
    onCompositionend: Function,
    onKeyup: Function,
    onPaste: Function,
    onMousedown: Function
  },
  emits: ["change", "input", "blur", "keydown", "focus", "compositionstart", "compositionend", "keyup", "paste", "mousedown"],
  setup(props, _ref) {
    let {
      expose
    } = _ref;
    const inputRef = shallowRef(null);
    const focus = () => {
      if (inputRef.value) {
        inputRef.value.focus();
      }
    };
    const blur = () => {
      if (inputRef.value) {
        inputRef.value.blur();
      }
    };
    const setSelectionRange = (start, end, direction) => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.setSelectionRange(start, end, direction);
    };
    const select = () => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.select();
    };
    expose({
      focus,
      blur,
      input: inputRef,
      setSelectionRange,
      select,
      getSelectionStart: () => {
        var _a;
        return (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.selectionStart;
      },
      getSelectionEnd: () => {
        var _a;
        return (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.selectionEnd;
      },
      getScrollTop: () => {
        var _a;
        return (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.scrollTop;
      }
    });
    return () => {
      const {
        tag: Tag,
        value
      } = props, restProps = __rest$7(props, ["tag", "value"]);
      return createVNode(Tag, _objectSpread2$1(_objectSpread2$1({}, restProps), {}, {
        "ref": inputRef,
        "value": value
      }), null);
    };
  }
});
const BaseInputInner$1 = BaseInputInner;
function styleToString(style) {
  const styleNames = Array.prototype.slice.apply(style);
  return styleNames.map((name) => `${name}: ${style.getPropertyValue(name)};`).join("");
}
function styleObjectToString(style) {
  return Object.keys(style).reduce((acc, name) => {
    const styleValue = style[name];
    if (typeof styleValue === "undefined" || styleValue === null) {
      return acc;
    }
    acc += `${name}: ${style[name]};`;
    return acc;
  }, "");
}
var __rest$6 = function(s2, e2) {
  var t2 = {};
  for (var p in s2)
    if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
      t2[p] = s2[p];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
      if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
        t2[p[i2]] = s2[p[i2]];
    }
  return t2;
};
const BaseInput = defineComponent({
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: false,
  props: {
    disabled: PropTypes$1.looseBool,
    type: PropTypes$1.string,
    value: PropTypes$1.any,
    lazy: PropTypes$1.bool.def(true),
    tag: {
      type: String,
      default: "input"
    },
    size: PropTypes$1.string,
    style: PropTypes$1.oneOfType([String, Object]),
    class: PropTypes$1.string
  },
  emits: ["change", "input", "blur", "keydown", "focus", "compositionstart", "compositionend", "keyup", "paste", "mousedown"],
  setup(props, _ref) {
    let {
      emit,
      attrs,
      expose
    } = _ref;
    const inputRef = shallowRef(null);
    const renderValue = ref();
    const isComposing = ref(false);
    watch([() => props.value, isComposing], () => {
      if (isComposing.value)
        return;
      renderValue.value = props.value;
    }, {
      immediate: true
    });
    const handleChange = (e2) => {
      emit("change", e2);
    };
    const onCompositionstart = (e2) => {
      isComposing.value = true;
      e2.target.composing = true;
      emit("compositionstart", e2);
    };
    const onCompositionend = (e2) => {
      isComposing.value = false;
      e2.target.composing = false;
      emit("compositionend", e2);
      const event = document.createEvent("HTMLEvents");
      event.initEvent("input", true, true);
      e2.target.dispatchEvent(event);
      handleChange(e2);
    };
    const handleInput = (e2) => {
      if (isComposing.value && props.lazy) {
        renderValue.value = e2.target.value;
        return;
      }
      emit("input", e2);
    };
    const handleBlur = (e2) => {
      emit("blur", e2);
    };
    const handleFocus = (e2) => {
      emit("focus", e2);
    };
    const focus = () => {
      if (inputRef.value) {
        inputRef.value.focus();
      }
    };
    const blur = () => {
      if (inputRef.value) {
        inputRef.value.blur();
      }
    };
    const handleKeyDown = (e2) => {
      emit("keydown", e2);
    };
    const handleKeyUp = (e2) => {
      emit("keyup", e2);
    };
    const setSelectionRange = (start, end, direction) => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.setSelectionRange(start, end, direction);
    };
    const select = () => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.select();
    };
    expose({
      focus,
      blur,
      input: computed(() => {
        var _a;
        return (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.input;
      }),
      setSelectionRange,
      select,
      getSelectionStart: () => {
        var _a;
        return (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.getSelectionStart();
      },
      getSelectionEnd: () => {
        var _a;
        return (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.getSelectionEnd();
      },
      getScrollTop: () => {
        var _a;
        return (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.getScrollTop();
      }
    });
    const handleMousedown = (e2) => {
      emit("mousedown", e2);
    };
    const handlePaste = (e2) => {
      emit("paste", e2);
    };
    const styleString = computed(() => {
      return props.style && typeof props.style !== "string" ? styleObjectToString(props.style) : props.style;
    });
    return () => {
      const restProps = __rest$6(props, ["style", "lazy"]);
      return createVNode(BaseInputInner$1, _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, restProps), attrs), {}, {
        "style": styleString.value,
        "onInput": handleInput,
        "onChange": handleChange,
        "onBlur": handleBlur,
        "onFocus": handleFocus,
        "ref": inputRef,
        "value": renderValue.value,
        "onCompositionstart": onCompositionstart,
        "onCompositionend": onCompositionend,
        "onKeyup": handleKeyUp,
        "onKeydown": handleKeyDown,
        "onPaste": handlePaste,
        "onMousedown": handleMousedown
      }), null);
    };
  }
});
const BaseInput$1 = BaseInput;
function useMergedState(defaultStateValue, option) {
  const {
    defaultValue,
    value = ref()
  } = option || {};
  let initValue = typeof defaultStateValue === "function" ? defaultStateValue() : defaultStateValue;
  if (value.value !== void 0) {
    initValue = unref(value);
  }
  if (defaultValue !== void 0) {
    initValue = typeof defaultValue === "function" ? defaultValue() : defaultValue;
  }
  const innerValue = ref(initValue);
  const mergedValue = ref(initValue);
  watchEffect(() => {
    let val = value.value !== void 0 ? value.value : innerValue.value;
    if (option.postState) {
      val = option.postState(val);
    }
    mergedValue.value = val;
  });
  function triggerChange(newValue) {
    const preVal = mergedValue.value;
    innerValue.value = newValue;
    if (toRaw(mergedValue.value) !== newValue && option.onChange) {
      option.onChange(newValue, preVal);
    }
  }
  watch(value, () => {
    innerValue.value = value.value;
  });
  return [mergedValue, triggerChange];
}
function useState(defaultStateValue) {
  const initValue = typeof defaultStateValue === "function" ? defaultStateValue() : defaultStateValue;
  const innerValue = ref(initValue);
  function triggerChange(newValue) {
    innerValue.value = newValue;
  }
  return [innerValue, triggerChange];
}
var CheckOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, "name": "check", "theme": "outlined" };
const CheckOutlinedSvg = CheckOutlined$2;
function _objectSpread$4(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
      _defineProperty$4(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$4(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var CheckOutlined = function CheckOutlined2(props, context) {
  var p = _objectSpread$4({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread$4({}, p, {
    "icon": CheckOutlinedSvg
  }), null);
};
CheckOutlined.displayName = "CheckOutlined";
CheckOutlined.inheritAttrs = false;
const CheckOutlined$1 = CheckOutlined;
var CloseCircleFilled$2 = { "icon": { "tag": "svg", "attrs": { "fill-rule": "evenodd", "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, "name": "close-circle", "theme": "filled" };
const CloseCircleFilledSvg = CloseCircleFilled$2;
function _objectSpread$3(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
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
var CloseCircleFilled = function CloseCircleFilled2(props, context) {
  var p = _objectSpread$3({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread$3({}, p, {
    "icon": CloseCircleFilledSvg
  }), null);
};
CloseCircleFilled.displayName = "CloseCircleFilled";
CloseCircleFilled.inheritAttrs = false;
const CloseCircleFilled$1 = CloseCircleFilled;
function createContext(defaultValue) {
  const contextKey = Symbol("contextKey");
  const useProvide = (props, newProps) => {
    const mergedProps = reactive({});
    provide(contextKey, mergedProps);
    watchEffect(() => {
      _extends(mergedProps, props, newProps || {});
    });
    return mergedProps;
  };
  const useInject = () => {
    return inject(contextKey, defaultValue) || {};
  };
  return {
    useProvide,
    useInject
  };
}
const ContextKey = Symbol("ContextProps");
const InternalContextKey = Symbol("InternalContextProps");
const defaultContext = {
  id: computed(() => void 0),
  onFieldBlur: () => {
  },
  onFieldChange: () => {
  },
  clearValidate: () => {
  }
};
const defaultInternalContext = {
  addFormItemField: () => {
  },
  removeFormItemField: () => {
  }
};
const useInjectFormItemContext = () => {
  const internalContext = inject(InternalContextKey, defaultInternalContext);
  const formItemFieldKey = Symbol("FormItemFieldKey");
  const instance = getCurrentInstance();
  internalContext.addFormItemField(formItemFieldKey, instance.type);
  onBeforeUnmount(() => {
    internalContext.removeFormItemField(formItemFieldKey);
  });
  provide(InternalContextKey, defaultInternalContext);
  provide(ContextKey, defaultContext);
  return inject(ContextKey, defaultContext);
};
const FormItemInputContext = createContext({});
const NoFormStatus = defineComponent({
  name: "NoFormStatus",
  setup(_2, _ref2) {
    let {
      slots
    } = _ref2;
    FormItemInputContext.useProvide({});
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
function getStatusClassNames(prefixCls, status, hasFeedback) {
  return classNames({
    [`${prefixCls}-status-success`]: status === "success",
    [`${prefixCls}-status-warning`]: status === "warning",
    [`${prefixCls}-status-error`]: status === "error",
    [`${prefixCls}-status-validating`]: status === "validating",
    [`${prefixCls}-has-feedback`]: hasFeedback
  });
}
const getMergedStatus = (contextStatus, customStatus) => customStatus || contextStatus;
const initMotionCommon = (duration) => ({
  animationDuration: duration,
  animationFillMode: "both"
});
const initMotionCommonLeave = (duration) => ({
  animationDuration: duration,
  animationFillMode: "both"
});
const initMotion = function(motionCls, inKeyframes, outKeyframes, duration) {
  let sameLevel = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
  const sameLevelPrefix = sameLevel ? "&" : "";
  return {
    [`
      ${sameLevelPrefix}${motionCls}-enter,
      ${sameLevelPrefix}${motionCls}-appear
    `]: _extends(_extends({}, initMotionCommon(duration)), {
      animationPlayState: "paused"
    }),
    [`${sameLevelPrefix}${motionCls}-leave`]: _extends(_extends({}, initMotionCommonLeave(duration)), {
      animationPlayState: "paused"
    }),
    [`
      ${sameLevelPrefix}${motionCls}-enter${motionCls}-enter-active,
      ${sameLevelPrefix}${motionCls}-appear${motionCls}-appear-active
    `]: {
      animationName: inKeyframes,
      animationPlayState: "running"
    },
    [`${sameLevelPrefix}${motionCls}-leave${motionCls}-leave-active`]: {
      animationName: outKeyframes,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
};
const zoomIn = new Keyframes("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
});
const zoomOut = new Keyframes("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
});
const zoomBigIn = new Keyframes("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
});
const zoomBigOut = new Keyframes("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
});
const zoomUpIn = new Keyframes("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
});
const zoomUpOut = new Keyframes("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
});
const zoomLeftIn = new Keyframes("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
});
const zoomLeftOut = new Keyframes("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
});
const zoomRightIn = new Keyframes("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
});
const zoomRightOut = new Keyframes("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
});
const zoomDownIn = new Keyframes("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
});
const zoomDownOut = new Keyframes("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
});
const zoomMotion = {
  zoom: {
    inKeyframes: zoomIn,
    outKeyframes: zoomOut
  },
  "zoom-big": {
    inKeyframes: zoomBigIn,
    outKeyframes: zoomBigOut
  },
  "zoom-big-fast": {
    inKeyframes: zoomBigIn,
    outKeyframes: zoomBigOut
  },
  "zoom-left": {
    inKeyframes: zoomLeftIn,
    outKeyframes: zoomLeftOut
  },
  "zoom-right": {
    inKeyframes: zoomRightIn,
    outKeyframes: zoomRightOut
  },
  "zoom-up": {
    inKeyframes: zoomUpIn,
    outKeyframes: zoomUpOut
  },
  "zoom-down": {
    inKeyframes: zoomDownIn,
    outKeyframes: zoomDownOut
  }
};
const initZoomMotion = (token2, motionName) => {
  const {
    antCls
  } = token2;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = zoomMotion[motionName];
  return [initMotion(motionCls, inKeyframes, outKeyframes, motionName === "zoom-big-fast" ? token2.motionDurationFast : token2.motionDurationMid), {
    [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
      transform: "scale(0)",
      opacity: 0,
      animationTimingFunction: token2.motionEaseOutCirc,
      "&-prepare": {
        transform: "none"
      }
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token2.motionEaseInOutCirc
    }
  }];
};
function compactItemBorder(token2, parentCls, options) {
  const {
    focusElCls,
    focus,
    borderElCls
  } = options;
  const childCombinator = borderElCls ? "> *" : "";
  const hoverEffects = ["hover", focus ? "focus" : null, "active"].filter(Boolean).map((n2) => `&:${n2} ${childCombinator}`).join(",");
  return {
    [`&-item:not(${parentCls}-last-item)`]: {
      marginInlineEnd: -token2.lineWidth
    },
    "&-item": _extends(_extends({
      [hoverEffects]: {
        zIndex: 2
      }
    }, focusElCls ? {
      [`&${focusElCls}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${childCombinator}`]: {
        zIndex: 0
      }
    })
  };
}
function compactItemBorderRadius(prefixCls, parentCls, options) {
  const {
    borderElCls
  } = options;
  const childCombinator = borderElCls ? `> ${borderElCls}` : "";
  return {
    [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item) ${childCombinator}`]: {
      borderRadius: 0
    },
    [`&-item:not(${parentCls}-last-item)${parentCls}-first-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${parentCls}-first-item)${parentCls}-last-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function genCompactItemStyle(token2) {
  let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: true
  };
  const {
    componentCls
  } = token2;
  const compactCls = `${componentCls}-compact`;
  return {
    [compactCls]: _extends(_extends({}, compactItemBorder(token2, compactCls, options)), compactItemBorderRadius(componentCls, compactCls, options))
  };
}
const autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
const targetOffset$1 = [0, 0];
const placements = {
  left: {
    points: ["cr", "cl"],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset$1
  },
  right: {
    points: ["cl", "cr"],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset$1
  },
  top: {
    points: ["bc", "tc"],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset$1
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset$1
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset$1
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset$1
  },
  topRight: {
    points: ["br", "tr"],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset$1
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset$1
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset$1
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset$1
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset$1
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset$1
  }
};
const tooltipContentProps = {
  prefixCls: String,
  id: String,
  overlayInnerStyle: PropTypes$1.any
};
const Content = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "TooltipContent",
  props: tooltipContentProps,
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    return () => {
      var _a;
      return createVNode("div", {
        "class": `${props.prefixCls}-inner`,
        "id": props.id,
        "role": "tooltip",
        "style": props.overlayInnerStyle
      }, [(_a = slots.overlay) === null || _a === void 0 ? void 0 : _a.call(slots)]);
    };
  }
});
var __rest$5 = function(s2, e2) {
  var t2 = {};
  for (var p in s2)
    if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
      t2[p] = s2[p];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
      if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
        t2[p[i2]] = s2[p[i2]];
    }
  return t2;
};
function noop() {
}
const Tooltip$1 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Tooltip",
  inheritAttrs: false,
  props: {
    trigger: PropTypes$1.any.def(["hover"]),
    defaultVisible: {
      type: Boolean,
      default: void 0
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    placement: PropTypes$1.string.def("right"),
    transitionName: String,
    animation: PropTypes$1.any,
    afterVisibleChange: PropTypes$1.func.def(() => {
    }),
    overlayStyle: {
      type: Object,
      default: void 0
    },
    overlayClassName: String,
    prefixCls: PropTypes$1.string.def("rc-tooltip"),
    mouseEnterDelay: PropTypes$1.number.def(0.1),
    mouseLeaveDelay: PropTypes$1.number.def(0.1),
    getPopupContainer: Function,
    destroyTooltipOnHide: {
      type: Boolean,
      default: false
    },
    align: PropTypes$1.object.def(() => ({})),
    arrowContent: PropTypes$1.any.def(null),
    tipId: String,
    builtinPlacements: PropTypes$1.object,
    overlayInnerStyle: {
      type: Object,
      default: void 0
    },
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    onVisibleChange: Function,
    onPopupAlign: Function,
    arrow: {
      type: Boolean,
      default: true
    }
  },
  setup(props, _ref) {
    let {
      slots,
      attrs,
      expose
    } = _ref;
    const triggerDOM = shallowRef();
    const getPopupElement = () => {
      const {
        prefixCls,
        tipId,
        overlayInnerStyle
      } = props;
      return [!!props.arrow ? createVNode("div", {
        "class": `${prefixCls}-arrow`,
        "key": "arrow"
      }, [getPropsSlot(slots, props, "arrowContent")]) : null, createVNode(Content, {
        "key": "content",
        "prefixCls": prefixCls,
        "id": tipId,
        "overlayInnerStyle": overlayInnerStyle
      }, {
        overlay: slots.overlay
      })];
    };
    const getPopupDomNode = () => {
      return triggerDOM.value.getPopupDomNode();
    };
    expose({
      getPopupDomNode,
      triggerDOM,
      forcePopupAlign: () => {
        var _a;
        return (_a = triggerDOM.value) === null || _a === void 0 ? void 0 : _a.forcePopupAlign();
      }
    });
    const destroyTooltip = shallowRef(false);
    const autoDestroy = shallowRef(false);
    watchEffect(() => {
      const {
        destroyTooltipOnHide
      } = props;
      if (typeof destroyTooltipOnHide === "boolean") {
        destroyTooltip.value = destroyTooltipOnHide;
      } else if (destroyTooltipOnHide && typeof destroyTooltipOnHide === "object") {
        const {
          keepParent
        } = destroyTooltipOnHide;
        destroyTooltip.value = keepParent === true;
        autoDestroy.value = keepParent === false;
      }
    });
    return () => {
      const {
        overlayClassName,
        trigger,
        mouseEnterDelay,
        mouseLeaveDelay,
        overlayStyle,
        prefixCls,
        afterVisibleChange,
        transitionName,
        animation,
        placement,
        align,
        destroyTooltipOnHide,
        defaultVisible
      } = props, restProps = __rest$5(props, ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "afterVisibleChange", "transitionName", "animation", "placement", "align", "destroyTooltipOnHide", "defaultVisible"]);
      const extraProps = _extends({}, restProps);
      if (props.visible !== void 0) {
        extraProps.popupVisible = props.visible;
      }
      const triggerProps2 = _extends(_extends(_extends({
        popupClassName: overlayClassName,
        prefixCls,
        action: trigger,
        builtinPlacements: placements,
        popupPlacement: placement,
        popupAlign: align,
        afterPopupVisibleChange: afterVisibleChange,
        popupTransitionName: transitionName,
        popupAnimation: animation,
        defaultPopupVisible: defaultVisible,
        destroyPopupOnHide: destroyTooltip.value,
        autoDestroy: autoDestroy.value,
        mouseLeaveDelay,
        popupStyle: overlayStyle,
        mouseEnterDelay
      }, extraProps), attrs), {
        onPopupVisibleChange: props.onVisibleChange || noop,
        onPopupAlign: props.onPopupAlign || noop,
        ref: triggerDOM,
        arrow: !!props.arrow,
        popup: getPopupElement()
      });
      return createVNode(Trigger, triggerProps2, {
        default: slots.default
      });
    };
  }
});
const abstractTooltipProps = () => ({
  trigger: [String, Array],
  open: {
    type: Boolean,
    default: void 0
  },
  /** @deprecated Please use `open` instead. */
  visible: {
    type: Boolean,
    default: void 0
  },
  placement: String,
  color: String,
  transitionName: String,
  overlayStyle: objectType(),
  overlayInnerStyle: objectType(),
  overlayClassName: String,
  openClassName: String,
  prefixCls: String,
  mouseEnterDelay: Number,
  mouseLeaveDelay: Number,
  getPopupContainer: Function,
  /**@deprecated Please use `arrow={{ pointAtCenter: true }}` instead. */
  arrowPointAtCenter: {
    type: Boolean,
    default: void 0
  },
  arrow: {
    type: [Boolean, Object],
    default: true
  },
  autoAdjustOverflow: {
    type: [Boolean, Object],
    default: void 0
  },
  destroyTooltipOnHide: {
    type: Boolean,
    default: void 0
  },
  align: objectType(),
  builtinPlacements: objectType(),
  children: Array,
  /** @deprecated Please use `onOpenChange` instead. */
  onVisibleChange: Function,
  /** @deprecated Please use `onUpdate:open` instead. */
  "onUpdate:visible": Function,
  onOpenChange: Function,
  "onUpdate:open": Function
});
const autoAdjustOverflowEnabled = {
  adjustX: 1,
  adjustY: 1
};
const autoAdjustOverflowDisabled = {
  adjustX: 0,
  adjustY: 0
};
const targetOffset = [0, 0];
function getOverflowOptions(autoAdjustOverflow2) {
  if (typeof autoAdjustOverflow2 === "boolean") {
    return autoAdjustOverflow2 ? autoAdjustOverflowEnabled : autoAdjustOverflowDisabled;
  }
  return _extends(_extends({}, autoAdjustOverflowDisabled), autoAdjustOverflow2);
}
function getPlacements(config) {
  const {
    arrowWidth = 4,
    horizontalArrowShift = 16,
    verticalArrowShift = 8,
    autoAdjustOverflow: autoAdjustOverflow2,
    arrowPointAtCenter
  } = config;
  const placementMap = {
    left: {
      points: ["cr", "cl"],
      offset: [-4, 0]
    },
    right: {
      points: ["cl", "cr"],
      offset: [4, 0]
    },
    top: {
      points: ["bc", "tc"],
      offset: [0, -4]
    },
    bottom: {
      points: ["tc", "bc"],
      offset: [0, 4]
    },
    topLeft: {
      points: ["bl", "tc"],
      offset: [-(horizontalArrowShift + arrowWidth), -4]
    },
    leftTop: {
      points: ["tr", "cl"],
      offset: [-4, -(verticalArrowShift + arrowWidth)]
    },
    topRight: {
      points: ["br", "tc"],
      offset: [horizontalArrowShift + arrowWidth, -4]
    },
    rightTop: {
      points: ["tl", "cr"],
      offset: [4, -(verticalArrowShift + arrowWidth)]
    },
    bottomRight: {
      points: ["tr", "bc"],
      offset: [horizontalArrowShift + arrowWidth, 4]
    },
    rightBottom: {
      points: ["bl", "cr"],
      offset: [4, verticalArrowShift + arrowWidth]
    },
    bottomLeft: {
      points: ["tl", "bc"],
      offset: [-(horizontalArrowShift + arrowWidth), 4]
    },
    leftBottom: {
      points: ["br", "cl"],
      offset: [-4, verticalArrowShift + arrowWidth]
    }
  };
  Object.keys(placementMap).forEach((key) => {
    placementMap[key] = arrowPointAtCenter ? _extends(_extends({}, placementMap[key]), {
      overflow: getOverflowOptions(autoAdjustOverflow2),
      targetOffset
    }) : _extends(_extends({}, placements[key]), {
      overflow: getOverflowOptions(autoAdjustOverflow2)
    });
    placementMap[key].ignoreShake = true;
  });
  return placementMap;
}
function firstNotUndefined() {
  let arr = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  for (let i2 = 0, len = arr.length; i2 < len; i2++) {
    if (arr[i2] !== void 0) {
      return arr[i2];
    }
  }
  return void 0;
}
const inverseColors = PresetColors.map((color) => `${color}-inverse`);
const PresetStatusColorTypes = ["success", "processing", "error", "default", "warning"];
function isPresetColor(color) {
  let includeInverse = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (includeInverse) {
    return [...inverseColors, ...PresetColors].includes(color);
  }
  return PresetColors.includes(color);
}
function isPresetStatusColor(color) {
  return PresetStatusColorTypes.includes(color);
}
function parseColor(prefixCls, color) {
  const isInternalColor = isPresetColor(color);
  const className = classNames({
    [`${prefixCls}-${color}`]: color && isInternalColor
  });
  const overlayStyle = {};
  const arrowStyle = {};
  if (color && !isInternalColor) {
    overlayStyle.background = color;
    arrowStyle["--antd-arrow-background-color"] = color;
  }
  return {
    className,
    overlayStyle,
    arrowStyle
  };
}
function connectArrowCls(classList) {
  let showArrowCls = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return classList.map((cls) => `${showArrowCls}${cls}`).join(",");
}
const MAX_VERTICAL_CONTENT_RADIUS = 8;
function getArrowOffset(options) {
  const maxVerticalContentRadius = MAX_VERTICAL_CONTENT_RADIUS;
  const {
    sizePopupArrow,
    contentRadius,
    borderRadiusOuter,
    limitVerticalRadius
  } = options;
  const arrowInnerOffset = sizePopupArrow / 2 - Math.ceil(borderRadiusOuter * (Math.sqrt(2) - 1));
  const dropdownArrowOffset = (contentRadius > 12 ? contentRadius + 2 : 12) - arrowInnerOffset;
  const dropdownArrowOffsetVertical = limitVerticalRadius ? maxVerticalContentRadius - arrowInnerOffset : dropdownArrowOffset;
  return {
    dropdownArrowOffset,
    dropdownArrowOffsetVertical
  };
}
function getArrowStyle(token2, options) {
  const {
    componentCls,
    sizePopupArrow,
    marginXXS,
    borderRadiusXS,
    borderRadiusOuter,
    boxShadowPopoverArrow
  } = token2;
  const {
    colorBg,
    showArrowCls,
    contentRadius = token2.borderRadiusLG,
    limitVerticalRadius
  } = options;
  const {
    dropdownArrowOffsetVertical,
    dropdownArrowOffset
  } = getArrowOffset({
    sizePopupArrow,
    contentRadius,
    borderRadiusOuter,
    limitVerticalRadius
  });
  const dropdownArrowDistance = sizePopupArrow / 2 + marginXXS;
  return {
    [componentCls]: {
      // ============================ Basic ============================
      [`${componentCls}-arrow`]: [_extends(_extends({
        position: "absolute",
        zIndex: 1,
        display: "block"
      }, roundedArrow(sizePopupArrow, borderRadiusXS, borderRadiusOuter, colorBg, boxShadowPopoverArrow)), {
        "&:before": {
          background: colorBg
        }
      })],
      // ========================== Placement ==========================
      // Here handle the arrow position and rotate stuff
      // >>>>> Top
      [[`&-placement-top ${componentCls}-arrow`, `&-placement-topLeft ${componentCls}-arrow`, `&-placement-topRight ${componentCls}-arrow`].join(",")]: {
        bottom: 0,
        transform: "translateY(100%) rotate(180deg)"
      },
      [`&-placement-top ${componentCls}-arrow`]: {
        left: {
          _skip_check_: true,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(100%) rotate(180deg)"
      },
      [`&-placement-topLeft ${componentCls}-arrow`]: {
        left: {
          _skip_check_: true,
          value: dropdownArrowOffset
        }
      },
      [`&-placement-topRight ${componentCls}-arrow`]: {
        right: {
          _skip_check_: true,
          value: dropdownArrowOffset
        }
      },
      // >>>>> Bottom
      [[`&-placement-bottom ${componentCls}-arrow`, `&-placement-bottomLeft ${componentCls}-arrow`, `&-placement-bottomRight ${componentCls}-arrow`].join(",")]: {
        top: 0,
        transform: `translateY(-100%)`
      },
      [`&-placement-bottom ${componentCls}-arrow`]: {
        left: {
          _skip_check_: true,
          value: "50%"
        },
        transform: `translateX(-50%) translateY(-100%)`
      },
      [`&-placement-bottomLeft ${componentCls}-arrow`]: {
        left: {
          _skip_check_: true,
          value: dropdownArrowOffset
        }
      },
      [`&-placement-bottomRight ${componentCls}-arrow`]: {
        right: {
          _skip_check_: true,
          value: dropdownArrowOffset
        }
      },
      // >>>>> Left
      [[`&-placement-left ${componentCls}-arrow`, `&-placement-leftTop ${componentCls}-arrow`, `&-placement-leftBottom ${componentCls}-arrow`].join(",")]: {
        right: {
          _skip_check_: true,
          value: 0
        },
        transform: "translateX(100%) rotate(90deg)"
      },
      [`&-placement-left ${componentCls}-arrow`]: {
        top: {
          _skip_check_: true,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(100%) rotate(90deg)"
      },
      [`&-placement-leftTop ${componentCls}-arrow`]: {
        top: dropdownArrowOffsetVertical
      },
      [`&-placement-leftBottom ${componentCls}-arrow`]: {
        bottom: dropdownArrowOffsetVertical
      },
      // >>>>> Right
      [[`&-placement-right ${componentCls}-arrow`, `&-placement-rightTop ${componentCls}-arrow`, `&-placement-rightBottom ${componentCls}-arrow`].join(",")]: {
        left: {
          _skip_check_: true,
          value: 0
        },
        transform: "translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-right ${componentCls}-arrow`]: {
        top: {
          _skip_check_: true,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-rightTop ${componentCls}-arrow`]: {
        top: dropdownArrowOffsetVertical
      },
      [`&-placement-rightBottom ${componentCls}-arrow`]: {
        bottom: dropdownArrowOffsetVertical
      },
      // =========================== Offset ============================
      // Offset the popover to account for the dropdown arrow
      // >>>>> Top
      [connectArrowCls([`&-placement-topLeft`, `&-placement-top`, `&-placement-topRight`].map((cls) => cls += ":not(&-arrow-hidden)"), showArrowCls)]: {
        paddingBottom: dropdownArrowDistance
      },
      // >>>>> Bottom
      [connectArrowCls([`&-placement-bottomLeft`, `&-placement-bottom`, `&-placement-bottomRight`].map((cls) => cls += ":not(&-arrow-hidden)"), showArrowCls)]: {
        paddingTop: dropdownArrowDistance
      },
      // >>>>> Left
      [connectArrowCls([`&-placement-leftTop`, `&-placement-left`, `&-placement-leftBottom`].map((cls) => cls += ":not(&-arrow-hidden)"), showArrowCls)]: {
        paddingRight: {
          _skip_check_: true,
          value: dropdownArrowDistance
        }
      },
      // >>>>> Right
      [connectArrowCls([`&-placement-rightTop`, `&-placement-right`, `&-placement-rightBottom`].map((cls) => cls += ":not(&-arrow-hidden)"), showArrowCls)]: {
        paddingLeft: {
          _skip_check_: true,
          value: dropdownArrowDistance
        }
      }
    }
  };
}
const genTooltipStyle = (token2) => {
  const {
    componentCls,
    // ant-tooltip
    tooltipMaxWidth,
    tooltipColor,
    tooltipBg,
    tooltipBorderRadius,
    zIndexPopup,
    controlHeight,
    boxShadowSecondary,
    paddingSM,
    paddingXS,
    tooltipRadiusOuter
  } = token2;
  return [
    {
      [componentCls]: _extends(_extends(_extends(_extends({}, resetComponent(token2)), {
        position: "absolute",
        zIndex: zIndexPopup,
        display: "block",
        "&": [{
          width: "max-content"
        }, {
          width: "intrinsic"
        }],
        maxWidth: tooltipMaxWidth,
        visibility: "visible",
        "&-hidden": {
          display: "none"
        },
        "--antd-arrow-background-color": tooltipBg,
        // Wrapper for the tooltip content
        [`${componentCls}-inner`]: {
          minWidth: controlHeight,
          minHeight: controlHeight,
          padding: `${paddingSM / 2}px ${paddingXS}px`,
          color: tooltipColor,
          textAlign: "start",
          textDecoration: "none",
          wordWrap: "break-word",
          backgroundColor: tooltipBg,
          borderRadius: tooltipBorderRadius,
          boxShadow: boxShadowSecondary
        },
        // Limit left and right placement radius
        [[`&-placement-left`, `&-placement-leftTop`, `&-placement-leftBottom`, `&-placement-right`, `&-placement-rightTop`, `&-placement-rightBottom`].join(",")]: {
          [`${componentCls}-inner`]: {
            borderRadius: Math.min(tooltipBorderRadius, MAX_VERTICAL_CONTENT_RADIUS)
          }
        },
        [`${componentCls}-content`]: {
          position: "relative"
        }
      }), genPresetColor(token2, (colorKey, _ref) => {
        let {
          darkColor
        } = _ref;
        return {
          [`&${componentCls}-${colorKey}`]: {
            [`${componentCls}-inner`]: {
              backgroundColor: darkColor
            },
            [`${componentCls}-arrow`]: {
              "--antd-arrow-background-color": darkColor
            }
          }
        };
      })), {
        // RTL
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Arrow Style
    getArrowStyle(merge(token2, {
      borderRadiusOuter: tooltipRadiusOuter
    }), {
      colorBg: "var(--antd-arrow-background-color)",
      showArrowCls: "",
      contentRadius: tooltipBorderRadius,
      limitVerticalRadius: true
    }),
    // Pure Render
    {
      [`${componentCls}-pure`]: {
        position: "relative",
        maxWidth: "none"
      }
    }
  ];
};
const useStyle$3 = (prefixCls, injectStyle) => {
  const useOriginHook = genComponentStyleHook("Tooltip", (token2) => {
    if ((injectStyle === null || injectStyle === void 0 ? void 0 : injectStyle.value) === false) {
      return [];
    }
    const {
      borderRadius,
      colorTextLightSolid,
      colorBgDefault,
      borderRadiusOuter
    } = token2;
    const TooltipToken = merge(token2, {
      // default variables
      tooltipMaxWidth: 250,
      tooltipColor: colorTextLightSolid,
      tooltipBorderRadius: borderRadius,
      tooltipBg: colorBgDefault,
      tooltipRadiusOuter: borderRadiusOuter > 4 ? 4 : borderRadiusOuter
    });
    return [genTooltipStyle(TooltipToken), initZoomMotion(token2, "zoom-big-fast")];
  }, (_ref2) => {
    let {
      zIndexPopupBase,
      colorBgSpotlight
    } = _ref2;
    return {
      zIndexPopup: zIndexPopupBase + 70,
      colorBgDefault: colorBgSpotlight
    };
  });
  return useOriginHook(prefixCls);
};
const splitObject = (obj, keys2) => {
  const picked = {};
  const omitted = _extends({}, obj);
  keys2.forEach((key) => {
    if (obj && key in obj) {
      picked[key] = obj[key];
      delete omitted[key];
    }
  });
  return {
    picked,
    omitted
  };
};
const tooltipProps = () => _extends(_extends({}, abstractTooltipProps()), {
  title: PropTypes$1.any
});
const ToolTip = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ATooltip",
  inheritAttrs: false,
  props: initDefaultProps$1(tooltipProps(), {
    trigger: "hover",
    align: {},
    placement: "top",
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    arrowPointAtCenter: false,
    autoAdjustOverflow: true
  }),
  slots: Object,
  // emits: ['update:visible', 'visibleChange'],
  setup(props, _ref) {
    let {
      slots,
      emit,
      attrs,
      expose
    } = _ref;
    const {
      prefixCls,
      getPopupContainer,
      direction,
      rootPrefixCls
    } = useConfigInject("tooltip", props);
    const mergedOpen = computed(() => {
      var _a;
      return (_a = props.open) !== null && _a !== void 0 ? _a : props.visible;
    });
    const innerOpen = ref(firstNotUndefined([props.open, props.visible]));
    const tooltip = ref();
    let rafId;
    watch(mergedOpen, (val) => {
      wrapperRaf.cancel(rafId);
      rafId = wrapperRaf(() => {
        innerOpen.value = !!val;
      });
    });
    const isNoTitle = () => {
      var _a;
      const title = (_a = props.title) !== null && _a !== void 0 ? _a : slots.title;
      return !title && title !== 0;
    };
    const handleVisibleChange = (val) => {
      const noTitle = isNoTitle();
      if (mergedOpen.value === void 0) {
        innerOpen.value = noTitle ? false : val;
      }
      if (!noTitle) {
        emit("update:visible", val);
        emit("visibleChange", val);
        emit("update:open", val);
        emit("openChange", val);
      }
    };
    const getPopupDomNode = () => {
      return tooltip.value.getPopupDomNode();
    };
    expose({
      getPopupDomNode,
      open: innerOpen,
      forcePopupAlign: () => {
        var _a;
        return (_a = tooltip.value) === null || _a === void 0 ? void 0 : _a.forcePopupAlign();
      }
    });
    const tooltipPlacements = computed(() => {
      var _a;
      const {
        builtinPlacements,
        autoAdjustOverflow: autoAdjustOverflow2,
        arrow,
        arrowPointAtCenter
      } = props;
      let mergedArrowPointAtCenter = arrowPointAtCenter;
      if (typeof arrow === "object") {
        mergedArrowPointAtCenter = (_a = arrow.pointAtCenter) !== null && _a !== void 0 ? _a : arrowPointAtCenter;
      }
      return builtinPlacements || getPlacements({
        arrowPointAtCenter: mergedArrowPointAtCenter,
        autoAdjustOverflow: autoAdjustOverflow2
      });
    });
    const isTrueProps = (val) => {
      return val || val === "";
    };
    const getDisabledCompatibleChildren = (ele) => {
      const elementType = ele.type;
      if (typeof elementType === "object" && ele.props) {
        if ((elementType.__ANT_BUTTON === true || elementType === "button") && isTrueProps(ele.props.disabled) || elementType.__ANT_SWITCH === true && (isTrueProps(ele.props.disabled) || isTrueProps(ele.props.loading)) || elementType.__ANT_RADIO === true && isTrueProps(ele.props.disabled)) {
          const {
            picked,
            omitted
          } = splitObject(getStyle(ele), ["position", "left", "right", "top", "bottom", "float", "display", "zIndex"]);
          const spanStyle = _extends(_extends({
            display: "inline-block"
          }, picked), {
            cursor: "not-allowed",
            lineHeight: 1,
            width: ele.props && ele.props.block ? "100%" : void 0
          });
          const buttonStyle = _extends(_extends({}, omitted), {
            pointerEvents: "none"
          });
          const child = cloneElement(ele, {
            style: buttonStyle
          }, true);
          return createVNode("span", {
            "style": spanStyle,
            "class": `${prefixCls.value}-disabled-compatible-wrapper`
          }, [child]);
        }
      }
      return ele;
    };
    const getOverlay = () => {
      var _a, _b;
      return (_a = props.title) !== null && _a !== void 0 ? _a : (_b = slots.title) === null || _b === void 0 ? void 0 : _b.call(slots);
    };
    const onPopupAlign = (domNode, align) => {
      const placements2 = tooltipPlacements.value;
      const placement = Object.keys(placements2).find((key) => {
        var _a, _b;
        return placements2[key].points[0] === ((_a = align.points) === null || _a === void 0 ? void 0 : _a[0]) && placements2[key].points[1] === ((_b = align.points) === null || _b === void 0 ? void 0 : _b[1]);
      });
      if (placement) {
        const rect = domNode.getBoundingClientRect();
        const transformOrigin = {
          top: "50%",
          left: "50%"
        };
        if (placement.indexOf("top") >= 0 || placement.indexOf("Bottom") >= 0) {
          transformOrigin.top = `${rect.height - align.offset[1]}px`;
        } else if (placement.indexOf("Top") >= 0 || placement.indexOf("bottom") >= 0) {
          transformOrigin.top = `${-align.offset[1]}px`;
        }
        if (placement.indexOf("left") >= 0 || placement.indexOf("Right") >= 0) {
          transformOrigin.left = `${rect.width - align.offset[0]}px`;
        } else if (placement.indexOf("right") >= 0 || placement.indexOf("Left") >= 0) {
          transformOrigin.left = `${-align.offset[0]}px`;
        }
        domNode.style.transformOrigin = `${transformOrigin.left} ${transformOrigin.top}`;
      }
    };
    const colorInfo = computed(() => parseColor(prefixCls.value, props.color));
    const injectFromPopover = computed(() => attrs["data-popover-inject"]);
    const [wrapSSR, hashId] = useStyle$3(prefixCls, computed(() => !injectFromPopover.value));
    return () => {
      var _a, _b;
      const {
        openClassName,
        overlayClassName,
        overlayStyle,
        overlayInnerStyle
      } = props;
      let children = (_b = filterEmpty((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots))) !== null && _b !== void 0 ? _b : null;
      children = children.length === 1 ? children[0] : children;
      let tempVisible = innerOpen.value;
      if (mergedOpen.value === void 0 && isNoTitle()) {
        tempVisible = false;
      }
      if (!children) {
        return null;
      }
      const child = getDisabledCompatibleChildren(isValidElement(children) && !isFragment(children) ? children : createVNode("span", null, [children]));
      const childCls = classNames({
        [openClassName || `${prefixCls.value}-open`]: true,
        [child.props && child.props.class]: child.props && child.props.class
      });
      const customOverlayClassName = classNames(overlayClassName, {
        [`${prefixCls.value}-rtl`]: direction.value === "rtl"
      }, colorInfo.value.className, hashId.value);
      const formattedOverlayInnerStyle = _extends(_extends({}, colorInfo.value.overlayStyle), overlayInnerStyle);
      const arrowContentStyle = colorInfo.value.arrowStyle;
      const vcTooltipProps = _extends(_extends(_extends({}, attrs), props), {
        prefixCls: prefixCls.value,
        arrow: !!props.arrow,
        getPopupContainer: getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer.value,
        builtinPlacements: tooltipPlacements.value,
        visible: tempVisible,
        ref: tooltip,
        overlayClassName: customOverlayClassName,
        overlayStyle: _extends(_extends({}, arrowContentStyle), overlayStyle),
        overlayInnerStyle: formattedOverlayInnerStyle,
        onVisibleChange: handleVisibleChange,
        onPopupAlign,
        transitionName: getTransitionName(rootPrefixCls.value, "zoom-big-fast", props.transitionName)
      });
      return wrapSSR(createVNode(Tooltip$1, vcTooltipProps, {
        default: () => [innerOpen.value ? cloneElement(child, {
          class: childCls
        }) : child],
        arrowContent: () => createVNode("span", {
          "class": `${prefixCls.value}-arrow-content`
        }, null),
        overlay: getOverlay
      }));
    };
  }
});
const Tooltip = withInstall(ToolTip);
const genWaveStyle = (token2) => {
  const {
    componentCls,
    colorPrimary
  } = token2;
  return {
    [componentCls]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${colorPrimary})`,
      boxShadow: `0 0 0 0 currentcolor`,
      opacity: 0.2,
      // =================== Motion ===================
      "&.wave-motion-appear": {
        transition: [`box-shadow 0.4s ${token2.motionEaseOutCirc}`, `opacity 2s ${token2.motionEaseOutCirc}`].join(","),
        "&-active": {
          boxShadow: `0 0 0 6px currentcolor`,
          opacity: 0
        }
      }
    }
  };
};
const useStyle$2 = genComponentStyleHook("Wave", (token2) => [genWaveStyle(token2)]);
function isNotGrey(color) {
  const match = (color || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  if (match && match[1] && match[2] && match[3]) {
    return !(match[1] === match[2] && match[2] === match[3]);
  }
  return true;
}
function isValidWaveColor(color) {
  return color && color !== "#fff" && color !== "#ffffff" && color !== "rgb(255, 255, 255)" && color !== "rgba(255, 255, 255, 1)" && isNotGrey(color) && !/rgba\((?:\d*, ){3}0\)/.test(color) && // any transparent rgba color
  color !== "transparent";
}
function getTargetWaveColor(node2) {
  const {
    borderTopColor,
    borderColor,
    backgroundColor
  } = getComputedStyle(node2);
  if (isValidWaveColor(borderTopColor)) {
    return borderTopColor;
  }
  if (isValidWaveColor(borderColor)) {
    return borderColor;
  }
  if (isValidWaveColor(backgroundColor)) {
    return backgroundColor;
  }
  return null;
}
function validateNum(value) {
  return Number.isNaN(value) ? 0 : value;
}
const WaveEffect = defineComponent({
  props: {
    target: objectType(),
    className: String
  },
  setup(props) {
    const divRef = shallowRef(null);
    const [color, setWaveColor] = useState(null);
    const [borderRadius, setBorderRadius] = useState([]);
    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [enabled, setEnabled] = useState(false);
    function syncPos() {
      const {
        target
      } = props;
      const nodeStyle = getComputedStyle(target);
      setWaveColor(getTargetWaveColor(target));
      const isStatic = nodeStyle.position === "static";
      const {
        borderLeftWidth,
        borderTopWidth
      } = nodeStyle;
      setLeft(isStatic ? target.offsetLeft : validateNum(-parseFloat(borderLeftWidth)));
      setTop(isStatic ? target.offsetTop : validateNum(-parseFloat(borderTopWidth)));
      setWidth(target.offsetWidth);
      setHeight(target.offsetHeight);
      const {
        borderTopLeftRadius,
        borderTopRightRadius,
        borderBottomLeftRadius,
        borderBottomRightRadius
      } = nodeStyle;
      setBorderRadius([borderTopLeftRadius, borderTopRightRadius, borderBottomRightRadius, borderBottomLeftRadius].map((radius) => validateNum(parseFloat(radius))));
    }
    let resizeObserver;
    let rafId;
    let timeoutId;
    const clear = () => {
      clearTimeout(timeoutId);
      wrapperRaf.cancel(rafId);
      resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.disconnect();
    };
    const removeDom = () => {
      var _a;
      const holder = (_a = divRef.value) === null || _a === void 0 ? void 0 : _a.parentElement;
      if (holder) {
        render(null, holder);
        if (holder.parentElement) {
          holder.parentElement.removeChild(holder);
        }
      }
    };
    onMounted(() => {
      clear();
      timeoutId = setTimeout(() => {
        removeDom();
      }, 5e3);
      const {
        target
      } = props;
      if (target) {
        rafId = wrapperRaf(() => {
          syncPos();
          setEnabled(true);
        });
        if (typeof ResizeObserver !== "undefined") {
          resizeObserver = new ResizeObserver(syncPos);
          resizeObserver.observe(target);
        }
      }
    });
    onBeforeUnmount(() => {
      clear();
    });
    const onTransitionend = (e2) => {
      if (e2.propertyName === "opacity") {
        removeDom();
      }
    };
    return () => {
      if (!enabled.value) {
        return null;
      }
      const waveStyle = {
        left: `${left.value}px`,
        top: `${top.value}px`,
        width: `${width.value}px`,
        height: `${height.value}px`,
        borderRadius: borderRadius.value.map((radius) => `${radius}px`).join(" ")
      };
      if (color) {
        waveStyle["--wave-color"] = color.value;
      }
      return createVNode(Transition, {
        "appear": true,
        "name": "wave-motion",
        "appearFromClass": "wave-motion-appear",
        "appearActiveClass": "wave-motion-appear",
        "appearToClass": "wave-motion-appear wave-motion-appear-active"
      }, {
        default: () => [createVNode("div", {
          "ref": divRef,
          "class": props.className,
          "style": waveStyle,
          "onTransitionend": onTransitionend
        }, null)]
      });
    };
  }
});
function showWaveEffect(node2, className) {
  const holder = document.createElement("div");
  holder.style.position = "absolute";
  holder.style.left = `0px`;
  holder.style.top = `0px`;
  node2 === null || node2 === void 0 ? void 0 : node2.insertBefore(holder, node2 === null || node2 === void 0 ? void 0 : node2.firstChild);
  render(createVNode(WaveEffect, {
    "target": node2,
    "className": className
  }, null), holder);
  return () => {
    render(null, holder);
    if (holder.parentElement) {
      holder.parentElement.removeChild(holder);
    }
  };
}
function useWave(className, wave) {
  const instance = getCurrentInstance();
  let stopWave;
  function showWave() {
    var _a;
    const node2 = findDOMNode(instance);
    stopWave === null || stopWave === void 0 ? void 0 : stopWave();
    if (((_a = wave === null || wave === void 0 ? void 0 : wave.value) === null || _a === void 0 ? void 0 : _a.disabled) || !node2) {
      return;
    }
    stopWave = showWaveEffect(node2, className.value);
  }
  onBeforeUnmount(() => {
    stopWave === null || stopWave === void 0 ? void 0 : stopWave();
  });
  return showWave;
}
const Wave = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Wave",
  props: {
    disabled: Boolean
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const instance = getCurrentInstance();
    const {
      prefixCls,
      wave
    } = useConfigInject("wave", props);
    const [, hashId] = useStyle$2(prefixCls);
    const showWave = useWave(computed(() => classNames(prefixCls.value, hashId.value)), wave);
    let onClick;
    const clear = () => {
      const node2 = findDOMNode(instance);
      node2.removeEventListener("click", onClick, true);
    };
    onMounted(() => {
      watch(() => props.disabled, () => {
        clear();
        nextTick(() => {
          const node2 = findDOMNode(instance);
          node2 === null || node2 === void 0 ? void 0 : node2.removeEventListener("click", onClick, true);
          if (!node2 || node2.nodeType !== 1 || props.disabled) {
            return;
          }
          onClick = (e2) => {
            if (e2.target.tagName === "INPUT" || !isVisible(e2.target) || // No need wave
            !node2.getAttribute || node2.getAttribute("disabled") || node2.disabled || node2.className.includes("disabled") || node2.className.includes("-leave")) {
              return;
            }
            showWave();
          };
          node2.addEventListener("click", onClick, true);
        });
      }, {
        immediate: true,
        flush: "post"
      });
    });
    onBeforeUnmount(() => {
      clear();
    });
    return () => {
      var _a;
      const children = (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)[0];
      return children;
    };
  }
});
const genPlaceholderStyle = (color) => ({
  // Firefox
  "&::-moz-placeholder": {
    opacity: 1
  },
  "&::placeholder": {
    color,
    userSelect: "none"
    // https://github.com/ant-design/ant-design/pull/32639
  },
  "&:placeholder-shown": {
    textOverflow: "ellipsis"
  }
});
const genHoverStyle = (token2) => ({
  borderColor: token2.inputBorderHoverColor,
  borderInlineEndWidth: token2.lineWidth
});
const genActiveStyle = (token2) => ({
  borderColor: token2.inputBorderHoverColor,
  boxShadow: `0 0 0 ${token2.controlOutlineWidth}px ${token2.controlOutline}`,
  borderInlineEndWidth: token2.lineWidth,
  outline: 0
});
const genDisabledStyle = (token2) => ({
  color: token2.colorTextDisabled,
  backgroundColor: token2.colorBgContainerDisabled,
  borderColor: token2.colorBorder,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "&:hover": _extends({}, genHoverStyle(merge(token2, {
    inputBorderHoverColor: token2.colorBorder
  })))
});
const genInputLargeStyle = (token2) => {
  const {
    inputPaddingVerticalLG,
    fontSizeLG,
    lineHeightLG,
    borderRadiusLG,
    inputPaddingHorizontalLG
  } = token2;
  return {
    padding: `${inputPaddingVerticalLG}px ${inputPaddingHorizontalLG}px`,
    fontSize: fontSizeLG,
    lineHeight: lineHeightLG,
    borderRadius: borderRadiusLG
  };
};
const genInputSmallStyle = (token2) => ({
  padding: `${token2.inputPaddingVerticalSM}px ${token2.controlPaddingHorizontalSM - 1}px`,
  borderRadius: token2.borderRadiusSM
});
const genStatusStyle = (token2, parentCls) => {
  const {
    componentCls,
    colorError,
    colorWarning,
    colorErrorOutline,
    colorWarningOutline,
    colorErrorBorderHover,
    colorWarningBorderHover
  } = token2;
  return {
    [`&-status-error:not(${parentCls}-disabled):not(${parentCls}-borderless)${parentCls}`]: {
      borderColor: colorError,
      "&:hover": {
        borderColor: colorErrorBorderHover
      },
      "&:focus, &-focused": _extends({}, genActiveStyle(merge(token2, {
        inputBorderActiveColor: colorError,
        inputBorderHoverColor: colorError,
        controlOutline: colorErrorOutline
      }))),
      [`${componentCls}-prefix`]: {
        color: colorError
      }
    },
    [`&-status-warning:not(${parentCls}-disabled):not(${parentCls}-borderless)${parentCls}`]: {
      borderColor: colorWarning,
      "&:hover": {
        borderColor: colorWarningBorderHover
      },
      "&:focus, &-focused": _extends({}, genActiveStyle(merge(token2, {
        inputBorderActiveColor: colorWarning,
        inputBorderHoverColor: colorWarning,
        controlOutline: colorWarningOutline
      }))),
      [`${componentCls}-prefix`]: {
        color: colorWarning
      }
    }
  };
};
const genBasicInputStyle = (token2) => _extends(_extends({
  position: "relative",
  display: "inline-block",
  width: "100%",
  minWidth: 0,
  padding: `${token2.inputPaddingVertical}px ${token2.inputPaddingHorizontal}px`,
  color: token2.colorText,
  fontSize: token2.fontSize,
  lineHeight: token2.lineHeight,
  backgroundColor: token2.colorBgContainer,
  backgroundImage: "none",
  borderWidth: token2.lineWidth,
  borderStyle: token2.lineType,
  borderColor: token2.colorBorder,
  borderRadius: token2.borderRadius,
  transition: `all ${token2.motionDurationMid}`
}, genPlaceholderStyle(token2.colorTextPlaceholder)), {
  "&:hover": _extends({}, genHoverStyle(token2)),
  "&:focus, &-focused": _extends({}, genActiveStyle(token2)),
  "&-disabled, &[disabled]": _extends({}, genDisabledStyle(token2)),
  "&-borderless": {
    "&, &:hover, &:focus, &-focused, &-disabled, &[disabled]": {
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none"
    }
  },
  // Reset height for `textarea`s
  "textarea&": {
    maxWidth: "100%",
    height: "auto",
    minHeight: token2.controlHeight,
    lineHeight: token2.lineHeight,
    verticalAlign: "bottom",
    transition: `all ${token2.motionDurationSlow}, height 0s`,
    resize: "vertical"
  },
  // Size
  "&-lg": _extends({}, genInputLargeStyle(token2)),
  "&-sm": _extends({}, genInputSmallStyle(token2)),
  // RTL
  "&-rtl": {
    direction: "rtl"
  },
  "&-textarea-rtl": {
    direction: "rtl"
  }
});
const genInputGroupStyle = (token2) => {
  const {
    componentCls,
    antCls
  } = token2;
  return {
    position: "relative",
    display: "table",
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    // Undo padding and float of grid classes
    [`&[class*='col-']`]: {
      paddingInlineEnd: token2.paddingXS,
      "&:last-child": {
        paddingInlineEnd: 0
      }
    },
    // Sizing options
    [`&-lg ${componentCls}, &-lg > ${componentCls}-group-addon`]: _extends({}, genInputLargeStyle(token2)),
    [`&-sm ${componentCls}, &-sm > ${componentCls}-group-addon`]: _extends({}, genInputSmallStyle(token2)),
    [`> ${componentCls}`]: {
      display: "table-cell",
      "&:not(:first-child):not(:last-child)": {
        borderRadius: 0
      }
    },
    [`${componentCls}-group`]: {
      [`&-addon, &-wrap`]: {
        display: "table-cell",
        width: 1,
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        "&:not(:first-child):not(:last-child)": {
          borderRadius: 0
        }
      },
      "&-wrap > *": {
        display: "block !important"
      },
      "&-addon": {
        position: "relative",
        padding: `0 ${token2.inputPaddingHorizontal}px`,
        color: token2.colorText,
        fontWeight: "normal",
        fontSize: token2.fontSize,
        textAlign: "center",
        backgroundColor: token2.colorFillAlter,
        border: `${token2.lineWidth}px ${token2.lineType} ${token2.colorBorder}`,
        borderRadius: token2.borderRadius,
        transition: `all ${token2.motionDurationSlow}`,
        lineHeight: 1,
        // Reset Select's style in addon
        [`${antCls}-select`]: {
          margin: `-${token2.inputPaddingVertical + 1}px -${token2.inputPaddingHorizontal}px`,
          [`&${antCls}-select-single:not(${antCls}-select-customize-input)`]: {
            [`${antCls}-select-selector`]: {
              backgroundColor: "inherit",
              border: `${token2.lineWidth}px ${token2.lineType} transparent`,
              boxShadow: "none"
            }
          },
          "&-open, &-focused": {
            [`${antCls}-select-selector`]: {
              color: token2.colorPrimary
            }
          }
        },
        // https://github.com/ant-design/ant-design/issues/31333
        [`${antCls}-cascader-picker`]: {
          margin: `-9px -${token2.inputPaddingHorizontal}px`,
          backgroundColor: "transparent",
          [`${antCls}-cascader-input`]: {
            textAlign: "start",
            border: 0,
            boxShadow: "none"
          }
        }
      },
      "&-addon:first-child": {
        borderInlineEnd: 0
      },
      "&-addon:last-child": {
        borderInlineStart: 0
      }
    },
    [`${componentCls}`]: {
      float: "inline-start",
      width: "100%",
      marginBottom: 0,
      textAlign: "inherit",
      "&:focus": {
        zIndex: 1,
        borderInlineEndWidth: 1
      },
      "&:hover": {
        zIndex: 1,
        borderInlineEndWidth: 1,
        [`${componentCls}-search-with-button &`]: {
          zIndex: 0
        }
      }
    },
    // Reset rounded corners
    [`> ${componentCls}:first-child, ${componentCls}-group-addon:first-child`]: {
      borderStartEndRadius: 0,
      borderEndEndRadius: 0,
      // Reset Select's style in addon
      [`${antCls}-select ${antCls}-select-selector`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${componentCls}-affix-wrapper`]: {
      [`&:not(:first-child) ${componentCls}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      },
      [`&:not(:last-child) ${componentCls}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${componentCls}:last-child, ${componentCls}-group-addon:last-child`]: {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
      // Reset Select's style in addon
      [`${antCls}-select ${antCls}-select-selector`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`${componentCls}-affix-wrapper`]: {
      "&:not(:last-child)": {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        [`${componentCls}-search &`]: {
          borderStartStartRadius: token2.borderRadius,
          borderEndStartRadius: token2.borderRadius
        }
      },
      [`&:not(:first-child), ${componentCls}-search &:not(:first-child)`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&${componentCls}-group-compact`]: _extends(_extends({
      display: "block"
    }, clearFix()), {
      [`${componentCls}-group-addon, ${componentCls}-group-wrap, > ${componentCls}`]: {
        "&:not(:first-child):not(:last-child)": {
          borderInlineEndWidth: token2.lineWidth,
          "&:hover": {
            zIndex: 1
          },
          "&:focus": {
            zIndex: 1
          }
        }
      },
      "& > *": {
        display: "inline-block",
        float: "none",
        verticalAlign: "top",
        borderRadius: 0
      },
      [`& > ${componentCls}-affix-wrapper`]: {
        display: "inline-flex"
      },
      [`& > ${antCls}-picker-range`]: {
        display: "inline-flex"
      },
      "& > *:not(:last-child)": {
        marginInlineEnd: -token2.lineWidth,
        borderInlineEndWidth: token2.lineWidth
      },
      // Undo float for .ant-input-group .ant-input
      [`${componentCls}`]: {
        float: "none"
      },
      // reset border for Select, DatePicker, AutoComplete, Cascader, Mention, TimePicker, Input
      [`& > ${antCls}-select > ${antCls}-select-selector,
      & > ${antCls}-select-auto-complete ${componentCls},
      & > ${antCls}-cascader-picker ${componentCls},
      & > ${componentCls}-group-wrapper ${componentCls}`]: {
        borderInlineEndWidth: token2.lineWidth,
        borderRadius: 0,
        "&:hover": {
          zIndex: 1
        },
        "&:focus": {
          zIndex: 1
        }
      },
      [`& > ${antCls}-select-focused`]: {
        zIndex: 1
      },
      // update z-index for arrow icon
      [`& > ${antCls}-select > ${antCls}-select-arrow`]: {
        zIndex: 1
        // https://github.com/ant-design/ant-design/issues/20371
      },
      [`& > *:first-child,
      & > ${antCls}-select:first-child > ${antCls}-select-selector,
      & > ${antCls}-select-auto-complete:first-child ${componentCls},
      & > ${antCls}-cascader-picker:first-child ${componentCls}`]: {
        borderStartStartRadius: token2.borderRadius,
        borderEndStartRadius: token2.borderRadius
      },
      [`& > *:last-child,
      & > ${antCls}-select:last-child > ${antCls}-select-selector,
      & > ${antCls}-cascader-picker:last-child ${componentCls},
      & > ${antCls}-cascader-picker-focused:last-child ${componentCls}`]: {
        borderInlineEndWidth: token2.lineWidth,
        borderStartEndRadius: token2.borderRadius,
        borderEndEndRadius: token2.borderRadius
      },
      // https://github.com/ant-design/ant-design/issues/12493
      [`& > ${antCls}-select-auto-complete ${componentCls}`]: {
        verticalAlign: "top"
      },
      [`${componentCls}-group-wrapper + ${componentCls}-group-wrapper`]: {
        marginInlineStart: -token2.lineWidth,
        [`${componentCls}-affix-wrapper`]: {
          borderRadius: 0
        }
      },
      [`${componentCls}-group-wrapper:not(:last-child)`]: {
        [`&${componentCls}-search > ${componentCls}-group`]: {
          [`& > ${componentCls}-group-addon > ${componentCls}-search-button`]: {
            borderRadius: 0
          },
          [`& > ${componentCls}`]: {
            borderStartStartRadius: token2.borderRadius,
            borderStartEndRadius: 0,
            borderEndEndRadius: 0,
            borderEndStartRadius: token2.borderRadius
          }
        }
      }
    }),
    [`&&-sm ${antCls}-btn`]: {
      fontSize: token2.fontSizeSM,
      height: token2.controlHeightSM,
      lineHeight: "normal"
    },
    [`&&-lg ${antCls}-btn`]: {
      fontSize: token2.fontSizeLG,
      height: token2.controlHeightLG,
      lineHeight: "normal"
    },
    // Fix https://github.com/ant-design/ant-design/issues/5754
    [`&&-lg ${antCls}-select-single ${antCls}-select-selector`]: {
      height: `${token2.controlHeightLG}px`,
      [`${antCls}-select-selection-item, ${antCls}-select-selection-placeholder`]: {
        // -2 is for the border size & override default
        lineHeight: `${token2.controlHeightLG - 2}px`
      },
      [`${antCls}-select-selection-search-input`]: {
        height: `${token2.controlHeightLG}px`
      }
    },
    [`&&-sm ${antCls}-select-single ${antCls}-select-selector`]: {
      height: `${token2.controlHeightSM}px`,
      [`${antCls}-select-selection-item, ${antCls}-select-selection-placeholder`]: {
        // -2 is for the border size & override default
        lineHeight: `${token2.controlHeightSM - 2}px`
      },
      [`${antCls}-select-selection-search-input`]: {
        height: `${token2.controlHeightSM}px`
      }
    }
  };
};
const genInputStyle = (token2) => {
  const {
    componentCls,
    controlHeightSM,
    lineWidth
  } = token2;
  const FIXED_CHROME_COLOR_HEIGHT = 16;
  const colorSmallPadding = (controlHeightSM - lineWidth * 2 - FIXED_CHROME_COLOR_HEIGHT) / 2;
  return {
    [componentCls]: _extends(_extends(_extends(_extends({}, resetComponent(token2)), genBasicInputStyle(token2)), genStatusStyle(token2, componentCls)), {
      '&[type="color"]': {
        height: token2.controlHeight,
        [`&${componentCls}-lg`]: {
          height: token2.controlHeightLG
        },
        [`&${componentCls}-sm`]: {
          height: controlHeightSM,
          paddingTop: colorSmallPadding,
          paddingBottom: colorSmallPadding
        }
      }
    })
  };
};
const genAllowClearStyle = (token2) => {
  const {
    componentCls
  } = token2;
  return {
    // ========================= Input =========================
    [`${componentCls}-clear-icon`]: {
      margin: 0,
      color: token2.colorTextQuaternary,
      fontSize: token2.fontSizeIcon,
      verticalAlign: -1,
      // https://github.com/ant-design/ant-design/pull/18151
      // https://codesandbox.io/s/wizardly-sun-u10br
      cursor: "pointer",
      transition: `color ${token2.motionDurationSlow}`,
      "&:hover": {
        color: token2.colorTextTertiary
      },
      "&:active": {
        color: token2.colorText
      },
      "&-hidden": {
        visibility: "hidden"
      },
      "&-has-suffix": {
        margin: `0 ${token2.inputAffixPadding}px`
      }
    },
    // ======================= TextArea ========================
    "&-textarea-with-clear-btn": {
      padding: "0 !important",
      border: "0 !important",
      [`${componentCls}-clear-icon`]: {
        position: "absolute",
        insetBlockStart: token2.paddingXS,
        insetInlineEnd: token2.paddingXS,
        zIndex: 1
      }
    }
  };
};
const genAffixStyle = (token2) => {
  const {
    componentCls,
    inputAffixPadding,
    colorTextDescription,
    motionDurationSlow,
    colorIcon,
    colorIconHover,
    iconCls
  } = token2;
  return {
    [`${componentCls}-affix-wrapper`]: _extends(_extends(_extends(_extends(_extends({}, genBasicInputStyle(token2)), {
      display: "inline-flex",
      [`&:not(${componentCls}-affix-wrapper-disabled):hover`]: _extends(_extends({}, genHoverStyle(token2)), {
        zIndex: 1,
        [`${componentCls}-search-with-button &`]: {
          zIndex: 0
        }
      }),
      "&-focused, &:focus": {
        zIndex: 1
      },
      "&-disabled": {
        [`${componentCls}[disabled]`]: {
          background: "transparent"
        }
      },
      [`> input${componentCls}`]: {
        padding: 0,
        fontSize: "inherit",
        border: "none",
        borderRadius: 0,
        outline: "none",
        "&:focus": {
          boxShadow: "none !important"
        }
      },
      "&::before": {
        width: 0,
        visibility: "hidden",
        content: '"\\a0"'
      },
      [`${componentCls}`]: {
        "&-prefix, &-suffix": {
          display: "flex",
          flex: "none",
          alignItems: "center",
          "> *:not(:last-child)": {
            marginInlineEnd: token2.paddingXS
          }
        },
        "&-show-count-suffix": {
          color: colorTextDescription
        },
        "&-show-count-has-suffix": {
          marginInlineEnd: token2.paddingXXS
        },
        "&-prefix": {
          marginInlineEnd: inputAffixPadding
        },
        "&-suffix": {
          marginInlineStart: inputAffixPadding
        }
      }
    }), genAllowClearStyle(token2)), {
      // password
      [`${iconCls}${componentCls}-password-icon`]: {
        color: colorIcon,
        cursor: "pointer",
        transition: `all ${motionDurationSlow}`,
        "&:hover": {
          color: colorIconHover
        }
      }
    }), genStatusStyle(token2, `${componentCls}-affix-wrapper`))
  };
};
const genGroupStyle = (token2) => {
  const {
    componentCls,
    colorError,
    colorSuccess,
    borderRadiusLG,
    borderRadiusSM
  } = token2;
  return {
    [`${componentCls}-group`]: _extends(_extends(_extends({}, resetComponent(token2)), genInputGroupStyle(token2)), {
      "&-rtl": {
        direction: "rtl"
      },
      "&-wrapper": {
        display: "inline-block",
        width: "100%",
        textAlign: "start",
        verticalAlign: "top",
        "&-rtl": {
          direction: "rtl"
        },
        // Size
        "&-lg": {
          [`${componentCls}-group-addon`]: {
            borderRadius: borderRadiusLG
          }
        },
        "&-sm": {
          [`${componentCls}-group-addon`]: {
            borderRadius: borderRadiusSM
          }
        },
        // Status
        "&-status-error": {
          [`${componentCls}-group-addon`]: {
            color: colorError,
            borderColor: colorError
          }
        },
        "&-status-warning": {
          [`${componentCls}-group-addon:last-child`]: {
            color: colorSuccess,
            borderColor: colorSuccess
          }
        }
      }
    })
  };
};
const genSearchInputStyle = (token2) => {
  const {
    componentCls,
    antCls
  } = token2;
  const searchPrefixCls = `${componentCls}-search`;
  return {
    [searchPrefixCls]: {
      [`${componentCls}`]: {
        "&:hover, &:focus": {
          borderColor: token2.colorPrimaryHover,
          [`+ ${componentCls}-group-addon ${searchPrefixCls}-button:not(${antCls}-btn-primary)`]: {
            borderInlineStartColor: token2.colorPrimaryHover
          }
        }
      },
      [`${componentCls}-affix-wrapper`]: {
        borderRadius: 0
      },
      // fix slight height diff in Firefox:
      // https://ant.design/components/auto-complete-cn/#components-auto-complete-demo-certain-category
      [`${componentCls}-lg`]: {
        lineHeight: token2.lineHeightLG - 2e-4
      },
      [`> ${componentCls}-group`]: {
        [`> ${componentCls}-group-addon:last-child`]: {
          insetInlineStart: -1,
          padding: 0,
          border: 0,
          [`${searchPrefixCls}-button`]: {
            paddingTop: 0,
            paddingBottom: 0,
            borderStartStartRadius: 0,
            borderStartEndRadius: token2.borderRadius,
            borderEndEndRadius: token2.borderRadius,
            borderEndStartRadius: 0
          },
          [`${searchPrefixCls}-button:not(${antCls}-btn-primary)`]: {
            color: token2.colorTextDescription,
            "&:hover": {
              color: token2.colorPrimaryHover
            },
            "&:active": {
              color: token2.colorPrimaryActive
            },
            [`&${antCls}-btn-loading::before`]: {
              insetInlineStart: 0,
              insetInlineEnd: 0,
              insetBlockStart: 0,
              insetBlockEnd: 0
            }
          }
        }
      },
      [`${searchPrefixCls}-button`]: {
        height: token2.controlHeight,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      [`&-large ${searchPrefixCls}-button`]: {
        height: token2.controlHeightLG
      },
      [`&-small ${searchPrefixCls}-button`]: {
        height: token2.controlHeightSM
      },
      "&-rtl": {
        direction: "rtl"
      },
      // ===================== Compact Item Customized Styles =====================
      [`&${componentCls}-compact-item`]: {
        [`&:not(${componentCls}-compact-last-item)`]: {
          [`${componentCls}-group-addon`]: {
            [`${componentCls}-search-button`]: {
              marginInlineEnd: -token2.lineWidth,
              borderRadius: 0
            }
          }
        },
        [`&:not(${componentCls}-compact-first-item)`]: {
          [`${componentCls},${componentCls}-affix-wrapper`]: {
            borderRadius: 0
          }
        },
        [`> ${componentCls}-group-addon ${componentCls}-search-button,
        > ${componentCls},
        ${componentCls}-affix-wrapper`]: {
          "&:hover,&:focus,&:active": {
            zIndex: 2
          }
        },
        [`> ${componentCls}-affix-wrapper-focused`]: {
          zIndex: 2
        }
      }
    }
  };
};
function initInputToken(token2) {
  return merge(token2, {
    inputAffixPadding: token2.paddingXXS,
    inputPaddingVertical: Math.max(Math.round((token2.controlHeight - token2.fontSize * token2.lineHeight) / 2 * 10) / 10 - token2.lineWidth, 3),
    inputPaddingVerticalLG: Math.ceil((token2.controlHeightLG - token2.fontSizeLG * token2.lineHeightLG) / 2 * 10) / 10 - token2.lineWidth,
    inputPaddingVerticalSM: Math.max(Math.round((token2.controlHeightSM - token2.fontSize * token2.lineHeight) / 2 * 10) / 10 - token2.lineWidth, 0),
    inputPaddingHorizontal: token2.paddingSM - token2.lineWidth,
    inputPaddingHorizontalSM: token2.paddingXS - token2.lineWidth,
    inputPaddingHorizontalLG: token2.controlPaddingHorizontal - token2.lineWidth,
    inputBorderHoverColor: token2.colorPrimaryHover,
    inputBorderActiveColor: token2.colorPrimaryHover
  });
}
const genTextAreaStyle = (token2) => {
  const {
    componentCls,
    inputPaddingHorizontal,
    paddingLG
  } = token2;
  const textareaPrefixCls = `${componentCls}-textarea`;
  return {
    [textareaPrefixCls]: {
      position: "relative",
      [`${textareaPrefixCls}-suffix`]: {
        position: "absolute",
        top: 0,
        insetInlineEnd: inputPaddingHorizontal,
        bottom: 0,
        zIndex: 1,
        display: "inline-flex",
        alignItems: "center",
        margin: "auto"
      },
      [`&-status-error,
        &-status-warning,
        &-status-success,
        &-status-validating`]: {
        [`&${textareaPrefixCls}-has-feedback`]: {
          [`${componentCls}`]: {
            paddingInlineEnd: paddingLG
          }
        }
      },
      "&-show-count": {
        // https://github.com/ant-design/ant-design/issues/33049
        [`> ${componentCls}`]: {
          height: "100%"
        },
        "&::after": {
          color: token2.colorTextDescription,
          whiteSpace: "nowrap",
          content: "attr(data-count)",
          pointerEvents: "none",
          float: "right"
        }
      },
      "&-rtl": {
        "&::after": {
          float: "left"
        }
      }
    }
  };
};
const useStyle$1 = genComponentStyleHook("Input", (token2) => {
  const inputToken = initInputToken(token2);
  return [
    genInputStyle(inputToken),
    genTextAreaStyle(inputToken),
    genAffixStyle(inputToken),
    genGroupStyle(inputToken),
    genSearchInputStyle(inputToken),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    genCompactItemStyle(inputToken)
  ];
});
const canUseDocElement = () => canUseDom() && window.document.documentElement;
const isStyleNameSupport = (styleName) => {
  if (canUseDom() && window.document.documentElement) {
    const styleNameList = Array.isArray(styleName) ? styleName : [styleName];
    const {
      documentElement
    } = window.document;
    return styleNameList.some((name) => name in documentElement.style);
  }
  return false;
};
const isStyleValueSupport = (styleName, value) => {
  if (!isStyleNameSupport(styleName)) {
    return false;
  }
  const ele = document.createElement("div");
  const origin = ele.style[styleName];
  ele.style[styleName] = value;
  return ele.style[styleName] !== origin;
};
function isStyleSupport(styleName, styleValue) {
  if (!Array.isArray(styleName) && styleValue !== void 0) {
    return isStyleValueSupport(styleName, styleValue);
  }
  return isStyleNameSupport(styleName);
}
let flexGapSupported;
const detectFlexGapSupported = () => {
  if (!canUseDocElement()) {
    return false;
  }
  if (flexGapSupported !== void 0) {
    return flexGapSupported;
  }
  const flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";
  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));
  document.body.appendChild(flex);
  flexGapSupported = flex.scrollHeight === 1;
  document.body.removeChild(flex);
  return flexGapSupported;
};
const isValid$1 = (value) => {
  return value !== void 0 && value !== null && (Array.isArray(value) ? filterEmpty(value).length : true);
};
function hasPrefixSuffix(propsAndSlots) {
  return isValid$1(propsAndSlots.prefix) || isValid$1(propsAndSlots.suffix) || isValid$1(propsAndSlots.allowClear);
}
function hasAddon$1(propsAndSlots) {
  return isValid$1(propsAndSlots.addonBefore) || isValid$1(propsAndSlots.addonAfter);
}
function fixControlledValue(value) {
  if (typeof value === "undefined" || value === null) {
    return "";
  }
  return String(value);
}
function resolveOnChange(target, e2, onChange, targetValue) {
  if (!onChange) {
    return;
  }
  const event = e2;
  if (e2.type === "click") {
    Object.defineProperty(event, "target", {
      writable: true
    });
    Object.defineProperty(event, "currentTarget", {
      writable: true
    });
    const currentTarget = target.cloneNode(true);
    event.target = currentTarget;
    event.currentTarget = currentTarget;
    currentTarget.value = "";
    onChange(event);
    return;
  }
  if (targetValue !== void 0) {
    Object.defineProperty(event, "target", {
      writable: true
    });
    Object.defineProperty(event, "currentTarget", {
      writable: true
    });
    event.target = target;
    event.currentTarget = target;
    target.value = targetValue;
    onChange(event);
    return;
  }
  onChange(event);
}
function triggerFocus(element, option) {
  if (!element)
    return;
  element.focus(option);
  const {
    cursor
  } = option || {};
  if (cursor) {
    const len = element.value.length;
    switch (cursor) {
      case "start":
        element.setSelectionRange(0, 0);
        break;
      case "end":
        element.setSelectionRange(len, len);
        break;
      default:
        element.setSelectionRange(0, len);
    }
  }
}
const commonInputProps = () => {
  return {
    addonBefore: PropTypes$1.any,
    addonAfter: PropTypes$1.any,
    prefix: PropTypes$1.any,
    suffix: PropTypes$1.any,
    clearIcon: PropTypes$1.any,
    affixWrapperClassName: String,
    groupClassName: String,
    wrapperClassName: String,
    inputClassName: String,
    allowClear: {
      type: Boolean,
      default: void 0
    }
  };
};
const baseInputProps = () => {
  return _extends(_extends({}, commonInputProps()), {
    value: {
      type: [String, Number, Symbol],
      default: void 0
    },
    defaultValue: {
      type: [String, Number, Symbol],
      default: void 0
    },
    inputElement: PropTypes$1.any,
    prefixCls: String,
    disabled: {
      type: Boolean,
      default: void 0
    },
    focused: {
      type: Boolean,
      default: void 0
    },
    triggerFocus: Function,
    readonly: {
      type: Boolean,
      default: void 0
    },
    handleReset: Function,
    hidden: {
      type: Boolean,
      default: void 0
    }
  });
};
const inputProps$2 = () => _extends(_extends({}, baseInputProps()), {
  id: String,
  placeholder: {
    type: [String, Number]
  },
  autocomplete: String,
  type: stringType("text"),
  name: String,
  size: {
    type: String
  },
  autofocus: {
    type: Boolean,
    default: void 0
  },
  lazy: {
    type: Boolean,
    default: true
  },
  maxlength: Number,
  loading: {
    type: Boolean,
    default: void 0
  },
  bordered: {
    type: Boolean,
    default: void 0
  },
  showCount: {
    type: [Boolean, Object]
  },
  htmlSize: Number,
  onPressEnter: Function,
  onKeydown: Function,
  onKeyup: Function,
  onFocus: Function,
  onBlur: Function,
  onChange: Function,
  onInput: Function,
  "onUpdate:value": Function,
  onCompositionstart: Function,
  onCompositionend: Function,
  valueModifiers: Object,
  hidden: {
    type: Boolean,
    default: void 0
  },
  status: String
});
const inputProps = () => {
  return omit(inputProps$2(), ["wrapperClassName", "groupClassName", "inputClassName", "affixWrapperClassName"]);
};
const inputProps$1 = inputProps;
const textAreaProps = () => _extends(_extends({}, omit(inputProps(), ["prefix", "addonBefore", "addonAfter", "suffix"])), {
  rows: Number,
  autosize: {
    type: [Boolean, Object],
    default: void 0
  },
  autoSize: {
    type: [Boolean, Object],
    default: void 0
  },
  onResize: {
    type: Function
  },
  onCompositionstart: eventType(),
  onCompositionend: eventType(),
  valueModifiers: Object
});
const isValid = (value) => {
  return value !== void 0 && value !== null && (Array.isArray(value) ? filterEmpty(value).length : true);
};
function hasAddon(propsAndSlots) {
  return isValid(propsAndSlots.addonBefore) || isValid(propsAndSlots.addonAfter);
}
const ClearableInputType = ["text", "input"];
const ClearableLabeledInput = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ClearableLabeledInput",
  inheritAttrs: false,
  props: {
    prefixCls: String,
    inputType: PropTypes$1.oneOf(tuple("text", "input")),
    value: anyType(),
    defaultValue: anyType(),
    allowClear: {
      type: Boolean,
      default: void 0
    },
    element: anyType(),
    handleReset: Function,
    disabled: {
      type: Boolean,
      default: void 0
    },
    direction: {
      type: String
    },
    size: {
      type: String
    },
    suffix: anyType(),
    prefix: anyType(),
    addonBefore: anyType(),
    addonAfter: anyType(),
    readonly: {
      type: Boolean,
      default: void 0
    },
    focused: {
      type: Boolean,
      default: void 0
    },
    bordered: {
      type: Boolean,
      default: true
    },
    triggerFocus: {
      type: Function
    },
    hidden: Boolean,
    status: String,
    hashId: String
  },
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const statusContext = FormItemInputContext.useInject();
    const renderClearIcon = (prefixCls) => {
      const {
        value,
        disabled,
        readonly,
        handleReset,
        suffix = slots.suffix
      } = props;
      const needClear = !disabled && !readonly && value;
      const className = `${prefixCls}-clear-icon`;
      return createVNode(CloseCircleFilled$1, {
        "onClick": handleReset,
        "onMousedown": (e2) => e2.preventDefault(),
        "class": classNames({
          [`${className}-hidden`]: !needClear,
          [`${className}-has-suffix`]: !!suffix
        }, className),
        "role": "button"
      }, null);
    };
    const renderTextAreaWithClearIcon = (prefixCls, element) => {
      const {
        value,
        allowClear,
        direction,
        bordered,
        hidden,
        status: customStatus,
        addonAfter = slots.addonAfter,
        addonBefore = slots.addonBefore,
        hashId
      } = props;
      const {
        status: contextStatus,
        hasFeedback
      } = statusContext;
      if (!allowClear) {
        return cloneElement(element, {
          value,
          disabled: props.disabled
        });
      }
      const affixWrapperCls = classNames(`${prefixCls}-affix-wrapper`, `${prefixCls}-affix-wrapper-textarea-with-clear-btn`, getStatusClassNames(`${prefixCls}-affix-wrapper`, getMergedStatus(contextStatus, customStatus), hasFeedback), {
        [`${prefixCls}-affix-wrapper-rtl`]: direction === "rtl",
        [`${prefixCls}-affix-wrapper-borderless`]: !bordered,
        // className will go to addon wrapper
        [`${attrs.class}`]: !hasAddon({
          addonAfter,
          addonBefore
        }) && attrs.class
      }, hashId);
      return createVNode("span", {
        "class": affixWrapperCls,
        "style": attrs.style,
        "hidden": hidden
      }, [cloneElement(element, {
        style: null,
        value,
        disabled: props.disabled
      }), renderClearIcon(prefixCls)]);
    };
    return () => {
      var _a;
      const {
        prefixCls,
        inputType,
        element = (_a = slots.element) === null || _a === void 0 ? void 0 : _a.call(slots)
      } = props;
      if (inputType === ClearableInputType[0]) {
        return renderTextAreaWithClearIcon(prefixCls, element);
      }
      return null;
    };
  }
});
const HIDDEN_TEXTAREA_STYLE = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`;
const SIZING_STYLE = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break", "white-space"];
const computedStyleCache = {};
let hiddenTextarea;
function calculateNodeStyling(node2) {
  let useCache = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  const nodeRef = node2.getAttribute("id") || node2.getAttribute("data-reactid") || node2.getAttribute("name");
  if (useCache && computedStyleCache[nodeRef]) {
    return computedStyleCache[nodeRef];
  }
  const style = window.getComputedStyle(node2);
  const boxSizing = style.getPropertyValue("box-sizing") || style.getPropertyValue("-moz-box-sizing") || style.getPropertyValue("-webkit-box-sizing");
  const paddingSize = parseFloat(style.getPropertyValue("padding-bottom")) + parseFloat(style.getPropertyValue("padding-top"));
  const borderSize = parseFloat(style.getPropertyValue("border-bottom-width")) + parseFloat(style.getPropertyValue("border-top-width"));
  const sizingStyle = SIZING_STYLE.map((name) => `${name}:${style.getPropertyValue(name)}`).join(";");
  const nodeInfo = {
    sizingStyle,
    paddingSize,
    borderSize,
    boxSizing
  };
  if (useCache && nodeRef) {
    computedStyleCache[nodeRef] = nodeInfo;
  }
  return nodeInfo;
}
function calculateAutoSizeStyle(uiTextNode) {
  let useCache = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  let minRows = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
  let maxRows = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement("textarea");
    hiddenTextarea.setAttribute("tab-index", "-1");
    hiddenTextarea.setAttribute("aria-hidden", "true");
    document.body.appendChild(hiddenTextarea);
  }
  if (uiTextNode.getAttribute("wrap")) {
    hiddenTextarea.setAttribute("wrap", uiTextNode.getAttribute("wrap"));
  } else {
    hiddenTextarea.removeAttribute("wrap");
  }
  const {
    paddingSize,
    borderSize,
    boxSizing,
    sizingStyle
  } = calculateNodeStyling(uiTextNode, useCache);
  hiddenTextarea.setAttribute("style", `${sizingStyle};${HIDDEN_TEXTAREA_STYLE}`);
  hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || "";
  let minHeight = void 0;
  let maxHeight = void 0;
  let overflowY;
  let height = hiddenTextarea.scrollHeight;
  if (boxSizing === "border-box") {
    height += borderSize;
  } else if (boxSizing === "content-box") {
    height -= paddingSize;
  }
  if (minRows !== null || maxRows !== null) {
    hiddenTextarea.value = " ";
    const singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
    if (minRows !== null) {
      minHeight = singleRowHeight * minRows;
      if (boxSizing === "border-box") {
        minHeight = minHeight + paddingSize + borderSize;
      }
      height = Math.max(minHeight, height);
    }
    if (maxRows !== null) {
      maxHeight = singleRowHeight * maxRows;
      if (boxSizing === "border-box") {
        maxHeight = maxHeight + paddingSize + borderSize;
      }
      overflowY = height > maxHeight ? "" : "hidden";
      height = Math.min(maxHeight, height);
    }
  }
  const style = {
    height: `${height}px`,
    overflowY,
    resize: "none"
  };
  if (minHeight) {
    style.minHeight = `${minHeight}px`;
  }
  if (maxHeight) {
    style.maxHeight = `${maxHeight}px`;
  }
  return style;
}
const RESIZE_START = 0;
const RESIZE_MEASURING = 1;
const RESIZE_STABLE = 2;
const ResizableTextArea = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ResizableTextArea",
  inheritAttrs: false,
  props: textAreaProps(),
  setup(props, _ref) {
    let {
      attrs,
      emit,
      expose
    } = _ref;
    let nextFrameActionId;
    let resizeFrameId;
    const textAreaRef = ref();
    const textareaStyles = ref({});
    const resizeStatus = ref(RESIZE_STABLE);
    onBeforeUnmount(() => {
      wrapperRaf.cancel(nextFrameActionId);
      wrapperRaf.cancel(resizeFrameId);
    });
    const fixFirefoxAutoScroll = () => {
      try {
        if (textAreaRef.value && document.activeElement === textAreaRef.value.input) {
          const currentStart = textAreaRef.value.getSelectionStart();
          const currentEnd = textAreaRef.value.getSelectionEnd();
          const scrollTop = textAreaRef.value.getScrollTop();
          textAreaRef.value.setSelectionRange(currentStart, currentEnd);
          textAreaRef.value.setScrollTop(scrollTop);
        }
      } catch (e2) {
      }
    };
    const minRows = ref();
    const maxRows = ref();
    watchEffect(() => {
      const autoSize = props.autoSize || props.autosize;
      if (autoSize) {
        minRows.value = autoSize.minRows;
        maxRows.value = autoSize.maxRows;
      } else {
        minRows.value = void 0;
        maxRows.value = void 0;
      }
    });
    const needAutoSize = computed(() => !!(props.autoSize || props.autosize));
    const startResize = () => {
      resizeStatus.value = RESIZE_START;
    };
    watch([() => props.value, minRows, maxRows, needAutoSize], () => {
      if (needAutoSize.value) {
        startResize();
      }
    }, {
      immediate: true
    });
    const autoSizeStyle = ref();
    watch([resizeStatus, textAreaRef], () => {
      if (!textAreaRef.value)
        return;
      if (resizeStatus.value === RESIZE_START) {
        resizeStatus.value = RESIZE_MEASURING;
      } else if (resizeStatus.value === RESIZE_MEASURING) {
        const textareaStyles2 = calculateAutoSizeStyle(textAreaRef.value.input, false, minRows.value, maxRows.value);
        resizeStatus.value = RESIZE_STABLE;
        autoSizeStyle.value = textareaStyles2;
      } else {
        fixFirefoxAutoScroll();
      }
    }, {
      immediate: true,
      flush: "post"
    });
    const instance = getCurrentInstance();
    const resizeRafRef = ref();
    const cleanRaf = () => {
      wrapperRaf.cancel(resizeRafRef.value);
    };
    const onInternalResize = (size) => {
      if (resizeStatus.value === RESIZE_STABLE) {
        emit("resize", size);
        if (needAutoSize.value) {
          cleanRaf();
          resizeRafRef.value = wrapperRaf(() => {
            startResize();
          });
        }
      }
    };
    onBeforeUnmount(() => {
      cleanRaf();
    });
    const resizeTextarea = () => {
      startResize();
    };
    expose({
      resizeTextarea,
      textArea: computed(() => {
        var _a;
        return (_a = textAreaRef.value) === null || _a === void 0 ? void 0 : _a.input;
      }),
      instance
    });
    warning$1(props.autosize === void 0);
    const renderTextArea = () => {
      const {
        prefixCls,
        disabled
      } = props;
      const otherProps = omit(props, ["prefixCls", "onPressEnter", "autoSize", "autosize", "defaultValue", "allowClear", "type", "maxlength", "valueModifiers"]);
      const cls = classNames(prefixCls, attrs.class, {
        [`${prefixCls}-disabled`]: disabled
      });
      const mergedAutoSizeStyle = needAutoSize.value ? autoSizeStyle.value : null;
      const style = [attrs.style, textareaStyles.value, mergedAutoSizeStyle];
      const textareaProps = _extends(_extends(_extends({}, otherProps), attrs), {
        style,
        class: cls
      });
      if (resizeStatus.value === RESIZE_START || resizeStatus.value === RESIZE_MEASURING) {
        style.push({
          overflowX: "hidden",
          overflowY: "hidden"
        });
      }
      if (!textareaProps.autofocus) {
        delete textareaProps.autofocus;
      }
      if (textareaProps.rows === 0) {
        delete textareaProps.rows;
      }
      return createVNode(ResizeObserver$1, {
        "onResize": onInternalResize,
        "disabled": !needAutoSize.value
      }, {
        default: () => [createVNode(BaseInput$1, _objectSpread2$1(_objectSpread2$1({}, textareaProps), {}, {
          "ref": textAreaRef,
          "tag": "textarea"
        }), null)]
      });
    };
    return () => {
      return renderTextArea();
    };
  }
});
const ResizableTextArea$1 = ResizableTextArea;
function fixEmojiLength(value, maxLength) {
  return [...value || ""].slice(0, maxLength).join("");
}
function setTriggerValue(isCursorInEnd, preValue, triggerValue, maxLength) {
  let newTriggerValue = triggerValue;
  if (isCursorInEnd) {
    newTriggerValue = fixEmojiLength(triggerValue, maxLength);
  } else if ([...preValue || ""].length < triggerValue.length && [...triggerValue || ""].length > maxLength) {
    newTriggerValue = preValue;
  }
  return newTriggerValue;
}
const TextArea = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ATextarea",
  inheritAttrs: false,
  props: textAreaProps(),
  setup(props, _ref) {
    let {
      attrs,
      expose,
      emit
    } = _ref;
    var _a;
    const formItemContext = useInjectFormItemContext();
    const formItemInputContext = FormItemInputContext.useInject();
    const mergedStatus = computed(() => getMergedStatus(formItemInputContext.status, props.status));
    const stateValue = shallowRef((_a = props.value) !== null && _a !== void 0 ? _a : props.defaultValue);
    const resizableTextArea = shallowRef();
    const mergedValue = shallowRef("");
    const {
      prefixCls,
      size,
      direction
    } = useConfigInject("input", props);
    const [wrapSSR, hashId] = useStyle$1(prefixCls);
    const disabled = useInjectDisabled();
    const showCount = computed(() => {
      return props.showCount === "" || props.showCount || false;
    });
    const hasMaxLength = computed(() => Number(props.maxlength) > 0);
    const compositing = shallowRef(false);
    const oldCompositionValueRef = shallowRef();
    const oldSelectionStartRef = shallowRef(0);
    const onInternalCompositionStart = (e2) => {
      compositing.value = true;
      oldCompositionValueRef.value = mergedValue.value;
      oldSelectionStartRef.value = e2.currentTarget.selectionStart;
      emit("compositionstart", e2);
    };
    const onInternalCompositionEnd = (e2) => {
      var _a2;
      compositing.value = false;
      let triggerValue = e2.currentTarget.value;
      if (hasMaxLength.value) {
        const isCursorInEnd = oldSelectionStartRef.value >= props.maxlength + 1 || oldSelectionStartRef.value === ((_a2 = oldCompositionValueRef.value) === null || _a2 === void 0 ? void 0 : _a2.length);
        triggerValue = setTriggerValue(isCursorInEnd, oldCompositionValueRef.value, triggerValue, props.maxlength);
      }
      if (triggerValue !== mergedValue.value) {
        setValue(triggerValue);
        resolveOnChange(e2.currentTarget, e2, triggerChange, triggerValue);
      }
      emit("compositionend", e2);
    };
    const instance = getCurrentInstance();
    watch(() => props.value, () => {
      var _a2;
      if ("value" in instance.vnode.props || {}) {
        stateValue.value = (_a2 = props.value) !== null && _a2 !== void 0 ? _a2 : "";
      }
    });
    const focus = (option) => {
      var _a2;
      triggerFocus((_a2 = resizableTextArea.value) === null || _a2 === void 0 ? void 0 : _a2.textArea, option);
    };
    const blur = () => {
      var _a2, _b;
      (_b = (_a2 = resizableTextArea.value) === null || _a2 === void 0 ? void 0 : _a2.textArea) === null || _b === void 0 ? void 0 : _b.blur();
    };
    const setValue = (value, callback) => {
      if (stateValue.value === value) {
        return;
      }
      if (props.value === void 0) {
        stateValue.value = value;
      } else {
        nextTick(() => {
          var _a2, _b, _c;
          if (resizableTextArea.value.textArea.value !== mergedValue.value) {
            (_c = (_a2 = resizableTextArea.value) === null || _a2 === void 0 ? void 0 : (_b = _a2.instance).update) === null || _c === void 0 ? void 0 : _c.call(_b);
          }
        });
      }
      nextTick(() => {
        callback && callback();
      });
    };
    const handleKeyDown = (e2) => {
      if (e2.keyCode === 13) {
        emit("pressEnter", e2);
      }
      emit("keydown", e2);
    };
    const onBlur = (e2) => {
      const {
        onBlur: onBlur2
      } = props;
      onBlur2 === null || onBlur2 === void 0 ? void 0 : onBlur2(e2);
      formItemContext.onFieldBlur();
    };
    const triggerChange = (e2) => {
      emit("update:value", e2.target.value);
      emit("change", e2);
      emit("input", e2);
      formItemContext.onFieldChange();
    };
    const handleReset = (e2) => {
      resolveOnChange(resizableTextArea.value.textArea, e2, triggerChange);
      setValue("", () => {
        focus();
      });
    };
    const handleChange = (e2) => {
      let triggerValue = e2.target.value;
      if (stateValue.value === triggerValue)
        return;
      if (hasMaxLength.value) {
        const target = e2.target;
        const isCursorInEnd = target.selectionStart >= props.maxlength + 1 || target.selectionStart === triggerValue.length || !target.selectionStart;
        triggerValue = setTriggerValue(isCursorInEnd, mergedValue.value, triggerValue, props.maxlength);
      }
      resolveOnChange(e2.currentTarget, e2, triggerChange, triggerValue);
      setValue(triggerValue);
    };
    const renderTextArea = () => {
      var _a2, _b;
      const {
        class: customClass
      } = attrs;
      const {
        bordered = true
      } = props;
      const resizeProps = _extends(_extends(_extends({}, omit(props, ["allowClear"])), attrs), {
        class: [{
          [`${prefixCls.value}-borderless`]: !bordered,
          [`${customClass}`]: customClass && !showCount.value,
          [`${prefixCls.value}-sm`]: size.value === "small",
          [`${prefixCls.value}-lg`]: size.value === "large"
        }, getStatusClassNames(prefixCls.value, mergedStatus.value), hashId.value],
        disabled: disabled.value,
        showCount: null,
        prefixCls: prefixCls.value,
        onInput: handleChange,
        onChange: handleChange,
        onBlur,
        onKeydown: handleKeyDown,
        onCompositionstart: onInternalCompositionStart,
        onCompositionend: onInternalCompositionEnd
      });
      if ((_a2 = props.valueModifiers) === null || _a2 === void 0 ? void 0 : _a2.lazy) {
        delete resizeProps.onInput;
      }
      return createVNode(ResizableTextArea$1, _objectSpread2$1(_objectSpread2$1({}, resizeProps), {}, {
        "id": (_b = resizeProps === null || resizeProps === void 0 ? void 0 : resizeProps.id) !== null && _b !== void 0 ? _b : formItemContext.id.value,
        "ref": resizableTextArea,
        "maxlength": props.maxlength,
        "lazy": props.lazy
      }), null);
    };
    expose({
      focus,
      blur,
      resizableTextArea
    });
    watchEffect(() => {
      let val = fixControlledValue(stateValue.value);
      if (!compositing.value && hasMaxLength.value && (props.value === null || props.value === void 0)) {
        val = fixEmojiLength(val, props.maxlength);
      }
      mergedValue.value = val;
    });
    return () => {
      var _a2;
      const {
        maxlength,
        bordered = true,
        hidden
      } = props;
      const {
        style,
        class: customClass
      } = attrs;
      const inputProps2 = _extends(_extends(_extends({}, props), attrs), {
        prefixCls: prefixCls.value,
        inputType: "text",
        handleReset,
        direction: direction.value,
        bordered,
        style: showCount.value ? void 0 : style,
        hashId: hashId.value,
        disabled: (_a2 = props.disabled) !== null && _a2 !== void 0 ? _a2 : disabled.value
      });
      let textareaNode = createVNode(ClearableLabeledInput, _objectSpread2$1(_objectSpread2$1({}, inputProps2), {}, {
        "value": mergedValue.value,
        "status": props.status
      }), {
        element: renderTextArea
      });
      if (showCount.value || formItemInputContext.hasFeedback) {
        const valueLength = [...mergedValue.value].length;
        let dataCount = "";
        if (typeof showCount.value === "object") {
          dataCount = showCount.value.formatter({
            value: mergedValue.value,
            count: valueLength,
            maxlength
          });
        } else {
          dataCount = `${valueLength}${hasMaxLength.value ? ` / ${maxlength}` : ""}`;
        }
        textareaNode = createVNode("div", {
          "hidden": hidden,
          "class": classNames(`${prefixCls.value}-textarea`, {
            [`${prefixCls.value}-textarea-rtl`]: direction.value === "rtl",
            [`${prefixCls.value}-textarea-show-count`]: showCount.value,
            [`${prefixCls.value}-textarea-in-form-item`]: formItemInputContext.isFormItemInput
          }, `${prefixCls.value}-textarea-show-count`, customClass, hashId.value),
          "style": style,
          "data-count": typeof dataCount !== "object" ? dataCount : void 0
        }, [textareaNode, formItemInputContext.hasFeedback && createVNode("span", {
          "class": `${prefixCls.value}-textarea-suffix`
        }, [formItemInputContext.feedbackIcon])]);
      }
      return wrapSSR(textareaNode);
    };
  }
});
var __rest$4 = function(s2, e2) {
  var t2 = {};
  for (var p in s2)
    if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
      t2[p] = s2[p];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
      if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
        t2[p[i2]] = s2[p[i2]];
    }
  return t2;
};
const inlineStyle = {
  border: 0,
  background: "transparent",
  padding: 0,
  lineHeight: "inherit",
  display: "inline-block"
};
const TransButton = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "TransButton",
  inheritAttrs: false,
  props: {
    noStyle: {
      type: Boolean,
      default: void 0
    },
    onClick: Function,
    disabled: {
      type: Boolean,
      default: void 0
    },
    autofocus: {
      type: Boolean,
      default: void 0
    }
  },
  setup(props, _ref) {
    let {
      slots,
      emit,
      attrs,
      expose
    } = _ref;
    const domRef = shallowRef();
    const onKeyDown = (event) => {
      const {
        keyCode
      } = event;
      if (keyCode === KeyCode$1.ENTER) {
        event.preventDefault();
      }
    };
    const onKeyUp = (event) => {
      const {
        keyCode
      } = event;
      if (keyCode === KeyCode$1.ENTER) {
        emit("click", event);
      }
    };
    const onClick = (e2) => {
      emit("click", e2);
    };
    const focus = () => {
      if (domRef.value) {
        domRef.value.focus();
      }
    };
    const blur = () => {
      if (domRef.value) {
        domRef.value.blur();
      }
    };
    onMounted(() => {
      if (props.autofocus) {
        focus();
      }
    });
    expose({
      focus,
      blur
    });
    return () => {
      var _a;
      const {
        noStyle,
        disabled
      } = props, restProps = __rest$4(props, ["noStyle", "disabled"]);
      let mergedStyle = {};
      if (!noStyle) {
        mergedStyle = _extends({}, inlineStyle);
      }
      if (disabled) {
        mergedStyle.pointerEvents = "none";
      }
      return createVNode("div", _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({
        "role": "button",
        "tabindex": 0,
        "ref": domRef
      }, restProps), attrs), {}, {
        "onClick": onClick,
        "onKeydown": onKeyDown,
        "onKeyup": onKeyUp,
        "style": _extends(_extends({}, mergedStyle), attrs.style || {})
      }), [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]);
    };
  }
});
const TransButton$1 = TransButton;
var EnterOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z" } }] }, "name": "enter", "theme": "outlined" };
const EnterOutlinedSvg = EnterOutlined$2;
function _objectSpread$2(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
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
var EnterOutlined = function EnterOutlined2(props, context) {
  var p = _objectSpread$2({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread$2({}, p, {
    "icon": EnterOutlinedSvg
  }), null);
};
EnterOutlined.displayName = "EnterOutlined";
EnterOutlined.inheritAttrs = false;
const EnterOutlined$1 = EnterOutlined;
const getTitleStyle = (fontSize, lineHeight, color, token2) => {
  const {
    sizeMarginHeadingVerticalEnd,
    fontWeightStrong
  } = token2;
  return {
    marginBottom: sizeMarginHeadingVerticalEnd,
    color,
    fontWeight: fontWeightStrong,
    fontSize,
    lineHeight
  };
};
const getTitleStyles = (token2) => {
  const headings = [1, 2, 3, 4, 5];
  const styles = {};
  headings.forEach((headingLevel) => {
    styles[`
      h${headingLevel}&,
      div&-h${headingLevel},
      div&-h${headingLevel} > textarea,
      h${headingLevel}
    `] = getTitleStyle(token2[`fontSizeHeading${headingLevel}`], token2[`lineHeightHeading${headingLevel}`], token2.colorTextHeading, token2);
  });
  return styles;
};
const getLinkStyles = (token2) => {
  const {
    componentCls
  } = token2;
  return {
    "a&, a": _extends(_extends({}, operationUnit(token2)), {
      textDecoration: token2.linkDecoration,
      "&:active, &:hover": {
        textDecoration: token2.linkHoverDecoration
      },
      [`&[disabled], &${componentCls}-disabled`]: {
        color: token2.colorTextDisabled,
        cursor: "not-allowed",
        "&:active, &:hover": {
          color: token2.colorTextDisabled
        },
        "&:active": {
          pointerEvents: "none"
        }
      }
    })
  };
};
const getResetStyles = () => ({
  code: {
    margin: "0 0.2em",
    paddingInline: "0.4em",
    paddingBlock: "0.2em 0.1em",
    fontSize: "85%",
    background: "rgba(150, 150, 150, 0.1)",
    border: "1px solid rgba(100, 100, 100, 0.2)",
    borderRadius: 3
  },
  kbd: {
    margin: "0 0.2em",
    paddingInline: "0.4em",
    paddingBlock: "0.15em 0.1em",
    fontSize: "90%",
    background: "rgba(150, 150, 150, 0.06)",
    border: "1px solid rgba(100, 100, 100, 0.2)",
    borderBottomWidth: 2,
    borderRadius: 3
  },
  mark: {
    padding: 0,
    // FIXME hardcode in v4
    backgroundColor: gold[2]
  },
  "u, ins": {
    textDecoration: "underline",
    textDecorationSkipInk: "auto"
  },
  "s, del": {
    textDecoration: "line-through"
  },
  strong: {
    fontWeight: 600
  },
  // list
  "ul, ol": {
    marginInline: 0,
    marginBlock: "0 1em",
    padding: 0,
    li: {
      marginInline: "20px 0",
      marginBlock: 0,
      paddingInline: "4px 0",
      paddingBlock: 0
    }
  },
  ul: {
    listStyleType: "circle",
    ul: {
      listStyleType: "disc"
    }
  },
  ol: {
    listStyleType: "decimal"
  },
  // pre & block
  "pre, blockquote": {
    margin: "1em 0"
  },
  pre: {
    padding: "0.4em 0.6em",
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
    background: "rgba(150, 150, 150, 0.1)",
    border: "1px solid rgba(100, 100, 100, 0.2)",
    borderRadius: 3,
    // Compatible for marked
    code: {
      display: "inline",
      margin: 0,
      padding: 0,
      fontSize: "inherit",
      fontFamily: "inherit",
      background: "transparent",
      border: 0
    }
  },
  blockquote: {
    paddingInline: "0.6em 0",
    paddingBlock: 0,
    borderInlineStart: "4px solid rgba(100, 100, 100, 0.2)",
    opacity: 0.85
  }
});
const getEditableStyles = (token2) => {
  const {
    componentCls
  } = token2;
  const inputToken = initInputToken(token2);
  const inputShift = inputToken.inputPaddingVertical + 1;
  return {
    "&-edit-content": {
      position: "relative",
      "div&": {
        insetInlineStart: -token2.paddingSM,
        marginTop: -inputShift,
        marginBottom: `calc(1em - ${inputShift}px)`
      },
      [`${componentCls}-edit-content-confirm`]: {
        position: "absolute",
        insetInlineEnd: token2.marginXS + 2,
        insetBlockEnd: token2.marginXS,
        color: token2.colorTextDescription,
        // default style
        fontWeight: "normal",
        fontSize: token2.fontSize,
        fontStyle: "normal",
        pointerEvents: "none"
      },
      textarea: {
        margin: "0!important",
        // Fix Editable Textarea flash in Firefox
        MozTransition: "none",
        height: "1em"
      }
    }
  };
};
const getCopiableStyles = (token2) => ({
  "&-copy-success": {
    [`
    &,
    &:hover,
    &:focus`]: {
      color: token2.colorSuccess
    }
  }
});
const getEllipsisStyles = () => ({
  [`
  a&-ellipsis,
  span&-ellipsis
  `]: {
    display: "inline-block",
    maxWidth: "100%"
  },
  "&-single-line": {
    whiteSpace: "nowrap"
  },
  "&-ellipsis-single-line": {
    overflow: "hidden",
    textOverflow: "ellipsis",
    // https://blog.csdn.net/iefreer/article/details/50421025
    "a&, span&": {
      verticalAlign: "bottom"
    }
  },
  "&-ellipsis-multiple-line": {
    display: "-webkit-box",
    overflow: "hidden",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical"
  }
});
const genTypographyStyle = (token2) => {
  const {
    componentCls,
    sizeMarginHeadingVerticalStart
  } = token2;
  return {
    [componentCls]: _extends(_extends(_extends(_extends(_extends(_extends(_extends(_extends(_extends({
      color: token2.colorText,
      wordBreak: "break-word",
      lineHeight: token2.lineHeight,
      [`&${componentCls}-secondary`]: {
        color: token2.colorTextDescription
      },
      [`&${componentCls}-success`]: {
        color: token2.colorSuccess
      },
      [`&${componentCls}-warning`]: {
        color: token2.colorWarning
      },
      [`&${componentCls}-danger`]: {
        color: token2.colorError,
        "a&:active, a&:focus": {
          color: token2.colorErrorActive
        },
        "a&:hover": {
          color: token2.colorErrorHover
        }
      },
      [`&${componentCls}-disabled`]: {
        color: token2.colorTextDisabled,
        cursor: "not-allowed",
        userSelect: "none"
      },
      [`
        div&,
        p
      `]: {
        marginBottom: "1em"
      }
    }, getTitleStyles(token2)), {
      [`
      & + h1${componentCls},
      & + h2${componentCls},
      & + h3${componentCls},
      & + h4${componentCls},
      & + h5${componentCls}
      `]: {
        marginTop: sizeMarginHeadingVerticalStart
      },
      [`
      div,
      ul,
      li,
      p,
      h1,
      h2,
      h3,
      h4,
      h5`]: {
        [`
        + h1,
        + h2,
        + h3,
        + h4,
        + h5
        `]: {
          marginTop: sizeMarginHeadingVerticalStart
        }
      }
    }), getResetStyles()), getLinkStyles(token2)), {
      // Operation
      [`
        ${componentCls}-expand,
        ${componentCls}-edit,
        ${componentCls}-copy
      `]: _extends(_extends({}, operationUnit(token2)), {
        marginInlineStart: token2.marginXXS
      })
    }), getEditableStyles(token2)), getCopiableStyles(token2)), getEllipsisStyles()), {
      "&-rtl": {
        direction: "rtl"
      }
    })
  };
};
const useStyle = genComponentStyleHook("Typography", (token2) => [genTypographyStyle(token2)], {
  sizeMarginHeadingVerticalStart: "1.2em",
  sizeMarginHeadingVerticalEnd: "0.5em"
});
const editableProps = () => ({
  prefixCls: String,
  value: String,
  maxlength: Number,
  autoSize: {
    type: [Boolean, Object]
  },
  onSave: Function,
  onCancel: Function,
  onEnd: Function,
  onChange: Function,
  originContent: String,
  direction: String,
  component: String
});
const Editable = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Editable",
  inheritAttrs: false,
  props: editableProps(),
  // emits: ['save', 'cancel', 'end', 'change'],
  setup(props, _ref) {
    let {
      emit,
      slots,
      attrs
    } = _ref;
    const {
      prefixCls
    } = toRefs(props);
    const state = reactive({
      current: props.value || "",
      lastKeyCode: void 0,
      inComposition: false,
      cancelFlag: false
    });
    watch(() => props.value, (current) => {
      state.current = current;
    });
    const textArea = ref();
    onMounted(() => {
      var _a;
      if (textArea.value) {
        const resizableTextArea = (_a = textArea.value) === null || _a === void 0 ? void 0 : _a.resizableTextArea;
        const innerTextArea = resizableTextArea === null || resizableTextArea === void 0 ? void 0 : resizableTextArea.textArea;
        innerTextArea.focus();
        const {
          length: length2
        } = innerTextArea.value;
        innerTextArea.setSelectionRange(length2, length2);
      }
    });
    function saveTextAreaRef(node2) {
      textArea.value = node2;
    }
    function onChange(_ref2) {
      let {
        target: {
          value
        }
      } = _ref2;
      state.current = value.replace(/[\r\n]/g, "");
      emit("change", state.current);
    }
    function onCompositionStart() {
      state.inComposition = true;
    }
    function onCompositionEnd() {
      state.inComposition = false;
    }
    function onKeyDown(e2) {
      const {
        keyCode
      } = e2;
      if (keyCode === KeyCode$1.ENTER) {
        e2.preventDefault();
      }
      if (state.inComposition)
        return;
      state.lastKeyCode = keyCode;
    }
    function onKeyUp(e2) {
      const {
        keyCode,
        ctrlKey,
        altKey,
        metaKey,
        shiftKey
      } = e2;
      if (state.lastKeyCode === keyCode && !state.inComposition && !ctrlKey && !altKey && !metaKey && !shiftKey) {
        if (keyCode === KeyCode$1.ENTER) {
          confirmChange();
          emit("end");
        } else if (keyCode === KeyCode$1.ESC) {
          state.current = props.originContent;
          emit("cancel");
        }
      }
    }
    function onBlur() {
      confirmChange();
    }
    function confirmChange() {
      emit("save", state.current.trim());
    }
    const [wrapSSR, hashId] = useStyle(prefixCls);
    return () => {
      const textAreaClassName = classNames({
        [`${prefixCls.value}`]: true,
        [`${prefixCls.value}-edit-content`]: true,
        [`${prefixCls.value}-rtl`]: props.direction === "rtl",
        [props.component ? `${prefixCls.value}-${props.component}` : ""]: true
      }, attrs.class, hashId.value);
      return wrapSSR(createVNode("div", _objectSpread2$1(_objectSpread2$1({}, attrs), {}, {
        "class": textAreaClassName
      }), [createVNode(TextArea, {
        "ref": saveTextAreaRef,
        "maxlength": props.maxlength,
        "value": state.current,
        "onChange": onChange,
        "onKeydown": onKeyDown,
        "onKeyup": onKeyUp,
        "onCompositionstart": onCompositionStart,
        "onCompositionend": onCompositionEnd,
        "onBlur": onBlur,
        "rows": 1,
        "autoSize": props.autoSize === void 0 || props.autoSize
      }, null), slots.enterIcon ? slots.enterIcon({
        className: `${props.prefixCls}-edit-content-confirm`
      }) : createVNode(EnterOutlined$1, {
        "class": `${props.prefixCls}-edit-content-confirm`
      }, null)]));
    };
  }
});
const Editable$1 = Editable;
const TEXT_NODE = 3;
const COMMENT_NODE = 8;
let ellipsisContainer;
const wrapperStyle = {
  padding: 0,
  margin: 0,
  display: "inline",
  lineHeight: "inherit"
};
function resetDomStyles(target, origin) {
  target.setAttribute("aria-hidden", "true");
  const originStyle = window.getComputedStyle(origin);
  const originCSS = styleToString(originStyle);
  target.setAttribute("style", originCSS);
  target.style.position = "fixed";
  target.style.left = "0";
  target.style.height = "auto";
  target.style.minHeight = "auto";
  target.style.maxHeight = "auto";
  target.style.paddingTop = "0";
  target.style.paddingBottom = "0";
  target.style.borderTopWidth = "0";
  target.style.borderBottomWidth = "0";
  target.style.top = "-999999px";
  target.style.zIndex = "-1000";
  target.style.textOverflow = "clip";
  target.style.whiteSpace = "normal";
  target.style.webkitLineClamp = "none";
}
function getRealLineHeight(originElement) {
  const heightContainer = document.createElement("div");
  resetDomStyles(heightContainer, originElement);
  heightContainer.appendChild(document.createTextNode("text"));
  document.body.appendChild(heightContainer);
  const realHeight = heightContainer.getBoundingClientRect().height;
  document.body.removeChild(heightContainer);
  return realHeight;
}
const measure = (originElement, option, content, fixedContent, ellipsisStr) => {
  if (!ellipsisContainer) {
    ellipsisContainer = document.createElement("div");
    ellipsisContainer.setAttribute("aria-hidden", "true");
    document.body.appendChild(ellipsisContainer);
  }
  const {
    rows,
    suffix = ""
  } = option;
  const lineHeight = getRealLineHeight(originElement);
  const maxHeight = Math.round(lineHeight * rows * 100) / 100;
  resetDomStyles(ellipsisContainer, originElement);
  const vm = createApp({
    render() {
      return createVNode("div", {
        "style": wrapperStyle
      }, [createVNode("span", {
        "style": wrapperStyle
      }, [content, suffix]), createVNode("span", {
        "style": wrapperStyle
      }, [fixedContent])]);
    }
  });
  vm.mount(ellipsisContainer);
  function inRange() {
    const currentHeight = Math.round(ellipsisContainer.getBoundingClientRect().height * 100) / 100;
    return currentHeight - 0.1 <= maxHeight;
  }
  if (inRange()) {
    vm.unmount();
    return {
      content,
      text: ellipsisContainer.innerHTML,
      ellipsis: false
    };
  }
  const childNodes = Array.prototype.slice.apply(ellipsisContainer.childNodes[0].childNodes[0].cloneNode(true).childNodes).filter((_ref) => {
    let {
      nodeType,
      data
    } = _ref;
    return nodeType !== COMMENT_NODE && data !== "";
  });
  const fixedNodes = Array.prototype.slice.apply(ellipsisContainer.childNodes[0].childNodes[1].cloneNode(true).childNodes);
  vm.unmount();
  const ellipsisChildren = [];
  ellipsisContainer.innerHTML = "";
  const ellipsisContentHolder = document.createElement("span");
  ellipsisContainer.appendChild(ellipsisContentHolder);
  const ellipsisTextNode = document.createTextNode(ellipsisStr + suffix);
  ellipsisContentHolder.appendChild(ellipsisTextNode);
  fixedNodes.forEach((childNode) => {
    ellipsisContainer.appendChild(childNode);
  });
  function appendChildNode(node2) {
    ellipsisContentHolder.insertBefore(node2, ellipsisTextNode);
  }
  function measureText(textNode, fullText) {
    let startLoc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    let endLoc = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : fullText.length;
    let lastSuccessLoc = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
    const midLoc = Math.floor((startLoc + endLoc) / 2);
    const currentText = fullText.slice(0, midLoc);
    textNode.textContent = currentText;
    if (startLoc >= endLoc - 1) {
      for (let step = endLoc; step >= startLoc; step -= 1) {
        const currentStepText = fullText.slice(0, step);
        textNode.textContent = currentStepText;
        if (inRange() || !currentStepText) {
          return step === fullText.length ? {
            finished: false,
            vNode: fullText
          } : {
            finished: true,
            vNode: currentStepText
          };
        }
      }
    }
    if (inRange()) {
      return measureText(textNode, fullText, midLoc, endLoc, midLoc);
    }
    return measureText(textNode, fullText, startLoc, midLoc, lastSuccessLoc);
  }
  function measureNode(childNode) {
    const type = childNode.nodeType;
    if (type === TEXT_NODE) {
      const fullText = childNode.textContent || "";
      const textNode = document.createTextNode(fullText);
      appendChildNode(textNode);
      return measureText(textNode, fullText);
    }
    return {
      finished: false,
      vNode: null
    };
  }
  childNodes.some((childNode) => {
    const {
      finished,
      vNode
    } = measureNode(childNode);
    if (vNode) {
      ellipsisChildren.push(vNode);
    }
    return finished;
  });
  return {
    content: ellipsisChildren,
    text: ellipsisContainer.innerHTML,
    ellipsis: true
  };
};
var __rest$3 = function(s2, e2) {
  var t2 = {};
  for (var p in s2)
    if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
      t2[p] = s2[p];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
      if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
        t2[p[i2]] = s2[p[i2]];
    }
  return t2;
};
const typographyProps = () => ({
  prefixCls: String,
  direction: String,
  // Form Internal use
  component: String
});
const Typography = defineComponent({
  name: "ATypography",
  inheritAttrs: false,
  props: typographyProps(),
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      prefixCls,
      direction
    } = useConfigInject("typography", props);
    const [wrapSSR, hashId] = useStyle(prefixCls);
    return () => {
      var _a;
      const _b = _extends(_extends({}, props), attrs), {
        prefixCls: _prefixCls,
        direction: _direction,
        component: Component = "article"
      } = _b, restProps = __rest$3(_b, ["prefixCls", "direction", "component"]);
      return wrapSSR(createVNode(Component, _objectSpread2$1(_objectSpread2$1({}, restProps), {}, {
        "class": classNames(prefixCls.value, {
          [`${prefixCls.value}-rtl`]: direction.value === "rtl"
        }, attrs.class, hashId.value)
      }), {
        default: () => [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]
      }));
    };
  }
});
const Typography$1 = Typography;
const deselectCurrent = () => {
  const selection = document.getSelection();
  if (!selection.rangeCount) {
    return function() {
    };
  }
  let active = document.activeElement;
  const ranges = [];
  for (let i2 = 0; i2 < selection.rangeCount; i2++) {
    ranges.push(selection.getRangeAt(i2));
  }
  switch (active.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
      active.blur();
      break;
    default:
      active = null;
      break;
  }
  selection.removeAllRanges();
  return function() {
    selection.type === "Caret" && selection.removeAllRanges();
    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }
    active && active.focus();
  };
};
const deselectCurrent$1 = deselectCurrent;
const clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  default: "Text"
};
const defaultMessage = "Copy to clipboard: #{key}, Enter";
function format(message) {
  const copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}
function copy(text, options) {
  let message, reselectPrevious, range, selection, mark, success = false;
  if (!options) {
    options = {};
  }
  const debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent$1();
    range = document.createRange();
    selection = document.getSelection();
    mark = document.createElement("span");
    mark.textContent = text;
    mark.style.all = "unset";
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    mark.style.whiteSpace = "pre";
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e2) {
      e2.stopPropagation();
      if (options.format) {
        e2.preventDefault();
        if (typeof e2.clipboardData === "undefined") {
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          const format2 = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
          window.clipboardData.setData(format2, text);
        } else {
          e2.clipboardData.clearData();
          e2.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e2.preventDefault();
        options.onCopy(e2.clipboardData);
      }
    });
    document.body.appendChild(mark);
    range.selectNodeContents(mark);
    selection.addRange(range);
    const successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err2) {
      debug && console.error("unable to copy using clipboardData: ", err2);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }
    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }
  return success;
}
var CopyOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" } }] }, "name": "copy", "theme": "outlined" };
const CopyOutlinedSvg = CopyOutlined$2;
function _objectSpread$1(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
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
var CopyOutlined = function CopyOutlined2(props, context) {
  var p = _objectSpread$1({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread$1({}, p, {
    "icon": CopyOutlinedSvg
  }), null);
};
CopyOutlined.displayName = "CopyOutlined";
CopyOutlined.inheritAttrs = false;
const CopyOutlined$1 = CopyOutlined;
var EditOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" } }] }, "name": "edit", "theme": "outlined" };
const EditOutlinedSvg = EditOutlined$2;
function _objectSpread(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? Object(arguments[i2]) : {};
    var ownKeys2 = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys2 = ownKeys2.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys2.forEach(function(key) {
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
var EditOutlined = function EditOutlined2(props, context) {
  var p = _objectSpread({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread({}, p, {
    "icon": EditOutlinedSvg
  }), null);
};
EditOutlined.displayName = "EditOutlined";
EditOutlined.inheritAttrs = false;
const EditOutlined$1 = EditOutlined;
var __rest$2 = function(s2, e2) {
  var t2 = {};
  for (var p in s2)
    if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
      t2[p] = s2[p];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
      if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
        t2[p[i2]] = s2[p[i2]];
    }
  return t2;
};
const isLineClampSupport = isStyleSupport("webkitLineClamp");
const isTextOverflowSupport = isStyleSupport("textOverflow");
const ELLIPSIS_STR = "...";
const baseProps = () => ({
  editable: {
    type: [Boolean, Object],
    default: void 0
  },
  copyable: {
    type: [Boolean, Object],
    default: void 0
  },
  prefixCls: String,
  component: String,
  type: String,
  disabled: {
    type: Boolean,
    default: void 0
  },
  ellipsis: {
    type: [Boolean, Object],
    default: void 0
  },
  code: {
    type: Boolean,
    default: void 0
  },
  mark: {
    type: Boolean,
    default: void 0
  },
  underline: {
    type: Boolean,
    default: void 0
  },
  delete: {
    type: Boolean,
    default: void 0
  },
  strong: {
    type: Boolean,
    default: void 0
  },
  keyboard: {
    type: Boolean,
    default: void 0
  },
  content: String,
  "onUpdate:content": Function
});
const Base = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "TypographyBase",
  inheritAttrs: false,
  props: baseProps(),
  // emits: ['update:content'],
  setup(props, _ref) {
    let {
      slots,
      attrs,
      emit
    } = _ref;
    const {
      prefixCls,
      direction
    } = useConfigInject("typography", props);
    const state = reactive({
      copied: false,
      ellipsisText: "",
      ellipsisContent: null,
      isEllipsis: false,
      expanded: false,
      clientRendered: false,
      //locale
      expandStr: "",
      copyStr: "",
      copiedStr: "",
      editStr: "",
      copyId: void 0,
      rafId: void 0,
      prevProps: void 0,
      originContent: ""
    });
    const contentRef = ref();
    const editIcon = ref();
    const ellipsis = computed(() => {
      const ellipsis2 = props.ellipsis;
      if (!ellipsis2)
        return {};
      return _extends({
        rows: 1,
        expandable: false
      }, typeof ellipsis2 === "object" ? ellipsis2 : null);
    });
    onMounted(() => {
      state.clientRendered = true;
      syncEllipsis();
    });
    onBeforeUnmount(() => {
      clearTimeout(state.copyId);
      wrapperRaf.cancel(state.rafId);
    });
    watch([() => ellipsis.value.rows, () => props.content], () => {
      nextTick(() => {
        resizeOnNextFrame();
      });
    }, {
      flush: "post",
      deep: true
    });
    watchEffect(() => {
      if (props.content === void 0) {
        warning$1(!props.editable);
        warning$1(!props.ellipsis);
      }
    });
    function getChildrenText() {
      var _a;
      return props.ellipsis || props.editable ? props.content : (_a = findDOMNode(contentRef.value)) === null || _a === void 0 ? void 0 : _a.innerText;
    }
    function onExpandClick(e2) {
      const {
        onExpand
      } = ellipsis.value;
      state.expanded = true;
      onExpand === null || onExpand === void 0 ? void 0 : onExpand(e2);
    }
    function onEditClick(e2) {
      e2.preventDefault();
      state.originContent = props.content;
      triggerEdit(true);
    }
    function onEditChange(value) {
      onContentChange(value);
      triggerEdit(false);
    }
    function onContentChange(value) {
      const {
        onChange
      } = editable.value;
      if (value !== props.content) {
        emit("update:content", value);
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
      }
    }
    function onEditCancel() {
      var _a, _b;
      (_b = (_a = editable.value).onCancel) === null || _b === void 0 ? void 0 : _b.call(_a);
      triggerEdit(false);
    }
    function onCopyClick(e2) {
      e2.preventDefault();
      e2.stopPropagation();
      const {
        copyable
      } = props;
      const copyConfig = _extends({}, typeof copyable === "object" ? copyable : null);
      if (copyConfig.text === void 0) {
        copyConfig.text = getChildrenText();
      }
      copy(copyConfig.text || "");
      state.copied = true;
      nextTick(() => {
        if (copyConfig.onCopy) {
          copyConfig.onCopy(e2);
        }
        state.copyId = setTimeout(() => {
          state.copied = false;
        }, 3e3);
      });
    }
    const editable = computed(() => {
      const editable2 = props.editable;
      if (!editable2)
        return {
          editing: false
        };
      return _extends({}, typeof editable2 === "object" ? editable2 : null);
    });
    const [editing, setEditing] = useMergedState(false, {
      value: computed(() => {
        return editable.value.editing;
      })
    });
    function triggerEdit(edit) {
      const {
        onStart
      } = editable.value;
      if (edit && onStart) {
        onStart();
      }
      setEditing(edit);
    }
    watch(editing, (val) => {
      var _a;
      if (!val) {
        (_a = editIcon.value) === null || _a === void 0 ? void 0 : _a.focus();
      }
    }, {
      flush: "post"
    });
    function resizeOnNextFrame(sizeInfo) {
      if (sizeInfo) {
        const {
          width,
          height
        } = sizeInfo;
        if (!width || !height)
          return;
      }
      wrapperRaf.cancel(state.rafId);
      state.rafId = wrapperRaf(() => {
        syncEllipsis();
      });
    }
    const canUseCSSEllipsis = computed(() => {
      const {
        rows,
        expandable,
        suffix,
        onEllipsis,
        tooltip
      } = ellipsis.value;
      if (suffix || tooltip)
        return false;
      if (props.editable || props.copyable || expandable || onEllipsis) {
        return false;
      }
      if (rows === 1) {
        return isTextOverflowSupport;
      }
      return isLineClampSupport;
    });
    const syncEllipsis = () => {
      const {
        ellipsisText,
        isEllipsis
      } = state;
      const {
        rows,
        suffix,
        onEllipsis
      } = ellipsis.value;
      if (!rows || rows < 0 || !findDOMNode(contentRef.value) || state.expanded || props.content === void 0)
        return;
      if (canUseCSSEllipsis.value)
        return;
      const {
        content,
        text,
        ellipsis: ell
      } = measure(findDOMNode(contentRef.value), {
        rows,
        suffix
      }, props.content, renderOperations(true), ELLIPSIS_STR);
      if (ellipsisText !== text || state.isEllipsis !== ell) {
        state.ellipsisText = text;
        state.ellipsisContent = content;
        state.isEllipsis = ell;
        if (isEllipsis !== ell && onEllipsis) {
          onEllipsis(ell);
        }
      }
    };
    function wrapperDecorations(_ref2, content) {
      let {
        mark,
        code,
        underline,
        delete: del,
        strong,
        keyboard
      } = _ref2;
      let currentContent = content;
      function wrap(needed, Tag) {
        if (!needed)
          return;
        const _currentContent = /* @__PURE__ */ function() {
          return currentContent;
        }();
        currentContent = createVNode(Tag, null, {
          default: () => [_currentContent]
        });
      }
      wrap(strong, "strong");
      wrap(underline, "u");
      wrap(del, "del");
      wrap(code, "code");
      wrap(mark, "mark");
      wrap(keyboard, "kbd");
      return currentContent;
    }
    function renderExpand(forceRender) {
      const {
        expandable,
        symbol
      } = ellipsis.value;
      if (!expandable)
        return null;
      if (!forceRender && (state.expanded || !state.isEllipsis))
        return null;
      const expandContent = (slots.ellipsisSymbol ? slots.ellipsisSymbol() : symbol) || state.expandStr;
      return createVNode("a", {
        "key": "expand",
        "class": `${prefixCls.value}-expand`,
        "onClick": onExpandClick,
        "aria-label": state.expandStr
      }, [expandContent]);
    }
    function renderEdit() {
      if (!props.editable)
        return;
      const {
        tooltip,
        triggerType = ["icon"]
      } = props.editable;
      const icon = slots.editableIcon ? slots.editableIcon() : createVNode(EditOutlined$1, {
        "role": "button"
      }, null);
      const title = slots.editableTooltip ? slots.editableTooltip() : state.editStr;
      const ariaLabel = typeof title === "string" ? title : "";
      return triggerType.indexOf("icon") !== -1 ? createVNode(Tooltip, {
        "key": "edit",
        "title": tooltip === false ? "" : title
      }, {
        default: () => [createVNode(TransButton$1, {
          "ref": editIcon,
          "class": `${prefixCls.value}-edit`,
          "onClick": onEditClick,
          "aria-label": ariaLabel
        }, {
          default: () => [icon]
        })]
      }) : null;
    }
    function renderCopy() {
      if (!props.copyable)
        return;
      const {
        tooltip
      } = props.copyable;
      const defaultTitle = state.copied ? state.copiedStr : state.copyStr;
      const title = slots.copyableTooltip ? slots.copyableTooltip({
        copied: state.copied
      }) : defaultTitle;
      const ariaLabel = typeof title === "string" ? title : "";
      const defaultIcon = state.copied ? createVNode(CheckOutlined$1, null, null) : createVNode(CopyOutlined$1, null, null);
      const icon = slots.copyableIcon ? slots.copyableIcon({
        copied: !!state.copied
      }) : defaultIcon;
      return createVNode(Tooltip, {
        "key": "copy",
        "title": tooltip === false ? "" : title
      }, {
        default: () => [createVNode(TransButton$1, {
          "class": [`${prefixCls.value}-copy`, {
            [`${prefixCls.value}-copy-success`]: state.copied
          }],
          "onClick": onCopyClick,
          "aria-label": ariaLabel
        }, {
          default: () => [icon]
        })]
      });
    }
    function renderEditInput() {
      const {
        class: className,
        style
      } = attrs;
      const {
        maxlength,
        autoSize,
        onEnd
      } = editable.value;
      return createVNode(Editable$1, {
        "class": className,
        "style": style,
        "prefixCls": prefixCls.value,
        "value": props.content,
        "originContent": state.originContent,
        "maxlength": maxlength,
        "autoSize": autoSize,
        "onSave": onEditChange,
        "onChange": onContentChange,
        "onCancel": onEditCancel,
        "onEnd": onEnd,
        "direction": direction.value,
        "component": props.component
      }, {
        enterIcon: slots.editableEnterIcon
      });
    }
    function renderOperations(forceRenderExpanded) {
      return [renderExpand(forceRenderExpanded), renderEdit(), renderCopy()].filter((node2) => node2);
    }
    return () => {
      var _a;
      const {
        triggerType = ["icon"]
      } = editable.value;
      const children = props.ellipsis || props.editable ? props.content !== void 0 ? props.content : (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots) : slots.default ? slots.default() : props.content;
      if (editing.value) {
        return renderEditInput();
      }
      return createVNode(LocaleReceiver, {
        "componentName": "Text",
        "children": (locale2) => {
          const _a2 = _extends(_extends({}, props), attrs), {
            type,
            disabled,
            content,
            class: className,
            style
          } = _a2, restProps = __rest$2(_a2, ["type", "disabled", "content", "class", "style"]);
          const {
            rows,
            suffix,
            tooltip
          } = ellipsis.value;
          const {
            edit,
            copy: copyStr,
            copied,
            expand
          } = locale2;
          state.editStr = edit;
          state.copyStr = copyStr;
          state.copiedStr = copied;
          state.expandStr = expand;
          const textProps2 = omit(restProps, ["prefixCls", "editable", "copyable", "ellipsis", "mark", "code", "delete", "underline", "strong", "keyboard", "onUpdate:content"]);
          const cssEllipsis = canUseCSSEllipsis.value;
          const cssTextOverflow = rows === 1 && cssEllipsis;
          const cssLineClamp = rows && rows > 1 && cssEllipsis;
          let textNode = children;
          let ariaLabel;
          if (rows && state.isEllipsis && !state.expanded && !cssEllipsis) {
            const {
              title: title2
            } = restProps;
            let restContent = title2 || "";
            if (!title2 && (typeof children === "string" || typeof children === "number")) {
              restContent = String(children);
            }
            restContent = restContent === null || restContent === void 0 ? void 0 : restContent.slice(String(state.ellipsisContent || "").length);
            textNode = createVNode(Fragment, null, [toRaw(state.ellipsisContent), createVNode("span", {
              "title": restContent,
              "aria-hidden": "true"
            }, [ELLIPSIS_STR]), suffix]);
          } else {
            textNode = createVNode(Fragment, null, [children, suffix]);
          }
          textNode = wrapperDecorations(props, textNode);
          const showTooltip = tooltip && rows && state.isEllipsis && !state.expanded && !cssEllipsis;
          const title = slots.ellipsisTooltip ? slots.ellipsisTooltip() : tooltip;
          return createVNode(ResizeObserver$1, {
            "onResize": resizeOnNextFrame,
            "disabled": !rows
          }, {
            default: () => [createVNode(Typography$1, _objectSpread2$1({
              "ref": contentRef,
              "class": [{
                [`${prefixCls.value}-${type}`]: type,
                [`${prefixCls.value}-disabled`]: disabled,
                [`${prefixCls.value}-ellipsis`]: rows,
                [`${prefixCls.value}-single-line`]: rows === 1 && !state.isEllipsis,
                [`${prefixCls.value}-ellipsis-single-line`]: cssTextOverflow,
                [`${prefixCls.value}-ellipsis-multiple-line`]: cssLineClamp
              }, className],
              "style": _extends(_extends({}, style), {
                WebkitLineClamp: cssLineClamp ? rows : void 0
              }),
              "aria-label": ariaLabel,
              "direction": direction.value,
              "onClick": triggerType.indexOf("text") !== -1 ? onEditClick : () => {
              }
            }, textProps2), {
              default: () => [showTooltip ? createVNode(Tooltip, {
                "title": tooltip === true ? children : title
              }, {
                default: () => [createVNode("span", null, [textNode])]
              }) : textNode, renderOperations()]
            })]
          });
        }
      }, null);
    };
  }
});
const Base$1 = Base;
var __rest$1 = function(s2, e2) {
  var t2 = {};
  for (var p in s2)
    if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
      t2[p] = s2[p];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
      if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
        t2[p[i2]] = s2[p[i2]];
    }
  return t2;
};
const linkProps = () => omit(_extends(_extends({}, baseProps()), {
  ellipsis: {
    type: Boolean,
    default: void 0
  }
}), ["component"]);
const Link = (props, _ref) => {
  let {
    slots,
    attrs
  } = _ref;
  const _a = _extends(_extends({}, props), attrs), {
    ellipsis,
    rel
  } = _a, restProps = __rest$1(_a, ["ellipsis", "rel"]);
  warning$1();
  const mergedProps = _extends(_extends({}, restProps), {
    rel: rel === void 0 && restProps.target === "_blank" ? "noopener noreferrer" : rel,
    ellipsis: !!ellipsis,
    component: "a"
  });
  delete mergedProps.navigate;
  return createVNode(Base$1, mergedProps, slots);
};
Link.displayName = "ATypographyLink";
Link.inheritAttrs = false;
Link.props = linkProps();
const Link$1 = Link;
const paragraphProps = () => omit(baseProps(), ["component"]);
const Paragraph = (props, _ref) => {
  let {
    slots,
    attrs
  } = _ref;
  const paragraphProps2 = _extends(_extends(_extends({}, props), {
    component: "div"
  }), attrs);
  return createVNode(Base$1, paragraphProps2, slots);
};
Paragraph.displayName = "ATypographyParagraph";
Paragraph.inheritAttrs = false;
Paragraph.props = paragraphProps();
const Paragraph$1 = Paragraph;
const textProps = () => _extends(_extends({}, omit(baseProps(), ["component"])), {
  ellipsis: {
    type: [Boolean, Object],
    default: void 0
  }
});
const Text = (props, _ref) => {
  let {
    slots,
    attrs
  } = _ref;
  const {
    ellipsis
  } = props;
  warning$1();
  const textProps2 = _extends(_extends(_extends({}, props), {
    ellipsis: ellipsis && typeof ellipsis === "object" ? omit(ellipsis, ["expandable", "rows"]) : ellipsis,
    component: "span"
  }), attrs);
  return createVNode(Base$1, textProps2, slots);
};
Text.displayName = "ATypographyText";
Text.inheritAttrs = false;
Text.props = textProps();
const Text$1 = Text;
var __rest = function(s2, e2) {
  var t2 = {};
  for (var p in s2)
    if (Object.prototype.hasOwnProperty.call(s2, p) && e2.indexOf(p) < 0)
      t2[p] = s2[p];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p = Object.getOwnPropertySymbols(s2); i2 < p.length; i2++) {
      if (e2.indexOf(p[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i2]))
        t2[p[i2]] = s2[p[i2]];
    }
  return t2;
};
const TITLE_ELE_LIST = tupleNum(1, 2, 3, 4, 5);
const titleProps = () => _extends(_extends({}, omit(baseProps(), ["component", "strong"])), {
  level: Number
});
const Title = (props, _ref) => {
  let {
    slots,
    attrs
  } = _ref;
  const {
    level = 1
  } = props, restProps = __rest(props, ["level"]);
  let component;
  if (TITLE_ELE_LIST.includes(level)) {
    component = `h${level}`;
  } else {
    warning$1();
    component = "h1";
  }
  const titleProps2 = _extends(_extends(_extends({}, restProps), {
    component
  }), attrs);
  return createVNode(Base$1, titleProps2, slots);
};
Title.displayName = "ATypographyTitle";
Title.inheritAttrs = false;
Title.props = titleProps();
const Title$1 = Title;
Typography$1.Text = Text$1;
Typography$1.Title = Title$1;
Typography$1.Paragraph = Paragraph$1;
Typography$1.Link = Link$1;
Typography$1.Base = Base$1;
Typography$1.install = function(app) {
  app.component(Typography$1.name, Typography$1);
  app.component(Typography$1.Text.displayName, Text$1);
  app.component(Typography$1.Title.displayName, Title$1);
  app.component(Typography$1.Paragraph.displayName, Paragraph$1);
  app.component(Typography$1.Link.displayName, Link$1);
  return app;
};
export {
  cacheHas as $,
  getNative as A,
  BaseInput$1 as B,
  CloseCircleFilled$1 as C,
  eq as D,
  isArguments$1 as E,
  arrayPush as F,
  overArg as G,
  isLength as H,
  isIndex as I,
  isArrayLike as J,
  KeyCode$1 as K,
  isBuffer$1 as L,
  MapCache as M,
  isTypedArray$1 as N,
  getTag$1 as O,
  PropTypes$1 as P,
  isPrototype as Q,
  ResizeObserver$1 as R,
  Symbol$2 as S,
  Typography$1 as T,
  baseKeys as U,
  isObject as V,
  Wave as W,
  Set$2 as X,
  setToArray as Y,
  SetCache as Z,
  _extends as _,
  genPresetColor as a,
  createContext as a0,
  tuple as a1,
  booleanType as a2,
  Keyframes as a3,
  initMotion as a4,
  textEllipsis as a5,
  resetIcon as a6,
  genCompactItemStyle as a7,
  someType as a8,
  stringType as a9,
  baseInputProps as aA,
  hasPrefixSuffix as aB,
  hasAddon$1 as aC,
  inputProps$2 as aD,
  fixControlledValue as aE,
  triggerFocus as aF,
  resolveOnChange as aG,
  inputProps$1 as aH,
  useStyle$1 as aI,
  NoFormStatus as aJ,
  TextArea as aK,
  BaseMixin as aL,
  firstNotUndefined as aM,
  hasProp as aN,
  getComponent as aO,
  splitAttrs as aP,
  initInputToken as aQ,
  genInputSmallStyle as aR,
  genBasicInputStyle as aS,
  useLocaleReceiver as aT,
  enUS$1 as aU,
  functionType as aa,
  useInjectFormItemContext as ab,
  FormItemInputContext as ac,
  getMergedStatus as ad,
  useInjectDisabled as ae,
  getTransitionName as af,
  getTransitionDirection as ag,
  getStatusClassNames as ah,
  DefaultRenderEmpty as ai,
  useToken as aj,
  skipFlattenKey as ak,
  genFocusStyle as al,
  Tooltip as am,
  objectType as an,
  getTransitionProps as ao,
  isValid$3 as ap,
  getPropsSlot as aq,
  genFocusOutline as ar,
  TinyColor as as,
  initZoomMotion as at,
  clearFix as au,
  toPx as av,
  camelize as aw,
  arrayType as ax,
  detectFlexGapSupported as ay,
  withInstall as az,
  classNames as b,
  capitalize as c,
  _objectSpread2$1 as d,
  isPresetStatusColor as e,
  eventType as f,
  genComponentStyleHook as g,
  Trigger as h,
  isPresetColor as i,
  cloneElement as j,
  initDefaultProps$1 as k,
  isValidElement as l,
  merge as m,
  flattenChildren as n,
  omit as o,
  canUseDom as p,
  useMergedState as q,
  resetComponent as r,
  supportsPassive$1 as s,
  useState as t,
  useConfigInject as u,
  CheckOutlined$1 as v,
  wrapperRaf as w,
  isObjectLike as x,
  baseGetTag as y,
  isArray$1 as z
};
