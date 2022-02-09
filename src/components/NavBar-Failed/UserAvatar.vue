<template>
  <div>
    <img
      :src="avatar"
      :alt="name"
      class="rounded-full block h-auto w-full max-w-full dark:bg-gray-800"
      :class="lightBgStyle"
    >
  </div>
</template>

<script>
import { useDeviceStore } from "~/store/device";
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    username: {
      type: String,
      default: null
    },
  },
  setup(props) {
    const store = useDeviceStore()

    const lightBgStyle = computed(() => store.lightBgStyle)

    const avatar = computed(() => props.username
      ? `https://avatars.dicebear.com/api/avataaars/john-doe.svg`
      :  `https://avatars.dicebear.com/api/avataaars/john-doe.svg`)

    const name = computed(() => props.username ? props.username : store.userName)

    return {
      lightBgStyle,
      avatar,
      name
    }
  }
})


</script>
