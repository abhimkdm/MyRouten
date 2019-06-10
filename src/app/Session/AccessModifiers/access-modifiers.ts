export class Shape {
    public h : number;
    protected w : number ;
    private r: number;

    constructor(height?: number,width? : number, radius? : number) {
        this.h=height || 0;
        this.w=width || 0;
        this.r=radius || 0;
    }
}

class rectangle extends Shape {

    area() {
        return this.w * this.h;
    }

}


class Circle extends Shape {

    area() {
       // return Math.PI * this.r * this.r;
    }
}



// var _Shape = new Shape(10,20);
// _Shape.area();
// _Shape.
