const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const gameTime = document.querySelector('#time')
const board = document.querySelector('#board')
const repeat = document.querySelector('#repeat')
// console.log(screens)
let time = 1
let score = 0
startBtn.addEventListener('click', (e) => {
   e.preventDefault()
   screens[0].classList.add('up')
})

timeList.addEventListener('click', (e) => {

   if (e.target.classList.contains('time-btn')) {
      time = parseInt(e.target.getAttribute('data-time'))
      screens[1].classList.add('up')
      startGame()
   }
})

board.addEventListener('click', (e) => {
   if (e.target.classList.contains('circle')) {
      score++
      e.target.remove()
      createRandomCircle()
   }
})

repeat.classList.add('hide')
repeat.addEventListener('click', () => {
   score = 0
   time = 0
})

function startGame() {
   setInterval(decreaseTime, 1000)
   createRandomCircle()
   setTime(time)
}

function decreaseTime() {
   if (time === 0) {
      finishGame()
   } else {
      let current = --time
      if (current < 10) {
         current = `0${current}`
      }
      setTime(current)
   }

}

function setTime(value) {
   gameTime.innerHTML = `00:${value}`
}


function finishGame() {
   gameTime.parentNode.classList.add('hide')
   board.innerHTML = `<h1>Счет: <span class='primary'>${score}</span></h1>`
   repeat.classList.remove('hide')
}

function createRandomCircle() {
   const circle = document.createElement('div')
   circle.classList.add('circle')
   const { height, width } = board.getBoundingClientRect()
   let size = randomNum(10, 40)
   const x = randomNum(0, width - size)
   const y = randomNum(0, height - size)

   circle.style.height = `${size}px`
   circle.style.width = `${size}px`
   circle.style.top = `${x}px`
   circle.style.left = `${y}px`
   board.append(circle)
}

function randomNum(min, max) {
   value = Math.floor(Math.random() * (max - min) + min)
   return value
}

