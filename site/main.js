$(function() {
  // setup contact
  var part1 = 'contact';
  var part2 = 'jaewon';
  var part3 = 'piano';
  var contactspan = $('#contact a span');
  contactspan.text(part1 + part2 + part3 + '@' + 'gmail.com');
  var contactlink = $('#contact a');
  contactlink.attr('href', 'mailto:' + part1 + part2 + part3 + '@' + 'gmail.com');

  // Setup the player to autoplay the next track
  var a = audiojs.createAll({
    trackEnded: function() {
      var next = $('ul#playlist li.playing').next();
      if (!next.length) next = $('ul#playlist li').first();
      next.addClass('playing').siblings().removeClass('playing');
      audio.load($('a', next).attr('data-src'));
      audio.play();
    }
  });

  // Load in the first track
  var audio = a[0];
      first = $('ul#playlist a.track').attr('data-src');
  $('ul#playlist li').first().addClass('playing');
  audio.load(first);

  // Load in a track on click
  $('ul#playlist li').click(function(e) {
    e.preventDefault();
    $('ul#playlist li').removeClass('playing');
    $(this).addClass('playing');
    audio.load($('a', this).attr('data-src'));
    audio.play();
  });

  // Load in the first track of a piece on click
  $('ul#playlist div').click(function(e) {
    e.preventDefault();
    $(this).next().children().first().click();
  });
});