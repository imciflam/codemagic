'use strict';
//var ESC_KEYCODE = 27;
//var ENTER_KEYCODE = 13;
 

var userDialog = document.querySelector('.setup');
document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
.content;
var userDialogOpen = document.querySelector('.setup-open');
var userDialogClose = document.querySelector('.setup-close');
var coatColoring = document.querySelector('.setup-wizard .wizard-coat');
var eyesColoring = document.querySelector('.setup-wizard .wizard-eyes');
var fireballColoring = document.querySelector('.setup-fireball-wrap'); 



var openPopup = function() 
{
	userDialog.classList.remove('hidden');
};

var closePopup = function() 
{
	userDialog.classList.add('hidden');
};

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

var getRandomInteger = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};



//setup.js

(function()
{
	var userDialog = document.querySelector(".setup");
	userDialog.classList.remove("hidden");
	var similarListElement = userDialog.querySelector(".setup-similar-list");
	var similarWizardTemplate = document.querySelector("#similar-wizard-template").content;
	//var wizards = [];//mock
	var renderWizard = function(wizard)
	{
		var wizardElement = similarWizardTemplate.cloneNode(true);
		wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
		wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
		wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes; 
		return wizardElement;
	}

	window.load(function(wizards)
	{
	var fragment = document.createDocumentFragment();
	for (var i=0; i<4; i++)
	{
		fragment.appendChild(renderWizard(wizards[i]));
	}
	similarListElement.appendChild(fragment);
	userDialog.querySelector(".setup-similar").classList.remove("hidden");
	});

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

})();

 
/*
//mock data 
var wizards = 
[
{    
	var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
	var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
	var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
	var WIZARD_NAMES = ['Варянус', 'Машанус', 'Морэльный', 'Олегус']
	var WIZARD_SURNAMES = ['Юзанус', 'Казус', 'Саллянус', 'Павукан']
	name: WIZARD_NAMES[getRandomInteger(0, WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[getRandomInteger(0, WIZARD_SURNAMES.length)],
	coatColor: '#'+(Math.random()*0xFFFFFF<<0).toString(16),
	eyesColor: 'rgb(348,100,90)', 
},
{
	name: WIZARD_NAMES[getRandomInteger(0, WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[getRandomInteger(0, WIZARD_SURNAMES.length)],
	coatColor: '#'+(Math.random()*0xFFFFFF<<0).toString(16)
},
{
	name: WIZARD_NAMES[getRandomInteger(0, WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[getRandomInteger(0, WIZARD_SURNAMES.length)],
	coatColor: '#'+(Math.random()*0xFFFFFF<<0).toString(16)
},   
{
	name: WIZARD_NAMES[getRandomInteger(0, WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[getRandomInteger(0, WIZARD_SURNAMES.length)],
	coatColor: 'rgb(0, 51, 255)',
	eyesColor: 'rgb(0, 204, 51)'
}
]	
 
 for (var i=0; i<4; i++)
{
	var wizardElement = similarWizardTemplate.cloneNode(true);//глубокое клонирование, содержит полную разметку
	wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
	wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
	wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor; 
	similarListElement.appendChild(wizardElement);
	//fragment.appendChild


}*/



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