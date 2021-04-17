var readlineSync = require('readline-sync')


var score = 0;


function welcome(){
var userName = readlineSync.question("What is your name? ")

console.log("Welcome to The Ritik Mangtani Show " + userName)
}


//function
function play(question,answer){

  var userAnswer = readlineSync.question(question)

  if (userAnswer===answer){
    console.log("Hurray! You are right. ")
    score = score + 1;
  }
  else {
    console.log("Oh no! That's not right. ")
  }
  console.log("Your current score is :", score)
  console.log("------------")
}


// directly calling function

// play("Where do I Stay?", "Gandhinagar")
// play("What is my hometown?", "Mumbai")
// play("What is the name of my college? ", "NIFT")


//creating object

var questionOne = {
  question : "Where do i stay? ",
  answer : "gandhinagar",
}
var questionTwo = {
  question:"Where is my hometown? ",
  answer: "mumbai",
}
var questionThree = {
  question:"What is the name of my college? ",
  answer: "nift",
}
var questionFour = {
  question:"Which is my favourite state in India? ",
  answer: "himachal pradesh",
}
var questionFive = {
  question:"What is my faviourte beverage? ",
  answer: "bournvita",
}

var questions = [questionOne,questionTwo,questionThree,questionFour,questionFive] //array


function game(){

for (var i=0; i<questions.length; i++){
  var currentQuestion = questions[i]
  play(currentQuestion.question,currentQuestion.answer)
}

}


var highscores = [{
  name : "Ritesh",
  score : 5,
},{
  name : "Raju",
  score : 4,
}];


function showScores(){

console.log("Your final score is :", score)

console.log("Do checkout the highscores. And if you just did beat them all. Ping me to update the scoreboard ")

highscores.map(score => console.log(score.name, ":" , score.score))
}


welcome();
game();
showScores();