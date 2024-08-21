document.addEventListener("DOMContentLoaded", function() {
    const cart = [
        { id: 1, name: "Aloe Vera", price: 10, quantity: 1, imgSrc: "cay1.jpg" },
        { id: 2, name: "Snake Plant", price: 15, quantity: 2, imgSrc: "cay2.jpg" }
    ];

    const cartItemsContainer = document.getElementById('cart-items');
    const totalItems = document.getElementById('total-items');
    const totalCost = document.getElementById('total-cost');

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        let itemCount = 0;

        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';

            cartItem.innerHTML = `
                <img src="${item.imgSrc}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>$${item.price} x ${item.quantity}</p>
                <button onclick="increaseQuantity(${item.id})">+</button>
                <button onclick="decreaseQuantity(${item.id})">-</button>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            `;

            cartItemsContainer.appendChild(cartItem);

            total += item.price * item.quantity;
            itemCount += item.quantity;
        });

        totalItems.textContent = itemCount;
        totalCost.textContent = total.toFixed(2);
    }

    window.increaseQuantity = function(id) {
        const item = cart.find(p => p.id === id);
        if (item) {
            item.quantity++;
            updateCart();
        }
    };

    window.decreaseQuantity = function(id) {
        const item = cart.find(p => p.id === id);
        if (item && item.quantity > 1) {
            item.quantity--;
            updateCart();
        }
    };

    window.removeFromCart = function(id) {
        const index = cart.findIndex(p => p.id === id);
        if (index !== -1) {
            cart.splice(index, 1);
            updateCart();
        }
    };

    document.getElementById('checkout-button').addEventListener('click', function() {
        alert('Coming Soon!');
    });

    document.getElementById('continue-shopping').addEventListener('click', function() {
        window.location.href = 'trangsanpham.html';
    });

    updateCart();
});
