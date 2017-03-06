$(document).ready(function() {

  var finalHTML = "";

  function displayData() {

    finalHTML += '<ul id="streamer-grid">';

    $.each(JSONdata, function(i, streamer) {

      if (JSONdata[i].stream) {

      finalHTML += '<li class="pure-u-1 pure-u-lg-1-3 one-streamer">';
      finalHTML += '<img src="';
      finalHTML += JSONdata[i].stream.logo;
      finalHTML += '">';
      finalHTML += '<span>';
      finalHTML += JSONdata[i].stream.display_name;
      finalHTML += '</span>';
      finalHTML += '<span class="stream-status">';
      finalHTML += JSONdata[i].stream.status;
      finalHTML += '</span>';

      } else if (!JSONdata[i].stream) {
        console.log("JSONdata[" + i + "].stream is null or undefined");
        }
      });

    finalHTML += '</ul>';
    $('#streamer-list').html(finalHTML);
  }

  displayData();
});

