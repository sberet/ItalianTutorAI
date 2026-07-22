const words = [

{english:"Hello",italian:"ciao"},
{english:"Good Morning",italian:"buongiorno"},
{english:"Good Evening",italian:"buonasera"},
{english:"Thank You",italian:"grazie"},
{english:"Please",italian:"per favore"},
{english:"Bread",italian:"pane"},
{english:"Wine",italian:"vino"},
{english:"Water",italian:"acqua"},
{english:"Friend",italian:"amico"},
{english:"Family",italian:"famiglia"}

];

let remaining=[...words];

let currentWord;

let score=0;

let total=0;

let mistakes=[];

function nextWord(){

if(remaining.length===0){

finishLesson();

return;

}

let random=Math.floor(Math.random()*remaining.length);

currentWord=remaining[random];

remaining.splice(random,1);

document.getElementById("englishWord").innerHTML=currentWord.english;

document.getElementById("answer").value="";

document.getElementById("answer").focus();

document.getElementById("remaining").innerHTML=

"Words Remaining: "+remaining.length;

}

function checkAnswer(){

let user=document.getElementById("answer")
.value
.toLowerCase()
.trim();

if(user===currentWord.italian){

score++;

document.getElementById("result").innerHTML=

"✅ Correct";

document.getElementById("result").style.color="green";

}

else{

mistakes.push(currentWord);

document.getElementById("result").innerHTML=

"❌ Correct answer: "+currentWord.italian;

document.getElementById("result").style.color="red";

}

total++;

document.getElementById("score").innerHTML=

"Score: "+score+" / "+total;

let percent=(total/words.length)*100;

document.getElementById("progressBar").style.width=

percent+"%";

}

function finishLesson(){

document.getElementById("englishWord").innerHTML=

"Lesson Complete!";

document.getElementById("submitBtn").disabled=true;

document.getElementById("result").innerHTML=

"🏆 Final Score: "+score+" / "+words.length;

let review=document.getElementById("reviewList");

review.innerHTML="";

if(mistakes.length===0){

review.innerHTML="<li>Excellent! No mistakes.</li>";

return;

}

mistakes.forEach(function(word){

let item=document.createElement("li");

item.innerHTML=

word.english+" = "+word.italian;

review.appendChild(item);

});

}

document.getElementById("answer").addEventListener(

"keypress",

function(event){

if(event.key==="Enter"){

checkAnswer();

}

}

);

nextWord();
