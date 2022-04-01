class Point {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
        Point.checkValue(_x);
        Point.checkValue(_y);
    }
    static checkValue(value) {
        if (value < Point.minValue || value > Point.maxValue) {
            throw `wrong value ${value}, should be in range [${Point.minValue} - ${Point.maxValue}]`;
        }
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    set x(value) {
        Point.checkValue(value);
        this._x = value;
    }
    set y(value) {
        Point.checkValue(value);
        this._y = value;
    }
    draw() {
        console.log(`Point [x: ${this._x}, y: ${this._y}]`);
    }
}
Point.minValue = -100;
Point.maxValue = 100;
class Line extends Point {
    constructor(x, y, _point) {
        super(x, y);
        this._point = _point;
    }
    draw() {
        console.log("-----------Line----------");
        super.draw();
        this._point.draw();
        console.log('-'.repeat(20));
    }
    get point() {
        return this._point;
    }
}
class Square extends Point {
    constructor(x, y, _width) {
        super(x, y);
        this._width = _width;
    }
    get width() {
        return this._width;
    }
    draw() {
        console.log("--------Square-----------");
        super.draw();
        console.log(`width: ${this._width}`);
        console.log("-".repeat(20));
    }
}
class Rectangle extends Square {
    constructor(x, y, width, _height) {
        super(x, y, width);
        this._height = _height;
    }
    draw() {
        console.log("==========Rectangle=================");
        super.draw();
        console.log(`height: ${this._height}`);
        console.log("=".repeat(20));
    }
}
const shape = new Square(3, 4, 10); //Upper casting
//way of specific methods call
// if (shape instanceof Square) {
//     console.log(shape.width); 
// }
/****************demo of setter usage with checking and following exception */
// const point: Point = new Point(10, 10);
// point.draw();
// point.x = 200;
// point.draw();
const shapes = [
    new Line(3, 4, new Point(10, 10)),
    new Square(2, 5, 10),
    new Line(20, 30, new Point(3, 4)),
    new Rectangle(10, 15, 20, 5)
];
shapes.forEach(shape => shape.draw());
/************************************************************HW #33 */
class Canvas {
    constructor() {
        this._shapes = [];
    }
    draw() {
        //TODO write method draw for drawing all shapes in the canvas
    }
    addShape(shape) {
        //TODO write method adding the given shape inside _shapes
        //returns an index of added shape 
        return 0;
    }
    removeShape(index) {
        //TODO write method removing a shape at the given index
        //returns reference to the removed shape
        return this._shapes[0];
    }
    sort() {
        //TODO write method sorting the shapes in the following order
        //ascending order of the property x
        //in the case of equaled x values - descending order of the property y
    }
    removeIf(predicate) {
        //TODO write method removing all the shapes matchin the given predicate function
        //TODO write function for testing the method removeIf with the following predicate:
        //remove all lines having the property x of second point greater than the property x of the first point
    }
}
