const questions= [
    
    {
        question:"which is the biggest animal in the world ",
        answers:[
            {text:"shark", correct:false},
            {text:"blue whale", correct:true},
            {text:"elephant", correct:false},
            {text:"giraff", correct:false}
        ]
    },
    {
        question:"which is the smallest continent in the world ",
        answers:[
            {text:"Asia", correct:false},
            {text:"austuralia", correct:true},
            {text:"Arctic", correct:false},
            {text:"africa", correct:false}
        ],
        
    },
    {
        question:"which is the largest desert in the world ",
        answers:[
            {text:"kaluhari", correct:false},
            {text:"gobi", correct:false},
            {text:"sahara", correct:false},
            {text:"antarcatica", correct:true}
        ]
    },
    {
        question:"which is the smallest country in the world ",
        answers:[
            {text:"vatican city", correct:true},
            {text:"Bhutan", correct:false},
            {text:"nepal", correct:false},
            {text:"shri lanke", correct:true}
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answers-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0
    score = 0
    nextButton.innerHTML = "Next"
showQuestion()
}
let currentQuestion
function  showQuestion(){
    resetState()
     currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1
    questionElement.innerHTML = questionNo + " . " + currentQuestion.question
currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text
    button.classList.add("btn")
    answerButton.appendChild(button)
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click",selectAnswer)
})
}
function resetState(){
    nextButton.style.display = "none"
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}
function selectAnswer(e){
const selectBtn = e.target;
const isCorrect = selectBtn.dataset.correct === "true"
if(isCorrect){
    selectBtn.classList.add("corrrect")
    score++;
}
else
{selectBtn.classList.add("incorrrect")}
Array.from(answerButton.children).forEach(button=>{
    if(button.dataset.correct === "true"){
        button.classList.add("correct")
    }
    button.disabled = true
});
nextButton.style.display = "block"
}
function showScore(){
resetState()
questionElement.innerHTML = `you scored ${score} From ${questions.length}`
nextButton.innerHTML = "Play Again"
nextButton.style.display = "block"
}
function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
       handleNextButton();
    }
    else{
        startQuiz();
    }
})

// console.log(questionNo + " . " + currentQuestion.question)
startQuiz()