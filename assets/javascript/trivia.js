// http://jsfiddle.net/3kpFV/
// http://stackoverflow.com/questions/15348725/how-to-make-quiz-questions-appear-one-at-a-time-in-javascript

//http://stackoverflow.com/questions/6312993/javascript-seconds-to-time-string-with-format-hhmmss

// https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_data_attributes

// http://stackoverflow.com/questions/5309926/how-to-get-the-data-id-attribute

$(document).ready(function(){
   // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
   $("#introSection").hide()
   $('#instructionModal').modal();
   $('.parallax').parallax();
   $('.tooltipped').tooltip({delay: 50});
   $("#introSection").fadeIn(1000*5, function(){
        // fadeIn function
   });
   $("#questionSpace").hide()
   var correctCounter = 0,
   incorrectCounter = 0,
   unansweredCounter = 0,
   currentQuestionIndex = 0;


var congratsMessages = ['Great going cadet', 'On the money astrophysicist', "To Infinity!"];

function randomNum(x) {
  var roll = Math.floor(Math.random() * x);
  return roll;
}

//while (questions.length > userProgress)

function randomCongrats(){
  var messageRoll = randomNum(congratsMessages.length);
  // return congratsMessages[messageRoll];
  // console.log(congratsMessages[messageRoll]);
}

function countDown() {
  // need to figure out placement within program to reset/clear interval
  // detect click: https://api.jquery.com/click/
  $('.pickAnswer').click(function(){
  $(this).data('clicked', true);
  });


  var i =30;
  var myInterval = setInterval(function() {
    $('#timerSeconds').html(i);
    $(".pickAnswer").on("click", function(){
      clearInterval(myInterval);
    })

    if(i === 0) {
      unansweredCounter++;
      clearInterval(myInterval);
      currentQuestionIndex++;
      $('#timer').effect("pulsate", {times:55}, 1000*10);
      postQuestion(currentQuestionIndex);
      // will keep running if no answer for all questions
    } else {
      i--;
    }
  }, 1000);
}

var questions = [
  // question 1
  {
    "q": "How big is the sun?",
    "c": ["432,288 miles", "553,211 miles", "732.983 miles"],
    "answer": 0
  },
  // question 2
  {
    "q": "How long would it take a space shuttle (going 5 miles per second) to travel a light year?",
    "c": ["37,200 years", "20,320 years", "60,730 years"],
    "answer": 0
  },
  // question 3
  {
    "q": "What did Pluto get reclassified to in 2005?",
    "c": ["A moon", "A minor planet", "A dwarf planet"],
    "answer": 2
  },
  // question 4
  {
    "q": "Which two plants in the solar system do not have moons?",
    "c": ["Saturn and Pluto","Uranus and Mars","Venus and Mercury"],
    "answer": 2
  },
  // question 5
  {
    "q": "What does NASA stand for?",
    "c": ["National Aeronautics and Space Administration", "National Astronauts and Space Aerodynamics", "National Astrophysics and Space Admiration"],
    "answer": 0
  },
  // question 6
  {
    "q": "Scientists estimate that the univers is _________ years old.",
    "c": ["30.18 billion", "13.82 billion", "2 billion"],
    "answer": 1
  },
  // question 7
  {
    "q": "How many years does it take for the Sun to travel around the galaxy?",
    "c": ["103 million years", "225 million years", "34 billion years"],
    "answer": 1
  },
  // question 8
  {
    "q": "What are Saturn's rings made of?",
    "c": ["star dust and comet debris", "sulfur and sand", "ice and rock"],
    "answer": 2
  },
  // question 9
  {
    "q": "Unidentified type of matter that does not emit or interact with light?",
    "c": ["dark matter", "gravity", "orbiting matter"],
    "answer": 0
  },
  // question 10
  {
    "q": "The golden record is ____________",
    "c": ["The planet made up of the most gold", "a record compiled by Carl Sagan for the Voyager", "the furthest humans have traveled away from Earth"],
    "answer": 1
  }

];


function postQuestion(n){
  $('#question').remove();
  $('.pickAnswer').remove();
  countDown();
  $('#questionContainer').append("<div id='question'>"+ questions[n].q+"</div>");
  for(var i = 0; i < questions[n].c.length;i++) {
    $('#choices').append("<div class='pickAnswer' indexnum='" + i + "'>" + questions[n].c[i]+"</div>");
    // console.log(questions[n].answer);
  if(currentQuestionIndex === questions.length) {

  }
  }

  // need to put this after pickAnswer is put into the DOM
  $(".pickAnswer").on("click", function() {
    var userChoice = $(this).attr('indexnum'); // stored as a string not a number
    userChoice = parseInt(userChoice);
      // console.log(userChoice);
      // currentQuestionIndex++;
      console.log(currentQuestionIndex);
      console.log()
      // checks if user is correct and will tally accordingly
      // need to create a conditional that goes with the timer to add to unanswered
    if(userChoice === questions[currentQuestionIndex].answer) {
      correctCounter++;
      currentQuestionIndex++
      randomCongrats();
      // insert congrats message with random roll
      console.log("Correct");
    } else {
      incorrectCounter++;
      currentQuestionIndex++;
      console.log("Incorrect");
    }
    // console.log(currentQuestionIndex);


    postQuestion(currentQuestionIndex);
  })
}

function startTrivia() {
  postQuestion(currentQuestionIndex);

}

function resetGame() {
  var correctCounter = 0,
  incorrectCounter = 0,
  unansweredCounter = 0,
  currentQuestionIndex = 0;

}


$("#startButton").on("click", function() {
  $("#buttonRow").hide();
  $("#introCard").hide();
  $("#timer").append("<span id='timerMinutes'>00</span>:<span id='timerSeconds'>00</span>");
  $("#questionSpace").show();

  startTrivia();


})


});
