<template lang="html">
  <!-- Navigation -->
  <nav>
    <div class="container pt-3">
      <div class="w3-bar">
        <div class="w3-dropdown-hover">
          <button class="widget--navigation btn font-medium text-uppercase">
            <i class="fa fa-globe mr-2" aria-hidden="true"></i>{{selectedLanguage}} <i class="fa fa-angle-down ml-2" aria-hidden="true"></i>
          </button>
          <div class="w3-dropdown-content w3-bar-block w3-card widget--dropdown-shadow widget--borderless">
            <a class="pointer widget--hover-brand-color w3-bar-item" @click="onChangeLanguage('fr')">Français</a>
            <!-- <li role="separator" class="divider"></li> -->
            <a class="pointer widget--hover-brand-color w3-bar-item" @click="onChangeLanguage('en')">English</a>
          </div>
        </div>
        <div class="w3-right">
          <div class="w3-bar">
            <a class="w3-bar-item px-0 ml-3 ml-md-4" href="https://www.facebook.com/cabemery" target="_blank"><i class="fa fa-facebook-official widget--facebook w3-xlarge" aria-hidden="true"></i></a>
            <!--  -->
            <a class="w3-bar-item px-0 ml-3 ml-md-4" href="https://www.linkedin.com/company/1585003" target="_blank"><i class="fa fa-linkedin fa-square widget--linkedin w3-xlarge" aria-hidden="true"></i></a>
            <!--  -->
            <a class="w3-bar-item px-0 ml-3 ml-md-4" href="https://twitter.com/EMWAssociates" target="_blank"><i class="fa fa-twitter widget--twitter w3-xlarge" aria-hidden="true"></i></a>
            <!--  -->
            <a class="w3-bar-item px-0 ml-3 ml-md-4" href="https://www.youtube.com/channel/UCKImCP7wnXvQDijIGN4VNNQ" target="_blank"><i class="fa fa-youtube-play w3-text-red w3-xlarge" aria-hidden="true"></i></a>
            <a class="w3-bar-item w3-medium widget--navigation widget--title ml-4 w3-hide-small">
              <router-link tag="a" to="/newsletter" class="p-0">
                <i class="icon-envelope-letter mr-1" aria-hidden="true"></i>
                <!-- <i class="fa fa-envelope-open mr-1" aria-hidden="true"></i> -->
                <span v-if="english">Subscribe to the newsletter</span>
                <span v-if="french">S'abonner à la newsletter</span>
              </router-link>
            </a>
            <a class="w3-bar-item ml-4 w3-medium widget--navigation widget--title w3-hide-medium w3-hide-large">
              <i class="icon-envelope-letter mr-1" aria-hidden="true"></i>
            </a>

          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="w3-bar">
        <router-link tag="a" to="/" class="w3-bar-item px-0"><img src="../assets/logo.png" alt="" class="Widget--main-logo"></router-link>
        <div class="w3-bar-item px-0 w3-right">
          <div class="w3-bar">
            <a class="w3-bar-item px-0 w3-hide-medium w3-hide-large text-center pr-2">
              <small class="my-0">
                <span v-if="english">Open: <strong>Monday - Friday</strong></span>
                <span v-if="french">Ouvert: <strong>Lundi - Vendredi</strong></span>
              </small>
              <h6 class="mt-0 mb-1">
                <strong>
                  <i class="icon-clock widget--icon-large mr-1" aria-hidden="true"></i>
                  09H00 - 18H00
                </strong>
              </h6>
              <h6 class="my-0">
                <strong>
                  <i class="icon-earphones-alt widget--icon-large mr-1" aria-hidden="true"></i>
                  +(1) 2129220040
                </strong>
              </h6>
            </a>
            <!-- <li class="w3-hide-medium w3-hide-large"><i class="fa fa-bars w3-xxlarge pr-3" aria-hidden="true"></i></li> -->
            <a class="w3-bar-item px-0 mr-4 text-center w3-hide-small">
              <small class="w3-medium mt-0">
                <span v-if="english">Open: <strong>Monday - Friday</strong></span>
                <span v-if="french">Ouvert: <strong>Lundi - Vendredi</strong></span>
              </small>
              <h4 class="mb-1">
                <strong><i class="icon-clock widget--icon-large" aria-hidden="true"></i> 09H00 - 18H00 | <i class="icon-earphones-alt widget--icon-large" aria-hidden="true"></i> +(1) 2129220040</strong>
              </h4>              
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="container position-relative">
      <div class="w3-bar font-medium text-uppercase widget--navbar" id="widget--navbar">
        <router-link tag="a" to="/" activeClass="active" exact class="w3-bar-item">
          <a class="widget--hover-brand-color">
            <span v-if="french">Accueil</span>
            <span v-if="english">Home</span>
          </a>
        </router-link>
        <a class="w3-dropdown-hover">
          <button class="w3-btn widget--hover-brand-color transparent text-uppercase transparent text-uppercase transparent w3-medium">
            <span v-if="english">About</span>
            <span v-if="french">À propos</span>
            <i class="fa fa-angle-down ml-1" aria-hidden="true"></i>
          </button>
          <div class="w3-dropdown-content w3-bar-block widget--dropdown-shadow widget--borderless">
            <a class="w3-bar-item py-2 widget--hover-brand-color pointer widget--color font-small" @click="goto({url: '/about', data: option})" v-for="option in about" :key="option.id">
              <span v-if="english">{{option.title_en}}</span>
              <span v-if="french">{{option.title_fr}}</span>
            </a>
          </div>
        </a>
        <a class="w3-dropdown-hover">
          <button class="w3-btn widget--hover-brand-color transparent text-uppercase transparent text-uppercase transparent w3-medium">
            <span v-if="english">Practice areas</span>
            <span v-if="french">Secteurs</span>
            <i class="fa fa-angle-down ml-1" aria-hidden="true"></i>
          </button>
          <div class="w3-dropdown-content w3-bar-block widget--dropdown-shadow widget--borderless">
            <a class="w3-bar-item py-2 widget--hover-brand-color pointer widget--color font-small" @click="goto({url: '/practice-areas', data: practice})" v-for="practice in practiceAreas" :key="practice.id">
              <span v-if="english">{{practice.title_en}}</span>
              <span v-if="french">{{practice.title_fr}}</span>
            </a>
          </div>
        </a>
        <a class="w3-dropdown-hover">
          <button class="w3-btn widget--hover-brand-color transparent text-uppercase transparent text-uppercase transparent w3-medium">
            <span v-if="english">Services</span>
            <span v-if="french">Services</span>
            <i class="fa fa-angle-down ml-1" aria-hidden="true"></i>
          </button>
          <div class="w3-dropdown-content w3-bar-block widget--dropdown-shadow widget--borderless">
            <a class="w3-bar-item py-2 widget--hover-brand-color pointer widget--color font-small" @click="goto({url: '/services', data: service})" v-for="service in services" :key="service.id">
              <span v-if="english">{{service.title_en}}</span>
              <span v-if="french">{{service.title_fr}}</span>
            </a>
          </div>
        </a>
        <a class="w3-dropdown-hover">
          <button class="w3-btn widget--hover-brand-color transparent text-uppercase transparent text-uppercase transparent w3-medium">
            <span v-if="english">Presence</span>
            <span v-if="french">Présence</span>
            <i class="fa fa-angle-down ml-1" aria-hidden="true"></i>
          </button>
          <div class="w3-dropdown-content w3-bar-block widget--dropdown-shadow widget--borderless">
            <a class="w3-bar-item py-2 widget--hover-brand-color pointer widget--color font-small"  @click="goto({url: '/presence', data: presence})" v-for="presence in presences" :key="presence.id">
              <span v-if="english">{{presence.title_en}}</span>
              <span v-if="french">{{presence.title_fr}}</span>
            </a>
          </div>
        </a>
        <a class="w3-dropdown-hover">
          <button class="w3-btn widget--hover-brand-color transparent text-uppercase transparent text-uppercase transparent w3-medium">
            <span v-if="english">News & Publications</span>
            <span v-if="french">Actualités & Publications</span>
            <i class="fa fa-angle-down ml-1" aria-hidden="true"></i>
          </button>
          <div class="w3-dropdown-content w3-bar-block widget--dropdown-shadow widget--borderless">
            <router-link tag="a" to="/news" class="w3-bar-item py-2 widget--hover-brand-color pointer widget--color font-small">
              <span v-if="english">News</span><span v-if="french">Actualités</span>
            </router-link>
            <router-link tag="a" to="/alerts" class="w3-bar-item py-2 widget--hover-brand-color pointer widget--color font-small">
              <span v-if="english">Alerts</span><span v-if="french">Alertes</span>
            </router-link>
            <router-link tag="a" to="/publications" class="w3-bar-item py-2 widget--hover-brand-color pointer widget--color font-small">
              <span v-if="english">Publications</span><span v-if="french">Publications</span>
            </router-link>
            <router-link tag="a" to="/events" class="w3-bar-item py-2 widget--hover-brand-color pointer widget--color font-small">
              <span v-if="english">Events</span><span v-if="french">Evénements</span>
            </router-link>
            <router-link tag="a" to="/multimedia" class="w3-bar-item py-2 widget--hover-brand-color pointer widget--color font-small">
              <span v-if="english">Multimedia</span>
              <span v-if="french">Multimédia</span>
            </router-link>
            <router-link tag="a" to="/webinars" class="w3-bar-item py-2 widget--hover-brand-color pointer widget--color font-small">
              <span v-if="english">Webinars</span>
              <span v-if="french">Webinaires</span>
            </router-link>
          </div>
        </a>
        <router-link tag="a" to="/contact-us" activeClass="active" class="w3-bar-item widget--brand-color mr-4 mr-md-0">
          <a>
            <strong>
              <!-- <i class="fa fa-angle-right pr-1"></i> -->
              <span v-if="english">Contact us</span>
              <span v-if="french">Nous contacter</span>
            </strong>
          </a>
        </router-link>
      </div>
      <button class="w3-btn transparent w3-bar-item w3-white w3-hide-medium w3-hide-large w3-right widget--scroll-nav pointer" @click="scrollNavLeft">
        <i class="fa fa-angle-right w3-xlarge"></i>
      </button>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
</style>

<script>
import {mapGetters} from 'vuex'
import { languageMixin } from '../mixins/language'

export default {
  mixins: [languageMixin],
  data: () => ({
    selectedLanguage: 'en',
    sidebar: false,
  }),
  computed: {
    ...mapGetters(['loading', 'about', 'services', 'practiceAreas', 'presences', 'newsAndPublications'])
  },
  watch: {
    language(value) {
      this.selectedLanguage = value
    }
  },
  methods: {
    scrollNavLeft () {
      var elmnt = document.getElementById("widget--navbar");
      elmnt.scrollLeft += 240;
    },
    goto(value) {
      // console.log(value);
      this.$router.push({
        path: this.english ? value.url + value.data.url_en : value.url + value.data.url_fr,
        query: { id: value.data.id }
      })
    },
    onToggleSidebar() {
      return this.sidebar = !this.sidebar
    },
    onChangeLanguage(value) {
      this.$store.dispatch('changeLanguage', value)
    }
  },
  created() {
    this.selectedLanguage = this.language
    if (!this.about.length) this.$store.dispatch('getAbout');
    if (!this.services.length) this.$store.dispatch('getServices');
    if (!this.practiceAreas.length) this.$store.dispatch('getPracticeAreas');
    if (!this.presences.length) this.$store.dispatch('getPresences');
    if (!this.newsAndPublications.length) this.$store.dispatch('getNewsAndPublications');
  },
}
</script>
