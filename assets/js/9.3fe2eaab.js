(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{197:function(a,s,t){"use strict";t.r(s);var e=t(0),r=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"redis初级教程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis初级教程","aria-hidden":"true"}},[a._v("#")]),a._v(" redis初级教程")]),a._v(" "),t("h2",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[a._v("#")]),a._v(" 介绍")]),a._v(" "),t("p",[a._v("Redis是一个开源的使用ANSI C语言编写、支持网络、可基于内存亦可持久化的日志型、Key-Value数据库，并提供多种语言的API。从2010年3月15日起，Redis的开发工作由VMware主持。从2013年5月开始，Redis的开发由Pivotal赞助。")]),a._v(" "),t("h2",{attrs:{id:"特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特点","aria-hidden":"true"}},[a._v("#")]),a._v(" 特点")]),a._v(" "),t("p",[a._v("(1) 速度快，因为数据存在内存中，类似于HashMap，HashMap的优势就是查找和操作的时间复杂度都是O(1)")]),a._v(" "),t("p",[a._v("(2) 支持丰富数据类型，支持string，list，set，sorted set，hash")]),a._v(" "),t("p",[a._v("(3) 支持事务，操作都是原子性，所谓的原子性就是对数据的更改要么全部执行，要么全部不执行")]),a._v(" "),t("p",[a._v("(4) 丰富的特性：可用于缓存，消息，按key设置过期时间，过期后将会自动删除")]),a._v(" "),t("h2",{attrs:{id:"使用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用场景","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用场景")]),a._v(" "),t("p",[a._v("(1) 取最新的N个数据的操作")]),a._v(" "),t("p",[a._v("(2) 排行榜应用，取toN操作")]),a._v(" "),t("p",[a._v("(3) 需要精确设置过期时间的应用")]),a._v(" "),t("p",[a._v("(4) 计数器应用")]),a._v(" "),t("p",[a._v("(5) uniq操作、获取某段时间所以数据排重值")]),a._v(" "),t("p",[a._v("(6) 实时系统，反垃圾系统")]),a._v(" "),t("p",[a._v("(7) Pub/Sub构建实时消息系统（发布与订阅）")]),a._v(" "),t("p",[a._v("(8) 构建队列系统")]),a._v(" "),t("p",[a._v("(9) 缓存")]),a._v(" "),t("h2",{attrs:{id:"快速上手（linux）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速上手（linux）","aria-hidden":"true"}},[a._v("#")]),a._v(" 快速上手（Linux）")]),a._v(" "),t("h3",{attrs:{id:"下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载","aria-hidden":"true"}},[a._v("#")]),a._v(" 下载")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{attrs:{class:"token function"}},[a._v("wget")]),a._v(" http://download.redis.io/releases/redis-4.0.11.tar.gz\n \n")])])]),t("h3",{attrs:{id:"解压"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解压","aria-hidden":"true"}},[a._v("#")]),a._v(" 解压")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{attrs:{class:"token function"}},[a._v("tar")]),a._v(" -zvxf redis-4.0.11.tar.gz -C /usr/local \n")])])]),t("h3",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{attrs:{class:"token function"}},[a._v("cd")]),a._v(" redis-4.0.11\n$ "),t("span",{attrs:{class:"token function"}},[a._v("make")]),a._v("\n$ "),t("span",{attrs:{class:"token function"}},[a._v("make")]),a._v(" "),t("span",{attrs:{class:"token function"}},[a._v("install")]),a._v(" "),t("span",{attrs:{class:"token comment"}},[a._v("# 或者 make && make install")]),a._v("\n")])])]),t("p",[a._v("如图")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://img.itxiaoer.com/0f4202313668c5d77e6e646dcb5c7ae7",alt:"avatar"}})]),a._v(" "),t("h3",{attrs:{id:"启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动","aria-hidden":"true"}},[a._v("#")]),a._v(" 启动")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ src/redis-server redis.conf\n")])])]),t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[a._v("注意事项")]),a._v(" "),t("p",[a._v("如果redis-server没有执行权限，增加执行权限  sudo chmod u+x src/redis-server")])]),a._v(" "),t("p",[a._v("如图 redis服务器默认端口为6379")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://img.itxiaoer.com/9ad4a712c8771b2311e8c96974ed2e35",alt:"avatar"}}),a._v("_")]),a._v(" "),t("h3",{attrs:{id:"连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#连接","aria-hidden":"true"}},[a._v("#")]),a._v(" 连接")]),a._v(" "),t("p",[a._v("新开终端执行下面命令")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ src/redis-cli\n")])])]),t("p",[a._v("如图")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://img.itxiaoer.com/cd7d1c0705c3a26fab8e586ca2e9242e",alt:"avatar"}})]),a._v(" "),t("h3",{attrs:{id:"停止服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#停止服务","aria-hidden":"true"}},[a._v("#")]),a._v(" 停止服务")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ src/redis-cli "),t("span",{attrs:{class:"token function"}},[a._v("shutdown")]),a._v(" "),t("span",{attrs:{class:"token comment"}},[a._v("# 或者 pkill redis-server")]),a._v("\n")])])])])}],!1,null,null,null);r.options.__file="redis-basic.md";s.default=r.exports}}]);