const letters = {

    happy: {

        icon: "😊",

        title: "Open When You're Happy",

        message:
            "Jules😊,\n\n" +
            "I hope you are having a fantastic day today!" +
            "I am so happy that you are doing well, seeing you happy is one of the best things ever. 😄 " +
            "You deserve to be happy everyday.\n\n" +
            "I appreciate you and you are the.❤️"

    },

    sad: {

        icon: "😔",

        title: "Open When You're Sad",

        message:
            "Jules 😊,\n\n" +
            "I'm sorry today has been difficult. I don't like it when you're sad 😥 " +
            "I hope your day gets better and tomorrow will be even better ❤️\n\n" +
            "You've got this ❤️ and you are the best.❤️"

    },

    tired: {

        icon: "😴",

        title: "Open When You're Tired",

        message:
            "Jules 😊,\n\n" +
            "I am sorry you are tired and I hope you get the best sleep ever. I miss you tons. ❤️\n\n" +
            "Cannot wait to talk to you tomorrow 😄❤️" +
            "You are the best ❤️"

    },

    stressed: {

        icon: "😥",

        title: "Open When You're Stressed",

        message:
            " Jules 😊,\n\n" +
            "I am sorry you are feeling stressed 😥 " +
            "Just a reminder that every thing will work out the way it should " +
            "Always keep in mind, control what you can control, your attitude and your effor" +
            "One step at a time, day by day.\n\n" +
            "I believe in you, and you are the best and I am here if you need anything, always. ❤️"+
            "You are the best ❤️"

    },

    excited: {

        icon: "🎉",

        title: "Open When You're Excited",

        message:
            "Jules 😊,\n\n" +
            "I am so incredibly happy for you. 💯 " +
            "You deserve every bit of success you get and deserve the world, and im so proud of you\n\n" +
            "You are literally the best ❤️"

    },

    "miss-me": {

        icon: "❤️",

        title: "Open When You Miss Me",

        message:
            "Jules 😊," +
            "I miss you so much.🥲" +
            "I'm really happy whenever we get to talk and or spend time together.\n\n" +
            "I wish we could spend way more time together and when I see you it will be the best time 😊" +
            "Talk / see you soon 🌷" +
            "I appreciate you and you are the best ❤️"

    }

};

const selectedLetterType = localStorage.getItem("letter");
const selectedLetter = letters[selectedLetterType];

const letterIcon = document.getElementById("letterIcon");
const letterTitle = document.getElementById("letterTitle");
const letterText = document.getElementById("letterText");

if (selectedLetter) {
    letterIcon.textContent = selectedLetter.icon;
    letterTitle.textContent = selectedLetter.title;
    letterText.textContent = selectedLetter.message;

    document.title = selectedLetter.title;
} else {
    letterIcon.textContent = "💌";
    letterTitle.textContent = "Letter Not Found";
    letterText.textContent =
        "Go back to the envelopes and choose a letter first.";
}
