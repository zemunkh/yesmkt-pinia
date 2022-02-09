<template>
  <div>
    <nav-bar />
    <br>
    <br>
    <br>

    <div class="w-3/4 mx-auto overflow-hidden rounded-lg shadow-lg cursor-pointer">
      <img class="object-cover w-full h-96" :src="post.imageUrl" alt="Post Image"/>

      <div class="absolute top-32 left-0 px-6 py-4">
        <p class="leading-normal text-gray-100">{{ formatDate(post.createdOn) }}</p>
        <h4 class="mb-3 text-2xl font-semibold tracking-tight text-white">{{ post.title }}</h4>
        <br>
        <br>
        <br>
        <p class="leading-normal text-gray-100">{{ post.message }}</p>
      </div>
    </div>
    <br>
    <br>
    <div class="flex flex-col justify-center items-center cursor-pointer">
      <a href="/" class="group relative inline-flex items-center px-3 py-3">
        <svg-icon class="h-5 w-5 group-hover:text-indigo-700" name="circle-left" />
        <span class="ml-2 text-lg font-semibold"> Back to Home</span>
      </a>
    </div>
  </div>
</template>

<script>

import NavBar from "~/components/NavBar/NavBar.vue"
import { defineComponent, computed, useRoute } from "@nuxtjs/composition-api";
// import { useAuthStore } from "~/store/user";
import { usePostStore } from "~/store/post";

export default defineComponent ({
  components: { NavBar },
  setup() {

    const route = useRoute()

    const postStore = usePostStore()

    const id = computed(() => route.value.params.id)

    console.log('postId: ', id.value);

    const post = computed(() => {
     return postStore.posts.find(p => p.id === id.value)
    })

    console.log('Post: ', post.value.title);
    const formatDate = (date) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date.seconds * 1000).toLocaleDateString('en', options)
    }

    return {
      post,
      formatDate
    }
  }
})
</script>


<style>
.nuxt-content p {
  margin-bottom: 20px;
}
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.icon.icon-link {
  /* background-image: url('~assets/sprite/svg/world.svg'); */
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
</style>
