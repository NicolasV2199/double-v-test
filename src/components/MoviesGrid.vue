<template>
  <div class="container">

    <custom-modal ref="customMovieModal">

    </custom-modal>

    <nav class="navigation-menu">
      <ul class="navigation-list">
        <li class="navigation-option" v-for="option in navOptions" :key="option.id"
          :class="{ 'active': navOption.key == option.key }" @click="changeNavOption(option)">
          {{ option.text }}
        </li>
        <li class="navigation-option">More</li>
        <li class="movies-rate">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
          <span>179</span>
        </li>
      </ul>
    </nav>

    <div class="movies-options">

      <div class="movies-layout">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6 movies-option-icon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6 movies-option-icon">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      </div>

      <div class="movies-rating">
        <label for="custom-range">IMDB Rating {{ movieRate }}</label>
        <input type="range" name="range" id="custom-range" class="custom-range" v-model="movieRate" min="1" max="10" step="0.1" @change="multipleFilterData">
      </div>

      <div class="movies-search">
        <input type="text" v-model="search">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6 movies-option-icon search-icon" @click="searchData">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </div>

    </div>

    <section class="movies-grid">
      <div v-if="isLoading" class="loader-container animate__bounce">
        <div class="loader"></div>
      </div>
      <article v-else class="movie-card animate__animated animate__fadeInLeft" v-for="movie in movies" :key="movie.id"
        @click="showModal(movie.id)">
        <img :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`" alt="" v-if="movie.poster_path != null">
        <img src="/assets/images/no-image.jpg" alt="" v-else>
        <div class="movie-info">
          <h3 class="movie-title">{{ movie.title }}</h3>
          <p class="movie-categories">
            <span v-for="genre in movie.genres?.slice(0, 2)" :key="genre.id">{{ genre.name }}</span>
          </p>
          <div class="movie-hearts">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="30" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6 heart">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            <span>{{ movie.vote_average }}</span>
          </div>
          <div class="triangle-left">
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6 movie-plus-icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
          </svg>
        </div>
      </article>
    </section>

    <div class="pagination">
      <span class="pagination-icon" @click="decreasePage">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
      </span>
      <span>{{ page }}</span>
      <span class="pagination-icon" @click="increasePage">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
import CustomModal from './CustomModal.vue';
export default {
  components: { CustomModal },

  data() {
    return {
      navOptions: [
        {
          id: 1,
          key: 'in-theaters',
          text: 'In theaters',
          path: '/movie/now_playing',
          type: 'movie'
        },
        {
          id: 2,
          key: 'coming-soon',
          text: 'Coming soon',
          path: '/movie/upcoming',
          type: 'movie',
        },
        {
          id: 3,
          key: 'movie-top-rated',
          text: 'Top rated',
          path: '/movie/top_rated',
          type: 'movie',
        },
        {
          id: 4,
          key: 'tv-series',
          text: 'TV Series',
          path: '/tv/top_rated',
          type: 'tv'
        },
        {
          id: 5,
          key: 'tv-on-air',
          text: 'Series on Air',
          path: '/tv/on_the_air',
          type: 'tv',
        },
      ],
      navOption: {
        id: 1,
        key: 'in-theaters',
        text: 'In theaters',
        path: '/movie/now_playing',
        type: 'movie'
      },
      movies: [],
      isLoading: true,
      modalActive: false,
      search: "",
      page: 1,
      movieRate: 1,
    }
  },

  methods: {

    changeNavOption(option) {
      this.navOption = option;
      this.search = "";
      this.page = 1;
      this.getData();
    },

    getData() {
      this.isLoading = true;
      this.axios.get(`${this.navOption.path}?page=${this.page}`)
        .then((response) => {
          this.movies = response.data.results;
        })
        .catch(() => {

        })
        .finally(() => {
          setTimeout(() => {
            this.isLoading = false;
          }, 2000);
        })
    },

    searchData() {
      this.isLoading = true;
      this.axios.get(`/search/${this.navOption.type}?query=${this.search}`)
        .then((response) => {
          this.movies = response.data.results;
        })
        .catch(() => {

        })
        .finally(() => {
          setTimeout(() => {
            this.isLoading = false;
          }, 1000);
        })
    },

    multipleFilterData() {
      this.isLoading = true;
      this.axios.get(`/discover/${this.navOption.type}?vote_average.gte=${this.movieRate}`)
        .then((response) => {
          this.movies = response.data.results;
        })
        .catch(() => {

        })
        .finally(() => {
          setTimeout(() => {
            this.isLoading = false;
          }, 1000);
        })
    },

    showModal(movieId) {
      this.$refs.customMovieModal.openModal(movieId, this.navOption.type);
    },

    increasePage(){
      this.page ++;
      this.getData();
    },

    decreasePage(){
      if(this.page > 1){
        this.page--;
        this.getData();
      }
    },



  },

  mounted() {
    this.getData();
  }
}
</script>

<style></style>