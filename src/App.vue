<template>
  <div id="app">
    <div class="mb-4">
      <Header />
    </div>
    <transition name="slide" appear mode="out-in">
      <router-view />
    </transition>
    <section class="widget--footer-main">
      <Footer />
    </section>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  components: {
    Header,
    Footer
  },
  created() {
    $(function () {
      var nua = navigator.userAgent
      var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
      if (isAndroid) {
        $('select.form-control').removeClass('form-control').css('width', '100%')
      }
    })

    this.$store.dispatch('getHomePage')
    this.$store.dispatch('getCategories')
    this.$store.dispatch('getBrochures')
    this.$store.dispatch('getExperts')
    this.$store.dispatch('getAbout')
    this.$store.dispatch('getServices')
    this.$store.dispatch('getPracticeAreas')
    this.$store.dispatch('getPresences')
    this.$store.dispatch('getNewsAndPublications')
    this.$store.dispatch('getMultimedia')
  }
}
</script>

<style lang="scss">
// <!-- @Import Styles -->
// @import './styles/w3.css';
@import './styles/fonts.css';
@import './styles/style.css';
@import './styles/pace.css';
@import './styles/w3.css';
@import '../static/icons/css/simple-line-icons.css';

iframe[id^="youtube-player"] {
  width: 100%!important;
  height: 200px!important;
  border-radius: 4px!important;
}

.slide-enter-active {
  animation: slide-in .1s ease-out forwards;
}
.slide-leave-active {
  animation: slide-out .1s ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-20px);
    opacity: 0;
  }
}

.VueCarousel-pagination {
  position: absolute!important;
  bottom: 20px !important;
}
.home-carousel {
  .VueCarousel {
    position: relative!important;
  }
  .VueCarousel-pagination {
    position: absolute!important;
    left: 300px !important;
    bottom: 10px !important;
  }
}
@media only screen and (max-width: 767px) {
  .home-carousel {
    .VueCarousel-pagination {
      position: absolute!important;
      left: 0 !important;
      bottom: 10px !important;
    }
  }
}
@media screen and (min-width:768px) and (max-width:991px) {
  .home-carousel {
    .VueCarousel-pagination {
      left: 130px !important;
      bottom: 10px !important;
    }
  }
}
</style>
