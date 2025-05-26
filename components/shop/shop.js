let shop = document.getElementById("shop")
let score = document.getElementById("score")
let product = []
let products = [];
let catalogue = [];
let productsCart = [];
let productsWishList = [];
let renderProductsShop = "";

fetch("http://127.0.0.1:5500/data/product.json")
  .catch((error) => console.error("Error:", error))
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      catalogue.push(
        new Producto(
          element.pid,
          element.nombre,
          element.descripcion,
          element.imagen,
          element.stock,
          element.precio,
          element.categoria,
          element.peso,
          element.medidas,
          element.score
        )
      );
    });
  });

function renderShop() {
  for (const producto of catalogue) {
    renderProductsShop += `
    <div class="col">
      <div class="card">
        <img src=.${producto.imagen} class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title d-flex justify-content-center">${producto.nombre}</h5>
          <p class="card-text d-flex justify-content-center text-center text-black-50">${producto.descripcion}<p>
          <div class="stats mt-1fs-6">
            <hr class="featurette-divider" />
            <div class="d-flex justify-content-between text-black-50"><span>Categoria:</span><span class="fw-bold">${producto.categoria}</span></div>
            <div class="d-flex justify-content-between text-black-50"><span>Peso:</span><span>${producto.peso} grs.</span></div>
            <div class="d-flex justify-content-between text-black-50"><span>Medidas:</span><span>${producto.medidas}</span></div>
            <div class="d-flex justify-content-between text-black-50"><span>Stock:</span><span>${producto.stock}</span></div>
            <hr class="featurette-divider" />
          </div>
          <div class="d-flex justify-content-between total font-weight-bold mt-1"><span>Precio final:</span><span class="fs-4">$${producto.precio}<span></div>
          <div class="d-flex justify-content-between total font-weight-bold mt-1"><span id="score"><i class="bi bi-star-fill text-secondary"></i><i class="bi bi-star-fill text-secondary"></i><i class="bi bi-star-fill text-secondary"></i><i class="bi bi-star-fill text-secondary"></i><i class="bi bi-star-fill text-secondary"></i></span><span></span></div>
          <div class="d-flex justify-content-between total font-weight-bold mt-1"><span><button onclick="addProductToWishList()" class="btn btn-secondary"><img src="../assets/img/heart_icon.svg" style="width: 20px" alt=""></button></span><span><button mark = ${producto.pid} class="btn btn-secondary" onclick="addProductToCart()"><i class="bi bi-cart-fill"></i> Comprar</button></span><span><button class="btn btn-secondary"><i class="bi bi-eye-fill"></i></button></span></div>
        </div>
      </div>
    </div>
      `;
    product.push(catalogue[producto.pid-1])
  }
  shop.innerHTML = renderProductsShop;
}


function addProductToWishList(event) {
  productsWishList.push(event)
  renderWishList();
}

// función que tras 3 segundo retorna un array de objetos
const bringProductsShop = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
      div = document.getElementById("spinner");
      div.style.display = "none";
    }, 3000);
  });
};

//inicializamos con un array vacío
const viewProductsShop = (arr) => {
  renderShop();
};

// asincrónicamente pedimos los datos y generamos la vista
bringProductsShop().then((res) => {
  products = res;
  viewProductsShop(products);
});

function addProductToCart() {
  productsCart.push(product[0])
  console.log(product)
  console.log(productsCart)
}