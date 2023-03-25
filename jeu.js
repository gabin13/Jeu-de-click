//initialisations des constantes
const board = document.querySelector( '#board' )
const startBtn = document.querySelector( '#start' )
const screens = document.querySelectorAll( '.screen' )
const timeList = document.querySelector( '#time-list' )
const timeEl = document.querySelector( '#time' )
const rules = document.getElementById('rules');
const rulesBtn = document.getElementById('rules-btn'); 
const closeBtn = document.getElementById('close-btn');

let time = 0
let score = 0

//ajout des événements pour le lancement de la partie
startBtn.addEventListener( 'click', ( event ) => {
    event.preventDefault()
    screens[0].classList.add( 'up' )
})

timeList.addEventListener( 'click', ( event ) => {

    if ( event.target.classList.contains( 'time-btn' ) ) {
        time = parseInt( event.target.getAttribute( 'data-time' ) )
        screens[1].classList.add( 'up' )
        startGame()
    }
} )

board.addEventListener( 'click', ( event ) => {
    if ( event.target.classList.contains( 'circle' ) ) {
        score++
        event.target.remove()
        createRandomCircle()
    }
})

function startGame() {
    const interval = setInterval( decreaseTime, 1000 )
    setTime( time )
    createRandomCircle()
}

//fonctions pour s'occuper du chronomètre
function decreaseTime() {
    if ( time === 0 ) {
        finishGame()
    } else {
        let current = --time
        if ( current < 10 ) {
            current = `0${ current }`
        }
        setTime( current )
    }
}

function setTime( value ) {
    timeEl.innerHTML = `00:${ value }`
}

function finishGame() {
    board.innerHTML = `<h1>Score: <span class="primary" >${ score }</span></h1>`
    timeEl.parentElement.classList.add( 'hidden' )
}

//création du cercle
function createRandomCircle() {
    const circle = document.createElement( 'div' )
    const circleSize = ( 40 )
    const { width, height } = board.getBoundingClientRect()

    
    const x = getRandomNumber( 0, width - circleSize )
    const y = getRandomNumber( 0, height - circleSize )

    circle.classList.add( 'circle' )
    circle.style.width = `${ circleSize }px`
    circle.style.height = `${ circleSize }px`
    circle.style.left = `${ x }px`
    circle.style.top = `${ y }px`
    

    board.append( circle )
}

function getRandomNumber( min, max ) {
    return Math.round( Math.random() * ( max - min ) + min )
}

rulesBtn.addEventListener('click', () => {
    rules.classList.add('show');
});
closeBtn.addEventListener('click', () => {
    rules.classList.remove('show');
});