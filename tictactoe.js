var voting = true;
var votingTurn = true;
var voteCount = 0;


function restartElection() { // resets the game
 for (var i = 1; i <= 3; i++) {
  var restartVoting = "a" + i;
  document.getElementById(
   restartVoting).innerHTML = "votes";
  restartVoting = "b" + i;
  document.getElementById(
   restartVoting).innerHTML = "votes";
  restartVoting = "c" + i;
  document.getElementById(
   restartVoting).innerHTML = "votes";
 }
 voting = true;
 votingTurn = true;
 document.getElementById("ElectionCampaign")
  .innerHTML = "It's a Election Day. Caste your votes";
 document.getElementById(
  "resetButton").disabled = true;

}

function checkWin(voteIsTrump) { // tests if there's any winner combination
 var
  electionWinner; // stands for "possible winner"
 if (voteIsTrump === true) {
  electionWinner = "Trump";
 } else {
  electionWinner = "Biden";
 }
 if (document.getElementById("a1")
  .innerHTML === electionWinner && document
  .getElementById("a2").innerHTML ===
  electionWinner && document.getElementById("a3")
  .innerHTML === electionWinner ||
  document.getElementById("b1")
  .innerHTML === electionWinner && document
  .getElementById("b2").innerHTML ===
  electionWinner && document.getElementById("b3")
  .innerHTML === electionWinner ||
  document.getElementById("c1")
  .innerHTML === electionWinner && document
  .getElementById("c2").innerHTML ===
  electionWinner && document.getElementById("c3")
  .innerHTML === electionWinner

  ||
  document.getElementById("a1")
  .innerHTML === electionWinner && document
  .getElementById("b1").innerHTML ===
  electionWinner && document.getElementById("c1")
  .innerHTML === electionWinner ||
  document.getElementById("a2")
  .innerHTML === electionWinner && document
  .getElementById("b2").innerHTML ===
  electionWinner && document.getElementById("c2")
  .innerHTML === electionWinner ||
  document.getElementById("a3")
  .innerHTML === electionWinner && document
  .getElementById("b3").innerHTML ===
  electionWinner && document.getElementById("c3")
  .innerHTML === electionWinner

  ||
  document.getElementById("a1")
  .innerHTML === electionWinner && document
  .getElementById("b2").innerHTML ===
  electionWinner && document.getElementById("c3")
  .innerHTML === electionWinner ||
  document.getElementById("a3")
  .innerHTML === electionWinner && document
  .getElementById("b2").innerHTML ===
  electionWinner && document.getElementById("c1")
  .innerHTML === electionWinner) {
  document.getElementById("ElectionCampaign")
   .innerHTML = electionWinner +
   " wins the Election. Congratulations Mr. President!!"
  voting = false;
  voteCount = 0;
  document.getElementById(
   "resetButton").disabled = false;
 }

}

function vote(
 givenVoting
) { // executes the voting commands
 if (document.getElementById(
   givenVoting).innerHTML ===
  "votes" && voting === true) {
  if (votingTurn === true) {
   document.getElementById(
    givenVoting).innerHTML = "Trump";
   document.getElementById("ElectionCampaign")
    .innerHTML = "It's time to vote for Joe Biden.";
   votingTurn = false;
  } else {
   document.getElementById(
    givenVoting).innerHTML = "Biden";
   document.getElementById("ElectionCampaign")
    .innerHTML = "It's time to vote for Donald Trump";
   votingTurn = true;
  }
  voteCount++;
  checkWin(!votingTurn);
  if (voteCount === 9) {
   document.getElementById("ElectionCampaign")
    .innerHTML = "Surprising!! No one wins the Election.";
   document.getElementById(
    "resetButton").disabled = false;
   voteCount = 0;
  }
 }
}
