import { defineStore, nick } from 'pinia'

export const useTenantStore = defineStore('tenant', {
  state: () => ({
    tenantName: '',
  }),
  actions: {
    setNick(nick) {
      this.tenantName = nick
    },
  },
  getters: {
    getTenantName: (state) => state.tenantName
  }
})
