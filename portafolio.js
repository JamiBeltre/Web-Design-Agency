const imagenes = document.querySelectorAll(".imagen-portafolio")
const imagenesLight = document.querySelector(".agregar-imagen")
const contenedorImagen = document.querySelector(".imagen-light")
const cerrar = document.querySelector(".close")
const hame = document.querySelector(".imagen-header")



imagenes.forEach(imagen => {
    imagen.addEventListener("click", ()=>{
    aparecerImagen(imagen.getAttribute("src"))
    })
})


const aparecerImagen = (imagen) => {
    contenedorImagen.classList.toggle("mostrar")
    imagenesLight.src = imagen;
    imagenesLight.classList.toggle("mostrar-imagen")
    hame.classList.toggle("imagen-header")

}

window.addEventListener("click", e=>{
     if (contenedorImagen.classList.contains("mostrar") 
     && imagenesLight.classList.contains("mostrar-imagen") 
     && e.target == cerrar             ){
        contenedorImagen.classList.toggle("mostrar")
        imagenesLight.classList.toggle("mostrar-imagen")
        hame.classList.toggle("imagen-header")

     }
    
})