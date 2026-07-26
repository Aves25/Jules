const messageButton = document.querySelector("#messageButton");
const message = document.querySelector("#message");

const phrases = [
    "You're beautiful as hell 😍.",
    "I love hangingout with you 😊.",
    "Thank you for always wanting the best for me 😊.",
    "You're a huge blessing to me ☺️.",
    "I am right where I want to be 😌.",
    "Thank you for putting up with me. 😂",
    "You are worth waiting for and investing all my time and effort for 😌.",
    "You make me incredibly happy 😊.",
    "You're going to do some amazing things 💯.",
    "You're literally the best ❤️."
];

let phraseIndex = 0;

messageButton.addEventListener("click", () => {
  // Fade out the current message.
  message.classList.remove("show");

  setTimeout(() => {
    // Change the text to the next phrase.
    message.textContent = phrases[phraseIndex];

    // Fade the new phrase in.
    message.classList.add("show");

    // Move to the next phrase.
    phraseIndex++;

    // Return to the first phrase after reaching the end.
    if (phraseIndex === phrases.length) {
      phraseIndex = 0;
    }
  }, 300);
});