// wait for the DOM to finish loading
window.addEventListener('DOMContentLoaded', function() {
  // all code goes here


var squares = document.querySelectorAll(".box");
var counter = 0;
var resetBtn = document.getElementById("reset");

//  

var counter = 0;
var winnerArray = [];
var winnerArrayY = [];

// var topRow = function( someList ){
//   if (var i = 0; i < 3; i++){
//     if(someList[0].innerText == "X" &&
//       someList[1].innerText == "X" &&
//       someList[2].innerText == "X"){
//       return true;
//     }
//   }
// }
// var checkTop = function(theArr) {
//   if(var i = 0; i < theArr; i++){

//   }
// }

var checkWinner = function(someArr){
  //console.log("check winner");
  for(var i = 0; i < someArr.length; i ++){
    if(someArr[0] == "X" &&  //top row
       someArr[1] == "X" &&
       someArr[2] == "X" ||
       someArr[3] == "X" && // middle row
       someArr[4] == "X" &&
       someArr[5] == "X" ||
       someArr[6] == "X" && // bottom row
       someArr[7] == "X" &&
       someArr[8] == "X" ||
       someArr[0] == "X" && // left column
       someArr[3] == "X" &&
       someArr[6] == "X" ||
       someArr[1] == "X" && // middle column
       someArr[4] == "X" &&
       someArr[7] == "X" ||
       someArr[2] == "X" && //right column
       someArr[5] == "X" &&
       someArr[8] == "X")
    {
      console.log("the winner is X..");
      console.log(someArr);
      document.getElementById("winnerX").style.display = "block";
      document.getElementById("board").style.display = "none";
        return "the winner is X";
    }else if(
      someArr[0] == "O" &&  //top row
      someArr[1] == "O" &&
      someArr[2] == "O" ||
      someArr[3] == "O" && // middle row
      someArr[4] == "O" &&
      someArr[5] == "O" ||
      someArr[6] == "O" && // bottom row
      someArr[7] == "O" &&
      someArr[8] == "O" ||
      someArr[0] == "O" && // left column
      someArr[3] == "O" &&
      someArr[6] == "O" ||
      someArr[1] == "O" && // middle column
      someArr[4] == "O" &&
      someArr[7] == "O" ||
      someArr[2] == "O" && //right column
      someArr[5] == "O" &&
      someArr[8] == "O")
    {
      console.log("the winner is O");
      console.log(someArr);
      document.getElementById("winnerO").style.display = "block";
      document.getElementById("board").style.display = "none";

      return "the winner is OO";
    }
    
  }
}
var isWinner = function(){
   for (var i =0; i < squares.length; i++) {
   }
}

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
  squares[i].addEventListener("click", function(event, x){
    event.preventDefault();
    console.log(this);
    console.log(); 

    if (counter % 2 == 0) {
      //this checks for Xs, should be evens
      console.log("counter is: ", counter);
      if(isEmpty(this) ){
        console.log("this is x", isEmpty(this) );
        this.classList.add("xColor");
        this.classList.remove("oColor");
        console.log(this.classList);
        this.innerText = "X";
        winnerArray.push(this.innerText);
        checkWinner(winnerArray);
        console.log(winnerArray);
        counter++;
      }
    } else if(isEmpty(this) ){
        console.log("counter is: ", counter);
        this.classList.remove("xColor");
        this.classList.add("oColor");
        //this.className = this.className + " oColor";
        //this.style.color = "red";
        console.log(this.classList);
        console.log("this is O:", isEmpty(this) );
        this.innerText = "O";
        winnerArray.push(this.innerText);
        checkWinner(winnerArray);
        console.log(winnerArray);
        counter++;
      }
       
  });
}
  resetBtn.addEventListener("click", function(){
    
    for (var i = 0; i < squares.length; i++){
      squares[i].innerText = "";
      document.location.reload(true);
    }
  });

    // for (var i = 0; i < squares.length; i ++){
    //   squares[i].addEventListener("click", )
    // }








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
