let button = document.querySelector('button');
let div = document.querySelector('div');

div.style.display = 'none';

button.onclick = () => {
    div.style.display = 'block';
}
