(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{BOD2:function(a,e,t){a.exports={container:"antd-pro-layouts-user-layout-container",lang:"antd-pro-layouts-user-layout-lang",content:"antd-pro-layouts-user-layout-content",top:"antd-pro-layouts-user-layout-top",header:"antd-pro-layouts-user-layout-header",logo:"antd-pro-layouts-user-layout-logo",title:"antd-pro-layouts-user-layout-title",desc:"antd-pro-layouts-user-layout-desc"}},jH8a:function(a,e,t){"use strict";t.r(e);var n=t("43Yg"),o=t.n(n),r=t("/tCh"),l=t.n(r),u=t("scpF"),c=t.n(u),s=t("O/V9"),i=t.n(s),m=t("8aBX"),p=t.n(m),d=(t("xjEU"),t("uiF6")),y=t("2w0b"),h=t.n(y),g=(t("lvdA"),t("LneV")),E=t("Cjad"),b=t.n(E),v=t("ggcP"),N=t("bfXr"),f=t("BOD2"),w=t.n(f),D=t("mxmt"),M=t.n(D),j=t("tGQQ"),k=(t("6tMq"),[]),O=h.a.createElement(y["Fragment"],null,"Copyright ",h.a.createElement(d["a"],{type:"copyright"})," 2020 \u5927\u6570\u636e\u5c40"),B=function(a){function e(){return o()(this,e),c()(this,i()(e).apply(this,arguments))}return p()(e,a),l()(e,[{key:"componentDidMount",value:function(){var a=this.props,e=a.dispatch,t=a.route,n=t.routes,o=t.authority;e({type:"menu/getMenuData",payload:{routes:n,authority:o}})}},{key:"render",value:function(){var a=this.props,e=a.children,t=a.location.pathname,n=a.breadcrumbNameMap;return h.a.createElement(b.a,{title:Object(j["a"])(t,n)},h.a.createElement("div",{className:w.a.container},h.a.createElement("div",{className:w.a.lang},h.a.createElement(N["a"],null)),h.a.createElement("div",{className:w.a.content},h.a.createElement("div",{className:w.a.top},h.a.createElement("div",{className:w.a.header,style:{marginBottom:30}},h.a.createElement("img",{alt:"logo",className:w.a.logo,src:M.a}),h.a.createElement("span",{className:w.a.title},"\u75ab\u60c5\u9632\u63a7\u7cfb\u7edf"))),e),h.a.createElement(v["a"],{links:k,copyright:O})))}}]),e}(y["Component"]);e["default"]=Object(g["connect"])(function(a){var e=a.menu;return{menuData:e.menuData,breadcrumbNameMap:e.breadcrumbNameMap}})(B)}}]);