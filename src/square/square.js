export default class Square {
    constructor(node){
        this.node = node
        this.setEvents()
    }

    setEvents () {
    const listItem = this.node.querySelectorAll('.square__list-item')
    listItem.forEach(element => {
      element.addEventListener('click', this.movieSelected.bind(this))
    })
  }
  movieSelected (event) {
    const clickedElement = event.currentTarget
    if (clickedElement.classList.contains('square__list-item')) {
      clickedElement.classList.toggle('square__list-item--selected animated')
    }
  }
}
