// function myFunction() {
//   var str = document.getElementById('text1').value;
//   alert("Hello! Are you " + str +"? How are you?");
// }

$(document).ready(function(){
  $(".jqTest").click(function(){
    $(".jqPara").slideToggle("slow");
  });
});
