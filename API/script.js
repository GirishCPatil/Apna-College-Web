let url="http://universities.hipolabs.com/search?name=India&state-province="


let btn=document.querySelector("button");
btn.addEventListener("click",async () => {
    let input = document.querySelector("input");
    let data = await getCollege(input.value);
    console.log(data) 
    // showClg(data);
})

function showClg(data) {
    let list = document.querySelector("ul")
    list.innerText="";
    for (const clg of data) {
       
        let li=document.createElement("li")
        li.innerText=clg.name;
        list.appendChild(li);
       
    }
}

async  function getCollege(state){

    let res= await axios.get(url+state);
    return res.data;
}