$(document).ready(function() {

  var finalHTML = "";

  function displayData() {
    $.each(JSONdata, function(i, streamer) {
      //console.log(JSONdata[i].stream);
      if ( JSONdata[i].stream != 'null' || JSONdata[i].stream !== 'undefined') {

      finalHTML += '<ul id="streamer-grid">';
      finalHTML += '<li class="pure-u-1 pure-u-lg-1-3 one-streamer">';
      finalHTML += '<img src="';
      finalHTML += JSONdata[i].stream.logo;
      finalHTML += '">';
      finalHTML += '<span>';
      finalHTML += JSONdata[i].stream.display_name;
      finalHTML += '</span>';
      finalHTML += '</ul>';

      } else {
        console.log("Data is null or undefined");
      }



      });


    $('#streamer-list').html(finalHTML);
  }

  displayData();
});

