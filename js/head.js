
var isWebkit = /Webkit/i.test(navigator.userAgent),
    isChrome = /Chrome/i.test(navigator.userAgent),
    isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    isAndroid = /Android/i.test(navigator.userAgent),
    isTouch = Modernizr.touch;

///////GLOBALS
//click handler for all nav button events (2222ms)
CLICKhandled = false;
CURRENTtime = 0;
IMGnumber = 10;


resizeDiv();
resizeText();

window.onresize = function(event) {
resizeDiv();
resizeText();
};

//jqueryUI's draggable init
$(function() {
    $( ".draggable" ).draggable();
  });


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
      var mcWidth = vpw * .777;
      var gifWidth = mcWidth / 3;
      $( "body" )
        .css({"width": vpw + "px"})
        .css({"height": vph + "px"});
      $(".glyphicon").css({"height": vphNine + "px"}).css({"width": vpwNine + "px"}).css({"font-size": vphNineFont});
     $(" .item ")
      .css({"width": gifWidth })
     resizeText();

}

function resizeText()
{//this function resizes the different headers in relationship to the window area 
  var fontC = ( area * .0001 );
   fontC1 = 32;
  if(fontC>80){fontC1 = 80}else if(fontC<32){fontC1 = 32}else{fontC1= fontC}
  var fontCfraction = fontC1/4;
  var halfFontFrac = fontCfraction/2;
   fontC2 = (fontC1 - fontCfraction);
   fontC3 = (fontC2 - fontCfraction);
   fontC4 = (fontC3 - halfFontFrac);
   fontC5 = (fontC3 - fontCfraction);
  $(".c1").css({"font-size": fontC1 + "px"});
  $(".c2").css({"font-size": fontC2 + "px"});
  $(".c3").css({"font-size": fontC3 + "px"});
  $(".c4").css({"font-size": fontC4 + "px"});
  $(".c5").css({"font-size": fontC5 + "px"});

}


/*

<script src="/js/modernizr.js" type="text/javascript"></script>

<script src="/js/fastclick.js"></script>
<script src="/js/pep.js"></script>


*/





function initBuffer() {
  if (BV.getPlayer().buffered().end(0)>20){

      //load photo background async
      aload();
      //hide gif
      $($loading).velocity("transition.flipBounceXOut", {duration: 2222});
      setTimeout(function(){
          $($loading).hideAndShow();
       }, 2222);
      //play video, real fast
      BV.getPlayer().play();
      BV.getPlayer().playbackRate("1");

    } else {
      setTimeout(initBuffer, 250);
    }
  }




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
 



$.fn.hasAnyClass = function() {
    for (var i = 0; i < arguments.length; i++) {
        var classes = arguments[i].split(" ");
        for (var j = 0; j < classes.length; j++) {
            if (this.hasClass(classes[j])) {
                return true;
            }
        }
    }
    return false;
}

}( jQuery ));