// document.addEventListener('DOMContentLoaded', () => {
//     let addCount = document.getElementById('counter')
//     
// })
var addCounter = document.getElementById('counter')

let Minus = document.getElementById('minus')
let Add = document.getElementById('plus')
let loveHeart = document.getElementById('heart')
let Pause = document.getElementById('pause')
const form = document.getElementById("comment-form");
const comments = document.createElement("ul");
document.getElementById("list").append(comments);

//Counter
let i = 0;
let active = false;
let timer = createTimer();

function createTimer() {
  active = true;
  return setInterval(() => {
    i += 1;
    addCounter.innerText = i;
  }, 1000);
}


//minus
Minus.addEventListener('click', () => {
    var parInt = parseInt(addCounter.innerText)
    addCounter.innerText = parInt - 1;
})

//add
Add.addEventListener('click', () => {
    var parInt = parseInt(addCounter.innerText)
    addCounter.innerText = parInt + 1;
})

//loveHeart

loveHeart.addEventListener("click", () => {
    const lis = document.createElement("li");
    lis.textContent = `${i} has one like`;
    document.querySelector(".likes").append(lis);
  });

//Pause

Pause.addEventListener("click", () => {
    if (active) {
      clearInterval(timer);
      active = false;
      Pause.innerText = 'resume'
    } else if (!active) {
      timer = createTimer();
      Pause.innerText = 'pause'
    }
  });

//comment section

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = e.target.children[0];
    const li = document.createElement("li");
    li.textContent = input.value;
    comments.append(li);
    input.value = "";
  });