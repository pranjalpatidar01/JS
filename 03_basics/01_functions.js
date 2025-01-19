function sayMyname(){
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
