var timeEl = document.getElementById("time");
var queEl = document.getElementById("questions");
var startEl = document.getElementById("start");
var buttonbox = document.querySelector(".Que");
var homeinterface = document.querySelector(".homecontainer");
var ans1El = document.getElementById("choice1");
var ans2El = document.getElementById("choice2");
var ans3El = document.getElementById("choice3");
var ans4El = document.getElementById("choice4");

//Questions bank:
var questions = [
  { q: "Q1: When was Google founded? ", a: "September 4, 1998" },
  { q: "Q2: When was Apple founded?", a: "April 1, 1976" },
  { q: "Q3: When was Amazon founded?", a: "July 5, 1994" },
  { q: "Q4: When was Netflix founded?", a: "August 29, 1997" },
  { q: "Q5: When was Yahoo founded?", a: "January 1994" },
];

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
var i = 0;

startEl.addEventListener("click", function () {
  startEl.style.display = "none";
  homeinterface.style.display = "none";
  buttonbox.style.display = "block";
  setTime();
  quesFlow(i);
});

function quesFlow(i) {
  if (i < questions.length) {
    queEl.innerHTML = questions[i].q;
    ans1El.innerHTML = questions[i].a;
    ans2El.innerHTML = random[i];
    ans3El.innerHTML = random[i + 1];
    ans4El.innerHTML = random[i + 2];
    var answer = questions[i].a;
    click(answer, i);
  } else {
    final();
  }
}

function click(answer, i) {
  ans1El.addEventListener("click", function () {
    var a = ans1El.textContent;
    if (a === answer) {
      console.log("you are right");
      quesFlow(i + 1);
    } else {
      console.log("you are wrong");
      quesFlow(i + 1);
    }
  });
  ans2El.addEventListener("click", function () {
    var a = ans2El.textContent;
    if (a === answer) {
      console.log("you are right");
      quesFlow(i + 1);
    } else {
      console.log("you are wrong");
      quesFlow(i + 1);
    }
  });
  ans3El.addEventListener("click", function () {
    var a = ans3El.textContent;
    if (a === answer) {
      console.log("you are right");
      quesFlow(i + 1);
    } else {
      console.log("you are wrong");
      quesFlow(i + 1);
    }
  });
  ans4El.addEventListener("click", function () {
    var a = ans4El.textContent;
    if (a === answer) {
      console.log("you are right");
      quesFlow(i + 1);
    } else {
      console.log("you are wrong");
      quesFlow(i + 1);
    }
  });
}

var secondsLeft = 70;
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}
