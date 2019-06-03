<template lang="html">
  <div class="">
    <Carousel :perPage="1" :autoplay="true" :autoplayTimeout="4000" :paginationEnabled="false">
      <Slide v-for="expert in experts" :key="expert.id">
        <div class="row">
          <div class="col-xs-5 pr-2">
            <img :data-src="expert.avatar" alt="" class="lazyload w3-round widget--expert-img pointer" v-if="expert.avatar" @click="gotoProfile(expert.id)">
            <div class="widget--expert-img-placeholder d-flex flex-row align-items-center justify-content-center pointer" v-else>
              <img src="../assets/logo-white.png" alt="" @click="gotoProfile(expert.id)">
            </div>
          </div>
          <div class="col-xs-7 pl-2">
            <div class="w3-medium widget--title mb-3 widget--hover-brand-name pointer" @click="gotoProfile(expert.id)">{{expert.name}}</div>
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
            <button class="btn btn-sm widget--radius-link mt-4" @click="gotoProfile(expert.id)">
              <span v-if="french">Voir profil</span>
              <span v-if="english">See profile</span>
            </button>
          </div>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import { languageMixin } from '../mixins/language'

export default {
  mixins: [languageMixin],
  computed: {
    ...mapGetters(['experts'])
  },
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
