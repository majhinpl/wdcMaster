// prototypes : extra property and functionalities

let comp = { cpu: 12 };
let lenovo = {
  screen: "HD",
  __proto__: comp,
};
let tomHardfware = {};

// console.log(`comp `, comp.__proto__);
// console.log(`lenovo `, lenovo.__proto__);

let genericCar = { tyres: 4 };
let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar);
console.log(`tesla `, Object.getPrototypeOf(tesla));
// console.log(`tesla `, tesla.tyres);
