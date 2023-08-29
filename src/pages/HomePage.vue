<template>
  <home-header/>
  <header-slider/>
  <movies-grid/>
  <home-footer/>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue'
import HeaderSlider from '@/components/HeaderSlider.vue'
import MoviesGrid from '@/components/MoviesGrid.vue'
import HomeFooter from '@/components/HomeFooter.vue'
export default {
  components: {  HomeHeader, HeaderSlider, MoviesGrid, HomeFooter },

}
</script>

<style>

</style>