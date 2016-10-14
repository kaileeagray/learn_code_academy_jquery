$(document).ready(function() {
  $('#btn1').html('my button');

  $('#panel1').on('click', function() {
    $('#panel1').fadeToggle(200);
  });

  $('#btn2').on('click', function() {
    $('#panel2').fadeToggle(200);
  });

  $('#btn3').on('click', function() {
    $('#panel3').fadeToggle(200);
  });

  $('#btn4').on('click', function() {
    $('#panel4').fadeToggle(200);
  });

  $('#panel1').on('mouseover', function() {
    $('#panel1').fadeToggle(200);
  });

  $('#btn1').on('click', function() {
    $('#panel1 .panel-body').html('my new panel content');
  });

});

// same as $(function() {});
