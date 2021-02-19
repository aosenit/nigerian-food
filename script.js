const Toggle = document.querySelector('.toggle')
const nav = document.querySelector('.header__nav')
const left = document.querySelector('.left')
const right = document.querySelector('right')
const Lists = document.querySelectorAll('.header__list')
const navLists = Array.from(Lists)

const handleToggle = () => {
        nav.classList.toggle('show')
        Toggle.classList.toggle('left-show')

}


Toggle.addEventListener('click', handleToggle)

function HandleMenus() {
    navLists.forEach(nav => nav.classList.remove('active'))
    this.classList.add('active')

    nav.classList.toggle('show')
  
}

navLists.forEach((nav) => { nav.addEventListener('click', HandleMenus )})

const scrollingUp = document.querySelector('.scroll-up')
const rootElement = document.documentElement

scrollingUp.addEventListener('click', () => {
    rootElement.scrollTo (
        {
            top:0,
            behavior: 'smooth'
        }
    )
})

const changeTheme= document.querySelector('.change-theme')
const wrapper= document.querySelector('.wrapper')

let localData = localStorage.getItem('currentTheme')

if (localData) {
    wrapper.classList.add('dark')

}
changeTheme.addEventListener('click', () => {
        wrapper.classList.toggle('dark')


    if (wrapper.classList.contains('dark')) {
        localStorage.setItem('currentTheme', 'enabled')
    } else {
        localStorage.removeItem('currentTheme')
    }
})




let count = 0
const aboutImages = document.querySelectorAll('.about-img')[0]
const backMove= document.querySelector('.back-btn')
const frontMove= document.querySelector('.front-btn')
const slider = document.querySelector('.about__image')

aboutImages. src.style.right = '300px'

// let sliderWidth = aboutImages[0].offsetWidth
// console.log(slider,sliderWidth)
// backMove.addEventListener('click', () => {
//    count++
//    if (count<= 0) {
//        count = aboutImages.length-1
//       //aboutImages[count].style.left = `${sliderWidth} * ${count} *px`
//       slider.style.display = 'none'
//    }
   
// })