// number 1
const account1 = {
  name: "Tolu",
  balance: 5000,
  currency: "NGN",
  type: "savings",
};
const account2 = {
  name: "Sid",
  balance: 30000,
  currency: "USD",
  type: "checking",
};
const account3 = {
  name: "Nancy",
  balance: 3000,
  currency: "NGN",
  type: "savings",
};

const account4 = {
  name: "Temi",
  balance: 300000,
  currency: "USD",
  type: "checking",
};

//number 2
let firstDeposit = 15500;
account1.balance += firstDeposit
console.log(
  `${account1.name} current balance is ${account1.balance} ${account1.currency}`
);

let secDeposit = 200000;
account3.balance += secDeposit;
console.log(
  `${account3.name} current balance is ${account3.balance} ${account3.currency}`
);

//number 3
let firstwithdrawal = 150;
if (firstwithdrawal <= account2.balance) {
  account2.balance -=  firstwithdrawal
  console.log(
    `successful withdrawal ${account2.name}, your account balance is ${account2.balance}`
  );
} else {
  console.log(`Withdrawal denied for ${account2.name}: insufficient funds`);
}

let secwithdrawal = 5050;
if (secwithdrawal <= account4.balance) {
  account4.balance -= secwithdrawal
  console.log(
    `successful withdrawal ${account4.name}, your account balance is ${account4.balance}`
  );
} else {
  console.log(`Withdrawal denied for ${account4.name}: insufficient funds`);
}

// number 4
let transferAmount = 5000000;
if (account1.currency === account3.currency) {
 if (account3.balance >= transferAmount) {
   account1.balance += transferAmount;
   account3.balance -= transferAmount;
   console.log(
     `Transfer successful, ${account3.name} has ${account3.balance} left, and ${account1.name} has ${account1.balance}.`
   );
 } else {
   console.log(
     `Transfer failed: insufficient funds in ${account3.name}'s account`
   );
 }
} else {
  console.log("Transfer failed: currency mismatch");
}

// number 5
let accounts = [account1, account2, account3, account4];

for (let account of accounts) {
  if (account.type === "savings") {
    account.balance += account.balance * 0.02;
    console.log(
      `${account.name} has ${account.balance} ${account.currency} after interest`
    );
  } else if (account.type === "checking") {
    account.balance -= 50;
    console.log(
      `${account.name} has ${account.balance} ${account.currency} after fees`
    );
  }
}

// number 6
let highestAccount = accounts[0];
let lowestAccount = accounts[0];

for (let account of accounts) {
  if (account.balance > highestAccount.balance) {
    highestAccount = account;
  }
  if (account.balance < lowestAccount.balance) {
    lowestAccount = account;
  }
}
console.log(`Highest: ${highestAccount.name} (${highestAccount.balance} ${highestAccount.currency}), Lowest: ${lowestAccount.name} (${lowestAccount.balance} ${lowestAccount.currency})`);


// number 7
for (let account of accounts) {
  let status =
    account.balance > 0
      ? "Active"
      : account.balance === 0
      ? "Empty"
      : "Overdrawn";
  console.log(
    `${account.name} (${account.type || "unknown"}): ${account.balance} ${
      account.currency
    }, Status: ${status}`
  );
}

// number 8
for (let account of accounts) {
  let status =
    account.balance > 0
      ? "Active"
      : account.balance === 0
      ? "Empty"
      : "Overdrawn";
  console.log(
    `${account.name} (${account.type || "unknown"}): ${account.balance} ${
      account.currency
    }, Status: ${status}`
  );
}
