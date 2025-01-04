/*
1. Write a `while` loop that calculate the sum of all numbers from 1 to 5 and store that result in a variable named `sum`.
*/
let sum = 0;
let i = 1;

while (i <= 5) {
  sum += i;
  i++;
}

console.log(sum);

/* 
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countDown`.
*/

let countDown = [];
let j = 5;

while (j > 0) {
  countDown.push(j);
  j--;
}

console.log(countDown);

/* 
3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`.
Store each tea type in an array named `teaCollection`.
*/

const teaCollection = [];
let tea;
/*
do {
    tea = prompt(`Enter your favorite tea (type "stop" to finished)`);

  if (tea !== "stop") {
    teaCollection.push(tea);
  }
} while (tea !== "stop");

*/

/*
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `toral`.
*/

let total = 0;
let k = 1;

do {
  total += k;
  k++;
} while (k <= 3);

console.log(total);

/*
5. Write a `for` loop that multiplies each element in the array `[2,4,6]` by 2 and stores the results in a new array named `multipliedNumbers`;
*/

let multipliedNumbers = [];
let numbers = [2, 4, 6];

for (let l = 0; l < numbers.length; l++) {
  multipliedNumbers.push(numbers[l] * 2);
}
console.log(multipliedNumbers);

/*
6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
*/

let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

for (let m = 0; m < cities.length; m++) {
  const myCity = cities[m];
  cityList.push(myCity);
  //   cityList.push(cities[m]);
}

console.log(cityList);
