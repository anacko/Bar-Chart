/* Filename: special_effects.js */
$( document ).ready(function() {
  $( "a" ).click(function( event ) {
    alert( "Thanks for visiting!" );
  });

  let userData = "";
  $("button").click(function(event)  {
    userData = document.getElementById("userData").value;  
    alert("You clicked the button to make a chart. " + userData);
    userData = userData.replace("[", "");
    userData = userData.replace("]", "");
    userData = userData.split(', ');
    for (let i = 0; i<userData.length; i++) {
      userData[i] = Number(userData[i])
    }
  });

  $ ( ".bar" ).click(function( event ) {
    alert("You clicked ");
  });

});

