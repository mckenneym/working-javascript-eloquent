var range = function(start, end, step) {
    if (step == null) {
        step = 1;
    }
    var array = [];
    if (step > 0) {
        for (var i = start; i <= end; i += step) {
            array.push(i);
        }
    } else {
        for (var i = start; i >= end; i += step) {
            array.push(i);
        }
    }
    return array;
}

var sum = function(range) {
    var result = 0;
    for (var i = 0; i < range.length; i++) {
        result += range[i];
    }
    return result;
}


console.log('range(1,5): ' + range(1, 5));

console.log('sum(range(1,5)): ' + sum(range(1, 5)));

console.log('range(1,8,2): ' + range(1, 8, 2));

console.log('sum(range(1,8,2)): ' + sum(range(1, 8, 2)));

console.log('range(5,1,-1): ' + range(5, 1, -1));

console.log('sum(range(5,1,-1)): ' + sum(range(5, 1, -1)));

console.log('range(16,8,-3)): ' + range(16, 8, -3));

console.log('sum(range(16,8,-3)): ' + sum(range(16, 8, -3)));
