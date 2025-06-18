const tabOne = $( "#tab-1" )
const tabTwo = $( "#tab-2" )
const tabThree = $( "#tab-3" )
const contentOne = $( "#content-1" )
const contentTwo = $( "#content-2" )
const contentThree = $( "#content-3" )
const tabButtons = $( ".tabs__button" )
const tabsContents = $( ".tabs__content" )


$.actionFunc = function ( e ) {

    const targetElement = e.target

    if ( targetElement.closest( '#tab-1' ) ) {
        $.removeClass()
        $.showTabOne()
    } else if ( targetElement.closest( '#tab-2' ) ) {
        $.removeClass()
        $.showTabTwo()
    } else if ( targetElement.closest( '#tab-3' ) ) {
        $.removeClass()
        $.showTabThree()
    }

}

$.removeClass = function () {
    tabButtons.each( function () {
        $( this ).removeClass( 'tabs__button--active' )
    } );

    tabsContents.each( function () {
        $( this ).removeClass( 'tabs__content--active' )
    } );
}

$.showTabOne = function () {
    tabOne.addClass( 'tabs__button--active' )
    contentOne.addClass( 'tabs__content--active' )
}

$.showTabTwo = function () {
    tabTwo.addClass( 'tabs__button--active' )
    contentTwo.addClass( 'tabs__content--active' )
}

$.showTabThree = function () {
    tabThree.addClass( 'tabs__button--active' )
    contentThree.addClass( 'tabs__content--active' )
}

$( document ).click( $.actionFunc )
