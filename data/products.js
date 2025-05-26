// Creacion de un array de productos
let productos = [];

// creacion de objetos de la clase Producto
let producto001 = new Product(1, "Product 1", "Descripction and detail for product 1", "../assets/img/imgtest001.png", 10, 100.0, "Categoria 1", 1.0, "10x10x10", 4.5);
let producto002 = new Product(2, "Product 2", "Descripction and detail for product 2", "./assets/img/imgtest02.png", 20, 200.0, "Categoria 2", 2.0, "20x20x20", 4.0);
let producto003 = new Product(3, "Product 3", "Descripction and detail for product 3", "./assets/img/imgtest03.png", 30, 300.0, "Categoria 3", 3.0, "30x30x30", 3.5);
let producto004 = new Product(4, "Product 4", "Descripction and detail for product 4", "./assets/img/imgtest04.png", 40, 400.0, "Categoria 4", 4.0, "40x40x40", 3.0);
let producto005 = new Product(5, "Product 5", "Descripction and detail for product 5", "./assets/img/imgtest05.png", 50, 500.0, "Categoria 5", 5.0, "50x50x50", 2.5);
let producto006 = new Product(6, "Product 6", "Descripction and detail for product 6", "./assets/img/imgtest06.png", 60, 600.0, "Categoria 3", 6.0, "60x60x60", 2.0);
let producto007 = new Product(7, "Product 7", "Descripction and detail for product 7", "./assets/img/imgtest07.png", 70, 700.0, "Categoria 1", 7.0, "70x70x70", 1.5);
let producto008 = new Product(8, "Product 8", "Descripction and detail for product 8", "./assets/img/imgtest08.png", 80, 800.0, "Categoria 2", 8.0, "80x80x80", 1.0);
let producto009 = new Product(9, "Product 9", "Descripction and detail for product 9", "./assets/img/imgtest09.png", 90, 900.0, "Categoria 5", 9.0, "90x90x90", 0.5);
let producto010 = new Product(10, "Product 10", "Descripction and detail for product 10", "./assets/img/imgtest10.png", 100, 1000.0, "Categoria 10", 10.0, "100x100x100", 0.0);

// Agregar los productos al array de productos
productos.push(producto001);
productos.push(producto002);
productos.push(producto003);
productos.push(producto004);
productos.push(producto005);
productos.push(producto006);
productos.push(producto007);
productos.push(producto008);
productos.push(producto009);
productos.push(producto010);

console.log(productos); 