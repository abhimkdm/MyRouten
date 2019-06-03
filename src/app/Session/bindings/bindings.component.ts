import { Component, OnInit } from '@angular/core';
import { Brands } from '../Models/Brands';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {

  brands : Brands[] = [ { Name : "Honda", Price : 10000  }, 
                        { Name : "Hero", Price : 20000  }, 
                        { Name : "Bajaj", Price : 30000  } ]

  constructor() { }

  ngOnInit() {
  }

}
