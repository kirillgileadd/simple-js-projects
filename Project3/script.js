
const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide')
const slidebar = document.querySelector('.sidebar')
const slidesCount = mainSlide.querySelectorAll('div').length

slidebar.style.top = `-${(slidesCount - 1) * 100}vh`

let slideIndex = 0

upBtn.addEventListener('click', () => {
   changeSlide('up')
})
downBtn.addEventListener('click', () => {
   changeSlide('down')
})

document.addEventListener('keydown', e => {
   if (e.key === 'ArrowUp') {
      changeSlide('up')
   } else if (e.key === 'ArrowDown') {
      changeSlide('down')
   }
})

const changeSlide = (direction) => {
   if (direction === 'up') {
      slideIndex++
      if (slideIndex === slidesCount) {
         slideIndex = 0
      }
   } else if (direction === 'down') {
      slideIndex--
      if (slideIndex < 0) {
         slideIndex = slidesCount - 1
      }
   }
   const height = container.clientHeight
   mainSlide.style.transform = `translateY(-${slideIndex * height}px)`

   slidebar.style.transform = `translateY(${slideIndex * height}px)`


}
