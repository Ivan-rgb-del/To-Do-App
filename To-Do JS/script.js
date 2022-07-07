const input = document.querySelector('.input');
const submitBtn = document.querySelector('.btn1');
const clearBtn = document.querySelector('.btn2');
const todoList = document.querySelector('.todo-list');
const alertText = document.querySelector('.alert');
const chooseOption = document.querySelector('.filter-todo');

submitBtn.addEventListener('click', addTodo);
clearBtn.addEventListener('click', removeTodos);
chooseOption.addEventListener('click', takeOption)

function addTodo(e) {
    // Prevent
    e.preventDefault();

    // Make DIV
    const todoDiv = document.createElement('div');
    todoDiv.className = 'todo';

    // Make LI
    const todoLi = document.createElement('li');
    todoLi.className = 'todo li';
    todoLi.innerHTML = input.value;
    todoDiv.appendChild(todoLi);

    // Make check button
    const checkBtn = document.createElement('button');
    checkBtn.className = 'check-btn';
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';
    checkBtn.addEventListener('click', event => {
        todoLi.style.textDecoration = 'line-through';
        todoDiv.style.opacity = '0.5';
    });
    todoDiv.appendChild(checkBtn);

    // Make false button
    const falseBtn = document.createElement('button');
    falseBtn.className = 'false-btn';
    falseBtn.innerHTML = '<i class="fas fa-trash"></i>';
    falseBtn.addEventListener('click', event => {
        alert(
            'Deleted',
            'grey',
            'white',
            '5px'
        );
        todoDiv.remove();
    });
    todoDiv.appendChild(falseBtn);

    // Make a empty field
    input.value = '';

    // Append all items
    todoList.appendChild(todoDiv);

    // If field isn't empty or have less the 15 characters
    if (todoLi.innerHTML !== '' && todoLi.innerHTML.length <= 15) {
        alert(
            'Succesufuly added!',
            'green',
            'white',
            '5px'
        );
    }

    // If field have more than 15 characters
    else if (todoLi.innerHTML.length > 15) {
        alert(
            'Max character is 15!',
            'red',
            'white',
            '5px'
        );
        todoDiv.remove();
    }

    // If field is empty
    else if (todoLi.innerHTML == '') {
        alert(
            'Please fill empty field!',
            'red',
            'white',
            '5px'
        );
        todoDiv.remove();
    }
}


function removeTodos() {
    // Remove one todo from list
    todoList.childNodes[0].remove();

    // Message that I removed one item
    alert(
        'You deleted one item!',
        'red',
        'white',
        '5px'
    );
}

// For all Alerts
function alert(text, background, color, padding) {
    alertText.innerHTML = text;
    alertText.style.background = background;
    alertText.style.color = color;
    alertText.style.padding = padding;
}