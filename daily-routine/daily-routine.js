let scoreChecker = (e) => {
  e.preventDefault();
  let score = 0;

  if(document.getElementById('yesWake').checked){
    score += 2;
  }
  else {
    score += 0;
  }
  
  if(document.getElementById('yesWashBrush').checked){
    score += 2;
  }
  else {
    score += 0;
  }
  
  if(document.getElementById('yesExercise').checked){
    score += 2;
  }
  else {
    score += 0;
  }
  
  if(document.getElementById('yesBath').checked){
    score += 2;
  }
  else {
    score += 0;
  }
  
  if(document.getElementById('yesBreakfast').checked){
    score += 2;
  }
  else {
    score += 0;
  }
  
  if(document.getElementById('yesOffice').checked){
    score += 2;
  }
  else {
    score += 0;
  }
  
  if(document.getElementById('yesDinner').checked){
    score += 2;
  }
  else {
    score += 0;
  }
  
  if(document.getElementById('yesSleep').checked){
    score += 2;
  }
  else {
    score += 0;
  }

  document.getElementById('result').innerHTML = score+'/16 scored';
  if(score >-1){
    let z = new Date();
    let z1 = `${z.getHours()}:${z.getMinutes()}:${z.getSeconds()}`;
    localStorage.setItem(z1,score);
    document.getElementById('graphDisplayer').disabled = false;
  }
}

function chartMaker(){
  var keyValueArray = [];
  for (let i = 0; i < localStorage.length; i++){
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    keyValueArray.push({key: key, value: value})
  }
  keyValueArray.sort((a,b)=> a.key.localeCompare(b.key));
  console.log(keyValueArray);
}

let x = document.getElementById('routineForm');
x.addEventListener('submit',scoreChecker);
x.addEventListener('reset',() => {
  document.getElementById('result').innerHTML = '';
})

let y = document.getElementById('graphDisplayer');
y.addEventListener('click',chartMaker);