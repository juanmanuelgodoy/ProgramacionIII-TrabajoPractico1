let productos = [
    {nombre: 'Lavandina',id: 1, precio: '$12000', stock: 19},
    {nombre: 'Detergente',id: 2, precio: '$9000', stock: 15},
    {nombre: 'Fideos',id: 3, precio: '$3500', stock: 18},
    {nombre: 'Arroz',id: 4, precio: '$2000', stock: 40},
    {nombre: 'Alfajor',id: 5, precio: '$2500', stock: 38},
]

// Muestra en la consola todos los productos del array con sus propiedades
console.log(productos);

//Mostrar la longitud total del array
console.log("Imprimir la longitud total del array productos.");
console.log(`Hay ${productos.length} productos en la tienda`);

//Muestra el nombre del segundo y cuarto elemento del array utilizando su índice.
console.log("Acceder e imprimir por consola el nombre del segundo y cuarto elemento del array utilizando su índice.");
console.log(productos[1].nombre); // Segundo elemento (índice 1)
console.log(productos[3].nombre); // Cuarto elemento (índice 3)

//Recorre e imprime el nombre y precio de cada producto en el array usando bucle for of
console.log("Recorrer el array productos utilizando un bucle for...of e imprimir el nombre y el precio de cada elemento.");
for (let producto of productos) {
    console.log(`Nombre: ${producto.nombre}, Precio: ${producto.precio}`);
}

//Recorre e imprime nobre y precio con forEach
console.log("Recorre el array productos utilizando el método forEach() e imprimir la misma información que en el punto anterior, pero agregando una frase descriptiva");
productos.forEach(producto => {
    console.log(`Producto: ${producto.nombre}, Precio: ${producto.precio}`);
});

// Agregar dos productos nuevos al final
console.log("Agregar dos elementos al final del array productos utilizando push().");
productos.push(
    {nombre: 'Polenta', id: 6, precio: '$1200', stock: 35},
    {nombre: 'Mermelada', id: 7, precio: '$3000', stock:67}
);

console.log(productos); // Muestra el array actualizado

// Elimina el último elemento del array
console.log("Eliminar el último elemento del array productos utilizando pop().");
let eliminado = productos.pop();
console.log(eliminado);
console.log(productos); 

// Agrego "Arvejas" al inicio del array
console.log("Agregar un nuevo elemento al inicio del array productos utilizando unshift().");
productos.unshift({
    nombre: 'Arvejas',
    id: 0, 
    precio: '$2100',
    stock: 80
});
console.log(productos);

//Primer elemento eliminado con shift
console.log("Elimina el primer elemento del array productos utilizando shift().");
productos.shift();
console.log("Elemento eliminado con shift:", eliminado);
console.log(productos);

// Creamos un nuevo array filtrando por stock > 0
console.log("Crear un nuevo array llamado productosConStock que contenga solo los elementos del array productos donde el stock sea mayor que 0 utilizando filter().");
let productosConStock = productos.filter(producto => producto.stock > 0);

console.log(productosConStock);

// Nuevo array con solo los nombres
console.log("Crear un nuevo array llamado nombresProductos que contenga solo los nombres de todos los productos en el inventario utilizando map().");
let nombresProductos = productos.map(producto => producto.nombre);

console.log(nombresProductos);

// Buscar producto con id 3
console.log("Encontrar y guardar en una variable el primer producto en productos que tenga un id específico (ej. id:3) utilizando find(). Si no lo encuentra, indicar que no existe.");
let productoEncontrado = productos.find(producto => producto.id === 3);

if (productoEncontrado) {
    console.log("Producto encontrado:", productoEncontrado);
} else {
    console.log("No existe un producto con id 3.");
}


