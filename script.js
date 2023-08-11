var body = document.querySelector("body");
var button = document.querySelector("#darkModeButton");
var pricing = document.querySelector("#pricing");
var header = document.querySelector("header");
var bars = document.querySelector(".bars");
var smallScreenHeader=document.querySelector("#headerClose");
var closeBar=document.querySelector(".crossBars");
var barClick=false;
var time=document.querySelector("#time");




var bodyPreviousColor = body.style.color;
var previousColor = body.style.background;
var buttonPreviousColor = button.style.borderColor;

button.addEventListener("click", function() {
  if (body.style.background === "black") {
    pricing.style.color = "none";
    body.style.color = bodyPreviousColor;
    body.style.background = previousColor;
    button.textContent = "DARK MODE";
    button.style.borderColor = buttonPreviousColor;

  } else {
    pricing.style.color = "black";
    previousColor = body.style.background;
    bodyPreviousColor = body.style.color;
    body.style.background = "black";
    button.textContent = "SIMPLE MODE";
    body.style.color = "white";
    button.style.borderColor = "yellow";
  }
});

bars.addEventListener("click",function(){
  bars.style.display="none";
  closeBar.style.display="flex";
  smallScreenHeader.style.display="block";
  barClick=true;
})


window.onresize=function(){
  
  var w=window.innerWidth;
  
    if (w>720){
    smallScreenHeader.style.display="none";
  
  }else if(barClick) {
    smallScreenHeader.style.display="block";
    
  }
}


closeBar.addEventListener("click",function(){
  bars.style.display="flex";
  closeBar.style.display="none";
  smallScreenHeader.style.display="none";
  barClick=false;
})




function displayDate(){
var today=new Date();
time.textContent =
`${today.toLocaleTimeString('en-US')}`;
}



setInterval(displayDate,1000);





