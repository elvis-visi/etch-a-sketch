
const container = document.querySelector('#mainContainer')

const grid = document.createElement('div');
grid.classList.add('gridContainer')

//16x16 grid 
for(let i = 0; i< 256; i++)
{
    const cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell);
}

container.appendChild(grid);