<template>
  <div>
    <button
      v-if="!isLoading"
      @click="clickEvent"
      class="group -ml-px relative inline-flex items-center px-3 py-3 border border-indigo-300 text-sm leading-5 font-medium rounded-r-md text-white bg-indigo-700 hover:text-indigo-700 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-indigo-300 active:bg-gray-100 active:text-indigo-700 transition ease-in-out duration-150"
    >

      <svg-icon class="h-5 w-5 group-hover:text-indigo-700" :name="iconName" />
      <!-- <svg
        class="text-white h-5 w-5 group-hover:text-indigo-700"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
        />
      </svg> -->
      <span class="ml-2 text-sm font-semibold">{{ buttonText }}</span>
    </button>
    <button
      v-else
      class="group -ml-px relative inline-flex items-center px-3 py-3 border border-indigo-300 text-sm leading-5 font-medium rounded-r-md text-white bg-indigo-700 hover:text-indigo-700 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-indigo-300 active:bg-gray-100 active:text-indigo-700 transition ease-in-out duration-150"
    >
      <svg
        class="text-white h-5 w-5 group-hover:text-indigo-700 animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
        />
      </svg>
      <span class="ml-2 text-sm font-semibold">{{ loadingText }}</span>
    </button>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    isLoading: {
      type: Boolean,
      default: false
    },
    buttonText: {
      type: String,
      default: 'Post'
    },
    loadingText: {
      type: String,
      default: 'Posting'
    },
    iconName: {
      type: String,
      default: 'circle-up'
    }
  },
  setup (props, { emit }) {

    const clickEvent = () => emit('clickEvent', props.buttonText);

    return {
      clickEvent
    }
  }
})

</script>
