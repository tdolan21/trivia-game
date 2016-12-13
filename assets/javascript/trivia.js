/* global $ */
// for cloud9 IDE purposes
$(document).ready(function(){
   // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
   $('#instructionModal').modal();
   $('.parallax').parallax();
   $('.tooltipped').tooltip({delay: 50});

var questions = [
  {
    "q": "How big is the sun?",
    "c": ["Really Big", "Really Small", "Average"],
    "answerIndex": 0
  },
  {
    "q": "How big is the sun?",
    "c": ["Really Big", "Really Small", "Average"],
    "answerIndex": 0
  }
]

$('#question').append("<div>"+ questions[0].q+"</div>");







 });
