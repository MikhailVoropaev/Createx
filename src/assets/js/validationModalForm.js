function validationSingUp(form) {

  function removeError(input) {
    const parentInput = input.parentElement;

    input.classList.remove('error');
    parentInput.querySelector('.error-span').remove();
  }

  function createError(input, text) {
    const parentLabel = input.parentNode;

    input.classList.add('error');

    const errorSpan = document.createElement('span');
    errorSpan.classList.add('error-span');

    errorSpan.textContent = text;

    parentLabel.appendChild(errorSpan);
  }

  let result = true;

  form.querySelectorAll('input').forEach(input => {
    if (input.classList.contains('error')) {
      removeError(input);
    }

    if (input.value === "") {
      createError(input, 'Поле не заполнено!');
      result = false;
    }
  })

  return result;
}


const formSingUp = document.getElementById('modal__form-sing-in');

formSingUp.addEventListener('submit', function (event) {
  event.preventDefault();

  if(validationSingUp(this) === true) {
    alert('все ок')
  }

})