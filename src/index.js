let firstView = document.getElementsByClassName('screen-1')[0];
let secondView = document.getElementsByClassName('screen-2')[0];
let products = document.getElementById('products');
let addBtn = document.getElementById('addBtn');
let continueBtn = document.getElementById('continue');

let firstForm = document.getElementsByClassName('paymentWidget__form')[0];

let priceList = document.getElementsByClassName('priceList__tariff');

const productsArr = ['product 1'];

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

function productsRender () {
    products.innerHTML = ''

    for(let i = 0; i < productsArr.length; i++){
        products.innerHTML += `
        <li class="product">
            <h2 class="product__title">Product ${i+1}</h2>
            <div class="product__descrip">Enter main keyword for the product</div>
            <input name="keyword" placeholder="for example, sylicon wine cup" type="text">

            <div class="product__descrip">Enter link to the similar product as a reference</div>
            <input name="link" placeholder="https://..." type="text">
        </li>
        `
    }
}