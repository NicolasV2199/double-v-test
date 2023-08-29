<template>
  <section class="header-slider">
    <video src="/assets/videos/video-landing.webm" class="video-slide active" autoplay muted loop></video>
    <video src="/assets/videos/video-landing.webm" class="video-slide" autoplay muted loop></video>
    <video src="/assets/videos/video-landing.webm" class="video-slide" autoplay muted loop></video>
    <video src="/assets/videos/video-landing.webm" class="video-slide" autoplay muted loop></video>
    <div class="content">
      <h1>Los cuatro fantasticos</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, ea.</p>
      <a href="">Read More</a>
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
        In theaters <br>
        <span>15 Oct, 2015 (USA)</span>
      </p>
    </footer>
  </section>
</template>

<script>
export default {

  data() {
    return {
      slideNumber: 0,
    }
  },

  computed: {
    buttons() {
      return document.querySelectorAll(".nav-btn");
    },

    slides() {
      return document.querySelectorAll(".video-slide");
    }
  },

  methods: {
    changeSlide(index) {
      this.removeActive();
      this.slideNumber = index - 1;
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
    },

    slideDown() {
      this.removeActive();
      this.slideNumber--;
      if (this.slideNumber < 0) {
        this.slideNumber = 3;
      }
      this.addActive(this.slideNumber);
    }
  }

}
</script>

<style></style>