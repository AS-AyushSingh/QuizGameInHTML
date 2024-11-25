// Define the questions, answers, and correct answers
const quizData = [
    {
        question: "The inaugural IPL season was won by which team?",
        correctAnswer: "Rajasthan Royals",
        options: ["Deccan Chargers", "Chennai Super Kings", "Mumbai Indians"]
    },
    {
        question: "Who scored the first IPL century?",
        correctAnswer: "Brandon McCullum",
        options: ["A B Devilliers", "Chris Gayle", "Sachin Tendulkar"]
    },
    {
        question: "Who took the fastest 100 wickets in IPL?",
        correctAnswer: "Lasith Malinga",
        options: ["Bhuvneshwar Kumar", "Yuzvendra Chahal", "Amit Mishra"]
    },
    {
        question: "Most catches taken by a player in IPL history?",
        correctAnswer: "Suresha Raina",
        options: ["Virat Kohli", "Steve Smith", "Rohit Sharma"]
    },
    {
        question: "Most dismissals by a wicket keeper in IPL?",
        correctAnswer: "Mahendra Singh Dhoni",
        options: ["Dinesh Kartik", "Parthiv Patel", "Robin Uthappa"]
    }
];

// Initialize variables for game state
let currentQuestionIndex = 0;
let score = 0;
let userName = "";

function startGame() {
    userName = prompt("Enter your name:");
    document.getElementById("welcomeMessage").textContent = `Hello ${userName}! Best of Luck!`;
    displayQuestion();
}

function displayQuestion() {
    const questionData = quizData[currentQuestionIndex];
    const questionText = document.getElementById("questionText");
    const optionsContainer = document.getElementById("optionsContainer");
    const nextButton = document.getElementById("nextButton");

    // Display question text
    questionText.textContent = questionData.question;

    // Shuffle options and add the correct answer
    const options = [...questionData.options, questionData.correctAnswer];
    shuffle(options);

    // Display options as buttons
    optionsContainer.innerHTML = '';
    options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(optionButton);
    });

    // Show next button after answering
    nextButton.style.display = 'none'; // Hide Next button initially
}

function checkAnswer(selectedOption) {
    const correctAnswer = quizData[currentQuestionIndex].correctAnswer;
    const nextButton = document.getElementById("nextButton");

    if (selectedOption === correctAnswer) {
        score++;
        alert("Your answer was correct.");
    } else {
        alert(`Your answer was wrong. Correct answer was: ${correctAnswer}`);
    }

    // Show next button to proceed to the next question
    nextButton.style.display = 'block';
    currentQuestionIndex++;

    if (currentQuestionIndex === quizData.length) {
        setTimeout(showScore, 1000); // Show score after all questions
    }
}

function nextQuestion() {
    if (currentQuestionIndex < quizData.length) {
        displayQuestion();
    }
}

function showScore() {
    document.getElementById("questionContainer").style.display = 'none'; // Hide question section
    document.getElementById("scoreContainer").style.display = 'block'; // Show score section
    document.getElementById("score").textContent = score;
}

function resetGame() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("questionContainer").style.display = 'block'; // Show question section
    document.getElementById("scoreContainer").style.display = 'none'; // Hide score section
    startGame(); // Restart the game
}

// Shuffle function to randomize the order of answers
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Initialize the game
startGame();

// Event listener for next button
document.getElementById("nextButton").addEventListener("click", nextQuestion);

// Event listener for reset button
document.getElementById("resetButton").addEventListener("click", resetGame);
