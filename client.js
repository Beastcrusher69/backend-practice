let data ;

fetch("/jay").then(
    res => res.json()
).then(
    d => data=d
)

console.log(data);