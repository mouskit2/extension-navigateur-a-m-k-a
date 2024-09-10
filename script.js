const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector(".list-container");
const textError = document.querySelector(".text-error");
const buttonAdd = document.querySelector(".button-add");
const todoApp = document.querySelector('.todo-app');
const btnRight = document.querySelector('.buttonRight');
const btnLeft = document.querySelector('.buttonLeft');
const container = document.querySelector('.container');
const eventTask = document.querySelector('.eventTask');
let taskCount;

buttonAdd.addEventListener("click", addTask);
inputBox.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  if (inputBox.value === "") {
    textError.innerText = "You must write something!";
    // alert('You must write something!');
  } else {
    textError.style.display = "none";
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    // let com = document.createElement('input');
    // com.classList.add('comment');
    // li.appendChild(com);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

function endEvent() { 
  todoApp.style.display = 'block';
  eventTask.style.display = 'none';

}

btnRight.addEventListener("click", function (e) {
  endEvent()
});

function taskEvent(){
  console.log("taskEvent running");
  todoApp.style.display = 'none';
  eventTask.style.display = 'block';
  //playGameEvent();

  }

function playGame() {
  function addStyles(element,styles){
    for(let id in styles){
      element.style[id] = styles[id];
    }
  }
  let gameDiv = document.createElement('div');
  gameDiv.innerHTML = `
  <div id="lien">
      <a id="collect" href="http://www.google.com" target="_blank">LIEN GOOGLE</a>
  </div>
  <div id="filtre-noir"></div>
  <!-- <div class="cursor"></div> -->
  <script src="/Test CSS/script-test.js"></script>
  `;
  document.body.appendChild(gameDiv);

  let nFilter = document.getElementById('filtre-noir');
  let styles = {
    position: "absolute",
    width: "200%",
    height: "200vh",
    backgroundColor: "black",
    pointerEvents: "none",
    top: "0px",
    left:"0px",
    zindex:"995",
    transform: "translateX(-50%) translateY(-50%)",
    maskPosition: "2px 23px",
    maskOrigin: "pointer",
    maskImage: "radial-gradient(circle, transparent 2%, black 5%)"
  }
  addStyles(nFilter,styles);

  let collect = document.getElementById('collect');
  let a_style = {
    position: "relative"
  }
  addStyles(collect,a_style);

  const bodyFiltre = document.querySelector('body')
  bodyStyle = {
    /* z-index: 2; */
    backgroundcolor: "yellow",
    display: "flex",
    position: "relative"
  }
  addStyles(bodyFiltre,bodyStyle);

  let lien = document.getElementById('lien');
  let lien_style = {
    position: "absolute",
    top: "0px",
    left: "0px",
    zindex:"999"
  }
  addStyles(lien,lien_style);


  function moveMask() {

    document.addEventListener('mousemove', function (m) {
        // let position = filtre.getBoundingClientRect();

        nFilter.style["mask-position"] = m.clientX + 'px ' + m.clientY + 'px'

    })
  };
  moveMask()
}

btnLeft.addEventListener("click", () => {
  todoApp.style.display = 'block';
  eventTask.style.display = 'none';
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: {
        tabId: tabs[0].id,
      },
      function: playGame,
    });
  });
});

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      if (e.target.classList.contains("checked")) {
        if (taskCount > 0) {
          taskCount--;
        }
      } else {
        taskCount++;
      }
      e.target.classList.toggle("checked");
      // TOGGLE permet de vérifier si il y'a un mot ou pas.
      if (taskCount >= 5) {
        console.log("vous avez atteint la limite de 5 tâches.");
        taskCount = 0;
        taskEvent();
      }
      console.log(taskCount);

      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
  localStorage.setItem("count", taskCount.toString());
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
  const localCount = localStorage.getItem("count");
  taskCount = localCount ? parseInt(localCount) : 0;
}

function updateDisplay() { 
  showTask();
}

function refreshLoop() { 
  updateDisplay()

  setInterval(updateDisplay, 2000);
}

showTask();
document.addEventListener('DOMContentLoaded', refreshLoop);
