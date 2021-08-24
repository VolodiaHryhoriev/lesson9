let writeTask = document.querySelector('.writeTask')
let pageLimit = 5;
let counter = 1

document.getElementById('add').addEventListener('click', () => {
if (writeTask.value !== '') {
for (let i = 1; i < pageLimit; i++ ) {
let parentDiv = document.querySelector('.list');
let newDiv = document.createElement('div');


newDiv.innerHTML = `<input type="button" id="remove${counter}"><span id="removeSpan${counter}">${writeTask.value}</span>`;
parentDiv.appendChild(newDiv);

writeTask.value = '';
counter++
document.getElementById('remove1').addEventListener('click', () => {
    if (parentDiv.children !== 'remove1') {
     document.getElementById(`remove1`).remove()
     document.getElementById(`removeSpan1`).remove() 
    } else {
        alert('Останній таск зі списку Ви не можете видалити')
    } 
})
document.getElementById('remove2').addEventListener('click', () => {
    document.getElementById(`remove2`).remove()
    document.getElementById(`removeSpan2`).remove()  
})
document.getElementById('remove3').addEventListener('click', () => {
    document.getElementById(`remove3`).remove()
    document.getElementById(`removeSpan3`).remove()  
})
document.getElementById('remove4').addEventListener('click', () => {
    document.getElementById(`remove4`).remove()
    document.getElementById(`removeSpan4`).remove()  
})
document.getElementById('remove5').addEventListener('click', () => {
    document.getElementById(`remove5`).remove()
    document.getElementById(`removeSpan5`).remove()  
})


}
} else {
    alert('Пусте поле не можна добавити');
}})