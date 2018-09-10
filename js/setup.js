'use strict';
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
var WIZARD_NAMES = ['Варянус', 'Машанус', 'Морэльный', 'Олегус', 'Витэльный']
var WIZARD_SURNAMES = ['Юзанус', 'Казус', 'Саллянус', 'Павукан']


var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
.content;



var getRandomInteger = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var wizards = 
[
{   
	name: WIZARD_NAMES[getRandomInteger(0, WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[getRandomInteger(0, WIZARD_NAMES.length)],
	coatColor: '#'+(Math.random()*0xFFFFFF<<0).toString(16),
	eyesColor: 'rgb(348,100,90)'
},
{
	name: WIZARD_NAMES[getRandomInteger(0, WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[getRandomInteger(0, WIZARD_NAMES.length)],
	coatColor: '#'+(Math.random()*0xFFFFFF<<0).toString(16),
},
{
	name: WIZARD_NAMES[getRandomInteger(0, WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[getRandomInteger(0, WIZARD_NAMES.length)],
	coatColor: '#'+(Math.random()*0xFFFFFF<<0).toString(16)
},
{
	name: WIZARD_NAMES[getRandomInteger(0, WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[getRandomInteger(0, WIZARD_NAMES.length)],
	coatColor: '#'+(Math.random()*0xFFFFFF<<0).toString(16),
	eyesColor: 'rgb(0, 204, 51)'
}
]
for (var i=0; i<wizards.length; i++)
{
	var wizardElement = similarWizardTemplate.cloneNode(true);//глубокое клонирование, содержит полную разметку

	wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
	wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
	wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor; 
	
	similarListElement.appendChild(wizardElement);
}
