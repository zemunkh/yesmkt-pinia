<template>
  <div>
    <nav-bar />
    <br>
    <br>
    <NewPost />

    <ul class="flex flex-wrap">
      <li
        v-for="post of storePost.posts"
        :key="post.id"
        class="xs:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card"
      >
        <NuxtLink
          :to="{ name: 'post-id', params: { id: post.id } }"
          class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
        >
          <img
            v-if="post.imageUrl"
            class="h-48 xxlmin:w-1/2 xxlmax:w-full object-cover"
            :src="post.imageUrl"
          />

          <div
            class="p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full"
          >
            <h2 class="font-bold">{{ post.title }}</h2>
            <p class="font-bold text-gray-600 text-sm">
              {{ post.message }}
            </p>
          </div>
        </NuxtLink>
      </li>
    </ul>

    <Counter />
  </div>
</template>

<script>
import Counter from "~/components/Counter.vue";
import NavBar from "~/components/NavBar/NavBar.vue"
import NewPost from "~/components/Forms/NewPost.vue";
import { ref, onMounted } from "@nuxtjs/composition-api";
import { useAuthStore } from "~/store/user";
import { usePostStore } from "~/store/post";
import ErrorMsg from "../components/Tools/ErrorMsg.vue";
import Loader from "../components/Tools/Loader.vue";


export default {
  name: "IndexPage",
  components: { Counter, NavBar, NewPost },
  setup() {

    const storeUser = useAuthStore();
    const storePost = usePostStore();

    onMounted(async () => {
      console.log('Userid: ', storeUser.user.uid);
      storePost.loadPosts(storeUser.user.uid)
    })

    return {
      storeUser,
      storePost,
    }
  }
}
</script>


<style class="postcss">
.article-card {
  border-radius: 8px;
}
.article-card a {
  background-color: #fff;
  border-radius: 8px;
}
.article-card img div {
  border-radius: 8px 0 0 8px;
}
</style>
