let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.getAttribute('data-product');
        const productPrice = this.getAttribute('data-price');
        
        const item = {
            name: productName,
            price: productPrice
        };
        
        cart.push(item);
        updateCart();
    });
});

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');

    cartCount.textContent = cart.length;
    cartItems.innerHTML = '';

    if (cart.length > 0) {
        cart.forEach(item => {
            const li = document.createElement('li');
            li.classList.add('list-group-item');
            li.textContent = `${item.name} - $${item.price}`;
            cartItems.appendChild(li);
        });
    } else {
        cartItems.innerHTML = '<li class="list-group-item">No items in cart</li>';
    }
}
