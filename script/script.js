window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  //popup-call
  const headerPopupCall = () =>{
    const callBtn = document.querySelector('.call-btn'),
      popupCall = document.querySelector('.popup-call');
    callBtn.addEventListener('click', () =>{
      popupCall.style.display = 'block';
    });
  };
  headerPopupCall();
});