import { Component, OnInit } from '@angular/core';

class ShowTag {
  constructor(
  public imgSrc: string,
  public title: string,
  public text: string){
  }
}

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {

  showTags: ShowTag[];
  constructor() {
    this.showTags = [
      new ShowTag(
        '../assets/img/responsive-framework.svg',
        '横跨所有平台',
        '学会用Angular构建应用，然后把这些代码和能力复用在多种多种不同平台的应用上 —— Web、移动 Web、移动应用、原生应用和桌面原生应用。'
      ),
      new ShowTag(
        '../assets/img/speed-performance.svg',
        '速度与性能',
        '通过Web Worker和服务端渲染，达到在如今(以及未来）的Web平台上所能达到的最高速度。\n' +
        '\n' +
        'Angular让你有效掌控可伸缩性。基于RxJS、Immutable.js和其它推送模型，能适应海量数据需求。'
      ),
      new ShowTag(
        '../assets/img/joyful-development.svg',
        '美妙的工具',
        '使用简单的声明式模板，快速实现各种特性。使用自定义组件和大量现有组件，扩展模板语言。在几乎所有的IDE中获得针对Angular的即时帮助和反馈。所有这一切，都是为了帮助你编写漂亮的应用，而不是绞尽脑汁的让代码“能用”。'
      ),
      new ShowTag(
        '../assets/img/loved-by-millions.svg',
        '百万粉丝热捧',
        '从原型到全球部署，Angular都能带给你支撑Google大型应用的那些高延展性基础设施与技术。'
      )
    ];
  }

  ngOnInit() {
  }

}
