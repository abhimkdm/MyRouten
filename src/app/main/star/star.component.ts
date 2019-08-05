import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styles: []
})
export class StarComponent implements OnChanges {

  @Input() rating : number;
  blackStar : number[];
  whiteStar : number[];

  constructor() { }

  ngOnChanges(): void {
    this.blackStar= Array(parseInt(this.rating.toString())).fill(0);
    this.whiteStar= Array(5-parseInt(this.rating.toString())).fill(0);
    //console.log(this.rating);
  }

}
