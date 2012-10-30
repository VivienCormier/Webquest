$(document).ready(function() {
	
	$('body').css('visibility','visible');

	$('#item1').click(function(){
		var offset = $('#definition-wrapper').offset();
		$('html,body').animate({scrollTop: offset.top}, 2000);
	});

	$('#item2').click(function(){
		var offset = $('#aujourdhui-wrapper').offset();
		$('html,body').animate({scrollTop: offset.top}, 2000);
	});
	
	//cache ligne de vie 1 : definition click sur TIC
	$("#texte-definition1-tic").css('height', '0');
	//init
	$("#aujourdhui-nabaztag-texte img").hide();
	$("#aujourdhui-iphone-texte img").hide();
	
	
	
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
	
	//les click boutons
	$("#more-tic-link").click( function(e) {
    });
	
	$("#btn-nabaztag").click( function(e) {
		alert('btn nabaztag');
    });
	
	$("#btn-iphone").click( function(e) {
		alert('btn iphone');
    });
	
	$("#btn-raquette").click( function(e) {
		alert('btn raquette');
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
	
	//titre section
	controller.addTween('#aujourdhui-title', TweenMax.fromTo( $('#aujourdhui-title'), 1.5, {css:{top:-85, opacity:0}, immediateRender:true, ease:Back.easeOut}, {css:{top:0, opacity:1}, ease:Quad.easeInOut}),0,-200);
	
	//anim bidon pour reinit un élément ( en test)
	controller.addTween('#la-ville', TweenMax.fromTo( $('#aujourdhui-nabaztag-texte img'), 0.2, {css:{opacity:1}, immediateRender:true, ease:Back.easeOut}, {css:{opacity:1}, ease:Quad.easeInOut,
	onComplete: function(){
		$('#aujourdhui-nabaztag-texte img').hide();
		$('#aujourdhui-iphone-texte img').hide();
	}}));

	//Ligne de vie
	controller.addTween(4000, TweenMax.fromTo( $('#aujourdhui_ligne_vie_vertical'), 1.5, {css:{height:1400}, immediateRender:true, ease:Back.easeOut}, {css:{height:2000}, ease:Quad.easeInOut}));
	controller.addTween(3200, TweenMax.fromTo( $('#aujourdhui_ligne_vie_vertical'), 1.5, {css:{height:835}, immediateRender:true, ease:Back.easeOut}, {css:{height:1400}, ease:Quad.easeInOut}));
	controller.addTween('#aujourdhui-wrapper', TweenMax.fromTo( $('#aujourdhui_ligne_vie_vertical'), 2, {css:{height:0}, immediateRender:true, ease:Back.easeOut}, {css:{height:835}, ease:Quad.easeInOut}),0,-100);

	controller.addTween(3100, TweenMax.fromTo( $('#aujourdhui_ligne_vie_horizontal'), 1.5, {css:{width:0}, immediateRender:true, ease:Back.easeOut}, {css:{width:1000}, ease:Quad.easeInOut,
	onComplete:function(){
		$("#aujourdhui-nabaztag-texte img").fadeIn('slow');
		$("#aujourdhui-iphone-texte img").fadeIn('slow');
	}
	
	}));
	
	//texte 1
	controller.addTween('#aujourdhui-texte1', TweenMax.fromTo( $('#aujourdhui-texte1 img'), 1.5, {css:{width:0}, immediateRender:true, ease:Back.easeOut}, {css:{width:501}, ease:Quad.easeInOut}),0,-100);
	
	//nabaztag img
	controller.addTween('#aujourdhui-texte1', TweenMax.fromTo( $('#aujourdhui-nabaztag'), 2, {css:{top:600}, immediateRender:true, ease:Back.easeOut}, {css:{top:-80}, ease:Quad.easeInOut}));
	//nabaztag nuage
	controller.addTween('#aujourdhui-texte1', TweenMax.fromTo( $('#nuage-nabaztag'), 2, {css:{top:-1400}, immediateRender:true, ease:Back.easeOut}, {css:{top:-2140}, ease:Quad.easeOut}));
	
	//iphone img
	controller.addTween('#aujourdhui-iphone', TweenMax.fromTo( $('#aujourdhui-iphone'), 1.5, {css:{top:-430}, immediateRender:true, ease:Back.easeOut}, {css:{top:-630}, ease:Quad.easeOut}),0,-400);
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