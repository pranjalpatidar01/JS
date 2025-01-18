const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggeIn = false

// console.log(tinderUser);

const regularpro = {
    email : "Yahoo.com",
    name : {
        fullname : {
            userfullname : {
                firstname : "Pranjal",
                Lastname : "Patidar"
            }
        }
    }
}

// console.log(regularpro.name.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b", 3 : "c"}
const obj2 = {4: "d", 5: "e", 6 : "f"}

const obj3 = Object.assign({}, obj1, obj2)

const obj4 = {...obj1, ...obj2}
console.log(obj3);
console.log(obj4);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty("name"));
console.log(tinderUser.hasOwnProperty("name1"));



