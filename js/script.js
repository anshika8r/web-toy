

// NO button ko select kar rahe hain
const noButton = document.querySelector('.no-button');

// Rage message dikhane wali jagah ko select kar rahe hain
const rageMessage = document.querySelector('.rage-message');

// YES button ko select kar rahe hain
const yesButton = document.querySelector('.yes-button');

// First page ko select kar rahe hain
const welcomeCard = document.querySelector('.welcome-card');

// Chaos page ko select kar rahe hain
const chaosPage = document.querySelector('.chaos-page');

// Chaos page ke Weird Button ko select kar rahe hain
const weirdButton = document.querySelector('.toy-button');

// Weird Button wala page select kar rahe hain
const weirdPage = document.querySelector('.weird-page');

// Click Me button ko select kar rahe hain
const colorButton = document.querySelector('.color-button');

// Music button ko select kar rahe hain
const musicButton = document.querySelector('.music-button');

// Music player ko select kar rahe hain
const music = document.querySelector('#music');

// I'm Normal button ko select kar rahe hain
const changeButton = document.querySelector('.change-button');

// Back button ko select kar rahe hain
const backButton = document.querySelector('.back-button');

// Meme Machine button ko select kar rahe hain
const memeButton = document.querySelectorAll('.toy-button')[1];

// Meme Machine wala page select kar rahe hain
const memePage = document.querySelector('.meme-page');

// Generate Meme button ko select kar rahe hain
const generateMemeButton = document.querySelector('.meme-generate-button');

// Jahan meme image dikhegi usko select kar rahe hain
const memeDisplay = document.querySelector('.meme-display');


// Meme Machine ka Back button select kar rahe hain
const backMemeButton = document.querySelector('.back-meme-button');


// Mini Simulator button ko select kar rahe hain
const simulatorButton = document.querySelectorAll('.toy-button')[2];

// Mini Simulator wala page select kar rahe hain
const simulatorPage = document.querySelector('.simulator-page');

// Start Simulator button ko select kar rahe hain
const startSimulatorButton = document.querySelector('.start-simulator-button');

// Simulation result dikhane wali jagah ko select kar rahe hain
const simulationDisplay = document.querySelector('.simulation-display');

// Simulator ka Back button select kar rahe hain
const backSimulatorButton = document.querySelector('.back-simulator-button');


// Visual Experiment button ko select kar rahe hain
const visualButton = document.querySelectorAll('.toy-button')[3];

// Visual Experiment wala page select kar rahe hain
const visualPage = document.querySelector('.visual-page');

// Blob ko select kar rahe hain
const magicBlob = document.querySelector('.magic-blob');

// Visual Experiment ka Back button select kar rahe hain
const backVisualButton = document.querySelector('.back-visual-button');


// Visual Experiment ke playground area ko select kar rahe hain
const visualArea = document.querySelector('.visual-area');



// 53 memes ki list automatically bana rahe hain
const memes = [];

for (let i = 1; i <= 53; i++) {
  memes.push(`images/memes/meme${i}.jpg`);
}



// NO button ke liye rage-bait messages
const messages = [
  "Bro… why are you saying no already? 😭",
  "NO? After everything we've been through? 💔",
  "You really looked at YES and chose violence. 💀",
  "THE AUDACITY. 😭",
  "Bro PLEASE. I'm literally just a button. 😭",
  "Still trying to click NO?? Respectfully… get a hobby. 💀",
  "I'm starting to think you don't trust me. 😭",
  "You thought I'd let you say no that easily? 🤨",
  "At this point, this is personal. 💀",
  "Okay wow… emotional damage received. 💔",
  "You keep choosing NO like I won't remember this. 😭",
  "Fine. Keep trying. I have all night. 😈"
];

let messageIndex = 0;


// ===============================
// NO BUTTON
// ===============================

// Jab cursor NO button ke upar aayega
noButton.addEventListener('mouseover', function () {

  // Ek rage message screen par dikhana
  rageMessage.textContent = messages[messageIndex];

  // Agle message par jaana
  messageIndex++;

  // Agar saare messages khatam ho gaye
  // toh wapas first message se start karna
  if (messageIndex === messages.length) {
    messageIndex = 0;
  }

  // YES button ki position pata kar rahe hain
  const yesRect = yesButton.getBoundingClientRect();

  // NO button screen ke andar maximum kaha tak ja sakta hai
  const maxX = window.innerWidth - noButton.offsetWidth;
  const maxY = window.innerHeight - noButton.offsetHeight;

  // Random position generate kar rahe hain
  let randomX = Math.random() * maxX;
  let randomY = Math.random() * maxY;

  // Check kar rahe hain ki NO button YES ke upar toh nahi aa raha
  while (
    randomX < yesRect.right &&
    randomX + noButton.offsetWidth > yesRect.left &&
    randomY < yesRect.bottom &&
    randomY + noButton.offsetHeight > yesRect.top
  ) {

    // Agar YES ke upar aa gaya toh new random position
    randomX = Math.random() * maxX;
    randomY = Math.random() * maxY;
  }

  // NO button ko new position par move kar rahe hain
  noButton.style.left = randomX + 'px';
  noButton.style.top = randomY + 'px';

});


// ===============================
// YES BUTTON
// ===============================

// Jab YES button par click hoga
yesButton.addEventListener('click', function () {

  // First page ko hide kar do
  welcomeCard.style.display = 'none';

  // Chaos page ko show kar do
  chaosPage.style.display = 'block';

});


// ===============================
// WEIRD BUTTON
// ===============================

// Jab Weird Button par click hoga
weirdButton.addEventListener('click', function () {

  // Chaos page ko hide kar do
  chaosPage.style.display = 'none';

  // Weird page ko show kar do
  weirdPage.style.display = 'block';

});


// ===============================
// CLICK ME BUTTON
// ===============================

// Jab Click Me button par click hoga
colorButton.addEventListener('click', function () {

  // Random colours ki list
  const colors = [
    'pink',
    'lavender',
    'lightblue',
    'lightgreen',
    'orange'
  ];

  // Random colour choose kar rahe hain
  const randomIndex = Math.floor(Math.random() * colors.length);

  // Weird page ka background colour change kar rahe hain
  weirdPage.style.backgroundColor = colors[randomIndex];

});


// ===============================
// MUSIC BUTTON
// ===============================

// Jab FYAAA button par click hoga
musicButton.addEventListener('click', function () {

  // Music ko play kar rahe hain
  music.play();

});


// ===============================
// I'M NORMAL BUTTON
// ===============================

// Jab I'm Normal button par click hoga
changeButton.addEventListener('click', function () {

  // Button ka text change kar rahe hain
  changeButton.textContent = "I'M NOT NORMAL 😭";

  // Button ka size change kar rahe hain
  changeButton.style.transform = 'scale(1.2)';

});


// ===============================
// BACK BUTTON
// ===============================

// Jab Back button par click hoga
backButton.addEventListener('click', function () {

  // Weird page ko hide kar do
  weirdPage.style.display = 'none';

  // Chaos page ko wapas show kar do
  chaosPage.style.display = 'block';

});


// ===============================
// MEME MACHINE
// ===============================

// Jab Meme Machine button par click hoga
memeButton.addEventListener('click', function () {

  // Chaos page ko hide kar do
  chaosPage.style.display = 'none';

  // Meme Machine page ko show kar do
  memePage.style.display = 'block';

});

// Jab Generate Meme button par click hoga
generateMemeButton.addEventListener('click', function () {

  // Random meme ka index generate kar rahe hain
  const randomIndex = Math.floor(Math.random() * memes.length);

  // Random meme ki image screen par dikha rahe hain
  memeDisplay.innerHTML = `<img src="${memes[randomIndex]}" alt="Random Meme">`;

});

// ===============================
// MEME BACK BUTTON
// ===============================

// Jab Meme Machine ka Back button click hoga
backMemeButton.addEventListener('click', function () {

  // Meme page ko hide kar do
  memePage.style.display = 'none';

  // Chaos page ko wapas show kar do
  chaosPage.style.display = 'block';

});

// ===============================
// MINI SIMULATOR
// ===============================

// Jab Mini Simulator button par click hoga
simulatorButton.addEventListener('click', function () {

  // Chaos page ko hide kar do
  chaosPage.style.display = 'none';

  // Mini Simulator page ko show kar do
  simulatorPage.style.display = 'block';

});

// ===============================
// CHAOTIC DAY GENERATOR
// ===============================

// Different situations ki list
const situations = [
  "You woke up 20 minutes late. 😭",
  "Your alarm betrayed you. 💀",
  "You opened your laptop and immediately forgot why. 😭",
  "Professor asked a question. You suddenly became invisible. 👻",
  "You fixed one bug and created three more. 💀",
  "You understood the lecture... for approximately 7 seconds. 🧠",
  "Your code worked on the first try. THIS IS SUSPICIOUS. 👀",
  "You said 'I'll study for 5 minutes' and somehow watched reels for an hour. 😭",
  "You finally finished your assignment. Another assignment appeared. 💀",
  "You survived the day. Barely. 🫡"
];

// Har situation ke liye random chaos level
function getChaosLevel() {

  // 40 se 100 ke beech random number
  return Math.floor(Math.random() * 61) + 40;

}

// Jab Start My Chaotic Day button par click hoga
startSimulatorButton.addEventListener('click', function () {

  // Random situation choose kar rahe hain
  const randomIndex = Math.floor(Math.random() * situations.length);

  // Random chaos level generate kar rahe hain
  const chaosLevel = getChaosLevel();

  // Situation aur chaos level screen par dikha rahe hain
  simulationDisplay.innerHTML = `
    <div>
      <p>${situations[randomIndex]}</p>
      <p>🔥 Chaos Level: ${chaosLevel}%</p>
    </div>
  `;

});

// ===============================
// SIMULATOR BACK BUTTON
// ===============================

// Jab Simulator ka Back button click hoga
backSimulatorButton.addEventListener('click', function () {

  // Simulator page ko hide kar do
  simulatorPage.style.display = 'none';

  // Chaos page ko wapas show kar do
  chaosPage.style.display = 'block';

});

// ===============================
// VISUAL EXPERIMENT NAVIGATION
// ===============================

// Jab Visual Experiment button click hoga
visualButton.addEventListener('click', function () {

  // Chaos page ko hide kar do
  chaosPage.style.display = 'none';

  // Visual Experiment page ko show kar do
  visualPage.style.display = 'block';

});

// ===============================
// BLOB MOUSE MOVEMENT
// ===============================

// Visual area ke andar mouse move hone par
visualArea.addEventListener('mousemove', function (event) {

  // Mouse ki X position nikal rahe hain
  const x = event.offsetX;

  // Mouse ki Y position nikal rahe hain
  const y = event.offsetY;

  // Blob ko mouse ki position par move kar rahe hain
  magicBlob.style.left = x + 'px';
  magicBlob.style.top = y + 'px';

});

// ===============================
// VISUAL BACK BUTTON
// ===============================

// Jab Visual Experiment ka Back button click hoga
backVisualButton.addEventListener('click', function () {

  // Visual Experiment page ko hide kar do
  visualPage.style.display = 'none';

  // Chaos page ko wapas show kar do
  chaosPage.style.display = 'block';

});

const darkModeButton = document.querySelector('.dark-mode-button');

darkModeButton.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});

const chaosTitle = document.querySelector('.chaos-title');
const easterEgg = document.querySelector('.easter-egg');

let secretClicks = 0;

chaosTitle.addEventListener('click', function () {
  secretClicks++;

  if (secretClicks === 1) {
    chaosTitle.textContent = 'Why are you clicking me? 👀';
  }

  else if (secretClicks === 2) {
    chaosTitle.textContent = 'STOP. 😭';
  }

  else if (secretClicks === 3) {
    chaosTitle.textContent = 'Seriously??';
  }

  else if (secretClicks === 4) {
    chaosTitle.textContent = 'BRO.';
  }

  else if (secretClicks === 5) {
    chaosTitle.textContent = 'ONE MORE AND I SWEAR—';
  }

  else if (secretClicks === 6) {
    chaosTitle.textContent = 'YOU WERE WARNED. 😭';
  }

  else if (secretClicks === 7) {
    easterEgg.style.display = 'block';

    setTimeout(function () {
      easterEgg.style.display = 'none';
    }, 3000);
  }
});