<template>
  <v-app>
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view />
    </transition>
    <footer-app />
  </v-app>
</template>

<script>

import Footer from '@/components/layout/Footer'
export default {
  name: 'App',
  components: {

    'footer-app': Footer
  }

}
</script>
