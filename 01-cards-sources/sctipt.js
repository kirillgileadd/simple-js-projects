const slides = document.querySelectorAll('.slide')

for (const slide of slides) {


   slide.addEventListener('click', () => {

      removeActiveClass()
      slide.classList.add('active')
   })
}

const removeActiveClass = () => {
   slides.forEach((slide) => {
      slide.classList.remove('active')
   })
}