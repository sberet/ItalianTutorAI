const words=[

{english:"Hello",italian:"ciao"},
{english:"Good Morning",italian:"buongiorno"},
{english:"Good Evening",italian:"buonasera"},
{english:"Thank You",italian:"grazie"},
{english:"Please",italian:"per favore"},
{english:"Water",italian:"acqua"},
{english:"Bread",italian:"pane"},
{english:"Wine",italian:"vino"},
{english:"Friend",italian:"amico"},
{english:"Family",italian:"famiglia"}

];

let remaining=[...words];

let score=0;

let totalAsked=0;

let currentWord;

function nextWord(){

if(remaining.length===0){

document.getElementById("englishWord").innerHTML="Lesson Finished!";

document.getElementById("result").innerHTML=
"🏆 Final Score: "+score+" / "+words.length;

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

let user=document.getElementById("answer").value
.toLowerCase()
.trim();

let result=document.getElementById("result");

if(user===currentWord.italian){

score++;

result.className="correct";

result.innerHTML="✅ Correct!";

}
else{

result.className="incorrect";

result.innerHTML=
"❌ Correct answer: "+currentWord.italian;

}

totalAsked++;

document.getElementById("score").innerHTML=
"Score: "+score+" / "+totalAsked;

let percent=(totalAsked/words.length)*100;

document.getElementById("progressBar").style.width=
percent+"%";

}

document.getElementById("answer").addEventListener("keypress",

function(event){

if(event.key==="Enter"){

checkAnswer();

}

});

nextWord();
