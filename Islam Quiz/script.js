let DOMcontentContainer = document.getElementsByClassName("container")[0];
let DOMtimer = document.getElementById("time-counter");
let DOMquestion = document.getElementById("question");
let DOMtotalQuestions = document.getElementById("total-questions");
let DOMfirstOpt = document.getElementById("first-option");
let DOMsecondOpt = document.getElementById("second-option");
let DOMthirdOpt = document.getElementById("third-option");
let DOMfourthOpt = document.getElementById("fourth-option");
let DOMcurrentQueNumbs = document.getElementsByClassName(
  "current-question-number"
);
let DOMnextBtn = document.getElementById("next-btn");

let currentQueNumb = 1;
let firstRandomIndex;
let secondRandomIndex;

let timeInterval;
let time;
let skipped = false;

let clickedElement = false;

let questionsList = [
  [
    "أي نبي كان معروفًا بانضباطه الحديدي وصبره تجاه بني إسرائيل على الرغم من تمردهم المستمر؟",
    "420px",
  ],
  ["أي نبي كان مكلفًا من الله بإظهار تسع آيات لإقناع فرعون؟", "390px"],
  ["أي نبي معروف بأنه ضرب الأرض ليخرج الماء لأصحابه العطشى؟", "390px"],
  ["أي نبيّة تعتبر والدة النبي عيسى (عليه السلام) في الإسلام؟", "390px"],
  ["أي نبي ألقي في البئر من قبل إخوته وبيع لاحقًا في مصر؟", "390px"],
  ["أي نبي يشتهر ببناء الكعبة في مكة؟", "360px"],
  ["أي نبي يُعتبر في الإسلام الذي تسلم الزبور؟", "360px"],
  ["أي نبي رفعه الله إلى السماء وعاد لاحقًا ليحذر المؤمنين؟", "390px"],
  ["أي نبي عُرف بقدرته على تفسير الأحلام؟", "360px"],
  ["أي نبي يعتبر في الإسلام الذي تسلم حكمة عظيمة؟", "390px"],
];

let answersList = [
  [
    ["هود", true],
    ["موسى", false],
    ["صالح", false],
    ["إسحاق", false],
  ],
  [
    ["موسى", true],
    ["إسحاق", false],
    ["داوود", false],
    ["لوط", false],
  ],
  [
    ["صالح", true],
    ["إبراهيم", false],
    ["يوسف", false],
    ["آدم", false],
  ],
  [
    ["مريم", true],
    ["هاجر", false],
    ["سارة", false],
    ["آسيا", false],
  ],
  [
    ["يوسف", true],
    ["نوح", false],
    ["يونس", false],
    ["إلياس", false],
  ],
  [
    ["إبراهيم", true],
    ["موسى", false],
    ["هود", false],
    ["زكريا", false],
  ],
  [
    ["داوود", true],
    ["سليمان", false],
    ["إسحاق", false],
    ["لوط", false],
  ],
  [
    ["إلياس", true],
    ["إسحاق", false],
    ["زكريا", false],
    ["يونس", false],
  ],
  [
    ["يوسف", true],
    ["دانيال", false],
    ["يعقوب", false],
    ["إسماعيل", false],
  ],
  [
    ["سليمان", true],
    ["إبراهيم", false],
    ["موسى", false],
    ["يونس", false],
  ],
];

DOMtotalQuestions.textContent = questionsList.length;

DOMcontentContainer.style.top =
  (window.innerHeight - DOMcontentContainer.offsetHeight) / 2 + "px";

displayQuotes();
resetTime();
changeQuestNumb();
DOMnextBtn.onclick = function () {
  if (!DOMnextBtn.classList.contains("disabled")) {
    if (DOMnextBtn.textContent === "Next Que") {
      skipped = true;
      displayQuotes();
      DOMnextBtn.classList.add("disabled");
      document.getElementsByTagName("header")[0].classList = "";
      Array.from(document.getElementsByClassName("before-solution")).forEach(
        (item) => {
          item.style.backgroundColor = "rgba(0, 123, 255, 0.1)";
          item.style.borderColor = "rgba(0, 123, 255, 0.3)";
        }
      );
      clickedElement = false;
    } else {
      location.reload();
    }
  }
};

function displayQuotes() {
  if (questionsList.length > 0) {
    firstRandomIndex = Math.floor(Math.random() * questionsList.length);
    DOMquestion.textContent = questionsList[firstRandomIndex][0];
    questionsList[firstRandomIndex].splice(0, 1);
    DOMcontentContainer.style.height = questionsList[firstRandomIndex][0];
    questionsList.splice(firstRandomIndex, 1);

    DOMfirstOpt.classList = "";
    DOMsecondOpt.classList = "";
    DOMthirdOpt.classList = "";
    DOMfourthOpt.classList = "";
    DOMfirstOpt.classList.add("before-solution");
    DOMsecondOpt.classList.add("before-solution");
    DOMthirdOpt.classList.add("before-solution");
    DOMfourthOpt.classList.add("before-solution");

    secondRandomIndex = Math.floor(
      Math.random() * answersList[firstRandomIndex].length
    );
    DOMfirstOpt.textContent =
      answersList[firstRandomIndex][secondRandomIndex][0];
    DOMfirstOpt.classList.add(
      answersList[firstRandomIndex][secondRandomIndex][1]
    );
    answersList[firstRandomIndex].splice(secondRandomIndex, 1);

    secondRandomIndex = Math.floor(
      Math.random() * answersList[firstRandomIndex].length
    );
    DOMsecondOpt.textContent =
      answersList[firstRandomIndex][secondRandomIndex][0];
    DOMsecondOpt.classList.add(
      answersList[firstRandomIndex][secondRandomIndex][1]
    );
    answersList[firstRandomIndex].splice(secondRandomIndex, 1);

    secondRandomIndex = Math.floor(
      Math.random() * answersList[firstRandomIndex].length
    );
    DOMthirdOpt.textContent =
      answersList[firstRandomIndex][secondRandomIndex][0];
    DOMthirdOpt.classList.add(
      answersList[firstRandomIndex][secondRandomIndex][1]
    );
    answersList[firstRandomIndex].splice(secondRandomIndex, 1);

    secondRandomIndex = Math.floor(
      Math.random() * answersList[firstRandomIndex].length
    );
    DOMfourthOpt.textContent =
      answersList[firstRandomIndex][secondRandomIndex][0];
    DOMfourthOpt.classList.add(
      answersList[firstRandomIndex][secondRandomIndex][1]
    );
    answersList[firstRandomIndex].splice(secondRandomIndex, 1);

    answersList.splice(firstRandomIndex, 1);

    if (skipped) {
      changeQuestNumb();
      resetTime();
      document.getElementsByTagName("header")[0].classList.remove("game-over");
      DOMnextBtn.classList.add("disabled");
      setTimeout(() => {
        skipped = false;
      }, 4000);
    }
  }
}

function changeQuestNumb() {
  Array.from(DOMcurrentQueNumbs).forEach((element) => {
    element.textContent = currentQueNumb + ".";
    if (element.id === "question-number") element.textContent = currentQueNumb;
  });
  currentQueNumb++;
}

function resetTime() {
  time = 15;
  DOMtimer.textContent = "15";
  if (timeInterval) clearInterval(timeInterval);
  timeInterval = setInterval(() => {
    time--;
    time < 10
      ? (DOMtimer.textContent = "0" + time)
      : (DOMtimer.textContent = time);
    if (time === 0 && questionsList.length > 0) {
      clickedElement = true;
      Array.from(document.getElementsByClassName("before-solution")).forEach(
        (item) => {
          item.classList.remove("before-solution");
          if (item.classList.contains("true")) {
            item.style.backgroundColor = "rgb(250, 215, 221)";
            item.style.borderColor = "rgb(250, 215, 221)";
            let wrongIcon = document.createElement("i");
            wrongIcon.classList.add("fa-regular", "fa-circle-xmark");
            wrongIcon.style.color = "rgb(250, 65, 71)";
            item.appendChild(wrongIcon);
          }
        }
      );
      DOMnextBtn.classList.remove("disabled");
      clearInterval(timeInterval);
      document.getElementsByTagName("header")[0].classList.add("game-over");
    } else if (time === 0 && questionsList.length === 0) {
      DOMnextBtn.textContent = "Try Again";
      DOMnextBtn.classList.remove("disabled");
      clearInterval(timeInterval);
      clickedElement = true;
      document.getElementsByTagName("header")[0].classList.add("game-over");
      Array.from(document.getElementsByClassName("before-solution")).forEach(
        (item) => {
          item.classList.remove("before-solution");
        }
      );
    }
  }, 1000);
}

clickingElement();

function clickingElement() {
  Array.from(document.getElementsByClassName("before-solution")).forEach(
    (element) => {
      element.onclick = function () {
        if (!clickedElement) {
          if (questionsList.length > 0) {
            DOMnextBtn.classList.remove("disabled");
          } else {
            DOMnextBtn.textContent = "Try Again";
            DOMnextBtn.classList.remove("disabled");
          }
          if (element.classList.contains("true")) {
            document
              .getElementsByTagName("header")[0]
              .classList.add("true-answer");
          } else {
            document
              .getElementsByTagName("header")[0]
              .classList.add("game-over");
          }
          Array.from(
            document.getElementsByClassName("before-solution")
          ).forEach((item) => {
            if (item.classList.contains("true")) {
              item.style.backgroundColor = "rgb(213, 236, 216)";
              item.style.borderColor = "rgb(213, 236, 216)";
              let correctIcon = document.createElement("i");
              correctIcon.classList.add("fa-regular", "fa-circle-check");
              correctIcon.style.color = "green";
              item.appendChild(correctIcon);
            }
            item.classList.remove("before-solution");
          });
          if (!element.classList.contains("true")) {
            element.style.backgroundColor = "rgb(250, 215, 221)";
            element.style.borderColor = "rgb(250, 215, 221)";
            let wrongIcon = document.createElement("i");
            wrongIcon.classList.add("fa-regular", "fa-circle-xmark");
            wrongIcon.style.color = "rgb(250, 65, 71)";
            element.appendChild(wrongIcon);
          }
          clickedElement = true;
          clearInterval(timeInterval);
        }
      };
    }
  );
}
