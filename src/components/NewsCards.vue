<template>
  <v-row
    align="center"
    justify="center"
  >
    <v-col
      v-for="item in news"
      :key="item.title"
      cols="12"
      md="4"
      sm="6"
    >
      <v-card
        dark
        elevation="10"
        color="blue darken-4"
        class="mx-auto"
        max-width="400"
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col cols="auto">
            <v-img
              class="white--text"
              height="300px"
              width="350"
              :src="item.pic"
            />
          </v-col>
        </v-row>
        <v-card-subtitle class="pb-0 font-weight-thin text-uppercase">
          {{ item.category }}
        </v-card-subtitle>

        <v-card-title class="font-weight-light text-uppercase">
          {{ item.title }}
        </v-card-title>

        <v-card-text class="font-weight-light text-uppercase">
          {{ item.date }}
        </v-card-text>

        <v-card-actions class="d-flex justify-end">
          <v-btn color="secondary">
            Ver mais
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-row justify="center">
      <v-col cols="auto">
        <v-btn
          elevation="15"
          dark
          color="red lighten-1"
        >
          mais notícias
        </v-btn>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
export default {
  name: 'NewsCards',
  data () {
    return {
      news: [
        {
          id: 1,
          category: 'institucional',
          title: 'Top 10 Australian beaches',
          date: 'abril 15/09/2019',
          pic: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
        },
        {
          id: 2,
          category: 'exihibition',
          title: 'Top 10 Random Things',
          date: 'abril 15/09/2019',
          pic: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
        },
        {
          id: 3,
          category: 'exihibition',
          title: 'Top 10 More Random Things',
          date: 'abril 15/09/2019',
          pic: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
        }
      ]
    }
  }
}
</script>
