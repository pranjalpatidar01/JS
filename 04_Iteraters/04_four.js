const obj = {
    1 : "a",
    2 : 'b',
    3 : 'c',
    4 : 'd'
}

for (const key in obj) 
    {
   console.log(`key is ${key} and value is ${obj[key]}`);
   
}

const prg = ['c', 'c++', 'java', 'python']

for (const key in prg) {
   console.log(key);
   console.log(prg[key]);
   
}