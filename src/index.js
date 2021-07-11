let firstView = document.getElementsByClassName('screen-1')[0];
let secondView = document.getElementsByClassName('screen-2')[0];
let successView = document.getElementsByClassName('screen-success')[0];
let failView = document.getElementsByClassName('screen-fail')[0];

let addBtn = document.getElementById('addBtn');
let continueBtn = document.getElementById('continue');
let submitBtn = document.getElementById('submitBtn');
let backBtn = document.getElementById('backBtn');
let againBtn = document.getElementById('againBtn');
let loaderBtn = document.getElementById('loaderBtn');
let deleteBtns = document.getElementsByClassName('product__deleteBtn');

let firstForm = document.getElementsByClassName('paymentWidget__form')[0];
let products = document.getElementById('products');
let priceList = document.getElementsByClassName('priceList__tariff');

const productsArr = ['product 1'];
let resultPrice = 24.99;
let paymentState = false;

productsRender();

addBtn.addEventListener('click', ()=>{
    firstView.style.display = "none";
    secondView.style.display = "block";
});

firstForm.addEventListener('click', (e)=>{
    e.preventDefault();
});

continueBtn.addEventListener('click', ()=>{
    productsArr.length = 0;

    for(let i = 0; i < priceList.length; i++){
        if(priceList[i].querySelector('input').checked){
            for(let j = 0; j < 5 - i; j++){
                productsArr.push(`product ${j+1}`);
            }
        }
    }

    productsRender();

    secondView.style.display = "none";
    firstView.style.display = "block";
});

submitBtn.addEventListener('click', ()=>{
    load();
    setTimeout(checkPaymentState, 2000);
});

backBtn.addEventListener('click', ()=>{
    successView.style.display = 'none';
    firstView.style.display = 'block';
    window.location = "https://spawn2301.github.io/TestPayment/#";
});

againBtn.addEventListener('click', ()=>{
    failView.style.display = 'none';
    firstView.style.display = 'block';
    window.location = "https://spawn2301.github.io/TestPayment/#";
});

function productsRender () {
    products.innerHTML = ''

    if(productsArr.length == 1){
        products.innerHTML = `
        <li class="product">

            <div class="product-wrapper">
                <h2 class="product__title">Product 1</h2>
            </div>
            
            <div class="product__descrip">Enter main keyword for the product</div>
            <input name="keyword" placeholder="for example, sylicon wine cup" type="text">

            <div class="product__descrip">Enter link to the similar product as a reference</div>
            <input name="link" placeholder="https://..." type="text">
        </li>
        `
    }else{
        for(let i = 0; i < productsArr.length; i++){
            products.innerHTML += `
            <li class="product">
    
                <div class="product-wrapper">
                    <h2 class="product__title">Product ${i+1}</h2>
                    <button class="product__deleteBtn">
                        <img src="icons/close.svg" alt="">
                    </button>
                </div>
                
                <div class="product__descrip">Enter main keyword for the product</div>
                <input name="keyword" placeholder="for example, sylicon wine cup" type="text">
    
                <div class="product__descrip">Enter link to the similar product as a reference</div>
                <input name="link" placeholder="https://..." type="text">
            </li>
            `
        }
    }

    deleteProduct();
    calcFinalPrice();
}

function calcFinalPrice() {
    let price = submitBtn.querySelector('span');

    switch (productsArr.length) {
        case 1:
            resultPrice = 24.99;
            break;

        case 2:
            resultPrice = 44;
            break;

        case 3:
            resultPrice = 60;
            break;

        case 4:
            resultPrice = 72;
            break;
        
        case 5:
            resultPrice = 80;
            break;
        
        default:
            console.log('no products')
    }

    price.textContent = resultPrice;
}

function checkPaymentState() {
    paymentState = Math.random() < 0.5;
    
    if(paymentState){
        firstView.style.display = 'none';
        successView.style.display = 'block';
        //url succes
        window.location = "https://spawn2301.github.io/TestPayment/#success";
    }else{
        firstView.style.display = 'none';
        failView.style.display = 'block';
        //url fail
        window.location = "https://spawn2301.github.io/TestPayment/#fail";
    }

    loaderBtn.style.display = 'none';
}

function load() {
    loaderBtn.style.display = 'block';
}

function deleteProduct() {      
    for(let i = 0; i < deleteBtns.length; i++){
        deleteBtns[i].addEventListener('click', ()=>{
            productsArr.pop();
            productsRender();
        });
    }
}