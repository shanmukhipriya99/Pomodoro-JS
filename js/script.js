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
let minCount = 24;
let set;

mins.textContent = (minCount + 1).toString().padStart(2, '0');

restartBtn.addEventListener('click', () => {
  let focusedID = document.querySelector('.focus').id;
  count = 59;
  if (focusedID == 'focus') {
    minCount = 24;
  } else if (focusedID == 'shortbreak') {
    minCount = 4;
  } else if (minCount == 'longbreak') {
    minCount = 9;
  }
  mins.textContent = (minCount + 1).toString().padStart(2, '0');
  secs.textContent = '00';
});

const removeFocus = () => {
  buttons.forEach((btn) => {
    btn.classList.remove('focus');
  });
};

focusBtn.addEventListener('click', () => {
  removeFocus();
  clearInterval(set);
  startBtn.classList.remove('hide');
  pauseBtn.classList.add('hide');
  restartBtn.classList.add('hide');
  focusBtn.classList.add('focus');
  minCount = 24;
  count = 59;
  mins.textContent = (minCount + 1).toString().padStart(2, '0');
  secs.textContent = '00';
});

shortBreakBtn.addEventListener('click', () => {
  removeFocus();
  clearInterval(set);
  startBtn.classList.remove('hide');
  pauseBtn.classList.add('hide');
  restartBtn.classList.add('hide');
  shortBreakBtn.classList.add('focus');
  minCount = 4;
  count = 59;
  mins.textContent = (minCount + 1).toString().padStart(2, '0');
  secs.textContent = '00';
});

longBreakBtn.addEventListener('click', () => {
  removeFocus();
  clearInterval(set);
  startBtn.classList.remove('hide');
  pauseBtn.classList.add('hide');
  restartBtn.classList.add('hide');
  longBreakBtn.classList.add('focus');
  minCount = 9;
  count = 59;
  mins.textContent = (minCount + 1).toString().padStart(2, '0');
  secs.textContent = '00';
});

startBtn.addEventListener('click', () => {
  startBtn.classList.add('hide');
  pauseBtn.classList.remove('hide');
  restartBtn.classList.remove('hide');
  startTimer();
});

pauseBtn.addEventListener('click', () => {
  startBtn.classList.remove('hide');
  pauseBtn.classList.add('hide');
  restartBtn.classList.add('hide');
});

const startTimer = () => {
  if (paused) {
    paused = false;
    mins.textContent = minCount.toString().padStart(2, '0');
    secs.textContent = count.toString().padStart(2, '0');
    set = setInterval(() => {
      count--;
      mins.textContent = minCount.toString().padStart(2, '0');
      secs.textContent = count.toString().padStart(2, '0');
      if (count == 0) {
        if (minCount != 0) {
          minCount--;
          count = 60;
        } else {
          clearInterval(set);
        }
      }
    }, 1000);
  }
};
