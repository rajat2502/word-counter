let input = document.getElementById('text-input');
let lastPressed = '';
let lasttolast = '';
let c;
let char = 0;
let sent = 0;
let para = 0;
let words = 0;
let charElement = document.getElementById('characters');
let wordElement = document.getElementById('words');
let sentElement = document.getElementById('sentences');
let paraElement = document.getElementById('paragraphs');
let readingTimeElement = document.getElementById('reading-time');
let i;
// let str = input.value;

if(input.value == ''){
  charElement.innerText = 0;
  wordElement.innerText = 0;
  sentElement.innerText = 0;
  paraElement.innerText = 0;
}

window.addEventListener('keyup', function(){
  if(input.value == ''){
    charElement.innerText = 0;
    wordElement.innerText = 0;
    sentElement.innerText = 0;
    paraElement.innerText = 0;
  }
});

input.addEventListener('keyup', function(e){
  console.log(e.key);
  lastPressed = e.key;
  c = lastPressed;

  // character count
  char = input.value.length;

  //words count from stack overflow
  words = input.value.match(/\b[-?(\w+)?]+\b/gi).length;
  // sentence count
  sent = input.value.split('.');
  for(i=0;i<sent.length;i++){
    if(sent[i] == ' ' || sent[i] == ''){
      sent.splice(i,i);	
    }
  }
  // paragraph count
  para = input.value.split('\n');
  for(i=0;i<para.length;i++){
    if(para[i] == ""){
    para.splice(i,1);	
  }
  }
  for(i=0;i<para.length;i++){
    if(para[i] == ""){
    para.splice(i,1);	
  }
  }


  // reading time based on 275 words/minute
  if (words) {
    var seconds = Math.floor(words *  60 / 275);
    // need to convert seconds to minutes and hours
    if (seconds > 59) {
      var minutes = Math.floor(seconds / 60);
      seconds = seconds - minutes*60;
      readingTimeElement.innerText = minutes + "m "+ seconds + "s";
    } else {
      readingTimeElement.innerText = seconds + "s";
    }
  } else {
    readingTimeElement.innerText = "0s";
  }


  updateValues();
});

function updateValues(){
  charElement.innerText = char;
  wordElement.innerText = words;
  sentElement.innerText = sent.length;
  paraElement.innerText = para.length;
}