
const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const correctAns = num1 * num2;
const scoreEl = document.getElementById("score")


let score = JSON.parse(localStorage.getItem("score"));
questionEl.innerText = `What is ${num1} multiply by ${num2}?`;
scoreEl.innerText = `Score: ${score}`;

if(!score){
   scoreEl.innerText = "Score: 0";
}

formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value;
    if(userAns === correctAns){
        score++;
        updateStorage()
    }
    else{
        score--;
        updateStorage()
    }
});

function updateStorage(){
  localStorage.setItem("score", JSON.stringify(score));
}
















