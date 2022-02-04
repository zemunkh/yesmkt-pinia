<template>
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <img class="mx-auto h-24 w-auto" :src="require('../assets/images/yes_logo.png')" alt="Workflow">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Hello Yes Marketing
        </h2>
        <br><br>
        <div class="flex rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700">
          <li class="w-full list-none">
            <button
              href="#"
              class="inline-block relative py-4 px-4 w-full text-sm font-medium text-center dark:bg-gray-800 dark:text-blue-500"
              :class="{'text-gray-500 rounded-t-lg': openTab !== 1, 'text-blue-600 bg-gray-100 rounded-t-lg active': openTab === 1}"
              @click="toggleTabs(1)"
              >Sign In
            </button>
          </li>
          <li class="w-full list-none">
            <button
              href="#"
              class="inline-block relative py-4 px-4 w-full text-sm font-medium text-center hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
              :class="{'text-gray-500 rounded-t-lg': openTab !== 2, 'text-blue-600 bg-gray-100 rounded-t-lg active': openTab === 2}"
              @click="toggleTabs(2)"
            >Register
            </button>
          </li>
        </div>
      </div>

      <div :class="{'hidden': openTab !== 1, 'block': openTab === 1}">
        <LoginForm/>
      </div>
      <div :class="{'hidden': openTab !== 2, 'block': openTab === 2}">
        <SignupForm/>
      </div>
    </div>
  </div>
</template>


<script>
import { ref, defineComponent } from "@nuxtjs/composition-api";
import LoginForm from "~/components/Forms/LoginForm.vue";
import SignupForm from "~/components/Forms/SignupForm.vue";

export default defineComponent({
    setup() {
        const openTab = ref(1);
        const toggleTabs = (tabNumber) => {
          openTab.value = tabNumber;
          console.log('Value: ', openTab.value);
        };
        return {
            openTab,
            toggleTabs,
        };
    },
    components: { LoginForm, SignupForm }
})

</script>
