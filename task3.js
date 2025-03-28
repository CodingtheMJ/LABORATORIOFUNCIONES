function buscarProducto(nombre) {
    
    const inventario = [
        { nombre: "Camisa", precio: 20 },
        { nombre: "Pantalón", precio: 30 },
        { nombre: "Zapatos", precio: 40 },
        { nombre: "Sombrero", precio: 50 },
      ];
      
    for (let i = 0; i < inventario.length; i++) {
      if (inventario[i].nombre === nombre) {
       
        return inventario[i];
      }
    }
   
    return null;
  }
  console.log(buscarProducto("Zapatos")); 
  console.log(buscarProducto("Bufanda"));