<template>
  <div class="mt-8 space-y-6">
    <loader :isLoading="isActive"/>
    <error-msg header="Error" :errMessage="store.error" />
    <div class="rounded-md shadow-sm -space-y-px">
      <div>
        <label for="email-address" class="sr-only">Email address</label>
        <input id="email-address" v-model="loginForm.email" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
      </div>
      <div>
        <label for="password" class="sr-only">Password</label>
        <input id="password" v-model="loginForm.password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
      </div>
    </div>

    <div class="flex items-center justify-between">
      <div class="text-sm">
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
          Forgot your password?
        </a>
      </div>
    </div>

    <div>
      <button
        type="submit"
        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        @click="loginWithEmail()"
      >
        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
          <!-- Heroicon name: solid/lock-closed -->
          <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
          </svg>
        </span>
        Sign in
      </button>
    </div>
  </div>
</template>


<script>
import { ref, reactive, defineComponent, useRouter } from "@nuxtjs/composition-api";
import { useAuthStore } from "~/store/user";
import ErrorMsg from "../Tools/ErrorMsg.vue";
import Loader from "../Tools/Loader.vue";

export default defineComponent({
  components: { ErrorMsg, Loader },
  setup() {
    const isActive = ref(false)

    const store = useAuthStore();
    const { logInUser } = store;

    const router = useRouter();

    const loginForm = reactive({
      email: "",
      password: ""
    });

    const loginWithEmail = async () => {
      isActive.value = true
      await logInUser(loginForm.email, loginForm.password)
      router.push('/')
      isActive.value = false
    }

    return {
      loginForm,
      loginWithEmail,
      store,
      isActive
    }
  }
})

</script>
