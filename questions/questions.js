const quizData = [
  {
    question: 'Which language runs in a web browser?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd',
  },
  {
    question: 'What does CSS stand for?',
    a: 'Central Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboats',
    correct: 'b',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Hypertext Markdown Language',
    c: 'Hyperloop Machine Language',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  },
  {
    question:
      'Which type of error occurs when a programmer misspells a word or instruction?',
    a: 'Runtime',
    b: 'Logic',
    c: 'Syntax',
    d: 'System',
    correct: 'c',
  },
];

const wrapper = document.querySelector('.wrapper');
const nextQuestion = document.querySelector('#btn-submit');
const reset = document.querySelector('#btn-reset');

let currentQuiz = 0;
let runOnce = false;
let question = 1;
let score = 0;
let width = 20;

function scoreAndProgress(question, score) {
  return `<section class="section-A">
    <!-- Progress Bar -->
    <div class="progress-container">
      <h3>Question ${question}/${quizData.length}</h3>
      <div class="progress-bar">
        <div class="fill-bar" style='width:${width}%'></div>
      </div>
    </div>
    <!-- Score -->
    <div class="score-container">
      <h3>Score</h3>
      <div class="score" id="scoreId">${score}</div>
    </div>
    </section>`;
}

function quizQuestions(currentQuiz) {
  let section = `<h5>${quizData[currentQuiz].question}</h5>
    <section class="section-B">
      <div class="choice-container">
        <button class="btn" onclick=chooseAnswer(this) >a</button>
        <span>${quizData[currentQuiz].a}</span>
      </div>

      <div class="choice-container">
        <button class="btn" onclick=chooseAnswer(this) >b</button><span>${quizData[currentQuiz].b}</span>
      </div>

      <div class="choice-container">
        <button class="btn" onclick=chooseAnswer(this) >c</button><span>${quizData[currentQuiz].c}</span>
      </div>
      <div class="choice-container">
        <button class="btn" onclick=chooseAnswer(this) >d</button><span>${quizData[currentQuiz].d}</span>
      </div>
    </section>`;
  wrapper.innerHTML += section;
}

function chooseAnswer(choice) {
  if (runOnce === true) {
    return;
  }

  if (choice.textContent === quizData[currentQuiz].correct) {
    runOnce = true;
    score++;
  } else {
    runOnce = true;
  }
  wrapper.innerHTML = scoreAndProgress(question, score);
  quizQuestions(currentQuiz);
}

nextQuestion.addEventListener('click', () => {
  if (runOnce === false || question === quizData.length) {
    return;
  }
  currentQuiz++;
  question++;
  width += 20;
  wrapper.innerHTML = scoreAndProgress(question, score);
  quizQuestions(currentQuiz);
  runOnce = false;
});

reset.addEventListener('click', () => {
  if (question < 5) {
    reset.setAttribute('href', '#');
  } else {
    reset.setAttribute('href', 'http://127.0.0.1:5500/');
  }
});

// On Load
quizQuestions(currentQuiz);
