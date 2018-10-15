'use strict';
//var ESC_KEYCODE = 27;
//var ENTER_KEYCODE = 13;
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'] 


var userDialog = document.querySelector('.setup');
document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
.content;
var userDialogOpen = document.querySelector('.setup-open');
var userDialogClose = document.querySelector('.setup-close');
 


var openPopup = function() 
{
	userDialog.classList.remove('hidden');
};

var closePopup = function() 
{
	userDialog.classList.add('hidden');
};




var updateWizards = function()
{
	window.render(wizards);
}

 


userDialogOpen.addEventListener('click', function()
{
	openPopup();
});

userDialogOpen.addEventListener('keydown', function(evt)
{
	if (evt.keyCode ===13)
	{
		openPopup();
	}
});

userDialogClose.addEventListener('click', function()
{
	closePopup();
});

userDialogClose.addEventListener('keydown', function(evt)
{
	if(evt.keyCode===13)
	{
		closePopup();
	}
});
 

var getRandomInteger = function (min, max) 
{
  return Math.floor(Math.random() * (max - min)) + min;
};


//render
 



//setup.js

(function()
{ 
	var coatColoring = document.querySelector('.setup-wizard .wizard-coat');
	var eyesColoring = document.querySelector('.setup-wizard .wizard-eyes');
	var fireballColoring = document.querySelector('.setup-fireball-wrap'); 
	var userDialog = document.querySelector(".setup");
	userDialog.classList.remove("hidden");
 
	var form = userDialog.querySelector(".setup-wizard-form");
	form.addEventListener('submit',
	function (evt)
	{
		window.upload(new FormData(form),
			function(response)
			{
				userDialog.classList.add("hidden");
			});
		evt.preventDefault();
	 }); 
	
	var changeCoat = function()
	{
		coatColoring.style.fill= COAT_COLORS[getRandomInteger(0, COAT_COLORS.length)];
	};

	var changeEyes = function()
	{
		eyesColoring.style.fill= EYE_COLORS[getRandomInteger(0, EYE_COLORS.length)];

	};

	var changeFireball = function()
	{
		fireballColoring.style.background= FIREBALL_COLORS[getRandomInteger(0, FIREBALL_COLORS.length)];
	};

 
	coatColoring.addEventListener('click', function()
	{
		changeCoat();
	});

	eyesColoring.addEventListener('click', function()
	{
		changeEyes();
	});

	fireballColoring.addEventListener('click', function()
	{
		changeFireball();
	})


	var wizards = [];
	var successHandler = function(data)
	{
		wizards = data;
		window.render(wizards);
	}

	var errorHandler = function(errorMessage)
	{
		var node = document.createElement("div");
		node.style = "z-index: 100; margin: 0 auto; text-align: center; background-color: red";
		node.style.position = "absolute";
		node.style.left = 0;
		node.style.right = 0;
		node.style.fontSize = "30px";
		node.textContent = errorMessage;
		document.body.insertAdjacentElement("afterbegin", node);
	}
	var URL = "https://js.dump.academy/code-and-magick/data";
	window.load = function(URL, onSuccess, onError){};

})();


  

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

    //document.addEventListener("mousemove", onMouseMove);
    //document.addEventListener("mouseup", onMouseUp);
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