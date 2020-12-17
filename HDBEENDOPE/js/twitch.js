/* TWITCH API*/
/* TWITCH API*/
/* TWITCH API*/

//Create a Twitch.Embed object that 
//will render within the "twitch-embed" root element.


new Twitch.Embed("twitch-embed", {
  width: 854,
  height: 480,
  channel: "lecheflana",
  allowfullscreen: true,
  autoplay: true,
  layout: 'video-with-chat',
  video: '826825321'

});

embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
  var player = embed.getPlayer();
  player.play();
});
