var video = document.getElementById("background-video");
var btn = document.getElementById("btnVideo");
        
        function playAndPause () {
          if (video.paused) {
            video.play();
            btn.innerHTML = "Pause II";
          } else {
            video.pause();
            btn.innerHTML = "Play ▶";
          }
        }