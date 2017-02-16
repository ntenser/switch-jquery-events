$(function () {
  $(".on, .off").bind('click', function() {
      $(this).toggleClass('on off');
  });

  $(".light, .dark").bind('click', function() {
      $(this).toggleClass('light dark');

  });


$('button').on('click', function() {
  if ($('button').attr('class') === 'on') {
  $('.status').html("It's so bright in here!") }

  else {
    $('.status').html("Who turned off the lights!") }

  });
});
