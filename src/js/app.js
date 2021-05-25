import systemCheck from './sytemCheck';
import validator from './validator';

const icons = Array.from(document.querySelectorAll('.card'));
const input = document.querySelector('.vaidator-input');
const message = document.querySelector('.vaidator-massage');
input.addEventListener('input', () => {
  if (input.value.length > 18) {
    input.value = input.value.slice(0, 18);
  }
  icons.forEach((el) => {
    el.classList.add('grey');
  });
  const system = systemCheck(input.value);
  // eslint-disable-next-line array-callback-return
  icons.filter((el) => {
    if (el.classList.contains(system)) {
      el.classList.remove('grey');
    }
  });
  if (input.value === '') {
    icons.forEach((el) => {
      el.classList.remove('grey');
      message.textContent = '';
    });
  }
});
const btn = document.querySelector('.vaidator-input-btn');
btn.addEventListener('click', () => {
  message.textContent = '';
  if (validator(input.value) && input.value >= 16) {
    message.textContent = 'Luhn algorithm passed';
  }
  if (!validator(input.value) && input.value >= 16) {
    message.textContent = 'Invalid card number';
  }
});
