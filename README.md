# Projeto de template para VueJS

## Estrutura

- Criado com Vue CLI 3
- Vuetify 2 (configuração de cores no arquivo *src/plugins/vuetify* )
- Layouts separados (área para autentiação e área de autenticado)
- Regras para validação de form injetado no Prototype do Vue (*src/misc/rules.js*)
- Vuex com módulo de autenticação criado (*Obs: { namespaced: true }* )
- Efeito de transições entre as páginas e os layouts (*src/styles/transitions.css*)
- Views criadas como exemplo separado por layout

## Após baixar, instalar dependências
```bash
npm install
```

### Para subir o servidor em modo de desenvolvimento com HOT RELOAD
```bash
npm run serve
```

### Para fazer build para produção
```bash
npm run build
```

### Para rodar o ESLint
```bash
npm run lint
```
