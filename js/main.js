$('#mp-oy').click(function(){
  $('#title').html('ΜΡ ΘΥ')
  $('#writing').html(
    'An abbreviation of the Greek "Μήτηρ τοῦ Θεοῦ", meaning "Mother of God". KEEP GOING NEVER STOP WERE ALL GONNA MAKE IT.');
});
$('#hagia-sophia').click(function(){
  $('#title').html('Hagia Sophia')
  $('#writing').html(
    'A model of the Hagia Sophia being presented to the Virgin Mary.' + '<br><br>' +
  '<img class="side-img" src="/assets/img/hagia-sophia.jpg"></img>');
});
$('#theotokos').click(function(){
  $('#title').html('Theotokos')
  $('#writing').html(
    'The Virgin Mother Mary holding the Child Christ. The Greek title <i>Theotokos</i>, meaning God-Bearer, is used to describe her.');
});

// $(function(){
//   $("#zoom").anythingZoomer();
//   });

// SIZE RIGHT TEXT BOX //
$(document).ready(function(){
  var screen_width = $(window).width();
  var img_width = $("#main").width() + .06*$(window).height();
  var txt_width = (screen_width-img_width) + 'px';
  $("#txt-box").css("width", screen_width - img_width);
});

// ZOOM //

