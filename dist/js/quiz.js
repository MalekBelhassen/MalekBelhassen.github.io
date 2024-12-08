const quizData = [
    {
        question: "Que signifie HTML?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hypertext Media Language",
        d: "Hypertext Meaning Language",
        correct: "a",
    },
    {
        question: "Quelle est la fonction de la balise <img> en HTML?",
        a: "Ajouter un lien",
        b: "Ajouter un conteneur",
        c: "Ajouter une image",
        d: "Ajouter une animation",
        correct: "c",
    },
    {
        question: "Comment créez-vous un lien en HTML?",
        a: "Utiliser la balise <url> avec l'attribut href",
        b: "Utiliser la balise <link> avec l'attribut href",
        c: "Utiliser la balise <a> avec l'attribut href",
        d: "Utiliser la balise <button> avec l'attribut href",
        correct: "b",
    },
    {
        question: "Qu'est-ce que CSS signifie ?",
        a: "Cascading Style Sheets",
        b: "Cascading Style System",
        c: "Cascading Syntax Sheets",
        d: "Cascading Structure Sheets",
        correct: "a",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})