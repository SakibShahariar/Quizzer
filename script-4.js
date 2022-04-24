const quizData = [
    {
        question: "Who is the first president of Bangladesh?",
        a: "Abdus sattar",
        b: "Ziaur Rahman",
        c: "None of these",
        d: "Sheikh Mujibur Rahman",
        correct: "d",
    },
    {
        question: "When Bangladesh got independence?",
        a: " 1970",
        b: " 1971",
        c: " 1972",
        d: " 1975",
        correct: "b",
    },
    {
        question: "Kazi Nazrul Islam is Associated with?",
        a: "Poetry",
        b: "Politics",
        c: "Hockey",
        d: "Cricket",
        correct: "a",
    },
    {
        question: "What is the currency of Bangladesh?",
        a: "Rupee",
        b: "Dollar",
        c: "Pond",
        d: "Taka",
        correct: "d",
    },
];

const quiz = document.getElementById('quiz')
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