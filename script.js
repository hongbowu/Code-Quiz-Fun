//need add a timer.
var timeEl = document.getElementById("timer");
var secondsLeft = 60;

timeEl.textContent = `time: ${secondsLeft}`;

//need a start point.
var start = document.getElementById("Start");

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = `time: ${secondsLeft}`;

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      //end test.
    }
  }, 1000);
}

//need add quiz body
var quizBody = [
  {
    question: "1. Javascript is an _______ language?",
    answer1: "Object-Oriented",
    answer2: "Object-Based",
    answer3: "Procedural",
    answer4: "None of the above",
    correctAnswer: "Object-Oriented",
  },
  {
    question:
      "2. Which of the following keywords is used to define a variable in Javascript?",
    answer1: "var",
    answer2: "let",
    answer3: "Both A and B",
    answer4: "None of the above",
    correctAnswer: "Both A and B",
  },
  {
    question:
      "3. Which of the following methods is used to access HTML elements using Javascript?",
    answer1: "getElementById()",
    answer2: "getElementByClassName()",
    answer3: "Both A and B",
    answer4: "None of the above",
    correctAnswer: "Both A and B",
  },
  {
    question:
      "4.Upon encountering empty statements, what does the Javascript Interpreter do?",
    answer1: "Throws an error",
    answer2: "Ignores the statements",
    answer3: "Gives a warning",
    answer4: "None of the above",
    correctAnswer: "Ignores the statements",
  },
];
function questionStart() {
  var quizBodyEl = document.getElementById("questions");
  var answer1El = document.getElementById("answers1");
  var answer2El = document.getElementById("answers2");
  var answer3El = document.getElementById("answers3");
  var answer4El = document.getElementById("answers4");

  quizBodyEl.textContent = quizBody[0].question;
  answer1El.textContent = quizBody[0].answer1;
  answer2El.textContent = quizBody[0].answer2;
  answer3El.textContent = quizBody[0].answer3;
  answer4El.textContent = quizBody[0].answer4;
}
//add a function to make default page disappear.
function changeLayout() {
  var hideHeader = document.querySelector("h1");
  var hideP = document.querySelector(".default-page");
  var hideStart = document.querySelector("#Start");
  hideHeader.setAttribute("style", "display: none;");
  hideP.setAttribute("style", "display: none;");
  hideStart.setAttribute("style", "display: none;");
}
//add function for answer questions
function startQuiz() {
  changeLayout();
  setTime();
  questionStart();
}
//add feedback for correct or wrong.

//count the scores

//add local storage for scores

//add function for show up high scores.
start.addEventListener("click", startQuiz);
