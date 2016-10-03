function Get(URL) {
  var httpreq = new XMLHttpRequest();
  httpreq.open("GET",URL,false);
  httpreq.setRequestHeader("Client-ID","");
  httpreq.setRequestHeader("Authorization","OAuth ");
  httpreq.send(null);
  return httpreq.responseText;
}
// /users/:user/follows/channels
function twitchLive() {
  var json_obj = JSON.parse(Get("https://api.twitch.tv/kraken/streams/followed"));
  var count = json_obj._total;
  for (var i = 0; i < count; i++) {
    var viewers = json_obj.streams[i].viewers;
    viewers = viewers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    $("#twitch ul").append('<li><a href="'+json_obj.streams[i].channel.url+'"><img class="stream-preview" src="'+json_obj.streams[i].preview.small+'"/> ' + json_obj.streams[i].channel.display_name + '</a> ('+ json_obj.streams[i].channel.game+ ') - <p style="display:inline-block; color:red">' +viewers+'</p> <img src="images/viewer.png" width=16px></li>');
  };
}
$(function(){

  // twitchLive();
});
$("#expand")
.mouseenter(function(){
  $("#expand").hide(0);
  twitchLive();
  $("#hidden").show(500);
});
$("#hidden").mouseleave(function(){
  $("#hidden").hide(0);
  $("#expand").show(500);
});
