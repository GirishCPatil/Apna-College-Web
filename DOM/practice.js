// let p = document.createElement("p");
let body= document.body;
// p.innerHTML = "Hey im red";
// p.style.color="red";
// body.appendChild(p);

// let h3=document.createElement("h3");
// h3.textContent="I am a header 3 element";
// h3.style.color="blue"
// body.appendChild(h3);

// let div=document.createElement("div");
// div.style.backgroundColor = "pink";
// div.style.border= "5px solid black"


// body.appendChild(div);

// let h1=document.createElement("h1");
// h1.innerHTML="Im in div"

// let pd=document.createElement("p")
// pd.innerHTML="ME TOO!!"
// div.append(h1);
// div.append(pd);


let input = document.createElement("input")
let btn=document.createElement("button")
input.setAttribute("placeholder","username")
btn.innerHTML="Click Me"
btn.setAttribute("id","btn")
let btnid = document.querySelector("#btn")

console.log(btnid)


body.appendChild(input)
body.appendChild(btn)







