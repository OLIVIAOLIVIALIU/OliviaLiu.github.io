//creats a quiz
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const quizQuestions= [
    {
        question:"Olivia Liu is currently a student of.",
        answers:{
            a:"Mphil",
            b:"PhD"
        },
        correntAnswer:"a"
    },
    {
        questions:"Olivia's research focuses on.",
        answers:{
            a:"coding",
            b:"engineering",
            C:"home care for people with dementia"
        },
        correntAnswer:"c"
    },
    {
        question:"Olivia is super passionate about:",
        answers:{
            a:"innovation",
            b:"dementia",
            c:"human-centred design"   
        },
        correntAnswer:"b"
    }
];
function buildQuiz() {
    const output = [];
    for(i=0; i<quizQuestions.length; i++){
        const answers = [];
        for(letter in quizQuestions[i].answers){
            answers.push(
                '<label>'
                + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                + letter + ':'
                + quizQuestions[i].answers[letter]
                + '</label>'
            );
        }
        output.push(
            '<div class="question">' + quizQuestions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
        );
    }
    quizContainer,innerHTML = output.join('');
}
function showResults() {
    var answerContainers = quizContainer.querySelectorAll('.answers');
    var numCorrect = 0;
    for(i=0; i<quizQuestions.length;i++){
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
    if(userAnswer===quizQuestions[i].correctAnswer){
        numCorrect++;
        answerContainers[i].style.color = 'lightgreen';
    }
    else{
        answerContainers[i].style.color = 'red';
    }
}
if (numCorrect === 0){
    resultsContainer.innerHTML = "That wasn't your best effort - you didn't get a single answer correct.";
}
if (numCorrect === 1){
    resultsContainer.innerHTML = "There's room for improvement there! You only got one correct answer.";
}
if (numCorrect === 2){
    resultsContainer.innerHTML = "That was okay! You got a score of 2 out of 4 for your responses. Have another go to see if you can improve on that.";
}
if (numCorrect === 3){
    resultsContainer.innerHTML = "Congratulations! You got a perfect score of 3 out of 3 for your responses. You know Olivia so well!";
}
buildQuiz();
submitButton.onclick = function (){
    showResults();
}
}