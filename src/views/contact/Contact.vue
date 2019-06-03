<template lang="html">
  <div class="">
    <!--  -->
    <div class="widget--fantasy">
      <div class="widget--fantasy-title">
        <h1 class="m-0">
          <strong v-if="french">Nous contacter</strong>
          <strong v-if="english">Contact us</strong>
        </h1>
      </div>
    </div>
    <!--  -->
    <section class="container mt-5">
      <div class="row">
        <div class="col-xs-12 col-md-8 pr-md-5">
          <div class="row">
            <div class="col-xs-12 col-sm-6" v-for="(presence, i) in presences" :key="presence.id" v-if="(i+1) % 2">
              <div class="panel panel-default widget--card-contact w-100 secondary--background widget--card-contact widget--borderless">
                <div class="panel-body">
                  <h3 class="mt-0">
                    <strong class="widget--brand-color" v-if="english">{{presence.title_en}}</strong>
                    <strong class="widget--brand-color" v-if="french">{{presence.title_fr}}</strong>
                  </h3>
                  <div v-html="presence.address_en" v-if="english"></div>
                  <div v-html="presence.address_fr" v-if="french"></div>
                  <router-link tag="button" type="button" to="/message" class="btn widget--radius-link widget--hover-brand-color mt-4">
                    <strong v-if="french">Nous écrire</strong>
                    <strong v-if="english">Write to us</strong>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6" v-for="(presence, i) in presences" :key="presence.id" v-if="(i+2) % 2">
              <div class="panel panel-default widget--card-contact w-100 secondary--background widget--card-contact widget--borderless">
                <div class="panel-body">
                  <h3 class="mt-0">
                    <strong class="widget--brand-color" v-if="english">{{presence.title_en}}</strong>
                    <strong class="widget--brand-color" v-if="french">{{presence.title_fr}}</strong>
                  </h3>
                  <div v-html="presence.address_en" v-if="english"></div>
                  <div v-html="presence.address_fr" v-if="french"></div>
                  <router-link tag="button" type="button" to="/message" class="btn widget--radius-link widget--hover-brand-color mt-4">
                    <strong v-if="french">Nous écrire</strong>
                    <strong v-if="english">Write to us</strong>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <Share :link="$route.fullPath" />
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
import { mapGetters } from 'vuex'
import { languageMixin } from '../../mixins/language'

export default {
  mixins: [languageMixin],
  computed: {
    ...mapGetters(['presences'])
  },
  created() {
    if (!this.presences.length) {
      this.$store.dispatch('getPresences')
    }
  }
}
</script>

<style lang="css">
</style>
