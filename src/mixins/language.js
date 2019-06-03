import { mapGetters } from 'vuex'

export const languageMixin = {
  computed: {
    ...mapGetters(['language', 'categories', 'experts']),
    english() {
      if (this.language == 'en') {
        return true
      }
      return false
    },
    french() {
      if (this.language == 'fr') {
        return true
      }
      return false
    },
    shareOnTwitterMessage() {
      return this.french ? 'Partager sur Twitter' : 'Share on Twitter'
    },
    shareOnFacebookMessage() {
      return this.french ? 'Partager sur Facebook' : 'Share on Facebook'
    },
    directMessage() {
      return this.french ? 'Message direct' : 'Direct message'
    },
    shareLinkMessage() {
      return this.french ? 'Copier le lien' : 'Copy link'
    },
    printMessage() {
      return this.french ? 'Imprimer la page' : 'Print this page'
    },
  },
  methods: {
    getCategory(categoryId) {
      return this.categories.find(category => category.id == categoryId)
    },
    getAuthor (authorId) {
      return this.experts.find(expert => expert.id == this.id)
    },
    scrollLeft () {
      var elmnt = document.getElementById("widget--more");
      elmnt.scrollLeft += 240;
    },
    scrollRight () {
      var elmnt = document.getElementById("widget--more");
      elmnt.scrollLeft -= 240;
    },
    gotoProfile(id) {
      // console.log(id);
      this.$router.push({
        path: '/profile/' + id,
        query: { id: id }
      })
    },
  },
  created() {
    if (!this.categories.length) {
      this.$store.dispatch('getCategories')
    }
    if (!this.experts.length) {
      this.$store.dispatch('getExperts')
    }
  }
}
