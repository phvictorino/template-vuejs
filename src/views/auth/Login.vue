<template>
  <div>
    <v-card-text class="pt-5">
      <v-form
        ref="form"
        @keyup.native.enter="submit"
      >
        <v-text-field
          label="E-mail"
          type="email"
          :rules="$rules.email"
        />
        <v-text-field
          label="Senha"
          type="password"
          :rules="$rules.required"
        />
      </v-form>
      <div class="text-center my-2">
        <v-btn
          text
          color="blue"
          :to="{name: 'auth.forgotPassword'}"
        >
          Esqueci minha senha
        </v-btn>
      </div>
    </v-card-text>
    <v-card-actions class="d-flex justify-center">
      <v-btn
        color="secondary"
        @click="submit"
      >
        Enviar
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script>
export default {

  methods: {
    async submit () {
      // if (this.$refs.form.validate()) {
      this.$router.push({ name: 'main.home' })
      // }
    }
  }
}
</script>

<style>

</style>
