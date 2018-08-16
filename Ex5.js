//ran a for loop to get it to count to the user's input
var numArray = [1,2,3,4,5];

var userInput = parseInt(prompt("How may elements from the array to print?"));

for(i=0; i<userInput; i++){
    console.log(numArray[i]);
}

if (userInput> numArray.length){
    alert("Error!");
}
