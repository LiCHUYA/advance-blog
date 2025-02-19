import { d as defineComponent, g as computed, h as ref, I as createVNode, ae as isVNode, ab as cloneVNode, N as inject, Z as provide, A as onUnmounted, G as shallowRef, y as watch, z as watchEffect, j as onMounted, a as createTextVNode, F as Fragment, af as onBeforeUnmount, a5 as isRef, a6 as reactive, a4 as toRefs, ag as toRaw, P as nextTick, C as onUpdated, V as toRef, T as Transition, ah as Text, a7 as getCurrentInstance, a9 as withDirectives, a8 as vShow, m as unref, ai as Teleport, aj as onBeforeUpdate, _ as _export_sfc, ak as useCssVars, o as openBlock, c as createElementBlock, k as createBaseVNode, w as withCtx, n as normalizeClass, b as createBlock, t as toDisplayString, al as TransitionGroup, E as renderList, e as createCommentVNode, D as resolveComponent } from "./chunks/framework.b55ravPP.js";
import { A as AntdIcon, C as CloseOutlined } from "./chunks/CloseOutlined.gG5NVs8Y.js";
import { _ as _extends, P as PropTypes, d as _objectSpread2, b as classNames, h as Trigger, B as BaseInput$1, j as cloneElement, R as ResizeObserver, K as KeyCode, k as initDefaultProps, l as isValidElement, n as flattenChildren, s as supportsPassive, w as wrapperRaf, o as omit, p as canUseDom, q as useMergedState, t as useState, C as CloseCircleFilled, v as CheckOutlined, g as genComponentStyleHook, x as isObjectLike, y as baseGetTag, S as Symbol$1, z as isArray, A as getNative, D as eq, M as MapCache, E as isArguments, F as arrayPush, G as overArg, H as isLength, I as isIndex, J as isArrayLike, L as isBuffer, N as isTypedArray, O as getTag, Q as isPrototype, U as baseKeys, V as isObject, X as Set$1, Y as setToArray, Z as SetCache, $ as cacheHas, a0 as createContext, u as useConfigInject, a1 as tuple, a2 as booleanType, a3 as Keyframes, a4 as initMotion, r as resetComponent, a5 as textEllipsis, m as merge, a6 as resetIcon, a7 as genCompactItemStyle, a8 as someType, a9 as stringType, aa as functionType, ab as useInjectFormItemContext, ac as FormItemInputContext, ad as getMergedStatus, ae as useInjectDisabled, af as getTransitionName, ag as getTransitionDirection, ah as getStatusClassNames, ai as DefaultRenderEmpty, aj as useToken, ak as skipFlattenKey, f as eventType, al as genFocusStyle, W as Wave, am as Tooltip, an as objectType, ao as getTransitionProps, ap as isValid, aq as getPropsSlot, ar as genFocusOutline, as as TinyColor, at as initZoomMotion, au as clearFix, av as toPx, aw as camelize, ax as arrayType, ay as detectFlexGapSupported, az as withInstall, aA as baseInputProps, aB as hasPrefixSuffix, aC as hasAddon, aD as inputProps$1, aE as fixControlledValue, aF as triggerFocus, aG as resolveOnChange, aH as inputProps$2, aI as useStyle$5, aJ as NoFormStatus, aK as TextArea, aL as BaseMixin, aM as firstNotUndefined, aN as hasProp, aO as getComponent, aP as splitAttrs, aQ as initInputToken, aR as genInputSmallStyle, aS as genBasicInputStyle, aT as useLocaleReceiver, aU as enUS, T as Typography } from "./chunks/index.jRmT4l5v.js";
import { S as SearchOutlined, R as RightOutlined, U as UnorderedListOutlined, A as AppstoreOutlined, C as CaretRightOutlined } from "./chunks/UnorderedListOutlined.kzUDOZMQ.js";
import { F as FolderOutlined } from "./chunks/FolderOutlined.GvKKgIjs.js";
import "./chunks/ResizeObserver.es.O3MJSaTq.js";
let warned = {};
function warning(valid, message) {
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning, valid, message);
}
const devWarning = (valid, component, message) => {
  warningOnce(valid, `[ant-design-vue: ${component}] ${message}`);
};
function getKey(data, index2) {
  const {
    key
  } = data;
  let value;
  if ("value" in data) {
    ({
      value
    } = data);
  }
  if (key !== null && key !== void 0) {
    return key;
  }
  if (value !== void 0) {
    return value;
  }
  return `rc-index-key-${index2}`;
}
function fillFieldNames(fieldNames, childrenAsData) {
  const {
    label,
    value,
    options
  } = fieldNames || {};
  return {
    label: label || (childrenAsData ? "children" : "label"),
    value: value || "value",
    options: options || "options"
  };
}
function flattenOptions(options) {
  let {
    fieldNames,
    childrenAsData
  } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const flattenList = [];
  const {
    label: fieldLabel,
    value: fieldValue,
    options: fieldOptions
  } = fillFieldNames(fieldNames, false);
  function dig(list, isGroupOption) {
    list.forEach((data) => {
      const label = data[fieldLabel];
      if (isGroupOption || !(fieldOptions in data)) {
        const value = data[fieldValue];
        flattenList.push({
          key: getKey(data, flattenList.length),
          groupOption: isGroupOption,
          data,
          label,
          value
        });
      } else {
        let grpLabel = label;
        if (grpLabel === void 0 && childrenAsData) {
          grpLabel = data.label;
        }
        flattenList.push({
          key: getKey(data, flattenList.length),
          group: true,
          data,
          label: grpLabel
        });
        dig(data[fieldOptions], true);
      }
    });
  }
  dig(options, false);
  return flattenList;
}
function injectPropsWithOption(option) {
  const newOption = _extends({}, option);
  if (!("props" in newOption)) {
    Object.defineProperty(newOption, "props", {
      get() {
        return newOption;
      }
    });
  }
  return newOption;
}
function getSeparatedContent(text, tokens) {
  if (!tokens || !tokens.length) {
    return null;
  }
  let match2 = false;
  function separate(str, _ref) {
    let [token, ...restTokens] = _ref;
    if (!token) {
      return [str];
    }
    const list2 = str.split(token);
    match2 = match2 || list2.length > 1;
    return list2.reduce((prevList, unitStr) => [...prevList, ...separate(unitStr, restTokens)], []).filter((unit) => unit);
  }
  const list = separate(text, tokens);
  return match2 ? list : null;
}
var __rest$f = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
const getBuiltInPlacements = (dropdownMatchSelectWidth) => {
  const adjustX = dropdownMatchSelectWidth === true ? 0 : 1;
  return {
    bottomLeft: {
      points: ["tl", "bl"],
      offset: [0, 4],
      overflow: {
        adjustX,
        adjustY: 1
      }
    },
    bottomRight: {
      points: ["tr", "br"],
      offset: [0, 4],
      overflow: {
        adjustX,
        adjustY: 1
      }
    },
    topLeft: {
      points: ["bl", "tl"],
      offset: [0, -4],
      overflow: {
        adjustX,
        adjustY: 1
      }
    },
    topRight: {
      points: ["br", "tr"],
      offset: [0, -4],
      overflow: {
        adjustX,
        adjustY: 1
      }
    }
  };
};
const SelectTrigger = defineComponent({
  name: "SelectTrigger",
  inheritAttrs: false,
  props: {
    dropdownAlign: Object,
    visible: {
      type: Boolean,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    dropdownClassName: String,
    dropdownStyle: PropTypes.object,
    placement: String,
    empty: {
      type: Boolean,
      default: void 0
    },
    prefixCls: String,
    popupClassName: String,
    animation: String,
    transitionName: String,
    getPopupContainer: Function,
    dropdownRender: Function,
    containerWidth: Number,
    dropdownMatchSelectWidth: PropTypes.oneOfType([Number, Boolean]).def(true),
    popupElement: PropTypes.any,
    direction: String,
    getTriggerDOMNode: Function,
    onPopupVisibleChange: Function,
    onPopupMouseEnter: Function,
    onPopupFocusin: Function,
    onPopupFocusout: Function
  },
  setup(props2, _ref) {
    let {
      slots,
      attrs,
      expose
    } = _ref;
    const builtInPlacements = computed(() => {
      const {
        dropdownMatchSelectWidth
      } = props2;
      return getBuiltInPlacements(dropdownMatchSelectWidth);
    });
    const popupRef = ref();
    expose({
      getPopupElement: () => {
        return popupRef.value;
      }
    });
    return () => {
      const _a = _extends(_extends({}, props2), attrs), {
        empty = false
      } = _a, restProps = __rest$f(_a, ["empty"]);
      const {
        visible,
        dropdownAlign,
        prefixCls,
        popupElement,
        dropdownClassName,
        dropdownStyle,
        direction = "ltr",
        placement,
        dropdownMatchSelectWidth,
        containerWidth,
        dropdownRender,
        animation,
        transitionName,
        getPopupContainer,
        getTriggerDOMNode,
        onPopupVisibleChange,
        onPopupMouseEnter,
        onPopupFocusin,
        onPopupFocusout
      } = restProps;
      const dropdownPrefixCls = `${prefixCls}-dropdown`;
      let popupNode = popupElement;
      if (dropdownRender) {
        popupNode = dropdownRender({
          menuNode: popupElement,
          props: props2
        });
      }
      const mergedTransitionName = animation ? `${dropdownPrefixCls}-${animation}` : transitionName;
      const popupStyle = _extends({
        minWidth: `${containerWidth}px`
      }, dropdownStyle);
      if (typeof dropdownMatchSelectWidth === "number") {
        popupStyle.width = `${dropdownMatchSelectWidth}px`;
      } else if (dropdownMatchSelectWidth) {
        popupStyle.width = `${containerWidth}px`;
      }
      return createVNode(Trigger, _objectSpread2(_objectSpread2({}, props2), {}, {
        "showAction": onPopupVisibleChange ? ["click"] : [],
        "hideAction": onPopupVisibleChange ? ["click"] : [],
        "popupPlacement": placement || (direction === "rtl" ? "bottomRight" : "bottomLeft"),
        "builtinPlacements": builtInPlacements.value,
        "prefixCls": dropdownPrefixCls,
        "popupTransitionName": mergedTransitionName,
        "popupAlign": dropdownAlign,
        "popupVisible": visible,
        "getPopupContainer": getPopupContainer,
        "popupClassName": classNames(dropdownClassName, {
          [`${dropdownPrefixCls}-empty`]: empty
        }),
        "popupStyle": popupStyle,
        "getTriggerDOMNode": getTriggerDOMNode,
        "onPopupVisibleChange": onPopupVisibleChange
      }), {
        default: slots.default,
        popup: () => createVNode("div", {
          "ref": popupRef,
          "onMouseenter": onPopupMouseEnter,
          "onFocusin": onPopupFocusin,
          "onFocusout": onPopupFocusout
        }, [popupNode])
      });
    };
  }
});
const SelectTrigger$1 = SelectTrigger;
const TransBtn = (props2, _ref) => {
  let {
    slots
  } = _ref;
  var _a;
  const {
    class: className,
    customizeIcon,
    customizeIconProps,
    onMousedown,
    onClick
  } = props2;
  let icon;
  if (typeof customizeIcon === "function") {
    icon = customizeIcon(customizeIconProps);
  } else {
    icon = isVNode(customizeIcon) ? cloneVNode(customizeIcon) : customizeIcon;
  }
  return createVNode("span", {
    "class": className,
    "onMousedown": (event) => {
      event.preventDefault();
      if (onMousedown) {
        onMousedown(event);
      }
    },
    "style": {
      userSelect: "none",
      WebkitUserSelect: "none"
    },
    "unselectable": "on",
    "onClick": onClick,
    "aria-hidden": true
  }, [icon !== void 0 ? icon : createVNode("span", {
    "class": className.split(/\s+/).map((cls) => `${cls}-icon`)
  }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)])]);
};
TransBtn.inheritAttrs = false;
TransBtn.displayName = "TransBtn";
TransBtn.props = {
  class: String,
  customizeIcon: PropTypes.any,
  customizeIconProps: PropTypes.any,
  onMousedown: Function,
  onClick: Function
};
const TransBtn$1 = TransBtn;
const inputProps = {
  inputRef: PropTypes.any,
  prefixCls: String,
  id: String,
  inputElement: PropTypes.VueNode,
  disabled: {
    type: Boolean,
    default: void 0
  },
  autofocus: {
    type: Boolean,
    default: void 0
  },
  autocomplete: String,
  editable: {
    type: Boolean,
    default: void 0
  },
  activeDescendantId: String,
  value: String,
  open: {
    type: Boolean,
    default: void 0
  },
  tabindex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Pass accessibility props to input */
  attrs: PropTypes.object,
  onKeydown: {
    type: Function
  },
  onMousedown: {
    type: Function
  },
  onChange: {
    type: Function
  },
  onPaste: {
    type: Function
  },
  onCompositionstart: {
    type: Function
  },
  onCompositionend: {
    type: Function
  },
  onFocus: {
    type: Function
  },
  onBlur: {
    type: Function
  }
};
const Input$1 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "SelectInput",
  inheritAttrs: false,
  props: inputProps,
  setup(props2) {
    let blurTimeout = null;
    const VCSelectContainerEvent = inject("VCSelectContainerEvent");
    return () => {
      var _a;
      const {
        prefixCls,
        id,
        inputElement,
        disabled,
        tabindex,
        autofocus,
        autocomplete,
        editable,
        activeDescendantId,
        value,
        onKeydown,
        onMousedown,
        onChange,
        onPaste,
        onCompositionstart,
        onCompositionend,
        onFocus,
        onBlur,
        open: open2,
        inputRef,
        attrs
      } = props2;
      let inputNode = inputElement || createVNode(BaseInput$1, null, null);
      const inputProps2 = inputNode.props || {};
      const {
        onKeydown: onOriginKeyDown,
        onInput: onOriginInput,
        onFocus: onOriginFocus,
        onBlur: onOriginBlur,
        onMousedown: onOriginMouseDown,
        onCompositionstart: onOriginCompositionStart,
        onCompositionend: onOriginCompositionEnd,
        style
      } = inputProps2;
      inputNode = cloneElement(inputNode, _extends(_extends(_extends(_extends(_extends({
        type: "search"
      }, inputProps2), {
        id,
        ref: inputRef,
        disabled,
        tabindex,
        lazy: false,
        autocomplete: autocomplete || "off",
        autofocus,
        class: classNames(`${prefixCls}-selection-search-input`, (_a = inputNode === null || inputNode === void 0 ? void 0 : inputNode.props) === null || _a === void 0 ? void 0 : _a.class),
        role: "combobox",
        "aria-expanded": open2,
        "aria-haspopup": "listbox",
        "aria-owns": `${id}_list`,
        "aria-autocomplete": "list",
        "aria-controls": `${id}_list`,
        "aria-activedescendant": activeDescendantId
      }), attrs), {
        value: editable ? value : "",
        readonly: !editable,
        unselectable: !editable ? "on" : null,
        style: _extends(_extends({}, style), {
          opacity: editable ? null : 0
        }),
        onKeydown: (event) => {
          onKeydown(event);
          if (onOriginKeyDown) {
            onOriginKeyDown(event);
          }
        },
        onMousedown: (event) => {
          onMousedown(event);
          if (onOriginMouseDown) {
            onOriginMouseDown(event);
          }
        },
        onInput: (event) => {
          onChange(event);
          if (onOriginInput) {
            onOriginInput(event);
          }
        },
        onCompositionstart(event) {
          onCompositionstart(event);
          if (onOriginCompositionStart) {
            onOriginCompositionStart(event);
          }
        },
        onCompositionend(event) {
          onCompositionend(event);
          if (onOriginCompositionEnd) {
            onOriginCompositionEnd(event);
          }
        },
        onPaste,
        onFocus: function() {
          clearTimeout(blurTimeout);
          onOriginFocus && onOriginFocus(arguments.length <= 0 ? void 0 : arguments[0]);
          onFocus && onFocus(arguments.length <= 0 ? void 0 : arguments[0]);
          VCSelectContainerEvent === null || VCSelectContainerEvent === void 0 ? void 0 : VCSelectContainerEvent.focus(arguments.length <= 0 ? void 0 : arguments[0]);
        },
        onBlur: function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          blurTimeout = setTimeout(() => {
            onOriginBlur && onOriginBlur(args[0]);
            onBlur && onBlur(args[0]);
            VCSelectContainerEvent === null || VCSelectContainerEvent === void 0 ? void 0 : VCSelectContainerEvent.blur(args[0]);
          }, 100);
        }
      }), inputNode.type === "textarea" ? {} : {
        type: "search"
      }), true, true);
      return inputNode;
    };
  }
});
const Input$2 = Input$1;
const attributes = `accept acceptcharset accesskey action allowfullscreen allowtransparency
alt async autocomplete autofocus autoplay capture cellpadding cellspacing challenge
charset checked classid classname colspan cols content contenteditable contextmenu
controls coords crossorigin data datetime default defer dir disabled download draggable
enctype form formaction formenctype formmethod formnovalidate formtarget frameborder
headers height hidden high href hreflang htmlfor for httpequiv icon id inputmode integrity
is keyparams keytype kind label lang list loop low manifest marginheight marginwidth max maxlength media
mediagroup method min minlength multiple muted name novalidate nonce open
optimum pattern placeholder poster preload radiogroup readonly rel required
reversed role rowspan rows sandbox scope scoped scrolling seamless selected
shape size sizes span spellcheck src srcdoc srclang srcset start step style
summary tabindex target title type usemap value width wmode wrap`;
const eventsName = `onCopy onCut onPaste onCompositionend onCompositionstart onCompositionupdate onKeydown
    onKeypress onKeyup onFocus onBlur onChange onInput onSubmit onClick onContextmenu onDoubleclick onDblclick
    onDrag onDragend onDragenter onDragexit onDragleave onDragover onDragstart onDrop onMousedown
    onMouseenter onMouseleave onMousemove onMouseout onMouseover onMouseup onSelect onTouchcancel
    onTouchend onTouchmove onTouchstart onTouchstartPassive onTouchmovePassive onScroll onWheel onAbort onCanplay onCanplaythrough
    onDurationchange onEmptied onEncrypted onEnded onError onLoadeddata onLoadedmetadata
    onLoadstart onPause onPlay onPlaying onProgress onRatechange onSeeked onSeeking onStalled onSuspend onTimeupdate onVolumechange onWaiting onLoad onError`;
const propList = `${attributes} ${eventsName}`.split(/[\s\n]+/);
const ariaPrefix = "aria-";
const dataPrefix = "data-";
function match(key, prefix) {
  return key.indexOf(prefix) === 0;
}
function pickAttrs(props2) {
  let ariaOnly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  let mergedConfig;
  if (ariaOnly === false) {
    mergedConfig = {
      aria: true,
      data: true,
      attr: true
    };
  } else if (ariaOnly === true) {
    mergedConfig = {
      aria: true
    };
  } else {
    mergedConfig = _extends({}, ariaOnly);
  }
  const attrs = {};
  Object.keys(props2).forEach((key) => {
    if (
      // Aria
      mergedConfig.aria && (key === "role" || match(key, ariaPrefix)) || // Data
      mergedConfig.data && match(key, dataPrefix) || // Attr
      mergedConfig.attr && (propList.includes(key) || propList.includes(key.toLowerCase()))
    ) {
      attrs[key] = props2[key];
    }
  });
  return attrs;
}
const OverflowContextProviderKey = Symbol("OverflowContextProviderKey");
const OverflowContextProvider = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "OverflowContextProvider",
  inheritAttrs: false,
  props: {
    value: {
      type: Object
    }
  },
  setup(props2, _ref) {
    let {
      slots
    } = _ref;
    provide(OverflowContextProviderKey, computed(() => props2.value));
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
const useInjectOverflowContext = () => {
  return inject(OverflowContextProviderKey, computed(() => null));
};
var __rest$e = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
const UNDEFINED = void 0;
const Item$2 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Item",
  props: {
    prefixCls: String,
    item: PropTypes.any,
    renderItem: Function,
    responsive: Boolean,
    itemKey: {
      type: [String, Number]
    },
    registerSize: Function,
    display: Boolean,
    order: Number,
    component: PropTypes.any,
    invalidate: Boolean
  },
  setup(props2, _ref) {
    let {
      slots,
      expose
    } = _ref;
    const mergedHidden = computed(() => props2.responsive && !props2.display);
    const itemNodeRef = ref();
    expose({
      itemNodeRef
    });
    function internalRegisterSize(width) {
      props2.registerSize(props2.itemKey, width);
    }
    onUnmounted(() => {
      internalRegisterSize(null);
    });
    return () => {
      var _a;
      const {
        prefixCls,
        invalidate,
        item,
        renderItem,
        responsive,
        registerSize,
        itemKey,
        display,
        order,
        component: Component = "div"
      } = props2, restProps = __rest$e(props2, ["prefixCls", "invalidate", "item", "renderItem", "responsive", "registerSize", "itemKey", "display", "order", "component"]);
      const children = (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
      const childNode = renderItem && item !== UNDEFINED ? renderItem(item) : children;
      let overflowStyle;
      if (!invalidate) {
        overflowStyle = {
          opacity: mergedHidden.value ? 0 : 1,
          height: mergedHidden.value ? 0 : UNDEFINED,
          overflowY: mergedHidden.value ? "hidden" : UNDEFINED,
          order: responsive ? order : UNDEFINED,
          pointerEvents: mergedHidden.value ? "none" : UNDEFINED,
          position: mergedHidden.value ? "absolute" : UNDEFINED
        };
      }
      const overflowProps2 = {};
      if (mergedHidden.value) {
        overflowProps2["aria-hidden"] = true;
      }
      return createVNode(ResizeObserver, {
        "disabled": !responsive,
        "onResize": (_ref2) => {
          let {
            offsetWidth
          } = _ref2;
          internalRegisterSize(offsetWidth);
        }
      }, {
        default: () => createVNode(Component, _objectSpread2(_objectSpread2(_objectSpread2({
          "class": classNames(!invalidate && prefixCls),
          "style": overflowStyle
        }, overflowProps2), restProps), {}, {
          "ref": itemNodeRef
        }), {
          default: () => [childNode]
        })
      });
    };
  }
});
var __rest$d = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
const RawItem = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "RawItem",
  inheritAttrs: false,
  props: {
    component: PropTypes.any,
    title: PropTypes.any,
    id: String,
    onMouseenter: {
      type: Function
    },
    onMouseleave: {
      type: Function
    },
    onClick: {
      type: Function
    },
    onKeydown: {
      type: Function
    },
    onFocus: {
      type: Function
    },
    role: String,
    tabindex: Number
  },
  setup(props2, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const context = useInjectOverflowContext();
    return () => {
      var _a;
      if (!context.value) {
        const {
          component: Component = "div"
        } = props2, restProps2 = __rest$d(props2, ["component"]);
        return createVNode(Component, _objectSpread2(_objectSpread2({}, restProps2), attrs), {
          default: () => [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]
        });
      }
      const _b = context.value, {
        className: contextClassName
      } = _b, restContext = __rest$d(_b, ["className"]);
      const {
        class: className
      } = attrs, restProps = __rest$d(attrs, ["class"]);
      return createVNode(OverflowContextProvider, {
        "value": null
      }, {
        default: () => [createVNode(Item$2, _objectSpread2(_objectSpread2(_objectSpread2({
          "class": classNames(contextClassName, className)
        }, restContext), restProps), props2), slots)]
      });
    };
  }
});
var __rest$c = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
const RESPONSIVE = "responsive";
const INVALIDATE = "invalidate";
function defaultRenderRest(omittedItems) {
  return `+ ${omittedItems.length} ...`;
}
const overflowProps = () => {
  return {
    id: String,
    prefixCls: String,
    data: Array,
    itemKey: [String, Number, Function],
    /** Used for `responsive`. It will limit render node to avoid perf issue */
    itemWidth: {
      type: Number,
      default: 10
    },
    renderItem: Function,
    /** @private Do not use in your production. Render raw node that need wrap Item by developer self */
    renderRawItem: Function,
    maxCount: [Number, String],
    renderRest: Function,
    /** @private Do not use in your production. Render raw node that need wrap Item by developer self */
    renderRawRest: Function,
    suffix: PropTypes.any,
    component: String,
    itemComponent: PropTypes.any,
    /** @private This API may be refactor since not well design */
    onVisibleChange: Function,
    /** When set to `full`, ssr will render full items by default and remove at client side */
    ssr: String,
    onMousedown: Function,
    role: String
  };
};
const Overflow = defineComponent({
  name: "Overflow",
  inheritAttrs: false,
  props: overflowProps(),
  emits: ["visibleChange"],
  setup(props2, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const fullySSR = computed(() => props2.ssr === "full");
    const containerWidth = shallowRef(null);
    const mergedContainerWidth = computed(() => containerWidth.value || 0);
    const itemWidths = shallowRef(/* @__PURE__ */ new Map());
    const prevRestWidth = shallowRef(0);
    const restWidth = shallowRef(0);
    const suffixWidth = shallowRef(0);
    const suffixFixedStart = shallowRef(null);
    const displayCount = shallowRef(null);
    const mergedDisplayCount = computed(() => {
      if (displayCount.value === null && fullySSR.value) {
        return Number.MAX_SAFE_INTEGER;
      }
      return displayCount.value || 0;
    });
    const restReady = shallowRef(false);
    const itemPrefixCls = computed(() => `${props2.prefixCls}-item`);
    const mergedRestWidth = computed(() => Math.max(prevRestWidth.value, restWidth.value));
    const isResponsive = computed(() => !!(props2.data.length && props2.maxCount === RESPONSIVE));
    const invalidate = computed(() => props2.maxCount === INVALIDATE);
    const showRest = computed(() => isResponsive.value || typeof props2.maxCount === "number" && props2.data.length > props2.maxCount);
    const mergedData = computed(() => {
      let items = props2.data;
      if (isResponsive.value) {
        if (containerWidth.value === null && fullySSR.value) {
          items = props2.data;
        } else {
          items = props2.data.slice(0, Math.min(props2.data.length, mergedContainerWidth.value / props2.itemWidth));
        }
      } else if (typeof props2.maxCount === "number") {
        items = props2.data.slice(0, props2.maxCount);
      }
      return items;
    });
    const omittedItems = computed(() => {
      if (isResponsive.value) {
        return props2.data.slice(mergedDisplayCount.value + 1);
      }
      return props2.data.slice(mergedData.value.length);
    });
    const getKey2 = (item, index2) => {
      var _a;
      if (typeof props2.itemKey === "function") {
        return props2.itemKey(item);
      }
      return (_a = props2.itemKey && (item === null || item === void 0 ? void 0 : item[props2.itemKey])) !== null && _a !== void 0 ? _a : index2;
    };
    const mergedRenderItem = computed(() => props2.renderItem || ((item) => item));
    const updateDisplayCount = (count, notReady) => {
      displayCount.value = count;
      if (!notReady) {
        restReady.value = count < props2.data.length - 1;
        emit("visibleChange", count);
      }
    };
    const onOverflowResize = (_, element) => {
      containerWidth.value = element.clientWidth;
    };
    const registerSize = (key, width) => {
      const clone = new Map(itemWidths.value);
      if (width === null) {
        clone.delete(key);
      } else {
        clone.set(key, width);
      }
      itemWidths.value = clone;
    };
    const registerOverflowSize = (_, width) => {
      prevRestWidth.value = restWidth.value;
      restWidth.value = width;
    };
    const registerSuffixSize = (_, width) => {
      suffixWidth.value = width;
    };
    const getItemWidth = (index2) => {
      return itemWidths.value.get(getKey2(mergedData.value[index2], index2));
    };
    watch([mergedContainerWidth, itemWidths, restWidth, suffixWidth, () => props2.itemKey, mergedData], () => {
      if (mergedContainerWidth.value && mergedRestWidth.value && mergedData.value) {
        let totalWidth = suffixWidth.value;
        const len = mergedData.value.length;
        const lastIndex = len - 1;
        if (!len) {
          updateDisplayCount(0);
          suffixFixedStart.value = null;
          return;
        }
        for (let i = 0; i < len; i += 1) {
          const currentItemWidth = getItemWidth(i);
          if (currentItemWidth === void 0) {
            updateDisplayCount(i - 1, true);
            break;
          }
          totalWidth += currentItemWidth;
          if (
            // Only one means `totalWidth` is the final width
            lastIndex === 0 && totalWidth <= mergedContainerWidth.value || // Last two width will be the final width
            i === lastIndex - 1 && totalWidth + getItemWidth(lastIndex) <= mergedContainerWidth.value
          ) {
            updateDisplayCount(lastIndex);
            suffixFixedStart.value = null;
            break;
          } else if (totalWidth + mergedRestWidth.value > mergedContainerWidth.value) {
            updateDisplayCount(i - 1);
            suffixFixedStart.value = totalWidth - currentItemWidth - suffixWidth.value + restWidth.value;
            break;
          }
        }
        if (props2.suffix && getItemWidth(0) + suffixWidth.value > mergedContainerWidth.value) {
          suffixFixedStart.value = null;
        }
      }
    });
    return () => {
      const displayRest = restReady.value && !!omittedItems.value.length;
      const {
        itemComponent,
        renderRawItem,
        renderRawRest,
        renderRest,
        prefixCls = "rc-overflow",
        suffix,
        component: Component = "div",
        id,
        onMousedown
      } = props2;
      const {
        class: className,
        style
      } = attrs, restAttrs = __rest$c(attrs, ["class", "style"]);
      let suffixStyle = {};
      if (suffixFixedStart.value !== null && isResponsive.value) {
        suffixStyle = {
          position: "absolute",
          left: `${suffixFixedStart.value}px`,
          top: 0
        };
      }
      const itemSharedProps = {
        prefixCls: itemPrefixCls.value,
        responsive: isResponsive.value,
        component: itemComponent,
        invalidate: invalidate.value
      };
      const internalRenderItemNode = renderRawItem ? (item, index2) => {
        const key = getKey2(item, index2);
        return createVNode(OverflowContextProvider, {
          "key": key,
          "value": _extends(_extends({}, itemSharedProps), {
            order: index2,
            item,
            itemKey: key,
            registerSize,
            display: index2 <= mergedDisplayCount.value
          })
        }, {
          default: () => [renderRawItem(item, index2)]
        });
      } : (item, index2) => {
        const key = getKey2(item, index2);
        return createVNode(Item$2, _objectSpread2(_objectSpread2({}, itemSharedProps), {}, {
          "order": index2,
          "key": key,
          "item": item,
          "renderItem": mergedRenderItem.value,
          "itemKey": key,
          "registerSize": registerSize,
          "display": index2 <= mergedDisplayCount.value
        }), null);
      };
      let restNode = () => null;
      const restContextProps = {
        order: displayRest ? mergedDisplayCount.value : Number.MAX_SAFE_INTEGER,
        className: `${itemPrefixCls.value} ${itemPrefixCls.value}-rest`,
        registerSize: registerOverflowSize,
        display: displayRest
      };
      if (!renderRawRest) {
        const mergedRenderRest = renderRest || defaultRenderRest;
        restNode = () => createVNode(Item$2, _objectSpread2(_objectSpread2({}, itemSharedProps), restContextProps), {
          default: () => typeof mergedRenderRest === "function" ? mergedRenderRest(omittedItems.value) : mergedRenderRest
        });
      } else if (renderRawRest) {
        restNode = () => createVNode(OverflowContextProvider, {
          "value": _extends(_extends({}, itemSharedProps), restContextProps)
        }, {
          default: () => [renderRawRest(omittedItems.value)]
        });
      }
      const overflowNode = () => {
        var _a;
        return createVNode(Component, _objectSpread2({
          "id": id,
          "class": classNames(!invalidate.value && prefixCls, className),
          "style": style,
          "onMousedown": onMousedown,
          "role": props2.role
        }, restAttrs), {
          default: () => [mergedData.value.map(internalRenderItemNode), showRest.value ? restNode() : null, suffix && createVNode(Item$2, _objectSpread2(_objectSpread2({}, itemSharedProps), {}, {
            "order": mergedDisplayCount.value,
            "class": `${itemPrefixCls.value}-suffix`,
            "registerSize": registerSuffixSize,
            "display": true,
            "style": suffixStyle
          }), {
            default: () => suffix
          }), (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]
        });
      };
      return createVNode(ResizeObserver, {
        "disabled": !isResponsive.value,
        "onResize": onOverflowResize
      }, {
        default: overflowNode
      });
    };
  }
});
Overflow.Item = RawItem;
Overflow.RESPONSIVE = RESPONSIVE;
Overflow.INVALIDATE = INVALIDATE;
const Overflow$1 = Overflow;
const TreeSelectLegacyContextPropsKey = Symbol("TreeSelectLegacyContextPropsKey");
function useInjectLegacySelectContext() {
  return inject(TreeSelectLegacyContextPropsKey, {});
}
const props$1 = {
  id: String,
  prefixCls: String,
  values: PropTypes.array,
  open: {
    type: Boolean,
    default: void 0
  },
  searchValue: String,
  inputRef: PropTypes.any,
  placeholder: PropTypes.any,
  disabled: {
    type: Boolean,
    default: void 0
  },
  mode: String,
  showSearch: {
    type: Boolean,
    default: void 0
  },
  autofocus: {
    type: Boolean,
    default: void 0
  },
  autocomplete: String,
  activeDescendantId: String,
  tabindex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  compositionStatus: Boolean,
  removeIcon: PropTypes.any,
  choiceTransitionName: String,
  maxTagCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxTagTextLength: Number,
  maxTagPlaceholder: PropTypes.any.def(() => (omittedValues) => `+ ${omittedValues.length} ...`),
  tagRender: Function,
  onToggleOpen: {
    type: Function
  },
  onRemove: Function,
  onInputChange: Function,
  onInputPaste: Function,
  onInputKeyDown: Function,
  onInputMouseDown: Function,
  onInputCompositionStart: Function,
  onInputCompositionEnd: Function
};
const onPreventMouseDown = (event) => {
  event.preventDefault();
  event.stopPropagation();
};
const SelectSelector = defineComponent({
  name: "MultipleSelectSelector",
  inheritAttrs: false,
  props: props$1,
  setup(props2) {
    const measureRef = shallowRef();
    const inputWidth = shallowRef(0);
    const focused = shallowRef(false);
    const legacyTreeSelectContext = useInjectLegacySelectContext();
    const selectionPrefixCls = computed(() => `${props2.prefixCls}-selection`);
    const inputValue = computed(() => props2.open || props2.mode === "tags" ? props2.searchValue : "");
    const inputEditable = computed(() => props2.mode === "tags" || props2.showSearch && (props2.open || focused.value));
    const targetValue = ref("");
    watchEffect(() => {
      targetValue.value = inputValue.value;
    });
    onMounted(() => {
      watch(targetValue, () => {
        inputWidth.value = measureRef.value.scrollWidth;
      }, {
        flush: "post",
        immediate: true
      });
    });
    function defaultRenderSelector(title, content, itemDisabled, closable, onClose) {
      return createVNode("span", {
        "class": classNames(`${selectionPrefixCls.value}-item`, {
          [`${selectionPrefixCls.value}-item-disabled`]: itemDisabled
        }),
        "title": typeof title === "string" || typeof title === "number" ? title.toString() : void 0
      }, [createVNode("span", {
        "class": `${selectionPrefixCls.value}-item-content`
      }, [content]), closable && createVNode(TransBtn$1, {
        "class": `${selectionPrefixCls.value}-item-remove`,
        "onMousedown": onPreventMouseDown,
        "onClick": onClose,
        "customizeIcon": props2.removeIcon
      }, {
        default: () => [createTextVNode("×")]
      })]);
    }
    function customizeRenderSelector(value, content, itemDisabled, closable, onClose, option) {
      var _a;
      const onMouseDown = (e) => {
        onPreventMouseDown(e);
        props2.onToggleOpen(!open);
      };
      let originData = option;
      if (legacyTreeSelectContext.keyEntities) {
        originData = ((_a = legacyTreeSelectContext.keyEntities[value]) === null || _a === void 0 ? void 0 : _a.node) || {};
      }
      return createVNode("span", {
        "key": value,
        "onMousedown": onMouseDown
      }, [props2.tagRender({
        label: content,
        value,
        disabled: itemDisabled,
        closable,
        onClose,
        option: originData
      })]);
    }
    function renderItem(valueItem) {
      const {
        disabled: itemDisabled,
        label,
        value,
        option
      } = valueItem;
      const closable = !props2.disabled && !itemDisabled;
      let displayLabel = label;
      if (typeof props2.maxTagTextLength === "number") {
        if (typeof label === "string" || typeof label === "number") {
          const strLabel = String(displayLabel);
          if (strLabel.length > props2.maxTagTextLength) {
            displayLabel = `${strLabel.slice(0, props2.maxTagTextLength)}...`;
          }
        }
      }
      const onClose = (event) => {
        var _a;
        if (event)
          event.stopPropagation();
        (_a = props2.onRemove) === null || _a === void 0 ? void 0 : _a.call(props2, valueItem);
      };
      return typeof props2.tagRender === "function" ? customizeRenderSelector(value, displayLabel, itemDisabled, closable, onClose, option) : defaultRenderSelector(label, displayLabel, itemDisabled, closable, onClose);
    }
    function renderRest(omittedValues) {
      const {
        maxTagPlaceholder = (omittedValues2) => `+ ${omittedValues2.length} ...`
      } = props2;
      const content = typeof maxTagPlaceholder === "function" ? maxTagPlaceholder(omittedValues) : maxTagPlaceholder;
      return defaultRenderSelector(content, content, false);
    }
    const handleInput = (e) => {
      const composing = e.target.composing;
      targetValue.value = e.target.value;
      if (!composing) {
        props2.onInputChange(e);
      }
    };
    return () => {
      const {
        id,
        prefixCls,
        values,
        open: open2,
        inputRef,
        placeholder,
        disabled,
        autofocus,
        autocomplete,
        activeDescendantId,
        tabindex,
        compositionStatus,
        onInputPaste,
        onInputKeyDown,
        onInputMouseDown,
        onInputCompositionStart,
        onInputCompositionEnd
      } = props2;
      const inputNode = createVNode("div", {
        "class": `${selectionPrefixCls.value}-search`,
        "style": {
          width: inputWidth.value + "px"
        },
        "key": "input"
      }, [createVNode(Input$2, {
        "inputRef": inputRef,
        "open": open2,
        "prefixCls": prefixCls,
        "id": id,
        "inputElement": null,
        "disabled": disabled,
        "autofocus": autofocus,
        "autocomplete": autocomplete,
        "editable": inputEditable.value,
        "activeDescendantId": activeDescendantId,
        "value": targetValue.value,
        "onKeydown": onInputKeyDown,
        "onMousedown": onInputMouseDown,
        "onChange": handleInput,
        "onPaste": onInputPaste,
        "onCompositionstart": onInputCompositionStart,
        "onCompositionend": onInputCompositionEnd,
        "tabindex": tabindex,
        "attrs": pickAttrs(props2, true),
        "onFocus": () => focused.value = true,
        "onBlur": () => focused.value = false
      }, null), createVNode("span", {
        "ref": measureRef,
        "class": `${selectionPrefixCls.value}-search-mirror`,
        "aria-hidden": true
      }, [targetValue.value, createTextVNode(" ")])]);
      const selectionNode = createVNode(Overflow$1, {
        "prefixCls": `${selectionPrefixCls.value}-overflow`,
        "data": values,
        "renderItem": renderItem,
        "renderRest": renderRest,
        "suffix": inputNode,
        "itemKey": "key",
        "maxCount": props2.maxTagCount,
        "key": "overflow"
      }, null);
      return createVNode(Fragment, null, [selectionNode, !values.length && !inputValue.value && !compositionStatus && createVNode("span", {
        "class": `${selectionPrefixCls.value}-placeholder`
      }, [placeholder])]);
    };
  }
});
const MultipleSelector = SelectSelector;
const props = {
  inputElement: PropTypes.any,
  id: String,
  prefixCls: String,
  values: PropTypes.array,
  open: {
    type: Boolean,
    default: void 0
  },
  searchValue: String,
  inputRef: PropTypes.any,
  placeholder: PropTypes.any,
  compositionStatus: {
    type: Boolean,
    default: void 0
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  mode: String,
  showSearch: {
    type: Boolean,
    default: void 0
  },
  autofocus: {
    type: Boolean,
    default: void 0
  },
  autocomplete: String,
  activeDescendantId: String,
  tabindex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  activeValue: String,
  backfill: {
    type: Boolean,
    default: void 0
  },
  optionLabelRender: Function,
  onInputChange: Function,
  onInputPaste: Function,
  onInputKeyDown: Function,
  onInputMouseDown: Function,
  onInputCompositionStart: Function,
  onInputCompositionEnd: Function
};
const SingleSelector = defineComponent({
  name: "SingleSelector",
  setup(props2) {
    const inputChanged = shallowRef(false);
    const combobox = computed(() => props2.mode === "combobox");
    const inputEditable = computed(() => combobox.value || props2.showSearch);
    const inputValue = computed(() => {
      let inputValue2 = props2.searchValue || "";
      if (combobox.value && props2.activeValue && !inputChanged.value) {
        inputValue2 = props2.activeValue;
      }
      return inputValue2;
    });
    const legacyTreeSelectContext = useInjectLegacySelectContext();
    watch([combobox, () => props2.activeValue], () => {
      if (combobox.value) {
        inputChanged.value = false;
      }
    }, {
      immediate: true
    });
    const hasTextInput = computed(() => props2.mode !== "combobox" && !props2.open && !props2.showSearch ? false : !!inputValue.value || props2.compositionStatus);
    const title = computed(() => {
      const item = props2.values[0];
      return item && (typeof item.label === "string" || typeof item.label === "number") ? item.label.toString() : void 0;
    });
    const renderPlaceholder = () => {
      if (props2.values[0]) {
        return null;
      }
      const hiddenStyle = hasTextInput.value ? {
        visibility: "hidden"
      } : void 0;
      return createVNode("span", {
        "class": `${props2.prefixCls}-selection-placeholder`,
        "style": hiddenStyle
      }, [props2.placeholder]);
    };
    const handleInput = (e) => {
      const composing = e.target.composing;
      if (!composing) {
        inputChanged.value = true;
        props2.onInputChange(e);
      }
    };
    return () => {
      var _a, _b, _c, _d;
      const {
        inputElement,
        prefixCls,
        id,
        values,
        inputRef,
        disabled,
        autofocus,
        autocomplete,
        activeDescendantId,
        open: open2,
        tabindex,
        optionLabelRender,
        onInputKeyDown,
        onInputMouseDown,
        onInputPaste,
        onInputCompositionStart,
        onInputCompositionEnd
      } = props2;
      const item = values[0];
      let titleNode = null;
      if (item && legacyTreeSelectContext.customSlots) {
        const key = (_a = item.key) !== null && _a !== void 0 ? _a : item.value;
        const originData = ((_b = legacyTreeSelectContext.keyEntities[key]) === null || _b === void 0 ? void 0 : _b.node) || {};
        titleNode = legacyTreeSelectContext.customSlots[(_c = originData.slots) === null || _c === void 0 ? void 0 : _c.title] || legacyTreeSelectContext.customSlots.title || item.label;
        if (typeof titleNode === "function") {
          titleNode = titleNode(originData);
        }
      } else {
        titleNode = optionLabelRender && item ? optionLabelRender(item.option) : item === null || item === void 0 ? void 0 : item.label;
      }
      return createVNode(Fragment, null, [createVNode("span", {
        "class": `${prefixCls}-selection-search`
      }, [createVNode(Input$2, {
        "inputRef": inputRef,
        "prefixCls": prefixCls,
        "id": id,
        "open": open2,
        "inputElement": inputElement,
        "disabled": disabled,
        "autofocus": autofocus,
        "autocomplete": autocomplete,
        "editable": inputEditable.value,
        "activeDescendantId": activeDescendantId,
        "value": inputValue.value,
        "onKeydown": onInputKeyDown,
        "onMousedown": onInputMouseDown,
        "onChange": handleInput,
        "onPaste": onInputPaste,
        "onCompositionstart": onInputCompositionStart,
        "onCompositionend": onInputCompositionEnd,
        "tabindex": tabindex,
        "attrs": pickAttrs(props2, true)
      }, null)]), !combobox.value && item && !hasTextInput.value && createVNode("span", {
        "class": `${prefixCls}-selection-item`,
        "title": title.value
      }, [createVNode(Fragment, {
        "key": (_d = item.key) !== null && _d !== void 0 ? _d : item.value
      }, [titleNode])]), renderPlaceholder()]);
    };
  }
});
SingleSelector.props = props;
SingleSelector.inheritAttrs = false;
const SingleSelector$1 = SingleSelector;
function isValidateOpenKey(currentKeyCode) {
  return ![
    // System function button
    KeyCode.ESC,
    KeyCode.SHIFT,
    KeyCode.BACKSPACE,
    KeyCode.TAB,
    KeyCode.WIN_KEY,
    KeyCode.ALT,
    KeyCode.META,
    KeyCode.WIN_KEY_RIGHT,
    KeyCode.CTRL,
    KeyCode.SEMICOLON,
    KeyCode.EQUALS,
    KeyCode.CAPS_LOCK,
    KeyCode.CONTEXT_MENU,
    // F1-F12
    KeyCode.F1,
    KeyCode.F2,
    KeyCode.F3,
    KeyCode.F4,
    KeyCode.F5,
    KeyCode.F6,
    KeyCode.F7,
    KeyCode.F8,
    KeyCode.F9,
    KeyCode.F10,
    KeyCode.F11,
    KeyCode.F12
  ].includes(currentKeyCode);
}
function useLock() {
  let duration = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250;
  let lock = null;
  let timeout;
  onBeforeUnmount(() => {
    clearTimeout(timeout);
  });
  function doLock(locked) {
    if (locked || lock === null) {
      lock = locked;
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      lock = null;
    }, duration);
  }
  return [() => lock, doLock];
}
function createRef() {
  const func = (node) => {
    func.current = node;
  };
  return func;
}
const Selector = defineComponent({
  name: "Selector",
  inheritAttrs: false,
  props: {
    id: String,
    prefixCls: String,
    showSearch: {
      type: Boolean,
      default: void 0
    },
    open: {
      type: Boolean,
      default: void 0
    },
    /** Display in the Selector value, it's not same as `value` prop */
    values: PropTypes.array,
    multiple: {
      type: Boolean,
      default: void 0
    },
    mode: String,
    searchValue: String,
    activeValue: String,
    inputElement: PropTypes.any,
    autofocus: {
      type: Boolean,
      default: void 0
    },
    activeDescendantId: String,
    tabindex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    disabled: {
      type: Boolean,
      default: void 0
    },
    placeholder: PropTypes.any,
    removeIcon: PropTypes.any,
    // Tags
    maxTagCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    maxTagTextLength: Number,
    maxTagPlaceholder: PropTypes.any,
    tagRender: Function,
    optionLabelRender: Function,
    /** Check if `tokenSeparators` contains `\n` or `\r\n` */
    tokenWithEnter: {
      type: Boolean,
      default: void 0
    },
    // Motion
    choiceTransitionName: String,
    onToggleOpen: {
      type: Function
    },
    /** `onSearch` returns go next step boolean to check if need do toggle open */
    onSearch: Function,
    onSearchSubmit: Function,
    onRemove: Function,
    onInputKeyDown: {
      type: Function
    },
    /**
     * @private get real dom for trigger align.
     * This may be removed after React provides replacement of `findDOMNode`
     */
    domRef: Function
  },
  setup(props2, _ref) {
    let {
      expose
    } = _ref;
    const inputRef = createRef();
    const compositionStatus = ref(false);
    const [getInputMouseDown, setInputMouseDown] = useLock(0);
    const onInternalInputKeyDown = (event) => {
      const {
        which
      } = event;
      if (which === KeyCode.UP || which === KeyCode.DOWN) {
        event.preventDefault();
      }
      if (props2.onInputKeyDown) {
        props2.onInputKeyDown(event);
      }
      if (which === KeyCode.ENTER && props2.mode === "tags" && !compositionStatus.value && !props2.open) {
        props2.onSearchSubmit(event.target.value);
      }
      if (isValidateOpenKey(which)) {
        props2.onToggleOpen(true);
      }
    };
    const onInternalInputMouseDown = () => {
      setInputMouseDown(true);
    };
    let pastedText = null;
    const triggerOnSearch = (value) => {
      if (props2.onSearch(value, true, compositionStatus.value) !== false) {
        props2.onToggleOpen(true);
      }
    };
    const onInputCompositionStart = () => {
      compositionStatus.value = true;
    };
    const onInputCompositionEnd = (e) => {
      compositionStatus.value = false;
      if (props2.mode !== "combobox") {
        triggerOnSearch(e.target.value);
      }
    };
    const onInputChange = (event) => {
      let {
        target: {
          value
        }
      } = event;
      if (props2.tokenWithEnter && pastedText && /[\r\n]/.test(pastedText)) {
        const replacedText = pastedText.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ");
        value = value.replace(replacedText, pastedText);
      }
      pastedText = null;
      triggerOnSearch(value);
    };
    const onInputPaste = (e) => {
      const {
        clipboardData
      } = e;
      const value = clipboardData.getData("text");
      pastedText = value;
    };
    const onClick = (_ref2) => {
      let {
        target
      } = _ref2;
      if (target !== inputRef.current) {
        const isIE = document.body.style.msTouchAction !== void 0;
        if (isIE) {
          setTimeout(() => {
            inputRef.current.focus();
          });
        } else {
          inputRef.current.focus();
        }
      }
    };
    const onMousedown = (event) => {
      const inputMouseDown = getInputMouseDown();
      if (event.target !== inputRef.current && !inputMouseDown) {
        event.preventDefault();
      }
      if (props2.mode !== "combobox" && (!props2.showSearch || !inputMouseDown) || !props2.open) {
        if (props2.open) {
          props2.onSearch("", true, false);
        }
        props2.onToggleOpen();
      }
    };
    expose({
      focus: () => {
        inputRef.current.focus();
      },
      blur: () => {
        inputRef.current.blur();
      }
    });
    return () => {
      const {
        prefixCls,
        domRef,
        mode
      } = props2;
      const sharedProps = {
        inputRef,
        onInputKeyDown: onInternalInputKeyDown,
        onInputMouseDown: onInternalInputMouseDown,
        onInputChange,
        onInputPaste,
        compositionStatus: compositionStatus.value,
        onInputCompositionStart,
        onInputCompositionEnd
      };
      const selectNode = mode === "multiple" || mode === "tags" ? createVNode(MultipleSelector, _objectSpread2(_objectSpread2({}, props2), sharedProps), null) : createVNode(SingleSelector$1, _objectSpread2(_objectSpread2({}, props2), sharedProps), null);
      return createVNode("div", {
        "ref": domRef,
        "class": `${prefixCls}-selector`,
        "onClick": onClick,
        "onMousedown": onMousedown
      }, [selectNode]);
    };
  }
});
const Selector$1 = Selector;
function useSelectTriggerControl(refs, open2, triggerOpen) {
  function onGlobalMouseDown(event) {
    var _a, _b, _c;
    let target = event.target;
    if (target.shadowRoot && event.composed) {
      target = event.composedPath()[0] || target;
    }
    const elements = [(_a = refs[0]) === null || _a === void 0 ? void 0 : _a.value, (_c = (_b = refs[1]) === null || _b === void 0 ? void 0 : _b.value) === null || _c === void 0 ? void 0 : _c.getPopupElement()];
    if (open2.value && elements.every((element) => element && !element.contains(target) && element !== target)) {
      triggerOpen(false);
    }
  }
  onMounted(() => {
    window.addEventListener("mousedown", onGlobalMouseDown);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("mousedown", onGlobalMouseDown);
  });
}
function useDelayReset() {
  let timeout = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10;
  const bool = shallowRef(false);
  let delay;
  const cancelLatest = () => {
    clearTimeout(delay);
  };
  onMounted(() => {
    cancelLatest();
  });
  const delaySetBool = (value, callback) => {
    cancelLatest();
    delay = setTimeout(() => {
      bool.value = value;
      if (callback) {
        callback();
      }
    }, timeout);
  };
  return [bool, delaySetBool, cancelLatest];
}
const BaseSelectContextKey = Symbol("BaseSelectContextKey");
function useProvideBaseSelectProps(props2) {
  return provide(BaseSelectContextKey, props2);
}
function useBaseProps() {
  return inject(BaseSelectContextKey, {});
}
const isMobile = () => {
  if (typeof navigator === "undefined" || typeof window === "undefined") {
    return false;
  }
  const agent = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(agent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(agent === null || agent === void 0 ? void 0 : agent.substring(0, 4));
};
function toReactive(objectRef) {
  if (!isRef(objectRef))
    return reactive(objectRef);
  const proxy = new Proxy({}, {
    get(_, p, receiver) {
      return Reflect.get(objectRef.value, p, receiver);
    },
    set(_, p, value) {
      objectRef.value[p] = value;
      return true;
    },
    deleteProperty(_, p) {
      return Reflect.deleteProperty(objectRef.value, p);
    },
    has(_, p) {
      return Reflect.has(objectRef.value, p);
    },
    ownKeys() {
      return Object.keys(objectRef.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: true,
        configurable: true
      };
    }
  });
  return reactive(proxy);
}
var __rest$b = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
const DEFAULT_OMIT_PROPS = ["value", "onChange", "removeIcon", "placeholder", "autofocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "onPopupScroll", "tabindex", "OptionList", "notFoundContent"];
const baseSelectPrivateProps = () => {
  return {
    prefixCls: String,
    id: String,
    omitDomProps: Array,
    // >>> Value
    displayValues: Array,
    onDisplayValuesChange: Function,
    // >>> Active
    /** Current dropdown list active item string value */
    activeValue: String,
    /** Link search input with target element */
    activeDescendantId: String,
    onActiveValueChange: Function,
    // >>> Search
    searchValue: String,
    /** Trigger onSearch, return false to prevent trigger open event */
    onSearch: Function,
    /** Trigger when search text match the `tokenSeparators`. Will provide split content */
    onSearchSplit: Function,
    maxLength: Number,
    OptionList: PropTypes.any,
    /** Tell if provided `options` is empty */
    emptyOptions: Boolean
  };
};
const baseSelectPropsWithoutPrivate = () => {
  return {
    showSearch: {
      type: Boolean,
      default: void 0
    },
    tagRender: {
      type: Function
    },
    optionLabelRender: {
      type: Function
    },
    direction: {
      type: String
    },
    // MISC
    tabindex: Number,
    autofocus: Boolean,
    notFoundContent: PropTypes.any,
    placeholder: PropTypes.any,
    onClear: Function,
    choiceTransitionName: String,
    // >>> Mode
    mode: String,
    // >>> Status
    disabled: {
      type: Boolean,
      default: void 0
    },
    loading: {
      type: Boolean,
      default: void 0
    },
    // >>> Open
    open: {
      type: Boolean,
      default: void 0
    },
    defaultOpen: {
      type: Boolean,
      default: void 0
    },
    onDropdownVisibleChange: {
      type: Function
    },
    // >>> Customize Input
    /** @private Internal usage. Do not use in your production. */
    getInputElement: {
      type: Function
    },
    /** @private Internal usage. Do not use in your production. */
    getRawInputElement: {
      type: Function
    },
    // >>> Selector
    maxTagTextLength: Number,
    maxTagCount: {
      type: [String, Number]
    },
    maxTagPlaceholder: PropTypes.any,
    // >>> Search
    tokenSeparators: {
      type: Array
    },
    // >>> Icons
    allowClear: {
      type: Boolean,
      default: void 0
    },
    showArrow: {
      type: Boolean,
      default: void 0
    },
    inputIcon: PropTypes.any,
    /** Clear all icon */
    clearIcon: PropTypes.any,
    /** Selector remove icon */
    removeIcon: PropTypes.any,
    // >>> Dropdown
    animation: String,
    transitionName: String,
    dropdownStyle: {
      type: Object
    },
    dropdownClassName: String,
    dropdownMatchSelectWidth: {
      type: [Boolean, Number],
      default: void 0
    },
    dropdownRender: {
      type: Function
    },
    dropdownAlign: Object,
    placement: {
      type: String
    },
    getPopupContainer: {
      type: Function
    },
    // >>> Focus
    showAction: {
      type: Array
    },
    onBlur: {
      type: Function
    },
    onFocus: {
      type: Function
    },
    // >>> Rest Events
    onKeyup: Function,
    onKeydown: Function,
    onMousedown: Function,
    onPopupScroll: Function,
    onInputKeyDown: Function,
    onMouseenter: Function,
    onMouseleave: Function,
    onClick: Function
  };
};
const baseSelectProps = () => {
  return _extends(_extends({}, baseSelectPrivateProps()), baseSelectPropsWithoutPrivate());
};
function isMultiple(mode) {
  return mode === "tags" || mode === "multiple";
}
const BaseSelect = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "BaseSelect",
  inheritAttrs: false,
  props: initDefaultProps(baseSelectProps(), {
    showAction: [],
    notFoundContent: "Not Found"
  }),
  setup(props2, _ref) {
    let {
      attrs,
      expose,
      slots
    } = _ref;
    const multiple = computed(() => isMultiple(props2.mode));
    const mergedShowSearch = computed(() => props2.showSearch !== void 0 ? props2.showSearch : multiple.value || props2.mode === "combobox");
    const mobile = shallowRef(false);
    onMounted(() => {
      mobile.value = isMobile();
    });
    const legacyTreeSelectContext = useInjectLegacySelectContext();
    const containerRef = shallowRef(null);
    const selectorDomRef = createRef();
    const triggerRef = shallowRef(null);
    const selectorRef = shallowRef(null);
    const listRef = shallowRef(null);
    const blurRef = ref(false);
    const [mockFocused, setMockFocused, cancelSetMockFocused] = useDelayReset();
    const focus = () => {
      var _a;
      (_a = selectorRef.value) === null || _a === void 0 ? void 0 : _a.focus();
    };
    const blur = () => {
      var _a;
      (_a = selectorRef.value) === null || _a === void 0 ? void 0 : _a.blur();
    };
    expose({
      focus,
      blur,
      scrollTo: (arg) => {
        var _a;
        return (_a = listRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo(arg);
      }
    });
    const mergedSearchValue = computed(() => {
      var _a;
      if (props2.mode !== "combobox") {
        return props2.searchValue;
      }
      const val = (_a = props2.displayValues[0]) === null || _a === void 0 ? void 0 : _a.value;
      return typeof val === "string" || typeof val === "number" ? String(val) : "";
    });
    const initOpen = props2.open !== void 0 ? props2.open : props2.defaultOpen;
    const innerOpen = shallowRef(initOpen);
    const mergedOpen = shallowRef(initOpen);
    const setInnerOpen = (val) => {
      innerOpen.value = props2.open !== void 0 ? props2.open : val;
      mergedOpen.value = innerOpen.value;
    };
    watch(() => props2.open, () => {
      setInnerOpen(props2.open);
    });
    const emptyListContent = computed(() => !props2.notFoundContent && props2.emptyOptions);
    watchEffect(() => {
      mergedOpen.value = innerOpen.value;
      if (props2.disabled || emptyListContent.value && mergedOpen.value && props2.mode === "combobox") {
        mergedOpen.value = false;
      }
    });
    const triggerOpen = computed(() => emptyListContent.value ? false : mergedOpen.value);
    const onToggleOpen = (newOpen) => {
      const nextOpen = newOpen !== void 0 ? newOpen : !mergedOpen.value;
      if (mergedOpen.value !== nextOpen && !props2.disabled) {
        setInnerOpen(nextOpen);
        props2.onDropdownVisibleChange && props2.onDropdownVisibleChange(nextOpen);
        if (!nextOpen && popupFocused.value) {
          popupFocused.value = false;
          setMockFocused(false, () => {
            focusRef.value = false;
            blurRef.value = false;
          });
        }
      }
    };
    const tokenWithEnter = computed(() => (props2.tokenSeparators || []).some((tokenSeparator) => ["\n", "\r\n"].includes(tokenSeparator)));
    const onInternalSearch = (searchText, fromTyping, isCompositing) => {
      var _a, _b;
      let ret = true;
      let newSearchText = searchText;
      (_a = props2.onActiveValueChange) === null || _a === void 0 ? void 0 : _a.call(props2, null);
      const patchLabels = isCompositing ? null : getSeparatedContent(searchText, props2.tokenSeparators);
      if (props2.mode !== "combobox" && patchLabels) {
        newSearchText = "";
        (_b = props2.onSearchSplit) === null || _b === void 0 ? void 0 : _b.call(props2, patchLabels);
        onToggleOpen(false);
        ret = false;
      }
      if (props2.onSearch && mergedSearchValue.value !== newSearchText) {
        props2.onSearch(newSearchText, {
          source: fromTyping ? "typing" : "effect"
        });
      }
      return ret;
    };
    const onInternalSearchSubmit = (searchText) => {
      var _a;
      if (!searchText || !searchText.trim()) {
        return;
      }
      (_a = props2.onSearch) === null || _a === void 0 ? void 0 : _a.call(props2, searchText, {
        source: "submit"
      });
    };
    watch(mergedOpen, () => {
      if (!mergedOpen.value && !multiple.value && props2.mode !== "combobox") {
        onInternalSearch("", false, false);
      }
    }, {
      immediate: true,
      flush: "post"
    });
    watch(() => props2.disabled, () => {
      if (innerOpen.value && !!props2.disabled) {
        setInnerOpen(false);
      }
      if (props2.disabled && !blurRef.value) {
        setMockFocused(false);
      }
    }, {
      immediate: true
    });
    const [getClearLock, setClearLock] = useLock();
    const onInternalKeyDown = function(event) {
      var _a;
      const clearLock = getClearLock();
      const {
        which
      } = event;
      if (which === KeyCode.ENTER) {
        if (props2.mode !== "combobox") {
          event.preventDefault();
        }
        if (!mergedOpen.value) {
          onToggleOpen(true);
        }
      }
      setClearLock(!!mergedSearchValue.value);
      if (which === KeyCode.BACKSPACE && !clearLock && multiple.value && !mergedSearchValue.value && props2.displayValues.length) {
        const cloneDisplayValues = [...props2.displayValues];
        let removedDisplayValue = null;
        for (let i = cloneDisplayValues.length - 1; i >= 0; i -= 1) {
          const current = cloneDisplayValues[i];
          if (!current.disabled) {
            cloneDisplayValues.splice(i, 1);
            removedDisplayValue = current;
            break;
          }
        }
        if (removedDisplayValue) {
          props2.onDisplayValuesChange(cloneDisplayValues, {
            type: "remove",
            values: [removedDisplayValue]
          });
        }
      }
      for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
      }
      if (mergedOpen.value && listRef.value) {
        listRef.value.onKeydown(event, ...rest);
      }
      (_a = props2.onKeydown) === null || _a === void 0 ? void 0 : _a.call(props2, event, ...rest);
    };
    const onInternalKeyUp = function(event) {
      for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        rest[_key2 - 1] = arguments[_key2];
      }
      if (mergedOpen.value && listRef.value) {
        listRef.value.onKeyup(event, ...rest);
      }
      if (props2.onKeyup) {
        props2.onKeyup(event, ...rest);
      }
    };
    const onSelectorRemove = (val) => {
      const newValues = props2.displayValues.filter((i) => i !== val);
      props2.onDisplayValuesChange(newValues, {
        type: "remove",
        values: [val]
      });
    };
    const focusRef = shallowRef(false);
    const onContainerFocus = function() {
      setMockFocused(true);
      if (!props2.disabled) {
        if (props2.onFocus && !focusRef.value) {
          props2.onFocus(...arguments);
        }
        if (props2.showAction && props2.showAction.includes("focus")) {
          onToggleOpen(true);
        }
      }
      focusRef.value = true;
    };
    const popupFocused = ref(false);
    const onContainerBlur = function() {
      if (popupFocused.value) {
        return;
      }
      blurRef.value = true;
      setMockFocused(false, () => {
        focusRef.value = false;
        blurRef.value = false;
        onToggleOpen(false);
      });
      if (props2.disabled) {
        return;
      }
      const searchVal = mergedSearchValue.value;
      if (searchVal) {
        if (props2.mode === "tags") {
          props2.onSearch(searchVal, {
            source: "submit"
          });
        } else if (props2.mode === "multiple") {
          props2.onSearch("", {
            source: "blur"
          });
        }
      }
      if (props2.onBlur) {
        props2.onBlur(...arguments);
      }
    };
    const onPopupFocusin = () => {
      popupFocused.value = true;
    };
    const onPopupFocusout = () => {
      popupFocused.value = false;
    };
    provide("VCSelectContainerEvent", {
      focus: onContainerFocus,
      blur: onContainerBlur
    });
    const activeTimeoutIds = [];
    onMounted(() => {
      activeTimeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
      activeTimeoutIds.splice(0, activeTimeoutIds.length);
    });
    onBeforeUnmount(() => {
      activeTimeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
      activeTimeoutIds.splice(0, activeTimeoutIds.length);
    });
    const onInternalMouseDown = function(event) {
      var _a, _b;
      const {
        target
      } = event;
      const popupElement = (_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.getPopupElement();
      if (popupElement && popupElement.contains(target)) {
        const timeoutId = setTimeout(() => {
          var _a2;
          const index2 = activeTimeoutIds.indexOf(timeoutId);
          if (index2 !== -1) {
            activeTimeoutIds.splice(index2, 1);
          }
          cancelSetMockFocused();
          if (!mobile.value && !popupElement.contains(document.activeElement)) {
            (_a2 = selectorRef.value) === null || _a2 === void 0 ? void 0 : _a2.focus();
          }
        });
        activeTimeoutIds.push(timeoutId);
      }
      for (var _len3 = arguments.length, restArgs = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        restArgs[_key3 - 1] = arguments[_key3];
      }
      (_b = props2.onMousedown) === null || _b === void 0 ? void 0 : _b.call(props2, event, ...restArgs);
    };
    const containerWidth = shallowRef(null);
    const onPopupMouseEnter = () => {
    };
    onMounted(() => {
      watch(triggerOpen, () => {
        var _a;
        if (triggerOpen.value) {
          const newWidth = Math.ceil((_a = containerRef.value) === null || _a === void 0 ? void 0 : _a.offsetWidth);
          if (containerWidth.value !== newWidth && !Number.isNaN(newWidth)) {
            containerWidth.value = newWidth;
          }
        }
      }, {
        immediate: true,
        flush: "post"
      });
    });
    useSelectTriggerControl([containerRef, triggerRef], triggerOpen, onToggleOpen);
    useProvideBaseSelectProps(toReactive(_extends(_extends({}, toRefs(props2)), {
      open: mergedOpen,
      triggerOpen,
      showSearch: mergedShowSearch,
      multiple,
      toggleOpen: onToggleOpen
    })));
    return () => {
      const _a = _extends(_extends({}, props2), attrs), {
        prefixCls,
        id,
        open: open2,
        defaultOpen,
        mode,
        // Search related
        showSearch,
        searchValue,
        onSearch,
        // Icons
        allowClear,
        clearIcon,
        showArrow,
        inputIcon,
        // Others
        disabled,
        loading,
        getInputElement,
        getPopupContainer,
        placement,
        // Dropdown
        animation,
        transitionName,
        dropdownStyle,
        dropdownClassName,
        dropdownMatchSelectWidth,
        dropdownRender,
        dropdownAlign,
        showAction,
        direction,
        // Tags
        tokenSeparators,
        tagRender,
        optionLabelRender,
        // Events
        onPopupScroll,
        onDropdownVisibleChange,
        onFocus,
        onBlur,
        onKeyup,
        onKeydown,
        onMousedown,
        onClear,
        omitDomProps,
        getRawInputElement,
        displayValues,
        onDisplayValuesChange,
        emptyOptions,
        activeDescendantId,
        activeValue,
        OptionList: OptionList2
      } = _a, restProps = __rest$b(_a, ["prefixCls", "id", "open", "defaultOpen", "mode", "showSearch", "searchValue", "onSearch", "allowClear", "clearIcon", "showArrow", "inputIcon", "disabled", "loading", "getInputElement", "getPopupContainer", "placement", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "showAction", "direction", "tokenSeparators", "tagRender", "optionLabelRender", "onPopupScroll", "onDropdownVisibleChange", "onFocus", "onBlur", "onKeyup", "onKeydown", "onMousedown", "onClear", "omitDomProps", "getRawInputElement", "displayValues", "onDisplayValuesChange", "emptyOptions", "activeDescendantId", "activeValue", "OptionList"]);
      const customizeInputElement = mode === "combobox" && getInputElement && getInputElement() || null;
      const customizeRawInputElement = typeof getRawInputElement === "function" && getRawInputElement();
      const domProps = _extends({}, restProps);
      let onTriggerVisibleChange;
      if (customizeRawInputElement) {
        onTriggerVisibleChange = (newOpen) => {
          onToggleOpen(newOpen);
        };
      }
      DEFAULT_OMIT_PROPS.forEach((propName) => {
        delete domProps[propName];
      });
      omitDomProps === null || omitDomProps === void 0 ? void 0 : omitDomProps.forEach((propName) => {
        delete domProps[propName];
      });
      const mergedShowArrow = showArrow !== void 0 ? showArrow : loading || !multiple.value && mode !== "combobox";
      let arrowNode;
      if (mergedShowArrow) {
        arrowNode = createVNode(TransBtn$1, {
          "class": classNames(`${prefixCls}-arrow`, {
            [`${prefixCls}-arrow-loading`]: loading
          }),
          "customizeIcon": inputIcon,
          "customizeIconProps": {
            loading,
            searchValue: mergedSearchValue.value,
            open: mergedOpen.value,
            focused: mockFocused.value,
            showSearch: mergedShowSearch.value
          }
        }, null);
      }
      let clearNode;
      const onClearMouseDown = () => {
        onClear === null || onClear === void 0 ? void 0 : onClear();
        onDisplayValuesChange([], {
          type: "clear",
          values: displayValues
        });
        onInternalSearch("", false, false);
      };
      if (!disabled && allowClear && (displayValues.length || mergedSearchValue.value)) {
        clearNode = createVNode(TransBtn$1, {
          "class": `${prefixCls}-clear`,
          "onMousedown": onClearMouseDown,
          "customizeIcon": clearIcon
        }, {
          default: () => [createTextVNode("×")]
        });
      }
      const optionList = createVNode(OptionList2, {
        "ref": listRef
      }, _extends(_extends({}, legacyTreeSelectContext.customSlots), {
        option: slots.option
      }));
      const mergedClassName = classNames(prefixCls, attrs.class, {
        [`${prefixCls}-focused`]: mockFocused.value,
        [`${prefixCls}-multiple`]: multiple.value,
        [`${prefixCls}-single`]: !multiple.value,
        [`${prefixCls}-allow-clear`]: allowClear,
        [`${prefixCls}-show-arrow`]: mergedShowArrow,
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-loading`]: loading,
        [`${prefixCls}-open`]: mergedOpen.value,
        [`${prefixCls}-customize-input`]: customizeInputElement,
        [`${prefixCls}-show-search`]: mergedShowSearch.value
      });
      const selectorNode = createVNode(SelectTrigger$1, {
        "ref": triggerRef,
        "disabled": disabled,
        "prefixCls": prefixCls,
        "visible": triggerOpen.value,
        "popupElement": optionList,
        "containerWidth": containerWidth.value,
        "animation": animation,
        "transitionName": transitionName,
        "dropdownStyle": dropdownStyle,
        "dropdownClassName": dropdownClassName,
        "direction": direction,
        "dropdownMatchSelectWidth": dropdownMatchSelectWidth,
        "dropdownRender": dropdownRender,
        "dropdownAlign": dropdownAlign,
        "placement": placement,
        "getPopupContainer": getPopupContainer,
        "empty": emptyOptions,
        "getTriggerDOMNode": () => selectorDomRef.current,
        "onPopupVisibleChange": onTriggerVisibleChange,
        "onPopupMouseEnter": onPopupMouseEnter,
        "onPopupFocusin": onPopupFocusin,
        "onPopupFocusout": onPopupFocusout
      }, {
        default: () => {
          return customizeRawInputElement ? isValidElement(customizeRawInputElement) && cloneElement(customizeRawInputElement, {
            ref: selectorDomRef
          }, false, true) : createVNode(Selector$1, _objectSpread2(_objectSpread2({}, props2), {}, {
            "domRef": selectorDomRef,
            "prefixCls": prefixCls,
            "inputElement": customizeInputElement,
            "ref": selectorRef,
            "id": id,
            "showSearch": mergedShowSearch.value,
            "mode": mode,
            "activeDescendantId": activeDescendantId,
            "tagRender": tagRender,
            "optionLabelRender": optionLabelRender,
            "values": displayValues,
            "open": mergedOpen.value,
            "onToggleOpen": onToggleOpen,
            "activeValue": activeValue,
            "searchValue": mergedSearchValue.value,
            "onSearch": onInternalSearch,
            "onSearchSubmit": onInternalSearchSubmit,
            "onRemove": onSelectorRemove,
            "tokenWithEnter": tokenWithEnter.value
          }), null);
        }
      });
      let renderNode;
      if (customizeRawInputElement) {
        renderNode = selectorNode;
      } else {
        renderNode = createVNode("div", _objectSpread2(_objectSpread2({}, domProps), {}, {
          "class": mergedClassName,
          "ref": containerRef,
          "onMousedown": onInternalMouseDown,
          "onKeydown": onInternalKeyDown,
          "onKeyup": onInternalKeyUp
        }), [mockFocused.value && !mergedOpen.value && createVNode("span", {
          "style": {
            width: 0,
            height: 0,
            position: "absolute",
            overflow: "hidden",
            opacity: 0
          },
          "aria-live": "polite"
        }, [`${displayValues.map((_ref2) => {
          let {
            label,
            value
          } = _ref2;
          return ["number", "string"].includes(typeof label) ? label : value;
        }).join(", ")}`]), selectorNode, arrowNode, clearNode]);
      }
      return renderNode;
    };
  }
});
const Filter = (_ref, _ref2) => {
  let {
    height,
    offset,
    prefixCls,
    onInnerResize
  } = _ref;
  let {
    slots
  } = _ref2;
  var _a;
  let outerStyle = {};
  let innerStyle = {
    display: "flex",
    flexDirection: "column"
  };
  if (offset !== void 0) {
    outerStyle = {
      height: `${height}px`,
      position: "relative",
      overflow: "hidden"
    };
    innerStyle = _extends(_extends({}, innerStyle), {
      transform: `translateY(${offset}px)`,
      position: "absolute",
      left: 0,
      right: 0,
      top: 0
    });
  }
  return createVNode("div", {
    "style": outerStyle
  }, [createVNode(ResizeObserver, {
    "onResize": (_ref3) => {
      let {
        offsetHeight
      } = _ref3;
      if (offsetHeight && onInnerResize) {
        onInnerResize();
      }
    }
  }, {
    default: () => [createVNode("div", {
      "style": innerStyle,
      "class": classNames({
        [`${prefixCls}-holder-inner`]: prefixCls
      })
    }, [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)])]
  })]);
};
Filter.displayName = "Filter";
Filter.inheritAttrs = false;
Filter.props = {
  prefixCls: String,
  /** Virtual filler height. Should be `count * itemMinHeight` */
  height: Number,
  /** Set offset of visible items. Should be the top of start item position */
  offset: Number,
  onInnerResize: Function
};
const Filler = Filter;
const Item = (_ref, _ref2) => {
  let {
    setRef
  } = _ref;
  let {
    slots
  } = _ref2;
  var _a;
  const children = flattenChildren((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
  return children && children.length ? cloneVNode(children[0], {
    ref: setRef
  }) : children;
};
Item.props = {
  setRef: {
    type: Function,
    default: () => {
    }
  }
};
const Item$1 = Item;
const MIN_SIZE = 20;
function getPageY(e) {
  return "touches" in e ? e.touches[0].pageY : e.pageY;
}
const ScrollBar = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ScrollBar",
  inheritAttrs: false,
  props: {
    prefixCls: String,
    scrollTop: Number,
    scrollHeight: Number,
    height: Number,
    count: Number,
    onScroll: {
      type: Function
    },
    onStartMove: {
      type: Function
    },
    onStopMove: {
      type: Function
    }
  },
  setup() {
    return {
      moveRaf: null,
      scrollbarRef: createRef(),
      thumbRef: createRef(),
      visibleTimeout: null,
      state: reactive({
        dragging: false,
        pageY: null,
        startTop: null,
        visible: false
      })
    };
  },
  watch: {
    scrollTop: {
      handler() {
        this.delayHidden();
      },
      flush: "post"
    }
  },
  mounted() {
    var _a, _b;
    (_a = this.scrollbarRef.current) === null || _a === void 0 ? void 0 : _a.addEventListener("touchstart", this.onScrollbarTouchStart, supportsPassive ? {
      passive: false
    } : false);
    (_b = this.thumbRef.current) === null || _b === void 0 ? void 0 : _b.addEventListener("touchstart", this.onMouseDown, supportsPassive ? {
      passive: false
    } : false);
  },
  beforeUnmount() {
    this.removeEvents();
    clearTimeout(this.visibleTimeout);
  },
  methods: {
    delayHidden() {
      clearTimeout(this.visibleTimeout);
      this.state.visible = true;
      this.visibleTimeout = setTimeout(() => {
        this.state.visible = false;
      }, 2e3);
    },
    onScrollbarTouchStart(e) {
      e.preventDefault();
    },
    onContainerMouseDown(e) {
      e.stopPropagation();
      e.preventDefault();
    },
    // ======================= Clean =======================
    patchEvents() {
      window.addEventListener("mousemove", this.onMouseMove);
      window.addEventListener("mouseup", this.onMouseUp);
      this.thumbRef.current.addEventListener("touchmove", this.onMouseMove, supportsPassive ? {
        passive: false
      } : false);
      this.thumbRef.current.addEventListener("touchend", this.onMouseUp);
    },
    removeEvents() {
      window.removeEventListener("mousemove", this.onMouseMove);
      window.removeEventListener("mouseup", this.onMouseUp);
      this.scrollbarRef.current.removeEventListener("touchstart", this.onScrollbarTouchStart, supportsPassive ? {
        passive: false
      } : false);
      if (this.thumbRef.current) {
        this.thumbRef.current.removeEventListener("touchstart", this.onMouseDown, supportsPassive ? {
          passive: false
        } : false);
        this.thumbRef.current.removeEventListener("touchmove", this.onMouseMove, supportsPassive ? {
          passive: false
        } : false);
        this.thumbRef.current.removeEventListener("touchend", this.onMouseUp);
      }
      wrapperRaf.cancel(this.moveRaf);
    },
    // ======================= Thumb =======================
    onMouseDown(e) {
      const {
        onStartMove
      } = this.$props;
      _extends(this.state, {
        dragging: true,
        pageY: getPageY(e),
        startTop: this.getTop()
      });
      onStartMove();
      this.patchEvents();
      e.stopPropagation();
      e.preventDefault();
    },
    onMouseMove(e) {
      const {
        dragging,
        pageY,
        startTop
      } = this.state;
      const {
        onScroll
      } = this.$props;
      wrapperRaf.cancel(this.moveRaf);
      if (dragging) {
        const offsetY = getPageY(e) - pageY;
        const newTop = startTop + offsetY;
        const enableScrollRange = this.getEnableScrollRange();
        const enableHeightRange = this.getEnableHeightRange();
        const ptg = enableHeightRange ? newTop / enableHeightRange : 0;
        const newScrollTop = Math.ceil(ptg * enableScrollRange);
        this.moveRaf = wrapperRaf(() => {
          onScroll(newScrollTop);
        });
      }
    },
    onMouseUp() {
      const {
        onStopMove
      } = this.$props;
      this.state.dragging = false;
      onStopMove();
      this.removeEvents();
    },
    // ===================== Calculate =====================
    getSpinHeight() {
      const {
        height,
        scrollHeight
      } = this.$props;
      let baseHeight = height / scrollHeight * 100;
      baseHeight = Math.max(baseHeight, MIN_SIZE);
      baseHeight = Math.min(baseHeight, height / 2);
      return Math.floor(baseHeight);
    },
    getEnableScrollRange() {
      const {
        scrollHeight,
        height
      } = this.$props;
      return scrollHeight - height || 0;
    },
    getEnableHeightRange() {
      const {
        height
      } = this.$props;
      const spinHeight = this.getSpinHeight();
      return height - spinHeight || 0;
    },
    getTop() {
      const {
        scrollTop
      } = this.$props;
      const enableScrollRange = this.getEnableScrollRange();
      const enableHeightRange = this.getEnableHeightRange();
      if (scrollTop === 0 || enableScrollRange === 0) {
        return 0;
      }
      const ptg = scrollTop / enableScrollRange;
      return ptg * enableHeightRange;
    },
    // Not show scrollbar when height is large than scrollHeight
    showScroll() {
      const {
        height,
        scrollHeight
      } = this.$props;
      return scrollHeight > height;
    }
  },
  render() {
    const {
      dragging,
      visible
    } = this.state;
    const {
      prefixCls
    } = this.$props;
    const spinHeight = this.getSpinHeight() + "px";
    const top = this.getTop() + "px";
    const canScroll = this.showScroll();
    const mergedVisible = canScroll && visible;
    return createVNode("div", {
      "ref": this.scrollbarRef,
      "class": classNames(`${prefixCls}-scrollbar`, {
        [`${prefixCls}-scrollbar-show`]: canScroll
      }),
      "style": {
        width: "8px",
        top: 0,
        bottom: 0,
        right: 0,
        position: "absolute",
        display: mergedVisible ? void 0 : "none"
      },
      "onMousedown": this.onContainerMouseDown,
      "onMousemove": this.delayHidden
    }, [createVNode("div", {
      "ref": this.thumbRef,
      "class": classNames(`${prefixCls}-scrollbar-thumb`, {
        [`${prefixCls}-scrollbar-thumb-moving`]: dragging
      }),
      "style": {
        width: "100%",
        height: spinHeight,
        top,
        left: 0,
        position: "absolute",
        background: "rgba(0, 0, 0, 0.5)",
        borderRadius: "99px",
        cursor: "pointer",
        userSelect: "none"
      },
      "onMousedown": this.onMouseDown
    }, null)]);
  }
});
function useHeights(mergedData, getKey2, onItemAdd, onItemRemove) {
  const instance = /* @__PURE__ */ new Map();
  const heights = /* @__PURE__ */ new Map();
  const updatedMark = ref(Symbol("update"));
  watch(mergedData, () => {
    updatedMark.value = Symbol("update");
  });
  let collectRaf = void 0;
  function cancelRaf() {
    wrapperRaf.cancel(collectRaf);
  }
  function collectHeight() {
    cancelRaf();
    collectRaf = wrapperRaf(() => {
      instance.forEach((element, key) => {
        if (element && element.offsetParent) {
          const {
            offsetHeight
          } = element;
          if (heights.get(key) !== offsetHeight) {
            updatedMark.value = Symbol("update");
            heights.set(key, element.offsetHeight);
          }
        }
      });
    });
  }
  function setInstance(item, ins) {
    const key = getKey2(item);
    const origin = instance.get(key);
    if (ins) {
      instance.set(key, ins.$el || ins);
      collectHeight();
    } else {
      instance.delete(key);
    }
    if (!origin !== !ins) {
      if (ins) {
        onItemAdd === null || onItemAdd === void 0 ? void 0 : onItemAdd(item);
      } else {
        onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove(item);
      }
    }
  }
  onUnmounted(() => {
    cancelRaf();
  });
  return [setInstance, collectHeight, heights, updatedMark];
}
function useScrollTo(containerRef, mergedData, heights, props2, getKey2, collectHeight, syncScrollTop, triggerFlash) {
  let scroll;
  return (arg) => {
    if (arg === null || arg === void 0) {
      triggerFlash();
      return;
    }
    wrapperRaf.cancel(scroll);
    const data = mergedData.value;
    const itemHeight = props2.itemHeight;
    if (typeof arg === "number") {
      syncScrollTop(arg);
    } else if (arg && typeof arg === "object") {
      let index2;
      const {
        align
      } = arg;
      if ("index" in arg) {
        ({
          index: index2
        } = arg);
      } else {
        index2 = data.findIndex((item) => getKey2(item) === arg.key);
      }
      const {
        offset = 0
      } = arg;
      const syncScroll = (times, targetAlign) => {
        if (times < 0 || !containerRef.value)
          return;
        const height = containerRef.value.clientHeight;
        let needCollectHeight = false;
        let newTargetAlign = targetAlign;
        if (height) {
          const mergedAlign = targetAlign || align;
          let stackTop = 0;
          let itemTop = 0;
          let itemBottom = 0;
          const maxLen = Math.min(data.length, index2);
          for (let i = 0; i <= maxLen; i += 1) {
            const key = getKey2(data[i]);
            itemTop = stackTop;
            const cacheHeight = heights.get(key);
            itemBottom = itemTop + (cacheHeight === void 0 ? itemHeight : cacheHeight);
            stackTop = itemBottom;
            if (i === index2 && cacheHeight === void 0) {
              needCollectHeight = true;
            }
          }
          const scrollTop = containerRef.value.scrollTop;
          let targetTop = null;
          switch (mergedAlign) {
            case "top":
              targetTop = itemTop - offset;
              break;
            case "bottom":
              targetTop = itemBottom - height + offset;
              break;
            default: {
              const scrollBottom = scrollTop + height;
              if (itemTop < scrollTop) {
                newTargetAlign = "top";
              } else if (itemBottom > scrollBottom) {
                newTargetAlign = "bottom";
              }
            }
          }
          if (targetTop !== null && targetTop !== scrollTop) {
            syncScrollTop(targetTop);
          }
        }
        scroll = wrapperRaf(() => {
          if (needCollectHeight) {
            collectHeight();
          }
          syncScroll(times - 1, newTargetAlign);
        }, 2);
      };
      syncScroll(5);
    }
  };
}
const isFF = typeof navigator === "object" && /Firefox/i.test(navigator.userAgent);
const isFF$1 = isFF;
const useOriginScroll = (isScrollAtTop, isScrollAtBottom) => {
  let lock = false;
  let lockTimeout = null;
  function lockScroll() {
    clearTimeout(lockTimeout);
    lock = true;
    lockTimeout = setTimeout(() => {
      lock = false;
    }, 50);
  }
  return function(deltaY) {
    let smoothOffset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    const originScroll = (
      // Pass origin wheel when on the top
      deltaY < 0 && isScrollAtTop.value || // Pass origin wheel when on the bottom
      deltaY > 0 && isScrollAtBottom.value
    );
    if (smoothOffset && originScroll) {
      clearTimeout(lockTimeout);
      lock = false;
    } else if (!originScroll || lock) {
      lockScroll();
    }
    return !lock && originScroll;
  };
};
function useFrameWheel(inVirtual, isScrollAtTop, isScrollAtBottom, onWheelDelta) {
  let offsetRef = 0;
  let nextFrame = null;
  let wheelValue = null;
  let isMouseScroll = false;
  const originScroll = useOriginScroll(isScrollAtTop, isScrollAtBottom);
  function onWheel(event) {
    if (!inVirtual.value)
      return;
    wrapperRaf.cancel(nextFrame);
    const {
      deltaY
    } = event;
    offsetRef += deltaY;
    wheelValue = deltaY;
    if (originScroll(deltaY))
      return;
    if (!isFF$1) {
      event.preventDefault();
    }
    nextFrame = wrapperRaf(() => {
      const patchMultiple = isMouseScroll ? 10 : 1;
      onWheelDelta(offsetRef * patchMultiple);
      offsetRef = 0;
    });
  }
  function onFireFoxScroll(event) {
    if (!inVirtual.value)
      return;
    isMouseScroll = event.detail === wheelValue;
  }
  return [onWheel, onFireFoxScroll];
}
const SMOOTH_PTG = 14 / 15;
function useMobileTouchMove(inVirtual, listRef, callback) {
  let touched = false;
  let touchY = 0;
  let element = null;
  let interval = null;
  const cleanUpEvents = () => {
    if (element) {
      element.removeEventListener("touchmove", onTouchMove);
      element.removeEventListener("touchend", onTouchEnd);
    }
  };
  const onTouchMove = (e) => {
    if (touched) {
      const currentY = Math.ceil(e.touches[0].pageY);
      let offsetY = touchY - currentY;
      touchY = currentY;
      if (callback(offsetY)) {
        e.preventDefault();
      }
      clearInterval(interval);
      interval = setInterval(() => {
        offsetY *= SMOOTH_PTG;
        if (!callback(offsetY, true) || Math.abs(offsetY) <= 0.1) {
          clearInterval(interval);
        }
      }, 16);
    }
  };
  const onTouchEnd = () => {
    touched = false;
    cleanUpEvents();
  };
  const onTouchStart = (e) => {
    cleanUpEvents();
    if (e.touches.length === 1 && !touched) {
      touched = true;
      touchY = Math.ceil(e.touches[0].pageY);
      element = e.target;
      element.addEventListener("touchmove", onTouchMove, {
        passive: false
      });
      element.addEventListener("touchend", onTouchEnd);
    }
  };
  const noop2 = () => {
  };
  onMounted(() => {
    document.addEventListener("touchmove", noop2, {
      passive: false
    });
    watch(inVirtual, (val) => {
      listRef.value.removeEventListener("touchstart", onTouchStart);
      cleanUpEvents();
      clearInterval(interval);
      if (val) {
        listRef.value.addEventListener("touchstart", onTouchStart, {
          passive: false
        });
      }
    }, {
      immediate: true
    });
  });
  onBeforeUnmount(() => {
    document.removeEventListener("touchmove", noop2);
  });
}
var __rest$a = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
const EMPTY_DATA = [];
const ScrollStyle = {
  overflowY: "auto",
  overflowAnchor: "none"
};
function renderChildren(list, startIndex, endIndex, setNodeRef, renderFunc, _ref) {
  let {
    getKey: getKey2
  } = _ref;
  return list.slice(startIndex, endIndex + 1).map((item, index2) => {
    const eleIndex = startIndex + index2;
    const node = renderFunc(item, eleIndex, {
      // style: status === 'MEASURE_START' ? { visibility: 'hidden' } : {},
    });
    const key = getKey2(item);
    return createVNode(Item$1, {
      "key": key,
      "setRef": (ele) => setNodeRef(item, ele)
    }, {
      default: () => [node]
    });
  });
}
const List = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "List",
  inheritAttrs: false,
  props: {
    prefixCls: String,
    data: PropTypes.array,
    height: Number,
    itemHeight: Number,
    /** If not match virtual scroll condition, Set List still use height of container. */
    fullHeight: {
      type: Boolean,
      default: void 0
    },
    itemKey: {
      type: [String, Number, Function],
      required: true
    },
    component: {
      type: [String, Object]
    },
    /** Set `false` will always use real scroll instead of virtual one */
    virtual: {
      type: Boolean,
      default: void 0
    },
    children: Function,
    onScroll: Function,
    onMousedown: Function,
    onMouseenter: Function,
    onVisibleChange: Function
  },
  setup(props2, _ref2) {
    let {
      expose
    } = _ref2;
    const useVirtual = computed(() => {
      const {
        height,
        itemHeight,
        virtual
      } = props2;
      return !!(virtual !== false && height && itemHeight);
    });
    const inVirtual = computed(() => {
      const {
        height,
        itemHeight,
        data: data2
      } = props2;
      return useVirtual.value && data2 && itemHeight * data2.length > height;
    });
    const state = reactive({
      scrollTop: 0,
      scrollMoving: false
    });
    const data = computed(() => {
      return props2.data || EMPTY_DATA;
    });
    const mergedData = shallowRef([]);
    watch(data, () => {
      mergedData.value = toRaw(data.value).slice();
    }, {
      immediate: true
    });
    const itemKey = shallowRef((_item) => void 0);
    watch(() => props2.itemKey, (val) => {
      if (typeof val === "function") {
        itemKey.value = val;
      } else {
        itemKey.value = (item) => item === null || item === void 0 ? void 0 : item[val];
      }
    }, {
      immediate: true
    });
    const componentRef = shallowRef();
    const fillerInnerRef = shallowRef();
    const scrollBarRef = shallowRef();
    const getKey2 = (item) => {
      return itemKey.value(item);
    };
    const sharedConfig = {
      getKey: getKey2
    };
    function syncScrollTop(newTop) {
      let value;
      if (typeof newTop === "function") {
        value = newTop(state.scrollTop);
      } else {
        value = newTop;
      }
      const alignedTop = keepInRange(value);
      if (componentRef.value) {
        componentRef.value.scrollTop = alignedTop;
      }
      state.scrollTop = alignedTop;
    }
    const [setInstance, collectHeight, heights, updatedMark] = useHeights(mergedData, getKey2, null, null);
    const calRes = reactive({
      scrollHeight: void 0,
      start: 0,
      end: 0,
      offset: void 0
    });
    const offsetHeight = shallowRef(0);
    onMounted(() => {
      nextTick(() => {
        var _a;
        offsetHeight.value = ((_a = fillerInnerRef.value) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0;
      });
    });
    onUpdated(() => {
      nextTick(() => {
        var _a;
        offsetHeight.value = ((_a = fillerInnerRef.value) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0;
      });
    });
    watch([useVirtual, mergedData], () => {
      if (!useVirtual.value) {
        _extends(calRes, {
          scrollHeight: void 0,
          start: 0,
          end: mergedData.value.length - 1,
          offset: void 0
        });
      }
    }, {
      immediate: true
    });
    watch([useVirtual, mergedData, offsetHeight, inVirtual], () => {
      if (useVirtual.value && !inVirtual.value) {
        _extends(calRes, {
          scrollHeight: offsetHeight.value,
          start: 0,
          end: mergedData.value.length - 1,
          offset: void 0
        });
      }
      if (componentRef.value) {
        state.scrollTop = componentRef.value.scrollTop;
      }
    }, {
      immediate: true
    });
    watch([inVirtual, useVirtual, () => state.scrollTop, mergedData, updatedMark, () => props2.height, offsetHeight], () => {
      if (!useVirtual.value || !inVirtual.value) {
        return;
      }
      let itemTop = 0;
      let startIndex;
      let startOffset;
      let endIndex;
      const dataLen = mergedData.value.length;
      const data2 = mergedData.value;
      const scrollTop = state.scrollTop;
      const {
        itemHeight,
        height
      } = props2;
      const scrollTopHeight = scrollTop + height;
      for (let i = 0; i < dataLen; i += 1) {
        const item = data2[i];
        const key = getKey2(item);
        let cacheHeight = heights.get(key);
        if (cacheHeight === void 0) {
          cacheHeight = itemHeight;
        }
        const currentItemBottom = itemTop + cacheHeight;
        if (startIndex === void 0 && currentItemBottom >= scrollTop) {
          startIndex = i;
          startOffset = itemTop;
        }
        if (endIndex === void 0 && currentItemBottom > scrollTopHeight) {
          endIndex = i;
        }
        itemTop = currentItemBottom;
      }
      if (startIndex === void 0) {
        startIndex = 0;
        startOffset = 0;
        endIndex = Math.ceil(height / itemHeight);
      }
      if (endIndex === void 0) {
        endIndex = dataLen - 1;
      }
      endIndex = Math.min(endIndex + 1, dataLen);
      _extends(calRes, {
        scrollHeight: itemTop,
        start: startIndex,
        end: endIndex,
        offset: startOffset
      });
    }, {
      immediate: true
    });
    const maxScrollHeight = computed(() => calRes.scrollHeight - props2.height);
    function keepInRange(newScrollTop) {
      let newTop = newScrollTop;
      if (!Number.isNaN(maxScrollHeight.value)) {
        newTop = Math.min(newTop, maxScrollHeight.value);
      }
      newTop = Math.max(newTop, 0);
      return newTop;
    }
    const isScrollAtTop = computed(() => state.scrollTop <= 0);
    const isScrollAtBottom = computed(() => state.scrollTop >= maxScrollHeight.value);
    const originScroll = useOriginScroll(isScrollAtTop, isScrollAtBottom);
    function onScrollBar(newScrollTop) {
      const newTop = newScrollTop;
      syncScrollTop(newTop);
    }
    function onFallbackScroll(e) {
      var _a;
      const {
        scrollTop: newScrollTop
      } = e.currentTarget;
      if (newScrollTop !== state.scrollTop) {
        syncScrollTop(newScrollTop);
      }
      (_a = props2.onScroll) === null || _a === void 0 ? void 0 : _a.call(props2, e);
    }
    const [onRawWheel, onFireFoxScroll] = useFrameWheel(useVirtual, isScrollAtTop, isScrollAtBottom, (offsetY) => {
      syncScrollTop((top) => {
        const newTop = top + offsetY;
        return newTop;
      });
    });
    useMobileTouchMove(useVirtual, componentRef, (deltaY, smoothOffset) => {
      if (originScroll(deltaY, smoothOffset)) {
        return false;
      }
      onRawWheel({
        preventDefault() {
        },
        deltaY
      });
      return true;
    });
    function onMozMousePixelScroll(e) {
      if (useVirtual.value) {
        e.preventDefault();
      }
    }
    const removeEventListener = () => {
      if (componentRef.value) {
        componentRef.value.removeEventListener("wheel", onRawWheel, supportsPassive ? {
          passive: false
        } : false);
        componentRef.value.removeEventListener("DOMMouseScroll", onFireFoxScroll);
        componentRef.value.removeEventListener("MozMousePixelScroll", onMozMousePixelScroll);
      }
    };
    watchEffect(() => {
      nextTick(() => {
        if (componentRef.value) {
          removeEventListener();
          componentRef.value.addEventListener("wheel", onRawWheel, supportsPassive ? {
            passive: false
          } : false);
          componentRef.value.addEventListener("DOMMouseScroll", onFireFoxScroll);
          componentRef.value.addEventListener("MozMousePixelScroll", onMozMousePixelScroll);
        }
      });
    });
    onBeforeUnmount(() => {
      removeEventListener();
    });
    const scrollTo = useScrollTo(componentRef, mergedData, heights, props2, getKey2, collectHeight, syncScrollTop, () => {
      var _a;
      (_a = scrollBarRef.value) === null || _a === void 0 ? void 0 : _a.delayHidden();
    });
    expose({
      scrollTo
    });
    const componentStyle = computed(() => {
      let cs = null;
      if (props2.height) {
        cs = _extends({
          [props2.fullHeight ? "height" : "maxHeight"]: props2.height + "px"
        }, ScrollStyle);
        if (useVirtual.value) {
          cs.overflowY = "hidden";
          if (state.scrollMoving) {
            cs.pointerEvents = "none";
          }
        }
      }
      return cs;
    });
    watch([() => calRes.start, () => calRes.end, mergedData], () => {
      if (props2.onVisibleChange) {
        const renderList2 = mergedData.value.slice(calRes.start, calRes.end + 1);
        props2.onVisibleChange(renderList2, mergedData.value);
      }
    }, {
      flush: "post"
    });
    const delayHideScrollBar = () => {
      var _a;
      (_a = scrollBarRef.value) === null || _a === void 0 ? void 0 : _a.delayHidden();
    };
    return {
      state,
      mergedData,
      componentStyle,
      onFallbackScroll,
      onScrollBar,
      componentRef,
      useVirtual,
      calRes,
      collectHeight,
      setInstance,
      sharedConfig,
      scrollBarRef,
      fillerInnerRef,
      delayHideScrollBar
    };
  },
  render() {
    const _a = _extends(_extends({}, this.$props), this.$attrs), {
      prefixCls = "rc-virtual-list",
      height,
      itemHeight,
      // eslint-disable-next-line no-unused-vars
      fullHeight,
      data,
      itemKey,
      virtual,
      component: Component = "div",
      onScroll,
      children = this.$slots.default,
      style,
      class: className
    } = _a, restProps = __rest$a(_a, ["prefixCls", "height", "itemHeight", "fullHeight", "data", "itemKey", "virtual", "component", "onScroll", "children", "style", "class"]);
    const mergedClassName = classNames(prefixCls, className);
    const {
      scrollTop
    } = this.state;
    const {
      scrollHeight,
      offset,
      start,
      end
    } = this.calRes;
    const {
      componentStyle,
      onFallbackScroll,
      onScrollBar,
      useVirtual,
      collectHeight,
      sharedConfig,
      setInstance,
      mergedData,
      delayHideScrollBar
    } = this;
    return createVNode("div", _objectSpread2({
      "style": _extends(_extends({}, style), {
        position: "relative"
      }),
      "class": mergedClassName
    }, restProps), [createVNode(Component, {
      "class": `${prefixCls}-holder`,
      "style": componentStyle,
      "ref": "componentRef",
      "onScroll": onFallbackScroll,
      "onMouseenter": delayHideScrollBar
    }, {
      default: () => [createVNode(Filler, {
        "prefixCls": prefixCls,
        "height": scrollHeight,
        "offset": offset,
        "onInnerResize": collectHeight,
        "ref": "fillerInnerRef"
      }, {
        default: () => renderChildren(mergedData, start, end, setInstance, children, sharedConfig)
      })]
    }), useVirtual && createVNode(ScrollBar, {
      "ref": "scrollBarRef",
      "prefixCls": prefixCls,
      "scrollTop": scrollTop,
      "height": height,
      "scrollHeight": scrollHeight,
      "count": mergedData.length,
      "onScroll": onScrollBar,
      "onStartMove": () => {
        this.state.scrollMoving = true;
      },
      "onStopMove": () => {
        this.state.scrollMoving = false;
      }
    }, null)]);
  }
});
const List$1 = List;
function useMemo(getValue, condition, shouldUpdate) {
  const cacheRef = ref(getValue());
  watch(condition, (next, pre) => {
    if (shouldUpdate) {
      if (shouldUpdate(next, pre)) {
        cacheRef.value = getValue();
      }
    } else {
      cacheRef.value = getValue();
    }
  });
  return cacheRef;
}
function isPlatformMac() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}
const SelectContextKey = Symbol("SelectContextKey");
function useProvideSelectProps(props2) {
  return provide(SelectContextKey, props2);
}
function useSelectProps() {
  return inject(SelectContextKey, {});
}
var __rest$9 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function isTitleType(content) {
  return typeof content === "string" || typeof content === "number";
}
const OptionList = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "OptionList",
  inheritAttrs: false,
  setup(_, _ref) {
    let {
      expose,
      slots
    } = _ref;
    const baseProps = useBaseProps();
    const props2 = useSelectProps();
    const itemPrefixCls = computed(() => `${baseProps.prefixCls}-item`);
    const memoFlattenOptions = useMemo(() => props2.flattenOptions, [() => baseProps.open, () => props2.flattenOptions], (next) => next[0]);
    const listRef = createRef();
    const onListMouseDown = (event) => {
      event.preventDefault();
    };
    const scrollIntoView = (args) => {
      if (listRef.current) {
        listRef.current.scrollTo(typeof args === "number" ? {
          index: args
        } : args);
      }
    };
    const getEnabledActiveIndex = function(index2) {
      let offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
      const len = memoFlattenOptions.value.length;
      for (let i = 0; i < len; i += 1) {
        const current = (index2 + i * offset + len) % len;
        const {
          group,
          data
        } = memoFlattenOptions.value[current];
        if (!group && !data.disabled) {
          return current;
        }
      }
      return -1;
    };
    const state = reactive({
      activeIndex: getEnabledActiveIndex(0)
    });
    const setActive = function(index2) {
      let fromKeyboard = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      state.activeIndex = index2;
      const info = {
        source: fromKeyboard ? "keyboard" : "mouse"
      };
      const flattenItem = memoFlattenOptions.value[index2];
      if (!flattenItem) {
        props2.onActiveValue(null, -1, info);
        return;
      }
      props2.onActiveValue(flattenItem.value, index2, info);
    };
    watch([() => memoFlattenOptions.value.length, () => baseProps.searchValue], () => {
      setActive(props2.defaultActiveFirstOption !== false ? getEnabledActiveIndex(0) : -1);
    }, {
      immediate: true
    });
    const isSelected = (value) => props2.rawValues.has(value) && baseProps.mode !== "combobox";
    watch([() => baseProps.open, () => baseProps.searchValue], () => {
      if (!baseProps.multiple && baseProps.open && props2.rawValues.size === 1) {
        const value = Array.from(props2.rawValues)[0];
        const index2 = toRaw(memoFlattenOptions.value).findIndex((_ref2) => {
          let {
            data
          } = _ref2;
          return data[props2.fieldNames.value] === value;
        });
        if (index2 !== -1) {
          setActive(index2);
          nextTick(() => {
            scrollIntoView(index2);
          });
        }
      }
      if (baseProps.open) {
        nextTick(() => {
          var _a;
          (_a = listRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo(void 0);
        });
      }
    }, {
      immediate: true,
      flush: "post"
    });
    const onSelectValue = (value) => {
      if (value !== void 0) {
        props2.onSelect(value, {
          selected: !props2.rawValues.has(value)
        });
      }
      if (!baseProps.multiple) {
        baseProps.toggleOpen(false);
      }
    };
    const getLabel = (item) => typeof item.label === "function" ? item.label() : item.label;
    function renderItem(index2) {
      const item = memoFlattenOptions.value[index2];
      if (!item)
        return null;
      const itemData = item.data || {};
      const {
        value
      } = itemData;
      const {
        group
      } = item;
      const attrs = pickAttrs(itemData, true);
      const mergedLabel = getLabel(item);
      return item ? createVNode("div", _objectSpread2(_objectSpread2({
        "aria-label": typeof mergedLabel === "string" && !group ? mergedLabel : null
      }, attrs), {}, {
        "key": index2,
        "role": group ? "presentation" : "option",
        "id": `${baseProps.id}_list_${index2}`,
        "aria-selected": isSelected(value)
      }), [value]) : null;
    }
    const onKeydown = (event) => {
      const {
        which,
        ctrlKey
      } = event;
      switch (which) {
        case KeyCode.N:
        case KeyCode.P:
        case KeyCode.UP:
        case KeyCode.DOWN: {
          let offset = 0;
          if (which === KeyCode.UP) {
            offset = -1;
          } else if (which === KeyCode.DOWN) {
            offset = 1;
          } else if (isPlatformMac() && ctrlKey) {
            if (which === KeyCode.N) {
              offset = 1;
            } else if (which === KeyCode.P) {
              offset = -1;
            }
          }
          if (offset !== 0) {
            const nextActiveIndex = getEnabledActiveIndex(state.activeIndex + offset, offset);
            scrollIntoView(nextActiveIndex);
            setActive(nextActiveIndex, true);
          }
          break;
        }
        case KeyCode.ENTER: {
          const item = memoFlattenOptions.value[state.activeIndex];
          if (item && !item.data.disabled) {
            onSelectValue(item.value);
          } else {
            onSelectValue(void 0);
          }
          if (baseProps.open) {
            event.preventDefault();
          }
          break;
        }
        case KeyCode.ESC: {
          baseProps.toggleOpen(false);
          if (baseProps.open) {
            event.stopPropagation();
          }
        }
      }
    };
    const onKeyup = () => {
    };
    const scrollTo = (index2) => {
      scrollIntoView(index2);
    };
    expose({
      onKeydown,
      onKeyup,
      scrollTo
    });
    return () => {
      const {
        id,
        notFoundContent,
        onPopupScroll
      } = baseProps;
      const {
        menuItemSelectedIcon,
        fieldNames,
        virtual,
        listHeight,
        listItemHeight
      } = props2;
      const renderOption = slots.option;
      const {
        activeIndex
      } = state;
      const omitFieldNameList = Object.keys(fieldNames).map((key) => fieldNames[key]);
      if (memoFlattenOptions.value.length === 0) {
        return createVNode("div", {
          "role": "listbox",
          "id": `${id}_list`,
          "class": `${itemPrefixCls.value}-empty`,
          "onMousedown": onListMouseDown
        }, [notFoundContent]);
      }
      return createVNode(Fragment, null, [createVNode("div", {
        "role": "listbox",
        "id": `${id}_list`,
        "style": {
          height: 0,
          width: 0,
          overflow: "hidden"
        }
      }, [renderItem(activeIndex - 1), renderItem(activeIndex), renderItem(activeIndex + 1)]), createVNode(List$1, {
        "itemKey": "key",
        "ref": listRef,
        "data": memoFlattenOptions.value,
        "height": listHeight,
        "itemHeight": listItemHeight,
        "fullHeight": false,
        "onMousedown": onListMouseDown,
        "onScroll": onPopupScroll,
        "virtual": virtual
      }, {
        default: (item, itemIndex) => {
          var _a;
          const {
            group,
            groupOption,
            data,
            value
          } = item;
          const {
            key
          } = data;
          const label = typeof item.label === "function" ? item.label() : item.label;
          if (group) {
            const groupTitle = (_a = data.title) !== null && _a !== void 0 ? _a : isTitleType(label) && label;
            return createVNode("div", {
              "class": classNames(itemPrefixCls.value, `${itemPrefixCls.value}-group`),
              "title": groupTitle
            }, [renderOption ? renderOption(data) : label !== void 0 ? label : key]);
          }
          const {
            disabled,
            title,
            children,
            style,
            class: cls,
            className
          } = data, otherProps = __rest$9(data, ["disabled", "title", "children", "style", "class", "className"]);
          const passedProps = omit(otherProps, omitFieldNameList);
          const selected = isSelected(value);
          const optionPrefixCls = `${itemPrefixCls.value}-option`;
          const optionClassName = classNames(itemPrefixCls.value, optionPrefixCls, cls, className, {
            [`${optionPrefixCls}-grouped`]: groupOption,
            [`${optionPrefixCls}-active`]: activeIndex === itemIndex && !disabled,
            [`${optionPrefixCls}-disabled`]: disabled,
            [`${optionPrefixCls}-selected`]: selected
          });
          const mergedLabel = getLabel(item);
          const iconVisible = !menuItemSelectedIcon || typeof menuItemSelectedIcon === "function" || selected;
          const content = typeof mergedLabel === "number" ? mergedLabel : mergedLabel || value;
          let optionTitle = isTitleType(content) ? content.toString() : void 0;
          if (title !== void 0) {
            optionTitle = title;
          }
          return createVNode("div", _objectSpread2(_objectSpread2({}, passedProps), {}, {
            "aria-selected": selected,
            "class": optionClassName,
            "title": optionTitle,
            "onMousemove": (e) => {
              if (otherProps.onMousemove) {
                otherProps.onMousemove(e);
              }
              if (activeIndex === itemIndex || disabled) {
                return;
              }
              setActive(itemIndex);
            },
            "onClick": (e) => {
              if (!disabled) {
                onSelectValue(value);
              }
              if (otherProps.onClick) {
                otherProps.onClick(e);
              }
            },
            "style": style
          }), [createVNode("div", {
            "class": `${optionPrefixCls}-content`
          }, [renderOption ? renderOption(data) : content]), isValidElement(menuItemSelectedIcon) || selected, iconVisible && createVNode(TransBtn$1, {
            "class": `${itemPrefixCls.value}-option-state`,
            "customizeIcon": menuItemSelectedIcon,
            "customizeIconProps": {
              isSelected: selected
            }
          }, {
            default: () => [selected ? "✓" : null]
          })]);
        }
      })]);
    };
  }
});
const OptionList$1 = OptionList;
var __rest$8 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function convertNodeToOption(node) {
  const _a = node, {
    key,
    children
  } = _a, _b = _a.props, {
    value,
    disabled
  } = _b, restProps = __rest$8(_b, ["value", "disabled"]);
  const child = children === null || children === void 0 ? void 0 : children.default;
  return _extends({
    key,
    value: value !== void 0 ? value : key,
    children: child,
    disabled: disabled || disabled === ""
  }, restProps);
}
function convertChildrenToData(nodes) {
  let optionOnly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  const dd = flattenChildren(nodes).map((node, index2) => {
    var _a;
    if (!isValidElement(node) || !node.type) {
      return null;
    }
    const {
      type: {
        isSelectOptGroup
      },
      key,
      children,
      props: props2
    } = node;
    if (optionOnly || !isSelectOptGroup) {
      return convertNodeToOption(node);
    }
    const child = children && children.default ? children.default() : void 0;
    const label = (props2 === null || props2 === void 0 ? void 0 : props2.label) || ((_a = children.label) === null || _a === void 0 ? void 0 : _a.call(children)) || key;
    return _extends(_extends({
      key: `__RC_SELECT_GRP__${key === null ? index2 : String(key)}__`
    }, props2), {
      label,
      options: convertChildrenToData(child || [])
    });
  }).filter((data) => data);
  return dd;
}
function useOptions(options, children, fieldNames) {
  const mergedOptions = shallowRef();
  const valueOptions = shallowRef();
  const labelOptions = shallowRef();
  const tempMergedOptions = shallowRef([]);
  watch([options, children], () => {
    if (options.value) {
      tempMergedOptions.value = toRaw(options.value).slice();
    } else {
      tempMergedOptions.value = convertChildrenToData(children.value);
    }
  }, {
    immediate: true,
    deep: true
  });
  watchEffect(() => {
    const newOptions = tempMergedOptions.value;
    const newValueOptions = /* @__PURE__ */ new Map();
    const newLabelOptions = /* @__PURE__ */ new Map();
    const fieldNamesValue = fieldNames.value;
    function dig(optionList) {
      let isChildren = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      for (let i = 0; i < optionList.length; i += 1) {
        const option = optionList[i];
        if (!option[fieldNamesValue.options] || isChildren) {
          newValueOptions.set(option[fieldNamesValue.value], option);
          newLabelOptions.set(option[fieldNamesValue.label], option);
        } else {
          dig(option[fieldNamesValue.options], true);
        }
      }
    }
    dig(newOptions);
    mergedOptions.value = newOptions;
    valueOptions.value = newValueOptions;
    labelOptions.value = newLabelOptions;
  });
  return {
    options: mergedOptions,
    valueOptions,
    labelOptions
  };
}
let uuid$1 = 0;
const isBrowserClient = canUseDom();
function getUUID() {
  let retId;
  if (isBrowserClient) {
    retId = uuid$1;
    uuid$1 += 1;
  } else {
    retId = "TEST_OR_SSR";
  }
  return retId;
}
function useId() {
  let id = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ref("");
  const innerId = `rc_select_${getUUID()}`;
  return id.value || innerId;
}
function toArray(value) {
  if (Array.isArray(value)) {
    return value;
  }
  return value !== void 0 ? [value] : [];
}
function includes(test, search) {
  return toArray(test).join("").toUpperCase().includes(search);
}
const useFilterOptions = (options, fieldNames, searchValue, filterOption, optionFilterProp) => computed(() => {
  const searchValueVal = searchValue.value;
  const optionFilterPropValue = optionFilterProp === null || optionFilterProp === void 0 ? void 0 : optionFilterProp.value;
  const filterOptionValue = filterOption === null || filterOption === void 0 ? void 0 : filterOption.value;
  if (!searchValueVal || filterOptionValue === false) {
    return options.value;
  }
  const {
    options: fieldOptions,
    label: fieldLabel,
    value: fieldValue
  } = fieldNames.value;
  const filteredOptions = [];
  const customizeFilter = typeof filterOptionValue === "function";
  const upperSearch = searchValueVal.toUpperCase();
  const filterFunc = customizeFilter ? filterOptionValue : (_, option) => {
    if (optionFilterPropValue) {
      return includes(option[optionFilterPropValue], upperSearch);
    }
    if (option[fieldOptions]) {
      return includes(option[fieldLabel !== "children" ? fieldLabel : "label"], upperSearch);
    }
    return includes(option[fieldValue], upperSearch);
  };
  const wrapOption = customizeFilter ? (opt) => injectPropsWithOption(opt) : (opt) => opt;
  options.value.forEach((item) => {
    if (item[fieldOptions]) {
      const matchGroup = filterFunc(searchValueVal, wrapOption(item));
      if (matchGroup) {
        filteredOptions.push(item);
      } else {
        const subOptions = item[fieldOptions].filter((subItem) => filterFunc(searchValueVal, wrapOption(subItem)));
        if (subOptions.length) {
          filteredOptions.push(_extends(_extends({}, item), {
            [fieldOptions]: subOptions
          }));
        }
      }
      return;
    }
    if (filterFunc(searchValueVal, wrapOption(item))) {
      filteredOptions.push(item);
    }
  });
  return filteredOptions;
});
const useCache = (labeledValues, valueOptions) => {
  const cacheRef = shallowRef({
    values: /* @__PURE__ */ new Map(),
    options: /* @__PURE__ */ new Map()
  });
  const filledLabeledValues = computed(() => {
    const {
      values: prevValueCache,
      options: prevOptionCache
    } = cacheRef.value;
    const patchedValues = labeledValues.value.map((item) => {
      var _a;
      if (item.label === void 0) {
        return _extends(_extends({}, item), {
          label: (_a = prevValueCache.get(item.value)) === null || _a === void 0 ? void 0 : _a.label
        });
      }
      return item;
    });
    const valueCache = /* @__PURE__ */ new Map();
    const optionCache = /* @__PURE__ */ new Map();
    patchedValues.forEach((item) => {
      valueCache.set(item.value, item);
      optionCache.set(item.value, valueOptions.value.get(item.value) || prevOptionCache.get(item.value));
    });
    cacheRef.value.values = valueCache;
    cacheRef.value.options = optionCache;
    return patchedValues;
  });
  const getOption = (val) => valueOptions.value.get(val) || cacheRef.value.options.get(val);
  return [filledLabeledValues, getOption];
};
const OMIT_DOM_PROPS = ["inputValue"];
function selectProps$1() {
  return _extends(_extends({}, baseSelectPropsWithoutPrivate()), {
    prefixCls: String,
    id: String,
    backfill: {
      type: Boolean,
      default: void 0
    },
    // >>> Field Names
    fieldNames: Object,
    // >>> Search
    /** @deprecated Use `searchValue` instead */
    inputValue: String,
    searchValue: String,
    onSearch: Function,
    autoClearSearchValue: {
      type: Boolean,
      default: void 0
    },
    // >>> Select
    onSelect: Function,
    onDeselect: Function,
    // >>> Options
    /**
     * In Select, `false` means do nothing.
     * In TreeSelect, `false` will highlight match item.
     * It's by design.
     */
    filterOption: {
      type: [Boolean, Function],
      default: void 0
    },
    filterSort: Function,
    optionFilterProp: String,
    optionLabelProp: String,
    options: Array,
    defaultActiveFirstOption: {
      type: Boolean,
      default: void 0
    },
    virtual: {
      type: Boolean,
      default: void 0
    },
    listHeight: Number,
    listItemHeight: Number,
    // >>> Icon
    menuItemSelectedIcon: PropTypes.any,
    mode: String,
    labelInValue: {
      type: Boolean,
      default: void 0
    },
    value: PropTypes.any,
    defaultValue: PropTypes.any,
    onChange: Function,
    children: Array
  });
}
function isRawValue(value) {
  return !value || typeof value !== "object";
}
const Select$1 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "VcSelect",
  inheritAttrs: false,
  props: initDefaultProps(selectProps$1(), {
    prefixCls: "vc-select",
    autoClearSearchValue: true,
    listHeight: 200,
    listItemHeight: 20,
    dropdownMatchSelectWidth: true
  }),
  setup(props2, _ref) {
    let {
      expose,
      attrs,
      slots
    } = _ref;
    const mergedId = useId(toRef(props2, "id"));
    const multiple = computed(() => isMultiple(props2.mode));
    const childrenAsData = computed(() => !!(!props2.options && props2.children));
    const mergedFilterOption = computed(() => {
      if (props2.filterOption === void 0 && props2.mode === "combobox") {
        return false;
      }
      return props2.filterOption;
    });
    const mergedFieldNames = computed(() => fillFieldNames(props2.fieldNames, childrenAsData.value));
    const [mergedSearchValue, setSearchValue] = useMergedState("", {
      value: computed(() => props2.searchValue !== void 0 ? props2.searchValue : props2.inputValue),
      postState: (search) => search || ""
    });
    const parsedOptions = useOptions(toRef(props2, "options"), toRef(props2, "children"), mergedFieldNames);
    const {
      valueOptions,
      labelOptions,
      options: mergedOptions
    } = parsedOptions;
    const convert2LabelValues = (draftValues) => {
      const valueList = toArray(draftValues);
      return valueList.map((val) => {
        var _a, _b;
        let rawValue;
        let rawLabel;
        let rawKey;
        let rawDisabled;
        if (isRawValue(val)) {
          rawValue = val;
        } else {
          rawKey = val.key;
          rawLabel = val.label;
          rawValue = (_a = val.value) !== null && _a !== void 0 ? _a : rawKey;
        }
        const option = valueOptions.value.get(rawValue);
        if (option) {
          if (rawLabel === void 0)
            rawLabel = option === null || option === void 0 ? void 0 : option[props2.optionLabelProp || mergedFieldNames.value.label];
          if (rawKey === void 0)
            rawKey = (_b = option === null || option === void 0 ? void 0 : option.key) !== null && _b !== void 0 ? _b : rawValue;
          rawDisabled = option === null || option === void 0 ? void 0 : option.disabled;
        }
        return {
          label: rawLabel,
          value: rawValue,
          key: rawKey,
          disabled: rawDisabled,
          option
        };
      });
    };
    const [internalValue, setInternalValue] = useMergedState(props2.defaultValue, {
      value: toRef(props2, "value")
    });
    const rawLabeledValues = computed(() => {
      var _a;
      const values = convert2LabelValues(internalValue.value);
      if (props2.mode === "combobox" && !((_a = values[0]) === null || _a === void 0 ? void 0 : _a.value)) {
        return [];
      }
      return values;
    });
    const [mergedValues, getMixedOption] = useCache(rawLabeledValues, valueOptions);
    const displayValues = computed(() => {
      if (!props2.mode && mergedValues.value.length === 1) {
        const firstValue = mergedValues.value[0];
        if (firstValue.value === null && (firstValue.label === null || firstValue.label === void 0)) {
          return [];
        }
      }
      return mergedValues.value.map((item) => {
        var _a;
        return _extends(_extends({}, item), {
          label: (_a = typeof item.label === "function" ? item.label() : item.label) !== null && _a !== void 0 ? _a : item.value
        });
      });
    });
    const rawValues = computed(() => new Set(mergedValues.value.map((val) => val.value)));
    watchEffect(() => {
      var _a;
      if (props2.mode === "combobox") {
        const strValue = (_a = mergedValues.value[0]) === null || _a === void 0 ? void 0 : _a.value;
        if (strValue !== void 0 && strValue !== null) {
          setSearchValue(String(strValue));
        }
      }
    }, {
      flush: "post"
    });
    const createTagOption = (val, label) => {
      const mergedLabel = label !== null && label !== void 0 ? label : val;
      return {
        [mergedFieldNames.value.value]: val,
        [mergedFieldNames.value.label]: mergedLabel
      };
    };
    const filledTagOptions = shallowRef();
    watchEffect(() => {
      if (props2.mode !== "tags") {
        filledTagOptions.value = mergedOptions.value;
        return;
      }
      const cloneOptions = mergedOptions.value.slice();
      const existOptions = (val) => valueOptions.value.has(val);
      [...mergedValues.value].sort((a, b) => a.value < b.value ? -1 : 1).forEach((item) => {
        const val = item.value;
        if (!existOptions(val)) {
          cloneOptions.push(createTagOption(val, item.label));
        }
      });
      filledTagOptions.value = cloneOptions;
    });
    const filteredOptions = useFilterOptions(filledTagOptions, mergedFieldNames, mergedSearchValue, mergedFilterOption, toRef(props2, "optionFilterProp"));
    const filledSearchOptions = computed(() => {
      if (props2.mode !== "tags" || !mergedSearchValue.value || filteredOptions.value.some((item) => item[props2.optionFilterProp || "value"] === mergedSearchValue.value)) {
        return filteredOptions.value;
      }
      return [createTagOption(mergedSearchValue.value), ...filteredOptions.value];
    });
    const orderedFilteredOptions = computed(() => {
      if (!props2.filterSort) {
        return filledSearchOptions.value;
      }
      return [...filledSearchOptions.value].sort((a, b) => props2.filterSort(a, b));
    });
    const displayOptions = computed(() => flattenOptions(orderedFilteredOptions.value, {
      fieldNames: mergedFieldNames.value,
      childrenAsData: childrenAsData.value
    }));
    const triggerChange = (values) => {
      const labeledValues = convert2LabelValues(values);
      setInternalValue(labeledValues);
      if (props2.onChange && // Trigger event only when value changed
      (labeledValues.length !== mergedValues.value.length || labeledValues.some((newVal, index2) => {
        var _a;
        return ((_a = mergedValues.value[index2]) === null || _a === void 0 ? void 0 : _a.value) !== (newVal === null || newVal === void 0 ? void 0 : newVal.value);
      }))) {
        const returnValues = props2.labelInValue ? labeledValues.map((v) => {
          return _extends(_extends({}, v), {
            originLabel: v.label,
            label: typeof v.label === "function" ? v.label() : v.label
          });
        }) : labeledValues.map((v) => v.value);
        const returnOptions = labeledValues.map((v) => injectPropsWithOption(getMixedOption(v.value)));
        props2.onChange(
          // Value
          multiple.value ? returnValues : returnValues[0],
          // Option
          multiple.value ? returnOptions : returnOptions[0]
        );
      }
    };
    const [activeValue, setActiveValue] = useState(null);
    const [accessibilityIndex, setAccessibilityIndex] = useState(0);
    const mergedDefaultActiveFirstOption = computed(() => props2.defaultActiveFirstOption !== void 0 ? props2.defaultActiveFirstOption : props2.mode !== "combobox");
    const onActiveValue = function(active, index2) {
      let {
        source = "keyboard"
      } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      setAccessibilityIndex(index2);
      if (props2.backfill && props2.mode === "combobox" && active !== null && source === "keyboard") {
        setActiveValue(String(active));
      }
    };
    const triggerSelect = (val, selected) => {
      const getSelectEnt = () => {
        var _a;
        const option = getMixedOption(val);
        const originLabel = option === null || option === void 0 ? void 0 : option[mergedFieldNames.value.label];
        return [props2.labelInValue ? {
          label: typeof originLabel === "function" ? originLabel() : originLabel,
          originLabel,
          value: val,
          key: (_a = option === null || option === void 0 ? void 0 : option.key) !== null && _a !== void 0 ? _a : val
        } : val, injectPropsWithOption(option)];
      };
      if (selected && props2.onSelect) {
        const [wrappedValue, option] = getSelectEnt();
        props2.onSelect(wrappedValue, option);
      } else if (!selected && props2.onDeselect) {
        const [wrappedValue, option] = getSelectEnt();
        props2.onDeselect(wrappedValue, option);
      }
    };
    const onInternalSelect = (val, info) => {
      let cloneValues;
      const mergedSelect = multiple.value ? info.selected : true;
      if (mergedSelect) {
        cloneValues = multiple.value ? [...mergedValues.value, val] : [val];
      } else {
        cloneValues = mergedValues.value.filter((v) => v.value !== val);
      }
      triggerChange(cloneValues);
      triggerSelect(val, mergedSelect);
      if (props2.mode === "combobox") {
        setActiveValue("");
      } else if (!multiple.value || props2.autoClearSearchValue) {
        setSearchValue("");
        setActiveValue("");
      }
    };
    const onDisplayValuesChange = (nextValues, info) => {
      triggerChange(nextValues);
      if (info.type === "remove" || info.type === "clear") {
        info.values.forEach((item) => {
          triggerSelect(item.value, false);
        });
      }
    };
    const onInternalSearch = (searchText, info) => {
      var _a;
      setSearchValue(searchText);
      setActiveValue(null);
      if (info.source === "submit") {
        const formatted = (searchText || "").trim();
        if (formatted) {
          const newRawValues = Array.from(/* @__PURE__ */ new Set([...rawValues.value, formatted]));
          triggerChange(newRawValues);
          triggerSelect(formatted, true);
          setSearchValue("");
        }
        return;
      }
      if (info.source !== "blur") {
        if (props2.mode === "combobox") {
          triggerChange(searchText);
        }
        (_a = props2.onSearch) === null || _a === void 0 ? void 0 : _a.call(props2, searchText);
      }
    };
    const onInternalSearchSplit = (words) => {
      let patchValues = words;
      if (props2.mode !== "tags") {
        patchValues = words.map((word) => {
          const opt = labelOptions.value.get(word);
          return opt === null || opt === void 0 ? void 0 : opt.value;
        }).filter((val) => val !== void 0);
      }
      const newRawValues = Array.from(/* @__PURE__ */ new Set([...rawValues.value, ...patchValues]));
      triggerChange(newRawValues);
      newRawValues.forEach((newRawValue) => {
        triggerSelect(newRawValue, true);
      });
    };
    const realVirtual = computed(() => props2.virtual !== false && props2.dropdownMatchSelectWidth !== false);
    useProvideSelectProps(toReactive(_extends(_extends({}, parsedOptions), {
      flattenOptions: displayOptions,
      onActiveValue,
      defaultActiveFirstOption: mergedDefaultActiveFirstOption,
      onSelect: onInternalSelect,
      menuItemSelectedIcon: toRef(props2, "menuItemSelectedIcon"),
      rawValues,
      fieldNames: mergedFieldNames,
      virtual: realVirtual,
      listHeight: toRef(props2, "listHeight"),
      listItemHeight: toRef(props2, "listItemHeight"),
      childrenAsData
    })));
    const selectRef = ref();
    expose({
      focus() {
        var _a;
        (_a = selectRef.value) === null || _a === void 0 ? void 0 : _a.focus();
      },
      blur() {
        var _a;
        (_a = selectRef.value) === null || _a === void 0 ? void 0 : _a.blur();
      },
      scrollTo(arg) {
        var _a;
        (_a = selectRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo(arg);
      }
    });
    const pickProps = computed(() => {
      return omit(props2, [
        "id",
        "mode",
        "prefixCls",
        "backfill",
        "fieldNames",
        // Search
        "inputValue",
        "searchValue",
        "onSearch",
        "autoClearSearchValue",
        // Select
        "onSelect",
        "onDeselect",
        "dropdownMatchSelectWidth",
        // Options
        "filterOption",
        "filterSort",
        "optionFilterProp",
        "optionLabelProp",
        "options",
        "children",
        "defaultActiveFirstOption",
        "menuItemSelectedIcon",
        "virtual",
        "listHeight",
        "listItemHeight",
        // Value
        "value",
        "defaultValue",
        "labelInValue",
        "onChange"
      ]);
    });
    return () => {
      return createVNode(BaseSelect, _objectSpread2(_objectSpread2(_objectSpread2({}, pickProps.value), attrs), {}, {
        "id": mergedId,
        "prefixCls": props2.prefixCls,
        "ref": selectRef,
        "omitDomProps": OMIT_DOM_PROPS,
        "mode": props2.mode,
        "displayValues": displayValues.value,
        "onDisplayValuesChange": onDisplayValuesChange,
        "searchValue": mergedSearchValue.value,
        "onSearch": onInternalSearch,
        "onSearchSplit": onInternalSearchSplit,
        "dropdownMatchSelectWidth": props2.dropdownMatchSelectWidth,
        "OptionList": OptionList$1,
        "emptyOptions": !displayOptions.value.length,
        "activeValue": activeValue.value,
        "activeDescendantId": `${mergedId}_list_${accessibilityIndex.value}`
      }), slots);
    };
  }
});
const Option = () => null;
Option.isSelectOption = true;
Option.displayName = "ASelectOption";
const Option$1 = Option;
const OptGroup = () => null;
OptGroup.isSelectOptGroup = true;
OptGroup.displayName = "ASelectOptGroup";
const OptGroup$1 = OptGroup;
var DownOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, "name": "down", "theme": "outlined" };
const DownOutlinedSvg = DownOutlined$2;
function _objectSpread$a(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$a(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$a(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var DownOutlined = function DownOutlined2(props2, context) {
  var p = _objectSpread$a({}, props2, context.attrs);
  return createVNode(AntdIcon, _objectSpread$a({}, p, {
    "icon": DownOutlinedSvg
  }), null);
};
DownOutlined.displayName = "DownOutlined";
DownOutlined.inheritAttrs = false;
const DownOutlined$1 = DownOutlined;
var LoadingOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, "name": "loading", "theme": "outlined" };
const LoadingOutlinedSvg = LoadingOutlined$2;
function _objectSpread$9(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$9(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$9(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var LoadingOutlined = function LoadingOutlined2(props2, context) {
  var p = _objectSpread$9({}, props2, context.attrs);
  return createVNode(AntdIcon, _objectSpread$9({}, p, {
    "icon": LoadingOutlinedSvg
  }), null);
};
LoadingOutlined.displayName = "LoadingOutlined";
LoadingOutlined.inheritAttrs = false;
const LoadingOutlined$1 = LoadingOutlined;
function getIcons(props2) {
  let slots = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    loading,
    multiple,
    prefixCls,
    hasFeedback,
    feedbackIcon,
    showArrow
  } = props2;
  const suffixIcon = props2.suffixIcon || slots.suffixIcon && slots.suffixIcon();
  const clearIcon = props2.clearIcon || slots.clearIcon && slots.clearIcon();
  const menuItemSelectedIcon = props2.menuItemSelectedIcon || slots.menuItemSelectedIcon && slots.menuItemSelectedIcon();
  const removeIcon = props2.removeIcon || slots.removeIcon && slots.removeIcon();
  const mergedClearIcon = clearIcon !== null && clearIcon !== void 0 ? clearIcon : createVNode(CloseCircleFilled, null, null);
  const getSuffixIconNode = (arrowIcon) => createVNode(Fragment, null, [showArrow !== false && arrowIcon, hasFeedback && feedbackIcon]);
  let mergedSuffixIcon = null;
  if (suffixIcon !== void 0) {
    mergedSuffixIcon = getSuffixIconNode(suffixIcon);
  } else if (loading) {
    mergedSuffixIcon = getSuffixIconNode(createVNode(LoadingOutlined$1, {
      "spin": true
    }, null));
  } else {
    const iconCls = `${prefixCls}-suffix`;
    mergedSuffixIcon = (_ref) => {
      let {
        open: open2,
        showSearch
      } = _ref;
      if (open2 && showSearch) {
        return getSuffixIconNode(createVNode(SearchOutlined, {
          "class": iconCls
        }, null));
      }
      return getSuffixIconNode(createVNode(DownOutlined$1, {
        "class": iconCls
      }, null));
    };
  }
  let mergedItemIcon = null;
  if (menuItemSelectedIcon !== void 0) {
    mergedItemIcon = menuItemSelectedIcon;
  } else if (multiple) {
    mergedItemIcon = createVNode(CheckOutlined, null, null);
  } else {
    mergedItemIcon = null;
  }
  let mergedRemoveIcon = null;
  if (removeIcon !== void 0) {
    mergedRemoveIcon = removeIcon;
  } else {
    mergedRemoveIcon = createVNode(CloseOutlined, null, null);
  }
  return {
    clearIcon: mergedClearIcon,
    suffixIcon: mergedSuffixIcon,
    itemIcon: mergedItemIcon,
    removeIcon: mergedRemoveIcon
  };
}
const genSpaceCompactStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      display: "inline-flex",
      "&-block": {
        display: "flex",
        width: "100%"
      },
      "&-vertical": {
        flexDirection: "column"
      }
    }
  };
};
const genSpaceCompactStyle$1 = genSpaceCompactStyle;
const genSpaceStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      display: "inline-flex",
      "&-rtl": {
        direction: "rtl"
      },
      "&-vertical": {
        flexDirection: "column"
      },
      "&-align": {
        flexDirection: "column",
        "&-center": {
          alignItems: "center"
        },
        "&-start": {
          alignItems: "flex-start"
        },
        "&-end": {
          alignItems: "flex-end"
        },
        "&-baseline": {
          alignItems: "baseline"
        }
      },
      [`${componentCls}-item`]: {
        "&:empty": {
          display: "none"
        }
      }
    }
  };
};
const useStyle$4 = genComponentStyleHook("Space", (token) => [genSpaceStyle(token), genSpaceCompactStyle$1(token)]);
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
function arrayMap(array, iteratee) {
  var index2 = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index2 < length) {
    result[index2] = iteratee(array[index2], index2, array);
  }
  return result;
}
var INFINITY$2 = 1 / 0;
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray(value)) {
    return arrayMap(value, baseToString) + "";
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$2 ? "-0" : result;
}
function identity(value) {
  return value;
}
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
function noop() {
}
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
function constant(value) {
  return function() {
    return value;
  };
}
var defineProperty = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
const defineProperty$1 = defineProperty;
var baseSetToString = !defineProperty$1 ? identity : function(func, string) {
  return defineProperty$1(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
const baseSetToString$1 = baseSetToString;
var setToString = shortOut(baseSetToString$1);
const setToString$1 = setToString;
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length, index2 = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index2-- : ++index2 < length) {
    if (predicate(array[index2], index2, array)) {
      return index2;
    }
  }
  return -1;
}
function baseIsNaN(value) {
  return value !== value;
}
function strictIndexOf(array, value, fromIndex) {
  var index2 = fromIndex - 1, length = array.length;
  while (++index2 < length) {
    if (array[index2] === value) {
      return index2;
    }
  }
  return -1;
}
function baseIndexOf(array, value, fromIndex) {
  return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
}
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty$1) {
    defineProperty$1(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$2.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
var nativeMax = Math.max;
function overRest(func, start, transform) {
  start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index2 = -1, length = nativeMax(args.length - start, 0), array = Array(length);
    while (++index2 < length) {
      array[index2] = args[start + index2];
    }
    index2 = -1;
    var otherArgs = Array(start + 1);
    while (++index2 < start) {
      otherArgs[index2] = args[index2];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}
memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match2, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match2);
  });
  return result;
});
const stringToPath$1 = stringToPath;
function toString(value) {
  return value == null ? "" : baseToString(value);
}
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath$1(toString(value));
}
var INFINITY$1 = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
function baseGet(object, path) {
  path = castPath(path, object);
  var index2 = 0, length = path.length;
  while (object != null && index2 < length) {
    object = object[toKey(path[index2++])];
  }
  return index2 && index2 == length ? object : void 0;
}
var spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : void 0;
function isFlattenable(value) {
  return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index2 = -1, length = array.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);
  while (++index2 < length) {
    var value = array[index2];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}
function flatRest(func) {
  return setToString$1(overRest(func, void 0, flatten), func + "");
}
var getPrototype = overArg(Object.getPrototypeOf, Object);
const getPrototype$1 = getPrototype;
var objectTag = "[object Object]";
var funcProto = Function.prototype, objectProto$1 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype$1(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$1.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);
  var index2 = -1, length = path.length, result = false;
  while (++index2 < length) {
    var key = toKey(path[index2]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index2 != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}
function arrayIncludesWith(array, value, comparator) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (comparator(value, array[index2])) {
      return true;
    }
  }
  return false;
}
var mapTag = "[object Map]", setTag = "[object Set]";
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);
  var index2 = -1, length = path.length, lastIndex = length - 1, nested = object;
  while (nested != null && ++index2 < length) {
    var key = toKey(path[index2]), newValue = value;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object;
    }
    if (index2 != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : void 0;
      if (newValue === void 0) {
        newValue = isObject(objValue) ? objValue : isIndex(path[index2 + 1]) ? [] : {};
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
function basePickBy(object, paths, predicate) {
  var index2 = -1, length = paths.length, result = {};
  while (++index2 < length) {
    var path = paths[index2], value = baseGet(object, path);
    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});
const pick$1 = pick;
var INFINITY = 1 / 0;
var createSet = !(Set$1 && 1 / setToArray(new Set$1([, -0]))[1] == INFINITY) ? noop : function(values) {
  return new Set$1(values);
};
const createSet$1 = createSet;
var LARGE_ARRAY_SIZE = 200;
function baseUniq(array, iteratee, comparator) {
  var index2 = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
  if (comparator) {
    isCommon = false;
    includes2 = arrayIncludesWith;
  } else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet$1(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes2 = cacheHas;
    seen = new SetCache();
  } else {
    seen = iteratee ? [] : result;
  }
  outer:
    while (++index2 < length) {
      var value = array[index2], computed2 = iteratee ? iteratee(value) : value;
      value = comparator || value !== 0 ? value : 0;
      if (isCommon && computed2 === computed2) {
        var seenIndex = seen.length;
        while (seenIndex--) {
          if (seen[seenIndex] === computed2) {
            continue outer;
          }
        }
        if (iteratee) {
          seen.push(computed2);
        }
        result.push(value);
      } else if (!includes2(seen, computed2, comparator)) {
        if (seen !== result) {
          seen.push(computed2);
        }
        result.push(value);
      }
    }
  return result;
}
function uniq(array) {
  return array && array.length ? baseUniq(array) : [];
}
const spaceCompactItemProps = () => ({
  compactSize: String,
  compactDirection: PropTypes.oneOf(tuple("horizontal", "vertical")).def("horizontal"),
  isFirstItem: booleanType(),
  isLastItem: booleanType()
});
const SpaceCompactItemContext = createContext(null);
const useCompactItemContext = (prefixCls, direction) => {
  const compactItemContext = SpaceCompactItemContext.useInject();
  const compactItemClassnames = computed(() => {
    if (!compactItemContext || isEmpty(compactItemContext))
      return "";
    const {
      compactDirection,
      isFirstItem,
      isLastItem
    } = compactItemContext;
    const separator = compactDirection === "vertical" ? "-vertical-" : "-";
    return classNames({
      [`${prefixCls.value}-compact${separator}item`]: true,
      [`${prefixCls.value}-compact${separator}first-item`]: isFirstItem,
      [`${prefixCls.value}-compact${separator}last-item`]: isLastItem,
      [`${prefixCls.value}-compact${separator}item-rtl`]: direction.value === "rtl"
    });
  });
  return {
    compactSize: computed(() => compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactSize),
    compactDirection: computed(() => compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactDirection),
    compactItemClassnames
  };
};
const NoCompactStyle = defineComponent({
  name: "NoCompactStyle",
  setup(_, _ref) {
    let {
      slots
    } = _ref;
    SpaceCompactItemContext.useProvide(null);
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
const spaceCompactProps = () => ({
  prefixCls: String,
  size: {
    type: String
  },
  direction: PropTypes.oneOf(tuple("horizontal", "vertical")).def("horizontal"),
  align: PropTypes.oneOf(tuple("start", "end", "center", "baseline")),
  block: {
    type: Boolean,
    default: void 0
  }
});
const CompactItem = defineComponent({
  name: "CompactItem",
  props: spaceCompactItemProps(),
  setup(props2, _ref2) {
    let {
      slots
    } = _ref2;
    SpaceCompactItemContext.useProvide(props2);
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
defineComponent({
  name: "ASpaceCompact",
  inheritAttrs: false,
  props: spaceCompactProps(),
  setup(props2, _ref3) {
    let {
      attrs,
      slots
    } = _ref3;
    const {
      prefixCls,
      direction: directionConfig
    } = useConfigInject("space-compact", props2);
    const compactItemContext = SpaceCompactItemContext.useInject();
    const [wrapSSR, hashId] = useStyle$4(prefixCls);
    const clx = computed(() => {
      return classNames(prefixCls.value, hashId.value, {
        [`${prefixCls.value}-rtl`]: directionConfig.value === "rtl",
        [`${prefixCls.value}-block`]: props2.block,
        [`${prefixCls.value}-vertical`]: props2.direction === "vertical"
      });
    });
    return () => {
      var _a;
      const childNodes = flattenChildren(((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) || []);
      if (childNodes.length === 0) {
        return null;
      }
      return wrapSSR(createVNode("div", _objectSpread2(_objectSpread2({}, attrs), {}, {
        "class": [clx.value, attrs.class]
      }), [childNodes.map((child, i) => {
        var _a2;
        const key = child && child.key || `${prefixCls.value}-item-${i}`;
        const noCompactItemContext = !compactItemContext || isEmpty(compactItemContext);
        return createVNode(CompactItem, {
          "key": key,
          "compactSize": (_a2 = props2.size) !== null && _a2 !== void 0 ? _a2 : "middle",
          "compactDirection": props2.direction,
          "isFirstItem": i === 0 && (noCompactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isFirstItem)),
          "isLastItem": i === childNodes.length - 1 && (noCompactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isLastItem))
        }, {
          default: () => [child]
        });
      })]));
    };
  }
});
const moveDownIn = new Keyframes("antMoveDownIn", {
  "0%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
const moveDownOut = new Keyframes("antMoveDownOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
const moveLeftIn = new Keyframes("antMoveLeftIn", {
  "0%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
const moveLeftOut = new Keyframes("antMoveLeftOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
const moveRightIn = new Keyframes("antMoveRightIn", {
  "0%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
const moveRightOut = new Keyframes("antMoveRightOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
const moveUpIn = new Keyframes("antMoveUpIn", {
  "0%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
const moveUpOut = new Keyframes("antMoveUpOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
const moveMotion = {
  "move-up": {
    inKeyframes: moveUpIn,
    outKeyframes: moveUpOut
  },
  "move-down": {
    inKeyframes: moveDownIn,
    outKeyframes: moveDownOut
  },
  "move-left": {
    inKeyframes: moveLeftIn,
    outKeyframes: moveLeftOut
  },
  "move-right": {
    inKeyframes: moveRightIn,
    outKeyframes: moveRightOut
  }
};
const initMoveMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = moveMotion[motionName];
  return [initMotion(motionCls, inKeyframes, outKeyframes, token.motionDurationMid), {
    [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: token.motionEaseOutCirc
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token.motionEaseInOutCirc
    }
  }];
};
const slideUpIn = new Keyframes("antSlideUpIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
});
const slideUpOut = new Keyframes("antSlideUpOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
});
const slideDownIn = new Keyframes("antSlideDownIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  }
});
const slideDownOut = new Keyframes("antSlideDownOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  }
});
const slideLeftIn = new Keyframes("antSlideLeftIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
});
const slideLeftOut = new Keyframes("antSlideLeftOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
});
const slideRightIn = new Keyframes("antSlideRightIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  }
});
const slideRightOut = new Keyframes("antSlideRightOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  }
});
const slideMotion = {
  "slide-up": {
    inKeyframes: slideUpIn,
    outKeyframes: slideUpOut
  },
  "slide-down": {
    inKeyframes: slideDownIn,
    outKeyframes: slideDownOut
  },
  "slide-left": {
    inKeyframes: slideLeftIn,
    outKeyframes: slideLeftOut
  },
  "slide-right": {
    inKeyframes: slideRightIn,
    outKeyframes: slideRightOut
  }
};
const initSlideMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = slideMotion[motionName];
  return [initMotion(motionCls, inKeyframes, outKeyframes, token.motionDurationMid), {
    [`
      ${motionCls}-enter,
      ${motionCls}-appear
    `]: {
      transform: "scale(0)",
      transformOrigin: "0% 0%",
      opacity: 0,
      animationTimingFunction: token.motionEaseOutQuint
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token.motionEaseInQuint
    }
  }];
};
const genCollapseMotion = (token) => ({
  [token.componentCls]: {
    // For common/openAnimation
    [`${token.antCls}-motion-collapse-legacy`]: {
      overflow: "hidden",
      "&-active": {
        transition: `height ${token.motionDurationMid} ${token.motionEaseInOut},
        opacity ${token.motionDurationMid} ${token.motionEaseInOut} !important`
      }
    },
    [`${token.antCls}-motion-collapse`]: {
      overflow: "hidden",
      transition: `height ${token.motionDurationMid} ${token.motionEaseInOut},
        opacity ${token.motionDurationMid} ${token.motionEaseInOut} !important`
    }
  }
});
const genCollapseMotion$1 = genCollapseMotion;
const genItemStyle = (token) => {
  const {
    controlPaddingHorizontal
  } = token;
  return {
    position: "relative",
    display: "block",
    minHeight: token.controlHeight,
    padding: `${(token.controlHeight - token.fontSize * token.lineHeight) / 2}px ${controlPaddingHorizontal}px`,
    color: token.colorText,
    fontWeight: "normal",
    fontSize: token.fontSize,
    lineHeight: token.lineHeight,
    boxSizing: "border-box"
  };
};
const genSingleStyle$1 = (token) => {
  const {
    antCls,
    componentCls
  } = token;
  const selectItemCls = `${componentCls}-item`;
  return [
    {
      [`${componentCls}-dropdown`]: _extends(_extends({}, resetComponent(token)), {
        position: "absolute",
        top: -9999,
        zIndex: token.zIndexPopup,
        boxSizing: "border-box",
        padding: token.paddingXXS,
        overflow: "hidden",
        fontSize: token.fontSize,
        // Fix select render lag of long text in chrome
        // https://github.com/ant-design/ant-design/issues/11456
        // https://github.com/ant-design/ant-design/issues/11843
        fontVariant: "initial",
        backgroundColor: token.colorBgElevated,
        borderRadius: token.borderRadiusLG,
        outline: "none",
        boxShadow: token.boxShadowSecondary,
        [`
            &${antCls}-slide-up-enter${antCls}-slide-up-enter-active${componentCls}-dropdown-placement-bottomLeft,
            &${antCls}-slide-up-appear${antCls}-slide-up-appear-active${componentCls}-dropdown-placement-bottomLeft
          `]: {
          animationName: slideUpIn
        },
        [`
            &${antCls}-slide-up-enter${antCls}-slide-up-enter-active${componentCls}-dropdown-placement-topLeft,
            &${antCls}-slide-up-appear${antCls}-slide-up-appear-active${componentCls}-dropdown-placement-topLeft
          `]: {
          animationName: slideDownIn
        },
        [`&${antCls}-slide-up-leave${antCls}-slide-up-leave-active${componentCls}-dropdown-placement-bottomLeft`]: {
          animationName: slideUpOut
        },
        [`&${antCls}-slide-up-leave${antCls}-slide-up-leave-active${componentCls}-dropdown-placement-topLeft`]: {
          animationName: slideDownOut
        },
        "&-hidden": {
          display: "none"
        },
        "&-empty": {
          color: token.colorTextDisabled
        },
        // ========================= Options =========================
        [`${selectItemCls}-empty`]: _extends(_extends({}, genItemStyle(token)), {
          color: token.colorTextDisabled
        }),
        [`${selectItemCls}`]: _extends(_extends({}, genItemStyle(token)), {
          cursor: "pointer",
          transition: `background ${token.motionDurationSlow} ease`,
          borderRadius: token.borderRadiusSM,
          // =========== Group ============
          "&-group": {
            color: token.colorTextDescription,
            fontSize: token.fontSizeSM,
            cursor: "default"
          },
          // =========== Option ===========
          "&-option": {
            display: "flex",
            "&-content": _extends({
              flex: "auto"
            }, textEllipsis),
            "&-state": {
              flex: "none"
            },
            [`&-active:not(${selectItemCls}-option-disabled)`]: {
              backgroundColor: token.controlItemBgHover
            },
            [`&-selected:not(${selectItemCls}-option-disabled)`]: {
              color: token.colorText,
              fontWeight: token.fontWeightStrong,
              backgroundColor: token.controlItemBgActive,
              [`${selectItemCls}-option-state`]: {
                color: token.colorPrimary
              }
            },
            "&-disabled": {
              [`&${selectItemCls}-option-selected`]: {
                backgroundColor: token.colorBgContainerDisabled
              },
              color: token.colorTextDisabled,
              cursor: "not-allowed"
            },
            "&-grouped": {
              paddingInlineStart: token.controlPaddingHorizontal * 2
            }
          }
        }),
        // =========================== RTL ===========================
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Follow code may reuse in other components
    initSlideMotion(token, "slide-up"),
    initSlideMotion(token, "slide-down"),
    initMoveMotion(token, "move-up"),
    initMoveMotion(token, "move-down")
  ];
};
const genDropdownStyle$1 = genSingleStyle$1;
const FIXED_ITEM_MARGIN = 2;
function getSelectItemStyle(_ref) {
  let {
    controlHeightSM,
    controlHeight,
    lineWidth: borderWidth
  } = _ref;
  const selectItemDist = (controlHeight - controlHeightSM) / 2 - borderWidth;
  const selectItemMargin = Math.ceil(selectItemDist / 2);
  return [selectItemDist, selectItemMargin];
}
function genSizeStyle$2(token, suffix) {
  const {
    componentCls,
    iconCls
  } = token;
  const selectOverflowPrefixCls = `${componentCls}-selection-overflow`;
  const selectItemHeight = token.controlHeightSM;
  const [selectItemDist] = getSelectItemStyle(token);
  const suffixCls = suffix ? `${componentCls}-${suffix}` : "";
  return {
    [`${componentCls}-multiple${suffixCls}`]: {
      fontSize: token.fontSize,
      /**
       * Do not merge `height` & `line-height` under style with `selection` & `search`, since chrome
       * may update to redesign with its align logic.
       */
      // =========================== Overflow ===========================
      [selectOverflowPrefixCls]: {
        position: "relative",
        display: "flex",
        flex: "auto",
        flexWrap: "wrap",
        maxWidth: "100%",
        "&-item": {
          flex: "none",
          alignSelf: "center",
          maxWidth: "100%",
          display: "inline-flex"
        }
      },
      // ========================= Selector =========================
      [`${componentCls}-selector`]: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        // Multiple is little different that horizontal is follow the vertical
        padding: `${selectItemDist - FIXED_ITEM_MARGIN}px ${FIXED_ITEM_MARGIN * 2}px`,
        borderRadius: token.borderRadius,
        [`${componentCls}-show-search&`]: {
          cursor: "text"
        },
        [`${componentCls}-disabled&`]: {
          background: token.colorBgContainerDisabled,
          cursor: "not-allowed"
        },
        "&:after": {
          display: "inline-block",
          width: 0,
          margin: `${FIXED_ITEM_MARGIN}px 0`,
          lineHeight: `${selectItemHeight}px`,
          content: '"\\a0"'
        }
      },
      [`
        &${componentCls}-show-arrow ${componentCls}-selector,
        &${componentCls}-allow-clear ${componentCls}-selector
      `]: {
        paddingInlineEnd: token.fontSizeIcon + token.controlPaddingHorizontal
      },
      // ======================== Selections ========================
      [`${componentCls}-selection-item`]: {
        position: "relative",
        display: "flex",
        flex: "none",
        boxSizing: "border-box",
        maxWidth: "100%",
        height: selectItemHeight,
        marginTop: FIXED_ITEM_MARGIN,
        marginBottom: FIXED_ITEM_MARGIN,
        lineHeight: `${selectItemHeight - token.lineWidth * 2}px`,
        background: token.colorFillSecondary,
        border: `${token.lineWidth}px solid ${token.colorSplit}`,
        borderRadius: token.borderRadiusSM,
        cursor: "default",
        transition: `font-size ${token.motionDurationSlow}, line-height ${token.motionDurationSlow}, height ${token.motionDurationSlow}`,
        userSelect: "none",
        marginInlineEnd: FIXED_ITEM_MARGIN * 2,
        paddingInlineStart: token.paddingXS,
        paddingInlineEnd: token.paddingXS / 2,
        [`${componentCls}-disabled&`]: {
          color: token.colorTextDisabled,
          borderColor: token.colorBorder,
          cursor: "not-allowed"
        },
        // It's ok not to do this, but 24px makes bottom narrow in view should adjust
        "&-content": {
          display: "inline-block",
          marginInlineEnd: token.paddingXS / 2,
          overflow: "hidden",
          whiteSpace: "pre",
          textOverflow: "ellipsis"
        },
        "&-remove": _extends(_extends({}, resetIcon()), {
          display: "inline-block",
          color: token.colorIcon,
          fontWeight: "bold",
          fontSize: 10,
          lineHeight: "inherit",
          cursor: "pointer",
          [`> ${iconCls}`]: {
            verticalAlign: "-0.2em"
          },
          "&:hover": {
            color: token.colorIconHover
          }
        })
      },
      // ========================== Input ==========================
      [`${selectOverflowPrefixCls}-item + ${selectOverflowPrefixCls}-item`]: {
        [`${componentCls}-selection-search`]: {
          marginInlineStart: 0
        }
      },
      [`${componentCls}-selection-search`]: {
        display: "inline-flex",
        position: "relative",
        maxWidth: "100%",
        marginInlineStart: token.inputPaddingHorizontalBase - selectItemDist,
        [`
          &-input,
          &-mirror
        `]: {
          height: selectItemHeight,
          fontFamily: token.fontFamily,
          lineHeight: `${selectItemHeight}px`,
          transition: `all ${token.motionDurationSlow}`
        },
        "&-input": {
          width: "100%",
          minWidth: 4.1
          // fix search cursor missing
        },
        "&-mirror": {
          position: "absolute",
          top: 0,
          insetInlineStart: 0,
          insetInlineEnd: "auto",
          zIndex: 999,
          whiteSpace: "pre",
          visibility: "hidden"
        }
      },
      // ======================= Placeholder =======================
      [`${componentCls}-selection-placeholder `]: {
        position: "absolute",
        top: "50%",
        insetInlineStart: token.inputPaddingHorizontalBase,
        insetInlineEnd: token.inputPaddingHorizontalBase,
        transform: "translateY(-50%)",
        transition: `all ${token.motionDurationSlow}`
      }
    }
  };
}
function genMultipleStyle(token) {
  const {
    componentCls
  } = token;
  const smallToken = merge(token, {
    controlHeight: token.controlHeightSM,
    controlHeightSM: token.controlHeightXS,
    borderRadius: token.borderRadiusSM,
    borderRadiusSM: token.borderRadiusXS
  });
  const [, smSelectItemMargin] = getSelectItemStyle(token);
  return [
    genSizeStyle$2(token),
    // ======================== Small ========================
    // Shared
    genSizeStyle$2(smallToken, "sm"),
    // Padding
    {
      [`${componentCls}-multiple${componentCls}-sm`]: {
        [`${componentCls}-selection-placeholder`]: {
          insetInlineStart: token.controlPaddingHorizontalSM - token.lineWidth,
          insetInlineEnd: "auto"
        },
        // https://github.com/ant-design/ant-design/issues/29559
        [`${componentCls}-selection-search`]: {
          marginInlineStart: smSelectItemMargin
        }
      }
    },
    // ======================== Large ========================
    // Shared
    genSizeStyle$2(merge(token, {
      fontSize: token.fontSizeLG,
      controlHeight: token.controlHeightLG,
      controlHeightSM: token.controlHeight,
      borderRadius: token.borderRadiusLG,
      borderRadiusSM: token.borderRadius
    }), "lg")
  ];
}
function genSizeStyle$1(token, suffix) {
  const {
    componentCls,
    inputPaddingHorizontalBase,
    borderRadius
  } = token;
  const selectHeightWithoutBorder = token.controlHeight - token.lineWidth * 2;
  const selectionItemPadding = Math.ceil(token.fontSize * 1.25);
  const suffixCls = suffix ? `${componentCls}-${suffix}` : "";
  return {
    [`${componentCls}-single${suffixCls}`]: {
      fontSize: token.fontSize,
      // ========================= Selector =========================
      [`${componentCls}-selector`]: _extends(_extends({}, resetComponent(token)), {
        display: "flex",
        borderRadius,
        [`${componentCls}-selection-search`]: {
          position: "absolute",
          top: 0,
          insetInlineStart: inputPaddingHorizontalBase,
          insetInlineEnd: inputPaddingHorizontalBase,
          bottom: 0,
          "&-input": {
            width: "100%"
          }
        },
        [`
          ${componentCls}-selection-item,
          ${componentCls}-selection-placeholder
        `]: {
          padding: 0,
          lineHeight: `${selectHeightWithoutBorder}px`,
          transition: `all ${token.motionDurationSlow}`,
          // Firefox inline-block position calculation is not same as Chrome & Safari. Patch this:
          "@supports (-moz-appearance: meterbar)": {
            lineHeight: `${selectHeightWithoutBorder}px`
          }
        },
        [`${componentCls}-selection-item`]: {
          position: "relative",
          userSelect: "none"
        },
        [`${componentCls}-selection-placeholder`]: {
          transition: "none",
          pointerEvents: "none"
        },
        // For common baseline align
        [[
          "&:after",
          /* For '' value baseline align */
          `${componentCls}-selection-item:after`,
          /* For undefined value baseline align */
          `${componentCls}-selection-placeholder:after`
        ].join(",")]: {
          display: "inline-block",
          width: 0,
          visibility: "hidden",
          content: '"\\a0"'
        }
      }),
      [`
        &${componentCls}-show-arrow ${componentCls}-selection-item,
        &${componentCls}-show-arrow ${componentCls}-selection-placeholder
      `]: {
        paddingInlineEnd: selectionItemPadding
      },
      // Opacity selection if open
      [`&${componentCls}-open ${componentCls}-selection-item`]: {
        color: token.colorTextPlaceholder
      },
      // ========================== Input ==========================
      // We only change the style of non-customize input which is only support by `combobox` mode.
      // Not customize
      [`&:not(${componentCls}-customize-input)`]: {
        [`${componentCls}-selector`]: {
          width: "100%",
          height: token.controlHeight,
          padding: `0 ${inputPaddingHorizontalBase}px`,
          [`${componentCls}-selection-search-input`]: {
            height: selectHeightWithoutBorder
          },
          "&:after": {
            lineHeight: `${selectHeightWithoutBorder}px`
          }
        }
      },
      [`&${componentCls}-customize-input`]: {
        [`${componentCls}-selector`]: {
          "&:after": {
            display: "none"
          },
          [`${componentCls}-selection-search`]: {
            position: "static",
            width: "100%"
          },
          [`${componentCls}-selection-placeholder`]: {
            position: "absolute",
            insetInlineStart: 0,
            insetInlineEnd: 0,
            padding: `0 ${inputPaddingHorizontalBase}px`,
            "&:after": {
              display: "none"
            }
          }
        }
      }
    }
  };
}
function genSingleStyle(token) {
  const {
    componentCls
  } = token;
  const inputPaddingHorizontalSM = token.controlPaddingHorizontalSM - token.lineWidth;
  return [
    genSizeStyle$1(token),
    // ======================== Small ========================
    // Shared
    genSizeStyle$1(merge(token, {
      controlHeight: token.controlHeightSM,
      borderRadius: token.borderRadiusSM
    }), "sm"),
    // padding
    {
      [`${componentCls}-single${componentCls}-sm`]: {
        [`&:not(${componentCls}-customize-input)`]: {
          [`${componentCls}-selection-search`]: {
            insetInlineStart: inputPaddingHorizontalSM,
            insetInlineEnd: inputPaddingHorizontalSM
          },
          [`${componentCls}-selector`]: {
            padding: `0 ${inputPaddingHorizontalSM}px`
          },
          // With arrow should provides `padding-right` to show the arrow
          [`&${componentCls}-show-arrow ${componentCls}-selection-search`]: {
            insetInlineEnd: inputPaddingHorizontalSM + token.fontSize * 1.5
          },
          [`
            &${componentCls}-show-arrow ${componentCls}-selection-item,
            &${componentCls}-show-arrow ${componentCls}-selection-placeholder
          `]: {
            paddingInlineEnd: token.fontSize * 1.5
          }
        }
      }
    },
    // ======================== Large ========================
    // Shared
    genSizeStyle$1(merge(token, {
      controlHeight: token.controlHeightLG,
      fontSize: token.fontSizeLG,
      borderRadius: token.borderRadiusLG
    }), "lg")
  ];
}
const genSelectorStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    position: "relative",
    backgroundColor: token.colorBgContainer,
    border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
    transition: `all ${token.motionDurationMid} ${token.motionEaseInOut}`,
    input: {
      cursor: "pointer"
    },
    [`${componentCls}-show-search&`]: {
      cursor: "text",
      input: {
        cursor: "auto",
        color: "inherit"
      }
    },
    [`${componentCls}-disabled&`]: {
      color: token.colorTextDisabled,
      background: token.colorBgContainerDisabled,
      cursor: "not-allowed",
      [`${componentCls}-multiple&`]: {
        background: token.colorBgContainerDisabled
      },
      input: {
        cursor: "not-allowed"
      }
    }
  };
};
const genStatusStyle = function(rootSelectCls, token) {
  let overwriteDefaultBorder = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  const {
    componentCls,
    borderHoverColor,
    outlineColor,
    antCls
  } = token;
  const overwriteStyle = overwriteDefaultBorder ? {
    [`${componentCls}-selector`]: {
      borderColor: borderHoverColor
    }
  } : {};
  return {
    [rootSelectCls]: {
      [`&:not(${componentCls}-disabled):not(${componentCls}-customize-input):not(${antCls}-pagination-size-changer)`]: _extends(_extends({}, overwriteStyle), {
        [`${componentCls}-focused& ${componentCls}-selector`]: {
          borderColor: borderHoverColor,
          boxShadow: `0 0 0 ${token.controlOutlineWidth}px ${outlineColor}`,
          borderInlineEndWidth: `${token.controlLineWidth}px !important`,
          outline: 0
        },
        [`&:hover ${componentCls}-selector`]: {
          borderColor: borderHoverColor,
          borderInlineEndWidth: `${token.controlLineWidth}px !important`
        }
      })
    }
  };
};
const getSearchInputWithoutBorderStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-selection-search-input`]: {
      margin: 0,
      padding: 0,
      background: "transparent",
      border: "none",
      outline: "none",
      appearance: "none",
      "&::-webkit-search-cancel-button": {
        display: "none",
        "-webkit-appearance": "none"
      }
    }
  };
};
const genBaseStyle = (token) => {
  const {
    componentCls,
    inputPaddingHorizontalBase,
    iconCls
  } = token;
  return {
    [componentCls]: _extends(_extends({}, resetComponent(token)), {
      position: "relative",
      display: "inline-block",
      cursor: "pointer",
      [`&:not(${componentCls}-customize-input) ${componentCls}-selector`]: _extends(_extends({}, genSelectorStyle(token)), getSearchInputWithoutBorderStyle(token)),
      // [`&:not(&-disabled):hover ${selectCls}-selector`]: {
      //   ...genHoverStyle(token),
      // },
      // ======================== Selection ========================
      [`${componentCls}-selection-item`]: _extends({
        flex: 1,
        fontWeight: "normal"
      }, textEllipsis),
      // ======================= Placeholder =======================
      [`${componentCls}-selection-placeholder`]: _extends(_extends({}, textEllipsis), {
        flex: 1,
        color: token.colorTextPlaceholder,
        pointerEvents: "none"
      }),
      // ========================== Arrow ==========================
      [`${componentCls}-arrow`]: _extends(_extends({}, resetIcon()), {
        position: "absolute",
        top: "50%",
        insetInlineStart: "auto",
        insetInlineEnd: inputPaddingHorizontalBase,
        height: token.fontSizeIcon,
        marginTop: -token.fontSizeIcon / 2,
        color: token.colorTextQuaternary,
        fontSize: token.fontSizeIcon,
        lineHeight: 1,
        textAlign: "center",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        [iconCls]: {
          verticalAlign: "top",
          transition: `transform ${token.motionDurationSlow}`,
          "> svg": {
            verticalAlign: "top"
          },
          [`&:not(${componentCls}-suffix)`]: {
            pointerEvents: "auto"
          }
        },
        [`${componentCls}-disabled &`]: {
          cursor: "not-allowed"
        },
        "> *:not(:last-child)": {
          marginInlineEnd: 8
          // FIXME: magic
        }
      }),
      // ========================== Clear ==========================
      [`${componentCls}-clear`]: {
        position: "absolute",
        top: "50%",
        insetInlineStart: "auto",
        insetInlineEnd: inputPaddingHorizontalBase,
        zIndex: 1,
        display: "inline-block",
        width: token.fontSizeIcon,
        height: token.fontSizeIcon,
        marginTop: -token.fontSizeIcon / 2,
        color: token.colorTextQuaternary,
        fontSize: token.fontSizeIcon,
        fontStyle: "normal",
        lineHeight: 1,
        textAlign: "center",
        textTransform: "none",
        background: token.colorBgContainer,
        cursor: "pointer",
        opacity: 0,
        transition: `color ${token.motionDurationMid} ease, opacity ${token.motionDurationSlow} ease`,
        textRendering: "auto",
        "&:before": {
          display: "block"
        },
        "&:hover": {
          color: token.colorTextTertiary
        }
      },
      "&:hover": {
        [`${componentCls}-clear`]: {
          opacity: 1
        }
      }
    }),
    // ========================= Feedback ==========================
    [`${componentCls}-has-feedback`]: {
      [`${componentCls}-clear`]: {
        insetInlineEnd: inputPaddingHorizontalBase + token.fontSize + token.paddingXXS
      }
    }
  };
};
const genSelectStyle = (token) => {
  const {
    componentCls
  } = token;
  return [
    {
      [componentCls]: {
        // ==================== BorderLess ====================
        [`&-borderless ${componentCls}-selector`]: {
          backgroundColor: `transparent !important`,
          borderColor: `transparent !important`,
          boxShadow: `none !important`
        },
        // ==================== In Form ====================
        [`&${componentCls}-in-form-item`]: {
          width: "100%"
        }
      }
    },
    // =====================================================
    // ==                       LTR                       ==
    // =====================================================
    // Base
    genBaseStyle(token),
    // Single
    genSingleStyle(token),
    // Multiple
    genMultipleStyle(token),
    // Dropdown
    genDropdownStyle$1(token),
    // =====================================================
    // ==                       RTL                       ==
    // =====================================================
    {
      [`${componentCls}-rtl`]: {
        direction: "rtl"
      }
    },
    // =====================================================
    // ==                     Status                      ==
    // =====================================================
    genStatusStyle(componentCls, merge(token, {
      borderHoverColor: token.colorPrimaryHover,
      outlineColor: token.controlOutline
    })),
    genStatusStyle(`${componentCls}-status-error`, merge(token, {
      borderHoverColor: token.colorErrorHover,
      outlineColor: token.colorErrorOutline
    }), true),
    genStatusStyle(`${componentCls}-status-warning`, merge(token, {
      borderHoverColor: token.colorWarningHover,
      outlineColor: token.colorWarningOutline
    }), true),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    genCompactItemStyle(token, {
      borderElCls: `${componentCls}-selector`,
      focusElCls: `${componentCls}-focused`
    })
  ];
};
const useSelectStyle = genComponentStyleHook("Select", (token, _ref) => {
  let {
    rootPrefixCls
  } = _ref;
  const selectToken = merge(token, {
    rootPrefixCls,
    inputPaddingHorizontalBase: token.paddingSM - 1
  });
  return [genSelectStyle(selectToken)];
}, (token) => ({
  zIndexPopup: token.zIndexPopupBase + 50
}));
const selectProps = () => _extends(_extends({}, omit(selectProps$1(), ["inputIcon", "mode", "getInputElement", "getRawInputElement", "backfill"])), {
  value: someType([Array, Object, String, Number]),
  defaultValue: someType([Array, Object, String, Number]),
  notFoundContent: PropTypes.any,
  suffixIcon: PropTypes.any,
  itemIcon: PropTypes.any,
  size: stringType(),
  mode: stringType(),
  bordered: booleanType(true),
  transitionName: String,
  choiceTransitionName: stringType(""),
  popupClassName: String,
  /** @deprecated Please use `popupClassName` instead */
  dropdownClassName: String,
  placement: stringType(),
  status: stringType(),
  "onUpdate:value": functionType()
});
const SECRET_COMBOBOX_MODE_DO_NOT_USE = "SECRET_COMBOBOX_MODE_DO_NOT_USE";
const Select = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ASelect",
  Option: Option$1,
  OptGroup: OptGroup$1,
  inheritAttrs: false,
  props: initDefaultProps(selectProps(), {
    listHeight: 256,
    listItemHeight: 24
  }),
  SECRET_COMBOBOX_MODE_DO_NOT_USE,
  slots: Object,
  setup(props2, _ref) {
    let {
      attrs,
      emit,
      slots,
      expose
    } = _ref;
    const selectRef = ref();
    const formItemContext = useInjectFormItemContext();
    const formItemInputContext = FormItemInputContext.useInject();
    const mergedStatus = computed(() => getMergedStatus(formItemInputContext.status, props2.status));
    const focus = () => {
      var _a;
      (_a = selectRef.value) === null || _a === void 0 ? void 0 : _a.focus();
    };
    const blur = () => {
      var _a;
      (_a = selectRef.value) === null || _a === void 0 ? void 0 : _a.blur();
    };
    const scrollTo = (arg) => {
      var _a;
      (_a = selectRef.value) === null || _a === void 0 ? void 0 : _a.scrollTo(arg);
    };
    const mode = computed(() => {
      const {
        mode: mode2
      } = props2;
      if (mode2 === "combobox") {
        return void 0;
      }
      if (mode2 === SECRET_COMBOBOX_MODE_DO_NOT_USE) {
        return "combobox";
      }
      return mode2;
    });
    const {
      prefixCls,
      direction,
      configProvider,
      renderEmpty,
      size: contextSize,
      getPrefixCls,
      getPopupContainer,
      disabled,
      select
    } = useConfigInject("select", props2);
    const {
      compactSize,
      compactItemClassnames
    } = useCompactItemContext(prefixCls, direction);
    const mergedSize = computed(() => compactSize.value || contextSize.value);
    const contextDisabled = useInjectDisabled();
    const mergedDisabled = computed(() => {
      var _a;
      return (_a = disabled.value) !== null && _a !== void 0 ? _a : contextDisabled.value;
    });
    const [wrapSSR, hashId] = useSelectStyle(prefixCls);
    const rootPrefixCls = computed(() => getPrefixCls());
    const placement = computed(() => {
      if (props2.placement !== void 0) {
        return props2.placement;
      }
      return direction.value === "rtl" ? "bottomRight" : "bottomLeft";
    });
    const transitionName = computed(() => getTransitionName(rootPrefixCls.value, getTransitionDirection(placement.value), props2.transitionName));
    const mergedClassName = computed(() => classNames({
      [`${prefixCls.value}-lg`]: mergedSize.value === "large",
      [`${prefixCls.value}-sm`]: mergedSize.value === "small",
      [`${prefixCls.value}-rtl`]: direction.value === "rtl",
      [`${prefixCls.value}-borderless`]: !props2.bordered,
      [`${prefixCls.value}-in-form-item`]: formItemInputContext.isFormItemInput
    }, getStatusClassNames(prefixCls.value, mergedStatus.value, formItemInputContext.hasFeedback), compactItemClassnames.value, hashId.value));
    const triggerChange = function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      emit("update:value", args[0]);
      emit("change", ...args);
      formItemContext.onFieldChange();
    };
    const handleBlur = (e) => {
      emit("blur", e);
      formItemContext.onFieldBlur();
    };
    expose({
      blur,
      focus,
      scrollTo
    });
    const isMultiple2 = computed(() => mode.value === "multiple" || mode.value === "tags");
    const mergedShowArrow = computed(() => props2.showArrow !== void 0 ? props2.showArrow : props2.loading || !(isMultiple2.value || mode.value === "combobox"));
    return () => {
      var _a, _b, _c, _d;
      const {
        notFoundContent,
        listHeight = 256,
        listItemHeight = 24,
        popupClassName,
        dropdownClassName,
        virtual,
        dropdownMatchSelectWidth,
        id = formItemContext.id.value,
        placeholder = (_a = slots.placeholder) === null || _a === void 0 ? void 0 : _a.call(slots),
        showArrow
      } = props2;
      const {
        hasFeedback,
        feedbackIcon
      } = formItemInputContext;
      let mergedNotFound;
      if (notFoundContent !== void 0) {
        mergedNotFound = notFoundContent;
      } else if (slots.notFoundContent) {
        mergedNotFound = slots.notFoundContent();
      } else if (mode.value === "combobox") {
        mergedNotFound = null;
      } else {
        mergedNotFound = (renderEmpty === null || renderEmpty === void 0 ? void 0 : renderEmpty("Select")) || createVNode(DefaultRenderEmpty, {
          "componentName": "Select"
        }, null);
      }
      const {
        suffixIcon,
        itemIcon,
        removeIcon,
        clearIcon
      } = getIcons(_extends(_extends({}, props2), {
        multiple: isMultiple2.value,
        prefixCls: prefixCls.value,
        hasFeedback,
        feedbackIcon,
        showArrow: mergedShowArrow.value
      }), slots);
      const selectProps2 = omit(props2, ["prefixCls", "suffixIcon", "itemIcon", "removeIcon", "clearIcon", "size", "bordered", "status"]);
      const rcSelectRtlDropdownClassName = classNames(popupClassName || dropdownClassName, {
        [`${prefixCls.value}-dropdown-${direction.value}`]: direction.value === "rtl"
      }, hashId.value);
      return wrapSSR(createVNode(Select$1, _objectSpread2(_objectSpread2(_objectSpread2({
        "ref": selectRef,
        "virtual": virtual,
        "dropdownMatchSelectWidth": dropdownMatchSelectWidth
      }, selectProps2), attrs), {}, {
        "showSearch": (_b = props2.showSearch) !== null && _b !== void 0 ? _b : (_c = select === null || select === void 0 ? void 0 : select.value) === null || _c === void 0 ? void 0 : _c.showSearch,
        "placeholder": placeholder,
        "listHeight": listHeight,
        "listItemHeight": listItemHeight,
        "mode": mode.value,
        "prefixCls": prefixCls.value,
        "direction": direction.value,
        "inputIcon": suffixIcon,
        "menuItemSelectedIcon": itemIcon,
        "removeIcon": removeIcon,
        "clearIcon": clearIcon,
        "notFoundContent": mergedNotFound,
        "class": [mergedClassName.value, attrs.class],
        "getPopupContainer": getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer.value,
        "dropdownClassName": rcSelectRtlDropdownClassName,
        "onChange": triggerChange,
        "onBlur": handleBlur,
        "id": id,
        "dropdownRender": selectProps2.dropdownRender || slots.dropdownRender,
        "transitionName": transitionName.value,
        "children": (_d = slots.default) === null || _d === void 0 ? void 0 : _d.call(slots),
        "tagRender": props2.tagRender || slots.tagRender,
        "optionLabelRender": slots.optionLabel,
        "maxTagPlaceholder": props2.maxTagPlaceholder || slots.maxTagPlaceholder,
        "showArrow": hasFeedback || showArrow,
        "disabled": mergedDisabled.value
      }), {
        option: slots.option
      }));
    };
  }
});
Select.install = function(app) {
  app.component(Select.name, Select);
  app.component(Select.Option.displayName, Select.Option);
  app.component(Select.OptGroup.displayName, Select.OptGroup);
  return app;
};
Select.Option;
Select.OptGroup;
const VcSelect = Select;
const responsiveArray = ["xxxl", "xxl", "xl", "lg", "md", "sm", "xs"];
const getResponsiveMap = (token) => ({
  xs: `(max-width: ${token.screenXSMax}px)`,
  sm: `(min-width: ${token.screenSM}px)`,
  md: `(min-width: ${token.screenMD}px)`,
  lg: `(min-width: ${token.screenLG}px)`,
  xl: `(min-width: ${token.screenXL}px)`,
  xxl: `(min-width: ${token.screenXXL}px)`,
  xxxl: `{min-width: ${token.screenXXXL}px}`
});
function useResponsiveObserver() {
  const [, token] = useToken();
  return computed(() => {
    const responsiveMap = getResponsiveMap(token.value);
    const subscribers = /* @__PURE__ */ new Map();
    let subUid = -1;
    let screens = {};
    return {
      matchHandlers: {},
      dispatch(pointMap) {
        screens = pointMap;
        subscribers.forEach((func) => func(screens));
        return subscribers.size >= 1;
      },
      subscribe(func) {
        if (!subscribers.size)
          this.register();
        subUid += 1;
        subscribers.set(subUid, func);
        func(screens);
        return subUid;
      },
      unsubscribe(paramToken) {
        subscribers.delete(paramToken);
        if (!subscribers.size)
          this.unregister();
      },
      unregister() {
        Object.keys(responsiveMap).forEach((screen) => {
          const matchMediaQuery = responsiveMap[screen];
          const handler = this.matchHandlers[matchMediaQuery];
          handler === null || handler === void 0 ? void 0 : handler.mql.removeListener(handler === null || handler === void 0 ? void 0 : handler.listener);
        });
        subscribers.clear();
      },
      register() {
        Object.keys(responsiveMap).forEach((screen) => {
          const matchMediaQuery = responsiveMap[screen];
          const listener = (_ref) => {
            let {
              matches
            } = _ref;
            this.dispatch(_extends(_extends({}, screens), {
              [screen]: matches
            }));
          };
          const mql = window.matchMedia(matchMediaQuery);
          mql.addListener(listener);
          this.matchHandlers[matchMediaQuery] = {
            mql,
            listener
          };
          listener(mql);
        });
      },
      responsiveMap
    };
  });
}
function useBreakpoint() {
  const screens = shallowRef({});
  let token = null;
  const responsiveObserve = useResponsiveObserver();
  onMounted(() => {
    token = responsiveObserve.value.subscribe((supportScreens) => {
      screens.value = supportScreens;
    });
  });
  onUnmounted(() => {
    responsiveObserve.value.unsubscribe(token);
  });
  return screens;
}
const autoAdjustOverflow$1 = {
  adjustX: 1,
  adjustY: 1
};
const targetOffset = [0, 0];
const placements$1 = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: autoAdjustOverflow$1,
    offset: [0, -4],
    targetOffset
  },
  topCenter: {
    points: ["bc", "tc"],
    overflow: autoAdjustOverflow$1,
    offset: [0, -4],
    targetOffset
  },
  topRight: {
    points: ["br", "tr"],
    overflow: autoAdjustOverflow$1,
    offset: [0, -4],
    targetOffset
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: autoAdjustOverflow$1,
    offset: [0, 4],
    targetOffset
  },
  bottomCenter: {
    points: ["tc", "bc"],
    overflow: autoAdjustOverflow$1,
    offset: [0, 4],
    targetOffset
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: autoAdjustOverflow$1,
    offset: [0, 4],
    targetOffset
  }
};
const placements$2 = placements$1;
var __rest$7 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
const Dropdown = defineComponent({
  compatConfig: {
    MODE: 3
  },
  props: {
    minOverlayWidthMatchTrigger: {
      type: Boolean,
      default: void 0
    },
    arrow: {
      type: Boolean,
      default: false
    },
    prefixCls: PropTypes.string.def("rc-dropdown"),
    transitionName: String,
    overlayClassName: PropTypes.string.def(""),
    openClassName: String,
    animation: PropTypes.any,
    align: PropTypes.object,
    overlayStyle: {
      type: Object,
      default: void 0
    },
    placement: PropTypes.string.def("bottomLeft"),
    overlay: PropTypes.any,
    trigger: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).def("hover"),
    alignPoint: {
      type: Boolean,
      default: void 0
    },
    showAction: PropTypes.array,
    hideAction: PropTypes.array,
    getPopupContainer: Function,
    visible: {
      type: Boolean,
      default: void 0
    },
    defaultVisible: {
      type: Boolean,
      default: false
    },
    mouseEnterDelay: PropTypes.number.def(0.15),
    mouseLeaveDelay: PropTypes.number.def(0.1)
  },
  emits: ["visibleChange", "overlayClick"],
  setup(props2, _ref) {
    let {
      slots,
      emit,
      expose
    } = _ref;
    const triggerVisible = ref(!!props2.visible);
    watch(() => props2.visible, (val) => {
      if (val !== void 0) {
        triggerVisible.value = val;
      }
    });
    const triggerRef = ref();
    expose({
      triggerRef
    });
    const onClick = (e) => {
      if (props2.visible === void 0) {
        triggerVisible.value = false;
      }
      emit("overlayClick", e);
    };
    const onVisibleChange = (visible) => {
      if (props2.visible === void 0) {
        triggerVisible.value = visible;
      }
      emit("visibleChange", visible);
    };
    const getMenuElement = () => {
      var _a;
      const overlayElement = (_a = slots.overlay) === null || _a === void 0 ? void 0 : _a.call(slots);
      const extraOverlayProps = {
        prefixCls: `${props2.prefixCls}-menu`,
        onClick
      };
      return createVNode(Fragment, {
        "key": skipFlattenKey
      }, [props2.arrow && createVNode("div", {
        "class": `${props2.prefixCls}-arrow`
      }, null), cloneElement(overlayElement, extraOverlayProps, false)]);
    };
    const minOverlayWidthMatchTrigger = computed(() => {
      const {
        minOverlayWidthMatchTrigger: matchTrigger = !props2.alignPoint
      } = props2;
      return matchTrigger;
    });
    const renderChildren2 = () => {
      var _a;
      const children = (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
      return triggerVisible.value && children ? cloneElement(children[0], {
        class: props2.openClassName || `${props2.prefixCls}-open`
      }, false) : children;
    };
    const triggerHideAction = computed(() => {
      if (!props2.hideAction && props2.trigger.indexOf("contextmenu") !== -1) {
        return ["click"];
      }
      return props2.hideAction;
    });
    return () => {
      const {
        prefixCls,
        arrow,
        showAction,
        overlayStyle,
        trigger,
        placement,
        align,
        getPopupContainer,
        transitionName,
        animation,
        overlayClassName
      } = props2, otherProps = __rest$7(props2, ["prefixCls", "arrow", "showAction", "overlayStyle", "trigger", "placement", "align", "getPopupContainer", "transitionName", "animation", "overlayClassName"]);
      return createVNode(Trigger, _objectSpread2(_objectSpread2({}, otherProps), {}, {
        "prefixCls": prefixCls,
        "ref": triggerRef,
        "popupClassName": classNames(overlayClassName, {
          [`${prefixCls}-show-arrow`]: arrow
        }),
        "popupStyle": overlayStyle,
        "builtinPlacements": placements$2,
        "action": trigger,
        "showAction": showAction,
        "hideAction": triggerHideAction.value || [],
        "popupPlacement": placement,
        "popupAlign": align,
        "popupTransitionName": transitionName,
        "popupAnimation": animation,
        "popupVisible": triggerVisible.value,
        "stretch": minOverlayWidthMatchTrigger.value ? "minWidth" : "",
        "onPopupVisibleChange": onVisibleChange,
        "getPopupContainer": getPopupContainer
      }), {
        popup: getMenuElement,
        default: renderChildren2
      });
    };
  }
});
const buttonProps = () => ({
  prefixCls: String,
  type: String,
  htmlType: {
    type: String,
    default: "button"
  },
  shape: {
    type: String
  },
  size: {
    type: String
  },
  loading: {
    type: [Boolean, Object],
    default: () => false
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  ghost: {
    type: Boolean,
    default: void 0
  },
  block: {
    type: Boolean,
    default: void 0
  },
  danger: {
    type: Boolean,
    default: void 0
  },
  icon: PropTypes.any,
  href: String,
  target: String,
  title: String,
  onClick: eventType(),
  onMousedown: eventType()
});
const buttonTypes = buttonProps;
const getCollapsedWidth = (node) => {
  if (node) {
    node.style.width = "0px";
    node.style.opacity = "0";
    node.style.transform = "scale(0)";
  }
};
const getRealWidth = (node) => {
  nextTick(() => {
    if (node) {
      node.style.width = `${node.scrollWidth}px`;
      node.style.opacity = "1";
      node.style.transform = "scale(1)";
    }
  });
};
const resetStyle = (node) => {
  if (node && node.style) {
    node.style.width = null;
    node.style.opacity = null;
    node.style.transform = null;
  }
};
const LoadingIcon = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "LoadingIcon",
  props: {
    prefixCls: String,
    loading: [Boolean, Object],
    existIcon: Boolean
  },
  setup(props2) {
    return () => {
      const {
        existIcon,
        prefixCls,
        loading
      } = props2;
      if (existIcon) {
        return createVNode("span", {
          "class": `${prefixCls}-loading-icon`
        }, [createVNode(LoadingOutlined$1, null, null)]);
      }
      const visible = !!loading;
      return createVNode(Transition, {
        "name": `${prefixCls}-loading-icon-motion`,
        "onBeforeEnter": getCollapsedWidth,
        "onEnter": getRealWidth,
        "onAfterEnter": resetStyle,
        "onBeforeLeave": getRealWidth,
        "onLeave": (node) => {
          setTimeout(() => {
            getCollapsedWidth(node);
          });
        },
        "onAfterLeave": resetStyle
      }, {
        default: () => [visible ? createVNode("span", {
          "class": `${prefixCls}-loading-icon`
        }, [createVNode(LoadingOutlined$1, null, null)]) : null]
      });
    };
  }
});
const genButtonBorderStyle = (buttonTypeCls, borderColor) => ({
  // Border
  [`> span, > ${buttonTypeCls}`]: {
    "&:not(:last-child)": {
      [`&, & > ${buttonTypeCls}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: borderColor
        }
      }
    },
    "&:not(:first-child)": {
      [`&, & > ${buttonTypeCls}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: borderColor
        }
      }
    }
  }
});
const genGroupStyle = (token) => {
  const {
    componentCls,
    fontSize,
    lineWidth,
    colorPrimaryHover,
    colorErrorHover
  } = token;
  return {
    [`${componentCls}-group`]: [
      {
        position: "relative",
        display: "inline-flex",
        // Border
        [`> span, > ${componentCls}`]: {
          "&:not(:last-child)": {
            [`&, & > ${componentCls}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          "&:not(:first-child)": {
            marginInlineStart: -lineWidth,
            [`&, & > ${componentCls}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        },
        [componentCls]: {
          position: "relative",
          zIndex: 1,
          [`&:hover,
          &:focus,
          &:active`]: {
            zIndex: 2
          },
          "&[disabled]": {
            zIndex: 0
          }
        },
        [`${componentCls}-icon-only`]: {
          fontSize
        }
      },
      // Border Color
      genButtonBorderStyle(`${componentCls}-primary`, colorPrimaryHover),
      genButtonBorderStyle(`${componentCls}-danger`, colorErrorHover)
    ]
  };
};
const genGroupStyle$1 = genGroupStyle;
function compactItemVerticalBorder(token, parentCls) {
  return {
    // border collapse
    [`&-item:not(${parentCls}-last-item)`]: {
      marginBottom: -token.lineWidth
    },
    "&-item": {
      "&:hover,&:focus,&:active": {
        zIndex: 2
      },
      "&[disabled]": {
        zIndex: 0
      }
    }
  };
}
function compactItemBorderVerticalRadius(prefixCls, parentCls) {
  return {
    [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${parentCls}-first-item:not(${parentCls}-last-item)`]: {
      [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${parentCls}-last-item:not(${parentCls}-first-item)`]: {
      [`&, &${prefixCls}-sm, &${prefixCls}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function genCompactItemVerticalStyle(token) {
  const compactCls = `${token.componentCls}-compact-vertical`;
  return {
    [compactCls]: _extends(_extends({}, compactItemVerticalBorder(token, compactCls)), compactItemBorderVerticalRadius(token.componentCls, compactCls))
  };
}
const genSharedButtonStyle = (token) => {
  const {
    componentCls,
    iconCls
  } = token;
  return {
    [componentCls]: {
      outline: "none",
      position: "relative",
      display: "inline-block",
      fontWeight: 400,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      backgroundColor: "transparent",
      border: `${token.lineWidth}px ${token.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${token.motionDurationMid} ${token.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      lineHeight: token.lineHeight,
      color: token.colorText,
      "> span": {
        display: "inline-block"
      },
      // Leave a space between icon and text.
      [`> ${iconCls} + span, > span + ${iconCls}`]: {
        marginInlineStart: token.marginXS
      },
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": _extends({}, genFocusStyle(token)),
      // make `btn-icon-only` not too narrow
      [`&-icon-only${componentCls}-compact-item`]: {
        flex: "none"
      },
      // Special styles for Primary Button
      [`&-compact-item${componentCls}-primary`]: {
        [`&:not([disabled]) + ${componentCls}-compact-item${componentCls}-primary:not([disabled])`]: {
          position: "relative",
          "&:before": {
            position: "absolute",
            top: -token.lineWidth,
            insetInlineStart: -token.lineWidth,
            display: "inline-block",
            width: token.lineWidth,
            height: `calc(100% + ${token.lineWidth * 2}px)`,
            backgroundColor: token.colorPrimaryHover,
            content: '""'
          }
        }
      },
      // Special styles for Primary Button
      "&-compact-vertical-item": {
        [`&${componentCls}-primary`]: {
          [`&:not([disabled]) + ${componentCls}-compact-vertical-item${componentCls}-primary:not([disabled])`]: {
            position: "relative",
            "&:before": {
              position: "absolute",
              top: -token.lineWidth,
              insetInlineStart: -token.lineWidth,
              display: "inline-block",
              width: `calc(100% + ${token.lineWidth * 2}px)`,
              height: token.lineWidth,
              backgroundColor: token.colorPrimaryHover,
              content: '""'
            }
          }
        }
      }
    }
  };
};
const genHoverActiveButtonStyle = (hoverStyle, activeStyle) => ({
  "&:not(:disabled)": {
    "&:hover": hoverStyle,
    "&:active": activeStyle
  }
});
const genCircleButtonStyle = (token) => ({
  minWidth: token.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
});
const genRoundButtonStyle = (token) => ({
  borderRadius: token.controlHeight,
  paddingInlineStart: token.controlHeight / 2,
  paddingInlineEnd: token.controlHeight / 2
});
const genDisabledStyle = (token) => ({
  cursor: "not-allowed",
  borderColor: token.colorBorder,
  color: token.colorTextDisabled,
  backgroundColor: token.colorBgContainerDisabled,
  boxShadow: "none"
});
const genGhostButtonStyle = (btnCls, textColor, borderColor, textColorDisabled, borderColorDisabled, hoverStyle, activeStyle) => ({
  [`&${btnCls}-background-ghost`]: _extends(_extends({
    color: textColor || void 0,
    backgroundColor: "transparent",
    borderColor: borderColor || void 0,
    boxShadow: "none"
  }, genHoverActiveButtonStyle(_extends({
    backgroundColor: "transparent"
  }, hoverStyle), _extends({
    backgroundColor: "transparent"
  }, activeStyle))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: textColorDisabled || void 0,
      borderColor: borderColorDisabled || void 0
    }
  })
});
const genSolidDisabledButtonStyle = (token) => ({
  "&:disabled": _extends({}, genDisabledStyle(token))
});
const genSolidButtonStyle = (token) => _extends({}, genSolidDisabledButtonStyle(token));
const genPureDisabledButtonStyle = (token) => ({
  "&:disabled": {
    cursor: "not-allowed",
    color: token.colorTextDisabled
  }
});
const genDefaultButtonStyle = (token) => _extends(_extends(_extends(_extends(_extends({}, genSolidButtonStyle(token)), {
  backgroundColor: token.colorBgContainer,
  borderColor: token.colorBorder,
  boxShadow: `0 ${token.controlOutlineWidth}px 0 ${token.controlTmpOutline}`
}), genHoverActiveButtonStyle({
  color: token.colorPrimaryHover,
  borderColor: token.colorPrimaryHover
}, {
  color: token.colorPrimaryActive,
  borderColor: token.colorPrimaryActive
})), genGhostButtonStyle(token.componentCls, token.colorBgContainer, token.colorBgContainer, token.colorTextDisabled, token.colorBorder)), {
  [`&${token.componentCls}-dangerous`]: _extends(_extends(_extends({
    color: token.colorError,
    borderColor: token.colorError
  }, genHoverActiveButtonStyle({
    color: token.colorErrorHover,
    borderColor: token.colorErrorBorderHover
  }, {
    color: token.colorErrorActive,
    borderColor: token.colorErrorActive
  })), genGhostButtonStyle(token.componentCls, token.colorError, token.colorError, token.colorTextDisabled, token.colorBorder)), genSolidDisabledButtonStyle(token))
});
const genPrimaryButtonStyle = (token) => _extends(_extends(_extends(_extends(_extends({}, genSolidButtonStyle(token)), {
  color: token.colorTextLightSolid,
  backgroundColor: token.colorPrimary,
  boxShadow: `0 ${token.controlOutlineWidth}px 0 ${token.controlOutline}`
}), genHoverActiveButtonStyle({
  color: token.colorTextLightSolid,
  backgroundColor: token.colorPrimaryHover
}, {
  color: token.colorTextLightSolid,
  backgroundColor: token.colorPrimaryActive
})), genGhostButtonStyle(token.componentCls, token.colorPrimary, token.colorPrimary, token.colorTextDisabled, token.colorBorder, {
  color: token.colorPrimaryHover,
  borderColor: token.colorPrimaryHover
}, {
  color: token.colorPrimaryActive,
  borderColor: token.colorPrimaryActive
})), {
  [`&${token.componentCls}-dangerous`]: _extends(_extends(_extends({
    backgroundColor: token.colorError,
    boxShadow: `0 ${token.controlOutlineWidth}px 0 ${token.colorErrorOutline}`
  }, genHoverActiveButtonStyle({
    backgroundColor: token.colorErrorHover
  }, {
    backgroundColor: token.colorErrorActive
  })), genGhostButtonStyle(token.componentCls, token.colorError, token.colorError, token.colorTextDisabled, token.colorBorder, {
    color: token.colorErrorHover,
    borderColor: token.colorErrorHover
  }, {
    color: token.colorErrorActive,
    borderColor: token.colorErrorActive
  })), genSolidDisabledButtonStyle(token))
});
const genDashedButtonStyle = (token) => _extends(_extends({}, genDefaultButtonStyle(token)), {
  borderStyle: "dashed"
});
const genLinkButtonStyle = (token) => _extends(_extends(_extends({
  color: token.colorLink
}, genHoverActiveButtonStyle({
  color: token.colorLinkHover
}, {
  color: token.colorLinkActive
})), genPureDisabledButtonStyle(token)), {
  [`&${token.componentCls}-dangerous`]: _extends(_extends({
    color: token.colorError
  }, genHoverActiveButtonStyle({
    color: token.colorErrorHover
  }, {
    color: token.colorErrorActive
  })), genPureDisabledButtonStyle(token))
});
const genTextButtonStyle = (token) => _extends(_extends(_extends({}, genHoverActiveButtonStyle({
  color: token.colorText,
  backgroundColor: token.colorBgTextHover
}, {
  color: token.colorText,
  backgroundColor: token.colorBgTextActive
})), genPureDisabledButtonStyle(token)), {
  [`&${token.componentCls}-dangerous`]: _extends(_extends({
    color: token.colorError
  }, genPureDisabledButtonStyle(token)), genHoverActiveButtonStyle({
    color: token.colorErrorHover,
    backgroundColor: token.colorErrorBg
  }, {
    color: token.colorErrorHover,
    backgroundColor: token.colorErrorBg
  }))
});
const genDisabledButtonStyle = (token) => _extends(_extends({}, genDisabledStyle(token)), {
  [`&${token.componentCls}:hover`]: _extends({}, genDisabledStyle(token))
});
const genTypeButtonStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-default`]: genDefaultButtonStyle(token),
    [`${componentCls}-primary`]: genPrimaryButtonStyle(token),
    [`${componentCls}-dashed`]: genDashedButtonStyle(token),
    [`${componentCls}-link`]: genLinkButtonStyle(token),
    [`${componentCls}-text`]: genTextButtonStyle(token),
    [`${componentCls}-disabled`]: genDisabledButtonStyle(token)
  };
};
const genSizeButtonStyle = function(token) {
  let sizePrefixCls = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls,
    iconCls,
    controlHeight,
    fontSize,
    lineHeight,
    lineWidth,
    borderRadius,
    buttonPaddingHorizontal
  } = token;
  const paddingVertical = Math.max(0, (controlHeight - fontSize * lineHeight) / 2 - lineWidth);
  const paddingHorizontal = buttonPaddingHorizontal - lineWidth;
  const iconOnlyCls = `${componentCls}-icon-only`;
  return [
    // Size
    {
      [`${componentCls}${sizePrefixCls}`]: {
        fontSize,
        height: controlHeight,
        padding: `${paddingVertical}px ${paddingHorizontal}px`,
        borderRadius,
        [`&${iconOnlyCls}`]: {
          width: controlHeight,
          paddingInlineStart: 0,
          paddingInlineEnd: 0,
          [`&${componentCls}-round`]: {
            width: "auto"
          },
          "> span": {
            transform: "scale(1.143)"
            // 14px -> 16px
          }
        },
        // Loading
        [`&${componentCls}-loading`]: {
          opacity: token.opacityLoading,
          cursor: "default"
        },
        [`${componentCls}-loading-icon`]: {
          transition: `width ${token.motionDurationSlow} ${token.motionEaseInOut}, opacity ${token.motionDurationSlow} ${token.motionEaseInOut}`
        },
        [`&:not(${iconOnlyCls}) ${componentCls}-loading-icon > ${iconCls}`]: {
          marginInlineEnd: token.marginXS
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${componentCls}${componentCls}-circle${sizePrefixCls}`]: genCircleButtonStyle(token)
    },
    {
      [`${componentCls}${componentCls}-round${sizePrefixCls}`]: genRoundButtonStyle(token)
    }
  ];
};
const genSizeBaseButtonStyle = (token) => genSizeButtonStyle(token);
const genSizeSmallButtonStyle = (token) => {
  const smallToken = merge(token, {
    controlHeight: token.controlHeightSM,
    padding: token.paddingXS,
    buttonPaddingHorizontal: 8,
    borderRadius: token.borderRadiusSM
  });
  return genSizeButtonStyle(smallToken, `${token.componentCls}-sm`);
};
const genSizeLargeButtonStyle = (token) => {
  const largeToken = merge(token, {
    controlHeight: token.controlHeightLG,
    fontSize: token.fontSizeLG,
    borderRadius: token.borderRadiusLG
  });
  return genSizeButtonStyle(largeToken, `${token.componentCls}-lg`);
};
const genBlockButtonStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      [`&${componentCls}-block`]: {
        width: "100%"
      }
    }
  };
};
const useStyle$3 = genComponentStyleHook("Button", (token) => {
  const {
    controlTmpOutline,
    paddingContentHorizontal
  } = token;
  const buttonToken = merge(token, {
    colorOutlineDefault: controlTmpOutline,
    buttonPaddingHorizontal: paddingContentHorizontal
  });
  return [
    // Shared
    genSharedButtonStyle(buttonToken),
    // Size
    genSizeSmallButtonStyle(buttonToken),
    genSizeBaseButtonStyle(buttonToken),
    genSizeLargeButtonStyle(buttonToken),
    // Block
    genBlockButtonStyle(buttonToken),
    // Group (type, ghost, danger, disabled, loading)
    genTypeButtonStyle(buttonToken),
    // Button Group
    genGroupStyle$1(buttonToken),
    // Space Compact
    genCompactItemStyle(token, {
      focus: false
    }),
    genCompactItemVerticalStyle(token)
  ];
});
const buttonGroupProps = () => ({
  prefixCls: String,
  size: {
    type: String
  }
});
const GroupSizeContext = createContext();
const ButtonGroup = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AButtonGroup",
  props: buttonGroupProps(),
  setup(props2, _ref) {
    let {
      slots
    } = _ref;
    const {
      prefixCls,
      direction
    } = useConfigInject("btn-group", props2);
    const [, , hashId] = useToken();
    GroupSizeContext.useProvide(reactive({
      size: computed(() => props2.size)
    }));
    const classes = computed(() => {
      const {
        size
      } = props2;
      let sizeCls = "";
      switch (size) {
        case "large":
          sizeCls = "lg";
          break;
        case "small":
          sizeCls = "sm";
          break;
        case "middle":
        case void 0:
          break;
        default:
          devWarning(!size, "Button.Group", "Invalid prop `size`.");
      }
      return {
        [`${prefixCls.value}`]: true,
        [`${prefixCls.value}-${sizeCls}`]: sizeCls,
        [`${prefixCls.value}-rtl`]: direction.value === "rtl",
        [hashId.value]: true
      };
    });
    return () => {
      var _a;
      return createVNode("div", {
        "class": classes.value
      }, [flattenChildren((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots))]);
    };
  }
});
const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isUnBorderedButtonType(type) {
  return type === "text" || type === "link";
}
const Button = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AButton",
  inheritAttrs: false,
  __ANT_BUTTON: true,
  props: initDefaultProps(buttonTypes(), {
    type: "default"
  }),
  slots: Object,
  // emits: ['click', 'mousedown'],
  setup(props2, _ref) {
    let {
      slots,
      attrs,
      emit,
      expose
    } = _ref;
    const {
      prefixCls,
      autoInsertSpaceInButton,
      direction,
      size
    } = useConfigInject("btn", props2);
    const [wrapSSR, hashId] = useStyle$3(prefixCls);
    const groupSizeContext = GroupSizeContext.useInject();
    const disabledContext = useInjectDisabled();
    const mergedDisabled = computed(() => {
      var _a;
      return (_a = props2.disabled) !== null && _a !== void 0 ? _a : disabledContext.value;
    });
    const buttonNodeRef = shallowRef(null);
    const delayTimeoutRef = shallowRef(void 0);
    let isNeedInserted = false;
    const innerLoading = shallowRef(false);
    const hasTwoCNChar = shallowRef(false);
    const autoInsertSpace = computed(() => autoInsertSpaceInButton.value !== false);
    const {
      compactSize,
      compactItemClassnames
    } = useCompactItemContext(prefixCls, direction);
    const loadingOrDelay = computed(() => typeof props2.loading === "object" && props2.loading.delay ? props2.loading.delay || true : !!props2.loading);
    watch(loadingOrDelay, (val) => {
      clearTimeout(delayTimeoutRef.value);
      if (typeof loadingOrDelay.value === "number") {
        delayTimeoutRef.value = setTimeout(() => {
          innerLoading.value = val;
        }, loadingOrDelay.value);
      } else {
        innerLoading.value = val;
      }
    }, {
      immediate: true
    });
    const classes = computed(() => {
      const {
        type,
        shape = "default",
        ghost,
        block,
        danger
      } = props2;
      const pre = prefixCls.value;
      const sizeClassNameMap = {
        large: "lg",
        small: "sm",
        middle: void 0
      };
      const sizeFullname = compactSize.value || (groupSizeContext === null || groupSizeContext === void 0 ? void 0 : groupSizeContext.size) || size.value;
      const sizeCls = sizeFullname ? sizeClassNameMap[sizeFullname] || "" : "";
      return [compactItemClassnames.value, {
        [hashId.value]: true,
        [`${pre}`]: true,
        [`${pre}-${shape}`]: shape !== "default" && shape,
        [`${pre}-${type}`]: type,
        [`${pre}-${sizeCls}`]: sizeCls,
        [`${pre}-loading`]: innerLoading.value,
        [`${pre}-background-ghost`]: ghost && !isUnBorderedButtonType(type),
        [`${pre}-two-chinese-chars`]: hasTwoCNChar.value && autoInsertSpace.value,
        [`${pre}-block`]: block,
        [`${pre}-dangerous`]: !!danger,
        [`${pre}-rtl`]: direction.value === "rtl"
      }];
    });
    const fixTwoCNChar = () => {
      const node = buttonNodeRef.value;
      if (!node || autoInsertSpaceInButton.value === false) {
        return;
      }
      const buttonText = node.textContent;
      if (isNeedInserted && isTwoCNChar(buttonText)) {
        if (!hasTwoCNChar.value) {
          hasTwoCNChar.value = true;
        }
      } else if (hasTwoCNChar.value) {
        hasTwoCNChar.value = false;
      }
    };
    const handleClick = (event) => {
      if (innerLoading.value || mergedDisabled.value) {
        event.preventDefault();
        return;
      }
      emit("click", event);
    };
    const handleMousedown = (event) => {
      emit("mousedown", event);
    };
    const insertSpace = (child, needInserted) => {
      const SPACE = needInserted ? " " : "";
      if (child.type === Text) {
        let text = child.children.trim();
        if (isTwoCNChar(text)) {
          text = text.split("").join(SPACE);
        }
        return createVNode("span", null, [text]);
      }
      return child;
    };
    watchEffect(() => {
      devWarning(!(props2.ghost && isUnBorderedButtonType(props2.type)), "Button", "`link` or `text` button can't be a `ghost` button.");
    });
    onMounted(fixTwoCNChar);
    onUpdated(fixTwoCNChar);
    onBeforeUnmount(() => {
      delayTimeoutRef.value && clearTimeout(delayTimeoutRef.value);
    });
    const focus = () => {
      var _a;
      (_a = buttonNodeRef.value) === null || _a === void 0 ? void 0 : _a.focus();
    };
    const blur = () => {
      var _a;
      (_a = buttonNodeRef.value) === null || _a === void 0 ? void 0 : _a.blur();
    };
    expose({
      focus,
      blur
    });
    return () => {
      var _a, _b;
      const {
        icon = (_a = slots.icon) === null || _a === void 0 ? void 0 : _a.call(slots)
      } = props2;
      const children = flattenChildren((_b = slots.default) === null || _b === void 0 ? void 0 : _b.call(slots));
      isNeedInserted = children.length === 1 && !icon && !isUnBorderedButtonType(props2.type);
      const {
        type,
        htmlType,
        href,
        title,
        target
      } = props2;
      const iconType = innerLoading.value ? "loading" : icon;
      const buttonProps2 = _extends(_extends({}, attrs), {
        title,
        disabled: mergedDisabled.value,
        class: [classes.value, attrs.class, {
          [`${prefixCls.value}-icon-only`]: children.length === 0 && !!iconType
        }],
        onClick: handleClick,
        onMousedown: handleMousedown
      });
      if (!mergedDisabled.value) {
        delete buttonProps2.disabled;
      }
      const iconNode = icon && !innerLoading.value ? icon : createVNode(LoadingIcon, {
        "existIcon": !!icon,
        "prefixCls": prefixCls.value,
        "loading": !!innerLoading.value
      }, null);
      const kids = children.map((child) => insertSpace(child, isNeedInserted && autoInsertSpace.value));
      if (href !== void 0) {
        return wrapSSR(createVNode("a", _objectSpread2(_objectSpread2({}, buttonProps2), {}, {
          "href": href,
          "target": target,
          "ref": buttonNodeRef
        }), [iconNode, kids]));
      }
      let buttonNode = createVNode("button", _objectSpread2(_objectSpread2({}, buttonProps2), {}, {
        "ref": buttonNodeRef,
        "type": htmlType
      }), [iconNode, kids]);
      if (!isUnBorderedButtonType(type)) {
        const _buttonNode = /* @__PURE__ */ function() {
          return buttonNode;
        }();
        buttonNode = createVNode(Wave, {
          "ref": "wave",
          "disabled": !!innerLoading.value
        }, {
          default: () => [_buttonNode]
        });
      }
      return wrapSSR(buttonNode);
    };
  }
});
Button.Group = ButtonGroup;
Button.install = function(app) {
  app.component(Button.name, Button);
  app.component(ButtonGroup.name, ButtonGroup);
  return app;
};
var EllipsisOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, "name": "ellipsis", "theme": "outlined" };
const EllipsisOutlinedSvg = EllipsisOutlined$2;
function _objectSpread$8(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$8(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$8(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var EllipsisOutlined = function EllipsisOutlined2(props2, context) {
  var p = _objectSpread$8({}, props2, context.attrs);
  return createVNode(AntdIcon, _objectSpread$8({}, p, {
    "icon": EllipsisOutlinedSvg
  }), null);
};
EllipsisOutlined.displayName = "EllipsisOutlined";
EllipsisOutlined.inheritAttrs = false;
const EllipsisOutlined$1 = EllipsisOutlined;
const OverrideContextKey = Symbol("OverrideContextKey");
const useInjectOverride = () => {
  return inject(OverrideContextKey, void 0);
};
const useProvideOverride = (props2) => {
  var _a, _b, _c;
  const {
    prefixCls,
    mode,
    selectable,
    validator,
    onClick,
    expandIcon
  } = useInjectOverride() || {};
  provide(OverrideContextKey, {
    prefixCls: computed(() => {
      var _a2, _b2;
      return (_b2 = (_a2 = props2.prefixCls) === null || _a2 === void 0 ? void 0 : _a2.value) !== null && _b2 !== void 0 ? _b2 : prefixCls === null || prefixCls === void 0 ? void 0 : prefixCls.value;
    }),
    mode: computed(() => {
      var _a2, _b2;
      return (_b2 = (_a2 = props2.mode) === null || _a2 === void 0 ? void 0 : _a2.value) !== null && _b2 !== void 0 ? _b2 : mode === null || mode === void 0 ? void 0 : mode.value;
    }),
    selectable: computed(() => {
      var _a2, _b2;
      return (_b2 = (_a2 = props2.selectable) === null || _a2 === void 0 ? void 0 : _a2.value) !== null && _b2 !== void 0 ? _b2 : selectable === null || selectable === void 0 ? void 0 : selectable.value;
    }),
    validator: (_a = props2.validator) !== null && _a !== void 0 ? _a : validator,
    onClick: (_b = props2.onClick) !== null && _b !== void 0 ? _b : onClick,
    expandIcon: (_c = props2.expandIcon) !== null && _c !== void 0 ? _c : expandIcon === null || expandIcon === void 0 ? void 0 : expandIcon.value
  });
};
function shallowEqual(objA, objB, compare, compareContext) {
  let ret = compare ? compare.call(compareContext, objA, objB) : void 0;
  if (ret !== void 0) {
    return !!ret;
  }
  if (objA === objB) {
    return true;
  }
  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (let idx = 0; idx < keysA.length; idx++) {
    const key = keysA[idx];
    if (!bHasOwnProperty(key)) {
      return false;
    }
    const valueA = objA[key];
    const valueB = objB[key];
    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
    if (ret === false || ret === void 0 && valueA !== valueB) {
      return false;
    }
  }
  return true;
}
function shallowequal(value, other) {
  return shallowEqual(toRaw(value), toRaw(other));
}
const MenuContextKey = Symbol("menuContextKey");
const useProvideMenu = (props2) => {
  provide(MenuContextKey, props2);
};
const useInjectMenu = () => {
  return inject(MenuContextKey);
};
const ForceRenderKey = Symbol("ForceRenderKey");
const useProvideForceRender = (forceRender) => {
  provide(ForceRenderKey, forceRender);
};
const useInjectForceRender = () => {
  return inject(ForceRenderKey, false);
};
const MenuFirstLevelContextKey = Symbol("menuFirstLevelContextKey");
const useProvideFirstLevel = (firstLevel) => {
  provide(MenuFirstLevelContextKey, firstLevel);
};
const useInjectFirstLevel = () => {
  return inject(MenuFirstLevelContextKey, true);
};
const MenuContextProvider = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "MenuContextProvider",
  inheritAttrs: false,
  props: {
    mode: {
      type: String,
      default: void 0
    },
    overflowDisabled: {
      type: Boolean,
      default: void 0
    }
  },
  setup(props2, _ref) {
    let {
      slots
    } = _ref;
    const menuContext = useInjectMenu();
    const newContext = _extends({}, menuContext);
    if (props2.mode !== void 0) {
      newContext.mode = toRef(props2, "mode");
    }
    if (props2.overflowDisabled !== void 0) {
      newContext.overflowDisabled = toRef(props2, "overflowDisabled");
    }
    useProvideMenu(newContext);
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
const useProvideMenu$1 = useProvideMenu;
const SiderCollapsedKey = Symbol("siderCollapsed");
const OVERFLOW_KEY = "$$__vc-menu-more__key";
const KeyPathContext = Symbol("KeyPathContext");
const useInjectKeyPath = () => {
  return inject(KeyPathContext, {
    parentEventKeys: computed(() => []),
    parentKeys: computed(() => []),
    parentInfo: {}
  });
};
const useProvideKeyPath = (eventKey, key, menuInfo) => {
  const {
    parentEventKeys,
    parentKeys
  } = useInjectKeyPath();
  const eventKeys = computed(() => [...parentEventKeys.value, eventKey]);
  const keys = computed(() => [...parentKeys.value, key]);
  provide(KeyPathContext, {
    parentEventKeys: eventKeys,
    parentKeys: keys,
    parentInfo: menuInfo
  });
  return keys;
};
const measure = Symbol("measure");
const PathContext = defineComponent({
  compatConfig: {
    MODE: 3
  },
  setup(_props, _ref) {
    let {
      slots
    } = _ref;
    provide(measure, true);
    return () => {
      var _a;
      return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
    };
  }
});
const useMeasure = () => {
  return inject(measure, false);
};
const useProvideKeyPath$1 = useProvideKeyPath;
function useDirectionStyle(level) {
  const {
    mode,
    rtl,
    inlineIndent
  } = useInjectMenu();
  return computed(() => mode.value !== "inline" ? null : rtl.value ? {
    paddingRight: `${level.value * inlineIndent.value}px`
  } : {
    paddingLeft: `${level.value * inlineIndent.value}px`
  });
}
let indexGuid$1 = 0;
const menuItemProps = () => ({
  id: String,
  role: String,
  disabled: Boolean,
  danger: Boolean,
  title: {
    type: [String, Boolean],
    default: void 0
  },
  icon: PropTypes.any,
  onMouseenter: Function,
  onMouseleave: Function,
  onClick: Function,
  onKeydown: Function,
  onFocus: Function,
  // Internal user prop
  originItemValue: objectType()
});
const MenuItem = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AMenuItem",
  inheritAttrs: false,
  props: menuItemProps(),
  slots: Object,
  setup(props2, _ref) {
    let {
      slots,
      emit,
      attrs
    } = _ref;
    const instance = getCurrentInstance();
    const isMeasure = useMeasure();
    const key = typeof instance.vnode.key === "symbol" ? String(instance.vnode.key) : instance.vnode.key;
    devWarning(typeof instance.vnode.key !== "symbol", "MenuItem", `MenuItem \`:key="${String(key)}"\` not support Symbol type`);
    const eventKey = `menu_item_${++indexGuid$1}_$$_${key}`;
    const {
      parentEventKeys,
      parentKeys
    } = useInjectKeyPath();
    const {
      prefixCls,
      activeKeys,
      disabled,
      changeActiveKeys,
      rtl,
      inlineCollapsed,
      siderCollapsed,
      onItemClick,
      selectedKeys,
      registerMenuInfo,
      unRegisterMenuInfo
    } = useInjectMenu();
    const firstLevel = useInjectFirstLevel();
    const isActive = shallowRef(false);
    const keysPath = computed(() => {
      return [...parentKeys.value, key];
    });
    const menuInfo = {
      eventKey,
      key,
      parentEventKeys,
      parentKeys,
      isLeaf: true
    };
    registerMenuInfo(eventKey, menuInfo);
    onBeforeUnmount(() => {
      unRegisterMenuInfo(eventKey);
    });
    watch(activeKeys, () => {
      isActive.value = !!activeKeys.value.find((val) => val === key);
    }, {
      immediate: true
    });
    const mergedDisabled = computed(() => disabled.value || props2.disabled);
    const selected = computed(() => selectedKeys.value.includes(key));
    const classNames2 = computed(() => {
      const itemCls = `${prefixCls.value}-item`;
      return {
        [`${itemCls}`]: true,
        [`${itemCls}-danger`]: props2.danger,
        [`${itemCls}-active`]: isActive.value,
        [`${itemCls}-selected`]: selected.value,
        [`${itemCls}-disabled`]: mergedDisabled.value
      };
    });
    const getEventInfo = (e) => {
      return {
        key,
        eventKey,
        keyPath: keysPath.value,
        eventKeyPath: [...parentEventKeys.value, eventKey],
        domEvent: e,
        item: _extends(_extends({}, props2), attrs)
      };
    };
    const onInternalClick = (e) => {
      if (mergedDisabled.value) {
        return;
      }
      const info = getEventInfo(e);
      emit("click", e);
      onItemClick(info);
    };
    const onMouseEnter = (event) => {
      if (!mergedDisabled.value) {
        changeActiveKeys(keysPath.value);
        emit("mouseenter", event);
      }
    };
    const onMouseLeave = (event) => {
      if (!mergedDisabled.value) {
        changeActiveKeys([]);
        emit("mouseleave", event);
      }
    };
    const onInternalKeyDown = (e) => {
      emit("keydown", e);
      if (e.which === KeyCode.ENTER) {
        const info = getEventInfo(e);
        emit("click", e);
        onItemClick(info);
      }
    };
    const onInternalFocus = (e) => {
      changeActiveKeys(keysPath.value);
      emit("focus", e);
    };
    const renderItemChildren = (icon, children) => {
      const wrapNode = createVNode("span", {
        "class": `${prefixCls.value}-title-content`
      }, [children]);
      if (!icon || isValidElement(children) && children.type === "span") {
        if (children && inlineCollapsed.value && firstLevel && typeof children === "string") {
          return createVNode("div", {
            "class": `${prefixCls.value}-inline-collapsed-noicon`
          }, [children.charAt(0)]);
        }
      }
      return wrapNode;
    };
    const directionStyle = useDirectionStyle(computed(() => keysPath.value.length));
    return () => {
      var _a, _b, _c, _d, _e;
      if (isMeasure)
        return null;
      const title = (_a = props2.title) !== null && _a !== void 0 ? _a : (_b = slots.title) === null || _b === void 0 ? void 0 : _b.call(slots);
      const children = flattenChildren((_c = slots.default) === null || _c === void 0 ? void 0 : _c.call(slots));
      const childrenLength = children.length;
      let tooltipTitle = title;
      if (typeof title === "undefined") {
        tooltipTitle = firstLevel && childrenLength ? children : "";
      } else if (title === false) {
        tooltipTitle = "";
      }
      const tooltipProps = {
        title: tooltipTitle
      };
      if (!siderCollapsed.value && !inlineCollapsed.value) {
        tooltipProps.title = null;
        tooltipProps.open = false;
      }
      const optionRoleProps = {};
      if (props2.role === "option") {
        optionRoleProps["aria-selected"] = selected.value;
      }
      const icon = (_d = props2.icon) !== null && _d !== void 0 ? _d : (_e = slots.icon) === null || _e === void 0 ? void 0 : _e.call(slots, props2);
      return createVNode(Tooltip, _objectSpread2(_objectSpread2({}, tooltipProps), {}, {
        "placement": rtl.value ? "left" : "right",
        "overlayClassName": `${prefixCls.value}-inline-collapsed-tooltip`
      }), {
        default: () => [createVNode(Overflow$1.Item, _objectSpread2(_objectSpread2(_objectSpread2({
          "component": "li"
        }, attrs), {}, {
          "id": props2.id,
          "style": _extends(_extends({}, attrs.style || {}), directionStyle.value),
          "class": [classNames2.value, {
            [`${attrs.class}`]: !!attrs.class,
            [`${prefixCls.value}-item-only-child`]: (icon ? childrenLength + 1 : childrenLength) === 1
          }],
          "role": props2.role || "menuitem",
          "tabindex": props2.disabled ? null : -1,
          "data-menu-id": key,
          "aria-disabled": props2.disabled
        }, optionRoleProps), {}, {
          "onMouseenter": onMouseEnter,
          "onMouseleave": onMouseLeave,
          "onClick": onInternalClick,
          "onKeydown": onInternalKeyDown,
          "onFocus": onInternalFocus,
          "title": typeof title === "string" ? title : void 0
        }), {
          default: () => [cloneElement(typeof icon === "function" ? icon(props2.originItemValue) : icon, {
            class: `${prefixCls.value}-item-icon`
          }, false), renderItemChildren(icon, children)]
        })]
      });
    };
  }
});
const autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
const placements = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: autoAdjustOverflow,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: autoAdjustOverflow,
    offset: [0, 7]
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: autoAdjustOverflow,
    offset: [-4, 0]
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: autoAdjustOverflow,
    offset: [4, 0]
  }
};
const placementsRtl = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: autoAdjustOverflow,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: autoAdjustOverflow,
    offset: [0, 7]
  },
  rightTop: {
    points: ["tr", "tl"],
    overflow: autoAdjustOverflow,
    offset: [-4, 0]
  },
  leftTop: {
    points: ["tl", "tr"],
    overflow: autoAdjustOverflow,
    offset: [4, 0]
  }
};
const popupPlacementMap = {
  horizontal: "bottomLeft",
  vertical: "rightTop",
  "vertical-left": "rightTop",
  "vertical-right": "leftTop"
};
const PopupTrigger = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "PopupTrigger",
  inheritAttrs: false,
  props: {
    prefixCls: String,
    mode: String,
    visible: Boolean,
    // popup: React.ReactNode;
    popupClassName: String,
    popupOffset: Array,
    disabled: Boolean,
    onVisibleChange: Function
  },
  slots: Object,
  emits: ["visibleChange"],
  setup(props2, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const innerVisible = shallowRef(false);
    const {
      getPopupContainer,
      rtl,
      subMenuOpenDelay,
      subMenuCloseDelay,
      builtinPlacements,
      triggerSubMenuAction,
      forceSubMenuRender,
      motion,
      defaultMotions,
      rootClassName
    } = useInjectMenu();
    const forceRender = useInjectForceRender();
    const placement = computed(() => rtl.value ? _extends(_extends({}, placementsRtl), builtinPlacements.value) : _extends(_extends({}, placements), builtinPlacements.value));
    const popupPlacement = computed(() => popupPlacementMap[props2.mode]);
    const visibleRef = shallowRef();
    watch(() => props2.visible, (visible) => {
      wrapperRaf.cancel(visibleRef.value);
      visibleRef.value = wrapperRaf(() => {
        innerVisible.value = visible;
      });
    }, {
      immediate: true
    });
    onBeforeUnmount(() => {
      wrapperRaf.cancel(visibleRef.value);
    });
    const onVisibleChange = (visible) => {
      emit("visibleChange", visible);
    };
    const mergedMotion = computed(() => {
      var _a, _b;
      const m = motion.value || ((_a = defaultMotions.value) === null || _a === void 0 ? void 0 : _a[props2.mode]) || ((_b = defaultMotions.value) === null || _b === void 0 ? void 0 : _b.other);
      const res = typeof m === "function" ? m() : m;
      return res ? getTransitionProps(res.name, {
        css: true
      }) : void 0;
    });
    return () => {
      const {
        prefixCls,
        popupClassName,
        mode,
        popupOffset,
        disabled
      } = props2;
      return createVNode(Trigger, {
        "prefixCls": prefixCls,
        "popupClassName": classNames(`${prefixCls}-popup`, {
          [`${prefixCls}-rtl`]: rtl.value
        }, popupClassName, rootClassName.value),
        "stretch": mode === "horizontal" ? "minWidth" : null,
        "getPopupContainer": getPopupContainer.value,
        "builtinPlacements": placement.value,
        "popupPlacement": popupPlacement.value,
        "popupVisible": innerVisible.value,
        "popupAlign": popupOffset && {
          offset: popupOffset
        },
        "action": disabled ? [] : [triggerSubMenuAction.value],
        "mouseEnterDelay": subMenuOpenDelay.value,
        "mouseLeaveDelay": subMenuCloseDelay.value,
        "onPopupVisibleChange": onVisibleChange,
        "forceRender": forceRender || forceSubMenuRender.value,
        "popupAnimation": mergedMotion.value
      }, {
        popup: slots.popup,
        default: slots.default
      });
    };
  }
});
const InternalSubMenuList = (_props, _ref) => {
  let {
    slots,
    attrs
  } = _ref;
  var _a;
  const {
    prefixCls,
    mode
  } = useInjectMenu();
  return createVNode("ul", _objectSpread2(_objectSpread2({}, attrs), {}, {
    "class": classNames(prefixCls.value, `${prefixCls.value}-sub`, `${prefixCls.value}-${mode.value === "inline" ? "inline" : "vertical"}`),
    "data-menu-list": true
  }), [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]);
};
InternalSubMenuList.displayName = "SubMenuList";
const SubMenuList = InternalSubMenuList;
const InlineSubMenuList = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "InlineSubMenuList",
  inheritAttrs: false,
  props: {
    id: String,
    open: Boolean,
    keyPath: Array
  },
  setup(props2, _ref) {
    let {
      slots
    } = _ref;
    const fixedMode = computed(() => "inline");
    const {
      motion,
      mode,
      defaultMotions
    } = useInjectMenu();
    const sameModeRef = computed(() => mode.value === fixedMode.value);
    const destroy = ref(!sameModeRef.value);
    const mergedOpen = computed(() => sameModeRef.value ? props2.open : false);
    watch(mode, () => {
      if (sameModeRef.value) {
        destroy.value = false;
      }
    }, {
      flush: "post"
    });
    const mergedMotion = computed(() => {
      var _a, _b;
      const m = motion.value || ((_a = defaultMotions.value) === null || _a === void 0 ? void 0 : _a[fixedMode.value]) || ((_b = defaultMotions.value) === null || _b === void 0 ? void 0 : _b.other);
      const res = typeof m === "function" ? m() : m;
      return _extends(_extends({}, res), {
        appear: props2.keyPath.length <= 1
      });
    });
    return () => {
      var _a;
      if (destroy.value) {
        return null;
      }
      return createVNode(MenuContextProvider, {
        "mode": fixedMode.value
      }, {
        default: () => [createVNode(Transition, mergedMotion.value, {
          default: () => [withDirectives(createVNode(SubMenuList, {
            "id": props2.id
          }, {
            default: () => [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]
          }), [[vShow, mergedOpen.value]])]
        })]
      });
    };
  }
});
let indexGuid = 0;
const subMenuProps = () => ({
  icon: PropTypes.any,
  title: PropTypes.any,
  disabled: Boolean,
  level: Number,
  popupClassName: String,
  popupOffset: Array,
  internalPopupClose: Boolean,
  eventKey: String,
  expandIcon: Function,
  theme: String,
  onMouseenter: Function,
  onMouseleave: Function,
  onTitleClick: Function,
  // Internal user prop
  originItemValue: objectType()
});
const SubMenu = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ASubMenu",
  inheritAttrs: false,
  props: subMenuProps(),
  slots: Object,
  setup(props2, _ref) {
    let {
      slots,
      attrs,
      emit
    } = _ref;
    var _a, _b;
    useProvideFirstLevel(false);
    const isMeasure = useMeasure();
    const instance = getCurrentInstance();
    const vnodeKey = typeof instance.vnode.key === "symbol" ? String(instance.vnode.key) : instance.vnode.key;
    devWarning(typeof instance.vnode.key !== "symbol", "SubMenu", `SubMenu \`:key="${String(vnodeKey)}"\` not support Symbol type`);
    const key = isValid(vnodeKey) ? vnodeKey : `sub_menu_${++indexGuid}_$$_not_set_key`;
    const eventKey = (_a = props2.eventKey) !== null && _a !== void 0 ? _a : isValid(vnodeKey) ? `sub_menu_${++indexGuid}_$$_${vnodeKey}` : key;
    const {
      parentEventKeys,
      parentInfo,
      parentKeys
    } = useInjectKeyPath();
    const keysPath = computed(() => [...parentKeys.value, key]);
    const childrenEventKeys = shallowRef([]);
    const menuInfo = {
      eventKey,
      key,
      parentEventKeys,
      childrenEventKeys,
      parentKeys
    };
    (_b = parentInfo.childrenEventKeys) === null || _b === void 0 ? void 0 : _b.value.push(eventKey);
    onBeforeUnmount(() => {
      var _a2;
      if (parentInfo.childrenEventKeys) {
        parentInfo.childrenEventKeys.value = (_a2 = parentInfo.childrenEventKeys) === null || _a2 === void 0 ? void 0 : _a2.value.filter((k) => k != eventKey);
      }
    });
    useProvideKeyPath$1(eventKey, key, menuInfo);
    const {
      prefixCls,
      activeKeys,
      disabled: contextDisabled,
      changeActiveKeys,
      mode,
      inlineCollapsed,
      openKeys,
      overflowDisabled,
      onOpenChange,
      registerMenuInfo,
      unRegisterMenuInfo,
      selectedSubMenuKeys,
      expandIcon: menuExpandIcon,
      theme
    } = useInjectMenu();
    const hasKey = vnodeKey !== void 0 && vnodeKey !== null;
    const forceRender = !isMeasure && (useInjectForceRender() || !hasKey);
    useProvideForceRender(forceRender);
    if (isMeasure && hasKey || !isMeasure && !hasKey || forceRender) {
      registerMenuInfo(eventKey, menuInfo);
      onBeforeUnmount(() => {
        unRegisterMenuInfo(eventKey);
      });
    }
    const subMenuPrefixCls = computed(() => `${prefixCls.value}-submenu`);
    const mergedDisabled = computed(() => contextDisabled.value || props2.disabled);
    const elementRef = shallowRef();
    const popupRef = shallowRef();
    const originOpen = computed(() => openKeys.value.includes(key));
    const open2 = computed(() => !overflowDisabled.value && originOpen.value);
    const childrenSelected = computed(() => {
      return selectedSubMenuKeys.value.includes(key);
    });
    const isActive = shallowRef(false);
    watch(activeKeys, () => {
      isActive.value = !!activeKeys.value.find((val) => val === key);
    }, {
      immediate: true
    });
    const onInternalTitleClick = (e) => {
      if (mergedDisabled.value) {
        return;
      }
      emit("titleClick", e, key);
      if (mode.value === "inline") {
        onOpenChange(key, !originOpen.value);
      }
    };
    const onMouseEnter = (event) => {
      if (!mergedDisabled.value) {
        changeActiveKeys(keysPath.value);
        emit("mouseenter", event);
      }
    };
    const onMouseLeave = (event) => {
      if (!mergedDisabled.value) {
        changeActiveKeys([]);
        emit("mouseleave", event);
      }
    };
    const directionStyle = useDirectionStyle(computed(() => keysPath.value.length));
    const onPopupVisibleChange = (newVisible) => {
      if (mode.value !== "inline") {
        onOpenChange(key, newVisible);
      }
    };
    const onInternalFocus = () => {
      changeActiveKeys(keysPath.value);
    };
    const popupId = eventKey && `${eventKey}-popup`;
    const popupClassName = computed(() => classNames(prefixCls.value, `${prefixCls.value}-${props2.theme || theme.value}`, props2.popupClassName));
    const renderTitle = (title, icon) => {
      if (!icon) {
        return inlineCollapsed.value && !parentKeys.value.length && title && typeof title === "string" ? createVNode("div", {
          "class": `${prefixCls.value}-inline-collapsed-noicon`
        }, [title.charAt(0)]) : createVNode("span", {
          "class": `${prefixCls.value}-title-content`
        }, [title]);
      }
      const titleIsSpan = isValidElement(title) && title.type === "span";
      return createVNode(Fragment, null, [cloneElement(typeof icon === "function" ? icon(props2.originItemValue) : icon, {
        class: `${prefixCls.value}-item-icon`
      }, false), titleIsSpan ? title : createVNode("span", {
        "class": `${prefixCls.value}-title-content`
      }, [title])]);
    };
    const triggerModeRef = computed(() => {
      return mode.value !== "inline" && keysPath.value.length > 1 ? "vertical" : mode.value;
    });
    const renderMode = computed(() => mode.value === "horizontal" ? "vertical" : mode.value);
    const subMenuTriggerModeRef = computed(() => triggerModeRef.value === "horizontal" ? "vertical" : triggerModeRef.value);
    const baseTitleNode = () => {
      var _a2, _b2;
      const subMenuPrefixClsValue = subMenuPrefixCls.value;
      const icon = (_a2 = props2.icon) !== null && _a2 !== void 0 ? _a2 : (_b2 = slots.icon) === null || _b2 === void 0 ? void 0 : _b2.call(slots, props2);
      const expandIcon = props2.expandIcon || slots.expandIcon || menuExpandIcon.value;
      const title = renderTitle(getPropsSlot(slots, props2, "title"), icon);
      return createVNode("div", {
        "style": directionStyle.value,
        "class": `${subMenuPrefixClsValue}-title`,
        "tabindex": mergedDisabled.value ? null : -1,
        "ref": elementRef,
        "title": typeof title === "string" ? title : null,
        "data-menu-id": key,
        "aria-expanded": open2.value,
        "aria-haspopup": true,
        "aria-controls": popupId,
        "aria-disabled": mergedDisabled.value,
        "onClick": onInternalTitleClick,
        "onFocus": onInternalFocus
      }, [title, mode.value !== "horizontal" && expandIcon ? expandIcon(_extends(_extends({}, props2), {
        isOpen: open2.value
      })) : createVNode("i", {
        "class": `${subMenuPrefixClsValue}-arrow`
      }, null)]);
    };
    return () => {
      var _a2;
      if (isMeasure) {
        if (!hasKey) {
          return null;
        }
        return (_a2 = slots.default) === null || _a2 === void 0 ? void 0 : _a2.call(slots);
      }
      const subMenuPrefixClsValue = subMenuPrefixCls.value;
      let titleNode = () => null;
      if (!overflowDisabled.value && mode.value !== "inline") {
        const popupOffset = mode.value === "horizontal" ? [0, 8] : [10, 0];
        titleNode = () => createVNode(PopupTrigger, {
          "mode": triggerModeRef.value,
          "prefixCls": subMenuPrefixClsValue,
          "visible": !props2.internalPopupClose && open2.value,
          "popupClassName": popupClassName.value,
          "popupOffset": props2.popupOffset || popupOffset,
          "disabled": mergedDisabled.value,
          "onVisibleChange": onPopupVisibleChange
        }, {
          default: () => [baseTitleNode()],
          popup: () => createVNode(MenuContextProvider, {
            "mode": subMenuTriggerModeRef.value
          }, {
            default: () => [createVNode(SubMenuList, {
              "id": popupId,
              "ref": popupRef
            }, {
              default: slots.default
            })]
          })
        });
      } else {
        titleNode = () => createVNode(PopupTrigger, null, {
          default: baseTitleNode
        });
      }
      return createVNode(MenuContextProvider, {
        "mode": renderMode.value
      }, {
        default: () => [createVNode(Overflow$1.Item, _objectSpread2(_objectSpread2({
          "component": "li"
        }, attrs), {}, {
          "role": "none",
          "class": classNames(subMenuPrefixClsValue, `${subMenuPrefixClsValue}-${mode.value}`, attrs.class, {
            [`${subMenuPrefixClsValue}-open`]: open2.value,
            [`${subMenuPrefixClsValue}-active`]: isActive.value,
            [`${subMenuPrefixClsValue}-selected`]: childrenSelected.value,
            [`${subMenuPrefixClsValue}-disabled`]: mergedDisabled.value
          }),
          "onMouseenter": onMouseEnter,
          "onMouseleave": onMouseLeave,
          "data-submenu-id": key
        }), {
          default: () => {
            return createVNode(Fragment, null, [titleNode(), !overflowDisabled.value && createVNode(InlineSubMenuList, {
              "id": popupId,
              "open": open2.value,
              "keyPath": keysPath.value
            }, {
              default: slots.default
            })]);
          }
        })]
      });
    };
  }
});
function hasClass(node, className) {
  if (node.classList) {
    return node.classList.contains(className);
  }
  const originClass = node.className;
  return ` ${originClass} `.indexOf(` ${className} `) > -1;
}
function addClass(node, className) {
  if (node.classList) {
    node.classList.add(className);
  } else {
    if (!hasClass(node, className)) {
      node.className = `${node.className} ${className}`;
    }
  }
}
function removeClass(node, className) {
  if (node.classList) {
    node.classList.remove(className);
  } else {
    if (hasClass(node, className)) {
      const originClass = node.className;
      node.className = ` ${originClass} `.replace(` ${className} `, " ");
    }
  }
}
const collapseMotion = function() {
  let name = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "ant-motion-collapse";
  let appear = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  return {
    name,
    appear,
    css: true,
    onBeforeEnter: (node) => {
      node.style.height = "0px";
      node.style.opacity = "0";
      addClass(node, name);
    },
    onEnter: (node) => {
      nextTick(() => {
        node.style.height = `${node.scrollHeight}px`;
        node.style.opacity = "1";
      });
    },
    onAfterEnter: (node) => {
      if (node) {
        removeClass(node, name);
        node.style.height = null;
        node.style.opacity = null;
      }
    },
    onBeforeLeave: (node) => {
      addClass(node, name);
      node.style.height = `${node.offsetHeight}px`;
      node.style.opacity = null;
    },
    onLeave: (node) => {
      setTimeout(() => {
        node.style.height = "0px";
        node.style.opacity = "0";
      });
    },
    onAfterLeave: (node) => {
      if (node) {
        removeClass(node, name);
        if (node.style) {
          node.style.height = null;
          node.style.opacity = null;
        }
      }
    }
  };
};
const collapseMotion$1 = collapseMotion;
const menuItemGroupProps = () => ({
  title: PropTypes.any,
  // Internal user prop
  originItemValue: objectType()
});
const ItemGroup = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AMenuItemGroup",
  inheritAttrs: false,
  props: menuItemGroupProps(),
  slots: Object,
  setup(props2, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      prefixCls
    } = useInjectMenu();
    const groupPrefixCls = computed(() => `${prefixCls.value}-item-group`);
    const isMeasure = useMeasure();
    return () => {
      var _a, _b;
      if (isMeasure)
        return (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
      return createVNode("li", _objectSpread2(_objectSpread2({}, attrs), {}, {
        "onClick": (e) => e.stopPropagation(),
        "class": groupPrefixCls.value
      }), [createVNode("div", {
        "title": typeof props2.title === "string" ? props2.title : void 0,
        "class": `${groupPrefixCls.value}-title`
      }, [getPropsSlot(slots, props2, "title")]), createVNode("ul", {
        "class": `${groupPrefixCls.value}-list`
      }, [(_b = slots.default) === null || _b === void 0 ? void 0 : _b.call(slots)])]);
    };
  }
});
const menuDividerProps = () => ({
  prefixCls: String,
  dashed: Boolean
});
const Divider = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AMenuDivider",
  props: menuDividerProps(),
  setup(props2) {
    const {
      prefixCls
    } = useInjectMenu();
    const cls = computed(() => {
      return {
        [`${prefixCls.value}-item-divider`]: true,
        [`${prefixCls.value}-item-divider-dashed`]: !!props2.dashed
      };
    });
    return () => {
      return createVNode("li", {
        "class": cls.value
      }, null);
    };
  }
});
var __rest$6 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function convertItemsToNodes(list, store, parentMenuInfo) {
  return (list || []).map((opt, index2) => {
    if (opt && typeof opt === "object") {
      const _a = opt, {
        label,
        children,
        key,
        type
      } = _a, restProps = __rest$6(_a, ["label", "children", "key", "type"]);
      const mergedKey = key !== null && key !== void 0 ? key : `tmp-${index2}`;
      const parentKeys = parentMenuInfo ? parentMenuInfo.parentKeys.slice() : [];
      const childrenEventKeys = [];
      const menuInfo = {
        eventKey: mergedKey,
        key: mergedKey,
        parentEventKeys: ref(parentKeys),
        parentKeys: ref(parentKeys),
        childrenEventKeys: ref(childrenEventKeys),
        isLeaf: false
      };
      if (children || type === "group") {
        if (type === "group") {
          const childrenNodes2 = convertItemsToNodes(children, store, parentMenuInfo);
          return createVNode(ItemGroup, _objectSpread2(_objectSpread2({
            "key": mergedKey
          }, restProps), {}, {
            "title": label,
            "originItemValue": opt
          }), {
            default: () => [childrenNodes2]
          });
        }
        store.set(mergedKey, menuInfo);
        if (parentMenuInfo) {
          parentMenuInfo.childrenEventKeys.push(mergedKey);
        }
        const childrenNodes = convertItemsToNodes(children, store, {
          childrenEventKeys,
          parentKeys: [].concat(parentKeys, mergedKey)
        });
        return createVNode(SubMenu, _objectSpread2(_objectSpread2({
          "key": mergedKey
        }, restProps), {}, {
          "title": label,
          "originItemValue": opt
        }), {
          default: () => [childrenNodes]
        });
      }
      if (type === "divider") {
        return createVNode(Divider, _objectSpread2({
          "key": mergedKey
        }, restProps), null);
      }
      menuInfo.isLeaf = true;
      store.set(mergedKey, menuInfo);
      return createVNode(MenuItem, _objectSpread2(_objectSpread2({
        "key": mergedKey
      }, restProps), {}, {
        "originItemValue": opt
      }), {
        default: () => [label]
      });
    }
    return null;
  }).filter((opt) => opt);
}
function useItems(props2) {
  const itemsNodes = shallowRef([]);
  const hasItmes = shallowRef(false);
  const store = shallowRef(/* @__PURE__ */ new Map());
  watch(() => props2.items, () => {
    const newStore = /* @__PURE__ */ new Map();
    hasItmes.value = false;
    if (props2.items) {
      hasItmes.value = true;
      itemsNodes.value = convertItemsToNodes(props2.items, newStore);
    } else {
      itemsNodes.value = void 0;
    }
    store.value = newStore;
  }, {
    immediate: true,
    deep: true
  });
  return {
    itemsNodes,
    store,
    hasItmes
  };
}
const getHorizontalStyle = (token) => {
  const {
    componentCls,
    motionDurationSlow,
    menuHorizontalHeight,
    colorSplit,
    lineWidth,
    lineType,
    menuItemPaddingInline
  } = token;
  return {
    [`${componentCls}-horizontal`]: {
      lineHeight: `${menuHorizontalHeight}px`,
      border: 0,
      borderBottom: `${lineWidth}px ${lineType} ${colorSplit}`,
      boxShadow: "none",
      "&::after": {
        display: "block",
        clear: "both",
        height: 0,
        content: '"\\20"'
      },
      // ======================= Item =======================
      [`${componentCls}-item, ${componentCls}-submenu`]: {
        position: "relative",
        display: "inline-block",
        verticalAlign: "bottom",
        paddingInline: menuItemPaddingInline
      },
      [`> ${componentCls}-item:hover,
        > ${componentCls}-item-active,
        > ${componentCls}-submenu ${componentCls}-submenu-title:hover`]: {
        backgroundColor: "transparent"
      },
      [`${componentCls}-item, ${componentCls}-submenu-title`]: {
        transition: [`border-color ${motionDurationSlow}`, `background ${motionDurationSlow}`].join(",")
      },
      // ===================== Sub Menu =====================
      [`${componentCls}-submenu-arrow`]: {
        display: "none"
      }
    }
  };
};
const getHorizontalStyle$1 = getHorizontalStyle;
const getRTLStyle = (_ref) => {
  let {
    componentCls,
    menuArrowOffset
  } = _ref;
  return {
    [`${componentCls}-rtl`]: {
      direction: "rtl"
    },
    [`${componentCls}-submenu-rtl`]: {
      transformOrigin: "100% 0"
    },
    // Vertical Arrow
    [`${componentCls}-rtl${componentCls}-vertical,
    ${componentCls}-submenu-rtl ${componentCls}-vertical`]: {
      [`${componentCls}-submenu-arrow`]: {
        "&::before": {
          transform: `rotate(-45deg) translateY(-${menuArrowOffset})`
        },
        "&::after": {
          transform: `rotate(45deg) translateY(${menuArrowOffset})`
        }
      }
    }
  };
};
const getRTLStyle$1 = getRTLStyle;
const accessibilityFocus = (token) => _extends({}, genFocusOutline(token));
const getThemeStyle = (token, themeSuffix) => {
  const {
    componentCls,
    colorItemText,
    colorItemTextSelected,
    colorGroupTitle,
    colorItemBg,
    colorSubItemBg,
    colorItemBgSelected,
    colorActiveBarHeight,
    colorActiveBarWidth,
    colorActiveBarBorderSize,
    motionDurationSlow,
    motionEaseInOut,
    motionEaseOut,
    menuItemPaddingInline,
    motionDurationMid,
    colorItemTextHover,
    lineType,
    colorSplit,
    // Disabled
    colorItemTextDisabled,
    // Danger
    colorDangerItemText,
    colorDangerItemTextHover,
    colorDangerItemTextSelected,
    colorDangerItemBgActive,
    colorDangerItemBgSelected,
    colorItemBgHover,
    menuSubMenuBg,
    // Horizontal
    colorItemTextSelectedHorizontal,
    colorItemBgSelectedHorizontal
  } = token;
  return {
    [`${componentCls}-${themeSuffix}`]: {
      color: colorItemText,
      background: colorItemBg,
      [`&${componentCls}-root:focus-visible`]: _extends({}, accessibilityFocus(token)),
      // ======================== Item ========================
      [`${componentCls}-item-group-title`]: {
        color: colorGroupTitle
      },
      [`${componentCls}-submenu-selected`]: {
        [`> ${componentCls}-submenu-title`]: {
          color: colorItemTextSelected
        }
      },
      // Disabled
      [`${componentCls}-item-disabled, ${componentCls}-submenu-disabled`]: {
        color: `${colorItemTextDisabled} !important`
      },
      // Hover
      [`${componentCls}-item:hover, ${componentCls}-submenu-title:hover`]: {
        [`&:not(${componentCls}-item-selected):not(${componentCls}-submenu-selected)`]: {
          color: colorItemTextHover
        }
      },
      [`&:not(${componentCls}-horizontal)`]: {
        [`${componentCls}-item:not(${componentCls}-item-selected)`]: {
          "&:hover": {
            backgroundColor: colorItemBgHover
          },
          "&:active": {
            backgroundColor: colorItemBgSelected
          }
        },
        [`${componentCls}-submenu-title`]: {
          "&:hover": {
            backgroundColor: colorItemBgHover
          },
          "&:active": {
            backgroundColor: colorItemBgSelected
          }
        }
      },
      // Danger - only Item has
      [`${componentCls}-item-danger`]: {
        color: colorDangerItemText,
        [`&${componentCls}-item:hover`]: {
          [`&:not(${componentCls}-item-selected):not(${componentCls}-submenu-selected)`]: {
            color: colorDangerItemTextHover
          }
        },
        [`&${componentCls}-item:active`]: {
          background: colorDangerItemBgActive
        }
      },
      [`${componentCls}-item a`]: {
        "&, &:hover": {
          color: "inherit"
        }
      },
      [`${componentCls}-item-selected`]: {
        color: colorItemTextSelected,
        // Danger
        [`&${componentCls}-item-danger`]: {
          color: colorDangerItemTextSelected
        },
        [`a, a:hover`]: {
          color: "inherit"
        }
      },
      [`& ${componentCls}-item-selected`]: {
        backgroundColor: colorItemBgSelected,
        // Danger
        [`&${componentCls}-item-danger`]: {
          backgroundColor: colorDangerItemBgSelected
        }
      },
      [`${componentCls}-item, ${componentCls}-submenu-title`]: {
        [`&:not(${componentCls}-item-disabled):focus-visible`]: _extends({}, accessibilityFocus(token))
      },
      [`&${componentCls}-submenu > ${componentCls}`]: {
        backgroundColor: menuSubMenuBg
      },
      [`&${componentCls}-popup > ${componentCls}`]: {
        backgroundColor: colorItemBg
      },
      // ====================== Horizontal ======================
      [`&${componentCls}-horizontal`]: _extends(_extends({}, themeSuffix === "dark" ? {
        borderBottom: 0
      } : {}), {
        [`> ${componentCls}-item, > ${componentCls}-submenu`]: {
          top: colorActiveBarBorderSize,
          marginTop: -colorActiveBarBorderSize,
          marginBottom: 0,
          borderRadius: 0,
          "&::after": {
            position: "absolute",
            insetInline: menuItemPaddingInline,
            bottom: 0,
            borderBottom: `${colorActiveBarHeight}px solid transparent`,
            transition: `border-color ${motionDurationSlow} ${motionEaseInOut}`,
            content: '""'
          },
          [`&:hover, &-active, &-open`]: {
            "&::after": {
              borderBottomWidth: colorActiveBarHeight,
              borderBottomColor: colorItemTextSelectedHorizontal
            }
          },
          [`&-selected`]: {
            color: colorItemTextSelectedHorizontal,
            backgroundColor: colorItemBgSelectedHorizontal,
            "&::after": {
              borderBottomWidth: colorActiveBarHeight,
              borderBottomColor: colorItemTextSelectedHorizontal
            }
          }
        }
      }),
      // ================== Inline & Vertical ===================
      //
      [`&${componentCls}-root`]: {
        [`&${componentCls}-inline, &${componentCls}-vertical`]: {
          borderInlineEnd: `${colorActiveBarBorderSize}px ${lineType} ${colorSplit}`
        }
      },
      // ======================== Inline ========================
      [`&${componentCls}-inline`]: {
        // Sub
        [`${componentCls}-sub${componentCls}-inline`]: {
          background: colorSubItemBg
        },
        // Item
        [`${componentCls}-item, ${componentCls}-submenu-title`]: colorActiveBarBorderSize && colorActiveBarWidth ? {
          width: `calc(100% + ${colorActiveBarBorderSize}px)`
        } : {},
        [`${componentCls}-item`]: {
          position: "relative",
          "&::after": {
            position: "absolute",
            insetBlock: 0,
            insetInlineEnd: 0,
            borderInlineEnd: `${colorActiveBarWidth}px solid ${colorItemTextSelected}`,
            transform: "scaleY(0.0001)",
            opacity: 0,
            transition: [`transform ${motionDurationMid} ${motionEaseOut}`, `opacity ${motionDurationMid} ${motionEaseOut}`].join(","),
            content: '""'
          },
          // Danger
          [`&${componentCls}-item-danger`]: {
            "&::after": {
              borderInlineEndColor: colorDangerItemTextSelected
            }
          }
        },
        [`${componentCls}-selected, ${componentCls}-item-selected`]: {
          "&::after": {
            transform: "scaleY(1)",
            opacity: 1,
            transition: [`transform ${motionDurationMid} ${motionEaseInOut}`, `opacity ${motionDurationMid} ${motionEaseInOut}`].join(",")
          }
        }
      }
    }
  };
};
const getThemeStyle$1 = getThemeStyle;
const getVerticalInlineStyle = (token) => {
  const {
    componentCls,
    menuItemHeight,
    itemMarginInline,
    padding,
    menuArrowSize,
    marginXS,
    marginXXS
  } = token;
  const paddingWithArrow = padding + menuArrowSize + marginXS;
  return {
    [`${componentCls}-item`]: {
      position: "relative"
    },
    [`${componentCls}-item, ${componentCls}-submenu-title`]: {
      height: menuItemHeight,
      lineHeight: `${menuItemHeight}px`,
      paddingInline: padding,
      overflow: "hidden",
      textOverflow: "ellipsis",
      marginInline: itemMarginInline,
      marginBlock: marginXXS,
      width: `calc(100% - ${itemMarginInline * 2}px)`
    },
    // disable margin collapsed
    [`${componentCls}-submenu`]: {
      paddingBottom: 0.02
    },
    [`> ${componentCls}-item,
            > ${componentCls}-submenu > ${componentCls}-submenu-title`]: {
      height: menuItemHeight,
      lineHeight: `${menuItemHeight}px`
    },
    [`${componentCls}-item-group-list ${componentCls}-submenu-title,
            ${componentCls}-submenu-title`]: {
      paddingInlineEnd: paddingWithArrow
    }
  };
};
const getVerticalStyle = (token) => {
  const {
    componentCls,
    iconCls,
    menuItemHeight,
    colorTextLightSolid,
    dropdownWidth,
    controlHeightLG,
    motionDurationMid,
    motionEaseOut,
    paddingXL,
    fontSizeSM,
    fontSizeLG,
    motionDurationSlow,
    paddingXS,
    boxShadowSecondary
  } = token;
  const inlineItemStyle = {
    height: menuItemHeight,
    lineHeight: `${menuItemHeight}px`,
    listStylePosition: "inside",
    listStyleType: "disc"
  };
  return [
    {
      [componentCls]: {
        [`&-inline, &-vertical`]: _extends({
          [`&${componentCls}-root`]: {
            boxShadow: "none"
          }
        }, getVerticalInlineStyle(token))
      },
      [`${componentCls}-submenu-popup`]: {
        [`${componentCls}-vertical`]: _extends(_extends({}, getVerticalInlineStyle(token)), {
          boxShadow: boxShadowSecondary
        })
      }
    },
    // Vertical only
    {
      [`${componentCls}-submenu-popup ${componentCls}-vertical${componentCls}-sub`]: {
        minWidth: dropdownWidth,
        maxHeight: `calc(100vh - ${controlHeightLG * 2.5}px)`,
        padding: "0",
        overflow: "hidden",
        borderInlineEnd: 0,
        // https://github.com/ant-design/ant-design/issues/22244
        // https://github.com/ant-design/ant-design/issues/26812
        "&:not([class*='-active'])": {
          overflowX: "hidden",
          overflowY: "auto"
        }
      }
    },
    // Inline Only
    {
      [`${componentCls}-inline`]: {
        width: "100%",
        // Motion enhance for first level
        [`&${componentCls}-root`]: {
          [`${componentCls}-item, ${componentCls}-submenu-title`]: {
            display: "flex",
            alignItems: "center",
            transition: [`border-color ${motionDurationSlow}`, `background ${motionDurationSlow}`, `padding ${motionDurationMid} ${motionEaseOut}`].join(","),
            [`> ${componentCls}-title-content`]: {
              flex: "auto",
              minWidth: 0,
              overflow: "hidden",
              textOverflow: "ellipsis"
            },
            "> *": {
              flex: "none"
            }
          }
        },
        // >>>>> Sub
        [`${componentCls}-sub${componentCls}-inline`]: {
          padding: 0,
          border: 0,
          borderRadius: 0,
          boxShadow: "none",
          [`& > ${componentCls}-submenu > ${componentCls}-submenu-title`]: inlineItemStyle,
          [`& ${componentCls}-item-group-title`]: {
            paddingInlineStart: paddingXL
          }
        },
        // >>>>> Item
        [`${componentCls}-item`]: inlineItemStyle
      }
    },
    // Inline Collapse Only
    {
      [`${componentCls}-inline-collapsed`]: {
        width: menuItemHeight * 2,
        [`&${componentCls}-root`]: {
          [`${componentCls}-item, ${componentCls}-submenu ${componentCls}-submenu-title`]: {
            [`> ${componentCls}-inline-collapsed-noicon`]: {
              fontSize: fontSizeLG,
              textAlign: "center"
            }
          }
        },
        [`> ${componentCls}-item,
          > ${componentCls}-item-group > ${componentCls}-item-group-list > ${componentCls}-item,
          > ${componentCls}-item-group > ${componentCls}-item-group-list > ${componentCls}-submenu > ${componentCls}-submenu-title,
          > ${componentCls}-submenu > ${componentCls}-submenu-title`]: {
          insetInlineStart: 0,
          paddingInline: `calc(50% - ${fontSizeSM}px)`,
          textOverflow: "clip",
          [`
            ${componentCls}-submenu-arrow,
            ${componentCls}-submenu-expand-icon
          `]: {
            opacity: 0
          },
          [`${componentCls}-item-icon, ${iconCls}`]: {
            margin: 0,
            fontSize: fontSizeLG,
            lineHeight: `${menuItemHeight}px`,
            "+ span": {
              display: "inline-block",
              opacity: 0
            }
          }
        },
        [`${componentCls}-item-icon, ${iconCls}`]: {
          display: "inline-block"
        },
        "&-tooltip": {
          pointerEvents: "none",
          [`${componentCls}-item-icon, ${iconCls}`]: {
            display: "none"
          },
          "a, a:hover": {
            color: colorTextLightSolid
          }
        },
        [`${componentCls}-item-group-title`]: _extends(_extends({}, textEllipsis), {
          paddingInline: paddingXS
        })
      }
    }
  ];
};
const getVerticalStyle$1 = getVerticalStyle;
const genMenuItemStyle = (token) => {
  const {
    componentCls,
    fontSize,
    motionDurationSlow,
    motionDurationMid,
    motionEaseInOut,
    motionEaseOut,
    iconCls,
    controlHeightSM
  } = token;
  return {
    // >>>>> Item
    [`${componentCls}-item, ${componentCls}-submenu-title`]: {
      position: "relative",
      display: "block",
      margin: 0,
      whiteSpace: "nowrap",
      cursor: "pointer",
      transition: [`border-color ${motionDurationSlow}`, `background ${motionDurationSlow}`, `padding ${motionDurationSlow} ${motionEaseInOut}`].join(","),
      [`${componentCls}-item-icon, ${iconCls}`]: {
        minWidth: fontSize,
        fontSize,
        transition: [`font-size ${motionDurationMid} ${motionEaseOut}`, `margin ${motionDurationSlow} ${motionEaseInOut}`, `color ${motionDurationSlow}`].join(","),
        "+ span": {
          marginInlineStart: controlHeightSM - fontSize,
          opacity: 1,
          transition: [`opacity ${motionDurationSlow} ${motionEaseInOut}`, `margin ${motionDurationSlow}`, `color ${motionDurationSlow}`].join(",")
        }
      },
      [`${componentCls}-item-icon`]: _extends({}, resetIcon()),
      [`&${componentCls}-item-only-child`]: {
        [`> ${iconCls}, > ${componentCls}-item-icon`]: {
          marginInlineEnd: 0
        }
      }
    },
    // Disabled state sets text to gray and nukes hover/tab effects
    [`${componentCls}-item-disabled, ${componentCls}-submenu-disabled`]: {
      background: "none !important",
      cursor: "not-allowed",
      "&::after": {
        borderColor: "transparent !important"
      },
      a: {
        color: "inherit !important"
      },
      [`> ${componentCls}-submenu-title`]: {
        color: "inherit !important",
        cursor: "not-allowed"
      }
    }
  };
};
const genSubMenuArrowStyle = (token) => {
  const {
    componentCls,
    motionDurationSlow,
    motionEaseInOut,
    borderRadius,
    menuArrowSize,
    menuArrowOffset
  } = token;
  return {
    [`${componentCls}-submenu`]: {
      [`&-expand-icon, &-arrow`]: {
        position: "absolute",
        top: "50%",
        insetInlineEnd: token.margin,
        width: menuArrowSize,
        color: "currentcolor",
        transform: "translateY(-50%)",
        transition: `transform ${motionDurationSlow} ${motionEaseInOut}, opacity ${motionDurationSlow}`
      },
      "&-arrow": {
        // →
        "&::before, &::after": {
          position: "absolute",
          width: menuArrowSize * 0.6,
          height: menuArrowSize * 0.15,
          backgroundColor: "currentcolor",
          borderRadius,
          transition: [`background ${motionDurationSlow} ${motionEaseInOut}`, `transform ${motionDurationSlow} ${motionEaseInOut}`, `top ${motionDurationSlow} ${motionEaseInOut}`, `color ${motionDurationSlow} ${motionEaseInOut}`].join(","),
          content: '""'
        },
        "&::before": {
          transform: `rotate(45deg) translateY(-${menuArrowOffset})`
        },
        "&::after": {
          transform: `rotate(-45deg) translateY(${menuArrowOffset})`
        }
      }
    }
  };
};
const getBaseStyle = (token) => {
  const {
    antCls,
    componentCls,
    fontSize,
    motionDurationSlow,
    motionDurationMid,
    motionEaseInOut,
    lineHeight,
    paddingXS,
    padding,
    colorSplit,
    lineWidth,
    zIndexPopup,
    borderRadiusLG,
    radiusSubMenuItem,
    menuArrowSize,
    menuArrowOffset,
    lineType,
    menuPanelMaskInset
  } = token;
  return [
    // Misc
    {
      "": {
        [`${componentCls}`]: _extends(_extends({}, clearFix()), {
          // Hidden
          [`&-hidden`]: {
            display: "none"
          }
        })
      },
      [`${componentCls}-submenu-hidden`]: {
        display: "none"
      }
    },
    {
      [componentCls]: _extends(_extends(_extends(_extends(_extends(_extends(_extends({}, resetComponent(token)), clearFix()), {
        marginBottom: 0,
        paddingInlineStart: 0,
        // Override default ul/ol
        fontSize,
        lineHeight: 0,
        listStyle: "none",
        outline: "none",
        transition: `width ${motionDurationSlow} cubic-bezier(0.2, 0, 0, 1) 0s`,
        [`ul, ol`]: {
          margin: 0,
          padding: 0,
          listStyle: "none"
        },
        // Overflow ellipsis
        [`&-overflow`]: {
          display: "flex",
          [`${componentCls}-item`]: {
            flex: "none"
          }
        },
        [`${componentCls}-item, ${componentCls}-submenu, ${componentCls}-submenu-title`]: {
          borderRadius: token.radiusItem
        },
        [`${componentCls}-item-group-title`]: {
          padding: `${paddingXS}px ${padding}px`,
          fontSize,
          lineHeight,
          transition: `all ${motionDurationSlow}`
        },
        [`&-horizontal ${componentCls}-submenu`]: {
          transition: [`border-color ${motionDurationSlow} ${motionEaseInOut}`, `background ${motionDurationSlow} ${motionEaseInOut}`].join(",")
        },
        [`${componentCls}-submenu, ${componentCls}-submenu-inline`]: {
          transition: [`border-color ${motionDurationSlow} ${motionEaseInOut}`, `background ${motionDurationSlow} ${motionEaseInOut}`, `padding ${motionDurationMid} ${motionEaseInOut}`].join(",")
        },
        [`${componentCls}-submenu ${componentCls}-sub`]: {
          cursor: "initial",
          transition: [`background ${motionDurationSlow} ${motionEaseInOut}`, `padding ${motionDurationSlow} ${motionEaseInOut}`].join(",")
        },
        [`${componentCls}-title-content`]: {
          transition: `color ${motionDurationSlow}`
        },
        [`${componentCls}-item a`]: {
          "&::before": {
            position: "absolute",
            inset: 0,
            backgroundColor: "transparent",
            content: '""'
          }
        },
        // Removed a Badge related style seems it's safe
        // https://github.com/ant-design/ant-design/issues/19809
        // >>>>> Divider
        [`${componentCls}-item-divider`]: {
          overflow: "hidden",
          lineHeight: 0,
          borderColor: colorSplit,
          borderStyle: lineType,
          borderWidth: 0,
          borderTopWidth: lineWidth,
          marginBlock: lineWidth,
          padding: 0,
          "&-dashed": {
            borderStyle: "dashed"
          }
        }
      }), genMenuItemStyle(token)), {
        [`${componentCls}-item-group`]: {
          [`${componentCls}-item-group-list`]: {
            margin: 0,
            padding: 0,
            [`${componentCls}-item, ${componentCls}-submenu-title`]: {
              paddingInline: `${fontSize * 2}px ${padding}px`
            }
          }
        },
        // ======================= Sub Menu =======================
        "&-submenu": {
          "&-popup": {
            position: "absolute",
            zIndex: zIndexPopup,
            background: "transparent",
            borderRadius: borderRadiusLG,
            boxShadow: "none",
            transformOrigin: "0 0",
            // https://github.com/ant-design/ant-design/issues/13955
            "&::before": {
              position: "absolute",
              inset: `${menuPanelMaskInset}px 0 0`,
              zIndex: -1,
              width: "100%",
              height: "100%",
              opacity: 0,
              content: '""'
            }
          },
          // https://github.com/ant-design/ant-design/issues/13955
          "&-placement-rightTop::before": {
            top: 0,
            insetInlineStart: menuPanelMaskInset
          },
          [`> ${componentCls}`]: _extends(_extends(_extends({
            borderRadius: borderRadiusLG
          }, genMenuItemStyle(token)), genSubMenuArrowStyle(token)), {
            [`${componentCls}-item, ${componentCls}-submenu > ${componentCls}-submenu-title`]: {
              borderRadius: radiusSubMenuItem
            },
            [`${componentCls}-submenu-title::after`]: {
              transition: `transform ${motionDurationSlow} ${motionEaseInOut}`
            }
          })
        }
      }), genSubMenuArrowStyle(token)), {
        [`&-inline-collapsed ${componentCls}-submenu-arrow,
        &-inline ${componentCls}-submenu-arrow`]: {
          // ↓
          "&::before": {
            transform: `rotate(-45deg) translateX(${menuArrowOffset})`
          },
          "&::after": {
            transform: `rotate(45deg) translateX(-${menuArrowOffset})`
          }
        },
        [`${componentCls}-submenu-open${componentCls}-submenu-inline > ${componentCls}-submenu-title > ${componentCls}-submenu-arrow`]: {
          // ↑
          transform: `translateY(-${menuArrowSize * 0.2}px)`,
          "&::after": {
            transform: `rotate(-45deg) translateX(-${menuArrowOffset})`
          },
          "&::before": {
            transform: `rotate(45deg) translateX(${menuArrowOffset})`
          }
        }
      })
    },
    // Integration with header element so menu items have the same height
    {
      [`${antCls}-layout-header`]: {
        [componentCls]: {
          lineHeight: "inherit"
        }
      }
    }
  ];
};
const useStyle$2 = (prefixCls, injectStyle) => {
  const useOriginHook = genComponentStyleHook("Menu", (token, _ref) => {
    let {
      overrideComponentToken
    } = _ref;
    if ((injectStyle === null || injectStyle === void 0 ? void 0 : injectStyle.value) === false) {
      return [];
    }
    const {
      colorBgElevated,
      colorPrimary,
      colorError,
      colorErrorHover,
      colorTextLightSolid
    } = token;
    const {
      controlHeightLG,
      fontSize
    } = token;
    const menuArrowSize = fontSize / 7 * 5;
    const menuToken = merge(token, {
      menuItemHeight: controlHeightLG,
      menuItemPaddingInline: token.margin,
      menuArrowSize,
      menuHorizontalHeight: controlHeightLG * 1.15,
      menuArrowOffset: `${menuArrowSize * 0.25}px`,
      menuPanelMaskInset: -7,
      menuSubMenuBg: colorBgElevated
    });
    const colorTextDark = new TinyColor(colorTextLightSolid).setAlpha(0.65).toRgbString();
    const menuDarkToken = merge(menuToken, {
      colorItemText: colorTextDark,
      colorItemTextHover: colorTextLightSolid,
      colorGroupTitle: colorTextDark,
      colorItemTextSelected: colorTextLightSolid,
      colorItemBg: "#001529",
      colorSubItemBg: "#000c17",
      colorItemBgActive: "transparent",
      colorItemBgSelected: colorPrimary,
      colorActiveBarWidth: 0,
      colorActiveBarHeight: 0,
      colorActiveBarBorderSize: 0,
      // Disabled
      colorItemTextDisabled: new TinyColor(colorTextLightSolid).setAlpha(0.25).toRgbString(),
      // Danger
      colorDangerItemText: colorError,
      colorDangerItemTextHover: colorErrorHover,
      colorDangerItemTextSelected: colorTextLightSolid,
      colorDangerItemBgActive: colorError,
      colorDangerItemBgSelected: colorError,
      menuSubMenuBg: "#001529",
      // Horizontal
      colorItemTextSelectedHorizontal: colorTextLightSolid,
      colorItemBgSelectedHorizontal: colorPrimary
    }, _extends({}, overrideComponentToken));
    return [
      // Basic
      getBaseStyle(menuToken),
      // Horizontal
      getHorizontalStyle$1(menuToken),
      // Vertical
      getVerticalStyle$1(menuToken),
      // Theme
      getThemeStyle$1(menuToken, "light"),
      getThemeStyle$1(menuDarkToken, "dark"),
      // RTL
      getRTLStyle$1(menuToken),
      // Motion
      genCollapseMotion$1(menuToken),
      initSlideMotion(menuToken, "slide-up"),
      initSlideMotion(menuToken, "slide-down"),
      initZoomMotion(menuToken, "zoom-big")
    ];
  }, (token) => {
    const {
      colorPrimary,
      colorError,
      colorTextDisabled,
      colorErrorBg,
      colorText,
      colorTextDescription,
      colorBgContainer,
      colorFillAlter,
      colorFillContent,
      lineWidth,
      lineWidthBold,
      controlItemBgActive,
      colorBgTextHover
    } = token;
    return {
      dropdownWidth: 160,
      zIndexPopup: token.zIndexPopupBase + 50,
      radiusItem: token.borderRadiusLG,
      radiusSubMenuItem: token.borderRadiusSM,
      colorItemText: colorText,
      colorItemTextHover: colorText,
      colorItemTextHoverHorizontal: colorPrimary,
      colorGroupTitle: colorTextDescription,
      colorItemTextSelected: colorPrimary,
      colorItemTextSelectedHorizontal: colorPrimary,
      colorItemBg: colorBgContainer,
      colorItemBgHover: colorBgTextHover,
      colorItemBgActive: colorFillContent,
      colorSubItemBg: colorFillAlter,
      colorItemBgSelected: controlItemBgActive,
      colorItemBgSelectedHorizontal: "transparent",
      colorActiveBarWidth: 0,
      colorActiveBarHeight: lineWidthBold,
      colorActiveBarBorderSize: lineWidth,
      // Disabled
      colorItemTextDisabled: colorTextDisabled,
      // Danger
      colorDangerItemText: colorError,
      colorDangerItemTextHover: colorError,
      colorDangerItemTextSelected: colorError,
      colorDangerItemBgActive: colorErrorBg,
      colorDangerItemBgSelected: colorErrorBg,
      itemMarginInline: token.marginXXS
    };
  });
  return useOriginHook(prefixCls);
};
const menuProps = () => ({
  id: String,
  prefixCls: String,
  // donot use items, now only support inner use
  items: Array,
  disabled: Boolean,
  inlineCollapsed: Boolean,
  disabledOverflow: Boolean,
  forceSubMenuRender: Boolean,
  openKeys: Array,
  selectedKeys: Array,
  activeKey: String,
  selectable: {
    type: Boolean,
    default: true
  },
  multiple: {
    type: Boolean,
    default: false
  },
  tabindex: {
    type: [Number, String]
  },
  motion: Object,
  role: String,
  theme: {
    type: String,
    default: "light"
  },
  mode: {
    type: String,
    default: "vertical"
  },
  inlineIndent: {
    type: Number,
    default: 24
  },
  subMenuOpenDelay: {
    type: Number,
    default: 0
  },
  subMenuCloseDelay: {
    type: Number,
    default: 0.1
  },
  builtinPlacements: {
    type: Object
  },
  triggerSubMenuAction: {
    type: String,
    default: "hover"
  },
  getPopupContainer: Function,
  expandIcon: Function,
  onOpenChange: Function,
  onSelect: Function,
  onDeselect: Function,
  onClick: [Function, Array],
  onFocus: Function,
  onBlur: Function,
  onMousedown: Function,
  "onUpdate:openKeys": Function,
  "onUpdate:selectedKeys": Function,
  "onUpdate:activeKey": Function
});
const EMPTY_LIST = [];
const Menu = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AMenu",
  inheritAttrs: false,
  props: menuProps(),
  slots: Object,
  setup(props2, _ref) {
    let {
      slots,
      emit,
      attrs
    } = _ref;
    const {
      direction,
      getPrefixCls
    } = useConfigInject("menu", props2);
    const override = useInjectOverride();
    const prefixCls = computed(() => {
      var _a;
      return getPrefixCls("menu", props2.prefixCls || ((_a = override === null || override === void 0 ? void 0 : override.prefixCls) === null || _a === void 0 ? void 0 : _a.value));
    });
    const [wrapSSR, hashId] = useStyle$2(prefixCls, computed(() => {
      return !override;
    }));
    const store = shallowRef(/* @__PURE__ */ new Map());
    const siderCollapsed = inject(SiderCollapsedKey, ref(void 0));
    const inlineCollapsed = computed(() => {
      if (siderCollapsed.value !== void 0) {
        return siderCollapsed.value;
      }
      return props2.inlineCollapsed;
    });
    const {
      itemsNodes
    } = useItems(props2);
    const isMounted = shallowRef(false);
    onMounted(() => {
      isMounted.value = true;
    });
    watchEffect(() => {
      devWarning(!(props2.inlineCollapsed === true && props2.mode !== "inline"), "Menu", "`inlineCollapsed` should only be used when `mode` is inline.");
      devWarning(!(siderCollapsed.value !== void 0 && props2.inlineCollapsed === true), "Menu", "`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.");
    });
    const activeKeys = ref([]);
    const mergedSelectedKeys = ref([]);
    const keyMapStore = ref({});
    watch(store, () => {
      const newKeyMapStore = {};
      for (const menuInfo of store.value.values()) {
        newKeyMapStore[menuInfo.key] = menuInfo;
      }
      keyMapStore.value = newKeyMapStore;
    }, {
      flush: "post"
    });
    watchEffect(() => {
      if (props2.activeKey !== void 0) {
        let keys = [];
        const menuInfo = props2.activeKey ? keyMapStore.value[props2.activeKey] : void 0;
        if (menuInfo && props2.activeKey !== void 0) {
          keys = uniq([].concat(unref(menuInfo.parentKeys), props2.activeKey));
        } else {
          keys = [];
        }
        if (!shallowequal(activeKeys.value, keys)) {
          activeKeys.value = keys;
        }
      }
    });
    watch(() => props2.selectedKeys, (selectedKeys) => {
      if (selectedKeys) {
        mergedSelectedKeys.value = selectedKeys.slice();
      }
    }, {
      immediate: true,
      deep: true
    });
    const selectedSubMenuKeys = ref([]);
    watch([keyMapStore, mergedSelectedKeys], () => {
      let subMenuParentKeys = [];
      mergedSelectedKeys.value.forEach((key) => {
        const menuInfo = keyMapStore.value[key];
        if (menuInfo) {
          subMenuParentKeys = subMenuParentKeys.concat(unref(menuInfo.parentKeys));
        }
      });
      subMenuParentKeys = uniq(subMenuParentKeys);
      if (!shallowequal(selectedSubMenuKeys.value, subMenuParentKeys)) {
        selectedSubMenuKeys.value = subMenuParentKeys;
      }
    }, {
      immediate: true
    });
    const triggerSelection = (info) => {
      if (props2.selectable) {
        const {
          key: targetKey
        } = info;
        const exist = mergedSelectedKeys.value.includes(targetKey);
        let newSelectedKeys;
        if (props2.multiple) {
          if (exist) {
            newSelectedKeys = mergedSelectedKeys.value.filter((key) => key !== targetKey);
          } else {
            newSelectedKeys = [...mergedSelectedKeys.value, targetKey];
          }
        } else {
          newSelectedKeys = [targetKey];
        }
        const selectInfo = _extends(_extends({}, info), {
          selectedKeys: newSelectedKeys
        });
        if (!shallowequal(newSelectedKeys, mergedSelectedKeys.value)) {
          if (props2.selectedKeys === void 0) {
            mergedSelectedKeys.value = newSelectedKeys;
          }
          emit("update:selectedKeys", newSelectedKeys);
          if (exist && props2.multiple) {
            emit("deselect", selectInfo);
          } else {
            emit("select", selectInfo);
          }
        }
      }
      if (mergedMode.value !== "inline" && !props2.multiple && mergedOpenKeys.value.length) {
        triggerOpenKeys(EMPTY_LIST);
      }
    };
    const mergedOpenKeys = ref([]);
    watch(() => props2.openKeys, function() {
      let openKeys = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : mergedOpenKeys.value;
      if (!shallowequal(mergedOpenKeys.value, openKeys)) {
        mergedOpenKeys.value = openKeys.slice();
      }
    }, {
      immediate: true,
      deep: true
    });
    let timeout;
    const changeActiveKeys = (keys) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (props2.activeKey === void 0) {
          activeKeys.value = keys;
        }
        emit("update:activeKey", keys[keys.length - 1]);
      });
    };
    const disabled = computed(() => !!props2.disabled);
    const isRtl = computed(() => direction.value === "rtl");
    const mergedMode = ref("vertical");
    const mergedInlineCollapsed = shallowRef(false);
    watchEffect(() => {
      var _a;
      if ((props2.mode === "inline" || props2.mode === "vertical") && inlineCollapsed.value) {
        mergedMode.value = "vertical";
        mergedInlineCollapsed.value = inlineCollapsed.value;
      } else {
        mergedMode.value = props2.mode;
        mergedInlineCollapsed.value = false;
      }
      if ((_a = override === null || override === void 0 ? void 0 : override.mode) === null || _a === void 0 ? void 0 : _a.value) {
        mergedMode.value = override.mode.value;
      }
    });
    const isInlineMode = computed(() => mergedMode.value === "inline");
    const triggerOpenKeys = (keys) => {
      mergedOpenKeys.value = keys;
      emit("update:openKeys", keys);
      emit("openChange", keys);
    };
    const inlineCacheOpenKeys = ref(mergedOpenKeys.value);
    const mountRef = shallowRef(false);
    watch(mergedOpenKeys, () => {
      if (isInlineMode.value) {
        inlineCacheOpenKeys.value = mergedOpenKeys.value;
      }
    }, {
      immediate: true
    });
    watch(isInlineMode, () => {
      if (!mountRef.value) {
        mountRef.value = true;
        return;
      }
      if (isInlineMode.value) {
        mergedOpenKeys.value = inlineCacheOpenKeys.value;
      } else {
        triggerOpenKeys(EMPTY_LIST);
      }
    }, {
      immediate: true
    });
    const className = computed(() => {
      return {
        [`${prefixCls.value}`]: true,
        [`${prefixCls.value}-root`]: true,
        [`${prefixCls.value}-${mergedMode.value}`]: true,
        [`${prefixCls.value}-inline-collapsed`]: mergedInlineCollapsed.value,
        [`${prefixCls.value}-rtl`]: isRtl.value,
        [`${prefixCls.value}-${props2.theme}`]: true
      };
    });
    const rootPrefixCls = computed(() => getPrefixCls());
    const defaultMotions = computed(() => ({
      horizontal: {
        name: `${rootPrefixCls.value}-slide-up`
      },
      inline: collapseMotion$1(`${rootPrefixCls.value}-motion-collapse`),
      other: {
        name: `${rootPrefixCls.value}-zoom-big`
      }
    }));
    useProvideFirstLevel(true);
    const getChildrenKeys = function() {
      let eventKeys = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      const keys = [];
      const storeValue = store.value;
      eventKeys.forEach((eventKey) => {
        const {
          key,
          childrenEventKeys
        } = storeValue.get(eventKey);
        keys.push(key, ...getChildrenKeys(unref(childrenEventKeys)));
      });
      return keys;
    };
    const onInternalClick = (info) => {
      var _a;
      emit("click", info);
      triggerSelection(info);
      (_a = override === null || override === void 0 ? void 0 : override.onClick) === null || _a === void 0 ? void 0 : _a.call(override);
    };
    const onInternalOpenChange = (key, open2) => {
      var _a;
      const childrenEventKeys = ((_a = keyMapStore.value[key]) === null || _a === void 0 ? void 0 : _a.childrenEventKeys) || [];
      let newOpenKeys = mergedOpenKeys.value.filter((k) => k !== key);
      if (open2) {
        newOpenKeys.push(key);
      } else if (mergedMode.value !== "inline") {
        const subPathKeys = getChildrenKeys(unref(childrenEventKeys));
        newOpenKeys = uniq(newOpenKeys.filter((k) => !subPathKeys.includes(k)));
      }
      if (!shallowequal(mergedOpenKeys, newOpenKeys)) {
        triggerOpenKeys(newOpenKeys);
      }
    };
    const registerMenuInfo = (key, info) => {
      store.value.set(key, info);
      store.value = new Map(store.value);
    };
    const unRegisterMenuInfo = (key) => {
      store.value.delete(key);
      store.value = new Map(store.value);
    };
    const lastVisibleIndex = ref(0);
    const expandIcon = computed(() => {
      var _a;
      return props2.expandIcon || slots.expandIcon || ((_a = override === null || override === void 0 ? void 0 : override.expandIcon) === null || _a === void 0 ? void 0 : _a.value) ? (opt) => {
        let icon = props2.expandIcon || slots.expandIcon;
        icon = typeof icon === "function" ? icon(opt) : icon;
        return cloneElement(icon, {
          class: `${prefixCls.value}-submenu-expand-icon`
        }, false);
      } : null;
    });
    useProvideMenu$1({
      prefixCls,
      activeKeys,
      openKeys: mergedOpenKeys,
      selectedKeys: mergedSelectedKeys,
      changeActiveKeys,
      disabled,
      rtl: isRtl,
      mode: mergedMode,
      inlineIndent: computed(() => props2.inlineIndent),
      subMenuCloseDelay: computed(() => props2.subMenuCloseDelay),
      subMenuOpenDelay: computed(() => props2.subMenuOpenDelay),
      builtinPlacements: computed(() => props2.builtinPlacements),
      triggerSubMenuAction: computed(() => props2.triggerSubMenuAction),
      getPopupContainer: computed(() => props2.getPopupContainer),
      inlineCollapsed: mergedInlineCollapsed,
      theme: computed(() => props2.theme),
      siderCollapsed,
      defaultMotions: computed(() => isMounted.value ? defaultMotions.value : null),
      motion: computed(() => isMounted.value ? props2.motion : null),
      overflowDisabled: shallowRef(void 0),
      onOpenChange: onInternalOpenChange,
      onItemClick: onInternalClick,
      registerMenuInfo,
      unRegisterMenuInfo,
      selectedSubMenuKeys,
      expandIcon,
      forceSubMenuRender: computed(() => props2.forceSubMenuRender),
      rootClassName: hashId
    });
    const getChildrenList = () => {
      var _a;
      return itemsNodes.value || flattenChildren((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
    };
    return () => {
      var _a;
      const childList = getChildrenList();
      const allVisible = lastVisibleIndex.value >= childList.length - 1 || mergedMode.value !== "horizontal" || props2.disabledOverflow;
      const getWrapperList = (childList2) => {
        return mergedMode.value !== "horizontal" || props2.disabledOverflow ? childList2 : (
          // Need wrap for overflow dropdown that do not response for open
          childList2.map((child, index2) => (
            // Always wrap provider to avoid sub node re-mount
            createVNode(MenuContextProvider, {
              "key": child.key,
              "overflowDisabled": index2 > lastVisibleIndex.value
            }, {
              default: () => child
            })
          ))
        );
      };
      const overflowedIndicator = ((_a = slots.overflowedIndicator) === null || _a === void 0 ? void 0 : _a.call(slots)) || createVNode(EllipsisOutlined$1, null, null);
      return wrapSSR(createVNode(Overflow$1, _objectSpread2(_objectSpread2({}, attrs), {}, {
        "onMousedown": props2.onMousedown,
        "prefixCls": `${prefixCls.value}-overflow`,
        "component": "ul",
        "itemComponent": MenuItem,
        "class": [className.value, attrs.class, hashId.value],
        "role": "menu",
        "id": props2.id,
        "data": getWrapperList(childList),
        "renderRawItem": (node) => node,
        "renderRawRest": (omitItems) => {
          const len = omitItems.length;
          const originOmitItems = len ? childList.slice(-len) : null;
          return createVNode(Fragment, null, [createVNode(SubMenu, {
            "eventKey": OVERFLOW_KEY,
            "key": OVERFLOW_KEY,
            "title": overflowedIndicator,
            "disabled": allVisible,
            "internalPopupClose": len === 0
          }, {
            default: () => originOmitItems
          }), createVNode(PathContext, null, {
            default: () => [createVNode(SubMenu, {
              "eventKey": OVERFLOW_KEY,
              "key": OVERFLOW_KEY,
              "title": overflowedIndicator,
              "disabled": allVisible,
              "internalPopupClose": len === 0
            }, {
              default: () => originOmitItems
            })]
          })]);
        },
        "maxCount": mergedMode.value !== "horizontal" || props2.disabledOverflow ? Overflow$1.INVALIDATE : Overflow$1.RESPONSIVE,
        "ssr": "full",
        "data-menu-list": true,
        "onVisibleChange": (newLastIndex) => {
          lastVisibleIndex.value = newLastIndex;
        }
      }), {
        default: () => [createVNode(Teleport, {
          "to": "body"
        }, {
          default: () => [createVNode("div", {
            "style": {
              display: "none"
            },
            "aria-hidden": true
          }, [createVNode(PathContext, null, {
            default: () => [getWrapperList(getChildrenList())]
          })])]
        })]
      }));
    };
  }
});
Menu.install = function(app) {
  app.component(Menu.name, Menu);
  app.component(MenuItem.name, MenuItem);
  app.component(SubMenu.name, SubMenu);
  app.component(Divider.name, Divider);
  app.component(ItemGroup.name, ItemGroup);
  return app;
};
Menu.Item = MenuItem;
Menu.Divider = Divider;
Menu.SubMenu = SubMenu;
Menu.ItemGroup = ItemGroup;
function useRaf(callback) {
  const rafRef = shallowRef();
  const removedRef = shallowRef(false);
  function trigger() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (!removedRef.value) {
      wrapperRaf.cancel(rafRef.value);
      rafRef.value = wrapperRaf(() => {
        callback(...args);
      });
    }
  }
  onBeforeUnmount(() => {
    removedRef.value = true;
    wrapperRaf.cancel(rafRef.value);
  });
  return trigger;
}
function useRafState(defaultState) {
  const batchRef = shallowRef([]);
  const state = shallowRef(typeof defaultState === "function" ? defaultState() : defaultState);
  const flushUpdate = useRaf(() => {
    let value = state.value;
    batchRef.value.forEach((callback) => {
      value = callback(value);
    });
    batchRef.value = [];
    state.value = value;
  });
  function updater(callback) {
    batchRef.value.push(callback);
    flushUpdate();
  }
  return [state, updater];
}
const TabNode = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "TabNode",
  props: {
    id: {
      type: String
    },
    prefixCls: {
      type: String
    },
    tab: {
      type: Object
    },
    active: {
      type: Boolean
    },
    closable: {
      type: Boolean
    },
    editable: {
      type: Object
    },
    onClick: {
      type: Function
    },
    onResize: {
      type: Function
    },
    renderWrapper: {
      type: Function
    },
    removeAriaLabel: {
      type: String
    },
    // onRemove: { type: Function as PropType<() => void> },
    onFocus: {
      type: Function
    }
  },
  emits: ["click", "resize", "remove", "focus"],
  setup(props2, _ref) {
    let {
      expose,
      attrs
    } = _ref;
    const domRef = ref();
    function onInternalClick(e) {
      var _a;
      if ((_a = props2.tab) === null || _a === void 0 ? void 0 : _a.disabled) {
        return;
      }
      props2.onClick(e);
    }
    expose({
      domRef
    });
    function onRemoveTab(event) {
      var _a;
      event.preventDefault();
      event.stopPropagation();
      props2.editable.onEdit("remove", {
        key: (_a = props2.tab) === null || _a === void 0 ? void 0 : _a.key,
        event
      });
    }
    const removable = computed(() => {
      var _a;
      return props2.editable && props2.closable !== false && !((_a = props2.tab) === null || _a === void 0 ? void 0 : _a.disabled);
    });
    return () => {
      var _a;
      const {
        prefixCls,
        id,
        active,
        tab: {
          key,
          tab,
          disabled,
          closeIcon
        },
        renderWrapper,
        removeAriaLabel,
        editable,
        onFocus
      } = props2;
      const tabPrefix = `${prefixCls}-tab`;
      const node = createVNode("div", {
        "key": key,
        "ref": domRef,
        "class": classNames(tabPrefix, {
          [`${tabPrefix}-with-remove`]: removable.value,
          [`${tabPrefix}-active`]: active,
          [`${tabPrefix}-disabled`]: disabled
        }),
        "style": attrs.style,
        "onClick": onInternalClick
      }, [createVNode("div", {
        "role": "tab",
        "aria-selected": active,
        "id": id && `${id}-tab-${key}`,
        "class": `${tabPrefix}-btn`,
        "aria-controls": id && `${id}-panel-${key}`,
        "aria-disabled": disabled,
        "tabindex": disabled ? null : 0,
        "onClick": (e) => {
          e.stopPropagation();
          onInternalClick(e);
        },
        "onKeydown": (e) => {
          if ([KeyCode.SPACE, KeyCode.ENTER].includes(e.which)) {
            e.preventDefault();
            onInternalClick(e);
          }
        },
        "onFocus": onFocus
      }, [typeof tab === "function" ? tab() : tab]), removable.value && createVNode("button", {
        "type": "button",
        "aria-label": removeAriaLabel || "remove",
        "tabindex": 0,
        "class": `${tabPrefix}-remove`,
        "onClick": (e) => {
          e.stopPropagation();
          onRemoveTab(e);
        }
      }, [(closeIcon === null || closeIcon === void 0 ? void 0 : closeIcon()) || ((_a = editable.removeIcon) === null || _a === void 0 ? void 0 : _a.call(editable)) || "×"])]);
      return renderWrapper ? renderWrapper(node) : node;
    };
  }
});
const DEFAULT_SIZE$1 = {
  width: 0,
  height: 0,
  left: 0,
  top: 0
};
function useOffsets(tabs, tabSizes) {
  const offsetMap = ref(/* @__PURE__ */ new Map());
  watchEffect(() => {
    var _a, _b;
    const map = /* @__PURE__ */ new Map();
    const tabsValue = tabs.value;
    const lastOffset = tabSizes.value.get((_a = tabsValue[0]) === null || _a === void 0 ? void 0 : _a.key) || DEFAULT_SIZE$1;
    const rightOffset = lastOffset.left + lastOffset.width;
    for (let i = 0; i < tabsValue.length; i += 1) {
      const {
        key
      } = tabsValue[i];
      let data = tabSizes.value.get(key);
      if (!data) {
        data = tabSizes.value.get((_b = tabsValue[i - 1]) === null || _b === void 0 ? void 0 : _b.key) || DEFAULT_SIZE$1;
      }
      const entity = map.get(key) || _extends({}, data);
      entity.right = rightOffset - entity.left - entity.width;
      map.set(key, entity);
    }
    offsetMap.value = new Map(map);
  });
  return offsetMap;
}
const AddButton = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AddButton",
  inheritAttrs: false,
  props: {
    prefixCls: String,
    editable: {
      type: Object
    },
    locale: {
      type: Object,
      default: void 0
    }
  },
  setup(props2, _ref) {
    let {
      expose,
      attrs
    } = _ref;
    const domRef = ref();
    expose({
      domRef
    });
    return () => {
      const {
        prefixCls,
        editable,
        locale
      } = props2;
      if (!editable || editable.showAdd === false) {
        return null;
      }
      return createVNode("button", {
        "ref": domRef,
        "type": "button",
        "class": `${prefixCls}-nav-add`,
        "style": attrs.style,
        "aria-label": (locale === null || locale === void 0 ? void 0 : locale.addAriaLabel) || "Add tab",
        "onClick": (event) => {
          editable.onEdit("add", {
            event
          });
        }
      }, [editable.addIcon ? editable.addIcon() : "+"]);
    };
  }
});
const operationNodeProps = {
  prefixCls: {
    type: String
  },
  id: {
    type: String
  },
  tabs: {
    type: Object
  },
  rtl: {
    type: Boolean
  },
  tabBarGutter: {
    type: Number
  },
  activeKey: {
    type: [String, Number]
  },
  mobile: {
    type: Boolean
  },
  moreIcon: PropTypes.any,
  moreTransitionName: {
    type: String
  },
  editable: {
    type: Object
  },
  locale: {
    type: Object,
    default: void 0
  },
  removeAriaLabel: String,
  onTabClick: {
    type: Function
  },
  popupClassName: String,
  getPopupContainer: functionType()
};
const OperationNode = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "OperationNode",
  inheritAttrs: false,
  props: operationNodeProps,
  emits: ["tabClick"],
  slots: Object,
  setup(props2, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const [open2, setOpen] = useState(false);
    const [selectedKey, setSelectedKey] = useState(null);
    const selectOffset = (offset) => {
      const enabledTabs = props2.tabs.filter((tab) => !tab.disabled);
      let selectedIndex = enabledTabs.findIndex((tab) => tab.key === selectedKey.value) || 0;
      const len = enabledTabs.length;
      for (let i = 0; i < len; i += 1) {
        selectedIndex = (selectedIndex + offset + len) % len;
        const tab = enabledTabs[selectedIndex];
        if (!tab.disabled) {
          setSelectedKey(tab.key);
          return;
        }
      }
    };
    const onKeyDown = (e) => {
      const {
        which
      } = e;
      if (!open2.value) {
        if ([KeyCode.DOWN, KeyCode.SPACE, KeyCode.ENTER].includes(which)) {
          setOpen(true);
          e.preventDefault();
        }
        return;
      }
      switch (which) {
        case KeyCode.UP:
          selectOffset(-1);
          e.preventDefault();
          break;
        case KeyCode.DOWN:
          selectOffset(1);
          e.preventDefault();
          break;
        case KeyCode.ESC:
          setOpen(false);
          break;
        case KeyCode.SPACE:
        case KeyCode.ENTER:
          if (selectedKey.value !== null)
            props2.onTabClick(selectedKey.value, e);
          break;
      }
    };
    const popupId = computed(() => `${props2.id}-more-popup`);
    const selectedItemId = computed(() => selectedKey.value !== null ? `${popupId.value}-${selectedKey.value}` : null);
    const onRemoveTab = (event, key) => {
      event.preventDefault();
      event.stopPropagation();
      props2.editable.onEdit("remove", {
        key,
        event
      });
    };
    onMounted(() => {
      watch(selectedKey, () => {
        const ele = document.getElementById(selectedItemId.value);
        if (ele && ele.scrollIntoView) {
          ele.scrollIntoView(false);
        }
      }, {
        flush: "post",
        immediate: true
      });
    });
    watch(open2, () => {
      if (!open2.value) {
        setSelectedKey(null);
      }
    });
    useProvideOverride({});
    return () => {
      var _a;
      const {
        prefixCls,
        id,
        tabs,
        locale,
        mobile,
        moreIcon = ((_a = slots.moreIcon) === null || _a === void 0 ? void 0 : _a.call(slots)) || createVNode(EllipsisOutlined$1, null, null),
        moreTransitionName,
        editable,
        tabBarGutter,
        rtl,
        onTabClick,
        popupClassName
      } = props2;
      if (!tabs.length)
        return null;
      const dropdownPrefix = `${prefixCls}-dropdown`;
      const dropdownAriaLabel = locale === null || locale === void 0 ? void 0 : locale.dropdownAriaLabel;
      const moreStyle = {
        [rtl ? "marginRight" : "marginLeft"]: tabBarGutter
      };
      if (!tabs.length) {
        moreStyle.visibility = "hidden";
        moreStyle.order = 1;
      }
      const overlayClassName = classNames({
        [`${dropdownPrefix}-rtl`]: rtl,
        [`${popupClassName}`]: true
      });
      const moreNode = mobile ? null : createVNode(Dropdown, {
        "prefixCls": dropdownPrefix,
        "trigger": ["hover"],
        "visible": open2.value,
        "transitionName": moreTransitionName,
        "onVisibleChange": setOpen,
        "overlayClassName": overlayClassName,
        "mouseEnterDelay": 0.1,
        "mouseLeaveDelay": 0.1,
        "getPopupContainer": props2.getPopupContainer
      }, {
        overlay: () => createVNode(Menu, {
          "onClick": (_ref2) => {
            let {
              key,
              domEvent
            } = _ref2;
            onTabClick(key, domEvent);
            setOpen(false);
          },
          "id": popupId.value,
          "tabindex": -1,
          "role": "listbox",
          "aria-activedescendant": selectedItemId.value,
          "selectedKeys": [selectedKey.value],
          "aria-label": dropdownAriaLabel !== void 0 ? dropdownAriaLabel : "expanded dropdown"
        }, {
          default: () => [tabs.map((tab) => {
            var _a2, _b;
            const removable = editable && tab.closable !== false && !tab.disabled;
            return createVNode(MenuItem, {
              "key": tab.key,
              "id": `${popupId.value}-${tab.key}`,
              "role": "option",
              "aria-controls": id && `${id}-panel-${tab.key}`,
              "disabled": tab.disabled
            }, {
              default: () => [createVNode("span", null, [typeof tab.tab === "function" ? tab.tab() : tab.tab]), removable && createVNode("button", {
                "type": "button",
                "aria-label": props2.removeAriaLabel || "remove",
                "tabindex": 0,
                "class": `${dropdownPrefix}-menu-item-remove`,
                "onClick": (e) => {
                  e.stopPropagation();
                  onRemoveTab(e, tab.key);
                }
              }, [((_a2 = tab.closeIcon) === null || _a2 === void 0 ? void 0 : _a2.call(tab)) || ((_b = editable.removeIcon) === null || _b === void 0 ? void 0 : _b.call(editable)) || "×"])]
            });
          })]
        }),
        default: () => createVNode("button", {
          "type": "button",
          "class": `${prefixCls}-nav-more`,
          "style": moreStyle,
          "tabindex": -1,
          "aria-hidden": "true",
          "aria-haspopup": "listbox",
          "aria-controls": popupId.value,
          "id": `${id}-more`,
          "aria-expanded": open2.value,
          "onKeydown": onKeyDown
        }, [moreIcon])
      });
      return createVNode("div", {
        "class": classNames(`${prefixCls}-nav-operations`, attrs.class),
        "style": attrs.style
      }, [moreNode, createVNode(AddButton, {
        "prefixCls": prefixCls,
        "locale": locale,
        "editable": editable
      }, null)]);
    };
  }
});
const TabsContextKey = Symbol("tabsContextKey");
const useProvideTabs = (props2) => {
  provide(TabsContextKey, props2);
};
const useInjectTabs = () => {
  return inject(TabsContextKey, {
    tabs: ref([]),
    prefixCls: ref()
  });
};
const MIN_SWIPE_DISTANCE = 0.1;
const STOP_SWIPE_DISTANCE = 0.01;
const REFRESH_INTERVAL = 20;
const SPEED_OFF_MULTIPLE = Math.pow(0.995, REFRESH_INTERVAL);
function useTouchMove(domRef, onOffset) {
  const [touchPosition, setTouchPosition] = useState();
  const [lastTimestamp, setLastTimestamp] = useState(0);
  const [lastTimeDiff, setLastTimeDiff] = useState(0);
  const [lastOffset, setLastOffset] = useState();
  const motionInterval = ref();
  function onTouchStart(e) {
    const {
      screenX,
      screenY
    } = e.touches[0];
    setTouchPosition({
      x: screenX,
      y: screenY
    });
    clearInterval(motionInterval.value);
  }
  function onTouchMove(e) {
    if (!touchPosition.value)
      return;
    e.preventDefault();
    const {
      screenX,
      screenY
    } = e.touches[0];
    const offsetX = screenX - touchPosition.value.x;
    const offsetY = screenY - touchPosition.value.y;
    onOffset(offsetX, offsetY);
    setTouchPosition({
      x: screenX,
      y: screenY
    });
    const now = Date.now();
    setLastTimeDiff(now - lastTimestamp.value);
    setLastTimestamp(now);
    setLastOffset({
      x: offsetX,
      y: offsetY
    });
  }
  function onTouchEnd() {
    if (!touchPosition.value)
      return;
    const lastOffsetValue = lastOffset.value;
    setTouchPosition(null);
    setLastOffset(null);
    if (lastOffsetValue) {
      const distanceX = lastOffsetValue.x / lastTimeDiff.value;
      const distanceY = lastOffsetValue.y / lastTimeDiff.value;
      const absX = Math.abs(distanceX);
      const absY = Math.abs(distanceY);
      if (Math.max(absX, absY) < MIN_SWIPE_DISTANCE)
        return;
      let currentX = distanceX;
      let currentY = distanceY;
      motionInterval.value = setInterval(() => {
        if (Math.abs(currentX) < STOP_SWIPE_DISTANCE && Math.abs(currentY) < STOP_SWIPE_DISTANCE) {
          clearInterval(motionInterval.value);
          return;
        }
        currentX *= SPEED_OFF_MULTIPLE;
        currentY *= SPEED_OFF_MULTIPLE;
        onOffset(currentX * REFRESH_INTERVAL, currentY * REFRESH_INTERVAL);
      }, REFRESH_INTERVAL);
    }
  }
  const lastWheelDirectionRef = ref();
  function onWheel(e) {
    const {
      deltaX,
      deltaY
    } = e;
    let mixed = 0;
    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);
    if (absX === absY) {
      mixed = lastWheelDirectionRef.value === "x" ? deltaX : deltaY;
    } else if (absX > absY) {
      mixed = deltaX;
      lastWheelDirectionRef.value = "x";
    } else {
      mixed = deltaY;
      lastWheelDirectionRef.value = "y";
    }
    if (onOffset(-mixed, -mixed)) {
      e.preventDefault();
    }
  }
  const touchEventsRef = ref({
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onWheel
  });
  function onProxyTouchStart(e) {
    touchEventsRef.value.onTouchStart(e);
  }
  function onProxyTouchMove(e) {
    touchEventsRef.value.onTouchMove(e);
  }
  function onProxyTouchEnd(e) {
    touchEventsRef.value.onTouchEnd(e);
  }
  function onProxyWheel(e) {
    touchEventsRef.value.onWheel(e);
  }
  onMounted(() => {
    var _a, _b;
    document.addEventListener("touchmove", onProxyTouchMove, {
      passive: false
    });
    document.addEventListener("touchend", onProxyTouchEnd, {
      passive: false
    });
    (_a = domRef.value) === null || _a === void 0 ? void 0 : _a.addEventListener("touchstart", onProxyTouchStart, {
      passive: false
    });
    (_b = domRef.value) === null || _b === void 0 ? void 0 : _b.addEventListener("wheel", onProxyWheel, {
      passive: false
    });
  });
  onBeforeUnmount(() => {
    document.removeEventListener("touchmove", onProxyTouchMove);
    document.removeEventListener("touchend", onProxyTouchEnd);
  });
}
function useSyncState(defaultState, onChange) {
  const stateRef = ref(defaultState);
  function setState(updater) {
    const newValue = typeof updater === "function" ? updater(stateRef.value) : updater;
    if (newValue !== stateRef.value) {
      onChange(newValue, stateRef.value);
    }
    stateRef.value = newValue;
  }
  return [stateRef, setState];
}
const useRefs = () => {
  const refs = ref(/* @__PURE__ */ new Map());
  const setRef = (key) => (el) => {
    refs.value.set(key, el);
  };
  onBeforeUpdate(() => {
    refs.value = /* @__PURE__ */ new Map();
  });
  return [setRef, refs];
};
const useRefs$1 = useRefs;
const DEFAULT_SIZE = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
  right: 0
};
const tabNavListProps = () => {
  return {
    id: {
      type: String
    },
    tabPosition: {
      type: String
    },
    activeKey: {
      type: [String, Number]
    },
    rtl: {
      type: Boolean
    },
    animated: objectType(),
    editable: objectType(),
    moreIcon: PropTypes.any,
    moreTransitionName: {
      type: String
    },
    mobile: {
      type: Boolean
    },
    tabBarGutter: {
      type: Number
    },
    renderTabBar: {
      type: Function
    },
    locale: objectType(),
    popupClassName: String,
    getPopupContainer: functionType(),
    onTabClick: {
      type: Function
    },
    onTabScroll: {
      type: Function
    }
  };
};
const getTabSize = (tab, containerRect) => {
  const {
    offsetWidth,
    offsetHeight,
    offsetTop,
    offsetLeft
  } = tab;
  const {
    width,
    height,
    x,
    y
  } = tab.getBoundingClientRect();
  if (Math.abs(width - offsetWidth) < 1) {
    return [width, height, x - containerRect.x, y - containerRect.y];
  }
  return [offsetWidth, offsetHeight, offsetLeft, offsetTop];
};
const TabNavList = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "TabNavList",
  inheritAttrs: false,
  props: tabNavListProps(),
  slots: Object,
  emits: ["tabClick", "tabScroll"],
  setup(props2, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      tabs,
      prefixCls
    } = useInjectTabs();
    const tabsWrapperRef = shallowRef();
    const tabListRef = shallowRef();
    const operationsRef = shallowRef();
    const innerAddButtonRef = shallowRef();
    const [setRef, btnRefs] = useRefs$1();
    const tabPositionTopOrBottom = computed(() => props2.tabPosition === "top" || props2.tabPosition === "bottom");
    const [transformLeft, setTransformLeft] = useSyncState(0, (next, prev) => {
      if (tabPositionTopOrBottom.value && props2.onTabScroll) {
        props2.onTabScroll({
          direction: next > prev ? "left" : "right"
        });
      }
    });
    const [transformTop, setTransformTop] = useSyncState(0, (next, prev) => {
      if (!tabPositionTopOrBottom.value && props2.onTabScroll) {
        props2.onTabScroll({
          direction: next > prev ? "top" : "bottom"
        });
      }
    });
    const [wrapperScrollWidth, setWrapperScrollWidth] = useState(0);
    const [wrapperScrollHeight, setWrapperScrollHeight] = useState(0);
    const [wrapperWidth, setWrapperWidth] = useState(null);
    const [wrapperHeight, setWrapperHeight] = useState(null);
    const [addWidth, setAddWidth] = useState(0);
    const [addHeight, setAddHeight] = useState(0);
    const [tabSizes, setTabSizes] = useRafState(/* @__PURE__ */ new Map());
    const tabOffsets = useOffsets(tabs, tabSizes);
    const operationsHiddenClassName = computed(() => `${prefixCls.value}-nav-operations-hidden`);
    const transformMin = shallowRef(0);
    const transformMax = shallowRef(0);
    watchEffect(() => {
      if (!tabPositionTopOrBottom.value) {
        transformMin.value = Math.min(0, wrapperHeight.value - wrapperScrollHeight.value);
        transformMax.value = 0;
      } else if (props2.rtl) {
        transformMin.value = 0;
        transformMax.value = Math.max(0, wrapperScrollWidth.value - wrapperWidth.value);
      } else {
        transformMin.value = Math.min(0, wrapperWidth.value - wrapperScrollWidth.value);
        transformMax.value = 0;
      }
    });
    const alignInRange = (value) => {
      if (value < transformMin.value) {
        return transformMin.value;
      }
      if (value > transformMax.value) {
        return transformMax.value;
      }
      return value;
    };
    const touchMovingRef = shallowRef();
    const [lockAnimation, setLockAnimation] = useState();
    const doLockAnimation = () => {
      setLockAnimation(Date.now());
    };
    const clearTouchMoving = () => {
      clearTimeout(touchMovingRef.value);
    };
    const doMove = (setState, offset) => {
      setState((value) => {
        const newValue = alignInRange(value + offset);
        return newValue;
      });
    };
    useTouchMove(tabsWrapperRef, (offsetX, offsetY) => {
      if (tabPositionTopOrBottom.value) {
        if (wrapperWidth.value >= wrapperScrollWidth.value) {
          return false;
        }
        doMove(setTransformLeft, offsetX);
      } else {
        if (wrapperHeight.value >= wrapperScrollHeight.value) {
          return false;
        }
        doMove(setTransformTop, offsetY);
      }
      clearTouchMoving();
      doLockAnimation();
      return true;
    });
    watch(lockAnimation, () => {
      clearTouchMoving();
      if (lockAnimation.value) {
        touchMovingRef.value = setTimeout(() => {
          setLockAnimation(0);
        }, 100);
      }
    });
    const scrollToTab = function() {
      let key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : props2.activeKey;
      const tabOffset = tabOffsets.value.get(key) || {
        width: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0
      };
      if (tabPositionTopOrBottom.value) {
        let newTransform = transformLeft.value;
        if (props2.rtl) {
          if (tabOffset.right < transformLeft.value) {
            newTransform = tabOffset.right;
          } else if (tabOffset.right + tabOffset.width > transformLeft.value + wrapperWidth.value) {
            newTransform = tabOffset.right + tabOffset.width - wrapperWidth.value;
          }
        } else if (tabOffset.left < -transformLeft.value) {
          newTransform = -tabOffset.left;
        } else if (tabOffset.left + tabOffset.width > -transformLeft.value + wrapperWidth.value) {
          newTransform = -(tabOffset.left + tabOffset.width - wrapperWidth.value);
        }
        setTransformTop(0);
        setTransformLeft(alignInRange(newTransform));
      } else {
        let newTransform = transformTop.value;
        if (tabOffset.top < -transformTop.value) {
          newTransform = -tabOffset.top;
        } else if (tabOffset.top + tabOffset.height > -transformTop.value + wrapperHeight.value) {
          newTransform = -(tabOffset.top + tabOffset.height - wrapperHeight.value);
        }
        setTransformLeft(0);
        setTransformTop(alignInRange(newTransform));
      }
    };
    const visibleStart = shallowRef(0);
    const visibleEnd = shallowRef(0);
    watchEffect(() => {
      let unit;
      let position;
      let transformSize;
      let basicSize;
      let tabContentSize;
      let addSize;
      const tabOffsetsValue = tabOffsets.value;
      if (["top", "bottom"].includes(props2.tabPosition)) {
        unit = "width";
        basicSize = wrapperWidth.value;
        tabContentSize = wrapperScrollWidth.value;
        addSize = addWidth.value;
        position = props2.rtl ? "right" : "left";
        transformSize = Math.abs(transformLeft.value);
      } else {
        unit = "height";
        basicSize = wrapperHeight.value;
        tabContentSize = wrapperScrollWidth.value;
        addSize = addHeight.value;
        position = "top";
        transformSize = -transformTop.value;
      }
      let mergedBasicSize = basicSize;
      if (tabContentSize + addSize > basicSize && tabContentSize < basicSize) {
        mergedBasicSize = basicSize - addSize;
      }
      const tabsVal = tabs.value;
      if (!tabsVal.length) {
        return [visibleStart.value, visibleEnd.value] = [0, 0];
      }
      const len = tabsVal.length;
      let endIndex = len;
      for (let i = 0; i < len; i += 1) {
        const offset = tabOffsetsValue.get(tabsVal[i].key) || DEFAULT_SIZE;
        if (offset[position] + offset[unit] > transformSize + mergedBasicSize) {
          endIndex = i - 1;
          break;
        }
      }
      let startIndex = 0;
      for (let i = len - 1; i >= 0; i -= 1) {
        const offset = tabOffsetsValue.get(tabsVal[i].key) || DEFAULT_SIZE;
        if (offset[position] < transformSize) {
          startIndex = i + 1;
          break;
        }
      }
      return [visibleStart.value, visibleEnd.value] = [startIndex, endIndex];
    });
    const updateTabSizes = () => {
      setTabSizes(() => {
        var _a;
        const newSizes = /* @__PURE__ */ new Map();
        const listRect = (_a = tabListRef.value) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        tabs.value.forEach((_ref2) => {
          let {
            key
          } = _ref2;
          const btnRef = btnRefs.value.get(key);
          const btnNode = (btnRef === null || btnRef === void 0 ? void 0 : btnRef.$el) || btnRef;
          if (btnNode) {
            const [width, height, left, top] = getTabSize(btnNode, listRect);
            newSizes.set(key, {
              width,
              height,
              left,
              top
            });
          }
        });
        return newSizes;
      });
    };
    watch(() => tabs.value.map((tab) => tab.key).join("%%"), () => {
      updateTabSizes();
    }, {
      flush: "post"
    });
    const onListHolderResize = () => {
      var _a, _b, _c, _d, _e;
      const offsetWidth = ((_a = tabsWrapperRef.value) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 0;
      const offsetHeight = ((_b = tabsWrapperRef.value) === null || _b === void 0 ? void 0 : _b.offsetHeight) || 0;
      const addDom = ((_c = innerAddButtonRef.value) === null || _c === void 0 ? void 0 : _c.$el) || {};
      const newAddWidth = addDom.offsetWidth || 0;
      const newAddHeight = addDom.offsetHeight || 0;
      setWrapperWidth(offsetWidth);
      setWrapperHeight(offsetHeight);
      setAddWidth(newAddWidth);
      setAddHeight(newAddHeight);
      const newWrapperScrollWidth = (((_d = tabListRef.value) === null || _d === void 0 ? void 0 : _d.offsetWidth) || 0) - newAddWidth;
      const newWrapperScrollHeight = (((_e = tabListRef.value) === null || _e === void 0 ? void 0 : _e.offsetHeight) || 0) - newAddHeight;
      setWrapperScrollWidth(newWrapperScrollWidth);
      setWrapperScrollHeight(newWrapperScrollHeight);
      updateTabSizes();
    };
    const hiddenTabs = computed(() => [...tabs.value.slice(0, visibleStart.value), ...tabs.value.slice(visibleEnd.value + 1)]);
    const [inkStyle, setInkStyle] = useState();
    const activeTabOffset = computed(() => tabOffsets.value.get(props2.activeKey));
    const inkBarRafRef = shallowRef();
    const cleanInkBarRaf = () => {
      wrapperRaf.cancel(inkBarRafRef.value);
    };
    watch([activeTabOffset, tabPositionTopOrBottom, () => props2.rtl], () => {
      const newInkStyle = {};
      if (activeTabOffset.value) {
        if (tabPositionTopOrBottom.value) {
          if (props2.rtl) {
            newInkStyle.right = toPx(activeTabOffset.value.right);
          } else {
            newInkStyle.left = toPx(activeTabOffset.value.left);
          }
          newInkStyle.width = toPx(activeTabOffset.value.width);
        } else {
          newInkStyle.top = toPx(activeTabOffset.value.top);
          newInkStyle.height = toPx(activeTabOffset.value.height);
        }
      }
      cleanInkBarRaf();
      inkBarRafRef.value = wrapperRaf(() => {
        setInkStyle(newInkStyle);
      });
    });
    watch([() => props2.activeKey, activeTabOffset, tabOffsets, tabPositionTopOrBottom], () => {
      scrollToTab();
    }, {
      flush: "post"
    });
    watch([() => props2.rtl, () => props2.tabBarGutter, () => props2.activeKey, () => tabs.value], () => {
      onListHolderResize();
    }, {
      flush: "post"
    });
    const ExtraContent = (_ref3) => {
      let {
        position,
        prefixCls: prefixCls2,
        extra
      } = _ref3;
      if (!extra)
        return null;
      const content = extra === null || extra === void 0 ? void 0 : extra({
        position
      });
      return content ? createVNode("div", {
        "class": `${prefixCls2}-extra-content`
      }, [content]) : null;
    };
    onBeforeUnmount(() => {
      clearTouchMoving();
      cleanInkBarRaf();
    });
    return () => {
      const {
        id,
        animated,
        activeKey,
        rtl,
        editable,
        locale,
        tabPosition,
        tabBarGutter,
        onTabClick
      } = props2;
      const {
        class: className,
        style
      } = attrs;
      const pre = prefixCls.value;
      const hasDropdown = !!hiddenTabs.value.length;
      const wrapPrefix = `${pre}-nav-wrap`;
      let pingLeft;
      let pingRight;
      let pingTop;
      let pingBottom;
      if (tabPositionTopOrBottom.value) {
        if (rtl) {
          pingRight = transformLeft.value > 0;
          pingLeft = transformLeft.value + wrapperWidth.value < wrapperScrollWidth.value;
        } else {
          pingLeft = transformLeft.value < 0;
          pingRight = -transformLeft.value + wrapperWidth.value < wrapperScrollWidth.value;
        }
      } else {
        pingTop = transformTop.value < 0;
        pingBottom = -transformTop.value + wrapperHeight.value < wrapperScrollHeight.value;
      }
      const tabNodeStyle = {};
      if (tabPosition === "top" || tabPosition === "bottom") {
        tabNodeStyle[rtl ? "marginRight" : "marginLeft"] = typeof tabBarGutter === "number" ? `${tabBarGutter}px` : tabBarGutter;
      } else {
        tabNodeStyle.marginTop = typeof tabBarGutter === "number" ? `${tabBarGutter}px` : tabBarGutter;
      }
      const tabNodes = tabs.value.map((tab, i) => {
        const {
          key
        } = tab;
        return createVNode(TabNode, {
          "id": id,
          "prefixCls": pre,
          "key": key,
          "tab": tab,
          "style": i === 0 ? void 0 : tabNodeStyle,
          "closable": tab.closable,
          "editable": editable,
          "active": key === activeKey,
          "removeAriaLabel": locale === null || locale === void 0 ? void 0 : locale.removeAriaLabel,
          "ref": setRef(key),
          "onClick": (e) => {
            onTabClick(key, e);
          },
          "onFocus": () => {
            scrollToTab(key);
            doLockAnimation();
            if (!tabsWrapperRef.value) {
              return;
            }
            if (!rtl) {
              tabsWrapperRef.value.scrollLeft = 0;
            }
            tabsWrapperRef.value.scrollTop = 0;
          }
        }, slots);
      });
      return createVNode("div", {
        "role": "tablist",
        "class": classNames(`${pre}-nav`, className),
        "style": style,
        "onKeydown": () => {
          doLockAnimation();
        }
      }, [createVNode(ExtraContent, {
        "position": "left",
        "prefixCls": pre,
        "extra": slots.leftExtra
      }, null), createVNode(ResizeObserver, {
        "onResize": onListHolderResize
      }, {
        default: () => [createVNode("div", {
          "class": classNames(wrapPrefix, {
            [`${wrapPrefix}-ping-left`]: pingLeft,
            [`${wrapPrefix}-ping-right`]: pingRight,
            [`${wrapPrefix}-ping-top`]: pingTop,
            [`${wrapPrefix}-ping-bottom`]: pingBottom
          }),
          "ref": tabsWrapperRef
        }, [createVNode(ResizeObserver, {
          "onResize": onListHolderResize
        }, {
          default: () => [createVNode("div", {
            "ref": tabListRef,
            "class": `${pre}-nav-list`,
            "style": {
              transform: `translate(${transformLeft.value}px, ${transformTop.value}px)`,
              transition: lockAnimation.value ? "none" : void 0
            }
          }, [tabNodes, createVNode(AddButton, {
            "ref": innerAddButtonRef,
            "prefixCls": pre,
            "locale": locale,
            "editable": editable,
            "style": _extends(_extends({}, tabNodes.length === 0 ? void 0 : tabNodeStyle), {
              visibility: hasDropdown ? "hidden" : null
            })
          }, null), createVNode("div", {
            "class": classNames(`${pre}-ink-bar`, {
              [`${pre}-ink-bar-animated`]: animated.inkBar
            }),
            "style": inkStyle.value
          }, null)])]
        })])]
      }), createVNode(OperationNode, _objectSpread2(_objectSpread2({}, props2), {}, {
        "removeAriaLabel": locale === null || locale === void 0 ? void 0 : locale.removeAriaLabel,
        "ref": operationsRef,
        "prefixCls": pre,
        "tabs": hiddenTabs.value,
        "class": !hasDropdown && operationsHiddenClassName.value
      }), pick$1(slots, ["moreIcon"])), createVNode(ExtraContent, {
        "position": "right",
        "prefixCls": pre,
        "extra": slots.rightExtra
      }, null), createVNode(ExtraContent, {
        "position": "right",
        "prefixCls": pre,
        "extra": slots.tabBarExtraContent
      }, null)]);
    };
  }
});
const TabPanelList = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "TabPanelList",
  inheritAttrs: false,
  props: {
    activeKey: {
      type: [String, Number]
    },
    id: {
      type: String
    },
    rtl: {
      type: Boolean
    },
    animated: {
      type: Object,
      default: void 0
    },
    tabPosition: {
      type: String
    },
    destroyInactiveTabPane: {
      type: Boolean
    }
  },
  setup(props2) {
    const {
      tabs,
      prefixCls
    } = useInjectTabs();
    return () => {
      const {
        id,
        activeKey,
        animated,
        tabPosition,
        rtl,
        destroyInactiveTabPane
      } = props2;
      const tabPaneAnimated = animated.tabPane;
      const pre = prefixCls.value;
      const activeIndex = tabs.value.findIndex((tab) => tab.key === activeKey);
      return createVNode("div", {
        "class": `${pre}-content-holder`
      }, [createVNode("div", {
        "class": [`${pre}-content`, `${pre}-content-${tabPosition}`, {
          [`${pre}-content-animated`]: tabPaneAnimated
        }],
        "style": activeIndex && tabPaneAnimated ? {
          [rtl ? "marginRight" : "marginLeft"]: `-${activeIndex}00%`
        } : null
      }, [tabs.value.map((tab) => {
        return cloneElement(tab.node, {
          key: tab.key,
          prefixCls: pre,
          tabKey: tab.key,
          id,
          animated: tabPaneAnimated,
          active: tab.key === activeKey,
          destroyInactiveTabPane
        });
      })])]);
    };
  }
});
var PlusOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" } }, { "tag": "path", "attrs": { "d": "M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z" } }] }, "name": "plus", "theme": "outlined" };
const PlusOutlinedSvg = PlusOutlined$2;
function _objectSpread$7(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$7(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$7(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var PlusOutlined = function PlusOutlined2(props2, context) {
  var p = _objectSpread$7({}, props2, context.attrs);
  return createVNode(AntdIcon, _objectSpread$7({}, p, {
    "icon": PlusOutlinedSvg
  }), null);
};
PlusOutlined.displayName = "PlusOutlined";
PlusOutlined.inheritAttrs = false;
const PlusOutlined$1 = PlusOutlined;
const genMotionStyle = (token) => {
  const {
    componentCls,
    motionDurationSlow
  } = token;
  return [
    {
      [componentCls]: {
        [`${componentCls}-switch`]: {
          "&-appear, &-enter": {
            transition: "none",
            "&-start": {
              opacity: 0
            },
            "&-active": {
              opacity: 1,
              transition: `opacity ${motionDurationSlow}`
            }
          },
          "&-leave": {
            position: "absolute",
            transition: "none",
            inset: 0,
            "&-start": {
              opacity: 1
            },
            "&-active": {
              opacity: 0,
              transition: `opacity ${motionDurationSlow}`
            }
          }
        }
      }
    },
    // Follow code may reuse in other components
    [initSlideMotion(token, "slide-up"), initSlideMotion(token, "slide-down")]
  ];
};
const genMotionStyle$1 = genMotionStyle;
const genCardStyle = (token) => {
  const {
    componentCls,
    tabsCardHorizontalPadding,
    tabsCardHeadBackground,
    tabsCardGutter,
    colorSplit
  } = token;
  return {
    [`${componentCls}-card`]: {
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        [`${componentCls}-tab`]: {
          margin: 0,
          padding: tabsCardHorizontalPadding,
          background: tabsCardHeadBackground,
          border: `${token.lineWidth}px ${token.lineType} ${colorSplit}`,
          transition: `all ${token.motionDurationSlow} ${token.motionEaseInOut}`
        },
        [`${componentCls}-tab-active`]: {
          color: token.colorPrimary,
          background: token.colorBgContainer
        },
        [`${componentCls}-ink-bar`]: {
          visibility: "hidden"
        }
      },
      // ========================== Top & Bottom ==========================
      [`&${componentCls}-top, &${componentCls}-bottom`]: {
        [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
          [`${componentCls}-tab + ${componentCls}-tab`]: {
            marginLeft: {
              _skip_check_: true,
              value: `${tabsCardGutter}px`
            }
          }
        }
      },
      [`&${componentCls}-top`]: {
        [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            borderRadius: `${token.borderRadiusLG}px ${token.borderRadiusLG}px 0 0`
          },
          [`${componentCls}-tab-active`]: {
            borderBottomColor: token.colorBgContainer
          }
        }
      },
      [`&${componentCls}-bottom`]: {
        [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            borderRadius: `0 0 ${token.borderRadiusLG}px ${token.borderRadiusLG}px`
          },
          [`${componentCls}-tab-active`]: {
            borderTopColor: token.colorBgContainer
          }
        }
      },
      // ========================== Left & Right ==========================
      [`&${componentCls}-left, &${componentCls}-right`]: {
        [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
          [`${componentCls}-tab + ${componentCls}-tab`]: {
            marginTop: `${tabsCardGutter}px`
          }
        }
      },
      [`&${componentCls}-left`]: {
        [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            borderRadius: {
              _skip_check_: true,
              value: `${token.borderRadiusLG}px 0 0 ${token.borderRadiusLG}px`
            }
          },
          [`${componentCls}-tab-active`]: {
            borderRightColor: {
              _skip_check_: true,
              value: token.colorBgContainer
            }
          }
        }
      },
      [`&${componentCls}-right`]: {
        [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            borderRadius: {
              _skip_check_: true,
              value: `0 ${token.borderRadiusLG}px ${token.borderRadiusLG}px 0`
            }
          },
          [`${componentCls}-tab-active`]: {
            borderLeftColor: {
              _skip_check_: true,
              value: token.colorBgContainer
            }
          }
        }
      }
    }
  };
};
const genDropdownStyle = (token) => {
  const {
    componentCls,
    tabsHoverColor,
    dropdownEdgeChildVerticalPadding
  } = token;
  return {
    [`${componentCls}-dropdown`]: _extends(_extends({}, resetComponent(token)), {
      position: "absolute",
      top: -9999,
      left: {
        _skip_check_: true,
        value: -9999
      },
      zIndex: token.zIndexPopup,
      display: "block",
      "&-hidden": {
        display: "none"
      },
      [`${componentCls}-dropdown-menu`]: {
        maxHeight: token.tabsDropdownHeight,
        margin: 0,
        padding: `${dropdownEdgeChildVerticalPadding}px 0`,
        overflowX: "hidden",
        overflowY: "auto",
        textAlign: {
          _skip_check_: true,
          value: "left"
        },
        listStyleType: "none",
        backgroundColor: token.colorBgContainer,
        backgroundClip: "padding-box",
        borderRadius: token.borderRadiusLG,
        outline: "none",
        boxShadow: token.boxShadowSecondary,
        "&-item": _extends(_extends({}, textEllipsis), {
          display: "flex",
          alignItems: "center",
          minWidth: token.tabsDropdownWidth,
          margin: 0,
          padding: `${token.paddingXXS}px ${token.paddingSM}px`,
          color: token.colorText,
          fontWeight: "normal",
          fontSize: token.fontSize,
          lineHeight: token.lineHeight,
          cursor: "pointer",
          transition: `all ${token.motionDurationSlow}`,
          "> span": {
            flex: 1,
            whiteSpace: "nowrap"
          },
          "&-remove": {
            flex: "none",
            marginLeft: {
              _skip_check_: true,
              value: token.marginSM
            },
            color: token.colorTextDescription,
            fontSize: token.fontSizeSM,
            background: "transparent",
            border: 0,
            cursor: "pointer",
            "&:hover": {
              color: tabsHoverColor
            }
          },
          "&:hover": {
            background: token.controlItemBgHover
          },
          "&-disabled": {
            "&, &:hover": {
              color: token.colorTextDisabled,
              background: "transparent",
              cursor: "not-allowed"
            }
          }
        })
      }
    })
  };
};
const genPositionStyle = (token) => {
  const {
    componentCls,
    margin,
    colorSplit
  } = token;
  return {
    // ========================== Top & Bottom ==========================
    [`${componentCls}-top, ${componentCls}-bottom`]: {
      flexDirection: "column",
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        margin: `0 0 ${margin}px 0`,
        "&::before": {
          position: "absolute",
          right: {
            _skip_check_: true,
            value: 0
          },
          left: {
            _skip_check_: true,
            value: 0
          },
          borderBottom: `${token.lineWidth}px ${token.lineType} ${colorSplit}`,
          content: "''"
        },
        [`${componentCls}-ink-bar`]: {
          height: token.lineWidthBold,
          "&-animated": {
            transition: `width ${token.motionDurationSlow}, left ${token.motionDurationSlow},
            right ${token.motionDurationSlow}`
          }
        },
        [`${componentCls}-nav-wrap`]: {
          "&::before, &::after": {
            top: 0,
            bottom: 0,
            width: token.controlHeight
          },
          "&::before": {
            left: {
              _skip_check_: true,
              value: 0
            },
            boxShadow: token.boxShadowTabsOverflowLeft
          },
          "&::after": {
            right: {
              _skip_check_: true,
              value: 0
            },
            boxShadow: token.boxShadowTabsOverflowRight
          },
          [`&${componentCls}-nav-wrap-ping-left::before`]: {
            opacity: 1
          },
          [`&${componentCls}-nav-wrap-ping-right::after`]: {
            opacity: 1
          }
        }
      }
    },
    [`${componentCls}-top`]: {
      [`> ${componentCls}-nav,
        > div > ${componentCls}-nav`]: {
        "&::before": {
          bottom: 0
        },
        [`${componentCls}-ink-bar`]: {
          bottom: 0
        }
      }
    },
    [`${componentCls}-bottom`]: {
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        order: 1,
        marginTop: `${margin}px`,
        marginBottom: 0,
        "&::before": {
          top: 0
        },
        [`${componentCls}-ink-bar`]: {
          top: 0
        }
      },
      [`> ${componentCls}-content-holder, > div > ${componentCls}-content-holder`]: {
        order: 0
      }
    },
    // ========================== Left & Right ==========================
    [`${componentCls}-left, ${componentCls}-right`]: {
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        flexDirection: "column",
        minWidth: token.controlHeight * 1.25,
        // >>>>>>>>>>> Tab
        [`${componentCls}-tab`]: {
          padding: `${token.paddingXS}px ${token.paddingLG}px`,
          textAlign: "center"
        },
        [`${componentCls}-tab + ${componentCls}-tab`]: {
          margin: `${token.margin}px 0 0 0`
        },
        // >>>>>>>>>>> Nav
        [`${componentCls}-nav-wrap`]: {
          flexDirection: "column",
          "&::before, &::after": {
            right: {
              _skip_check_: true,
              value: 0
            },
            left: {
              _skip_check_: true,
              value: 0
            },
            height: token.controlHeight
          },
          "&::before": {
            top: 0,
            boxShadow: token.boxShadowTabsOverflowTop
          },
          "&::after": {
            bottom: 0,
            boxShadow: token.boxShadowTabsOverflowBottom
          },
          [`&${componentCls}-nav-wrap-ping-top::before`]: {
            opacity: 1
          },
          [`&${componentCls}-nav-wrap-ping-bottom::after`]: {
            opacity: 1
          }
        },
        // >>>>>>>>>>> Ink Bar
        [`${componentCls}-ink-bar`]: {
          width: token.lineWidthBold,
          "&-animated": {
            transition: `height ${token.motionDurationSlow}, top ${token.motionDurationSlow}`
          }
        },
        [`${componentCls}-nav-list, ${componentCls}-nav-operations`]: {
          flex: "1 0 auto",
          flexDirection: "column"
        }
      }
    },
    [`${componentCls}-left`]: {
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        [`${componentCls}-ink-bar`]: {
          right: {
            _skip_check_: true,
            value: 0
          }
        }
      },
      [`> ${componentCls}-content-holder, > div > ${componentCls}-content-holder`]: {
        marginLeft: {
          _skip_check_: true,
          value: `-${token.lineWidth}px`
        },
        borderLeft: {
          _skip_check_: true,
          value: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`
        },
        [`> ${componentCls}-content > ${componentCls}-tabpane`]: {
          paddingLeft: {
            _skip_check_: true,
            value: token.paddingLG
          }
        }
      }
    },
    [`${componentCls}-right`]: {
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        order: 1,
        [`${componentCls}-ink-bar`]: {
          left: {
            _skip_check_: true,
            value: 0
          }
        }
      },
      [`> ${componentCls}-content-holder, > div > ${componentCls}-content-holder`]: {
        order: 0,
        marginRight: {
          _skip_check_: true,
          value: -token.lineWidth
        },
        borderRight: {
          _skip_check_: true,
          value: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`
        },
        [`> ${componentCls}-content > ${componentCls}-tabpane`]: {
          paddingRight: {
            _skip_check_: true,
            value: token.paddingLG
          }
        }
      }
    }
  };
};
const genSizeStyle = (token) => {
  const {
    componentCls,
    padding
  } = token;
  return {
    [componentCls]: {
      "&-small": {
        [`> ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            padding: `${token.paddingXS}px 0`,
            fontSize: token.fontSize
          }
        }
      },
      "&-large": {
        [`> ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            padding: `${padding}px 0`,
            fontSize: token.fontSizeLG
          }
        }
      }
    },
    [`${componentCls}-card`]: {
      [`&${componentCls}-small`]: {
        [`> ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            padding: `${token.paddingXXS * 1.5}px ${padding}px`
          }
        },
        [`&${componentCls}-bottom`]: {
          [`> ${componentCls}-nav ${componentCls}-tab`]: {
            borderRadius: `0 0 ${token.borderRadius}px ${token.borderRadius}px`
          }
        },
        [`&${componentCls}-top`]: {
          [`> ${componentCls}-nav ${componentCls}-tab`]: {
            borderRadius: `${token.borderRadius}px ${token.borderRadius}px 0 0`
          }
        },
        [`&${componentCls}-right`]: {
          [`> ${componentCls}-nav ${componentCls}-tab`]: {
            borderRadius: {
              _skip_check_: true,
              value: `0 ${token.borderRadius}px ${token.borderRadius}px 0`
            }
          }
        },
        [`&${componentCls}-left`]: {
          [`> ${componentCls}-nav ${componentCls}-tab`]: {
            borderRadius: {
              _skip_check_: true,
              value: `${token.borderRadius}px 0 0 ${token.borderRadius}px`
            }
          }
        }
      },
      [`&${componentCls}-large`]: {
        [`> ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            padding: `${token.paddingXS}px ${padding}px ${token.paddingXXS * 1.5}px`
          }
        }
      }
    }
  };
};
const genTabStyle = (token) => {
  const {
    componentCls,
    tabsActiveColor,
    tabsHoverColor,
    iconCls,
    tabsHorizontalGutter
  } = token;
  const tabCls = `${componentCls}-tab`;
  return {
    [tabCls]: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      padding: `${token.paddingSM}px 0`,
      fontSize: `${token.fontSize}px`,
      background: "transparent",
      border: 0,
      outline: "none",
      cursor: "pointer",
      "&-btn, &-remove": _extends({
        "&:focus:not(:focus-visible), &:active": {
          color: tabsActiveColor
        }
      }, genFocusStyle(token)),
      "&-btn": {
        outline: "none",
        transition: "all 0.3s"
      },
      "&-remove": {
        flex: "none",
        marginRight: {
          _skip_check_: true,
          value: -token.marginXXS
        },
        marginLeft: {
          _skip_check_: true,
          value: token.marginXS
        },
        color: token.colorTextDescription,
        fontSize: token.fontSizeSM,
        background: "transparent",
        border: "none",
        outline: "none",
        cursor: "pointer",
        transition: `all ${token.motionDurationSlow}`,
        "&:hover": {
          color: token.colorTextHeading
        }
      },
      "&:hover": {
        color: tabsHoverColor
      },
      [`&${tabCls}-active ${tabCls}-btn`]: {
        color: token.colorPrimary,
        textShadow: token.tabsActiveTextShadow
      },
      [`&${tabCls}-disabled`]: {
        color: token.colorTextDisabled,
        cursor: "not-allowed"
      },
      [`&${tabCls}-disabled ${tabCls}-btn, &${tabCls}-disabled ${componentCls}-remove`]: {
        "&:focus, &:active": {
          color: token.colorTextDisabled
        }
      },
      [`& ${tabCls}-remove ${iconCls}`]: {
        margin: 0
      },
      [iconCls]: {
        marginRight: {
          _skip_check_: true,
          value: token.marginSM
        }
      }
    },
    [`${tabCls} + ${tabCls}`]: {
      margin: {
        _skip_check_: true,
        value: `0 0 0 ${tabsHorizontalGutter}px`
      }
    }
  };
};
const genRtlStyle = (token) => {
  const {
    componentCls,
    tabsHorizontalGutter,
    iconCls,
    tabsCardGutter
  } = token;
  const rtlCls = `${componentCls}-rtl`;
  return {
    [rtlCls]: {
      direction: "rtl",
      [`${componentCls}-nav`]: {
        [`${componentCls}-tab`]: {
          margin: {
            _skip_check_: true,
            value: `0 0 0 ${tabsHorizontalGutter}px`
          },
          [`${componentCls}-tab:last-of-type`]: {
            marginLeft: {
              _skip_check_: true,
              value: 0
            }
          },
          [iconCls]: {
            marginRight: {
              _skip_check_: true,
              value: 0
            },
            marginLeft: {
              _skip_check_: true,
              value: `${token.marginSM}px`
            }
          },
          [`${componentCls}-tab-remove`]: {
            marginRight: {
              _skip_check_: true,
              value: `${token.marginXS}px`
            },
            marginLeft: {
              _skip_check_: true,
              value: `-${token.marginXXS}px`
            },
            [iconCls]: {
              margin: 0
            }
          }
        }
      },
      [`&${componentCls}-left`]: {
        [`> ${componentCls}-nav`]: {
          order: 1
        },
        [`> ${componentCls}-content-holder`]: {
          order: 0
        }
      },
      [`&${componentCls}-right`]: {
        [`> ${componentCls}-nav`]: {
          order: 0
        },
        [`> ${componentCls}-content-holder`]: {
          order: 1
        }
      },
      // ====================== Card ======================
      [`&${componentCls}-card${componentCls}-top, &${componentCls}-card${componentCls}-bottom`]: {
        [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
          [`${componentCls}-tab + ${componentCls}-tab`]: {
            marginRight: {
              _skip_check_: true,
              value: `${tabsCardGutter}px`
            },
            marginLeft: {
              _skip_check_: true,
              value: 0
            }
          }
        }
      }
    },
    [`${componentCls}-dropdown-rtl`]: {
      direction: "rtl"
    },
    [`${componentCls}-menu-item`]: {
      [`${componentCls}-dropdown-rtl`]: {
        textAlign: {
          _skip_check_: true,
          value: "right"
        }
      }
    }
  };
};
const genTabsStyle = (token) => {
  const {
    componentCls,
    tabsCardHorizontalPadding,
    tabsCardHeight,
    tabsCardGutter,
    tabsHoverColor,
    tabsActiveColor,
    colorSplit
  } = token;
  return {
    [componentCls]: _extends(_extends(_extends(_extends({}, resetComponent(token)), {
      display: "flex",
      // ========================== Navigation ==========================
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        position: "relative",
        display: "flex",
        flex: "none",
        alignItems: "center",
        [`${componentCls}-nav-wrap`]: {
          position: "relative",
          display: "flex",
          flex: "auto",
          alignSelf: "stretch",
          overflow: "hidden",
          whiteSpace: "nowrap",
          transform: "translate(0)",
          // >>>>> Ping shadow
          "&::before, &::after": {
            position: "absolute",
            zIndex: 1,
            opacity: 0,
            transition: `opacity ${token.motionDurationSlow}`,
            content: "''",
            pointerEvents: "none"
          }
        },
        [`${componentCls}-nav-list`]: {
          position: "relative",
          display: "flex",
          transition: `opacity ${token.motionDurationSlow}`
        },
        // >>>>>>>> Operations
        [`${componentCls}-nav-operations`]: {
          display: "flex",
          alignSelf: "stretch"
        },
        [`${componentCls}-nav-operations-hidden`]: {
          position: "absolute",
          visibility: "hidden",
          pointerEvents: "none"
        },
        [`${componentCls}-nav-more`]: {
          position: "relative",
          padding: tabsCardHorizontalPadding,
          background: "transparent",
          border: 0,
          "&::after": {
            position: "absolute",
            right: {
              _skip_check_: true,
              value: 0
            },
            bottom: 0,
            left: {
              _skip_check_: true,
              value: 0
            },
            height: token.controlHeightLG / 8,
            transform: "translateY(100%)",
            content: "''"
          }
        },
        [`${componentCls}-nav-add`]: _extends({
          minWidth: `${tabsCardHeight}px`,
          marginLeft: {
            _skip_check_: true,
            value: `${tabsCardGutter}px`
          },
          padding: `0 ${token.paddingXS}px`,
          background: "transparent",
          border: `${token.lineWidth}px ${token.lineType} ${colorSplit}`,
          borderRadius: `${token.borderRadiusLG}px ${token.borderRadiusLG}px 0 0`,
          outline: "none",
          cursor: "pointer",
          color: token.colorText,
          transition: `all ${token.motionDurationSlow} ${token.motionEaseInOut}`,
          "&:hover": {
            color: tabsHoverColor
          },
          "&:active, &:focus:not(:focus-visible)": {
            color: tabsActiveColor
          }
        }, genFocusStyle(token))
      },
      [`${componentCls}-extra-content`]: {
        flex: "none"
      },
      // ============================ InkBar ============================
      [`${componentCls}-ink-bar`]: {
        position: "absolute",
        background: token.colorPrimary,
        pointerEvents: "none"
      }
    }), genTabStyle(token)), {
      // =========================== TabPanes ===========================
      [`${componentCls}-content`]: {
        position: "relative",
        display: "flex",
        width: "100%",
        ["&-animated"]: {
          transition: "margin 0.3s"
        }
      },
      [`${componentCls}-content-holder`]: {
        flex: "auto",
        minWidth: 0,
        minHeight: 0
      },
      [`${componentCls}-tabpane`]: {
        outline: "none",
        flex: "none",
        width: "100%"
      }
    }),
    [`${componentCls}-centered`]: {
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        [`${componentCls}-nav-wrap`]: {
          [`&:not([class*='${componentCls}-nav-wrap-ping'])`]: {
            justifyContent: "center"
          }
        }
      }
    }
  };
};
const useStyle$1 = genComponentStyleHook("Tabs", (token) => {
  const tabsCardHeight = token.controlHeightLG;
  const tabsToken = merge(token, {
    tabsHoverColor: token.colorPrimaryHover,
    tabsActiveColor: token.colorPrimaryActive,
    tabsCardHorizontalPadding: `${(tabsCardHeight - Math.round(token.fontSize * token.lineHeight)) / 2 - token.lineWidth}px ${token.padding}px`,
    tabsCardHeight,
    tabsCardGutter: token.marginXXS / 2,
    tabsHorizontalGutter: 32,
    tabsCardHeadBackground: token.colorFillAlter,
    dropdownEdgeChildVerticalPadding: token.paddingXXS,
    tabsActiveTextShadow: "0 0 0.25px currentcolor",
    tabsDropdownHeight: 200,
    tabsDropdownWidth: 120
  });
  return [genSizeStyle(tabsToken), genRtlStyle(tabsToken), genPositionStyle(tabsToken), genDropdownStyle(tabsToken), genCardStyle(tabsToken), genTabsStyle(tabsToken), genMotionStyle$1(tabsToken)];
}, (token) => ({
  zIndexPopup: token.zIndexPopupBase + 50
}));
let uuid = 0;
const tabsProps = () => {
  return {
    prefixCls: {
      type: String
    },
    id: {
      type: String
    },
    popupClassName: String,
    getPopupContainer: functionType(),
    activeKey: {
      type: [String, Number]
    },
    defaultActiveKey: {
      type: [String, Number]
    },
    direction: stringType(),
    animated: someType([Boolean, Object]),
    renderTabBar: functionType(),
    tabBarGutter: {
      type: Number
    },
    tabBarStyle: objectType(),
    tabPosition: stringType(),
    destroyInactiveTabPane: booleanType(),
    hideAdd: Boolean,
    type: stringType(),
    size: stringType(),
    centered: Boolean,
    onEdit: functionType(),
    onChange: functionType(),
    onTabClick: functionType(),
    onTabScroll: functionType(),
    "onUpdate:activeKey": functionType(),
    // Accessibility
    locale: objectType(),
    onPrevClick: functionType(),
    onNextClick: functionType(),
    tabBarExtraContent: PropTypes.any
  };
};
function parseTabList(children) {
  return children.map((node) => {
    if (isValidElement(node)) {
      const props2 = _extends({}, node.props || {});
      for (const [k, v] of Object.entries(props2)) {
        delete props2[k];
        props2[camelize(k)] = v;
      }
      const slots = node.children || {};
      const key = node.key !== void 0 ? node.key : void 0;
      const {
        tab = slots.tab,
        disabled,
        forceRender,
        closable,
        animated,
        active,
        destroyInactiveTabPane
      } = props2;
      return _extends(_extends({
        key
      }, props2), {
        node,
        closeIcon: slots.closeIcon,
        tab,
        disabled: disabled === "" || disabled,
        forceRender: forceRender === "" || forceRender,
        closable: closable === "" || closable,
        animated: animated === "" || animated,
        active: active === "" || active,
        destroyInactiveTabPane: destroyInactiveTabPane === "" || destroyInactiveTabPane
      });
    }
    return null;
  }).filter((tab) => tab);
}
const InternalTabs = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "InternalTabs",
  inheritAttrs: false,
  props: _extends(_extends({}, initDefaultProps(tabsProps(), {
    tabPosition: "top",
    animated: {
      inkBar: true,
      tabPane: false
    }
  })), {
    tabs: arrayType()
  }),
  slots: Object,
  // emits: ['tabClick', 'tabScroll', 'change', 'update:activeKey'],
  setup(props2, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    devWarning(!(props2.onPrevClick !== void 0) && !(props2.onNextClick !== void 0), "Tabs", "`onPrevClick / @prevClick` and `onNextClick / @nextClick` has been removed. Please use `onTabScroll / @tabScroll` instead.");
    devWarning(!(props2.tabBarExtraContent !== void 0), "Tabs", "`tabBarExtraContent` prop has been removed. Please use `rightExtra` slot instead.");
    devWarning(!(slots.tabBarExtraContent !== void 0), "Tabs", "`tabBarExtraContent` slot is deprecated. Please use `rightExtra` slot instead.");
    const {
      prefixCls,
      direction,
      size,
      rootPrefixCls,
      getPopupContainer
    } = useConfigInject("tabs", props2);
    const [wrapSSR, hashId] = useStyle$1(prefixCls);
    const rtl = computed(() => direction.value === "rtl");
    const mergedAnimated = computed(() => {
      const {
        animated,
        tabPosition
      } = props2;
      if (animated === false || ["left", "right"].includes(tabPosition)) {
        return {
          inkBar: false,
          tabPane: false
        };
      } else if (animated === true) {
        return {
          inkBar: true,
          tabPane: true
        };
      } else {
        return _extends({
          inkBar: true,
          tabPane: false
        }, typeof animated === "object" ? animated : {});
      }
    });
    const [mobile, setMobile] = useState(false);
    onMounted(() => {
      setMobile(isMobile());
    });
    const [mergedActiveKey, setMergedActiveKey] = useMergedState(() => {
      var _a;
      return (_a = props2.tabs[0]) === null || _a === void 0 ? void 0 : _a.key;
    }, {
      value: computed(() => props2.activeKey),
      defaultValue: props2.defaultActiveKey
    });
    const [activeIndex, setActiveIndex] = useState(() => props2.tabs.findIndex((tab) => tab.key === mergedActiveKey.value));
    watchEffect(() => {
      var _a;
      let newActiveIndex = props2.tabs.findIndex((tab) => tab.key === mergedActiveKey.value);
      if (newActiveIndex === -1) {
        newActiveIndex = Math.max(0, Math.min(activeIndex.value, props2.tabs.length - 1));
        setMergedActiveKey((_a = props2.tabs[newActiveIndex]) === null || _a === void 0 ? void 0 : _a.key);
      }
      setActiveIndex(newActiveIndex);
    });
    const [mergedId, setMergedId] = useMergedState(null, {
      value: computed(() => props2.id)
    });
    const mergedTabPosition = computed(() => {
      if (mobile.value && !["left", "right"].includes(props2.tabPosition)) {
        return "top";
      } else {
        return props2.tabPosition;
      }
    });
    onMounted(() => {
      if (!props2.id) {
        setMergedId(`rc-tabs-${uuid}`);
        uuid += 1;
      }
    });
    const onInternalTabClick = (key, e) => {
      var _a, _b;
      (_a = props2.onTabClick) === null || _a === void 0 ? void 0 : _a.call(props2, key, e);
      const isActiveChanged = key !== mergedActiveKey.value;
      setMergedActiveKey(key);
      if (isActiveChanged) {
        (_b = props2.onChange) === null || _b === void 0 ? void 0 : _b.call(props2, key);
      }
    };
    useProvideTabs({
      tabs: computed(() => props2.tabs),
      prefixCls
    });
    return () => {
      const {
        id,
        type,
        tabBarGutter,
        tabBarStyle,
        locale,
        destroyInactiveTabPane,
        renderTabBar = slots.renderTabBar,
        onTabScroll,
        hideAdd,
        centered
      } = props2;
      const sharedProps = {
        id: mergedId.value,
        activeKey: mergedActiveKey.value,
        animated: mergedAnimated.value,
        tabPosition: mergedTabPosition.value,
        rtl: rtl.value,
        mobile: mobile.value
      };
      let editable;
      if (type === "editable-card") {
        editable = {
          onEdit: (editType, _ref2) => {
            let {
              key,
              event
            } = _ref2;
            var _a;
            (_a = props2.onEdit) === null || _a === void 0 ? void 0 : _a.call(props2, editType === "add" ? event : key, editType);
          },
          removeIcon: () => createVNode(CloseOutlined, null, null),
          addIcon: slots.addIcon ? slots.addIcon : () => createVNode(PlusOutlined$1, null, null),
          showAdd: hideAdd !== true
        };
      }
      let tabNavBar;
      const tabNavBarProps = _extends(_extends({}, sharedProps), {
        moreTransitionName: `${rootPrefixCls.value}-slide-up`,
        editable,
        locale,
        tabBarGutter,
        onTabClick: onInternalTabClick,
        onTabScroll,
        style: tabBarStyle,
        getPopupContainer: getPopupContainer.value,
        popupClassName: classNames(props2.popupClassName, hashId.value)
      });
      if (renderTabBar) {
        tabNavBar = renderTabBar(_extends(_extends({}, tabNavBarProps), {
          DefaultTabBar: TabNavList
        }));
      } else {
        tabNavBar = createVNode(TabNavList, tabNavBarProps, pick$1(slots, ["moreIcon", "leftExtra", "rightExtra", "tabBarExtraContent"]));
      }
      const pre = prefixCls.value;
      return wrapSSR(createVNode("div", _objectSpread2(_objectSpread2({}, attrs), {}, {
        "id": id,
        "class": classNames(pre, `${pre}-${mergedTabPosition.value}`, {
          [hashId.value]: true,
          [`${pre}-${size.value}`]: size.value,
          [`${pre}-card`]: ["card", "editable-card"].includes(type),
          [`${pre}-editable-card`]: type === "editable-card",
          [`${pre}-centered`]: centered,
          [`${pre}-mobile`]: mobile.value,
          [`${pre}-editable`]: type === "editable-card",
          [`${pre}-rtl`]: rtl.value
        }, attrs.class)
      }), [tabNavBar, createVNode(TabPanelList, _objectSpread2(_objectSpread2({
        "destroyInactiveTabPane": destroyInactiveTabPane
      }, sharedProps), {}, {
        "animated": mergedAnimated.value
      }), null)]));
    };
  }
});
const Tabs = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ATabs",
  inheritAttrs: false,
  props: initDefaultProps(tabsProps(), {
    tabPosition: "top",
    animated: {
      inkBar: true,
      tabPane: false
    }
  }),
  slots: Object,
  // emits: ['tabClick', 'tabScroll', 'change', 'update:activeKey'],
  setup(props2, _ref3) {
    let {
      attrs,
      slots,
      emit
    } = _ref3;
    const handleChange = (key) => {
      emit("update:activeKey", key);
      emit("change", key);
    };
    return () => {
      var _a;
      const tabs = parseTabList(flattenChildren((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)));
      return createVNode(InternalTabs, _objectSpread2(_objectSpread2(_objectSpread2({}, omit(props2, ["onUpdate:activeKey"])), attrs), {}, {
        "onChange": handleChange,
        "tabs": tabs
      }), slots);
    };
  }
});
const tabPaneProps = () => ({
  tab: PropTypes.any,
  disabled: {
    type: Boolean
  },
  forceRender: {
    type: Boolean
  },
  closable: {
    type: Boolean
  },
  animated: {
    type: Boolean
  },
  active: {
    type: Boolean
  },
  destroyInactiveTabPane: {
    type: Boolean
  },
  // Pass by TabPaneList
  prefixCls: {
    type: String
  },
  tabKey: {
    type: [String, Number]
  },
  id: {
    type: String
  }
  // closeIcon: PropTypes.any,
});
const TabPane = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ATabPane",
  inheritAttrs: false,
  __ANT_TAB_PANE: true,
  props: tabPaneProps(),
  slots: Object,
  setup(props2, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const visited = ref(props2.forceRender);
    watch([() => props2.active, () => props2.destroyInactiveTabPane], () => {
      if (props2.active) {
        visited.value = true;
      } else if (props2.destroyInactiveTabPane) {
        visited.value = false;
      }
    }, {
      immediate: true
    });
    const mergedStyle = computed(() => {
      if (!props2.active) {
        if (props2.animated) {
          return {
            visibility: "hidden",
            height: 0,
            overflowY: "hidden"
          };
        } else {
          return {
            display: "none"
          };
        }
      }
      return {};
    });
    return () => {
      var _a;
      const {
        prefixCls,
        forceRender,
        id,
        active,
        tabKey
      } = props2;
      return createVNode("div", {
        "id": id && `${id}-panel-${tabKey}`,
        "role": "tabpanel",
        "tabindex": active ? 0 : -1,
        "aria-labelledby": id && `${id}-tab-${tabKey}`,
        "aria-hidden": !active,
        "style": [mergedStyle.value, attrs.style],
        "class": [`${prefixCls}-tabpane`, active && `${prefixCls}-tabpane-active`, attrs.class]
      }, [(active || visited.value || forceRender) && ((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots))]);
    };
  }
});
Tabs.TabPane = TabPane;
Tabs.install = function(app) {
  app.component(Tabs.name, Tabs);
  app.component(TabPane.name, TabPane);
  return app;
};
var LeftOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" } }] }, "name": "left", "theme": "outlined" };
const LeftOutlinedSvg = LeftOutlined$2;
function _objectSpread$6(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$6(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$6(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var LeftOutlined = function LeftOutlined2(props2, context) {
  var p = _objectSpread$6({}, props2, context.attrs);
  return createVNode(AntdIcon, _objectSpread$6({}, p, {
    "icon": LeftOutlinedSvg
  }), null);
};
LeftOutlined.displayName = "LeftOutlined";
LeftOutlined.inheritAttrs = false;
const LeftOutlined$1 = LeftOutlined;
const useFlexGapSupport = () => {
  const flexible = shallowRef(false);
  onMounted(() => {
    flexible.value = detectFlexGapSupported();
  });
  return flexible;
};
const RowContextKey = Symbol("rowContextKey");
const useProvideRow = (state) => {
  provide(RowContextKey, state);
};
const useInjectRow = () => {
  return inject(RowContextKey, {
    gutter: computed(() => void 0),
    wrap: computed(() => void 0),
    supportFlexGap: computed(() => void 0)
  });
};
const genGridRowStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    // Grid system
    [componentCls]: {
      display: "flex",
      flexFlow: "row wrap",
      minWidth: 0,
      "&::before, &::after": {
        display: "flex"
      },
      "&-no-wrap": {
        flexWrap: "nowrap"
      },
      // The origin of the X-axis
      "&-start": {
        justifyContent: "flex-start"
      },
      // The center of the X-axis
      "&-center": {
        justifyContent: "center"
      },
      // The opposite of the X-axis
      "&-end": {
        justifyContent: "flex-end"
      },
      "&-space-between": {
        justifyContent: "space-between"
      },
      "&-space-around ": {
        justifyContent: "space-around"
      },
      "&-space-evenly ": {
        justifyContent: "space-evenly"
      },
      // Align at the top
      "&-top": {
        alignItems: "flex-start"
      },
      // Align at the center
      "&-middle": {
        alignItems: "center"
      },
      "&-bottom": {
        alignItems: "flex-end"
      }
    }
  };
};
const genGridColStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    // Grid system
    [componentCls]: {
      position: "relative",
      maxWidth: "100%",
      // Prevent columns from collapsing when empty
      minHeight: 1
    }
  };
};
const genLoopGridColumnsStyle = (token, sizeCls) => {
  const {
    componentCls,
    gridColumns
  } = token;
  const gridColumnsStyle = {};
  for (let i = gridColumns; i >= 0; i--) {
    if (i === 0) {
      gridColumnsStyle[`${componentCls}${sizeCls}-${i}`] = {
        display: "none"
      };
      gridColumnsStyle[`${componentCls}-push-${i}`] = {
        insetInlineStart: "auto"
      };
      gridColumnsStyle[`${componentCls}-pull-${i}`] = {
        insetInlineEnd: "auto"
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-push-${i}`] = {
        insetInlineStart: "auto"
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-pull-${i}`] = {
        insetInlineEnd: "auto"
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-offset-${i}`] = {
        marginInlineEnd: 0
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-order-${i}`] = {
        order: 0
      };
    } else {
      gridColumnsStyle[`${componentCls}${sizeCls}-${i}`] = {
        display: "block",
        flex: `0 0 ${i / gridColumns * 100}%`,
        maxWidth: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-push-${i}`] = {
        insetInlineStart: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-pull-${i}`] = {
        insetInlineEnd: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-offset-${i}`] = {
        marginInlineStart: `${i / gridColumns * 100}%`
      };
      gridColumnsStyle[`${componentCls}${sizeCls}-order-${i}`] = {
        order: i
      };
    }
  }
  return gridColumnsStyle;
};
const genGridStyle = (token, sizeCls) => genLoopGridColumnsStyle(token, sizeCls);
const genGridMediaStyle = (token, screenSize, sizeCls) => ({
  [`@media (min-width: ${screenSize}px)`]: _extends({}, genGridStyle(token, sizeCls))
});
const useRowStyle = genComponentStyleHook("Grid", (token) => [genGridRowStyle(token)]);
const useColStyle = genComponentStyleHook("Grid", (token) => {
  const gridToken = merge(token, {
    gridColumns: 24
    // Row is divided into 24 parts in Grid
  });
  const gridMediaSizesMap = {
    "-sm": gridToken.screenSMMin,
    "-md": gridToken.screenMDMin,
    "-lg": gridToken.screenLGMin,
    "-xl": gridToken.screenXLMin,
    "-xxl": gridToken.screenXXLMin
  };
  return [genGridColStyle(gridToken), genGridStyle(gridToken, ""), genGridStyle(gridToken, "-xs"), Object.keys(gridMediaSizesMap).map((key) => genGridMediaStyle(gridToken, gridMediaSizesMap[key], key)).reduce((pre, cur) => _extends(_extends({}, pre), cur), {})];
});
const rowProps = () => ({
  align: someType([String, Object]),
  justify: someType([String, Object]),
  prefixCls: String,
  gutter: someType([Number, Array, Object], 0),
  wrap: {
    type: Boolean,
    default: void 0
  }
});
const ARow = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ARow",
  inheritAttrs: false,
  props: rowProps(),
  setup(props2, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      prefixCls,
      direction
    } = useConfigInject("row", props2);
    const [wrapSSR, hashId] = useRowStyle(prefixCls);
    let token;
    const responsiveObserve = useResponsiveObserver();
    const screens = ref({
      xs: true,
      sm: true,
      md: true,
      lg: true,
      xl: true,
      xxl: true
    });
    const curScreens = ref({
      xs: false,
      sm: false,
      md: false,
      lg: false,
      xl: false,
      xxl: false
    });
    const mergePropsByScreen = (oriProp) => {
      return computed(() => {
        if (typeof props2[oriProp] === "string") {
          return props2[oriProp];
        }
        if (typeof props2[oriProp] !== "object") {
          return "";
        }
        for (let i = 0; i < responsiveArray.length; i++) {
          const breakpoint = responsiveArray[i];
          if (!curScreens.value[breakpoint])
            continue;
          const curVal = props2[oriProp][breakpoint];
          if (curVal !== void 0) {
            return curVal;
          }
        }
        return "";
      });
    };
    const mergeAlign = mergePropsByScreen("align");
    const mergeJustify = mergePropsByScreen("justify");
    const supportFlexGap = useFlexGapSupport();
    onMounted(() => {
      token = responsiveObserve.value.subscribe((screen) => {
        curScreens.value = screen;
        const currentGutter = props2.gutter || 0;
        if (!Array.isArray(currentGutter) && typeof currentGutter === "object" || Array.isArray(currentGutter) && (typeof currentGutter[0] === "object" || typeof currentGutter[1] === "object")) {
          screens.value = screen;
        }
      });
    });
    onBeforeUnmount(() => {
      responsiveObserve.value.unsubscribe(token);
    });
    const gutter = computed(() => {
      const results = [void 0, void 0];
      const {
        gutter: gutter2 = 0
      } = props2;
      const normalizedGutter = Array.isArray(gutter2) ? gutter2 : [gutter2, void 0];
      normalizedGutter.forEach((g, index2) => {
        if (typeof g === "object") {
          for (let i = 0; i < responsiveArray.length; i++) {
            const breakpoint = responsiveArray[i];
            if (screens.value[breakpoint] && g[breakpoint] !== void 0) {
              results[index2] = g[breakpoint];
              break;
            }
          }
        } else {
          results[index2] = g;
        }
      });
      return results;
    });
    useProvideRow({
      gutter,
      supportFlexGap,
      wrap: computed(() => props2.wrap)
    });
    const classes = computed(() => classNames(prefixCls.value, {
      [`${prefixCls.value}-no-wrap`]: props2.wrap === false,
      [`${prefixCls.value}-${mergeJustify.value}`]: mergeJustify.value,
      [`${prefixCls.value}-${mergeAlign.value}`]: mergeAlign.value,
      [`${prefixCls.value}-rtl`]: direction.value === "rtl"
    }, attrs.class, hashId.value));
    const rowStyle = computed(() => {
      const gt = gutter.value;
      const style = {};
      const horizontalGutter = gt[0] != null && gt[0] > 0 ? `${gt[0] / -2}px` : void 0;
      const verticalGutter = gt[1] != null && gt[1] > 0 ? `${gt[1] / -2}px` : void 0;
      if (horizontalGutter) {
        style.marginLeft = horizontalGutter;
        style.marginRight = horizontalGutter;
      }
      if (supportFlexGap.value) {
        style.rowGap = `${gt[1]}px`;
      } else if (verticalGutter) {
        style.marginTop = verticalGutter;
        style.marginBottom = verticalGutter;
      }
      return style;
    });
    return () => {
      var _a;
      return wrapSSR(createVNode("div", _objectSpread2(_objectSpread2({}, attrs), {}, {
        "class": classes.value,
        "style": _extends(_extends({}, rowStyle.value), attrs.style)
      }), [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]));
    };
  }
});
const Row$1 = ARow;
function parseFlex(flex) {
  if (typeof flex === "number") {
    return `${flex} ${flex} auto`;
  }
  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return `0 0 ${flex}`;
  }
  return flex;
}
const colProps = () => ({
  span: [String, Number],
  order: [String, Number],
  offset: [String, Number],
  push: [String, Number],
  pull: [String, Number],
  xs: {
    type: [String, Number, Object],
    default: void 0
  },
  sm: {
    type: [String, Number, Object],
    default: void 0
  },
  md: {
    type: [String, Number, Object],
    default: void 0
  },
  lg: {
    type: [String, Number, Object],
    default: void 0
  },
  xl: {
    type: [String, Number, Object],
    default: void 0
  },
  xxl: {
    type: [String, Number, Object],
    default: void 0
  },
  prefixCls: String,
  flex: [String, Number]
});
const sizes = ["xs", "sm", "md", "lg", "xl", "xxl"];
const Col$1 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "ACol",
  inheritAttrs: false,
  props: colProps(),
  setup(props2, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      gutter,
      supportFlexGap,
      wrap
    } = useInjectRow();
    const {
      prefixCls,
      direction
    } = useConfigInject("col", props2);
    const [wrapSSR, hashId] = useColStyle(prefixCls);
    const classes = computed(() => {
      const {
        span,
        order,
        offset,
        push,
        pull
      } = props2;
      const pre = prefixCls.value;
      let sizeClassObj = {};
      sizes.forEach((size) => {
        let sizeProps = {};
        const propSize = props2[size];
        if (typeof propSize === "number") {
          sizeProps.span = propSize;
        } else if (typeof propSize === "object") {
          sizeProps = propSize || {};
        }
        sizeClassObj = _extends(_extends({}, sizeClassObj), {
          [`${pre}-${size}-${sizeProps.span}`]: sizeProps.span !== void 0,
          [`${pre}-${size}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
          [`${pre}-${size}-offset-${sizeProps.offset}`]: sizeProps.offset || sizeProps.offset === 0,
          [`${pre}-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
          [`${pre}-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0,
          [`${pre}-rtl`]: direction.value === "rtl"
        });
      });
      return classNames(pre, {
        [`${pre}-${span}`]: span !== void 0,
        [`${pre}-order-${order}`]: order,
        [`${pre}-offset-${offset}`]: offset,
        [`${pre}-push-${push}`]: push,
        [`${pre}-pull-${pull}`]: pull
      }, sizeClassObj, attrs.class, hashId.value);
    });
    const mergedStyle = computed(() => {
      const {
        flex
      } = props2;
      const gutterVal = gutter.value;
      const style = {};
      if (gutterVal && gutterVal[0] > 0) {
        const horizontalGutter = `${gutterVal[0] / 2}px`;
        style.paddingLeft = horizontalGutter;
        style.paddingRight = horizontalGutter;
      }
      if (gutterVal && gutterVal[1] > 0 && !supportFlexGap.value) {
        const verticalGutter = `${gutterVal[1] / 2}px`;
        style.paddingTop = verticalGutter;
        style.paddingBottom = verticalGutter;
      }
      if (flex) {
        style.flex = parseFlex(flex);
        if (wrap.value === false && !style.minWidth) {
          style.minWidth = 0;
        }
      }
      return style;
    });
    return () => {
      var _a;
      return wrapSSR(createVNode("div", _objectSpread2(_objectSpread2({}, attrs), {}, {
        "class": classes.value,
        "style": [mergedStyle.value, attrs.style]
      }), [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]));
    };
  }
});
const Col = withInstall(Col$1);
const BaseInput = defineComponent({
  name: "BaseInput",
  inheritAttrs: false,
  props: baseInputProps(),
  setup(props2, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const containerRef = ref();
    const onInputMouseDown = (e) => {
      var _a;
      if ((_a = containerRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.target)) {
        const {
          triggerFocus: triggerFocus2
        } = props2;
        triggerFocus2 === null || triggerFocus2 === void 0 ? void 0 : triggerFocus2();
      }
    };
    const getClearIcon = () => {
      var _a;
      const {
        allowClear,
        value,
        disabled,
        readonly,
        handleReset,
        suffix = slots.suffix,
        prefixCls
      } = props2;
      if (!allowClear) {
        return null;
      }
      const needClear = !disabled && !readonly && value;
      const className = `${prefixCls}-clear-icon`;
      const iconNode = ((_a = slots.clearIcon) === null || _a === void 0 ? void 0 : _a.call(slots)) || "*";
      return createVNode("span", {
        "onClick": handleReset,
        "onMousedown": (e) => e.preventDefault(),
        "class": classNames({
          [`${className}-hidden`]: !needClear,
          [`${className}-has-suffix`]: !!suffix
        }, className),
        "role": "button",
        "tabindex": -1
      }, [iconNode]);
    };
    return () => {
      var _a, _b;
      const {
        focused,
        value,
        disabled,
        allowClear,
        readonly,
        hidden,
        prefixCls,
        prefix = (_a = slots.prefix) === null || _a === void 0 ? void 0 : _a.call(slots),
        suffix = (_b = slots.suffix) === null || _b === void 0 ? void 0 : _b.call(slots),
        addonAfter = slots.addonAfter,
        addonBefore = slots.addonBefore,
        inputElement,
        affixWrapperClassName,
        wrapperClassName,
        groupClassName
      } = props2;
      let element = cloneElement(inputElement, {
        value,
        hidden
      });
      if (hasPrefixSuffix({
        prefix,
        suffix,
        allowClear
      })) {
        const affixWrapperPrefixCls = `${prefixCls}-affix-wrapper`;
        const affixWrapperCls = classNames(affixWrapperPrefixCls, {
          [`${affixWrapperPrefixCls}-disabled`]: disabled,
          [`${affixWrapperPrefixCls}-focused`]: focused,
          [`${affixWrapperPrefixCls}-readonly`]: readonly,
          [`${affixWrapperPrefixCls}-input-with-clear-btn`]: suffix && allowClear && value
        }, !hasAddon({
          addonAfter,
          addonBefore
        }) && attrs.class, affixWrapperClassName);
        const suffixNode = (suffix || allowClear) && createVNode("span", {
          "class": `${prefixCls}-suffix`
        }, [getClearIcon(), suffix]);
        element = createVNode("span", {
          "class": affixWrapperCls,
          "style": attrs.style,
          "hidden": !hasAddon({
            addonAfter,
            addonBefore
          }) && hidden,
          "onMousedown": onInputMouseDown,
          "ref": containerRef
        }, [prefix && createVNode("span", {
          "class": `${prefixCls}-prefix`
        }, [prefix]), cloneElement(inputElement, {
          style: null,
          value,
          hidden: null
        }), suffixNode]);
      }
      if (hasAddon({
        addonAfter,
        addonBefore
      })) {
        const wrapperCls = `${prefixCls}-group`;
        const addonCls = `${wrapperCls}-addon`;
        const mergedWrapperClassName = classNames(`${prefixCls}-wrapper`, wrapperCls, wrapperClassName);
        const mergedGroupClassName = classNames(`${prefixCls}-group-wrapper`, attrs.class, groupClassName);
        return createVNode("span", {
          "class": mergedGroupClassName,
          "style": attrs.style,
          "hidden": hidden
        }, [createVNode("span", {
          "class": mergedWrapperClassName
        }, [addonBefore && createVNode("span", {
          "class": addonCls
        }, [addonBefore]), cloneElement(element, {
          style: null,
          hidden: null
        }), addonAfter && createVNode("span", {
          "class": addonCls
        }, [addonAfter])])]);
      }
      return element;
    };
  }
});
var __rest$5 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
const VcInput = defineComponent({
  name: "VCInput",
  inheritAttrs: false,
  props: inputProps$1(),
  setup(props2, _ref) {
    let {
      slots,
      attrs,
      expose,
      emit
    } = _ref;
    const stateValue = shallowRef(props2.value === void 0 ? props2.defaultValue : props2.value);
    const focused = shallowRef(false);
    const inputRef = shallowRef();
    const rootRef = shallowRef();
    watch(() => props2.value, () => {
      stateValue.value = props2.value;
    });
    watch(() => props2.disabled, () => {
      if (props2.disabled) {
        focused.value = false;
      }
    });
    const focus = (option) => {
      if (inputRef.value) {
        triggerFocus(inputRef.value.input, option);
      }
    };
    const blur = () => {
      var _a;
      (_a = inputRef.value.input) === null || _a === void 0 ? void 0 : _a.blur();
    };
    const setSelectionRange = (start, end, direction) => {
      var _a;
      (_a = inputRef.value.input) === null || _a === void 0 ? void 0 : _a.setSelectionRange(start, end, direction);
    };
    const select = () => {
      var _a;
      (_a = inputRef.value.input) === null || _a === void 0 ? void 0 : _a.select();
    };
    expose({
      focus,
      blur,
      input: computed(() => {
        var _a;
        return (_a = inputRef.value.input) === null || _a === void 0 ? void 0 : _a.input;
      }),
      stateValue,
      setSelectionRange,
      select
    });
    const triggerChange = (e) => {
      emit("change", e);
    };
    const setValue = (value, callback) => {
      if (stateValue.value === value) {
        return;
      }
      if (props2.value === void 0) {
        stateValue.value = value;
      } else {
        nextTick(() => {
          var _a;
          if (inputRef.value.input.value !== stateValue.value) {
            (_a = rootRef.value) === null || _a === void 0 ? void 0 : _a.$forceUpdate();
          }
        });
      }
      nextTick(() => {
        callback && callback();
      });
    };
    const handleChange = (e) => {
      const {
        value
      } = e.target;
      if (stateValue.value === value)
        return;
      const newVal = e.target.value;
      resolveOnChange(inputRef.value.input, e, triggerChange);
      setValue(newVal);
    };
    const handleKeyDown = (e) => {
      if (e.keyCode === 13) {
        emit("pressEnter", e);
      }
      emit("keydown", e);
    };
    const handleFocus = (e) => {
      focused.value = true;
      emit("focus", e);
    };
    const handleBlur = (e) => {
      focused.value = false;
      emit("blur", e);
    };
    const handleReset = (e) => {
      resolveOnChange(inputRef.value.input, e, triggerChange);
      setValue("", () => {
        focus();
      });
    };
    const getInputElement = () => {
      var _a, _b;
      const {
        addonBefore = slots.addonBefore,
        addonAfter = slots.addonAfter,
        disabled,
        valueModifiers = {},
        htmlSize,
        autocomplete,
        prefixCls,
        inputClassName,
        prefix = (_a = slots.prefix) === null || _a === void 0 ? void 0 : _a.call(slots),
        suffix = (_b = slots.suffix) === null || _b === void 0 ? void 0 : _b.call(slots),
        allowClear,
        type = "text"
      } = props2;
      const otherProps = omit(props2, [
        "prefixCls",
        "onPressEnter",
        "addonBefore",
        "addonAfter",
        "prefix",
        "suffix",
        "allowClear",
        // Input elements must be either controlled or uncontrolled,
        // specify either the value prop, or the defaultValue prop, but not both.
        "defaultValue",
        "size",
        "bordered",
        "htmlSize",
        "lazy",
        "showCount",
        "valueModifiers",
        "showCount",
        "affixWrapperClassName",
        "groupClassName",
        "inputClassName",
        "wrapperClassName"
      ]);
      const inputProps2 = _extends(_extends(_extends({}, otherProps), attrs), {
        autocomplete,
        onChange: handleChange,
        onInput: handleChange,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onKeydown: handleKeyDown,
        class: classNames(prefixCls, {
          [`${prefixCls}-disabled`]: disabled
        }, inputClassName, !hasAddon({
          addonAfter,
          addonBefore
        }) && !hasPrefixSuffix({
          prefix,
          suffix,
          allowClear
        }) && attrs.class),
        ref: inputRef,
        key: "ant-input",
        size: htmlSize,
        type,
        lazy: props2.lazy
      });
      if (valueModifiers.lazy) {
        delete inputProps2.onInput;
      }
      if (!inputProps2.autofocus) {
        delete inputProps2.autofocus;
      }
      const inputNode = createVNode(BaseInput$1, omit(inputProps2, ["size"]), null);
      return inputNode;
    };
    const getSuffix = () => {
      var _a;
      const {
        maxlength,
        suffix = (_a = slots.suffix) === null || _a === void 0 ? void 0 : _a.call(slots),
        showCount,
        prefixCls
      } = props2;
      const hasMaxLength = Number(maxlength) > 0;
      if (suffix || showCount) {
        const valueLength = [...fixControlledValue(stateValue.value)].length;
        const dataCount = typeof showCount === "object" ? showCount.formatter({
          count: valueLength,
          maxlength
        }) : `${valueLength}${hasMaxLength ? ` / ${maxlength}` : ""}`;
        return createVNode(Fragment, null, [!!showCount && createVNode("span", {
          "class": classNames(`${prefixCls}-show-count-suffix`, {
            [`${prefixCls}-show-count-has-suffix`]: !!suffix
          })
        }, [dataCount]), suffix]);
      }
      return null;
    };
    onMounted(() => {
    });
    return () => {
      const {
        prefixCls,
        disabled
      } = props2, rest = __rest$5(props2, ["prefixCls", "disabled"]);
      return createVNode(BaseInput, _objectSpread2(_objectSpread2(_objectSpread2({}, rest), attrs), {}, {
        "ref": rootRef,
        "prefixCls": prefixCls,
        "inputElement": getInputElement(),
        "handleReset": handleReset,
        "value": fixControlledValue(stateValue.value),
        "focused": focused.value,
        "triggerFocus": focus,
        "suffix": getSuffix(),
        "disabled": disabled
      }), slots);
    };
  }
});
var __rest$4 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
const Input = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AInput",
  inheritAttrs: false,
  props: inputProps$2(),
  setup(props2, _ref) {
    let {
      slots,
      attrs,
      expose,
      emit
    } = _ref;
    const inputRef = ref();
    const formItemContext = useInjectFormItemContext();
    const formItemInputContext = FormItemInputContext.useInject();
    const mergedStatus = computed(() => getMergedStatus(formItemInputContext.status, props2.status));
    const {
      direction,
      prefixCls,
      size,
      autocomplete
    } = useConfigInject("input", props2);
    const {
      compactSize,
      compactItemClassnames
    } = useCompactItemContext(prefixCls, direction);
    const mergedSize = computed(() => {
      return compactSize.value || size.value;
    });
    const [wrapSSR, hashId] = useStyle$5(prefixCls);
    const disabled = useInjectDisabled();
    const focus = (option) => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.focus(option);
    };
    const blur = () => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.blur();
    };
    const setSelectionRange = (start, end, direction2) => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.setSelectionRange(start, end, direction2);
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
      select
    });
    const removePasswordTimeoutRef = ref([]);
    const removePasswordTimeout = () => {
      removePasswordTimeoutRef.value.push(setTimeout(() => {
        var _a, _b, _c, _d;
        if (((_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.input) && ((_b = inputRef.value) === null || _b === void 0 ? void 0 : _b.input.getAttribute("type")) === "password" && ((_c = inputRef.value) === null || _c === void 0 ? void 0 : _c.input.hasAttribute("value"))) {
          (_d = inputRef.value) === null || _d === void 0 ? void 0 : _d.input.removeAttribute("value");
        }
      }));
    };
    onMounted(() => {
      removePasswordTimeout();
    });
    onBeforeUpdate(() => {
      removePasswordTimeoutRef.value.forEach((item) => clearTimeout(item));
    });
    onBeforeUnmount(() => {
      removePasswordTimeoutRef.value.forEach((item) => clearTimeout(item));
    });
    const handleBlur = (e) => {
      removePasswordTimeout();
      emit("blur", e);
      formItemContext.onFieldBlur();
    };
    const handleFocus = (e) => {
      removePasswordTimeout();
      emit("focus", e);
    };
    const triggerChange = (e) => {
      emit("update:value", e.target.value);
      emit("change", e);
      emit("input", e);
      formItemContext.onFieldChange();
    };
    return () => {
      var _a, _b, _c, _d, _e, _f;
      const {
        hasFeedback,
        feedbackIcon
      } = formItemInputContext;
      const {
        allowClear,
        bordered = true,
        prefix = (_a = slots.prefix) === null || _a === void 0 ? void 0 : _a.call(slots),
        suffix = (_b = slots.suffix) === null || _b === void 0 ? void 0 : _b.call(slots),
        addonAfter = (_c = slots.addonAfter) === null || _c === void 0 ? void 0 : _c.call(slots),
        addonBefore = (_d = slots.addonBefore) === null || _d === void 0 ? void 0 : _d.call(slots),
        id = (_e = formItemContext.id) === null || _e === void 0 ? void 0 : _e.value
      } = props2, rest = __rest$4(props2, ["allowClear", "bordered", "prefix", "suffix", "addonAfter", "addonBefore", "id"]);
      const suffixNode = (hasFeedback || suffix) && createVNode(Fragment, null, [suffix, hasFeedback && feedbackIcon]);
      const prefixClsValue = prefixCls.value;
      const inputHasPrefixSuffix = hasPrefixSuffix({
        prefix,
        suffix
      }) || !!hasFeedback;
      const clearIcon = slots.clearIcon || (() => createVNode(CloseCircleFilled, null, null));
      return wrapSSR(createVNode(VcInput, _objectSpread2(_objectSpread2(_objectSpread2({}, attrs), omit(rest, ["onUpdate:value", "onChange", "onInput"])), {}, {
        "onChange": triggerChange,
        "id": id,
        "disabled": (_f = props2.disabled) !== null && _f !== void 0 ? _f : disabled.value,
        "ref": inputRef,
        "prefixCls": prefixClsValue,
        "autocomplete": autocomplete.value,
        "onBlur": handleBlur,
        "onFocus": handleFocus,
        "prefix": prefix,
        "suffix": suffixNode,
        "allowClear": allowClear,
        "addonAfter": addonAfter && createVNode(NoCompactStyle, null, {
          default: () => [createVNode(NoFormStatus, null, {
            default: () => [addonAfter]
          })]
        }),
        "addonBefore": addonBefore && createVNode(NoCompactStyle, null, {
          default: () => [createVNode(NoFormStatus, null, {
            default: () => [addonBefore]
          })]
        }),
        "class": [attrs.class, compactItemClassnames.value],
        "inputClassName": classNames({
          [`${prefixClsValue}-sm`]: mergedSize.value === "small",
          [`${prefixClsValue}-lg`]: mergedSize.value === "large",
          [`${prefixClsValue}-rtl`]: direction.value === "rtl",
          [`${prefixClsValue}-borderless`]: !bordered
        }, !inputHasPrefixSuffix && getStatusClassNames(prefixClsValue, mergedStatus.value), hashId.value),
        "affixWrapperClassName": classNames({
          [`${prefixClsValue}-affix-wrapper-sm`]: mergedSize.value === "small",
          [`${prefixClsValue}-affix-wrapper-lg`]: mergedSize.value === "large",
          [`${prefixClsValue}-affix-wrapper-rtl`]: direction.value === "rtl",
          [`${prefixClsValue}-affix-wrapper-borderless`]: !bordered
        }, getStatusClassNames(`${prefixClsValue}-affix-wrapper`, mergedStatus.value, hasFeedback), hashId.value),
        "wrapperClassName": classNames({
          [`${prefixClsValue}-group-rtl`]: direction.value === "rtl"
        }, hashId.value),
        "groupClassName": classNames({
          [`${prefixClsValue}-group-wrapper-sm`]: mergedSize.value === "small",
          [`${prefixClsValue}-group-wrapper-lg`]: mergedSize.value === "large",
          [`${prefixClsValue}-group-wrapper-rtl`]: direction.value === "rtl"
        }, getStatusClassNames(`${prefixClsValue}-group-wrapper`, mergedStatus.value, hasFeedback), hashId.value)
      }), _extends(_extends({}, slots), {
        clearIcon
      })));
    };
  }
});
const Group = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AInputGroup",
  inheritAttrs: false,
  props: {
    prefixCls: String,
    size: {
      type: String
    },
    compact: {
      type: Boolean,
      default: void 0
    }
  },
  setup(props2, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      prefixCls,
      direction,
      getPrefixCls
    } = useConfigInject("input-group", props2);
    const formItemInputContext = FormItemInputContext.useInject();
    FormItemInputContext.useProvide(formItemInputContext, {
      isFormItemInput: false
    });
    const inputPrefixCls = computed(() => getPrefixCls("input"));
    const [wrapSSR, hashId] = useStyle$5(inputPrefixCls);
    const cls = computed(() => {
      const pre = prefixCls.value;
      return {
        [`${pre}`]: true,
        [hashId.value]: true,
        [`${pre}-lg`]: props2.size === "large",
        [`${pre}-sm`]: props2.size === "small",
        [`${pre}-compact`]: props2.compact,
        [`${pre}-rtl`]: direction.value === "rtl"
      };
    });
    return () => {
      var _a;
      return wrapSSR(createVNode("span", _objectSpread2(_objectSpread2({}, attrs), {}, {
        "class": classNames(cls.value, attrs.class)
      }), [(_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]));
    };
  }
});
var __rest$3 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
const Search = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AInputSearch",
  inheritAttrs: false,
  props: _extends(_extends({}, inputProps$2()), {
    inputPrefixCls: String,
    // 不能设置默认值 https://github.com/vueComponent/ant-design-vue/issues/1916
    enterButton: PropTypes.any,
    onSearch: {
      type: Function
    }
  }),
  setup(props2, _ref) {
    let {
      slots,
      attrs,
      expose,
      emit
    } = _ref;
    const inputRef = shallowRef();
    const composedRef = shallowRef(false);
    const focus = () => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.focus();
    };
    const blur = () => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.blur();
    };
    expose({
      focus,
      blur
    });
    const onChange = (e) => {
      emit("update:value", e.target.value);
      if (e && e.target && e.type === "click") {
        emit("search", e.target.value, e);
      }
      emit("change", e);
    };
    const onMousedown = (e) => {
      var _a;
      if (document.activeElement === ((_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.input)) {
        e.preventDefault();
      }
    };
    const onSearch = (e) => {
      var _a, _b;
      emit("search", (_b = (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.input) === null || _b === void 0 ? void 0 : _b.stateValue, e);
    };
    const onPressEnter = (e) => {
      if (composedRef.value || props2.loading) {
        return;
      }
      onSearch(e);
    };
    const handleOnCompositionStart = (e) => {
      composedRef.value = true;
      emit("compositionstart", e);
    };
    const handleOnCompositionEnd = (e) => {
      composedRef.value = false;
      emit("compositionend", e);
    };
    const {
      prefixCls,
      getPrefixCls,
      direction,
      size
    } = useConfigInject("input-search", props2);
    const inputPrefixCls = computed(() => getPrefixCls("input", props2.inputPrefixCls));
    return () => {
      var _a, _b, _c, _d;
      const {
        disabled,
        loading,
        addonAfter = (_a = slots.addonAfter) === null || _a === void 0 ? void 0 : _a.call(slots),
        suffix = (_b = slots.suffix) === null || _b === void 0 ? void 0 : _b.call(slots)
      } = props2, restProps = __rest$3(props2, ["disabled", "loading", "addonAfter", "suffix"]);
      let {
        enterButton = (_d = (_c = slots.enterButton) === null || _c === void 0 ? void 0 : _c.call(slots)) !== null && _d !== void 0 ? _d : false
      } = props2;
      enterButton = enterButton || enterButton === "";
      const searchIcon = typeof enterButton === "boolean" ? createVNode(SearchOutlined, null, null) : null;
      const btnClassName = `${prefixCls.value}-button`;
      const enterButtonAsElement = Array.isArray(enterButton) ? enterButton[0] : enterButton;
      let button;
      const isAntdButton = enterButtonAsElement.type && isPlainObject(enterButtonAsElement.type) && enterButtonAsElement.type.__ANT_BUTTON;
      if (isAntdButton || enterButtonAsElement.tagName === "button") {
        button = cloneElement(enterButtonAsElement, _extends({
          onMousedown,
          onClick: onSearch,
          key: "enterButton"
        }, isAntdButton ? {
          class: btnClassName,
          size: size.value
        } : {}), false);
      } else {
        const iconOnly = searchIcon && !enterButton;
        button = createVNode(Button, {
          "class": btnClassName,
          "type": enterButton ? "primary" : void 0,
          "size": size.value,
          "disabled": disabled,
          "key": "enterButton",
          "onMousedown": onMousedown,
          "onClick": onSearch,
          "loading": loading,
          "icon": iconOnly ? searchIcon : null
        }, {
          default: () => [iconOnly ? null : searchIcon || enterButton]
        });
      }
      if (addonAfter) {
        button = [button, addonAfter];
      }
      const cls = classNames(prefixCls.value, {
        [`${prefixCls.value}-rtl`]: direction.value === "rtl",
        [`${prefixCls.value}-${size.value}`]: !!size.value,
        [`${prefixCls.value}-with-button`]: !!enterButton
      }, attrs.class);
      return createVNode(Input, _objectSpread2(_objectSpread2(_objectSpread2({
        "ref": inputRef
      }, omit(restProps, ["onUpdate:value", "onSearch", "enterButton"])), attrs), {}, {
        "onPressEnter": onPressEnter,
        "onCompositionstart": handleOnCompositionStart,
        "onCompositionend": handleOnCompositionEnd,
        "size": size.value,
        "prefixCls": inputPrefixCls.value,
        "addonAfter": button,
        "suffix": suffix,
        "onChange": onChange,
        "class": cls,
        "disabled": disabled
      }), slots);
    };
  }
});
var EyeOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" } }] }, "name": "eye", "theme": "outlined" };
const EyeOutlinedSvg = EyeOutlined$2;
function _objectSpread$5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$5(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$5(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var EyeOutlined = function EyeOutlined2(props2, context) {
  var p = _objectSpread$5({}, props2, context.attrs);
  return createVNode(AntdIcon, _objectSpread$5({}, p, {
    "icon": EyeOutlinedSvg
  }), null);
};
EyeOutlined.displayName = "EyeOutlined";
EyeOutlined.inheritAttrs = false;
const EyeOutlined$1 = EyeOutlined;
var EyeInvisibleOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z" } }, { "tag": "path", "attrs": { "d": "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z" } }] }, "name": "eye-invisible", "theme": "outlined" };
const EyeInvisibleOutlinedSvg = EyeInvisibleOutlined$2;
function _objectSpread$4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
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
var EyeInvisibleOutlined = function EyeInvisibleOutlined2(props2, context) {
  var p = _objectSpread$4({}, props2, context.attrs);
  return createVNode(AntdIcon, _objectSpread$4({}, p, {
    "icon": EyeInvisibleOutlinedSvg
  }), null);
};
EyeInvisibleOutlined.displayName = "EyeInvisibleOutlined";
EyeInvisibleOutlined.inheritAttrs = false;
const EyeInvisibleOutlined$1 = EyeInvisibleOutlined;
var __rest$2 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
const ActionMap = {
  click: "onClick",
  hover: "onMouseover"
};
const defaultIconRender = (visible) => visible ? createVNode(EyeOutlined$1, null, null) : createVNode(EyeInvisibleOutlined$1, null, null);
const Password = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "AInputPassword",
  inheritAttrs: false,
  props: _extends(_extends({}, inputProps$2()), {
    prefixCls: String,
    inputPrefixCls: String,
    action: {
      type: String,
      default: "click"
    },
    visibilityToggle: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    "onUpdate:visible": Function,
    iconRender: Function
  }),
  setup(props2, _ref) {
    let {
      slots,
      attrs,
      expose,
      emit
    } = _ref;
    const visible = shallowRef(false);
    const onVisibleChange = () => {
      const {
        disabled
      } = props2;
      if (disabled) {
        return;
      }
      visible.value = !visible.value;
      emit("update:visible", visible.value);
    };
    watchEffect(() => {
      if (props2.visible !== void 0) {
        visible.value = !!props2.visible;
      }
    });
    const inputRef = shallowRef();
    const focus = () => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.focus();
    };
    const blur = () => {
      var _a;
      (_a = inputRef.value) === null || _a === void 0 ? void 0 : _a.blur();
    };
    expose({
      focus,
      blur
    });
    const getIcon = (prefixCls2) => {
      const {
        action,
        iconRender = slots.iconRender || defaultIconRender
      } = props2;
      const iconTrigger = ActionMap[action] || "";
      const icon = iconRender(visible.value);
      const iconProps = {
        [iconTrigger]: onVisibleChange,
        class: `${prefixCls2}-icon`,
        key: "passwordIcon",
        onMousedown: (e) => {
          e.preventDefault();
        },
        onMouseup: (e) => {
          e.preventDefault();
        }
      };
      return cloneElement(isValidElement(icon) ? icon : createVNode("span", null, [icon]), iconProps);
    };
    const {
      prefixCls,
      getPrefixCls
    } = useConfigInject("input-password", props2);
    const inputPrefixCls = computed(() => getPrefixCls("input", props2.inputPrefixCls));
    const renderPassword = () => {
      const {
        size,
        visibilityToggle
      } = props2, restProps = __rest$2(props2, ["size", "visibilityToggle"]);
      const suffixIcon = visibilityToggle && getIcon(prefixCls.value);
      const inputClassName = classNames(prefixCls.value, attrs.class, {
        [`${prefixCls.value}-${size}`]: !!size
      });
      const omittedProps = _extends(_extends(_extends({}, omit(restProps, ["suffix", "iconRender", "action"])), attrs), {
        type: visible.value ? "text" : "password",
        class: inputClassName,
        prefixCls: inputPrefixCls.value,
        suffix: suffixIcon
      });
      if (size) {
        omittedProps.size = size;
      }
      return createVNode(Input, _objectSpread2({
        "ref": inputRef
      }, omittedProps), slots);
    };
    return () => {
      return renderPassword();
    };
  }
});
Input.Group = Group;
Input.Search = Search;
Input.TextArea = TextArea;
Input.Password = Password;
Input.install = function(app) {
  app.component(Input.name, Input);
  app.component(Input.Group.name, Input.Group);
  app.component(Input.Search.name, Input.Search);
  app.component(Input.TextArea.name, Input.TextArea);
  app.component(Input.Password.name, Input.Password);
  return app;
};
var DoubleLeftOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z" } }] }, "name": "double-left", "theme": "outlined" };
const DoubleLeftOutlinedSvg = DoubleLeftOutlined$2;
function _objectSpread$3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
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
var DoubleLeftOutlined = function DoubleLeftOutlined2(props2, context) {
  var p = _objectSpread$3({}, props2, context.attrs);
  return createVNode(AntdIcon, _objectSpread$3({}, p, {
    "icon": DoubleLeftOutlinedSvg
  }), null);
};
DoubleLeftOutlined.displayName = "DoubleLeftOutlined";
DoubleLeftOutlined.inheritAttrs = false;
const DoubleLeftOutlined$1 = DoubleLeftOutlined;
var DoubleRightOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z" } }] }, "name": "double-right", "theme": "outlined" };
const DoubleRightOutlinedSvg = DoubleRightOutlined$2;
function _objectSpread$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
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
var DoubleRightOutlined = function DoubleRightOutlined2(props2, context) {
  var p = _objectSpread$2({}, props2, context.attrs);
  return createVNode(AntdIcon, _objectSpread$2({}, p, {
    "icon": DoubleRightOutlinedSvg
  }), null);
};
DoubleRightOutlined.displayName = "DoubleRightOutlined";
DoubleRightOutlined.inheritAttrs = false;
const DoubleRightOutlined$1 = DoubleRightOutlined;
const MiniSelect = defineComponent({
  name: "MiniSelect",
  compatConfig: {
    MODE: 3
  },
  inheritAttrs: false,
  props: selectProps(),
  Option: VcSelect.Option,
  setup(props2, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    return () => {
      const selelctProps = _extends(_extends(_extends({}, props2), {
        size: "small"
      }), attrs);
      return createVNode(VcSelect, selelctProps, slots);
    };
  }
});
const MiddleSelect = defineComponent({
  name: "MiddleSelect",
  inheritAttrs: false,
  props: selectProps(),
  Option: VcSelect.Option,
  setup(props2, _ref2) {
    let {
      attrs,
      slots
    } = _ref2;
    return () => {
      const selelctProps = _extends(_extends(_extends({}, props2), {
        size: "middle"
      }), attrs);
      return createVNode(VcSelect, selelctProps, slots);
    };
  }
});
const Pager = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Pager",
  inheritAttrs: false,
  props: {
    rootPrefixCls: String,
    page: Number,
    active: {
      type: Boolean,
      default: void 0
    },
    last: {
      type: Boolean,
      default: void 0
    },
    locale: PropTypes.object,
    showTitle: {
      type: Boolean,
      default: void 0
    },
    itemRender: {
      type: Function,
      default: () => {
      }
    },
    onClick: {
      type: Function
    },
    onKeypress: {
      type: Function
    }
  },
  eimt: ["click", "keypress"],
  setup(props2, _ref) {
    let {
      emit,
      attrs
    } = _ref;
    const handleClick = () => {
      emit("click", props2.page);
    };
    const handleKeyPress = (event) => {
      emit("keypress", event, handleClick, props2.page);
    };
    return () => {
      const {
        showTitle,
        page,
        itemRender
      } = props2;
      const {
        class: _cls,
        style
      } = attrs;
      const prefixCls = `${props2.rootPrefixCls}-item`;
      const cls = classNames(prefixCls, `${prefixCls}-${props2.page}`, {
        [`${prefixCls}-active`]: props2.active,
        [`${prefixCls}-disabled`]: !props2.page
      }, _cls);
      return createVNode("li", {
        "onClick": handleClick,
        "onKeypress": handleKeyPress,
        "title": showTitle ? String(page) : null,
        "tabindex": "0",
        "class": cls,
        "style": style
      }, [itemRender({
        page,
        type: "page",
        originalElement: createVNode("a", {
          "rel": "nofollow"
        }, [page])
      })]);
    };
  }
});
const KEYCODE = {
  ZERO: 48,
  NINE: 57,
  NUMPAD_ZERO: 96,
  NUMPAD_NINE: 105,
  BACKSPACE: 8,
  DELETE: 46,
  ENTER: 13,
  ARROW_UP: 38,
  ARROW_DOWN: 40
};
const Options = defineComponent({
  compatConfig: {
    MODE: 3
  },
  props: {
    disabled: {
      type: Boolean,
      default: void 0
    },
    changeSize: Function,
    quickGo: Function,
    selectComponentClass: PropTypes.any,
    current: Number,
    pageSizeOptions: PropTypes.array.def(["10", "20", "50", "100"]),
    pageSize: Number,
    buildOptionText: Function,
    locale: PropTypes.object,
    rootPrefixCls: String,
    selectPrefixCls: String,
    goButton: PropTypes.any
  },
  setup(props2) {
    const goInputText = ref("");
    const validValue = computed(() => {
      return !goInputText.value || isNaN(goInputText.value) ? void 0 : Number(goInputText.value);
    });
    const defaultBuildOptionText = (opt) => {
      return `${opt.value} ${props2.locale.items_per_page}`;
    };
    const handleChange = (e) => {
      const {
        value
      } = e.target;
      if (goInputText.value === value)
        return;
      goInputText.value = value;
    };
    const handleBlur = (e) => {
      const {
        goButton,
        quickGo,
        rootPrefixCls
      } = props2;
      if (goButton || goInputText.value === "") {
        return;
      }
      if (e.relatedTarget && (e.relatedTarget.className.indexOf(`${rootPrefixCls}-item-link`) >= 0 || e.relatedTarget.className.indexOf(`${rootPrefixCls}-item`) >= 0)) {
        goInputText.value = "";
        return;
      } else {
        quickGo(validValue.value);
        goInputText.value = "";
      }
    };
    const go = (e) => {
      if (goInputText.value === "") {
        return;
      }
      if (e.keyCode === KEYCODE.ENTER || e.type === "click") {
        props2.quickGo(validValue.value);
        goInputText.value = "";
      }
    };
    const pageSizeOptions = computed(() => {
      const {
        pageSize: pageSize2,
        pageSizeOptions: pageSizeOptions2
      } = props2;
      if (pageSizeOptions2.some((option) => option.toString() === pageSize2.toString())) {
        return pageSizeOptions2;
      }
      return pageSizeOptions2.concat([pageSize2.toString()]).sort((a, b) => {
        const numberA = isNaN(Number(a)) ? 0 : Number(a);
        const numberB = isNaN(Number(b)) ? 0 : Number(b);
        return numberA - numberB;
      });
    });
    return () => {
      const {
        rootPrefixCls,
        locale,
        changeSize,
        quickGo,
        goButton,
        selectComponentClass: Select2,
        selectPrefixCls,
        pageSize: pageSize2,
        disabled
      } = props2;
      const prefixCls = `${rootPrefixCls}-options`;
      let changeSelect = null;
      let goInput = null;
      let gotoButton = null;
      if (!changeSize && !quickGo) {
        return null;
      }
      if (changeSize && Select2) {
        const buildOptionText = props2.buildOptionText || defaultBuildOptionText;
        const options = pageSizeOptions.value.map((opt, i) => createVNode(Select2.Option, {
          "key": i,
          "value": opt
        }, {
          default: () => [buildOptionText({
            value: opt
          })]
        }));
        changeSelect = createVNode(Select2, {
          "disabled": disabled,
          "prefixCls": selectPrefixCls,
          "showSearch": false,
          "class": `${prefixCls}-size-changer`,
          "optionLabelProp": "children",
          "value": (pageSize2 || pageSizeOptions.value[0]).toString(),
          "onChange": (value) => changeSize(Number(value)),
          "getPopupContainer": (triggerNode) => triggerNode.parentNode
        }, {
          default: () => [options]
        });
      }
      if (quickGo) {
        if (goButton) {
          gotoButton = typeof goButton === "boolean" ? createVNode("button", {
            "type": "button",
            "onClick": go,
            "onKeyup": go,
            "disabled": disabled,
            "class": `${prefixCls}-quick-jumper-button`
          }, [locale.jump_to_confirm]) : createVNode("span", {
            "onClick": go,
            "onKeyup": go
          }, [goButton]);
        }
        goInput = createVNode("div", {
          "class": `${prefixCls}-quick-jumper`
        }, [locale.jump_to, createVNode(BaseInput$1, {
          "disabled": disabled,
          "type": "text",
          "value": goInputText.value,
          "onInput": handleChange,
          "onChange": handleChange,
          "onKeyup": go,
          "onBlur": handleBlur
        }, null), locale.page, gotoButton]);
      }
      return createVNode("li", {
        "class": `${prefixCls}`
      }, [changeSelect, goInput]);
    };
  }
});
const LOCALE = {
  // Options.jsx
  items_per_page: "条/页",
  jump_to: "跳至",
  jump_to_confirm: "确定",
  page: "页",
  // Pagination.jsx
  prev_page: "上一页",
  next_page: "下一页",
  prev_5: "向前 5 页",
  next_5: "向后 5 页",
  prev_3: "向前 3 页",
  next_3: "向后 3 页"
};
var __rest$1 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function isInteger(value) {
  return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
}
function defaultItemRender(_ref) {
  let {
    originalElement
  } = _ref;
  return originalElement;
}
function calculatePage(p, state, props2) {
  const pageSize2 = typeof p === "undefined" ? state.statePageSize : p;
  return Math.floor((props2.total - 1) / pageSize2) + 1;
}
const VcPagination = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "Pagination",
  mixins: [BaseMixin],
  inheritAttrs: false,
  props: {
    disabled: {
      type: Boolean,
      default: void 0
    },
    prefixCls: PropTypes.string.def("rc-pagination"),
    selectPrefixCls: PropTypes.string.def("rc-select"),
    current: Number,
    defaultCurrent: PropTypes.number.def(1),
    total: PropTypes.number.def(0),
    pageSize: Number,
    defaultPageSize: PropTypes.number.def(10),
    hideOnSinglePage: {
      type: Boolean,
      default: false
    },
    showSizeChanger: {
      type: Boolean,
      default: void 0
    },
    showLessItems: {
      type: Boolean,
      default: false
    },
    // showSizeChange: PropTypes.func.def(noop),
    selectComponentClass: PropTypes.any,
    showPrevNextJumpers: {
      type: Boolean,
      default: true
    },
    showQuickJumper: PropTypes.oneOfType([PropTypes.looseBool, PropTypes.object]).def(false),
    showTitle: {
      type: Boolean,
      default: true
    },
    pageSizeOptions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
    buildOptionText: Function,
    showTotal: Function,
    simple: {
      type: Boolean,
      default: void 0
    },
    locale: PropTypes.object.def(LOCALE),
    itemRender: PropTypes.func.def(defaultItemRender),
    prevIcon: PropTypes.any,
    nextIcon: PropTypes.any,
    jumpPrevIcon: PropTypes.any,
    jumpNextIcon: PropTypes.any,
    totalBoundaryShowSizeChanger: PropTypes.number.def(50)
  },
  data() {
    const props2 = this.$props;
    let current = firstNotUndefined([this.current, this.defaultCurrent]);
    const pageSize2 = firstNotUndefined([this.pageSize, this.defaultPageSize]);
    current = Math.min(current, calculatePage(pageSize2, void 0, props2));
    return {
      stateCurrent: current,
      stateCurrentInputValue: current,
      statePageSize: pageSize2
    };
  },
  watch: {
    current(val) {
      this.setState({
        stateCurrent: val,
        stateCurrentInputValue: val
      });
    },
    pageSize(val) {
      const newState = {};
      let current = this.stateCurrent;
      const newCurrent = calculatePage(val, this.$data, this.$props);
      current = current > newCurrent ? newCurrent : current;
      if (!hasProp(this, "current")) {
        newState.stateCurrent = current;
        newState.stateCurrentInputValue = current;
      }
      newState.statePageSize = val;
      this.setState(newState);
    },
    stateCurrent(_val, oldValue) {
      this.$nextTick(() => {
        if (this.$refs.paginationNode) {
          const lastCurrentNode = this.$refs.paginationNode.querySelector(`.${this.prefixCls}-item-${oldValue}`);
          if (lastCurrentNode && document.activeElement === lastCurrentNode) {
            lastCurrentNode.blur();
          }
        }
      });
    },
    total() {
      const newState = {};
      const newCurrent = calculatePage(this.pageSize, this.$data, this.$props);
      if (hasProp(this, "current")) {
        const current = Math.min(this.current, newCurrent);
        newState.stateCurrent = current;
        newState.stateCurrentInputValue = current;
      } else {
        let current = this.stateCurrent;
        if (current === 0 && newCurrent > 0) {
          current = 1;
        } else {
          current = Math.min(this.stateCurrent, newCurrent);
        }
        newState.stateCurrent = current;
      }
      this.setState(newState);
    }
  },
  methods: {
    getJumpPrevPage() {
      return Math.max(1, this.stateCurrent - (this.showLessItems ? 3 : 5));
    },
    getJumpNextPage() {
      return Math.min(calculatePage(void 0, this.$data, this.$props), this.stateCurrent + (this.showLessItems ? 3 : 5));
    },
    getItemIcon(icon, label) {
      const {
        prefixCls
      } = this.$props;
      const iconNode = getComponent(this, icon, this.$props) || createVNode("button", {
        "type": "button",
        "aria-label": label,
        "class": `${prefixCls}-item-link`
      }, null);
      return iconNode;
    },
    getValidValue(e) {
      const inputValue = e.target.value;
      const allPages = calculatePage(void 0, this.$data, this.$props);
      const {
        stateCurrentInputValue
      } = this.$data;
      let value;
      if (inputValue === "") {
        value = inputValue;
      } else if (isNaN(Number(inputValue))) {
        value = stateCurrentInputValue;
      } else if (inputValue >= allPages) {
        value = allPages;
      } else {
        value = Number(inputValue);
      }
      return value;
    },
    isValid(page) {
      return isInteger(page) && page !== this.stateCurrent;
    },
    shouldDisplayQuickJumper() {
      const {
        showQuickJumper,
        pageSize: pageSize2,
        total
      } = this.$props;
      if (total <= pageSize2) {
        return false;
      }
      return showQuickJumper;
    },
    // calculatePage (p) {
    //   let pageSize = p
    //   if (typeof pageSize === 'undefined') {
    //     pageSize = this.statePageSize
    //   }
    //   return Math.floor((this.total - 1) / pageSize) + 1
    // },
    handleKeyDown(event) {
      if (event.keyCode === KEYCODE.ARROW_UP || event.keyCode === KEYCODE.ARROW_DOWN) {
        event.preventDefault();
      }
    },
    handleKeyUp(e) {
      const value = this.getValidValue(e);
      const stateCurrentInputValue = this.stateCurrentInputValue;
      if (value !== stateCurrentInputValue) {
        this.setState({
          stateCurrentInputValue: value
        });
      }
      if (e.keyCode === KEYCODE.ENTER) {
        this.handleChange(value);
      } else if (e.keyCode === KEYCODE.ARROW_UP) {
        this.handleChange(value - 1);
      } else if (e.keyCode === KEYCODE.ARROW_DOWN) {
        this.handleChange(value + 1);
      }
    },
    changePageSize(size) {
      let current = this.stateCurrent;
      const preCurrent = current;
      const newCurrent = calculatePage(size, this.$data, this.$props);
      current = current > newCurrent ? newCurrent : current;
      if (newCurrent === 0) {
        current = this.stateCurrent;
      }
      if (typeof size === "number") {
        if (!hasProp(this, "pageSize")) {
          this.setState({
            statePageSize: size
          });
        }
        if (!hasProp(this, "current")) {
          this.setState({
            stateCurrent: current,
            stateCurrentInputValue: current
          });
        }
      }
      this.__emit("update:pageSize", size);
      if (current !== preCurrent) {
        this.__emit("update:current", current);
      }
      this.__emit("showSizeChange", current, size);
      this.__emit("change", current, size);
    },
    handleChange(p) {
      const {
        disabled
      } = this.$props;
      let page = p;
      if (this.isValid(page) && !disabled) {
        const currentPage = calculatePage(void 0, this.$data, this.$props);
        if (page > currentPage) {
          page = currentPage;
        } else if (page < 1) {
          page = 1;
        }
        if (!hasProp(this, "current")) {
          this.setState({
            stateCurrent: page,
            stateCurrentInputValue: page
          });
        }
        this.__emit("update:current", page);
        this.__emit("change", page, this.statePageSize);
        return page;
      }
      return this.stateCurrent;
    },
    prev() {
      if (this.hasPrev()) {
        this.handleChange(this.stateCurrent - 1);
      }
    },
    next() {
      if (this.hasNext()) {
        this.handleChange(this.stateCurrent + 1);
      }
    },
    jumpPrev() {
      this.handleChange(this.getJumpPrevPage());
    },
    jumpNext() {
      this.handleChange(this.getJumpNextPage());
    },
    hasPrev() {
      return this.stateCurrent > 1;
    },
    hasNext() {
      return this.stateCurrent < calculatePage(void 0, this.$data, this.$props);
    },
    getShowSizeChanger() {
      const {
        showSizeChanger,
        total,
        totalBoundaryShowSizeChanger
      } = this.$props;
      if (typeof showSizeChanger !== "undefined") {
        return showSizeChanger;
      }
      return total > totalBoundaryShowSizeChanger;
    },
    runIfEnter(event, callback) {
      if (event.key === "Enter" || event.charCode === 13) {
        event.preventDefault();
        for (var _len = arguments.length, restParams = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          restParams[_key - 2] = arguments[_key];
        }
        callback(...restParams);
      }
    },
    runIfEnterPrev(event) {
      this.runIfEnter(event, this.prev);
    },
    runIfEnterNext(event) {
      this.runIfEnter(event, this.next);
    },
    runIfEnterJumpPrev(event) {
      this.runIfEnter(event, this.jumpPrev);
    },
    runIfEnterJumpNext(event) {
      this.runIfEnter(event, this.jumpNext);
    },
    handleGoTO(event) {
      if (event.keyCode === KEYCODE.ENTER || event.type === "click") {
        this.handleChange(this.stateCurrentInputValue);
      }
    },
    renderPrev(prevPage) {
      const {
        itemRender
      } = this.$props;
      const prevButton = itemRender({
        page: prevPage,
        type: "prev",
        originalElement: this.getItemIcon("prevIcon", "prev page")
      });
      const disabled = !this.hasPrev();
      return isValidElement(prevButton) ? cloneElement(prevButton, disabled ? {
        disabled
      } : {}) : prevButton;
    },
    renderNext(nextPage) {
      const {
        itemRender
      } = this.$props;
      const nextButton = itemRender({
        page: nextPage,
        type: "next",
        originalElement: this.getItemIcon("nextIcon", "next page")
      });
      const disabled = !this.hasNext();
      return isValidElement(nextButton) ? cloneElement(nextButton, disabled ? {
        disabled
      } : {}) : nextButton;
    }
  },
  render() {
    const {
      prefixCls,
      disabled,
      hideOnSinglePage,
      total,
      locale,
      showQuickJumper,
      showLessItems,
      showTitle,
      showTotal,
      simple,
      itemRender,
      showPrevNextJumpers,
      jumpPrevIcon,
      jumpNextIcon,
      selectComponentClass,
      selectPrefixCls,
      pageSizeOptions
    } = this.$props;
    const {
      stateCurrent,
      statePageSize
    } = this;
    const _a = splitAttrs(this.$attrs).extraAttrs, {
      class: className
    } = _a, restAttrs = __rest$1(_a, ["class"]);
    if (hideOnSinglePage === true && this.total <= statePageSize) {
      return null;
    }
    const allPages = calculatePage(void 0, this.$data, this.$props);
    const pagerList = [];
    let jumpPrev = null;
    let jumpNext = null;
    let firstPager = null;
    let lastPager = null;
    let gotoButton = null;
    const goButton = showQuickJumper && showQuickJumper.goButton;
    const pageBufferSize = showLessItems ? 1 : 2;
    const prevPage = stateCurrent - 1 > 0 ? stateCurrent - 1 : 0;
    const nextPage = stateCurrent + 1 < allPages ? stateCurrent + 1 : allPages;
    const hasPrev = this.hasPrev();
    const hasNext = this.hasNext();
    if (simple) {
      if (goButton) {
        if (typeof goButton === "boolean") {
          gotoButton = createVNode("button", {
            "type": "button",
            "onClick": this.handleGoTO,
            "onKeyup": this.handleGoTO
          }, [locale.jump_to_confirm]);
        } else {
          gotoButton = createVNode("span", {
            "onClick": this.handleGoTO,
            "onKeyup": this.handleGoTO
          }, [goButton]);
        }
        gotoButton = createVNode("li", {
          "title": showTitle ? `${locale.jump_to}${stateCurrent}/${allPages}` : null,
          "class": `${prefixCls}-simple-pager`
        }, [gotoButton]);
      }
      return createVNode("ul", _objectSpread2({
        "class": classNames(`${prefixCls} ${prefixCls}-simple`, {
          [`${prefixCls}-disabled`]: disabled
        }, className)
      }, restAttrs), [createVNode("li", {
        "title": showTitle ? locale.prev_page : null,
        "onClick": this.prev,
        "tabindex": hasPrev ? 0 : null,
        "onKeypress": this.runIfEnterPrev,
        "class": classNames(`${prefixCls}-prev`, {
          [`${prefixCls}-disabled`]: !hasPrev
        }),
        "aria-disabled": !hasPrev
      }, [this.renderPrev(prevPage)]), createVNode("li", {
        "title": showTitle ? `${stateCurrent}/${allPages}` : null,
        "class": `${prefixCls}-simple-pager`
      }, [createVNode(BaseInput$1, {
        "type": "text",
        "value": this.stateCurrentInputValue,
        "disabled": disabled,
        "onKeydown": this.handleKeyDown,
        "onKeyup": this.handleKeyUp,
        "onInput": this.handleKeyUp,
        "onChange": this.handleKeyUp,
        "size": "3"
      }, null), createVNode("span", {
        "class": `${prefixCls}-slash`
      }, [createTextVNode("／")]), allPages]), createVNode("li", {
        "title": showTitle ? locale.next_page : null,
        "onClick": this.next,
        "tabindex": hasNext ? 0 : null,
        "onKeypress": this.runIfEnterNext,
        "class": classNames(`${prefixCls}-next`, {
          [`${prefixCls}-disabled`]: !hasNext
        }),
        "aria-disabled": !hasNext
      }, [this.renderNext(nextPage)]), gotoButton]);
    }
    if (allPages <= 3 + pageBufferSize * 2) {
      const pagerProps = {
        locale,
        rootPrefixCls: prefixCls,
        showTitle,
        itemRender,
        onClick: this.handleChange,
        onKeypress: this.runIfEnter
      };
      if (!allPages) {
        pagerList.push(createVNode(Pager, _objectSpread2(_objectSpread2({}, pagerProps), {}, {
          "key": "noPager",
          "page": 1,
          "class": `${prefixCls}-item-disabled`
        }), null));
      }
      for (let i = 1; i <= allPages; i += 1) {
        const active = stateCurrent === i;
        pagerList.push(createVNode(Pager, _objectSpread2(_objectSpread2({}, pagerProps), {}, {
          "key": i,
          "page": i,
          "active": active
        }), null));
      }
    } else {
      const prevItemTitle = showLessItems ? locale.prev_3 : locale.prev_5;
      const nextItemTitle = showLessItems ? locale.next_3 : locale.next_5;
      if (showPrevNextJumpers) {
        jumpPrev = createVNode("li", {
          "title": this.showTitle ? prevItemTitle : null,
          "key": "prev",
          "onClick": this.jumpPrev,
          "tabindex": "0",
          "onKeypress": this.runIfEnterJumpPrev,
          "class": classNames(`${prefixCls}-jump-prev`, {
            [`${prefixCls}-jump-prev-custom-icon`]: !!jumpPrevIcon
          })
        }, [itemRender({
          page: this.getJumpPrevPage(),
          type: "jump-prev",
          originalElement: this.getItemIcon("jumpPrevIcon", "prev page")
        })]);
        jumpNext = createVNode("li", {
          "title": this.showTitle ? nextItemTitle : null,
          "key": "next",
          "tabindex": "0",
          "onClick": this.jumpNext,
          "onKeypress": this.runIfEnterJumpNext,
          "class": classNames(`${prefixCls}-jump-next`, {
            [`${prefixCls}-jump-next-custom-icon`]: !!jumpNextIcon
          })
        }, [itemRender({
          page: this.getJumpNextPage(),
          type: "jump-next",
          originalElement: this.getItemIcon("jumpNextIcon", "next page")
        })]);
      }
      lastPager = createVNode(Pager, {
        "locale": locale,
        "last": true,
        "rootPrefixCls": prefixCls,
        "onClick": this.handleChange,
        "onKeypress": this.runIfEnter,
        "key": allPages,
        "page": allPages,
        "active": false,
        "showTitle": showTitle,
        "itemRender": itemRender
      }, null);
      firstPager = createVNode(Pager, {
        "locale": locale,
        "rootPrefixCls": prefixCls,
        "onClick": this.handleChange,
        "onKeypress": this.runIfEnter,
        "key": 1,
        "page": 1,
        "active": false,
        "showTitle": showTitle,
        "itemRender": itemRender
      }, null);
      let left = Math.max(1, stateCurrent - pageBufferSize);
      let right = Math.min(stateCurrent + pageBufferSize, allPages);
      if (stateCurrent - 1 <= pageBufferSize) {
        right = 1 + pageBufferSize * 2;
      }
      if (allPages - stateCurrent <= pageBufferSize) {
        left = allPages - pageBufferSize * 2;
      }
      for (let i = left; i <= right; i += 1) {
        const active = stateCurrent === i;
        pagerList.push(createVNode(Pager, {
          "locale": locale,
          "rootPrefixCls": prefixCls,
          "onClick": this.handleChange,
          "onKeypress": this.runIfEnter,
          "key": i,
          "page": i,
          "active": active,
          "showTitle": showTitle,
          "itemRender": itemRender
        }, null));
      }
      if (stateCurrent - 1 >= pageBufferSize * 2 && stateCurrent !== 1 + 2) {
        pagerList[0] = createVNode(Pager, {
          "locale": locale,
          "rootPrefixCls": prefixCls,
          "onClick": this.handleChange,
          "onKeypress": this.runIfEnter,
          "key": left,
          "page": left,
          "class": `${prefixCls}-item-after-jump-prev`,
          "active": false,
          "showTitle": this.showTitle,
          "itemRender": itemRender
        }, null);
        pagerList.unshift(jumpPrev);
      }
      if (allPages - stateCurrent >= pageBufferSize * 2 && stateCurrent !== allPages - 2) {
        pagerList[pagerList.length - 1] = createVNode(Pager, {
          "locale": locale,
          "rootPrefixCls": prefixCls,
          "onClick": this.handleChange,
          "onKeypress": this.runIfEnter,
          "key": right,
          "page": right,
          "class": `${prefixCls}-item-before-jump-next`,
          "active": false,
          "showTitle": this.showTitle,
          "itemRender": itemRender
        }, null);
        pagerList.push(jumpNext);
      }
      if (left !== 1) {
        pagerList.unshift(firstPager);
      }
      if (right !== allPages) {
        pagerList.push(lastPager);
      }
    }
    let totalText = null;
    if (showTotal) {
      totalText = createVNode("li", {
        "class": `${prefixCls}-total-text`
      }, [showTotal(total, [total === 0 ? 0 : (stateCurrent - 1) * statePageSize + 1, stateCurrent * statePageSize > total ? total : stateCurrent * statePageSize])]);
    }
    const prevDisabled = !hasPrev || !allPages;
    const nextDisabled = !hasNext || !allPages;
    const buildOptionText = this.buildOptionText || this.$slots.buildOptionText;
    return createVNode("ul", _objectSpread2(_objectSpread2({
      "unselectable": "on",
      "ref": "paginationNode"
    }, restAttrs), {}, {
      "class": classNames({
        [`${prefixCls}`]: true,
        [`${prefixCls}-disabled`]: disabled
      }, className)
    }), [totalText, createVNode("li", {
      "title": showTitle ? locale.prev_page : null,
      "onClick": this.prev,
      "tabindex": prevDisabled ? null : 0,
      "onKeypress": this.runIfEnterPrev,
      "class": classNames(`${prefixCls}-prev`, {
        [`${prefixCls}-disabled`]: prevDisabled
      }),
      "aria-disabled": prevDisabled
    }, [this.renderPrev(prevPage)]), pagerList, createVNode("li", {
      "title": showTitle ? locale.next_page : null,
      "onClick": this.next,
      "tabindex": nextDisabled ? null : 0,
      "onKeypress": this.runIfEnterNext,
      "class": classNames(`${prefixCls}-next`, {
        [`${prefixCls}-disabled`]: nextDisabled
      }),
      "aria-disabled": nextDisabled
    }, [this.renderNext(nextPage)]), createVNode(Options, {
      "disabled": disabled,
      "locale": locale,
      "rootPrefixCls": prefixCls,
      "selectComponentClass": selectComponentClass,
      "selectPrefixCls": selectPrefixCls,
      "changeSize": this.getShowSizeChanger() ? this.changePageSize : null,
      "current": stateCurrent,
      "pageSize": statePageSize,
      "pageSizeOptions": pageSizeOptions,
      "buildOptionText": buildOptionText || null,
      "quickGo": this.shouldDisplayQuickJumper() ? this.handleChange : null,
      "goButton": goButton
    }, null)]);
  }
});
const genPaginationDisabledStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-disabled`]: {
      "&, &:hover": {
        cursor: "not-allowed",
        [`${componentCls}-item-link`]: {
          color: token.colorTextDisabled,
          cursor: "not-allowed"
        }
      },
      "&:focus-visible": {
        cursor: "not-allowed",
        [`${componentCls}-item-link`]: {
          color: token.colorTextDisabled,
          cursor: "not-allowed"
        }
      }
    },
    [`&${componentCls}-disabled`]: {
      cursor: "not-allowed",
      [`&${componentCls}-mini`]: {
        [`
          &:hover ${componentCls}-item:not(${componentCls}-item-active),
          &:active ${componentCls}-item:not(${componentCls}-item-active),
          &:hover ${componentCls}-item-link,
          &:active ${componentCls}-item-link
        `]: {
          backgroundColor: "transparent"
        }
      },
      [`${componentCls}-item`]: {
        cursor: "not-allowed",
        "&:hover, &:active": {
          backgroundColor: "transparent"
        },
        a: {
          color: token.colorTextDisabled,
          backgroundColor: "transparent",
          border: "none",
          cursor: "not-allowed"
        },
        "&-active": {
          borderColor: token.colorBorder,
          backgroundColor: token.paginationItemDisabledBgActive,
          "&:hover, &:active": {
            backgroundColor: token.paginationItemDisabledBgActive
          },
          a: {
            color: token.paginationItemDisabledColorActive
          }
        }
      },
      [`${componentCls}-item-link`]: {
        color: token.colorTextDisabled,
        cursor: "not-allowed",
        "&:hover, &:active": {
          backgroundColor: "transparent"
        },
        [`${componentCls}-simple&`]: {
          backgroundColor: "transparent",
          "&:hover, &:active": {
            backgroundColor: "transparent"
          }
        }
      },
      [`${componentCls}-simple-pager`]: {
        color: token.colorTextDisabled
      },
      [`${componentCls}-jump-prev, ${componentCls}-jump-next`]: {
        [`${componentCls}-item-link-icon`]: {
          opacity: 0
        },
        [`${componentCls}-item-ellipsis`]: {
          opacity: 1
        }
      }
    },
    [`&${componentCls}-simple`]: {
      [`${componentCls}-prev, ${componentCls}-next`]: {
        [`&${componentCls}-disabled ${componentCls}-item-link`]: {
          "&:hover, &:active": {
            backgroundColor: "transparent"
          }
        }
      }
    }
  };
};
const genPaginationMiniStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`&${componentCls}-mini ${componentCls}-total-text, &${componentCls}-mini ${componentCls}-simple-pager`]: {
      height: token.paginationItemSizeSM,
      lineHeight: `${token.paginationItemSizeSM}px`
    },
    [`&${componentCls}-mini ${componentCls}-item`]: {
      minWidth: token.paginationItemSizeSM,
      height: token.paginationItemSizeSM,
      margin: 0,
      lineHeight: `${token.paginationItemSizeSM - 2}px`
    },
    [`&${componentCls}-mini ${componentCls}-item:not(${componentCls}-item-active)`]: {
      backgroundColor: "transparent",
      borderColor: "transparent",
      "&:hover": {
        backgroundColor: token.colorBgTextHover
      },
      "&:active": {
        backgroundColor: token.colorBgTextActive
      }
    },
    [`&${componentCls}-mini ${componentCls}-prev, &${componentCls}-mini ${componentCls}-next`]: {
      minWidth: token.paginationItemSizeSM,
      height: token.paginationItemSizeSM,
      margin: 0,
      lineHeight: `${token.paginationItemSizeSM}px`,
      [`&:hover ${componentCls}-item-link`]: {
        backgroundColor: token.colorBgTextHover
      },
      [`&:active ${componentCls}-item-link`]: {
        backgroundColor: token.colorBgTextActive
      },
      [`&${componentCls}-disabled:hover ${componentCls}-item-link`]: {
        backgroundColor: "transparent"
      }
    },
    [`
    &${componentCls}-mini ${componentCls}-prev ${componentCls}-item-link,
    &${componentCls}-mini ${componentCls}-next ${componentCls}-item-link
    `]: {
      backgroundColor: "transparent",
      borderColor: "transparent",
      "&::after": {
        height: token.paginationItemSizeSM,
        lineHeight: `${token.paginationItemSizeSM}px`
      }
    },
    [`&${componentCls}-mini ${componentCls}-jump-prev, &${componentCls}-mini ${componentCls}-jump-next`]: {
      height: token.paginationItemSizeSM,
      marginInlineEnd: 0,
      lineHeight: `${token.paginationItemSizeSM}px`
    },
    [`&${componentCls}-mini ${componentCls}-options`]: {
      marginInlineStart: token.paginationMiniOptionsMarginInlineStart,
      [`&-size-changer`]: {
        top: token.paginationMiniOptionsSizeChangerTop
      },
      [`&-quick-jumper`]: {
        height: token.paginationItemSizeSM,
        lineHeight: `${token.paginationItemSizeSM}px`,
        input: _extends(_extends({}, genInputSmallStyle(token)), {
          width: token.paginationMiniQuickJumperInputWidth,
          height: token.controlHeightSM
        })
      }
    }
  };
};
const genPaginationSimpleStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`
    &${componentCls}-simple ${componentCls}-prev,
    &${componentCls}-simple ${componentCls}-next
    `]: {
      height: token.paginationItemSizeSM,
      lineHeight: `${token.paginationItemSizeSM}px`,
      verticalAlign: "top",
      [`${componentCls}-item-link`]: {
        height: token.paginationItemSizeSM,
        backgroundColor: "transparent",
        border: 0,
        "&:hover": {
          backgroundColor: token.colorBgTextHover
        },
        "&:active": {
          backgroundColor: token.colorBgTextActive
        },
        "&::after": {
          height: token.paginationItemSizeSM,
          lineHeight: `${token.paginationItemSizeSM}px`
        }
      }
    },
    [`&${componentCls}-simple ${componentCls}-simple-pager`]: {
      display: "inline-block",
      height: token.paginationItemSizeSM,
      marginInlineEnd: token.marginXS,
      input: {
        boxSizing: "border-box",
        height: "100%",
        marginInlineEnd: token.marginXS,
        padding: `0 ${token.paginationItemPaddingInline}px`,
        textAlign: "center",
        backgroundColor: token.paginationItemInputBg,
        border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
        borderRadius: token.borderRadius,
        outline: "none",
        transition: `border-color ${token.motionDurationMid}`,
        color: "inherit",
        "&:hover": {
          borderColor: token.colorPrimary
        },
        "&:focus": {
          borderColor: token.colorPrimaryHover,
          boxShadow: `${token.inputOutlineOffset}px 0 ${token.controlOutlineWidth}px ${token.controlOutline}`
        },
        "&[disabled]": {
          color: token.colorTextDisabled,
          backgroundColor: token.colorBgContainerDisabled,
          borderColor: token.colorBorder,
          cursor: "not-allowed"
        }
      }
    }
  };
};
const genPaginationJumpStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-jump-prev, ${componentCls}-jump-next`]: {
      outline: 0,
      [`${componentCls}-item-container`]: {
        position: "relative",
        [`${componentCls}-item-link-icon`]: {
          color: token.colorPrimary,
          fontSize: token.fontSizeSM,
          opacity: 0,
          transition: `all ${token.motionDurationMid}`,
          "&-svg": {
            top: 0,
            insetInlineEnd: 0,
            bottom: 0,
            insetInlineStart: 0,
            margin: "auto"
          }
        },
        [`${componentCls}-item-ellipsis`]: {
          position: "absolute",
          top: 0,
          insetInlineEnd: 0,
          bottom: 0,
          insetInlineStart: 0,
          display: "block",
          margin: "auto",
          color: token.colorTextDisabled,
          fontFamily: "Arial, Helvetica, sans-serif",
          letterSpacing: token.paginationEllipsisLetterSpacing,
          textAlign: "center",
          textIndent: token.paginationEllipsisTextIndent,
          opacity: 1,
          transition: `all ${token.motionDurationMid}`
        }
      },
      "&:hover": {
        [`${componentCls}-item-link-icon`]: {
          opacity: 1
        },
        [`${componentCls}-item-ellipsis`]: {
          opacity: 0
        }
      },
      "&:focus-visible": _extends({
        [`${componentCls}-item-link-icon`]: {
          opacity: 1
        },
        [`${componentCls}-item-ellipsis`]: {
          opacity: 0
        }
      }, genFocusOutline(token))
    },
    [`
    ${componentCls}-prev,
    ${componentCls}-jump-prev,
    ${componentCls}-jump-next
    `]: {
      marginInlineEnd: token.marginXS
    },
    [`
    ${componentCls}-prev,
    ${componentCls}-next,
    ${componentCls}-jump-prev,
    ${componentCls}-jump-next
    `]: {
      display: "inline-block",
      minWidth: token.paginationItemSize,
      height: token.paginationItemSize,
      color: token.colorText,
      fontFamily: token.paginationFontFamily,
      lineHeight: `${token.paginationItemSize}px`,
      textAlign: "center",
      verticalAlign: "middle",
      listStyle: "none",
      borderRadius: token.borderRadius,
      cursor: "pointer",
      transition: `all ${token.motionDurationMid}`
    },
    [`${componentCls}-prev, ${componentCls}-next`]: {
      fontFamily: "Arial, Helvetica, sans-serif",
      outline: 0,
      button: {
        color: token.colorText,
        cursor: "pointer",
        userSelect: "none"
      },
      [`${componentCls}-item-link`]: {
        display: "block",
        width: "100%",
        height: "100%",
        padding: 0,
        fontSize: token.fontSizeSM,
        textAlign: "center",
        backgroundColor: "transparent",
        border: `${token.lineWidth}px ${token.lineType} transparent`,
        borderRadius: token.borderRadius,
        outline: "none",
        transition: `all ${token.motionDurationMid}`
      },
      [`&:focus-visible ${componentCls}-item-link`]: _extends({}, genFocusOutline(token)),
      [`&:hover ${componentCls}-item-link`]: {
        backgroundColor: token.colorBgTextHover
      },
      [`&:active ${componentCls}-item-link`]: {
        backgroundColor: token.colorBgTextActive
      },
      [`&${componentCls}-disabled:hover`]: {
        [`${componentCls}-item-link`]: {
          backgroundColor: "transparent"
        }
      }
    },
    [`${componentCls}-slash`]: {
      marginInlineEnd: token.paginationSlashMarginInlineEnd,
      marginInlineStart: token.paginationSlashMarginInlineStart
    },
    [`${componentCls}-options`]: {
      display: "inline-block",
      marginInlineStart: token.margin,
      verticalAlign: "middle",
      "&-size-changer.-select": {
        display: "inline-block",
        width: "auto"
      },
      "&-quick-jumper": {
        display: "inline-block",
        height: token.controlHeight,
        marginInlineStart: token.marginXS,
        lineHeight: `${token.controlHeight}px`,
        verticalAlign: "top",
        input: _extends(_extends({}, genBasicInputStyle(token)), {
          width: token.controlHeightLG * 1.25,
          height: token.controlHeight,
          boxSizing: "border-box",
          margin: 0,
          marginInlineStart: token.marginXS,
          marginInlineEnd: token.marginXS
        })
      }
    }
  };
};
const genPaginationItemStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-item`]: _extends(_extends({
      display: "inline-block",
      minWidth: token.paginationItemSize,
      height: token.paginationItemSize,
      marginInlineEnd: token.marginXS,
      fontFamily: token.paginationFontFamily,
      lineHeight: `${token.paginationItemSize - 2}px`,
      textAlign: "center",
      verticalAlign: "middle",
      listStyle: "none",
      backgroundColor: "transparent",
      border: `${token.lineWidth}px ${token.lineType} transparent`,
      borderRadius: token.borderRadius,
      outline: 0,
      cursor: "pointer",
      userSelect: "none",
      a: {
        display: "block",
        padding: `0 ${token.paginationItemPaddingInline}px`,
        color: token.colorText,
        transition: "none",
        "&:hover": {
          textDecoration: "none"
        }
      },
      [`&:not(${componentCls}-item-active)`]: {
        "&:hover": {
          transition: `all ${token.motionDurationMid}`,
          backgroundColor: token.colorBgTextHover
        },
        "&:active": {
          backgroundColor: token.colorBgTextActive
        }
      }
    }, genFocusStyle(token)), {
      "&-active": {
        fontWeight: token.paginationFontWeightActive,
        backgroundColor: token.paginationItemBgActive,
        borderColor: token.colorPrimary,
        a: {
          color: token.colorPrimary
        },
        "&:hover": {
          borderColor: token.colorPrimaryHover
        },
        "&:hover a": {
          color: token.colorPrimaryHover
        }
      }
    })
  };
};
const genPaginationStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: _extends(_extends(_extends(_extends(_extends(_extends(_extends(_extends({}, resetComponent(token)), {
      "ul, ol": {
        margin: 0,
        padding: 0,
        listStyle: "none"
      },
      "&::after": {
        display: "block",
        clear: "both",
        height: 0,
        overflow: "hidden",
        visibility: "hidden",
        content: '""'
      },
      [`${componentCls}-total-text`]: {
        display: "inline-block",
        height: token.paginationItemSize,
        marginInlineEnd: token.marginXS,
        lineHeight: `${token.paginationItemSize - 2}px`,
        verticalAlign: "middle"
      }
    }), genPaginationItemStyle(token)), genPaginationJumpStyle(token)), genPaginationSimpleStyle(token)), genPaginationMiniStyle(token)), genPaginationDisabledStyle(token)), {
      // media query style
      [`@media only screen and (max-width: ${token.screenLG}px)`]: {
        [`${componentCls}-item`]: {
          "&-after-jump-prev, &-before-jump-next": {
            display: "none"
          }
        }
      },
      [`@media only screen and (max-width: ${token.screenSM}px)`]: {
        [`${componentCls}-options`]: {
          display: "none"
        }
      }
    }),
    // rtl style
    [`&${token.componentCls}-rtl`]: {
      direction: "rtl"
    }
  };
};
const genBorderedStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}${componentCls}-disabled`]: {
      "&, &:hover": {
        [`${componentCls}-item-link`]: {
          borderColor: token.colorBorder
        }
      },
      "&:focus-visible": {
        [`${componentCls}-item-link`]: {
          borderColor: token.colorBorder
        }
      },
      [`${componentCls}-item, ${componentCls}-item-link`]: {
        backgroundColor: token.colorBgContainerDisabled,
        borderColor: token.colorBorder,
        [`&:hover:not(${componentCls}-item-active)`]: {
          backgroundColor: token.colorBgContainerDisabled,
          borderColor: token.colorBorder,
          a: {
            color: token.colorTextDisabled
          }
        },
        [`&${componentCls}-item-active`]: {
          backgroundColor: token.paginationItemDisabledBgActive
        }
      },
      [`${componentCls}-prev, ${componentCls}-next`]: {
        "&:hover button": {
          backgroundColor: token.colorBgContainerDisabled,
          borderColor: token.colorBorder,
          color: token.colorTextDisabled
        },
        [`${componentCls}-item-link`]: {
          backgroundColor: token.colorBgContainerDisabled,
          borderColor: token.colorBorder
        }
      }
    },
    [componentCls]: {
      [`${componentCls}-prev, ${componentCls}-next`]: {
        "&:hover button": {
          borderColor: token.colorPrimaryHover,
          backgroundColor: token.paginationItemBg
        },
        [`${componentCls}-item-link`]: {
          backgroundColor: token.paginationItemLinkBg,
          borderColor: token.colorBorder
        },
        [`&:hover ${componentCls}-item-link`]: {
          borderColor: token.colorPrimary,
          backgroundColor: token.paginationItemBg,
          color: token.colorPrimary
        },
        [`&${componentCls}-disabled`]: {
          [`${componentCls}-item-link`]: {
            borderColor: token.colorBorder,
            color: token.colorTextDisabled
          }
        }
      },
      [`${componentCls}-item`]: {
        backgroundColor: token.paginationItemBg,
        border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
        [`&:hover:not(${componentCls}-item-active)`]: {
          borderColor: token.colorPrimary,
          backgroundColor: token.paginationItemBg,
          a: {
            color: token.colorPrimary
          }
        },
        "&-active": {
          borderColor: token.colorPrimary
        }
      }
    }
  };
};
const useStyle = genComponentStyleHook("Pagination", (token) => {
  const paginationToken = merge(token, {
    paginationItemSize: token.controlHeight,
    paginationFontFamily: token.fontFamily,
    paginationItemBg: token.colorBgContainer,
    paginationItemBgActive: token.colorBgContainer,
    paginationFontWeightActive: token.fontWeightStrong,
    paginationItemSizeSM: token.controlHeightSM,
    paginationItemInputBg: token.colorBgContainer,
    paginationMiniOptionsSizeChangerTop: 0,
    paginationItemDisabledBgActive: token.controlItemBgActiveDisabled,
    paginationItemDisabledColorActive: token.colorTextDisabled,
    paginationItemLinkBg: token.colorBgContainer,
    inputOutlineOffset: "0 0",
    paginationMiniOptionsMarginInlineStart: token.marginXXS / 2,
    paginationMiniQuickJumperInputWidth: token.controlHeightLG * 1.1,
    paginationItemPaddingInline: token.marginXXS * 1.5,
    paginationEllipsisLetterSpacing: token.marginXXS / 2,
    paginationSlashMarginInlineStart: token.marginXXS,
    paginationSlashMarginInlineEnd: token.marginSM,
    paginationEllipsisTextIndent: "0.13em"
    // magic for ui experience
  }, initInputToken(token));
  return [genPaginationStyle(paginationToken), token.wireframe && genBorderedStyle(paginationToken)];
});
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
const paginationProps = () => ({
  total: Number,
  defaultCurrent: Number,
  disabled: booleanType(),
  current: Number,
  defaultPageSize: Number,
  pageSize: Number,
  hideOnSinglePage: booleanType(),
  showSizeChanger: booleanType(),
  pageSizeOptions: arrayType(),
  buildOptionText: functionType(),
  showQuickJumper: someType([Boolean, Object]),
  showTotal: functionType(),
  size: stringType(),
  simple: booleanType(),
  locale: Object,
  prefixCls: String,
  selectPrefixCls: String,
  totalBoundaryShowSizeChanger: Number,
  selectComponentClass: String,
  itemRender: functionType(),
  role: String,
  responsive: Boolean,
  showLessItems: booleanType(),
  onChange: functionType(),
  onShowSizeChange: functionType(),
  "onUpdate:current": functionType(),
  "onUpdate:pageSize": functionType()
});
const Pagination$1 = defineComponent({
  compatConfig: {
    MODE: 3
  },
  name: "APagination",
  inheritAttrs: false,
  props: paginationProps(),
  // emits: ['change', 'showSizeChange', 'update:current', 'update:pageSize'],
  setup(props2, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      prefixCls,
      configProvider,
      direction,
      size
    } = useConfigInject("pagination", props2);
    const [wrapSSR, hashId] = useStyle(prefixCls);
    const selectPrefixCls = computed(() => configProvider.getPrefixCls("select", props2.selectPrefixCls));
    const breakpoint = useBreakpoint();
    const [locale] = useLocaleReceiver("Pagination", enUS, toRef(props2, "locale"));
    const getIconsProps = (pre) => {
      const ellipsis = createVNode("span", {
        "class": `${pre}-item-ellipsis`
      }, [createTextVNode("•••")]);
      const prevIcon = createVNode("button", {
        "class": `${pre}-item-link`,
        "type": "button",
        "tabindex": -1
      }, [direction.value === "rtl" ? createVNode(RightOutlined, null, null) : createVNode(LeftOutlined$1, null, null)]);
      const nextIcon = createVNode("button", {
        "class": `${pre}-item-link`,
        "type": "button",
        "tabindex": -1
      }, [direction.value === "rtl" ? createVNode(LeftOutlined$1, null, null) : createVNode(RightOutlined, null, null)]);
      const jumpPrevIcon = createVNode("a", {
        "rel": "nofollow",
        "class": `${pre}-item-link`
      }, [createVNode("div", {
        "class": `${pre}-item-container`
      }, [direction.value === "rtl" ? createVNode(DoubleRightOutlined$1, {
        "class": `${pre}-item-link-icon`
      }, null) : createVNode(DoubleLeftOutlined$1, {
        "class": `${pre}-item-link-icon`
      }, null), ellipsis])]);
      const jumpNextIcon = createVNode("a", {
        "rel": "nofollow",
        "class": `${pre}-item-link`
      }, [createVNode("div", {
        "class": `${pre}-item-container`
      }, [direction.value === "rtl" ? createVNode(DoubleLeftOutlined$1, {
        "class": `${pre}-item-link-icon`
      }, null) : createVNode(DoubleRightOutlined$1, {
        "class": `${pre}-item-link-icon`
      }, null), ellipsis])]);
      return {
        prevIcon,
        nextIcon,
        jumpPrevIcon,
        jumpNextIcon
      };
    };
    return () => {
      var _a;
      const {
        itemRender = slots.itemRender,
        buildOptionText = slots.buildOptionText,
        selectComponentClass,
        responsive
      } = props2, restProps = __rest(props2, ["itemRender", "buildOptionText", "selectComponentClass", "responsive"]);
      const isSmall = size.value === "small" || !!(((_a = breakpoint.value) === null || _a === void 0 ? void 0 : _a.xs) && !size.value && responsive);
      const paginationProps2 = _extends(_extends(_extends(_extends(_extends({}, restProps), getIconsProps(prefixCls.value)), {
        prefixCls: prefixCls.value,
        selectPrefixCls: selectPrefixCls.value,
        selectComponentClass: selectComponentClass || (isSmall ? MiniSelect : MiddleSelect),
        locale: locale.value,
        buildOptionText
      }), attrs), {
        class: classNames({
          [`${prefixCls.value}-mini`]: isSmall,
          [`${prefixCls.value}-rtl`]: direction.value === "rtl"
        }, attrs.class, hashId.value),
        itemRender
      });
      return wrapSSR(createVNode(VcPagination, paginationProps2, null));
    };
  }
});
const Pagination = withInstall(Pagination$1);
const Row = withInstall(Row$1);
var CompressOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "defs", "attrs": {}, "children": [{ "tag": "style", "attrs": {} }] }, { "tag": "path", "attrs": { "d": "M326 664H104c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h174v176c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16V696c0-17.7-14.3-32-32-32zm16-576h-48c-8.8 0-16 7.2-16 16v176H104c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h222c17.7 0 32-14.3 32-32V104c0-8.8-7.2-16-16-16zm578 576H698c-17.7 0-32 14.3-32 32v224c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16V744h174c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16zm0-384H746V104c0-8.8-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16v224c0 17.7 14.3 32 32 32h222c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16z" } }] }, "name": "compress", "theme": "outlined" };
const CompressOutlinedSvg = CompressOutlined$2;
function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
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
var CompressOutlined = function CompressOutlined2(props2, context) {
  var p = _objectSpread$1({}, props2, context.attrs);
  return createVNode(AntdIcon, _objectSpread$1({}, p, {
    "icon": CompressOutlinedSvg
  }), null);
};
CompressOutlined.displayName = "CompressOutlined";
CompressOutlined.inheritAttrs = false;
const CompressOutlined$1 = CompressOutlined;
var ExpandOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "defs", "attrs": {}, "children": [{ "tag": "style", "attrs": {} }] }, { "tag": "path", "attrs": { "d": "M342 88H120c-17.7 0-32 14.3-32 32v224c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16V168h174c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16zm578 576h-48c-8.8 0-16 7.2-16 16v176H682c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h222c17.7 0 32-14.3 32-32V680c0-8.8-7.2-16-16-16zM342 856H168V680c0-8.8-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16v224c0 17.7 14.3 32 32 32h222c8.8 0 16-7.2 16-16v-48c0-8.8-7.2-16-16-16zM904 88H682c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h174v176c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16V120c0-17.7-14.3-32-32-32z" } }] }, "name": "expand", "theme": "outlined" };
const ExpandOutlinedSvg = ExpandOutlined$2;
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
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
var ExpandOutlined = function ExpandOutlined2(props2, context) {
  var p = _objectSpread({}, props2, context.attrs);
  return createVNode(AntdIcon, _objectSpread({}, p, {
    "icon": ExpandOutlinedSvg
  }), null);
};
ExpandOutlined.displayName = "ExpandOutlined";
ExpandOutlined.inheritAttrs = false;
const ExpandOutlined$1 = ExpandOutlined;
const DOC_TYPE = {
  ORIGINAL: 0,
  // 原创
  REPOST: 1
  // 转载
};
function handleArr(arr) {
  return arr.map((item, index2) => ({
    ...item,
    id: item.id || index2,
    // 如果没有 id，使用索引值
    type: (item == null ? void 0 : item.type) == 0 ? DOC_TYPE.ORIGINAL : DOC_TYPE.REPOST
  }));
}
const documentsObj = {
  精选文章: handleArr([
    {
      title: "框架源码讲解",
      link: "https://muyacode.github.io/FrontEndLearnNotes/Document/%E6%A1%86%E6%9E%B6%E6%BA%90%E7%A0%81%E5%8E%9F%E7%90%86%E5%AE%9E%E7%8E%B0%E8%A7%A3%E6%9E%90/Vue%E5%8F%8A%E5%85%A8%E5%AE%B6%E6%A1%B6%E6%BA%90%E7%A0%81%E8%A7%A3%E6%9E%90/Vue3%E6%BA%90%E7%A0%81%E8%A7%A3%E6%9E%90"
    },
    {
      title: "前端组件设计原则",
      link: "https://juejin.cn/post/6844903767108747278?searchId=20250123185507A03B31425F00094C1EF2"
    },
    {
      title: "聊聊组件设计",
      link: "https://juejin.cn/post/6844903917470351367?searchId=20250123185225C4BC911464FD9952BED1#heading-57"
    },
    {
      title: "跨域以及同源策略",
      link: "https://juejin.cn/post/7269952188927017015"
    },
    {
      title: "关于vue-router中点击浏览器前进后退地址栏路由变了但是页面没跳转",
      link: "https://www.cnblogs.com/mmzuo-798/p/10260327.html"
    },
    {
      title: "解决sass 安装报错，踩坑记（所有sass 安装报错总结篇）",
      link: "https://blog.csdn.net/weixin_35773751/article/details/124418960"
    },
    {
      title: "JS垃圾回收机制【图文解析】",
      link: "https://zhuanlan.zhihu.com/p/689678104"
    },
    {
      title: "深入JavaScript底层：词法作用域、变量提升与执行上下文详解",
      link: "https://blog.csdn.net/fdvvg/article/details/144483506"
    },
    {
      title: "深入JavaScript底层：词法作用域、变量提升与执行上下文详解",
      link: "https://juejin.cn/post/7442133030367510564"
    },
    {
      title: "深入JavaScript 继承",
      link: "https://segmentfault.com/a/1190000022677985"
    },
    {
      title: "前端知识库网站",
      link: "https://juejin.cn/post/7373565544697692172"
    },
    {
      title: "值得收藏的前端学习网站",
      link: "https://zhuanlan.zhihu.com/p/56084517"
    }
  ]),
  javaScript: handleArr([
    {
      title: "分享几个🏵️前端知识和面试网站🏵️",
      link: "https://juejin.cn/post/7373565544697692172"
    }
  ]),
  算法: handleArr([
    {
      title: "Vue2/Vue3 diff算法",
      link: "https://juejin.cn/post/7092068900589797413#heading-4"
    },
    {
      title: "React diff算法",
      link: "https://juejin.cn/post/7212918899867041849"
    },
    {
      title: "Vue3 diff算法 bubucuo(上)",
      link: "https://mp.weixin.qq.com/s/-5XD6eYoEWgw_fcD2GVpjQ"
    },
    {
      title: "Vue3 diff算法 bubucuo(下)",
      link: "https://mp.weixin.qq.com/s/Bf61u6150Cp08lKSbw8K5w"
    },
    {
      title: "React diff算法 bubucuo ",
      link: "https://mp.weixin.qq.com/s/TwY0RJT9e9_85RIwGXoG3w"
    }
  ]),
  部署: handleArr([
    {
      title: "部署前端和nodejs项目",
      link: "https://note.youdao.com/s/Zfntop7v",
      type: 0
    },
    {
      title: "ssh免密登录腾讯云服务器",
      link: "https://blog.csdn.net/yuanfate/article/details/107091730"
    }
  ]),
  css: handleArr([
    {
      title: "Shadow DOM的CSS样式",
      link: "https://www.zhangxinxu.com/wordpress/2021/02/css-part-shadow-dom/"
    },
    {
      title: "彻底搞懂CSS层叠上下文、层叠等级、层叠顺序、z-index",
      link: "https://juejin.cn/post/6844903667175260174"
    },
    {
      title: "CSS Grid Garden 网格布局的练习",
      link: "https://cssgridgarden.com/#zh-cn"
    },
    {
      title: "Grid Garden",
      link: "https://cssgridgarden.com/"
    },
    {
      title: "Learn CSS Layout",
      link: "https://learncsslayout.com/"
    },
    {
      title: "CSS Best Practices and Tips",
      link: "https://www.sitepoint.com/8-css-best-practices-you-should-follow/"
    },
    {
      title: "CSS Performance",
      link: "https://webpagetest.org/blog/2017/01/24/css-performance/"
    },
    {
      title: "CSS Variables",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables"
    },
    {
      title: "Advanced CSS Selectors",
      link: "https://css-tricks.com/advanced-css-selectors/"
    },
    {
      title: "CSS Animations and Transitions",
      link: "https://css-tricks.com/almanac/properties/a/animation/"
    }
  ])
  // 继续添加其他文档类型
};
const categoryToDocumentsMap = {
  前端: ["精选文章", "css", "算法", "部署", "javaScript"]
  // 可以继续定义其他类别的映射
};
const categoriesData = ref(
  Object.entries(categoryToDocumentsMap).map(([categoryName, docTypes]) => ({
    key: categoryName,
    name: categoryName,
    sections: docTypes.map((docType) => ({
      title: docType,
      documents: documentsObj[docType] || []
    }))
  }))
);
const _hoisted_1 = { class: "knowledge-base" };
const _hoisted_2 = { class: "kb-header" };
const _hoisted_3 = { class: "kb-actions" };
const _hoisted_4 = { class: "doc-list" };
const _hoisted_5 = { class: "category-section" };
const _hoisted_6 = ["onClick"];
const _hoisted_7 = { class: "header-left" };
const _hoisted_8 = { class: "doc-count" };
const _hoisted_9 = { class: "section-content" };
const _hoisted_10 = ["href"];
const _hoisted_11 = { class: "doc-index" };
const _hoisted_12 = ["innerHTML"];
const _hoisted_13 = {
  key: 0,
  class: "pagination-wrapper"
};
const _hoisted_14 = ["onClick"];
const _hoisted_15 = { class: "header-left" };
const _hoisted_16 = { class: "doc-count" };
const _hoisted_17 = { class: "section-content" };
const _hoisted_18 = ["href"];
const _hoisted_19 = { class: "doc-index" };
const _hoisted_20 = ["innerHTML"];
const _hoisted_21 = {
  key: 0,
  class: "pagination-wrapper"
};
const _hoisted_22 = {
  key: 2,
  class: "no-results"
};
const pageSize = 10;
const _sfc_main$1 = {
  __name: "Artical",
  setup(__props) {
    useCssVars((_ctx) => ({
      "10432496": isDoubleColumn.value ? "1000px" : "800px"
    }));
    const { Title } = Typography;
    const { TabPane: TabPane2 } = Tabs;
    const activeCategory = ref("前端");
    const searchText = ref("");
    const DOC_TYPE2 = {
      ORIGINAL: 0,
      // 原创
      REPOST: 1
      // 转载
    };
    const getDocTypeClass = (type) => {
      return type === DOC_TYPE2.ORIGINAL ? "original" : "repost";
    };
    const getDocTypeText = (type) => {
      return type === DOC_TYPE2.ORIGINAL ? "原创" : "转载";
    };
    const getFilteredSections = (category) => {
      if (!searchText.value)
        return category.sections;
      return category.sections.map((section) => ({
        ...section,
        documents: section.documents.filter(
          (doc) => doc.title.toLowerCase().includes(searchText.value.toLowerCase())
        )
      })).filter((section) => section.documents.length > 0);
    };
    const highlightText = (text) => {
      if (!searchText.value)
        return text;
      const regex = new RegExp(`(${searchText.value})`, "gi");
      return text.replace(regex, '<span class="highlight">$1</span>');
    };
    const onSearch = () => {
      resetPagination();
    };
    const expandedSections = ref([]);
    const toggleSection = (section) => {
      const index2 = expandedSections.value.indexOf(section.title);
      if (index2 === -1) {
        expandedSections.value.push(section.title);
      } else {
        expandedSections.value.splice(index2, 1);
      }
    };
    expandedSections.value = categoriesData.value.flatMap(
      (category) => category.sections.map((section) => section.title)
    );
    const onExpandEnter = (el) => {
      el.style.height = "auto";
      const height = el.scrollHeight;
      el.style.height = "0px";
      el.offsetHeight;
      el.style.height = height + "px";
    };
    const onExpandAfterEnter = (el) => {
      el.style.height = "auto";
    };
    const onExpandLeave = (el) => {
      el.style.height = el.scrollHeight + "px";
      el.offsetHeight;
      el.style.height = "0px";
    };
    const currentPages = ref({});
    const paginatedDocuments = (section) => {
      const currentPage = getCurrentPage(section.title);
      const start = (currentPage - 1) * pageSize;
      const end = start + pageSize;
      return section.documents.slice(start, end);
    };
    const getCurrentPage = (sectionTitle) => {
      return currentPages.value[sectionTitle] || 1;
    };
    const handlePageChange = (sectionTitle, page) => {
      currentPages.value[sectionTitle] = page;
    };
    const resetPagination = () => {
      currentPages.value = {};
    };
    const getDocIndex = (sectionTitle, index2) => {
      const currentPage = getCurrentPage(sectionTitle);
      return ((currentPage - 1) * pageSize + index2 + 1).toString().padStart(2, "0");
    };
    const isDoubleColumn = ref(true);
    const toggleLayout = () => {
      isDoubleColumn.value = !isDoubleColumn.value;
    };
    const isAllExpanded = computed(() => {
      if (!categoriesData.value)
        return false;
      const allSectionTitles = categoriesData.value.flatMap(
        (category) => category.sections.map((section) => section.title)
      );
      return allSectionTitles.every(
        (title) => expandedSections.value.includes(title)
      );
    });
    const toggleAllSections = () => {
      if (!categoriesData.value)
        return;
      const allSectionTitles = categoriesData.value.flatMap(
        (category) => category.sections.map((section) => section.title)
      );
      if (isAllExpanded.value) {
        expandedSections.value = [];
      } else {
        expandedSections.value = [...allSectionTitles];
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(unref(Title), {
            level: 2,
            class: "section-title"
          }, {
            default: withCtx(() => [
              createTextVNode("知识库")
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_3, [
            createVNode(unref(Tooltip), {
              title: isAllExpanded.value ? "收起所有分类" : "展开所有分类"
            }, {
              default: withCtx(() => [
                createBaseVNode("button", {
                  class: normalizeClass(["layout-toggle", { active: isAllExpanded.value }]),
                  onClick: toggleAllSections
                }, [
                  !isAllExpanded.value ? (openBlock(), createBlock(unref(ExpandOutlined$1), { key: 0 })) : (openBlock(), createBlock(unref(CompressOutlined$1), { key: 1 })),
                  createBaseVNode("span", null, toDisplayString(isAllExpanded.value ? "收起" : "展开"), 1)
                ], 2)
              ]),
              _: 1
            }, 8, ["title"]),
            createVNode(unref(Tooltip), {
              title: isDoubleColumn.value ? "切换为单栏视图" : "切换为双栏视图"
            }, {
              default: withCtx(() => [
                createBaseVNode("button", {
                  class: normalizeClass(["layout-toggle", { active: isDoubleColumn.value }]),
                  onClick: toggleLayout
                }, [
                  !isDoubleColumn.value ? (openBlock(), createBlock(unref(UnorderedListOutlined), { key: 0 })) : (openBlock(), createBlock(unref(AppstoreOutlined), { key: 1 })),
                  createBaseVNode("span", null, toDisplayString(isDoubleColumn.value ? "双栏" : "单栏"), 1)
                ], 2)
              ]),
              _: 1
            }, 8, ["title"]),
            createVNode(unref(Input).Search, {
              value: searchText.value,
              "onUpdate:value": _cache[0] || (_cache[0] = ($event) => searchText.value = $event),
              placeholder: "搜索文档...",
              class: "kb-search",
              style: { width: "200px" },
              onSearch,
              onChange: onSearch
            }, null, 8, ["value"])
          ])
        ]),
        unref(categoriesData) && Array.isArray(unref(categoriesData)) ? (openBlock(), createBlock(unref(Tabs), {
          key: 0,
          activeKey: activeCategory.value,
          "onUpdate:activeKey": _cache[1] || (_cache[1] = ($event) => activeCategory.value = $event),
          class: "kb-tabs"
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(categoriesData), (category) => {
              return openBlock(), createBlock(unref(TabPane2), {
                key: category.key,
                tab: category.name
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_4, [
                    isDoubleColumn.value ? (openBlock(), createBlock(unref(Row), {
                      key: 0,
                      gutter: 24
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(getFilteredSections(category), (section) => {
                          return withDirectives((openBlock(), createBlock(unref(Col), {
                            span: 12,
                            key: section.title
                          }, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_5, [
                                createBaseVNode("div", {
                                  class: "section-header",
                                  onClick: ($event) => toggleSection(section)
                                }, [
                                  createBaseVNode("div", _hoisted_7, [
                                    createVNode(unref(CaretRightOutlined), {
                                      class: normalizeClass(["expand-icon", {
                                        expanded: expandedSections.value.includes(section.title)
                                      }])
                                    }, null, 8, ["class"]),
                                    createVNode(unref(FolderOutlined), {
                                      class: normalizeClass(["section-icon", {
                                        opened: expandedSections.value.includes(section.title)
                                      }])
                                    }, null, 8, ["class"]),
                                    createTextVNode(" " + toDisplayString(section.title), 1)
                                  ]),
                                  createBaseVNode("span", _hoisted_8, toDisplayString(section.documents.length), 1)
                                ], 8, _hoisted_6),
                                createVNode(Transition, {
                                  name: "expand",
                                  onEnter: onExpandEnter,
                                  onAfterEnter: onExpandAfterEnter,
                                  onLeave: onExpandLeave
                                }, {
                                  default: withCtx(() => [
                                    withDirectives(createBaseVNode("div", _hoisted_9, [
                                      createVNode(TransitionGroup, {
                                        name: "list",
                                        tag: "div",
                                        class: "documents-list"
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createElementBlock(Fragment, null, renderList(paginatedDocuments(section), (doc, index2) => {
                                            return openBlock(), createElementBlock("a", {
                                              key: doc.id,
                                              target: "_blank",
                                              href: doc.link,
                                              class: "doc-item"
                                            }, [
                                              createBaseVNode("span", _hoisted_11, toDisplayString(getDocIndex(section.title, index2)), 1),
                                              createBaseVNode("span", {
                                                class: normalizeClass(["doc-tag", getDocTypeClass(doc.type)])
                                              }, toDisplayString(getDocTypeText(doc.type)), 3),
                                              createVNode(unref(Tooltip), {
                                                title: doc.title,
                                                placement: "top"
                                              }, {
                                                default: withCtx(() => [
                                                  createBaseVNode("span", {
                                                    class: "doc-title",
                                                    innerHTML: highlightText(doc.title)
                                                  }, null, 8, _hoisted_12)
                                                ]),
                                                _: 2
                                              }, 1032, ["title"])
                                            ], 8, _hoisted_10);
                                          }), 128))
                                        ]),
                                        _: 2
                                      }, 1024),
                                      section.documents.length > pageSize ? (openBlock(), createElementBlock("div", _hoisted_13, [
                                        createVNode(unref(Pagination), {
                                          size: "small",
                                          current: getCurrentPage(section.title),
                                          total: section.documents.length,
                                          pageSize,
                                          onChange: (page) => handlePageChange(section.title, page),
                                          hideOnSinglePage: true
                                        }, null, 8, ["current", "total", "onChange"])
                                      ])) : createCommentVNode("", true)
                                    ], 512), [
                                      [vShow, expandedSections.value.includes(section.title)]
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ]),
                            _: 2
                          }, 1024)), [
                            [vShow, section.documents.length > 0]
                          ]);
                        }), 128))
                      ]),
                      _: 2
                    }, 1024)) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(getFilteredSections(category), (section) => {
                      return withDirectives((openBlock(), createElementBlock("div", {
                        class: "category-section",
                        key: section.title
                      }, [
                        createBaseVNode("div", {
                          class: "section-header",
                          onClick: ($event) => toggleSection(section)
                        }, [
                          createBaseVNode("div", _hoisted_15, [
                            createVNode(unref(CaretRightOutlined), {
                              class: normalizeClass(["expand-icon", {
                                expanded: expandedSections.value.includes(section.title)
                              }])
                            }, null, 8, ["class"]),
                            createVNode(unref(FolderOutlined), {
                              class: normalizeClass(["section-icon", {
                                opened: expandedSections.value.includes(section.title)
                              }])
                            }, null, 8, ["class"]),
                            createTextVNode(" " + toDisplayString(section.title), 1)
                          ]),
                          createBaseVNode("span", _hoisted_16, toDisplayString(section.documents.length), 1)
                        ], 8, _hoisted_14),
                        createVNode(Transition, {
                          name: "expand",
                          onEnter: onExpandEnter,
                          onAfterEnter: onExpandAfterEnter,
                          onLeave: onExpandLeave
                        }, {
                          default: withCtx(() => [
                            withDirectives(createBaseVNode("div", _hoisted_17, [
                              createVNode(TransitionGroup, {
                                name: "list",
                                tag: "div",
                                class: "documents-list"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createElementBlock(Fragment, null, renderList(paginatedDocuments(section), (doc, index2) => {
                                    return openBlock(), createElementBlock("a", {
                                      key: doc.id,
                                      href: doc.link,
                                      class: "doc-item"
                                    }, [
                                      createBaseVNode("span", _hoisted_19, toDisplayString(getDocIndex(section.title, index2)), 1),
                                      createBaseVNode("span", {
                                        class: normalizeClass(["doc-tag", getDocTypeClass(doc.type)])
                                      }, toDisplayString(getDocTypeText(doc.type)), 3),
                                      createVNode(unref(Tooltip), {
                                        title: doc.title,
                                        placement: "top"
                                      }, {
                                        default: withCtx(() => [
                                          createBaseVNode("span", {
                                            class: "doc-title",
                                            innerHTML: highlightText(doc.title)
                                          }, null, 8, _hoisted_20)
                                        ]),
                                        _: 2
                                      }, 1032, ["title"])
                                    ], 8, _hoisted_18);
                                  }), 128))
                                ]),
                                _: 2
                              }, 1024),
                              section.documents.length > pageSize ? (openBlock(), createElementBlock("div", _hoisted_21, [
                                createVNode(unref(Pagination), {
                                  size: "small",
                                  current: getCurrentPage(section.title),
                                  total: section.documents.length,
                                  pageSize,
                                  onChange: (page) => handlePageChange(section.title, page),
                                  hideOnSinglePage: true
                                }, null, 8, ["current", "total", "onChange"])
                              ])) : createCommentVNode("", true)
                            ], 512), [
                              [vShow, expandedSections.value.includes(section.title)]
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ])), [
                        [vShow, section.documents.length > 0]
                      ]);
                    }), 128)),
                    searchText.value && !getFilteredSections(category).length ? (openBlock(), createElementBlock("div", _hoisted_22, " 当前分类下无匹配结果 ")) : createCommentVNode("", true)
                  ])
                ]),
                _: 2
              }, 1032, ["tab"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["activeKey"])) : createCommentVNode("", true)
      ]);
    };
  }
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-58ded804"]]);
const __pageData = JSON.parse('{"title":"文章归档","description":"","frontmatter":{"title":"文章归档","aside":false,"editLink":false,"lastUpdated":false,"showComment":false},"headers":[],"relativePath":"src/my-artical/index.md","filePath":"src/my-artical/index.md","lastUpdated":1739460242000}');
const _sfc_main = { name: "src/my-artical/index.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Artical = __unplugin_components_0;
  const _component_ClientOnly = resolveComponent("ClientOnly");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_ClientOnly, null, {
      default: withCtx(() => [
        createVNode(_component_Artical)
      ]),
      _: 1
    })
  ]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  index as default
};
