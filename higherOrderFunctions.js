function createDifference(subtractor){
    return function(value){
        return value - subtractor;
    };
}

const double = createDifference(5);
const triple = createDifference(5);

console.log(double(2));
console.log(triple(3));
