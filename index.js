var btn = document.getElementById("my-button");
var h1 = document.getElementById("heading");
var div= document.getElementById("div-1");


btn.addEventListener("mouseenter", function(){
    h1.innerHTML= "you are about to change me!!"});
btn.addEventListener( "mousedown",function(){
    h1.innerHTML= "mouse is down";
})
btn.addEventListener("click", function(){
    h1.innerHTML="the button is clicked!!";
})


var div= document.getElementById("div-1");
function changebackGround(){
    div.style.backgroundColor = "red";
}
div.addEventListener("mouseenter", changebackGround);

