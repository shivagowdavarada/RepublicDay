function checkAnswers() {
    // Add logic to check answers and generate codes
    // You can use JavaScript to check selected options and generate codes accordingly
    alert("Code: ABC123"); // Replace with your logic
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
