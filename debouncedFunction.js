// 2. Implement a Debounce Function

// Write a function debounce that limits the rate at which a function func is called. The debounce function should return a new function that will only call func after it stops being invoked for a specified wait time (in milliseconds).

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

