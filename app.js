
const container = document.querySelector('#mainContainer')

const grid = document.createElement('div');
grid.classList.add('gridContainer')

//16x16 grid 
for(let i = 0; i< 256; i++)
{
    const cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell);


    //add mouseover event listener to change cell color
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'black';
    })

    cell.addEventListener('mouseout', () => {
        cell.style.backgroundColor = 'white';
    });
}

container.appendChild(grid);