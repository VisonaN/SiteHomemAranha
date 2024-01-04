function handleMouseEnter() {
  this.classList.add('spider-card--hovered');
  document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
  this.classList.remove('spider-card--hovered');
  document.body.id = '';

}

function addEventListenersToCard() {
  const cardElements = document.getElementsByClassName('spider-card');

  for (let i = 0; i < cardElements.length; i++) {
    const card = cardElements[i];
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
  }
}

document.addEventListener('DOMContentLoaded', addEventListenersToCard, false)

function selectCarouselItem(selectedButtonElement) {
  const selectedItem = selectedButtonElement.id;
  const carousel = document.querySelector('.spider-cards-carousel');
  const transform = carousel.style.transform;
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
  const rotateYDeg = -120 * (Number(selectedItem) - 1);
  const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);

  carousel.style.transform = newTransform;

  const activeButtonElement = document.querySelector('.spider-controller___button--active');
  activeButtonElement.classList.remove('spider-controller___button--active');
  selectedButtonElement.classList.add('spider-controller___button--active');
}