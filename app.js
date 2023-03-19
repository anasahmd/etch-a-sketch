const container = document.getElementById('container');
const customGridBtn = document.getElementById('custom-grid-btn');

const gridGenerate = (size) => {
  container.innerHTML = '';
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    container.appendChild(div);
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  }

  const gridItems = document.querySelectorAll('.grid-item');

  for (let gridItem of gridItems) {
    gridItem.addEventListener('mouseover', () => {
      gridItem.style.backgroundColor = 'black';
    });
  }
};

gridGenerate(16);

customGridBtn.addEventListener('click', () => {
  let size = window.prompt('Enter grid size');
  if (size <= 100) {
    gridGenerate(size);
  } else {
    window.alert('Maximum size is 100');
  }
});
