const questionOne = document.querySelector(".a-quest");
const questionTwo = document.querySelector(".b-quest");
const questionThree = document.querySelector(".c-quest");
const questionFour = document.querySelector(".d-quest");
const questionData = document.querySelector(".question");
const pickedAnswer = document.querySelectorAll(".answer");
const btn = document.querySelector("#btn");
const showResult = document.querySelector("#result");

const quizInfo = [
    {
        question: "Who is the President of USA?",
         a: "Abraham Tuchel",
         b: "Donald Trump",
         c: "Joe Biden",
         d: "Lebron James",
         correct: "c"
    },
    {
        question: "Media query solves issues partaining to?",
         a: "drawing",
         b: "coding",
         c: "data",
         d: "responsiveness",
         correct: "d"
    },
    {
        question: "Who is the current fastest man alive?",
         a: "Usain Bolt",
         b: "Donald Trump",
         c: "Joe Biden",
         d: "Lebron James",
         correct: "a"
    },
    {
        question: "Which of the following programming languages is used by a front end developer?",
         a: "Css",
         b: "Html",
         c: "Python",
         d: "Javascript",
         correct: "d"
    },
    {
        question: "What does CSS stand for?",
         a: "Choose style first",
         b: "Cascade style sheet",
         c: "Cascde style stripes",
         d: "cascade styling sheets",
         correct: "b"
    },
]

let startData = 0;
let score = 0;
quizDetails(); 
function quizDetails (){
    deselect();
    const currentData = quizInfo[startData];
    questionData.innerHTML = currentData.question;
    questionOne.innerHTML = currentData.a;
    questionTwo.innerHTML = currentData.b;
    questionThree.innerHTML = currentData.c;
    questionFour.innerHTML = currentData.d;
    
}

function selected (){
    let answer = undefined;
    pickedAnswer.forEach((pickAnswer) =>{
        if(pickAnswer.checked){
            answer = pickAnswer.id;
        }
    })
    return answer;
}
function deselect (){
    pickedAnswer.forEach((pickAnswer) =>{
        pickAnswer.checked = false;
    })
}
btn.addEventListener("click", function(){
     let answer = selected();
    
    if(answer === quizInfo[startData].correct){
        score++;
    }
    startData++;
    if(startData < quizInfo.length){
        quizDetails();
    }else {
          showResult.innerHTML = `<h2>Congrats on completing the tests. Your score is ${score}/${quizInfo.length}<h2>`
    }
    
})