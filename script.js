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
  { q: "Q1: 1+1=?", a: "2" },
  { q: "Q2: 2+2=?", a: "4" },
];

var random = ["5", "8", "9", "10"];

startEl.addEventListener("click", function () {
  startEl.style.display = "none";
  homeinterface.style.display = "none";
  buttonbox.style.display = "block";
  //   setTime();
  Quesflow();
});

function Quesflow() {
  for (var i = 0; i < questions.length; i) {
    queEl.innerHTML = questions[i].q;
    ans1El.innerHTML = questions[i].a;
    ans2El.innerHTML = random[i];
    ans3El.innerHTML = random[i + 1];
    ans4El.innerHTML = random[i + 2];
    var answer = questions[i].a;
    // console.log(typeof answer);
    // console.log(typeof ans1El.innerHTML);
    // console.log(typeof ans1El.textContent);
    // console.log(answer);
    // console.log(ans1El.innerHTML);
    // console.log(ans1El.textContent);
    var check = parseInt(click(answer));
    console.log(typeof check);
    if ((check = 1)) {
      i++;
    } else {
      //   i++;
    }
  }
}

function click(answer) {
  ans1El.addEventListener("click", function () {
    var a = ans1El.textContent;
    console.log(a);
    console.log(answer);
    if (a === answer) {
      console.log("you are right");
      return 1;
    } else {
      console.log("you are wrong");
      return 0;
    }
  });
  ans2El.addEventListener("click", function () {
    var a = ans2El.textContent;
    if (a === answer) {
      console.log("you are right");
      return 1;
    } else {
      console.log("you are wrong");
      return 0;
    }
  });
  ans3El.addEventListener("click", function () {
    var a = ans3El.textContent;
    if (a === answer) {
      console.log("you are right");
      return 1;
    } else {
      console.log("you are wrong");
      return 0;
    }
  });
  ans4El.addEventListener("click", function () {
    var a = ans4El.textContent;
    if (a === answer) {
      console.log("you are right");
      return 1;
    } else {
      console.log("you are wrong");
      return 0;
    }
  });
}
