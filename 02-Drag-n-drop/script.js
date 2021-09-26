
const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')


for (const placeholder of placeholders) {
   placeholder.addEventListener('dragover', dragover)
   placeholder.addEventListener('dragenter', dragenter)
   placeholder.addEventListener('dragleave', dragleave)
   placeholder.addEventListener('drop', dragdrop)
}

const dragstart = (e) => {
   e.target.classList.add('hold')
   setTimeout(() => {
      e.target.classList.add('hide')
   }, 0)
}

const dragend = (e) => {
   e.target.classList.remove('hold', 'hide')
}



item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)



function dragover(e) {
   e.preventDefault()
}

function dragenter(e) {
   e.target.classList.add('hover')
}

function dragleave(e) {
   e.target.classList.remove('hover')
}

function dragdrop(e) {
   e.target.classList.remove('hover')
   e.target.append(item)
}


