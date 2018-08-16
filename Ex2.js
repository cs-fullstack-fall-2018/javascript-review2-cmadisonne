//used === in order to get "zero" alert to work. also went ahead and made prompt a parseint
//to treat it as an integer
var userNum= parseInt(prompt("Enter a number."));

if(userNum>0){
    alert("POSITIVE");
}
else if(userNum<0){
    alert("NEGATIVE");
}
else if(userNum===0){
    alert("ZERO");
}
else {
    alert("ERROR!");
}