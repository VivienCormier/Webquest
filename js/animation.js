$(document).ready(function() {
	
	$('body').css('visibility','visible');
	//controller init le plugin superscrollorama
	var controller = $.superscrollorama();					
	//les animations
	
	
	
	$("#tic-link").click(function(e) {
        alert("tu as cliqué sur tic");
    });
	$("#more-tic-link").click(function(e) {
        //alert("tu as cliqué sur more tic");
		$("#ligne-vie-1").css("height", "0");
		$("#texte-definition1-part1").css("width", "0");
		$("#text-association").css("height", "5");
		
		$("#tic-link").css('display','none');
		
		$("#ligne-vie-1").animate({height: 1560}, 1500);
		$("#texte-definition1-part1").animate({width: 505}, 2500);
		$("#text-association").delay(2500).animate({height: 503}, 2500);
		setTimeout( function(){
		  $("#tic-link").css('display','block');
		},5000);
    });
});