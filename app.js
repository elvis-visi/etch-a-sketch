
const container = document.querySelector('#mainContainer')

const grid = document.createElement('div');
grid.classList.add('gridContainer')


//default grid size 16
let gridSize = 16;

//generate new grid. 
function generateGrid() {

    //check if the grid element has any child elements, remove them if it does
    while(grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    //we empty the grid above, resetting it.

     // Generate new grid
        for(let i = 0; i< gridSize * gridSize; i++)
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

}

generateGrid()



