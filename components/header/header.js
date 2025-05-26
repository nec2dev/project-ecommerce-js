const header = document.getElementById("header");
header.innerHTML = `
        <div style="background-color: #c4c4c4; border-bottom: 1px solid #dee2e6; width: 100%;">
            <div class="container py-2">
                <!-- Fila principal: Logo | Search | Botones -->
                <div class="d-flex flex-column flex-md-row align-items-center justify-content-between">
                    <!-- Logo -->
                    <div class="d-flex align-items-center mb-2 mb-md-0">
                        <img src="../assets/img/icons/ecommerce_icon.png" alt="eCommerce icon" style="height:40px;">
                        <span class="ms-2 fw-bold fs-4">eCommerce</span>
                    </div>
                    <!-- Search -->
                    <form class="d-flex justify-content-center my-2 my-md-0 flex-grow-1 mx-md-4"
                        style="max-width:350px; min-width:180px;">
                        <input class="form-control w-100" type="search" placeholder="Search..." aria-label="Search">
                    </form>
                    <!-- User Links + User Icon -->
                    <div class="d-flex align-items-center">
                        <a href="./login.html" class="btn btn-outline-dark btn-sm me-2">Login</a>
                        <a href="./sign_up.html" class="btn btn-outline-dark btn-sm me-2">Sign up</a>
                        <a href="./user.html" class="d-flex align-items-center">
                            <img src="../assets/img/icons/user.svg" alt="User" style="height:32px;">
                        </a>
                    </div>
                </div>
                <!-- Navbar hamburguesa para móvil -->
                <nav class="navbar navbar-expand-md navbar-light mt-2">
                    <div class="container-fluid px-0">
                        <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                            data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="mainNavbar">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item"><a class="nav-link px-2" href="../index.html">Home</a></li>
                                <li class="nav-item"><a class="nav-link px-2" href="./categories.html">Categories</a>
                                </li>
                                <li class="nav-item"><a class="nav-link px-2" href="./shop.html">Shop</a></li>
                                <li class="nav-item"><a class="nav-link px-2" href="./contacts.html">Contacts</a></li>
                                <li class="nav-item"><a class="nav-link px-2" href="./faqs.html">FAQs</a></li>
                            </ul>
                            <div class="d-flex ms-md-auto mt-3 mt-md-0">
                                <a href="./bills.html" class="me-3">
                                    <img src="../assets/img/icons/receipt.svg" alt="Bills" style="height:22px;">
                                </a>
                                <a href="./wishlist.html" class="me-3">
                                    <img src="../assets/img/icons/wishlist.svg" alt="Wishlist" style="height:22px;">
                                </a>
                                <a href="./cart.html">
                                    <img src="../assets/img/icons/cart.svg" alt="Cart" style="height:22px;">
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
`;