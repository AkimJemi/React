const fruits = [
  { name: "A", price: 300 },
  { name: "B", price: 400 },
  { name: "C", price: 500 },
  { name: "D", price: 600 },
];
// find()
const findItem = fruits.find((fruits, index) => {
  if (fruits.price === 500 || index === 0) {
    return true;
  }
  return false;
});
// findIndex()
const findIndex = fruits.findIndex((fruit, index) => {
  if (fruit.price === 500 || index === 4) {
    return true;
  }
  return false;
});

// some()
const doesExists = fruits.some((fruit) => {
  if (fruit.price >= 600) {
    return true;
  }
  return false;
});
// every()
const isOver = fruits.every((fruit) => {
  if (fruit.price > 100) {
    return true;
  }
  return false;
});
// filter()
const cheapFruits = fruits.filter((fruit) => {
  if (fruit.price > 300) {
    return true;
  }
  return false;
});
// filter()
const priceTags = fruits.map((fruit) => {
  return `${fruit.name}: ${fruit.price}원`;
});

console.log(findItem); // { name: 'A', price: 300 }
console.log(findIndex); // 2
console.log(doesExists); // true
console.log(isOver); // true
console.log(cheapFruits); // [{ name: 'B', price: 400 }, { name: 'C', price: 500 }, { name: 'D', price: 600 }]
console.log(priceTags); // [ 'A: 300원', 'B: 400원', 'C: 500원', 'D: 600원' ]
