//create 16x16 grid of divs

//place the grid squares inside container div from index.html

const container = document.querySelector('#container');
const divMain =  document.createElement('div')
divMain.classList.add('divMain')

function mouseEvent(event) {

    if(event.type == 'mouseover')
    {
        event.target.style.backgroundColor = 'blue';
    }
    if (event.type == 'mouseout') {
        event.target.style.backgroundColor = 'white'
      }

}

container.appendChild(divMain);

const button = document.querySelector('#btn');
button.classList.add('btn');

//initial grid 16x16
generateGrid(16)


//prompt for square numbers

//if > 100, prompt again 0-100 choice

//save prompt return to a variable.

//remove existing grid, new grid generated

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

/*for(let i =  1; i < 257; i++)
{
    let div = document.createElement('div');  
    div.textContent= `div ${i}`  

    div.addEventListener('mouseover' , mouseEvent)
    
    //add a class for default/mouseout 

    div.addEventListener('mouseout' , mouseEvent)

    divMain.appendChild(div);  
}
*/