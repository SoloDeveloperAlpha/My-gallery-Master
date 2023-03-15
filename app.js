
const min_1 = document.querySelector('#min_1');
const plus_1 = document.querySelector('#plus_1');
const valor1 = document.querySelector('#valor1');
const min_2 = document.querySelector('#min_2');
const plus_2 = document.querySelector('#plus_2');
const valor2 = document.querySelector('#valor2');
var num = 0;
var num2=0;
min_1.addEventListener('click',function() {
    num--;
    if(num<0){
        num=0;
        valor1.innerHTML = num;
    }else{
        valor1.innerHTML = num;
    }
});
plus_1.addEventListener('click',function() {
    num++;
    valor1.innerHTML = num;
});
min_2.addEventListener('click',function() {
    num2--;
    if(num2<0){
        num2=0;
        valor2.innerHTML = num2;
    }else{
        valor2.innerHTML = num2;
    }
});
plus_2.addEventListener('click',function() {
    num2++;
    valor2.innerHTML = num2;
});

//-------------MENU DESPLEGABLE----------------//
const selectBox = document.querySelector('#select-box');
const selected_option=document.querySelector('.selected-option');
const optionsContainer = selectBox.querySelector('.options-container');
var option1 = document.querySelector('.option1');
var option2 = document.querySelector('.option2');
var option3 = document.querySelector('.option3');
// agrega un evento click al div contenedor
selectBox.addEventListener('click', function() {
  // muestra o esconde el div de opciones según su estado actual
  if (optionsContainer.style.display === 'none') {
    optionsContainer.setAttribute("style","display:block;");
    option1.addEventListener('click',function(){
        selected_option.innerHTML=option1.innerHTML;
     });
     option2.addEventListener('click',function(){
        selected_option.innerHTML=option2.innerHTML;
     });
     option3.addEventListener('click',function(){
        selected_option.innerHTML=option3.innerHTML;
     });
  } else {
    optionsContainer.style.display = 'none';
  }
});







