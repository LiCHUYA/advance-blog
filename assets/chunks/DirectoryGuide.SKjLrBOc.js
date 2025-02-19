import { d as defineComponent, h as ref, g as computed, o as openBlock, c as createElementBlock, k as createBaseVNode, b as createBlock, m as unref, I as createVNode, a9 as withDirectives, ar as vModelText, e as createCommentVNode, w as withCtx, F as Fragment, O as normalizeStyle, n as normalizeClass, t as toDisplayString, T as Transition, al as TransitionGroup, E as renderList, a8 as vShow, p as pushScopeId, q as popScopeId, _ as _export_sfc } from "./framework.b55ravPP.js";
import { U as UnorderedListOutlined, A as AppstoreOutlined, S as SearchOutlined, C as CaretRightOutlined, R as RightOutlined } from "./UnorderedListOutlined.kzUDOZMQ.js";
import { C as CloseOutlined } from "./CloseOutlined.gG5NVs8Y.js";
import { F as FolderOutlined } from "./FolderOutlined.GvKKgIjs.js";
import { F as FileTextOutlined } from "./FileTextOutlined.RqbU9wV3.js";
const _withScopeId = (n) => (pushScopeId("data-v-d93c69c8"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "directory-guide" };
const _hoisted_2 = {
  class: "guide-header",
  style: {}
};
const _hoisted_3 = {
  class: "guide-actions",
  style: { "margin-top": "10px" }
};
const _hoisted_4 = ["title"];
const _hoisted_5 = { class: "search-wrapper" };
const _hoisted_6 = { class: "guide-content" };
const _hoisted_7 = ["onClick"];
const _hoisted_8 = { class: "header-left" };
const _hoisted_9 = { class: "icon-group" };
const _hoisted_10 = { class: "title-group" };
const _hoisted_11 = { class: "section-title" };
const _hoisted_12 = { class: "section-content" };
const _hoisted_13 = ["href"];
const _hoisted_14 = { class: "doc-index" };
const _hoisted_15 = ["innerHTML"];
const _hoisted_16 = {
  key: 0,
  class: "no-results"
};
const _hoisted_17 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, "未找到相关文档", -1));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DirectoryGuide",
  props: {
    sections: {},
    sectionLayoutStyle: { default: "spread" }
  },
  setup(__props) {
    const props = __props;
    const searchText = ref("");
    const handleSearch = () => {
      if (!searchText.value) {
        expandedSections.value = [];
      } else {
        expandedSections.value = filteredSections.value.map((s) => s.title);
      }
    };
    const filteredSections = computed(() => {
      if (!searchText.value)
        return props.sections;
      return props.sections.filter((section) => {
        const hasMatchingTitle = section.title.toLowerCase().includes(searchText.value.toLowerCase());
        const hasMatchingItems = section.items.some(
          (item) => item.title.toLowerCase().includes(searchText.value.toLowerCase())
        );
        return hasMatchingTitle || hasMatchingItems;
      });
    });
    const highlightText = (text) => {
      if (!searchText.value)
        return text;
      const regex = new RegExp(`(${searchText.value})`, "gi");
      return text.replace(regex, '<span class="highlight-text">$1</span>');
    };
    const expandedSections = ref([]);
    const isAllExpanded = computed(() => {
      return filteredSections.value.every(
        (section) => expandedSections.value.includes(section.title)
      );
    });
    const expandAll = () => {
      if (isAllExpanded.value) {
        expandedSections.value = [];
      } else {
        expandedSections.value = filteredSections.value.map((s) => s.title);
      }
    };
    const toggleSection = (sectionTitle) => {
      const index = expandedSections.value.indexOf(sectionTitle);
      if (index === -1) {
        expandedSections.value.push(sectionTitle);
      } else {
        expandedSections.value.splice(index, 1);
      }
    };
    const onExpandEnter = (el) => {
      const height = el.scrollHeight;
      el.style.height = "0";
      requestAnimationFrame(() => {
        el.style.height = `${height}px`;
      });
    };
    const onExpandAfterEnter = (el) => {
      el.style.height = "auto";
    };
    const onExpandLeave = (el) => {
      const height = el.scrollHeight;
      el.style.height = `${height}px`;
      requestAnimationFrame(() => {
        el.style.height = "0";
      });
    };
    const clearSearch = () => {
      searchText.value = "";
      handleSearch();
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("button", {
              class: "action-btn",
              onClick: expandAll,
              title: isAllExpanded.value ? "全部收起" : "全部展开"
            }, [
              isAllExpanded.value ? (openBlock(), createBlock(unref(UnorderedListOutlined), { key: 0 })) : (openBlock(), createBlock(unref(AppstoreOutlined), { key: 1 }))
            ], 8, _hoisted_4),
            createBaseVNode("div", _hoisted_5, [
              createVNode(unref(SearchOutlined), { class: "search-icon" }),
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchText.value = $event),
                class: "search-input",
                placeholder: "搜索文档...",
                onInput: handleSearch
              }, null, 544), [
                [vModelText, searchText.value]
              ]),
              searchText.value ? (openBlock(), createBlock(unref(CloseOutlined), {
                key: 0,
                class: "clear-btn",
                onClick: clearSearch
              })) : createCommentVNode("", true)
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_6, [
          createVNode(TransitionGroup, { name: "section" }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(filteredSections.value, (section, index) => {
                return openBlock(), createElementBlock("div", {
                  key: section.title,
                  class: "section",
                  style: normalizeStyle({ "--delay": `${index * 0.05}s` })
                }, [
                  createBaseVNode("div", {
                    class: normalizeClass(["section-header", {
                      active: expandedSections.value.includes(section.title),
                      "layout-compact": _ctx.sectionLayoutStyle === "compact"
                    }]),
                    onClick: ($event) => toggleSection(section.title)
                  }, [
                    createBaseVNode("div", _hoisted_8, [
                      createBaseVNode("div", _hoisted_9, [
                        createVNode(unref(CaretRightOutlined), {
                          class: normalizeClass(["expand-icon", {
                            expanded: expandedSections.value.includes(section.title)
                          }])
                        }, null, 8, ["class"]),
                        createVNode(unref(FolderOutlined), {
                          class: normalizeClass(["section-icon", {
                            "folder-open": expandedSections.value.includes(section.title)
                          }])
                        }, null, 8, ["class"])
                      ]),
                      createBaseVNode("div", _hoisted_10, [
                        createBaseVNode("span", _hoisted_11, toDisplayString(section.title), 1),
                        section.items.length && _ctx.sectionLayoutStyle === "compact" ? (openBlock(), createElementBlock("span", {
                          key: 0,
                          class: normalizeClass(["doc-count", {
                            highlight: expandedSections.value.includes(section.title)
                          }])
                        }, toDisplayString(section.items.length ?? 0) + "篇 ", 3)) : createCommentVNode("", true)
                      ])
                    ]),
                    section.items.length && _ctx.sectionLayoutStyle === "spread" ? (openBlock(), createElementBlock("span", {
                      key: 0,
                      class: normalizeClass(["doc-count", { highlight: expandedSections.value.includes(section.title) }])
                    }, toDisplayString(section.items.length ?? 0) + "篇 ", 3)) : createCommentVNode("", true)
                  ], 10, _hoisted_7),
                  createVNode(Transition, {
                    name: "expand",
                    onEnter: onExpandEnter,
                    onAfterEnter: onExpandAfterEnter,
                    onLeave: onExpandLeave
                  }, {
                    default: withCtx(() => [
                      withDirectives(createBaseVNode("div", _hoisted_12, [
                        createVNode(TransitionGroup, {
                          name: "list",
                          tag: "div",
                          class: "documents-list"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(section.items, (item, itemIndex) => {
                              return openBlock(), createElementBlock("a", {
                                key: itemIndex,
                                href: item.link,
                                class: normalizeClass(["doc-item", {
                                  highlight: searchText.value && item.title.toLowerCase().includes(searchText.value.toLowerCase())
                                }])
                              }, [
                                createBaseVNode("span", _hoisted_14, toDisplayString(String(itemIndex + 1).padStart(2, "0")), 1),
                                createVNode(unref(FileTextOutlined), { class: "doc-icon" }),
                                createBaseVNode("span", {
                                  class: "doc-title",
                                  innerHTML: highlightText(item.title)
                                }, null, 8, _hoisted_15),
                                createVNode(unref(RightOutlined), { class: "doc-arrow" })
                              ], 10, _hoisted_13);
                            }), 128))
                          ]),
                          _: 2
                        }, 1024)
                      ], 512), [
                        [vShow, expandedSections.value.includes(section.title)]
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ], 4);
              }), 128))
            ]),
            _: 1
          }),
          searchText.value && !filteredSections.value.length ? (openBlock(), createElementBlock("div", _hoisted_16, [
            createVNode(unref(SearchOutlined), { class: "no-results-icon" }),
            _hoisted_17
          ])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d93c69c8"]]);
export {
  __unplugin_components_1 as _
};
