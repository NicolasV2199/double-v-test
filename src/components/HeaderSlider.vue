<template>
  <section class="header-slider">
    <img src="/assets/images/gran-turismo.jpg" class="movie-slide active" />
    <img src="/assets/images/oppenheimer.jpg" class="movie-slide" />
    <img src="/assets/images/super-mario.jpg" class="movie-slide" />
    <img src="/assets/images/dark-knight.jpg" class="movie-slide" />
    <div class="content">
      <h1>{{ selectedSlide.title }}</h1>
      <p>{{ selectedSlide.description }}</p>
      <a href="" class="watch-trailer">
        Watch Trailer
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
        </svg>
      </a>
    </div>
    <div class="media-icons">
      <span @click="slideUp">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </span>
      <span @click="slideDown">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </span>
    </div>
    <div class="slider-navigation">
      <div class="nav-btn" :class="{ 'active': index == 1 }" v-for="index in 4" :key="`nav-btn${index}`"
        @click="changeSlide(index)"></div>
    </div>

    <footer class="slide-footer">
      <p>
        {{ selectedSlide.type }} <br>
        <span>{{ selectedSlide.date }}</span>
      </p>
    </footer>
  </section>
</template>

<script>
export default {

  data() {
    return {
      slideNumber: 0,
      slidesData: [
        {
          id: 1,
          src: '/assets/images/gran-turismo.jpg',
          title: 'Gran turismo',
          description: 'The ultimate wish-fulfillment tale of a teenage Gran Turismo player whose gaming skills won him a series of Nissan competitions to become an actual professional racecar driver.',
          type: 'In theaters',
          date: '20 Nov, 2023',
        },
        {
          id: 2,
          src: '/assets/images/oppenheimer.jpg',
          title: 'Oppenheimer',
          description: 'The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.',
          type: 'In theaters',
          date: '19 Jul, 2023',
        },
        {
          id: 3,
          src: '/assets/images/super-mario.jpg',
          title: 'Mario bros.',
          description: 'While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.',
          type: 'In theaters',
          date: '04 May, 2023',
        },
        {
          id: 4,
          src: '/assets/images/dark-knight.jpg',
          title: 'The dark Knight',
          description: 'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.',
          type: 'Released',
          date: '14 Jul, 2008',
        },
      ],
      selectedSlide: {
        id: 1,
        src: '/assets/images/gran-turismo.jpg',
        title: 'Gran turismo',
        description: 'The ultimate wish-fulfillment tale of a teenage Gran Turismo player whose gaming skills won him a series of Nissan competitions to become an actual professional racecar driver.',
        type: 'In theaters',
        date: '20 Nov, 2023',
      }
    }
  },

  computed: {
    buttons() {
      return document.querySelectorAll(".nav-btn");
    },

    slides() {
      return document.querySelectorAll(".movie-slide");
    }
  },

  methods: {
    changeSlide(index) {
      this.removeActive();
      this.slideNumber = index - 1;
      this.selectedSlide = this.slidesData[this.slideNumber];
      this.addActive(this.slideNumber);
    },

    removeActive() {
      this.buttons.forEach((btn) => {
        btn.classList.remove("active");
      })

      this.slides.forEach((slide) => {
        slide.classList.remove("active");
      })
    },

    addActive(index) {
      this.buttons[index].classList.add("active");
      this.slides[index].classList.add("active");

    },

    slideUp() {
      this.removeActive();
      this.slideNumber++;
      if (this.slideNumber > 3) {
        this.slideNumber = 0;
      }
      this.addActive(this.slideNumber);
      this.selectedSlide = this.slidesData[this.slideNumber];
    },

    slideDown() {
      this.removeActive();
      this.slideNumber--;
      if (this.slideNumber < 0) {
        this.slideNumber = 3;
      }
      this.addActive(this.slideNumber);
      this.selectedSlide = this.slidesData[this.slideNumber];
    }
  }

}
</script>

<style></style>