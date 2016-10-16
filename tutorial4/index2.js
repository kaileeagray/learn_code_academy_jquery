$(function() {

  // $('li').on('click', function() {
  //     $(this).next().remove();
  //     $(this).siblings().addClass('special');
  // });
  //
  // $('li').on('mouseover', function() {
  //     $(this).removeClass('special');
  // });
  //
  // $('li').on('click', function() {
  //     $(this).closest('.list').addClass('special');
  // });

  // $('.list').on('click', function() {
  //   $(this).find('li').toggleClass('special');
  // });
  //
  // $('.list').on('click', function() {
  //   $(this).find('li').filter(':first').addClass('special');
  // });

  // $('.list').on('click', function() {
  //   $(this).find('li').filter('.special').remove();
  // });
  //
  // $('.special').on('click', function() {
  //     $(this).hide();
  //     if ($(this).is('.special')) {
  //     alert('special');
  //   }
  // });

  // $('li').on('click', function() {
  //     $(this).hide();
  //     if (!$(this).is('.special')) {
  //     alert('not special');
  //   }
  // });

  // $('li').on('click', function() {
  //   $(this).hide();
  // });

  $('.sublist li').on('click', function() {
    if ($(this).parent().is('.sublist')) {
      $(this).hide();
    }
  });


});
