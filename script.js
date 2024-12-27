const scriptURL = 'https://script.google.com/macros/s/AKfycbwm7mjjPf33VMc5BXuWiWGnT42SwY01C-fkGRGPiGSzuiWnCydbeL2FD_MZhulFaW__/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
  e.preventDefault();
  submitDate();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message));
});

function handleEnterKey(event) {
  if (event.key === 'Enter') {
    console.log('Enter key pressed!');
    playmusic();
  }
}

document.addEventListener('keydown', handleEnterKey);

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', function () {
    // Temporarily disable the button to prevent rapid clicking
    this.style.pointerEvents = 'none';

    // Re-enable the button after a short delay (300ms)
    setTimeout(() => {
      this.style.pointerEvents = 'auto';
    }, 300); // 300ms delay before re-enabling
  });
});

let noClickCount = 0;

function showNextStep(stepNumber) {
  document.querySelectorAll('.step').forEach(step => step.classList.remove('active'));
  document.getElementById(`step${stepNumber}`).classList.add('active');
}

function playmusic() {
  const audioElement = document.getElementById("bgmusic");
  const error = document.getElementById("perror");

  if (true) {
    if (audioElement.paused) {
      audioElement.play();
    }
    const userName = document.getElementById("username").value.trim();
  
    // Check if the username is empty
    if (!userName) {
        alert("Please enter your name before proceeding!");
        return; // Stop further execution if name is not entered
    }
    document.getElementById("datename").innerHTML = `Hey ${userName}❤️, welcome!`;
    showNextStep(1);
    document.removeEventListener('keydown', handleEnterKey);
    // Heartbeat transition when correct password
    document.getElementById('step0').style.animation = 'heartBeat 1s ease-in-out';
  } else {
    error.style.display = "block";
    error.classList.add("shake");
  }
}

function handleNoClick() {
  noClickCount++;
  const noButton = document.getElementById("no-button");

  if (noClickCount === 1) {
    alert("Error 404: You clicked the wrong button 🤖");
  } else if (noClickCount === 2) {
    alert("You're testing my patience! 😬");
  } else if (noClickCount === 3) {
    alert("One more time and I’ll cry 😭");
  } else if (noClickCount === 4) {
    alert("I dare you to click No again 😤");
  } else if (noClickCount === 5) {
    noButton.style.display = "none";
  }
}

function submitDate() {
  console.log("Test");

  const dateInput = document.getElementById("datetime").value;
  const showDate = document.getElementById("showdate");

  if (!dateInput) {
    alert("Please select a date!");
    return;
  }

  const formattedDate = new Date(dateInput).toLocaleString('en-GB', {
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  showDate.textContent = `${formattedDate}`;
  alert("Are we at an airport? Because my heart is taking off ✈️💖");
  showNextStep(7);
}

function showPickUpLines() {
  const pickupLines = [
    "If you were paracetamol, I’d never miss a dose 💊😊",
    "If we were coffee, we’d be a perfect blend ☕❤️",
    "If I were a cat, I’d spend all 9 lives in your lap 😊🐾",
    "Do you believe in parallel universes? In one of them, we’re already on a date 🌌❤️",
    "Your story’s missing a character like me 📖😉",
    "I’m like your favorite song—you’ll want to keep me on repeat 🎶🔁",
    "If we were socks, we’d make a perfect pair 🧦❤️",
    "You must be a prescription, because you're exactly what the doctor ordered 💊💖",
    "You must be the square root of negative one, because you can’t be real 🧮😜",
    "Do you have a pencil? Because I want to draw you closer ✏️❤️",
    "Do you have a compass? Because I keep getting lost in your eyes 🧭👁️",
    "Are you my morning coffee? Because you’re the best part of my day 🌅☕",
    "If I were a leaf, I’d want to fall right into your arms 🍂💞",
    "If I could rewrite the stars, I’d make sure our paths always cross 🌌🔀",
    "Can I have a break with you? You’re sweeter than a KitKat 🍫💖"
  ];

  const randomLine = pickupLines[Math.floor(Math.random() * pickupLines.length)];
  alert(randomLine);
}
