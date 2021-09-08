/* Filename: special_effects.js */
const transformUserData = function(userData) {
  userData = userData.replace("[", "");
  userData = userData.replace("]", "");
  userData = userData.split(', ');
  for (let i = 0; i<userData.length; i++) {
    userData[i] = Number(userData[i])
  }
  return userData;
}
let userData = "";

$( document ).ready(function() {

  $("button").click(function(event)  {
    userData = document.getElementById("userData").value;
    const barSizes = transformUserData(userData);
    alert("You clicked the button to make a chart. " + barSizes);
    for (const size of barSizes) {
     $("#theChart").append('<p class="bar" style="width:'+size*100+'px;">New bar here.</p>')
    }
  });

  $ ( ".bar" ).click(function( event ) {
    alert("You clicked ");
  });

  $( "a" ).click(function( event ) {
    alert( "Thanks for visiting!" );
  });


});

