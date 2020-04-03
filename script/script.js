window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  //popup-call
  const headerPopupCall = () =>{
    const callBtn = document.querySelectorAll('.call-btn'),
      popupCall = document.querySelector('.popup-call');
    
    callBtn.forEach((elem) =>{
      elem.addEventListener('click', () =>{
        popupCall.style.display = 'block';
      }); 
    });
   
    popupCall.addEventListener('click', () =>{
      let target = event.target;
      if(target.classList.contains('popup-close')){
        popupCall.style.display = 'none';
      } else {
        target = target.closest('.popup-content');
        if(!target){
          popupCall.style.display = 'none';
        }
      }
    });
  };
  headerPopupCall();
  //popup-discount
  const popupTwo = () =>{
    const discountBtn = document.querySelectorAll('.discount-btn'),
      popupDiscount = document.querySelector('.popup-discount');

    discountBtn.forEach((elem) =>{
      elem.addEventListener('click', () => {
        popupDiscount.style.display = 'block';
      });
    });
    popupDiscount.addEventListener('click', () =>{
      let target = event.target;
      if(target.classList.contains('popup-close')){
        popupDiscount.style.display = 'none';
      } else {
        target = target.closest('.popup-content');
        if(!target){
          popupDiscount.style.display = 'none';
        }
      }
    });
  };
  popupTwo();
});