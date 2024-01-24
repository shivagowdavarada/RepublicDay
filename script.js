function checkAnswers() {
    // Define the correct answers and corresponding codes
    const correctAnswers = {
        question1: "Rabindranath Tagore",
        question2: "Gateway of India",
        question3: "Peace and righteousness",
        question4: "Red Fort",
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

document.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById("backgroundMusic");
    var audioButton = document.getElementById("audioButton");

    // Add an event listener to the audio button
    audioButton.addEventListener("click", function () {
        toggleAudio(audio, audioButton);
    });

    // Play audio by default
    playAudio(audio);

    // Initialize the audio button state
    updateAudioButton(audio, audioButton);
});

// Function to toggle audio playback
function toggleAudio(audio, audioButton) {
    if (audio.paused) {
        playAudio(audio);
    } else {
        pauseAudio(audio);
    }

    // Update the button text based on the audio state
    updateAudioButton(audio, audioButton);
}

// Function to play audio
function playAudio(audio) {
    if (audio) {
        audio.play().then(() => {}).catch(error => {
            console.error("Failed to play audio:", error);
        });
    }
}

// Function to pause audio
function pauseAudio(audio) {
    if (audio) {
        audio.pause();
    }
}

// Function to update the audio button text based on the audio state
function updateAudioButton(audio, audioButton) {
    if (audio.paused) {
        audioButton.textContent = "Enable Audio";
    } else {
        audioButton.textContent = "Disable Audio";
    }
}

// Your existing code...


