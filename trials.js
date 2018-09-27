// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();

// Add some phone numbers to our map
phoneNumbers.set('home', '510-876-5309');
phoneNumbers.set('mobile', '415-555-1212');
phoneNumbers.set('business', '415-123-4567');


// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 

function printInfo(accHolder, accNumber, busName) {
  console.log(`Account Holder Name: ${accHolder}`);
  console.log(`Account Holder Number: ${accNumber}`);
  console.log(`Business Name: ${busName}`);
}

printInfo(accountHolder, accountNumber, businessName);

// Add function to print all addresses, including a header
function showAddresses(addressList) {
  console.log('Addresses');
  for (let address of addressList) {
    console.log(`${address}`);
  }
}
showAddresses(addresses);

// Add function to print phone types and numbers
function showPhoneNums(phones) { 
  console.log('Phone Numbers:');
  for (let [name, phone] of phones) {
    console.log(`${name}: ${phone}`);
  }
}
showPhoneNums(phoneNumbers);

// ///////////////////////////////////////////////////////
// Transactions:
const transactions = new Map();

function addTransaction(date, amount) {
  transactions.set(date, amount);
}

addTransaction('May-2', -500);
addTransaction('May-13', +1200);
addTransaction('May-15', -100);
addTransaction('May-21', -359);
addTransaction('May-29', +2200);


// Add function to show balance status
function showBalanceStatus(balance) {
  if (balance < 0) {
    console.log('YOU ARE OVERDRAWN');
    }
  else if ((balance > 0) && (balance < 20)) {
    console.log('Warning: You are close to zero balance');
  }
  else {
    console.log('Thank you for your business.');
  }

  }
showBalanceStatus(50);
showBalanceStatus(15);


// Add function to show transactions
function showTransactions(transaction, balance) {
  console.log(balance);
  for (let [date, value] of transaction) {
    let typeT;
    if (value < 0) {
      typeT = 'Withdrawal';
    }
    else {
      typeT = 'Deposit';
    }
    balance = (balance + value);
    if (balance < 0) {
      balance = (balance - 25);
      console.log('You overdraw, $25 fee charged!');
    }
    console.log(`${date}, ${typeT}, ${value} ${balance}`);
  }
  showBalanceStatus(balance);
  return balance;
}

const balance = 26000;
showTransactions(transactions, balance);

// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info
const customer = {
  accHolder: 'Balloonicorn',
  accNumber: '123456',
  busName: "Balloonicorn's Cupcake Shop",
  addresses: ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"],
  phones: phoneNumbers,
  transaction: transactions,
  balance: balance
};

// Function to add customer attributes
function add_properties(melon='Cantaloupe', numPets=0) {
  customer.melon = melon;
  customer['numPets'] = numPets; 
}

add_properties('Casaba', 2);
console.log(customer);
// Add attributes for this user


// ///////////////////////////////////////////////////////
// Getting a Business Loan

function get_loan(income, customerO) {
  let preferred;
  if (customerO.melon === 'Casaba' || customerO.numPets > 5) {
    preferred = true;
  }
  else {
    preferred = false;
  }
  let rate;
  if (income < 100000) {
    if (preferred) {
      rate = 5;
    }
    else {
      rate = 8;
    }
  }
  else if (income > 100000 && income < 200000) {
    if (preferred) {
      rate = 4;
    }
    else {
      rate = 7;
    }
  }
  else {
    rate = 4;
    }
  }

// ///////////////////////////////////////////////////////
// Account Report
let new_balance = showTransactions(customer.transaction, customer.balance);
customer.new_balance = new_balance;

// Add function to show bank customer report
function account_report(income, customerO) {
  console.log(`Customer name is ${customerO.accHolder}`);
  console.log(`Call them at these numbers:`);
  for (let phone of customerO.phones){
    console.log(`${phone}`);
  }
  console.log(`Their starting balance was ${customerO.balance}`);
  console.log(`Current balance is ${customerO.new_balance}`);
  if (customerO.melon === 'Casaba' || customerO.numPets > 5) {
    console.log('Congratulations on being a premiere customer!');
  }
}

account_report(150000, customer);

// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses
const customerAddresses = new Map();
customerAddresses.set('Mel Melitipolski', '707 Birch Street');
customerAddresses.set('Barbara Brown', '8997 Jones Street');

function return_address(name) {
  return customerAddresses.get(name);
}

let x = return_address('Mel Melitipolski');
console.log(x);

// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




