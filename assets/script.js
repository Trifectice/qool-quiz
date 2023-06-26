//Questions

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
//Event listeners
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
//Check question
//End quiz
//Timer stop 
//Score calculation
//Save intials and save score to Local
