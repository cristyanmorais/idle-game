// const generateBtn = document.querySelector('.generate-btn');
// const cookieQuantityElement = document.getElementById('cookie-quantity');
const hireThugBtn = document.querySelector('.hire-thug');
const quantityThugElement = document.querySelector('.quantity-thug');

// generateBtn.addEventListener('click', generateCookieClick);
hireThugBtn.addEventListener('click', hireThug);

// function generateCookieClick() {
//     let currentQuantity = parseInt(cookieQuantityElement.innerText);
//     cookieQuantityElement.innerText = currentQuantity + 1;
// }

function hireThug() {
    let quantityThug = parseInt(quantityThugElement.innerText);
    quantityThugElement.innerText = quantityThug + 1;
}