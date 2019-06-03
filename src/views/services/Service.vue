<template lang="html">
  <div>
    <!--  -->
    <section class="container">
      <Carousel :perPage="1" :autoplay="true" :autoplayTimeout="5000" paginationActiveColor="#CF9405">
        <Slide v-for="image in content.covers" :key="image">
          <div class="my-widget--slide w3-display-container">
            <img src="../../assets/logo-white.png" alt="" class="my-widget--placeholder w3-display-middle">
            <img :data-src="image" alt="" class="my-widget--slide-content lazyload">
          </div>
        </Slide>
      </Carousel>
    </section>

    <!-- Navigation -->
    <section class="container my-3">
      <ul class="nav nav-tabs widget--nav-tabs text-uppercase widget--subtitle font-medium" role="tablist">
        <li role="presentation" class="active">
          <a href="#overview" aria-controls="overview" role="tab" data-toggle="tab">
            <span v-if="french">Sommaire</span>
            <span v-if="english">Overview</span>
          </a>
        </li>
        <li role="presentation">
          <a href="#publications" aria-controls="publications" role="tab" data-toggle="tab">Publications
          </a>
        </li>
        <li role="presentation"><a href="#team" aria-controls="team" role="tab" data-toggle="tab">
          <span class="text-uppercase" v-if="french">équipe</span>
          <span class="text-uppercase" v-if="english">team</span>
        </a></li>
      </ul>
    </section>

    <!--  -->
    <section class="container mt-4">
      <div class="row">
        <div class="col-xs-12 col-md-8 pr-md-5">
          <!-- Tab panes -->
          <div class="tab-content">
            <!-- Overview - Sommaire -->
            <article role="tabpanel" class="tab-pane fade in active" id="overview">
              <h2 class="page-header mt-0">
                <strong v-if="english">{{content.title_en}}</strong>
                <strong v-if="french">{{content.title_fr}}</strong>
              </h2>
              <!-- Content -->
              <p class="text-justify" v-html="content.content_en" v-if="english"></p>
              <p class="text-justify" v-html="content.content_fr" v-if="french"></p>
              <!-- Sub-Content -->
              <p v-if="content.subcontents.length">
                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                  <div class="panel" v-for="(subcontent, i) in content.subcontents" :key="subcontent.title_fr">
                    <div class="panel-heading px-0 my-title" role="tab" :id="`heading${i}`">
                      <h5 class="panel-title mb-2">
                        <a class="collapsed text-uppercase" role="button" data-toggle="collapse" data-parent="#accordion" :href="`#collapse${i}`" aria-expanded="false" :aria-controls="`collapse${i}`">
                          <span v-if="french">{{subcontent.title_fr}}</span>
                          <span v-if="english">{{subcontent.title_en}}</span>
                          <span class="fa fa-angle-down pull-right" aria-hidden="true"></span>
                        </a>
                      </h5>
                    </div>
                    <div :id="`collapse${i}`" class="panel-collapse collapse" role="tabpanel" :aria-labelledby="`heading${i}`">
                      <div class="panel-body px-1 pt-2">
                        <div>
                          <!-- Nav tabs -->
                          <ul class="nav nav-tabs text-uppercase font-weight-medium" role="tablist">
                            <li role="presentation" class="active"><a :href="`#service${i}`" :aria-controls="`service${i}`" role="tab" data-toggle="tab">Services</a></li>
                            <li role="presentation"><a :href="`#transaction${i}`" :aria-controls="`transaction${i}`" role="tab" data-toggle="tab">Transactions</a></li>
                          </ul>
                          <!-- Tab panes -->
                          <div class="tab-content py-4">
                            <div role="tabpanel" class="tab-pane active" :id="`service${i}`">
                              <div class="text-justify" v-html="subcontent.service_en" v-if="english"></div>
                              <div class="text-justify" v-html="subcontent.service_fr" v-if="french"></div>
                            </div>
                            <div role="tabpanel" class="tab-pane" :id="`transaction${i}`">
                              <div class="text-justify" v-html="subcontent.transaction_en" v-if="english"></div>
                              <div class="text-justify" v-html="subcontent.transaction_fr" v-if="french"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </p>
            </article>
            <!-- Publications -->
            <article role="tabpanel" class="tab-pane fade" id="publications">

            </article>
            <!-- Team -->
            <article role="tabpanel" class="tab-pane fade" id="team">
              <div class="row">
                <div class="col-xs-12 col-md-6">
                  <div class="panel panel-default secondary--background widget--presence-experts widget--borderless mb-5" v-for="(expert, i) in publicationExperts" :key="expert.id" @click="gotoProfile(expert.id)" v-if="(i+1) % 2">
                    <div class="panel-body p-3 row">
                    <!-- <div class="panel-body p-2 row" style="min-height: 180px!important"> -->
                      <!-- Picture -->
                      <div class="col-xs-6 col-md-5">
                        <img :data-src="expert.avatar" alt="" class="lazyload w3-round widget--expert-img" v-if="expert.avatar" @click="gotoProfile(expert.id)">
                        <div class="widget--expert-img-placeholder d-flex flex-row align-items-center justify-content-center" v-else>
                          <img src="../../assets/logo-white.png" alt="">
                        </div>
                      </div>
                      <!-- Info -->
                      <div class="col-xs-6 col-md-7 py-1 pl-1 caption main-color">
                        <!-- Name -->
                        <div class="w3-medium widget--title mb-3 widget--hover-brand-color pointer" @click="gotoProfile(expert.id)">{{expert.name}}</div>
                        <div class="font-small widget--subtitle"><i class="fa fa-legal mr-2" aria-hidden="true"></i>
                          <span v-if="french">{{expert.grade_fr}}</span>
                          <span v-if="english">{{expert.grade_en}}</span>
                        </div>
                        <div class="font-small widget--subtitle text-capitalize"><span class="glyphicon glyphicon-map-marker mr-2" aria-hidden="true"></span>
                          {{expert.location_1}} <span v-if="expert.location_2">/ {{expert.location_2}}</span> <span v-if="expert.location_3">/ {{expert.location_3}}</span>
                        </div>
                        <div class="font-small widget--subtitle">
                          <span class="glyphicon glyphicon-earphone mr-2" aria-hidden="true"></span>
                          {{expert.phone_1}} <span v-if="expert.phone_2"> / {{expert.phone_2}}</span> <span v-if="expert.phone_3"> / {{expert.phone_3}}</span>
                        </div>
                        <div class="font-small widget--subtitle"><i class="fa fa-envelope-open-o mr-2" aria-hidden="true"></i> {{expert.email}}</div>
                        <button class="btn btn-sm widget--radius-link mt-4">
                          <span v-if="french">Voir profil</span>
                          <span v-if="english">See profile</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-md-6">
                    <div class="panel panel-default secondary--background widget--presence-experts widget--borderless mb-5" v-for="(expert, i) in publicationExperts" :key="expert.id" @click="gotoProfile(expert.id)" v-if="(i+2) % 2">
                      <div class="panel-body p-3 row">
                        <!-- Picture -->
                        <div class="col-xs-6 col-md-5">
                          <img :data-src="expert.avatar" alt="" class="lazyload w3-round widget--expert-img" v-if="expert.avatar" @click="gotoProfile(expert.id)">
                          <div class="widget--expert-img-placeholder d-flex flex-row align-items-center justify-content-center" v-else>
                            <img src="../../assets/logo-white.png" alt="">
                          </div>
                        </div>
                        <!-- Info -->
                        <div class="col-xs-6 col-md-7 py-1 pl-1 caption main-color">
                          <!-- Name -->
                          <div class="w3-medium widget--title mb-3 widget--hover-brand-color pointer" @click="gotoProfile(expert.id)">{{expert.name}}</div>
                          <div class="font-small widget--subtitle"><i class="fa fa-legal mr-2" aria-hidden="true"></i>
                            <span v-if="french">{{expert.grade_fr}}</span>
                            <span v-if="english">{{expert.grade_en}}</span>
                          </div>
                          <div class="font-small widget--subtitle text-capitalize"><span class="glyphicon glyphicon-map-marker mr-2" aria-hidden="true"></span>
                            {{expert.location_1}} <span v-if="expert.location_2">/ {{expert.location_2}}</span> <span v-if="expert.location_3">/ {{expert.location_3}}</span>
                          </div>
                          <div class="font-small widget--subtitle">
                            <span class="glyphicon glyphicon-earphone mr-2" aria-hidden="true"></span>
                            {{expert.phone_1}} <span v-if="expert.phone_2"> / {{expert.phone_2}}</span> <span v-if="expert.phone_3"> / {{expert.phone_3}}</span>
                          </div>
                          <div class="font-small widget--subtitle"><i class="fa fa-envelope-open-o mr-2" aria-hidden="true"></i> {{expert.email}}</div>
                          <button class="btn btn-sm widget--radius-link mt-4">
                            <span v-if="french">Voir profil</span>
                            <span v-if="english">See profile</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </article>
          </div>
          <!-- Share -->
          <Share :link="$route.fullPath" />
        </div>
        <!-- Sidebar -->
        <div class="col-xs-12 col-md-4">
          <Sidebar />
        </div>
      </div>
    </section>
    <!--  -->

    <!-- Learn more -->
    <section v-if="recommandations.length">
      <div class="container mt-5 mb-3">
        <h4 class="pull-left widget--see-more">
          <span v-if="french">Voir aussi</span>
          <span v-if="english">See more</span>
        </h4>
        <div class="pull-right">
          <a @click="scrollRight" class="widget--hover-brand-color pointer"><i class="fa fa-angle-left mr-4 w3-xxlarge"></i></a>
          <a @click="scrollLeft" class="widget--hover-brand-color pointer"><i class="fa fa-angle-right w3-xxlarge"></i></a>
        </div>
      </div>
      <div class="primary--background">
        <div class="container py-4">
          <div class="d-flex flex-nowrap flex-row align-items-center widget--more" id="widget--more">
            <div class="widget--more-box" v-for="item in recommandations" :key="item.id">
              <div class="widget--more-boxing">
                <h4 class="my-0">
                  <strong v-if="french">{{item.title_fr}}</strong>
                  <strong v-if="english">{{item.title_en}}</strong>
                </h4>
                <button type="button" class="btn widget--brand widget--radius-link mr-4 widget--position" @click="goto({url: '/services', data: item})">
                  <i class="fa fa-angle-right mr-2" aria-hidden="true"></i>
                  <span v-if="french">Lire plus</span>
                  <span v-if="english">Read more</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { languageMixin } from '../../mixins/language'

export default {
  mixins: [languageMixin],
  data: () => ({
    id: null,
    publicationExperts: []
  }),
  computed: {
    ...mapGetters(['services', 'experts']),
    content() {
      return this.$store.getters.getService(this.id)
    },
    recommandations () {
      return this.services.filter(option => option.id != this.content.id)
    },
  },
  watch: {
    '$route' (to, from) {
      return this.id = to.query.id
    },
    content (value) {
      let category_fr = value.title_fr.toLowerCase()
      let category_en = value.title_en.toLowerCase()

      return this.publicationExperts = this.experts.filter(expert => {
        return _.find(expert.categories, (category) => category.toLowerCase() == category_fr) || _.find(expert.categories, (category) => category.toLowerCase() == category_en)
      })
    }
  },
  methods: {
    goto(value) {
      this.$router.push({
        path: this.english ? value.url + value.data.url_en : value.url + value.data.url_fr,
        query: { id: value.data.id }
      })
    },
  },
  created() {
    this.id = this.$route.query.id
    if (!this.experts.length) {
      this.$store.dispatch('getExperts')
    }
  }
}
</script>

<style lang="css">
</style>
