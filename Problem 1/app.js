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

let day = prompt("Meeting Schedule for the day:")

switch (day) { 
    case 'Monday': 
    console.log("Office Meeting")
    break;
    case 'Tuesday':
        console.log("Family Dinner")
        break;
        case 'Wednesday':
            console.log("School Meeting")
            break;
            case 'Thursday':
                console.log("Dentise")
                break;
                case 'Friday':
                    console.log("Meeting With Friends")
                    break;
                    case 'Saturday':
                        console.log("Attend Event")
                        break;
                        case 'Sunday':
                            console.log("Spend Time with Family")
                            break;
                            default:
                                console.log("Invalid Day. First Word Should Be Capital")
                                break;
}
