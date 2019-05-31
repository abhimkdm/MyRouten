import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {

  brands : any = ["Honda", "Hero", "BMW", "YULU"];

  hide : boolean = false;
  show : boolean = true;

  displayblock : string = "block";

  displaynone : string = "none";

  constructor() { }

  ngOnInit() {
  }

}
