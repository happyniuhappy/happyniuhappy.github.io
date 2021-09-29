(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{1421:function(t,a,s){"use strict";s.r(a);var n=s(30),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"动画参数对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动画参数对象"}},[t._v("#")]),t._v(" 动画参数对象")]),t._v(" "),s("h2",{attrs:{id:"一、动画js引入-引入animation方式调用-使用svgstacicview方式引用请查询svg绘制组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、动画js引入-引入animation方式调用-使用svgstacicview方式引用请查询svg绘制组件"}},[t._v("#")]),t._v(" 一、动画js引入（引入animation方式调用，使用SvgStacicView方式引用请查询SVG绘制组件）")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" animation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stopAnimation "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./animation"')]),t._v("\n")])])]),s("p",[t._v("animation为动画调用方法，包含两个参数：features-执行动画的图形数组、opt-动画相关参数对象数组，包含动画类型type等，返回数据为动画标识对象ID。")]),t._v(" "),s("p",[t._v("stopAnimation为停止动画调用方法，包含一个参数：animationId-动画标识对象ID，无返回数据。")]),t._v(" "),s("h2",{attrs:{id:"二、动画方法调用-引入animation方式调用-使用svgstacicview方式引用请查询svg绘制组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、动画方法调用-引入animation方式调用-使用svgstacicview方式引用请查询svg绘制组件"}},[t._v("#")]),t._v(" 二、动画方法调用（引入animation方式调用，使用SvgStacicView方式引用请查询SVG绘制组件）")]),t._v(" "),s("p",[t._v("1、动画执行")]),t._v(" "),s("p",[t._v("图形平台数据接口返回当前图层的所有图元信息，实际项目中依据自身需求过滤得出需要执行动画的图形数组，调用animation方法即可获取当前动画标识ID。（建议保存当前执行动画标识ID）")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" animationId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("animation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cells"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" opt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("2、动画停止")]),t._v(" "),s("p",[t._v("调用停止动画方法，传入需要停止的动画标识ID，即可停止该类动画效果。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stopAnimation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("animationId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"三、动画参数对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、动画参数对象"}},[t._v("#")]),t._v(" 三、动画参数对象")]),t._v(" "),s("p",[t._v("opt参数为动画相关参数对象，包含动画类型及不同类型下动画效果（颜色、频率、范围等）的设置。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("opt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"flash"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//动画效果，flash-闪烁效果，scale-放大效果，trend-潮流动画效果")]),t._v("\n    color"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#777777"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//默认颜色灰色")]),t._v("\n    scope"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//默认范围（闪烁范围、放大范围），2倍大小")]),t._v("\n    times"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//默认次数（闪烁次数），0为indefinite")]),t._v("\n    duration"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//默认频率（闪烁频率），4为4秒执行1次")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);