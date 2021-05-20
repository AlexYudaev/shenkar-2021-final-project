
let addToCartButton = document.querySelector('.add_to_cart .btn_3');
let addToCartFromBestSellers = document.querySelector('.add_to_cart_sellers');

addToCartButton.addEventListener('click', addToCartItem);
addToCartFromBestSellers.addEventListener('click', addToCartItem);

function addToCartItem(event){
    event.preventDefault();

    // let productId = addToCartButton.dataset.productId;
    // let  {productId, title} = addToCartButton.dataset;
    let { dataset : {productId, count} } = addToCartButton;


    let productCounter = 1;
    if (count != 1){
        productCounter = document.querySelector('.product_count .input-number').value;
    }
    
    createCartItem(productId, productCounter);   
}


function createCartItem (prodictId, productCounter = 1){

    // לבחור את המוצר מתוך רשימת המוצרים ולהציג אותו בעגלת הקנויות
    // go to backend and get product details by product id

    // prodictId = 2;

   
    let singleProduct = document.querySelector('.single_product');


    let product = Products[prodictId];
    let {productName, productPrice, productImageSrc} = product;
    // let productName = product.productName; 
    // let productPrice = product.productPrice;
    // let productImageSrc = product.productImageSrc;


    //פירוק של מערך עם מספר אובייקטים פנימיים

    // let name = product.product.name;
    // let price = product.product.price;
    // let image = product.images.image1;

    // let { 
    //     product : {price, name}, 
    //     images: {image1 : image} 
    // }

    let{ 
        productName: name, 
        productPrice : price, 
        productImageSrc : image
    }  = product;
    // let name = product.productName; 
    // let price = product.productPrice;
    // let image = product.productImageSrc;   

     let singleProductHtml = `
        <div class="single-product">
        <div class="image">
        <img src="${image}">
        </div>
    
        <div class="details">
        <h3>${name}</h3>
        <h2>${price}</h2> 
        <p>${price * productCounter}</p>
        </div>
    </div>
     `;

     singleProduct.innerHTML = singleProductHtml;
}