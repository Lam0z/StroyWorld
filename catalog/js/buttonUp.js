let upButton=document.querySelector('.up-button')
// console.log(upButton);
window.addEventListener('scroll',function(){
  if(window.pageYOffset>250){
    upButton.style.display='inline-block'

  }else{
    upButton.style.display='none'
  }

})
upButton.addEventListener('click',function(){
    window.scrollTo(0,0)

})