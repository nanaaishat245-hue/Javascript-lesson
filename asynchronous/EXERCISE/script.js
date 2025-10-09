function myDisplay (some) {
    return (some)
}

function number(add1, add2, myCallback) {

    let sum = add1 + add2
    return myCallback(sum)

}

const show = number(6, 8, myDisplay)
console.log(show);

//  Callback for multiplication
function input (multiply) {
    return `the result is ${multiply}`
}

function numbe(mult, mult2, Callback) {

    let num = mult * mult2
    return Callback(   num)

}
const display = numbe(2, 8, input)
console.log(display);





let text1 = "What a very ";
text1 += "nice day";
console.log(text1);
















