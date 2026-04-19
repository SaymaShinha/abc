// Celsius To Fahrenheit
function celsiusToFahrenheit() {
  const celsius = 32;

  document.getElementById("cTof").innerText =
    "1. Celsius " + celsius + " And Fahrenheit is " + (celsius * 9) / 5 + 32;

  console.log((celsius * 9) / 5 + 32);
}

celsiusToFahrenheit();

//
let numbers = [5, 6, 11, 12, 98, 5];
let counts = {};

for (let i = 0; i < numbers.length; i++) {
  if (counts[numbers[i]]) {
    counts[numbers[i]] = counts[numbers[i]] + 1;
  } else {
    counts[numbers[i]] = 1;
  }
}

document.getElementById("repeated_number").innerText =
  "2. Repeated number in numbers array: " + JSON.stringify(counts);

console.log(JSON.stringify(counts));

// count vowels in a string

let name = "Apple";
let vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
let vowel_in_name = [];

for (let i = 0; i < name.length; i++) {
  if (vowels.includes(name.charAt(i))) {
    vowel_in_name.push(name.charAt(i));
  }
}

document.getElementById("vowel_in_string").innerText =
  "3. Vowels in a string Apple: " + vowel_in_name;

console.log(vowel_in_name);

// Find longest word in a string

let sentence = "I am learning Programming language to become a programmer";
let words = sentence.split(" ");

let longest_word = "";

for (let i = 0; i < words.length; i++) {
  if (longest_word.length < words[i].length) {
    longest_word = words[i];
  }
}

document.getElementById("longest_word").innerText =
  "4. Longest word in a sensentce: " + longest_word;

console.log(longest_word);

// Generate random number between number

let random_number = Math.floor(Math.random() * (20 - 10 + 1)) + 10;

document.getElementById("random_number").innerText =
  "5. Random number between 10 to 20: " + random_number;

console.log(random_number);

// Find lowest number in a array

let heights = [167, 190, 120, 165, 137];
let lowest_number = 1000;

for (let i = 0; i < heights.length; i++) {
  if (lowest_number > heights[i]) {
    lowest_number = heights[i];
  }
}

document.getElementById("lowest_number").innerText =
  "6. Lowest number in a array: " + lowest_number;

console.log(lowest_number);

// find smallest name in a array

let name2 = ["rahim", "robin", "rafi", "ron", "rashed"];
let smallest_name = "abcdefghijklmnopqrst";

for (let i = 0; i < name2.length; i++) {
  if (smallest_name.length > name2[i].length) {
    smallest_name = name2[i];
  }
}

document.getElementById("lowest_number").innerText =
  "7. Smallest name in a array: " + smallest_name;

console.log(smallest_name);

// function 1

function calculateElectronicsBudget(laptop, tablets, mobile) {
  let total_money = 0;

  total_money = laptop + tablets + mobile;

  document.getElementById("total_money").innerText =
    "8. Total money: " + total_money;

  console.log(total_money);

  return total_money;
}

let laptop = 35000;
let tablets = 15000;
let mobile = 20000;

calculateElectronicsBudget(laptop, tablets, mobile);

// function 2

function findAveragePhonePrice(array) {
  let total_price_of_phone = 0;

  for (let i = 0; i < array.length; i++) {
    total_price_of_phone += array[i].price;
  }

  let average_price_of_phone = total_price_of_phone / (array.length + 1);

  document.getElementById("average_price_of_phone").innerText =
    "9. Average value of phone: " + average_price_of_phone;

  console.log(average_price_of_phone);

  return average_price_of_phone;
}

const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

findAveragePhonePrice(phones);

// function 3

function totalSalaryProvidedByCompany(given_array) {
  let total_salary = 0;

  for (let i = 0; i < given_array.length; i++) {
    let current_salary = 0;
    for(let j = 0; j <= given_array[i].experience; j++){
        current_salary = (given_array[i].increment * j) +
      given_array[i].starting;
    }
    total_salary +=
      current_salary;
  }

  document.getElementById("total_slary_provided_by_company").innerText =
    "10. Total salary provided by company: " + total_salary;

  console.log(total_salary);

  return total_salary;
}

const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

totalSalaryProvidedByCompany(employees);
