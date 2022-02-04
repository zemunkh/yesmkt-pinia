<template>

  <div class="mt-8 space-y-6">
    <loader :isLoading="isActive"/>
    <error-msg header="Error" :errMessage="store.error" />
    <div class="rounded-md shadow-sm -space-y-px">
      <div>
        <label for="first-name" class="sr-only">Fist name</label>
        <input id="first-name" v-model="signUpForm.firstname" name="first name" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="John">
      </div>
      <div>
        <label for="last-name" class="sr-only">Last name</label>
        <input id="last-name" v-model="signUpForm.lastname" name="Last name" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Doe">
      </div>
      <div>
        <label for="phone" class="sr-only">Phone</label>
        <input id="phone" v-model="signUpForm.phone" name="Phone number" type="number" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="9999-8888">
      </div>
      <div>
        <label for="email-address-signup" class="sr-only">Email address</label>
        <input id="email-address-signup" v-model="signUpForm.email" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
      </div>
      <div>
        <label for="password-signup" class="sr-only">Password</label>
        <input id="password-signup" v-model="signUpForm.password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
      </div>
    </div>

    <div>
      <button
        type="submit"
        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        @click="signUpWithEmail()"
      >
        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
          <!-- Heroicon name: solid/lock-closed -->
          <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
          </svg>
        </span>
        Register
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

        const router = useRouter();

        const signUpForm = reactive({
          email: "",
          password: "",
          firstname: "",
          lastname: "",
          phone: 0
        });
        const signUpWithEmail = async () => {
          isActive.value = true
          await store.createAccount(signUpForm.email, signUpForm.password, signUpForm.firstname, signUpForm.lastname, signUpForm.phone);
          router.push('/');
          isActive.value = false
        };
        return {
          signUpForm,
          signUpWithEmail,
          store,
          isActive
        };
    },
})

</script>
