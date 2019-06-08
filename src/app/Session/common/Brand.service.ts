import { Injectable } from "@angular/core";
import { IBrand } from "./IBrand.interface";

@Injectable()
export class BrandService {

    brands : IBrand[] = 
              [ 
              { Name : "Honda", Price : 10000  }, 
              { Name : "Hero", Price : 20000  }, 
              { Name : "Bajaj", Price : 30000  },
              { Name : "BMW", Price : 30000  } 
              ];
    //GEt, POST, PUT & DELETE
    // Business or Service calling Logic 
}

