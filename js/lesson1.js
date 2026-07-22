const words = [

{english:"Hello",italian:"ciao"},
{english:"Good Morning",italian:"buongiorno"},
{english:"Good Evening",italian:"buonasera"},
{english:"Thank You",italian:"grazie"},
{english:"Please",italian:"per favore"},
{english:"Yes",italian:"si"},
{english:"No",italian:"no"},
{english:"Water",italian:"acqua"},
{english:"Bread",italian:"pane"},
{english:"Wine",italian:"vino"}

];

let current = 0;

let score = 0;

function showQuestion(){

document.getElementById("englishWord").innerHTML =
words[current].english;

document.getElementById("answer").value="";

document.getElementById("answer").focus();

}

function checkAnswer(){

let user =
document.getElementById("answer")
.value
.toLowerCase()
.trim();

let correct =
words[current].italian;

if(user===correct){

score++;

document.getElementById("result").innerHTML =
"✅ Correct!";

}
else{

document.getElementById("result").innerHTML =
"❌ Correct answer: " + correct;

}

current++;

document.getElementById("score").innerHTML =
"Score: " + score + " / " + current;

if(current>=words.length){

document.getElementById("englishWord").innerHTML =
"Lesson Finished!";

document.getElementById("result").innerHTML =
"🏆 Final Score: " +
score +
" / " +
words.length;

return;

}

setTimeout(showQuestion,1200);

}

showQuestion();
