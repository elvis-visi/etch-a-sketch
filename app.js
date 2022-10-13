//create 16x16 grid of divs

//place the grid squares inside container div from index.html

const container = document.querySelector('#container');


//hover effect that grid divs change color 

//event lsitener for when you enter and leave a div?

//changing the div’s background color using JavaScript.


for(let i =  1; i < 257; i++)
{
    let div = document.createElement('div');  
    div.textContent= `div ${i}`  

    div.addEventListener('mouseover' , () => {
        div.style.backgroundColor = 'blue';
    })

    //add a class for default/mouseout 

    div.addEventListener('mouseout' , () => {
        div.style.backgroundColor = 'white';
    })

    container.appendChild(div);  
}