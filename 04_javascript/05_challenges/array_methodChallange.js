/*
1. Declare an array name `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolang tea"`.

Access the first element of the array and store it in a variable named `firstTea`.
*/

// Write your code here
const teaFlavors = ["green tea", "black tea", "oolang tea"];
const firstTea = teaFlavors[0];

console.log(teaFlavors);

/*
2. Declare an rray named `cities` containing `"London"`, `"Tokyo"`, `"Paris"` and `"New York"`.

Access the third element in the array and store it in a variable named `favoriteCity`.
*/

// Write your code here
const cities = ["London", "Tokyo", "Paris", "New York"];

const favoriteCity = cities[2];
console.log(cities);

/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/

// Write your code here
const teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";

/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/

// Write your code here

const citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");
console.log(citiesVisited);

/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/

const teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
console.log(teaOrders);

const lastOrder = teaFlavors.pop();
console.log(teaOrders);
teaFlavors.pop();
console.log(lastOrder);

console.table(teaOrders);

/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/

// Write your code here
const popularTeas = ["green tea", "oolong tea", "chai"];
const softCopyTeas = popularTeas;

console.log("popularTeas", popularTeas);
console.log("softCopyTeas", softCopyTeas);

/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/

// Write your code here

const topCities = ["Berlin", "Singapore", "New York"];
const hardCopyCities = [...topCities];

console.log("topCities", topCities);
console.log("hardCopyCities", hardCopyCities);

/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/

// Write your code here
const europeanCities = ["Paris", "Rome"];
const asianCities = ["Tokyo", "Bangkok"];

const worldCities = europeanCities.concat(asianCities);

console.log("worldCities", worldCities);

/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/

// Write your code here
const teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"];

const menuLength = teaMenu.length;

console.table(teaMenu);
console.table(menuLength);

/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

// Write your code here
const cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];

const isLondonInList = cityBucketList.includes("London");

let arr = [1, 2, 3];
arr.push(4);
arr.pop();
console.log(arr);

let arr1 = [1, 2, 3, 4];
console.log(arr1.indexOf(3));
