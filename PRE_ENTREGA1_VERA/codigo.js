//CREACION DE LOS OBJETOS

class producto {
        constructor(nombre, precio, stock) {
                this.nombre = nombre;
                this.precio = precio;
                this.stock = stock;
        }
        get_datos() {
                alert(`-----DATOS DEL PRODUCTO--------- \n Nombre producto: ${this.nombre} \n Precio: $${this.precio} \n Stock: ${this.stock}u`)
        }
        get_datos2() {
                prompt(`-----DATOS DEL PRODUCTO--------- \n Producto: ${this.nombre} \n Precio: $${this.precio} \n Stock: ${this.stock}u`)
        }
        update_stock(resta) {

                this.stock = resta;
        }
}


// FIN DE CREACION DE OBJETOS

//OBJETOS A UTILIZAR
let producto1 = new producto("LAMPARA", 12000, 30);
let producto2 = new producto("MONITOR 24 PULGADAS", 25000, 30);
let producto3 = new producto("SAMSUNG GALAXY S20", 40000, 20);
//FIN OBJETOS A UTILIZAR


let lista;

function listaProductos() {
        lista = prompt(`Estos son los productos que tenemos disponibles:
        \n 1) ${producto1.nombre} \n 
       PRECIO: $${producto1.precio} \n
       DISPONIBLE: ${producto1.stock}u \n 
       ----------
       2) ${producto2.nombre} \n 
       PRECIO: $${producto2.precio} \n
       DISPONIBLE: ${producto2.stock}u \n
       ----------
       3) ${producto3.nombre} \n 
       PRECIO: $${producto3.precio} \n
       DISPONIBLE: ${producto3.stock}u \n
       Seleccione con el numero o 0 para volver:`)


       
       switch (lista) {
        case "0": menuPrincipal();
        break;
        case "1":
                let lampara = parseInt(prompt(`Usted a seleccionado LAMPARA \n Cuantas unidades necesita? \n Disponible: ${producto1.stock} Unidades`));
                if (lampara > producto1.stock) {
                        alert("No disponemos de suficientes unidades")
                } else if (lampara <= 0) {
                        alert("Dato invalido")
                } else {
                        let resta = producto1.stock - lampara;
                        producto1.update_stock(resta);
                        alert("Su pedido ah sido tomado");
                                }   
                ultimoMenu()
                break;
                        
        case "2":  
                let monitor = parseInt(prompt(`Usted a seleccionado MONITOR 24 PULGADAS \n Cuantas unidades necesita? \n Disponible: ${producto2.stock} Unidades`));
                if ( monitor > producto2.stock) {
                        alert("No disponemos de suficientes unidades")
                } else if (monitor <= 0) {
                        alert("Dato invalido")
                } else {
                        let resta = producto2.stock - monitor;
                        producto2.update_stock(resta);
                        alert("Su pedido ah sido tomado");
                                }   
                ultimoMenu()
                break;
        case "3":
                
                let smart = parseInt(prompt(`Usted a seleccionado SAMSUNG GALAXY S20 \n Cuantas unidades necesita? \n Disponible: ${producto3.stock} Unidades`));
                if ( smart > producto3.stock) {
                        alert("No disponemos de suficientes unidades")
                        
                } else if (smart <= 0) {
                        alert("Dato invalido")
        
                } else {
                        let resta = producto3.stock - smart;
                        producto3.update_stock(resta);
                        alert("Su pedido ah sido tomado");
                                }   
                ultimoMenu()
                break;
                        
                }


                        
        
}


let accion;

function menuPrincipal(){
        accion = prompt("Bienvenido, seleccione que operacion desea realizar \n 1 para Comprar \n 2 para Vender \n 0 para Salir");
        switch (accion) {
                
                case "0": alert("Hasta pronto :D")
                        break;
        
                case "1": listaProductos()
                                
                                
                        break;
                case "2":
                        venta();
                        break;
                
                


                        
                        

        }
}

let continuar;
        function ultimoMenu(){
                continuar = parseInt(prompt(`Desea realizar alguna otra operacion? \n 1) Para volver a lista de productos \n 2) Para volver al menu principal \n 0) Para salir`))
                if ( continuar == '1'){
                        listaProductos();
                } else if ( continuar == '2'){
                        menuPrincipal()
                } else if (continuar == '0'){
                        alert("Hasta pronto :D")
                        
                }
        }
        function venta(){
                        let nombre = prompt("Ingresa el nombre de tu producto");
                        let precio = parseFloat(prompt("Ingresa el precio de tu producto"))
                        let stock = parseFloat(prompt("Cuantas unidades tiene en stock?"))
                        let productoNuevoCliente = new producto(nombre, precio, stock)
                        productoNuevoCliente.get_datos()
                        alert("Su producto fue anadido con exito");
                        
                        

                        postVenta()
        }

let menuPostVenta;
        function postVenta(){
                menuPostVenta= parseInt(prompt(`Desea realizar alguna otra operacion? \n 1) Para volver a menu principal \n 2) Para volver a ingresar un producto \n 0) Para salir`))
                if ( menuPostVenta == '1'){
                        menuPrincipal()
                } else if ( menuPostVenta == '2'){
                        venta()
                } else if (menuPostVenta == '0'){
                        alert("Hasta pronto :D")
                        
                } 
                }



let menu = menuPrincipal()
