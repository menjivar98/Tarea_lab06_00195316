var Productos = new Object(),
    codigo = 0,
    des = " ",
    type = " ",
    compra =0 ,
    venta = 0,
    stock = 0;

var producto = class {
    constructor(codigo, des,type,compra,venta,stock){
        this.codigo = codigo;
        this.des =des;
        this.type = type;
        this.compra = compra;
        this.venta = venta;
        this.stock = stock;
    }
}

var tienda = class {
    agregar(Object){
        bodega.push(Object);
    }
}

var bodega = [];






function mostrarPropiedades(objeto, nombreObjeto) {
    var resultado = "";
    for (var i in objeto) {
      if (objeto.hasOwnProperty(i)) {
          resultado += nombreObjeto + "." + i + " = " + objeto[i] + "\n";
      }
    }
    return resultado;
  }






do{
    var aux =+ 1;
    var n = true;
    var codigo,des,type,compra,venta,stock;
   
    
    console.log("1)--Agregar Producto");
    console.log("2)--Modificar Stock"); 
    console.log("3)--Registrar venta y reducir stock"); 
    console.log("4)--Mostrar promedio de ventas realizadas"); 
    console.log("5)--Mostrar productos con stock 0");
    console.log("6)--Salir del sistema");
    var opc = prompt("Opc: ");
     
    if( opc == 1){
        codigo = prompt("Codigo: ");
        des = prompt("Descripcion: ");
        type = prompt("Tipo de producto: ");
        compra = prompt("Precio de Compra: ");
        venta = prompt("Precio de venta: ");
        stock = prompt("Stock: ")
        producto[n] = new producto(codigo,des,type,compra,venta,stock);
        bodega.push(producto[n]);
        console.log("Agregado Existosamente");

    }

    else if(opc == 2){

    }
    else if(opc == 3){

    }
    else if(opc == 4){

    }
    else if(opc == 5){

    }
    else{
        n = false;
    }
   }while(n != false);



