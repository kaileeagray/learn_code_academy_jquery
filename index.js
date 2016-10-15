$(function() {
  $('#btn1').html('my button');

  $('#panel1').on('mouseover', function() {
    $('#panel1').fadeToggle(200);
  });

  $('#btn1').on('click', function() {
    $('#panel1 .panel-body').html('my new panel content');
  });

  var content = "My New Awesome Content";

  $('.panel-button').on('click', function() {
    var panelId = $(this).attr('data-panelid');
    $('#' + panelId).fadeToggle(200);
    $('#' + panelId + ' .panel-body').html('');
  });

});
