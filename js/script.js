let focusBtn = document.getElementById('focus');
let buttons = document.querySelectorAll('.button');
let shortBreakBtn = document.getElementById('shortbreak');
let longBreakBtn = document.getElementById('longbreak');
let startBtn = document.getElementById('start');
let pauseBtn = document.getElementById('pause');
let restartBtn = document.getElementById('restart');
let mins = document.querySelector('.mins');
let secs = document.querySelector('.secs');

let count = 59;
let paused = true;
let minCount = 25;

mins.textContent = minCount;

restartBtn.addEventListener('click', () => {
  startBtn.classList.remove('hide');
  startBtn.classList.add('show');
  pauseBtn.classList.remove('show');
  restartBtn.classList.remove('show');
  pauseBtn.classList.add('hide');
  restartBtn.classList.add('hide');
});

const removeFocus = () => {
  buttons.forEach((btn) => {
    btn.classList.remove('focus');
  });
};

focusBtn.addEventListener('click', () => {
  removeFocus();
  focusBtn.classList.add('focus');
  minCount = 25;
  mins.textContent = minCount.toString().padStart(2, '0');
  startTimer(minCount, 24);
});

shortBreakBtn.addEventListener('click', () => {
  removeFocus();
  shortBreakBtn.classList.add('focus');
  minCount = 5;
  mins.textContent = minCount.toString().padStart(2, '0');
  startTimer(minCount, 4);
});

longBreakBtn.addEventListener('click', () => {
  removeFocus();
  longBreakBtn.classList.add('focus');
  minCount = 10;
  mins.textContent = minCount.toString().padStart(2, '0');
  startTimer(minCount, 9);
});

startBtn.addEventListener('click', () => {
  startBtn.classList.remove('show');
  startBtn.classList.add('hide');
  pauseBtn.classList.remove('hide');
  restartBtn.classList.remove('hide');
  pauseBtn.classList.add('show');
  restartBtn.classList.add('show');
});

pauseBtn.addEventListener('click', () => {
  startBtn.classList.remove('hide');
  startBtn.classList.add('show');
  pauseBtn.classList.remove('show');
  restartBtn.classList.remove('show');
  pauseBtn.classList.add('hide');
  restartBtn.classList.add('hide');
});

const startTimer = (mins, count) => {};
