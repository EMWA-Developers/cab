<template lang="html">
  <div class="">
    <!--  -->
    <div class="widget--fantasy">
      <div class="widget--fantasy-title">
        <h1 class="m-0">
          <strong v-if="french">Nous contacter</strong>
          <strong v-if="english">Contact us</strong>
        </h1>
      </div>
    </div>
    <!--  -->
    <section class="container mt-5">
      <div class="row">
        <div class="col-xs-12 col-md-8 pr-md-5">
          <form @submit.prevent="onSubmit" class="panel secondary--background widget--card-content widget--borderless" v-if="!messageSent">
            <div class="panel-body p-5">
              <div class="form-group">
                <label for="name">
                  <span v-if="english">Your name (*)</span>
                  <span v-if="french">Votre nom (*)</span>
                </label>
                <input type="text" class="w3-input widget--round-0" id="name" placeholder="" v-model.trim="form.name" required>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">
                  <span v-if="english">Email address (*)</span>
                  <span v-if="french">Adresse email (*)</span>
                </label>
                <input type="email" class="w3-input widget--round-0" id="exampleInputEmail1" placeholder="" v-model.trim="form.email" required>
              </div>
              <div class="form-group">
                <label for="phone">
                  <span v-if="english">Phone number (*)</span>
                  <span v-if="french">Téléphone (*)</span>
                </label>
                <div class="input-group">
                  <div class="input-group-addon widget--round-0 w3-white w3-border-0 w3-border-bottom w3-xlarge widget--color">+</div>
                  <input type="text" class="w3-input widget--round-0" id="phone" placeholder="" v-model.trim="form.phone" required>
                </div>
              </div>
              <div class="form-group">
                <label for="company">
                  <span v-if="english">Country (*)</span>
                  <span v-if="french">Pays (*)</span>
                </label>
                <input type="text" class="w3-input widget--round-0" id="country-input" placeholder="">
              </div>
              <div class="form-group">
                <label for="company">
                  <span v-if="english">Company</span>
                  <span v-if="french">Société</span>
                </label>
                <input type="text" class="w3-input widget--round-0" id="company" placeholder="" v-model.trim="form.company">
              </div>
              <div class="form-group">
                <label for="message">Message (*)</label>
                <textarea name="name" rows="5" cols="8" class="w3-input" id="message" v-model.trim="form.message" required></textarea>
              </div>
              <button type="submit" class="btn widget--brand widget--radius-link" :disabled="loading">
                <span v-if="english && !loading">Subscribe</span>
                <span v-if="french && !loading">S'abonner</span>
                <span v-if="english && loading">Sending...</span>
                <span v-if="french && loading">Envoi en cours...</span>
              </button>
            </div>
          </form>
          <!-- Message sent -->
          <div v-else>
            <div class="panel primary--background widget--borderless">
              <div class="panel-body text-center">
                <span v-if="french">
                <span class="w3-xlarge font-weight-medium">👍 Votre message a été bien envoyé. 👍 <br>Merci</span>
                </span>
                <span v-if="english"><span class="w3-xlarge font-weight-medium">Your message has been sent. Thank you</span>
                </span>
              </div>
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
import {db} from '../../main'
import { languageMixin } from '../../mixins/language'

export default {
  mixins: [languageMixin],
  data: () => ({
    loading: false,
    messageSent: false,
    form: {
      name: '',
      email: '',
      phone: '',
      company: '',
      country: '',
      message: ''
    }
  }),
  computed: {
    ...mapGetters(['countryList'])
  },
  methods: {
    async onSubmit() {
      if (!this.form.name || !this.form.email || !this.form.phone || !this.form.country) return
      this.loading = true;
      await db.collection('messages').add(this.form)
        .then(() => {
          this.loading = false;
        })
        .catch((e) => {
          this.loading = false;
          console.log(e)
        })

        this.messageSent = true;
        this.form = {
          name: '',
          email: '',
          phone: '',
          company: '',
          country: '',
          message: ''
        }
    }
  },
  mounted() {
    this.messageSent = false;
    this.loading = false;
    var countryAutocomplete = places({
        appId: 'pl1JBGLSZ0E3',
        apiKey: 'e0fa3416080782e74c75e6da5a1c2df9',
        container: document.querySelector('#country-input'),
        templates: {
            value: function (suggestion) {
                return suggestion.name;
            }
        }
    }).configure({
        type: 'country',
        aroundLatLngViaIP: false,
    });
    //
    countryAutocomplete.on('change', (e) => {
      this.form.country = e.suggestion.name;
    });
  },
}
</script>

<style lang="css">
</style>
