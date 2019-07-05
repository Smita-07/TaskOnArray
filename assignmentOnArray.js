let o1 = ['Ace', 10, 'true']
let o2 = ['Array', 'Number', 'string']
let o3 = [0, 1, 2, 3, 4, 5]
function findElement(arr, val) {
    return arr.indexOf(val)
}
console.log(findElement(o1, 10))
console.log(findElement(o2, 'Date'))
console.log(findElement(o3, 5))

//...............................End of task

let p1 = ['Ace', 10, true]
let p2 = [0, 1, 2, 3, 4, 5] 
let p3 = []
function doubleArray(data) {
    return data.concat(data)
}

console.log(doubleArray(p1).sort());
console.log(doubleArray(p2).sort());
console.log(doubleArray(p3).sort());

//................................End of task.....................................................

let q1 = [0, 1, 2, 3, 4, 5, -3];
let q2 = [-1, 2, -5, -4, 0] 
let q3 = []

let positive = []
function getArrayOfPositives(data) {
    for (i = 0; i < data.length; i++) {
        if (data[i] > 0) {
            positive.push(data[i])
        }
    }
    return positive

}

console.log(getArrayOfPositives(q1));
console.log(getArrayOfPositives(q2));
console.log(getArrayOfPositives(q3));

//..............................End of task.......................................................

var r1 = [0, 1, 'cat', 3, true, 'dog']
var r2 = [ 1, 2, 3, 4, 5 ] 
var r3 = [ 'cat', 'dog', 'raccon']

var getArrayOfString = (data) => data.filter(val => typeof val === 'string')
console.log(getArrayOfString(r1));
console.log(getArrayOfString(r2));
console.log(getArrayOfString(r3));


//..............................End of task........................................................

var a = ['permanent-internship', 'glutinous-shriek', 'multiplicative-elevation'];
var b = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

var c = a.map(f => { return f.toUpperCase(); });
var d = b.map(f => { return f.toUpperCase(); });

console.log(c)
console.log(d)

//......................................End of task.......................................

var s1 = ['', 'a', 'bc', 'def', 'ghij']
var s2 = ['angular', 'react', 'ember']

var s1 = s1.map(f => { return f.length; });
var s2 = s2.map(f => { return f.length; });
console.log(s1)
console.log(s2)

//........................................End of task.....................................

var a1 = [1, 3, 4, 5]
var a2 = ['a', 'b', 'c', 'd']

console.log(a1.slice(0, 2))
console.log(a2.slice(0, 3))

//......................................End of task........................................

var b1 = [1, 3, 4, 5]
var b2 = ['a', 'b', 'c', 'd']
var b3 = b1.splice(0, 2)
var b4 = b2.splice(0, 1)
console.log(b1)
console.log(b2)

//....................................End of task...........................................

var sq1 = [0, 1, 2, 3, 4, 5]
var sq2 = [10, 100, -1]

var sq1 = sq1.map(f => { return f * f })
var sq2 = sq2.map(f => { return f * f })
console.log(sq1)
console.log(sq2)

//....................................End of task............................................

var x1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var x2 = ['a', 'b', 'c', null]
var x3 = ["a"]


function getSecondElement(data) {

    var x1new = data.filter(function (item, index) {
        return index % 2 == 1;

    })
    return x1new;
}
console.log(getSecondElement(x1));
console.log(getSecondElement(x2));
console.log(getSecondElement(x3));

//........................................End of task.............................................

var z1 = []
var z2 = [1, 2]
var z3 = [1, 2, 3]
var z4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var z5 = [10, 10, 10, 10]

var getReverse = (data) => {
    var newReverse = data.reverse();
    return newReverse
}
console.log(getReverse(z1))
console.log(getReverse(z2))
console.log(getReverse(z3))
console.log(getReverse(z4))
console.log(getReverse(z5))

//.........................................End of task...............................................

var arr = [0, 1, 2, 3, -1, -2, -3];
var y1 = []
var y2 = [-1, 0, 1]
var y3 = [1, 2, 3]
var y4 = [null, 1, 'elephant']
var y5 = [1, '2']

function countPositiv(p, c) {
    if (c > 0) {
        return p + 1;
    } else {
        return p;
    }
}

var positiv = arr.reduce(countPositiv, 0);

console.log(positiv);

//........................................End of task.....................................................

var c1 = []
var c2 = ['nine', 'one']
var c3 = ['one', 'two', 'three']
var c4 = ['nine', 'eight', 'nine', 'eight']
var c5 = ['one', 'one', 'one', 'zero']

function getSortElement(data) {
    return data.sort();
}
console.log(getSortElement(c1))
console.log(getSortElement(c2))
console.log(getSortElement(c3))
console.log(getSortElement(c4))
console.log(getSortElement(c5))

//........................................End of task...................................................

let numArr = [1, 1, 1, 1, 2, 2, 5, 5, 5, 5]
let empArr = []

numArr.filter(function (val) {
    if (empArr.indexOf(val) > -1) {
        return false;
    }
    else {
        empArr.push(val);
    }
})


console.log(empArr);
let conArr = empArr.concat(empArr);

console.log(conArr);
console.log(conArr.sort());

//....................................End of task...................................................

var d1 = []
var d2 = [1, 2, 3]
var d3 = [-1, 1, -1, 1]
var d4 = [1, 10, 100, 1000]

var sum = (data) => {
    var total = 0;
    for (var i = 0; i < data.length; i++) {
        total += data[i];
    }
    return total
}

console.log(sum(d1));
console.log(sum(d2));
console.log(sum(d3));
console.log(sum(d4));

//.....................................End of task..................................................

var c1 = []
var c2 = [1, '', 3]
var c3 = [-1, 'false', null, 0]
var c4 = [null, undefined, NaN, false, 0, '']

var getFalsyValuesCount = (arr) => {
    count = 0
    for (var i of arr)
        if (arr) {
            count++
        }
        else {
            false;
        }
    return count;
}
console.log(getFalsyValuesCount(c1))
console.log(getFalsyValuesCount(c2))
console.log(getFalsyValuesCount(c3))
console.log(getFalsyValuesCount(c4))

//...................................End of task....................................................

var e1 = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4]


var a = e1.reduce(function (acc, curr) {
    if (typeof acc[curr] == 'undefined') {
        acc[curr] = 1;
    } else {
        acc[curr] += 1;
    }

    return acc;
}, {});
console.log(a)


//....................................End of task..................................................

var f1 = [0, false, 'cat', NaN, true, '']
var f2 = [1, 2, 3, 4, 5]
var f3 = ['rock', 'paper', 'scissors']

var getDelimiters = (data) => {
    data.join()
}
console.log(getDelimiters(f1))
console.log(getDelimiters(f2))
console.log(getDelimiters(f3))


var f1 = f1.join();

console.log(f1)

//....................................End of task.................................................



