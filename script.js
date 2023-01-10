const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}

// shoping tp single_poduct
var bigimg = document.getElementById("bigimg");
// var small_img= document.getElementsByClassName("small_img");
var pro= document.getElementsByClassName("pro");


pro.addEventListener('click',()=>{
    bigimg.src = pro.src

})
// pro.addEventListener('click',()=>{
//     window.location.href='single_product.html'
// })
