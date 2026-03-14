const headerBtnLogIn = document.querySelector('.header__button-logIn');
const headerBtnLogUp = document.querySelector('.header__button-logUp');
const modalForm = document.querySelector('.modal');
const modalSingUp = document.querySelector('.modal-sing-up');
const modalSingIn = document.querySelector('.modal-sing-in');
const formSingInBtn = document.querySelector('.modal__form-switch__buttonSingIn');
const formSingUpBtn = document.querySelector('.modal__form-switch__buttonSingUp');

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

formSingUpBtn.onclick = onClickFormSingUp;
formSingInBtn.onclick = onClickFormSingIn;

headerBtnLogIn.onclick = onClickLogIn;
headerBtnLogUp.onclick = onClickLogUp;









// const onClickHeaderBtnLogIn = () => {
//   modalForm.classList.add('modal--active');
//   modalSingIn.classList.add('modal-sing-in--active');
//
//   const formSingUpBtn = document.querySelector('.modal__form-switch__buttonSingUp');
//   const formSingInBtn = document.querySelector('.modal__form-switch__buttonSingIn');
//
//   const onClickSingUpBtn = () => {
//     if (modalSingUp.classList.contains('modal-sing-up--active'))
//       return;
//
//     modalSingIn.classList.remove('modal-sing-in--active');
//     modalSingUp.classList.add('modal-sing-up--active');
//   }
//
//   const onClickSingInBtn = () => {
//     if (modalSingIn.classList.contains('modal-sing-in--active'))
//       return;
//
//     modalSingUp.classList.remove('modal-sing-up--active');
//     modalSingIn.classList.add('modal-sing-in--active');
//   }
//
//   formSingInBtn.onclick = onClickSingInBtn;
//   formSingUpBtn.onclick = onClickSingUpBtn;
// }











