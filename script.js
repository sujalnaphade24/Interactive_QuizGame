const questions = [
    {
        question:"What Does Html Stands For?",
        answers:[
                 {text: "Hypetext Markup Language", correct:true},
                 {text:"Hyper Transfer Markup Language", correct:false},
                 {text:"Hypertext Machine Language", correct:false},
                 {text:"Hypetext and Text Markup Language", correct:false },
            ]
    },
    {
        question:"which Css Propert Is Used To Control Spacing Between Elements?",
        answers:[
                {text: "margin", correct:false},
                 {text:"padding", correct:true},
                 {text:"Spacing", correct:false},
                 {text:"border-spacing", correct:false },    
            ]
    },
    {
        question:"Which of the following can read and render HTML web pages?",
        answers:[
                 {text:"Server", correct:false},
                 {text:"head Tak", correct:false},
                 {text:"web browser", correct:true},
                 {text:"empty", correct:false },    
            ]
    }
];

const questionElement = document.getElementById("question");
 const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");

  let currentQuestionIndex = 0;
  let score = 0;

  function startQuiz(){

      currentQuestionIndex=0;
      score= 0;
      nextButton.innerHTML = "Next";
      showQuestion();
  }

  function showQuestion(){
      resetState();
    let currentQuestion = questions[currentQuestionIndex];
      let questionNo = currentQuestionIndex + 1;
      questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct =answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
  }
  function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;

    }else{
        selectedBtn.classList.add("incorrect");
    }

Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
        button.classList.add("correct");
    }
    button.disabled = true;
});
nextButton.style.display = "block";
}
  function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

  }
  function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
  }
  function  handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();

    }
    else{
        showScore();
    }
}
  nextButton.addEventListener("click", ()=>{
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else{
        startQuiz();
    }
  });
  startQuiz();