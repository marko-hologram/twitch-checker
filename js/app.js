$(document).ready(function() {

  var finalHTML = "";

  function displayData() {

    finalHTML += '<ul id="streamer-grid">';

    $.each(JSONdata, function(i, streamer) {

      if (streamer.stream) {

      finalHTML += '<li class="pure-u-1 pure-u-lg-1-3 one-streamer">';
      finalHTML += '<a target="_blank" href="';
      finalHTML += streamer.stream.url;
      finalHTML += '">';
      finalHTML += '<img class="hvr-grow" src="';
      finalHTML += streamer.stream.logo;
      finalHTML += '">';
      finalHTML += '<span class="streamer-account online">';
      finalHTML += streamer.stream.display_name;
      finalHTML += '</span>';
      finalHTML += '<span class="stream-name">';
      finalHTML += streamer.stream.status;
      finalHTML += '</span></a>';

      } else if (streamer.status === 404) {
        console.log(streamer.message);
        finalHTML += '<li class="pure-u-1 pure-u-lg-1-3 one-streamer">';
        finalHTML += '<img src="http://www.iconskid.com/images/540/twitch-pngicoicns-free-icon-download-icon100com-540157.png">';
        finalHTML += '<span>';
        finalHTML += 'Channel "not-existing-channel" does not exist';

      } else {
        finalHTML += '<li class="pure-u-1 pure-u-lg-1-3 one-streamer">';
        finalHTML += '<img src="http://www.iconskid.com/images/540/twitch-pngicoicns-free-icon-download-icon100com-540157.png">';
        finalHTML += '<span class="streamer-account offline">';
        finalHTML += streamer.display_name;
        finalHTML += '</span></a>';
      }

      });

    finalHTML += '</ul>';
    $('#streamer-list').html(finalHTML);
  }

  displayData();
});

