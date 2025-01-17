const name = "pranjal"
const repo = 55

// console.log(name + repo + "patidar");  outdated syntax

console.log(`${name}${repo}patidar`);

//  new way to define string

let s = new String('Pranjal')

console.log(s);
console.log(s[0]);
console.log(s.length);
console.log(s.toUpperCase());  // doesnot change the original value
console.log(s);
console.log(s.charAt(1));
console.log(s.indexOf('a'));

let t = s.substring(2,6)

console.log(t);

let st = "    pranjal  patidar   "

console.log(st);
console.log(st.length);

console.log(st.trim());
console.log(st.trim().length);

const url = "https://google%20com"

console.log(url);
console.log(url.replace('%20','.'));

console.log(url.includes("google"));

let arr = "Pranjal-Patidar-Women"

console.log(arr.split('-'))















