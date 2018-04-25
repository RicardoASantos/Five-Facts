$(document).ready(function() {

	$('#logo h1').delay( 1200 ).animate({fontSize:'15vw', marginTop:'46vw', lineHeight:'12vw', marginLeft:'15vw'},800);
	$('#logo h1 strong').delay( 1200 ).animate({fontSize:'20vw'},800);
	$('#logo').delay( 1200 ).animate({top:'-40vw'},800, function (){

		$('#monitor').animate({marginLeft:'0'},800);
		$('#eng a').animate({top:'5vw'},800);
		$('#pt').animate({top:'5vw'},800);
		$('#menu').animate({marginTop:'88vh'},800);

		var inputDate41 = new Date("04/25/2018");
		var inputDate42 = new Date("04/26/2018");
		var inputDate43 = new Date("04/27/2018");
		var inputDate44 = new Date("04/28/2018");
		var inputDate45 = new Date("04/29/2018");
		var inputDate46 = new Date("04/30/2018");
		var inputDate47 = new Date("05/01/2018");
		var inputDate48 = new Date("05/02/2018");
		var inputDate49 = new Date("05/03/2018");
		var inputDate50 = new Date("05/04/2018");
		var inputDate51 = new Date("05/05/2018");
		var inputDate52 = new Date("05/06/2018");
		var inputDate53 = new Date("05/07/2018");
		var inputDate54 = new Date("05/08/2018");
		var inputDate55 = new Date("05/09/2018");
		var inputDate56 = new Date("05/10/2018");
		var inputDate57 = new Date("05/11/2018");
		var inputDate58 = new Date("05/12/2018");
		var inputDate59 = new Date("05/13/2018");
		var inputDate60 = new Date("05/14/2018");
		var inputDate61 = new Date("05/15/2018");
		var inputDate62 = new Date("05/16/2018");
		var inputDate63 = new Date("05/17/2018");
		var inputDate64 = new Date("05/18/2018");
		var inputDate65 = new Date("05/19/2018");
		var inputDate66 = new Date("05/20/2018");
		var inputDate67 = new Date("05/21/2018");
		var inputDate68 = new Date("05/22/2018");
		var inputDate69 = new Date("05/23/2018");
		var inputDate70 = new Date("05/24/2018");
		var inputDate71 = new Date("05/25/2018");
		var inputDate72 = new Date("05/26/2018");
		var inputDate73 = new Date("05/27/2018");
		var inputDate74 = new Date("05/28/2018");
		var inputDate75 = new Date("05/29/2018");
		var inputDate76 = new Date("05/30/2018");
		var inputDate77 = new Date("06/31/2018");
		var inputDate78 = new Date("06/01/2018");
		var inputDate79 = new Date("06/02/2018");
		var inputDate80 = new Date("06/03/2018");
		var inputDate81 = new Date("06/04/2018");
		var inputDate82 = new Date("06/05/2018");
		var inputDate83 = new Date("06/06/2018");
		var inputDate84 = new Date("06/05/2018");
		var inputDate85 = new Date("06/08/2018");
		var inputDate86 = new Date("06/09/2018");
		var inputDate87 = new Date("06/10/2018");
		var inputDate88 = new Date("06/11/2018");
		var inputDate89 = new Date("06/12/2018");
		var inputDate90 = new Date("06/13/2018");
		var inputDate91 = new Date("06/14/2018");
		var inputDate92 = new Date("06/15/2018");
		var inputDate93 = new Date("06/16/2018");
		var inputDate94 = new Date("06/17/2018");
		var inputDate95 = new Date("06/18/2018");
		var inputDate96 = new Date("06/19/2018");
		var inputDate97 = new Date("06/20/2018");
		var inputDate98 = new Date("06/21/2018");
		var inputDate99 = new Date("06/22/2018");
		var inputDate100 = new Date("06/23/2018");
		var inputDate101 = new Date("06/24/2018");
		var inputDate102 = new Date("06/25/2018");


		var todaysDate = new Date();

			$('#logo').click(function(){

				if ( $('#ficha_tecn').css('top') <= '-99vw' ) {

				$('#top').animate({top:'90vh'},700);
				$('#logo').animate({top:'78vh'},700);
				$('#logo h1').animate({marginTop:'7vh'},700);
				$('#ficha_tecn').animate({top:'0vh'},700);
				$('#logo').addClass('fich_tecn');
				$('#logo').removeClass('logo');

				} else {

				$('#top').animate({top:'0vh'},700);
				$('#logo').animate({top:'-40vw'},700);
				$('#logo h1').animate({marginTop:'46vw'},700);
				$('#ficha_tecn').animate({top:'-100vh'},700);
				$('#logo').removeClass('fich_tecn');

				}

			});

			$("#ecra").on("swiperight",function(){

				if ( $('#monitor').css('marginLeft') >= '-99vw' ) {

					$('#monitor').animate({marginLeft:'10vw'},250, function (){

						$('#monitor').animate({marginLeft:'0vw'},400);

						});
					$('#menu li').removeClass('menu_active');
					$('#menu li').eq(0).addClass('menu_active');

				} else {

				var index = $('.menu_active').index() -1;

				$('#monitor').animate({marginLeft:'+=100vw'},500);
				$('#menu li').removeClass('menu_active');
				$('#menu li').eq(index).addClass('menu_active');

				}

			});

			var d = new Date();
			var hrs = d.getHours();

				if (inputDate41.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("No mês prévio aos Jogos Olímpicos da Grécia Antiga, todas as guerras eram proibidas ou suspensas.");
				$('#1 a').attr('href','http://www.ancient.eu/Olympic_Games/');

				} else if (inputDate41.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("No mês prévio aos Jogos Olímpicos da Grécia Antiga, todas as guerras eram proibidas ou suspensas.");
				$('#1 a').attr('href','http://www.ancient.eu/Olympic_Games/');

				$('#2 p').text("O rover “Opportunity” da NASA continua a recolher e enviar informação de Marte passados 12 anos.");
				$('#2 a').attr('href','https://en.wikipedia.org/wiki/Opportunity_mission_timeline');

				} else if (inputDate41.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("No mês prévio aos Jogos Olímpicos da Grécia Antiga, todas as guerras eram proibidas ou suspensas.");
				$('#1 a').attr('href','http://www.ancient.eu/Olympic_Games/');

				$('#2 p').text("O rover “Opportunity” da NASA continua a recolher e enviar informação de Marte passados 12 anos.");
				$('#2 a').attr('href','https://en.wikipedia.org/wiki/Opportunity_mission_timeline');

				$('#3 p').text("Todos os anos, mais de 10,000 contentores caem dos navios para os Oceanos.");
				$('#3 a').attr('href','http://phys.org/news/2011-03-scientists-effects-shipping-lost-sea.html');

				} else if (inputDate41.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("No mês prévio aos Jogos Olímpicos da Grécia Antiga, todas as guerras eram proibidas ou suspensas.");
				$('#1 a').attr('href','http://www.ancient.eu/Olympic_Games/');

				$('#2 p').text("O rover “Opportunity” da NASA continua a recolher e enviar informação de Marte passados 12 anos.");
				$('#2 a').attr('href','https://en.wikipedia.org/wiki/Opportunity_mission_timeline');

				$('#3 p').text("Todos os anos, mais de 10,000 contentores caem dos navios para os Oceanos.");
				$('#3 a').attr('href','http://phys.org/news/2011-03-scientists-effects-shipping-lost-sea.html');

				$('#4 p').text("O último Presidente dos Estados Unidos com barba foi o Presidente Benjamin Harrison, há 130 anos.");
				$('#4 a').attr('href','https://en.wikipedia.org/wiki/Benjamin_Harrison');

				} else if (inputDate41.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate42.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("No mês prévio aos Jogos Olímpicos da Grécia Antiga, todas as guerras eram proibidas ou suspensas.");
				$('#1 a').attr('href','http://www.ancient.eu/Olympic_Games/');

				$('#2 p').text("O rover “Opportunity” da NASA continua a recolher e enviar informação de Marte passados 12 anos.");
				$('#2 a').attr('href','https://en.wikipedia.org/wiki/Opportunity_mission_timeline');

				$('#3 p').text("Todos os anos, mais de 10,000 contentores caem dos navios para os Oceanos.");
				$('#3 a').attr('href','http://phys.org/news/2011-03-scientists-effects-shipping-lost-sea.html');

				$('#4 p').text("O último Presidente dos Estados Unidos com barba foi o Presidente Benjamin Harrison, há 130 anos.");
				$('#4 a').attr('href','https://en.wikipedia.org/wiki/Benjamin_Harrison');

				$('#5 p').text("Os livros de Ética têm mais 50% de probabilidade de serem roubados das bibliotecas que os outros livros.");
				$('#5 a').attr('href','http://www.theguardian.com/education/2010/dec/13/ethics-study-steal-books-moral');

				} else if (inputDate42.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("O olho humano é tão sensível, que se a Terra fosse plana, conseguiria detetar uma vela acesa a 15km de distância.");
				$('#1 a').attr('href','http://www.livescience.com/33895-human-eye.html');

				} else if (inputDate42.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("O olho humano é tão sensível, que se a Terra fosse plana, conseguiria detetar uma vela acesa a 15km de distância.");
				$('#1 a').attr('href','http://www.livescience.com/33895-human-eye.html');

				$('#2 p').text("Apesar de ser o terceiro maior país do mundo, a China só possui um fuso horário.");
				$('#2 a').attr('href','http://www.timeanddate.com/worldclock/china/lhasa');

				} else if (inputDate42.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("O olho humano é tão sensível, que se a Terra fosse plana, conseguiria detetar uma vela acesa a 15km de distância.");
				$('#1 a').attr('href','http://www.livescience.com/33895-human-eye.html');

				$('#2 p').text("Apesar de ser o terceiro maior país do mundo, a China só possui um fuso horário.");
				$('#2 a').attr('href','http://www.timeanddate.com/worldclock/china/lhasa');

				$('#3 p').text("A maioria dos organismos produzem a sua própria vitamina C. Os humanos são das poucas espécies que não a sintetizam.");
				$('#3 a').attr('href','https://en.wikipedia.org/wiki/Vitamin_C');

				} else if (inputDate42.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("O olho humano é tão sensível, que se a Terra fosse plana, conseguiria detetar uma vela acesa a 15km de distância.");
				$('#1 a').attr('href','http://www.livescience.com/33895-human-eye.html');

				$('#2 p').text("Apesar de ser o terceiro maior país do mundo, a China só possui um fuso horário.");
				$('#2 a').attr('href','http://www.timeanddate.com/worldclock/china/lhasa');

				$('#3 p').text("A maioria dos organismos produzem a sua própria vitamina C. Os humanos são das poucas espécies que não a sintetizam.");
				$('#3 a').attr('href','https://en.wikipedia.org/wiki/Vitamin_C');

				$('#4 p').text("Só um dos filmes do Harry Potter não consta na lista dos 50 filmes com mais lucro de sempre.");
				$('#4 a').attr('href','https://en.wikipedia.org/wiki/Harry_Potter_%28film_series%29');

				} else if (inputDate42.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate43.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("O olho humano é tão sensível, que se a Terra fosse plana, conseguiria detetar uma vela acesa a 15km de distância.");
				$('#1 a').attr('href','http://www.livescience.com/33895-human-eye.html');

				$('#2 p').text("Apesar de ser o terceiro maior país do mundo, a China só possui um fuso horário.");
				$('#2 a').attr('href','http://www.timeanddate.com/worldclock/china/lhasa');

				$('#3 p').text("A maioria dos organismos produzem a sua própria vitamina C. Os humanos são das poucas espécies que não a sintetizam.");
				$('#3 a').attr('href','https://en.wikipedia.org/wiki/Vitamin_C');

				$('#4 p').text("Só um dos filmes do Harry Potter não consta na lista dos 50 filmes com mais lucro de sempre.");
				$('#4 a').attr('href','https://en.wikipedia.org/wiki/Harry_Potter_%28film_series%29');

				$('#5 p').text("As abelhas podem produzir o seu próprio calor, e como tal conseguem viver em climas extremos, como o Ártico.");
				$('#5 a').attr('href','http://www.fs.usda.gov/Internet/FSE_DOCUMENTS/stelprdb5306468.pdf');

				} else if (inputDate43.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("A pessoa mais velha alguma vez filmada nasceu em 1791 e foi filmada em 1905.");
				$('#1 a').attr('href','http://mentalfloss.com/article/68977/footage-shows-earliest-born-person-ever-captured-film');

				} else if (inputDate43.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("A pessoa mais velha alguma vez filmada nasceu em 1791 e foi filmada em 1905.");
				$('#1 a').attr('href','http://mentalfloss.com/article/68977/footage-shows-earliest-born-person-ever-captured-film');

				$('#2 p').text("Uma empresa familiar produz mais de 80% das óstias dos EUA.");
				$('#2 a').attr('href','http://www.nytimes.com/2008/12/25/business/smallbusiness/25sbiz.html?_r=0');

				} else if (inputDate43.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("A pessoa mais velha alguma vez filmada nasceu em 1791 e foi filmada em 1905.");
				$('#1 a').attr('href','http://mentalfloss.com/article/68977/footage-shows-earliest-born-person-ever-captured-film');

				$('#2 p').text("Uma empresa familiar produz mais de 80% das óstias dos EUA.");
				$('#2 a').attr('href','http://www.nytimes.com/2008/12/25/business/smallbusiness/25sbiz.html?_r=0');

				$('#3 p').text("Os pôr-do-sol em Marte são azuis.");
				$('#3 a').attr('href','https://www.youtube.com/watch?v=xGa9VErg-Ak&feature=youtu.be');

				} else if (inputDate43.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("A pessoa mais velha alguma vez filmada nasceu em 1791 e foi filmada em 1905.");
				$('#1 a').attr('href','http://mentalfloss.com/article/68977/footage-shows-earliest-born-person-ever-captured-film');

				$('#2 p').text("Uma empresa familiar produz mais de 80% das óstias dos EUA.");
				$('#2 a').attr('href','http://www.nytimes.com/2008/12/25/business/smallbusiness/25sbiz.html?_r=0');

				$('#3 p').text("Os pôr-do-sol em Marte são azuis.");
				$('#3 a').attr('href','https://www.youtube.com/watch?v=xGa9VErg-Ak&feature=youtu.be');

				$('#4 p').text("A data de validade das garrafas de água referem-se ao plástico da garrafa e não à água em si.");
				$('#4 a').attr('href','http://www.livescience.com/32636-why-do-bottles-of-water-have-expiration-dates-.html');

				} else if (inputDate43.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate44.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("A pessoa mais velha alguma vez filmada nasceu em 1791 e foi filmada em 1905.");
				$('#1 a').attr('href','http://mentalfloss.com/article/68977/footage-shows-earliest-born-person-ever-captured-film');

				$('#2 p').text("Uma empresa familiar produz mais de 80% das óstias dos EUA.");
				$('#2 a').attr('href','http://www.nytimes.com/2008/12/25/business/smallbusiness/25sbiz.html?_r=0');

				$('#3 p').text("Os pôr-do-sol em Marte são azuis.");
				$('#3 a').attr('href','https://www.youtube.com/watch?v=xGa9VErg-Ak&feature=youtu.be');

				$('#4 p').text("A data de validade das garrafas de água referem-se ao plástico da garrafa e não à água em si.");
				$('#4 a').attr('href','http://www.livescience.com/32636-why-do-bottles-of-water-have-expiration-dates-.html');

				$('#5 p').text("É possível adormecer enquanto se corre.");
				$('#5 a').attr('href','http://www.grindtv.com/culture/dean-karnazes-falls-asleep-running/');

				} else 	if (inputDate44.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("Os cães reconhecem os seus donos humanos como os machos alfa do grupo.");
				$('#1 a').attr('href','http://iheartdogs.com/ask-a-vet-why-does-my-dog-stare-at-me-when-he-poops/');

				} else if (inputDate44.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("Os cães reconhecem os seus donos humanos como os machos alfa do grupo.");
				$('#1 a').attr('href','http://iheartdogs.com/ask-a-vet-why-does-my-dog-stare-at-me-when-he-poops/');

				$('#2 p').text("A comida não se estraga nem apodrece no fundo dos oceanos.");
				$('#2 a').attr('http://www.smithsonianmag.com/arts-culture/what-sunken-sandwiches-tell-us-about-the-future-of-food-storage-102837326/?no-ist');

				} else if (inputDate44.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("Os cães reconhecem os seus donos humanos como os machos alfa do grupo.");
				$('#1 a').attr('href','http://iheartdogs.com/ask-a-vet-why-does-my-dog-stare-at-me-when-he-poops/');

				$('#2 p').text("A comida não se estraga nem apodrece no fundo dos oceanos.");
				$('#2 a').attr('http://www.smithsonianmag.com/arts-culture/what-sunken-sandwiches-tell-us-about-the-future-of-food-storage-102837326/?no-ist');

				$('#3 p').text("Existem fotos de veteranos que lutaram nos exércitos de Napoleão.");
				$('#3 a').attr('href','http://mashable.com/2014/10/27/napoleonic-wars-veterans/');

				} else if (inputDate44.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("Os cães reconhecem os seus donos humanos como os machos alfa do grupo.");
				$('#1 a').attr('href','http://iheartdogs.com/ask-a-vet-why-does-my-dog-stare-at-me-when-he-poops/');

				$('#2 p').text("A comida não se estraga nem apodrece no fundo dos oceanos.");
				$('#2 a').attr('http://www.smithsonianmag.com/arts-culture/what-sunken-sandwiches-tell-us-about-the-future-of-food-storage-102837326/?no-ist');

				$('#3 p').text("Existem fotos de veteranos que lutaram nos exércitos de Napoleão.");
				$('#3 a').attr('href','http://mashable.com/2014/10/27/napoleonic-wars-veterans/');

				$('#4 p').text("As rotundas reduzem os acidentes de carro em 75% quando comparadas com sinais de STOP.");
				$('#4 a').attr('href','http://www.wsdot.wa.gov/Safety/roundabouts/benefits.htm');

				} else if (inputDate44.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate45.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("Os cães reconhecem os seus donos humanos como os machos alfa do grupo.");
				$('#1 a').attr('href','http://iheartdogs.com/ask-a-vet-why-does-my-dog-stare-at-me-when-he-poops/');

				$('#2 p').text("A comida não se estraga nem apodrece no fundo dos oceanos.");
				$('#2 a').attr('http://www.smithsonianmag.com/arts-culture/what-sunken-sandwiches-tell-us-about-the-future-of-food-storage-102837326/?no-ist');

				$('#3 p').text("Existem fotos de veteranos que lutaram nos exércitos de Napoleão.");
				$('#3 a').attr('href','http://mashable.com/2014/10/27/napoleonic-wars-veterans/');

				$('#4 p').text("As rotundas reduzem os acidentes de carro em 75% quando comparadas com sinais de STOP.");
				$('#4 a').attr('href','http://www.wsdot.wa.gov/Safety/roundabouts/benefits.htm');

				$('#5 p').text("John Rockefeller se fosse vivo, teria dez vezes mais dinheiro que Bill Gates.");
				$('#5 a').attr('href','http://www.cheatsheet.com/personal-finance/the-10-richest-people-of-all-time.html/?a=viewall');

				} else if (inputDate45.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("Algumas pessoas surdas apreciam música através das vibrações.");
				$('#1 a').attr('href','http://www.nvrc.org/2013/11/deaf-people-can-hear-music/');

				} else if (inputDate45.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("Algumas pessoas surdas apreciam música através das vibrações.");
				$('#1 a').attr('href','http://www.nvrc.org/2013/11/deaf-people-can-hear-music/');

				$('#2 p').text("A famosa cidade de Veneza é constituída por 117 ilhas submersas.");
				$('#2 a').attr('href','https://en.wikipedia.org/wiki/Venice');

				} else if (inputDate45.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("Algumas pessoas surdas apreciam música através das vibrações.");
				$('#1 a').attr('href','http://www.nvrc.org/2013/11/deaf-people-can-hear-music/');

				$('#2 p').text("A famosa cidade de Veneza é constituída por 117 ilhas submersas.");
				$('#2 a').attr('href','https://en.wikipedia.org/wiki/Venice');

				$('#3 p').text("O típico homem solteiro troca os seus lençóis apenas 4 vezes por ano.");
				$('#3 a').attr('href','http://metro.co.uk/2013/08/21/men-wash-their-sheets-four-times-a-year-new-survey-claims-3933231/');

				} else if (inputDate45.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("Algumas pessoas surdas apreciam música através das vibrações.");
				$('#1 a').attr('href','http://www.nvrc.org/2013/11/deaf-people-can-hear-music/');

				$('#2 p').text("A famosa cidade de Veneza é constituída por 117 ilhas submersas.");
				$('#2 a').attr('href','https://en.wikipedia.org/wiki/Venice');

				$('#3 p').text("O típico homem solteiro troca os seus lençóis apenas 4 vezes por ano.");
				$('#3 a').attr('href','http://metro.co.uk/2013/08/21/men-wash-their-sheets-four-times-a-year-new-survey-claims-3933231/');

				$('#4 p').text("É possível adestrar animais selvagens para que não nos ataquem, mas a domesticação é feita através de gerações.");
				$('#4 a').attr('href','http://www.popsci.com/science/article/2012-10/fyi-domesticated-foxes');

				} else if (inputDate45.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate46.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("Algumas pessoas surdas apreciam música através das vibrações.");
				$('#1 a').attr('href','http://www.nvrc.org/2013/11/deaf-people-can-hear-music/');

				$('#2 p').text("A famosa cidade de Veneza é constituída por 117 ilhas submersas.");
				$('#2 a').attr('href','https://en.wikipedia.org/wiki/Venice');

				$('#3 p').text("O típico homem solteiro troca os seus lençóis apenas 4 vezes por ano.");
				$('#3 a').attr('href','http://metro.co.uk/2013/08/21/men-wash-their-sheets-four-times-a-year-new-survey-claims-3933231/');

				$('#4 p').text("É possível adestrar animais selvagens para que não nos ataquem, mas a domesticação é feita através de gerações.");
				$('#4 a').attr('href','http://www.popsci.com/science/article/2012-10/fyi-domesticated-foxes');

				$('#5 p').text("É proibido em NYC obrigar um homem a usar gravata no trabalho se não se obrigar as mulheres a fazê-lo.");
				$('#5 a').attr('href','http://www1.nyc.gov/office-of-the-mayor/news/961-15/nyc-commission-human-rights-strong-protections-city-s-transgender-gender');

				} else if (inputDate46.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("Esquilos plantam milhares de árvores por se esquecerem de onde deixaram as suas bolotas.");
				$('#1 a').attr('href','http://wildlifejack.com/blogs/fun-facts-offers/20222851-who-plants-more-trees-people-or-squirrels');

				} else if (inputDate46.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("Esquilos plantam milhares de árvores por se esquecerem de onde deixaram as suas bolotas.");
				$('#1 a').attr('href','http://wildlifejack.com/blogs/fun-facts-offers/20222851-who-plants-more-trees-people-or-squirrels');

				$('#2 p').text("Um polvo recém-nascido é do tamanho de uma pulga.");
				$('#2 a').attr('href','http://www.amazingandweird.com/animals/a-baby-octopus-is-about-the-size-of-a-flea-when-it-is-born/');

				} else if (inputDate46.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("Esquilos plantam milhares de árvores por se esquecerem de onde deixaram as suas bolotas.");
				$('#1 a').attr('href','http://wildlifejack.com/blogs/fun-facts-offers/20222851-who-plants-more-trees-people-or-squirrels');

				$('#2 p').text("Um polvo recém-nascido é do tamanho de uma pulga.");
				$('#2 a').attr('href','http://www.amazingandweird.com/animals/a-baby-octopus-is-about-the-size-of-a-flea-when-it-is-born/');

				$('#3 p').text("Os cidadãos da Coreia do Norte que fogem para a Coreia do Sul recebem automaticamente nacionalidade e passaporte sul-coreanos.");
				$('#3 a').attr('href','https://en.wikipedia.org/wiki/Citizenship_in_North_Korea');

				} else if (inputDate46.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("Esquilos plantam milhares de árvores por se esquecerem de onde deixaram as suas bolotas.");
				$('#1 a').attr('href','http://wildlifejack.com/blogs/fun-facts-offers/20222851-who-plants-more-trees-people-or-squirrels');

				$('#2 p').text("Um polvo recém-nascido é do tamanho de uma pulga.");
				$('#2 a').attr('href','http://www.amazingandweird.com/animals/a-baby-octopus-is-about-the-size-of-a-flea-when-it-is-born/');

				$('#3 p').text("Os cidadãos da Coreia do Norte que fogem para a Coreia do Sul recebem automaticamente nacionalidade e passaporte sul-coreanos.");
				$('#3 a').attr('href','https://en.wikipedia.org/wiki/Citizenship_in_North_Korea');

				$('#4 p').text("Em 2017 existirão mais pessoas com 65 anos do que crianças com 5.");	
				$('#4 a').attr('href','http://www.npr.org/sections/thetwo-way/2009/07/oldest_old_are_worlds_fastest.html');

				} else if (inputDate46.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate47.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("Esquilos plantam milhares de árvores por se esquecerem de onde deixaram as suas bolotas.");
				$('#1 a').attr('href','http://wildlifejack.com/blogs/fun-facts-offers/20222851-who-plants-more-trees-people-or-squirrels');

				$('#2 p').text("Um polvo recém-nascido é do tamanho de uma pulga.");
				$('#2 a').attr('href','http://www.amazingandweird.com/animals/a-baby-octopus-is-about-the-size-of-a-flea-when-it-is-born/');

				$('#3 p').text("Os cidadãos da Coreia do Norte que fogem para a Coreia do Sul recebem automaticamente nacionalidade e passaporte sul-coreanos.");
				$('#3 a').attr('href','https://en.wikipedia.org/wiki/Citizenship_in_North_Korea');

				$('#4 p').text("Em 2017 existirão mais pessoas com 65 anos do que crianças com 5.");
				$('#4 a').attr('href','http://www.npr.org/sections/thetwo-way/2009/07/oldest_old_are_worlds_fastest.html');

				$('#5 p').text("A capacidade de crescer barba é diretamente proporcional à probabilidade de ficar careca.");
				$('#5 a').attr('href','http://beardcoach.com/2009/11/why-you-have-a-patchy-beard/');

				} else 	if (inputDate47.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("Há 241 triliões de dólares em todo o mundo. Desses 200 são dívidas.");
				$('#1 a').attr('href','http://waitbutwhy.com/2014/03/combined-wealth-world.html');

				} else if (inputDate47.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("Há 241 triliões de dólares em todo o mundo. Desses 200 são dívidas.");
				$('#1 a').attr('href','http://waitbutwhy.com/2014/03/combined-wealth-world.html');

				$('#2 p').text("Apenas 11% dos kamikaze atingiam o seu alvo.");
				$('#2 a').attr('http://thefairjilt.com/2014/11/05/kamikaze-attacks-by-the-numbers-a-statistical-analysis-of-japans-wartime-strategy/');

				} else if (inputDate47.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("Há 241 triliões de dólares em todo o mundo. Desses 200 são dívidas.");
				$('#1 a').attr('href','http://waitbutwhy.com/2014/03/combined-wealth-world.html');

				$('#2 p').text("Apenas 11% dos kamikaze atingiam o seu alvo.");
				$('#2 a').attr('http://thefairjilt.com/2014/11/05/kamikaze-attacks-by-the-numbers-a-statistical-analysis-of-japans-wartime-strategy/');

				$('#3 p').text("Sean Connery usou peruca em todos os seus filmes do James Bond. O actor começou a ficar careca aos 21 anos.");
				$('#3 a').attr('href','https://en.wikipedia.org/wiki/Sean_Connery#James_Bond:_1962.E2.80.9371.2C_1983');

				} else if (inputDate47.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("Há 241 triliões de dólares em todo o mundo. Desses 200 são dívidas.");
				$('#1 a').attr('href','http://waitbutwhy.com/2014/03/combined-wealth-world.html');

				$('#2 p').text("Apenas 11% dos kamikaze atingiam o seu alvo.");
				$('#2 a').attr('http://thefairjilt.com/2014/11/05/kamikaze-attacks-by-the-numbers-a-statistical-analysis-of-japans-wartime-strategy/');

				$('#3 p').text("Sean Connery usou peruca em todos os seus filmes do James Bond. O actor começou a ficar careca aos 21 anos.");
				$('#3 a').attr('href','https://en.wikipedia.org/wiki/Sean_Connery#James_Bond:_1962.E2.80.9371.2C_1983');

				$('#4 p').text("O típico adulto Americano passa 10 horas por dia em frente ao computador.");
				$('#4 a').attr('href','http://statpedia.com/view/daf91748-c5e0-4dfe-b41c-4b39abbfbb37');

				} else if (inputDate47.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate48.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("Há 241 triliões de dólares em todo o mundo. Desses 200 são dívidas.");
				$('#1 a').attr('href','http://waitbutwhy.com/2014/03/combined-wealth-world.html');

				$('#2 p').text("Apenas 11% dos kamikaze atingiam o seu alvo.");
				$('#2 a').attr('http://thefairjilt.com/2014/11/05/kamikaze-attacks-by-the-numbers-a-statistical-analysis-of-japans-wartime-strategy/');

				$('#3 p').text("Sean Connery usou peruca em todos os seus filmes do James Bond. O actor começou a ficar careca aos 21 anos.");
				$('#3 a').attr('href','https://en.wikipedia.org/wiki/Sean_Connery#James_Bond:_1962.E2.80.9371.2C_1983');

				$('#4 p').text("O típico adulto Americano passa 10 horas por dia em frente ao computador.");
				$('#4 a').attr('href','http://statpedia.com/view/daf91748-c5e0-4dfe-b41c-4b39abbfbb37');

				$('#5 p').text("O jogo mais vendido de sempre é o Tetris, com mais de 500 milhões de jogos vendidos.");
				$('#5 a').attr('href','https://en.wikipedia.org/wiki/List_of_best-selling_video_games');

				} else if (inputDate48.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("Existem mais museus nos EUA que McDonalds e Starbucks combinados.");
				$('#1 a').attr('href','https://www.washingtonpost.com/news/wonk/wp/2014/06/13/there-are-more-museums-in-the-us-than-there-are-starbucks-and-mcdonalds-combined/');

				} else if (inputDate48.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("Existem mais museus nos EUA que McDonalds e Starbucks combinados.");
				$('#1 a').attr('href','https://www.washingtonpost.com/news/wonk/wp/2014/06/13/there-are-more-museums-in-the-us-than-there-are-starbucks-and-mcdonalds-combined/');

				$('#2 p').text("Os atletas Olímpicos que recebem bronze ficam mais contentes do que os que recebem prata.");
				$('#2 a').attr('href','http://www.npr.org/sections/thetorch/2012/08/03/157835076/would-you-rather-win-silver-or-bronze-be-careful-what-you-wish-for');

				} else if (inputDate48.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("Existem mais museus nos EUA que McDonalds e Starbucks combinados.");
				$('#1 a').attr('href','https://www.washingtonpost.com/news/wonk/wp/2014/06/13/there-are-more-museums-in-the-us-than-there-are-starbucks-and-mcdonalds-combined/');

				$('#2 p').text("Os atletas Olímpicos que recebem bronze ficam mais contentes do que os que recebem prata.");
				$('#2 a').attr('href','http://www.npr.org/sections/thetorch/2012/08/03/157835076/would-you-rather-win-silver-or-bronze-be-careful-what-you-wish-for');

				$('#3 p').text("Existem mais de 200 cadáveres de alpinistas não decompostos no Monte Everest.");
				$('#3 a').attr('href','http://www.smithsonianmag.com/ist/?next=/smart-news/there-are-over-200-bodies-on-mount-everest-and-theyre-used-as-landmarks-146904416/');

				} else if (inputDate48.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("Existem mais museus nos EUA que McDonalds e Starbucks combinados.");
				$('#1 a').attr('href','https://www.washingtonpost.com/news/wonk/wp/2014/06/13/there-are-more-museums-in-the-us-than-there-are-starbucks-and-mcdonalds-combined/');

				$('#2 p').text("Os atletas Olímpicos que recebem bronze ficam mais contentes do que os que recebem prata.");
				$('#2 a').attr('href','http://www.npr.org/sections/thetorch/2012/08/03/157835076/would-you-rather-win-silver-or-bronze-be-careful-what-you-wish-for');

				$('#3 p').text("Existem mais de 200 cadáveres de alpinistas não decompostos no Monte Everest.");
				$('#3 a').attr('href','http://www.smithsonianmag.com/ist/?next=/smart-news/there-are-over-200-bodies-on-mount-everest-and-theyre-used-as-landmarks-146904416/');

				$('#4 p').text("Os astronautas que chegaram à Lua não tinham direito a seguro de vida, por isso autografaram fotos para as suas famílias venderem.");
				$('#4 a').attr('href','http://www.spacesafetymagazine.com/spaceflight/life-in-orbit/neil-armstrongs-insurance-policy/');

				} else if (inputDate48.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate49.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("Existem mais museus nos EUA que McDonalds e Starbucks combinados.");
				$('#1 a').attr('href','https://www.washingtonpost.com/news/wonk/wp/2014/06/13/there-are-more-museums-in-the-us-than-there-are-starbucks-and-mcdonalds-combined/');

				$('#2 p').text("Os atletas Olímpicos que recebem bronze ficam mais contentes do que os que recebem prata.");
				$('#2 a').attr('href','http://www.npr.org/sections/thetorch/2012/08/03/157835076/would-you-rather-win-silver-or-bronze-be-careful-what-you-wish-for');

				$('#3 p').text("Existem mais de 200 cadáveres de alpinistas não decompostos no Monte Everest.");
				$('#3 a').attr('href','http://www.smithsonianmag.com/ist/?next=/smart-news/there-are-over-200-bodies-on-mount-everest-and-theyre-used-as-landmarks-146904416/');

				$('#4 p').text("Os astronautas que chegaram à Lua não tinham direito a seguro de vida, por isso autografaram fotos para as suas famílias venderem.");
				$('#4 a').attr('href','http://www.spacesafetymagazine.com/spaceflight/life-in-orbit/neil-armstrongs-insurance-policy/');

				$('#5 p').text("As caras dos crocodilos são 10 vezes mais sensíveis que a ponta dos dedos humanos.");
				$('#5 a').attr('href','http://phenomena.nationalgeographic.com/2012/11/08/crocodile-faces-are-more-sensitive-than-human-fingertips/');

				} else if (inputDate49.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("Ureia, o ingrediente principal da urina, é utilizado em cigarros de forma a aumentar o sabor.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/Urea');

				} else if (inputDate49.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("Ureia, o ingrediente principal da urina, é utilizado em cigarros de forma a aumentar o sabor.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/Urea');

				$('#2 p').text("O Luís XIV de França tinha um casaco com 123 botões de diamante.");
				$('#2 a').attr('href','https://books.google.pt/books?id=g5LACEyLL0sC&pg=PA3&lpg=PA3&dq=Louis+XIV+had+a+coat+with+123+diamond+buttons+on+it&source=bl&redir_esc=y');

				} else if (inputDate49.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("Ureia, o ingrediente principal da urina, é utilizado em cigarros de forma a aumentar o sabor.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/Urea');

				$('#2 p').text("O Luís XIV de França tinha um casaco com 123 botões de diamante.");
				$('#2 a').attr('href','https://books.google.pt/books?id=g5LACEyLL0sC&pg=PA3&lpg=PA3&dq=Louis+XIV+had+a+coat+with+123+diamond+buttons+on+it&source=bl&redir_esc=y');

				$('#3 p').text("Barack Obama foi o primeiro Presidente Norte-Americano a visitar Hiroshima, 71 anos depois da bomba atómica.");
				$('#3 a').attr('href','http://www.theguardian.com/world/2016/may/27/barack-obama-first-us-president-to-visit-hiroshima-japan');

				} else if (inputDate49.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("Ureia, o ingrediente principal da urina, é utilizado em cigarros de forma a aumentar o sabor.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/Urea');

				$('#2 p').text("O Luís XIV de França tinha um casaco com 123 botões de diamante.");
				$('#2 a').attr('href','https://books.google.pt/books?id=g5LACEyLL0sC&pg=PA3&lpg=PA3&dq=Louis+XIV+had+a+coat+with+123+diamond+buttons+on+it&source=bl&redir_esc=y');

				$('#3 p').text("Barack Obama foi o primeiro Presidente Norte-Americano a visitar Hiroshima, 71 anos depois da bomba atómica.");
				$('#3 a').attr('href','http://www.theguardian.com/world/2016/may/27/barack-obama-first-us-president-to-visit-hiroshima-japan');

				$('#4 p').text("Os papagaios podem viver até 80 anos.");
				$('#4 a').attr('href','http://www.amazon.com/gp/reader/0399257403/ref=sr_1_2?p=S012&keywords=Parrots+can+live+for+80+years&ie=UTF8&qid=1464301191&tag=factslides-20');

				} else if (inputDate49.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate50.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("Ureia, o ingrediente principal da urina, é utilizado em cigarros de forma a aumentar o sabor.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/Urea');

				$('#2 p').text("O Luís XIV de França tinha um casaco com 123 botões de diamante.");
				$('#2 a').attr('href','https://books.google.pt/books?id=g5LACEyLL0sC&pg=PA3&lpg=PA3&dq=Louis+XIV+had+a+coat+with+123+diamond+buttons+on+it&source=bl&redir_esc=y');

				$('#3 p').text("Barack Obama foi o primeiro Presidente Norte-Americano a visitar Hiroshima, 71 anos depois da bomba atómica.");
				$('#3 a').attr('href','http://www.theguardian.com/world/2016/may/27/barack-obama-first-us-president-to-visit-hiroshima-japan');

				$('#4 p').text("Os papagaios podem viver até 80 anos.");
				$('#4 a').attr('href','http://www.amazon.com/gp/reader/0399257403/ref=sr_1_2?p=S012&keywords=Parrots+can+live+for+80+years&ie=UTF8&qid=1464301191&tag=factslides-20');

				$('#5 p').text("O Esperanto é uma língua internacional criada no século XIX e falada hoje em dia por dois milhões de pessoas.");
				$('#5 a').attr('href','https://en.m.wikipedia.org/wiki/Esperanto');

				} else 	if (inputDate50.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("Os cães conseguem perceber a diferença entre caras felizes e caras zangadas.");
				$('#1 a').attr('href','http://www.bbc.com/news/science-environment-31384525');

				} else if (inputDate50.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("Os cães conseguem perceber a diferença entre caras felizes e caras zangadas.");
				$('#1 a').attr('href','http://www.bbc.com/news/science-environment-31384525');

				$('#2 p').text("Quem não toma pequeno-almoço tem uma probabilidade de 21% de desenvolver diabetes superior a quem toma.");
				$('#2 a').attr('https://consumer.healthday.com/diabetes-information-10/type-ii-diabetes-news-183/skipping-breakfast-a-recipe-for-heart-disease-study-finds-678465.html');

				} else if (inputDate50.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("Os cães conseguem perceber a diferença entre caras felizes e caras zangadas.");
				$('#1 a').attr('href','http://www.bbc.com/news/science-environment-31384525');

				$('#2 p').text("Quem não toma pequeno-almoço tem uma probabilidade de 21% de desenvolver diabetes superior a quem toma.");
				$('#2 a').attr('https://consumer.healthday.com/diabetes-information-10/type-ii-diabetes-news-183/skipping-breakfast-a-recipe-for-heart-disease-study-finds-678465.html');

				$('#3 p').text("A Google processa mais de 2 triliões de buscas por ano. Cerca de 270 buscas por ser humano.");
				$('#3 a').attr('href','http://searchengineland.com/google-now-handles-2-999-trillion-searches-per-year-250247');

				} else if (inputDate50.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("Os cães conseguem perceber a diferença entre caras felizes e caras zangadas.");
				$('#1 a').attr('href','http://www.bbc.com/news/science-environment-31384525');

				$('#2 p').text("Quem não toma pequeno-almoço tem uma probabilidade de 21% de desenvolver diabetes superior a quem toma.");
				$('#2 a').attr('https://consumer.healthday.com/diabetes-information-10/type-ii-diabetes-news-183/skipping-breakfast-a-recipe-for-heart-disease-study-finds-678465.html');

				$('#3 p').text("A Google processa mais de 2 triliões de buscas por ano. Cerca de 270 buscas por ser humano.");
				$('#3 a').attr('href','http://searchengineland.com/google-now-handles-2-999-trillion-searches-per-year-250247');

				$('#4 p').text("Segundo a lei dos EUA, apenas pessoas mortas podem ser retratadas nas moedas e notas do país.");
				$('#4 a').attr('href','https://www.treasury.gov/resource-center/faqs/Currency/Pages/edu_faq_currency_portraits.aspx');

				} else if (inputDate50.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate51.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("Os cães conseguem perceber a diferença entre caras felizes e caras zangadas.");
				$('#1 a').attr('href','http://www.bbc.com/news/science-environment-31384525');

				$('#2 p').text("Quem não toma pequeno-almoço tem uma probabilidade de 21% de desenvolver diabetes superior a quem toma.");
				$('#2 a').attr('https://consumer.healthday.com/diabetes-information-10/type-ii-diabetes-news-183/skipping-breakfast-a-recipe-for-heart-disease-study-finds-678465.html');

				$('#3 p').text("A Google processa mais de 2 triliões de buscas por ano. Cerca de 270 buscas por ser humano.");
				$('#3 a').attr('href','http://searchengineland.com/google-now-handles-2-999-trillion-searches-per-year-250247');

				$('#4 p').text("Segundo a lei dos EUA, apenas pessoas mortas podem ser retratadas nas moedas e notas do país.");
				$('#4 a').attr('href','https://www.treasury.gov/resource-center/faqs/Currency/Pages/edu_faq_currency_portraits.aspx');

				$('#5 p').text("Ontário, no Canadá, possui mais de 250 mil lagos. Contém cerca de um quinto da água potável na Terra.");
				$('#5 a').attr('href','https://www.ontario.ca/page/about-ontario');

				} else if (inputDate51.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');


					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("7% dos Americanos religiosos rezam para encontrar um bom lugar de estacionamento.");
				$('#1 a').attr('href','http://m.motherjones.com/kevin-drum/2014/10/5-percent-religious-americans-routinely-try-fool-god');

				} else if (inputDate51.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("7% dos Americanos religiosos rezam para encontrar um bom lugar de estacionamento.");
				$('#1 a').attr('href','http://m.motherjones.com/kevin-drum/2014/10/5-percent-religious-americans-routinely-try-fool-god');

				$('#2 p').text("Em espanhol, “esposas” significa “mulher” e “algemas”.");
				$('#2 a').attr('href','http://www.spanishdict.com/translate/esposa');

				} else if (inputDate51.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("7% dos Americanos religiosos rezam para encontrar um bom lugar de estacionamento.");
				$('#1 a').attr('href','http://m.motherjones.com/kevin-drum/2014/10/5-percent-religious-americans-routinely-try-fool-god');

				$('#2 p').text("Em espanhol, “esposas” significa “mulher” e “algemas”.");
				$('#2 a').attr('href','http://www.spanishdict.com/translate/esposa');

				$('#3 p').text("Quantas mais apps o teu telemóvel tiver, mais tempo passas na sanita.");
				$('#3 a').attr('href','http://gizmodo.com/the-more-features-your-phone-has-the-longer-you-spend-1598978668');

				} else if (inputDate51.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("7% dos Americanos religiosos rezam para encontrar um bom lugar de estacionamento.");
				$('#1 a').attr('href','http://m.motherjones.com/kevin-drum/2014/10/5-percent-religious-americans-routinely-try-fool-god');

				$('#2 p').text("Em espanhol, “esposas” significa “mulher” e “algemas”.");
				$('#2 a').attr('href','http://www.spanishdict.com/translate/esposa');

				$('#3 p').text("Quantas mais apps o teu telemóvel tiver, mais tempo passas na sanita.");
				$('#3 a').attr('href','http://gizmodo.com/the-more-features-your-phone-has-the-longer-you-spend-1598978668');

				$('#4 p').text("Na mitologia grega, as pessoas ruivas transformam-se em vampiros quando morrem.");
				$('#4 a').attr('href','http://mysteriousuniverse.org/2012/05/ginger-snaps-are-people-with-red-hair-more-sensitive-to-the-paranormal/');

				} else if (inputDate51.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate52.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("7% dos Americanos religiosos rezam para encontrar um bom lugar de estacionamento.");
				$('#1 a').attr('href','http://m.motherjones.com/kevin-drum/2014/10/5-percent-religious-americans-routinely-try-fool-god');

				$('#2 p').text("Em espanhol, “esposas” significa “mulher” e “algemas”.");
				$('#2 a').attr('href','http://www.spanishdict.com/translate/esposa');

				$('#3 p').text("Quantas mais apps o teu telemóvel tiver, mais tempo passas na sanita.");
				$('#3 a').attr('href','http://gizmodo.com/the-more-features-your-phone-has-the-longer-you-spend-1598978668');

				$('#4 p').text("Na mitologia grega, as pessoas ruivas transformam-se em vampiros quando morrem.");
				$('#4 a').attr('href','http://mysteriousuniverse.org/2012/05/ginger-snaps-are-people-with-red-hair-more-sensitive-to-the-paranormal/');

				$('#5 p').text("1 em cada 4 americanos pensa que o Sol gira à volta da Terra.");
				$('#5 a').attr('href','http://www.npr.org/sections/thetwo-way/2014/02/14/277058739/1-in-4-americans-think-the-sun-goes-around-the-earth-survey-says');

				} else if (inputDate52.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("Existe uma liga oficial de “Pedra, papel ou tesoura” nos EUA.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/USA_Rock_Paper_Scissors_League');

				} else if (inputDate52.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("Existe uma liga oficial de “Pedra, papel ou tesoura” nos EUA.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/USA_Rock_Paper_Scissors_League');

				$('#2 p').text("Leonardo Dicaprio recebeu o seu nome quando a sua mãe, ao olhar para um quadro de Leonardo Davinci, sentiu o seu primeiro pontapé.");
				$('#2 a').attr('href','http://www.moviefone.com/2013/05/10/18-things-you-didnt-know-about-leonardo-dicaprio/');

				} else if (inputDate52.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("Existe uma liga oficial de “Pedra, papel ou tesoura” nos EUA.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/USA_Rock_Paper_Scissors_League');

				$('#2 p').text("Leonardo Dicaprio recebeu o seu nome quando a sua mãe, ao olhar para um quadro de Leonardo Davinci, sentiu o seu primeiro pontapé.");
				$('#2 a').attr('href','http://www.moviefone.com/2013/05/10/18-things-you-didnt-know-about-leonardo-dicaprio/');

				$('#3 p').text("Um grupo de corujas chama-se um Parlamento.");
				$('#3 a').attr('href','http://www.theanswerbank.co.uk/Animals-and-Nature/article/what-do-you-call-a-group-of-owls/');

				} else if (inputDate52.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("Existe uma liga oficial de “Pedra, papel ou tesoura” nos EUA.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/USA_Rock_Paper_Scissors_League');

				$('#2 p').text("Leonardo Dicaprio recebeu o seu nome quando a sua mãe, ao olhar para um quadro de Leonardo Davinci, sentiu o seu primeiro pontapé.");
				$('#2 a').attr('href','http://www.moviefone.com/2013/05/10/18-things-you-didnt-know-about-leonardo-dicaprio/');

				$('#3 p').text("Um grupo de corujas chama-se um Parlamento.");
				$('#3 a').attr('href','http://www.theanswerbank.co.uk/Animals-and-Nature/article/what-do-you-call-a-group-of-owls/');

				$('#4 p').text("Em grego antigo, idiota significa todos aqueles que não são políticos.");
				$('#4 a').attr('href','http://www.etymonline.com/index.php?term=idiot');

				} else if (inputDate52.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate53.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("Existe uma liga oficial de “Pedra, papel ou tesoura” nos EUA.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/USA_Rock_Paper_Scissors_League');

				$('#2 p').text("Leonardo Dicaprio recebeu o seu nome quando a sua mãe, ao olhar para um quadro de Leonardo Davinci, sentiu o seu primeiro pontapé.");
				$('#2 a').attr('href','http://www.moviefone.com/2013/05/10/18-things-you-didnt-know-about-leonardo-dicaprio/');

				$('#3 p').text("Um grupo de corujas chama-se um Parlamento.");
				$('#3 a').attr('href','http://www.theanswerbank.co.uk/Animals-and-Nature/article/what-do-you-call-a-group-of-owls/');

				$('#4 p').text("Em grego antigo, idiota significa todos aqueles que não são políticos.");
				$('#4 a').attr('href','http://www.etymonline.com/index.php?term=idiot');

				$('#5 p').text("É proibido reencarnar na China sem autorização do Governo.");
				$('#5 a').attr('href','http://www.huffingtonpost.com/2007/08/22/china-bans-reincarnation-_n_61444.html');

				} else 	if (inputDate53.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("A palavra escola significa em grego antigo “tempo livre”.");
				$('#1 a').attr('href','http://www.etymonline.com/index.php?term=school');

				} else if (inputDate53.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("A palavra escola significa em grego antigo “tempo livre”.");
				$('#1 a').attr('href','http://www.etymonline.com/index.php?term=school');

				$('#2 p').text("A CIA lê 5 milhões de tweets por dia.");
				$('#2 a').attr('http://www.computerworld.com/s/article/9221564/CIA_monitors_up_to_5_million_tweets_daily_report_says');

				} else if (inputDate53.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("A palavra escola significa em grego antigo “tempo livre”.");
				$('#1 a').attr('href','http://www.etymonline.com/index.php?term=school');

				$('#2 p').text("A CIA lê 5 milhões de tweets por dia.");
				$('#2 a').attr('http://www.computerworld.com/s/article/9221564/CIA_monitors_up_to_5_million_tweets_daily_report_says');

				$('#3 p').text("O livro com mais atraso entregue numa biblioteca estava atrasado 288 anos.");
				$('#3 a').attr('href','https://en.wikipedia.org/wiki/Robert_Walpole_%281650%E2%80%931700%29');

				} else if (inputDate53.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');

				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("A palavra escola significa em grego antigo “tempo livre”.");
				$('#1 a').attr('href','http://www.etymonline.com/index.php?term=school');

				$('#2 p').text("A CIA lê 5 milhões de tweets por dia.");
				$('#2 a').attr('http://www.computerworld.com/s/article/9221564/CIA_monitors_up_to_5_million_tweets_daily_report_says');

				$('#3 p').text("O livro com mais atraso entregue numa biblioteca estava atrasado 288 anos.");
				$('#3 a').attr('href','https://en.wikipedia.org/wiki/Robert_Walpole_%281650%E2%80%931700%29');

				$('#4 p').text("A Guerra dos Cem anos durou 116 anos.");
				$('#4 a').attr('href','https://en.wikipedia.org/wiki/Hundred_Years%27_War');

				} else if (inputDate53.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate54.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("A palavra escola significa em grego antigo “tempo livre”.");
				$('#1 a').attr('href','http://www.etymonline.com/index.php?term=school');

				$('#2 p').text("A CIA lê 5 milhões de tweets por dia.");
				$('#2 a').attr('http://www.computerworld.com/s/article/9221564/CIA_monitors_up_to_5_million_tweets_daily_report_says');

				$('#3 p').text("O livro com mais atraso entregue numa biblioteca estava atrasado 288 anos.");
				$('#3 a').attr('href','https://en.wikipedia.org/wiki/Robert_Walpole_%281650%E2%80%931700%29');

				$('#4 p').text("A Guerra dos Cem anos durou 116 anos.");
				$('#4 a').attr('href','https://en.wikipedia.org/wiki/Hundred_Years%27_War');

				$('#5 p').text("As batatas têm mais cromossomas que os humanos.");
				$('#5 a').attr('href','http://www.wisegeek.com/how-many-chromosomes-do-potatoes-have.htm');

				} else 	if (inputDate54.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("Papophobia é o medo do Papa.");
				$('#1 a').attr('href','https://en.wiktionary.org/wiki/papaphobia');

				} else if (inputDate54.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("Papophobia é o medo do Papa.");
				$('#1 a').attr('href','https://en.wiktionary.org/wiki/papaphobia');

				$('#2 p').text("As pernas da Mariah Carey estão asseguradas em um bilião de dólares.");
				$('#2 a').attr('http://www.starpulse.com/');

				} else if (inputDate54.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("Papophobia é o medo do Papa.");
				$('#1 a').attr('href','https://en.wiktionary.org/wiki/papaphobia');

				$('#2 p').text("As pernas da Mariah Carey estão asseguradas em um bilião de dólares.");
				$('#2 a').attr('http://www.starpulse.com/');

				$('#3 p').text("Um individuo normal engole cerca de um litro de muco nasal todos os dias.");
				$('#3 a').attr('href','http://archive.digtriad.com/news/health/article/283905/8/Gross-You-Produce--Swallow-A-Liter-Of-Mucus-Everyday');

				} else if (inputDate54.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("Papophobia é o medo do Papa.");
				$('#1 a').attr('href','https://en.wiktionary.org/wiki/papaphobia');

				$('#2 p').text("As pernas da Mariah Carey estão asseguradas em um bilião de dólares.");
				$('#2 a').attr('http://www.starpulse.com/');

				$('#3 p').text("Um individuo normal engole cerca de um litro de muco nasal todos os dias.");
				$('#3 a').attr('href','http://archive.digtriad.com/news/health/article/283905/8/Gross-You-Produce--Swallow-A-Liter-Of-Mucus-Everyday');

				$('#4 p').text("111,111,111 x 111,111,111= 12,345,678,987,654,321.");
				$('#4 a').attr('href','https://www.google.pt/search?q=111,111,111+x+111,111,111&oq=111,111,111+x+111,111,111&hl=en&gws_rd=cr&ei=ExRQV7rXIdDgUvrwptAP');

				} else if (inputDate54.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate55.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("Papophobia é o medo do Papa.");
				$('#1 a').attr('href','https://en.wiktionary.org/wiki/papaphobia');

				$('#2 p').text("As pernas da Mariah Carey estão asseguradas em um bilião de dólares.");
				$('#2 a').attr('http://www.starpulse.com/');

				$('#3 p').text("Um individuo normal engole cerca de um litro de muco nasal todos os dias.");
				$('#3 a').attr('href','http://archive.digtriad.com/news/health/article/283905/8/Gross-You-Produce--Swallow-A-Liter-Of-Mucus-Everyday');

				$('#4 p').text("111,111,111 x 111,111,111= 12,345,678,987,654,321.");
				$('#4 a').attr('href','https://www.google.pt/search?q=111,111,111+x+111,111,111&oq=111,111,111+x+111,111,111&hl=en&gws_rd=cr&ei=ExRQV7rXIdDgUvrwptAP');

				$('#5 p').text("Nomophobia é o medo de ficar sem telemóvel ou rede.");
				$('#5 a').attr('href','https://es.wikipedia.org/wiki/Nomofobia');

				}  else 	if (inputDate55.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("Dois engenheiros descobriram uma forma de apagar fogo com som.");
				$('#1 a').attr('href','http://research.gmu.edu/profiles/Mason_Students_Pathbreaking_invention.html');

				} else if (inputDate55.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("Dois engenheiros descobriram uma forma de apagar fogo com som.");
				$('#1 a').attr('href','http://research.gmu.edu/profiles/Mason_Students_Pathbreaking_invention.html');

				$('#2 p').text("O consumo de álcool ajuda a libertar radiação contida no corpo.");
				$('#2 a').attr('http://io9.gizmodo.com/drinking-a-beer-can-save-you-from-radiation-poisoning-1648955835');

				} else if (inputDate55.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("Dois engenheiros descobriram uma forma de apagar fogo com som.");
				$('#1 a').attr('href','http://research.gmu.edu/profiles/Mason_Students_Pathbreaking_invention.html');

				$('#2 p').text("O consumo de álcool ajuda a libertar radiação contida no corpo.");
				$('#2 a').attr('http://io9.gizmodo.com/drinking-a-beer-can-save-you-from-radiation-poisoning-1648955835');

				$('#3 p').text("O Gin Tónico foi criado como medicamento anti malária.");
				$('#3 a').attr('href','https://en.wikipedia.org/wiki/Gin_and_tonic');

				} else if (inputDate55.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("Dois engenheiros descobriram uma forma de apagar fogo com som.");
				$('#1 a').attr('href','http://research.gmu.edu/profiles/Mason_Students_Pathbreaking_invention.html');

				$('#2 p').text("O consumo de álcool ajuda a libertar radiação contida no corpo.");
				$('#2 a').attr('http://io9.gizmodo.com/drinking-a-beer-can-save-you-from-radiation-poisoning-1648955835');

				$('#3 p').text("O Gin Tónico foi criado como medicamento anti malária.");
				$('#3 a').attr('href','https://en.wikipedia.org/wiki/Gin_and_tonic');

				$('#4 p').text("Yao Ming é um chinês jogador de basketball na NBA que mede 2 metros e 30 centímetros.");
				$('#4 a').attr('href','https://en.wikipedia.org/wiki/Yao_Ming');

				} else if (inputDate55.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate56.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("Dois engenheiros descobriram uma forma de apagar fogo com som.");
				$('#1 a').attr('href','http://research.gmu.edu/profiles/Mason_Students_Pathbreaking_invention.html');

				$('#2 p').text("O consumo de álcool ajuda a libertar radiação contida no corpo.");
				$('#2 a').attr('http://io9.gizmodo.com/drinking-a-beer-can-save-you-from-radiation-poisoning-1648955835');

				$('#3 p').text("O Gin Tónico foi criado como medicamento anti malária.");
				$('#3 a').attr('href','https://en.wikipedia.org/wiki/Gin_and_tonic');

				$('#4 p').text("Yao Ming é um chinês jogador de basketball na NBA que mede 2 metros e 30 centímetros.");
				$('#4 a').attr('href','https://en.wikipedia.org/wiki/Yao_Ming');

				$('#5 p').text("A palavra Buddha significa “O Iluminado”.");
				$('#5 a').attr('href','https://thebuddhistcentre.com/text/who-was-buddha');

				} else if (inputDate56.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("A cada minuto são adicionados ao Youtube 100 horas de vídeos.");
				$('#1 a').attr('href','https://youtube.googleblog.com/2013/05/heres-to-eight-great-years.html');

				} else if (inputDate56.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("A cada minuto são adicionados ao Youtube 100 horas de vídeos.");
				$('#1 a').attr('href','https://youtube.googleblog.com/2013/05/heres-to-eight-great-years.html');

				$('#2 p').text("As zebras são pretas, com riscas brancas.");
				$('#2 a').attr('http://science.howstuffworks.com/zoology/mammals/zebra-stripes1.htm');

				} else if (inputDate56.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("A cada minuto são adicionados ao Youtube 100 horas de vídeos.");
				$('#1 a').attr('href','https://youtube.googleblog.com/2013/05/heres-to-eight-great-years.html');

				$('#2 p').text("As zebras são pretas, com riscas brancas.");
				$('#2 a').attr('http://science.howstuffworks.com/zoology/mammals/zebra-stripes1.htm');

				$('#3 p').text("O Martin Luther King Jr tinha ascendência irlandesa, do lado paterno.");
				$('#3 a').attr('href','http://www.theroot.com/articles/culture/2011/01/africanancestrycom_reveals_roots_of_mlk_and_marcus_garvey/');

				} else if (inputDate56.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("A cada minuto são adicionados ao Youtube 100 horas de vídeos.");
				$('#1 a').attr('href','https://youtube.googleblog.com/2013/05/heres-to-eight-great-years.html');

				$('#2 p').text("As zebras são pretas, com riscas brancas.");
				$('#2 a').attr('http://science.howstuffworks.com/zoology/mammals/zebra-stripes1.htm');

				$('#3 p').text("O Martin Luther King Jr tinha ascendência irlandesa, do lado paterno.");
				$('#3 a').attr('href','http://www.theroot.com/articles/culture/2011/01/africanancestrycom_reveals_roots_of_mlk_and_marcus_garvey/');

				$('#4 p').text("Entre 10 a 20 vulcões entram em erupção todos os dias.");
				$('#4 a').attr('href','http://www.livescience.com/49305-what-if-all-volcanoes-erupted.html');

				} else if (inputDate56.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate57.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("A cada minuto são adicionados ao Youtube 100 horas de vídeos.");
				$('#1 a').attr('href','https://youtube.googleblog.com/2013/05/heres-to-eight-great-years.html');

				$('#2 p').text("As zebras são pretas, com riscas brancas.");
				$('#2 a').attr('http://science.howstuffworks.com/zoology/mammals/zebra-stripes1.htm');

				$('#3 p').text("O Martin Luther King Jr tinha ascendência irlandesa, do lado paterno.");
				$('#3 a').attr('href','http://www.theroot.com/articles/culture/2011/01/africanancestrycom_reveals_roots_of_mlk_and_marcus_garvey/');

				$('#4 p').text("Entre 10 a 20 vulcões entram em erupção todos os dias.");
				$('#4 a').attr('href','http://www.livescience.com/49305-what-if-all-volcanoes-erupted.html');

				$('#5 p').text("10% da população mundial é canhota.");
				$('#5 a').attr('href','http://www.huffingtonpost.com/2012/10/29/left-handed-facts-lefties_n_2005864.html');

				} else if (inputDate57.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("As girafas aguentam mais tempo sem beber água que os camelos.");
				$('#1 a').attr('href','http://www.oliversozone.com/blog/which-animals-can-last-the-longest-without-water/');

				} else if (inputDate57.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("As girafas aguentam mais tempo sem beber água que os camelos.");
				$('#1 a').attr('href','http://www.oliversozone.com/blog/which-animals-can-last-the-longest-without-water/');

				$('#2 p').text("Os animais também podem doar sangue, de forma a ajudar outros animais.");
				$('#2 a').attr('https://vet.osu.edu/vmc/companion/our-services/animal-blood-bank/faq-blood-donors');

				} else if (inputDate57.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("As girafas aguentam mais tempo sem beber água que os camelos.");
				$('#1 a').attr('href','http://www.oliversozone.com/blog/which-animals-can-last-the-longest-without-water/');

				$('#2 p').text("Os animais também podem doar sangue, de forma a ajudar outros animais.");
				$('#2 a').attr('https://vet.osu.edu/vmc/companion/our-services/animal-blood-bank/faq-blood-donors');

				$('#3 p').text("Uma nuvem pesa em média 450 quilos.");
				$('#3 a').attr('href','http://chemistry.about.com/od/geochemistry/fl/How-Much-Does-a-Cloud-Weigh.htm');

				} else if (inputDate57.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');

				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("As girafas aguentam mais tempo sem beber água que os camelos.");
				$('#1 a').attr('href','http://www.oliversozone.com/blog/which-animals-can-last-the-longest-without-water/');

				$('#2 p').text("Os animais também podem doar sangue, de forma a ajudar outros animais.");
				$('#2 a').attr('https://vet.osu.edu/vmc/companion/our-services/animal-blood-bank/faq-blood-donors');

				$('#3 p').text("Uma nuvem pesa em média 450 quilos.");
				$('#3 a').attr('href','http://chemistry.about.com/od/geochemistry/fl/How-Much-Does-a-Cloud-Weigh.htm');

				$('#4 p').text("É legal andar na rua com uma espada na Califórnia, desde que esta esteja dentro de uma bainha.");
				$('#4 a').attr('href','http://blogs.findlaw.com/blotter/2014/02/is-it-legal-to-carry-a-sword-in-public.html');

				} else if (inputDate57.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate58.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("As girafas aguentam mais tempo sem beber água que os camelos.");
				$('#1 a').attr('href','http://www.oliversozone.com/blog/which-animals-can-last-the-longest-without-water/');

				$('#2 p').text("Os animais também podem doar sangue, de forma a ajudar outros animais.");
				$('#2 a').attr('https://vet.osu.edu/vmc/companion/our-services/animal-blood-bank/faq-blood-donors');

				$('#3 p').text("Uma nuvem pesa em média 450 quilos.");
				$('#3 a').attr('href','http://chemistry.about.com/od/geochemistry/fl/How-Much-Does-a-Cloud-Weigh.htm');

				$('#4 p').text("É legal andar na rua com uma espada na Califórnia, desde que esta esteja dentro de uma bainha.");
				$('#4 a').attr('href','http://blogs.findlaw.com/blotter/2014/02/is-it-legal-to-carry-a-sword-in-public.html');

				$('#5 p').text("Durante a Primeira Grande Guerra, os reis de Inglaterra, da Rússia e da Alemanha eram todos primos em primeiro grau.");
				$('#5 a').attr('href','https://en.wikipedia.org/wiki/Wilhelm_II,_German_Emperor#July_1914');

				} else 	if (inputDate58.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("Os cães são os únicos animais que compreendem o gesto humano de apontar.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/Dog');

				} else if (inputDate58.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("Os cães são os únicos animais que compreendem o gesto humano de apontar.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/Dog');

				$('#2 p').text("O risco de “incesto acidental” é tão grande na Islândia, que os jovens usam uma aplicação para verificar se o seu novo parceiro não é da sua família.");
				$('#2 a').attr('http://www.wired.co.uk/article/iceland-incest-app');

				} else if (inputDate58.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("Os cães são os únicos animais que compreendem o gesto humano de apontar.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/Dog');

				$('#2 p').text("O risco de “incesto acidental” é tão grande na Islândia, que os jovens usam uma aplicação para verificar se o seu novo parceiro não é da sua família.");
				$('#2 a').attr('http://www.wired.co.uk/article/iceland-incest-app');

				$('#3 p').text("Urinar no chuveiro pode salvar até 2500 litros de água por ano, por pessoa.");
				$('#3 a').attr('href','http://designtoimprovelife.dk/waterurinepee/');

				} else if (inputDate58.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {


						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("Os cães são os únicos animais que compreendem o gesto humano de apontar.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/Dog');

				$('#2 p').text("O risco de “incesto acidental” é tão grande na Islândia, que os jovens usam uma aplicação para verificar se o seu novo parceiro não é da sua família.");
				$('#2 a').attr('http://www.wired.co.uk/article/iceland-incest-app');

				$('#3 p').text("Urinar no chuveiro pode salvar até 2500 litros de água por ano, por pessoa.");
				$('#3 a').attr('href','http://designtoimprovelife.dk/waterurinepee/');

				$('#4 p').text("A pirâmide de Giza tem 8 faces, não 4.");
				$('#4 a').attr('href','https://sharethyknowledge.quora.com/The-Great-pyramid-of-Giza-has-8-sides-not-4');

				} else if (inputDate58.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate59.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("Os cães são os únicos animais que compreendem o gesto humano de apontar.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/Dog');

				$('#2 p').text("O risco de “incesto acidental” é tão grande na Islândia, que os jovens usam uma aplicação para verificar se o seu novo parceiro não é da sua família.");
				$('#2 a').attr('http://www.wired.co.uk/article/iceland-incest-app');

				$('#3 p').text("Urinar no chuveiro pode salvar até 2500 litros de água por ano, por pessoa.");
				$('#3 a').attr('href','http://designtoimprovelife.dk/waterurinepee/');

				$('#4 p').text("A pirâmide de Giza tem 8 faces, não 4.");
				$('#4 a').attr('href','https://sharethyknowledge.quora.com/The-Great-pyramid-of-Giza-has-8-sides-not-4');

				$('#5 p').text("O George Washington morreu ao tentar curar a sua garganta inflamada drenando metade da totalidade do seu sangue.");
				$('#5 a').attr('href','https://en.wikipedia.org/wiki/George_Washington');

				}  else if (inputDate59.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("Paul McCartney é o único artista a atingir o topo das tabelas britânica enquanto solista, num duo, num trio, num quarteto e num quinteto.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/Paul_McCartney#Achievements');

				} else if (inputDate59.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("Paul McCartney é o único artista a atingir o topo das tabelas britânica enquanto solista, num duo, num trio, num quarteto e num quinteto.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/Paul_McCartney#Achievements');

				$('#2 p').text("O Tradutor Chefe do Parlamento da União Europeia fala 32 línguas fluentemente.");
				$('#2 a').attr('http://www.newstatesman.com/politics/education/2015/08/man-who-speaks-32-languages-and-counting');

				} else if (inputDate59.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("Paul McCartney é o único artista a atingir o topo das tabelas britânica enquanto solista, num duo, num trio, num quarteto e num quinteto.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/Paul_McCartney#Achievements');

				$('#2 p').text("O Tradutor Chefe do Parlamento da União Europeia fala 32 línguas fluentemente.");
				$('#2 a').attr('http://www.newstatesman.com/politics/education/2015/08/man-who-speaks-32-languages-and-counting');

				$('#3 p').text("A Austrália é maior que a parte continental dos EUA.");
				$('#3 a').attr('href','http://www.aboutaustralia.com/australia-size-compared-to-usa/');

				} else if (inputDate59.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("Paul McCartney é o único artista a atingir o topo das tabelas britânica enquanto solista, num duo, num trio, num quarteto e num quinteto.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/Paul_McCartney#Achievements');

				$('#2 p').text("O Tradutor Chefe do Parlamento da União Europeia fala 32 línguas fluentemente.");
				$('#2 a').attr('http://www.newstatesman.com/politics/education/2015/08/man-who-speaks-32-languages-and-counting');

				$('#3 p').text("A Austrália é maior que a parte continental dos EUA.");
				$('#3 a').attr('href','http://www.aboutaustralia.com/australia-size-compared-to-usa/');

				$('#4 p').text("A campa do Karl Marx requer o pagamento de uma taxa de entrada para ser visitada.");
				$('#4 a').attr('href','http://www.theatlantic.com/business/archive/2015/10/das-tomb-karl-marxs-resting-place-has-an-entry-fee/412411/');

				} else if (inputDate59.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate60.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("Paul McCartney é o único artista a atingir o topo das tabelas britânica enquanto solista, num duo, num trio, num quarteto e num quinteto.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/Paul_McCartney#Achievements');

				$('#2 p').text("O Tradutor Chefe do Parlamento da União Europeia fala 32 línguas fluentemente.");
				$('#2 a').attr('http://www.newstatesman.com/politics/education/2015/08/man-who-speaks-32-languages-and-counting');

				$('#3 p').text("A Austrália é maior que a parte continental dos EUA.");
				$('#3 a').attr('href','http://www.aboutaustralia.com/australia-size-compared-to-usa/');

				$('#4 p').text("A campa do Karl Marx requer o pagamento de uma taxa de entrada para ser visitada.");
				$('#4 a').attr('href','http://www.theatlantic.com/business/archive/2015/10/das-tomb-karl-marxs-resting-place-has-an-entry-fee/412411/');

				$('#5 p').text("Os selfie-sticks estão banidos de todos os parques da Disney.");
				$('#5 a').attr('href','http://www.bbc.com/news/technology-33311071');

				} else if (inputDate60.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("Os porcos são mais espertos que os cães, estando ao nível dos macacos.");
				$('#1 a').attr('href','http://www.dailymail.co.uk/sciencetech/article-3122303/Move-Lassie-IQ-tests-reveal-pigs-outsmart-dogs-chimpanzees.html');

				} else if (inputDate60.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("Os porcos são mais espertos que os cães, estando ao nível dos macacos.");
				$('#1 a').attr('href','http://www.dailymail.co.uk/sciencetech/article-3122303/Move-Lassie-IQ-tests-reveal-pigs-outsmart-dogs-chimpanzees.html');

				$('#2 p').text("A Austrália tem 31% das reservas mundiais de urânio.");
				$('#2 a').attr('href','http://www.minerals.org.au/resources/uranium/');

				} else if (inputDate60.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("Os porcos são mais espertos que os cães, estando ao nível dos macacos.");
				$('#1 a').attr('href','http://www.dailymail.co.uk/sciencetech/article-3122303/Move-Lassie-IQ-tests-reveal-pigs-outsmart-dogs-chimpanzees.html');

				$('#2 p').text("A Austrália tem 31% das reservas mundiais de urânio.");
				$('#2 a').attr('href','http://www.minerals.org.au/resources/uranium/');

				$('#3 p').text("As línguas gestuais são tão variadas quanto as línguas faladas.");
				$('#3 a').attr('href','https://en.m.wikipedia.org/wiki/British_Sign_Language');

				} else if (inputDate60.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("Os porcos são mais espertos que os cães, estando ao nível dos macacos.");
				$('#1 a').attr('href','http://www.dailymail.co.uk/sciencetech/article-3122303/Move-Lassie-IQ-tests-reveal-pigs-outsmart-dogs-chimpanzees.html');

				$('#2 p').text("A Austrália tem 31% das reservas mundiais de urânio.");
				$('#2 a').attr('href','http://www.minerals.org.au/resources/uranium/');

				$('#3 p').text("As línguas gestuais são tão variadas quanto as línguas faladas.");
				$('#3 a').attr('href','https://en.m.wikipedia.org/wiki/British_Sign_Language');

				$('#4 p').text("A Ferrari deixou de vender carros não-automáticos em 2011.");
				$('#4 a').attr('href','http://www.bloomberg.com/news/articles/2016-06-17/why-can-t-you-get-your-300-000-supercar-with-a-stick-shift');

				} else if (inputDate60.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate61.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("Os porcos são mais espertos que os cães, estando ao nível dos macacos.");
				$('#1 a').attr('href','http://www.dailymail.co.uk/sciencetech/article-3122303/Move-Lassie-IQ-tests-reveal-pigs-outsmart-dogs-chimpanzees.html');

				$('#2 p').text("A Austrália tem 31% das reservas mundiais de urânio.");
				$('#2 a').attr('href','http://www.minerals.org.au/resources/uranium/');

				$('#3 p').text("As línguas gestuais são tão variadas quanto as línguas faladas.");
				$('#3 a').attr('href','https://en.m.wikipedia.org/wiki/British_Sign_Language');

				$('#4 p').text("A Ferrari deixou de vender carros não-automáticos em 2011.");
				$('#4 a').attr('href','http://www.bloomberg.com/news/articles/2016-06-17/why-can-t-you-get-your-300-000-supercar-with-a-stick-shift');

				$('#5 p').text("Das 20 estátuas mais altas do mundo, 17 são budistas.");
				$('#5 a').attr('href','https://en.m.wikipedia.org/wiki/List_of_the_highest_statues');

				} else 	if (inputDate61.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("Existe um restaurante em Pittsburgh, de nome “Conflict Kitchen”, que apenas serve comida típica dos países com os quais os EUA estão em guerra.");
				$('#1 a').attr('href','http://conflictkitchen.org/about/');

				} else if (inputDate61.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("Existe um restaurante em Pittsburgh, de nome “Conflict Kitchen”, que apenas serve comida típica dos países com os quais os EUA estão em guerra.");
				$('#1 a').attr('href','http://conflictkitchen.org/about/');

				$('#2 p').text("O México é o maior exportador de cerveja do mundo.");
				$('#2 a').attr('http://vinepair.com/wine-blog/the-worlds-10-biggest-beer-exporters-and-the-countries-who-love-them-2014/');

				} else if (inputDate61.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("Existe um restaurante em Pittsburgh, de nome “Conflict Kitchen”, que apenas serve comida típica dos países com os quais os EUA estão em guerra.");
				$('#1 a').attr('href','http://conflictkitchen.org/about/');

				$('#2 p').text("O México é o maior exportador de cerveja do mundo.");
				$('#2 a').attr('http://vinepair.com/wine-blog/the-worlds-10-biggest-beer-exporters-and-the-countries-who-love-them-2014/');

				$('#3 p').text("Kim Jon-Il nasceu na Rússia.");
				$('#3 a').attr('href','https://en.wikipedia.org/wiki/Kim_Jong-il');

				} else if (inputDate61.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');

				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("Existe um restaurante em Pittsburgh, de nome “Conflict Kitchen”, que apenas serve comida típica dos países com os quais os EUA estão em guerra.");
				$('#1 a').attr('href','http://conflictkitchen.org/about/');

				$('#2 p').text("O México é o maior exportador de cerveja do mundo.");
				$('#2 a').attr('http://vinepair.com/wine-blog/the-worlds-10-biggest-beer-exporters-and-the-countries-who-love-them-2014/');

				$('#3 p').text("Kim Jon-Il nasceu na Rússia.");
				$('#3 a').attr('href','https://en.wikipedia.org/wiki/Kim_Jong-il');

				$('#4 p').text("As guerras de Genghis Khan reduziram a população mundial da altura em mais de 11%.");
				$('#4 a').attr('href','http://www.history.com/news/history-lists/10-things-you-may-not-know-about-genghis-khan');

				} else if (inputDate61.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate62.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("Existe um restaurante em Pittsburgh, de nome “Conflict Kitchen”, que apenas serve comida típica dos países com os quais os EUA estão em guerra.");
				$('#1 a').attr('href','http://conflictkitchen.org/about/');

				$('#2 p').text("O México é o maior exportador de cerveja do mundo.");
				$('#2 a').attr('http://vinepair.com/wine-blog/the-worlds-10-biggest-beer-exporters-and-the-countries-who-love-them-2014/');

				$('#3 p').text("Kim Jon-Il nasceu na Rússia.");
				$('#3 a').attr('href','https://en.wikipedia.org/wiki/Kim_Jong-il');

				$('#4 p').text("As guerras de Genghis Khan reduziram a população mundial da altura em mais de 11%.");
				$('#4 a').attr('href','http://www.history.com/news/history-lists/10-things-you-may-not-know-about-genghis-khan');

				$('#5 p').text("Um camelo consegue beber 200 litros de água em três minutos.");
				$('#5 a').attr('href','https://en.wikipedia.org/wiki/Camel');

				} else 	if (inputDate62.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("O humano comum defeca cerca de 13 euros em metais preciosos todos os anos.");
				$('#1 a').attr('href','https://www.rt.com/usa/243377-mining-sewage-precious-metals-studies/');

				} else if (inputDate62.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("O humano comum defeca cerca de 13 euros em metais preciosos todos os anos.");
				$('#1 a').attr('href','https://www.rt.com/usa/243377-mining-sewage-precious-metals-studies/');

				$('#2 p').text("Em 2015 mais pessoas morreram a tirar selfies do que devido a ataques de tubarões.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/List_of_selfie-related_injuries_and_deaths');

				} else if (inputDate62.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("O humano comum defeca cerca de 13 euros em metais preciosos todos os anos.");
				$('#1 a').attr('href','https://www.rt.com/usa/243377-mining-sewage-precious-metals-studies/');

				$('#2 p').text("Em 2015 mais pessoas morreram a tirar selfies do que devido a ataques de tubarões.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/List_of_selfie-related_injuries_and_deaths');

				$('#3 p').text("Em muitos países é proibido tirar as garras aos gatos, pois o nível de dor de tal acto assemelha-se a cortar parte de um dedo a um ser humano.");
				$('#3 a').attr('href','http://subverse.net/interesting/declawing-a-cat-amputates-a-joint-and-is-illegal-in-most-countries/');

				} else if (inputDate62.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("O humano comum defeca cerca de 13 euros em metais preciosos todos os anos.");
				$('#1 a').attr('href','https://www.rt.com/usa/243377-mining-sewage-precious-metals-studies/');

				$('#2 p').text("Em 2015 mais pessoas morreram a tirar selfies do que devido a ataques de tubarões.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/List_of_selfie-related_injuries_and_deaths');

				$('#3 p').text("Em muitos países é proibido tirar as garras aos gatos, pois o nível de dor de tal acto assemelha-se a cortar parte de um dedo a um ser humano.");
				$('#3 a').attr('href','http://subverse.net/interesting/declawing-a-cat-amputates-a-joint-and-is-illegal-in-most-countries/');

				$('#4 p').text("A melancia é originária de África.");
				$('#4 a').attr('href','https://en.wikipedia.org/wiki/Watermelon#History');

				} else if (inputDate62.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate63.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("O humano comum defeca cerca de 13 euros em metais preciosos todos os anos.");
				$('#1 a').attr('href','https://www.rt.com/usa/243377-mining-sewage-precious-metals-studies/');

				$('#2 p').text("Em 2015 mais pessoas morreram a tirar selfies do que devido a ataques de tubarões.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/List_of_selfie-related_injuries_and_deaths');

				$('#3 p').text("Em muitos países é proibido tirar as garras aos gatos, pois o nível de dor de tal acto assemelha-se a cortar parte de um dedo a um ser humano.");
				$('#3 a').attr('href','http://subverse.net/interesting/declawing-a-cat-amputates-a-joint-and-is-illegal-in-most-countries/');

				$('#4 p').text("A melancia é originária de África.");
				$('#4 a').attr('href','https://en.wikipedia.org/wiki/Watermelon#History');

				$('#5 p').text("O DNA de um ser humano colocado em linha recta mediria cerca de 135 triliões de metros.");
				$('#5 a').attr('href','http://scienceline.ucsb.edu/getkey.php?key=144');

				} else if (inputDate63.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("Os dinossauros existiram durante 150 milhões de anos. O ser humano existe há apenas 0.1% desse tempo.");
				$('#1 a').attr('href','https://www.newscientist.com/article/dn9936-top-10-dinosaur-myths/');

				} else if (inputDate63.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("Os dinossauros existiram durante 150 milhões de anos. O ser humano existe há apenas 0.1% desse tempo.");
				$('#1 a').attr('href','https://www.newscientist.com/article/dn9936-top-10-dinosaur-myths/');

				$('#2 p').text("As testemunhas de Jeová não comemoram os aniversários, pois os únicos dois relatos de aniversários na Bíblia terminam em assassínio.");
				$('#2 a').attr('https://jwquestions.wordpress.com/2009/06/23/why-dont-jehovahs-witnesses-celebrate-birthdays/');

				} else if (inputDate63.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("Os dinossauros existiram durante 150 milhões de anos. O ser humano existe há apenas 0.1% desse tempo.");
				$('#1 a').attr('href','https://www.newscientist.com/article/dn9936-top-10-dinosaur-myths/');

				$('#2 p').text("As testemunhas de Jeová não comemoram os aniversários, pois os únicos dois relatos de aniversários na Bíblia terminam em assassínio.");
				$('#2 a').attr('https://jwquestions.wordpress.com/2009/06/23/why-dont-jehovahs-witnesses-celebrate-birthdays/');

				$('#3 p').text("A maior família do mundo é indiana. Um homem com 30 mulheres e 94 filhos.");
				$('#3 a').attr('href','http://www.dailymail.co.uk/news/article-1358654/The-worlds-biggest-family-Ziona-Chan-39-wives-94-children-33-grandchildren.html');

				} else if (inputDate63.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("Os dinossauros existiram durante 150 milhões de anos. O ser humano existe há apenas 0.1% desse tempo.");
				$('#1 a').attr('href','https://www.newscientist.com/article/dn9936-top-10-dinosaur-myths/');

				$('#2 p').text("As testemunhas de Jeová não comemoram os aniversários, pois os únicos dois relatos de aniversários na Bíblia terminam em assassínio.");
				$('#2 a').attr('https://jwquestions.wordpress.com/2009/06/23/why-dont-jehovahs-witnesses-celebrate-birthdays/');

				$('#3 p').text("A maior família do mundo é indiana. Um homem com 30 mulheres e 94 filhos.");
				$('#3 a').attr('href','http://www.dailymail.co.uk/news/article-1358654/The-worlds-biggest-family-Ziona-Chan-39-wives-94-children-33-grandchildren.html');

				$('#4 p').text("Gandhi nunca ganhou o Nobel da Paz, apesar das suas cinco nomeações.");
				$('#4 a').attr('href','https://en.wikipedia.org/wiki/Nobel_Prize_controversies#Peace');

				} else if (inputDate63.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate64.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("Os dinossauros existiram durante 150 milhões de anos. O ser humano existe há apenas 0.1% desse tempo.");
				$('#1 a').attr('href','https://www.newscientist.com/article/dn9936-top-10-dinosaur-myths/');

				$('#2 p').text("As testemunhas de Jeová não comemoram os aniversários, pois os únicos dois relatos de aniversários na Bíblia terminam em assassínio.");
				$('#2 a').attr('https://jwquestions.wordpress.com/2009/06/23/why-dont-jehovahs-witnesses-celebrate-birthdays/');

				$('#3 p').text("A maior família do mundo é indiana. Um homem com 30 mulheres e 94 filhos.");
				$('#3 a').attr('href','http://www.dailymail.co.uk/news/article-1358654/The-worlds-biggest-family-Ziona-Chan-39-wives-94-children-33-grandchildren.html');

				$('#4 p').text("Gandhi nunca ganhou o Nobel da Paz, apesar das suas cinco nomeações.");
				$('#4 a').attr('href','https://en.wikipedia.org/wiki/Nobel_Prize_controversies#Peace');

				$('#5 p').text("Em 2011, uma mulher comprou uma peça de arte plástica “invisível” por dez mil dólares.");
				$('#5 a').attr('href','http://www.neatorama.com/2011/07/19/woman-buys-non-existent-art-for-10000-2/');

				} else if (inputDate64.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("O Charles Darwin comeu todos os animais que descobriu. Pelo menos um por cada espécie.");
				$('#1 a').attr('href','http://www.neatorama.com/2008/12/04/10-fun-facts-about-charles-darwin/');

				} else if (inputDate64.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("O Charles Darwin comeu todos os animais que descobriu. Pelo menos um por cada espécie.");
				$('#1 a').attr('href','http://www.neatorama.com/2008/12/04/10-fun-facts-about-charles-darwin/');

				$('#2 p').text("O Hotel mais velho do mundo está aberto desde 705 D.C.");
				$('#2 a').attr('http://www.guinnessworldrecords.com/world-recordsoldest-hotel/');

				} else if (inputDate64.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("O Charles Darwin comeu todos os animais que descobriu. Pelo menos um por cada espécie.");
				$('#1 a').attr('href','http://www.neatorama.com/2008/12/04/10-fun-facts-about-charles-darwin/');

				$('#2 p').text("O Hotel mais velho do mundo está aberto desde 705 D.C.");
				$('#2 a').attr('http://www.guinnessworldrecords.com/world-recordsoldest-hotel/');

				$('#3 p').text("Certos polvos são comidos vivos na Coreia do Sul.");
				$('#3 a').attr('href','http://www.mnn.com/food/healthy-eating/photos/7-animals-that-are-eaten-alive-by-humans/octopus');

				} else if (inputDate64.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("O Charles Darwin comeu todos os animais que descobriu. Pelo menos um por cada espécie.");
				$('#1 a').attr('href','http://www.neatorama.com/2008/12/04/10-fun-facts-about-charles-darwin/');

				$('#2 p').text("O Hotel mais velho do mundo está aberto desde 705 D.C.");
				$('#2 a').attr('http://www.guinnessworldrecords.com/world-recordsoldest-hotel/');

				$('#3 p').text("Certos polvos são comidos vivos na Coreia do Sul.");
				$('#3 a').attr('href','http://www.mnn.com/food/healthy-eating/photos/7-animals-that-are-eaten-alive-by-humans/octopus');

				$('#4 p').text("As baratas apareceram 120 milhões de anos antes dos dinossauros.");
				$('#4 a').attr('href','http://www.livescience.com/41735-cockroaches-ate-dinosaur-poop.html');

				} else if (inputDate64.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate65.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("O Charles Darwin comeu todos os animais que descobriu. Pelo menos um por cada espécie.");
				$('#1 a').attr('href','http://www.neatorama.com/2008/12/04/10-fun-facts-about-charles-darwin/');

				$('#2 p').text("O Hotel mais velho do mundo está aberto desde 705 D.C.");
				$('#2 a').attr('http://www.guinnessworldrecords.com/world-recordsoldest-hotel/');

				$('#3 p').text("Certos polvos são comidos vivos na Coreia do Sul.");
				$('#3 a').attr('href','http://www.mnn.com/food/healthy-eating/photos/7-animals-that-are-eaten-alive-by-humans/octopus');

				$('#4 p').text("As baratas apareceram 120 milhões de anos antes dos dinossauros.");
				$('#4 a').attr('href','http://www.livescience.com/41735-cockroaches-ate-dinosaur-poop.html');

				$('#5 p').text("Cleópatra, a última faraó do Egipto, era de facto grega.");
				$('#5 a').attr('href','https://en.wikipedia.org/wiki/Cleopatra_VII');

				} else if (inputDate65.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("A heroína foi usada inicialmente para tratar pessoas viciadas em morfina.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/Heroin#History');

				} else if (inputDate65.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("A heroína foi usada inicialmente para tratar pessoas viciadas em morfina.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/Heroin#History');

				$('#2 p').text("O Hitler foi nomeado para o Nobel da Paz em 1939.");
				$('#2 a').attr('http://www.nobelprize.org/nomination/peace/nomination.php?action=show&showid=2609');

				} else if (inputDate65.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("A heroína foi usada inicialmente para tratar pessoas viciadas em morfina.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/Heroin#History');

				$('#2 p').text("O Hitler foi nomeado para o Nobel da Paz em 1939.");
				$('#2 a').attr('http://www.nobelprize.org/nomination/peace/nomination.php?action=show&showid=2609');

				$('#3 p').text("Um rato aguenta mais tempo sem água do que um camelo.");
				$('#3 a').attr('href','http://www.bbc.co.uk/insideout/content/articles/2008/04/22/west_rats_s13_w9_feature.shtml');

				} else if (inputDate65.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');

				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("A heroína foi usada inicialmente para tratar pessoas viciadas em morfina.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/Heroin#History');

				$('#2 p').text("O Hitler foi nomeado para o Nobel da Paz em 1939.");
				$('#2 a').attr('http://www.nobelprize.org/nomination/peace/nomination.php?action=show&showid=2609');

				$('#3 p').text("Um rato aguenta mais tempo sem água do que um camelo.");
				$('#3 a').attr('href','http://www.bbc.co.uk/insideout/content/articles/2008/04/22/west_rats_s13_w9_feature.shtml');

				$('#4 p').text("20% de todas as mulheres de Londres durante a primeira década do século XVIII eram prostitutas.");
				$('#4 a').attr('href','http://www.economist.com/node/14636924');

				} else if (inputDate65.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate66.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("A heroína foi usada inicialmente para tratar pessoas viciadas em morfina.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/Heroin#History');

				$('#2 p').text("O Hitler foi nomeado para o Nobel da Paz em 1939.");
				$('#2 a').attr('http://www.nobelprize.org/nomination/peace/nomination.php?action=show&showid=2609');

				$('#3 p').text("Um rato aguenta mais tempo sem água do que um camelo.");
				$('#3 a').attr('href','http://www.bbc.co.uk/insideout/content/articles/2008/04/22/west_rats_s13_w9_feature.shtml');

				$('#4 p').text("20% de todas as mulheres de Londres durante a primeira década do século XVIII eram prostitutas.");
				$('#4 a').attr('href','http://www.economist.com/node/14636924');

				$('#5 p').text("O Congresso do Brasil no inicio do ano de 2016 incluía um campeão de judo, um deputado acusado de homicídio e um palhaço.");
				$('#5 a').attr('href','http://www.nytimes.com/2016/05/15/world/americas/brazils-most-entertaining-show-may-be-congress.html?_r=0');

				} else 	if (inputDate66.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("A Venezuela tem as maiores reservas naturais de petróleo do mundo, superando a Arábia Saudita.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/List_of_countries_by_proven_oil_reserves');

				} else if (inputDate66.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("A Venezuela tem as maiores reservas naturais de petróleo do mundo, superando a Arábia Saudita.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/List_of_countries_by_proven_oil_reserves');

				$('#2 p').text("Os astronautas possuem um pedaço de velcro dentro dos seus capacetes, para o caso de precisarem de coçar o nariz.");
				$('#2 a').attr('http://mentalfloss.com/article/52987/how-do-astronauts-scratch-their-noses-space-walks');

				} else if (inputDate66.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("A Venezuela tem as maiores reservas naturais de petróleo do mundo, superando a Arábia Saudita.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/List_of_countries_by_proven_oil_reserves');

				$('#2 p').text("Os astronautas possuem um pedaço de velcro dentro dos seus capacetes, para o caso de precisarem de coçar o nariz.");
				$('#2 a').attr('http://mentalfloss.com/article/52987/how-do-astronauts-scratch-their-noses-space-walks');

				$('#3 p').text("O Arnold Schwarzenegger teve de reduzir o seu treino físico durante as filmagens de “Conan, o bárbaro”.");
				$('#3 a').attr('href','http://geektyrant.com/news/15-fun-facts-about-conan-the-barbarian');

				} else if (inputDate66.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {


						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("A Venezuela tem as maiores reservas naturais de petróleo do mundo, superando a Arábia Saudita.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/List_of_countries_by_proven_oil_reserves');

				$('#2 p').text("Os astronautas possuem um pedaço de velcro dentro dos seus capacetes, para o caso de precisarem de coçar o nariz.");
				$('#2 a').attr('http://mentalfloss.com/article/52987/how-do-astronauts-scratch-their-noses-space-walks');

				$('#3 p').text("O Arnold Schwarzenegger teve de reduzir o seu treino físico durante as filmagens de “Conan, o bárbaro”.");
				$('#3 a').attr('href','http://geektyrant.com/news/15-fun-facts-about-conan-the-barbarian');

				$('#4 p').text("A imagem do dragão apareceu como uma combinação de leopardo, piton e pássaro gigante, pois estes eram os três mais temidos predadores dos homens da antiguidade.");
				$('#4 a').attr('href','https://en.wikipedia.org/wiki/An_Instinct_for_Dragons');

				} else if (inputDate66.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate67.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("A Venezuela tem as maiores reservas naturais de petróleo do mundo, superando a Arábia Saudita.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/List_of_countries_by_proven_oil_reserves');

				$('#2 p').text("Os astronautas possuem um pedaço de velcro dentro dos seus capacetes, para o caso de precisarem de coçar o nariz.");
				$('#2 a').attr('http://mentalfloss.com/article/52987/how-do-astronauts-scratch-their-noses-space-walks');

				$('#3 p').text("O Arnold Schwarzenegger teve de reduzir o seu treino físico durante as filmagens de “Conan, o bárbaro”.");
				$('#3 a').attr('href','http://geektyrant.com/news/15-fun-facts-about-conan-the-barbarian');

				$('#4 p').text("A imagem do dragão apareceu como uma combinação de leopardo, piton e pássaro gigante, pois estes eram os três mais temidos predadores dos homens da antiguidade.");
				$('#4 a').attr('href','https://en.wikipedia.org/wiki/An_Instinct_for_Dragons');

				$('#5 p').text("A língua de uma baleia azul pode pesar tanto como um elefante.");
				$('#5 a').attr('href','http://www.onekind.org/education/animals_a_z/whale_blue/');

				}  else if (inputDate67.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("Os Metallica foram a primeira banda de sempre a tocar nos sete continentes, após tocarem na Antártida para um grupo de cientistas.");
				$('#1 a').attr('href','http://www.gigwise.com/news/94018/Metallica-added-to-Guinness-World-Records-after-Antarctica-show');

				} else if (inputDate67.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("Os Metallica foram a primeira banda de sempre a tocar nos sete continentes, após tocarem na Antártida para um grupo de cientistas.");
				$('#1 a').attr('href','http://www.gigwise.com/news/94018/Metallica-added-to-Guinness-World-Records-after-Antarctica-show');

				$('#2 p').text("A mais alta árvore e a mais larga árvore vivem ambas na Califórnia.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/List_of_superlative_trees');

				} else if (inputDate67.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("Os Metallica foram a primeira banda de sempre a tocar nos sete continentes, após tocarem na Antártida para um grupo de cientistas.");
				$('#1 a').attr('href','http://www.gigwise.com/news/94018/Metallica-added-to-Guinness-World-Records-after-Antarctica-show');

				$('#2 p').text("A mais alta árvore e a mais larga árvore vivem ambas na Califórnia.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/List_of_superlative_trees');

				$('#3 p').text("20% da população do Uganda acredita em bruxaria.");
				$('#3 a').attr('href','http://www.monitor.co.ug/News/National/-/688334/902622/-/wxwcyu/-/index.html');

				} else if (inputDate67.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("Os Metallica foram a primeira banda de sempre a tocar nos sete continentes, após tocarem na Antártida para um grupo de cientistas.");
				$('#1 a').attr('href','http://www.gigwise.com/news/94018/Metallica-added-to-Guinness-World-Records-after-Antarctica-show');

				$('#2 p').text("A mais alta árvore e a mais larga árvore vivem ambas na Califórnia.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/List_of_superlative_trees');

				$('#3 p').text("20% da população do Uganda acredita em bruxaria.");
				$('#3 a').attr('href','http://www.monitor.co.ug/News/National/-/688334/902622/-/wxwcyu/-/index.html');

				$('#4 p').text("Um típico romano ia aos banhos públicos quase todos os dias.");
				$('#4 a').attr('href','http://time.com/4259559/shower-soap-hygiene/');

				} else if (inputDate67.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate68.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("Os Metallica foram a primeira banda de sempre a tocar nos sete continentes, após tocarem na Antártida para um grupo de cientistas.");
				$('#1 a').attr('href','http://www.gigwise.com/news/94018/Metallica-added-to-Guinness-World-Records-after-Antarctica-show');

				$('#2 p').text("A mais alta árvore e a mais larga árvore vivem ambas na Califórnia.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/List_of_superlative_trees');

				$('#3 p').text("20% da população do Uganda acredita em bruxaria.");
				$('#3 a').attr('href','http://www.monitor.co.ug/News/National/-/688334/902622/-/wxwcyu/-/index.html');

				$('#4 p').text("Um típico romano ia aos banhos públicos quase todos os dias.");
				$('#4 a').attr('href','http://time.com/4259559/shower-soap-hygiene/');

				$('#5 p').text("As pessoas que procrastinam em grande quantidade são mais aptas a ter insónias.");
				$('#5 a').attr('href','http://www.livescience.com/55077-procrastination-linked-to-insomnia.html');

				} else if (inputDate68.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("95% das pessoas com mais de 110 anos são mulheres.");
				$('#1 a').attr('href','http://www.iflscience.com/health-and-medicine/why-are-almost-all-supercentenarians-women/');

				} else if (inputDate68.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("95% das pessoas com mais de 110 anos são mulheres.");
				$('#1 a').attr('href','http://www.iflscience.com/health-and-medicine/why-are-almost-all-supercentenarians-women/');

				$('#2 p').text("Os autocolantes presentes em frutas são comestíveis.");
				$('#2 a').attr('http://www.hlntv.com/shows/morning-express-robin-meade/articles/2014/01/15/8-things-you-never-knew-about-produce-stickers');

				} else if (inputDate68.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("95% das pessoas com mais de 110 anos são mulheres.");
				$('#1 a').attr('href','http://www.iflscience.com/health-and-medicine/why-are-almost-all-supercentenarians-women/');

				$('#2 p').text("Os autocolantes presentes em frutas são comestíveis.");
				$('#2 a').attr('http://www.hlntv.com/shows/morning-express-robin-meade/articles/2014/01/15/8-things-you-never-knew-about-produce-stickers');

				$('#3 p').text("O típico adolescente americano consome 9 horas de media por dia.");
				$('#3 a').attr('href','http://edition.cnn.com/2015/11/03/health/teens-tweens-media-screen-use-report/');

				} else if (inputDate68.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("95% das pessoas com mais de 110 anos são mulheres.");
				$('#1 a').attr('href','http://www.iflscience.com/health-and-medicine/why-are-almost-all-supercentenarians-women/');

				$('#2 p').text("Os autocolantes presentes em frutas são comestíveis.");
				$('#2 a').attr('http://www.hlntv.com/shows/morning-express-robin-meade/articles/2014/01/15/8-things-you-never-knew-about-produce-stickers');

				$('#3 p').text("O típico adolescente americano consome 9 horas de media por dia.");
				$('#3 a').attr('href','http://edition.cnn.com/2015/11/03/health/teens-tweens-media-screen-use-report/');

				$('#4 p').text("O golo mais rápido da história do futebol foi marcado dois segundos depois do inicio da partida.");
				$('#4 a').attr('href','https://en.wikipedia.org/wiki/Fastest_goals_in_association_football');

				} else if (inputDate68.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate69.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("95% das pessoas com mais de 110 anos são mulheres.");
				$('#1 a').attr('href','http://www.iflscience.com/health-and-medicine/why-are-almost-all-supercentenarians-women/');

				$('#2 p').text("Os autocolantes presentes em frutas são comestíveis.");
				$('#2 a').attr('http://www.hlntv.com/shows/morning-express-robin-meade/articles/2014/01/15/8-things-you-never-knew-about-produce-stickers');

				$('#3 p').text("O típico adolescente americano consome 9 horas de media por dia.");
				$('#3 a').attr('href','http://edition.cnn.com/2015/11/03/health/teens-tweens-media-screen-use-report/');

				$('#4 p').text("O golo mais rápido da história do futebol foi marcado dois segundos depois do inicio da partida.");
				$('#4 a').attr('href','https://en.wikipedia.org/wiki/Fastest_goals_in_association_football');

				$('#5 p').text("Um panda adulto precisa de 36 kg de bamboo por dia.");
				$('#5 a').attr('href','http://www.huffingtonpost.com/2013/08/31/why-are-panda-babies-so-small_n_3844218.html1');

				} else if (inputDate69.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("O Coliseu de Roma foi inundado com água em 86 DC para simular uma batalha naval.");
				$('#1 a').attr('href','http://www.atlasobscura.com/articles/ancient-rome-once-filled-the-colosseum-up-with-water-and-staged-epic-mock-sea-battle');

				} else if (inputDate69.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("O Coliseu de Roma foi inundado com água em 86 DC para simular uma batalha naval.");
				$('#1 a').attr('href','http://www.atlasobscura.com/articles/ancient-rome-once-filled-the-colosseum-up-with-water-and-staged-epic-mock-sea-battle');

				$('#2 p').text("O cérebro humano consome 20% do oxigénio que inalamos, apesar de só representar 2% do nosso peso corporal.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/Human_brain#Metabolism');

				} else if (inputDate69.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("O Coliseu de Roma foi inundado com água em 86 DC para simular uma batalha naval.");
				$('#1 a').attr('href','http://www.atlasobscura.com/articles/ancient-rome-once-filled-the-colosseum-up-with-water-and-staged-epic-mock-sea-battle');

				$('#2 p').text("O cérebro humano consome 20% do oxigénio que inalamos, apesar de só representar 2% do nosso peso corporal.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/Human_brain#Metabolism');

				$('#3 p').text("O ornitorrinco é um dos poucos mamíferos que produz veneno.");
				$('#3 a').attr('href','http://www.slate.com/blogs/wild_things/2015/06/22/platypus_venom_painful_immediate_long_lasting_impervious_to_painkillers.html');

				} else if (inputDate69.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {


						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("O Coliseu de Roma foi inundado com água em 86 DC para simular uma batalha naval.");
				$('#1 a').attr('href','http://www.atlasobscura.com/articles/ancient-rome-once-filled-the-colosseum-up-with-water-and-staged-epic-mock-sea-battle');

				$('#2 p').text("O cérebro humano consome 20% do oxigénio que inalamos, apesar de só representar 2% do nosso peso corporal.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/Human_brain#Metabolism');

				$('#3 p').text("O ornitorrinco é um dos poucos mamíferos que produz veneno.");
				$('#3 a').attr('href','http://www.slate.com/blogs/wild_things/2015/06/22/platypus_venom_painful_immediate_long_lasting_impervious_to_painkillers.html');

				$('#4 p').text("O isqueiro foi inventado antes do fósforo.");
				$('#4 a').attr('href','http://www.todayifoundout.com/index.php/2011/10/lighters-were-invented-before-the-match/');

				} else if (inputDate69.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate70.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("O Coliseu de Roma foi inundado com água em 86 DC para simular uma batalha naval.");
				$('#1 a').attr('href','http://www.atlasobscura.com/articles/ancient-rome-once-filled-the-colosseum-up-with-water-and-staged-epic-mock-sea-battle');

				$('#2 p').text("O cérebro humano consome 20% do oxigénio que inalamos, apesar de só representar 2% do nosso peso corporal.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/Human_brain#Metabolism');

				$('#3 p').text("O ornitorrinco é um dos poucos mamíferos que produz veneno.");
				$('#3 a').attr('href','http://www.slate.com/blogs/wild_things/2015/06/22/platypus_venom_painful_immediate_long_lasting_impervious_to_painkillers.html');

				$('#4 p').text("O isqueiro foi inventado antes do fósforo.");
				$('#4 a').attr('href','http://www.todayifoundout.com/index.php/2011/10/lighters-were-invented-before-the-match/');

				$('#5 p').text("5- O leite de hipopótamo é cor-de-rosa.");
				$('#5 a').attr('href','http://en.wikipedia.org/wiki/Talk%3AHippopotamus#Hippo_Milk.3F');

				}  else if (inputDate70.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("Um caracol tem cerca de 25,600 dentes.");
				$('#1 a').attr('href','http://newsvote.bbc.co.uk/cbbcnews/hi/newsid_5410000/newsid_5413100/5413112.stm?markResults=true&a_03=1&x=112&y=6');

				} else if (inputDate70.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("Um caracol tem cerca de 25,600 dentes.");
				$('#1 a').attr('href','http://newsvote.bbc.co.uk/cbbcnews/hi/newsid_5410000/newsid_5413100/5413112.stm?markResults=true&a_03=1&x=112&y=6');

				$('#2 p').text("Ouro é comestível.");
				$('#2 a').attr('http://www.slate.com/articles/health_and_science/explainer/2012/07/the_666_gold_wrapped_douche_burger_is_it_safe_to_eat_gold_.html');

				} else if (inputDate70.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("Um caracol tem cerca de 25,600 dentes.");
				$('#1 a').attr('href','http://newsvote.bbc.co.uk/cbbcnews/hi/newsid_5410000/newsid_5413100/5413112.stm?markResults=true&a_03=1&x=112&y=6');

				$('#2 p').text("Ouro é comestível.");
				$('#2 a').attr('http://www.slate.com/articles/health_and_science/explainer/2012/07/the_666_gold_wrapped_douche_burger_is_it_safe_to_eat_gold_.html');

				$('#3 p').text("Muitos perfumes de alta qualidade contêm fezes de baleia.");
				$('#3 a').attr('href','http://www.huffingtonpost.com/2012/02/15/ambergris-sperm-whale-poop_n_1280161.html');

				} else if (inputDate70.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("Um caracol tem cerca de 25,600 dentes.");
				$('#1 a').attr('href','http://newsvote.bbc.co.uk/cbbcnews/hi/newsid_5410000/newsid_5413100/5413112.stm?markResults=true&a_03=1&x=112&y=6');

				$('#2 p').text("Ouro é comestível.");
				$('#2 a').attr('http://www.slate.com/articles/health_and_science/explainer/2012/07/the_666_gold_wrapped_douche_burger_is_it_safe_to_eat_gold_.html');

				$('#3 p').text("Muitos perfumes de alta qualidade contêm fezes de baleia.");
				$('#3 a').attr('href','http://www.huffingtonpost.com/2012/02/15/ambergris-sperm-whale-poop_n_1280161.html');

				$('#4 p').text("Neva metal em Vénus.");
				$('#4 a').attr('href','http://www.huffingtonpost.com/2013/06/14/venus-metal-snow-planet-mountains-atmosphere_n_3437184.html');

				} else if (inputDate70.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate71.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("Um caracol tem cerca de 25,600 dentes.");
				$('#1 a').attr('href','http://newsvote.bbc.co.uk/cbbcnews/hi/newsid_5410000/newsid_5413100/5413112.stm?markResults=true&a_03=1&x=112&y=6');

				$('#2 p').text("Ouro é comestível.");
				$('#2 a').attr('http://www.slate.com/articles/health_and_science/explainer/2012/07/the_666_gold_wrapped_douche_burger_is_it_safe_to_eat_gold_.html');

				$('#3 p').text("Muitos perfumes de alta qualidade contêm fezes de baleia.");
				$('#3 a').attr('href','http://www.huffingtonpost.com/2012/02/15/ambergris-sperm-whale-poop_n_1280161.html');

				$('#4 p').text("Neva metal em Vénus.");
				$('#4 a').attr('href','http://www.huffingtonpost.com/2013/06/14/venus-metal-snow-planet-mountains-atmosphere_n_3437184.html');

				$('#5 p').text("O vinho tinto mata certas células cancerígenas.");
				$('#5 a').attr('href','https://www.sciencedaily.com/releases/2014/12/141203161134.htm');

				} else if (inputDate71.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("A urina dos diabéticos é doce.");
				$('#1 a').attr('href','https://www.verywell.com/what-is-diabetes-mellitus-3289535');

				} else if (inputDate71.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("A urina dos diabéticos é doce.");
				$('#1 a').attr('href','https://www.verywell.com/what-is-diabetes-mellitus-3289535');

				$('#2 p').text("1 em cada 7 americanos com tatuagens arrependem-se de ter feito uma tatuagem.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/Tattoo_removal#Motives');

				} else if (inputDate71.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("A urina dos diabéticos é doce.");
				$('#1 a').attr('href','https://www.verywell.com/what-is-diabetes-mellitus-3289535');

				$('#2 p').text("1 em cada 7 americanos com tatuagens arrependem-se de ter feito uma tatuagem.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/Tattoo_removal#Motives');

				$('#3 p').text("Os peixes também tossem.");
				$('#3 a').attr('href','http://www.sciencedirect.com/science/article/pii/0043135478901872');

				} else if (inputDate71.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("A urina dos diabéticos é doce.");
				$('#1 a').attr('href','https://www.verywell.com/what-is-diabetes-mellitus-3289535');

				$('#2 p').text("1 em cada 7 americanos com tatuagens arrependem-se de ter feito uma tatuagem.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/Tattoo_removal#Motives');

				$('#3 p').text("Os peixes também tossem.");
				$('#3 a').attr('href','http://www.sciencedirect.com/science/article/pii/0043135478901872');

				$('#4 p').text("A África do Sul tem 11 línguas oficiais.");
				$('#4 a').attr('href','http://www.southafrica.info/about/people/language.htm#.Uv50w2J5PfI');

				} else if (inputDate71.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate72.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("A urina dos diabéticos é doce.");
				$('#1 a').attr('href','https://www.verywell.com/what-is-diabetes-mellitus-3289535');

				$('#2 p').text("1 em cada 7 americanos com tatuagens arrependem-se de ter feito uma tatuagem.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/Tattoo_removal#Motives');

				$('#3 p').text("Os peixes também tossem.");
				$('#3 a').attr('href','http://www.sciencedirect.com/science/article/pii/0043135478901872');

				$('#4 p').text("A África do Sul tem 11 línguas oficiais.");
				$('#4 a').attr('href','http://www.southafrica.info/about/people/language.htm#.Uv50w2J5PfI');

				$('#5 p').text("Autismo afecta cerca de 22 milhões de pessoas no mundo.");
				$('#5 a').attr('href','https://en.wikipedia.org/wiki/Autism');

				} else if (inputDate72.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("O wrestler John Cena já concedeu mais de 500 desejos a pessoas com doenças terminais, um recorde mundial para este tipo de acções.");
				$('#1 a').attr('href','http://wish.org/content/john-cena-500-wish');

				} else if (inputDate72.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("O wrestler John Cena já concedeu mais de 500 desejos a pessoas com doenças terminais, um recorde mundial para este tipo de acções.");
				$('#1 a').attr('href','http://wish.org/content/john-cena-500-wish');

				$('#2 p').text("Ao tentar transformar urina humana em ouro, o alquimista Hennig Brand descobriu o elemento químico fósforo.");
				$('#2 a').attr('href','http://www.npr.org/sections/health-shots/2016/02/02/465188104/phosphorus-starts-with-pee-in-this-tale-of-scientific-serendipity');

				} else if (inputDate72.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("O wrestler John Cena já concedeu mais de 500 desejos a pessoas com doenças terminais, um recorde mundial para este tipo de acções.");
				$('#1 a').attr('href','http://wish.org/content/john-cena-500-wish');

				$('#2 p').text("Ao tentar transformar urina humana em ouro, o alquimista Hennig Brand descobriu o elemento químico fósforo.");
				$('#2 a').attr('href','http://www.npr.org/sections/health-shots/2016/02/02/465188104/phosphorus-starts-with-pee-in-this-tale-of-scientific-serendipity');

				$('#3 p').text("O filme “Toy Story 2” foi apagado acidentalmente dos computadores da empresa Pixar a meio da sua produção. O projecto teve que começar do início.");
				$('#3 a').attr('http://thenextweb.com/media/2012/05/21/how-pixars-toy-story-2-was-deleted-twice-once-by-technology-and-again-for-its-own-good/#post');

				} else if (inputDate72.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("O wrestler John Cena já concedeu mais de 500 desejos a pessoas com doenças terminais, um recorde mundial para este tipo de acções.");
				$('#1 a').attr('href','http://wish.org/content/john-cena-500-wish');

				$('#2 p').text("Ao tentar transformar urina humana em ouro, o alquimista Hennig Brand descobriu o elemento químico fósforo.");
				$('#2 a').attr('href','http://www.npr.org/sections/health-shots/2016/02/02/465188104/phosphorus-starts-with-pee-in-this-tale-of-scientific-serendipity');

				$('#3 p').text("O filme “Toy Story 2” foi apagado acidentalmente dos computadores da empresa Pixar a meio da sua produção. O projecto teve que começar do início.");
				$('#3 a').attr('http://thenextweb.com/media/2012/05/21/how-pixars-toy-story-2-was-deleted-twice-once-by-technology-and-again-for-its-own-good/#post');

				$('#4 p').text("Existem duas irmãs gémeas nascidas com 87 dias de diferença na Irlanda.");
				$('#4 a').attr('href','http://www.huffingtonpost.com.au/entry/twins-born-87-days-apart-ireland-guiness-record_n_3186135.html?section=australia');

				} else if (inputDate72.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate73.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("O wrestler John Cena já concedeu mais de 500 desejos a pessoas com doenças terminais, um recorde mundial para este tipo de acções.");
				$('#1 a').attr('href','http://wish.org/content/john-cena-500-wish');

				$('#2 p').text("Ao tentar transformar urina humana em ouro, o alquimista Hennig Brand descobriu o elemento químico fósforo.");
				$('#2 a').attr('href','http://www.npr.org/sections/health-shots/2016/02/02/465188104/phosphorus-starts-with-pee-in-this-tale-of-scientific-serendipity');

				$('#3 p').text("O filme “Toy Story 2” foi apagado acidentalmente dos computadores da empresa Pixar a meio da sua produção. O projecto teve que começar do início.");
				$('#3 a').attr('http://thenextweb.com/media/2012/05/21/how-pixars-toy-story-2-was-deleted-twice-once-by-technology-and-again-for-its-own-good/#post');

				$('#4 p').text("Existem duas irmãs gémeas nascidas com 87 dias de diferença na Irlanda.");
				$('#4 a').attr('href','http://www.huffingtonpost.com.au/entry/twins-born-87-days-apart-ireland-guiness-record_n_3186135.html?section=australia');

				$('#5 p').text("O Papa Francisco ganhou mais de um milhão de seguidores no Twitter em menos de 12 horas, um recorde nunca antes visto.");
				$('#5 a').attr('href','http://money.cnn.com/2016/03/19/technology/instagram-pope-francis-account/');

				} else 	if (inputDate73.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("A cada 2.5 segundos é vendido um jarro de Nutella algures no mundo.");
				$('#1 a').attr('href','http://mentalfloss.com/article/50068/8-things-you-may-not-know-about-nutella');

				} else if (inputDate73.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("A cada 2.5 segundos é vendido um jarro de Nutella algures no mundo.");
				$('#1 a').attr('href','http://mentalfloss.com/article/50068/8-things-you-may-not-know-about-nutella');

				$('#2 p').text("A Inglaterra é mais pequena que o estado da Florida.");
				$('#2 a').attr('http://www.solarius.com/dvp/florida/index.html');

				} else if (inputDate73.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("A cada 2.5 segundos é vendido um jarro de Nutella algures no mundo.");
				$('#1 a').attr('href','http://mentalfloss.com/article/50068/8-things-you-may-not-know-about-nutella');

				$('#2 p').text("A Inglaterra é mais pequena que o estado da Florida.");
				$('#2 a').attr('http://www.solarius.com/dvp/florida/index.html');

				$('#3 p').text("O violino moderno contêm mais de 70 peças diferentes.");
				$('#3 a').attr('href','https://www.theviolinsite.com/violin-facts.html');

				} else if (inputDate73.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');

				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("A cada 2.5 segundos é vendido um jarro de Nutella algures no mundo.");
				$('#1 a').attr('href','http://mentalfloss.com/article/50068/8-things-you-may-not-know-about-nutella');

				$('#2 p').text("A Inglaterra é mais pequena que o estado da Florida.");
				$('#2 a').attr('http://www.solarius.com/dvp/florida/index.html');

				$('#3 p').text("O violino moderno contêm mais de 70 peças diferentes.");
				$('#3 a').attr('href','https://www.theviolinsite.com/violin-facts.html');

				$('#4 p').text("O Deserto de Lut no Irão é o sítio mais quente à face da Terra.");
				$('#4 a').attr('href','http://www.seeker.com/wheres-the-hottest-place-on-earth-1765887725.html#news.discovery.com');

				} else if (inputDate73.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate74.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("A cada 2.5 segundos é vendido um jarro de Nutella algures no mundo.");
				$('#1 a').attr('href','http://mentalfloss.com/article/50068/8-things-you-may-not-know-about-nutella');

				$('#2 p').text("A Inglaterra é mais pequena que o estado da Florida.");
				$('#2 a').attr('http://www.solarius.com/dvp/florida/index.html');

				$('#3 p').text("O violino moderno contêm mais de 70 peças diferentes.");
				$('#3 a').attr('href','https://www.theviolinsite.com/violin-facts.html');

				$('#4 p').text("O Deserto de Lut no Irão é o sítio mais quente à face da Terra.");
				$('#4 a').attr('href','http://www.seeker.com/wheres-the-hottest-place-on-earth-1765887725.html#news.discovery.com');

				$('#5 p').text("Mais de 600,000 tentativas de roubo de palavras-passe de contas de Facebook são efectuadas todos os dias.");
				$('#5 a').attr('href','http://www.telegraph.co.uk/technology/facebook/8856417/Hackers-go-after-Facebook-sites-600000-times-every-day.html');

				} else 	if (inputDate74.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("16% da população da Lituânia é resistente ao HIV/SIDA.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/Lithuanians#Genetics');

				} else if (inputDate74.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("16% da população da Lituânia é resistente ao HIV/SIDA.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/Lithuanians#Genetics');

				$('#2 p').text("As formigas-rainha podem viver até 30 anos, enquanto que as formigas-obreiras não vivem mais de 3 anos.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/Ant#Life_cycle');

				} else if (inputDate74.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("16% da população da Lituânia é resistente ao HIV/SIDA.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/Lithuanians#Genetics');

				$('#2 p').text("As formigas-rainha podem viver até 30 anos, enquanto que as formigas-obreiras não vivem mais de 3 anos.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/Ant#Life_cycle');

				$('#3 p').text("As plantas podem contrair cancro.");
				$('#3 a').attr('href','http://www.popsci.com/article/science/ask-anything-do-plants-get-cancer');

				} else if (inputDate74.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("16% da população da Lituânia é resistente ao HIV/SIDA.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/Lithuanians#Genetics');

				$('#2 p').text("As formigas-rainha podem viver até 30 anos, enquanto que as formigas-obreiras não vivem mais de 3 anos.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/Ant#Life_cycle');

				$('#3 p').text("As plantas podem contrair cancro.");
				$('#3 a').attr('href','http://www.popsci.com/article/science/ask-anything-do-plants-get-cancer');

				$('#4 p').text("Os elefantes têm medo de abelhas.");
				$('#4 a').attr('href','http://www.telegraph.co.uk/environment/');

				} else if (inputDate74.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate75.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("16% da população da Lituânia é resistente ao HIV/SIDA.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/Lithuanians#Genetics');

				$('#2 p').text("As formigas-rainha podem viver até 30 anos, enquanto que as formigas-obreiras não vivem mais de 3 anos.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/Ant#Life_cycle');

				$('#3 p').text("As plantas podem contrair cancro.");
				$('#3 a').attr('href','http://www.popsci.com/article/science/ask-anything-do-plants-get-cancer');

				$('#4 p').text("Os elefantes têm medo de abelhas.");
				$('#4 a').attr('href','http://www.telegraph.co.uk/environment/');

				$('#5 p').text("A Rússia tem mais de 8400 armas nucleares.");
				$('#5 a').attr('href','http://edition.cnn.com/interactive/2013/03/world/nuclear-weapon-states/');

				} else if (inputDate75.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("1 em cada 113000 cirurgias no EUA é efectuada na pessoa ou parte do corpo errada.");
				$('#1 a').attr('href','https://books.google.com/books?id=-i-5BAAAQBAJ&pg=PA403&lpg=PA403&dq=1+in+112,994+surgeries+is+performed+on+the+wrong+person+or+body+part.&source=bl&ots=2kkiZAzBZP&sig=mlgMM8j1LgKRJnn8Wm2j6Jk5DS4&hl=es-419&sa=X&ei=Be88VfKCKonLsATTpoC4Dw&redir_esc=y#v=onepage&q=1%20in%20112,994%20surgeries%20is%20performed%20on%20the%20wrong%20person%20or%20body%20part.&f=false');

				} else if (inputDate75.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("1 em cada 113000 cirurgias no EUA é efectuada na pessoa ou parte do corpo errada.");
				$('#1 a').attr('href','https://books.google.com/books?id=-i-5BAAAQBAJ&pg=PA403&lpg=PA403&dq=1+in+112,994+surgeries+is+performed+on+the+wrong+person+or+body+part.&source=bl&ots=2kkiZAzBZP&sig=mlgMM8j1LgKRJnn8Wm2j6Jk5DS4&hl=es-419&sa=X&ei=Be88VfKCKonLsATTpoC4Dw&redir_esc=y#v=onepage&q=1%20in%20112,994%20surgeries%20is%20performed%20on%20the%20wrong%20person%20or%20body%20part.&f=false');

				$('#2 p').text("O nome oficial da nação do México é “Estados Unidos do México”.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/Mexico');

				} else if (inputDate75.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("1 em cada 113000 cirurgias no EUA é efectuada na pessoa ou parte do corpo errada.");
				$('#1 a').attr('href','https://books.google.com/books?id=-i-5BAAAQBAJ&pg=PA403&lpg=PA403&dq=1+in+112,994+surgeries+is+performed+on+the+wrong+person+or+body+part.&source=bl&ots=2kkiZAzBZP&sig=mlgMM8j1LgKRJnn8Wm2j6Jk5DS4&hl=es-419&sa=X&ei=Be88VfKCKonLsATTpoC4Dw&redir_esc=y#v=onepage&q=1%20in%20112,994%20surgeries%20is%20performed%20on%20the%20wrong%20person%20or%20body%20part.&f=false');

				$('#2 p').text("O nome oficial da nação do México é “Estados Unidos do México”.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/Mexico');

				$('#3 p').text("Se a Torre Eiffel fosse construída hoje, custaria cerca de 31 milhões de euros.");
				$('#3 a').attr('href','http://mashable.com/2015/04/28/historical-landmarks-2015-cost/');

				} else if (inputDate75.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("1 em cada 113000 cirurgias no EUA é efectuada na pessoa ou parte do corpo errada.");
				$('#1 a').attr('href','https://books.google.com/books?id=-i-5BAAAQBAJ&pg=PA403&lpg=PA403&dq=1+in+112,994+surgeries+is+performed+on+the+wrong+person+or+body+part.&source=bl&ots=2kkiZAzBZP&sig=mlgMM8j1LgKRJnn8Wm2j6Jk5DS4&hl=es-419&sa=X&ei=Be88VfKCKonLsATTpoC4Dw&redir_esc=y#v=onepage&q=1%20in%20112,994%20surgeries%20is%20performed%20on%20the%20wrong%20person%20or%20body%20part.&f=false');

				$('#2 p').text("O nome oficial da nação do México é “Estados Unidos do México”.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/Mexico');

				$('#3 p').text("Se a Torre Eiffel fosse construída hoje, custaria cerca de 31 milhões de euros.");
				$('#3 a').attr('href','http://mashable.com/2015/04/28/historical-landmarks-2015-cost/');

				$('#4 p').text("As mulheres pestanejam cerca de 19 vezes por minuto, os homens 11.");
				$('#4 a').attr('href','http://www.ncbi.nlm.nih.gov/pubmed/18565090');

				} else if (inputDate75.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate76.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("1 em cada 113000 cirurgias no EUA é efectuada na pessoa ou parte do corpo errada.");
				$('#1 a').attr('href','https://books.google.com/books?id=-i-5BAAAQBAJ&pg=PA403&lpg=PA403&dq=1+in+112,994+surgeries+is+performed+on+the+wrong+person+or+body+part.&source=bl&ots=2kkiZAzBZP&sig=mlgMM8j1LgKRJnn8Wm2j6Jk5DS4&hl=es-419&sa=X&ei=Be88VfKCKonLsATTpoC4Dw&redir_esc=y#v=onepage&q=1%20in%20112,994%20surgeries%20is%20performed%20on%20the%20wrong%20person%20or%20body%20part.&f=false');

				$('#2 p').text("O nome oficial da nação do México é “Estados Unidos do México”.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/Mexico');

				$('#3 p').text("Se a Torre Eiffel fosse construída hoje, custaria cerca de 31 milhões de euros.");
				$('#3 a').attr('href','http://mashable.com/2015/04/28/historical-landmarks-2015-cost/');

				$('#4 p').text("As mulheres pestanejam cerca de 19 vezes por minuto, os homens 11.");
				$('#4 a').attr('href','http://www.ncbi.nlm.nih.gov/pubmed/18565090');

				$('#5 p').text("Mais de 16 milhões de pessoas morreram na Primeira Grande Guerra.");
				$('#5 a').attr('href','https://en.wikipedia.org/wiki/World_War_I');

				} else if (inputDate76.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("Existe um hotel na Bolívia feito quase inteiramente de sal, incluindo camas e cadeiras de sal.");
				$('#1 a').attr('href','http://news.buzzbuzzhome.com/2013/07/unconventional-building-materials.html');

				} else if (inputDate76.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("Existe um hotel na Bolívia feito quase inteiramente de sal, incluindo camas e cadeiras de sal.");
				$('#1 a').attr('href','http://news.buzzbuzzhome.com/2013/07/unconventional-building-materials.html');

				$('#2 p').text("30% dos cancros poderiam ser evitados através de uma dieta saudável e exercício físico, bem como não fumar e não consumir álcool.");
				$('#2 a').attr('http://www.who.int/features/factfiles/cancer/facts/en/index9.html');

				} else if (inputDate76.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("Existe um hotel na Bolívia feito quase inteiramente de sal, incluindo camas e cadeiras de sal.");
				$('#1 a').attr('href','http://news.buzzbuzzhome.com/2013/07/unconventional-building-materials.html');

				$('#2 p').text("30% dos cancros poderiam ser evitados através de uma dieta saudável e exercício físico, bem como não fumar e não consumir álcool.");
				$('#2 a').attr('http://www.who.int/features/factfiles/cancer/facts/en/index9.html');

				$('#3 p').text("25,000,000 das suas células morreram enquanto lia este facto.");
				$('#3 a').attr('href','http://www.huffingtonpost.com/2013/04/20/19-mind-blowing-facts-_n_3117729.html');

				} else if (inputDate76.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("Existe um hotel na Bolívia feito quase inteiramente de sal, incluindo camas e cadeiras de sal.");
				$('#1 a').attr('href','http://news.buzzbuzzhome.com/2013/07/unconventional-building-materials.html');

				$('#2 p').text("30% dos cancros poderiam ser evitados através de uma dieta saudável e exercício físico, bem como não fumar e não consumir álcool.");
				$('#2 a').attr('http://www.who.int/features/factfiles/cancer/facts/en/index9.html');

				$('#3 p').text("25,000,000 das suas células morreram enquanto lia este facto.");
				$('#3 a').attr('href','http://www.huffingtonpost.com/2013/04/20/19-mind-blowing-facts-_n_3117729.html');

				$('#4 p').text("Não existe nenhuma diferença na anatomia do cérebro de pessoas com autismo e pessoas sem autismo.");
				$('#4 a').attr('href','http://blogs.discovermagazine.com/neuroskeptic/2014/10/25/autistic-people-normal-brain-anatomy/');

				} else if (inputDate76.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate77.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("Existe um hotel na Bolívia feito quase inteiramente de sal, incluindo camas e cadeiras de sal.");
				$('#1 a').attr('href','http://news.buzzbuzzhome.com/2013/07/unconventional-building-materials.html');

				$('#2 p').text("30% dos cancros poderiam ser evitados através de uma dieta saudável e exercício físico, bem como não fumar e não consumir álcool.");
				$('#2 a').attr('http://www.who.int/features/factfiles/cancer/facts/en/index9.html');

				$('#3 p').text("25,000,000 das suas células morreram enquanto lia este facto.");
				$('#3 a').attr('href','http://www.huffingtonpost.com/2013/04/20/19-mind-blowing-facts-_n_3117729.html');

				$('#4 p').text("Não existe nenhuma diferença na anatomia do cérebro de pessoas com autismo e pessoas sem autismo.");
				$('#4 a').attr('href','http://blogs.discovermagazine.com/neuroskeptic/2014/10/25/autistic-people-normal-brain-anatomy/');

				$('#5 p').text("Um crocodilo desenvolve cerca de 2000 a 3000 dentes durante a vida.");
				$('#5 a').attr('href','http://nationalzoo.si.edu/animals/reptilesamphibians/facts/factsheets/americanalligator.cfm');

				} else if (inputDate77.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("Os tubarões já sobreviveram a 5 extinções em massa.");
				$('#1 a').attr('href','http://www.sharksavers.org/en/education/biology/450-million-years-of-sharks1/');

				} else if (inputDate77.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("Os tubarões já sobreviveram a 5 extinções em massa.");
				$('#1 a').attr('href','http://www.sharksavers.org/en/education/biology/450-million-years-of-sharks1/');

				$('#2 p').text("A Heinz vende todos os anos cerca de duas garrafas de ketchup por cada ser humano vivo.");
				$('#2 a').attr('http://www.heinz.com/our-company/press-room/trivia.aspx');

				} else if (inputDate77.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("Os tubarões já sobreviveram a 5 extinções em massa.");
				$('#1 a').attr('href','http://www.sharksavers.org/en/education/biology/450-million-years-of-sharks1/');

				$('#2 p').text("A Heinz vende todos os anos cerca de duas garrafas de ketchup por cada ser humano vivo.");
				$('#2 a').attr('http://www.heinz.com/our-company/press-room/trivia.aspx');

				$('#3 p').text("A maior parte dos gatos caseiros consegue correr mais rápido que o Usain Bolt.");
				$('#3 a').attr('href','http://www.wsj.com/news/articles/SB10001424052970204884404574364680587931684');

				} else if (inputDate77.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');

				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("Os tubarões já sobreviveram a 5 extinções em massa.");
				$('#1 a').attr('href','http://www.sharksavers.org/en/education/biology/450-million-years-of-sharks1/');

				$('#2 p').text("A Heinz vende todos os anos cerca de duas garrafas de ketchup por cada ser humano vivo.");
				$('#2 a').attr('http://www.heinz.com/our-company/press-room/trivia.aspx');

				$('#3 p').text("A maior parte dos gatos caseiros consegue correr mais rápido que o Usain Bolt.");
				$('#3 a').attr('href','http://www.wsj.com/news/articles/SB10001424052970204884404574364680587931684');

				$('#4 p').text("A cada segundo, são comidos 40 kilos de chocolate nos EUA.");
				$('#4 a').attr('href','http://message.snopes.com/showthread.php?t=49682');

				} else if (inputDate77.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate78.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("Os tubarões já sobreviveram a 5 extinções em massa.");
				$('#1 a').attr('href','http://www.sharksavers.org/en/education/biology/450-million-years-of-sharks1/');

				$('#2 p').text("A Heinz vende todos os anos cerca de duas garrafas de ketchup por cada ser humano vivo.");
				$('#2 a').attr('http://www.heinz.com/our-company/press-room/trivia.aspx');

				$('#3 p').text("A maior parte dos gatos caseiros consegue correr mais rápido que o Usain Bolt.");
				$('#3 a').attr('href','http://www.wsj.com/news/articles/SB10001424052970204884404574364680587931684');

				$('#4 p').text("A cada segundo, são comidos 40 kilos de chocolate nos EUA.");
				$('#4 a').attr('href','http://message.snopes.com/showthread.php?t=49682');

				$('#5 p').text("CEO é a profissão com mais psicopatas.");
				$('#5 a').attr('href','http://time.com/32647/which-professions-have-the-most-psychopaths-the-fewest/');

				} else 	if (inputDate78.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("No Japão, deixar gorjeta é considerado rude.");
				$('#1 a').attr('href','http://www.japantoday.com/smartphone/view/lifestyle/japanese-restaurants-in-new-york-introduce-ban-on-tipping');

				} else if (inputDate78.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("No Japão, deixar gorjeta é considerado rude.");
				$('#1 a').attr('href','http://www.japantoday.com/smartphone/view/lifestyle/japanese-restaurants-in-new-york-introduce-ban-on-tipping');

				$('#2 p').text("O tempo médio para ganhar um novo hábito é de 66 dias.");
				$('#2 a').attr('http://www.sciencealert.com/here-s-how-long-it-takes-to-break-a-habit-according-to-science');

				} else if (inputDate78.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("No Japão, deixar gorjeta é considerado rude.");
				$('#1 a').attr('href','http://www.japantoday.com/smartphone/view/lifestyle/japanese-restaurants-in-new-york-introduce-ban-on-tipping');

				$('#2 p').text("O tempo médio para ganhar um novo hábito é de 66 dias.");
				$('#2 a').attr('http://www.sciencealert.com/here-s-how-long-it-takes-to-break-a-habit-according-to-science');

				$('#3 p').text("No Vaticano bebem-se em média por ano 105 garrafas de vinho por habitante.");
				$('#3 a').attr('href','http://www.independent.co.uk/news/world/europe/vatican-city-drinks-more-wine-per-person-than-anywhere-else-in-the-world-9151475.html');

				} else if (inputDate78.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {


						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("No Japão, deixar gorjeta é considerado rude.");
				$('#1 a').attr('href','http://www.japantoday.com/smartphone/view/lifestyle/japanese-restaurants-in-new-york-introduce-ban-on-tipping');

				$('#2 p').text("O tempo médio para ganhar um novo hábito é de 66 dias.");
				$('#2 a').attr('http://www.sciencealert.com/here-s-how-long-it-takes-to-break-a-habit-according-to-science');

				$('#3 p').text("No Vaticano bebem-se em média por ano 105 garrafas de vinho por habitante.");
				$('#3 a').attr('href','http://www.independent.co.uk/news/world/europe/vatican-city-drinks-more-wine-per-person-than-anywhere-else-in-the-world-9151475.html');

				$('#4 p').text("Existem menos de 2000 pandas no mundo.");
				$('#4 a').attr('href','http://www.huffingtonpost.com/2013/08/31/why-are-panda-babies-so-small_n_3844218.html');

				} else if (inputDate78.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate79.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("No Japão, deixar gorjeta é considerado rude.");
				$('#1 a').attr('href','http://www.japantoday.com/smartphone/view/lifestyle/japanese-restaurants-in-new-york-introduce-ban-on-tipping');

				$('#2 p').text("O tempo médio para ganhar um novo hábito é de 66 dias.");
				$('#2 a').attr('http://www.sciencealert.com/here-s-how-long-it-takes-to-break-a-habit-according-to-science');

				$('#3 p').text("No Vaticano bebem-se em média por ano 105 garrafas de vinho por habitante.");
				$('#3 a').attr('href','http://www.independent.co.uk/news/world/europe/vatican-city-drinks-more-wine-per-person-than-anywhere-else-in-the-world-9151475.html');

				$('#4 p').text("Existem menos de 2000 pandas no mundo.");
				$('#4 a').attr('href','http://www.huffingtonpost.com/2013/08/31/why-are-panda-babies-so-small_n_3844218.html');

				$('#5 p').text("Os olhos de uma avestruz são maiores que o seu cérebro.");
				$('#5 a').attr('href','https://www.ostriches.org/factor.html#brain');

				}  else if (inputDate79.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("É impossível espirrar enquanto se dorme.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/Sneeze');

				} else if (inputDate79.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("É impossível espirrar enquanto se dorme.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/Sneeze');

				$('#2 p').text("A gravidez mais longa de uma mulher durou 375 dias (12.5 meses).");
				$('#2 a').attr('http://content.time.com/time/magazine/article/0,9171,797153,00.html');

				} else if (inputDate79.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("É impossível espirrar enquanto se dorme.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/Sneeze');

				$('#2 p').text("A gravidez mais longa de uma mulher durou 375 dias (12.5 meses).");
				$('#2 a').attr('http://content.time.com/time/magazine/article/0,9171,797153,00.html');

				$('#3 p').text("Em Marte, os pôr-do-sol são azuis.");
				$('#3 a').attr('href','http://geonews.tamu.edu/error.html');

				} else if (inputDate79.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("É impossível espirrar enquanto se dorme.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/Sneeze');

				$('#2 p').text("A gravidez mais longa de uma mulher durou 375 dias (12.5 meses).");
				$('#2 a').attr('http://content.time.com/time/magazine/article/0,9171,797153,00.html');

				$('#3 p').text("Em Marte, os pôr-do-sol são azuis.");
				$('#3 a').attr('href','http://geonews.tamu.edu/error.html');

				$('#4 p').text("É proibido vender coca-cola em Cuba e na Coreia do Norte.");
				$('#4 a').attr('href','http://www.bbc.co.uk/news/magazine-19550067');

				} else if (inputDate79.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate80.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("É impossível espirrar enquanto se dorme.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/Sneeze');

				$('#2 p').text("A gravidez mais longa de uma mulher durou 375 dias (12.5 meses).");
				$('#2 a').attr('http://content.time.com/time/magazine/article/0,9171,797153,00.html');

				$('#3 p').text("Em Marte, os pôr-do-sol são azuis.");
				$('#3 a').attr('href','http://geonews.tamu.edu/error.html');

				$('#4 p').text("É proibido vender coca-cola em Cuba e na Coreia do Norte.");
				$('#4 a').attr('href','http://www.bbc.co.uk/news/magazine-19550067');

				$('#5 p').text("O dna de ratos e humanos é coincidente em 97.5%.");
				$('#5 a').attr('href','http://www.newscientist.com/article/dn2352-just-25-of-dna-turns-mice-into-men.html');

				} else if (inputDate80.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("É proibido mastigar pastilha em Singapura.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/Chewing_gum_ban_in_Singapore');

				} else if (inputDate80.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("É proibido mastigar pastilha em Singapura.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/Chewing_gum_ban_in_Singapore');

				$('#2 p').text("Philofobia é o medo de se apaixonar.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/Philophobia_%28fear%29');

				} else if (inputDate80.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("É proibido mastigar pastilha em Singapura.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/Chewing_gum_ban_in_Singapore');

				$('#2 p').text("Philofobia é o medo de se apaixonar.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/Philophobia_%28fear%29');

				$('#3 p').text("Os cientistas da NASA descobriram estrelas frias o suficiente para tocar.");
				$('#3 a').attr('href','http://io9.gizmodo.com/5833976/nasa-scientists-have-discovered-stars-that-are-cool-enough-to-touch');

				} else if (inputDate80.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("É proibido mastigar pastilha em Singapura.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/Chewing_gum_ban_in_Singapore');

				$('#2 p').text("Philofobia é o medo de se apaixonar.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/Philophobia_%28fear%29');

				$('#3 p').text("Os cientistas da NASA descobriram estrelas frias o suficiente para tocar.");
				$('#3 a').attr('href','http://io9.gizmodo.com/5833976/nasa-scientists-have-discovered-stars-that-are-cool-enough-to-touch');

				$('#4 p').text("149-0 é o maior resultado de um jogo de futebol oficial.");
				$('#4 a').attr('href','https://en.m.wikipedia.org/wiki/AS_Adema_149%E2%80%930_SO_l%27Emyrne');

				} else if (inputDate80.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate81.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("É proibido mastigar pastilha em Singapura.");
				$('#1 a').attr('href','https://en.wikipedia.org/wiki/Chewing_gum_ban_in_Singapore');

				$('#2 p').text("Philofobia é o medo de se apaixonar.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/Philophobia_%28fear%29');

				$('#3 p').text("Os cientistas da NASA descobriram estrelas frias o suficiente para tocar.");
				$('#3 a').attr('href','http://io9.gizmodo.com/5833976/nasa-scientists-have-discovered-stars-that-are-cool-enough-to-touch');

				$('#4 p').text("149-0 é o maior resultado de um jogo de futebol oficial.");
				$('#4 a').attr('href','https://en.m.wikipedia.org/wiki/AS_Adema_149%E2%80%930_SO_l%27Emyrne');

				$('#5 p').text("No Reino Unido, todos os cidadãos que chegarem aos 100 anos de idade, recebem uma carta pessoal da Rainha.");
				$('#5 a').attr('href','http://news.bbc.co.uk/2/hi/uk_news/366998.stm');

				} else if (inputDate81.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("Durante as Guerras do Iraque e do Afeganistão, o exército dos EUA gastou mais de 20 biliões de dólares por ano em ar condicionado.");
				$('#1 a').attr('href','http://www.npr.org/2011/06/25/137414737/among-the-costs-of-war-20b-in-air-conditioning');

				} else if (inputDate81.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("Durante as Guerras do Iraque e do Afeganistão, o exército dos EUA gastou mais de 20 biliões de dólares por ano em ar condicionado.");
				$('#1 a').attr('href','http://www.npr.org/2011/06/25/137414737/among-the-costs-of-war-20b-in-air-conditioning');

				$('#2 p').text("O homem que inventou o frisbee foi cremado ao morrer e as suas cinzas foram usadas para fazer vários frisbees.");
				$('#2 a').attr('http://edition.cnn.com/2010/LIVING/08/02/mf.cremation.ashes.where.go/');

				} else if (inputDate81.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("Durante as Guerras do Iraque e do Afeganistão, o exército dos EUA gastou mais de 20 biliões de dólares por ano em ar condicionado.");
				$('#1 a').attr('href','http://www.npr.org/2011/06/25/137414737/among-the-costs-of-war-20b-in-air-conditioning');

				$('#2 p').text("O homem que inventou o frisbee foi cremado ao morrer e as suas cinzas foram usadas para fazer vários frisbees.");
				$('#2 a').attr('http://edition.cnn.com/2010/LIVING/08/02/mf.cremation.ashes.where.go/');

				$('#3 p').text("Dois terços dos ursos polares de todo o mundo vivem no Canadá.");
				$('#3 a').attr('href','http://www.wwf.ca/conservation/arctic/wildlife/polar_bear/');

				} else if (inputDate81.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("Durante as Guerras do Iraque e do Afeganistão, o exército dos EUA gastou mais de 20 biliões de dólares por ano em ar condicionado.");
				$('#1 a').attr('href','http://www.npr.org/2011/06/25/137414737/among-the-costs-of-war-20b-in-air-conditioning');

				$('#2 p').text("O homem que inventou o frisbee foi cremado ao morrer e as suas cinzas foram usadas para fazer vários frisbees.");
				$('#2 a').attr('http://edition.cnn.com/2010/LIVING/08/02/mf.cremation.ashes.where.go/');

				$('#3 p').text("Dois terços dos ursos polares de todo o mundo vivem no Canadá.");
				$('#3 a').attr('href','http://www.wwf.ca/conservation/arctic/wildlife/polar_bear/');

				$('#4 p').text("Gandhi sobreviveu 21 dias sem comida.");
				$('#4 a').attr('href','http://www.scientificamerican.com/article/how-long-can-a-person-sur/');

				} else if (inputDate81.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate82.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("Durante as Guerras do Iraque e do Afeganistão, o exército dos EUA gastou mais de 20 biliões de dólares por ano em ar condicionado.");
				$('#1 a').attr('href','http://www.npr.org/2011/06/25/137414737/among-the-costs-of-war-20b-in-air-conditioning');

				$('#2 p').text("O homem que inventou o frisbee foi cremado ao morrer e as suas cinzas foram usadas para fazer vários frisbees.");
				$('#2 a').attr('http://edition.cnn.com/2010/LIVING/08/02/mf.cremation.ashes.where.go/');

				$('#3 p').text("Dois terços dos ursos polares de todo o mundo vivem no Canadá.");
				$('#3 a').attr('href','http://www.wwf.ca/conservation/arctic/wildlife/polar_bear/');

				$('#4 p').text("Gandhi sobreviveu 21 dias sem comida.");
				$('#4 a').attr('href','http://www.scientificamerican.com/article/how-long-can-a-person-sur/');

				$('#5 p').text("A probabilidade de viver 110 anos é de 1 para 7 milhões.");
				$('#5 a').attr('href','http://www.smithsonianmag.com/science-nature/keeping-track-oldest-people-world-180951976/?no-ist');

				} else if (inputDate82.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("O francês foi a língua oficial da Inglaterra durante mais de 300 anos.");
				$('#1 a').attr('href','http://www.scifacts.net/775/french_was_the_official_language_of_england_for_about_300_years_from_1066_till_1362');

				} else if (inputDate82.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("O francês foi a língua oficial da Inglaterra durante mais de 300 anos.");
				$('#1 a').attr('href','http://www.scifacts.net/775/french_was_the_official_language_of_england_for_about_300_years_from_1066_till_1362');

				$('#2 p').text("Leonardo DaVinci conseguia escrever com uma mão enquanto desenhava com a outra.");
				$('#2 a').attr('http://discovermagazine.com/2006/may/10-da-vinci');

				} else if (inputDate82.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("O francês foi a língua oficial da Inglaterra durante mais de 300 anos.");
				$('#1 a').attr('href','http://www.scifacts.net/775/french_was_the_official_language_of_england_for_about_300_years_from_1066_till_1362');

				$('#2 p').text("Leonardo DaVinci conseguia escrever com uma mão enquanto desenhava com a outra.");
				$('#2 a').attr('http://discovermagazine.com/2006/may/10-da-vinci');

				$('#3 p').text("O ano de 2010 foi o ano mais quente de que há registo.");
				$('#3 a').attr('href','https://en.wikipedia.org/wiki/Instrumental_temperature_record#Warmest_years');

				} else if (inputDate82.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');

				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("O francês foi a língua oficial da Inglaterra durante mais de 300 anos.");
				$('#1 a').attr('href','http://www.scifacts.net/775/french_was_the_official_language_of_england_for_about_300_years_from_1066_till_1362');

				$('#2 p').text("Leonardo DaVinci conseguia escrever com uma mão enquanto desenhava com a outra.");
				$('#2 a').attr('http://discovermagazine.com/2006/may/10-da-vinci');

				$('#3 p').text("O ano de 2010 foi o ano mais quente de que há registo.");
				$('#3 a').attr('href','https://en.wikipedia.org/wiki/Instrumental_temperature_record#Warmest_years');

				$('#4 p').text("Os nova iorquinos mordem 10 vezes mais pessoas que todos os tubarões do mundo.");
				$('#4 a').attr('href','http://www.shark.ch/Information/Accidents/');

				} else if (inputDate82.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate83.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("O francês foi a língua oficial da Inglaterra durante mais de 300 anos.");
				$('#1 a').attr('href','http://www.scifacts.net/775/french_was_the_official_language_of_england_for_about_300_years_from_1066_till_1362');

				$('#2 p').text("Leonardo DaVinci conseguia escrever com uma mão enquanto desenhava com a outra.");
				$('#2 a').attr('http://discovermagazine.com/2006/may/10-da-vinci');

				$('#3 p').text("O ano de 2010 foi o ano mais quente de que há registo.");
				$('#3 a').attr('href','https://en.wikipedia.org/wiki/Instrumental_temperature_record#Warmest_years');

				$('#4 p').text("Os nova iorquinos mordem 10 vezes mais pessoas que todos os tubarões do mundo.");
				$('#4 a').attr('href','http://www.shark.ch/Information/Accidents/');

				$('#5 p').text("A barra de ouro mais pesada do mundo pesa 250 kilos.");
				$('#5 a').attr('href','https://en.wikipedia.org/wiki/Gold_bar#Largest_gold_bar');

				} else if (inputDate83.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("São necessários cerca de 50 copos de água para produzir as laranjas suficientes para fazer um copo de sumo de laranja.");
				$('#1 a').attr('href','http://www.telegraph.co.uk/men/the-filter/qi/8345477/QI-Quite-interesting-facts-about-orange.html');

				} else if (inputDate83.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("São necessários cerca de 50 copos de água para produzir as laranjas suficientes para fazer um copo de sumo de laranja.");
				$('#1 a').attr('href','http://www.telegraph.co.uk/men/the-filter/qi/8345477/QI-Quite-interesting-facts-about-orange.html');

				$('#2 p').text("Existem 10 vezes mais estrelas no Universo que grãos de areia na Terra.");
				$('#2 a').attr('http://www.telegraph.co.uk/news/worldnews/australiaandthepacific/australia/1436902/More-stars-than-grains-of-sand.html');

				} else if (inputDate83.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("São necessários cerca de 50 copos de água para produzir as laranjas suficientes para fazer um copo de sumo de laranja.");
				$('#1 a').attr('href','http://www.telegraph.co.uk/men/the-filter/qi/8345477/QI-Quite-interesting-facts-about-orange.html');

				$('#2 p').text("Existem 10 vezes mais estrelas no Universo que grãos de areia na Terra.");
				$('#2 a').attr('http://www.telegraph.co.uk/news/worldnews/australiaandthepacific/australia/1436902/More-stars-than-grains-of-sand.html');

				$('#3 p').text("A Apple tem mais de 115 mil empregados em todo o mundo.");
				$('#3 a').attr('href','https://en.wikipedia.org/wiki/Apple_Inc');

				} else if (inputDate83.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {


						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("São necessários cerca de 50 copos de água para produzir as laranjas suficientes para fazer um copo de sumo de laranja.");
				$('#1 a').attr('href','http://www.telegraph.co.uk/men/the-filter/qi/8345477/QI-Quite-interesting-facts-about-orange.html');

				$('#2 p').text("Existem 10 vezes mais estrelas no Universo que grãos de areia na Terra.");
				$('#2 a').attr('http://www.telegraph.co.uk/news/worldnews/australiaandthepacific/australia/1436902/More-stars-than-grains-of-sand.html');

				$('#3 p').text("A Apple tem mais de 115 mil empregados em todo o mundo.");
				$('#3 a').attr('href','https://en.wikipedia.org/wiki/Apple_Inc');

				$('#4 p').text("Os livros do Harry Potter estão traduzidos em mais de 70 línguas.");
				$('#4 a').attr('href','https://en.wikipedia.org/wiki/Harry_Potter');

				} else if (inputDate83.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate84.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("São necessários cerca de 50 copos de água para produzir as laranjas suficientes para fazer um copo de sumo de laranja.");
				$('#1 a').attr('href','http://www.telegraph.co.uk/men/the-filter/qi/8345477/QI-Quite-interesting-facts-about-orange.html');

				$('#2 p').text("Existem 10 vezes mais estrelas no Universo que grãos de areia na Terra.");
				$('#2 a').attr('http://www.telegraph.co.uk/news/worldnews/australiaandthepacific/australia/1436902/More-stars-than-grains-of-sand.html');

				$('#3 p').text("A Apple tem mais de 115 mil empregados em todo o mundo.");
				$('#3 a').attr('href','https://en.wikipedia.org/wiki/Apple_Inc');

				$('#4 p').text("Os livros do Harry Potter estão traduzidos em mais de 70 línguas.");
				$('#4 a').attr('href','https://en.wikipedia.org/wiki/Harry_Potter');

				$('#5 p').text("Existem mais saunas que carros na Finlândia.");
				$('#5 a').attr('href','http://community.seattletimes.nwsource.com/archive/?date=19930209&slug=1684482');

				} else if (inputDate84.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("85% das pessoas sobrevive ao cancro da mama.");
				$('#1 a').attr('href','https://www.breastcancercare.org.uk/about-us/media/facts-statistics');

				} else if (inputDate84.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("85% das pessoas sobrevive ao cancro da mama.");
				$('#1 a').attr('href','https://www.breastcancercare.org.uk/about-us/media/facts-statistics');

				$('#2 p').text("Olhar para uma foto de um ente querido reduz a irritação e dor até 44%.");
				$('#2 a').attr('http://www.dailymail.co.uk/sciencetech/article-1360227/Looking-photo-loved-reduces-pain-44.html');

				} else if (inputDate84.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("85% das pessoas sobrevive ao cancro da mama.");
				$('#1 a').attr('href','https://www.breastcancercare.org.uk/about-us/media/facts-statistics');

				$('#2 p').text("Olhar para uma foto de um ente querido reduz a irritação e dor até 44%.");
				$('#2 a').attr('http://www.dailymail.co.uk/sciencetech/article-1360227/Looking-photo-loved-reduces-pain-44.html');

				$('#3 p').text("Mais de 800 mil mulheres lutaram no exército vermelho durante a 2ª Guerra Mundial.");
				$('#3 a').attr('href','https://en.wikipedia.org/wiki/Soviet_women_in_World_War_II');

				} else if (inputDate84.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("85% das pessoas sobrevive ao cancro da mama.");
				$('#1 a').attr('href','https://www.breastcancercare.org.uk/about-us/media/facts-statistics');

				$('#2 p').text("Olhar para uma foto de um ente querido reduz a irritação e dor até 44%.");
				$('#2 a').attr('http://www.dailymail.co.uk/sciencetech/article-1360227/Looking-photo-loved-reduces-pain-44.html');

				$('#3 p').text("Mais de 800 mil mulheres lutaram no exército vermelho durante a 2ª Guerra Mundial.");
				$('#3 a').attr('href','https://en.wikipedia.org/wiki/Soviet_women_in_World_War_II');

				$('#4 p').text("A Nigéria faz mais filmes por ano que os EUA.");
				$('#4 a').attr('href','http://marketingsolutions.economist.com/products/the-economist/editorial-calendar/holiday-double/');

				} else if (inputDate84.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate85.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("85% das pessoas sobrevive ao cancro da mama.");
				$('#1 a').attr('href','https://www.breastcancercare.org.uk/about-us/media/facts-statistics');

				$('#2 p').text("Olhar para uma foto de um ente querido reduz a irritação e dor até 44%.");
				$('#2 a').attr('http://www.dailymail.co.uk/sciencetech/article-1360227/Looking-photo-loved-reduces-pain-44.html');

				$('#3 p').text("Mais de 800 mil mulheres lutaram no exército vermelho durante a 2ª Guerra Mundial.");
				$('#3 a').attr('href','https://en.wikipedia.org/wiki/Soviet_women_in_World_War_II');

				$('#4 p').text("A Nigéria faz mais filmes por ano que os EUA.");
				$('#4 a').attr('href','http://marketingsolutions.economist.com/products/the-economist/editorial-calendar/holiday-double/');

				$('#5 p').text("Os britânicos perdem 18 meses da sua vida a comutar para o trabalho.");
				$('#5 a').attr('href','http://www.bbc.com/news/magazine-32829232');

				} else if (inputDate85.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("A avó mais nova do mundo tinha 17 anos.");
				$('#1 a').attr('href','http://www.mirror.co.uk/news/weird-news/worlds-youngest-mum-top-10-1589383');

				} else if (inputDate85.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("A avó mais nova do mundo tinha 17 anos.");
				$('#1 a').attr('href','http://www.mirror.co.uk/news/weird-news/worlds-youngest-mum-top-10-1589383');

				$('#2 p').text("6% da população mundial é viciada em Internet.");
				$('#2 a').attr('http://www.dailynewsnow.com/articles/1383/20141218/internet-addiction-affects-6-percent-of-people-worldwide.htm');

				} else if (inputDate85.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("A avó mais nova do mundo tinha 17 anos.");
				$('#1 a').attr('href','http://www.mirror.co.uk/news/weird-news/worlds-youngest-mum-top-10-1589383');

				$('#2 p').text("6% da população mundial é viciada em Internet.");
				$('#2 a').attr('http://www.dailynewsnow.com/articles/1383/20141218/internet-addiction-affects-6-percent-of-people-worldwide.htm');

				$('#3 p').text("O Japão e a Rússia ainda não assinaram um tratado a declarar o fim da 2ª Guerra Mundial, devido à disputa das ilhas Kuril.");
				$('#3 a').attr('href','http://www.deliveringdata.com/2010/12/world-war-ii-is-not-over-yet.html');

				} else if (inputDate85.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {


						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("A avó mais nova do mundo tinha 17 anos.");
				$('#1 a').attr('href','http://www.mirror.co.uk/news/weird-news/worlds-youngest-mum-top-10-1589383');

				$('#2 p').text("6% da população mundial é viciada em Internet.");
				$('#2 a').attr('http://www.dailynewsnow.com/articles/1383/20141218/internet-addiction-affects-6-percent-of-people-worldwide.htm');

				$('#3 p').text("O Japão e a Rússia ainda não assinaram um tratado a declarar o fim da 2ª Guerra Mundial, devido à disputa das ilhas Kuril.");
				$('#3 a').attr('href','http://www.deliveringdata.com/2010/12/world-war-ii-is-not-over-yet.html');

				$('#4 p').text("Existe um monumento dedicado à Wikipédia na Polónia.");
				$('#4 a').attr('href','https://en.wikipedia.org/wiki/Wikipedia_Monument');

				} else if (inputDate85.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate86.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("A avó mais nova do mundo tinha 17 anos.");
				$('#1 a').attr('href','http://www.mirror.co.uk/news/weird-news/worlds-youngest-mum-top-10-1589383');

				$('#2 p').text("6% da população mundial é viciada em Internet.");
				$('#2 a').attr('http://www.dailynewsnow.com/articles/1383/20141218/internet-addiction-affects-6-percent-of-people-worldwide.htm');

				$('#3 p').text("O Japão e a Rússia ainda não assinaram um tratado a declarar o fim da 2ª Guerra Mundial, devido à disputa das ilhas Kuril.");
				$('#3 a').attr('href','http://www.deliveringdata.com/2010/12/world-war-ii-is-not-over-yet.html');

				$('#4 p').text("Existe um monumento dedicado à Wikipédia na Polónia.");
				$('#4 a').attr('href','https://en.wikipedia.org/wiki/Wikipedia_Monument');

				$('#5 p').text("As galinhas são o animal vivo mais proximamente relacionado com o Tyrannosaurus Rex.");
				$('#5 a').attr('href','http://www.telegraph.co.uk/science/science-news/3340709/Chicken-is-T-rexs-closes-living-relative.html');

				}  else if (inputDate86.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("Os camelos têm três pálpebras.");
				$('#1 a').attr('href','http://www.todayifoundout.com/index.php/2012/06/camels-have-three-eyelids/');

				} else if (inputDate86.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("Os camelos têm três pálpebras.");
				$('#1 a').attr('href','http://www.todayifoundout.com/index.php/2012/06/camels-have-three-eyelids/');

				$('#2 p').text("A água evapora a 71º graus no topo do Monte Everest.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/Boiling_point#Saturation_temperature_and_pressure');

				} else if (inputDate86.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("Os camelos têm três pálpebras.");
				$('#1 a').attr('href','http://www.todayifoundout.com/index.php/2012/06/camels-have-three-eyelids/');

				$('#2 p').text("A água evapora a 71º graus no topo do Monte Everest.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/Boiling_point#Saturation_temperature_and_pressure');

				$('#3 p').text("As tartarugas podem correr a velocidades que vão até aos 1.5 quilómetros por hora.");
				$('#3 a').attr('http://www.bbc.com/news/world-us-canada-28635902');

				} else if (inputDate86.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("Os camelos têm três pálpebras.");
				$('#1 a').attr('href','http://www.todayifoundout.com/index.php/2012/06/camels-have-three-eyelids/');

				$('#2 p').text("A água evapora a 71º graus no topo do Monte Everest.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/Boiling_point#Saturation_temperature_and_pressure');

				$('#3 p').text("As tartarugas podem correr a velocidades que vão até aos 1.5 quilómetros por hora.");
				$('#3 a').attr('http://www.bbc.com/news/world-us-canada-28635902');

				$('#4 p').text("google.com é o site mais visitado do mundo.");
				$('#4 a').attr('http://www.alexa.com/siteinfo/google.com');

				} else if (inputDate86.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate87.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("Os camelos têm três pálpebras.");
				$('#1 a').attr('href','http://www.todayifoundout.com/index.php/2012/06/camels-have-three-eyelids/');

				$('#2 p').text("A água evapora a 71º graus no topo do Monte Everest.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/Boiling_point#Saturation_temperature_and_pressure');

				$('#3 p').text("As tartarugas podem correr a velocidades que vão até aos 1.5 quilómetros por hora.");
				$('#3 a').attr('http://www.bbc.com/news/world-us-canada-28635902');

				$('#4 p').text("google.com é o site mais visitado do mundo.");
				$('#4 a').attr('http://www.alexa.com/siteinfo/google.com');

				$('#5 p').text("Mais de 20% dos habitantes do sexo masculino da cidade do Rio de Janeiro são homo ou bissexuais.");
				$('#5 a').attr('href','https://en.wikipedia.org/wiki/LGBT_people_in_Brazil');

				} else if (inputDate87.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("90% de tudo o que existe escrito em inglês contemporâneo utiliza apenas 1000 palavras de vocabulário.");
				$('#1 a').attr('href','http://www.rainbowresource.com/product/Spelling+Plus%3A+1000+Words+Toward+Spelling+Suc/014528/eba6ae1e7b6d949826ba3e26');

				} else if (inputDate87.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("90% de tudo o que existe escrito em inglês contemporâneo utiliza apenas 1000 palavras de vocabulário.");
				$('#1 a').attr('href','http://www.rainbowresource.com/product/Spelling+Plus%3A+1000+Words+Toward+Spelling+Suc/014528/eba6ae1e7b6d949826ba3e26');

				$('#2 p').text("Uma fêmea de mosquito pode depositar até 300 ovos de uma vez.");
				$('#2 a').attr('http://ipm.ucanr.edu/PMG/PESTNOTES/mosquitofarm12.html?printpage');

				} else if (inputDate87.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("90% de tudo o que existe escrito em inglês contemporâneo utiliza apenas 1000 palavras de vocabulário.");
				$('#1 a').attr('href','http://www.rainbowresource.com/product/Spelling+Plus%3A+1000+Words+Toward+Spelling+Suc/014528/eba6ae1e7b6d949826ba3e26');

				$('#2 p').text("Uma fêmea de mosquito pode depositar até 300 ovos de uma vez.");
				$('#2 a').attr('http://ipm.ucanr.edu/PMG/PESTNOTES/mosquitofarm12.html?printpage');

				$('#3 p').text("Na Alemanha é proibido ficar sem gasolina na autoestrada.");
				$('#3 a').attr('href','http://www.huffingtonpost.com/2013/06/20/laws-abroad_n_3466647.html');

				} else if (inputDate87.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("90% de tudo o que existe escrito em inglês contemporâneo utiliza apenas 1000 palavras de vocabulário.");
				$('#1 a').attr('href','http://www.rainbowresource.com/product/Spelling+Plus%3A+1000+Words+Toward+Spelling+Suc/014528/eba6ae1e7b6d949826ba3e26');

				$('#2 p').text("Uma fêmea de mosquito pode depositar até 300 ovos de uma vez.");
				$('#2 a').attr('http://ipm.ucanr.edu/PMG/PESTNOTES/mosquitofarm12.html?printpage');

				$('#3 p').text("Na Alemanha é proibido ficar sem gasolina na autoestrada.");
				$('#3 a').attr('href','http://www.huffingtonpost.com/2013/06/20/laws-abroad_n_3466647.html');

				$('#4 p').text("50% dos americanos acredita ter um anjo da guarda.");
				$('#4 a').attr('href','http://abcnews.go.com/US/story?id=5833399');

				} else if (inputDate87.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate88.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("90% de tudo o que existe escrito em inglês contemporâneo utiliza apenas 1000 palavras de vocabulário.");
				$('#1 a').attr('href','http://www.rainbowresource.com/product/Spelling+Plus%3A+1000+Words+Toward+Spelling+Suc/014528/eba6ae1e7b6d949826ba3e26');

				$('#2 p').text("Uma fêmea de mosquito pode depositar até 300 ovos de uma vez.");
				$('#2 a').attr('http://ipm.ucanr.edu/PMG/PESTNOTES/mosquitofarm12.html?printpage');

				$('#3 p').text("Na Alemanha é proibido ficar sem gasolina na autoestrada.");
				$('#3 a').attr('href','http://www.huffingtonpost.com/2013/06/20/laws-abroad_n_3466647.html');

				$('#4 p').text("50% dos americanos acredita ter um anjo da guarda.");
				$('#4 a').attr('href','http://abcnews.go.com/US/story?id=5833399');

				$('#5 p').text("Os pássaros não urinam.");
				$('#5 a').attr('href','http://www.sciencefocus.com/qa/do-birds-urinate');

				} else if (inputDate88.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("As plantas podem desenvolver cancros próprios.");
				$('#1 a').attr('href','http://www.popsci.com/article/science/ask-anything-do-plants-get-cancer');

				} else if (inputDate88.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("As plantas podem desenvolver cancros próprios.");
				$('#1 a').attr('href','http://www.popsci.com/article/science/ask-anything-do-plants-get-cancer');

				$('#2 p').text("Existem cerca de 250 pessoas mortas e congeladas, entre elas Walt Disney, que esperam ser ressuscitadas por tecnologia futura.");
				$('#2 a').attr('href','https://en.wikipedia.org/wiki/Cryonics');

				} else if (inputDate88.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("As plantas podem desenvolver cancros próprios.");
				$('#1 a').attr('href','http://www.popsci.com/article/science/ask-anything-do-plants-get-cancer');

				$('#2 p').text("Existem cerca de 250 pessoas mortas e congeladas, entre elas Walt Disney, que esperam ser ressuscitadas por tecnologia futura.");
				$('#2 a').attr('href','https://en.wikipedia.org/wiki/Cryonics');

				$('#3 p').text("Segundo o Bill Gates, em 2035 já não existirão países pobres no mundo.");
				$('#3 a').attr('https://www.gatesnotes.com/2015-annual-letter?WT.mc_id=01_21_2015_DO_GFO_domain_0_00#section=myth-one');

				} else if (inputDate88.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("As plantas podem desenvolver cancros próprios.");
				$('#1 a').attr('href','http://www.popsci.com/article/science/ask-anything-do-plants-get-cancer');

				$('#2 p').text("Existem cerca de 250 pessoas mortas e congeladas, entre elas Walt Disney, que esperam ser ressuscitadas por tecnologia futura.");
				$('#2 a').attr('href','https://en.wikipedia.org/wiki/Cryonics');

				$('#3 p').text("Segundo o Bill Gates, em 2035 já não existirão países pobres no mundo.");
				$('#3 a').attr('https://www.gatesnotes.com/2015-annual-letter?WT.mc_id=01_21_2015_DO_GFO_domain_0_00#section=myth-one');

				$('#4 p').text("1 em cada 7 pessoas no mundo fala inglês.");
				$('#4 a').attr('href','https://en.wikipedia.org/wiki/List_of_languages_by_total_number_of_speakers');

				} else if (inputDate88.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate89.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("As plantas podem desenvolver cancros próprios.");
				$('#1 a').attr('href','http://www.popsci.com/article/science/ask-anything-do-plants-get-cancer');

				$('#2 p').text("Existem cerca de 250 pessoas mortas e congeladas, entre elas Walt Disney, que esperam ser ressuscitadas por tecnologia futura.");
				$('#2 a').attr('href','https://en.wikipedia.org/wiki/Cryonics');

				$('#3 p').text("Segundo o Bill Gates, em 2035 já não existirão países pobres no mundo.");
				$('#3 a').attr('https://www.gatesnotes.com/2015-annual-letter?WT.mc_id=01_21_2015_DO_GFO_domain_0_00#section=myth-one');

				$('#4 p').text("1 em cada 7 pessoas no mundo fala inglês.");
				$('#4 a').attr('href','https://en.wikipedia.org/wiki/List_of_languages_by_total_number_of_speakers');

				$('#5 p').text("1.2 milhões de mulheres por ano abortam nos USA.");
				$('#5 a').attr('href','http://www.webmd.com/women/tc/abortion-reasons-women-choose-abortion');

				} else 	if (inputDate89.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("O Stephen Hawking só consegue dizer cerca de uma palavra por minuto.");
				$('#1 a').attr('href','http://www.theverge.com/2013/1/20/3895214/stephen-hawkings-new-intel-speech-technology');

				} else if (inputDate89.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("O Stephen Hawking só consegue dizer cerca de uma palavra por minuto.");
				$('#1 a').attr('href','http://www.theverge.com/2013/1/20/3895214/stephen-hawkings-new-intel-speech-technology');

				$('#2 p').text("O criador do Facebook, Mark Zuckenberg, doou 1 bilião de dólares para a caridade em 2013.");
				$('#2 a').attr('http://blogs.marketwatch.com/themargin/2014/02/10/facebooks-zuckerberg-is-top-u-s-charitable-giver-of-2013/');

				} else if (inputDate89.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("O Stephen Hawking só consegue dizer cerca de uma palavra por minuto.");
				$('#1 a').attr('href','http://www.theverge.com/2013/1/20/3895214/stephen-hawkings-new-intel-speech-technology');

				$('#2 p').text("O criador do Facebook, Mark Zuckenberg, doou 1 bilião de dólares para a caridade em 2013.");
				$('#2 a').attr('http://blogs.marketwatch.com/themargin/2014/02/10/facebooks-zuckerberg-is-top-u-s-charitable-giver-of-2013/');

				$('#3 p').text("Ler acerca do acto de bocejar faz bocejar.");
				$('#3 a').attr('href','http://science.howstuffworks.com/life/inside-the-mind/human-brain/question572.htm');

				} else if (inputDate89.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');

				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("O Stephen Hawking só consegue dizer cerca de uma palavra por minuto.");
				$('#1 a').attr('href','http://www.theverge.com/2013/1/20/3895214/stephen-hawkings-new-intel-speech-technology');

				$('#2 p').text("O criador do Facebook, Mark Zuckenberg, doou 1 bilião de dólares para a caridade em 2013.");
				$('#2 a').attr('http://blogs.marketwatch.com/themargin/2014/02/10/facebooks-zuckerberg-is-top-u-s-charitable-giver-of-2013/');

				$('#3 p').text("Ler acerca do acto de bocejar faz bocejar.");
				$('#3 a').attr('href','http://science.howstuffworks.com/life/inside-the-mind/human-brain/question572.htm');

				$('#4 p').text("1 em cada 20 lesões de futebol são devidas a celebrações de golos.");
				$('#4 a').attr('href','http://www.physioroom.com/blog/celebrating-can-be-dangerous/');

				} else if (inputDate89.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate90.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("O Stephen Hawking só consegue dizer cerca de uma palavra por minuto.");
				$('#1 a').attr('href','http://www.theverge.com/2013/1/20/3895214/stephen-hawkings-new-intel-speech-technology');

				$('#2 p').text("O criador do Facebook, Mark Zuckenberg, doou 1 bilião de dólares para a caridade em 2013.");
				$('#2 a').attr('http://blogs.marketwatch.com/themargin/2014/02/10/facebooks-zuckerberg-is-top-u-s-charitable-giver-of-2013/');

				$('#3 p').text("Ler acerca do acto de bocejar faz bocejar.");
				$('#3 a').attr('href','http://science.howstuffworks.com/life/inside-the-mind/human-brain/question572.htm');

				$('#4 p').text("1 em cada 20 lesões de futebol são devidas a celebrações de golos.");
				$('#4 a').attr('href','http://www.physioroom.com/blog/celebrating-can-be-dangerous/');

				$('#5 p').text("No Japão, os alunos e professores limpam juntos as salas de aula e as cafetarias.");
				$('#5 a').attr('href','http://www.huffingtonpost.com/2011/11/21/newt-gingrich-says-schools-should-use-students-as-janitors_n_1105288.html');

				} else 	if (inputDate90.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("Mais de 100 mil pessoas voluntariaram-se para uma viagem de colonização sem retorno para Marte, com data de lançamento em 2022.");
				$('#1 a').attr('href','http://edition.cnn.com/2013/08/09/tech/innovation/mars-one-applications/index.html');

				} else if (inputDate90.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("Mais de 100 mil pessoas voluntariaram-se para uma viagem de colonização sem retorno para Marte, com data de lançamento em 2022.");
				$('#1 a').attr('href','http://edition.cnn.com/2013/08/09/tech/innovation/mars-one-applications/index.html');

				$('#2 p').text("Existe um tipo de alforreca potencialmente imortal.");
				$('#2 a').attr('http://www.mnn.com/earth-matters/animals/stories/immortal-jellyfish-does-it-really-live-forever');

				} else if (inputDate90.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("Mais de 100 mil pessoas voluntariaram-se para uma viagem de colonização sem retorno para Marte, com data de lançamento em 2022.");
				$('#1 a').attr('href','http://edition.cnn.com/2013/08/09/tech/innovation/mars-one-applications/index.html');

				$('#2 p').text("Existe um tipo de alforreca potencialmente imortal.");
				$('#2 a').attr('http://www.mnn.com/earth-matters/animals/stories/immortal-jellyfish-does-it-really-live-forever');

				$('#3 p').text("Se tentar conter um espirro pode romper uma artéria no pescoço ou na cabeça e morrer.");
				$('#3 a').attr('href','http://www.livescience.com/32776-is-it-safe-to-hold-in-a-sneeze.html');

				} else if (inputDate90.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("Mais de 100 mil pessoas voluntariaram-se para uma viagem de colonização sem retorno para Marte, com data de lançamento em 2022.");
				$('#1 a').attr('href','http://edition.cnn.com/2013/08/09/tech/innovation/mars-one-applications/index.html');

				$('#2 p').text("Existe um tipo de alforreca potencialmente imortal.");
				$('#2 a').attr('http://www.mnn.com/earth-matters/animals/stories/immortal-jellyfish-does-it-really-live-forever');

				$('#3 p').text("Se tentar conter um espirro pode romper uma artéria no pescoço ou na cabeça e morrer.");
				$('#3 a').attr('href','http://www.livescience.com/32776-is-it-safe-to-hold-in-a-sneeze.html');

				$('#4 p').text("Um buraco negro do tamanho de uma moeda de um cêntimo teria uma massa superior ao planeta Terra.");
				$('#4 a').attr('href','http://www.cnet.com/news/heres-what-would-happen-to-you-if-you-encountered-a-small-black-hole/');

				} else if (inputDate90.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate91.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("Mais de 100 mil pessoas voluntariaram-se para uma viagem de colonização sem retorno para Marte, com data de lançamento em 2022.");
				$('#1 a').attr('href','http://edition.cnn.com/2013/08/09/tech/innovation/mars-one-applications/index.html');

				$('#2 p').text("Existe um tipo de alforreca potencialmente imortal.");
				$('#2 a').attr('http://www.mnn.com/earth-matters/animals/stories/immortal-jellyfish-does-it-really-live-forever');

				$('#3 p').text("Se tentar conter um espirro pode romper uma artéria no pescoço ou na cabeça e morrer.");
				$('#3 a').attr('href','http://www.livescience.com/32776-is-it-safe-to-hold-in-a-sneeze.html');

				$('#4 p').text("Um buraco negro do tamanho de uma moeda de um cêntimo teria uma massa superior ao planeta Terra.");
				$('#4 a').attr('href','http://www.cnet.com/news/heres-what-would-happen-to-you-if-you-encountered-a-small-black-hole/');

				$('#5 p').text("A música estimula certas partes do cérebro responsáveis por libertar os químicos que produzem o prazer associado ao sexo e à comida.");
				$('#5 a').attr('href','http://science.time.com/2013/04/15/music/');

				} else if (inputDate91.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("37% dos americanos não acreditam no aquecimento global.");
				$('#1 a').attr('href','http://www.independent.co.uk/news/world/americas/obama-the-antichrist-global-warming-a-myth-lizard-people-controlling-the-world-conspiracy-theory-8558384.html');

				} else if (inputDate91.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("37% dos americanos não acreditam no aquecimento global.");
				$('#1 a').attr('href','http://www.independent.co.uk/news/world/americas/obama-the-antichrist-global-warming-a-myth-lizard-people-controlling-the-world-conspiracy-theory-8558384.html');

				$('#2 p').text("A Holanda é o país que mais café consome. São bebidos cerca de 2.5 copos de café por dia por habitante.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/Humor_research');

				} else if (inputDate91.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("37% dos americanos não acreditam no aquecimento global.");
				$('#1 a').attr('href','http://www.independent.co.uk/news/world/americas/obama-the-antichrist-global-warming-a-myth-lizard-people-controlling-the-world-conspiracy-theory-8558384.html');

				$('#2 p').text("A Holanda é o país que mais café consome. São bebidos cerca de 2.5 copos de café por dia por habitante.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/Humor_research');

				$('#3 p').text("Os elefantes só dormem cerca de 2 a 3 horas por dia.");
				$('#3 a').attr('href','http://listverse.com/2012/03/05/top-10-facts-about-elephants/');

				} else if (inputDate91.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("37% dos americanos não acreditam no aquecimento global.");
				$('#1 a').attr('href','http://www.independent.co.uk/news/world/americas/obama-the-antichrist-global-warming-a-myth-lizard-people-controlling-the-world-conspiracy-theory-8558384.html');

				$('#2 p').text("A Holanda é o país que mais café consome. São bebidos cerca de 2.5 copos de café por dia por habitante.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/Humor_research');

				$('#3 p').text("Os elefantes só dormem cerca de 2 a 3 horas por dia.");
				$('#3 a').attr('href','http://listverse.com/2012/03/05/top-10-facts-about-elephants/');

				$('#4 p').text("O primeiro Harry Potter foi traduzido para grego antigo, tornando-se o maior corpo literário em grego antigo produzido desde o III século A.C.");
				$('#4 a').attr('href','https://web.archive.org/web/20080119214752/http://playalicious.com/reference/news/greek_harry.html');

				} else if (inputDate91.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate92.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("37% dos americanos não acreditam no aquecimento global.");
				$('#1 a').attr('href','http://www.independent.co.uk/news/world/americas/obama-the-antichrist-global-warming-a-myth-lizard-people-controlling-the-world-conspiracy-theory-8558384.html');

				$('#2 p').text("A Holanda é o país que mais café consome. São bebidos cerca de 2.5 copos de café por dia por habitante.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/Humor_research');

				$('#3 p').text("Os elefantes só dormem cerca de 2 a 3 horas por dia.");
				$('#3 a').attr('href','http://listverse.com/2012/03/05/top-10-facts-about-elephants/');

				$('#4 p').text("O primeiro Harry Potter foi traduzido para grego antigo, tornando-se o maior corpo literário em grego antigo produzido desde o III século A.C.");
				$('#4 a').attr('href','https://web.archive.org/web/20080119214752/http://playalicious.com/reference/news/greek_harry.html');

				$('#5 p').text("O fruto mais comido a nível mundial é o tomate.");
				$('#5 a').attr('href','https://en.wikipedia.org/wiki/Tomato#Cultivation');

				} else if (inputDate92.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("1 em 3 mortes são devidas a problemas cardiovasculares.");
				$('#1 a').attr('href','http://www.who.int/mediacentre/factsheets/fs317/en/');

				} else if (inputDate92.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("1 em 3 mortes são devidas a problemas cardiovasculares.");
				$('#1 a').attr('href','http://www.who.int/mediacentre/factsheets/fs317/en/');

				$('#2 p').text("A Islândia é desde 2010 o país mais pacífico do mundo.");
				$('#2 a').attr('http://www.theweek.co.uk/64495/the-ten-safest-and-ten-most-dangerous-countries-in-the-world');

				} else if (inputDate92.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("1 em 3 mortes são devidas a problemas cardiovasculares.");
				$('#1 a').attr('href','http://www.who.int/mediacentre/factsheets/fs317/en/');

				$('#2 p').text("A Islândia é desde 2010 o país mais pacífico do mundo.");
				$('#2 a').attr('http://www.theweek.co.uk/64495/the-ten-safest-and-ten-most-dangerous-countries-in-the-world');

				$('#3 p').text("As 100 pessoas mais ricas do mundo ganharam em 2015 dinheiro suficiente para acabar quatro vezes com a pobreza mundial.");
				$('#3 a').attr('href','https://www.rt.com/news/oxfam-report-global-inequality-357/');

				} else if (inputDate92.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("1 em 3 mortes são devidas a problemas cardiovasculares.");
				$('#1 a').attr('href','http://www.who.int/mediacentre/factsheets/fs317/en/');

				$('#2 p').text("A Islândia é desde 2010 o país mais pacífico do mundo.");
				$('#2 a').attr('http://www.theweek.co.uk/64495/the-ten-safest-and-ten-most-dangerous-countries-in-the-world');

				$('#3 p').text("As 100 pessoas mais ricas do mundo ganharam em 2015 dinheiro suficiente para acabar quatro vezes com a pobreza mundial.");
				$('#3 a').attr('href','https://www.rt.com/news/oxfam-report-global-inequality-357/');

				$('#4 p').text("As orcas são da família dos golfinhos, não dos tubarões.");
				$('#4 a').attr('href','https://en.wikipedia.org/wiki/Killer_whale');

				} else if (inputDate92.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate93.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("1 em 3 mortes são devidas a problemas cardiovasculares.");
				$('#1 a').attr('href','http://www.who.int/mediacentre/factsheets/fs317/en/');

				$('#2 p').text("A Islândia é desde 2010 o país mais pacífico do mundo.");
				$('#2 a').attr('http://www.theweek.co.uk/64495/the-ten-safest-and-ten-most-dangerous-countries-in-the-world');

				$('#3 p').text("As 100 pessoas mais ricas do mundo ganharam em 2015 dinheiro suficiente para acabar quatro vezes com a pobreza mundial.");
				$('#3 a').attr('href','https://www.rt.com/news/oxfam-report-global-inequality-357/');

				$('#4 p').text("As orcas são da família dos golfinhos, não dos tubarões.");
				$('#4 a').attr('href','https://en.wikipedia.org/wiki/Killer_whale');

				$('#5 p').text("Demoraria cerca de 10 anos a ver todas as fotos carregadas para o snapchat na última hora.");
				$('#5 a').attr('href','http://www.businessinsider.com/snapchat-photos-sent-per-second-2015-5');

				} else if (inputDate93.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("A cocaína aumenta a dopamina em 250%, aumentando o sexo 100% e a comida 50%.");
				$('#1 a').attr('href','http://www.drugabuse.gov/publications/addiction-science/why-do-people-abuse-drugs/natural-rewards-stimulate-dopamine-neurotransmission');

				} else if (inputDate93.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("A cocaína aumenta a dopamina em 250%, aumentando o sexo 100% e a comida 50%.");
				$('#1 a').attr('href','http://www.drugabuse.gov/publications/addiction-science/why-do-people-abuse-drugs/natural-rewards-stimulate-dopamine-neurotransmission');

				$('#2 p').text("70% das estudantes de ciência e engenharia do Irão são mulheres.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/Science_and_technology_in_Iran');

				} else if (inputDate93.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("A cocaína aumenta a dopamina em 250%, aumentando o sexo 100% e a comida 50%.");
				$('#1 a').attr('href','http://www.drugabuse.gov/publications/addiction-science/why-do-people-abuse-drugs/natural-rewards-stimulate-dopamine-neurotransmission');

				$('#2 p').text("70% das estudantes de ciência e engenharia do Irão são mulheres.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/Science_and_technology_in_Iran');

				$('#3 p').text("Hitler nunca visitou um campo de concentração.");
				$('#3 a').attr('href','https://www.amazon.com/Cinema-Shoah-Confronts-Twentieth-Horizons/dp/1438430264?ie=UTF8&keywords=Hitler%20never%20visited%20a%20concentration%20camp&p=S04O&qid=1464657366&reader=1&ref_=sr_1_3&tag=factslides-20');

				} else if (inputDate93.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');

				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("A cocaína aumenta a dopamina em 250%, aumentando o sexo 100% e a comida 50%.");
				$('#1 a').attr('href','http://www.drugabuse.gov/publications/addiction-science/why-do-people-abuse-drugs/natural-rewards-stimulate-dopamine-neurotransmission');

				$('#2 p').text("70% das estudantes de ciência e engenharia do Irão são mulheres.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/Science_and_technology_in_Iran');

				$('#3 p').text("Hitler nunca visitou um campo de concentração.");
				$('#3 a').attr('href','https://www.amazon.com/Cinema-Shoah-Confronts-Twentieth-Horizons/dp/1438430264?ie=UTF8&keywords=Hitler%20never%20visited%20a%20concentration%20camp&p=S04O&qid=1464657366&reader=1&ref_=sr_1_3&tag=factslides-20');

				$('#4 p').text("15% dos empregados da sede da Google, uma das maiores empresas do mundo, não tem formação superior.");
				$('#4 a').attr('href','http://www.nytimes.com/2013/06/20/business/in-head-hunting-big-data-may-not-be-such-a-big-deal.html?pagewanted=2&_r=2&');

				} else if (inputDate93.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate94.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("A cocaína aumenta a dopamina em 250%, aumentando o sexo 100% e a comida 50%.");
				$('#1 a').attr('href','http://www.drugabuse.gov/publications/addiction-science/why-do-people-abuse-drugs/natural-rewards-stimulate-dopamine-neurotransmission');

				$('#2 p').text("70% das estudantes de ciência e engenharia do Irão são mulheres.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/Science_and_technology_in_Iran');

				$('#3 p').text("Hitler nunca visitou um campo de concentração.");
				$('#3 a').attr('href','https://www.amazon.com/Cinema-Shoah-Confronts-Twentieth-Horizons/dp/1438430264?ie=UTF8&keywords=Hitler%20never%20visited%20a%20concentration%20camp&p=S04O&qid=1464657366&reader=1&ref_=sr_1_3&tag=factslides-20');

				$('#4 p').text("15% dos empregados da sede da Google, uma das maiores empresas do mundo, não tem formação superior.");
				$('#4 a').attr('href','http://www.nytimes.com/2013/06/20/business/in-head-hunting-big-data-may-not-be-such-a-big-deal.html?pagewanted=2&_r=2&');

				$('#5 p').text("Steve Jobs nunca programou um computador.");
				$('#5 a').attr('href','http://www.woz.org/letters/does-steve-jobs-know-how-code');

				} else 	if (inputDate94.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("Barack Obama foi o primeiro Presidente dos Estados Unidos a publicar um artigo académico.");
				$('#1 a').attr('href','https://mic.com/articles/148595/obamajama-obama-academic-paper-made-history');

				} else if (inputDate94.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("Barack Obama foi o primeiro Presidente dos Estados Unidos a publicar um artigo académico.");
				$('#1 a').attr('href','https://mic.com/articles/148595/obamajama-obama-academic-paper-made-history');

				$('#2 p').text("O acto de beijar envolve a activação de 34 músculos faciais.");
				$('#2 a').attr('https://web.archive.org/web/20061026052832/http://www.telegraph.co.uk:80/connected/main.jhtml?xml=/connected/2006/10/17/dlkiss17.xml');

				} else if (inputDate94.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("Barack Obama foi o primeiro Presidente dos Estados Unidos a publicar um artigo académico.");
				$('#1 a').attr('href','https://mic.com/articles/148595/obamajama-obama-academic-paper-made-history');

				$('#2 p').text("O acto de beijar envolve a activação de 34 músculos faciais.");
				$('#2 a').attr('https://web.archive.org/web/20061026052832/http://www.telegraph.co.uk:80/connected/main.jhtml?xml=/connected/2006/10/17/dlkiss17.xml');

				$('#3 p').text("A Coreia do Norte tem o maior estádio do mundo. O estádio suporta 150 mil espectadores.");
				$('#3 a').attr('href','https://en.wikipedia.org/wiki/List_of_stadiums_by_capacity');

				} else if (inputDate94.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {


						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("Barack Obama foi o primeiro Presidente dos Estados Unidos a publicar um artigo académico.");
				$('#1 a').attr('href','https://mic.com/articles/148595/obamajama-obama-academic-paper-made-history');

				$('#2 p').text("O acto de beijar envolve a activação de 34 músculos faciais.");
				$('#2 a').attr('https://web.archive.org/web/20061026052832/http://www.telegraph.co.uk:80/connected/main.jhtml?xml=/connected/2006/10/17/dlkiss17.xml');

				$('#3 p').text("A Coreia do Norte tem o maior estádio do mundo. O estádio suporta 150 mil espectadores.");
				$('#3 a').attr('href','https://en.wikipedia.org/wiki/List_of_stadiums_by_capacity');

				$('#4 p').text("Todas as cobras são estritamente carnívoras.");
				$('#4 a').attr('href','https://en.wikipedia.org/wiki/Snake');

				} else if (inputDate94.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate95.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("Barack Obama foi o primeiro Presidente dos Estados Unidos a publicar um artigo académico.");
				$('#1 a').attr('href','https://mic.com/articles/148595/obamajama-obama-academic-paper-made-history');

				$('#2 p').text("O acto de beijar envolve a activação de 34 músculos faciais.");
				$('#2 a').attr('https://web.archive.org/web/20061026052832/http://www.telegraph.co.uk:80/connected/main.jhtml?xml=/connected/2006/10/17/dlkiss17.xml');

				$('#3 p').text("A Coreia do Norte tem o maior estádio do mundo. O estádio suporta 150 mil espectadores.");
				$('#3 a').attr('href','https://en.wikipedia.org/wiki/List_of_stadiums_by_capacity');

				$('#4 p').text("Todas as cobras são estritamente carnívoras.");
				$('#4 a').attr('href','https://en.wikipedia.org/wiki/Snake');

				$('#5 p').text("41% dos americanos não usa o seu direito a férias pagas.");
				$('#5 a').attr('href','http://www.theatlantic.com/business/archive/2014/08/41-percent-of-american-workers-let-their-paid-vacation-go-to-waste/378950/');

				}  else if (inputDate95.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);

						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("O recorde mundial para mais palmas batidas num minuto é de 1020.");
				$('#1 a').attr('href','http://www.guinnessworldrecords.com/world-records/most-claps-in-a-minute');

				} else if (inputDate95.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("O recorde mundial para mais palmas batidas num minuto é de 1020.");
				$('#1 a').attr('href','http://www.guinnessworldrecords.com/world-records/most-claps-in-a-minute');

				$('#2 p').text("Os seres humanos que viveram 5000 AC já fumavam.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/Smoking');

				} else if (inputDate95.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("O recorde mundial para mais palmas batidas num minuto é de 1020.");
				$('#1 a').attr('href','http://www.guinnessworldrecords.com/world-records/most-claps-in-a-minute');

				$('#2 p').text("Os seres humanos que viveram 5000 AC já fumavam.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/Smoking');

				$('#3 p').text("37% dos adultos em África são iliteratos.");
				$('#3 a').attr('href','https://www.africanlibraryproject.org/our-african-libraries/africa-facts');

				} else if (inputDate95.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("O recorde mundial para mais palmas batidas num minuto é de 1020.");
				$('#1 a').attr('href','http://www.guinnessworldrecords.com/world-records/most-claps-in-a-minute');

				$('#2 p').text("Os seres humanos que viveram 5000 AC já fumavam.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/Smoking');

				$('#3 p').text("37% dos adultos em África são iliteratos.");
				$('#3 a').attr('href','https://www.africanlibraryproject.org/our-african-libraries/africa-facts');

				$('#4 p').text("É mais provável uma pessoa tornar-se Presidente que ganhar a lotaria.");
				$('#4 a').attr('href','http://www.thedailybeast.com/articles/2012/03/30/15-things-more-likely-to-happen-than-winning-mega-millions.html');

				} else if (inputDate95.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate96.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("O recorde mundial para mais palmas batidas num minuto é de 1020.");
				$('#1 a').attr('href','http://www.guinnessworldrecords.com/world-records/most-claps-in-a-minute');

				$('#2 p').text("Os seres humanos que viveram 5000 AC já fumavam.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/Smoking');

				$('#3 p').text("37% dos adultos em África são iliteratos.");
				$('#3 a').attr('href','https://www.africanlibraryproject.org/our-african-libraries/africa-facts');

				$('#4 p').text("É mais provável uma pessoa tornar-se Presidente que ganhar a lotaria.");
				$('#4 a').attr('href','http://www.thedailybeast.com/articles/2012/03/30/15-things-more-likely-to-happen-than-winning-mega-millions.html');

				$('#5 p').text("O vinho mais caro do mundo custa 15 mil dólares por garrafa.");
				$('#5 a').attr('href','http://t.co/Lh7D09Csmn');

				} else if (inputDate96.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("Reciclar uma tonelada de plástico salva 2000 litros de gasolina.");
				$('#1 a').attr('href','http://www.conserve-energy-future.com/various-recycling-facts.php');

				} else if (inputDate96.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("Reciclar uma tonelada de plástico salva 2000 litros de gasolina.");
				$('#1 a').attr('href','http://www.conserve-energy-future.com/various-recycling-facts.php');

				$('#2 p').text("Existe ouro suficiente no centro da Terra para cobrir toda a superfície do planeta.");
				$('#2 a').attr('http://discovermagazine.com/2006/sep/innerfortknox');

				} else if (inputDate96.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){


					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("Reciclar uma tonelada de plástico salva 2000 litros de gasolina.");
				$('#1 a').attr('href','http://www.conserve-energy-future.com/various-recycling-facts.php');

				$('#2 p').text("Existe ouro suficiente no centro da Terra para cobrir toda a superfície do planeta.");
				$('#2 a').attr('http://discovermagazine.com/2006/sep/innerfortknox');

				$('#3 p').text("O sistema solar demora 240 milhões de anos a completar uma orbita à volta da galáxia.");
				$('#3 a').attr('href','https://en.wikipedia.org/wiki/Milky_Way');

				} else if (inputDate96.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("Reciclar uma tonelada de plástico salva 2000 litros de gasolina.");
				$('#1 a').attr('href','http://www.conserve-energy-future.com/various-recycling-facts.php');

				$('#2 p').text("Existe ouro suficiente no centro da Terra para cobrir toda a superfície do planeta.");
				$('#2 a').attr('http://discovermagazine.com/2006/sep/innerfortknox');

				$('#3 p').text("O sistema solar demora 240 milhões de anos a completar uma orbita à volta da galáxia.");
				$('#3 a').attr('href','https://en.wikipedia.org/wiki/Milky_Way');

				$('#4 p').text("350 milhões de pessoas sofrem de depressão.");
				$('#4 a').attr('href','http://www.who.int/mediacentre/factsheets/fs369/en/');

				} else if (inputDate96.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate97.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("Reciclar uma tonelada de plástico salva 2000 litros de gasolina.");
				$('#1 a').attr('href','http://www.conserve-energy-future.com/various-recycling-facts.php');

				$('#2 p').text("Existe ouro suficiente no centro da Terra para cobrir toda a superfície do planeta.");
				$('#2 a').attr('http://discovermagazine.com/2006/sep/innerfortknox');

				$('#3 p').text("O sistema solar demora 240 milhões de anos a completar uma orbita à volta da galáxia.");
				$('#3 a').attr('href','https://en.wikipedia.org/wiki/Milky_Way');

				$('#4 p').text("350 milhões de pessoas sofrem de depressão.");
				$('#4 a').attr('href','http://www.who.int/mediacentre/factsheets/fs369/en/');

				$('#5 p').text("Existem 40 espécies diferentes de golfinhos.");
				$('#5 a').attr('href','https://en.wikipedia.org/wiki/Dolphin');

				} else if (inputDate97.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("A China tem clinicas de tratamento para viciados em Internet.");
				$('#1 a').attr('href','http://content.time.com/time/world/article/0,8599,1874380,00.html');

				} else if (inputDate97.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("A China tem clinicas de tratamento para viciados em Internet.");
				$('#1 a').attr('href','http://content.time.com/time/world/article/0,8599,1874380,00.html');

				$('#2 p').text("O cão mais velho do mundo morreu com 29 anos.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/List_of_oldest_dogs');

				} else if (inputDate97.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("A China tem clinicas de tratamento para viciados em Internet.");
				$('#1 a').attr('href','http://content.time.com/time/world/article/0,8599,1874380,00.html');

				$('#2 p').text("O cão mais velho do mundo morreu com 29 anos.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/List_of_oldest_dogs');

				$('#3 p').text("A Disneyland abriu em 1955.");
				$('#3 a').attr('href','http://www.neatorama.com/2010/07/04/the-first-disneyland-admission-ticket-ever-sold/');

				} else if (inputDate97.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("A China tem clinicas de tratamento para viciados em Internet.");
				$('#1 a').attr('href','http://content.time.com/time/world/article/0,8599,1874380,00.html');

				$('#2 p').text("O cão mais velho do mundo morreu com 29 anos.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/List_of_oldest_dogs');

				$('#3 p').text("A Disneyland abriu em 1955.");
				$('#3 a').attr('href','http://www.neatorama.com/2010/07/04/the-first-disneyland-admission-ticket-ever-sold/');

				$('#4 p').text("O muro de Berlim tinha mais de 140 quilómetros.");
				$('#4 a').attr('href','https://en.wikipedia.org/wiki/Berlin_Wall#Structure_and_adjacent_areas');

				} else if (inputDate97.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate98.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("A China tem clinicas de tratamento para viciados em Internet.");
				$('#1 a').attr('href','http://content.time.com/time/world/article/0,8599,1874380,00.html');

				$('#2 p').text("O cão mais velho do mundo morreu com 29 anos.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/List_of_oldest_dogs');

				$('#3 p').text("A Disneyland abriu em 1955.");
				$('#3 a').attr('href','http://www.neatorama.com/2010/07/04/the-first-disneyland-admission-ticket-ever-sold/');

				$('#4 p').text("O muro de Berlim tinha mais de 140 quilómetros.");
				$('#4 a').attr('href','https://en.wikipedia.org/wiki/Berlin_Wall#Structure_and_adjacent_areas');

				$('#5 p').text("Dado um grupo de 23 pessoas, existe uma probabilidade de 50% de pelo menos duas delas partilharem o dia de aniversário.");
				$('#5 a').attr('href','https://en.wikipedia.org/wiki/Birthday_problem');

				} else if (inputDate98.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("Cerca de 41 novas espécies são descobertas todos os dias por cientistas.");
				$('#1 a').attr('href','http://www.seeker.com/number-of-new-species-has-dropped-1765561585.html');

				} else if (inputDate98.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("Cerca de 41 novas espécies são descobertas todos os dias por cientistas.");
				$('#1 a').attr('href','http://www.seeker.com/number-of-new-species-has-dropped-1765561585.html');

				$('#2 p').text("Um raio de trovoada é cinco vezes mais quente que a superfície do Sol.");
				$('#2 a').attr('http://www.seeker.com/is-lightning-hotter-than-the-sun-1765058578.html');

				} else if (inputDate98.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("Cerca de 41 novas espécies são descobertas todos os dias por cientistas.");
				$('#1 a').attr('href','http://www.seeker.com/number-of-new-species-has-dropped-1765561585.html');

				$('#2 p').text("Um raio de trovoada é cinco vezes mais quente que a superfície do Sol.");
				$('#2 a').attr('http://www.seeker.com/is-lightning-hotter-than-the-sun-1765058578.html');

				$('#3 p').text("Comer salmão ajuda o cabelo a crescer mais rápido.");
				$('#3 a').attr('href','http://stylecaster.com/beauty/make-hair-grow-faster-foods/');

				} else if (inputDate97.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');

				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("Cerca de 41 novas espécies são descobertas todos os dias por cientistas.");
				$('#1 a').attr('href','http://www.seeker.com/number-of-new-species-has-dropped-1765561585.html');

				$('#2 p').text("Um raio de trovoada é cinco vezes mais quente que a superfície do Sol.");
				$('#2 a').attr('http://www.seeker.com/is-lightning-hotter-than-the-sun-1765058578.html');

				$('#3 p').text("Comer salmão ajuda o cabelo a crescer mais rápido.");
				$('#3 a').attr('href','http://stylecaster.com/beauty/make-hair-grow-faster-foods/');

				$('#4 p').text("A chuva contem vitamina B12.");
				$('#4 a').attr('href','http://www.nature.com/nature/journal/v219/n5154/abs/219617a0.html');

				} else if (inputDate98.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate99.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("Cerca de 41 novas espécies são descobertas todos os dias por cientistas.");
				$('#1 a').attr('href','http://www.seeker.com/number-of-new-species-has-dropped-1765561585.html');

				$('#2 p').text("Um raio de trovoada é cinco vezes mais quente que a superfície do Sol.");
				$('#2 a').attr('http://www.seeker.com/is-lightning-hotter-than-the-sun-1765058578.html');

				$('#3 p').text("Comer salmão ajuda o cabelo a crescer mais rápido.");
				$('#3 a').attr('href','http://stylecaster.com/beauty/make-hair-grow-faster-foods/');

				$('#4 p').text("A chuva contem vitamina B12.");
				$('#4 a').attr('href','http://www.nature.com/nature/journal/v219/n5154/abs/219617a0.html');

				$('#5 p').text("A teoria do Big Bang foi proposta pela primeira vez por um padre católico.");
				$('#5 a').attr('href','https://en.wikipedia.org/wiki/Georges_Lema%C3%AEtre');

				} else if (inputDate99.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("As abelhas podem ser treinadas para detetar bombas.");
				$('#1 a').attr('href','http://science.howstuffworks.com/bomb-sniffing-bees.htm');

				} else if (inputDate99.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("As abelhas podem ser treinadas para detetar bombas.");
				$('#1 a').attr('href','http://science.howstuffworks.com/bomb-sniffing-bees.htm');

				$('#2 p').text("Os tomates têm mais genes que os seres humanos.");
				$('#2 a').attr('http://www.nytimes.com/2012/05/31/science/the-tomato-ripe-juicy-and-bursting-with-genes.html?_r=0');

				} else if (inputDate99.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("As abelhas podem ser treinadas para detetar bombas.");
				$('#1 a').attr('href','http://science.howstuffworks.com/bomb-sniffing-bees.htm');

				$('#2 p').text("Os tomates têm mais genes que os seres humanos.");
				$('#2 a').attr('http://www.nytimes.com/2012/05/31/science/the-tomato-ripe-juicy-and-bursting-with-genes.html?_r=0');

				$('#3 p').text("Dura 8 minutos e 20 segundos a viagem da luz desde o Sol até à Terra.");
				$('#3 a').attr('http://www.universetoday.com/15021/how-long-does-it-take-sunlight-to-reach-the-earth/');

				} else if (inputDate99.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {


						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("As abelhas podem ser treinadas para detetar bombas.");
				$('#1 a').attr('href','http://science.howstuffworks.com/bomb-sniffing-bees.htm');

				$('#2 p').text("Os tomates têm mais genes que os seres humanos.");
				$('#2 a').attr('http://www.nytimes.com/2012/05/31/science/the-tomato-ripe-juicy-and-bursting-with-genes.html?_r=0');

				$('#3 p').text("Dura 8 minutos e 20 segundos a viagem da luz desde o Sol até à Terra.");
				$('#3 a').attr('http://www.universetoday.com/15021/how-long-does-it-take-sunlight-to-reach-the-earth/');

				$('#4 p').text("Plutão demora 248 anos a dar a volta ao Sol.");
				$('#4 a').attr('href','http://www.universetoday.com/44191/how-long-does-it-take-pluto-to-orbit-the-sun/');

				} else if (inputDate99.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate100.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("As abelhas podem ser treinadas para detetar bombas.");
				$('#1 a').attr('href','http://science.howstuffworks.com/bomb-sniffing-bees.htm');

				$('#2 p').text("Os tomates têm mais genes que os seres humanos.");
				$('#2 a').attr('http://www.nytimes.com/2012/05/31/science/the-tomato-ripe-juicy-and-bursting-with-genes.html?_r=0');

				$('#3 p').text("Dura 8 minutos e 20 segundos a viagem da luz desde o Sol até à Terra.");
				$('#3 a').attr('http://www.universetoday.com/15021/how-long-does-it-take-sunlight-to-reach-the-earth/');

				$('#4 p').text("Plutão demora 248 anos a dar a volta ao Sol.");
				$('#4 a').attr('href','http://www.universetoday.com/44191/how-long-does-it-take-pluto-to-orbit-the-sun/');

				$('#5 p').text("Leonardo DaVinci foi o primeiro a explicar o porquê do céu ser azul.");
				$('#5 a').attr('href','http://discovermagazine.com/2006/may/10-da-vinci');

				} else if (inputDate100.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("A Índia plantou 50 milhões de árvores em 24 horas a 11 de julho de 2016, um recorde mundial.");
				$('#1 a').attr('href','http://www.iflscience.com/environment/india-has-planted-nearly-50-million-trees-in-24-hours/');

				} else if (inputDate100.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("A Índia plantou 50 milhões de árvores em 24 horas a 11 de julho de 2016, um recorde mundial.");
				$('#1 a').attr('href','http://www.iflscience.com/environment/india-has-planted-nearly-50-million-trees-in-24-hours/');

				$('#2 p').text("O Bill Gates podia dar 10 dólares a cada ser humano e mesmo assim ficar com 3 biliões para ele.");
				$('#2 a').attr('http://www.forbes.com/profile/bill-gates/');

				} else if (inputDate100.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("A Índia plantou 50 milhões de árvores em 24 horas a 11 de julho de 2016, um recorde mundial.");
				$('#1 a').attr('href','http://www.iflscience.com/environment/india-has-planted-nearly-50-million-trees-in-24-hours/');

				$('#2 p').text("O Bill Gates podia dar 10 dólares a cada ser humano e mesmo assim ficar com 3 biliões para ele.");
				$('#2 a').attr('http://www.forbes.com/profile/bill-gates/');

				$('#3 p').text("Um duche normal custa 75 litros de água.");
				$('#3 a').attr('href','https://www.washingtonpost.com/news/energy-environment/wp/2015/03/04/your-shower-is-wasting-huge-amounts-of-energy-and-water-heres-what-to-do-about-it/');

				} else if (inputDate100.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');

				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("A Índia plantou 50 milhões de árvores em 24 horas a 11 de julho de 2016, um recorde mundial.");
				$('#1 a').attr('href','http://www.iflscience.com/environment/india-has-planted-nearly-50-million-trees-in-24-hours/');

				$('#2 p').text("O Bill Gates podia dar 10 dólares a cada ser humano e mesmo assim ficar com 3 biliões para ele.");
				$('#2 a').attr('http://www.forbes.com/profile/bill-gates/');

				$('#3 p').text("Um duche normal custa 75 litros de água.");
				$('#3 a').attr('href','https://www.washingtonpost.com/news/energy-environment/wp/2015/03/04/your-shower-is-wasting-huge-amounts-of-energy-and-water-heres-what-to-do-about-it/');

				$('#4 p').text("20% da população da Polónia morreu na 2ªGuerra Mundial.");
				$('#4 a').attr('href','https://en.wikipedia.org/wiki/World_War_II_casualties#/media/File:World_War_II_Casualties.svg');

				} else if (inputDate100.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate101.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("A Índia plantou 50 milhões de árvores em 24 horas a 11 de julho de 2016, um recorde mundial.");
				$('#1 a').attr('href','http://www.iflscience.com/environment/india-has-planted-nearly-50-million-trees-in-24-hours/');

				$('#2 p').text("O Bill Gates podia dar 10 dólares a cada ser humano e mesmo assim ficar com 3 biliões para ele.");
				$('#2 a').attr('http://www.forbes.com/profile/bill-gates/');

				$('#3 p').text("Um duche normal custa 75 litros de água.");
				$('#3 a').attr('href','https://www.washingtonpost.com/news/energy-environment/wp/2015/03/04/your-shower-is-wasting-huge-amounts-of-energy-and-water-heres-what-to-do-about-it/');

				$('#4 p').text("20% da população da Polónia morreu na 2ªGuerra Mundial.");
				$('#4 a').attr('href','https://en.wikipedia.org/wiki/World_War_II_casualties#/media/File:World_War_II_Casualties.svg');

				$('#5 p').text("Um russo típico consome 18 litros de álcool por ano.");
				$('#5 a').attr('href','https://en.wikipedia.org/wiki/Alcohol_consumption_in_Russia#Demographic');

				} else if (inputDate101.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 11) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '0vw') {
						$('#monitor').animate({marginLeft:'-10vw'},250, function (){

							$('#monitor').animate({marginLeft:'-0vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(0).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					}

				});

				$('#1 p').text("Os cocos matam cerca de 150 pessoas por ano.");
				$('#1 a').attr('href','http://www.mirror.co.uk/news/weird-news/scientists-calculate-odd-ways-die-282884');

				} else if (inputDate101.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  14) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-50vw') {
						$('#monitor').animate({marginLeft:'-110vw'},250, function (){

							$('#monitor').animate({marginLeft:'-100vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(1).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');

				$('#1 p').text("Os cocos matam cerca de 150 pessoas por ano.");
				$('#1 a').attr('href','http://www.mirror.co.uk/news/weird-news/scientists-calculate-odd-ways-die-282884');

				$('#2 p').text("A McDonalds faz cerca de 75 milhões de dólares por dia.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/McDonald%27s');

				} else if (inputDate101.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  17) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-90vw') {
						$('#monitor').animate({marginLeft:'-210vw'},250, function (){

							$('#monitor').animate({marginLeft:'-200vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(2).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');

				$('#1 p').text("Os cocos matam cerca de 150 pessoas por ano.");
				$('#1 a').attr('href','http://www.mirror.co.uk/news/weird-news/scientists-calculate-odd-ways-die-282884');

				$('#2 p').text("A McDonalds faz cerca de 75 milhões de dólares por dia.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/McDonald%27s');

				$('#3 p').text("Reciclar uma lata de alumínio salva energia suficiente para alimentar uma televisão durante duas horas.");
				$('#3 a').attr('https://www.epa.gov/smm');

				} else if (inputDate101.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  20) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-120vw') {
						$('#monitor').animate({marginLeft:'-310vw'},250, function (){

							$('#monitor').animate({marginLeft:'-300vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(3).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {


						$('#monitor').animate({marginLeft:'-300vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');

				$('#1 p').text("Os cocos matam cerca de 150 pessoas por ano.");
				$('#1 a').attr('href','http://www.mirror.co.uk/news/weird-news/scientists-calculate-odd-ways-die-282884');

				$('#2 p').text("A McDonalds faz cerca de 75 milhões de dólares por dia.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/McDonald%27s');

				$('#3 p').text("Reciclar uma lata de alumínio salva energia suficiente para alimentar uma televisão durante duas horas.");
				$('#3 a').attr('https://www.epa.gov/smm');

				$('#4 p').text("A Apple vendeu 340 mil iphones por dia em 2012.");
				$('#4 a').attr('href','http://news.cnet.com/8301-13579_3-57540705-37/apples-fiscal-2012-in-numbers-125m-iphones-58.31m-ipads/');

				} else if (inputDate101.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs <  24 || inputDate102.setHours(0,0,0,0) === todaysDate.setHours(0,0,0,0) && hrs < 8) {

				$("#ecra").on("swipeleft",function(){

					if ( $('#monitor').css('marginLeft') <= '-300vw') {
						$('#monitor').animate({marginLeft:'-410vw'},250, function (){

							$('#monitor').animate({marginLeft:'-400vw'},400);

						});
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(4).addClass('menu_active');

					} else {

						var index = $('.menu_active').index() +1;

						$('#monitor').animate({marginLeft:'-=100vw'},500);
						$('#menu li').removeClass('menu_active');
						$('#menu li').eq(index).addClass('menu_active');

					}

				});

				$('#menu li').click(function(){

					if ($(this).hasClass('menu_wait')){

						$('#menu li').removeClass('menu_active');
						$(this).addClass('menu_active');

					}

					if( $(this).index() === 0 ) {

						$('#monitor').animate({marginLeft:'0vw'},500);

					} else if( $(this).index() === 1 ) {

						$('#monitor').animate({marginLeft:'-100vw'},500);

					} else if( $(this).index() === 2 ) {

						$('#monitor').animate({marginLeft:'-200vw'},500);

					} else if( $(this).index() === 3 ) {

						$('#monitor').animate({marginLeft:'-300vw'},500);

					} else if( $(this).index() === 4 ) {

						$('#monitor').animate({marginLeft:'-400vw'},500);

					}

				});

				$('#menu li').eq(0).addClass('menu_wait');
				$('#menu li').eq(1).addClass('menu_wait');
				$('#menu li').eq(2).addClass('menu_wait');
				$('#menu li').eq(3).addClass('menu_wait');
				$('#menu li').eq(4).addClass('menu_wait');

				$('#1 p').text("Os cocos matam cerca de 150 pessoas por ano.");
				$('#1 a').attr('href','http://www.mirror.co.uk/news/weird-news/scientists-calculate-odd-ways-die-282884');

				$('#2 p').text("A McDonalds faz cerca de 75 milhões de dólares por dia.");
				$('#2 a').attr('https://en.wikipedia.org/wiki/McDonald%27s');

				$('#3 p').text("Reciclar uma lata de alumínio salva energia suficiente para alimentar uma televisão durante duas horas.");
				$('#3 a').attr('https://www.epa.gov/smm');

				$('#4 p').text("A Apple vendeu 340 mil iphones por dia em 2012.");
				$('#4 a').attr('href','http://news.cnet.com/8301-13579_3-57540705-37/apples-fiscal-2012-in-numbers-125m-iphones-58.31m-ipads/');

				$('#5 p').text("90% de todo o arroz do mundo é consumido na Ásia.");
				$('#5 a').attr('href','http://irri.org/rice-today/trends-in-global-rice-consumption');

				}

		});

});
