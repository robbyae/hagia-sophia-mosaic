$('#mp-oy').click(function(){
  $('#title').html('ΜΡ ΘΥ')
  $('#writing').html(
    'An abbreviation of the Greek "Μήτηρ τοῦ Θεοῦ", meaning "Mother of God".');
});
$('#hagia-sophia').click(function(){
  $('#title').html('Hagia Sophia')
  $('#writing').html(
    'A model of the Hagia Sophia being presented to the Virgin Mary.' + '<br><br>' +
  '<img class="side-img" src="/assets/img/hagia-sophia.jpg"></img>');
});

// $(function(){
//   $("#zoom").anythingZoomer();
//   });