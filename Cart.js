let top1 = document.getElementById("top1");
let cart = document.getElementById("cart")

let basket = JSON.parse(localStorage.getItem("Data")) || []

function calculate(){
  let cartIcon = document.getElementById("cartamount")
  basket.map((one)=>one.item).reduce((one,two)=>one + two,0)
  
}
calculate()
let generateitem=()=>{
if(basket.length !==0){
 
  return (top1.innerHTML = basket.map((one)=>{
  let{id,item}=one;
  let search = obj.find((two)=>two.specific === id) || []
  let {img,name,mrp} = search
   return`

   <div id="cartName"><img src="${img}"width="180">
  
   <div class="details">
  
<i class="bi bi-x-circle"onclick="removeItem(${id})"></i>
   <h4><p>${name}</p>
   <p id="money">₹${mrp}</p>
   </h4>
   <div class="addmin">
   <div class="minus">   <i onclick="decrement(${id}),sound2()"class="bi bi-dash"></i></div>
  <div id=${id} class="zero">${item}</div>
  <div class="add">    <i onclick="increment(${id}),sound()" class="bi bi-plus"></i></div>
  <h2 id="total">₹${item * mrp}</h2>
  <a  href="index-4.html"><button id="buy2">Buy now</button></a>
  </div>
  </div>
 
 </div>
   `
  }).join(""))
}else{
    top1.innerHTML =""
    cart.innerHTML=`
    <h2 id="empty">Your cart is empty ^_^</h2>
   <a href="index.html"> <button class="classBtn">Back to Home page</a>
    `;
    document.getElementById("clear").style.display = "none";
    document.getElementById("buy").style.display = "none";
}}
generateitem()

function sound(){
  let sound = new Audio("sound.mp3");
  sound.play()
}
function sound2(){
  let sound2 = new Audio("rclick.wav")
  sound2.play()
}

let increment = (id)=>{
  let selectedItem = id;
  let search=basket.find((one)=>one.id === selectedItem.id);
  if(search === undefined){
   basket.push({
      id:selectedItem.id,
      item:1
   })
  }else{
      search.item += 1
  }
  generateitem();
  totalCart()
  update(selectedItem.id)
  localStorage.setItem("Data",JSON.stringify(basket))
}
function decrement(id){
  let selectedItem = id;
  let search=basket.find((one)=>one.id === selectedItem.id);
  if(search=== undefined)return;
else if(search.item === 0)return;

  else{
      search.item -= 1
  }
  update(selectedItem.id)
basket = basket.filter((one)=>one.item !== 0)
generateitem();
totalCart()
  localStorage.setItem("Data",JSON.stringify(basket))
}
let update=(id)=>{
  let search = basket.find((one)=>one.id == id);
document.getElementById(id).innerHTML = search.item;
generateitem()
calculate()
}
let removeItem=(id)=>{
   let selectedItem = id;
   basket = basket.filter((one)=>one.id !== selectedItem.id);
   generateitem()
   localStorage.setItem("Data",JSON.stringify(basket))
 
}

let totalCart=()=>{
  if(basket.length !== 0){
  let amount = basket.map((one)=>{
    let{id,item}=one
    let search = obj.find((two)=>two.specific === id) || [];
    return search.mrp * item
   
  }).reduce((one,two)=>one+two,50)
 
  cart.innerHTML = `Your total price:₹${amount} <small style="font-size:15px">.Include of all taxes`
 
}

  else{
    return;
  }
}
totalCart()
let clearCart=()=>{
  basket=[];
  generateitem();
  localStorage.setItem("Data",JSON.stringify(basket))
  
}