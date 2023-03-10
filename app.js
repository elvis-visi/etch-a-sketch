
const container = document.querySelector('#mainContainer')

const grid = document.createElement('div');
grid.classList.add('gridContainer')

const options = document.createElement('div');
options.classList.add('optionsContainer')

const eraser = document.createElement('button');
eraser.textContent = 'Erase';
const color = document.createElement('button');
color.textContent = 'Color';

const toggleLines = document.createElement('button');
toggleLines.textContent = 'Toggle Lines';
toggleLines.classList.add('toggleButton')

toggleLines.addEventListener('click', () => {
 
  grid.classList.toggle('no-border');
});

const clear = document.createElement('button');
clear.textContent = 'Clear';



let eraserActive = false;
let colorActive = true;
let clearActive = false;

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

//clear all cells 
clear.addEventListener('click', () =>{

    //Node List returned of all the elements which use cell as a class.
   const cells = document.querySelectorAll('.cell');

   cells.forEach(cell => {
    cell.style.backgroundColor = 'white';
   });

    eraserActive = false;
    colorActive = true;
    color.classList.add('active');
    eraser.classList.remove('active');

});

// Set the Color button as active by default
color.classList.add('active');


// new grid, erase, color, random, clear
container.appendChild(options);

let currentColor = '#000000'; // initialize with black as the default color

//create an input-type of color
const colorPicker = document.createElement('input');
colorPicker.type = 'color';
colorPicker.addEventListener('input', (event) => {
  currentColor = event.target.value;
});


//default grid size 50
let gridSize = 50;
generateGrid() 

const gridSizeSlider = document.querySelector('#grid-size');
const gridSizeValue = document.querySelector('#grid-size-value');

gridSizeSlider.addEventListener('input', (event) => {
  //value which appears below the slider
  gridSizeValue.value = event.target.value;

  //assigning actual dimensions of the grid 
  gridSize =  gridSizeValue.value;
  generateGrid() 

});





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

            if (eraserActive) {
                cell.style.backgroundColor = 'white';
              } else{
                cell.style.backgroundColor = currentColor;
              }
       
          });

    
        //event.buttons equals 1, it means that only the left mouse button is being pressed.
        //while left mouse is pressed, change the color of the cells to black
        cell.addEventListener('mouseover', (event) => {
            if (event.buttons === 1) { // 1 indicates left mouse button pressed
                if (eraserActive) {
                    cell.style.backgroundColor = 'white';
                  } else  {
                    cell.style.backgroundColor = currentColor;
                  }
            }
          });

       
    }

    container.appendChild(grid);

}

generateGrid()

//add button before the grid


options.appendChild(colorPicker);
options.appendChild(color);
options.appendChild(eraser);
//options.appendChild(button3);
options.appendChild(clear);

options.appendChild(document.createElement('br'));
options.appendChild(document.createElement('br'));
options.appendChild(document.createTextNode('Grid size(Resets current sketch)'));
options.appendChild(gridSizeSlider);
options.appendChild(gridSizeValue);
options.appendChild(toggleLines);



