const quizData = [
    {
        question: "What is the sum of 130+125+191?",
        a: "335",
        b: "456",
        c: "446",
        d: "426",
        correct: "c",
    },
    {
        question: "50 times of 8 is equal to:",
        a: "80",
        b: "400",
        c: "800",
        d: "4000",
        correct: "b",
    },
    {
        question: "110 divided by 10 is:",
        a: "11",
        b: "10",
        c: "5",
        d: "None of these",
        correct: "a",
    },
    {
        question: "Find the missing terms in multiple of 3: 3, 6, 9, __, 15",
        a: "10",
        b: "11",
        c: "12",
        d: "13",
        correct: "c ",
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