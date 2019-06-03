<template lang="html">
  <div class="mt-4 mt-md-0">
    <div class="row">
      <!--  -->
      <div class="col-xs-12 col-sm-6 col-md-12 pr-md-3 p-0 pr-lg-0">
        <div class="secondary--background widget--home-experts-two p-3 pl-4">
          <h4 class="mb-4 text-uppercase">
            <strong v-if="french">NOS EXPERTS</strong>
            <strong v-if="english">OUR EXPERTS</strong>
          </h4>
          <div class="widget--card">
            <Carousel :perPage="1" :autoplay="true" :autoplayTimeout="4000" :paginationEnabled="false">
              <Slide v-for="expert in experts" :key="expert.id">
                <div class="row">
                  <div class="col-xs-5 pr-2">
                    <img :data-src="expert.avatar" alt="" class="lazyload w3-round widget--expert-img pointer" v-if="expert.avatar" @click="gotoProfile(expert.id)">
                    <div class="widget--expert-img-placeholder d-flex flex-row align-items-center justify-content-center pointer" v-else @click="gotoProfile(expert.id)">
                      <img src="../assets/logo-white.png" alt="">
                    </div>
                  </div>
                  <div class="col-xs-7 pl-2">
                    <div class="w3-medium widget--title mb-3 widget--hover-brand-color pointer" @click="gotoProfile(expert.id)">{{expert.name}}</div>
                    <div class="font-small widget--subtitle"><i class="fa fa-legal mr-2" aria-hidden="true"></i>
                      <span v-if="french">{{expert.grade_fr}}</span>
                      <span v-if="english">{{expert.grade_en}}</span>
                    </div>
                    <div class="font-small widget--subtitle text-capitalize"><span class="glyphicon glyphicon-map-marker mr-2" aria-hidden="true"></span>
                      {{expert.location_1}} <span v-if="expert.location_2">• {{expert.location_2}}</span> <span v-if="expert.location_3">• {{expert.location_3}}</span>
                    </div>
                    <div class="font-small widget--subtitle">
                      <span class="glyphicon glyphicon-earphone mr-2" aria-hidden="true"></span>
                      {{expert.phone_1}} <span v-if="expert.phone_2"> • {{expert.phone_2}}</span> <span v-if="expert.phone_3"> • {{expert.phone_3}}</span>
                    </div>
                    <div class="font-small widget--subtitle"><i class="fa fa-envelope-open-o mr-2" aria-hidden="true"></i> {{expert.email}}</div>
                    <button class="btn btn-sm widget--radius-link mt-2" @click="gotoProfile(expert.id)">
                      <span v-if="french">Voir profil</span>
                      <span v-if="english">See profile</span>
                    </button>
                  </div>
                </div>
              </Slide>
            </Carousel>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="col-xs-12 col-sm-6 col-md-12 pl-md-3 pl-lg-0 mt-4 mt-md-0 mt-lg-4">
        <div class="secondary--background widget--home-experts-three p-3 pl-4">
          <h4 class="mb-4">
            <strong v-if="french">NOS BROCHURES</strong>
            <strong v-if="english">OUR BROCHURES</strong>
          </h4>
          <div class="widget--news">
            <Carousel :perPage="1" :autoplay="true" :autoplayTimeout="5000" :paginationEnabled="false">
              <Slide v-for="brochure in brochures" :key="brochure.id" v-if="french && brochure.language == 'french'">
                <div class="row">
                  <div class="col-xs-5">
                    <img :data-src="brochure.cover" alt="" class="lazyload widget--brochure-img" v-if="brochure.cover">
                    <div class="widget--box-fade d-flex flex-row align-items-center justify-content-center" v-if="!brochure.cover">
                      <img src="../assets/logo-white.png" alt="">
                    </div>
                  </div>
                  <div class="col-xs-7 pl-0">
                    <h5 class="widget--title mt-0">
                      <span>{{brochure.title}}</span>
                    </h5>
                    <h6 class="widget--subtitle">
                      <span v-html="brochure.description"></span>
                    </h6>
                    <a :href="brochure.download_link" class="widget--brand-color pointer font-small mt-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download mr-1"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                      <strong v-if="french">Télécharger</strong>
                    </a>
                  </div>
                </div>
              </Slide>
              <Slide v-for="brochure in brochures" :key="brochure.id" v-if="english && brochure.language == 'english'">
                <div class="row">
                  <div class="col-xs-5">
                    <img :data-src="brochure.cover" alt="" class="lazyload widget--brochure-img" v-if="brochure.cover">
                    <div class="widget--box-fade d-flex flex-row align-items-center justify-content-center" v-if="!brochure.cover">
                      <img src="../assets/logo-white.png" alt="">
                    </div>
                  </div>
                  <div class="col-xs-7 pl-0">
                    <h5 class="widget--title mt-0">
                      <span>{{brochure.title}}</span>
                    </h5>
                    <h6 class="widget--subtitle">
                      <span v-html="brochure.description"></span>
                    </h6>
                    <a :href="brochure.download_link" class="widget--brand-color pointer font-small mt-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download mr-1"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                      <strong v-if="english">Download</strong>
                    </a>
                  </div>
                </div>
              </Slide>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import { languageMixin } from '../mixins/language'

export default {
  mixins: [languageMixin],
  computed: {
    ...mapGetters(['experts', 'brochures'])
  },
  created() {
    if (!this.experts.length) {
      this.$store.dispatch('getExperts')
    }
    if (!this.brochures.length) {
      this.$store.dispatch('getBrochures')
    }
  }
}
</script>

<style lang="scss" scoped>
.agile {
  &__dots {
    bottom: 0;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  }

  &__dot {
    button {
      background-color: transparent;
      border: 1px solid #fff;

      &:hover {
        background-color: #fff;
      }
    }

    &--current {
      button {
        background-color: #fff;
      }
    }
  }

  &__arrow {
    height: 100%;
    top: 0;
    width: 80px;

    &:hover {
      background-color: rgba(#000, .5);

      #arrow-svg {
        fill: #fff;
      }
    }

    &[disabled] {
      display: none;
    }

    #arrow-svg {
      fill: rgba(#fff, .4);
      height: 25px;
    }
  }
}

</style>
