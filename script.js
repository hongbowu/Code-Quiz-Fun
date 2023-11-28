//need add a timer.
var timeEl = document.getElementById("timer");
var secondsLeft = 60;

timeEl.textContent = `time: ${secondsLeft}`;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = `time: ${secondsLeft}`;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      //end test.
    }
  });
}

//need add quiz body

//add function for answer questions

//add feedback for correct or wrong.

//count the scores

//add local storage for scores

//add function for show up high scores.
