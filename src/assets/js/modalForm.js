import "./validationModalForm.js";

const modalForm = document.querySelector('.modal');
const modalSingUp = document.querySelector('.modal-sing-up');
const modalSingIn = document.querySelector('.modal-sing-in');

const onClickLogIn = () => {
  modalForm.classList.add('modal--active');
  modalSingIn.classList.add('modal-sing-in--active');
  disableBodyScroll(); // Блокируем скролл body
}

const onClickLogUp = () => {
  modalForm.classList.add('modal--active');
  modalSingUp.classList.add('modal-sing-up--active');
  disableBodyScroll(); // Блокируем скролл body
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
    closeModal();
  }
}

const closeModal = () => {
  modalSingUp.classList.remove('modal-sing-up--active');
  modalSingIn.classList.remove('modal-sing-in--active');
  modalForm.classList.remove('modal--active');
  enableBodyScroll();
}

const disableBodyScroll = () => {
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.top = `-${window.scrollY}px`;
  document.body.style.width = '100%';
}

const enableBodyScroll = () => {
  const scrollY = document.body.style.top;
  document.body.style.overflow = '';
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';

  if (scrollY) {
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }
}

const scrollOutsideModalForm = (e) => {
  if (modalForm.classList.contains('modal--active')) {
    if (!modalForm.contains(e.target) && !e.target.closest('.modal__container')) {
      e.preventDefault();
    }
  }
}

const preventKeyScroll = (e) => {
  if (modalForm.classList.contains('modal--active')) {
    const keys = ['ArrowUp', 'ArrowDown', 'Space', 'PageUp', 'PageDown', 'Home', 'End'];
    if (keys.includes(e.code) || keys.includes(e.key)) {
      e.preventDefault();
    }
  }
}

document.addEventListener('touchmove', scrollOutsideModalForm, { passive: false });
document.addEventListener('wheel', scrollOutsideModalForm, { passive: false });
document.addEventListener('keydown', preventKeyScroll);

modalForm.addEventListener('click', onClickOutsideModalForm);

const singUpBtn = document.querySelector('.modal__form-switch__buttonSingUp');
const singInBtn = document.querySelector('.modal__form-switch__buttonSingIn');
const logInBtn = document.querySelector('.header__button-logIn');
const logUpBtn = document.querySelector('.header__button-logUp');

if (singUpBtn) singUpBtn.onclick = onClickFormSingUp;
if (singInBtn) singInBtn.onclick = onClickFormSingIn;
if (logInBtn) logInBtn.onclick = onClickLogIn;
if (logUpBtn) logUpBtn.onclick = onClickLogUp;



// _________________________________________________________
// const modalForm = document.querySelector('.modal');
// const modalSingUp = document.querySelector('.modal-sing-up');
// const modalSingIn = document.querySelector('.modal-sing-in');
//
// const onClickLogIn = () => {
//   modalForm.classList.add('modal--active');
//   modalSingIn.classList.add('modal-sing-in--active');
// }
//
// const onClickLogUp = () => {
//   modalForm.classList.add('modal--active');
//   modalSingUp.classList.add('modal-sing-up--active');
// }
//
// const onClickFormSingIn = () => {
//   if (modalSingIn.classList.contains('modal-sing-in--active'))
//     return;
//
//   modalSingUp.classList.remove('modal-sing-up--active');
//   modalSingIn.classList.add('modal-sing-in--active');
// }
//
// const onClickFormSingUp = () => {
//   if (modalSingUp.classList.contains('modal-sing-up--active'))
//     return;
//
//   modalSingIn.classList.remove('modal-sing-in--active');
//   modalSingUp.classList.add('modal-sing-up--active');
// }
//
// const onClickOutsideModalForm = (e) => {
//   if (!e.target.closest('.modal__container') || e.target.closest('.modal__close-btn')) {
//     modalSingUp.classList.remove('modal-sing-up--active');
//     modalSingIn.classList.remove('modal-sing-in--active');
//     modalForm.classList.remove('modal--active');
//   }
// }
//
// const scrollOutsideModalForm = (e) => {
//   if (modalForm.classList.contains('modal--active')) {
//     if (!modalForm.contains(e.target)) {
//       e.preventDefault();
//     }
//   }
// }
//
// document.body.addEventListener('touchmove', scrollOutsideModalForm, { passive: false });
// document.body.addEventListener('wheel', scrollOutsideModalForm, { passive: false });
//
// modalForm.addEventListener('click', onClickOutsideModalForm);
//
// document.querySelector('.modal__form-switch__buttonSingUp').onclick = onClickFormSingUp;
// document.querySelector('.modal__form-switch__buttonSingIn').onclick = onClickFormSingIn;
//
// document.querySelector('.header__button-logIn').onclick = onClickLogIn;
// document.querySelector('.header__button-logUp').onclick = onClickLogUp;