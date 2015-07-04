$(document).ready(function(){

$body = $("body");

  var $newItem = $("#newItem");
  var $submit = $("#submit");
  var $listParent = $("#list");


  var addToList = function(evt,liParent, item){
    evt.preventDefault();
    var $listItem = $("<li></li>");
    $listItem.val( item.val() );
    liParent.append($listItem);
  }

  //$submit.on("click", addToList(event,$listParent, $newItem) );
  


  //add new item to list
  $submit.on("click", function(event){
    event.preventDefault();
    console.log("clicked ");
    console.log("this is newItem: "+ $newItem.val() );
    $listParent.append($("<li />").text( $newItem.val() ) );

  });
});

