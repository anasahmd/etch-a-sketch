const container = document.getElementById('container');

let size = 16;

for (let i = 0; i < size * size; i++) {
  const div = document.createElement('div');
  div.classList.add('grid-item');
  container.appendChild(div);
}

const gridItems = document.querySelectorAll('.grid-item');

for (let gridItem of gridItems) {
  gridItem.addEventListener('mouseover', () => {
    console.log('hello');
    gridItem.style.backgroundColor = 'black';
  });
}
