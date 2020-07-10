var timeEl = document.getElementById("time");
var queEl = document.getElementById("questions");
var startEl = document.getElementById("start");
var buttonbox = document.querySelector(".Que");
var homeinterface = document.querySelector(".homecontainer");
var inputbox = document.querySelector(".inputinterface");
var submitbtn = document.getElementById("submitbtn");
var scoreinterface = document.getElementById("highscoresinterface");
// var ans1El = document.getElementById("choice1");
// var ans2El = document.getElementById("choice2");
// var ans3El = document.getElementById("choice3");
// var ans4El = document.getElementById("choice4");
var choicesBox = document.querySelector(".Quebox");
var scorelist = []; //create an empty score array use for store scores

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

//star button clicked start quiz
startEl.addEventListener("click", function () {
  startEl.style.display = "none";
  homeinterface.style.display = "none";
  buttonbox.style.display = "block";
  var i = 0;
  setTime(); //call timer function to start
  quesFlow(i); //pass variable i=o to function quesFlow to start
});

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
        quesFlow(i + 1);
      } else {
        console.log("you are wrong");
        button1.remove();
        button2.remove();
        button3.remove();
        button4.remove();
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
        quesFlow(i + 1);
      } else {
        console.log("you are wrong");
        button1.remove();
        button2.remove();
        button3.remove();
        button4.remove();
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
        quesFlow(i + 1);
      } else {
        console.log("you are wrong");
        button1.remove();
        button2.remove();
        button3.remove();
        button4.remove();
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
        quesFlow(i + 1);
      } else {
        console.log("you are wrong");
        button1.remove();
        button2.remove();
        button3.remove();
        button4.remove();
        quesFlow(i + 1);
        //time-5sec
      }
    });
  } else {
    final();
  }
}

//timer function count down time
var secondsLeft = 50;
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      final();
    }
  }, 1000);
}

//to display user input space
function final() {
  buttonbox.style.display = "none";
  inputbox.style.display = "block";
}

//after user input submit, it will display final scores
submitbtn.addEventListener("click", function () {
  inputbox.style.display = "none";
  scoreinterface.style.display = "block";
});
