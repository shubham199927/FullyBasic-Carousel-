var image =  document.createElement('img');



var array = ["./assets/1.jpg","./assets/2.jpg","./assets/3.jpg","./assets/4.jpg","./assets/5.jpg","./assets/6.jpg"]
 




var leftArrow = document.createElement('div');
leftArrow.className = "leftArrow";
leftArrow.id = "left";
leftArrow.style.height = "50px";
leftArrow.style.width = "50px";
leftArrow.style.backgroundColor = "red";
var rightArrow = document.createElement('div');
rightArrow.className = "rightArrow";
rightArrow.id = "right";
rightArrow.style.height = "50px";
rightArrow.style.width = "50px";
rightArrow.style.backgroundColor = "red";



document.querySelector('.holder').appendChild(rightArrow);

document.querySelector('.holder').appendChild(image);
document.querySelector('.holder').appendChild(leftArrow);


i = 0;
var value = array[i];
image.src= value;

document.getElementById("left").addEventListener('click', e => {
      
         i++;
if (i> array.length-1){
  i= 0;
}
     var value = array[i];
       image.src= value;
       
       
        console.log(value);
        console.log(i);
  
  
   
});



document.getElementById("right").addEventListener('click', ev => {
  
  i--;
    if (i < 0) {
        i = array.length - 1; // Set index to the last image
    }
    var value = array[i];
    image.src = value;
    console.log(value);
    console.log(i);
  
});