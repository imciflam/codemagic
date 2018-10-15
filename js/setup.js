'use strict';
//var ESC_KEYCODE = 27;
//var ENTER_KEYCODE = 13;
 
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'] 

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
  

//render
 



//setup.js

(function()
{ 
	var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
	var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

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

	var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }

    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var namesComparator = function (leftName, rightName) {
    if (leftName > rightName) {
      return 1;
    } else if (leftName < rightName) {
      return -1;
    } else {
      return 0;
    }
  };


	var updateWizards = function()
	{
		window.render(wizards.sort(function(left,right)
		{
			var rankDiff = getRank(right) - getRank(left);
			if (rankDiff ===0)
			{
				rankDiff = namesComparator(left.name, right.name);
			}
			return rankDiff;
		}))
	}


	  window.wizard.onCoatChange = function (color) 
	  {
 		coatColor = color;
  		updateWizards();
 	  };
  	  window.wizard.onEyesChange = function (color) 
  	  {
   		eyesColor = color;
   		updateWizards();
 	  };

	var getRandomInteger = function (min, max) 
	{
	  return Math.floor(Math.random() * (max - min)) + min;
	};

	var coatColor;
	var changeCoat = function()
	{
		var newColor = COAT_COLORS[getRandomInteger(0, COAT_COLORS.length)];
		coatColoring.style.fill = newColor;
		coatColor = newColor;
		updateWizards();
	};

	var eyesColor;
	var changeEyes = function()
	{
		var newColor = EYE_COLORS[getRandomInteger(0, EYE_COLORS.length)];
		eyesColoring.style.fill = newColor;
		eyesColor = newColor;
		updateWizards();
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
	window.onSuccess = function(data)
	{
		wizards = data;
		window.render(wizards);
	}

	 window.onError = function(errorMessage)
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
	var url  = "https://js.dump.academy/code-and-magick/data";
    window.load(url, onSuccess, onError);
})();


  
 