const arr = [1,2,3,4,5]

const sum = arr.reduce(function(s, curr)
{
    return s + curr
}, 0)

// console.log(sum);

const total = arr.reduce((s1, curr) => s1 + curr , 0)

console.log(total);

