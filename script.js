const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('.list-container');
const textError = document.querySelector('.text-error');
const buttonAdd = document.querySelector('.button-add');
let taskCount;

buttonAdd.addEventListener("click", addTask);
inputBox.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
})

function addTask() {

    if (inputBox.value === '') {
        textError.innerText = 'You must write something!';
        // alert('You must write something!');
    } else {
        textError.style.display = 'none';
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // let com = document.createElement('input');
        // com.classList.add('comment');
        // li.appendChild(com);

        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span)
    }
    inputBox.value = "";
    saveData();
};

document.getElementById("darkenPage").addEventListener("click", ()=> {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) =>{
        chrome.scripting.executeScript({ 
            target: {
                tabId: tabs[0].id},
                function: makePageBlack
        });
        });
        });


function makePageBlack() {
    document.body.style.backgroundColor = "black";
}



listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }

}, false);

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
    localStorage.setItem('count', taskCount.toString());
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
    const localCount = localStorage.getItem('count')
    taskCount = localCount ? parseInt(localCount) : 0;
}
showTask() 