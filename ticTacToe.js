// wait for the DOM to finish loading
$(document).ready(function(){ 
  // all code goes here
  //var $squares = document.querySelectorAll(".box");
  var $squares = $(".box");

  var $resetBtn = $("#reset");
  var $clearBtn = $("#clearBoard");
  var counter = 0;
  var winnerArray = [];
  var gameOver = false;
  var xNumOfWins = 0;
  var oNumOfWins = 0;
  var numOfGames = 0;
  var maxGames = 2;
  var sqArr = [];
  var sqObjs ={};
  for (var i = 0; i < $squares.length; i++){
      sqObjs[i] = $squares[i];
      sqArr.push(sqObjs[i]);
      //console.log(sqObjs[i].innerText);
  }

  // function to change winnner styles
  var addWinnerStyle = function(winSq1, winSq2, winSq3, winMsg) {
    var $winnerBox = $("#winnerBox");
    $winnerBox.removeClass("hideTag");
    $winnerBox.text(winMsg);
    $(winSq1).addClass("winnerColor");
    $(winSq2).addClass("winnerColor");
    $(winSq3).addClass("winnerColor");

  }
  var clearBoard = function() {
    $("#playerXName").removeClass("hideTag");
    $("#playerOName").removeClass("hideTag");
    $("#winnerBox").addClass("hideTag");
    var $vsArrow = $("#vs");
    if( $vsArrow.text() == "<"){
       $vsArrow.text(">");
    }

    gameOver = false;
    $squares.each(function(){ 
      $(this).text("");
      $(this).removeClass("winnerColor");
    });
  }

  //console.log(sqObjs[0]);
  //console.log("this is the sqArr:" + sqArr[0]);

  var getNodeIndex = function(arr, node) {
    for(var i = 0; i < arr.length; i++){
      if( arr[i] == node){
        console.log("this index:" + i);
        console.log("this is node:", node);
        return i;
      }
    }
  }

  var checkWinner = function(){

  // get each square by id
  var $sq0 = $("#sq0"),        
      $sq1 = $("#sq1"),
      $sq2 = $("#sq2"),
      $sq3 = $("#sq3"),
      $sq4 = $("#sq4"),
      $sq5 = $("#sq5"),
      $sq6 = $("#sq6"),
      $sq7 = $("#sq7"),
      $sq8 = $("#sq8");
  //check each row or column of $squares and check innerText for X 
  if ($sq0.text() == "X" &&  //top row
      $sq1.text() == "X" &&
      $sq2.text() == "X"){

    console.log(" X wins top row");
    addWinnerStyle(sq0, sq1, sq2, "Player X wins!! <br />Top Row");
    //document.getElementById("winnerX").style.display = "block";
    //document.getElementById("board").style.display = "none";
    return true;
  } 
  else if ($sq3.text() == "X" && // middle row
           $sq4.text() == "X" &&
           $sq5.text() == "X"){

         console.log(" X wins middle row");
         addWinnerStyle(sq3, sq4, sq5, "Player X wins!! <br />Middle Row");

         //document.getElementById("winnerX").style.display = "block";
         //document.getElementById("board").style.display = "none";
         return true;
  }
  else if ($sq6.text() == "X" && // bottom row
           $sq7.text() == "X" &&
           $sq8.text() == "X"){

         console.log("X wins bottom row");
         addWinnerStyle(sq6, sq7, sq8, "Player X wins!! <br />Bottom Row");
         
         // document.getElementById("winnerX").style.display = "block";
         // document.getElementById("board").style.display = "none";
         return true;
  }
  else if ($sq0.text() == "X" && // left column
           $sq3.text() == "X" &&
           $sq6.text() == "X"){

         console.log("X wins left column");
         addWinnerStyle(sq0, sq3, sq6, "Player X wins!! <br />Left Column");

         // document.getElementById("winnerX").style.display = "block";
         // document.getElementById("board").style.display = "none";
         return true;
  }
  else if ($sq1.text() == "X" && // middle column
           $sq4.text() == "X" &&
           $sq7.text() == "X"){

           console.log("X wins middle column ");
           addWinnerStyle(sq1, sq4, sq7, "Player X wins!! <br />Middle Column");

            // document.getElementById("winnerX").style.display = "block";
            // document.getElementById("board").style.display = "none";
            return true;
  }
  else if ($sq2.text() == "X" && //right column
           $sq5.text() == "X" &&
           $sq8.text() == "X"){

           console.log("X wins right column ");
           addWinnerStyle(sq2, sq5, sq8, "Player X wins!! <br />Right Column");

            // document.getElementById("winnerX").style.display = "block";
            //document.getElementById("board").style.display = "none";
           return true;
  }
  else if ($sq0.text() == "X" && //left to right diagnol 
           $sq4.text() == "X" &&
           $sq8.text() == "X"){

           console.log("X wins left to right diagnol");
           addWinnerStyle(sq0, sq4, sq8, "Player X wins!! <br />Left to Right Diagnol");

           //document.getElementById("winnerX").style.display = "block";
           //document.getElementById("board").style.display = "none";
            return true;
  }
  else if ($sq2.text() == "X" && //right to left diagnol 
           $sq4.text() == "X" &&
           $sq6.text() == "X"){

           console.log("X wins right to left diagnol");
           addWinnerStyle(sq2, sq4, sq6, "Player X wins!! <br />Right to Left Diagnol");

           //document.getElementById("winnerX").style.display = "block";
           //document.getElementById("board").style.display = "none";
           return true;
  }
  if ($sq0.text() == "O" &&  //top row
      $sq1.text() == "O" &&
      $sq2.text() == "O"){

      console.log(" O wins top row");
      addWinnerStyle(sq0, sq1, sq2, "Player O wins!! <br />Top Row");

      //document.getElementById("winnerO").style.display = "block";
      //document.getElementById("board").style.display = "none":
      return true;
  } 
  else if ($sq3.text() == "O" && // middle row
           $sq4.text() == "O" &&
           $sq5.text() == "O"){
  console.log(" O wins middle row");
          addWinnerStyle(sq3, sq4, sq5, "Player O wins!! <br />Middle Row");

         //document.getElementById("winnerO").style.display = "block";
         //document.getElementById("board").style.display = "none";
         return true;
  }  else if ($sq6.text() == "O" && // bottom row
              $sq7.text() == "O" &&
              $sq8.text() == "O"){

           console.log("O wins bottom row");
           addWinnerStyle(sq6, sq7, sq8, "Player O wins!! <br />Bottom Row");

         //document.getElementById("winnerO").style.display = "block";
         //document.getElementById("board").style.display = "none";
         return true;
  }
  else if ($sq0.innerText == "O" && // left column
           $sq3.innerText == "O" &&
           $sq6.innerText == "O"){

           console.log("O wins left column");
           addWinnerStyle(sq0, sq3, sq6, "Player O wins!! <br />Left Column");

         //document.getElementById("winnerO").style.display = "block";
         //document.getElementById("board").style.display = "none";
         return true;
  }
  else if ($sq1.innerText == "O" && // middle column
           $sq4.innerText == "O" &&
           $sq7.innerText == "O"){

           console.log("O wins middle column ");
           addWinnerStyle(sq1, sq4, sq7, "Player O wins!! <br />Middle Column");

            //document.getElementById("winnerO").style.display = "block";
            //document.getElementById("board").style.display = "none";
            return true;
  }
  else if ($sq2.innerText == "O" && //right column
           $sq5.innerText == "O" &&
           $sq8.innerText == "O"){

           console.log("O wins right column ");
           addWinnerStyle(sq2, sq5, sq8, "Player O wins!! <br />Right Column");

            //document.getElementById("winnerO").style.display = "block";
            //document.getElementById("board").style.display = "none";
            return true;
  }
  else if ($sq0.innerText == "O" && //left to right diagnol 
           $sq4.innerText == "O" &&
           $sq8.innerText == "O"){

           console.log("O wins left to right diagnol");
           addWinnerStyle(sq0, sq4, sq8, "Player O wins!! <br />Left to Right Diagnol");
           //document.getElementById("winnerO").style.display = "block";
           //document.getElementById("board").style.display = "none";
            return true;
  }
  else if ($sq2.innerText == "O" && //right to left diagnol 
           $sq4.innerText == "O" &&
           $sq6.innerText == "O"){

           console.log("O wins right to left diagnol");
           addWinnerStyle(sq2, sq4, sq6, "Player O wins!! <br />Right to Left Diagnol");

           //document.getElementById("winnerO").style.display = "block";
           //document.getElementById("board").style.display = "none";
            return true;
  }
}

  var isEmpty = function(sq) {
    if($(sq).text() == "X" ||
       $(sq).text() == "O"){
      return false;
    }else if($(sq).text() == ""){
      return true;
    }
  }

    //console.log("Every square in list:" + $squares[i] );
    $squares.click(function (event){
      event.preventDefault();
      var $playerXName = $("#playerXName");
      var $playerOName = $("#playerOName");
      var $vs = $("vs");
    if (xNumOfWins < maxGames && oNumOfWins < maxGames) {

      if (counter % 2 == 0) {
        //this checks for Xs, should be evens
        console.log("counter is: ", counter);
        if(isEmpty($(this) && !gameOver ) ){
          console.log("this is x", isEmpty($(this) ) );
          //console.log("this is:" + Object.getPrototypeOf(this);
          //console.log("inside counter the index of x is:" + getNodeIndex(sqArr, this) );
          //console.log("the index of x is:" + $squares.item(this))
          // add change color
          $playerXName.removeClass("xColor");
          $playerOName.addClass("oColor");
          $vs.text(">");

          $(this).addClass("xColor");
          $(this).removeClass("oColor");
          console.log($(this).class);
          $(this).text("X");
          //console.log("inside counter the index of x is:" + getNodeIndex(sqArr, this) );
          
          // assign x to index of winnerArray then 
          // using check winner func to see if there are matches to array index
          console.log("the this for X"+ $(this) );
          console.log("this is X innnerText for:" + $(this).text() );
          // winnerArray[getNodeIndex(sqArr, this)] = this.innerText;
          //winnerArray[getNodeIndex(sqObjs, this)] = this.innerText;

          if (checkWinner() ){
            $playerOName.addClass("hideTag");
            //playerOName.innerText = "";
            $vs.text() = "<";
            gameOver = true;
            xNumOfWins++;
            numOfGames++;
            console.log("the num of games is:", numOfGames);
            $("#xNumWins").text(xNumOfWins);
          }
          //checkWinner(winnerArray);
          //console.log("winnerArray is=" + winnerArray);
          counter++;
        }
      } else if(isEmpty($(this)) && !gameOver ){
          console.log("counter is: ", counter);
          // change color
          $playerXName.addClass("xColor");
          $playerOName.removeClass("oColor");
          $vs.text("<");

          $(this).removeClass("xColor");
          $(this).addClass("oColor");
          //this.className = this.className + " oColor";
          //this.style.color = "red";
          console.log($(this).class);
          console.log("this is O:", isEmpty($(this) ) );
          $(this).text("O");
          //winnerArray[getNodeIndex(sqArr, this)].push(this.innerText);

          // assign o to index of winnerArray then 
          // using check winner func to see if there are matches to array index
          console.log("this is O innnerText for :" + $(this).text() );
          console.log("this O is: " + $(this) );  
          
          if (checkWinner() ){
            $playerXName.addClass("hideTag");
            //playerXName.innerText = "";
            $vs.text(">");
            oNumOfWins++;
            numOfGames++;
            $("#oNumWins").text(oNumOfWins);
            gameOver = true;
          }
          //winnerArray[getNodeIndex(sqArr, this)] = this.innerText;
          //checkWinner(winnerArray);
          //console.log(winnerArray);
          counter++;
        }
      }else{
        $("#board").style.display = "none";
        $("#h1").append.html("<p>Game Over</p>");
      }
    });
  
    $clearBtn.on("click", clearBoard);
    $resetBtn.on("click", function(){
        document.location.reload(true);
    }); 

});
