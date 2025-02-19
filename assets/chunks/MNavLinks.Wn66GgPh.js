import { d as defineComponent, g as computed, o as openBlock, c as createElementBlock, k as createBaseVNode, m as unref, f as withBase, e as createCommentVNode, t as toDisplayString, _ as _export_sfc, a as createTextVNode, F as Fragment, E as renderList, b as createBlock } from "./framework.b55ravPP.js";
const rControl = /[\u0000-\u001f]/g;
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g;
const rCombining = /[\u0300-\u036F]/g;
const slugify = (str) => str.normalize("NFKD").replace(rCombining, "").replace(rControl, "").replace(rSpecial, "-").replace(/-{2,}/g, "-").replace(/^-+|-+$/g, "").replace(/^(\d)/, "_$1").toLowerCase();
const _hoisted_1$1 = ["href"];
const _hoisted_2$1 = { class: "box" };
const _hoisted_3$1 = { class: "box-header" };
const _hoisted_4 = ["innerHTML"];
const _hoisted_5 = {
  key: 1,
  class: "icon"
};
const _hoisted_6 = ["src", "alt"];
const _hoisted_7 = ["id"];
const _hoisted_8 = {
  key: 0,
  class: "desc"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MNavLink",
  props: {
    icon: {},
    title: {},
    desc: {},
    link: {}
  },
  setup(__props) {
    const props = __props;
    const formatTitle = computed(() => {
      if (!props.title) {
        return "";
      }
      return slugify(props.title);
    });
    const svg = computed(() => {
      if (typeof props.icon === "object")
        return props.icon.svg;
      return "";
    });
    return (_ctx, _cache) => {
      return _ctx.link ? (openBlock(), createElementBlock("a", {
        key: 0,
        class: "m-nav-link",
        href: _ctx.link,
        target: "_blank",
        rel: "noreferrer"
      }, [
        createBaseVNode("article", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3$1, [
            svg.value ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "icon",
              innerHTML: svg.value
            }, null, 8, _hoisted_4)) : _ctx.icon && typeof _ctx.icon === "string" ? (openBlock(), createElementBlock("div", _hoisted_5, [
              createBaseVNode("img", {
                src: unref(withBase)(_ctx.icon),
                alt: _ctx.title,
                onerror: "this.parentElement.style.display='none'"
              }, null, 8, _hoisted_6)
            ])) : createCommentVNode("", true),
            _ctx.title ? (openBlock(), createElementBlock("h5", {
              key: 2,
              id: formatTitle.value,
              class: "title"
            }, toDisplayString(_ctx.title), 9, _hoisted_7)) : createCommentVNode("", true)
          ]),
          _ctx.desc ? (openBlock(), createElementBlock("p", _hoisted_8, toDisplayString(_ctx.desc), 1)) : createCommentVNode("", true)
        ])
      ], 8, _hoisted_1$1)) : createCommentVNode("", true);
    };
  }
});
const MNavLink = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-cccce70f"]]);
const _hoisted_1 = ["id"];
const _hoisted_2 = ["href"];
const _hoisted_3 = { class: "m-nav-links" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MNavLinks",
  props: {
    title: {},
    items: {}
  },
  setup(__props) {
    const props = __props;
    const formatTitle = computed(() => {
      return slugify(props.title);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _ctx.title ? (openBlock(), createElementBlock("h2", {
          key: 0,
          id: formatTitle.value,
          tabindex: "-1"
        }, [
          createTextVNode(toDisplayString(_ctx.title) + " ", 1),
          createBaseVNode("a", {
            class: "header-anchor",
            href: `#${formatTitle.value}`,
            "aria-hidden": "true"
          }, null, 8, _hoisted_2)
        ], 8, _hoisted_1)) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, ({ icon, title, desc, link }) => {
            return openBlock(), createBlock(MNavLink, {
              key: link,
              icon,
              title,
              desc,
              link
            }, null, 8, ["icon", "title", "desc", "link"]);
          }), 128))
        ])
      ], 64);
    };
  }
});
const MNavLinks = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-061029d8"]]);
export {
  MNavLinks as M
};
