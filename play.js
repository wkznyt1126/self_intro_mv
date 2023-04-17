if (window.location.href.indexOf("twitter.com") !== -1) {
  var videoUrl = "https://youtu.be/zhwLxNjK97A";
  var videoPlayer = document.createElement("iframe");
  videoPlayer.setAttribute("width", "560");
  videoPlayer.setAttribute("height", "315");
  videoPlayer.setAttribute("src", videoUrl);
  document.body.appendChild(videoPlayer);
}