$(document).ready(function() {
  $('#panel1').hide(300).delay(100).show(1000).slideUp(1000).fadeToggle(1000);

  $('#panel2').css({
    color: 'red',
    fontWeight: 'bold',
  });

  $('#panel3').css({
    opacity:'0.5'
  });

});

// same as $(function() {});
