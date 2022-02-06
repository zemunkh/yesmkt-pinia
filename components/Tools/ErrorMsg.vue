<template>
  <div v-if="!!errMessage" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
    <strong class="font-bold">{{ header }}:</strong>
    <span class="block sm:inline">{{ errMessage }}</span>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  props: {
    header: String,
    errMessage: String
  },
  setup() {

  }
})
</script>
