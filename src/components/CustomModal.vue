<template>
  <div class="modal" :class="{ 'is-active': isActive }">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-content" id="modal-content">
      <button class="modal-close is-large" aria-label="close" @click="closeModal">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
      <div class="modal-body  animate__animated animate__fadeInDown" v-if="movie">
        <section class="section-left">
          <img :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`" alt="" class="modal-image">
        </section>

        <section class="section-right">

          <header class="movie-specs">
            <h1 class="movie-title">{{ movie.title ?? movie.name }}</h1>
            <div class="movie-duration">
              <div>
                <span v-for="genre in movie.genres?.slice(0, 2)" :key="genre.id" class="genre">
                  {{ genre.name }}
                </span>
              </div>
              <span class="release-date">Release date: {{ movie.release_date ?? movie.first_air_date }}</span>
            </div>
            <ul class="user-votes">
              <li class="metric">
                <span class="qualification">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="30" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 heart">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                  {{ movie.vote_average }}
                </span>
                <small>Rating</small>
              </li>
              <li class="metric">
                <span class="qualification">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="30" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 score">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384" />
                  </svg>
                  {{ movie.vote_count }}
                </span>
                <small>Score</small>
              </li>
              <li class="metric">
                <span class="qualification">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="30" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 trophy">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                  </svg>
                  {{ movie.popularity }}
                </span>
                <small>Popularity</small>
              </li>
            </ul>
          </header>

          <div class="movie-description">
            <p>{{ movie.overview }}</p>
            <a href="" class="full-movie">Full movie profile -></a>
          </div>

          <footer class="movie-footer">
            <a href="" class="trailer">
              Watch Trailer
              <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="30" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
              </svg>
            </a>
            <a href="" class="watchlist">
              To Watchlist
              <svg xmlns="http://www.w3.org/2000/svg" fill="#e9bd05" width="30" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
            </a>
          </footer>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // isActive: Boolean,
    // movieId: Number,
  },

  computed:{
    modal(){
      return document.getElementById('modal-content');
    }, 

    modalHeight(){
      return this.modal.clientHeight;
    },

    modalWidth(){
      return this.modal.clientWidth;
    },
  },

  data() {
    return {
      isActive: false,
      movie: {},
    }
  },
  methods: {
    closeModal() {
      this.isActive = false;
      //this.$emit('update:isActive', false);
    },

    openModal(id, type) {
      this.isActive = true;
      this.getMovieInfo(id, type);
    },

    getMovieInfo(id, type) {
      this.axios.get(`/${type}/${id}`)
        .then((response) => {
          this.movie = response.data;
        })
        .catch(() => {

        })
        .finally(() => {
        })
    },
  },

  mounted() {

  }


};
</script>

