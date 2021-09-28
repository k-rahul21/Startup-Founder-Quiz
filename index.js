var read = require('readline-sync');
const chalk = require('chalk');
console.log(chalk.yellow("Hey, Do you want to test your start-up knowledge ?"));
var playerName = read.question("Enter Your Name: ");
if(playerName !== "" )
console.log(chalk.magenta("Let's do this, " + playerName));
else
playerName = read.question("Enter Your Name: ");

let score = 0;

function playQuiz(ques, ans)
{
  var userInput = read.question(chalk.cyan.bold(ques));
  if(userInput.toUpperCase() === ans.toUpperCase()){
    score++;
    console.log(chalk.green("Right..."));
    console.log(chalk.blue("Move to next question.."));
    
  } else {
    console.log(chalk.red("oops, Incorrect..."));
    console.log(chalk.cyan("Don't worry jump to the next one.."));
  }
  console.log(chalk.yellow("Your score is :", score));
  console.log(chalk.red("******************"));
}

let quizQues = [
  {
    ques: "Who's the founder of OYO hotel ?",
    ans: "Ritesh Agarwal"
  },
   {
    ques: "Who's the founder of CRED ?",
    ans: "Kunal Shah"
  },
   {
    ques: "Who's the founder of CarDekho ?",
    ans: "Amit Jain"
  },
   {
    ques: "Who's the founder of Paytm ?",
    ans: "Vijay Shekhar Sharma"
  },
   {
    ques: "Who's the founder of Neogcamp ?",
    ans: "Tanay Pratap"
  }];

  for(let i=0; i<quizQues.length; i++)
  {
    var currQues = quizQues[i];
    playQuiz(currQues.ques , currQues.ans);
  }