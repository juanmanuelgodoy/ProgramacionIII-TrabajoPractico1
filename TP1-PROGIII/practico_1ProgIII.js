
console.log("********BASE DE PRODUCTOS********************");


let base_productos = [
  { id: 1, nombre: "remera", precio: 120, stock: 5 }, 
  { id: 2, nombre: "pantalon", precio: 250, stock: 20 },
  { id: 3, nombre: "camisa", precio: 450, stock: 0 },
  { id: 4, nombre: "buzo", precio: 315, stock: 22 },
  { id: 5, nombre: "campera", precio: 150, stock: 32 },
];



console.log("********EXISTENCIA*****");

console.log("La cantidad de productos que hay en existencia es: ", base_productos.length);
console.log("El 2do. producto es: ", base_productos[0].nombre);
console.log("El 4to. producto es: ", base_productos[2].nombre);


console.log("*********FOR OF********");

for ( p of base_productos) {
  console.log(`El producto: ${p.nombre},tiene un precio final: ${p.precio}`);
}


console.log("**********FOR EACH*********");

base_productos.forEach((base_productos) => {
  console.log(`producto: ${base_productos.nombre}, precio: ${base_productos.precio}`);
});

console.log("********PUSH******");


base_productos.push(
  { id: 6, nombre: "media", precio: 20, stock: 4 },
  { id: 7, nombre: "slip", precio: 12, stock: 6 }
);
console.log(base_productos);


console.log("***************POP*******************");

base_productos.pop();
console.log(base_productos);


console.log("********UNSHIFT**********");

base_productos.unshift({ id: 0, nombre: "CHALECO", precio: 50, stock: 3 });
console.log(base_productos);

console.log("**********SHIFT************");

base_productos.shift();
console.log(base_productos);

console.log("**********FILTER************");
const productosConStock = base_productos.filter((x) => x.stock > 0);

console.log(productosConStock);

console.log("**********MAP************");
const nombresProductos = base_productos.map((p) => p.nombre);
console.log(nombresProductos);  

console.log("**********FIND************");
const id_producto = 10;
const buscar_id = base_productos.find((p) => p.id === id_producto);
if (buscar_id) {
  console.log(` producto con id ${id_producto} =`, buscar_id);
} else {
  console.log("su producto no existe con ese id");
}

console.log("********************SORT*******************");

const productosOrdenados = [...base_productos].sort((a, b) => b.precio - a.precio);
console.log(productosOrdenados);





