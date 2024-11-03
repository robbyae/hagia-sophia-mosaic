$('#mp-oy').click(function(){
  $('#title').html('ΜΡ ΘΥ')
  $('#writing').html(
    'An abbreviation of the Greek "Μήτηρ τοῦ Θεοῦ", meaning "Mother of God". (<a href="https://en.wikipedia.org/wiki/Theotokos" target="_blank">Wikipedia</a>)');
});
$('#hagia-sophia').click(function(){
  $('#title').html('Hagia Sophia');
  $('#writing').html(
    'A model of the Hagia Sophia being presented to the Virgin Mary.' + '<br>' + '<img src="./assets/img/hagia-sophia.jpg" class="side-img" style="margin-top:5px;"></img>' + '<br>' + 
    'The Hagia Sophia is a mosque and former church serving as a major cultural and historical site in Istanbul, Turkey. The last of three church buildings to be successively erected on the site by the Eastern Roman Empire, it was completed in AD 537. (<a href="https://en.wikipedia.org/wiki/Hagia_Sophia" target="_blank">Wikipedia</a>)');
});
$('#theotokos').click(function(){
  $('#title').html('Theotokos')
  $('#writing').html(
    'The Virgin Mother Mary holding the Child Christ. The Greek title <i>Theotokos</i>, meaning God-Bearer, is used to describe her. Mary was a first-century Jewish woman of Nazareth, the wife of Joseph and the mother of Jesus. She is an important figure of Christianity, venerated under various titles such as virgin or queen. The Eastern and Oriental Orthodox, Catholic, Anglican, and Lutheran churches believe that Mary, as mother of Jesus, is the Mother of God. Mary has been venerated since early Christianity, and is often considered to be the holiest and greatest saint. (<a href="https://en.wikipedia.org/wiki/Mary,_mother_of_Jesus" target="_blank">Wikipedia</a>)');
});
$('#jesus').click(function(){
  $('#title').html("The Child Christ")
  $('#writing').html(
  'The Christ Child, also known as Divine Infant, Baby Jesus, Infant Jesus, the Divine Child, Child Jesus, and the Holy Child, refers to Jesus Christ from his nativity until age 12. (<a href="https://en.wikipedia.org/wiki/Christ_Child" target="_blank">Wikipedia</a>) <br><br> He is the central figure of Christianity, the world\'s largest religion. Most Christians believe Jesus to be the incarnation of God the Son and the awaited messiah, or Christ, a descendant from the Davidic line that is prophesied in the Old Testament. (<a href="https://en.wikipedia.org/wiki/Jesus" target="_blank">Wikipedia</a>)')
});
$('#justinian-i').click(function(){
  $('#title').html("Justinian I")
  $('#writing').html(
  'Justinian I, also known as Justinian the Great, was the Roman emperor from 527 to 565. Justinian is regarded as one of the most prominent and influential Roman emperors, and historians have often characterized him as a workaholic who worked tirelessly to expand the Byzantine empire. His reign marked a blossoming of Byzantine culture, and his building program yielded works such as the Hagia Sophia. (<a href="https://en.wikipedia.org/wiki/Justinian_I" target="_blank">Wikipedia</a>)'  )
});
$('#constantine').click(function(){
  $('#title').html("Constantine I")
  $('#writing').html(
 'Constantine I, also known as Constantine the Great, was a Roman emperor from AD 306 to 337 and the first Roman emperor to convert to Christianity. He played a pivotal role in elevating the status of Christianity in Rome, decriminalizing Christian practice and ceasing Christian persecution in a period referred to as the Constantinian shift. This initiated the Christianization of the Roman Empire. Constantine is associated with the religiopolitical ideology known as Caesaropapism, which epitomizes the unity of church and state. He founded the city of Constantinople and made it the capital of the Empire, which remained so for over a millennium. (<a href="https://en.wikipedia.org/wiki/Constantine_the_Great" target="_blank">Wikipedia</a>)')
});
$('#constantinople').click(function(){
  $('#title').html("Constantinople")
  $('#writing').html(
  'Constantinople became the capital of the Roman Empire during the reign of Constantine the Great in 330. In 324, After the Western and Eastern Roman Empires were reunited, the ancient city of Byzantium was selected to serve as the new capital of the Roman Empire, and the city was renamed Nova Roma, or "New Rome", by Emperor Constantine the Great. On 11 May 330, it was renamed Constantinople and dedicated to Constantine. Constantinople is generally considered to be the center and the "cradle of Orthodox Christian civilization". From the mid-5th century to the early 13th century, Constantinople was the largest and wealthiest city in Europe. (<a href="https://en.wikipedia.org/wiki/Constantinople" target="_blank">Wikipedia</a>)'  )
});
$('#left-text').click(function(){
  $('#title').html("Greek Text on the Left")
  $('#writing').html(
  'I don\'t speak Greek, and I could not find a reliable transcription or translation. Please remember — this is a tech demo, and I am not an art historian.')
});
$('#right-text').click(function(){
  $('#title').html("Greek Text on the Right")
  $('#writing').html(
  'I don\'t speak Greek, and I could not find a reliable transcription or translation. Please remember — this is a tech demo, and I am not an art historian.')
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

