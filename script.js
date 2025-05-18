  class TestimonialCarousel {
      constructor(trackSelector, prevBtnSelector, nextBtnSelector) {
        this.track = document.querySelector(trackSelector);
        this.cards = Array.from(this.track.children);
        this.prevBtn = document.querySelector(prevBtnSelector);
        this.nextBtn = document.querySelector(nextBtnSelector);
        this.currentIndex = 0;

        this.updateCarousel = this.updateCarousel.bind(this);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.onResize = this.onResize.bind(this);

        this.addEventListeners();
        this.updateCarousel();
      }

      updateCarousel() {
        const containerWidth = this.track.offsetWidth;
        this.track.style.transform = `translateX(-${this.currentIndex * containerWidth}px)`;
        this.cards.forEach((card, index) => {
          card.classList.toggle('active', index === this.currentIndex);
        });
      }

      next() {
        this.currentIndex = (this.currentIndex + 1) % this.cards.length;
        this.updateCarousel();
      }

      prev() {
        this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
        this.updateCarousel();
      }

      onResize() {
        this.updateCarousel();
      }

      addEventListeners() {
        this.nextBtn.addEventListener('click', this.next);
        this.prevBtn.addEventListener('click', this.prev);
        window.addEventListener('resize', this.onResize);
      }
    }

    document.addEventListener('DOMContentLoaded', () => {
      new TestimonialCarousel('.carousel-track', '.nav.prev', '.nav.next');
    });