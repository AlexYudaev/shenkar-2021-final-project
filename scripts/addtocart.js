
let addToCartButton = document.querySelector('.add_to_cart .btn_3');

addToCartButton.addEventListener('click', addToCartItem);

function addToCartItem(event){
    event.preventDefault();

    let productId = addToCartButton.dataset.productId;
    let productCounter = document.querySelector('.product_count .input-number').value;
    
    createCartItem(productId, productCounter);
}


function createCartItem (prodictId, productCounter){

    let product = Products[prodictId];

    let productName = product.productName; 
    let productPrice = product.productPrice;
    let productImageSrc = product.productImageSrc;

    let singleProduct = document.querySelector('.single_product');


     let singleProductHtml = `
        <div class="single-product">
        <div class="image">
        <img src="${productImageSrc}">
        </div>
    
        <div class="details">
        <h3>${productName}</h3>
        <h2>${productPrice}</h2> 
        <p>${productPrice * productCounter}</p>
        </div>
    </div>
     `;

     singleProduct.innerHTML = singleProductHtml;
}