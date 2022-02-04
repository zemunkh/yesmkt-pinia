import { useAuthStore } from "../store/user";
// import { useDeviceStore } from "../store/device";


export default async function ({app, route, redirect}){
  const store = useAuthStore()
  console.log('LOGGED IN: ', store.isLoggedIn);

  if (route.path !== '/LoginPage') {
    if (!store.isLoggedIn) {
      return redirect('/LoginPage')
    }
  } else {
    if (route.path === '/LoginPage') {
      if(store.isLoggedIn) {
        return redirect('/')
      } else {
        return redirect('/LoginPage')
      }
    }
  }
}
