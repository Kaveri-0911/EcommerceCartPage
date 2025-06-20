document.addEventListener(DOMContentLoaded, ()=> {
    const products  = [
        { id : 1 , name : "Product 1 " , price : 29.56 } ,
        {id : 2 , name : "Product 2 " , price : 39.56 } ,
        {id : 3 , name : "Product 3 " , price : 49.56 } ,
    ];

    const cart = [];
    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const emptyCartMsg = document.getElementById("empty-cart");
    const cartTotalMsg = document.getElementById("cart-total");
    const totalPriceDisplay = document.getElementById("total-price");
    const checkOutBtn = document.getElementById("checkout-btn ");

    products.forEach(product => {
        const productDiv = document.createElement("div")
        productDiv.classList.add("product"); 
        productDiv.innerHTML = `
        <span>${product.name} - $${product.price.toFixed(2)}</span>
        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
        productList.appendChild(productDiv);

    });

    productList.addEventListener("click", (event) => {
        if (event.target.classList.contains("add-to-cart")) {
            const productId = parseInt(event.target.getAttribute("data-id"));
            const product = products.find(p => p.id === productId);
            cart.push(product);
            updateCart();
        }
    });

}); 