let forEach = function(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr)
    }
};

forEach([1,2,3,4,5], function(v, i, arr) {
    console.log(v ** i);
});


let map = function(arr, callback) {
    let completedArr = [];
    for(let i = 0; i < arr.length; i++) {
        completedArr.push(callback(arr[i], i, arr));
    }
    return completedArr;
}

map([2,4,6,8], function(v, i, arr) {
    return v * 2;
});


let reduce = function(arr, callback, startinValue) {
    let accumulator = startinValue;
    for(let i = 0; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
}

reduce([2,4,6,8,10], function(acc, v) {
    return acc += v;
}, 0);


// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
  return n.toString().split('').reverse().map(x => +x);
}

digitize(348597); => [7,9,5,8,4,3]