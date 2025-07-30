 async function blinkbot(elementid,perfix="Loading",cycle=3,maxDot=5,interval=500){
  const el=document.getElementById(elementid);
  let count=0;
  const intervala=setInterval(()=>{
    count++;
    const dots=".".repeat(count%maxDot);
    el.textContent=perfix+dots;
    if(count===cycle*maxDot){
      clearInterval(intervala);
    }
  },interval)

}
setTimeout(()=>{

blinkbot("h2"," initializing hacking simulator....",3,5,500);
},2000)
setTimeout(()=>{

blinkbot("p1","  Reading your Files....",3,5,500);

},5000)
setTimeout(()=>{
blinkbot("p2"," password files Detected",3,5,500);

},9000)
setTimeout(()=>{
blinkbot("p3"," Sending all passwords and personal files to sever...",3,5,500);

},12000)
setTimeout(()=>{
blinkbot("p4"," cleaning up...",3,5,500);
alert("your all file is corrupted")
alert("your all file deleting start")
},15000)

async function colori(i) {
  setTimeout(()=>{
  let color=["green","red","black","green","red","black","green","red","black","green","red","black","green","red","black","green","red","black","green","red","black","green","red","black","green","red","black","green","red","black","green","red","black","green","red","black","green","red","black","green","red","black","green","red","black","green","red","black","green","red","black","green","red","black","green","red","black","green","red","black","green","red","black","green","red","black","green","red","black","green","red","black","green","red","black","green","red","black","green","red","black","green","red","black","green","red","black",]
  let x=document.body.style.backgroundColor=color[i]
  console.log(document.body.style.backgroundColor) 
  console.log(i)
  const sound= new Audio('radio_beep.mp3')
  sound.play()
},16000+(250*i))
}
async function looping() {
  let m=30
 for(i=0;i<m;i++){

await colori(i)
}
}
looping()








