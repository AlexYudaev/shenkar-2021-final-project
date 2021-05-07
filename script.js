const Products = [
    {},
    {
        productName : "Faded SkyBlu Denim Jeans", 
        productPrice : 149.99, 
        productImageSrc : "http://127.0.0.1:5500/img/product_details/prodect_details_1.png"
    },
    {
        productName: "Long Sleeve TShirt", 
        productPrice: 49.99, 
        productImageSrc: "http://127.0.0.1:5500/img/category/category_2.png"
    }
]; //array with index
//let products = {}; // object (key value)



let filterNavigation = document.querySelectorAll('.arrival_filter_item .controls'); 
let filterItems = document.querySelectorAll('.single_arrivel_item');



// newsletter popup
let newsletter = document.querySelector('.newsletter-popup');
// newsletter.classList.add('is-active');

let closeButton = document.querySelector('.newsletter-popup .close');
closeButton.addEventListener('click', function(){
    newsletter.classList.remove('is-active');
});


// Increment and Decrement counter in product page
let numberIncrement = document.querySelector('.product_count .number-increment');
let numberDecrement = document.querySelector('.product_count .number-decrement');

numberIncrement.addEventListener('click', function(){
    let productCounter = document.querySelector('.product_count .input-number');
    let counter = productCounter.value;
    counter ++;
    productCounter.value = counter;
})
numberDecrement.addEventListener('click', function(){
    let productCounter = document.querySelector('.product_count .input-number');
    let counter = productCounter.value; 

    if (counter > 1){
        counter--;
    }
    productCounter.value = counter;
})


function addToCartItem(event){
    event.preventDefault();

    let product = Products[addToCartButton.dataset.productId];

    let productCounter = document.querySelector('.product_count .input-number').value;
    let productName = product.productName; 
    let productPrice = product.productPrice;
    let productImageSrc = product.productImageSrc;

    //todo insert to cart


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
let addToCartButton = document.querySelector('.add_to_cart .btn_3');
addToCartButton.addEventListener('click', addToCartItem);


let addToFavorites = document.querySelector('.add_to_cart .like_us');

addToFavorites.addEventListener('click', function(event){
    event.preventDefault();

    addToFavorites.classList.toggle('is-active');

    //todo add to global favorites
})



let productImages = document.querySelectorAll('.product_slider_img img');
let mainImage = document.querySelector('.main-image img');

productImages.forEach( function(item){
    item.addEventListener('click', function(){
        mainImage.src = item.src
    })
});



let productDescriptionNavItems = document.querySelectorAll('.product_description_area .nav-link');

productDescriptionNavItems.forEach( function(item){
    item.addEventListener('click', function(e){
            e.preventDefault(); //evenet 
            let descriptionClass = item.dataset.tab; // .description
            
            item.classList.add('active');
            document.querySelector(descriptionClass).classList.add('active'); 

            document.querySelector('.product_description_area .nav-link.active').classList.remove('active')
            document.querySelector('.tab-pane.active').classList.remove('active')
        

    } )
})