
      
// toggle BTN - ingr
const toggleBtn = document.querySelector('.es-toggleBtn')
const contentBox = document.querySelector('.es-contentBox')
const toggleImg = document.querySelector('.es-toggleImg')

toggleBtn.addEventListener('click', ()=>{
  contentBox.classList.toggle('activeBtn');
});

toggleBtn.addEventListener('click', ()=>{
  toggleImg.classList.toggle('rotate-btn');
});


// toggle BTN - production
const toggleBtn2 = document.querySelector('.es-doze__btn')
const contentBox2 = document.querySelector('.es-doze__box')
const toggleImg2 = document.querySelector('#es-doze__btnImg')

toggleBtn2.addEventListener('click', ()=>{
  contentBox2.classList.toggle('activeBtn');
});

toggleBtn2.addEventListener('click', ()=>{
  toggleImg2.classList.toggle('rotate-btn');
});
