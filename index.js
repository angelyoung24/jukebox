const project = new Audio();
i = 0;

let song = ["audio/Don_t_Look.mp3", "audio/Don_t_Turn_Back.mp3", "audio/Sweet_and_Low.mp3", "audio/The_Bluest_Star.mp3", "audio/The_Coldest_Shoulder.mp3"]

const songTitle = document.getElementById("songtitle");
const playButton = document.getElementById("play").addEventListener("click", playAudio);
const pauseButton = document.getElementById("pause").addEventListener("click", pauseAudio);
const stop = document.getElementById("stop").addEventListener("click", stopAudio);
const next = document.getElementById("next").addEventListener("click", nextSong);


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
