// Select every envelope on the page
const envelopes = document.querySelectorAll(".envelope");

envelopes.forEach((envelope) => {
    envelope.addEventListener("click", () => {
        const letterType = envelope.dataset.message;

        localStorage.setItem("letter", letterType);

        window.location.href = "letter.html";
    });
});
