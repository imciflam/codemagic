'use strict';

(function () {

	var wizardTemplate = document.querySelector("#similar-wizard-template").content;
		
	var renderWizard = function(wizard)
	{
		var element = wizardTemplate.cloneNode(true);
		var wizardElement = element.querySelector('.wizard');
   		wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
   		wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes; 
		element.querySelector('.setup-similar-label').innerText = wizard.name;

        return element;
	}
	var similar = document.querySelector('.setup-similar');
    var similarList = document.querySelector('.setup-similar-list');

	window.render = function(wizards)
	{
	similarList.innerHTML = '';
    for (var i = 0; i < 4; i++) {
      similarList.appendChild(renderWizard(wizards[i]));
    }

    similar.classList.remove('hidden');
	};

})();