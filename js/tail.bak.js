

//Begin regular time updates checking for annotations
BV.getPlayer().playbackRate("1");
BV.getPlayer().on("timeupdate", annotations);
var initBufferHandler = true;
var firstVideoPauseHandler = false;

BV.getPlayer().ready(function(){
	BV.getPlayer().play();
});


/////////////////////////Init
resizeDiv();
//inits bootstrap tab    
$('#resumeTabPanel a:first').tab('show');
$("ul.nav.nav-tabs").on("touchstart", function(){})
//helps deal with hover events on touch
$(document).on("touchstart", "body~*", function(event){
	$(event.target).trigger("mouseenter");
});
////////Inits slick.js, a gallery
/*$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});*/


//Hover Events

//Handles all glyphicon link hovering

$(document).on('mouseenter', '.glyphicon', function(event){
        event.stopPropagation();
        event.preventDefault();
        if(!$(event.target).hasClass("hovering") ) {

		  $( event.target )
		  .addClass("hovering")
		  .velocity({rotateX: 360, rotateZ: -5}, {duration: 777});


			//sets the handler to add'l clicks
            setTimeout(function(){
				$(event.target)
				.removeClass("hovering")
				.trigger("mouseleave");
			}, 2221);

        } else {
            return false;
        }
});

$(document).on('mouseleave', '.glyphicon', function(event)
{
        event.stopPropagation();
        event.preventDefault();
        if( !$(event.target).hasClass("hoverOff") && !$(event.target).hasClass("hovering") ) {

 		 $( event.target )
 		 .addClass("hoverOff")
 		 .velocity("reverse");


			//sets the handler to add'l clicks
            setTimeout(function(){
				$(event.target)
				.removeClass("hoverOff")
				.velocity({rotateX: 0, rotateZ: 0}, {duration: 777});
			}, 777);

        } else {
            return false;
        }
});



//Click Events

//Handles all glyphicon link clicking
$(document).on('touchstart click', '.glyphicon', function(event){
    event.stopPropagation();
    event.preventDefault();

    //registers only one click event per 2222ms
    if( CLICKhandled !== true) {
    		 CLICKhandled = true;

    //let's add a flash photography effect with sound, activated by click but not tied to any event!

	//Init
    var mcDisplayed = $($mainContent).hasClass("show");
    var clickedId = $(event.target).attr("id");
    var $id = "#"+clickedId;
    var $clas = "."+clickedId;
    var $navIcons = $(event.target).parent().parent().find("span").not($play);

    //first, we will populate the mainContent area as appropos if it is not the play button
	if(mcDisplayed===true && clickedId!=="play"){
		
		//If triggerer is not already displayed, place MC
		if(!$($id).hasClass("active")){
			//show the triggerer's content after previous animation completes
			setTimeout(function(){
				$($clas)
				.switchClass("hidden", "show")
				.velocity("transition.bounceIn", 2220);
			}, 1222);
		} else {
			//if the mainContent box is revealed but empty (clicked icon==active), we will hide it
			setTimeout(function(){
				$($mainContent)
				.switchClass("show", "hidden");
			}, 1111);
		}
		//if the mainContent displayed, we must hide what's shown before adding the new content
			$($mcClass)
			.find(".show")
			.velocity("transition.bounceOut", 1110);

		//hide all MCs after animation
		setTimeout(function(){
				$($mcClass)
				.find(".show")
				.switchClass("show", "hidden");
			}, 1111);
	} else if(mcDisplayed===false && clickedId!=="play"){
		//if no MC is displayed, then we must 1) display the #mainContent container, 2) hide all of the non-selected content, 3) show only the appropos class
		$($mainContent)
		.switchClass("hidden", "show")
		.children()
		.css({opacity: 0});

		setTimeout(function(){
				$($clas)
				.switchClass("hidden", "show")
				.velocity("transition.bounceIn", 2220);
			}, 111);
	}


    	//any active icon is black
    	if(!$(event.target).hasClass("active") ){
    		//Only one visual element at a time (aside from BG video)
	  		if (!$(event.target).is($play)){

	  			//if paused at menu, then animate the navIcons away from viewing area
	  			if (firstVideoPauseHandler===true){
	  				$($photo)
					.velocity({top: "5%", left: "84%"}, {drag: true, duration: 777, queue: false});
					
					$($resume)
					.velocity({top: "5%", left: "5%"}, {drag: true, duration: 777, queue: false});

					$($contact)
					.velocity({top: "84%", left: "5%"}, {drag: true, duration: 777, queue: false});

					$($play)
					.velocity({top: "84%", left: "84%"}, {drag: true, duration: 777, queue: false});

	  			}

    	  		$($navIcons)
	        	.velocity({color: "#FFFFFF"}, {duration: 2222, queue:false})
	        	.removeClass("active");
	  			}
        	$(event.target)
        	.velocity({color: "#000000"}, {duration: 2222, queue:false})
        	.addClass("active");
        } else { //and turns white when inactive
        	$(event.target)
        	.velocity({color: "#FFFFFF"}, {duration: 2222, queue:false})
        	.removeClass("active");
        }
    	
    	//Play icon causes the video to continue, turns into pause while playing
	  	if($(event.target).is($play)) {
	  		if (BV.getPlayer().paused()===true){
	  			//if paused, unpause and change icon. If photo is activated, turn it off
	  			if($($photo).hasClass("class")){
	  				CLICKhandled = false;
	  				$($photo).trigger("click");
	  			}
	  			//because the video is paused with a Handler initially, we will use it to delay the normal behavior as it fades out
	  			if (firstVideoPauseHandler===false){
					//not paused at "menu" screen
					$(event.target)
					.switchClass("glyphicon-play-circle", "glyphicon-pause", 0);

				} else if(firstVideoPauseHandler===true) {
					//paused at menu screen 
					//delay animation to change to pause as well as the hide event for all navBar
					setTimeout(function(){
						$($play)
	        			.velocity({color: "#000000"}, {duration: 0, queue:false})
	        			.addClass("active")
						.switchClass("glyphicon-play-circle", "glyphicon-pause", 0);

						BV.getPlayer().playbackRate("1");
						$("#navVessel").hideAndShow();

					}, 2222);


					//hide all MC by clicking other active navIcons
					$.each($($navIcons), function(){ 
						if ($(this).hasClass("active")){
							CLICKhandled = false;
							$(this).trigger("click");
							}
						});

					//hide all navIcons
					$($navIcons)
		        	.velocity("stop")
		        	.velocity("transition.slideUpOut", {stagger: 222, drag: true, duration: 1111, queue: false});
		        	//show diff animation for target
		        	$(event.target)
		        	.velocity("stop")
		        	.velocity("transition.slideRightOut", {drag: true, duration: 1111, queue:false});
		  			}

		  		if ($($photo).hasClass("active")){

		  			CLICKhandled = false;
		  			$($photo).trigger("click");

		  			BV.show([
				    { poster: "/img/cover.jpg", type: "video/mp4",  src: "/videos/LexAud2015.mp4" },
				    { poster: "/img/cover.jpg", type: "video/webm", src: "/videos/LexAud2015.webm" },
					{ poster: "/img/cover.jpg", type: "video/ogg",  src: "/videos/LexAud2015.ogv" },
					{src: "/img/cover.jpg"}
					]);

		  			BV.getPlayer().currentTime(
		  				CURRENTtime);

		  		}	
		  		
				
				BV.getPlayer().playbackRate("1");
				BV.getPlayer().play();



			} else if (BV.getPlayer().paused()===false) {
				//if playing, pause and change icon
				BV.getPlayer().playbackRate("1");
				BV.getPlayer().pause();
				$($play)
				.switchClass("glyphicon-pause", "glyphicon-play-circle", 0);
			}
	  	}
	  	//If photos, we need to show it on BV
	  	if($(event.target).is($photo)) {
	  		CURRENTtime = BV.getPlayer().currentTime();
	  		//if playing, then click 'pause'
	  		if(BV.getPlayer().paused() === false){
	  			CLICKhandled = false;
	  			$($play).trigger("click");
	  		}
				  		
	  		//show photos in BV
	  		BV.show("/img/photo/1.jpg");
	  		resizeDiv();
	  	}

		//sets the handler to add'l clicks
        setTimeout(function(){
			 CLICKhandled = false;
		}, 2222);
	
	
    } else {
        return false;
    }
});


/*

$.Velocity.RegisterEffect(name, {
    defaultDuration: duration,
    calls: [ 
        [ { property: value }, durationPercentage, { options } ],
        [ { property: value }, durationPercentage, { options } ]
    ],
    reset: { property: value, property: value }
});

*/
