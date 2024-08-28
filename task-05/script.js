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
let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    terminalInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            processCommand(terminalInput.value.trim());
            terminalInput.value = '';
        }
    });
});

function processCommand(command) {
    clearTerminal(); // Clear the previous command output

    const [action, ...args] = command.split(' ');

    terminalOutput.innerHTML += `<span style="color: green;">user&ubuntu:~ </span>${command}<br/>`;
    switch (action) {
        case 'help':
            viewCommand();
            break;
        case 'list':
            listProducts();
            break;
        case 'details':
            if (args.length) getProductDetails(args[0]);
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
            if (args.length) searchProduct(args.join(' '));
            break;
        case 'sort':
            if (args.length) sortProducts(args[0]);
            break;
        default:
            terminalOutput.textContent += `Invalid command: ${command}\n`;
            break;
    }
}

function viewCommand() {
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
\n`;
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
        const response = await fetch(`${API_URL}/products/${productId}`);
        const product = await response.json();
        displayProductDetails(product);
    } catch (error) {
        console.error('Error fetching product details:', error);
    }
}

// Function to add product to cart
function addToCart(productId) {
    cart.push(productId);
    terminalOutput.innerHTML += `Product ${productId} added to cart.\n`;
}

// Function to remove product from cart
function removeFromCart(productId) {
    const index = cart.indexOf(productId);
    if (index > -1) {
        cart.splice(index, 1);
        terminalOutput.innerHTML += `Product ${productId} removed from cart.\n`;
    } else {
        terminalOutput.innerHTML += `Product ${productId} not found in cart.\n`;
    }
}

// Function to view cart items
function viewCart() {
    if (cart.length === 0) {
        terminalOutput.innerHTML += `Your cart is empty.\n`;
        return;
    }
    terminalOutput.innerHTML += `Cart items: ${cart.join(', ')}\n`;
}

// Function to handle 'buy' command
function buyProducts() {
    if (cart.length === 0) {
        terminalOutput.innerHTML += `Your cart is empty. Add items before buying.\n`;
        return;
    }
    window.location.href = 'checkout.html'; 
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
        terminalOutput.innerHTML += `${product.id}: ${product.title} - $${product.price}\n`;
    });
}

function displayProductDetails(product) {
    terminalOutput.innerHTML += `${product.id}: ${product.title} - $${product.price}\n`;
    terminalOutput.innerHTML += `${product.description}\n`;
}







