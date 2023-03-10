
const container = document.querySelector('#mainContainer')

const grid = document.createElement('div');
grid.classList.add('gridContainer')

const options = document.createElement('div');
options.classList.add('optionsContainer')

const eraser = document.createElement('button');
eraser.textContent = 'Erase';
const color = document.createElement('button');
color.textContent = 'Color';
const button3 = document.createElement('button');
button3.textContent = 'Random';

const clear = document.createElement('button');
clear.textContent = 'Clear';



let eraserActive = false;
let colorActive = true;

// Set the active button flag and add event listeners to the buttons
eraser.addEventListener('click', () => {
    eraserActive = true;
    colorActive = false;
    eraser.classList.add('active');
    color.classList.remove('active');
});

color.addEventListener('click', () => {
    eraserActive = false;
    colorActive = true;
    color.classList.add('active');
    eraser.classList.remove('active');
});

// Set the Color button as active by default
color.classList.add('active');


// new grid, erase, color, random, clear
container.appendChild(options);



//default grid size 0
let gridSize = 16;
generateGrid() 

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

        //initial cell that we click on changes color
        cell.addEventListener('mousedown', () => {
        cell.style.backgroundColor = 'black';
          });

    
        //event.buttons equals 1, it means that only the left mouse button is being pressed.
        //while left mouse is pressed, change the color of the cells to black
        cell.addEventListener('mouseover', (event) => {
            if (event.buttons === 1) { // 1 indicates left mouse button pressed
              cell.style.backgroundColor = 'black';
            }
          });

          cell.addEventListener('mouseover', event => {
            if (eraserActive) {
              cell.style.backgroundColor = 'white';
            } else if (event.buttons === 1) {
              cell.style.backgroundColor = 'black';
            }
        });
       
    }

    container.appendChild(grid);

}

generateGrid()


// Add button to the top of the screen prompting grid size up to 100x100
const newGrid = document.createElement('button');
newGrid.textContent = 'New Grid';

newGrid.addEventListener('click', ()=> {
    //prompt user for grid dimension

    let input = prompt('Enter number of squares per side(max 100):');
    if(input && input <=100 && input >= 1) {
        gridSize = input;
        generateGrid();
    }

});

//add button before the grid
options.appendChild(newGrid);
options.appendChild(eraser);
options.appendChild(color);
options.appendChild(button3);
options.appendChild(clear);



