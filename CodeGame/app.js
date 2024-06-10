function checkLevel1() {
    const userInput = document.getElementById('code-input-1').value.trim();
    const correctAnswer = "int myVariable = 10;";
    const feedback = document.getElementById('feedback-1');
    if (userInput === correctAnswer) {
        feedback.innerHTML = "<p class='text-success'>Correct! Moving to Level 2.</p>";
        document.getElementById('level-1').classList.remove('active');
        document.getElementById('level-2').classList.add('active');
    } else {
        feedback.innerHTML = "<p class='text-danger'>Incorrect, please try again.</p>";
    }
}

function checkLevel2() {
    const userInput = document.getElementById('code-input-2').value.trim();
    const correctAnswer = `if (myVariable > 5) {
    System.out.println("Greater");
} else {
    System.out.println("Smaller or Equal");
}`;
    const feedback = document.getElementById('feedback-2');
    if (userInput === correctAnswer) {
        feedback.innerHTML = "<p class='text-success'>Correct! You have completed the tutorial.</p>";
    } else {
        feedback.innerHTML = "<p class='text-danger'>Incorrect, please try again.</p>";
    }
}
