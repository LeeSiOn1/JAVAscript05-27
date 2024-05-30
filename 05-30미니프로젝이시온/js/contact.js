jQuery(document).ready(function () {
  $('.nav>li').mouseover(function () {
    $(this).children('.submenu').slideDown(500);
  });

  $('.nav>li').mouseleave(function () {
    $(this).children('.submenu').slideUp(500);
  });

  $('#imgsbar a').click(function () {
    var imgLeft = $(this).attr('img-Left');
    $('#imgs').animate({ left: imgLeft }, 'fast');
  });

  $('.banner_info img').click(function () {
    $('.modal').show();
  });

  $('.modal .content button').click(function () {
    $('.modal').hide();
  });
});

var win;
function winOpen() {
  win = window.open(
    'newsite.html',
    'child',
    'toolbar = no, location = no, status = no, menubar = no, resizable = no, scrollbars = no, width = 500, height = 300'
  );
}
