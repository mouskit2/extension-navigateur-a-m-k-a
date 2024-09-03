const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('.list-container');
const textError = document.querySelector('.text-error');

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
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask() 