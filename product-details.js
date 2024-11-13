const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get('product');

// Define product data for each product
const productData = {
    Product1: {
        image: "image1.jpg",
        description: "Detailed description for Product 1.",
        price: 10
    },
    Product2: {
        image: "image2.jpg",
        description: "Detailed description for Product 2.",
        price: 15
    },
    // more products...
};

// Populate the page with the relevant product details
if (productName && productData[productName]) {
    document.getElementById('product-name').textContent = productName;
    document.getElementById('product-image').src = productData[productName].image;
    document.getElementById('product-description').textContent = productData[productName].description;
    document.getElementById('product-price').textContent = `Price: $${productData[productName].price}`;
} else {
    document.getElementById('product-name').textContent = "Product Not Found";
    document.getElementById('product-description').textContent = "Sorry, this product does not exist.";
    document.getElementById('product-price').textContent = "";
}
