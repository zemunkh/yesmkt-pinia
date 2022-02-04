<template>
  <div>
    <hr
      :class="[lightBorderStyle, navBar ? 'hidden lg:block lg:my-0.5 dark:border-gray-700' : 'my-6 -mx-6 dark:border-gray-800']"
      class="border-t"
    >
  </div>
</template>


<script>
import { useDeviceStore } from "~/store/device";
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    navBar: Boolean
  },
  setup() {
    const store = useDeviceStore()

    const lightBorderStyle = computed(() => store.lightBorderStyle)

    return {
      lightBorderStyle
    }
  }
})


</script>
