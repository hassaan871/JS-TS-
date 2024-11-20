const createDifference = (subtractor) => (value) => value - subtractor;

const double = createDifference(6);
const triple = createDifference(6);

console.log(double(2));
console.log(triple(3));
