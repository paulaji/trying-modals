'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  console.log('Button was clicked');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

/*
// x button njekkiyaalum, overlay njekkiyaalum back to default screen ilekk varaan vendi

// x button njekkiyaa

btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

// overlay il njekkiyaa

overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
*/

// pakshe athilum eluppam is to store all those in a function and call that function in event listener

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// key press event

document.addEventListener('keydown', function (event) {
  // console.log('A key was pressed');
  // console.log(event);
  console.log(event.key);
  if (event.key == 'Escape') {
    if (!modal.classList.contains('hidden')) {
      // actually ith venam enn illaa, pakshe  pulli paranjond cheyyanu
      closeModal();
    }
    // modal.classList.add('hidden');
    // overlay.classList.add('hidden');
    // closeModal();
  }
});
