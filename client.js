var redCount = 0;
var yellowCount = 0;
var greenCount = 0;
var blueCount = 0;


$(document).ready(function() {
  $(".color-button").on("click", function() {
//    console.log($(this).data("color"));
  var colorSelected = $(this).data("color");
    if(colorSelected==="red"){
      redCount++;
//      console.log(redCount);
      addBlock(colorSelected);
      $("#red").text("Total red: "+redCount);
    }else if(colorSelected==="yellow"){
      yellowCount++;
      addBlock(colorSelected);
      $("#yellow").text("Total yellow: "+yellowCount);
    }else if(colorSelected==="green"){
      greenCount++;
      addBlock(colorSelected);
      $("#green").text("Total green: "+greenCount);
    }else if(colorSelected==="blue"){
      blueCount++;
      addBlock(colorSelected);
      $("#blue").text("Total blue: "+blueCount);
    }
  });

  function addBlock(color){
    $(".container").append('<div class="color-cube '+color+'"></div>')
  }

});
