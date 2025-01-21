const user = {
    username : "Pranjal",
    age : 23,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website whose age is ${this.age}`);  // when we refering to current context we use this keyword
    }
}

console.log(user.welcomeMessage());

console.log(this); // current context is empty object

// function one()
// {
//     console.log(this);
    
// }

// one()

const two = () =>{
    console.log("HEy"); 
    console.log(this); 
}

two()

const addTwo = (num1, num2)=>
{
    return num1 + num2  // when we use curly brackets we need to write return
}

const addthree = (n1, n2, n3) => n1 + n2 + n3 // implicit return 

const one = (num) => (num) // no need to write return when we use small brackets

const NEW = (num) => ({userna : "PRanjal"})

console.log(addTwo(5, 7));
console.log(addthree(3,4,6));
console.log(one(5));

console.log(NEW(9));


