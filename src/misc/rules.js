import Vue from 'vue'

Vue.prototype.$rules = {
  required: [v => !!String(v) || 'Campo obrigatório'],
  email: [v => /.+@.+/.test(v) || 'E-mail inválido'],
  confirmPassword (password1, password2) {
    return [() => password1 === password2 || 'Senhas diferentes']
  }
  // cpf: [v => isValidCpf(v) || 'CPF inválido']
}
