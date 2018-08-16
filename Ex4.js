//prompt the user. and put if statements in my functions to run through each one
var favNum = prompt("What's your favorite number?");

alert(favNum);

function aboveOrBelow100(){
    if(favNum===0){
        alert("It's 100");
    }
    else if(favNum<100){
        alert("Below 100");
    }
    else if(favNum>100){
        alert("Above 100");
    }
}

aboveOrBelow100();