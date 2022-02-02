<template>
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <img class="mx-auto h-24 w-auto" src="https://lh3.googleusercontent.com/oR_ZooUNxuGsIEiV5eTUtea_NOYi4-iQQjy6b2kv9rRS7xR1sETYdhH3W3v3EUzsSq8WyH6ulI2P2u6yqqKiKBRO5rAdLhv5kqdgA3Emlik3TuKfxW3lnL-RI-2jfvmH2TDkH504gA=w2400" alt="Workflow">
      <h2 class="mt-6 text-center text-6xl font-extrabold text-gray-900">
        {{ counterStore.counter }}
      </h2>
      <div class="flex rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700">
        <li class="w-full list-none">
          <button
            class="inline-block relative py-4 px-4 w-full text-3xl font-bold text-center hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            @click="increment()"
            >
            +
          </button>
        </li>
        <li class="w-full list-none">
          <button
            href="#"
            class="inline-block relative py-4 px-4 w-full text-3xl font-bold text-center hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
            @click="decrement()"
          >
          -
          </button>
        </li>
      </div>
    </div>
  </div>
</template>

<script>

  import { defineComponent} from '@nuxtjs/composition-api'
  import { useCounterStore } from '../store/counter'

  export default defineComponent({
    setup() {

      const counterStore = useCounterStore()

      const increment = () => counterStore.increment()
      const decrement = () => counterStore.decrement()


      return {
        counterStore,
        increment,
        decrement
      }
    }
  })
</script>
