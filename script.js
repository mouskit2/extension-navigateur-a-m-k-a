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

btnLeft.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: {
        tabId: tabs[0].id,
      },
      function: makePageBlack,
    });
  });
});

function endEvent() { 
  todoApp.style.display = 'block';
  eventTask.style.display = 'none';

}

btnRight.addEventListener("click", function (e) {
  endEvent()
});

function makePageBlack() {
  document.body.style.backgroundColor = "black";
}
function taskEvent(){
  console.log("taskEvent running");
  todoApp.style.display = 'none';
  eventTask.style.display = 'block';

  } 

function playGameEvent() { 
   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: {
        tabId: tabs[0].id,
      },
      function: makePageBlack,
    });
  });
}

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
showTask();
