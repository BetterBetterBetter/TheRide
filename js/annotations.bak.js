//define frequent jqueries
var $play = $("#play");
var $contact = $("#contact");
var $resume = $("#resume");
var $photo = $("#photo");
var $first = $("#firstAnnot");
var $second = $("#secondAnnot");
var $third = $("#thirdAnnot");
var $fourth = $("#fourthAnnot");
var $mainContent = $("#mainContent");
var $mcClass = $(".mainContent");


//second-by-second JS over the background video
function annotations(){
//Pause early on until the whole intro is loaded
	if (BV.getPlayer().currentTime() > 5 && BV.getPlayer().currentTime() < 6 && initBufferHandler===true){
		$($play).trigger("click");	
		initBufferHandler = false;
		setTimeout(initBuffer, 500);
		

	} else {
//slow down before pause to ensure that event fires
	if (BV.getPlayer().currentTime() > 40 && BV.getPlayer().currentTime() < 50 && BV.getPlayer().playbackRate()!=8) {
		BV.getPlayer().playbackRate("8");
	} else {
//keep on slowing...
	if (BV.getPlayer().currentTime() > 50 && BV.getPlayer().currentTime() < 55 && BV.getPlayer().playbackRate()!=4) {
		BV.getPlayer().playbackRate("4");
	} else {
//pause and present button
	if (BV.getPlayer().currentTime() > 57 && BV.getPlayer().currentTime() < 59 && firstVideoPauseHandler===false)	{

			$($play).trigger("click");

			firstVideoPauseHandler = true;
			BV.getPlayer().playbackRate("2");
			

			if (!$("#navVessel").hasClass("show")){
				$("#navVessel")
				.hideAndShow()
				.find("span")
				.velocity("transition.slideDownBigIn", {stagger: 777, drag: true, duration: 3333});

				$($play)
				.velocity({top: "70%", left: "45%"}, {drag: true, duration: 1111, queue: false});
				
				$($contact)
				.velocity({top: "70%", left: "15%"}, {drag: true, duration: 1111, queue: false});

				$($resume)
				.velocity({top: "35%", left: "15%"}, {drag: true, duration: 1111, queue: false});

				$($photo)
				.velocity({top: "35%", left: "45%"}, {drag: true, duration: 1111, queue: false});



				}
		} else {
	if (BV.getPlayer().currentTime() > 68 && BV.getPlayer().currentTime() < 69 && !$($first).hasClass("show")) {
			firstVideoPauseHandler = false;
			$($first)
			.hideAndShow()
			.find("span")
			.velocity({rotateY: 0}, {duration: 1111, queue: false})
			.velocity("transition.slideDownBigIn", {drag: true, duration: 1111});

			resizeText();


			setTimeout(function(){
				$($first)
				.children()
				.velocity("transition.slideLeftOut", 1111)
				.velocity({rotateY: -180}, {duration: 1111, queue: false});

				setTimeout(function(){
					$($first)
					.hideAndShow();
				}, 1111);
			}, 3333);

		} else {
	if (BV.getPlayer().currentTime() > 71 && BV.getPlayer().currentTime() < 72 && !$($second).hasClass("show")){
			$($second)
			.hideAndShow()
			.find("span")
			.velocity({rotateY: 0}, {duration: 1111, queue: false})
			.velocity("transition.slideDownBigIn", {stagger: 0, drag: true, duration: 1111});
		
			resizeText();


			setTimeout(function(){
				$($second)
				.children()
				.velocity("transition.slideRightOut", 1111)
				.velocity({rotateY: +180}, {duration: 1111, queue: false});

				setTimeout(function(){
					$($second)
					.hideAndShow();
				}, 1111);
			}, 8888);
			
		} else {
	if (BV.getPlayer().currentTime() > 81 && BV.getPlayer().currentTime() < 82 && !$($third).hasClass("show")) {


			$($third)
			.hideAndShow()
			.find("span")
			.velocity({rotateY: 0}, {duration: 1111, queue: false})
			.velocity("transition.slideDownBigIn", {stagger: 0, drag: true, duration: 1111});

			resizeText();


			setTimeout(function(){
				$($third)
				.children()
				.velocity("transition.slideLeftOut", 1111)
				.velocity({rotateY: -180}, {duration: 1111, queue: false});

				setTimeout(function(){
					$($third)
					.hideAndShow();
				}, 1111);
			}, 4444);
			
	} 	else {
	if (BV.getPlayer().currentTime() > 95 && BV.getPlayer().currentTime() < 96 && !$($fourth).hasClass("show") ) {

			$($fourth)
			.hideAndShow()
			.find("span")
			.velocity({rotateY: 0}, {duration: 1111, queue: false})
			.velocity("transition.slideDownBigIn", {stagger: 777, drag: true, duration: 1111});

			resizeText();


			setTimeout(function(){
				$($fourth)
				.children()
				.velocity("transition.slideRightOut", 1111)
				.velocity({rotateY: +180}, {duration: 1111, queue: false});

				setTimeout(function(){
					$($fourth)
					.hideAndShow();
				}, 1111);
			}, 5555);
	} else {
	//Video1 Ends, evoke menu options
		if (BV.getPlayer().currentTime() > 146 && BV.getPlayer().currentTime() < 147 ) 	{

			if (!$("#navVessel").hasClass("show")){
				$("#navVessel")
				.hideAndShow()
				.find("span")
				.velocity("transition.bounceIn", {stagger: 77, drag: true, duration: 3333, queue: false});
				
				$($play)
				.velocity({top: "5%", left: "84%"}, {drag: true, duration: 3333, queue: false});
				
				$($contact)
				.velocity({top: "5%", left: "5%"}, {drag: true, duration: 3333, queue: false});

				$($resume)
				.velocity({top: "84%", left: "5%"}, {drag: true, duration: 3333, queue: false});

				$($photo)
				.velocity({top: "84%", left: "84%"}, {drag: true, duration: 3333, queue: false});
			}
	} else {
	if ( BV.getPlayer().currentTime() > 149 && BV.getPlayer().currentTime() < 150 ) {

			$($resume).trigger("click");
	}
	

/*!
!!One must add a bracket for every annotation added!!
!*/
}}}}}}}}}}	
