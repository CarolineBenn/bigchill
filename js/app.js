$(function(){

  // Check it works:
  console.log("HELLO");

  // Make the ajax call:
  $.ajax({
    url: 'http://carolinebenn.co.uk/bigchill/bigchill.json',
    dataType: 'JSON',
    jsonCallback: 'callback',
    type: 'GET',
    success: function(res) {
      setInterval(function(){
        bigChill(res.data);
      }, 2000);
    }
  });

  var h1Tag  = $('#title');
  var imgTag = $('#main-image');


  function bigChill(data){
    // var randomNumber = data[Math.floor(Math.random() * 10)]
    var bigChillMoment = data[Math.floor(Math.random() * data.length)];
    
    var title = bigChillMoment.title;
    var image = bigChillMoment.image;

    h1Tag.html(title);
    imgTag.attr("src", image);      

  }

});
