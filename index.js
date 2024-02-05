// const freelancers = [
//   { name: "Dr. Slice", price: 25, occupation: "gardener" },
//   { name: "Dr. Pressure", price: 51, occupation: "programmer" },
//   { name: "Prof. Possibility", price: 43, occupation: "teacher" },
//   { name: "Prof. Prism", price: 81, occupation: "teacher" },
//   { name: "Dr. Impulse", price: 43, occupation: "teacher" },
//   { name: "Prof. Spark", price: 76, occupation: "programmer" },
//   { name: "Dr. Wire", price: 47, occupation: "teacher" },
//   { name: "Prof. Goose", price: 72, occupation: "driver" },
// ];

// function main(freelancersList) {
//   const nameColumn = document.getElementById("nameColumn");
//   const occColumn = document.getElementById("occColumn");
//   const priceColumn = document.getElementById("priceColumn");

//   freelancersList.forEach((element) => {
//     const nameList = document.createElement("div");
//     const occList = document.createElement("div");
//     const priceList = document.createElement("div");

//     nameList.textContent = element.name;
//     occList.textContent = element.occupation;
//     priceList.textContent = element.price;

//     nameColumn.append(nameList);
//     occColumn.append(occList);
//     priceColumn.append(priceList);
//   });
// }

// setInterval(main(freelancers), 10000);

const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

let index = 0;
let averageTotal = 80;
let averageCalc = 40;
const averagePrice = document.getElementById("startingPrice");
const averageList = document.createElement("p");
averageList.textContent = `The average starting price is $40.`;
averagePrice.replaceChildren(averageList);

function displayFreelancer() {
  const nameColumn = document.getElementById("nameColumn");
  const occColumn = document.getElementById("occColumn");
  const priceColumn = document.getElementById("priceColumn");

  const freelancer = freelancers[index];

  const nameList = document.createElement("div");
  const occList = document.createElement("div");
  const priceList = document.createElement("div");

  nameList.textContent = freelancer.name;
  occList.textContent =
    freelancer.occupation.charAt(0).toUpperCase() +
    freelancer.occupation.slice(1);
  priceList.textContent = "$" + freelancer.price;

  averageTotal += freelancer.price;

  averageList.textContent = `The average starting price is $${(
    Math.round((averageTotal / (index + 3)) * 100) / 100
  ).toFixed(2)}.`;

  nameColumn.append(nameList);
  occColumn.append(occList);
  priceColumn.append(priceList);
  averagePrice.replaceChildren(averageList);

  index++;

  if (index < freelancers.length) {
    setTimeout(displayFreelancer, 5000);
  }
}

setTimeout(displayFreelancer, 5000);
