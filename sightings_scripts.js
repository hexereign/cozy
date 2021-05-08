$(document).ready(function(){

	// Lab 11 Alien Sighting Form Final_Mihalos

	$("h2").css("background-color", "#b2ec5d");
	$("h2").width("550px");


	// step 1 - datepicker
		$("#datepicker").datepicker({ 			
			maxDate: new Date(),
			minDate: -365,
			showButtonPanel: true
		});


	// step 2 - set alien type using buttons
		$( "#type_select" ).buttonset();

	// step 3 weight and height using sliders to adjust value		
		$( "#slide_weight" ).slider({
			value:0,
			min: 0,
			max: 2000,
			step: 5,
			slide: function( event, ui ) {
				$( "#weight" ).val( ui.value);
			}
		});		
		$( "#weight" ).val( $( "#slide_weight" ).slider( "value" ));
        
		$( "#slide_height" ).slider({
			value:0,
			min: 0,
			max: 15,
			step: 1,
			slide: function( event, ui ) {
				$( "#height" ).val( ui.value);
			}
		});		
        $( "#height" ).val( $( "#slide_height" ).slider( "value" ));
        
	// step 4 number of eyes arms and legs using spinner
		$(function(){
			
			$('input[type="number"]').nicenumber();
		});

		$("#eyes").attr("min", "0");
		$("#eyes").attr("max", "20");	
		$("#arms").attr("min", "0");
		$("#arms").attr("max", "20");
		$("#legs").attr("min", "0");
		$("#legs").attr("max", "20");

	// step 5 color mixer for a swatch using slider
	function refreshSwatch() {

		var	red = $("#red").slider( "value" );
		var	green = $("#green").slider( "value" );
		var	blue = $("#blue").slider( "value" );
		var	my_rgb = "rgb(" + red + "," + green + "," + blue + ")"; 
			$("#swatch").width("100px");
			$("#swatch").height("100px");
			$("#swatch").css("background-image", "url('alien_svg.png')" );
			$("#swatch").css( "background-color", my_rgb );
			$("#red_val").val(red );
			$("#blue_val").val( blue);
			$("#green_val").val( green);
			$("#color_val").val( my_rgb);		
	}
	$( "#red, #green, #blue" ).slider({
		orientation: "horizontal",	
		range: "min", 
		max: 255, 
		value: 127, 
		slide: refreshSwatch,
		change: refreshSwatch
	});						
	$("#red").slider("value", 127 );
	$("#green").slider( "value", 127 );
	$("#blue").slider( "value", 127 );


	//5. Build a nicer-looking “submit“ button for the Sightings form.
	
		$("#dialog").dialog({
			autoOpen: false,
			show:{
				effect: "blind",
				duration: 1000,
			},
			hide: {
				effect: "explode",
				duration: 1000
			}
		});
		$("#sendReport").button();
		$("#sendReport").click( ()=>
		$("#dialog").dialog("open")
		);


}); //end of document ready
