//Question 1

let age =prompt("What is your age?")
if (age>10 && age<20){
    console.log("You are a teenager");
    } else {
        console.log("You are not a teenager");
 }

//Question 2

let a = 1
let b = 2
let  c = 3
let d = 4
let e = 5
let sum = a + b + c + d + e

console.log(sum)

//Question 3

//Switch  statement

let day = 3
switch (day) { 
    case 1: 
    console.log("Monday")
    break;
    case 2:
        console.log("Tuesday")
        break;
        case 3:
            console.log("Wednesday")
            break;
            case 4:
                console.log("Thursday")
                break;
                case 5:
                    console.log("Friday")
                    break;
                    case 6:
                        console.log("Saturday")
                        break;
                        case 7:
                            console.log("Sunday")
                            break;
                            default:
                                console.log("Invalid day")
                                break;
}
