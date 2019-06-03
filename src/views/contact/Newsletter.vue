<template lang="html">
  <div class="">
    <!--  -->
    <div class="widget--fantasy">
      <div class="widget--fantasy-title">
        <h1 class="m-0">
          <strong v-if="french">S'abonner à la newsletter</strong>
          <strong v-if="english">Subscribe to the newsletter</strong>
        </h1>
      </div>
    </div>
    <!--  -->
    <section class="container mt-5">
      <div class="row">
        <div class="col-xs-12 col-md-8 pr-md-5">
          <form @submit.prevent="onSubscribe" class="panel secondary--background widget--card-content widget--borderless" v-if="!formSent">
            <div class="panel-body p-5">
              <div class="form-group">
                <label for="name">
                  <span v-if="english">Your name (*)</span>
                  <span v-if="french">Votre nom (*)</span>
                </label>
                <input type="text" class="w3-input widget--round-0" id="name" placeholder="" v-model.trim="form.name" required>
              </div>
              <div class="form-group">
                <label for="phone">
                  <span v-if="english">Phone number (*)</span>
                  <span v-if="french">Téléphone (*)</span>
                </label>
                <input type="text" class="w3-input widget--round-0 w-100" id="phone" placeholder="+(1) 2129220040" v-model.trim="form.phone" required>
              </div>
              <div class="form-group">
                <label for="company">
                  <span v-if="english">Country (*)</span>
                  <span v-if="french">Pays (*)</span>
                </label>
                <input type="text" class="w3-input widget--round-0" id="country-input" placeholder="" required>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">
                  <span v-if="english">Email address (*)</span>
                  <span v-if="french">Adresse email (*)</span>
                </label>
                <input type="email" class="w3-input widget--round-0" id="exampleInputEmail1" placeholder="" v-model.trim="form.email" required>
              </div>
              <button type="submit" class="btn widget--brand widget--radius-link" :disabled="loading">
                <span v-if="english && !loading">Subscribe</span>
                <span v-if="french && !loading">S'abonner</span>
                <span v-if="english && loading">Wait...</span>
                <span v-if="french && loading">Patienter...</span>
              </button>
            </div>
          </form>
          <div v-else>
            <div class="panel primary--background widget--borderless">
              <div class="panel-body text-center">
                <span v-if="french"><span class="w3-xlarge font-weight-medium">🥳 Félicitations 🥳</span> <br>Vous recevrez mensuellement nos dernières actualités.</span>
                <span v-if="english"><span class="w3-xlarge font-weight-medium">Congratulations 🥳</span><br>You will get our latest news.</span>
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
import { languageMixin } from '../../mixins/language'
import {db} from '../../main'

export default {
  mixins: [languageMixin],
  data: () => ({
    loading: false,
    formSent: false,
    form: {
      name: '',
      email: '',
      phone: '',
      country: ''
    }
  }),
  methods: {
    onSubscribe() {
      if (!this.form.name || !this.form.email || !this.form.phone || !this.form.country) return;
      this.loading = true;
      db.collection('newsletters').add(this.form).
      then(() => {
        this.loading = false;
        this.formSent = true;
        this.form = {
          name: '',
          email: '',
          phone: '',
          country: ''
        }
      })
      .catch((e) => {
        this.loading = false;
        console.log(e);
      })
    }
  },
  mounted() {
    this.formSent = false;
    this.loading = false;
    var placesAutocomplete = places({
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
    placesAutocomplete.on('change', (e) => {
      this.form.country = e.suggestion.name;
    });
  },
}
</script>

<style lang="css">
</style>
