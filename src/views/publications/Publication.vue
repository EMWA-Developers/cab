<template lang="html">
  <div>
    <!--  -->
    <!-- <section class="container">
      <div class="my-widget--slide w3-display-container">
        <img src="../../assets/logo-white.png" alt="" class="my-widget--placeholder w3-display-middle">
        <img :data-src="publication.image" alt="" class="my-widget--slide-content lazyload widget--slide-image-fixed" v-if="publication.image">
      </div>
    </section> -->

    <!--  -->
    <section class="container">
      <div class="row">
        <div class="col-xs-12 col-md-8 pr-md-5">
          <!--  -->
          <div class="my-widget--slide w3-display-container  mb-5">
            <img src="../../assets/logo-white.png" alt="" class="my-widget--placeholder w3-display-middle">
            <img :data-src="publication.image" alt="" class="my-widget--slide-content lazyload widget--slide-image-fixed" v-if="publication.image">
          </div>
          <!--  -->
          <h3 class="page-header mt-0">
            <strong v-if="english && publication.title_en" v-html="publication.title_en"></strong>
            <strong v-if="french && publication.title_fr" v-html="publication.title_fr"></strong>
          </h3>
          <!-- Content -->
          <p class="text-justify" v-html="publication.content_en" v-if="english && publication.content_en"></p>
          <p class="text-justify" v-html="publication.content_fr" v-if="french && publication.content_fr"></p>
        </div>
        <!-- Sidebar -->
        <div class="col-xs-12 col-md-4">
          <Sidebar />
        </div>
      </div>
    </section>
    <!--  -->


  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import { languageMixin } from '../../mixins/language'

export default {
  mixins: [languageMixin],
  props: ['id'],
  computed: {
    ...mapGetters(['newsAndPublications']),
    publication() {
      return this.$store.getters.publication(this.id);
    }
  },
  created() {
    if (!this.newsAndPublications.length) {
      this.$store.dispatch('getNewsAndPublications')
    }
  }
}
</script>

<style lang="css">
</style>
