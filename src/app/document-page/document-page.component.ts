import { Component, OnInit , ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-document-page',
  encapsulation: ViewEncapsulation.None,
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
