let focusBtn = document.getElementById('focus');
let buttons = document.querySelectorAll('buttons');
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
