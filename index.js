const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hypertext Markup Language",
            "Hypertext Markzurberg Language",
            "Hypertension Making Language",
            "Hifi Making Land"
        ],
        correct: 0
    },
    {
        question: "Which language is primarily used for styling web pages?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        correct: 1
    },
    {
        question: "What is the main purpose of a version control system like Git?",
        options: [
            "To write code",
            "To manage software versions and collaboration",
            "To compile code",
            "To design graphics"
        ],
        correct: 1
    },
    {
        question: "Which of the following is a popular front-end JavaScript framework?",
        options: [
            "Django",
            "React",
            "Spring",
            "Flask"
        ],
        correct: 1
    },
    {
        question: "What does API stand for in software development?",
        options: [
            "Application Programming Interface",
            "Application Program Interface",
            "Advanced Programming Interface",
            "Automated Program Integration"
        ],
        correct: 0
    },
    {
        question: "Which algorithm is commonly used for searching a sorted array?",
        options: [
            "Bubble Sort",
            "Merge Sort",
            "Binary Search",
            "Quick Sort"
        ],
        correct: 2
    },
    {
        question: "What is the purpose of an artificial neural network?",
        options: [
            "To create graphical interfaces",
            "To process and analyze large datasets",
            "To emulate the human brain's learning process",
            "To manage database transactions"
        ],
        correct: 2
    },
    {
        question: "Which of the following is a popular back-end technology for building APIs?",
        options: [
            "Node.js",
            "React",
            "Bootstrap",
            "jQuery"
        ],
        correct: 0
    },
    {
        question: "In the context of web development, what does 'responsive design' refer to?",
        options: [
            "A design that adapts to different screen sizes and devices",
            "A design that responds to user interactions with animations",
            "A design that automatically updates itself",
            "A design that only works in certain web browsers"
        ],
        correct: 0
    },
    {
        question: "Which programming language is often used for AI and machine learning tasks?",
        options: [
            "Java",
            "C#",
            "Python",
            "Ruby"
        ],
        correct: 2
    },

 
];

// Step2: Javscript Intialization
const quiz=document.querySelector('.quiz');
const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] =
    document.querySelectorAll("#question,.option_1,.option_2,option_3,option_4");

const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

// Step 3: Load Quiz Function
const loadQuiz = () => {
    const { question, options } = quizData[currentQuiz];
    console.log(options);

    questionElm.innerText = `${currentQuiz+1}:${question}`;

    options.forEach(
        (curOption, index) => (window[`option_${index + 1}`].innerText = curOption)
    );
};

loadQuiz();



// Step 4 getting answer function onButton click

const getSelectedOption = () => {
    let ans_index;
    answerElm.forEach((curOption, index) => {
        if (curOption.checked) {
            ans_index = index;
        }
    });
    return ans_index;
}

const deSelectedAnswers = () => {
    return answerElm.forEach((curElem) => curElem.checked = false);
}


submitBtn.addEventListener('click', () => {
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);

    if(selectedOptionIndex === quizData[currentQuiz].correct){
        score=score+1;
    }



    currentQuiz++;
    if (currentQuiz < quizData.length) {
        deSelectedAnswers();
        loadQuiz();
    }

    else{
        quiz.innerHTML=`
        <div class="result">
        <h2>🏅 Your Score: ${score}/${quizData.length} Correct Answers🏆🏆</h2>
        <p>Congratulations on completing the quiz!🎁</p>
        <button class="reload-button" onclick="location.reload()">🪀Play Again🪀</button>
        </div>
        `
    }
});














