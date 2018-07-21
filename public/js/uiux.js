// SideNav Button Initialization
$(".button-collapse").sideNav();
// SideNav Scrollbar Initialization
var sideNavScrollbar = document.querySelector(".custom-scrollbar");
Ps.initialize(sideNavScrollbar);

$("#progressShow").click(function() {
  $("#progressPopOut")
    .toggleClass("collapse")
    .addClass("slideInRight");
});

$("#themeWhite").click(function() {
  $("body")
    .addClass("white-skin")
    .removeClass("black-skin")
    .removeClass("cyan-skin")
    .removeClass("mdb-skin")
    .removeClass("deep-purple-skin")
    .removeClass("navy-blue-skin")
    .removeClass("pink-skin")
    .removeClass("indigo-skin")
    .removeClass("light-blue-skin")
    .removeClass("grey-skin");
});
$("#themeBlack").click(function() {
  $("body")
    .addClass("black-skin")
    .removeClass("white-skin")
    .removeClass("cyan-skin")
    .removeClass("mdb-skin")
    .removeClass("deep-purple-skin")
    .removeClass("navy-blue-skin")
    .removeClass("pink-skin")
    .removeClass("indigo-skin")
    .removeClass("light-blue-skin")
    .removeClass("grey-skin");
});
$("#themeCyan").click(function() {
  $("body")
    .addClass("cyan-skin")
    .removeClass("white-skin")
    .removeClass("black-skin")
    .removeClass("mdb-skin")
    .removeClass("deep-purple-skin")
    .removeClass("navy-blue-skin")
    .removeClass("pink-skin")
    .removeClass("indigo-skin")
    .removeClass("light-blue-skin")
    .removeClass("grey-skin");
});
$("#themeMDB").click(function() {
  $("body")
    .addClass("mdb-skin")
    .removeClass("white-skin")
    .removeClass("black-skin")
    .removeClass("cyan-skin")
    .removeClass("deep-purple-skin")
    .removeClass("navy-blue-skin")
    .removeClass("pink-skin")
    .removeClass("indigo-skin")
    .removeClass("light-blue-skin")
    .removeClass("grey-skin");
});
$("#themeDeepPurple").click(function() {
  $("body")
    .addClass("deep-purple-skin")
    .removeClass("white-skin")
    .removeClass("black-skin")
    .removeClass("cyan-skin")
    .removeClass("mdb-skin")
    .removeClass("navy-blue-skin")
    .removeClass("pink-skin")
    .removeClass("indigo-skin")
    .removeClass("light-blue-skin")
    .removeClass("grey-skin");
});
$("#themeNavyBlue").click(function() {
  $("body")
    .addClass("navy-blue-skin")
    .removeClass("white-skin")
    .removeClass("black-skin")
    .removeClass("cyan-skin")
    .removeClass("mdb-skin")
    .removeClass("deep-purple-skin")
    .removeClass("pink-skin")
    .removeClass("indigo-skin")
    .removeClass("light-blue-skin")
    .removeClass("grey-skin");
});
$("#themePink").click(function() {
  $("body")
    .addClass("pink-skin")
    .removeClass("white-skin")
    .removeClass("black-skin")
    .removeClass("cyan-skin")
    .removeClass("mdb-skin")
    .removeClass("deep-purple-skin")
    .removeClass("navy-blue-skin")
    .removeClass("indigo-skin")
    .removeClass("light-blue-skin")
    .removeClass("grey-skin");
});
$("#themeIndigo").click(function() {
  $("body")
    .addClass("indigo-skin")
    .removeClass("white-skin")
    .removeClass("black-skin")
    .removeClass("cyan-skin")
    .removeClass("mdb-skin")
    .removeClass("deep-purple-skin")
    .removeClass("navy-blue-skin")
    .removeClass("pink-skin")
    .removeClass("light-blue-skin")
    .removeClass("grey-skin");
});
$("#themeLightBlue").click(function() {
  $("body")
    .addClass("light-blue-skin")
    .removeClass("white-skin")
    .removeClass("black-skin")
    .removeClass("cyan-skin")
    .removeClass("mdb-skin")
    .removeClass("deep-purple-skin")
    .removeClass("navy-blue-skin")
    .removeClass("pink-skin")
    .removeClass("indigo-skin")
    .removeClass("grey-skin");
});
$("#themeGrey").click(function() {
  $("body")
    .addClass("grey-skin")
    .removeClass("white-skin")
    .removeClass("black-skin")
    .removeClass("cyan-skin")
    .removeClass("mdb-skin")
    .removeClass("deep-purple-skin")
    .removeClass("navy-blue-skin")
    .removeClass("pink-skin")
    .removeClass("indigo-skin")
    .removeClass("light-blue-skin");
});

/* White
Black
Cyan
MDB
Deep Purple
Navy Blue
Pink
Indigo
Light Blue
Grey
 */

$(document).ready(function() {
  $(".countdown.multisize").circularCountdown({
    startDate:"2018/07/20 21:00:00",
    endDate:"2018/07/20 23:00:00",
    timeZone:-5,	//Time zone of New York. Find timezone of your location and write here.
    
      showDay:false,
      showHour:false,
      showMinute:true,
      showSecond:true,
    //Margin between circles
    margin:7,
    
    //Diameters
    dayDiameter:72,
    hourDiameter:72,
    minuteDiameter:72,
    secondDiameter:52,
    
    //Circle BG width
    dayBgWidth:5,
    hourBgWidth:5,
    minuteBgWidth:-200,
    secondBgWidth:2,
    
    //Circle width
    dayCircleWidth:5,
    hourCircleWidth:5,
    minuteCircleWidth:2,
    secondCircleWidth:2,
    
    //Circle color
    dayCircleColor:"#91304e",
    hourCircleColor:"#91304e",
    minuteCircleColor:"#ffffff",
    secondCircleColor:"#ffffff",
    
    //Counter font size
    dayCounterFontSize:24,
    hourCounterFontSize:24,
    minuteCounterFontSize:24,
    secondCounterFontSize:16,
    
    //Counter font color
    dayCounterFontColor:"#91304e",
    hourCounterFontColor:"#91304e",
    minuteCounterFontColor:"#ffffff",
    secondCounterFontColor:"#ffffff",
    
    //Texts
    dayText:"days",
    hourText:"hours",
    minuteText:"minutes",
    secondText:"seconds",
    
    //Texts top margin
    dayTextMarginTop:1,
    hourTextMarginTop:1,
    minuteTextMarginTop:1,
    secondTextMarginTop:2
  });
});
