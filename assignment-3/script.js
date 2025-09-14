const questions = [
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "Oracle"],
    correctAnswer: "Netscape",
  },
  {
    question: "Which symbol is used for comments in JavaScript (single line)?",
    options: ["<!--", "//", "/* */", "##"],
    correctAnswer: "//",
  },
  {
    question: "Which of these is NOT a JavaScript data type?",
    options: ["String", "Boolean", "Character", "Number"],
    correctAnswer: "Character",
  },
  {
    question: "What will Number('5') + 2 return?",
    options: ["52", "7", "NaN", "Undefined"],
    correctAnswer: "7",
  },
  {
    question: "Which loop runs at least once even if the condition is false?",
    options: ["for loop", "while loop", "do...while loop", "foreach loop"],
    correctAnswer: "do...while loop",
  },
  {
    question:
      "Which operator is used to check BOTH value and type in JavaScript?",
    options: ["=", "==", "===", "=>"],
    correctAnswer: "===",
  },
  {
    question: "What is the output of typeof [1,2,3]?",
    options: ["object", "array", "list", "number"],
    correctAnswer: "object",
  },
  {
    question: "Which array method removes the last element?",
    options: ["shift()", "pop()", "push()", "splice()"],
    correctAnswer: "pop()",
  },
  {
    question: "Which of these is a logical operator in JavaScript?",
    options: ["&&", "++", "==", "+="],
    correctAnswer: "&&",
  },
  {
    question: "Which method is used to join array elements into a string?",
    options: ["join()", "concat()", "slice()", "map()"],
    correctAnswer: "join()",
  },
];

let score = 0;
const letters = ["A", "B", "C", "D"];
const results = []

function checkAnswer(userAnswer, correctAnswer){
   return userAnswer === correctAnswer
}


for (let i = 0; i < questions.length; i++) {
  let optionsText = "";
  for (let j = 0; j < questions[i].options.length; j++) {
    optionsText += `${letters[j]}) ${questions[i].options[j]}\n`;
  }

  let userAnswer;

  // keep asking until valid input
  while (true) {
    userAnswer = prompt(
      `${questions[i].question}\n${optionsText}\nEnter A, B, C, or D:`
    ).toUpperCase();

    if (letters.includes(userAnswer)) {
      break; // valid, exit the loop
    } else {
      alert("❌ Invalid choice! Please enter A, B, C, or D.");
    }
  }

  // match answer letter to actual option
  let selectedOption = questions[i].options[letters.indexOf(userAnswer)];

  if (checkAnswer(selectedOption, questions[i].correctAnswer)) {
    score++;
    results.push({
      question: questions[i].question,
      status: "✅ correct",
      yourAnswer: selectedOption
    });
  }else{
    results.push({
      question: questions[i].question,
      status: "❌ Incorrect",
      yourAnswer: selectedOption,
      correctAnswer: questions[i].correctAnswer
    });
  }
}

alert(`✅ You got ${score} out of ${questions.length}`);
if (score >= questions.length / 2) {
  alert("🎉 You Passed!");
} else {
  alert("😢 You Failed!");
}

console.log("📊 Quiz Results:");
results.forEach((result, index) => {
  console.log(`${index + 1}. ${result.question}`);
  console.log(`   Your Answer: ${result.yourAnswer}`);
  if (result.status === "❌ Incorrect") {
    console.log(`   Correct Answer: ${result.correctAnswer}`);
  }
  console.log(`   Result: ${result.status}`);
});
//got emojis from getEmoji.com