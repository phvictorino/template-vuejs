<template>
  <v-container fluid>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        md="12"
        sm="12"
      >
        <carousel />
        <session-title title="notícias" />
        <news-cards />
        <session-title title="fotos" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Carousel from '@/components/Carousel'
import SessionTitle from '@/components/SessionTitle'
import NewsCards from '@/components/NewsCards'

export default {
  name: 'Home',
  components: {
    'carousel': Carousel,
    'session-title': SessionTitle,
    'news-cards': NewsCards
  }
}
</script>
