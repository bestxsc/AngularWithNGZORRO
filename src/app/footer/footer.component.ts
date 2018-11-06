import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  data: [
    {
      title: '帮助';
      contents: [
        {'关于', '#'},
        {'资源列表', '#'}
        ]
    },
    {
      title: '帮助';
      contents: [
        {'Stack Overflow', '#'},
        {'Gitter', '#'}
        ]
    }
    ]

  constructor() { }

  ngOnInit() {
  }

}
