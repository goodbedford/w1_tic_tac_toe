// wait for the DOM to finish loading
$(document).ready(function(){ 
  // all code goes here
  //var squares = document.querySelectorAll(".box");
  var squares = document.getElementsByClassName("box");

  var counter = 0;
  var $resetBtn = $("reset");
  var $clearBtn = $("clearBoard");
  var counter = 0;
  var winnerArray = [];
  var gameOver = false;
  var xNumOfWins = 0;
  var oNumOfWins = 0;
  var numOfGames = 0;
  var maxGames = 2;
  var sqArr = [];
  var sqObjs ={};
  for (var i = 0; i < squares.length; i++){
      sqObjs[i] = squares[i];
      sqArr.push(sqObjs[i]);
      //console.log(sqObjs[i].innerText);
  }

  // function to change winnner styles
  var addWinnerStyle = function(winSq1, winSq2, winSq3, winMsg) {
    var winnerBox = document.getElementById("winnerBox");
    winnerBox.classList.remove("hideTag");
    winnerBox.innerHTML = winMsg;
    winSq1.classList.add("winnerColor");
    winSq2.classList.add("winnerColor");
    winSq3.classList.add("winnerColor");

  }
  var clearBoard = function() {
    document.getElementById("playerXName").classList.remove("hideTag");
    document.getElementById("playerOName").classList.remove("hideTag");
    document.getElementById("winnerBox").classList.add("hideTag");
    var vsArrow = document.getElementById("vs");
    if( vsArrow.innerText == "<"){
      vsArrow.innerText = ">";
    }
    gameOver = false;
    for (var i = 0; i < squares.length; i++){
      squares[i].innerText = "";
      squares[i].classList.remove("winnerColor");
      //document.location.reload(true);
    }
  }

  //console.log(sqObjs[0]);
  //console.log("this is the sqArr:" + sqArr[0]);

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
  var getNodeIndex = function(arr, node) {
    for(var i = 0; i < arr.length; i++){
      //for (var j = 0; j < 2; j++){
      //   if( arr[i][j] == node){
      //     console.log("this index:" +i);
      //     console.log("this is node:", node);
      //     return i;

      // }
      if( arr[i] == node){
        console.log("this index:" +i);
        console.log("this is node:", node);
        return i;
      }
    }
  }

  var checkWinner = function(){

  // get each square by id
  var sq0 = document.getElementById("sq0"),        
      sq1 = document.getElementById("sq1"),
      sq2 = document.getElementById("sq2"),
      sq3 = document.getElementById("sq3"),
      sq4 = document.getElementById("sq4"),
      sq5 = document.getElementById("sq5"),
      sq6 = document.getElementById("sq6"),
      sq7 = document.getElementById("sq7"),
      sq8 = document.getElementById("sq8");
  //check each row or column of squares and check innerText for X 
  if (sq0.innerText == "X" &&  //top row
      sq1.innerText == "X" &&
      sq2.innerText == "X"){

    console.log(" X wins top row");
    addWinnerStyle(sq0, sq1, sq2, "Player X wins!! <br />Top Row");
    //document.getElementById("winnerX").style.display = "block";
    //document.getElementById("board").style.display = "none";
    return true;
  } 
  else if (sq3.innerText == "X" && // middle row
           sq4.innerText == "X" &&
           sq5.innerText == "X"){

         console.log(" X wins middle row");
         addWinnerStyle(sq3, sq4, sq5, "Player X wins!! <br />Middle Row");

         //document.getElementById("winnerX").style.display = "block";
         //document.getElementById("board").style.display = "none";
         return true;
  }
  else if (sq6.innerText == "X" && // bottom row
           sq7.innerText == "X" &&
           sq8.innerText == "X"){

         console.log("X wins bottom row");
         addWinnerStyle(sq6, sq7, sq8, "Player X wins!! <br />Bottom Row");
         
         // document.getElementById("winnerX").style.display = "block";
         // document.getElementById("board").style.display = "none";
         return true;
  }
  else if (sq0.innerText == "X" && // left column
           sq3.innerText == "X" &&
           sq6.innerText == "X"){

         console.log("X wins left column");
         addWinnerStyle(sq0, sq3, sq6, "Player X wins!! <br />Left Column");

         // document.getElementById("winnerX").style.display = "block";
         // document.getElementById("board").style.display = "none";
         return "the winner is X";
  }
  else if (sq1.innerText == "X" && // middle column
           sq4.innerText == "X" &&
           sq7.innerText == "X"){

           console.log("X wins middle column ");
           addWinnerStyle(sq1, sq4, sq7, "Player X wins!! <br />Middle Column");

            // document.getElementById("winnerX").style.display = "block";
            // document.getElementById("board").style.display = "none";
            return true;
  }
  else if (sq2.innerText == "X" && //right column
          sq5.innerText == "X" &&
          sq8.innerText == "X"){

           console.log("X wins right column ");
           addWinnerStyle(sq2, sq5, sq8, "Player X wins!! <br />Right Column");

            // document.getElementById("winnerX").style.display = "block";
            //document.getElementById("board").style.display = "none";
           return true;
  }
  else if (sq0.innerText == "X" && //left to right diagnol 
           sq4.innerText == "X" &&
           sq8.innerText == "X"){

           console.log("X wins left to right diagnol");
           addWinnerStyle(sq0, sq4, sq8, "Player X wins!! <br />Left to Right Diagnol");

           //document.getElementById("winnerX").style.display = "block";
           //document.getElementById("board").style.display = "none";
            return true;
  }
  else if (sq2.innerText == "X" && //right to left diagnol 
           sq4.innerText == "X" &&
           sq6.innerText == "X"){

           console.log("X wins right to left diagnol");
           addWinnerStyle(sq2, sq4, sq6, "Player X wins!! <br />Right to Left Diagnol");

           //document.getElementById("winnerX").style.display = "block";
           //document.getElementById("board").style.display = "none";
           return true;
  }
  if (sq0.innerText == "O" &&  //top row
      sq1.innerText == "O" &&
      sq2.innerText == "O"){

      console.log(" O wins top row");
      addWinnerStyle(sq0, sq1, sq2, "Player O wins!! <br />Top Row");

      //document.getElementById("winnerO").style.display = "block";
      //document.getElementById("board").style.display = "none":
      return true;
  } 
  else if (sq3.innerText == "O" && // middle row
           sq4.innerText == "O" &&
           sq5.innerText == "O"){

          console.log(" O wins middle row");
          addWinnerStyle(sq3, sq4, sq5, "Player O wins!! <br />Middle Row");

         //document.getElementById("winnerO").style.display = "block";
         //document.getElementById("board").style.display = "none";
         return true;
  }  else if (sq6.innerText == "O" && // bottom row
           sq7.innerText == "O" &&
           sq8.innerText == "O"){

           console.log("O wins bottom row");
           addWinnerStyle(sq6, sq7, sq8, "Player O wins!! <br />Bottom Row");

         //document.getElementById("winnerO").style.display = "block";
         //document.getElementById("board").style.display = "none";
         return true;
  }
  else if (sq0.innerText == "O" && // left column
           sq3.innerText == "O" &&
           sq6.innerText == "O"){

           console.log("O wins left column");
           addWinnerStyle(sq0, sq3, sq6, "Player O wins!! <br />Left Column");

         //document.getElementById("winnerO").style.display = "block";
         //document.getElementById("board").style.display = "none";
         return true;
  }
  else if (sq1.innerText == "O" && // middle column
           sq4.innerText == "O" &&
           sq7.innerText == "O"){

           console.log("O wins middle column ");
           addWinnerStyle(sq1, sq4, sq7, "Player O wins!! <br />Middle Column");

            //document.getElementById("winnerO").style.display = "block";
            //document.getElementById("board").style.display = "none";
            return true;
  }
  else if (sq2.innerText == "O" && //right column
          sq5.innerText == "O" &&
          sq8.innerText == "O"){

           console.log("O wins right column ");
           addWinnerStyle(sq2, sq5, sq8, "Player O wins!! <br />Right Column");

            //document.getElementById("winnerO").style.display = "block";
            //document.getElementById("board").style.display = "none";
            return true;
  }
  else if (sq0.innerText == "O" && //left to right diagnol 
           sq4.innerText == "O" &&
           sq8.innerText == "O"){

           console.log("O wins left to right diagnol");
           addWinnerStyle(sq0, sq4, sq8, "Player O wins!! <br />Left to Right Diagnol");
           //document.getElementById("winnerO").style.display = "block";
           //document.getElementById("board").style.display = "none";
            return true;
  }
  else if (sq2.innerText == "O" && //right to left diagnol 
           sq4.innerText == "O" &&
           sq6.innerText == "O"){

           console.log("O wins right to left diagnol");
           addWinnerStyle(sq2, sq4, sq6, "Player O wins!! <br />Right to Left Diagnol");

           //document.getElementById("winnerO").style.display = "block";
           //document.getElementById("board").style.display = "none";
            return true;
  }
}
//  if(sq0.innerText == "O" &&  //top row
//    sq1.innerText == "O" &&
//    sq2.innerText == "O" ||
//    sq3.innerText == "O" && // middle row
//    sq4.innerText == "O" &&
//    sq5.innerText == "O" ||
//    sq6.innerText == "O" && // bottom row
//    sq7.innerText == "O" &&
//    sq8.innerText == "O" ||
//    sq0.innerText == "O" && // left column
//    sq3.innerText == "O" &&
//    sq6.innerText == "O" ||
//    sq1.innerText == "O" && // middle column
//    sq4.innerText == "O" &&
//    sq7.innerText == "O" ||
//    sq2.innerText == "O" && //right column
//    sq5.innerText == "O" &&
//    sq8.innerText == "O" ||
//    sq0.innerText == "O" && //left to right diagnol 
//    sq4.innerText == "O" &&
//    sq8.innerText == "O" ||
//    sq2.innerText == "O" && //right to left diagnol 
//    sq4.innerText == "O" &&
//    sq6.innerText == "O")
//   {
//        console.log("the winner is O");
//        //console.log(someArr);
//        document.getElementById("winnerO").style.display = "block";
//        document.getElementById("board").style.display = "none";

//        return "the winner is O";
//   }
// } 
  //console.log("check winner");
  //for(var i = 0; i < someArr.length; i ++){
  //     if(someArr[0].innerText == "X" &&  //top row
  //        someArr[1].innerText == "X" &&
  //        someArr[2].innerText == "X" ||
  //        someArr[3].innerText == "X" && // middle row
  //        someArr[4].innerText == "X" &&
  //        someArr[5].innerText == "X" ||
  //        someArr[6].innerText == "X" && // bottom row
  //        someArr[7].innerText == "X" &&
  //        someArr[8].innerText == "X" ||
  //        someArr[0].innerText == "X" && // left column
  //        someArr[3].innerText == "X" &&
  //        someArr[6].innerText == "X" ||
  //        someArr[1].innerText == "X" && // middle column
  //        someArr[4].innerText == "X" &&
  //        someArr[7].innerText == "X" ||
  //        someArr[2].innerText == "X" && //right column
  //        someArr[5].innerText == "X" &&
  //        someArr[8].innerText == "X" ||
  //        someArr[0].innerText == "X" && //left to right diagnol 
  //        someArr[4].innerText == "X" &&
  //        someArr[8].innerText == "X" ||
  //        someArr[2].innerText == "X" && //right to left diagnol 
  //        someArr[4].innerText == "X" &&
  //        someArr[6].innerText == "X")
  //     {
  //       console.log("the winner is X..");
  //       //console.log(someArr);
  //       document.getElementById("winnerX").style.display = "block";
  //       document.getElementById("board").style.display = "none";
  //       return "the winner is X";
  //     }else if(
  //       someArr[0] == "O" &&  //top row
  //       someArr[1] == "O" &&
  //       someArr[2] == "O" ||
  //       someArr[3] == "O" && // middle row
  //       someArr[4] == "O" &&
  //       someArr[5] == "O" ||
  //       someArr[6] == "O" && // bottom row
  //       someArr[7] == "O" &&
  //       someArr[8] == "O" ||
  //       someArr[0] == "O" && // left column
  //       someArr[3] == "O" &&
  //       someArr[6] == "O" ||
  //       someArr[1] == "O" && // middle column
  //       someArr[4] == "O" &&
  //       someArr[7] == "O" ||
  //       someArr[2] == "O" && //right column
  //       someArr[5] == "O" &&
  //       someArr[8] == "O" ||
  //       someArr[0] == "O" && //left to right diagnol 
  //       someArr[4] == "O" &&
  //       someArr[8] == "O" ||
  //       someArr[2] == "O" && //right to left diagnol 
  //       someArr[4] == "O" &&
  //       someArr[6] == "O")
  //     {
  //       console.log("the winner is O");
  //       //console.log(someArr);
  //       document.getElementById("winnerO").style.display = "block";
  //       document.getElementById("board").style.display = "none";

  //       return "the winner is O";
  //     }
      
  //   //}
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
    squares[i].addEventListener("click", function (event){
      event.preventDefault();
      var playerXName = document.getElementById("playerXName");
      var playerOName = document.getElementById("playerOName");
      var vs = document.getElementById("vs");
    if (xNumOfWins < maxGames && oNumOfWins < maxGames) {

      if (counter % 2 == 0) {
        //this checks for Xs, should be evens
        console.log("counter is: ", counter);
        if(isEmpty(this) && !gameOver ){
          console.log("this is x", isEmpty(this) );
          //console.log("this is:" + Object.getPrototypeOf(this);
          //console.log("inside counter the index of x is:" + getNodeIndex(sqArr, this) );
          //console.log("the index of x is:" + squares.item(this))
          // add change color
          playerXName.classList.remove("xColor");
          playerOName.classList.add("oColor");
          vs.innerText = ">";

          this.classList.add("xColor");
          this.classList.remove("oColor");
          console.log(this.classList);
          this.innerText = "X";
          //console.log("inside counter the index of x is:" + getNodeIndex(sqArr, this) );
          
          // assign x to index of winnerArray then 
          // using check winner func to see if there are matches to array index
          console.log("the this for X"+ this );
          console.log("this is X innnerText for:" + this.innerText);
          // winnerArray[getNodeIndex(sqArr, this)] = this.innerText;
          //winnerArray[getNodeIndex(sqObjs, this)] = this.innerText;

          if (checkWinner() ){
            playerOName.classList.add("hideTag");
            //playerOName.innerText = "";
            vs.innerText = "<";
            gameOver = true;
            xNumOfWins++;
            numOfGames++;
            console.log("the num of games is:", numOfGames);
            document.getElementById("xNumWins").innerText = xNumOfWins;
          }
          //checkWinner(winnerArray);
          //console.log("winnerArray is=" + winnerArray);
          counter++;
        }
      } else if(isEmpty(this) && !gameOver ){
          console.log("counter is: ", counter);
          // change color
          playerXName.classList.add("xColor");
          playerOName.classList.remove("oColor");
          vs.innerText = "<";

          this.classList.remove("xColor");
          this.classList.add("oColor");
          //this.className = this.className + " oColor";
          //this.style.color = "red";
          console.log(this.classList);
          console.log("this is O:", isEmpty(this) );
          this.innerText = "O";
          //winnerArray[getNodeIndex(sqArr, this)].push(this.innerText);

          // assign o to index of winnerArray then 
          // using check winner func to see if there are matches to array index
          console.log("this is O innnerText for :" + this.innerText);
          console.log("this O is: " +this);  
          
          if (checkWinner() ){
            playerXName.classList.add("hideTag");
            //playerXName.innerText = "";
            vs.innerText = ">";
            oNumOfWins++;
            numOfGames++;
            document.getElementById("oNumWins").innerText = oNumOfWins;
            gameOver = true;
          }
          //winnerArray[getNodeIndex(sqArr, this)] = this.innerText;
          //checkWinner(winnerArray);
          //console.log(winnerArray);
          counter++;
        }
      }else{
        document.getElementById("board").style.display = "none";
        document.getElementByTagName("h1").appendChild.innerHTML("<p>Game Over</p>");
      }
    });
  }
    $clearBtn.click(clearBoard);
    $resetBtn.click(function(){
        document.location.reload(true);
    });   
    // resetBtn.addEventListener("click", function(){
    //   for (var i = 0; i < squares.length; i++){
    //     squares[i].innerText = "";
    //     document.location.reload(true);
    //   }
    // });

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


// for(var i = 0; i < squares.length; i++){
//   squares[i].addEventListener("click", placeMove());   
// }
//  resetBtn.addEventListener("click", clearBoard(squares) );   

});
