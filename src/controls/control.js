export default class Control  {
    constructor(node) {
        this.node = node
        this.setEvent()
    }

    setEvent () {
        buttonPlay = this.node.querySelector('.button--play')
        buttonStop = this.node.querySelector('.button-stop')

        buttonPlay.addEventListener('clic', this.animation.bind(this))
    }

    animation(event){
        const listItem = this.node.querySelectorAll('.square__list-item')
        listItem.forEach(element => {
        element.classList.remove('square__list-item--selected')
        element.classList.add('square__list-item--selected')
    })

    }

}