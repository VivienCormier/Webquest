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

    // Simulation du flottement des nuages

	flottementNuageHeader();

	//Animation en Fonction du Scroll

	//Animation de la ligne de vie 1 : #ligne_vie_1
	controller.addTween('#twitter_ligne_vie_1', TweenMax.fromTo( $('#ligne_vie_1'), 2.5, {css:{height:0}, immediateRender:true, ease:Back.easeOut}, {css:{height:1560}, ease:Quad.easeInOut}));

	//Animation de la ligne de vie 1 : #texte-definition1-part1
	controller.addTween('#twitter_ligne_vie_1', TweenMax.fromTo( $('#texte-definition1-part1'), 1, {css:{width:0}, immediateRender:true, ease:Back.easeOut}, {css:{width:505}, ease:Quad.easeInOut}));

	//Animation de la ligne de vie 1 : #text-association
	controller.addTween('#texte-definition1-part1', TweenMax.fromTo( $('#text-association'), 1.5, {css:{height:0}, immediateRender:true, ease:Back.easeOut}, {css:{height:503}, ease:Quad.easeInOut}));

	//Paralax des nuages et du soleil de la ville 
	controller.addTween(
		2000,
		(new TimelineLite())
			.append([
				TweenMax.fromTo($('#transition-nuages'), 1, 
					{css:{top: -430}, immediateRender:true}, 
					{css:{top: -600}}),
				TweenMax.fromTo($('#transition-soleil'), 1, 
					{css:{top: 150}, immediateRender:true}, 
					{css:{top: -400}})
			]),
		800 // scroll duration of tween
	);

});

function flottementNuageHeader(){
	var deplacementAleatoire = Math.random();

	var deplacementNuage1 = deplacementAleatoire *100;
	var deplacementNuage2 = 200 + (-1 * deplacementAleatoire *200);

    $("#nuage-1").animate({
        right: deplacementNuage1+'px'
    }, {
        queue:false, 
        duration:2500, 
        easing:'easeInOutSine'
    });

    $("#nuage-2").animate({
        left: deplacementNuage2+'px'
    }, {
        queue:false, 
        duration:2500, 
        easing:'easeInOutSine'
    });

    setTimeout(function(){
    	flottementNuageHeader();
    }, 2500);
}