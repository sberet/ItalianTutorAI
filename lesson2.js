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
{english:"Family",italian:"famiglia"}];

let remaining=[...words],current=null,score=0,asked=0,answered=false;
function updateProgress(){
document.getElementById("score").textContent=`Score: ${score} / ${asked}`;
document.getElementById("remaining").textContent=`Words Remaining: ${remaining.length}`;
document.getElementById("progressBar").style.width=(asked/words.length*100)+"%";
}
function nextWord(){
if(remaining.length===0){
document.getElementById("englishWord").textContent="Lesson Complete!";
document.getElementById("result").textContent=`🏆 Final Score: ${score} / ${words.length}`;
return;}
const i=Math.floor(Math.random()*remaining.length);
current=remaining.splice(i,1)[0];
answered=false;
document.getElementById("submitBtn").disabled=false;
document.getElementById("englishWord").textContent=current.english;
document.getElementById("answer").value="";
document.getElementById("result").textContent="";
document.getElementById("answer").focus();
updateProgress();}
function checkAnswer(){
if(answered)return;
answered=true;
document.getElementById("submitBtn").disabled=true;
const user=document.getElementById("answer").value.trim().toLowerCase();
if(user===current.italian){
score++;
result.textContent="✅ Correct!";
result.style.color="green";
}else{
result.textContent="❌ Correct: "+current.italian;
result.style.color="red";
}
asked++;
updateProgress();
}
document.getElementById("answer").addEventListener("keydown",e=>{if(e.key==="Enter")checkAnswer();});
nextWord();
