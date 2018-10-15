'use strict';
 
(function()
{
	var URL = "https://js.dump.academy/code-and-magick/data";
	window.load = function(url, onSuccess, onError)
	{
		url = url || URL;
		var xhr = new XMLHttpRequest();
		xhr.responseType = "json";
		xhr.open("GET", URL);
		xhr.addEventListener("load", function()
		{
			if (xhr.status ===200)
			{
			window.onSuccess(xhr.response);
			}
			else
			{
			window.onError("Status: " + xhr.status + " " + xhr.statusText);
			}
		});
		xhr.send();
	};
})();
 

