'use strict';

(function () {

	var similarWizardTemplate = document.querySelector("#similar-wizard-template").content;
		
	var renderWizard = function(wizard)
	{
		var wizardElement = similarWizardTemplate.cloneNode(true);
		wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
		wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
		wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes; 
		return wizardElement;
	}
	var similarListElement = document.querySelector(".setup-similar-list");

	window.render = function(wizards)
	{
	var fragment = document.createDocumentFragment();
	for (var i=0; i<4; i++)
	{
		fragment.appendChild(renderWizard(wizards[i]));
	}
	similarListElement.appendChild(fragment);
	document.querySelector(".setup-similar").classList.remove("hidden");
	};

})();