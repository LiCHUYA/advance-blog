import { g as getPrefixCls, a as getAllElements, i as isArray, b as isNumber, s as setGlobalConfig, c as getComponentPrefix, d as goToLink, e as getChineseZodiac, f as getChineseZodiacAlias, h as getQueryParam, B as Button, T as Tag } from "./chunks/index.2Idoq-Jx.js";
import { d as data, L as ListItemMeta, a as ListItem } from "./chunks/article.data.7XXEWs8p.js";
import { I as createVNode, d as defineComponent, g as computed, a3 as Comment, F as Fragment, _ as _export_sfc, h as ref, j as onMounted, o as openBlock, c as createElementBlock, k as createBaseVNode, m as unref, t as toDisplayString, w as withCtx, a as createTextVNode, E as renderList, b as createBlock, e as createCommentVNode, a1 as withModifiers, p as pushScopeId, q as popScopeId, D as resolveComponent } from "./chunks/framework.b55ravPP.js";
import { F as FolderOutlined } from "./chunks/FolderOutlined.GvKKgIjs.js";
import { A as AntdIcon, C as CloseOutlined } from "./chunks/CloseOutlined.gG5NVs8Y.js";
import { F as FileTextOutlined } from "./chunks/FileTextOutlined.RqbU9wV3.js";
var CalendarOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z" } }] }, "name": "calendar", "theme": "outlined" };
const CalendarOutlinedSvg = CalendarOutlined$2;
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
var CalendarOutlined = function CalendarOutlined2(props, context) {
  var p = _objectSpread$1({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread$1({}, p, {
    "icon": CalendarOutlinedSvg
  }), null);
};
CalendarOutlined.displayName = "CalendarOutlined";
CalendarOutlined.inheritAttrs = false;
const CalendarOutlined$1 = CalendarOutlined;
var TagOutlined$2 = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M938 458.8l-29.6-312.6c-1.5-16.2-14.4-29-30.6-30.6L565.2 86h-.4c-3.2 0-5.7 1-7.6 2.9L88.9 557.2a9.96 9.96 0 000 14.1l363.8 363.8c1.9 1.9 4.4 2.9 7.1 2.9s5.2-1 7.1-2.9l468.3-468.3c2-2.1 3-5 2.8-8zM459.7 834.7L189.3 564.3 589 164.6 836 188l23.4 247-399.7 399.7zM680 256c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88zm0 120c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" } }] }, "name": "tag", "theme": "outlined" };
const TagOutlinedSvg = TagOutlined$2;
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
var TagOutlined = function TagOutlined2(props, context) {
  var p = _objectSpread({}, props, context.attrs);
  return createVNode(AntdIcon, _objectSpread({}, p, {
    "icon": TagOutlinedSvg
  }), null);
};
TagOutlined.displayName = "TagOutlined";
TagOutlined.inheritAttrs = false;
const TagOutlined$1 = TagOutlined;
var _Space = defineComponent({
  name: "Space",
  props: {
    align: {
      type: String
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    size: {
      type: [Number, String, Array],
      default: "small"
    },
    wrap: {
      type: Boolean
    },
    fill: {
      type: Boolean
    }
  },
  setup(props, {
    slots
  }) {
    const prefixCls = getPrefixCls("space");
    const mergedAlign = computed(() => {
      var _a;
      return (_a = props.align) != null ? _a : props.direction === "horizontal" ? "center" : "";
    });
    const cls = computed(() => [prefixCls, {
      [`${prefixCls}-${props.direction}`]: props.direction,
      [`${prefixCls}-align-${mergedAlign.value}`]: mergedAlign.value,
      [`${prefixCls}-wrap`]: props.wrap,
      [`${prefixCls}-fill`]: props.fill
    }]);
    function getMargin(size) {
      if (isNumber(size)) {
        return size;
      }
      switch (size) {
        case "mini":
          return 4;
        case "small":
          return 8;
        case "medium":
          return 16;
        case "large":
          return 24;
        default:
          return 8;
      }
    }
    const getMarginStyle = (isLast) => {
      const style = {};
      const marginRight = `${getMargin(isArray(props.size) ? props.size[0] : props.size)}px`;
      const marginBottom = `${getMargin(isArray(props.size) ? props.size[1] : props.size)}px`;
      if (isLast) {
        return props.wrap ? {
          marginBottom
        } : {};
      }
      if (props.direction === "horizontal") {
        style.marginRight = marginRight;
      }
      if (props.direction === "vertical" || props.wrap) {
        style.marginBottom = marginBottom;
      }
      return style;
    };
    return () => {
      var _a;
      const children = getAllElements((_a = slots.default) == null ? void 0 : _a.call(slots), true).filter((item) => item.type !== Comment);
      return createVNode("div", {
        "class": cls.value
      }, [children.map((child, index) => {
        var _a2, _b;
        const shouldRenderSplit = slots.split && index > 0;
        return createVNode(Fragment, {
          "key": (_a2 = child.key) != null ? _a2 : `item-${index}`
        }, [shouldRenderSplit && createVNode("div", {
          "class": `${prefixCls}-item-split`,
          "style": getMarginStyle(false)
        }, [(_b = slots.split) == null ? void 0 : _b.call(slots)]), createVNode("div", {
          "class": `${prefixCls}-item`,
          "style": getMarginStyle(index === children.length - 1)
        }, [child])]);
      })]);
    };
  }
});
const Space = Object.assign(_Space, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Space.name, _Space);
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-12a5f2e8"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "archive-container" };
const _hoisted_2 = { class: "archive-header" };
const _hoisted_3 = { class: "stats-card" };
const _hoisted_4 = { class: "stats-icon category-icon" };
const _hoisted_5 = { class: "stats-info" };
const _hoisted_6 = { class: "stats-icon tag-icon" };
const _hoisted_7 = { class: "stats-info" };
const _hoisted_8 = { class: "stats-icon year-icon" };
const _hoisted_9 = { class: "stats-info" };
const _hoisted_10 = { class: "stats-icon total-icon" };
const _hoisted_11 = { class: "stats-info" };
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", null, "文章归档", -1));
const _hoisted_13 = { class: "timeline" };
const _hoisted_14 = { class: "year-header" };
const _hoisted_15 = ["onClick"];
const _hoisted_16 = ["src", "title"];
const _hoisted_17 = { class: "year-count" };
const _hoisted_18 = { class: "year-content" };
const _hoisted_19 = { class: "month-header" };
const _hoisted_20 = { class: "article-list" };
const _hoisted_21 = { class: "date-day" };
const _hoisted_22 = { class: "date-month" };
const _hoisted_23 = ["href"];
const _hoisted_24 = { class: "article-meta" };
const _sfc_main$1 = {
  __name: "Archive",
  setup(__props) {
    const $articleData = ref([]);
    const archiveData = ref({});
    const $category = ref("");
    const $tag = ref("");
    const $year = ref("");
    const formatDate = (date) => {
      if (!date)
        return { day: "--", month: "--" };
      const d = new Date(date);
      if (isNaN(d.getTime()))
        return { day: "--", month: "--" };
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      return {
        day: d.getDate().toString().padStart(2, "0"),
        month: months[d.getMonth()]
      };
    };
    const initTimeline = () => {
      $category.value = getQueryParam("category");
      $tag.value = getQueryParam("tag");
      $year.value = getQueryParam("year");
      $articleData.value = data.filter((article) => {
        var _a, _b;
        if (!article.date || isNaN(new Date(article.date).getTime())) {
          return false;
        }
        if ($category.value) {
          return (_a = article.categories) == null ? void 0 : _a.includes($category.value);
        }
        if ($tag.value) {
          return (_b = article.tags) == null ? void 0 : _b.includes($tag.value);
        }
        if ($year.value) {
          return new Date(article.date).getFullYear().toString() === $year.value;
        }
        return true;
      });
      const tempArchiveData = {};
      $articleData.value.sort((a, b) => new Date(b.date) - new Date(a.date)).forEach((article) => {
        const date = new Date(article.date);
        const year = `${date.getFullYear()}年`;
        const month = `${date.getMonth() + 1}月`;
        if (!tempArchiveData[year]) {
          tempArchiveData[year] = {};
        }
        if (!tempArchiveData[year][month]) {
          tempArchiveData[year][month] = [];
        }
        tempArchiveData[year][month].push(article);
      });
      archiveData.value = tempArchiveData;
    };
    onMounted(() => {
      initTimeline();
    });
    return (_ctx, _cache) => {
      const _component_a_button = Button;
      const _component_a_space = Space;
      const _component_a_tag = Tag;
      const _component_a_list_item_meta = ListItemMeta;
      const _component_a_list_item = ListItem;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            $category.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createBaseVNode("div", _hoisted_4, [
                createVNode(unref(FolderOutlined))
              ]),
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("h3", null, toDisplayString($category.value), 1),
                createBaseVNode("p", null, "共 " + toDisplayString($articleData.value.length) + " 篇文章", 1)
              ]),
              createVNode(_component_a_button, {
                type: "link",
                onClick: _cache[0] || (_cache[0] = ($event) => unref(goToLink)("/archives")),
                class: "clear-filter"
              }, {
                default: withCtx(() => [
                  createVNode(unref(CloseOutlined)),
                  createTextVNode("清除筛选 ")
                ]),
                _: 1
              })
            ], 64)) : $tag.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createBaseVNode("div", _hoisted_6, [
                createVNode(unref(TagOutlined$1))
              ]),
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("h3", null, toDisplayString($tag.value), 1),
                createBaseVNode("p", null, "共 " + toDisplayString($articleData.value.length) + " 篇文章", 1)
              ]),
              createVNode(_component_a_button, {
                type: "link",
                onClick: _cache[1] || (_cache[1] = ($event) => unref(goToLink)("/archives")),
                class: "clear-filter"
              }, {
                default: withCtx(() => [
                  createVNode(unref(CloseOutlined)),
                  createTextVNode("清除筛选 ")
                ]),
                _: 1
              })
            ], 64)) : $year.value ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
              createBaseVNode("div", _hoisted_8, [
                createVNode(unref(CalendarOutlined$1))
              ]),
              createBaseVNode("div", _hoisted_9, [
                createBaseVNode("h3", null, toDisplayString($year.value) + " 年", 1),
                createBaseVNode("p", null, "共 " + toDisplayString($articleData.value.length) + " 篇文章", 1)
              ]),
              createVNode(_component_a_button, {
                type: "link",
                onClick: _cache[2] || (_cache[2] = ($event) => unref(goToLink)("/archives")),
                class: "clear-filter"
              }, {
                default: withCtx(() => [
                  createVNode(unref(CloseOutlined)),
                  createTextVNode("清除筛选 ")
                ]),
                _: 1
              })
            ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [
              createBaseVNode("div", _hoisted_10, [
                createVNode(unref(FileTextOutlined))
              ]),
              createBaseVNode("div", _hoisted_11, [
                _hoisted_12,
                createBaseVNode("p", null, "共 " + toDisplayString(unref(data).length) + " 篇文章", 1)
              ])
            ], 64))
          ])
        ]),
        createBaseVNode("div", _hoisted_13, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(archiveData.value, (yearData, year) => {
            return openBlock(), createElementBlock("div", {
              key: year,
              class: "timeline-year"
            }, [
              createBaseVNode("div", _hoisted_14, [
                createBaseVNode("div", {
                  class: "year-badge",
                  onClick: ($event) => unref(goToLink)("/archives", "year", year.replace("年", ""))
                }, [
                  createBaseVNode("img", {
                    class: "zodiac-icon",
                    src: `/img/svg/chinese-zodiac/${unref(getChineseZodiac)(
                      year.replace("年", "")
                    )}.svg`,
                    title: unref(getChineseZodiacAlias)(year.replace("年", "")),
                    alt: "生肖"
                  }, null, 8, _hoisted_16),
                  createBaseVNode("span", null, toDisplayString(year), 1)
                ], 8, _hoisted_15),
                createBaseVNode("div", _hoisted_17, toDisplayString(Object.values(yearData).flat().length) + " 篇 ", 1)
              ]),
              createBaseVNode("div", _hoisted_18, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(yearData, (monthData, month) => {
                  return openBlock(), createElementBlock("div", {
                    key: `${year}-${month}`,
                    class: "month-group"
                  }, [
                    createBaseVNode("div", _hoisted_19, [
                      createVNode(unref(CalendarOutlined$1)),
                      createBaseVNode("span", null, toDisplayString(month), 1)
                    ]),
                    createBaseVNode("div", _hoisted_20, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(monthData, (article) => {
                        return openBlock(), createBlock(_component_a_list_item, {
                          key: article.path,
                          class: "article-item"
                        }, {
                          extra: withCtx(() => [
                            createVNode(_component_a_space, {
                              direction: "vertical",
                              align: "end",
                              size: 2
                            }, {
                              default: withCtx(() => [
                                createBaseVNode("span", _hoisted_21, toDisplayString(formatDate(article.date).day), 1),
                                createBaseVNode("span", _hoisted_22, toDisplayString(formatDate(article.date).month), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_a_list_item_meta, null, {
                              title: withCtx(() => {
                                var _a;
                                return [
                                  createBaseVNode("a", {
                                    href: article.path,
                                    class: "article-title",
                                    target: "_blank"
                                  }, [
                                    createTextVNode(toDisplayString(article.title) + " ", 1),
                                    ((_a = article.categories) == null ? void 0 : _a.includes("杂碎逆袭史")) ? (openBlock(), createBlock(_component_a_tag, {
                                      key: 0,
                                      class: "feature-tag"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" 精选 ")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true)
                                  ], 8, _hoisted_23)
                                ];
                              }),
                              description: withCtx(() => {
                                var _a, _b;
                                return [
                                  createBaseVNode("div", _hoisted_24, [
                                    ((_a = article.categories) == null ? void 0 : _a.length) ? (openBlock(), createBlock(_component_a_space, {
                                      key: 0,
                                      size: 8
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createElementBlock(Fragment, null, renderList(article.categories, (category) => {
                                          return openBlock(), createBlock(_component_a_tag, {
                                            key: category,
                                            class: "category-tag",
                                            onClick: withModifiers(($event) => unref(goToLink)("/archives", "category", category), ["stop"])
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(FolderOutlined)),
                                              createTextVNode(toDisplayString(category), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"]);
                                        }), 128))
                                      ]),
                                      _: 2
                                    }, 1024)) : createCommentVNode("", true),
                                    ((_b = article.tags) == null ? void 0 : _b.length) ? (openBlock(), createBlock(_component_a_space, {
                                      key: 1,
                                      size: 8
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createElementBlock(Fragment, null, renderList(article.tags, (tag) => {
                                          return openBlock(), createBlock(_component_a_tag, {
                                            key: tag,
                                            class: "tag",
                                            onClick: withModifiers(($event) => unref(goToLink)("/archives", "tag", tag), ["stop"])
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(unref(TagOutlined$1)),
                                              createTextVNode(toDisplayString(tag), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"]);
                                        }), 128))
                                      ]),
                                      _: 2
                                    }, 1024)) : createCommentVNode("", true)
                                  ])
                                ];
                              }),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ])
                  ]);
                }), 128))
              ])
            ]);
          }), 128))
        ])
      ]);
    };
  }
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-12a5f2e8"]]);
const __pageData = JSON.parse('{"title":"我的归档","description":"","frontmatter":{"title":"我的归档","aside":false,"editLink":false,"lastUpdated":false,"showComment":false},"headers":[],"relativePath":"archives.md","filePath":"archives.md","lastUpdated":1739460242000}');
const _sfc_main = { name: "archives.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Archive = __unplugin_components_0;
  const _component_ClientOnly = resolveComponent("ClientOnly");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_ClientOnly, null, {
      default: withCtx(() => [
        createVNode(_component_Archive)
      ]),
      _: 1
    })
  ]);
}
const archives = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  archives as default
};
