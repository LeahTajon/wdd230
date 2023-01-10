const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list')

button.addEventListener('click', () => {
    if (input.value != '') {
        const chapter = input.value;

        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = chapter;
        deleteButton.textContent = '❌';

        li.appendChild(deleteButton);
        list.appendChild(li);

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });

    } else {
        input.focus();
    }
    
    input.focus();
    input.value = '';
});