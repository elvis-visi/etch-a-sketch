
const container = document.querySelector('#mainContainer')

const grid = document.createElement('div');
grid.classList.add('gridContainer')


//default grid size 0
let gridSize = 0;


function generateGrid() {

    //check if the grid element has any child elements, remove them if it does
    while(grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    //add cols and rows template to grid
     grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
     grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

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

    //cells take the whole space of the grid container
    const cells = document.querySelectorAll('.gridContainer div');
    cells.forEach(cell => {
        cell.style.height = `calc(100vh / ${gridSize})`;
        cell.style.width = `calc(100vw / ${gridSize})`;
});

    container.appendChild(grid);

}

generateGrid()


// Add button to the top of the screen prompting grid size up to 100x100
const button = document.createElement('button');
button.textContent = 'New Grid';

button.addEventListener('click', ()=> {
    //prompt user for grid dimension

    let input = prompt('Enter number of squares per side(max 100):');
    if(input && input <=100 && input >= 1) {
        gridSize = input;
        generateGrid();
    }

});

//add button before the grid
container.insertBefore(button,grid);


