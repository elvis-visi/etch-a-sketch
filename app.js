//create 16x16 grid of divs

//place the grid squares inside container div from index.html

const container = document.querySelector('#container');


//hover effect that grid divs change color 

//event lsitener for when you enter and leave a div?

//changing the div’s background color using JavaScript.

function mouseEvent(event) {

    if(event.type == 'mouseover')
    {
        event.target.style.backgroundColor = 'blue';
    }
    if (event.type == 'mouseout') {
        event.target.style.backgroundColor = 'white'
      }

}


for(let i =  1; i < 257; i++)
{
    let div = document.createElement('div');  
    div.textContent= `div ${i}`  

    div.addEventListener('mouseover' , mouseEvent)
    

    //add a class for default/mouseout 

    div.addEventListener('mouseout' , mouseEvent)

    container.appendChild(div);  
}