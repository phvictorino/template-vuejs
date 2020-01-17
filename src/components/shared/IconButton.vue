<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <v-btn
        icon
        v-on="on"
        @click.stop="$emit('click')"
      >
        <v-icon :color="iconColor">
          {{ icon }}
        </v-icon>
      </v-btn>
    </template>
    <span>{{ text }}</span>
  </v-tooltip>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    iconColor: {
      type: String,
      default: '#FFF'
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>
