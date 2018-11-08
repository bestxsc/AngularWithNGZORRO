import {Component, OnInit} from '@angular/core';
import construct = Reflect.construct;

class Item {
  constructor(
    public event: string,
    public location: string,
    public date: string,
    public url: string) {
  }
}

@Component({
  selector: 'app-metting-page-content',
  templateUrl: './metting-page-content.component.html',
  styleUrls: ['./metting-page-content.component.css']
})
export class MettingPageContentComponent implements OnInit {

  futureItems: Item[];
  alreadyItems: Item[];

  constructor() {
    this.futureItems = [
      new Item(
        'AngularMix',
        'Orlando, Florida',
        'October 10-12, 2018',
        'https://angularmix.com/'),
      new Item(
        'ReactiveConf',
        'Prague, Czech Republic',
        'October 29-31, 2018',
        'https://reactiveconf.com/'),
      new Item(
        'AngularConnect',
        'London, United Kingdom',
        'November 5-7, 2018',
        'http://angularconnect.com/'
      )];
    this.alreadyItems = [
      new Item(
        'AngularConnect',
        'London, United Kingdom',
        'November 7-8, 2017',
        'AngularConnect'
      ),
      new Item(
        'ngAtlanta',
        'Atlanta, Georgia',
        'January 30, 2018',
        'http://ng-atl.org/'
      ),
      new Item(
        'ngVikings',
        'Helsinki, Finland',
        'March 1-2, 2018',
        'https://ngvikings.org/'
      ),
      new Item(
        'ng-conf',
        'Salt Lake City, Utah',
        'April 18-20, 2018',
        'https://www.ng-conf.org/'
      ),
      new Item(
        'WeAreDevelopers',
        'Vienna, Austria',
        'May 16-18, 2018',
        'https://www.wearedevelopers.com/'
      ),
      new Item(
        'ng-japan',
        'Tokyo, Japan',
        'Jun 16, 2018',
        'https://ngjapan.org/en.html'
      ),
      new Item(
        'Angular Conf Australia',
        'Melbourne, Australia',
        'Jun 22, 2018',
        'https://www.angularconf.com.au/'
      )];
  }

  ngOnInit() {
  }

}
