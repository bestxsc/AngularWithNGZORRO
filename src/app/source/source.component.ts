import { Component, OnInit } from '@angular/core';
import { MODULE } from './app.model';
import { Article } from './app.model';
@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {

  Modules1:MODULE [];
  Modules2:MODULE [];
  Modules3:MODULE [];
  articles01:Article []  = [
    new Article("Amexio Canvas Web Based Drag and Drop IDE by MetaMagic","Amexio Canvas is Drag and Drop Environment to create Fully Responsive Web and Smart Device HTML5/Angular Apps. Code will be auto generated and hot deployed by the Canvas for live testing. Out of the box 50+ Material Design Theme support. Commit your code to GitHub public or private repository."),
    new Article("Angular IDE by Webclipse","Built first and foremost for Angular. Turnkey setup for beginners; powerful for experts."),
    new Article("IntelliJ IDEA","Capable and Ergonomic  Java * IDE"),
    new Article("Visual Studio Code","VS Code is a Free, Lightweight Tool for Editing and Debugging Web Apps."),
    new Article("WebStorm","Lightweight yet powerful IDE, perfectly equipped for complex client-side development and server-side development with Node.js")
  ];
  articles02:Article [] = [
    new Article("Angular CLI","The official Angular CLI makes it easy to create and develop applications from initial commit to production deployment. It already follows our best practices right out of the box!"),
    new Article("Angular Playground","UI development environment for building, testing, and documenting Angular applications."),
    new Article("Angular Universal","Server-side Rendering for Angular apps."),
    new Article("Augury","A Google Chrome Dev Tools extension for debugging Angular applications."),
    new Article("Celerio Angular Quickstart","Generate an Angular CRUD application from an existing database schema"),
    new Article("Codelyzer","Static analysis for Angular projects."),
    new Article("Compodoc","This tool generates dedicated documentation for Angular applications."),
    new Article("Lite-server","Lightweight development only Node.js® server"),
    new Article("NinjaCodeGen - Angular CRUD Generator","Generate several types of CRUD apps complete with e2e testing using template-sets for Angular, Material Design, Bootstrap, Kendo UI, Ionic, ..."),
    new Article("Nx","Nx (Nrwl Extensions for Angular) is an open source toolkit built on top of Angular CLI to help enterprise teams develop Angular at scale."),
    new Article("UI-jar - Test Driven Style Guide Development","A drop in module to automatically create a living style guide based on the test you write for your components."),
    new Article("Universal for ASP.NET","This package provides facilities for developers building Angular applications on ASP.NET."),
  ];
  articles03:Article [] = [
    new Article("Angular Fire","The official library for Firebase and Angular"),
    new Article("AngularCommerce","Angular Commerce is a solution for building modern e-commerce applications with power of Google Firebase. Set of components is design agnostic and allows to easily extend functionality."),
    new Article("Apollo","Apollo is a data stack for modern apps, built with GraphQL."),
    new Article("Meteor","Use Angular and Meteor to build full-stack JavaScript apps  for Mobile and Desktop."),
    new Article("ngrx","Reactive Extensions for Angular")
  ];
  articles04:Article []=[
    new Article("ag-Grid","A datagrid for Angular with enterprise style features such as sorting, filtering, custom rendering, editing, grouping, aggregation and pivoting."),
    new Article("Amexio - Angular Extensions","Amexio (Angular MetaMagic EXtensions for Inputs and Outputs)  is a rich set of Angular components powered by Bootstrap for Responsive Design. UI Components include Standard Form Components, Data Grids, Tree Grids, Tabs etc. Open Source (Apache 2 License) & Free and backed by MetaMagic Global Inc"),
    new Article("Angular Material","Material Design components for Angular")
  ];
  articles05:Article []=[
    new Article("Angular Book","A Practical Introduction to the new Web Development Platform Angular"),
    new Article("Angular Router","This book is a comprehensive guide to the Angular router written by its designer. The book explores the library in depth, including the mental model, design constraints, subtleties of the API."),
    new Article("Angular-Buch (German)","The first German book about Angular. It gives you a detailed practical overview of the key concepts of the platform. In each chapter a sample application is built upon with a new Angular topic. All sources are available on GitHub."),
  ];
  articles06:Article []=[
    new Article("Accelebrate","Customized, Instructor-Led Angular Training"),
    new Article("Angular Academy (Canada)","Angular Academy is a two day hands-on public course given in-person across Canada!"),
    new Article("Angular Boot Camp","Angular Boot Camp covers introductory through advanced Angular topics. It includes extensive workshop sessions, with hands-on help from our experienced developer-trainers. We take developers or teams from the beginnings of Angular understanding through a working knowledge of all essential Angular features."),
  ];

  constructor() {
    

    this.Modules1 = [
      new MODULE("各种IDE",this.articles01),
      new MODULE("工具",this.articles02),
      new MODULE("数据管理库",this.articles03),
      new MODULE("UI 组件",this.articles04)
    ];
    this.Modules2 = [
      new MODULE("书籍",this.articles05),
      new MODULE("工作室 & 现场培训",this.articles06)
    ];
    
   }
  ngOnInit() {
  }

}
