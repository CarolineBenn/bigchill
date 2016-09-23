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
        showImages(res.data);
      }
  });

  function showImages(data){
    $(data).each(function(index, item){
      console.log(item);
    });
  }







})
