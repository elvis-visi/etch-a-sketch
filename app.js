//create 16x16 grid of divs
const container = document.querySelector('#container');
const divMain =  document.createElement('div')
divMain.classList.add('divMain')

//mouseOver/ mouseOut events
function mouseEvent(event) {

    if(event.type == 'mouseover')
    {


        let red = randomColor();
        let blue = randomColor();
        let green = randomColor(); 

        console.log(red)

        event.target.style.backgroundColor = 
        `rgb(${red},${green},${blue})`;
    }
   /* if (event.type == 'mouseout') {
        event.target.style.backgroundColor = 'white'
      }
      */

}

//random rgb color
function randomColor()
{
    return Math.floor(Math.random() * 255) + 1;
}

container.appendChild(divMain);

const button = document.querySelector('#btn');
button.classList.add('btn');

//initial grid 16x16
generateGrid(16)


//get grid Number
function gridNumber() {

    let gridNumber = -1;  
    while(gridNumber < 1 || gridNumber > 100 )
    {
       gridNumber =  prompt('Number of squares per side');
    }

    //remove current grid, remove all children of divMain
    let parent = document.querySelector('.divMain');
    console.log("parent", parent)
    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    }

    //add new grid
    generateGrid(gridNumber)
}

//button which asks for grid number
button.addEventListener('click',gridNumber)

function generateGrid(gridNumber)
{

    //grid-template-columns: repeat(  16, 1fr);
    divMain.style.cssText = `grid-template-columns: repeat(  ${gridNumber}, 1fr);`
    for(let i =  1; i < gridNumber * gridNumber + 1; i++)
{
    let div = document.createElement('div');  
    div.textContent= `div ${i}`  

    div.addEventListener('mouseover' , mouseEvent)
     //add a class for default/mouseout 
    div.addEventListener('mouseout' , mouseEvent)
    divMain.appendChild(div);  
}
}
