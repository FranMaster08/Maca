let menu = document.querySelector('#menu')
let menu_bar = document.querySelector('#menubar')
let btnBuscar = document.querySelector('#btnBuscar')

menu_bar.addEventListener('click', () => {
    
})

btnBuscar.addEventListener('click', () => {
    if(buscador.style.display!='block'){
        document.querySelector('#buscador').style.display = 'block'
        document.querySelector('#EjecutarBusqueda').style.display = 'block'
    }else{
        document.querySelector('#buscador').style.display = 'none'
        document.querySelector('#EjecutarBusqueda').style.display = 'none'
    }
})