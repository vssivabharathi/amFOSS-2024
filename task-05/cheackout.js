const API_URL = 'https://fakestoreapi.com';
const cart = [1, 2]; // Assume these are product IDs from the cart
let productDetailsCache = {}; // Cache to store product details

document.addEventListener('DOMContentLoaded', () => {
    loadCartItems();
    document.getElementById('checkout-button').addEventListener('click', () => {
        alert('Proceeding to checkout!');
    });
});

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
