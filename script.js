let questions = [

    {
        question : '1. What is Mean by React?',
        answers: [
           {text: 'React is UI library', correct: true},
           {text: 'React is framework', correct: false},
           {text: 'React is programing language', correct: false},
           {text: 'React is database', correct: false}    
        ],
    },

    {
        question : '2. What is Mean by Node.js?',
        answers: [
           {text: 'Node js is database', correct: false},
           {text: 'Node js is library', correct: false},
           {text: 'Node js is backend framework', correct: true},
           {text: 'Node js is programing language', correct: false}    
        ],
    },

    {
        question : '3. What is full form of DOM?',
        answers: [
           {text: 'Delect object model', correct: false},
           {text: 'Document object model', correct: true},
           {text: 'Databse object model', correct: false},
           {text: 'None of above', correct: false}    
        ],
    },

    {
        question : '4. What is the full form of CSS?',
        answers: [
           {text: 'Customer service software', correct: false},
           {text: 'Cascading Style Sheet', correct: true},
           {text: 'Computer style sofware', correct: false},
           {text: 'Centralized style system', correct: false}    
        ],
    },

];

let currentquestion = 0;
let userscrore = 0;

let start = document.getElementById('start');
let welcome = document.querySelector('.welcomepage');
let quizepage = document.querySelector('.quizepage');
let question = document.getElementById('question');
let next = document.getElementById('next');
let answerbox = document.querySelector('.answerbox');

    start.addEventListener('click', ()=>{
    welcome.style.display = 'none'
    quizepage.style.display = 'flex'
    currentquestion = 0;
    userscrore  = 0;
    next.innerHTML = 'Next'
    displaypage()
});


function displaypage(){
    reset()
    question.textContent = questions[currentquestion].question
    questions[currentquestion].answers.forEach(answer => {
    let buttonEL  = document.createElement('button')    
    buttonEL.innerHTML = answer.text;
    answerbox.appendChild(buttonEL)

    if(answer.correct){
        buttonEL.dataset.correctAn = answer.correct
    }

    buttonEL.addEventListener('click', checkans);
    })
}


function checkans(e){
    let selectedbutton = e.target;
    if(selectedbutton.dataset.correctAn){
        userscrore++;
        selectedbutton.classList.add('correct')
    } 
    else {
        selectedbutton.classList.add('wrong')
    }

   Array.from(answerbox.children).forEach(button => {
      if(button.dataset.correctAn === 'true'){
          button.classList.add('correct')
        }
        
        button.disabled = true;
       
    })

    next.style.display = 'block'
}

function displayresult(){
     reset()
     question.innerHTML = `Quize is Complete <br> Your score is: <span>${userscrore}/${questions.length}`
     next.style.display = 'none'
}

function nextquestion(){
    currentquestion++;
    if(currentquestion < questions.length){
        displaypage()
        next.style.display = 'none'
    }
    else {
        displayresult();
    }
}

next.addEventListener('click', function(){
    if(currentquestion < questions.length){
        nextquestion()
    }
    else {
        
    }
})

function reset(){
    question.textContent = ''
    answerbox.innerHTML = ''
}