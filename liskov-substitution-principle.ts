abstract class Shape {
    setColor(color: string): this {
        //do something
        return this;
    }
    render(area:number){
        //do something
    }
    abstract getArea(): number
}
class Rectangle extends Shape {
    constructor(
        private readonly width = 0,
        private readonly height = 0,
        ) {
        super();
    }
    getArea(): number {
        return this.width * this.height;
    }
    //...
}
class Square extends Shape {
    constructor(
        private readonly length = 0,
        ) {
        super();
    }
    getArea(): number {
        return this.length * this.length;
    }
}

function renderShapes(shapes: Shape[]){
    shapes.forEach((shape) => {
        const area = shape.getArea();
        shape.render(area);
    })
}
const shapes = [new Rectangle(10,20),new Square(10)];
renderShapes(shapes);


