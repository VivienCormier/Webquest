$(document).ready(function() {
	
	$('body').css('visibility','visible');

	// Liens de menu
	$('#item1').click(function(){
		var offset = $('#definition-wrapper').offset();
		$('html,body').animate({scrollTop: offset.top}, 2000);
	});

	$('#item2').click(function(){
		var offset = $('#aujourdhui-wrapper').offset();
		$('html,body').animate({scrollTop: offset.top}, 2000);
	});

	$('#item3').click(function(){
		var offset = $('#demain-wrapper').offset();
		$('html,body').animate({scrollTop: offset.top}, 2000);
	});

	$('#item4').click(function(){
		var offset = $('#acteurs-modele-economique-wrapper').offset();
		$('html,body').animate({scrollTop: offset.top}, 2000);
	});

	$('#item5').click(function(){
		var offset = $('#avantages-limites-dangers-wrapper').offset();
		$('html,body').animate({scrollTop: offset.top}, 2000);
	});
	
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
	$("#btn-babyfoot").click( function(e) {
		alert('btn babyfoot');
	});
	$("#btn-chaussure").click( function(e) {
		alert('btn chaussure');
    });
	$("#btn-brosse").click( function(e) {
		alert('btn brosse');
	});
	$("#btn-bouteille").click( function(e) {
		alert('btn bouteille');
	});
	$("#btn-nike").click( function(e) {
		alert('btn nike');
	});
	$("#btn-balance").click( function(e) {
		alert('btn balance');
	});
	$("#btn-tv").click( function(e) {
		alert('btn tv');
	});
	$("#btn-camera").click( function(e) {
		alert('btn camera');
	});
	$("#btn-tomate").click( function(e) {
		alert('btn tomate');
	});

	$("#demain-songdo-video-screen").click( function(e) {
		$('#demain-songdo-video-screen').animate({opacity:0}, 2000);
    });

    // Simulation du flottement des nuages
    setInterval(function() {
      flottementNuageHeader()
	}, 2500);

	//Animation en Fonction du Scroll

	//Animation de la ligne de vie 1 : #ligne_vie_1
	controller.addTween('#twitter_ligne_vie_1', TweenMax.fromTo( $('#ligne_vie_1'), 5, {css:{height:0}, immediateRender:true, ease:Circ.easeOut}, {css:{height:1560}, ease:Quad.easeInOut}));

	//Animation de la ligne de vie 1 : #texte-definition1-part1
	controller.addTween('#twitter_ligne_vie_1', TweenMax.fromTo( $('#fleche-connecte img'), 1, {css:{left:-80}, immediateRender:true, ease:Quart.easeInOut,},{css:{left:0},ease:Quad.easeInOut,}));
	
	//Animation de la ligne de vie 1 : #text-association
	controller.addTween('#texte-definition1-part1', TweenMax.fromTo( $('#text-association'), 1.5, {css:{height:0}, immediateRender:true, ease:Back.easeOut}, {css:{height:203}, ease:Quad.easeInOut}),0, 100);
	
	//Paralax des nuages et du soleil de la ville 
	controller.addTween(
		1900,
		(new TimelineLite())
			.append([
				TweenMax.fromTo($('#transition-nuages'), 1, 
					{css:{top: -430}, immediateRender:true}, 
					{css:{top: -600}}),
				TweenMax.fromTo($('#transition-soleil'), 1, 
					{css:{top: 350}, immediateRender:true}, 
					{css:{top: -400}})
			]),
		1100 // scroll duration of tween
	);
	
	//Animation de la ligne de vie 1 : #illustration-part1
	controller.addTween('#illustration-part1', TweenMax.fromTo( $('#illustration-part1'), 1, {css:{opacity:0}, immediateRender:true, ease:Back.easeOut}, {css:{opacity:1}, ease:Quad.easeInOut}),0, 100);
	//Animation de la ligne de vie 1 : #text-association
	controller.addTween('#illustration-fleche', TweenMax.fromTo( $('#illustration-fleche'), 1.5, {css:{height:0,opacity:0}, immediateRender:true, ease:Back.easeOut}, {css:{height:140,opacity:1}, ease:Quad.easeInOut}),0, 100);
	//Animation de la ligne de vie 1 : #text-association
	controller.addTween('#illustration-fleche', TweenMax.fromTo( $('#illustration-part2'), 2, {css:{opacity:0}, immediateRender:true, ease:Back.easeOut}, {css:{opacity:1}, ease:Quad.easeInOut}),0, 100);
	

	//Animation de la partie Aujourd'hui
	
	//titre section
	controller.addTween('#aujourdhui-title', TweenMax.fromTo( $('#aujourdhui-title'), 1.5, {css:{top:-85, opacity:0}, immediateRender:true, ease:Back.easeOut}, {css:{top:0, opacity:1}, ease:Quad.easeInOut}),0,-200);
	
	//Ligne de vie
	controller.addTween('#aujourdhui-bouteille', TweenMax.fromTo( $('#aujourdhui_ligne_vie_vertical'), 5, {css:{height:2210}, immediateRender:true, ease:Back.easeOut}, {css:{height:4000}, ease:Quad.easeInOut}));
	controller.addTween(4200, TweenMax.fromTo( $('#aujourdhui_ligne_vie_vertical'), 1.5, {css:{height:1824}, immediateRender:true, ease:Back.easeOut}, {css:{height:2210}, ease:Quad.easeInOut}));
	controller.addTween(3900, TweenMax.fromTo( $('#aujourdhui_ligne_vie_vertical'), 1.5, {css:{height:1300}, immediateRender:true, ease:Back.easeOut}, {css:{height:1824}, ease:Quad.easeInOut}));
	controller.addTween(3400, TweenMax.fromTo( $('#aujourdhui_ligne_vie_vertical'), 1.5, {css:{height:835}, immediateRender:true, ease:Back.easeOut}, {css:{height:1300}, ease:Quad.easeInOut}));
	controller.addTween(3000, TweenMax.fromTo( $('#aujourdhui_ligne_vie_vertical'), 1.5, {css:{height:460}, immediateRender:true, ease:Back.easeOut}, {css:{height:835}, ease:Quad.easeInOut}));
	controller.addTween('#aujourdhui-wrapper', TweenMax.fromTo( $('#aujourdhui_ligne_vie_vertical'), 2, {css:{height:0}, immediateRender:true, ease:Back.easeOut}, {css:{height:460}, ease:Quad.easeInOut}),0,-100);

	controller.addTween(3200, TweenMax.fromTo( $('#aujourdhui_ligne_vie_horizontal'), 1.5, {css:{width:0}, immediateRender:true, ease:Back.easeOut}, {css:{width:1000}, ease:Quad.easeInOut}));

	//Paralax du nabaztag et de l'iphone
	controller.addTween(
		'#aujourdhui-title',
		(new TimelineLite())
			.append([
				TweenMax.fromTo($('#aujourdhui-nabaztag'), 1, 
					{css:{top: 50}, immediateRender:true}, 
					{css:{top: -100}}),
				TweenMax.fromTo($('#aujourdhui-iphone'), 1, 
					{css:{top: -500}, immediateRender:true}, 
					{css:{top: -730}}),
			]),
		800 // scroll duration of tween
	);
	
	//texte 1
	//controller.addTween('#aujourdhui-texte1', TweenMax.fromTo( $('#aujourdhui-texte1 img'), 1.5, {css:{width:0}, immediateRender:true, ease:Back.easeOut}, {css:{width:501}, ease:Quad.easeInOut}),0,-100);
	
	//nabaztag nuage
	controller.addTween('#aujourdhui-texte1', TweenMax.fromTo( $('#nuage-nabaztag'), 2, {css:{top:-1400}, immediateRender:true, ease:Back.easeOut}, {css:{top:-2140}, ease:Quad.easeOut}),500);
	
	controller.addTween(
		3600,
		(new TimelineLite())
			.append([
				TweenMax.fromTo($('#aujourdhui-raquette'), 1, 
					{css:{top: -700}, immediateRender:true}, 
					{css:{top: -1000}}),
				TweenMax.fromTo($('#aujourdhui-chaussure'), 1, 
					{css:{top: -1200}, immediateRender:true}, 
					{css:{top: -1600}}),
			]),
		800 // scroll duration of tween
	);
	
	//babyfoot img
	controller.addTween('#aujourdhui-babyfoot', TweenMax.fromTo( $('#aujourdhui-babyfoot'), 2, {css:{top:-2500}, immediateRender:true, ease:Back.easeOut}, {css:{top:-2230}, ease:Quad.easeOut}),500);
	
	//brosse img
	controller.addTween('#aujourdhui-babyfoot', TweenMax.fromTo( $('#aujourdhui-brosse'), 2, {css:{top:-2200, opacity:0}, immediateRender:true, ease:Back.easeOut}, {css:{top:-2600, opacity:1}, ease:Quad.easeOut}),500);
	
	//bouteille img
	controller.addTween('#aujourdhui-brosse', TweenMax.fromTo( $('#aujourdhui-bouteille'), 2, {css:{top:-2800}, immediateRender:true, ease:Back.easeOut}, {css:{top:-3100}, ease:Quad.easeOut}),700);
	
	//nike img
	controller.addTween('#aujourdhui-bouteille', TweenMax.fromTo( $('#aujourdhui-nike'), 2, {css:{top:-3350}, immediateRender:true, ease:Back.easeOut}, {css:{top:-3590}, ease:Quad.easeOut}),500);
	
	//balance img
	controller.addTween('#aujourdhui-bouteille', TweenMax.fromTo( $('#aujourdhui-balance'), 2, {css:{rotation:0, top:-3200, opacity:0}, immediateRender:true, ease:Back.easeOut}, {css:{rotation:360, top:-3660, opacity:1}, ease:Quad.easeOut}),0,400);
	
	//tv img
	controller.addTween('#aujourdhui-tv', TweenMax.fromTo( $('#aujourdhui-tv'), 2, {css:{rotation:0, top:-4250}, immediateRender:true, ease:Back.easeOut}, {css:{rotation:20, top:-4360}, ease:Quad.easeOut}),300);
	
	//oeil img
	controller.addTween('#aujourdhui-balance', TweenMax.fromTo( $('#aujourdhui-oeil'), 2, {css:{top:-4000}, immediateRender:true, ease:Back.easeOut}, {css:{ top:-4255}, ease:Quad.easeOut}),800);

	//Paralax des objets derrière la machine 
	controller.addTween(
		'#transition-machine',
		(new TimelineLite())
			.append([
				TweenMax.fromTo($('#spirale-machine'), 1, 
					{css:{top: -330}, immediateRender:true}, 
					{css:{top: -600}}),
				TweenMax.fromTo($('#eclair-machine'), 1, 
					{css:{top: 200}, immediateRender:true}, 
					{css:{top: -200}}),
				TweenMax.fromTo($('#nuage-machine'), 1, 
					{css:{top: -200}, immediateRender:true}, 
					{css:{top: -600}})
			]),
		1100 // scroll duration of tween
	);
	
	//PARTIE DEMAIN
	
	//animation de la ligne de vie demain et de ses textes
	//horizontal 3
	controller.addTween('#demain-ldvh-3', TweenMax.fromTo( $('#demain-ldvh-3 img'), 0.5, {css:{left:193}, immediateRender:true, ease:Back.easeOut}, {css:{left:0}, ease:Quad.easeInOut}));
	//horizontal 2
	controller.addTween('#demain-ldvh-2', TweenMax.fromTo( $('#demain-ldvh-2'), 1.5, {css:{width:0}, immediateRender:true, ease:Back.easeOut}, {css:{width:628}, ease:Quad.easeInOut}),0,-200);
	//vertical 2
	controller.addTween('#demain-ldvh-2', TweenMax.fromTo( $('#demain-lignedevie-vertical'), 5, {css:{height:1268}, immediateRender:true, ease:Back.easeOut}, {css:{height:2894}, ease:Quad.easeInOut}));
	//texte fin bout
	controller.addTween('#demain-ldvh-2', TweenMax.fromTo( $('#demain-collectivite-texte'), 1, {css:{opacity:0}, immediateRender:true, ease:Back.easeOut}, {css:{opacity:1}, ease:Quad.easeInOut}),0,-200);
	//verticale fin bout
	controller.addTween('#demain-ldvh-2', TweenMax.fromTo( $('#demain-lignedevie-vertical'), 0.5, {css:{height:1121}, immediateRender:true, ease:Back.easeOut}, {css:{height:1268}, ease:Quad.easeInOut}),0,-200);
	//texte bout 5
	controller.addTween('#demain-ldvh-bout5', TweenMax.fromTo( $('#demain-telecommunication-texte'), 1, {css:{opacity:0}, immediateRender:true, ease:Back.easeOut}, {css:{opacity:1}, ease:Quad.easeInOut}),0,-200);
	//horizontal bout 5
	controller.addTween('#demain-ldvh-bout5', TweenMax.fromTo( $('#demain-ldvh-bout5'), 0.5, {css:{width:0}, immediateRender:true, ease:Back.easeOut}, {css:{width:78}, ease:Quad.easeInOut}),0,-200);
	//verticale bout 5
	controller.addTween('#demain-ldvh-bout5', TweenMax.fromTo( $('#demain-lignedevie-vertical'), 0.5, {css:{height:1010}, immediateRender:true, ease:Back.easeOut}, {css:{height:1121}, ease:Quad.easeInOut}),0,-200);
	//texte bout 4
	controller.addTween('#demain-ldvh-bout4', TweenMax.fromTo( $('#demain-sante-texte'), 1, {css:{opacity:0}, immediateRender:true, ease:Back.easeOut}, {css:{opacity:1}, ease:Quad.easeInOut}),0,-200);
	//horizontal bout 4
	controller.addTween('#demain-ldvh-bout4', TweenMax.fromTo( $('#demain-ldvh-bout4'), 0.5, {css:{width:0}, immediateRender:true, ease:Back.easeOut}, {css:{width:78}, ease:Quad.easeInOut}),0,-200);
	//verticale bout 4
	controller.addTween('#demain-ldvh-bout4', TweenMax.fromTo( $('#demain-lignedevie-vertical'), 0.5, {css:{height:885}, immediateRender:true, ease:Back.easeOut}, {css:{height:1010}, ease:Quad.easeInOut}),0,-200);
	//texte bout 3
	controller.addTween('#demain-ldvh-bout3', TweenMax.fromTo( $('#demain-banque-texte'), 1, {css:{opacity:0}, immediateRender:true, ease:Back.easeOut}, {css:{opacity:1}, ease:Quad.easeInOut}),0,-200);
	//horizontal bout 3
	controller.addTween('#demain-ldvh-bout3', TweenMax.fromTo( $('#demain-ldvh-bout3'), 0.5, {css:{width:0}, immediateRender:true, ease:Back.easeOut}, {css:{width:78}, ease:Quad.easeInOut}),0,-200);
	//verticale bout 3
	controller.addTween('#demain-ldvh-bout3', TweenMax.fromTo( $('#demain-lignedevie-vertical'), 0.5, {css:{height:766}, immediateRender:true, ease:Back.easeOut}, {css:{height:885}, ease:Quad.easeInOut}),0,-200);
	//texte bout 2
	controller.addTween('#demain-ldvh-bout2', TweenMax.fromTo( $('#demain-industrie-texte'), 1, {css:{opacity:0}, immediateRender:true, ease:Back.easeOut}, {css:{opacity:1}, ease:Quad.easeInOut}),0,-200);
	//horizontal bout 2
	controller.addTween('#demain-ldvh-bout2', TweenMax.fromTo( $('#demain-ldvh-bout2'), 0.5, {css:{width:0}, immediateRender:true, ease:Back.easeOut}, {css:{width:78}, ease:Quad.easeInOut}),0,-200);
	//verticale bout 2
	controller.addTween('#demain-ldvh-bout2', TweenMax.fromTo( $('#demain-lignedevie-vertical'), 0.5, {css:{height:670}, immediateRender:true, ease:Back.easeOut}, {css:{height:766}, ease:Quad.easeInOut}),0,-200);
	//texte bout 1
	controller.addTween('#demain-ldvh-bout1', TweenMax.fromTo( $('#demain-energie-texte'), 1, {css:{opacity:0}, immediateRender:true, ease:Back.easeOut}, {css:{opacity:1}, ease:Quad.easeInOut}),0,-200);
	//horizontal bout 1
	controller.addTween('#demain-ldvh-bout1', TweenMax.fromTo( $('#demain-ldvh-bout1'), 0.5, {css:{width:0}, immediateRender:true, ease:Back.easeOut}, {css:{width:78}, ease:Quad.easeInOut}),0,-200);
	//verticale bout 1
	controller.addTween('#demain-ldvh-bout1', TweenMax.fromTo( $('#demain-lignedevie-vertical'), 0.5, {css:{height:520}, immediateRender:true, ease:Back.easeOut}, {css:{height:670}, ease:Quad.easeInOut}),0,-300);
	//horizontal 1
	controller.addTween('#demain-ldvh-1', TweenMax.fromTo( $('#demain-ldvh-1 img'), 1.5, {css:{left:489}, immediateRender:true, ease:Back.easeOut}, {css:{left:0}, ease:Quad.easeInOut}),0,-200);
	//début ligne de vie
	controller.addTween('#demain-lignedevie-vertical', TweenMax.fromTo( $('#demain-lignedevie-vertical'), 1.5, {css:{height:0}, immediateRender:true, ease:Back.easeOut}, {css:{height:520}, ease:Quad.easeInOut}));


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