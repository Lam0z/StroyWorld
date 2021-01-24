let genList=document.querySelectorAll('input[type="radio"')
let genItems=document.querySelectorAll('.goods__item')
// let powerList=document.querySelectorAll('.power__list input[type="radio"')
let formBtn=document.querySelector('.filters__btn')
let range=document.querySelector('.range input[type="range"]')
let output=document.querySelector('.outputs input:last-child')

range.addEventListener('input',function(){
    output.value=range.value
})

for(let item of genList){
    item.addEventListener('change',function(){
        for(let good of genItems){
            if(item.value!==good.dataset.gen&&item.value!=='all'){
                good.style.display='none'
            }else {
                good.style.display='block'
            }
        }
    }) 
}

let userButtons=document.querySelectorAll('.contacts__user .btn')
let forms=document.querySelectorAll('.contacts__form')
let signIn=document.querySelector('.signIn')
let logIn=document.querySelector('.logIn')
let offerBtns=document.querySelectorAll('.item__link')
let buysCount=document.querySelector(".header__link .buys")
let favoritCount=document.querySelector(".header__link .favorits")
let servicesList=document.querySelectorAll('.services__item')
let servicesDesc=document.querySelectorAll('.services__descr')
let offerLink=document.querySelector('.header__link-offer')
let offerForm=document.querySelector('.form-offer')

// console.log(upButton);

//Оформить заказ
offerLink.addEventListener('click',function(e){
    offerForm.style.display='flex'
})
document.addEventListener('keydown',function(e){
    if(e.keyCode==27){
        offerForm.style.display='none'
    }
})
offerForm.addEventListener('click',function(e){
    if(e.target.classList.contains('form-offer')){
        offerForm.style.display='none'
    }
})

// Кнопки Войти и Регистрация
for (let i = 0; i < userButtons.length; i++) {
    userButtons[i].addEventListener('click',function(e){
        e.preventDefault()
        if(e.target.classList.contains('contacts__signIn')){
            forms[i].style.display="flex"
        }else if(e.target.classList.contains('contacts__logIn')){
            forms[i].style.display="flex" 
        }
    })
    
}
for(let i of forms){
    i.addEventListener('click',function(e){
        // e.target.style.display='none'
        if(e.target.classList.contains('contacts__form')){
            i.style.display='none'
        }
    })
    document.addEventListener('keydown',function(e){
        if(e.keyCode==27){
            i.style.display='none'
        }
    
    })
    
}

// КОРЗИНА и ПОКУПКИ
let buys=0
let favorits=0
for(let i of offerBtns){
   
    i.addEventListener('click',function(e){
        e.preventDefault
        
        console.log(e.target.classList);
        if(e.target.classList.contains('buy')){
            buys++
            buysCount.textContent=buys
            buysCount.style.display='block'
            console.log(buysCount);
        }else if(e.target.classList.contains('favorite')){
            favorits++
            favoritCount.textContent=favorits
            favoritCount.style.display='block'
        }

    })
}

// for(let item of powerList){
//     item.addEventListener('click',function(){
//         for(let good of genItems){
//             if(item.value!==good.dataset.gen&&item.value!=='all'){
//                 good.style.display='none'
//             }else {
//                 good.style.display='block'
//             }
//         }
        
//     })
// }