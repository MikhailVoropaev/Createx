import "./validationModalForm.js";

const modalForm = document.querySelector('.modal');
const modalSingUp = document.querySelector('.modal-sing-up');
const modalSingIn = document.querySelector('.modal-sing-in');

const onClickLogIn = () => {
  modalForm.classList.add('modal--active');
  modalSingIn.classList.add('modal-sing-in--active');
}

const onClickLogUp = () => {
  modalForm.classList.add('modal--active');
  modalSingUp.classList.add('modal-sing-up--active');
}

const onClickFormSingIn = () => {
  if (modalSingIn.classList.contains('modal-sing-in--active'))
    return;

  modalSingUp.classList.remove('modal-sing-up--active');
  modalSingIn.classList.add('modal-sing-in--active');
}

const onClickFormSingUp = () => {
  if (modalSingUp.classList.contains('modal-sing-up--active'))
    return;

  modalSingIn.classList.remove('modal-sing-in--active');
  modalSingUp.classList.add('modal-sing-up--active');
}

const onClickOutsideModalForm = (e) => {
  if (!e.target.closest('.modal__container') || e.target.closest('.modal__close-btn')) {
    modalSingUp.classList.remove('modal-sing-up--active');
    modalSingIn.classList.remove('modal-sing-in--active');
    modalForm.classList.remove('modal--active');
  }
}

modalForm.addEventListener('click', onClickOutsideModalForm);

document.querySelector('.modal__form-switch__buttonSingUp').onclick = onClickFormSingUp;
document.querySelector('.modal__form-switch__buttonSingIn').onclick = onClickFormSingIn;

document.querySelector('.header__button-logIn').onclick = onClickLogIn;
document.querySelector('.header__button-logUp').onclick = onClickLogUp;