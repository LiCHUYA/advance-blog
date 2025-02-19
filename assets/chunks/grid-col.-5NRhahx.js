import { m as configProviderInjectionKey, n as isString, o as isComponentInstance, p as getFirstComponent, _ as _export_sfc, g as getPrefixCls, b as isNumber, I as IconLoading, q as useFormItem, r as useSize, j as isUndefined, t as isNull, k as isObject, v as isFunction, w as IconHover, x as IconClose, B as Button, s as setGlobalConfig, c as getComponentPrefix, i as isArray, y as getFirstElementFromChildren, z as isEmptyChildren, A as mergeFirstChild } from "./index.2Idoq-Jx.js";
import { h as ref, a6 as reactive, N as inject, g as computed, d as defineComponent, y as watch, j as onMounted, A as onUnmounted, ab as cloneVNode, o as openBlock, c as createElementBlock, n as normalizeClass, O as normalizeStyle, k as createBaseVNode, D as resolveComponent, b as createBlock, e as createCommentVNode, a4 as toRefs, I as createVNode, M as mergeProps, a as createTextVNode, P as nextTick, F as Fragment, aa as createSlots, w as withCtx, r as renderSlot, a1 as withModifiers, C as onUpdated, af as onBeforeUnmount, S as readonly, Z as provide, aq as onDeactivated, ai as Teleport, T as Transition, a9 as withDirectives, a8 as vShow } from "./framework.b55ravPP.js";
import { i as index } from "./ResizeObserver.es.O3MJSaTq.js";
const calendarLang = {
  formatYear: "YYYY 年",
  formatMonth: "YYYY 年 MM 月",
  today: "今天",
  view: {
    month: "月",
    year: "年",
    week: "周",
    day: "日"
  },
  month: {
    long: {
      January: "一月",
      February: "二月",
      March: "三月",
      April: "四月",
      May: "五月",
      June: "六月",
      July: "七月",
      August: "八月",
      September: "九月",
      October: "十月",
      November: "十一月",
      December: "十二月"
    },
    short: {
      January: "一月",
      February: "二月",
      March: "三月",
      April: "四月",
      May: "五月",
      June: "六月",
      July: "七月",
      August: "八月",
      September: "九月",
      October: "十月",
      November: "十一月",
      December: "十二月"
    }
  },
  week: {
    long: {
      self: "周",
      monday: "周一",
      tuesday: "周二",
      wednesday: "周三",
      thursday: "周四",
      friday: "周五",
      saturday: "周六",
      sunday: "周日"
    },
    short: {
      self: "周",
      monday: "一",
      tuesday: "二",
      wednesday: "三",
      thursday: "四",
      friday: "五",
      saturday: "六",
      sunday: "日"
    }
  }
};
const lang = {
  locale: "zh-CN",
  empty: {
    description: "暂无数据"
  },
  drawer: {
    okText: "确定",
    cancelText: "取消"
  },
  popconfirm: {
    okText: "确定",
    cancelText: "取消"
  },
  modal: {
    okText: "确定",
    cancelText: "取消"
  },
  pagination: {
    goto: "前往",
    page: "页",
    countPerPage: "条/页",
    total: "共 {0} 条"
  },
  table: {
    okText: "确定",
    resetText: "重置"
  },
  upload: {
    start: "开始",
    cancel: "取消",
    delete: "删除",
    retry: "点击重试",
    buttonText: "点击上传",
    preview: "预览",
    drag: "点击或拖拽文件到此处上传",
    dragHover: "释放文件并开始上传",
    error: "上传失败"
  },
  calendar: calendarLang,
  datePicker: {
    view: calendarLang.view,
    month: calendarLang.month,
    week: calendarLang.week,
    placeholder: {
      date: "请选择日期",
      week: "请选择周",
      month: "请选择月份",
      year: "请选择年份",
      quarter: "请选择季度",
      time: "请选择时间"
    },
    rangePlaceholder: {
      date: ["开始日期", "结束日期"],
      week: ["开始周", "结束周"],
      month: ["开始月份", "结束月份"],
      year: ["开始年份", "结束年份"],
      quarter: ["开始季度", "结束季度"],
      time: ["开始时间", "结束时间"]
    },
    selectTime: "选择时间",
    today: "今天",
    now: "此刻",
    ok: "确定"
  },
  image: {
    loading: "加载中"
  },
  imagePreview: {
    fullScreen: "全屏",
    rotateRight: "向右旋转",
    rotateLeft: "向左旋转",
    zoomIn: "放大",
    zoomOut: "缩小",
    originalSize: "原始尺寸"
  },
  typography: {
    copied: "已复制",
    copy: "复制",
    expand: "展开",
    collapse: "折叠",
    edit: "编辑"
  },
  form: {
    validateMessages: {
      required: "#{field} 是必填项",
      type: {
        string: "#{field} 不是合法的文本类型",
        number: "#{field} 不是合法的数字类型",
        boolean: "#{field} 不是合法的布尔类型",
        array: "#{field} 不是合法的数组类型",
        object: "#{field} 不是合法的对象类型",
        url: "#{field} 不是合法的 url 地址",
        email: "#{field} 不是合法的邮箱地址",
        ip: "#{field} 不是合法的 IP 地址"
      },
      number: {
        min: "`#{value}` 小于最小值 `#{min}`",
        max: "`#{value}` 大于最大值 `#{max}`",
        equal: "`#{value}` 不等于 `#{equal}`",
        range: "`#{value}` 不在 `#{min} ~ #{max}` 范围内",
        positive: "`#{value}` 不是正数",
        negative: "`#{value}` 不是负数"
      },
      array: {
        length: "`#{field}` 个数不等于 #{length}",
        minLength: "`#{field}` 个数最少为 #{minLength}",
        maxLength: "`#{field}` 个数最多为 #{maxLength}",
        includes: "#{field} 不包含 #{includes}",
        deepEqual: "#{field} 不等于 #{deepEqual}",
        empty: "`#{field}` 不是空数组"
      },
      string: {
        minLength: "字符数最少为 #{minLength}",
        maxLength: "字符数最多为 #{maxLength}",
        length: "字符数必须是 #{length}",
        match: "`#{value}` 不符合模式 #{pattern}",
        uppercase: "`#{value}` 必须全大写",
        lowercase: "`#{value}` 必须全小写"
      },
      object: {
        deepEqual: "`#{field}` 不等于期望值",
        hasKeys: "`#{field}` 不包含必须字段",
        empty: "`#{field}` 不是对象"
      },
      boolean: {
        true: "期望是 `true`",
        false: "期望是 `false`"
      }
    }
  }
};
const LOCALE = ref("zh-CN");
const I18N_MESSAGES = reactive({
  "zh-CN": lang
});
const useI18n = () => {
  const configProvider = inject(configProviderInjectionKey, void 0);
  const i18nMessage = computed(() => {
    var _a;
    return (_a = configProvider == null ? void 0 : configProvider.locale) != null ? _a : I18N_MESSAGES[LOCALE.value];
  });
  const locale = computed(() => i18nMessage.value.locale);
  const transform = (key, ...args) => {
    const keyArray = key.split(".");
    let temp = i18nMessage.value;
    for (const keyItem of keyArray) {
      if (!temp[keyItem]) {
        return key;
      }
      temp = temp[keyItem];
    }
    if (isString(temp)) {
      if (args.length > 0) {
        return temp.replace(/{(\d+)}/g, (sub, index2) => {
          var _a;
          return (_a = args[index2]) != null ? _a : sub;
        });
      }
      return temp;
    }
    return temp;
  };
  return {
    i18nMessage,
    locale,
    t: transform
  };
};
var ResizeObserver$1 = defineComponent({
  name: "ResizeObserver",
  emits: [
    "resize"
  ],
  setup(props, {
    emit,
    slots
  }) {
    let resizeObserver;
    const componentRef = ref();
    const element = computed(() => isComponentInstance(componentRef.value) ? componentRef.value.$el : componentRef.value);
    const createResizeObserver = (target2) => {
      if (!target2)
        return;
      resizeObserver = new index((entries) => {
        const entry = entries[0];
        emit("resize", entry);
      });
      resizeObserver.observe(target2);
    };
    const destroyResizeObserver = () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
        resizeObserver = null;
      }
    };
    watch(element, (_element) => {
      if (resizeObserver)
        destroyResizeObserver();
      if (_element)
        createResizeObserver(_element);
    });
    onMounted(() => {
      if (element.value) {
        createResizeObserver(element.value);
      }
    });
    onUnmounted(() => {
      destroyResizeObserver();
    });
    return () => {
      var _a, _b;
      const firstChild = getFirstComponent((_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : []);
      if (firstChild) {
        return cloneVNode(firstChild, {
          ref: componentRef
        }, true);
      }
      return null;
    };
  }
});
const target = typeof window === "undefined" ? global : window;
const raf = target.requestAnimationFrame;
const caf = target.cancelAnimationFrame;
function throttleByRaf(cb) {
  let timer = 0;
  const throttle = (...args) => {
    if (timer) {
      caf(timer);
    }
    timer = raf(() => {
      cb(...args);
      timer = 0;
    });
  };
  throttle.cancel = () => {
    caf(timer);
    timer = 0;
  };
  return throttle;
}
const NOOP = () => {
  return void 0;
};
const getDocumentSize = () => {
  const { body } = document;
  const html = document.documentElement;
  let topBody;
  try {
    const topWindow = window.top || window.self || window;
    topBody = topWindow.document.body;
  } catch {
  }
  return {
    height: Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight, (topBody == null ? void 0 : topBody.scrollHeight) || 0, (topBody == null ? void 0 : topBody.clientHeight) || 0),
    width: Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth, (topBody == null ? void 0 : topBody.scrollWidth) || 0, (topBody == null ? void 0 : topBody.clientWidth) || 0)
  };
};
const isServerRendering = (() => {
  try {
    return !(typeof window !== "undefined" && document !== void 0);
  } catch (e) {
    return true;
  }
})();
const on = (() => {
  if (isServerRendering) {
    return NOOP;
  }
  return (element, event, handler, options = false) => {
    element.addEventListener(event, handler, options);
  };
})();
const off = (() => {
  if (isServerRendering) {
    return NOOP;
  }
  return (element, type, handler, options = false) => {
    element.removeEventListener(type, handler, options);
  };
})();
const querySelector = (selectors, container) => {
  var _a;
  if (isServerRendering) {
    return NOOP();
  }
  return (_a = (container != null ? container : document).querySelector(selectors)) != null ? _a : void 0;
};
const getElement = (target2, container) => {
  if (isString(target2)) {
    const selector = target2[0] === "#" ? `[id='${target2.slice(1)}']` : target2;
    return querySelector(selector, container);
  }
  return target2;
};
const getRelativeRect = (target2, relative) => {
  const targetRect = target2.getBoundingClientRect();
  const relativeRect = relative.getBoundingClientRect();
  return {
    top: targetRect.top - relativeRect.top,
    bottom: relativeRect.bottom - targetRect.bottom,
    left: targetRect.left - relativeRect.left,
    right: relativeRect.right - targetRect.right,
    width: targetRect.width,
    height: targetRect.height
  };
};
const _sfc_main$c = defineComponent({
  name: "IconCheckCircleFill",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-check-circle-fill`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_2$7 = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm10.207-24.379a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0L22 26.172l-4.878-4.88a1 1 0 0 0-1.415 0l-1.414 1.415a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414 0l11.5-11.5Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1);
const _hoisted_3$7 = [
  _hoisted_2$7
];
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
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
  }, _hoisted_3$7, 14, _hoisted_1$7);
}
var _IconCheckCircleFill = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c]]);
const IconCheckCircleFill = Object.assign(_IconCheckCircleFill, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconCheckCircleFill.name, _IconCheckCircleFill);
  }
});
const _sfc_main$b = defineComponent({
  name: "IconExclamationCircleFill",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-exclamation-circle-fill`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_2$6 = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm-2-11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2Zm4-18a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V15Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1);
const _hoisted_3$6 = [
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
  }, _hoisted_3$6, 14, _hoisted_1$6);
}
var _IconExclamationCircleFill = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b]]);
const IconExclamationCircleFill = Object.assign(_IconExclamationCircleFill, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconExclamationCircleFill.name, _IconExclamationCircleFill);
  }
});
const _sfc_main$a = defineComponent({
  name: "IconCloseCircleFill",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-close-circle-fill`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm4.955-27.771-4.95 4.95-4.95-4.95a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 0 1.414l4.95 4.95-4.95 4.95a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-4.95-4.95 4.95-4.95a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1);
const _hoisted_3$5 = [
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
  }, _hoisted_3$5, 14, _hoisted_1$5);
}
var _IconCloseCircleFill = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a]]);
const IconCloseCircleFill = Object.assign(_IconCloseCircleFill, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconCloseCircleFill.name, _IconCloseCircleFill);
  }
});
const INPUT_EVENTS = [
  "onFocus",
  "onFocusin",
  "onFocusout",
  "onBlur",
  "onChange",
  "onBeforeinput",
  "onInput",
  "onReset",
  "onSubmit",
  "onInvalid",
  "onKeydown",
  "onKeypress",
  "onKeyup",
  "onCopy",
  "onCut",
  "onPaste",
  "onCompositionstart",
  "onCompositionupdate",
  "onCompositionend",
  "onSelect",
  "autocomplete",
  "autofocus",
  "maxlength",
  "minlength",
  "name",
  "pattern",
  "readonly",
  "required"
];
const _sfc_main$9 = defineComponent({
  name: "FeedbackIcon",
  components: {
    IconLoading,
    IconCheckCircleFill,
    IconExclamationCircleFill,
    IconCloseCircleFill
  },
  props: {
    type: {
      type: String
    }
  },
  setup(props) {
    const prefixCls = getPrefixCls("feedback-icon");
    const cls = computed(() => [
      prefixCls,
      `${prefixCls}-status-${props.type}`
    ]);
    return {
      cls
    };
  }
});
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_loading = resolveComponent("icon-loading");
  const _component_icon_check_circle_fill = resolveComponent("icon-check-circle-fill");
  const _component_icon_exclamation_circle_fill = resolveComponent("icon-exclamation-circle-fill");
  const _component_icon_close_circle_fill = resolveComponent("icon-close-circle-fill");
  return openBlock(), createElementBlock("span", {
    class: normalizeClass(_ctx.cls)
  }, [
    _ctx.type === "validating" ? (openBlock(), createBlock(_component_icon_loading, { key: 0 })) : _ctx.type === "success" ? (openBlock(), createBlock(_component_icon_check_circle_fill, { key: 1 })) : _ctx.type === "warning" ? (openBlock(), createBlock(_component_icon_exclamation_circle_fill, { key: 2 })) : _ctx.type === "error" ? (openBlock(), createBlock(_component_icon_close_circle_fill, { key: 3 })) : createCommentVNode("v-if", true)
  ], 2);
}
var FeedbackIcon = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9]]);
const Enter = {
  key: "Enter",
  code: "Enter"
};
const Backspace = {
  key: "Backspace",
  code: "Backspace"
};
var __defProp$5 = Object.defineProperty;
var __getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
var __propIsEnum$5 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$5 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$5.call(b, prop))
      __defNormalProp$5(a, prop, b[prop]);
  if (__getOwnPropSymbols$5)
    for (var prop of __getOwnPropSymbols$5(b)) {
      if (__propIsEnum$5.call(b, prop))
        __defNormalProp$5(a, prop, b[prop]);
    }
  return a;
};
const omit = (object, path) => {
  const result = __spreadValues$5({}, object);
  for (const item of path) {
    if (item in result) {
      delete result[item];
    }
  }
  return result;
};
function pick(obj, keys) {
  const clone = {};
  keys.forEach((key) => {
    const k = key;
    if (key in obj) {
      clone[k] = obj[k];
    }
  });
  return clone;
}
function useCursor(input) {
  const selectionRef = ref();
  function recordCursor() {
    if (!input.value)
      return;
    const { selectionStart, selectionEnd, value } = input.value;
    if (selectionStart == null || selectionEnd == null)
      return;
    const beforeTxt = value.slice(0, Math.max(0, selectionStart));
    const afterTxt = value.slice(Math.max(0, selectionEnd));
    selectionRef.value = {
      selectionStart,
      selectionEnd,
      value,
      beforeTxt,
      afterTxt
    };
  }
  function setCursor() {
    if (!input.value || !selectionRef.value)
      return;
    const { value } = input.value;
    const { beforeTxt, afterTxt, selectionStart } = selectionRef.value;
    if (!beforeTxt || !afterTxt || !selectionStart)
      return;
    let startPos = value.length;
    if (value.endsWith(afterTxt)) {
      startPos = value.length - afterTxt.length;
    } else if (value.startsWith(beforeTxt)) {
      startPos = beforeTxt.length;
    } else {
      const beforeLastChar = beforeTxt[selectionStart - 1];
      const newIndex = value.indexOf(beforeLastChar, selectionStart - 1);
      if (newIndex !== -1) {
        startPos = newIndex + 1;
      }
    }
    input.value.setSelectionRange(startPos, startPos);
  }
  return [recordCursor, setCursor];
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
var _Input = defineComponent({
  name: "Input",
  inheritAttrs: false,
  props: {
    modelValue: String,
    defaultValue: {
      type: String,
      default: ""
    },
    size: {
      type: String
    },
    allowClear: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    placeholder: String,
    maxLength: {
      type: [Number, Object],
      default: 0
    },
    showWordLimit: {
      type: Boolean,
      default: false
    },
    wordLength: {
      type: Function
    },
    wordSlice: {
      type: Function
    },
    inputAttrs: {
      type: Object
    },
    type: {
      type: String,
      default: "text"
    }
  },
  emits: {
    "update:modelValue": (value) => true,
    "input": (value, ev) => true,
    "change": (value, ev) => true,
    "pressEnter": (ev) => true,
    "clear": (ev) => true,
    "focus": (ev) => true,
    "blur": (ev) => true
  },
  setup(props, {
    emit,
    slots,
    attrs
  }) {
    const {
      size,
      disabled,
      error,
      modelValue
    } = toRefs(props);
    const prefixCls = getPrefixCls("input");
    const inputRef = ref();
    const {
      mergedSize: _mergedSize,
      mergedDisabled,
      mergedError: _mergedError,
      feedback,
      eventHandlers
    } = useFormItem({
      size,
      disabled,
      error
    });
    const {
      mergedSize
    } = useSize(_mergedSize);
    const [recordCursor, setCursor] = useCursor(inputRef);
    const _value = ref(props.defaultValue);
    const computedValue = computed(() => {
      var _a;
      return (_a = props.modelValue) != null ? _a : _value.value;
    });
    watch(modelValue, (value) => {
      if (isUndefined(value) || isNull(value)) {
        _value.value = "";
      }
    });
    let preValue = computedValue.value;
    const focused = ref(false);
    const showClearBtn = computed(() => props.allowClear && !mergedDisabled.value && Boolean(computedValue.value));
    const isComposition = ref(false);
    const compositionValue = ref("");
    const getValueLength = (value) => {
      var _a;
      if (isFunction(props.wordLength)) {
        return props.wordLength(value);
      }
      return (_a = value.length) != null ? _a : 0;
    };
    const valueLength = computed(() => getValueLength(computedValue.value));
    const mergedError = computed(() => _mergedError.value || Boolean(isObject(props.maxLength) && props.maxLength.errorOnly && valueLength.value > maxLength.value));
    const maxLengthErrorOnly = computed(() => isObject(props.maxLength) && Boolean(props.maxLength.errorOnly));
    const maxLength = computed(() => {
      if (isObject(props.maxLength)) {
        return props.maxLength.length;
      }
      return props.maxLength;
    });
    const defaultMaxLength = computed(() => {
      const bytePerChar = getValueLength("a");
      return Math.floor(maxLength.value / bytePerChar);
    });
    const updateValue = (value) => {
      var _a, _b;
      if (maxLength.value && !maxLengthErrorOnly.value && getValueLength(value) > maxLength.value) {
        value = (_b = (_a = props.wordSlice) == null ? void 0 : _a.call(props, value, maxLength.value)) != null ? _b : value.slice(0, defaultMaxLength.value);
      }
      _value.value = value;
      emit("update:modelValue", value);
    };
    const handleMousedown = (e) => {
      if (inputRef.value && e.target !== inputRef.value) {
        e.preventDefault();
        inputRef.value.focus();
      }
    };
    const emitChange = (value, ev) => {
      var _a, _b;
      if (value !== preValue) {
        preValue = value;
        emit("change", value, ev);
        (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onChange) == null ? void 0 : _b.call(_a, ev);
      }
    };
    const handleFocus = (ev) => {
      var _a, _b;
      focused.value = true;
      preValue = computedValue.value;
      emit("focus", ev);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onFocus) == null ? void 0 : _b.call(_a, ev);
    };
    const handleBlur = (ev) => {
      var _a, _b;
      focused.value = false;
      emitChange(computedValue.value, ev);
      emit("blur", ev);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onBlur) == null ? void 0 : _b.call(_a, ev);
    };
    const handleComposition = (e) => {
      var _a, _b, _c;
      const {
        value,
        selectionStart,
        selectionEnd
      } = e.target;
      if (e.type === "compositionend") {
        isComposition.value = false;
        compositionValue.value = "";
        if (maxLength.value && !maxLengthErrorOnly.value && valueLength.value >= maxLength.value && getValueLength(value) > maxLength.value && selectionStart === selectionEnd) {
          keepControl();
          return;
        }
        updateValue(value);
        emit("input", value, e);
        (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onInput) == null ? void 0 : _b.call(_a, e);
        keepControl();
      } else {
        isComposition.value = true;
        compositionValue.value = computedValue.value + ((_c = e.data) != null ? _c : "");
      }
    };
    const keepControl = () => {
      recordCursor();
      nextTick(() => {
        if (inputRef.value && computedValue.value !== inputRef.value.value) {
          inputRef.value.value = computedValue.value;
          setCursor();
        }
      });
    };
    const handleInput = (e) => {
      var _a, _b;
      const {
        value
      } = e.target;
      if (!isComposition.value) {
        if (maxLength.value && !maxLengthErrorOnly.value && valueLength.value >= maxLength.value && getValueLength(value) > maxLength.value && e.inputType === "insertText") {
          keepControl();
          return;
        }
        updateValue(value);
        emit("input", value, e);
        (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onInput) == null ? void 0 : _b.call(_a, e);
        keepControl();
      }
    };
    const handleClear = (ev) => {
      updateValue("");
      emitChange("", ev);
      emit("clear", ev);
    };
    const handleKeyDown = (e) => {
      const keyCode = e.key || e.code;
      if (!isComposition.value && keyCode === Enter.key) {
        emitChange(computedValue.value, e);
        emit("pressEnter", e);
      }
    };
    const outerCls = computed(() => [`${prefixCls}-outer`, `${prefixCls}-outer-size-${mergedSize.value}`, {
      [`${prefixCls}-outer-has-suffix`]: Boolean(slots.suffix),
      [`${prefixCls}-outer-disabled`]: mergedDisabled.value
    }]);
    const wrapperCls = computed(() => [`${prefixCls}-wrapper`, {
      [`${prefixCls}-error`]: mergedError.value,
      [`${prefixCls}-disabled`]: mergedDisabled.value,
      [`${prefixCls}-focus`]: focused.value
    }]);
    const cls = computed(() => [prefixCls, `${prefixCls}-size-${mergedSize.value}`]);
    const wrapperAttrs = computed(() => omit(attrs, INPUT_EVENTS));
    const inputAttrs = computed(() => pick(attrs, INPUT_EVENTS));
    const mergeInputAttrs = computed(() => {
      const attrs2 = __spreadValues$4(__spreadValues$4({}, inputAttrs.value), props.inputAttrs);
      if (mergedError.value) {
        attrs2["aria-invalid"] = true;
      }
      return attrs2;
    });
    const renderInput = (hasOuter) => {
      var _a;
      return createVNode("span", mergeProps({
        "class": wrapperCls.value,
        "onMousedown": handleMousedown
      }, !hasOuter ? wrapperAttrs.value : void 0), [slots.prefix && createVNode("span", {
        "class": `${prefixCls}-prefix`
      }, [slots.prefix()]), createVNode("input", mergeProps({
        "ref": inputRef,
        "class": cls.value,
        "value": computedValue.value,
        "type": props.type,
        "placeholder": props.placeholder,
        "readonly": props.readonly,
        "disabled": mergedDisabled.value,
        "onInput": handleInput,
        "onKeydown": handleKeyDown,
        "onFocus": handleFocus,
        "onBlur": handleBlur,
        "onCompositionstart": handleComposition,
        "onCompositionupdate": handleComposition,
        "onCompositionend": handleComposition
      }, mergeInputAttrs.value), null), showClearBtn.value && createVNode(IconHover, {
        "prefix": prefixCls,
        "class": `${prefixCls}-clear-btn`,
        "onClick": handleClear
      }, {
        default: () => [createVNode(IconClose, null, null)]
      }), (slots.suffix || Boolean(props.maxLength) && props.showWordLimit || Boolean(feedback.value)) && createVNode("span", {
        "class": [`${prefixCls}-suffix`, {
          [`${prefixCls}-suffix-has-feedback`]: feedback.value
        }]
      }, [Boolean(props.maxLength) && props.showWordLimit && createVNode("span", {
        "class": `${prefixCls}-word-limit`
      }, [valueLength.value, createTextVNode("/"), maxLength.value]), (_a = slots.suffix) == null ? void 0 : _a.call(slots), Boolean(feedback.value) && createVNode(FeedbackIcon, {
        "type": feedback.value
      }, null)])]);
    };
    const render = () => {
      if (slots.prepend || slots.append) {
        return createVNode("span", mergeProps({
          "class": outerCls.value
        }, wrapperAttrs.value), [slots.prepend && createVNode("span", {
          "class": `${prefixCls}-prepend`
        }, [slots.prepend()]), renderInput(true), slots.append && createVNode("span", {
          "class": `${prefixCls}-append`
        }, [slots.append()])]);
      }
      return renderInput();
    };
    return {
      inputRef,
      render
    };
  },
  methods: {
    focus() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.focus();
    },
    blur() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.blur();
    }
  },
  render() {
    return this.render();
  }
});
const _sfc_main$8 = defineComponent({
  name: "IconSearch",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-search`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_2$4 = /* @__PURE__ */ createBaseVNode("path", { d: "M33.072 33.071c6.248-6.248 6.248-16.379 0-22.627-6.249-6.249-16.38-6.249-22.628 0-6.248 6.248-6.248 16.379 0 22.627 6.248 6.248 16.38 6.248 22.628 0Zm0 0 8.485 8.485" }, null, -1);
const _hoisted_3$4 = [
  _hoisted_2$4
];
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
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
  }, _hoisted_3$4, 14, _hoisted_1$4);
}
var _IconSearch = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8]]);
const IconSearch = Object.assign(_IconSearch, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconSearch.name, _IconSearch);
  }
});
var InputSearch = defineComponent({
  name: "InputSearch",
  props: {
    searchButton: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    },
    buttonText: {
      type: String
    },
    buttonProps: {
      type: Object
    }
  },
  emits: {
    search: (value, ev) => true
  },
  setup(props, {
    emit,
    slots
  }) {
    const {
      size
    } = toRefs(props);
    const prefixCls = getPrefixCls("input-search");
    const {
      mergedSize
    } = useSize(size);
    const inputRef = ref();
    const handleClick = (e) => {
      if (inputRef.value.inputRef) {
        emit("search", inputRef.value.inputRef.value, e);
      }
    };
    const renderSuffix = () => {
      var _a;
      return createVNode(Fragment, null, [props.loading ? createVNode(IconLoading, null, null) : createVNode(IconHover, {
        "onClick": handleClick
      }, {
        default: () => [createVNode(IconSearch, null, null)]
      }), (_a = slots.suffix) == null ? void 0 : _a.call(slots)]);
    };
    const renderButton = () => {
      var _a;
      let _slots = {};
      if (props.buttonText || slots["button-default"] || slots["button-icon"]) {
        _slots = {
          default: (_a = slots["button-default"]) != null ? _a : props.buttonText ? () => props.buttonText : void 0,
          icon: slots["button-icon"]
        };
      } else {
        _slots = {
          icon: () => createVNode(IconSearch, null, null)
        };
      }
      return createVNode(Button, mergeProps({
        "type": "primary",
        "class": `${prefixCls}-btn`,
        "disabled": props.disabled,
        "size": mergedSize.value,
        "loading": props.loading
      }, props.buttonProps, {
        "onClick": handleClick
      }), _slots);
    };
    const render = () => createVNode(_Input, {
      "ref": inputRef,
      "class": prefixCls,
      "size": mergedSize.value,
      "disabled": props.disabled
    }, {
      prepend: slots.prepend,
      prefix: slots.prefix,
      suffix: props.searchButton ? slots.suffix : renderSuffix,
      append: props.searchButton ? renderButton : slots.append
    });
    return {
      inputRef,
      render
    };
  },
  methods: {
    focus() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.focus();
    },
    blur() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.blur();
    }
  },
  render() {
    return this.render();
  }
});
const _sfc_main$7 = defineComponent({
  name: "IconEye",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-eye`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_1$3 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("path", {
  "clip-rule": "evenodd",
  d: "M24 37c6.627 0 12.627-4.333 18-13-5.373-8.667-11.373-13-18-13-6.627 0-12.627 4.333-18 13 5.373 8.667 11.373 13 18 13Z"
}, null, -1);
const _hoisted_3$3 = /* @__PURE__ */ createBaseVNode("path", { d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" }, null, -1);
const _hoisted_4$1 = [
  _hoisted_2$3,
  _hoisted_3$3
];
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
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
  }, _hoisted_4$1, 14, _hoisted_1$3);
}
var _IconEye = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7]]);
const IconEye = Object.assign(_IconEye, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconEye.name, _IconEye);
  }
});
const _sfc_main$6 = defineComponent({
  name: "IconEyeInvisible",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-eye-invisible`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("path", { d: "M14 14.5c-2.69 2-5.415 5.33-8 9.5 5.373 8.667 11.373 13 18 13 3.325 0 6.491-1.09 9.5-3.271M17.463 12.5C19 11 21.75 11 24 11c6.627 0 12.627 4.333 18 13-1.766 2.848-3.599 5.228-5.5 7.14" }, null, -1);
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("path", { d: "M29 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM6.852 7.103l34.294 34.294" }, null, -1);
const _hoisted_4 = [
  _hoisted_2$2,
  _hoisted_3$2
];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
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
  }, _hoisted_4, 14, _hoisted_1$2);
}
var _IconEyeInvisible = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
const IconEyeInvisible = Object.assign(_IconEyeInvisible, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconEyeInvisible.name, _IconEyeInvisible);
  }
});
const _sfc_main$5 = defineComponent({
  name: "InputPassword",
  components: {
    IconEye,
    IconEyeInvisible,
    AIconHover: IconHover,
    AInput: _Input
  },
  props: {
    invisibleButton: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    const inputRef = ref();
    const invisible = ref(true);
    const handleInvisible = () => {
      invisible.value = !invisible.value;
    };
    return {
      inputRef,
      invisible,
      handleInvisible
    };
  },
  methods: {
    focus() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.focus();
    },
    blur() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.blur();
    }
  }
});
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_eye = resolveComponent("icon-eye");
  const _component_icon_eye_invisible = resolveComponent("icon-eye-invisible");
  const _component_a_icon_hover = resolveComponent("a-icon-hover");
  const _component_a_input = resolveComponent("a-input");
  return openBlock(), createBlock(_component_a_input, {
    ref: "inputRef",
    type: _ctx.invisible ? "password" : "text"
  }, createSlots({ _: 2 }, [
    _ctx.$slots.prepend ? {
      name: "prepend",
      fn: withCtx(() => [
        renderSlot(_ctx.$slots, "prepend")
      ])
    } : void 0,
    _ctx.$slots.prefix ? {
      name: "prefix",
      fn: withCtx(() => [
        renderSlot(_ctx.$slots, "prefix")
      ])
    } : void 0,
    _ctx.invisibleButton || _ctx.$slots.suffix ? {
      name: "suffix",
      fn: withCtx(() => [
        _ctx.invisibleButton ? (openBlock(), createBlock(_component_a_icon_hover, {
          key: 0,
          onClick: _ctx.handleInvisible,
          onMousedown: _cache[0] || (_cache[0] = withModifiers(() => {
          }, ["prevent"])),
          onMouseup: _cache[1] || (_cache[1] = withModifiers(() => {
          }, ["prevent"]))
        }, {
          default: withCtx(() => [
            !_ctx.invisible ? (openBlock(), createBlock(_component_icon_eye, { key: 0 })) : (openBlock(), createBlock(_component_icon_eye_invisible, { key: 1 }))
          ]),
          _: 1
        }, 8, ["onClick"])) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "suffix")
      ])
    } : void 0,
    _ctx.$slots.append ? {
      name: "append",
      fn: withCtx(() => [
        renderSlot(_ctx.$slots, "append")
      ])
    } : void 0
  ]), 1032, ["type"]);
}
var InputPassword = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
const _sfc_main$4 = defineComponent({
  name: "InputGroup",
  setup() {
    const prefixCls = getPrefixCls("input-group");
    return {
      prefixCls
    };
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.prefixCls)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var InputGroup = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const Input = Object.assign(_Input, {
  Search: InputSearch,
  Password: InputPassword,
  Group: InputGroup,
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Input.name, _Input);
    app.component(componentPrefix + InputGroup.name, InputGroup);
    app.component(componentPrefix + InputSearch.name, InputSearch);
    app.component(componentPrefix + InputPassword.name, InputPassword);
  }
});
var __defProp$3 = Object.defineProperty;
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
const getViewPortSize = () => {
  const { height, width } = getDocumentSize();
  return {
    width: Math.min(width, window.innerWidth),
    height: Math.min(height, window.innerHeight)
  };
};
const getElementScrollRect = (element, containerRect) => {
  var _a, _b;
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top,
    bottom: rect.bottom,
    left: rect.left,
    right: rect.right,
    scrollTop: rect.top - containerRect.top,
    scrollBottom: rect.bottom - containerRect.top,
    scrollLeft: rect.left - containerRect.left,
    scrollRight: rect.right - containerRect.left,
    width: (_a = element.offsetWidth) != null ? _a : element.clientWidth,
    height: (_b = element.offsetHeight) != null ? _b : element.clientHeight
  };
};
const getBoundaryPosition = (position) => {
  switch (position) {
    case "top":
    case "tl":
    case "tr":
      return "top";
    case "bottom":
    case "bl":
    case "br":
      return "bottom";
    case "left":
    case "lt":
    case "lb":
      return "left";
    case "right":
    case "rt":
    case "rb":
      return "right";
    default:
      return "top";
  }
};
const changePosition = (position, direction) => {
  switch (direction) {
    case "top":
      switch (position) {
        case "bottom":
          return "top";
        case "bl":
          return "tl";
        case "br":
          return "tr";
        default:
          return position;
      }
    case "bottom":
      switch (position) {
        case "top":
          return "bottom";
        case "tl":
          return "bl";
        case "tr":
          return "br";
        default:
          return position;
      }
    case "left":
      switch (position) {
        case "right":
          return "left";
        case "rt":
          return "lt";
        case "rb":
          return "lb";
        default:
          return position;
      }
    case "right":
      switch (position) {
        case "left":
          return "right";
        case "lt":
          return "rt";
        case "lb":
          return "rb";
        default:
          return position;
      }
    default:
      return position;
  }
};
const getFitPosition = (position, popupPosition, {
  containerRect,
  triggerRect,
  popupRect,
  offset,
  translate
}) => {
  const direction = getBoundaryPosition(position);
  const viewPortSize = getViewPortSize();
  const viewPortBoundary = {
    top: containerRect.top + popupPosition.top,
    bottom: viewPortSize.height - (containerRect.top + popupPosition.top + popupRect.height),
    left: containerRect.left + popupPosition.left,
    right: viewPortSize.width - (containerRect.left + popupPosition.left + popupRect.width)
  };
  let finalPosition = position;
  if (direction === "top" && viewPortBoundary.top < 0) {
    if (triggerRect.top > popupRect.height) {
      popupPosition.top = -containerRect.top;
    } else {
      const fitPosition = getPopupOffset("bottom", triggerRect, popupRect, {
        offset,
        translate
      });
      if (viewPortSize.height - (containerRect.top + fitPosition.top + popupRect.height) > 0) {
        finalPosition = changePosition(position, "bottom");
        popupPosition.top = fitPosition.top;
      }
    }
  }
  if (direction === "bottom" && viewPortBoundary.bottom < 0) {
    if (viewPortSize.height - triggerRect.bottom > popupRect.height) {
      popupPosition.top = -containerRect.top + (viewPortSize.height - popupRect.height);
    } else {
      const fitPosition = getPopupOffset("top", triggerRect, popupRect, {
        offset,
        translate
      });
      if (containerRect.top + fitPosition.top > 0) {
        finalPosition = changePosition(position, "top");
        popupPosition.top = fitPosition.top;
      }
    }
  }
  if (direction === "left" && viewPortBoundary.left < 0) {
    if (triggerRect.left > popupRect.width) {
      popupPosition.left = -containerRect.left;
    } else {
      const fitPosition = getPopupOffset("right", triggerRect, popupRect, {
        offset,
        translate
      });
      if (viewPortSize.width - (containerRect.left + fitPosition.left + popupRect.width) > 0) {
        finalPosition = changePosition(position, "right");
        popupPosition.left = fitPosition.left;
      }
    }
  }
  if (direction === "right" && viewPortBoundary.right < 0) {
    if (viewPortSize.width - triggerRect.right > popupRect.width) {
      popupPosition.left = -containerRect.left + (viewPortSize.width - popupRect.width);
    } else {
      const fitPosition = getPopupOffset("left", triggerRect, popupRect, {
        offset,
        translate
      });
      if (containerRect.left + fitPosition.left > 0) {
        finalPosition = changePosition(position, "left");
        popupPosition.left = fitPosition.left;
      }
    }
  }
  if (direction === "top" || direction === "bottom") {
    if (viewPortBoundary.left < 0) {
      popupPosition.left = -containerRect.left;
    } else if (viewPortBoundary.right < 0) {
      popupPosition.left = -containerRect.left + (viewPortSize.width - popupRect.width);
    }
  }
  if (direction === "left" || direction === "right") {
    if (viewPortBoundary.top < 0) {
      popupPosition.top = -containerRect.top;
    } else if (viewPortBoundary.bottom < 0) {
      popupPosition.top = -containerRect.top + (viewPortSize.height - popupRect.height);
    }
  }
  return {
    popupPosition,
    position: finalPosition
  };
};
const getPopupOffset = (position, triggerRect, popupRect, {
  offset = 0,
  translate = [0, 0]
} = {}) => {
  var _a;
  const _translate = (_a = isArray(translate) ? translate : translate[position]) != null ? _a : [0, 0];
  switch (position) {
    case "top":
      return {
        left: triggerRect.scrollLeft + Math.round(triggerRect.width / 2) - Math.round(popupRect.width / 2) + _translate[0],
        top: triggerRect.scrollTop - popupRect.height - offset + _translate[1]
      };
    case "tl":
      return {
        left: triggerRect.scrollLeft + _translate[0],
        top: triggerRect.scrollTop - popupRect.height - offset + _translate[1]
      };
    case "tr":
      return {
        left: triggerRect.scrollRight - popupRect.width + _translate[0],
        top: triggerRect.scrollTop - popupRect.height - offset + _translate[1]
      };
    case "bottom":
      return {
        left: triggerRect.scrollLeft + Math.round(triggerRect.width / 2) - Math.round(popupRect.width / 2) + _translate[0],
        top: triggerRect.scrollBottom + offset + _translate[1]
      };
    case "bl":
      return {
        left: triggerRect.scrollLeft + _translate[0],
        top: triggerRect.scrollBottom + offset + _translate[1]
      };
    case "br":
      return {
        left: triggerRect.scrollRight - popupRect.width + _translate[0],
        top: triggerRect.scrollBottom + offset + _translate[1]
      };
    case "left":
      return {
        left: triggerRect.scrollLeft - popupRect.width - offset + _translate[0],
        top: triggerRect.scrollTop + Math.round(triggerRect.height / 2) - Math.round(popupRect.height / 2) + _translate[1]
      };
    case "lt":
      return {
        left: triggerRect.scrollLeft - popupRect.width - offset + _translate[0],
        top: triggerRect.scrollTop + _translate[1]
      };
    case "lb":
      return {
        left: triggerRect.scrollLeft - popupRect.width - offset + _translate[0],
        top: triggerRect.scrollBottom - popupRect.height + _translate[1]
      };
    case "right":
      return {
        left: triggerRect.scrollRight + offset + _translate[0],
        top: triggerRect.scrollTop + Math.round(triggerRect.height / 2) - Math.round(popupRect.height / 2) + _translate[1]
      };
    case "rt":
      return {
        left: triggerRect.scrollRight + offset + _translate[0],
        top: triggerRect.scrollTop + _translate[1]
      };
    case "rb":
      return {
        left: triggerRect.scrollRight + offset + _translate[0],
        top: triggerRect.scrollBottom - popupRect.height + _translate[1]
      };
    default:
      return {
        left: 0,
        top: 0
      };
  }
};
const getTransformOrigin = (position) => {
  let originX = "0";
  if (["top", "bottom"].includes(position)) {
    originX = "50%";
  } else if (["left", "lt", "lb", "tr", "br"].includes(position)) {
    originX = "100%";
  }
  let originY = "0";
  if (["left", "right"].includes(position)) {
    originY = "50%";
  } else if (["top", "tl", "tr", "lt", "rt"].includes(position)) {
    originY = "100%";
  }
  return `${originX} ${originY}`;
};
const getPopupStyle = (position, containerRect, triggerRect, popupRect, {
  offset = 0,
  translate = [0, 0],
  customStyle = {},
  autoFitPosition = false
} = {}) => {
  let finalPosition = position;
  let popupPosition = getPopupOffset(position, triggerRect, popupRect, {
    offset,
    translate
  });
  if (autoFitPosition) {
    const result = getFitPosition(position, popupPosition, {
      containerRect,
      popupRect,
      triggerRect,
      offset,
      translate
    });
    popupPosition = result.popupPosition;
    finalPosition = result.position;
  }
  const style = __spreadValues$3({
    left: `${popupPosition.left}px`,
    top: `${popupPosition.top}px`
  }, customStyle);
  return {
    style,
    position: finalPosition
  };
};
const getArrowStyle = (position, triggerRect, popupRect, {
  customStyle = {}
}) => {
  if (["top", "tl", "tr", "bottom", "bl", "br"].includes(position)) {
    let offsetLeft = Math.abs(triggerRect.scrollLeft + triggerRect.width / 2 - popupRect.scrollLeft);
    if (offsetLeft > popupRect.width - 8) {
      if (triggerRect.width > popupRect.width) {
        offsetLeft = popupRect.width / 2;
      } else {
        offsetLeft = popupRect.width - 8;
      }
    }
    if (["top", "tl", "tr"].includes(position)) {
      return __spreadValues$3({
        left: `${offsetLeft}px`,
        bottom: "0",
        transform: "translate(-50%,50%) rotate(45deg)"
      }, customStyle);
    }
    return __spreadValues$3({
      left: `${offsetLeft}px`,
      top: "0",
      transform: "translate(-50%,-50%) rotate(45deg)"
    }, customStyle);
  }
  let offsetTop = Math.abs(triggerRect.scrollTop + triggerRect.height / 2 - popupRect.scrollTop);
  if (offsetTop > popupRect.height - 8) {
    if (triggerRect.height > popupRect.height) {
      offsetTop = popupRect.height / 2;
    } else {
      offsetTop = popupRect.height - 8;
    }
  }
  if (["left", "lt", "lb"].includes(position)) {
    return __spreadValues$3({
      top: `${offsetTop}px`,
      right: "0",
      transform: "translate(50%,-50%) rotate(45deg)"
    }, customStyle);
  }
  return __spreadValues$3({
    top: `${offsetTop}px`,
    left: "0",
    transform: "translate(-50%,-50%) rotate(45deg)"
  }, customStyle);
};
const isScrollElement = (element) => {
  return element.scrollHeight > element.offsetHeight || element.scrollWidth > element.offsetWidth;
};
const getScrollElements = (container) => {
  var _a;
  const scrollElements = [];
  let element = container;
  while (element && element !== document.documentElement) {
    if (isScrollElement(element)) {
      scrollElements.push(element);
    }
    element = (_a = element.parentElement) != null ? _a : void 0;
  }
  return scrollElements;
};
const useFirstElement = () => {
  const children = {};
  const firstElement = ref();
  const getFirstElement = () => {
    const element = getFirstElementFromChildren(children.value);
    if (element !== firstElement.value) {
      firstElement.value = element;
    }
  };
  onMounted(() => getFirstElement());
  onUpdated(() => getFirstElement());
  return {
    children,
    firstElement
  };
};
var ResizeObserver = defineComponent({
  name: "ResizeObserver",
  props: {
    watchOnUpdated: Boolean
  },
  emits: [
    "resize"
  ],
  setup(props, { emit, slots }) {
    const { children, firstElement } = useFirstElement();
    let resizeObserver;
    const createResizeObserver = (target2) => {
      if (!target2)
        return;
      resizeObserver = new index((entries) => {
        const entry = entries[0];
        emit("resize", entry);
      });
      resizeObserver.observe(target2);
    };
    const destroyResizeObserver = () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
        resizeObserver = null;
      }
    };
    watch(firstElement, (element) => {
      if (resizeObserver)
        destroyResizeObserver();
      if (element) {
        createResizeObserver(element);
      }
    });
    onBeforeUnmount(() => {
      if (resizeObserver)
        destroyResizeObserver();
    });
    return () => {
      var _a;
      children.value = (_a = slots.default) == null ? void 0 : _a.call(slots);
      return children.value;
    };
  }
});
function usePickSlots(slots, slotName) {
  const slot = ref(slots[slotName]);
  onUpdated(() => {
    const newSlot = slots[slotName];
    if (slot.value !== newSlot) {
      slot.value = newSlot;
    }
  });
  return slot;
}
const triggerInjectionKey = Symbol("ArcoTrigger");
const POPUP_BASE_Z_INDEX = 1e3;
const MESSAGE_BASE_Z_INDEX = 5e3;
const Z_INDEX_STEP = 1;
class PopupManager {
  constructor() {
    this.popupStack = {
      popup: /* @__PURE__ */ new Set(),
      dialog: /* @__PURE__ */ new Set(),
      message: /* @__PURE__ */ new Set()
    };
    this.getNextZIndex = (type) => {
      const current = type === "message" ? Array.from(this.popupStack.message).pop() || MESSAGE_BASE_Z_INDEX : Array.from(this.popupStack.popup).pop() || POPUP_BASE_Z_INDEX;
      return current + Z_INDEX_STEP;
    };
    this.add = (type) => {
      const zIndex = this.getNextZIndex(type);
      this.popupStack[type].add(zIndex);
      if (type === "dialog") {
        this.popupStack.popup.add(zIndex);
      }
      return zIndex;
    };
    this.delete = (zIndex, type) => {
      this.popupStack[type].delete(zIndex);
      if (type === "dialog") {
        this.popupStack.popup.delete(zIndex);
      }
    };
    this.isLastDialog = (zIndex) => {
      if (this.popupStack.dialog.size > 1) {
        return zIndex === Array.from(this.popupStack.dialog).pop();
      }
      return true;
    };
  }
}
const popupManager = new PopupManager();
function usePopupManager(type, {
  visible,
  runOnMounted
} = {}) {
  const zIndex = ref(0);
  const open = () => {
    zIndex.value = popupManager.add(type);
  };
  const close = () => {
    popupManager.delete(zIndex.value, type);
  };
  const isLastDialog = () => {
    if (type === "dialog") {
      return popupManager.isLastDialog(zIndex.value);
    }
    return false;
  };
  watch(() => visible == null ? void 0 : visible.value, (visible2) => {
    if (visible2) {
      open();
    } else {
      close();
    }
  }, {
    immediate: true
  });
  if (runOnMounted) {
    onMounted(() => {
      open();
    });
    onBeforeUnmount(() => {
      close();
    });
  }
  return {
    zIndex: readonly(zIndex),
    open,
    close,
    isLastDialog
  };
}
const useResizeObserver = ({
  elementRef,
  onResize
}) => {
  let resizeObserver;
  const createResizeObserver = () => {
    if (!elementRef.value)
      return;
    resizeObserver = new index((entries) => {
      const entry = entries[0];
      isFunction(onResize) && onResize(entry);
    });
    resizeObserver.observe(elementRef.value);
  };
  const destroyResizeObserver = () => {
    if (resizeObserver) {
      resizeObserver.disconnect();
      resizeObserver = null;
    }
  };
  return {
    createResizeObserver,
    destroyResizeObserver
  };
};
var ClientOnly = defineComponent({
  name: "ClientOnly",
  setup(_, {
    slots
  }) {
    const mounted = ref(false);
    onMounted(() => mounted.value = true);
    return () => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      return null;
    };
  }
});
const useTeleportContainer = ({
  popupContainer,
  visible,
  defaultContainer = "body",
  documentContainer
}) => {
  const teleportContainer = ref(popupContainer.value);
  const containerRef = ref();
  const getContainer = () => {
    const element = getElement(popupContainer.value);
    const _teleportContainer = element ? popupContainer.value : defaultContainer;
    const _containerElement = element != null ? element : documentContainer ? document.documentElement : getElement(defaultContainer);
    if (_teleportContainer !== teleportContainer.value) {
      teleportContainer.value = _teleportContainer;
    }
    if (_containerElement !== containerRef.value) {
      containerRef.value = _containerElement;
    }
  };
  onMounted(() => getContainer());
  watch(visible, (visible2) => {
    if (teleportContainer.value !== popupContainer.value && visible2) {
      getContainer();
    }
  });
  return {
    teleportContainer,
    containerRef
  };
};
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
const TRIGGER_EVENTS = ["onClick", "onMouseenter", "onMouseleave", "onFocusin", "onFocusout", "onContextmenu"];
var _Trigger = defineComponent({
  name: "Trigger",
  inheritAttrs: false,
  props: {
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    defaultPopupVisible: {
      type: Boolean,
      default: false
    },
    trigger: {
      type: [String, Array],
      default: "hover"
    },
    position: {
      type: String,
      default: "bottom"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    popupOffset: {
      type: Number,
      default: 0
    },
    popupTranslate: {
      type: [Array, Object]
    },
    showArrow: {
      type: Boolean,
      default: false
    },
    alignPoint: {
      type: Boolean,
      default: false
    },
    popupHoverStay: {
      type: Boolean,
      default: true
    },
    blurToClose: {
      type: Boolean,
      default: true
    },
    clickToClose: {
      type: Boolean,
      default: true
    },
    clickOutsideToClose: {
      type: Boolean,
      default: true
    },
    unmountOnClose: {
      type: Boolean,
      default: true
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
    popupStyle: {
      type: Object
    },
    animationName: {
      type: String,
      default: "fade-in"
    },
    duration: {
      type: [Number, Object]
    },
    mouseEnterDelay: {
      type: Number,
      default: 100
    },
    mouseLeaveDelay: {
      type: Number,
      default: 100
    },
    focusDelay: {
      type: Number,
      default: 0
    },
    autoFitPopupWidth: {
      type: Boolean,
      default: false
    },
    autoFitPopupMinWidth: {
      type: Boolean,
      default: false
    },
    autoFixPosition: {
      type: Boolean,
      default: true
    },
    popupContainer: {
      type: [String, Object]
    },
    updateAtScroll: {
      type: Boolean,
      default: false
    },
    autoFitTransformOrigin: {
      type: Boolean,
      default: false
    },
    hideEmpty: {
      type: Boolean,
      default: false
    },
    openedClass: {
      type: [String, Array, Object]
    },
    autoFitPosition: {
      type: Boolean,
      default: true
    },
    renderToBody: {
      type: Boolean,
      default: true
    },
    preventFocus: {
      type: Boolean,
      default: false
    },
    scrollToClose: {
      type: Boolean,
      default: false
    },
    scrollToCloseDistance: {
      type: Number,
      default: 0
    }
  },
  emits: {
    "update:popupVisible": (visible) => true,
    "popupVisibleChange": (visible) => true,
    "show": () => true,
    "hide": () => true,
    "resize": () => true
  },
  setup(props, {
    emit,
    slots,
    attrs
  }) {
    const {
      popupContainer
    } = toRefs(props);
    const prefixCls = getPrefixCls("trigger");
    const popupAttrs = computed(() => omit(attrs, TRIGGER_EVENTS));
    const configCtx = inject(configProviderInjectionKey, void 0);
    const triggerMethods = computed(() => [].concat(props.trigger));
    const childrenRefs = /* @__PURE__ */ new Set();
    const triggerCtx = inject(triggerInjectionKey, void 0);
    const {
      children,
      firstElement
    } = useFirstElement();
    const popupRef = ref();
    const popupVisible = ref(props.defaultPopupVisible);
    const popupPosition = ref(props.position);
    const popupStyle = ref({});
    const transformStyle = ref({});
    const arrowStyle = ref({});
    const arrowRef = ref();
    const mousePosition = ref({
      top: 0,
      left: 0
    });
    let scrollPosition = null;
    let windowScrollPosition = null;
    const computedVisible = computed(() => {
      var _a;
      return (_a = props.popupVisible) != null ? _a : popupVisible.value;
    });
    const {
      teleportContainer,
      containerRef
    } = useTeleportContainer({
      popupContainer,
      visible: computedVisible,
      documentContainer: true
    });
    const {
      zIndex
    } = usePopupManager("popup", {
      visible: computedVisible
    });
    let delayTimer = 0;
    let outsideListener = false;
    let windowListener = false;
    const cleanDelayTimer = () => {
      if (delayTimer) {
        window.clearTimeout(delayTimer);
        delayTimer = 0;
      }
    };
    const updateMousePosition = (e) => {
      if (props.alignPoint) {
        const {
          pageX,
          pageY
        } = e;
        mousePosition.value = {
          top: pageY,
          left: pageX
        };
      }
    };
    const updatePopupStyle = () => {
      if (!firstElement.value || !popupRef.value || !containerRef.value) {
        return;
      }
      const containerRect = containerRef.value.getBoundingClientRect();
      const triggerRect = props.alignPoint ? {
        top: mousePosition.value.top,
        bottom: mousePosition.value.top,
        left: mousePosition.value.left,
        right: mousePosition.value.left,
        scrollTop: mousePosition.value.top,
        scrollBottom: mousePosition.value.top,
        scrollLeft: mousePosition.value.left,
        scrollRight: mousePosition.value.left,
        width: 0,
        height: 0
      } : getElementScrollRect(firstElement.value, containerRect);
      const getPopupRect = () => getElementScrollRect(popupRef.value, containerRect);
      const popupRect = getPopupRect();
      const {
        style,
        position
      } = getPopupStyle(props.position, containerRect, triggerRect, popupRect, {
        offset: props.popupOffset,
        translate: props.popupTranslate,
        customStyle: props.popupStyle,
        autoFitPosition: props.autoFitPosition
      });
      if (props.autoFitTransformOrigin) {
        transformStyle.value = {
          transformOrigin: getTransformOrigin(position)
        };
      }
      if (props.autoFitPopupMinWidth) {
        style.minWidth = `${triggerRect.width}px`;
      } else if (props.autoFitPopupWidth) {
        style.width = `${triggerRect.width}px`;
      }
      if (popupPosition.value !== position) {
        popupPosition.value = position;
      }
      popupStyle.value = style;
      if (props.showArrow) {
        nextTick(() => {
          arrowStyle.value = getArrowStyle(position, triggerRect, getPopupRect(), {
            customStyle: props.arrowStyle
          });
        });
      }
    };
    const changeVisible = (visible, delay) => {
      if (visible === computedVisible.value && delayTimer === 0) {
        return;
      }
      const update = () => {
        popupVisible.value = visible;
        emit("update:popupVisible", visible);
        emit("popupVisibleChange", visible);
        if (visible) {
          nextTick(() => {
            updatePopupStyle();
          });
        }
      };
      if (!visible) {
        scrollPosition = null;
        windowScrollPosition = null;
      }
      if (delay) {
        cleanDelayTimer();
        if (visible !== computedVisible.value) {
          delayTimer = window.setTimeout(update, delay);
        }
      } else {
        update();
      }
    };
    const handleClick = (e) => {
      var _a;
      (_a = attrs.onClick) == null ? void 0 : _a.call(attrs, e);
      if (props.disabled || computedVisible.value && !props.clickToClose) {
        return;
      }
      if (triggerMethods.value.includes("click")) {
        updateMousePosition(e);
        changeVisible(!computedVisible.value);
      } else if (triggerMethods.value.includes("contextMenu") && computedVisible.value) {
        changeVisible(false);
      }
    };
    const handleMouseEnter = (e) => {
      var _a;
      (_a = attrs.onMouseenter) == null ? void 0 : _a.call(attrs, e);
      if (props.disabled || !triggerMethods.value.includes("hover")) {
        return;
      }
      updateMousePosition(e);
      changeVisible(true, props.mouseEnterDelay);
    };
    const handleMouseEnterWithContext = (e) => {
      triggerCtx == null ? void 0 : triggerCtx.onMouseenter(e);
      handleMouseEnter(e);
    };
    const handleMouseLeave = (e) => {
      var _a;
      (_a = attrs.onMouseleave) == null ? void 0 : _a.call(attrs, e);
      if (props.disabled || !triggerMethods.value.includes("hover")) {
        return;
      }
      changeVisible(false, props.mouseLeaveDelay);
    };
    const handleMouseLeaveWithContext = (e) => {
      triggerCtx == null ? void 0 : triggerCtx.onMouseleave(e);
      handleMouseLeave(e);
    };
    const handleFocusin = (e) => {
      var _a;
      (_a = attrs.onFocusin) == null ? void 0 : _a.call(attrs, e);
      if (props.disabled || !triggerMethods.value.includes("focus")) {
        return;
      }
      changeVisible(true, props.focusDelay);
    };
    const handleFocusout = (e) => {
      var _a;
      (_a = attrs.onFocusout) == null ? void 0 : _a.call(attrs, e);
      if (props.disabled || !triggerMethods.value.includes("focus")) {
        return;
      }
      if (!props.blurToClose) {
        return;
      }
      changeVisible(false);
    };
    const handleContextmenu = (e) => {
      var _a;
      (_a = attrs.onContextmenu) == null ? void 0 : _a.call(attrs, e);
      if (props.disabled || !triggerMethods.value.includes("contextMenu") || computedVisible.value && !props.clickToClose) {
        return;
      }
      updateMousePosition(e);
      changeVisible(!computedVisible.value);
      e.preventDefault();
    };
    const addChildRef = (ref2) => {
      childrenRefs.add(ref2);
      triggerCtx == null ? void 0 : triggerCtx.addChildRef(ref2);
    };
    const removeChildRef = (ref2) => {
      childrenRefs.delete(ref2);
      triggerCtx == null ? void 0 : triggerCtx.removeChildRef(ref2);
    };
    provide(triggerInjectionKey, reactive({
      onMouseenter: handleMouseEnterWithContext,
      onMouseleave: handleMouseLeaveWithContext,
      addChildRef,
      removeChildRef
    }));
    const removeOutsideListener = () => {
      off(document.documentElement, "mousedown", handleOutsideClick);
      outsideListener = false;
    };
    const contentSlot = usePickSlots(slots, "content");
    const hidePopup = computed(() => {
      var _a;
      return props.hideEmpty && isEmptyChildren((_a = contentSlot.value) == null ? void 0 : _a.call(contentSlot));
    });
    const handleOutsideClick = (e) => {
      var _a, _b, _c;
      if (((_a = firstElement.value) == null ? void 0 : _a.contains(e.target)) || ((_b = popupRef.value) == null ? void 0 : _b.contains(e.target))) {
        return;
      }
      for (const item of childrenRefs) {
        if ((_c = item.value) == null ? void 0 : _c.contains(e.target)) {
          return;
        }
      }
      removeOutsideListener();
      changeVisible(false);
    };
    const isExceedThreshold = (oldPosition, element) => {
      const [scrollTop, scrollLeft] = oldPosition;
      const {
        scrollTop: newScrollTop,
        scrollLeft: newScrollLeft
      } = element;
      return Math.abs(newScrollTop - scrollTop) >= props.scrollToCloseDistance || Math.abs(newScrollLeft - scrollLeft) >= props.scrollToCloseDistance;
    };
    const handleScroll = throttleByRaf((e) => {
      if (computedVisible.value) {
        if (props.scrollToClose || (configCtx == null ? void 0 : configCtx.scrollToClose)) {
          const element = e.target;
          if (!scrollPosition) {
            scrollPosition = [element.scrollTop, element.scrollLeft];
          }
          if (isExceedThreshold(scrollPosition, element)) {
            changeVisible(false);
          } else {
            updatePopupStyle();
          }
        } else {
          updatePopupStyle();
        }
      }
    });
    const removeWindowScroll = () => {
      off(window, "scroll", onWindowScroll);
      windowListener = false;
    };
    const onWindowScroll = throttleByRaf((e) => {
      const element = e.target.documentElement;
      if (!windowScrollPosition) {
        windowScrollPosition = [element.scrollTop, element.scrollLeft];
      }
      if (isExceedThreshold(windowScrollPosition, element)) {
        changeVisible(false);
        removeWindowScroll();
      }
    });
    const handleResize = () => {
      if (computedVisible.value) {
        updatePopupStyle();
      }
    };
    const onTargetResize = () => {
      handleResize();
      emit("resize");
    };
    const handlePopupMouseDown = (e) => {
      if (props.preventFocus) {
        e.preventDefault();
      }
    };
    triggerCtx == null ? void 0 : triggerCtx.addChildRef(popupRef);
    const triggerCls = computed(() => {
      return computedVisible.value ? props.openedClass : void 0;
    });
    let scrollElements;
    watch(computedVisible, (value) => {
      if (props.clickOutsideToClose) {
        if (!value && outsideListener) {
          removeOutsideListener();
        } else if (value && !outsideListener) {
          on(document.documentElement, "mousedown", handleOutsideClick);
          outsideListener = true;
        }
      }
      if (props.scrollToClose || (configCtx == null ? void 0 : configCtx.scrollToClose)) {
        on(window, "scroll", onWindowScroll);
        windowListener = true;
      }
      if (props.updateAtScroll || (configCtx == null ? void 0 : configCtx.updateAtScroll)) {
        if (value) {
          scrollElements = getScrollElements(firstElement.value);
          for (const item of scrollElements) {
            item.addEventListener("scroll", handleScroll);
          }
        } else if (scrollElements) {
          for (const item of scrollElements) {
            item.removeEventListener("scroll", handleScroll);
          }
          scrollElements = void 0;
        }
      }
      if (value) {
        mounted.value = true;
      }
    });
    watch(() => [props.autoFitPopupWidth, props.autoFitPopupMinWidth], () => {
      if (computedVisible.value) {
        updatePopupStyle();
      }
    });
    const {
      createResizeObserver,
      destroyResizeObserver
    } = useResizeObserver({
      elementRef: containerRef,
      onResize: handleResize
    });
    onMounted(() => {
      createResizeObserver();
      if (computedVisible.value) {
        updatePopupStyle();
        if (props.clickOutsideToClose && !outsideListener) {
          on(document.documentElement, "mousedown", handleOutsideClick);
          outsideListener = true;
        }
        if (props.updateAtScroll || (configCtx == null ? void 0 : configCtx.updateAtScroll)) {
          scrollElements = getScrollElements(firstElement.value);
          for (const item of scrollElements) {
            item.addEventListener("scroll", handleScroll);
          }
        }
      }
    });
    onUpdated(() => {
      if (computedVisible.value) {
        updatePopupStyle();
      }
    });
    onDeactivated(() => {
      changeVisible(false);
    });
    onBeforeUnmount(() => {
      triggerCtx == null ? void 0 : triggerCtx.removeChildRef(popupRef);
      destroyResizeObserver();
      if (outsideListener) {
        removeOutsideListener();
      }
      if (windowListener) {
        removeWindowScroll();
      }
      if (scrollElements) {
        for (const item of scrollElements) {
          item.removeEventListener("scroll", handleScroll);
        }
        scrollElements = void 0;
      }
    });
    const mounted = ref(computedVisible.value);
    const isAnimation = ref(false);
    const onAnimationStart = () => {
      isAnimation.value = true;
    };
    const handleShow = () => {
      isAnimation.value = false;
      if (computedVisible.value) {
        emit("show");
      }
    };
    const handleHide = () => {
      isAnimation.value = false;
      if (!computedVisible.value) {
        mounted.value = false;
        emit("hide");
      }
    };
    return () => {
      var _a, _b;
      children.value = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : [];
      mergeFirstChild(children.value, {
        class: triggerCls.value,
        onClick: handleClick,
        onMouseenter: handleMouseEnter,
        onMouseleave: handleMouseLeave,
        onFocusin: handleFocusin,
        onFocusout: handleFocusout,
        onContextmenu: handleContextmenu
      });
      return createVNode(Fragment, null, [props.autoFixPosition ? createVNode(ResizeObserver, {
        "onResize": onTargetResize
      }, {
        default: () => [children.value]
      }) : children.value, createVNode(ClientOnly, null, {
        default: () => [createVNode(Teleport, {
          "to": teleportContainer.value,
          "disabled": !props.renderToBody
        }, {
          default: () => [(!props.unmountOnClose || computedVisible.value || mounted.value) && !hidePopup.value && createVNode(ResizeObserver, {
            "onResize": handleResize
          }, {
            default: () => [createVNode("div", mergeProps({
              "ref": popupRef,
              "class": [`${prefixCls}-popup`, `${prefixCls}-position-${popupPosition.value}`],
              "style": __spreadProps$1(__spreadValues$2({}, popupStyle.value), {
                zIndex: zIndex.value,
                pointerEvents: isAnimation.value ? "none" : "auto"
              }),
              "trigger-placement": popupPosition.value,
              "onMouseenter": handleMouseEnterWithContext,
              "onMouseleave": handleMouseLeaveWithContext,
              "onMousedown": handlePopupMouseDown
            }, popupAttrs.value), [createVNode(Transition, {
              "name": props.animationName,
              "duration": props.duration,
              "appear": true,
              "onBeforeEnter": onAnimationStart,
              "onAfterEnter": handleShow,
              "onBeforeLeave": onAnimationStart,
              "onAfterLeave": handleHide
            }, {
              default: () => {
                var _a2;
                return [withDirectives(createVNode("div", {
                  "class": `${prefixCls}-popup-wrapper`,
                  "style": transformStyle.value
                }, [createVNode("div", {
                  "class": [`${prefixCls}-content`, props.contentClass],
                  "style": props.contentStyle
                }, [(_a2 = slots.content) == null ? void 0 : _a2.call(slots)]), props.showArrow && createVNode("div", {
                  "ref": arrowRef,
                  "class": [`${prefixCls}-arrow`, props.arrowClass],
                  "style": arrowStyle.value
                }, null)]), [[vShow, computedVisible.value]])];
              }
            })])]
          })]
        })]
      })]);
    };
  }
});
const Trigger = Object.assign(_Trigger, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Trigger.name, _Trigger);
  }
});
const _sfc_main$3 = defineComponent({
  name: "IconDown",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-down`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("path", { d: "M39.6 17.443 24.043 33 8.487 17.443" }, null, -1);
const _hoisted_3$1 = [
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
  }, _hoisted_3$1, 14, _hoisted_1$1);
}
var _IconDown = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const IconDown = Object.assign(_IconDown, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconDown.name, _IconDown);
  }
});
const _sfc_main$2 = defineComponent({
  name: "IconRight",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-right`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_1 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("path", { d: "m16 39.513 15.556-15.557L16 8.4" }, null, -1);
const _hoisted_3 = [
  _hoisted_2
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
  }, _hoisted_3, 14, _hoisted_1);
}
var _IconRight = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const IconRight = Object.assign(_IconRight, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconRight.name, _IconRight);
  }
});
var __defProp$1 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const responsiveArray = [
  "xxl",
  "xl",
  "lg",
  "md",
  "sm",
  "xs"
];
const responsiveMap = {
  xs: "(max-width: 575px)",
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)",
  xxl: "(min-width: 1600px)"
};
let subscribers = [];
let subUid = -1;
let screens = {};
const responsiveObserve = {
  matchHandlers: {},
  dispatch(pointMap, breakpointChecked) {
    screens = pointMap;
    if (subscribers.length < 1) {
      return false;
    }
    subscribers.forEach((item) => {
      item.func(screens, breakpointChecked);
    });
    return true;
  },
  subscribe(func) {
    if (subscribers.length === 0) {
      this.register();
    }
    const token = (++subUid).toString();
    subscribers.push({
      token,
      func
    });
    func(screens, null);
    return token;
  },
  unsubscribe(token) {
    subscribers = subscribers.filter((item) => item.token !== token);
    if (subscribers.length === 0) {
      this.unregister();
    }
  },
  unregister() {
    Object.keys(responsiveMap).forEach((screen) => {
      const matchMediaQuery = responsiveMap[screen];
      if (!matchMediaQuery)
        return;
      const handler = this.matchHandlers[matchMediaQuery];
      if (handler && handler.mql && handler.listener) {
        if (handler.mql.removeEventListener) {
          handler.mql.removeEventListener("change", handler.listener);
        } else {
          handler.mql.removeListener(handler.listener);
        }
      }
    });
  },
  register() {
    Object.keys(responsiveMap).forEach((screen) => {
      const matchMediaQuery = responsiveMap[screen];
      if (!matchMediaQuery)
        return;
      const listener = ({ matches }) => {
        this.dispatch(__spreadProps(__spreadValues$1({}, screens), {
          [screen]: matches
        }), screen);
      };
      const mql = window.matchMedia(matchMediaQuery);
      if (mql.addEventListener) {
        mql.addEventListener("change", listener);
      } else {
        mql.addListener(listener);
      }
      this.matchHandlers[matchMediaQuery] = {
        mql,
        listener
      };
      listener(mql);
    });
  }
};
function isResponsiveValue(val) {
  return isObject(val);
}
function useResponsiveState(val, defaultVal, fallbackToXs = false) {
  const screens2 = ref({
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
    xxl: true
  });
  const result = computed(() => {
    let res = defaultVal;
    if (isResponsiveValue(val.value)) {
      for (let i = 0; i < responsiveArray.length; i++) {
        const breakpoint = responsiveArray[i];
        if ((screens2.value[breakpoint] || breakpoint === "xs" && fallbackToXs) && val.value[breakpoint] !== void 0) {
          res = val.value[breakpoint];
          break;
        }
      }
    } else {
      res = val.value;
    }
    return res;
  });
  let subscribeToken = "";
  onMounted(() => {
    subscribeToken = responsiveObserve.subscribe((screensVal) => {
      if (isResponsiveValue(val.value)) {
        screens2.value = screensVal;
      }
    });
  });
  onUnmounted(() => {
    if (subscribeToken) {
      responsiveObserve.unsubscribe(subscribeToken);
    }
  });
  return result;
}
const RowContextInjectionKey = Symbol("RowContextInjectionKey");
const GridContextInjectionKey = Symbol("GridContextInjectionKey");
const GridDataCollectorInjectionKey = Symbol("GridDataCollectorInjectionKey");
const _sfc_main$1 = defineComponent({
  name: "Row",
  props: {
    gutter: {
      type: [Number, Object, Array],
      default: 0
    },
    justify: {
      type: String,
      default: "start"
    },
    align: {
      type: String,
      default: "start"
    },
    div: {
      type: Boolean
    },
    wrap: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const { gutter, align, justify, div, wrap } = toRefs(props);
    const prefixCls = getPrefixCls("row");
    const classNames = computed(() => {
      return {
        [`${prefixCls}`]: !div.value,
        [`${prefixCls}-nowrap`]: !wrap.value,
        [`${prefixCls}-align-${align.value}`]: align.value,
        [`${prefixCls}-justify-${justify.value}`]: justify.value
      };
    });
    const propGutterHorizontal = computed(() => Array.isArray(gutter.value) ? gutter.value[0] : gutter.value);
    const propGutterVertical = computed(() => Array.isArray(gutter.value) ? gutter.value[1] : 0);
    const gutterHorizontal = useResponsiveState(propGutterHorizontal, 0);
    const gutterVertical = useResponsiveState(propGutterVertical, 0);
    const styles = computed(() => {
      const result = {};
      if ((gutterHorizontal.value || gutterVertical.value) && !div.value) {
        const marginHorizontal = -gutterHorizontal.value / 2;
        const marginVertical = -gutterVertical.value / 2;
        if (marginHorizontal) {
          result.marginLeft = `${marginHorizontal}px`;
          result.marginRight = `${marginHorizontal}px`;
        }
        if (marginVertical) {
          result.marginTop = `${marginVertical}px`;
          result.marginBottom = `${marginVertical}px`;
        }
      }
      return result;
    });
    const resultGutter = computed(() => [
      gutterHorizontal.value,
      gutterVertical.value
    ]);
    provide(RowContextInjectionKey, reactive({
      gutter: resultGutter,
      div
    }));
    return {
      classNames,
      styles
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.classNames),
    style: normalizeStyle(_ctx.styles)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 6);
}
var Row = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
function useResponsiveValue(props) {
  const value = computed(() => {
    const { val, key, xs, sm, md, lg, xl, xxl } = props.value;
    if (!xs && !sm && !md && !lg && !xl && !xxl) {
      return val;
    }
    const result = {};
    responsiveArray.forEach((breakpoint) => {
      const config = props.value[breakpoint];
      if (isNumber(config)) {
        result[breakpoint] = config;
      } else if (isObject(config) && isNumber(config[key])) {
        result[breakpoint] = config[key];
      }
    });
    return result;
  });
  return value;
}
var __defProp = Object.defineProperty;
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
function getAllowableFlexValue(flexValue) {
  if (isString(flexValue) && (["initial", "auto", "none"].includes(flexValue) || /^\d+$/.test(flexValue)) || isNumber(flexValue)) {
    return flexValue;
  }
  if (isString(flexValue) && /^\d+(px|em|rem|%)$/.test(flexValue)) {
    return `0 0 ${flexValue}`;
  }
  return void 0;
}
const _sfc_main = defineComponent({
  name: "Col",
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number
    },
    order: {
      type: Number
    },
    xs: {
      type: [Number, Object]
    },
    sm: {
      type: [Number, Object]
    },
    md: {
      type: [Number, Object]
    },
    lg: {
      type: [Number, Object]
    },
    xl: {
      type: [Number, Object]
    },
    xxl: {
      type: [Number, Object]
    },
    flex: {
      type: [Number, String]
    }
  },
  setup(props) {
    const prefixCls = getPrefixCls("col");
    const rowContext = inject(RowContextInjectionKey, {});
    const flexValue = computed(() => getAllowableFlexValue(props.flex));
    const mergeClassName = computed(() => {
      const { div } = rowContext;
      const { span: span2, offset, order, xs, sm, md, lg, xl, xxl } = props;
      const result = {
        [`${prefixCls}`]: !div,
        [`${prefixCls}-order-${order}`]: order,
        [`${prefixCls}-${span2}`]: !div && !xs && !sm && !md && !lg && !xl && !xxl,
        [`${prefixCls}-offset-${offset}`]: offset && offset > 0
      };
      const screenList = { xs, sm, md, lg, xl, xxl };
      Object.keys(screenList).forEach((screen) => {
        const screenValue = screenList[screen];
        if (screenValue && isNumber(screenValue)) {
          result[`${prefixCls}-${screen}-${screenValue}`] = true;
        } else if (screenValue && isObject(screenValue)) {
          result[`${prefixCls}-${screen}-${screenValue.span}`] = screenValue.span;
          result[`${prefixCls}-${screen}-offset-${screenValue.offset}`] = screenValue.offset;
          result[`${prefixCls}-${screen}-order-${screenValue.order}`] = screenValue.order;
        }
      });
      return result;
    });
    const classNames = computed(() => {
      return flexValue.value ? prefixCls : mergeClassName.value;
    });
    const paddingStyles = computed(() => {
      const { gutter, div } = rowContext;
      const result = {};
      if (Array.isArray(gutter) && !div) {
        const paddingHorizontal = gutter[0] && gutter[0] / 2 || 0;
        const paddingVertical = gutter[1] && gutter[1] / 2 || 0;
        if (paddingHorizontal) {
          result.paddingLeft = `${paddingHorizontal}px`;
          result.paddingRight = `${paddingHorizontal}px`;
        }
        if (paddingVertical) {
          result.paddingTop = `${paddingVertical}px`;
          result.paddingBottom = `${paddingVertical}px`;
        }
      }
      return result;
    });
    const flexStyles = computed(() => flexValue.value ? { flex: flexValue.value } : {});
    const responsiveConfig = computed(() => pick(props, responsiveArray));
    const propSpan = useResponsiveValue(computed(() => __spreadValues({
      val: props.span,
      key: "span"
    }, responsiveConfig.value)));
    const span = useResponsiveState(propSpan, 24, true);
    return {
      visible: computed(() => !!span.value),
      classNames,
      styles: computed(() => __spreadValues(__spreadValues({}, paddingStyles.value), flexStyles.value))
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.visible ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: normalizeClass(_ctx.classNames),
    style: normalizeStyle(_ctx.styles)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 6)) : createCommentVNode("v-if", true);
}
var Col = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Backspace as B,
  Col as C,
  Enter as E,
  FeedbackIcon as F,
  GridContextInjectionKey as G,
  IconDown as I,
  ResizeObserver$1 as R,
  Trigger as T,
  IconRight as a,
  Input as b,
  IconCheckCircleFill as c,
  useI18n as d,
  caf as e,
  raf as f,
  Row as g,
  on as h,
  off as i,
  ResizeObserver as j,
  getRelativeRect as k,
  INPUT_EVENTS as l,
  IconSearch as m,
  useResponsiveState as n,
  omit as o,
  pick as p,
  GridDataCollectorInjectionKey as q,
  responsiveObserve as r,
  usePickSlots as u
};
