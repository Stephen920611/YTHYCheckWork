(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"3q3L":function(e,a,t){e.exports={breadcrumbWrapper:"antd-pro-templates-tool-components-custom-breadcrumb-index-breadcrumbWrapper"}},QjEn:function(e,a,t){"use strict";t.r(a);t("xju3");var n,r,l=t("993v"),c=(t("7lm+"),t("Oy9c")),s=(t("flUi"),t("BFxG")),m=t("43Yg"),i=t.n(m),o=t("/tCh"),p=t.n(o),d=t("scpF"),u=t.n(d),E=t("O/V9"),h=t.n(E),k=t("8aBX"),y=t.n(k),T=t("2w0b"),P=t.n(T),f=t("LneV"),N=t("TlXY"),w=t.n(N),O=t("qj9E"),b=t("zHco"),g=t("mK77"),I=t.n(g),v=(t("xjEU"),t("uiF6")),C=(t("/UAO"),t("qnK4")),B=t("BG4o"),S=t.n(B),U=(t("EH+i"),t("3q3L"),t("h5Yw")),x=t.n(U),M=function(e){var a=e.dataSource,t=void 0===a?[]:a,n=S()(e,["dataSource"]);return P.a.createElement(C["a"],n,H(t))},H=function(e){return e.map(function(e,a){return P.a.createElement(C["a"].Item,{key:a},e.hasOwnProperty("icon")?P.a.createElement(v["a"],{type:e.icon}):null,e.hasOwnProperty("linkTo")?P.a.createElement(x.a,{to:{pathname:e["linkTo"],params:I()({},e["params"])}},e.hasOwnProperty("name")?e.name:null):e.hasOwnProperty("name")?e.name:null)})},L=M,W=(n=Object(f["connect"])(function(e){var a=e.checkRecord,t=e.loading;return{checkRecord:a,fetchStatus:t.effects["checkRecord/fetchMemberInfoAction"]}}),n(r=function(e){function a(){var e;return i()(this,a),e=u()(this,h()(a).call(this)),e.state={activities:{},currentInfo:{},member:{},touch:[],basicPersonnelInformation:{msg:"success",code:0,activities:[{id:1362,memberId:2476,backFromWhere:"\u7701\u5185",backTime:"2020-02-02 17:37",backType:"\u81ea\u9a7e",carNum:"\u9c81fb7l21",wayCity:"\u6dc4\u535a\u4e34\u6dc4\u533a",createTime:"2020-02-11 11:40",fillUserId:1103,fillUserName:"\u6d4b\u8bd5\u5218"}],currnets:[{id:1494,memberId:2476,bodyCondition:"\u6b63\u5e38",hasSeek:"\u662f",seekHospital:"\u83b1\u5c71\u6bd3\u749c\u9876",seekTime:"2020-02-08 08:39",controlMeasures:"\u5c45\u5bb6\u9694\u79bb",controlTime:"2020-02-05 11:40",nextMeasures:"\u5c45\u5bb6\u9694\u79bb",createTime:"2020-02-11 11:42",fillUserId:1103,fillUserName:"\u6d4b\u8bd5\u5218"}],member:{id:2476,area:"\u83b1\u5c71\u533a",name:"\u5218\u6653\u6668",address:"\u83b1\u5c71\u6cb3\u897f\u57ce\u5e02\u82b1\u56ed",idCard:"370781199312257865",phoneNum:"17862886396",age:26,gender:"\u7537",nativePlace:"\u5c71\u4e1c\u6f4d\u574a",baseInfo:"\u6b63\u5e38",createTime:"2020-02-11 11:39",fillUserId:1103,fillUserName:"\u6d4b\u8bd5\u5218"},touch:[{id:1128,memberId:2476,isTouchSuspect:"\u662f",suspectName:"\u6d4b\u8bd51",suspectIdCard:"838288281873322",suspectTime:"2020-02-01 11:38",suspectPoint:"\u4e34\u6dc4\u535a\u4e34\u6dc4\u533a",isTouchIntimate:"\u662f",intimateName:"\u6d4b\u8bd52",intimateIdCard:"\u5c31\u662f\u5c31\u662f\u9526\u6c5f\u5927\u9152\u5e97",intimateTime:"2020-01-01 11:39",intimatePoint:"\u9752\u5dde\u5e02\u516c\u5b89\u5c40",isTouchInfector:"\u5426",infectorName:"\u6d4b\u8bd53",infectorIdCard:"\u8fd9\u5b69\u5b50\u5c31\u662f\u5c31\u662f\u5c31\u662f",infectorTime:"2020-02-09 11:39",infectorPoint:"\u83b1\u5c71\u6cb3\u897f\u8d70\u5eca",createTime:"2020-02-11 11:41",fillUserId:1103,fillUserName:"\u6d4b\u8bd5\u5218"}]}},e}return y()(a,e),p()(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.dispatch,t=e.location,n=this;O["a"].auth.returnSpecialMainPage(t,"/checkRecord"),t.hasOwnProperty("params")&&t["params"].hasOwnProperty("data")&&new Promise(function(e,n){a({type:"checkRecord/fetchMemberInfoAction",id:t["params"]["data"]["id"],resolve:e,reject:n})}).then(function(e){var a=e.data,t=a.currnets,r=a.member,l=a.touch,c=a.activities;0===e.code?n.setState({activities:O["a"].lodash.isUndefined(c[0])?{}:c[0],currentInfo:O["a"].lodash.isUndefined(t[0])?{}:t[0],member:r,touch:O["a"].lodash.isUndefined(l[0])?{}:l[0]}):O["a"].prompt.error(e.msg)})}},{key:"render",value:function(){var e=this.props.fetchStatus,a=this.state,t=a.activities,n=a.currentInfo,r=a.member,m=a.touch,i=[{linkTo:"/checkRecord",name:"\u6478\u6392\u8bb0\u5f55\u67e5\u8be2"},{name:"\u75ab\u60c5\u9632\u63a7\u8c03\u67e5\u8be6\u60c5\u67e5\u770b"}];return P.a.createElement(b["a"],{title:"\u75ab\u60c5\u9632\u63a7\u8c03\u67e5\u8be6\u60c5\u67e5\u770b",isSpecialBreadcrumb:!0,breadcrumbName:P.a.createElement(L,{dataSource:i})},P.a.createElement("div",null,P.a.createElement("div",{className:w.a.detailItem},P.a.createElement("div",{className:w.a.detailTitleName},"\u4eba\u5458\u57fa\u672c\u4fe1\u606f"),P.a.createElement(l["a"],{style:{marginBottom:20},loading:e},P.a.createElement(c["a"],{className:w.a.detailTitle},P.a.createElement(s["a"],{span:6},P.a.createElement("span",null,"\u53bf\u5e02\u533a\uff1a"),P.a.createElement("span",null,r.hasOwnProperty("area")?r.area:"---")),P.a.createElement(s["a"],{span:6,className:w.a.detailBtns},P.a.createElement("span",null,"\u59d3\u540d\uff1a"),P.a.createElement("span",null,r.hasOwnProperty("name")?r.name:"---")),P.a.createElement(s["a"],{span:6},P.a.createElement("span",null,"\u5e74\u9f84\uff1a"),P.a.createElement("span",null,r.hasOwnProperty("age")?r.age:"---")),P.a.createElement(s["a"],{span:6},P.a.createElement("span",null,"\u6027\u522b\uff1a"),P.a.createElement("span",null,r.hasOwnProperty("gender")?r.gender:"---"))),P.a.createElement(c["a"],{className:w.a.detailTitle},P.a.createElement(s["a"],{span:6},P.a.createElement("span",null,"\u7c4d\u8d2f\uff1a"),P.a.createElement("span",null,r.hasOwnProperty("nativePlace")?r.nativePlace:"---")),P.a.createElement(s["a"],{span:6,className:w.a.detailBtns},P.a.createElement("span",null,"\u4f4f\u5740\uff1a"),P.a.createElement("span",null,r.hasOwnProperty("address")?r.address:"---")),P.a.createElement(s["a"],{span:6},P.a.createElement("span",null,"\u8eab\u4efd\u8bc1\u53f7\u7801\uff1a"),P.a.createElement("span",null,r.hasOwnProperty("idCard")?r.idCard:"---")),P.a.createElement(s["a"],{span:6},P.a.createElement("span",null,"\u8054\u7cfb\u7535\u8bdd\uff1a"),P.a.createElement("span",null,r.hasOwnProperty("phoneNum")?r.phoneNum:"---"))),P.a.createElement(c["a"],{className:w.a.detailTitle},P.a.createElement(s["a"],{span:6},P.a.createElement("span",null,"\u88ab\u8c03\u67e5\u4eba\u57fa\u672c\u60c5\u51b5\uff1a"),P.a.createElement("span",null,r.hasOwnProperty("baseInfo")?r.baseInfo:"---")))),P.a.createElement("div",{className:w.a.detailTitleName},"\u4eba\u5458\u6d3b\u52a8\u4fe1\u606f"),P.a.createElement(l["a"],{style:{marginBottom:20},loading:e},P.a.createElement(c["a"],{className:w.a.detailTitle},P.a.createElement(s["a"],{span:6},P.a.createElement("span",null,"\u4ece\u4f55\u5730\u6765\u70df(\u8fd4\u70df)\uff1a"),P.a.createElement("span",null,t.hasOwnProperty("backFromWhere")?t.backFromWhere:"---")),P.a.createElement(s["a"],{span:6,className:w.a.detailBtns},P.a.createElement("span",null,"\u6765\u70df(\u8fd4\u70df)\u65f6\u95f4\uff1a"),P.a.createElement("span",null,t.hasOwnProperty("backTime")?t.backTime:"---")),P.a.createElement(s["a"],{span:6},P.a.createElement("span",null,"\u6765\u70df(\u8fd4\u70df)\u65b9\u5f0f\uff1a"),P.a.createElement("span",null,t.hasOwnProperty("backType")?t.backType:"---")),P.a.createElement(s["a"],{span:6},P.a.createElement("span",null,"\u822a\u73ed/\u8f66\u6b21/\u8239\u6b21/\u8f66\u724c\u53f7\uff1a"),P.a.createElement("span",null,t.hasOwnProperty("carNum")?t.carNum:"---"))),P.a.createElement(c["a"],{className:w.a.detailTitle},P.a.createElement(s["a"],{span:6},P.a.createElement("span",null,"\u671f\u95f4\u8fd8\u5230\u8fc7\u54ea\u4e9b\u57ce\u5e02\uff1a"),P.a.createElement("span",null,t.hasOwnProperty("wayCity")?t.wayCity:"---")))),P.a.createElement("div",{className:w.a.detailTitleName},"\u4eba\u5458\u63a5\u89e6\u4fe1\u606f"),P.a.createElement(l["a"],{style:{marginBottom:20},loading:e},P.a.createElement(c["a"],{className:w.a.detailTitle},P.a.createElement(s["a"],{span:6},P.a.createElement("span",null,"\u662f\u5426\u4e0e\u786e\u8bca\u3001\u7591\u4f3c\u75c5\u4f8b\u5bc6\u5207\u63a5\u89e6\u8fc7\uff1a"),P.a.createElement("span",null,m.hasOwnProperty("isTouchSuspect")?m.isTouchSuspect:"---"))),P.a.createElement(c["a"],{className:w.a.detailTitle},P.a.createElement(s["a"],{span:6},P.a.createElement("span",null,"\u63a5\u89e6\u8005\u59d3\u540d\uff1a"),P.a.createElement("span",null,m.hasOwnProperty("suspectName")?m.suspectName:"---")),P.a.createElement(s["a"],{span:6},P.a.createElement("span",null,"\u63a5\u89e6\u8005\u8eab\u4efd\u8bc1\u53f7\uff1a"),P.a.createElement("span",null,m.hasOwnProperty("suspectIdCard")?m.suspectIdCard:"---")),P.a.createElement(s["a"],{span:6,className:w.a.detailBtns},P.a.createElement("span",null,"\u63a5\u89e6\u65f6\u95f4\uff1a"),P.a.createElement("span",null,m.hasOwnProperty("suspectTime")?m.suspectTime:"---")),P.a.createElement(s["a"],{span:6},P.a.createElement("span",null,"\u63a5\u89e6\u5730\u70b9\uff1a"),P.a.createElement("span",null,m.hasOwnProperty("suspectPoint")?m.suspectPoint:"---"))),P.a.createElement(c["a"],{className:w.a.detailTitle},P.a.createElement(s["a"],{span:6},P.a.createElement("span",null,"\u662f\u5426\u4e0e\u5bc6\u5207\u63a5\u89e6\u8005\u5171\u540c\u751f\u6d3b\u3001\u5de5\u4f5c\u3001\u5b66\u4e60\u3001\u805a\u4f1a\u8fc7\uff1a"),P.a.createElement("span",null,m.hasOwnProperty("isTouchIntimate")?m.isTouchIntimate:"---"))),P.a.createElement(c["a"],{className:w.a.detailTitle},P.a.createElement(s["a"],{span:6},P.a.createElement("span",null,"\u63a5\u89e6\u8005\u59d3\u540d\uff1a"),P.a.createElement("span",null,m.hasOwnProperty("intimateName")?m.intimateName:"---")),P.a.createElement(s["a"],{span:6},P.a.createElement("span",null,"\u63a5\u89e6\u8005\u8eab\u4efd\u8bc1\u53f7\uff1a"),P.a.createElement("span",null,m.hasOwnProperty("intimateIdCard")?m.intimateIdCard:"---")),P.a.createElement(s["a"],{span:6,className:w.a.detailBtns},P.a.createElement("span",null,"\u63a5\u89e6\u65f6\u95f4\uff1a"),P.a.createElement("span",null,m.hasOwnProperty("intimateTime")?m.intimateTime:"---")),P.a.createElement(s["a"],{span:6},P.a.createElement("span",null,"\u63a5\u89e6\u5730\u70b9\uff1a"),P.a.createElement("span",null,m.hasOwnProperty("intimatePoint")?m.intimatePoint:"---"))),P.a.createElement(c["a"],{className:w.a.detailTitle},P.a.createElement(s["a"],{span:6},P.a.createElement("span",null,"\u662f\u5426\u4e0e\u91cd\u70b9\u75ab\u533a\u4eba\u5458\u63a5\u89e6\u8fc7\uff1a"),P.a.createElement("span",null,m.hasOwnProperty("isTouchInfector")?m.isTouchInfector:"---"))),P.a.createElement(c["a"],{className:w.a.detailTitle},P.a.createElement(s["a"],{span:6},P.a.createElement("span",null,"\u63a5\u89e6\u8005\u59d3\u540d\uff1a"),P.a.createElement("span",null,m.hasOwnProperty("infectorName")?m.infectorName:"---")),P.a.createElement(s["a"],{span:6},P.a.createElement("span",null,"\u63a5\u89e6\u8005\u8eab\u4efd\u8bc1\u53f7\uff1a"),P.a.createElement("span",null,m.hasOwnProperty("infectorIdCard")?m.infectorIdCard:"---")),P.a.createElement(s["a"],{span:6,className:w.a.detailBtns},P.a.createElement("span",null,"\u63a5\u89e6\u65f6\u95f4\uff1a"),P.a.createElement("span",null,m.hasOwnProperty("infectorTime")?m.infectorTime:"---")),P.a.createElement(s["a"],{span:6},P.a.createElement("span",null,"\u63a5\u89e6\u5730\u70b9\uff1a"),P.a.createElement("span",null,m.hasOwnProperty("infectorPoint")?m.infectorPoint:"---")))),P.a.createElement("div",{className:w.a.detailTitleName},"\u4eba\u5458\u5f53\u524d\u72b6\u6001"),P.a.createElement(l["a"],{style:{marginBottom:20},loading:e},P.a.createElement(c["a"],{className:w.a.detailTitle},P.a.createElement(s["a"],{span:6},P.a.createElement("span",null,"\u8eab\u4f53\u72b6\u51b5\uff1a"),P.a.createElement("span",null,n.hasOwnProperty("bodyCondition")?n.bodyCondition:"---")),P.a.createElement(s["a"],{span:6,className:w.a.detailBtns},P.a.createElement("span",null,"\u662f\u5426\u5c31\u533b\uff1a"),P.a.createElement("span",null,n.hasOwnProperty("hasSeek")?n.hasSeek:"---")),P.a.createElement(s["a"],{span:6},P.a.createElement("span",null,"\u5c31\u533b\u533b\u9662\uff1a"),P.a.createElement("span",null,n.hasOwnProperty("seekHospital")?n.seekHospital:"---")),P.a.createElement(s["a"],{span:6},P.a.createElement("span",null,"\u5c31\u533b\u65f6\u95f4\uff1a"),P.a.createElement("span",null,n.hasOwnProperty("seekTime")?n.seekTime:"---"))),P.a.createElement(c["a"],{className:w.a.detailTitle},P.a.createElement(s["a"],{span:6},P.a.createElement("span",null,"\u662f\u5426\u91c7\u53d6\u8fc7\u9632\u62a4\u63aa\u65bd\uff1a"),P.a.createElement("span",null,n.hasOwnProperty("controlMeasures")?n.controlMeasures:"---")),P.a.createElement(s["a"],{span:12,className:w.a.detailBtns},P.a.createElement("span",null,"\u4ec0\u4e48\u65f6\u95f4\u5185\u91c7\u53d6\u7684\u9632\u62a4\u63aa\u65bd\uff1a"),P.a.createElement("span",null,n.hasOwnProperty("controlTime")?n.controlTime:"---")),P.a.createElement(s["a"],{span:6},P.a.createElement("span",null,"\u4e0b\u6b65\u62df\u91c7\u53d6\u63aa\u65bd\uff1a"),P.a.createElement("span",null,n.hasOwnProperty("nextMeasures")?n.nextMeasures:"---"))),P.a.createElement(c["a"],{className:w.a.detailTitle},P.a.createElement(s["a"],{span:6},P.a.createElement("span",null,"\u586b\u62a5\u65e5\u671f\uff1a"),P.a.createElement("span",null,n.hasOwnProperty("createTime")?n.createTime:"---")),P.a.createElement(s["a"],{span:6},P.a.createElement("span",null,"\u6478\u6392\u4eba\uff1a"),P.a.createElement("span",null,n.hasOwnProperty("fillUserName")?n.fillUserName:"---")))))))}}]),a}(T["PureComponent"]))||r);a["default"]=W},TlXY:function(e,a,t){e.exports={missionDetailWrapper:"antd-pro-pages-check-record-check-record-detail-missionDetailWrapper",loading:"antd-pro-pages-check-record-check-record-detail-loading",missionStep:"antd-pro-pages-check-record-check-record-detail-missionStep",detailTitle:"antd-pro-pages-check-record-check-record-detail-detailTitle",detailSourceName:"antd-pro-pages-check-record-check-record-detail-detailSourceName",detailSourceBtns:"antd-pro-pages-check-record-check-record-detail-detailSourceBtns",detailBtns:"antd-pro-pages-check-record-check-record-detail-detailBtns",destinationName:"antd-pro-pages-check-record-check-record-detail-destinationName",salesExtra:"antd-pro-pages-check-record-check-record-detail-salesExtra",currentDate:"antd-pro-pages-check-record-check-record-detail-currentDate",detailItem:"antd-pro-pages-check-record-check-record-detail-detailItem",tableContainer:"antd-pro-pages-check-record-check-record-detail-tableContainer",detailLine:"antd-pro-pages-check-record-check-record-detail-detailLine",detailTable:"antd-pro-pages-check-record-check-record-detail-detailTable",detailTitleName:"antd-pro-pages-check-record-check-record-detail-detailTitleName",contentLink:"antd-pro-pages-check-record-check-record-detail-contentLink",extraImg:"antd-pro-pages-check-record-check-record-detail-extraImg",pageHeaderContent:"antd-pro-pages-check-record-check-record-detail-pageHeaderContent"}}}]);