// wait for the DOM to finish loading
window.addEventListener('DOMContentLoaded', function() {
  // all code goes here
var testType = function(obj){


  return (typeof obj); 
}
var testObj = function(obj){

}
var testTyper = function(obj){
  console.log("typeof object: " + testType(obj));
  return typeof obj;
}
var testToString = function (obj) {
  console.log("to string" + obj.toString());
  return obj.toString();
}


var squares = document.getElementsByClassName("box");

var counter = 0;
var resetBtn = document.getElementById("reset");

testTyper(resetBtn);
var placeMove = function(){
    return function() {
    //event.preventDefault();
    //aTags[n].style.backgroundColor = "pink";
    //this.style.backgroundColor = "pink";
    var isEmpty = function(sq){
      if( sq.innerText == "X" ||
          sq.innerText == "O")
      {
        return false;
      }else if( sq.innerText == ""){
        return true;
      }
    }
    
    if(counter % 2 == 0){
      if(isEmpty(this)){
        console.log(this);
        this.innerText = "X";
        this.classList.add("xColor");
        this.classList.remove("oColor");
        counter++;

      }
    }else if(isEmpty(this)){
      console.log(this);
      this.innerText = "O";
      this.classList.add("oColor");
      this.classList.remove("xColor");
      counter++;

    }

    }
}

var clearBoard = function(sq){
  
  return function() {
    for(var i = 0; i < sq.length; i++){
    event.preventDefault();

    console.log(sq.length);
    sq[i].innerText = "";
    }
  }
}

for(var i = 0; i < squares.length; i++){
  squares[i].addEventListener("click", placeMove());   
}
 resetBtn.addEventListener("click", clearBoard(squares) );   

});
