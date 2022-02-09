import { createPersistedStatePlugin } from 'pinia-plugin-persistedstate-2'
import Cookies from 'js-cookie'
import cookie from 'cookie'
import { useTenantStore } from '~/store/tenant'

export default function ({ $pinia, ssrContext }) {

  if(process.server) {
    console.log('Req object Zee: ', ssrContext.req.headers.host);
    const theNick = getNick(ssrContext.req);
    console.log('The nick from req: ', theNick.nick);
    const store = useTenantStore($pinia)

    store.setNick(theNick.nick)
  }

  $pinia.use(
    createPersistedStatePlugin({
      storage: {
        getItem: (key) => {
          if (process.server) {
            const parsedCookies = cookie.parse(ssrContext.req.headers.cookie)
            return parsedCookies[key]
          } else {
            return Cookies.get(key)
          }
        },
        setItem: (key, value) =>
          Cookies.set(key, value, { expires: 30, secure: false }),
        removeItem: (key) => Cookies.remove(key),
      },
    }),
  )
}


const getNick = req => {
  const originHost = `${(req.headers.referer || req.headers['x-forwarded-host'] || req.headers.host || null)}`
  const isLocal = originHost.indexOf('localhost') > 0 ? true : false
  let nick = originHost.replace('https://', '').replace('http://', '').split('.')[0] || 'yesmkt'
  if (nick.indexOf('localhost') > -1 || !nick || nick === 'null') nick = 'yesmkt'
  return { nick, originHost, isLocal }
}
