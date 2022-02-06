
import { defineStore } from "pinia";
import {
  addItem,
  getItem,
  getItemListByQuery,
  Timestamp
} from "../utils/firestoreService";

export const usePostStore = defineStore('postStore', {

  // convert to a function
  state: () => ({
    posts: [],
    error: null,
  }),
  getters: {
    isAvailable: (state) => state.posts !== null,
    userError: (state) => state.error,
  },
  actions: {
    async loadPosts(userId) {
      try {
        const data = await getItemListByQuery('posts', 'userId', userId)
        this.posts = data ? data: null
        this.error = null;
        return this.posts
      } catch (e) {
        this.posts = []
        this.error = e;
        return false;
      }
    },
    async addPost(payload) {
      try {
        const data = await addItem('posts', payload)
        this.error = null;
        return data.id;
      } catch (e) {
        this.error = e;
        return false;
      }
    },
    async getPost(id) {
      try {
        const snap = await getItem('posts', id)
        this.error = null
        return snap.doc()
      } catch (e) {
        this.error = e;
        return false;
      }
    }
  },
});
