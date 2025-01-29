class Card3D {
  constructor(element) {
    this.element = element;
    this.image = element.querySelector("img");
    this.init();
  }

  init() {
    this.element.style.perspective = "1000px";
    this.image.style.transition = "transform 0.2s ease-out";
    this.image.style.transformOrigin = "center";
    this.element.addEventListener("mousemove", this.handleMouseMove.bind(this));
    this.element.addEventListener("mouseleave", this.handleMouseLeave.bind(this));
  }

  handleMouseMove(event) {
    const { width, height, left, top } = this.element.getBoundingClientRect();
    const x = (event.clientX - left) / width - 0.5;
    const y = (event.clientY - top) / height - 0.5;
    
    this.image.style.transform = `scale(1.2) rotateY(${x * 20}deg) rotateX(${y * -20}deg)`;
  }

  handleMouseLeave() {
    this.image.style.transform = "scale(1) rotateY(0) rotateX(0)";
  }
}

// Apply to all elements with class "card3d"
document.querySelectorAll(".card3d").forEach(card => new Card3D(card));
