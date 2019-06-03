<template lang="html">
  <footer>
    <nav class="container py-3">
      <div class="container">
        <div class="w3-bar widget--bar">
          <router-link tag="a" to="/legal-notice" class="w3-bar-item w3-medium widget--subtitle text-uppercase">
            <span v-if="english">Legal notice</span>
            <span v-if="french">Mention légale</span>
          </router-link>
          <router-link tag="a" to="/site-map" class="w3-bar-item w3-medium widget--subtitle text-uppercase mx-4">
            <span v-if="english">site map</span>
            <span v-if="french">plan du site</span>
          </router-link>

          <router-link tag="a" to="/newsletter" class="w3-bar-item w3-right w3-medium widget--navigation widget--title">
            <i class="icon-envelope-letter mr-1" aria-hidden="true"></i>
            <span v-if="english">Subscribe to newsletter</span>
            <span v-if="french">S'abonner à la newsletter</span>
          </router-link>
        </div>
        <!--  -->
        <div class="w3-bar">
          <div class="w3-bar-item font-small widget--subtitle">
            <span v-if="english">&copy; {{new Date().getFullYear()}}. Emery Mukendi Wafwana & Associates. All rights reserved</span>
            <span v-if="french">&copy; {{new Date().getFullYear()}}. Emery Mukendi Wafwana & Associates. Tous droits réservés</span>
          </div>
        </div>
      </div>
    </nav>
  </footer>
</template>

<style lang="scss" scoped>
</style>

<script>
import {languageMixin} from '../mixins/language'
export default {
  mixins: [languageMixin]
}
</script>
