(function() {
  function buildQuiz() {

    var output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
      var answers = [];

      for (letter in currentQuestion.answers) {
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    quizContainer.innerHTML = output.join("");
  }

  function showResults() {

    var answerContainers = quizContainer.querySelectorAll(".answers");

    var numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
      var answerContainer = answerContainers[questionNumber];
      var selector = `input[name=question${questionNumber}]:checked`;
      var userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        answerContainers[questionNumber].style.color = "red";
      }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  var quizContainer = document.getElementById("quiz");
  var resultsContainer = document.getElementById("results");
  var submitButton = document.getElementById("submit");
  var myQuestions = [
    {
      question: "What year was Jaws released?",
      answers: {
        a: "1991",
        b: "1979",
        c: "1982",
        d: "1975"
      },
      correctAnswer: "d"
    },
    {
      question: "Which character said You're gonna need a bigger boat?",
      answers: {
        a: "Quint",
        b: "Hooper",
        c: "Chief Brody",
        d: "Alex Kintner"
      },
      correctAnswer: "c"
    },
    {
      question: "Who is attacked by the shark first?",
      answers: {
        a: "Chrissie Watkins",
        b: "Michael Brody",
        c: "Alex Kintner",
        d: "The Mayor"
      },
      correctAnswer: "a"
    },
    {
        question: "What town does the movie take place?",
        answers: {
          a: "Glocester",
          b: "Boston",
          c: "Martha's Vineyard",
          d: "Amity Island"
        },
        correctAnswer: "d"
      }
  ];

  buildQuiz();

  submitButton.addEventListener("click", showResults);
})();