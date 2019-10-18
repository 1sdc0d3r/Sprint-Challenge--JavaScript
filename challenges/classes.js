// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(cuboid) {
    this.length = cuboid.length;
    this.width = cuboid.width;
    this.height = cuboid.height;
  }

  volume() {
    console.log(this.length * this.width * this.height);
  }
  surfaceArea() {
    console.log(
      2 *
        (this.length * this.width +
          this.length * this.height +
          this.width * this.height)
    );
  }
}

const cuboid1 = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

const cuboid2 = new CuboidMaker({
  length: 7,
  width: 3,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
cuboid1.surfaceArea(); // 130
cuboid1.volume(); // 100
cuboid2.surfaceArea();
cuboid2.volume();

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
