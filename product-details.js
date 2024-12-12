const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get('product');

// Define product data for each product
const productData = {
    Product1: {
        image: "image1.jpg",
        description: "Rock autographed by Jesus Christ himself, guaranteed to make your faith rock-solid.",
        price: Math.floor(Math.random() * (30 - 7 + 1)) + 7
    },
    Product2: {
        image: "image2.jpg",
        description: "A small rock that’s just the right size for skipping across water or collecting dust.",
        price: Math.floor(Math.random() * (30 - 7 + 1)) + 7
    },
    Product3: {
        image: "image3.jpg",
        description: "Large rock, perfect for your minimalist garden or as an extreme paperweight.",
        price: Math.floor(Math.random() * (30 - 7 + 1)) + 7
    },
    Product4: {
        image: "image4.jpg",
        description: "A rock that looks suspiciously like Abraham Lincoln. Great conversation starter.",
        price: Math.floor(Math.random() * (30 - 7 + 1)) + 7
    },
    Product5: {
        image: "image5.jpg",
        description: "Transparent rock that’s totally not a piece of glass. Adds mystery to your collection.",
        price: Math.floor(Math.random() * (30 - 7 + 1)) + 7
    },
    Product6: {
        image: "image6.jpg",
        description: "Rock that may or may not contain a treasure map. Adventurer's dream!",
        price: Math.floor(Math.random() * (30 - 7 + 1)) + 7
    },
    Product7: {
        image: "image7.jpg",
        description: "A perfectly normal pebble. Nothing special, unless you believe otherwise.",
        price: Math.floor(Math.random() * (30 - 7 + 1)) + 7
    },
    Product8: {
        image: "image8.jpg",
        description: "Fossilized potato rock. Technically not a potato, but equally awe-inspiring.",
        price: Math.floor(Math.random() * (30 - 7 + 1)) + 7
    },
    Product9: {
        image: "image9.jpg",
        description: "A rock that thinks it’s a moon fragment. It’s got the craters to prove it.",
        price: Math.floor(Math.random() * (30 - 7 + 1)) + 7
    },
    Product10: {
        image: "image10.jpg",
        description: "Magnetic rock. Stick it on your fridge and watch the magic happen.",
        price: Math.floor(Math.random() * (30 - 7 + 1)) + 7
    },
    Product11: {
        image: "image11.jpg",
        description: "A shiny rock that you swear has mystical powers. Makes you 20% cooler.",
        price: Math.floor(Math.random() * (30 - 7 + 1)) + 7
    },
    Product12: {
        image: "image12.jpg",
        description: "Rock that resembles a sleeping cat. Perfect for tricking visitors into thinking you own a pet.",
        price: Math.floor(Math.random() * (30 - 7 + 1)) + 7
    }
};

// Populate the page with the relevant product details

if (productData[productName]) {
    const product = productData[productName];
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-description").textContent = product.description;
    document.getElementById("product-price").textContent = `Price: ${product.price}`; // Update price
    document.getElementById("purchase-link").href = product.purchaseLink;
} else {
    document.getElementById("product-description").textContent = "Are You Feeling Lucky?";
    document.getElementById("product-price").textContent = ""; // Clear price if no product is found
}
