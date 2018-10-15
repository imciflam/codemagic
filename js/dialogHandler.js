(function()
{ 
  
window.userDialog = document.querySelector('.setup');
var dialogHandle = userDialog.querySelector('.upload');
dialogHandle.addEventListener('mousedown', function (evt)
{ 	
  evt.preventDefault(); 
  //default coordinates
  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };

	 var dragged = false;
 
    var onMouseMove = function (moveEvt)
    {
    moveEvt.preventDefault();
    dragged = true;
    //find cursor's displacement during one event
    //the difference between start coords and current coords
    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };
    //rewrite start location
    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };
    //add the difference thus moving the pin on cursor's place
    userDialog.style.top = (userDialog.offsetTop - shift.y) + "px";
    userDialog.style.left = (userDialog.offsetLeft - shift.x) + "px";
    };

     var onMouseUp = function (upEvt)
    {
      upEvt.preventDefault();
       document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      if(dragged)
      {
      	var onClickPreventDefault = function(evt)
      	{
      		evt.preventDefault();
      		document.removeEventListener("click", onClickPreventDefault);
      	}
      dialogHandle.addEventListener("click", onClickPreventDefault);
      } 
    }

     document.addEventListener("mousemove", onMouseMove);
     document.addEventListener("mouseup", onMouseUp);

});
})();