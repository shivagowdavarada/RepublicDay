function checkAnswers() {
    // Define the correct answers and corresponding codes
    const correctAnswers = {
        question1: "delhi",
        question2: "gandhi",
        question3: "tajmahal",
        question4: "saffronwhitegreen",
    };

    // Retrieve user-selected answers
    const userAnswers = {
        question1: getSelectedRadioValue("question1"),
        question2: getSelectedRadioValue("question2"),
        question3: getSelectedRadioValue("question3"),
        question4: getSelectedRadioValue("question4"),
    };

    // Check user answers against correct answers
    let allCorrect = true;
    Object.keys(correctAnswers).forEach(question => {
        if (correctAnswers[question] !== userAnswers[question]) {
            allCorrect = false;
        }
    });

    // Display result and generate code
    if (allCorrect) {
        alert("All answers are correct!");
        generateCode();
    } else {
        alert("Some answers are incorrect. Please review your answers.");
    }
}

function generateCode() {
    // Generate a code based on some logic (replace with your own logic)
    const code = "ABC" + Math.floor(Math.random() * 1000);
    alert("Congratulations! Your code is: " + code);
}

function getSelectedRadioValue(question) {
    const selectedRadio = document.querySelector(`input[name="${question}"]:checked`);
    return selectedRadio ? selectedRadio.value : null;
}

function enableAudio() {
    var audio = document.getElementById("backgroundMusic");
    var audioButton = document.getElementById("audioButton");

    if (audio.paused) {
        audio.play();
        audioButton.textContent = "Disable Audio";
    } else {
        audio.pause();
        audioButton.textContent = "Enable Audio";
    }
}
