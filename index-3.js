let shop = document.getElementById("no2");
let basket = JSON.parse(localStorage.getItem("Data")) || []
let range=document.getElementById("range")



let generate = ()=>{
   
    return shop.innerHTML = obj.map((one)=>{
        let {specific,off,img,name,strike,mrp,save,color,id} = one;
        let search = basket.find((one)=>one.id === specific) || [];
        return`
        <section id="c1-${specific}">
    <h1 id="TH">Up to ${off} off</h1>
<a href="${img}"><img src="${img}"id=${id}></a>
<h2>${name}</h2>
<h1 id="strike">M.R.P :<s>₹${strike}</s></h1>
<h1 id="price">M.R.P: ₹${mrp}</h1>
<h1 id="strike">You save :₹${save}
include of all taxes</h1>
<h2 id="T">color:${color}</h2>
<div class="addmin">
 <div class="minus">   <i onclick="decrement(${specific}),sound2()" class="fa-solid fa-minus"></i></div>
<div id=${specific} class="zero">${search.item == undefined? 0 : search.item}</div>
<div class="add">    <i onclick="increment(${specific}),sound()" class="fa-solid fa-plus"></i></div>
</div>
<form action="index-4.html">
<button onclick="buy()"id="buy">Buy now</button><br></form>
   </section>

    `
    })
    .join("")
    
}
generate()
   


function sound(){
    let sound = new Audio("sound.mp3");
    sound.play()
}
function sound2(){
    let sound2 = new Audio("rclick.wav")
    sound2.play()
}

let increment=(id)=>{
    let selectedItem = id;
    let search = basket.find((one)=>one.id == selectedItem.id)
    if(search === undefined){
        basket.push({
            id:selectedItem.id,
            item:1
        })
    }else{
    search.item += 1
    }
    update(selectedItem.id)
    localStorage.setItem("Data",JSON.stringify(basket));
}

let decrement=(id)=>{
    let selectedItem = id;
    let search = basket.find((one)=>one.id == selectedItem.id)
    if(search === undefined)return;
    else if(search.item ===0)return;
    else{
        search.item -=1
    }
    update(selectedItem.id)
    basket = basket.filter((one)=>one.item !== 0)
    localStorage.setItem("Data",JSON.stringify(basket));
}
let update=(id)=>{
    let search = basket.find((one)=>one.id == id)
    document.getElementById(id).innerHTML = search.item
    calculate()
}
let calculate=()=>{
    let cartIcon = document.getElementById("cartamount");
   cartIcon.innerHTML = basket.map((one)=>one.item).reduce((one,two)=>one+two,0);
}
calculate()
function search(){
    document.getElementById("no1").style.display = "none"
    const input = document.getElementById("find").value.toUpperCase();
    const items = document.getElementById("no2")
    const pname = items.getElementsByTagName('h2');

    const products = document.querySelectorAll('#no2 section');
    const search = document.getElementById("form")
    search.addEventListener("submit",function event(event){
        
        event.preventDefault()

    })
   
 products.forEach((item)=>{
    let text = item.textContent;
    if(text.toUpperCase().includes(input.toUpperCase())){
        item.style.display = ""
    }else{
        item.style.display = "none"
    }
 })
};
let ran=()=>{
obj.mrp.filter(item=>{
    return item < range.value
})
}



