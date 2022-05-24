const menu = document.querySelector(".menu");
const ham = document.querySelector(".imagen-header");

ham.addEventListener("click", ()=> {

menu.classList.toggle("navbar")

}
)

window.addEventListener("click", e=>{
if(menu.classList.contains("navbar") 
    && e.target != menu && e.target != ham    ){

   menu.classList.toggle("navbar")
    }
   
})
