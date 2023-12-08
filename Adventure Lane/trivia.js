document.addEventListener("DOMContentLoaded", function () {
    const questionContainer = document.getElementById("question-container");
    const feedbackContainer = document.getElementById("feedback-container");
    const triviaData = [
      {
        question: "What is the capital of Italy?",
            options: ["Madrid", "Rome", "Berlin", "Athens"],
            correctAnswer: "Rome"
        },
        {
            question: "Which famous structure is located in Agra, India?",
            options: ["Eiffel Tower", "Pyramids of Giza", "Taj Mahal", "Great Wall of China"],
            correctAnswer: "Taj Mahal"
        },
        {
            question: "In which country can you find Machu Picchu?",
            options: ["Peru", "Mexico", "Chile", "Argentina"],
            correctAnswer: "Peru"
        },
        {
            question: "What is the currency of Brazil?",
            options: ["Peso", "Real", "Baht", "Dinar"],
            correctAnswer: "Real"
        },
        {
            question: "Which African city is known as the 'Mother City'?",
            options: ["Cairo", "Nairobi", "Cape Town", "Accra"],
            correctAnswer: "Cape Town"
        },
        {
            question: "Which U.S. state is known as the 'Sunshine State'?",
            options: ["California", "Florida", "Hawaii", "Texas"],
            correctAnswer: "Florida"
        },
        {
            question: "In which European city can you find the Anne Frank House?",
            options: ["Amsterdam", "Paris", "Berlin", "Vienna"],
            correctAnswer: "Amsterdam"
        },
        {
            question: "What is the official language of Japan?",
            options: ["Mandarin", "Korean", "Japanese", "Thai"],
            correctAnswer: "Japanese"
        },
        {
            question: "Which river is the longest in the world?",
            options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
            correctAnswer: "Amazon"
        },
        {
            question: "In which country can you explore the ancient city of Petra?",
            options: ["Greece", "Turkey", "Jordan", "Egypt"],
            correctAnswer: "Jordan"
        }
      // Add more questions as needed TMCN
    ];
    let currentQuestionIndex = 0;
  
    function loadQuestion() {
      const currentQuestion = triviaData[currentQuestionIndex];
  
      // Clear previous content TMCN
      questionContainer.innerHTML = "";
  
      // Display the question TMCN
      const questionElement = document.createElement("h4");
      questionElement.textContent = currentQuestion.question;
      questionContainer.appendChild(questionElement);
  
      // Display options TMCN
      currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.textContent = `${index + 1}. ${option}`;
        optionElement.classList.add("option");
        questionContainer.appendChild(optionElement);
      });
    }
  
    function selectAnswer(event) {
      const selectedOption = event.target.textContent.slice(3); // Extract the selected option text (excluding the index)
      const correctAnswer = triviaData[currentQuestionIndex].correctAnswer;
  
      // Provide feedback TMCN
      if (selectedOption === correctAnswer) {
        feedbackContainer.textContent = "Correct! 🎉";
        feedbackContainer.style.color = "green";
      } else {
        feedbackContainer.textContent = `Wrong! The correct answer is ${correctAnswer}. 😔`;
        feedbackContainer.style.color = "red";
      }
  
      // Move to the next question after a delay TMCN
      setTimeout(checkAnswer, 1000);
    }
  
    function checkAnswer() {
      feedbackContainer.textContent = ""; // Clear previous feedback TMCN
      currentQuestionIndex++;
  
      if (currentQuestionIndex < triviaData.length) {
        loadQuestion();
      } else {
        // Display a message when all questions are answered TMCN
        questionContainer.innerHTML = "<p>All questions answered! Thank you for playing now book a trip away! 🎉</p>";
        feedbackContainer.innerHTML = "";
      }
    }
  
    // Event delegation for option selection TMCN
    questionContainer.addEventListener("click", function (event) {
      if (event.target.classList.contains("option")) {
        selectAnswer(event);
      }
    });
  
    // Load the first question when the page loads TMCN
    loadQuestion();
  });
  