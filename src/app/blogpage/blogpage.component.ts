import { Component, OnInit } from '@angular/core';
import { places } from '../places';

@Component({
  selector: 'blogpage',
  templateUrl: './blogpage.component.html',
  styleUrls: ['./blogpage.component.scss']
})
export class BlogpageComponent implements OnInit {

  places = places;

  constructor() { }

  ngOnInit(): void {
  }

  randomDate(string: string) {
    let date = new Date(string);
    return date.toDateString();
  }

  sortArray() {
    places.sort((a, b) => {
      let aDate: any = new Date(a.date);
      let bDate: any = new Date(b.date);
      return bDate - aDate;
    })
  }
}


