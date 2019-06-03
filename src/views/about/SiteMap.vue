<template lang="html">
  <div class="">
    <!--  -->
    <div class="widget--fantasy">
      <div class="widget--fantasy-title">
        <h1 class="m-0">
          <strong v-if="french">Plan du site</strong>
          <strong v-if="english">Site map</strong>
        </h1>
      </div>
    </div>
    <!--  -->
    <section class="container mt-5">
      <div class="row">
        <div class="col-xs-12 col-md-8 pr-md-5">
          <div class="row">
            <div class="col-xs-12 col-md-6">
              <ul class="list-unstyled">
                <li class="mb-4" v-for="map in maps1" :key="map.title_en">
                  <router-link tag="a" :to="`${map.link}`" class="font-weight-medium d-flex flex-row align-items-center mb-3 widget--hover-brand-color">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="mr-2"><path fill="#008CFF" opacity=".3" d="M7 4h7v10H0V2h7v2zM1 3v1h5V3H1z"/><path fill="#008CFF" fill-rule="evenodd" clip-rule="evenodd" d="M14 14H0l2-7h14l-2 7z"/></svg>
                    <span v-if="english">{{map.title_en}}</span>
                    <span v-if="french">{{map.title_fr}}</span>
                  </router-link>
                  <ul v-if="map.children && map.children.length > 0" class="list-unstyled ml-5">
                    <li v-for="child in map.children" :key="child.title_en" class="mb-3">
                      <router-link tag="a" :to="`${child.link}`" class="d-flex flex-row align-items-center widget--hover-brand-color">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="mr-2"><path fill="#565B73" d="M8.3 1H1v14h12V5.6L8.3 1zM4 10h6v1H4v-1zm0-2h6v1H4V8zm0-2h4v1H4V6z"/></svg>
                        <span v-if="english">{{child.title_en}}</span>
                        <span v-if="french">{{child.title_fr}}</span>
                      </router-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="col-xs-12 col-md-6">
              <ul class="list-unstyled">
                <li class="mb-4" v-for="map in maps2" :key="map.title_en">
                  <router-link tag="a" :to="`${map.link}`" class="font-weight-medium d-flex flex-row align-items-center mb-3 widget--hover-brand-color">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="mr-2"><path fill="#008CFF" opacity=".3" d="M7 4h7v10H0V2h7v2zM1 3v1h5V3H1z"/><path fill="#008CFF" fill-rule="evenodd" clip-rule="evenodd" d="M14 14H0l2-7h14l-2 7z"/></svg>
                    <span v-if="english">{{map.title_en}}</span>
                    <span v-if="french">{{map.title_fr}}</span>
                  </router-link>
                  <ul v-if="map.children && map.children.length > 0" class="list-unstyled ml-5">
                    <li v-for="child in map.children" :key="child.title_en" class="mb-3">
                      <router-link tag="a" :to="`${child.link}`" class="d-flex flex-row align-items-center widget--hover-brand-color">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="mr-2"><path fill="#565B73" d="M8.3 1H1v14h12V5.6L8.3 1zM4 10h6v1H4v-1zm0-2h6v1H4V8zm0-2h4v1H4V6z"/></svg>
                        <span v-if="english">{{child.title_en}}</span>
                        <span v-if="french">{{child.title_fr}}</span>
                      </router-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
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
  data: () => ({
    maps1: [
      {title_en: 'Home', title_fr: 'Accueil', link: '/'},
      {title_en: 'About', title_fr: 'À propos', link: '/', children: [
        {title_en: 'Overview', title_fr: 'Sommaire', link: '/about/overview?id=9gSnHA8d7VTbtYOg7SqL'},
        {title_en: 'Background', title_fr: 'Historique', link: '/about/background?id=zpSPkW0qyMWgyM8wmJX4'},
        {title_en: 'Our vision', title_fr: 'Vision', link: '/about/vision?id=zOfeZnxCG2DzqNIUvbpo'},
      ]},
      {title_en: 'Practice areas', title_fr: 'Secteurs', link: '/', children: [
        {title_en: 'Natural resources', title_fr: 'Ressources naturelles', link: '/practice-areas/natural-resources?id=4TA3jNnrCb3cTY52dfAV'},
        {title_en: 'Energy & Infrastructures', title_fr: 'Energie & Infrastructures', link: '/practice-areas/energy-and-infrastructures?id=Ps0fhObsSVwp73d1DxgA'},
        {title_en: 'Bank, Assurance & Investments', title_fr: 'Banque, Assurance & Investissements', link: '/practice-areas/bank-insurance-and-investments?id=lRuC4DWWpVfNSl3XMjPu'},
        {title_en: 'Trade & Industry', title_fr: 'Commerce & Industrie', link: '/practice-areas/trade-and-industry?id=Bx2k9BvibnJx8AuUG8i7'},
        {title_en: 'Family & Persons', title_fr: 'Famille & Personnes', link: '/practice-areas/family-and-persons?id=PQN7nLmVfThteKg7QjbT'},
      ]},
      {title_en: 'Services', title_fr: 'Services', link: '/', children: [
        {title_en: 'Legal due diligence', title_fr: 'Legal due diligence', link: '/services/legal-due-diligence?id=9lHJ9qChBUfptTq4CT3u'},
        {title_en: 'Mergers & Acquisitions', title_fr: 'Fusions & Acquisitions', link: '/services/mergers-and-acquisitions?id=m9IiJ55svc8xPpiDYYjk'},
        {title_en: 'Commercial contracts', title_fr: 'Contrats commerciaux', link: '/services/commercial-contracts?id=RmS235lqUWa2YDOuSN0J'},
        {title_en: 'Corporate restructuring', title_fr: 'Restructuration des entreprises', link: '/services/corporate-restructuring?id=xTIYn374xjZ7Fbffqg43'},
        {title_en: 'Trademark protection', title_fr: 'Protection de marque', link: '/services/trademark-protection?id=6jRsPrXGpATBucPJSAHc'},
        {title_en: 'Project finance', title_fr: 'Project finance', link: '/services/project-finance?id=di9ol4E8AmmXouYBIwTk'},
        {title_en: 'Legislative & Reglementory Reforms', title_fr: 'Réformes législatives & réglementaires', link: '/services/legislative-and-regulatory-reforms?id=f0tug2lIJE2PwVljDtrj'},
        {title_en: 'Litigation, Mediation & Arbitration', title_fr: 'Contentieux, Médiation & Arbitrage', link: '/services/litigation-mediation-and-arbitration?id=78JXJ1f4O2gzXP5UPNdL'},
      ]},
    ],
    maps2: [
      {title_en: 'Presence', title_fr: 'Présence', link: '/', children: [
        {title_en: 'New York, USA', title_fr: 'New York, USA', link: '/presence/new-york?id=7UTyhAgMtAfJXUdpK5Jn'},
        {title_en: 'Johannesburg, SA', title_fr: 'Johannesburg, RSA', link: '/presence/johannesburg?id=OxLjMkIK2jt9FnrieBe5'},
        {title_en: 'Kinshasa, DRC', title_fr: 'Kinshasa, RDC', link: '/presence/kinshasa?id=Y24oM4xWUFCXkSn28bLQ'},
        {title_en: 'Brazzaville, Congo', title_fr: 'Brazzaville, Congo', link: '/presence/brazzaville?id=NNu6yAps1K5VqRzNgKNO'},
        {title_en: 'Lubumbashi, DRC', title_fr: 'Lubumbashi, RDC', link: '/presence/lubumbashi?id=YOE3PwdXzHvYzeuEUaK6'},
        {title_en: 'Matadi, DRC', title_fr: 'Matadi, RDC', link: '/presence/matadi?id=sfjAAmbmNe3tXMglt0eQ'},
      ]},
      {title_en: 'News & Publications', title_fr: 'Actualités & Publications', link: '/', children: [
        {title_en: 'News', title_fr: 'Actualités', link: '/news'},
        {title_en: 'Alerts', title_fr: 'Alertes', link: '/alerts'},
        {title_en: 'Publications', title_fr: 'Publications', link: '/publications'},
        {title_en: 'Events', title_fr: 'Evénements', link: '/events'},
        {title_en: 'Multimedia', title_fr: 'Multimédia', link: '/multimedia'},
        {title_en: 'Webinars', title_fr: 'Webinaires', link: '/webinars'},
      ]},
      {title_en: 'Contact us', title_fr: 'Nous contacter', link: '/contact-us'},
      {title_en: 'Legal notice', title_fr: "Mention légale", link: '/legal-notice'},
      {title_en: 'Subscribe to the newsletter', title_fr: "S'abonner à la newsletter", link: '/newsletter'},
    ]
  })
}
</script>

<style lang="css">
</style>
