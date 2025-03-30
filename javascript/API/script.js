let url = "https://api.genderize.io/?name=";
let input = document.querySelector("input");
let btn = document.querySelector("button");
let p = document.querySelector("p");



async function gender(name){
    let gen = await axios.get(url+name);
    p.innerText = gen.data.gender;
    return gen.data.gender;
}



btn.addEventListener("click" , async()=>{
    let userName = input.value;
    // console.log(userName)
     await gender(userName);
})