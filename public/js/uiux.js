var currentUser;

$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    // console.log(data)
    currentUser = data;
  }).then(function () {
    $("body").addClass(currentUser.theme)
    $("#nameSettings").html("<strong>"+currentUser.name+"</strong>");
    $("#emailSettings").html("<strong>"+currentUser.email+"</strong>")
    if (currentUser.picture === null){
      $("#imgSettings").attr("src", "https://mdbootstrap.com/img/Photos/Others/photo6.jpg")
    } else {
      $("#imgSettings").attr("src", currentUser.picture);
    }
    
    // console.log(currentUser.theme);
  });
});

function updateTheme(theme) {
  // console.log(theme);
  // console.log(currentUser);
  $.ajax({
    method: "PUT",
    url: "/api/themes",
    data: theme
  });
}

// SideNav Button Initialization
$(".button-collapse").sideNav();
// SideNav Scrollbar Initialization
var sideNavScrollbar = document.querySelector(".custom-scrollbar");
Ps.initialize(sideNavScrollbar);

$("#progressShow").click(function () {
  $("#progressPopOut")
    .toggleClass("collapse")
    .addClass("slideInRight");
});
$("#in-class-toggle").click(function () {
  $("#in-class")
    .toggleClass("collapse")
    .addClass("slideInRight");
});
$("#in-structors-toggle").click(function () {
  $("#in-structors")
    .toggleClass("collapse")
    .addClass("slideInRight");
});

$("#themeWhite").click(function () {
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
  updateTheme("white-skin");
});
$("#themeBlack").click(function () {
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
    updateTheme("black-skin");
});
$("#themeCyan").click(function () {
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
    updateTheme("cyan-skin");
});
$("#themeMDB").click(function () {
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
    updateTheme("mdb-skin");
});
$("#themeDeepPurple").click(function () {
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
    updateTheme("deep-purple-skin");
});
$("#themeNavyBlue").click(function () {
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
    updateTheme("navy-blue-skin");
});
$("#themePink").click(function () {
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
    updateTheme("pink-skin");
});
$("#themeIndigo").click(function () {
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
    updateTheme("indigo-skin");
});
$("#themeLightBlue").click(function () {
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
    updateTheme("light-blue-skin");
});
$("#themeGrey").click(function () {
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
    updateTheme("grey-skin");
});

function updateTheme(theme) {
  var userSettings = {
    theme: theme,
    email: currentUser.email,
  }
  $.ajax({
    method: "PUT",
    url: "/api/themes",
    data: userSettings
  })
}

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

$(document).ready(function () {

  $('.mdb-select').material_select();

  // FIXME: Emoji Picker Initialization
  /*
  $(function() {
    // Initializes and creates emoji set from sprite sheet
    window.emojiPicker = new EmojiPicker({
      emojiable_selector: '[data-emojiable=true]',
      assetsPath: '../img/emojis/img',
      popupButtonClasses: 'fal fa-grin-beam'
    });
    // Finds all elements with `emojiable_selector` and converts them to rich emoji input fields
    // You may want to delay this step if you have dynamically created input fields that appear later in the loading process
    // It can be called as many times as necessary; previously converted input fields will not be converted again
    window.emojiPicker.discover();
  });
  */

  $(".countdown.multisize").circularCountdown({
    startDate: "2018/07/21 10:00:00",
    endDate: "2018/07/21 17:30:00",
    timeZone: -5, //Time zone of New York. Find timezone of your location and write here.

    showDay: false,
    showHour: false,
    showMinute: true,
    showSecond: true,
    //Margin between circles
    margin: 7,

    //Diameters
    dayDiameter: 72,
    hourDiameter: 42,
    minuteDiameter: 72,
    secondDiameter: 52,

    //Circle BG width
    dayBgWidth: 5,
    hourBgWidth: -200,
    minuteBgWidth: -200,
    secondBgWidth: 2,

    //Circle width
    dayCircleWidth: 5,
    hourCircleWidth: 2,
    minuteCircleWidth: 2,
    secondCircleWidth: 2,

    //Circle color
    dayCircleColor: "#91304e",
    hourCircleColor: "#ffffff",
    minuteCircleColor: "#ffffff",
    secondCircleColor: "#ffffff",

    //Counter font size
    dayCounterFontSize: 24,
    hourCounterFontSize: 16,
    minuteCounterFontSize: 24,
    secondCounterFontSize: 16,

    //Counter font color
    dayCounterFontColor: "#91304e",
    hourCounterFontColor: "#ffffff",
    minuteCounterFontColor: "#ffffff",
    secondCounterFontColor: "#ffffff",

    //Texts
    dayText: "days",
    hourText: "hours",
    minuteText: "minutes",
    secondText: "seconds",

    //Texts top margin
    dayTextMarginTop: 1,
    hourTextMarginTop: 1,
    minuteTextMarginTop: 1,
    secondTextMarginTop: 2
  });
});