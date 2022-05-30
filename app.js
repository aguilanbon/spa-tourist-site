const diveIn = document.getElementById('dive-in')
const rideIn = document.getElementById('ride-around')

const imageText = 'Dive in.'
const imageText2 = 'Coast thru beautiful rock formations.'

const arrDive = imageText.split('')
const arrRide = imageText2.split('')

let loopTimer = null

const animateText = () => {
    if(arrDive.length > 0) {
        diveIn.innerHTML += arrDive.shift()
    } 
    if(arrRide.length > 0) {
        rideIn.innerHTML += arrRide.shift()
    }
    else {
        clearTimeout(loopTimer)
    }
    loop = setTimeout(animateText, 200)
}

animateText()



const btns = document.querySelectorAll('[data-carousel-button]')


btns.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.dataset.carouselButton === 'next' ? 1 : -1
        const slides = button.closest('[data-carousel]').querySelector('[data-slides')

        const activeSlide = slides.querySelector('[data-active]')

        let newIndex = [...slides.children].indexOf(activeSlide) + offset

        if(newIndex<0) newIndex = slides.children.length - 1
        if(newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})


const hamburgerBtn = document.querySelector('.mobile-nav i')
const mobileNav = document.querySelector('.mobile-nav__container')


hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.style.display = 'none'
    mobileNav.style.display = 'block'
})
document.querySelector('.mobile-nav__container i').addEventListener('click', () => {
    mobileNav.style.display = 'none'
    hamburgerBtn.style.display = 'block'
})

const ul = document.querySelector('.mobile-nav__container ul')

const arr = ul.childNodes

arr.forEach(el => {
    el.addEventListener('click', () => {
        mobileNav.style.display = 'none'
        hamburgerBtn.style.display = 'block'
    })
})