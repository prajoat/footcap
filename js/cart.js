document.getElementById('add-to-cart').addEventListener('click', function () {
    // Get selected options
    var selectedSize = document.getElementById('size-select').value;
    var quantity = document.getElementById('quantity-input').value;

    // Create an object representing the selected item
    var selectedItem = {
        name: 'Downshifter Sports Shoes',
        size: selectedSize,
        price: 50.00,
        image: './assets/images/shoe.webp',
        quantity: quantity
    };

    // Store the selected item in local storage (you can use other methods for data storage)
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push(selectedItem);
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Redirect to the cart page
    window.location.href = 'cart.html';
});