class estructuraProductos {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
    }

    verProductos() {
        let mensaje = `producto: ${this.nombre} - precio: $${this.precio} - Stock ${this.stock}`
        document.getElementById('impimirProductos').innerText= mensaje;

    }


}

const productosDatos = [];


function btnProducto() {

    let entrada = confirm("Desea cargar productos");

    while (entrada) {

        let nombreProducto = prompt("ingresar nombre del preducto");

        let precio = parseFloat(prompt("ingresar precio del producto"));
        while (isNaN(precio)) {
            alert("Ingrese datos numericos");
            precio = parseFloat(prompt("ingresar precio del producto"));
        }

        let stock = +prompt("ingresar cantidad del producto");
        while (isNaN(stock)) {
            alert("Ingrese datos numericos");
            stock = +prompt("ingresar cantidad del producto");
        }


        productosDatos.push(new estructuraProductos(nombreProducto, precio, stock));

        entrada = confirm("Desea cargar productos");
    }

    for(estructuraProductos of productosDatos){

        estructuraProductos.verProductos();
        // document.getElementById('impimirProductos').innerText=estructuraProductos;

    }

   
   

    // let buscar=prompt("buscar coca")
    // buscar=productosDatos.find(el=>el.nombre==="coca");
    // console.log(buscar);
}