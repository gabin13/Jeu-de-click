const board = document.querySelector( '#board' )

let time = 0
let score = 0

console.log('Jeu démarré');

let box = document.querySelector(' .box');
console.log(box);
let scroreElement = document.querySelector('#score');

box.addEventListener("click", () => {
    console.log('click sur la box !');
    click += 1;
    scroreElement.innerHTML = click;

    let top = Math.floor(Math.random() * window.innerHeight);
    let left = Math.floor(Math.random() * window.innerWidth);

    box.style.top = `${top}px` ;
    box.style.left = `${left}px` ;
}) ;

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