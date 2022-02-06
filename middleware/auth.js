import { useAuthStore } from "../store/user";

export default async function ({app, route, redirect }){
  const store = useAuthStore()
  // await store.initializeAuthListener()
  console.log('LOGGED IN: ', store.isLoggedIn);

  if (route.path !== '/LoginPage') {
    if (!store.isLoggedIn) {
      return redirect('/LoginPage')
    }
  } else {
    if (route.path === '/LoginPage') {
      if(store.isLoggedIn) {
        return redirect('/')
      }
    }
  }
}
