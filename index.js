function calcAvg(){

  
  const sub1Element = document.getElementById("sub1");
  const sub2Element = document.getElementById("sub2");
  const sub3Element = document.getElementById("sub3");
  const sub4Element = document.getElementById("sub4");
  const sub5Element = document.getElementById("sub5");
  const sub6Element = document.getElementById("sub6");
  const sub7Element = document.getElementById("sub7");
  const sub8Element = document.getElementById("sub8");
  const sub9Element = document.getElementById("sub9");
  const sub1 = Number(sub1Element.value);
  const sub2 = Number(sub2Element.value);
  const sub3 = Number(sub3Element.value);
  const sub4 = Number(sub4Element.value);
  const sub5 = Number(sub5Element.value);
  const sub6 = Number(sub6Element.value);
  const sub7 = Number(sub7Element.value);
  const sub8 = Number(sub8Element.value);
  const sub9 = Number(sub9Element.value);

  const avg = ( sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 +sub8 +sub9)/ 9;

 
  const resultElement = document.getElementById("result");
  resultElement.style.display = " block"
  const scoreElement = document.getElementById("score");
  scoreElement.textContent = avg.toFixed(2) ;

}