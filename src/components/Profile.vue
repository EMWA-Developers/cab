<template lang="html">
  <div>
    <div class="panel panel-default shadow-sm widget--borderless mb-5" @click="gotoProfile(expert.id)">
      <div class="panel-body p-2 row">
        <!-- Picture -->
        <div class="col-xs-6 col-md-5">
            <img :src="expert.avatar" class="img-responsive profile-image rounded" :alt="expert.name" v-if="expert.avatar" @click="gotoProfile(expert.id)">
        </div>
        <!-- Info -->
        <div class="col-xs-6 col-md-7 py-1 pl-1 caption main-color">
          <!-- Name -->
          <h4 class="body-2 my-title brand-color" @click="gotoProfile(expert.id)">{{expert.name}}</h4>
          <!-- Grade -->
          <div>
            <i class="fa fa-legal mr-2"></i>
            <span v-if="english">{{expert.grade_en}}</span>
            <span v-if="french">{{expert.grade}}</span>
          </div>
          <div class="text-capitalize">
            <i class="glyphicon glyphicon-map-marker mr-1"></i>
            {{expert.location}} <span v-if="expert.location_2"> | {{expert.location_2}}</span> <span v-if="expert.location_3"> | {{expert.location_3}}</span>
          </div>
          <div>
            <i class="glyphicon glyphicon-earphone mr-1"></i>
            {{expert.phone}} <span v-if="expert.phone_2"> | {{expert.phone_2}}</span> <span v-if="expert.phone_3"> | {{expert.phone_3}}</span>
          </div>
          <div>
            <i class="glyphicon glyphicon-envelope mr-1"></i> {{expert.email}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['expert'],
  methods: {
    gotoProfile(id) {
      this.$router.push(`/${id}`)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
