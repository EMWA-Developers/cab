<template lang="html">
  <div>
    <Carousel :perPage="1" :autoplay="true" :autoplayTimeout="4000" :paginationEnabled="false">
      <Slide v-for="news in alaune" :key="news.id">
        <!-- English -->
        <div class="widget--news" v-if="english && news.title_en">
          <div class="widget--box-fade w3-display-container">
            <img src="../assets/logo-white.png" alt="" class="widget--box-fade--placeholder w3-display-middle">
            <img :data-src="news.image" alt="" class="widget--box-fade-content lazyload">
          </div>
          <router-link tag="h5" :to="`/publication/${news.id}`" class="widget--title">
            <span v-if="english">{{news.title_en}}</span>
            <span v-if="french">{{news.title_fr}}</span>
          </router-link>
          <h6 class="widget--subtitle">
            <span class="mr-4"><i class="fa fa-clock-o" aria-hidden="true"></i> {{news.publishedAt | date}}</span>
            <span>
              <svg
              xmlns="http://www.w3.org/2000/svg" width="11px" height="11px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user mr-1"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span v-for="author in news.authors" :key="author" class="text-capitalize mr-2 widget--little-separator">{{author}}</span>
            </span>
          </h6>
        </div>
        <!-- French -->
        <div class="widget--news" v-if="french && news.title_fr">
          <div class="widget--box-fade w3-display-container">
            <img src="../assets/logo-white.png" alt="" class="widget--box-fade--placeholder w3-display-middle">
            <img :data-src="news.image" alt="" class="widget--box-fade-content lazyload">
          </div>
          <router-link tag="h5" :to="`/publication/${news.id}`" class="widget--title">
            <span v-if="english">{{news.title_en}}</span>
            <span v-if="french">{{news.title_fr}}</span>
          </router-link>
          <h6 class="widget--subtitle">
            <span class="mr-4"><i class="fa fa-clock-o" aria-hidden="true"></i> {{news.publishedAt | date}}</span>
            <span>
              <svg
              xmlns="http://www.w3.org/2000/svg" width="11px" height="11px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user mr-1"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span v-for="(author, n) in news.authors" :key="author" class="text-capitalize mr-2 widget--little-separator">{{author}}</span>
            </span>
          </h6>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { languageMixin } from '../mixins/language'
export default {
  mixins: [languageMixin],
  computed: {
    alaune() {
      return this.$store.getters.alaune;
    }
  },
}
</script>

<style lang="css">
</style>
