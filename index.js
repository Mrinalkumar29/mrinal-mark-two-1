var readlinesync = require("readline-sync");
var userName = readlinesync.question("What is your name ? ");
console.log("Welcome "+ userName + " to Mirzapur quiz  ");
console.log("This quiz will check how well do you know about mirzapur web series \n ");
console.log("Game Rules :- There will be four options and no need to write the complete answer just type the answer option  in CapsLock");
var score=0;
function play (question , answer)
{
  var userAnswer = readlinesync.question(question);
  if(userAnswer===answer)
  {
    console.log("you are right ");
    score=score+1;
    
  }
  else
  {
    console.log("you are wrong ");
    score=score-1;
  
  }
  console.log("current score ", score);
  console.log("--------------");
}
play("To whom did Kaleen bhaiya said  - Aap jis sheher mein naukar banke aaye ho , hum malik h us sheher ke ? \n A. Compounder \n B. Guddu Bhaiya \n C. Dada Tyagi \n D. Maurya Ratan Singh \n ", "D");
play(" Bawaal chij h be , sala system hil  jata h . In this dialogue what is guddu bhaiya referring to as Bawaal chij  ? \n A. Gun \n B. Cocaine \n c. Opium \n D. Egg \n " , "A");
play("What is barfi code for in mirzapur lingo ?\n A. Cocaine \n B. Guns \n C. Opium \n D. Kaleen \n " , "C");
play(" Who said - Agli baar munna bhaiya ghar aayein , zinda wapas nahi laute toh ?\n A. Golu gupta \n B. Bablu pandit  \n C. Guddu pandit \n D. Dimpy \n ", "C");
play("Who ruled mirzapur before the Tripathi's ? \n A.The chaudharya  \n B. The Shukla's \n C. The Gupta's \n D. The Tayagi's \n" , "A");
play("What is the munna bhaiya real name in the show ? \n A. Mahesh Tripathi \n B. Phoolchand Tripathi  \n C. Satyanand Tripathi \n D. Chotte \n" , "B");