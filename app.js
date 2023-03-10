
const container = document.querySelector('#mainContainer')

const grid = document.createElement('div');
grid.classList.add('gridContainer')

const options = document.createElement('div');
options.classList.add('optionsContainer')

const button1 = document.createElement('button');
button1.textContent = 'Erase';
const button2 = document.createElement('button');
button2.textContent = 'Color';
const button3 = document.createElement('button');
button3.textContent = 'Random';



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

       
    }



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
options.appendChild(button);
options.appendChild(button1);
options.appendChild(button2);
options.appendChild(button3);


