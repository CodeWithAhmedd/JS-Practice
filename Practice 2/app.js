//PRIMITIVES DATA TYPE IN JS
// NN BB SS U
// NULL NUMBER BOOLEAN BIGINT STRING SYMBOL UNDEFINED
let a = null
let b = 123
let c = true //can be false
let  d = BigInt("1234") -  BigInt("1234") //can be 0
let  e = "hello"
let f = Symbol('hello')
let g = undefined
console .log(a, b, c, d, e, f, g)
console.log(typeof  a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g)
//______________________________________________________________________

// NON -PRIMITIVE DATA TYPE IN JS
//Object in JS
//Object is a collection of key value pairs
//key is a string and value can be any data type
const item  = {
    "Ahmed" : true,
    "Rehman"  : false,
    "Anas"  : 45,
    "Basit"  : undefined,
}
console.log(item["Ahmed"])
console.log(item["Rehman"])
console.log(item["Anas"])
console.log(item["Basit"])
//______________________________________________________________________


// scope for var is functions
// scope for let and const is block
