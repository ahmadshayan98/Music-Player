console.log("Welcome");

let songIndex = 0;
let audioElement = new Audio('media files/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs = [
    {songName: "Let me love you - Justin Bieber", filePath: "media files/songs/1.mp3", coverPath: "media files/cover1.jpg"},
    {songName: "Here - Alessia Cara (Lucian Remix)", filePath: "media files/songs/2.mp3", coverPath: "media files/cover2.jpg"},
    {songName: "Ash - Keep Me", filePath: "media files/songs/3.mp3", coverPath: "media files/cover3.jpg"},
    {songName: "Ash & Naila - Give a Little", filePath: "media files/songs/4.mp3", coverPath: "media files/cover4.jpg"},
    {songName: "Gangsta's Paradise - Lofi Fruits Music [TikTok Remix] [Extended]", filePath: "media files/songs/5.mp3", coverPath: "media files/cover5.jpg"},
    {songName: "Leave The Lights On - Meiko (Stoto Remix)", filePath: "media files/songs/6.mp3", coverPath: "media files/cover6.jpg"},
]

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})


audioElement.addEventListener('timeupdate', ()=>{

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})