// VERY EASY
// 1) How Edabit Works
function hello() {
	return "hello edabit.com"
}
console.log(hello())


// 2) area of triangle
function triArea(base, height) {
   return (base * height) / 2
}
console.log(triArea(2, 3))


// 3) buggy code - part1
function cubes(a) {
   return a ** 3
}
console.log(cubes(3))


// 4) how many hours into seconds
function howManySeconds(hours) {
   return hours*60*60
}
console.log(howManySeconds(2))

// 5) first element in array
function getFirstValue(arr) {
   return +arr[0]
}

console.log(getFirstValue([80, 5, 100]))


// 6) power calculator
function circuitPower(voltage, current) {
   return voltage * current 
}

// 7) convert hours into seconds
function convert(minutes) {
   return minutes*60
}


// 8) next number
function addition(num) {
   return num+1
}

// 9) convert age to days
function calcAge(age) {
   return age * 365
}


// 10) maximum edge of a triangle
function nextEdge(side1, side2) {
   return (side1 + side2) - 1 
}

// 11) return remainder
function remainder(x, y) {
   return x%y
}

console.log(remainder(1, 3))


// 12) Rectangle perimeter
function findPerimeter(length, width) {
   return (length + width) * 2
}


// 13) return something to me
function giveMeSomething(a) {
	return "something "+a
}


// 14) correct the mistages
function squared(b) {
   return b * b
}

console.log(squared(5))



// 15) power calculator
function and(a, b) {
   if(a === b) {
      if(a === false && b === false) {
         return false
      }
   } else {
      return a === b
   }
}
console.log(and(true, false))



// 16) prinst array
function printArray(number) {
   let result = []

   for(let i = 1; i <= number; i++) {
      result.push(i)
   }
   return result
}
console.log(printArray(5))



// 17) is the number less than or equal to zero
function lessThanOrEqualToZero(num) {
   if(num === 0 || num < 0) {
      return true
   } else {
      return false
   }
}
console.log(lessThanOrEqualToZero(0))




// 18) sum of polygon Angles
function sumPolygon(n) {
   if(n <= 2) {
      return n
   } else {
      return (n-2)*180
   }
}
console.log(sumPolygon(0))




// 19) bassketball points
function points(twoPointers, threePointers) {
   return (twoPointers * 2) + (threePointers * 3)
}


// 20) basic veriable assigment
function nameString(name) {
   return name + "Edabit"
}
console.log(nameString())


// 21) less than 100
function lessThan100(a, b) {
   return (a + b) < 100 ? true: false
}


// 22) are the numbers equal?
function isSameNum(num1, num2) {
   return num1 === num2
}
console.log(isSameNum(2, "2"))



// 23) footbal points
function footballPoints(wins, draws, losses) {
   return (wins*3) + draws*1
}
console.log(footballPoints(3, 4, 2))



// 24) buggy code - part 7
function swap(a, b) {
	return [a, b].reverse()
}
console.log(swap(100, 200))



// 25) the farm problem
function animals(chickens, cows, pigs) {
   return (chickens * 2) + (cows * 4) + (pigs * 4)
}
console.log(animals(2, 3, 5))



// 26 convert Hours and minutes to seconds
function convert(hours, minutes) {
   return (hours * 60 * 60) + (minutes * 60)
}
console.log(convert(1, 3))



// 27) fix the expression
function isSeven(x) {
	return x === 7
}
console.log(isSeven(4))



// 28) is equal

function checkEquality(a, b) {
   return a === b
}


console.log(checkEquality(1, true)) 





// 29) profitable Gamble
function profitableGamble(prop, prize, pay) {
   return (prop * prize) > pay ? true : false
}

// 30) bool to string
function boolToString(bool) {
   return bool.toString()
}
console.log(boolToString(true))












// Check same case - codewars
function func(str1, str2) {
   if(str1.match(/[a-zA-Z]/g) === null || str2.match(/[a-zA-Z]/g) === null) {
      return -1
   } else if((str1.match(/[a-z]/g) === str2.match(/[a-z]/g)) || (str1.match(/[A-Z]/g) === str2.match(/[A-Z]/g))) {
      return 1
   } else {
      return 0
   }
}

console.log(func("a", "g"));
console.log(func("A", "C"));
console.log(func("b", "G"));
console.log(func("B", "g"));
console.log(func("0", "?"));




// normal

// 1) how match is ture?

function countTrue(arr) {
   let result = 0;
   arr.forEach(el => {
      if(el === true) {
         result++
      }
   })
   return result;
}

console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));


// 2) A Redundant Function
function redundant(str) {
	return function() {
      return str
   }
}

const f1 = redundant("apple")
console.log(f1())


// 3) RegEx Exercise: An empty string
const REGEXP = /^$/
console.log(REGEXP.test(""))

// 4) Tile Teamwork Tactics
function possibleBonus(a, b) {
   if(a < 0 || b < 0) {
      return false
   }
	for(let i = a; i <= (a + 6); i++) {
      for(let j = b; j <= (b + 6); j++) {
         if(i===j) {
            return true;
         } 
      }
   }
   return false;
}
console.log(possibleBonus(3, 7));
console.log(possibleBonus(1, 9));
console.log(possibleBonus(5, 3));

// Right Shift by Division
function shiftToRight(x, y) {
   if(y<0) {
      return false
   }
	return Math.floor(x / (2**y))
}

console.log(shiftToRight(80, 3));
console.log(shiftToRight(-24, 2));
console.log(shiftToRight(-5, 1));
console.log(shiftToRight(4666, 6));
console.log(shiftToRight(3777, 6));
console.log(shiftToRight(-512, 10));

// 5) Perimeters with a Catch

function perimeter(l, num){
	return l === "s" ? 4 * num : 6.28 * num; // verilen formulada sehvlik var
}
console.log(perimeter("s", 7));
console.log(perimeter("c", 4));
console.log(perimeter("c", 9));

// 6) Find Number of Digits in Number/Try to solve this challenge without using strings!
function num_of_digits(num) {
   let count = 0;
   while (num !== 0) {
     num = Math.floor(num / 10);
     count++;
   }
   return count;
}
console.log(num_of_digits(1000));
console.log(num_of_digits(12));
console.log(num_of_digits(1305981031));
console.log(num_of_digits(0));



// 7) Burglary Series (04): Add its Name

function addName(obj, name, value) {
	if(typeof value !== "number") {
      return false
   } else {
      obj[name] = value;
      return obj;
   }
}

console.log(addName({}, "Brutus", 300));
console.log(addName({ piano: 500 }, "Brutus", 400));
console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440));

// 8) Derivative of a Function
function derivative(b, m) {
   return b * Math.pow(m, b-1);
}

console.log(derivative(1, 4));
console.log(derivative(3, -2));
console.log(derivative(4, -3));


// 9) Which Generation Are You?
function generation(x, y) {
   const relatives = [
      [-3, "great grandfather", "great grandmother"],
      [-2, "grandfather", "grandmother"],
      [-1, "father", "mother"],
      [0, "me!", "me!"],
      [1, "son", "daughter"],
      [2, "grandson", "granddaughter"],
      [3, "great grandson", "great granddaughter"]
    ];
    
   const index = relatives.findIndex(elem => elem[0] === x);
   if(index===-1) {
      return "invalid value";
   }
   return y === "f" ? relatives[index][2] : y === "m"?relatives[index][1]:"invalid value";
}

console.log(generation(2, "f"));


// 10) Find the nth Tetrahedral Number
function tetra(n) {
	return (n * (n + 1) * (n + 2)) / 6
}
console.log(tetra(2));
console.log(tetra(5));
console.log(tetra(6));

// 11) Learn Lodash (2): Compact
function compact(arr) {
   return arr.filter(el => Boolean(el));
}
console.log(compact([0, 1, false, 2, "", 3]));

// 12) Rectangle Series 1: Skeleton

class Rectangle {
   constructor(x, y, width, height) {
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
   }
   toString() {
      return `[x = ${this.x}, y = ${this.y}, width = ${this.width}, height = ${this.height}]`;
   }
}

const rec = new Rectangle(1, 2, 3, 4);
console.log(rec.toString());


// 13) Function Factory

function makePlusFunction(baseNum) {
   if(typeof baseNum !== 'number') {
      return "invalid base number";
   }
	return function(newNum) {
      if(typeof newNum !== 'number') {
         return "invalid newNum number";
      }
      return baseNum + newNum;
   }
}

const plusFive = makePlusFunction(5);
console.log(plusFive(2));


// 14) Converting Objects to Arrays

function toArray(obj) {
	return Object.entries(obj);
}

console.log(toArray({shrimp: 15, tots: 12 }));


// 15) Concatenate Variable Number of Input Arrays
function concat(...args) {
	return args.flat();
}
console.log(concat([1, 2, 3], [4, 5], [6, 7]) );
console.log(concat([1], [2], [3], [4], [5], [6], [7]));
console.log(concat([1, 2], [3, 4]) );
console.log(concat([4, 4, 4, 4, 4]));


// 16) All About Anonymous Functions: Adding Suffixes
function add_suffix(suffix) {
	return function(str) {
      return str + suffix;
   }
}
add_ly = add_suffix("ly");
console.log(add_ly("hopeless"));