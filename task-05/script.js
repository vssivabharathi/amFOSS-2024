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

const terminalOutput = document.querySelector('.terminal-output');
const terminalInput = document.querySelector('input[type="text"]');


function handleInput(command) {


    switch (action) {

        case 'help':
            viewCommand();
            break;

        default:
            terminalOutput.textContent += `Invalid command: ${command}\n`;
            break;
    }

    terminalInput.value = '';
}

function viewCommand() {
    terminalOutput.innerHTML += "Available Commands:"

}



