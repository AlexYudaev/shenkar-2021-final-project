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


let addToCartButton = document.querySelector('.add_to_cart .btn_3');
addToCartButton.addEventListener('click', function(event){
    event.preventDefault();
    let productCounter = document.querySelector('.product_count .input-number').value;
    let productName = document.querySelector('.s_product_text h3').innerHTML;
    let productPrice = parseFloat(document.querySelector('.s_product_text h2 span').innerHTML);
    let productImageSrc = document.querySelector('.product_slider_img img').src;

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
})


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