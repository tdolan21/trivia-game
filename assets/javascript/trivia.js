// http://jsfiddle.net/3kpFV/
// http://stackoverflow.com/questions/15348725/how-to-make-quiz-questions-appear-one-at-a-time-in-javascript

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


   $("#startButton").on("click", function() {
     $("#buttonRow").hide();
     $("#introCard").hide();
     $("#questionSpace").show();
   })


var questions = [
  {
    "q": "How big is the sun?",
    "c": ["432,288 miles", "553,211 miles", "732.983 miles"],
    "answerIndex": 0
  },
  {
    "q": "How big is the sun?",
    "c": ["Really Big", "Really Small", "Average"],
    "answerIndex": 0
  }
]




function postQuestion(n){
  $('#question').empty();
  $('.pickAnswer').remove();
  $('#question').append("<div>"+ questions[0].q+"</div>");
  for(var i = 0; i < questions[n].c.length;i++) {
    $('#choices').append("<div class='pickAnswer'>" + questions[0].c[i]+"</div>");
  }
}



postQuestion(currentQuestionIndex);

function startTrivia() {

}


$(".pickAnswer").on("click", function() {
  currentQuestionIndex++
  console.log(currentQuestionIndex);
})

 });
