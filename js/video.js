var video;
var vol;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
    video.play();
    vol = document.querySelector("#volume");
    vol.innerHTML = video.volume *100 + "%";
	console.log("Play Video");
    console.log(video);
} 


function pauseVid() { 
    video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
    var rate = video.playbackRate *=.8
    video.playbackRate = rate;
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
    var ratez = video.playbackRate *= 1.25
    video.playbackRate = ratez;
  	console.log("Speed is "+ video.playbackRate);
} 


function skipAhead() { 
    video.currentTime += 60;
 if(video.ended){
        video.currentTime = 0; 
    }
	console.log("Current location is "+ video.currentTime);
} 

function mute() { 
console.log("Unmuted");
console.log("Muted");

if(video.muted){
    console.log("Change to unmuted");
    video.muted = false;
    unmute = "#mute";
}
else{
    console.log("Change to mute");
    video.muted = true;
    
}

}


function changeVolume() {
	var slider = document.querySelector("#volumeSlider").value;
    video.volume = slider / 100;
    vol.innerHTML = video.volume *100 + "%";
    console.log(slider);
}

function gray() { 
    console.log("In grayscale");
    video.classList.add("grayscale");
}

function color() {
    console.log("In color");
    video.classList.remove("grayscale");
}
