$(document).ready(function() {
	
	$('body').css('visibility','visible');
	
	//cache ligne de vie 1 : definition click sur TIC
	$("#texte-definition1-tic").css('height', '0');
	
	//var de test si définition TIC ouverte
	var ticIsOpen = false;
	//controller init le plugin superscrollorama
	var controller = $.superscrollorama();					
	//les animations
	
	//ligne de vie 1 : affiche définition TIC , lien TIC*
	$("#tic-link").click(function(e) {
		if(!ticIsOpen){
        	$("#texte-definition1-tic").stop().animate({height: 386}, 1500); 
			ticIsOpen = true;
		}else {
			$("#texte-definition1-tic").stop().animate({height: 0}, 1500); 
			ticIsOpen = false;
		}
    });
	
	$("#more-tic-link").click( function(e) {
    });

    // Simulation du flottement des nuages
    setInterval(function() {
      flottementNuageHeader()
	}, 2500);

	//Animation en Fonction du Scroll

	//Animation de la ligne de vie 1 : #ligne_vie_1
	controller.addTween('#twitter_ligne_vie_1', TweenMax.fromTo( $('#ligne_vie_1'), 5, {css:{height:0}, immediateRender:true, ease:Circ.easeOut}, {css:{height:1560}, ease:Quad.easeInOut}));

	//Animation de la ligne de vie 1 : #texte-definition1-part1
	controller.addTween('#twitter_ligne_vie_1', TweenMax.fromTo( $('#texte-definition1-part1'), 2, {css:{width:0}, immediateRender:true, ease:Quart.easeInOut,},{css:{width:505},ease:Quad.easeInOut,}));
	
	//Animation de la ligne de vie 1 : #text-association
	controller.addTween('#texte-definition1-part1', TweenMax.fromTo( $('#text-association'), 2, {css:{height:0}, immediateRender:true, ease:Back.easeOut}, {css:{height:503}, ease:Quad.easeInOut}),0, 100);
	
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
	
	//Animation de la ligne de vie 1 : #illustration-part1
	controller.addTween('#illustration-part1', TweenMax.fromTo( $('#illustration-part1'), 1, {css:{opacity:0}, immediateRender:true, ease:Back.easeOut}, {css:{opacity:1}, ease:Quad.easeInOut}),0, 100);
	//Animation de la ligne de vie 1 : #text-association
	controller.addTween('#illustration-fleche', TweenMax.fromTo( $('#illustration-fleche'), 1, {css:{height:0}, immediateRender:true, ease:Back.easeOut}, {css:{height:137}, ease:Quad.easeInOut}),0, 100);
	//Animation de la ligne de vie 1 : #text-association
	controller.addTween('#illustration-part2', TweenMax.fromTo( $('#illustration-part2'), 1, {css:{opacity:0}, immediateRender:true, ease:Back.easeOut}, {css:{opacity:1}, ease:Quad.easeInOut}),0, 100);
	

	//Animation de la partie Aujourd'hui

	//Ligne de vie
	controller.addTween(4000, TweenMax.fromTo( $('#aujourdhui_ligne_vie_vertical'), 1.5, {css:{height:1400}, immediateRender:true, ease:Back.easeOut}, {css:{height:2000}, ease:Quad.easeInOut}));
	controller.addTween(3200, TweenMax.fromTo( $('#aujourdhui_ligne_vie_vertical'), 1.5, {css:{height:682}, immediateRender:true, ease:Back.easeOut}, {css:{height:1400}, ease:Quad.easeInOut}));
	controller.addTween('#aujourdhui-wrapper', TweenMax.fromTo( $('#aujourdhui_ligne_vie_vertical'), 1.5, {css:{height:0}, immediateRender:true, ease:Back.easeOut}, {css:{height:682}, ease:Quad.easeInOut}));

	controller.addTween(3100, TweenMax.fromTo( $('#aujourdhui_ligne_vie_horizontal'), 1.5, {css:{width:0}, immediateRender:true, ease:Back.easeOut}, {css:{width:1000}, ease:Quad.easeInOut}));

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
}