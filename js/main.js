$('#mp-oy').click(function(){
  $('#title').html('ΜΡ ΘΥ')
  $('#writing').html(
    'An abbreviation of the Greek "Μήτηρ τοῦ Θεοῦ", meaning "Mother of God".');
});
$('#hagia-sophia').click(function(){
  $('#title').html('Hagia Sophia');
  $('#writing').html(
    'A model of the Hagia Sophia being presented to the Virgin Mary.' + '<br><br>' + '<img src="./assets/img/hagia-sophia.jpg" class="side-img"></img>' + '<br><br>' + 
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
});
$('#theotokos').click(function(){
  $('#title').html('Theotokos')
  $('#writing').html(
    'The Virgin Mother Mary holding the Child Christ. The Greek title <i>Theotokos</i>, meaning God-Bearer, is used to describe her. Here she wears a maphorion.');
});
$('#jesus').click(function(){
  $('#title').html("The Child Christ")
  $('#writing').html(
'The Christ Child, also known as Divine Infant, Baby Jesus, Infant Jesus, the Divine Child, Child Jesus, the Holy Child, Divino Niño, and Santo Niño in Hispanic nations, refers to Jesus Christ from his nativity until age 12.<br> <a href="https://en.wikipedia.org/wiki/Christ_Child">Wikipedia</a>'  )
});
$('#justinian-i').click(function(){
  $('#title').html("Justinian I")
  $('#writing').html(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'  )
});
$('#constantine').click(function(){
  $('#title').html("Constantine I")
  $('#writing').html(
 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'  )
});
$('#constantinople').click(function(){
  $('#title').html("Constantinople")
  $('#writing').html(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'  )
});
$('#left-text').click(function(){
  $('#title').html("Greek Text on the Left")
  $('#writing').html(
 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'  )
});
$('#right-text').click(function(){
  $('#title').html("Greek Text on the Right")
  $('#writing').html(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'  )
});

// SIZE RIGHT TEXT BOX //
  // var screen_width = $(window).width();
  // var img_width = $("#main").width() + .06*$(window).height();
  // var txt_width = (screen_width-img_width) + 'px';
  // $("#txt-box").css("width", txt_width);

// ZOOM //
$('#zoom').click(function(){
  if($('#main-svg').css("display","block")) {
    $('#main-svg').css("display","none");
    $('#zoom-box').zoom({ on:'mouseover' });
  }
  else if($('#main-svg').css("display","none")){
    $('#main-svg').css("display","block");
  }});

