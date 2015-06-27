// wait for the DOM to finish loading
window.addEventListener('DOMContentLoaded', function() {
  // all code goes here


var squares = document.querySelectorAll(".box");
var counter = 0;
var resetBtn = document.getElementById("reset");

//  

var counter = 0;

// var isEmpty = function(sq){
//   if (sq.innerText != "" && 
//       sq.innerText == "X" &&
//       sq.innerText == "O"){
//     return false;
//   } else{
//     return true;
//   }
// }

var isEmpty = function(sq) {
  if(sq.innerText == "X" ||
     sq.innerText == "O"){
    return false;
  }else if(sq.innerText == ""){
    return true;
  }
}

for(var i = 0; i < squares.length; i++){
  //console.log("Every square in list:" + squares[i] );
  squares[i].addEventListener("click", function(){
    console.log(this);
    console.log(); 

    if (counter % 2 == 0) {
      //this checks for Xs, should be evens
      console.log("counter is: ", counter);
      if(isEmpty(this) ){
        console.log("this is x", isEmpty(this) );
        this.classList.add("xColor");
        this.innerText = "X";
        counter++;
      }
    } else if(isEmpty(this) ){
        console.log("counter is: ", counter);
        this.classList.add("oColor");
        console.log("this is O:", isEmpty(this) );
        this.innerText = "O";
        counter++;
      }
       
  });
}
  resetBtn.addEventListener("click", function(){
    
    for (var i = 0; i < squares.length; i++){
      squares[i].innerText = "";
    }
  });








// var testType = function(obj){


//   return (typeof obj); 
// }
// var testObj = function(obj){

// }
// var testTyper = function(obj){
//   console.log("typeof object: " + testType(obj));
//   return typeof obj;
// }
// var testToString = function (obj) {
//   console.log("to string" + obj.toString());
//   return obj.toString();
// }


// var squares = document.getElementsByClassName("box");

// var counter = 0;
// var resetBtn = document.getElementById("reset");

// testTyper(resetBtn);
// var placeMove = function(){
//     return function() {
//     //event.preventDefault();
//     //aTags[n].style.backgroundColor = "pink";
//     //this.style.backgroundColor = "pink";
//     var isEmpty = function(sq){
//       if( sq.innerText == "X" ||
//           sq.innerText == "O")
//       {
//         return false;
//       }else if( sq.innerText == ""){
//         return true;
//       }
//     }
    
//     if(counter % 2 == 0){
//       if(isEmpty(this)){
//         console.log(this);
//         this.innerText = "X";
//         this.classList.add("xColor");
//         this.classList.remove("oColor");
//         counter++;

//       }
//     }else if(isEmpty(this)){
//       console.log(this);
//       this.innerText = "O";
//       this.classList.add("oColor");
//       this.classList.remove("xColor");
//       counter++;

//     }

//     }
// }

// var clearBoard = function(sq){
  
//   return function() {
//     for(var i = 0; i < sq.length; i++){
//     event.preventDefault();

//     console.log(sq.length);
//     sq[i].innerText = "";
//     }
//   }
// }

// for(var i = 0; i < squares.length; i++){
//   squares[i].addEventListener("click", placeMove());   
// }
//  resetBtn.addEventListener("click", clearBoard(squares) );   

});
