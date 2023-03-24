let form = document.getElementById("form");
const fname = document.getElementById("fname");
const sname = document.getElementById("sname");
const email = document.getElementById("email");
const phone = document.getElementById("p");
const cnum = document.getElementById("cnum");
const pin = document.getElementById("pin");
const count = document.getElementById("count");
const dist = document.getElementById("dist");
const state = document.getElementById("stat");
const street = document.getElementById("str");
const landMark = document.getElementById("lan");
const sub= document.getElementById("sub");

 form.addEventListener('submit',(event)=>{
    checkInput();
    if(isValidInput()==true){
        form.onsubmit();
    }else{
        event.preventDefault();
    }

 })
 function isValidInput(){
    let container = document.querySelectorAll('.label-control');
     let result=true
    container.forEach((contain)=>{
        if(contain.classList.contains('error')){
            result=false
        }})
        return result
            }
function checkInput(){
    const fnameValue = fname.value.trim();
    const snameValue = sname.value.trim();
    const emailValue = email.value.trim();
    const pinValue = pin.value.trim();
    const cnumValue = cnum.value.trim();
    const phoneValue = phone.value.trim();
    const countValue = count.value.trim();
    const distValue = dist.value.trim();
    const stateValue = state.value.trim();
    const streetValue = street.value.trim();
    const landMarkValue = landMark.value.trim();
    if (fnameValue === '') {
        setError(fname,'First name cannot be blank');
    } 
         else if(!isAlpha(fnameValue)){
          setError(fname,'FirstName cannot be number or any special characters')

        }
    else{
        setSuccess(fname);
    }
 // second Name
 
 if (snameValue === '') {
    setError(sname, 'This cannot be blank');
}   
else {
    setSuccess(sname);
  
}
// phone number
if (phoneValue == "") {
setError(phone, 'This cannot be blank');
}else if(phoneValue.length < 10 ||phoneValue.length > 10){
    setError(phone, 'This Charachter must be 10 characters');
}
else {
    setSuccess(phone);

}
//  Email
if (emailValue === "") {
    setError(email, 'This cannot be blank');
} else if(!isEmail(emailValue)){
    setError(email,"This is not a valid email")
}else {
    setSuccess(email);

}
//select your card

    //Card number 
    if (cnumValue == '') {
        setError(cnum, 'This cannot be blank');
    }else if(cnumValue.length !== 16){
        setError(cnum,'Card Number must be 16 numbers and must be a number')
    }
    else {
        setSuccess(cnum);
  
    }
    //pin number
    if(pinValue === ''){
        setError(pin, 'This cannot be blank');
    }else if(pinValue.length !== 6 || !isPin(pinValue)){
    setError(pin,'Pin value must be 6 Characters and must be a number');
    }else{
        setSuccess(pin)
    
    }

    if(countValue === 0){
        setError(count,'Country cannot be blank');
    }else if(countValue.length < 5){
        setError(count,'this is not a valid input');
    }else{
        setSuccess(count)
        
    }

    if(distValue === ""){
        setError(dist,'District cannot be blank');
    }else if(countValue.length < 4){
        setError(dist,'this a not a valid input');
    }else{
        setSuccess(dist)
      
    }

    if(stateValue === 0){
        setError(state,'State cannot be blank');
    }else if(stateValue.length < 5){
        setError(state,'this is not a valid input');
    }else{
        setSuccess(state)
       
    }


    if(streetValue === 0){
        setError(street,'street cannot be blank');

    }else if(streetValue.length < 5){
        setError(street,'this is not a valid input');
    }else{
        setSuccess(street)
       
    }

    if(landMarkValue === 0){
        setError(landMark,'Land Mark cannot be blank');
    }else if(landMarkValue.length < 5){
        setError(landMark,'this is not a valid input');

    }else{
        setSuccess(landMark)
   

    }


    function setError(input, message) {
        let labelControl = input.parentElement;
        let small = labelControl.querySelector("small");
        labelControl.className = "label-control error input";
        small.innerText = message;
    }
    function setSuccess(input){
      const labelControl = input.parentElement;
      labelControl.className = "label-control success";
    }
 
    function isEmail(email){
        return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)
    }
    function isPin(pin){
    return /^(0|[1-9][0-9]*)$/.test(pin)    
    }
    function isAlpha(value){
    return /^[a-zA-Z]+$/.test(value)
    }}

    
    
    