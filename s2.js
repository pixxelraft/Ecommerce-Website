// Sample products data
const products = [
    { id: 1, name: "Premium Wireless Headphones", price: 199.99, image: "🎧", description: "High-quality wireless headphones with noise cancellation" },
    { id: 2, name: "Smart Fitness Watch", price: 299.99, image: "⌚", description: "Advanced fitness tracking with heart rate monitor" },
    { id: 3, name: "Portable Bluetooth Speaker", price: 89.99, image: "🔊", description: "Compact speaker with powerful sound" },
    { id: 4, name: "Wireless Charging Pad", price: 49.99, image: "🔋", description: "Fast wireless charging for all devices" },
    { id: 5, name: "Premium Coffee Maker", price: 159.99, image: "☕", description: "Programmable coffee maker with grinder" },
    { id: 6, name: "Smart Home Hub", price: 129.99, image: "🏠", description: "Control all your smart devices centrally" }
];

// --- Core Cart Logic using localStorage ---

// Load cart from localStorage or initialize as an empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to save the cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// --- Event Listener to run code when the page loads ---
document.addEventListener('DOMContentLoaded', () => {
    updateCartIcon(); // Update header cart count on every page
    // Run page-specific code
    if (document.getElementById('products-grid')) {
        loadProducts();
    }
    if (document.getElementById('cart-items-container')) {
        loadCartPage();
    }
});

// --- Functions for Product Page (index.html) ---

function loadProducts() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;
    productsGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'bg-white rounded-lg shadow-lg overflow-hidden product-card';
        productCard.innerHTML = `
            <div class="p-6 text-center">
                <div class="text-6xl mb-4">${product.image}</div>
                <h3 class="text-xl font-semibold mb-2">${product.name}</h3>
                <p class="text-gray-600 mb-4">${product.description}</p>
                <div class="flex justify-between items-center">
                    <span class="text-2xl font-bold text-indigo-600">$${product.price}</span>
                    <button onclick="addToCart(${product.id})" class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// --- Functions for Cart Page (cart.html) ---

function loadCartPage() {
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartTotalElem = document.getElementById('cart-total');
    if (!cartItemsContainer || !cartTotalElem) return;

    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-gray-500 text-center">Your cart is empty. <a href="index.html#products" class="text-indigo-600 hover:underline">Continue Shopping</a></p>';
        cartTotalElem.textContent = '0.00';
        return;
    }

    cart.forEach(item => {
        total += item.price * item.quantity;
        const cartItem = document.createElement('div');
        cartItem.className = 'flex items-center justify-between p-4 border-b';
        cartItem.innerHTML = `
            <div class="flex items-center">
                <span class="text-4xl mr-4">${item.image}</span>
                <div>
                    <h4 class="font-semibold text-lg">${item.name}</h4>
                    <p class="text-sm text-gray-600">$${item.price.toFixed(2)}</p>
                </div>
            </div>
            <div class="flex items-center space-x-3">
                <button onclick="updateQuantity(${item.id}, -1)" class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 font-bold">-</button>
                <span class="w-8 text-center font-medium">${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, 1)" class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 font-bold">+</button>
                <button onclick="removeFromCart(${item.id})" class="ml-4 text-red-500 hover:text-red-700" title="Remove Item">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    cartTotalElem.textContent = total.toFixed(2);
}

// --- Universal Cart Management Functions ---

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartIcon();
    showNotification(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartIcon();
    loadCartPage(); // Re-render the cart page UI
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        updateCartIcon();
        loadCartPage(); // Re-render the cart page UI
    }
}

function updateCartIcon() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        if (totalItems > 0) {
            cartCount.classList.remove('hidden');
        } else {
            cartCount.classList.add('hidden');
        }
    }
}

function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    showNotification('This is a demo checkout!');
    cart = [];
    saveCart();
    updateCartIcon();
    loadCartPage();
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg z-50 animate-pulse';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 3000);
}