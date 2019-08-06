(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{198:function(t,a,s){"use strict";s.r(a);var n=s(0),o=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("一般来说公司都会自己jar版本管理工程，那如何和spring-boot-starter-parent结合使用呢？")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),s("p",[t._v("其他项目pom.xml文件添加parent就可以了")]),t._v(" "),t._m(16),s("p",[t._v("完整代码："),s("a",{attrs:{href:"https://github.com/liuyukuai/demo-spring-cloud/tree/master/demo-spring-boot-parent",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/liuyukuai/demo-spring-cloud/tree/master/demo-spring-boot-parent"),s("OutboundLink")],1)])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"springboot系列：自定义parent工程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springboot系列：自定义parent工程","aria-hidden":"true"}},[this._v("#")]),this._v(" SpringBoot系列：自定义Parent工程")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境","aria-hidden":"true"}},[this._v("#")]),this._v(" 环境")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("Spring Boot 2.0.4.RELEASE")]),this._v(" "),a("li",[this._v("JDK 1.8.0_181")]),this._v(" "),a("li",[this._v("Maven 3.5.4")]),this._v(" "),a("li",[this._v("IntelliJ IDEA 2018.1.6")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"需求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需求","aria-hidden":"true"}},[this._v("#")]),this._v(" 需求")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("创建一个名为demo-spring-boot-parent的工程")]),this._v(" "),a("li",[this._v("修改工程的pom.xml文件")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v(" "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependencyManagement")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependencies")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Import dependency management from Spring Boot --\x3e")]),t._v("\n            "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.boot"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-boot-dependencies"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.0.4.RELEASE"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("type")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("pom"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("type")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("scope")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("import"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("scope")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependencies")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependencyManagement")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("添加jar版本管理")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("commons-io"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("commons-io"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.6"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("也可以覆盖spring-boot-dependencies中定义的版本，比如spring-aop")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-aop"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("5.0.8.RELEASE"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("完整配置如下")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v("\n"),s("span",{attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("project")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("xmlns")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://maven.apache.org/POM/4.0.0"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("xsi")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.w3.org/2001/XMLSchema-instance"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n         "),s("span",{attrs:{class:"token attr-name"}},[s("span",{attrs:{class:"token namespace"}},[t._v("xsi:")]),t._v("schemaLocation")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("modelVersion")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("4.0.0"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("modelVersion")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.itxiaoer"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("demo-spring-boot-parent"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0.0.1-SNAPSHOT"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("packaging")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("pom"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("packaging")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("demo-spring-boot-parent"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("description")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Demo project for Spring Boot"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("description")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("properties")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("project.build.sourceEncoding")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("UTF-8"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("project.build.sourceEncoding")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("project.reporting.outputEncoding")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("UTF-8"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("project.reporting.outputEncoding")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("java.version")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.8"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("java.version")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("properties")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependencyManagement")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependencies")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Import dependency management from Spring Boot --\x3e")]),t._v("\n                "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.boot"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-boot-dependencies"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.0.4.RELEASE"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("type")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("pom"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("type")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("scope")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("import"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("scope")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n            "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("commons-io"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("commons-io"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.6"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-aop"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("5.0.8.RELEASE"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependencies")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependencyManagement")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("build")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plugins")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plugin")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.boot"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-boot-maven-plugin"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("plugin")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("plugins")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("build")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("project")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("打包发布")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("# 本地发布使用\n$ mvn install \n\n#或者发布到maven仓库 \n$ mvn deploy \n\n[INFO] Scanning for projects...\n[INFO] \n[INFO] ----------------< com.itxiaoer:demo-spring-boot-parent >----------------\n[INFO] Building demo-spring-boot-parent 0.0.1-SNAPSHOT\n[INFO] --------------------------------[ pom ]---------------------------------\n[INFO] \n[INFO] --- maven-install-plugin:2.4:install (default-install) @ demo-spring-boot-parent ---\n[INFO] Installing /Users/liuyukuai/Documents/develop/demo-spring-cloud/demo-spring-boot-parent/pom.xml to /Users/liuyukuai/Documents/maven/com/itxiaoer/demo-spring-boot-parent/0.0.1-SNAPSHOT/demo-spring-boot-parent-0.0.1-SNAPSHOT.pom\n[INFO] ------------------------------------------------------------------------\n[INFO] BUILD SUCCESS\n[INFO] ------------------------------------------------------------------------\n[INFO] Total time: 0.424 s\n[INFO] Finished at: 2018-08-31T13:23:16+08:00\n[INFO] ------------------------------------------------------------------------\n\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("parent")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.itxiaoer"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("demo-spring-boot-parent"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0.0.1-SNAPSHOT"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("relativePath")]),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("parent")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])])}],!1,null,null,null);o.options.__file="spring-boot-dependencies.md";a.default=o.exports}}]);