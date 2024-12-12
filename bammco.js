let currentProductIndex = 0;
let products = [];
let isPaginationEnabled = false;

document.addEventListener('DOMContentLoaded', () => {
    // Collect all product elements
    products = Array.from(document.querySelectorAll('.product'));
    showProduct(currentProductIndex); // Show the first product by default
});

function sortProducts() {
    const sortOption = document.getElementById('sort-select').value;

    if (sortOption === 'prev-next') {
        // Enable pagination by showing next/previous buttons
        document.getElementById('prev-button').style.display = 'inline-block';
        document.getElementById('next-button').style.display = 'inline-block';
        isPaginationEnabled = true;
        currentProductIndex = 0; // Start from the first product
        showProduct(currentProductIndex);
    } else {
        // Disable pagination and hide the buttons
        document.getElementById('prev-button').style.display = 'none';
        document.getElementById('next-button').style.display = 'none';
        isPaginationEnabled = false;
        showProductsDefault();
    }
}

function showProductsDefault() {
    products.forEach(product => {
        product.style.display = 'block'; // Show all products
    });
}

function showProduct(index) {
    // Hide all products
    products.forEach(product => {
        product.style.display = 'none';
    });

    // Display the current product
    if (products[index]) {
        products[index].style.display = 'block';
    }
}

function showNextProduct() {
    if (currentProductIndex < products.length - 1) {
        currentProductIndex++;
        showProduct(currentProductIndex);
    }
}

function showPrevProduct() {
    if (currentProductIndex > 0) {
        currentProductIndex--;
        showProduct(currentProductIndex);
    }
}
