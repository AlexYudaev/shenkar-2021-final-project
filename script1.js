
document.getElementById('search_1').addEventListener(
    'click',
    onSearchClick
)
document.getElementById('close_search').addEventListener(
    'click',
    onSearchClick
)

function onSearchClick(event){
    event.preventDefault();
    search_input_box.classList.toggle('open');
}

// ============================================

let newArrivalItems = document.querySelectorAll('.arrival_filter_item ul li');

for (let i=0; i < newArrivalItems.length; i++ ){
    // newArrivalItems[i].classList.remove('active')
    newArrivalItems[i].addEventListener(
        'click',
        arrivalNavigationClick
    )
}

function arrivalNavigationClick(event){
    
    for (let i=0; i < newArrivalItems.length; i++ ){
        newArrivalItems[i].classList.remove('active')
    }
    event.target.classList.add('active');
    

    //dataset.filter = display all
    //dataset.toggle = display something

  

    // .new_arrival_iner > div
    // .new_arrival_iner .single_arrivel_item

    let items = document.querySelectorAll('.new_arrival_iner .single_arrivel_item')
    for (let i = 0; i < items.length; i++ ){
        items[i].classList.add('hidden')
    }

    //'.new_arrival_iner .single_arrivel_item' + (.men, .women, .shoes)
    //'.new_arrival_iner .single_arrivel_item' + ('')

    let dataset = event.target.dataset;

    // (something) ?  true : false
    let itemsToDisplay = (dataset.filter) ? '' : dataset.toggle;
    // .men, .women, .shoes
    
    let itemsDisplay = document.querySelectorAll('.new_arrival_iner .single_arrivel_item' + itemsToDisplay)
    for (let i = 0; i < itemsDisplay.length; i++ ){
        items[i].classList.remove('hidden')
    }
}
