function playSound(id, audioFile) {
  var audioElement = document.createElement("audio");
  var media = "assets/medias/" + id + "/" + audioFile + ".mp3";
  audioElement.setAttribute("src", media);
  audioElement.play();
}
