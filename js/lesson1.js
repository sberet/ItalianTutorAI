const w=[['Hello','ciao'],['Thank You','grazie']];let i=0,s=0;
function sh(){word.textContent=w[i][0];ans.value='';}
function check(){msg.textContent=(ans.value.toLowerCase()==w[i][1])?'✅ Correct':'❌ '+w[i][1];if(ans.value.toLowerCase()==w[i][1])s++;i++;
score.textContent=`Score: ${s}/${i}`;if(i<w.length)sh();else word.textContent='Finished';}sh();
