function sayMyname()
{
    console.log("P");
    console.log('r');
    console.log('a');
    console.log('n');
    console.log('j');
    console.log('a');
    console.log('l');
}
// sayMyname()
function addTwoNumbers(number1, number2)
{
    return (number1 + number2)
}

const ans = addTwoNumbers(3, 5)

console.log(ans);

function userLogin(username = 'sam')
{
    return `${username} just logged in`
}

let s = userLogin("Pranjal")

console.log(s);


function calculatCartValue(...num) {
    return num
}

console.log(calculatCartValue(100, 200, 300));

const user = {
    name : "Pranjal",
    age : 23 
}

function handleObject(anyObject)
{
    console.log(`Username is ${anyObject.name} and age is ${anyObject.age}`);
    
}

handleObject(user)

const arr = [200, 400, 500]

function returnSecondValue(getArr)
{
    return getArr[1]
}

console.log(returnSecondValue(arr));
