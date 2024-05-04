  // // Function to adjust volume
  // function adjustVolume(volume) {
  //   var audio = document.getElementById("background-audio");
  //   audio.volume = volume;
  //   // Store the volume in local storage
  //   localStorage.setItem("backgroundAudioVolume", volume.toString());
  // }

  // // Retrieve the volume from local storage when the page loads
  // window.onload = function() {
  //   var storedVolume = localStorage.getItem("backgroundAudioVolume");
  //   var audio = document.getElementById("background-audio");
  //   if (storedVolume !== null) {
  //     audio.volume = parseFloat(storedVolume);
  //   }
  // };

  // // Ensure audio source URL is unique to prevent caching
  // var audioSource = document.getElementById("audio-source");
  // audioSource.src += "?" + new Date().getTime();

function audioPlayOnStart(){
  let audio = document.getElementById("background-audio");
  if(audio.muted == true) audio.muted = false;
    
}

function ccc(){
  var lol = document.getElementById("play-audio");
  lol.style.backgroundColor = "red";
}

        // Call the function after the DOM is loaded
        document.addEventListener("DOMContentLoaded", function() {
          ccc();
          audioPlayOnStart();
      });