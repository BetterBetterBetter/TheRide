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
var $loading  = $("#loading");


//second-by-second JS over the background video
function annotations(){
//Pause early on until the whole intro is loaded
	if (BV.getPlayer().currentTime() > 5 && BV.getPlayer().currentTime() < 6 && initBufferHandler===true){
		$($play).trigger("click");	
		initBufferHandler = false;

				//hide gif
      	$($loading)	
      		.hideAndShow()
        	.velocity("transition.flipBounceXIn", {duration: 7777});
		setTimeout(initBuffer, 500);

	} else {
//slow down before pause to ensure that event fires
	if (BV.getPlayer().currentTime() > 40 && BV.getPlayer().currentTime() < 50 && BV.getPlayer().playbackRate()!=1) {

	} else {
//keep on slowing...
	if (BV.getPlayer().currentTime() > 50 && BV.getPlayer().currentTime() < 55 && BV.getPlayer().playbackRate()!=1) {

	} else {
//pause and present button
	if (BV.getPlayer().currentTime() > 57 && BV.getPlayer().currentTime() < 59 && firstVideoPauseHandler===false)	{

			$($play).trigger("click");

			firstVideoPauseHandler = true;
			BV.getPlayer().playbackRate("1");
			

			if (!$("#navVessel").hasClass("show")){
				$("#navVessel")
				.hideAndShow()
				.find("span")
				.velocity("transition.slideDownBigIn", {stagger: 777, drag: true, duration: 3333});

				$($play)
				.velocity({top: "70%", left: "45%"}, {drag: true, duration: 1111, queue: false});
				
				$($contact)
				.velocity({top: "70%", left: "15%"}, {drag: true, duration: 1111, queue: false});

				$($photo)
				.velocity({top: "35%", left: "45%"}, {drag: true, duration: 1111, queue: false});



				}
		} else {
	if (BV.getPlayer().currentTime() > 68 && BV.getPlayer().currentTime() < 69 && !$($first).hasClass("show")) {
			

		} else {
	if (BV.getPlayer().currentTime() > 68 && BV.getPlayer().currentTime() < 69 && !$($second).hasClass("show")){
			
					} else {
	if (BV.getPlayer().currentTime() > 81 && BV.getPlayer().currentTime() < 82 && !$($third).hasClass("show")) {

			resizeText();
			
	} 	else {
	if (BV.getPlayer().currentTime() > 95 && BV.getPlayer().currentTime() < 96 && !$($fourth).hasClass("show") ) {

			resizeText();

	} else {
	//Video1 Ends, evoke menu options
		if (BV.getPlayer().currentTime() > 242 && BV.getPlayer().currentTime() < 244 ) 	{

			//if the user selects other options prior to video1, it is possible that the glyphicons will remain black despite not being .active
			//We will reoslve this here, prior to revealing them again
			$navIcons = $(".glyphicon");
			$.each($($navIcons), function(index, value){ 
				if (!$(this).hasClass("active")){
		        	$(this).velocity({color: "#FFFFFF"}, {duration: 0, queue:false});
					}
				});

			if (!$("#navVessel").hasClass("show")){
				$("#navVessel")
				.hideAndShow()
				.find("span")
				.velocity("transition.bounceIn", {stagger: 77, drag: true, duration: 3333, queue: false});
				
				$($play)
				.velocity({top: "5%", left: "84%"}, {drag: true, duration: 3333, queue: false});
				
				$($contact)
				.velocity({top: "5%", left: "5%"}, {drag: true, duration: 3333, queue: false});

				$($photo)
				.velocity({top: "84%", left: "84%"}, {drag: true, duration: 3333, queue: false});
			}
	} else {
	if ( BV.getPlayer().currentTime() > 259 && BV.getPlayer().currentTime() < 260 ) {

			$($contact).trigger("click");
	}
	

/*!
!!One must add a bracket for every annotation added!!
!*/
}}}}}}}}}}	
