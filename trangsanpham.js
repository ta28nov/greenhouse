document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { id: 1, name: "Aloe Vera", price: 10, category: "Succulents", imgSrc: "cay1.jpg" },
        { id: 2, name: "Snake Plant", price: 15, category: "Succulents", imgSrc: "cay2.jpg" },
        { id: 3, name: "Fern", price: 12, category: "Ferns", imgSrc: "cay3.jpg" },
        { id: 4, name: "Bamboo Palm", price: 20, category: "Palms", imgSrc: "cay4.jpg" },
        { id: 5, name: "Spider Plant", price: 8, category: "Air Purifiers", imgSrc: "cay5.jpg" },
        { id: 6, name: "Peace Lily", price: 18, category: "Air Purifiers", imgSrc: "cay6.jpg" }
    ];

    const productContainer = document.getElementById('product-list');

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';

        productItem.innerHTML = `
            <img src="${product.imgSrc}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})" id="add-to-cart-${product.id}">Add to Cart</button>
        `;

        productContainer.appendChild(productItem);
    });

    window.addToCart = function(productId) {
        const selectedProduct = products.find(p => p.id === productId);
        const cartCount = document.getElementById('cart-count');
        const addToCartButton = document.getElementById(`add-to-cart-${productId}`);
        
        // Increase cart count
        cartCount.textContent = parseInt(cartCount.textContent) + 1;
        
        // Disable button
        addToCartButton.disabled = true;

        // Add product to cart (simulate for now)
        console.log(`Added ${selectedProduct.name} to cart.`);
    };
});
