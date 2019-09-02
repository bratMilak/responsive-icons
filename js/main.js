(function() {

	// Find all icomoon elements
	var allElements = $('[class^="icon-"]');

	allElements.each(function() {
		// Get full DOM path of element
		var fullPath = [],
		    elm,
		    entry;

		for (elm = this; elm; elm = elm.parentNode) {
		    entry = elm.tagName.toLowerCase();
		    if (entry === "html") {
		      break;
		    }
		    if (elm.className) {
		      entry += "." + elm.className.replace(/ /g, '.');
		    }
		    fullPath.push(entry);
		}
		fullPath.reverse();
		var fontPathOutput = fullPath.join(" ");     
		

		var $this = $(this),
			fullElPath = fullPath.join(" "),
			elClass = $this.attr('class').split(' ').join('.'),
		    elementType = $this.prop('nodeName').toLowerCase(),
		    target =   elementType + '.' + elClass;
		   

		// console.log(fontPathOutput);

		var fontValuePixels = getComputedStyle(document.querySelector(fontPathOutput), ':before').getPropertyValue('font-size'),
			fontValue = parseInt(fontValuePixels, 10);

		if(fontValue >= 60){
        	$this.addClass('big-font');
        }
        if((fontValue < 60) & (fontValue > 22)){
        	$this.addClass('med-font');
        }
        if( (fontValue < 22)){
        	$this.addClass('small-font');
        } 	
		// console.log(getComputedStyle(document.querySelector(fontPathOutput), ':before').getPropertyValue('font-size'));
	});


}());