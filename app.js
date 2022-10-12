//create 16x16 grid of divs

//place the grid squares inside container div from index.html

const container = document.querySelector('#container');



for(let i =  1; i < 257; i++)
{
    let div = document.createElement('div');  
    div.textContent= `div ${i}`  

   

    container.appendChild(div);  
}