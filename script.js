function checkAnswers() {
    // Define the correct answers and corresponding codes
    const correctAnswers = {
        question1: "delhi",
        question2: "gandhi",
        question3: "tajmahal",
        question4: "tricolor",
    };

    // Retrieve user-selected answers
    const userAnswers = {
        question1: document.getElementById("question1").value.toLowerCase(),
        question2: document.getElementById("question2").value.toLowerCase(),
        question3: document.getElementById("question3").value.toLowerCase(),
        question4: document.getElementById("question4").value.toLowerCase(),
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
