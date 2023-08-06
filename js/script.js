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

restartBtn.addEventListener('click', () => {});

const removeFocus = () => {
  buttons.forEach((btn) => {
    btn.classList.remove('focus');
  });
};

focusBtn.addEventListener('click', () => {
  removeFocus();
  focusBtn.classList.add('focus');
});

shortBreakBtn.addEventListener('click', () => {
  removeFocus();
  shortBreakBtn.classList.add('focus');
});

longBreakBtn.addEventListener('click', () => {
  removeFocus();
  longBreakBtn.classList.add('focus');
});

startBtn.addEventListener('click', () => {
  startBtn.classList.remove('show');
  startBtn.classList.add('hide');
  pauseBtn.classList.remove('hide');
  restartBtn.classList.remove('hide');
  pauseBtn.classList.add('show');
  restartBtn.classList.add('show');
});
