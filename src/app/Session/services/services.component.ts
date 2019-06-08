import { Component, OnInit } from '@angular/core';
import { IBrand } from '../common/IBrand.interface';
import { BrandService } from '../common/Brand.service';
import { BindingsComponent } from '../bindings/bindings.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [BrandService]
})
export class ServicesComponent implements OnInit  {

  brands : IBrand[];
  binding : BindingsComponent = new BindingsComponent();

  constructor(private servicebrand : BrandService) { 
    this.brands = servicebrand.brands;
    console.log(this.binding.Change());
  }

  ngOnInit() {
  }

}
