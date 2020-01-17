<template>
  <div>
    <v-container>
      <v-row
        justify="center"
        align="center"
        class="fill-height"
      >
        <v-col
          cols="12"
          sm="8"
          md="6"
          lg="4"
        >
          <transition
            name="fade"
            mode="out-in"
          >
            <v-img
              aspect-ratio="2"
              :src="logo"
            />
          </transition>
          <v-card>
            <v-card-title class="primary white--text">
              {{ pageName }} - Área restrita
            </v-card-title>
            <transition
              name="fade"
              mode="out-in"
            >
              <router-view />
            </transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    logo () {
      return require('@/assets/logo.webp')
    },
    pageName () {
      console.log(this.$route)
      return this.$route.matched[this.$route.matched.length - 1].props.default.title
    }
  }
}
</script>

<style>

</style>
