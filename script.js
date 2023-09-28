const menuItems = [
    {
        navName: "Postcode Lists",
        dropDown: [{ name: "By Country" }, { name: "By Introduction Date" }],
    },
    {
        navName: "Postcode Maps",
        dropDown: [{ name: "default" }, { name: "default" }],
    },
    { navName: "Nearest Postcode" },
    { navName: "Postcode Lottery" },
]

let firstObject;
let secondObject;
let thirdObject;

menuItems.map((items) => {
    firstObject = items[0];
    secondObject = items[1];
    thirdObject = items[2];
})

console.log(firstObject);
console.log(secondObject);
console.log(thirdObject)