// Part 1: Basics - Variables and Conditionals
const ageInput = document.getElementById('ageInput');
const checkAgeBtn = document.getElementById('checkAgeBtn');
const ageMessage = document.getElementById('ageMessage');

checkAgeBtn.onclick = function() {
  const age = Number(ageInput.value);

  if (age < 0 || isNaN(age)) {
    ageMessage.textContent = 'Please enter a valid age.';
  } else if (age < 18) {
    ageMessage.textContent = 'You are a minor.';
  } else {
    ageMessage.textContent = 'You are an adult.';
  }
};

// Part 2: Functions - Calculate total price
function multiply(a, b) {
  return a * b;
}

function showTotal(total) {
  return 'Total price is $' + total;
}

const priceInput = document.getElementById('priceInput');
const quantityInput = document.getElementById('quantityInput');
const calcBtn = document.getElementById('calcBtn');
const totalMessage = document.getElementById('totalMessage');

calcBtn.onclick = function() {
  const price = Number(priceInput.value);
  const quantity = Number(quantityInput.value);

  if (price < 0 || quantity < 0 || isNaN(price) || isNaN(quantity)) {
    totalMessage.textContent = 'Please enter valid numbers.';
  } else {
    const total = multiply(price, quantity);
    totalMessage.textContent = showTotal(total);
  }
};

// Part 3: Loops - Show list of colors
const showListBtn = document.getElementById('showListBtn');
const colorList = document.getElementById('colorList');

const colors = ['Red', 'Green', 'Blue', 'Yellow'];

showListBtn.onclick = function() {
  colorList.innerHTML = ''; // Clear list first

  for (let i = 0; i < colors.length; i++) {
    const li = document.createElement('li');
    li.textContent = colors[i];
    colorList.appendChild(li);
  }
};

// Part 4: DOM Manipulation - Change text and add items
const changeTextBtn = document.getElementById('changeTextBtn');
const textToChange = document.getElementById('textToChange');

changeTextBtn.onclick = function() {
  textToChange.textContent = 'The text has changed!';
};

const addItemBtn = document.getElementById('addItemBtn');
const itemList = document.getElementById('itemList');
let itemCount = 0;

addItemBtn.onclick = function() {
  itemCount++;
  const li = document.createElement('li');
  li.textContent = 'Item ' + itemCount;
  itemList.appendChild(li);
};
