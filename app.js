
const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', drageleave)
    placeholder.addEventListener('drop', dragdrop)
}


function dragstart(event){
    event.target.classList.add('hold')
    setTimeout( ()=> event.target.classList.add('hide')
    //console.log('dragstart')
    ,0)
}

function dragend(event){
    event.target.classList.remove('hold', 'hide')
    //console.log('dragend')
}

function dragover(event){
    event.preventDefault()
    //console.log('dragover')
}

function dragenter(event){
    event.target.classList.add('hovered')
    //console.log('dragenter')
}

function drageleave(event){
    event.target.classList.remove('hovered')
    //console.log('dragleace')

}
function dragdrop(event){
    event.target.classList.remove('hovered')
    event.target.append(item)
    //console.log('dragdrop')

}

