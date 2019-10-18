/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
function CuboidMaker(cuboid) {
  this.length = cuboid.length;
  this.width = cuboid.width;
  this.height = cuboid.height;
}
// volume() {
//   console.log(this.length * this.width * this.height);
// }
// surfaceArea() {
//   console.log(
//     2 *
//       (this.length * this.width +
//         this.length * this.height +
//         this.width * this.height)
//   );
// }

/* == Step 2: Volume Method ==
  Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  
  Formula for cuboid volume: length * width * height
*/

// I could create a method not in the class constructor, however It is more clean and better practice to do it that way rather than CuboidMaker.prototype.methodName = function (){}...

CuboidMaker.prototype.surfaceArea = function() {
  console.log(
    2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
  );
};

/* == Step 3: Surface Area Method ==
  Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 

  Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
*/

// same comment as step 2 for the method...
CuboidMaker.prototype.volume = function() {
  console.log(this.length * this.width * this.height);
};

/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/

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
cuboid1.volume(); // 100
cuboid1.surfaceArea(); // 130
cuboid2.volume();
cuboid2.surfaceArea();
