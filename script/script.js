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
  //popup-consultation
  const popupThree = () =>{
    const popupConsultation = document.querySelector('.popup-consultation'),
      consultationBtn = document.querySelector('.consultation-btn');
    consultationBtn.addEventListener('click', () =>{
      popupConsultation.style.display = 'block';
    });
    popupConsultation.addEventListener('click', () =>{
      let target = event.target;
      if(target.classList.contains('popup-close')){
        popupConsultation.style.display = 'none';
      } else {
        target = target.closest('.popup-content');
        if(!target){
          popupConsultation.style.display = 'none';
        }
      }
    });
  };
  popupThree();
  //popup-check 
  const popupFour = () =>{
    const checkBtn = document.querySelector('.check-btn'),
      popupCheck = document.querySelector('.popup-check ');
    checkBtn.addEventListener('click', () =>{
      popupCheck.style.display = 'block';
    });
    popupCheck.addEventListener('click', () =>{
      let target = event.target;
      if(target.classList.contains('popup-close')){
        popupCheck.style.display = 'none';
      } else {
        target = target.closest('.popup-content');
        if(!target){
          popupCheck.style.display = 'none';
        }
      }
    }); 
  };
  popupFour();
   //add-sentence-btn
  const addSentence = () => {
    const addSentenceBtn = document.querySelector('.add-sentence-btn'),
      divRows = document.querySelectorAll("div.row"),
      addBlocks = divRows[4].querySelectorAll('div');
    
    addSentenceBtn.addEventListener('click', () =>{
      addSentenceBtn.style.display = 'none';
      addBlocks[9].classList.remove('visible-sm-block');
      addBlocks[12].classList.remove('hidden');
      addBlocks[15].classList.remove('hidden');
    });
  };
  addSentence();
  //валидация
  const valid = () =>{
    const formInputs = document.querySelectorAll('form input');
    
    formInputs.forEach((elem) => {
      elem.addEventListener('input', () =>{
        let target = event.target;
        let targetAttr = target.getAttribute('name');
          if(targetAttr === 'user_phone'){
            target.value = target.value.replace (/[^\+\d]/g, '');
          } else if (targetAttr === 'user_name' || targetAttr === 'user_quest'){
            target.value = target.value.replace (/[^а-яё\s]/ig, '');
          }
      });
    });
  };
  valid();
  //send-ajax-form
  const sendForm = () =>{
    const forms = document.querySelectorAll('form');
    
    const errorMessage = 'Что-то пошло не так...',
      loadMessage = 'Загрузка...',
      successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

    const statusMessage = document.createElement('div');
      statusMessage.style.cssText = 'font-size: 2rem; color: black';
    
    forms.forEach((item) =>{
      item.addEventListener('submit', (event) => {
        event.preventDefault();
        item.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        
        const formData = new FormData(item);

        let body = {};
        formData.forEach((val, key) => {
          body[key] = val;
        });
        postData(body)
         .then((response) => {
            if(response.status !== 200){
              throw new Error('status network not 200');
            }
          }) 
          .then(() =>{            
            statusMessage.textContent = successMessage;
            reset();
            setTimeout(()=>{
              statusMessage.remove();
            },5000);
          })         
          .catch((error) => { 
            statusMessage.textContent = errorMessage;
            setTimeout(()=>{
              statusMessage.remove();
            },5000);
            console.log(error);          
          });
      });
    });
    const postData = (body) =>{
      return fetch('./server.php', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(body),
        credentials: 'include'
      });
    };
  }; 
  sendForm();
  //отчистка форм после отправки
  const reset = () =>{
    const allInputs = document.querySelectorAll('input');
    allInputs.forEach((elem) => {
      elem.value = '';
    });
  };
  //аккордеон два
  const question = () => {
    const accordionTwo = document.querySelector('#accordion-two'),
      title = accordionTwo.querySelectorAll('.panel-heading'),
      content = accordionTwo.querySelectorAll('.panel-collapse');
 
    for(let i = 0; i < title.length; i++){
      title[i].addEventListener('click', function() {   
        content.forEach((elem)=>{
          if(elem.classList.contains('in')){
            elem.classList.remove('in');
          }
        });
        this.nextElementSibling.classList.toggle('in');
      });
    } 
  }; 
  question();
  //аккордион 1
  const accordionOne = () =>{
    const accordion = document.querySelector('#accordion'),
      title = accordion.querySelectorAll('.panel-heading'),
      content = accordion.querySelectorAll('.panel-collapse'),
      buttons = accordion.querySelectorAll('.button');
      
      for(let i = 0; i < title.length; i++){
        title[i].addEventListener('click', function() {   
          content.forEach((elem)=>{
            if(elem.classList.contains('in')){
              elem.classList.remove('in');
            }
          });
          this.nextElementSibling.classList.toggle('in');
        });
      } 
     
      for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function() {       
          for(let x = 0; x < content.length; x++){
            if(content[x].classList.contains('in')){
              content[x].classList.remove('in');
            }
            
          }
          content[i + 1].classList.add('in');
          //this.nextElementSibling.classList.add('in');
          
        });
      } 
  };
  accordionOne();
  //калькулятор
  const calc = ()=>{
    const onoffswitchCheckbox = document.querySelector('#myonoffswitch'),
      panelCollapseTwo = document.querySelector('#collapseTwo'),
      divs = panelCollapseTwo.querySelectorAll('div'),
      selectBox = panelCollapseTwo.querySelectorAll('.form-control'),
      calcResult = document.querySelector('#calc-result'),
      onoffCheckboxTwo = document.querySelector('#myonoffswitch-two');
      let calcResultValue = calcResult.value;
    let startingPrice = 10000;
    
    const sum = ()  =>{
      let result1 = 0;
      let diametr1 = 1,
        diametr2 = 1,
        rings1 = 1,
        rings2 = 1,
        result2 = 0,
        bottom1,
        bottom2,
        result;
      if(onoffswitchCheckbox.checked === true){
        startingPrice = 10000;
        result = result1;
        
        calcResultValue.textContent = result; 
        
      }else {
        startingPrice = 15000;
        result = result2 + result1;
      }

      if(onoffCheckboxTwo.checked === true){
        bottom1 = 1000;
        bottom2 = 2000;       
      } else {
        bottom2 = 0;
        bottom1 = 0;
      }


      if(selectBox[0].options[1].value || selectBox[2].options[1].value){
        diametr1 = (startingPrice * 0.2);
        diametr2 = (startingPrice * 0.2);
        console.log(diametr2);
        
      }
      if(selectBox[1].options[1].value || selectBox[3].options[1].value){
        rings1 = startingPrice * 0.3;
        rings2 = startingPrice * 0.3;
        
      }
      if(selectBox[1].options[2].value || selectBox[3].options[2].value){
        rings1= startingPrice * 0.5;
        rings2= startingPrice * 0.5;
      }
      console.log(rings2);
        

      result2 = Math.ceil(startingPrice + diametr2 + rings2 + bottom2);
      result1 = Math.ceil(startingPrice + diametr1 + rings1 + bottom1);
      console.log(result2);
      
    };
    sum();
    
    onoffswitchCheckbox.addEventListener('change', ()=>{
      if(onoffswitchCheckbox.checked === true){
        divs[4].style.display = 'none';
        divs[5].style.display = 'none';
        divs[6].style.display = 'none';  
      } else {
        divs[4].style.display = 'block';
        divs[5].style.display = 'inline-block';
        divs[6].style.display = 'inline-block';
      }
    });
    
  };
  calc();
});