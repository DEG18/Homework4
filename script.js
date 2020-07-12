var timeEl = document.getElementById("time");
var queEl = document.getElementById("questions");
var startEl = document.getElementById("start");
var buttonbox = document.querySelector(".Que");
var homeinterface = document.querySelector(".homeinterface");
var inputbox = document.querySelector(".inputinterface");
var submitbtn = document.getElementById("submitbtn");
var scoreinterface = document.getElementById("highscoresinterface");
var inputName = document.getElementById("inputName");
var scoreList = document.getElementById("score-list");
var choicesBox = document.querySelector(".Quebox");
var yourScore = document.getElementById("yourScore");
var viewScoreBtn = document.getElementById("viewscore");
var backBtn = document.getElementById("backBtn");
var clearBtn = document.getElementById("clearBtn");
var point = document.getElementById("point");

var scoreCount;
var scoresArray = [];
var finalScorearray = [];
//Questions bank:
var questions = [
  { q: "Q1: When was Google founded? ", a: "September 4, 1998" },
  { q: "Q2: When was Apple founded?", a: "April 1, 1976" },
  { q: "Q3: When was Amazon founded?", a: "July 5, 1994" },
  { q: "Q4: When was Netflix founded?", a: "August 29, 1997" },
  { q: "Q5: When was Yahoo founded?", a: "January 1994" },
];
//other random incorrect choice
var random = [
  "September 4, 1977",
  "March 1, 2000",
  "August 1, 1996",
  "May 1, 1986",
  "April 10, 1966",
  "January 18, 2019",
  "December 20, 2005",
  "September 4, 1977",
];
viewScoreBtn.addEventListener("click", function () {
  homeinterface.style.display = "none";
  inputbox.style.display = "none";
  buttonbox.style.display = "none";
  scoreinterface.style.display = "block";
});

//star button clicked start quiz
startEl.addEventListener("click", function () {
  // startEl.style.display = "none";
  homeinterface.style.display = "none";
  buttonbox.style.display = "block";
  viewScoreBtn.style.display = "none";
  var i = 0;
  setTime(50); //call timer function to start
  quesFlow(i); //pass variable i=o to function quesFlow to start
});

var timeArray = [];

//go through each questions and check answer, add 1 to i, until i<questions
function quesFlow(i) {
  if (i < questions.length) {
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    var button4 = document.createElement("button");
    choicesBox.appendChild(button1);
    choicesBox.appendChild(button2);
    choicesBox.appendChild(button3);
    choicesBox.appendChild(button4);
    queEl.innerHTML = questions[i].q;
    button1.innerHTML = questions[i].a;
    button2.innerHTML = random[i];
    button3.innerHTML = random[i + 1];
    button4.innerHTML = random[i + 2];
    var answer = questions[i].a;
    // click(answer, i);
    button1.addEventListener("click", function () {
      var a = button1.textContent;
      if (a === answer) {
        console.log("you are right");
        button1.remove();
        button2.remove();
        button3.remove();
        button4.remove();
        scoreBoard(1);
        quesFlow(i + 1);
      } else {
        console.log("you are wrong");
        button1.remove();
        button2.remove();
        button3.remove();
        button4.remove();
        scoreBoard(0);
        quesFlow(i + 1);
        //time-5sec
      }
    });
    button2.addEventListener("click", function () {
      var a = button2.textContent;
      if (a === answer) {
        console.log("you are right");
        button1.remove();
        button2.remove();
        button3.remove();
        button4.remove();
        scoreBoard(1);
        quesFlow(i + 1);
      } else {
        console.log("you are wrong");
        button1.remove();
        button2.remove();
        button3.remove();
        button4.remove();
        scoreBoard(0);
        quesFlow(i + 1);
        //time-5sec
      }
    });
    button3.addEventListener("click", function () {
      var a = button3.textContent;
      if (a === answer) {
        console.log("you are right");
        button1.remove();
        button2.remove();
        button3.remove();
        button4.remove();
        scoreBoard(1);
        quesFlow(i + 1);
      } else {
        console.log("you are wrong");
        button1.remove();
        button2.remove();
        button3.remove();
        button4.remove();
        scoreBoard(0);
        quesFlow(i + 1);
        //time-5sec
      }
    });
    button4.addEventListener("click", function () {
      var a = button4.textContent;
      if (a === answer) {
        console.log("you are right");
        button1.remove();
        button2.remove();
        button3.remove();
        button4.remove();
        scoreBoard(1);
        quesFlow(i + 1);
      } else {
        console.log("you are wrong");
        button1.remove();
        button2.remove();
        button3.remove();
        button4.remove();
        scoreBoard(0);
        quesFlow(i + 1);
        //time-5sec
      }
    });
  } else {
    final();
  }
}

//timer function count down time

function setTime(i) {
  var secondsLeft = i;
  window.timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;
    timeArray.push(secondsLeft);
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      final();
    }
  }, 1000);
}

//Score Board
function scoreBoard(i) {
  if (i === 1) {
    // you are right
    var li = document.createElement("li");
    li.setAttribute("class", "pointli");
    li.textContent = "You are right!";
    point.appendChild(li);
  }
  if (i === 0) {
    // you are wrong
    var li = document.createElement("li");
    li.setAttribute("class", "pointli");
    li.textContent = "You are wrong!";
    point.appendChild(li);
  }
}

//to display user input space
function final() {
  scoreCount = timeArray[timeArray.length - 1];
  console.log(scoreCount);
  finalScorearray.push(scoreCount);
  clearInterval(timerInterval);
  // timeEl.style.display = "none";
  buttonbox.style.display = "none";
  inputbox.style.display = "block";
  yourScore.textContent = "Your final score is: " + `${scoreCount}`;

  // get time from the setTime check if time is 0 or not
}

//after user input submit, it will display final scores
submitbtn.addEventListener("click", function () {
  inputbox.style.display = "none";
  scoreinterface.style.display = "block";
  viewScoreBtn.style.display = "block";
  point.textContent = "";
  var name = inputName.value;
  console.log(name);
  scoresArray.push(name);
  inputName.value = "";
  console.log(scoresArray);
  showScore();
});

function showScore() {
  scoreList.textContent = "";
  for (var i = 0; i < scoresArray.length; i++) {
    var scoresOrder = scoresArray[i];
    var li = document.createElement("li");
    li.textContent =
      `${i + 1}` + ". " + scoresOrder + " - " + `${finalScorearray[i]}`;
    li.setAttribute("data-index", i);
    scoreList.appendChild(li);
  }
}

backBtn.addEventListener("click", function () {
  // startEl.style.display = "block";
  homeinterface.style.display = "block";
  scoreinterface.style.display = "none";
  timeEl.textContent = "Time: 50";
});

clearBtn.addEventListener("click", function () {
  scoreList.textContent = "";
});
