// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // app: {
  //   pageTransition: { name: 'page', mode: 'out-in' }
  // },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  components: {
    global: true,
    dirs: ['~/components','~/pages/layouts']
  },
  app: {
    head:{
      title: "Naseem",
      meta: [
        {
          name: 'description',
          content: 'Everything is under control'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'
        }
      ]
    }
  }
})
