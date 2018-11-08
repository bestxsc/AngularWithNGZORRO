import { Component, OnInit } from '@angular/core';
import { Article } from './article/articleModel';

@Component({
  selector: 'app-articlelist',
  templateUrl: './articlelist.component.html',
  styleUrls: ['./articlelist.component.css']
})
export class ArticlelistComponent implements OnInit {

  articles:Article[];
  constructor() {
    this.articles=[
      new Article("跨平台",
                  "渐进式应用",
                  "充分利用现代 Web 平台的各种能力，提供 App 式体验。高性能、离线使用、免安装。",
                  "原生",
                  "借助来自Ionic、NativeScript和React Native中的技术与思想，构建原生移动应用。",
                  "桌面",
                  "借助你已经在Web开发中学过的能力，结合访问原生操作系统API的能力，创造能在桌面环境下安装的应用，横跨Mac、Windows和Linux平台。"),
      new Article("速度与性能",
                  "代码生成",
                  "Angular会把你的模板转换成代码，针对现代JavaScript虚拟机进行高度优化，轻松获得框架提供的高生产率，同时又能保留所有手写代码的优点。",
                  "统一平台",
                  "在服务端渲染应用的首屏，像只有HTML和CSS的页面那样几乎瞬间展现，支持 Node.js®、.NET、PHP，以及其它服务器，为通过SEO来优化站点铺平了道路。",
                  "代码拆分",
                  "借助新的组件路由器，Angular可以实现快速加载。自动代码拆分机制可以让用户仅仅加载那些用于渲染所请求页面的代码。"),
      new Article("生产率",
                  "模板",
                  "通过简单而强大的模板语法，快速创建UI视图。",
                  "Angular CLI",
                  "命令行工具：快速进入构建环节、添加组件和测试，然后立即部署。",
                  "各种 IDE",
                  "在常用IDE和编辑器中获得智能代码补全、实时错误反馈及其它反馈等特性。"),
      new Article("完整开发故事",
                  "测试",
                  "使用Karma进行单元测试，让你在每次存盘时都能立即知道是否弄坏了什么。Protractor则让你的场景测试运行得又快又稳定。",
                  "动画",
                  "通过Angular中直观简便的API创建高性能复杂编排和动画时间线 —— 只要非常少的代码。",
                  "可访问性",
                  "通过支持ARIA的组件、开发者指南和内置的一体化测试基础设施，创建具有完备可访问性的应用。"),
                  
    ];
   }

  ngOnInit() {
  }

}
