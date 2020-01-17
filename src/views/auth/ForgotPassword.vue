<template>
  <div>
    <v-card-text>
      <v-form>
        <v-text-field
          label="E-mail"
          :rules="$rules.email"
        />
      </v-form>
    </v-card-text>

    <v-card-actions class="d-flex justify-center">
      <v-btn @click="$router.go(-1)">
        Voltar
      </v-btn>
      <v-btn class="secondary">
        Enviar
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
