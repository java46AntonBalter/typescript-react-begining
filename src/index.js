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
        console.log("=========Line============");
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
        console.log("=========Square==========");
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
        console.log("==========Rectangle=========");
        super.draw();
        console.log(`height: ${this._height}`);
        console.log("=".repeat(20));
    }
}
class Canvas {
    constructor(shapes, title) {
        this._shapes = [];
        this._shapes = [...shapes];
        this.title = title;
    }
    draw() {
        //TODO write method draw for drawing all shapes in the canvas
        console.log(`~*~*~*~*~*~*~*~<Canvas "${this.title}">~*~*~*~*~*~*~*~*~`);
        this._shapes.forEach(shape => shape.draw());
    }
    addShape(shape) {
        //TODO write method adding the given shape inside _shapes
        //returns an index of added shape 
        this._shapes.push(shape);
        return this._shapes.indexOf(shape);
    }
    removeShape(index) {
        //TODO write method removing a shape at the given index
        //returns reference to the removed shape
        const res = this._shapes[index];
        this._shapes.splice(index, 1);
        return res;
    }
    sort() {
        //TODO write method sorting the shapes in the following order
        //ascending order of the property x
        //in the case of equaled x values - descending order of the property y
        this._shapes.sort((a, b) => a["x"] - b["x"] || b["y"] - a["y"]);
    }
    removeIf(predicate) {
        //TODO write method removing all the shapes matchin the given predicate function
        //TODO write function for testing the method removeIf with the following predicate:
        //remove all lines having the property x of second point greater than the property x of the first point
        this._shapes = this._shapes.filter(n => !predicate(n) ?? n);
    }
}
/***************************** Testing *********/
const shapes = [
    new Line(3, 4, new Point(10, 10)),
    new Square(2, 5, 10),
    new Line(20, 30, new Point(3, 4)),
    new Rectangle(10, 15, 20, 5)
];
console.log('---------New Canvas-------');
const canvas1 = new Canvas(shapes, "canvas1");
canvas1.draw();
console.log('---------Adding New Shapes-------');
canvas1.addShape(new Rectangle(15, 25, 30, 10));
canvas1.addShape(new Square(15, 20, 45));
canvas1.addShape(new Line(65, 89, new Point(98, 10)));
canvas1.draw();
console.log('---------Removing Shape Index 1-------');
canvas1.removeShape(1);
canvas1.draw();
console.log('---------Sorting Canvas-------');
canvas1.sort();
canvas1.draw();
console.log('---------Testing RemoveIf -------');
canvas1.removeIf(n => n["point"] && (n["point"]["_x"] > n["_x"]));
canvas1.draw();
