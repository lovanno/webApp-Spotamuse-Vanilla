// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o');

  $('form').submit(function(event) {
    event.preventDefault();
    
    let query = $('input').val();
    
    $.get('/search?' + $.param({query: query}), function(data) {
      $('#results').empty();
      $('input[type="text"]').val('');
      $('input').focus();
      
      // Get the first ID from the JSON object
      let id = data.artists.items[0].id
      $('#results').append($('<p>' + id + '</p>'));
    });
  });

});
