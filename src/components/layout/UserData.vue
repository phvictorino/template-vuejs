<template>
  <div>
    <v-menu
      bottom
      left
      offset-y="15"
    >
      <template v-slot:activator="{ on }">
        <div
          class="menu-user"
          :class="hover ? 'hover-menu' : ''"
          v-on="on"
        >
          <v-avatar>
            <v-img
              aspect-ratio="1"
              :src="userPhoto"
            />
          </v-avatar>
          <span class="ml-3">
            <span
              v-show="$vuetify.breakpoint.smAndUp"
              class="mr-3"
            >
              Pedro H. Victorino
            </span>
            <v-icon>mdi-chevron-down</v-icon>
          </span>
        </div>
      </template>
      <v-list>
        <v-list-item
          link
          @click="logout"
        >
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Deslogar</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  computed: {
    userPhoto () {
      return require('@/assets/no-image.png')
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
.menu-user {
  cursor: pointer;
}
</style>
