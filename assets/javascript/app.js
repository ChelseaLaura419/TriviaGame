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
        answerContainers[questionNumber].style.color = "green";
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
      },
      {
        question: "What was the nickname director Steven Spielberg gave to the mechanical shark?",
        answers: {
          a: "Bruce",
          b: "Ralph",
          c: "Elliot",
          d: "Timmy"
        },
        correctAnswer: "a"
      },
      {
        question: "Who wrote the original book, Jaws?",
        answers: {
          a: "Steven Spielberg",
          b: "Stephen King",
          c: "Michael Crinchton",
          d: "Peter Benchley"
        },
        correctAnswer: "d"
      },
      {
        question: "What is the name of Quint's Boat?",
        answers: {
          a: "Largo",
          b: "Jenny II",
          c: "Orca",
          d: "Queen Elizabeth"
        },
        correctAnswer: "c"
      },
      {
        question: "What instrument is used to produce the musical effect that warns viewers that the shark is approaching?",
        answers: {
          a: "Clarinet",
          b: "Tuba",
          c: "Oboe",
          d: "Piano"
        },
        correctAnswer: "b"
      },
      {
        question: "What is Hooper's profession?",
        answers: {
          a: "Journalist",
          b: "Sea World Trainer",
          c: "Police Officer",
          d: "Marine Biologist"
        },
        correctAnswer: "d"
      },
      {
        question: "Who Survives their encounter with the shark?",
        answers: {
          a: "Quint and Brody",
          b: "Hooper and Quint",
          c: "Brody and Hooper",
          d: "All of them"
        },
        correctAnswer: "c"
      }

      
  ];

  buildQuiz();

  submitButton.addEventListener("click", showResults);
})();

var totalSeconds = 60*2;
var clockMinutes = parseInt(totalSeconds/60);
var clockSeconds = parseInt(totalSeconds%60);

function checkTime(){
  document.getElementById("quizTime").innerHTML = 'Time Left: ' + clockMinutes + ' mins ' + clockSeconds + ' secs';
  if (totalSeconds <= 0){
    alert("Time's Up!");
    submitButton.disabled = true; 
    }
  else {
    totalSeconds = totalSeconds -1;
    clockMinutes = parseInt(totalSeconds/60);
    clockSeconds = parseInt(totalSeconds%60);
  setTimeout("checkTime()", 1000);
  }}
  setTimeout("checkTime()", 1000);