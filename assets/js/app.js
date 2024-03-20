let menuBurger = document.getElementById('menuBurger')
let navBar = document.getElementById('navBar')

menuBurger.addEventListener('click' , function(){
    if(navBar.style.display === "block"){
        navBar.style.display = "none"
    }else{
        navBar.style.display = "block"
    }
})
