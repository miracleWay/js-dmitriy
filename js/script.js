"use strict"

document.addEventListener( 'click', actionFunc )

function actionFunc ( e ) {
    const targetElement = e.target

    if ( targetElement.closest( '.open-modal' ) ) {
        const htmlElement = document.documentElement
        htmlElement.classList.add( 'show-modal' )
    } else if ( targetElement.closest( '.modal__close-button' ) ) {
        const htmlElement = document.documentElement
        htmlElement.classList.remove( 'show-modal' )
    }

}