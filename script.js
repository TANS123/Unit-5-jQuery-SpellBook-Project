 $("#spell").hide();
  $("#finniginn").hide();
   $("#face").hide();
//Spell #1
$("#seamus").click(function(){
     $("#spell").fadeToggle();

});



//Spell #2
$("#spell").click(function(){
     $("#finniginn").slideToggle();
 
});
//Spell #3
$("#finniginn").click(function(){
     $("#face").toggle();
});



