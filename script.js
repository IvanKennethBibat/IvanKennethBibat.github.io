function showMessage() {
    document.body.innerHTML = '<h1>:) I love you.</h1>';
}
function NoButton() {
    sadAudio.play();
    sadAudio.currentTime = 0;
    sadAudio.play();


    let heart = document.getElementById("hearts");
    let heart2 = document.getElementById("hearts2");
    heart.src = "images/angry-cat.gif";
    heart2.src = "images/angry-cat.gif";

    let button = document.getElementById("no");
    // let x = Math.random() * (window.innerWidth - 100);
    // let y = Math.random() * (window.innerHeight - 100);

    // button.style.left = `${x}px`;
    // button.style.top = `${y}px`;

    const messages = ["Nuh uh", "Think again pls", "Wrong", "Click yes smh", "skibidia plz...", "you're getting cement mix porridge later wtf","No", "I'm gonna offer you monster during dinner smh","Why hover no :(", "Say yes or your wifi will only be 10mbps for the rest of your life", "click yes and you'll immediately find your airpods again", "I'll take away your boobie privileges smh", "bruh", "no more bicep pics...", "IM BEGGING PLEASE SAY YES"]

    // button.innerText = messages[Math.floor(Math.random() * messages.length)];
    button.innerText = messages[noIndex];
    noIndex++;

    if(noIndex == messages.length){
      noIndex = 0;
    }
}

function switchElement() {
    let spotifyPlaylist = document.getElementById("spotify-playlist");
    let cantWait = document.getElementById("cant-wait");
    // let dateElement = document.getElementById("date-element");
    let photoCarousel = document.getElementById("carousel");

    const elements = [spotifyPlaylist, cantWait, photoCarousel]

    elements[currentIndex].style.display = "none";
    elements[currentIndex].style.display = "none";

    currentIndex++;
    if(currentIndex == elements.length){
      currentIndex = 0;
      elements[currentIndex].style.display = "block";
    }     

    elements[currentIndex].style.display = "block";
    console.log(currentIndex);
    console.log(elements[currentIndex]);
    
}

function photoCarouselButton(){
  let carousel = document.getElementById("carousel");
}


window.onload = function dateCountdown(){
  const countDownDate = new Date("Feb 14, 2025 19:00:00").getTime();

  function updateTimer(){
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if(distance < 0){
      document.getElementById("date-timer").innerHTML = "Date Time!!";
      clearInterval(timer);
      return;
    }

    const days = 0;
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("date-timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  updateTimer();
  const timer = setInterval(updateTimer, 1000);
}

function yipeeCat(){
  happyAudio.currentTime = 0;
  happyAudio.play();
  
  let heart = document.getElementById("hearts");
  let heart2 = document.getElementById("hearts2");
  heart.src = "images/yipee.gif";
  heart2.src = "images/yipee.gif";
}

function setHearts(){
  let heart = document.getElementById("hearts");
  let heart2 = document.getElementById("hearts2");


  heart.src = "images/floating hearts.gif";
  heart2.src = "images/floating hearts.gif";
  sadAudio.pause();
  sadAudio.currentTime = 0;
  happyAudio.pause();
  happyAudio.currentTime = 0;
}

let happyAudio = new Audio('audio/happy-happy-happy-song.mp3');
let sadAudio = new Audio('audio/sad-meow-song.mp3');
let currentIndex = 0;
let noIndex = 0;