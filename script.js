// Quiz Data - 30 questions across multiple categories
const quizData = [
    // Geography
    { question: "What is the capital of France?", options: ["London", "Berlin", "Paris", "Madrid"], correct: 2 },
    { question: "Which is the largest continent by area?", options: ["Africa", "Asia", "North America", "Europe"], correct: 1 },
    { question: "The Nile River flows through which continent?", options: ["Asia", "Europe", "Africa", "South America"], correct: 2 },
    { question: "Which country has the most time zones?", options: ["Russia", "United States", "China", "Canada"], correct: 0 },
    { question: "What is the smallest country in the world?", options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"], correct: 1 },
    { question: "Which mountain range contains Mount Everest?", options: ["Andes", "Alps", "Himalayas", "Rocky Mountains"], correct: 2 },
    
    // Science
    { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], correct: 1 },
    { question: "What is the chemical symbol for gold?", options: ["Go", "Au", "Ag", "Gd"], correct: 1 },
    { question: "How many bones are in an adult human body?", options: ["206", "208", "210", "204"], correct: 0 },
    { question: "What gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correct: 2 },
    { question: "What is the speed of light in vacuum?", options: ["300,000 km/s", "299,792,458 m/s", "186,000 miles/s", "All of the above"], correct: 3 },
    { question: "Which blood type is known as the universal donor?", options: ["A", "B", "AB", "O"], correct: 3 },
    
    // History
    { question: "In which year did World War II end?", options: ["1944", "1945", "1946", "1947"], correct: 1 },
    { question: "Who was the first person to walk on the moon?", options: ["Buzz Aldrin", "Neil Armstrong", "John Glenn", "Alan Shepard"], correct: 1 },
    { question: "The ancient city of Troy was located in which modern-day country?", options: ["Greece", "Italy", "Turkey", "Egypt"], correct: 2 },
    { question: "Which empire was ruled by Julius Caesar?", options: ["Greek", "Roman", "Byzantine", "Persian"], correct: 1 },
    { question: "The Berlin Wall fell in which year?", options: ["1987", "1988", "1989", "1990"], correct: 2 },
    { question: "Who painted the ceiling of the Sistine Chapel?", options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"], correct: 2 },
    
    // Literature & Arts
    { question: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], correct: 1 },
    { question: "Which novel begins with 'It was the best of times, it was the worst of times'?", options: ["Great Expectations", "Oliver Twist", "A Tale of Two Cities", "David Copperfield"], correct: 2 },
    { question: "Who composed 'The Four Seasons'?", options: ["Mozart", "Bach", "Vivaldi", "Beethoven"], correct: 2 },
    { question: "The Mona Lisa is displayed in which museum?", options: ["British Museum", "Louvre", "Metropolitan Museum", "Uffizi Gallery"], correct: 1 },
    { question: "Who wrote the epic poem 'The Odyssey'?", options: ["Virgil", "Homer", "Sophocles", "Euripides"], correct: 1 },
    { question: "Which art movement is Pablo Picasso associated with?", options: ["Impressionism", "Surrealism", "Cubism", "Abstract Expressionism"], correct: 2 },
    
    // Nature & Animals
    { question: "What is the largest mammal in the world?", options: ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"], correct: 1 },
    { question: "How many hearts does an octopus have?", options: ["1", "2", "3", "4"], correct: 2 },
    { question: "Which bird is known for its ability to mimic human speech?", options: ["Crow", "Parrot", "Eagle", "Owl"], correct: 1 },
    { question: "What is the fastest land animal?", options: ["Lion", "Cheetah", "Leopard", "Tiger"], correct: 1 },
    { question: "Which insect is known for its role in pollination?", options: ["Ant", "Butterfly", "Bee", "Mosquito"], correct: 2 },
    { question: "How long can a crocodile hold its breath underwater?", options: ["15 minutes", "30 minutes", "45 minutes", "1 hour"], correct: 3 }
];

// Quiz State Management
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let userAnswers = [];
let quizStarted = false;
let timer = null;
let timeLeft = 10;
let answersRevealed = false;

// DOM Elements
const welcomeScreen = document.getElementById('welcomeScreen');
const questionSection = document.getElementById('questionSection');
const loadingScreen = document.getElementById('loadingScreen');
const resultsSection = document.getElementById('resultsSection');
const progressBar = document.getElementById('progressBar');
const questionCounter = document.getElementById('questionCounter');
const questionText = document.getElementById('questionText');
const answersContainer = document.getElementById('answersContainer');
const nextBtn = document.getElementById('nextBtn');
const timerContainer = document.getElementById('timerContainer');
const timerText = document.getElementById('timerText');

/**
 * Initialize the quiz application
 */
function initializeQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    userAnswers = [];
    quizStarted = false;
    timeLeft = 10;
    answersRevealed = false;
    
    showScreen('welcome');
    updateProgressBar();
    timerContainer.style.display = 'none';
    
    // Add floating particles
    createFloatingParticles();
}

/**
 * Create floating particles for ambiance
 */
function createFloatingParticles() {
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        const randomDelay = Math.random() * 3;
        const randomDuration = 4 + Math.random() * 4;
        particle.style.animationDelay = `-${randomDelay}s`;
        particle.style.animationDuration = `${randomDuration}s`;
    });
}

/**
 * Start the quiz
 */
function startQuiz() {
    quizStarted = true;
    showScreen('question');
    displayQuestion();
    updateProgressBar();
    timerContainer.style.display = 'flex';
    startTimer();
}

/**
 * Start the countdown timer
 */
function startTimer() {
    timeLeft = 10;
    answersRevealed = false;
    updateTimerDisplay();
    
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 3) {
            timerText.classList.add('timer-warning');
        }
        
        if (timeLeft <= 0) {
            handleTimeUp();
        }
    }, 1000);
}

/**
 * Update timer display
 */
function updateTimerDisplay() {
    timerText.textContent = timeLeft;
    timerText.classList.toggle('timer-warning', timeLeft <= 3);
}

/**
 * Handle when time runs out
 */
function handleTimeUp() {
    clearInterval(timer);
    timerText.classList.remove('timer-warning');
    
    if (!answersRevealed) {
        // If no answer selected, mark as wrong
        if (selectedAnswer === null) {
            userAnswers[currentQuestion] = -1; // -1 indicates no answer
        } else {
            // If answer selected, reveal feedback
            revealAnswers();
        }
        
        // Move to next question or results immediately
        if (currentQuestion < quizData.length - 1) {
            currentQuestion++;
            displayQuestion();
            updateProgressBar();
            startTimer();
        } else {
            showResults();
        }
    }
}

/**
 * Display the current question
 */
function displayQuestion() {
    const question = quizData[currentQuestion];
    
    // Reset states
    selectedAnswer = null;
    answersRevealed = false;
    
    // Update question counter
    questionCounter.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
    
    // Update question text with animation
    questionText.style.animation = 'none';
    questionText.offsetHeight; // Trigger reflow
    questionText.style.animation = 'slideInRight 0.5s ease-out';
    questionText.textContent = question.question;
    
    // Clear previous answers
    answersContainer.innerHTML = '';
    
    // Create answer options
    question.options.forEach((option, index) => {
        const answerElement = document.createElement('div');
        answerElement.className = 'answer-option';
        answerElement.setAttribute('data-index', index);
        answerElement.innerHTML = `
            <div class="answer-text">${option}</div>
            <div class="answer-icon">✓</div>
        `;
        answerElement.addEventListener('click', () => selectAnswer(index));
        answerElement.setAttribute('tabindex', '0');
        answerElement.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                selectAnswer(index);
            }
        });
        answersContainer.appendChild(answerElement);
    });
    
    // Update navigation buttons
    updateNavigationButtons();
}

/**
 * Handle answer selection
 */
function selectAnswer(index) {
    if (answersRevealed) return;
    
    // Remove previous selection
    document.querySelectorAll('.answer-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Add selection to clicked option
    const selectedOption = document.querySelector(`[data-index="${index}"]`);
    selectedOption.classList.add('selected');
    
    // Update selected answer
    selectedAnswer = index;
    userAnswers[currentQuestion] = selectedAnswer;
    
    // Stop timer and reveal answers
    clearInterval(timer);
    timerText.classList.remove('timer-warning');
    
    // Check if answer is correct
    if (selectedAnswer === quizData[currentQuestion].correct) {
        score++;
        selectedOption.classList.add('success-animation');
    }
    
    revealAnswers();
    
    // Auto-advance to next question or results after 1.5 seconds
    setTimeout(() => {
        if (currentQuestion < quizData.length - 1) {
            currentQuestion++;
            displayQuestion();
            updateProgressBar();
            startTimer();
        } else {
            showResults();
        }
    }, 1500);
}

/**
 * Reveal correct and incorrect answers
 */
function revealAnswers() {
    answersRevealed = true;
    const correctIndex = quizData[currentQuestion].correct;
    
    document.querySelectorAll('.answer-option').forEach((option, index) => {
        if (index === correctIndex) {
            option.classList.add('correct');
        } else if (option.classList.contains('selected')) {
            option.classList.add('incorrect');
            option.classList.add('error-animation');
        }
        
        // Disable further clicking
        option.style.pointerEvents = 'none';
    });
}

/**
 * Move to next question
 */
function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        displayQuestion();
        updateProgressBar();
        startTimer();
    } else {
        showResults();
    }
}

/**
 * Update navigation buttons state
 */
function updateNavigationButtons() {
    // Update next button text
    if (currentQuestion === quizData.length - 1) {
        nextBtn.textContent = 'View Results';
    } else {
        nextBtn.textContent = 'Next Question';
    }
    
    // Disable next button initially
    nextBtn.disabled = true;
}

/**
 * Show quiz results
 */
function showResults() {
    clearInterval(timer);
    timerContainer.style.display = 'none';
    
    // Show loading screen briefly
    showScreen('loading');
    
    setTimeout(() => {
        // Calculate results
        const percentage = Math.round((score / quizData.length) * 100);
        const incorrect = quizData.length - score;
        
        // Update result displays
        document.getElementById('scoreText').textContent = `${score}/${quizData.length}`;
        document.getElementById('correctCount').textContent = score;
        document.getElementById('incorrectCount').textContent = incorrect;
        document.getElementById('percentageScore').textContent = `${percentage}%`;
        
        // Generate personalized message
        let message = '';
        if (percentage >= 90) {
            message = "🎉 Outstanding performance! You're a true quiz master with exceptional knowledge across all categories!";
        } else if (percentage >= 80) {
            message = "🌟 Excellent work! You demonstrated strong knowledge and quick thinking throughout the challenge!";
        } else if (percentage >= 70) {
            message = "👏 Great job! You showed solid understanding across multiple topics. Well done!";
        } else if (percentage >= 60) {
            message = "👍 Good effort! You got more than half correct. Keep learning and you'll improve even more!";
        } else if (percentage >= 50) {
            message = "💪 Nice try! You're on the right track. Every question teaches us something new!";
        } else {
            message = "🎯 Thanks for taking the challenge! Remember, every expert was once a beginner. Keep exploring and learning!";
        }
        
        document.getElementById('resultsMessage').textContent = message;
        
        // Show results screen
        showScreen('results');
        updateProgressBar(100);
    }, 2000);
}

/**
 * Restart the quiz
 */
function restartQuiz() {
    initializeQuiz();
}

/**
 * Show specific screen
 */
function showScreen(screen) {
    // Hide all screens
    welcomeScreen.style.display = 'none';
    questionSection.style.display = 'none';
    loadingScreen.style.display = 'none';
    resultsSection.style.display = 'none';
    
    // Show requested screen
    switch(screen) {
        case 'welcome':
            welcomeScreen.style.display = 'block';
            break;
        case 'question':
            questionSection.style.display = 'block';
            break;
        case 'loading':
            loadingScreen.style.display = 'block';
            break;
        case 'results':
            resultsSection.style.display = 'block';
            break;
    }
}

/**
 * Update progress bar
 */
function updateProgressBar(customProgress = null) {
    let progress;
    
    if (customProgress !== null) {
        progress = customProgress;
    } else if (!quizStarted) {
        progress = 0;
    } else {
        progress = ((currentQuestion + 1) / quizData.length) * 100;
    }
    
    progressBar.style.width = `${progress}%`;
}

/**
 * Handle keyboard navigation
 */
document.addEventListener('keydown', (e) => {
    if (questionSection.style.display === 'block' && !answersRevealed) {
        // Number keys to select answers
        const num = parseInt(e.key);
        if (num >= 1 && num <= 4) {
            const answerIndex = num - 1;
            if (answerIndex < quizData[currentQuestion].options.length) {
                selectAnswer(answerIndex);
            }
        }
    }
});

// Initialize the quiz when page loads
document.addEventListener('DOMContentLoaded', initializeQuiz);