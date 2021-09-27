const board = document.querySelector('#board')
const colors = ['red', 'pink', 'blue', 'purple', 'gold']
const SQERE_ITEMS = 462;

for (let i = 0; i < SQERE_ITEMS; i++) {
   const squere = document.createElement('div')
   squere.classList.add('squere')

   squere.addEventListener('mouseover', () => {

      setColor(squere)
   })

   squere.addEventListener('mouseleave', () => {
      setTimeout(() => {
         setTimeout(deleteColor(squere))
      }, 5000)
   })


   board.append(squere)
}

const setColor = (e) => {
   const color = getRandomColors(colors)
   console.log(e.style.backgroundColor)
   if (e.style.backgroundColor === '' || 'rgb(29, 29, 29)') {
      e.style.backgroundColor = color
      e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
   } else {
      e.style.backgroundColor = '#1d1d1d'
   }
}

const deleteColor = (e) => {
   e.style.backgroundColor = '#1d1d1d'
   e.style.boxShadow = '0 0 2px black'
}

const getRandomColors = (colors) => {
   const index = Math.floor(Math.random() * colors.length)
   return colors[index]
}