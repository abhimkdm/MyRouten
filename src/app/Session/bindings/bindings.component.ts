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
                        { Name : "Bajaj", Price : 30000  },
                        { Name : "BMW", Price : 30000  }
                      ]


  Change() {
    //Property value updated
  //this.brands[2].Name="Hamman";

    //Reference updated 
  //  const brnd : Brands[] = Object.assign([],this.brands);
  //      brnd[2].Name="Hamman";
  //   this.brands = brnd;
  }

  MoouseMove() {
    //Do nothing
  }

  constructor() { }

  ngOnInit() {
  }

}
