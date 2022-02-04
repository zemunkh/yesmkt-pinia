import { useAuthStore } from '~/store/user'

export default async function ({ $pinia }) {
  if (process.client) {
    console.log('I am Called then');
    const store = useAuthStore($pinia)
    await store.nuxtServerInit()
  }
}
