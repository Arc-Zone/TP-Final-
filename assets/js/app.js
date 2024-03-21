
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
const name = document.getElementById('name').value
const eMail =  document.getElementById('email').value
const msg = document.getElementById('msg').value

const contactBtn = document.getElementById("contactBtn")
const contactErrorMsg = document.getElementById("errorMsg")


contactBtn.addEventListener('click' , function(e){
e.preventDefault()
if(nameRegex.test(lastName) || nameRegex.test(name) || nameRegex.test(lastName) || emailRegex.test(eMail) || messageRegex.test(msg)){
    contactErrorMsg.innerHTML = ` <span class="msg-good"> <i class="fas fa-check"></i></span>`;
}else{
    contactErrorMsg.innerHTML =`<span class="msg-error"> Entrée des valeurs valides </span>` ;
}
})