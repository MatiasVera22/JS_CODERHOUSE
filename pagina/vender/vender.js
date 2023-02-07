class nuevoProducto{
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }
}



let nombreProducto =  document.getElementById("nombre");
let precioProducto = document.getElementById("precio");
let imagenProducto = document.getElementById("imagen_input")

let botonAgregar = document.getElementById("agregar")
let main = document.getElementById("main")
let productosEnVenta = []

botonAgregar.addEventListener("click", function(){
    let producto = document.createElement("div")
    producto.id= "caja"
    let cajaNombre = document.createElement("div")
    let codigoProducto = document.createElement("div")
    codigoProducto.id = "codigo_producto"
    let cajaPrecio = document.createElement("div")
    cajaNombre.id = "caja_nombre"
    cajaPrecio.id = "caja_precio"
    cajaNombre.append(nombreProducto.value)
    cajaPrecio.append(precioProducto.value + "$")
    let btnBorrar = document.createElement("button")
    btnBorrar.innerText = "Borrar"
    btnBorrar.id= "btnBorrar"+numeroAzar()
    cajaPrecio.append(btnBorrar)
    producto.append(cajaNombre)
    producto.append(cajaPrecio)
    main.append(producto)
    cajaPrecio.append(codigoProducto)
    

    btnBorrar.addEventListener("click", function(){
        event.target.parentNode.parentNode.remove()
        localStorage.removeItem(nombreConCodigo)
        console.log(productosEnVenta)
       
       
    })
    btnBorrar.addEventListener("click",function(e){
        console.log( e.target.id)
        productosEnVenta.splice(btnBorrar.id)

        
    })
    function numeroAzar(){
        let azar = Math.floor(Math.random() * 1000)
        return azar
    }
    let nombreConCodigo = nombreProducto.value + numeroAzar();
    codigoProducto.append(nombreConCodigo)
    console.log(nombreConCodigo)
    let productoAgregado = new nuevoProducto (nombreConCodigo, precioProducto.value)
    
    console.log(productoAgregado)
    productosEnVenta.push(productoAgregado)
    console.log(productosEnVenta)

    localStorage.setItem(nombreConCodigo, JSON.stringify(productoAgregado))

})
