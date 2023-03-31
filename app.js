const questions = [{
    'ques': 'Inside which HTML element do we put the JavaScript?',
    'a': '<js>',
    'b': '<scripts>',
    'c': '<scripting>',
    'd': '<script>',
    'correct': 'd'
}, {
    'ques': 'If you type the following code in the console window, what result will you get?3>2> 1 === false',
    'a': 'True',
    'b': 'False',
    'c': 'True True',
    'd': 'False True',
    'correct': 'a'
}, {
    'ques': 'Which of the following is not  a javascript object',
    'a': 'var obj = {} ',
    'b': 'var obj = {name : "Steve"} ',
    'c': 'var obj = {name = "hello"} ',
    'd': 'var obj = new object()',
    'correct': 'c'
}, {
    'ques': 'Where is the correct place to insert a JavaScript?',
    'a': 'The head section',
    'b': 'body section',
    'c': 'both section',
    'd': 'only head section',
    'correct': 'c'
}
    , {
    'ques': 'Javascript is a _____ language.',
    'a': 'Scripting',
    'b': 'Oriented',
    'c': 'Programming',
    'd': 'Logic',
    'correct': 'a'
}, {
    'ques': 'Among the following, which one is a ternary operator?',
    'a': '/',
    'b': '&',
    'c': '+',
    'd': '?',
    'correct': 'd'
}
    , {
    'ques': 'JavaScript is a _______________ language.',
    'a': 'Object Oriented',
    'b': 'Object Based',
    'c': 'Programming',
    'd': 'Server',
    'correct': 'b'
}, {
    'ques': 'A conditional expression is also called a',
    'a': 'Switch statement',
    'b': 'If-then-else statement',
    'c': 'Immediate if',
    'd': 'Alternative to if-else',
    'correct': 'c'
}, {
    'ques': 'The "var" and "function" are',
    'a': 'Data types',
    'b': 'Keyword',
    'c': 'Declaration statements',
    'd': 'Prototypes',
    'correct': 'c'
}, {
    'ques': 'JavaScript was originally developed under the name',
    'a': 'Oak',
    'b': 'Mocha',
    'c': 'Sencha',
    'd': 'ActionScript',
    'correct': 'b'
}

]

let index = 0;
let total = questions.length
let right = 0, wrong = 0;
let quesBox = document.getElementById('quesBox')
let quesInput = document.querySelectorAll(".options")





const loadQuestion = () => {
    if (index === total) {
        return endQuiz()
    }

    reset()
    const data = questions[index]
    console.log(data)
    quesBox.innerHTML = `${index + 1}) ${data.ques}`
    quesInput[0].nextElementSibling.innerText = data.a
    quesInput[1].nextElementSibling.innerText = data.b
    quesInput[2].nextElementSibling.innerText = data.c
    quesInput[3].nextElementSibling.innerText = data.d

    console.clear()
}


const submitQuiz = () => {
    const data = questions[index]
    const ans = getAnswer()
    if (ans === data.correct) {

        right++;
    }


    else {
        wrong++
    }
    index++;
    loadQuestion()

    return
}




const getAnswer = () => {
    let answer
    quesInput.forEach((input) => {

        if (input.checked) {
            answer = input.value
        }
    })
    return answer;
}


const reset = () => {
    quesInput.forEach((input) => {

        input.checked = false
    })
}



const endQuiz = () => {

    document.querySelector('.boxx').innerHTML =
        `<h2>Even if there are 7 obstacles, then there will be passes</h2>
      <h3> ${right}/${total} are correct. Those taking numbers below 7 will be considered`;
    if (right > 8) {
        alert('WELL DONE STUDENT')
    } else if (right <= 7) {
        alert('WORK HARD FOR BETTER RESULT')
    }


}
let loader = document.getElementById('preloader');


setInterval(function loadFunction() {
    loader.style.display = "none"
}, 2000)
clearInterval(3000)

let main = document.querySelector('.mainn')
let con = document.querySelector('.con')


function valid() {
    let email = document.getElementById('email').value
    let pass = document.getElementById('password').value
    let name = document.getElementById('name').value;

    // Check if the name field is empty
    if (name == "") {
        alert("Name field cannot be empty");
        return false;
    }

    // Check if the email field is empty and if it contains an "@" symbol
    if (email == "" || email.indexOf("@") == -1) {
        alert("Please enter a valid email address");
        return false;
    }

    // Check if the password field is empty or if it's less than 6 characters long
    if (pass == "" || pass.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }

    // If all the fields are valid, return true to submit the form


    return true + alert("Okay Student Ready For Quiz Passing is 70% ") + con.classList.add("hide") + main.classList.remove("hide") + loadQuestion();



}


// INFORMATION 

let popup = document.getElementById('popup')
var close = document.querySelector('#close')

function openPopup() {

    popup.classList.add("open-popup")

}
function closePopup() {
    popup.classList.remove("open-popup")
}




