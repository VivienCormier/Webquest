$(document).ready(function() {
	
	$('body').css('visibility','visible');
	//controller init le plugin superscrollorama
	var controller = $.superscrollorama();					
	//les animations
	
	
	
	$("#tic-link").click(function(e) {
        alert("tu as cliqué sur tic");
    });
	$("#more-tic-link").click(function(e) {
		$("#ligne-definition").css("height", "0");
		$("#texte-definition1-part1").css("width", "0");
        alert("tu as cliqué sur more tic");
		$("#ligne-definition").animate({height: 1252}, 1500);
		$("#texte-definition1-part1").animate({width: 505}, 1500);
    });
});