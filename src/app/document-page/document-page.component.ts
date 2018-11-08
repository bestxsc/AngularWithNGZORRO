import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-page',
  templateUrl: './document-page.component.html',
  styleUrls: ['./document-page.component.css']
})
export class DocumentPageComponent implements OnInit {

  visible = false;
  placement = 'left';
  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
