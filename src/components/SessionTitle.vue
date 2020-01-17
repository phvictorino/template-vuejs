<template>
  <v-row class="mt-5 pt-5">
    <v-col cols="4">
      <div
        id="newsTitle"
        class="mb-2"
      >
        <h2 class="text-uppercase font-weight-light pl-1">
          {{ title }}
        </h2>
      </div>
      <v-divider color="red" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'SessionTitle',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
    #newsTitle {
        border-left: 3px solid grey;
    }
</style>
