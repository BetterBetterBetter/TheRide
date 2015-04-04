

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
$("ul.nav.nav-tabs").on("touchstart", function(event){
	$(event.target).trigger("click");
});
//helps deal with hover events on touch
$("span").on("touchstart", function(event){
	$(event.target).trigger("mouseenter");
});






///////Init Light Boxes
(function($){
  
  // Invoke our plugin
  $('[data-lightbox]').simpleLightbox();

})(jQuery);








///////Init packery (photos wall)
var $container = $('#container').packery({
  	"gutter": 8,
  	"isInitLayout": false
});

// layout Packery after all images have loaded
$container.imagesLoaded( function() {
  setTimeout(function(){

	$container;
	// get item elements, jQuery-ify them
	var $itemElems = $container.find('.item');
	// make item elements draggable
	$itemElems.draggable();
	// bind Draggable events to Packery
	$container.packery( 'bindUIDraggableEvents', $itemElems );

  }, 222);
});








///////////Hover Events

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

//////Photo wall hover
///small class
$('div.item.small > a > img')
  .hover(function(e) {
  	var $this = $(this);
  	var originalWidth = $($this).css("width");
  	var modifiedWidth = parseInt(originalWidth) + 8;
    $this.hoverFlow(e.type, { width: modifiedWidth }, 'fast', 'easeInOutBounce');
  }, function(e) {
  	var $this = $(this);
  	var originalWidth = $($this).css("width");
  	var modifiedWidth = parseInt(originalWidth) - 8;
  	  	if (modifiedWidth<80){modifiedWidth += 8};
    $this.hoverFlow(e.type, { width: modifiedWidth }, 'fast', 'easeInOutBounce');
  });
///large class
$('div.item.big > a > img')
  .hover(function(e) {
  	var $this = $(this);
  	var originalWidth = $($this).css("width");
  	var modifiedWidth = parseInt(originalWidth) + 6;
    $this.hoverFlow(e.type, { width: modifiedWidth }, 'fast', 'easeInOutBounce');
  }, function(e) {
  	var $this = $(this);
  	var originalWidth = $($this).css("width");
  	var modifiedWidth = parseInt(originalWidth) - 6;
  	  	if (modifiedWidth<144){modifiedWidth += 6};
    $this.hoverFlow(e.type, { width: modifiedWidth }, 'fast', 'easeInOutBounce');
  });





//Click Events

/////////////Glyphicon Click
//Handles all glyphicon link clicking
$(document).on('touchstart click', '.glyphicon', function(event){
    event.stopPropagation();
    event.preventDefault();

    //registers only one click event per 3333ms
    if( CLICKhandled !== true) {
    		 CLICKhandled = true;

		//Init
		CURRENTtime = BV.getPlayer().currentTime();
		var path = "/img/photo/hires/"+IMGnumber+".jpg";
	    var mcDisplayed = $($mainContent).hasClass("show");
	    var clickedId = $(event.target).attr("id");
	    var $id = "#"+clickedId;
	    var $clas = "."+clickedId;
	    var $navIcons = $(event.target).parent().parent().find("span").not($play);
	    var $bvNav = $(".glyphicon").filter("#play, #photo");
	    var $contentNav = $(".glyphicon").filter("#resume, #contact");
	    var $photoNav = $(".glyphicon").filter("#pControlR, #pControlL");

	    ///////////////////.Architecture.//////////////
	    /////this function is designed such that it each category has mutally exclusive actions...
	    /////and that clicking on one icon to cause the others to be clicked for deactivation.
	    /////I.e., each click runs down a tree of conditionals as follows:
	    ////
	    //If (e.t belongs to category) {
	    ////if (e.t has id){
	    ////////if (e.t. has active class){
	    //////////removal, hide behviour
		////////} else
	    ////////if (e.t. does not have active class){
	    //////////show, reveal beaviour
		//////////$(other navs in cat).trigger("click")}
		////
		////In short, the function is designed have a triggered click for every deactivation.
	    

	    //if BV Controls category,
	    if( $(event.target).is($bvNav)) {
	    	//if id is Play,
	  		if($(event.target).is($play)) {


		  		//Play icon causes the video to continue, turns into pause while playing
		  		//(N.B., BV.paused is used here instead of the "active" class despite its inclusion)
		  		if (BV.getPlayer().paused()===true){
		  			//if paused, unpause and change icon. 

		  			//because the video is paused with a Handler initially, we will use it to delay the normal behavior as it fades out seamlessly into black background
		  			if (firstVideoPauseHandler===false){
						//not paused at "menu" screen
						$(event.target)
						.switchClass("glyphicon-play-circle", "glyphicon-pause", 0);

					} else if(firstVideoPauseHandler===true) {
						//paused at menu screen 
						//we will find each item in MCcontrols and click it, tho only one is active at a time
						$.each($contentNav, function(index, value) { 
						    if($(this).hasClass("active")){
						    	CLICKhandled = false;
						    	$(this).trigger("click");
						    } 
						});

						//delay animation to change to pause as well as the hide event for all navBar
						setTimeout(function(){
							$($play)
		        			.velocity({color: "#000000"}, {duration: 0, queue:false})
		        			.addClass("active")
							.switchClass("glyphicon-play-circle", "glyphicon-pause", 0);

							BV.getPlayer().playbackRate("1");
							$("#navVessel").hideAndShow();

						}, 2222);

						//since we are at menu and the video is playing, we might as well...
						//hide all MC by clicking other active navIcons
						$.each($($navIcons), function(index, value){ 
							if ($(this).hasClass("active")){
								CLICKhandled = false;
								$(this).trigger("click");
								}
							});

						//hide all navIcons
						$($navIcons)
			        	.velocity("stop")
			        	.velocity("transition.flipBounceYOut", {stagger: 222, drag: true, duration: 1111, queue: false});
			        	//show diff animation for target
			        	$(event.target)
			        	.velocity("stop")
			        	.velocity("transition.whirlOut", {drag: true, duration: 1111, queue:false});
			  			}//end of menu-sensitive behavior

			  	//if photo is active, click it into submission
			  	if ($($photo).hasClass("active")){
		  			CLICKhandled = false;
		  			$($photo).trigger("click");

	  			}	

	  				///general paused===true options
	  				//change color, class, glyphicon
		        	$(event.target)
		        	.velocity({color: "#000000"}, {duration: 2222, queue:false})
		        	.addClass("active");
		  			//since it is paused, we will play and set rate
		  			BV.getPlayer().play();
		  			BV.getPlayer().playbackRate("1");

			  	//if not paused (is playing), then change the icon and pause
		        } else { 

		        	//pause
		        	BV.getPlayer().pause();

		        	//change color, class, glyphicon
		        	$(event.target)
		        	.velocity({color: "#FFFFFF"}, {duration: 2222, queue:false})
		        	.removeClass("active")
		        	.switchClass("glyphicon-pause","glyphicon-play-circle");
		        	
		        }
		    }//end of "if #play"

			//////////////////////Photo
			///////////////////////////
			//If photo, we need to show it on BV
		  	if($(event.target).is($photo)) {
		  		//if e.t. is active already, hide photo
		  		if( $(event.target).hasClass("active") ){
		  			//evoke saved time
		  			BV.getPlayer().currentTime(CURRENTtime);

		  			//hide photo, show video
			  		$("#big-video-vid").velocity("transition.slideDownIn", 1111);
			  		$("#big-video-image").velocity("transition.slideDownOut", 1111);
			  		//hide controls
			  		$("#pControlVessel")
			  		.children()
			  		.velocity("transition.flipBounceXOut", 1111);
			  		//timeout for hiding vessel
			  		setTimeout(function(){
			  			$("#pControlVessel").hideAndShow();
			  		}, 1112);
			  		//timeout to assure good image resizing
			  		setTimeout(function(){
			  			resizeDiv();
			  		}, 2222);

		  			//turn icon white, remove active
			  		$(event.target)
		        	.velocity({color: "#FFFFFF"}, {duration: 2222, queue:false})
		        	.removeClass("active");

		  		} else { //if e.t is not active, display photo
		  			//we will save the video time as a global variable
		  			CURRENTtime = BV.getPlayer().currentTime();

		  			//if playing, then click 'pause'
		  			if(BV.getPlayer().paused() === false){
		  				CLICKhandled = false;
		  				$($play).trigger("click");
		  			} 

			  		//show photos in BV
			  		BV.show(path);
			  		$("#big-video-image").velocity("transition.slideDownIn", 1111);
			  		$("#big-video-vid").velocity("transition.slideDownOut", 1111);
			  		//show wall
			  		$("#pControlVessel")
			  		.hideAndShow()
			  		.children()
					.css({opacity: 0})
			  		.velocity("transition.flipBounceXIn", 1111, function(){
			  			$container.packery();
			  		});

			  		//timeout to assure good image resizing
			  		setTimeout(function(){
			  			resizeDiv();
			  		}, 2222);

			  		//turn the clicked icon black, make active
		        	$(event.target)
		        	.velocity({color: "#000000"}, {duration: 2222, queue:false})
		        	.addClass("active");


		        	///////Menu options
		        	//if menu, then scatter icons as is done for MC
		        	if(firstVideoPauseHandler===true){
		        		$($photo)
						.velocity({top: "5%", left: "84%"}, {drag: true, duration: 777, queue: false});
						$($resume)
						.velocity({top: "5%", left: "5%"}, {drag: true, duration: 777, queue: false});
						$($contact)
						.velocity({top: "84%", left: "5%"}, {drag: true, duration: 777, queue: false});
						$($play)
						.velocity({top: "84%", left: "84%"}, {drag: true, duration: 777, queue: false});
		        	}
		        }//end of not active

		  	}//end of Photo

		 //////////////Content Nav
		 ///////consists of both Resume and Contact fields, of which...
		 /////// only one may be displayed at a time. This includes...
		 /////// both the resume and the contact icons.
	    } else if( $(event.target).is($contentNav) ){
	    	if( mcDisplayed===true ){
				
				//If triggerer is already active, then hide it
				if( $(event.target).hasClass("active") ){

					//turn icon white, remove active
			  		$(event.target)
		        	.velocity({color: "#FFFFFF"}, {duration: 2222, queue:false})
		        	.removeClass("active");

		        	//find shown objects of target class, hide them
					$($clas)
					.find(".show")
					.velocity("transition.flipBounceYOut", 444);

					//delay hide for animation
					setTimeout(function(){
						//hide mainContent
		        		$($mainContent)
						.switchClass("show", "hidden");
						$($clas)
						.switchClass("show", "hidden");
					}, 555);
				} else {//if e.t. is not active, then show it
				
					//if the mainContent displayed, we must hide what's shown before adding the new content

					//hide all MC by clicking other active navIcons
					$.each( $($contentNav), function(){ 
						if ($(this).hasClass("active")){
							CLICKhandled = false;
							$(this).trigger("click");
							}
						});

					//turn the clicked icon black, make active
		        	$(event.target)
		        	.velocity({color: "#000000"}, {duration: 2222, queue:false})
		        	.addClass("active");

					//delay show and animation for all items with associated class
					setTimeout(function(){
						$($mainContent)
						.switchClass("hidden", "show")
						$($clas)
						.switchClass("hidden", "show")
						.css({opacity: 0})
						.velocity("transition.slideDownIn", 2220);
					}, 1222);




		        	///////Menu options
		        	//if menu, then scatter icons
		        	if(firstVideoPauseHandler===true){
		        		$($photo)
						.velocity({top: "5%", left: "84%"}, {drag: true, duration: 777, queue: false});
						$($resume)
						.velocity({top: "5%", left: "5%"}, {drag: true, duration: 777, queue: false});
						$($contact)
						.velocity({top: "84%", left: "5%"}, {drag: true, duration: 777, queue: false});
						$($play)
						.velocity({top: "84%", left: "84%"}, {drag: true, duration: 777, queue: false});
		        	}
				}


			//end of MC displayed === true
			} else if(mcDisplayed===false){
				//if no MC is displayed, then we must 1) display the #mainContent container, 2) hide all of the non-selected content, 3) show only the appropos class
				$($mainContent)
				.switchClass("hidden", "show")
				.children()
				.css({opacity: 0});

				//turn the clicked icon black, make active
	        	$(event.target)
	        	.velocity({color: "#000000"}, {duration: 2222, queue:false})
	        	.addClass("active");

				setTimeout(function(){
					$($clas)
					.switchClass("hidden", "show")
					.velocity("transition.flipBounceYIn", 2220);
				}, 111);
			}
	  	
	    } else if( $(event.target).is($photoNav) ){
		//if the photo controls are activated, then advance or regress the IMG Number, then show it
	    	//define path and add img number
	    	var pathInit = "/img/photo/hires/";
	    	//next photo
	    	if($(event.target).hasClass("glyphicon-chevron-right")){

	    		//loop if below maximum number
	    		if(IMGnumber===12){ IMGnumber = 1};


	    		//add one to counter, show path
	    		IMGnumber = IMGnumber + 1;
	    		path = pathInit + IMGnumber + ".jpg";
	    		BV.show(path);

	    		//setTimeout to resize once size begins to approximate size
	    		setTimeout(function(){
	    			resizeDiv();
	    		}, 3333);

	    	//back a photo
	    	} else if ($(event.target).hasClass("glyphicon-chevron-left")){

	    		//loop if below maximum number
	    		if(IMGnumber===1){ IMGnumber = 12};

	    		//remove one to counter, show path
	    		IMGnumber = IMGnumber - 1;
	    		path = pathInit + IMGnumber + ".jpg";
	    		BV.show(path);

	    		//setTimeout to resize once size begins to approximate size
	    		setTimeout(function(){
	    			resizeDiv();
	    		}, 3333);

	    	}




	    }//end of photoNav

	 



		//if Photo and a Content-displaying option are active, then let's add an overlay to the images so that the mainContent is more easily read
		  	if( $($photo).hasClass("active") && ($($resume).hasClass("active") || $($contact).hasClass("active") ) ) {
		  		$(".mcVessel").velocity( {backgroundColor: "#FFFFFF", backgroundColorAlpha: ".777"}, {drag: true, duration: 777, queue: false}  );
		  	} else { ///if photo and another MC are not displayed at once...
		  		$(".mcVessel").velocity( {backgroundColor: "#FFFFFF", backgroundColorAlpha: "0"}, {drag: true, duration: 777, queue: false}  );
		  	}

	    	
	    	
		//sets the handler to add'l clicks
		setTimeout(function(){
			 CLICKhandled = false;
		}, 3333);
			  		
		
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
