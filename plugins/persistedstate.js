import { createPersistedStatePlugin } from 'pinia-plugin-persistedstate-2'
import Cookies from 'js-cookie'
import cookie from 'cookie'

export default function ({ $pinia, ssrContext /* Nuxt 3 example */ }) {
  $pinia.use(
    // MRS ... Nuxt defaults to SSR, and Pinia defaults to localStorage, which doesn't exist in SSR
    // so I believe you have to include this code to this to work in SSR
    // https://github.com/iendeavor/pinia-plugin-persistedstate-2#readme
    createPersistedStatePlugin({
      storage: {
        getItem: (key) => {
          // See https://nuxtjs.org/guide/plugins/#using-process-flags
          if (process.server) {
            const parsedCookies = cookie.parse(ssrContext.req.headers.cookie)
            return parsedCookies[key]
          } else {
            return Cookies.get(key)
          }
        },
        // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
        setItem: (key, value) =>
          Cookies.set(key, value, { expires: 30, secure: false }),
        removeItem: (key) => Cookies.remove(key),
      },
    }),
  )
}
