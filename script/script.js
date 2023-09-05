//Seleção dos icones
let menuItem = document.querySelectorAll('.item-menu')

function selectLink() {
    menuItem.forEach((item) =>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=> 
    item.addEventListener('click', selectLink)
)

//Expandir menu

let btnExp = document.querySelector('#expandir')
let menu = document.querySelector('.menu-lateral')

btnExp.addEventListener('click' , function(){
    menu.classList.toggle('expandir')
})