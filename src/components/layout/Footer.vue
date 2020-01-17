<template>
  <v-footer
    absolute
    padless
    class="font-weight-medium"
    color="secondary"
  >
    <v-col
      class="text-center white--text pb-0"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>EMPRESA</strong>
    </v-col>
    <v-col
      class="text-center white--text py-0"
      cols="12"
    >
      Endereço
    </v-col>
    <v-col
      class="text-center white--text py-0"
      cols="12"
    >
      Bairro | Cep
    </v-col>
    <v-col
      class="text-center white--text pt-0"
      cols="12"
    >
      Campo Grande, MS
    </v-col>
  </v-footer>
</template>

<script>
export default {

}
</script>

<style>

</style>
