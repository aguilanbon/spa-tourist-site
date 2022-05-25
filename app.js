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