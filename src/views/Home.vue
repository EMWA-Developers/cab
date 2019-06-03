<template>
  <div class="home">
    <header>
      <home-carousel />
    </header>

    <!-- Section 1 -->
    <div class="w3-padding-32">
      <section class="container secondary--background rounded">
        <div class="row">
          <!-- About -->
          <div class="col-xs-12 col-sm-6 col-md-4 widget--about">
            <div class="pb-4">
              <h3 class="mb-4 text-uppercase">
                <strong v-if="french">À PROPOS DE NOUS</strong>
                <strong v-if="english">About us</strong>
              </h3>
              <p class="mb-3">
                <span v-if="english">For more than 20 years, Emery Mukendi Wafwana & Associates (EMW&A) has maintained its position as a leading African international law firm of reference, with recognized experience in business law, litigation and arbitration. We offer our clients services that are in line with international standards. We have proven experience in the sectors of natural resources, energy and infrastructure, investments, commerce and industry, banking, finance and insurance as well as family and people.</span>
                <!--  -->
                <span v-if="french">Depuis plus de 20 ans, Emery Mukendi Wafwana & Associates (EMW&A) maintient sa position de cabinet international africain de premier plan avec une pratique reconnue en droit des affaires et en droit minier. Nous offrons à nos clients des services conformes aux meilleurs standards internationaux, avec une expertise solidement établi dans les secteurs ci-après : ressources naturelles ; énergie et infrastructures; investissement, commerce et industrie; banques, finances et assurances ; famille et personnes.</span>
              </p>
              <router-link tag="button" to="/about/sommaire?id=9gSnHA8d7VTbtYOg7SqL" type="button" class="btn widget--brand widget--radius-link mt-3">
                <span v-if="english">Read more</span>
                <span v-if="french">Lire plus</span>
              </router-link>
            </div>
          </div>
          <!-- Presence -->
          <div class="col-xs-12 col-sm-6 col-md-5 px-5">
            <h3 class="mb-5 text-uppercase">
              <strong v-if="french">NOS BUREAUX</strong>
              <strong v-if="english">Our offices</strong>
            </h3>
            <div class="row">
              <div class="col-xs-12 col-md-6">
                <ul class="list-unstyled">
                  <li class="d-flex flex-row align-items-center justify-content-between">
                    <div>
                      <router-link tag="a" to="/presence/new-york?id=7UTyhAgMtAfJXUdpK5Jn" class="widget--hover-brand-color"><strong>NEW YORK</strong></router-link>
                      <h6 class="widget--subtitle mt-1">USA</h6>
                    </div>
                    <router-link tag="a" to="/presence/new-york?id=7UTyhAgMtAfJXUdpK5Jn">
                      <svg aria-hidden="true" focusable="false" width="16px" height="16px" fill="currentColor" viewBox="0 0 36 36" class="widget--hover-brand-color widget--arrow"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.2354 2H24.2711L36 18L24.2711 34H18.2354L28.1237 20.56H0V15.44H28.1237L18.2354 2Z" fill="currentColor"></path></svg>
                    </router-link>
                  </li>
                  <li class="d-flex flex-row align-items-center justify-content-between">
                    <div>
                      <router-link tag="a" to="/presence/johannesburg?id=OxLjMkIK2jt9FnrieBe5" class="widget--hover-brand-color">
                        <strong>JOHANNESBURG</strong>
                      </router-link>
                      <h6 class="widget--subtitle mt-1 text-uppercase">
                        <span v-if="english">South Africa</span>
                        <span v-if="french">Afrique du sud</span>
                      </h6>
                    </div>
                    <router-link tag="a" to="/presence/johannesburg?id=OxLjMkIK2jt9FnrieBe5">
                      <svg aria-hidden="true" focusable="false" width="16px" height="16px" fill="currentColor" viewBox="0 0 36 36" class="widget--hover-brand-color widget--arrow"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.2354 2H24.2711L36 18L24.2711 34H18.2354L28.1237 20.56H0V15.44H28.1237L18.2354 2Z" fill="currentColor"></path></svg>
                    </router-link>
                  </li>
                  <li class="d-flex flex-row align-items-center justify-content-between">
                    <div>
                      <router-link tag="a" to="/presence/kinshasa?id=Y24oM4xWUFCXkSn28bLQ" class="widget--hover-brand-color"><strong>KINSHASA</strong></router-link>
                      <h6 class="widget--subtitle mt-1">
                        <span v-if="english">DRC</span>
                        <span v-if="french">RDC</span>
                      </h6>
                    </div>
                    <router-link tag="a" to="/presence/kinshasa?id=Y24oM4xWUFCXkSn28bLQ">
                      <svg aria-hidden="true" focusable="false" width="16px" height="16px" fill="currentColor" viewBox="0 0 36 36" class="widget--hover-brand-color widget--arrow"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.2354 2H24.2711L36 18L24.2711 34H18.2354L28.1237 20.56H0V15.44H28.1237L18.2354 2Z" fill="currentColor"></path></svg>
                    </router-link>
                  </li>
                </ul>
              </div>
              <div class="col-xs-12 col-md-6">
                <ul class="list-unstyled">
                  <li class="d-flex flex-row align-items-center justify-content-between">
                    <div>
                      <router-link tag="a" to="/presence/brazzaville?id=NNu6yAps1K5VqRzNgKNO" class="widget--hover-brand-color"><strong>BRAZZAVILLE</strong></router-link>
                      <h6 class="widget--subtitle mt-1">CONGO BRAZZA</h6>
                    </div>
                    <router-link tag="a" to="/presence/brazzaville?id=NNu6yAps1K5VqRzNgKNO">
                      <svg aria-hidden="true" focusable="false" width="16px" height="16px" fill="currentColor" viewBox="0 0 36 36" class="widget--hover-brand-color widget--arrow"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.2354 2H24.2711L36 18L24.2711 34H18.2354L28.1237 20.56H0V15.44H28.1237L18.2354 2Z" fill="currentColor"></path></svg>
                    </router-link>
                  </li>
                  <li class="d-flex flex-row align-items-center justify-content-between">
                    <div>
                      <router-link tag="a" to="/presence/lubumbashi?id=YOE3PwdXzHvYzeuEUaK6" class="widget--hover-brand-color"><strong>LUBUMBASHI</strong></router-link>
                      <h6 class="widget--subtitle mt-1">
                        <span v-if="english">DRC</span>
                        <span v-if="french">RDC</span>
                      </h6>
                    </div>
                    <router-link tag="a" to="/presence/lubumbashi?id=YOE3PwdXzHvYzeuEUaK6">
                      <svg aria-hidden="true" focusable="false" width="16px" height="16px" fill="currentColor" viewBox="0 0 36 36" class="widget--hover-brand-color widget--arrow"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.2354 2H24.2711L36 18L24.2711 34H18.2354L28.1237 20.56H0V15.44H28.1237L18.2354 2Z" fill="currentColor"></path></svg>
                    </router-link>
                  </li>
                  <li class="d-flex flex-row align-items-center justify-content-between">
                    <div>
                      <router-link tag="a" to="/presence/matadi?id=sfjAAmbmNe3tXMglt0eQ" class="widget--hover-brand-color"><strong>MATADI</strong></router-link>
                      <h6 class="widget--subtitle mt-1">
                        <span v-if="english">DRC</span>
                        <span v-if="french">RDC</span>
                      </h6>
                    </div>
                    <router-link tag="a" to="/presence/matadi?id=sfjAAmbmNe3tXMglt0eQ">
                      <svg aria-hidden="true" focusable="false" width="16px" height="16px" fill="currentColor" viewBox="0 0 36 36" class="widget--hover-brand-color widget--arrow"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.2354 2H24.2711L36 18L24.2711 34H18.2354L28.1237 20.56H0V15.44H28.1237L18.2354 2Z" fill="currentColor"></path></svg>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- News -->
          <div class="col-xs-12 col-sm-6 col-md-3">
            <h3 class="mb-5 text-uppercase">
              <strong v-if="french">ACTUALITÉS</strong>
              <strong v-if="english">News</strong>
            </h3>
            <Alaune />
          </div>
        </div>
      </section>
    </div>

    <!-- Section 2 -->
    <section class="primary--background w3-padding-48 mt-5">
      <div class="container">
        <div class="row">
          <!-- Alliance and Sponsor -->
          <div class="col-xs-12 col-md-8">
            <div class="row">
              <div class="col-xs-12 col-sm-6">
                <div class="row pr-md-4">
                  <!-- Member of -->
                  <div class="col-xs-12 secondary--background w3-round widget--box">
                    <!-- <i class="fa fa-legal widget--background-image" aria-hidden="true"></i> -->
                    <h4 class="widget--zindex text-uppercase">
                      <strong v-if="english">Member of the alliance</strong>
                      <strong v-if="french">Membre de l'alliance</strong>
                    </h4>
                    <a href="https://www.lexafrica.com" target="_blank" class="w3-center">
                      <img data-src="http://www.cabemery.org/wp-content/uploads/LEXAFRICA-LOGO-MEMBER.png" alt="" class="widget--box-logo lazyload">
                    </a>
                  </div>
                  <!-- Ranked on -->
                  <div class="col-xs-12 secondary--background w3-round widget--box mt-4">
                    <!-- <i class="fa fa-legal widget--background-image" aria-hidden="true"></i> -->
                    <h4 class="widget--zindex text-uppercase">
                      <strong v-if="english">Ranked in band 1 by</strong>
                      <strong v-if="french">Référencé Band 1 sur</strong>
                    </h4>
                    <a href=" https://chambers.com/profile/department/114685?publicationTypeId=2&practiceAreaId=852&locationId=63&subsectionTypeId=1" target="_blank" class="w3-center">
                     <img data-src="https://assets.chambers.com/logo/chambers_blue.svg?ts=20180821" alt="" class="widget--box-logo lazyload">
                   </a>
                  </div>
                </div>
              </div>
              <!-- Sponsor of -->
              <div class="col-xs-12 col-sm-6">
                <div class="row pl-md-4">
                  <div class="col-xs-12 secondary--background w3-round widget--box-plus">
                    <!-- <i class="fa fa-trophy widget--background-image widget--background-image-plus" aria-hidden="true"></i> -->
                    <h4 class="widget--zindex text-uppercase mb-5">
                      <strong v-if="english">Sponsor of</strong>
                      <strong v-if="french">Sponsor de</strong>
                    </h4>
                    <p class="my-4">
                      <a href="https://www.juridocs.org" target="_blank">
                         <img src="../assets/juridocs.png" alt="" class="widget--box-logo">
                       </a>
                    </p>
                     <p class="my-4">
                       <a href="https://www.juriafrique.com" target="_blank">
                         <img src="../assets/juriafrique.png" alt="" class="widget--box-logo">
                       </a>
                     </p>
                     <p class="my-4">
                       <a href="https://www.afrilex.com" target="_blank">
                         <img src="../assets/afrilex.png" alt="" class="widget--box-logo">
                       </a>
                     </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Experts -->
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="row mt-4 mt-lg-0 pl-lg-4">
              <div class="col-xs-12 widget--home-experts secondary--background">
                <h3 class="mb-4 text-uppercase">
                  <strong v-if="english">Our experts</strong>
                  <strong v-if="french">Nos experts</strong>
                </h3>
                <div class="widget--card">
                  <Expert />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
// @ is an alias to /src
import HomeCarousel from '@/components/HomeCarousel.vue'
import Alaune from '@/components/Alaune.vue'
import { languageMixin } from '../mixins/language'

export default {
  name: 'home',
  mixins: [languageMixin],
  components: {
    HomeCarousel,
    Alaune
  },
}
</script>
