document.addEventListener("DOMContentLoaded", function () {
    // Retrieve cart data from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function updateCartDisplay() {
        const cartItemsContainer = document.getElementById("cart-items");
        const totalPrice = document.getElementById("total-price");
        let total = 0;
        cartItemsContainer.innerHTML = ""; // Clear existing items

        cart.forEach((item, index) => {
            total += item.price * item.quantity;

            const row = document.createElement("tr");
            row.classList.add("cart-item");
            row.innerHTML = `
                <td><a href="product-details.html?product=${item.name}">${item.name}</a></td>
                <td><input type="number" value="${item.quantity}" min="1" class="quantity-input" data-index="${index}" /></td>
                <td class="item-price">$${(item.price * item.quantity).toFixed(2)}</td>
                <td><button class="remove-button" data-index="${index}">Remove</button></td>
            `;
            cartItemsContainer.appendChild(row);
        });

        totalPrice.textContent = `$${total.toFixed(2)}`;
    }

    // Event listener to update cart when quantity changes
    document.getElementById("cart-items").addEventListener("input", function (event) {
        if (event.target.classList.contains("quantity-input")) {
            const index = event.target.getAttribute("data-index");
            const newQuantity = parseInt(event.target.value);
            if (newQuantity > 0) {
                cart[index].quantity = newQuantity;
                localStorage.setItem("cart", JSON.stringify(cart));
                updateCartDisplay();
            }
        }
    });

    // Event listener to remove item from cart
    document.getElementById("cart-items").addEventListener("click", function (event) {
        if (event.target.classList.contains("remove-button")) {
            const index = event.target.getAttribute("data-index");
            cart.splice(index, 1); // Remove the item from the cart array
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartDisplay();
        }
    });

    // Checkout button
    document.getElementById("checkout-btn").addEventListener("click", function () {
        alert("Proceeding to checkout!");
        // Implement checkout logic here
    });

    // Initialize cart display
    updateCartDisplay();
});
