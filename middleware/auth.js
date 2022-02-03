import { useAuthStore } from "../store/user";

export default function ({app, route, redirect}){
  const store = useAuthStore();
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
  // if (route.path !== '/LoginPage') {
  //   // we are on a protected route
  //   if(!fb.auth.currentUser) {
  //     // take them to sign in page
  //     return redirect('/LoginPage')
  //   }
  // } else if (route.path === '/LoginPage') {
  //   if(!fb.auth.currentUser) {
  //     // leave them on the sign in page
  //   } else {
  //     return redirect('/')
  //   }
  // }
}
