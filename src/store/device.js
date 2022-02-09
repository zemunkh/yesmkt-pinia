// import { defineStore } from "pinia";
// import { darkModeKey, styleKey } from '@/config.js'

// export const useDeviceStore = defineStore('device', {
//   state: () => ({
//     lightBorderStyle: '',
//     isFullScreen: true,
//     darkMode: false,
//     navBarItemLabelStyle: '',
//     navBarItemLabelHoverStyle: '',
//     navBarItemLabelActiveColorStyle: '',
//     navBarMenuListUpperLabelStyle: '',

//     userName: 'Zee',
//     userEmail: null,
//     userAvatar: null,
//   }),
//   actions: {
//     darkMode(payload) {
//       const value = payload !== null ? payload : !state.darkMode
//       if(process.client) {
//         document.documentElement.classList[value ? 'add' : 'remove']('dark')

//         localStorage.setItem(darkModeKey, value ? '1' : '0')
//       }

//       this.darkMode = value
//     },
//     fullScreenToggle(value) {
//       this.isFullScreen = value
//       if(process.client) {
//               document.documentElement.classList[value ? 'add' : 'remove']('full-screen')
//       }

//     },

//   },
//   getters: {

//   }
// })
