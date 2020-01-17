import Main from '@/layouts/Main'

export default {
  path: '/',
  redirect: { name: 'main.home' },
  component: Main,
  children: [
    {
      path: 'home',
      name: 'main.home',
      component: () => import('@/views/main/Home.vue'),
      meta: { requireLogin: true },
      props: {
        title: 'Início',
        icon: 'mdi-home',
        hide: false
      }
    },
    {
      path: 'news',
      name: 'main.news',
      component: () => import('@/views/main/News.vue'),
      meta: { requireLogin: true },
      props: {
        title: 'Notícias',
        icon: 'mdi-newspaper-variant-outline',
        hide: false
      }
    },
    {
      path: 'timesheets',
      name: 'main.timesheets',
      component: () => import('@/views/main/Timesheets.vue'),
      meta: { requireLogin: true },
      props: {
        title: 'Espelho de ponto',
        icon: 'mdi-ticket-outline',
        hide: false
      }
    },
    {
      path: 'payslips',
      name: 'main.payslips',
      component: () => import('@/views/main/Payslips.vue'),
      meta: { requireLogin: true },
      props: {
        title: 'Holerites',
        icon: 'mdi-account-card-details-outline',
        hide: false
      }
    },
    {
      path: 'birthdays',
      name: 'main.birthdays',
      component: () => import('@/views/main/Birthdays.vue'),
      meta: { requireLogin: true },
      props: {
        title: 'Aniversariantes',
        icon: 'mdi-gift-outline',
        hide: false
      }
    }

  ]
}
