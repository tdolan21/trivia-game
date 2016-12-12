$(document).ready(function(){
   // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
   $('#instructionModal').modal();

   $('.tooltipped').tooltip({delay: 50});

   var questions = [
     {
        "question" : "How big is the su?",
        "choices" : [ "To get to the otherside", "Get some lemonade", "Go to the store"],
        "answer": this.choices[0]
     },
     {
        "question" : "How many rings does Saturn have?",
        "choices" : [ "To get to the otherside", "Get some lemonade", "Go to the store"],
        "answer": this.choices[0]
     },
     

   ]








 });
