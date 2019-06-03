import Vue from 'vue'
import Vuex from 'vuex'
import {db} from './main'
import _ from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countryList: [
      {"name": "Afghanistan", "code": "AF"},
      {"name": "land Islands", "code": "AX"},
      {"name": "Albania", "code": "AL"},
      {"name": "Algeria", "code": "DZ"},
      {"name": "American Samoa", "code": "AS"},
      {"name": "AndorrA", "code": "AD"},
      {"name": "Angola", "code": "AO"},
      {"name": "Anguilla", "code": "AI"},
      {"name": "Antarctica", "code": "AQ"},
      {"name": "Antigua and Barbuda", "code": "AG"},
      {"name": "Argentina", "code": "AR"},
      {"name": "Armenia", "code": "AM"},
      {"name": "Aruba", "code": "AW"},
      {"name": "Australia", "code": "AU"},
      {"name": "Austria", "code": "AT"},
      {"name": "Azerbaijan", "code": "AZ"},
      {"name": "Bahamas", "code": "BS"},
      {"name": "Bahrain", "code": "BH"},
      {"name": "Bangladesh", "code": "BD"},
      {"name": "Barbados", "code": "BB"},
      {"name": "Belarus", "code": "BY"},
      {"name": "Belgium", "code": "BE"},
      {"name": "Belize", "code": "BZ"},
      {"name": "Benin", "code": "BJ"},
      {"name": "Bermuda", "code": "BM"},
      {"name": "Bhutan", "code": "BT"},
      {"name": "Bolivia", "code": "BO"},
      {"name": "Bosnia and Herzegovina", "code": "BA"},
      {"name": "Botswana", "code": "BW"},
      {"name": "Bouvet Island", "code": "BV"},
      {"name": "Brazil", "code": "BR"},
      {"name": "British Indian Ocean Territory", "code": "IO"},
      {"name": "Brunei Darussalam", "code": "BN"},
      {"name": "Bulgaria", "code": "BG"},
      {"name": "Burkina Faso", "code": "BF"},
      {"name": "Burundi", "code": "BI"},
      {"name": "Cambodia", "code": "KH"},
      {"name": "Cameroon", "code": "CM"},
      {"name": "Canada", "code": "CA"},
      {"name": "Cape Verde", "code": "CV"},
      {"name": "Cayman Islands", "code": "KY"},
      {"name": "Central African Republic", "code": "CF"},
      {"name": "Chad", "code": "TD"},
      {"name": "Chile", "code": "CL"},
      {"name": "China", "code": "CN"},
      {"name": "Christmas Island", "code": "CX"},
      {"name": "Cocos (Keeling) Islands", "code": "CC"},
      {"name": "Colombia", "code": "CO"},
      {"name": "Comoros", "code": "KM"},
      {"name": "Congo", "code": "CG"},
      {"name": "Congo, The Democratic Republic of the", "code": "CD"},
      {"name": "Cook Islands", "code": "CK"},
      {"name": "Costa Rica", "code": "CR"},
      {"name": "Cote d'Ivoire", "code": "CI"},
      {"name": "Croatia", "code": "HR"},
      {"name": "Cuba", "code": "CU"},
      {"name": "Cyprus", "code": "CY"},
      {"name": "Czech Republic", "code": "CZ"},
      {"name": "Denmark", "code": "DK"},
      {"name": "Djibouti", "code": "DJ"},
      {"name": "Dominica", "code": "DM"},
      {"name": "Dominican Republic", "code": "DO"},
      {"name": "Ecuador", "code": "EC"},
      {"name": "Egypt", "code": "EG"},
      {"name": "El Salvador", "code": "SV"},
      {"name": "Equatorial Guinea", "code": "GQ"},
      {"name": "Eritrea", "code": "ER"},
      {"name": "Estonia", "code": "EE"},
      {"name": "Ethiopia", "code": "ET"},
      {"name": "Falkland Islands (Malvinas)", "code": "FK"},
      {"name": "Faroe Islands", "code": "FO"},
      {"name": "Fiji", "code": "FJ"},
      {"name": "Finland", "code": "FI"},
      {"name": "France", "code": "FR"},
      {"name": "French Guiana", "code": "GF"},
      {"name": "French Polynesia", "code": "PF"},
      {"name": "French Southern Territories", "code": "TF"},
      {"name": "Gabon", "code": "GA"},
      {"name": "Gambia", "code": "GM"},
      {"name": "Georgia", "code": "GE"},
      {"name": "Germany", "code": "DE"},
      {"name": "Ghana", "code": "GH"},
      {"name": "Gibraltar", "code": "GI"},
      {"name": "Greece", "code": "GR"},
      {"name": "Greenland", "code": "GL"},
      {"name": "Grenada", "code": "GD"},
      {"name": "Guadeloupe", "code": "GP"},
      {"name": "Guam", "code": "GU"},
      {"name": "Guatemala", "code": "GT"},
      {"name": "Guernsey", "code": "GG"},
      {"name": "Guinea", "code": "GN"},
      {"name": "Guinea-Bissau", "code": "GW"},
      {"name": "Guyana", "code": "GY"},
      {"name": "Haiti", "code": "HT"},
      {"name": "Heard Island and Mcdonald Islands", "code": "HM"},
      {"name": "Holy See (Vatican City State)", "code": "VA"},
      {"name": "Honduras", "code": "HN"},
      {"name": "Hong Kong", "code": "HK"},
      {"name": "Hungary", "code": "HU"},
      {"name": "Iceland", "code": "IS"},
      {"name": "India", "code": "IN"},
      {"name": "Indonesia", "code": "ID"},
      {"name": "Iran, Islamic Republic Of", "code": "IR"},
      {"name": "Iraq", "code": "IQ"},
      {"name": "Ireland", "code": "IE"},
      {"name": "Isle of Man", "code": "IM"},
      {"name": "Israel", "code": "IL"},
      {"name": "Italy", "code": "IT"},
      {"name": "Jamaica", "code": "JM"},
      {"name": "Japan", "code": "JP"},
      {"name": "Jersey", "code": "JE"},
      {"name": "Jordan", "code": "JO"},
      {"name": "Kazakhstan", "code": "KZ"},
      {"name": "Kenya", "code": "KE"},
      {"name": "Kiribati", "code": "KI"},
      {"name": "Korea, Democratic People's Republic of", "code": "KP"},
      {"name": "Korea, Republic of", "code": "KR"},
      {"name": "Kuwait", "code": "KW"},
      {"name": "Kyrgyzstan", "code": "KG"},
      {"name": "Lao People's Democratic Republic", "code": "LA"},
      {"name": "Latvia", "code": "LV"},
      {"name": "Lebanon", "code": "LB"},
      {"name": "Lesotho", "code": "LS"},
      {"name": "Liberia", "code": "LR"},
      {"name": "Libyan Arab Jamahiriya", "code": "LY"},
      {"name": "Liechtenstein", "code": "LI"},
      {"name": "Lithuania", "code": "LT"},
      {"name": "Luxembourg", "code": "LU"},
      {"name": "Macao", "code": "MO"},
      {"name": "Macedonia, The Former Yugoslav Republic of", "code": "MK"},
      {"name": "Madagascar", "code": "MG"},
      {"name": "Malawi", "code": "MW"},
      {"name": "Malaysia", "code": "MY"},
      {"name": "Maldives", "code": "MV"},
      {"name": "Mali", "code": "ML"},
      {"name": "Malta", "code": "MT"},
      {"name": "Marshall Islands", "code": "MH"},
      {"name": "Martinique", "code": "MQ"},
      {"name": "Mauritania", "code": "MR"},
      {"name": "Mauritius", "code": "MU"},
      {"name": "Mayotte", "code": "YT"},
      {"name": "Mexico", "code": "MX"},
      {"name": "Micronesia, Federated States of", "code": "FM"},
      {"name": "Moldova, Republic of", "code": "MD"},
      {"name": "Monaco", "code": "MC"},
      {"name": "Mongolia", "code": "MN"},
      {"name": "Montenegro", "code": "ME"},
      {"name": "Montserrat", "code": "MS"},
      {"name": "Morocco", "code": "MA"},
      {"name": "Mozambique", "code": "MZ"},
      {"name": "Myanmar", "code": "MM"},
      {"name": "Namibia", "code": "NA"},
      {"name": "Nauru", "code": "NR"},
      {"name": "Nepal", "code": "NP"},
      {"name": "Netherlands", "code": "NL"},
      {"name": "Netherlands Antilles", "code": "AN"},
      {"name": "New Caledonia", "code": "NC"},
      {"name": "New Zealand", "code": "NZ"},
      {"name": "Nicaragua", "code": "NI"},
      {"name": "Niger", "code": "NE"},
      {"name": "Nigeria", "code": "NG"},
      {"name": "Niue", "code": "NU"},
      {"name": "Norfolk Island", "code": "NF"},
      {"name": "Northern Mariana Islands", "code": "MP"},
      {"name": "Norway", "code": "NO"},
      {"name": "Oman", "code": "OM"},
      {"name": "Pakistan", "code": "PK"},
      {"name": "Palau", "code": "PW"},
      {"name": "Palestinian Territory, Occupied", "code": "PS"},
      {"name": "Panama", "code": "PA"},
      {"name": "Papua New Guinea", "code": "PG"},
      {"name": "Paraguay", "code": "PY"},
      {"name": "Peru", "code": "PE"},
      {"name": "Philippines", "code": "PH"},
      {"name": "Pitcairn", "code": "PN"},
      {"name": "Poland", "code": "PL"},
      {"name": "Portugal", "code": "PT"},
      {"name": "Puerto Rico", "code": "PR"},
      {"name": "Qatar", "code": "QA"},
      {"name": "Reunion", "code": "RE"},
      {"name": "Romania", "code": "RO"},
      {"name": "Russian Federation", "code": "RU"},
      {"name": "Rwanda", "code": "RW"},
      {"name": "Saint Helena", "code": "SH"},
      {"name": "Saint Kitts and Nevis", "code": "KN"},
      {"name": "Saint Lucia", "code": "LC"},
      {"name": "Saint Pierre and Miquelon", "code": "PM"},
      {"name": "Saint Vincent and the Grenadines", "code": "VC"},
      {"name": "Samoa", "code": "WS"},
      {"name": "San Marino", "code": "SM"},
      {"name": "Sao Tome and Principe", "code": "ST"},
      {"name": "Saudi Arabia", "code": "SA"},
      {"name": "Senegal", "code": "SN"},
      {"name": "Serbia", "code": "RS"},
      {"name": "Seychelles", "code": "SC"},
      {"name": "Sierra Leone", "code": "SL"},
      {"name": "Singapore", "code": "SG"},
      {"name": "Slovakia", "code": "SK"},
      {"name": "Slovenia", "code": "SI"},
      {"name": "Solomon Islands", "code": "SB"},
      {"name": "Somalia", "code": "SO"},
      {"name": "South Africa", "code": "ZA"},
      {"name": "South Georgia and the South Sandwich Islands", "code": "GS"},
      {"name": "Spain", "code": "ES"},
      {"name": "Sri Lanka", "code": "LK"},
      {"name": "Sudan", "code": "SD"},
      {"name": "Suriname", "code": "SR"},
      {"name": "Svalbard and Jan Mayen", "code": "SJ"},
      {"name": "Swaziland", "code": "SZ"},
      {"name": "Sweden", "code": "SE"},
      {"name": "Switzerland", "code": "CH"},
      {"name": "Syrian Arab Republic", "code": "SY"},
      {"name": "Taiwan, Province of China", "code": "TW"},
      {"name": "Tajikistan", "code": "TJ"},
      {"name": "Tanzania, United Republic of", "code": "TZ"},
      {"name": "Thailand", "code": "TH"},
      {"name": "Timor-Leste", "code": "TL"},
      {"name": "Togo", "code": "TG"},
      {"name": "Tokelau", "code": "TK"},
      {"name": "Tonga", "code": "TO"},
      {"name": "Trinidad and Tobago", "code": "TT"},
      {"name": "Tunisia", "code": "TN"},
      {"name": "Turkey", "code": "TR"},
      {"name": "Turkmenistan", "code": "TM"},
      {"name": "Turks and Caicos Islands", "code": "TC"},
      {"name": "Tuvalu", "code": "TV"},
      {"name": "Uganda", "code": "UG"},
      {"name": "Ukraine", "code": "UA"},
      {"name": "United Arab Emirates", "code": "AE"},
      {"name": "United Kingdom", "code": "GB"},
      {"name": "United States", "code": "US"},
      {"name": "United States Minor Outlying Islands", "code": "UM"},
      {"name": "Uruguay", "code": "UY"},
      {"name": "Uzbekistan", "code": "UZ"},
      {"name": "Vanuatu", "code": "VU"},
      {"name": "Venezuela", "code": "VE"},
      {"name": "Viet Nam", "code": "VN"},
      {"name": "Virgin Islands, British", "code": "VG"},
      {"name": "Virgin Islands, U.S.", "code": "VI"},
      {"name": "Wallis and Futuna", "code": "WF"},
      {"name": "Western Sahara", "code": "EH"},
      {"name": "Yemen", "code": "YE"},
      {"name": "Zambia", "code": "ZM"},
      {"name": "Zimbabwe", "code": "ZW"}
    ],
    alaune: [],
    loading: false,
    language: 'en',
    homepage: [],
    about: [],
    brochures: [],
    services: [],
    practiceAreas: [],
    presences: [],
    experts: [],
    categories: [],
    newsAndPublications: [],
    multimedia: [],
    webinars: [],
  },
  getters: {
    alaune: (state) => {
      return state.newsAndPublications.filter(news => news.alaune == true)
    },
    countryList: state => state.countryList,
    categories: state => state.categories,
    loading: state => state.loading,
    language: state => state.language,
    homepage: state => state.homepage,
    about: (state) => {
      return _.sortBy(state.about, [function(option) {return option.priority}])
    },
    getAbout: (state) => (id) => state.about.find(single => single.id === id),
    brochures: state => {
      return _.orderBy(state.brochures, [function(brochure) {return brochure.priority}])
    },
    getBrochure: (state) => (id) => state.brochures.find(brochure => brochure.id === id),
    services (state) {
      return _.sortBy(state.services, [function(service) {return service.priority}])
    },
    getService: (state) => (id) => state.services.find(service => service.id === id),
    practiceAreas (state) {
      return _.sortBy(state.practiceAreas, [function(practice) {return practice.priority}])
    },
    getPracticeArea: (state) => (id) => state.practiceAreas.find(practice => practice.id === id),
    presences (state) {
      return _.sortBy(state.presences, [function(presence) {return presence.priority}])
    },
    getPresence: (state) => (id) => state.presences.find(presence => presence.id === id),
    newsAndPublications: (state) => {
      return _.sortBy(state.newsAndPublications, [function(news) {return news.publishedAt}])
    },
    publication: (state) => (id) => state.newsAndPublications.find(publication => publication.id === id),
    webinars: state => state.webinars,
    // getNewsPublication: (state) => (id) => state.newsAndPublications.find(newsPublication => newsPublication.id === id),
    multimedia: state => state.multimedia,
    getMedia: (state) => (id) => state.multimedia.find(media => media.id === id),
    // experts: state => state.experts,
    experts (state) {
      return _.sortBy(state.experts, [function(expert) {return expert.rank_by_grade}])
    },
    expert: (state) => (id) => state.experts.find(expert => expert.id === id),
  },
  mutations: {
    'SET_LOADING': (state, payload) => state.loading = payload,
    'CHANGE_LANGUAGE': (state, payload) => state.language = payload,
    'GET_HOMEPAGE': (state, payload) => state.homepage = payload,
    'GET_BROCHURES': (state, payload) => state.brochures = payload,
    'GET_EXPERTS': (state, payload) => state.experts = payload,
    'GET_ABOUT': (state, payload) => state.about = payload,
    'GET_SERVICES': (state, payload) => state.services = payload,
    'GET_PRACTICEAREAS': (state, payload) => state.practiceAreas = payload,
    'GET_PRESENCES': (state, payload) => state.presences = payload,
    'GET_NEWSANDPUBLICATIONS': (state, payload) => state.newsAndPublications = payload,
    'GET_MULTIMEDIA': (state, payload) => state.multimedia = payload,
    'GET_CATEGORIES': (state, payload) => state.categories = payload,
  },
  actions: {
    getCategories({commit}) {
      commit('SET_LOADING', true)
      db.collection('categories').orderBy('category_fr', 'asc').onSnapshot((snapshot) => {
        let categories = [];
        snapshot.forEach(doc => {
          categories.push({
            id: doc.id,
            ...doc.data()
          })
        })
        commit('SET_LOADING', false)
        commit('GET_CATEGORIES', categories)
      }, (error) => {
        commit('SET_LOADING', false)
          console.error(error)
      })
    },
    getWebinars ({commit}) {

    },
    changeLanguage ({commit}, payload) {
      window.localStorage.setItem('language', payload)
      commit('CHANGE_LANGUAGE', payload)
    },
    getLanguage ({commit}) {
      var payload = window.localStorage.getItem('language')
      commit('CHANGE_LANGUAGE', payload)
    },
    getHomePage ({commit}) {
      commit('SET_LOADING', true)
      db.collection('homepage')
        .onSnapshot((snapshot) => {
          let homepage = [];
          snapshot.forEach(doc => {
            homepage.push({
              id: doc.id,
              ...doc.data()
            })
          })
          commit('GET_HOMEPAGE', homepage)
          commit('SET_LOADING', false)
        }, (error) => {
            console.error(error)
            commit('SET_LOADING', false)
        })
    },
    getBrochures ({commit}) {
      commit('SET_LOADING', true)
      db.collection('brochures')
        .onSnapshot((snapshot) => {
          let brochures = [];
          snapshot.forEach(doc => {
            brochures.push({
              id: doc.id,
              ...doc.data()
            })
          })
          commit('GET_BROCHURES', brochures)
          commit('SET_LOADING', false)
        }, (error) => {
            console.error(error)
            commit('SET_LOADING', false)
        })
    },
    getExperts ({commit}) {
      commit('SET_LOADING', true)
      db.collection('experts').orderBy('name', 'asc')
        .onSnapshot((snapshot) => {
          let experts = [];
          snapshot.forEach(doc => {
            experts.push({
              id: doc.id,
              ...doc.data()
            })
          })
          commit('GET_EXPERTS', experts)
          commit('SET_LOADING', false)
        }, (error) => {
            console.error(error)
            commit('SET_LOADING', false)
        })
    },
    getAbout ({commit}) {
      commit('SET_LOADING', true)
      db.collection('about')
        .onSnapshot((snapshot) => {
          let about = [];
          snapshot.forEach(doc => {
            about.push({
              id: doc.id,
              ...doc.data()
            })
          })
          commit('GET_ABOUT', about)
          commit('SET_LOADING', false)
        }, (error) => {
            console.error(error)
            commit('SET_LOADING', false)
        })
    },
    getServices ({commit}) {
      commit('SET_LOADING', true)
      db.collection('services')
        .onSnapshot((snapshot) => {
          let services = [];
          snapshot.forEach(doc => {
            services.push({
              id: doc.id,
              ...doc.data()
            })
          })
          commit('GET_SERVICES', services)
          commit('SET_LOADING', false)
        }, (error) => {
            console.error(error)
            commit('SET_LOADING', false)
        })
    },
    getPracticeAreas ({commit}) {
      commit('SET_LOADING', true)
      db.collection('sectors')
      // db.collection('practice-areas')
        .onSnapshot((snapshot) => {
          let practiceAreas = [];
          snapshot.forEach(doc => {
            practiceAreas.push({
              id: doc.id,
              ...doc.data()
            })
          })
          commit('GET_PRACTICEAREAS', practiceAreas)
          commit('SET_LOADING', false)
        }, (error) => {
            console.error(error)
            commit('SET_LOADING', false)
        })
    },
    getPresences ({commit}) {
      commit('SET_LOADING', true)
      db.collection('presences')
        .onSnapshot((snapshot) => {
          let presences = [];
          snapshot.forEach(doc => {
            presences.push({
              id: doc.id,
              ...doc.data()
            })
          })
          commit('GET_PRESENCES', presences)
          commit('SET_LOADING', false)
        }, (error) => {
            console.error(error)
            commit('SET_LOADING', false)
        })
    },
    getNewsAndPublications ({commit}) {
      commit('SET_LOADING', true)
      db.collection('news-publications').orderBy('title_fr', 'asc')
        .onSnapshot((snapshot) => {
          let newsAndPublications = [];
          snapshot.forEach(doc => {
            newsAndPublications.push({
              id: doc.id,
              ...doc.data()
            })
          })
          commit('GET_NEWSANDPUBLICATIONS', newsAndPublications)
          commit('SET_LOADING', false)
        }, (error) => {
            console.error(error)
            commit('SET_LOADING', false)
        })
    },
    getMultimedia ({commit}) {
      commit('SET_LOADING', true)
      db.collection('multimedia')
        .onSnapshot((snapshot) => {
          let multimedia = [];
          snapshot.forEach(doc => {
            multimedia.push({
              id: doc.id,
              ...doc.data()
            })
          })
          commit('GET_MULTIMEDIA', multimedia)
          commit('SET_LOADING', false)
        }, (error) => {
            console.error(error)
            commit('SET_LOADING', false)
        })
    },
  }
})
