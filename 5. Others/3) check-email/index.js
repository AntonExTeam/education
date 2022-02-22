/*
  Задача
  Написать функцию которая проверяет, является ли email валидным
  Прмеры
  isValidEmail("tima1702@gmail.com") === true
  isValidEmail("tima1702@gmail") === false
  isValidEmail("tima1702@gmail.") === false
  isValidEmail("tima1702gmail.com") === false
  isValidEmail("example_emai@gmail.com") === true
  isValidEmail("example8@gmail.com") === true
  isValidEmail("e2xample8@gmail.com") === true
  isValidEmail("e2xa.mple8@gmail.com") === true
 */

function isValidEmail(email) {

  let regexp = /\w+\d+\@\w+\.\w+/gi;
  let regexp2 = /\w+\@\w+\.\w+/gi;

  for (let i = 0; i < email.length; i++) {
      if(typeof email[i] === 'number') {
          return regexp.test(email);
      }
      return regexp2.test(email);
  }
}

window.isValidEmail = isValidEmail;

export default isValidEmail;
