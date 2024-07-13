// "use strict";
let x = 1;
x = 2;

console.log(this);
if (true) {
  console.log(this);
}

const object = {
  name: "A",
  main: function () {
    console.log(this.name);
  },
};

const main2 = function () {
  console.log(this.name);
};
const object2 = {
  name: "A",
  main2,
};

object.main();
object2.main2();
const object3 = {
  name: "A",
  smallObject: {
    name: "AA",
    main2,
  },
};
object3.smallObject.main2();

// Bind
function main() {
  console.log(this);
}

const mainBind = main.bind({ name: "hi" });
mainBind();

const object4 = {
  name: "hiiii",
  mainBind,
};
object4.mainBind();

const mainBindBind = mainBind.bind({ name: "hiiiiii" });
// mainBindBind().mainBind,name;
console.log(mainBindBind());

const object5 = {
  name: "B",
  main: function () {
    console.log(this);
  }.bind({ name: "great object" }),
};

object5.main();
const button = document.getElementById("btn");

button.addEventListener("click", function (event) {
  console.log(event.target === this);
  console.log(this);
});
