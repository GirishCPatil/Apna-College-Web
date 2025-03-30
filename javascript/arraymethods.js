let arr=[1,2,3,34,5]

arr.forEach((item)=>
    {
        console.log("Item is : "+ item)

    })

let newarr=arr.map((item)=>{
    return item*10
})

let neweven=arr.filter((el)=>{
    return el%2==0;
})

console.log([2,4,6].every((el)=> { return el%2==0}));
console.log([2,4,6,3].some((el)=> {return  el%2==0}));

let a=[1,2,3,4].reduce((res,el)=> res+el)
console.log(a)
