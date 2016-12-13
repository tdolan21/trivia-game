// http://jsfiddle.net/3kpFV/
// http://stackoverflow.com/questions/15348725/how-to-make-quiz-questions-appear-one-at-a-time-in-javascript

//http://stackoverflow.com/questions/6312993/javascript-seconds-to-time-string-with-format-hhmmss

// https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_data_attributes

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


var congratsMessages = ['Great going cadet', 'On the money astrophysicist'];

function randomNum(x) {
  var roll = Math.floor(Math.random() * x);
  return roll;
}

function randomCongrats(){
  var messageRoll = randomNum(congratsMessages.length);
  // return congratsMessages[messageRoll];
  // console.log(congratsMessages[messageRoll]);
}

function countDown() {
  var i =5;
  var myInterval = setInterval(function() {
    $('#timerSeconds').html(i);
    if(i === 0) {
      unansweredCounter++;
      clearInterval(myInterval);
      $('#timer').effect("pulsate", {times:55}, 1000*10);
    } else {
      i--;
    }
  }, 1000);
}

var questions = [
  {
    "q": "How big is the sun?",
    "c": ["432,288 miles", "553,211 miles", "732.983 miles"],
    "answer": 0
  },
  {
    "q": "How long would it take a space shuttle (going 5 miles per second) to travel a light year?",
    "c": ["37,200 years", "20,320 years", "60,730 years"],
    "answer": 0
  },
  {
    "q": "What did Pluto get reclassified to in 2005?",
    "c": ["A moon", "A minor planet", "A dwarf planet"],
    "answer": 2,
  }
]

function postQuestion(n){
  $('#question').empty();
  $('.pickAnswer').remove();
  countDown();
  $('#question').append("<div>"+ questions[0].q+"</div>");
  for(var i = 0; i < questions[n].c.length;i++) {
    $('#choices').append("<div class='pickAnswer'>" + questions[0].c[i]+"</div>");
  }

}

function startTrivia() {
  postQuestion(currentQuestionIndex)
}

randomCongrats();

$("#startButton").on("click", function() {
  $("#buttonRow").hide();
  $("#introCard").hide();
  $("#timer").append("<span id='timerMinutes'>00</span>:<span id='timerSeconds'>00</span>");
  $("#questionSpace").show();
  startTrivia();
})

function nextQuestion() {

}

// function pickingAnswer() {
//
// }

$(".pickAnswer").on("click", function() {
  currentQuestionIndex++
  console.log(currentQuestionIndex);
})

 });
