const numbers = [1, 2, 3, 4];

// forEach
let total_foreach = 0;

numbers.forEach((number) => {
  total_foreach += number;
});
console.log(total_foreach);

// reduce
const total_reduce = numbers.reduce((accumlator, currentValue) => {
  return accumlator + currentValue;
}, 0);

console.log(total_reduce);

const min_reduce = numbers.reduce((accumlator, currentValue) => {
  if (accumlator > currentValue) {
    return accumlator;
  }
  return currentValue;
});

console.log(min_reduce);

const cart = [
  {
    name: "A",
    price: 500,
  },
  {
    name: "B",
    price: 600,
  },
  {
    name: "C",
    price: 300,
  },
];
const total_price = cart.reduce((accumlator, currentValue) => {
  return accumlator + currentValue.price;
}, 0);
console.log(total_price);
