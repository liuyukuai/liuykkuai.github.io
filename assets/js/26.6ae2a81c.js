(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{213:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"jvm系列：引用类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jvm系列：引用类型","aria-hidden":"true"}},[t._v("#")]),t._v(" JVM系列：引用类型")]),t._v(" "),s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("p",[t._v("Java.lang.ref 是 Java 类库中比较特殊的一个包，它提供了与Java垃圾回收器密切相关的引用类。一共有4中引用类型：")]),t._v(" "),s("ul",[s("li",[t._v("强引用（StrongReference）")]),t._v(" "),s("li",[t._v("软引用（SoftReference）")]),t._v(" "),s("li",[t._v("弱引用（WeakReference）")]),t._v(" "),s("li",[t._v("虚引用（PhantomReference）")])]),t._v(" "),s("h2",{attrs:{id:"强引用（strongreference）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#强引用（strongreference）","aria-hidden":"true"}},[t._v("#")]),t._v(" 强引用（StrongReference）")]),t._v(" "),s("p",[t._v("我们知道JVM中对象是被分配到堆上的，当程序中不再有引用指向这个对象时，该对象被虚拟机回收，一般我们都使用强引用来对对象引用。")]),t._v(" "),s("h3",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("StrongRef")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("main")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("//  强引用")]),t._v("\n        Object obj "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        System"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("println")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特点","aria-hidden":"true"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),s("ul",[s("li",[t._v("强引用可以直接访问对象")]),t._v(" "),s("li",[t._v("强引用所指的对象在任何时候都不会被回收")]),t._v(" "),s("li",[t._v("强引用可能导致内存泄露")])]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("补充")]),t._v(" "),s("p",[t._v("如果一个对象具有强引用，那垃圾回收器绝不会回收它。当内存空间不足，Java虚拟机宁愿抛出OutOfMemoryError错误，使程序异常终止，也不会靠随意回收具有强引用的对象来解决内存不足的问题。")])]),t._v(" "),s("h2",{attrs:{id:"软引用（softreference）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#软引用（softreference）","aria-hidden":"true"}},[t._v("#")]),t._v(" 软引用（SoftReference）")]),t._v(" "),s("p",[t._v("如果一个对象具有SoftReference，垃圾回收器会根据 JVM 内存的使用情况（内存的紧缺程度）以及 SoftReference 的 get() 方法的调用情况来决定是否对其进行回收。")]),t._v(" "),s("h3",{attrs:{id:"示例-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("SoftRef")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("main")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// 用SoftReference包装对象")]),t._v("\n        SoftReference"),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Object"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" softReference "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("SoftReference")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// 使用get()方法获取对象的强引用，如果对象被回收，则返回null")]),t._v("\n        System"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("println")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("softReference"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("get")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"特征"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特征","aria-hidden":"true"}},[t._v("#")]),t._v(" 特征")]),t._v(" "),s("ul",[s("li",[t._v("软引用使用 get() 方法取得对象的强引用从而访问目标对象。")]),t._v(" "),s("li",[t._v("软引用所指向的对象按照 JVM 的使用情况（Heap 内存是否临近阈值）来决定是否回收。")]),t._v(" "),s("li",[t._v("软引用可以避免 Heap 内存不足所导致的异常。")])]),t._v(" "),s("h3",{attrs:{id:"使用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用场景","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用场景")]),t._v(" "),s("p",[t._v("一般用来做高速缓存")]),t._v(" "),s("h2",{attrs:{id:"弱引用（weakreference）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#弱引用（weakreference）","aria-hidden":"true"}},[t._v("#")]),t._v(" 弱引用（WeakReference）")]),t._v(" "),s("p",[t._v("WeakReference 是弱于SoftReference的引用类型。弱引用的特性和基本与软引用相似，区别就在于弱引用所指向的对象只要进行系统垃圾回收，不管内存使用情况如何，永远对其进行回收（get() 方法返回 null）。")]),t._v(" "),s("h2",{attrs:{id:"示例-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例-3","aria-hidden":"true"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("p",[t._v("同软引用")]),t._v(" "),s("h3",{attrs:{id:"特征-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特征-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 特征")]),t._v(" "),s("ul",[s("li",[t._v("弱引用使用 get() 方法取得对象的强引用从而访问目标对象。")]),t._v(" "),s("li",[t._v("一旦系统内存回收，无论内存是否紧张，弱引用指向的对象都会被回收")]),t._v(" "),s("li",[t._v("弱引用可以避免 Heap 内存不足所导致的异常。")])])])}],!1,null,null,null);e.options.__file="jvm-02-reference-type.md";a.default=e.exports}}]);