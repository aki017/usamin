window.addEventListener("load", init, false);
document.addEventListener( 'touchmove', function(e) { e.preventDefault(); }, false );
var eventname = ('ontouchstart' in window) ? "touchstart" : "click";
function init() {
  for (var i=1;i<=16;i++)
    createjs.Sound.registerSound("sounds/"+i+".mp3", "sound"+i);
  var td = document.querySelectorAll("td");
  for (var j=0,len=td.length; j<len; ++j) {
    !function (i) {
      td[i].addEventListener(eventname,function() {
        playsound(i+1);
      })
    }(j)
  }
}
function playsound(i) {
  createjs.Sound.stop();
  createjs.Sound.play("sound"+i);
}

