
var isWebkit = /Webkit/i.test(navigator.userAgent),
    isChrome = /Chrome/i.test(navigator.userAgent),
    isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    isAndroid = /Android/i.test(navigator.userAgent),
    isTouch = Modernizr.touch;

//click handler for all nav button events (2222ms)
CLICKhandled = false;



resizeDiv();
resizeText();

window.onresize = function(event) {
resizeDiv();
resizeText();
};

window.addEventListener('resize', resizeDiv);

      
function resizeDiv() 
{//height == x axis, width == y axis

      vpw = $(window).width();
      vph = $(window).height();
      asp = ( vph / vpw );
      area = ( vph * vpw );
      var vphNine = (vph / 9);
      var vpwNine = (vpw / 9);
      var vphNineFont = vpwNine * asp;
      $( "body" ).css({"width": vpw + "px"}).css({"height": vph + "px"});
      //$( "#video" ).css({"width": vpw + "px"});
      $(".glyphicon").css({"height": vphNine + "px"}).css({"width": vpwNine + "px"}).css({"font-size": vphNineFont});
      resizeText();

}

function resizeText()
{//this function resizes the different headers in relationship to the window area 
   fontC = ( area * .0001 );
   fontC1 = 32;
  if(fontC>80){fontC1 = 80}else if(fontC<32){fontC1 = 32}else{fontC1= fontC}
   fontCfraction = fontC1/4;
   halfFontFrac = fontCfraction/2;
   fontC2 = (fontC1 - fontCfraction);
   fontC3 = (fontC2 - fontCfraction);
   fontC4 = (fontC3 - halfFontFrac);
   fontC5 = (fontC3 - fontCfraction);
  $(".c1").css({"font-size": fontC1 + "px"});
  $(".c2").css({"font-size": fontC2 + "px"});
  $(".c3").css({"font-size": fontC3 + "px"});
  $(".c4").css({"font-size": fontC4 + "px"});
  $(".c5").css({"font-size": fontC5 + "px"});

  //$("p").css({"font-size": fontC4 + "px"});
  //$("span.floatRight").css({"font-size": fontC4 + "px"});

}








function initBuffer() {
  if (BV.getPlayer().buffered().end(0)>80){
      BV.getPlayer().play();
      BV.getPlayer().playbackRate("14");
    } else {
      setTimeout(initBuffer, 500);
    }
  }



$(function() {
    $( ".draggable" ).draggable();
  });























//jQuery plugins
(function ( $ ) {

$.fn.hideAndShow = function( options ) {

    var settings = $.extend({
        // These are the defaults.
        duration: 0
    }, options );

    if (!$(this).hasClass("show")){
     $(this).switchClass( "hidden", "show", settings.duration).contents().switchClass( "hidden", "show", settings.duration);
  } else if (!$(this).hasClass("hidden")){
     $(this).switchClass( "show", "hidden", settings.duration).contents().switchClass( "show", "hidden", settings.duration);
  }

  return this;
};
 
}( jQuery ));


