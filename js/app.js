$( document ).ready(function() {
	$('.btn').click( function () {
		// get values from form 
	    var programType = $('[name="program-type"]').val();
	    var programTypeSelector = "." + programType;
	    // unless all then blank
	    var eduLevel = $('[name="edu-level"]').val();
	    var eduLevelSelector = "." + eduLevel;
	    var	combinedSelector = programTypeSelector + eduLevelSelector;


	    	$('.images img').hide();

	
	    	console.log("." + programType);
	    	console.log("." + eduLevel);
	    
		if (programType === '.all' && eduLevel != '.all') {
			eduLevelSelector
		} else if (eduLevel === '.all' && programType != '.all') {
			programTypeSelector
		}


		// if either are all only check the one that's used
		// both all show everything
		// combine $('.SP.HS')
	});

	// $(".HS").switchClass("", "class2", 1000);
});