/* TWITCH API*/
/* TWITCH API*/
/* TWITCH API*/

//Create a Twitch.Embed object that 
//will render within the "twitch-embed" root element.

const embed = document.getElementById('twitch-embed')

new Twitch.Embed("twitch-embed", {
  width: 854,
  height: 480,
  channel: "lecheflana",
  allowfullscreen: true,
  autoplay: true,
  collection: '843109682',
  layout: 'video-with-chat',
});

embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
  var player = embed.getPlayer();
  player.play();
});
