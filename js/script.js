'use strict';



/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElems = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElems.length; i++) {
  navElems[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}



/**
 * header & go top btn active on page scroll
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});
// Get references to the "Add to Cart" and "Add to Wishlist" buttons
const addToCartButton = document.querySelector('.card-action-item button[aria-labelledby="card-label-1"]');
const addToWishlistButton = document.querySelector('.card-action-item button[aria-labelledby="card-label-2"]');

// Function to handle adding the product to the cart
function addToCart() {
    // Implement your cart logic here
    // For example, you can store the product details in a cart object or array
    // and update the UI to reflect the changes.
    console.log('Product added to cart');
}

// Function to handle adding the product to the wishlist
function addToWishlist() {
    // Implement your wishlist logic here
    // For example, you can store the product details in a wishlist object or array
    // and update the UI to reflect the changes.
    console.log('Product added to wishlist');
}

// Add click event listeners to the buttons
addToCartButton.addEventListener('click', addToCart);
addToWishlistButton.addEventListener('click', addToWishlist);

