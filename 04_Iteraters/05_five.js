const coding = ['js', 'ruby', 'java', 'python', 'c++']

coding.forEach((item) => {
    // console.log(item);
    
});

const num = [10, 11, 12,13,14,15,16]

const newnum = num.map((n) => n + 10)

// console.log(newnum);

// Chaining
const n = newnum
.map((n1) => n1 * 10)
.map((n2) => n2+1)

// console.log(n);

