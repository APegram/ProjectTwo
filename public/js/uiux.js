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
