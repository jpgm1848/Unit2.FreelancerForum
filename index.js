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

const initialFreelancers = [
  { name: "Alice", price: 30, occupation: "writer" },
  { name: "Bob", price: 50, occupation: "teacher" },
];

function displayInitialFreelancer(array) {
  for (let index = 0; index < array.length; index++) {
    const nameColumn = document.getElementById("nameColumn");
    const occColumn = document.getElementById("occColumn");
    const priceColumn = document.getElementById("priceColumn");

    const nameList = document.createElement("div");
    const occList = document.createElement("div");
    const priceList = document.createElement("div");

    nameList.textContent = initialFreelancers[index].name;
    occList.textContent =
      initialFreelancers[index].occupation.charAt(0).toUpperCase() +
      initialFreelancers[index].occupation.slice(1);
    priceList.textContent = "$" + initialFreelancers[index].price;

    nameColumn.append(nameList);
    occColumn.append(occList);
    priceColumn.append(priceList);
  }
}

displayInitialFreelancer(initialFreelancers);

let index = 0;
let averageTotal = initialFreelancers[0].price + initialFreelancers[1].price;
let averageCalc = averageTotal / 2;
let selectedIndices = [];

const averagePrice = document.getElementById("startingPrice");
const averageList = document.createElement("p");
averageList.textContent = `The average starting price is $40.`;
averagePrice.replaceChildren(averageList);

function displayFreelancer() {
  const nameColumn = document.getElementById("nameColumn");
  const occColumn = document.getElementById("occColumn");
  const priceColumn = document.getElementById("priceColumn");

  let randomIndex = Math.floor(Math.random() * freelancers.length);

  while (selectedIndices.includes(randomIndex)) {
    randomIndex = Math.floor(Math.random() * freelancers.length);
  }

  const freelancer = freelancers[randomIndex];
  selectedIndices.push(randomIndex);

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
