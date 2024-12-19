// even numbers 
for(i=0;i<=50;i++){
    if(i%2==0){
        console.log(i)
    }

}
// sum of arrays 
let a = [4, 8, 7, 13, 12]
let sum = 0;

for (let i = 0; i < a.length; i++) {
    sum += a[i];
}
console.log(sum)

// factorial

function fact(n) { 
    let res = 1; 
    
    if(n === 0)
        return 1;
    for (let i = 2; i <= n; i++) 
        res = res * i; 
    return res; 
}

let n = 5; 
console.log(fact(n));

// prime numbers 
function isPrime(num) {
    if (num <= 1) {
        return false; 
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true;
}


const number = 29;
console.log(`${number} is prime: ${isPrime(number)}`);

// reverse string
function reverseString(str) {
    let reversed = "";
    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}
const inputString = "hello";
console.log(`Reversed string: ${reverseString(inputString)}`);

// fibonacci series 
function fibonacci(num) {
    let num1 = 0;
    let num2 = 1;
    let sum;
    if (num === 1) {
        return num1;
    } else if (num === 2) {
        return num2;
    } else {
        for (let i = 3; i <= num; i++) {
            sum = num1 + num2;
            num1 = num2;
            num2 = sum;
        }
        return num2;
    }
}

console.log("Fibonacci(5): " + fibonacci(5));

// patterns
function printPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let stars = "";
        for (let j = 1; j <= i; j++) {
            stars += "*";
        }
        console.log(stars);
    }
}
printPattern(5);

// largest number
function findLargestNumber(numbers) {
    let largest = numbers[0];
    for (let num of numbers) {
        if (num > largest) largest = num;
    }
    return largest;
}
const numArray = [3, 1, 4, 1, 5, 9, 2, 6];
console.log(`The largest number is: $ {findLargestNumber(numArray)}`);

// vowels count
function countVowels(str) {
    let count = 0;
    const vowels = 'aeiouAEIOU'; 
    for (let char of str) {
        if (vowels.includes(char)) count++;
    }
    return count;
}
const String = "Hello World";
console.log(`Number of vowels: ${countVowels(String)}`);

// palidrome 
function isPalindrome(word) {
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - 1 - i]) return false;
    }
    return true;
}
console.log(isPalindrome("racecar"));

// remove duplicates
function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));


// power
function power(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}
console.log(power(2, 3)); 

// bubble sort
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; 
            }
        }
    }
    return arr;
}
console.log(bubbleSort([5, 2, 9, 1, 5, 6]));

// intersection

function intersection(arr1, arr2) {
    let commonElements = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !commonElements.includes(arr1[i])) {
            commonElements.push(arr1[i]);
        }
    }
    return commonElements;
}
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6])); 

//multiplication table

function multiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}
multiplicationTable(5);





