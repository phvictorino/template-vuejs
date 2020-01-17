<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      dark
      color="secondary"
      clipped
    >
      <menu-items />
    </v-navigation-drawer>
    <v-app-bar
      app
      color="primary"
      elevation="3"
      dark
      clipped-left
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <logo class="ml-3" />
      <v-spacer />
      <user-data />
    </v-app-bar>

    <v-content id="content">
      <v-container fluid>
        <transition name="slide-fade">
          <router-view />
        </transition>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import MenuItems from '@/components/layout/MenuItems'
import Logo from '@/components/layout/Logo'
import UserData from '@/components/layout/UserData'

export default {
  components: {
    MenuItems,
    Logo,
    UserData
  },
  data () {
    return {
      drawer: false
    }
  },
  methods: {
    logout () {
      this.$router.push({ name: 'auth.login' })
    }
  }
}
</script>

<style scoped>
#content {
  margin-bottom: 120px;
}

</style>
