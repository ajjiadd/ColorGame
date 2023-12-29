var numSquare = 6;
var displayColorCode = document.querySelector(".displayColorCode");
var square = document.querySelectorAll(".square");
var message = document.querySelector(".message");
var header = document.querySelector(".header");
var newColor = document.querySelector("#reset");
var easybtn = document.querySelector("#easy");
var hardbtn = document.querySelector("#hard");


hardbtn.addEventListener("click", function(){
    //add & remove class from css 
    this.classList.add("selected");
    easybtn.classList.remove("selected");

    numSquare = 6;

    //generate new colors
    color = randomColorGenerate(numSquare);

    //picked color
    pikedcolor = color[randomNumber()];

    //display color
    displayColorCode.textContent = pikedcolor;

    //display the generate color
    for(var i = 0; i < square.length; i++){
        square[i].style.backgroundColor = color[i];
        square[i].style.display = "block";
    };
});

easybtn.addEventListener("click", function(){
    //add & remove class from css
    this.classList.add("selected");
    hardbtn.classList.remove("selected");
    numSquare = 3;

    //generate new colors
    color = randomColorGenerate(numSquare);

    //picked color
    pikedcolor = color[randomNumber()];

    //display color
    displayColorCode.textContent = pikedcolor;

    //showed only 3 square
    for(var i = 0; i < square.length; i++){
        if(color[i]){
            square[i].style.backgroundColor = color[i];
        }else{
            square[i].style.display = "none";
        }
    };
    
});

//random 6 rgb color generator function call
var color = randomColorGenerate(6);
   

var pikedcolor = color[randomNumber()];
displayColorCode.textContent = pikedcolor;

//reset Button
newColor.addEventListener("click", function(){
    
    //generate new colors
    color = randomColorGenerate(numSquare);

    //picked color
    pikedcolor = color[randomNumber()];

    //display color
    displayColorCode.textContent = pikedcolor;

    //display the generate color
    for(var i = 0; i < square.length; i++){
        square[i].style.backgroundColor = color[i];
    };

    //btn-text change
    newColor.textContent = "New Colors";

    //correct message unseen
    message.textContent = "";
});


for(var i = 0; i < square.length; i++){
    square[i].style.backgroundColor = color[i];

    square[i].addEventListener("click", function(){
        // alert("you clicked inside the box");
        var choosenColor = this.style.backgroundColor;
        //work-conditon
        if (choosenColor === pikedcolor){
            // alert("you are right");
            
            newColor.textContent = "Play Again!!";

            header.style.backgroundColor = pikedcolor;      //change the BG color
            message.textContent = "Correct!";              //show the message
            macthColor(pikedcolor);                       //call the function
        }else{
            // alert("try again");
            message.textContent = "Try Again!";
            //change the color of square
            this.style.backgroundColor = "rgb(97, 199, 222)";                   //remove the square
        }
    });

}
//color match and all the square are change
function macthColor(color){
    for(var i = 0; i < square.length; i++){
        square[i].style.backgroundColor = color;
    }
}

//generate the random color
function randomNumber(){
   var randomValue = Math.floor(Math.random() * color.length);
   return randomValue;

};

function randomColorGenerate(number){
    var color = [];
    for(var i=0 ; i<number ; i++) {
        var r = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
        var randomColorF = "rgb"+"(" +r+", "+g+", "+b+")";
        color.push(randomColorF);
    };
    return color;
};
