let writeTask = document.querySelector('.writeTask')
let pageLimit = 5;
let counter = 1;
let parentDiv

document.getElementById('add').addEventListener('click', () => {

    parentDiv = document.querySelector('.list');
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `<input type="button" onclick="removeTask(event)" class="remove${counter}"><span class="remove${counter}">${writeTask.value}</span>`;
    parentDiv.appendChild(newDiv);
    writeTask.value = '';
    counter++

});

function removeTask(event) {
    if (parentDiv.children.length === 1) {
        alert('Останній таск зі списку Ви не можете видалити');
    } else {
        event.target.parentElement.remove();
    }
    console.log(parentDiv.children.length)
}