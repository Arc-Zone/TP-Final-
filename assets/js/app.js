

let menuBurger = document.getElementById('menuBurger')
let navBar = document.getElementById('navBar')

menuBurger.addEventListener('click' , function(){
    if(navBar.style.display === "block"){
        navBar.style.display = "none"
    }else{
        navBar.style.display = "block"
    }
})

let btn = document.getElementById('btn')
let email = document.getElementById('email').value
let  regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
let errorMsg = document.getElementById('error-msg')

btn.addEventListener('click' , function(e){
    e.preventDefault()
    if(regexEmail.test(email)){
        errorMsg.innerHTML = ` <span class="msg-good"> Vous êtes bien inscrit a notre News Letter </span>`;
    }else {
        errorMsg.innerHTML = `<span class="msg-error"> Entrer une adresse mail valide </span>` ;
    }
})

const nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const messageRegex = /.+/;

const lastName = document.getElementById('lastName').value
const firstName = document.getElementById('firstName').value
const eMail =  document.getElementById('email').value
const msg = document.getElementById('msg').value

const contactBtn = document.getElementById("contactBtn")



contactBtn.addEventListener('click' , function(e){
e.preventDefault()
if(nameRegex.test(lastName) && nameRegex.test(firstName) && nameRegex.test(lastName) && emailRegex.test(eMail) && messageRegex.test(msg)){
    const contactErrorMsg = document.querySelectorAll(".contactErrorMsg")
    for(let i  = 0 ; i < contactErrorMsg.length ; i++){
        contactErrorMsg[i].innerHTML = ` <span class="msg-good"> <i class="fas fa-check"></i></span>`;
    }
    console.log('click')
}else{
    const contactErrorMsg = document.querySelectorAll('.contactErrorMsg');
    for (let i = 0; i < contactErrorMsg.length; i++) {
        contactErrorMsg[i].innerHTML = `<span class="msg-error"> Veuillez entrer des valeurs valides </span>`;
    }}
})