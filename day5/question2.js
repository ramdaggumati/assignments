//question 2: https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
class Circle {
    constructor(radius = 1.0, color = "red" ) {
      this.radius = radius;
      this.color = color;
    }
    getRadius() {
      return this.radius;
    }
    setRadius(radius) {
      this.radius = radius;
    }
    getColor() {
      return this.color;
    }
    setColor(color) {
      this.color = color;
    }
    toString() {
      return `Circle with radius ${this.radius} and color ${this.color}`;
    }
    getArea() {
      return Math.PI * this.radius * this.radius;
    }
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  }

  // Create a circle with default radius and color  
  var defaultCircle = new Circle();
  console.log(defaultCircle.toString());
  
  // Create a circle with radius 5  
  var largerCircle = new Circle(5);
  console.log(largerCircle.getArea());

  // Create a blue circle with radius 2
  var blueCircle = new Circle(2, "blue");
  console.log(blueCircle.getCircumference());
  