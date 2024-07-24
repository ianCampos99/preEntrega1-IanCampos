alert("Bienvenido a la tiendaFlux, Ingrese algun producto que quiera consultar el precio. Para finalizar compra ingrese 0")

let seleccionarProductos = Number(prompt("1-Motherboard AR$55000 2-Procesador AR$130000 3-Memoria RAM AR$75000 4-GPU AR$200000"))
let seleccionarCantidad;
let total = 0;
const cantidad = (cant, precio) => {
    return cant * precio
}

while (seleccionarProductos != 0) {
    switch (seleccionarProductos) {
        case 1:
            seleccionarCantidad = Number(prompt("el producto seleccionado es Motherboard, indique la cantidad"));
            total += cantidad(seleccionarCantidad, 55000);
            break;
        case 2:
            seleccionarCantidad = Number(prompt("el producto seleccionado es Procesador, indique la cantidad"));
            total += cantidad(seleccionarCantidad, 13000);            
            break;
        case 3:
            seleccionarCantidad = Number(prompt("el producto seleccionado es Memoria RAM, indique la cantidad"));
            total += cantidad (seleccionarCantidad, 75000);
            break;
        case 4:
            seleccionarCantidad = Number(prompt("el producto seleccionado es GPU, indique la cantidad"));
            total += cantidad (seleccionarCantidad, 200000);
            break;
            
        default:
        break;    
    }
    seleccionarProductos = Number(prompt("1-Motherboard AR$55000 2-Procesador AR$130000 3-Memoria RAM AR$75000 4-GPU AR$200000"));
}

alert("el total de la compra es de:" + total)

const envio = () => {
    if (total >= 150000) {
        alert("El envio es gratituo")
    }else {
        alert("el costo de envio es de 6000, el total es " + total)
    }
}

envio()