/* const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;
});

 form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  const wholeNumberResult = Math.floor(dividend/divider);
  result.innerText = wholeNumberResult;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  function emptyInput() {
    result.innerText = 'Division not performed. Both values are required in inputs. Try again'
  }
  if (dividend === '' || divider === '') {
    emptyInput();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  function zeroError() {
    result.innerText = 'Division not performed. Invalid number provided. Try again'
  };
  if ( divider === '0') {
    zeroError();
    throw new Error ('Division by zero')
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  function nanError() {
    document.body.innerHTML = 'Something critical went wrong. Please reload the page';
    console.error(new Error('Input is not a number'));
  }
  if (isNaN(dividend) || isNaN(divider)) { // compare the values of dividend and divider with the isNaN() function instead of checking if they are of number type.
    nanError();
  }
}) */


// Refactored code
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  function emptyInput() {
    result.innerText = 'Division not performed. Both values are required in inputs. Try again';
  }

  function zeroError() {
    result.innerText = 'Division not performed. Invalid number provided. Try again';
  }

  function nanError() {
    document.body.innerHTML = 'Something critical went wrong. Please reload the page';
    console.error(new Error('Input is not a number'));
  }

  if (dividend === '' || divider === '') {
    emptyInput();
  } else if (divider === '0') {
    zeroError();
    throw new Error ('Division by zero');
  } else if (isNaN(dividend) || isNaN(divider)) {
    nanError();
  } else {
    const wholeNumberResult = Math.floor(dividend/divider);
    result.innerText = wholeNumberResult;
  }
});