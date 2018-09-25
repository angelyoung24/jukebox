var project = new Audio();
i = 0;

var song = ["audio/Don_t_Look.mp3", "audio/Don_t_Turn_Back.mp3", "audio/Sweet_and_Low.mp3", "audio/The_Bluest_Star.mp3", "audio/The_Coldest_Shoulder.mp3"]

var songTitle = document.getElementById("songtitle");
var playButton = document.getElementById("play").addEventListener("click", playAudio);
var pauseButton = document.getElementById("pause").addEventListener("click", pauseAudio);
var stop = document.getElementById("stop").addEventListener("click", stopAudio);
var next = document.getElementById("next").addEventListener("click", nextSong);


function playAudio(){
	songTitle.textContent = song[i];
	project.play();
}

function pauseAudio(){
	project.pause();
}

function stopAudio(){
	project.src = song[i]
	project.pause();
}


function nextSong(){
	i = ++i < song.length ? i : 0;
	project.src = song[i];
	songTitle.textContent = song[i];
	project.play();	
} true;


project.src = song[i]
