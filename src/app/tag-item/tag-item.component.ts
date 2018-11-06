import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tag-item',
  templateUrl: './tag-item.component.html',
  styleUrls: ['./tag-item.component.css']
})
export class TagItemComponent implements OnInit {

  @Input() imgSrc: string;
  @Input() title: string;
  @Input() text: string;
  constructor() { }

  ngOnInit() {
  }

}
