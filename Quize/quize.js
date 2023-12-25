const data = [
  {
    id: 1,
    question: "What does CSS stand for?",
    answers: [
      { answer: "Creative Style Sheets", isCorrect: false },
      { answer: "Computer Style Sheets", isCorrect: false },
      { answer: "Cascading Style Sheets", isCorrect: true },
      { answer: "Colorful Style Sheets", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "Which CSS property is used to set the text color of an element?",
    answers: [
      { answer: "text-color", isCorrect: false },
      { answer: "font-color", isCorrect: false },
      { answer: "color", isCorrect: true },
      { answer: "text-style", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "How can you include an external CSS file in an HTML document?",
    answers: [
      { answer: "Using the <style> tag", isCorrect: false },
      { answer: "Using the <link> tag", isCorrect: true },
      { answer: "Using the <css> tag", isCorrect: false },
      { answer: "Using the <script> tag", isCorrect: false },
    ],
  },
  {
    id: 4,
    question: "What is the purpose of the 'margin' property in CSS?",
    answers: [
      {
        answer:
          "To set the space between the border and the content inside an element",
        isCorrect: false,
      },
      { answer: "To set the space between elements", isCorrect: true },
      { answer: "To set the width of an element", isCorrect: false },
      { answer: "To set the background color of an element", isCorrect: false },
    ],
  },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let queIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const playAgain = () => {
  queIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  total = 0;

  showQuestion(queIndex);
};

play.addEventListener("click", () => {
  resultScreen.style.display = "none";
  gameScreen.style.display = "block";
  playAgain();
});
const showResult = () => {
  resultScreen.style.display = "block";
  gameScreen.style.display = "none";

  resultScreen.querySelector(
    ".correct"
  ).textContent = `Correct Answer : ${correctCount}`;

  resultScreen.querySelector(
    ".wrong"
  ).textContent = `Wrong Answer : ${wrongCount}`;

  resultScreen.querySelector(".score").textContent = `Score : ${
    (correctCount - wrongCount) * 10
  }`;
};
const showQuestion = (qNumber) => {
  if (qNumber === data.length) return showResult();
  selectedAnswer = null;
  question.textContent = data[qNumber].question;
  answersContainer.innerHTML = data[qNumber].answers
    .map(
      (answer, index) =>
        `<div class="answer">
    <input name="answer" type="radio" id=${index} value=${answer.isCorrect}>
    <label for=${index}>${answer.answer}</label>
    </div>`
    )
    .join("");

  selectAnswser();
};

const selectAnswser = () => {
  answersContainer.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      console.log(e);
      selectedAnswer = e.target.value;
    });
  });
};

const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if (selectedAnswer !== null) {
      selectedAnswer === "true" ? correctCount++ : wrongCount++;
      queIndex++;
      showQuestion(queIndex);
    } else alert("select an answer");
  });
};

submitAnswer();
showQuestion(queIndex);



//textContent
//innerHtml