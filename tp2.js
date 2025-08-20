// archivo: trabajoAPI.js
import fetch from "node-fetch"; // npm install node-fetch
import fs from "fs";

// Función principal
async function main() {
  try {
    //  Recuperar todos los productos
    let res = await fetch("https://fakestoreapi.com/products");
    let productos = await res.json();
    console.log("Todos los productos:", productos);

    //  Recuperar un número limitado de productos
    res = await fetch("https://fakestoreapi.com/products?limit=5");
    let productosLimitados = await res.json();
    console.log("Productos limitados:", productosLimitados);

    //  Guardar los productos en un archivo JSON
    fs.writeFileSync("productos.json", JSON.stringify(productos, null, 2));
    console.log("Productos guardados en productos.json");

    //  Agregar un nuevo producto (POST)
    const nuevoProducto = {
      title: "Mi producto",
      price: 99.99,
      description: "Descripción del producto",
      category: "electrónica",
      image: "https://imagen.com/mi-producto.jpg"
    };

    res = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevoProducto)
    });
    const productoAgregado = await res.json();
    console.log("Producto agregado:", productoAgregado);

    //  Buscar un producto por id (GET)
    const idBuscar = 1;
    res = await fetch(`https://fakestoreapi.com/products/${idBuscar}`);
    const productoBuscado = await res.json();
    console.log(`Producto con id ${idBuscar}:`, productoBuscado);

    //  Eliminar un producto (DELETE)
    const idEliminar = 1;
    res = await fetch(`https://fakestoreapi.com/products/${idEliminar}`, {
      method: "DELETE"
    });
    const productoEliminado = await res.json();
    console.log("Producto eliminado:", productoEliminado);

    //  Modificar un producto (UPDATE/PUT)
    const idModificar = 2;
    const cambios = { price: 150 };
    res = await fetch(`https://fakestoreapi.com/products/${idModificar}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cambios)
    });
    const productoModificado = await res.json();
    console.log("Producto modificado:", productoModificado);

    //  Agregar producto al archivo local
    let productosLocales = JSON.parse(fs.readFileSync("productos.json"));
    productosLocales.push(nuevoProducto);
    fs.writeFileSync("productos.json", JSON.stringify(productosLocales, null, 2));
    console.log("Nuevo producto agregado al archivo local");

    //  Eliminar productos superiores a un valor
    let valorMaximo = 50;
    productosLocales = productosLocales.filter(p => p.price <= valorMaximo);
    fs.writeFileSync("productos.json", JSON.stringify(productosLocales, null, 2));
    console.log(`Productos filtrados por precio <= ${valorMaximo}:`, productosLocales);

  } catch (error) {
    console.error("Error:", error);
  }
}

// Ejecutar la función principal
main();