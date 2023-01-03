var points = 0
const pc = document.getElementById('pointcounter')
pc.innerHTML = points
var snd = new Audio("sfx\\hit.wav");
var snd2 = new Audio("sfx\\flamey-hit.wav");

//Gerbert
function HoverOver() {
  const Gerbert = document.getElementById('gerbert')
  Gerbert.src = 'sprites\\hover-over.png'
}

function Normal() {
  const Gerbert = document.getElementById('gerbert')
  Gerbert.src = 'sprites\\idle.png'
}

function Click() {
  const Gerbert = document.getElementById('gerbert')
  Gerbert.src = 'sprites\\hit.png'
  points++
  pc.innerHTML = points
  snd.play();
  snd.currentTime=0;
  const myTimeout = setTimeout(Normal, 500);
}

//Flamey's Code

function FlameyHover() {
  const Flamey = document.getElementById('flamey')
  Flamey.src = 'sprites\\flamey\\hover-over.png'
}

function FlameyNormal() {
  const Flamey = document.getElementById('flamey')
  Flamey.src = 'sprites\\flamey\\idle.png'
}

function FlameyClick() {
  const Flamey = document.getElementById('flamey')
  Flamey.src = 'sprites\\flamey\\hit.png'
  points += 0.5;
  pc.innerHTML = points
  snd2.play();
  snd2.currentTime=0;
  const myTimeout = setTimeout(FlameyNormal, 500);
}