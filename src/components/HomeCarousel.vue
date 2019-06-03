<template lang="html">
  <div class="home-carousel">
    <carousel :perPage="1" :autoplay="true" :autoplayHoverPause="true" :autoplayTimeout="7000" paginationActiveColor="#CF9405" class="container px-0">
      <!-- Intro -->
      <slide v-for="carousel in carousels" :key="carousel.title_en" class="col-xs-12">
        <div class="row my-carousel">
          <!-- Images -->
          <div class="col-xs-12 col-sm-5 col-md-6 widget--carousel-image">
            <img src="../assets/homepage.jpg" alt="" class="widget--header-img" v-if="carousel.main">
            <img :data-src="carousel.image" alt="" class="lazyload widget--header-img" v-if="!carousel.main && carousel.image">
            <div class="widget--header-img-placeholder d-flex flex-row align-items-center justify-content-center" v-if="!carousel.main && !carousel.image">
              <img src="../assets/logo-white.png" alt="">
            </div>
          </div>
          <div class="col-xs-12 col-sm-7 col-md-6 widget--home-office widget--home-overview">
            <div class="py-1 py-md-3 px-2 px-md-4" v-if="carousel.main">
              <div class="mb-3">
                <h1 class="mb-5 widget--brand-color"><strong>{{carousel.title_en}}</strong></h1>
                <p>
                  <span v-if="english">{{carousel.subtitle_en}}</span>
                  <span v-if="french">{{carousel.subtitle_fr}}</span>
                </p>
              </div>
              <div class="my-5">
                <router-link tag="a" type="button" class="btn widget--brand widget--radius-link mr-4 mb-2 mb-md-0" :to="carousel.url">
                  <i class="fa fa-angle-right mr-2" aria-hidden="true"></i>
                  <span v-if="english">Read more</span>
                  <span v-if="french">En savoir plus</span>
                </router-link>
                <a type="button" :href="carousel.download_en" download class="btn widget--brand widget--radius-link" v-if="english">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  Download brochure
                </a>
                <a type="button" :href="carousel.download_fr" download class="btn widget--brand widget--radius-link" v-if="french">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  Télécharger la brochure
                </a>
              </div>
            </div>
            <div class="py-1 py-md-3 px-2 px-md-4" v-if="!carousel.main">
              <div class="mb-3">
                <h1 class="mb-5 widget--brand-color" @click="goto({url: carousel.url, data: carousel})">
                  <strong v-if="english">{{carousel.title_en}}</strong>
                  <strong v-if="french">{{carousel.title_fr}}</strong>
                </h1>
                <p>
                  <span v-if="english">{{carousel.body_en}}</span>
                  <span v-if="french">{{carousel.body_fr}}</span>
                </p>
              </div>
              <div class="my-5 pb-4">
                <router-link tag="a" type="button" class="btn widget--brand widget--radius-link mr-4 mb-2 mb-md-0" :to="carousel.url">
                  <i class="fa fa-angle-right mr-2" aria-hidden="true"></i>
                  <span v-if="english">Read more</span>
                  <span v-if="french">En savoir plus</span>
                </router-link>
                <a type="button" :href="carousel.download_en" download class="btn widget--brand widget--radius-link" v-if="english">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  Download brochure
                </a>
                <a type="button" :href="carousel.download_fr" download class="btn widget--brand widget--radius-link" v-if="french">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  Télécharger la brochure
                </a>
              </div>
            </div>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import { languageMixin } from '../mixins/language'

export default {
  mixins: [languageMixin],
  data: () => ({
    carousels: [
      // Intro
      {
        main: true,
        title_en: 'Emery Mukendi Wafwana & Associates',
        subtitle_en: 'The African International law firm that safely takes you into Africa.',
        subtitle_fr: 'Le cabinet d\'avocats international qui vous accompagne en Afrique en toute sécurité.',
        // link: '/about/overview',
        download_en: "http://www.cabemery.org/wp-content/uploads/EMW-A-Law-Firm.pdf",
        download_fr: "http://www.cabemery.org/wp-content/uploads/EMWA_Secteurs_dactivités.pdf",
        image: `/uploads/4cd96899c9464e38abfd4f8ee80d5b52.jpg`,
        url: '/about/sommaire?id=9gSnHA8d7VTbtYOg7SqL'
      },
      // Natural ressources
      {
        main: false,
        title_en: 'Natural resources',
        title_fr: 'Ressources naturelles',
        body_en: 'Our Lawyers and consultants possess valuable experience and have a perfect knowledge of the legal regimes and systems operational in the jurisdictions wherein they are authorized to practice. They handle questions and offer creative solutions to legal challenges relating to mining law, hydrocarbon law, forestry law, agriculture law, environmental law and hydraulic resources law.',
        body_fr: 'Les avocats et consultants de notre firme possèdent une parfaite connaissance et font preuve d’une bonne maitrise, dans leurs juridictions de pratique, des questions et défis juridiques se rapportant aux droit minier, droit des hydrocarbures, droit forestier, droit agricole, droit de l’environnement et droit des ressources hydrauliques.',
        // link: '/about/overview',
        download_en: "http://www.cabemery.org/wp-content/uploads/EMW-A-Law-Firm.pdf",
        download_fr: "http://www.cabemery.org/wp-content/uploads/La-pratique-du-droit-minier-en-Afrique.pdf",
        image: "http://www.cabemery.org/wp-content/uploads/Ressources_Naturelles_5-e1541779144174.jpeg",
        url: '/practice-areas/ressources-naturelles?id=4TA3jNnrCb3cTY52dfAV'
      },
      // Energy & Infrastructure
      {
        main: false,
        title_en: 'Energy & Infrastructure',
        title_fr: 'Energie & Infrastructure',
        body_en: 'In their jurisdictions of practice, our lawyers and consultants actively advice and assist clients in matters concerning land and real estate law, telecommunications and IT law, energy law and transportation law.',
        body_fr: 'Dans leurs juridictions de pratique, nos avocats et consultants interviennent activement dans les matières se rapportant au droit foncier et immobilier, droit des télécommunications et TIC, droit de l’énergie et droit de transport.',
        // link: '/about/overview',
        download_en: "http://www.cabemery.org/wp-content/uploads/EMW-A_-Oil-Gas-Energy-and-Infrastructure-Practice.pdf",
        download_fr: "http://www.cabemery.org/wp-content/uploads/EMWA_Secteurs_dactivités.pdf",
        image: "http://www.cabemery.org/wp-content/uploads/shutterstock_570200689-min-e1543517907391.jpg",
        url: '/practice-areas/energie-et-infrastructures?id=Ps0fhObsSVwp73d1DxgA'
      },
      // Bank, Insurance & Investments
      {
        main: false,
        title_en: 'Bank, Insurance & Investments',
        title_fr: 'Banque, Assurance & Investissements',
        body_en: 'As a team, we remain up to date and are highly watchful as to the constant changes in the legal and regulatory frameworks in these sectors to effectively and efficiently provide best suited legal advice to Investors, Financial Institutions and Insurance Companies. We also monitor   regulatory currency exchange.',
        body_fr: 'Notre équipe Banque, assurance et investissements suit avec diligence les changements constants des cadres légaux et règlementaires de ces secteurs. Elle fournit des services adaptés et répondant aux besoins de nos clients relativement au droit bancaire, au droit des assurances et à la réglementation de change.',
        // link: '/about/overview',
        download_en: "http://www.cabemery.org/wp-content/uploads/EMW-A-_Banking-Investment-Insurance_mail_Nov-18.pdf",
        download_fr: "http://www.cabemery.org/wp-content/uploads/Banque-Investissement-Assurance_Print.pdf",
        image: "http://www.cabemery.org/wp-content/uploads/shutterstock_574713295-min-e1543517950962.jpg",
        url: '/practice-areas/banque-assurance-et-investissements?id=lRuC4DWWpVfNSl3XMjPu'
      },
      // Commerce & Indrustry
      {
        main: false,
        title_en: 'Commerce & Indrustry',
        title_fr: 'Commerce & Indrustrie',
        body_en: 'The primary focus and permanent goal of our lawyers, jurists and consultants is to have an updated insight of the constant evolution of the legislations, regulations and jurisprudence operational under business law notably general commercial law, company law, intellectual property law, community law, surety law, tax law, commercial contracts, procurement law, etc.',
        body_fr: 'Le souci permanent de nos avocats, jurisconsultes et consultants est d’être à jour avec l’évolution de la législation, la règlementation et la jurisprudence touchant au droit des affaires, incluant notamment le droit commercial général, le droit des sociétés, le droit de la propriété intellectuelle, le droit social, le droit des sûretés, le droit fiscal, les contrats commerciaux, le droit des marchés publics.',
        // link: '/about/overview',
        download_en: "http://www.cabemery.org/wp-content/uploads/EMW-A-Law-Firm.pdf",
        download_fr: "http://www.cabemery.org/wp-content/uploads/EMWA_Secteurs_dactivités.pdf",
        image: "http://www.cabemery.org/wp-content/uploads/shutterstock_526625740-min.jpg",
        url: '/practice-areas/commerce-et-industrie?id=Bx2k9BvibnJx8AuUG8i7'
      },
      // Family & Persons
      {
        main: false,
        title_en: 'Family & Persons',
        title_fr: 'Famille & Personnes',
        body_en: 'Our lawyers specialize in family law assist and advise our clients in the procedure concerning the acquisition or loss of nationality, name change or modification, cancellation of name, obtaining of civil status deeds or supplemental judgment in the event of delayed declaration of acts related to civil status, guardianship of minors, delegation of parental authority, divorce, filiation, adoption and succession as well as estate duties.',
        body_fr: "Nos avocats spécialistes en droit de la famille assistent et conseillent nos clients dans les procédures d'acquisition ou des pertes de nationalité, de changement, de modification ou de radiation de nom, d'obtention d'actes d'état civil ou de jugements supplétifs en cas de déclaration tardive des actes d'état civil, de tutelle des mineures, de délégation de l'autorité parentale, de divorce, de filiation, d'adoption et de succession et de libéralités.",
        // link: '/about/overview',
        download_en: "http://www.cabemery.org/wp-content/uploads/EMW-A-Law-Firm.pdf",
        download_fr: "http://www.cabemery.org/wp-content/uploads/EMWA_Secteurs_dactivités.pdf",
        image: "https://www.cabemery.org/fr/wp-content/uploads/family2-e1480031411152.jpg",
        url: '/practice-areas/famille-et-personnes?id=PQN7nLmVfThteKg7QjbT'
      },
      // Litigation, Mediation & Arbitration
      {
        main: false,
        title_en: 'Litigation, Mediation & Arbitration',
        title_fr: 'Contentieux, Médiation & Arbitrage',
        body_en: 'Our team of lawyers are highly experienced, diligent, creative and proactive in dealing with national and international disputes resolution as well as matters concerning complex commercial contractual arbitration and mediation. We are highly skilled in delivering creative solutions in handling such matters presented by our clients.',
        body_fr: 'Nos avocats sont expérimentés, diligents et proactifs dans la gestion des contentieux nationaux et internationaux, ainsi que dans l’arbitrage commercial et d’investissements. Ils ont la capacité d’adaptation aux attentes des clients suivant l’évolution des contentieux en cause.',
        // link: '/about/overview',
        download_en: "http://www.cabemery.org/wp-content/uploads/EMW-A-_Litigation-Brochure-_Mail.pdf",
        download_fr: "http://www.cabemery.org/wp-content/uploads/EMW-A-_-La-pratique-du-contentieux.pdf",
        image: "http://www.cabemery.org/wp-content/uploads/shutterstock_135048374-e1545052044304.jpg",
        url: '/services/contentieux-mediation-et-arbitrage?id=78JXJ1f4O2gzXP5UPNdL'
        // image: "http://www.cabemery.org/wp-content/uploads/shutterstock_1107036797-e1543517880360.jpg"
      },
    ]
  }),
  methods: {
    goto() {

    }
  }
}
</script>

<style lang="scss" scoped>
.separator {
  height: 5px;
  width: 70px;
  background: #CF9405!important;
  border-radius: 25px;
  margin: 8px 0;
}
.my-carousel {
  height: 400px;
}
@media only screen and (max-width: 768px) {
  .my-carousel {
    height: 100%;
  }
}
</style>
