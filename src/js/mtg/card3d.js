class Card3D {
  constructor(element) {
    this.element = element;
    this.inner = element.querySelector(".card3d-inner");
    this.init();
  }

  init() {
    this.element.style.perspective = "1000px";
    this.inner.style.transformStyle = "preserve-3d";
    this.inner.style.transition = "transform 0.2s ease-out";
    this.element.addEventListener("mousemove", this.handleMouseMove.bind(this));
    this.element.addEventListener("mouseleave", this.handleMouseLeave.bind(this));
  }

  handleMouseMove(event) {
    const { width, height, left, top } = this.element.getBoundingClientRect();
    const x = (event.clientX - left - width / 2) / width * 2;
    const y = (event.clientY - top - height / 2) / height * -2;
    
    this.inner.style.transform = `rotateY(${x * 15}deg) rotateX(${y * 15}deg)`;
  }

  handleMouseLeave() {
    this.inner.style.transform = "rotateY(0) rotateX(0)";
  }
}

// Apply to all elements with class "card3d"
document.querySelectorAll(".card3d").forEach(card => new Card3D(card));
