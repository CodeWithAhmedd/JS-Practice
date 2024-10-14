let a = prompt("What Is Your Age?")
a = Number.parseInt(a) //Converting  the input to a number
// if(a>=18){
//     alert("You  Are Eligible To Vote");
//     } else {
//         alert("You Are Not Eligible To Vote");
// }
if(a<10){
    alert("Kiddo");
}
else if(a<=18){
    alert(" Stay Away");
}
else if(a<20  && a>18){
    alert("You May Now Eligible To Vote");
}
else{
    alert("You Can Obviously Vote");
}

console.log("You Can",a<18? "Not Drive": "Drive")