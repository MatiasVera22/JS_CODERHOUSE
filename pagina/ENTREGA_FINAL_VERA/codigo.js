
let agregarFila = document.getElementById("agregar")
let tabla = document.getElementById("tabla")
agregarFila.addEventListener("click", function(){
    let div = document.createElement("div")
    div.className = "div_tabla"
    let campoTxt = document.createElement("input")
    campoTxt.className = "textarea"
    tabla.append(div)
    div.append(campoTxt)
     let botonBorrar = document.createElement("button")
     botonBorrar.id="borrar";
     div.append(botonBorrar)
     botonBorrar.innerText = "Eliminar"
    botonBorrar.setAttribute('data-html2canvas-ignore','true') 
     botonBorrar.addEventListener("click", function (e){
        botonBorrar.parentNode.remove()
     })
})

document.addEventListener("DOMContentLoaded", () => {
    let btnPdf = document.getElementById("PDF")
    let desplegable = document.getElementById("empresas")
    let fecha = document.getElementById("input_fecha")
    btnPdf.addEventListener("click",()=>{
        const elementoAConvertir = document.getElementById("formulario");
        html2pdf()
            .set({
                margin:1,
                filename: `FACTURA ${desplegable.value} ${fecha.value}`,
                
                image: {
                    type: 'jpeg',
                    quality: 0.98
                },
                html2canvas: {
                    scale: 1,
                    letterRendering: true,
                },
                jsPDF: {
                    unit: "mm",
                    format: "a4",
                    orientation: 'portrait',
                }
            })
            .from(elementoAConvertir)
            .save()
            .catch(err => console.log(err))
    })
})

class empresa {
    constructor(nombre, orden){
        this.nombre = nombre;
        this.orden = orden
    }
    updateOrden(suma){
        this.orden = suma;
    }
}
let pecom = new empresa("PECOM",0)
let seip = new empresa ("SEIP",0)
let modal = new empresa("MODAL",0)
let CAM = new empresa ("CAM",0)



let opcionPecom = document.getElementById("pecom")
opcionPecom.innerText = pecom.nombre;

let opcionSeip = document.getElementById("seip")
opcionSeip.innerText = seip.nombre;

let opcionModal = document.getElementById("modal")
opcionModal.innerText = modal.nombre;

let opcionCam = document.getElementById("cam")
opcionCam.innerText = CAM.nombre;

let inputOrden = document.getElementById("orden")

let btnPdf = document.getElementById("PDF")
let desplegable = document.getElementById("empresas")

console.log(pecom.orden)
function update_orden(){
    if(desplegable.value === "PECOM"){
        inputOrden.value = 0
        let suma = pecom.orden + 1
        pecom.updateOrden(suma)
        inputOrden.value = suma
    } else if (desplegable.value === "SEIP"){
        inputOrden.value = 0
        let suma = seip.orden + 1
        seip.updateOrden(suma)
        inputOrden.value = suma
    }else if (desplegable.value === "MODAL"){
        inputOrden.value = 0
        let suma = modal.orden + 1
        modal.updateOrden(suma)
        inputOrden.value = suma
    } else if (desplegable.value === "CAM"){
        inputOrden.value = 0
        let suma = CAM.orden + 1
        CAM.updateOrden(suma)
        inputOrden.value = suma
    } 
}
btnPdf.addEventListener("click", update_orden)

function numeroAzar(){
    let azar = Math.floor(Math.random() * 1000)
    return azar
}
facturasDelDia=[]
btnPdf.addEventListener("click",function(){
    let fecha = document.getElementById("input_fecha")
    let nombreCodigo = desplegable.value + inputOrden.value + numeroAzar() + "// " + fecha.value
let facturaActualizada = new empresa(nombreCodigo, inputOrden.value)
    localStorage.setItem(nombreCodigo , JSON.stringify(facturaActualizada))
    
    facturasDelDia.push(facturaActualizada)
    console.log(facturasDelDia)
})