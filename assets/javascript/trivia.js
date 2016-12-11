$(document).ready(function(){
   // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
   $('#instructionModal').modal();

   $('.tooltipped').tooltip({delay: 50});

   var questions = {
     "question one" : {
        "question" : "Why did the chicken?",
        "choices" : {
          "a": "To get to the otherside",
          "b": "Get some lemonade",
          "c": "Go to the store"
        },
        "answer": this.choices.a
     },

   }








 });
