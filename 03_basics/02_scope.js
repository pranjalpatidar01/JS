let a =300 // this value of a is completely independent

if(true)
{
    let a = 30 
    let b = 40

    // console.log("Inner :",  a);
    
}

// console.log(a);

function one ()
{
    const username = "Pranjal"

    function two()
    {
        const website = "Youtube"
        console.log(username);
    
    }
    two()
}

one();

function addOne(num)
{
    return num + 1
}

const addTwo = function(num)
{
    return num + 2
}
console.log(addOne(5));
 
console.log(addTwo(5));
 
