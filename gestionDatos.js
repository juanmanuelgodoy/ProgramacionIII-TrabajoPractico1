console.log(
  "Dentro de este archivo, declarar un array llamado productos (o libros, turnos, etc.) que contenga al menos 5 objetos JavaScript. Cada objeto debe representar un elemento con propiedades como id, nombre, precio y stock."
);
const productos = [
  {
    id: 1,
    nombre: `Libros`,
    precio: 7500,
    stock: 5,
  },
  {
    id: 2,
    nombre: `Lapices`,
    precio: 1500,
    stock: 3,
  },
  {
    id: 3,
    nombre: `Block de hojas`,
    precio: 8000,
    stock: 2,
  },
  {
    id: 4,
    nombre: `Biromes`,
    precio: 8000,
    stock: 0,
  },
  {
    id: 5,
    nombre: `Reglas`,
    precio: 3500,
    stock: 1,
  },
];
console.table(productos);
console.log("Imprimir la longitud total del array productos.");
console.log(productos.length);
console.log(
  "Acceder e imprimir por consola el nombre del segundo y cuarto elemento del array utilizando su índice."
);
console.log(productos[1].nombre);
console.log(productos[3].nombre);
console.log(
  "Recorrer el array productos utilizando un bucle for...of e imprimir el nombre y el precio de cada elemento."
);
for (let prod of productos) {
  console.log(`${prod.nombre}, ${prod.precio}`);
}
console.log(
  "Recorre el array productos utilizando el método forEach() e imprimir la misma información que en el punto anterior, pero agregando una frase descriptiva (ej. Producto: [nombre], Precio: [precio])."
);
productos.forEach((product) => {
  console.log(`Nombre: ${product.nombre}, Precio: $${product.precio}`);
});
console.log(
  "Agregar dos elementos al final del array productos utilizando push()."
);
let pro1 = productos.push(
  { id: 6, nombre: "Goma", precio: 900, stock: 8 },
  { id: 7, nombre: "Carpeta", precio: 3900, stock: 9 }
);
console.log(productos);
console.log(
  "Eliminar el último elemento del array productos utilizando pop()."
);
productos.pop();
console.log(productos);
console.log(
  "Agregar un nuevo elemento al inicio del array productos utilizando unshift()."
);
productos.unshift({ id: 8, nombre: "Compas", precio: 1750, stock: 5 });
console.log(productos);
console.log(
  "Elimina el primer elemento del array productos utilizando shift()."
);
productos.shift();
console.log(productos);
console.log(
  "Crear un nuevo array llamado productosConStock que contenga solo los elementos del array productos donde el stock sea mayor que 0 utilizando filter()."
);
let productosConStock = productos.filter((cantidad) => {
  return cantidad.stock > 0;
});
console.log(productosConStock);
console.log(
  "Crear un nuevo array llamado nombresProductos que contenga solo los nombres de todos los productos en el inventario utilizando map()."
);
let nombresProductos = productos.map((nom) => {
  console.log("Nombre de producto: " + nom.nombre);
});

console.log(
  "Encontrar y guardar en una variable el primer producto en productos que tenga un id específico (ej. id:3) utilizando find(). Si no lo encuentra, indicar que no existe."
);
let buscado = productos.find((iden) => {
  return iden.id === 3;
});
if (buscado) {
  console.log(buscado);
} else {
  console.log(`No se encontro`);
}
console.log(
  "Crear un nuevo array llamado productosOrdenados que contenga los productos ordenados por precio en orden decreciente. (investigar método sort())."
);
let productosOrdenados = Array.from(productos);
productosOrdenados.sort((a, b) => b.precio - a.precio);
console.log(productosOrdenados);

console.log(productos);
