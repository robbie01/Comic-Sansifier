var sheet = (function() {
	var style = document.createElement("style");
  
	style.appendChild(document.createTextNode("")); //ugly hack for webkit
  
	document.head.appendChild(style);
	return style.sheet;
})();

sheet.insertRule('* {font-family: "Comic Sans MS", "Chalkboard", "Chalkboard SE" !important;}', 0);