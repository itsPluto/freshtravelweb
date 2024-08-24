document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutForm = document.getElementById('checkout-form');
    const checkoutButton = document.getElementById('checkout');

    // Add event listeners to "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const product = button.parentElement;
            const name = product.querySelector('h3').textContent;
            const price = parseFloat(product.getAttribute('data-price'));

            cartItems.push({ name, price });
            updateCart();
        });
    });

    // Update the cart display
    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cartItems.forEach(item => {
            total += item.price;
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsContainer.appendChild(listItem);
        });

        cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    }

    // Show checkout form
    checkoutButton.addEventListener('click', () => {
        checkoutForm.style.display = 'block';
    });

    // Handle form submission
    document.getElementById('form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Order submitted!');
        // Reset cart
        cartItems.length = 0;
        updateCart();
        checkoutForm.style.display = 'none';
    });
});
