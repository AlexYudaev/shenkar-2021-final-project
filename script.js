const ProductInCart = [2,3];


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