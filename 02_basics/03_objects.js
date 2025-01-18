//  singleton

//  object literals

const mysym = Symbol("key1")

const jsUser = {
    name : "pranjal",
    "Full Name" : "Pranjal patidar",
    [mysym] : "mykey1",
    age : 24,
    Location : "NITK",
    mail : "yahoon.com",
    isLoggedIn : false
}

//  access

console.log(jsUser.mail);
console.log(jsUser["mail"]);

// console.log(jsUser.Full Name);  can't access in this way when key is a string bcoz behind the seen it treat it ike a string 

console.log(jsUser["Full Name"]);
console.log(typeof mysym);

jsUser.mail = "Google.com"

console.log(jsUser.mail);

// Object.freeze(jsUser)   freeze so we can't mke any changes 

jsUser.mail = "microsoft.com"

console.log(jsUser.mail);

console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hey JS users");
}

console.log(jsUser.greeting());

jsUser.greetingTwo = function()
{
    console.log(`Hey JS user , ${this.name}`); // if we want to make reference to the same object then we use this
}

console.log(jsUser.greetingTwo());
