// Array of 25 reviews with random stars for each
const reviews = [
    { text: "Tech support asked if I tried turning it off and on. It’s a chair.", stars: "★★☆☆☆" },
    { text: "I ordered one, but they sent me 10. Now I’m the neighborhood supplier.", stars: "★★★★☆" },
    { text: "The product’s fine, but their live chat bot tried to argue with me.", stars: "★★★☆☆" },
    { text: "It broke after a day, but tech support sent me an apology meme.", stars: "★★☆☆☆" },
    { text: "Why does it need firmware updates? It’s a mug.", stars: "★★☆☆☆" },
    { text: "Ordered socks, got a toaster. Honestly, I’m not mad.", stars: "★★★★☆" },
    { text: "Tech support told me to ‘believe in myself.’ Not helpful, but inspiring.", stars: "★★★☆☆" },
    { text: "It said ‘assembly required,’ but I needed an engineering degree.", stars: "★☆☆☆☆" },
    { text: "Bought a smart fridge. Now it’s smarter than me.", stars: "★★★★★" },
    { text: "The product is great, but the shipping box could double as a fortress.", stars: "★★★★☆" },
    { text: "Tech support said my issue was ‘an enigma.’ I’m still confused.", stars: "★★☆☆☆" },
    { text: "This site has everything, including a surprising amount of existential dread.", stars: "★★★☆☆" },
    { text: "They sent the wrong color, but it matches my soul, so it’s fine.", stars: "★★★☆☆" },
    { text: "I tried to return it, but the website started glitching. Coincidence?", stars: "★★☆☆☆" },
    { text: "The instructions were written in Comic Sans. A bold choice.", stars: "★★★☆☆" },
    { text: "Tech support responded with a GIF. 10/10 communication skills.", stars: "★★★★☆" },
    { text: "It does what it says, but with zero enthusiasm.", stars: "★★★☆☆" },
    { text: "The FAQ page told me to ‘just Google it.’ Incredible honesty.", stars: "★★☆☆☆" },
    { text: "The product works, but the packaging looked like it survived a war.", stars: "★★★☆☆" },
    { text: "Their chatbot is smarter than their CEO. I asked.", stars: "★★★★☆" },
    { text: "Why does my new lamp need a subscription service?", stars: "★★☆☆☆" },
    { text: "Product is amazing, but their emails are just memes. Respect.", stars: "★★★★☆" },
    { text: "Bought it during a sale. Still not sure what I actually bought.", stars: "★★★☆☆" },
    { text: "The delivery guy handed it to me like it was cursed.", stars: "★★☆☆☆" },
    { text: "This is the IKEA of online shopping. Fun and mildly terrifying.", stars: "★★★★☆" },
    { text: "They shipped it in a box big enough for a small car.", stars: "★★★★☆" },
    { text: "Tech support asked if I had read the manual. I hadn’t. Still mad.", stars: "★★☆☆☆" },
    { text: "It’s functional, but also emotionally distant.", stars: "★★★☆☆" },
    { text: "Customer service sent me a playlist to ‘ease the pain.’ I liked it.", stars: "★★★★☆" },
    { text: "Why does a toaster need Bluetooth?", stars: "★★☆☆☆" },
    { text: "Bought one for my cat. She’s the boss now.", stars: "★★★★★" },
    { text: "The ‘lifetime guarantee’ lasted three days. Impressive, in a way.", stars: "★☆☆☆☆" },
    { text: "Their tech support hotline is just elevator music on repeat.", stars: "★☆☆☆☆" },
    { text: "The website crashed halfway through checkout, so I bought two. Clever.", stars: "★★★☆☆" },
    { text: "The customer service rep called me ‘bro.’ Weirdly comforting.", stars: "★★★★☆" },
    { text: "It’s just as advertised, which is somehow disappointing.", stars: "★★★☆☆" },
    { text: "Why does my blender need an app? Still works though.", stars: "★★★☆☆" },
    { text: "I called for support and ended up talking about my life choices. Thanks?", stars: "★★★★☆" },
    { text: "The shipping box came with more tape than product.", stars: "★★☆☆☆" },
    { text: "Their phone support answered with ‘Sup?’ I was speechless.", stars: "★★★☆☆" },
    { text: "They sent me a refund in store credit... for a store I hate.", stars: "★★☆☆☆" },
    { text: "The product is fine, but the website feels like a maze.", stars: "★★☆☆☆" },
    { text: "Got charged twice, but they said ‘It’s part of the experience.’", stars: "★☆☆☆☆" },
    { text: "Their email replies end with emojis. Oddly satisfying.", stars: "★★★★☆" },
    { text: "The manual was just one page: ‘Good luck.’", stars: "★★☆☆☆" },
    { text: "Bought it because it had 5 stars. It deserves 2.", stars: "★★☆☆☆" },
    { text: "It’s like they designed it just to make me laugh.", stars: "★★★★☆" },
    { text: "The packaging was more impressive than the product.", stars: "★★★☆☆" },
    { text: "Tech support just said, ‘Oops.’ Still waiting for a fix.", stars: "★☆☆☆☆" },
    { text: "Bought it for the free shipping. Product’s okay too.", stars: "★★★☆☆" },
    { text: "I called tech support, and they put me on hold forever. Iconic.", stars: "★☆☆☆☆" },
    { text: "It works great, but it’s suspiciously sticky.", stars: "★★☆☆☆" },
    { text: "Their refund policy is basically ‘No refunds.’ Bold.", stars: "★☆☆☆☆" },
    { text: "They sent me a ‘surprise gift.’ It was bubble wrap.", stars: "★★★☆☆" },
    { text: "Why does it make that noise? Is it alive?", stars: "★★☆☆☆" },
    { text: "It’s not perfect, but it’s perfect for my chaos-loving heart.", stars: "★★★★☆" },
    { text: "Got a customer service survey before the product. Wild.", stars: "★★☆☆☆" }
];


// Function to display reviews
function displayReviews() {
    let reviewDisplay = document.getElementById('review-display');
    reviewDisplay.innerHTML = ""; // Clear the current reviews

    // Get 4 random reviews
    let randomReviews = [];
    while (randomReviews.length < 4) {
        let review = reviews[Math.floor(Math.random() * reviews.length)];
        if (!randomReviews.includes(review)) {
            randomReviews.push(review);
        }
    }

    // Display the reviews
    randomReviews.forEach(review => {
        let reviewBox = document.createElement('div');
        reviewBox.classList.add('review-box');
        
        let reviewText = document.createElement('p');
        reviewText.classList.add('review-text');
        reviewText.textContent = review.text;
        
        let reviewStars = document.createElement('p');
        reviewStars.classList.add('review-stars');
        reviewStars.textContent = review.stars;
        
        reviewBox.appendChild(reviewText);
        reviewBox.appendChild(reviewStars);
        
        reviewDisplay.appendChild(reviewBox);
    });
}

// Change reviews every 4 seconds
setInterval(displayReviews, 4000);

// Display initial set of reviews
displayReviews();
