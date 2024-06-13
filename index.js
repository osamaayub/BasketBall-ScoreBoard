
// Home Score Button
let buttonone=document.getElementById("homeOne");
let buttontwo=document.getElementById("homeTwo");
let buttonthree=document.getElementById("homeThree");


// Home Score Update
let HomescoreEl=document.getElementById("home_score");

// Guest Score Update
let GuestScoreEl=document.getElementById("guest_score");

//guest-score Buttons

let guestButton = document.getElementById("guestOne");
let guestButtontwo=document.getElementById("guestTwo");
let guestButtonThree=document.getElementById("guestThree");

let score=0;
// Home Score Update
function addOne(){
 
  score+=1;
  HomescoreEl.textContent=score;
}

function addTwo(){
  score+=2;
  HomescoreEl.textContent=score;
}

function addThree(){
  score+=3;
  HomescoreEl.textContent=score;
}

//guest-score

 let guest_score=0;
function One(){
  guest_score+=1;
GuestScoreEl.textContent=guest_score;
}

function Two(){
  guest_score+=2;
  GuestScoreEl.textContent=guest_score;
}
function Three(){
  guest_score+=3;
  GuestScoreEl.textContent=guest_score;
}
