let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
    let fact=await getFacts();
    console.log(fact);
    //let fct=document.querySelector("#result")
    let p=document.querySelector("#result");
    p.innerText=fact;
})

let url="https://api.chucknorris.io/jokes/random";
async function getFacts(){
    try{
        let res=await axios.get(url);
       // console.log(res.data.fact);
        return res.data.value;
    }catch(e){
        console.log("error",e);
    }
}