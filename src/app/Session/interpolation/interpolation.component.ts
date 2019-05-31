import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  template : `<h1> {{pageTitle}} </h1>
  {{'Page Title : ' + pageTitle}}<br>

  {{2*10+5}} <br>

  {{'Display Name :' + display()}} <br>

  <span innerText={{pageTitle}}> </span> <br>
  <img src="{{imgUrl}}" />

  <br>
  <br>
  <hr>
   <h1> Property Bindings </h1>
  <hr>
  <img [src]="imgUrl" />
  <label [style.color]="color"> My COLOR IS {{color}} </label>
  <br>
  <br>
  <hr>
  <h1> Event Bindings </h1>
  <hr>
  <button (click)="changeColor()">Change Color</button>
  <br>
  <br>
  <br>
  <input type="text" (keyup)="onKeyup($event)" />
  <br>
  <br>
  <label [style.color]="color"> {{Mytext}} </label>
`
})
export class InterpolationComponent  {

  pageTitle = "Angular Notes App";
    color = "Green";
    imgUrl="favicon.ico";
    Mytext ="Something";

    display = function(){
        return "Abhishek";
    }

    onKeyup= function(e : any) {
        this.Mytext += e.target.value + ' | ';
    }

    changeColor= function(){
        this.color= this.color==="red"? "Green" : "red";
    }



    constructor(){}
}
