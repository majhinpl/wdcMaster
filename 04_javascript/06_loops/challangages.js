/*
1. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`.

store all teas before `"chai"` in a new array named `selectedTeas`.

*/

let teas = ["green tea", "black tea", "chai", "oolong tea"];

let selectedTeas = [];

for (let t = 0; t < teas.length; t++) {
  if (teas[t] === "chai") {
    break;
  }
  selectedTeas.push(teas[t]);
}

console.log(selectedTeas);

/*
2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`.

Store the other cities in a new array named `visitedCities`.
*/

let cities = ["London", "New York", "Paris", "Berlin"];

let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "Paris" || cities[i] === "paris") {
    continue;
  }
  visitedCities.push(cities[i]);
}

console.log(visitedCities);

/*
3. Use a `for-of` loop to iterate through the array `[1,2,3,4,5]` and stop when the number `4` is found.

Store the numbers before `4` in an array named `smallNumbers`.
*/

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const nums of numbers) {
  if (nums === 4) {
    break;
  }
  smallNumbers.push(nums);
}

console.log(smallNumbers);

/*
4. Use a `for-of` loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` and skip `"herbal tea"`.

Store the other teas in an array named `prererredTeas`.
*/

let teaTypes = ["chai", "green tea", "herbal tea", "black tea"];

let prererredTeas = [];

for (const favTea of teaTypes) {
  if (favTea === "herbal tea") {
    continue;
  }
  prererredTeas.push(favTea);
}

console.log(prererredTeas);

/*
5. Use a `for-in` loop to loop through an object containing city populations.
Stop the loop when the population of `"Berlin"` is found and store all previous cities
 populations in a new object named `cityPopulations`.

 let citiesPopulation = {
 "london" : 8900000,
 "New York": 8400000,
 "Paris" : 2200000,
 "Berlin": 3500000
 }
 */

let citiesPopulation = {
  london: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};

let cityNewPopulations = {};

for (const city in citiesPopulation) {
  if (city == "Berlin") {
    break;
  }
  cityNewPopulations[city] = citiesPopulation[city];
  console.log(cityNewPopulations);
}

/*
6. Use a `for-in` loop to loop through an object containing city populations.

Skip any city with a populatyion below 3 million and store the rest in a new object named `largeCities`.

let worldCities = {
"Sydney" : 50000000,
"Tokyo" : 9000000,
"Berlin" : 3500000,
"Paris" : 2200000
};

*/

let worldCities = {
  Sydney: 50000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};

let largeCities = {};

for (const city in worldCities) {
  if (worldCities[city] < 3000000) {
    continue;
  }
  largeCities[city] = worldCities[city];
}

// console.log(largeCities);

/*
7. Write a `forEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`.
Stop the loop when `"chai"` is found, and store all previous tea types in an array named `availableTeas`.
*/
let teaList = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];

teaList.forEach((tea) => {
  if (tea === "chai") {
    return;
  }
  availableTeas.push(tea);
});

// console.log(availableTeas);

/*
8. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`.

Skip `"Sydney"` and store the other cities in a new array named `traveledCities`.
*/

cities = ["Berlin", "Tokyo", "Sydney", "Paris"];

let traveledCities = [];

cities.forEach((city) => {
  if (city === "Sydney") {
    return;
  }
  traveledCities.push(city);
});

console.log(traveledCities);

/*
9. Write a `for` loop that iterates through the array `[2,5,7,9]`. 
Skip the value `7` and multiply the rest by 2. Store the result in a new array named `doubleNumbers`.
*/

let myNumber = [2, 5, 7, 9];
let doubleNumbers = [];

for (let n = 0; n < myNumber.length; n++) {
  if (numbers[n] === 7) {
    continue;
  }
  doubleNumbers.push(numbers[n]);
}

/*
10. Use a `for-of` loop to iterate through the array `["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]`
and stop when the length of the current tea name is greater than 10.
Store the teas iterated over in an array named `shortTeas`.
*/

let teaArry = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];

let shortTeas = [];

for (const shortTea of teaArry) {
  if (shortTea.length > 10) {
    break;
  }
  shortTeas.push(shortTea);
}

console.log("short tea", shortTeas);

let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log(sum);
