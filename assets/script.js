//Questions
//Questions
var questions = [
    {
      question: "What programming language is used to style a webpage?",
      choices: ["JavaScript", "PineScript", "C++", "CSS"],
      answer: "CSS"
    },
    {
      question: "What is the starting point in an array?",
      choices: ["0", "1", "A", "0.0"],
      answer: "0"
    },
    {
      question: "Which programming language is used for web development?",
      choices: ["Java", "Python", "JavaScript", "C++"],
      answer: "JavaScript"
    }
  ];
//Global Vars
var currentQuestionIndex = 0;
var time = 60;
var correctAnswers = 0;

var questionElement = document.getElementById("question");
var choicesElement = document.getElementById("choices");
var startButton = document.getElementById("start");
var timerElement = document.getElementById("time");
var resultElement = document.getElementById("result");
var initialsInput = document.getElementById("initials");
var scoreElement = document.getElementById("score");
var saveButton = document.getElementById("save");

//Start function
function startQuiz() {
    startButton.disabled = true;
    startTimer();
    showQuestion();
  }
  //Timer function goes here
  function startTimer() {
    timerInterval = setInterval(function() {
      if (time > 0) {
        timerElement.textContent = --time;
      } else {
        endQuiz();
      }
    }, 1000);
  }

  function showQuestion() {
    var question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    choicesElement.innerHTML = "";
  
    question.choices.forEach(function(choice) {
      var choiceButton = document.createElement("button");
      choiceButton.textContent = choice;
      choiceButton.classList.add("choice");
      choiceButton.addEventListener("click", checkAnswer);
      choicesElement.appendChild(choiceButton);
    });
}    
//Event listeners
startButton.addEventListener("click", startQuiz);
saveButton.addEventListener("click", saveScore);
//Check question
function checkAnswer(event) {
  var selectedChoice = event.target;
  var answer = questions[currentQuestionIndex].answer;
  //Correct or wrong response
  if (selectedChoice.textContent === answer) {
    resultElement.textContent = "Correct!";
    correctAnswers++;
  } else {
    resultElement.textContent = "Wrong!";
    time -= 10;
  }

  currentQuestionIndex++;
  //End quiz
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}
//Timer stop 
//Score calculation
//Save intials and save score to Local
