$(document).ready(function () {
  smoothScroll.init();
  var wow = new WOW(
    {
      boxClass: 'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset: 0,          // distance to the element when triggering the animation (default is 0)
      mobile: true,       // trigger animations on mobile devices (default is true)
      live: true,       // act on asynchronously loaded content (default is true)
      callback: function (box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();

  $('.content-group3').slimScroll({
    height: '150px'
  });

  $('.content-group3-mobile').slimScroll({
    height: '250px'
  });

  $('.dialog-mobile-scoll').slimScroll({
    height: '450px'
  });

  $('.event-mobile').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  var dialogLogin = $('#loginWithFacebook');
  $('.open').click(function (e) {
    dialogRules.removeClass('dialog-open');
    dialogRules.addClass('dialog-close');
    dialogLogin.removeClass('dialog-close');
    dialogLogin.addClass('dialog-open');
  });
  $('.close-dialog-login, .dialog-overlay').click(function (e) {
    dialogLogin.removeClass('dialog-open');
    dialogLogin.addClass('dialog-close');
  });

  var dialogGallery = $('#dialogGallery');
  $('.btn-login-with-facebook, .view-gallery').click(function (e) {
    dialogGallery.removeClass('dialog-close');
    dialogGallery.addClass('dialog-open');
  });
  $('.close-dialog-gallery').click(function (e) {
    dialogGallery.removeClass('dialog-open');
    dialogGallery.addClass('dialog-close');
  });

  var dialogGalleryMobile = $('#dialogGalleryMobile');
  $('.view-gallery-mobile').click(function (e) {
    dialogGalleryMobile.removeClass('dialog-close');
    dialogGalleryMobile.addClass('dialog-open');
  });
  $('.close-dialog-gallery-mobile').click(function (e) {
    dialogGalleryMobile.removeClass('dialog-open');
    dialogGalleryMobile.addClass('dialog-close');
  });

  var dialogRules = $('#dialogRules');
  $('.show-the-rule').click(function (e) {
    dialogRules.removeClass('dialog-close');
    dialogRules.addClass('dialog-open');
  });
  $('.close-dialog-rules, .dialog-overlay').click(function (e) {
    dialogRules.removeClass('dialog-open');
    dialogRules.addClass('dialog-close');
  });

  var dialogRulesMobile = $('#dialogRules-mobile');
  $('.show-the-rule-mobile').click(function (e) {
    dialogRulesMobile.removeClass('dialog-close');
    dialogRulesMobile.addClass('dialog-open');
  });
  $('.close-dialog-rules-mobile, .dialog-overlay').click(function (e) {
    dialogRulesMobile.removeClass('dialog-open');
    dialogRulesMobile.addClass('dialog-close');
  });

  var showQuestion = $('.block-image');
  var goBack = $('.btn-back');
  var answerByUser = false;
  var result = '';

  showQuestion.click(function (e) {
    e.preventDefault();
    if(!answerByUser){
      $(this).find('.isOpen').parents('.frame3').find('#question-list').hide();
      $(this).parents('.frame3').find('#question').show();
    }else{
      if(result === 'reward'){
        $(this).find('.isOpen').parents('.frame3').find('#question-list').hide();
        $(this).parents('.frame3').find('#reward').show();
      }else{
        $(this).find('.isOpen').parents('.frame3').find('#question-list').hide();
        $(this).parents('.frame3').find('#lost').show();
      }
    }
  });

  showQuestion.click(function (e) {
    e.preventDefault();
    $(this).find('.isOver').parents('body').find('#dialogGallery').removeClass('dialog-close').addClass('dialog-open');
  });

  goBack.click(function (e) {
    e.preventDefault();
    $(this).parents('.frame3').find('#sub-block').hide();
    $(this).parents('.frame3').find('#question-list').show();
  });

  $("form#question-data").submit(function (event) {
    event.preventDefault();
    answerByUser = true;
    if ($("input[name=optionsRadios]:checked").val() === "A") {
      result = 'reward';
      $(this).parents('.frame3').find('#question').hide();
      $(this).parents('.frame3').find('#reward').show();
    } else {
      result = 'lost';
      $(this).parents('.frame3').find('#question').hide();
      $(this).parents('.frame3').find('#lost').show();
    }
  });

  var showQuestionMobile = $('.event-block');
  var goBackMobile = $('.btn-back-mobile');
  var answerByUserMobile = false;
  var resultMobile = '';

  showQuestionMobile.click(function (e) {
    e.preventDefault();
    if(!answerByUserMobile){
      $(this).find('.isOpenMobile').parents('.block-3').find('.step-mobile-1').hide();
      $(this).parents('.block-3').find('.step-mobile-2').show();
    }else{
      if(resultMobile === 'reward'){
        $(this).find('.isOpenMobile').parents('.block-3').find('.step-mobile-1').hide();
        $(this).parents('.block-3').find('.step-mobile-success').show();
      }else{
        $(this).find('.isOpenMobile').parents('.block-3').find('.step-mobile-1').hide();
        $(this).parents('.block-3').find('.step-mobile-lost').show();
      }
    }
  });

  showQuestionMobile.click(function (e) {
    e.preventDefault();
    $(this).find('.isCloseMobile').parents('body').find('#dialogGalleryMobile').removeClass('dialog-close').addClass('dialog-open');
  });

  goBackMobile.click(function (e) {
    e.preventDefault();
    $(this).parents('.block-3').find('.step-mobile-2').hide();
    $(this).parents('.block-3').find('.step-mobile-1').show();
  });

  $("form#question-data-mobile").submit(function (event) {
    event.preventDefault();
    answerByUserMobile = true;
    if ($("input[name=optionsRadios-mobile]:checked").val() === "A") {
      resultMobile = 'reward';
      $(this).parents('.block-3').find('.step-mobile-2').hide();
      $(this).parents('.block-3').find('.step-mobile-success').show();
    } else {
      resultMobile = 'lost';
      $(this).parents('.block-3').find('.step-mobile-2').hide();
      $(this).parents('.block-3').find('.step-mobile-lost').show();
    }
  });
});