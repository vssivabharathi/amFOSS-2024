// USING THE FAKEAPI for the product
document.addEventListener('DOMContentLoaded', () => {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
            const productList = document.getElementById('product-list');

            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');

                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <div class="price-info">
                        <span class="old-price">$${(product.price * 1.2).toFixed(2)}</span>
                        <span class="new-price">$${product.price}</span>
                    </div>
                    <div class="actions">
                        <button class="wishlist"><span class="material-symbols-outlined">
                            favorite
                            </span></button>
                        <button class="add-to-cart"><span class="material-symbols-outlined">
                            shopping_cart
                            </span></button>
                    </div>
                `;

                productList.appendChild(productCard);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
});

//fix the errors and complete the code.
const API_URL = 'https://fakestoreapi.com';
const terminalOutput = document.querySelector('.terminal-output');
const terminalInput = document.querySelector('input[type="text"]');
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let productDetailsCache = {}; 

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('checkout-button')) {
        
        loadCartItems();
        document.getElementById('checkout-button').addEventListener('click', () => {
            alert('Proceeding to checkout!');
        });
    } else {
      
        terminalInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                processCommand(terminalInput.value.trim());
                terminalInput.value = '';
            }
        });
    }
});

async function processCommand(command) {
    clearTerminal(); 

    const [action, ...args] = command.split(' ');

    
    terminalOutput.innerHTML += `<span style="color: green;">user&ubuntu:~ ${command}</span><br/>`;

    switch (action) {
        case 'help':
            viewCommand();
            break;
        case 'list':
            await listProducts();
            break;
        case 'details':
            if (args.length) await getProductDetails(args[0]);
            break;
        case 'add':
            if (args.length) addToCart(args[0]);
            break;
        case 'remove':
            if (args.length) removeFromCart(args[0]);
            break;
        case 'cart':
            viewCart();
            break;
        case 'buy':
            buyProducts();
            break;
        case 'clear':
            clearTerminal();
            break;
        case 'search':
            if (args.length) await searchProduct(args.join(' '));
            break;
        case 'sort':
            if (args.length) await sortProducts(args[0]);
            break;
        default:
            terminalOutput.innerHTML += `Invalid command: ${command}<br/>`;
            break;
    }
}

async function viewCommand() {
    terminalOutput.innerHTML += `
Available Commands:
- help: Display this help text
- list: List all available products
- details 'product_id': View details of a specific product by ID
- add 'product_id': Add a product to the cart using its ID
- remove 'product_id': Remove a product from the cart using its ID
- cart: View the current items in your cart
- buy: Proceed to checkout
- clear: Clear the terminal screen
- search 'product_name': Search for a product by name
- sort 'price/name': Sort products by price or name
<br/>`;
}

// Function to fetch and display products
async function listProducts() {
    try {
        const response = await fetch(`${API_URL}/products`);
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Function to display product details
async function getProductDetails(productId) {
    try {
        if (productDetailsCache[productId]) {
            displayProductDetails(productDetailsCache[productId]);
        } else {
            const response = await fetch(`${API_URL}/products/${productId}`);
            const product = await response.json();
            productDetailsCache[productId] = product; // Cache the product details
            displayProductDetails(product);
        }
    } catch (error) {
        console.error('Error fetching product details:', error);
    }
}

// Function to add product to cart
function addToCart(productId) {
    if (!cart.includes(productId)) {
        cart.push(productId);
        localStorage.setItem('cart', JSON.stringify(cart)); // Saving  the cart to localStorage
        terminalOutput.innerHTML += `Product ${productId} added to cart.<br/>`;
    } else {
        terminalOutput.innerHTML += `Product ${productId} is already in the cart.<br/>`;
    }
}

// Function to remove product from cart
function removeFromCart(productId) {
    const index = cart.indexOf(productId);
    if (index > -1) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart)); 
        terminalOutput.innerHTML += `Product ${productId} removed from cart.<br/>`;
    } else {
        terminalOutput.innerHTML += `Product ${productId} not found in cart.<br/>`;
    }
}

// Function to view cart items with product names
async function viewCart() {
    if (cart.length === 0) {
        terminalOutput.innerHTML += `Your cart is empty.<br/>`;
        return;
    }

    // Fetch product details for each product in the cart
    const productDetailsPromises = cart.map(productId => fetch(`${API_URL}/products/${productId}`).then(response => response.json()));

    try {
        const productDetails = await Promise.all(productDetailsPromises);
        terminalOutput.innerHTML += `Your cart items:<br/>`;
        productDetails.forEach(product => {
            terminalOutput.innerHTML += `${product.title} - $${product.price}<br/>`;
        });
    } catch (error) {
        console.error('Error fetching cart product details:', error);
        terminalOutput.innerHTML += `<p>Error loading cart items. Please try again later.</p>`;
    }
}

// Function to handle 'buy' command
function buyProducts() {
    if (cart.length === 0) {
        terminalOutput.innerHTML += `Your cart is empty. Add items before buying.<br/>`;
        return;
    }
    window.location.href = 'checkout.html'; // Redirect to checkout page
}

// Function to clear terminal screen
function clearTerminal() {
    terminalOutput.innerHTML = '';
}

// Function to search for a product
async function searchProduct(query) {
    try {
        const response = await fetch(`${API_URL}/products`);
        const products = await response.json();
        const results = products.filter(product => product.title.toLowerCase().includes(query.toLowerCase()));
        displayProducts(results);
    } catch (error) {
        console.error('Error searching products:', error);
    }
}

// Function to sort products
async function sortProducts(criterion) {
    try {
        const response = await fetch(`${API_URL}/products`);
        let products = await response.json();
        if (criterion === 'price') {
            products = products.sort((a, b) => a.price - b.price);
        } else if (criterion === 'name') {
            products = products.sort((a, b) => a.title.localeCompare(b.title));
        }
        displayProducts(products);
    } catch (error) {
        console.error('Error sorting products:', error);
    }
}

// Utility functions to display products and details
function displayProducts(products) {
    products.forEach(product => {
        terminalOutput.innerHTML += `${product.id}: ${product.title} - $${product.price}<br/>`;
    });
}

function displayProductDetails(product) {
    terminalOutput.innerHTML += `${product.id}: ${product.title} - $${product.price}<br/>`;
    terminalOutput.innerHTML += `${product.description}<br/>`;
}

// Function to load cart items on the checkout page
async function loadCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    let totalAmount = 0;

    // Fetch product details for each product in the cart
    const productDetailsPromises = cart.map(productId =>
        fetch(`${API_URL}/products/${productId}`).then(response => response.json())
    );

    try {
        const productDetails = await Promise.all(productDetailsPromises);

        productDetails.forEach(product => {
            cartItemsContainer.innerHTML += `
                <div class="cart-item">
                    <img src="${product.image}" alt="${product.title}" class="item-image">
                    <div class="item-details">
                        <p>${product.title}</p>
                        <p class="price">$${product.price.toFixed(2)}</p>
                    </div>
                </div>
            `;
            totalAmount += product.price;
        });

        // Update total amount and tax
        const tax = totalAmount * 0.08; // Assuming 8% tax
        document.getElementById('total-tax').textContent = `$${tax.toFixed(2)}`;
        document.getElementById('total-amount').textContent = `$${(totalAmount + tax).toFixed(2)}`;
    } catch (error) {
        console.error('Error fetching cart product details:', error);
        cartItemsContainer.innerHTML = `<p>Error loading cart items. Please try again later.</p>`;
    }
}








