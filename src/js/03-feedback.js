import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
  const feedbackObj = {
    email: form.email.value,
    message: form.message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackObj));
  loadForm('feedback-form-state');
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(form.email.value);
  console.log(form.message.value);
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

window.addEventListener('DOMContentLoaded', loadForm);
function loadForm() {
  const storage = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (storage !== null) {
    form.email.value = storage.email;
    form.message.value = storage.message;
  }
}
