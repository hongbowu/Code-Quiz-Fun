//
var reviewHighScore = document.getElementById("review");
var quizBodyEl = document.getElementById("questions");
var answer1El = document.getElementById("answers1");
var answer2El = document.getElementById("answers2");
var answer3El = document.getElementById("answers3");
var answer4El = document.getElementById("answers4");
var feedBack = document.getElementById("feedback");
var timeEl = document.getElementById("timer");
var start = document.getElementById("Start");
var userData = document.querySelector(".userData");
var storeScore = document.getElementById("storage");
var storeUserName = document.getElementById("name");
var highScore = document.getElementById("highScore");
//need add a timer.
var scores;
var secondsLeft = 60;

timeEl.textContent = `time: ${secondsLeft}`;

//need a start point.

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = `time: ${secondsLeft}`;

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      gameOver();
      secondsLeft = 0;

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
  //show up the questions
  quizBodyEl.setAttribute("style", "display: block;");
  answer1El.setAttribute("style", "display: block;");
  answer2El.setAttribute("style", "display: block;");
  answer3El.setAttribute("style", "display: block;");
  answer4El.setAttribute("style", "display: block;");

  quizBodyEl.textContent = quizBody[0].question;
  answer1El.textContent = quizBody[0].answer1;
  answer2El.textContent = quizBody[0].answer2;
  answer3El.textContent = quizBody[0].answer3;
  answer4El.textContent = quizBody[0].answer4;

  var i = 0;
  function keepRunning(event) {
    i++;
    quizBodyEl.textContent = quizBody[i].question;
    answer1El.textContent = quizBody[i].answer1;
    answer2El.textContent = quizBody[i].answer2;
    answer3El.textContent = quizBody[i].answer3;
    answer4El.textContent = quizBody[i].answer4;
    var currentAnswer = event.target;
    console.log(currentAnswer);
    if (event.target.value === quizBody[i].correctAnswer) {
      feedBack.textContent = "Correct!";
    } else {
      feedBack.textContent = "Wrong";
      secondsLeft -= 15;
    }

    if (i === quizBody.length) {
      console.log("game over");
      gameOver();
    }
  }

  // add eventlistener
  answer1El.addEventListener("click", keepRunning);
  answer2El.addEventListener("click", keepRunning);
  answer3El.addEventListener("click", keepRunning);
  answer4El.addEventListener("click", keepRunning);
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
//count the scores
function gameOver() {
  scores = secondsLeft;
  answer1El.setAttribute("style", "display: none;");
  answer2El.setAttribute("style", "display: none;");
  answer3El.setAttribute("style", "display: none;");
  answer4El.setAttribute("style", "display: none;");
  quizBodyEl.textContent = `Game Over, your score is ${scores}`;
  feedBack.textContent = "";
  userData.setAttribute("style", "display: block;");
}
//add local storage for scores
var highScores = [];

function renderHighScores() {
  storeUserName.innerHTML = "";

  for (var j = 0; j < highScore.length; j++) {
    var lastScore = highScores[j];
    var listName = document.createElement("li");
    listName.textContent = lastScore;
    listName.setAttribute("data-index", j);

    var button = document.createElement("button");
    button.textContent = "Remove";

    listName.appendChild(button);
    highScore.appendChild(listName);
  }

  userData.setAttribute("style", "display: none;");
  quizBodyEl.setAttribute("style", "display: none;");
  highScore.setAttribute("style", "display: block;");
}

function init() {
  var storedHighScores = JSON.parse(localStorage.getItem("highScores"));

  if (storedHighScores !== null) {
    highScores = storedHighScores;
  }
  renderHighScores();
}

function storeHightScores() {
  localStorage.setItem("highScores", JSON.stringify(highScores));
}

//add function for show up high scores.
reviewHighScore.addEventListener("click", init);
storeScore.addEventListener("click", function (event) {
  event.preventDefault();
  var userInput = storeUserName.value;
  if (userInput === "") {
    return;
  }

  highScores.push(storeUserName.value);
  storeUserName.value = "";
  storeHightScores();
  renderHighScores();
});
highScore.addEventListener("click", function (event) {
  var element = event.target;

  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    highScores.splice(index, 1);

    storeHightScores();
    renderHighScores();
    userData.setAttribute("style", "display: none;");
    quizBodyEl.setAttribute("style", "display: none;");
    highScore.setAttribute("style", "display: block;");
  }
});
init();
start.addEventListener("click", startQuiz);
