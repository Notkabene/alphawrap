$(function(){

  $('#fullpage').fullpage({
    licenseKey: 'C4198C2E-BF8F4FE3-B535FFC1-A0D1CBFC',
    sectionsColor: ['#000'],
    responsiveWidth: 1024,
    responsiveHeight: 865,
  });

  $('.logo').click(function(){
    $('.logos__item').toggleClass('click-animated');
  });

});
