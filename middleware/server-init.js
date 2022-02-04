import { useAuthStore } from '~/store/user'

export default async function ({ $pinia }) {
  const store = useAuthStore($pinia)
  await store.nuxtServerInit()
}
