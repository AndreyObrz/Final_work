const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));




const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();

function function_input1(){
    
    
  document.getElementById("name-input1").innerText="Имя";
  if (document.getElementById("input1").value== ""){
      document.getElementById("name-input1").innerText="";
      document.getElementById("name-input1").style.display="none";
  }
  k=0;
  let s='1234567890!@#$%^&*(){}[]:;<>,._+-=~/?';
  for(i =0; i<document.getElementById("input1").value.length;i++){
      for(j=0;j<s.length;j++){
          if (document.getElementById("input1").value[i]==s[j]){
              k=1;    
          }
      }
  }
  if (k==1){
      document.getElementById("name-input1").style.color="red";
      document.getElementById("input1").style.borderColor= "red";
      document.getElementById("name-input1").style.display="block";
  }else{
      document.getElementById("name-input1").style.color="var(--border)";
      document.getElementById("input1").style.borderColor= "var(--border)";
      document.getElementById("name-input1").style.display="block";
  }
};

function function_input2(){
  
  
  document.getElementById("name-input2").innerText="Отчество";
  if (document.getElementById("input2").value== ""){
      document.getElementById("name-input2").innerText="";
      document.getElementById("name-input2").style.display="none";
  }
  k=0;
  let s='1234567890!@#$%^&*(){}[]:;<>,._+-=~/?';
  for(i =0; i<document.getElementById("input2").value.length;i++){
      for(j=0;j<s.length;j++){
          if (document.getElementById("input2").value[i]==s[j]){
              k=1;    
          }
      }
  }
  if (k==1){
      document.getElementById("name-input2").style.color="red";
      document.getElementById("input2").style.borderColor= "red";
      document.getElementById("name-input2").style.display="block";
  }else{
      document.getElementById("name-input2").style.color="var(--border)";
      document.getElementById("input2").style.borderColor= "var(--border)";
      document.getElementById("name-input2").style.display="block";
  }
};

function function_input3(){
  
  
  document.getElementById("name-input3").innerText="Телеграмм";
  if (document.getElementById("input3").value== ""){
      document.getElementById("name-input3").innerText="";
      document.getElementById("name-input3").style.display="none";
  }
  k=0;
  let s='https://t.me/';
  value_tg_input=document.getElementById("input3").value;
  
  for(j=0;j<13;j++){
      if (value_tg_input[j]==s[j]){
          k+=1
      }
  }
  
  if (k!=13 && value_tg_input!=''){
      document.getElementById("name-input3").style.color="red";
      document.getElementById("input3").style.borderColor= "red";
      document.getElementById("name-input3").style.display="block";
  }else{
      document.getElementById("name-input3").style.color="var(--border)";
      document.getElementById("input3").style.borderColor= "var(--border)";
      document.getElementById("name-input3").style.display="block";
  }
 
};