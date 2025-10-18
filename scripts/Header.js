class Header {
    selectors = {
        root: '[data-js-header]',
        burgerButton: '[data-js-header-burger-button]',
    }

    stateClasses ={
        isOpened: 'open',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        this.burgerButtonElement = document.querySelector(this.selectors.burgerButton)
        this.bindEvents()
    }

    onBurgerButtonClick = () => {
        this.rootElement.classList.toggle(this.stateClasses.isOpened)
    }

    bindEvents() {
        this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)

    }
}




export default Header